"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[247],{288:function(n,t,r){r.d(t,{Pg:function(){return p},Pt:function(){return d},z5:function(){return s}});var e=r(5861),i=r(4687),a=r.n(i),o=r(2007),u=r(1243),c="af36a8e543b2cdf1ea4b27ac643d9907";u.Z.defaults.baseURL="https://api.themoviedb.org/3/",u.Z.defaults.params={api_key:c};var s=function(){var n=(0,e.Z)(a().mark((function n(){var t,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("trending/movie/day?api_key=".concat(c));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(a().mark((function n(t){var r,e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(t,"?api_key=").concat(c));case 2:return r=n.sent,e=r.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,e.Z)(a().mark((function n(t){var r,e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("search/movie?api_key=".concat(c),{params:{query:t}});case 2:return r=n.sent,e=r.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}();s.propTypes={query:o.PropTypes.string.isRequired},p.propTypes={id:o.PropTypes.number.isRequired},d.propTypes={query:o.PropTypes.number.isRequired}},1247:function(n,t,r){r.r(t);var e=r(9439),i=r(288),a=r(2791),o=r(7689),u=r(8269),c=r(5811),s=r(9044),p=r(7596),d=(r(5462),r(184));t.default=function(){var n=(0,o.UO)().movieId,t=(0,a.useState)([]),r=(0,e.Z)(t,2),f=r[0],h=r[1],l=(0,a.useState)(!1),x=(0,e.Z)(l,2),g=x[0],v=x[1];return(0,a.useEffect)((function(){v(!0),(0,i.Pg)("".concat(n,"/credits")).then((function(n){var t=n.cast;h(t),v(!1)})).catch((function(){return p.Am.error("Whoops, something went wrong! Please try again later!")}))}),[n]),(0,d.jsxs)(c.ds,{children:[g&&(0,d.jsx)(s.Z,{}),(null===f||void 0===f?void 0:f.length)>0?f.map((function(n){var t=n.character,r=n.credit_id,e=n.name,i=n.profile_path;return(0,d.jsxs)(c.dh,{children:[(0,d.jsx)(c.on,{children:(0,d.jsx)(c.__,{src:i?"https://image.tmdb.org/t/p/w200/".concat(i):"".concat(u),alt:e})}),(0,d.jsx)(c.xl,{children:e}),(0,d.jsx)(c.CF,{children:t})]},r)})):(0,d.jsx)(c.v0,{children:"Sorry, but there is currently no information about the cast!"}),(0,d.jsx)(p.Ix,{})]})}},5811:function(n,t,r){r.d(t,{CF:function(){return v},__:function(){return x},dh:function(){return h},ds:function(){return f},on:function(){return l},v0:function(){return Z},xl:function(){return g}});var e,i,a,o,u,c,s,p=r(168),d=r(5397),f=d.Z.ul(e||(e=(0,p.Z)(["\n  padding: 20px 0;\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n"]))),h=d.Z.li(i||(i=(0,p.Z)(["\n  width: 100px;\n"]))),l=d.Z.div(a||(a=(0,p.Z)(["\n  position: relative;\n  border-radius: 5px;\n  background: #fff;\n  width: 100px;\n  height: 150px;\n"]))),x=d.Z.img(o||(o=(0,p.Z)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  border-radius: 3px;\n  width: 100%;\n  height: auto;\n  border-radius: 5px;\n"]))),g=d.Z.p(u||(u=(0,p.Z)(["\n  padding-top: 10px;\n  font-size: 16px;\n  font-weight: 600;\n  color: #8b0000;\n  margin: 0;\n  text-align: center;\n"]))),v=d.Z.p(c||(c=(0,p.Z)(["\n  padding-top: 5px;\n  font-size: 14px;\n  margin: 0;\n  color: black;\n  text-align: center;\n"]))),Z=d.Z.p(s||(s=(0,p.Z)(["\n  font-size: 18px;\n  font-weight: 600;\n  padding: 10px;\n  color: black;\n"])))},9044:function(n,t,r){r.d(t,{Z:function(){return l}});var e,i=r(5671),a=r(3144),o=r(136),u=r(516),c=r(2791),s=r(8966),p=r(168),d=r(5397).Z.div(e||(e=(0,p.Z)(["\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  opacity: 0.9;\n"]))),f=r(184),h=function(n){(0,o.Z)(r,n);var t=(0,u.Z)(r);function r(){return(0,i.Z)(this,r),t.apply(this,arguments)}return(0,a.Z)(r,[{key:"render",value:function(){return(0,f.jsx)(d,{children:(0,f.jsx)(s.Z1,{height:"120",width:"120",color:"#800000",visible:!0,ariaLabel:"three-circles-rotating"})})}}]),r}(c.Component),l=h},8269:function(n,t,r){n.exports=r.p+"static/media/noPhoto.2628bf5cd30dbec48e2b.jpg"}}]);
//# sourceMappingURL=247.3b7ed991.chunk.js.map