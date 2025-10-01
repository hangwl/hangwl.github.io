import{j as i}from"./index-CtAT4ExP.js";const t={title:"SSL/TLS Certificates",links:["https","ssl-tls"]};function n(s){const e={code:"code",figure:"figure",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...s.components};return i.jsxs(i.Fragment,{children:[i.jsx(e.h2,{children:"Introduction"}),`
`,i.jsx(e.p,{children:"SSL/TLS certificates are digital certificates that authenticate a website's identity and enable encrypted connections. They contain a public key and information about the certificate holder."}),`
`,i.jsx(e.h2,{children:"Certificate Components"}),`
`,i.jsxs(e.ul,{children:[`
`,i.jsxs(e.li,{children:[i.jsx(e.strong,{children:"Subject"}),": Domain name(s) the certificate covers"]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.strong,{children:"Issuer"}),": Certificate Authority that signed it"]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.strong,{children:"Public Key"}),": Used for encryption and key exchange"]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.strong,{children:"Validity Period"}),": Start and expiration dates"]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.strong,{children:"Signature"}),": CA's digital signature"]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.strong,{children:"Serial Number"}),": Unique identifier"]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.strong,{children:"Extensions"}),": Additional info (SANs, key usage, etc.)"]}),`
`]}),`
`,i.jsx(e.h2,{children:"Certificate Types"}),`
`,i.jsxs(e.table,{children:[i.jsx(e.thead,{children:i.jsxs(e.tr,{children:[i.jsx(e.th,{children:"Type"}),i.jsx(e.th,{children:"Validation"}),i.jsx(e.th,{children:"Use Case"}),i.jsx(e.th,{children:"Issuance Time"}),i.jsx(e.th,{children:"Cost"})]})}),i.jsxs(e.tbody,{children:[i.jsxs(e.tr,{children:[i.jsx(e.td,{children:i.jsx(e.strong,{children:"Domain Validated (DV)"})}),i.jsx(e.td,{children:"Domain ownership only"}),i.jsx(e.td,{children:"Personal sites, blogs"}),i.jsx(e.td,{children:"Minutes"}),i.jsx(e.td,{children:"Free - Low"})]}),i.jsxs(e.tr,{children:[i.jsx(e.td,{children:i.jsx(e.strong,{children:"Organization Validated (OV)"})}),i.jsx(e.td,{children:"Organization verification"}),i.jsx(e.td,{children:"Business websites"}),i.jsx(e.td,{children:"Days"}),i.jsx(e.td,{children:"Medium"})]}),i.jsxs(e.tr,{children:[i.jsx(e.td,{children:i.jsx(e.strong,{children:"Extended Validation (EV)"})}),i.jsx(e.td,{children:"Thorough legal verification"}),i.jsx(e.td,{children:"E-commerce, banking"}),i.jsx(e.td,{children:"Weeks"}),i.jsx(e.td,{children:"High"})]}),i.jsxs(e.tr,{children:[i.jsx(e.td,{children:i.jsx(e.strong,{children:"Wildcard"})}),i.jsxs(e.td,{children:["Covers ",i.jsx(e.code,{children:"*.domain.com"})]}),i.jsx(e.td,{children:"Multiple subdomains"}),i.jsx(e.td,{children:"Minutes-Days"}),i.jsx(e.td,{children:"Medium-High"})]}),i.jsxs(e.tr,{children:[i.jsx(e.td,{children:i.jsx(e.strong,{children:"Multi-Domain (SAN)"})}),i.jsx(e.td,{children:"Multiple domains"}),i.jsx(e.td,{children:"Multiple sites"}),i.jsx(e.td,{children:"Minutes-Weeks"}),i.jsx(e.td,{children:"Medium-High"})]})]})]}),`
`,i.jsx(e.h2,{children:"Certificate Authorities (CAs)"}),`
`,i.jsx(e.p,{children:"Trusted organizations that issue SSL certificates:"}),`
`,i.jsx(e.h3,{children:"Free CAs"}),`
`,i.jsxs(e.ul,{children:[`
`,i.jsxs(e.li,{children:[i.jsx(e.strong,{children:"Let's Encrypt"}),": Free, automated, 90-day certificates"]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.strong,{children:"ZeroSSL"}),": Free certificates with longer validity"]}),`
`]}),`
`,i.jsx(e.h3,{children:"Commercial CAs"}),`
`,i.jsxs(e.ul,{children:[`
`,i.jsxs(e.li,{children:[i.jsx(e.strong,{children:"DigiCert"}),": Premium certificates, high trust"]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.strong,{children:"Sectigo"}),": Wide range of options"]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.strong,{children:"GlobalSign"}),": International presence"]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.strong,{children:"GoDaddy"}),": Popular for small businesses"]}),`
`]}),`
`,i.jsx(e.h2,{children:"Certificate Chain"}),`
`,i.jsx(e.p,{children:"Certificates form a chain of trust:"}),`
`,i.jsx(e.pre,{children:i.jsx(e.code,{children:`Root CA Certificate (self-signed, in browser trust store)
    ↓
Intermediate CA Certificate (signed by Root CA)
    ↓
Server Certificate (signed by Intermediate CA)
`})}),`
`,i.jsx(e.p,{children:"Browsers trust root CAs and verify the chain up to the root."}),`
`,i.jsx(e.h2,{children:"Obtaining Certificates"}),`
`,i.jsx(e.h3,{children:"Let's Encrypt (Automated)"}),`
`,i.jsx(e.figure,{"data-rehype-pretty-code-figure":"",children:i.jsx(e.pre,{style:{"--shiki-dark":"#e6edf3","--shiki-light":"#D4D4D4","--shiki-dark-bg":"#0d1117","--shiki-light-bg":"#1E1E1E"},tabIndex:"0","data-language":"bash","data-theme":"github-dark-default dark-plus",children:i.jsxs(e.code,{"data-language":"bash","data-theme":"github-dark-default dark-plus",style:{display:"grid"},children:[i.jsx(e.span,{"data-line":"",children:i.jsx(e.span,{style:{"--shiki-dark":"#8B949E","--shiki-light":"#6A9955"},children:"# Install certbot"})}),`
`,i.jsxs(e.span,{"data-line":"",children:[i.jsx(e.span,{style:{"--shiki-dark":"#FFA657","--shiki-light":"#DCDCAA"},children:"sudo"}),i.jsx(e.span,{style:{"--shiki-dark":"#A5D6FF","--shiki-light":"#CE9178"},children:" apt-get"}),i.jsx(e.span,{style:{"--shiki-dark":"#A5D6FF","--shiki-light":"#CE9178"},children:" install"}),i.jsx(e.span,{style:{"--shiki-dark":"#A5D6FF","--shiki-light":"#CE9178"},children:" certbot"}),i.jsx(e.span,{style:{"--shiki-dark":"#A5D6FF","--shiki-light":"#CE9178"},children:" python3-certbot-nginx"})]}),`
`,i.jsx(e.span,{"data-line":"",children:" "}),`
`,i.jsx(e.span,{"data-line":"",children:i.jsx(e.span,{style:{"--shiki-dark":"#8B949E","--shiki-light":"#6A9955"},children:"# Obtain certificate"})}),`
`,i.jsxs(e.span,{"data-line":"",children:[i.jsx(e.span,{style:{"--shiki-dark":"#FFA657","--shiki-light":"#DCDCAA"},children:"sudo"}),i.jsx(e.span,{style:{"--shiki-dark":"#A5D6FF","--shiki-light":"#CE9178"},children:" certbot"}),i.jsx(e.span,{style:{"--shiki-dark":"#79C0FF","--shiki-light":"#569CD6"},children:" --nginx"}),i.jsx(e.span,{style:{"--shiki-dark":"#79C0FF","--shiki-light":"#569CD6"},children:" -d"}),i.jsx(e.span,{style:{"--shiki-dark":"#A5D6FF","--shiki-light":"#CE9178"},children:" example.com"}),i.jsx(e.span,{style:{"--shiki-dark":"#79C0FF","--shiki-light":"#569CD6"},children:" -d"}),i.jsx(e.span,{style:{"--shiki-dark":"#A5D6FF","--shiki-light":"#CE9178"},children:" www.example.com"})]}),`
`,i.jsx(e.span,{"data-line":"",children:" "}),`
`,i.jsx(e.span,{"data-line":"",children:i.jsx(e.span,{style:{"--shiki-dark":"#8B949E","--shiki-light":"#6A9955"},children:"# Auto-renewal"})}),`
`,i.jsxs(e.span,{"data-line":"",children:[i.jsx(e.span,{style:{"--shiki-dark":"#FFA657","--shiki-light":"#DCDCAA"},children:"sudo"}),i.jsx(e.span,{style:{"--shiki-dark":"#A5D6FF","--shiki-light":"#CE9178"},children:" certbot"}),i.jsx(e.span,{style:{"--shiki-dark":"#A5D6FF","--shiki-light":"#CE9178"},children:" renew"}),i.jsx(e.span,{style:{"--shiki-dark":"#79C0FF","--shiki-light":"#569CD6"},children:" --dry-run"})]})]})})}),`
`,i.jsx(e.h3,{children:"Manual Process"}),`
`,i.jsxs(e.ol,{children:[`
`,i.jsx(e.li,{children:"Generate private key and CSR (Certificate Signing Request)"}),`
`,i.jsx(e.li,{children:"Submit CSR to Certificate Authority"}),`
`,i.jsx(e.li,{children:"Complete domain validation"}),`
`,i.jsx(e.li,{children:"Download issued certificate"}),`
`,i.jsx(e.li,{children:"Install certificate on server"}),`
`]}),`
`,i.jsx(e.h2,{children:"Certificate Management"}),`
`,i.jsx(e.h3,{children:"Renewal"}),`
`,i.jsx(e.p,{children:"Certificates expire (typically 90 days for Let's Encrypt, 1-2 years for commercial):"}),`
`,i.jsxs(e.ul,{children:[`
`,i.jsxs(e.li,{children:[i.jsx(e.strong,{children:"Automate renewal"}),": Use certbot or ACME clients"]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.strong,{children:"Monitor expiration"}),": Set alerts 30 days before"]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.strong,{children:"Test renewal"}),": Regularly verify renewal process"]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.strong,{children:"Backup"}),": Keep secure backups of certificates and keys"]}),`
`]}),`
`,i.jsx(e.h3,{children:"Revocation"}),`
`,i.jsx(e.p,{children:"Revoke compromised certificates:"}),`
`,i.jsxs(e.ul,{children:[`
`,i.jsxs(e.li,{children:[i.jsx(e.strong,{children:"CRL"}),": Certificate Revocation List"]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.strong,{children:"OCSP"}),": Online Certificate Status Protocol (real-time)"]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.strong,{children:"OCSP Stapling"}),": Server provides OCSP response"]}),`
`]}),`
`,i.jsx(e.h2,{children:"Common Issues"}),`
`,i.jsx(e.h3,{children:"Certificate Errors"}),`
`,i.jsxs(e.ul,{children:[`
`,i.jsxs(e.li,{children:[i.jsx(e.strong,{children:"Expired certificate"}),": Past validity period"]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.strong,{children:"Wrong domain"}),": Certificate doesn't match domain"]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.strong,{children:"Self-signed"}),": Not signed by trusted CA"]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.strong,{children:"Incomplete chain"}),": Missing intermediate certificates"]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.strong,{children:"Revoked certificate"}),": Certificate has been revoked"]}),`
`]}),`
`,i.jsx(e.h3,{children:"Solutions"}),`
`,i.jsxs(e.ul,{children:[`
`,i.jsx(e.li,{children:"Renew expired certificates promptly"}),`
`,i.jsx(e.li,{children:"Ensure certificate matches all domains (use SAN/wildcard)"}),`
`,i.jsx(e.li,{children:"Use certificates from trusted CAs"}),`
`,i.jsx(e.li,{children:"Include full certificate chain in configuration"}),`
`,i.jsx(e.li,{children:"Monitor certificate transparency logs"}),`
`]}),`
`,i.jsx(e.h2,{children:"Best Practices"}),`
`,i.jsxs(e.ul,{children:[`
`,i.jsxs(e.li,{children:[i.jsx(e.strong,{children:"Automate renewal"}),": Prevent expiration issues"]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.strong,{children:"Use strong keys"}),": 2048-bit RSA minimum, prefer ECDSA"]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.strong,{children:"Secure private keys"}),": Restrict file permissions (600)"]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.strong,{children:"Monitor issuance"}),": Use Certificate Transparency monitoring"]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.strong,{children:"Test regularly"}),": Use SSL Labs (ssllabs.com/ssltest)"]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.strong,{children:"Keep backups"}),": Store certificates and keys securely offsite"]}),`
`]})]})}function l(s={}){const{wrapper:e}=s.components||{};return e?i.jsx(e,{...s,children:i.jsx(n,{...s})}):n(s)}export{l as default,t as frontmatter};
