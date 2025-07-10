import{j as e}from"./index-BcNhbBpk.js";const n={title:"Aquarium",description:"Empowering Southeast Asian languages.",date:"2025-06-05",tags:["Next.js","Python","PostgreSQL","FastAPI","LangGraph"],image:"/images/aquarium.svg",website:"https://aquarium.sea-lion.ai/",status:"completed"};function a(i){const t={a:"a",button:"button",code:"code",figcaption:"figcaption",figure:"figure",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",style:"style",...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{children:"Introduction"}),`
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
The primary goal of exploring the data was to understand how various metadata fields may be useful for the chatbot we were trying to build.`]}),`
`,e.jsx(t.p,{children:e.jsx(t.img,{src:"/images/seacrowd-catalogue-csv.png",alt:"SEACrowd Catalogue CSV"})}),`
`,e.jsx(t.h3,{children:"Metadata Fields"}),`
`,e.jsx(t.p,{children:"Within the spreadsheet, many metadata fields are available."}),`
`,e.jsx(t.p,{children:"The following fields were identified as important metadata fields that provide the most qualitative context:"}),`
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
`,e.jsx(t.h4,{children:"Document Model"}),`
`,e.jsxs(t.p,{children:["In ",e.jsx(t.a,{href:"https://python.langchain.com/api_reference/core/documents/langchain_core.documents.base.Document.html",children:"LangChain"}),`, the Document class can be used to store a piece of text and associated its metadata.\r
This is done via the `,e.jsx(t.code,{children:"page_content"})," and optional ",e.jsx(t.code,{children:"metadata"})," attributes."]}),`
`,e.jsxs(t.figure,{"data-rehype-pretty-code-figure":"",children:[e.jsx(t.figcaption,{"data-rehype-pretty-code-title":"","data-language":"python","data-theme":"github-dark-default dark-plus",children:"Document Model Example"}),e.jsx(t.pre,{style:{"--shiki-dark":"#e6edf3","--shiki-light":"#D4D4D4","--shiki-dark-bg":"#0d1117","--shiki-light-bg":"#1E1E1E"},tabIndex:"0","data-language":"python","data-theme":"github-dark-default dark-plus",children:e.jsxs(t.code,{"data-language":"python","data-theme":"github-dark-default dark-plus",style:{display:"grid"},children:[e.jsxs(t.span,{"data-line":"",children:[e.jsx(t.span,{style:{"--shiki-dark":"#FF7B72","--shiki-light":"#C586C0"},children:"from"}),e.jsx(t.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:" langchain_core.documents "}),e.jsx(t.span,{style:{"--shiki-dark":"#FF7B72","--shiki-light":"#C586C0"},children:"import"}),e.jsx(t.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:" Document"})]}),`
`,e.jsx(t.span,{"data-line":"",children:" "}),`
`,e.jsxs(t.span,{"data-line":"",children:[e.jsx(t.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:"document "}),e.jsx(t.span,{style:{"--shiki-dark":"#FF7B72","--shiki-light":"#D4D4D4"},children:"="}),e.jsx(t.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:" Document("})]}),`
`,e.jsxs(t.span,{"data-line":"",children:[e.jsx(t.span,{style:{"--shiki-dark":"#FFA657","--shiki-light":"#9CDCFE"},children:"    page_content"}),e.jsx(t.span,{style:{"--shiki-dark":"#FF7B72","--shiki-light":"#D4D4D4"},children:"="}),e.jsx(t.span,{style:{"--shiki-dark":"#A5D6FF","--shiki-light":"#CE9178"},children:'"The Abui Wordnet dataset is a linguistic resource ..."'}),e.jsx(t.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:","})]}),`
`,e.jsxs(t.span,{"data-line":"",children:[e.jsx(t.span,{style:{"--shiki-dark":"#FFA657","--shiki-light":"#9CDCFE"},children:"    metadata"}),e.jsx(t.span,{style:{"--shiki-dark":"#FF7B72","--shiki-light":"#D4D4D4"},children:"="}),e.jsx(t.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:"{"})]}),`
`,e.jsxs(t.span,{"data-line":"",children:[e.jsx(t.span,{style:{"--shiki-dark":"#A5D6FF","--shiki-light":"#CE9178"},children:'        "name"'}),e.jsx(t.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:": "}),e.jsx(t.span,{style:{"--shiki-dark":"#A5D6FF","--shiki-light":"#CE9178"},children:'"Abui Wordnet"'}),e.jsx(t.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:","})]}),`
`,e.jsxs(t.span,{"data-line":"",children:[e.jsx(t.span,{style:{"--shiki-dark":"#A5D6FF","--shiki-light":"#CE9178"},children:'        "languages"'}),e.jsx(t.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:": ["}),e.jsx(t.span,{style:{"--shiki-dark":"#A5D6FF","--shiki-light":"#CE9178"},children:'"abz"'}),e.jsx(t.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:"],"})]}),`
`,e.jsxs(t.span,{"data-line":"",children:[e.jsx(t.span,{style:{"--shiki-dark":"#A5D6FF","--shiki-light":"#CE9178"},children:'        "tasks"'}),e.jsx(t.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:": ["}),e.jsx(t.span,{style:{"--shiki-dark":"#A5D6FF","--shiki-light":"#CE9178"},children:'"evaluation"'}),e.jsx(t.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:"],"})]}),`
`,e.jsxs(t.span,{"data-line":"",children:[e.jsx(t.span,{style:{"--shiki-dark":"#A5D6FF","--shiki-light":"#CE9178"},children:'        "modalities"'}),e.jsx(t.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:": ["}),e.jsx(t.span,{style:{"--shiki-dark":"#A5D6FF","--shiki-light":"#CE9178"},children:'"text"'}),e.jsx(t.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:"]"})]}),`
`,e.jsxs(t.span,{"data-line":"",children:[e.jsx(t.span,{style:{"--shiki-dark":"#A5D6FF","--shiki-light":"#CE9178"},children:'        "domains"'}),e.jsx(t.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:": ["}),e.jsx(t.span,{style:{"--shiki-dark":"#A5D6FF","--shiki-light":"#CE9178"},children:'"linguistic"'}),e.jsx(t.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:", "}),e.jsx(t.span,{style:{"--shiki-dark":"#A5D6FF","--shiki-light":"#CE9178"},children:'"wordnet"'}),e.jsx(t.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:"]"})]}),`
`,e.jsxs(t.span,{"data-line":"",children:[e.jsx(t.span,{style:{"--shiki-dark":"#A5D6FF","--shiki-light":"#CE9178"},children:'        "samples"'}),e.jsx(t.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:": "}),e.jsx(t.span,{style:{"--shiki-dark":"#79C0FF","--shiki-light":"#B5CEA8"},children:"3606"}),e.jsx(t.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:","})]}),`
`,e.jsxs(t.span,{"data-line":"",children:[e.jsx(t.span,{style:{"--shiki-dark":"#A5D6FF","--shiki-light":"#CE9178"},children:'        "download_size"'}),e.jsx(t.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:": "}),e.jsx(t.span,{style:{"--shiki-dark":"#A5D6FF","--shiki-light":"#CE9178"},children:'"70470"'}),e.jsx(t.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:","})]}),`
`,e.jsx(t.span,{"data-line":"",children:e.jsx(t.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:"    }"})}),`
`,e.jsx(t.span,{"data-line":"",children:e.jsx(t.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:")"})}),e.jsxs(t.button,{type:"button",title:"Copy code","aria-label":"Copy code",data:`from langchain_core.documents import Document

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
)`,className:"rehype-pretty-copy",onClick:"navigator.clipboard.writeText(this.attributes.data.value);this.classList.add('rehype-pretty-copied');window.setTimeout(() => this.classList.remove('rehype-pretty-copied'), 3000);",children:[e.jsx(t.span,{className:"ready"}),e.jsx(t.span,{className:"success"})]}),e.jsx(t.style,{children:`:root {--copy-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'%3E%3Cpath fill='%23adadad' d='M16.187 9.5H12.25a1.75 1.75 0 0 0-1.75 1.75v28.5c0 .967.784 1.75 1.75 1.75h23.5a1.75 1.75 0 0 0 1.75-1.75v-28.5a1.75 1.75 0 0 0-1.75-1.75h-3.937a4.25 4.25 0 0 1-4.063 3h-7.5a4.25 4.25 0 0 1-4.063-3M31.813 7h3.937A4.25 4.25 0 0 1 40 11.25v28.5A4.25 4.25 0 0 1 35.75 44h-23.5A4.25 4.25 0 0 1 8 39.75v-28.5A4.25 4.25 0 0 1 12.25 7h3.937a4.25 4.25 0 0 1 4.063-3h7.5a4.25 4.25 0 0 1 4.063 3M18.5 8.25c0 .966.784 1.75 1.75 1.75h7.5a1.75 1.75 0 1 0 0-3.5h-7.5a1.75 1.75 0 0 0-1.75 1.75'/%3E%3C/svg%3E");--success-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%2366ff85' d='M9 16.17L5.53 12.7a.996.996 0 1 0-1.41 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71a.996.996 0 1 0-1.41-1.41z'/%3E%3C/svg%3E");}pre:has(code) {position: relative;}pre button.rehype-pretty-copy {right: 1px;padding: 0;width: 24px;height: 24px;display: flex;margin-top: 2px;margin-right: 8px;position: absolute;border-radius: 25%;backdrop-filter: blur(3px);& span {width: 100%;aspect-ratio: 1 / 1;}& .ready {background-image: var(--copy-icon);}& .success {display: none; background-image: var(--success-icon);}}&.rehype-pretty-copied {& .success {display: block;} & .ready {display: none;}}pre button.rehype-pretty-copy.rehype-pretty-copied {opacity: 1;& .ready { display: none; }& .success { display: block; }}pre button.rehype-pretty-copy { opacity: 0; }figure[data-rehype-pretty-code-figure]:hover > pre > code button.rehype-pretty-copy {opacity: 1;}`})]})})]}),`
`,e.jsx(t.p,{children:`While this document model is potentially sufficient to support a chatbot that is capable of hybrid search, its design may be too simplistic and difficult to scale.\r
Diving deeper into the data, we realized that datasets may originate from multiple contributors, as well as contain nested dataset sub-collections.\r
This is something we needed to address by designing a different data model.`}),`
`,e.jsx(t.h4,{children:"Relational Model"}),`
`,e.jsx(t.p,{children:"The following relational model is a simplified version of the relational data model that was designed."}),`
`,e.jsx(t.p,{children:e.jsx(t.img,{src:"/images/aquarium_relational_model.svg",alt:"Aquarium Relational Model"})}),`
`,e.jsxs(t.p,{children:["Using the ",e.jsx(t.a,{href:"https://github.com/pgvector/pgvector",children:"pgvector extension"})," in PostgreSQL, we were able to serve the following data model in a highly scalable, vector-capable relational database."]}),`
`,e.jsx(t.h2,{children:"Chatbot"}),`
`,e.jsx(t.p,{children:`Agentic workflows enable the automation of tasks that were previously impossible.\r
However, building systems that can reliably execute specific tasks is a challenge.\r
This is especially noticeable when systems swap between different language models that behave differently.\r
A unique system prompt needs to be optimized for each injected LLM in production.\r
Thus, it is important to ensure that the initial core LLM workflow that is designed is not overly complex.`}),`
`,e.jsx(t.h3,{children:"Core Concepts"}),`
`,e.jsx(t.h4,{children:"Control Flow"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.a,{href:"https://langchain-ai.github.io/langgraph/concepts/why-langgraph/",children:"LangGraph"})," supports agentic LLM workflows that are able to autonomously determine the control flow of an application."]}),`
`,e.jsx(t.p,{children:e.jsx(t.img,{src:"/images/LangChain_Academy_-_Introduction_to_LangGraph_-_Motivation-09.png",alt:"Control Flow Agents"})}),`
`,e.jsx(t.p,{children:"Generally, the more control an LLM agent has over the control flow of an application, the less reliable the system becomes."}),`
`,e.jsx(t.p,{children:e.jsx(t.img,{src:"/images/LangChain_Academy_-_Introduction_to_LangGraph_-_Motivation-10.png",alt:"Reliability Tradeoffs"})}),`
`,e.jsx(t.p,{children:`However in LangGraph, memory can be shared between agent invocations via persistent graph states.\r
This ensures that the overall context of a running conversation is well-preserved so as to improve the reliability of highly autonomous agent workflows.`}),`
`,e.jsx(t.p,{children:e.jsx(t.img,{src:"/images/LangChain_Academy_-_Introduction_to_LangGraph_-_Motivation-11.png",alt:"Reliability Tradeoffs"})}),`
`,e.jsx(t.h4,{children:"ReAct"}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.a,{href:"https://arxiv.org/abs/2210.03629",children:"Reason and Act (ReAct)"}),` framework is a popular general purpose agent architecture that leverages\r
the ability of LLMs to `,e.jsx(t.a,{href:"https://langchain-ai.github.io/langgraph/concepts/agentic_concepts/#planning",children:"plan"}),", use ",e.jsx(t.a,{href:"https://langchain-ai.github.io/langgraph/concepts/agentic_concepts/#tool-calling",children:"tools"}),`, and act on observations to achieve a certain goal.\r
The process is autonomous and a LLM is capable of dynamic updating its strategy based on the observations it receives.`]}),`
`,e.jsx(t.p,{children:e.jsx(t.img,{src:"/images/langgraph-react-agent_16_0.png",alt:"Simple ReAct Graph"})}),`
`,e.jsx(t.h3,{children:"Requirements"}),`
`,e.jsx(t.p,{children:`The main requirement of the Aquarium chatbot is that it should be able to match a user's query to the most relevant dataset available.\r
Given that the Aquarium platform is meant to serve users of various native tongues, the chatbot should also be able to understand non-English queries, and respond appropriately.`}),`
`,e.jsx(t.h3,{children:"Agents"}),`
`,e.jsx(t.h4,{children:"Orchestrator Agent"}),`
`,e.jsx(t.p,{children:`The orchestrator agent is the main agent that is responsible for orchestrating the entire chatbot workflow.\r
It serves as the brain for understanding user intent, managing conversation flow, and deciding what information is needed for other agents to complete delegated tasks.`}),`
`,e.jsx(t.p,{children:"As the orchestrator, it is given access to the following tools that should be called in order:"}),`
`,e.jsx(t.h5,{children:"Translation Tool"}),`
`,e.jsx(t.p,{children:`The translation tool is essential to ensure that user queries are first standardized to English.\r
This is crucial given that almost all documents contain English metadata.\r
This ensures that query embeddings and document embeddings are aligned, and do not require the use of a cross-lingual embedding model.`}),`
`,e.jsx(t.h5,{children:"Query Expander Tool"}),`
`,e.jsx(t.p,{children:`If a user's query is too sparse or ambiguous, the orchestrator agent can decide to call the query expander tool to generate a more detailed query that improves retrieval recall performance.\r
This works by adding synonyms or related terms, crafting more precise queries, or creating multiple query variants to cast a wider net for the initial retrieval.`}),`
`,e.jsx(t.p,{children:"It is important to note that over-expansion may lead to a decrease in retrieval precision, as the original intent of a query may become distorted."}),`
`,e.jsx(t.h4,{children:"Retrieval Agent"}),`
`,e.jsxs(t.p,{children:[`After initial query preprocessing, the retrieval agent should be invoked if a data retrieval action is needed.\r
As the "Data Expert", it is responsible for all operations to retrieve data from our unified PostgreSQL + `,e.jsx(t.code,{children:"pgvector"})," database."]}),`
`,e.jsx(t.p,{children:"To accomplish data retrieval goals, the retrieval agent is given access to the following tools that should be called in order:"}),`
`,e.jsx(t.h5,{children:"Query Embedder Tool"}),`
`,e.jsx(t.p,{children:`The purpose of the query embedder tool is to convert an input query into a vector embedding that can be used to perform vector search.\r
By comparing cosine similarity scores between query embeddings and document embeddings, the most relevant datasets can be retrieved.`}),`
`,e.jsx(t.h5,{children:"Text-to-SQL Tool"}),`
`,e.jsx(t.p,{children:`The Text-to-SQL tool can be used to convert natural language queries into SQL queries aligned with the schema of the database.\r
Given that database entities can be nested and contain complex relationships, this tool can be very powerful when it works.\r
It allows the retrieval agent to perform more precise, filtered data retrieval operations.`}),`
`,e.jsx(t.p,{children:`It is important to note that presently, the performance of Text-to-SQL tools fail to meet expectations when dealing with complex databases.\r
However, models are continuously improving and we can expect exponential improvements in the near future.`}),`
`,e.jsx(t.h5,{children:"Database Retrieval Tool"}),`
`,e.jsx(t.p,{children:"The database retrieval tool is used to execute any generated SQL query against the PostgreSQL database."}),`
`,e.jsx(t.h5,{children:"Reranker Tool (Optional)"}),`
`,e.jsx(t.p,{children:"Finally, a reranker tool that leverages a reranker model or another LLM as a judge can be used by the retrieval agent to refine and reorder retrieval results."}),`
`,e.jsx(t.p,{children:`For a small database, a reranker tool may not be necessary.\r
However as data grows, the addition of a reranking layer may be useful to improve retrieval precision.`}),`
`,e.jsx(t.h4,{children:"Response Generation Agent"}),`
`,e.jsxs(t.p,{children:[`After sufficient information is retrieved via the retrieval agent, and the orchestrator agent decides that sufficient context has been acquired,\r
the response generation agent should be invoked to generate an appropriate response to the initial user's query.\r
This may necessitate calling the `,e.jsx(t.code,{children:"translation tool"}),` once more to translate the response back to the user's original language,\r
or the language the response was requested to be in.`]}),`
`,e.jsx(t.p,{children:"In its system prompt, the final response is instructed to be in markdown format which is flexible and highly portable."}),`
`,e.jsx(t.h2,{children:"Contribution Pipeline"}),`
`,e.jsx(t.p,{children:"WIP"}),`
`,e.jsx(t.h2,{children:"Me and the Boys"}),`
`,e.jsx(t.p,{children:e.jsx(t.img,{src:"/images/aquarium-swensens.png",alt:"Me and the boys at swensens unlimited"})})]})}function r(i={}){const{wrapper:t}=i.components||{};return t?e.jsx(t,{...i,children:e.jsx(a,{...i})}):a(i)}export{r as default,n as frontmatter};
