import{j as e}from"./index-RVLXh9cB.js";const a={title:"OLTP vs OLAP"};function t(s){const n={a:"a",blockquote:"blockquote",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{children:"Introduction"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Online Transaction Processing (OLTP)"})," and ",e.jsx(n.strong,{children:"Online Analytical Processing (OLAP)"})," are data processing systems designed for different purposes that can be run in parallel."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["OLTP is optimized for transactional processing (",e.jsx(n.strong,{children:"WRITES"}),")"]}),`
`,e.jsxs(n.li,{children:["OLAP is optimized for complex data analysis and reporting (",e.jsx(n.strong,{children:"READS"}),")"]}),`
`]}),`
`,e.jsxs(n.p,{children:["The two systems are usually connected by a process known as ",e.jsx(n.strong,{children:"ETL (Extract, Transform, Load)"}),". Major cloud providers offer fully managed services that make building and running ETL pipelines much easier:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"AWS"}),": ",e.jsx(n.a,{href:"https://aws.amazon.com/glue/",children:"AWS Glue"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Google Cloud"}),": ",e.jsx(n.a,{href:"https://cloud.google.com/products/dataflow?hl=en",children:"Cloud Dataflow"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Azure"}),": ",e.jsx(n.a,{href:"https://learn.microsoft.com/en-us/azure/data-factory/introduction",children:"Azure Data Factory"})]}),`
`]}),`
`,e.jsx(n.h2,{children:"OLTP"}),`
`,e.jsxs(n.p,{children:["OLTP systems are write-heavy and its data models are ",e.jsx(n.strong,{children:"normalized"}),` to minimize data redundancy and to optimize write operations.\r
Typically, they are normalized to the `,e.jsx(n.strong,{children:e.jsx(n.a,{href:"https://www.geeksforgeeks.org/dbms/third-normal-form-3nf/",children:"Third Normal Form (3NF)"})})," within a ",e.jsx(n.strong,{children:"relational database"}),"."]}),`
`,e.jsx(n.h3,{children:"Third Normal Form (3NF)"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.a,{href:"https://www.geeksforgeeks.org/dbms/third-normal-form-3nf/",children:"Third Normal Form (3NF)"})," builds on the First (1NF) and Second (2NF) Normal Forms:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Atomic Values & No Repeating Groups"}),": Each column must contain indivisible values, and there should be no repeating groups of columns."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"No Partial Dependencies"}),": Non-key attributes should not be dependent on part of a composite key."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"No Transitive Dependency for Non-Key Attributes"}),": Non-key attributes should only depend directly on the primary key."]}),`
`]}),`
`,e.jsx(n.h2,{children:"OLAP"}),`
`,e.jsxs(n.p,{children:["OLAP systems act as ",e.jsx(n.strong,{children:"data warehouses"}),` for organizations that depend on its data for analysis and reporting.\r
Within them, `,e.jsx(n.strong,{children:"data marts"})," can be built to serve different departments."]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:`A data mart is a strategic data layer built on top of OLAP systems (typically data warehouses) to serve specific business domain needs.\r
They are essentially smaller, more focused databases decoupled from the central data warehouse.`}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"OLAP data models"})," generally make use of the ",e.jsx(n.strong,{children:"Star Schema"})," which is easier to implement and understand in contrast to normalized data models that usually contain many tables and joins."]}),`
`,e.jsx(n.h3,{children:"Star Schema"}),`
`,e.jsxs(n.p,{children:["A Star Schema is used to denormalize business data into ",e.jsx(n.strong,{children:"dimensions"})," (like time and product) and ",e.jsx(n.strong,{children:"facts"}),` (like transactions in amounts and quantities).\r
This approach adds data redundancy for increased query speeds.`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:'A star schema has a single fact table in the center, containing business "facts" (like transaction amounts and quantities).'}),`
`,e.jsx(n.li,{children:'The fact table connects to multiple other dimension tables along "dimensions" like time, or product.'}),`
`,e.jsx(n.li,{children:"Star schemas enable users to slice and dice the data however they see fit, typically by joining two or more fact tables and dimension tables together."}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"/images/star-schema-2x.png",alt:"Star Schema Example"})})]})}function i(s={}){const{wrapper:n}=s.components||{};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{i as default,a as frontmatter};
