import{j as e}from"./index-CtAT4ExP.js";const c={title:"SSL/TLS",links:["https","http-vs-https"]};function r(s){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{children:"Introduction"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"SSL (Secure Sockets Layer)"})," and ",e.jsx(n.strong,{children:"TLS (Transport Layer Security)"}),' are cryptographic protocols that provide secure communication over networks. TLS is the successor to SSL, though the term "SSL" is still commonly used to refer to both.']}),`
`,e.jsxs(n.p,{children:["These protocols enable ",e.jsx(n.a,{href:"/notes/https",children:"HTTPS"})," by encrypting data transmitted between clients and servers."]}),`
`,e.jsx(n.h2,{children:"SSL/TLS Handshake"}),`
`,e.jsx(n.p,{children:"The handshake establishes a secure connection before any data is transmitted:"}),`
`,e.jsx(n.h3,{children:"Handshake Steps"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"1. Client Hello"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Client sends supported TLS versions and cipher suites"}),`
`,e.jsx(n.li,{children:"Generates random number (Client Random)"}),`
`,e.jsx(n.li,{children:"May include Server Name Indication (SNI)"}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"2. Server Hello"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Server selects TLS version and cipher suite"}),`
`,e.jsx(n.li,{children:"Sends SSL/TLS certificate with public key"}),`
`,e.jsx(n.li,{children:"Sends random number (Server Random)"}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"3. Certificate Verification"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Client verifies certificate signed by trusted CA"}),`
`,e.jsx(n.li,{children:"Checks certificate hasn't expired"}),`
`,e.jsx(n.li,{children:"Confirms domain matches certificate"}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"4. Key Exchange"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Client generates pre-master secret"}),`
`,e.jsx(n.li,{children:"Encrypts with server's public key (RSA) or uses Diffie-Hellman"}),`
`,e.jsx(n.li,{children:"Sends to server"}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"5. Session Keys Generation"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Both derive session keys from pre-master secret and random numbers"}),`
`,e.jsx(n.li,{children:"These symmetric keys encrypt all subsequent communication"}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"6. Handshake Complete"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:'Both send encrypted "Finished" messages'}),`
`,e.jsx(n.li,{children:"Secure communication begins"}),`
`]}),`
`,e.jsx(n.h3,{children:"TLS Versions"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Version"}),e.jsx(n.th,{children:"Year"}),e.jsx(n.th,{children:"Status"}),e.jsx(n.th,{children:"Notes"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"SSL 2.0"})}),e.jsx(n.td,{children:"1995"}),e.jsx(n.td,{children:"Deprecated"}),e.jsx(n.td,{children:"Serious security flaws"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"SSL 3.0"})}),e.jsx(n.td,{children:"1996"}),e.jsx(n.td,{children:"Deprecated"}),e.jsx(n.td,{children:"Vulnerable to POODLE attack"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"TLS 1.0"})}),e.jsx(n.td,{children:"1999"}),e.jsx(n.td,{children:"Deprecated"}),e.jsx(n.td,{children:"Based on SSL 3.0"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"TLS 1.1"})}),e.jsx(n.td,{children:"2006"}),e.jsx(n.td,{children:"Deprecated"}),e.jsx(n.td,{children:"Improved security"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"TLS 1.2"})}),e.jsx(n.td,{children:"2008"}),e.jsx(n.td,{children:"Current"}),e.jsx(n.td,{children:"Widely supported"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"TLS 1.3"})}),e.jsx(n.td,{children:"2018"}),e.jsx(n.td,{children:"Current"}),e.jsx(n.td,{children:"Faster, more secure"})]})]})]}),`
`,e.jsx(n.h3,{children:"TLS 1.3 Improvements"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"1-RTT handshake"}),": Reduced from 2 round trips"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"0-RTT resumption"}),": Instant reconnection for returning clients"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Removed weak algorithms"}),": Only strong cipher suites"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Forward secrecy"}),": Required by default"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Encrypted handshake"}),": More metadata protected"]}),`
`]}),`
`,e.jsx(n.h2,{children:"Cipher Suites"}),`
`,e.jsx(n.p,{children:"A cipher suite defines the algorithms used for secure communication:"}),`
`,e.jsx(n.h3,{children:"Cipher Suite Format"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256
`})}),`
`,e.jsx(n.p,{children:"Components:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"TLS"}),": Protocol"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"ECDHE"}),": Key exchange (Elliptic Curve Diffie-Hellman Ephemeral)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"RSA"}),": Authentication"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"AES_128_GCM"}),": Symmetric encryption"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"SHA256"}),": Message authentication"]}),`
`]}),`
`,e.jsx(n.h3,{children:"Recommended Cipher Suites"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"TLS 1.3:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"TLS_AES_128_GCM_SHA256"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"TLS_AES_256_GCM_SHA384"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"TLS_CHACHA20_POLY1305_SHA256"})}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"TLS 1.2:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305_SHA256"})}),`
`]}),`
`,e.jsx(n.h3,{children:"Forward Secrecy"}),`
`,e.jsx(n.p,{children:"Ephemeral key exchange (ECDHE, DHE) ensures:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Session keys not derived from server's private key"}),`
`,e.jsx(n.li,{children:"Past communications remain secure if private key compromised"}),`
`,e.jsx(n.li,{children:"Each session uses unique keys"}),`
`]}),`
`,e.jsx(n.h2,{children:"Performance"}),`
`,e.jsx(n.p,{children:"Modern TLS is highly optimized:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"TLS 1.3"}),": 1-RTT handshake vs 2-RTT in TLS 1.2"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Session resumption"}),": Reuse previous session keys"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"0-RTT"}),": Zero round-trip time for returning clients"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Hardware acceleration"}),": AES-NI for fast encryption"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"OCSP stapling"}),": Reduces revocation check overhead"]}),`
`]}),`
`,e.jsx(n.h2,{children:"Best Practices"}),`
`,e.jsx(n.h3,{children:"Protocol Configuration"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Use TLS 1.2+"}),": Disable older versions"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Prefer TLS 1.3"}),": When supported by clients"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Strong cipher suites"}),": Remove weak algorithms"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Forward secrecy"}),": Use ECDHE/DHE key exchange"]}),`
`]}),`
`,e.jsx(n.h3,{children:"Security"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Keep software updated"}),": Apply security patches"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Monitor vulnerabilities"}),": Stay informed about new attacks"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Test configuration"}),": Use SSL Labs or similar tools"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Disable compression"}),": Prevents CRIME attack"]}),`
`]})]})}function l(s={}){const{wrapper:n}=s.components||{};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{l as default,c as frontmatter};
