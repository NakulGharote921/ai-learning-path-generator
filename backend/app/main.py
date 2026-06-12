from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

try:
    from slowapi import Limiter
    from slowapi.errors import RateLimitExceeded
    from slowapi.middleware import SlowAPIMiddleware
    from slowapi.util import get_remote_address
except ImportError:
    Limiter = None
    RateLimitExceeded = None
    SlowAPIMiddleware = None
    get_remote_address = None

from app.api.router import api_router
from app.core.config import get_settings
from app.utils.exceptions import rate_limit_handler, register_exception_handlers

settings = get_settings()
limiter = None
if Limiter is not None:
    limiter = Limiter(key_func=get_remote_address, default_limits=[settings.rate_limit])

app = FastAPI(
    title=settings.app_name,
    version="1.0.0",
    docs_url="/docs",
    redoc_url="/redoc",
    openapi_url="/openapi.json",
)

if limiter is not None:
    app.state.limiter = limiter
if SlowAPIMiddleware is not None:
    app.add_middleware(SlowAPIMiddleware)
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.cors_origin_list,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

register_exception_handlers(app)
if RateLimitExceeded is not None:
    app.add_exception_handler(RateLimitExceeded, rate_limit_handler)
app.include_router(api_router, prefix=settings.api_v1_prefix)


@app.get("/health")
async def health():
    return {"status": "ok", "environment": settings.environment}
