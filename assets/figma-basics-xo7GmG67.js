import{j as e}from"./index-895OKoX5.js";const r=[{id:"interface-basics",title:"Interface Basics",level:2},{id:"frames-vs-groups",title:"Frames vs Groups",level:2},{id:"groups-ctrl--g",title:"Groups (Ctrl + G)",level:3},{id:"frames-f",title:"Frames (F)",level:3},{id:"useful-shortcuts",title:"Useful Shortcuts",level:2},{id:"related",title:"Related",level:2}],i={title:"Figma Interface Basics"};function n(s){const t={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.h2,{id:"interface-basics",children:"Interface Basics"}),`
`,e.jsx(t.p,{children:"If you're used to VS Code, the Figma interface is surprisingly similar:"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Left Sidebar (Explorer)"}),": Manage Layers, Assets, and Pages.",`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Layers"}),": The DOM tree of your design."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Assets"}),": Reusable components (like your details components library)."]}),`
`]}),`
`]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Canvas (Editor)"}),": Where you build your UI.",`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["Hold ",e.jsx(t.code,{children:"Space"})," to pan around."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"Ctrl"})," + ",e.jsx(t.code,{children:"Scroll"})," to zoom."]}),`
`]}),`
`]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Right Sidebar (Properties)"}),": The CSS panel. Controls alignment, colors, and layout."]}),`
`]}),`
`,e.jsx(t.h2,{id:"frames-vs-groups",children:"Frames vs Groups"}),`
`,e.jsx(t.p,{children:"This is the most critical concept for developers."}),`
`,e.jsxs(t.h3,{id:"groups-ctrl--g",children:["Groups (",e.jsx(t.code,{children:"Ctrl + G"}),")"]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Analogy"}),": A ",e.jsx(t.code,{children:"div"})," with ",e.jsx(t.code,{children:"display: contents"})," (sort of)."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Behavior"}),": It just wraps the selection. It has no background, no padding, and bounds are determined ",e.jsx(t.em,{children:"only"})," by children."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Use Case"}),": Quick selections or grouping vectors in an illustration. ",e.jsx(t.strong,{children:"Avoid using for UI layout."})]}),`
`]}),`
`,e.jsxs(t.h3,{id:"frames-f",children:["Frames (",e.jsx(t.code,{children:"F"}),")"]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Analogy"}),": A ",e.jsx(t.code,{children:"div"})," or ",e.jsx(t.code,{children:"section"}),"."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Behavior"}),": Has its own properties (background, clips content, border radius). Can be a parent for ",e.jsx(t.strong,{children:e.jsx(t.a,{href:"/notes/auto-layout",children:"Auto Layout"})}),"."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Use Case"}),": ",e.jsx(t.strong,{children:"Everything in UI"}),". Screens, buttons, cards, Navbars. Use Frames for almost everything."]}),`
`]}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Tip"}),": If you are making a button, draw a Frame, not a rectangle."]}),`
`]}),`
`,e.jsx(t.h2,{id:"useful-shortcuts",children:"Useful Shortcuts"}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{style:{textAlign:"left"},children:"Action"}),e.jsx(t.th,{style:{textAlign:"left"},children:"Shortcut (Mac)"}),e.jsx(t.th,{style:{textAlign:"left"},children:"Shortcut (Win)"})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{style:{textAlign:"left"},children:e.jsx(t.strong,{children:"Pick Color"})}),e.jsx(t.td,{style:{textAlign:"left"},children:e.jsx(t.code,{children:"Ctrl + C"})}),e.jsx(t.td,{style:{textAlign:"left"},children:e.jsx(t.code,{children:"I"})})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{style:{textAlign:"left"},children:e.jsx(t.strong,{children:"Frame"})}),e.jsx(t.td,{style:{textAlign:"left"},children:e.jsx(t.code,{children:"F"})}),e.jsx(t.td,{style:{textAlign:"left"},children:e.jsx(t.code,{children:"F"})})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{style:{textAlign:"left"},children:e.jsx(t.strong,{children:"Rectangle"})}),e.jsx(t.td,{style:{textAlign:"left"},children:e.jsx(t.code,{children:"R"})}),e.jsx(t.td,{style:{textAlign:"left"},children:e.jsx(t.code,{children:"R"})})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{style:{textAlign:"left"},children:e.jsx(t.strong,{children:"Text"})}),e.jsx(t.td,{style:{textAlign:"left"},children:e.jsx(t.code,{children:"T"})}),e.jsx(t.td,{style:{textAlign:"left"},children:e.jsx(t.code,{children:"T"})})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{style:{textAlign:"left"},children:e.jsx(t.strong,{children:"Auto Layout"})}),e.jsx(t.td,{style:{textAlign:"left"},children:e.jsx(t.code,{children:"Shift + A"})}),e.jsx(t.td,{style:{textAlign:"left"},children:e.jsx(t.code,{children:"Shift + A"})})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{style:{textAlign:"left"},children:e.jsx(t.strong,{children:"Create Component"})}),e.jsx(t.td,{style:{textAlign:"left"},children:e.jsx(t.code,{children:"Opt + Cmd + K"})}),e.jsx(t.td,{style:{textAlign:"left"},children:e.jsx(t.code,{children:"Ctrl + Alt + K"})})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{style:{textAlign:"left"},children:e.jsx(t.strong,{children:"Show/Hide UI"})}),e.jsx(t.td,{style:{textAlign:"left"},children:e.jsx(t.code,{children:"Cmd + \\"})}),e.jsx(t.td,{style:{textAlign:"left"},children:e.jsx(t.code,{children:"Ctrl + \\"})})]})]})]}),`
`,e.jsx(t.h2,{id:"related",children:"Related"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"./auto-layout",children:"Auto Layout (Flexbox)"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"./components",children:"Components & Variants"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"./wireframing",children:"Wireframing Workflow"})}),`
`]})]})}function d(s={}){const{wrapper:t}=s.components||{};return t?e.jsx(t,{...s,children:e.jsx(n,{...s})}):n(s)}export{d as default,i as frontmatter,r as toc};
