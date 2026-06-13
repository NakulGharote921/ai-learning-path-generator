@echo off
setlocal enabledelayedexpansion

REM Starts frontend (Vite) and backend (FastAPI) together.
REM Usage:
REM   start start-all.cmd

set "ROOT=%~dp0"

REM --- Backend ---
start "backend" cmd /c "cd /d %ROOT%backend && if not exist .venv\Scripts\activate (python -m venv .venv) && .venv\Scripts\activate && pip install -r requirements.txt && uvicorn app.main:app --reload"

REM --- Frontend ---
start "frontend" cmd /c "cd /d %ROOT%frontend && if not exist node_modules (npm install) && npm run dev"

echo Started backend and frontend.
echo Backend: http://localhost:8000
echo Frontend: http://localhost:5173

