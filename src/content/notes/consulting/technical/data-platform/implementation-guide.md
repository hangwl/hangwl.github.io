# Implementation Guide

Step-by-step guide for implementing Data Platform authentication and authorization using AWS Cognito.

## Table of Contents

1. [Architecture Decision: Backend](#architecture-decision-backend)
2. [Phase 1: AWS Cognito Setup](#phase-1-aws-cognito-setup)
3. [Phase 2: Azure AD Federation](#phase-2-azure-ad-federation)
4. [Phase 3: Frontend Authentication (Amplify)](#phase-3-frontend-authentication-amplify)
5. [Phase 4: Backend API](#phase-4-backend-api)
6. [Phase 5: S3 Data Access](#phase-5-s3-data-access)

---

## Architecture Decision: Backend

### Recommendation: Serverless (Lambda + API Gateway)

For a pilot with ~50 users, serverless is the best approach:

| Factor | Serverless (Lambda) | Containers (ECS) |
|--------|---------------------|------------------|
| **Cost** | Pay per request (~$0 for pilot) | Always-on (~$50+/month min) |
| **Scaling** | Automatic | Manual/Auto config needed |
| **Complexity** | Lower | Higher |
| **Cold starts** | ~100-500ms (acceptable) | None |
| **Maintenance** | Minimal | Patching, monitoring |

**Verdict**: Use Lambda + API Gateway for pilot. Migrate to ECS if needed later.

### Proposed Architecture

```
┌───────────────────────────────────────────────────────────────┐
│                   DATA PLATFORM ARCHITECTURE                  │
└───────────────────────────────────────────────────────────────┘

                              ┌─────────────────┐
                              │   CloudFront    │
                              │   (CDN + WAF)   │
                              └────────┬────────┘
                                       │
                    ┌──────────────────┼──────────────────┐
                    │                  │                  │
                    ▼                  ▼                  ▼
             ┌───────────┐      ┌───────────┐      ┌───────────┐
             │    S3     │      │    API    │      │    S3     │
             │ (Frontend)│      │  Gateway  │      │  (Data)   │
             └───────────┘      └─────┬─────┘      └───────────┘
                                      │
                         ┌────────────┼────────────┐
                         │            │            │
                         ▼            ▼            ▼
                  ┌───────────┐ ┌───────────┐ ┌───────────┐
                  │  Lambda   │ │  Lambda   │ │  Lambda   │
                  │  (Auth)   │ │ (Datasets)│ │ (Requests)│
                  └─────┬─────┘ └─────┬─────┘ └─────┬─────┘
                        │             │             │
                        └─────────────┼─────────────┘
                                      │
                         ┌────────────┼────────────┐
                         │            │            │
                         ▼            ▼            ▼
                  ┌───────────┐ ┌───────────┐ ┌───────────┐
                  │ DynamoDB  │ │    SES    │ │ CloudWatch│
                  │ (Metadata)│ │  (Email)  │ │  (Logs)   │
                  └───────────┘ └───────────┘ └───────────┘
```

---

## Phase 1: AWS Cognito Setup

### 1.1 Create Cognito User Pool

**AWS Console → Cognito → Create user pool**

| Setting | Value |
|---------|-------|
| Pool name | `data-platform-user-pool` |
| Sign-in options | Federated identity providers |
| MFA | Off (handled by Azure AD) |
| Password policy | Default (users won't use Cognito passwords) |

### 1.2 Configure App Client

**User Pool → App integration → Create app client**

| Setting | Value |
|---------|-------|
| App client name | `data-platform-web-client` |
| Client secret | No (public client for SPA) |
| Auth flows | `ALLOW_REFRESH_TOKEN_AUTH` |
| OAuth 2.0 grant types | Authorization code grant |
| OpenID Connect scopes | `openid`, `email`, `profile` |
| Callback URLs | `https://data-platform.example.com/`, `http://localhost:5173/` |
| Sign-out URLs | `https://data-platform.example.com/`, `http://localhost:5173/` |

### 1.3 Configure Hosted UI Domain

**User Pool → App integration → Domain**

- Choose: Cognito domain or custom domain
- Example: `data-platform-auth.auth.ap-southeast-1.amazoncognito.com`

### 1.4 Create Cognito Identity Pool

**AWS Console → Cognito → Identity pools → Create identity pool**

| Setting | Value |
|---------|-------|
| Identity pool name | `data-platform-identity-pool` |
| Unauthenticated access | Disabled |
| Authentication providers | Cognito User Pool |
| User Pool ID | `<from step 1.1>` |
| App Client ID | `<from step 1.2>` |

### 1.5 Configure IAM Roles for Identity Pool

**Identity Pool → Edit → Authentication providers → Authenticated role**

Create two IAM roles:

**Role: data-platform-authenticated-user**
```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "execute-api:Invoke"
      ],
      "Resource": "arn:aws:execute-api:*:*:*"
    },
    {
      "Effect": "Allow",
      "Action": [
        "s3:GetObject",
        "s3:ListBucket"
      ],
      "Resource": [
        "arn:aws:s3:::data-platform-data-${aws:PrincipalTag/department}/*",
        "arn:aws:s3:::data-platform-data-${aws:PrincipalTag/department}"
      ]
    }
  ]
}
```

**Trust Policy for IAM Role:**
```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "Federated": "cognito-identity.amazonaws.com"
      },
      "Action": "sts:AssumeRoleWithWebIdentity",
      "Condition": {
        "StringEquals": {
          "cognito-identity.amazonaws.com:aud": "<identity-pool-id>"
        },
        "ForAnyValue:StringLike": {
          "cognito-identity.amazonaws.com:amr": "authenticated"
        }
      }
    }
  ]
}
```

### 1.6 Note Key Values

Record these for later configuration:

```bash
# Cognito User Pool
VITE_COGNITO_USER_POOL_ID=ap-southeast-1_XXXXXXXXX
VITE_COGNITO_CLIENT_ID=XXXXXXXXXXXXXXXXXXXXXXXXXX
VITE_COGNITO_DOMAIN=data-platform-auth.auth.ap-southeast-1.amazoncognito.com

# Cognito Identity Pool
VITE_COGNITO_IDENTITY_POOL_ID=ap-southeast-1:xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx

# Region
VITE_AWS_REGION=ap-southeast-1
```

---

## Phase 2: Azure AD Federation

### 2.1 Create App Registration in Azure AD

**Azure Portal → Azure Active Directory → App registrations → New registration**

| Field | Value |
|-------|-------|
| Name | `Data Platform (Cognito)` |
| Supported account types | Single tenant (Client Organization only) |
| Redirect URI (Web) | `https://<cognito-domain>/oauth2/idpresponse` |

### 2.2 Configure API Permissions

**App registration → API permissions → Add permission**

| API | Permission | Type |
|-----|------------|------|
| Microsoft Graph | `openid` | Delegated |
| Microsoft Graph | `email` | Delegated |
| Microsoft Graph | `profile` | Delegated |

**Grant admin consent** after adding permissions.

### 2.3 Create Client Secret

**App registration → Certificates & secrets → New client secret**

- Description: `Cognito Federation`
- Expires: 24 months
- **Save the secret value immediately** (shown only once)

### 2.4 Note Azure AD Values

```bash
AZURE_AD_TENANT_ID=<Directory (tenant) ID>
AZURE_AD_CLIENT_ID=<Application (client) ID>
AZURE_AD_CLIENT_SECRET=<Secret value>
```

### 2.5 Configure Azure AD as IdP in Cognito

**Cognito User Pool → Sign-in experience → Federated identity provider sign-in → Add identity provider**

| Setting | Value |
|---------|-------|
| Provider type | OpenID Connect |
| Provider name | `AzureAD` |
| Client ID | `<Azure AD Application ID>` |
| Client secret | `<Azure AD Client Secret>` |
| Authorized scopes | `openid email profile` |
| Issuer URL | `https://login.microsoftonline.com/<tenant-id>/v2.0` |

### 2.6 Configure Attribute Mapping

**Identity provider → Attribute mapping**

| Cognito attribute | Azure AD claim |
|-------------------|----------------|
| `email` | `email` |
| `name` | `name` |
| `preferred_username` | `preferred_username` |
| `custom:groups` | `groups` (if using group claims) |

### 2.7 Enable Azure AD in App Client

**User Pool → App integration → App client → Edit hosted UI**

- Identity providers: Select `AzureAD`
- Save changes

### 2.8 Configure Conditional Access (MFA) in Azure AD

**Azure AD → Security → Conditional Access → New policy**

| Setting | Value |
|---------|-------|
| Name | `Data Platform - Require MFA` |
| Users | All users (or specific group) |
| Cloud apps | `Data Platform (Cognito)` |
| Grant | Require multi-factor authentication |
| Enable policy | On |

---

## Phase 3: Frontend Authentication (Amplify)

### 3.1 Install Dependencies

```bash
pnpm add aws-amplify @aws-amplify/ui-react
```

### 3.2 Amplify Configuration

```typescript
// src/auth/amplifyConfig.ts
import { Amplify } from 'aws-amplify'

Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: import.meta.env.VITE_COGNITO_USER_POOL_ID,
      userPoolClientId: import.meta.env.VITE_COGNITO_CLIENT_ID,
      identityPoolId: import.meta.env.VITE_COGNITO_IDENTITY_POOL_ID,
      loginWith: {
        oauth: {
          domain: import.meta.env.VITE_COGNITO_DOMAIN,
          scopes: ['openid', 'email', 'profile'],
          redirectSignIn: [window.location.origin],
          redirectSignOut: [window.location.origin],
          responseType: 'code',
          providers: ['AzureAD'], // Name of the IdP configured in Cognito
        },
      },
    },
  },
})
```

### 3.3 Auth Provider Setup

```typescript
// src/main.tsx
import { Authenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'
import './auth/amplifyConfig' // Initialize Amplify

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Authenticator.Provider>
      <App />
    </Authenticator.Provider>
  </React.StrictMode>
)
```

### 3.4 Auth Hook

```typescript
// src/auth/useAuth.ts
import { useState, useEffect } from 'react'
import { 
  getCurrentUser, 
  signInWithRedirect, 
  signOut,
  fetchAuthSession,
  AuthUser
} from 'aws-amplify/auth'

export function useAuth() {
  const [user, setUser] = useState<AuthUser | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    checkUser()
  }, [])

  async function checkUser() {
    try {
      const currentUser = await getCurrentUser()
      setUser(currentUser)
    } catch {
      setUser(null)
    } finally {
      setIsLoading(false)
    }
  }

  const login = async () => {
    await signInWithRedirect({ provider: { custom: 'AzureAD' } })
  }

  const logout = async () => {
    await signOut()
    setUser(null)
  }

  const getSession = async () => {
    try {
      const session = await fetchAuthSession()
      return session
    } catch {
      return null
    }
  }

  // Get AWS credentials for direct S3 access
  const getCredentials = async () => {
    const session = await getSession()
    return session?.credentials ?? null
  }

  // Get ID token for API calls
  const getIdToken = async () => {
    const session = await getSession()
    return session?.tokens?.idToken?.toString() ?? null
  }

  return {
    user,
    isAuthenticated: !!user,
    isLoading,
    login,
    logout,
    getSession,
    getCredentials,
    getIdToken,
  }
}
```

### 3.5 Protected Route Component

```typescript
// src/auth/ProtectedRoute.tsx
import { Navigate, Outlet } from '@tanstack/react-router'
import { useAuth } from './useAuth'

export function ProtectedRoute() {
  const { isAuthenticated, isLoading } = useAuth()

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" />
  }

  return <Outlet />
}
```

### 3.6 Login Page with Federated Sign-In

```typescript
// src/routes/login.tsx
import { useAuth } from '../auth/useAuth'
import { Navigate } from '@tanstack/react-router'

export function LoginPage() {
  const { isAuthenticated, login, isLoading } = useAuth()

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isAuthenticated) {
    return <Navigate to="/" />
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Data Platform</h2>
          <p className="mt-2 text-gray-600">Sign in to access datasets</p>
        </div>
        <button
          onClick={login}
          className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Sign in with Azure AD
        </button>
      </div>
    </div>
  )
}
```

### 3.7 API Client with Auth

```typescript
// src/api/client.ts
import { useAuth } from '../auth/useAuth'
import { useQuery, useMutation } from '@tanstack/react-query'

const API_BASE = import.meta.env.VITE_API_URL

async function fetchWithAuth(
  path: string,
  getToken: () => Promise<string | null>,
  options: RequestInit = {}
) {
  const token = await getToken()
  
  if (!token) {
    throw new Error('Not authenticated')
  }

  const response = await fetch(`${API_BASE}${path}`, {
    ...options,
    headers: {
      ...options.headers,
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  })

  if (!response.ok) {
    throw new Error(`API error: ${response.status}`)
  }

  return response.json()
}

// Example: useDatasets hook
export function useDatasets() {
  const { getIdToken } = useAuth()

  return useQuery({
    queryKey: ['datasets'],
    queryFn: () => fetchWithAuth('/datasets', getIdToken),
  })
}
```

---

## Phase 4: Backend API

### 4.1 Project Structure (Lambda)

```
backend/
├── src/
│   ├── handlers/
│   │   ├── auth.ts
│   │   ├── datasets.ts
│   │   └── requests.ts
│   ├── middleware/
│   │   └── authMiddleware.ts
│   ├── services/
│   │   ├── s3Service.ts
│   │   └── dynamoService.ts
│   └── utils/
│       └── tokenValidator.ts
├── serverless.yml
├── package.json
└── tsconfig.json
```

### 4.2 Token Validation Middleware

```typescript
// src/middleware/authMiddleware.ts
import { APIGatewayProxyEvent } from 'aws-lambda'
import { CognitoJwtVerifier } from 'aws-jwt-verify'

// Create verifier for Cognito User Pool tokens
const verifier = CognitoJwtVerifier.create({
  userPoolId: process.env.COGNITO_USER_POOL_ID!,
  tokenUse: 'id', // or 'access' depending on which token you send
  clientId: process.env.COGNITO_CLIENT_ID!,
})

export async function validateToken(event: APIGatewayProxyEvent) {
  const authHeader = event.headers.Authorization || event.headers.authorization
  
  if (!authHeader?.startsWith('Bearer ')) {
    throw new Error('Missing or invalid authorization header')
  }

  const token = authHeader.substring(7)

  try {
    const payload = await verifier.verify(token)
    return {
      sub: payload.sub,
      email: payload.email,
      groups: payload['cognito:groups'] || [],
      // Custom attributes from Azure AD mapping
      name: payload.name,
    }
  } catch (error) {
    throw new Error('Invalid token')
  }
}
```

> **Note**: Install `aws-jwt-verify` package: `pnpm add aws-jwt-verify`

### 4.3 Serverless Configuration

```yaml
# serverless.yml
service: data-platform-api

provider:
  name: aws
  runtime: nodejs20.x
  region: ap-southeast-1
  environment:
    COGNITO_USER_POOL_ID: ${env:COGNITO_USER_POOL_ID}
    COGNITO_CLIENT_ID: ${env:COGNITO_CLIENT_ID}
    DATA_BUCKET: ${self:custom.dataBucket}
    METADATA_TABLE: ${self:custom.metadataTable}
  iam:
    role:
      statements:
        - Effect: Allow
          Action:
            - s3:GetObject
            - s3:PutObject
          Resource: arn:aws:s3:::${self:custom.dataBucket}/*
        - Effect: Allow
          Action:
            - dynamodb:GetItem
            - dynamodb:PutItem
            - dynamodb:Query
            - dynamodb:UpdateItem
          Resource: arn:aws:dynamodb:*:*:table/${self:custom.metadataTable}

custom:
  dataBucket: data-platform-data-${self:provider.stage}
  metadataTable: data-platform-metadata-${self:provider.stage}

functions:
  getDatasets:
    handler: src/handlers/datasets.list
    events:
      - http:
          path: /datasets
          method: get
          cors: true
          authorizer:
            type: REQUEST
            identitySource: method.request.header.Authorization

  getDataset:
    handler: src/handlers/datasets.get
    events:
      - http:
          path: /datasets/{id}
          method: get
          cors: true

  requestAccess:
    handler: src/handlers/requests.create
    events:
      - http:
          path: /requests
          method: post
          cors: true

  approveRequest:
    handler: src/handlers/requests.approve
    events:
      - http:
          path: /requests/{id}/approve
          method: post
          cors: true
```

---

## Phase 5: S3 Data Access

### 5.1 Generate Pre-signed URLs

```typescript
// src/services/s3Service.ts
import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'

const s3Client = new S3Client({ region: process.env.AWS_REGION })

export async function generateDownloadUrl(
  bucket: string,
  key: string,
  expiresIn: number = 3600 // 1 hour
): Promise<string> {
  const command = new GetObjectCommand({
    Bucket: bucket,
    Key: key,
  })

  return getSignedUrl(s3Client, command, { expiresIn })
}
```

### 5.2 Download Handler

```typescript
// src/handlers/datasets.ts
import { APIGatewayProxyHandler } from 'aws-lambda'
import { validateToken } from '../middleware/authMiddleware'
import { generateDownloadUrl } from '../services/s3Service'
import { checkUserAccess } from '../services/dynamoService'

export const download: APIGatewayProxyHandler = async (event) => {
  try {
    // 1. Validate token
    const user = await validateToken(event)
    
    // 2. Get dataset ID
    const datasetId = event.pathParameters?.id
    if (!datasetId) {
      return { statusCode: 400, body: 'Missing dataset ID' }
    }

    // 3. Check if user has approved access
    const hasAccess = await checkUserAccess(user.email, datasetId)
    if (!hasAccess) {
      return { 
        statusCode: 403, 
        body: JSON.stringify({ error: 'Access not approved' })
      }
    }

    // 4. Generate pre-signed URL
    const url = await generateDownloadUrl(
      process.env.DATA_BUCKET!,
      `datasets/${datasetId}/data.csv`
    )

    // 5. Log access event
    console.log(JSON.stringify({
      event: 'DATA_DOWNLOAD',
      user: user.email,
      dataset: datasetId,
      timestamp: new Date().toISOString(),
    }))

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ downloadUrl: url }),
    }
  } catch (error) {
    console.error('Download error:', error)
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal server error' }),
    }
  }
}
```

---

## Environment Variables

### Frontend (.env)

```bash
# Cognito User Pool
VITE_COGNITO_USER_POOL_ID=ap-southeast-1_XXXXXXXXX
VITE_COGNITO_CLIENT_ID=XXXXXXXXXXXXXXXXXXXXXXXXXX
VITE_COGNITO_DOMAIN=data-platform-auth.auth.ap-southeast-1.amazoncognito.com

# Cognito Identity Pool
VITE_COGNITO_IDENTITY_POOL_ID=ap-southeast-1:xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx

# Region & API
VITE_AWS_REGION=ap-southeast-1
VITE_API_URL=https://api.data-platform.example.com
```

### Backend (.env)

```bash
# Cognito
COGNITO_USER_POOL_ID=ap-southeast-1_XXXXXXXXX
COGNITO_CLIENT_ID=XXXXXXXXXXXXXXXXXXXXXXXXXX

# Resources
DATA_BUCKET=data-platform-data-prod
METADATA_TABLE=data-platform-metadata-prod
```

---

## Deployment Checklist

### AWS Cognito Setup
- [ ] Cognito User Pool created
- [ ] App Client configured (no secret, PKCE)
- [ ] Hosted UI domain configured
- [ ] Cognito Identity Pool created
- [ ] IAM roles for Identity Pool configured

### Azure AD Federation
- [ ] Azure AD App Registration created
- [ ] Client secret generated
- [ ] Azure AD added as IdP in Cognito
- [ ] Attribute mapping configured
- [ ] MFA Conditional Access policy enabled

### Backend
- [ ] API Gateway deployed
- [ ] Lambda functions deployed
- [ ] S3 buckets created with policies
- [ ] DynamoDB tables created

### Frontend
- [ ] Frontend deployed to S3 + CloudFront
- [ ] DNS configured
- [ ] SSL certificates provisioned

### Testing
- [ ] End-to-end authentication flow tested
- [ ] S3 access with Cognito credentials tested
- [ ] API authorization tested

---

## Next Steps

1. **Confirm** AWS account access with Platform Operator
2. **Set up** Cognito User Pool and Identity Pool
3. **Configure** Azure AD federation
4. **Scaffold** React frontend with Amplify auth
5. **Test** end-to-end authentication flow

## Related Documents

- [Authentication Architecture](./authentication-architecture.md)
- [Authorization Model](./authorization-model.md)
- [Requirements Summary](./requirements-summary.md)
