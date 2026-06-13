from fastapi import APIRouter, Depends

from app.api.dependencies import get_current_user
from app.core.security import AuthenticatedUser
from app.schemas.quiz import QuizGenerateRequest, QuizGenerateResponse
from app.services.openai_service import OpenAIService
from app.services.quiz_service import QuizService

router = APIRouter(prefix="/quiz", tags=["Quizzes"])


@router.post("/generate", response_model=QuizGenerateResponse)
async def generate_quiz(payload: QuizGenerateRequest, current_user: AuthenticatedUser = Depends(get_current_user)):
    quiz = await QuizService(OpenAIService()).generate(payload.module_title, payload.difficulty, payload.target_goal)
    return quiz
