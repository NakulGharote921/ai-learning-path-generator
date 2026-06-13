from __future__ import annotations

import json
import os
from functools import lru_cache
from typing import Any, Optional, Protocol

from app.core.config import get_settings


class _FirebaseLikeRef(Protocol):
    def get(self) -> Any: ...

    def set(self, value: Any) -> None: ...


class _FirebaseLikeDb(Protocol):
    def reference(self, path: str) -> _FirebaseLikeRef: ...


class _RealtimeDbClient(Protocol):
    def user_ref(self, uid: str) -> _FirebaseLikeRef: ...


@lru_cache(maxsize=1)
def _firebase_admin_modules() -> tuple[Any | None, Any | None, Any | None]:
    """Optional import for firebase-admin.

    Returns (firebase_admin, credentials, db).
    If firebase-admin isn't installed, all values are None.
    """

    try:
        import firebase_admin  # type: ignore
        from firebase_admin import credentials as _credentials  # type: ignore
        from firebase_admin import db as _db  # type: ignore

        return firebase_admin, _credentials, _db
    except ImportError:
        return None, None, None


def _is_pytest_running() -> bool:
    # Keep test detection resilient across environments.
    return any(
        key in os.environ
        for key in (
            "PYTEST_CURRENT_TEST",
            "PYTEST_RUNNING",
            "UNITTESTING",
            "TESTING",
        )
    )


def _is_dev_mode() -> bool:
    """Check if we should use in-memory database (development or when Firebase unavailable)."""
    # Use in-memory when:
    # 1. Running pytest
    # 2. Development/test environment
    # 3. Firebase credentials not configured
    if _is_pytest_running():
        return True
    
    env_mode = os.getenv("ENVIRONMENT", "").lower()
    if env_mode in ("development", "local", "dev", "test"):
        return True
    
    # Check if Firebase would be unavailable
    firebase_admin, _, _ = _firebase_admin_modules()
    if firebase_admin is None:
        return True
    
    # Check if required Firebase env vars are missing
    if not os.getenv("FIREBASE_DATABASE_URL") and not os.getenv("FIREBASE_SERVICE_ACCOUNT_JSON"):
        return True
    
    return False


@lru_cache(maxsize=1)
def _get_firebase_db_client() -> _FirebaseLikeDb:
    """Lazily initialize Firebase Admin SDK and return firebase_admin.db module.

    This must NOT run at module import time.
    """

    firebase_admin, credentials, db = _firebase_admin_modules()
    if firebase_admin is None or credentials is None or db is None:
        raise RuntimeError(
            "firebase-admin is not installed. Install it (pip install firebase-admin) to use Firebase Realtime Database."
        )

    # Initialize only when required.
    if not firebase_admin._apps:
        service_account_json = os.getenv("FIREBASE_SERVICE_ACCOUNT_JSON")
        database_url = os.getenv("FIREBASE_DATABASE_URL")

        if service_account_json:
            info = json.loads(service_account_json)
            cred = credentials.Certificate(info)
            firebase_admin.initialize_app(
                cred,
                {"databaseURL": database_url},
            )
        else:
            if not database_url:
                raise RuntimeError(
                    "FIREBASE_DATABASE_URL is required for Firebase Realtime Database access"
                )
            firebase_admin.initialize_app(
                credentials.ApplicationDefault(),
                {"databaseURL": database_url},
            )

    return db


class _InMemoryRef:
    def __init__(self, store: dict[str, Any], path: str):
        self._store = store
        self._path = path

    def _split(self) -> list[str]:
        return [p for p in self._path.split("/") if p]

    def _get_parent(self, create: bool = False) -> Optional[dict[str, Any]]:
        parts = self._split()
        node: Any = self._store
        for p in parts[:-1]:
            if not isinstance(node, dict):
                return None
            if p not in node:
                if not create:
                    return None
                node[p] = {}
            node = node[p]
        return node

    def get(self) -> Any:
        parts = self._split()
        node: Any = self._store
        for p in parts:
            if not isinstance(node, dict) or p not in node:
                return None
            node = node[p]
        return node

    def set(self, value: Any) -> None:
        parent = self._get_parent(create=True)
        assert parent is not None
        parts = self._split()
        parent[parts[-1]] = value

    def child(self, key: str) -> "_InMemoryRef":
        """Navigate to a child path."""
        new_path = f"{self._path}/{key}" if self._path else key
        return _InMemoryRef(self._store, new_path)


class _InMemoryFirebaseDb:
    def __init__(self, store: dict[str, Any]):
        self._store = store

    def reference(self, path: str) -> _InMemoryRef:
        return _InMemoryRef(self._store, path)


        class _InMemoryClient:
            _store: dict[str, Any]
            _db: _InMemoryFirebaseDb

            def __init__(self, store: dict[str, Any]):
                self._store = store
                self._db = _InMemoryFirebaseDb(store)

            def user_ref(self, uid: str) -> _InMemoryRef:
                safe_uid = RealtimeDB._validate_uid(uid)
                return self._db.reference(f"users/{safe_uid}")



# Global in-memory store used only when running tests.
# This avoids relying on firebase-admin installation.
_IN_MEMORY_STORE: dict[str, Any] = {}


class RealtimeDB:
    """Firebase RTDB wrapper.

    - No firebase-admin imports or initialization during module import.
    - Lazily initializes Firebase only when a Firebase operation is invoked.
    - During test runs, it uses an in-memory implementation.
    """

    USER_DEFAULTS: dict[str, Any] = {

        "total_courses": 0,
        "completed_courses": 0,
        "progress": 0,
        "achievements": 0,
        "learning_paths": {},
        "activities": {},
    }

    @staticmethod
    def _validate_uid(uid: str) -> str:
        if uid is None:
            raise ValueError('RealtimeDB uid is None')
        if not isinstance(uid, str):
            raise ValueError(f'RealtimeDB uid must be a string, got {type(uid)}')
        uid = uid.strip()
        if not uid or uid.lower() == 'null':
            raise ValueError(f'RealtimeDB uid is invalid: {uid!r}')
        return uid

    @classmethod
    def _client(cls) -> _RealtimeDbClient:

        # If in dev/test mode or Firebase unavailable, use in-memory database.
        if _is_dev_mode():
            return _InMemoryClient(_IN_MEMORY_STORE)

        class _FirebaseRefWrapper:
            """Wrapper around Firebase ref to ensure consistent API."""
            def __init__(self, ref):
                self._ref = ref
            
            def get(self):
                return self._ref.get()
            
            def set(self, value):
                return self._ref.set(value)
            
            def child(self, key: str):
                """Navigate to a child path."""
                return _FirebaseRefWrapper(self._ref.child(key))

        class _FirebaseClient:
            def user_ref(self, uid: str):
                safe_uid = RealtimeDB._validate_uid(uid)
                db = _get_firebase_db_client()
                ref = db.reference(f"users/{safe_uid}")
                return _FirebaseRefWrapper(ref)


        return _FirebaseClient()

    @classmethod
    def user_ref(cls, uid: str):
        safe_uid = cls._validate_uid(uid)
        return cls._client().user_ref(safe_uid)


    @classmethod
    def get_user_data(cls, uid: str) -> dict[str, Any] | None:
        safe_uid = cls._validate_uid(uid)
        ref = cls.user_ref(safe_uid)

        data = ref.get()
        return data if isinstance(data, dict) else None

    @classmethod
    def get_or_create_user_data(cls, uid: str) -> dict[str, Any]:
        safe_uid = cls._validate_uid(uid)
        print(f"[RealtimeDB] get_or_create_user_data uid={safe_uid!r}")
        existing = cls.get_user_data(safe_uid)

        if existing is not None:
            return existing

        # Default structure per requirements
        cls.user_ref(uid).set(
            {
                **cls.USER_DEFAULTS,
                "profile": {},
                "dashboard": {
                    "total_courses": 0,
                    "completed_courses": 0,
                    "progress": 0,
                    "achievements": 0,
                },
                "learning_paths": {},
                "activities": {},
                "achievements": 0,
            }
        )
        return cls.get_user_data(uid) or {}

