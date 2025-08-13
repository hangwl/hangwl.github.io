import{j as e}from"./index-5JzVxkyC.js";const n={title:"Aquarium",description:"Empowering Southeast Asian languages.",date:"2025-06-05",tags:["Next.js","Python","PostgreSQL","FastAPI","LangGraph"],image:"/images/aquarium.svg",website:"https://aquarium.sea-lion.ai/",status:"completed"};function a(t){const i={a:"a",blockquote:"blockquote",code:"code",figcaption:"figcaption",figure:"figure",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i.h1,{children:"Introduction"}),`
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
`,e.jsx(i.span,{"data-line":"",children:e.jsx(i.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:")"})})]})})]}),`
`,e.jsx(i.p,{children:`While this document model is potentially sufficient to support a chatbot that is capable of hybrid search, its design may be too simplistic and difficult to scale.\r
Diving deeper into the data, we realized that datasets may originate from multiple contributors, as well as contain nested dataset sub-collections.\r
This is something we needed to address by designing a different data model.`}),`
`,e.jsx(i.h4,{children:"Relational Model"}),`
`,e.jsx(i.p,{children:"The following relational model is a simplified version of the relational data model that was designed."}),`
`,e.jsx(i.p,{children:e.jsx(i.img,{src:"/images/aquarium_relational_model.svg",alt:"Aquarium Relational Model"})}),`
`,e.jsxs(i.p,{children:["Using the ",e.jsx(i.a,{href:"https://github.com/pgvector/pgvector",children:"pgvector extension"})," in PostgreSQL, we were able to serve the following data model in a highly scalable, vector-capable relational database."]}),`
`,e.jsx(i.h2,{children:"Chatbot"}),`
`,e.jsx(i.p,{children:`Agentic workflows enable the automation of tasks that were previously impossible.\r
However, building systems that can reliably execute specific tasks is a challenge.\r
This is especially noticeable when systems swap between different language models that behave differently.\r
A unique system prompt needs to be optimized for each injected LLM in production.\r
Thus, it is important to ensure that the initial core LLM workflow that is designed is not overly complex.`}),`
`,e.jsx(i.h3,{children:"Core Concepts"}),`
`,e.jsx(i.h4,{children:"Control Flow"}),`
`,e.jsxs(i.p,{children:[e.jsx(i.a,{href:"https://langchain-ai.github.io/langgraph/concepts/why-langgraph/",children:"LangGraph"})," supports agentic LLM workflows that are able to autonomously determine the control flow of an application."]}),`
`,e.jsx(i.p,{children:e.jsx(i.img,{src:"/images/LangChain_Academy_-_Introduction_to_LangGraph_-_Motivation-09.png",alt:"Control Flow Agents"})}),`
`,e.jsx(i.p,{children:"Generally, the more control an LLM agent has over the control flow of an application, the less reliable the system becomes."}),`
`,e.jsx(i.p,{children:e.jsx(i.img,{src:"/images/LangChain_Academy_-_Introduction_to_LangGraph_-_Motivation-10.png",alt:"Reliability Tradeoffs"})}),`
`,e.jsx(i.p,{children:`However in LangGraph, memory can be shared between agent invocations via persistent graph states.\r
This ensures that the overall context of a running conversation is well-preserved so as to improve the reliability of highly autonomous agent workflows.`}),`
`,e.jsx(i.p,{children:e.jsx(i.img,{src:"/images/LangChain_Academy_-_Introduction_to_LangGraph_-_Motivation-11.png",alt:"Reliability Tradeoffs"})}),`
`,e.jsx(i.h4,{children:"ReAct"}),`
`,e.jsxs(i.p,{children:["The ",e.jsx(i.a,{href:"https://arxiv.org/abs/2210.03629",children:"Reason and Act (ReAct)"}),` framework is a popular general purpose agent architecture that leverages\r
the ability of LLMs to `,e.jsx(i.a,{href:"https://langchain-ai.github.io/langgraph/concepts/agentic_concepts/#planning",children:"plan"}),", use ",e.jsx(i.a,{href:"https://langchain-ai.github.io/langgraph/concepts/agentic_concepts/#tool-calling",children:"tools"}),`, and act on observations to achieve a certain goal.\r
The process is autonomous and a LLM is capable of dynamic updating its strategy based on the observations it receives.`]}),`
`,e.jsx(i.p,{children:e.jsx(i.img,{src:"/images/langgraph-react-agent_16_0.png",alt:"Simple ReAct Graph"})}),`
`,e.jsx(i.h3,{children:"Requirements"}),`
`,e.jsx(i.p,{children:`The main requirement of the Aquarium chatbot is that it should be able to match a user's query to the most relevant dataset available.\r
Given that the Aquarium platform is meant to serve users of various native tongues, the chatbot should also be able to understand non-English queries, and respond appropriately.`}),`
`,e.jsx(i.h3,{children:"Agents"}),`
`,e.jsx(i.h4,{children:"Orchestrator Agent"}),`
`,e.jsx(i.p,{children:`The orchestrator agent is the main agent that is responsible for orchestrating the entire chatbot workflow as well as supervising and delegating tasks to other agents.\r
It serves as the brain for understanding user intent, managing conversation flow, and deciding what information is needed for other agents to complete their tasks.`}),`
`,e.jsx(i.p,{children:"As the orchestrator, it is given access to the following tools that should be called in order:"}),`
`,e.jsx(i.h5,{children:"Translation Tool"}),`
`,e.jsx(i.p,{children:`The translation tool is essential to ensure that user queries are first standardized to English.\r
This is crucial given that almost all documents contain English metadata.\r
This ensures that query embeddings and document embeddings are aligned, and do not require the use of a cross-lingual embedding model.`}),`
`,e.jsx(i.h5,{children:"Query Expander Tool"}),`
`,e.jsx(i.p,{children:`If a user's query is too sparse or ambiguous, the orchestrator agent can decide to call the query expander tool to generate a more detailed query that improves retrieval recall performance.\r
This works by adding synonyms or related terms, crafting more precise queries, or creating multiple query variants to cast a wider net for the initial retrieval.`}),`
`,e.jsxs(i.blockquote,{children:[`
`,e.jsx(i.p,{children:"It is important to note that over-expansion may lead to a decrease in retrieval precision, as the original intent of a query may become distorted."}),`
`]}),`
`,e.jsx(i.h4,{children:"Retrieval Agent"}),`
`,e.jsxs(i.p,{children:[`After initial query preprocessing, the retrieval agent should be invoked if a data retrieval action is needed.\r
As the "Data Expert", it is responsible for all operations to retrieve data from our unified PostgreSQL + `,e.jsx(i.code,{children:"pgvector"})," database."]}),`
`,e.jsx(i.p,{children:"To accomplish data retrieval goals, the retrieval agent is given access to the following tools that should be called in order:"}),`
`,e.jsx(i.h5,{children:"Query Embedder Tool"}),`
`,e.jsx(i.p,{children:`The purpose of the query embedder tool is to convert an input query into a vector embedding that can be used to perform vector search.\r
By comparing cosine similarity scores between query embeddings and document embeddings, the most relevant datasets can be retrieved.`}),`
`,e.jsx(i.h5,{children:"Text-to-SQL Tool"}),`
`,e.jsx(i.p,{children:`The Text-to-SQL tool can be used to convert natural language queries into SQL queries aligned with the schema of the database.\r
Given that database entities can be nested and contain complex relationships, this tool can be very powerful when it works.\r
It allows the retrieval agent to perform more precise, filtered data retrieval operations.`}),`
`,e.jsxs(i.blockquote,{children:[`
`,e.jsx(i.p,{children:`It is important to note that presently, the performance of Text-to-SQL tools fail to meet expectations when dealing with complex databases.\r
However, models are continuously improving and we can expect exponential improvements in the near future.`}),`
`]}),`
`,e.jsx(i.h5,{children:"Database Retrieval Tool"}),`
`,e.jsx(i.p,{children:"The database retrieval tool is used to execute any generated SQL query against the PostgreSQL database."}),`
`,e.jsx(i.h5,{children:"Reranker Tool (Optional)"}),`
`,e.jsx(i.p,{children:"Finally, a reranker tool that leverages a reranker model or another LLM as a judge can be used by the retrieval agent to refine and reorder retrieval results."}),`
`,e.jsxs(i.blockquote,{children:[`
`,e.jsx(i.p,{children:`For a small database, a reranker tool may not be necessary.\r
However as data grows, the addition of a reranking layer may be useful to improve retrieval precision.`}),`
`]}),`
`,e.jsx(i.h4,{children:"Response Generation Agent"}),`
`,e.jsxs(i.p,{children:[`After sufficient information is retrieved via the retrieval agent, and the orchestrator agent decides that sufficient context has been acquired,\r
the response generation agent should be invoked to generate an appropriate response to the initial user's query.\r
This may necessitate calling the `,e.jsx(i.code,{children:"translation tool"}),` once more to translate the response back to the user's original language,\r
or the language the response was requested to be in.`]}),`
`,e.jsx(i.p,{children:"In its system prompt, the final response is instructed to be in markdown format which is flexible and highly portable."}),`
`,e.jsx(i.h2,{children:"Contribution Pipeline"}),`
`,e.jsxs(i.blockquote,{children:[`
`,e.jsx(i.p,{children:"WIP"}),`
`]}),`
`,e.jsx(i.h2,{children:"Me and the Boys"}),`
`,e.jsx(i.p,{children:e.jsx(i.img,{src:"/images/aquarium-swensens.png",alt:"Me and the boys at swensens unlimited"})})]})}function r(t={}){const{wrapper:i}=t.components||{};return i?e.jsx(i,{...t,children:e.jsx(a,{...t})}):a(t)}export{r as default,n as frontmatter};
