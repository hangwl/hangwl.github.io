import{j as e}from"./index-BY1L9Kpq.js";const t=[{id:"what-is-amazon-s3",title:"What is Amazon S3?",level:2},{id:"bucket-types",title:"Bucket Types",level:3},{id:"general-purpose-buckets",title:"General Purpose Buckets",level:4},{id:"directory-buckets",title:"Directory Buckets",level:4},{id:"table-buckets",title:"Table Buckets",level:4},{id:"vector-buckets",title:"Vector Buckets",level:4},{id:"bucket-access-policies",title:"Bucket Access Policies",level:3},{id:"aws-identity-and-access-management-iam-policy",title:"AWS Identity and Access Management (IAM) Policy",level:4},{id:"amazon-s3-rest-api",title:"Amazon S3 REST API",level:3}],r={title:"Amazon S3"};function i(n){const s={a:"a",blockquote:"blockquote",code:"code",figure:"figure",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s.h2,{id:"what-is-amazon-s3",children:"What is Amazon S3?"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.a,{href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html",children:"Amazon Simple Storage Service (Amazon S3)"}),` is an object storage service similar to Google Cloud Storage.\r
As an object store, it does not have a true hierarchical file system. However, it can effectively act as one.`]}),`
`,e.jsxs(s.p,{children:["Data can be stored in S3 as ",e.jsx(s.strong,{children:"objects"}),", ",e.jsx(s.strong,{children:"hierarchical data"}),", or ",e.jsx(s.strong,{children:"tabular data"})," within ",e.jsx(s.strong,{children:"buckets"}),"."]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Objects"}),": Any file in a S3 bucket can be considered an object. Every object has a unique identifier known as an object key."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Buckets"}),": A bucket is a container for S3 objects similar to top-level directories for files on a hard drive. It should also have a unique name."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Hierarchical Data"}),': Files can be "nested" within parent folders via forward slashes e.g. ',e.jsx(s.code,{children:"folder_1/file.txt"}),". To list objects in the folder, we can use the prefix ",e.jsx(s.code,{children:"folder_1/"}),"."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Tabular Data"}),": Files organized in table format such as CSV or Parquet files."]}),`
`]}),`
`,e.jsx(s.h3,{id:"bucket-types",children:"Bucket Types"}),`
`,e.jsx(s.p,{children:"S3 buckets generally serve different use cases."}),`
`,e.jsx(s.h4,{id:"general-purpose-buckets",children:"General Purpose Buckets"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["Recommended for ",e.jsx(s.strong,{children:"most use cases"}),"."]}),`
`,e.jsxs(s.li,{children:["Objects can be redundantly stored across multiple Availability Zones which ensures data ",e.jsx(s.strong,{children:"availability"})," and ",e.jsx(s.strong,{children:"durability"}),"."]}),`
`]}),`
`,e.jsx(s.h4,{id:"directory-buckets",children:"Directory Buckets"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["Recommended for high performance workloads that require ",e.jsx(s.strong,{children:"low-latency"})," access to files."]}),`
`,e.jsxs(s.li,{children:["Also recommended for ",e.jsx(s.strong,{children:"data residency"})," use cases where data is required to be stored in a specific region."]}),`
`,e.jsxs(s.li,{children:["Objects are organized into ",e.jsx(s.strong,{children:"hierarchical"})," directories (prefixes) instead of the flat storage structure of general purpose buckets."]}),`
`]}),`
`,e.jsx(s.h4,{id:"table-buckets",children:"Table Buckets"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["S3 Table buckets can be used to ",e.jsx(s.strong,{children:"create and store tabular data (tables)"})," and metadata as objects to be used in ",e.jsx(s.strong,{children:"Apache Iceberg"})," supported analytics workloads."]}),`
`,e.jsxs(s.li,{children:["Table buckets integrate with AWS analytics services via ",e.jsx(s.strong,{children:"AWS Glue Data Catalog"}),"."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Automatic maintenance"})," is done to help reduce table storage costs."]}),`
`]}),`
`,e.jsx(s.h4,{id:"vector-buckets",children:"Vector Buckets"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["Vector buckets are a new type of S3 bucket built for the purpose of ",e.jsx(s.strong,{children:"storing vector indexes"})," that can be used to ",e.jsx(s.strong,{children:"query vector data"}),"."]}),`
`]}),`
`,e.jsx(s.h3,{id:"bucket-access-policies",children:"Bucket Access Policies"}),`
`,e.jsx(s.p,{children:"By setting proper bucket access policies, only users (even including authenticated users) with the required permissions can access them."}),`
`,e.jsx(s.h4,{id:"aws-identity-and-access-management-iam-policy",children:"AWS Identity and Access Management (IAM) Policy"}),`
`,e.jsxs(s.p,{children:["In AWS, an IAM policy is a ",e.jsx(s.strong,{children:"JSON document"})," that ",e.jsx(s.strong,{children:"defines permissions"})," that specify what ",e.jsx(s.strong,{children:"actions"})," are allowed on which ",e.jsx(s.strong,{children:"resources"}),", and under what ",e.jsx(s.strong,{children:"conditions"}),"."]}),`
`,e.jsx(s.p,{children:"When a user, role, or other principal makes a request to AWS, IAM evaluates the associated policies to determine if the request should be allowed or denied, enforcing fine-grained access control to AWS resources."}),`
`,e.jsxs(s.p,{children:["The following policy allows ",e.jsx(s.code,{children:"Akua"}),", a user in account ",e.jsx(s.code,{children:"123456789012"}),", ",e.jsx(s.code,{children:"s3:GetObject"}),", ",e.jsx(s.code,{children:"s3:GetBucketLocation"}),", and ",e.jsx(s.code,{children:"s3:ListBucket"})," Amazon S3 permissions on the ",e.jsx(s.code,{children:"amzn-s3-demo-bucket1"})," bucket."]}),`
`,e.jsx(s.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(s.pre,{style:{"--shiki-dark":"#e6edf3","--shiki-light":"#D4D4D4","--shiki-dark-bg":"#0d1117","--shiki-light-bg":"#1E1E1E"},tabIndex:"0","data-language":"JSON","data-theme":"github-dark-default dark-plus",children:e.jsxs(s.code,{"data-language":"JSON","data-theme":"github-dark-default dark-plus",style:{display:"grid"},children:[e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{children:"{"})}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{children:'    "Version": "2012-10-17",'})}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{children:'    "Id": "ExamplePolicy01",'})}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{children:'    "Statement": ['})}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{children:"        {"})}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{children:'            "Sid": "ExampleStatement01",'})}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{children:'            "Effect": "Allow",'})}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{children:'            "Principal": {'})}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{children:'                "AWS": "arn:aws:iam::123456789012:user/Akua"'})}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{children:"            },"})}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{children:'            "Action": ['})}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{children:'                "s3:GetObject",'})}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{children:'                "s3:GetBucketLocation",'})}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{children:'                "s3:ListBucket"'})}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{children:"            ],"})}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{children:'            "Resource": ['})}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{children:'                "arn:aws:s3:::amzn-s3-demo-bucket1/*",'})}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{children:'                "arn:aws:s3:::amzn-s3-demo-bucket1"'})}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{children:"            ]"})}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{children:"        }"})}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{children:"    ]"})}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{children:"}"})})]})})}),`
`,e.jsx(s.h3,{id:"amazon-s3-rest-api",children:"Amazon S3 REST API"}),`
`,e.jsxs(s.p,{children:["Amazon S3 REST API ",e.jsx(s.strong,{children:"allows programmatic interaction"})," with Amazon S3 buckets and objects using ",e.jsx(s.strong,{children:"standard HTTP methods"}),"."]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsx(s.p,{children:`As a Representational State Transfer (REST) API, it utilizes HTTP requests (GET, PUT, POST, DELETE) to perform operations on S3 resources,\r
making it a stateless protocol where the server does not retain client session information.`}),`
`]}),`
`,e.jsxs(s.p,{children:["Developers can make use of available ",e.jsx(s.strong,{children:"AWS SDK"})," libraries (",e.jsx(s.strong,{children:"Boto3"}),` for Python) to build applications more easily without having to deal\r
with having to manually compute the authentication signature and append it to each request for direct REST API calls.`]})]})}function c(n={}){const{wrapper:s}=n.components||{};return s?e.jsx(s,{...n,children:e.jsx(i,{...n})}):i(n)}export{c as default,r as frontmatter,t as toc};
