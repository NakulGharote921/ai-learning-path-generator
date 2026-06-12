from uuid import UUID

from pydantic import BaseModel

from app.schemas.common import TimestampedSchema


class UserSyncRequest(BaseModel):
    clerk_user_id: str
    email: str | None = None
    full_name: str | None = None
    avatar_url: str | None = None
    learning_style: str | None = None
    experience_level: str | None = None


class UserRead(TimestampedSchema):
    clerk_user_id: str
    email: str | None = None
    full_name: str | None = None
    avatar_url: str | None = None
    learning_style: str | None = None
    experience_level: str | None = None
