from uuid import UUID

from pydantic import BaseModel, Field

from app.schemas.common import TimestampedSchema


class AssessmentCreate(BaseModel):
    skill_level: str
    interests: list[str] = Field(default_factory=list)
    learning_goals: list[str] = Field(default_factory=list)
    study_hours_per_week: int
    learning_style: str
    experience_level: str
    notes: str | None = None


class AssessmentRead(TimestampedSchema):
    user_id: UUID
    skill_level: str
    interests: list[str]
    learning_goals: list[str]
    study_hours_per_week: int
    learning_style: str
    experience_level: str
    notes: str | None = None
