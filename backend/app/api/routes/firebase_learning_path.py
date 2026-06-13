from __future__ import annotations

from fastapi import APIRouter, Depends, HTTPException

from app.api.dependencies import get_current_user
from app.core.security import AuthenticatedUser
from app.services.realtime_db import RealtimeDB

router = APIRouter(prefix="/learning-path", tags=["Learning Paths"])


@router.post("/save")
async def save_learning_path(payload: dict, current_user: AuthenticatedUser = Depends(get_current_user)):
    """Persist a learning path into RTDB under users/{uid}/learning_paths.

    Expected payload shape (flexible):
      - id (string)
      - title
      - description
      - progress
      - status
    """
    uid = current_user.clerk_user_id
    lp_id = payload.get("id")
    if not lp_id:
        raise HTTPException(status_code=400, detail="Missing learning path id")

    user_ref = RealtimeDB.user_ref(uid)
    learning_paths = user_ref.child("learning_paths")

    existing = learning_paths.get() or {}
    if not isinstance(existing, dict):
        existing = {}

    existing[lp_id] = {
        "id": lp_id,
        "title": payload.get("title"),
        "description": payload.get("description"),
        "progress": payload.get("progress", 0),
        "status": payload.get("status"),
        "created_at": payload.get("created_at"),
        "updated_at": payload.get("updated_at"),
    }

    learning_paths.set(existing)
    return {"ok": True}


@router.get("/my")
async def get_my_learning_paths(current_user: AuthenticatedUser = Depends(get_current_user)):
    uid = current_user.clerk_user_id
    data = RealtimeDB.get_or_create_user_data(uid)
    learning_paths = data.get("learning_paths") or {}

    if not isinstance(learning_paths, dict):
        return []

    result = []
    for _, lp in learning_paths.items():
        if isinstance(lp, dict):
            result.append(lp)
    return result

