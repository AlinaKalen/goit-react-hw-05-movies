"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[776],{26:(e,a,t)=>{t.d(a,{BG:()=>r,IV:()=>o,LI:()=>c,vw:()=>i,wH:()=>n});const s=t(294).Z.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"9ec68717ac0ee3cd927e52637a51d9f9"}}),i=async()=>(await s.get("trending/movie/day")).data.results,c=async e=>(await s.get("/search/movie",{params:{query:e}})).data.results,r=async e=>{try{return(await s.get("/movie/".concat(e),{params:{append_to_response:"casts,reviews"}})).data}catch(a){throw console.error("Error fetching movie by ID:",a.message),a}},o=async e=>(await s.get("/movie/".concat(e,"/casts"))).data,n=async e=>(await s.get("/movie/".concat(e,"/reviews"))).data},830:(e,a,t)=>{t.r(a),t.d(a,{default:()=>d});var s=t(791),i=t(689),c=t(26);const r=t.p+"static/media/picture.a71a6db7ac3d2d556190.jpeg";var o=t(12),n=t(184);const d=()=>{const[e,a]=(0,s.useState)([]),{movieId:t}=(0,i.UO)(),[d,l]=(0,s.useState)(!0);return(0,s.useEffect)((()=>{(async()=>{try{if(t){const e=await(0,c.IV)(t);a(e.cast)}}catch(e){console.error("Error fetching cast:",e.message)}finally{l(!1)}})()}),[t]),(0,n.jsxs)(n.Fragment,{children:[d&&(0,n.jsx)("div",{children:"Loading..."}),!d&&e.length>0&&(0,n.jsx)("div",{className:o.Z.CstContsiner,children:e.map((e=>(0,n.jsx)("ul",{className:o.Z.cst,children:(0,n.jsxs)("li",{className:o.Z.cstlist,children:[(0,n.jsx)("img",{src:e.profile_path?"https://image.tmdb.org/t/p/w200/".concat(e.profile_path):r,alt:e.name,width:"250"}),(0,n.jsxs)("div",{children:[(0,n.jsxs)("p",{className:o.Z.Author,children:["Name: ",e.name]}),(0,n.jsxs)("p",{children:["Character: ",e.character]})]})]})},e.id)))}),!d&&0===e.length&&(0,n.jsx)("p",{children:"No cast information available"})]})}},12:(e,a,t)=>{t.d(a,{Z:()=>s});const s={MovieList:"Movies_MovieList__2lEkh",header:"Movies_header__vz94V",cst:"Movies_cst__xWtN2",CstContsiner:"Movies_CstContsiner__giMxd",cstlist:"Movies_cstlist__Ir+vv",ReviewList:"Movies_ReviewList__BvK3S",Author:"Movies_Author__+argF"}}}]);
//# sourceMappingURL=776.8d266a52.chunk.js.map