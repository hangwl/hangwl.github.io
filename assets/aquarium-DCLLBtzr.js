import{j as e}from"./index-owej41gH.js";const s={title:"Aquarium",description:"Empowering Southeast Asian languages.",date:"2025-06-05",tags:["Next.js","Python","PostgreSQL","FastAPI","LangGraph"],image:"/images/aquarium.svg",website:"https://aquarium.sea-lion.ai/",status:"completed"};function n(a){const t={a:"a",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",...a.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{children:"Introduction"}),`
`,e.jsx(t.p,{children:`Aquarium is a platform that was developed to address challenges related to the accessibility of language datasets specifically within Southeast Asia.\r
The region is incredibly linguistically diverse and is home to over 1,200 languages and dialects.\r
With recent developments in large language models, leaders have recognized the importance of regional collaboration and\r
providing incentives for the community to contribute datasets that increase Southeast Asian representation.`}),`
`,e.jsx(t.p,{children:`As an AI Apprentice, I was given the opportunity to work on the beta version of the Aquarium project for a period of 7 months alongside 2 mentors and 2 other apprentices.\r
In AI Singapore, apprentices are presented with a real-world truth. That is, there will not always be a "best-practice" to follow for every project.\r
Thus, it is up to the apprentices to innovate and come up with solutions that are tailored to their project's needs.`}),`
`,e.jsx(t.h2,{children:"Project Scope"}),`
`,e.jsx(t.p,{children:`The initial scope of the project presented to the apprentices was truthfully vague.\r
There were 2 main objectives:`}),`
`,e.jsxs(t.ol,{children:[`
`,e.jsx(t.li,{children:"Implement a chatbot that is able to help users search for SEA datasets and provide insights."}),`
`,e.jsx(t.li,{children:"Implement a contribution pipeline for users to contribute datasets."}),`
`]}),`
`,e.jsx(t.h2,{children:"Data"}),`
`,e.jsxs(t.p,{children:["To get things started, we were tasked to explore and analyze the data in the ",e.jsx(t.a,{href:"https://seacrowd.github.io/seacrowd-catalogue/",children:"SEACrowd Catalogue"}),`.\r
The public spreadsheet contains a collection of dataset metadata contributed by individuals from the `,e.jsx(t.a,{href:"https://seacrowd.github.io/",children:"SEACrowd community"}),`.\r
The primary goal of exploring the data was to understand how various metadata fields might be useful for the chatbot that aimed to build.`]}),`
`,e.jsx(t.p,{children:e.jsx(t.img,{src:"/images/seacrowd-catalogue-csv.png",alt:"SEACrowd Catalogue CSV"})}),`
`,e.jsx(t.h3,{children:"Metadata Fields"}),`
`,e.jsx(t.p,{children:"Within the spreadsheet, many metadata fields are available."}),`
`,e.jsx(t.p,{children:"The following fields were identified as important metadata fields that provide the most qualitative context to datasets:"}),`
`,e.jsxs(t.ol,{children:[`
`,e.jsx(t.li,{children:"Dataset Name"}),`
`,e.jsx(t.li,{children:"Dataset Description"}),`
`,e.jsx(t.li,{children:"Dataset Language(s)"}),`
`,e.jsx(t.li,{children:"Dataset Task(s)"}),`
`,e.jsx(t.li,{children:"Dataset Modality"}),`
`,e.jsx(t.li,{children:"Dataset Domain(s)"}),`
`]}),`
`,e.jsx(t.p,{children:"Separately, several quantitative fields were also identified to be important:"}),`
`,e.jsxs(t.ol,{children:[`
`,e.jsx(t.li,{children:"Dataset Samples"}),`
`,e.jsx(t.li,{children:"Dataset Download Size"}),`
`]}),`
`,e.jsx(t.p,{children:"Various other metadata fields were also identified to be potentially important for the sake of data provenance, as well as to indicate permissibility."}),`
`,e.jsx(t.h3,{children:"Data Modeling"}),`
`,e.jsx(t.p,{children:"To support the chatbot, the data needed to be modeled in a way to enable semantic and keyword search capabilities."}),`
`,e.jsx(t.h2,{children:"Me and the Boys"}),`
`,e.jsx(t.p,{children:e.jsx(t.img,{src:"/images/aquarium-swensens.png",alt:"Me and the boys at swensens unlimited"})})]})}function o(a={}){const{wrapper:t}=a.components||{};return t?e.jsx(t,{...a,children:e.jsx(n,{...a})}):n(a)}export{o as default,s as frontmatter};
