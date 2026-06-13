from fastapi import APIRouter

from app.api.routes.system import router as system_router
from app.api.routes.analytics import router as analytics_router
from app.api.routes.assessment import router as assessment_router
from app.api.routes.chat import router as chat_router
from app.api.routes.learning_path import router as learning_path_router
from app.api.routes.progress import router as progress_router
from app.api.routes.quiz import router as quiz_router
from app.api.routes.resources import router as resources_router
from app.api.routes.user import router as user_router
from app.api.routes.dashboard import router as dashboard_router
from app.api.routes.achievements import router as achievements_router

from app.api.routes.firebase_dashboard import router as firebase_dashboard_router
from app.api.routes.firebase_learning_path import router as firebase_learning_path_router


api_router = APIRouter()
api_router.include_router(system_router)
api_router.include_router(assessment_router)
api_router.include_router(learning_path_router)
api_router.include_router(resources_router)
api_router.include_router(chat_router)
api_router.include_router(progress_router)
api_router.include_router(quiz_router)
api_router.include_router(analytics_router)
api_router.include_router(user_router)
api_router.include_router(dashboard_router)
api_router.include_router(achievements_router)

# Firebase RTDB user-scoped dashboard
api_router.include_router(firebase_dashboard_router)
# Firebase RTDB learning paths (optional incremental persistence)
api_router.include_router(firebase_learning_path_router)




