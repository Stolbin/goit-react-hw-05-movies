"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[982],{288:function(n,r,t){t.d(r,{Pg:function(){return p},Pt:function(){return f},z5:function(){return c}});var e=t(5861),a=t(4687),i=t.n(a),o=t(2007),s=t(1243),u="af36a8e543b2cdf1ea4b27ac643d9907";s.Z.defaults.baseURL="https://api.themoviedb.org/3/",s.Z.defaults.params={api_key:u};var c=function(){var n=(0,e.Z)(i().mark((function n(){var r,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.Z.get("trending/movie/day?api_key=".concat(u));case 2:return r=n.sent,t=r.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(i().mark((function n(r){var t,e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.Z.get("/movie/".concat(r,"?api_key=").concat(u));case 2:return t=n.sent,e=t.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(i().mark((function n(r){var t,e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.Z.get("search/movie?api_key=".concat(u),{params:{query:r}});case 2:return t=n.sent,e=t.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}();c.propTypes={query:o.PropTypes.string.isRequired},p.propTypes={id:o.PropTypes.number.isRequired},f.propTypes={query:o.PropTypes.number.isRequired}},1544:function(n,r,t){t.d(r,{W2:function(){return c},WF:function(){return p},dG:function(){return d},xu:function(){return f}});var e,a,i,o,s=t(168),u=t(5397),c=u.Z.div(e||(e=(0,s.Z)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, 200px);\n  gap: 16px;\n  justify-content: center;\n"]))),p=u.Z.div(a||(a=(0,s.Z)(["\n  border: 1px solid: #fff;\n  background-color: #fff;\n  border-radius: 8px;\n  transform: scale(1);\n  box-shadow: 3px 3px 5px #696969;\n  vertical-align: middle;\n    transition: transform 450ms cubic-bezier(0, 0.110, 0.35, 2);\n  &:hover {\n    transform: scale(1.02);\n    transition: transform  450ms cubic-bezier(0, 0.110, 0.35, 2);\n  }\n"]))),f=u.Z.img(i||(i=(0,s.Z)(["\n  border-top-left-radius: 8px;\n  border-top-right-radius: 8px;\n"]))),d=u.Z.h3(o||(o=(0,s.Z)(["\n  padding: 4px;\n  margin: 0px;\n  color: black;\n  text-align: center;\n"])))},9982:function(n,r,t){t.r(r),t.d(r,{default:function(){return T}});var e,a,i=t(3433),o=t(9439),s=t(1087),u=t(7689),c=t(1544),p=t(3968),f=t(184),d=function(n){var r=n.movies,t=(0,u.TH)();return(0,f.jsx)(c.W2,{children:r.map((function(n){var r=n.id,e=n.title,a=n.poster_path;return(0,f.jsx)(c.WF,{children:(0,f.jsxs)(s.rU,{state:{from:t},to:"movies/".concat(r),children:[(0,f.jsx)(c.xu,{src:a?"https://image.tmdb.org/t/p/w342/".concat(a):"".concat(p),alt:e}),(0,f.jsx)(c.dG,{children:e})]})},r)}))})},l=t(288),m=t(2791),h=t(5671),v=t(3144),x=t(136),Z=t(516),g=t(8966),b=t(168),y=t(5397),k=y.Z.div(e||(e=(0,b.Z)(["\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  opacity: 0.9;\n"]))),w=function(n){(0,x.Z)(t,n);var r=(0,Z.Z)(t);function t(){return(0,h.Z)(this,t),r.apply(this,arguments)}return(0,v.Z)(t,[{key:"render",value:function(){return(0,f.jsx)(k,{children:(0,f.jsx)(g.Z1,{height:"150",width:"150",color:"#ffa500",visible:!0,ariaLabel:"three-circles-rotating"})})}}]),t}(m.Component),_=w,j=y.Z.h1(a||(a=(0,b.Z)(['\n  font-family: "Alkatra", cursive;\n  font-size: 40px;\n  font-weight: 600;\n']))),T=function(){var n=(0,m.useState)([]),r=(0,o.Z)(n,2),t=r[0],e=r[1],a=(0,m.useState)(!1),s=(0,o.Z)(a,2),u=s[0],c=s[1];return(0,m.useEffect)((function(){c(!0),(0,l.z5)().then((function(n){var r=n.results;e((0,i.Z)(r)),c(!1)}))}),[]),(0,f.jsxs)("main",{children:[(0,f.jsx)(j,{children:"Trending today"}),u&&(0,f.jsx)(_,{}),(0,f.jsx)(d,{movies:t})]})}},3968:function(n,r,t){n.exports=t.p+"static/media/noImage.1e587cc69dd87187e3e3.png"}}]);
//# sourceMappingURL=982.0b4e63d7.chunk.js.map