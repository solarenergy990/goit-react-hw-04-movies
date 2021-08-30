(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[5],{53:function(t,e,n){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}n.d(e,"a",(function(){return r}))},54:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(53);function c(t,e){if(t){if("string"===typeof t)return Object(r.a)(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(r.a)(t,e):void 0}}},55:function(t,e,n){"use strict";n.d(e,"e",(function(){return i})),n.d(e,"b",(function(){return a})),n.d(e,"d",(function(){return o})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return s})),n.d(e,"f",(function(){return l}));var r="5a9486e7363af1432b87b7a7303a7852",c="https://api.themoviedb.org",i=function(t){var e="".concat(c,"/3/trending/movie/day?api_key=").concat(r,"&page=").concat(t);return fetch(e).then((function(t){if(t.ok)return t.json()}))},a=function(){var t="\n".concat(c,"/3/genre/movie/list?api_key=").concat(r,"&language=en-US");return fetch(t).then((function(t){if(t.ok)return t.json()})).then((function(t){return t.genres}))},o=function(t,e){var n="\n\n".concat(c,"/3/search/movie?api_key=").concat(r,"&language=en-US&query=").concat(t,"&page=").concat(e,"&include_adult=false");return fetch(n).then((function(t){if(t.ok)return t.json()}))},u=function(t){var e="\n".concat(c,"/3/movie/").concat(t,"?api_key=").concat(r,"&language=en-US");return fetch(e).then((function(t){if(t.ok)return t.json()}))},s=function(t){var e="\n".concat(c,"/3/movie/").concat(t,"/credits?api_key=").concat(r,"&language=en-US");return fetch(e).then((function(t){if(t.ok)return t.json()})).then((function(t){return t.cast}))},l=function(t){var e="\n".concat(c,"/3/movie/").concat(t,"/reviews?api_key=").concat(r,"&language=en-US&page=1");return fetch(e).then((function(t){if(t.ok)return t.json()})).then((function(t){return t.results}))}},56:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(54);function c(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,c=!1,i=void 0;try{for(var a,o=t[Symbol.iterator]();!(r=(a=o.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(u){c=!0,i=u}finally{try{r||null==o.return||o.return()}finally{if(c)throw i}}return n}}(t,e)||Object(r.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},63:function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}n.d(e,"a",(function(){return i}))},66:function(t,e,n){t.exports={poster:"MovieDetailsPage_poster__24KcT",posterInfo:"MovieDetailsPage_posterInfo__Ifm_B",navLink:"MovieDetailsPage_navLink__3CEXf",link:"MovieDetailsPage_link__1mze0",activeLink:"MovieDetailsPage_activeLink__35CG4",ReturnBtn:"MovieDetailsPage_ReturnBtn__1Vjq5"}},72:function(t,e,n){"use strict";n.r(e);var r=n(63),c=n(56),i=n(0),a=n(3),o=n(9),u=n(66),s=n.n(u),l=n(14),f=n.n(l),j=n(55),b=n(1),h=Object(i.lazy)((function(){return n.e(6).then(n.bind(null,67))})),d=Object(i.lazy)((function(){return n.e(7).then(n.bind(null,69))}));e.default=function(){var t=Object(i.useState)(null),e=Object(c.a)(t,2),n=e[0],u=e[1],l=Object(a.i)().movieId,p=Object(a.h)(),v=Object(a.g)(),O=Object(a.j)(),g=O.url,m=O.path;Object(i.useEffect)((function(){Object(j.c)(l).then((function(t){return u(t)}))}),[l]);return Object(b.jsx)(b.Fragment,{children:n&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("button",{className:s.a.ReturnBtn,type:"button",onClick:function(){var t,e;v.push(null!==(t=null===p||void 0===p||null===(e=p.state)||void 0===e?void 0:e.from)&&void 0!==t?t:"/")},children:"Return"}),Object(b.jsxs)("div",{className:s.a.poster,children:[Object(b.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(n.poster_path),alt:n.title}),Object(b.jsxs)("div",{className:s.a.posterInfo,children:[Object(b.jsxs)("h3",{children:[Object(b.jsx)("span",{children:"".concat(n.title," / ")}),Object(b.jsx)("span",{children:n.release_date})]}),Object(b.jsx)("h3",{children:"Overview"}),Object(b.jsx)("p",{children:n.overview}),Object(b.jsx)("h3",{children:"Genres:"}),Object(b.jsx)("ul",{children:n.genres.map((function(t){return Object(b.jsx)("li",{children:t.name},t.id)}))})]})]}),Object(b.jsxs)("div",{className:s.a.navLink,children:[Object(b.jsx)(o.b,{className:s.a.link,to:{pathname:"".concat(g,"/cast"),state:Object(r.a)({},p.state)},children:"Cast"}),Object(b.jsx)(o.b,{className:s.a.link,to:{pathname:"".concat(g,"/reviews"),state:Object(r.a)({},p.state)},children:"Review"})]}),Object(b.jsx)(i.Suspense,{fallback:Object(b.jsx)("div",{className:s.a.loader,children:Object(b.jsx)(f.a,{type:"Grid",color:"#00BFFF",height:80,width:80})}),children:Object(b.jsxs)(a.d,{children:[Object(b.jsx)(a.b,{path:"".concat(m,"/cast"),exact:!0,children:Object(b.jsx)(h,{})}),Object(b.jsx)(a.b,{path:"".concat(m,"/reviews"),children:Object(b.jsx)(d,{})})]})})]})})}}}]);
//# sourceMappingURL=5.17eb7dbb.chunk.js.map