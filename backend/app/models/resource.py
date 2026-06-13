from sqlalchemy import JSON, String, Text, UniqueConstraint
from sqlalchemy.orm import Mapped, mapped_column

from app.models.base import Base


class Resource(Base):
    __tablename__ = "resources"
    __table_args__ = (UniqueConstraint("source_url", name="uq_resources_source_url"),)

    title: Mapped[str] = mapped_column(String(255), nullable=False, index=True)
    resource_type: Mapped[str] = mapped_column(String(50), nullable=False, index=True)
    source_url: Mapped[str] = mapped_column(String(1024), nullable=False)
    description: Mapped[str | None] = mapped_column(Text)
    tags: Mapped[list[str]] = mapped_column(JSON, default=list)
    skill_level: Mapped[str] = mapped_column(String(50), nullable=False, index=True)
    goal: Mapped[str | None] = mapped_column(String(255), index=True)
    module_title: Mapped[str | None] = mapped_column(String(255), index=True)
    embedding_id: Mapped[str | None] = mapped_column(String(255), index=True)
