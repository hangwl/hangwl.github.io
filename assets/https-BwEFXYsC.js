import{j as i}from"./index-895OKoX5.js";const t=[{id:"introduction",title:"Introduction",level:2},{id:"how-https-works",title:"How HTTPS Works",level:2},{id:"security-benefits",title:"Security Benefits",level:2},{id:"encryption",title:"Encryption",level:3},{id:"authentication",title:"Authentication",level:3},{id:"data-integrity",title:"Data Integrity",level:3},{id:"https-in-practice",title:"HTTPS in Practice",level:2},{id:"browser-indicators",title:"Browser Indicators",level:3},{id:"required-for",title:"Required For",level:3},{id:"server-configuration",title:"Server Configuration",level:2},{id:"nginx-example",title:"Nginx Example",level:3},{id:"apache-example",title:"Apache Example",level:3},{id:"security-headers",title:"Security Headers",level:2},{id:"mixed-content",title:"Mixed Content",level:2},{id:"migration-steps",title:"Migration Steps",level:2},{id:"lets-encrypt",title:"Let's Encrypt",level:3},{id:"performance",title:"Performance",level:2},{id:"best-practices",title:"Best Practices",level:2},{id:"common-issues",title:"Common Issues",level:2}],r={title:"HTTPS",links:["http","http-vs-https","ssl-tls","ssl-certificates"]};function n(e){const s={a:"a",code:"code",figure:"figure",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...e.components};return i.jsxs(i.Fragment,{children:[i.jsx(s.h2,{id:"introduction",children:"Introduction"}),`
`,i.jsxs(s.p,{children:[i.jsx(s.strong,{children:"HTTPS (HTTP Secure)"})," is ",i.jsx(s.a,{href:"/notes/http",children:"HTTP"})," with encryption via ",i.jsx(s.a,{href:"/notes/ssl-tls",children:"SSL/TLS"}),". It protects data transmitted between clients and servers from eavesdropping, tampering, and forgery."]}),`
`,i.jsx(s.p,{children:"HTTPS is now the standard for all modern web applications."}),`
`,i.jsx(s.h2,{id:"how-https-works",children:"How HTTPS Works"}),`
`,i.jsxs(s.ol,{children:[`
`,i.jsxs(s.li,{children:[i.jsx(s.strong,{children:"Client Hello"}),": Client initiates ",i.jsx(s.a,{href:"/notes/ssl-tls",children:"SSL/TLS handshake"})]}),`
`,i.jsxs(s.li,{children:[i.jsx(s.strong,{children:"Server Hello"}),": Server sends ",i.jsx(s.a,{href:"/notes/ssl-certificates",children:"SSL certificate"})]}),`
`,i.jsxs(s.li,{children:[i.jsx(s.strong,{children:"Certificate Verification"}),": Client verifies certificate authenticity"]}),`
`,i.jsxs(s.li,{children:[i.jsx(s.strong,{children:"Key Exchange"}),": Establish shared encryption keys"]}),`
`,i.jsxs(s.li,{children:[i.jsx(s.strong,{children:"Encrypted Communication"}),": All HTTP data encrypted with session keys"]}),`
`]}),`
`,i.jsx(s.p,{children:"All subsequent HTTP requests and responses are encrypted, making them unreadable to attackers."}),`
`,i.jsx(s.h2,{id:"security-benefits",children:"Security Benefits"}),`
`,i.jsx(s.h3,{id:"encryption",children:"Encryption"}),`
`,i.jsx(s.p,{children:"Protects sensitive data:"}),`
`,i.jsxs(s.ul,{children:[`
`,i.jsx(s.li,{children:"Login credentials"}),`
`,i.jsx(s.li,{children:"Personal information"}),`
`,i.jsx(s.li,{children:"Payment details"}),`
`,i.jsx(s.li,{children:"Session tokens"}),`
`,i.jsx(s.li,{children:"API keys"}),`
`]}),`
`,i.jsx(s.h3,{id:"authentication",children:"Authentication"}),`
`,i.jsxs(s.p,{children:[i.jsx(s.a,{href:"/notes/ssl-certificates",children:"SSL certificates"})," verify server identity:"]}),`
`,i.jsxs(s.ul,{children:[`
`,i.jsx(s.li,{children:"Confirms legitimate website"}),`
`,i.jsx(s.li,{children:"Prevents phishing attacks"}),`
`,i.jsx(s.li,{children:"Builds user trust"}),`
`]}),`
`,i.jsx(s.h3,{id:"data-integrity",children:"Data Integrity"}),`
`,i.jsx(s.p,{children:"Ensures data isn't modified:"}),`
`,i.jsxs(s.ul,{children:[`
`,i.jsx(s.li,{children:"Detects tampering attempts"}),`
`,i.jsx(s.li,{children:"Prevents man-in-the-middle attacks"}),`
`,i.jsx(s.li,{children:"Guarantees data arrives as sent"}),`
`]}),`
`,i.jsx(s.h2,{id:"https-in-practice",children:"HTTPS in Practice"}),`
`,i.jsx(s.h3,{id:"browser-indicators",children:"Browser Indicators"}),`
`,i.jsx(s.p,{children:i.jsx(s.strong,{children:"Secure:"})}),`
`,i.jsxs(s.ul,{children:[`
`,i.jsx(s.li,{children:"Lock icon in address bar"}),`
`,i.jsx(s.li,{children:'"Secure" label'}),`
`,i.jsx(s.li,{children:"Green indicators (EV certificates)"}),`
`]}),`
`,i.jsx(s.p,{children:i.jsx(s.strong,{children:"Insecure:"})}),`
`,i.jsxs(s.ul,{children:[`
`,i.jsx(s.li,{children:'"Not Secure" warning'}),`
`,i.jsx(s.li,{children:"Crossed-out lock (mixed content)"}),`
`,i.jsx(s.li,{children:"Red warning (invalid certificate)"}),`
`]}),`
`,i.jsx(s.h3,{id:"required-for",children:"Required For"}),`
`,i.jsx(s.p,{children:"Modern web features require HTTPS:"}),`
`,i.jsxs(s.ul,{children:[`
`,i.jsx(s.li,{children:"Progressive Web Apps (PWAs)"}),`
`,i.jsx(s.li,{children:"Service Workers"}),`
`,i.jsx(s.li,{children:"Geolocation API"}),`
`,i.jsx(s.li,{children:"Camera/Microphone access"}),`
`,i.jsx(s.li,{children:"HTTP/2 and HTTP/3"}),`
`]}),`
`,i.jsx(s.h2,{id:"server-configuration",children:"Server Configuration"}),`
`,i.jsx(s.h3,{id:"nginx-example",children:"Nginx Example"}),`
`,i.jsx(s.figure,{"data-rehype-pretty-code-figure":"",children:i.jsx(s.pre,{style:{"--shiki-dark":"#e6edf3","--shiki-light":"#D4D4D4","--shiki-dark-bg":"#0d1117","--shiki-light-bg":"#1E1E1E"},tabIndex:"0","data-language":"nginx","data-theme":"github-dark-default dark-plus",children:i.jsxs(s.code,{"data-language":"nginx","data-theme":"github-dark-default dark-plus",style:{display:"grid"},children:[i.jsxs(s.span,{"data-line":"",children:[i.jsx(s.span,{style:{"--shiki-dark":"#FF7B72","--shiki-light":"#569CD6"},children:"server"}),i.jsx(s.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:" {"})]}),`
`,i.jsxs(s.span,{"data-line":"",children:[i.jsx(s.span,{style:{"--shiki-dark":"#FF7B72","--shiki-light":"#569CD6"},children:"    listen "}),i.jsx(s.span,{style:{"--shiki-dark":"#79C0FF","--shiki-light":"#B5CEA8"},children:"443"}),i.jsx(s.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:" ssl http2;"})]}),`
`,i.jsxs(s.span,{"data-line":"",children:[i.jsx(s.span,{style:{"--shiki-dark":"#FF7B72","--shiki-light":"#569CD6"},children:"    server_name "}),i.jsx(s.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:"example.com;"})]}),`
`,i.jsx(s.span,{"data-line":"",children:i.jsx(s.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:"    "})}),`
`,i.jsxs(s.span,{"data-line":"",children:[i.jsx(s.span,{style:{"--shiki-dark":"#FF7B72","--shiki-light":"#569CD6"},children:"    ssl_certificate "}),i.jsx(s.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:"/path/to/fullchain.pem;"})]}),`
`,i.jsxs(s.span,{"data-line":"",children:[i.jsx(s.span,{style:{"--shiki-dark":"#FF7B72","--shiki-light":"#569CD6"},children:"    ssl_certificate_key "}),i.jsx(s.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:"/path/to/privkey.pem;"})]}),`
`,i.jsxs(s.span,{"data-line":"",children:[i.jsx(s.span,{style:{"--shiki-dark":"#FF7B72","--shiki-light":"#569CD6"},children:"    ssl_protocols "}),i.jsx(s.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:"TLSv1.2 TLSv1.3;"})]}),`
`,i.jsx(s.span,{"data-line":"",children:i.jsx(s.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:"    "})}),`
`,i.jsx(s.span,{"data-line":"",children:i.jsx(s.span,{style:{"--shiki-dark":"#8B949E","--shiki-light":"#6A9955"},children:"    # Security headers"})}),`
`,i.jsxs(s.span,{"data-line":"",children:[i.jsx(s.span,{style:{"--shiki-dark":"#FF7B72","--shiki-light":"#569CD6"},children:"    add_header "}),i.jsx(s.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:"Strict-Transport-Security "}),i.jsx(s.span,{style:{"--shiki-dark":"#A5D6FF","--shiki-light":"#CE9178"},children:'"max-age=31536000"'}),i.jsx(s.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:" always;"})]}),`
`,i.jsx(s.span,{"data-line":"",children:i.jsx(s.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:"}"})}),`
`,i.jsx(s.span,{"data-line":"",children:" "}),`
`,i.jsx(s.span,{"data-line":"",children:i.jsx(s.span,{style:{"--shiki-dark":"#8B949E","--shiki-light":"#6A9955"},children:"# Redirect HTTP to HTTPS"})}),`
`,i.jsxs(s.span,{"data-line":"",children:[i.jsx(s.span,{style:{"--shiki-dark":"#FF7B72","--shiki-light":"#569CD6"},children:"server"}),i.jsx(s.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:" {"})]}),`
`,i.jsxs(s.span,{"data-line":"",children:[i.jsx(s.span,{style:{"--shiki-dark":"#FF7B72","--shiki-light":"#569CD6"},children:"    listen "}),i.jsx(s.span,{style:{"--shiki-dark":"#79C0FF","--shiki-light":"#B5CEA8"},children:"80"}),i.jsx(s.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:";"})]}),`
`,i.jsxs(s.span,{"data-line":"",children:[i.jsx(s.span,{style:{"--shiki-dark":"#FF7B72","--shiki-light":"#569CD6"},children:"    server_name "}),i.jsx(s.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:"example.com;"})]}),`
`,i.jsxs(s.span,{"data-line":"",children:[i.jsx(s.span,{style:{"--shiki-dark":"#FF7B72","--shiki-light":"#C586C0"},children:"    return"}),i.jsx(s.span,{style:{"--shiki-dark":"#79C0FF","--shiki-light":"#B5CEA8"},children:" 301"}),i.jsx(s.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:" https://$"}),i.jsx(s.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#9CDCFE"},children:"server_name"}),i.jsx(s.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:"$"}),i.jsx(s.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#9CDCFE"},children:"request_uri"}),i.jsx(s.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:";"})]}),`
`,i.jsx(s.span,{"data-line":"",children:i.jsx(s.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:"}"})})]})})}),`
`,i.jsx(s.h3,{id:"apache-example",children:"Apache Example"}),`
`,i.jsx(s.figure,{"data-rehype-pretty-code-figure":"",children:i.jsx(s.pre,{style:{"--shiki-dark":"#e6edf3","--shiki-light":"#D4D4D4","--shiki-dark-bg":"#0d1117","--shiki-light-bg":"#1E1E1E"},tabIndex:"0","data-language":"apache","data-theme":"github-dark-default dark-plus",children:i.jsxs(s.code,{"data-language":"apache","data-theme":"github-dark-default dark-plus",style:{display:"grid"},children:[i.jsxs(s.span,{"data-line":"",children:[i.jsx(s.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#808080"},children:"<"}),i.jsx(s.span,{style:{"--shiki-dark":"#79C0FF","--shiki-light":"#D4D4D4"},children:"VirtualHost"}),i.jsx(s.span,{style:{"--shiki-dark":"#A5D6FF","--shiki-light":"#CE9178"},children:" *:443"}),i.jsx(s.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#808080"},children:">"})]}),`
`,i.jsxs(s.span,{"data-line":"",children:[i.jsx(s.span,{style:{"--shiki-dark":"#FF7B72","--shiki-light":"#569CD6"},children:"    ServerName"}),i.jsx(s.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:" example.com"})]}),`
`,i.jsxs(s.span,{"data-line":"",children:[i.jsx(s.span,{style:{"--shiki-dark":"#FF7B72","--shiki-light":"#569CD6"},children:"    SSLEngine"}),i.jsx(s.span,{style:{"--shiki-dark":"#79C0FF","--shiki-light":"#D4D4D4"},children:" on"})]}),`
`,i.jsxs(s.span,{"data-line":"",children:[i.jsx(s.span,{style:{"--shiki-dark":"#FF7B72","--shiki-light":"#569CD6"},children:"    SSLCertificateFile"}),i.jsx(s.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:" /path/to/cert.pem"})]}),`
`,i.jsxs(s.span,{"data-line":"",children:[i.jsx(s.span,{style:{"--shiki-dark":"#FF7B72","--shiki-light":"#569CD6"},children:"    SSLCertificateKeyFile"}),i.jsx(s.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:" /path/to/privkey.pem"})]}),`
`,i.jsxs(s.span,{"data-line":"",children:[i.jsx(s.span,{style:{"--shiki-dark":"#FF7B72","--shiki-light":"#569CD6"},children:"    SSLProtocol"}),i.jsx(s.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:" all -SSLv3 -TLSv1 -TLSv1."}),i.jsx(s.span,{style:{"--shiki-dark":"#79C0FF","--shiki-light":"#B5CEA8"},children:"1"})]}),`
`,i.jsx(s.span,{"data-line":"",children:i.jsx(s.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:"    "})}),`
`,i.jsxs(s.span,{"data-line":"",children:[i.jsx(s.span,{style:{"--shiki-dark":"#FF7B72","--shiki-light":"#569CD6"},children:"    Header"}),i.jsx(s.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:" always "}),i.jsx(s.span,{style:{"--shiki-dark":"#79C0FF","--shiki-light":"#D4D4D4"},children:"set"}),i.jsx(s.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:' Strict-Transport-Security "max-age='}),i.jsx(s.span,{style:{"--shiki-dark":"#79C0FF","--shiki-light":"#B5CEA8"},children:"31536000"}),i.jsx(s.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:'"'})]}),`
`,i.jsxs(s.span,{"data-line":"",children:[i.jsx(s.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#808080"},children:"</"}),i.jsx(s.span,{style:{"--shiki-dark":"#79C0FF","--shiki-light":"#D4D4D4"},children:"VirtualHost"}),i.jsx(s.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#808080"},children:">"})]}),`
`,i.jsx(s.span,{"data-line":"",children:" "}),`
`,i.jsxs(s.span,{"data-line":"",children:[i.jsx(s.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#808080"},children:"<"}),i.jsx(s.span,{style:{"--shiki-dark":"#79C0FF","--shiki-light":"#D4D4D4"},children:"VirtualHost"}),i.jsx(s.span,{style:{"--shiki-dark":"#A5D6FF","--shiki-light":"#CE9178"},children:" *:80"}),i.jsx(s.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#808080"},children:">"})]}),`
`,i.jsxs(s.span,{"data-line":"",children:[i.jsx(s.span,{style:{"--shiki-dark":"#FF7B72","--shiki-light":"#569CD6"},children:"    ServerName"}),i.jsx(s.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:" example.com"})]}),`
`,i.jsxs(s.span,{"data-line":"",children:[i.jsx(s.span,{style:{"--shiki-dark":"#FF7B72","--shiki-light":"#569CD6"},children:"    Redirect"}),i.jsx(s.span,{style:{"--shiki-dark":"#79C0FF","--shiki-light":"#D4D4D4"},children:" permanent"}),i.jsx(s.span,{style:{"--shiki-dark":"#A5D6FF","--shiki-light":"#CE9178"},children:" /"}),i.jsx(s.span,{style:{"--shiki-dark":"#A5D6FF","--shiki-light":"#CE9178"},children:" https://example.com/"})]}),`
`,i.jsxs(s.span,{"data-line":"",children:[i.jsx(s.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#808080"},children:"</"}),i.jsx(s.span,{style:{"--shiki-dark":"#79C0FF","--shiki-light":"#D4D4D4"},children:"VirtualHost"}),i.jsx(s.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#808080"},children:">"})]})]})})}),`
`,i.jsx(s.h2,{id:"security-headers",children:"Security Headers"}),`
`,i.jsx(s.p,{children:"Enhance HTTPS with additional headers:"}),`
`,i.jsx(s.figure,{"data-rehype-pretty-code-figure":"",children:i.jsx(s.pre,{style:{"--shiki-dark":"#e6edf3","--shiki-light":"#D4D4D4","--shiki-dark-bg":"#0d1117","--shiki-light-bg":"#1E1E1E"},tabIndex:"0","data-language":"http","data-theme":"github-dark-default dark-plus",children:i.jsxs(s.code,{"data-language":"http","data-theme":"github-dark-default dark-plus",style:{display:"grid"},children:[i.jsxs(s.span,{"data-line":"",children:[i.jsx(s.span,{style:{"--shiki-dark":"#7EE787","--shiki-light":"#569CD6"},children:"Strict-Transport-Security"}),i.jsx(s.span,{style:{"--shiki-dark":"#FF7B72","--shiki-light":"#569CD6"},children:":"}),i.jsx(s.span,{style:{"--shiki-dark":"#A5D6FF","--shiki-light":"#CE9178"},children:" max-age=31536000; includeSubDomains; preload"})]}),`
`,i.jsxs(s.span,{"data-line":"",children:[i.jsx(s.span,{style:{"--shiki-dark":"#7EE787","--shiki-light":"#569CD6"},children:"Content-Security-Policy"}),i.jsx(s.span,{style:{"--shiki-dark":"#FF7B72","--shiki-light":"#569CD6"},children:":"}),i.jsx(s.span,{style:{"--shiki-dark":"#A5D6FF","--shiki-light":"#CE9178"},children:" default-src https:"})]}),`
`,i.jsxs(s.span,{"data-line":"",children:[i.jsx(s.span,{style:{"--shiki-dark":"#7EE787","--shiki-light":"#569CD6"},children:"X-Content-Type-Options"}),i.jsx(s.span,{style:{"--shiki-dark":"#FF7B72","--shiki-light":"#569CD6"},children:":"}),i.jsx(s.span,{style:{"--shiki-dark":"#A5D6FF","--shiki-light":"#CE9178"},children:" nosniff"})]}),`
`,i.jsxs(s.span,{"data-line":"",children:[i.jsx(s.span,{style:{"--shiki-dark":"#7EE787","--shiki-light":"#569CD6"},children:"X-Frame-Options"}),i.jsx(s.span,{style:{"--shiki-dark":"#FF7B72","--shiki-light":"#569CD6"},children:":"}),i.jsx(s.span,{style:{"--shiki-dark":"#A5D6FF","--shiki-light":"#CE9178"},children:" DENY"})]})]})})}),`
`,i.jsx(s.h2,{id:"mixed-content",children:"Mixed Content"}),`
`,i.jsxs(s.p,{children:[i.jsx(s.strong,{children:"Mixed content"})," occurs when HTTPS page loads HTTP resources."]}),`
`,i.jsx(s.p,{children:i.jsx(s.strong,{children:"Blocked by browsers:"})}),`
`,i.jsxs(s.ul,{children:[`
`,i.jsxs(s.li,{children:["Scripts: ",i.jsx(s.code,{children:'<script src="http://...">'})]}),`
`,i.jsxs(s.li,{children:["Stylesheets: ",i.jsx(s.code,{children:'<link href="http://...">'})]}),`
`,i.jsx(s.li,{children:"Iframes, XMLHttpRequest, WebSockets"}),`
`]}),`
`,i.jsx(s.p,{children:i.jsx(s.strong,{children:"Solution:"})}),`
`,i.jsx(s.figure,{"data-rehype-pretty-code-figure":"",children:i.jsx(s.pre,{style:{"--shiki-dark":"#e6edf3","--shiki-light":"#D4D4D4","--shiki-dark-bg":"#0d1117","--shiki-light-bg":"#1E1E1E"},tabIndex:"0","data-language":"html","data-theme":"github-dark-default dark-plus",children:i.jsxs(s.code,{"data-language":"html","data-theme":"github-dark-default dark-plus",style:{display:"grid"},children:[i.jsx(s.span,{"data-line":"",children:i.jsx(s.span,{style:{"--shiki-dark":"#8B949E","--shiki-light":"#6A9955"},children:"<!-- Bad -->"})}),`
`,i.jsxs(s.span,{"data-line":"",children:[i.jsx(s.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#808080"},children:"<"}),i.jsx(s.span,{style:{"--shiki-dark":"#7EE787","--shiki-light":"#569CD6"},children:"script"}),i.jsx(s.span,{style:{"--shiki-dark":"#79C0FF","--shiki-light":"#9CDCFE"},children:" src"}),i.jsx(s.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:"="}),i.jsx(s.span,{style:{"--shiki-dark":"#A5D6FF","--shiki-light":"#CE9178"},children:'"http://example.com/script.js"'}),i.jsx(s.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#808080"},children:"></"}),i.jsx(s.span,{style:{"--shiki-dark":"#7EE787","--shiki-light":"#569CD6"},children:"script"}),i.jsx(s.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#808080"},children:">"})]}),`
`,i.jsx(s.span,{"data-line":"",children:" "}),`
`,i.jsx(s.span,{"data-line":"",children:i.jsx(s.span,{style:{"--shiki-dark":"#8B949E","--shiki-light":"#6A9955"},children:"<!-- Good -->"})}),`
`,i.jsxs(s.span,{"data-line":"",children:[i.jsx(s.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#808080"},children:"<"}),i.jsx(s.span,{style:{"--shiki-dark":"#7EE787","--shiki-light":"#569CD6"},children:"script"}),i.jsx(s.span,{style:{"--shiki-dark":"#79C0FF","--shiki-light":"#9CDCFE"},children:" src"}),i.jsx(s.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:"="}),i.jsx(s.span,{style:{"--shiki-dark":"#A5D6FF","--shiki-light":"#CE9178"},children:'"https://example.com/script.js"'}),i.jsx(s.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#808080"},children:"></"}),i.jsx(s.span,{style:{"--shiki-dark":"#7EE787","--shiki-light":"#569CD6"},children:"script"}),i.jsx(s.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#808080"},children:">"})]}),`
`,i.jsxs(s.span,{"data-line":"",children:[i.jsx(s.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#808080"},children:"<"}),i.jsx(s.span,{style:{"--shiki-dark":"#7EE787","--shiki-light":"#569CD6"},children:"script"}),i.jsx(s.span,{style:{"--shiki-dark":"#79C0FF","--shiki-light":"#9CDCFE"},children:" src"}),i.jsx(s.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:"="}),i.jsx(s.span,{style:{"--shiki-dark":"#A5D6FF","--shiki-light":"#CE9178"},children:'"/js/script.js"'}),i.jsx(s.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#808080"},children:"></"}),i.jsx(s.span,{style:{"--shiki-dark":"#7EE787","--shiki-light":"#569CD6"},children:"script"}),i.jsx(s.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#808080"},children:">"})]})]})})}),`
`,i.jsx(s.h2,{id:"migration-steps",children:"Migration Steps"}),`
`,i.jsxs(s.ol,{children:[`
`,i.jsxs(s.li,{children:[i.jsx(s.strong,{children:"Obtain certificate"}),": Use Let's Encrypt (free) or commercial CA"]}),`
`,i.jsxs(s.li,{children:[i.jsx(s.strong,{children:"Install certificate"}),": Configure on web server"]}),`
`,i.jsxs(s.li,{children:[i.jsx(s.strong,{children:"Update links"}),": Change all internal links to HTTPS"]}),`
`,i.jsxs(s.li,{children:[i.jsx(s.strong,{children:"Redirect HTTP"}),": Implement 301 redirects to HTTPS"]}),`
`,i.jsxs(s.li,{children:[i.jsx(s.strong,{children:"Fix mixed content"}),": Update all resource URLs"]}),`
`,i.jsxs(s.li,{children:[i.jsx(s.strong,{children:"Update references"}),": Search Console, social media, etc."]}),`
`]}),`
`,i.jsx(s.h3,{id:"lets-encrypt",children:"Let's Encrypt"}),`
`,i.jsx(s.figure,{"data-rehype-pretty-code-figure":"",children:i.jsx(s.pre,{style:{"--shiki-dark":"#e6edf3","--shiki-light":"#D4D4D4","--shiki-dark-bg":"#0d1117","--shiki-light-bg":"#1E1E1E"},tabIndex:"0","data-language":"bash","data-theme":"github-dark-default dark-plus",children:i.jsxs(s.code,{"data-language":"bash","data-theme":"github-dark-default dark-plus",style:{display:"grid"},children:[i.jsx(s.span,{"data-line":"",children:i.jsx(s.span,{style:{"--shiki-dark":"#8B949E","--shiki-light":"#6A9955"},children:"# Install certbot"})}),`
`,i.jsxs(s.span,{"data-line":"",children:[i.jsx(s.span,{style:{"--shiki-dark":"#FFA657","--shiki-light":"#DCDCAA"},children:"sudo"}),i.jsx(s.span,{style:{"--shiki-dark":"#A5D6FF","--shiki-light":"#CE9178"},children:" apt-get"}),i.jsx(s.span,{style:{"--shiki-dark":"#A5D6FF","--shiki-light":"#CE9178"},children:" install"}),i.jsx(s.span,{style:{"--shiki-dark":"#A5D6FF","--shiki-light":"#CE9178"},children:" certbot"}),i.jsx(s.span,{style:{"--shiki-dark":"#A5D6FF","--shiki-light":"#CE9178"},children:" python3-certbot-nginx"})]}),`
`,i.jsx(s.span,{"data-line":"",children:" "}),`
`,i.jsx(s.span,{"data-line":"",children:i.jsx(s.span,{style:{"--shiki-dark":"#8B949E","--shiki-light":"#6A9955"},children:"# Obtain certificate"})}),`
`,i.jsxs(s.span,{"data-line":"",children:[i.jsx(s.span,{style:{"--shiki-dark":"#FFA657","--shiki-light":"#DCDCAA"},children:"sudo"}),i.jsx(s.span,{style:{"--shiki-dark":"#A5D6FF","--shiki-light":"#CE9178"},children:" certbot"}),i.jsx(s.span,{style:{"--shiki-dark":"#79C0FF","--shiki-light":"#569CD6"},children:" --nginx"}),i.jsx(s.span,{style:{"--shiki-dark":"#79C0FF","--shiki-light":"#569CD6"},children:" -d"}),i.jsx(s.span,{style:{"--shiki-dark":"#A5D6FF","--shiki-light":"#CE9178"},children:" example.com"})]}),`
`,i.jsx(s.span,{"data-line":"",children:" "}),`
`,i.jsx(s.span,{"data-line":"",children:i.jsx(s.span,{style:{"--shiki-dark":"#8B949E","--shiki-light":"#6A9955"},children:"# Auto-renewal"})}),`
`,i.jsxs(s.span,{"data-line":"",children:[i.jsx(s.span,{style:{"--shiki-dark":"#FFA657","--shiki-light":"#DCDCAA"},children:"sudo"}),i.jsx(s.span,{style:{"--shiki-dark":"#A5D6FF","--shiki-light":"#CE9178"},children:" certbot"}),i.jsx(s.span,{style:{"--shiki-dark":"#A5D6FF","--shiki-light":"#CE9178"},children:" renew"}),i.jsx(s.span,{style:{"--shiki-dark":"#79C0FF","--shiki-light":"#569CD6"},children:" --dry-run"})]})]})})}),`
`,i.jsx(s.h2,{id:"performance",children:"Performance"}),`
`,i.jsx(s.p,{children:"Modern HTTPS is fast:"}),`
`,i.jsxs(s.ul,{children:[`
`,i.jsxs(s.li,{children:[i.jsx(s.strong,{children:"TLS 1.3"}),": 1-RTT handshake (vs 2-RTT in TLS 1.2)"]}),`
`,i.jsxs(s.li,{children:[i.jsx(s.strong,{children:"0-RTT resumption"}),": Instant reconnection"]}),`
`,i.jsxs(s.li,{children:[i.jsx(s.strong,{children:"HTTP/2"}),": Multiplexing, header compression"]}),`
`,i.jsxs(s.li,{children:[i.jsx(s.strong,{children:"Hardware acceleration"}),": AES-NI for encryption"]}),`
`]}),`
`,i.jsx(s.p,{children:"HTTPS performance is comparable to HTTP with modern protocols."}),`
`,i.jsx(s.h2,{id:"best-practices",children:"Best Practices"}),`
`,i.jsxs(s.ul,{children:[`
`,i.jsxs(s.li,{children:[i.jsx(s.strong,{children:"Use TLS 1.2+"}),": Disable older versions"]}),`
`,i.jsxs(s.li,{children:[i.jsx(s.strong,{children:"Strong cipher suites"}),": Remove weak algorithms"]}),`
`,i.jsxs(s.li,{children:[i.jsx(s.strong,{children:"Enable HSTS"}),": Force HTTPS for all future visits"]}),`
`,i.jsxs(s.li,{children:[i.jsx(s.strong,{children:"Automate renewal"}),": Use certbot for Let's Encrypt"]}),`
`,i.jsxs(s.li,{children:[i.jsx(s.strong,{children:"Monitor certificates"}),": Set expiration alerts"]}),`
`,i.jsxs(s.li,{children:[i.jsx(s.strong,{children:"Test configuration"}),": Use SSL Labs (ssllabs.com/ssltest)"]}),`
`]}),`
`,i.jsx(s.h2,{id:"common-issues",children:"Common Issues"}),`
`,i.jsxs(s.ul,{children:[`
`,i.jsxs(s.li,{children:[i.jsx(s.strong,{children:"Expired certificate"}),": Renew before expiration"]}),`
`,i.jsxs(s.li,{children:[i.jsx(s.strong,{children:"Wrong domain"}),": Use SAN or wildcard certificates"]}),`
`,i.jsxs(s.li,{children:[i.jsx(s.strong,{children:"Incomplete chain"}),": Include intermediate certificates"]}),`
`,i.jsxs(s.li,{children:[i.jsx(s.strong,{children:"Mixed content"}),": Update all resources to HTTPS"]}),`
`,i.jsxs(s.li,{children:[i.jsx(s.strong,{children:"Performance"}),": Enable HTTP/2 and TLS 1.3"]}),`
`]}),`
`,i.jsxs(s.p,{children:["For detailed information on SSL/TLS, see ",i.jsx(s.a,{href:"/notes/ssl-tls",children:"SSL/TLS"})," and ",i.jsx(s.a,{href:"/notes/ssl-certificates",children:"SSL Certificates"}),"."]})]})}function h(e={}){const{wrapper:s}=e.components||{};return s?i.jsx(s,{...e,children:i.jsx(n,{...e})}):n(e)}export{h as default,r as frontmatter,t as toc};
