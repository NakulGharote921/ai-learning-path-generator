from uuid import UUID

from pydantic import BaseModel, Field

from app.schemas.common import TimestampedSchema


class QuizGenerateRequest(BaseModel):
    module_title: str
    difficulty: str
    target_goal: str


class QuizQuestion(BaseModel):
    question: str
    options: list[str] = Field(default_factory=list)
    answer: str


class QuizGenerateResponse(BaseModel):
    questions: list[QuizQuestion]


class QuizRead(TimestampedSchema):
    user_id: UUID
    learning_path_id: UUID | None = None
    module_title: str
    questions: list[dict]
    metadata_json: str | None = None
