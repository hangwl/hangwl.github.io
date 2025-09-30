import{j as e}from"./index-1jHvJRAh.js";const s={title:"Query Parsing"};function r(n){const t={blockquote:"blockquote",h2:"h2",h3:"h3",img:"img",p:"p",strong:"strong",...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.h2,{children:"Introduction"}),`
`,e.jsxs(t.p,{children:["Human submitted queries tend to be ",e.jsx(t.strong,{children:"vague and ambiguous"}),`.
If we vectorize these queries directly and submit them to a retriever, it is likely that the retrieved documents are not what the user is actually looking for.`]}),`
`,e.jsxs(t.p,{children:["To address this, there are several things we options we can consider to ",e.jsx(t.strong,{children:"transform and optimize these queries"})," and improve retrieval performance."]}),`
`,e.jsx(t.h3,{children:"Query Rewriting"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Query Rewriting"})," is the most common query parsing technique that uses an ",e.jsx(t.strong,{children:"LLM to rewrite a query"}),` into clearer and more precise queries.
The transformed queries may contain `,e.jsx(t.strong,{children:"more relevant keywords"}),", and as well as ",e.jsx(t.strong,{children:"better represent the user's intent"}),"."]}),`
`,e.jsx(t.p,{children:e.jsx(t.img,{src:"/images/Y3q56UlpcG.png",alt:"Query Rewriting"})}),`
`,e.jsx(t.p,{children:e.jsx(t.img,{src:"/images/HYL1byWgqr.png",alt:"Query Rewriting Example"})}),`
`,e.jsx(t.h3,{children:"Named Entity Recognition"}),`
`,e.jsxs(t.p,{children:["A more advanced query parsing technique is ",e.jsx(t.strong,{children:"Named Entity Recognition (NER)"}),`.
An NER model can be used to identify and `,e.jsx(t.strong,{children:"categorize entities"})," within a query, effectively ",e.jsx(t.strong,{children:"tagging"})," them with relevant ",e.jsx(t.strong,{children:"labels"}),`.
This allows the search process to become more `,e.jsx(t.strong,{children:"targeted and focused"}),", and is particularly useful for retrievers that implement ",e.jsx(t.strong,{children:"metadata filtering"}),"."]}),`
`,e.jsxs(t.p,{children:["An example of such a model is the ",e.jsx("a",{href:"https://github.com/urchade/GLiNER",target:"_blank",children:"GLiNER model"}),`.
Given an input text, it can identify relevant entities and assign category labels to them.`]}),`
`,e.jsx(t.p,{children:e.jsx(t.img,{src:"/images/nA8Zcr0uvh.png",alt:"GLiNER"})}),`
`,e.jsx(t.h3,{children:"Hypothetical Document Embeddings (HyDE)"}),`
`,e.jsxs(t.p,{children:["Another advanced query parsing technique is ",e.jsx(t.strong,{children:"Hypothetical Document Embeddings (HyDE)"}),`.
As its name suggests, a hypothetical document is generated given an initial input query.
This hypothetical document is then used to generate a vector embedding that is submitted to a retriever to retrieve relevant documents.`]}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsx(t.p,{children:"The main drawback of HyDE is that it depends on the underlying LLM used to generate the hypothetical document."}),`
`]})]})}function a(n={}){const{wrapper:t}=n.components||{};return t?e.jsx(t,{...n,children:e.jsx(r,{...n})}):r(n)}export{a as default,s as frontmatter};
