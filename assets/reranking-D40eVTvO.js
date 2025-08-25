import{j as e}from"./index-RVLXh9cB.js";const i={title:"Reranking"};function s(r){const n={h2:"h2",img:"img",p:"p",strong:"strong",...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{children:"Introduction"}),`
`,e.jsxs(n.p,{children:["Reranking is a ",e.jsx(n.strong,{children:"post-retrieval process"})," whereby retrieved documents as reordered using high-performing models to assess their relevance to a given query."]}),`
`,e.jsxs(n.p,{children:["Typically, rerankers have a ",e.jsx(n.strong,{children:"cross-encoder"}),` architecture that may increase the latency of the system.\r
However, they can significantly improve the ranking quality of the retrieved documents.`]}),`
`,e.jsxs(n.p,{children:["Alternatively, ",e.jsx(n.strong,{children:"LLMs"}),` can also be used as a reranker.\r
Although this approach seems increasingly feasible as LLMs become cheaper, it is as inefficient as a cross-encoder model simply because vectors cannot be precomputed.`]}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"/images/hH4trChWVS.png",alt:"Reranking"})})]})}function a(r={}){const{wrapper:n}=r.components||{};return n?e.jsx(n,{...r,children:e.jsx(s,{...r})}):s(r)}export{a as default,i as frontmatter};
