import os
from motor.motor_asyncio import AsyncIOMotorClient
from datetime import datetime, timedelta
from typing import Optional
from jose import JWTError, jwt
from passlib.context import CryptContext
from .models import User, UserCreate, TokenData

# MongoDB连接
MONGODB_URI = os.getenv("MONGODB_URI", "mongodb://localhost:27017")
client = AsyncIOMotorClient(MONGODB_URI)
db = client.chat_db

# JWT配置
SECRET_KEY = os.getenv("SECRET_KEY", "your-secret-key-here")
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30

# 密码哈希
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

# 数据库集合
users_collection = db.users
messages_collection = db.messages
chat_rooms_collection = db.chat_rooms

async def get_user_by_username(username: str):
    return await users_collection.find_one({"username": username})

async def get_user_by_email(email: str):
    return await users_collection.find_one({"email": email})

async def create_user(user: UserCreate):
    hashed_password = pwd_context.hash(user.password)
    user_dict = {
        "username": user.username,
        "email": user.email,
        "password": hashed_password,
        "created_at": datetime.utcnow()
    }
    result = await users_collection.insert_one(user_dict)
    user_dict["id"] = str(result.inserted_id)
    return user_dict

def verify_password(plain_password: str, hashed_password: str):
    return pwd_context.verify(plain_password, hashed_password)

def create_access_token(data: dict, expires_delta: Optional[timedelta] = None):
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(minutes=15)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt

async def get_current_user(token: str):
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        username: str = payload.get("sub")
        if username is None:
            return None
        token_data = TokenData(username=username)
    except JWTError:
        return None
    user = await get_user_by_username(username=token_data.username)
    if user is None:
        return None
    return user

# 消息相关函数
async def save_message(content: str, sender_id: str, sender_username: str, room_id: str):
    message = {
        "content": content,
        "sender_id": sender_id,
        "sender_username": sender_username,
        "room_id": room_id,
        "created_at": datetime.utcnow()
    }
    result = await messages_collection.insert_one(message)
    message["id"] = str(result.inserted_id)
    return message

async def get_room_messages(room_id: str, limit: int = 50):
    cursor = messages_collection.find({"room_id": room_id})
    cursor.sort("created_at", -1).limit(limit)
    messages = await cursor.to_list(length=limit)
    return messages

# 聊天室相关函数
async def create_chat_room(name: str, creator_id: str):
    room = {
        "name": name,
        "created_at": datetime.utcnow(),
        "participants": [creator_id]
    }
    result = await chat_rooms_collection.insert_one(room)
    room["id"] = str(result.inserted_id)
    return room

async def get_chat_room(room_id: str):
    return await chat_rooms_collection.find_one({"_id": room_id})

async def add_participant_to_room(room_id: str, user_id: str):
    await chat_rooms_collection.update_one(
        {"_id": room_id},
        {"$addToSet": {"participants": user_id}}
    ) 