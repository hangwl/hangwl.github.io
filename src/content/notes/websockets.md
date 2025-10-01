---
title: "WebSockets"
links:
  - 'http'
  - 'https'
  - 'http-vs-https'
---

## Introduction

WebSockets is a **communication protocol that provides full-duplex, bidirectional communication channels over a single TCP connection**. Unlike HTTP, which follows a request-response model, WebSockets enable real-time data exchange between clients and servers with minimal overhead.

WebSockets are designed for scenarios requiring **persistent connections** and **low-latency communication**, making them ideal for interactive applications.

## How WebSockets Work

WebSockets establish a connection through a process called the **WebSocket handshake**:

1. **Handshake Request**: Client sends an HTTP request with an `Upgrade: websocket` header
2. **Handshake Response**: Server responds with `101 Switching Protocols` to accept the upgrade
3. **Connection Established**: The HTTP connection is upgraded to a WebSocket connection
4. **Bidirectional Communication**: Both client and server can send messages at any time
5. **Connection Close**: Either party can close the connection when done

Once established, the WebSocket connection remains open, allowing both parties to send data frames without the overhead of HTTP headers for each message.

## WebSockets vs HTTP

| Aspect | WebSockets | HTTP |
|--------|------------|------|
| **Communication** | Full-duplex (bidirectional) | Half-duplex (request-response) |
| **Connection** | Persistent | Stateless (new connection per request) |
| **Overhead** | Low (minimal framing) | High (headers with each request) |
| **Latency** | Very low | Higher (connection setup per request) |
| **Server Push** | Native support | Requires polling or SSE |
| **Use Case** | Real-time, interactive apps | Traditional web requests |

## WebSockets vs Polling vs SSE

| Feature | WebSockets | Long Polling | Server-Sent Events (SSE) |
|---------|------------|--------------|--------------------------|
| **Direction** | Bidirectional | Client-initiated | Server to client only |
| **Connection** | Single persistent | Multiple HTTP requests | Single persistent HTTP |
| **Efficiency** | Very high | Low | Medium |
| **Browser Support** | Excellent | Universal | Good (no IE) |
| **Complexity** | Medium | Low | Low |
| **Reconnection** | Manual | Automatic | Automatic |

## Common Use Cases

WebSockets are ideal for applications requiring real-time updates:

- **Chat Applications**: Instant messaging, group chats, presence indicators
- **Live Feeds**: Social media updates, news tickers, activity streams
- **Collaborative Tools**: Real-time document editing, whiteboards, code editors
- **Gaming**: Multiplayer games, real-time game state synchronization
- **Financial Trading**: Live stock prices, order book updates, trade notifications
- **IoT Dashboards**: Sensor data streaming, device control, monitoring
- **Live Sports**: Score updates, play-by-play commentary, statistics
- **Notifications**: Push notifications, alerts, system status updates

## Implementation Example

### Client-Side (JavaScript)

```javascript
// Create WebSocket connection
const socket = new WebSocket('wss://example.com/socket');

// Connection opened
socket.addEventListener('open', (event) => {
  console.log('Connected to WebSocket server');
  socket.send(JSON.stringify({ type: 'greeting', message: 'Hello Server!' }));
});

// Listen for messages
socket.addEventListener('message', (event) => {
  const data = JSON.parse(event.data);
  console.log('Message from server:', data);
});

// Handle errors
socket.addEventListener('error', (event) => {
  console.error('WebSocket error:', event);
});

// Connection closed
socket.addEventListener('close', (event) => {
  console.log('Disconnected from WebSocket server');
});

// Send a message
function sendMessage(message) {
  if (socket.readyState === WebSocket.OPEN) {
    socket.send(JSON.stringify(message));
  }
}
```

### Server-Side (Node.js with ws library)

```javascript
const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {
  console.log('New client connected');

  // Send welcome message
  ws.send(JSON.stringify({ type: 'welcome', message: 'Connected to server' }));

  // Listen for messages from client
  ws.on('message', (message) => {
    const data = JSON.parse(message);
    console.log('Received:', data);
    
    // Broadcast to all clients
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify(data));
      }
    });
  });

  // Handle disconnection
  ws.on('close', () => {
    console.log('Client disconnected');
  });
});
```

## Best Practices

### Connection Management

- **Reconnection Logic**: Implement automatic reconnection with exponential backoff
- **Heartbeat/Ping-Pong**: Send periodic pings to detect broken connections
- **Connection Limits**: Set reasonable limits on concurrent connections per user
- **Graceful Shutdown**: Close connections properly with appropriate close codes

### Security

- **Use WSS (WebSocket Secure)**: Always use encrypted connections in production
- **Authentication**: Verify user identity during handshake or first message
- **Authorization**: Validate permissions before sending sensitive data
- **Input Validation**: Sanitize and validate all incoming messages
- **Rate Limiting**: Prevent abuse by limiting message frequency

### Performance

- **Message Compression**: Enable permessage-deflate extension for large messages
- **Binary Frames**: Use binary format for non-text data to reduce overhead
- **Message Batching**: Combine multiple updates into single messages when possible
- **Connection Pooling**: Reuse connections efficiently on the server side

### Error Handling

- **Timeout Handling**: Set timeouts for connection establishment and message delivery
- **Error Recovery**: Handle network failures and temporary disconnections gracefully
- **Logging**: Log connection events, errors, and unusual patterns
- **Monitoring**: Track connection counts, message rates, and error rates

## WebSocket Close Codes

Common close codes defined in the WebSocket protocol:

- **1000**: Normal closure
- **1001**: Going away (e.g., server shutdown, browser navigation)
- **1002**: Protocol error
- **1003**: Unsupported data type
- **1006**: Abnormal closure (no close frame received)
- **1008**: Policy violation
- **1009**: Message too big
- **1011**: Server error

## Limitations

- **Firewall/Proxy Issues**: Some corporate firewalls block WebSocket connections
- **No HTTP Caching**: Cannot leverage HTTP caching mechanisms
- **Stateful**: Requires server to maintain connection state
- **Scalability**: Requires careful architecture for horizontal scaling
- **Browser Compatibility**: Older browsers may not support WebSockets
