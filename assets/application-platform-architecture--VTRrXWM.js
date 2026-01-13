import{j as e}from"./index-DmIt1YIB.js";const r=[{id:"application-platform-architecture",title:"Application Platform Architecture",level:1},{id:"web-application-foundation-tanstack--ssr",title:"Web Application Foundation (TanStack + SSR)",level:2},{id:"what-this-diagram-represents",title:"What this diagram represents",level:3},{id:"architectural-explanation",title:"Architectural explanation",level:3},{id:"key-architectural-guarantee",title:"Key architectural guarantee",level:3},{id:"secure-api--authorization-layer-python",title:"Secure API & Authorization Layer (Python)",level:2},{id:"what-this-diagram-represents-1",title:"What this diagram represents",level:3},{id:"architectural-explanation-1",title:"Architectural explanation",level:3},{id:"key-architectural-guarantee-1",title:"Key architectural guarantee",level:3},{id:"authentication--data-access-flow",title:"Authentication & Data Access Flow",level:2},{id:"what-this-diagram-represents-2",title:"What this diagram represents",level:3},{id:"architectural-explanation-2",title:"Architectural explanation",level:3},{id:"key-architectural-guarantee-2",title:"Key architectural guarantee",level:3},{id:"how-these-three-diagrams-work-together",title:"How these three diagrams work together",level:2}],a=void 0;function i(t){const n={blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"application-platform-architecture",children:"Application Platform Architecture"}),`
`,e.jsx(n.h2,{id:"web-application-foundation-tanstack--ssr",children:e.jsx(n.strong,{children:"Web Application Foundation (TanStack + SSR)"})}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"/images/0tYJFX41Lz.png",alt:"Web Application Foundation"})}),`
`,e.jsx(n.h3,{id:"what-this-diagram-represents",children:"What this diagram represents"}),`
`,e.jsxs(n.p,{children:["This diagram defines the ",e.jsx(n.strong,{children:"logical responsibilities and trust boundaries"})," of the web application layer. It answers the question:"]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.em,{children:"“Which components exist, and what is each component allowed to do?”"})}),`
`]}),`
`,e.jsxs(n.p,{children:["It is intentionally ",e.jsx(n.strong,{children:"non-deployment-specific"})," and focuses on ",e.jsx(n.strong,{children:"separation of concerns"}),", not infrastructure."]}),`
`,e.jsx(n.h3,{id:"architectural-explanation",children:"Architectural explanation"}),`
`,e.jsxs(n.p,{children:["At the left, ",e.jsx(n.strong,{children:"end users interact through a browser over HTTPS"}),", which is treated as an untrusted environment."]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"TanStack frontend"})," (React + TanStack Router + TanStack Query) forms the ",e.jsx(n.strong,{children:"web application foundation"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"It is responsible for UI rendering, navigation, and data orchestration."}),`
`,e.jsxs(n.li,{children:["It may use SSR for performance and UX, but it remains a ",e.jsx(n.strong,{children:"presentation-tier component"}),"."]}),`
`,e.jsxs(n.li,{children:["It does ",e.jsx(n.strong,{children:"not"})," store secrets, validate credentials, or make authorization decisions."]}),`
`]}),`
`,e.jsxs(n.p,{children:["Authentication is delegated to ",e.jsx(n.strong,{children:"external enterprise Identity Providers"})," using ",e.jsx(n.strong,{children:"OIDC"}),` (e.g., Azure AD).
This ensures:`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"credentials never pass through application code"}),`
`,e.jsx(n.li,{children:"identity is standardized before entering the platform"}),`
`]}),`
`,e.jsxs(n.p,{children:["All data access flows through the ",e.jsx(n.strong,{children:"Python backend"}),", which represents the ",e.jsx(n.strong,{children:"primary secure boundary"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"authentication validation"}),`
`,e.jsx(n.li,{children:"authorization and policy enforcement"}),`
`,e.jsx(n.li,{children:"tenant isolation (RBAC/ABAC)"}),`
`,e.jsx(n.li,{children:"controlled access to the zero-copy data mart"}),`
`,e.jsx(n.li,{children:"audit logging"}),`
`]}),`
`,e.jsxs(n.p,{children:["The backend mediates all access to the ",e.jsx(n.strong,{children:"AWS zero-copy data mart"})," (Athena, Redshift, S3), ensuring that:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"no dataset is directly accessible from the browser"}),`
`,e.jsxs(n.li,{children:["authorization is enforced ",e.jsx(n.em,{children:"before"})," any query executes"]}),`
`]}),`
`,e.jsx(n.h3,{id:"key-architectural-guarantee",children:"Key architectural guarantee"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["This diagram establishes that ",e.jsx(n.strong,{children:"TanStack is a frontend foundation only"}),", while ",e.jsx(n.strong,{children:"Python is the system-of-record for security, authorization, and data access"}),"."]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"secure-api--authorization-layer-python",children:e.jsx(n.strong,{children:"Secure API & Authorization Layer (Python)"})}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"/images/tHjMLv2UpU.png",alt:"Secure API & Authorization Layer"})}),`
`,e.jsx(n.h3,{id:"what-this-diagram-represents-1",children:"What this diagram represents"}),`
`,e.jsxs(n.p,{children:["This diagram explains ",e.jsx(n.strong,{children:"where components run at runtime"})," and ",e.jsx(n.strong,{children:"how requests physically traverse the system"}),"."]}),`
`,e.jsx(n.p,{children:"It answers the question:"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.em,{children:"“How does a request flow through AWS and which runtime enforces security?”"})}),`
`]}),`
`,e.jsx(n.h3,{id:"architectural-explanation-1",children:"Architectural explanation"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"client layer (browser)"})," sends requests over HTTPS, which enter the system through ",e.jsx(n.strong,{children:"AWS Edge/Ingress"}),` (CloudFront + WAF).
This provides:`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"TLS termination"}),`
`,e.jsx(n.li,{children:"DDoS protection"}),`
`,e.jsx(n.li,{children:"basic request filtering"}),`
`]}),`
`,e.jsxs(n.p,{children:["Requests are routed to a ",e.jsx(n.strong,{children:"Node.js SSR application"})," that hosts the TanStack-based web app:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"server-side rendering"}),`
`,e.jsx(n.li,{children:"hydration"}),`
`,e.jsx(n.li,{children:"route-level data prefetch"}),`
`,e.jsx(n.li,{children:"UI composition"}),`
`]}),`
`,e.jsxs(n.p,{children:["Authentication is handled via ",e.jsx(n.strong,{children:"OIDC/SAML IdPs"}),` (e.g., Entra ID, Okta).
The SSR app participates in the auth flow but `,e.jsx(n.strong,{children:"does not own identity validation logic"}),"."]}),`
`,e.jsxs(n.p,{children:["For any privileged operation, the SSR app communicates ",e.jsx(n.strong,{children:"server-to-server"})," with the ",e.jsx(n.strong,{children:"Python Secure API"}),"."]}),`
`,e.jsx(n.p,{children:"Inside the Python backend:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Identity/session/JWT validation occurs first"}),`
`,e.jsx(n.li,{children:"Authorization policies (RBAC/ABAC, tenant constraints) are evaluated"}),`
`,e.jsxs(n.li,{children:["API endpoints act as a ",e.jsx(n.strong,{children:"data access façade"})]}),`
`,e.jsx(n.li,{children:"Authorized queries are executed against AWS data services"}),`
`,e.jsxs(n.li,{children:["All access generates ",e.jsx(n.strong,{children:"audit events"})," sent to SIEM/logging systems"]}),`
`]}),`
`,e.jsxs(n.p,{children:["Post-hydration, the browser may also make API calls directly, but ",e.jsx(n.strong,{children:"only through the same secure Python boundary"}),", using the same authorization rules."]}),`
`,e.jsx(n.h3,{id:"key-architectural-guarantee-1",children:"Key architectural guarantee"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["This diagram proves that ",e.jsx(n.strong,{children:"no runtime path exists from browser to data mart without passing through the Python authorization layer"}),"."]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"authentication--data-access-flow",children:e.jsx(n.strong,{children:"Authentication & Data Access Flow"})}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"/images/METIVGHTg4.png",alt:"Authentication & Data Access Flow"})}),`
`,e.jsx(n.h3,{id:"what-this-diagram-represents-2",children:"What this diagram represents"}),`
`,e.jsxs(n.p,{children:["This diagram shows ",e.jsx(n.strong,{children:"time-ordered behavior"})," across systems. It answers:"]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.em,{children:"“What actually happens, step by step, when a user loads a protected page and accesses data?”"})}),`
`]}),`
`,e.jsxs(n.p,{children:["This is the ",e.jsx(n.strong,{children:"behavioral proof"})," of the previous two diagrams."]}),`
`,e.jsx(n.h3,{id:"architectural-explanation-2",children:"Architectural explanation"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"User requests a protected route"})," (e.g., ",e.jsx(n.code,{children:"/dashboard"}),")"]}),`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.strong,{children:"Node SSR app"})," detects no active session and redirects the user to the ",e.jsx(n.strong,{children:"OIDC Identity Provider"})]}),`
`,e.jsx(n.li,{children:"The user authenticates externally"}),`
`,e.jsx(n.li,{children:"The IdP redirects back with an authorization result"}),`
`,e.jsxs(n.li,{children:["The SSR app establishes a ",e.jsx(n.strong,{children:"server-managed session"})," (HttpOnly cookie)"]}),`
`]}),`
`,e.jsx(n.p,{children:"At this point, the user is authenticated."}),`
`,e.jsxs(n.ol,{start:"6",children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["The SSR app begins ",e.jsx(n.strong,{children:"server-side data prefetch"})]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["It calls the ",e.jsx(n.strong,{children:"Python Secure API"}),", passing the session context"]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"The Python API:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"validates identity"}),`
`,e.jsx(n.li,{children:"evaluates RBAC/ABAC policies"}),`
`,e.jsx(n.li,{children:"enforces tenant isolation"}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["An authorized query is executed against the ",e.jsx(n.strong,{children:"zero-copy AWS data mart"})]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"A scoped result set is returned"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"An audit event is emitted"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["The SSR app renders HTML and embeds the ",e.jsx(n.strong,{children:"dehydrated TanStack Query cache"})]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"The browser receives rendered HTML"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Hydration occurs"}),", attaching React and TanStack Query"]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Subsequent user interactions (pagination, filtering) result in client-side API calls, still enforced by the Python backend"}),`
`]}),`
`]}),`
`,e.jsx(n.h3,{id:"key-architectural-guarantee-2",children:"Key architectural guarantee"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["This flow ensures ",e.jsx(n.strong,{children:"consistent authorization for both SSR and client-side interactions"}),", with full auditability and no privileged logic in the browser."]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"how-these-three-diagrams-work-together",children:"How these three diagrams work together"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Web Application Foundation"})," defines ",e.jsx(n.em,{children:"responsibility and trust boundaries"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Secure API & Authorization Layer"})," shows ",e.jsx(n.em,{children:"runtime placement and enforcement"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Authentication & Data Access Flow"})," demonstrates ",e.jsx(n.em,{children:"correct, secure behavior over time"})]}),`
`]}),`
`,e.jsxs(n.p,{children:["Together, they establish an ",e.jsx(n.strong,{children:"enterprise-grade application platform architecture"})," that is:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"secure by design"}),`
`,e.jsx(n.li,{children:"identity-driven"}),`
`,e.jsx(n.li,{children:"auditable"}),`
`,e.jsx(n.li,{children:"scalable"}),`
`,e.jsx(n.li,{children:"future-proof"}),`
`]})]})}function l(t={}){const{wrapper:n}=t.components||{};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{l as default,a as frontmatter,r as toc};
