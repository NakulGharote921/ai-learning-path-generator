from sqlalchemy import JSON, ForeignKey, Integer, String, Text
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.models.base import Base


class Assessment(Base):
    __tablename__ = "assessments"

    user_id: Mapped[str] = mapped_column(ForeignKey("users.id", ondelete="CASCADE"), index=True)
    skill_level: Mapped[str] = mapped_column(String(50), nullable=False)
    interests: Mapped[list[str]] = mapped_column(JSON, nullable=False, default=list)
    learning_goals: Mapped[list[str]] = mapped_column(JSON, nullable=False, default=list)
    study_hours_per_week: Mapped[int] = mapped_column(Integer, nullable=False)
    learning_style: Mapped[str] = mapped_column(String(50), nullable=False)
    experience_level: Mapped[str] = mapped_column(String(50), nullable=False)
    notes: Mapped[str | None] = mapped_column(Text)

    user = relationship("User", back_populates="assessments")
