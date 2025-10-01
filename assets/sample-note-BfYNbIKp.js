import{j as i}from"./index-CtAT4ExP.js";const l={title:"Sample Note",hide:!0,links:["related-note-1","related-note-2"]};function n(s){const e={code:"code",figcaption:"figcaption",figure:"figure",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...s.components};return i.jsxs(i.Fragment,{children:[i.jsx(e.h2,{children:"Frontmatter Fields"}),`
`,i.jsx(e.p,{children:"Available frontmatter fields for notes:"}),`
`,i.jsxs(e.ul,{children:[`
`,i.jsxs(e.li,{children:[i.jsx(e.strong,{children:"title"})," (required): The note title displayed in the UI"]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.strong,{children:"hide"})," (optional): Set to ",i.jsx(e.code,{children:"true"})," to hide from note listings"]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.strong,{children:"links"})," (optional): Array of related note slugs (without ",i.jsx(e.code,{children:".md"})," extension)"]}),`
`]}),`
`,i.jsx(e.p,{children:"Example:"}),`
`,i.jsx(e.figure,{"data-rehype-pretty-code-figure":"",children:i.jsx(e.pre,{style:{"--shiki-dark":"#e6edf3","--shiki-light":"#D4D4D4","--shiki-dark-bg":"#0d1117","--shiki-light-bg":"#1E1E1E"},tabIndex:"0","data-language":"yaml","data-theme":"github-dark-default dark-plus",children:i.jsxs(e.code,{"data-language":"yaml","data-theme":"github-dark-default dark-plus",style:{display:"grid"},children:[i.jsx(e.span,{"data-line":"",children:i.jsx(e.span,{style:{"--shiki-dark":"#79C0FF","--shiki-light":"#D4D4D4"},children:"---"})}),`
`,i.jsxs(e.span,{"data-line":"",children:[i.jsx(e.span,{style:{"--shiki-dark":"#7EE787","--shiki-light":"#569CD6"},children:"title"}),i.jsx(e.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:": "}),i.jsx(e.span,{style:{"--shiki-dark":"#A5D6FF","--shiki-light":"#CE9178"},children:'"My Note Title"'})]}),`
`,i.jsxs(e.span,{"data-line":"",children:[i.jsx(e.span,{style:{"--shiki-dark":"#7EE787","--shiki-light":"#569CD6"},children:"links"}),i.jsx(e.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:":"})]}),`
`,i.jsxs(e.span,{"data-line":"",children:[i.jsx(e.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:"  - "}),i.jsx(e.span,{style:{"--shiki-dark":"#A5D6FF","--shiki-light":"#CE9178"},children:"'http'"})]}),`
`,i.jsxs(e.span,{"data-line":"",children:[i.jsx(e.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:"  - "}),i.jsx(e.span,{style:{"--shiki-dark":"#A5D6FF","--shiki-light":"#CE9178"},children:"'https'"})]}),`
`,i.jsxs(e.span,{"data-line":"",children:[i.jsx(e.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:"  - "}),i.jsx(e.span,{style:{"--shiki-dark":"#A5D6FF","--shiki-light":"#CE9178"},children:"'rest-api'"})]}),`
`,i.jsx(e.span,{"data-line":"",children:i.jsx(e.span,{style:{"--shiki-dark":"#79C0FF","--shiki-light":"#D4D4D4"},children:"---"})})]})})}),`
`,i.jsx(e.h2,{children:"Note Writing Guidelines"}),`
`,i.jsx(e.h3,{children:"Keep It Simple"}),`
`,i.jsxs(e.ul,{children:[`
`,i.jsxs(e.li,{children:[i.jsx(e.strong,{children:"Focused scope"}),": Each note should cover a single concept or topic"]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.strong,{children:"Limited sections"}),": Aim for 3-7 main sections maximum"]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.strong,{children:"Concise content"}),": Get to the point quickly, avoid verbose explanations"]}),`
`]}),`
`,i.jsx(e.h3,{children:"When to Create New Notes"}),`
`,i.jsx(e.p,{children:"If a concept requires extensive explanation:"}),`
`,i.jsxs(e.ul,{children:[`
`,i.jsx(e.li,{children:"Create a separate note for that concept"}),`
`,i.jsxs(e.li,{children:["Link to it using the ",i.jsx(e.code,{children:"links"})," frontmatter field"]}),`
`,i.jsxs(e.li,{children:["Reference it inline with markdown links: ",i.jsx(e.code,{children:"[concept name](/notes/concept-slug)"})]}),`
`]}),`
`,i.jsxs(e.p,{children:["Example: Instead of explaining SSL/TLS in detail within an HTTPS note, create separate ",i.jsx(e.code,{children:"ssl-tls.md"})," and ",i.jsx(e.code,{children:"ssl-certificates.md"})," notes."]}),`
`,i.jsx(e.h3,{children:"Content Structure"}),`
`,i.jsx(e.p,{children:i.jsx(e.strong,{children:"Good structure:"})}),`
`,i.jsx(e.figure,{"data-rehype-pretty-code-figure":"",children:i.jsx(e.pre,{style:{"--shiki-dark":"#e6edf3","--shiki-light":"#D4D4D4","--shiki-dark-bg":"#0d1117","--shiki-light-bg":"#1E1E1E"},tabIndex:"0","data-language":"markdown","data-theme":"github-dark-default dark-plus",children:i.jsxs(e.code,{"data-language":"markdown","data-theme":"github-dark-default dark-plus",style:{display:"grid"},children:[i.jsx(e.span,{"data-line":"",children:i.jsx(e.span,{style:{"--shiki-dark":"#79C0FF","--shiki-dark-font-weight":"bold","--shiki-light":"#569CD6","--shiki-light-font-weight":"bold"},children:"## Introduction"})}),`
`,i.jsx(e.span,{"data-line":"",children:i.jsx(e.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:"Brief overview (2-3 sentences)"})}),`
`,i.jsx(e.span,{"data-line":"",children:" "}),`
`,i.jsx(e.span,{"data-line":"",children:i.jsx(e.span,{style:{"--shiki-dark":"#79C0FF","--shiki-dark-font-weight":"bold","--shiki-light":"#569CD6","--shiki-light-font-weight":"bold"},children:"## Key Concept 1"})}),`
`,i.jsx(e.span,{"data-line":"",children:i.jsx(e.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:"Concise explanation with examples"})}),`
`,i.jsx(e.span,{"data-line":"",children:" "}),`
`,i.jsx(e.span,{"data-line":"",children:i.jsx(e.span,{style:{"--shiki-dark":"#79C0FF","--shiki-dark-font-weight":"bold","--shiki-light":"#569CD6","--shiki-light-font-weight":"bold"},children:"## Key Concept 2"})}),`
`,i.jsx(e.span,{"data-line":"",children:i.jsx(e.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:"Concise explanation with examples"})}),`
`,i.jsx(e.span,{"data-line":"",children:" "}),`
`,i.jsx(e.span,{"data-line":"",children:i.jsx(e.span,{style:{"--shiki-dark":"#79C0FF","--shiki-dark-font-weight":"bold","--shiki-light":"#569CD6","--shiki-light-font-weight":"bold"},children:"## Best Practices"})}),`
`,i.jsx(e.span,{"data-line":"",children:i.jsx(e.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:"Bullet points of practical tips"})})]})})}),`
`,i.jsx(e.p,{children:i.jsx(e.strong,{children:"Avoid:"})}),`
`,i.jsxs(e.ul,{children:[`
`,i.jsx(e.li,{children:"Long paragraphs (break into smaller sections)"}),`
`,i.jsx(e.li,{children:"Too many subsections (creates cluttered TOC)"}),`
`,i.jsx(e.li,{children:"Redundant information (link to related notes instead)"}),`
`,i.jsx(e.li,{children:"Tutorial-style step-by-step guides (keep high-level)"}),`
`]}),`
`,i.jsx(e.h3,{children:"Code Examples"}),`
`,i.jsx(e.p,{children:"Use code blocks with language specifiers for syntax highlighting:"}),`
`,i.jsxs(e.figure,{"data-rehype-pretty-code-figure":"",children:[i.jsx(e.figcaption,{"data-rehype-pretty-code-title":"","data-language":"python","data-theme":"github-dark-default dark-plus",children:"Example Code"}),i.jsx(e.pre,{style:{"--shiki-dark":"#e6edf3","--shiki-light":"#D4D4D4","--shiki-dark-bg":"#0d1117","--shiki-light-bg":"#1E1E1E"},tabIndex:"0","data-language":"python","data-theme":"github-dark-default dark-plus",children:i.jsxs(e.code,{"data-language":"python","data-theme":"github-dark-default dark-plus",style:{display:"grid"},children:[i.jsxs(e.span,{"data-line":"",children:[i.jsx(e.span,{style:{"--shiki-dark":"#FF7B72","--shiki-light":"#569CD6"},children:"def"}),i.jsx(e.span,{style:{"--shiki-dark":"#D2A8FF","--shiki-light":"#DCDCAA"},children:" greet"}),i.jsx(e.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:"("}),i.jsx(e.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#9CDCFE"},children:"name"}),i.jsx(e.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:": "}),i.jsx(e.span,{style:{"--shiki-dark":"#79C0FF","--shiki-light":"#4EC9B0"},children:"str"}),i.jsx(e.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:") -> "}),i.jsx(e.span,{style:{"--shiki-dark":"#79C0FF","--shiki-light":"#4EC9B0"},children:"str"}),i.jsx(e.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:":"})]}),`
`,i.jsxs(e.span,{"data-line":"",children:[i.jsx(e.span,{style:{"--shiki-dark":"#FF7B72","--shiki-light":"#C586C0"},children:"    return"}),i.jsx(e.span,{style:{"--shiki-dark":"#FF7B72","--shiki-light":"#569CD6"},children:" f"}),i.jsx(e.span,{style:{"--shiki-dark":"#A5D6FF","--shiki-light":"#CE9178"},children:'"Hello, '}),i.jsx(e.span,{style:{"--shiki-dark":"#FF7B72","--shiki-light":"#569CD6"},children:"{"}),i.jsx(e.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:"name"}),i.jsx(e.span,{style:{"--shiki-dark":"#FF7B72","--shiki-light":"#569CD6"},children:"}"}),i.jsx(e.span,{style:{"--shiki-dark":"#A5D6FF","--shiki-light":"#CE9178"},children:'!"'})]}),`
`,i.jsx(e.span,{"data-line":"",children:" "}),`
`,i.jsxs(e.span,{"data-line":"",children:[i.jsx(e.span,{style:{"--shiki-dark":"#79C0FF","--shiki-light":"#DCDCAA"},children:"print"}),i.jsx(e.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:"(greet("}),i.jsx(e.span,{style:{"--shiki-dark":"#A5D6FF","--shiki-light":"#CE9178"},children:'"World"'}),i.jsx(e.span,{style:{"--shiki-dark":"#E6EDF3","--shiki-light":"#D4D4D4"},children:"))"})]})]})})]}),`
`,i.jsx(e.p,{children:"For plain text or output, omit the language specifier:"}),`
`,i.jsx(e.pre,{children:i.jsx(e.code,{children:`Output:
Hello, World!
`})}),`
`,i.jsx(e.h3,{children:"Tables"}),`
`,i.jsx(e.p,{children:"Use tables for comparisons:"}),`
`,i.jsxs(e.table,{children:[i.jsx(e.thead,{children:i.jsxs(e.tr,{children:[i.jsx(e.th,{children:"Feature"}),i.jsx(e.th,{children:"Option A"}),i.jsx(e.th,{children:"Option B"})]})}),i.jsxs(e.tbody,{children:[i.jsxs(e.tr,{children:[i.jsx(e.td,{children:"Speed"}),i.jsx(e.td,{children:"Fast"}),i.jsx(e.td,{children:"Slow"})]}),i.jsxs(e.tr,{children:[i.jsx(e.td,{children:"Cost"}),i.jsx(e.td,{children:"High"}),i.jsx(e.td,{children:"Low"})]})]})]}),`
`,i.jsx(e.h3,{children:"Links"}),`
`,i.jsxs(e.ul,{children:[`
`,i.jsxs(e.li,{children:[i.jsx(e.strong,{children:"Internal notes"}),": Use ",i.jsx(e.code,{children:"/notes/slug"})," format"]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.strong,{children:"External resources"}),": Use full URLs"]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.strong,{children:"Related notes"}),": Add to ",i.jsx(e.code,{children:"links"})," frontmatter for automatic linking"]}),`
`]}),`
`,i.jsx(e.h2,{children:"Example Note Structure"}),`
`,i.jsxs(e.p,{children:["See existing notes like ",i.jsx(e.code,{children:"http.md"}),", ",i.jsx(e.code,{children:"https.md"}),", or ",i.jsx(e.code,{children:"ssl-tls.md"})," for good examples of concise, well-structured notes."]})]})}function h(s={}){const{wrapper:e}=s.components||{};return e?i.jsx(e,{...s,children:i.jsx(n,{...s})}):n(s)}export{h as default,l as frontmatter};
