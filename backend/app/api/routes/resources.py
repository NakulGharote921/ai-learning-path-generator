from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession

from app.api.dependencies import get_session
from app.repositories.resource_repository import ResourceRepository
from app.schemas.resource import ResourceRead

router = APIRouter(prefix="/resources", tags=["Resources"])


@router.get("/recommend", response_model=dict[str, list[ResourceRead]])
async def recommend_resources(skill_level: str, goal: str | None = None, module_title: str | None = None, db: AsyncSession = Depends(get_session)):
    resources = await ResourceRepository(db).search(skill_level, goal, module_title)
    return {"resources": resources}
