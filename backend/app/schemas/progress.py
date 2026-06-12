from uuid import UUID

from pydantic import BaseModel, Field

from app.schemas.common import TimestampedSchema


class ProgressUpdateRequest(BaseModel):
    learning_path_id: UUID | None = None
    completed_modules: list[str] = Field(default_factory=list)
    completion_percentage: float = Field(ge=0.0, le=100.0)
    learning_streak: int = Field(ge=0)
    quiz_scores: list[float] = Field(default_factory=list)
    study_time_minutes: int = Field(ge=0)


class ProgressRead(TimestampedSchema):
    user_id: UUID
    learning_path_id: UUID | None = None
    completed_modules: list[str]
    completion_percentage: float
    learning_streak: int
    quiz_scores: list[float]
    study_time_minutes: int
