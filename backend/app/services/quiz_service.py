from app.services.openai_service import OpenAIService


class QuizService:
    def __init__(self, openai_service: OpenAIService) -> None:
        self.openai = openai_service

    async def generate(self, module_title: str, difficulty: str, target_goal: str) -> dict:
        system = "Generate a quiz as valid JSON with a questions array. Each question needs question, options, answer."
        user = {
            "module_title": module_title,
            "difficulty": difficulty,
            "target_goal": target_goal,
            "rules": ["3-5 questions", "clear correct answer", "mix conceptual and applied"],
        }
        return await self.openai.chat_json(system=system, user=str(user))
