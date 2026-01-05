import{j as e}from"./index-BY1L9Kpq.js";const r=[{id:"technical-design-document-template",title:"Technical Design Document Template",level:1},{id:"document-control",title:"Document Control",level:2},{id:"version-history",title:"Version History",level:2},{id:"executive-summary",title:"Executive Summary",level:2},{id:"table-of-contents",title:"Table of Contents",level:2},{id:"introduction",title:"Introduction",level:2},{id:"purpose",title:"Purpose",level:3},{id:"scope",title:"Scope",level:3},{id:"definitions--acronyms",title:"Definitions & Acronyms",level:3},{id:"requirements-summary",title:"Requirements Summary",level:2},{id:"business-requirements",title:"Business Requirements",level:3},{id:"functional-requirements",title:"Functional Requirements",level:3},{id:"non-functional-requirements",title:"Non-Functional Requirements",level:3},{id:"solution-overview",title:"Solution Overview",level:2},{id:"high-level-design",title:"High-Level Design",level:3},{id:"key-design-decisions",title:"Key Design Decisions",level:3},{id:"technology-stack",title:"Technology Stack",level:3},{id:"architecture",title:"Architecture",level:2},{id:"component-diagram",title:"Component Diagram",level:3},{id:"component-descriptions",title:"Component Descriptions",level:3},{id:"sequence-diagrams",title:"Sequence Diagrams",level:3},{id:"data-design",title:"Data Design",level:2},{id:"data-model",title:"Data Model",level:3},{id:"entity-definitions",title:"Entity Definitions",level:3},{id:"data-flow",title:"Data Flow",level:3},{id:"data-retention",title:"Data Retention",level:3},{id:"integration-design",title:"Integration Design",level:2},{id:"external-integrations",title:"External Integrations",level:3},{id:"api-specifications",title:"API Specifications",level:3},{id:"security-design",title:"Security Design",level:2},{id:"authentication",title:"Authentication",level:3},{id:"authorization",title:"Authorization",level:3},{id:"data-protection",title:"Data Protection",level:3},{id:"security-controls",title:"Security Controls",level:3},{id:"infrastructure",title:"Infrastructure",level:2},{id:"deployment-architecture",title:"Deployment Architecture",level:3},{id:"scaling-strategy",title:"Scaling Strategy",level:3},{id:"disaster-recovery",title:"Disaster Recovery",level:3},{id:"non-functional-requirements-1",title:"Non-Functional Requirements",level:2},{id:"performance",title:"Performance",level:3},{id:"availability",title:"Availability",level:3},{id:"monitoring--alerting",title:"Monitoring & Alerting",level:3},{id:"risks--mitigations",title:"Risks & Mitigations",level:2},{id:"appendices",title:"Appendices",level:2},{id:"appendix-a-reference-documents",title:"Appendix A: Reference Documents",level:3},{id:"appendix-b-glossary",title:"Appendix B: Glossary",level:3},{id:"appendix-c-detailed-diagrams",title:"Appendix C: Detailed Diagrams",level:3},{id:"approval",title:"Approval",level:2}],d=void 0;function t(n){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",input:"input",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i.h1,{id:"technical-design-document-template",children:"Technical Design Document Template"}),`
`,e.jsx(i.h2,{id:"document-control",children:"Document Control"}),`
`,e.jsxs(i.table,{children:[e.jsx(i.thead,{children:e.jsxs(i.tr,{children:[e.jsx(i.th,{children:"Field"}),e.jsx(i.th,{children:"Details"})]})}),e.jsxs(i.tbody,{children:[e.jsxs(i.tr,{children:[e.jsx(i.td,{children:e.jsx(i.strong,{children:"Document Title"})}),e.jsx(i.td,{children:"[Solution Name] Technical Design"})]}),e.jsxs(i.tr,{children:[e.jsx(i.td,{children:e.jsx(i.strong,{children:"Version"})}),e.jsx(i.td,{children:"1.0"})]}),e.jsxs(i.tr,{children:[e.jsx(i.td,{children:e.jsx(i.strong,{children:"Author"})}),e.jsx(i.td,{children:"[Name]"})]}),e.jsxs(i.tr,{children:[e.jsx(i.td,{children:e.jsx(i.strong,{children:"Date"})}),e.jsx(i.td,{children:"[YYYY-MM-DD]"})]}),e.jsxs(i.tr,{children:[e.jsx(i.td,{children:e.jsx(i.strong,{children:"Status"})}),e.jsx(i.td,{children:"Draft / In Review / Approved"})]}),e.jsxs(i.tr,{children:[e.jsx(i.td,{children:e.jsx(i.strong,{children:"Reviewers"})}),e.jsx(i.td,{children:"[Names]"})]})]})]}),`
`,e.jsx(i.hr,{}),`
`,e.jsx(i.h2,{id:"version-history",children:"Version History"}),`
`,e.jsxs(i.table,{children:[e.jsx(i.thead,{children:e.jsxs(i.tr,{children:[e.jsx(i.th,{children:"Version"}),e.jsx(i.th,{children:"Date"}),e.jsx(i.th,{children:"Author"}),e.jsx(i.th,{children:"Changes"})]})}),e.jsxs(i.tbody,{children:[e.jsxs(i.tr,{children:[e.jsx(i.td,{children:"1.0"}),e.jsx(i.td,{children:"[Date]"}),e.jsx(i.td,{children:"[Name]"}),e.jsx(i.td,{children:"Initial draft"})]}),e.jsxs(i.tr,{children:[e.jsx(i.td,{}),e.jsx(i.td,{}),e.jsx(i.td,{}),e.jsx(i.td,{})]})]})]}),`
`,e.jsx(i.hr,{}),`
`,e.jsx(i.h2,{id:"executive-summary",children:"Executive Summary"}),`
`,e.jsx(i.p,{children:"[2-3 paragraph overview of the solution, key design decisions, and business value]"}),`
`,e.jsx(i.hr,{}),`
`,e.jsx(i.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,e.jsxs(i.ol,{children:[`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"#introduction",children:"Introduction"})}),`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"#requirements-summary",children:"Requirements Summary"})}),`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"#solution-overview",children:"Solution Overview"})}),`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"#architecture",children:"Architecture"})}),`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"#data-design",children:"Data Design"})}),`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"#integration-design",children:"Integration Design"})}),`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"#security-design",children:"Security Design"})}),`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"#infrastructure",children:"Infrastructure"})}),`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"#non-functional-requirements",children:"Non-Functional Requirements"})}),`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"#risks--mitigations",children:"Risks & Mitigations"})}),`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"#appendices",children:"Appendices"})}),`
`]}),`
`,e.jsx(i.hr,{}),`
`,e.jsx(i.h2,{id:"introduction",children:"Introduction"}),`
`,e.jsx(i.h3,{id:"purpose",children:"Purpose"}),`
`,e.jsx(i.p,{children:"[Why this document exists and who should read it]"}),`
`,e.jsx(i.h3,{id:"scope",children:"Scope"}),`
`,e.jsx(i.p,{children:"[What is covered and not covered in this design]"}),`
`,e.jsx(i.h3,{id:"definitions--acronyms",children:"Definitions & Acronyms"}),`
`,e.jsxs(i.table,{children:[e.jsx(i.thead,{children:e.jsxs(i.tr,{children:[e.jsx(i.th,{children:"Term"}),e.jsx(i.th,{children:"Definition"})]})}),e.jsxs(i.tbody,{children:[e.jsxs(i.tr,{children:[e.jsx(i.td,{children:"[Term]"}),e.jsx(i.td,{children:"[Definition]"})]}),e.jsxs(i.tr,{children:[e.jsx(i.td,{children:"[Acronym]"}),e.jsx(i.td,{children:"[Full form]"})]})]})]}),`
`,e.jsx(i.hr,{}),`
`,e.jsx(i.h2,{id:"requirements-summary",children:"Requirements Summary"}),`
`,e.jsx(i.h3,{id:"business-requirements",children:"Business Requirements"}),`
`,e.jsxs(i.table,{children:[e.jsx(i.thead,{children:e.jsxs(i.tr,{children:[e.jsx(i.th,{children:"ID"}),e.jsx(i.th,{children:"Requirement"}),e.jsx(i.th,{children:"Priority"}),e.jsx(i.th,{children:"Source"})]})}),e.jsxs(i.tbody,{children:[e.jsxs(i.tr,{children:[e.jsx(i.td,{children:"BR-01"}),e.jsx(i.td,{children:"[Requirement]"}),e.jsx(i.td,{children:"Must/Should/Could"}),e.jsx(i.td,{children:"[Source]"})]}),e.jsxs(i.tr,{children:[e.jsx(i.td,{children:"BR-02"}),e.jsx(i.td,{children:"[Requirement]"}),e.jsx(i.td,{}),e.jsx(i.td,{})]})]})]}),`
`,e.jsx(i.h3,{id:"functional-requirements",children:"Functional Requirements"}),`
`,e.jsxs(i.table,{children:[e.jsx(i.thead,{children:e.jsxs(i.tr,{children:[e.jsx(i.th,{children:"ID"}),e.jsx(i.th,{children:"Requirement"}),e.jsx(i.th,{children:"Priority"})]})}),e.jsxs(i.tbody,{children:[e.jsxs(i.tr,{children:[e.jsx(i.td,{children:"FR-01"}),e.jsx(i.td,{children:"[Requirement]"}),e.jsx(i.td,{children:"Must"})]}),e.jsxs(i.tr,{children:[e.jsx(i.td,{children:"FR-02"}),e.jsx(i.td,{children:"[Requirement]"}),e.jsx(i.td,{children:"Should"})]})]})]}),`
`,e.jsx(i.h3,{id:"non-functional-requirements",children:"Non-Functional Requirements"}),`
`,e.jsxs(i.table,{children:[e.jsx(i.thead,{children:e.jsxs(i.tr,{children:[e.jsx(i.th,{children:"ID"}),e.jsx(i.th,{children:"Category"}),e.jsx(i.th,{children:"Requirement"}),e.jsx(i.th,{children:"Target"})]})}),e.jsxs(i.tbody,{children:[e.jsxs(i.tr,{children:[e.jsx(i.td,{children:"NFR-01"}),e.jsx(i.td,{children:"Performance"}),e.jsx(i.td,{children:"[Requirement]"}),e.jsx(i.td,{children:"[Metric]"})]}),e.jsxs(i.tr,{children:[e.jsx(i.td,{children:"NFR-02"}),e.jsx(i.td,{children:"Availability"}),e.jsx(i.td,{children:"[Requirement]"}),e.jsx(i.td,{children:"[%]"})]}),e.jsxs(i.tr,{children:[e.jsx(i.td,{children:"NFR-03"}),e.jsx(i.td,{children:"Security"}),e.jsx(i.td,{children:"[Requirement]"}),e.jsx(i.td,{children:"[Standard]"})]})]})]}),`
`,e.jsx(i.hr,{}),`
`,e.jsx(i.h2,{id:"solution-overview",children:"Solution Overview"}),`
`,e.jsx(i.h3,{id:"high-level-design",children:"High-Level Design"}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{children:`[ASCII diagram or description of solution components]

┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│   Client    │────▶│   API       │────▶│  Database   │
│   Layer     │     │   Layer     │     │   Layer     │
└─────────────┘     └─────────────┘     └─────────────┘
`})}),`
`,e.jsx(i.h3,{id:"key-design-decisions",children:"Key Design Decisions"}),`
`,e.jsxs(i.table,{children:[e.jsx(i.thead,{children:e.jsxs(i.tr,{children:[e.jsx(i.th,{children:"#"}),e.jsx(i.th,{children:"Decision"}),e.jsx(i.th,{children:"Rationale"}),e.jsx(i.th,{children:"Alternatives Considered"})]})}),e.jsxs(i.tbody,{children:[e.jsxs(i.tr,{children:[e.jsx(i.td,{children:"1"}),e.jsx(i.td,{children:"[Decision]"}),e.jsx(i.td,{children:"[Why]"}),e.jsx(i.td,{children:"[Other options]"})]}),e.jsxs(i.tr,{children:[e.jsx(i.td,{children:"2"}),e.jsx(i.td,{children:"[Decision]"}),e.jsx(i.td,{children:"[Why]"}),e.jsx(i.td,{children:"[Other options]"})]})]})]}),`
`,e.jsx(i.h3,{id:"technology-stack",children:"Technology Stack"}),`
`,e.jsxs(i.table,{children:[e.jsx(i.thead,{children:e.jsxs(i.tr,{children:[e.jsx(i.th,{children:"Layer"}),e.jsx(i.th,{children:"Technology"}),e.jsx(i.th,{children:"Version"}),e.jsx(i.th,{children:"Justification"})]})}),e.jsxs(i.tbody,{children:[e.jsxs(i.tr,{children:[e.jsx(i.td,{children:"Frontend"}),e.jsx(i.td,{children:"[Tech]"}),e.jsx(i.td,{children:"[Ver]"}),e.jsx(i.td,{children:"[Why]"})]}),e.jsxs(i.tr,{children:[e.jsx(i.td,{children:"Backend"}),e.jsx(i.td,{children:"[Tech]"}),e.jsx(i.td,{children:"[Ver]"}),e.jsx(i.td,{children:"[Why]"})]}),e.jsxs(i.tr,{children:[e.jsx(i.td,{children:"Database"}),e.jsx(i.td,{children:"[Tech]"}),e.jsx(i.td,{children:"[Ver]"}),e.jsx(i.td,{children:"[Why]"})]}),e.jsxs(i.tr,{children:[e.jsx(i.td,{children:"Infrastructure"}),e.jsx(i.td,{children:"[Tech]"}),e.jsx(i.td,{children:"[Ver]"}),e.jsx(i.td,{children:"[Why]"})]})]})]}),`
`,e.jsx(i.hr,{}),`
`,e.jsx(i.h2,{id:"architecture",children:"Architecture"}),`
`,e.jsx(i.h3,{id:"component-diagram",children:"Component Diagram"}),`
`,e.jsx(i.p,{children:"[Detailed component breakdown]"}),`
`,e.jsx(i.h3,{id:"component-descriptions",children:"Component Descriptions"}),`
`,e.jsxs(i.table,{children:[e.jsx(i.thead,{children:e.jsxs(i.tr,{children:[e.jsx(i.th,{children:"Component"}),e.jsx(i.th,{children:"Responsibility"}),e.jsx(i.th,{children:"Technology"}),e.jsx(i.th,{children:"Owner"})]})}),e.jsxs(i.tbody,{children:[e.jsxs(i.tr,{children:[e.jsx(i.td,{children:"[Component 1]"}),e.jsx(i.td,{children:"[What it does]"}),e.jsx(i.td,{children:"[Tech]"}),e.jsx(i.td,{children:"[Team]"})]}),e.jsxs(i.tr,{children:[e.jsx(i.td,{children:"[Component 2]"}),e.jsx(i.td,{children:"[What it does]"}),e.jsx(i.td,{children:"[Tech]"}),e.jsx(i.td,{children:"[Team]"})]})]})]}),`
`,e.jsx(i.h3,{id:"sequence-diagrams",children:"Sequence Diagrams"}),`
`,e.jsx(i.p,{children:e.jsx(i.strong,{children:"Use Case: [Name]"})}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{children:`User -> Frontend: Action
Frontend -> API: Request
API -> Database: Query
Database -> API: Result
API -> Frontend: Response
Frontend -> User: Display
`})}),`
`,e.jsx(i.hr,{}),`
`,e.jsx(i.h2,{id:"data-design",children:"Data Design"}),`
`,e.jsx(i.h3,{id:"data-model",children:"Data Model"}),`
`,e.jsx(i.p,{children:"[Entity Relationship Diagram or description]"}),`
`,e.jsx(i.h3,{id:"entity-definitions",children:"Entity Definitions"}),`
`,e.jsx(i.p,{children:e.jsx(i.strong,{children:"Entity: [Name]"})}),`
`,e.jsxs(i.table,{children:[e.jsx(i.thead,{children:e.jsxs(i.tr,{children:[e.jsx(i.th,{children:"Field"}),e.jsx(i.th,{children:"Type"}),e.jsx(i.th,{children:"Constraints"}),e.jsx(i.th,{children:"Description"})]})}),e.jsxs(i.tbody,{children:[e.jsxs(i.tr,{children:[e.jsx(i.td,{children:"id"}),e.jsx(i.td,{children:"UUID"}),e.jsx(i.td,{children:"PK, NOT NULL"}),e.jsx(i.td,{children:"Unique identifier"})]}),e.jsxs(i.tr,{children:[e.jsx(i.td,{children:"[field]"}),e.jsx(i.td,{children:"[type]"}),e.jsx(i.td,{children:"[constraints]"}),e.jsx(i.td,{children:"[description]"})]})]})]}),`
`,e.jsx(i.h3,{id:"data-flow",children:"Data Flow"}),`
`,e.jsx(i.p,{children:"[How data moves through the system]"}),`
`,e.jsx(i.h3,{id:"data-retention",children:"Data Retention"}),`
`,e.jsxs(i.table,{children:[e.jsx(i.thead,{children:e.jsxs(i.tr,{children:[e.jsx(i.th,{children:"Data Type"}),e.jsx(i.th,{children:"Retention Period"}),e.jsx(i.th,{children:"Archive Strategy"})]})}),e.jsx(i.tbody,{children:e.jsxs(i.tr,{children:[e.jsx(i.td,{children:"[Type]"}),e.jsx(i.td,{children:"[Period]"}),e.jsx(i.td,{children:"[Strategy]"})]})})]}),`
`,e.jsx(i.hr,{}),`
`,e.jsx(i.h2,{id:"integration-design",children:"Integration Design"}),`
`,e.jsx(i.h3,{id:"external-integrations",children:"External Integrations"}),`
`,e.jsxs(i.table,{children:[e.jsx(i.thead,{children:e.jsxs(i.tr,{children:[e.jsx(i.th,{children:"System"}),e.jsx(i.th,{children:"Direction"}),e.jsx(i.th,{children:"Protocol"}),e.jsx(i.th,{children:"Frequency"}),e.jsx(i.th,{children:"Data"})]})}),e.jsx(i.tbody,{children:e.jsxs(i.tr,{children:[e.jsx(i.td,{children:"[System]"}),e.jsx(i.td,{children:"Inbound/Outbound"}),e.jsx(i.td,{children:"REST/SFTP/etc"}),e.jsx(i.td,{children:"Real-time/Batch"}),e.jsx(i.td,{children:"[Description]"})]})})]}),`
`,e.jsx(i.h3,{id:"api-specifications",children:"API Specifications"}),`
`,e.jsx(i.p,{children:e.jsx(i.strong,{children:"Endpoint: [Name]"})}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Method: GET/POST/PUT/DELETE"}),`
`,e.jsxs(i.li,{children:["Path: ",e.jsx(i.code,{children:"/api/v1/resource"})]}),`
`,e.jsx(i.li,{children:"Request: [Schema]"}),`
`,e.jsx(i.li,{children:"Response: [Schema]"}),`
`,e.jsx(i.li,{children:"Error Codes: [List]"}),`
`]}),`
`,e.jsx(i.hr,{}),`
`,e.jsx(i.h2,{id:"security-design",children:"Security Design"}),`
`,e.jsx(i.h3,{id:"authentication",children:"Authentication"}),`
`,e.jsx(i.p,{children:"[How users/systems authenticate]"}),`
`,e.jsx(i.h3,{id:"authorization",children:"Authorization"}),`
`,e.jsx(i.p,{children:"[How access is controlled]"}),`
`,e.jsx(i.h3,{id:"data-protection",children:"Data Protection"}),`
`,e.jsxs(i.table,{children:[e.jsx(i.thead,{children:e.jsxs(i.tr,{children:[e.jsx(i.th,{children:"Data Classification"}),e.jsx(i.th,{children:"Protection Mechanism"})]})}),e.jsxs(i.tbody,{children:[e.jsxs(i.tr,{children:[e.jsx(i.td,{children:"Confidential"}),e.jsx(i.td,{children:"[Encryption, access controls]"})]}),e.jsxs(i.tr,{children:[e.jsx(i.td,{children:"Internal"}),e.jsx(i.td,{children:"[Controls]"})]})]})]}),`
`,e.jsx(i.h3,{id:"security-controls",children:"Security Controls"}),`
`,e.jsxs(i.ul,{className:"contains-task-list",children:[`
`,e.jsxs(i.li,{className:"task-list-item",children:[e.jsx(i.input,{type:"checkbox",disabled:!0})," ","Encryption at rest"]}),`
`,e.jsxs(i.li,{className:"task-list-item",children:[e.jsx(i.input,{type:"checkbox",disabled:!0})," ","Encryption in transit"]}),`
`,e.jsxs(i.li,{className:"task-list-item",children:[e.jsx(i.input,{type:"checkbox",disabled:!0})," ","Input validation"]}),`
`,e.jsxs(i.li,{className:"task-list-item",children:[e.jsx(i.input,{type:"checkbox",disabled:!0})," ","Audit logging"]}),`
`,e.jsxs(i.li,{className:"task-list-item",children:[e.jsx(i.input,{type:"checkbox",disabled:!0})," ","Rate limiting"]}),`
`]}),`
`,e.jsx(i.hr,{}),`
`,e.jsx(i.h2,{id:"infrastructure",children:"Infrastructure"}),`
`,e.jsx(i.h3,{id:"deployment-architecture",children:"Deployment Architecture"}),`
`,e.jsxs(i.table,{children:[e.jsx(i.thead,{children:e.jsxs(i.tr,{children:[e.jsx(i.th,{children:"Environment"}),e.jsx(i.th,{children:"Purpose"}),e.jsx(i.th,{children:"Configuration"})]})}),e.jsxs(i.tbody,{children:[e.jsxs(i.tr,{children:[e.jsx(i.td,{children:"Development"}),e.jsx(i.td,{children:"Dev/test"}),e.jsx(i.td,{children:"[Specs]"})]}),e.jsxs(i.tr,{children:[e.jsx(i.td,{children:"Staging"}),e.jsx(i.td,{children:"UAT"}),e.jsx(i.td,{children:"[Specs]"})]}),e.jsxs(i.tr,{children:[e.jsx(i.td,{children:"Production"}),e.jsx(i.td,{children:"Live"}),e.jsx(i.td,{children:"[Specs]"})]})]})]}),`
`,e.jsx(i.h3,{id:"scaling-strategy",children:"Scaling Strategy"}),`
`,e.jsx(i.p,{children:"[How the system scales]"}),`
`,e.jsx(i.h3,{id:"disaster-recovery",children:"Disaster Recovery"}),`
`,e.jsxs(i.table,{children:[e.jsx(i.thead,{children:e.jsxs(i.tr,{children:[e.jsx(i.th,{children:"Metric"}),e.jsx(i.th,{children:"Target"})]})}),e.jsxs(i.tbody,{children:[e.jsxs(i.tr,{children:[e.jsx(i.td,{children:"RTO"}),e.jsx(i.td,{children:"[Time]"})]}),e.jsxs(i.tr,{children:[e.jsx(i.td,{children:"RPO"}),e.jsx(i.td,{children:"[Time]"})]})]})]}),`
`,e.jsx(i.hr,{}),`
`,e.jsx(i.h2,{id:"non-functional-requirements-1",children:"Non-Functional Requirements"}),`
`,e.jsx(i.h3,{id:"performance",children:"Performance"}),`
`,e.jsxs(i.table,{children:[e.jsx(i.thead,{children:e.jsxs(i.tr,{children:[e.jsx(i.th,{children:"Metric"}),e.jsx(i.th,{children:"Target"}),e.jsx(i.th,{children:"Measurement"})]})}),e.jsxs(i.tbody,{children:[e.jsxs(i.tr,{children:[e.jsx(i.td,{children:"Response time"}),e.jsx(i.td,{children:"< X ms"}),e.jsx(i.td,{children:"P95"})]}),e.jsxs(i.tr,{children:[e.jsx(i.td,{children:"Throughput"}),e.jsx(i.td,{children:"X TPS"}),e.jsx(i.td,{children:"Peak"})]}),e.jsxs(i.tr,{children:[e.jsx(i.td,{children:"Concurrent users"}),e.jsx(i.td,{children:"X"}),e.jsx(i.td,{children:"Max"})]})]})]}),`
`,e.jsx(i.h3,{id:"availability",children:"Availability"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Target: [X]% uptime"}),`
`,e.jsx(i.li,{children:"Maintenance windows: [Schedule]"}),`
`]}),`
`,e.jsx(i.h3,{id:"monitoring--alerting",children:"Monitoring & Alerting"}),`
`,e.jsxs(i.table,{children:[e.jsx(i.thead,{children:e.jsxs(i.tr,{children:[e.jsx(i.th,{children:"Metric"}),e.jsx(i.th,{children:"Threshold"}),e.jsx(i.th,{children:"Alert"})]})}),e.jsx(i.tbody,{children:e.jsxs(i.tr,{children:[e.jsx(i.td,{children:"[Metric]"}),e.jsx(i.td,{children:"[Value]"}),e.jsx(i.td,{children:"[Action]"})]})})]}),`
`,e.jsx(i.hr,{}),`
`,e.jsx(i.h2,{id:"risks--mitigations",children:"Risks & Mitigations"}),`
`,e.jsxs(i.table,{children:[e.jsx(i.thead,{children:e.jsxs(i.tr,{children:[e.jsx(i.th,{children:"#"}),e.jsx(i.th,{children:"Risk"}),e.jsx(i.th,{children:"Probability"}),e.jsx(i.th,{children:"Impact"}),e.jsx(i.th,{children:"Mitigation"})]})}),e.jsxs(i.tbody,{children:[e.jsxs(i.tr,{children:[e.jsx(i.td,{children:"1"}),e.jsx(i.td,{children:"[Risk]"}),e.jsx(i.td,{children:"H/M/L"}),e.jsx(i.td,{children:"H/M/L"}),e.jsx(i.td,{children:"[Mitigation]"})]}),e.jsxs(i.tr,{children:[e.jsx(i.td,{children:"2"}),e.jsx(i.td,{children:"[Risk]"}),e.jsx(i.td,{children:"H/M/L"}),e.jsx(i.td,{children:"H/M/L"}),e.jsx(i.td,{children:"[Mitigation]"})]})]})]}),`
`,e.jsx(i.hr,{}),`
`,e.jsx(i.h2,{id:"appendices",children:"Appendices"}),`
`,e.jsx(i.h3,{id:"appendix-a-reference-documents",children:"Appendix A: Reference Documents"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"[Document 1]"}),`
`,e.jsx(i.li,{children:"[Document 2]"}),`
`]}),`
`,e.jsx(i.h3,{id:"appendix-b-glossary",children:"Appendix B: Glossary"}),`
`,e.jsx(i.h3,{id:"appendix-c-detailed-diagrams",children:"Appendix C: Detailed Diagrams"}),`
`,e.jsx(i.hr,{}),`
`,e.jsx(i.h2,{id:"approval",children:"Approval"}),`
`,e.jsxs(i.table,{children:[e.jsx(i.thead,{children:e.jsxs(i.tr,{children:[e.jsx(i.th,{children:"Role"}),e.jsx(i.th,{children:"Name"}),e.jsx(i.th,{children:"Signature"}),e.jsx(i.th,{children:"Date"})]})}),e.jsxs(i.tbody,{children:[e.jsxs(i.tr,{children:[e.jsx(i.td,{children:"Technical Lead"}),e.jsx(i.td,{}),e.jsx(i.td,{}),e.jsx(i.td,{})]}),e.jsxs(i.tr,{children:[e.jsx(i.td,{children:"Architect"}),e.jsx(i.td,{}),e.jsx(i.td,{}),e.jsx(i.td,{})]}),e.jsxs(i.tr,{children:[e.jsx(i.td,{children:"Project Manager"}),e.jsx(i.td,{}),e.jsx(i.td,{}),e.jsx(i.td,{})]})]})]})]})}function l(n={}){const{wrapper:i}=n.components||{};return i?e.jsx(i,{...n,children:e.jsx(t,{...n})}):t(n)}export{l as default,d as frontmatter,r as toc};
