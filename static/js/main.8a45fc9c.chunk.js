(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{3:function(n,o,e){n.exports=e(8)},8:function(n,o,e){"use strict";e.r(o);var t=e(0),i=e.n(t),r=e(2),c=e.n(r),a=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function s(n,o){navigator.serviceWorker.register(n).then(function(n){n.onupdatefound=function(){var e=n.installing;e.onstatechange=function(){"installed"===e.state&&(navigator.serviceWorker.controller?(console.log("New content is available; please refresh."),o.onUpdate&&o.onUpdate(n)):(console.log("Content is cached for offline use."),o.onSuccess&&o.onSuccess(n)))}}}).catch(function(n){console.error("Error during service worker registration:",n)})}c.a.render(i.a.createElement(function(){return i.a.createElement("p",null,"hello serafim")},null),document.getElementById("root")),function(n){if("serviceWorker"in navigator){if(new URL("/portfolio-page-fcc",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var o="".concat("/portfolio-page-fcc","/service-worker.js");a?(function(n,o){fetch(n).then(function(e){404===e.status||-1===e.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(n){n.unregister().then(function(){window.location.reload()})}):s(n,o)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(o,n),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):s(o,n)})}}()}},[[3,2,1]]]);
//# sourceMappingURL=main.8a45fc9c.chunk.js.map