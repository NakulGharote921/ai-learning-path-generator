from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.models.assessment import Assessment
from app.repositories.base import BaseRepository


class AssessmentRepository(BaseRepository[Assessment]):
    def __init__(self, session: AsyncSession) -> None:
        super().__init__(session, Assessment)

    async def get_latest_for_user(self, user_id):
        result = await self.session.execute(
            select(Assessment).where(Assessment.user_id == user_id).order_by(Assessment.created_at.desc())
        )
        return result.scalars().first()
