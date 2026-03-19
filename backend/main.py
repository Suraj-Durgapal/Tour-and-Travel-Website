from fastapi import FastAPI
from database import engine, Base
from fastapi import Depends, HTTPException
from sqlalchemy.orm import Session
from database import SessionLocal
import models, schemas
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # allow all (for now)
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

Base.metadata.create_all(bind=engine) 
# create all the data for the table inside engine


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


#
@app.post("/signup")
def signup(user: schemas.UserCreate, db: Session = Depends(get_db)):
    # check if user exists
    existing = db.query(models.User).filter(models.User.email == user.email).first()
    if existing:
        raise HTTPException(status_code=400, detail="Email already exists")

    new_user = models.User(email=user.email, password=user.password)
    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    return {"message": "User created"}

@app.post("/login")
def login(user: schemas.UserLogin, db: Session = Depends(get_db)):
    db_user = db.query(models.User).filter(models.User.email == user.email).first()

    if not db_user or db_user.password != user.password:
        raise HTTPException(status_code=400, detail="Invalid credentials")

    return {"message": "Login successful"}