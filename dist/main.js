(()=>{"use strict";var e={574:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(81),r=n.n(a),o=n(645),c=n.n(o)()(r());c.push([e.id,"*,*::before,*::after{\n    padding: 0;\n    margin:0;\n    box-sizing: border-box;\n}\n:root{\n    background-color: #1f1f1f;\n}\n.maincontainer{\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    background-color: #3e3e3e;\n    width: 90rem;\n    height:60rem;\n}\n.popup{\n    position: absolute;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: rgba(0, 0, 0, 0.6);\n    width: 100%;\n    height: 100%;\n}\n.popupinput{\n    display: flex;\n    flex-direction: column;\n    border-radius: 1rem;\n    background-color: #696868;\n    height: 50%;\n    width: 50%;\n    padding: 2rem;\n\n}\n.inputs{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    gap:3rem;\n    height:90%;\n    width: 100%;\n\n}\n.selection{\n    margin-right: 11rem;\n    align-self: center;\n    width: 10rem;\n    height: 1.5rem;\n}\n.inputs div{\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    height: 20%;\n    \n}\n.inputs .text{\n    height: 100%;\n    width: 70%;\n    font-size: 2rem;\n    text-align: center;\n    box-shadow: none;\n    border: none;\n    background-color: #b3b2b2;\n}\n\n.inputs .notes{\n    font-size:1rem;\n    height: 100%;\n    width: 70%;\n    text-align: center;\n    box-shadow: none;\n    border: none;\n    background-color: #b3b2b2;\n}\n.two .date{\n    font-size: 1rem;\n    text-align: center;\n    height:70%;\n    width: 25%;\n    background-color: #b3b2b2;\n    border: none;\n\n}\n.one button{\n    cursor: pointer;\n    border: none;\n    height:50%;\n    width: 15%;\n    font-size: 1rem;\n    background-color: rgb(244, 165, 165);\n    margin-right:2.5rem;\n}\n.radios{\n    font-size: 1.5rem;\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    height: 11%;\n    width: 100%;\n}\n.radios div label{\n    margin-right: 1rem;\n}\n.confirm{\n    cursor: pointer;\n    border: none;\n    height:100%;\n    width: 25%;\n    font-size: 1.5rem;\n    background-color: rgb(165, 244, 199);\n\n}\n",""]);const d=c},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",a=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),a&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),a&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,a,r,o){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(a)for(var d=0;d<this.length;d++){var i=this[d][0];null!=i&&(c[i]=!0)}for(var l=0;l<e.length;l++){var u=[].concat(e[l]);a&&c[u[0]]||(void 0!==o&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=o),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),r&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=r):u[4]="".concat(r)),t.push(u))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,a=0;a<t.length;a++)if(t[a].identifier===e){n=a;break}return n}function a(e,a){for(var o={},c=[],d=0;d<e.length;d++){var i=e[d],l=a.base?i[0]+a.base:i[0],u=o[l]||0,p="".concat(l," ").concat(u);o[l]=u+1;var s=n(p),m={css:i[1],media:i[2],sourceMap:i[3],supports:i[4],layer:i[5]};if(-1!==s)t[s].references++,t[s].updater(m);else{var v=r(m,a);a.byIndex=d,t.splice(d,0,{identifier:p,updater:v,references:1})}c.push(p)}return c}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var o=a(e=e||[],r=r||{});return function(e){e=e||[];for(var c=0;c<o.length;c++){var d=n(o[c]);t[d].references--}for(var i=a(e,r),l=0;l<o.length;l++){var u=n(o[l]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}o=i}}},569:e=>{var t={};e.exports=function(e,n){var a=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var a="";n.supports&&(a+="@supports (".concat(n.supports,") {")),n.media&&(a+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(a+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),a+=n.css,r&&(a+="}"),n.media&&(a+="}"),n.supports&&(a+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(a,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(a){var r=t[a];if(void 0!==r)return r.exports;var o=t[a]={id:a,exports:{}};return e[a](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0;var a={};(()=>{n.d(a,{Sl:()=>y,pb:()=>x,PR:()=>E,wq:()=>g});var e=n(379),t=n.n(e),r=n(795),o=n.n(r),c=n(569),d=n.n(c),i=n(565),l=n.n(i),u=n(216),p=n.n(u),s=n(589),m=n.n(s),v=n(574),f={};function h(e,t,n){let a=document.createElement("div"),r=document.createElement("div"),o=document.createElement("div"),c=document.createElement("div"),d=document.createElement("button"),i=document.createElement("div"),l=document.createElement("input"),u=document.createElement("input"),p=document.createElement("div"),s=document.createElement("input"),m=document.createElement("button"),v=document.createElement("div"),f=document.createElement("p"),h=document.createElement("div"),y=document.createElement("label"),x=document.createElement("input"),C=document.createElement("div"),N=document.createElement("label"),w=document.createElement("input"),k=document.createElement("div"),A=document.createElement("label"),L=document.createElement("input");u.setAttribute("type","date"),x.setAttribute("type","radio"),w.setAttribute("type","radio"),L.setAttribute("type","radio"),l.value=n.title,s.value=n.notes,u.value=n.date,a.className="popup",r.className="popupinput",o.className="inputs",l.className="text",s.className="text",s.className="notes",c.className="one",i.className="two",v.className="radios",u.className="date",m.className="confirm",d.textContent="Delete",f.textContent="Priority",y.textContent="Low",N.textContent="Med",A.textContent="High",m.textContent="Confirm",E.append(a),a.append(r),r.append(o),o.append(c),c.append(d),o.append(i),i.append(l),i.append(u),o.append(p),p.append(s),p.append(m),r.append(v),v.append(f),v.append(h),h.append(y),h.append(x),v.append(C),C.append(N),C.append(w),v.append(k),k.append(A),k.append(L),m.addEventListener("click",(()=>{!function(n,a,r,o){let c={header:n,title:a,notes:r,date:o,priority:"med",done:!1};g[e][t]=c}(n.header,l.value,s.value,u.value),b(e)})),d.addEventListener("click",(()=>{a.remove()}))}function b(e){x.innerHTML="";for(let t=0;t<g[e].length;t++){let n=document.createElement("div"),a=document.createElement("p"),r=document.createElement("div"),o=document.createElement("button"),c=document.createElement("input");o.dataset.num=t,o.textContent="Details",a.textContent=`${g[e][t].title}`,n.className="notetab",c.setAttribute("type","checkbox"),x.append(n),n.append(a),n.append(r),r.append(o),r.append(c),c.addEventListener("click",(()=>{!0===c.checked?n.style.backgroundColor="green":!1===c.checked&&(n.style.backgroundColor="")})),o.addEventListener("click",(t=>{let n=t.target.dataset.num;h(e,n,g[e][n])}))}}f.styleTagTransform=m(),f.setAttributes=l(),f.insert=d().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=p(),t()(v.Z,f),v.Z&&v.Z.locals&&v.Z.locals;let g=[];const E=document.querySelector(".maincontainer"),y=document.querySelector(".left"),x=document.querySelector(".todo");document.querySelector(".add").addEventListener("click",(()=>{!function(){let e=document.createElement("div"),t=document.createElement("div"),n=document.createElement("select"),a=document.createElement("option"),r=document.createElement("div"),o=document.createElement("div"),c=document.createElement("input"),d=document.createElement("div"),i=document.createElement("button"),l=document.createElement("div"),u=document.createElement("input"),p=document.createElement("input"),s=document.createElement("div"),m=document.createElement("input"),v=document.createElement("button"),f=document.createElement("div"),h=document.createElement("p"),x=document.createElement("div"),C=document.createElement("label"),N=document.createElement("input"),w=document.createElement("div"),k=document.createElement("label"),A=document.createElement("input"),L=document.createElement("div"),M=document.createElement("label"),S=document.createElement("input");p.setAttribute("type","date"),N.setAttribute("type","radio"),A.setAttribute("type","radio"),S.setAttribute("type","radio"),a.value="",c.placeholder="Header",u.placeholder="Title",m.placeholder="Notes",e.className="popup",t.className="popupinput",n.className="selection",r.className="inputs",c.className="text",d.className="text",u.className="text",m.className="text",m.className="notes",o.className="one",l.className="two",f.className="radios",p.className="date",v.className="confirm",a.textContent="Add to current header",i.textContent="Close",h.textContent="Priority",C.textContent="Low",k.textContent="Med",M.textContent="High",v.textContent="Confirm",E.append(e),e.append(t),t.append(r),t.prepend(n),n.append(a),r.append(o),o.append(c),o.append(i),r.append(l),l.append(u),l.append(p),r.append(s),s.append(m),s.append(v),t.append(f),f.append(h),f.append(x),x.append(C),x.append(N),f.append(w),w.append(k),w.append(A),f.append(L),L.append(M),L.append(S),v.addEventListener("click",(()=>{let e=c.value,t=u.value,a=m.value,r=p.value;""===n.value&&""!==c.value&&""==u.value?alert("Must input title"):""===n.value&&""!==c.value&&""!==u.value?function(e,t,a,r,o){let c={header:e,title:t,notes:a,date:r,priority:"med",done:!1,value:g.length};g.push([c]),function(e){let t=document.createElement("div");t.className="header",t.textContent=e.header,t.dataset.num=g.length-1,y.append(t),t.addEventListener("click",(e=>{b(e.target.dataset.num)}))}(c),function(e){let t=document.createElement("option");t.textContent=e.header,t.value=e.value,n.append(t)}(c)}(e,t,a,r):""===n.value&&""===c.value&&""===u.value?alert("Must input title and header"):""===n.value&&""===c.value?alert("Must include a header"):""!==n.value&&""===u.value?alert("Must have a title"):""!==n.value&&""!==u.value&&function(e,t,n,a,r){let o={header:g[e][0].header,title:t,notes:n,date:a,priority:"med",done:!1};g[e].push(o)}(n.value,t,a,r),c.value="",u.value="",m.value="",p.value=""})),n.addEventListener("change",(()=>{console.log(n.value),""!==n.value?(d.style.cssText="display:flex; justify-content:center; cursor :default",d.textContent=`${g[n.value][0].header}`,o.firstChild.remove(),o.prepend(d)):(o.firstChild.remove(),o.prepend(c))})),i.addEventListener("click",(()=>{e.remove()}))}()}))})()})();