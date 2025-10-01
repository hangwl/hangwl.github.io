import{j as n}from"./index-CtAT4ExP.js";const t={title:"Networking",links:["tcp","udp","http","https"]};function r(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(s.h2,{children:"Introduction"}),`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"Networking"})," refers to the practice of connecting computers and devices to share resources and communicate. Modern networking is built on the ",n.jsx(s.strong,{children:"OSI model"})," and ",n.jsx(s.strong,{children:"TCP/IP protocol suite"}),", enabling everything from web browsing to video streaming."]}),`
`,n.jsx(s.p,{children:"Understanding networking fundamentals is essential for building distributed systems, APIs, and web applications."}),`
`,n.jsx(s.h2,{children:"OSI Model"}),`
`,n.jsx(s.p,{children:"The OSI (Open Systems Interconnection) model defines seven layers of network communication:"}),`
`,n.jsxs(s.table,{children:[n.jsx(s.thead,{children:n.jsxs(s.tr,{children:[n.jsx(s.th,{children:"Layer"}),n.jsx(s.th,{children:"Name"}),n.jsx(s.th,{children:"Function"}),n.jsx(s.th,{children:"Examples"})]})}),n.jsxs(s.tbody,{children:[n.jsxs(s.tr,{children:[n.jsx(s.td,{children:n.jsx(s.strong,{children:"7"})}),n.jsx(s.td,{children:"Application"}),n.jsx(s.td,{children:"User-facing protocols"}),n.jsx(s.td,{children:"HTTP, FTP, SMTP, DNS"})]}),n.jsxs(s.tr,{children:[n.jsx(s.td,{children:n.jsx(s.strong,{children:"6"})}),n.jsx(s.td,{children:"Presentation"}),n.jsx(s.td,{children:"Data formatting, encryption"}),n.jsx(s.td,{children:"SSL/TLS, JPEG, ASCII"})]}),n.jsxs(s.tr,{children:[n.jsx(s.td,{children:n.jsx(s.strong,{children:"5"})}),n.jsx(s.td,{children:"Session"}),n.jsx(s.td,{children:"Connection management"}),n.jsx(s.td,{children:"NetBIOS, RPC"})]}),n.jsxs(s.tr,{children:[n.jsx(s.td,{children:n.jsx(s.strong,{children:"4"})}),n.jsx(s.td,{children:"Transport"}),n.jsx(s.td,{children:"End-to-end communication"}),n.jsxs(s.td,{children:[n.jsx(s.a,{href:"/notes/tcp",children:"TCP"}),", ",n.jsx(s.a,{href:"/notes/udp",children:"UDP"})]})]}),n.jsxs(s.tr,{children:[n.jsx(s.td,{children:n.jsx(s.strong,{children:"3"})}),n.jsx(s.td,{children:"Network"}),n.jsx(s.td,{children:"Routing, addressing"}),n.jsx(s.td,{children:"IP, ICMP, routing"})]}),n.jsxs(s.tr,{children:[n.jsx(s.td,{children:n.jsx(s.strong,{children:"2"})}),n.jsx(s.td,{children:"Data Link"}),n.jsx(s.td,{children:"Physical addressing"}),n.jsx(s.td,{children:"Ethernet, Wi-Fi, MAC"})]}),n.jsxs(s.tr,{children:[n.jsx(s.td,{children:n.jsx(s.strong,{children:"1"})}),n.jsx(s.td,{children:"Physical"}),n.jsx(s.td,{children:"Hardware transmission"}),n.jsx(s.td,{children:"Cables, signals, bits"})]})]})]}),`
`,n.jsx(s.h2,{children:"TCP/IP Model"}),`
`,n.jsx(s.p,{children:"The practical model used in modern networking (simplified from OSI):"}),`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"Application Layer"}),": HTTP, HTTPS, FTP, DNS, SMTP"]}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"User-facing protocols and services"}),`
`]}),`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"Transport Layer"}),": ",n.jsx(s.a,{href:"/notes/tcp",children:"TCP"}),", ",n.jsx(s.a,{href:"/notes/udp",children:"UDP"})]}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"Manages data delivery between applications"}),`
`]}),`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"Internet Layer"}),": IP, ICMP"]}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"Routes packets across networks"}),`
`]}),`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"Link Layer"}),": Ethernet, Wi-Fi"]}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"Physical network connection"}),`
`]}),`
`,n.jsx(s.h2,{children:"IP Addressing"}),`
`,n.jsx(s.h3,{children:"IPv4"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Format"}),": Four octets (e.g., ",n.jsx(s.code,{children:"192.168.1.1"}),")"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Address space"}),": ~4.3 billion addresses"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Private ranges"}),": ",n.jsx(s.code,{children:"10.0.0.0/8"}),", ",n.jsx(s.code,{children:"172.16.0.0/12"}),", ",n.jsx(s.code,{children:"192.168.0.0/16"})]}),`
`]}),`
`,n.jsx(s.h3,{children:"IPv6"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Format"}),": Eight groups of hexadecimal (e.g., ",n.jsx(s.code,{children:"2001:0db8::1"}),")"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Address space"}),": 340 undecillion addresses"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Adoption"}),": Growing to address IPv4 exhaustion"]}),`
`]}),`
`,n.jsx(s.h2,{children:"Common Protocols"}),`
`,n.jsx(s.h3,{children:"Transport Layer"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:n.jsx(s.a,{href:"/notes/tcp",children:"TCP"})}),": Reliable, connection-oriented, ordered delivery"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:n.jsx(s.a,{href:"/notes/udp",children:"UDP"})}),": Fast, connectionless, no guarantees"]}),`
`]}),`
`,n.jsx(s.h3,{children:"Application Layer"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:n.jsx(s.a,{href:"/notes/http",children:"HTTP/HTTPS"})}),": Web communication"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"DNS"}),": Domain name resolution"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"FTP"}),": File transfer"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"SMTP"}),": Email transmission"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"SSH"}),": Secure remote access"]}),`
`]}),`
`,n.jsx(s.h2,{children:"Ports"}),`
`,n.jsx(s.p,{children:"Ports identify specific services on a host:"}),`
`,n.jsx(s.p,{children:n.jsx(s.strong,{children:"Well-known ports (0-1023):"})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"80"}),": HTTP"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"443"}),": HTTPS"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"22"}),": SSH"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"21"}),": FTP"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"25"}),": SMTP"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"53"}),": DNS"]}),`
`]}),`
`,n.jsx(s.p,{children:n.jsx(s.strong,{children:"Registered ports (1024-49151):"})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"Application-specific services"}),`
`]}),`
`,n.jsx(s.p,{children:n.jsx(s.strong,{children:"Dynamic ports (49152-65535):"})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"Temporary client connections"}),`
`]}),`
`,n.jsx(s.h2,{children:"Network Devices"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Router"}),": Connects different networks, routes traffic"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Switch"}),": Connects devices within a network"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Firewall"}),": Filters traffic based on security rules"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Load Balancer"}),": Distributes traffic across servers"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Gateway"}),": Connects networks using different protocols"]}),`
`]}),`
`,n.jsx(s.h2,{children:"Best Practices"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsxs(s.strong,{children:["Use ",n.jsx(s.a,{href:"/notes/https",children:"HTTPS"})]}),": Encrypt data in transit"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Firewall Configuration"}),": Block unnecessary ports"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Network Segmentation"}),": Isolate sensitive systems"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Monitoring"}),": Track traffic patterns and anomalies"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"DNS Security"}),": Use DNSSEC, avoid DNS spoofing"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Rate Limiting"}),": Prevent DDoS attacks"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Choose Protocol Wisely"}),": ",n.jsx(s.a,{href:"/notes/tcp",children:"TCP"})," for reliability, ",n.jsx(s.a,{href:"/notes/udp",children:"UDP"})," for speed"]}),`
`]})]})}function l(e={}){const{wrapper:s}=e.components||{};return s?n.jsx(s,{...e,children:n.jsx(r,{...e})}):r(e)}export{l as default,t as frontmatter};
