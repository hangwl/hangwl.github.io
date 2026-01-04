---
title: "HTTP"
links:
  - 'https'
  - 'http-vs-https'
  - 'rest-api'
---

## Introduction

**HTTP (Hypertext Transfer Protocol)** is the foundation of data communication on the web. It's a stateless, request-response protocol where clients (browsers) request resources and servers respond with data.

All HTTP data is transmitted in **plaintext**, making it vulnerable to interception. For secure communication, use [HTTPS](/notes/https).

## How HTTP Works

1. **Client Request**: Browser sends HTTP request to server
2. **Server Processing**: Server processes the request
3. **Server Response**: Server sends back HTTP response
4. **Connection**: Closes (HTTP/1.0) or stays open for reuse (HTTP/1.1+)

## HTTP Request

```http
GET /api/users HTTP/1.1
Host: example.com
User-Agent: Mozilla/5.0
Accept: application/json
```

**Components:**
- **Method**: GET, POST, PUT, PATCH, DELETE
- **Path**: Resource location
- **Headers**: Metadata (Host, User-Agent, Accept, etc.)
- **Body**: Data payload (for POST/PUT/PATCH)

## HTTP Response

```http
HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: 1234

{"id": 1, "name": "John"}
```

**Components:**
- **Status Code**: Result indicator (200, 404, 500, etc.)
- **Headers**: Metadata (Content-Type, Cache-Control, etc.)
- **Body**: Response data

## HTTP Methods

| Method | Purpose | Idempotent | Safe |
|--------|---------|------------|------|
| **GET** | Retrieve resource | Yes | Yes |
| **POST** | Create resource | No | No |
| **PUT** | Update/replace resource | Yes | No |
| **PATCH** | Partial update | No | No |
| **DELETE** | Remove resource | Yes | No |
| **HEAD** | Get headers only | Yes | Yes |
| **OPTIONS** | Get allowed methods | Yes | Yes |

## Status Codes

### 2xx Success
- **200 OK**: Request succeeded
- **201 Created**: Resource created
- **204 No Content**: Success with no response body

### 3xx Redirection
- **301 Moved Permanently**: Resource permanently moved
- **302 Found**: Temporary redirect
- **304 Not Modified**: Cached version valid

### 4xx Client Errors
- **400 Bad Request**: Invalid syntax
- **401 Unauthorized**: Authentication required
- **403 Forbidden**: Not authorized
- **404 Not Found**: Resource doesn't exist
- **429 Too Many Requests**: Rate limit exceeded

### 5xx Server Errors
- **500 Internal Server Error**: Generic server error
- **502 Bad Gateway**: Invalid upstream response
- **503 Service Unavailable**: Server unavailable

## HTTP Versions

| Version | Year | Key Features |
|---------|------|--------------|
| **HTTP/1.0** | 1996 | Basic headers, new connection per request |
| **HTTP/1.1** | 1997 | Persistent connections, pipelining, chunked transfer |
| **HTTP/2** | 2015 | Binary protocol, multiplexing, header compression, server push |
| **HTTP/3** | 2022 | QUIC (UDP-based), faster connections, better loss recovery |

## Caching

Control caching with headers:

```http
Cache-Control: max-age=3600, public
Cache-Control: no-cache, no-store, must-revalidate
ETag: "abc123"
```

**Directives:**
- **max-age**: Cache duration (seconds)
- **public/private**: Cacheable by any cache / browser only
- **no-cache**: Revalidate before using
- **no-store**: Don't cache at all

## Cookies

Store state information:

```http
Set-Cookie: sessionid=abc123; Path=/; HttpOnly; Secure; SameSite=Strict
```

**Attributes:**
- **Path**: URL path where cookie is valid
- **Domain**: Domain where cookie is valid
- **Expires/Max-Age**: Expiration
- **Secure**: HTTPS only
- **HttpOnly**: Not accessible via JavaScript
- **SameSite**: CSRF protection

## Limitations

- **No encryption**: Data transmitted in plaintext
- **No authentication**: Can't verify server identity
- **No integrity**: Data can be modified in transit
- **Security risks**: Vulnerable to MITM, packet sniffing, session hijacking

For secure communication, always use [HTTPS](/notes/https) in production.
