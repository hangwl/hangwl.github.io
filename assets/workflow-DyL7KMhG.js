import{j as e}from"./index-895OKoX5.js";const t=[{id:"design-workflow",title:"Design Workflow",level:1},{id:"using-instances",title:"Using Instances",level:2},{id:"component-properties",title:"Component Properties",level:2},{id:"mapping-to-code",title:"Mapping to Code",level:2},{id:"related",title:"Related",level:2}],l={title:"Designing with MUI Components"};function s(i){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"design-workflow",children:"Design Workflow"}),`
`,e.jsx(n.p,{children:'When designing with the MUI kit, you stop thinking in "pixels" and start thinking in "props".'}),`
`,e.jsx(n.h2,{id:"using-instances",children:"Using Instances"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Press ",e.jsx(n.code,{children:"Shift + I"})," to open Assets."]}),`
`,e.jsxs(n.li,{children:["Search for ",e.jsx(n.code,{children:"Button"}),"."]}),`
`,e.jsx(n.li,{children:"Drag it onto the canvas."}),`
`]}),`
`,e.jsx(n.h2,{id:"component-properties",children:"Component Properties"}),`
`,e.jsxs(n.p,{children:["In the Right Sidebar, you won't just see generic layout tools. You'll see specific ",e.jsx(n.strong,{children:"Component Properties"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Variant"}),": ",e.jsx(n.code,{children:"text"}),", ",e.jsx(n.code,{children:"contained"}),", ",e.jsx(n.code,{children:"outlined"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Color"}),": ",e.jsx(n.code,{children:"primary"}),", ",e.jsx(n.code,{children:"secondary"}),", ",e.jsx(n.code,{children:"error"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Size"}),": ",e.jsx(n.code,{children:"small"}),", ",e.jsx(n.code,{children:"medium"}),", ",e.jsx(n.code,{children:"large"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"State"}),": ",e.jsx(n.code,{children:"enabled"}),", ",e.jsx(n.code,{children:"hover"}),", ",e.jsx(n.code,{children:"focus"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"mapping-to-code",children:"Mapping to Code"}),`
`,e.jsx(n.p,{children:"This is the superpower."}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Design"}),": You select ",e.jsx(n.code,{children:"Variant: Cameo"}),", ",e.jsx(n.code,{children:"Size: Small"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Code"}),": You write ",e.jsx(n.code,{children:'<Button variant="cameo" size="small" />'}),"."]}),`
`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Tip"}),': If you find yourself "detaching" an instance to change it, ',e.jsx(n.strong,{children:"STOP"}),'. You probably need to change a property or use a "Slot" component instead. Detaching breaks the link to code reality.']}),`
`]}),`
`,e.jsx(n.h2,{id:"related",children:"Related"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"./setup",children:"Setup & Installation"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"./dev-handoff",children:"Developer Handoff"})}),`
`]})]})}function r(i={}){const{wrapper:n}=i.components||{};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{r as default,l as frontmatter,t as toc};
