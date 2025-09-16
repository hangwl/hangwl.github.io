import{j as e}from"./index-CVieuz28.js";const r={title:"Delta Lake"};function a(n){const t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",strong:"strong",...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.h2,{children:"Introduction"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.a,{href:"https://delta.io/",children:"Delta Lake"}),` is a storage layer framework for lakehouse architectures commonly built on Amazon S3.\r
It addresses many of the shortcomings of traditional data lakes such as `,e.jsx(t.strong,{children:"data corruption"})," and ",e.jsx(t.strong,{children:"inconsistency"}),"."]}),`
`,e.jsx(t.h2,{children:"Delta Tables"}),`
`,e.jsxs(t.p,{children:["Delta Tables extends the capabilities of ",e.jsx(t.a,{href:"https://parquet.apache.org/",children:"Apache Parquet"})," with ",e.jsx(t.strong,{children:"transactional"})," and ",e.jsx(t.strong,{children:"metadata"})," features."]}),`
`,e.jsx(t.h3,{children:"Transactional features"}),`
`,e.jsxs(t.p,{children:["Delta Lake transactions are ",e.jsx(t.strong,{children:"ACID"})," compliant via ",e.jsx(t.code,{children:"_delta_log"})," ",e.jsx(t.strong,{children:"transaction logs"}),"."]}),`
`,e.jsx(t.h4,{children:"Atomicity"}),`
`,e.jsxs(t.p,{children:[`In a traditional data lake, a write operation that fails midway can leave the data in a corrupt or inconsistent state.\r
Delta Lake's transaction logs ensures that every write operation is `,e.jsx(t.strong,{children:"atomic"}),", meaning that it ",e.jsx(t.strong,{children:"either fully succeeds or fully fails"}),`.\r
This is orchestrated via transaction logs that record all file additions and removals for a transaction.`]}),`
`,e.jsx(t.h4,{children:"Consistency"}),`
`,e.jsxs(t.p,{children:["In a Delta Lake, queries are guaranteed to always see a ",e.jsx(t.strong,{children:"consistent"}),", ",e.jsx(t.strong,{children:"unchanging snapshot"}),` of the data, even if other transactions are writing to the same table at the same time.\r
This happens because when a query starts, it `,e.jsx(t.strong,{children:"binds"})," the latest committed ",e.jsx(t.strong,{children:"table version"}),` at that moment.\r
All reads for that query are resolved against that table version's data, even if new transactions are committed while the query is running.`]}),`
`,e.jsx(t.h4,{children:"Isolation"}),`
`,e.jsxs(t.p,{children:["Delta Lake transactions are ",e.jsx(t.strong,{children:"isolated"}),"."]}),`
`,e.jsx(t.p,{children:`When a writer is ready to commit a transaction, Delta Lake checks the transaction log for new commits.\r
A conflict is detected when two transactions try to modify the same table snapshot.\r
If the table has been modified by another transaction, the writer will abort and retry on the latest snapshot instead.`}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsxs(t.p,{children:["This mechanism is known as Delta Lake's ",e.jsx(t.strong,{children:"optimistic concurrency control"}),"."]}),`
`]}),`
`,e.jsx(t.h4,{children:"Durability"}),`
`,e.jsxs(t.p,{children:[`Data Durability is generally managed by cloud storage service providers.\r
In the case of Amazon S3, durability is generally achieved by saving `,e.jsx(t.strong,{children:"copies"})," of data in ",e.jsx(t.strong,{children:"different places"}),"."]}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsx(t.p,{children:`Data is replicated automatically across multiple Availability Zones (AZs) within a region.\r
If one copy of an object is corrupted, S3 automatically repairs it using redundant copies.`}),`
`]})]})}function i(n={}){const{wrapper:t}=n.components||{};return t?e.jsx(t,{...n,children:e.jsx(a,{...n})}):a(n)}export{i as default,r as frontmatter};
