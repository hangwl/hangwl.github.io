import{j as e}from"./index-DmIt1YIB.js";const t=[{id:"introduction",title:"Introduction",level:2},{id:"core-principles",title:"Core Principles",level:2},{id:"http-methods",title:"HTTP Methods",level:2},{id:"status-codes",title:"Status Codes",level:2},{id:"success-2xx",title:"Success (2xx)",level:3},{id:"client-errors-4xx",title:"Client Errors (4xx)",level:3},{id:"server-errors-5xx",title:"Server Errors (5xx)",level:3},{id:"resource-naming",title:"Resource Naming",level:2},{id:"request-examples",title:"Request Examples",level:2},{id:"get---retrieve-resource",title:"GET - Retrieve Resource",level:3},{id:"post---create-resource",title:"POST - Create Resource",level:3},{id:"patch---partial-update",title:"PATCH - Partial Update",level:3},{id:"query-parameters",title:"Query Parameters",level:2},{id:"authentication",title:"Authentication",level:2},{id:"best-practices",title:"Best Practices",level:2},{id:"comparison",title:"Comparison",level:2}],d={title:"REST API",links:["http","https","webhooks","websockets"]};function n(s){const i={a:"a",code:"code",figure:"figure",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(i.h2,{id:"introduction",children:"Introduction"}),`
`,e.jsxs(i.p,{children:["REST (Representational State Transfer) is an ",e.jsx(i.strong,{children:"architectural style for designing networked applications"}),". REST APIs use ",e.jsx(i.a,{href:"/notes/http",children:"HTTP"})," methods to perform CRUD operations on resources identified by URLs."]}),`
`,e.jsxs(i.p,{children:["REST APIs are ",e.jsx(i.strong,{children:"stateless"}),"—each request contains all information needed to process it, and servers don't store client session state between requests."]}),`
`,e.jsx(i.h2,{id:"core-principles",children:"Core Principles"}),`
`,e.jsx(i.p,{children:"REST is built on key architectural constraints:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Client-Server"}),": Separation between UI and data storage"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Stateless"}),": Each request is self-contained"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Cacheable"}),": Responses define caching behavior"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Uniform Interface"}),": Consistent resource identification and manipulation via URIs"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Layered System"}),": Hierarchical architecture with independent layers"]}),`
`]}),`
`,e.jsx(i.h2,{id:"http-methods",children:"HTTP Methods"}),`
`,e.jsxs(i.table,{children:[e.jsx(i.thead,{children:e.jsxs(i.tr,{children:[e.jsx(i.th,{children:"Method"}),e.jsx(i.th,{children:"Purpose"}),e.jsx(i.th,{children:"Idempotent"}),e.jsx(i.th,{children:"Safe"})]})}),e.jsxs(i.tbody,{children:[e.jsxs(i.tr,{children:[e.jsx(i.td,{children:e.jsx(i.strong,{children:"GET"})}),e.jsx(i.td,{children:"Retrieve resource"}),e.jsx(i.td,{children:"Yes"}),e.jsx(i.td,{children:"Yes"})]}),e.jsxs(i.tr,{children:[e.jsx(i.td,{children:e.jsx(i.strong,{children:"POST"})}),e.jsx(i.td,{children:"Create resource"}),e.jsx(i.td,{children:"No"}),e.jsx(i.td,{children:"No"})]}),e.jsxs(i.tr,{children:[e.jsx(i.td,{children:e.jsx(i.strong,{children:"PUT"})}),e.jsx(i.td,{children:"Replace resource"}),e.jsx(i.td,{children:"Yes"}),e.jsx(i.td,{children:"No"})]}),e.jsxs(i.tr,{children:[e.jsx(i.td,{children:e.jsx(i.strong,{children:"PATCH"})}),e.jsx(i.td,{children:"Partial update"}),e.jsx(i.td,{children:"No"}),e.jsx(i.td,{children:"No"})]}),e.jsxs(i.tr,{children:[e.jsx(i.td,{children:e.jsx(i.strong,{children:"DELETE"})}),e.jsx(i.td,{children:"Remove resource"}),e.jsx(i.td,{children:"Yes"}),e.jsx(i.td,{children:"No"})]})]})]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Idempotent"}),": Multiple identical requests have the same effect"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Safe"}),": Operation doesn't modify resources"]}),`
`]}),`
`,e.jsx(i.h2,{id:"status-codes",children:"Status Codes"}),`
`,e.jsx(i.h3,{id:"success-2xx",children:"Success (2xx)"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"200 OK"}),": Request succeeded"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"201 Created"}),": Resource created (POST)"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"204 No Content"}),": Success with no body (DELETE)"]}),`
`]}),`
`,e.jsx(i.h3,{id:"client-errors-4xx",children:"Client Errors (4xx)"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"400 Bad Request"}),": Invalid syntax"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"401 Unauthorized"}),": Authentication required"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"403 Forbidden"}),": Not authorized"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"404 Not Found"}),": Resource doesn't exist"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"429 Too Many Requests"}),": Rate limit exceeded"]}),`
`]}),`
`,e.jsx(i.h3,{id:"server-errors-5xx",children:"Server Errors (5xx)"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"500 Internal Server Error"}),": Generic error"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"503 Service Unavailable"}),": Server unavailable"]}),`
`]}),`
`,e.jsx(i.h2,{id:"resource-naming",children:"Resource Naming"}),`
`,e.jsx(i.p,{children:"Best practices for endpoint design:"}),`
`,e.jsx(i.p,{children:e.jsx(i.strong,{children:"Use nouns, not verbs:"})}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{children:`✅ GET /users/123\r
❌ GET /getUser/123
`})}),`
`,e.jsx(i.p,{children:e.jsx(i.strong,{children:"Use plural nouns:"})}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{children:`✅ GET /users\r
❌ GET /user
`})}),`
`,e.jsx(i.p,{children:e.jsx(i.strong,{children:"Hierarchical structure:"})}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{children:`✅ GET /users/123/orders\r
✅ GET /users/123/orders/456
`})}),`
`,e.jsx(i.p,{children:e.jsx(i.strong,{children:"Use hyphens for readability:"})}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{children:`✅ GET /user-profiles\r
❌ GET /user_profiles
`})}),`
`,e.jsx(i.h2,{id:"request-examples",children:"Request Examples"}),`
`,e.jsx(i.h3,{id:"get---retrieve-resource",children:"GET - Retrieve Resource"}),`
`,e.jsx(i.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(i.pre,{style:{"--shiki-dark":"#e6edf3","--shiki-light":"#D4D4D4","--shiki-dark-bg":"#0d1117","--shiki-light-bg":"#1E1E1E"},tabIndex:"0","data-language":"http","data-theme":"github-dark-default dark-plus",children:e.jsxs(i.code,{"data-language":"http","data-theme":"github-dark-default dark-plus",style:{display:"grid"},children:[e.jsxs(i.span,{"data-line":"",children:[e.jsx(i.span,{style:{"--shiki-dark":"#FF7B72","--shiki-light":"#C586C0"},children:"GET"}),e.jsx(i.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:" /api/users/123"})]}),`
`,e.jsxs(i.span,{"data-line":"",children:[e.jsx(i.span,{style:{"--shiki-dark":"#7EE787","--shiki-light":"#569CD6"},children:"Authorization"}),e.jsx(i.span,{style:{"--shiki-dark":"#FF7B72","--shiki-light":"#569CD6"},children:":"}),e.jsx(i.span,{style:{"--shiki-dark":"#A5D6FF","--shiki-light":"#CE9178"},children:" Bearer <token>"})]})]})})}),`
`,e.jsx(i.p,{children:"Response:"}),`
`,e.jsx(i.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(i.pre,{style:{"--shiki-dark":"#e6edf3","--shiki-light":"#D4D4D4","--shiki-dark-bg":"#0d1117","--shiki-light-bg":"#1E1E1E"},tabIndex:"0","data-language":"json","data-theme":"github-dark-default dark-plus",children:e.jsxs(i.code,{"data-language":"json","data-theme":"github-dark-default dark-plus",style:{display:"grid"},children:[e.jsx(i.span,{"data-line":"",children:e.jsx(i.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:"{"})}),`
`,e.jsxs(i.span,{"data-line":"",children:[e.jsx(i.span,{style:{"--shiki-dark":"#7EE787","--shiki-light":"#9CDCFE"},children:'  "id"'}),e.jsx(i.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:": "}),e.jsx(i.span,{style:{"--shiki-dark":"#79C0FF","--shiki-light":"#B5CEA8"},children:"123"}),e.jsx(i.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:","})]}),`
`,e.jsxs(i.span,{"data-line":"",children:[e.jsx(i.span,{style:{"--shiki-dark":"#7EE787","--shiki-light":"#9CDCFE"},children:'  "name"'}),e.jsx(i.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:": "}),e.jsx(i.span,{style:{"--shiki-dark":"#A5D6FF","--shiki-light":"#CE9178"},children:'"John Doe"'}),e.jsx(i.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:","})]}),`
`,e.jsxs(i.span,{"data-line":"",children:[e.jsx(i.span,{style:{"--shiki-dark":"#7EE787","--shiki-light":"#9CDCFE"},children:'  "email"'}),e.jsx(i.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:": "}),e.jsx(i.span,{style:{"--shiki-dark":"#A5D6FF","--shiki-light":"#CE9178"},children:'"john@example.com"'})]}),`
`,e.jsx(i.span,{"data-line":"",children:e.jsx(i.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:"}"})})]})})}),`
`,e.jsx(i.h3,{id:"post---create-resource",children:"POST - Create Resource"}),`
`,e.jsx(i.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(i.pre,{style:{"--shiki-dark":"#e6edf3","--shiki-light":"#D4D4D4","--shiki-dark-bg":"#0d1117","--shiki-light-bg":"#1E1E1E"},tabIndex:"0","data-language":"http","data-theme":"github-dark-default dark-plus",children:e.jsxs(i.code,{"data-language":"http","data-theme":"github-dark-default dark-plus",style:{display:"grid"},children:[e.jsxs(i.span,{"data-line":"",children:[e.jsx(i.span,{style:{"--shiki-dark":"#FF7B72","--shiki-light":"#C586C0"},children:"POST"}),e.jsx(i.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:" /api/users"})]}),`
`,e.jsxs(i.span,{"data-line":"",children:[e.jsx(i.span,{style:{"--shiki-dark":"#7EE787","--shiki-light":"#569CD6"},children:"Content-Type"}),e.jsx(i.span,{style:{"--shiki-dark":"#FF7B72","--shiki-light":"#569CD6"},children:":"}),e.jsx(i.span,{style:{"--shiki-dark":"#A5D6FF","--shiki-light":"#CE9178"},children:" application/json"})]}),`
`,e.jsx(i.span,{"data-line":"",children:" "}),`
`,e.jsx(i.span,{"data-line":"",children:e.jsx(i.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:"{"})}),`
`,e.jsxs(i.span,{"data-line":"",children:[e.jsx(i.span,{style:{"--shiki-dark":"#7EE787","--shiki-light":"#9CDCFE"},children:'  "name"'}),e.jsx(i.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:": "}),e.jsx(i.span,{style:{"--shiki-dark":"#A5D6FF","--shiki-light":"#CE9178"},children:'"Jane Smith"'}),e.jsx(i.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:","})]}),`
`,e.jsxs(i.span,{"data-line":"",children:[e.jsx(i.span,{style:{"--shiki-dark":"#7EE787","--shiki-light":"#9CDCFE"},children:'  "email"'}),e.jsx(i.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:": "}),e.jsx(i.span,{style:{"--shiki-dark":"#A5D6FF","--shiki-light":"#CE9178"},children:'"jane@example.com"'})]}),`
`,e.jsx(i.span,{"data-line":"",children:e.jsx(i.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:"}"})})]})})}),`
`,e.jsx(i.h3,{id:"patch---partial-update",children:"PATCH - Partial Update"}),`
`,e.jsx(i.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(i.pre,{style:{"--shiki-dark":"#e6edf3","--shiki-light":"#D4D4D4","--shiki-dark-bg":"#0d1117","--shiki-light-bg":"#1E1E1E"},tabIndex:"0","data-language":"http","data-theme":"github-dark-default dark-plus",children:e.jsxs(i.code,{"data-language":"http","data-theme":"github-dark-default dark-plus",style:{display:"grid"},children:[e.jsxs(i.span,{"data-line":"",children:[e.jsx(i.span,{style:{"--shiki-dark":"#FF7B72","--shiki-light":"#C586C0"},children:"PATCH"}),e.jsx(i.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:" /api/users/123"})]}),`
`,e.jsxs(i.span,{"data-line":"",children:[e.jsx(i.span,{style:{"--shiki-dark":"#7EE787","--shiki-light":"#569CD6"},children:"Content-Type"}),e.jsx(i.span,{style:{"--shiki-dark":"#FF7B72","--shiki-light":"#569CD6"},children:":"}),e.jsx(i.span,{style:{"--shiki-dark":"#A5D6FF","--shiki-light":"#CE9178"},children:" application/json"})]}),`
`,e.jsx(i.span,{"data-line":"",children:" "}),`
`,e.jsx(i.span,{"data-line":"",children:e.jsx(i.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:"{"})}),`
`,e.jsxs(i.span,{"data-line":"",children:[e.jsx(i.span,{style:{"--shiki-dark":"#7EE787","--shiki-light":"#9CDCFE"},children:'  "email"'}),e.jsx(i.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:": "}),e.jsx(i.span,{style:{"--shiki-dark":"#A5D6FF","--shiki-light":"#CE9178"},children:'"newemail@example.com"'})]}),`
`,e.jsx(i.span,{"data-line":"",children:e.jsx(i.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:"}"})})]})})}),`
`,e.jsx(i.h2,{id:"query-parameters",children:"Query Parameters"}),`
`,e.jsx(i.p,{children:"Common patterns for filtering, sorting, and pagination:"}),`
`,e.jsx(i.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(i.pre,{style:{"--shiki-dark":"#e6edf3","--shiki-light":"#D4D4D4","--shiki-dark-bg":"#0d1117","--shiki-light-bg":"#1E1E1E"},tabIndex:"0","data-language":"http","data-theme":"github-dark-default dark-plus",children:e.jsxs(i.code,{"data-language":"http","data-theme":"github-dark-default dark-plus",style:{display:"grid"},children:[e.jsxs(i.span,{"data-line":"",children:[e.jsx(i.span,{style:{"--shiki-dark":"#FF7B72","--shiki-light":"#C586C0"},children:"GET"}),e.jsx(i.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:" /api/products?category=electronics&price_min=100"})]}),`
`,e.jsxs(i.span,{"data-line":"",children:[e.jsx(i.span,{style:{"--shiki-dark":"#FF7B72","--shiki-light":"#C586C0"},children:"GET"}),e.jsx(i.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:" /api/products?sort=-price"})]}),`
`,e.jsxs(i.span,{"data-line":"",children:[e.jsx(i.span,{style:{"--shiki-dark":"#FF7B72","--shiki-light":"#C586C0"},children:"GET"}),e.jsx(i.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:" /api/users?page=2&limit=20"})]}),`
`,e.jsxs(i.span,{"data-line":"",children:[e.jsx(i.span,{style:{"--shiki-dark":"#FF7B72","--shiki-light":"#C586C0"},children:"GET"}),e.jsx(i.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:" /api/users?fields=id,name,email"})]})]})})}),`
`,e.jsx(i.h2,{id:"authentication",children:"Authentication"}),`
`,e.jsx(i.p,{children:"Common methods:"}),`
`,e.jsx(i.p,{children:e.jsx(i.strong,{children:"Bearer Token (JWT):"})}),`
`,e.jsx(i.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(i.pre,{style:{"--shiki-dark":"#e6edf3","--shiki-light":"#D4D4D4","--shiki-dark-bg":"#0d1117","--shiki-light-bg":"#1E1E1E"},tabIndex:"0","data-language":"http","data-theme":"github-dark-default dark-plus",children:e.jsx(i.code,{"data-language":"http","data-theme":"github-dark-default dark-plus",style:{display:"grid"},children:e.jsxs(i.span,{"data-line":"",children:[e.jsx(i.span,{style:{"--shiki-dark":"#7EE787","--shiki-light":"#569CD6"},children:"Authorization"}),e.jsx(i.span,{style:{"--shiki-dark":"#FF7B72","--shiki-light":"#569CD6"},children:":"}),e.jsx(i.span,{style:{"--shiki-dark":"#A5D6FF","--shiki-light":"#CE9178"},children:" Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."})]})})})}),`
`,e.jsx(i.p,{children:e.jsx(i.strong,{children:"API Key:"})}),`
`,e.jsx(i.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(i.pre,{style:{"--shiki-dark":"#e6edf3","--shiki-light":"#D4D4D4","--shiki-dark-bg":"#0d1117","--shiki-light-bg":"#1E1E1E"},tabIndex:"0","data-language":"http","data-theme":"github-dark-default dark-plus",children:e.jsx(i.code,{"data-language":"http","data-theme":"github-dark-default dark-plus",style:{display:"grid"},children:e.jsxs(i.span,{"data-line":"",children:[e.jsx(i.span,{style:{"--shiki-dark":"#7EE787","--shiki-light":"#569CD6"},children:"X-API-Key"}),e.jsx(i.span,{style:{"--shiki-dark":"#FF7B72","--shiki-light":"#569CD6"},children:":"}),e.jsx(i.span,{style:{"--shiki-dark":"#A5D6FF","--shiki-light":"#CE9178"},children:" abc123def456"})]})})})}),`
`,e.jsx(i.p,{children:e.jsx(i.strong,{children:"OAuth 2.0:"})}),`
`,e.jsx(i.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(i.pre,{style:{"--shiki-dark":"#e6edf3","--shiki-light":"#D4D4D4","--shiki-dark-bg":"#0d1117","--shiki-light-bg":"#1E1E1E"},tabIndex:"0","data-language":"http","data-theme":"github-dark-default dark-plus",children:e.jsx(i.code,{"data-language":"http","data-theme":"github-dark-default dark-plus",style:{display:"grid"},children:e.jsxs(i.span,{"data-line":"",children:[e.jsx(i.span,{style:{"--shiki-dark":"#7EE787","--shiki-light":"#569CD6"},children:"Authorization"}),e.jsx(i.span,{style:{"--shiki-dark":"#FF7B72","--shiki-light":"#569CD6"},children:":"}),e.jsx(i.span,{style:{"--shiki-dark":"#A5D6FF","--shiki-light":"#CE9178"},children:" Bearer <oauth_access_token>"})]})})})}),`
`,e.jsx(i.h2,{id:"best-practices",children:"Best Practices"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsxs(i.strong,{children:["Use ",e.jsx(i.a,{href:"/notes/https",children:"HTTPS"})]}),": Always encrypt data in transit"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Validate Input"}),": Sanitize all user input"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Rate Limiting"}),": Prevent abuse"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Caching"}),": Use ETags and Cache-Control headers"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Pagination"}),": Limit response sizes for large collections"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Versioning"}),": Use URL path versioning (",e.jsx(i.code,{children:"/api/v1/users"}),")"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Error Handling"}),": Return consistent error responses with clear messages"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Documentation"}),": Use OpenAPI/Swagger for API documentation"]}),`
`]}),`
`,e.jsx(i.h2,{id:"comparison",children:"Comparison"}),`
`,e.jsxs(i.table,{children:[e.jsx(i.thead,{children:e.jsxs(i.tr,{children:[e.jsx(i.th,{children:"Aspect"}),e.jsx(i.th,{children:"REST"}),e.jsx(i.th,{children:"GraphQL"}),e.jsx(i.th,{children:"gRPC"})]})}),e.jsxs(i.tbody,{children:[e.jsxs(i.tr,{children:[e.jsx(i.td,{children:e.jsx(i.strong,{children:"Protocol"})}),e.jsx(i.td,{children:"HTTP"}),e.jsx(i.td,{children:"HTTP"}),e.jsx(i.td,{children:"HTTP/2"})]}),e.jsxs(i.tr,{children:[e.jsx(i.td,{children:e.jsx(i.strong,{children:"Data Format"})}),e.jsx(i.td,{children:"JSON, XML"}),e.jsx(i.td,{children:"JSON"}),e.jsx(i.td,{children:"Protocol Buffers"})]}),e.jsxs(i.tr,{children:[e.jsx(i.td,{children:e.jsx(i.strong,{children:"Endpoints"})}),e.jsx(i.td,{children:"Multiple"}),e.jsx(i.td,{children:"Single"}),e.jsx(i.td,{children:"Multiple"})]}),e.jsxs(i.tr,{children:[e.jsx(i.td,{children:e.jsx(i.strong,{children:"Learning Curve"})}),e.jsx(i.td,{children:"Low"}),e.jsx(i.td,{children:"Medium"}),e.jsx(i.td,{children:"High"})]}),e.jsxs(i.tr,{children:[e.jsx(i.td,{children:e.jsx(i.strong,{children:"Use Case"})}),e.jsx(i.td,{children:"General APIs"}),e.jsx(i.td,{children:"Complex data"}),e.jsx(i.td,{children:"Microservices"})]})]})]})]})}function l(s={}){const{wrapper:i}=s.components||{};return i?e.jsx(i,{...s,children:e.jsx(n,{...s})}):n(s)}export{l as default,d as frontmatter,t as toc};
