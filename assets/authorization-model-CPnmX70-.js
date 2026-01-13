import{j as e}from"./index-895OKoX5.js";const i=[{id:"authorization-model",title:"Authorization Model",level:1},{id:"overview",title:"Overview",level:2},{id:"authorization-flow",title:"Authorization Flow",level:2},{id:"role-hierarchy",title:"Role Hierarchy",level:2},{id:"platform-roles",title:"Platform Roles",level:3},{id:"cognito-identity-pool-iam-roles",title:"Cognito Identity Pool IAM Roles",level:3},{id:"data-access-request-workflow",title:"Data Access Request Workflow",level:2},{id:"s3-access-patterns",title:"S3 Access Patterns",level:2},{id:"option-a-pre-signed-urls-recommended-for-pilot",title:"Option A: Pre-signed URLs (Recommended for Pilot)",level:3},{id:"option-b-temporary-credentials-via-sts",title:"Option B: Temporary Credentials via STS",level:3},{id:"option-c-lake-formation-future",title:"Option C: Lake Formation (Future)",level:3},{id:"access-control-matrix",title:"Access Control Matrix",level:2},{id:"audit-logging",title:"Audit Logging",level:2},{id:"related-documents",title:"Related Documents",level:2}],d=void 0;function s(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"authorization-model",children:"Authorization Model"}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsx(n.p,{children:"Authorization in Data Platform follows a two-tier model:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Platform Access"}),": What actions users can perform in the Data Platform application"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Data Access"}),": What datasets users can view/download from S3"]}),`
`]}),`
`,e.jsx(n.h2,{id:"authorization-flow",children:"Authorization Flow"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`┌─────────────────────────────────────────────────────────────────────────────────┐
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
`})}),`
`,e.jsx(n.h2,{id:"role-hierarchy",children:"Role Hierarchy"}),`
`,e.jsx(n.h3,{id:"platform-roles",children:"Platform Roles"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Role"}),e.jsx(n.th,{children:"Description"}),e.jsx(n.th,{children:"Capabilities"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"Viewer"})}),e.jsx(n.td,{children:"Basic read access"}),e.jsx(n.td,{children:"Search datasets, view metadata"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"Requestor"})}),e.jsx(n.td,{children:"Can request data access"}),e.jsx(n.td,{children:"Viewer + submit access requests"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"Data Steward"})}),e.jsx(n.td,{children:"Dataset owner/approver"}),e.jsx(n.td,{children:"Requestor + approve/deny requests"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"Admin"})}),e.jsx(n.td,{children:"Platform administrator"}),e.jsx(n.td,{children:"Full access, user management"})]})]})]}),`
`,e.jsx(n.h3,{id:"cognito-identity-pool-iam-roles",children:"Cognito Identity Pool IAM Roles"}),`
`,e.jsx(n.p,{children:"IAM roles attached to Cognito Identity Pool define what AWS resources authenticated users can access:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`┌────────────────────────────────────────────────────────────────────┐
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
`})}),`
`,e.jsx(n.h2,{id:"data-access-request-workflow",children:"Data Access Request Workflow"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`┌─────────────────────────────────────────────────────────────────────────────────┐
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
`})}),`
`,e.jsx(n.h2,{id:"s3-access-patterns",children:"S3 Access Patterns"}),`
`,e.jsx(n.h3,{id:"option-a-pre-signed-urls-recommended-for-pilot",children:"Option A: Pre-signed URLs (Recommended for Pilot)"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`User ──▶ API Gateway ──▶ Lambda ──▶ Generate Pre-signed URL ──▶ User downloads from S3
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Pros"}),`: Simple, no direct S3 credentials to user
`,e.jsx(n.strong,{children:"Cons"}),": URL can be shared (mitigate with short expiry)"]}),`
`,e.jsx(n.h3,{id:"option-b-temporary-credentials-via-sts",children:"Option B: Temporary Credentials via STS"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`User ──▶ API Gateway ──▶ Lambda ──▶ STS AssumeRole ──▶ Return temp credentials ──▶ User accesses S3 directly
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Pros"}),`: Fine-grained access, audit trail
`,e.jsx(n.strong,{children:"Cons"}),": More complex frontend, credentials exposed to browser"]}),`
`,e.jsx(n.h3,{id:"option-c-lake-formation-future",children:"Option C: Lake Formation (Future)"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`User ──▶ API Gateway ──▶ Athena/Glue ──▶ Lake Formation (column/row level) ──▶ Query results
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Pros"}),`: Column/row-level security, SQL interface
`,e.jsx(n.strong,{children:"Cons"}),": Requires additional setup, better for analytics use cases"]}),`
`,e.jsx(n.h2,{id:"access-control-matrix",children:"Access Control Matrix"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Resource"}),e.jsx(n.th,{children:"Viewer"}),e.jsx(n.th,{children:"Requestor"}),e.jsx(n.th,{children:"Data Steward"}),e.jsx(n.th,{children:"Admin"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Search datasets"}),e.jsx(n.td,{children:"✓"}),e.jsx(n.td,{children:"✓"}),e.jsx(n.td,{children:"✓"}),e.jsx(n.td,{children:"✓"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"View metadata"}),e.jsx(n.td,{children:"✓"}),e.jsx(n.td,{children:"✓"}),e.jsx(n.td,{children:"✓"}),e.jsx(n.td,{children:"✓"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Request access"}),e.jsx(n.td,{children:"✗"}),e.jsx(n.td,{children:"✓"}),e.jsx(n.td,{children:"✓"}),e.jsx(n.td,{children:"✓"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Approve requests"}),e.jsx(n.td,{children:"✗"}),e.jsx(n.td,{children:"✗"}),e.jsx(n.td,{children:"✓ (own datasets)"}),e.jsx(n.td,{children:"✓"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Download data"}),e.jsx(n.td,{children:"✗"}),e.jsx(n.td,{children:"✓ (approved)"}),e.jsx(n.td,{children:"✓ (own datasets)"}),e.jsx(n.td,{children:"✓"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Manage users"}),e.jsx(n.td,{children:"✗"}),e.jsx(n.td,{children:"✗"}),e.jsx(n.td,{children:"✗"}),e.jsx(n.td,{children:"✓"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Manage datasets"}),e.jsx(n.td,{children:"✗"}),e.jsx(n.td,{children:"✗"}),e.jsx(n.td,{children:"✓ (own datasets)"}),e.jsx(n.td,{children:"✓"})]})]})]}),`
`,e.jsx(n.h2,{id:"audit-logging",children:"Audit Logging"}),`
`,e.jsx(n.p,{children:"All access events are logged for compliance:"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Event"}),e.jsx(n.th,{children:"Logged Data"}),e.jsx(n.th,{children:"Storage"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Login"}),e.jsx(n.td,{children:"User, timestamp, IP, success/fail"}),e.jsx(n.td,{children:"CloudWatch Logs"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Dataset search"}),e.jsx(n.td,{children:"User, query, timestamp"}),e.jsx(n.td,{children:"CloudWatch Logs"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Access request"}),e.jsx(n.td,{children:"User, dataset, timestamp, justification"}),e.jsx(n.td,{children:"DynamoDB"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Approval/Denial"}),e.jsx(n.td,{children:"Steward, decision, timestamp, reason"}),e.jsx(n.td,{children:"DynamoDB"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Data download"}),e.jsx(n.td,{children:"User, dataset, timestamp, file"}),e.jsx(n.td,{children:"S3 Access Logs + CloudTrail"})]})]})]}),`
`,e.jsx(n.h2,{id:"related-documents",children:"Related Documents"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"./authentication-architecture",children:"Authentication Architecture"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"./implementation-guide",children:"Implementation Guide"})}),`
`]})]})}function l(t={}){const{wrapper:n}=t.components||{};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{l as default,d as frontmatter,i as toc};
