from fastapi import APIRouter

from app.api.routes.system import router as system_router
from app.api.routes.analytics import router as analytics_router
from app.api.routes.assessment import router as assessment_router
from app.api.routes.chat import router as chat_router
from app.api.routes.learning_path import router as learning_path_router
from app.api.routes.progress import router as progress_router
from app.api.routes.quiz import router as quiz_router
from app.api.routes.resources import router as resources_router

api_router = APIRouter()
api_router.include_router(system_router)
api_router.include_router(assessment_router)
api_router.include_router(learning_path_router)
api_router.include_router(resources_router)
api_router.include_router(chat_router)
api_router.include_router(progress_router)
api_router.include_router(quiz_router)
api_router.include_router(analytics_router)
