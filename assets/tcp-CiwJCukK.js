import{j as n}from"./index-CtAT4ExP.js";const t={title:"TCP",links:["networking","udp","http","https"]};function r(s){const e={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h2,{children:"Introduction"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"TCP (Transmission Control Protocol)"})," is a connection-oriented transport layer protocol that provides ",n.jsx(e.strong,{children:"reliable, ordered, and error-checked"})," delivery of data between applications over IP networks."]}),`
`,n.jsxs(e.p,{children:["TCP is used by most internet applications including ",n.jsx(e.a,{href:"/notes/http",children:"HTTP"}),", ",n.jsx(e.a,{href:"/notes/https",children:"HTTPS"}),", email, and file transfer, where data integrity is critical."]}),`
`,n.jsx(e.h2,{children:"Key Features"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Connection-Oriented"}),": Establishes connection before data transfer"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Reliable Delivery"}),": Guarantees data arrives without errors"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Ordered Packets"}),": Data arrives in the same order it was sent"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Flow Control"}),": Prevents overwhelming the receiver"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Congestion Control"}),": Adapts to network conditions"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Error Detection"}),": Checksums verify data integrity"]}),`
`]}),`
`,n.jsx(e.h2,{children:"Three-Way Handshake"}),`
`,n.jsx(e.p,{children:"TCP establishes connections using a three-way handshake:"}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"1. SYN (Synchronize)"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Client sends SYN packet to server"}),`
`,n.jsx(e.li,{children:"Initiates connection request"}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"2. SYN-ACK (Synchronize-Acknowledge)"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Server responds with SYN-ACK"}),`
`,n.jsx(e.li,{children:"Acknowledges client's request"}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"3. ACK (Acknowledge)"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Client sends ACK to server"}),`
`,n.jsx(e.li,{children:"Connection established"}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`Client                    Server
  |                         |
  |-------- SYN ----------->|
  |                         |
  |<------ SYN-ACK ---------|
  |                         |
  |-------- ACK ----------->|
  |                         |
  |   Connection Ready      |
`})}),`
`,n.jsx(e.h2,{children:"Connection Termination"}),`
`,n.jsx(e.p,{children:"TCP uses a four-way handshake to close connections:"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"1. FIN"}),`: Client sends FIN (finish) packet
`,n.jsx(e.strong,{children:"2. ACK"}),`: Server acknowledges FIN
`,n.jsx(e.strong,{children:"3. FIN"}),`: Server sends its own FIN
`,n.jsx(e.strong,{children:"4. ACK"}),": Client acknowledges server's FIN"]}),`
`,n.jsx(e.h2,{children:"TCP Header"}),`
`,n.jsx(e.p,{children:"Key fields in the TCP header:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Source/Destination Port"}),": Identifies applications"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Sequence Number"}),": Orders packets"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Acknowledgment Number"}),": Confirms received data"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Flags"}),": SYN, ACK, FIN, RST, PSH, URG"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Window Size"}),": Flow control mechanism"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Checksum"}),": Error detection"]}),`
`]}),`
`,n.jsx(e.h2,{children:"Flow Control"}),`
`,n.jsxs(e.p,{children:["TCP uses a ",n.jsx(e.strong,{children:"sliding window"})," mechanism:"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Receiver advertises available buffer space"}),`
`,n.jsx(e.li,{children:"Sender limits data based on receiver's window"}),`
`,n.jsx(e.li,{children:"Prevents buffer overflow at receiver"}),`
`,n.jsx(e.li,{children:"Dynamically adjusts to receiver capacity"}),`
`]}),`
`,n.jsx(e.h2,{children:"Congestion Control"}),`
`,n.jsx(e.p,{children:"TCP adapts to network congestion:"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Slow Start"}),`: Gradually increases transmission rate
`,n.jsx(e.strong,{children:"Congestion Avoidance"}),`: Maintains optimal rate
`,n.jsx(e.strong,{children:"Fast Retransmit"}),`: Quickly resends lost packets
`,n.jsx(e.strong,{children:"Fast Recovery"}),": Recovers from packet loss efficiently"]}),`
`,n.jsx(e.h2,{children:"TCP vs UDP"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"Feature"}),n.jsx(e.th,{children:"TCP"}),n.jsx(e.th,{children:"UDP"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.strong,{children:"Connection"})}),n.jsx(e.td,{children:"Connection-oriented"}),n.jsx(e.td,{children:"Connectionless"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.strong,{children:"Reliability"})}),n.jsx(e.td,{children:"Guaranteed delivery"}),n.jsx(e.td,{children:"No guarantees"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.strong,{children:"Ordering"})}),n.jsx(e.td,{children:"Ordered packets"}),n.jsx(e.td,{children:"Unordered"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.strong,{children:"Speed"})}),n.jsx(e.td,{children:"Slower (overhead)"}),n.jsx(e.td,{children:"Faster (minimal overhead)"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.strong,{children:"Error Checking"})}),n.jsx(e.td,{children:"Extensive"}),n.jsx(e.td,{children:"Basic checksum"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.strong,{children:"Use Cases"})}),n.jsx(e.td,{children:"Web, email, file transfer"}),n.jsx(e.td,{children:"Streaming, gaming, DNS"})]})]})]}),`
`,n.jsxs(e.p,{children:["See ",n.jsx(e.a,{href:"/notes/udp",children:"UDP"})," for comparison."]}),`
`,n.jsx(e.h2,{children:"Common Use Cases"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Web Traffic"}),": ",n.jsx(e.a,{href:"/notes/http",children:"HTTP"}),", ",n.jsx(e.a,{href:"/notes/https",children:"HTTPS"})]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Reliable page loading and API requests"}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Email"}),": SMTP, IMAP, POP3"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Ensures message delivery"}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"File Transfer"}),": FTP, SFTP"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Guarantees complete file transmission"}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Remote Access"}),": SSH, Telnet"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Reliable command execution"}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Database Connections"}),": MySQL, PostgreSQL"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Consistent query results"}),`
`]}),`
`,n.jsx(e.h2,{children:"Best Practices"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Keep-Alive"}),": Maintain long-lived connections for efficiency"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Connection Pooling"}),": Reuse connections to reduce overhead"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Timeout Configuration"}),": Set appropriate timeouts for reliability"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Buffer Sizing"}),": Optimize send/receive buffers for performance"]}),`
`,n.jsxs(e.li,{children:[n.jsxs(e.strong,{children:["Use ",n.jsx(e.a,{href:"/notes/https",children:"HTTPS"})]}),": Encrypt TCP traffic for security"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Monitor Connections"}),": Track connection states and errors"]}),`
`]})]})}function l(s={}){const{wrapper:e}=s.components||{};return e?n.jsx(e,{...s,children:n.jsx(r,{...s})}):r(s)}export{l as default,t as frontmatter};
