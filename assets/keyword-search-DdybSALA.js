import{j as e}from"./index-BIubLZr_.js";const o={title:"Keyword Search",links:["hybrid-search"],hide:!1};function r(t){const n={h2:"h2",h3:"h3",img:"img",p:"p",...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{children:"Introduction"}),`
`,e.jsx(n.p,{children:`The core idea of keyword search is to match documents with keywords found in a query prompt.
As a part of this process, both prompts and documents are converted into sparse vectors that count how often each word in a system's vocabulary appears in that piece of text.
Each document is then scored based on the presence of these keywords, and the documents are ranked based on their scores.`}),`
`,e.jsx(n.h2,{children:"BM25 (Best Matching 25)"}),`
`,e.jsx(n.p,{children:"BM25 (Best Matching 25) is the standard keyword search algorithm for in-production retrievers. It improvements TF-IDF, and offers better performance and flexibility at a similar cost."}),`
`,e.jsx(n.h3,{children:"Scoring Function"}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"/images/C5WuUe4HHg.png",alt:"BM25 Scoring"})}),`
`,e.jsx(n.h3,{children:"Improvements on TF-IDF"}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"/images/vprjm8xe2T.png",alt:"BM25 Term Frequency Saturation & Document Length Normalization"})}),`
`,e.jsx(n.h3,{children:"Tunable Parameters"}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"/images/g9tC4uf7bI.png",alt:"BM25 Tunable Parameters"})})]})}function a(t={}){const{wrapper:n}=t.components||{};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}export{a as default,o as frontmatter};
