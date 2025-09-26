import{j as e}from"./index-CJx29cyC.js";const o={title:"Cross-Encoders",links:["reranking"]};function t(r){const n={blockquote:"blockquote",h2:"h2",img:"img",p:"p",strong:"strong",...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{children:"Introduction"}),`
`,e.jsx(n.p,{children:"RAG systems typically rely on Bi-Encoder embedding models to generate and compare between document and query vectors for semantic search."}),`
`,e.jsxs(n.p,{children:["To further improve search results, ",e.jsx(n.strong,{children:"Cross-Encoder"}),` models can be used instead.\r
They are `,e.jsx(n.strong,{children:"specialized embedding models"})," that accept ",e.jsx(n.strong,{children:"prompt-document pairs"})," as input, returning the ",e.jsx(n.strong,{children:"relevancy scores"})," for each pair."]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:`When a knowledge base contains large number of documents, finding the relevancy score for every concatenated prompt and document is not a scalable solution.\r
However in small knowledge bases, Cross-Encoders can significantly improve the quality of search results.`}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"/images/e7iq5MmR5x.png",alt:"Cross-Encoder"})}),`
`,e.jsx(n.h2,{children:"Contextualized Late Interaction Over BERT (ColBERT)"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"ColBERT"})," an architecture that takes the following approach that addresses the ",e.jsx(n.strong,{children:"scalability"})," and ",e.jsx(n.strong,{children:"latency limitations"})," of Bi-Encoders."]}),`
`,e.jsxs(n.p,{children:[`Instead of generating one vector for each prompt and document, every token is vectorized.\r
Each prompt vector tries to find its most similar document vector.\r
The highest relevancy scores for each prompt-document token pair are summed to form the `,e.jsx(n.strong,{children:"MaxSim"}),` score for a document.\r
Repeating this process for all documents in a database allows us to rank and retrieve the most relevant documents for a given prompt.`]}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"/images/arybRTzGQo.png",alt:"MaxSim"})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:`While ColBERT is designed to be scalable and reasonably fast, note that it requires significantly more storage for every vectorized token.\r
Generally, Bi-Encoder architectures should be preferred as the default semantic search option unless a project requires higher precision, or greater contextual understanding e.g. in Legal or Medical fields.`}),`
`]})]})}function a(r={}){const{wrapper:n}=r.components||{};return n?e.jsx(n,{...r,children:e.jsx(t,{...r})}):t(r)}export{a as default,o as frontmatter};
