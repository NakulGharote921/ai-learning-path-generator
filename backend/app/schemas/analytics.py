from pydantic import BaseModel, Field


class AnalyticsDashboardResponse(BaseModel):
    weekly_progress: list[dict] = Field(default_factory=list)
    monthly_progress: list[dict] = Field(default_factory=list)
    skill_growth: list[dict] = Field(default_factory=list)
    completion_rate: float
    quiz_statistics: dict
