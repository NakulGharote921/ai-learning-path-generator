from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.models.progress import Progress
from app.repositories.base import BaseRepository


class ProgressRepository(BaseRepository[Progress]):
    def __init__(self, session: AsyncSession) -> None:
        super().__init__(session, Progress)

    async def get_latest_for_user(self, user_id):
        result = await self.session.execute(select(Progress).where(Progress.user_id == user_id).order_by(Progress.created_at.desc()))
        return result.scalars().first()
