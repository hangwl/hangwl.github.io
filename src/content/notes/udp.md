---
title: "UDP"
links:
  - 'networking'
  - 'tcp'
  - 'websockets'
---

## Introduction

**UDP (User Datagram Protocol)** is a connectionless transport layer protocol that provides **fast, lightweight** data transmission without guarantees of delivery, ordering, or error correction.

UDP prioritizes speed over reliability, making it ideal for real-time applications where occasional data loss is acceptable.

## Key Features

- **Connectionless**: No handshake or connection setup
- **Unreliable**: No delivery guarantees
- **Unordered**: Packets may arrive out of order
- **Fast**: Minimal overhead and latency
- **Lightweight**: Simple header structure
- **Broadcast/Multicast**: Supports one-to-many communication

## UDP Header

UDP has a simple 8-byte header:

- **Source Port**: Sender's port (16 bits)
- **Destination Port**: Receiver's port (16 bits)
- **Length**: Datagram size (16 bits)
- **Checksum**: Optional error detection (16 bits)

Much simpler than TCP's 20+ byte header with extensive control fields.

## How UDP Works

**1. Application sends data**
- No connection establishment required

**2. UDP wraps data in datagram**
- Adds minimal header information

**3. Datagram sent to network layer**
- Immediate transmission, no waiting

**4. Receiver processes datagram**
- No acknowledgment sent back

**5. No retransmission**
- Lost packets are simply dropped

## UDP vs TCP

| Feature | UDP | TCP |
|---------|-----|-----|
| **Connection** | Connectionless | Connection-oriented |
| **Reliability** | No guarantees | Guaranteed delivery |
| **Ordering** | Unordered | Ordered |
| **Speed** | Very fast | Slower |
| **Overhead** | Minimal (8 bytes) | Higher (20+ bytes) |
| **Use Cases** | Streaming, gaming, DNS | Web, email, files |

See [TCP](/notes/tcp) for detailed comparison.

## Common Use Cases

**Video/Audio Streaming**: YouTube, Netflix, VoIP
- Real-time delivery, occasional frame drops acceptable

**Online Gaming**: Multiplayer games
- Low latency critical, can interpolate missing data

**DNS Queries**: Domain name resolution
- Fast lookups, can retry if needed

**IoT Sensors**: Telemetry data
- Frequent updates, individual packet loss tolerable

**Live Broadcasting**: Sports, news
- Real-time delivery more important than perfection

**Network Management**: SNMP, syslog
- Simple request/response patterns

## Advantages

- **Low Latency**: No handshake or acknowledgment delays
- **Efficient**: Minimal protocol overhead
- **Broadcast Support**: Send to multiple recipients simultaneously
- **Simple**: Easy to implement and debug
- **No Connection State**: Server doesn't track client connections

## Disadvantages

- **No Reliability**: Packets may be lost, duplicated, or corrupted
- **No Ordering**: Data may arrive out of sequence
- **No Flow Control**: Can overwhelm receiver
- **No Congestion Control**: Doesn't adapt to network conditions
- **Application Responsibility**: Must handle errors and retransmissions

## When to Use UDP

**Choose UDP when:**
- Speed is more important than reliability
- Real-time delivery is critical
- Occasional data loss is acceptable
- Low latency is required
- Broadcasting to multiple recipients

**Choose [TCP](/notes/tcp) when:**
- Data integrity is critical
- Ordered delivery is required
- Reliability matters more than speed
- Complete data transfer is necessary

## Best Practices

- **Application-Level Reliability**: Implement retransmission if needed
- **Packet Size**: Keep under MTU (typically 1500 bytes) to avoid fragmentation
- **Sequence Numbers**: Add to application data for ordering
- **Checksums**: Enable UDP checksum for error detection
- **Rate Limiting**: Prevent network flooding
- **Timeout Handling**: Implement timeouts for request/response patterns
- **Consider QUIC**: Modern protocol combining UDP speed with TCP reliability
