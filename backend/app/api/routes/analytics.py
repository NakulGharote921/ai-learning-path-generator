from fastapi import APIRouter, Depends

from app.api.dependencies import get_current_user
from app.core.security import AuthenticatedUser
from app.schemas.analytics import AnalyticsDashboardResponse

router = APIRouter(prefix="/analytics", tags=["Analytics"])


@router.get("/dashboard", response_model=AnalyticsDashboardResponse)
async def dashboard(current_user: AuthenticatedUser = Depends(get_current_user)):
    return AnalyticsDashboardResponse(
        weekly_progress=[],
        monthly_progress=[],
        skill_growth=[],
        completion_rate=0.0,
        quiz_statistics={"attempts": 0, "avg_score": 0},
    )
