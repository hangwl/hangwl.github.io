import{j as s}from"./index-CtAT4ExP.js";const r={title:"Webhooks",links:["http","https","rest-api"]};function n(e){const i={code:"code",figure:"figure",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...e.components};return s.jsxs(s.Fragment,{children:[s.jsx(i.h2,{children:"Introduction"}),`
`,s.jsxs(i.p,{children:["Webhooks are ",s.jsx(i.strong,{children:"user-defined HTTP callbacks"})," that enable real-time, event-driven communication between applications. When a specific event occurs in a source system, it automatically sends an HTTP POST request with event data to a pre-configured URL endpoint in the destination system."]}),`
`,s.jsxs(i.p,{children:["Unlike traditional APIs where clients repeatedly poll servers for updates, webhooks use a ",s.jsx(i.strong,{children:"push model"})," where the server proactively notifies clients when events occur."]}),`
`,s.jsx(i.h2,{children:"How Webhooks Work"}),`
`,s.jsx(i.p,{children:"The webhook workflow follows these steps:"}),`
`,s.jsxs(i.ol,{children:[`
`,s.jsxs(i.li,{children:[s.jsx(i.strong,{children:"Registration"}),": The receiving application registers a webhook URL with the source application"]}),`
`,s.jsxs(i.li,{children:[s.jsx(i.strong,{children:"Event Trigger"}),": An event occurs in the source system (e.g., new payment, form submission, code push)"]}),`
`,s.jsxs(i.li,{children:[s.jsx(i.strong,{children:"HTTP Request"}),": The source system sends an HTTP POST request to the registered URL with event data"]}),`
`,s.jsxs(i.li,{children:[s.jsx(i.strong,{children:"Processing"}),": The receiving application processes the webhook payload and takes appropriate action"]}),`
`,s.jsxs(i.li,{children:[s.jsx(i.strong,{children:"Response"}),": The receiver sends an HTTP response (typically 200 OK) to acknowledge receipt"]}),`
`]}),`
`,s.jsx(i.h2,{children:"Webhooks vs Polling"}),`
`,s.jsxs(i.table,{children:[s.jsx(i.thead,{children:s.jsxs(i.tr,{children:[s.jsx(i.th,{children:"Aspect"}),s.jsx(i.th,{children:"Webhooks"}),s.jsx(i.th,{children:"Polling"})]})}),s.jsxs(i.tbody,{children:[s.jsxs(i.tr,{children:[s.jsx(i.td,{children:s.jsx(i.strong,{children:"Communication"})}),s.jsx(i.td,{children:"Push-based"}),s.jsx(i.td,{children:"Pull-based"})]}),s.jsxs(i.tr,{children:[s.jsx(i.td,{children:s.jsx(i.strong,{children:"Efficiency"})}),s.jsx(i.td,{children:"High (only when events occur)"}),s.jsx(i.td,{children:"Low (constant requests)"})]}),s.jsxs(i.tr,{children:[s.jsx(i.td,{children:s.jsx(i.strong,{children:"Real-time"})}),s.jsx(i.td,{children:"Near-instant"}),s.jsx(i.td,{children:"Delayed by polling interval"})]}),s.jsxs(i.tr,{children:[s.jsx(i.td,{children:s.jsx(i.strong,{children:"Server Load"})}),s.jsx(i.td,{children:"Minimal"}),s.jsx(i.td,{children:"High (frequent requests)"})]}),s.jsxs(i.tr,{children:[s.jsx(i.td,{children:s.jsx(i.strong,{children:"Complexity"})}),s.jsx(i.td,{children:"Requires public endpoint"}),s.jsx(i.td,{children:"Simpler to implement"})]})]})]}),`
`,s.jsx(i.h2,{children:"Common Use Cases"}),`
`,s.jsx(i.p,{children:"Webhooks are widely used for:"}),`
`,s.jsxs(i.ul,{children:[`
`,s.jsxs(i.li,{children:[s.jsx(i.strong,{children:"Payment Processing"}),": Stripe, PayPal notify applications of payment events"]}),`
`,s.jsxs(i.li,{children:[s.jsx(i.strong,{children:"Version Control"}),": GitHub, GitLab trigger CI/CD pipelines on code pushes"]}),`
`,s.jsxs(i.li,{children:[s.jsx(i.strong,{children:"Communication"}),": Slack, Discord send notifications for channel events"]}),`
`,s.jsxs(i.li,{children:[s.jsx(i.strong,{children:"Form Submissions"}),": Typeform, Google Forms notify backends of new responses"]}),`
`,s.jsxs(i.li,{children:[s.jsx(i.strong,{children:"E-commerce"}),": Shopify notifies of order creation, fulfillment, cancellation"]}),`
`,s.jsxs(i.li,{children:[s.jsx(i.strong,{children:"Monitoring"}),": Datadog, PagerDuty alert systems of incidents"]}),`
`]}),`
`,s.jsx(i.h2,{children:"Implementation Considerations"}),`
`,s.jsx(i.h3,{children:"Security"}),`
`,s.jsxs(i.ul,{children:[`
`,s.jsxs(i.li,{children:[s.jsx(i.strong,{children:"Signature Verification"}),": Validate webhook authenticity using HMAC signatures or tokens"]}),`
`,s.jsxs(i.li,{children:[s.jsx(i.strong,{children:"HTTPS Only"}),": Always use encrypted connections to protect data in transit"]}),`
`,s.jsxs(i.li,{children:[s.jsx(i.strong,{children:"IP Whitelisting"}),": Restrict webhook sources to known IP addresses when possible"]}),`
`,s.jsxs(i.li,{children:[s.jsx(i.strong,{children:"Request Validation"}),": Verify payload structure and content before processing"]}),`
`]}),`
`,s.jsx(i.h3,{children:"Reliability"}),`
`,s.jsxs(i.ul,{children:[`
`,s.jsxs(i.li,{children:[s.jsx(i.strong,{children:"Idempotency"}),": Handle duplicate webhook deliveries gracefully"]}),`
`,s.jsxs(i.li,{children:[s.jsx(i.strong,{children:"Retry Logic"}),": Source systems typically retry failed webhooks with exponential backoff"]}),`
`,s.jsxs(i.li,{children:[s.jsx(i.strong,{children:"Timeout Handling"}),": Respond quickly (within 5-10 seconds) to avoid retries"]}),`
`,s.jsxs(i.li,{children:[s.jsx(i.strong,{children:"Async Processing"}),": Queue webhook payloads for background processing to respond quickly"]}),`
`]}),`
`,s.jsx(i.h3,{children:"Debugging"}),`
`,s.jsxs(i.ul,{children:[`
`,s.jsxs(i.li,{children:[s.jsx(i.strong,{children:"Logging"}),": Record all incoming webhook requests for troubleshooting"]}),`
`,s.jsxs(i.li,{children:[s.jsx(i.strong,{children:"Webhook Testing Tools"}),": Use services like webhook.site or ngrok for local development"]}),`
`,s.jsxs(i.li,{children:[s.jsx(i.strong,{children:"Replay Capability"}),": Store raw payloads to replay events during debugging"]}),`
`]}),`
`,s.jsx(i.h2,{children:"Example Webhook Payload"}),`
`,s.jsx(i.p,{children:"A typical webhook payload from GitHub for a push event:"}),`
`,s.jsx(i.figure,{"data-rehype-pretty-code-figure":"",children:s.jsx(i.pre,{style:{"--shiki-dark":"#e6edf3","--shiki-light":"#D4D4D4","--shiki-dark-bg":"#0d1117","--shiki-light-bg":"#1E1E1E"},tabIndex:"0","data-language":"json","data-theme":"github-dark-default dark-plus",children:s.jsxs(i.code,{"data-language":"json","data-theme":"github-dark-default dark-plus",style:{display:"grid"},children:[s.jsx(i.span,{"data-line":"",children:s.jsx(i.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:"{"})}),`
`,s.jsxs(i.span,{"data-line":"",children:[s.jsx(i.span,{style:{"--shiki-dark":"#7EE787","--shiki-light":"#9CDCFE"},children:'  "ref"'}),s.jsx(i.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:": "}),s.jsx(i.span,{style:{"--shiki-dark":"#A5D6FF","--shiki-light":"#CE9178"},children:'"refs/heads/main"'}),s.jsx(i.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:","})]}),`
`,s.jsxs(i.span,{"data-line":"",children:[s.jsx(i.span,{style:{"--shiki-dark":"#7EE787","--shiki-light":"#9CDCFE"},children:'  "repository"'}),s.jsx(i.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:": {"})]}),`
`,s.jsxs(i.span,{"data-line":"",children:[s.jsx(i.span,{style:{"--shiki-dark":"#7EE787","--shiki-light":"#9CDCFE"},children:'    "name"'}),s.jsx(i.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:": "}),s.jsx(i.span,{style:{"--shiki-dark":"#A5D6FF","--shiki-light":"#CE9178"},children:'"my-repo"'}),s.jsx(i.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:","})]}),`
`,s.jsxs(i.span,{"data-line":"",children:[s.jsx(i.span,{style:{"--shiki-dark":"#7EE787","--shiki-light":"#9CDCFE"},children:'    "full_name"'}),s.jsx(i.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:": "}),s.jsx(i.span,{style:{"--shiki-dark":"#A5D6FF","--shiki-light":"#CE9178"},children:'"user/my-repo"'}),s.jsx(i.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:","})]}),`
`,s.jsxs(i.span,{"data-line":"",children:[s.jsx(i.span,{style:{"--shiki-dark":"#7EE787","--shiki-light":"#9CDCFE"},children:'    "url"'}),s.jsx(i.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:": "}),s.jsx(i.span,{style:{"--shiki-dark":"#A5D6FF","--shiki-light":"#CE9178"},children:'"https://github.com/user/my-repo"'})]}),`
`,s.jsx(i.span,{"data-line":"",children:s.jsx(i.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:"  },"})}),`
`,s.jsxs(i.span,{"data-line":"",children:[s.jsx(i.span,{style:{"--shiki-dark":"#7EE787","--shiki-light":"#9CDCFE"},children:'  "pusher"'}),s.jsx(i.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:": {"})]}),`
`,s.jsxs(i.span,{"data-line":"",children:[s.jsx(i.span,{style:{"--shiki-dark":"#7EE787","--shiki-light":"#9CDCFE"},children:'    "name"'}),s.jsx(i.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:": "}),s.jsx(i.span,{style:{"--shiki-dark":"#A5D6FF","--shiki-light":"#CE9178"},children:'"username"'}),s.jsx(i.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:","})]}),`
`,s.jsxs(i.span,{"data-line":"",children:[s.jsx(i.span,{style:{"--shiki-dark":"#7EE787","--shiki-light":"#9CDCFE"},children:'    "email"'}),s.jsx(i.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:": "}),s.jsx(i.span,{style:{"--shiki-dark":"#A5D6FF","--shiki-light":"#CE9178"},children:'"user@example.com"'})]}),`
`,s.jsx(i.span,{"data-line":"",children:s.jsx(i.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:"  },"})}),`
`,s.jsxs(i.span,{"data-line":"",children:[s.jsx(i.span,{style:{"--shiki-dark":"#7EE787","--shiki-light":"#9CDCFE"},children:'  "commits"'}),s.jsx(i.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:": ["})]}),`
`,s.jsx(i.span,{"data-line":"",children:s.jsx(i.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:"    {"})}),`
`,s.jsxs(i.span,{"data-line":"",children:[s.jsx(i.span,{style:{"--shiki-dark":"#7EE787","--shiki-light":"#9CDCFE"},children:'      "id"'}),s.jsx(i.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:": "}),s.jsx(i.span,{style:{"--shiki-dark":"#A5D6FF","--shiki-light":"#CE9178"},children:'"abc123"'}),s.jsx(i.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:","})]}),`
`,s.jsxs(i.span,{"data-line":"",children:[s.jsx(i.span,{style:{"--shiki-dark":"#7EE787","--shiki-light":"#9CDCFE"},children:'      "message"'}),s.jsx(i.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:": "}),s.jsx(i.span,{style:{"--shiki-dark":"#A5D6FF","--shiki-light":"#CE9178"},children:'"Fix bug in authentication"'}),s.jsx(i.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:","})]}),`
`,s.jsxs(i.span,{"data-line":"",children:[s.jsx(i.span,{style:{"--shiki-dark":"#7EE787","--shiki-light":"#9CDCFE"},children:'      "timestamp"'}),s.jsx(i.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:": "}),s.jsx(i.span,{style:{"--shiki-dark":"#A5D6FF","--shiki-light":"#CE9178"},children:'"2025-10-01T09:30:00Z"'}),s.jsx(i.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:","})]}),`
`,s.jsxs(i.span,{"data-line":"",children:[s.jsx(i.span,{style:{"--shiki-dark":"#7EE787","--shiki-light":"#9CDCFE"},children:'      "author"'}),s.jsx(i.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:": {"})]}),`
`,s.jsxs(i.span,{"data-line":"",children:[s.jsx(i.span,{style:{"--shiki-dark":"#7EE787","--shiki-light":"#9CDCFE"},children:'        "name"'}),s.jsx(i.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:": "}),s.jsx(i.span,{style:{"--shiki-dark":"#A5D6FF","--shiki-light":"#CE9178"},children:'"Developer"'}),s.jsx(i.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:","})]}),`
`,s.jsxs(i.span,{"data-line":"",children:[s.jsx(i.span,{style:{"--shiki-dark":"#7EE787","--shiki-light":"#9CDCFE"},children:'        "email"'}),s.jsx(i.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:": "}),s.jsx(i.span,{style:{"--shiki-dark":"#A5D6FF","--shiki-light":"#CE9178"},children:'"dev@example.com"'})]}),`
`,s.jsx(i.span,{"data-line":"",children:s.jsx(i.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:"      }"})}),`
`,s.jsx(i.span,{"data-line":"",children:s.jsx(i.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:"    }"})}),`
`,s.jsx(i.span,{"data-line":"",children:s.jsx(i.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:"  ]"})}),`
`,s.jsx(i.span,{"data-line":"",children:s.jsx(i.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:"}"})})]})})}),`
`,s.jsx(i.h2,{children:"Best Practices"}),`
`,s.jsxs(i.ul,{children:[`
`,s.jsxs(i.li,{children:[s.jsx(i.strong,{children:"Acknowledge Quickly"}),": Return 200 OK immediately, process asynchronously"]}),`
`,s.jsxs(i.li,{children:[s.jsx(i.strong,{children:"Validate Signatures"}),": Always verify webhook authenticity before processing"]}),`
`,s.jsxs(i.li,{children:[s.jsx(i.strong,{children:"Handle Failures Gracefully"}),": Implement proper error handling and logging"]}),`
`,s.jsxs(i.li,{children:[s.jsx(i.strong,{children:"Monitor Webhook Health"}),": Track delivery success rates and processing times"]}),`
`,s.jsxs(i.li,{children:[s.jsx(i.strong,{children:"Document Webhook Format"}),": Provide clear documentation for webhook consumers"]}),`
`,s.jsxs(i.li,{children:[s.jsx(i.strong,{children:"Version Your Webhooks"}),": Support backward compatibility when changing payload structure"]}),`
`]})]})}function h(e={}){const{wrapper:i}=e.components||{};return i?s.jsx(i,{...e,children:s.jsx(n,{...e})}):n(e)}export{h as default,r as frontmatter};
