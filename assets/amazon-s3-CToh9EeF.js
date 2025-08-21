import{j as e}from"./index-B1qFIi4-.js";const t={title:"Amazon S3"};function r(n){const s={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s.h2,{children:"What is Amazon S3?"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.a,{href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html",children:"Amazon Simple Storage Service (Amazon S3)"}),` is an object storage service similar to Google Cloud Storage.\r
As an object store, it does not have a true hierarchical file system. However, it can effectively act as one.`]}),`
`,e.jsxs(s.p,{children:["Data can be stored in S3 as ",e.jsx(s.strong,{children:"objects"}),", ",e.jsx(s.strong,{children:"hierarchical data"}),", or ",e.jsx(s.strong,{children:"tabular data"})," within ",e.jsx(s.strong,{children:"buckets"}),"."]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Objects"}),": Any file in a S3 bucket can be considered an object. Every object has a unique identifier known as an object key."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Buckets"}),": A bucket is a container for S3 objects similar to top-level directories for files on a hard drive. It should also have a unique name."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Hierarchical Data"}),': Files can be "nested" within parent folders via forward slashes e.g. ',e.jsx(s.code,{children:"folder_1/file.txt"}),". To list objects in the folder, we can use the prefix ",e.jsx(s.code,{children:"folder_1/"}),"."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Tabular Data"}),": Files organized in table format such as CSV or Parquet files."]}),`
`]}),`
`,e.jsx(s.h3,{children:"Bucket Types"}),`
`,e.jsx(s.p,{children:"Amazon S3 supports 4 types of buckets, each providing their own special features for different use cases."}),`
`,e.jsx(s.h4,{children:"General Purpose Buckets"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Recommended for most use cases."}),`
`,e.jsx(s.li,{children:"Objects can be redundantly stored across multiple Availability Zones which ensures data availability and durability."}),`
`]}),`
`,e.jsx(s.h4,{children:"Directory Buckets"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["Recommended for high performance workloads that require ",e.jsx(s.strong,{children:"low-latency"})," access to files."]}),`
`,e.jsxs(s.li,{children:["Also recommended for ",e.jsx(s.strong,{children:"data residency"})," use cases where data is required to be stored in a specific region."]}),`
`,e.jsx(s.li,{children:"Objects are organized into hierarchical directories (prefixes) instead of the flat storage structure of general purpose buckets."}),`
`]}),`
`,e.jsx(s.h4,{children:"Table Buckets"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"New bucket type which stores data for S3 Tables in Apache Iceberg format."}),`
`]}),`
`,e.jsx(s.h4,{children:"Vector Buckets"}),`
`,e.jsx(s.h3,{children:"Bucket Access Policies"}),`
`,e.jsx(s.h3,{children:"Amazon S3 REST API"}),`
`,e.jsx(s.p,{children:"Can be used to fetch S3 objects programmatically."})]})}function c(n={}){const{wrapper:s}=n.components||{};return s?e.jsx(s,{...n,children:e.jsx(r,{...n})}):r(n)}export{c as default,t as frontmatter};
