from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession

from app.api.dependencies import get_current_user, get_session
from app.core.security import AuthenticatedUser
from app.models.user import User
from app.repositories.user_repository import UserRepository
from app.schemas.user import UserRead, UserSyncRequest

router = APIRouter(prefix="/user", tags=["User"])


@router.get("/me", response_model=UserRead)
async def get_me(
    db: AsyncSession = Depends(get_session),
    current_user: AuthenticatedUser = Depends(get_current_user),
):
    user = await UserRepository(db).get_by_clerk_id(current_user.user_id)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return UserRead.model_validate(user)


@router.patch("/me", response_model=UserRead)
async def patch_me(
    payload: UserSyncRequest,
    db: AsyncSession = Depends(get_session),
    current_user: AuthenticatedUser = Depends(get_current_user),
):
    user_repo = UserRepository(db)
    user = await user_repo.get_by_clerk_id(current_user.user_id)
    if not user:
        # If user does not exist yet, create it.
        user = User(clerk_user_id=current_user.user_id, email=payload.email)
        await user_repo.add(user)

    # Update allowed profile fields
    update_data = payload.model_dump(exclude_unset=True)
    update_data.pop("clerk_user_id", None)

    for field in [
        "email",
        "full_name",
        "avatar_url",
        "learning_style",
        "experience_level",
    ]:
        if field in update_data:
            setattr(user, field, update_data[field])

    await db.commit()
    await db.refresh(user)
    return UserRead.model_validate(user)

