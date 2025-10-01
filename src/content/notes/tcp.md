---
title: "TCP"
links:
  - 'networking'
  - 'udp'
  - 'http'
  - 'https'
---

## Introduction

**TCP (Transmission Control Protocol)** is a connection-oriented transport layer protocol that provides **reliable, ordered, and error-checked** delivery of data between applications over IP networks.

TCP is used by most internet applications including [HTTP](/notes/http), [HTTPS](/notes/https), email, and file transfer, where data integrity is critical.

## Key Features

- **Connection-Oriented**: Establishes connection before data transfer
- **Reliable Delivery**: Guarantees data arrives without errors
- **Ordered Packets**: Data arrives in the same order it was sent
- **Flow Control**: Prevents overwhelming the receiver
- **Congestion Control**: Adapts to network conditions
- **Error Detection**: Checksums verify data integrity

## Three-Way Handshake

TCP establishes connections using a three-way handshake:

**1. SYN (Synchronize)**
- Client sends SYN packet to server
- Initiates connection request

**2. SYN-ACK (Synchronize-Acknowledge)**
- Server responds with SYN-ACK
- Acknowledges client's request

**3. ACK (Acknowledge)**
- Client sends ACK to server
- Connection established

```
Client                    Server
  |                         |
  |-------- SYN ----------->|
  |                         |
  |<------ SYN-ACK ---------|
  |                         |
  |-------- ACK ----------->|
  |                         |
  |   Connection Ready      |
```

## Connection Termination

TCP uses a four-way handshake to close connections:

**1. FIN**: Client sends FIN (finish) packet
**2. ACK**: Server acknowledges FIN
**3. FIN**: Server sends its own FIN
**4. ACK**: Client acknowledges server's FIN

## TCP Header

Key fields in the TCP header:

- **Source/Destination Port**: Identifies applications
- **Sequence Number**: Orders packets
- **Acknowledgment Number**: Confirms received data
- **Flags**: SYN, ACK, FIN, RST, PSH, URG
- **Window Size**: Flow control mechanism
- **Checksum**: Error detection

## Flow Control

TCP uses a **sliding window** mechanism:

- Receiver advertises available buffer space
- Sender limits data based on receiver's window
- Prevents buffer overflow at receiver
- Dynamically adjusts to receiver capacity

## Congestion Control

TCP adapts to network congestion:

**Slow Start**: Gradually increases transmission rate
**Congestion Avoidance**: Maintains optimal rate
**Fast Retransmit**: Quickly resends lost packets
**Fast Recovery**: Recovers from packet loss efficiently

## TCP vs UDP

| Feature | TCP | UDP |
|---------|-----|-----|
| **Connection** | Connection-oriented | Connectionless |
| **Reliability** | Guaranteed delivery | No guarantees |
| **Ordering** | Ordered packets | Unordered |
| **Speed** | Slower (overhead) | Faster (minimal overhead) |
| **Error Checking** | Extensive | Basic checksum |
| **Use Cases** | Web, email, file transfer | Streaming, gaming, DNS |

See [UDP](/notes/udp) for comparison.

## Common Use Cases

**Web Traffic**: [HTTP](/notes/http), [HTTPS](/notes/https)
- Reliable page loading and API requests

**Email**: SMTP, IMAP, POP3
- Ensures message delivery

**File Transfer**: FTP, SFTP
- Guarantees complete file transmission

**Remote Access**: SSH, Telnet
- Reliable command execution

**Database Connections**: MySQL, PostgreSQL
- Consistent query results

## Best Practices

- **Keep-Alive**: Maintain long-lived connections for efficiency
- **Connection Pooling**: Reuse connections to reduce overhead
- **Timeout Configuration**: Set appropriate timeouts for reliability
- **Buffer Sizing**: Optimize send/receive buffers for performance
- **Use [HTTPS](/notes/https)**: Encrypt TCP traffic for security
- **Monitor Connections**: Track connection states and errors
