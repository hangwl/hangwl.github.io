import{j as s}from"./index-CtAT4ExP.js";const d={title:"REST API",links:["http","https","webhooks","websockets"]};function n(e){const i={a:"a",code:"code",figure:"figure",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...e.components};return s.jsxs(s.Fragment,{children:[s.jsx(i.h2,{children:"Introduction"}),`
`,s.jsxs(i.p,{children:["REST (Representational State Transfer) is an ",s.jsx(i.strong,{children:"architectural style for designing networked applications"}),". REST APIs use ",s.jsx(i.a,{href:"/notes/http",children:"HTTP"})," methods to perform CRUD operations on resources identified by URLs."]}),`
`,s.jsxs(i.p,{children:["REST APIs are ",s.jsx(i.strong,{children:"stateless"}),"—each request contains all information needed to process it, and servers don't store client session state between requests."]}),`
`,s.jsx(i.h2,{children:"Core Principles"}),`
`,s.jsx(i.p,{children:"REST is built on key architectural constraints:"}),`
`,s.jsxs(i.ul,{children:[`
`,s.jsxs(i.li,{children:[s.jsx(i.strong,{children:"Client-Server"}),": Separation between UI and data storage"]}),`
`,s.jsxs(i.li,{children:[s.jsx(i.strong,{children:"Stateless"}),": Each request is self-contained"]}),`
`,s.jsxs(i.li,{children:[s.jsx(i.strong,{children:"Cacheable"}),": Responses define caching behavior"]}),`
`,s.jsxs(i.li,{children:[s.jsx(i.strong,{children:"Uniform Interface"}),": Consistent resource identification and manipulation via URIs"]}),`
`,s.jsxs(i.li,{children:[s.jsx(i.strong,{children:"Layered System"}),": Hierarchical architecture with independent layers"]}),`
`]}),`
`,s.jsx(i.h2,{children:"HTTP Methods"}),`
`,s.jsxs(i.table,{children:[s.jsx(i.thead,{children:s.jsxs(i.tr,{children:[s.jsx(i.th,{children:"Method"}),s.jsx(i.th,{children:"Purpose"}),s.jsx(i.th,{children:"Idempotent"}),s.jsx(i.th,{children:"Safe"})]})}),s.jsxs(i.tbody,{children:[s.jsxs(i.tr,{children:[s.jsx(i.td,{children:s.jsx(i.strong,{children:"GET"})}),s.jsx(i.td,{children:"Retrieve resource"}),s.jsx(i.td,{children:"Yes"}),s.jsx(i.td,{children:"Yes"})]}),s.jsxs(i.tr,{children:[s.jsx(i.td,{children:s.jsx(i.strong,{children:"POST"})}),s.jsx(i.td,{children:"Create resource"}),s.jsx(i.td,{children:"No"}),s.jsx(i.td,{children:"No"})]}),s.jsxs(i.tr,{children:[s.jsx(i.td,{children:s.jsx(i.strong,{children:"PUT"})}),s.jsx(i.td,{children:"Replace resource"}),s.jsx(i.td,{children:"Yes"}),s.jsx(i.td,{children:"No"})]}),s.jsxs(i.tr,{children:[s.jsx(i.td,{children:s.jsx(i.strong,{children:"PATCH"})}),s.jsx(i.td,{children:"Partial update"}),s.jsx(i.td,{children:"No"}),s.jsx(i.td,{children:"No"})]}),s.jsxs(i.tr,{children:[s.jsx(i.td,{children:s.jsx(i.strong,{children:"DELETE"})}),s.jsx(i.td,{children:"Remove resource"}),s.jsx(i.td,{children:"Yes"}),s.jsx(i.td,{children:"No"})]})]})]}),`
`,s.jsxs(i.ul,{children:[`
`,s.jsxs(i.li,{children:[s.jsx(i.strong,{children:"Idempotent"}),": Multiple identical requests have the same effect"]}),`
`,s.jsxs(i.li,{children:[s.jsx(i.strong,{children:"Safe"}),": Operation doesn't modify resources"]}),`
`]}),`
`,s.jsx(i.h2,{children:"Status Codes"}),`
`,s.jsx(i.h3,{children:"Success (2xx)"}),`
`,s.jsxs(i.ul,{children:[`
`,s.jsxs(i.li,{children:[s.jsx(i.strong,{children:"200 OK"}),": Request succeeded"]}),`
`,s.jsxs(i.li,{children:[s.jsx(i.strong,{children:"201 Created"}),": Resource created (POST)"]}),`
`,s.jsxs(i.li,{children:[s.jsx(i.strong,{children:"204 No Content"}),": Success with no body (DELETE)"]}),`
`]}),`
`,s.jsx(i.h3,{children:"Client Errors (4xx)"}),`
`,s.jsxs(i.ul,{children:[`
`,s.jsxs(i.li,{children:[s.jsx(i.strong,{children:"400 Bad Request"}),": Invalid syntax"]}),`
`,s.jsxs(i.li,{children:[s.jsx(i.strong,{children:"401 Unauthorized"}),": Authentication required"]}),`
`,s.jsxs(i.li,{children:[s.jsx(i.strong,{children:"403 Forbidden"}),": Not authorized"]}),`
`,s.jsxs(i.li,{children:[s.jsx(i.strong,{children:"404 Not Found"}),": Resource doesn't exist"]}),`
`,s.jsxs(i.li,{children:[s.jsx(i.strong,{children:"429 Too Many Requests"}),": Rate limit exceeded"]}),`
`]}),`
`,s.jsx(i.h3,{children:"Server Errors (5xx)"}),`
`,s.jsxs(i.ul,{children:[`
`,s.jsxs(i.li,{children:[s.jsx(i.strong,{children:"500 Internal Server Error"}),": Generic error"]}),`
`,s.jsxs(i.li,{children:[s.jsx(i.strong,{children:"503 Service Unavailable"}),": Server unavailable"]}),`
`]}),`
`,s.jsx(i.h2,{children:"Resource Naming"}),`
`,s.jsx(i.p,{children:"Best practices for endpoint design:"}),`
`,s.jsx(i.p,{children:s.jsx(i.strong,{children:"Use nouns, not verbs:"})}),`
`,s.jsx(i.pre,{children:s.jsx(i.code,{children:`✅ GET /users/123
❌ GET /getUser/123
`})}),`
`,s.jsx(i.p,{children:s.jsx(i.strong,{children:"Use plural nouns:"})}),`
`,s.jsx(i.pre,{children:s.jsx(i.code,{children:`✅ GET /users
❌ GET /user
`})}),`
`,s.jsx(i.p,{children:s.jsx(i.strong,{children:"Hierarchical structure:"})}),`
`,s.jsx(i.pre,{children:s.jsx(i.code,{children:`✅ GET /users/123/orders
✅ GET /users/123/orders/456
`})}),`
`,s.jsx(i.p,{children:s.jsx(i.strong,{children:"Use hyphens for readability:"})}),`
`,s.jsx(i.pre,{children:s.jsx(i.code,{children:`✅ GET /user-profiles
❌ GET /user_profiles
`})}),`
`,s.jsx(i.h2,{children:"Request Examples"}),`
`,s.jsx(i.h3,{children:"GET - Retrieve Resource"}),`
`,s.jsx(i.figure,{"data-rehype-pretty-code-figure":"",children:s.jsx(i.pre,{style:{"--shiki-dark":"#e6edf3","--shiki-light":"#D4D4D4","--shiki-dark-bg":"#0d1117","--shiki-light-bg":"#1E1E1E"},tabIndex:"0","data-language":"http","data-theme":"github-dark-default dark-plus",children:s.jsxs(i.code,{"data-language":"http","data-theme":"github-dark-default dark-plus",style:{display:"grid"},children:[s.jsxs(i.span,{"data-line":"",children:[s.jsx(i.span,{style:{"--shiki-dark":"#FF7B72","--shiki-light":"#C586C0"},children:"GET"}),s.jsx(i.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:" /api/users/123"})]}),`
`,s.jsxs(i.span,{"data-line":"",children:[s.jsx(i.span,{style:{"--shiki-dark":"#7EE787","--shiki-light":"#569CD6"},children:"Authorization"}),s.jsx(i.span,{style:{"--shiki-dark":"#FF7B72","--shiki-light":"#569CD6"},children:":"}),s.jsx(i.span,{style:{"--shiki-dark":"#A5D6FF","--shiki-light":"#CE9178"},children:" Bearer <token>"})]})]})})}),`
`,s.jsx(i.p,{children:"Response:"}),`
`,s.jsx(i.figure,{"data-rehype-pretty-code-figure":"",children:s.jsx(i.pre,{style:{"--shiki-dark":"#e6edf3","--shiki-light":"#D4D4D4","--shiki-dark-bg":"#0d1117","--shiki-light-bg":"#1E1E1E"},tabIndex:"0","data-language":"json","data-theme":"github-dark-default dark-plus",children:s.jsxs(i.code,{"data-language":"json","data-theme":"github-dark-default dark-plus",style:{display:"grid"},children:[s.jsx(i.span,{"data-line":"",children:s.jsx(i.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:"{"})}),`
`,s.jsxs(i.span,{"data-line":"",children:[s.jsx(i.span,{style:{"--shiki-dark":"#7EE787","--shiki-light":"#9CDCFE"},children:'  "id"'}),s.jsx(i.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:": "}),s.jsx(i.span,{style:{"--shiki-dark":"#79C0FF","--shiki-light":"#B5CEA8"},children:"123"}),s.jsx(i.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:","})]}),`
`,s.jsxs(i.span,{"data-line":"",children:[s.jsx(i.span,{style:{"--shiki-dark":"#7EE787","--shiki-light":"#9CDCFE"},children:'  "name"'}),s.jsx(i.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:": "}),s.jsx(i.span,{style:{"--shiki-dark":"#A5D6FF","--shiki-light":"#CE9178"},children:'"John Doe"'}),s.jsx(i.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:","})]}),`
`,s.jsxs(i.span,{"data-line":"",children:[s.jsx(i.span,{style:{"--shiki-dark":"#7EE787","--shiki-light":"#9CDCFE"},children:'  "email"'}),s.jsx(i.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:": "}),s.jsx(i.span,{style:{"--shiki-dark":"#A5D6FF","--shiki-light":"#CE9178"},children:'"john@example.com"'})]}),`
`,s.jsx(i.span,{"data-line":"",children:s.jsx(i.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:"}"})})]})})}),`
`,s.jsx(i.h3,{children:"POST - Create Resource"}),`
`,s.jsx(i.figure,{"data-rehype-pretty-code-figure":"",children:s.jsx(i.pre,{style:{"--shiki-dark":"#e6edf3","--shiki-light":"#D4D4D4","--shiki-dark-bg":"#0d1117","--shiki-light-bg":"#1E1E1E"},tabIndex:"0","data-language":"http","data-theme":"github-dark-default dark-plus",children:s.jsxs(i.code,{"data-language":"http","data-theme":"github-dark-default dark-plus",style:{display:"grid"},children:[s.jsxs(i.span,{"data-line":"",children:[s.jsx(i.span,{style:{"--shiki-dark":"#FF7B72","--shiki-light":"#C586C0"},children:"POST"}),s.jsx(i.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:" /api/users"})]}),`
`,s.jsxs(i.span,{"data-line":"",children:[s.jsx(i.span,{style:{"--shiki-dark":"#7EE787","--shiki-light":"#569CD6"},children:"Content-Type"}),s.jsx(i.span,{style:{"--shiki-dark":"#FF7B72","--shiki-light":"#569CD6"},children:":"}),s.jsx(i.span,{style:{"--shiki-dark":"#A5D6FF","--shiki-light":"#CE9178"},children:" application/json"})]}),`
`,s.jsx(i.span,{"data-line":"",children:" "}),`
`,s.jsx(i.span,{"data-line":"",children:s.jsx(i.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:"{"})}),`
`,s.jsxs(i.span,{"data-line":"",children:[s.jsx(i.span,{style:{"--shiki-dark":"#7EE787","--shiki-light":"#9CDCFE"},children:'  "name"'}),s.jsx(i.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:": "}),s.jsx(i.span,{style:{"--shiki-dark":"#A5D6FF","--shiki-light":"#CE9178"},children:'"Jane Smith"'}),s.jsx(i.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:","})]}),`
`,s.jsxs(i.span,{"data-line":"",children:[s.jsx(i.span,{style:{"--shiki-dark":"#7EE787","--shiki-light":"#9CDCFE"},children:'  "email"'}),s.jsx(i.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:": "}),s.jsx(i.span,{style:{"--shiki-dark":"#A5D6FF","--shiki-light":"#CE9178"},children:'"jane@example.com"'})]}),`
`,s.jsx(i.span,{"data-line":"",children:s.jsx(i.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:"}"})})]})})}),`
`,s.jsx(i.h3,{children:"PATCH - Partial Update"}),`
`,s.jsx(i.figure,{"data-rehype-pretty-code-figure":"",children:s.jsx(i.pre,{style:{"--shiki-dark":"#e6edf3","--shiki-light":"#D4D4D4","--shiki-dark-bg":"#0d1117","--shiki-light-bg":"#1E1E1E"},tabIndex:"0","data-language":"http","data-theme":"github-dark-default dark-plus",children:s.jsxs(i.code,{"data-language":"http","data-theme":"github-dark-default dark-plus",style:{display:"grid"},children:[s.jsxs(i.span,{"data-line":"",children:[s.jsx(i.span,{style:{"--shiki-dark":"#FF7B72","--shiki-light":"#C586C0"},children:"PATCH"}),s.jsx(i.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:" /api/users/123"})]}),`
`,s.jsxs(i.span,{"data-line":"",children:[s.jsx(i.span,{style:{"--shiki-dark":"#7EE787","--shiki-light":"#569CD6"},children:"Content-Type"}),s.jsx(i.span,{style:{"--shiki-dark":"#FF7B72","--shiki-light":"#569CD6"},children:":"}),s.jsx(i.span,{style:{"--shiki-dark":"#A5D6FF","--shiki-light":"#CE9178"},children:" application/json"})]}),`
`,s.jsx(i.span,{"data-line":"",children:" "}),`
`,s.jsx(i.span,{"data-line":"",children:s.jsx(i.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:"{"})}),`
`,s.jsxs(i.span,{"data-line":"",children:[s.jsx(i.span,{style:{"--shiki-dark":"#7EE787","--shiki-light":"#9CDCFE"},children:'  "email"'}),s.jsx(i.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:": "}),s.jsx(i.span,{style:{"--shiki-dark":"#A5D6FF","--shiki-light":"#CE9178"},children:'"newemail@example.com"'})]}),`
`,s.jsx(i.span,{"data-line":"",children:s.jsx(i.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:"}"})})]})})}),`
`,s.jsx(i.h2,{children:"Query Parameters"}),`
`,s.jsx(i.p,{children:"Common patterns for filtering, sorting, and pagination:"}),`
`,s.jsx(i.figure,{"data-rehype-pretty-code-figure":"",children:s.jsx(i.pre,{style:{"--shiki-dark":"#e6edf3","--shiki-light":"#D4D4D4","--shiki-dark-bg":"#0d1117","--shiki-light-bg":"#1E1E1E"},tabIndex:"0","data-language":"http","data-theme":"github-dark-default dark-plus",children:s.jsxs(i.code,{"data-language":"http","data-theme":"github-dark-default dark-plus",style:{display:"grid"},children:[s.jsxs(i.span,{"data-line":"",children:[s.jsx(i.span,{style:{"--shiki-dark":"#FF7B72","--shiki-light":"#C586C0"},children:"GET"}),s.jsx(i.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:" /api/products?category=electronics&price_min=100"})]}),`
`,s.jsxs(i.span,{"data-line":"",children:[s.jsx(i.span,{style:{"--shiki-dark":"#FF7B72","--shiki-light":"#C586C0"},children:"GET"}),s.jsx(i.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:" /api/products?sort=-price"})]}),`
`,s.jsxs(i.span,{"data-line":"",children:[s.jsx(i.span,{style:{"--shiki-dark":"#FF7B72","--shiki-light":"#C586C0"},children:"GET"}),s.jsx(i.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:" /api/users?page=2&limit=20"})]}),`
`,s.jsxs(i.span,{"data-line":"",children:[s.jsx(i.span,{style:{"--shiki-dark":"#FF7B72","--shiki-light":"#C586C0"},children:"GET"}),s.jsx(i.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:" /api/users?fields=id,name,email"})]})]})})}),`
`,s.jsx(i.h2,{children:"Authentication"}),`
`,s.jsx(i.p,{children:"Common methods:"}),`
`,s.jsx(i.p,{children:s.jsx(i.strong,{children:"Bearer Token (JWT):"})}),`
`,s.jsx(i.figure,{"data-rehype-pretty-code-figure":"",children:s.jsx(i.pre,{style:{"--shiki-dark":"#e6edf3","--shiki-light":"#D4D4D4","--shiki-dark-bg":"#0d1117","--shiki-light-bg":"#1E1E1E"},tabIndex:"0","data-language":"http","data-theme":"github-dark-default dark-plus",children:s.jsx(i.code,{"data-language":"http","data-theme":"github-dark-default dark-plus",style:{display:"grid"},children:s.jsxs(i.span,{"data-line":"",children:[s.jsx(i.span,{style:{"--shiki-dark":"#7EE787","--shiki-light":"#569CD6"},children:"Authorization"}),s.jsx(i.span,{style:{"--shiki-dark":"#FF7B72","--shiki-light":"#569CD6"},children:":"}),s.jsx(i.span,{style:{"--shiki-dark":"#A5D6FF","--shiki-light":"#CE9178"},children:" Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."})]})})})}),`
`,s.jsx(i.p,{children:s.jsx(i.strong,{children:"API Key:"})}),`
`,s.jsx(i.figure,{"data-rehype-pretty-code-figure":"",children:s.jsx(i.pre,{style:{"--shiki-dark":"#e6edf3","--shiki-light":"#D4D4D4","--shiki-dark-bg":"#0d1117","--shiki-light-bg":"#1E1E1E"},tabIndex:"0","data-language":"http","data-theme":"github-dark-default dark-plus",children:s.jsx(i.code,{"data-language":"http","data-theme":"github-dark-default dark-plus",style:{display:"grid"},children:s.jsxs(i.span,{"data-line":"",children:[s.jsx(i.span,{style:{"--shiki-dark":"#7EE787","--shiki-light":"#569CD6"},children:"X-API-Key"}),s.jsx(i.span,{style:{"--shiki-dark":"#FF7B72","--shiki-light":"#569CD6"},children:":"}),s.jsx(i.span,{style:{"--shiki-dark":"#A5D6FF","--shiki-light":"#CE9178"},children:" abc123def456"})]})})})}),`
`,s.jsx(i.p,{children:s.jsx(i.strong,{children:"OAuth 2.0:"})}),`
`,s.jsx(i.figure,{"data-rehype-pretty-code-figure":"",children:s.jsx(i.pre,{style:{"--shiki-dark":"#e6edf3","--shiki-light":"#D4D4D4","--shiki-dark-bg":"#0d1117","--shiki-light-bg":"#1E1E1E"},tabIndex:"0","data-language":"http","data-theme":"github-dark-default dark-plus",children:s.jsx(i.code,{"data-language":"http","data-theme":"github-dark-default dark-plus",style:{display:"grid"},children:s.jsxs(i.span,{"data-line":"",children:[s.jsx(i.span,{style:{"--shiki-dark":"#7EE787","--shiki-light":"#569CD6"},children:"Authorization"}),s.jsx(i.span,{style:{"--shiki-dark":"#FF7B72","--shiki-light":"#569CD6"},children:":"}),s.jsx(i.span,{style:{"--shiki-dark":"#A5D6FF","--shiki-light":"#CE9178"},children:" Bearer <oauth_access_token>"})]})})})}),`
`,s.jsx(i.h2,{children:"Best Practices"}),`
`,s.jsxs(i.ul,{children:[`
`,s.jsxs(i.li,{children:[s.jsxs(i.strong,{children:["Use ",s.jsx(i.a,{href:"/notes/https",children:"HTTPS"})]}),": Always encrypt data in transit"]}),`
`,s.jsxs(i.li,{children:[s.jsx(i.strong,{children:"Validate Input"}),": Sanitize all user input"]}),`
`,s.jsxs(i.li,{children:[s.jsx(i.strong,{children:"Rate Limiting"}),": Prevent abuse"]}),`
`,s.jsxs(i.li,{children:[s.jsx(i.strong,{children:"Caching"}),": Use ETags and Cache-Control headers"]}),`
`,s.jsxs(i.li,{children:[s.jsx(i.strong,{children:"Pagination"}),": Limit response sizes for large collections"]}),`
`,s.jsxs(i.li,{children:[s.jsx(i.strong,{children:"Versioning"}),": Use URL path versioning (",s.jsx(i.code,{children:"/api/v1/users"}),")"]}),`
`,s.jsxs(i.li,{children:[s.jsx(i.strong,{children:"Error Handling"}),": Return consistent error responses with clear messages"]}),`
`,s.jsxs(i.li,{children:[s.jsx(i.strong,{children:"Documentation"}),": Use OpenAPI/Swagger for API documentation"]}),`
`]}),`
`,s.jsx(i.h2,{children:"Comparison"}),`
`,s.jsxs(i.table,{children:[s.jsx(i.thead,{children:s.jsxs(i.tr,{children:[s.jsx(i.th,{children:"Aspect"}),s.jsx(i.th,{children:"REST"}),s.jsx(i.th,{children:"GraphQL"}),s.jsx(i.th,{children:"gRPC"})]})}),s.jsxs(i.tbody,{children:[s.jsxs(i.tr,{children:[s.jsx(i.td,{children:s.jsx(i.strong,{children:"Protocol"})}),s.jsx(i.td,{children:"HTTP"}),s.jsx(i.td,{children:"HTTP"}),s.jsx(i.td,{children:"HTTP/2"})]}),s.jsxs(i.tr,{children:[s.jsx(i.td,{children:s.jsx(i.strong,{children:"Data Format"})}),s.jsx(i.td,{children:"JSON, XML"}),s.jsx(i.td,{children:"JSON"}),s.jsx(i.td,{children:"Protocol Buffers"})]}),s.jsxs(i.tr,{children:[s.jsx(i.td,{children:s.jsx(i.strong,{children:"Endpoints"})}),s.jsx(i.td,{children:"Multiple"}),s.jsx(i.td,{children:"Single"}),s.jsx(i.td,{children:"Multiple"})]}),s.jsxs(i.tr,{children:[s.jsx(i.td,{children:s.jsx(i.strong,{children:"Learning Curve"})}),s.jsx(i.td,{children:"Low"}),s.jsx(i.td,{children:"Medium"}),s.jsx(i.td,{children:"High"})]}),s.jsxs(i.tr,{children:[s.jsx(i.td,{children:s.jsx(i.strong,{children:"Use Case"})}),s.jsx(i.td,{children:"General APIs"}),s.jsx(i.td,{children:"Complex data"}),s.jsx(i.td,{children:"Microservices"})]})]})]})]})}function t(e={}){const{wrapper:i}=e.components||{};return i?s.jsx(i,{...e,children:s.jsx(n,{...e})}):n(e)}export{t as default,d as frontmatter};
