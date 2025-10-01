import{j as e}from"./index-CtAT4ExP.js";const r={title:"Amazon EMR",links:["amazon-s3","delta-lake"]};function t(s){const n={a:"a",blockquote:"blockquote",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{children:"What is Amazon EMR?"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-what-is-emr.html",children:"Amazon EMR (Elastic MapReduce)"})," is a ",e.jsx(n.strong,{children:"fully-managed"}),", ",e.jsx(n.strong,{children:"cloud-based platform"})," that ",e.jsx(n.strong,{children:"simplifies"})," running large-scale ",e.jsx(n.strong,{children:"distributed big data processing"})," frameworks such as Apache Spark or Apache Hadoop."]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"Apart from being primarily used to process and analyze data, Amazon EMR can also be used to transform and move large amounts of data from one datastore to another."}),`
`]}),`
`,e.jsx("div",{class:"video-container",children:e.jsx("iframe",{src:"https://www.youtube.com/embed/QuwaBOESGiU",title:"An introduction to Amazon EMR - Amazon Web Services",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen",referrerpolicy:"strict-origin-when-cross-origin",allowfullscreen:!0})}),`
`,e.jsx(n.h2,{children:"Benefits of using Amazon EMR"}),`
`,e.jsxs(n.p,{children:["The benefits of using Amazon EMR are listed on their ",e.jsx(n.a,{href:"https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-overview-benefits.html",children:"website"}),"."]}),`
`,e.jsxs(n.p,{children:["I believe most people are interested in the ",e.jsx(n.strong,{children:"cost-savings"}),", as well as the ",e.jsx(n.strong,{children:"flexibility and scalability"})," the platform provides."]}),`
`,e.jsx(n.h3,{children:"Cost-Savings"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"No need to setup on-premise resources"}),`
`,e.jsx(n.li,{children:"Pay-per-use pricing model"}),`
`]}),`
`,e.jsx(n.h3,{children:"Flexibility and Scalability"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Clusters can be automatically scaled up or down depending on computing needs"}),`
`,e.jsx(n.li,{children:`The EMR File System (EMRFS) allows Amazon S3 to be used as a data layer for applications running on the cluster.
This means that compute and storage are separated, but the data can still be persisted.
This also means they can be scaled independently.`}),`
`]})]})}function i(s={}){const{wrapper:n}=s.components||{};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{i as default,r as frontmatter};
