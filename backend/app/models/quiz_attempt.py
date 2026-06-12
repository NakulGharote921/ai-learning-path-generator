from sqlalchemy import ForeignKey, Float, JSON, Integer
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.models.base import Base


class QuizAttempt(Base):
    __tablename__ = "quiz_attempts"

    quiz_id: Mapped[str] = mapped_column(ForeignKey("quizzes.id", ondelete="CASCADE"), index=True)
    user_id: Mapped[str] = mapped_column(ForeignKey("users.id", ondelete="CASCADE"), index=True)
    score: Mapped[float] = mapped_column(Float, nullable=False)
    answers: Mapped[list[dict]] = mapped_column(JSON, default=list)
    time_taken_seconds: Mapped[int] = mapped_column(Integer, default=0)

    quiz = relationship("Quiz", back_populates="attempts")
