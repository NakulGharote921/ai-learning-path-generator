from sqlalchemy.ext.asyncio import AsyncSession

from app.core.security import AuthenticatedUser
from app.models.user import User
from app.repositories.user_repository import UserRepository


class UserService:
    def __init__(self, db: AsyncSession) -> None:
        self.db = db
        self.repo = UserRepository(db)

    async def sync_user(self, auth_user: AuthenticatedUser, email: str | None = None) -> User:
        user = await self.repo.get_by_clerk_id(auth_user.clerk_user_id)
        if user:
            return user
        user = User(clerk_user_id=auth_user.clerk_user_id, email=email or auth_user.email)
        await self.repo.add(user)
        await self.db.commit()
        await self.db.refresh(user)
        return user
