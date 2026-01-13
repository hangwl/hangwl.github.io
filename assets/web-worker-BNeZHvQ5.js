import{j as e}from"./index-DmIt1YIB.js";const t=[{id:"introduction",title:"Introduction",level:2},{id:"why-use-web-workers",title:"Why Use Web Workers?",level:2},{id:"how-web-workers-work",title:"How Web Workers Work",level:2},{id:"example-web-workers-in-action",title:"Example: Web Workers in Action",level:2}],o={title:"Web Workers"};function r(s){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"introduction",children:"Introduction"}),`
`,e.jsxs(n.p,{children:["Web Workers are a browser API that allows JavaScript code to run in ",e.jsx(n.strong,{children:"background threads separate from the main execution thread"})," of a web application. This enables computationally intensive tasks to run without blocking the user interface, keeping the application responsive."]}),`
`,e.jsx(n.h2,{id:"why-use-web-workers",children:"Why Use Web Workers?"}),`
`,e.jsx(n.p,{children:"JavaScript is single-threaded by default, meaning all code execution, DOM manipulation, and UI rendering happen on the same thread. When a long-running computation executes, it blocks the main thread and causes the UI to freeze, resulting in a poor user experience."}),`
`,e.jsx(n.p,{children:"Web Workers solve this problem by:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Preventing UI Blocking"}),": Heavy computations run in the background without freezing the interface"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Parallel Processing"}),": Multiple workers can run simultaneously, leveraging multi-core processors"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Improved Responsiveness"}),": The main thread remains free to handle user interactions and render updates"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Separation of Concerns"}),": Complex logic can be isolated from UI code"]}),`
`]}),`
`,e.jsx(n.h2,{id:"how-web-workers-work",children:"How Web Workers Work"}),`
`,e.jsxs(n.p,{children:["Web Workers run in a separate global context from the main thread. They communicate with the main thread through a ",e.jsx(n.strong,{children:"message-passing system"})," using ",e.jsx(n.code,{children:"postMessage()"})," and ",e.jsx(n.code,{children:"onmessage"})," event handlers."]}),`
`,e.jsx(n.p,{children:"Key characteristics:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"No DOM Access"}),": Workers cannot directly manipulate the DOM or access window objects"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Limited APIs"}),": Workers have access to a subset of browser APIs (e.g., fetch, timers, WebSockets)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Message Passing"}),": Data is passed between threads by copying (structured cloning), not by sharing references"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Independent Execution"}),": Workers run independently and don't block the main thread"]}),`
`]}),`
`,e.jsx(n.h2,{id:"example-web-workers-in-action",children:"Example: Web Workers in Action"}),`
`,e.jsxs(n.p,{children:["To see Web Workers in action, check out the ",e.jsx(n.a,{href:"/lab/ts-demo",children:"Thompson Sampling Demo"}),", which uses a dedicated worker to run intensive simulation computations in the background. The demo showcases how Web Workers enable:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Smooth Animations"}),": Charts and UI updates remain fluid even during intensive calculations"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"High Iteration Rates"}),": Running hundreds of simulation steps per second without lag"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Responsive Controls"}),": Adjusting parameters and interacting with the UI while simulation runs continuously"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Complex Computations"}),": Beta sampling, auction calculations, and mean-reversion updates without blocking the main thread"]}),`
`]}),`
`,e.jsx(n.p,{children:"The worker handles all simulation logic, state management, and calculations, while the main thread focuses on rendering and user interactions."})]})}function a(s={}){const{wrapper:n}=s.components||{};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{a as default,o as frontmatter,t as toc};
