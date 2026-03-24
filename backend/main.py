from datetime import datetime, timedelta
from pathlib import Path
import sqlite3
from typing import Optional

from fastapi import Depends, FastAPI, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from jose import JWTError, jwt
from passlib.context import CryptContext
from pydantic import BaseModel, EmailStr


BASE_DIR = Path(__file__).resolve().parent
DB_PATH = BASE_DIR / "users.db"

SECRET_KEY = "change-this-secret-key"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 60

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/login")

app = FastAPI(title="ExploreUttrakhand Auth API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://127.0.0.1:5173", "http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


def get_db():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    try:
        yield conn
    finally:
        conn.close()


def create_tables(conn: sqlite3.Connection):
    conn.execute(
        """
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT NOT NULL UNIQUE,
            password_hash TEXT NOT NULL,
            created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
        )
        """
    )

    #Booking table to store user bookings
    conn.execute(
        """
        CREATE TABLE IF NOT EXISTS bookings (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER NOT NULL,
            hotel_id INTEGER NOT NULL,
            room_id INTEGER NOT NULL,
            hotel_name TEXT NOT NULL,
            room_type TEXT NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY(user_id) REFERENCES users(id)
        )
        """
    )
    conn.commit()


@app.on_event("startup")
def on_startup():
    DB_PATH.parent.mkdir(parents=True, exist_ok=True)
    conn = sqlite3.connect(DB_PATH)
    create_tables(conn)
    conn.close()


#?SCHEMAS

class SignupRequest(BaseModel):
    name: str
    email: EmailStr
    password: str


class UserResponse(BaseModel):
    id: int
    name: str
    email: str
    created_at: str


class Token(BaseModel):
    access_token: str
    token_type: str


class BookingCreate(BaseModel):
    hotel_id: int
    room_id: int
    hotel_name: str
    room_type: str

    # checkin: str
    # checkout: str


class BookingResponse(BaseModel):
    id: int
    hotel_id: int
    room_id: int
    hotel_name: str
    room_type: str
    # checkin: str
    # checkout: str
    created_at: str


def verify_password(plain_password: str, hashed_password: str) -> bool:
    return pwd_context.verify(plain_password, hashed_password)


def get_password_hash(password: str) -> str:
    return pwd_context.hash(password)


def create_access_token(data: dict, expires_delta: Optional[timedelta] = None):
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    to_encode.update({"exp": expire})
    return jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)


def get_user_by_email(conn: sqlite3.Connection, email: str):
    cur = conn.execute("SELECT * FROM users WHERE email = ?", (email.lower().strip(),))
    return cur.fetchone()


def create_user(conn: sqlite3.Connection, name: str, email: str, password: str):
    hashed_password = get_password_hash(password)
    cur = conn.execute(
        "INSERT INTO users (name, email, password_hash) VALUES (?, ?, ?)",
        (name.strip(), email.lower().strip(), hashed_password),
    )
    conn.commit()
    user_id = cur.lastrowid
    return conn.execute("SELECT * FROM users WHERE id = ?", (user_id,)).fetchone()


def authenticate_user(conn: sqlite3.Connection, email: str, password: str):
    user = get_user_by_email(conn, email)
    if not user:
        return None
    if not verify_password(password, user["password_hash"]):
        return None
    return user


@app.post("/signup", response_model=UserResponse)
def signup(payload: SignupRequest, conn: sqlite3.Connection = Depends(get_db)):
    if get_user_by_email(conn, payload.email):
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Email is already registered",
        )

    user = create_user(conn, payload.name, payload.email, payload.password)
    return {
        "id": user["id"],
        "name": user["name"],
        "email": user["email"],
        "created_at": user["created_at"],

    }


@app.post("/login", response_model=Token)
def login(form_data: OAuth2PasswordRequestForm = Depends(), conn: sqlite3.Connection = Depends(get_db)):
    user = authenticate_user(conn, form_data.username, form_data.password)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect email or password",
            headers={"WWW-Authenticate": "Bearer"},
        )

    access_token = create_access_token(data={"sub": str(user["id"]), "email": user["email"]})
    return {"access_token": access_token, "token_type": "bearer"}


def get_current_user(token: str = Depends(oauth2_scheme), conn: sqlite3.Connection = Depends(get_db)):
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        user_id = payload.get("sub")
        if user_id is None:
            raise credentials_exception
    except JWTError:
        raise credentials_exception

    user = conn.execute("SELECT * FROM users WHERE id = ?", (user_id,)).fetchone()
    if user is None:
        raise credentials_exception

    return user


@app.get("/me", response_model=UserResponse)
def read_me(current_user: sqlite3.Row = Depends(get_current_user)):
    return {
        "id": current_user["id"],
        "name": current_user["name"],
        "email": current_user["email"],
        "created_at": current_user["created_at"],
    }

@app.post("/bookings", response_model=BookingResponse)
def create_booking(
    payload: BookingCreate,
    current_user: sqlite3.Row = Depends(get_current_user),
    conn: sqlite3.Connection = Depends(get_db),
):
    cur = conn.execute(
        """
        INSERT INTO bookings (user_id, hotel_id, room_id, hotel_name, room_type)
        VALUES (?, ?, ?, ?, ?)
        """,
        (
            current_user["id"],   # 🔥 IMPORTANT (comes from token)
            payload.hotel_id,
            payload.room_id,
            payload.hotel_name,
            payload.room_type,
            # payload.checkin,
            # payload.checkout,
        ),
    )
    conn.commit()

    booking_id = cur.lastrowid

    booking = conn.execute(
        "SELECT * FROM bookings WHERE id = ?", (booking_id,)

    ).fetchone()

    return dict(booking)

@app.get("/bookings")
def get_user_bookings(
    current_user: sqlite3.Row = Depends(get_current_user),
    conn: sqlite3.Connection = Depends(get_db),
) :
    bookings = conn.execute(
        "SELECT * FROM bookings WHERE user_id = ?",
        (current_user["id"],),
    ).fetchall()
    return [dict(b) for b in bookings]