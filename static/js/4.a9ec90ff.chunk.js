"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[4],{288:function(n,t,r){r.d(t,{Pg:function(){return p},Pt:function(){return d},z5:function(){return c}});var e=r(5861),i=r(4687),a=r.n(i),o=r(2007),s=r(1243),u="af36a8e543b2cdf1ea4b27ac643d9907";s.Z.defaults.baseURL="https://api.themoviedb.org/3/",s.Z.defaults.params={api_key:u};var c=function(){var n=(0,e.Z)(a().mark((function n(){var t,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.Z.get("trending/movie/day?api_key=".concat(u));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(a().mark((function n(t){var r,e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.Z.get("/movie/".concat(t,"?api_key=").concat(u));case 2:return r=n.sent,e=r.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,e.Z)(a().mark((function n(t){var r,e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.Z.get("search/movie?api_key=".concat(u),{params:{query:t}});case 2:return r=n.sent,e=r.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}();c.propTypes={query:o.PropTypes.string.isRequired},p.propTypes={id:o.PropTypes.number.isRequired},d.propTypes={query:o.PropTypes.number.isRequired}},9044:function(n,t,r){r.d(t,{Z:function(){return x}});var e,i=r(5671),a=r(3144),o=r(136),s=r(516),u=r(2791),c=r(8966),p=r(168),d=r(5397).Z.div(e||(e=(0,p.Z)(["\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  opacity: 0.9;\n"]))),f=r(184),l=function(n){(0,o.Z)(r,n);var t=(0,s.Z)(r);function r(){return(0,i.Z)(this,r),t.apply(this,arguments)}return(0,a.Z)(r,[{key:"render",value:function(){return(0,f.jsx)(d,{children:(0,f.jsx)(c.Z1,{height:"120",width:"120",color:"#800000",visible:!0,ariaLabel:"three-circles-rotating"})})}}]),r}(u.Component),x=l},1544:function(n,t,r){r.d(t,{W2:function(){return c},WF:function(){return p},dG:function(){return f},xu:function(){return d}});var e,i,a,o,s=r(168),u=r(5397),c=u.Z.div(e||(e=(0,s.Z)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, 200px);\n  gap: 16px;\n  justify-content: center;\n"]))),p=u.Z.div(i||(i=(0,s.Z)(["\n  border: 1px solid: #fff;\n  background-color: #fff;\n  border-radius: 8px;\n  transform: scale(1);\n  box-shadow: 3px 3px 5px #696969;\n  vertical-align: middle;\n    transition: transform 450ms cubic-bezier(0, 0.110, 0.35, 2);\n  &:hover {\n    transform: scale(1.02);\n    transition: transform  450ms cubic-bezier(0, 0.110, 0.35, 2);\n  }\n"]))),d=u.Z.img(a||(a=(0,s.Z)(["\n  border-top-left-radius: 8px;\n  border-top-right-radius: 8px;\n"]))),f=u.Z.h3(o||(o=(0,s.Z)(["\n  padding: 4px;\n  margin: 0px;\n  color: black;\n  text-align: center;\n"])))},2004:function(n,t,r){r.r(t),r.d(t,{default:function(){return z}});var e,i,a,o,s=r(3433),u=r(9439),c=r(2791),p=r(1087),d=r(7689),f=r(288),l=r(7596),x=r(168),h=r(5397),m=r(8617),b=(0,h.Z)(m.G4C)(e||(e=(0,x.Z)(["\n  width: 20px;\n  height: 20px;\n  right: 6px;\n  transform: scale(1);\n  transition: transform 450ms cubic-bezier(0, 0.11, 0.35, 2);\n  &:hover {\n    transform: scale(1.1);\n    transition: transform 450ms cubic-bezier(0, 0.11, 0.35, 2);\n  }\n"]))),g=h.Z.form(i||(i=(0,x.Z)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  height: 36px;\n  max-width: 600px;\n  background-color: #fff;\n  border: none;\n  margin-bottom: 30px;\n  margin-right: auto;\n  margin-left: auto;\n  overflow: hidden;\n  border-radius: 8px;\n  box-shadow: 3px 3px 5px #696969;\n"]))),v=h.Z.button(a||(a=(0,x.Z)(["\n  display: inline-block;\n  height: 20px;\n  padding: 0px 5px;\n  opacity: 0.4;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n  &:hover {\n    opacity: 1;\n  }\n"]))),Z=h.Z.input(o||(o=(0,x.Z)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 16px;\n  border: none;\n  outline: none;\n  padding: 4px 10px 4px 10px;\n  border-radius: 4px;\n  &::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n"]))),y=r(184),w=function(n){var t=n.onSubmit,r=(0,c.useState)(""),e=(0,u.Z)(r,2),i=e[0],a=e[1];return(0,y.jsxs)(g,{onSubmit:function(n){n.preventDefault(),t(i),a("")},children:[(0,y.jsx)(Z,{type:"text",value:i,onChange:function(n){var t=n.currentTarget.value;a(t)},placeholder:"Search movies..."}),(0,y.jsx)(v,{type:"submit",children:(0,y.jsx)(b,{})})]})},j=r(1544),k=r(9044),_=r(3968),z=(r(5462),function(){var n,t=(0,p.lr)(),r=(0,u.Z)(t,2),e=r[0],i=r[1],a=null!==(n=e.get("name"))&&void 0!==n?n:"",o=(0,c.useState)([]),x=(0,u.Z)(o,2),h=x[0],m=x[1],b=(0,c.useState)(!1),g=(0,u.Z)(b,2),v=g[0],Z=g[1],z=(0,d.TH)();(0,c.useEffect)((function(){Z(!0),(0,f.Pt)(a).then((function(n){var t=n.results;m((0,s.Z)(t)),Z(!1)})).catch((function(){return l.Am.error("Whoops, something went wrong! Please try again later!")}))}),[a]);return(0,y.jsxs)("main",{children:[(0,y.jsx)(w,{onSubmit:function(n){i(""!==n?{name:n}:{}),m([])}}),v&&(0,y.jsx)(k.Z,{}),(0,y.jsxs)(j.W2,{children:[h.map((function(n){var t=n.id,r=n.title,e=n.poster_path;return(0,y.jsx)(j.WF,{children:(0,y.jsxs)(p.rU,{state:{from:z},to:"".concat(t),children:[(0,y.jsx)(j.xu,{src:e?"https://image.tmdb.org/t/p/w342/".concat(e):"".concat(_),alt:r}),(0,y.jsx)(j.dG,{children:r})]})},t)})),(0,y.jsx)(c.Suspense,{children:(0,y.jsx)(d.j3,{})})]}),(0,y.jsx)(l.Ix,{})]})})},3968:function(n,t,r){n.exports=r.p+"static/media/noImage.1e587cc69dd87187e3e3.png"}}]);
//# sourceMappingURL=4.a9ec90ff.chunk.js.map