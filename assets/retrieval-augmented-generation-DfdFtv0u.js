import{j as t}from"./index-895OKoX5.js";const r=[{id:"introduction",title:"Introduction",level:2},{id:"limitations",title:"Limitations",level:2}],o={title:"Retrieval Augmented Generation",links:["retriever","vector-databases"],hide:!1};function n(i){const e={h2:"h2",img:"img",li:"li",p:"p",ul:"ul",...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(e.h2,{id:"introduction",children:"Introduction"}),`
`,t.jsx(e.p,{children:'Retrieval Augmented Generation (RAG) is an approach that improves the capabilities of LLMs through the addition of information retrieval modules that allow the generation of more accurate and relevant "reasoning" outputs.'}),`
`,t.jsx(e.p,{children:t.jsx(e.img,{src:"/images/2QEYdCD9An.png",alt:"RAG Diagram"})}),`
`,t.jsx(e.h2,{id:"limitations",children:"Limitations"}),`
`,t.jsx(e.p,{children:"It addresses several limitations that LLMs face alone such as:"}),`
`,t.jsxs(e.ul,{children:[`
`,t.jsx(e.li,{children:"Outdated or limited pre-trained knowledge"}),`
`,t.jsx(e.li,{children:"Hallucinations and general inability to reliably cite factual sources"}),`
`]}),`
`,t.jsx(e.p,{children:"By directly providing LLMs with factually grounded information within an augmented prompt, we can expect to receive higher quality responses."})]})}function l(i={}){const{wrapper:e}=i.components||{};return e?t.jsx(e,{...i,children:t.jsx(n,{...i})}):n(i)}export{l as default,o as frontmatter,r as toc};
