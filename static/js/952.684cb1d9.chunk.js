"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[952],{288:function(n,t,r){r.d(t,{Pg:function(){return c},Pt:function(){return s},z5:function(){return u}});var e=r(861),a=r(687),i=r.n(a),o=r(243);o.Z.defaults.baseURL="https://api.themoviedb.org/3/",o.Z.defaults.params={api_key:"af36a8e543b2cdf1ea4b27ac643d9907"};var u=function(){var n=(0,e.Z)(i().mark((function n(){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("trending/movie/day");case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),c=function(){var n=(0,e.Z)(i().mark((function n(t){var r,e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/movie/".concat(t));case 2:return r=n.sent,e=r.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),s=function(){var n=(0,e.Z)(i().mark((function n(t){var r,e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/search/movie",{params:{query:t}});case 2:return r=n.sent,e=r.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},544:function(n,t,r){r.d(t,{W2:function(){return s},WF:function(){return p},dG:function(){return d},xu:function(){return f}});var e,a,i,o,u=r(168),c=r(934),s=c.Z.div(e||(e=(0,u.Z)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, 200px);\n  gap: 16px;\n  justify-content: center;\n"]))),p=c.Z.div(a||(a=(0,u.Z)(["\n  border: 1px solid: #fff;\n  background-color: #fff;\n  border-radius: 8px;\n  transform: scale(1);\n  &:hover {\n    transform: scale(1.05);\n  }\n"]))),f=c.Z.img(i||(i=(0,u.Z)(["\n  border-top-left-radius: 8px;\n  border-top-right-radius: 8px;\n"]))),d=c.Z.h3(o||(o=(0,u.Z)(["\n  padding: 4px;\n  margin: 0px;\n  color: #fff;\n  text-align: center;\n"])))},952:function(n,t,r){r.r(t),r.d(t,{default:function(){return _}});var e,a,i,o,u=r(433),c=r(439),s=r(544),p=r(791),f=r(168),d=r(934),l=r(128),h=(0,d.Z)(l.G4C)(e||(e=(0,f.Z)(["\n  width: 20px;\n  height: 20px;\n  right: 6px;\n  transform: scale(1);\n  &:hover {\n    transform: scale(1.25);\n  }\n"]))),x=d.Z.form(a||(a=(0,f.Z)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  background-color: #fff;\n  border: 1px solid black;\n  margin-bottom: 30px;\n  margin-right: auto;\n  margin-left: auto;\n  overflow: hidden;\n  border-radius: 8px;\n"]))),m=d.Z.button(i||(i=(0,f.Z)(["\n  display: inline-block;\n  height: 20px;\n  padding: 0px 5px;\n  opacity: 0.4;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n  &:hover {\n    opacity: 1;\n  }\n"]))),g=d.Z.input(o||(o=(0,f.Z)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 18px;\n  border: none;\n  outline: none;\n  padding: 4px;\n  border-radius: 4px;\n  &::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n"]))),v=r(184),b=function(n){var t=n.onSubmit,r=(0,p.useState)(""),e=(0,c.Z)(r,2),a=e[0],i=e[1];return(0,v.jsxs)(x,{onSubmit:function(n){n.preventDefault(),t(a),i("")},children:[(0,v.jsx)(g,{type:"text",value:a,onChange:function(n){var t=n.currentTarget.value;i(t)},placeholder:"Search movies..."}),(0,v.jsx)(m,{type:"submit",children:(0,v.jsx)(h,{})})]})},Z=r(288),w=r(87),y=r(689),j=r(968),k=r(596),_=(r(462),function(){var n,t=(0,w.lr)(),r=(0,c.Z)(t,2),e=r[0],a=r[1],i=null!==(n=e.get("name"))&&void 0!==n?n:"",o=(0,p.useState)([]),f=(0,c.Z)(o,2),d=f[0],l=f[1],h=(0,y.TH)();(0,p.useEffect)((function(){(0,Z.Pt)(i).then((function(n){var t=n.results;l((0,u.Z)(t))})).catch((function(){return k.Am.error("Whoops, something went wrong! Please try again later!")}))}),[i]);return(0,v.jsxs)("main",{children:[(0,v.jsx)(b,{onSubmit:function(n){a(""!==n?{name:n}:{}),l([])}}),(0,v.jsxs)(s.W2,{children:[d.map((function(n){var t=n.id,r=n.original_title,e=n.poster_path;return(0,v.jsx)(s.WF,{children:(0,v.jsxs)(w.rU,{state:{from:h},to:"".concat(t),children:[(0,v.jsx)(s.xu,{src:e?"https://image.tmdb.org/t/p/w342/".concat(e):"".concat(j),alt:r}),(0,v.jsx)(s.dG,{children:r})]})},t)})),(0,v.jsx)(p.Suspense,{children:(0,v.jsx)(y.j3,{})})]}),(0,v.jsx)(k.Ix,{})]})})},968:function(n,t,r){n.exports=r.p+"static/media/noImage.1e587cc69dd87187e3e3.png"}}]);
//# sourceMappingURL=952.684cb1d9.chunk.js.map