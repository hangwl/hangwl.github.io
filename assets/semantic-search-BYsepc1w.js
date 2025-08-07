import{j as e}from"./index-C5nun0ui.js";const r={title:"Semantic Search",description:"Semantic search via embedding models.",date:"2025-08-04",tags:["RAG","LLMs","Retriever","Semantic Search"],published:!0,showcase:!0};function t(s){const n={blockquote:"blockquote",h2:"h2",h3:"h3",img:"img",p:"p",strong:"strong",...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{children:"Introduction"}),`
`,e.jsxs(n.p,{children:["Semantic search is an approach that ",e.jsx(n.strong,{children:"matches queries to documents based on shared meaning"}),`.\r
It overcomes the limitations of keyword search that rely on exact word matches by capturing the meaning and nuances behind words.`]}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"/images/QK5D1O1ltN.png",alt:"Semantic Search"})}),`
`,e.jsx(n.h2,{children:"How It Works"}),`
`,e.jsxs(n.p,{children:["High-dimensional vectors are mapped from the documents and queries using ",e.jsx(n.strong,{children:"embedding models"}),`.\r
The magic behind this is that documents and queries that have similar semantic representations will be `,e.jsx(n.strong,{children:"closer to each other in the vector space."}),`\r
This makes semantic search possible.`]}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"/images/BHV0uQ4y8X.png",alt:"Vector Representations"})}),`
`,e.jsx(n.h2,{children:"Embedding Models"}),`
`,e.jsx(n.p,{children:"Depending on the problem, different embedding models can be used."}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"/images/rMT0v3wgsA.png",alt:"Embedding Models"})}),`
`,e.jsx(n.h2,{children:"Relevance Measures"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:`Generally, cosine similarity is used when we are dealing with a system that contains documents with greatly varying lengths.\r
This is so that documents with longer lengths do not dominate the similarity score simply because they are longer.`}),`
`]}),`
`,e.jsx(n.h3,{children:"Cosine Similarity"}),`
`,e.jsxs(n.p,{children:[`Cosine similarity is the most common distance measure used in semantic search.\r
It measures the `,e.jsx(n.strong,{children:"similarity in the direction"})," of two vectors regardless of whether they are close to each other in the vector space."]}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"/images/fAlV8ixuPF.png",alt:"Cosine Similarity"})}),`
`,e.jsx(n.h3,{children:"Dot Product"}),`
`,e.jsxs(n.p,{children:[`Dot product is another distance measure used in semantic search.\r
Compared to cosine similarity, it considers both the `,e.jsx(n.strong,{children:"angle"})," and ",e.jsx(n.strong,{children:"magnitude"})," between vectors."]}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"/images/v9b0v8RLm1.png",alt:"Dot Product"})})]})}function a(s={}){const{wrapper:n}=s.components||{};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{a as default,r as frontmatter};
