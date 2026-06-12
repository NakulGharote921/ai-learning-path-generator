# AI Learning Path Generator Backend

## Run

```bash
cd backend
uvicorn app.main:app --reload
```

## Firebase CLI

Install the Firebase CLI globally if you need to manage Firebase hosting, auth, or other Firebase resources locally:

```bash
npm install -g firebase-tools
```

## Firebase config

If you are wiring the frontend to Firebase, copy the values from `backend/.env.example` into `frontend/.env` using the `VITE_FIREBASE_*` names.

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
