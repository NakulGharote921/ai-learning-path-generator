from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.models.resource import Resource
from app.repositories.base import BaseRepository


class ResourceRepository(BaseRepository[Resource]):
    def __init__(self, session: AsyncSession) -> None:
        super().__init__(session, Resource)

    async def search(self, skill_level: str, goal: str | None, module_title: str | None):
        stmt = select(Resource).where(Resource.skill_level == skill_level)
        if goal:
            stmt = stmt.where(Resource.goal == goal)
        if module_title:
            stmt = stmt.where(Resource.module_title == module_title)
        result = await self.session.execute(stmt.limit(50))
        return result.scalars().all()
