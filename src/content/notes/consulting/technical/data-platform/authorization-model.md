# Authorization Model

## Overview

Authorization in Data Platform follows a two-tier model:
1. **Platform Access**: What actions users can perform in the Data Platform application
2. **Data Access**: What datasets users can view/download from S3

## Authorization Flow

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│                         Authorization Flow                                       │
└─────────────────────────────────────────────────────────────────────────────────┘

  Authenticated User
         │
         ▼
  ┌──────────────────┐
  │  Cognito User    │
  │     Pool         │
  └────────┬─────────┘
           │
           │ JWT Token
           ▼
  ┌──────────────────┐      ┌──────────────────┐
  │ Cognito Identity │─────▶│    IAM Role      │
  │     Pool         │      │  (Assumed Role)  │
  └──────────────────┘      └────────┬─────────┘
                                     │
                    ┌────────────────┼────────────────┐
                    │                │                │
                    ▼                ▼                ▼
             ┌───────────┐    ┌───────────┐    ┌───────────┐
             │  API GW   │    │    S3     │    │   Lake    │
             │  Access   │    │  Access   │    │ Formation │
             └───────────┘    └───────────┘    └───────────┘
```

## Role Hierarchy

### Platform Roles

| Role | Description | Capabilities |
|------|-------------|--------------|
| **Viewer** | Basic read access | Search datasets, view metadata |
| **Requestor** | Can request data access | Viewer + submit access requests |
| **Data Steward** | Dataset owner/approver | Requestor + approve/deny requests |
| **Admin** | Platform administrator | Full access, user management |

### Cognito Identity Pool IAM Roles

IAM roles attached to Cognito Identity Pool define what AWS resources authenticated users can access:

```
┌────────────────────────────────────────────────────────────────────┐
│              IAM Role: platform-authenticated-user                 │
├────────────────────────────────────────────────────────────────────┤
│                                                                    │
│  Inline Policy:                                                    │
│  {                                                                 │
│    "Version": "2012-10-17",                                        │
│    "Statement": [                                                  │
│      {                                                             │
│        "Effect": "Allow",                                          │
│        "Action": [                                                 │
│          "s3:GetObject",                                           │
│          "s3:ListBucket"                                           │
│        ],                                                          │
│        "Resource": [                                               │
│          "arn:aws:s3:::platform-data-*",                           │
│          "arn:aws:s3:::platform-data-*/*"                          │
│        ]                                                           │
│      },                                                            │
│      {                                                             │
│        "Effect": "Allow",                                          │
│        "Action": [                                                 │
│          "execute-api:Invoke"                                      │
│        ],                                                          │
│        "Resource": "arn:aws:execute-api:*:*:*"                     │
│      }                                                             │
│    ]                                                               │
│  }                                                                 │
│                                                                    │
└────────────────────────────────────────────────────────────────────┘
```

## Data Access Request Workflow

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│                    Data Access Request Workflow                                  │
└─────────────────────────────────────────────────────────────────────────────────┘

  ┌──────────┐     ┌──────────┐     ┌──────────┐     ┌──────────┐     ┌──────────┐
  │Requestor │     │ Platform │     │   Data   │     │  Admin   │     │   AWS    │
  │          │     │ Backend  │     │  Steward │     │          │     │   IAM    │
  └────┬─────┘     └────┬─────┘     └────┬─────┘     └────┬─────┘     └────┬─────┘
       │                │                │                │                │
       │ 1. Request     │                │                │                │
       │    Dataset     │                │                │                │
       │───────────────▶│                │                │                │
       │                │                │                │                │
       │                │ 2. Notify      │                │                │
       │                │    Steward     │                │                │
       │                │───────────────▶│                │                │
       │                │                │                │                │
       │                │                │ 3. Review &    │                │
       │                │                │    Approve     │                │
       │                │◀───────────────│                │                │
       │                │                │                │                │
       │                │ 4. Request     │                │                │
       │                │    Provisioning│                │                │
       │                │───────────────────────────────▶│                │
       │                │                │                │                │
       │                │                │                │ 5. Update     │
       │                │                │                │    Permission │
       │                │                │                │───────────────▶│
       │                │                │                │                │
       │ 6. Access      │                │                │                │
       │    Granted     │                │                │                │
       │◀───────────────│                │                │                │
       │                │                │                │                │
```

## S3 Access Patterns

### Option A: Pre-signed URLs (Recommended for Pilot)

```
User ──▶ API Gateway ──▶ Lambda ──▶ Generate Pre-signed URL ──▶ User downloads from S3
```

**Pros**: Simple, no direct S3 credentials to user
**Cons**: URL can be shared (mitigate with short expiry)

### Option B: Temporary Credentials via STS

```
User ──▶ API Gateway ──▶ Lambda ──▶ STS AssumeRole ──▶ Return temp credentials ──▶ User accesses S3 directly
```

**Pros**: Fine-grained access, audit trail
**Cons**: More complex frontend, credentials exposed to browser

### Option C: Lake Formation (Future)

```
User ──▶ API Gateway ──▶ Athena/Glue ──▶ Lake Formation (column/row level) ──▶ Query results
```

**Pros**: Column/row-level security, SQL interface
**Cons**: Requires additional setup, better for analytics use cases

## Access Control Matrix

| Resource | Viewer | Requestor | Data Steward | Admin |
|----------|--------|-----------|--------------|-------|
| Search datasets | ✓ | ✓ | ✓ | ✓ |
| View metadata | ✓ | ✓ | ✓ | ✓ |
| Request access | ✗ | ✓ | ✓ | ✓ |
| Approve requests | ✗ | ✗ | ✓ (own datasets) | ✓ |
| Download data | ✗ | ✓ (approved) | ✓ (own datasets) | ✓ |
| Manage users | ✗ | ✗ | ✗ | ✓ |
| Manage datasets | ✗ | ✗ | ✓ (own datasets) | ✓ |

## Audit Logging

All access events are logged for compliance:

| Event | Logged Data | Storage |
|-------|-------------|---------|
| Login | User, timestamp, IP, success/fail | CloudWatch Logs |
| Dataset search | User, query, timestamp | CloudWatch Logs |
| Access request | User, dataset, timestamp, justification | DynamoDB |
| Approval/Denial | Steward, decision, timestamp, reason | DynamoDB |
| Data download | User, dataset, timestamp, file | S3 Access Logs + CloudTrail |

## Related Documents

- [Authentication Architecture](./authentication-architecture.md)
- [Implementation Guide](./implementation-guide.md)
