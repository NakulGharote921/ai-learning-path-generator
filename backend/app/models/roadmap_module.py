from sqlalchemy import ForeignKey, Integer, String, Text
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.models.base import Base


class RoadmapModule(Base):
    __tablename__ = "roadmap_modules"

    learning_path_id: Mapped[str] = mapped_column(ForeignKey("learning_paths.id", ondelete="CASCADE"), index=True)
    title: Mapped[str] = mapped_column(String(255), nullable=False, index=True)
    difficulty: Mapped[str] = mapped_column(String(50), nullable=False)
    estimated_weeks: Mapped[int] = mapped_column(Integer, nullable=False)
    order_index: Mapped[int] = mapped_column(Integer, default=0, index=True)
    status: Mapped[str] = mapped_column(String(50), default="locked", index=True)
    metadata_json: Mapped[str | None] = mapped_column(Text)

    learning_path = relationship("LearningPath", back_populates="modules")
