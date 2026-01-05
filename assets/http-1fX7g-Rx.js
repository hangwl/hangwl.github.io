import{j as s}from"./index-BY1L9Kpq.js";const t=[{id:"introduction",title:"Introduction",level:2},{id:"how-http-works",title:"How HTTP Works",level:2},{id:"http-request",title:"HTTP Request",level:2},{id:"http-response",title:"HTTP Response",level:2},{id:"http-methods",title:"HTTP Methods",level:2},{id:"status-codes",title:"Status Codes",level:2},{id:"2xx-success",title:"2xx Success",level:3},{id:"3xx-redirection",title:"3xx Redirection",level:3},{id:"4xx-client-errors",title:"4xx Client Errors",level:3},{id:"5xx-server-errors",title:"5xx Server Errors",level:3},{id:"http-versions",title:"HTTP Versions",level:2},{id:"caching",title:"Caching",level:2},{id:"cookies",title:"Cookies",level:2},{id:"limitations",title:"Limitations",level:2}],l={title:"HTTP",links:["https","http-vs-https","rest-api"]};function n(i){const e={a:"a",code:"code",figure:"figure",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...i.components};return s.jsxs(s.Fragment,{children:[s.jsx(e.h2,{id:"introduction",children:"Introduction"}),`
`,s.jsxs(e.p,{children:[s.jsx(e.strong,{children:"HTTP (Hypertext Transfer Protocol)"})," is the foundation of data communication on the web. It's a stateless, request-response protocol where clients (browsers) request resources and servers respond with data."]}),`
`,s.jsxs(e.p,{children:["All HTTP data is transmitted in ",s.jsx(e.strong,{children:"plaintext"}),", making it vulnerable to interception. For secure communication, use ",s.jsx(e.a,{href:"/notes/https",children:"HTTPS"}),"."]}),`
`,s.jsx(e.h2,{id:"how-http-works",children:"How HTTP Works"}),`
`,s.jsxs(e.ol,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Client Request"}),": Browser sends HTTP request to server"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Server Processing"}),": Server processes the request"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Server Response"}),": Server sends back HTTP response"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Connection"}),": Closes (HTTP/1.0) or stays open for reuse (HTTP/1.1+)"]}),`
`]}),`
`,s.jsx(e.h2,{id:"http-request",children:"HTTP Request"}),`
`,s.jsx(e.figure,{"data-rehype-pretty-code-figure":"",children:s.jsx(e.pre,{style:{"--shiki-dark":"#e6edf3","--shiki-light":"#D4D4D4","--shiki-dark-bg":"#0d1117","--shiki-light-bg":"#1E1E1E"},tabIndex:"0","data-language":"http","data-theme":"github-dark-default dark-plus",children:s.jsxs(e.code,{"data-language":"http","data-theme":"github-dark-default dark-plus",style:{display:"grid"},children:[s.jsxs(e.span,{"data-line":"",children:[s.jsx(e.span,{style:{"--shiki-dark":"#FF7B72","--shiki-light":"#C586C0"},children:"GET"}),s.jsx(e.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:" /api/users "}),s.jsx(e.span,{style:{"--shiki-dark":"#FF7B72","--shiki-light":"#569CD6"},children:"HTTP"}),s.jsx(e.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:"/"}),s.jsx(e.span,{style:{"--shiki-dark":"#79C0FF","--shiki-light":"#B5CEA8"},children:"1.1"})]}),`
`,s.jsxs(e.span,{"data-line":"",children:[s.jsx(e.span,{style:{"--shiki-dark":"#7EE787","--shiki-light":"#569CD6"},children:"Host"}),s.jsx(e.span,{style:{"--shiki-dark":"#FF7B72","--shiki-light":"#569CD6"},children:":"}),s.jsx(e.span,{style:{"--shiki-dark":"#A5D6FF","--shiki-light":"#CE9178"},children:" example.com"})]}),`
`,s.jsxs(e.span,{"data-line":"",children:[s.jsx(e.span,{style:{"--shiki-dark":"#7EE787","--shiki-light":"#569CD6"},children:"User-Agent"}),s.jsx(e.span,{style:{"--shiki-dark":"#FF7B72","--shiki-light":"#569CD6"},children:":"}),s.jsx(e.span,{style:{"--shiki-dark":"#A5D6FF","--shiki-light":"#CE9178"},children:" Mozilla/5.0"})]}),`
`,s.jsxs(e.span,{"data-line":"",children:[s.jsx(e.span,{style:{"--shiki-dark":"#7EE787","--shiki-light":"#569CD6"},children:"Accept"}),s.jsx(e.span,{style:{"--shiki-dark":"#FF7B72","--shiki-light":"#569CD6"},children:":"}),s.jsx(e.span,{style:{"--shiki-dark":"#A5D6FF","--shiki-light":"#CE9178"},children:" application/json"})]})]})})}),`
`,s.jsx(e.p,{children:s.jsx(e.strong,{children:"Components:"})}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Method"}),": GET, POST, PUT, PATCH, DELETE"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Path"}),": Resource location"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Headers"}),": Metadata (Host, User-Agent, Accept, etc.)"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Body"}),": Data payload (for POST/PUT/PATCH)"]}),`
`]}),`
`,s.jsx(e.h2,{id:"http-response",children:"HTTP Response"}),`
`,s.jsx(e.figure,{"data-rehype-pretty-code-figure":"",children:s.jsx(e.pre,{style:{"--shiki-dark":"#e6edf3","--shiki-light":"#D4D4D4","--shiki-dark-bg":"#0d1117","--shiki-light-bg":"#1E1E1E"},tabIndex:"0","data-language":"http","data-theme":"github-dark-default dark-plus",children:s.jsxs(e.code,{"data-language":"http","data-theme":"github-dark-default dark-plus",style:{display:"grid"},children:[s.jsxs(e.span,{"data-line":"",children:[s.jsx(e.span,{style:{"--shiki-dark":"#FF7B72","--shiki-light":"#569CD6"},children:"HTTP"}),s.jsx(e.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:"/"}),s.jsx(e.span,{style:{"--shiki-dark":"#79C0FF","--shiki-light":"#B5CEA8"},children:"1.1"}),s.jsx(e.span,{style:{"--shiki-dark":"#79C0FF","--shiki-light":"#B5CEA8"},children:" 200"}),s.jsx(e.span,{style:{"--shiki-dark":"#A5D6FF","--shiki-light":"#CE9178"},children:" OK"})]}),`
`,s.jsxs(e.span,{"data-line":"",children:[s.jsx(e.span,{style:{"--shiki-dark":"#7EE787","--shiki-light":"#569CD6"},children:"Content-Type"}),s.jsx(e.span,{style:{"--shiki-dark":"#FF7B72","--shiki-light":"#569CD6"},children:":"}),s.jsx(e.span,{style:{"--shiki-dark":"#A5D6FF","--shiki-light":"#CE9178"},children:" application/json"})]}),`
`,s.jsxs(e.span,{"data-line":"",children:[s.jsx(e.span,{style:{"--shiki-dark":"#7EE787","--shiki-light":"#569CD6"},children:"Content-Length"}),s.jsx(e.span,{style:{"--shiki-dark":"#FF7B72","--shiki-light":"#569CD6"},children:":"}),s.jsx(e.span,{style:{"--shiki-dark":"#A5D6FF","--shiki-light":"#CE9178"},children:" 1234"})]}),`
`,s.jsx(e.span,{"data-line":"",children:" "}),`
`,s.jsxs(e.span,{"data-line":"",children:[s.jsx(e.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:"{"}),s.jsx(e.span,{style:{"--shiki-dark":"#7EE787","--shiki-light":"#9CDCFE"},children:'"id"'}),s.jsx(e.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:": "}),s.jsx(e.span,{style:{"--shiki-dark":"#79C0FF","--shiki-light":"#B5CEA8"},children:"1"}),s.jsx(e.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:", "}),s.jsx(e.span,{style:{"--shiki-dark":"#7EE787","--shiki-light":"#9CDCFE"},children:'"name"'}),s.jsx(e.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:": "}),s.jsx(e.span,{style:{"--shiki-dark":"#A5D6FF","--shiki-light":"#CE9178"},children:'"John"'}),s.jsx(e.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:"}"})]})]})})}),`
`,s.jsx(e.p,{children:s.jsx(e.strong,{children:"Components:"})}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Status Code"}),": Result indicator (200, 404, 500, etc.)"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Headers"}),": Metadata (Content-Type, Cache-Control, etc.)"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Body"}),": Response data"]}),`
`]}),`
`,s.jsx(e.h2,{id:"http-methods",children:"HTTP Methods"}),`
`,s.jsxs(e.table,{children:[s.jsx(e.thead,{children:s.jsxs(e.tr,{children:[s.jsx(e.th,{children:"Method"}),s.jsx(e.th,{children:"Purpose"}),s.jsx(e.th,{children:"Idempotent"}),s.jsx(e.th,{children:"Safe"})]})}),s.jsxs(e.tbody,{children:[s.jsxs(e.tr,{children:[s.jsx(e.td,{children:s.jsx(e.strong,{children:"GET"})}),s.jsx(e.td,{children:"Retrieve resource"}),s.jsx(e.td,{children:"Yes"}),s.jsx(e.td,{children:"Yes"})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:s.jsx(e.strong,{children:"POST"})}),s.jsx(e.td,{children:"Create resource"}),s.jsx(e.td,{children:"No"}),s.jsx(e.td,{children:"No"})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:s.jsx(e.strong,{children:"PUT"})}),s.jsx(e.td,{children:"Update/replace resource"}),s.jsx(e.td,{children:"Yes"}),s.jsx(e.td,{children:"No"})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:s.jsx(e.strong,{children:"PATCH"})}),s.jsx(e.td,{children:"Partial update"}),s.jsx(e.td,{children:"No"}),s.jsx(e.td,{children:"No"})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:s.jsx(e.strong,{children:"DELETE"})}),s.jsx(e.td,{children:"Remove resource"}),s.jsx(e.td,{children:"Yes"}),s.jsx(e.td,{children:"No"})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:s.jsx(e.strong,{children:"HEAD"})}),s.jsx(e.td,{children:"Get headers only"}),s.jsx(e.td,{children:"Yes"}),s.jsx(e.td,{children:"Yes"})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:s.jsx(e.strong,{children:"OPTIONS"})}),s.jsx(e.td,{children:"Get allowed methods"}),s.jsx(e.td,{children:"Yes"}),s.jsx(e.td,{children:"Yes"})]})]})]}),`
`,s.jsx(e.h2,{id:"status-codes",children:"Status Codes"}),`
`,s.jsx(e.h3,{id:"2xx-success",children:"2xx Success"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"200 OK"}),": Request succeeded"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"201 Created"}),": Resource created"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"204 No Content"}),": Success with no response body"]}),`
`]}),`
`,s.jsx(e.h3,{id:"3xx-redirection",children:"3xx Redirection"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"301 Moved Permanently"}),": Resource permanently moved"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"302 Found"}),": Temporary redirect"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"304 Not Modified"}),": Cached version valid"]}),`
`]}),`
`,s.jsx(e.h3,{id:"4xx-client-errors",children:"4xx Client Errors"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"400 Bad Request"}),": Invalid syntax"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"401 Unauthorized"}),": Authentication required"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"403 Forbidden"}),": Not authorized"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"404 Not Found"}),": Resource doesn't exist"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"429 Too Many Requests"}),": Rate limit exceeded"]}),`
`]}),`
`,s.jsx(e.h3,{id:"5xx-server-errors",children:"5xx Server Errors"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"500 Internal Server Error"}),": Generic server error"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"502 Bad Gateway"}),": Invalid upstream response"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"503 Service Unavailable"}),": Server unavailable"]}),`
`]}),`
`,s.jsx(e.h2,{id:"http-versions",children:"HTTP Versions"}),`
`,s.jsxs(e.table,{children:[s.jsx(e.thead,{children:s.jsxs(e.tr,{children:[s.jsx(e.th,{children:"Version"}),s.jsx(e.th,{children:"Year"}),s.jsx(e.th,{children:"Key Features"})]})}),s.jsxs(e.tbody,{children:[s.jsxs(e.tr,{children:[s.jsx(e.td,{children:s.jsx(e.strong,{children:"HTTP/1.0"})}),s.jsx(e.td,{children:"1996"}),s.jsx(e.td,{children:"Basic headers, new connection per request"})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:s.jsx(e.strong,{children:"HTTP/1.1"})}),s.jsx(e.td,{children:"1997"}),s.jsx(e.td,{children:"Persistent connections, pipelining, chunked transfer"})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:s.jsx(e.strong,{children:"HTTP/2"})}),s.jsx(e.td,{children:"2015"}),s.jsx(e.td,{children:"Binary protocol, multiplexing, header compression, server push"})]}),s.jsxs(e.tr,{children:[s.jsx(e.td,{children:s.jsx(e.strong,{children:"HTTP/3"})}),s.jsx(e.td,{children:"2022"}),s.jsx(e.td,{children:"QUIC (UDP-based), faster connections, better loss recovery"})]})]})]}),`
`,s.jsx(e.h2,{id:"caching",children:"Caching"}),`
`,s.jsx(e.p,{children:"Control caching with headers:"}),`
`,s.jsx(e.figure,{"data-rehype-pretty-code-figure":"",children:s.jsx(e.pre,{style:{"--shiki-dark":"#e6edf3","--shiki-light":"#D4D4D4","--shiki-dark-bg":"#0d1117","--shiki-light-bg":"#1E1E1E"},tabIndex:"0","data-language":"http","data-theme":"github-dark-default dark-plus",children:s.jsxs(e.code,{"data-language":"http","data-theme":"github-dark-default dark-plus",style:{display:"grid"},children:[s.jsxs(e.span,{"data-line":"",children:[s.jsx(e.span,{style:{"--shiki-dark":"#7EE787","--shiki-light":"#569CD6"},children:"Cache-Control"}),s.jsx(e.span,{style:{"--shiki-dark":"#FF7B72","--shiki-light":"#569CD6"},children:":"}),s.jsx(e.span,{style:{"--shiki-dark":"#A5D6FF","--shiki-light":"#CE9178"},children:" max-age=3600, public"})]}),`
`,s.jsxs(e.span,{"data-line":"",children:[s.jsx(e.span,{style:{"--shiki-dark":"#7EE787","--shiki-light":"#569CD6"},children:"Cache-Control"}),s.jsx(e.span,{style:{"--shiki-dark":"#FF7B72","--shiki-light":"#569CD6"},children:":"}),s.jsx(e.span,{style:{"--shiki-dark":"#A5D6FF","--shiki-light":"#CE9178"},children:" no-cache, no-store, must-revalidate"})]}),`
`,s.jsxs(e.span,{"data-line":"",children:[s.jsx(e.span,{style:{"--shiki-dark":"#7EE787","--shiki-light":"#569CD6"},children:"ETag"}),s.jsx(e.span,{style:{"--shiki-dark":"#FF7B72","--shiki-light":"#569CD6"},children:":"}),s.jsx(e.span,{style:{"--shiki-dark":"#A5D6FF","--shiki-light":"#CE9178"},children:' "abc123"'})]})]})})}),`
`,s.jsx(e.p,{children:s.jsx(e.strong,{children:"Directives:"})}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"max-age"}),": Cache duration (seconds)"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"public/private"}),": Cacheable by any cache / browser only"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"no-cache"}),": Revalidate before using"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"no-store"}),": Don't cache at all"]}),`
`]}),`
`,s.jsx(e.h2,{id:"cookies",children:"Cookies"}),`
`,s.jsx(e.p,{children:"Store state information:"}),`
`,s.jsx(e.figure,{"data-rehype-pretty-code-figure":"",children:s.jsx(e.pre,{style:{"--shiki-dark":"#e6edf3","--shiki-light":"#D4D4D4","--shiki-dark-bg":"#0d1117","--shiki-light-bg":"#1E1E1E"},tabIndex:"0","data-language":"http","data-theme":"github-dark-default dark-plus",children:s.jsx(e.code,{"data-language":"http","data-theme":"github-dark-default dark-plus",style:{display:"grid"},children:s.jsxs(e.span,{"data-line":"",children:[s.jsx(e.span,{style:{"--shiki-dark":"#7EE787","--shiki-light":"#569CD6"},children:"Set-Cookie"}),s.jsx(e.span,{style:{"--shiki-dark":"#FF7B72","--shiki-light":"#569CD6"},children:":"}),s.jsx(e.span,{style:{"--shiki-dark":"#A5D6FF","--shiki-light":"#CE9178"},children:" sessionid=abc123; Path=/; HttpOnly; Secure; SameSite=Strict"})]})})})}),`
`,s.jsx(e.p,{children:s.jsx(e.strong,{children:"Attributes:"})}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Path"}),": URL path where cookie is valid"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Domain"}),": Domain where cookie is valid"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Expires/Max-Age"}),": Expiration"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Secure"}),": HTTPS only"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"HttpOnly"}),": Not accessible via JavaScript"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"SameSite"}),": CSRF protection"]}),`
`]}),`
`,s.jsx(e.h2,{id:"limitations",children:"Limitations"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"No encryption"}),": Data transmitted in plaintext"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"No authentication"}),": Can't verify server identity"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"No integrity"}),": Data can be modified in transit"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Security risks"}),": Vulnerable to MITM, packet sniffing, session hijacking"]}),`
`]}),`
`,s.jsxs(e.p,{children:["For secure communication, always use ",s.jsx(e.a,{href:"/notes/https",children:"HTTPS"})," in production."]})]})}function d(i={}){const{wrapper:e}=i.components||{};return e?s.jsx(e,{...i,children:s.jsx(n,{...i})}):n(i)}export{d as default,l as frontmatter,t as toc};
