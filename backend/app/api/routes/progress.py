from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession

from app.api.dependencies import get_current_user, get_session
from app.core.security import AuthenticatedUser
from app.models.progress import Progress
from app.repositories.progress_repository import ProgressRepository
from app.schemas.progress import ProgressRead, ProgressUpdateRequest
from app.services.user_service import UserService

router = APIRouter(prefix="/progress", tags=["Progress"])


@router.post("/update", response_model=ProgressRead)
async def update_progress(
    payload: ProgressUpdateRequest,
    db: AsyncSession = Depends(get_session),
    current_user: AuthenticatedUser = Depends(get_current_user),
):
    user = await UserService(db).sync_user(current_user)
    progress = Progress(user_id=user.id, **payload.model_dump())
    await ProgressRepository(db).add(progress)
    await db.commit()
    return progress


@router.get("/", response_model=ProgressRead)
async def get_my_progress(
    db: AsyncSession = Depends(get_session),
    current_user: AuthenticatedUser = Depends(get_current_user),
):
    user_id = current_user.clerk_user_id
    progress = await ProgressRepository(db).get_latest_for_user(user_id)
    return progress

