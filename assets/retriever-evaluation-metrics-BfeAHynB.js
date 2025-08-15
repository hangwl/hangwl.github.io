import{j as e}from"./index-CoZp0siZ.js";const o={title:"Retriever Evaluation Metrics"};function n(t){const r={blockquote:"blockquote",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r.h2,{children:"Introduction"}),`
`,e.jsxs(r.p,{children:[`The primary goal of establishing metrics for information retrievers is to optimize the quality of search results.\r
While there are various other metrics such as latency, throughput, resource usage, etc.,\r
the main metric we want to focus on is `,e.jsx(r.strong,{children:"document relevance"}),"."]}),`
`,e.jsx(r.h2,{children:"Requirements"}),`
`,e.jsxs(r.p,{children:["To evaluate the performance of a retriever, we need to first prepare a collection of ",e.jsx(r.strong,{children:"ground truths"}),`.\r
Specifically, a variety of prompts should be prepared to feed the retriever, and the retrieved documents should be manually verified to be relevant to the prompts.\r
If feasible, we can also identify a ranked list of relevant documents for each prompt, and use them as the ground truth.`]}),`
`,e.jsx(r.p,{children:e.jsx(r.img,{src:"/images/aPRyJIzz4I.png",alt:"Common Ingredients"})}),`
`,e.jsx(r.h2,{children:"Evaluation Metrics"}),`
`,e.jsxs(r.p,{children:[`The goal of establishing evaluation metrics is to optimize the retriever's ability to retrieve relevant documents.\r
This is typically via the use of `,e.jsx(r.strong,{children:"precision"})," and ",e.jsx(r.strong,{children:"recall"}),"."]}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Precision"})," measures the proportion of relevant documents retrieved out of a pool of retrieved documents."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Recall"})," measures the proportion of relevant documents retrieved out of a pool of ",e.jsx(r.strong,{children:"all (ground truth)"})," documents."]}),`
`]}),`
`,e.jsx(r.p,{children:e.jsx(r.img,{src:"/images/hfLUtHTwIA.png",alt:"Precision and Recall"})}),`
`,e.jsxs(r.blockquote,{children:[`
`,e.jsx(r.p,{children:`When optimizing a retriever, we normally need to consider tradeoffs between precision and recall.\r
That is, we may choose to cast a wider net to retrieve more documents and improve recall.\r
However, this may come at the cost of precision, as more irrelevant documents may also be retrieved.`}),`
`]}),`
`,e.jsx(r.h3,{children:"Top-K"}),`
`,e.jsxs(r.p,{children:["Typically in RAG systems, the ",e.jsx(r.strong,{children:"top-k highest ranked documents"})," are retrieved for evaluation across ",e.jsx(r.strong,{children:"different values of k"}),`.\r
This is so that we can gather a more holistic assessment of the retriever's performance.`]}),`
`,e.jsx(r.h3,{children:"Recall at K (Recall@K)"}),`
`,e.jsx(r.p,{children:"Recall or Recall@K is generally the most commonly used metric for evaluating the performance of retrievers in retrieving relevant documents."}),`
`,e.jsxs(r.blockquote,{children:[`
`,e.jsx(r.p,{children:`However it does not account for the ranking of retrieved documents, and assumes a complete collection of ground truths.\r
This is often impractical nor feasible in large-scale knowledge bases that are continuously growing.`}),`
`]}),`
`,e.jsx(r.h3,{children:"Mean Average Precision at K (MAP@K)"}),`
`,e.jsxs(r.p,{children:["The MAP@K metric measures the average precision of the top-k highest ranked documents that are ",e.jsx(r.strong,{children:"relevant"}),", averaged across various prompts."]}),`
`,e.jsxs(r.blockquote,{children:[`
`,e.jsx(r.p,{children:"A high MAP@K score suggests that the retriever performs well in retrieving relevant documents, whilst at the same time excluding irrelevant documents."}),`
`]}),`
`,e.jsx(r.p,{children:e.jsx(r.img,{src:"/images/ckkNZeL6Ot.png",alt:"Mean Average Precision at K (MAP@K)"})}),`
`,e.jsx(r.h3,{children:"Mean Reciprocal Rank (MRR)"}),`
`,e.jsxs(r.p,{children:["MRR measures the ",e.jsx(r.strong,{children:"rank of the first relevant document"}),` in the returned list of retrieved documents, averaged across various prompts.\r
It generally measures how well the retriever performs at the top of ranked documents.`]}),`
`,e.jsxs(r.blockquote,{children:[`
`,e.jsx(r.p,{children:`A poor MRR score is a strong signal that the system isn't effectively ranking the correct documents at the top of its results.\r
Key reasons may include problems with the ranking algorithm itself, poor document indexing, bad ground truths or prompts that are too vague.`}),`
`]}),`
`,e.jsx(r.p,{children:e.jsx(r.img,{src:"/images/Zc7tzGmaSt.png",alt:"Mean Reciprocal Rank 1"})}),`
`,e.jsx(r.p,{children:e.jsx(r.img,{src:"/images/0nA49Uw3hB.png",alt:"Mean Reciprocal Rank 2"})})]})}function i(t={}){const{wrapper:r}=t.components||{};return r?e.jsx(r,{...t,children:e.jsx(n,{...t})}):n(t)}export{i as default,o as frontmatter};
