---
title: "SSL/TLS Certificates"
links:
  - 'https'
  - 'ssl-tls'
---

## Introduction

SSL/TLS certificates are digital certificates that authenticate a website's identity and enable encrypted connections. They contain a public key and information about the certificate holder.

## Certificate Components

- **Subject**: Domain name(s) the certificate covers
- **Issuer**: Certificate Authority that signed it
- **Public Key**: Used for encryption and key exchange
- **Validity Period**: Start and expiration dates
- **Signature**: CA's digital signature
- **Serial Number**: Unique identifier
- **Extensions**: Additional info (SANs, key usage, etc.)

## Certificate Types

| Type | Validation | Use Case | Issuance Time | Cost |
|------|------------|----------|---------------|------|
| **Domain Validated (DV)** | Domain ownership only | Personal sites, blogs | Minutes | Free - Low |
| **Organization Validated (OV)** | Organization verification | Business websites | Days | Medium |
| **Extended Validation (EV)** | Thorough legal verification | E-commerce, banking | Weeks | High |
| **Wildcard** | Covers `*.domain.com` | Multiple subdomains | Minutes-Days | Medium-High |
| **Multi-Domain (SAN)** | Multiple domains | Multiple sites | Minutes-Weeks | Medium-High |

## Certificate Authorities (CAs)

Trusted organizations that issue SSL certificates:

### Free CAs

- **Let's Encrypt**: Free, automated, 90-day certificates
- **ZeroSSL**: Free certificates with longer validity

### Commercial CAs

- **DigiCert**: Premium certificates, high trust
- **Sectigo**: Wide range of options
- **GlobalSign**: International presence
- **GoDaddy**: Popular for small businesses

## Certificate Chain

Certificates form a chain of trust:

```
Root CA Certificate (self-signed, in browser trust store)
    ↓
Intermediate CA Certificate (signed by Root CA)
    ↓
Server Certificate (signed by Intermediate CA)
```

Browsers trust root CAs and verify the chain up to the root.

## Obtaining Certificates

### Let's Encrypt (Automated)

```bash
# Install certbot
sudo apt-get install certbot python3-certbot-nginx

# Obtain certificate
sudo certbot --nginx -d example.com -d www.example.com

# Auto-renewal
sudo certbot renew --dry-run
```

### Manual Process

1. Generate private key and CSR (Certificate Signing Request)
2. Submit CSR to Certificate Authority
3. Complete domain validation
4. Download issued certificate
5. Install certificate on server

## Certificate Management

### Renewal

Certificates expire (typically 90 days for Let's Encrypt, 1-2 years for commercial):

- **Automate renewal**: Use certbot or ACME clients
- **Monitor expiration**: Set alerts 30 days before
- **Test renewal**: Regularly verify renewal process
- **Backup**: Keep secure backups of certificates and keys

### Revocation

Revoke compromised certificates:

- **CRL**: Certificate Revocation List
- **OCSP**: Online Certificate Status Protocol (real-time)
- **OCSP Stapling**: Server provides OCSP response

## Common Issues

### Certificate Errors

- **Expired certificate**: Past validity period
- **Wrong domain**: Certificate doesn't match domain
- **Self-signed**: Not signed by trusted CA
- **Incomplete chain**: Missing intermediate certificates
- **Revoked certificate**: Certificate has been revoked

### Solutions

- Renew expired certificates promptly
- Ensure certificate matches all domains (use SAN/wildcard)
- Use certificates from trusted CAs
- Include full certificate chain in configuration
- Monitor certificate transparency logs

## Best Practices

- **Automate renewal**: Prevent expiration issues
- **Use strong keys**: 2048-bit RSA minimum, prefer ECDSA
- **Secure private keys**: Restrict file permissions (600)
- **Monitor issuance**: Use Certificate Transparency monitoring
- **Test regularly**: Use SSL Labs (ssllabs.com/ssltest)
- **Keep backups**: Store certificates and keys securely offsite
