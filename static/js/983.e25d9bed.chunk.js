"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[983],{26:(e,a,t)=>{t.d(a,{BG:()=>o,IV:()=>i,LI:()=>r,vw:()=>c,wH:()=>n});const s=t(294).Z.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"9ec68717ac0ee3cd927e52637a51d9f9"}}),c=async()=>(await s.get("trending/movie/day")).data.results,r=async e=>(await s.get("/search/movie",{params:{query:e}})).data.results,o=async e=>{try{return(await s.get("/movie/".concat(e),{params:{append_to_response:"cast,reviews"}})).data}catch(a){throw console.error("Error fetching movie by ID:",a.message),a}},i=async e=>(await s.get("/movie/".concat(e,"/cast"))).data,n=async e=>(await s.get("/movie/".concat(e,"/reviews"))).data},429:(e,a,t)=>{t.d(a,{Z:()=>r});t(791);var s=t(87),c=t(184);const r=e=>{let{location:a,movies:t,to:r}=e;return(0,c.jsx)("ul",{children:null===t||void 0===t?void 0:t.map((e=>{let{id:t,original_title:o}=e;return(0,c.jsx)("li",{children:(0,c.jsx)(s.rU,{to:"".concat(r).concat(t),state:{from:a},children:o})},t)}))})}},983:(e,a,t)=>{t.r(a),t.d(a,{default:()=>n});var s=t(429),c=t(791),r=t(689),o=t(26),i=t(184);const n=()=>{const[e,a]=(0,c.useState)([]),t=(0,r.TH)();return(0,c.useEffect)((()=>{(async()=>{const e=await(0,o.vw)();a(e)})()}),[]),(0,i.jsxs)(c.Suspense,{fallback:(0,i.jsx)("div",{children:"Loading..."}),children:[(0,i.jsx)("h1",{children:" Trending movies"}),(0,i.jsx)(s.Z,{to:"movies/",location:t,movies:e})]})}}}]);
//# sourceMappingURL=983.e25d9bed.chunk.js.map