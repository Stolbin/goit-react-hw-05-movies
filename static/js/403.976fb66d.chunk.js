"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[403],{288:function(n,e,r){r.d(e,{Pg:function(){return p},Pt:function(){return f},z5:function(){return s}});var t=r(5861),a=r(4687),i=r.n(a),u=r(2007),o=r(1243),c="af36a8e543b2cdf1ea4b27ac643d9907";o.Z.defaults.baseURL="https://api.themoviedb.org/3/",o.Z.defaults.params={api_key:c};var s=function(){var n=(0,t.Z)(i().mark((function n(){var e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("trending/movie/day?api_key=".concat(c));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,t.Z)(i().mark((function n(e){var r,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/movie/".concat(e,"?api_key=").concat(c,"&language=en-US"));case 2:return r=n.sent,t=r.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,t.Z)(i().mark((function n(e){var r,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("search/movie?api_key=".concat(c,"&language=en-US&query=").concat(e,"&page=1&include_adult=false"),{params:{query:e}});case 2:return r=n.sent,t=r.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();s.propTypes={query:u.PropTypes.string.isRequired},p.propTypes={id:u.PropTypes.number.isRequired},f.propTypes={query:u.PropTypes.number.isRequired}},1544:function(n,e,r){r.d(e,{W2:function(){return s},WF:function(){return p},dG:function(){return d},xu:function(){return f}});var t,a,i,u,o=r(168),c=r(7402),s=c.Z.div(t||(t=(0,o.Z)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, 200px);\n  gap: 16px;\n  justify-content: center;\n"]))),p=c.Z.div(a||(a=(0,o.Z)(["\n  border: 1px solid: #fff;\n  background-color: #fff;\n  border-radius: 8px;\n  transform: scale(1);\n  &:hover {\n    transform: scale(1.05);\n  }\n"]))),f=c.Z.img(i||(i=(0,o.Z)(["\n  border-top-left-radius: 8px;\n  border-top-right-radius: 8px;\n"]))),d=c.Z.h3(u||(u=(0,o.Z)(["\n  padding: 4px;\n  margin: 0px;\n  color: #fff;\n  text-align: center;\n"])))},7403:function(n,e,r){r.r(e),r.d(e,{default:function(){return k}});var t,a=r(3433),i=r(9439),u=r(1087),o=r(7689),c=r(1544),s=r(3968),p=r(184),f=function(n){var e=n.movies,r=(0,o.TH)();return(0,p.jsx)(c.W2,{children:e.map((function(n){var e=n.id,t=n.original_title,a=n.poster_path;return(0,p.jsx)(c.WF,{children:(0,p.jsxs)(u.rU,{state:{from:r},to:"movies/".concat(e),children:[(0,p.jsx)(c.xu,{src:a?"https://image.tmdb.org/t/p/w342/".concat(a):"".concat(s),alt:t}),(0,p.jsx)(c.dG,{children:t})]})},e)}))})},d=r(288),l=r(5671),h=r(3144),v=r(136),g=r(516),m=r(2791),x=r(8966),Z=r(168),y=r(7402).Z.div(t||(t=(0,Z.Z)(["\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  opacity: 0.9;\n"]))),b=function(n){(0,v.Z)(r,n);var e=(0,g.Z)(r);function r(){return(0,l.Z)(this,r),e.apply(this,arguments)}return(0,h.Z)(r,[{key:"render",value:function(){return(0,p.jsx)(y,{children:(0,p.jsx)(x.Z1,{height:"150",width:"150",color:"#ffa500",visible:!0,ariaLabel:"three-circles-rotating"})})}}]),r}(m.Component),_=b,k=function(){var n=(0,m.useState)([]),e=(0,i.Z)(n,2),r=e[0],t=e[1],u=(0,m.useState)(!1),o=(0,i.Z)(u,2),c=o[0],s=o[1];return(0,m.useEffect)((function(){s(!0),(0,d.z5)().then((function(n){var e=n.results;t((0,a.Z)(e)),s(!1)}))}),[]),(0,p.jsxs)("main",{children:[(0,p.jsx)("h1",{children:"Trending today"}),c&&(0,p.jsx)(_,{}),(0,p.jsx)(f,{movies:r})]})}},3968:function(n,e,r){n.exports=r.p+"static/media/noImage.1e587cc69dd87187e3e3.png"}}]);
//# sourceMappingURL=403.976fb66d.chunk.js.map