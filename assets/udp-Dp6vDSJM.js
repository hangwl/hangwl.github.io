import{j as n}from"./index-CtAT4ExP.js";const l={title:"UDP",links:["networking","tcp","websockets"]};function i(s){const e={a:"a",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h2,{children:"Introduction"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"UDP (User Datagram Protocol)"})," is a connectionless transport layer protocol that provides ",n.jsx(e.strong,{children:"fast, lightweight"})," data transmission without guarantees of delivery, ordering, or error correction."]}),`
`,n.jsx(e.p,{children:"UDP prioritizes speed over reliability, making it ideal for real-time applications where occasional data loss is acceptable."}),`
`,n.jsx(e.h2,{children:"Key Features"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Connectionless"}),": No handshake or connection setup"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Unreliable"}),": No delivery guarantees"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Unordered"}),": Packets may arrive out of order"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Fast"}),": Minimal overhead and latency"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Lightweight"}),": Simple header structure"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Broadcast/Multicast"}),": Supports one-to-many communication"]}),`
`]}),`
`,n.jsx(e.h2,{children:"UDP Header"}),`
`,n.jsx(e.p,{children:"UDP has a simple 8-byte header:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Source Port"}),": Sender's port (16 bits)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Destination Port"}),": Receiver's port (16 bits)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Length"}),": Datagram size (16 bits)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Checksum"}),": Optional error detection (16 bits)"]}),`
`]}),`
`,n.jsx(e.p,{children:"Much simpler than TCP's 20+ byte header with extensive control fields."}),`
`,n.jsx(e.h2,{children:"How UDP Works"}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"1. Application sends data"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"No connection establishment required"}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"2. UDP wraps data in datagram"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Adds minimal header information"}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"3. Datagram sent to network layer"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Immediate transmission, no waiting"}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"4. Receiver processes datagram"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"No acknowledgment sent back"}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"5. No retransmission"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Lost packets are simply dropped"}),`
`]}),`
`,n.jsx(e.h2,{children:"UDP vs TCP"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"Feature"}),n.jsx(e.th,{children:"UDP"}),n.jsx(e.th,{children:"TCP"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.strong,{children:"Connection"})}),n.jsx(e.td,{children:"Connectionless"}),n.jsx(e.td,{children:"Connection-oriented"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.strong,{children:"Reliability"})}),n.jsx(e.td,{children:"No guarantees"}),n.jsx(e.td,{children:"Guaranteed delivery"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.strong,{children:"Ordering"})}),n.jsx(e.td,{children:"Unordered"}),n.jsx(e.td,{children:"Ordered"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.strong,{children:"Speed"})}),n.jsx(e.td,{children:"Very fast"}),n.jsx(e.td,{children:"Slower"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.strong,{children:"Overhead"})}),n.jsx(e.td,{children:"Minimal (8 bytes)"}),n.jsx(e.td,{children:"Higher (20+ bytes)"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.strong,{children:"Use Cases"})}),n.jsx(e.td,{children:"Streaming, gaming, DNS"}),n.jsx(e.td,{children:"Web, email, files"})]})]})]}),`
`,n.jsxs(e.p,{children:["See ",n.jsx(e.a,{href:"/notes/tcp",children:"TCP"})," for detailed comparison."]}),`
`,n.jsx(e.h2,{children:"Common Use Cases"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Video/Audio Streaming"}),": YouTube, Netflix, VoIP"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Real-time delivery, occasional frame drops acceptable"}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Online Gaming"}),": Multiplayer games"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Low latency critical, can interpolate missing data"}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"DNS Queries"}),": Domain name resolution"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Fast lookups, can retry if needed"}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"IoT Sensors"}),": Telemetry data"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Frequent updates, individual packet loss tolerable"}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Live Broadcasting"}),": Sports, news"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Real-time delivery more important than perfection"}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Network Management"}),": SNMP, syslog"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Simple request/response patterns"}),`
`]}),`
`,n.jsx(e.h2,{children:"Advantages"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Low Latency"}),": No handshake or acknowledgment delays"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Efficient"}),": Minimal protocol overhead"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Broadcast Support"}),": Send to multiple recipients simultaneously"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Simple"}),": Easy to implement and debug"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"No Connection State"}),": Server doesn't track client connections"]}),`
`]}),`
`,n.jsx(e.h2,{children:"Disadvantages"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"No Reliability"}),": Packets may be lost, duplicated, or corrupted"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"No Ordering"}),": Data may arrive out of sequence"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"No Flow Control"}),": Can overwhelm receiver"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"No Congestion Control"}),": Doesn't adapt to network conditions"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Application Responsibility"}),": Must handle errors and retransmissions"]}),`
`]}),`
`,n.jsx(e.h2,{children:"When to Use UDP"}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Choose UDP when:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Speed is more important than reliability"}),`
`,n.jsx(e.li,{children:"Real-time delivery is critical"}),`
`,n.jsx(e.li,{children:"Occasional data loss is acceptable"}),`
`,n.jsx(e.li,{children:"Low latency is required"}),`
`,n.jsx(e.li,{children:"Broadcasting to multiple recipients"}),`
`]}),`
`,n.jsx(e.p,{children:n.jsxs(e.strong,{children:["Choose ",n.jsx(e.a,{href:"/notes/tcp",children:"TCP"})," when:"]})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Data integrity is critical"}),`
`,n.jsx(e.li,{children:"Ordered delivery is required"}),`
`,n.jsx(e.li,{children:"Reliability matters more than speed"}),`
`,n.jsx(e.li,{children:"Complete data transfer is necessary"}),`
`]}),`
`,n.jsx(e.h2,{children:"Best Practices"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Application-Level Reliability"}),": Implement retransmission if needed"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Packet Size"}),": Keep under MTU (typically 1500 bytes) to avoid fragmentation"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Sequence Numbers"}),": Add to application data for ordering"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Checksums"}),": Enable UDP checksum for error detection"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Rate Limiting"}),": Prevent network flooding"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Timeout Handling"}),": Implement timeouts for request/response patterns"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Consider QUIC"}),": Modern protocol combining UDP speed with TCP reliability"]}),`
`]})]})}function t(s={}){const{wrapper:e}=s.components||{};return e?n.jsx(e,{...s,children:n.jsx(i,{...s})}):i(s)}export{t as default,l as frontmatter};
