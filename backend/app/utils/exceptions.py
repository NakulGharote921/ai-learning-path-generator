from fastapi import FastAPI, Request
from fastapi.responses import JSONResponse

try:
    from slowapi.errors import RateLimitExceeded
except ImportError:
    class RateLimitExceeded(Exception):
        pass


def register_exception_handlers(app: FastAPI) -> None:
    @app.exception_handler(Exception)
    async def unhandled_exception_handler(_: Request, exc: Exception):
        return JSONResponse(status_code=500, content={"detail": "Internal server error"})


async def rate_limit_handler(_: Request, exc: RateLimitExceeded):
    return JSONResponse(status_code=429, content={"detail": "Too many requests"})
