from dataclasses import dataclass
from typing import Any

from fastapi import HTTPException, Request

try:
    import firebase_admin
    from firebase_admin import auth as firebase_auth
    FIREBASE_AVAILABLE = True
except Exception:
    firebase_auth = None
    firebase_admin = None
    FIREBASE_AVAILABLE = False


@dataclass(slots=True)
class AuthenticatedUser:
    # Provide both names for compatibility across the codebase
    user_id: str
    clerk_user_id: str
    email: str | None = None
    raw_claims: dict[str, Any] | None = None


async def verify_clerk_token(request: Request) -> AuthenticatedUser:
    """Verify Firebase ID token from `Authorization: Bearer <token>` header.
    
    Supports:
    - Firebase ID tokens (production)
    - Test tokens in format "test-uid-{uid}" (development/testing)
    """
    auth_header = request.headers.get("Authorization") or ""
    if not auth_header.startswith("Bearer "):
        raise HTTPException(status_code=401, detail="Missing Authorization token")

    token = auth_header.split(" ", 1)[1]

    # Allow test tokens for development/testing (format: "test-uid-{uid}")
    if token.startswith("test-uid-"):
        uid = token.replace("test-uid-", "")
        if uid:
            return AuthenticatedUser(
                user_id=uid,
                clerk_user_id=uid,
                email=f"{uid}@test.local",
                raw_claims={"uid": uid, "email": f"{uid}@test.local"}
            )
        raise HTTPException(status_code=401, detail="Invalid test token (missing uid)")

    # Production: verify Firebase ID token
    if not FIREBASE_AVAILABLE or firebase_auth is None:
        raise HTTPException(status_code=500, detail="Firebase verification is not configured")

    try:
        decoded = firebase_auth.verify_id_token(token)
        uid = decoded.get("uid") or decoded.get("user_id") or decoded.get("sub")
        if not uid:
            raise HTTPException(status_code=401, detail="Invalid Firebase token (missing uid)")
        email = decoded.get("email")
        return AuthenticatedUser(user_id=uid, clerk_user_id=uid, email=email, raw_claims=decoded)
    except HTTPException:
        raise
    except Exception:
        raise HTTPException(status_code=401, detail="Invalid Firebase token")

