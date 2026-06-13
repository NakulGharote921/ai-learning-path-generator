from collections.abc import AsyncGenerator

from sqlalchemy.ext.asyncio import AsyncSession, async_sessionmaker, create_async_engine

from app.core.config import get_settings

settings = get_settings()
engine = None
AsyncSessionLocal = None

database_url = settings.database_url_or_default
if database_url:
    engine = create_async_engine(database_url, pool_pre_ping=True, future=True)
    AsyncSessionLocal = async_sessionmaker(engine, expire_on_commit=False, class_=AsyncSession)


async def get_db() -> AsyncGenerator[AsyncSession, None]:
    if AsyncSessionLocal is None:
        raise RuntimeError("Database session is not configured.")
    async with AsyncSessionLocal() as session:
        yield session
