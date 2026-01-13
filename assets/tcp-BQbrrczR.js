import{j as e}from"./index-895OKoX5.js";const t=[{id:"introduction",title:"Introduction",level:2},{id:"key-features",title:"Key Features",level:2},{id:"three-way-handshake",title:"Three-Way Handshake",level:2},{id:"connection-termination",title:"Connection Termination",level:2},{id:"tcp-header",title:"TCP Header",level:2},{id:"flow-control",title:"Flow Control",level:2},{id:"congestion-control",title:"Congestion Control",level:2},{id:"tcp-vs-udp",title:"TCP vs UDP",level:2},{id:"common-use-cases",title:"Common Use Cases",level:2},{id:"best-practices",title:"Best Practices",level:2}],l={title:"TCP",links:["networking","udp","http","https"]};function r(s){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"introduction",children:"Introduction"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"TCP (Transmission Control Protocol)"})," is a connection-oriented transport layer protocol that provides ",e.jsx(n.strong,{children:"reliable, ordered, and error-checked"})," delivery of data between applications over IP networks."]}),`
`,e.jsxs(n.p,{children:["TCP is used by most internet applications including ",e.jsx(n.a,{href:"/notes/http",children:"HTTP"}),", ",e.jsx(n.a,{href:"/notes/https",children:"HTTPS"}),", email, and file transfer, where data integrity is critical."]}),`
`,e.jsx(n.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Connection-Oriented"}),": Establishes connection before data transfer"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Reliable Delivery"}),": Guarantees data arrives without errors"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Ordered Packets"}),": Data arrives in the same order it was sent"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Flow Control"}),": Prevents overwhelming the receiver"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Congestion Control"}),": Adapts to network conditions"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Error Detection"}),": Checksums verify data integrity"]}),`
`]}),`
`,e.jsx(n.h2,{id:"three-way-handshake",children:"Three-Way Handshake"}),`
`,e.jsx(n.p,{children:"TCP establishes connections using a three-way handshake:"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"1. SYN (Synchronize)"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Client sends SYN packet to server"}),`
`,e.jsx(n.li,{children:"Initiates connection request"}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"2. SYN-ACK (Synchronize-Acknowledge)"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Server responds with SYN-ACK"}),`
`,e.jsx(n.li,{children:"Acknowledges client's request"}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"3. ACK (Acknowledge)"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Client sends ACK to server"}),`
`,e.jsx(n.li,{children:"Connection established"}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`Client                    Server\r
  |                         |\r
  |-------- SYN ----------->|\r
  |                         |\r
  |<------ SYN-ACK ---------|\r
  |                         |\r
  |-------- ACK ----------->|\r
  |                         |\r
  |   Connection Ready      |
`})}),`
`,e.jsx(n.h2,{id:"connection-termination",children:"Connection Termination"}),`
`,e.jsx(n.p,{children:"TCP uses a four-way handshake to close connections:"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"1. FIN"}),`: Client sends FIN (finish) packet\r
`,e.jsx(n.strong,{children:"2. ACK"}),`: Server acknowledges FIN\r
`,e.jsx(n.strong,{children:"3. FIN"}),`: Server sends its own FIN\r
`,e.jsx(n.strong,{children:"4. ACK"}),": Client acknowledges server's FIN"]}),`
`,e.jsx(n.h2,{id:"tcp-header",children:"TCP Header"}),`
`,e.jsx(n.p,{children:"Key fields in the TCP header:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Source/Destination Port"}),": Identifies applications"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Sequence Number"}),": Orders packets"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Acknowledgment Number"}),": Confirms received data"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Flags"}),": SYN, ACK, FIN, RST, PSH, URG"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Window Size"}),": Flow control mechanism"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Checksum"}),": Error detection"]}),`
`]}),`
`,e.jsx(n.h2,{id:"flow-control",children:"Flow Control"}),`
`,e.jsxs(n.p,{children:["TCP uses a ",e.jsx(n.strong,{children:"sliding window"})," mechanism:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Receiver advertises available buffer space"}),`
`,e.jsx(n.li,{children:"Sender limits data based on receiver's window"}),`
`,e.jsx(n.li,{children:"Prevents buffer overflow at receiver"}),`
`,e.jsx(n.li,{children:"Dynamically adjusts to receiver capacity"}),`
`]}),`
`,e.jsx(n.h2,{id:"congestion-control",children:"Congestion Control"}),`
`,e.jsx(n.p,{children:"TCP adapts to network congestion:"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Slow Start"}),`: Gradually increases transmission rate\r
`,e.jsx(n.strong,{children:"Congestion Avoidance"}),`: Maintains optimal rate\r
`,e.jsx(n.strong,{children:"Fast Retransmit"}),`: Quickly resends lost packets\r
`,e.jsx(n.strong,{children:"Fast Recovery"}),": Recovers from packet loss efficiently"]}),`
`,e.jsx(n.h2,{id:"tcp-vs-udp",children:"TCP vs UDP"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Feature"}),e.jsx(n.th,{children:"TCP"}),e.jsx(n.th,{children:"UDP"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"Connection"})}),e.jsx(n.td,{children:"Connection-oriented"}),e.jsx(n.td,{children:"Connectionless"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"Reliability"})}),e.jsx(n.td,{children:"Guaranteed delivery"}),e.jsx(n.td,{children:"No guarantees"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"Ordering"})}),e.jsx(n.td,{children:"Ordered packets"}),e.jsx(n.td,{children:"Unordered"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"Speed"})}),e.jsx(n.td,{children:"Slower (overhead)"}),e.jsx(n.td,{children:"Faster (minimal overhead)"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"Error Checking"})}),e.jsx(n.td,{children:"Extensive"}),e.jsx(n.td,{children:"Basic checksum"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"Use Cases"})}),e.jsx(n.td,{children:"Web, email, file transfer"}),e.jsx(n.td,{children:"Streaming, gaming, DNS"})]})]})]}),`
`,e.jsxs(n.p,{children:["See ",e.jsx(n.a,{href:"/notes/udp",children:"UDP"})," for comparison."]}),`
`,e.jsx(n.h2,{id:"common-use-cases",children:"Common Use Cases"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Web Traffic"}),": ",e.jsx(n.a,{href:"/notes/http",children:"HTTP"}),", ",e.jsx(n.a,{href:"/notes/https",children:"HTTPS"})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Reliable page loading and API requests"}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Email"}),": SMTP, IMAP, POP3"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Ensures message delivery"}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"File Transfer"}),": FTP, SFTP"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Guarantees complete file transmission"}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Remote Access"}),": SSH, Telnet"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Reliable command execution"}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Database Connections"}),": MySQL, PostgreSQL"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Consistent query results"}),`
`]}),`
`,e.jsx(n.h2,{id:"best-practices",children:"Best Practices"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Keep-Alive"}),": Maintain long-lived connections for efficiency"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Connection Pooling"}),": Reuse connections to reduce overhead"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Timeout Configuration"}),": Set appropriate timeouts for reliability"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Buffer Sizing"}),": Optimize send/receive buffers for performance"]}),`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:["Use ",e.jsx(n.a,{href:"/notes/https",children:"HTTPS"})]}),": Encrypt TCP traffic for security"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Monitor Connections"}),": Track connection states and errors"]}),`
`]})]})}function c(s={}){const{wrapper:n}=s.components||{};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{c as default,l as frontmatter,t as toc};
