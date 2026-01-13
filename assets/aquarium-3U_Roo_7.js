import{j as e}from"./index-DmIt1YIB.js";const s=[{id:"introduction",title:"Introduction",level:1},{id:"project-scope",title:"Project Scope",level:2},{id:"data",title:"Data",level:2},{id:"metadata-fields",title:"Metadata Fields",level:3},{id:"data-modeling",title:"Data Modeling",level:3},{id:"document-model",title:"Document Model",level:4},{id:"relational-model",title:"Relational Model",level:4},{id:"chatbot",title:"Chatbot",level:2},{id:"core-concepts",title:"Core Concepts",level:3},{id:"control-flow",title:"Control Flow",level:4},{id:"react",title:"ReAct",level:4},{id:"requirements",title:"Requirements",level:3},{id:"agents",title:"Agents",level:3},{id:"orchestrator-agent",title:"Orchestrator Agent",level:4},{id:"translation-tool",title:"Translation Tool",level:5},{id:"query-expander-tool",title:"Query Expander Tool",level:5},{id:"retrieval-agent",title:"Retrieval Agent",level:4},{id:"query-embedder-tool",title:"Query Embedder Tool",level:5},{id:"text-to-sql-tool",title:"Text-to-SQL Tool",level:5},{id:"database-retrieval-tool",title:"Database Retrieval Tool",level:5},{id:"reranker-tool-optional",title:"Reranker Tool (Optional)",level:5},{id:"response-generation-agent",title:"Response Generation Agent",level:4},{id:"contribution-pipeline",title:"Contribution Pipeline",level:2},{id:"me-and-the-boys",title:"Me and the Boys",level:2}],r={title:"Aquarium",description:"A community-driven platform aimed at addressing data scarcity and increasing language representation within Southeast Asia. It features an assistive chatbot focused on increasing data accessibility to the public.",date:"2025-06-05",tags:["Next.js","Python","PostgreSQL","FastAPI","LangGraph"],image:"/images/aquarium.svg",website:"https://aquarium.sea-lion.ai/",status:"completed",featured:!0,order:1};function a(i){const t={a:"a",blockquote:"blockquote",code:"code",figcaption:"figcaption",figure:"figure",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"introduction",children:"Introduction"}),`
`,e.jsx(t.p,{children:`Aquarium is a platform that was developed to address challenges related to the accessibility of language datasets specifically within Southeast Asia.\r
The region is incredibly linguistically diverse and is home to over 1,200 languages and dialects.\r
With recent developments in large language models, leaders have recognized the importance of regional collaboration and\r
providing incentives for the community to contribute datasets that increase Southeast Asian representation.`}),`
`,e.jsx(t.p,{children:`As an AI Apprentice, I was given the opportunity to work on the beta version of the Aquarium project for a period of 7 months alongside 2 mentors and 2 other apprentices.\r
In AI Singapore, apprentices are presented with a real-world truth. That is, there will not always be a "best-practice" to follow for every project.\r
Thus, it is up to the apprentices to innovate and come up with solutions that are tailored to their project's needs.`}),`
`,e.jsx(t.h2,{id:"project-scope",children:"Project Scope"}),`
`,e.jsx(t.p,{children:`The initial scope of the project presented to the apprentices was truthfully vague.\r
There were 2 main objectives:`}),`
`,e.jsxs(t.ol,{children:[`
`,e.jsx(t.li,{children:"Implement a chatbot that is able to help users search for SEA datasets and provide insights."}),`
`,e.jsx(t.li,{children:"Implement a contribution pipeline for users to contribute datasets."}),`
`]}),`
`,e.jsx(t.h2,{id:"data",children:"Data"}),`
`,e.jsxs(t.p,{children:["To get things started, we were tasked to explore and analyze the data in the ",e.jsx(t.a,{href:"https://seacrowd.github.io/seacrowd-catalogue/",children:"SEACrowd Catalogue"}),`.\r
The public spreadsheet contains a collection of dataset metadata contributed by individuals from the `,e.jsx(t.a,{href:"https://seacrowd.github.io/",children:"SEACrowd community"}),`.\r
The primary goal of exploring the data was to understand how various metadata fields may be useful for the chatbot we were trying to build.`]}),`
`,e.jsx(t.p,{children:e.jsx(t.img,{src:"/images/seacrowd-catalogue-csv.png",alt:"SEACrowd Catalogue CSV"})}),`
`,e.jsx(t.h3,{id:"metadata-fields",children:"Metadata Fields"}),`
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
`,e.jsx(t.h3,{id:"data-modeling",children:"Data Modeling"}),`
`,e.jsx(t.p,{children:"To support the chatbot, the data needed to be modeled in a way to enable semantic and keyword search capabilities."}),`
`,e.jsx(t.h4,{id:"document-model",children:"Document Model"}),`
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
`,e.jsx(t.span,{"data-line":"",children:e.jsx(t.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:")"})})]})})]}),`
`,e.jsx(t.p,{children:`While this document model is potentially sufficient to support a chatbot that is capable of hybrid search, its design may be too simplistic and difficult to scale.\r
Diving deeper into the data, we realized that datasets may originate from multiple contributors, as well as contain nested dataset sub-collections.\r
This is something we needed to address by designing a different data model.`}),`
`,e.jsx(t.h4,{id:"relational-model",children:"Relational Model"}),`
`,e.jsx(t.p,{children:"The following relational model is a simplified version of the relational data model that was designed."}),`
`,e.jsx(t.p,{children:e.jsx(t.img,{src:"/images/aquarium_relational_model.svg",alt:"Aquarium Relational Model"})}),`
`,e.jsxs(t.p,{children:["Using the ",e.jsx(t.a,{href:"https://github.com/pgvector/pgvector",children:"pgvector extension"})," in PostgreSQL, we were able to serve the following data model in a highly scalable, vector-capable relational database."]}),`
`,e.jsx(t.h2,{id:"chatbot",children:"Chatbot"}),`
`,e.jsx(t.p,{children:`Agentic workflows enable the automation of tasks that were previously impossible.\r
However, building systems that can reliably execute specific tasks is a challenge.\r
This is especially noticeable when systems swap between different language models that behave differently.\r
A unique system prompt needs to be optimized for each injected LLM in production.\r
Thus, it is important to ensure that the initial core LLM workflow that is designed is not overly complex.`}),`
`,e.jsx(t.h3,{id:"core-concepts",children:"Core Concepts"}),`
`,e.jsx(t.h4,{id:"control-flow",children:"Control Flow"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.a,{href:"https://langchain-ai.github.io/langgraph/concepts/why-langgraph/",children:"LangGraph"})," supports agentic LLM workflows that are able to autonomously determine the control flow of an application."]}),`
`,e.jsx(t.p,{children:e.jsx(t.img,{src:"/images/LangChain_Academy_-_Introduction_to_LangGraph_-_Motivation-09.png",alt:"Control Flow Agents"})}),`
`,e.jsx(t.p,{children:"Generally, the more control an LLM agent has over the control flow of an application, the less reliable the system becomes."}),`
`,e.jsx(t.p,{children:e.jsx(t.img,{src:"/images/LangChain_Academy_-_Introduction_to_LangGraph_-_Motivation-10.png",alt:"Reliability Tradeoffs"})}),`
`,e.jsx(t.p,{children:`However in LangGraph, memory can be shared between agent invocations via persistent graph states.\r
This ensures that the overall context of a running conversation is well-preserved so as to improve the reliability of highly autonomous agent workflows.`}),`
`,e.jsx(t.p,{children:e.jsx(t.img,{src:"/images/LangChain_Academy_-_Introduction_to_LangGraph_-_Motivation-11.png",alt:"Reliability Tradeoffs"})}),`
`,e.jsx(t.h4,{id:"react",children:"ReAct"}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.a,{href:"https://arxiv.org/abs/2210.03629",children:"Reason and Act (ReAct)"}),` framework is a popular general purpose agent architecture that leverages\r
the ability of LLMs to `,e.jsx(t.a,{href:"https://langchain-ai.github.io/langgraph/concepts/agentic_concepts/#planning",children:"plan"}),", use ",e.jsx(t.a,{href:"https://langchain-ai.github.io/langgraph/concepts/agentic_concepts/#tool-calling",children:"tools"}),`, and act on observations to achieve a certain goal.\r
The process is autonomous and a LLM is capable of dynamic updating its strategy based on the observations it receives.`]}),`
`,e.jsx(t.p,{children:e.jsx(t.img,{src:"/images/langgraph-react-agent_16_0.png",alt:"Simple ReAct Graph"})}),`
`,e.jsx(t.h3,{id:"requirements",children:"Requirements"}),`
`,e.jsx(t.p,{children:`The main requirement of the Aquarium chatbot is that it should be able to match a user's query to the most relevant dataset available.\r
Given that the Aquarium platform is meant to serve users of various native tongues, the chatbot should also be able to understand non-English queries, and respond appropriately.`}),`
`,e.jsx(t.h3,{id:"agents",children:"Agents"}),`
`,e.jsx(t.h4,{id:"orchestrator-agent",children:"Orchestrator Agent"}),`
`,e.jsx(t.p,{children:`The orchestrator agent is the main agent that is responsible for orchestrating the entire chatbot workflow as well as supervising and delegating tasks to other agents.\r
It serves as the brain for understanding user intent, managing conversation flow, and deciding what information is needed for other agents to complete their tasks.`}),`
`,e.jsx(t.p,{children:"As the orchestrator, it is given access to the following tools that should be called in order:"}),`
`,e.jsx(t.h5,{id:"translation-tool",children:"Translation Tool"}),`
`,e.jsx(t.p,{children:`The translation tool is essential to ensure that user queries are first standardized to English.\r
This is crucial given that almost all documents contain English metadata.\r
This ensures that query embeddings and document embeddings are aligned, and do not require the use of a cross-lingual embedding model.`}),`
`,e.jsx(t.h5,{id:"query-expander-tool",children:"Query Expander Tool"}),`
`,e.jsx(t.p,{children:`If a user's query is too sparse or ambiguous, the orchestrator agent can decide to call the query expander tool to generate a more detailed query that improves retrieval recall performance.\r
This works by adding synonyms or related terms, crafting more precise queries, or creating multiple query variants to cast a wider net for the initial retrieval.`}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsx(t.p,{children:"It is important to note that over-expansion may lead to a decrease in retrieval precision, as the original intent of a query may become distorted."}),`
`]}),`
`,e.jsx(t.h4,{id:"retrieval-agent",children:"Retrieval Agent"}),`
`,e.jsxs(t.p,{children:[`After initial query preprocessing, the retrieval agent should be invoked if a data retrieval action is needed.\r
As the "Data Expert", it is responsible for all operations to retrieve data from our unified PostgreSQL + `,e.jsx(t.code,{children:"pgvector"})," database."]}),`
`,e.jsx(t.p,{children:"To accomplish data retrieval goals, the retrieval agent is given access to the following tools that should be called in order:"}),`
`,e.jsx(t.h5,{id:"query-embedder-tool",children:"Query Embedder Tool"}),`
`,e.jsx(t.p,{children:`The purpose of the query embedder tool is to convert an input query into a vector embedding that can be used to perform vector search.\r
By comparing cosine similarity scores between query embeddings and document embeddings, the most relevant datasets can be retrieved.`}),`
`,e.jsx(t.h5,{id:"text-to-sql-tool",children:"Text-to-SQL Tool"}),`
`,e.jsx(t.p,{children:`The Text-to-SQL tool can be used to convert natural language queries into SQL queries aligned with the schema of the database.\r
Given that database entities can be nested and contain complex relationships, this tool can be very powerful when it works.\r
It allows the retrieval agent to perform more precise, filtered data retrieval operations.`}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsx(t.p,{children:`It is important to note that presently, the performance of Text-to-SQL tools fail to meet expectations when dealing with complex databases.\r
However, models are continuously improving and we can expect exponential improvements in the near future.`}),`
`]}),`
`,e.jsx(t.h5,{id:"database-retrieval-tool",children:"Database Retrieval Tool"}),`
`,e.jsx(t.p,{children:"The database retrieval tool is used to execute any generated SQL query against the PostgreSQL database."}),`
`,e.jsx(t.h5,{id:"reranker-tool-optional",children:"Reranker Tool (Optional)"}),`
`,e.jsx(t.p,{children:"Finally, a reranker tool that leverages a reranker model or another LLM as a judge can be used by the retrieval agent to refine and reorder retrieval results."}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsx(t.p,{children:`For a small database, a reranker tool may not be necessary.\r
However as data grows, the addition of a reranking layer may be useful to improve retrieval precision.`}),`
`]}),`
`,e.jsx(t.h4,{id:"response-generation-agent",children:"Response Generation Agent"}),`
`,e.jsxs(t.p,{children:[`After sufficient information is retrieved via the retrieval agent, and the orchestrator agent decides that sufficient context has been acquired,\r
the response generation agent should be invoked to generate an appropriate response to the initial user's query.\r
This may necessitate calling the `,e.jsx(t.code,{children:"translation tool"}),` once more to translate the response back to the user's original language,\r
or the language the response was requested to be in.`]}),`
`,e.jsx(t.p,{children:"In its system prompt, the final response is instructed to be in markdown format which is flexible and highly portable."}),`
`,e.jsx(t.h2,{id:"contribution-pipeline",children:"Contribution Pipeline"}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsx(t.p,{children:"WIP"}),`
`]}),`
`,e.jsx(t.h2,{id:"me-and-the-boys",children:"Me and the Boys"}),`
`,e.jsx(t.p,{children:e.jsx(t.img,{src:"/images/aquarium-swensens.png",alt:"Me and the boys at swensens unlimited"})})]})}function l(i={}){const{wrapper:t}=i.components||{};return t?e.jsx(t,{...i,children:e.jsx(a,{...i})}):a(i)}export{l as default,r as frontmatter,s as toc};
