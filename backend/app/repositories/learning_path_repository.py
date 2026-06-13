from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.models.learning_path import LearningPath
from app.repositories.base import BaseRepository


class LearningPathRepository(BaseRepository[LearningPath]):
    def __init__(self, session: AsyncSession) -> None:
        super().__init__(session, LearningPath)

    async def get_with_modules(self, path_id):
        result = await self.session.execute(select(LearningPath).where(LearningPath.id == path_id))
        return result.scalar_one_or_none()
