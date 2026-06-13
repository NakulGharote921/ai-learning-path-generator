from app.services.openai_service import OpenAIService
from app.vectorstore.chroma_client import ChromaClient


class TutorService:
    def __init__(self, openai_service: OpenAIService, vectorstore: ChromaClient) -> None:
        self.openai = openai_service
        self.vectorstore = vectorstore

    async def answer(self, message: str, context: dict) -> tuple[str, list[dict]]:
        query = f"{message}\n\nContext: {context}"
        citations = await self.vectorstore.search_resources(query=query, top_k=5)
        prompt = [
            {"role": "system", "content": "You are an AI tutor. Answer using the learning path and retrieved resources. Cite concisely."},
            {"role": "user", "content": f"Question: {message}\nContext: {context}\nRetrieved: {citations}"},
        ]
        answer = await self.openai.chat(prompt)
        return answer, citations
