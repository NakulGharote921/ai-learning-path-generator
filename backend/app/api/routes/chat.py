from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession

from app.api.dependencies import get_current_user, get_session
from app.core.security import AuthenticatedUser
from app.schemas.chat import ChatRequest, ChatResponse
from app.services.openai_service import OpenAIService
from app.services.tutor_service import TutorService
from app.services.user_service import UserService
from app.vectorstore.chroma_client import ChromaClient

router = APIRouter(prefix="/chat", tags=["Tutor"])


@router.post("", response_model=ChatResponse)
async def chat(
    payload: ChatRequest,
    db: AsyncSession = Depends(get_session),
    current_user: AuthenticatedUser = Depends(get_current_user),
):
    user = await UserService(db).sync_user(current_user)
    tutor = TutorService(OpenAIService(), ChromaClient())
    answer, citations = await tutor.answer(payload.message, {"user_id": str(user.id)})
    return ChatResponse(response=answer, citations=citations, session_id=payload.session_id)
