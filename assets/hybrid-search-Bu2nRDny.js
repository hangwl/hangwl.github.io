import{j as e}from"./index-DmIt1YIB.js";const i=[{id:"introduction",title:"Introduction",level:2},{id:"reciprocal-rank-fusion",title:"Reciprocal Rank Fusion",level:2},{id:"k-parameter",title:"k-parameter",level:3},{id:"beta-parameter",title:"Beta Parameter",level:2}],s={title:"Hybrid Search",hide:!1};function a(n){const t={blockquote:"blockquote",h2:"h2",h3:"h3",img:"img",p:"p",...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.h2,{id:"introduction",children:"Introduction"}),`
`,e.jsx(t.p,{children:`Hybrid search combines both keyword and semantic search into a single retrieval pipeline.\r
Metadata filters are applied over search search approach as needed.\r
The result is the retrieval of separately filtered and ranked documents from the two search approaches.\r
These documents need to be combined to form a single continuous ranking.`}),`
`,e.jsx(t.h2,{id:"reciprocal-rank-fusion",children:"Reciprocal Rank Fusion"}),`
`,e.jsx(t.p,{children:`RFF (Reciprocal Rank Fusion) is a commonly used algorithm used to combined ranked lists.\r
It assigns a score to a document based on its rank across all of the lists it appears in.`}),`
`,e.jsx(t.p,{children:e.jsx(t.img,{src:"/images/l5nIGZtLDW.png",alt:"Reciprocal Rank Fusion"})}),`
`,e.jsx(t.h3,{id:"k-parameter",children:"k-parameter"}),`
`,e.jsx(t.p,{children:e.jsx(t.img,{src:"/images/IhpORJbRXX.png",alt:"k Parameter"})}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsx(t.p,{children:"The k parameter is typically set to a small integer like 60 to prevent the score from being dominated by a single document that is ranked highly in only one list. It acts as a smoothing factor, giving more weight to a document that appears consistently high in multiple lists, rather than a document that is ranked extremely high in just one."}),`
`]}),`
`,e.jsx(t.h2,{id:"beta-parameter",children:"Beta Parameter"}),`
`,e.jsx(t.p,{children:"To set a weight to the ranked scores from each search approach, hybrid search systems can include a Beta parameter."}),`
`,e.jsx(t.p,{children:e.jsx(t.img,{src:"/images/rGzOMKumzS.png",alt:"Beta Parameter"})})]})}function o(n={}){const{wrapper:t}=n.components||{};return t?e.jsx(t,{...n,children:e.jsx(a,{...n})}):a(n)}export{o as default,s as frontmatter,i as toc};
