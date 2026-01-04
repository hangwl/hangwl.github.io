import{j as e}from"./index-BKgolIEe.js";const r=[{id:"introduction",title:"Introduction",level:2},{id:"typical-vector-database-operations",title:"Typical Vector Database Operations",level:2}],i={title:"Vector Databases",links:["approximate-nearest-neighbors","chunking"]};function a(n){const t={h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.h2,{id:"introduction",children:"Introduction"}),`
`,e.jsxs(t.p,{children:["Vector databases are databases ",e.jsx(t.strong,{children:"optimized to store and search through huge quantities of high-dimensional vector data"}),`.\r
Some may also be optimized for tasks like building proximity graphs that enable fast approximate nearest neighbor searches.`]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Weaviate"})," is a popular open-source vector database that can be run both locally or in the cloud."]}),`
`,e.jsx(t.h2,{id:"typical-vector-database-operations",children:"Typical Vector Database Operations"}),`
`,e.jsx(t.p,{children:"Typically, vector database include the following operations:"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"Database Setup"}),`
`,e.jsx(t.li,{children:"Document Loading"}),`
`,e.jsx(t.li,{children:"Insertion of sparse vectors for keyword search"}),`
`,e.jsx(t.li,{children:"Insertion of dense vectors for semantic search"}),`
`,e.jsx(t.li,{children:"Generation of Hierarchical Navigable Small World (HNSW) index for approximate nearest neighbor search"}),`
`,e.jsx(t.li,{children:"Document Search"}),`
`]})]})}function s(n={}){const{wrapper:t}=n.components||{};return t?e.jsx(t,{...n,children:e.jsx(a,{...n})}):a(n)}export{s as default,i as frontmatter,r as toc};
