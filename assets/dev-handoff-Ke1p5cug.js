import{j as e}from"./index-895OKoX5.js";const t=[{id:"developer-handoff",title:"Developer Handoff",level:1},{id:"1-generating-the-theme",title:"1. Generating the Theme",level:2},{id:"2-using-quest-optional",title:"2. Using Quest (Optional)",level:2},{id:"3-manual-inspection-dev-mode",title:"3. Manual Inspection (Dev Mode)",level:2},{id:"related",title:"Related",level:2}],o={title:"MUI Developer Handoff"};function l(i){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"developer-handoff",children:"Developer Handoff"}),`
`,e.jsxs(n.p,{children:["How to move from Figma to your codebase (",e.jsx(n.code,{children:"src/theme/"}),")."]}),`
`,e.jsx(n.h2,{id:"1-generating-the-theme",children:"1. Generating the Theme"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"Open your Figma library file."}),`
`,e.jsxs(n.li,{children:["Run ",e.jsx(n.strong,{children:"Material UI Sync"})," plugin."]}),`
`,e.jsxs(n.li,{children:["Select ",e.jsx(n.strong,{children:'"Generate Theme"'}),"."]}),`
`,e.jsxs(n.li,{children:["Copy the output or download ",e.jsx(n.code,{children:"theme.ts"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"2-using-quest-optional",children:"2. Using Quest (Optional)"}),`
`,e.jsx(n.p,{children:"For entire screens:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Use the ",e.jsx(n.strong,{children:"Quest"})," plugin."]}),`
`,e.jsx(n.li,{children:"Select your Frame."}),`
`,e.jsxs(n.li,{children:["Export to React code.",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.em,{children:"Note"}),": This is often overkill for simple changes, but great for initial page scaffolding."]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"3-manual-inspection-dev-mode",children:"3. Manual Inspection (Dev Mode)"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"Select a component (e.g., a Card)."}),`
`,e.jsxs(n.li,{children:["Switch to ",e.jsx(n.strong,{children:"Dev Mode"})," (",e.jsx(n.code,{children:"Shift + D"}),")."]}),`
`,e.jsxs(n.li,{children:["Look at the ",e.jsx(n.strong,{children:"Props"})," section.",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["It explicitly lists: ",e.jsx(n.code,{children:"elevation: 1"}),", ",e.jsx(n.code,{children:"variant: outlined"}),"."]}),`
`,e.jsxs(n.li,{children:["This is much safer than guessing ",e.jsx(n.code,{children:"box-shadow"})," values manually."]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"related",children:"Related"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"./intro",children:"MUI Introduction"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"./workflow",children:"Design Workflow"})}),`
`]})]})}function r(i={}){const{wrapper:n}=i.components||{};return n?e.jsx(n,{...i,children:e.jsx(l,{...i})}):l(i)}export{r as default,o as frontmatter,t as toc};
