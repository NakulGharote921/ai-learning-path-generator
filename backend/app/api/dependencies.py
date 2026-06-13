from fastapi import Depends
from sqlalchemy.ext.asyncio import AsyncSession

from app.core.security import AuthenticatedUser, verify_clerk_token
from app.db.session import get_db


async def get_current_user(user: AuthenticatedUser = Depends(verify_clerk_token)) -> AuthenticatedUser:
    return user


async def get_session(db: AsyncSession = Depends(get_db)) -> AsyncSession:
    return db
