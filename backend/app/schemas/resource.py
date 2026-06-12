from pydantic import BaseModel

from app.schemas.common import TimestampedSchema


class ResourceRead(TimestampedSchema):
    title: str
    resource_type: str
    source_url: str
    description: str | None = None
    tags: list[str]
    skill_level: str
    goal: str | None = None
    module_title: str | None = None
    embedding_id: str | None = None
