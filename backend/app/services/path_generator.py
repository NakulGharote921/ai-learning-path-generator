from app.services.openai_service import OpenAIService


class PathGeneratorService:
    def __init__(self, openai_service: OpenAIService) -> None:
        self.openai = openai_service

    async def generate(self, assessment: dict, target_goal: str, duration_months: int) -> dict:
        system = (
            "You are a senior curriculum architect. Produce only valid JSON with keys goal, duration, roadmap. "
            "Each roadmap item must include title, difficulty, estimated_weeks, rationale, resources_needed."
        )
        user = {
            "assessment": assessment,
            "target_goal": target_goal,
            "duration_months": duration_months,
            "requirements": {
                "adapt_to_learning_style": True,
                "optimize_for_study_hours": assessment.get("study_hours_per_week"),
                "include_revision_modules_when_needed": True,
            },
        }
        return await self.openai.chat_json(system=system, user=str(user))
