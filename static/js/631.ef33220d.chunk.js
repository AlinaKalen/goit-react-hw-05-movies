"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[631],{26:(e,a,t)=>{t.d(a,{BG:()=>i,IV:()=>n,LI:()=>c,vw:()=>r,wH:()=>o});const s=t(294).Z.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"9ec68717ac0ee3cd927e52637a51d9f9"}}),r=async()=>(await s.get("trending/movie/day")).data.results,c=async e=>(await s.get("/search/movie",{params:{query:e}})).data.results,i=async e=>{try{return(await s.get("/movie/".concat(e),{params:{append_to_response:"credits,reviews"}})).data}catch(a){throw console.error("Error fetching movie by ID:",a.message),a}},n=async e=>(await s.get("/movie/".concat(e,"/credits"))).data,o=async e=>(await s.get("/movie/".concat(e,"/reviews"))).data},631:(e,a,t)=>{t.r(a),t.d(a,{default:()=>n});var s=t(791),r=t(689),c=t(26),i=t(184);const n=()=>{const[e,a]=(0,s.useState)([]),{movieId:t}=(0,r.UO)(),[n,o]=(0,s.useState)(!0);return(0,s.useEffect)((()=>{(async()=>{try{const e=await(0,c.IV)(t);a(e.cast)}catch(e){console.error("Error fetching cast:",e.message)}finally{o(!1)}})()}),[t]),(0,i.jsxs)(i.Fragment,{children:[n&&(0,i.jsx)("div",{children:"Loading..."}),!n&&e.length>0&&(0,i.jsx)(i.Fragment,{children:e.map((e=>(0,i.jsx)("ul",{children:(0,i.jsxs)("li",{className:"",children:[(0,i.jsx)("img",{src:"https://image.tmdb.org/t/p/w200/".concat(e.profile_path),alt:e.name,width:"70",height:"100"}),(0,i.jsxs)("div",{style:{marginLeft:15},children:[(0,i.jsxs)("p",{children:["Name: ",e.name]}),(0,i.jsxs)("p",{children:["Character: ",e.character]})]})]})},e.id)))}),!n&&0===e.length&&(0,i.jsx)("p",{children:"No cast information available"})]})}}}]);
//# sourceMappingURL=631.ef33220d.chunk.js.map