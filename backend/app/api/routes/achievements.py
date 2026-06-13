from fastapi import APIRouter, Depends

from app.api.dependencies import get_current_user
from app.core.security import AuthenticatedUser
from app.schemas.achievements import AchievementsResponse

router = APIRouter(prefix="/achievements", tags=["Achievements"])


@router.get("/", response_model=AchievementsResponse)
async def get_achievements(current_user: AuthenticatedUser = Depends(get_current_user)):
    # Achievements persistence not implemented yet; return empty list for authenticated user.
    return AchievementsResponse(achievements=[])



