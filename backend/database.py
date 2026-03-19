from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base


# URL FOR SQL lite database, tells sql alchmy where to find the database file
DATABASE_URL = "sqlite:///./users.db"

#connect fastpi to databse, connect args allow same connect used across different threads
engine = create_engine(DATABASE_URL, connect_args={"check_same_thread": False})

#this session is to interact with the database
SessionLocal = sessionmaker(bind=engine)

#create base class,help sql alchemy map to the db
Base = declarative_base()