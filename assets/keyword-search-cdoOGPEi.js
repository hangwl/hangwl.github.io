import{j as e}from"./index-BKgolIEe.js";const o=[{id:"introduction",title:"Introduction",level:2},{id:"bm25-best-matching-25",title:"BM25 (Best Matching 25)",level:2},{id:"scoring-function",title:"Scoring Function",level:3},{id:"improvements-on-tf-idf",title:"Improvements on TF-IDF",level:3},{id:"tunable-parameters",title:"Tunable Parameters",level:3}],s={title:"Keyword Search",links:["hybrid-search"],hide:!1};function r(n){const t={h2:"h2",h3:"h3",img:"img",p:"p",...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.h2,{id:"introduction",children:"Introduction"}),`
`,e.jsx(t.p,{children:`The core idea of keyword search is to match documents with keywords found in a query prompt.\r
As a part of this process, both prompts and documents are converted into sparse vectors that count how often each word in a system's vocabulary appears in that piece of text.\r
Each document is then scored based on the presence of these keywords, and the documents are ranked based on their scores.`}),`
`,e.jsx(t.h2,{id:"bm25-best-matching-25",children:"BM25 (Best Matching 25)"}),`
`,e.jsx(t.p,{children:"BM25 (Best Matching 25) is the standard keyword search algorithm for in-production retrievers. It improvements TF-IDF, and offers better performance and flexibility at a similar cost."}),`
`,e.jsx(t.h3,{id:"scoring-function",children:"Scoring Function"}),`
`,e.jsx(t.p,{children:e.jsx(t.img,{src:"/images/C5WuUe4HHg.png",alt:"BM25 Scoring"})}),`
`,e.jsx(t.h3,{id:"improvements-on-tf-idf",children:"Improvements on TF-IDF"}),`
`,e.jsx(t.p,{children:e.jsx(t.img,{src:"/images/vprjm8xe2T.png",alt:"BM25 Term Frequency Saturation & Document Length Normalization"})}),`
`,e.jsx(t.h3,{id:"tunable-parameters",children:"Tunable Parameters"}),`
`,e.jsx(t.p,{children:e.jsx(t.img,{src:"/images/g9tC4uf7bI.png",alt:"BM25 Tunable Parameters"})})]})}function a(n={}){const{wrapper:t}=n.components||{};return t?e.jsx(t,{...n,children:e.jsx(r,{...n})}):r(n)}export{a as default,s as frontmatter,o as toc};
