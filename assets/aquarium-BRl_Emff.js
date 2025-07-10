import{j as e}from"./index-iTER0oIg.js";const n={title:"Aquarium",description:"Empowering Southeast Asian languages.",date:"2025-06-05",tags:["Next.js","Python","PostgreSQL","FastAPI","LangGraph"],image:"/images/aquarium.svg",website:"https://aquarium.sea-lion.ai/",status:"completed"};function t(s){const i={a:"a",button:"button",code:"code",figcaption:"figcaption",figure:"figure",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",style:"style",...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(i.h1,{children:"Introduction"}),`
`,e.jsx(i.p,{children:`Aquarium is a platform that was developed to address challenges related to the accessibility of language datasets specifically within Southeast Asia.\r
The region is incredibly linguistically diverse and is home to over 1,200 languages and dialects.\r
With recent developments in large language models, leaders have recognized the importance of regional collaboration and\r
providing incentives for the community to contribute datasets that increase Southeast Asian representation.`}),`
`,e.jsx(i.p,{children:`As an AI Apprentice, I was given the opportunity to work on the beta version of the Aquarium project for a period of 7 months alongside 2 mentors and 2 other apprentices.\r
In AI Singapore, apprentices are presented with a real-world truth. That is, there will not always be a "best-practice" to follow for every project.\r
Thus, it is up to the apprentices to innovate and come up with solutions that are tailored to their project's needs.`}),`
`,e.jsx(i.h2,{children:"Project Scope"}),`
`,e.jsx(i.p,{children:`The initial scope of the project presented to the apprentices was truthfully vague.\r
There were 2 main objectives:`}),`
`,e.jsxs(i.ol,{children:[`
`,e.jsx(i.li,{children:"Implement a chatbot that is able to help users search for SEA datasets and provide insights."}),`
`,e.jsx(i.li,{children:"Implement a contribution pipeline for users to contribute datasets."}),`
`]}),`
`,e.jsx(i.h2,{children:"Data"}),`
`,e.jsxs(i.p,{children:["To get things started, we were tasked to explore and analyze the data in the ",e.jsx(i.a,{href:"https://seacrowd.github.io/seacrowd-catalogue/",children:"SEACrowd Catalogue"}),`.\r
The public spreadsheet contains a collection of dataset metadata contributed by individuals from the `,e.jsx(i.a,{href:"https://seacrowd.github.io/",children:"SEACrowd community"}),`.\r
The primary goal of exploring the data was to understand how various metadata fields may be useful for the chatbot we were trying to build.`]}),`
`,e.jsx(i.p,{children:e.jsx(i.img,{src:"/images/seacrowd-catalogue-csv.png",alt:"SEACrowd Catalogue CSV"})}),`
`,e.jsx(i.h3,{children:"Metadata Fields"}),`
`,e.jsx(i.p,{children:"Within the spreadsheet, many metadata fields are available."}),`
`,e.jsx(i.p,{children:"The following fields were identified as important metadata fields that provide the most qualitative context:"}),`
`,e.jsxs(i.ol,{children:[`
`,e.jsx(i.li,{children:"Dataset Name"}),`
`,e.jsx(i.li,{children:"Dataset Description"}),`
`,e.jsx(i.li,{children:"Dataset Language(s)"}),`
`,e.jsx(i.li,{children:"Dataset Task(s)"}),`
`,e.jsx(i.li,{children:"Dataset Modality"}),`
`,e.jsx(i.li,{children:"Dataset Domain(s)"}),`
`]}),`
`,e.jsx(i.p,{children:"Separately, several quantitative fields were also identified to be important:"}),`
`,e.jsxs(i.ol,{children:[`
`,e.jsx(i.li,{children:"Dataset Samples"}),`
`,e.jsx(i.li,{children:"Dataset Download Size"}),`
`]}),`
`,e.jsx(i.p,{children:"Various other metadata fields were also identified to be potentially important for the sake of data provenance, as well as to indicate permissibility."}),`
`,e.jsx(i.h3,{children:"Data Modeling"}),`
`,e.jsx(i.p,{children:"To support the chatbot, the data needed to be modeled in a way to enable semantic and keyword search capabilities."}),`
`,e.jsx(i.h4,{children:"Document Model"}),`
`,e.jsxs(i.p,{children:["In ",e.jsx(i.a,{href:"https://python.langchain.com/api_reference/core/documents/langchain_core.documents.base.Document.html",children:"LangChain"}),`, the Document class can be used to store a piece of text and associated its metadata.\r
This is done via the `,e.jsx(i.code,{children:"page_content"})," and optional ",e.jsx(i.code,{children:"metadata"})," attributes."]}),`
`,e.jsxs(i.figure,{"data-rehype-pretty-code-figure":"",children:[e.jsx(i.figcaption,{"data-rehype-pretty-code-title":"","data-language":"python","data-theme":"github-dark-default dark-plus",children:"Document Model Example"}),e.jsx(i.pre,{style:{"--shiki-dark":"#e6edf3","--shiki-light":"#D4D4D4","--shiki-dark-bg":"#0d1117","--shiki-light-bg":"#1E1E1E"},tabIndex:"0","data-language":"python","data-theme":"github-dark-default dark-plus",children:e.jsxs(i.code,{"data-language":"python","data-theme":"github-dark-default dark-plus",style:{display:"grid"},children:[e.jsxs(i.span,{"data-line":"",children:[e.jsx(i.span,{style:{"--shiki-dark":"#FF7B72","--shiki-light":"#C586C0"},children:"from"}),e.jsx(i.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:" langchain_core.documents "}),e.jsx(i.span,{style:{"--shiki-dark":"#FF7B72","--shiki-light":"#C586C0"},children:"import"}),e.jsx(i.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:" Document"})]}),`
`,e.jsx(i.span,{"data-line":"",children:" "}),`
`,e.jsxs(i.span,{"data-line":"",children:[e.jsx(i.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:"document "}),e.jsx(i.span,{style:{"--shiki-dark":"#FF7B72","--shiki-light":"#D4D4D4"},children:"="}),e.jsx(i.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:" Document("})]}),`
`,e.jsxs(i.span,{"data-line":"",children:[e.jsx(i.span,{style:{"--shiki-dark":"#FFA657","--shiki-light":"#9CDCFE"},children:"    page_content"}),e.jsx(i.span,{style:{"--shiki-dark":"#FF7B72","--shiki-light":"#D4D4D4"},children:"="}),e.jsx(i.span,{style:{"--shiki-dark":"#A5D6FF","--shiki-light":"#CE9178"},children:'"The Abui Wordnet dataset is a linguistic resource ..."'}),e.jsx(i.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:","})]}),`
`,e.jsxs(i.span,{"data-line":"",children:[e.jsx(i.span,{style:{"--shiki-dark":"#FFA657","--shiki-light":"#9CDCFE"},children:"    metadata"}),e.jsx(i.span,{style:{"--shiki-dark":"#FF7B72","--shiki-light":"#D4D4D4"},children:"="}),e.jsx(i.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:"{"})]}),`
`,e.jsxs(i.span,{"data-line":"",children:[e.jsx(i.span,{style:{"--shiki-dark":"#A5D6FF","--shiki-light":"#CE9178"},children:'        "name"'}),e.jsx(i.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:": "}),e.jsx(i.span,{style:{"--shiki-dark":"#A5D6FF","--shiki-light":"#CE9178"},children:'"Abui Wordnet"'}),e.jsx(i.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:","})]}),`
`,e.jsxs(i.span,{"data-line":"",children:[e.jsx(i.span,{style:{"--shiki-dark":"#A5D6FF","--shiki-light":"#CE9178"},children:'        "languages"'}),e.jsx(i.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:": ["}),e.jsx(i.span,{style:{"--shiki-dark":"#A5D6FF","--shiki-light":"#CE9178"},children:'"abz"'}),e.jsx(i.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:"],"})]}),`
`,e.jsxs(i.span,{"data-line":"",children:[e.jsx(i.span,{style:{"--shiki-dark":"#A5D6FF","--shiki-light":"#CE9178"},children:'        "tasks"'}),e.jsx(i.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:": ["}),e.jsx(i.span,{style:{"--shiki-dark":"#A5D6FF","--shiki-light":"#CE9178"},children:'"evaluation"'}),e.jsx(i.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:"],"})]}),`
`,e.jsxs(i.span,{"data-line":"",children:[e.jsx(i.span,{style:{"--shiki-dark":"#A5D6FF","--shiki-light":"#CE9178"},children:'        "modalities"'}),e.jsx(i.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:": ["}),e.jsx(i.span,{style:{"--shiki-dark":"#A5D6FF","--shiki-light":"#CE9178"},children:'"text"'}),e.jsx(i.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:"]"})]}),`
`,e.jsxs(i.span,{"data-line":"",children:[e.jsx(i.span,{style:{"--shiki-dark":"#A5D6FF","--shiki-light":"#CE9178"},children:'        "domains"'}),e.jsx(i.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:": ["}),e.jsx(i.span,{style:{"--shiki-dark":"#A5D6FF","--shiki-light":"#CE9178"},children:'"linguistic"'}),e.jsx(i.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:", "}),e.jsx(i.span,{style:{"--shiki-dark":"#A5D6FF","--shiki-light":"#CE9178"},children:'"wordnet"'}),e.jsx(i.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:"]"})]}),`
`,e.jsxs(i.span,{"data-line":"",children:[e.jsx(i.span,{style:{"--shiki-dark":"#A5D6FF","--shiki-light":"#CE9178"},children:'        "samples"'}),e.jsx(i.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:": "}),e.jsx(i.span,{style:{"--shiki-dark":"#79C0FF","--shiki-light":"#B5CEA8"},children:"3606"}),e.jsx(i.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:","})]}),`
`,e.jsxs(i.span,{"data-line":"",children:[e.jsx(i.span,{style:{"--shiki-dark":"#A5D6FF","--shiki-light":"#CE9178"},children:'        "download_size"'}),e.jsx(i.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:": "}),e.jsx(i.span,{style:{"--shiki-dark":"#A5D6FF","--shiki-light":"#CE9178"},children:'"70470"'}),e.jsx(i.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:","})]}),`
`,e.jsx(i.span,{"data-line":"",children:e.jsx(i.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:"    }"})}),`
`,e.jsx(i.span,{"data-line":"",children:e.jsx(i.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:")"})}),e.jsxs(i.button,{type:"button",title:"Copy code","aria-label":"Copy code",data:`from langchain_core.documents import Document

document = Document(
    page_content="The Abui Wordnet dataset is a linguistic resource ...",
    metadata={
        "name": "Abui Wordnet",
        "languages": ["abz"],
        "tasks": ["evaluation"],
        "modalities": ["text"]
        "domains": ["linguistic", "wordnet"]
        "samples": 3606,
        "download_size": "70470",
    }
)`,className:"rehype-pretty-copy",onClick:"navigator.clipboard.writeText(this.attributes.data.value);this.classList.add('rehype-pretty-copied');window.setTimeout(() => this.classList.remove('rehype-pretty-copied'), 3000);",children:[e.jsx(i.span,{className:"ready"}),e.jsx(i.span,{className:"success"})]}),e.jsx(i.style,{children:`:root {--copy-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'%3E%3Cpath fill='%23adadad' d='M16.187 9.5H12.25a1.75 1.75 0 0 0-1.75 1.75v28.5c0 .967.784 1.75 1.75 1.75h23.5a1.75 1.75 0 0 0 1.75-1.75v-28.5a1.75 1.75 0 0 0-1.75-1.75h-3.937a4.25 4.25 0 0 1-4.063 3h-7.5a4.25 4.25 0 0 1-4.063-3M31.813 7h3.937A4.25 4.25 0 0 1 40 11.25v28.5A4.25 4.25 0 0 1 35.75 44h-23.5A4.25 4.25 0 0 1 8 39.75v-28.5A4.25 4.25 0 0 1 12.25 7h3.937a4.25 4.25 0 0 1 4.063-3h7.5a4.25 4.25 0 0 1 4.063 3M18.5 8.25c0 .966.784 1.75 1.75 1.75h7.5a1.75 1.75 0 1 0 0-3.5h-7.5a1.75 1.75 0 0 0-1.75 1.75'/%3E%3C/svg%3E");--success-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%2366ff85' d='M9 16.17L5.53 12.7a.996.996 0 1 0-1.41 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71a.996.996 0 1 0-1.41-1.41z'/%3E%3C/svg%3E");}pre:has(code) {position: relative;}pre button.rehype-pretty-copy {right: 1px;padding: 0;width: 24px;height: 24px;display: flex;margin-top: 2px;margin-right: 8px;position: absolute;border-radius: 25%;backdrop-filter: blur(3px);& span {width: 100%;aspect-ratio: 1 / 1;}& .ready {background-image: var(--copy-icon);}& .success {display: none; background-image: var(--success-icon);}}&.rehype-pretty-copied {& .success {display: block;} & .ready {display: none;}}pre button.rehype-pretty-copy.rehype-pretty-copied {opacity: 1;& .ready { display: none; }& .success { display: block; }}pre button.rehype-pretty-copy { opacity: 0; }figure[data-rehype-pretty-code-figure]:hover > pre > code button.rehype-pretty-copy {opacity: 1;}`})]})})]}),`
`,e.jsx(i.p,{children:`While this document model is potentially sufficient to support a chatbot that is capable of hybrid search, its design may be too simplistic and difficult to scale.\r
Diving deeper into the data, we realized that datasets may originate from multiple contributors, as well as contain nested dataset sub-collections.\r
This is something we needed to address by designing a different data model.`}),`
`,e.jsx(i.h4,{children:"Relational Model"}),`
`,e.jsx(i.p,{children:"The following relational model is a simplified version of the relational data model that was designed."}),`
`,e.jsx(i.p,{children:e.jsx(i.img,{src:"/images/aquarium_relational_model.svg",alt:"Aquarium Relational Model"})}),`
`,e.jsxs(i.p,{children:["Using the ",e.jsx(i.a,{href:"https://github.com/pgvector/pgvector",children:"pgvector extension"})," in PostgreSQL, we were able to serve the following data model in a highly scalable, vector-capable relational database."]}),`
`,e.jsx(i.h2,{children:"Chatbot"}),`
`,e.jsx(i.p,{children:"WIP"}),`
`,e.jsx(i.h2,{children:"Contribution Pipeline"}),`
`,e.jsx(i.p,{children:"WIP"}),`
`,e.jsx(i.h2,{children:"Me and the Boys"}),`
`,e.jsx(i.p,{children:e.jsx(i.img,{src:"/images/aquarium-swensens.png",alt:"Me and the boys at swensens unlimited"})})]})}function l(s={}){const{wrapper:i}=s.components||{};return i?e.jsx(i,{...s,children:e.jsx(t,{...s})}):t(s)}export{l as default,n as frontmatter};
