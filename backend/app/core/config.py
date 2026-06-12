from functools import lru_cache
from typing import List, Optional

from pydantic import Field
from pydantic import field_validator
from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(env_file=".env", env_file_encoding="utf-8", extra="ignore")

    app_name: str = "Cognitive Flow"
    environment: str = "vercel"
    debug: bool = False
    api_v1_prefix: str = "/api/v1"
    secret_key: str = Field(default="change-me")
    database_url: Optional[str] = None
    supabase_url: str = ""
    supabase_service_role_key: str = ""
    supabase_jwt_audience: str = "authenticated"
    clerk_jwks_url: str = ""
    nvidia_api_key: str = ""
    nvidia_base_url: str = "https://integrate.api.nvidia.com/v1"
    nvidia_model: str = "openai/gpt-oss-20b"
    nvidia_tutor_model: str = "openai/gpt-oss-20b"
    nvidia_quiz_model: str = "openai/gpt-oss-20b"
    nvidia_embedding_model: str = "nvidia/llama-3.2-nv-embedqa-1b-v2"
    chroma_persist_directory: str = "./chroma"
    chroma_collection: str = "learning_resources"
    cors_origins: str = "http://localhost:3000,http://localhost:5173"
    rate_limit: str = "120/minute"

    @field_validator("debug", mode="before")
    @classmethod
    def parse_debug(cls, value):
        if isinstance(value, bool):
            return value
        if isinstance(value, str):
            normalized = value.strip().lower()
            if normalized in {"1", "true", "yes", "on"}:
                return True
            if normalized in {"0", "false", "no", "off", ""}:
                return False
        return False

    @property
    def cors_origin_list(self) -> List[str]:
        return [origin.strip() for origin in self.cors_origins.split(",") if origin.strip()]

    @property
    def database_url_or_default(self) -> str:
        # Keep local startup working even when DATABASE_URL is not configured yet.
        return self.database_url or "sqlite+aiosqlite:///./app.db"


@lru_cache
def get_settings() -> Settings:
    return Settings()
