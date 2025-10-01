---
title: "SSL/TLS"
links:
  - 'https'
  - 'http-vs-https'
---

## Introduction

**SSL (Secure Sockets Layer)** and **TLS (Transport Layer Security)** are cryptographic protocols that provide secure communication over networks. TLS is the successor to SSL, though the term "SSL" is still commonly used to refer to both.

These protocols enable [HTTPS](/notes/https) by encrypting data transmitted between clients and servers.

## SSL/TLS Handshake

The handshake establishes a secure connection before any data is transmitted:

### Handshake Steps

**1. Client Hello**
- Client sends supported TLS versions and cipher suites
- Generates random number (Client Random)
- May include Server Name Indication (SNI)

**2. Server Hello**
- Server selects TLS version and cipher suite
- Sends SSL/TLS certificate with public key
- Sends random number (Server Random)

**3. Certificate Verification**
- Client verifies certificate signed by trusted CA
- Checks certificate hasn't expired
- Confirms domain matches certificate

**4. Key Exchange**
- Client generates pre-master secret
- Encrypts with server's public key (RSA) or uses Diffie-Hellman
- Sends to server

**5. Session Keys Generation**
- Both derive session keys from pre-master secret and random numbers
- These symmetric keys encrypt all subsequent communication

**6. Handshake Complete**
- Both send encrypted "Finished" messages
- Secure communication begins

### TLS Versions

| Version | Year | Status | Notes |
|---------|------|--------|-------|
| **SSL 2.0** | 1995 | Deprecated | Serious security flaws |
| **SSL 3.0** | 1996 | Deprecated | Vulnerable to POODLE attack |
| **TLS 1.0** | 1999 | Deprecated | Based on SSL 3.0 |
| **TLS 1.1** | 2006 | Deprecated | Improved security |
| **TLS 1.2** | 2008 | Current | Widely supported |
| **TLS 1.3** | 2018 | Current | Faster, more secure |

### TLS 1.3 Improvements

- **1-RTT handshake**: Reduced from 2 round trips
- **0-RTT resumption**: Instant reconnection for returning clients
- **Removed weak algorithms**: Only strong cipher suites
- **Forward secrecy**: Required by default
- **Encrypted handshake**: More metadata protected

## Cipher Suites

A cipher suite defines the algorithms used for secure communication:

### Cipher Suite Format

```
TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256
```

Components:
- **TLS**: Protocol
- **ECDHE**: Key exchange (Elliptic Curve Diffie-Hellman Ephemeral)
- **RSA**: Authentication
- **AES_128_GCM**: Symmetric encryption
- **SHA256**: Message authentication

### Recommended Cipher Suites

**TLS 1.3:**
- `TLS_AES_128_GCM_SHA256`
- `TLS_AES_256_GCM_SHA384`
- `TLS_CHACHA20_POLY1305_SHA256`

**TLS 1.2:**
- `TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256`
- `TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384`
- `TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305_SHA256`

### Forward Secrecy

Ephemeral key exchange (ECDHE, DHE) ensures:
- Session keys not derived from server's private key
- Past communications remain secure if private key compromised
- Each session uses unique keys

## Performance

Modern TLS is highly optimized:

- **TLS 1.3**: 1-RTT handshake vs 2-RTT in TLS 1.2
- **Session resumption**: Reuse previous session keys
- **0-RTT**: Zero round-trip time for returning clients
- **Hardware acceleration**: AES-NI for fast encryption
- **OCSP stapling**: Reduces revocation check overhead

## Best Practices

### Protocol Configuration

- **Use TLS 1.2+**: Disable older versions
- **Prefer TLS 1.3**: When supported by clients
- **Strong cipher suites**: Remove weak algorithms
- **Forward secrecy**: Use ECDHE/DHE key exchange

### Security

- **Keep software updated**: Apply security patches
- **Monitor vulnerabilities**: Stay informed about new attacks
- **Test configuration**: Use SSL Labs or similar tools
- **Disable compression**: Prevents CRIME attack
