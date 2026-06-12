from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession

from app.api.dependencies import get_current_user, get_session
from app.models.assessment import Assessment
from app.repositories.assessment_repository import AssessmentRepository
from app.schemas.assessment import AssessmentCreate, AssessmentRead
from app.core.security import AuthenticatedUser
from app.services.user_service import UserService

router = APIRouter(prefix="/assessment", tags=["Assessment"])


@router.post("", response_model=AssessmentRead)
async def create_assessment(
    payload: AssessmentCreate,
    db: AsyncSession = Depends(get_session),
    current_user: AuthenticatedUser = Depends(get_current_user),
):
    user = await UserService(db).sync_user(current_user)
    repo = AssessmentRepository(db)
    assessment = Assessment(user_id=user.id, **payload.model_dump())
    await repo.add(assessment)
    await db.commit()
    return assessment


@router.get("/{user_id}", response_model=AssessmentRead)
async def get_assessment(user_id: str, db: AsyncSession = Depends(get_session)):
    repo = AssessmentRepository(db)
    assessment = await repo.get_latest_for_user(user_id)
    return assessment
