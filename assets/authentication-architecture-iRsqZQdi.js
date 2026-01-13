import{j as e}from"./index-895OKoX5.js";const t=[{id:"authentication-architecture",title:"Authentication Architecture",level:1},{id:"overview",title:"Overview",level:2},{id:"architecture-decision",title:"Architecture Decision",level:2},{id:"authentication-flow",title:"Authentication Flow",level:2},{id:"key-components",title:"Key Components",level:2},{id:"1-aws-cognito-user-pool",title:"1. AWS Cognito User Pool",level:3},{id:"2-aws-cognito-identity-pool",title:"2. AWS Cognito Identity Pool",level:3},{id:"3-azure-ad-entra-id",title:"3. Azure AD (Entra ID)",level:3},{id:"4-react-frontend-aws-amplify",title:"4. React Frontend (AWS Amplify)",level:3},{id:"token-types",title:"Token Types",level:2},{id:"security-considerations",title:"Security Considerations",level:2},{id:"token-storage",title:"Token Storage",level:3},{id:"token-transmission",title:"Token Transmission",level:3},{id:"session-management",title:"Session Management",level:3},{id:"mfa-enforcement",title:"MFA Enforcement",level:2},{id:"federation-trust-setup",title:"Federation Trust Setup",level:2},{id:"azure-ad--aws-iam-identity-center",title:"Azure AD → AWS IAM Identity Center",level:3},{id:"attribute-mapping",title:"Attribute Mapping",level:3},{id:"error-handling",title:"Error Handling",level:2},{id:"related-documents",title:"Related Documents",level:2}],l=void 0;function r(i){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"authentication-architecture",children:"Authentication Architecture"}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsx(n.p,{children:"Data Platform uses AWS Cognito as a federation hub, enabling multiple identity providers (starting with Azure AD) while providing native AWS credential management. This architecture supports future multi-IdP requirements without code changes."}),`
`,e.jsx(n.h2,{id:"architecture-decision",children:"Architecture Decision"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Option"}),e.jsx(n.th,{children:"Chosen"}),e.jsx(n.th,{children:"Rationale"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"MSAL (Azure AD direct)"}),e.jsx(n.td,{children:"❌"}),e.jsx(n.td,{children:"Single IdP only, manual AWS credential exchange"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"react-oidc-context"}),e.jsx(n.td,{children:"❌"}),e.jsx(n.td,{children:"Generic but requires custom AWS integration"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"AWS Cognito"})}),e.jsx(n.td,{children:"✅"}),e.jsx(n.td,{children:"Multi-IdP support, native AWS credentials, managed service"})]})]})]}),`
`,e.jsx(n.h2,{id:"authentication-flow",children:"Authentication Flow"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`┌─────────────────────────────────────────────────────────────────────────────────┐
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
`})}),`
`,e.jsx(n.h2,{id:"key-components",children:"Key Components"}),`
`,e.jsx(n.h3,{id:"1-aws-cognito-user-pool",children:"1. AWS Cognito User Pool"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Role"}),": Federation hub and user directory"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Responsibilities"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Federate to external IdPs (Azure AD, Okta, etc.)"}),`
`,e.jsx(n.li,{children:"Issue Cognito JWT tokens"}),`
`,e.jsx(n.li,{children:"Manage user attributes and groups"}),`
`,e.jsx(n.li,{children:"Provide hosted UI (optional)"}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Configuration Required"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"User Pool creation"}),`
`,e.jsx(n.li,{children:"App Client configuration"}),`
`,e.jsx(n.li,{children:"External IdP federation (Azure AD)"}),`
`,e.jsx(n.li,{children:"Attribute mapping"}),`
`]}),`
`,e.jsx(n.h3,{id:"2-aws-cognito-identity-pool",children:"2. AWS Cognito Identity Pool"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Role"}),": AWS credential provider"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Responsibilities"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Exchange Cognito tokens for AWS credentials"}),`
`,e.jsx(n.li,{children:"Map authenticated users to IAM roles"}),`
`,e.jsx(n.li,{children:"Provide temporary, scoped AWS access"}),`
`,e.jsx(n.li,{children:"Support unauthenticated access (if needed)"}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Configuration Required"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Identity Pool creation"}),`
`,e.jsx(n.li,{children:"Link to User Pool"}),`
`,e.jsx(n.li,{children:"IAM roles for authenticated users"}),`
`,e.jsx(n.li,{children:"Role mapping rules"}),`
`]}),`
`,e.jsx(n.h3,{id:"3-azure-ad-entra-id",children:"3. Azure AD (Entra ID)"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Role"}),": External Identity Provider for Client Organization users"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Responsibilities"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"User authentication (username/password)"}),`
`,e.jsx(n.li,{children:"Multi-Factor Authentication (MFA) enforcement"}),`
`,e.jsx(n.li,{children:"Issue OIDC tokens to Cognito"}),`
`,e.jsx(n.li,{children:"User attribute claims (email, groups, roles)"}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Configuration Required"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"App Registration for Cognito"}),`
`,e.jsx(n.li,{children:"Redirect URIs (Cognito hosted UI)"}),`
`,e.jsx(n.li,{children:"API permissions (openid, profile, email)"}),`
`,e.jsx(n.li,{children:"Token configuration (claims)"}),`
`]}),`
`,e.jsx(n.h3,{id:"4-react-frontend-aws-amplify",children:"4. React Frontend (AWS Amplify)"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Role"}),": Client-side authentication handling"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Library"}),": ",e.jsx(n.code,{children:"aws-amplify"})," + ",e.jsx(n.code,{children:"@aws-amplify/ui-react"})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Responsibilities"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Initiate federated login"}),`
`,e.jsx(n.li,{children:"Handle authentication callback"}),`
`,e.jsx(n.li,{children:"Manage Cognito session"}),`
`,e.jsx(n.li,{children:"Provide AWS credentials to SDK"}),`
`,e.jsx(n.li,{children:"Handle token refresh automatically"}),`
`]}),`
`,e.jsx(n.h2,{id:"token-types",children:"Token Types"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Token"}),e.jsx(n.th,{children:"Issuer"}),e.jsx(n.th,{children:"Purpose"}),e.jsx(n.th,{children:"Lifetime"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"Azure AD ID Token"})}),e.jsx(n.td,{children:"Azure AD"}),e.jsx(n.td,{children:"Initial user identity"}),e.jsx(n.td,{children:"~1 hour"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"Cognito ID Token"})}),e.jsx(n.td,{children:"Cognito User Pool"}),e.jsx(n.td,{children:"User identity for app"}),e.jsx(n.td,{children:"1 hour"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"Cognito Access Token"})}),e.jsx(n.td,{children:"Cognito User Pool"}),e.jsx(n.td,{children:"API authorization"}),e.jsx(n.td,{children:"1 hour"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"Cognito Refresh Token"})}),e.jsx(n.td,{children:"Cognito User Pool"}),e.jsx(n.td,{children:"Obtain new tokens"}),e.jsx(n.td,{children:"30 days (configurable)"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"AWS Credentials"})}),e.jsx(n.td,{children:"Cognito Identity Pool"}),e.jsx(n.td,{children:"S3/AWS access"}),e.jsx(n.td,{children:"1 hour (configurable)"})]})]})]}),`
`,e.jsx(n.h2,{id:"security-considerations",children:"Security Considerations"}),`
`,e.jsx(n.h3,{id:"token-storage",children:"Token Storage"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"DO"}),": Store tokens in memory (React state/context)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"DO"}),": Use ",e.jsx(n.code,{children:"httpOnly"})," cookies for refresh tokens (if backend-managed)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"DON'T"}),": Store tokens in localStorage (XSS vulnerable)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"DON'T"}),": Store tokens in sessionStorage for sensitive apps"]}),`
`]}),`
`,e.jsx(n.h3,{id:"token-transmission",children:"Token Transmission"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"DO"}),": Use HTTPS for all requests"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"DO"}),": Pass tokens in Authorization header (",e.jsx(n.code,{children:"Bearer <token>"}),")"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"DON'T"}),": Pass tokens in URL query parameters"]}),`
`]}),`
`,e.jsx(n.h3,{id:"session-management",children:"Session Management"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"DO"}),": Implement idle timeout (e.g., 30 min)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"DO"}),": Implement absolute timeout (e.g., 8 hours)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"DO"}),": Provide explicit logout functionality"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"DO"}),": Revoke refresh tokens on logout"]}),`
`]}),`
`,e.jsx(n.h2,{id:"mfa-enforcement",children:"MFA Enforcement"}),`
`,e.jsx(n.p,{children:"MFA is enforced at the Azure AD level through Conditional Access policies:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Conditional Access Policy"})," (Azure AD)"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Target: Data Platform App Registration"}),`
`,e.jsx(n.li,{children:"Condition: All users"}),`
`,e.jsx(n.li,{children:"Grant: Require MFA"}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Per-User MFA"})," (fallback)"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Enable MFA for all Client Organization users"}),`
`,e.jsx(n.li,{children:"Supported methods: Authenticator app, SMS, phone call"}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"federation-trust-setup",children:"Federation Trust Setup"}),`
`,e.jsx(n.h3,{id:"azure-ad--aws-iam-identity-center",children:"Azure AD → AWS IAM Identity Center"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`┌─────────────────────────────────────────────────────────────────┐
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
`})}),`
`,e.jsx(n.h3,{id:"attribute-mapping",children:"Attribute Mapping"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Azure AD Attribute"}),e.jsx(n.th,{children:"AWS IAM IC Attribute"}),e.jsx(n.th,{children:"Purpose"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"user.userprincipalname"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"email"})}),e.jsx(n.td,{children:"User identifier"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"user.givenname"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"firstName"})}),e.jsx(n.td,{children:"Display name"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"user.surname"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"lastName"})}),e.jsx(n.td,{children:"Display name"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"user.groups"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"groups"})}),e.jsx(n.td,{children:"Permission mapping"})]})]})]}),`
`,e.jsx(n.h2,{id:"error-handling",children:"Error Handling"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Error"}),e.jsx(n.th,{children:"Cause"}),e.jsx(n.th,{children:"User Experience"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"AADSTS50076"})}),e.jsx(n.td,{children:"MFA required"}),e.jsx(n.td,{children:"Redirect to MFA challenge"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"AADSTS65001"})}),e.jsx(n.td,{children:"Consent required"}),e.jsx(n.td,{children:"Show consent prompt"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"AADSTS700016"})}),e.jsx(n.td,{children:"App not found"}),e.jsx(n.td,{children:"Show error, contact admin"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"AADSTS90014"})}),e.jsx(n.td,{children:"Missing required field"}),e.jsx(n.td,{children:"Show error, retry login"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Token expired"}),e.jsx(n.td,{children:"Session timeout"}),e.jsx(n.td,{children:"Silent refresh or re-login"})]})]})]}),`
`,e.jsx(n.h2,{id:"related-documents",children:"Related Documents"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"./implementation-guide",children:"Implementation Guide"})," - Code examples"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"./authorization-model",children:"Authorization Model"})," - AWS permission mapping"]}),`
`]})]})}function d(i={}){const{wrapper:n}=i.components||{};return n?e.jsx(n,{...i,children:e.jsx(r,{...i})}):r(i)}export{d as default,l as frontmatter,t as toc};
