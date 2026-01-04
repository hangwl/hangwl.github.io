# Authentication Architecture

## Overview

Data Platform uses AWS Cognito as a federation hub, enabling multiple identity providers (starting with Azure AD) while providing native AWS credential management. This architecture supports future multi-IdP requirements without code changes.

## Architecture Decision

| Option | Chosen | Rationale |
|--------|--------|-----------|
| MSAL (Azure AD direct) | ❌ | Single IdP only, manual AWS credential exchange |
| react-oidc-context | ❌ | Generic but requires custom AWS integration |
| **AWS Cognito** | ✅ | Multi-IdP support, native AWS credentials, managed service |

## Authentication Flow

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│                    Authentication Flow (AWS Cognito)                             │
└─────────────────────────────────────────────────────────────────────────────────┘

    ┌──────────┐      ┌──────────┐      ┌──────────┐      ┌──────────┐      ┌──────────┐
    │  User    │      │  React   │      │ Cognito  │      │ Azure AD │      │ Cognito  │
    │ Browser  │      │(Amplify) │      │User Pool │      │(Entra ID)│      │ ID Pool  │
    └────┬─────┘      └────┬─────┘      └────┬─────┘      └────┬─────┘      └────┬─────┘
         │                 │                 │                 │                 │
         │ 1. Access App   │                 │                 │                 │
         │────────────────▶│                 │                 │                 │
         │                 │                 │                 │                 │
         │                 │ 2. Initiate     │                 │                 │
         │                 │    Login        │                 │                 │
         │                 │────────────────▶│                 │                 │
         │                 │                 │                 │                 │
         │ 3. Redirect to  │                 │                 │                 │
         │    Azure AD     │                 │                 │                 │
         │◀────────────────────────────────────────────────────│                 │
         │                 │                 │                 │                 │
         │ 4. Login + MFA  │                 │                 │                 │
         │────────────────────────────────────────────────────▶│                 │
         │                 │                 │                 │                 │
         │ 5. OIDC Tokens  │                 │                 │                 │
         │◀────────────────────────────────────────────────────│                 │
         │                 │                 │                 │                 │
         │ 6. Tokens to    │                 │                 │                 │
         │    Cognito      │                 │                 │                 │
         │─────────────────────────────────▶│                 │                 │
         │                 │                 │                 │                 │
         │                 │                 │ 7. Validate &   │                 │
         │                 │                 │    Issue JWT    │                 │
         │                 │                 │────────────────────────────────▶│
         │                 │                 │                 │                 │
         │                 │                 │                 │ 8. AWS Temp    │
         │                 │                 │                 │    Credentials │
         │                 │◀────────────────────────────────────────────────────│
         │                 │                 │                 │                 │
         │ 9. Session      │                 │                 │                 │
         │    Ready        │                 │                 │                 │
         │◀────────────────│                 │                 │                 │
         │                 │                 │                 │                 │
```

## Key Components

### 1. AWS Cognito User Pool

**Role**: Federation hub and user directory

**Responsibilities**:
- Federate to external IdPs (Azure AD, Okta, etc.)
- Issue Cognito JWT tokens
- Manage user attributes and groups
- Provide hosted UI (optional)

**Configuration Required**:
- User Pool creation
- App Client configuration
- External IdP federation (Azure AD)
- Attribute mapping

### 2. AWS Cognito Identity Pool

**Role**: AWS credential provider

**Responsibilities**:
- Exchange Cognito tokens for AWS credentials
- Map authenticated users to IAM roles
- Provide temporary, scoped AWS access
- Support unauthenticated access (if needed)

**Configuration Required**:
- Identity Pool creation
- Link to User Pool
- IAM roles for authenticated users
- Role mapping rules

### 3. Azure AD (Entra ID)

**Role**: External Identity Provider for Client Organization users

**Responsibilities**:
- User authentication (username/password)
- Multi-Factor Authentication (MFA) enforcement
- Issue OIDC tokens to Cognito
- User attribute claims (email, groups, roles)

**Configuration Required**:
- App Registration for Cognito
- Redirect URIs (Cognito hosted UI)
- API permissions (openid, profile, email)
- Token configuration (claims)

### 4. React Frontend (AWS Amplify)

**Role**: Client-side authentication handling

**Library**: `aws-amplify` + `@aws-amplify/ui-react`

**Responsibilities**:
- Initiate federated login
- Handle authentication callback
- Manage Cognito session
- Provide AWS credentials to SDK
- Handle token refresh automatically

## Token Types

| Token | Issuer | Purpose | Lifetime |
|-------|--------|---------|----------|
| **Azure AD ID Token** | Azure AD | Initial user identity | ~1 hour |
| **Cognito ID Token** | Cognito User Pool | User identity for app | 1 hour |
| **Cognito Access Token** | Cognito User Pool | API authorization | 1 hour |
| **Cognito Refresh Token** | Cognito User Pool | Obtain new tokens | 30 days (configurable) |
| **AWS Credentials** | Cognito Identity Pool | S3/AWS access | 1 hour (configurable) |

## Security Considerations

### Token Storage
- **DO**: Store tokens in memory (React state/context)
- **DO**: Use `httpOnly` cookies for refresh tokens (if backend-managed)
- **DON'T**: Store tokens in localStorage (XSS vulnerable)
- **DON'T**: Store tokens in sessionStorage for sensitive apps

### Token Transmission
- **DO**: Use HTTPS for all requests
- **DO**: Pass tokens in Authorization header (`Bearer <token>`)
- **DON'T**: Pass tokens in URL query parameters

### Session Management
- **DO**: Implement idle timeout (e.g., 30 min)
- **DO**: Implement absolute timeout (e.g., 8 hours)
- **DO**: Provide explicit logout functionality
- **DO**: Revoke refresh tokens on logout

## MFA Enforcement

MFA is enforced at the Azure AD level through Conditional Access policies:

1. **Conditional Access Policy** (Azure AD)
   - Target: Data Platform App Registration
   - Condition: All users
   - Grant: Require MFA

2. **Per-User MFA** (fallback)
   - Enable MFA for all Client Organization users
   - Supported methods: Authenticator app, SMS, phone call

## Federation Trust Setup

### Azure AD → AWS IAM Identity Center

```
┌─────────────────────────────────────────────────────────────────┐
│                    Federation Trust                              │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  Azure AD (Entra ID)              AWS IAM Identity Center       │
│  ┌─────────────────────┐          ┌─────────────────────┐       │
│  │                     │   SAML   │                     │       │
│  │  Enterprise App     │─────────▶│  External IdP       │       │
│  │  (SAML/OIDC)        │          │  Configuration      │       │
│  │                     │          │                     │       │
│  └─────────────────────┘          └─────────────────────┘       │
│                                                                  │
│  Provides:                        Receives:                      │
│  - SAML Assertions                - User identity                │
│  - User attributes                - Group memberships            │
│  - Group memberships              - Custom attributes            │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### Attribute Mapping

| Azure AD Attribute | AWS IAM IC Attribute | Purpose |
|--------------------|----------------------|---------|
| `user.userprincipalname` | `email` | User identifier |
| `user.givenname` | `firstName` | Display name |
| `user.surname` | `lastName` | Display name |
| `user.groups` | `groups` | Permission mapping |

## Error Handling

| Error | Cause | User Experience |
|-------|-------|-----------------|
| `AADSTS50076` | MFA required | Redirect to MFA challenge |
| `AADSTS65001` | Consent required | Show consent prompt |
| `AADSTS700016` | App not found | Show error, contact admin |
| `AADSTS90014` | Missing required field | Show error, retry login |
| Token expired | Session timeout | Silent refresh or re-login |

## Related Documents

- [Implementation Guide](./implementation-guide.md) - Code examples
- [Authorization Model](./authorization-model.md) - AWS permission mapping
