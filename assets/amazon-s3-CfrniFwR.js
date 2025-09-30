import{j as e}from"./index-DXXDdCrE.js";const r={title:"Amazon S3"};function a(s){const n={a:"a",blockquote:"blockquote",code:"code",figure:"figure",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{children:"What is Amazon S3?"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html",children:"Amazon Simple Storage Service (Amazon S3)"}),` is an object storage service similar to Google Cloud Storage.
As an object store, it does not have a true hierarchical file system. However, it can effectively act as one.`]}),`
`,e.jsxs(n.p,{children:["Data can be stored in S3 as ",e.jsx(n.strong,{children:"objects"}),", ",e.jsx(n.strong,{children:"hierarchical data"}),", or ",e.jsx(n.strong,{children:"tabular data"})," within ",e.jsx(n.strong,{children:"buckets"}),"."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Objects"}),": Any file in a S3 bucket can be considered an object. Every object has a unique identifier known as an object key."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Buckets"}),": A bucket is a container for S3 objects similar to top-level directories for files on a hard drive. It should also have a unique name."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Hierarchical Data"}),': Files can be "nested" within parent folders via forward slashes e.g. ',e.jsx(n.code,{children:"folder_1/file.txt"}),". To list objects in the folder, we can use the prefix ",e.jsx(n.code,{children:"folder_1/"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Tabular Data"}),": Files organized in table format such as CSV or Parquet files."]}),`
`]}),`
`,e.jsx(n.h3,{children:"Bucket Types"}),`
`,e.jsx(n.p,{children:"S3 buckets generally serve different use cases."}),`
`,e.jsx(n.h4,{children:"General Purpose Buckets"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Recommended for ",e.jsx(n.strong,{children:"most use cases"}),"."]}),`
`,e.jsxs(n.li,{children:["Objects can be redundantly stored across multiple Availability Zones which ensures data ",e.jsx(n.strong,{children:"availability"})," and ",e.jsx(n.strong,{children:"durability"}),"."]}),`
`]}),`
`,e.jsx(n.h4,{children:"Directory Buckets"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Recommended for high performance workloads that require ",e.jsx(n.strong,{children:"low-latency"})," access to files."]}),`
`,e.jsxs(n.li,{children:["Also recommended for ",e.jsx(n.strong,{children:"data residency"})," use cases where data is required to be stored in a specific region."]}),`
`,e.jsxs(n.li,{children:["Objects are organized into ",e.jsx(n.strong,{children:"hierarchical"})," directories (prefixes) instead of the flat storage structure of general purpose buckets."]}),`
`]}),`
`,e.jsx(n.h4,{children:"Table Buckets"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["S3 Table buckets can be used to ",e.jsx(n.strong,{children:"create and store tabular data (tables)"})," and metadata as objects to be used in ",e.jsx(n.strong,{children:"Apache Iceberg"})," supported analytics workloads."]}),`
`,e.jsxs(n.li,{children:["Table buckets integrate with AWS analytics services via ",e.jsx(n.strong,{children:"AWS Glue Data Catalog"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Automatic maintenance"})," is done to help reduce table storage costs."]}),`
`]}),`
`,e.jsx(n.h4,{children:"Vector Buckets"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Vector buckets are a new type of S3 bucket built for the purpose of ",e.jsx(n.strong,{children:"storing vector indexes"})," that can be used to ",e.jsx(n.strong,{children:"query vector data"}),"."]}),`
`]}),`
`,e.jsx(n.h3,{children:"Bucket Access Policies"}),`
`,e.jsx(n.p,{children:"By setting proper bucket access policies, only users (even including authenticated users) with the required permissions can access them."}),`
`,e.jsx(n.h4,{children:"AWS Identity and Access Management (IAM) Policy"}),`
`,e.jsxs(n.p,{children:["In AWS, an IAM policy is a ",e.jsx(n.strong,{children:"JSON document"})," that ",e.jsx(n.strong,{children:"defines permissions"})," that specify what ",e.jsx(n.strong,{children:"actions"})," are allowed on which ",e.jsx(n.strong,{children:"resources"}),", and under what ",e.jsx(n.strong,{children:"conditions"}),"."]}),`
`,e.jsx(n.p,{children:"When a user, role, or other principal makes a request to AWS, IAM evaluates the associated policies to determine if the request should be allowed or denied, enforcing fine-grained access control to AWS resources."}),`
`,e.jsxs(n.p,{children:["The following policy allows ",e.jsx(n.code,{children:"Akua"}),", a user in account ",e.jsx(n.code,{children:"123456789012"}),", ",e.jsx(n.code,{children:"s3:GetObject"}),", ",e.jsx(n.code,{children:"s3:GetBucketLocation"}),", and ",e.jsx(n.code,{children:"s3:ListBucket"})," Amazon S3 permissions on the ",e.jsx(n.code,{children:"amzn-s3-demo-bucket1"})," bucket."]}),`
`,e.jsx(n.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(n.pre,{style:{"--shiki-dark":"#e6edf3","--shiki-light":"#D4D4D4","--shiki-dark-bg":"#0d1117","--shiki-light-bg":"#1E1E1E"},tabIndex:"0","data-language":"JSON","data-theme":"github-dark-default dark-plus",children:e.jsxs(n.code,{"data-language":"JSON","data-theme":"github-dark-default dark-plus",style:{display:"grid"},children:[e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{children:"{"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{children:'    "Version": "2012-10-17",'})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{children:'    "Id": "ExamplePolicy01",'})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{children:'    "Statement": ['})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{children:"        {"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{children:'            "Sid": "ExampleStatement01",'})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{children:'            "Effect": "Allow",'})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{children:'            "Principal": {'})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{children:'                "AWS": "arn:aws:iam::123456789012:user/Akua"'})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{children:"            },"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{children:'            "Action": ['})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{children:'                "s3:GetObject",'})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{children:'                "s3:GetBucketLocation",'})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{children:'                "s3:ListBucket"'})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{children:"            ],"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{children:'            "Resource": ['})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{children:'                "arn:aws:s3:::amzn-s3-demo-bucket1/*",'})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{children:'                "arn:aws:s3:::amzn-s3-demo-bucket1"'})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{children:"            ]"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{children:"        }"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{children:"    ]"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{children:"}"})})]})})}),`
`,e.jsx(n.h3,{children:"Amazon S3 REST API"}),`
`,e.jsxs(n.p,{children:["Amazon S3 REST API ",e.jsx(n.strong,{children:"allows programmatic interaction"})," with Amazon S3 buckets and objects using ",e.jsx(n.strong,{children:"standard HTTP methods"}),"."]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:`As a Representational State Transfer (REST) API, it utilizes HTTP requests (GET, PUT, POST, DELETE) to perform operations on S3 resources,
making it a stateless protocol where the server does not retain client session information.`}),`
`]}),`
`,e.jsxs(n.p,{children:["Developers can make use of available ",e.jsx(n.strong,{children:"AWS SDK"})," libraries (",e.jsx(n.strong,{children:"Boto3"}),` for Python) to build applications more easily without having to deal
with having to manually compute the authentication signature and append it to each request for direct REST API calls.`]})]})}function t(s={}){const{wrapper:n}=s.components||{};return n?e.jsx(n,{...s,children:e.jsx(a,{...s})}):a(s)}export{t as default,r as frontmatter};
