import{j as e}from"./index-CtAT4ExP.js";const r={title:"Hybrid Search",hide:!1};function a(t){const n={blockquote:"blockquote",h2:"h2",h3:"h3",img:"img",p:"p",...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{children:"Introduction"}),`
`,e.jsx(n.p,{children:`Hybrid search combines both keyword and semantic search into a single retrieval pipeline.
Metadata filters are applied over search search approach as needed.
The result is the retrieval of separately filtered and ranked documents from the two search approaches.
These documents need to be combined to form a single continuous ranking.`}),`
`,e.jsx(n.h2,{children:"Reciprocal Rank Fusion"}),`
`,e.jsx(n.p,{children:`RFF (Reciprocal Rank Fusion) is a commonly used algorithm used to combined ranked lists.
It assigns a score to a document based on its rank across all of the lists it appears in.`}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"/images/l5nIGZtLDW.png",alt:"Reciprocal Rank Fusion"})}),`
`,e.jsx(n.h3,{children:"k-parameter"}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"/images/IhpORJbRXX.png",alt:"k Parameter"})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"The k parameter is typically set to a small integer like 60 to prevent the score from being dominated by a single document that is ranked highly in only one list. It acts as a smoothing factor, giving more weight to a document that appears consistently high in multiple lists, rather than a document that is ranked extremely high in just one."}),`
`]}),`
`,e.jsx(n.h2,{children:"Beta Parameter"}),`
`,e.jsx(n.p,{children:"To set a weight to the ranked scores from each search approach, hybrid search systems can include a Beta parameter."}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"/images/rGzOMKumzS.png",alt:"Beta Parameter"})})]})}function i(t={}){const{wrapper:n}=t.components||{};return n?e.jsx(n,{...t,children:e.jsx(a,{...t})}):a(t)}export{i as default,r as frontmatter};
