import{j as e}from"./index-BKgolIEe.js";const i=[{id:"introduction",title:"Introduction",level:2},{id:"attention-mechanism",title:"Attention mechanism",level:2},{id:"architecture-variants",title:"Architecture Variants",level:2},{id:"encoder-only-models",title:"Encoder-Only Models",level:3},{id:"encoder-decoder-models",title:"Encoder-Decoder Models",level:3},{id:"encoder-block",title:"Encoder Block",level:4},{id:"decoder-block",title:"Decoder Block",level:4},{id:"decoder-only-models",title:"Decoder-Only Models",level:3},{id:"additional-notes",title:"Additional Notes",level:2},{id:"add--norm",title:"Add & Norm",level:3}],s={title:"Transformers",links:["cross-encoders"]};function r(t){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"introduction",children:"Introduction"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"Transformer"})," architecture was first proposed in the 2017 paper titled ",e.jsx(n.a,{href:"https://arxiv.org/abs/1706.03762",children:"Attention is All You Need"}),` by Google.\r
They were developed to solve the problem of sequence transduction, which is a machine learning task that involves converting an input sequence into an output sequence.`]}),`
`,e.jsxs(n.p,{children:[`In the past, encoder-decoder architectures relied on mainly Recurrent Neural Networks (RNNs) to extract sequential information.\r
Transformer models instead make use of `,e.jsx(n.strong,{children:"self-attention"})," mechanisms to capture dependencies between different positions in a sequence."]}),`
`,e.jsx(n.p,{children:"The addresses the main problems that RNNs face with respect to NLP tasks:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"RNNs process input data sequentially. Hence, they cannot make use of GPUs for parallel computation, which limits the speed of training and inference."}),`
`,e.jsx(n.li,{children:"RNNs become ineffective when input sequences are long, primarily because of the problem of vanishing and exploding gradients."}),`
`]}),`
`,e.jsx(n.h2,{id:"attention-mechanism",children:"Attention mechanism"}),`
`,e.jsx("div",{class:"video-container",children:e.jsx("iframe",{src:"https://www.youtube.com/embed/eMlx5fFNoYc",title:" Attention in transformers, step-by-step | Deep Learning Chapter 6 ",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen",referrerpolicy:"strict-origin-when-cross-origin",allowfullscreen:!0})}),`
`,e.jsx(n.h2,{id:"architecture-variants",children:"Architecture Variants"}),`
`,e.jsx(n.h3,{id:"encoder-only-models",children:"Encoder-Only Models"}),`
`,e.jsxs(n.p,{children:["Encoder-only models are designed for tasks that require deep ",e.jsx(n.strong,{children:"contextual understanding of the input sequence"}),` without generating an output sequence.\r
They process entire inputs at once, allowing them to build rich `,e.jsx(n.strong,{children:"bi-directional context representations"}),"."]}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"/images/encoder-only_architecture.png",alt:"Encoder-Only Architecture"})}),`
`,e.jsx(n.p,{children:"Within each encoder layer:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Each token is first mapped into a numerical representation (",e.jsx(n.strong,{children:"embedding"}),")."]}),`
`,e.jsxs(n.li,{children:["A ",e.jsx(n.strong,{children:"positional encoding"})," is added to each embedding to provide information about the token's position, since self-attention itself is position-agnostic."]}),`
`,e.jsxs(n.li,{children:["The embeddings are processed through a ",e.jsx(n.strong,{children:"multi-head self-attention layer"}),", where each token can attend to all other tokens in the sequence."]}),`
`,e.jsxs(n.li,{children:["The output is then passed through a ",e.jsx(n.strong,{children:"feed-forward network"})," for additional transformation."]}),`
`]}),`
`,e.jsxs(n.p,{children:[`After stacking multiple encoder layers, the final contextualized embeddings can either be pooled into a single vector (e.g., mean pooling)\r
or represented by a special token (e.g., `,e.jsx(n.code,{children:"[CLS]"}),"), depending on the model’s design and task."]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Modern embedding models such as ",e.jsx(n.code,{children:"gemini-embedding-001"}),` leverage attention mechanisms to produce high-quality vector representations,\r
enabling State-of-the-Art performance on semantic similarity and retrieval tasks.`]}),`
`]}),`
`,e.jsx(n.h3,{id:"encoder-decoder-models",children:"Encoder-Decoder Models"}),`
`,e.jsxs(n.p,{children:[`Encoder-decoder models are designed for tasks that require transformation from one sequence to another.\r
They excel at `,e.jsx(n.strong,{children:"Sequence-to-Sequence"})," tasks such as machine translation, where the input and output sequences are completely different."]}),`
`,e.jsx(n.p,{children:"The architecture consists of two separate blocks."}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"/images/encoder-decoder_architecture.png",alt:"Encoder-Decoder Architecture"})}),`
`,e.jsx(n.h4,{id:"encoder-block",children:"Encoder Block"}),`
`,e.jsxs(n.p,{children:[`The encoder block first processes the entire input sequence and builds a rich, contextualized understanding of it.\r
It takes the token and positional embeddings, processes them through its `,e.jsx(n.strong,{children:"multi-head self-attention layers"}),` to capture the bi-directional context,\r
and produces a final set of contextualized embeddings for the entire input sequence.`]}),`
`,e.jsx(n.p,{children:"Instead of pooling these embeddings into a single vector, they are then passed to the decoder."}),`
`,e.jsx(n.h4,{id:"decoder-block",children:"Decoder Block"}),`
`,e.jsx(n.p,{children:"The decoder generates the output sequence one token at a time, using both its own previously generated tokens and the encoder’s representations as context."}),`
`,e.jsx(n.p,{children:"Within each autoregressive step:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Masked Self-Attention"}),": The decoder attends to its own partial sequence using masked self-attention, ensuring that each position can only depend on previously generated tokens."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Cross-Attention"}),": The decoder's hidden states are used as ",e.jsx(n.code,{children:"Queries"})," to attend over the encoder's ",e.jsx(n.code,{children:"Keys"})," and ",e.jsx(n.code,{children:"Values"}),", focusing on the most relevant parts of the input sequence."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Feed-Forward Network"}),": The output of the cross-attention layer is passed through a feed-forward network for additional transformation."]}),`
`]}),`
`,e.jsx(n.p,{children:`After passing through multiple stacked decoder layers, the final output is projected through a linear layer (the prediction head)\r
and softmax to produce a probability distribution over the vocabulary, from which the next token is selected.`}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["State-of-the-art sequence-to-sequence models such as ",e.jsx(n.code,{children:"T5"})," (Text-to-Text Transfer Transformer) and ",e.jsx(n.code,{children:"mT5"}),` (its multilingual variant)\r
make use of the encoder-decoder architecture. These models treat every NLP task — from translation to summarization — as a text-to-text problem,\r
leveraging both encoder context and decoder generation for highly flexible performance.`]}),`
`]}),`
`,e.jsx(n.h3,{id:"decoder-only-models",children:"Decoder-Only Models"}),`
`,e.jsx(n.p,{children:`Decoder-only models are designed for tasks that require generating text in an autoregressive fashion.\r
They process inputs from left to right, predicting the next token based only on the tokens that have already been generated.\r
This makes them particularly well-suited for tasks such as text completion, dialogue, and creative writing.`}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"/images/decoder-only_architecture.png",alt:"Decoder-Only Architecture"})}),`
`,e.jsx(n.p,{children:"Within each decoder layer, and at each autoregressive step:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Each input token is converted into an ",e.jsx(n.strong,{children:"embedding"}),", with ",e.jsx(n.strong,{children:"positional encoding"})," added to preserve word order."]}),`
`,e.jsxs(n.li,{children:["The embeddings are processed through a ",e.jsx(n.strong,{children:"masked multi-head self-attention layer"}),", where each token can only attend to previous tokens in the sequence."]}),`
`,e.jsxs(n.li,{children:["The output is then passed through a ",e.jsx(n.strong,{children:"feed-forward network"})," for additional transformation."]}),`
`,e.jsx(n.li,{children:"After stacking multiple decoder layers, the final hidden states are projected into the vocabulary space, softmax is applied, and the next token is predicted."}),`
`,e.jsx(n.li,{children:"The predicted token is appended to the sequence, and the process repeats until an end condition is reached (e.g., end-of-sequence token or max length)."}),`
`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Modern large language models such as ",e.jsx(n.code,{children:"gpt-4"})," are decoder-only architectures that excel at open-ended generation tasks, including conversation, reasoning, and content creation."]}),`
`]}),`
`,e.jsx(n.h2,{id:"additional-notes",children:"Additional Notes"}),`
`,e.jsx(n.h3,{id:"add--norm",children:"Add & Norm"}),`
`,e.jsxs(n.p,{children:["Add & Norm refers to ",e.jsx(n.strong,{children:"Residual Connection followed by Layer Normalization"}),`.\r
Together, they ensure that each layer can always fall back on its input (residual connection) while keeping activations stable and trainable (normalization).`]})]})}function d(t={}){const{wrapper:n}=t.components||{};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}export{d as default,s as frontmatter,i as toc};
