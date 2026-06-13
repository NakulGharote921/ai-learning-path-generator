from sqlalchemy import ForeignKey, Integer, JSON, String, Text
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.models.base import Base


class Quiz(Base):
    __tablename__ = "quizzes"

    user_id: Mapped[str] = mapped_column(ForeignKey("users.id", ondelete="CASCADE"), index=True)
    learning_path_id: Mapped[str | None] = mapped_column(ForeignKey("learning_paths.id", ondelete="SET NULL"), nullable=True)
    module_title: Mapped[str] = mapped_column(String(255), index=True)
    questions: Mapped[list[dict]] = mapped_column(JSON, nullable=False, default=list)
    metadata_json: Mapped[str | None] = mapped_column(Text)

    user = relationship("User", back_populates="quizzes")
    attempts = relationship("QuizAttempt", back_populates="quiz", cascade="all, delete-orphan")
