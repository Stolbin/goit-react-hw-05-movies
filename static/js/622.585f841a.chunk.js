"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[622],{288:function(e,t,r){r.d(t,{Pg:function(){return c},Pt:function(){return u},z5:function(){return o}});var n=r(5861),i=r(4687),a=r.n(i),s=r(1243);s.Z.defaults.baseURL="https://api.themoviedb.org/3/",s.Z.defaults.params={api_key:"af36a8e543b2cdf1ea4b27ac643d9907"};var o=function(){var e=(0,n.Z)(a().mark((function e(){var t,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("trending/movie/day");case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),c=function(){var e=(0,n.Z)(a().mark((function e(t){var r,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/movie/".concat(t));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=(0,n.Z)(a().mark((function e(t){var r,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/search/movie",{params:{query:t}});case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},8622:function(e,t,r){r.r(t),r.d(t,{default:function(){return C}});var n,i,a,s,o,c,u,d,l=r(7689),v=r(1989),p=r(168),h=r(7402),f=r(1087),m=h.Z.section(n||(n=(0,p.Z)([""]))),x=(0,h.Z)(f.OL)(i||(i=(0,p.Z)([""]))),g=h.Z.img(a||(a=(0,p.Z)([""]))),Z=h.Z.div(s||(s=(0,p.Z)([""]))),j=h.Z.ul(o||(o=(0,p.Z)([""]))),_=h.Z.p(c||(c=(0,p.Z)([""]))),w=h.Z.li(u||(u=(0,p.Z)([""]))),b=(0,h.Z)(f.OL)(d||(d=(0,p.Z)([""]))),k=r(288),y=r(2791),G=r(3968),O=r(7596),P=(r(5462),r(184)),C=function(){var e,t,r,n,i=(0,l.UO)().movieId,a=(0,y.useState)({}),s=a.movie,o=a.setMovie,c=(0,l.TH)(),u=null!==(e=null===c||void 0===c||null===(t=c.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/",d=s.id,p=s.poster_path,h=s.original_title,f=s.overview,C=s.release_date,I=s.vote_average,L=s.genres;return(0,y.useEffect)((function(){(0,k.Pg)(i).then((function(e){var t=e.id,r=e.poster_path,n=e.original_title,i=e.overview,a=e.release_date,s=e.vote_average,c=e.genres;o({id:t,poster_path:r,original_title:n,overview:i,release_date:a,vote_average:s,genres:c})})).catch((function(){return O.Am.error("Whoops, something went wrong! Please try again later!")}))}),[i,o]),(0,P.jsxs)("main",{children:[(0,P.jsx)(x,{to:u,children:"Go back"}),(0,P.jsxs)(m,{children:[(0,P.jsx)(g,{src:p?"https://image.tmdb.org/t/p/w342/".concat(p):"".concat(G),alt:h}),(0,P.jsxs)(Z,{children:[(0,P.jsxs)("h2",{children:[h," (",new Date(C).getFullYear(),")"]}),(0,P.jsxs)("p",{children:["User scores: ",Math.ceil(10*I),"%"]}),(0,P.jsx)("h3",{children:"Overview"}),(0,P.jsx)("p",{children:f}),(0,P.jsx)("h4",{children:"Genres"}),(0,P.jsx)("p",{children:null===L||void 0===L?void 0:L.map((function(e){return e.name})).join(", ")})]})]}),(0,P.jsxs)(j,{children:[(0,P.jsx)(_,{children:"Additional information"}),(0,P.jsx)(w,{children:(0,P.jsx)(b,{state:{from:null===c||void 0===c||null===(r=c.state)||void 0===r?void 0:r.from},to:(0,v.Gn)("cast",{id:d}),children:"Cast"})}),(0,P.jsx)(w,{children:(0,P.jsx)(b,{state:{from:null===c||void 0===c||null===(n=c.state)||void 0===n?void 0:n.from},to:(0,v.Gn)("reviews",{id:d}),children:"Reviews"})})]}),(0,P.jsx)(y.Suspense,{children:(0,P.jsx)(l.j3,{})}),(0,P.jsx)(O.Ix,{})]})}},3968:function(e,t,r){e.exports=r.p+"static/media/noImage.1e587cc69dd87187e3e3.png"}}]);
//# sourceMappingURL=622.585f841a.chunk.js.map