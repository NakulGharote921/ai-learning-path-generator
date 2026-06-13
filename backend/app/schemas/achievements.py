from datetime import datetime
from typing import Literal

from pydantic import BaseModel, Field


class AchievementRead(BaseModel):
    id: str
    title: str
    description: str
    icon: str
    accent: Literal[
        "secondary",
        "gold",
        "disabled",
    ]
    state: Literal[
        "unlocked",
        "locked",
    ]
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)


class AchievementsResponse(BaseModel):
    achievements: list[AchievementRead] = Field(default_factory=list)

