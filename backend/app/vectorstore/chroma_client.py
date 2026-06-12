from pathlib import Path

import chromadb
from chromadb.utils.embedding_functions import OpenAIEmbeddingFunction

from app.core.config import get_settings
from app.services.openai_service import OpenAIService


class ChromaClient:
    def __init__(self) -> None:
        settings = get_settings()
        Path(settings.chroma_persist_directory).mkdir(parents=True, exist_ok=True)
        self.client = chromadb.PersistentClient(path=settings.chroma_persist_directory)
        self.collection = self.client.get_or_create_collection(
            name=settings.chroma_collection,
            embedding_function=OpenAIEmbeddingFunction(api_key=settings.nvidia_api_key, model_name=settings.nvidia_embedding_model),
        )
        self.openai = OpenAIService()

    async def create_embeddings(self, texts: list[str]) -> list[list[float]]:
        return await self.openai.embed_texts(texts)

    async def store_embeddings(self, ids: list[str], texts: list[str], metadatas: list[dict]) -> None:
        embeddings = await self.create_embeddings(texts)
        self.collection.add(ids=ids, documents=texts, metadatas=metadatas, embeddings=embeddings)

    async def search_resources(self, query: str, top_k: int = 5) -> list[dict]:
        result = self.collection.query(query_texts=[query], n_results=top_k)
        docs = result.get("documents", [[]])[0]
        metas = result.get("metadatas", [[]])[0]
        return [{"document": doc, "metadata": meta} for doc, meta in zip(docs, metas, strict=False)]
