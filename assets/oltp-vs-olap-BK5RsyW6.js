import{j as e}from"./index-DmIt1YIB.js";const a=[{id:"introduction",title:"Introduction",level:2},{id:"oltp",title:"OLTP",level:2},{id:"third-normal-form-3nf",title:"Third Normal Form (3NF)",level:3},{id:"olap",title:"OLAP",level:2},{id:"star-schema",title:"Star Schema",level:3},{id:"table-optimizations-reads",title:"Table Optimizations (READS)",level:2},{id:"indexing",title:"Indexing",level:3},{id:"partitioning",title:"Partitioning",level:3},{id:"materialized-views",title:"Materialized Views",level:3}],r={title:"OLTP vs OLAP"};function t(s){const n={a:"a",blockquote:"blockquote",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"introduction",children:"Introduction"}),`
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
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:`The addition of an intermediate data lake staging layer is often used as a cost-effective strategy to decouple OLTP and OLAP systems.\r
Object storage systems like S3 and Google Cloud Storage are cheap and durable, and they can be used to store raw data from OLTP systems that have yet to be processed.\r
When needed, ETL pipelines can be used to transform and load the data into OLAP systems.`}),`
`]}),`
`,e.jsx(n.h2,{id:"oltp",children:"OLTP"}),`
`,e.jsxs(n.p,{children:["OLTP systems are write-heavy and its data models are ",e.jsx(n.strong,{children:"normalized"}),` to minimize data redundancy and to optimize write operations.\r
Typically, they are normalized to the `,e.jsx(n.strong,{children:e.jsx(n.a,{href:"https://www.geeksforgeeks.org/dbms/third-normal-form-3nf/",children:"Third Normal Form (3NF)"})})," within a ",e.jsx(n.strong,{children:"relational database"}),"."]}),`
`,e.jsx(n.h3,{id:"third-normal-form-3nf",children:"Third Normal Form (3NF)"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.a,{href:"https://www.geeksforgeeks.org/dbms/third-normal-form-3nf/",children:"Third Normal Form (3NF)"})," builds on the First (1NF) and Second (2NF) Normal Forms:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Atomic Values & No Repeating Groups"}),": Each column must contain indivisible values, and there should be no repeating groups of columns."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"No Partial Dependencies"}),": Non-key attributes should not be dependent on part of a composite key."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"No Transitive Dependency for Non-Key Attributes"}),": Non-key attributes should only depend directly on the primary key."]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"/images/OLTP_ERD.png",alt:"3NF Data Model Example"})}),`
`,e.jsx(n.h2,{id:"olap",children:"OLAP"}),`
`,e.jsxs(n.p,{children:["OLAP systems act as ",e.jsx(n.strong,{children:"data warehouses"}),` for organizations that depend on its data for analysis and reporting.\r
Within them, `,e.jsx(n.strong,{children:"data marts"})," can be built to serve different departments."]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:`A data mart is a strategic data layer built on top of OLAP systems (typically data warehouses) to serve specific business domain needs.\r
They are essentially smaller, more focused databases decoupled from the central data warehouse.`}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"OLAP data models"})," generally make use of the ",e.jsx(n.strong,{children:"Star Schema"})," which is easier to implement and understand in contrast to normalized data models that usually contain many tables and joins."]}),`
`,e.jsx(n.h3,{id:"star-schema",children:"Star Schema"}),`
`,e.jsxs(n.p,{children:["A Star Schema is used to denormalize business data into ",e.jsx(n.strong,{children:"dimensions"})," (like time and product) and ",e.jsx(n.strong,{children:"facts"}),` (like transactions in amounts and quantities).\r
This approach trades data redundancy for increased query speeds.`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["A star schema has a single ",e.jsx(n.strong,{children:"fact table"}),' in the center, containing business "facts" (e.g. transaction amounts and quantities).']}),`
`,e.jsxs(n.li,{children:["The fact table connects to multiple other ",e.jsx(n.strong,{children:"dimension tables"}),' along "dimensions" that hold context (e.g. time and product details).']}),`
`,e.jsx(n.li,{children:"Star schemas enable users to slice and dice the data however they see fit, typically by joining two or more fact tables and dimension tables together."}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"/images/OLAP_ERD.png",alt:"Star Schema Data Model Example"})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:`To design a star schema data model, we always want to start by thinking about the "grain" of the data.\r
The grain is the most detailed level at which the data needs to be to answer the business question at hand.\r
We can rollup the data to higher levels of detail if needed, but cannot drilldown to lower levels of detail if the grain is too coarse.`}),`
`]}),`
`,e.jsx(n.h2,{id:"table-optimizations-reads",children:"Table Optimizations (READS)"}),`
`,e.jsx(n.p,{children:"The following table optimization strategies are used to improve query speeds for both OLTP and OLAP systems."}),`
`,e.jsx(n.h3,{id:"indexing",children:"Indexing"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Faster lookups"})," in exchange for a ",e.jsx(n.strong,{children:"small write overhead"}),"."]}),`
`,e.jsx(n.li,{children:"We should always index primary keys, and fields that are frequently used in filter conditions."}),`
`]}),`
`,e.jsx(n.h3,{id:"partitioning",children:"Partitioning"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Faster queries"})," in exchange for a ",e.jsx(n.strong,{children:"small write overhead"})," to create a new partition."]}),`
`,e.jsxs(n.li,{children:["Simplifies ",e.jsx(n.strong,{children:"data archival and deletion"})," operations."]}),`
`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:`Note however that partitioning an existing table can be resource-intensive if the table is large and contains billions of rows.\r
This is because partitioning requires a full scan of the table to create the partitions.`}),`
`]}),`
`,e.jsx(n.h3,{id:"materialized-views",children:"Materialized Views"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Materialized views are database objects that stores the ",e.jsx(n.strong,{children:"precomputed results"})," of a query as a physical table."]}),`
`,e.jsxs(n.li,{children:["This trades some data staleness for ",e.jsx(n.strong,{children:"faster query speeds"})," for complex, resource-intensive queries."]}),`
`]})]})}function o(s={}){const{wrapper:n}=s.components||{};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{o as default,r as frontmatter,a as toc};
