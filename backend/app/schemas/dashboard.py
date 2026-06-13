from datetime import datetime
from uuid import UUID

from pydantic import BaseModel, Field


class RecommendationRead(BaseModel):
    id: UUID
    title: str
    type: str
    duration: str | None = None
    url: str | None = None
    created_at: datetime
    updated_at: datetime


class LearningPathRead(BaseModel):
    id: UUID
    title: str
    description: str | None = None
    progress: int = 0
    status: str | None = None
    created_at: datetime
    updated_at: datetime


class ProjectRead(BaseModel):
    id: UUID
    title: str
    description: str | None = None
    difficulty: str | None = None
    created_at: datetime
    updated_at: datetime


class DashboardResponse(BaseModel):
    user_name: str
    skill_score: int = 0
    weekly_goals_completed: int = 0
    weekly_goals_total: int = 5
    learning_progress: int = 0
    streak_days: int = 0
    recommendations: list[RecommendationRead] = Field(default_factory=list)
    learning_paths: list[LearningPathRead] = Field(default_factory=list)
    projects: list[ProjectRead] = Field(default_factory=list)
