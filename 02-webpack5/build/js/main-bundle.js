!function(){"use strict";var e,t,n,r,o,u={"./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/function(e,t,n){n.r(t);var r=n(/*! react */"./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=n.n(r),u=n(/*! react-dom/client */"./node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/client.js"),c=n(/*! ./react/App */"./src/react/App.jsx");n(/*! ./css/style.css */"./src/css/style.css"),n(/*! ./ts/math */"./src/ts/math.ts");u.createRoot(document.querySelector("#root")).render(o().createElement(c.default,null)),axios.get("/api/users/list").then((function(e){}));var i=document.createElement("button"),a=document.createElement("button");i.textContent="关于",a.textContent="分类",document.body.append(i),document.body.append(a),i.onclick=function(){n.e(/*! import() | about */"about").then(n.bind(n,/*! ./router/about */"./src/router/about.js")).then((function(e){e.about()}))},a.onclick=function(){n.e(/*! import() | category */"category").then(n.t.bind(n,/*! ./router/category */"./src/router/category.js",23))}},"./src/react/App.jsx":
/*!***************************!*\
  !*** ./src/react/App.jsx ***!
  \***************************/function(e,t,n){n.r(t);var r=n(/*! react */"./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=n.n(r);function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,u,c,i=[],a=!0,l=!1;try{if(u=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;a=!1}else for(;!(a=(r=u.call(n)).done)&&(i.push(r.value),i.length!==t);a=!0);}catch(e){l=!0,o=e}finally{try{if(!a&&null!=n.return&&(c=n.return(),Object(c)!==c))return}finally{if(l)throw o}}return i}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var i=(0,r.memo)((function(){var e=u((0,r.useState)(0),2),t=e[0],n=e[1];return o().createElement("div",null,o().createElement("h1",null,"App Count: ",t),o().createElement("button",{onClick:function(e){return n(t+1)}},"+1"))}));t.default=i},"./src/ts/math.ts":
/*!************************!*\
  !*** ./src/ts/math.ts ***!
  \************************/function(e,t,n){function r(e,t){return e+t}function o(e){return e.includes("$")?"xxxx":"yyyy"}n.r(t),n.d(t,{formatPrice:function(){return o},sum:function(){return r}})},"./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/function(e,t,n){n.r(t)}},c={};function i(e){var t=c[e];if(void 0!==t)return t.exports;var n=c[e]={id:e,loaded:!1,exports:{}};return u[e](n,n.exports,i),n.loaded=!0,n.exports}i.m=u,e=[],i.O=function(t,n,r,o){if(!n){var u=1/0;for(f=0;f<e.length;f++){n=e[f][0],r=e[f][1],o=e[f][2];for(var c=!0,a=0;a<n.length;a++)(!1&o||u>=o)&&Object.keys(i.O).every((function(e){return i.O[e](n[a])}))?n.splice(a--,1):(c=!1,o<u&&(u=o));if(c){e.splice(f--,1);var l=r();void 0!==l&&(t=l)}}return t}o=o||0;for(var f=e.length;f>0&&e[f-1][2]>o;f--)e[f]=e[f-1];e[f]=[n,r,o]},i.F={},i.E=function(e){Object.keys(i.F).map((function(t){i.F[t](e)}))},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,{a:t}),t},n=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},i.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var o=Object.create(null);i.r(o);var u={};t=t||[null,n({}),n([]),n(n)];for(var c=2&r&&e;"object"==typeof c&&!~t.indexOf(c);c=n(c))Object.getOwnPropertyNames(c).forEach((function(t){u[t]=function(){return e[t]}}));return u.default=function(){return e},i.d(o,u),o},i.d=function(e,t){for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.f={},i.e=function(e){return Promise.all(Object.keys(i.f).reduce((function(t,n){return i.f[n](e,t),t}),[]))},i.u=function(e){return"js/"+e+"_chunk.js"},i.miniCssF=function(e){},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r={},o="02-webpack5:",i.l=function(e,t,n,u){if(r[e])r[e].push(t);else{var c,a;if(void 0!==n)for(var l=document.getElementsByTagName("script"),f=0;f<l.length;f++){var s=l[f];if(s.getAttribute("src")==e||s.getAttribute("data-webpack")==o+n){c=s;break}}c||(a=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.setAttribute("data-webpack",o+n),c.src=e),r[e]=[t];var d=function(t,n){c.onerror=c.onload=null,clearTimeout(p);var o=r[e];if(delete r[e],c.parentNode&&c.parentNode.removeChild(c),o&&o.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=d.bind(null,c.onerror),c.onload=d.bind(null,c.onload),a&&document.head.appendChild(c)}},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e},function(){var e;i.g.importScripts&&(e=i.g.location+"");var t=i.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");if(n.length)for(var r=n.length-1;r>-1&&!e;)e=n[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=e+"../"}(),function(){var e={main:0};i.f.j=function(t,n){var r=i.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else{var o=new Promise((function(n,o){r=e[t]=[n,o]}));n.push(r[2]=o);var u=i.p+i.u(t),c=new Error;i.l(u,(function(n){if(i.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var o=n&&("load"===n.type?"missing":n.type),u=n&&n.target&&n.target.src;c.message="Loading chunk "+t+" failed.\n("+o+": "+u+")",c.name="ChunkLoadError",c.type=o,c.request=u,r[1](c)}}),"chunk-"+t,t)}},i.F.j=function(t){if(!i.o(e,t)||void 0===e[t]){e[t]=null;var n=document.createElement("link");i.nc&&n.setAttribute("nonce",i.nc),n.rel="prefetch",n.as="script",n.href=i.p+i.u(t),document.head.appendChild(n)}},i.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,o,u=n[0],c=n[1],a=n[2],l=0;if(u.some((function(t){return 0!==e[t]}))){for(r in c)i.o(c,r)&&(i.m[r]=c[r]);if(a)var f=a(i)}for(t&&t(n);l<u.length;l++)o=u[l],i.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return i.O(f)},n=self.webpackChunk_02_webpack5=self.webpackChunk_02_webpack5||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}(),i.O(0,["main"],(function(){i.E("category")}),5);var a=i.O(void 0,["libs-node_modules_pnpm_react-dom_18_2_0_react_18_2_0_node_modules_react-dom_client_js"],(function(){return i("./src/main.js")}));a=i.O(a)}();