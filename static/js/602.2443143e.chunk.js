"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[602],{26:(e,t,a)=>{a.d(t,{BG:()=>c,IV:()=>n,LI:()=>i,vw:()=>r,wH:()=>o});const s=a(294).Z.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"9ec68717ac0ee3cd927e52637a51d9f9"}}),r=async()=>(await s.get("trending/movie/day")).data.results,i=async e=>(await s.get("/search/movie",{params:{query:e}})).data.results,c=async e=>{try{return(await s.get("/movie/".concat(e),{params:{append_to_response:"cast,reviews"}})).data}catch(t){throw console.error("Error fetching movie by ID:",t.message),t}},n=async e=>(await s.get("/movie/".concat(e,"/cast"))).data,o=async e=>(await s.get("/movie/".concat(e,"/reviews"))).data},602:(e,t,a)=>{a.r(t),a.d(t,{default:()=>o});var s=a(791),r=a(689),i=a(87),c=a(26),n=a(184);const o=()=>{var e;const{movieId:t}=(0,r.UO)(),[a,o]=(0,s.useState)({}),[l,d]=(0,s.useState)(""),[h,m]=(0,s.useState)(!0),v=(0,r.TH)();return(0,s.useEffect)((()=>{var e;null!==(e=v.state)&&void 0!==e&&e.from&&d(v.state.from)}),[v.state]),(0,s.useEffect)((()=>{console.log("Movie ID:",t);(async()=>{try{if(t){const e=await(0,c.BG)(t);o(e)}}catch(e){console.error("Error fetching movie by ID:",e.message)}finally{m(!1)}})()}),[t]),(0,n.jsxs)(n.Fragment,{children:[h&&(0,n.jsx)("div",{children:"Loading..."}),!h&&a.title&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.rU,{to:l||"/",children:"< Go back"}),(0,n.jsxs)("div",{style:{display:"flex"},children:[(0,n.jsx)("img",{src:"https://image.tmdb.org/t/p/w200/".concat(a.poster_path),alt:a.title,style:{marginRight:30}}),(0,n.jsxs)("div",{children:[(0,n.jsx)("h3",{children:a.title}),(0,n.jsxs)("p",{children:["User Score: ",parseInt(a.popularity)]}),(0,n.jsx)("h3",{children:"Overview"}),(0,n.jsx)("p",{children:a.overview}),(0,n.jsx)("h3",{children:"Genres"}),(0,n.jsx)("p",{children:null===(e=a.genres)||void 0===e?void 0:e.map((e=>e.name)).join(", ")})]})]}),(0,n.jsx)("hr",{}),(0,n.jsxs)("div",{children:[(0,n.jsx)("h3",{children:"Additional information"}),(0,n.jsx)(i.rU,{to:"/movies/".concat(t,"/cast"),style:{marginRight:15},children:"Cast"}),(0,n.jsx)(i.rU,{to:"/movies/".concat(t,"/reviews"),children:"Reviews"})]}),(0,n.jsx)("div",{style:{margin:"15px 0"},children:(0,n.jsx)(r.j3,{})})]})]})}}}]);
//# sourceMappingURL=602.2443143e.chunk.js.map