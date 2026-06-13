from uuid import UUID

from pydantic import BaseModel, Field

from app.schemas.common import TimestampedSchema


class LearningPathGenerateRequest(BaseModel):
    assessment_id: UUID
    target_goal: str
    duration_months: int = Field(default=6, ge=1, le=24)


class RoadmapModuleRead(BaseModel):
    title: str
    difficulty: str
    estimated_weeks: int
    order_index: int
    status: str


class LearningPathRead(TimestampedSchema):
    user_id: UUID
    assessment_id: UUID | None = None
    goal: str
    duration: str
    roadmap_json: list[dict]
    status: str
    version: int
    modules: list[RoadmapModuleRead] = Field(default_factory=list)
