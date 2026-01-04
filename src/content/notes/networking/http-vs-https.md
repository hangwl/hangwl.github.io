---
title: "HTTP vs HTTPS"
links:
  - 'http'
  - 'https'
  - 'ssl-tls'
  - 'ssl-certificates'
---

## Introduction

**[HTTP](/notes/http)** (Hypertext Transfer Protocol) and **[HTTPS](/notes/https)** (HTTP Secure) are protocols used for transmitting data over the web. The key difference is that HTTPS adds a layer of encryption using SSL/TLS, making data transmission secure and protecting against eavesdropping and tampering.

HTTPS is essentially HTTP with an added security layer, and has become the standard for modern web applications.

For detailed information, see:
- **[HTTP](/notes/http)**: Complete guide to HTTP protocol
- **[HTTPS](/notes/https)**: Complete guide to HTTPS and SSL/TLS

## Key Differences

| Aspect | HTTP | HTTPS |
|--------|------|-------|
| **Security** | Unencrypted | Encrypted (SSL/TLS) |
| **Port** | 80 | 443 |
| **URL Prefix** | `http://` | `https://` |
| **Data Protection** | Plaintext (visible) | Encrypted (hidden) |
| **Certificate** | Not required | SSL/TLS certificate required |
| **SEO Ranking** | Lower priority | Higher priority (Google boost) |
| **Browser Indicator** | No lock icon | Lock icon in address bar |
| **Performance** | Slightly faster | Minimal overhead with HTTP/2 |
| **Cost** | Free | Certificate cost (or free with Let's Encrypt) |

## How They Work

### HTTP

HTTP operates as a simple request-response protocol where all data is transmitted in **plaintext**. Anyone intercepting the connection can read sensitive information like passwords and credit card numbers.

See [HTTP](/notes/http) for detailed protocol information.

### HTTPS

HTTPS adds an SSL/TLS encryption layer before transmitting HTTP data. The SSL/TLS handshake establishes a secure connection where all subsequent data is encrypted, preventing eavesdropping and tampering.

See [HTTPS](/notes/https) for detailed security information.

## Common Attacks Prevented by HTTPS

### Man-in-the-Middle (MITM) Attack

**HTTP**: Attacker intercepts and reads/modifies data between client and server

**HTTPS**: Encryption prevents attacker from reading or modifying data

### Packet Sniffing

**HTTP**: Attacker captures network packets and reads plaintext data

**HTTPS**: Captured packets contain only encrypted, unreadable data

### Session Hijacking

**HTTP**: Attacker steals session cookies to impersonate user

**HTTPS**: Secure cookies with `Secure` flag only transmitted over HTTPS

### DNS Spoofing

**HTTP**: Attacker redirects traffic to malicious server

**HTTPS**: Certificate validation detects fraudulent servers

## Performance

**Myth**: HTTPS is significantly slower than HTTP

**Reality**: With modern protocols (HTTP/2, TLS 1.3), HTTPS performance is comparable to HTTP:
- HTTP/2 multiplexing and header compression
- TLS 1.3 faster handshake (1-RTT vs 2-RTT)
- 0-RTT resumption for returning clients
- Hardware-accelerated encryption (AES-NI)

Both protocols support caching identically, and HTTPS doesn't significantly impact performance.

## SEO and Browser Support

### SEO Impact

- **HTTPS is a ranking signal**: Google boosts HTTPS sites in search results
- **User trust**: Users more likely to visit sites with lock icon
- **HTTP warnings**: Browsers mark HTTP sites as "Not Secure"

### Browser Requirements

Modern web features require HTTPS:
- Progressive Web Apps (PWAs)
- Service Workers
- Geolocation API
- Camera/Microphone access
- HTTP/2 protocol

## Migration Considerations

When migrating from HTTP to HTTPS:

1. **Obtain SSL/TLS certificate** (free via Let's Encrypt or paid)
2. **Install and configure** certificate on server
3. **Update all internal links** to HTTPS
4. **Implement 301 redirects** from HTTP to HTTPS
5. **Fix mixed content** warnings
6. **Update external references** (Search Console, social media, etc.)

See [HTTPS](/notes/https) for detailed migration guide and server configuration examples.

## Common Misconceptions

### "HTTPS is only for e-commerce sites"

**False**: All websites should use HTTPS to protect user privacy and data integrity.

### "HTTPS significantly slows down websites"

**False**: With HTTP/2 and TLS 1.3, HTTPS can be as fast or faster than HTTP.

### "Free certificates are less secure"

**False**: Let's Encrypt certificates provide the same encryption as paid certificates.

### "HTTPS prevents all attacks"

**False**: HTTPS protects data in transit but doesn't prevent all security issues (XSS, SQL injection, etc.).

## When to Use Each

### Use HTTP (Rare Cases)

- Local development (localhost)
- Internal networks with no internet access
- Legacy systems that cannot support HTTPS

### Use HTTPS (Always Recommended)

- Production websites
- Web applications
- APIs
- Any site handling user data
- E-commerce platforms
- Login systems
- Mobile apps
- IoT devices communicating over internet
