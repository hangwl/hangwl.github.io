import{j as n}from"./index-BKgolIEe.js";const t=[{id:"introduction",title:"Introduction",level:2},{id:"osi-model",title:"OSI Model",level:2},{id:"tcpip-model",title:"TCP/IP Model",level:2},{id:"ip-addressing",title:"IP Addressing",level:2},{id:"ipv4",title:"IPv4",level:3},{id:"ipv6",title:"IPv6",level:3},{id:"common-protocols",title:"Common Protocols",level:2},{id:"transport-layer",title:"Transport Layer",level:3},{id:"application-layer",title:"Application Layer",level:3},{id:"ports",title:"Ports",level:2},{id:"network-devices",title:"Network Devices",level:2},{id:"best-practices",title:"Best Practices",level:2}],l={title:"Networking",links:["tcp","udp","http","https"]};function i(s){const e={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h2,{id:"introduction",children:"Introduction"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Networking"})," refers to the practice of connecting computers and devices to share resources and communicate. Modern networking is built on the ",n.jsx(e.strong,{children:"OSI model"})," and ",n.jsx(e.strong,{children:"TCP/IP protocol suite"}),", enabling everything from web browsing to video streaming."]}),`
`,n.jsx(e.p,{children:"Understanding networking fundamentals is essential for building distributed systems, APIs, and web applications."}),`
`,n.jsx(e.h2,{id:"osi-model",children:"OSI Model"}),`
`,n.jsx(e.p,{children:"The OSI (Open Systems Interconnection) model defines seven layers of network communication:"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"Layer"}),n.jsx(e.th,{children:"Name"}),n.jsx(e.th,{children:"Function"}),n.jsx(e.th,{children:"Examples"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.strong,{children:"7"})}),n.jsx(e.td,{children:"Application"}),n.jsx(e.td,{children:"User-facing protocols"}),n.jsx(e.td,{children:"HTTP, FTP, SMTP, DNS"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.strong,{children:"6"})}),n.jsx(e.td,{children:"Presentation"}),n.jsx(e.td,{children:"Data formatting, encryption"}),n.jsx(e.td,{children:"SSL/TLS, JPEG, ASCII"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.strong,{children:"5"})}),n.jsx(e.td,{children:"Session"}),n.jsx(e.td,{children:"Connection management"}),n.jsx(e.td,{children:"NetBIOS, RPC"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.strong,{children:"4"})}),n.jsx(e.td,{children:"Transport"}),n.jsx(e.td,{children:"End-to-end communication"}),n.jsxs(e.td,{children:[n.jsx(e.a,{href:"/notes/tcp",children:"TCP"}),", ",n.jsx(e.a,{href:"/notes/udp",children:"UDP"})]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.strong,{children:"3"})}),n.jsx(e.td,{children:"Network"}),n.jsx(e.td,{children:"Routing, addressing"}),n.jsx(e.td,{children:"IP, ICMP, routing"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.strong,{children:"2"})}),n.jsx(e.td,{children:"Data Link"}),n.jsx(e.td,{children:"Physical addressing"}),n.jsx(e.td,{children:"Ethernet, Wi-Fi, MAC"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.strong,{children:"1"})}),n.jsx(e.td,{children:"Physical"}),n.jsx(e.td,{children:"Hardware transmission"}),n.jsx(e.td,{children:"Cables, signals, bits"})]})]})]}),`
`,n.jsx(e.h2,{id:"tcpip-model",children:"TCP/IP Model"}),`
`,n.jsx(e.p,{children:"The practical model used in modern networking (simplified from OSI):"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Application Layer"}),": HTTP, HTTPS, FTP, DNS, SMTP"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"User-facing protocols and services"}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Transport Layer"}),": ",n.jsx(e.a,{href:"/notes/tcp",children:"TCP"}),", ",n.jsx(e.a,{href:"/notes/udp",children:"UDP"})]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Manages data delivery between applications"}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Internet Layer"}),": IP, ICMP"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Routes packets across networks"}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Link Layer"}),": Ethernet, Wi-Fi"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Physical network connection"}),`
`]}),`
`,n.jsx(e.h2,{id:"ip-addressing",children:"IP Addressing"}),`
`,n.jsx(e.h3,{id:"ipv4",children:"IPv4"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Format"}),": Four octets (e.g., ",n.jsx(e.code,{children:"192.168.1.1"}),")"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Address space"}),": ~4.3 billion addresses"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Private ranges"}),": ",n.jsx(e.code,{children:"10.0.0.0/8"}),", ",n.jsx(e.code,{children:"172.16.0.0/12"}),", ",n.jsx(e.code,{children:"192.168.0.0/16"})]}),`
`]}),`
`,n.jsx(e.h3,{id:"ipv6",children:"IPv6"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Format"}),": Eight groups of hexadecimal (e.g., ",n.jsx(e.code,{children:"2001:0db8::1"}),")"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Address space"}),": 340 undecillion addresses"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Adoption"}),": Growing to address IPv4 exhaustion"]}),`
`]}),`
`,n.jsx(e.h2,{id:"common-protocols",children:"Common Protocols"}),`
`,n.jsx(e.h3,{id:"transport-layer",children:"Transport Layer"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:n.jsx(e.a,{href:"/notes/tcp",children:"TCP"})}),": Reliable, connection-oriented, ordered delivery"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:n.jsx(e.a,{href:"/notes/udp",children:"UDP"})}),": Fast, connectionless, no guarantees"]}),`
`]}),`
`,n.jsx(e.h3,{id:"application-layer",children:"Application Layer"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:n.jsx(e.a,{href:"/notes/http",children:"HTTP/HTTPS"})}),": Web communication"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"DNS"}),": Domain name resolution"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"FTP"}),": File transfer"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"SMTP"}),": Email transmission"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"SSH"}),": Secure remote access"]}),`
`]}),`
`,n.jsx(e.h2,{id:"ports",children:"Ports"}),`
`,n.jsx(e.p,{children:"Ports identify specific services on a host:"}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Well-known ports (0-1023):"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"80"}),": HTTP"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"443"}),": HTTPS"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"22"}),": SSH"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"21"}),": FTP"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"25"}),": SMTP"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"53"}),": DNS"]}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Registered ports (1024-49151):"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Application-specific services"}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Dynamic ports (49152-65535):"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Temporary client connections"}),`
`]}),`
`,n.jsx(e.h2,{id:"network-devices",children:"Network Devices"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Router"}),": Connects different networks, routes traffic"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Switch"}),": Connects devices within a network"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Firewall"}),": Filters traffic based on security rules"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Load Balancer"}),": Distributes traffic across servers"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Gateway"}),": Connects networks using different protocols"]}),`
`]}),`
`,n.jsx(e.h2,{id:"best-practices",children:"Best Practices"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsxs(e.strong,{children:["Use ",n.jsx(e.a,{href:"/notes/https",children:"HTTPS"})]}),": Encrypt data in transit"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Firewall Configuration"}),": Block unnecessary ports"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Network Segmentation"}),": Isolate sensitive systems"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Monitoring"}),": Track traffic patterns and anomalies"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"DNS Security"}),": Use DNSSEC, avoid DNS spoofing"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Rate Limiting"}),": Prevent DDoS attacks"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Choose Protocol Wisely"}),": ",n.jsx(e.a,{href:"/notes/tcp",children:"TCP"})," for reliability, ",n.jsx(e.a,{href:"/notes/udp",children:"UDP"})," for speed"]}),`
`]})]})}function d(s={}){const{wrapper:e}=s.components||{};return e?n.jsx(e,{...s,children:n.jsx(i,{...s})}):i(s)}export{d as default,l as frontmatter,t as toc};
