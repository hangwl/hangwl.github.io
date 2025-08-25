import{j as e}from"./index-RVLXh9cB.js";const o={title:"Vector Databases",links:["approximate-nearest-neighbors","chunking"]};function r(t){const n={h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{children:"Introduction"}),`
`,e.jsxs(n.p,{children:["Vector databases are databases ",e.jsx(n.strong,{children:"optimized to store and search through huge quantities of high-dimensional vector data"}),`.\r
Some may also be optimized for tasks like building proximity graphs that enable fast approximate nearest neighbor searches.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Weaviate"})," is a popular open-source vector database that can be run both locally or in the cloud."]}),`
`,e.jsx(n.h2,{children:"Typical Vector Database Operations"}),`
`,e.jsx(n.p,{children:"Typically, vector database include the following operations:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Database Setup"}),`
`,e.jsx(n.li,{children:"Document Loading"}),`
`,e.jsx(n.li,{children:"Insertion of sparse vectors for keyword search"}),`
`,e.jsx(n.li,{children:"Insertion of dense vectors for semantic search"}),`
`,e.jsx(n.li,{children:"Generation of Hierarchical Navigable Small World (HNSW) index for approximate nearest neighbor search"}),`
`,e.jsx(n.li,{children:"Document Search"}),`
`]})]})}function s(t={}){const{wrapper:n}=t.components||{};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}export{s as default,o as frontmatter};
