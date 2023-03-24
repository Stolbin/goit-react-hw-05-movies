"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[167],{288:function(n,r,t){t.d(r,{Pg:function(){return p},Pt:function(){return f},z5:function(){return s}});var e=t(5861),a=t(4687),i=t.n(a),o=t(2007),u=t(1243),c="af36a8e543b2cdf1ea4b27ac643d9907";u.Z.defaults.baseURL="https://api.themoviedb.org/3/",u.Z.defaults.params={api_key:c};var s=function(){var n=(0,e.Z)(i().mark((function n(){var r,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("trending/movie/day?api_key=".concat(c));case 2:return r=n.sent,t=r.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(i().mark((function n(r){var t,e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(r,"?api_key=").concat(c));case 2:return t=n.sent,e=t.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(i().mark((function n(r){var t,e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("search/movie?api_key=".concat(c),{params:{query:r}});case 2:return t=n.sent,e=t.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}();s.propTypes={query:o.PropTypes.string.isRequired},p.propTypes={id:o.PropTypes.number.isRequired},f.propTypes={query:o.PropTypes.number.isRequired}},9044:function(n,r,t){t.d(r,{Z:function(){return m}});var e,a=t(5671),i=t(3144),o=t(136),u=t(516),c=t(2791),s=t(8966),p=t(168),f=t(5397).Z.div(e||(e=(0,p.Z)(["\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  opacity: 0.9;\n"]))),d=t(184),l=function(n){(0,o.Z)(t,n);var r=(0,u.Z)(t);function t(){return(0,a.Z)(this,t),r.apply(this,arguments)}return(0,i.Z)(t,[{key:"render",value:function(){return(0,d.jsx)(f,{children:(0,d.jsx)(s.Z1,{height:"120",width:"120",color:"#800000",visible:!0,ariaLabel:"three-circles-rotating"})})}}]),t}(c.Component),m=l},1544:function(n,r,t){t.d(r,{W2:function(){return s},WF:function(){return p},dG:function(){return d},xu:function(){return f}});var e,a,i,o,u=t(168),c=t(5397),s=c.Z.div(e||(e=(0,u.Z)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, 200px);\n  gap: 16px;\n  justify-content: center;\n"]))),p=c.Z.div(a||(a=(0,u.Z)(["\n  border: 1px solid: #fff;\n  background-color: #fff;\n  border-radius: 8px;\n  transform: scale(1);\n  box-shadow: 3px 3px 5px #696969;\n  vertical-align: middle;\n    transition: transform 450ms cubic-bezier(0, 0.110, 0.35, 2);\n  &:hover {\n    transform: scale(1.02);\n    transition: transform  450ms cubic-bezier(0, 0.110, 0.35, 2);\n  }\n"]))),f=c.Z.img(i||(i=(0,u.Z)(["\n  border-top-left-radius: 8px;\n  border-top-right-radius: 8px;\n"]))),d=c.Z.h3(o||(o=(0,u.Z)(["\n  padding: 4px;\n  margin: 0px;\n  color: black;\n  text-align: center;\n"])))},4167:function(n,r,t){t.r(r),t.d(r,{default:function(){return x}});var e,a=t(3433),i=t(9439),o=t(1087),u=t(7689),c=t(1544),s=t(3968),p=t(184),f=function(n){var r=n.movies,t=(0,u.TH)();return(0,p.jsx)(c.W2,{children:r.map((function(n){var r=n.id,e=n.title,a=n.poster_path;return(0,p.jsx)(c.WF,{children:(0,p.jsxs)(o.rU,{state:{from:t},to:"movies/".concat(r),children:[(0,p.jsx)(c.xu,{src:a?"https://image.tmdb.org/t/p/w342/".concat(a):"".concat(s),alt:e}),(0,p.jsx)(c.dG,{children:e})]})},r)}))})},d=t(288),l=t(2791),m=t(9044),h=t(168),v=t(5397).Z.h1(e||(e=(0,h.Z)(['\n  font-family: "Alkatra", cursive;\n  font-size: 40px;\n  font-weight: 600;\n']))),x=function(){var n=(0,l.useState)([]),r=(0,i.Z)(n,2),t=r[0],e=r[1],o=(0,l.useState)(!1),u=(0,i.Z)(o,2),c=u[0],s=u[1];return(0,l.useEffect)((function(){s(!0),(0,d.z5)().then((function(n){var r=n.results;e((0,a.Z)(r)),s(!1)}))}),[]),(0,p.jsxs)("main",{children:[(0,p.jsx)(v,{children:"Trending today"}),c&&(0,p.jsx)(m.Z,{}),(0,p.jsx)(f,{movies:t})]})}},3968:function(n,r,t){n.exports=t.p+"static/media/noImage.1e587cc69dd87187e3e3.png"}}]);
//# sourceMappingURL=167.dfd1fa11.chunk.js.map