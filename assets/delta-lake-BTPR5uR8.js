import{j as t}from"./index-DmIt1YIB.js";const s=[{id:"introduction",title:"Introduction",level:2},{id:"delta-tables",title:"Delta Tables",level:2},{id:"transactional-features",title:"Transactional features",level:3},{id:"atomicity",title:"Atomicity",level:4},{id:"consistency",title:"Consistency",level:4},{id:"isolation",title:"Isolation",level:4},{id:"durability",title:"Durability",level:4}],r={title:"Delta Lake"};function a(n){const e={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",strong:"strong",...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.h2,{id:"introduction",children:"Introduction"}),`
`,t.jsxs(e.p,{children:[t.jsx(e.a,{href:"https://delta.io/",children:"Delta Lake"}),` is a storage layer framework for lakehouse architectures commonly built on Amazon S3.\r
It addresses many of the shortcomings of traditional data lakes such as `,t.jsx(e.strong,{children:"data corruption"})," and ",t.jsx(e.strong,{children:"inconsistency"}),"."]}),`
`,t.jsx(e.h2,{id:"delta-tables",children:"Delta Tables"}),`
`,t.jsxs(e.p,{children:["Delta Tables extends the capabilities of ",t.jsx(e.a,{href:"https://parquet.apache.org/",children:"Apache Parquet"})," with ",t.jsx(e.strong,{children:"transactional"})," and ",t.jsx(e.strong,{children:"metadata"})," features."]}),`
`,t.jsx(e.h3,{id:"transactional-features",children:"Transactional features"}),`
`,t.jsxs(e.p,{children:["Delta Lake transactions are ",t.jsx(e.strong,{children:"ACID"})," compliant via ",t.jsx(e.code,{children:"_delta_log"})," ",t.jsx(e.strong,{children:"transaction logs"}),"."]}),`
`,t.jsx(e.h4,{id:"atomicity",children:"Atomicity"}),`
`,t.jsxs(e.p,{children:[`In a traditional data lake, a write operation that fails midway can leave the data in a corrupt or inconsistent state.\r
Delta Lake's transaction logs ensures that every write operation is `,t.jsx(e.strong,{children:"atomic"}),", meaning that it ",t.jsx(e.strong,{children:"either fully succeeds or fully fails"}),`.\r
This is orchestrated via transaction logs that record all file additions and removals for a transaction.`]}),`
`,t.jsx(e.h4,{id:"consistency",children:"Consistency"}),`
`,t.jsxs(e.p,{children:["In a Delta Lake, queries are guaranteed to always see a ",t.jsx(e.strong,{children:"consistent"}),", ",t.jsx(e.strong,{children:"unchanging snapshot"}),` of the data, even if other transactions are writing to the same table at the same time.\r
This happens because when a query starts, it `,t.jsx(e.strong,{children:"binds"})," the latest committed ",t.jsx(e.strong,{children:"table version"}),` at that moment.\r
All reads for that query are resolved against that table version's data, even if new transactions are committed while the query is running.`]}),`
`,t.jsx(e.h4,{id:"isolation",children:"Isolation"}),`
`,t.jsxs(e.p,{children:["Delta Lake transactions are ",t.jsx(e.strong,{children:"isolated"}),"."]}),`
`,t.jsx(e.p,{children:`When a writer is ready to commit a transaction, Delta Lake checks the transaction log for new commits.\r
A conflict is detected when two transactions try to modify the same table snapshot.\r
If the table has been modified by another transaction, the writer will abort and retry on the latest snapshot instead.`}),`
`,t.jsxs(e.blockquote,{children:[`
`,t.jsxs(e.p,{children:["This mechanism is known as Delta Lake's ",t.jsx(e.strong,{children:"optimistic concurrency control"}),"."]}),`
`]}),`
`,t.jsx(e.h4,{id:"durability",children:"Durability"}),`
`,t.jsxs(e.p,{children:[`Data Durability is generally managed by cloud storage service providers.\r
In the case of Amazon S3, durability is generally achieved by saving `,t.jsx(e.strong,{children:"copies"})," of data in ",t.jsx(e.strong,{children:"different places"}),"."]}),`
`,t.jsxs(e.blockquote,{children:[`
`,t.jsx(e.p,{children:`Data is replicated automatically across multiple Availability Zones (AZs) within a region.\r
If one copy of an object is corrupted, S3 automatically repairs it using redundant copies.`}),`
`]})]})}function o(n={}){const{wrapper:e}=n.components||{};return e?t.jsx(e,{...n,children:t.jsx(a,{...n})}):a(n)}export{o as default,r as frontmatter,s as toc};
