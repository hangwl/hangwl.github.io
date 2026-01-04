import{j as i}from"./index-BKgolIEe.js";const r=[{id:"introduction",title:"Introduction",level:2},{id:"how-webhooks-work",title:"How Webhooks Work",level:2},{id:"webhooks-vs-polling",title:"Webhooks vs Polling",level:2},{id:"common-use-cases",title:"Common Use Cases",level:2},{id:"implementation-considerations",title:"Implementation Considerations",level:2},{id:"security",title:"Security",level:3},{id:"reliability",title:"Reliability",level:3},{id:"debugging",title:"Debugging",level:3},{id:"example-webhook-payload",title:"Example Webhook Payload",level:2},{id:"best-practices",title:"Best Practices",level:2}],t={title:"Webhooks",links:["http","https","rest-api"]};function n(e){const s={code:"code",figure:"figure",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...e.components};return i.jsxs(i.Fragment,{children:[i.jsx(s.h2,{id:"introduction",children:"Introduction"}),`
`,i.jsxs(s.p,{children:["Webhooks are ",i.jsx(s.strong,{children:"user-defined HTTP callbacks"})," that enable real-time, event-driven communication between applications. When a specific event occurs in a source system, it automatically sends an HTTP POST request with event data to a pre-configured URL endpoint in the destination system."]}),`
`,i.jsxs(s.p,{children:["Unlike traditional APIs where clients repeatedly poll servers for updates, webhooks use a ",i.jsx(s.strong,{children:"push model"})," where the server proactively notifies clients when events occur."]}),`
`,i.jsx(s.h2,{id:"how-webhooks-work",children:"How Webhooks Work"}),`
`,i.jsx(s.p,{children:"The webhook workflow follows these steps:"}),`
`,i.jsxs(s.ol,{children:[`
`,i.jsxs(s.li,{children:[i.jsx(s.strong,{children:"Registration"}),": The receiving application registers a webhook URL with the source application"]}),`
`,i.jsxs(s.li,{children:[i.jsx(s.strong,{children:"Event Trigger"}),": An event occurs in the source system (e.g., new payment, form submission, code push)"]}),`
`,i.jsxs(s.li,{children:[i.jsx(s.strong,{children:"HTTP Request"}),": The source system sends an HTTP POST request to the registered URL with event data"]}),`
`,i.jsxs(s.li,{children:[i.jsx(s.strong,{children:"Processing"}),": The receiving application processes the webhook payload and takes appropriate action"]}),`
`,i.jsxs(s.li,{children:[i.jsx(s.strong,{children:"Response"}),": The receiver sends an HTTP response (typically 200 OK) to acknowledge receipt"]}),`
`]}),`
`,i.jsx(s.h2,{id:"webhooks-vs-polling",children:"Webhooks vs Polling"}),`
`,i.jsxs(s.table,{children:[i.jsx(s.thead,{children:i.jsxs(s.tr,{children:[i.jsx(s.th,{children:"Aspect"}),i.jsx(s.th,{children:"Webhooks"}),i.jsx(s.th,{children:"Polling"})]})}),i.jsxs(s.tbody,{children:[i.jsxs(s.tr,{children:[i.jsx(s.td,{children:i.jsx(s.strong,{children:"Communication"})}),i.jsx(s.td,{children:"Push-based"}),i.jsx(s.td,{children:"Pull-based"})]}),i.jsxs(s.tr,{children:[i.jsx(s.td,{children:i.jsx(s.strong,{children:"Efficiency"})}),i.jsx(s.td,{children:"High (only when events occur)"}),i.jsx(s.td,{children:"Low (constant requests)"})]}),i.jsxs(s.tr,{children:[i.jsx(s.td,{children:i.jsx(s.strong,{children:"Real-time"})}),i.jsx(s.td,{children:"Near-instant"}),i.jsx(s.td,{children:"Delayed by polling interval"})]}),i.jsxs(s.tr,{children:[i.jsx(s.td,{children:i.jsx(s.strong,{children:"Server Load"})}),i.jsx(s.td,{children:"Minimal"}),i.jsx(s.td,{children:"High (frequent requests)"})]}),i.jsxs(s.tr,{children:[i.jsx(s.td,{children:i.jsx(s.strong,{children:"Complexity"})}),i.jsx(s.td,{children:"Requires public endpoint"}),i.jsx(s.td,{children:"Simpler to implement"})]})]})]}),`
`,i.jsx(s.h2,{id:"common-use-cases",children:"Common Use Cases"}),`
`,i.jsx(s.p,{children:"Webhooks are widely used for:"}),`
`,i.jsxs(s.ul,{children:[`
`,i.jsxs(s.li,{children:[i.jsx(s.strong,{children:"Payment Processing"}),": Stripe, PayPal notify applications of payment events"]}),`
`,i.jsxs(s.li,{children:[i.jsx(s.strong,{children:"Version Control"}),": GitHub, GitLab trigger CI/CD pipelines on code pushes"]}),`
`,i.jsxs(s.li,{children:[i.jsx(s.strong,{children:"Communication"}),": Slack, Discord send notifications for channel events"]}),`
`,i.jsxs(s.li,{children:[i.jsx(s.strong,{children:"Form Submissions"}),": Typeform, Google Forms notify backends of new responses"]}),`
`,i.jsxs(s.li,{children:[i.jsx(s.strong,{children:"E-commerce"}),": Shopify notifies of order creation, fulfillment, cancellation"]}),`
`,i.jsxs(s.li,{children:[i.jsx(s.strong,{children:"Monitoring"}),": Datadog, PagerDuty alert systems of incidents"]}),`
`]}),`
`,i.jsx(s.h2,{id:"implementation-considerations",children:"Implementation Considerations"}),`
`,i.jsx(s.h3,{id:"security",children:"Security"}),`
`,i.jsxs(s.ul,{children:[`
`,i.jsxs(s.li,{children:[i.jsx(s.strong,{children:"Signature Verification"}),": Validate webhook authenticity using HMAC signatures or tokens"]}),`
`,i.jsxs(s.li,{children:[i.jsx(s.strong,{children:"HTTPS Only"}),": Always use encrypted connections to protect data in transit"]}),`
`,i.jsxs(s.li,{children:[i.jsx(s.strong,{children:"IP Whitelisting"}),": Restrict webhook sources to known IP addresses when possible"]}),`
`,i.jsxs(s.li,{children:[i.jsx(s.strong,{children:"Request Validation"}),": Verify payload structure and content before processing"]}),`
`]}),`
`,i.jsx(s.h3,{id:"reliability",children:"Reliability"}),`
`,i.jsxs(s.ul,{children:[`
`,i.jsxs(s.li,{children:[i.jsx(s.strong,{children:"Idempotency"}),": Handle duplicate webhook deliveries gracefully"]}),`
`,i.jsxs(s.li,{children:[i.jsx(s.strong,{children:"Retry Logic"}),": Source systems typically retry failed webhooks with exponential backoff"]}),`
`,i.jsxs(s.li,{children:[i.jsx(s.strong,{children:"Timeout Handling"}),": Respond quickly (within 5-10 seconds) to avoid retries"]}),`
`,i.jsxs(s.li,{children:[i.jsx(s.strong,{children:"Async Processing"}),": Queue webhook payloads for background processing to respond quickly"]}),`
`]}),`
`,i.jsx(s.h3,{id:"debugging",children:"Debugging"}),`
`,i.jsxs(s.ul,{children:[`
`,i.jsxs(s.li,{children:[i.jsx(s.strong,{children:"Logging"}),": Record all incoming webhook requests for troubleshooting"]}),`
`,i.jsxs(s.li,{children:[i.jsx(s.strong,{children:"Webhook Testing Tools"}),": Use services like webhook.site or ngrok for local development"]}),`
`,i.jsxs(s.li,{children:[i.jsx(s.strong,{children:"Replay Capability"}),": Store raw payloads to replay events during debugging"]}),`
`]}),`
`,i.jsx(s.h2,{id:"example-webhook-payload",children:"Example Webhook Payload"}),`
`,i.jsx(s.p,{children:"A typical webhook payload from GitHub for a push event:"}),`
`,i.jsx(s.figure,{"data-rehype-pretty-code-figure":"",children:i.jsx(s.pre,{style:{"--shiki-dark":"#e6edf3","--shiki-light":"#D4D4D4","--shiki-dark-bg":"#0d1117","--shiki-light-bg":"#1E1E1E"},tabIndex:"0","data-language":"json","data-theme":"github-dark-default dark-plus",children:i.jsxs(s.code,{"data-language":"json","data-theme":"github-dark-default dark-plus",style:{display:"grid"},children:[i.jsx(s.span,{"data-line":"",children:i.jsx(s.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:"{"})}),`
`,i.jsxs(s.span,{"data-line":"",children:[i.jsx(s.span,{style:{"--shiki-dark":"#7EE787","--shiki-light":"#9CDCFE"},children:'  "ref"'}),i.jsx(s.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:": "}),i.jsx(s.span,{style:{"--shiki-dark":"#A5D6FF","--shiki-light":"#CE9178"},children:'"refs/heads/main"'}),i.jsx(s.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:","})]}),`
`,i.jsxs(s.span,{"data-line":"",children:[i.jsx(s.span,{style:{"--shiki-dark":"#7EE787","--shiki-light":"#9CDCFE"},children:'  "repository"'}),i.jsx(s.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:": {"})]}),`
`,i.jsxs(s.span,{"data-line":"",children:[i.jsx(s.span,{style:{"--shiki-dark":"#7EE787","--shiki-light":"#9CDCFE"},children:'    "name"'}),i.jsx(s.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:": "}),i.jsx(s.span,{style:{"--shiki-dark":"#A5D6FF","--shiki-light":"#CE9178"},children:'"my-repo"'}),i.jsx(s.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:","})]}),`
`,i.jsxs(s.span,{"data-line":"",children:[i.jsx(s.span,{style:{"--shiki-dark":"#7EE787","--shiki-light":"#9CDCFE"},children:'    "full_name"'}),i.jsx(s.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:": "}),i.jsx(s.span,{style:{"--shiki-dark":"#A5D6FF","--shiki-light":"#CE9178"},children:'"user/my-repo"'}),i.jsx(s.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:","})]}),`
`,i.jsxs(s.span,{"data-line":"",children:[i.jsx(s.span,{style:{"--shiki-dark":"#7EE787","--shiki-light":"#9CDCFE"},children:'    "url"'}),i.jsx(s.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:": "}),i.jsx(s.span,{style:{"--shiki-dark":"#A5D6FF","--shiki-light":"#CE9178"},children:'"https://github.com/user/my-repo"'})]}),`
`,i.jsx(s.span,{"data-line":"",children:i.jsx(s.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:"  },"})}),`
`,i.jsxs(s.span,{"data-line":"",children:[i.jsx(s.span,{style:{"--shiki-dark":"#7EE787","--shiki-light":"#9CDCFE"},children:'  "pusher"'}),i.jsx(s.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:": {"})]}),`
`,i.jsxs(s.span,{"data-line":"",children:[i.jsx(s.span,{style:{"--shiki-dark":"#7EE787","--shiki-light":"#9CDCFE"},children:'    "name"'}),i.jsx(s.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:": "}),i.jsx(s.span,{style:{"--shiki-dark":"#A5D6FF","--shiki-light":"#CE9178"},children:'"username"'}),i.jsx(s.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:","})]}),`
`,i.jsxs(s.span,{"data-line":"",children:[i.jsx(s.span,{style:{"--shiki-dark":"#7EE787","--shiki-light":"#9CDCFE"},children:'    "email"'}),i.jsx(s.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:": "}),i.jsx(s.span,{style:{"--shiki-dark":"#A5D6FF","--shiki-light":"#CE9178"},children:'"user@example.com"'})]}),`
`,i.jsx(s.span,{"data-line":"",children:i.jsx(s.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:"  },"})}),`
`,i.jsxs(s.span,{"data-line":"",children:[i.jsx(s.span,{style:{"--shiki-dark":"#7EE787","--shiki-light":"#9CDCFE"},children:'  "commits"'}),i.jsx(s.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:": ["})]}),`
`,i.jsx(s.span,{"data-line":"",children:i.jsx(s.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:"    {"})}),`
`,i.jsxs(s.span,{"data-line":"",children:[i.jsx(s.span,{style:{"--shiki-dark":"#7EE787","--shiki-light":"#9CDCFE"},children:'      "id"'}),i.jsx(s.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:": "}),i.jsx(s.span,{style:{"--shiki-dark":"#A5D6FF","--shiki-light":"#CE9178"},children:'"abc123"'}),i.jsx(s.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:","})]}),`
`,i.jsxs(s.span,{"data-line":"",children:[i.jsx(s.span,{style:{"--shiki-dark":"#7EE787","--shiki-light":"#9CDCFE"},children:'      "message"'}),i.jsx(s.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:": "}),i.jsx(s.span,{style:{"--shiki-dark":"#A5D6FF","--shiki-light":"#CE9178"},children:'"Fix bug in authentication"'}),i.jsx(s.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:","})]}),`
`,i.jsxs(s.span,{"data-line":"",children:[i.jsx(s.span,{style:{"--shiki-dark":"#7EE787","--shiki-light":"#9CDCFE"},children:'      "timestamp"'}),i.jsx(s.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:": "}),i.jsx(s.span,{style:{"--shiki-dark":"#A5D6FF","--shiki-light":"#CE9178"},children:'"2025-10-01T09:30:00Z"'}),i.jsx(s.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:","})]}),`
`,i.jsxs(s.span,{"data-line":"",children:[i.jsx(s.span,{style:{"--shiki-dark":"#7EE787","--shiki-light":"#9CDCFE"},children:'      "author"'}),i.jsx(s.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:": {"})]}),`
`,i.jsxs(s.span,{"data-line":"",children:[i.jsx(s.span,{style:{"--shiki-dark":"#7EE787","--shiki-light":"#9CDCFE"},children:'        "name"'}),i.jsx(s.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:": "}),i.jsx(s.span,{style:{"--shiki-dark":"#A5D6FF","--shiki-light":"#CE9178"},children:'"Developer"'}),i.jsx(s.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:","})]}),`
`,i.jsxs(s.span,{"data-line":"",children:[i.jsx(s.span,{style:{"--shiki-dark":"#7EE787","--shiki-light":"#9CDCFE"},children:'        "email"'}),i.jsx(s.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:": "}),i.jsx(s.span,{style:{"--shiki-dark":"#A5D6FF","--shiki-light":"#CE9178"},children:'"dev@example.com"'})]}),`
`,i.jsx(s.span,{"data-line":"",children:i.jsx(s.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:"      }"})}),`
`,i.jsx(s.span,{"data-line":"",children:i.jsx(s.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:"    }"})}),`
`,i.jsx(s.span,{"data-line":"",children:i.jsx(s.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:"  ]"})}),`
`,i.jsx(s.span,{"data-line":"",children:i.jsx(s.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:"}"})})]})})}),`
`,i.jsx(s.h2,{id:"best-practices",children:"Best Practices"}),`
`,i.jsxs(s.ul,{children:[`
`,i.jsxs(s.li,{children:[i.jsx(s.strong,{children:"Acknowledge Quickly"}),": Return 200 OK immediately, process asynchronously"]}),`
`,i.jsxs(s.li,{children:[i.jsx(s.strong,{children:"Validate Signatures"}),": Always verify webhook authenticity before processing"]}),`
`,i.jsxs(s.li,{children:[i.jsx(s.strong,{children:"Handle Failures Gracefully"}),": Implement proper error handling and logging"]}),`
`,i.jsxs(s.li,{children:[i.jsx(s.strong,{children:"Monitor Webhook Health"}),": Track delivery success rates and processing times"]}),`
`,i.jsxs(s.li,{children:[i.jsx(s.strong,{children:"Document Webhook Format"}),": Provide clear documentation for webhook consumers"]}),`
`,i.jsxs(s.li,{children:[i.jsx(s.strong,{children:"Version Your Webhooks"}),": Support backward compatibility when changing payload structure"]}),`
`]})]})}function h(e={}){const{wrapper:s}=e.components||{};return s?i.jsx(s,{...e,children:i.jsx(n,{...e})}):n(e)}export{h as default,t as frontmatter,r as toc};
