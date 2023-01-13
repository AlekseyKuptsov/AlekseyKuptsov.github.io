"use strict";(self.webpackChunkreact_marvel_db=self.webpackChunkreact_marvel_db||[]).push([[228],{7341:function(e,n,r){var a=r(5671),t=r(3144),c=r(136),s=r(7277),i=r(2791),o=r(8519),l=r(184),u=function(e){(0,c.Z)(r,e);var n=(0,s.Z)(r);function r(){var e;(0,a.Z)(this,r);for(var t=arguments.length,c=new Array(t),s=0;s<t;s++)c[s]=arguments[s];return(e=n.call.apply(n,[this].concat(c))).state={error:!1},e}return(0,t.Z)(r,[{key:"componentDidCatch",value:function(e,n){console.log(e,n),this.setState({error:!0})}},{key:"render",value:function(){return this.state.error?(0,l.jsx)(o.Z,{}):this.props.children}}]),r}(i.Component);n.Z=u},8519:function(e,n,r){var a=r(184);n.Z=function(){return(0,a.jsx)("img",{style:{display:"block",width:"40%",height:"100%",objectFit:"contain",margin:"0 auto"},src:"/error.gif",alt:"Error"})}},240:function(e,n,r){r.r(n),r.d(n,{default:function(){return Z}});var a=r(885),t=r(2791),c=r(4304),s=r(2523),i=r.p+"static/media/mjolnir.61f31e1809f12183a524.png",o=r(184),l=function(e){var n=e.data,r=n.name,a=n.description,t=n.thumbnail,c=n.homepage,s=n.wiki,i=a.length<=200?a:a.substring(0,200)+"...";return(0,o.jsxs)("div",{className:"randomchar__block",children:[(0,o.jsx)("img",{src:t,style:"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===t?{objectFit:"unset"}:{},alt:"Random character",className:"randomchar__img"}),(0,o.jsxs)("div",{className:"randomchar__info",children:[(0,o.jsx)("p",{className:"randomchar__name",children:r}),(0,o.jsx)("p",{className:"randomchar__descr",children:i||"Data not found"}),(0,o.jsxs)("div",{className:"randomchar__btns",children:[(0,o.jsx)("a",{href:c,className:"button button__main",children:(0,o.jsx)("div",{className:"inner",children:"homepage"})}),(0,o.jsx)("a",{href:s,className:"button button__secondary",children:(0,o.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]})},u=function(){var e=(0,t.useState)({name:"",description:"",thumbnail:null,homepage:null,wiki:null}),n=(0,a.Z)(e,2),r=n[0],u=n[1],h=(0,c.Z)(),d=h.getCharacters,m=h.clearError,f=h.process,p=h.setProcess,_=function(e){u(e)},x=function(){p("loading"),m();var e=Math.floor(400*Math.random()+1011e3);d(e).then(_).then((function(){return p("confirmed")}))};return(0,t.useEffect)((function(){x();var e=setInterval(x,15e3);return function(){clearInterval(e)}}),[]),(0,o.jsxs)("div",{className:"randomchar",children:[(0,s.Z)(f,l,r),(0,o.jsxs)("div",{className:"randomchar__static",children:[(0,o.jsxs)("p",{className:"randomchar__title",children:["Random character for today!",(0,o.jsx)("br",{}),"Do you want to get to know him better?"]}),(0,o.jsx)("p",{className:"randomchar__title",children:"Or choose another one"}),(0,o.jsx)("button",{className:"button button__main",onClick:x,children:(0,o.jsx)("div",{className:"inner",children:"try it"})}),(0,o.jsx)("img",{src:i,alt:"mjolnir",className:"randomchar__decoration"})]})]})},h=r(2982),d=r(6983),m=r(5660),f=function(e){var n=(0,t.useState)([]),r=(0,a.Z)(n,2),i=r[0],l=r[1],u=(0,t.useState)(!1),f=(0,a.Z)(u,2),p=f[0],_=f[1],x=(0,t.useState)(210),v=(0,a.Z)(x,2),j=v[0],b=v[1],g=(0,t.useState)(!1),N=(0,a.Z)(g,2),Z=N[0],k=N[1],y=(0,c.Z)(),w=y.getAllCharacters,C=y.process,E=y.setProcess,S=function(e){var n=!1;e.length<9&&(n=!0),l([].concat((0,h.Z)(i),(0,h.Z)(e))),_(!1),b(j+9),k(n)},F=function(e,n){_(!n),E(n?"loading":"confirmed"),w(e).then(S).then((function(){return E("confirmed")}))};(0,t.useEffect)((function(){F(j,!0)}),[]);var I=(0,t.useMemo)((function(){return(0,s.Z)(C,(function(){return function(n){var r=n.map((function(n){return(0,o.jsx)(d.Z,{timeout:300,classNames:"char__item",children:(0,o.jsxs)("li",{className:"char__item",onClick:function(){e.onCharSelect(n.id),window.scrollTo(0,400)},tabIndex:0,onKeyDown:function(r){"Enter"===r.key&&e.onCharSelect(n.id)},children:[(0,o.jsx)("img",{src:n.thumbnail,style:"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===n.thumbnail?{objectFit:"unset"}:{},alt:"abyss"}),(0,o.jsx)("div",{className:"char__name",children:n.name})]})},n.id)}));return(0,o.jsx)("ul",{className:"char__grid",children:(0,o.jsx)(m.Z,{component:null,children:r})})}(i)}))}),[C,i]);return(0,o.jsxs)("div",{className:"char__list",children:[I,(0,o.jsx)("button",{className:"button button__main button__long",disabled:p,style:{display:Z?"none":"block"},onClick:function(){return F(j)},children:(0,o.jsx)("div",{className:"inner",children:"load more"})})]})},p=r(3504),_=function(e){var n=e.data,r=n.name,a=n.description,t=n.thumbnail,c=n.homepage,s=n.wiki,i=n.comics,l=i.slice(0,10).map((function(e,n){return(0,o.jsx)("li",{className:"char__comics-item",children:(0,o.jsx)(p.rU,{to:"/comics/".concat(+e.resourceURI.substring(43)),children:e.name})},n)}));return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("div",{className:"char__basics",children:[(0,o.jsx)("img",{src:t,style:"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===t?{objectFit:"unset"}:{},alt:r}),(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{className:"char__info-name",children:r}),(0,o.jsxs)("div",{className:"char__btns",children:[(0,o.jsx)("a",{href:c,className:"button button__main",children:(0,o.jsx)("div",{className:"inner",children:"homepage"})}),(0,o.jsx)("a",{href:s,className:"button button__secondary",children:(0,o.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]}),(0,o.jsx)("div",{className:"char__descr",children:a}),(0,o.jsx)("div",{className:"char__comics",children:"Comics:"}),(0,o.jsx)("ul",{className:"char__comics-list",children:i.length>0?l:"Data not found"})]})},x=function(e){var n=(0,t.useState)(null),r=(0,a.Z)(n,2),i=r[0],l=r[1],u=(0,c.Z)(),h=u.getCharacters,d=u.clearError,m=u.process,f=u.setProcess;(0,t.useEffect)((function(){p()}),[]),(0,t.useEffect)((function(){p()}),[e.charId]);var p=function(){var n=e.charId;n&&(f("loading"),d(),h(n).then(x).then((function(){return f("confirmed")})))},x=function(e){l(e)};return(0,o.jsx)("div",{className:"char__info",children:(0,s.Z)(m,_,i)})},v=r(5705),j=r(132),b=(r(8519),function(){var e=(0,t.useState)(null),n=(0,a.Z)(e,2),r=n[0],s=n[1],i=(0,c.Z)(),l=i.getCharactersByName,u=i.clearError,h=i.process,d=i.setProcess,m=function(e){s(e)},f=r&&0!==r.length?r[0].description.length<=200?r[0].description:r[0].description.substring(0,200)+"...":null,_=r?r.length>0?(0,o.jsxs)("div",{className:"char__search-wrapper",children:[(0,o.jsx)("img",{src:r[0].thumbnail,style:{objectFit:"unset"},alt:"Random character",className:"char__search-img"}),(0,o.jsxs)("div",{className:"char__search-info",children:[(0,o.jsx)("h2",{className:"char__search-name",children:r[0].name}),(0,o.jsx)("p",{className:"char__search-descr",children:f||"Data not found"})]}),(0,o.jsx)(p.rU,{to:"/characters/".concat(r[0].id),className:"button button__secondary",children:(0,o.jsx)("div",{className:"inner",children:"To page"})})]}):(0,o.jsx)("div",{className:"char__search-error",children:"The character was not found. Check the name and try again"}):null,x="error"===h?(0,o.jsx)("div",{className:"char__search-critical-error",children:"Data not found"}):null;return(0,o.jsxs)("div",{className:"char__search-form",children:[(0,o.jsx)(v.J9,{initialValues:{charName:""},validationSchema:j.Ry({charName:j.Z_()}),onSubmit:function(e){var n,r=e.charName;n=r,u(),s(null),l(n).then(m).then((function(){return d("confirmed")}))},children:(0,o.jsxs)(v.l0,{children:[(0,o.jsx)("label",{className:"char__search-label",htmlFor:"charName",children:"Find a character by name:"}),(0,o.jsxs)("div",{className:"char__search-wrapper",children:[(0,o.jsx)(v.gN,{id:"charName",name:"charName",type:"text",placeholder:"Enter name"}),(0,o.jsx)("button",{type:"submit",className:"button button__main",disabled:"loading"===h,children:(0,o.jsx)("div",{className:"inner",children:"find"})})]}),(0,o.jsx)(v.Bc,{component:"div",className:"char__search-error",name:"charName"})]})}),_,x]})}),g=r(7341),N=r.p+"static/media/vision.067d4ae1936d64a577ce.png",Z=function(){var e=(0,t.useState)(null),n=(0,a.Z)(e,2),r=n[0],c=n[1];return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(g.Z,{children:(0,o.jsx)(u,{})}),(0,o.jsxs)("div",{className:"char__content",children:[(0,o.jsxs)("div",{children:[(0,o.jsx)(g.Z,{children:(0,o.jsx)(b,{})}),(0,o.jsx)(g.Z,{children:(0,o.jsx)(f,{onCharSelect:function(e){c(e)}})})]}),(0,o.jsx)(g.Z,{children:(0,o.jsx)(x,{charId:r})})]}),(0,o.jsx)("img",{className:"bg-decoration",src:N,alt:"vision"})]})}},4304:function(e,n,r){r.d(n,{Z:function(){return i}});var a=r(4165),t=r(5861),c=r(885),s=r(2791),i=function(){var e=function(){var e=(0,s.useState)("waiting"),n=(0,c.Z)(e,2),r=n[0],i=n[1],o=(0,s.useCallback)(function(){var e=(0,t.Z)((0,a.Z)().mark((function e(n){var r,t,c,s,o,l=arguments;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=l.length>1&&void 0!==l[1]?l[1]:"GET",t=l.length>2&&void 0!==l[2]?l[2]:null,c=l.length>3&&void 0!==l[3]?l[3]:{"Content-type":"application/json"},e.prev=3,e.next=6,fetch(n,{method:r,body:t,headers:c});case 6:if((s=e.sent).ok){e.next=9;break}throw new Error("Could not fetch ".concat(n,", status: ").concat(s.status));case 9:return e.next=11,s.json();case 11:return o=e.sent,e.abrupt("return",o);case 15:throw e.prev=15,e.t0=e.catch(3),i("error"),e.t0;case 19:case"end":return e.stop()}}),e,null,[[3,15]])})));return function(n){return e.apply(this,arguments)}}(),[]);return{request:o,clearError:(0,s.useCallback)((function(){return i("loading")}),[]),process:r,setProcess:i}}(),n=e.request,r=e.clearError,i=e.process,o=e.setProcess,l="https://gateway.marvel.com:443/v1/public/",u="apikey=d535af7cd6b64bc0cd6e2e98346439c0",h=function(){var e=(0,t.Z)((0,a.Z)().mark((function e(){var r,t,c=arguments;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=c.length>0&&void 0!==c[0]?c[0]:210,e.next=3,n("".concat(l,"characters?limit=9&offset=").concat(r,"&").concat(u));case 3:return t=e.sent,e.abrupt("return",t.data.results.map((function(e){return _(e)})));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=(0,t.Z)((0,a.Z)().mark((function e(){var r,t,c=arguments;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=c.length>0&&void 0!==c[0]?c[0]:null,e.next=3,n("".concat(l,"characters?name=").concat(r,"&").concat(u));case 3:return t=e.sent,e.abrupt("return",t.data.results.map((function(e){return _(e)})));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=(0,t.Z)((0,a.Z)().mark((function e(r){var t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n("".concat(l,"characters/").concat(r,"?").concat(u));case 2:return t=e.sent,e.abrupt("return",_(t.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,t.Z)((0,a.Z)().mark((function e(){var r,t,c=arguments;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=c.length>0&&void 0!==c[0]?c[0]:8,e.next=3,n("".concat(l,"comics?orderBy=issueNumber&limit=8&offset=").concat(r,"&").concat(u));case 3:return t=e.sent,e.abrupt("return",t.data.results.map((function(e){return x(e)})));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,t.Z)((0,a.Z)().mark((function e(r){var t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n("".concat(l,"comics/").concat(r,"?").concat(u));case 2:return t=e.sent,e.abrupt("return",x(t.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),_=function(e){return{id:e.id,name:e.name,description:e.description,thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,homepage:e.urls[0].url,wiki:e.urls[1].url,comics:e.comics.items}},x=function(e){return{id:e.id,title:e.title,description:e.description||"There is no description",language:e.textObjects.language||"en-us",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,pageCount:e.pageCount?"".concat(e.pageCount," p."):"No information about the number of pages",price:e.prices.price?e.prices.price+"$":"NOT AVAILABLE"}};return{getAllCharacters:h,getCharacters:m,getCharactersByName:d,clearError:r,process:i,setProcess:o,getAllComics:f,getComics:p}}},2523:function(e,n,r){r.d(n,{Z:function(){return i}});var a=r(3622),t=r(8519),c=r(184),s=function(){return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("p",{className:"char__select",children:"Please select a character to see information"}),(0,c.jsxs)("div",{className:"skeleton",children:[(0,c.jsxs)("div",{className:"pulse skeleton__header",children:[(0,c.jsx)("div",{className:"pulse skeleton__circle"}),(0,c.jsx)("div",{className:"pulse skeleton__mini"})]}),(0,c.jsx)("div",{className:"pulse skeleton__block"}),(0,c.jsx)("div",{className:"pulse skeleton__block"}),(0,c.jsx)("div",{className:"pulse skeleton__block"})]})]})},i=function(e,n,r){switch(e){case"waiting":return(0,c.jsx)(s,{});case"loading":return(0,c.jsx)(a.Z,{});case"confirmed":return(0,c.jsx)(n,{data:r});case"error":return(0,c.jsx)(t.Z,{});default:throw new Error("Unexpected error")}}}}]);
//# sourceMappingURL=228.30443155.chunk.js.map