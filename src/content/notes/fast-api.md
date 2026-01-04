---
title: "FastAPI"
links:
  - 'rest-api'
  - 'http'
  - 'https'
---

## Introduction

FastAPI is a **modern, high-performance web framework for building APIs with Python 3.8+**. Built on Starlette and Pydantic, it combines speed, automatic validation, and interactive API documentation with minimal boilerplate.

Key strengths: high performance (comparable to NodeJS/Go), automatic OpenAPI docs, type-hint-based validation, and native async support.

## Core Features

- **Type Hints**: Python type hints drive validation, serialization, and documentation
- **Automatic Documentation**: Interactive Swagger UI and ReDoc generated automatically
- **Data Validation**: Built-in request/response validation via Pydantic
- **Async Support**: Native async/await for concurrent operations
- **Dependency Injection**: Intuitive system for reusable components
- **High Performance**: One of the fastest Python frameworks

## Basic Example

```python title="main.py"
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class Item(BaseModel):
    name: str
    price: float
    is_offer: bool = False

@app.get("/")
def read_root():
    return {"message": "Hello World"}

@app.post("/items/")
def create_item(item: Item):
    return {"item": item}
```

Run with `uvicorn main:app --reload` and access docs at `http://localhost:8000/docs`

## Request Handling

### Path and Query Parameters

```python
@app.get("/users/{user_id}")
def get_user(user_id: int, q: str = None):
    return {"user_id": user_id, "q": q}
```

### Request Body Validation

```python
from pydantic import BaseModel, Field, EmailStr

class User(BaseModel):
    username: str = Field(..., min_length=3)
    email: EmailStr
    age: int = Field(..., gt=0, lt=150)

@app.post("/users/")
def create_user(user: User):
    return user
```

### Response Models

```python
@app.get("/users/{user_id}", response_model=User)
def get_user(user_id: int):
    return {"username": "john", "email": "john@example.com", "age": 30}
```

## Dependency Injection

Reusable dependencies for authentication, database connections, and shared logic:

```python
from fastapi import Depends, HTTPException, Header

def verify_token(x_token: str = Header(...)):
    if x_token != "secret-token":
        raise HTTPException(status_code=401, detail="Invalid token")
    return x_token

@app.get("/protected/")
def protected_route(token: str = Depends(verify_token)):
    return {"message": "Access granted"}
```

## Async Operations

```python
import httpx

@app.get("/external-api/")
async def call_external_api():
    async with httpx.AsyncClient() as client:
        response = await client.get("https://api.example.com/data")
        return response.json()
```

## Best Practices

- **Project Structure**: Organize code into routers, models, schemas, and services
- **Environment Config**: Use Pydantic Settings for configuration management
- **API Versioning**: Use router prefixes (`/api/v1`, `/api/v2`)
- **Error Handling**: Return consistent error responses with proper status codes
- **Testing**: Use `TestClient` for endpoint testing
- **Security**: Always use [HTTPS](/notes/https) in production, implement proper authentication
- **Documentation**: Leverage automatic OpenAPI docs, add descriptions to endpoints

## Comparison

| Feature | FastAPI | Flask | Django |
|---------|---------|-------|--------|
| **Performance** | Very High | Medium | Medium |
| **Async Support** | Native | Limited | Native (3.1+) |
| **Auto Documentation** | Yes | No | No |
| **Data Validation** | Built-in | Manual | Forms/Serializers |
| **Use Case** | Modern APIs | General web | Full-stack |
