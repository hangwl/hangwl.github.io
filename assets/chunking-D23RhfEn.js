import{j as e}from"./index-BIubLZr_.js";const i={title:"Chunking"};function s(t){const n={blockquote:"blockquote",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{children:"Introduction"}),`
`,e.jsxs(n.p,{children:["Chunking is the process of breaking down documents into ",e.jsx(n.strong,{children:"smaller segments"}),"."]}),`
`,e.jsxs(n.p,{children:[`With a good chunking strategy, we can improve the overall retrieval quality of a RAG system.\r
Mainly, chunking can allows us to `,e.jsx(n.strong,{children:"more precisely represent"}),` a long document over multiple vectors instead of just a single compressed vector.\r
Since each vector represents a different document chunk, we can also `,e.jsx(n.strong,{children:"focus on the specific segment"})," of a document that is most relevant to a query instead of retrieving the entire document."]}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"/images/zAna6yWLBd.png",alt:"Why Chunk Documents"})}),`
`,e.jsx(n.h2,{children:"Advanced Chunking"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Basic chunking"})," techniques focus on adjusting ",e.jsx(n.strong,{children:"chunk size"})," and ",e.jsx(n.strong,{children:"chunk overlap"}),`.\r
However, we cannot always guarantee that high quality document chunks are returned even after optimizing these factors.\r
Thus, more advanced chunking strategies are important.`]}),`
`,e.jsx(n.h3,{children:"Semantic Chunking"}),`
`,e.jsxs(n.p,{children:["Semantic chunking is a chunking strategy that attempts to break down documents into segments that contain ",e.jsx(n.strong,{children:"semantically related sentences"}),"."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Documents are processed sentence by sentence."}),`
`,e.jsx(n.li,{children:"For every subsequent sentence, we calculate the semantic similarity between its vector and the vector of the current chunk."}),`
`,e.jsx(n.li,{children:"If the semantic similarity score is above a certain threshold, the sentence is added to the chunk and we move on to compare the next sentence."}),`
`,e.jsx(n.li,{children:"Otherwise, we start a new chunk with the current sentence and repeat the process."}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"/images/mqjP1E534K.png",alt:"Semantic Chunking Visualization"})}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"/images/wTCrTgCeTc.png",alt:"Pros and Cons"})}),`
`,e.jsx(n.h3,{children:"Language Based Chunking"}),`
`,e.jsxs(n.p,{children:["Language based chunking uses ",e.jsx(n.strong,{children:"LLMs"}),` to chunk documents.\r
This is done by directly providing `,e.jsx(n.strong,{children:"prompt instructions"})," on the types of chunks we want to extract from a document."]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"This is becoming increasingly more feasible as LLMs become cheaper."}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"/images/UYrEBfu9Wx.png",alt:"Language Based Chunking"})}),`
`,e.jsx(n.h3,{children:"Context-Aware Chunking"}),`
`,e.jsxs(n.p,{children:["This approach tries to make use of LLMs to ",e.jsx(n.strong,{children:"append additional context"}),` to each chunk.\r
The added context may `,e.jsx(n.strong,{children:"improve"})," the vectorization process and increase overall ",e.jsx(n.strong,{children:"search relevance"}),` scores.\r
Additionally, the added context may also be useful during the `,e.jsx(n.strong,{children:"response generation"})," step for the underlying LLM."]}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"/images/9ROHXfA1tQ.png",alt:"Context Aware Chunking"})})]})}function c(t={}){const{wrapper:n}=t.components||{};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{c as default,i as frontmatter};
