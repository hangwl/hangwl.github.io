import{c as g,r as u,j as i}from"./index-5JzVxkyC.js";/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],y=g("check",f);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}]],v=g("clipboard",b);function j(){const[d,p]=u.useState([]);return u.useEffect(()=>{const c=()=>{const r=document.querySelectorAll("article h1, article h2, article h3, article h4, article h5, article h6"),o=[];r.forEach(e=>{const x=parseInt(e.tagName.charAt(1)),h=e.textContent||"";let t=e.id;if(!t){t=h.toLowerCase().replace(/[^a-z0-9\s-]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-").replace(/^-|-$/g,"");let m=1,l=t;for(;document.getElementById(l);)l=`${t}-${m}`,m++;e.id=l,t=l}o.push({id:t,title:h,level:x})}),p(o)},a=setTimeout(c,100),s=new MutationObserver(c),n=document.querySelector("article");return n&&s.observe(n,{childList:!0,subtree:!0}),()=>{clearTimeout(a),s.disconnect()}},[]),d}function k({children:d,...p}){const[c,a]=u.useState(!1),s=u.useRef(null),n=async()=>{var e;const r=(e=s.current)==null?void 0:e.querySelector("code"),o=(r==null?void 0:r.innerText)||"";o&&(await navigator.clipboard.writeText(o),a(!0),setTimeout(()=>{a(!1)},3e3))};return i.jsxs("div",{className:"relative group",children:[i.jsx("button",{disabled:c,onClick:n,className:"absolute top-2 right-2 z-10 p-1 rounded-md bg-zinc-800/50 text-zinc-400 opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity disabled:opacity-100",children:c?i.jsx(y,{size:20,className:"text-green-500"}):i.jsx(v,{size:20})}),i.jsx("pre",{ref:s,...p,children:d})]})}export{k as P,j as u};
