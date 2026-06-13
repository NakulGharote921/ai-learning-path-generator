import json
from collections.abc import Iterable

from openai import AsyncOpenAI
from tenacity import retry, stop_after_attempt, wait_exponential

from app.core.config import get_settings


class OpenAIService:
    def __init__(self) -> None:
        settings = get_settings()
        self.client = AsyncOpenAI(api_key=settings.nvidia_api_key, base_url=settings.nvidia_base_url)
        self.settings = settings

    @retry(stop=stop_after_attempt(3), wait=wait_exponential(min=1, max=8))
    async def chat_json(self, system: str, user: str, model: str | None = None) -> dict:
        response = await self.client.chat.completions.create(
            model=model or self.settings.nvidia_model,
            temperature=0.3,
            messages=[{"role": "system", "content": system}, {"role": "user", "content": user}],
        )
        return json.loads(response.choices[0].message.content or "{}")

    @retry(stop=stop_after_attempt(3), wait=wait_exponential(min=1, max=8))
    async def embed_texts(self, texts: Iterable[str]) -> list[list[float]]:
        response = await self.client.embeddings.create(model=self.settings.nvidia_embedding_model, input=list(texts))
        return [item.embedding for item in response.data]

    @retry(stop=stop_after_attempt(3), wait=wait_exponential(min=1, max=8))
    async def chat(self, messages: list[dict], model: str | None = None) -> str:
        response = await self.client.chat.completions.create(
            model=model or self.settings.nvidia_tutor_model,
            temperature=0.5,
            messages=messages,
        )
        return response.choices[0].message.content or ""
