---
title: "HTTPS"
links:
  - 'http'
  - 'http-vs-https'
  - 'ssl-tls'
  - 'ssl-certificates'
---

## Introduction

**HTTPS (HTTP Secure)** is [HTTP](/notes/http) with encryption via [SSL/TLS](/notes/ssl-tls). It protects data transmitted between clients and servers from eavesdropping, tampering, and forgery.

HTTPS is now the standard for all modern web applications.

## How HTTPS Works

1. **Client Hello**: Client initiates [SSL/TLS handshake](/notes/ssl-tls)
2. **Server Hello**: Server sends [SSL certificate](/notes/ssl-certificates)
3. **Certificate Verification**: Client verifies certificate authenticity
4. **Key Exchange**: Establish shared encryption keys
5. **Encrypted Communication**: All HTTP data encrypted with session keys

All subsequent HTTP requests and responses are encrypted, making them unreadable to attackers.

## Security Benefits

### Encryption
Protects sensitive data:
- Login credentials
- Personal information
- Payment details
- Session tokens
- API keys

### Authentication
[SSL certificates](/notes/ssl-certificates) verify server identity:
- Confirms legitimate website
- Prevents phishing attacks
- Builds user trust

### Data Integrity
Ensures data isn't modified:
- Detects tampering attempts
- Prevents man-in-the-middle attacks
- Guarantees data arrives as sent

## HTTPS in Practice

### Browser Indicators

**Secure:**
- Lock icon in address bar
- "Secure" label
- Green indicators (EV certificates)

**Insecure:**
- "Not Secure" warning
- Crossed-out lock (mixed content)
- Red warning (invalid certificate)

### Required For

Modern web features require HTTPS:
- Progressive Web Apps (PWAs)
- Service Workers
- Geolocation API
- Camera/Microphone access
- HTTP/2 and HTTP/3

## Server Configuration

### Nginx Example

```nginx
server {
    listen 443 ssl http2;
    server_name example.com;
    
    ssl_certificate /path/to/fullchain.pem;
    ssl_certificate_key /path/to/privkey.pem;
    ssl_protocols TLSv1.2 TLSv1.3;
    
    # Security headers
    add_header Strict-Transport-Security "max-age=31536000" always;
}

# Redirect HTTP to HTTPS
server {
    listen 80;
    server_name example.com;
    return 301 https://$server_name$request_uri;
}
```

### Apache Example

```apache
<VirtualHost *:443>
    ServerName example.com
    SSLEngine on
    SSLCertificateFile /path/to/cert.pem
    SSLCertificateKeyFile /path/to/privkey.pem
    SSLProtocol all -SSLv3 -TLSv1 -TLSv1.1
    
    Header always set Strict-Transport-Security "max-age=31536000"
</VirtualHost>

<VirtualHost *:80>
    ServerName example.com
    Redirect permanent / https://example.com/
</VirtualHost>
```

## Security Headers

Enhance HTTPS with additional headers:

```http
Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
Content-Security-Policy: default-src https:
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
```

## Mixed Content

**Mixed content** occurs when HTTPS page loads HTTP resources.

**Blocked by browsers:**
- Scripts: `<script src="http://...">`
- Stylesheets: `<link href="http://...">`
- Iframes, XMLHttpRequest, WebSockets

**Solution:**
```html
<!-- Bad -->
<script src="http://example.com/script.js"></script>

<!-- Good -->
<script src="https://example.com/script.js"></script>
<script src="/js/script.js"></script>
```

## Migration Steps

1. **Obtain certificate**: Use Let's Encrypt (free) or commercial CA
2. **Install certificate**: Configure on web server
3. **Update links**: Change all internal links to HTTPS
4. **Redirect HTTP**: Implement 301 redirects to HTTPS
5. **Fix mixed content**: Update all resource URLs
6. **Update references**: Search Console, social media, etc.

### Let's Encrypt

```bash
# Install certbot
sudo apt-get install certbot python3-certbot-nginx

# Obtain certificate
sudo certbot --nginx -d example.com

# Auto-renewal
sudo certbot renew --dry-run
```

## Performance

Modern HTTPS is fast:
- **TLS 1.3**: 1-RTT handshake (vs 2-RTT in TLS 1.2)
- **0-RTT resumption**: Instant reconnection
- **HTTP/2**: Multiplexing, header compression
- **Hardware acceleration**: AES-NI for encryption

HTTPS performance is comparable to HTTP with modern protocols.

## Best Practices

- **Use TLS 1.2+**: Disable older versions
- **Strong cipher suites**: Remove weak algorithms
- **Enable HSTS**: Force HTTPS for all future visits
- **Automate renewal**: Use certbot for Let's Encrypt
- **Monitor certificates**: Set expiration alerts
- **Test configuration**: Use SSL Labs (ssllabs.com/ssltest)

## Common Issues

- **Expired certificate**: Renew before expiration
- **Wrong domain**: Use SAN or wildcard certificates
- **Incomplete chain**: Include intermediate certificates
- **Mixed content**: Update all resources to HTTPS
- **Performance**: Enable HTTP/2 and TLS 1.3

For detailed information on SSL/TLS, see [SSL/TLS](/notes/ssl-tls) and [SSL Certificates](/notes/ssl-certificates).
