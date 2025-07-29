import{j as e}from"./index-DHhXh1XA.js";const a={title:"Retriever (RAG)",description:"Retriever module for RAG systems.",date:"2025-07-29",tags:["RAG","LLMs","Retriever"],published:!0,showcase:!0};function r(n){const t={a:"a",blockquote:"blockquote",h2:"h2",h3:"h3",img:"img",p:"p",strong:"strong",...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.h2,{children:"Introduction"}),`
`,e.jsx(t.p,{children:`The purpose of a retriever in the context of RAG systems is to provide useful information to LLMs so that they can generate better responses.
While it is possible to implement a retriever that pulls data directly from a relational database that many existing systems use, setting up a separate vector database is generally more scalable.`}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsxs(t.p,{children:["Note that PostgreSQL is a relational database that can be extended into a vector database via ",e.jsx(t.a,{href:"https://github.com/pgvector/pgvector",children:"pgvector"}),"."]}),`
`]}),`
`,e.jsx(t.p,{children:e.jsx(t.img,{src:"/images/IwF7vGE0aa.png",alt:"Knowledge Bases"})}),`
`,e.jsx(t.h2,{children:"Document Relevance"}),`
`,e.jsx(t.p,{children:`Ideally, only the most relevant documents should be retrieved as opposed to overloading an LLMs context window by stuffing all available documents to it.
The challenge here is deciding an appropriate relevance scoring threshold, as well as a reasonable number of documents to retrieve.`}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsx(t.p,{children:"Note that a retriever usually doesn't perfectly rank documents. Hence, monitoring and experimentation is required to optimize RAG systems."}),`
`]}),`
`,e.jsx(t.h2,{children:"Search Techniques"}),`
`,e.jsx(t.p,{children:`Most modern retrievers make use of both keyword search and semantic search. In what is known as hybrid search.
The decision on how to optimize the retrieval process for both approaches depends on individual project needs.`}),`
`,e.jsx(t.p,{children:e.jsx(t.img,{src:"/images/S2wISTTrvh.png",alt:"Search Techniques"})}),`
`,e.jsx(t.h3,{children:"Keyword Search"}),`
`,e.jsxs(t.p,{children:["The keyword search approach scans documents for ",e.jsx(t.strong,{children:"exact matching words"})," found in a query prompt."]}),`
`,e.jsx(t.h3,{children:"Semantic Search"}),`
`,e.jsxs(t.p,{children:["The semantic search approach looks for documents with ",e.jsx(t.strong,{children:"similar meaning"})," to the query prompt."]}),`
`,e.jsx(t.h3,{children:"Metadata Filtering"}),`
`,e.jsx(t.p,{children:"To improve retrieval precision, retrievers can apply metadata filters to exclude documents that do not contain specific metadata tags."}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsx(t.p,{children:"Note that this metadata filtering layer depends on the richness of the underlying metadata that is available. In the real world, data originating from different sources are bound to be unstandardized and inconsistent. Hence the need for data engineers and data janitors."}),`
`]})]})}function o(n={}){const{wrapper:t}=n.components||{};return t?e.jsx(t,{...n,children:e.jsx(r,{...n})}):r(n)}export{o as default,a as frontmatter};
