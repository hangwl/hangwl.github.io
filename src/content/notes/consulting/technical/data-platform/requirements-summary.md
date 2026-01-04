# Requirements Summary

Original requirements and assumptions for the Data Platform authentication system.

## Login: Browser-based, Identity-Aware Access

### Assumptions

| # | Assumption |
|---|------------|
| 1 | Data Platform integrates with AWS IAM Identity Center to map authenticated users to AWS roles and permission sets for data access |
| 2 | Data Platform is managed by Platform Operator; authorized users may participate as data requestors and/or data owners |
| 3 | Each authorized organization will designate data steward account responsible for managing and approving dataset access |
| 4 | Data ownership and approval authority are defined at the table level, independent of organizational affiliation |
| 5 | Platform Operator will create and manage required identities for Data Platform's platform development team |

### Requirements

| # | Requirement | Implementation |
|---|-------------|----------------|
| 1 | Users access the Data Platform via a browser-based web application over HTTPS | React SPA hosted on S3 + CloudFront |
| 2 | Authentication is performed via a standards-based identity provider (OIDC) with MFA enforced | Azure AD with Conditional Access |
| 3 | All platform actions (search, request, approval) are explicitly tied to the authenticated user | JWT token includes user identity; all API calls logged |
| 4 | Dataset access requests require approval from the designated data steward / owner(s) | Approval workflow via backend API |
| 5 | After approval, data access is enforced through AWS-native, role-based authorization | S3 access via pre-signed URLs; IAM policies |
| 6 | Access is based on federated, short-lived credentials and browser-based interactions | Cognito tokens (1 hour); AWS credentials via Identity Pool |

---

## Azure AD Integration (Client Organization)

### Assumptions

| # | Assumption |
|---|------------|
| 1 | Client Organization uses Azure AD (Entra ID) as its enterprise identity provider |
| 2 | Azure AD is used only for user authentication for Client Organization users |
| 3 | Client Organization users authenticate via Azure AD with MFA enforced |
| 4 | Azure AD handles authentication only (identity verification) |
| 5 | AWS handles authorization & data access enforcement |
| 6 | AWS IAM remains as the source of truth for access control, roles, and policies |
| 7 | Client Organization provides user, role and data access requirements to Platform Operator |
| 8 | Platform Operator configures and manages AWS access controls, roles, and policies accordingly |

### Requirements

| # | Requirement | Implementation |
|---|-------------|----------------|
| 1 | Client Organization users authenticate to Data Platform using Azure AD via OIDC federation | AWS Amplify + Cognito (federated to Azure AD) |
| 2 | Authenticated Client Organization identities are mapped to AWS roles and permission sets | Cognito Identity Pool with IAM role mapping |
| 3 | Azure AD does not manage AWS permissions or data access policies | AWS IAM policies define all access; Azure AD only authenticates |
| 4 | Data access follows the same request → approval → grant workflow as other users | Workflow enforced by backend API |

---

## Project Context

| Field | Value |
|-------|-------|
| **Platform Name** | Data Platform (Research Data Platform) |
| **Client** | Platform Operator (platform operator), Client Organization (user organization) |
| **Phase** | Pilot |
| **Expected Users** | ~50 |
| **Data Storage** | AWS S3 |
| **Frontend** | React + TanStack Query + TanStack Router + AWS Amplify |
| **Backend** | Lambda + API Gateway (recommended) |
| **Fine-grained Access** | AWS Lake Formation (future consideration) |

---

## Key Decisions Pending

| Decision | Owner | Status |
|----------|-------|--------|
| AWS IAM Identity Center already configured? | Platform Operator | To be confirmed |
| Backend architecture (serverless vs containers) | Build team | Recommended: Serverless |
| Multiple IdPs beyond Azure AD? | Client | Supported via Cognito federation |
| Lake Formation implementation | Client | Future phase |

---

## Glossary

| Term | Definition |
|------|------------|
| **Data Platform** | Research Data Platform - the application being built |
| **Platform Operator** | Platform operator; manages AWS infrastructure |
| **Client Organization** | Client organization; users authenticate via Azure AD |
| **IdP** | Identity Provider (Azure AD in this case) |
| **OIDC** | OpenID Connect - authentication protocol |
| **SAML** | Security Assertion Markup Language - federation protocol |
| **MFA** | Multi-Factor Authentication |
| **IAM IC** | AWS IAM Identity Center (formerly AWS SSO) |
| **Permission Set** | IAM Identity Center construct defining AWS permissions |
| **Data Steward** | Designated approver for dataset access requests |
| **Cognito** | AWS Cognito - User Pool (auth) + Identity Pool (AWS credentials) |
| **Amplify** | AWS Amplify - Frontend SDK for Cognito integration |

---

## Related Documents

- [Authentication Architecture](./authentication-architecture.md)
- [Authorization Model](./authorization-model.md)
- [Implementation Guide](./implementation-guide.md)
