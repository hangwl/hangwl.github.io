import{j as e}from"./index-BKgolIEe.js";const r=[{id:"introduction",title:"Introduction",level:2},{id:"certificate-components",title:"Certificate Components",level:2},{id:"certificate-types",title:"Certificate Types",level:2},{id:"certificate-authorities-cas",title:"Certificate Authorities (CAs)",level:2},{id:"free-cas",title:"Free CAs",level:3},{id:"commercial-cas",title:"Commercial CAs",level:3},{id:"certificate-chain",title:"Certificate Chain",level:2},{id:"obtaining-certificates",title:"Obtaining Certificates",level:2},{id:"lets-encrypt-automated",title:"Let's Encrypt (Automated)",level:3},{id:"manual-process",title:"Manual Process",level:3},{id:"certificate-management",title:"Certificate Management",level:2},{id:"renewal",title:"Renewal",level:3},{id:"revocation",title:"Revocation",level:3},{id:"common-issues",title:"Common Issues",level:2},{id:"certificate-errors",title:"Certificate Errors",level:3},{id:"solutions",title:"Solutions",level:3},{id:"best-practices",title:"Best Practices",level:2}],l={title:"SSL/TLS Certificates",links:["https","ssl-tls"]};function n(s){const i={code:"code",figure:"figure",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(i.h2,{id:"introduction",children:"Introduction"}),`
`,e.jsx(i.p,{children:"SSL/TLS certificates are digital certificates that authenticate a website's identity and enable encrypted connections. They contain a public key and information about the certificate holder."}),`
`,e.jsx(i.h2,{id:"certificate-components",children:"Certificate Components"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Subject"}),": Domain name(s) the certificate covers"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Issuer"}),": Certificate Authority that signed it"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Public Key"}),": Used for encryption and key exchange"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Validity Period"}),": Start and expiration dates"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Signature"}),": CA's digital signature"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Serial Number"}),": Unique identifier"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Extensions"}),": Additional info (SANs, key usage, etc.)"]}),`
`]}),`
`,e.jsx(i.h2,{id:"certificate-types",children:"Certificate Types"}),`
`,e.jsxs(i.table,{children:[e.jsx(i.thead,{children:e.jsxs(i.tr,{children:[e.jsx(i.th,{children:"Type"}),e.jsx(i.th,{children:"Validation"}),e.jsx(i.th,{children:"Use Case"}),e.jsx(i.th,{children:"Issuance Time"}),e.jsx(i.th,{children:"Cost"})]})}),e.jsxs(i.tbody,{children:[e.jsxs(i.tr,{children:[e.jsx(i.td,{children:e.jsx(i.strong,{children:"Domain Validated (DV)"})}),e.jsx(i.td,{children:"Domain ownership only"}),e.jsx(i.td,{children:"Personal sites, blogs"}),e.jsx(i.td,{children:"Minutes"}),e.jsx(i.td,{children:"Free - Low"})]}),e.jsxs(i.tr,{children:[e.jsx(i.td,{children:e.jsx(i.strong,{children:"Organization Validated (OV)"})}),e.jsx(i.td,{children:"Organization verification"}),e.jsx(i.td,{children:"Business websites"}),e.jsx(i.td,{children:"Days"}),e.jsx(i.td,{children:"Medium"})]}),e.jsxs(i.tr,{children:[e.jsx(i.td,{children:e.jsx(i.strong,{children:"Extended Validation (EV)"})}),e.jsx(i.td,{children:"Thorough legal verification"}),e.jsx(i.td,{children:"E-commerce, banking"}),e.jsx(i.td,{children:"Weeks"}),e.jsx(i.td,{children:"High"})]}),e.jsxs(i.tr,{children:[e.jsx(i.td,{children:e.jsx(i.strong,{children:"Wildcard"})}),e.jsxs(i.td,{children:["Covers ",e.jsx(i.code,{children:"*.domain.com"})]}),e.jsx(i.td,{children:"Multiple subdomains"}),e.jsx(i.td,{children:"Minutes-Days"}),e.jsx(i.td,{children:"Medium-High"})]}),e.jsxs(i.tr,{children:[e.jsx(i.td,{children:e.jsx(i.strong,{children:"Multi-Domain (SAN)"})}),e.jsx(i.td,{children:"Multiple domains"}),e.jsx(i.td,{children:"Multiple sites"}),e.jsx(i.td,{children:"Minutes-Weeks"}),e.jsx(i.td,{children:"Medium-High"})]})]})]}),`
`,e.jsx(i.h2,{id:"certificate-authorities-cas",children:"Certificate Authorities (CAs)"}),`
`,e.jsx(i.p,{children:"Trusted organizations that issue SSL certificates:"}),`
`,e.jsx(i.h3,{id:"free-cas",children:"Free CAs"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Let's Encrypt"}),": Free, automated, 90-day certificates"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"ZeroSSL"}),": Free certificates with longer validity"]}),`
`]}),`
`,e.jsx(i.h3,{id:"commercial-cas",children:"Commercial CAs"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"DigiCert"}),": Premium certificates, high trust"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Sectigo"}),": Wide range of options"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"GlobalSign"}),": International presence"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"GoDaddy"}),": Popular for small businesses"]}),`
`]}),`
`,e.jsx(i.h2,{id:"certificate-chain",children:"Certificate Chain"}),`
`,e.jsx(i.p,{children:"Certificates form a chain of trust:"}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{children:`Root CA Certificate (self-signed, in browser trust store)\r
    ↓\r
Intermediate CA Certificate (signed by Root CA)\r
    ↓\r
Server Certificate (signed by Intermediate CA)
`})}),`
`,e.jsx(i.p,{children:"Browsers trust root CAs and verify the chain up to the root."}),`
`,e.jsx(i.h2,{id:"obtaining-certificates",children:"Obtaining Certificates"}),`
`,e.jsx(i.h3,{id:"lets-encrypt-automated",children:"Let's Encrypt (Automated)"}),`
`,e.jsx(i.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(i.pre,{style:{"--shiki-dark":"#e6edf3","--shiki-light":"#D4D4D4","--shiki-dark-bg":"#0d1117","--shiki-light-bg":"#1E1E1E"},tabIndex:"0","data-language":"bash","data-theme":"github-dark-default dark-plus",children:e.jsxs(i.code,{"data-language":"bash","data-theme":"github-dark-default dark-plus",style:{display:"grid"},children:[e.jsx(i.span,{"data-line":"",children:e.jsx(i.span,{style:{"--shiki-dark":"#8B949E","--shiki-light":"#6A9955"},children:"# Install certbot"})}),`
`,e.jsxs(i.span,{"data-line":"",children:[e.jsx(i.span,{style:{"--shiki-dark":"#FFA657","--shiki-light":"#DCDCAA"},children:"sudo"}),e.jsx(i.span,{style:{"--shiki-dark":"#A5D6FF","--shiki-light":"#CE9178"},children:" apt-get"}),e.jsx(i.span,{style:{"--shiki-dark":"#A5D6FF","--shiki-light":"#CE9178"},children:" install"}),e.jsx(i.span,{style:{"--shiki-dark":"#A5D6FF","--shiki-light":"#CE9178"},children:" certbot"}),e.jsx(i.span,{style:{"--shiki-dark":"#A5D6FF","--shiki-light":"#CE9178"},children:" python3-certbot-nginx"})]}),`
`,e.jsx(i.span,{"data-line":"",children:" "}),`
`,e.jsx(i.span,{"data-line":"",children:e.jsx(i.span,{style:{"--shiki-dark":"#8B949E","--shiki-light":"#6A9955"},children:"# Obtain certificate"})}),`
`,e.jsxs(i.span,{"data-line":"",children:[e.jsx(i.span,{style:{"--shiki-dark":"#FFA657","--shiki-light":"#DCDCAA"},children:"sudo"}),e.jsx(i.span,{style:{"--shiki-dark":"#A5D6FF","--shiki-light":"#CE9178"},children:" certbot"}),e.jsx(i.span,{style:{"--shiki-dark":"#79C0FF","--shiki-light":"#569CD6"},children:" --nginx"}),e.jsx(i.span,{style:{"--shiki-dark":"#79C0FF","--shiki-light":"#569CD6"},children:" -d"}),e.jsx(i.span,{style:{"--shiki-dark":"#A5D6FF","--shiki-light":"#CE9178"},children:" example.com"}),e.jsx(i.span,{style:{"--shiki-dark":"#79C0FF","--shiki-light":"#569CD6"},children:" -d"}),e.jsx(i.span,{style:{"--shiki-dark":"#A5D6FF","--shiki-light":"#CE9178"},children:" www.example.com"})]}),`
`,e.jsx(i.span,{"data-line":"",children:" "}),`
`,e.jsx(i.span,{"data-line":"",children:e.jsx(i.span,{style:{"--shiki-dark":"#8B949E","--shiki-light":"#6A9955"},children:"# Auto-renewal"})}),`
`,e.jsxs(i.span,{"data-line":"",children:[e.jsx(i.span,{style:{"--shiki-dark":"#FFA657","--shiki-light":"#DCDCAA"},children:"sudo"}),e.jsx(i.span,{style:{"--shiki-dark":"#A5D6FF","--shiki-light":"#CE9178"},children:" certbot"}),e.jsx(i.span,{style:{"--shiki-dark":"#A5D6FF","--shiki-light":"#CE9178"},children:" renew"}),e.jsx(i.span,{style:{"--shiki-dark":"#79C0FF","--shiki-light":"#569CD6"},children:" --dry-run"})]})]})})}),`
`,e.jsx(i.h3,{id:"manual-process",children:"Manual Process"}),`
`,e.jsxs(i.ol,{children:[`
`,e.jsx(i.li,{children:"Generate private key and CSR (Certificate Signing Request)"}),`
`,e.jsx(i.li,{children:"Submit CSR to Certificate Authority"}),`
`,e.jsx(i.li,{children:"Complete domain validation"}),`
`,e.jsx(i.li,{children:"Download issued certificate"}),`
`,e.jsx(i.li,{children:"Install certificate on server"}),`
`]}),`
`,e.jsx(i.h2,{id:"certificate-management",children:"Certificate Management"}),`
`,e.jsx(i.h3,{id:"renewal",children:"Renewal"}),`
`,e.jsx(i.p,{children:"Certificates expire (typically 90 days for Let's Encrypt, 1-2 years for commercial):"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Automate renewal"}),": Use certbot or ACME clients"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Monitor expiration"}),": Set alerts 30 days before"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Test renewal"}),": Regularly verify renewal process"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Backup"}),": Keep secure backups of certificates and keys"]}),`
`]}),`
`,e.jsx(i.h3,{id:"revocation",children:"Revocation"}),`
`,e.jsx(i.p,{children:"Revoke compromised certificates:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"CRL"}),": Certificate Revocation List"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"OCSP"}),": Online Certificate Status Protocol (real-time)"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"OCSP Stapling"}),": Server provides OCSP response"]}),`
`]}),`
`,e.jsx(i.h2,{id:"common-issues",children:"Common Issues"}),`
`,e.jsx(i.h3,{id:"certificate-errors",children:"Certificate Errors"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Expired certificate"}),": Past validity period"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Wrong domain"}),": Certificate doesn't match domain"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Self-signed"}),": Not signed by trusted CA"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Incomplete chain"}),": Missing intermediate certificates"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Revoked certificate"}),": Certificate has been revoked"]}),`
`]}),`
`,e.jsx(i.h3,{id:"solutions",children:"Solutions"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Renew expired certificates promptly"}),`
`,e.jsx(i.li,{children:"Ensure certificate matches all domains (use SAN/wildcard)"}),`
`,e.jsx(i.li,{children:"Use certificates from trusted CAs"}),`
`,e.jsx(i.li,{children:"Include full certificate chain in configuration"}),`
`,e.jsx(i.li,{children:"Monitor certificate transparency logs"}),`
`]}),`
`,e.jsx(i.h2,{id:"best-practices",children:"Best Practices"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Automate renewal"}),": Prevent expiration issues"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Use strong keys"}),": 2048-bit RSA minimum, prefer ECDSA"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Secure private keys"}),": Restrict file permissions (600)"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Monitor issuance"}),": Use Certificate Transparency monitoring"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Test regularly"}),": Use SSL Labs (ssllabs.com/ssltest)"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Keep backups"}),": Store certificates and keys securely offsite"]}),`
`]})]})}function c(s={}){const{wrapper:i}=s.components||{};return i?e.jsx(i,{...s,children:e.jsx(n,{...s})}):n(s)}export{c as default,l as frontmatter,r as toc};
