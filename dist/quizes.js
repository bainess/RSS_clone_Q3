"use strict";(self.webpackChunkbainess_jsfe2022q3=self.webpackChunkbainess_jsfe2022q3||[]).push([[394],{783:(e,n,t)=>{var r=t(618),o=Object.create(null),i="undefined"==typeof document,c=Array.prototype.forEach;function a(){}function s(e,n){if(!n){if(!e.href)return;n=e.href.split("?")[0]}if(u(n)&&!1!==e.isLoaded&&n&&n.indexOf(".css")>-1){e.visited=!0;var t=e.cloneNode();t.isLoaded=!1,t.addEventListener("load",(function(){t.isLoaded||(t.isLoaded=!0,e.parentNode.removeChild(e))})),t.addEventListener("error",(function(){t.isLoaded||(t.isLoaded=!0,e.parentNode.removeChild(e))})),t.href="".concat(n,"?").concat(Date.now()),e.nextSibling?e.parentNode.insertBefore(t,e.nextSibling):e.parentNode.appendChild(t)}}function l(){var e=document.querySelectorAll("link");c.call(e,(function(e){!0!==e.visited&&s(e)}))}function u(e){return!!/^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(e)}e.exports=function(e,n){if(i)return console.log("no window.document found, will not HMR CSS"),a;var t,d,f=function(e){var n=o[e];if(!n){if(document.currentScript)n=document.currentScript.src;else{var t=document.getElementsByTagName("script"),i=t[t.length-1];i&&(n=i.src)}o[e]=n}return function(e){if(!n)return null;var t=n.split(/([^\\/]+)\.js$/),o=t&&t[1];return o&&e?e.split(",").map((function(e){var t=new RegExp("".concat(o,"\\.js$"),"g");return r(n.replace(t,"".concat(e.replace(/{fileName}/g,o),".css")))})):[n.replace(".js",".css")]}}(e);return t=function(){var e=f(n.filename),t=function(e){if(!e)return!1;var n=document.querySelectorAll("link"),t=!1;return c.call(n,(function(n){if(n.href){var o=function(e,n){var t;return e=r(e),n.some((function(r){e.indexOf(n)>-1&&(t=r)})),t}(n.href,e);u(o)&&!0!==n.visited&&o&&(s(n,o),t=!0)}})),t}(e);if(n.locals)return console.log("[HMR] Detected local css modules. Reload all css"),void l();t?console.log("[HMR] css reload %s",e.join(" ")):(console.log("[HMR] Reload all css"),l())},50,d=0,function(){var e=this,n=arguments,r=function(){return t.apply(e,n)};clearTimeout(d),d=setTimeout(r,50)}}},618:e=>{e.exports=function(e){if(e=e.trim(),/^data:/i.test(e))return e;var n=-1!==e.indexOf("//")?e.split("//")[0]+"//":"",t=e.replace(new RegExp(n,"i"),"").split("/"),r=t[0].toLowerCase().replace(/\.$/,"");return t[0]="",n+r+t.reduce((function(e,n){switch(n){case"..":e.pop();break;case".":break;default:e.push(n)}return e}),[]).join("/")}},974:(e,n,t)=>{var r=t(783)(e.id,{locals:!1});e.hot.dispose(r),e.hot.accept(void 0,r)}},e=>{e(e.s=974)}]);