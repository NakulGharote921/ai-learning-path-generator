from sqlalchemy import ForeignKey, Integer, JSON, String
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.models.base import Base


class LearningPath(Base):
    __tablename__ = "learning_paths"

    user_id: Mapped[str] = mapped_column(ForeignKey("users.id", ondelete="CASCADE"), index=True)
    assessment_id: Mapped[str | None] = mapped_column(ForeignKey("assessments.id", ondelete="SET NULL"), nullable=True)
    goal: Mapped[str] = mapped_column(String(255), nullable=False)
    duration: Mapped[str] = mapped_column(String(50), nullable=False)
    roadmap_json: Mapped[list[dict]] = mapped_column(JSON, nullable=False, default=list)
    status: Mapped[str] = mapped_column(String(50), default="draft", index=True)
    version: Mapped[int] = mapped_column(Integer, default=1)

    user = relationship("User", back_populates="learning_paths")
    modules = relationship("RoadmapModule", back_populates="learning_path", cascade="all, delete-orphan")
