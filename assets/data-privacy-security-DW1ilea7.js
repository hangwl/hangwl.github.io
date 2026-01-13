import{j as e}from"./index-895OKoX5.js";const l=[{id:"data-privacy-and-security",title:"Data Privacy and Security",level:1},{id:"overview",title:"Overview",level:2},{id:"regulatory-landscape",title:"Regulatory Landscape",level:2},{id:"key-regulations",title:"Key Regulations",level:3},{id:"singapore-pdpa-requirements",title:"Singapore PDPA Requirements",level:3},{id:"data-classification",title:"Data Classification",level:2},{id:"classification-levels",title:"Classification Levels",level:3},{id:"personal-data-categories",title:"Personal Data Categories",level:3},{id:"data-handling-requirements",title:"Data Handling Requirements",level:2},{id:"before-engagement",title:"Before Engagement",level:3},{id:"during-engagement",title:"During Engagement",level:3},{id:"after-engagement",title:"After Engagement",level:3},{id:"security-best-practices",title:"Security Best Practices",level:2},{id:"data-in-transit",title:"Data in Transit",level:3},{id:"data-at-rest",title:"Data at Rest",level:3},{id:"data-processing",title:"Data Processing",level:3},{id:"access-control",title:"Access Control",level:3},{id:"aiml-specific-considerations",title:"AI/ML Specific Considerations",level:2},{id:"model-development",title:"Model Development",level:3},{id:"model-deployment",title:"Model Deployment",level:3},{id:"incident-response",title:"Incident Response",level:2},{id:"if-data-breach-occurs",title:"If Data Breach Occurs",level:3},{id:"reporting-obligations",title:"Reporting Obligations",level:3},{id:"compliance-checklist",title:"Compliance Checklist",level:2},{id:"project-setup",title:"Project Setup",level:3},{id:"ongoing",title:"Ongoing",level:3},{id:"project-close",title:"Project Close",level:3},{id:"related-documents",title:"Related Documents",level:2}],r=void 0;function n(s){const i={a:"a",h1:"h1",h2:"h2",h3:"h3",hr:"hr",input:"input",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(i.h1,{id:"data-privacy-and-security",children:"Data Privacy and Security"}),`
`,e.jsx(i.h2,{id:"overview",children:"Overview"}),`
`,e.jsx(i.p,{children:"Data privacy and security are critical considerations for Data and AI engagements. This document outlines the requirements and best practices for handling client data responsibly."}),`
`,e.jsx(i.hr,{}),`
`,e.jsx(i.h2,{id:"regulatory-landscape",children:"Regulatory Landscape"}),`
`,e.jsx(i.h3,{id:"key-regulations",children:"Key Regulations"}),`
`,e.jsxs(i.table,{children:[e.jsx(i.thead,{children:e.jsxs(i.tr,{children:[e.jsx(i.th,{children:"Regulation"}),e.jsx(i.th,{children:"Jurisdiction"}),e.jsx(i.th,{children:"Key Requirements"})]})}),e.jsxs(i.tbody,{children:[e.jsxs(i.tr,{children:[e.jsx(i.td,{children:e.jsx(i.strong,{children:"PDPA"})}),e.jsx(i.td,{children:"Singapore"}),e.jsx(i.td,{children:"Consent, purpose limitation, data protection"})]}),e.jsxs(i.tr,{children:[e.jsx(i.td,{children:e.jsx(i.strong,{children:"GDPR"})}),e.jsx(i.td,{children:"EU/EEA"}),e.jsx(i.td,{children:"Broad data subject rights, strict processing rules"})]}),e.jsxs(i.tr,{children:[e.jsx(i.td,{children:e.jsx(i.strong,{children:"CCPA"})}),e.jsx(i.td,{children:"California, USA"}),e.jsx(i.td,{children:"Consumer rights, disclosure requirements"})]}),e.jsxs(i.tr,{children:[e.jsx(i.td,{children:e.jsx(i.strong,{children:"HIPAA"})}),e.jsx(i.td,{children:"USA (Healthcare)"}),e.jsx(i.td,{children:"PHI protection, security standards"})]}),e.jsxs(i.tr,{children:[e.jsx(i.td,{children:e.jsx(i.strong,{children:"PCI-DSS"})}),e.jsx(i.td,{children:"Global (Payment)"}),e.jsx(i.td,{children:"Cardholder data security"})]})]})]}),`
`,e.jsx(i.h3,{id:"singapore-pdpa-requirements",children:"Singapore PDPA Requirements"}),`
`,e.jsx(i.p,{children:"Key obligations under Personal Data Protection Act:"}),`
`,e.jsxs(i.ol,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Consent Obligation:"})," Obtain consent before collecting/using data"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Purpose Limitation:"})," Use data only for stated purposes"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Notification Obligation:"})," Inform individuals about purposes"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Access and Correction:"})," Allow individuals to access/correct data"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Accuracy Obligation:"})," Ensure data is accurate and complete"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Protection Obligation:"})," Protect data with reasonable security"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Retention Limitation:"})," Cease retention when no longer needed"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Transfer Limitation:"})," Ensure adequate protection for transfers"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Openness Obligation:"})," Make policies available"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Do Not Call:"})," Respect DNC registry"]}),`
`]}),`
`,e.jsx(i.hr,{}),`
`,e.jsx(i.h2,{id:"data-classification",children:"Data Classification"}),`
`,e.jsx(i.h3,{id:"classification-levels",children:"Classification Levels"}),`
`,e.jsxs(i.table,{children:[e.jsx(i.thead,{children:e.jsxs(i.tr,{children:[e.jsx(i.th,{children:"Level"}),e.jsx(i.th,{children:"Description"}),e.jsx(i.th,{children:"Examples"}),e.jsx(i.th,{children:"Handling"})]})}),e.jsxs(i.tbody,{children:[e.jsxs(i.tr,{children:[e.jsx(i.td,{children:e.jsx(i.strong,{children:"Restricted"})}),e.jsx(i.td,{children:"Highly sensitive, severe impact if disclosed"}),e.jsx(i.td,{children:"PII, health data, credentials"}),e.jsx(i.td,{children:"Encrypted, strict access"})]}),e.jsxs(i.tr,{children:[e.jsx(i.td,{children:e.jsx(i.strong,{children:"Confidential"})}),e.jsx(i.td,{children:"Sensitive business data"}),e.jsx(i.td,{children:"Financial data, strategy docs"}),e.jsx(i.td,{children:"Access controls, secure storage"})]}),e.jsxs(i.tr,{children:[e.jsx(i.td,{children:e.jsx(i.strong,{children:"Internal"})}),e.jsx(i.td,{children:"Internal use only"}),e.jsx(i.td,{children:"Policies, internal comms"}),e.jsx(i.td,{children:"Limited external sharing"})]}),e.jsxs(i.tr,{children:[e.jsx(i.td,{children:e.jsx(i.strong,{children:"Public"})}),e.jsx(i.td,{children:"Can be shared freely"}),e.jsx(i.td,{children:"Marketing materials"}),e.jsx(i.td,{children:"Standard handling"})]})]})]}),`
`,e.jsx(i.h3,{id:"personal-data-categories",children:"Personal Data Categories"}),`
`,e.jsxs(i.table,{children:[e.jsx(i.thead,{children:e.jsxs(i.tr,{children:[e.jsx(i.th,{children:"Category"}),e.jsx(i.th,{children:"Examples"}),e.jsx(i.th,{children:"Sensitivity"})]})}),e.jsxs(i.tbody,{children:[e.jsxs(i.tr,{children:[e.jsx(i.td,{children:e.jsx(i.strong,{children:"PII"})}),e.jsx(i.td,{children:"Name, NRIC, address, phone"}),e.jsx(i.td,{children:"High"})]}),e.jsxs(i.tr,{children:[e.jsx(i.td,{children:e.jsx(i.strong,{children:"Financial"})}),e.jsx(i.td,{children:"Bank accounts, income"}),e.jsx(i.td,{children:"High"})]}),e.jsxs(i.tr,{children:[e.jsx(i.td,{children:e.jsx(i.strong,{children:"Health"})}),e.jsx(i.td,{children:"Medical records, conditions"}),e.jsx(i.td,{children:"Very High"})]}),e.jsxs(i.tr,{children:[e.jsx(i.td,{children:e.jsx(i.strong,{children:"Biometric"})}),e.jsx(i.td,{children:"Fingerprints, facial data"}),e.jsx(i.td,{children:"Very High"})]}),e.jsxs(i.tr,{children:[e.jsx(i.td,{children:e.jsx(i.strong,{children:"Behavioral"})}),e.jsx(i.td,{children:"Browsing history, purchases"}),e.jsx(i.td,{children:"Medium-High"})]}),e.jsxs(i.tr,{children:[e.jsx(i.td,{children:e.jsx(i.strong,{children:"Location"})}),e.jsx(i.td,{children:"GPS data, travel history"}),e.jsx(i.td,{children:"Medium-High"})]})]})]}),`
`,e.jsx(i.hr,{}),`
`,e.jsx(i.h2,{id:"data-handling-requirements",children:"Data Handling Requirements"}),`
`,e.jsx(i.h3,{id:"before-engagement",children:"Before Engagement"}),`
`,e.jsxs(i.ul,{className:"contains-task-list",children:[`
`,e.jsxs(i.li,{className:"task-list-item",children:[e.jsx(i.input,{type:"checkbox",disabled:!0})," ","Identify data types and sensitivity"]}),`
`,e.jsxs(i.li,{className:"task-list-item",children:[e.jsx(i.input,{type:"checkbox",disabled:!0})," ","Review client data policies"]}),`
`,e.jsxs(i.li,{className:"task-list-item",children:[e.jsx(i.input,{type:"checkbox",disabled:!0})," ","Assess regulatory requirements"]}),`
`,e.jsxs(i.li,{className:"task-list-item",children:[e.jsx(i.input,{type:"checkbox",disabled:!0})," ","Define data handling protocols"]}),`
`,e.jsxs(i.li,{className:"task-list-item",children:[e.jsx(i.input,{type:"checkbox",disabled:!0})," ","Execute data protection agreement (if required)"]}),`
`,e.jsxs(i.li,{className:"task-list-item",children:[e.jsx(i.input,{type:"checkbox",disabled:!0})," ","Complete security assessment"]}),`
`]}),`
`,e.jsx(i.h3,{id:"during-engagement",children:"During Engagement"}),`
`,e.jsxs(i.ul,{className:"contains-task-list",children:[`
`,e.jsxs(i.li,{className:"task-list-item",children:[e.jsx(i.input,{type:"checkbox",disabled:!0})," ","Access only necessary data"]}),`
`,e.jsxs(i.li,{className:"task-list-item",children:[e.jsx(i.input,{type:"checkbox",disabled:!0})," ","Use secure channels for data transfer"]}),`
`,e.jsxs(i.li,{className:"task-list-item",children:[e.jsx(i.input,{type:"checkbox",disabled:!0})," ","Store data in approved locations only"]}),`
`,e.jsxs(i.li,{className:"task-list-item",children:[e.jsx(i.input,{type:"checkbox",disabled:!0})," ","Apply appropriate access controls"]}),`
`,e.jsxs(i.li,{className:"task-list-item",children:[e.jsx(i.input,{type:"checkbox",disabled:!0})," ","Log data access and processing"]}),`
`,e.jsxs(i.li,{className:"task-list-item",children:[e.jsx(i.input,{type:"checkbox",disabled:!0})," ","Report any incidents immediately"]}),`
`]}),`
`,e.jsx(i.h3,{id:"after-engagement",children:"After Engagement"}),`
`,e.jsxs(i.ul,{className:"contains-task-list",children:[`
`,e.jsxs(i.li,{className:"task-list-item",children:[e.jsx(i.input,{type:"checkbox",disabled:!0})," ","Return or securely delete client data"]}),`
`,e.jsxs(i.li,{className:"task-list-item",children:[e.jsx(i.input,{type:"checkbox",disabled:!0})," ","Confirm data destruction with client"]}),`
`,e.jsxs(i.li,{className:"task-list-item",children:[e.jsx(i.input,{type:"checkbox",disabled:!0})," ","Document data handling summary"]}),`
`,e.jsxs(i.li,{className:"task-list-item",children:[e.jsx(i.input,{type:"checkbox",disabled:!0})," ","Archive only what is required"]}),`
`,e.jsxs(i.li,{className:"task-list-item",children:[e.jsx(i.input,{type:"checkbox",disabled:!0})," ","Maintain audit trail"]}),`
`]}),`
`,e.jsx(i.hr,{}),`
`,e.jsx(i.h2,{id:"security-best-practices",children:"Security Best Practices"}),`
`,e.jsx(i.h3,{id:"data-in-transit",children:"Data in Transit"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Use encrypted connections (TLS/SSL)"}),`
`,e.jsx(i.li,{children:"Avoid email for sensitive data"}),`
`,e.jsx(i.li,{children:"Use secure file transfer (SFTP, encrypted cloud)"}),`
`,e.jsx(i.li,{children:"Verify recipient before sending"}),`
`]}),`
`,e.jsx(i.h3,{id:"data-at-rest",children:"Data at Rest"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Encrypt sensitive data"}),`
`,e.jsx(i.li,{children:"Use approved storage locations"}),`
`,e.jsx(i.li,{children:"Apply access controls"}),`
`,e.jsx(i.li,{children:"Enable audit logging"}),`
`,e.jsx(i.li,{children:"Regular backup"}),`
`]}),`
`,e.jsx(i.h3,{id:"data-processing",children:"Data Processing"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Minimize data collected"}),`
`,e.jsx(i.li,{children:"Anonymize/pseudonymize where possible"}),`
`,e.jsx(i.li,{children:"Apply data masking in non-production"}),`
`,e.jsx(i.li,{children:"Document processing activities"}),`
`,e.jsx(i.li,{children:"Validate data accuracy"}),`
`]}),`
`,e.jsx(i.h3,{id:"access-control",children:"Access Control"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Principle of least privilege"}),`
`,e.jsx(i.li,{children:"Role-based access"}),`
`,e.jsx(i.li,{children:"Regular access reviews"}),`
`,e.jsx(i.li,{children:"Prompt deprovisioning"}),`
`,e.jsx(i.li,{children:"Multi-factor authentication"}),`
`]}),`
`,e.jsx(i.hr,{}),`
`,e.jsx(i.h2,{id:"aiml-specific-considerations",children:"AI/ML Specific Considerations"}),`
`,e.jsx(i.h3,{id:"model-development",children:"Model Development"}),`
`,e.jsxs(i.table,{children:[e.jsx(i.thead,{children:e.jsxs(i.tr,{children:[e.jsx(i.th,{children:"Consideration"}),e.jsx(i.th,{children:"Best Practice"})]})}),e.jsxs(i.tbody,{children:[e.jsxs(i.tr,{children:[e.jsx(i.td,{children:e.jsx(i.strong,{children:"Training Data"})}),e.jsx(i.td,{children:"Ensure proper consent and licensing"})]}),e.jsxs(i.tr,{children:[e.jsx(i.td,{children:e.jsx(i.strong,{children:"Bias"})}),e.jsx(i.td,{children:"Test for and mitigate discriminatory outcomes"})]}),e.jsxs(i.tr,{children:[e.jsx(i.td,{children:e.jsx(i.strong,{children:"Explainability"})}),e.jsx(i.td,{children:"Document model decision factors"})]}),e.jsxs(i.tr,{children:[e.jsx(i.td,{children:e.jsx(i.strong,{children:"Data Minimization"})}),e.jsx(i.td,{children:"Use only necessary features"})]}),e.jsxs(i.tr,{children:[e.jsx(i.td,{children:e.jsx(i.strong,{children:"Synthetic Data"})}),e.jsx(i.td,{children:"Consider for sensitive use cases"})]})]})]}),`
`,e.jsx(i.h3,{id:"model-deployment",children:"Model Deployment"}),`
`,e.jsxs(i.table,{children:[e.jsx(i.thead,{children:e.jsxs(i.tr,{children:[e.jsx(i.th,{children:"Consideration"}),e.jsx(i.th,{children:"Best Practice"})]})}),e.jsxs(i.tbody,{children:[e.jsxs(i.tr,{children:[e.jsx(i.td,{children:e.jsx(i.strong,{children:"Inference Data"})}),e.jsx(i.td,{children:"Protect input data to models"})]}),e.jsxs(i.tr,{children:[e.jsx(i.td,{children:e.jsx(i.strong,{children:"Model Security"})}),e.jsx(i.td,{children:"Protect model from extraction/attack"})]}),e.jsxs(i.tr,{children:[e.jsx(i.td,{children:e.jsx(i.strong,{children:"Logging"})}),e.jsx(i.td,{children:"Log predictions for audit"})]}),e.jsxs(i.tr,{children:[e.jsx(i.td,{children:e.jsx(i.strong,{children:"Monitoring"})}),e.jsx(i.td,{children:"Detect data drift and anomalies"})]})]})]}),`
`,e.jsx(i.hr,{}),`
`,e.jsx(i.h2,{id:"incident-response",children:"Incident Response"}),`
`,e.jsx(i.h3,{id:"if-data-breach-occurs",children:"If Data Breach Occurs"}),`
`,e.jsxs(i.ol,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Contain:"})," Stop the breach, secure systems"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Assess:"})," Determine scope and impact"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Report:"})," Notify engagement leadership immediately"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Notify:"})," Inform client as required"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Remediate:"})," Fix vulnerabilities"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Document:"})," Record incident details"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Review:"})," Conduct post-incident analysis"]}),`
`]}),`
`,e.jsx(i.h3,{id:"reporting-obligations",children:"Reporting Obligations"}),`
`,e.jsxs(i.table,{children:[e.jsx(i.thead,{children:e.jsxs(i.tr,{children:[e.jsx(i.th,{children:"Regulation"}),e.jsx(i.th,{children:"Reporting Requirement"})]})}),e.jsxs(i.tbody,{children:[e.jsxs(i.tr,{children:[e.jsx(i.td,{children:"PDPA (Singapore)"}),e.jsx(i.td,{children:"Notify PDPC within 3 days if significant harm"})]}),e.jsxs(i.tr,{children:[e.jsx(i.td,{children:"GDPR"}),e.jsx(i.td,{children:"Notify within 72 hours"})]}),e.jsxs(i.tr,{children:[e.jsx(i.td,{children:"Client Contract"}),e.jsx(i.td,{children:"Per contractual terms"})]})]})]}),`
`,e.jsx(i.hr,{}),`
`,e.jsx(i.h2,{id:"compliance-checklist",children:"Compliance Checklist"}),`
`,e.jsx(i.h3,{id:"project-setup",children:"Project Setup"}),`
`,e.jsxs(i.ul,{className:"contains-task-list",children:[`
`,e.jsxs(i.li,{className:"task-list-item",children:[e.jsx(i.input,{type:"checkbox",disabled:!0})," ","Data classification completed"]}),`
`,e.jsxs(i.li,{className:"task-list-item",children:[e.jsx(i.input,{type:"checkbox",disabled:!0})," ","Regulatory requirements identified"]}),`
`,e.jsxs(i.li,{className:"task-list-item",children:[e.jsx(i.input,{type:"checkbox",disabled:!0})," ","Data protection impact assessment (if required)"]}),`
`,e.jsxs(i.li,{className:"task-list-item",children:[e.jsx(i.input,{type:"checkbox",disabled:!0})," ","Data handling protocols defined"]}),`
`,e.jsxs(i.li,{className:"task-list-item",children:[e.jsx(i.input,{type:"checkbox",disabled:!0})," ","Team trained on requirements"]}),`
`]}),`
`,e.jsx(i.h3,{id:"ongoing",children:"Ongoing"}),`
`,e.jsxs(i.ul,{className:"contains-task-list",children:[`
`,e.jsxs(i.li,{className:"task-list-item",children:[e.jsx(i.input,{type:"checkbox",disabled:!0})," ","Access controls in place"]}),`
`,e.jsxs(i.li,{className:"task-list-item",children:[e.jsx(i.input,{type:"checkbox",disabled:!0})," ","Data handling protocols followed"]}),`
`,e.jsxs(i.li,{className:"task-list-item",children:[e.jsx(i.input,{type:"checkbox",disabled:!0})," ","Incidents reported promptly"]}),`
`,e.jsxs(i.li,{className:"task-list-item",children:[e.jsx(i.input,{type:"checkbox",disabled:!0})," ","Regular compliance reviews"]}),`
`]}),`
`,e.jsx(i.h3,{id:"project-close",children:"Project Close"}),`
`,e.jsxs(i.ul,{className:"contains-task-list",children:[`
`,e.jsxs(i.li,{className:"task-list-item",children:[e.jsx(i.input,{type:"checkbox",disabled:!0})," ","Data returned/destroyed"]}),`
`,e.jsxs(i.li,{className:"task-list-item",children:[e.jsx(i.input,{type:"checkbox",disabled:!0})," ","Destruction confirmation obtained"]}),`
`,e.jsxs(i.li,{className:"task-list-item",children:[e.jsx(i.input,{type:"checkbox",disabled:!0})," ","Compliance documentation archived"]}),`
`]}),`
`,e.jsx(i.hr,{}),`
`,e.jsx(i.h2,{id:"related-documents",children:"Related Documents"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"../05-quality-and-compliance/risk-management",children:"Risk Management"})}),`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"../05-quality-and-compliance/quality-assurance",children:"Quality Assurance"})}),`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"../07-templates/data-handling-checklist",children:"Data Handling Checklist"})}),`
`]})]})}function d(s={}){const{wrapper:i}=s.components||{};return i?e.jsx(i,{...s,children:e.jsx(n,{...s})}):n(s)}export{d as default,r as frontmatter,l as toc};
