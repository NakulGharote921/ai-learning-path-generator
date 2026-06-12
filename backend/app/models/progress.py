from sqlalchemy import ForeignKey, Integer, Float, JSON, String
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.models.base import Base


class Progress(Base):
    __tablename__ = "progress"

    user_id: Mapped[str] = mapped_column(ForeignKey("users.id", ondelete="CASCADE"), index=True)
    learning_path_id: Mapped[str | None] = mapped_column(ForeignKey("learning_paths.id", ondelete="SET NULL"), nullable=True, index=True)
    completed_modules: Mapped[list[str]] = mapped_column(JSON, default=list)
    completion_percentage: Mapped[float] = mapped_column(Float, default=0.0)
    learning_streak: Mapped[int] = mapped_column(Integer, default=0)
    quiz_scores: Mapped[list[float]] = mapped_column(JSON, default=list)
    study_time_minutes: Mapped[int] = mapped_column(Integer, default=0)

    user = relationship("User", back_populates="progress_entries")
