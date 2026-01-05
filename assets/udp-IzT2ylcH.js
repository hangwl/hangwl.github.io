import{j as e}from"./index-BY1L9Kpq.js";const t=[{id:"introduction",title:"Introduction",level:2},{id:"key-features",title:"Key Features",level:2},{id:"udp-header",title:"UDP Header",level:2},{id:"how-udp-works",title:"How UDP Works",level:2},{id:"udp-vs-tcp",title:"UDP vs TCP",level:2},{id:"common-use-cases",title:"Common Use Cases",level:2},{id:"advantages",title:"Advantages",level:2},{id:"disadvantages",title:"Disadvantages",level:2},{id:"when-to-use-udp",title:"When to Use UDP",level:2},{id:"best-practices",title:"Best Practices",level:2}],l={title:"UDP",links:["networking","tcp","websockets"]};function i(s){const n={a:"a",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"introduction",children:"Introduction"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"UDP (User Datagram Protocol)"})," is a connectionless transport layer protocol that provides ",e.jsx(n.strong,{children:"fast, lightweight"})," data transmission without guarantees of delivery, ordering, or error correction."]}),`
`,e.jsx(n.p,{children:"UDP prioritizes speed over reliability, making it ideal for real-time applications where occasional data loss is acceptable."}),`
`,e.jsx(n.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Connectionless"}),": No handshake or connection setup"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Unreliable"}),": No delivery guarantees"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Unordered"}),": Packets may arrive out of order"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Fast"}),": Minimal overhead and latency"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Lightweight"}),": Simple header structure"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Broadcast/Multicast"}),": Supports one-to-many communication"]}),`
`]}),`
`,e.jsx(n.h2,{id:"udp-header",children:"UDP Header"}),`
`,e.jsx(n.p,{children:"UDP has a simple 8-byte header:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Source Port"}),": Sender's port (16 bits)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Destination Port"}),": Receiver's port (16 bits)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Length"}),": Datagram size (16 bits)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Checksum"}),": Optional error detection (16 bits)"]}),`
`]}),`
`,e.jsx(n.p,{children:"Much simpler than TCP's 20+ byte header with extensive control fields."}),`
`,e.jsx(n.h2,{id:"how-udp-works",children:"How UDP Works"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"1. Application sends data"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"No connection establishment required"}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"2. UDP wraps data in datagram"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Adds minimal header information"}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"3. Datagram sent to network layer"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Immediate transmission, no waiting"}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"4. Receiver processes datagram"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"No acknowledgment sent back"}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"5. No retransmission"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Lost packets are simply dropped"}),`
`]}),`
`,e.jsx(n.h2,{id:"udp-vs-tcp",children:"UDP vs TCP"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Feature"}),e.jsx(n.th,{children:"UDP"}),e.jsx(n.th,{children:"TCP"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"Connection"})}),e.jsx(n.td,{children:"Connectionless"}),e.jsx(n.td,{children:"Connection-oriented"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"Reliability"})}),e.jsx(n.td,{children:"No guarantees"}),e.jsx(n.td,{children:"Guaranteed delivery"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"Ordering"})}),e.jsx(n.td,{children:"Unordered"}),e.jsx(n.td,{children:"Ordered"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"Speed"})}),e.jsx(n.td,{children:"Very fast"}),e.jsx(n.td,{children:"Slower"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"Overhead"})}),e.jsx(n.td,{children:"Minimal (8 bytes)"}),e.jsx(n.td,{children:"Higher (20+ bytes)"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"Use Cases"})}),e.jsx(n.td,{children:"Streaming, gaming, DNS"}),e.jsx(n.td,{children:"Web, email, files"})]})]})]}),`
`,e.jsxs(n.p,{children:["See ",e.jsx(n.a,{href:"/notes/tcp",children:"TCP"})," for detailed comparison."]}),`
`,e.jsx(n.h2,{id:"common-use-cases",children:"Common Use Cases"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Video/Audio Streaming"}),": YouTube, Netflix, VoIP"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Real-time delivery, occasional frame drops acceptable"}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Online Gaming"}),": Multiplayer games"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Low latency critical, can interpolate missing data"}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"DNS Queries"}),": Domain name resolution"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Fast lookups, can retry if needed"}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"IoT Sensors"}),": Telemetry data"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Frequent updates, individual packet loss tolerable"}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Live Broadcasting"}),": Sports, news"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Real-time delivery more important than perfection"}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Network Management"}),": SNMP, syslog"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Simple request/response patterns"}),`
`]}),`
`,e.jsx(n.h2,{id:"advantages",children:"Advantages"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Low Latency"}),": No handshake or acknowledgment delays"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Efficient"}),": Minimal protocol overhead"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Broadcast Support"}),": Send to multiple recipients simultaneously"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Simple"}),": Easy to implement and debug"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"No Connection State"}),": Server doesn't track client connections"]}),`
`]}),`
`,e.jsx(n.h2,{id:"disadvantages",children:"Disadvantages"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"No Reliability"}),": Packets may be lost, duplicated, or corrupted"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"No Ordering"}),": Data may arrive out of sequence"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"No Flow Control"}),": Can overwhelm receiver"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"No Congestion Control"}),": Doesn't adapt to network conditions"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Application Responsibility"}),": Must handle errors and retransmissions"]}),`
`]}),`
`,e.jsx(n.h2,{id:"when-to-use-udp",children:"When to Use UDP"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Choose UDP when:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Speed is more important than reliability"}),`
`,e.jsx(n.li,{children:"Real-time delivery is critical"}),`
`,e.jsx(n.li,{children:"Occasional data loss is acceptable"}),`
`,e.jsx(n.li,{children:"Low latency is required"}),`
`,e.jsx(n.li,{children:"Broadcasting to multiple recipients"}),`
`]}),`
`,e.jsx(n.p,{children:e.jsxs(n.strong,{children:["Choose ",e.jsx(n.a,{href:"/notes/tcp",children:"TCP"})," when:"]})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Data integrity is critical"}),`
`,e.jsx(n.li,{children:"Ordered delivery is required"}),`
`,e.jsx(n.li,{children:"Reliability matters more than speed"}),`
`,e.jsx(n.li,{children:"Complete data transfer is necessary"}),`
`]}),`
`,e.jsx(n.h2,{id:"best-practices",children:"Best Practices"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Application-Level Reliability"}),": Implement retransmission if needed"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Packet Size"}),": Keep under MTU (typically 1500 bytes) to avoid fragmentation"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Sequence Numbers"}),": Add to application data for ordering"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Checksums"}),": Enable UDP checksum for error detection"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Rate Limiting"}),": Prevent network flooding"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Timeout Handling"}),": Implement timeouts for request/response patterns"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Consider QUIC"}),": Modern protocol combining UDP speed with TCP reliability"]}),`
`]})]})}function d(s={}){const{wrapper:n}=s.components||{};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{d as default,l as frontmatter,t as toc};
