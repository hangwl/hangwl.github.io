import{j as e}from"./index-DOTpoARq.js";const o={title:"BM25",description:"Keyword search algorithm for information retrieval.",date:"2025-08-04",tags:["RAG","LLMs","Retriever","Keyword Search"],published:!0,showcase:!0};function n(r){const t={h2:"h2",img:"img",p:"p",...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.h2,{children:"Introduction"}),`
`,e.jsx(t.p,{children:"BM25 (Best Matching 25) is the standard keyword search algorithm for in-production retrievers. It improvements TF-IDF, and offers better performance and flexibility at a similar cost."}),`
`,e.jsx(t.p,{children:`The core idea of keyword search is to match documents with keywords found in a query prompt.\r
As a part of this process, both prompts and documents are converted into sparse vectors that count how often each word in a system's vocabulary appears in that piece of text.\r
Each document is then scored based on the presence of these keywords, and the documents are ranked based on their scores.`}),`
`,e.jsx(t.h2,{children:"Scoring Function"}),`
`,e.jsx(t.p,{children:e.jsx(t.img,{src:"/images/C5WuUe4HHg.png",alt:"BM25 Scoring"})}),`
`,e.jsx(t.h2,{children:"Improvements on TF-IDF"}),`
`,e.jsx(t.p,{children:e.jsx(t.img,{src:"/images/vprjm8xe2T.png",alt:"BM25 Term Frequency Saturation & Document Length Normalization"})}),`
`,e.jsx(t.h2,{children:"Tunable Parameters"}),`
`,e.jsx(t.p,{children:e.jsx(t.img,{src:"/images/g9tC4uf7bI.png",alt:"BM25 Tunable Parameters"})})]})}function a(r={}){const{wrapper:t}=r.components||{};return t?e.jsx(t,{...r,children:e.jsx(n,{...r})}):n(r)}export{a as default,o as frontmatter};
