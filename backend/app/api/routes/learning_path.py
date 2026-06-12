from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession

from app.api.dependencies import get_current_user, get_session
from app.core.security import AuthenticatedUser
from app.models.learning_path import LearningPath
from app.models.roadmap_module import RoadmapModule
from app.repositories.assessment_repository import AssessmentRepository
from app.repositories.learning_path_repository import LearningPathRepository
from app.schemas.learning_path import LearningPathGenerateRequest, LearningPathRead
from app.services.openai_service import OpenAIService
from app.services.path_generator import PathGeneratorService
from app.services.user_service import UserService

router = APIRouter(prefix="/learning-path", tags=["Learning Paths"])


@router.post("/generate", response_model=LearningPathRead)
async def generate_learning_path(
    payload: LearningPathGenerateRequest,
    db: AsyncSession = Depends(get_session),
    current_user: AuthenticatedUser = Depends(get_current_user),
):
    user = await UserService(db).sync_user(current_user)
    assessment = await AssessmentRepository(db).get(payload.assessment_id)
    if not assessment:
        raise HTTPException(status_code=404, detail="Assessment not found")
    generator = PathGeneratorService(OpenAIService())
    roadmap = await generator.generate(assessment.__dict__, payload.target_goal, payload.duration_months)
    path = LearningPath(
        user_id=user.id,
        assessment_id=payload.assessment_id,
        goal=roadmap.get("goal", payload.target_goal),
        duration=roadmap.get("duration", f"{payload.duration_months} Months"),
        roadmap_json=roadmap.get("roadmap", []),
        status="generated",
    )
    await LearningPathRepository(db).add(path)
    for idx, item in enumerate(path.roadmap_json):
        db.add(
            RoadmapModule(
                learning_path_id=path.id,
                title=item["title"],
                difficulty=item["difficulty"],
                estimated_weeks=item["estimated_weeks"],
                order_index=idx,
                status="locked",
                metadata_json=item.get("rationale"),
            )
        )
    await db.commit()
    await db.refresh(path)
    return path


@router.get("/{id}", response_model=LearningPathRead)
async def get_learning_path(id: str, db: AsyncSession = Depends(get_session)):
    path = await LearningPathRepository(db).get_with_modules(id)
    if not path:
        raise HTTPException(status_code=404, detail="Learning path not found")
    return path
