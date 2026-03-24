# Backend (FastAPI + SQLite)

This backend provides a minimal authentication API for the ExploreUttrakhand project.

## Features
- `POST /signup` stores users in a local SQLite database (`users.db`) with a bcrypt-hashed password.
- `POST /login` validates credentials and returns a JWT access token.
- `GET /me` returns the authenticated user's profile (requires `Authorization: Bearer <token>`).

## Run locally
1. Install dependencies:

```bash
pip install -r requirements.txt
```

2. Start the server:

```bash
uvicorn main:app --reload --port 8000
```

## Notes
- The SQLite database file is created automatically at `backend/users.db`.
- The default JWT secret key is set in `main.py` as `SECRET_KEY`. For production use, replace it with a secure value.
