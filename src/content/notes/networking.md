---
title: "Networking"
links:
  - 'tcp'
  - 'udp'
  - 'http'
  - 'https'
---

## Introduction

**Networking** refers to the practice of connecting computers and devices to share resources and communicate. Modern networking is built on the **OSI model** and **TCP/IP protocol suite**, enabling everything from web browsing to video streaming.

Understanding networking fundamentals is essential for building distributed systems, APIs, and web applications.

## OSI Model

The OSI (Open Systems Interconnection) model defines seven layers of network communication:

| Layer | Name | Function | Examples |
|-------|------|----------|----------|
| **7** | Application | User-facing protocols | HTTP, FTP, SMTP, DNS |
| **6** | Presentation | Data formatting, encryption | SSL/TLS, JPEG, ASCII |
| **5** | Session | Connection management | NetBIOS, RPC |
| **4** | Transport | End-to-end communication | [TCP](/notes/tcp), [UDP](/notes/udp) |
| **3** | Network | Routing, addressing | IP, ICMP, routing |
| **2** | Data Link | Physical addressing | Ethernet, Wi-Fi, MAC |
| **1** | Physical | Hardware transmission | Cables, signals, bits |

## TCP/IP Model

The practical model used in modern networking (simplified from OSI):

**Application Layer**: HTTP, HTTPS, FTP, DNS, SMTP
- User-facing protocols and services

**Transport Layer**: [TCP](/notes/tcp), [UDP](/notes/udp)
- Manages data delivery between applications

**Internet Layer**: IP, ICMP
- Routes packets across networks

**Link Layer**: Ethernet, Wi-Fi
- Physical network connection

## IP Addressing

### IPv4
- **Format**: Four octets (e.g., `192.168.1.1`)
- **Address space**: ~4.3 billion addresses
- **Private ranges**: `10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`

### IPv6
- **Format**: Eight groups of hexadecimal (e.g., `2001:0db8::1`)
- **Address space**: 340 undecillion addresses
- **Adoption**: Growing to address IPv4 exhaustion

## Common Protocols

### Transport Layer

- **[TCP](/notes/tcp)**: Reliable, connection-oriented, ordered delivery
- **[UDP](/notes/udp)**: Fast, connectionless, no guarantees

### Application Layer

- **[HTTP/HTTPS](/notes/http)**: Web communication
- **DNS**: Domain name resolution
- **FTP**: File transfer
- **SMTP**: Email transmission
- **SSH**: Secure remote access

## Ports

Ports identify specific services on a host:

**Well-known ports (0-1023):**
- **80**: HTTP
- **443**: HTTPS
- **22**: SSH
- **21**: FTP
- **25**: SMTP
- **53**: DNS

**Registered ports (1024-49151):**
- Application-specific services

**Dynamic ports (49152-65535):**
- Temporary client connections

## Network Devices

- **Router**: Connects different networks, routes traffic
- **Switch**: Connects devices within a network
- **Firewall**: Filters traffic based on security rules
- **Load Balancer**: Distributes traffic across servers
- **Gateway**: Connects networks using different protocols

## Best Practices

- **Use [HTTPS](/notes/https)**: Encrypt data in transit
- **Firewall Configuration**: Block unnecessary ports
- **Network Segmentation**: Isolate sensitive systems
- **Monitoring**: Track traffic patterns and anomalies
- **DNS Security**: Use DNSSEC, avoid DNS spoofing
- **Rate Limiting**: Prevent DDoS attacks
- **Choose Protocol Wisely**: [TCP](/notes/tcp) for reliability, [UDP](/notes/udp) for speed
