import{j as n}from"./index-CtAT4ExP.js";const r={title:"Game Contributions Extractor",description:"A guild contributions extractor project that uses PaddleOCR to extract game contributions from Maplestory screenshots and fuzzy string matching to match incomplete IGNs. Images were segmented through the analysis of pixel variances.",date:"2023-07-01",tags:["Python","PaddleOCR","Fuzzy String Matching"],status:"completed",featured:!0,order:3};function s(i){const e={h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Game Contributions Extractor"}),`
`,n.jsx(e.p,{children:"An automated tool for extracting and processing guild contribution data from Maplestory game screenshots using computer vision and OCR technology."}),`
`,n.jsx(e.h2,{children:"Problem Statement"}),`
`,n.jsx(e.p,{children:"Guild leaders in Maplestory needed an efficient way to track member contributions from in-game screenshots. Manual data entry was time-consuming and error-prone, especially with:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Varying screenshot quality"}),`
`,n.jsx(e.li,{children:"Incomplete or partially visible player names (IGNs)"}),`
`,n.jsx(e.li,{children:"Different UI layouts and resolutions"}),`
`]}),`
`,n.jsx(e.h2,{children:"Solution"}),`
`,n.jsx(e.p,{children:"This project implements an automated pipeline that:"}),`
`,n.jsx(e.h3,{children:"1. Image Segmentation"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Analyzes pixel variance patterns to identify contribution rows"}),`
`,n.jsx(e.li,{children:"Handles different screenshot resolutions and UI scales"}),`
`,n.jsx(e.li,{children:"Robust to varying lighting and color schemes"}),`
`]}),`
`,n.jsx(e.h3,{children:"2. OCR Processing"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Uses ",n.jsx(e.strong,{children:"PaddleOCR"})," for text extraction"]}),`
`,n.jsx(e.li,{children:"Optimized for game UI fonts and styling"}),`
`,n.jsx(e.li,{children:"Handles both English and special characters in player names"}),`
`]}),`
`,n.jsx(e.h3,{children:"3. Fuzzy Matching"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Implements fuzzy string matching algorithms to handle:",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Partially visible IGNs"}),`
`,n.jsx(e.li,{children:"OCR errors and misrecognitions"}),`
`,n.jsx(e.li,{children:"Name variations and special characters"}),`
`]}),`
`]}),`
`,n.jsx(e.li,{children:"Matches extracted names against known guild member roster"}),`
`]}),`
`,n.jsx(e.h2,{children:"Technical Stack"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Python"}),": Core implementation language"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"PaddleOCR"}),": State-of-the-art OCR engine"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"OpenCV"}),": Image preprocessing and segmentation"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"FuzzyWuzzy/RapidFuzz"}),": String similarity matching"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"NumPy"}),": Numerical operations for pixel analysis"]}),`
`]}),`
`,n.jsx(e.h2,{children:"Key Achievements"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Successfully processed hundreds of contribution screenshots"}),`
`,n.jsx(e.li,{children:"Achieved >95% accuracy in contribution extraction"}),`
`,n.jsx(e.li,{children:"Reduced manual data entry time by ~90%"}),`
`,n.jsx(e.li,{children:"Handled edge cases like overlapping text and UI elements"}),`
`]}),`
`,n.jsx(e.h2,{children:"Challenges Overcome"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Variable Image Quality"}),": Implemented adaptive preprocessing"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Incomplete Text"}),": Developed robust fuzzy matching with confidence scores"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"UI Variations"}),": Created flexible segmentation based on pixel patterns"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Performance"}),": Optimized for batch processing of multiple screenshots"]}),`
`]}),`
`,n.jsx(e.h2,{children:"Impact"}),`
`,n.jsx(e.p,{children:"This tool significantly improved guild management efficiency, allowing leaders to:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Quickly track member activity"}),`
`,n.jsx(e.li,{children:"Identify inactive members"}),`
`,n.jsx(e.li,{children:"Reward top contributors"}),`
`,n.jsx(e.li,{children:"Make data-driven decisions about guild operations"}),`
`]})]})}function l(i={}){const{wrapper:e}=i.components||{};return e?n.jsx(e,{...i,children:n.jsx(s,{...i})}):s(i)}export{l as default,r as frontmatter};
