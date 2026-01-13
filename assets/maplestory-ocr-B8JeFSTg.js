import{j as e}from"./index-895OKoX5.js";const l=[{id:"game-contributions-extractor",title:"Game Contributions Extractor",level:1},{id:"problem-statement",title:"Problem Statement",level:2},{id:"solution",title:"Solution",level:2},{id:"1-image-segmentation",title:"1. Image Segmentation",level:3},{id:"2-ocr-processing",title:"2. OCR Processing",level:3},{id:"3-fuzzy-matching",title:"3. Fuzzy Matching",level:3},{id:"technical-stack",title:"Technical Stack",level:2},{id:"key-achievements",title:"Key Achievements",level:2},{id:"challenges-overcome",title:"Challenges Overcome",level:2},{id:"impact",title:"Impact",level:2}],r={title:"Game Contributions Extractor",description:"A guild contributions extractor project that uses PaddleOCR to extract game contributions from Maplestory screenshots and fuzzy string matching to match incomplete IGNs. Images were segmented through the analysis of pixel variances.",date:"2023-07-01",tags:["Python","PaddleOCR","Fuzzy String Matching"],status:"completed",featured:!0,order:3};function t(i){const n={h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"game-contributions-extractor",children:"Game Contributions Extractor"}),`
`,e.jsx(n.p,{children:"An automated tool for extracting and processing guild contribution data from Maplestory game screenshots using computer vision and OCR technology."}),`
`,e.jsx(n.h2,{id:"problem-statement",children:"Problem Statement"}),`
`,e.jsx(n.p,{children:"Guild leaders in Maplestory needed an efficient way to track member contributions from in-game screenshots. Manual data entry was time-consuming and error-prone, especially with:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Varying screenshot quality"}),`
`,e.jsx(n.li,{children:"Incomplete or partially visible player names (IGNs)"}),`
`,e.jsx(n.li,{children:"Different UI layouts and resolutions"}),`
`]}),`
`,e.jsx(n.h2,{id:"solution",children:"Solution"}),`
`,e.jsx(n.p,{children:"This project implements an automated pipeline that:"}),`
`,e.jsx(n.h3,{id:"1-image-segmentation",children:"1. Image Segmentation"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Analyzes pixel variance patterns to identify contribution rows"}),`
`,e.jsx(n.li,{children:"Handles different screenshot resolutions and UI scales"}),`
`,e.jsx(n.li,{children:"Robust to varying lighting and color schemes"}),`
`]}),`
`,e.jsx(n.h3,{id:"2-ocr-processing",children:"2. OCR Processing"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Uses ",e.jsx(n.strong,{children:"PaddleOCR"})," for text extraction"]}),`
`,e.jsx(n.li,{children:"Optimized for game UI fonts and styling"}),`
`,e.jsx(n.li,{children:"Handles both English and special characters in player names"}),`
`]}),`
`,e.jsx(n.h3,{id:"3-fuzzy-matching",children:"3. Fuzzy Matching"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Implements fuzzy string matching algorithms to handle:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Partially visible IGNs"}),`
`,e.jsx(n.li,{children:"OCR errors and misrecognitions"}),`
`,e.jsx(n.li,{children:"Name variations and special characters"}),`
`]}),`
`]}),`
`,e.jsx(n.li,{children:"Matches extracted names against known guild member roster"}),`
`]}),`
`,e.jsx(n.h2,{id:"technical-stack",children:"Technical Stack"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Python"}),": Core implementation language"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"PaddleOCR"}),": State-of-the-art OCR engine"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"OpenCV"}),": Image preprocessing and segmentation"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"FuzzyWuzzy/RapidFuzz"}),": String similarity matching"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"NumPy"}),": Numerical operations for pixel analysis"]}),`
`]}),`
`,e.jsx(n.h2,{id:"key-achievements",children:"Key Achievements"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Successfully processed hundreds of contribution screenshots"}),`
`,e.jsx(n.li,{children:"Achieved >95% accuracy in contribution extraction"}),`
`,e.jsx(n.li,{children:"Reduced manual data entry time by ~90%"}),`
`,e.jsx(n.li,{children:"Handled edge cases like overlapping text and UI elements"}),`
`]}),`
`,e.jsx(n.h2,{id:"challenges-overcome",children:"Challenges Overcome"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Variable Image Quality"}),": Implemented adaptive preprocessing"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Incomplete Text"}),": Developed robust fuzzy matching with confidence scores"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"UI Variations"}),": Created flexible segmentation based on pixel patterns"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Performance"}),": Optimized for batch processing of multiple screenshots"]}),`
`]}),`
`,e.jsx(n.h2,{id:"impact",children:"Impact"}),`
`,e.jsx(n.p,{children:"This tool significantly improved guild management efficiency, allowing leaders to:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Quickly track member activity"}),`
`,e.jsx(n.li,{children:"Identify inactive members"}),`
`,e.jsx(n.li,{children:"Reward top contributors"}),`
`,e.jsx(n.li,{children:"Make data-driven decisions about guild operations"}),`
`]})]})}function a(i={}){const{wrapper:n}=i.components||{};return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}export{a as default,r as frontmatter,l as toc};
