---
title: "REST API"
links:
  - 'http'
  - 'https'
  - 'webhooks'
  - 'websockets'
---

## Introduction

REST (Representational State Transfer) is an **architectural style for designing networked applications**. REST APIs use [HTTP](/notes/http) methods to perform CRUD operations on resources identified by URLs.

REST APIs are **stateless**—each request contains all information needed to process it, and servers don't store client session state between requests.

## Core Principles

REST is built on key architectural constraints:

- **Client-Server**: Separation between UI and data storage
- **Stateless**: Each request is self-contained
- **Cacheable**: Responses define caching behavior
- **Uniform Interface**: Consistent resource identification and manipulation via URIs
- **Layered System**: Hierarchical architecture with independent layers

## HTTP Methods

| Method | Purpose | Idempotent | Safe |
|--------|---------|------------|------|
| **GET** | Retrieve resource | Yes | Yes |
| **POST** | Create resource | No | No |
| **PUT** | Replace resource | Yes | No |
| **PATCH** | Partial update | No | No |
| **DELETE** | Remove resource | Yes | No |

- **Idempotent**: Multiple identical requests have the same effect
- **Safe**: Operation doesn't modify resources

## Status Codes

### Success (2xx)
- **200 OK**: Request succeeded
- **201 Created**: Resource created (POST)
- **204 No Content**: Success with no body (DELETE)

### Client Errors (4xx)
- **400 Bad Request**: Invalid syntax
- **401 Unauthorized**: Authentication required
- **403 Forbidden**: Not authorized
- **404 Not Found**: Resource doesn't exist
- **429 Too Many Requests**: Rate limit exceeded

### Server Errors (5xx)
- **500 Internal Server Error**: Generic error
- **503 Service Unavailable**: Server unavailable

## Resource Naming

Best practices for endpoint design:

**Use nouns, not verbs:**
```
✅ GET /users/123
❌ GET /getUser/123
```

**Use plural nouns:**
```
✅ GET /users
❌ GET /user
```

**Hierarchical structure:**
```
✅ GET /users/123/orders
✅ GET /users/123/orders/456
```

**Use hyphens for readability:**
```
✅ GET /user-profiles
❌ GET /user_profiles
```

## Request Examples

### GET - Retrieve Resource

```http
GET /api/users/123
Authorization: Bearer <token>
```

Response:
```json
{
  "id": 123,
  "name": "John Doe",
  "email": "john@example.com"
}
```

### POST - Create Resource

```http
POST /api/users
Content-Type: application/json

{
  "name": "Jane Smith",
  "email": "jane@example.com"
}
```

### PATCH - Partial Update

```http
PATCH /api/users/123
Content-Type: application/json

{
  "email": "newemail@example.com"
}
```

## Query Parameters

Common patterns for filtering, sorting, and pagination:

```http
GET /api/products?category=electronics&price_min=100
GET /api/products?sort=-price
GET /api/users?page=2&limit=20
GET /api/users?fields=id,name,email
```

## Authentication

Common methods:

**Bearer Token (JWT):**
```http
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

**API Key:**
```http
X-API-Key: abc123def456
```

**OAuth 2.0:**
```http
Authorization: Bearer <oauth_access_token>
```

## Best Practices

- **Use [HTTPS](/notes/https)**: Always encrypt data in transit
- **Validate Input**: Sanitize all user input
- **Rate Limiting**: Prevent abuse
- **Caching**: Use ETags and Cache-Control headers
- **Pagination**: Limit response sizes for large collections
- **Versioning**: Use URL path versioning (`/api/v1/users`)
- **Error Handling**: Return consistent error responses with clear messages
- **Documentation**: Use OpenAPI/Swagger for API documentation

## Comparison

| Aspect | REST | GraphQL | gRPC |
|--------|------|---------|------|
| **Protocol** | HTTP | HTTP | HTTP/2 |
| **Data Format** | JSON, XML | JSON | Protocol Buffers |
| **Endpoints** | Multiple | Single | Multiple |
| **Learning Curve** | Low | Medium | High |
| **Use Case** | General APIs | Complex data | Microservices |
