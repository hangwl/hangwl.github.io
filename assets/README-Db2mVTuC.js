import{j as e}from"./index-895OKoX5.js";const s=[{id:"data-platform---technical-documentation",title:"Data Platform - Technical Documentation",level:1},{id:"overview",title:"Overview",level:2},{id:"key-stakeholders",title:"Key Stakeholders",level:2},{id:"documentation-index",title:"Documentation Index",level:2},{id:"tech-stack",title:"Tech Stack",level:2},{id:"architecture-summary",title:"Architecture Summary",level:2},{id:"project-status",title:"Project Status",level:2}],d=void 0;function r(n){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"data-platform---technical-documentation",children:"Data Platform - Technical Documentation"}),`
`,e.jsx(t.p,{children:"Technical documentation for authentication, authorization, and data access."}),`
`,e.jsx(t.h2,{id:"overview",children:"Overview"}),`
`,e.jsx(t.p,{children:"Data Platform is a browser-based web application that enables authorized users to search, request, and access datasets stored in AWS S3. The platform uses AWS Cognito as a federation hub, allowing multiple identity providers (starting with Azure AD) while providing native AWS credential management."}),`
`,e.jsx(t.h2,{id:"key-stakeholders",children:"Key Stakeholders"}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{children:"Entity"}),e.jsx(t.th,{children:"Role"})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.strong,{children:"Platform Operator"})}),e.jsx(t.td,{children:"Platform operator; manages AWS infrastructure, IAM roles, and user provisioning"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.strong,{children:"Client Organization"})}),e.jsx(t.td,{children:"Client organization; users authenticate via Azure AD"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.strong,{children:"Data Stewards"})}),e.jsx(t.td,{children:"Designated approvers for dataset access requests"})]})]})]}),`
`,e.jsx(t.h2,{id:"documentation-index",children:"Documentation Index"}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{children:"Document"}),e.jsx(t.th,{children:"Description"})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.a,{href:"./authentication-architecture",children:"Authentication Architecture"})}),e.jsx(t.td,{children:"OIDC federation, token flow, session management"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.a,{href:"./authorization-model",children:"Authorization Model"})}),e.jsx(t.td,{children:"AWS IAM roles, permission sets, data access"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.a,{href:"./implementation-guide",children:"Implementation Guide"})}),e.jsx(t.td,{children:"Step-by-step setup and code patterns"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.a,{href:"./requirements-summary",children:"Requirements Summary"})}),e.jsx(t.td,{children:"Original requirements and assumptions"})]})]})]}),`
`,e.jsx(t.h2,{id:"tech-stack",children:"Tech Stack"}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{children:"Layer"}),e.jsx(t.th,{children:"Technology"})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"Frontend"}),e.jsx(t.td,{children:"React, TanStack Query, TanStack Router, AWS Amplify"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"Auth Federation"}),e.jsx(t.td,{children:"AWS Cognito User Pool (OIDC hub)"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"Identity Providers"}),e.jsx(t.td,{children:"Azure AD (Entra ID), extensible to others"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"AWS Credentials"}),e.jsx(t.td,{children:"Cognito Identity Pool"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"Backend"}),e.jsx(t.td,{children:"Lambda + API Gateway"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"Data Storage"}),e.jsx(t.td,{children:"AWS S3"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"Fine-grained Access"}),e.jsx(t.td,{children:"AWS Lake Formation (future)"})]})]})]}),`
`,e.jsx(t.h2,{id:"architecture-summary",children:"Architecture Summary"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{children:`┌─────────────────────────────────────────────────────────────────────────────┐
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
`})}),`
`,e.jsx(t.h2,{id:"project-status",children:"Project Status"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Phase"}),": Planning / Design"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Users"}),": Pilot (~50 users)"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Timeline"}),": TBD"]}),`
`]})]})}function a(n={}){const{wrapper:t}=n.components||{};return t?e.jsx(t,{...n,children:e.jsx(r,{...n})}):r(n)}export{a as default,d as frontmatter,s as toc};
