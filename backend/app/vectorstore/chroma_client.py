from app.core.config import get_settings
from app.services.openai_service import OpenAIService


class ChromaClient:
    def __init__(self) -> None:
        get_settings()
        self.openai = OpenAIService()

    async def create_embeddings(self, texts: list[str]) -> list[list[float]]:
        return await self.openai.embed_texts(texts)

    async def store_embeddings(self, ids: list[str], texts: list[str], metadatas: list[dict]) -> None:
        _ = (ids, texts, metadatas)

    async def search_resources(self, query: str, top_k: int = 5) -> list[dict]:
        _ = (query, top_k)
        return []
