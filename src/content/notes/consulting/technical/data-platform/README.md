# Data Platform - Technical Documentation

Technical documentation for authentication, authorization, and data access.

## Overview

Data Platform is a browser-based web application that enables authorized users to search, request, and access datasets stored in AWS S3. The platform uses AWS Cognito as a federation hub, allowing multiple identity providers (starting with Azure AD) while providing native AWS credential management.

## Key Stakeholders

| Entity | Role |
|--------|------|
| **Platform Operator** | Platform operator; manages AWS infrastructure, IAM roles, and user provisioning |
| **Client Organization** | Client organization; users authenticate via Azure AD |
| **Data Stewards** | Designated approvers for dataset access requests |

## Documentation Index

| Document | Description |
|----------|-------------|
| [Authentication Architecture](./authentication-architecture.md) | OIDC federation, token flow, session management |
| [Authorization Model](./authorization-model.md) | AWS IAM roles, permission sets, data access |
| [Implementation Guide](./implementation-guide.md) | Step-by-step setup and code patterns |
| [Requirements Summary](./requirements-summary.md) | Original requirements and assumptions |

## Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | React, TanStack Query, TanStack Router, AWS Amplify |
| Auth Federation | AWS Cognito User Pool (OIDC hub) |
| Identity Providers | Azure AD (Entra ID), extensible to others |
| AWS Credentials | Cognito Identity Pool |
| Backend | Lambda + API Gateway |
| Data Storage | AWS S3 |
| Fine-grained Access | AWS Lake Formation (future) |

## Architecture Summary

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                              DATA PLATFORM                                  │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  ┌─────────┐      ┌─────────────┐      ┌─────────────────────────────────┐  │
│  │  User   │─────▶│  React App  │─────▶│  API Gateway + Lambda           │  │
│  │ Browser │      │  (Amplify)  │      │  (Backend)                      │  │
│  └─────────┘      └──────┬──────┘      └───────────────┬─────────────────┘  │
│                          │                             │                    │
│                          │                             │ IAM Role           │
│                          ▼                             ▼                    │
│               ┌─────────────────┐           ┌─────────────────────┐        │
│               │ Cognito User    │           │        AWS S3       │        │
│               │ Pool            │           │   (Data Storage)    │        │
│               └────────┬────────┘           └─────────────────────┘        │
│                        │                              ▲                     │
│           ┌────────────┼────────────┐                 │                     │
│           │            │            │                 │                     │
│           ▼            ▼            ▼                 │                     │
│     ┌──────────┐ ┌──────────┐ ┌──────────┐           │                     │
│     │ Azure AD │ │  Okta    │ │  Other   │           │                     │
│     │(Entra ID)│ │ (future) │ │   IdP    │           │                     │
│     └──────────┘ └──────────┘ └──────────┘           │                     │
│                        │                              │                     │
│                        │                              │                     │
│                        ▼                              │                     │
│               ┌─────────────────┐                     │                     │
│               │ Cognito Identity│─────────────────────┘                     │
│               │ Pool (AWS Creds)│   Temporary Credentials                   │
│               └─────────────────┘                                           │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

## Project Status

- **Phase**: Planning / Design
- **Users**: Pilot (~50 users)
- **Timeline**: TBD
