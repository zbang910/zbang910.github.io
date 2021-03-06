(self["webpackChunkvue3_myapp"]=self["webpackChunkvue3_myapp"]||[]).push([[932],{36801:function(e,t,n){n(21703),n(48675),n(3462),n(82801),function(t,n){e.exports=n()}(window,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}({"./src/index.js":
/*!**********************!*\
        !*** ./src/index.js ***!
        \**********************/
/*! exports provided: default */
function(e,t,n){"use strict";n.r(t);n(
/*! ./sass/index.scss */
"./src/sass/index.scss");var r=n(
/*! ./js/init */
"./src/js/init.js"),i=r["default"].init;"undefined"!==typeof window&&(window.printJS=i),t["default"]=i},"./src/js/browser.js":
/*!***************************!*\
        !*** ./src/js/browser.js ***!
        \***************************/
/*! exports provided: default */
function(e,t,n){"use strict";n.r(t);var r={isFirefox:function(){return"undefined"!==typeof InstallTrigger},isIE:function(){return-1!==navigator.userAgent.indexOf("MSIE")||!!document.documentMode},isEdge:function(){return!r.isIE()&&!!window.StyleMedia},isChrome:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window;return!!e.chrome},isSafari:function(){return Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor")>0||-1!==navigator.userAgent.toLowerCase().indexOf("safari")},isIOSChrome:function(){return-1!==navigator.userAgent.toLowerCase().indexOf("crios")}};t["default"]=r},"./src/js/functions.js":
/*!*****************************!*\
        !*** ./src/js/functions.js ***!
        \*****************************/
/*! exports provided: addWrapper, capitalizePrint, collectStyles, addHeader, cleanUp, isRawHTML */
function(e,t,n){"use strict";n.r(t),n.d(t,"addWrapper",(function(){return a})),n.d(t,"capitalizePrint",(function(){return l})),n.d(t,"collectStyles",(function(){return s})),n.d(t,"addHeader",(function(){return c})),n.d(t,"cleanUp",(function(){return u})),n.d(t,"isRawHTML",(function(){return p}));var r=n(
/*! ./modal */
"./src/js/modal.js"),i=n(
/*! ./browser */
"./src/js/browser.js");function o(e){return o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function a(e,t){var n="font-family:"+t.font+" !important; font-size: "+t.font_size+" !important; width:100%;";return'<div style="'+n+'">'+e+"</div>"}function l(e){return e.charAt(0).toUpperCase()+e.slice(1)}function s(e,t){for(var n=document.defaultView||window,r="",i=n.getComputedStyle(e,""),o=0;o<i.length;o++)(-1!==t.targetStyles.indexOf("*")||-1!==t.targetStyle.indexOf(i[o])||d(t.targetStyles,i[o]))&&i.getPropertyValue(i[o])&&(r+=i[o]+":"+i.getPropertyValue(i[o])+";");return r+="max-width: "+t.maxWidth+"px !important; font-size: "+t.font_size+" !important;",r}function d(e,t){for(var n=0;n<e.length;n++)if("object"===o(t)&&-1!==t.indexOf(e[n]))return!0;return!1}function c(e,t){var n=document.createElement("div");if(p(t.header))n.innerHTML=t.header;else{var r=document.createElement("h1"),i=document.createTextNode(t.header);r.appendChild(i),r.setAttribute("style",t.headerStyle),n.appendChild(r)}e.insertBefore(n,e.childNodes[0])}function u(e){e.showModal&&r["default"].close(),e.onLoadingEnd&&e.onLoadingEnd(),(e.showModal||e.onLoadingStart)&&window.URL.revokeObjectURL(e.printable);var t="mouseover";(i["default"].isChrome()||i["default"].isFirefox())&&(t="focus");var n=function n(){window.removeEventListener(t,n),e.onPrintDialogClose();var r=document.getElementById(e.frameId);r&&r.remove()};window.addEventListener(t,n)}function p(e){var t=new RegExp("<([A-Za-z][A-Za-z0-9]*)\\b[^>]*>(.*?)</\\1>");return t.test(e)}},"./src/js/html.js":
/*!************************!*\
        !*** ./src/js/html.js ***!
        \************************/
/*! exports provided: default */
function(e,t,n){"use strict";n.r(t);var r=n(
/*! ./functions */
"./src/js/functions.js"),i=n(
/*! ./print */
"./src/js/print.js");function o(e){return o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function a(e,t){for(var n=e.cloneNode(),i=Array.prototype.slice.call(e.childNodes),o=0;o<i.length;o++)if(-1===t.ignoreElements.indexOf(i[o].id)){var l=a(i[o],t);n.appendChild(l)}switch(t.scanStyles&&1===e.nodeType&&n.setAttribute("style",Object(r["collectStyles"])(e,t)),e.tagName){case"SELECT":n.value=e.value;break;case"CANVAS":n.getContext("2d").drawImage(e,0,0);break}return n}function l(e){return"object"===o(e)&&e&&(e instanceof HTMLElement||1===e.nodeType)}t["default"]={print:function(e,t){var n=l(e.printable)?e.printable:document.getElementById(e.printable);n?(e.printableElement=a(n,e),e.header&&Object(r["addHeader"])(e.printableElement,e),i["default"].send(e,t)):window.console.error("Invalid HTML element id: "+e.printable)}}},"./src/js/image.js":
/*!*************************!*\
        !*** ./src/js/image.js ***!
        \*************************/
/*! exports provided: default */
function(e,t,n){"use strict";n.r(t);var r=n(
/*! ./functions */
"./src/js/functions.js"),i=n(
/*! ./print */
"./src/js/print.js"),o=n(
/*! ./browser */
"./src/js/browser.js");t["default"]={print:function(e,t){e.printable.constructor!==Array&&(e.printable=[e.printable]),e.printableElement=document.createElement("div"),e.printable.forEach((function(t){var n=document.createElement("img");if(n.setAttribute("style",e.imageStyle),n.src=t,o["default"].isFirefox()){var r=n.src;n.src=r}var i=document.createElement("div");i.appendChild(n),e.printableElement.appendChild(i)})),e.header&&Object(r["addHeader"])(e.printableElement,e),i["default"].send(e,t)}}},"./src/js/init.js":
/*!************************!*\
        !*** ./src/js/init.js ***!
        \************************/
/*! exports provided: default */
function(e,t,n){"use strict";n.r(t);var r=n(
/*! ./browser */
"./src/js/browser.js"),i=n(
/*! ./modal */
"./src/js/modal.js"),o=n(
/*! ./pdf */
"./src/js/pdf.js"),a=n(
/*! ./html */
"./src/js/html.js"),l=n(
/*! ./raw-html */
"./src/js/raw-html.js"),s=n(
/*! ./image */
"./src/js/image.js"),d=n(
/*! ./json */
"./src/js/json.js");function c(e){return c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}var u=["pdf","html","image","json","raw-html"];t["default"]={init:function(){var e={printable:null,fallbackPrintable:null,type:"pdf",header:null,headerStyle:"font-weight: 300;",maxWidth:800,properties:null,gridHeaderStyle:"font-weight: bold; padding: 5px; border: 1px solid #dddddd;",gridStyle:"border: 1px solid lightgray; margin-bottom: -1px;",showModal:!1,onError:function(e){throw e},onLoadingStart:null,onLoadingEnd:null,onPrintDialogClose:function(){},onIncompatibleBrowser:function(){},modalMessage:"Retrieving Document...",frameId:"printJS",printableElement:null,documentTitle:"Document",targetStyle:["clear","display","width","min-width","height","min-height","max-height"],targetStyles:["border","box","break","text-decoration"],ignoreElements:[],repeatTableHeader:!0,css:null,style:null,scanStyles:!0,base64:!1,onPdfOpen:null,font:"TimesNewRoman",font_size:"12pt",honorMarginPadding:!0,honorColor:!1,imageStyle:"max-width: 100%;"},t=arguments[0];if(void 0===t)throw new Error("printJS expects at least 1 attribute.");switch(c(t)){case"string":e.printable=encodeURI(t),e.fallbackPrintable=e.printable,e.type=arguments[1]||e.type;break;case"object":for(var n in e.printable=t.printable,e.fallbackPrintable="undefined"!==typeof t.fallbackPrintable?t.fallbackPrintable:e.printable,e.fallbackPrintable=e.base64?"data:application/pdf;base64,".concat(e.fallbackPrintable):e.fallbackPrintable,e)"printable"!==n&&"fallbackPrintable"!==n&&(e[n]="undefined"!==typeof t[n]?t[n]:e[n]);break;default:throw new Error('Unexpected argument type! Expected "string" or "object", got '+c(t))}if(!e.printable)throw new Error("Missing printable information.");if(!e.type||"string"!==typeof e.type||-1===u.indexOf(e.type.toLowerCase()))throw new Error("Invalid print type. Available types are: pdf, html, image and json.");e.showModal&&i["default"].show(e),e.onLoadingStart&&e.onLoadingStart();var p=document.getElementById(e.frameId);p&&p.parentNode.removeChild(p);var f=document.createElement("iframe");switch(r["default"].isFirefox()?f.setAttribute("style","width: 1px; height: 100px; position: fixed; left: 0; top: 0; opacity: 0; border-width: 0; margin: 0; padding: 0"):f.setAttribute("style","visibility: hidden; height: 0; width: 0; position: absolute; border: 0"),f.setAttribute("id",e.frameId),"pdf"!==e.type&&(f.srcdoc="<html><head><title>"+e.documentTitle+"</title>",e.css&&(Array.isArray(e.css)||(e.css=[e.css]),e.css.forEach((function(e){f.srcdoc+='<link rel="stylesheet" href="'+e+'">'}))),f.srcdoc+="</head><body></body></html>"),e.type){case"pdf":if(r["default"].isIE())try{console.info("Print.js doesn't support PDF printing in Internet Explorer.");var m=window.open(e.fallbackPrintable,"_blank");m.focus(),e.onIncompatibleBrowser()}catch(b){e.onError(b)}finally{e.showModal&&i["default"].close(),e.onLoadingEnd&&e.onLoadingEnd()}else o["default"].print(e,f);break;case"image":s["default"].print(e,f);break;case"html":a["default"].print(e,f);break;case"raw-html":l["default"].print(e,f);break;case"json":d["default"].print(e,f);break}}}},"./src/js/json.js":
/*!************************!*\
        !*** ./src/js/json.js ***!
        \************************/
/*! exports provided: default */
function(e,t,n){"use strict";n.r(t);var r=n(
/*! ./functions */
"./src/js/functions.js"),i=n(
/*! ./print */
"./src/js/print.js");function o(e){return o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function a(e){var t=e.printable,n=e.properties,i='<table style="border-collapse: collapse; width: 100%;">';e.repeatTableHeader&&(i+="<thead>"),i+="<tr>";for(var o=0;o<n.length;o++)i+='<th style="width:'+n[o].columnSize+";"+e.gridHeaderStyle+'">'+Object(r["capitalizePrint"])(n[o].displayName)+"</th>";i+="</tr>",e.repeatTableHeader&&(i+="</thead>"),i+="<tbody>";for(var a=0;a<t.length;a++){i+="<tr>";for(var l=0;l<n.length;l++){var s=t[a],d=n[l].field.split(".");if(d.length>1)for(var c=0;c<d.length;c++)s=s[d[c]];else s=s[n[l].field];i+='<td style="width:'+n[l].columnSize+e.gridStyle+'">'+s+"</td>"}i+="</tr>"}return i+="</tbody></table>",i}t["default"]={print:function(e,t){if("object"!==o(e.printable))throw new Error("Invalid javascript data object (JSON).");if("boolean"!==typeof e.repeatTableHeader)throw new Error("Invalid value for repeatTableHeader attribute (JSON).");if(!e.properties||!Array.isArray(e.properties))throw new Error("Invalid properties array for your JSON data.");e.properties=e.properties.map((function(t){return{field:"object"===o(t)?t.field:t,displayName:"object"===o(t)?t.displayName:t,columnSize:"object"===o(t)&&t.columnSize?t.columnSize+";":100/e.properties.length+"%;"}})),e.printableElement=document.createElement("div"),e.header&&Object(r["addHeader"])(e.printableElement,e),e.printableElement.innerHTML+=a(e),i["default"].send(e,t)}}},"./src/js/modal.js":
/*!*************************!*\
        !*** ./src/js/modal.js ***!
        \*************************/
/*! exports provided: default */
function(e,t,n){"use strict";n.r(t);var r={show:function(e){var t="font-family:sans-serif; display:table; text-align:center; font-weight:300; font-size:30px; left:0; top:0;position:fixed; z-index: 9990;color: #0460B5; width: 100%; height: 100%; background-color:rgba(255,255,255,.9);transition: opacity .3s ease;",n=document.createElement("div");n.setAttribute("style",t),n.setAttribute("id","printJS-Modal");var i=document.createElement("div");i.setAttribute("style","display:table-cell; vertical-align:middle; padding-bottom:100px;");var o=document.createElement("div");o.setAttribute("class","printClose"),o.setAttribute("id","printClose"),i.appendChild(o);var a=document.createElement("span");a.setAttribute("class","printSpinner"),i.appendChild(a);var l=document.createTextNode(e.modalMessage);i.appendChild(l),n.appendChild(i),document.getElementsByTagName("body")[0].appendChild(n),document.getElementById("printClose").addEventListener("click",(function(){r.close()}))},close:function(){var e=document.getElementById("printJS-Modal");e&&e.parentNode.removeChild(e)}};t["default"]=r},"./src/js/pdf.js":
/*!***********************!*\
        !*** ./src/js/pdf.js ***!
        \***********************/
/*! exports provided: default */
function(e,t,n){"use strict";n.r(t);var r=n(
/*! ./print */
"./src/js/print.js"),i=n(
/*! ./functions */
"./src/js/functions.js");function o(e,t,n){var i=new window.Blob([n],{type:"application/pdf"});i=window.URL.createObjectURL(i),t.setAttribute("src",i),r["default"].send(e,t)}t["default"]={print:function(e,t){if(e.base64){var n=Uint8Array.from(atob(e.printable),(function(e){return e.charCodeAt(0)}));o(e,t,n)}else{e.printable=/^(blob|http|\/\/)/i.test(e.printable)?e.printable:window.location.origin+("/"!==e.printable.charAt(0)?"/"+e.printable:e.printable);var r=new window.XMLHttpRequest;r.responseType="arraybuffer",r.addEventListener("error",(function(){Object(i["cleanUp"])(e),e.onError(r.statusText,r)})),r.addEventListener("load",(function(){if(-1===[200,201].indexOf(r.status))return Object(i["cleanUp"])(e),void e.onError(r.statusText,r);o(e,t,r.response)})),r.open("GET",e.printable,!0),r.send()}}}},"./src/js/print.js":
/*!*************************!*\
        !*** ./src/js/print.js ***!
        \*************************/
/*! exports provided: default */
function(e,t,n){"use strict";n.r(t);var r=n(
/*! ./browser */
"./src/js/browser.js"),i=n(
/*! ./functions */
"./src/js/functions.js"),o={send:function(e,t){document.getElementsByTagName("body")[0].appendChild(t);var n=document.getElementById(e.frameId);n.onload=function(){if("pdf"!==e.type){var t=n.contentWindow||n.contentDocument;if(t.document&&(t=t.document),t.body.appendChild(e.printableElement),"pdf"!==e.type&&e.style){var i=document.createElement("style");i.innerHTML=e.style,t.head.appendChild(i)}var o=t.getElementsByTagName("img");o.length>0?l(Array.from(o)).then((function(){return a(n,e)})):a(n,e)}else r["default"].isFirefox()?setTimeout((function(){return a(n,e)}),1e3):a(n,e)}}};function a(e,t){try{if(e.focus(),r["default"].isEdge()||r["default"].isIE())try{e.contentWindow.document.execCommand("print",!1,null)}catch(n){e.contentWindow.print()}else e.contentWindow.print()}catch(o){t.onError(o)}finally{r["default"].isFirefox()&&(e.style.visibility="hidden",e.style.left="-1px"),Object(i["cleanUp"])(t)}}function l(e){var t=e.map((function(e){if(e.src&&e.src!==window.location.href)return s(e)}));return Promise.all(t)}function s(e){return new Promise((function(t){var n=function n(){e&&"undefined"!==typeof e.naturalWidth&&0!==e.naturalWidth&&e.complete?t():setTimeout(n,500)};n()}))}t["default"]=o},"./src/js/raw-html.js":
/*!****************************!*\
        !*** ./src/js/raw-html.js ***!
        \****************************/
/*! exports provided: default */
function(e,t,n){"use strict";n.r(t);var r=n(
/*! ./print */
"./src/js/print.js");t["default"]={print:function(e,t){e.printableElement=document.createElement("div"),e.printableElement.setAttribute("style","width:100%"),e.printableElement.innerHTML=e.printable,r["default"].send(e,t)}}},"./src/sass/index.scss":
/*!*****************************!*\
        !*** ./src/sass/index.scss ***!
        \*****************************/
/*! no static exports found */
function(e,t,n){},0:
/*!****************************!*\
        !*** multi ./src/index.js ***!
        \****************************/
/*! no static exports found */
function(e,t,n){e.exports=n(
/*! ./src/index.js */
"./src/index.js")}})["default"]}))},61932:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return b}});var r=n(73396);const i={class:"view-container"},o={class:"content"},a=(0,r.Uk)("????????????"),l=(0,r.Uk)("????????????");function s(e,t,n,s,d,c){const u=(0,r.up)("el-button"),p=(0,r.up)("el-space"),f=(0,r.up)("el-collapse-item"),m=(0,r.up)("el-collapse");return(0,r.wg)(),(0,r.iD)("div",i,[(0,r.Wm)(m,{modelValue:s.activeNames,"onUpdate:modelValue":t[0]||(t[0]=e=>s.activeNames=e)},{default:(0,r.w5)((()=>[(0,r.Wm)(f,{title:"??????",name:"1"},{default:(0,r.w5)((()=>[(0,r._)("div",o,[(0,r.Wm)(p,null,{default:(0,r.w5)((()=>[(0,r.Wm)(u,{type:"primary",onClick:s.printTable},{default:(0,r.w5)((()=>[a])),_:1},8,["onClick"]),(0,r.Wm)(u,{type:"primary",onClick:s.printImage},{default:(0,r.w5)((()=>[l])),_:1},8,["onClick"])])),_:1})])])),_:1})])),_:1},8,["modelValue"])])}var d=n(44870),c=n(36801),u=n.n(c),p={setup(){const e=(0,d.iH)(["1"]),t=()=>{u()({printable:[{name:"ll",email:"123@gmail.com",phone:"123"},{name:"qq",email:"456@gmail.com",phone:"456"}],properties:["name","email","phone"],type:"json"})},n=()=>{u()({printable:["https://anncwb.github.io/anncwb/images/preview1.png","https://anncwb.github.io/anncwb/images/preview2.png"],type:"image",header:"Multiple Images",imageStyle:"width:100%;"})};return{activeNames:e,printTable:t,printImage:n}}},f=n(40089);const m=(0,f.Z)(p,[["render",s],["__scopeId","data-v-f7513818"]]);var b=m}}]);
//# sourceMappingURL=932.1b1552f0.js.map