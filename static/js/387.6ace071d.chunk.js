"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[387],{288:function(n,t,r){r.d(t,{Pg:function(){return p},Pt:function(){return f},z5:function(){return s}});var e=r(5861),i=r(4687),a=r.n(i),o=r(2007),u=r(1243),c="1c371b02c7ab52709deaac4809871490";u.Z.defaults.baseURL="https://api.themoviedb.org/3/",u.Z.defaults.params={api_key:c};var s=function(){var n=(0,e.Z)(a().mark((function n(){var t,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("trending/movie/day?api_key=".concat(c));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(a().mark((function n(t){var r,e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(t,"?api_key=").concat(c));case 2:return r=n.sent,e=r.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(a().mark((function n(t){var r,e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("search/movie?api_key=".concat(c),{params:{query:t}});case 2:return r=n.sent,e=r.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}();s.propTypes={query:o.PropTypes.string.isRequired},p.propTypes={id:o.PropTypes.number.isRequired},f.propTypes={query:o.PropTypes.number.isRequired}},5811:function(n,t,r){r.d(t,{CF:function(){return v},__:function(){return Z},dh:function(){return l},ds:function(){return d},on:function(){return h},v0:function(){return g},xl:function(){return x}});var e,i,a,o,u,c,s,p=r(168),f=r(9549),d=f.Z.ul(e||(e=(0,p.Z)(["\n  padding: 20px 0;\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n"]))),l=f.Z.li(i||(i=(0,p.Z)(["\n  width: 100px;\n"]))),h=f.Z.div(a||(a=(0,p.Z)(["\n  position: relative;\n  border-radius: 5px;\n  background: #fff;\n  width: 100px;\n  height: 150px;\n"]))),Z=f.Z.img(o||(o=(0,p.Z)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  border-radius: 3px;\n  width: 100%;\n  height: auto;\n  border-radius: 5px;\n"]))),x=f.Z.p(u||(u=(0,p.Z)(["\n  padding-top: 10px;\n  font-size: 16px;\n  font-weight: 600;\n  color: #8b0000;\n  margin: 0;\n  text-align: center;\n"]))),v=f.Z.p(c||(c=(0,p.Z)(["\n  padding-top: 5px;\n  font-size: 14px;\n  margin: 0;\n  color: black;\n  text-align: center;\n"]))),g=f.Z.p(s||(s=(0,p.Z)(["\n  font-size: 18px;\n  font-weight: 600;\n  padding: 10px;\n  color: black;\n"])))},9044:function(n,t,r){r.d(t,{Z:function(){return h}});var e,i=r(5671),a=r(3144),o=r(136),u=r(516),c=r(2791),s=r(168),p=r(9549).Z.div(e||(e=(0,s.Z)(["\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  opacity: 0.9;\n"]))),f=r(8053),d=r(184),l=function(n){(0,o.Z)(r,n);var t=(0,u.Z)(r);function r(){return(0,i.Z)(this,r),t.apply(this,arguments)}return(0,a.Z)(r,[{key:"render",value:function(){return(0,d.jsx)(p,{children:(0,d.jsx)(f.Z,{size:100,speed:.9,color:"#D2691E"})})}}]),r}(c.Component),h=l},4387:function(n,t,r){r.r(t),r.d(t,{default:function(){return y}});var e,i,a,o=r(9439),u=r(288),c=r(2791),s=r(7689),p=r(5811),f=r(9044),d=r(7596),l=r(168),h=r(9549),Z=h.Z.ul(e||(e=(0,l.Z)(["\n  padding: 20px 0;\n"]))),x=h.Z.li(i||(i=(0,l.Z)([""]))),v=h.Z.p(a||(a=(0,l.Z)(["\n  font-style: italic;\n  padding: 0 10px;\n"]))),g=(r(5462),r(184)),y=function(){var n=(0,s.UO)().movieId,t=(0,c.useState)([]),r=(0,o.Z)(t,2),e=r[0],i=r[1],a=(0,c.useState)(!1),l=(0,o.Z)(a,2),h=l[0],y=l[1];return(0,c.useEffect)((function(){y(!0),(0,u.Pg)("".concat(n,"/reviews")).then((function(n){var t=n.results;i(t),y(!1)})).catch((function(){return d.Am.error("Whoops, something went wrong! Please try again later!")}))}),[n]),(0,g.jsxs)(Z,{children:[h&&(0,g.jsx)(f.Z,{}),(null===e||void 0===e?void 0:e.length)>0?e.map((function(n){var t=n.id,r=n.author,e=n.content;return(0,g.jsxs)(x,{children:[(0,g.jsx)("h3",{children:r}),(0,g.jsx)(v,{children:e})]},t)})):(0,g.jsx)(p.v0,{children:"Sorry, but there are currently no reviews!"}),(0,g.jsx)(d.Ix,{})]})}}}]);
//# sourceMappingURL=387.6ace071d.chunk.js.map