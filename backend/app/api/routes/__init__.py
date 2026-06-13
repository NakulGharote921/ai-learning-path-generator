from .analytics import router as analytics_router
from .assessment import router as assessment_router
from .chat import router as chat_router
from .learning_path import router as learning_path_router
from .progress import router as progress_router
from .quiz import router as quiz_router
from .resources import router as resources_router
from .system import router as system_router
from .user import router as user_router

__all__ = [
    "analytics_router",
    "assessment_router",
    "chat_router",
    "learning_path_router",
    "progress_router",
    "quiz_router",
    "resources_router",
    "system_router",
    "user_router",
]

