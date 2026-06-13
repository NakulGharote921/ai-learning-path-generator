import pytest
import pytest_asyncio
from httpx import AsyncClient, ASGITransport


from app.main import app as fastapi_app
from app.core.security import AuthenticatedUser
from app.services.realtime_db import RealtimeDB


class FakeRTDBRef:
    def __init__(self, store: dict, path: str):
        self._store = store
        self._path = path

    def child(self, key: str):
        return FakeRTDBRef(self._store, f"{self._path}/{key}")

    def _split(self):
        return [p for p in self._path.split("/") if p]

    def _get_parent(self, create: bool = False):
        parts = self._split()
        node = self._store
        for p in parts[:-1]:
            if p not in node:
                if not create:
                    return None
                node[p] = {}
            node = node[p]
        return node

    def get(self):
        parts = self._split()
        node = self._store
        for p in parts:
            if not isinstance(node, dict) or p not in node:
                return None
            node = node[p]
        return node

    def set(self, value):
        parent = self._get_parent(create=True)
        parts = self._split()
        parent[parts[-1]] = value


class FakeRealtimeDB:
    store: dict = {}

    @classmethod
    def user_ref(cls, uid: str):
        return FakeRTDBRef(cls.store, f"users/{uid}")

    @classmethod
    def get_user_data(cls, uid: str):
        ref = cls.user_ref(uid)
        data = ref.get()
        return data if isinstance(data, dict) else None

    @classmethod
    def get_or_create_user_data(cls, uid: str):
        existing = cls.get_user_data(uid)
        if existing is not None:
            return existing
        cls.user_ref(uid).set(RealtimeDB.USER_DEFAULTS)
        # bootstrap dashboard container too (tests expect zeros)
        cls.store.setdefault("users", {})
        cls.store["users"].setdefault(uid, {})
        return RealtimeDB.USER_DEFAULTS.copy()


@pytest_asyncio.fixture(scope="function")
async def async_client(monkeypatch):
    FakeRealtimeDB.store = {}
    monkeypatch.setattr("app.services.realtime_db.RealtimeDB", FakeRealtimeDB)

    async def _get_test_current_user():
        return fastapi_app.state.test_user

    fastapi_app.dependency_overrides = {}
    fastapi_app.dependency_overrides.clear()  # type: ignore[attr-defined]

    from app.api.dependencies import get_current_user

    fastapi_app.dependency_overrides[get_current_user] = _get_test_current_user

    transport = ASGITransport(app=fastapi_app)
    async with AsyncClient(transport=transport, base_url="http://test") as ac:
        yield ac


def _fake_user(clerk_user_id: str, email: str = "test@example.com") -> AuthenticatedUser:
    return AuthenticatedUser(user_id=clerk_user_id, clerk_user_id=clerk_user_id, email=email)


@pytest.mark.asyncio
async def test_case_1_new_account_empty_dashboard(async_client):
    ac = async_client

    user_uid = "uid-new-1"
    fastapi_app.state.test_user = _fake_user(user_uid)

    resp = await ac.get("/api/v1/user/dashboard")
    assert resp.status_code == 200
    data = resp.json()

    assert data["skill_score"] == 0
    assert data["weekly_goals_completed"] == 0
    assert data["weekly_goals_total"] == 0
    assert data["learning_progress"] == 0
    assert data["streak_days"] == 0
    assert data["learning_paths"] == []


@pytest.mark.asyncio
async def test_case_2_persistence_between_sessions(async_client):
    ac = async_client

    user_uid = "uid-user-A"

    # First login creates defaults
    fastapi_app.state.test_user = _fake_user(user_uid)
    resp1 = await ac.get("/api/v1/user/dashboard")
    assert resp1.status_code == 200

    # Write some data directly to fake RTDB
    FakeRealtimeDB.store.setdefault("users", {}).setdefault(user_uid, {})
    FakeRealtimeDB.store["users"][user_uid].setdefault("dashboard", {})
    FakeRealtimeDB.store["users"][user_uid]["dashboard"].update(
        {"total_courses": 5, "completed_courses": 2, "progress": 40, "streak_days": 3}
    )
    FakeRealtimeDB.store["users"][user_uid]["learning_paths"] = {
        "lp1": {"id": "lp1", "title": "LP 1", "progress": 15, "status": "in_progress"}
    }

    # Second login must read persisted values
    resp2 = await ac.get("/api/v1/user/dashboard")
    assert resp2.status_code == 200
    data2 = resp2.json()

    assert data2["skill_score"] == 40
    assert data2["weekly_goals_completed"] == 2
    assert data2["weekly_goals_total"] == 5
    assert data2["learning_progress"] == 40
    assert data2["streak_days"] == 3
    assert len(data2["learning_paths"]) == 1
    assert data2["learning_paths"][0]["title"] == "LP 1"


@pytest.mark.asyncio
async def test_case_3_isolation_between_accounts(async_client):
    ac = async_client

    user_a_uid = "uid-user-A"
    user_b_uid = "uid-user-B"

    # Seed user A
    fastapi_app.state.test_user = _fake_user(user_a_uid)
    await ac.get("/api/v1/user/dashboard")

    FakeRealtimeDB.store.setdefault("users", {}).setdefault(user_a_uid, {})
    FakeRealtimeDB.store["users"][user_a_uid].setdefault("dashboard", {})
    FakeRealtimeDB.store["users"][user_a_uid]["dashboard"].update(
        {"total_courses": 1, "completed_courses": 1, "progress": 99, "streak_days": 9}
    )

    FakeRealtimeDB.store["users"][user_a_uid]["learning_paths"] = {
        "a_lp": {"id": "a_lp", "title": "A LP", "progress": 88, "status": "done"}
    }

    # User A sees their data
    fastapi_app.state.test_user = _fake_user(user_a_uid)
    resp_a = await ac.get("/api/v1/user/dashboard")
    assert resp_a.status_code == 200
    data_a = resp_a.json()
    assert data_a["skill_score"] == 99
    assert len(data_a["learning_paths"]) == 1
    assert data_a["learning_paths"][0]["title"] == "A LP"

    # User B sees empty dashboard
    fastapi_app.state.test_user = _fake_user(user_b_uid)
    resp_b = await ac.get("/api/v1/user/dashboard")
    assert resp_b.status_code == 200
    data_b = resp_b.json()

    assert data_b["skill_score"] == 0
    assert data_b["learning_paths"] == []


