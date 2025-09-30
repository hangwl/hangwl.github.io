import{j as e}from"./index-1jHvJRAh.js";const a={title:"Event-Driven MLOps Pipeline (AWS)",links:["oltp-vs-olap","amazon-s3"]};function s(t){const n={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",p:"p",strong:"strong",...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{children:"Introduction"}),`
`,e.jsxs(n.p,{children:[`Cloud-native MLOps pipelines leverage the power of cloud computing to build, deploy, and manage machine learning models more efficiently.
This approach integrates key MLOps principles from `,e.jsx(n.strong,{children:"automation"}),", ",e.jsx(n.strong,{children:"version control"}),", and ",e.jsx(n.strong,{children:"continuous integration and delivery (CI/CD)"}),`.
Many cloud services offer fully-managed services that make it easier to build and run `,e.jsx(n.strong,{children:"scalable"}),", and ",e.jsx(n.strong,{children:"cost-effective"})," MLOps pipelines."]}),`
`,e.jsx(n.h2,{children:"Systems Diagram Example"}),`
`,e.jsxs(n.p,{children:["The following systems diagram illustrates the components of an ",e.jsx(n.strong,{children:"Event-Driven ML Inference to BI pipeline"}),`.
The system automates the entire model inference lifecycle from model execution to data consumption,
ensuring that fresh insights are continuously available for downstream analytics.`]}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"/images/aws-mlops-systems-diagram.png",alt:"AWS MLOps Pipeline"})}),`
`,e.jsx(n.h3,{children:"Components"}),`
`,e.jsx(n.h4,{children:"Scheduler"}),`
`,e.jsxs(n.p,{children:["The process begins with ",e.jsx(n.strong,{children:"Amazon EventBridge"})," as the scheduler which is can be configured to trigger an inference job at a specific time or interval."]}),`
`,e.jsx(n.h4,{children:"Orchestrator"}),`
`,e.jsxs(n.p,{children:["The scheduled event activates the ",e.jsx(n.strong,{children:"AWS Step Functions"}),` orchestrator which is designed to manage complex multi-step workflows.
Its duty is to monitor and ensure that each workflow component executes in the correct sequence.
When the orchestrator detects an error, it will automatically retry the failed component or take an appropriate action based on the error.`]}),`
`,e.jsx(n.h4,{children:"Kubernetes Cluster"}),`
`,e.jsxs(n.p,{children:['When the "Model Inference Execution" step is reached, an action will be triggered to dispatch a ',e.jsx(n.strong,{children:"Kubernetes Job or a Pod"})," within the ",e.jsx(n.strong,{children:"Amazon EKS cluster"}),"."]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"A Kubernetes Job is a higher-level object that manages one or more Pods to ensure a task runs to completion. A Pod is the smallest and most fundamental unit of compute in Kubernetes."}),`
`]}),`
`,e.jsx(n.p,{children:`The Step Functions state machine would define the EKS configuration, such as the container image to use, necessary environment variables,
and any command-line arguments the container needs to exceute the inference.`}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"AWS Step Functions effectively acts as a command center, telling EKS what to run and how to run it."}),`
`]}),`
`,e.jsxs(n.p,{children:["Before deployment, a machine learning model along with all its required dependencies (e.g. Python libraries, model weights, data pre-processing scripts) is packaged into a ",e.jsx(n.strong,{children:"Docker container image"}),`.
The container image serves as a self-contained, portable execution environment.
When the orchestrator dispatches the task, EKS pulls this specific container image from a container registry (like Amazon ECR).`]}),`
`,e.jsx(n.p,{children:`EKS then launches one or more "dedicated containers" from this image on its underlying compute instances (EC2 nodes).
Each container is isolated, ensuring that the model runs in a consistent and predictable environment, regardless of the host it's running on.`}),`
`,e.jsx(n.h4,{children:"Model Inference Container"}),`
`,e.jsx(n.p,{children:`Once a container starts, it executes the pre-defined entry point or command. This command typically initiates the model's inference process.
After the required input data has been loaded, any necessary data pre-processing will be performed.
The pre-processed data will then be fed to the loaded machine learning model to generate predictions or classifications.`}),`
`,e.jsxs(n.p,{children:["This execution is ",e.jsx(n.strong,{children:"highly scalable"}),` as it can be easily distributed across multiple containers running on different EC2 nodes.
If a large batch of data needs processing, EKS can spin up multiple identical containers concurrently to process different subnets of the data in parallel,
significantly speeding up the overall inference time.`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[`To pull data from either S3 or Redshift, we can leverage the Boto3 SDK.
Boto3 offers methods such as `,e.jsx(n.code,{children:"download_file()"})," and ",e.jsx(n.code,{children:"get_object()"}),` to directly pull data from an S3 bucket into a container.
To pull data directly from Redshift, we can make use of the `,e.jsx(n.code,{children:"redshift-data"})," client to execute SQL queries on a data warehouse cluster."]}),`
`]}),`
`,e.jsx(n.h4,{children:"Data Lake"}),`
`,e.jsx(n.p,{children:"Once the model completes its inference, the resulting outputs are stored in S3."}),`
`,e.jsx(n.h4,{children:"Data Loading Function"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"AWS Lambda"}),` is a serverless compute service that runs code in response to events.
When a new inference output is detected in S3, an AWS Lambda data loading function can be triggered to insert data into Redshift.`]}),`
`,e.jsx(n.p,{children:`If a large number of model outputs are written to S3 simultaneously, the S3 event can trigger multiple, concurrent invocations of the Lambda function.
AWS Lambda automatically scales up to handle this increased load and scales down to zero when the work is done.`}),`
`,e.jsxs(n.p,{children:["To optimize the data loading process, AWS Lambda can be configured to initiate Redshift's native bulk loading mechanism via the ",e.jsx(n.code,{children:"COPY"}),` command.
This tells Redshift to pull the data directly from the S3 files and load them into a specified table.`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Redshift's ",e.jsx(n.code,{children:"COPY"}),` command is designed to leverage its Massively Parallel Processing (MPP) architecture.
It can read and load multiple data files in parallel from S3 across all of its compute nodes, making it the fastest and most cost-effective way to get data into redshift.`]}),`
`]}),`
`,e.jsx(n.h4,{children:"Data Warehouse"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Amazon Redshift"}),` is a fully managed, petabyte-scale data warehouse service that is optimized for analytical workloads.
Unlike a traditional database that handles transactional data, Redshift is designed to perform complex queries on massive datasets,
making it ideal for business intelligence and data analytics.`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"Using a feature called Redshift Spectrum, we can even run SQL queries directly on data stored within S3."}),`
`]}),`
`,e.jsx(n.h4,{children:"BI Tools"}),`
`,e.jsxs(n.p,{children:["Tools like ",e.jsx(n.strong,{children:"Tableau"}),", ",e.jsx(n.strong,{children:"Power BI"}),", and ",e.jsx(n.strong,{children:"Amazon QuickSight"}),` can connect directly to Redshift using standard JDBC/ODBC drivers.
Analysts can use these tools to build dashboards and reports by querying the data directly in Redshift.`]})]})}function o(t={}){const{wrapper:n}=t.components||{};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{o as default,a as frontmatter};
