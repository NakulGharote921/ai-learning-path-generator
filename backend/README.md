# AI Learning Path Generator Backend

## Run

```bash
cd backend
python -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```

## Environment

Copy `backend/.env.example` to `backend/.env` and fill in the values you need for local development. This backend is set up to run without Supabase, Clerk, Chroma, or Docker.

## API

- `POST /api/v1/assessment`
- `GET /api/v1/assessment/{user_id}`
- `POST /api/v1/learning-path/generate`
- `GET /api/v1/learning-path/{id}`
- `GET /api/v1/resources/recommend`
- `POST /api/v1/chat`
- `POST /api/v1/progress/update`
- `GET /api/v1/progress/{user_id}`
- `POST /api/v1/quiz/generate`
- `GET /api/v1/analytics/dashboard`
