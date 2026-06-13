from fastapi import APIRouter, Depends
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.api.dependencies import get_current_user, get_session
from app.core.security import AuthenticatedUser
from app.repositories.user_repository import UserRepository
from app.models.dashboard import DashboardStats, Recommendation, DashboardLearningPath, Project
from app.schemas.dashboard import DashboardResponse, RecommendationRead, LearningPathRead, ProjectRead

router = APIRouter(prefix="/dashboard", tags=["Dashboard"])


def _uid_from_auth(auth: AuthenticatedUser) -> str:
    # Firebase UID is the authenticated user's unique identifier
    return auth.clerk_user_id



@router.get("/", response_model=DashboardResponse)
async def get_dashboard(db: AsyncSession = Depends(get_session), current_user: AuthenticatedUser = Depends(get_current_user)):
    uid = _uid_from_auth(current_user)
    user_repo = UserRepository(db)
    user = await user_repo.get_by_clerk_id(uid)
    if not user:
        # create user record if missing
        user = user_repo.model(clerk_user_id=uid, email=current_user.email)
        await user_repo.add(user)
        # Initialize empty dashboard stats row for this user (zeros via model defaults)
        from app.models.dashboard import DashboardStats

        db.add(DashboardStats(user_id=user.id))

        await db.commit()
        await db.refresh(user)


    # Stats
    result = await db.execute(select(DashboardStats).where(DashboardStats.user_id == user.id))
    stats = result.scalar_one_or_none()

    # recommendations
    recs = (await db.execute(select(Recommendation).where(Recommendation.user_id == user.id))).scalars().all()
    lps = (await db.execute(select(DashboardLearningPath).where(DashboardLearningPath.user_id == user.id))).scalars().all()
    projs = (await db.execute(select(Project).where(Project.user_id == user.id))).scalars().all()

    if not stats:
        # New user: return empty/zero dashboard without hardcoded defaults.
        return DashboardResponse(
            user_name=user.full_name or "User",
            skill_score=0,
            weekly_goals_completed=0,
            weekly_goals_total=0,
            learning_progress=0,
            streak_days=0,
            recommendations=[],
            learning_paths=[],
            projects=[],
        )

    return DashboardResponse(
        user_name=user.full_name or "User",
        skill_score=stats.skill_score or 0,
        weekly_goals_completed=stats.weekly_goals_completed or 0,
        weekly_goals_total=stats.weekly_goals_total or 0,
        learning_progress=stats.learning_progress or 0,
        streak_days=stats.streak_days or 0,
        recommendations=[RecommendationRead.model_validate(r) for r in recs] if recs else [],
        learning_paths=[LearningPathRead.model_validate(p) for p in lps] if lps else [],
        projects=[ProjectRead.model_validate(p) for p in projs] if projs else [],
    )



@router.get("/recommendations", response_model=list[RecommendationRead])
async def get_recommendations(db: AsyncSession = Depends(get_session), current_user: AuthenticatedUser = Depends(get_current_user)):
    uid = _uid_from_auth(current_user)
    user = await UserRepository(db).get_by_clerk_id(uid)
    if not user:
        return []
    recs = (await db.execute(select(Recommendation).where(Recommendation.user_id == user.id))).scalars().all()
    return [RecommendationRead.model_validate(r) for r in recs]


@router.get("/learning-path", response_model=list[LearningPathRead])
async def get_learning_paths(db: AsyncSession = Depends(get_session), current_user: AuthenticatedUser = Depends(get_current_user)):
    uid = _uid_from_auth(current_user)
    user = await UserRepository(db).get_by_clerk_id(uid)
    if not user:
        return []
    lps = (await db.execute(select(DashboardLearningPath).where(DashboardLearningPath.user_id == user.id))).scalars().all()
    return [LearningPathRead.model_validate(p) for p in lps]


@router.get("/projects", response_model=list[ProjectRead])
async def get_projects(db: AsyncSession = Depends(get_session), current_user: AuthenticatedUser = Depends(get_current_user)):
    uid = _uid_from_auth(current_user)
    user = await UserRepository(db).get_by_clerk_id(uid)
    if not user:
        return []
    projs = (await db.execute(select(Project).where(Project.user_id == user.id))).scalars().all()
    return [ProjectRead.model_validate(p) for p in projs]
