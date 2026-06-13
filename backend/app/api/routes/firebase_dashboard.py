from __future__ import annotations

from fastapi import APIRouter, Depends

from app.api.dependencies import get_current_user
from app.core.security import AuthenticatedUser
from app.services.realtime_db import RealtimeDB

router = APIRouter(prefix="/user", tags=["User"])


@router.get("/dashboard")
async def get_user_dashboard(current_user: AuthenticatedUser = Depends(get_current_user)):
    uid = current_user.clerk_user_id
    data = RealtimeDB.get_or_create_user_data(uid)

    dashboard = data.get("dashboard") or {}
    learning_paths = data.get("learning_paths") or {}
    activities = data.get("activities") or {}
    achievements = data.get("achievements") or 0


    # Map RTDB structure into the existing frontend shape.
    # learning_paths is stored as an object keyed by id. Convert to list.
    learning_paths_list = []
    if isinstance(learning_paths, dict):
        for _, lp in learning_paths.items():
            if isinstance(lp, dict):
                learning_paths_list.append(
                    {
                        "id": lp.get("id"),
                        "title": lp.get("title"),
                        "description": lp.get("description"),
                        "progress": lp.get("progress", 0),
                        "status": lp.get("status"),
                        "created_at": lp.get("created_at"),
                        "updated_at": lp.get("updated_at"),
                    }
                )

    total_courses = int(dashboard.get("total_courses", 0) or 0)
    completed_courses = int(dashboard.get("completed_courses", 0) or 0)
    progress = int(dashboard.get("progress", 0) or 0)

    return {
        "user_name": (data.get("profile") or {}).get("full_name") or "User",
        "skill_score": int(progress),
        "weekly_goals_completed": completed_courses,
        "weekly_goals_total": total_courses,
        "learning_progress": int(progress),
        "streak_days": int((data.get("dashboard") or {}).get("streak_days", 0) or 0),
        "recommendations": [],
        "learning_paths": learning_paths_list,
        "projects": [],
        "achievements": achievements,
        "activities": activities,
    }

