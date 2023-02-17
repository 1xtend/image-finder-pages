/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@pnotify/core/dist/PNotify.js":
/*!****************************************************!*\
  !*** ./node_modules/@pnotify/core/dist/PNotify.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

!function(t,e){ true?e(exports):0}(this,(function(t){"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function o(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function u(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function f(t,e,n){return(f=u()?Reflect.construct:function(t,e,n){var i=[null];i.push.apply(i,e);var o=new(Function.bind.apply(t,i));return n&&l(o,n.prototype),o}).apply(null,arguments)}function d(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function h(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?d(t):e}function p(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],i=!0,o=!1,r=void 0;try{for(var s,a=t[Symbol.iterator]();!(i=(s=a.next()).done)&&(n.push(s.value),!e||n.length!==e);i=!0);}catch(t){o=!0,r=t}finally{try{i||null==a.return||a.return()}finally{if(o)throw r}}return n}(t,e)||v(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(t){return function(t){if(Array.isArray(t))return y(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||v(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(t,e){if(t){if("string"==typeof t)return y(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?y(t,e):void 0}}function y(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function g(){}function $(t,e){for(var n in e)t[n]=e[n];return t}function _(t){return t()}function k(){return Object.create(null)}function x(t){t.forEach(_)}function b(t){return"function"==typeof t}function w(t,n){return t!=t?n==n:t!==n||t&&"object"===e(t)||"function"==typeof t}function O(t,e){t.appendChild(e)}function C(t,e,n){t.insertBefore(e,n||null)}function M(t){t.parentNode.removeChild(t)}function T(t){return document.createElement(t)}function H(t){return document.createTextNode(t)}function E(){return H(" ")}function S(){return H("")}function N(t,e,n,i){return t.addEventListener(e,n,i),function(){return t.removeEventListener(e,n,i)}}function P(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function A(t){return Array.from(t.childNodes)}function L(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}var j,R=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;n(this,t),this.a=e,this.e=this.n=null}return o(t,[{key:"m",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;this.e||(this.e=T(e.nodeName),this.t=e,this.h(t)),this.i(n)}},{key:"h",value:function(t){this.e.innerHTML=t,this.n=Array.from(this.e.childNodes)}},{key:"i",value:function(t){for(var e=0;e<this.n.length;e+=1)C(this.t,this.n[e],t)}},{key:"p",value:function(t){this.d(),this.h(t),this.i(this.a)}},{key:"d",value:function(){this.n.forEach(M)}}]),t}();function W(t){j=t}function I(){if(!j)throw new Error("Function called outside component initialization");return j}function D(){var t=I();return function(e,n){var i=t.$$.callbacks[e];if(i){var o=function(t,e){var n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(e,n);i.slice().forEach((function(e){e.call(t,o)}))}}}function F(t,e){var n=t.$$.callbacks[e.type];n&&n.slice().forEach((function(t){return t(e)}))}var q=[],B=[],z=[],U=[],G=Promise.resolve(),J=!1;function K(){J||(J=!0,G.then(Z))}function Q(){return K(),G}function V(t){z.push(t)}var X=!1,Y=new Set;function Z(){if(!X){X=!0;do{for(var t=0;t<q.length;t+=1){var e=q[t];W(e),tt(e.$$)}for(W(null),q.length=0;B.length;)B.pop()();for(var n=0;n<z.length;n+=1){var i=z[n];Y.has(i)||(Y.add(i),i())}z.length=0}while(q.length);for(;U.length;)U.pop()();J=!1,X=!1,Y.clear()}}function tt(t){if(null!==t.fragment){t.update(),x(t.before_update);var e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(V)}}var et,nt=new Set;function it(){et={r:0,c:[],p:et}}function ot(){et.r||x(et.c),et=et.p}function rt(t,e){t&&t.i&&(nt.delete(t),t.i(e))}function st(t,e,n,i){if(t&&t.o){if(nt.has(t))return;nt.add(t),et.c.push((function(){nt.delete(t),i&&(n&&t.d(1),i())})),t.o(e)}}var at="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:__webpack_require__.g;function ct(t,e){st(t,1,1,(function(){e.delete(t.key)}))}function lt(t,e,n,i,o,r,s,a,c,l,u,f){for(var d=t.length,h=r.length,p=d,m={};p--;)m[t[p].key]=p;var v=[],y=new Map,g=new Map;for(p=h;p--;){var $=f(o,r,p),_=n($),k=s.get(_);k?i&&k.p($,e):(k=l(_,$)).c(),y.set(_,v[p]=k),_ in m&&g.set(_,Math.abs(p-m[_]))}var x=new Set,b=new Set;function w(t){rt(t,1),t.m(a,u),s.set(t.key,t),u=t.first,h--}for(;d&&h;){var O=v[h-1],C=t[d-1],M=O.key,T=C.key;O===C?(u=O.first,d--,h--):y.has(T)?!s.has(M)||x.has(M)?w(O):b.has(T)?d--:g.get(M)>g.get(T)?(b.add(M),w(O)):(x.add(T),d--):(c(C,s),d--)}for(;d--;){var H=t[d];y.has(H.key)||c(H,s)}for(;h;)w(v[h-1]);return v}function ut(t,e){for(var n={},i={},o={$$scope:1},r=t.length;r--;){var s=t[r],a=e[r];if(a){for(var c in s)c in a||(i[c]=1);for(var l in a)o[l]||(n[l]=a[l],o[l]=1);t[r]=a}else for(var u in s)o[u]=1}for(var f in i)f in n||(n[f]=void 0);return n}function ft(t){return"object"===e(t)&&null!==t?t:{}}function dt(t){t&&t.c()}function ht(t,e,n){var i=t.$$,o=i.fragment,r=i.on_mount,s=i.on_destroy,a=i.after_update;o&&o.m(e,n),V((function(){var e=r.map(_).filter(b);s?s.push.apply(s,m(e)):x(e),t.$$.on_mount=[]})),a.forEach(V)}function pt(t,e){var n=t.$$;null!==n.fragment&&(x(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function mt(t,e){-1===t.$$.dirty[0]&&(q.push(t),K(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}var vt=function(){function t(){n(this,t)}return o(t,[{key:"$destroy",value:function(){pt(this,1),this.$destroy=g}},{key:"$on",value:function(t,e){var n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),function(){var t=n.indexOf(e);-1!==t&&n.splice(t,1)}}},{key:"$set",value:function(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}]),t}(),yt=function(){function t(e){if(n(this,t),Object.assign(this,{dir1:null,dir2:null,firstpos1:null,firstpos2:null,spacing1:25,spacing2:25,push:"bottom",maxOpen:1,maxStrategy:"wait",maxClosureCausesWait:!0,modal:"ish",modalishFlash:!0,overlayClose:!0,overlayClosesPinned:!1,positioned:!0,context:window&&document.body||null},e),"ish"===this.modal&&1!==this.maxOpen)throw new Error("A modalish stack must have a maxOpen value of 1.");if("ish"===this.modal&&!this.dir1)throw new Error("A modalish stack must have a direction.");if("top"===this.push&&"ish"===this.modal&&"close"!==this.maxStrategy)throw new Error("A modalish stack that pushes to the top must use the close maxStrategy.");this._noticeHead={notice:null,prev:null,next:null},this._noticeTail={notice:null,prev:this._noticeHead,next:null},this._noticeHead.next=this._noticeTail,this._noticeMap=new WeakMap,this._length=0,this._addpos2=0,this._animation=!0,this._posTimer=null,this._openNotices=0,this._listener=null,this._overlayOpen=!1,this._overlayInserted=!1,this._collapsingModalState=!1,this._leader=null,this._leaderOff=null,this._masking=null,this._maskingOff=null,this._swapping=!1,this._callbacks={}}return o(t,[{key:"forEach",value:function(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=n.start,o=void 0===i?"oldest":i,r=n.dir,s=void 0===r?"newer":r,a=n.skipModuleHandled,c=void 0!==a&&a;if("head"===o||"newest"===o&&"top"===this.push||"oldest"===o&&"bottom"===this.push)e=this._noticeHead.next;else if("tail"===o||"newest"===o&&"bottom"===this.push||"oldest"===o&&"top"===this.push)e=this._noticeTail.prev;else{if(!this._noticeMap.has(o))throw new Error("Invalid start param.");e=this._noticeMap.get(o)}for(;e.notice;){var l=e.notice;if("prev"===s||"top"===this.push&&"newer"===s||"bottom"===this.push&&"older"===s)e=e.prev;else{if(!("next"===s||"top"===this.push&&"older"===s||"bottom"===this.push&&"newer"===s))throw new Error("Invalid dir param.");e=e.next}if(!(c&&l.getModuleHandled()||!1!==t(l)))break}}},{key:"close",value:function(t){this.forEach((function(e){return e.close(t,!1,!1)}))}},{key:"open",value:function(t){this.forEach((function(e){return e.open(t)}))}},{key:"openLast",value:function(){this.forEach((function(t){if(-1===["opening","open","waiting"].indexOf(t.getState()))return t.open(),!1}),{start:"newest",dir:"older"})}},{key:"swap",value:function(t,e){var n=this,i=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return-1===["open","opening","closing"].indexOf(t.getState())?Promise.reject():(this._swapping=e,t.close(i,!1,o).then((function(){return e.open(i)})).finally((function(){n._swapping=!1})))}},{key:"on",value:function(t,e){var n=this;return t in this._callbacks||(this._callbacks[t]=[]),this._callbacks[t].push(e),function(){n._callbacks[t].splice(n._callbacks[t].indexOf(e),1)}}},{key:"fire",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e.stack=this,t in this._callbacks&&this._callbacks[t].forEach((function(t){return t(e)}))}},{key:"position",value:function(){var t=this;this.positioned&&this._length>0?(this.fire("beforePosition"),this._resetPositionData(),this.forEach((function(e){t._positionNotice(e)}),{start:"head",dir:"next",skipModuleHandled:!0}),this.fire("afterPosition")):(delete this._nextpos1,delete this._nextpos2)}},{key:"queuePosition",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10;this._posTimer&&clearTimeout(this._posTimer),this._posTimer=setTimeout((function(){return t.position()}),e)}},{key:"_resetPositionData",value:function(){this._nextpos1=this.firstpos1,this._nextpos2=this.firstpos2,this._addpos2=0}},{key:"_positionNotice",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t===this._masking;if(this.positioned){var n=t.refs.elem;if(n&&(n.classList.contains("pnotify-in")||n.classList.contains("pnotify-initial")||e)){var i=[this.firstpos1,this.firstpos2,this._nextpos1,this._nextpos2,this._addpos2],o=i[0],r=i[1],s=i[2],a=i[3],c=i[4];n.getBoundingClientRect(),!this._animation||e||this._collapsingModalState?t._setMoveClass(""):t._setMoveClass("pnotify-move");var l,u=this.context===document.body?window.innerHeight:this.context.scrollHeight,f=this.context===document.body?window.innerWidth:this.context.scrollWidth;if(this.dir1){var d;switch(l={down:"top",up:"bottom",left:"right",right:"left"}[this.dir1],this.dir1){case"down":d=n.offsetTop;break;case"up":d=u-n.scrollHeight-n.offsetTop;break;case"left":d=f-n.scrollWidth-n.offsetLeft;break;case"right":d=n.offsetLeft}null==o&&(s=o=d)}if(this.dir1&&this.dir2){var h,p={down:"top",up:"bottom",left:"right",right:"left"}[this.dir2];switch(this.dir2){case"down":h=n.offsetTop;break;case"up":h=u-n.scrollHeight-n.offsetTop;break;case"left":h=f-n.scrollWidth-n.offsetLeft;break;case"right":h=n.offsetLeft}if(null==r&&(a=r=h),!e){var m=s+n.offsetHeight+this.spacing1,v=s+n.offsetWidth+this.spacing1;(("down"===this.dir1||"up"===this.dir1)&&m>u||("left"===this.dir1||"right"===this.dir1)&&v>f)&&(s=o,a+=c+this.spacing2,c=0)}switch(null!=a&&(n.style[p]="".concat(a,"px"),this._animation||n.style[p]),this.dir2){case"down":case"up":n.offsetHeight+(parseFloat(n.style.marginTop,10)||0)+(parseFloat(n.style.marginBottom,10)||0)>c&&(c=n.offsetHeight);break;case"left":case"right":n.offsetWidth+(parseFloat(n.style.marginLeft,10)||0)+(parseFloat(n.style.marginRight,10)||0)>c&&(c=n.offsetWidth)}}else if(this.dir1){var y,g;switch(this.dir1){case"down":case"up":g=["left","right"],y=this.context.scrollWidth/2-n.offsetWidth/2;break;case"left":case"right":g=["top","bottom"],y=u/2-n.offsetHeight/2}n.style[g[0]]="".concat(y,"px"),n.style[g[1]]="auto",this._animation||n.style[g[0]]}if(this.dir1)switch(null!=s&&(n.style[l]="".concat(s,"px"),this._animation||n.style[l]),this.dir1){case"down":case"up":s+=n.offsetHeight+this.spacing1;break;case"left":case"right":s+=n.offsetWidth+this.spacing1}else{var $=f/2-n.offsetWidth/2,_=u/2-n.offsetHeight/2;n.style.left="".concat($,"px"),n.style.top="".concat(_,"px"),this._animation||n.style.left}e||(this.firstpos1=o,this.firstpos2=r,this._nextpos1=s,this._nextpos2=a,this._addpos2=c)}}}},{key:"_addNotice",value:function(t){var e=this;this.fire("beforeAddNotice",{notice:t});var n=function(){if(e.fire("beforeOpenNotice",{notice:t}),t.getModuleHandled())e.fire("afterOpenNotice",{notice:t});else{if(e._openNotices++,("ish"!==e.modal||!e._overlayOpen)&&e.maxOpen!==1/0&&e._openNotices>e.maxOpen&&"close"===e.maxStrategy){var n=e._openNotices-e.maxOpen;e.forEach((function(t){if(-1!==["opening","open"].indexOf(t.getState()))return t.close(!1,!1,e.maxClosureCausesWait),t===e._leader&&e._setLeader(null),!!--n}))}!0===e.modal&&e._insertOverlay(),"ish"!==e.modal||e._leader&&-1!==["opening","open","closing"].indexOf(e._leader.getState())||e._setLeader(t),"ish"===e.modal&&e._overlayOpen&&t._preventTimerClose(!0),e.fire("afterOpenNotice",{notice:t})}},i={notice:t,prev:null,next:null,beforeOpenOff:t.on("pnotify:beforeOpen",n),afterCloseOff:t.on("pnotify:afterClose",(function(){if(e.fire("beforeCloseNotice",{notice:t}),t.getModuleHandled())e.fire("afterCloseNotice",{notice:t});else{if(e._openNotices--,"ish"===e.modal&&t===e._leader&&(e._setLeader(null),e._masking&&e._setMasking(null)),!e._swapping&&e.maxOpen!==1/0&&e._openNotices<e.maxOpen){var n=!1,i=function(i){if(i!==t&&"waiting"===i.getState()&&(i.open().catch((function(){})),e._openNotices>=e.maxOpen))return n=!0,!1};"wait"===e.maxStrategy?(e.forEach(i,{start:t,dir:"next"}),n||e.forEach(i,{start:t,dir:"prev"})):"close"===e.maxStrategy&&e.maxClosureCausesWait&&(e.forEach(i,{start:t,dir:"older"}),n||e.forEach(i,{start:t,dir:"newer"}))}e._openNotices<=0?(e._openNotices=0,e._resetPositionData(),e._overlayOpen&&!e._swapping&&e._removeOverlay()):e._collapsingModalState||e.queuePosition(0),e.fire("afterCloseNotice",{notice:t})}}))};if("top"===this.push?(i.next=this._noticeHead.next,i.prev=this._noticeHead,i.next.prev=i,i.prev.next=i):(i.prev=this._noticeTail.prev,i.next=this._noticeTail,i.prev.next=i,i.next.prev=i),this._noticeMap.set(t,i),this._length++,this._listener||(this._listener=function(){return e.position()},this.context.addEventListener("pnotify:position",this._listener)),-1!==["open","opening","closing"].indexOf(t.getState()))n();else if("ish"===this.modal&&this.modalishFlash&&this._shouldNoticeWait(t))var o=t.on("pnotify:mount",(function(){o(),t._setMasking(!0,!1,(function(){t._setMasking(!1)})),e._resetPositionData(),e._positionNotice(e._leader),window.requestAnimationFrame((function(){e._positionNotice(t,!0)}))}));this.fire("afterAddNotice",{notice:t})}},{key:"_removeNotice",value:function(t){if(this._noticeMap.has(t)){this.fire("beforeRemoveNotice",{notice:t});var e=this._noticeMap.get(t);this._leader===t&&this._setLeader(null),this._masking===t&&this._setMasking(null),e.prev.next=e.next,e.next.prev=e.prev,e.prev=null,e.next=null,e.beforeOpenOff(),e.beforeOpenOff=null,e.afterCloseOff(),e.afterCloseOff=null,this._noticeMap.delete(t),this._length--,!this._length&&this._listener&&(this.context.removeEventListener("pnotify:position",this._listener),this._listener=null),!this._length&&this._overlayOpen&&this._removeOverlay(),-1!==["open","opening","closing"].indexOf(t.getState())&&this._handleNoticeClosed(t),this.fire("afterRemoveNotice",{notice:t})}}},{key:"_setLeader",value:function(t){var e=this;if(this.fire("beforeSetLeader",{leader:t}),this._leaderOff&&(this._leaderOff(),this._leaderOff=null),this._leader=t,this._leader){var n,i=function(){var t=null;e._overlayOpen&&(e._collapsingModalState=!0,e.forEach((function(n){n._preventTimerClose(!1),n!==e._leader&&-1!==["opening","open"].indexOf(n.getState())&&(t||(t=n),n.close(n===t,!1,!0))}),{start:e._leader,dir:"next",skipModuleHandled:!0}),e._removeOverlay()),o&&(clearTimeout(o),o=null),e.forEach((function(n){if(n!==e._leader)return"waiting"===n.getState()||n===t?(e._setMasking(n,!!t),!1):void 0}),{start:e._leader,dir:"next",skipModuleHandled:!0})},o=null,r=function(){o&&(clearTimeout(o),o=null),o=setTimeout((function(){o=null,e._setMasking(null)}),750)};this._leaderOff=(n=[this._leader.on("mouseenter",i),this._leader.on("focusin",i),this._leader.on("mouseleave",r),this._leader.on("focusout",r)],function(){return n.map((function(t){return t()}))}),this.fire("afterSetLeader",{leader:t})}else this.fire("afterSetLeader",{leader:t})}},{key:"_setMasking",value:function(t,e){var n=this;if(this._masking){if(this._masking===t)return;this._masking._setMasking(!1,e)}if(this._maskingOff&&(this._maskingOff(),this._maskingOff=null),this._masking=t,this._masking){this._resetPositionData(),this._leader&&this._positionNotice(this._leader),this._masking._setMasking(!0,e),window.requestAnimationFrame((function(){n._masking&&n._positionNotice(n._masking)}));var i,o=function(){"ish"===n.modal&&(n._insertOverlay(),n._setMasking(null,!0),n.forEach((function(t){t._preventTimerClose(!0),"waiting"===t.getState()&&t.open()}),{start:n._leader,dir:"next",skipModuleHandled:!0}))};this._maskingOff=(i=[this._masking.on("mouseenter",o),this._masking.on("focusin",o)],function(){return i.map((function(t){return t()}))})}}},{key:"_shouldNoticeWait",value:function(t){return this._swapping!==t&&!("ish"===this.modal&&this._overlayOpen)&&this.maxOpen!==1/0&&this._openNotices>=this.maxOpen&&"wait"===this.maxStrategy}},{key:"_insertOverlay",value:function(){var t=this;this._overlay||(this._overlay=document.createElement("div"),this._overlay.classList.add("pnotify-modal-overlay"),this.dir1&&this._overlay.classList.add("pnotify-modal-overlay-".concat(this.dir1)),this.overlayClose&&this._overlay.classList.add("pnotify-modal-overlay-closes"),this.context!==document.body&&(this._overlay.style.height="".concat(this.context.scrollHeight,"px"),this._overlay.style.width="".concat(this.context.scrollWidth,"px")),this._overlay.addEventListener("click",(function(e){if(t.overlayClose){if(t.fire("overlayClose",{clickEvent:e}),e.defaultPrevented)return;t._leader&&t._setLeader(null),t.forEach((function(e){-1===["closed","closing","waiting"].indexOf(e.getState())&&(e.hide||t.overlayClosesPinned?e.close():e.hide||"ish"!==t.modal||(t._leader?e.close(!1,!1,!0):t._setLeader(e)))}),{skipModuleHandled:!0}),t._overlayOpen&&t._removeOverlay()}}))),this._overlay.parentNode!==this.context&&(this.fire("beforeAddOverlay"),this._overlay.classList.remove("pnotify-modal-overlay-in"),this._overlay=this.context.insertBefore(this._overlay,this.context.firstChild),this._overlayOpen=!0,this._overlayInserted=!0,window.requestAnimationFrame((function(){t._overlay.classList.add("pnotify-modal-overlay-in"),t.fire("afterAddOverlay")}))),this._collapsingModalState=!1}},{key:"_removeOverlay",value:function(){var t=this;this._overlay.parentNode&&(this.fire("beforeRemoveOverlay"),this._overlay.classList.remove("pnotify-modal-overlay-in"),this._overlayOpen=!1,setTimeout((function(){t._overlayInserted=!1,t._overlay.parentNode&&(t._overlay.parentNode.removeChild(t._overlay),t.fire("afterRemoveOverlay"))}),250),setTimeout((function(){t._collapsingModalState=!1}),400))}},{key:"notices",get:function(){var t=[];return this.forEach((function(e){return t.push(e)})),t}},{key:"length",get:function(){return this._length}},{key:"leader",get:function(){return this._leader}}]),t}(),gt=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return f(Jt,e)};var $t=at.Map;function _t(t,e,n){var i=t.slice();return i[109]=e[n][0],i[110]=e[n][1],i}function kt(t,e,n){var i=t.slice();return i[109]=e[n][0],i[110]=e[n][1],i}function xt(t,e,n){var i=t.slice();return i[109]=e[n][0],i[110]=e[n][1],i}function bt(t,e,n){var i=t.slice();return i[109]=e[n][0],i[110]=e[n][1],i}function wt(t,e){var n,i,o,r,s=[{self:e[42]},e[110]],a=e[109].default;function c(t){for(var e={},n=0;n<s.length;n+=1)e=$(e,s[n]);return{props:e}}return a&&(i=new a(c())),{key:t,first:null,c:function(){n=S(),i&&dt(i.$$.fragment),o=S(),this.first=n},m:function(t,e){C(t,n,e),i&&ht(i,t,e),C(t,o,e),r=!0},p:function(t,e){var n=2176&e[1]?ut(s,[2048&e[1]&&{self:t[42]},128&e[1]&&ft(t[110])]):{};if(a!==(a=t[109].default)){if(i){it();var r=i;st(r.$$.fragment,1,0,(function(){pt(r,1)})),ot()}a?(dt((i=new a(c())).$$.fragment),rt(i.$$.fragment,1),ht(i,o.parentNode,o)):i=null}else a&&i.$set(n)},i:function(t){r||(i&&rt(i.$$.fragment,t),r=!0)},o:function(t){i&&st(i.$$.fragment,t),r=!1},d:function(t){t&&M(n),t&&M(o),i&&pt(i,t)}}}function Ot(t){var e,n,i,o,r,s;return{c:function(){e=T("div"),P(n=T("span"),"class",t[22]("closer")),P(e,"class",i="pnotify-closer ".concat(t[21]("closer")," ").concat(t[17]&&!t[26]||t[28]?"pnotify-hidden":"")),P(e,"role","button"),P(e,"tabindex","0"),P(e,"title",o=t[20].close)},m:function(i,o){C(i,e,o),O(e,n),r||(s=N(e,"click",t[81]),r=!0)},p:function(t,n){335675392&n[0]&&i!==(i="pnotify-closer ".concat(t[21]("closer")," ").concat(t[17]&&!t[26]||t[28]?"pnotify-hidden":""))&&P(e,"class",i),1048576&n[0]&&o!==(o=t[20].close)&&P(e,"title",o)},d:function(t){t&&M(e),r=!1,s()}}}function Ct(t){var e,n,i,o,r,s,a,c;return{c:function(){e=T("div"),P(n=T("span"),"class",i="".concat(t[22]("sticker")," ").concat(t[3]?t[22]("unstuck"):t[22]("stuck"))),P(e,"class",o="pnotify-sticker ".concat(t[21]("sticker")," ").concat(t[19]&&!t[26]||t[28]?"pnotify-hidden":"")),P(e,"role","button"),P(e,"aria-pressed",r=!t[3]),P(e,"tabindex","0"),P(e,"title",s=t[3]?t[20].stick:t[20].unstick)},m:function(i,o){C(i,e,o),O(e,n),a||(c=N(e,"click",t[82]),a=!0)},p:function(t,a){8&a[0]&&i!==(i="".concat(t[22]("sticker")," ").concat(t[3]?t[22]("unstuck"):t[22]("stuck")))&&P(n,"class",i),336068608&a[0]&&o!==(o="pnotify-sticker ".concat(t[21]("sticker")," ").concat(t[19]&&!t[26]||t[28]?"pnotify-hidden":""))&&P(e,"class",o),8&a[0]&&r!==(r=!t[3])&&P(e,"aria-pressed",r),1048584&a[0]&&s!==(s=t[3]?t[20].stick:t[20].unstick)&&P(e,"title",s)},d:function(t){t&&M(e),a=!1,c()}}}function Mt(t){var e,n,i;return{c:function(){e=T("div"),P(n=T("span"),"class",i=!0===t[13]?t[22](t[4]):t[13]),P(e,"class","pnotify-icon ".concat(t[21]("icon")))},m:function(i,o){C(i,e,o),O(e,n),t[83](e)},p:function(t,e){8208&e[0]&&i!==(i=!0===t[13]?t[22](t[4]):t[13])&&P(n,"class",i)},d:function(n){n&&M(e),t[83](null)}}}function Tt(t,e){var n,i,o,r,s=[{self:e[42]},e[110]],a=e[109].default;function c(t){for(var e={},n=0;n<s.length;n+=1)e=$(e,s[n]);return{props:e}}return a&&(i=new a(c())),{key:t,first:null,c:function(){n=S(),i&&dt(i.$$.fragment),o=S(),this.first=n},m:function(t,e){C(t,n,e),i&&ht(i,t,e),C(t,o,e),r=!0},p:function(t,e){var n=2304&e[1]?ut(s,[2048&e[1]&&{self:t[42]},256&e[1]&&ft(t[110])]):{};if(a!==(a=t[109].default)){if(i){it();var r=i;st(r.$$.fragment,1,0,(function(){pt(r,1)})),ot()}a?(dt((i=new a(c())).$$.fragment),rt(i.$$.fragment,1),ht(i,o.parentNode,o)):i=null}else a&&i.$set(n)},i:function(t){r||(i&&rt(i.$$.fragment,t),r=!0)},o:function(t){i&&st(i.$$.fragment,t),r=!1},d:function(t){t&&M(n),t&&M(o),i&&pt(i,t)}}}function Ht(t){var e,n=!t[34]&&Et(t);return{c:function(){e=T("div"),n&&n.c(),P(e,"class","pnotify-title ".concat(t[21]("title")))},m:function(i,o){C(i,e,o),n&&n.m(e,null),t[84](e)},p:function(t,i){t[34]?n&&(n.d(1),n=null):n?n.p(t,i):((n=Et(t)).c(),n.m(e,null))},d:function(i){i&&M(e),n&&n.d(),t[84](null)}}}function Et(t){var e;function n(t,e){return t[6]?Nt:St}var i=n(t),o=i(t);return{c:function(){o.c(),e=S()},m:function(t,n){o.m(t,n),C(t,e,n)},p:function(t,r){i===(i=n(t))&&o?o.p(t,r):(o.d(1),(o=i(t))&&(o.c(),o.m(e.parentNode,e)))},d:function(t){o.d(t),t&&M(e)}}}function St(t){var e,n;return{c:function(){e=T("span"),n=H(t[5]),P(e,"class","pnotify-pre-line")},m:function(t,i){C(t,e,i),O(e,n)},p:function(t,e){32&e[0]&&L(n,t[5])},d:function(t){t&&M(e)}}}function Nt(t){var e,n;return{c:function(){n=S(),e=new R(n)},m:function(i,o){e.m(t[5],i,o),C(i,n,o)},p:function(t,n){32&n[0]&&e.p(t[5])},d:function(t){t&&M(n),t&&e.d()}}}function Pt(t){var e,n,i=!t[35]&&At(t);return{c:function(){e=T("div"),i&&i.c(),P(e,"class",n="pnotify-text ".concat(t[21]("text")," ").concat(""===t[33]?"":"pnotify-text-with-max-height")),P(e,"style",t[33]),P(e,"role","alert")},m:function(n,o){C(n,e,o),i&&i.m(e,null),t[85](e)},p:function(t,o){t[35]?i&&(i.d(1),i=null):i?i.p(t,o):((i=At(t)).c(),i.m(e,null)),4&o[1]&&n!==(n="pnotify-text ".concat(t[21]("text")," ").concat(""===t[33]?"":"pnotify-text-with-max-height"))&&P(e,"class",n),4&o[1]&&P(e,"style",t[33])},d:function(n){n&&M(e),i&&i.d(),t[85](null)}}}function At(t){var e;function n(t,e){return t[8]?jt:Lt}var i=n(t),o=i(t);return{c:function(){o.c(),e=S()},m:function(t,n){o.m(t,n),C(t,e,n)},p:function(t,r){i===(i=n(t))&&o?o.p(t,r):(o.d(1),(o=i(t))&&(o.c(),o.m(e.parentNode,e)))},d:function(t){o.d(t),t&&M(e)}}}function Lt(t){var e,n;return{c:function(){e=T("span"),n=H(t[7]),P(e,"class","pnotify-pre-line")},m:function(t,i){C(t,e,i),O(e,n)},p:function(t,e){128&e[0]&&L(n,t[7])},d:function(t){t&&M(e)}}}function jt(t){var e,n;return{c:function(){n=S(),e=new R(n)},m:function(i,o){e.m(t[7],i,o),C(i,n,o)},p:function(t,n){128&n[0]&&e.p(t[7])},d:function(t){t&&M(n),t&&e.d()}}}function Rt(t,e){var n,i,o,r,s=[{self:e[42]},e[110]],a=e[109].default;function c(t){for(var e={},n=0;n<s.length;n+=1)e=$(e,s[n]);return{props:e}}return a&&(i=new a(c())),{key:t,first:null,c:function(){n=S(),i&&dt(i.$$.fragment),o=S(),this.first=n},m:function(t,e){C(t,n,e),i&&ht(i,t,e),C(t,o,e),r=!0},p:function(t,e){var n=2560&e[1]?ut(s,[2048&e[1]&&{self:t[42]},512&e[1]&&ft(t[110])]):{};if(a!==(a=t[109].default)){if(i){it();var r=i;st(r.$$.fragment,1,0,(function(){pt(r,1)})),ot()}a?(dt((i=new a(c())).$$.fragment),rt(i.$$.fragment,1),ht(i,o.parentNode,o)):i=null}else a&&i.$set(n)},i:function(t){r||(i&&rt(i.$$.fragment,t),r=!0)},o:function(t){i&&st(i.$$.fragment,t),r=!1},d:function(t){t&&M(n),t&&M(o),i&&pt(i,t)}}}function Wt(t,e){var n,i,o,r,s=[{self:e[42]},e[110]],a=e[109].default;function c(t){for(var e={},n=0;n<s.length;n+=1)e=$(e,s[n]);return{props:e}}return a&&(i=new a(c())),{key:t,first:null,c:function(){n=S(),i&&dt(i.$$.fragment),o=S(),this.first=n},m:function(t,e){C(t,n,e),i&&ht(i,t,e),C(t,o,e),r=!0},p:function(t,e){var n=3072&e[1]?ut(s,[2048&e[1]&&{self:t[42]},1024&e[1]&&ft(t[110])]):{};if(a!==(a=t[109].default)){if(i){it();var r=i;st(r.$$.fragment,1,0,(function(){pt(r,1)})),ot()}a?(dt((i=new a(c())).$$.fragment),rt(i.$$.fragment,1),ht(i,o.parentNode,o)):i=null}else a&&i.$set(n)},i:function(t){r||(i&&rt(i.$$.fragment,t),r=!0)},o:function(t){i&&st(i.$$.fragment,t),r=!1},d:function(t){t&&M(n),t&&M(o),i&&pt(i,t)}}}function It(t){for(var e,n,i,o,r,s,a,c,l,u,f,d,h,p,m,v,y,$=[],_=new $t,k=[],w=new $t,H=[],S=new $t,A=[],L=new $t,j=t[38],R=function(t){return t[109]},W=0;W<j.length;W+=1){var I=bt(t,j,W),D=R(I);_.set(D,$[W]=wt(D,I))}for(var F=t[16]&&!t[36]&&Ot(t),q=t[18]&&!t[36]&&Ct(t),B=!1!==t[13]&&Mt(t),z=t[39],U=function(t){return t[109]},G=0;G<z.length;G+=1){var J=xt(t,z,G),K=U(J);w.set(K,k[G]=Tt(K,J))}for(var Q=!1!==t[5]&&Ht(t),V=!1!==t[7]&&Pt(t),X=t[40],Y=function(t){return t[109]},Z=0;Z<X.length;Z+=1){var tt=kt(t,X,Z),et=Y(tt);S.set(et,H[Z]=Rt(et,tt))}for(var nt=t[41],at=function(t){return t[109]},ut=0;ut<nt.length;ut+=1){var ft=_t(t,nt,ut),dt=at(ft);L.set(dt,A[ut]=Wt(dt,ft))}return{c:function(){e=T("div"),n=T("div");for(var m=0;m<$.length;m+=1)$[m].c();i=E(),F&&F.c(),o=E(),q&&q.c(),r=E(),B&&B.c(),s=E(),a=T("div");for(var v=0;v<k.length;v+=1)k[v].c();c=E(),Q&&Q.c(),l=E(),V&&V.c(),u=E();for(var y=0;y<H.length;y+=1)H[y].c();f=E();for(var g=0;g<A.length;g+=1)A[g].c();P(a,"class","pnotify-content ".concat(t[21]("content"))),P(n,"class",d="pnotify-container ".concat(t[21]("container")," ").concat(t[21](t[4])," ").concat(t[15]?"pnotify-shadow":""," ").concat(t[27].container.join(" "))),P(n,"style",h="".concat(t[31]," ").concat(t[32])),P(n,"role","alert"),P(e,"data-pnotify",""),P(e,"class",p="pnotify ".concat(!t[0]||t[0].positioned?"pnotify-positioned":""," ").concat(!1!==t[13]?"pnotify-with-icon":""," ").concat(t[21]("elem")," pnotify-mode-").concat(t[9]," ").concat(t[10]," ").concat(t[24]," ").concat(t[25]," ").concat(t[37]," ").concat("fade"===t[2]?"pnotify-fade-".concat(t[14]):""," ").concat(t[30]?"pnotify-modal ".concat(t[11]):t[12]," ").concat(t[28]?"pnotify-masking":""," ").concat(t[29]?"pnotify-masking-in":""," ").concat(t[27].elem.join(" "))),P(e,"aria-live","assertive"),P(e,"role","alertdialog")},m:function(d,h){C(d,e,h),O(e,n);for(var p=0;p<$.length;p+=1)$[p].m(n,null);O(n,i),F&&F.m(n,null),O(n,o),q&&q.m(n,null),O(n,r),B&&B.m(n,null),O(n,s),O(n,a);for(var _=0;_<k.length;_+=1)k[_].m(a,null);O(a,c),Q&&Q.m(a,null),O(a,l),V&&V.m(a,null),O(a,u);for(var x=0;x<H.length;x+=1)H[x].m(a,null);t[86](a),O(n,f);for(var w=0;w<A.length;w+=1)A[w].m(n,null);var M;t[87](n),t[88](e),m=!0,v||(y=[(M=t[43].call(null,e),M&&b(M.destroy)?M.destroy:g),N(e,"mouseenter",t[44]),N(e,"mouseleave",t[45]),N(e,"focusin",t[44]),N(e,"focusout",t[45])],v=!0)},p:function(t,f){if(2176&f[1]){var v=t[38];it(),$=lt($,f,R,1,t,v,_,n,ct,wt,i,bt),ot()}if(t[16]&&!t[36]?F?F.p(t,f):((F=Ot(t)).c(),F.m(n,o)):F&&(F.d(1),F=null),t[18]&&!t[36]?q?q.p(t,f):((q=Ct(t)).c(),q.m(n,r)):q&&(q.d(1),q=null),!1!==t[13]?B?B.p(t,f):((B=Mt(t)).c(),B.m(n,s)):B&&(B.d(1),B=null),2304&f[1]){var y=t[39];it(),k=lt(k,f,U,1,t,y,w,a,ct,Tt,c,xt),ot()}if(!1!==t[5]?Q?Q.p(t,f):((Q=Ht(t)).c(),Q.m(a,l)):Q&&(Q.d(1),Q=null),!1!==t[7]?V?V.p(t,f):((V=Pt(t)).c(),V.m(a,u)):V&&(V.d(1),V=null),2560&f[1]){var g=t[40];it(),H=lt(H,f,Y,1,t,g,S,a,ct,Rt,null,kt),ot()}if(3072&f[1]){var x=t[41];it(),A=lt(A,f,at,1,t,x,L,n,ct,Wt,null,_t),ot()}(!m||134250512&f[0]&&d!==(d="pnotify-container ".concat(t[21]("container")," ").concat(t[21](t[4])," ").concat(t[15]?"pnotify-shadow":""," ").concat(t[27].container.join(" "))))&&P(n,"class",d),(!m||3&f[1]&&h!==(h="".concat(t[31]," ").concat(t[32])))&&P(n,"style",h),(!m||2063629829&f[0]|64&f[1]&&p!==(p="pnotify ".concat(!t[0]||t[0].positioned?"pnotify-positioned":""," ").concat(!1!==t[13]?"pnotify-with-icon":""," ").concat(t[21]("elem")," pnotify-mode-").concat(t[9]," ").concat(t[10]," ").concat(t[24]," ").concat(t[25]," ").concat(t[37]," ").concat("fade"===t[2]?"pnotify-fade-".concat(t[14]):""," ").concat(t[30]?"pnotify-modal ".concat(t[11]):t[12]," ").concat(t[28]?"pnotify-masking":""," ").concat(t[29]?"pnotify-masking-in":""," ").concat(t[27].elem.join(" "))))&&P(e,"class",p)},i:function(t){if(!m){for(var e=0;e<j.length;e+=1)rt($[e]);for(var n=0;n<z.length;n+=1)rt(k[n]);for(var i=0;i<X.length;i+=1)rt(H[i]);for(var o=0;o<nt.length;o+=1)rt(A[o]);m=!0}},o:function(t){for(var e=0;e<$.length;e+=1)st($[e]);for(var n=0;n<k.length;n+=1)st(k[n]);for(var i=0;i<H.length;i+=1)st(H[i]);for(var o=0;o<A.length;o+=1)st(A[o]);m=!1},d:function(n){n&&M(e);for(var i=0;i<$.length;i+=1)$[i].d();F&&F.d(),q&&q.d(),B&&B.d();for(var o=0;o<k.length;o+=1)k[o].d();Q&&Q.d(),V&&V.d();for(var r=0;r<H.length;r+=1)H[r].d();t[86](null);for(var s=0;s<A.length;s+=1)A[s].d();t[87](null),t[88](null),v=!1,x(y)}}}function Dt(t,n){"object"!==e(t)&&(t={text:t}),n&&(t.type=n);var i=document.body;return"stack"in t&&t.stack&&t.stack.context&&(i=t.stack.context),{target:i,props:t}}var Ft,qt=new yt({dir1:"down",dir2:"left",firstpos1:25,firstpos2:25,spacing1:36,spacing2:36,push:"bottom"}),Bt=new Map,zt={type:"notice",title:!1,titleTrusted:!1,text:!1,textTrusted:!1,styling:"brighttheme",icons:"brighttheme",mode:"no-preference",addClass:"",addModalClass:"",addModelessClass:"",autoOpen:!0,width:"360px",minHeight:"16px",maxTextHeight:"200px",icon:!0,animation:"fade",animateSpeed:"normal",shadow:!0,hide:!0,delay:8e3,mouseReset:!0,closer:!0,closerHover:!0,sticker:!0,stickerHover:!0,labels:{close:"Close",stick:"Pin",unstick:"Unpin"},remove:!0,destroy:!0,stack:qt,modules:Bt};function Ut(){qt.context||(qt.context=document.body),window.addEventListener("resize",(function(){Ft&&clearTimeout(Ft),Ft=setTimeout((function(){var t=new Event("pnotify:position");document.body.dispatchEvent(t),Ft=null}),10)}))}function Gt(t,e,n){var i=I(),o=D(),r=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=["focus","blur","fullscreenchange","fullscreenerror","scroll","cut","copy","paste","keydown","keypress","keyup","auxclick","click","contextmenu","dblclick","mousedown","mouseenter","mouseleave","mousemove","mouseover","mouseout","mouseup","pointerlockchange","pointerlockerror","select","wheel","drag","dragend","dragenter","dragstart","dragleave","dragover","drop","touchcancel","touchend","touchmove","touchstart","pointerover","pointerenter","pointerdown","pointermove","pointerup","pointercancel","pointerout","pointerleave","gotpointercapture","lostpointercapture"].concat(m(e));function i(e){F(t,e)}return function(t){for(var e=[],o=0;o<n.length;o++)e.push(N(t,n[o],i));return{destroy:function(){for(var t=0;t<e.length;t++)e[t]()}}}}(i,["pnotify:init","pnotify:mount","pnotify:update","pnotify:beforeOpen","pnotify:afterOpen","pnotify:enterModal","pnotify:leaveModal","pnotify:beforeClose","pnotify:afterClose","pnotify:beforeDestroy","pnotify:afterDestroy","focusin","focusout","animationend","transitionend"]),s=e.modules,c=void 0===s?new Map(zt.modules):s,l=e.stack,u=void 0===l?zt.stack:l,f={elem:null,container:null,content:null,iconContainer:null,titleContainer:null,textContainer:null},d=a({},zt);Qt("init",{notice:i,defaults:d});var h,v=e.type,y=void 0===v?d.type:v,g=e.title,$=void 0===g?d.title:g,_=e.titleTrusted,k=void 0===_?d.titleTrusted:_,x=e.text,b=void 0===x?d.text:x,w=e.textTrusted,O=void 0===w?d.textTrusted:w,C=e.styling,M=void 0===C?d.styling:C,T=e.icons,H=void 0===T?d.icons:T,E=e.mode,S=void 0===E?d.mode:E,P=e.addClass,A=void 0===P?d.addClass:P,L=e.addModalClass,j=void 0===L?d.addModalClass:L,R=e.addModelessClass,W=void 0===R?d.addModelessClass:R,q=e.autoOpen,z=void 0===q?d.autoOpen:q,U=e.width,G=void 0===U?d.width:U,J=e.minHeight,K=void 0===J?d.minHeight:J,V=e.maxTextHeight,X=void 0===V?d.maxTextHeight:V,Y=e.icon,Z=void 0===Y?d.icon:Y,tt=e.animation,et=void 0===tt?d.animation:tt,nt=e.animateSpeed,it=void 0===nt?d.animateSpeed:nt,ot=e.shadow,rt=void 0===ot?d.shadow:ot,st=e.hide,at=void 0===st?d.hide:st,ct=e.delay,lt=void 0===ct?d.delay:ct,ut=e.mouseReset,ft=void 0===ut?d.mouseReset:ut,dt=e.closer,ht=void 0===dt?d.closer:dt,pt=e.closerHover,mt=void 0===pt?d.closerHover:pt,vt=e.sticker,yt=void 0===vt?d.sticker:vt,gt=e.stickerHover,$t=void 0===gt?d.stickerHover:gt,_t=e.labels,kt=void 0===_t?d.labels:_t,xt=e.remove,bt=void 0===xt?d.remove:xt,wt=e.destroy,Ot=void 0===wt?d.destroy:wt,Ct="closed",Mt=null,Tt=null,Ht=null,Et=!1,St="",Nt="",Pt=!1,At=!1,Lt={elem:[],container:[]},jt=!1,Rt=!1,Wt=!1,It=!1,Dt=null,Ft=at,qt=null,Bt=null,Ut=u&&(!0===u.modal||"ish"===u.modal&&"prevented"===Mt),Gt=NaN,Jt=null,Kt=null;function Qt(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=a({notice:i},e);"init"===t&&Array.from(c).forEach((function(t){var e=p(t,2),i=e[0];e[1];return"init"in i&&i.init(n)}));var r=f.elem||u&&u.context||document.body;if(!r)return o("pnotify:".concat(t),n),!0;var s=new Event("pnotify:".concat(t),{bubbles:"init"===t||"mount"===t,cancelable:t.startsWith("before")});return s.detail=n,r.dispatchEvent(s),!s.defaultPrevented}function Vt(){var t=u&&u.context||document.body;if(!t)throw new Error("No context to insert this notice into.");if(!f.elem)throw new Error("Trying to insert notice before element is available.");f.elem.parentNode!==t&&t.appendChild(f.elem)}function Xt(){f.elem&&f.elem.parentNode.removeChild(f.elem)}h=function(){Qt("mount"),z&&Zt().catch((function(){}))},I().$$.on_mount.push(h),function(t){I().$$.before_update.push(t)}((function(){Qt("update"),"closed"!==Ct&&"waiting"!==Ct&&at!==Ft&&(at?Ft||ae():se()),"closed"!==Ct&&"closing"!==Ct&&u&&!u._collapsingModalState&&u.queuePosition(),Ft=at}));var Yt=e.open,Zt=void 0===Yt?function(t){if("opening"===Ct)return qt;if("open"===Ct)return at&&ae(),Promise.resolve();if(!jt&&u&&u._shouldNoticeWait(i))return Ct="waiting",Promise.reject();if(!Qt("beforeOpen",{immediate:t}))return Promise.reject();var e,o;Ct="opening",n(28,Wt=!1),n(24,St="pnotify-initial pnotify-hidden");var r=new Promise((function(t,n){e=t,o=n}));qt=r;var s=function(){at&&ae(),Ct="open",Qt("afterOpen",{immediate:t}),qt=null,e()};return Rt?(s(),Promise.resolve()):(Vt(),window.requestAnimationFrame((function(){if("opening"!==Ct)return o(),void(qt=null);u&&(n(0,u._animation=!1,u),"top"===u.push&&u._resetPositionData(),u._positionNotice(i),u.queuePosition(0),n(0,u._animation=!0,u)),ie(s,t)})),r)}:Yt,te=e.close,ee=void 0===te?function(t,e,o){if("closing"===Ct)return Bt;if("closed"===Ct)return Promise.resolve();var r,s=function(){Qt("beforeDestroy")&&(u&&u._removeNotice(i),i.$destroy(),Qt("afterDestroy"))};if("waiting"===Ct)return o||(Ct="closed",Ot&&!o&&s()),Promise.resolve();if(!Qt("beforeClose",{immediate:t,timerHide:e,waitAfterward:o}))return Promise.reject();Ct="closing",Pt=!!e,Mt&&"prevented"!==Mt&&clearTimeout&&clearTimeout(Mt),Mt=null;var a=new Promise((function(t,e){r=t}));return Bt=a,re((function(){n(26,At=!1),Pt=!1,Ct=o?"waiting":"closed",Qt("afterClose",{immediate:t,timerHide:e,waitAfterward:o}),Bt=null,r(),o||(Ot?s():bt&&Xt())}),t),a}:te,ne=e.animateIn,ie=void 0===ne?function(t,e){Et="in";var i=function e(n){if(!(n&&f.elem&&n.target!==f.elem||(f.elem&&f.elem.removeEventListener("transitionend",e),Tt&&clearTimeout(Tt),"in"!==Et))){var i=Rt;if(!i&&f.elem){var o=f.elem.getBoundingClientRect();for(var r in o)if(o[r]>0){i=!0;break}}i?(t&&t.call(),Et=!1):Tt=setTimeout(e,40)}};if("fade"!==et||e){var o=et;n(2,et="none"),n(24,St="pnotify-in ".concat("fade"===o?"pnotify-fade-in":"")),Q().then((function(){n(2,et=o),i()}))}else f.elem&&f.elem.addEventListener("transitionend",i),n(24,St="pnotify-in"),Q().then((function(){n(24,St="pnotify-in pnotify-fade-in"),Tt=setTimeout(i,650)}))}:ne,oe=e.animateOut,re=void 0===oe?function(t,e){Et="out";var i=function e(i){if(!(i&&f.elem&&i.target!==f.elem||(f.elem&&f.elem.removeEventListener("transitionend",e),Ht&&clearTimeout(Ht),"out"!==Et))){var o=Rt;if(!o&&f.elem){var r=f.elem.getBoundingClientRect();for(var s in r)if(r[s]>0){o=!0;break}}f.elem&&f.elem.style.opacity&&"0"!==f.elem.style.opacity&&o?Ht=setTimeout(e,40):(n(24,St=""),t&&t.call(),Et=!1)}};"fade"!==et||e?(n(24,St=""),Q().then((function(){i()}))):(f.elem&&f.elem.addEventListener("transitionend",i),n(24,St="pnotify-in"),Ht=setTimeout(i,650))}:oe;function se(){Mt&&"prevented"!==Mt&&(clearTimeout(Mt),Mt=null),Ht&&clearTimeout(Ht),"closing"===Ct&&(Ct="open",Et=!1,n(24,St="fade"===et?"pnotify-in pnotify-fade-in":"pnotify-in"))}function ae(){"prevented"!==Mt&&(se(),lt!==1/0&&(Mt=setTimeout((function(){return ee(!1,!0)}),isNaN(lt)?0:lt)))}var ce,le,ue,fe,de,he,pe,me,ve,ye,ge;return t.$$set=function(t){"modules"in t&&n(46,c=t.modules),"stack"in t&&n(0,u=t.stack),"type"in t&&n(4,y=t.type),"title"in t&&n(5,$=t.title),"titleTrusted"in t&&n(6,k=t.titleTrusted),"text"in t&&n(7,b=t.text),"textTrusted"in t&&n(8,O=t.textTrusted),"styling"in t&&n(47,M=t.styling),"icons"in t&&n(48,H=t.icons),"mode"in t&&n(9,S=t.mode),"addClass"in t&&n(10,A=t.addClass),"addModalClass"in t&&n(11,j=t.addModalClass),"addModelessClass"in t&&n(12,W=t.addModelessClass),"autoOpen"in t&&n(49,z=t.autoOpen),"width"in t&&n(50,G=t.width),"minHeight"in t&&n(51,K=t.minHeight),"maxTextHeight"in t&&n(52,X=t.maxTextHeight),"icon"in t&&n(13,Z=t.icon),"animation"in t&&n(2,et=t.animation),"animateSpeed"in t&&n(14,it=t.animateSpeed),"shadow"in t&&n(15,rt=t.shadow),"hide"in t&&n(3,at=t.hide),"delay"in t&&n(53,lt=t.delay),"mouseReset"in t&&n(54,ft=t.mouseReset),"closer"in t&&n(16,ht=t.closer),"closerHover"in t&&n(17,mt=t.closerHover),"sticker"in t&&n(18,yt=t.sticker),"stickerHover"in t&&n(19,$t=t.stickerHover),"labels"in t&&n(20,kt=t.labels),"remove"in t&&n(55,bt=t.remove),"destroy"in t&&n(56,Ot=t.destroy),"open"in t&&n(59,Zt=t.open),"close"in t&&n(23,ee=t.close),"animateIn"in t&&n(60,ie=t.animateIn),"animateOut"in t&&n(61,re=t.animateOut)},t.$$.update=function(){524288&t.$$.dirty[1]&&n(31,ce="string"==typeof G?"width: ".concat(G,";"):""),1048576&t.$$.dirty[1]&&n(32,le="string"==typeof K?"min-height: ".concat(K,";"):""),2097152&t.$$.dirty[1]&&n(33,ue="string"==typeof X?"max-height: ".concat(X,";"):""),32&t.$$.dirty[0]&&n(34,fe=$ instanceof HTMLElement),128&t.$$.dirty[0]&&n(35,de=b instanceof HTMLElement),1&t.$$.dirty[0]|1792&t.$$.dirty[3]&&Gt!==u&&(Gt&&(Gt._removeNotice(i),n(30,Ut=!1),Jt(),Kt()),u&&(u._addNotice(i),n(102,Jt=u.on("beforeAddOverlay",(function(){n(30,Ut=!0),Qt("enterModal")}))),n(103,Kt=u.on("afterRemoveOverlay",(function(){n(30,Ut=!1),Qt("leaveModal")})))),n(101,Gt=u)),1073748992&t.$$.dirty[0]&&n(36,he=A.match(/\bnonblock\b/)||j.match(/\bnonblock\b/)&&Ut||W.match(/\bnonblock\b/)&&!Ut),1&t.$$.dirty[0]&&n(37,pe=u&&u.dir1?"pnotify-stack-".concat(u.dir1):""),32768&t.$$.dirty[1]&&n(38,me=Array.from(c).filter((function(t){var e=p(t,2),n=e[0];e[1];return"PrependContainer"===n.position}))),32768&t.$$.dirty[1]&&n(39,ve=Array.from(c).filter((function(t){var e=p(t,2),n=e[0];e[1];return"PrependContent"===n.position}))),32768&t.$$.dirty[1]&&n(40,ye=Array.from(c).filter((function(t){var e=p(t,2),n=e[0];e[1];return"AppendContent"===n.position}))),32768&t.$$.dirty[1]&&n(41,ge=Array.from(c).filter((function(t){var e=p(t,2),n=e[0];e[1];return"AppendContainer"===n.position}))),34&t.$$.dirty[0]|8&t.$$.dirty[1]&&fe&&f.titleContainer&&f.titleContainer.appendChild($),130&t.$$.dirty[0]|16&t.$$.dirty[1]&&de&&f.textContainer&&f.textContainer.appendChild(b)},[u,f,et,at,y,$,k,b,O,S,A,j,W,Z,it,rt,ht,mt,yt,$t,kt,function(t){return"string"==typeof M?"".concat(M,"-").concat(t):t in M?M[t]:"".concat(M.prefix,"-").concat(t)},function(t){return"string"==typeof H?"".concat(H,"-icon-").concat(t):t in H?H[t]:"".concat(H.prefix,"-icon-").concat(t)},ee,St,Nt,At,Lt,Wt,It,Ut,ce,le,ue,fe,de,he,pe,me,ve,ye,ge,i,r,function(t){if(n(26,At=!0),ft&&"closing"===Ct){if(!Pt)return;se()}at&&ft&&se()},function(t){n(26,At=!1),at&&ft&&"out"!==Et&&-1!==["open","opening"].indexOf(Ct)&&ae()},c,M,H,z,G,K,X,lt,ft,bt,Ot,function(){return Ct},function(){return Mt},Zt,ie,re,se,ae,function(t){t?(se(),Mt="prevented"):"prevented"===Mt&&(Mt=null,"open"===Ct&&at&&ae())},function(){return i.$on.apply(i,arguments)},function(){return i.$set.apply(i,arguments)},function(t,e){o(t,e)},function(t){for(var e=0;e<(arguments.length<=1?0:arguments.length-1);e++){var i=e+1<1||arguments.length<=e+1?void 0:arguments[e+1];-1===Lt[t].indexOf(i)&&Lt[t].push(i)}n(27,Lt)},function(t){for(var e=0;e<(arguments.length<=1?0:arguments.length-1);e++){var i=e+1<1||arguments.length<=e+1?void 0:arguments[e+1],o=Lt[t].indexOf(i);-1!==o&&Lt[t].splice(o,1)}n(27,Lt)},function(t){for(var e=0;e<(arguments.length<=1?0:arguments.length-1);e++){var n=e+1<1||arguments.length<=e+1?void 0:arguments[e+1];if(-1===Lt[t].indexOf(n))return!1}return!0},function(){return jt},function(t){return jt=t},function(){return Rt},function(t){return Rt=t},function(t){return Et=t},function(){return St},function(t){return n(24,St=t)},function(){return Nt},function(t){return n(25,Nt=t)},function(t,e,i){if(Dt&&clearTimeout(Dt),Wt!==t)if(t)n(28,Wt=!0),n(29,It=!!e),Vt(),Q().then((function(){window.requestAnimationFrame((function(){if(Wt)if(e&&i)i();else{n(29,It=!0);var t=function t(){f.elem&&f.elem.removeEventListener("transitionend",t),Dt&&clearTimeout(Dt),It&&i&&i()};f.elem&&f.elem.addEventListener("transitionend",t),Dt=setTimeout(t,650)}}))}));else if(e)n(28,Wt=!1),n(29,It=!1),bt&&-1===["open","opening","closing"].indexOf(Ct)&&Xt(),i&&i();else{var o=function t(){f.elem&&f.elem.removeEventListener("transitionend",t),Dt&&clearTimeout(Dt),It||(n(28,Wt=!1),bt&&-1===["open","opening","closing"].indexOf(Ct)&&Xt(),i&&i())};n(29,It=!1),f.elem&&f.elem.addEventListener("transitionend",o),f.elem&&f.elem.style.opacity,Dt=setTimeout(o,650)}},function(){return ee(!1)},function(){return n(3,at=!at)},function(t){B[t?"unshift":"push"]((function(){f.iconContainer=t,n(1,f)}))},function(t){B[t?"unshift":"push"]((function(){f.titleContainer=t,n(1,f)}))},function(t){B[t?"unshift":"push"]((function(){f.textContainer=t,n(1,f)}))},function(t){B[t?"unshift":"push"]((function(){f.content=t,n(1,f)}))},function(t){B[t?"unshift":"push"]((function(){f.container=t,n(1,f)}))},function(t){B[t?"unshift":"push"]((function(){f.elem=t,n(1,f)}))}]}window&&document.body?Ut():document.addEventListener("DOMContentLoaded",Ut);var Jt=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}(s,t);var e,i,r=(e=s,i=u(),function(){var t,n=c(e);if(i){var o=c(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return h(this,t)});function s(t){var e;return n(this,s),function(t,e,n,i,o,r){var s=arguments.length>6&&void 0!==arguments[6]?arguments[6]:[-1],a=j;W(t);var c=e.props||{},l=t.$$={fragment:null,ctx:null,props:r,update:g,not_equal:o,bound:k(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(a?a.$$.context:[]),callbacks:k(),dirty:s,skip_bound:!1},u=!1;if(l.ctx=n?n(t,c,(function(e,n){var i=!(arguments.length<=2)&&arguments.length-2?arguments.length<=2?void 0:arguments[2]:n;return l.ctx&&o(l.ctx[e],l.ctx[e]=i)&&(!l.skip_bound&&l.bound[e]&&l.bound[e](i),u&&mt(t,e)),n})):[],l.update(),u=!0,x(l.before_update),l.fragment=!!i&&i(l.ctx),e.target){if(e.hydrate){var f=A(e.target);l.fragment&&l.fragment.l(f),f.forEach(M)}else l.fragment&&l.fragment.c();e.intro&&rt(t.$$.fragment),ht(t,e.target,e.anchor),Z()}W(a)}(d(e=r.call(this)),t,Gt,It,w,{modules:46,stack:0,refs:1,type:4,title:5,titleTrusted:6,text:7,textTrusted:8,styling:47,icons:48,mode:9,addClass:10,addModalClass:11,addModelessClass:12,autoOpen:49,width:50,minHeight:51,maxTextHeight:52,icon:13,animation:2,animateSpeed:14,shadow:15,hide:3,delay:53,mouseReset:54,closer:16,closerHover:17,sticker:18,stickerHover:19,labels:20,remove:55,destroy:56,getState:57,getTimer:58,getStyle:21,getIcon:22,open:59,close:23,animateIn:60,animateOut:61,cancelClose:62,queueClose:63,_preventTimerClose:64,on:65,update:66,fire:67,addModuleClass:68,removeModuleClass:69,hasModuleClass:70,getModuleHandled:71,setModuleHandled:72,getModuleOpen:73,setModuleOpen:74,setAnimating:75,getAnimatingClass:76,setAnimatingClass:77,_getMoveClass:78,_setMoveClass:79,_setMasking:80},[-1,-1,-1,-1]),e}return o(s,[{key:"modules",get:function(){return this.$$.ctx[46]},set:function(t){this.$set({modules:t}),Z()}},{key:"stack",get:function(){return this.$$.ctx[0]},set:function(t){this.$set({stack:t}),Z()}},{key:"refs",get:function(){return this.$$.ctx[1]}},{key:"type",get:function(){return this.$$.ctx[4]},set:function(t){this.$set({type:t}),Z()}},{key:"title",get:function(){return this.$$.ctx[5]},set:function(t){this.$set({title:t}),Z()}},{key:"titleTrusted",get:function(){return this.$$.ctx[6]},set:function(t){this.$set({titleTrusted:t}),Z()}},{key:"text",get:function(){return this.$$.ctx[7]},set:function(t){this.$set({text:t}),Z()}},{key:"textTrusted",get:function(){return this.$$.ctx[8]},set:function(t){this.$set({textTrusted:t}),Z()}},{key:"styling",get:function(){return this.$$.ctx[47]},set:function(t){this.$set({styling:t}),Z()}},{key:"icons",get:function(){return this.$$.ctx[48]},set:function(t){this.$set({icons:t}),Z()}},{key:"mode",get:function(){return this.$$.ctx[9]},set:function(t){this.$set({mode:t}),Z()}},{key:"addClass",get:function(){return this.$$.ctx[10]},set:function(t){this.$set({addClass:t}),Z()}},{key:"addModalClass",get:function(){return this.$$.ctx[11]},set:function(t){this.$set({addModalClass:t}),Z()}},{key:"addModelessClass",get:function(){return this.$$.ctx[12]},set:function(t){this.$set({addModelessClass:t}),Z()}},{key:"autoOpen",get:function(){return this.$$.ctx[49]},set:function(t){this.$set({autoOpen:t}),Z()}},{key:"width",get:function(){return this.$$.ctx[50]},set:function(t){this.$set({width:t}),Z()}},{key:"minHeight",get:function(){return this.$$.ctx[51]},set:function(t){this.$set({minHeight:t}),Z()}},{key:"maxTextHeight",get:function(){return this.$$.ctx[52]},set:function(t){this.$set({maxTextHeight:t}),Z()}},{key:"icon",get:function(){return this.$$.ctx[13]},set:function(t){this.$set({icon:t}),Z()}},{key:"animation",get:function(){return this.$$.ctx[2]},set:function(t){this.$set({animation:t}),Z()}},{key:"animateSpeed",get:function(){return this.$$.ctx[14]},set:function(t){this.$set({animateSpeed:t}),Z()}},{key:"shadow",get:function(){return this.$$.ctx[15]},set:function(t){this.$set({shadow:t}),Z()}},{key:"hide",get:function(){return this.$$.ctx[3]},set:function(t){this.$set({hide:t}),Z()}},{key:"delay",get:function(){return this.$$.ctx[53]},set:function(t){this.$set({delay:t}),Z()}},{key:"mouseReset",get:function(){return this.$$.ctx[54]},set:function(t){this.$set({mouseReset:t}),Z()}},{key:"closer",get:function(){return this.$$.ctx[16]},set:function(t){this.$set({closer:t}),Z()}},{key:"closerHover",get:function(){return this.$$.ctx[17]},set:function(t){this.$set({closerHover:t}),Z()}},{key:"sticker",get:function(){return this.$$.ctx[18]},set:function(t){this.$set({sticker:t}),Z()}},{key:"stickerHover",get:function(){return this.$$.ctx[19]},set:function(t){this.$set({stickerHover:t}),Z()}},{key:"labels",get:function(){return this.$$.ctx[20]},set:function(t){this.$set({labels:t}),Z()}},{key:"remove",get:function(){return this.$$.ctx[55]},set:function(t){this.$set({remove:t}),Z()}},{key:"destroy",get:function(){return this.$$.ctx[56]},set:function(t){this.$set({destroy:t}),Z()}},{key:"getState",get:function(){return this.$$.ctx[57]}},{key:"getTimer",get:function(){return this.$$.ctx[58]}},{key:"getStyle",get:function(){return this.$$.ctx[21]}},{key:"getIcon",get:function(){return this.$$.ctx[22]}},{key:"open",get:function(){return this.$$.ctx[59]},set:function(t){this.$set({open:t}),Z()}},{key:"close",get:function(){return this.$$.ctx[23]},set:function(t){this.$set({close:t}),Z()}},{key:"animateIn",get:function(){return this.$$.ctx[60]},set:function(t){this.$set({animateIn:t}),Z()}},{key:"animateOut",get:function(){return this.$$.ctx[61]},set:function(t){this.$set({animateOut:t}),Z()}},{key:"cancelClose",get:function(){return this.$$.ctx[62]}},{key:"queueClose",get:function(){return this.$$.ctx[63]}},{key:"_preventTimerClose",get:function(){return this.$$.ctx[64]}},{key:"on",get:function(){return this.$$.ctx[65]}},{key:"update",get:function(){return this.$$.ctx[66]}},{key:"fire",get:function(){return this.$$.ctx[67]}},{key:"addModuleClass",get:function(){return this.$$.ctx[68]}},{key:"removeModuleClass",get:function(){return this.$$.ctx[69]}},{key:"hasModuleClass",get:function(){return this.$$.ctx[70]}},{key:"getModuleHandled",get:function(){return this.$$.ctx[71]}},{key:"setModuleHandled",get:function(){return this.$$.ctx[72]}},{key:"getModuleOpen",get:function(){return this.$$.ctx[73]}},{key:"setModuleOpen",get:function(){return this.$$.ctx[74]}},{key:"setAnimating",get:function(){return this.$$.ctx[75]}},{key:"getAnimatingClass",get:function(){return this.$$.ctx[76]}},{key:"setAnimatingClass",get:function(){return this.$$.ctx[77]}},{key:"_getMoveClass",get:function(){return this.$$.ctx[78]}},{key:"_setMoveClass",get:function(){return this.$$.ctx[79]}},{key:"_setMasking",get:function(){return this.$$.ctx[80]}}]),s}(vt);t.Stack=yt,t.alert=function(t){return gt(Dt(t))},t.default=Jt,t.defaultModules=Bt,t.defaultStack=qt,t.defaults=zt,t.error=function(t){return gt(Dt(t,"error"))},t.info=function(t){return gt(Dt(t,"info"))},t.notice=function(t){return gt(Dt(t,"notice"))},t.success=function(t){return gt(Dt(t,"success"))},Object.defineProperty(t,"__esModule",{value:!0})}));


/***/ }),

/***/ "./src/partials/photoCard.hbs":
/*!************************************!*\
  !*** ./src/partials/photoCard.hbs ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Handlebars = __webpack_require__(/*! ../../node_modules/handlebars/runtime.js */ "./node_modules/handlebars/runtime.js");
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class='photo-card'>\r\n  <img src='"
    + alias4(((helper = (helper = lookupProperty(helpers,"webformatURL") || (depth0 != null ? lookupProperty(depth0,"webformatURL") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"webformatURL","hash":{},"data":data,"loc":{"start":{"line":2,"column":12},"end":{"line":2,"column":28}}}) : helper)))
    + "' alt='' data-url='"
    + alias4(((helper = (helper = lookupProperty(helpers,"largeImageURL") || (depth0 != null ? lookupProperty(depth0,"largeImageURL") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"largeImageURL","hash":{},"data":data,"loc":{"start":{"line":2,"column":47},"end":{"line":2,"column":64}}}) : helper)))
    + "' />\r\n\r\n  <div class='stats'>\r\n    <p class='stats-item'>\r\n      <i class='material-icons'>thumb_up</i>\r\n      "
    + alias4(((helper = (helper = lookupProperty(helpers,"likes") || (depth0 != null ? lookupProperty(depth0,"likes") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"likes","hash":{},"data":data,"loc":{"start":{"line":7,"column":6},"end":{"line":7,"column":15}}}) : helper)))
    + "\r\n    </p>\r\n    <p class='stats-item'>\r\n      <i class='material-icons'>visibility</i>\r\n      "
    + alias4(((helper = (helper = lookupProperty(helpers,"views") || (depth0 != null ? lookupProperty(depth0,"views") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"views","hash":{},"data":data,"loc":{"start":{"line":11,"column":6},"end":{"line":11,"column":15}}}) : helper)))
    + "\r\n    </p>\r\n    <p class='stats-item'>\r\n      <i class='material-icons'>comment</i>\r\n      "
    + alias4(((helper = (helper = lookupProperty(helpers,"comments") || (depth0 != null ? lookupProperty(depth0,"comments") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"comments","hash":{},"data":data,"loc":{"start":{"line":15,"column":6},"end":{"line":15,"column":18}}}) : helper)))
    + "\r\n    </p>\r\n    <p class='stats-item'>\r\n      <i class='material-icons'>cloud_download</i>\r\n      "
    + alias4(((helper = (helper = lookupProperty(helpers,"downloads") || (depth0 != null ? lookupProperty(depth0,"downloads") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"downloads","hash":{},"data":data,"loc":{"start":{"line":19,"column":6},"end":{"line":19,"column":19}}}) : helper)))
    + "\r\n    </p>\r\n  </div>\r\n</div>";
},"useData":true});

/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars.runtime.js":
/*!****************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars.runtime.js ***!
  \****************************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

// istanbul ignore next

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var _handlebarsBase = __webpack_require__(/*! ./handlebars/base */ "./node_modules/handlebars/dist/cjs/handlebars/base.js");

var base = _interopRequireWildcard(_handlebarsBase);

// Each of these augment the Handlebars object. No need to setup here.
// (This is done to easily share code between commonjs and browse envs)

var _handlebarsSafeString = __webpack_require__(/*! ./handlebars/safe-string */ "./node_modules/handlebars/dist/cjs/handlebars/safe-string.js");

var _handlebarsSafeString2 = _interopRequireDefault(_handlebarsSafeString);

var _handlebarsException = __webpack_require__(/*! ./handlebars/exception */ "./node_modules/handlebars/dist/cjs/handlebars/exception.js");

var _handlebarsException2 = _interopRequireDefault(_handlebarsException);

var _handlebarsUtils = __webpack_require__(/*! ./handlebars/utils */ "./node_modules/handlebars/dist/cjs/handlebars/utils.js");

var Utils = _interopRequireWildcard(_handlebarsUtils);

var _handlebarsRuntime = __webpack_require__(/*! ./handlebars/runtime */ "./node_modules/handlebars/dist/cjs/handlebars/runtime.js");

var runtime = _interopRequireWildcard(_handlebarsRuntime);

var _handlebarsNoConflict = __webpack_require__(/*! ./handlebars/no-conflict */ "./node_modules/handlebars/dist/cjs/handlebars/no-conflict.js");

var _handlebarsNoConflict2 = _interopRequireDefault(_handlebarsNoConflict);

// For compatibility and usage outside of module systems, make the Handlebars object a namespace
function create() {
  var hb = new base.HandlebarsEnvironment();

  Utils.extend(hb, base);
  hb.SafeString = _handlebarsSafeString2['default'];
  hb.Exception = _handlebarsException2['default'];
  hb.Utils = Utils;
  hb.escapeExpression = Utils.escapeExpression;

  hb.VM = runtime;
  hb.template = function (spec) {
    return runtime.template(spec, hb);
  };

  return hb;
}

var inst = create();
inst.create = create;

_handlebarsNoConflict2['default'](inst);

inst['default'] = inst;

exports["default"] = inst;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9oYW5kbGViYXJzLnJ1bnRpbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OEJBQXNCLG1CQUFtQjs7SUFBN0IsSUFBSTs7Ozs7b0NBSU8sMEJBQTBCOzs7O21DQUMzQix3QkFBd0I7Ozs7K0JBQ3ZCLG9CQUFvQjs7SUFBL0IsS0FBSzs7aUNBQ1Esc0JBQXNCOztJQUFuQyxPQUFPOztvQ0FFSSwwQkFBMEI7Ozs7O0FBR2pELFNBQVMsTUFBTSxHQUFHO0FBQ2hCLE1BQUksRUFBRSxHQUFHLElBQUksSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7O0FBRTFDLE9BQUssQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ3ZCLElBQUUsQ0FBQyxVQUFVLG9DQUFhLENBQUM7QUFDM0IsSUFBRSxDQUFDLFNBQVMsbUNBQVksQ0FBQztBQUN6QixJQUFFLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztBQUNqQixJQUFFLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDLGdCQUFnQixDQUFDOztBQUU3QyxJQUFFLENBQUMsRUFBRSxHQUFHLE9BQU8sQ0FBQztBQUNoQixJQUFFLENBQUMsUUFBUSxHQUFHLFVBQVMsSUFBSSxFQUFFO0FBQzNCLFdBQU8sT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7R0FDbkMsQ0FBQzs7QUFFRixTQUFPLEVBQUUsQ0FBQztDQUNYOztBQUVELElBQUksSUFBSSxHQUFHLE1BQU0sRUFBRSxDQUFDO0FBQ3BCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDOztBQUVyQixrQ0FBVyxJQUFJLENBQUMsQ0FBQzs7QUFFakIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLElBQUksQ0FBQzs7cUJBRVIsSUFBSSIsImZpbGUiOiJoYW5kbGViYXJzLnJ1bnRpbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBiYXNlIGZyb20gJy4vaGFuZGxlYmFycy9iYXNlJztcblxuLy8gRWFjaCBvZiB0aGVzZSBhdWdtZW50IHRoZSBIYW5kbGViYXJzIG9iamVjdC4gTm8gbmVlZCB0byBzZXR1cCBoZXJlLlxuLy8gKFRoaXMgaXMgZG9uZSB0byBlYXNpbHkgc2hhcmUgY29kZSBiZXR3ZWVuIGNvbW1vbmpzIGFuZCBicm93c2UgZW52cylcbmltcG9ydCBTYWZlU3RyaW5nIGZyb20gJy4vaGFuZGxlYmFycy9zYWZlLXN0cmluZyc7XG5pbXBvcnQgRXhjZXB0aW9uIGZyb20gJy4vaGFuZGxlYmFycy9leGNlcHRpb24nO1xuaW1wb3J0ICogYXMgVXRpbHMgZnJvbSAnLi9oYW5kbGViYXJzL3V0aWxzJztcbmltcG9ydCAqIGFzIHJ1bnRpbWUgZnJvbSAnLi9oYW5kbGViYXJzL3J1bnRpbWUnO1xuXG5pbXBvcnQgbm9Db25mbGljdCBmcm9tICcuL2hhbmRsZWJhcnMvbm8tY29uZmxpY3QnO1xuXG4vLyBGb3IgY29tcGF0aWJpbGl0eSBhbmQgdXNhZ2Ugb3V0c2lkZSBvZiBtb2R1bGUgc3lzdGVtcywgbWFrZSB0aGUgSGFuZGxlYmFycyBvYmplY3QgYSBuYW1lc3BhY2VcbmZ1bmN0aW9uIGNyZWF0ZSgpIHtcbiAgbGV0IGhiID0gbmV3IGJhc2UuSGFuZGxlYmFyc0Vudmlyb25tZW50KCk7XG5cbiAgVXRpbHMuZXh0ZW5kKGhiLCBiYXNlKTtcbiAgaGIuU2FmZVN0cmluZyA9IFNhZmVTdHJpbmc7XG4gIGhiLkV4Y2VwdGlvbiA9IEV4Y2VwdGlvbjtcbiAgaGIuVXRpbHMgPSBVdGlscztcbiAgaGIuZXNjYXBlRXhwcmVzc2lvbiA9IFV0aWxzLmVzY2FwZUV4cHJlc3Npb247XG5cbiAgaGIuVk0gPSBydW50aW1lO1xuICBoYi50ZW1wbGF0ZSA9IGZ1bmN0aW9uKHNwZWMpIHtcbiAgICByZXR1cm4gcnVudGltZS50ZW1wbGF0ZShzcGVjLCBoYik7XG4gIH07XG5cbiAgcmV0dXJuIGhiO1xufVxuXG5sZXQgaW5zdCA9IGNyZWF0ZSgpO1xuaW5zdC5jcmVhdGUgPSBjcmVhdGU7XG5cbm5vQ29uZmxpY3QoaW5zdCk7XG5cbmluc3RbJ2RlZmF1bHQnXSA9IGluc3Q7XG5cbmV4cG9ydCBkZWZhdWx0IGluc3Q7XG4iXX0=


/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars/base.js":
/*!*************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars/base.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
exports.HandlebarsEnvironment = HandlebarsEnvironment;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/handlebars/dist/cjs/handlebars/utils.js");

var _exception = __webpack_require__(/*! ./exception */ "./node_modules/handlebars/dist/cjs/handlebars/exception.js");

var _exception2 = _interopRequireDefault(_exception);

var _helpers = __webpack_require__(/*! ./helpers */ "./node_modules/handlebars/dist/cjs/handlebars/helpers.js");

var _decorators = __webpack_require__(/*! ./decorators */ "./node_modules/handlebars/dist/cjs/handlebars/decorators.js");

var _logger = __webpack_require__(/*! ./logger */ "./node_modules/handlebars/dist/cjs/handlebars/logger.js");

var _logger2 = _interopRequireDefault(_logger);

var _internalProtoAccess = __webpack_require__(/*! ./internal/proto-access */ "./node_modules/handlebars/dist/cjs/handlebars/internal/proto-access.js");

var VERSION = '4.7.7';
exports.VERSION = VERSION;
var COMPILER_REVISION = 8;
exports.COMPILER_REVISION = COMPILER_REVISION;
var LAST_COMPATIBLE_COMPILER_REVISION = 7;

exports.LAST_COMPATIBLE_COMPILER_REVISION = LAST_COMPATIBLE_COMPILER_REVISION;
var REVISION_CHANGES = {
  1: '<= 1.0.rc.2', // 1.0.rc.2 is actually rev2 but doesn't report it
  2: '== 1.0.0-rc.3',
  3: '== 1.0.0-rc.4',
  4: '== 1.x.x',
  5: '== 2.0.0-alpha.x',
  6: '>= 2.0.0-beta.1',
  7: '>= 4.0.0 <4.3.0',
  8: '>= 4.3.0'
};

exports.REVISION_CHANGES = REVISION_CHANGES;
var objectType = '[object Object]';

function HandlebarsEnvironment(helpers, partials, decorators) {
  this.helpers = helpers || {};
  this.partials = partials || {};
  this.decorators = decorators || {};

  _helpers.registerDefaultHelpers(this);
  _decorators.registerDefaultDecorators(this);
}

HandlebarsEnvironment.prototype = {
  constructor: HandlebarsEnvironment,

  logger: _logger2['default'],
  log: _logger2['default'].log,

  registerHelper: function registerHelper(name, fn) {
    if (_utils.toString.call(name) === objectType) {
      if (fn) {
        throw new _exception2['default']('Arg not supported with multiple helpers');
      }
      _utils.extend(this.helpers, name);
    } else {
      this.helpers[name] = fn;
    }
  },
  unregisterHelper: function unregisterHelper(name) {
    delete this.helpers[name];
  },

  registerPartial: function registerPartial(name, partial) {
    if (_utils.toString.call(name) === objectType) {
      _utils.extend(this.partials, name);
    } else {
      if (typeof partial === 'undefined') {
        throw new _exception2['default']('Attempting to register a partial called "' + name + '" as undefined');
      }
      this.partials[name] = partial;
    }
  },
  unregisterPartial: function unregisterPartial(name) {
    delete this.partials[name];
  },

  registerDecorator: function registerDecorator(name, fn) {
    if (_utils.toString.call(name) === objectType) {
      if (fn) {
        throw new _exception2['default']('Arg not supported with multiple decorators');
      }
      _utils.extend(this.decorators, name);
    } else {
      this.decorators[name] = fn;
    }
  },
  unregisterDecorator: function unregisterDecorator(name) {
    delete this.decorators[name];
  },
  /**
   * Reset the memory of illegal property accesses that have already been logged.
   * @deprecated should only be used in handlebars test-cases
   */
  resetLoggedPropertyAccesses: function resetLoggedPropertyAccesses() {
    _internalProtoAccess.resetLoggedProperties();
  }
};

var log = _logger2['default'].log;

exports.log = log;
exports.createFrame = _utils.createFrame;
exports.logger = _logger2['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2Jhc2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7cUJBQThDLFNBQVM7O3lCQUNqQyxhQUFhOzs7O3VCQUNJLFdBQVc7OzBCQUNSLGNBQWM7O3NCQUNyQyxVQUFVOzs7O21DQUNTLHlCQUF5Qjs7QUFFeEQsSUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDOztBQUN4QixJQUFNLGlCQUFpQixHQUFHLENBQUMsQ0FBQzs7QUFDNUIsSUFBTSxpQ0FBaUMsR0FBRyxDQUFDLENBQUM7OztBQUU1QyxJQUFNLGdCQUFnQixHQUFHO0FBQzlCLEdBQUMsRUFBRSxhQUFhO0FBQ2hCLEdBQUMsRUFBRSxlQUFlO0FBQ2xCLEdBQUMsRUFBRSxlQUFlO0FBQ2xCLEdBQUMsRUFBRSxVQUFVO0FBQ2IsR0FBQyxFQUFFLGtCQUFrQjtBQUNyQixHQUFDLEVBQUUsaUJBQWlCO0FBQ3BCLEdBQUMsRUFBRSxpQkFBaUI7QUFDcEIsR0FBQyxFQUFFLFVBQVU7Q0FDZCxDQUFDOzs7QUFFRixJQUFNLFVBQVUsR0FBRyxpQkFBaUIsQ0FBQzs7QUFFOUIsU0FBUyxxQkFBcUIsQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRTtBQUNuRSxNQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sSUFBSSxFQUFFLENBQUM7QUFDN0IsTUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLElBQUksRUFBRSxDQUFDO0FBQy9CLE1BQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxJQUFJLEVBQUUsQ0FBQzs7QUFFbkMsa0NBQXVCLElBQUksQ0FBQyxDQUFDO0FBQzdCLHdDQUEwQixJQUFJLENBQUMsQ0FBQztDQUNqQzs7QUFFRCxxQkFBcUIsQ0FBQyxTQUFTLEdBQUc7QUFDaEMsYUFBVyxFQUFFLHFCQUFxQjs7QUFFbEMsUUFBTSxxQkFBUTtBQUNkLEtBQUcsRUFBRSxvQkFBTyxHQUFHOztBQUVmLGdCQUFjLEVBQUUsd0JBQVMsSUFBSSxFQUFFLEVBQUUsRUFBRTtBQUNqQyxRQUFJLGdCQUFTLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxVQUFVLEVBQUU7QUFDdEMsVUFBSSxFQUFFLEVBQUU7QUFDTixjQUFNLDJCQUFjLHlDQUF5QyxDQUFDLENBQUM7T0FDaEU7QUFDRCxvQkFBTyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO0tBQzVCLE1BQU07QUFDTCxVQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztLQUN6QjtHQUNGO0FBQ0Qsa0JBQWdCLEVBQUUsMEJBQVMsSUFBSSxFQUFFO0FBQy9CLFdBQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztHQUMzQjs7QUFFRCxpQkFBZSxFQUFFLHlCQUFTLElBQUksRUFBRSxPQUFPLEVBQUU7QUFDdkMsUUFBSSxnQkFBUyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssVUFBVSxFQUFFO0FBQ3RDLG9CQUFPLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7S0FDN0IsTUFBTTtBQUNMLFVBQUksT0FBTyxPQUFPLEtBQUssV0FBVyxFQUFFO0FBQ2xDLGNBQU0seUVBQ3dDLElBQUksb0JBQ2pELENBQUM7T0FDSDtBQUNELFVBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsT0FBTyxDQUFDO0tBQy9CO0dBQ0Y7QUFDRCxtQkFBaUIsRUFBRSwyQkFBUyxJQUFJLEVBQUU7QUFDaEMsV0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0dBQzVCOztBQUVELG1CQUFpQixFQUFFLDJCQUFTLElBQUksRUFBRSxFQUFFLEVBQUU7QUFDcEMsUUFBSSxnQkFBUyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssVUFBVSxFQUFFO0FBQ3RDLFVBQUksRUFBRSxFQUFFO0FBQ04sY0FBTSwyQkFBYyw0Q0FBNEMsQ0FBQyxDQUFDO09BQ25FO0FBQ0Qsb0JBQU8sSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztLQUMvQixNQUFNO0FBQ0wsVUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7S0FDNUI7R0FDRjtBQUNELHFCQUFtQixFQUFFLDZCQUFTLElBQUksRUFBRTtBQUNsQyxXQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7R0FDOUI7Ozs7O0FBS0QsNkJBQTJCLEVBQUEsdUNBQUc7QUFDNUIsZ0RBQXVCLENBQUM7R0FDekI7Q0FDRixDQUFDOztBQUVLLElBQUksR0FBRyxHQUFHLG9CQUFPLEdBQUcsQ0FBQzs7O1FBRW5CLFdBQVc7UUFBRSxNQUFNIiwiZmlsZSI6ImJhc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVGcmFtZSwgZXh0ZW5kLCB0b1N0cmluZyB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IEV4Y2VwdGlvbiBmcm9tICcuL2V4Y2VwdGlvbic7XG5pbXBvcnQgeyByZWdpc3RlckRlZmF1bHRIZWxwZXJzIH0gZnJvbSAnLi9oZWxwZXJzJztcbmltcG9ydCB7IHJlZ2lzdGVyRGVmYXVsdERlY29yYXRvcnMgfSBmcm9tICcuL2RlY29yYXRvcnMnO1xuaW1wb3J0IGxvZ2dlciBmcm9tICcuL2xvZ2dlcic7XG5pbXBvcnQgeyByZXNldExvZ2dlZFByb3BlcnRpZXMgfSBmcm9tICcuL2ludGVybmFsL3Byb3RvLWFjY2Vzcyc7XG5cbmV4cG9ydCBjb25zdCBWRVJTSU9OID0gJzQuNy43JztcbmV4cG9ydCBjb25zdCBDT01QSUxFUl9SRVZJU0lPTiA9IDg7XG5leHBvcnQgY29uc3QgTEFTVF9DT01QQVRJQkxFX0NPTVBJTEVSX1JFVklTSU9OID0gNztcblxuZXhwb3J0IGNvbnN0IFJFVklTSU9OX0NIQU5HRVMgPSB7XG4gIDE6ICc8PSAxLjAucmMuMicsIC8vIDEuMC5yYy4yIGlzIGFjdHVhbGx5IHJldjIgYnV0IGRvZXNuJ3QgcmVwb3J0IGl0XG4gIDI6ICc9PSAxLjAuMC1yYy4zJyxcbiAgMzogJz09IDEuMC4wLXJjLjQnLFxuICA0OiAnPT0gMS54LngnLFxuICA1OiAnPT0gMi4wLjAtYWxwaGEueCcsXG4gIDY6ICc+PSAyLjAuMC1iZXRhLjEnLFxuICA3OiAnPj0gNC4wLjAgPDQuMy4wJyxcbiAgODogJz49IDQuMy4wJ1xufTtcblxuY29uc3Qgb2JqZWN0VHlwZSA9ICdbb2JqZWN0IE9iamVjdF0nO1xuXG5leHBvcnQgZnVuY3Rpb24gSGFuZGxlYmFyc0Vudmlyb25tZW50KGhlbHBlcnMsIHBhcnRpYWxzLCBkZWNvcmF0b3JzKSB7XG4gIHRoaXMuaGVscGVycyA9IGhlbHBlcnMgfHwge307XG4gIHRoaXMucGFydGlhbHMgPSBwYXJ0aWFscyB8fCB7fTtcbiAgdGhpcy5kZWNvcmF0b3JzID0gZGVjb3JhdG9ycyB8fCB7fTtcblxuICByZWdpc3RlckRlZmF1bHRIZWxwZXJzKHRoaXMpO1xuICByZWdpc3RlckRlZmF1bHREZWNvcmF0b3JzKHRoaXMpO1xufVxuXG5IYW5kbGViYXJzRW52aXJvbm1lbnQucHJvdG90eXBlID0ge1xuICBjb25zdHJ1Y3RvcjogSGFuZGxlYmFyc0Vudmlyb25tZW50LFxuXG4gIGxvZ2dlcjogbG9nZ2VyLFxuICBsb2c6IGxvZ2dlci5sb2csXG5cbiAgcmVnaXN0ZXJIZWxwZXI6IGZ1bmN0aW9uKG5hbWUsIGZuKSB7XG4gICAgaWYgKHRvU3RyaW5nLmNhbGwobmFtZSkgPT09IG9iamVjdFR5cGUpIHtcbiAgICAgIGlmIChmbikge1xuICAgICAgICB0aHJvdyBuZXcgRXhjZXB0aW9uKCdBcmcgbm90IHN1cHBvcnRlZCB3aXRoIG11bHRpcGxlIGhlbHBlcnMnKTtcbiAgICAgIH1cbiAgICAgIGV4dGVuZCh0aGlzLmhlbHBlcnMsIG5hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmhlbHBlcnNbbmFtZV0gPSBmbjtcbiAgICB9XG4gIH0sXG4gIHVucmVnaXN0ZXJIZWxwZXI6IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICBkZWxldGUgdGhpcy5oZWxwZXJzW25hbWVdO1xuICB9LFxuXG4gIHJlZ2lzdGVyUGFydGlhbDogZnVuY3Rpb24obmFtZSwgcGFydGlhbCkge1xuICAgIGlmICh0b1N0cmluZy5jYWxsKG5hbWUpID09PSBvYmplY3RUeXBlKSB7XG4gICAgICBleHRlbmQodGhpcy5wYXJ0aWFscywgbmFtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0eXBlb2YgcGFydGlhbCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEV4Y2VwdGlvbihcbiAgICAgICAgICBgQXR0ZW1wdGluZyB0byByZWdpc3RlciBhIHBhcnRpYWwgY2FsbGVkIFwiJHtuYW1lfVwiIGFzIHVuZGVmaW5lZGBcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHRoaXMucGFydGlhbHNbbmFtZV0gPSBwYXJ0aWFsO1xuICAgIH1cbiAgfSxcbiAgdW5yZWdpc3RlclBhcnRpYWw6IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICBkZWxldGUgdGhpcy5wYXJ0aWFsc1tuYW1lXTtcbiAgfSxcblxuICByZWdpc3RlckRlY29yYXRvcjogZnVuY3Rpb24obmFtZSwgZm4pIHtcbiAgICBpZiAodG9TdHJpbmcuY2FsbChuYW1lKSA9PT0gb2JqZWN0VHlwZSkge1xuICAgICAgaWYgKGZuKSB7XG4gICAgICAgIHRocm93IG5ldyBFeGNlcHRpb24oJ0FyZyBub3Qgc3VwcG9ydGVkIHdpdGggbXVsdGlwbGUgZGVjb3JhdG9ycycpO1xuICAgICAgfVxuICAgICAgZXh0ZW5kKHRoaXMuZGVjb3JhdG9ycywgbmFtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGVjb3JhdG9yc1tuYW1lXSA9IGZuO1xuICAgIH1cbiAgfSxcbiAgdW5yZWdpc3RlckRlY29yYXRvcjogZnVuY3Rpb24obmFtZSkge1xuICAgIGRlbGV0ZSB0aGlzLmRlY29yYXRvcnNbbmFtZV07XG4gIH0sXG4gIC8qKlxuICAgKiBSZXNldCB0aGUgbWVtb3J5IG9mIGlsbGVnYWwgcHJvcGVydHkgYWNjZXNzZXMgdGhhdCBoYXZlIGFscmVhZHkgYmVlbiBsb2dnZWQuXG4gICAqIEBkZXByZWNhdGVkIHNob3VsZCBvbmx5IGJlIHVzZWQgaW4gaGFuZGxlYmFycyB0ZXN0LWNhc2VzXG4gICAqL1xuICByZXNldExvZ2dlZFByb3BlcnR5QWNjZXNzZXMoKSB7XG4gICAgcmVzZXRMb2dnZWRQcm9wZXJ0aWVzKCk7XG4gIH1cbn07XG5cbmV4cG9ydCBsZXQgbG9nID0gbG9nZ2VyLmxvZztcblxuZXhwb3J0IHsgY3JlYXRlRnJhbWUsIGxvZ2dlciB9O1xuIl19


/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars/decorators.js":
/*!*******************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars/decorators.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
exports.registerDefaultDecorators = registerDefaultDecorators;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _decoratorsInline = __webpack_require__(/*! ./decorators/inline */ "./node_modules/handlebars/dist/cjs/handlebars/decorators/inline.js");

var _decoratorsInline2 = _interopRequireDefault(_decoratorsInline);

function registerDefaultDecorators(instance) {
  _decoratorsInline2['default'](instance);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2RlY29yYXRvcnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Z0NBQTJCLHFCQUFxQjs7OztBQUV6QyxTQUFTLHlCQUF5QixDQUFDLFFBQVEsRUFBRTtBQUNsRCxnQ0FBZSxRQUFRLENBQUMsQ0FBQztDQUMxQiIsImZpbGUiOiJkZWNvcmF0b3JzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJlZ2lzdGVySW5saW5lIGZyb20gJy4vZGVjb3JhdG9ycy9pbmxpbmUnO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJEZWZhdWx0RGVjb3JhdG9ycyhpbnN0YW5jZSkge1xuICByZWdpc3RlcklubGluZShpbnN0YW5jZSk7XG59XG4iXX0=


/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars/decorators/inline.js":
/*!**************************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars/decorators/inline.js ***!
  \**************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/handlebars/dist/cjs/handlebars/utils.js");

exports["default"] = function (instance) {
  instance.registerDecorator('inline', function (fn, props, container, options) {
    var ret = fn;
    if (!props.partials) {
      props.partials = {};
      ret = function (context, options) {
        // Create a new partials stack frame prior to exec.
        var original = container.partials;
        container.partials = _utils.extend({}, original, props.partials);
        var ret = fn(context, options);
        container.partials = original;
        return ret;
      };
    }

    props.partials[options.args[0]] = options.fn;

    return ret;
  });
};

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2RlY29yYXRvcnMvaW5saW5lLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7cUJBQXVCLFVBQVU7O3FCQUVsQixVQUFTLFFBQVEsRUFBRTtBQUNoQyxVQUFRLENBQUMsaUJBQWlCLENBQUMsUUFBUSxFQUFFLFVBQVMsRUFBRSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFO0FBQzNFLFFBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQztBQUNiLFFBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFO0FBQ25CLFdBQUssQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0FBQ3BCLFNBQUcsR0FBRyxVQUFTLE9BQU8sRUFBRSxPQUFPLEVBQUU7O0FBRS9CLFlBQUksUUFBUSxHQUFHLFNBQVMsQ0FBQyxRQUFRLENBQUM7QUFDbEMsaUJBQVMsQ0FBQyxRQUFRLEdBQUcsY0FBTyxFQUFFLEVBQUUsUUFBUSxFQUFFLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUMxRCxZQUFJLEdBQUcsR0FBRyxFQUFFLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQy9CLGlCQUFTLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztBQUM5QixlQUFPLEdBQUcsQ0FBQztPQUNaLENBQUM7S0FDSDs7QUFFRCxTQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUMsRUFBRSxDQUFDOztBQUU3QyxXQUFPLEdBQUcsQ0FBQztHQUNaLENBQUMsQ0FBQztDQUNKIiwiZmlsZSI6ImlubGluZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGV4dGVuZCB9IGZyb20gJy4uL3V0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oaW5zdGFuY2UpIHtcbiAgaW5zdGFuY2UucmVnaXN0ZXJEZWNvcmF0b3IoJ2lubGluZScsIGZ1bmN0aW9uKGZuLCBwcm9wcywgY29udGFpbmVyLCBvcHRpb25zKSB7XG4gICAgbGV0IHJldCA9IGZuO1xuICAgIGlmICghcHJvcHMucGFydGlhbHMpIHtcbiAgICAgIHByb3BzLnBhcnRpYWxzID0ge307XG4gICAgICByZXQgPSBmdW5jdGlvbihjb250ZXh0LCBvcHRpb25zKSB7XG4gICAgICAgIC8vIENyZWF0ZSBhIG5ldyBwYXJ0aWFscyBzdGFjayBmcmFtZSBwcmlvciB0byBleGVjLlxuICAgICAgICBsZXQgb3JpZ2luYWwgPSBjb250YWluZXIucGFydGlhbHM7XG4gICAgICAgIGNvbnRhaW5lci5wYXJ0aWFscyA9IGV4dGVuZCh7fSwgb3JpZ2luYWwsIHByb3BzLnBhcnRpYWxzKTtcbiAgICAgICAgbGV0IHJldCA9IGZuKGNvbnRleHQsIG9wdGlvbnMpO1xuICAgICAgICBjb250YWluZXIucGFydGlhbHMgPSBvcmlnaW5hbDtcbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcHJvcHMucGFydGlhbHNbb3B0aW9ucy5hcmdzWzBdXSA9IG9wdGlvbnMuZm47XG5cbiAgICByZXR1cm4gcmV0O1xuICB9KTtcbn1cbiJdfQ==


/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars/exception.js":
/*!******************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars/exception.js ***!
  \******************************************************************/
/***/ ((module, exports) => {

"use strict";


exports.__esModule = true;
var errorProps = ['description', 'fileName', 'lineNumber', 'endLineNumber', 'message', 'name', 'number', 'stack'];

function Exception(message, node) {
  var loc = node && node.loc,
      line = undefined,
      endLineNumber = undefined,
      column = undefined,
      endColumn = undefined;

  if (loc) {
    line = loc.start.line;
    endLineNumber = loc.end.line;
    column = loc.start.column;
    endColumn = loc.end.column;

    message += ' - ' + line + ':' + column;
  }

  var tmp = Error.prototype.constructor.call(this, message);

  // Unfortunately errors are not enumerable in Chrome (at least), so `for prop in tmp` doesn't work.
  for (var idx = 0; idx < errorProps.length; idx++) {
    this[errorProps[idx]] = tmp[errorProps[idx]];
  }

  /* istanbul ignore else */
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, Exception);
  }

  try {
    if (loc) {
      this.lineNumber = line;
      this.endLineNumber = endLineNumber;

      // Work around issue under safari where we can't directly set the column value
      /* istanbul ignore next */
      if (Object.defineProperty) {
        Object.defineProperty(this, 'column', {
          value: column,
          enumerable: true
        });
        Object.defineProperty(this, 'endColumn', {
          value: endColumn,
          enumerable: true
        });
      } else {
        this.column = column;
        this.endColumn = endColumn;
      }
    }
  } catch (nop) {
    /* Ignore if the browser is very particular */
  }
}

Exception.prototype = new Error();

exports["default"] = Exception;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2V4Y2VwdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxJQUFNLFVBQVUsR0FBRyxDQUNqQixhQUFhLEVBQ2IsVUFBVSxFQUNWLFlBQVksRUFDWixlQUFlLEVBQ2YsU0FBUyxFQUNULE1BQU0sRUFDTixRQUFRLEVBQ1IsT0FBTyxDQUNSLENBQUM7O0FBRUYsU0FBUyxTQUFTLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRTtBQUNoQyxNQUFJLEdBQUcsR0FBRyxJQUFJLElBQUksSUFBSSxDQUFDLEdBQUc7TUFDeEIsSUFBSSxZQUFBO01BQ0osYUFBYSxZQUFBO01BQ2IsTUFBTSxZQUFBO01BQ04sU0FBUyxZQUFBLENBQUM7O0FBRVosTUFBSSxHQUFHLEVBQUU7QUFDUCxRQUFJLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7QUFDdEIsaUJBQWEsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQztBQUM3QixVQUFNLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7QUFDMUIsYUFBUyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDOztBQUUzQixXQUFPLElBQUksS0FBSyxHQUFHLElBQUksR0FBRyxHQUFHLEdBQUcsTUFBTSxDQUFDO0dBQ3hDOztBQUVELE1BQUksR0FBRyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7OztBQUcxRCxPQUFLLElBQUksR0FBRyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsVUFBVSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsRUFBRTtBQUNoRCxRQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0dBQzlDOzs7QUFHRCxNQUFJLEtBQUssQ0FBQyxpQkFBaUIsRUFBRTtBQUMzQixTQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0dBQzFDOztBQUVELE1BQUk7QUFDRixRQUFJLEdBQUcsRUFBRTtBQUNQLFVBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO0FBQ3ZCLFVBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDOzs7O0FBSW5DLFVBQUksTUFBTSxDQUFDLGNBQWMsRUFBRTtBQUN6QixjQUFNLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUU7QUFDcEMsZUFBSyxFQUFFLE1BQU07QUFDYixvQkFBVSxFQUFFLElBQUk7U0FDakIsQ0FBQyxDQUFDO0FBQ0gsY0FBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsV0FBVyxFQUFFO0FBQ3ZDLGVBQUssRUFBRSxTQUFTO0FBQ2hCLG9CQUFVLEVBQUUsSUFBSTtTQUNqQixDQUFDLENBQUM7T0FDSixNQUFNO0FBQ0wsWUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7QUFDckIsWUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7T0FDNUI7S0FDRjtHQUNGLENBQUMsT0FBTyxHQUFHLEVBQUU7O0dBRWI7Q0FDRjs7QUFFRCxTQUFTLENBQUMsU0FBUyxHQUFHLElBQUksS0FBSyxFQUFFLENBQUM7O3FCQUVuQixTQUFTIiwiZmlsZSI6ImV4Y2VwdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGVycm9yUHJvcHMgPSBbXG4gICdkZXNjcmlwdGlvbicsXG4gICdmaWxlTmFtZScsXG4gICdsaW5lTnVtYmVyJyxcbiAgJ2VuZExpbmVOdW1iZXInLFxuICAnbWVzc2FnZScsXG4gICduYW1lJyxcbiAgJ251bWJlcicsXG4gICdzdGFjaydcbl07XG5cbmZ1bmN0aW9uIEV4Y2VwdGlvbihtZXNzYWdlLCBub2RlKSB7XG4gIGxldCBsb2MgPSBub2RlICYmIG5vZGUubG9jLFxuICAgIGxpbmUsXG4gICAgZW5kTGluZU51bWJlcixcbiAgICBjb2x1bW4sXG4gICAgZW5kQ29sdW1uO1xuXG4gIGlmIChsb2MpIHtcbiAgICBsaW5lID0gbG9jLnN0YXJ0LmxpbmU7XG4gICAgZW5kTGluZU51bWJlciA9IGxvYy5lbmQubGluZTtcbiAgICBjb2x1bW4gPSBsb2Muc3RhcnQuY29sdW1uO1xuICAgIGVuZENvbHVtbiA9IGxvYy5lbmQuY29sdW1uO1xuXG4gICAgbWVzc2FnZSArPSAnIC0gJyArIGxpbmUgKyAnOicgKyBjb2x1bW47XG4gIH1cblxuICBsZXQgdG1wID0gRXJyb3IucHJvdG90eXBlLmNvbnN0cnVjdG9yLmNhbGwodGhpcywgbWVzc2FnZSk7XG5cbiAgLy8gVW5mb3J0dW5hdGVseSBlcnJvcnMgYXJlIG5vdCBlbnVtZXJhYmxlIGluIENocm9tZSAoYXQgbGVhc3QpLCBzbyBgZm9yIHByb3AgaW4gdG1wYCBkb2Vzbid0IHdvcmsuXG4gIGZvciAobGV0IGlkeCA9IDA7IGlkeCA8IGVycm9yUHJvcHMubGVuZ3RoOyBpZHgrKykge1xuICAgIHRoaXNbZXJyb3JQcm9wc1tpZHhdXSA9IHRtcFtlcnJvclByb3BzW2lkeF1dO1xuICB9XG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgaWYgKEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKSB7XG4gICAgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UodGhpcywgRXhjZXB0aW9uKTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgaWYgKGxvYykge1xuICAgICAgdGhpcy5saW5lTnVtYmVyID0gbGluZTtcbiAgICAgIHRoaXMuZW5kTGluZU51bWJlciA9IGVuZExpbmVOdW1iZXI7XG5cbiAgICAgIC8vIFdvcmsgYXJvdW5kIGlzc3VlIHVuZGVyIHNhZmFyaSB3aGVyZSB3ZSBjYW4ndCBkaXJlY3RseSBzZXQgdGhlIGNvbHVtbiB2YWx1ZVxuICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICdjb2x1bW4nLCB7XG4gICAgICAgICAgdmFsdWU6IGNvbHVtbixcbiAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ2VuZENvbHVtbicsIHtcbiAgICAgICAgICB2YWx1ZTogZW5kQ29sdW1uLFxuICAgICAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNvbHVtbiA9IGNvbHVtbjtcbiAgICAgICAgdGhpcy5lbmRDb2x1bW4gPSBlbmRDb2x1bW47XG4gICAgICB9XG4gICAgfVxuICB9IGNhdGNoIChub3ApIHtcbiAgICAvKiBJZ25vcmUgaWYgdGhlIGJyb3dzZXIgaXMgdmVyeSBwYXJ0aWN1bGFyICovXG4gIH1cbn1cblxuRXhjZXB0aW9uLnByb3RvdHlwZSA9IG5ldyBFcnJvcigpO1xuXG5leHBvcnQgZGVmYXVsdCBFeGNlcHRpb247XG4iXX0=


/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars/helpers.js":
/*!****************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars/helpers.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
exports.registerDefaultHelpers = registerDefaultHelpers;
exports.moveHelperToHooks = moveHelperToHooks;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _helpersBlockHelperMissing = __webpack_require__(/*! ./helpers/block-helper-missing */ "./node_modules/handlebars/dist/cjs/handlebars/helpers/block-helper-missing.js");

var _helpersBlockHelperMissing2 = _interopRequireDefault(_helpersBlockHelperMissing);

var _helpersEach = __webpack_require__(/*! ./helpers/each */ "./node_modules/handlebars/dist/cjs/handlebars/helpers/each.js");

var _helpersEach2 = _interopRequireDefault(_helpersEach);

var _helpersHelperMissing = __webpack_require__(/*! ./helpers/helper-missing */ "./node_modules/handlebars/dist/cjs/handlebars/helpers/helper-missing.js");

var _helpersHelperMissing2 = _interopRequireDefault(_helpersHelperMissing);

var _helpersIf = __webpack_require__(/*! ./helpers/if */ "./node_modules/handlebars/dist/cjs/handlebars/helpers/if.js");

var _helpersIf2 = _interopRequireDefault(_helpersIf);

var _helpersLog = __webpack_require__(/*! ./helpers/log */ "./node_modules/handlebars/dist/cjs/handlebars/helpers/log.js");

var _helpersLog2 = _interopRequireDefault(_helpersLog);

var _helpersLookup = __webpack_require__(/*! ./helpers/lookup */ "./node_modules/handlebars/dist/cjs/handlebars/helpers/lookup.js");

var _helpersLookup2 = _interopRequireDefault(_helpersLookup);

var _helpersWith = __webpack_require__(/*! ./helpers/with */ "./node_modules/handlebars/dist/cjs/handlebars/helpers/with.js");

var _helpersWith2 = _interopRequireDefault(_helpersWith);

function registerDefaultHelpers(instance) {
  _helpersBlockHelperMissing2['default'](instance);
  _helpersEach2['default'](instance);
  _helpersHelperMissing2['default'](instance);
  _helpersIf2['default'](instance);
  _helpersLog2['default'](instance);
  _helpersLookup2['default'](instance);
  _helpersWith2['default'](instance);
}

function moveHelperToHooks(instance, helperName, keepHelper) {
  if (instance.helpers[helperName]) {
    instance.hooks[helperName] = instance.helpers[helperName];
    if (!keepHelper) {
      delete instance.helpers[helperName];
    }
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2hlbHBlcnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O3lDQUF1QyxnQ0FBZ0M7Ozs7MkJBQzlDLGdCQUFnQjs7OztvQ0FDUCwwQkFBMEI7Ozs7eUJBQ3JDLGNBQWM7Ozs7MEJBQ2IsZUFBZTs7Ozs2QkFDWixrQkFBa0I7Ozs7MkJBQ3BCLGdCQUFnQjs7OztBQUVsQyxTQUFTLHNCQUFzQixDQUFDLFFBQVEsRUFBRTtBQUMvQyx5Q0FBMkIsUUFBUSxDQUFDLENBQUM7QUFDckMsMkJBQWEsUUFBUSxDQUFDLENBQUM7QUFDdkIsb0NBQXNCLFFBQVEsQ0FBQyxDQUFDO0FBQ2hDLHlCQUFXLFFBQVEsQ0FBQyxDQUFDO0FBQ3JCLDBCQUFZLFFBQVEsQ0FBQyxDQUFDO0FBQ3RCLDZCQUFlLFFBQVEsQ0FBQyxDQUFDO0FBQ3pCLDJCQUFhLFFBQVEsQ0FBQyxDQUFDO0NBQ3hCOztBQUVNLFNBQVMsaUJBQWlCLENBQUMsUUFBUSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUU7QUFDbEUsTUFBSSxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxFQUFFO0FBQ2hDLFlBQVEsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUMxRCxRQUFJLENBQUMsVUFBVSxFQUFFO0FBQ2YsYUFBTyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0tBQ3JDO0dBQ0Y7Q0FDRiIsImZpbGUiOiJoZWxwZXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJlZ2lzdGVyQmxvY2tIZWxwZXJNaXNzaW5nIGZyb20gJy4vaGVscGVycy9ibG9jay1oZWxwZXItbWlzc2luZyc7XG5pbXBvcnQgcmVnaXN0ZXJFYWNoIGZyb20gJy4vaGVscGVycy9lYWNoJztcbmltcG9ydCByZWdpc3RlckhlbHBlck1pc3NpbmcgZnJvbSAnLi9oZWxwZXJzL2hlbHBlci1taXNzaW5nJztcbmltcG9ydCByZWdpc3RlcklmIGZyb20gJy4vaGVscGVycy9pZic7XG5pbXBvcnQgcmVnaXN0ZXJMb2cgZnJvbSAnLi9oZWxwZXJzL2xvZyc7XG5pbXBvcnQgcmVnaXN0ZXJMb29rdXAgZnJvbSAnLi9oZWxwZXJzL2xvb2t1cCc7XG5pbXBvcnQgcmVnaXN0ZXJXaXRoIGZyb20gJy4vaGVscGVycy93aXRoJztcblxuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyRGVmYXVsdEhlbHBlcnMoaW5zdGFuY2UpIHtcbiAgcmVnaXN0ZXJCbG9ja0hlbHBlck1pc3NpbmcoaW5zdGFuY2UpO1xuICByZWdpc3RlckVhY2goaW5zdGFuY2UpO1xuICByZWdpc3RlckhlbHBlck1pc3NpbmcoaW5zdGFuY2UpO1xuICByZWdpc3RlcklmKGluc3RhbmNlKTtcbiAgcmVnaXN0ZXJMb2coaW5zdGFuY2UpO1xuICByZWdpc3Rlckxvb2t1cChpbnN0YW5jZSk7XG4gIHJlZ2lzdGVyV2l0aChpbnN0YW5jZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtb3ZlSGVscGVyVG9Ib29rcyhpbnN0YW5jZSwgaGVscGVyTmFtZSwga2VlcEhlbHBlcikge1xuICBpZiAoaW5zdGFuY2UuaGVscGVyc1toZWxwZXJOYW1lXSkge1xuICAgIGluc3RhbmNlLmhvb2tzW2hlbHBlck5hbWVdID0gaW5zdGFuY2UuaGVscGVyc1toZWxwZXJOYW1lXTtcbiAgICBpZiAoIWtlZXBIZWxwZXIpIHtcbiAgICAgIGRlbGV0ZSBpbnN0YW5jZS5oZWxwZXJzW2hlbHBlck5hbWVdO1xuICAgIH1cbiAgfVxufVxuIl19


/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars/helpers/block-helper-missing.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars/helpers/block-helper-missing.js ***!
  \*************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/handlebars/dist/cjs/handlebars/utils.js");

exports["default"] = function (instance) {
  instance.registerHelper('blockHelperMissing', function (context, options) {
    var inverse = options.inverse,
        fn = options.fn;

    if (context === true) {
      return fn(this);
    } else if (context === false || context == null) {
      return inverse(this);
    } else if (_utils.isArray(context)) {
      if (context.length > 0) {
        if (options.ids) {
          options.ids = [options.name];
        }

        return instance.helpers.each(context, options);
      } else {
        return inverse(this);
      }
    } else {
      if (options.data && options.ids) {
        var data = _utils.createFrame(options.data);
        data.contextPath = _utils.appendContextPath(options.data.contextPath, options.name);
        options = { data: data };
      }

      return fn(context, options);
    }
  });
};

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2hlbHBlcnMvYmxvY2staGVscGVyLW1pc3NpbmcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztxQkFBd0QsVUFBVTs7cUJBRW5ELFVBQVMsUUFBUSxFQUFFO0FBQ2hDLFVBQVEsQ0FBQyxjQUFjLENBQUMsb0JBQW9CLEVBQUUsVUFBUyxPQUFPLEVBQUUsT0FBTyxFQUFFO0FBQ3ZFLFFBQUksT0FBTyxHQUFHLE9BQU8sQ0FBQyxPQUFPO1FBQzNCLEVBQUUsR0FBRyxPQUFPLENBQUMsRUFBRSxDQUFDOztBQUVsQixRQUFJLE9BQU8sS0FBSyxJQUFJLEVBQUU7QUFDcEIsYUFBTyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDakIsTUFBTSxJQUFJLE9BQU8sS0FBSyxLQUFLLElBQUksT0FBTyxJQUFJLElBQUksRUFBRTtBQUMvQyxhQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUN0QixNQUFNLElBQUksZUFBUSxPQUFPLENBQUMsRUFBRTtBQUMzQixVQUFJLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO0FBQ3RCLFlBQUksT0FBTyxDQUFDLEdBQUcsRUFBRTtBQUNmLGlCQUFPLENBQUMsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzlCOztBQUVELGVBQU8sUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO09BQ2hELE1BQU07QUFDTCxlQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztPQUN0QjtLQUNGLE1BQU07QUFDTCxVQUFJLE9BQU8sQ0FBQyxJQUFJLElBQUksT0FBTyxDQUFDLEdBQUcsRUFBRTtBQUMvQixZQUFJLElBQUksR0FBRyxtQkFBWSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDckMsWUFBSSxDQUFDLFdBQVcsR0FBRyx5QkFDakIsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQ3hCLE9BQU8sQ0FBQyxJQUFJLENBQ2IsQ0FBQztBQUNGLGVBQU8sR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQztPQUMxQjs7QUFFRCxhQUFPLEVBQUUsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7S0FDN0I7R0FDRixDQUFDLENBQUM7Q0FDSiIsImZpbGUiOiJibG9jay1oZWxwZXItbWlzc2luZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFwcGVuZENvbnRleHRQYXRoLCBjcmVhdGVGcmFtZSwgaXNBcnJheSB9IGZyb20gJy4uL3V0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oaW5zdGFuY2UpIHtcbiAgaW5zdGFuY2UucmVnaXN0ZXJIZWxwZXIoJ2Jsb2NrSGVscGVyTWlzc2luZycsIGZ1bmN0aW9uKGNvbnRleHQsIG9wdGlvbnMpIHtcbiAgICBsZXQgaW52ZXJzZSA9IG9wdGlvbnMuaW52ZXJzZSxcbiAgICAgIGZuID0gb3B0aW9ucy5mbjtcblxuICAgIGlmIChjb250ZXh0ID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gZm4odGhpcyk7XG4gICAgfSBlbHNlIGlmIChjb250ZXh0ID09PSBmYWxzZSB8fCBjb250ZXh0ID09IG51bGwpIHtcbiAgICAgIHJldHVybiBpbnZlcnNlKHRoaXMpO1xuICAgIH0gZWxzZSBpZiAoaXNBcnJheShjb250ZXh0KSkge1xuICAgICAgaWYgKGNvbnRleHQubGVuZ3RoID4gMCkge1xuICAgICAgICBpZiAob3B0aW9ucy5pZHMpIHtcbiAgICAgICAgICBvcHRpb25zLmlkcyA9IFtvcHRpb25zLm5hbWVdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGluc3RhbmNlLmhlbHBlcnMuZWFjaChjb250ZXh0LCBvcHRpb25zKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBpbnZlcnNlKHRoaXMpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAob3B0aW9ucy5kYXRhICYmIG9wdGlvbnMuaWRzKSB7XG4gICAgICAgIGxldCBkYXRhID0gY3JlYXRlRnJhbWUob3B0aW9ucy5kYXRhKTtcbiAgICAgICAgZGF0YS5jb250ZXh0UGF0aCA9IGFwcGVuZENvbnRleHRQYXRoKFxuICAgICAgICAgIG9wdGlvbnMuZGF0YS5jb250ZXh0UGF0aCxcbiAgICAgICAgICBvcHRpb25zLm5hbWVcbiAgICAgICAgKTtcbiAgICAgICAgb3B0aW9ucyA9IHsgZGF0YTogZGF0YSB9O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZm4oY29udGV4dCwgb3B0aW9ucyk7XG4gICAgfVxuICB9KTtcbn1cbiJdfQ==


/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars/helpers/each.js":
/*!*********************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars/helpers/each.js ***!
  \*********************************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/handlebars/dist/cjs/handlebars/utils.js");

var _exception = __webpack_require__(/*! ../exception */ "./node_modules/handlebars/dist/cjs/handlebars/exception.js");

var _exception2 = _interopRequireDefault(_exception);

exports["default"] = function (instance) {
  instance.registerHelper('each', function (context, options) {
    if (!options) {
      throw new _exception2['default']('Must pass iterator to #each');
    }

    var fn = options.fn,
        inverse = options.inverse,
        i = 0,
        ret = '',
        data = undefined,
        contextPath = undefined;

    if (options.data && options.ids) {
      contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]) + '.';
    }

    if (_utils.isFunction(context)) {
      context = context.call(this);
    }

    if (options.data) {
      data = _utils.createFrame(options.data);
    }

    function execIteration(field, index, last) {
      if (data) {
        data.key = field;
        data.index = index;
        data.first = index === 0;
        data.last = !!last;

        if (contextPath) {
          data.contextPath = contextPath + field;
        }
      }

      ret = ret + fn(context[field], {
        data: data,
        blockParams: _utils.blockParams([context[field], field], [contextPath + field, null])
      });
    }

    if (context && typeof context === 'object') {
      if (_utils.isArray(context)) {
        for (var j = context.length; i < j; i++) {
          if (i in context) {
            execIteration(i, i, i === context.length - 1);
          }
        }
      } else if (__webpack_require__.g.Symbol && context[__webpack_require__.g.Symbol.iterator]) {
        var newContext = [];
        var iterator = context[__webpack_require__.g.Symbol.iterator]();
        for (var it = iterator.next(); !it.done; it = iterator.next()) {
          newContext.push(it.value);
        }
        context = newContext;
        for (var j = context.length; i < j; i++) {
          execIteration(i, i, i === context.length - 1);
        }
      } else {
        (function () {
          var priorKey = undefined;

          Object.keys(context).forEach(function (key) {
            // We're running the iterations one step out of sync so we can detect
            // the last iteration without have to scan the object twice and create
            // an itermediate keys array.
            if (priorKey !== undefined) {
              execIteration(priorKey, i - 1);
            }
            priorKey = key;
            i++;
          });
          if (priorKey !== undefined) {
            execIteration(priorKey, i - 1, true);
          }
        })();
      }
    }

    if (i === 0) {
      ret = inverse(this);
    }

    return ret;
  });
};

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2hlbHBlcnMvZWFjaC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O3FCQU1PLFVBQVU7O3lCQUNLLGNBQWM7Ozs7cUJBRXJCLFVBQVMsUUFBUSxFQUFFO0FBQ2hDLFVBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLFVBQVMsT0FBTyxFQUFFLE9BQU8sRUFBRTtBQUN6RCxRQUFJLENBQUMsT0FBTyxFQUFFO0FBQ1osWUFBTSwyQkFBYyw2QkFBNkIsQ0FBQyxDQUFDO0tBQ3BEOztBQUVELFFBQUksRUFBRSxHQUFHLE9BQU8sQ0FBQyxFQUFFO1FBQ2pCLE9BQU8sR0FBRyxPQUFPLENBQUMsT0FBTztRQUN6QixDQUFDLEdBQUcsQ0FBQztRQUNMLEdBQUcsR0FBRyxFQUFFO1FBQ1IsSUFBSSxZQUFBO1FBQ0osV0FBVyxZQUFBLENBQUM7O0FBRWQsUUFBSSxPQUFPLENBQUMsSUFBSSxJQUFJLE9BQU8sQ0FBQyxHQUFHLEVBQUU7QUFDL0IsaUJBQVcsR0FDVCx5QkFBa0IsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztLQUNyRTs7QUFFRCxRQUFJLGtCQUFXLE9BQU8sQ0FBQyxFQUFFO0FBQ3ZCLGFBQU8sR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQzlCOztBQUVELFFBQUksT0FBTyxDQUFDLElBQUksRUFBRTtBQUNoQixVQUFJLEdBQUcsbUJBQVksT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2xDOztBQUVELGFBQVMsYUFBYSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFO0FBQ3pDLFVBQUksSUFBSSxFQUFFO0FBQ1IsWUFBSSxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUM7QUFDakIsWUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7QUFDbkIsWUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLEtBQUssQ0FBQyxDQUFDO0FBQ3pCLFlBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQzs7QUFFbkIsWUFBSSxXQUFXLEVBQUU7QUFDZixjQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsR0FBRyxLQUFLLENBQUM7U0FDeEM7T0FDRjs7QUFFRCxTQUFHLEdBQ0QsR0FBRyxHQUNILEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7QUFDakIsWUFBSSxFQUFFLElBQUk7QUFDVixtQkFBVyxFQUFFLG1CQUNYLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLEtBQUssQ0FBQyxFQUN2QixDQUFDLFdBQVcsR0FBRyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQzVCO09BQ0YsQ0FBQyxDQUFDO0tBQ047O0FBRUQsUUFBSSxPQUFPLElBQUksT0FBTyxPQUFPLEtBQUssUUFBUSxFQUFFO0FBQzFDLFVBQUksZUFBUSxPQUFPLENBQUMsRUFBRTtBQUNwQixhQUFLLElBQUksQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUN2QyxjQUFJLENBQUMsSUFBSSxPQUFPLEVBQUU7QUFDaEIseUJBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsS0FBSyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1dBQy9DO1NBQ0Y7T0FDRixNQUFNLElBQUksTUFBTSxDQUFDLE1BQU0sSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRTtBQUMzRCxZQUFNLFVBQVUsR0FBRyxFQUFFLENBQUM7QUFDdEIsWUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQztBQUNuRCxhQUFLLElBQUksRUFBRSxHQUFHLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxHQUFHLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBRTtBQUM3RCxvQkFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDM0I7QUFDRCxlQUFPLEdBQUcsVUFBVSxDQUFDO0FBQ3JCLGFBQUssSUFBSSxDQUFDLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQ3ZDLHVCQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEtBQUssT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztTQUMvQztPQUNGLE1BQU07O0FBQ0wsY0FBSSxRQUFRLFlBQUEsQ0FBQzs7QUFFYixnQkFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQSxHQUFHLEVBQUk7Ozs7QUFJbEMsZ0JBQUksUUFBUSxLQUFLLFNBQVMsRUFBRTtBQUMxQiwyQkFBYSxDQUFDLFFBQVEsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDaEM7QUFDRCxvQkFBUSxHQUFHLEdBQUcsQ0FBQztBQUNmLGFBQUMsRUFBRSxDQUFDO1dBQ0wsQ0FBQyxDQUFDO0FBQ0gsY0FBSSxRQUFRLEtBQUssU0FBUyxFQUFFO0FBQzFCLHlCQUFhLENBQUMsUUFBUSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7V0FDdEM7O09BQ0Y7S0FDRjs7QUFFRCxRQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7QUFDWCxTQUFHLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3JCOztBQUVELFdBQU8sR0FBRyxDQUFDO0dBQ1osQ0FBQyxDQUFDO0NBQ0oiLCJmaWxlIjoiZWFjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIGFwcGVuZENvbnRleHRQYXRoLFxuICBibG9ja1BhcmFtcyxcbiAgY3JlYXRlRnJhbWUsXG4gIGlzQXJyYXksXG4gIGlzRnVuY3Rpb25cbn0gZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IEV4Y2VwdGlvbiBmcm9tICcuLi9leGNlcHRpb24nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihpbnN0YW5jZSkge1xuICBpbnN0YW5jZS5yZWdpc3RlckhlbHBlcignZWFjaCcsIGZ1bmN0aW9uKGNvbnRleHQsIG9wdGlvbnMpIHtcbiAgICBpZiAoIW9wdGlvbnMpIHtcbiAgICAgIHRocm93IG5ldyBFeGNlcHRpb24oJ011c3QgcGFzcyBpdGVyYXRvciB0byAjZWFjaCcpO1xuICAgIH1cblxuICAgIGxldCBmbiA9IG9wdGlvbnMuZm4sXG4gICAgICBpbnZlcnNlID0gb3B0aW9ucy5pbnZlcnNlLFxuICAgICAgaSA9IDAsXG4gICAgICByZXQgPSAnJyxcbiAgICAgIGRhdGEsXG4gICAgICBjb250ZXh0UGF0aDtcblxuICAgIGlmIChvcHRpb25zLmRhdGEgJiYgb3B0aW9ucy5pZHMpIHtcbiAgICAgIGNvbnRleHRQYXRoID1cbiAgICAgICAgYXBwZW5kQ29udGV4dFBhdGgob3B0aW9ucy5kYXRhLmNvbnRleHRQYXRoLCBvcHRpb25zLmlkc1swXSkgKyAnLic7XG4gICAgfVxuXG4gICAgaWYgKGlzRnVuY3Rpb24oY29udGV4dCkpIHtcbiAgICAgIGNvbnRleHQgPSBjb250ZXh0LmNhbGwodGhpcyk7XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMuZGF0YSkge1xuICAgICAgZGF0YSA9IGNyZWF0ZUZyYW1lKG9wdGlvbnMuZGF0YSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZXhlY0l0ZXJhdGlvbihmaWVsZCwgaW5kZXgsIGxhc3QpIHtcbiAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgIGRhdGEua2V5ID0gZmllbGQ7XG4gICAgICAgIGRhdGEuaW5kZXggPSBpbmRleDtcbiAgICAgICAgZGF0YS5maXJzdCA9IGluZGV4ID09PSAwO1xuICAgICAgICBkYXRhLmxhc3QgPSAhIWxhc3Q7XG5cbiAgICAgICAgaWYgKGNvbnRleHRQYXRoKSB7XG4gICAgICAgICAgZGF0YS5jb250ZXh0UGF0aCA9IGNvbnRleHRQYXRoICsgZmllbGQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0ID1cbiAgICAgICAgcmV0ICtcbiAgICAgICAgZm4oY29udGV4dFtmaWVsZF0sIHtcbiAgICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICAgIGJsb2NrUGFyYW1zOiBibG9ja1BhcmFtcyhcbiAgICAgICAgICAgIFtjb250ZXh0W2ZpZWxkXSwgZmllbGRdLFxuICAgICAgICAgICAgW2NvbnRleHRQYXRoICsgZmllbGQsIG51bGxdXG4gICAgICAgICAgKVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoY29udGV4dCAmJiB0eXBlb2YgY29udGV4dCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGlmIChpc0FycmF5KGNvbnRleHQpKSB7XG4gICAgICAgIGZvciAobGV0IGogPSBjb250ZXh0Lmxlbmd0aDsgaSA8IGo7IGkrKykge1xuICAgICAgICAgIGlmIChpIGluIGNvbnRleHQpIHtcbiAgICAgICAgICAgIGV4ZWNJdGVyYXRpb24oaSwgaSwgaSA9PT0gY29udGV4dC5sZW5ndGggLSAxKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoZ2xvYmFsLlN5bWJvbCAmJiBjb250ZXh0W2dsb2JhbC5TeW1ib2wuaXRlcmF0b3JdKSB7XG4gICAgICAgIGNvbnN0IG5ld0NvbnRleHQgPSBbXTtcbiAgICAgICAgY29uc3QgaXRlcmF0b3IgPSBjb250ZXh0W2dsb2JhbC5TeW1ib2wuaXRlcmF0b3JdKCk7XG4gICAgICAgIGZvciAobGV0IGl0ID0gaXRlcmF0b3IubmV4dCgpOyAhaXQuZG9uZTsgaXQgPSBpdGVyYXRvci5uZXh0KCkpIHtcbiAgICAgICAgICBuZXdDb250ZXh0LnB1c2goaXQudmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnRleHQgPSBuZXdDb250ZXh0O1xuICAgICAgICBmb3IgKGxldCBqID0gY29udGV4dC5sZW5ndGg7IGkgPCBqOyBpKyspIHtcbiAgICAgICAgICBleGVjSXRlcmF0aW9uKGksIGksIGkgPT09IGNvbnRleHQubGVuZ3RoIC0gMSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBwcmlvcktleTtcblxuICAgICAgICBPYmplY3Qua2V5cyhjb250ZXh0KS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgLy8gV2UncmUgcnVubmluZyB0aGUgaXRlcmF0aW9ucyBvbmUgc3RlcCBvdXQgb2Ygc3luYyBzbyB3ZSBjYW4gZGV0ZWN0XG4gICAgICAgICAgLy8gdGhlIGxhc3QgaXRlcmF0aW9uIHdpdGhvdXQgaGF2ZSB0byBzY2FuIHRoZSBvYmplY3QgdHdpY2UgYW5kIGNyZWF0ZVxuICAgICAgICAgIC8vIGFuIGl0ZXJtZWRpYXRlIGtleXMgYXJyYXkuXG4gICAgICAgICAgaWYgKHByaW9yS2V5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGV4ZWNJdGVyYXRpb24ocHJpb3JLZXksIGkgLSAxKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcHJpb3JLZXkgPSBrZXk7XG4gICAgICAgICAgaSsrO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHByaW9yS2V5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBleGVjSXRlcmF0aW9uKHByaW9yS2V5LCBpIC0gMSwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaSA9PT0gMCkge1xuICAgICAgcmV0ID0gaW52ZXJzZSh0aGlzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmV0O1xuICB9KTtcbn1cbiJdfQ==


/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars/helpers/helper-missing.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars/helpers/helper-missing.js ***!
  \*******************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _exception = __webpack_require__(/*! ../exception */ "./node_modules/handlebars/dist/cjs/handlebars/exception.js");

var _exception2 = _interopRequireDefault(_exception);

exports["default"] = function (instance) {
  instance.registerHelper('helperMissing', function () /* [args, ]options */{
    if (arguments.length === 1) {
      // A missing field in a {{foo}} construct.
      return undefined;
    } else {
      // Someone is actually trying to call something, blow up.
      throw new _exception2['default']('Missing helper: "' + arguments[arguments.length - 1].name + '"');
    }
  });
};

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2hlbHBlcnMvaGVscGVyLW1pc3NpbmcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozt5QkFBc0IsY0FBYzs7OztxQkFFckIsVUFBUyxRQUFRLEVBQUU7QUFDaEMsVUFBUSxDQUFDLGNBQWMsQ0FBQyxlQUFlLEVBQUUsaUNBQWdDO0FBQ3ZFLFFBQUksU0FBUyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7O0FBRTFCLGFBQU8sU0FBUyxDQUFDO0tBQ2xCLE1BQU07O0FBRUwsWUFBTSwyQkFDSixtQkFBbUIsR0FBRyxTQUFTLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUNqRSxDQUFDO0tBQ0g7R0FDRixDQUFDLENBQUM7Q0FDSiIsImZpbGUiOiJoZWxwZXItbWlzc2luZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBFeGNlcHRpb24gZnJvbSAnLi4vZXhjZXB0aW9uJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oaW5zdGFuY2UpIHtcbiAgaW5zdGFuY2UucmVnaXN0ZXJIZWxwZXIoJ2hlbHBlck1pc3NpbmcnLCBmdW5jdGlvbigvKiBbYXJncywgXW9wdGlvbnMgKi8pIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgLy8gQSBtaXNzaW5nIGZpZWxkIGluIGEge3tmb299fSBjb25zdHJ1Y3QuXG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBTb21lb25lIGlzIGFjdHVhbGx5IHRyeWluZyB0byBjYWxsIHNvbWV0aGluZywgYmxvdyB1cC5cbiAgICAgIHRocm93IG5ldyBFeGNlcHRpb24oXG4gICAgICAgICdNaXNzaW5nIGhlbHBlcjogXCInICsgYXJndW1lbnRzW2FyZ3VtZW50cy5sZW5ndGggLSAxXS5uYW1lICsgJ1wiJ1xuICAgICAgKTtcbiAgICB9XG4gIH0pO1xufVxuIl19


/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars/helpers/if.js":
/*!*******************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars/helpers/if.js ***!
  \*******************************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/handlebars/dist/cjs/handlebars/utils.js");

var _exception = __webpack_require__(/*! ../exception */ "./node_modules/handlebars/dist/cjs/handlebars/exception.js");

var _exception2 = _interopRequireDefault(_exception);

exports["default"] = function (instance) {
  instance.registerHelper('if', function (conditional, options) {
    if (arguments.length != 2) {
      throw new _exception2['default']('#if requires exactly one argument');
    }
    if (_utils.isFunction(conditional)) {
      conditional = conditional.call(this);
    }

    // Default behavior is to render the positive path if the value is truthy and not empty.
    // The `includeZero` option may be set to treat the condtional as purely not empty based on the
    // behavior of isEmpty. Effectively this determines if 0 is handled by the positive path or negative.
    if (!options.hash.includeZero && !conditional || _utils.isEmpty(conditional)) {
      return options.inverse(this);
    } else {
      return options.fn(this);
    }
  });

  instance.registerHelper('unless', function (conditional, options) {
    if (arguments.length != 2) {
      throw new _exception2['default']('#unless requires exactly one argument');
    }
    return instance.helpers['if'].call(this, conditional, {
      fn: options.inverse,
      inverse: options.fn,
      hash: options.hash
    });
  });
};

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2hlbHBlcnMvaWYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztxQkFBb0MsVUFBVTs7eUJBQ3hCLGNBQWM7Ozs7cUJBRXJCLFVBQVMsUUFBUSxFQUFFO0FBQ2hDLFVBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLFVBQVMsV0FBVyxFQUFFLE9BQU8sRUFBRTtBQUMzRCxRQUFJLFNBQVMsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO0FBQ3pCLFlBQU0sMkJBQWMsbUNBQW1DLENBQUMsQ0FBQztLQUMxRDtBQUNELFFBQUksa0JBQVcsV0FBVyxDQUFDLEVBQUU7QUFDM0IsaUJBQVcsR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3RDOzs7OztBQUtELFFBQUksQUFBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxJQUFJLENBQUMsV0FBVyxJQUFLLGVBQVEsV0FBVyxDQUFDLEVBQUU7QUFDdkUsYUFBTyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQzlCLE1BQU07QUFDTCxhQUFPLE9BQU8sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDekI7R0FDRixDQUFDLENBQUM7O0FBRUgsVUFBUSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsVUFBUyxXQUFXLEVBQUUsT0FBTyxFQUFFO0FBQy9ELFFBQUksU0FBUyxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7QUFDekIsWUFBTSwyQkFBYyx1Q0FBdUMsQ0FBQyxDQUFDO0tBQzlEO0FBQ0QsV0FBTyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsV0FBVyxFQUFFO0FBQ3BELFFBQUUsRUFBRSxPQUFPLENBQUMsT0FBTztBQUNuQixhQUFPLEVBQUUsT0FBTyxDQUFDLEVBQUU7QUFDbkIsVUFBSSxFQUFFLE9BQU8sQ0FBQyxJQUFJO0tBQ25CLENBQUMsQ0FBQztHQUNKLENBQUMsQ0FBQztDQUNKIiwiZmlsZSI6ImlmLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNFbXB0eSwgaXNGdW5jdGlvbiB9IGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCBFeGNlcHRpb24gZnJvbSAnLi4vZXhjZXB0aW9uJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oaW5zdGFuY2UpIHtcbiAgaW5zdGFuY2UucmVnaXN0ZXJIZWxwZXIoJ2lmJywgZnVuY3Rpb24oY29uZGl0aW9uYWwsIG9wdGlvbnMpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCAhPSAyKSB7XG4gICAgICB0aHJvdyBuZXcgRXhjZXB0aW9uKCcjaWYgcmVxdWlyZXMgZXhhY3RseSBvbmUgYXJndW1lbnQnKTtcbiAgICB9XG4gICAgaWYgKGlzRnVuY3Rpb24oY29uZGl0aW9uYWwpKSB7XG4gICAgICBjb25kaXRpb25hbCA9IGNvbmRpdGlvbmFsLmNhbGwodGhpcyk7XG4gICAgfVxuXG4gICAgLy8gRGVmYXVsdCBiZWhhdmlvciBpcyB0byByZW5kZXIgdGhlIHBvc2l0aXZlIHBhdGggaWYgdGhlIHZhbHVlIGlzIHRydXRoeSBhbmQgbm90IGVtcHR5LlxuICAgIC8vIFRoZSBgaW5jbHVkZVplcm9gIG9wdGlvbiBtYXkgYmUgc2V0IHRvIHRyZWF0IHRoZSBjb25kdGlvbmFsIGFzIHB1cmVseSBub3QgZW1wdHkgYmFzZWQgb24gdGhlXG4gICAgLy8gYmVoYXZpb3Igb2YgaXNFbXB0eS4gRWZmZWN0aXZlbHkgdGhpcyBkZXRlcm1pbmVzIGlmIDAgaXMgaGFuZGxlZCBieSB0aGUgcG9zaXRpdmUgcGF0aCBvciBuZWdhdGl2ZS5cbiAgICBpZiAoKCFvcHRpb25zLmhhc2guaW5jbHVkZVplcm8gJiYgIWNvbmRpdGlvbmFsKSB8fCBpc0VtcHR5KGNvbmRpdGlvbmFsKSkge1xuICAgICAgcmV0dXJuIG9wdGlvbnMuaW52ZXJzZSh0aGlzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG9wdGlvbnMuZm4odGhpcyk7XG4gICAgfVxuICB9KTtcblxuICBpbnN0YW5jZS5yZWdpc3RlckhlbHBlcigndW5sZXNzJywgZnVuY3Rpb24oY29uZGl0aW9uYWwsIG9wdGlvbnMpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCAhPSAyKSB7XG4gICAgICB0aHJvdyBuZXcgRXhjZXB0aW9uKCcjdW5sZXNzIHJlcXVpcmVzIGV4YWN0bHkgb25lIGFyZ3VtZW50Jyk7XG4gICAgfVxuICAgIHJldHVybiBpbnN0YW5jZS5oZWxwZXJzWydpZiddLmNhbGwodGhpcywgY29uZGl0aW9uYWwsIHtcbiAgICAgIGZuOiBvcHRpb25zLmludmVyc2UsXG4gICAgICBpbnZlcnNlOiBvcHRpb25zLmZuLFxuICAgICAgaGFzaDogb3B0aW9ucy5oYXNoXG4gICAgfSk7XG4gIH0pO1xufVxuIl19


/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars/helpers/log.js":
/*!********************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars/helpers/log.js ***!
  \********************************************************************/
/***/ ((module, exports) => {

"use strict";


exports.__esModule = true;

exports["default"] = function (instance) {
  instance.registerHelper('log', function () /* message, options */{
    var args = [undefined],
        options = arguments[arguments.length - 1];
    for (var i = 0; i < arguments.length - 1; i++) {
      args.push(arguments[i]);
    }

    var level = 1;
    if (options.hash.level != null) {
      level = options.hash.level;
    } else if (options.data && options.data.level != null) {
      level = options.data.level;
    }
    args[0] = level;

    instance.log.apply(instance, args);
  });
};

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2hlbHBlcnMvbG9nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7cUJBQWUsVUFBUyxRQUFRLEVBQUU7QUFDaEMsVUFBUSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsa0NBQWlDO0FBQzlELFFBQUksSUFBSSxHQUFHLENBQUMsU0FBUyxDQUFDO1FBQ3BCLE9BQU8sR0FBRyxTQUFTLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztBQUM1QyxTQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDN0MsVUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUN6Qjs7QUFFRCxRQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7QUFDZCxRQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksRUFBRTtBQUM5QixXQUFLLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7S0FDNUIsTUFBTSxJQUFJLE9BQU8sQ0FBQyxJQUFJLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxFQUFFO0FBQ3JELFdBQUssR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztLQUM1QjtBQUNELFFBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7O0FBRWhCLFlBQVEsQ0FBQyxHQUFHLE1BQUEsQ0FBWixRQUFRLEVBQVEsSUFBSSxDQUFDLENBQUM7R0FDdkIsQ0FBQyxDQUFDO0NBQ0oiLCJmaWxlIjoibG9nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oaW5zdGFuY2UpIHtcbiAgaW5zdGFuY2UucmVnaXN0ZXJIZWxwZXIoJ2xvZycsIGZ1bmN0aW9uKC8qIG1lc3NhZ2UsIG9wdGlvbnMgKi8pIHtcbiAgICBsZXQgYXJncyA9IFt1bmRlZmluZWRdLFxuICAgICAgb3B0aW9ucyA9IGFyZ3VtZW50c1thcmd1bWVudHMubGVuZ3RoIC0gMV07XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICBhcmdzLnB1c2goYXJndW1lbnRzW2ldKTtcbiAgICB9XG5cbiAgICBsZXQgbGV2ZWwgPSAxO1xuICAgIGlmIChvcHRpb25zLmhhc2gubGV2ZWwgIT0gbnVsbCkge1xuICAgICAgbGV2ZWwgPSBvcHRpb25zLmhhc2gubGV2ZWw7XG4gICAgfSBlbHNlIGlmIChvcHRpb25zLmRhdGEgJiYgb3B0aW9ucy5kYXRhLmxldmVsICE9IG51bGwpIHtcbiAgICAgIGxldmVsID0gb3B0aW9ucy5kYXRhLmxldmVsO1xuICAgIH1cbiAgICBhcmdzWzBdID0gbGV2ZWw7XG5cbiAgICBpbnN0YW5jZS5sb2coLi4uYXJncyk7XG4gIH0pO1xufVxuIl19


/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars/helpers/lookup.js":
/*!***********************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars/helpers/lookup.js ***!
  \***********************************************************************/
/***/ ((module, exports) => {

"use strict";


exports.__esModule = true;

exports["default"] = function (instance) {
  instance.registerHelper('lookup', function (obj, field, options) {
    if (!obj) {
      // Note for 5.0: Change to "obj == null" in 5.0
      return obj;
    }
    return options.lookupProperty(obj, field);
  });
};

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2hlbHBlcnMvbG9va3VwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7cUJBQWUsVUFBUyxRQUFRLEVBQUU7QUFDaEMsVUFBUSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsVUFBUyxHQUFHLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRTtBQUM5RCxRQUFJLENBQUMsR0FBRyxFQUFFOztBQUVSLGFBQU8sR0FBRyxDQUFDO0tBQ1o7QUFDRCxXQUFPLE9BQU8sQ0FBQyxjQUFjLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO0dBQzNDLENBQUMsQ0FBQztDQUNKIiwiZmlsZSI6Imxvb2t1cC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGluc3RhbmNlKSB7XG4gIGluc3RhbmNlLnJlZ2lzdGVySGVscGVyKCdsb29rdXAnLCBmdW5jdGlvbihvYmosIGZpZWxkLCBvcHRpb25zKSB7XG4gICAgaWYgKCFvYmopIHtcbiAgICAgIC8vIE5vdGUgZm9yIDUuMDogQ2hhbmdlIHRvIFwib2JqID09IG51bGxcIiBpbiA1LjBcbiAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuICAgIHJldHVybiBvcHRpb25zLmxvb2t1cFByb3BlcnR5KG9iaiwgZmllbGQpO1xuICB9KTtcbn1cbiJdfQ==


/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars/helpers/with.js":
/*!*********************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars/helpers/with.js ***!
  \*********************************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/handlebars/dist/cjs/handlebars/utils.js");

var _exception = __webpack_require__(/*! ../exception */ "./node_modules/handlebars/dist/cjs/handlebars/exception.js");

var _exception2 = _interopRequireDefault(_exception);

exports["default"] = function (instance) {
  instance.registerHelper('with', function (context, options) {
    if (arguments.length != 2) {
      throw new _exception2['default']('#with requires exactly one argument');
    }
    if (_utils.isFunction(context)) {
      context = context.call(this);
    }

    var fn = options.fn;

    if (!_utils.isEmpty(context)) {
      var data = options.data;
      if (options.data && options.ids) {
        data = _utils.createFrame(options.data);
        data.contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]);
      }

      return fn(context, {
        data: data,
        blockParams: _utils.blockParams([context], [data && data.contextPath])
      });
    } else {
      return options.inverse(this);
    }
  });
};

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2hlbHBlcnMvd2l0aC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O3FCQU1PLFVBQVU7O3lCQUNLLGNBQWM7Ozs7cUJBRXJCLFVBQVMsUUFBUSxFQUFFO0FBQ2hDLFVBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLFVBQVMsT0FBTyxFQUFFLE9BQU8sRUFBRTtBQUN6RCxRQUFJLFNBQVMsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO0FBQ3pCLFlBQU0sMkJBQWMscUNBQXFDLENBQUMsQ0FBQztLQUM1RDtBQUNELFFBQUksa0JBQVcsT0FBTyxDQUFDLEVBQUU7QUFDdkIsYUFBTyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDOUI7O0FBRUQsUUFBSSxFQUFFLEdBQUcsT0FBTyxDQUFDLEVBQUUsQ0FBQzs7QUFFcEIsUUFBSSxDQUFDLGVBQVEsT0FBTyxDQUFDLEVBQUU7QUFDckIsVUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQztBQUN4QixVQUFJLE9BQU8sQ0FBQyxJQUFJLElBQUksT0FBTyxDQUFDLEdBQUcsRUFBRTtBQUMvQixZQUFJLEdBQUcsbUJBQVksT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2pDLFlBQUksQ0FBQyxXQUFXLEdBQUcseUJBQ2pCLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUNmLENBQUM7T0FDSDs7QUFFRCxhQUFPLEVBQUUsQ0FBQyxPQUFPLEVBQUU7QUFDakIsWUFBSSxFQUFFLElBQUk7QUFDVixtQkFBVyxFQUFFLG1CQUFZLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO09BQ2hFLENBQUMsQ0FBQztLQUNKLE1BQU07QUFDTCxhQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDOUI7R0FDRixDQUFDLENBQUM7Q0FDSiIsImZpbGUiOiJ3aXRoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgYXBwZW5kQ29udGV4dFBhdGgsXG4gIGJsb2NrUGFyYW1zLFxuICBjcmVhdGVGcmFtZSxcbiAgaXNFbXB0eSxcbiAgaXNGdW5jdGlvblxufSBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgRXhjZXB0aW9uIGZyb20gJy4uL2V4Y2VwdGlvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGluc3RhbmNlKSB7XG4gIGluc3RhbmNlLnJlZ2lzdGVySGVscGVyKCd3aXRoJywgZnVuY3Rpb24oY29udGV4dCwgb3B0aW9ucykge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoICE9IDIpIHtcbiAgICAgIHRocm93IG5ldyBFeGNlcHRpb24oJyN3aXRoIHJlcXVpcmVzIGV4YWN0bHkgb25lIGFyZ3VtZW50Jyk7XG4gICAgfVxuICAgIGlmIChpc0Z1bmN0aW9uKGNvbnRleHQpKSB7XG4gICAgICBjb250ZXh0ID0gY29udGV4dC5jYWxsKHRoaXMpO1xuICAgIH1cblxuICAgIGxldCBmbiA9IG9wdGlvbnMuZm47XG5cbiAgICBpZiAoIWlzRW1wdHkoY29udGV4dCkpIHtcbiAgICAgIGxldCBkYXRhID0gb3B0aW9ucy5kYXRhO1xuICAgICAgaWYgKG9wdGlvbnMuZGF0YSAmJiBvcHRpb25zLmlkcykge1xuICAgICAgICBkYXRhID0gY3JlYXRlRnJhbWUob3B0aW9ucy5kYXRhKTtcbiAgICAgICAgZGF0YS5jb250ZXh0UGF0aCA9IGFwcGVuZENvbnRleHRQYXRoKFxuICAgICAgICAgIG9wdGlvbnMuZGF0YS5jb250ZXh0UGF0aCxcbiAgICAgICAgICBvcHRpb25zLmlkc1swXVxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZm4oY29udGV4dCwge1xuICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICBibG9ja1BhcmFtczogYmxvY2tQYXJhbXMoW2NvbnRleHRdLCBbZGF0YSAmJiBkYXRhLmNvbnRleHRQYXRoXSlcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gb3B0aW9ucy5pbnZlcnNlKHRoaXMpO1xuICAgIH1cbiAgfSk7XG59XG4iXX0=


/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars/internal/create-new-lookup-object.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars/internal/create-new-lookup-object.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
exports.createNewLookupObject = createNewLookupObject;

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/handlebars/dist/cjs/handlebars/utils.js");

/**
 * Create a new object with "null"-prototype to avoid truthy results on prototype properties.
 * The resulting object can be used with "object[property]" to check if a property exists
 * @param {...object} sources a varargs parameter of source objects that will be merged
 * @returns {object}
 */

function createNewLookupObject() {
  for (var _len = arguments.length, sources = Array(_len), _key = 0; _key < _len; _key++) {
    sources[_key] = arguments[_key];
  }

  return _utils.extend.apply(undefined, [Object.create(null)].concat(sources));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2ludGVybmFsL2NyZWF0ZS1uZXctbG9va3VwLW9iamVjdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztxQkFBdUIsVUFBVTs7Ozs7Ozs7O0FBUTFCLFNBQVMscUJBQXFCLEdBQWE7b0NBQVQsT0FBTztBQUFQLFdBQU87OztBQUM5QyxTQUFPLGdDQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQUssT0FBTyxFQUFDLENBQUM7Q0FDaEQiLCJmaWxlIjoiY3JlYXRlLW5ldy1sb29rdXAtb2JqZWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZXh0ZW5kIH0gZnJvbSAnLi4vdXRpbHMnO1xuXG4vKipcbiAqIENyZWF0ZSBhIG5ldyBvYmplY3Qgd2l0aCBcIm51bGxcIi1wcm90b3R5cGUgdG8gYXZvaWQgdHJ1dGh5IHJlc3VsdHMgb24gcHJvdG90eXBlIHByb3BlcnRpZXMuXG4gKiBUaGUgcmVzdWx0aW5nIG9iamVjdCBjYW4gYmUgdXNlZCB3aXRoIFwib2JqZWN0W3Byb3BlcnR5XVwiIHRvIGNoZWNrIGlmIGEgcHJvcGVydHkgZXhpc3RzXG4gKiBAcGFyYW0gey4uLm9iamVjdH0gc291cmNlcyBhIHZhcmFyZ3MgcGFyYW1ldGVyIG9mIHNvdXJjZSBvYmplY3RzIHRoYXQgd2lsbCBiZSBtZXJnZWRcbiAqIEByZXR1cm5zIHtvYmplY3R9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVOZXdMb29rdXBPYmplY3QoLi4uc291cmNlcykge1xuICByZXR1cm4gZXh0ZW5kKE9iamVjdC5jcmVhdGUobnVsbCksIC4uLnNvdXJjZXMpO1xufVxuIl19


/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars/internal/proto-access.js":
/*!******************************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars/internal/proto-access.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
exports.createProtoAccessControl = createProtoAccessControl;
exports.resultIsAllowed = resultIsAllowed;
exports.resetLoggedProperties = resetLoggedProperties;
// istanbul ignore next

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var _createNewLookupObject = __webpack_require__(/*! ./create-new-lookup-object */ "./node_modules/handlebars/dist/cjs/handlebars/internal/create-new-lookup-object.js");

var _logger = __webpack_require__(/*! ../logger */ "./node_modules/handlebars/dist/cjs/handlebars/logger.js");

var logger = _interopRequireWildcard(_logger);

var loggedProperties = Object.create(null);

function createProtoAccessControl(runtimeOptions) {
  var defaultMethodWhiteList = Object.create(null);
  defaultMethodWhiteList['constructor'] = false;
  defaultMethodWhiteList['__defineGetter__'] = false;
  defaultMethodWhiteList['__defineSetter__'] = false;
  defaultMethodWhiteList['__lookupGetter__'] = false;

  var defaultPropertyWhiteList = Object.create(null);
  // eslint-disable-next-line no-proto
  defaultPropertyWhiteList['__proto__'] = false;

  return {
    properties: {
      whitelist: _createNewLookupObject.createNewLookupObject(defaultPropertyWhiteList, runtimeOptions.allowedProtoProperties),
      defaultValue: runtimeOptions.allowProtoPropertiesByDefault
    },
    methods: {
      whitelist: _createNewLookupObject.createNewLookupObject(defaultMethodWhiteList, runtimeOptions.allowedProtoMethods),
      defaultValue: runtimeOptions.allowProtoMethodsByDefault
    }
  };
}

function resultIsAllowed(result, protoAccessControl, propertyName) {
  if (typeof result === 'function') {
    return checkWhiteList(protoAccessControl.methods, propertyName);
  } else {
    return checkWhiteList(protoAccessControl.properties, propertyName);
  }
}

function checkWhiteList(protoAccessControlForType, propertyName) {
  if (protoAccessControlForType.whitelist[propertyName] !== undefined) {
    return protoAccessControlForType.whitelist[propertyName] === true;
  }
  if (protoAccessControlForType.defaultValue !== undefined) {
    return protoAccessControlForType.defaultValue;
  }
  logUnexpecedPropertyAccessOnce(propertyName);
  return false;
}

function logUnexpecedPropertyAccessOnce(propertyName) {
  if (loggedProperties[propertyName] !== true) {
    loggedProperties[propertyName] = true;
    logger.log('error', 'Handlebars: Access has been denied to resolve the property "' + propertyName + '" because it is not an "own property" of its parent.\n' + 'You can add a runtime option to disable the check or this warning:\n' + 'See https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details');
  }
}

function resetLoggedProperties() {
  Object.keys(loggedProperties).forEach(function (propertyName) {
    delete loggedProperties[propertyName];
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2ludGVybmFsL3Byb3RvLWFjY2Vzcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O3FDQUFzQyw0QkFBNEI7O3NCQUMxQyxXQUFXOztJQUF2QixNQUFNOztBQUVsQixJQUFNLGdCQUFnQixHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7O0FBRXRDLFNBQVMsd0JBQXdCLENBQUMsY0FBYyxFQUFFO0FBQ3ZELE1BQUksc0JBQXNCLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNqRCx3QkFBc0IsQ0FBQyxhQUFhLENBQUMsR0FBRyxLQUFLLENBQUM7QUFDOUMsd0JBQXNCLENBQUMsa0JBQWtCLENBQUMsR0FBRyxLQUFLLENBQUM7QUFDbkQsd0JBQXNCLENBQUMsa0JBQWtCLENBQUMsR0FBRyxLQUFLLENBQUM7QUFDbkQsd0JBQXNCLENBQUMsa0JBQWtCLENBQUMsR0FBRyxLQUFLLENBQUM7O0FBRW5ELE1BQUksd0JBQXdCLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQzs7QUFFbkQsMEJBQXdCLENBQUMsV0FBVyxDQUFDLEdBQUcsS0FBSyxDQUFDOztBQUU5QyxTQUFPO0FBQ0wsY0FBVSxFQUFFO0FBQ1YsZUFBUyxFQUFFLDZDQUNULHdCQUF3QixFQUN4QixjQUFjLENBQUMsc0JBQXNCLENBQ3RDO0FBQ0Qsa0JBQVksRUFBRSxjQUFjLENBQUMsNkJBQTZCO0tBQzNEO0FBQ0QsV0FBTyxFQUFFO0FBQ1AsZUFBUyxFQUFFLDZDQUNULHNCQUFzQixFQUN0QixjQUFjLENBQUMsbUJBQW1CLENBQ25DO0FBQ0Qsa0JBQVksRUFBRSxjQUFjLENBQUMsMEJBQTBCO0tBQ3hEO0dBQ0YsQ0FBQztDQUNIOztBQUVNLFNBQVMsZUFBZSxDQUFDLE1BQU0sRUFBRSxrQkFBa0IsRUFBRSxZQUFZLEVBQUU7QUFDeEUsTUFBSSxPQUFPLE1BQU0sS0FBSyxVQUFVLEVBQUU7QUFDaEMsV0FBTyxjQUFjLENBQUMsa0JBQWtCLENBQUMsT0FBTyxFQUFFLFlBQVksQ0FBQyxDQUFDO0dBQ2pFLE1BQU07QUFDTCxXQUFPLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLEVBQUUsWUFBWSxDQUFDLENBQUM7R0FDcEU7Q0FDRjs7QUFFRCxTQUFTLGNBQWMsQ0FBQyx5QkFBeUIsRUFBRSxZQUFZLEVBQUU7QUFDL0QsTUFBSSx5QkFBeUIsQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLEtBQUssU0FBUyxFQUFFO0FBQ25FLFdBQU8seUJBQXlCLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxLQUFLLElBQUksQ0FBQztHQUNuRTtBQUNELE1BQUkseUJBQXlCLENBQUMsWUFBWSxLQUFLLFNBQVMsRUFBRTtBQUN4RCxXQUFPLHlCQUF5QixDQUFDLFlBQVksQ0FBQztHQUMvQztBQUNELGdDQUE4QixDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQzdDLFNBQU8sS0FBSyxDQUFDO0NBQ2Q7O0FBRUQsU0FBUyw4QkFBOEIsQ0FBQyxZQUFZLEVBQUU7QUFDcEQsTUFBSSxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsS0FBSyxJQUFJLEVBQUU7QUFDM0Msb0JBQWdCLENBQUMsWUFBWSxDQUFDLEdBQUcsSUFBSSxDQUFDO0FBQ3RDLFVBQU0sQ0FBQyxHQUFHLENBQ1IsT0FBTyxFQUNQLGlFQUErRCxZQUFZLG9JQUNILG9IQUMyQyxDQUNwSCxDQUFDO0dBQ0g7Q0FDRjs7QUFFTSxTQUFTLHFCQUFxQixHQUFHO0FBQ3RDLFFBQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQSxZQUFZLEVBQUk7QUFDcEQsV0FBTyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsQ0FBQztHQUN2QyxDQUFDLENBQUM7Q0FDSiIsImZpbGUiOiJwcm90by1hY2Nlc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVOZXdMb29rdXBPYmplY3QgfSBmcm9tICcuL2NyZWF0ZS1uZXctbG9va3VwLW9iamVjdCc7XG5pbXBvcnQgKiBhcyBsb2dnZXIgZnJvbSAnLi4vbG9nZ2VyJztcblxuY29uc3QgbG9nZ2VkUHJvcGVydGllcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQcm90b0FjY2Vzc0NvbnRyb2wocnVudGltZU9wdGlvbnMpIHtcbiAgbGV0IGRlZmF1bHRNZXRob2RXaGl0ZUxpc3QgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICBkZWZhdWx0TWV0aG9kV2hpdGVMaXN0Wydjb25zdHJ1Y3RvciddID0gZmFsc2U7XG4gIGRlZmF1bHRNZXRob2RXaGl0ZUxpc3RbJ19fZGVmaW5lR2V0dGVyX18nXSA9IGZhbHNlO1xuICBkZWZhdWx0TWV0aG9kV2hpdGVMaXN0WydfX2RlZmluZVNldHRlcl9fJ10gPSBmYWxzZTtcbiAgZGVmYXVsdE1ldGhvZFdoaXRlTGlzdFsnX19sb29rdXBHZXR0ZXJfXyddID0gZmFsc2U7XG5cbiAgbGV0IGRlZmF1bHRQcm9wZXJ0eVdoaXRlTGlzdCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b1xuICBkZWZhdWx0UHJvcGVydHlXaGl0ZUxpc3RbJ19fcHJvdG9fXyddID0gZmFsc2U7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICB3aGl0ZWxpc3Q6IGNyZWF0ZU5ld0xvb2t1cE9iamVjdChcbiAgICAgICAgZGVmYXVsdFByb3BlcnR5V2hpdGVMaXN0LFxuICAgICAgICBydW50aW1lT3B0aW9ucy5hbGxvd2VkUHJvdG9Qcm9wZXJ0aWVzXG4gICAgICApLFxuICAgICAgZGVmYXVsdFZhbHVlOiBydW50aW1lT3B0aW9ucy5hbGxvd1Byb3RvUHJvcGVydGllc0J5RGVmYXVsdFxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgd2hpdGVsaXN0OiBjcmVhdGVOZXdMb29rdXBPYmplY3QoXG4gICAgICAgIGRlZmF1bHRNZXRob2RXaGl0ZUxpc3QsXG4gICAgICAgIHJ1bnRpbWVPcHRpb25zLmFsbG93ZWRQcm90b01ldGhvZHNcbiAgICAgICksXG4gICAgICBkZWZhdWx0VmFsdWU6IHJ1bnRpbWVPcHRpb25zLmFsbG93UHJvdG9NZXRob2RzQnlEZWZhdWx0XG4gICAgfVxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzdWx0SXNBbGxvd2VkKHJlc3VsdCwgcHJvdG9BY2Nlc3NDb250cm9sLCBwcm9wZXJ0eU5hbWUpIHtcbiAgaWYgKHR5cGVvZiByZXN1bHQgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gY2hlY2tXaGl0ZUxpc3QocHJvdG9BY2Nlc3NDb250cm9sLm1ldGhvZHMsIHByb3BlcnR5TmFtZSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGNoZWNrV2hpdGVMaXN0KHByb3RvQWNjZXNzQ29udHJvbC5wcm9wZXJ0aWVzLCBwcm9wZXJ0eU5hbWUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNoZWNrV2hpdGVMaXN0KHByb3RvQWNjZXNzQ29udHJvbEZvclR5cGUsIHByb3BlcnR5TmFtZSkge1xuICBpZiAocHJvdG9BY2Nlc3NDb250cm9sRm9yVHlwZS53aGl0ZWxpc3RbcHJvcGVydHlOYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIHByb3RvQWNjZXNzQ29udHJvbEZvclR5cGUud2hpdGVsaXN0W3Byb3BlcnR5TmFtZV0gPT09IHRydWU7XG4gIH1cbiAgaWYgKHByb3RvQWNjZXNzQ29udHJvbEZvclR5cGUuZGVmYXVsdFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gcHJvdG9BY2Nlc3NDb250cm9sRm9yVHlwZS5kZWZhdWx0VmFsdWU7XG4gIH1cbiAgbG9nVW5leHBlY2VkUHJvcGVydHlBY2Nlc3NPbmNlKHByb3BlcnR5TmFtZSk7XG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gbG9nVW5leHBlY2VkUHJvcGVydHlBY2Nlc3NPbmNlKHByb3BlcnR5TmFtZSkge1xuICBpZiAobG9nZ2VkUHJvcGVydGllc1twcm9wZXJ0eU5hbWVdICE9PSB0cnVlKSB7XG4gICAgbG9nZ2VkUHJvcGVydGllc1twcm9wZXJ0eU5hbWVdID0gdHJ1ZTtcbiAgICBsb2dnZXIubG9nKFxuICAgICAgJ2Vycm9yJyxcbiAgICAgIGBIYW5kbGViYXJzOiBBY2Nlc3MgaGFzIGJlZW4gZGVuaWVkIHRvIHJlc29sdmUgdGhlIHByb3BlcnR5IFwiJHtwcm9wZXJ0eU5hbWV9XCIgYmVjYXVzZSBpdCBpcyBub3QgYW4gXCJvd24gcHJvcGVydHlcIiBvZiBpdHMgcGFyZW50LlxcbmAgK1xuICAgICAgICBgWW91IGNhbiBhZGQgYSBydW50aW1lIG9wdGlvbiB0byBkaXNhYmxlIHRoZSBjaGVjayBvciB0aGlzIHdhcm5pbmc6XFxuYCArXG4gICAgICAgIGBTZWUgaHR0cHM6Ly9oYW5kbGViYXJzanMuY29tL2FwaS1yZWZlcmVuY2UvcnVudGltZS1vcHRpb25zLmh0bWwjb3B0aW9ucy10by1jb250cm9sLXByb3RvdHlwZS1hY2Nlc3MgZm9yIGRldGFpbHNgXG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzZXRMb2dnZWRQcm9wZXJ0aWVzKCkge1xuICBPYmplY3Qua2V5cyhsb2dnZWRQcm9wZXJ0aWVzKS5mb3JFYWNoKHByb3BlcnR5TmFtZSA9PiB7XG4gICAgZGVsZXRlIGxvZ2dlZFByb3BlcnRpZXNbcHJvcGVydHlOYW1lXTtcbiAgfSk7XG59XG4iXX0=


/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars/internal/wrapHelper.js":
/*!****************************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars/internal/wrapHelper.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


exports.__esModule = true;
exports.wrapHelper = wrapHelper;

function wrapHelper(helper, transformOptionsFn) {
  if (typeof helper !== 'function') {
    // This should not happen, but apparently it does in https://github.com/wycats/handlebars.js/issues/1639
    // We try to make the wrapper least-invasive by not wrapping it, if the helper is not a function.
    return helper;
  }
  var wrapper = function wrapper() /* dynamic arguments */{
    var options = arguments[arguments.length - 1];
    arguments[arguments.length - 1] = transformOptionsFn(options);
    return helper.apply(this, arguments);
  };
  return wrapper;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2ludGVybmFsL3dyYXBIZWxwZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBTyxTQUFTLFVBQVUsQ0FBQyxNQUFNLEVBQUUsa0JBQWtCLEVBQUU7QUFDckQsTUFBSSxPQUFPLE1BQU0sS0FBSyxVQUFVLEVBQUU7OztBQUdoQyxXQUFPLE1BQU0sQ0FBQztHQUNmO0FBQ0QsTUFBSSxPQUFPLEdBQUcsU0FBVixPQUFPLDBCQUFxQztBQUM5QyxRQUFNLE9BQU8sR0FBRyxTQUFTLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztBQUNoRCxhQUFTLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsR0FBRyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUM5RCxXQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0dBQ3RDLENBQUM7QUFDRixTQUFPLE9BQU8sQ0FBQztDQUNoQiIsImZpbGUiOiJ3cmFwSGVscGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIHdyYXBIZWxwZXIoaGVscGVyLCB0cmFuc2Zvcm1PcHRpb25zRm4pIHtcbiAgaWYgKHR5cGVvZiBoZWxwZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAvLyBUaGlzIHNob3VsZCBub3QgaGFwcGVuLCBidXQgYXBwYXJlbnRseSBpdCBkb2VzIGluIGh0dHBzOi8vZ2l0aHViLmNvbS93eWNhdHMvaGFuZGxlYmFycy5qcy9pc3N1ZXMvMTYzOVxuICAgIC8vIFdlIHRyeSB0byBtYWtlIHRoZSB3cmFwcGVyIGxlYXN0LWludmFzaXZlIGJ5IG5vdCB3cmFwcGluZyBpdCwgaWYgdGhlIGhlbHBlciBpcyBub3QgYSBmdW5jdGlvbi5cbiAgICByZXR1cm4gaGVscGVyO1xuICB9XG4gIGxldCB3cmFwcGVyID0gZnVuY3Rpb24oLyogZHluYW1pYyBhcmd1bWVudHMgKi8pIHtcbiAgICBjb25zdCBvcHRpb25zID0gYXJndW1lbnRzW2FyZ3VtZW50cy5sZW5ndGggLSAxXTtcbiAgICBhcmd1bWVudHNbYXJndW1lbnRzLmxlbmd0aCAtIDFdID0gdHJhbnNmb3JtT3B0aW9uc0ZuKG9wdGlvbnMpO1xuICAgIHJldHVybiBoZWxwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcbiAgcmV0dXJuIHdyYXBwZXI7XG59XG4iXX0=


/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars/logger.js":
/*!***************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars/logger.js ***!
  \***************************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/handlebars/dist/cjs/handlebars/utils.js");

var logger = {
  methodMap: ['debug', 'info', 'warn', 'error'],
  level: 'info',

  // Maps a given level value to the `methodMap` indexes above.
  lookupLevel: function lookupLevel(level) {
    if (typeof level === 'string') {
      var levelMap = _utils.indexOf(logger.methodMap, level.toLowerCase());
      if (levelMap >= 0) {
        level = levelMap;
      } else {
        level = parseInt(level, 10);
      }
    }

    return level;
  },

  // Can be overridden in the host environment
  log: function log(level) {
    level = logger.lookupLevel(level);

    if (typeof console !== 'undefined' && logger.lookupLevel(logger.level) <= level) {
      var method = logger.methodMap[level];
      // eslint-disable-next-line no-console
      if (!console[method]) {
        method = 'log';
      }

      for (var _len = arguments.length, message = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        message[_key - 1] = arguments[_key];
      }

      console[method].apply(console, message); // eslint-disable-line no-console
    }
  }
};

exports["default"] = logger;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2xvZ2dlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O3FCQUF3QixTQUFTOztBQUVqQyxJQUFJLE1BQU0sR0FBRztBQUNYLFdBQVMsRUFBRSxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQztBQUM3QyxPQUFLLEVBQUUsTUFBTTs7O0FBR2IsYUFBVyxFQUFFLHFCQUFTLEtBQUssRUFBRTtBQUMzQixRQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsRUFBRTtBQUM3QixVQUFJLFFBQVEsR0FBRyxlQUFRLE1BQU0sQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7QUFDOUQsVUFBSSxRQUFRLElBQUksQ0FBQyxFQUFFO0FBQ2pCLGFBQUssR0FBRyxRQUFRLENBQUM7T0FDbEIsTUFBTTtBQUNMLGFBQUssR0FBRyxRQUFRLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO09BQzdCO0tBQ0Y7O0FBRUQsV0FBTyxLQUFLLENBQUM7R0FDZDs7O0FBR0QsS0FBRyxFQUFFLGFBQVMsS0FBSyxFQUFjO0FBQy9CLFNBQUssR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDOztBQUVsQyxRQUNFLE9BQU8sT0FBTyxLQUFLLFdBQVcsSUFDOUIsTUFBTSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxFQUN6QztBQUNBLFVBQUksTUFBTSxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7O0FBRXJDLFVBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUU7QUFDcEIsY0FBTSxHQUFHLEtBQUssQ0FBQztPQUNoQjs7d0NBWG1CLE9BQU87QUFBUCxlQUFPOzs7QUFZM0IsYUFBTyxDQUFDLE1BQU0sT0FBQyxDQUFmLE9BQU8sRUFBWSxPQUFPLENBQUMsQ0FBQztLQUM3QjtHQUNGO0NBQ0YsQ0FBQzs7cUJBRWEsTUFBTSIsImZpbGUiOiJsb2dnZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbmRleE9mIH0gZnJvbSAnLi91dGlscyc7XG5cbmxldCBsb2dnZXIgPSB7XG4gIG1ldGhvZE1hcDogWydkZWJ1ZycsICdpbmZvJywgJ3dhcm4nLCAnZXJyb3InXSxcbiAgbGV2ZWw6ICdpbmZvJyxcblxuICAvLyBNYXBzIGEgZ2l2ZW4gbGV2ZWwgdmFsdWUgdG8gdGhlIGBtZXRob2RNYXBgIGluZGV4ZXMgYWJvdmUuXG4gIGxvb2t1cExldmVsOiBmdW5jdGlvbihsZXZlbCkge1xuICAgIGlmICh0eXBlb2YgbGV2ZWwgPT09ICdzdHJpbmcnKSB7XG4gICAgICBsZXQgbGV2ZWxNYXAgPSBpbmRleE9mKGxvZ2dlci5tZXRob2RNYXAsIGxldmVsLnRvTG93ZXJDYXNlKCkpO1xuICAgICAgaWYgKGxldmVsTWFwID49IDApIHtcbiAgICAgICAgbGV2ZWwgPSBsZXZlbE1hcDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldmVsID0gcGFyc2VJbnQobGV2ZWwsIDEwKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbGV2ZWw7XG4gIH0sXG5cbiAgLy8gQ2FuIGJlIG92ZXJyaWRkZW4gaW4gdGhlIGhvc3QgZW52aXJvbm1lbnRcbiAgbG9nOiBmdW5jdGlvbihsZXZlbCwgLi4ubWVzc2FnZSkge1xuICAgIGxldmVsID0gbG9nZ2VyLmxvb2t1cExldmVsKGxldmVsKTtcblxuICAgIGlmIChcbiAgICAgIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgbG9nZ2VyLmxvb2t1cExldmVsKGxvZ2dlci5sZXZlbCkgPD0gbGV2ZWxcbiAgICApIHtcbiAgICAgIGxldCBtZXRob2QgPSBsb2dnZXIubWV0aG9kTWFwW2xldmVsXTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBpZiAoIWNvbnNvbGVbbWV0aG9kXSkge1xuICAgICAgICBtZXRob2QgPSAnbG9nJztcbiAgICAgIH1cbiAgICAgIGNvbnNvbGVbbWV0aG9kXSguLi5tZXNzYWdlKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBsb2dnZXI7XG4iXX0=


/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars/no-conflict.js":
/*!********************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars/no-conflict.js ***!
  \********************************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;

exports["default"] = function (Handlebars) {
  /* istanbul ignore next */
  var root = typeof __webpack_require__.g !== 'undefined' ? __webpack_require__.g : window,
      $Handlebars = root.Handlebars;
  /* istanbul ignore next */
  Handlebars.noConflict = function () {
    if (root.Handlebars === Handlebars) {
      root.Handlebars = $Handlebars;
    }
    return Handlebars;
  };
};

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL25vLWNvbmZsaWN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7cUJBQWUsVUFBUyxVQUFVLEVBQUU7O0FBRWxDLE1BQUksSUFBSSxHQUFHLE9BQU8sTUFBTSxLQUFLLFdBQVcsR0FBRyxNQUFNLEdBQUcsTUFBTTtNQUN4RCxXQUFXLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQzs7QUFFaEMsWUFBVSxDQUFDLFVBQVUsR0FBRyxZQUFXO0FBQ2pDLFFBQUksSUFBSSxDQUFDLFVBQVUsS0FBSyxVQUFVLEVBQUU7QUFDbEMsVUFBSSxDQUFDLFVBQVUsR0FBRyxXQUFXLENBQUM7S0FDL0I7QUFDRCxXQUFPLFVBQVUsQ0FBQztHQUNuQixDQUFDO0NBQ0giLCJmaWxlIjoibm8tY29uZmxpY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihIYW5kbGViYXJzKSB7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gIGxldCByb290ID0gdHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcgPyBnbG9iYWwgOiB3aW5kb3csXG4gICAgJEhhbmRsZWJhcnMgPSByb290LkhhbmRsZWJhcnM7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gIEhhbmRsZWJhcnMubm9Db25mbGljdCA9IGZ1bmN0aW9uKCkge1xuICAgIGlmIChyb290LkhhbmRsZWJhcnMgPT09IEhhbmRsZWJhcnMpIHtcbiAgICAgIHJvb3QuSGFuZGxlYmFycyA9ICRIYW5kbGViYXJzO1xuICAgIH1cbiAgICByZXR1cm4gSGFuZGxlYmFycztcbiAgfTtcbn1cbiJdfQ==


/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars/runtime.js":
/*!****************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars/runtime.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
exports.checkRevision = checkRevision;
exports.template = template;
exports.wrapProgram = wrapProgram;
exports.resolvePartial = resolvePartial;
exports.invokePartial = invokePartial;
exports.noop = noop;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

// istanbul ignore next

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/handlebars/dist/cjs/handlebars/utils.js");

var Utils = _interopRequireWildcard(_utils);

var _exception = __webpack_require__(/*! ./exception */ "./node_modules/handlebars/dist/cjs/handlebars/exception.js");

var _exception2 = _interopRequireDefault(_exception);

var _base = __webpack_require__(/*! ./base */ "./node_modules/handlebars/dist/cjs/handlebars/base.js");

var _helpers = __webpack_require__(/*! ./helpers */ "./node_modules/handlebars/dist/cjs/handlebars/helpers.js");

var _internalWrapHelper = __webpack_require__(/*! ./internal/wrapHelper */ "./node_modules/handlebars/dist/cjs/handlebars/internal/wrapHelper.js");

var _internalProtoAccess = __webpack_require__(/*! ./internal/proto-access */ "./node_modules/handlebars/dist/cjs/handlebars/internal/proto-access.js");

function checkRevision(compilerInfo) {
  var compilerRevision = compilerInfo && compilerInfo[0] || 1,
      currentRevision = _base.COMPILER_REVISION;

  if (compilerRevision >= _base.LAST_COMPATIBLE_COMPILER_REVISION && compilerRevision <= _base.COMPILER_REVISION) {
    return;
  }

  if (compilerRevision < _base.LAST_COMPATIBLE_COMPILER_REVISION) {
    var runtimeVersions = _base.REVISION_CHANGES[currentRevision],
        compilerVersions = _base.REVISION_CHANGES[compilerRevision];
    throw new _exception2['default']('Template was precompiled with an older version of Handlebars than the current runtime. ' + 'Please update your precompiler to a newer version (' + runtimeVersions + ') or downgrade your runtime to an older version (' + compilerVersions + ').');
  } else {
    // Use the embedded version info since the runtime doesn't know about this revision yet
    throw new _exception2['default']('Template was precompiled with a newer version of Handlebars than the current runtime. ' + 'Please update your runtime to a newer version (' + compilerInfo[1] + ').');
  }
}

function template(templateSpec, env) {
  /* istanbul ignore next */
  if (!env) {
    throw new _exception2['default']('No environment passed to template');
  }
  if (!templateSpec || !templateSpec.main) {
    throw new _exception2['default']('Unknown template object: ' + typeof templateSpec);
  }

  templateSpec.main.decorator = templateSpec.main_d;

  // Note: Using env.VM references rather than local var references throughout this section to allow
  // for external users to override these as pseudo-supported APIs.
  env.VM.checkRevision(templateSpec.compiler);

  // backwards compatibility for precompiled templates with compiler-version 7 (<4.3.0)
  var templateWasPrecompiledWithCompilerV7 = templateSpec.compiler && templateSpec.compiler[0] === 7;

  function invokePartialWrapper(partial, context, options) {
    if (options.hash) {
      context = Utils.extend({}, context, options.hash);
      if (options.ids) {
        options.ids[0] = true;
      }
    }
    partial = env.VM.resolvePartial.call(this, partial, context, options);

    var extendedOptions = Utils.extend({}, options, {
      hooks: this.hooks,
      protoAccessControl: this.protoAccessControl
    });

    var result = env.VM.invokePartial.call(this, partial, context, extendedOptions);

    if (result == null && env.compile) {
      options.partials[options.name] = env.compile(partial, templateSpec.compilerOptions, env);
      result = options.partials[options.name](context, extendedOptions);
    }
    if (result != null) {
      if (options.indent) {
        var lines = result.split('\n');
        for (var i = 0, l = lines.length; i < l; i++) {
          if (!lines[i] && i + 1 === l) {
            break;
          }

          lines[i] = options.indent + lines[i];
        }
        result = lines.join('\n');
      }
      return result;
    } else {
      throw new _exception2['default']('The partial ' + options.name + ' could not be compiled when running in runtime-only mode');
    }
  }

  // Just add water
  var container = {
    strict: function strict(obj, name, loc) {
      if (!obj || !(name in obj)) {
        throw new _exception2['default']('"' + name + '" not defined in ' + obj, {
          loc: loc
        });
      }
      return container.lookupProperty(obj, name);
    },
    lookupProperty: function lookupProperty(parent, propertyName) {
      var result = parent[propertyName];
      if (result == null) {
        return result;
      }
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return result;
      }

      if (_internalProtoAccess.resultIsAllowed(result, container.protoAccessControl, propertyName)) {
        return result;
      }
      return undefined;
    },
    lookup: function lookup(depths, name) {
      var len = depths.length;
      for (var i = 0; i < len; i++) {
        var result = depths[i] && container.lookupProperty(depths[i], name);
        if (result != null) {
          return depths[i][name];
        }
      }
    },
    lambda: function lambda(current, context) {
      return typeof current === 'function' ? current.call(context) : current;
    },

    escapeExpression: Utils.escapeExpression,
    invokePartial: invokePartialWrapper,

    fn: function fn(i) {
      var ret = templateSpec[i];
      ret.decorator = templateSpec[i + '_d'];
      return ret;
    },

    programs: [],
    program: function program(i, data, declaredBlockParams, blockParams, depths) {
      var programWrapper = this.programs[i],
          fn = this.fn(i);
      if (data || depths || blockParams || declaredBlockParams) {
        programWrapper = wrapProgram(this, i, fn, data, declaredBlockParams, blockParams, depths);
      } else if (!programWrapper) {
        programWrapper = this.programs[i] = wrapProgram(this, i, fn);
      }
      return programWrapper;
    },

    data: function data(value, depth) {
      while (value && depth--) {
        value = value._parent;
      }
      return value;
    },
    mergeIfNeeded: function mergeIfNeeded(param, common) {
      var obj = param || common;

      if (param && common && param !== common) {
        obj = Utils.extend({}, common, param);
      }

      return obj;
    },
    // An empty object to use as replacement for null-contexts
    nullContext: Object.seal({}),

    noop: env.VM.noop,
    compilerInfo: templateSpec.compiler
  };

  function ret(context) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    var data = options.data;

    ret._setup(options);
    if (!options.partial && templateSpec.useData) {
      data = initData(context, data);
    }
    var depths = undefined,
        blockParams = templateSpec.useBlockParams ? [] : undefined;
    if (templateSpec.useDepths) {
      if (options.depths) {
        depths = context != options.depths[0] ? [context].concat(options.depths) : options.depths;
      } else {
        depths = [context];
      }
    }

    function main(context /*, options*/) {
      return '' + templateSpec.main(container, context, container.helpers, container.partials, data, blockParams, depths);
    }

    main = executeDecorators(templateSpec.main, main, container, options.depths || [], data, blockParams);
    return main(context, options);
  }

  ret.isTop = true;

  ret._setup = function (options) {
    if (!options.partial) {
      var mergedHelpers = Utils.extend({}, env.helpers, options.helpers);
      wrapHelpersToPassLookupProperty(mergedHelpers, container);
      container.helpers = mergedHelpers;

      if (templateSpec.usePartial) {
        // Use mergeIfNeeded here to prevent compiling global partials multiple times
        container.partials = container.mergeIfNeeded(options.partials, env.partials);
      }
      if (templateSpec.usePartial || templateSpec.useDecorators) {
        container.decorators = Utils.extend({}, env.decorators, options.decorators);
      }

      container.hooks = {};
      container.protoAccessControl = _internalProtoAccess.createProtoAccessControl(options);

      var keepHelperInHelpers = options.allowCallsToHelperMissing || templateWasPrecompiledWithCompilerV7;
      _helpers.moveHelperToHooks(container, 'helperMissing', keepHelperInHelpers);
      _helpers.moveHelperToHooks(container, 'blockHelperMissing', keepHelperInHelpers);
    } else {
      container.protoAccessControl = options.protoAccessControl; // internal option
      container.helpers = options.helpers;
      container.partials = options.partials;
      container.decorators = options.decorators;
      container.hooks = options.hooks;
    }
  };

  ret._child = function (i, data, blockParams, depths) {
    if (templateSpec.useBlockParams && !blockParams) {
      throw new _exception2['default']('must pass block params');
    }
    if (templateSpec.useDepths && !depths) {
      throw new _exception2['default']('must pass parent depths');
    }

    return wrapProgram(container, i, templateSpec[i], data, 0, blockParams, depths);
  };
  return ret;
}

function wrapProgram(container, i, fn, data, declaredBlockParams, blockParams, depths) {
  function prog(context) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    var currentDepths = depths;
    if (depths && context != depths[0] && !(context === container.nullContext && depths[0] === null)) {
      currentDepths = [context].concat(depths);
    }

    return fn(container, context, container.helpers, container.partials, options.data || data, blockParams && [options.blockParams].concat(blockParams), currentDepths);
  }

  prog = executeDecorators(fn, prog, container, depths, data, blockParams);

  prog.program = i;
  prog.depth = depths ? depths.length : 0;
  prog.blockParams = declaredBlockParams || 0;
  return prog;
}

/**
 * This is currently part of the official API, therefore implementation details should not be changed.
 */

function resolvePartial(partial, context, options) {
  if (!partial) {
    if (options.name === '@partial-block') {
      partial = options.data['partial-block'];
    } else {
      partial = options.partials[options.name];
    }
  } else if (!partial.call && !options.name) {
    // This is a dynamic partial that returned a string
    options.name = partial;
    partial = options.partials[partial];
  }
  return partial;
}

function invokePartial(partial, context, options) {
  // Use the current closure context to save the partial-block if this partial
  var currentPartialBlock = options.data && options.data['partial-block'];
  options.partial = true;
  if (options.ids) {
    options.data.contextPath = options.ids[0] || options.data.contextPath;
  }

  var partialBlock = undefined;
  if (options.fn && options.fn !== noop) {
    (function () {
      options.data = _base.createFrame(options.data);
      // Wrapper function to get access to currentPartialBlock from the closure
      var fn = options.fn;
      partialBlock = options.data['partial-block'] = function partialBlockWrapper(context) {
        var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

        // Restore the partial-block from the closure for the execution of the block
        // i.e. the part inside the block of the partial call.
        options.data = _base.createFrame(options.data);
        options.data['partial-block'] = currentPartialBlock;
        return fn(context, options);
      };
      if (fn.partials) {
        options.partials = Utils.extend({}, options.partials, fn.partials);
      }
    })();
  }

  if (partial === undefined && partialBlock) {
    partial = partialBlock;
  }

  if (partial === undefined) {
    throw new _exception2['default']('The partial ' + options.name + ' could not be found');
  } else if (partial instanceof Function) {
    return partial(context, options);
  }
}

function noop() {
  return '';
}

function initData(context, data) {
  if (!data || !('root' in data)) {
    data = data ? _base.createFrame(data) : {};
    data.root = context;
  }
  return data;
}

function executeDecorators(fn, prog, container, depths, data, blockParams) {
  if (fn.decorator) {
    var props = {};
    prog = fn.decorator(prog, props, container, depths && depths[0], data, blockParams, depths);
    Utils.extend(prog, props);
  }
  return prog;
}

function wrapHelpersToPassLookupProperty(mergedHelpers, container) {
  Object.keys(mergedHelpers).forEach(function (helperName) {
    var helper = mergedHelpers[helperName];
    mergedHelpers[helperName] = passLookupPropertyOption(helper, container);
  });
}

function passLookupPropertyOption(helper, container) {
  var lookupProperty = container.lookupProperty;
  return _internalWrapHelper.wrapHelper(helper, function (options) {
    return Utils.extend({ lookupProperty: lookupProperty }, options);
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL3J1bnRpbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7cUJBQXVCLFNBQVM7O0lBQXBCLEtBQUs7O3lCQUNLLGFBQWE7Ozs7b0JBTTVCLFFBQVE7O3VCQUNtQixXQUFXOztrQ0FDbEIsdUJBQXVCOzttQ0FJM0MseUJBQXlCOztBQUV6QixTQUFTLGFBQWEsQ0FBQyxZQUFZLEVBQUU7QUFDMUMsTUFBTSxnQkFBZ0IsR0FBRyxBQUFDLFlBQVksSUFBSSxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUssQ0FBQztNQUM3RCxlQUFlLDBCQUFvQixDQUFDOztBQUV0QyxNQUNFLGdCQUFnQiwyQ0FBcUMsSUFDckQsZ0JBQWdCLDJCQUFxQixFQUNyQztBQUNBLFdBQU87R0FDUjs7QUFFRCxNQUFJLGdCQUFnQiwwQ0FBb0MsRUFBRTtBQUN4RCxRQUFNLGVBQWUsR0FBRyx1QkFBaUIsZUFBZSxDQUFDO1FBQ3ZELGdCQUFnQixHQUFHLHVCQUFpQixnQkFBZ0IsQ0FBQyxDQUFDO0FBQ3hELFVBQU0sMkJBQ0oseUZBQXlGLEdBQ3ZGLHFEQUFxRCxHQUNyRCxlQUFlLEdBQ2YsbURBQW1ELEdBQ25ELGdCQUFnQixHQUNoQixJQUFJLENBQ1AsQ0FBQztHQUNILE1BQU07O0FBRUwsVUFBTSwyQkFDSix3RkFBd0YsR0FDdEYsaURBQWlELEdBQ2pELFlBQVksQ0FBQyxDQUFDLENBQUMsR0FDZixJQUFJLENBQ1AsQ0FBQztHQUNIO0NBQ0Y7O0FBRU0sU0FBUyxRQUFRLENBQUMsWUFBWSxFQUFFLEdBQUcsRUFBRTs7QUFFMUMsTUFBSSxDQUFDLEdBQUcsRUFBRTtBQUNSLFVBQU0sMkJBQWMsbUNBQW1DLENBQUMsQ0FBQztHQUMxRDtBQUNELE1BQUksQ0FBQyxZQUFZLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFO0FBQ3ZDLFVBQU0sMkJBQWMsMkJBQTJCLEdBQUcsT0FBTyxZQUFZLENBQUMsQ0FBQztH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QUFDbkMsV0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQUUsY0FBYyxFQUFkLGNBQWMsRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0dBQ2xELENBQUMsQ0FBQztDQUNKIiwiZmlsZSI6InJ1bnRpbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBVdGlscyBmcm9tICcuL3V0aWxzJztcbmltcG9ydCBFeGNlcHRpb24gZnJvbSAnLi9leGNlcHRpb24nO1xuaW1wb3J0IHtcbiAgQ09NUElMRVJfUkVWSVNJT04sXG4gIGNyZWF0ZUZyYW1lLFxuICBMQVNUX0NPTVBBVElCTEVfQ09NUElMRVJfUkVWSVNJT04sXG4gIFJFVklTSU9OX0NIQU5HRVNcbn0gZnJvbSAnLi9iYXNlJztcbmltcG9ydCB7IG1vdmVIZWxwZXJUb0hvb2tzIH0gZnJvbSAnLi9oZWxwZXJzJztcbmltcG9ydCB7IHdyYXBIZWxwZXIgfSBmcm9tICcuL2ludGVybmFsL3dyYXBIZWxwZXInO1xuaW1wb3J0IHtcbiAgY3JlYXRlUHJvdG9BY2Nlc3NDb250cm9sLFxuICByZXN1bHRJc0FsbG93ZWRcbn0gZnJvbSAnLi9pbnRlcm5hbC9wcm90by1hY2Nlc3MnO1xuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tSZXZpc2lvbihjb21waWxlckluZm8pIHtcbiAgY29uc3QgY29tcGlsZXJSZXZpc2lvbiA9IChjb21waWxlckluZm8gJiYgY29tcGlsZXJJbmZvWzBdKSB8fCAxLFxuICAgIGN1cnJlbnRSZXZpc2lvbiA9IENPTVBJTEVSX1JFVklTSU9OO1xuXG4gIGlmIChcbiAgICBjb21waWxlclJldmlzaW9uID49IExBU1RfQ09NUEFUSUJMRV9DT01QSUxFUl9SRVZJU0lPTiAmJlxuICAgIGNvbXBpbGVyUmV2aXNpb24gPD0gQ09NUElMRVJfUkVWSVNJT05cbiAgKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGNvbXBpbGVyUmV2aXNpb24gPCBMQVNUX0NPTVBBVElCTEVfQ09NUElMRVJfUkVWSVNJT04pIHtcbiAgICBjb25zdCBydW50aW1lVmVyc2lvbnMgPSBSRVZJU0lPTl9DSEFOR0VTW2N1cnJlbnRSZXZpc2lvbl0sXG4gICAgICBjb21waWxlclZlcnNpb25zID0gUkVWSVNJT05fQ0hBTkdFU1tjb21waWxlclJldmlzaW9uXTtcbiAgICB0aHJvdyBuZXcgRXhjZXB0aW9uKFxuICAgICAgJ1RlbXBsYXRlIHdhcyBwcmVjb21waWxlZCB3aXRoIGFuIG9sZGVyIHZlcnNpb24gb2YgSGFuZGxlYmFycyB0aGFuIHRoZSBjdXJyZW50IHJ1bnRpbWUuICcgK1xuICAgICAgICAnUGxlYXNlIHVwZGF0ZSB5b3VyIHByZWNvbXBpbGVyIHRvIGEgbmV3ZXIgdmVyc2lvbiAoJyArXG4gICAgICAgIHJ1bnRpbWVWZXJzaW9ucyArXG4gICAgICAgICcpIG9yIGRvd25ncmFkZSB5b3VyIHJ1bnRpbWUgdG8gYW4gb2xkZXIgdmVyc2lvbiAoJyArXG4gICAgICAgIGNvbXBpbGVyVmVyc2lvbnMgK1xuICAgICAgICAnKS4nXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBVc2UgdGhlIGVtYmVkZGVkIHZlcnNpb24gaW5mbyBzaW5jZSB0aGUgcnVudGltZSBkb2Vzbid0IGtub3cgYWJvdXQgdGhpcyByZXZpc2lvbiB5ZXRcbiAgICB0aHJvdyBuZXcgRXhjZXB0aW9uKFxuICAgICAgJ1RlbXBsYXRlIHdhcyBwcmVjb21waWxlZCB3aXRoIGEgbmV3ZXIgdmVyc2lvbiBvZiBIYW5kbGViYXJzIHRoYW4gdGhlIGN1cnJlbnQgcnVudGltZS4gJyArXG4gICAgICAgICdQbGVhc2UgdXBkYXRlIHlvdXIgcnVudGltZSB0byBhIG5ld2VyIHZlcnNpb24gKCcgK1xuICAgICAgICBjb21waWxlckluZm9bMV0gK1xuICAgICAgICAnKS4nXG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVtcGxhdGUodGVtcGxhdGVTcGVjLCBlbnYpIHtcbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgaWYgKCFlbnYpIHtcbiAgICB0aHJvdyBuZXcgRXhjZXB0aW9uKCdObyBlbnZpcm9ubWVudCBwYXNzZWQgdG8gdGVtcGxhdGUnKTtcbiAgfVxuICBpZiAoIXRlbXBsYXRlU3BlYyB8fCAhdGVtcGxhdGVTcGVjLm1haW4pIHtcbiAgICB0aHJvdyBuZXcgRXhjZXB0aW9uKCdVbmtub3duIHRlbXBsYXRlIG9iamVjdDogJyArIHR5cGVvZiB0ZW1wbGF0ZVNwZWMpO1xuICB9XG5cbiAgdGVtcGxhdGVTcGVjLm1haW4uZGVjb3JhdG9yID0gdGVtcGxhdGVTcGVjLm1haW5fZDtcblxuICAvLyBOb3RlOiBVc2luZyBlbnYuVk0gcmVmZXJlbmNlcyByYXRoZXIgdGhhbiBsb2NhbCB2YXIgcmVmZXJlbmNlcyB0aHJvdWdob3V0IHRoaXMgc2VjdGlvbiB0byBhbGxvd1xuICAvLyBmb3IgZXh0ZXJuYWwgdXNlcnMgdG8gb3ZlcnJpZGUgdGhlc2UgYXMgcHNldWRvLXN1cHBvcnRlZCBBUElzLlxuICBlbnYuVk0uY2hlY2tSZXZpc2lvbih0ZW1wbGF0ZVNwZWMuY29tcGlsZXIpO1xuXG4gIC8vIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5IGZvciBwcmVjb21waWxlZCB0ZW1wbGF0ZXMgd2l0aCBjb21waWxlci12ZXJzaW9uIDcgKDw0LjMuMClcbiAgY29uc3QgdGVtcGxhdGVXYXNQcmVjb21waWxlZFdpdGhDb21waWxlclY3ID1cbiAgICB0ZW1wbGF0ZVNwZWMuY29tcGlsZXIgJiYgdGVtcGxhdGVTcGVjLmNvbXBpbGVyWzBdID09PSA3O1xuXG4gIGZ1bmN0aW9uIGludm9rZVBhcnRpYWxXcmFwcGVyKHBhcnRpYWwsIGNvbnRleHQsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgICBjb250ZXh0ID0gVXRpbHMuZXh0ZW5kKHt9LCBjb250ZXh0LCBvcHRpb25zLmhhc2gpO1xuICAgICAgaWYgKG9wdGlvbnMuaWRzKSB7XG4gICAgICAgIG9wdGlvbnMuaWRzWzBdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcGFydGlhbCA9IGVudi5WTS5yZXNvbHZlUGFydGlhbC5jYWxsKHRoaXMsIHBhcnRpYWwsIGNvbnRleHQsIG9wdGlvbnMpO1xuXG4gICAgbGV0IGV4dGVuZGVkT3B0aW9ucyA9IFV0aWxzLmV4dGVuZCh7fSwgb3B0aW9ucywge1xuICAgICAgaG9va3M6IHRoaXMuaG9va3MsXG4gICAgICBwcm90b0FjY2Vzc0NvbnRyb2w6IHRoaXMucHJvdG9BY2Nlc3NDb250cm9sXG4gICAgfSk7XG5cbiAgICBsZXQgcmVzdWx0ID0gZW52LlZNLmludm9rZVBhcnRpYWwuY2FsbChcbiAgICAgIHRoaXMsXG4gICAgICBwYXJ0aWFsLFxuICAgICAgY29udGV4dCxcbiAgICAgIGV4dGVuZGVkT3B0aW9uc1xuICAgICk7XG5cbiAgICBpZiAocmVzdWx0ID09IG51bGwgJiYgZW52LmNvbXBpbGUpIHtcbiAgICAgIG9wdGlvbnMucGFydGlhbHNbb3B0aW9ucy5uYW1lXSA9IGVudi5jb21waWxlKFxuICAgICAgICBwYXJ0aWFsLFxuICAgICAgICB0ZW1wbGF0ZVNwZWMuY29tcGlsZXJPcHRpb25zLFxuICAgICAgICBlbnZcbiAgICAgICk7XG4gICAgICByZXN1bHQgPSBvcHRpb25zLnBhcnRpYWxzW29wdGlvbnMubmFtZV0oY29udGV4dCwgZXh0ZW5kZWRPcHRpb25zKTtcbiAgICB9XG4gICAgaWYgKHJlc3VsdCAhPSBudWxsKSB7XG4gICAgICBpZiAob3B0aW9ucy5pbmRlbnQpIHtcbiAgICAgICAgbGV0IGxpbmVzID0gcmVzdWx0LnNwbGl0KCdcXG4nKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBsaW5lcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICBpZiAoIWxpbmVzW2ldICYmIGkgKyAxID09PSBsKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBsaW5lc1tpXSA9IG9wdGlvbnMuaW5kZW50ICsgbGluZXNbaV07XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0ID0gbGluZXMuam9pbignXFxuJyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXhjZXB0aW9uKFxuICAgICAgICAnVGhlIHBhcnRpYWwgJyArXG4gICAgICAgICAgb3B0aW9ucy5uYW1lICtcbiAgICAgICAgICAnIGNvdWxkIG5vdCBiZSBjb21waWxlZCB3aGVuIHJ1bm5pbmcgaW4gcnVudGltZS1vbmx5IG1vZGUnXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIC8vIEp1c3QgYWRkIHdhdGVyXG4gIGxldCBjb250YWluZXIgPSB7XG4gICAgc3RyaWN0OiBmdW5jdGlvbihvYmosIG5hbWUsIGxvYykge1xuICAgICAgaWYgKCFvYmogfHwgIShuYW1lIGluIG9iaikpIHtcbiAgICAgICAgdGhyb3cgbmV3IEV4Y2VwdGlvbignXCInICsgbmFtZSArICdcIiBub3QgZGVmaW5lZCBpbiAnICsgb2JqLCB7XG4gICAgICAgICAgbG9jOiBsb2NcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGFpbmVyLmxvb2t1cFByb3BlcnR5KG9iaiwgbmFtZSk7XG4gICAgfSxcbiAgICBsb29rdXBQcm9wZXJ0eTogZnVuY3Rpb24ocGFyZW50LCBwcm9wZXJ0eU5hbWUpIHtcbiAgICAgIGxldCByZXN1bHQgPSBwYXJlbnRbcHJvcGVydHlOYW1lXTtcbiAgICAgIGlmIChyZXN1bHQgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgfVxuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChwYXJlbnQsIHByb3BlcnR5TmFtZSkpIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH1cblxuICAgICAgaWYgKHJlc3VsdElzQWxsb3dlZChyZXN1bHQsIGNvbnRhaW5lci5wcm90b0FjY2Vzc0NvbnRyb2wsIHByb3BlcnR5TmFtZSkpIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH1cbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfSxcbiAgICBsb29rdXA6IGZ1bmN0aW9uKGRlcHRocywgbmFtZSkge1xuICAgICAgY29uc3QgbGVuID0gZGVwdGhzLmxlbmd0aDtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IGRlcHRoc1tpXSAmJiBjb250YWluZXIubG9va3VwUHJvcGVydHkoZGVwdGhzW2ldLCBuYW1lKTtcbiAgICAgICAgaWYgKHJlc3VsdCAhPSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIGRlcHRoc1tpXVtuYW1lXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgbGFtYmRhOiBmdW5jdGlvbihjdXJyZW50LCBjb250ZXh0KSB7XG4gICAgICByZXR1cm4gdHlwZW9mIGN1cnJlbnQgPT09ICdmdW5jdGlvbicgPyBjdXJyZW50LmNhbGwoY29udGV4dCkgOiBjdXJyZW50O1xuICAgIH0sXG5cbiAgICBlc2NhcGVFeHByZXNzaW9uOiBVdGlscy5lc2NhcGVFeHByZXNzaW9uLFxuICAgIGludm9rZVBhcnRpYWw6IGludm9rZVBhcnRpYWxXcmFwcGVyLFxuXG4gICAgZm46IGZ1bmN0aW9uKGkpIHtcbiAgICAgIGxldCByZXQgPSB0ZW1wbGF0ZVNwZWNbaV07XG4gICAgICByZXQuZGVjb3JhdG9yID0gdGVtcGxhdGVTcGVjW2kgKyAnX2QnXTtcbiAgICAgIHJldHVybiByZXQ7XG4gICAgfSxcblxuICAgIHByb2dyYW1zOiBbXSxcbiAgICBwcm9ncmFtOiBmdW5jdGlvbihpLCBkYXRhLCBkZWNsYXJlZEJsb2NrUGFyYW1zLCBibG9ja1BhcmFtcywgZGVwdGhzKSB7XG4gICAgICBsZXQgcHJvZ3JhbVdyYXBwZXIgPSB0aGlzLnByb2dyYW1zW2ldLFxuICAgICAgICBmbiA9IHRoaXMuZm4oaSk7XG4gICAgICBpZiAoZGF0YSB8fCBkZXB0aHMgfHwgYmxvY2tQYXJhbXMgfHwgZGVjbGFyZWRCbG9ja1BhcmFtcykge1xuICAgICAgICBwcm9ncmFtV3JhcHBlciA9IHdyYXBQcm9ncmFtKFxuICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgaSxcbiAgICAgICAgICBmbixcbiAgICAgICAgICBkYXRhLFxuICAgICAgICAgIGRlY2xhcmVkQmxvY2tQYXJhbXMsXG4gICAgICAgICAgYmxvY2tQYXJhbXMsXG4gICAgICAgICAgZGVwdGhzXG4gICAgICAgICk7XG4gICAgICB9IGVsc2UgaWYgKCFwcm9ncmFtV3JhcHBlcikge1xuICAgICAgICBwcm9ncmFtV3JhcHBlciA9IHRoaXMucHJvZ3JhbXNbaV0gPSB3cmFwUHJvZ3JhbSh0aGlzLCBpLCBmbik7XG4gICAgICB9XG4gICAgICByZXR1cm4gcHJvZ3JhbVdyYXBwZXI7XG4gICAgfSxcblxuICAgIGRhdGE6IGZ1bmN0aW9uKHZhbHVlLCBkZXB0aCkge1xuICAgICAgd2hpbGUgKHZhbHVlICYmIGRlcHRoLS0pIHtcbiAgICAgICAgdmFsdWUgPSB2YWx1ZS5fcGFyZW50O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH0sXG4gICAgbWVyZ2VJZk5lZWRlZDogZnVuY3Rpb24ocGFyYW0sIGNvbW1vbikge1xuICAgICAgbGV0IG9iaiA9IHBhcmFtIHx8IGNvbW1vbjtcblxuICAgICAgaWYgKHBhcmFtICYmIGNvbW1vbiAmJiBwYXJhbSAhPT0gY29tbW9uKSB7XG4gICAgICAgIG9iaiA9IFV0aWxzLmV4dGVuZCh7fSwgY29tbW9uLCBwYXJhbSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBvYmo7XG4gICAgfSxcbiAgICAvLyBBbiBlbXB0eSBvYmplY3QgdG8gdXNlIGFzIHJlcGxhY2VtZW50IGZvciBudWxsLWNvbnRleHRzXG4gICAgbnVsbENvbnRleHQ6IE9iamVjdC5zZWFsKHt9KSxcblxuICAgIG5vb3A6IGVudi5WTS5ub29wLFxuICAgIGNvbXBpbGVySW5mbzogdGVtcGxhdGVTcGVjLmNvbXBpbGVyXG4gIH07XG5cbiAgZnVuY3Rpb24gcmV0KGNvbnRleHQsIG9wdGlvbnMgPSB7fSkge1xuICAgIGxldCBkYXRhID0gb3B0aW9ucy5kYXRhO1xuXG4gICAgcmV0Ll9zZXR1cChvcHRpb25zKTtcbiAgICBpZiAoIW9wdGlvbnMucGFydGlhbCAmJiB0ZW1wbGF0ZVNwZWMudXNlRGF0YSkge1xuICAgICAgZGF0YSA9IGluaXREYXRhKGNvbnRleHQsIGRhdGEpO1xuICAgIH1cbiAgICBsZXQgZGVwdGhzLFxuICAgICAgYmxvY2tQYXJhbXMgPSB0ZW1wbGF0ZVNwZWMudXNlQmxvY2tQYXJhbXMgPyBbXSA6IHVuZGVmaW5lZDtcbiAgICBpZiAodGVtcGxhdGVTcGVjLnVzZURlcHRocykge1xuICAgICAgaWYgKG9wdGlvbnMuZGVwdGhzKSB7XG4gICAgICAgIGRlcHRocyA9XG4gICAgICAgICAgY29udGV4dCAhPSBvcHRpb25zLmRlcHRoc1swXVxuICAgICAgICAgICAgPyBbY29udGV4dF0uY29uY2F0KG9wdGlvbnMuZGVwdGhzKVxuICAgICAgICAgICAgOiBvcHRpb25zLmRlcHRocztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRlcHRocyA9IFtjb250ZXh0XTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtYWluKGNvbnRleHQgLyosIG9wdGlvbnMqLykge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgJycgK1xuICAgICAgICB0ZW1wbGF0ZVNwZWMubWFpbihcbiAgICAgICAgICBjb250YWluZXIsXG4gICAgICAgICAgY29udGV4dCxcbiAgICAgICAgICBjb250YWluZXIuaGVscGVycyxcbiAgICAgICAgICBjb250YWluZXIucGFydGlhbHMsXG4gICAgICAgICAgZGF0YSxcbiAgICAgICAgICBibG9ja1BhcmFtcyxcbiAgICAgICAgICBkZXB0aHNcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBtYWluID0gZXhlY3V0ZURlY29yYXRvcnMoXG4gICAgICB0ZW1wbGF0ZVNwZWMubWFpbixcbiAgICAgIG1haW4sXG4gICAgICBjb250YWluZXIsXG4gICAgICBvcHRpb25zLmRlcHRocyB8fCBbXSxcbiAgICAgIGRhdGEsXG4gICAgICBibG9ja1BhcmFtc1xuICAgICk7XG4gICAgcmV0dXJuIG1haW4oY29udGV4dCwgb3B0aW9ucyk7XG4gIH1cblxuICByZXQuaXNUb3AgPSB0cnVlO1xuXG4gIHJldC5fc2V0dXAgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgaWYgKCFvcHRpb25zLnBhcnRpYWwpIHtcbiAgICAgIGxldCBtZXJnZWRIZWxwZXJzID0gVXRpbHMuZXh0ZW5kKHt9LCBlbnYuaGVscGVycywgb3B0aW9ucy5oZWxwZXJzKTtcbiAgICAgIHdyYXBIZWxwZXJzVG9QYXNzTG9va3VwUHJvcGVydHkobWVyZ2VkSGVscGVycywgY29udGFpbmVyKTtcbiAgICAgIGNvbnRhaW5lci5oZWxwZXJzID0gbWVyZ2VkSGVscGVycztcblxuICAgICAgaWYgKHRlbXBsYXRlU3BlYy51c2VQYXJ0aWFsKSB7XG4gICAgICAgIC8vIFVzZSBtZXJnZUlmTmVlZGVkIGhlcmUgdG8gcHJldmVudCBjb21waWxpbmcgZ2xvYmFsIHBhcnRpYWxzIG11bHRpcGxlIHRpbWVzXG4gICAgICAgIGNvbnRhaW5lci5wYXJ0aWFscyA9IGNvbnRhaW5lci5tZXJnZUlmTmVlZGVkKFxuICAgICAgICAgIG9wdGlvbnMucGFydGlhbHMsXG4gICAgICAgICAgZW52LnBhcnRpYWxzXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBpZiAodGVtcGxhdGVTcGVjLnVzZVBhcnRpYWwgfHwgdGVtcGxhdGVTcGVjLnVzZURlY29yYXRvcnMpIHtcbiAgICAgICAgY29udGFpbmVyLmRlY29yYXRvcnMgPSBVdGlscy5leHRlbmQoXG4gICAgICAgICAge30sXG4gICAgICAgICAgZW52LmRlY29yYXRvcnMsXG4gICAgICAgICAgb3B0aW9ucy5kZWNvcmF0b3JzXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIGNvbnRhaW5lci5ob29rcyA9IHt9O1xuICAgICAgY29udGFpbmVyLnByb3RvQWNjZXNzQ29udHJvbCA9IGNyZWF0ZVByb3RvQWNjZXNzQ29udHJvbChvcHRpb25zKTtcblxuICAgICAgbGV0IGtlZXBIZWxwZXJJbkhlbHBlcnMgPVxuICAgICAgICBvcHRpb25zLmFsbG93Q2FsbHNUb0hlbHBlck1pc3NpbmcgfHxcbiAgICAgICAgdGVtcGxhdGVXYXNQcmVjb21waWxlZFdpdGhDb21waWxlclY3O1xuICAgICAgbW92ZUhlbHBlclRvSG9va3MoY29udGFpbmVyLCAnaGVscGVyTWlzc2luZycsIGtlZXBIZWxwZXJJbkhlbHBlcnMpO1xuICAgICAgbW92ZUhlbHBlclRvSG9va3MoY29udGFpbmVyLCAnYmxvY2tIZWxwZXJNaXNzaW5nJywga2VlcEhlbHBlckluSGVscGVycyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRhaW5lci5wcm90b0FjY2Vzc0NvbnRyb2wgPSBvcHRpb25zLnByb3RvQWNjZXNzQ29udHJvbDsgLy8gaW50ZXJuYWwgb3B0aW9uXG4gICAgICBjb250YWluZXIuaGVscGVycyA9IG9wdGlvbnMuaGVscGVycztcbiAgICAgIGNvbnRhaW5lci5wYXJ0aWFscyA9IG9wdGlvbnMucGFydGlhbHM7XG4gICAgICBjb250YWluZXIuZGVjb3JhdG9ycyA9IG9wdGlvbnMuZGVjb3JhdG9ycztcbiAgICAgIGNvbnRhaW5lci5ob29rcyA9IG9wdGlvbnMuaG9va3M7XG4gICAgfVxuICB9O1xuXG4gIHJldC5fY2hpbGQgPSBmdW5jdGlvbihpLCBkYXRhLCBibG9ja1BhcmFtcywgZGVwdGhzKSB7XG4gICAgaWYgKHRlbXBsYXRlU3BlYy51c2VCbG9ja1BhcmFtcyAmJiAhYmxvY2tQYXJhbXMpIHtcbiAgICAgIHRocm93IG5ldyBFeGNlcHRpb24oJ211c3QgcGFzcyBibG9jayBwYXJhbXMnKTtcbiAgICB9XG4gICAgaWYgKHRlbXBsYXRlU3BlYy51c2VEZXB0aHMgJiYgIWRlcHRocykge1xuICAgICAgdGhyb3cgbmV3IEV4Y2VwdGlvbignbXVzdCBwYXNzIHBhcmVudCBkZXB0aHMnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gd3JhcFByb2dyYW0oXG4gICAgICBjb250YWluZXIsXG4gICAgICBpLFxuICAgICAgdGVtcGxhdGVTcGVjW2ldLFxuICAgICAgZGF0YSxcbiAgICAgIDAsXG4gICAgICBibG9ja1BhcmFtcyxcbiAgICAgIGRlcHRoc1xuICAgICk7XG4gIH07XG4gIHJldHVybiByZXQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB3cmFwUHJvZ3JhbShcbiAgY29udGFpbmVyLFxuICBpLFxuICBmbixcbiAgZGF0YSxcbiAgZGVjbGFyZWRCbG9ja1BhcmFtcyxcbiAgYmxvY2tQYXJhbXMsXG4gIGRlcHRoc1xuKSB7XG4gIGZ1bmN0aW9uIHByb2coY29udGV4dCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgbGV0IGN1cnJlbnREZXB0aHMgPSBkZXB0aHM7XG4gICAgaWYgKFxuICAgICAgZGVwdGhzICYmXG4gICAgICBjb250ZXh0ICE9IGRlcHRoc1swXSAmJlxuICAgICAgIShjb250ZXh0ID09PSBjb250YWluZXIubnVsbENvbnRleHQgJiYgZGVwdGhzWzBdID09PSBudWxsKVxuICAgICkge1xuICAgICAgY3VycmVudERlcHRocyA9IFtjb250ZXh0XS5jb25jYXQoZGVwdGhzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZm4oXG4gICAgICBjb250YWluZXIsXG4gICAgICBjb250ZXh0LFxuICAgICAgY29udGFpbmVyLmhlbHBlcnMsXG4gICAgICBjb250YWluZXIucGFydGlhbHMsXG4gICAgICBvcHRpb25zLmRhdGEgfHwgZGF0YSxcbiAgICAgIGJsb2NrUGFyYW1zICYmIFtvcHRpb25zLmJsb2NrUGFyYW1zXS5jb25jYXQoYmxvY2tQYXJhbXMpLFxuICAgICAgY3VycmVudERlcHRoc1xuICAgICk7XG4gIH1cblxuICBwcm9nID0gZXhlY3V0ZURlY29yYXRvcnMoZm4sIHByb2csIGNvbnRhaW5lciwgZGVwdGhzLCBkYXRhLCBibG9ja1BhcmFtcyk7XG5cbiAgcHJvZy5wcm9ncmFtID0gaTtcbiAgcHJvZy5kZXB0aCA9IGRlcHRocyA/IGRlcHRocy5sZW5ndGggOiAwO1xuICBwcm9nLmJsb2NrUGFyYW1zID0gZGVjbGFyZWRCbG9ja1BhcmFtcyB8fCAwO1xuICByZXR1cm4gcHJvZztcbn1cblxuLyoqXG4gKiBUaGlzIGlzIGN1cnJlbnRseSBwYXJ0IG9mIHRoZSBvZmZpY2lhbCBBUEksIHRoZXJlZm9yZSBpbXBsZW1lbnRhdGlvbiBkZXRhaWxzIHNob3VsZCBub3QgYmUgY2hhbmdlZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVQYXJ0aWFsKHBhcnRpYWwsIGNvbnRleHQsIG9wdGlvbnMpIHtcbiAgaWYgKCFwYXJ0aWFsKSB7XG4gICAgaWYgKG9wdGlvbnMubmFtZSA9PT0gJ0BwYXJ0aWFsLWJsb2NrJykge1xuICAgICAgcGFydGlhbCA9IG9wdGlvbnMuZGF0YVsncGFydGlhbC1ibG9jayddO1xuICAgIH0gZWxzZSB7XG4gICAgICBwYXJ0aWFsID0gb3B0aW9ucy5wYXJ0aWFsc1tvcHRpb25zLm5hbWVdO1xuICAgIH1cbiAgfSBlbHNlIGlmICghcGFydGlhbC5jYWxsICYmICFvcHRpb25zLm5hbWUpIHtcbiAgICAvLyBUaGlzIGlzIGEgZHluYW1pYyBwYXJ0aWFsIHRoYXQgcmV0dXJuZWQgYSBzdHJpbmdcbiAgICBvcHRpb25zLm5hbWUgPSBwYXJ0aWFsO1xuICAgIHBhcnRpYWwgPSBvcHRpb25zLnBhcnRpYWxzW3BhcnRpYWxdO1xuICB9XG4gIHJldHVybiBwYXJ0aWFsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW52b2tlUGFydGlhbChwYXJ0aWFsLCBjb250ZXh0LCBvcHRpb25zKSB7XG4gIC8vIFVzZSB0aGUgY3VycmVudCBjbG9zdXJlIGNvbnRleHQgdG8gc2F2ZSB0aGUgcGFydGlhbC1ibG9jayBpZiB0aGlzIHBhcnRpYWxcbiAgY29uc3QgY3VycmVudFBhcnRpYWxCbG9jayA9IG9wdGlvbnMuZGF0YSAmJiBvcHRpb25zLmRhdGFbJ3BhcnRpYWwtYmxvY2snXTtcbiAgb3B0aW9ucy5wYXJ0aWFsID0gdHJ1ZTtcbiAgaWYgKG9wdGlvbnMuaWRzKSB7XG4gICAgb3B0aW9ucy5kYXRhLmNvbnRleHRQYXRoID0gb3B0aW9ucy5pZHNbMF0gfHwgb3B0aW9ucy5kYXRhLmNvbnRleHRQYXRoO1xuICB9XG5cbiAgbGV0IHBhcnRpYWxCbG9jaztcbiAgaWYgKG9wdGlvbnMuZm4gJiYgb3B0aW9ucy5mbiAhPT0gbm9vcCkge1xuICAgIG9wdGlvbnMuZGF0YSA9IGNyZWF0ZUZyYW1lKG9wdGlvbnMuZGF0YSk7XG4gICAgLy8gV3JhcHBlciBmdW5jdGlvbiB0byBnZXQgYWNjZXNzIHRvIGN1cnJlbnRQYXJ0aWFsQmxvY2sgZnJvbSB0aGUgY2xvc3VyZVxuICAgIGxldCBmbiA9IG9wdGlvbnMuZm47XG4gICAgcGFydGlhbEJsb2NrID0gb3B0aW9ucy5kYXRhWydwYXJ0aWFsLWJsb2NrJ10gPSBmdW5jdGlvbiBwYXJ0aWFsQmxvY2tXcmFwcGVyKFxuICAgICAgY29udGV4dCxcbiAgICAgIG9wdGlvbnMgPSB7fVxuICAgICkge1xuICAgICAgLy8gUmVzdG9yZSB0aGUgcGFydGlhbC1ibG9jayBmcm9tIHRoZSBjbG9zdXJlIGZvciB0aGUgZXhlY3V0aW9uIG9mIHRoZSBibG9ja1xuICAgICAgLy8gaS5lLiB0aGUgcGFydCBpbnNpZGUgdGhlIGJsb2NrIG9mIHRoZSBwYXJ0aWFsIGNhbGwuXG4gICAgICBvcHRpb25zLmRhdGEgPSBjcmVhdGVGcmFtZShvcHRpb25zLmRhdGEpO1xuICAgICAgb3B0aW9ucy5kYXRhWydwYXJ0aWFsLWJsb2NrJ10gPSBjdXJyZW50UGFydGlhbEJsb2NrO1xuICAgICAgcmV0dXJuIGZuKGNvbnRleHQsIG9wdGlvbnMpO1xuICAgIH07XG4gICAgaWYgKGZuLnBhcnRpYWxzKSB7XG4gICAgICBvcHRpb25zLnBhcnRpYWxzID0gVXRpbHMuZXh0ZW5kKHt9LCBvcHRpb25zLnBhcnRpYWxzLCBmbi5wYXJ0aWFscyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHBhcnRpYWwgPT09IHVuZGVmaW5lZCAmJiBwYXJ0aWFsQmxvY2spIHtcbiAgICBwYXJ0aWFsID0gcGFydGlhbEJsb2NrO1xuICB9XG5cbiAgaWYgKHBhcnRpYWwgPT09IHVuZGVmaW5lZCkge1xuICAgIHRocm93IG5ldyBFeGNlcHRpb24oJ1RoZSBwYXJ0aWFsICcgKyBvcHRpb25zLm5hbWUgKyAnIGNvdWxkIG5vdCBiZSBmb3VuZCcpO1xuICB9IGVsc2UgaWYgKHBhcnRpYWwgaW5zdGFuY2VvZiBGdW5jdGlvbikge1xuICAgIHJldHVybiBwYXJ0aWFsKGNvbnRleHQsIG9wdGlvbnMpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub29wKCkge1xuICByZXR1cm4gJyc7XG59XG5cbmZ1bmN0aW9uIGluaXREYXRhKGNvbnRleHQsIGRhdGEpIHtcbiAgaWYgKCFkYXRhIHx8ICEoJ3Jvb3QnIGluIGRhdGEpKSB7XG4gICAgZGF0YSA9IGRhdGEgPyBjcmVhdGVGcmFtZShkYXRhKSA6IHt9O1xuICAgIGRhdGEucm9vdCA9IGNvbnRleHQ7XG4gIH1cbiAgcmV0dXJuIGRhdGE7XG59XG5cbmZ1bmN0aW9uIGV4ZWN1dGVEZWNvcmF0b3JzKGZuLCBwcm9nLCBjb250YWluZXIsIGRlcHRocywgZGF0YSwgYmxvY2tQYXJhbXMpIHtcbiAgaWYgKGZuLmRlY29yYXRvcikge1xuICAgIGxldCBwcm9wcyA9IHt9O1xuICAgIHByb2cgPSBmbi5kZWNvcmF0b3IoXG4gICAgICBwcm9nLFxuICAgICAgcHJvcHMsXG4gICAgICBjb250YWluZXIsXG4gICAgICBkZXB0aHMgJiYgZGVwdGhzWzBdLFxuICAgICAgZGF0YSxcbiAgICAgIGJsb2NrUGFyYW1zLFxuICAgICAgZGVwdGhzXG4gICAgKTtcbiAgICBVdGlscy5leHRlbmQocHJvZywgcHJvcHMpO1xuICB9XG4gIHJldHVybiBwcm9nO1xufVxuXG5mdW5jdGlvbiB3cmFwSGVscGVyc1RvUGFzc0xvb2t1cFByb3BlcnR5KG1lcmdlZEhlbHBlcnMsIGNvbnRhaW5lcikge1xuICBPYmplY3Qua2V5cyhtZXJnZWRIZWxwZXJzKS5mb3JFYWNoKGhlbHBlck5hbWUgPT4ge1xuICAgIGxldCBoZWxwZXIgPSBtZXJnZWRIZWxwZXJzW2hlbHBlck5hbWVdO1xuICAgIG1lcmdlZEhlbHBlcnNbaGVscGVyTmFtZV0gPSBwYXNzTG9va3VwUHJvcGVydHlPcHRpb24oaGVscGVyLCBjb250YWluZXIpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcGFzc0xvb2t1cFByb3BlcnR5T3B0aW9uKGhlbHBlciwgY29udGFpbmVyKSB7XG4gIGNvbnN0IGxvb2t1cFByb3BlcnR5ID0gY29udGFpbmVyLmxvb2t1cFByb3BlcnR5O1xuICByZXR1cm4gd3JhcEhlbHBlcihoZWxwZXIsIG9wdGlvbnMgPT4ge1xuICAgIHJldHVybiBVdGlscy5leHRlbmQoeyBsb29rdXBQcm9wZXJ0eSB9LCBvcHRpb25zKTtcbiAgfSk7XG59XG4iXX0=


/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars/safe-string.js":
/*!********************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars/safe-string.js ***!
  \********************************************************************/
/***/ ((module, exports) => {

"use strict";
// Build out our basic SafeString type


exports.__esModule = true;
function SafeString(string) {
  this.string = string;
}

SafeString.prototype.toString = SafeString.prototype.toHTML = function () {
  return '' + this.string;
};

exports["default"] = SafeString;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL3NhZmUtc3RyaW5nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxTQUFTLFVBQVUsQ0FBQyxNQUFNLEVBQUU7QUFDMUIsTUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7Q0FDdEI7O0FBRUQsVUFBVSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsWUFBVztBQUN2RSxTQUFPLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO0NBQ3pCLENBQUM7O3FCQUVhLFVBQVUiLCJmaWxlIjoic2FmZS1zdHJpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBCdWlsZCBvdXQgb3VyIGJhc2ljIFNhZmVTdHJpbmcgdHlwZVxuZnVuY3Rpb24gU2FmZVN0cmluZyhzdHJpbmcpIHtcbiAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG59XG5cblNhZmVTdHJpbmcucHJvdG90eXBlLnRvU3RyaW5nID0gU2FmZVN0cmluZy5wcm90b3R5cGUudG9IVE1MID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiAnJyArIHRoaXMuc3RyaW5nO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2FmZVN0cmluZztcbiJdfQ==


/***/ }),

/***/ "./node_modules/handlebars/dist/cjs/handlebars/utils.js":
/*!**************************************************************!*\
  !*** ./node_modules/handlebars/dist/cjs/handlebars/utils.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


exports.__esModule = true;
exports.extend = extend;
exports.indexOf = indexOf;
exports.escapeExpression = escapeExpression;
exports.isEmpty = isEmpty;
exports.createFrame = createFrame;
exports.blockParams = blockParams;
exports.appendContextPath = appendContextPath;
var escape = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#x27;',
  '`': '&#x60;',
  '=': '&#x3D;'
};

var badChars = /[&<>"'`=]/g,
    possible = /[&<>"'`=]/;

function escapeChar(chr) {
  return escape[chr];
}

function extend(obj /* , ...source */) {
  for (var i = 1; i < arguments.length; i++) {
    for (var key in arguments[i]) {
      if (Object.prototype.hasOwnProperty.call(arguments[i], key)) {
        obj[key] = arguments[i][key];
      }
    }
  }

  return obj;
}

var toString = Object.prototype.toString;

exports.toString = toString;
// Sourced from lodash
// https://github.com/bestiejs/lodash/blob/master/LICENSE.txt
/* eslint-disable func-style */
var isFunction = function isFunction(value) {
  return typeof value === 'function';
};
// fallback for older versions of Chrome and Safari
/* istanbul ignore next */
if (isFunction(/x/)) {
  exports.isFunction = isFunction = function (value) {
    return typeof value === 'function' && toString.call(value) === '[object Function]';
  };
}
exports.isFunction = isFunction;

/* eslint-enable func-style */

/* istanbul ignore next */
var isArray = Array.isArray || function (value) {
  return value && typeof value === 'object' ? toString.call(value) === '[object Array]' : false;
};

exports.isArray = isArray;
// Older IE versions do not directly support indexOf so we must implement our own, sadly.

function indexOf(array, value) {
  for (var i = 0, len = array.length; i < len; i++) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
}

function escapeExpression(string) {
  if (typeof string !== 'string') {
    // don't escape SafeStrings, since they're already safe
    if (string && string.toHTML) {
      return string.toHTML();
    } else if (string == null) {
      return '';
    } else if (!string) {
      return string + '';
    }

    // Force a string conversion as this will be done by the append regardless and
    // the regex test will do this transparently behind the scenes, causing issues if
    // an object's to string has escaped characters in it.
    string = '' + string;
  }

  if (!possible.test(string)) {
    return string;
  }
  return string.replace(badChars, escapeChar);
}

function isEmpty(value) {
  if (!value && value !== 0) {
    return true;
  } else if (isArray(value) && value.length === 0) {
    return true;
  } else {
    return false;
  }
}

function createFrame(object) {
  var frame = extend({}, object);
  frame._parent = object;
  return frame;
}

function blockParams(params, ids) {
  params.path = ids;
  return params;
}

function appendContextPath(contextPath, id) {
  return (contextPath ? contextPath + '.' : '') + id;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL3V0aWxzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxJQUFNLE1BQU0sR0FBRztBQUNiLEtBQUcsRUFBRSxPQUFPO0FBQ1osS0FBRyxFQUFFLE1BQU07QUFDWCxLQUFHLEVBQUUsTUFBTTtBQUNYLEtBQUcsRUFBRSxRQUFRO0FBQ2IsS0FBRyxFQUFFLFFBQVE7QUFDYixLQUFHLEVBQUUsUUFBUTtBQUNiLEtBQUcsRUFBRSxRQUFRO0NBQ2QsQ0FBQzs7QUFFRixJQUFNLFFBQVEsR0FBRyxZQUFZO0lBQzNCLFFBQVEsR0FBRyxXQUFXLENBQUM7O0FBRXpCLFNBQVMsVUFBVSxDQUFDLEdBQUcsRUFBRTtBQUN2QixTQUFPLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztDQUNwQjs7QUFFTSxTQUFTLE1BQU0sQ0FBQyxHQUFHLG9CQUFvQjtBQUM1QyxPQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUN6QyxTQUFLLElBQUksR0FBRyxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRTtBQUM1QixVQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUU7QUFDM0QsV0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztPQUM5QjtLQUNGO0dBQ0Y7O0FBRUQsU0FBTyxHQUFHLENBQUM7Q0FDWjs7QUFFTSxJQUFJLFFBQVEsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQzs7Ozs7O0FBS2hELElBQUksVUFBVSxHQUFHLG9CQUFTLEtBQUssRUFBRTtBQUMvQixTQUFPLE9BQU8sS0FBSyxLQUFLLFVBQVUsQ0FBQztDQUNwQyxDQUFDOzs7QUFHRixJQUFJLFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFBRTtBQUNuQixVQU9PLFVBQVUsR0FQakIsVUFBVSxHQUFHLFVBQVMsS0FBSyxFQUFFO0FBQzNCLFdBQ0UsT0FBTyxLQUFLLEtBQUssVUFBVSxJQUMzQixRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLG1CQUFtQixDQUM1QztHQUNILENBQUM7Q0FDSDtRQUNRLFVBQVUsR0FBVixVQUFVOzs7OztBQUlaLElBQU0sT0FBTyxHQUNsQixLQUFLLENBQUMsT0FBTyxJQUNiLFVBQVMsS0FBSyxFQUFFO0FBQ2QsU0FBTyxLQUFLLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxHQUNyQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLGdCQUFnQixHQUN6QyxLQUFLLENBQUM7Q0FDWCxDQUFDOzs7OztBQUdHLFNBQVMsT0FBTyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUU7QUFDcEMsT0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUNoRCxRQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxLQUFLLEVBQUU7QUFDdEIsYUFBTyxDQUFDLENBQUM7S0FDVjtHQUNGO0FBQ0QsU0FBTyxDQUFDLENBQUMsQ0FBQztDQUNYOztBQUVNLFNBQVMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFO0FBQ3ZDLE1BQUksT0FBTyxNQUFNLEtBQUssUUFBUSxFQUFFOztBQUU5QixRQUFJLE1BQU0sSUFBSSxNQUFNLENBQUMsTUFBTSxFQUFFO0FBQzNCLGFBQU8sTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0tBQ3hCLE1BQU0sSUFBSSxNQUFNLElBQUksSUFBSSxFQUFFO0FBQ3pCLGFBQU8sRUFBRSxDQUFDO0tBQ1gsTUFBTSxJQUFJLENBQUMsTUFBTSxFQUFFO0FBQ2xCLGFBQU8sTUFBTSxHQUFHLEVBQUUsQ0FBQztLQUNwQjs7Ozs7QUFLRCxVQUFNLEdBQUcsRUFBRSxHQUFHLE1BQU0sQ0FBQztHQUN0Qjs7QUFFRCxNQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRTtBQUMxQixXQUFPLE1BQU0sQ0FBQztHQUNmO0FBQ0QsU0FBTyxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQztDQUM3Qzs7QUFFTSxTQUFTLE9BQU8sQ0FBQyxLQUFLLEVBQUU7QUFDN0IsTUFBSSxDQUFDLEtBQUssSUFBSSxLQUFLLEtBQUssQ0FBQyxFQUFFO0FBQ3pCLFdBQU8sSUFBSSxDQUFDO0dBQ2IsTUFBTSxJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtBQUMvQyxXQUFPLElBQUksQ0FBQztHQUNiLE1BQU07QUFDTCxXQUFPLEtBQUssQ0FBQztHQUNkO0NBQ0Y7O0FBRU0sU0FBUyxXQUFXLENBQUMsTUFBTSxFQUFFO0FBQ2xDLE1BQUksS0FBSyxHQUFHLE1BQU0sQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDL0IsT0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7QUFDdkIsU0FBTyxLQUFLLENBQUM7Q0FDZDs7QUFFTSxTQUFTLFdBQVcsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLFFBQU0sQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO0FBQ2xCLFNBQU8sTUFBTSxDQUFDO0NBQ2Y7O0FBRU0sU0FBUyxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsRUFBRSxFQUFFO0FBQ2pELFNBQU8sQ0FBQyxXQUFXLEdBQUcsV0FBVyxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUEsR0FBSSxFQUFFLENBQUM7Q0FDcEQiLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBlc2NhcGUgPSB7XG4gICcmJzogJyZhbXA7JyxcbiAgJzwnOiAnJmx0OycsXG4gICc+JzogJyZndDsnLFxuICAnXCInOiAnJnF1b3Q7JyxcbiAgXCInXCI6ICcmI3gyNzsnLFxuICAnYCc6ICcmI3g2MDsnLFxuICAnPSc6ICcmI3gzRDsnXG59O1xuXG5jb25zdCBiYWRDaGFycyA9IC9bJjw+XCInYD1dL2csXG4gIHBvc3NpYmxlID0gL1smPD5cIidgPV0vO1xuXG5mdW5jdGlvbiBlc2NhcGVDaGFyKGNocikge1xuICByZXR1cm4gZXNjYXBlW2Nocl07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHRlbmQob2JqIC8qICwgLi4uc291cmNlICovKSB7XG4gIGZvciAobGV0IGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgZm9yIChsZXQga2V5IGluIGFyZ3VtZW50c1tpXSkge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChhcmd1bWVudHNbaV0sIGtleSkpIHtcbiAgICAgICAgb2JqW2tleV0gPSBhcmd1bWVudHNbaV1ba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5leHBvcnQgbGV0IHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxuLy8gU291cmNlZCBmcm9tIGxvZGFzaFxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2Jlc3RpZWpzL2xvZGFzaC9ibG9iL21hc3Rlci9MSUNFTlNFLnR4dFxuLyogZXNsaW50LWRpc2FibGUgZnVuYy1zdHlsZSAqL1xubGV0IGlzRnVuY3Rpb24gPSBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nO1xufTtcbi8vIGZhbGxiYWNrIGZvciBvbGRlciB2ZXJzaW9ucyBvZiBDaHJvbWUgYW5kIFNhZmFyaVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmlmIChpc0Z1bmN0aW9uKC94LykpIHtcbiAgaXNGdW5jdGlvbiA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgICAgdG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSdcbiAgICApO1xuICB9O1xufVxuZXhwb3J0IHsgaXNGdW5jdGlvbiB9O1xuLyogZXNsaW50LWVuYWJsZSBmdW5jLXN0eWxlICovXG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5leHBvcnQgY29uc3QgaXNBcnJheSA9XG4gIEFycmF5LmlzQXJyYXkgfHxcbiAgZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0J1xuICAgICAgPyB0b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgQXJyYXldJ1xuICAgICAgOiBmYWxzZTtcbiAgfTtcblxuLy8gT2xkZXIgSUUgdmVyc2lvbnMgZG8gbm90IGRpcmVjdGx5IHN1cHBvcnQgaW5kZXhPZiBzbyB3ZSBtdXN0IGltcGxlbWVudCBvdXIgb3duLCBzYWRseS5cbmV4cG9ydCBmdW5jdGlvbiBpbmRleE9mKGFycmF5LCB2YWx1ZSkge1xuICBmb3IgKGxldCBpID0gMCwgbGVuID0gYXJyYXkubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBpZiAoYXJyYXlbaV0gPT09IHZhbHVlKSB7XG4gICAgICByZXR1cm4gaTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXNjYXBlRXhwcmVzc2lvbihzdHJpbmcpIHtcbiAgaWYgKHR5cGVvZiBzdHJpbmcgIT09ICdzdHJpbmcnKSB7XG4gICAgLy8gZG9uJ3QgZXNjYXBlIFNhZmVTdHJpbmdzLCBzaW5jZSB0aGV5J3JlIGFscmVhZHkgc2FmZVxuICAgIGlmIChzdHJpbmcgJiYgc3RyaW5nLnRvSFRNTCkge1xuICAgICAgcmV0dXJuIHN0cmluZy50b0hUTUwoKTtcbiAgICB9IGVsc2UgaWYgKHN0cmluZyA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfSBlbHNlIGlmICghc3RyaW5nKSB7XG4gICAgICByZXR1cm4gc3RyaW5nICsgJyc7XG4gICAgfVxuXG4gICAgLy8gRm9yY2UgYSBzdHJpbmcgY29udmVyc2lvbiBhcyB0aGlzIHdpbGwgYmUgZG9uZSBieSB0aGUgYXBwZW5kIHJlZ2FyZGxlc3MgYW5kXG4gICAgLy8gdGhlIHJlZ2V4IHRlc3Qgd2lsbCBkbyB0aGlzIHRyYW5zcGFyZW50bHkgYmVoaW5kIHRoZSBzY2VuZXMsIGNhdXNpbmcgaXNzdWVzIGlmXG4gICAgLy8gYW4gb2JqZWN0J3MgdG8gc3RyaW5nIGhhcyBlc2NhcGVkIGNoYXJhY3RlcnMgaW4gaXQuXG4gICAgc3RyaW5nID0gJycgKyBzdHJpbmc7XG4gIH1cblxuICBpZiAoIXBvc3NpYmxlLnRlc3Qoc3RyaW5nKSkge1xuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cbiAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKGJhZENoYXJzLCBlc2NhcGVDaGFyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRW1wdHkodmFsdWUpIHtcbiAgaWYgKCF2YWx1ZSAmJiB2YWx1ZSAhPT0gMCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2UgaWYgKGlzQXJyYXkodmFsdWUpICYmIHZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRnJhbWUob2JqZWN0KSB7XG4gIGxldCBmcmFtZSA9IGV4dGVuZCh7fSwgb2JqZWN0KTtcbiAgZnJhbWUuX3BhcmVudCA9IG9iamVjdDtcbiAgcmV0dXJuIGZyYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYmxvY2tQYXJhbXMocGFyYW1zLCBpZHMpIHtcbiAgcGFyYW1zLnBhdGggPSBpZHM7XG4gIHJldHVybiBwYXJhbXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBlbmRDb250ZXh0UGF0aChjb250ZXh0UGF0aCwgaWQpIHtcbiAgcmV0dXJuIChjb250ZXh0UGF0aCA/IGNvbnRleHRQYXRoICsgJy4nIDogJycpICsgaWQ7XG59XG4iXX0=


/***/ }),

/***/ "./node_modules/handlebars/runtime.js":
/*!********************************************!*\
  !*** ./node_modules/handlebars/runtime.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Create a simple path alias to allow browserify to resolve
// the runtime on a supported path.
module.exports = __webpack_require__(/*! ./dist/cjs/handlebars.runtime */ "./node_modules/handlebars/dist/cjs/handlebars.runtime.js")["default"];


/***/ }),

/***/ "./node_modules/@pnotify/core/dist/BrightTheme.css":
/*!*********************************************************!*\
  !*** ./node_modules/@pnotify/core/dist/BrightTheme.css ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/@pnotify/core/dist/PNotify.css":
/*!*****************************************************!*\
  !*** ./node_modules/@pnotify/core/dist/PNotify.css ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/numeral/numeral.js":
/*!*****************************************!*\
  !*** ./node_modules/numeral/numeral.js ***!
  \*****************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! @preserve
 * numeral.js
 * version : 2.0.6
 * author : Adam Draper
 * license : MIT
 * http://adamwdraper.github.com/Numeral-js/
 */

(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
		__WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}
}(this, function () {
    /************************************
        Variables
    ************************************/

    var numeral,
        _,
        VERSION = '2.0.6',
        formats = {},
        locales = {},
        defaults = {
            currentLocale: 'en',
            zeroFormat: null,
            nullFormat: null,
            defaultFormat: '0,0',
            scalePercentBy100: true
        },
        options = {
            currentLocale: defaults.currentLocale,
            zeroFormat: defaults.zeroFormat,
            nullFormat: defaults.nullFormat,
            defaultFormat: defaults.defaultFormat,
            scalePercentBy100: defaults.scalePercentBy100
        };


    /************************************
        Constructors
    ************************************/

    // Numeral prototype object
    function Numeral(input, number) {
        this._input = input;

        this._value = number;
    }

    numeral = function(input) {
        var value,
            kind,
            unformatFunction,
            regexp;

        if (numeral.isNumeral(input)) {
            value = input.value();
        } else if (input === 0 || typeof input === 'undefined') {
            value = 0;
        } else if (input === null || _.isNaN(input)) {
            value = null;
        } else if (typeof input === 'string') {
            if (options.zeroFormat && input === options.zeroFormat) {
                value = 0;
            } else if (options.nullFormat && input === options.nullFormat || !input.replace(/[^0-9]+/g, '').length) {
                value = null;
            } else {
                for (kind in formats) {
                    regexp = typeof formats[kind].regexps.unformat === 'function' ? formats[kind].regexps.unformat() : formats[kind].regexps.unformat;

                    if (regexp && input.match(regexp)) {
                        unformatFunction = formats[kind].unformat;

                        break;
                    }
                }

                unformatFunction = unformatFunction || numeral._.stringToNumber;

                value = unformatFunction(input);
            }
        } else {
            value = Number(input)|| null;
        }

        return new Numeral(input, value);
    };

    // version number
    numeral.version = VERSION;

    // compare numeral object
    numeral.isNumeral = function(obj) {
        return obj instanceof Numeral;
    };

    // helper functions
    numeral._ = _ = {
        // formats numbers separators, decimals places, signs, abbreviations
        numberToFormat: function(value, format, roundingFunction) {
            var locale = locales[numeral.options.currentLocale],
                negP = false,
                optDec = false,
                leadingCount = 0,
                abbr = '',
                trillion = 1000000000000,
                billion = 1000000000,
                million = 1000000,
                thousand = 1000,
                decimal = '',
                neg = false,
                abbrForce, // force abbreviation
                abs,
                min,
                max,
                power,
                int,
                precision,
                signed,
                thousands,
                output;

            // make sure we never format a null value
            value = value || 0;

            abs = Math.abs(value);

            // see if we should use parentheses for negative number or if we should prefix with a sign
            // if both are present we default to parentheses
            if (numeral._.includes(format, '(')) {
                negP = true;
                format = format.replace(/[\(|\)]/g, '');
            } else if (numeral._.includes(format, '+') || numeral._.includes(format, '-')) {
                signed = numeral._.includes(format, '+') ? format.indexOf('+') : value < 0 ? format.indexOf('-') : -1;
                format = format.replace(/[\+|\-]/g, '');
            }

            // see if abbreviation is wanted
            if (numeral._.includes(format, 'a')) {
                abbrForce = format.match(/a(k|m|b|t)?/);

                abbrForce = abbrForce ? abbrForce[1] : false;

                // check for space before abbreviation
                if (numeral._.includes(format, ' a')) {
                    abbr = ' ';
                }

                format = format.replace(new RegExp(abbr + 'a[kmbt]?'), '');

                if (abs >= trillion && !abbrForce || abbrForce === 't') {
                    // trillion
                    abbr += locale.abbreviations.trillion;
                    value = value / trillion;
                } else if (abs < trillion && abs >= billion && !abbrForce || abbrForce === 'b') {
                    // billion
                    abbr += locale.abbreviations.billion;
                    value = value / billion;
                } else if (abs < billion && abs >= million && !abbrForce || abbrForce === 'm') {
                    // million
                    abbr += locale.abbreviations.million;
                    value = value / million;
                } else if (abs < million && abs >= thousand && !abbrForce || abbrForce === 'k') {
                    // thousand
                    abbr += locale.abbreviations.thousand;
                    value = value / thousand;
                }
            }

            // check for optional decimals
            if (numeral._.includes(format, '[.]')) {
                optDec = true;
                format = format.replace('[.]', '.');
            }

            // break number and format
            int = value.toString().split('.')[0];
            precision = format.split('.')[1];
            thousands = format.indexOf(',');
            leadingCount = (format.split('.')[0].split(',')[0].match(/0/g) || []).length;

            if (precision) {
                if (numeral._.includes(precision, '[')) {
                    precision = precision.replace(']', '');
                    precision = precision.split('[');
                    decimal = numeral._.toFixed(value, (precision[0].length + precision[1].length), roundingFunction, precision[1].length);
                } else {
                    decimal = numeral._.toFixed(value, precision.length, roundingFunction);
                }

                int = decimal.split('.')[0];

                if (numeral._.includes(decimal, '.')) {
                    decimal = locale.delimiters.decimal + decimal.split('.')[1];
                } else {
                    decimal = '';
                }

                if (optDec && Number(decimal.slice(1)) === 0) {
                    decimal = '';
                }
            } else {
                int = numeral._.toFixed(value, 0, roundingFunction);
            }

            // check abbreviation again after rounding
            if (abbr && !abbrForce && Number(int) >= 1000 && abbr !== locale.abbreviations.trillion) {
                int = String(Number(int) / 1000);

                switch (abbr) {
                    case locale.abbreviations.thousand:
                        abbr = locale.abbreviations.million;
                        break;
                    case locale.abbreviations.million:
                        abbr = locale.abbreviations.billion;
                        break;
                    case locale.abbreviations.billion:
                        abbr = locale.abbreviations.trillion;
                        break;
                }
            }


            // format number
            if (numeral._.includes(int, '-')) {
                int = int.slice(1);
                neg = true;
            }

            if (int.length < leadingCount) {
                for (var i = leadingCount - int.length; i > 0; i--) {
                    int = '0' + int;
                }
            }

            if (thousands > -1) {
                int = int.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1' + locale.delimiters.thousands);
            }

            if (format.indexOf('.') === 0) {
                int = '';
            }

            output = int + decimal + (abbr ? abbr : '');

            if (negP) {
                output = (negP && neg ? '(' : '') + output + (negP && neg ? ')' : '');
            } else {
                if (signed >= 0) {
                    output = signed === 0 ? (neg ? '-' : '+') + output : output + (neg ? '-' : '+');
                } else if (neg) {
                    output = '-' + output;
                }
            }

            return output;
        },
        // unformats numbers separators, decimals places, signs, abbreviations
        stringToNumber: function(string) {
            var locale = locales[options.currentLocale],
                stringOriginal = string,
                abbreviations = {
                    thousand: 3,
                    million: 6,
                    billion: 9,
                    trillion: 12
                },
                abbreviation,
                value,
                i,
                regexp;

            if (options.zeroFormat && string === options.zeroFormat) {
                value = 0;
            } else if (options.nullFormat && string === options.nullFormat || !string.replace(/[^0-9]+/g, '').length) {
                value = null;
            } else {
                value = 1;

                if (locale.delimiters.decimal !== '.') {
                    string = string.replace(/\./g, '').replace(locale.delimiters.decimal, '.');
                }

                for (abbreviation in abbreviations) {
                    regexp = new RegExp('[^a-zA-Z]' + locale.abbreviations[abbreviation] + '(?:\\)|(\\' + locale.currency.symbol + ')?(?:\\))?)?$');

                    if (stringOriginal.match(regexp)) {
                        value *= Math.pow(10, abbreviations[abbreviation]);
                        break;
                    }
                }

                // check for negative number
                value *= (string.split('-').length + Math.min(string.split('(').length - 1, string.split(')').length - 1)) % 2 ? 1 : -1;

                // remove non numbers
                string = string.replace(/[^0-9\.]+/g, '');

                value *= Number(string);
            }

            return value;
        },
        isNaN: function(value) {
            return typeof value === 'number' && isNaN(value);
        },
        includes: function(string, search) {
            return string.indexOf(search) !== -1;
        },
        insert: function(string, subString, start) {
            return string.slice(0, start) + subString + string.slice(start);
        },
        reduce: function(array, callback /*, initialValue*/) {
            if (this === null) {
                throw new TypeError('Array.prototype.reduce called on null or undefined');
            }

            if (typeof callback !== 'function') {
                throw new TypeError(callback + ' is not a function');
            }

            var t = Object(array),
                len = t.length >>> 0,
                k = 0,
                value;

            if (arguments.length === 3) {
                value = arguments[2];
            } else {
                while (k < len && !(k in t)) {
                    k++;
                }

                if (k >= len) {
                    throw new TypeError('Reduce of empty array with no initial value');
                }

                value = t[k++];
            }
            for (; k < len; k++) {
                if (k in t) {
                    value = callback(value, t[k], k, t);
                }
            }
            return value;
        },
        /**
         * Computes the multiplier necessary to make x >= 1,
         * effectively eliminating miscalculations caused by
         * finite precision.
         */
        multiplier: function (x) {
            var parts = x.toString().split('.');

            return parts.length < 2 ? 1 : Math.pow(10, parts[1].length);
        },
        /**
         * Given a variable number of arguments, returns the maximum
         * multiplier that must be used to normalize an operation involving
         * all of them.
         */
        correctionFactor: function () {
            var args = Array.prototype.slice.call(arguments);

            return args.reduce(function(accum, next) {
                var mn = _.multiplier(next);
                return accum > mn ? accum : mn;
            }, 1);
        },
        /**
         * Implementation of toFixed() that treats floats more like decimals
         *
         * Fixes binary rounding issues (eg. (0.615).toFixed(2) === '0.61') that present
         * problems for accounting- and finance-related software.
         */
        toFixed: function(value, maxDecimals, roundingFunction, optionals) {
            var splitValue = value.toString().split('.'),
                minDecimals = maxDecimals - (optionals || 0),
                boundedPrecision,
                optionalsRegExp,
                power,
                output;

            // Use the smallest precision value possible to avoid errors from floating point representation
            if (splitValue.length === 2) {
              boundedPrecision = Math.min(Math.max(splitValue[1].length, minDecimals), maxDecimals);
            } else {
              boundedPrecision = minDecimals;
            }

            power = Math.pow(10, boundedPrecision);

            // Multiply up by precision, round accurately, then divide and use native toFixed():
            output = (roundingFunction(value + 'e+' + boundedPrecision) / power).toFixed(boundedPrecision);

            if (optionals > maxDecimals - boundedPrecision) {
                optionalsRegExp = new RegExp('\\.?0{1,' + (optionals - (maxDecimals - boundedPrecision)) + '}$');
                output = output.replace(optionalsRegExp, '');
            }

            return output;
        }
    };

    // avaliable options
    numeral.options = options;

    // avaliable formats
    numeral.formats = formats;

    // avaliable formats
    numeral.locales = locales;

    // This function sets the current locale.  If
    // no arguments are passed in, it will simply return the current global
    // locale key.
    numeral.locale = function(key) {
        if (key) {
            options.currentLocale = key.toLowerCase();
        }

        return options.currentLocale;
    };

    // This function provides access to the loaded locale data.  If
    // no arguments are passed in, it will simply return the current
    // global locale object.
    numeral.localeData = function(key) {
        if (!key) {
            return locales[options.currentLocale];
        }

        key = key.toLowerCase();

        if (!locales[key]) {
            throw new Error('Unknown locale : ' + key);
        }

        return locales[key];
    };

    numeral.reset = function() {
        for (var property in defaults) {
            options[property] = defaults[property];
        }
    };

    numeral.zeroFormat = function(format) {
        options.zeroFormat = typeof(format) === 'string' ? format : null;
    };

    numeral.nullFormat = function (format) {
        options.nullFormat = typeof(format) === 'string' ? format : null;
    };

    numeral.defaultFormat = function(format) {
        options.defaultFormat = typeof(format) === 'string' ? format : '0.0';
    };

    numeral.register = function(type, name, format) {
        name = name.toLowerCase();

        if (this[type + 's'][name]) {
            throw new TypeError(name + ' ' + type + ' already registered.');
        }

        this[type + 's'][name] = format;

        return format;
    };


    numeral.validate = function(val, culture) {
        var _decimalSep,
            _thousandSep,
            _currSymbol,
            _valArray,
            _abbrObj,
            _thousandRegEx,
            localeData,
            temp;

        //coerce val to string
        if (typeof val !== 'string') {
            val += '';

            if (console.warn) {
                console.warn('Numeral.js: Value is not string. It has been co-erced to: ', val);
            }
        }

        //trim whitespaces from either sides
        val = val.trim();

        //if val is just digits return true
        if (!!val.match(/^\d+$/)) {
            return true;
        }

        //if val is empty return false
        if (val === '') {
            return false;
        }

        //get the decimal and thousands separator from numeral.localeData
        try {
            //check if the culture is understood by numeral. if not, default it to current locale
            localeData = numeral.localeData(culture);
        } catch (e) {
            localeData = numeral.localeData(numeral.locale());
        }

        //setup the delimiters and currency symbol based on culture/locale
        _currSymbol = localeData.currency.symbol;
        _abbrObj = localeData.abbreviations;
        _decimalSep = localeData.delimiters.decimal;
        if (localeData.delimiters.thousands === '.') {
            _thousandSep = '\\.';
        } else {
            _thousandSep = localeData.delimiters.thousands;
        }

        // validating currency symbol
        temp = val.match(/^[^\d]+/);
        if (temp !== null) {
            val = val.substr(1);
            if (temp[0] !== _currSymbol) {
                return false;
            }
        }

        //validating abbreviation symbol
        temp = val.match(/[^\d]+$/);
        if (temp !== null) {
            val = val.slice(0, -1);
            if (temp[0] !== _abbrObj.thousand && temp[0] !== _abbrObj.million && temp[0] !== _abbrObj.billion && temp[0] !== _abbrObj.trillion) {
                return false;
            }
        }

        _thousandRegEx = new RegExp(_thousandSep + '{2}');

        if (!val.match(/[^\d.,]/g)) {
            _valArray = val.split(_decimalSep);
            if (_valArray.length > 2) {
                return false;
            } else {
                if (_valArray.length < 2) {
                    return ( !! _valArray[0].match(/^\d+.*\d$/) && !_valArray[0].match(_thousandRegEx));
                } else {
                    if (_valArray[0].length === 1) {
                        return ( !! _valArray[0].match(/^\d+$/) && !_valArray[0].match(_thousandRegEx) && !! _valArray[1].match(/^\d+$/));
                    } else {
                        return ( !! _valArray[0].match(/^\d+.*\d$/) && !_valArray[0].match(_thousandRegEx) && !! _valArray[1].match(/^\d+$/));
                    }
                }
            }
        }

        return false;
    };


    /************************************
        Numeral Prototype
    ************************************/

    numeral.fn = Numeral.prototype = {
        clone: function() {
            return numeral(this);
        },
        format: function(inputString, roundingFunction) {
            var value = this._value,
                format = inputString || options.defaultFormat,
                kind,
                output,
                formatFunction;

            // make sure we have a roundingFunction
            roundingFunction = roundingFunction || Math.round;

            // format based on value
            if (value === 0 && options.zeroFormat !== null) {
                output = options.zeroFormat;
            } else if (value === null && options.nullFormat !== null) {
                output = options.nullFormat;
            } else {
                for (kind in formats) {
                    if (format.match(formats[kind].regexps.format)) {
                        formatFunction = formats[kind].format;

                        break;
                    }
                }

                formatFunction = formatFunction || numeral._.numberToFormat;

                output = formatFunction(value, format, roundingFunction);
            }

            return output;
        },
        value: function() {
            return this._value;
        },
        input: function() {
            return this._input;
        },
        set: function(value) {
            this._value = Number(value);

            return this;
        },
        add: function(value) {
            var corrFactor = _.correctionFactor.call(null, this._value, value);

            function cback(accum, curr, currI, O) {
                return accum + Math.round(corrFactor * curr);
            }

            this._value = _.reduce([this._value, value], cback, 0) / corrFactor;

            return this;
        },
        subtract: function(value) {
            var corrFactor = _.correctionFactor.call(null, this._value, value);

            function cback(accum, curr, currI, O) {
                return accum - Math.round(corrFactor * curr);
            }

            this._value = _.reduce([value], cback, Math.round(this._value * corrFactor)) / corrFactor;

            return this;
        },
        multiply: function(value) {
            function cback(accum, curr, currI, O) {
                var corrFactor = _.correctionFactor(accum, curr);
                return Math.round(accum * corrFactor) * Math.round(curr * corrFactor) / Math.round(corrFactor * corrFactor);
            }

            this._value = _.reduce([this._value, value], cback, 1);

            return this;
        },
        divide: function(value) {
            function cback(accum, curr, currI, O) {
                var corrFactor = _.correctionFactor(accum, curr);
                return Math.round(accum * corrFactor) / Math.round(curr * corrFactor);
            }

            this._value = _.reduce([this._value, value], cback);

            return this;
        },
        difference: function(value) {
            return Math.abs(numeral(this._value).subtract(value).value());
        }
    };

    /************************************
        Default Locale && Format
    ************************************/

    numeral.register('locale', 'en', {
        delimiters: {
            thousands: ',',
            decimal: '.'
        },
        abbreviations: {
            thousand: 'k',
            million: 'm',
            billion: 'b',
            trillion: 't'
        },
        ordinal: function(number) {
            var b = number % 10;
            return (~~(number % 100 / 10) === 1) ? 'th' :
                (b === 1) ? 'st' :
                (b === 2) ? 'nd' :
                (b === 3) ? 'rd' : 'th';
        },
        currency: {
            symbol: '$'
        }
    });

    

(function() {
        numeral.register('format', 'bps', {
            regexps: {
                format: /(BPS)/,
                unformat: /(BPS)/
            },
            format: function(value, format, roundingFunction) {
                var space = numeral._.includes(format, ' BPS') ? ' ' : '',
                    output;

                value = value * 10000;

                // check for space before BPS
                format = format.replace(/\s?BPS/, '');

                output = numeral._.numberToFormat(value, format, roundingFunction);

                if (numeral._.includes(output, ')')) {
                    output = output.split('');

                    output.splice(-1, 0, space + 'BPS');

                    output = output.join('');
                } else {
                    output = output + space + 'BPS';
                }

                return output;
            },
            unformat: function(string) {
                return +(numeral._.stringToNumber(string) * 0.0001).toFixed(15);
            }
        });
})();


(function() {
        var decimal = {
            base: 1000,
            suffixes: ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
        },
        binary = {
            base: 1024,
            suffixes: ['B', 'KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB']
        };

    var allSuffixes =  decimal.suffixes.concat(binary.suffixes.filter(function (item) {
            return decimal.suffixes.indexOf(item) < 0;
        }));
        var unformatRegex = allSuffixes.join('|');
        // Allow support for BPS (http://www.investopedia.com/terms/b/basispoint.asp)
        unformatRegex = '(' + unformatRegex.replace('B', 'B(?!PS)') + ')';

    numeral.register('format', 'bytes', {
        regexps: {
            format: /([0\s]i?b)/,
            unformat: new RegExp(unformatRegex)
        },
        format: function(value, format, roundingFunction) {
            var output,
                bytes = numeral._.includes(format, 'ib') ? binary : decimal,
                suffix = numeral._.includes(format, ' b') || numeral._.includes(format, ' ib') ? ' ' : '',
                power,
                min,
                max;

            // check for space before
            format = format.replace(/\s?i?b/, '');

            for (power = 0; power <= bytes.suffixes.length; power++) {
                min = Math.pow(bytes.base, power);
                max = Math.pow(bytes.base, power + 1);

                if (value === null || value === 0 || value >= min && value < max) {
                    suffix += bytes.suffixes[power];

                    if (min > 0) {
                        value = value / min;
                    }

                    break;
                }
            }

            output = numeral._.numberToFormat(value, format, roundingFunction);

            return output + suffix;
        },
        unformat: function(string) {
            var value = numeral._.stringToNumber(string),
                power,
                bytesMultiplier;

            if (value) {
                for (power = decimal.suffixes.length - 1; power >= 0; power--) {
                    if (numeral._.includes(string, decimal.suffixes[power])) {
                        bytesMultiplier = Math.pow(decimal.base, power);

                        break;
                    }

                    if (numeral._.includes(string, binary.suffixes[power])) {
                        bytesMultiplier = Math.pow(binary.base, power);

                        break;
                    }
                }

                value *= (bytesMultiplier || 1);
            }

            return value;
        }
    });
})();


(function() {
        numeral.register('format', 'currency', {
        regexps: {
            format: /(\$)/
        },
        format: function(value, format, roundingFunction) {
            var locale = numeral.locales[numeral.options.currentLocale],
                symbols = {
                    before: format.match(/^([\+|\-|\(|\s|\$]*)/)[0],
                    after: format.match(/([\+|\-|\)|\s|\$]*)$/)[0]
                },
                output,
                symbol,
                i;

            // strip format of spaces and $
            format = format.replace(/\s?\$\s?/, '');

            // format the number
            output = numeral._.numberToFormat(value, format, roundingFunction);

            // update the before and after based on value
            if (value >= 0) {
                symbols.before = symbols.before.replace(/[\-\(]/, '');
                symbols.after = symbols.after.replace(/[\-\)]/, '');
            } else if (value < 0 && (!numeral._.includes(symbols.before, '-') && !numeral._.includes(symbols.before, '('))) {
                symbols.before = '-' + symbols.before;
            }

            // loop through each before symbol
            for (i = 0; i < symbols.before.length; i++) {
                symbol = symbols.before[i];

                switch (symbol) {
                    case '$':
                        output = numeral._.insert(output, locale.currency.symbol, i);
                        break;
                    case ' ':
                        output = numeral._.insert(output, ' ', i + locale.currency.symbol.length - 1);
                        break;
                }
            }

            // loop through each after symbol
            for (i = symbols.after.length - 1; i >= 0; i--) {
                symbol = symbols.after[i];

                switch (symbol) {
                    case '$':
                        output = i === symbols.after.length - 1 ? output + locale.currency.symbol : numeral._.insert(output, locale.currency.symbol, -(symbols.after.length - (1 + i)));
                        break;
                    case ' ':
                        output = i === symbols.after.length - 1 ? output + ' ' : numeral._.insert(output, ' ', -(symbols.after.length - (1 + i) + locale.currency.symbol.length - 1));
                        break;
                }
            }


            return output;
        }
    });
})();


(function() {
        numeral.register('format', 'exponential', {
        regexps: {
            format: /(e\+|e-)/,
            unformat: /(e\+|e-)/
        },
        format: function(value, format, roundingFunction) {
            var output,
                exponential = typeof value === 'number' && !numeral._.isNaN(value) ? value.toExponential() : '0e+0',
                parts = exponential.split('e');

            format = format.replace(/e[\+|\-]{1}0/, '');

            output = numeral._.numberToFormat(Number(parts[0]), format, roundingFunction);

            return output + 'e' + parts[1];
        },
        unformat: function(string) {
            var parts = numeral._.includes(string, 'e+') ? string.split('e+') : string.split('e-'),
                value = Number(parts[0]),
                power = Number(parts[1]);

            power = numeral._.includes(string, 'e-') ? power *= -1 : power;

            function cback(accum, curr, currI, O) {
                var corrFactor = numeral._.correctionFactor(accum, curr),
                    num = (accum * corrFactor) * (curr * corrFactor) / (corrFactor * corrFactor);
                return num;
            }

            return numeral._.reduce([value, Math.pow(10, power)], cback, 1);
        }
    });
})();


(function() {
        numeral.register('format', 'ordinal', {
        regexps: {
            format: /(o)/
        },
        format: function(value, format, roundingFunction) {
            var locale = numeral.locales[numeral.options.currentLocale],
                output,
                ordinal = numeral._.includes(format, ' o') ? ' ' : '';

            // check for space before
            format = format.replace(/\s?o/, '');

            ordinal += locale.ordinal(value);

            output = numeral._.numberToFormat(value, format, roundingFunction);

            return output + ordinal;
        }
    });
})();


(function() {
        numeral.register('format', 'percentage', {
        regexps: {
            format: /(%)/,
            unformat: /(%)/
        },
        format: function(value, format, roundingFunction) {
            var space = numeral._.includes(format, ' %') ? ' ' : '',
                output;

            if (numeral.options.scalePercentBy100) {
                value = value * 100;
            }

            // check for space before %
            format = format.replace(/\s?\%/, '');

            output = numeral._.numberToFormat(value, format, roundingFunction);

            if (numeral._.includes(output, ')')) {
                output = output.split('');

                output.splice(-1, 0, space + '%');

                output = output.join('');
            } else {
                output = output + space + '%';
            }

            return output;
        },
        unformat: function(string) {
            var number = numeral._.stringToNumber(string);
            if (numeral.options.scalePercentBy100) {
                return number * 0.01;
            }
            return number;
        }
    });
})();


(function() {
        numeral.register('format', 'time', {
        regexps: {
            format: /(:)/,
            unformat: /(:)/
        },
        format: function(value, format, roundingFunction) {
            var hours = Math.floor(value / 60 / 60),
                minutes = Math.floor((value - (hours * 60 * 60)) / 60),
                seconds = Math.round(value - (hours * 60 * 60) - (minutes * 60));

            return hours + ':' + (minutes < 10 ? '0' + minutes : minutes) + ':' + (seconds < 10 ? '0' + seconds : seconds);
        },
        unformat: function(string) {
            var timeArray = string.split(':'),
                seconds = 0;

            // turn hours and minutes into seconds and add them all up
            if (timeArray.length === 3) {
                // hours
                seconds = seconds + (Number(timeArray[0]) * 60 * 60);
                // minutes
                seconds = seconds + (Number(timeArray[1]) * 60);
                // seconds
                seconds = seconds + Number(timeArray[2]);
            } else if (timeArray.length === 2) {
                // minutes
                seconds = seconds + (Number(timeArray[0]) * 60);
                // seconds
                seconds = seconds + Number(timeArray[1]);
            }
            return Number(seconds);
        }
    });
})();

return numeral;
}));


/***/ }),

/***/ "./node_modules/axios/lib/adapters/adapters.js":
/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/adapters/adapters.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _http_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http.js */ "./node_modules/axios/lib/helpers/null.js");
/* harmony import */ var _xhr_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./xhr.js */ "./node_modules/axios/lib/adapters/xhr.js");
/* harmony import */ var _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/AxiosError.js */ "./node_modules/axios/lib/core/AxiosError.js");





const knownAdapters = {
  http: _http_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  xhr: _xhr_js__WEBPACK_IMPORTED_MODULE_1__["default"]
}

_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].forEach(knownAdapters, (fn, value) => {
  if(fn) {
    try {
      Object.defineProperty(fn, 'name', {value});
    } catch (e) {
      // eslint-disable-next-line no-empty
    }
    Object.defineProperty(fn, 'adapterName', {value});
  }
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  getAdapter: (adapters) => {
    adapters = _utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].isArray(adapters) ? adapters : [adapters];

    const {length} = adapters;
    let nameOrAdapter;
    let adapter;

    for (let i = 0; i < length; i++) {
      nameOrAdapter = adapters[i];
      if((adapter = _utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].isString(nameOrAdapter) ? knownAdapters[nameOrAdapter.toLowerCase()] : nameOrAdapter)) {
        break;
      }
    }

    if (!adapter) {
      if (adapter === false) {
        throw new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_3__["default"](
          `Adapter ${nameOrAdapter} is not supported by the environment`,
          'ERR_NOT_SUPPORT'
        );
      }

      throw new Error(
        _utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].hasOwnProp(knownAdapters, nameOrAdapter) ?
          `Adapter '${nameOrAdapter}' is not available in the build` :
          `Unknown adapter '${nameOrAdapter}'`
      );
    }

    if (!_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].isFunction(adapter)) {
      throw new TypeError('adapter is not a function');
    }

    return adapter;
  },
  adapters: knownAdapters
});


/***/ }),

/***/ "./node_modules/axios/lib/adapters/xhr.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/adapters/xhr.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _core_settle_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../core/settle.js */ "./node_modules/axios/lib/core/settle.js");
/* harmony import */ var _helpers_cookies_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../helpers/cookies.js */ "./node_modules/axios/lib/helpers/cookies.js");
/* harmony import */ var _helpers_buildURL_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../helpers/buildURL.js */ "./node_modules/axios/lib/helpers/buildURL.js");
/* harmony import */ var _core_buildFullPath_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/buildFullPath.js */ "./node_modules/axios/lib/core/buildFullPath.js");
/* harmony import */ var _helpers_isURLSameOrigin_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../helpers/isURLSameOrigin.js */ "./node_modules/axios/lib/helpers/isURLSameOrigin.js");
/* harmony import */ var _defaults_transitional_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../defaults/transitional.js */ "./node_modules/axios/lib/defaults/transitional.js");
/* harmony import */ var _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/AxiosError.js */ "./node_modules/axios/lib/core/AxiosError.js");
/* harmony import */ var _cancel_CanceledError_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../cancel/CanceledError.js */ "./node_modules/axios/lib/cancel/CanceledError.js");
/* harmony import */ var _helpers_parseProtocol_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../helpers/parseProtocol.js */ "./node_modules/axios/lib/helpers/parseProtocol.js");
/* harmony import */ var _platform_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../platform/index.js */ "./node_modules/axios/lib/platform/browser/index.js");
/* harmony import */ var _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/AxiosHeaders.js */ "./node_modules/axios/lib/core/AxiosHeaders.js");
/* harmony import */ var _helpers_speedometer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/speedometer.js */ "./node_modules/axios/lib/helpers/speedometer.js");
















function progressEventReducer(listener, isDownloadStream) {
  let bytesNotified = 0;
  const _speedometer = (0,_helpers_speedometer_js__WEBPACK_IMPORTED_MODULE_0__["default"])(50, 250);

  return e => {
    const loaded = e.loaded;
    const total = e.lengthComputable ? e.total : undefined;
    const progressBytes = loaded - bytesNotified;
    const rate = _speedometer(progressBytes);
    const inRange = loaded <= total;

    bytesNotified = loaded;

    const data = {
      loaded,
      total,
      progress: total ? (loaded / total) : undefined,
      bytes: progressBytes,
      rate: rate ? rate : undefined,
      estimated: rate && total && inRange ? (total - loaded) / rate : undefined,
      event: e
    };

    data[isDownloadStream ? 'download' : 'upload'] = true;

    listener(data);
  };
}

const isXHRAdapterSupported = typeof XMLHttpRequest !== 'undefined';

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isXHRAdapterSupported && function (config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    let requestData = config.data;
    const requestHeaders = _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__["default"].from(config.headers).normalize();
    const responseType = config.responseType;
    let onCanceled;
    function done() {
      if (config.cancelToken) {
        config.cancelToken.unsubscribe(onCanceled);
      }

      if (config.signal) {
        config.signal.removeEventListener('abort', onCanceled);
      }
    }

    if (_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].isFormData(requestData) && (_platform_index_js__WEBPACK_IMPORTED_MODULE_3__["default"].isStandardBrowserEnv || _platform_index_js__WEBPACK_IMPORTED_MODULE_3__["default"].isStandardBrowserWebWorkerEnv)) {
      requestHeaders.setContentType(false); // Let the browser set it
    }

    let request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      const username = config.auth.username || '';
      const password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
      requestHeaders.set('Authorization', 'Basic ' + btoa(username + ':' + password));
    }

    const fullPath = (0,_core_buildFullPath_js__WEBPACK_IMPORTED_MODULE_4__["default"])(config.baseURL, config.url);

    request.open(config.method.toUpperCase(), (0,_helpers_buildURL_js__WEBPACK_IMPORTED_MODULE_5__["default"])(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    function onloadend() {
      if (!request) {
        return;
      }
      // Prepare the response
      const responseHeaders = _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__["default"].from(
        'getAllResponseHeaders' in request && request.getAllResponseHeaders()
      );
      const responseData = !responseType || responseType === 'text' || responseType === 'json' ?
        request.responseText : request.response;
      const response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config,
        request
      };

      (0,_core_settle_js__WEBPACK_IMPORTED_MODULE_6__["default"])(function _resolve(value) {
        resolve(value);
        done();
      }, function _reject(err) {
        reject(err);
        done();
      }, response);

      // Clean up request
      request = null;
    }

    if ('onloadend' in request) {
      // Use onloadend if available
      request.onloadend = onloadend;
    } else {
      // Listen for ready state to emulate onloadend
      request.onreadystatechange = function handleLoad() {
        if (!request || request.readyState !== 4) {
          return;
        }

        // The request errored out and we didn't get a response, this will be
        // handled by onerror instead
        // With one exception: request that using file: protocol, most browsers
        // will return status as 0 even though it's a successful request
        if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
          return;
        }
        // readystate handler is calling before onerror or ontimeout handlers,
        // so we should call onloadend on the next 'tick'
        setTimeout(onloadend);
      };
    }

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_7__["default"]('Request aborted', _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_7__["default"].ECONNABORTED, config, request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_7__["default"]('Network Error', _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_7__["default"].ERR_NETWORK, config, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      let timeoutErrorMessage = config.timeout ? 'timeout of ' + config.timeout + 'ms exceeded' : 'timeout exceeded';
      const transitional = config.transitional || _defaults_transitional_js__WEBPACK_IMPORTED_MODULE_8__["default"];
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_7__["default"](
        timeoutErrorMessage,
        transitional.clarifyTimeoutError ? _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_7__["default"].ETIMEDOUT : _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_7__["default"].ECONNABORTED,
        config,
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (_platform_index_js__WEBPACK_IMPORTED_MODULE_3__["default"].isStandardBrowserEnv) {
      // Add xsrf header
      const xsrfValue = (config.withCredentials || (0,_helpers_isURLSameOrigin_js__WEBPACK_IMPORTED_MODULE_9__["default"])(fullPath))
        && config.xsrfCookieName && _helpers_cookies_js__WEBPACK_IMPORTED_MODULE_10__["default"].read(config.xsrfCookieName);

      if (xsrfValue) {
        requestHeaders.set(config.xsrfHeaderName, xsrfValue);
      }
    }

    // Remove Content-Type if data is undefined
    requestData === undefined && requestHeaders.setContentType(null);

    // Add headers to the request
    if ('setRequestHeader' in request) {
      _utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].forEach(requestHeaders.toJSON(), function setRequestHeader(val, key) {
        request.setRequestHeader(key, val);
      });
    }

    // Add withCredentials to request if needed
    if (!_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (responseType && responseType !== 'json') {
      request.responseType = config.responseType;
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', progressEventReducer(config.onDownloadProgress, true));
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', progressEventReducer(config.onUploadProgress));
    }

    if (config.cancelToken || config.signal) {
      // Handle cancellation
      // eslint-disable-next-line func-names
      onCanceled = cancel => {
        if (!request) {
          return;
        }
        reject(!cancel || cancel.type ? new _cancel_CanceledError_js__WEBPACK_IMPORTED_MODULE_11__["default"](null, config, request) : cancel);
        request.abort();
        request = null;
      };

      config.cancelToken && config.cancelToken.subscribe(onCanceled);
      if (config.signal) {
        config.signal.aborted ? onCanceled() : config.signal.addEventListener('abort', onCanceled);
      }
    }

    const protocol = (0,_helpers_parseProtocol_js__WEBPACK_IMPORTED_MODULE_12__["default"])(fullPath);

    if (protocol && _platform_index_js__WEBPACK_IMPORTED_MODULE_3__["default"].protocols.indexOf(protocol) === -1) {
      reject(new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_7__["default"]('Unsupported protocol ' + protocol + ':', _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_7__["default"].ERR_BAD_REQUEST, config));
      return;
    }


    // Send the request
    request.send(requestData || null);
  });
});


/***/ }),

/***/ "./node_modules/axios/lib/axios.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/axios.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _helpers_bind_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/bind.js */ "./node_modules/axios/lib/helpers/bind.js");
/* harmony import */ var _core_Axios_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/Axios.js */ "./node_modules/axios/lib/core/Axios.js");
/* harmony import */ var _core_mergeConfig_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/mergeConfig.js */ "./node_modules/axios/lib/core/mergeConfig.js");
/* harmony import */ var _defaults_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./defaults/index.js */ "./node_modules/axios/lib/defaults/index.js");
/* harmony import */ var _helpers_formDataToJSON_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./helpers/formDataToJSON.js */ "./node_modules/axios/lib/helpers/formDataToJSON.js");
/* harmony import */ var _cancel_CanceledError_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cancel/CanceledError.js */ "./node_modules/axios/lib/cancel/CanceledError.js");
/* harmony import */ var _cancel_CancelToken_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cancel/CancelToken.js */ "./node_modules/axios/lib/cancel/CancelToken.js");
/* harmony import */ var _cancel_isCancel_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cancel/isCancel.js */ "./node_modules/axios/lib/cancel/isCancel.js");
/* harmony import */ var _env_data_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./env/data.js */ "./node_modules/axios/lib/env/data.js");
/* harmony import */ var _helpers_toFormData_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./helpers/toFormData.js */ "./node_modules/axios/lib/helpers/toFormData.js");
/* harmony import */ var _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./core/AxiosError.js */ "./node_modules/axios/lib/core/AxiosError.js");
/* harmony import */ var _helpers_spread_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./helpers/spread.js */ "./node_modules/axios/lib/helpers/spread.js");
/* harmony import */ var _helpers_isAxiosError_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./helpers/isAxiosError.js */ "./node_modules/axios/lib/helpers/isAxiosError.js");
/* harmony import */ var _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./core/AxiosHeaders.js */ "./node_modules/axios/lib/core/AxiosHeaders.js");
/* harmony import */ var _helpers_HttpStatusCode_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./helpers/HttpStatusCode.js */ "./node_modules/axios/lib/helpers/HttpStatusCode.js");



















/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 *
 * @returns {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  const context = new _core_Axios_js__WEBPACK_IMPORTED_MODULE_0__["default"](defaultConfig);
  const instance = (0,_helpers_bind_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_core_Axios_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.request, context);

  // Copy axios.prototype to instance
  _utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].extend(instance, _core_Axios_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype, context, {allOwnKeys: true});

  // Copy context to instance
  _utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].extend(instance, context, null, {allOwnKeys: true});

  // Factory for creating new instances
  instance.create = function create(instanceConfig) {
    return createInstance((0,_core_mergeConfig_js__WEBPACK_IMPORTED_MODULE_3__["default"])(defaultConfig, instanceConfig));
  };

  return instance;
}

// Create the default instance to be exported
const axios = createInstance(_defaults_index_js__WEBPACK_IMPORTED_MODULE_4__["default"]);

// Expose Axios class to allow class inheritance
axios.Axios = _core_Axios_js__WEBPACK_IMPORTED_MODULE_0__["default"];

// Expose Cancel & CancelToken
axios.CanceledError = _cancel_CanceledError_js__WEBPACK_IMPORTED_MODULE_5__["default"];
axios.CancelToken = _cancel_CancelToken_js__WEBPACK_IMPORTED_MODULE_6__["default"];
axios.isCancel = _cancel_isCancel_js__WEBPACK_IMPORTED_MODULE_7__["default"];
axios.VERSION = _env_data_js__WEBPACK_IMPORTED_MODULE_8__.VERSION;
axios.toFormData = _helpers_toFormData_js__WEBPACK_IMPORTED_MODULE_9__["default"];

// Expose AxiosError class
axios.AxiosError = _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_10__["default"];

// alias for CanceledError for backward compatibility
axios.Cancel = axios.CanceledError;

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};

axios.spread = _helpers_spread_js__WEBPACK_IMPORTED_MODULE_11__["default"];

// Expose isAxiosError
axios.isAxiosError = _helpers_isAxiosError_js__WEBPACK_IMPORTED_MODULE_12__["default"];

// Expose mergeConfig
axios.mergeConfig = _core_mergeConfig_js__WEBPACK_IMPORTED_MODULE_3__["default"];

axios.AxiosHeaders = _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_13__["default"];

axios.formToJSON = thing => (0,_helpers_formDataToJSON_js__WEBPACK_IMPORTED_MODULE_14__["default"])(_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].isHTMLForm(thing) ? new FormData(thing) : thing);

axios.HttpStatusCode = _helpers_HttpStatusCode_js__WEBPACK_IMPORTED_MODULE_15__["default"];

axios.default = axios;

// this module should only have a default export
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (axios);


/***/ }),

/***/ "./node_modules/axios/lib/cancel/CancelToken.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/cancel/CancelToken.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CanceledError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CanceledError.js */ "./node_modules/axios/lib/cancel/CanceledError.js");




/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @param {Function} executor The executor function.
 *
 * @returns {CancelToken}
 */
class CancelToken {
  constructor(executor) {
    if (typeof executor !== 'function') {
      throw new TypeError('executor must be a function.');
    }

    let resolvePromise;

    this.promise = new Promise(function promiseExecutor(resolve) {
      resolvePromise = resolve;
    });

    const token = this;

    // eslint-disable-next-line func-names
    this.promise.then(cancel => {
      if (!token._listeners) return;

      let i = token._listeners.length;

      while (i-- > 0) {
        token._listeners[i](cancel);
      }
      token._listeners = null;
    });

    // eslint-disable-next-line func-names
    this.promise.then = onfulfilled => {
      let _resolve;
      // eslint-disable-next-line func-names
      const promise = new Promise(resolve => {
        token.subscribe(resolve);
        _resolve = resolve;
      }).then(onfulfilled);

      promise.cancel = function reject() {
        token.unsubscribe(_resolve);
      };

      return promise;
    };

    executor(function cancel(message, config, request) {
      if (token.reason) {
        // Cancellation has already been requested
        return;
      }

      token.reason = new _CanceledError_js__WEBPACK_IMPORTED_MODULE_0__["default"](message, config, request);
      resolvePromise(token.reason);
    });
  }

  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason) {
      throw this.reason;
    }
  }

  /**
   * Subscribe to the cancel signal
   */

  subscribe(listener) {
    if (this.reason) {
      listener(this.reason);
      return;
    }

    if (this._listeners) {
      this._listeners.push(listener);
    } else {
      this._listeners = [listener];
    }
  }

  /**
   * Unsubscribe from the cancel signal
   */

  unsubscribe(listener) {
    if (!this._listeners) {
      return;
    }
    const index = this._listeners.indexOf(listener);
    if (index !== -1) {
      this._listeners.splice(index, 1);
    }
  }

  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let cancel;
    const token = new CancelToken(function executor(c) {
      cancel = c;
    });
    return {
      token,
      cancel
    };
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CancelToken);


/***/ }),

/***/ "./node_modules/axios/lib/cancel/CanceledError.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/cancel/CanceledError.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/AxiosError.js */ "./node_modules/axios/lib/core/AxiosError.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");





/**
 * A `CanceledError` is an object that is thrown when an operation is canceled.
 *
 * @param {string=} message The message.
 * @param {Object=} config The config.
 * @param {Object=} request The request.
 *
 * @returns {CanceledError} The created error.
 */
function CanceledError(message, config, request) {
  // eslint-disable-next-line no-eq-null,eqeqeq
  _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_0__["default"].call(this, message == null ? 'canceled' : message, _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_0__["default"].ERR_CANCELED, config, request);
  this.name = 'CanceledError';
}

_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].inherits(CanceledError, _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_0__["default"], {
  __CANCEL__: true
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CanceledError);


/***/ }),

/***/ "./node_modules/axios/lib/cancel/isCancel.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/cancel/isCancel.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isCancel)
/* harmony export */ });


function isCancel(value) {
  return !!(value && value.__CANCEL__);
}


/***/ }),

/***/ "./node_modules/axios/lib/core/Axios.js":
/*!**********************************************!*\
  !*** ./node_modules/axios/lib/core/Axios.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _helpers_buildURL_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../helpers/buildURL.js */ "./node_modules/axios/lib/helpers/buildURL.js");
/* harmony import */ var _InterceptorManager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InterceptorManager.js */ "./node_modules/axios/lib/core/InterceptorManager.js");
/* harmony import */ var _dispatchRequest_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dispatchRequest.js */ "./node_modules/axios/lib/core/dispatchRequest.js");
/* harmony import */ var _mergeConfig_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mergeConfig.js */ "./node_modules/axios/lib/core/mergeConfig.js");
/* harmony import */ var _buildFullPath_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./buildFullPath.js */ "./node_modules/axios/lib/core/buildFullPath.js");
/* harmony import */ var _helpers_validator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/validator.js */ "./node_modules/axios/lib/helpers/validator.js");
/* harmony import */ var _AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AxiosHeaders.js */ "./node_modules/axios/lib/core/AxiosHeaders.js");











const validators = _helpers_validator_js__WEBPACK_IMPORTED_MODULE_0__["default"].validators;

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 *
 * @return {Axios} A new instance of Axios
 */
class Axios {
  constructor(instanceConfig) {
    this.defaults = instanceConfig;
    this.interceptors = {
      request: new _InterceptorManager_js__WEBPACK_IMPORTED_MODULE_1__["default"](),
      response: new _InterceptorManager_js__WEBPACK_IMPORTED_MODULE_1__["default"]()
    };
  }

  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  request(configOrUrl, config) {
    /*eslint no-param-reassign:0*/
    // Allow for axios('example/url'[, config]) a la fetch API
    if (typeof configOrUrl === 'string') {
      config = config || {};
      config.url = configOrUrl;
    } else {
      config = configOrUrl || {};
    }

    config = (0,_mergeConfig_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this.defaults, config);

    const {transitional, paramsSerializer, headers} = config;

    if (transitional !== undefined) {
      _helpers_validator_js__WEBPACK_IMPORTED_MODULE_0__["default"].assertOptions(transitional, {
        silentJSONParsing: validators.transitional(validators.boolean),
        forcedJSONParsing: validators.transitional(validators.boolean),
        clarifyTimeoutError: validators.transitional(validators.boolean)
      }, false);
    }

    if (paramsSerializer !== undefined) {
      _helpers_validator_js__WEBPACK_IMPORTED_MODULE_0__["default"].assertOptions(paramsSerializer, {
        encode: validators.function,
        serialize: validators.function
      }, true);
    }

    // Set config.method
    config.method = (config.method || this.defaults.method || 'get').toLowerCase();

    let contextHeaders;

    // Flatten headers
    contextHeaders = headers && _utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].merge(
      headers.common,
      headers[config.method]
    );

    contextHeaders && _utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].forEach(
      ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
      (method) => {
        delete headers[method];
      }
    );

    config.headers = _AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_4__["default"].concat(contextHeaders, headers);

    // filter out skipped interceptors
    const requestInterceptorChain = [];
    let synchronousRequestInterceptors = true;
    this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
      if (typeof interceptor.runWhen === 'function' && interceptor.runWhen(config) === false) {
        return;
      }

      synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;

      requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
    });

    const responseInterceptorChain = [];
    this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
      responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
    });

    let promise;
    let i = 0;
    let len;

    if (!synchronousRequestInterceptors) {
      const chain = [_dispatchRequest_js__WEBPACK_IMPORTED_MODULE_5__["default"].bind(this), undefined];
      chain.unshift.apply(chain, requestInterceptorChain);
      chain.push.apply(chain, responseInterceptorChain);
      len = chain.length;

      promise = Promise.resolve(config);

      while (i < len) {
        promise = promise.then(chain[i++], chain[i++]);
      }

      return promise;
    }

    len = requestInterceptorChain.length;

    let newConfig = config;

    i = 0;

    while (i < len) {
      const onFulfilled = requestInterceptorChain[i++];
      const onRejected = requestInterceptorChain[i++];
      try {
        newConfig = onFulfilled(newConfig);
      } catch (error) {
        onRejected.call(this, error);
        break;
      }
    }

    try {
      promise = _dispatchRequest_js__WEBPACK_IMPORTED_MODULE_5__["default"].call(this, newConfig);
    } catch (error) {
      return Promise.reject(error);
    }

    i = 0;
    len = responseInterceptorChain.length;

    while (i < len) {
      promise = promise.then(responseInterceptorChain[i++], responseInterceptorChain[i++]);
    }

    return promise;
  }

  getUri(config) {
    config = (0,_mergeConfig_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this.defaults, config);
    const fullPath = (0,_buildFullPath_js__WEBPACK_IMPORTED_MODULE_6__["default"])(config.baseURL, config.url);
    return (0,_helpers_buildURL_js__WEBPACK_IMPORTED_MODULE_7__["default"])(fullPath, config.params, config.paramsSerializer);
  }
}

// Provide aliases for supported request methods
_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request((0,_mergeConfig_js__WEBPACK_IMPORTED_MODULE_2__["default"])(config || {}, {
      method,
      url,
      data: (config || {}).data
    }));
  };
});

_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/

  function generateHTTPMethod(isForm) {
    return function httpMethod(url, data, config) {
      return this.request((0,_mergeConfig_js__WEBPACK_IMPORTED_MODULE_2__["default"])(config || {}, {
        method,
        headers: isForm ? {
          'Content-Type': 'multipart/form-data'
        } : {},
        url,
        data
      }));
    };
  }

  Axios.prototype[method] = generateHTTPMethod();

  Axios.prototype[method + 'Form'] = generateHTTPMethod(true);
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Axios);


/***/ }),

/***/ "./node_modules/axios/lib/core/AxiosError.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/core/AxiosError.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");




/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [config] The config.
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 *
 * @returns {Error} The created error.
 */
function AxiosError(message, code, config, request, response) {
  Error.call(this);

  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, this.constructor);
  } else {
    this.stack = (new Error()).stack;
  }

  this.message = message;
  this.name = 'AxiosError';
  code && (this.code = code);
  config && (this.config = config);
  request && (this.request = request);
  response && (this.response = response);
}

_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].inherits(AxiosError, Error, {
  toJSON: function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});

const prototype = AxiosError.prototype;
const descriptors = {};

[
  'ERR_BAD_OPTION_VALUE',
  'ERR_BAD_OPTION',
  'ECONNABORTED',
  'ETIMEDOUT',
  'ERR_NETWORK',
  'ERR_FR_TOO_MANY_REDIRECTS',
  'ERR_DEPRECATED',
  'ERR_BAD_RESPONSE',
  'ERR_BAD_REQUEST',
  'ERR_CANCELED',
  'ERR_NOT_SUPPORT',
  'ERR_INVALID_URL'
// eslint-disable-next-line func-names
].forEach(code => {
  descriptors[code] = {value: code};
});

Object.defineProperties(AxiosError, descriptors);
Object.defineProperty(prototype, 'isAxiosError', {value: true});

// eslint-disable-next-line func-names
AxiosError.from = (error, code, config, request, response, customProps) => {
  const axiosError = Object.create(prototype);

  _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].toFlatObject(error, axiosError, function filter(obj) {
    return obj !== Error.prototype;
  }, prop => {
    return prop !== 'isAxiosError';
  });

  AxiosError.call(axiosError, error.message, code, config, request, response);

  axiosError.cause = error;

  axiosError.name = error.name;

  customProps && Object.assign(axiosError, customProps);

  return axiosError;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AxiosError);


/***/ }),

/***/ "./node_modules/axios/lib/core/AxiosHeaders.js":
/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/core/AxiosHeaders.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _helpers_parseHeaders_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/parseHeaders.js */ "./node_modules/axios/lib/helpers/parseHeaders.js");





const $internals = Symbol('internals');

function normalizeHeader(header) {
  return header && String(header).trim().toLowerCase();
}

function normalizeValue(value) {
  if (value === false || value == null) {
    return value;
  }

  return _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(value) ? value.map(normalizeValue) : String(value);
}

function parseTokens(str) {
  const tokens = Object.create(null);
  const tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let match;

  while ((match = tokensRE.exec(str))) {
    tokens[match[1]] = match[2];
  }

  return tokens;
}

function isValidHeaderName(str) {
  return /^[-_a-zA-Z]+$/.test(str.trim());
}

function matchHeaderValue(context, value, header, filter) {
  if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFunction(filter)) {
    return filter.call(this, value, header);
  }

  if (!_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isString(value)) return;

  if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isString(filter)) {
    return value.indexOf(filter) !== -1;
  }

  if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isRegExp(filter)) {
    return filter.test(value);
  }
}

function formatHeader(header) {
  return header.trim()
    .toLowerCase().replace(/([a-z\d])(\w*)/g, (w, char, str) => {
      return char.toUpperCase() + str;
    });
}

function buildAccessors(obj, header) {
  const accessorName = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].toCamelCase(' ' + header);

  ['get', 'set', 'has'].forEach(methodName => {
    Object.defineProperty(obj, methodName + accessorName, {
      value: function(arg1, arg2, arg3) {
        return this[methodName].call(this, header, arg1, arg2, arg3);
      },
      configurable: true
    });
  });
}

class AxiosHeaders {
  constructor(headers) {
    headers && this.set(headers);
  }

  set(header, valueOrRewrite, rewrite) {
    const self = this;

    function setHeader(_value, _header, _rewrite) {
      const lHeader = normalizeHeader(_header);

      if (!lHeader) {
        throw new Error('header name must be a non-empty string');
      }

      const key = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].findKey(self, lHeader);

      if(!key || self[key] === undefined || _rewrite === true || (_rewrite === undefined && self[key] !== false)) {
        self[key || _header] = normalizeValue(_value);
      }
    }

    const setHeaders = (headers, _rewrite) =>
      _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].forEach(headers, (_value, _header) => setHeader(_value, _header, _rewrite));

    if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isPlainObject(header) || header instanceof this.constructor) {
      setHeaders(header, valueOrRewrite)
    } else if(_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isString(header) && (header = header.trim()) && !isValidHeaderName(header)) {
      setHeaders((0,_helpers_parseHeaders_js__WEBPACK_IMPORTED_MODULE_1__["default"])(header), valueOrRewrite);
    } else {
      header != null && setHeader(valueOrRewrite, header, rewrite);
    }

    return this;
  }

  get(header, parser) {
    header = normalizeHeader(header);

    if (header) {
      const key = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].findKey(this, header);

      if (key) {
        const value = this[key];

        if (!parser) {
          return value;
        }

        if (parser === true) {
          return parseTokens(value);
        }

        if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFunction(parser)) {
          return parser.call(this, value, key);
        }

        if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isRegExp(parser)) {
          return parser.exec(value);
        }

        throw new TypeError('parser must be boolean|regexp|function');
      }
    }
  }

  has(header, matcher) {
    header = normalizeHeader(header);

    if (header) {
      const key = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].findKey(this, header);

      return !!(key && this[key] !== undefined && (!matcher || matchHeaderValue(this, this[key], key, matcher)));
    }

    return false;
  }

  delete(header, matcher) {
    const self = this;
    let deleted = false;

    function deleteHeader(_header) {
      _header = normalizeHeader(_header);

      if (_header) {
        const key = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].findKey(self, _header);

        if (key && (!matcher || matchHeaderValue(self, self[key], key, matcher))) {
          delete self[key];

          deleted = true;
        }
      }
    }

    if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(header)) {
      header.forEach(deleteHeader);
    } else {
      deleteHeader(header);
    }

    return deleted;
  }

  clear(matcher) {
    const keys = Object.keys(this);
    let i = keys.length;
    let deleted = false;

    while (i--) {
      const key = keys[i];
      if(!matcher || matchHeaderValue(this, this[key], key, matcher)) {
        delete this[key];
        deleted = true;
      }
    }

    return deleted;
  }

  normalize(format) {
    const self = this;
    const headers = {};

    _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].forEach(this, (value, header) => {
      const key = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].findKey(headers, header);

      if (key) {
        self[key] = normalizeValue(value);
        delete self[header];
        return;
      }

      const normalized = format ? formatHeader(header) : String(header).trim();

      if (normalized !== header) {
        delete self[header];
      }

      self[normalized] = normalizeValue(value);

      headers[normalized] = true;
    });

    return this;
  }

  concat(...targets) {
    return this.constructor.concat(this, ...targets);
  }

  toJSON(asStrings) {
    const obj = Object.create(null);

    _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].forEach(this, (value, header) => {
      value != null && value !== false && (obj[header] = asStrings && _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(value) ? value.join(', ') : value);
    });

    return obj;
  }

  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }

  toString() {
    return Object.entries(this.toJSON()).map(([header, value]) => header + ': ' + value).join('\n');
  }

  get [Symbol.toStringTag]() {
    return 'AxiosHeaders';
  }

  static from(thing) {
    return thing instanceof this ? thing : new this(thing);
  }

  static concat(first, ...targets) {
    const computed = new this(first);

    targets.forEach((target) => computed.set(target));

    return computed;
  }

  static accessor(header) {
    const internals = this[$internals] = (this[$internals] = {
      accessors: {}
    });

    const accessors = internals.accessors;
    const prototype = this.prototype;

    function defineAccessor(_header) {
      const lHeader = normalizeHeader(_header);

      if (!accessors[lHeader]) {
        buildAccessors(prototype, _header);
        accessors[lHeader] = true;
      }
    }

    _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header);

    return this;
  }
}

AxiosHeaders.accessor(['Content-Type', 'Content-Length', 'Accept', 'Accept-Encoding', 'User-Agent', 'Authorization']);

_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].freezeMethods(AxiosHeaders.prototype);
_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].freezeMethods(AxiosHeaders);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AxiosHeaders);


/***/ }),

/***/ "./node_modules/axios/lib/core/InterceptorManager.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/core/InterceptorManager.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../utils.js */ "./node_modules/axios/lib/utils.js");




class InterceptorManager {
  constructor() {
    this.handlers = [];
  }

  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(fulfilled, rejected, options) {
    this.handlers.push({
      fulfilled,
      rejected,
      synchronous: options ? options.synchronous : false,
      runWhen: options ? options.runWhen : null
    });
    return this.handlers.length - 1;
  }

  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(id) {
    if (this.handlers[id]) {
      this.handlers[id] = null;
    }
  }

  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    if (this.handlers) {
      this.handlers = [];
    }
  }

  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(fn) {
    _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].forEach(this.handlers, function forEachHandler(h) {
      if (h !== null) {
        fn(h);
      }
    });
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InterceptorManager);


/***/ }),

/***/ "./node_modules/axios/lib/core/buildFullPath.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/buildFullPath.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildFullPath)
/* harmony export */ });
/* harmony import */ var _helpers_isAbsoluteURL_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/isAbsoluteURL.js */ "./node_modules/axios/lib/helpers/isAbsoluteURL.js");
/* harmony import */ var _helpers_combineURLs_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/combineURLs.js */ "./node_modules/axios/lib/helpers/combineURLs.js");





/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 *
 * @returns {string} The combined full path
 */
function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !(0,_helpers_isAbsoluteURL_js__WEBPACK_IMPORTED_MODULE_0__["default"])(requestedURL)) {
    return (0,_helpers_combineURLs_js__WEBPACK_IMPORTED_MODULE_1__["default"])(baseURL, requestedURL);
  }
  return requestedURL;
}


/***/ }),

/***/ "./node_modules/axios/lib/core/dispatchRequest.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/core/dispatchRequest.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ dispatchRequest)
/* harmony export */ });
/* harmony import */ var _transformData_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transformData.js */ "./node_modules/axios/lib/core/transformData.js");
/* harmony import */ var _cancel_isCancel_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../cancel/isCancel.js */ "./node_modules/axios/lib/cancel/isCancel.js");
/* harmony import */ var _defaults_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../defaults/index.js */ "./node_modules/axios/lib/defaults/index.js");
/* harmony import */ var _cancel_CanceledError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cancel/CanceledError.js */ "./node_modules/axios/lib/cancel/CanceledError.js");
/* harmony import */ var _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/AxiosHeaders.js */ "./node_modules/axios/lib/core/AxiosHeaders.js");
/* harmony import */ var _adapters_adapters_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../adapters/adapters.js */ "./node_modules/axios/lib/adapters/adapters.js");









/**
 * Throws a `CanceledError` if cancellation has been requested.
 *
 * @param {Object} config The config that is to be used for the request
 *
 * @returns {void}
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }

  if (config.signal && config.signal.aborted) {
    throw new _cancel_CanceledError_js__WEBPACK_IMPORTED_MODULE_0__["default"](null, config);
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 *
 * @returns {Promise} The Promise to be fulfilled
 */
function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  config.headers = _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__["default"].from(config.headers);

  // Transform request data
  config.data = _transformData_js__WEBPACK_IMPORTED_MODULE_2__["default"].call(
    config,
    config.transformRequest
  );

  if (['post', 'put', 'patch'].indexOf(config.method) !== -1) {
    config.headers.setContentType('application/x-www-form-urlencoded', false);
  }

  const adapter = _adapters_adapters_js__WEBPACK_IMPORTED_MODULE_3__["default"].getAdapter(config.adapter || _defaults_index_js__WEBPACK_IMPORTED_MODULE_4__["default"].adapter);

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = _transformData_js__WEBPACK_IMPORTED_MODULE_2__["default"].call(
      config,
      config.transformResponse,
      response
    );

    response.headers = _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__["default"].from(response.headers);

    return response;
  }, function onAdapterRejection(reason) {
    if (!(0,_cancel_isCancel_js__WEBPACK_IMPORTED_MODULE_5__["default"])(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = _transformData_js__WEBPACK_IMPORTED_MODULE_2__["default"].call(
          config,
          config.transformResponse,
          reason.response
        );
        reason.response.headers = _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__["default"].from(reason.response.headers);
      }
    }

    return Promise.reject(reason);
  });
}


/***/ }),

/***/ "./node_modules/axios/lib/core/mergeConfig.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/mergeConfig.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ mergeConfig)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AxiosHeaders.js */ "./node_modules/axios/lib/core/AxiosHeaders.js");





const headersToObject = (thing) => thing instanceof _AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? thing.toJSON() : thing;

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 *
 * @returns {Object} New object resulting from merging config2 to config1
 */
function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  const config = {};

  function getMergedValue(target, source, caseless) {
    if (_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isPlainObject(target) && _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isPlainObject(source)) {
      return _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].merge.call({caseless}, target, source);
    } else if (_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isPlainObject(source)) {
      return _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].merge({}, source);
    } else if (_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isArray(source)) {
      return source.slice();
    }
    return source;
  }

  // eslint-disable-next-line consistent-return
  function mergeDeepProperties(a, b, caseless) {
    if (!_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isUndefined(b)) {
      return getMergedValue(a, b, caseless);
    } else if (!_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isUndefined(a)) {
      return getMergedValue(undefined, a, caseless);
    }
  }

  // eslint-disable-next-line consistent-return
  function valueFromConfig2(a, b) {
    if (!_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isUndefined(b)) {
      return getMergedValue(undefined, b);
    }
  }

  // eslint-disable-next-line consistent-return
  function defaultToConfig2(a, b) {
    if (!_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isUndefined(b)) {
      return getMergedValue(undefined, b);
    } else if (!_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isUndefined(a)) {
      return getMergedValue(undefined, a);
    }
  }

  // eslint-disable-next-line consistent-return
  function mergeDirectKeys(a, b, prop) {
    if (prop in config2) {
      return getMergedValue(a, b);
    } else if (prop in config1) {
      return getMergedValue(undefined, a);
    }
  }

  const mergeMap = {
    url: valueFromConfig2,
    method: valueFromConfig2,
    data: valueFromConfig2,
    baseURL: defaultToConfig2,
    transformRequest: defaultToConfig2,
    transformResponse: defaultToConfig2,
    paramsSerializer: defaultToConfig2,
    timeout: defaultToConfig2,
    timeoutMessage: defaultToConfig2,
    withCredentials: defaultToConfig2,
    adapter: defaultToConfig2,
    responseType: defaultToConfig2,
    xsrfCookieName: defaultToConfig2,
    xsrfHeaderName: defaultToConfig2,
    onUploadProgress: defaultToConfig2,
    onDownloadProgress: defaultToConfig2,
    decompress: defaultToConfig2,
    maxContentLength: defaultToConfig2,
    maxBodyLength: defaultToConfig2,
    beforeRedirect: defaultToConfig2,
    transport: defaultToConfig2,
    httpAgent: defaultToConfig2,
    httpsAgent: defaultToConfig2,
    cancelToken: defaultToConfig2,
    socketPath: defaultToConfig2,
    responseEncoding: defaultToConfig2,
    validateStatus: mergeDirectKeys,
    headers: (a, b) => mergeDeepProperties(headersToObject(a), headersToObject(b), true)
  };

  _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].forEach(Object.keys(config1).concat(Object.keys(config2)), function computeConfigValue(prop) {
    const merge = mergeMap[prop] || mergeDeepProperties;
    const configValue = merge(config1[prop], config2[prop], prop);
    (_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isUndefined(configValue) && merge !== mergeDirectKeys) || (config[prop] = configValue);
  });

  return config;
}


/***/ }),

/***/ "./node_modules/axios/lib/core/settle.js":
/*!***********************************************!*\
  !*** ./node_modules/axios/lib/core/settle.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ settle)
/* harmony export */ });
/* harmony import */ var _AxiosError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AxiosError.js */ "./node_modules/axios/lib/core/AxiosError.js");




/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 *
 * @returns {object} The response.
 */
function settle(resolve, reject, response) {
  const validateStatus = response.config.validateStatus;
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(new _AxiosError_js__WEBPACK_IMPORTED_MODULE_0__["default"](
      'Request failed with status code ' + response.status,
      [_AxiosError_js__WEBPACK_IMPORTED_MODULE_0__["default"].ERR_BAD_REQUEST, _AxiosError_js__WEBPACK_IMPORTED_MODULE_0__["default"].ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4],
      response.config,
      response.request,
      response
    ));
  }
}


/***/ }),

/***/ "./node_modules/axios/lib/core/transformData.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/transformData.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ transformData)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _defaults_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../defaults/index.js */ "./node_modules/axios/lib/defaults/index.js");
/* harmony import */ var _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/AxiosHeaders.js */ "./node_modules/axios/lib/core/AxiosHeaders.js");






/**
 * Transform the data for a request or a response
 *
 * @param {Array|Function} fns A single function or Array of functions
 * @param {?Object} response The response object
 *
 * @returns {*} The resulting transformed data
 */
function transformData(fns, response) {
  const config = this || _defaults_index_js__WEBPACK_IMPORTED_MODULE_0__["default"];
  const context = response || config;
  const headers = _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__["default"].from(context.headers);
  let data = context.data;

  _utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].forEach(fns, function transform(fn) {
    data = fn.call(config, data, headers.normalize(), response ? response.status : undefined);
  });

  headers.normalize();

  return data;
}


/***/ }),

/***/ "./node_modules/axios/lib/defaults/index.js":
/*!**************************************************!*\
  !*** ./node_modules/axios/lib/defaults/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/AxiosError.js */ "./node_modules/axios/lib/core/AxiosError.js");
/* harmony import */ var _transitional_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transitional.js */ "./node_modules/axios/lib/defaults/transitional.js");
/* harmony import */ var _helpers_toFormData_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/toFormData.js */ "./node_modules/axios/lib/helpers/toFormData.js");
/* harmony import */ var _helpers_toURLEncodedForm_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/toURLEncodedForm.js */ "./node_modules/axios/lib/helpers/toURLEncodedForm.js");
/* harmony import */ var _platform_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../platform/index.js */ "./node_modules/axios/lib/platform/browser/index.js");
/* harmony import */ var _helpers_formDataToJSON_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/formDataToJSON.js */ "./node_modules/axios/lib/helpers/formDataToJSON.js");










const DEFAULT_CONTENT_TYPE = {
  'Content-Type': undefined
};

/**
 * It takes a string, tries to parse it, and if it fails, it returns the stringified version
 * of the input
 *
 * @param {any} rawValue - The value to be stringified.
 * @param {Function} parser - A function that parses a string into a JavaScript object.
 * @param {Function} encoder - A function that takes a value and returns a string.
 *
 * @returns {string} A stringified version of the rawValue.
 */
function stringifySafely(rawValue, parser, encoder) {
  if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isString(rawValue)) {
    try {
      (parser || JSON.parse)(rawValue);
      return _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].trim(rawValue);
    } catch (e) {
      if (e.name !== 'SyntaxError') {
        throw e;
      }
    }
  }

  return (encoder || JSON.stringify)(rawValue);
}

const defaults = {

  transitional: _transitional_js__WEBPACK_IMPORTED_MODULE_1__["default"],

  adapter: ['xhr', 'http'],

  transformRequest: [function transformRequest(data, headers) {
    const contentType = headers.getContentType() || '';
    const hasJSONContentType = contentType.indexOf('application/json') > -1;
    const isObjectPayload = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isObject(data);

    if (isObjectPayload && _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isHTMLForm(data)) {
      data = new FormData(data);
    }

    const isFormData = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFormData(data);

    if (isFormData) {
      if (!hasJSONContentType) {
        return data;
      }
      return hasJSONContentType ? JSON.stringify((0,_helpers_formDataToJSON_js__WEBPACK_IMPORTED_MODULE_2__["default"])(data)) : data;
    }

    if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArrayBuffer(data) ||
      _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isBuffer(data) ||
      _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isStream(data) ||
      _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFile(data) ||
      _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isBlob(data)
    ) {
      return data;
    }
    if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArrayBufferView(data)) {
      return data.buffer;
    }
    if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isURLSearchParams(data)) {
      headers.setContentType('application/x-www-form-urlencoded;charset=utf-8', false);
      return data.toString();
    }

    let isFileList;

    if (isObjectPayload) {
      if (contentType.indexOf('application/x-www-form-urlencoded') > -1) {
        return (0,_helpers_toURLEncodedForm_js__WEBPACK_IMPORTED_MODULE_3__["default"])(data, this.formSerializer).toString();
      }

      if ((isFileList = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFileList(data)) || contentType.indexOf('multipart/form-data') > -1) {
        const _FormData = this.env && this.env.FormData;

        return (0,_helpers_toFormData_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
          isFileList ? {'files[]': data} : data,
          _FormData && new _FormData(),
          this.formSerializer
        );
      }
    }

    if (isObjectPayload || hasJSONContentType ) {
      headers.setContentType('application/json', false);
      return stringifySafely(data);
    }

    return data;
  }],

  transformResponse: [function transformResponse(data) {
    const transitional = this.transitional || defaults.transitional;
    const forcedJSONParsing = transitional && transitional.forcedJSONParsing;
    const JSONRequested = this.responseType === 'json';

    if (data && _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isString(data) && ((forcedJSONParsing && !this.responseType) || JSONRequested)) {
      const silentJSONParsing = transitional && transitional.silentJSONParsing;
      const strictJSONParsing = !silentJSONParsing && JSONRequested;

      try {
        return JSON.parse(data);
      } catch (e) {
        if (strictJSONParsing) {
          if (e.name === 'SyntaxError') {
            throw _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_5__["default"].from(e, _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_5__["default"].ERR_BAD_RESPONSE, this, null, this.response);
          }
          throw e;
        }
      }
    }

    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,
  maxBodyLength: -1,

  env: {
    FormData: _platform_index_js__WEBPACK_IMPORTED_MODULE_6__["default"].classes.FormData,
    Blob: _platform_index_js__WEBPACK_IMPORTED_MODULE_6__["default"].classes.Blob
  },

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  },

  headers: {
    common: {
      'Accept': 'application/json, text/plain, */*'
    }
  }
};

_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].merge(DEFAULT_CONTENT_TYPE);
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (defaults);


/***/ }),

/***/ "./node_modules/axios/lib/defaults/transitional.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/defaults/transitional.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  silentJSONParsing: true,
  forcedJSONParsing: true,
  clarifyTimeoutError: false
});


/***/ }),

/***/ "./node_modules/axios/lib/env/data.js":
/*!********************************************!*\
  !*** ./node_modules/axios/lib/env/data.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VERSION": () => (/* binding */ VERSION)
/* harmony export */ });
const VERSION = "1.3.2";

/***/ }),

/***/ "./node_modules/axios/lib/helpers/AxiosURLSearchParams.js":
/*!****************************************************************!*\
  !*** ./node_modules/axios/lib/helpers/AxiosURLSearchParams.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _toFormData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toFormData.js */ "./node_modules/axios/lib/helpers/toFormData.js");




/**
 * It encodes a string by replacing all characters that are not in the unreserved set with
 * their percent-encoded equivalents
 *
 * @param {string} str - The string to encode.
 *
 * @returns {string} The encoded string.
 */
function encode(str) {
  const charMap = {
    '!': '%21',
    "'": '%27',
    '(': '%28',
    ')': '%29',
    '~': '%7E',
    '%20': '+',
    '%00': '\x00'
  };
  return encodeURIComponent(str).replace(/[!'()~]|%20|%00/g, function replacer(match) {
    return charMap[match];
  });
}

/**
 * It takes a params object and converts it to a FormData object
 *
 * @param {Object<string, any>} params - The parameters to be converted to a FormData object.
 * @param {Object<string, any>} options - The options object passed to the Axios constructor.
 *
 * @returns {void}
 */
function AxiosURLSearchParams(params, options) {
  this._pairs = [];

  params && (0,_toFormData_js__WEBPACK_IMPORTED_MODULE_0__["default"])(params, this, options);
}

const prototype = AxiosURLSearchParams.prototype;

prototype.append = function append(name, value) {
  this._pairs.push([name, value]);
};

prototype.toString = function toString(encoder) {
  const _encode = encoder ? function(value) {
    return encoder.call(this, value, encode);
  } : encode;

  return this._pairs.map(function each(pair) {
    return _encode(pair[0]) + '=' + _encode(pair[1]);
  }, '').join('&');
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AxiosURLSearchParams);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/HttpStatusCode.js":
/*!**********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/HttpStatusCode.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const HttpStatusCode = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};

Object.entries(HttpStatusCode).forEach(([key, value]) => {
  HttpStatusCode[value] = key;
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HttpStatusCode);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/bind.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/bind.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ bind)
/* harmony export */ });


function bind(fn, thisArg) {
  return function wrap() {
    return fn.apply(thisArg, arguments);
  };
}


/***/ }),

/***/ "./node_modules/axios/lib/helpers/buildURL.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/buildURL.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildURL)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _helpers_AxiosURLSearchParams_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/AxiosURLSearchParams.js */ "./node_modules/axios/lib/helpers/AxiosURLSearchParams.js");





/**
 * It replaces all instances of the characters `:`, `$`, `,`, `+`, `[`, and `]` with their
 * URI encoded counterparts
 *
 * @param {string} val The value to be encoded.
 *
 * @returns {string} The encoded value.
 */
function encode(val) {
  return encodeURIComponent(val).
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @param {?object} options
 *
 * @returns {string} The formatted url
 */
function buildURL(url, params, options) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }
  
  const _encode = options && options.encode || encode;

  const serializeFn = options && options.serialize;

  let serializedParams;

  if (serializeFn) {
    serializedParams = serializeFn(params, options);
  } else {
    serializedParams = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isURLSearchParams(params) ?
      params.toString() :
      new _helpers_AxiosURLSearchParams_js__WEBPACK_IMPORTED_MODULE_1__["default"](params, options).toString(_encode);
  }

  if (serializedParams) {
    const hashmarkIndex = url.indexOf("#");

    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
}


/***/ }),

/***/ "./node_modules/axios/lib/helpers/combineURLs.js":
/*!*******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/combineURLs.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ combineURLs)
/* harmony export */ });


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 *
 * @returns {string} The combined URL
 */
function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
}


/***/ }),

/***/ "./node_modules/axios/lib/helpers/cookies.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/helpers/cookies.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _platform_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../platform/index.js */ "./node_modules/axios/lib/platform/browser/index.js");





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_platform_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].isStandardBrowserEnv ?

// Standard browser envs support document.cookie
  (function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        const cookie = [];
        cookie.push(name + '=' + encodeURIComponent(value));

        if (_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isNumber(expires)) {
          cookie.push('expires=' + new Date(expires).toGMTString());
        }

        if (_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isString(path)) {
          cookie.push('path=' + path);
        }

        if (_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isString(domain)) {
          cookie.push('domain=' + domain);
        }

        if (secure === true) {
          cookie.push('secure');
        }

        document.cookie = cookie.join('; ');
      },

      read: function read(name) {
        const match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
        return (match ? decodeURIComponent(match[3]) : null);
      },

      remove: function remove(name) {
        this.write(name, '', Date.now() - 86400000);
      }
    };
  })() :

// Non standard browser env (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return {
      write: function write() {},
      read: function read() { return null; },
      remove: function remove() {}
    };
  })());


/***/ }),

/***/ "./node_modules/axios/lib/helpers/formDataToJSON.js":
/*!**********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/formDataToJSON.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");




/**
 * It takes a string like `foo[x][y][z]` and returns an array like `['foo', 'x', 'y', 'z']
 *
 * @param {string} name - The name of the property to get.
 *
 * @returns An array of strings.
 */
function parsePropPath(name) {
  // foo[x][y][z]
  // foo.x.y.z
  // foo-x-y-z
  // foo x y z
  return _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].matchAll(/\w+|\[(\w*)]/g, name).map(match => {
    return match[0] === '[]' ? '' : match[1] || match[0];
  });
}

/**
 * Convert an array to an object.
 *
 * @param {Array<any>} arr - The array to convert to an object.
 *
 * @returns An object with the same keys and values as the array.
 */
function arrayToObject(arr) {
  const obj = {};
  const keys = Object.keys(arr);
  let i;
  const len = keys.length;
  let key;
  for (i = 0; i < len; i++) {
    key = keys[i];
    obj[key] = arr[key];
  }
  return obj;
}

/**
 * It takes a FormData object and returns a JavaScript object
 *
 * @param {string} formData The FormData object to convert to JSON.
 *
 * @returns {Object<string, any> | null} The converted object.
 */
function formDataToJSON(formData) {
  function buildPath(path, value, target, index) {
    let name = path[index++];
    const isNumericKey = Number.isFinite(+name);
    const isLast = index >= path.length;
    name = !name && _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(target) ? target.length : name;

    if (isLast) {
      if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].hasOwnProp(target, name)) {
        target[name] = [target[name], value];
      } else {
        target[name] = value;
      }

      return !isNumericKey;
    }

    if (!target[name] || !_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isObject(target[name])) {
      target[name] = [];
    }

    const result = buildPath(path, value, target[name], index);

    if (result && _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(target[name])) {
      target[name] = arrayToObject(target[name]);
    }

    return !isNumericKey;
  }

  if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFormData(formData) && _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFunction(formData.entries)) {
    const obj = {};

    _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].forEachEntry(formData, (name, value) => {
      buildPath(parsePropPath(name), value, obj, 0);
    });

    return obj;
  }

  return null;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formDataToJSON);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAbsoluteURL.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isAbsoluteURL)
/* harmony export */ });


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 *
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
}


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAxiosError.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAxiosError.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isAxiosError)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../utils.js */ "./node_modules/axios/lib/utils.js");




/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 *
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */
function isAxiosError(payload) {
  return _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isObject(payload) && (payload.isAxiosError === true);
}


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isURLSameOrigin.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _platform_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../platform/index.js */ "./node_modules/axios/lib/platform/browser/index.js");





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_platform_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].isStandardBrowserEnv ?

// Standard browser envs have full support of the APIs needed to test
// whether the request URL is of the same origin as current location.
  (function standardBrowserEnv() {
    const msie = /(msie|trident)/i.test(navigator.userAgent);
    const urlParsingNode = document.createElement('a');
    let originURL;

    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
    function resolveURL(url) {
      let href = url;

      if (msie) {
        // IE needs attribute set twice to normalize properties
        urlParsingNode.setAttribute('href', href);
        href = urlParsingNode.href;
      }

      urlParsingNode.setAttribute('href', href);

      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
          urlParsingNode.pathname :
          '/' + urlParsingNode.pathname
      };
    }

    originURL = resolveURL(window.location.href);

    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
    return function isURLSameOrigin(requestURL) {
      const parsed = (_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isString(requestURL)) ? resolveURL(requestURL) : requestURL;
      return (parsed.protocol === originURL.protocol &&
          parsed.host === originURL.host);
    };
  })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  })());


/***/ }),

/***/ "./node_modules/axios/lib/helpers/null.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/null.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// eslint-disable-next-line strict
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (null);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/parseHeaders.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../utils.js */ "./node_modules/axios/lib/utils.js");




// RawAxiosHeaders whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
const ignoreDuplicateOf = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].toObjectSet([
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
]);

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} rawHeaders Headers needing to be parsed
 *
 * @returns {Object} Headers parsed into an object
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (rawHeaders => {
  const parsed = {};
  let key;
  let val;
  let i;

  rawHeaders && rawHeaders.split('\n').forEach(function parser(line) {
    i = line.indexOf(':');
    key = line.substring(0, i).trim().toLowerCase();
    val = line.substring(i + 1).trim();

    if (!key || (parsed[key] && ignoreDuplicateOf[key])) {
      return;
    }

    if (key === 'set-cookie') {
      if (parsed[key]) {
        parsed[key].push(val);
      } else {
        parsed[key] = [val];
      }
    } else {
      parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
    }
  });

  return parsed;
});


/***/ }),

/***/ "./node_modules/axios/lib/helpers/parseProtocol.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/parseProtocol.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ parseProtocol)
/* harmony export */ });


function parseProtocol(url) {
  const match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
  return match && match[1] || '';
}


/***/ }),

/***/ "./node_modules/axios/lib/helpers/speedometer.js":
/*!*******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/speedometer.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


/**
 * Calculate data maxRate
 * @param {Number} [samplesCount= 10]
 * @param {Number} [min= 1000]
 * @returns {Function}
 */
function speedometer(samplesCount, min) {
  samplesCount = samplesCount || 10;
  const bytes = new Array(samplesCount);
  const timestamps = new Array(samplesCount);
  let head = 0;
  let tail = 0;
  let firstSampleTS;

  min = min !== undefined ? min : 1000;

  return function push(chunkLength) {
    const now = Date.now();

    const startedAt = timestamps[tail];

    if (!firstSampleTS) {
      firstSampleTS = now;
    }

    bytes[head] = chunkLength;
    timestamps[head] = now;

    let i = tail;
    let bytesCount = 0;

    while (i !== head) {
      bytesCount += bytes[i++];
      i = i % samplesCount;
    }

    head = (head + 1) % samplesCount;

    if (head === tail) {
      tail = (tail + 1) % samplesCount;
    }

    if (now - firstSampleTS < min) {
      return;
    }

    const passed = startedAt && now - startedAt;

    return passed ? Math.round(bytesCount * 1000 / passed) : undefined;
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (speedometer);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/spread.js":
/*!**************************************************!*\
  !*** ./node_modules/axios/lib/helpers/spread.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ spread)
/* harmony export */ });


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 *
 * @returns {Function}
 */
function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
}


/***/ }),

/***/ "./node_modules/axios/lib/helpers/toFormData.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/toFormData.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/AxiosError.js */ "./node_modules/axios/lib/core/AxiosError.js");
/* harmony import */ var _platform_node_classes_FormData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../platform/node/classes/FormData.js */ "./node_modules/axios/lib/helpers/null.js");




// temporary hotfix to avoid circular references until AxiosURLSearchParams is refactored


/**
 * Determines if the given thing is a array or js object.
 *
 * @param {string} thing - The object or array to be visited.
 *
 * @returns {boolean}
 */
function isVisitable(thing) {
  return _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isPlainObject(thing) || _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(thing);
}

/**
 * It removes the brackets from the end of a string
 *
 * @param {string} key - The key of the parameter.
 *
 * @returns {string} the key without the brackets.
 */
function removeBrackets(key) {
  return _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].endsWith(key, '[]') ? key.slice(0, -2) : key;
}

/**
 * It takes a path, a key, and a boolean, and returns a string
 *
 * @param {string} path - The path to the current key.
 * @param {string} key - The key of the current object being iterated over.
 * @param {string} dots - If true, the key will be rendered with dots instead of brackets.
 *
 * @returns {string} The path to the current key.
 */
function renderKey(path, key, dots) {
  if (!path) return key;
  return path.concat(key).map(function each(token, i) {
    // eslint-disable-next-line no-param-reassign
    token = removeBrackets(token);
    return !dots && i ? '[' + token + ']' : token;
  }).join(dots ? '.' : '');
}

/**
 * If the array is an array and none of its elements are visitable, then it's a flat array.
 *
 * @param {Array<any>} arr - The array to check
 *
 * @returns {boolean}
 */
function isFlatArray(arr) {
  return _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(arr) && !arr.some(isVisitable);
}

const predicates = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].toFlatObject(_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"], {}, null, function filter(prop) {
  return /^is[A-Z]/.test(prop);
});

/**
 * Convert a data object to FormData
 *
 * @param {Object} obj
 * @param {?Object} [formData]
 * @param {?Object} [options]
 * @param {Function} [options.visitor]
 * @param {Boolean} [options.metaTokens = true]
 * @param {Boolean} [options.dots = false]
 * @param {?Boolean} [options.indexes = false]
 *
 * @returns {Object}
 **/

/**
 * It converts an object into a FormData object
 *
 * @param {Object<any, any>} obj - The object to convert to form data.
 * @param {string} formData - The FormData object to append to.
 * @param {Object<string, any>} options
 *
 * @returns
 */
function toFormData(obj, formData, options) {
  if (!_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isObject(obj)) {
    throw new TypeError('target must be an object');
  }

  // eslint-disable-next-line no-param-reassign
  formData = formData || new (_platform_node_classes_FormData_js__WEBPACK_IMPORTED_MODULE_1__["default"] || FormData)();

  // eslint-disable-next-line no-param-reassign
  options = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].toFlatObject(options, {
    metaTokens: true,
    dots: false,
    indexes: false
  }, false, function defined(option, source) {
    // eslint-disable-next-line no-eq-null,eqeqeq
    return !_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isUndefined(source[option]);
  });

  const metaTokens = options.metaTokens;
  // eslint-disable-next-line no-use-before-define
  const visitor = options.visitor || defaultVisitor;
  const dots = options.dots;
  const indexes = options.indexes;
  const _Blob = options.Blob || typeof Blob !== 'undefined' && Blob;
  const useBlob = _Blob && _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isSpecCompliantForm(formData);

  if (!_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFunction(visitor)) {
    throw new TypeError('visitor must be a function');
  }

  function convertValue(value) {
    if (value === null) return '';

    if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isDate(value)) {
      return value.toISOString();
    }

    if (!useBlob && _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isBlob(value)) {
      throw new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_2__["default"]('Blob is not supported. Use a Buffer instead.');
    }

    if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArrayBuffer(value) || _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isTypedArray(value)) {
      return useBlob && typeof Blob === 'function' ? new Blob([value]) : Buffer.from(value);
    }

    return value;
  }

  /**
   * Default visitor.
   *
   * @param {*} value
   * @param {String|Number} key
   * @param {Array<String|Number>} path
   * @this {FormData}
   *
   * @returns {boolean} return true to visit the each prop of the value recursively
   */
  function defaultVisitor(value, key, path) {
    let arr = value;

    if (value && !path && typeof value === 'object') {
      if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].endsWith(key, '{}')) {
        // eslint-disable-next-line no-param-reassign
        key = metaTokens ? key : key.slice(0, -2);
        // eslint-disable-next-line no-param-reassign
        value = JSON.stringify(value);
      } else if (
        (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(value) && isFlatArray(value)) ||
        ((_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFileList(value) || _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].endsWith(key, '[]')) && (arr = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].toArray(value))
        )) {
        // eslint-disable-next-line no-param-reassign
        key = removeBrackets(key);

        arr.forEach(function each(el, index) {
          !(_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isUndefined(el) || el === null) && formData.append(
            // eslint-disable-next-line no-nested-ternary
            indexes === true ? renderKey([key], index, dots) : (indexes === null ? key : key + '[]'),
            convertValue(el)
          );
        });
        return false;
      }
    }

    if (isVisitable(value)) {
      return true;
    }

    formData.append(renderKey(path, key, dots), convertValue(value));

    return false;
  }

  const stack = [];

  const exposedHelpers = Object.assign(predicates, {
    defaultVisitor,
    convertValue,
    isVisitable
  });

  function build(value, path) {
    if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isUndefined(value)) return;

    if (stack.indexOf(value) !== -1) {
      throw Error('Circular reference detected in ' + path.join('.'));
    }

    stack.push(value);

    _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].forEach(value, function each(el, key) {
      const result = !(_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isUndefined(el) || el === null) && visitor.call(
        formData, el, _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isString(key) ? key.trim() : key, path, exposedHelpers
      );

      if (result === true) {
        build(el, path ? path.concat(key) : [key]);
      }
    });

    stack.pop();
  }

  if (!_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isObject(obj)) {
    throw new TypeError('data must be an object');
  }

  build(obj);

  return formData;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toFormData);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/toURLEncodedForm.js":
/*!************************************************************!*\
  !*** ./node_modules/axios/lib/helpers/toURLEncodedForm.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toURLEncodedForm)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _toFormData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toFormData.js */ "./node_modules/axios/lib/helpers/toFormData.js");
/* harmony import */ var _platform_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../platform/index.js */ "./node_modules/axios/lib/platform/browser/index.js");






function toURLEncodedForm(data, options) {
  return (0,_toFormData_js__WEBPACK_IMPORTED_MODULE_0__["default"])(data, new _platform_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].classes.URLSearchParams(), Object.assign({
    visitor: function(value, key, path, helpers) {
      if (_platform_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].isNode && _utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].isBuffer(value)) {
        this.append(key, value.toString('base64'));
        return false;
      }

      return helpers.defaultVisitor.apply(this, arguments);
    }
  }, options));
}


/***/ }),

/***/ "./node_modules/axios/lib/helpers/validator.js":
/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/validator.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _env_data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../env/data.js */ "./node_modules/axios/lib/env/data.js");
/* harmony import */ var _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/AxiosError.js */ "./node_modules/axios/lib/core/AxiosError.js");





const validators = {};

// eslint-disable-next-line func-names
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach((type, i) => {
  validators[type] = function validator(thing) {
    return typeof thing === type || 'a' + (i < 1 ? 'n ' : ' ') + type;
  };
});

const deprecatedWarnings = {};

/**
 * Transitional option validator
 *
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 *
 * @returns {function}
 */
validators.transitional = function transitional(validator, version, message) {
  function formatMessage(opt, desc) {
    return '[Axios v' + _env_data_js__WEBPACK_IMPORTED_MODULE_0__.VERSION + '] Transitional option \'' + opt + '\'' + desc + (message ? '. ' + message : '');
  }

  // eslint-disable-next-line func-names
  return (value, opt, opts) => {
    if (validator === false) {
      throw new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__["default"](
        formatMessage(opt, ' has been removed' + (version ? ' in ' + version : '')),
        _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__["default"].ERR_DEPRECATED
      );
    }

    if (version && !deprecatedWarnings[opt]) {
      deprecatedWarnings[opt] = true;
      // eslint-disable-next-line no-console
      console.warn(
        formatMessage(
          opt,
          ' has been deprecated since v' + version + ' and will be removed in the near future'
        )
      );
    }

    return validator ? validator(value, opt, opts) : true;
  };
};

/**
 * Assert object's properties type
 *
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 *
 * @returns {object}
 */

function assertOptions(options, schema, allowUnknown) {
  if (typeof options !== 'object') {
    throw new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__["default"]('options must be an object', _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__["default"].ERR_BAD_OPTION_VALUE);
  }
  const keys = Object.keys(options);
  let i = keys.length;
  while (i-- > 0) {
    const opt = keys[i];
    const validator = schema[opt];
    if (validator) {
      const value = options[opt];
      const result = value === undefined || validator(value, opt, options);
      if (result !== true) {
        throw new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__["default"]('option ' + opt + ' must be ' + result, _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__["default"].ERR_BAD_OPTION_VALUE);
      }
      continue;
    }
    if (allowUnknown !== true) {
      throw new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__["default"]('Unknown option ' + opt, _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__["default"].ERR_BAD_OPTION);
    }
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  assertOptions,
  validators
});


/***/ }),

/***/ "./node_modules/axios/lib/platform/browser/classes/FormData.js":
/*!*********************************************************************!*\
  !*** ./node_modules/axios/lib/platform/browser/classes/FormData.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormData);


/***/ }),

/***/ "./node_modules/axios/lib/platform/browser/classes/URLSearchParams.js":
/*!****************************************************************************!*\
  !*** ./node_modules/axios/lib/platform/browser/classes/URLSearchParams.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers_AxiosURLSearchParams_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../helpers/AxiosURLSearchParams.js */ "./node_modules/axios/lib/helpers/AxiosURLSearchParams.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (typeof URLSearchParams !== 'undefined' ? URLSearchParams : _helpers_AxiosURLSearchParams_js__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./node_modules/axios/lib/platform/browser/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/axios/lib/platform/browser/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _classes_URLSearchParams_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/URLSearchParams.js */ "./node_modules/axios/lib/platform/browser/classes/URLSearchParams.js");
/* harmony import */ var _classes_FormData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/FormData.js */ "./node_modules/axios/lib/platform/browser/classes/FormData.js");



/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 *
 * @returns {boolean}
 */
const isStandardBrowserEnv = (() => {
  let product;
  if (typeof navigator !== 'undefined' && (
    (product = navigator.product) === 'ReactNative' ||
    product === 'NativeScript' ||
    product === 'NS')
  ) {
    return false;
  }

  return typeof window !== 'undefined' && typeof document !== 'undefined';
})();

/**
 * Determine if we're running in a standard browser webWorker environment
 *
 * Although the `isStandardBrowserEnv` method indicates that
 * `allows axios to run in a web worker`, the WebWorker will still be
 * filtered out due to its judgment standard
 * `typeof window !== 'undefined' && typeof document !== 'undefined'`.
 * This leads to a problem when axios post `FormData` in webWorker
 */
 const isStandardBrowserWebWorkerEnv = (() => {
  return (
    typeof WorkerGlobalScope !== 'undefined' &&
    // eslint-disable-next-line no-undef
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts === 'function'
  );
})();


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  isBrowser: true,
  classes: {
    URLSearchParams: _classes_URLSearchParams_js__WEBPACK_IMPORTED_MODULE_0__["default"],
    FormData: _classes_FormData_js__WEBPACK_IMPORTED_MODULE_1__["default"],
    Blob
  },
  isStandardBrowserEnv,
  isStandardBrowserWebWorkerEnv,
  protocols: ['http', 'https', 'file', 'blob', 'url', 'data']
});


/***/ }),

/***/ "./node_modules/axios/lib/utils.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/utils.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers_bind_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/bind.js */ "./node_modules/axios/lib/helpers/bind.js");




// utils is a library of generic helper functions non-specific to axios

const {toString} = Object.prototype;
const {getPrototypeOf} = Object;

const kindOf = (cache => thing => {
    const str = toString.call(thing);
    return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
})(Object.create(null));

const kindOfTest = (type) => {
  type = type.toLowerCase();
  return (thing) => kindOf(thing) === type
}

const typeOfTest = type => thing => typeof thing === type;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 *
 * @returns {boolean} True if value is an Array, otherwise false
 */
const {isArray} = Array;

/**
 * Determine if a value is undefined
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if the value is undefined, otherwise false
 */
const isUndefined = typeOfTest('undefined');

/**
 * Determine if a value is a Buffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && isFunction(val.constructor.isBuffer) && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
const isArrayBuffer = kindOfTest('ArrayBuffer');


/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  let result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (isArrayBuffer(val.buffer));
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a String, otherwise false
 */
const isString = typeOfTest('string');

/**
 * Determine if a value is a Function
 *
 * @param {*} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
const isFunction = typeOfTest('function');

/**
 * Determine if a value is a Number
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Number, otherwise false
 */
const isNumber = typeOfTest('number');

/**
 * Determine if a value is an Object
 *
 * @param {*} thing The value to test
 *
 * @returns {boolean} True if value is an Object, otherwise false
 */
const isObject = (thing) => thing !== null && typeof thing === 'object';

/**
 * Determine if a value is a Boolean
 *
 * @param {*} thing The value to test
 * @returns {boolean} True if value is a Boolean, otherwise false
 */
const isBoolean = thing => thing === true || thing === false;

/**
 * Determine if a value is a plain Object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a plain Object, otherwise false
 */
const isPlainObject = (val) => {
  if (kindOf(val) !== 'object') {
    return false;
  }

  const prototype = getPrototypeOf(val);
  return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(Symbol.toStringTag in val) && !(Symbol.iterator in val);
}

/**
 * Determine if a value is a Date
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Date, otherwise false
 */
const isDate = kindOfTest('Date');

/**
 * Determine if a value is a File
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a File, otherwise false
 */
const isFile = kindOfTest('File');

/**
 * Determine if a value is a Blob
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Blob, otherwise false
 */
const isBlob = kindOfTest('Blob');

/**
 * Determine if a value is a FileList
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a File, otherwise false
 */
const isFileList = kindOfTest('FileList');

/**
 * Determine if a value is a Stream
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Stream, otherwise false
 */
const isStream = (val) => isObject(val) && isFunction(val.pipe);

/**
 * Determine if a value is a FormData
 *
 * @param {*} thing The value to test
 *
 * @returns {boolean} True if value is an FormData, otherwise false
 */
const isFormData = (thing) => {
  const pattern = '[object FormData]';
  return thing && (
    (typeof FormData === 'function' && thing instanceof FormData) ||
    toString.call(thing) === pattern ||
    (isFunction(thing.toString) && thing.toString() === pattern)
  );
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
const isURLSearchParams = kindOfTest('URLSearchParams');

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 *
 * @returns {String} The String freed of excess whitespace
 */
const trim = (str) => str.trim ?
  str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 *
 * @param {Boolean} [allOwnKeys = false]
 * @returns {any}
 */
function forEach(obj, fn, {allOwnKeys = false} = {}) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  let i;
  let l;

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    const keys = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
    const len = keys.length;
    let key;

    for (i = 0; i < len; i++) {
      key = keys[i];
      fn.call(null, obj[key], key, obj);
    }
  }
}

function findKey(obj, key) {
  key = key.toLowerCase();
  const keys = Object.keys(obj);
  let i = keys.length;
  let _key;
  while (i-- > 0) {
    _key = keys[i];
    if (key === _key.toLowerCase()) {
      return _key;
    }
  }
  return null;
}

const _global = (() => {
  /*eslint no-undef:0*/
  if (typeof globalThis !== "undefined") return globalThis;
  return typeof self !== "undefined" ? self : (typeof window !== 'undefined' ? window : global)
})();

const isContextDefined = (context) => !isUndefined(context) && context !== _global;

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 *
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  const {caseless} = isContextDefined(this) && this || {};
  const result = {};
  const assignValue = (val, key) => {
    const targetKey = caseless && findKey(result, key) || key;
    if (isPlainObject(result[targetKey]) && isPlainObject(val)) {
      result[targetKey] = merge(result[targetKey], val);
    } else if (isPlainObject(val)) {
      result[targetKey] = merge({}, val);
    } else if (isArray(val)) {
      result[targetKey] = val.slice();
    } else {
      result[targetKey] = val;
    }
  }

  for (let i = 0, l = arguments.length; i < l; i++) {
    arguments[i] && forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 *
 * @param {Boolean} [allOwnKeys]
 * @returns {Object} The resulting value of object a
 */
const extend = (a, b, thisArg, {allOwnKeys}= {}) => {
  forEach(b, (val, key) => {
    if (thisArg && isFunction(val)) {
      a[key] = (0,_helpers_bind_js__WEBPACK_IMPORTED_MODULE_0__["default"])(val, thisArg);
    } else {
      a[key] = val;
    }
  }, {allOwnKeys});
  return a;
}

/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 *
 * @returns {string} content value without BOM
 */
const stripBOM = (content) => {
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  return content;
}

/**
 * Inherit the prototype methods from one constructor into another
 * @param {function} constructor
 * @param {function} superConstructor
 * @param {object} [props]
 * @param {object} [descriptors]
 *
 * @returns {void}
 */
const inherits = (constructor, superConstructor, props, descriptors) => {
  constructor.prototype = Object.create(superConstructor.prototype, descriptors);
  constructor.prototype.constructor = constructor;
  Object.defineProperty(constructor, 'super', {
    value: superConstructor.prototype
  });
  props && Object.assign(constructor.prototype, props);
}

/**
 * Resolve object with deep prototype chain to a flat object
 * @param {Object} sourceObj source object
 * @param {Object} [destObj]
 * @param {Function|Boolean} [filter]
 * @param {Function} [propFilter]
 *
 * @returns {Object}
 */
const toFlatObject = (sourceObj, destObj, filter, propFilter) => {
  let props;
  let i;
  let prop;
  const merged = {};

  destObj = destObj || {};
  // eslint-disable-next-line no-eq-null,eqeqeq
  if (sourceObj == null) return destObj;

  do {
    props = Object.getOwnPropertyNames(sourceObj);
    i = props.length;
    while (i-- > 0) {
      prop = props[i];
      if ((!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop]) {
        destObj[prop] = sourceObj[prop];
        merged[prop] = true;
      }
    }
    sourceObj = filter !== false && getPrototypeOf(sourceObj);
  } while (sourceObj && (!filter || filter(sourceObj, destObj)) && sourceObj !== Object.prototype);

  return destObj;
}

/**
 * Determines whether a string ends with the characters of a specified string
 *
 * @param {String} str
 * @param {String} searchString
 * @param {Number} [position= 0]
 *
 * @returns {boolean}
 */
const endsWith = (str, searchString, position) => {
  str = String(str);
  if (position === undefined || position > str.length) {
    position = str.length;
  }
  position -= searchString.length;
  const lastIndex = str.indexOf(searchString, position);
  return lastIndex !== -1 && lastIndex === position;
}


/**
 * Returns new array from array like object or null if failed
 *
 * @param {*} [thing]
 *
 * @returns {?Array}
 */
const toArray = (thing) => {
  if (!thing) return null;
  if (isArray(thing)) return thing;
  let i = thing.length;
  if (!isNumber(i)) return null;
  const arr = new Array(i);
  while (i-- > 0) {
    arr[i] = thing[i];
  }
  return arr;
}

/**
 * Checking if the Uint8Array exists and if it does, it returns a function that checks if the
 * thing passed in is an instance of Uint8Array
 *
 * @param {TypedArray}
 *
 * @returns {Array}
 */
// eslint-disable-next-line func-names
const isTypedArray = (TypedArray => {
  // eslint-disable-next-line func-names
  return thing => {
    return TypedArray && thing instanceof TypedArray;
  };
})(typeof Uint8Array !== 'undefined' && getPrototypeOf(Uint8Array));

/**
 * For each entry in the object, call the function with the key and value.
 *
 * @param {Object<any, any>} obj - The object to iterate over.
 * @param {Function} fn - The function to call for each entry.
 *
 * @returns {void}
 */
const forEachEntry = (obj, fn) => {
  const generator = obj && obj[Symbol.iterator];

  const iterator = generator.call(obj);

  let result;

  while ((result = iterator.next()) && !result.done) {
    const pair = result.value;
    fn.call(obj, pair[0], pair[1]);
  }
}

/**
 * It takes a regular expression and a string, and returns an array of all the matches
 *
 * @param {string} regExp - The regular expression to match against.
 * @param {string} str - The string to search.
 *
 * @returns {Array<boolean>}
 */
const matchAll = (regExp, str) => {
  let matches;
  const arr = [];

  while ((matches = regExp.exec(str)) !== null) {
    arr.push(matches);
  }

  return arr;
}

/* Checking if the kindOfTest function returns true when passed an HTMLFormElement. */
const isHTMLForm = kindOfTest('HTMLFormElement');

const toCamelCase = str => {
  return str.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,
    function replacer(m, p1, p2) {
      return p1.toUpperCase() + p2;
    }
  );
};

/* Creating a function that will check if an object has a property. */
const hasOwnProperty = (({hasOwnProperty}) => (obj, prop) => hasOwnProperty.call(obj, prop))(Object.prototype);

/**
 * Determine if a value is a RegExp object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a RegExp object, otherwise false
 */
const isRegExp = kindOfTest('RegExp');

const reduceDescriptors = (obj, reducer) => {
  const descriptors = Object.getOwnPropertyDescriptors(obj);
  const reducedDescriptors = {};

  forEach(descriptors, (descriptor, name) => {
    if (reducer(descriptor, name, obj) !== false) {
      reducedDescriptors[name] = descriptor;
    }
  });

  Object.defineProperties(obj, reducedDescriptors);
}

/**
 * Makes all methods read-only
 * @param {Object} obj
 */

const freezeMethods = (obj) => {
  reduceDescriptors(obj, (descriptor, name) => {
    // skip restricted props in strict mode
    if (isFunction(obj) && ['arguments', 'caller', 'callee'].indexOf(name) !== -1) {
      return false;
    }

    const value = obj[name];

    if (!isFunction(value)) return;

    descriptor.enumerable = false;

    if ('writable' in descriptor) {
      descriptor.writable = false;
      return;
    }

    if (!descriptor.set) {
      descriptor.set = () => {
        throw Error('Can not rewrite read-only method \'' + name + '\'');
      };
    }
  });
}

const toObjectSet = (arrayOrString, delimiter) => {
  const obj = {};

  const define = (arr) => {
    arr.forEach(value => {
      obj[value] = true;
    });
  }

  isArray(arrayOrString) ? define(arrayOrString) : define(String(arrayOrString).split(delimiter));

  return obj;
}

const noop = () => {}

const toFiniteNumber = (value, defaultValue) => {
  value = +value;
  return Number.isFinite(value) ? value : defaultValue;
}

const ALPHA = 'abcdefghijklmnopqrstuvwxyz'

const DIGIT = '0123456789';

const ALPHABET = {
  DIGIT,
  ALPHA,
  ALPHA_DIGIT: ALPHA + ALPHA.toUpperCase() + DIGIT
}

const generateString = (size = 16, alphabet = ALPHABET.ALPHA_DIGIT) => {
  let str = '';
  const {length} = alphabet;
  while (size--) {
    str += alphabet[Math.random() * length|0]
  }

  return str;
}

/**
 * If the thing is a FormData object, return true, otherwise return false.
 *
 * @param {unknown} thing - The thing to check.
 *
 * @returns {boolean}
 */
function isSpecCompliantForm(thing) {
  return !!(thing && isFunction(thing.append) && thing[Symbol.toStringTag] === 'FormData' && thing[Symbol.iterator]);
}

const toJSONObject = (obj) => {
  const stack = new Array(10);

  const visit = (source, i) => {

    if (isObject(source)) {
      if (stack.indexOf(source) >= 0) {
        return;
      }

      if(!('toJSON' in source)) {
        stack[i] = source;
        const target = isArray(source) ? [] : {};

        forEach(source, (value, key) => {
          const reducedValue = visit(value, i + 1);
          !isUndefined(reducedValue) && (target[key] = reducedValue);
        });

        stack[i] = undefined;

        return target;
      }
    }

    return source;
  }

  return visit(obj, 0);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  isArray,
  isArrayBuffer,
  isBuffer,
  isFormData,
  isArrayBufferView,
  isString,
  isNumber,
  isBoolean,
  isObject,
  isPlainObject,
  isUndefined,
  isDate,
  isFile,
  isBlob,
  isRegExp,
  isFunction,
  isStream,
  isURLSearchParams,
  isTypedArray,
  isFileList,
  forEach,
  merge,
  extend,
  trim,
  stripBOM,
  inherits,
  toFlatObject,
  kindOf,
  kindOfTest,
  endsWith,
  toArray,
  forEachEntry,
  matchAll,
  isHTMLForm,
  hasOwnProperty,
  hasOwnProp: hasOwnProperty, // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors,
  freezeMethods,
  toObjectSet,
  toCamelCase,
  noop,
  toFiniteNumber,
  findKey,
  global: _global,
  isContextDefined,
  ALPHABET,
  generateString,
  isSpecCompliantForm,
  toJSONObject
});


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _pnotify_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnotify/core */ "./node_modules/@pnotify/core/dist/PNotify.js");
/* harmony import */ var _pnotify_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_pnotify_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pnotify_core_dist_PNotify_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pnotify/core/dist/PNotify.css */ "./node_modules/@pnotify/core/dist/PNotify.css");
/* harmony import */ var _pnotify_core_dist_BrightTheme_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @pnotify/core/dist/BrightTheme.css */ "./node_modules/@pnotify/core/dist/BrightTheme.css");
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! numeral */ "./node_modules/numeral/numeral.js");
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(numeral__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var _partials_photoCard_hbs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./partials/photoCard.hbs */ "./src/partials/photoCard.hbs");
/* harmony import */ var _partials_photoCard_hbs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_partials_photoCard_hbs__WEBPACK_IMPORTED_MODULE_5__);








// Vars

var fetch = {
  apiToken: '33665756-797053471af2a43772fb226e5',
  apiLink: 'https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=что_искать&page=номер_страницы&per_page=12&key=твой_ключ'
};
var refs = {
  gallery: document.querySelector('.gallery'),
  searchForm: document.querySelector('#search-form'),
  loadMoreBtn: document.querySelector('#loadMoreBtn'),
  loader: document.querySelector('.loader'),
  body: document.querySelector('body'),
  modal: document.querySelector('.modal'),
  scrollBtn: document.querySelector('.scroll-btn')
};
var page = 1;
var query = '';
var perPage = 12;
var photoCards;
var modalImage = '';

// Functions

function findPhotos() {
  photoCards = document.querySelectorAll('.photo-card');
  photoCards.forEach(function (photoCard) {
    photoCard.addEventListener('click', function (e) {
      if (!e.target.dataset.url) {
        return;
      }
      modalImage = refs.modal.firstElementChild;
      modalImage.src = e.target.dataset.url;
      refs.modal.classList.add('active');
      refs.body.classList.add('fixed');
    });
  });
  refs.modal.addEventListener('click', function (e) {
    if (!e.target.classList.contains('modal__img') && refs.modal.classList.contains('active')) {
      refs.modal.classList.remove('active');
      refs.body.classList.remove('fixed');
      modalImage.src = '';
      modalImage = '';
    }
  });
}
function fetchRequest() {
  if (page > 1) {
    refs.loadMoreBtn.textContent = 'Loading...';
    refs.loader.style.display = 'none';
  } else {
    refs.loadMoreBtn.style.display = 'none';
    refs.loader.style.display = 'block';
  }
  axios__WEBPACK_IMPORTED_MODULE_6__["default"].get("https://pixabay.com/api", {
    params: {
      q: query,
      page: page,
      per_page: perPage,
      key: fetch.apiToken,
      image_type: 'photo',
      orientation: 'horizontal'
    }
  }).then(function (res) {
    refs.loadMoreBtn.textContent = 'Load more';
    if (res.data.hits.length === 0) {
      (0,_pnotify_core__WEBPACK_IMPORTED_MODULE_0__.alert)({
        text: 'Нічого не знайдено'
      });
      refs.loadMoreBtn.style.display = 'none';
      return;
    }
    page++;
    var html = '';
    res.data.hits.forEach(function (hit) {
      var hitHtml = _partials_photoCard_hbs__WEBPACK_IMPORTED_MODULE_5___default()(hit);
      html += hitHtml;
    });
    refs.gallery.insertAdjacentHTML('beforeend', html);
    if (res.data.hits.length < perPage) {
      refs.loadMoreBtn.style.display = 'none';
    } else {
      refs.loadMoreBtn.style.display = 'block';
      refs.loadMoreBtn.disabled = false;
    }
    findPhotos();
  })["catch"](function (error) {
    (0,_pnotify_core__WEBPACK_IMPORTED_MODULE_0__.alert)({
      title: 'Невідома помилка'
    });
    refs.loadMoreBtn.style.display = 'none';
  })["finally"](function () {
    refs.loader.style.display = 'none';
  });
}

// Events listeners

refs.searchForm.addEventListener('submit', function (e) {
  e.preventDefault();
  query = e.target.elements.query.value.trim();
  if (query === '') {
    (0,_pnotify_core__WEBPACK_IMPORTED_MODULE_0__.alert)({
      text: 'Введіть пошуковий запит'
    });
    return;
  }
  if (query.length >= 100) {
    (0,_pnotify_core__WEBPACK_IMPORTED_MODULE_0__.alert)({
      text: 'Запит повинен містити не більше 100 символів'
    });
    return;
  }
  refs.gallery.innerHTML = '';
  page = 1;
  fetchRequest();
});
refs.loadMoreBtn.addEventListener('click', function (e) {
  refs.loadMoreBtn.disabled = true;
  fetchRequest();
});
window.addEventListener('scroll', function (e) {
  if (window.scrollY > 400) {
    refs.scrollBtn.classList.add('active');
  } else {
    refs.scrollBtn.classList.remove('active');
  }
});
refs.scrollBtn.addEventListener('click', function (e) {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
window.addEventListener('keydown', function (e) {
  if (e.code === 'Escape' && refs.modal.classList.contains('active')) {
    refs.modal.classList.remove('active');
    refs.body.classList.remove('fixed');
    modalImage.src = '';
    modalImage = '';
  }
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBOztBQUVBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxDQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVMsUUFBUTtBQUNqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlFQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUM7Ozs7Ozs7VUN0c0JGO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FD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QUFVLENBQUNXLEdBQUcsR0FBRyxFQUFFO0lBQ25CWCxVQUFVLEdBQUcsRUFBRTtFQUNqQjtBQUNGLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwbm90aWZ5L2NvcmUvZGlzdC9QTm90aWZ5LmpzIiwid2VicGFjazovLy8uL3NyYy9wYXJ0aWFscy9waG90b0NhcmQuaGJzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9oYW5kbGViYXJzL2Rpc3QvY2pzL2hhbmRsZWJhcnMucnVudGltZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGFuZGxlYmFycy9kaXN0L2Nqcy9oYW5kbGViYXJzL2Jhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2hhbmRsZWJhcnMvZGlzdC9janMvaGFuZGxlYmFycy9kZWNvcmF0b3JzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9oYW5kbGViYXJzL2Rpc3QvY2pzL2hhbmRsZWJhcnMvZGVjb3JhdG9ycy9pbmxpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2hhbmRsZWJhcnMvZGlzdC9janMvaGFuZGxlYmFycy9leGNlcHRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2hhbmRsZWJhcnMvZGlzdC9janMvaGFuZGxlYmFycy9oZWxwZXJzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9oYW5kbGViYXJzL2Rpc3QvY2pzL2hhbmRsZWJhcnMvaGVscGVycy9ibG9jay1oZWxwZXItbWlzc2luZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGFuZGxlYmFycy9kaXN0L2Nqcy9oYW5kbGViYXJzL2hlbHBlcnMvZWFjaC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGFuZGxlYmFycy9kaXN0L2Nqcy9oYW5kbGViYXJzL2hlbHBlcnMvaGVscGVyLW1pc3NpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2hhbmRsZWJhcnMvZGlzdC9janMvaGFuZGxlYmFycy9oZWxwZXJzL2lmLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9oYW5kbGViYXJzL2Rpc3QvY2pzL2hhbmRsZWJhcnMvaGVscGVycy9sb2cuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2hhbmRsZWJhcnMvZGlzdC9janMvaGFuZGxlYmFycy9oZWxwZXJzL2xvb2t1cC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGFuZGxlYmFycy9kaXN0L2Nqcy9oYW5kbGViYXJzL2hlbHBlcnMvd2l0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGFuZGxlYmFycy9kaXN0L2Nqcy9oYW5kbGViYXJzL2ludGVybmFsL2NyZWF0ZS1uZXctbG9va3VwLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGFuZGxlYmFycy9kaXN0L2Nqcy9oYW5kbGViYXJzL2ludGVybmFsL3Byb3RvLWFjY2Vzcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGFuZGxlYmFycy9kaXN0L2Nqcy9oYW5kbGViYXJzL2ludGVybmFsL3dyYXBIZWxwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2hhbmRsZWJhcnMvZGlzdC9janMvaGFuZGxlYmFycy9sb2dnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2hhbmRsZWJhcnMvZGlzdC9janMvaGFuZGxlYmFycy9uby1jb25mbGljdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGFuZGxlYmFycy9kaXN0L2Nqcy9oYW5kbGViYXJzL3J1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2hhbmRsZWJhcnMvZGlzdC9janMvaGFuZGxlYmFycy9zYWZlLXN0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGFuZGxlYmFycy9kaXN0L2Nqcy9oYW5kbGViYXJzL3V0aWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9oYW5kbGViYXJzL3J1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwbm90aWZ5L2NvcmUvZGlzdC9CcmlnaHRUaGVtZS5jc3M/NzI1NiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBub3RpZnkvY29yZS9kaXN0L1BOb3RpZnkuY3NzPzQ1YmUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzPzM4YTUiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL251bWVyYWwvbnVtZXJhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2FkYXB0ZXJzL2FkYXB0ZXJzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvYWRhcHRlcnMveGhyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvYXhpb3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvQ2FuY2VsVG9rZW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvQ2FuY2VsZWRFcnJvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9pc0NhbmNlbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvQXhpb3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL0F4aW9zRXJyb3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL0F4aW9zSGVhZGVycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvSW50ZXJjZXB0b3JNYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9idWlsZEZ1bGxQYXRoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9kaXNwYXRjaFJlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL21lcmdlQ29uZmlnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9zZXR0bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL3RyYW5zZm9ybURhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9kZWZhdWx0cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2RlZmF1bHRzL3RyYW5zaXRpb25hbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2Vudi9kYXRhLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9BeGlvc1VSTFNlYXJjaFBhcmFtcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvSHR0cFN0YXR1c0NvZGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2JpbmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2J1aWxkVVJMLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9jb21iaW5lVVJMcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvY29va2llcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvZm9ybURhdGFUb0pTT04uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzQWJzb2x1dGVVUkwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzQXhpb3NFcnJvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvaXNVUkxTYW1lT3JpZ2luLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9udWxsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9wYXJzZUhlYWRlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3BhcnNlUHJvdG9jb2wuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3NwZWVkb21ldGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9zcHJlYWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3RvRm9ybURhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3RvVVJMRW5jb2RlZEZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3ZhbGlkYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL3BsYXRmb3JtL2Jyb3dzZXIvY2xhc3Nlcy9Gb3JtRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL3BsYXRmb3JtL2Jyb3dzZXIvY2xhc3Nlcy9VUkxTZWFyY2hQYXJhbXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9wbGF0Zm9ybS9icm93c2VyL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIhZnVuY3Rpb24odCxlKXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZT9lKGV4cG9ydHMpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoW1wiZXhwb3J0c1wiXSxlKTplKCh0PVwidW5kZWZpbmVkXCIhPXR5cGVvZiBnbG9iYWxUaGlzP2dsb2JhbFRoaXM6dHx8c2VsZikuUE5vdGlmeT17fSl9KHRoaXMsKGZ1bmN0aW9uKHQpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGUodCl7cmV0dXJuKGU9XCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZcInN5bWJvbFwiPT10eXBlb2YgU3ltYm9sLml0ZXJhdG9yP2Z1bmN0aW9uKHQpe3JldHVybiB0eXBlb2YgdH06ZnVuY3Rpb24odCl7cmV0dXJuIHQmJlwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmdC5jb25zdHJ1Y3Rvcj09PVN5bWJvbCYmdCE9PVN5bWJvbC5wcm90b3R5cGU/XCJzeW1ib2xcIjp0eXBlb2YgdH0pKHQpfWZ1bmN0aW9uIG4odCxlKXtpZighKHQgaW5zdGFuY2VvZiBlKSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpfWZ1bmN0aW9uIGkodCxlKXtmb3IodmFyIG49MDtuPGUubGVuZ3RoO24rKyl7dmFyIGk9ZVtuXTtpLmVudW1lcmFibGU9aS5lbnVtZXJhYmxlfHwhMSxpLmNvbmZpZ3VyYWJsZT0hMCxcInZhbHVlXCJpbiBpJiYoaS53cml0YWJsZT0hMCksT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsaS5rZXksaSl9fWZ1bmN0aW9uIG8odCxlLG4pe3JldHVybiBlJiZpKHQucHJvdG90eXBlLGUpLG4mJmkodCxuKSx0fWZ1bmN0aW9uIHIodCxlLG4pe3JldHVybiBlIGluIHQ/T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsZSx7dmFsdWU6bixlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMH0pOnRbZV09bix0fWZ1bmN0aW9uIHModCxlKXt2YXIgbj1PYmplY3Qua2V5cyh0KTtpZihPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKXt2YXIgaT1PYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHQpO2UmJihpPWkuZmlsdGVyKChmdW5jdGlvbihlKXtyZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0LGUpLmVudW1lcmFibGV9KSkpLG4ucHVzaC5hcHBseShuLGkpfXJldHVybiBufWZ1bmN0aW9uIGEodCl7Zm9yKHZhciBlPTE7ZTxhcmd1bWVudHMubGVuZ3RoO2UrKyl7dmFyIG49bnVsbCE9YXJndW1lbnRzW2VdP2FyZ3VtZW50c1tlXTp7fTtlJTI/cyhPYmplY3QobiksITApLmZvckVhY2goKGZ1bmN0aW9uKGUpe3IodCxlLG5bZV0pfSkpOk9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzP09iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHQsT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMobikpOnMoT2JqZWN0KG4pKS5mb3JFYWNoKChmdW5jdGlvbihlKXtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxlLE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IobixlKSl9KSl9cmV0dXJuIHR9ZnVuY3Rpb24gYyh0KXtyZXR1cm4oYz1PYmplY3Quc2V0UHJvdG90eXBlT2Y/T2JqZWN0LmdldFByb3RvdHlwZU9mOmZ1bmN0aW9uKHQpe3JldHVybiB0Ll9fcHJvdG9fX3x8T2JqZWN0LmdldFByb3RvdHlwZU9mKHQpfSkodCl9ZnVuY3Rpb24gbCh0LGUpe3JldHVybihsPU9iamVjdC5zZXRQcm90b3R5cGVPZnx8ZnVuY3Rpb24odCxlKXtyZXR1cm4gdC5fX3Byb3RvX189ZSx0fSkodCxlKX1mdW5jdGlvbiB1KCl7aWYoXCJ1bmRlZmluZWRcIj09dHlwZW9mIFJlZmxlY3R8fCFSZWZsZWN0LmNvbnN0cnVjdClyZXR1cm4hMTtpZihSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKXJldHVybiExO2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIFByb3h5KXJldHVybiEwO3RyeXtyZXR1cm4gRGF0ZS5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChEYXRlLFtdLChmdW5jdGlvbigpe30pKSksITB9Y2F0Y2godCl7cmV0dXJuITF9fWZ1bmN0aW9uIGYodCxlLG4pe3JldHVybihmPXUoKT9SZWZsZWN0LmNvbnN0cnVjdDpmdW5jdGlvbih0LGUsbil7dmFyIGk9W251bGxdO2kucHVzaC5hcHBseShpLGUpO3ZhciBvPW5ldyhGdW5jdGlvbi5iaW5kLmFwcGx5KHQsaSkpO3JldHVybiBuJiZsKG8sbi5wcm90b3R5cGUpLG99KS5hcHBseShudWxsLGFyZ3VtZW50cyl9ZnVuY3Rpb24gZCh0KXtpZih2b2lkIDA9PT10KXRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtyZXR1cm4gdH1mdW5jdGlvbiBoKHQsZSl7cmV0dXJuIWV8fFwib2JqZWN0XCIhPXR5cGVvZiBlJiZcImZ1bmN0aW9uXCIhPXR5cGVvZiBlP2QodCk6ZX1mdW5jdGlvbiBwKHQsZSl7cmV0dXJuIGZ1bmN0aW9uKHQpe2lmKEFycmF5LmlzQXJyYXkodCkpcmV0dXJuIHR9KHQpfHxmdW5jdGlvbih0LGUpe2lmKFwidW5kZWZpbmVkXCI9PXR5cGVvZiBTeW1ib2x8fCEoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdCh0KSkpcmV0dXJuO3ZhciBuPVtdLGk9ITAsbz0hMSxyPXZvaWQgMDt0cnl7Zm9yKHZhciBzLGE9dFtTeW1ib2wuaXRlcmF0b3JdKCk7IShpPShzPWEubmV4dCgpKS5kb25lKSYmKG4ucHVzaChzLnZhbHVlKSwhZXx8bi5sZW5ndGghPT1lKTtpPSEwKTt9Y2F0Y2godCl7bz0hMCxyPXR9ZmluYWxseXt0cnl7aXx8bnVsbD09YS5yZXR1cm58fGEucmV0dXJuKCl9ZmluYWxseXtpZihvKXRocm93IHJ9fXJldHVybiBufSh0LGUpfHx2KHQsZSl8fGZ1bmN0aW9uKCl7dGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKX0oKX1mdW5jdGlvbiBtKHQpe3JldHVybiBmdW5jdGlvbih0KXtpZihBcnJheS5pc0FycmF5KHQpKXJldHVybiB5KHQpfSh0KXx8ZnVuY3Rpb24odCl7aWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdCh0KSlyZXR1cm4gQXJyYXkuZnJvbSh0KX0odCl8fHYodCl8fGZ1bmN0aW9uKCl7dGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIil9KCl9ZnVuY3Rpb24gdih0LGUpe2lmKHQpe2lmKFwic3RyaW5nXCI9PXR5cGVvZiB0KXJldHVybiB5KHQsZSk7dmFyIG49T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHQpLnNsaWNlKDgsLTEpO3JldHVyblwiT2JqZWN0XCI9PT1uJiZ0LmNvbnN0cnVjdG9yJiYobj10LmNvbnN0cnVjdG9yLm5hbWUpLFwiTWFwXCI9PT1ufHxcIlNldFwiPT09bj9BcnJheS5mcm9tKHQpOlwiQXJndW1lbnRzXCI9PT1ufHwvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKT95KHQsZSk6dm9pZCAwfX1mdW5jdGlvbiB5KHQsZSl7KG51bGw9PWV8fGU+dC5sZW5ndGgpJiYoZT10Lmxlbmd0aCk7Zm9yKHZhciBuPTAsaT1uZXcgQXJyYXkoZSk7bjxlO24rKylpW25dPXRbbl07cmV0dXJuIGl9ZnVuY3Rpb24gZygpe31mdW5jdGlvbiAkKHQsZSl7Zm9yKHZhciBuIGluIGUpdFtuXT1lW25dO3JldHVybiB0fWZ1bmN0aW9uIF8odCl7cmV0dXJuIHQoKX1mdW5jdGlvbiBrKCl7cmV0dXJuIE9iamVjdC5jcmVhdGUobnVsbCl9ZnVuY3Rpb24geCh0KXt0LmZvckVhY2goXyl9ZnVuY3Rpb24gYih0KXtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiB0fWZ1bmN0aW9uIHcodCxuKXtyZXR1cm4gdCE9dD9uPT1uOnQhPT1ufHx0JiZcIm9iamVjdFwiPT09ZSh0KXx8XCJmdW5jdGlvblwiPT10eXBlb2YgdH1mdW5jdGlvbiBPKHQsZSl7dC5hcHBlbmRDaGlsZChlKX1mdW5jdGlvbiBDKHQsZSxuKXt0Lmluc2VydEJlZm9yZShlLG58fG51bGwpfWZ1bmN0aW9uIE0odCl7dC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHQpfWZ1bmN0aW9uIFQodCl7cmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodCl9ZnVuY3Rpb24gSCh0KXtyZXR1cm4gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodCl9ZnVuY3Rpb24gRSgpe3JldHVybiBIKFwiIFwiKX1mdW5jdGlvbiBTKCl7cmV0dXJuIEgoXCJcIil9ZnVuY3Rpb24gTih0LGUsbixpKXtyZXR1cm4gdC5hZGRFdmVudExpc3RlbmVyKGUsbixpKSxmdW5jdGlvbigpe3JldHVybiB0LnJlbW92ZUV2ZW50TGlzdGVuZXIoZSxuLGkpfX1mdW5jdGlvbiBQKHQsZSxuKXtudWxsPT1uP3QucmVtb3ZlQXR0cmlidXRlKGUpOnQuZ2V0QXR0cmlidXRlKGUpIT09biYmdC5zZXRBdHRyaWJ1dGUoZSxuKX1mdW5jdGlvbiBBKHQpe3JldHVybiBBcnJheS5mcm9tKHQuY2hpbGROb2Rlcyl9ZnVuY3Rpb24gTCh0LGUpe2U9XCJcIitlLHQud2hvbGVUZXh0IT09ZSYmKHQuZGF0YT1lKX12YXIgaixSPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCgpe3ZhciBlPWFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdP2FyZ3VtZW50c1swXTpudWxsO24odGhpcyx0KSx0aGlzLmE9ZSx0aGlzLmU9dGhpcy5uPW51bGx9cmV0dXJuIG8odCxbe2tleTpcIm1cIix2YWx1ZTpmdW5jdGlvbih0LGUpe3ZhciBuPWFyZ3VtZW50cy5sZW5ndGg+MiYmdm9pZCAwIT09YXJndW1lbnRzWzJdP2FyZ3VtZW50c1syXTpudWxsO3RoaXMuZXx8KHRoaXMuZT1UKGUubm9kZU5hbWUpLHRoaXMudD1lLHRoaXMuaCh0KSksdGhpcy5pKG4pfX0se2tleTpcImhcIix2YWx1ZTpmdW5jdGlvbih0KXt0aGlzLmUuaW5uZXJIVE1MPXQsdGhpcy5uPUFycmF5LmZyb20odGhpcy5lLmNoaWxkTm9kZXMpfX0se2tleTpcImlcIix2YWx1ZTpmdW5jdGlvbih0KXtmb3IodmFyIGU9MDtlPHRoaXMubi5sZW5ndGg7ZSs9MSlDKHRoaXMudCx0aGlzLm5bZV0sdCl9fSx7a2V5OlwicFwiLHZhbHVlOmZ1bmN0aW9uKHQpe3RoaXMuZCgpLHRoaXMuaCh0KSx0aGlzLmkodGhpcy5hKX19LHtrZXk6XCJkXCIsdmFsdWU6ZnVuY3Rpb24oKXt0aGlzLm4uZm9yRWFjaChNKX19XSksdH0oKTtmdW5jdGlvbiBXKHQpe2o9dH1mdW5jdGlvbiBJKCl7aWYoIWopdGhyb3cgbmV3IEVycm9yKFwiRnVuY3Rpb24gY2FsbGVkIG91dHNpZGUgY29tcG9uZW50IGluaXRpYWxpemF0aW9uXCIpO3JldHVybiBqfWZ1bmN0aW9uIEQoKXt2YXIgdD1JKCk7cmV0dXJuIGZ1bmN0aW9uKGUsbil7dmFyIGk9dC4kJC5jYWxsYmFja3NbZV07aWYoaSl7dmFyIG89ZnVuY3Rpb24odCxlKXt2YXIgbj1kb2N1bWVudC5jcmVhdGVFdmVudChcIkN1c3RvbUV2ZW50XCIpO3JldHVybiBuLmluaXRDdXN0b21FdmVudCh0LCExLCExLGUpLG59KGUsbik7aS5zbGljZSgpLmZvckVhY2goKGZ1bmN0aW9uKGUpe2UuY2FsbCh0LG8pfSkpfX19ZnVuY3Rpb24gRih0LGUpe3ZhciBuPXQuJCQuY2FsbGJhY2tzW2UudHlwZV07biYmbi5zbGljZSgpLmZvckVhY2goKGZ1bmN0aW9uKHQpe3JldHVybiB0KGUpfSkpfXZhciBxPVtdLEI9W10sej1bXSxVPVtdLEc9UHJvbWlzZS5yZXNvbHZlKCksSj0hMTtmdW5jdGlvbiBLKCl7Snx8KEo9ITAsRy50aGVuKFopKX1mdW5jdGlvbiBRKCl7cmV0dXJuIEsoKSxHfWZ1bmN0aW9uIFYodCl7ei5wdXNoKHQpfXZhciBYPSExLFk9bmV3IFNldDtmdW5jdGlvbiBaKCl7aWYoIVgpe1g9ITA7ZG97Zm9yKHZhciB0PTA7dDxxLmxlbmd0aDt0Kz0xKXt2YXIgZT1xW3RdO1coZSksdHQoZS4kJCl9Zm9yKFcobnVsbCkscS5sZW5ndGg9MDtCLmxlbmd0aDspQi5wb3AoKSgpO2Zvcih2YXIgbj0wO248ei5sZW5ndGg7bis9MSl7dmFyIGk9eltuXTtZLmhhcyhpKXx8KFkuYWRkKGkpLGkoKSl9ei5sZW5ndGg9MH13aGlsZShxLmxlbmd0aCk7Zm9yKDtVLmxlbmd0aDspVS5wb3AoKSgpO0o9ITEsWD0hMSxZLmNsZWFyKCl9fWZ1bmN0aW9uIHR0KHQpe2lmKG51bGwhPT10LmZyYWdtZW50KXt0LnVwZGF0ZSgpLHgodC5iZWZvcmVfdXBkYXRlKTt2YXIgZT10LmRpcnR5O3QuZGlydHk9Wy0xXSx0LmZyYWdtZW50JiZ0LmZyYWdtZW50LnAodC5jdHgsZSksdC5hZnRlcl91cGRhdGUuZm9yRWFjaChWKX19dmFyIGV0LG50PW5ldyBTZXQ7ZnVuY3Rpb24gaXQoKXtldD17cjowLGM6W10scDpldH19ZnVuY3Rpb24gb3QoKXtldC5yfHx4KGV0LmMpLGV0PWV0LnB9ZnVuY3Rpb24gcnQodCxlKXt0JiZ0LmkmJihudC5kZWxldGUodCksdC5pKGUpKX1mdW5jdGlvbiBzdCh0LGUsbixpKXtpZih0JiZ0Lm8pe2lmKG50Lmhhcyh0KSlyZXR1cm47bnQuYWRkKHQpLGV0LmMucHVzaCgoZnVuY3Rpb24oKXtudC5kZWxldGUodCksaSYmKG4mJnQuZCgxKSxpKCkpfSkpLHQubyhlKX19dmFyIGF0PVwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3c/d2luZG93OlwidW5kZWZpbmVkXCIhPXR5cGVvZiBnbG9iYWxUaGlzP2dsb2JhbFRoaXM6Z2xvYmFsO2Z1bmN0aW9uIGN0KHQsZSl7c3QodCwxLDEsKGZ1bmN0aW9uKCl7ZS5kZWxldGUodC5rZXkpfSkpfWZ1bmN0aW9uIGx0KHQsZSxuLGksbyxyLHMsYSxjLGwsdSxmKXtmb3IodmFyIGQ9dC5sZW5ndGgsaD1yLmxlbmd0aCxwPWQsbT17fTtwLS07KW1bdFtwXS5rZXldPXA7dmFyIHY9W10seT1uZXcgTWFwLGc9bmV3IE1hcDtmb3IocD1oO3AtLTspe3ZhciAkPWYobyxyLHApLF89bigkKSxrPXMuZ2V0KF8pO2s/aSYmay5wKCQsZSk6KGs9bChfLCQpKS5jKCkseS5zZXQoXyx2W3BdPWspLF8gaW4gbSYmZy5zZXQoXyxNYXRoLmFicyhwLW1bX10pKX12YXIgeD1uZXcgU2V0LGI9bmV3IFNldDtmdW5jdGlvbiB3KHQpe3J0KHQsMSksdC5tKGEsdSkscy5zZXQodC5rZXksdCksdT10LmZpcnN0LGgtLX1mb3IoO2QmJmg7KXt2YXIgTz12W2gtMV0sQz10W2QtMV0sTT1PLmtleSxUPUMua2V5O089PT1DPyh1PU8uZmlyc3QsZC0tLGgtLSk6eS5oYXMoVCk/IXMuaGFzKE0pfHx4LmhhcyhNKT93KE8pOmIuaGFzKFQpP2QtLTpnLmdldChNKT5nLmdldChUKT8oYi5hZGQoTSksdyhPKSk6KHguYWRkKFQpLGQtLSk6KGMoQyxzKSxkLS0pfWZvcig7ZC0tOyl7dmFyIEg9dFtkXTt5LmhhcyhILmtleSl8fGMoSCxzKX1mb3IoO2g7KXcodltoLTFdKTtyZXR1cm4gdn1mdW5jdGlvbiB1dCh0LGUpe2Zvcih2YXIgbj17fSxpPXt9LG89eyQkc2NvcGU6MX0scj10Lmxlbmd0aDtyLS07KXt2YXIgcz10W3JdLGE9ZVtyXTtpZihhKXtmb3IodmFyIGMgaW4gcyljIGluIGF8fChpW2NdPTEpO2Zvcih2YXIgbCBpbiBhKW9bbF18fChuW2xdPWFbbF0sb1tsXT0xKTt0W3JdPWF9ZWxzZSBmb3IodmFyIHUgaW4gcylvW3VdPTF9Zm9yKHZhciBmIGluIGkpZiBpbiBufHwobltmXT12b2lkIDApO3JldHVybiBufWZ1bmN0aW9uIGZ0KHQpe3JldHVyblwib2JqZWN0XCI9PT1lKHQpJiZudWxsIT09dD90Ont9fWZ1bmN0aW9uIGR0KHQpe3QmJnQuYygpfWZ1bmN0aW9uIGh0KHQsZSxuKXt2YXIgaT10LiQkLG89aS5mcmFnbWVudCxyPWkub25fbW91bnQscz1pLm9uX2Rlc3Ryb3ksYT1pLmFmdGVyX3VwZGF0ZTtvJiZvLm0oZSxuKSxWKChmdW5jdGlvbigpe3ZhciBlPXIubWFwKF8pLmZpbHRlcihiKTtzP3MucHVzaC5hcHBseShzLG0oZSkpOngoZSksdC4kJC5vbl9tb3VudD1bXX0pKSxhLmZvckVhY2goVil9ZnVuY3Rpb24gcHQodCxlKXt2YXIgbj10LiQkO251bGwhPT1uLmZyYWdtZW50JiYoeChuLm9uX2Rlc3Ryb3kpLG4uZnJhZ21lbnQmJm4uZnJhZ21lbnQuZChlKSxuLm9uX2Rlc3Ryb3k9bi5mcmFnbWVudD1udWxsLG4uY3R4PVtdKX1mdW5jdGlvbiBtdCh0LGUpey0xPT09dC4kJC5kaXJ0eVswXSYmKHEucHVzaCh0KSxLKCksdC4kJC5kaXJ0eS5maWxsKDApKSx0LiQkLmRpcnR5W2UvMzF8MF18PTE8PGUlMzF9dmFyIHZ0PWZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCgpe24odGhpcyx0KX1yZXR1cm4gbyh0LFt7a2V5OlwiJGRlc3Ryb3lcIix2YWx1ZTpmdW5jdGlvbigpe3B0KHRoaXMsMSksdGhpcy4kZGVzdHJveT1nfX0se2tleTpcIiRvblwiLHZhbHVlOmZ1bmN0aW9uKHQsZSl7dmFyIG49dGhpcy4kJC5jYWxsYmFja3NbdF18fCh0aGlzLiQkLmNhbGxiYWNrc1t0XT1bXSk7cmV0dXJuIG4ucHVzaChlKSxmdW5jdGlvbigpe3ZhciB0PW4uaW5kZXhPZihlKTstMSE9PXQmJm4uc3BsaWNlKHQsMSl9fX0se2tleTpcIiRzZXRcIix2YWx1ZTpmdW5jdGlvbih0KXt2YXIgZTt0aGlzLiQkc2V0JiYoZT10LDAhPT1PYmplY3Qua2V5cyhlKS5sZW5ndGgpJiYodGhpcy4kJC5za2lwX2JvdW5kPSEwLHRoaXMuJCRzZXQodCksdGhpcy4kJC5za2lwX2JvdW5kPSExKX19XSksdH0oKSx5dD1mdW5jdGlvbigpe2Z1bmN0aW9uIHQoZSl7aWYobih0aGlzLHQpLE9iamVjdC5hc3NpZ24odGhpcyx7ZGlyMTpudWxsLGRpcjI6bnVsbCxmaXJzdHBvczE6bnVsbCxmaXJzdHBvczI6bnVsbCxzcGFjaW5nMToyNSxzcGFjaW5nMjoyNSxwdXNoOlwiYm90dG9tXCIsbWF4T3BlbjoxLG1heFN0cmF0ZWd5Olwid2FpdFwiLG1heENsb3N1cmVDYXVzZXNXYWl0OiEwLG1vZGFsOlwiaXNoXCIsbW9kYWxpc2hGbGFzaDohMCxvdmVybGF5Q2xvc2U6ITAsb3ZlcmxheUNsb3Nlc1Bpbm5lZDohMSxwb3NpdGlvbmVkOiEwLGNvbnRleHQ6d2luZG93JiZkb2N1bWVudC5ib2R5fHxudWxsfSxlKSxcImlzaFwiPT09dGhpcy5tb2RhbCYmMSE9PXRoaXMubWF4T3Blbil0aHJvdyBuZXcgRXJyb3IoXCJBIG1vZGFsaXNoIHN0YWNrIG11c3QgaGF2ZSBhIG1heE9wZW4gdmFsdWUgb2YgMS5cIik7aWYoXCJpc2hcIj09PXRoaXMubW9kYWwmJiF0aGlzLmRpcjEpdGhyb3cgbmV3IEVycm9yKFwiQSBtb2RhbGlzaCBzdGFjayBtdXN0IGhhdmUgYSBkaXJlY3Rpb24uXCIpO2lmKFwidG9wXCI9PT10aGlzLnB1c2gmJlwiaXNoXCI9PT10aGlzLm1vZGFsJiZcImNsb3NlXCIhPT10aGlzLm1heFN0cmF0ZWd5KXRocm93IG5ldyBFcnJvcihcIkEgbW9kYWxpc2ggc3RhY2sgdGhhdCBwdXNoZXMgdG8gdGhlIHRvcCBtdXN0IHVzZSB0aGUgY2xvc2UgbWF4U3RyYXRlZ3kuXCIpO3RoaXMuX25vdGljZUhlYWQ9e25vdGljZTpudWxsLHByZXY6bnVsbCxuZXh0Om51bGx9LHRoaXMuX25vdGljZVRhaWw9e25vdGljZTpudWxsLHByZXY6dGhpcy5fbm90aWNlSGVhZCxuZXh0Om51bGx9LHRoaXMuX25vdGljZUhlYWQubmV4dD10aGlzLl9ub3RpY2VUYWlsLHRoaXMuX25vdGljZU1hcD1uZXcgV2Vha01hcCx0aGlzLl9sZW5ndGg9MCx0aGlzLl9hZGRwb3MyPTAsdGhpcy5fYW5pbWF0aW9uPSEwLHRoaXMuX3Bvc1RpbWVyPW51bGwsdGhpcy5fb3Blbk5vdGljZXM9MCx0aGlzLl9saXN0ZW5lcj1udWxsLHRoaXMuX292ZXJsYXlPcGVuPSExLHRoaXMuX292ZXJsYXlJbnNlcnRlZD0hMSx0aGlzLl9jb2xsYXBzaW5nTW9kYWxTdGF0ZT0hMSx0aGlzLl9sZWFkZXI9bnVsbCx0aGlzLl9sZWFkZXJPZmY9bnVsbCx0aGlzLl9tYXNraW5nPW51bGwsdGhpcy5fbWFza2luZ09mZj1udWxsLHRoaXMuX3N3YXBwaW5nPSExLHRoaXMuX2NhbGxiYWNrcz17fX1yZXR1cm4gbyh0LFt7a2V5OlwiZm9yRWFjaFwiLHZhbHVlOmZ1bmN0aW9uKHQpe3ZhciBlLG49YXJndW1lbnRzLmxlbmd0aD4xJiZ2b2lkIDAhPT1hcmd1bWVudHNbMV0/YXJndW1lbnRzWzFdOnt9LGk9bi5zdGFydCxvPXZvaWQgMD09PWk/XCJvbGRlc3RcIjppLHI9bi5kaXIscz12b2lkIDA9PT1yP1wibmV3ZXJcIjpyLGE9bi5za2lwTW9kdWxlSGFuZGxlZCxjPXZvaWQgMCE9PWEmJmE7aWYoXCJoZWFkXCI9PT1vfHxcIm5ld2VzdFwiPT09byYmXCJ0b3BcIj09PXRoaXMucHVzaHx8XCJvbGRlc3RcIj09PW8mJlwiYm90dG9tXCI9PT10aGlzLnB1c2gpZT10aGlzLl9ub3RpY2VIZWFkLm5leHQ7ZWxzZSBpZihcInRhaWxcIj09PW98fFwibmV3ZXN0XCI9PT1vJiZcImJvdHRvbVwiPT09dGhpcy5wdXNofHxcIm9sZGVzdFwiPT09byYmXCJ0b3BcIj09PXRoaXMucHVzaCllPXRoaXMuX25vdGljZVRhaWwucHJldjtlbHNle2lmKCF0aGlzLl9ub3RpY2VNYXAuaGFzKG8pKXRocm93IG5ldyBFcnJvcihcIkludmFsaWQgc3RhcnQgcGFyYW0uXCIpO2U9dGhpcy5fbm90aWNlTWFwLmdldChvKX1mb3IoO2Uubm90aWNlOyl7dmFyIGw9ZS5ub3RpY2U7aWYoXCJwcmV2XCI9PT1zfHxcInRvcFwiPT09dGhpcy5wdXNoJiZcIm5ld2VyXCI9PT1zfHxcImJvdHRvbVwiPT09dGhpcy5wdXNoJiZcIm9sZGVyXCI9PT1zKWU9ZS5wcmV2O2Vsc2V7aWYoIShcIm5leHRcIj09PXN8fFwidG9wXCI9PT10aGlzLnB1c2gmJlwib2xkZXJcIj09PXN8fFwiYm90dG9tXCI9PT10aGlzLnB1c2gmJlwibmV3ZXJcIj09PXMpKXRocm93IG5ldyBFcnJvcihcIkludmFsaWQgZGlyIHBhcmFtLlwiKTtlPWUubmV4dH1pZighKGMmJmwuZ2V0TW9kdWxlSGFuZGxlZCgpfHwhMSE9PXQobCkpKWJyZWFrfX19LHtrZXk6XCJjbG9zZVwiLHZhbHVlOmZ1bmN0aW9uKHQpe3RoaXMuZm9yRWFjaCgoZnVuY3Rpb24oZSl7cmV0dXJuIGUuY2xvc2UodCwhMSwhMSl9KSl9fSx7a2V5Olwib3BlblwiLHZhbHVlOmZ1bmN0aW9uKHQpe3RoaXMuZm9yRWFjaCgoZnVuY3Rpb24oZSl7cmV0dXJuIGUub3Blbih0KX0pKX19LHtrZXk6XCJvcGVuTGFzdFwiLHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy5mb3JFYWNoKChmdW5jdGlvbih0KXtpZigtMT09PVtcIm9wZW5pbmdcIixcIm9wZW5cIixcIndhaXRpbmdcIl0uaW5kZXhPZih0LmdldFN0YXRlKCkpKXJldHVybiB0Lm9wZW4oKSwhMX0pLHtzdGFydDpcIm5ld2VzdFwiLGRpcjpcIm9sZGVyXCJ9KX19LHtrZXk6XCJzd2FwXCIsdmFsdWU6ZnVuY3Rpb24odCxlKXt2YXIgbj10aGlzLGk9YXJndW1lbnRzLmxlbmd0aD4yJiZ2b2lkIDAhPT1hcmd1bWVudHNbMl0mJmFyZ3VtZW50c1syXSxvPWFyZ3VtZW50cy5sZW5ndGg+MyYmdm9pZCAwIT09YXJndW1lbnRzWzNdJiZhcmd1bWVudHNbM107cmV0dXJuLTE9PT1bXCJvcGVuXCIsXCJvcGVuaW5nXCIsXCJjbG9zaW5nXCJdLmluZGV4T2YodC5nZXRTdGF0ZSgpKT9Qcm9taXNlLnJlamVjdCgpOih0aGlzLl9zd2FwcGluZz1lLHQuY2xvc2UoaSwhMSxvKS50aGVuKChmdW5jdGlvbigpe3JldHVybiBlLm9wZW4oaSl9KSkuZmluYWxseSgoZnVuY3Rpb24oKXtuLl9zd2FwcGluZz0hMX0pKSl9fSx7a2V5Olwib25cIix2YWx1ZTpmdW5jdGlvbih0LGUpe3ZhciBuPXRoaXM7cmV0dXJuIHQgaW4gdGhpcy5fY2FsbGJhY2tzfHwodGhpcy5fY2FsbGJhY2tzW3RdPVtdKSx0aGlzLl9jYWxsYmFja3NbdF0ucHVzaChlKSxmdW5jdGlvbigpe24uX2NhbGxiYWNrc1t0XS5zcGxpY2Uobi5fY2FsbGJhY2tzW3RdLmluZGV4T2YoZSksMSl9fX0se2tleTpcImZpcmVcIix2YWx1ZTpmdW5jdGlvbih0KXt2YXIgZT1hcmd1bWVudHMubGVuZ3RoPjEmJnZvaWQgMCE9PWFyZ3VtZW50c1sxXT9hcmd1bWVudHNbMV06e307ZS5zdGFjaz10aGlzLHQgaW4gdGhpcy5fY2FsbGJhY2tzJiZ0aGlzLl9jYWxsYmFja3NbdF0uZm9yRWFjaCgoZnVuY3Rpb24odCl7cmV0dXJuIHQoZSl9KSl9fSx7a2V5OlwicG9zaXRpb25cIix2YWx1ZTpmdW5jdGlvbigpe3ZhciB0PXRoaXM7dGhpcy5wb3NpdGlvbmVkJiZ0aGlzLl9sZW5ndGg+MD8odGhpcy5maXJlKFwiYmVmb3JlUG9zaXRpb25cIiksdGhpcy5fcmVzZXRQb3NpdGlvbkRhdGEoKSx0aGlzLmZvckVhY2goKGZ1bmN0aW9uKGUpe3QuX3Bvc2l0aW9uTm90aWNlKGUpfSkse3N0YXJ0OlwiaGVhZFwiLGRpcjpcIm5leHRcIixza2lwTW9kdWxlSGFuZGxlZDohMH0pLHRoaXMuZmlyZShcImFmdGVyUG9zaXRpb25cIikpOihkZWxldGUgdGhpcy5fbmV4dHBvczEsZGVsZXRlIHRoaXMuX25leHRwb3MyKX19LHtrZXk6XCJxdWV1ZVBvc2l0aW9uXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgdD10aGlzLGU9YXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0/YXJndW1lbnRzWzBdOjEwO3RoaXMuX3Bvc1RpbWVyJiZjbGVhclRpbWVvdXQodGhpcy5fcG9zVGltZXIpLHRoaXMuX3Bvc1RpbWVyPXNldFRpbWVvdXQoKGZ1bmN0aW9uKCl7cmV0dXJuIHQucG9zaXRpb24oKX0pLGUpfX0se2tleTpcIl9yZXNldFBvc2l0aW9uRGF0YVwiLHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy5fbmV4dHBvczE9dGhpcy5maXJzdHBvczEsdGhpcy5fbmV4dHBvczI9dGhpcy5maXJzdHBvczIsdGhpcy5fYWRkcG9zMj0wfX0se2tleTpcIl9wb3NpdGlvbk5vdGljZVwiLHZhbHVlOmZ1bmN0aW9uKHQpe3ZhciBlPWFyZ3VtZW50cy5sZW5ndGg+MSYmdm9pZCAwIT09YXJndW1lbnRzWzFdP2FyZ3VtZW50c1sxXTp0PT09dGhpcy5fbWFza2luZztpZih0aGlzLnBvc2l0aW9uZWQpe3ZhciBuPXQucmVmcy5lbGVtO2lmKG4mJihuLmNsYXNzTGlzdC5jb250YWlucyhcInBub3RpZnktaW5cIil8fG4uY2xhc3NMaXN0LmNvbnRhaW5zKFwicG5vdGlmeS1pbml0aWFsXCIpfHxlKSl7dmFyIGk9W3RoaXMuZmlyc3Rwb3MxLHRoaXMuZmlyc3Rwb3MyLHRoaXMuX25leHRwb3MxLHRoaXMuX25leHRwb3MyLHRoaXMuX2FkZHBvczJdLG89aVswXSxyPWlbMV0scz1pWzJdLGE9aVszXSxjPWlbNF07bi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSwhdGhpcy5fYW5pbWF0aW9ufHxlfHx0aGlzLl9jb2xsYXBzaW5nTW9kYWxTdGF0ZT90Ll9zZXRNb3ZlQ2xhc3MoXCJcIik6dC5fc2V0TW92ZUNsYXNzKFwicG5vdGlmeS1tb3ZlXCIpO3ZhciBsLHU9dGhpcy5jb250ZXh0PT09ZG9jdW1lbnQuYm9keT93aW5kb3cuaW5uZXJIZWlnaHQ6dGhpcy5jb250ZXh0LnNjcm9sbEhlaWdodCxmPXRoaXMuY29udGV4dD09PWRvY3VtZW50LmJvZHk/d2luZG93LmlubmVyV2lkdGg6dGhpcy5jb250ZXh0LnNjcm9sbFdpZHRoO2lmKHRoaXMuZGlyMSl7dmFyIGQ7c3dpdGNoKGw9e2Rvd246XCJ0b3BcIix1cDpcImJvdHRvbVwiLGxlZnQ6XCJyaWdodFwiLHJpZ2h0OlwibGVmdFwifVt0aGlzLmRpcjFdLHRoaXMuZGlyMSl7Y2FzZVwiZG93blwiOmQ9bi5vZmZzZXRUb3A7YnJlYWs7Y2FzZVwidXBcIjpkPXUtbi5zY3JvbGxIZWlnaHQtbi5vZmZzZXRUb3A7YnJlYWs7Y2FzZVwibGVmdFwiOmQ9Zi1uLnNjcm9sbFdpZHRoLW4ub2Zmc2V0TGVmdDticmVhaztjYXNlXCJyaWdodFwiOmQ9bi5vZmZzZXRMZWZ0fW51bGw9PW8mJihzPW89ZCl9aWYodGhpcy5kaXIxJiZ0aGlzLmRpcjIpe3ZhciBoLHA9e2Rvd246XCJ0b3BcIix1cDpcImJvdHRvbVwiLGxlZnQ6XCJyaWdodFwiLHJpZ2h0OlwibGVmdFwifVt0aGlzLmRpcjJdO3N3aXRjaCh0aGlzLmRpcjIpe2Nhc2VcImRvd25cIjpoPW4ub2Zmc2V0VG9wO2JyZWFrO2Nhc2VcInVwXCI6aD11LW4uc2Nyb2xsSGVpZ2h0LW4ub2Zmc2V0VG9wO2JyZWFrO2Nhc2VcImxlZnRcIjpoPWYtbi5zY3JvbGxXaWR0aC1uLm9mZnNldExlZnQ7YnJlYWs7Y2FzZVwicmlnaHRcIjpoPW4ub2Zmc2V0TGVmdH1pZihudWxsPT1yJiYoYT1yPWgpLCFlKXt2YXIgbT1zK24ub2Zmc2V0SGVpZ2h0K3RoaXMuc3BhY2luZzEsdj1zK24ub2Zmc2V0V2lkdGgrdGhpcy5zcGFjaW5nMTsoKFwiZG93blwiPT09dGhpcy5kaXIxfHxcInVwXCI9PT10aGlzLmRpcjEpJiZtPnV8fChcImxlZnRcIj09PXRoaXMuZGlyMXx8XCJyaWdodFwiPT09dGhpcy5kaXIxKSYmdj5mKSYmKHM9byxhKz1jK3RoaXMuc3BhY2luZzIsYz0wKX1zd2l0Y2gobnVsbCE9YSYmKG4uc3R5bGVbcF09XCJcIi5jb25jYXQoYSxcInB4XCIpLHRoaXMuX2FuaW1hdGlvbnx8bi5zdHlsZVtwXSksdGhpcy5kaXIyKXtjYXNlXCJkb3duXCI6Y2FzZVwidXBcIjpuLm9mZnNldEhlaWdodCsocGFyc2VGbG9hdChuLnN0eWxlLm1hcmdpblRvcCwxMCl8fDApKyhwYXJzZUZsb2F0KG4uc3R5bGUubWFyZ2luQm90dG9tLDEwKXx8MCk+YyYmKGM9bi5vZmZzZXRIZWlnaHQpO2JyZWFrO2Nhc2VcImxlZnRcIjpjYXNlXCJyaWdodFwiOm4ub2Zmc2V0V2lkdGgrKHBhcnNlRmxvYXQobi5zdHlsZS5tYXJnaW5MZWZ0LDEwKXx8MCkrKHBhcnNlRmxvYXQobi5zdHlsZS5tYXJnaW5SaWdodCwxMCl8fDApPmMmJihjPW4ub2Zmc2V0V2lkdGgpfX1lbHNlIGlmKHRoaXMuZGlyMSl7dmFyIHksZztzd2l0Y2godGhpcy5kaXIxKXtjYXNlXCJkb3duXCI6Y2FzZVwidXBcIjpnPVtcImxlZnRcIixcInJpZ2h0XCJdLHk9dGhpcy5jb250ZXh0LnNjcm9sbFdpZHRoLzItbi5vZmZzZXRXaWR0aC8yO2JyZWFrO2Nhc2VcImxlZnRcIjpjYXNlXCJyaWdodFwiOmc9W1widG9wXCIsXCJib3R0b21cIl0seT11LzItbi5vZmZzZXRIZWlnaHQvMn1uLnN0eWxlW2dbMF1dPVwiXCIuY29uY2F0KHksXCJweFwiKSxuLnN0eWxlW2dbMV1dPVwiYXV0b1wiLHRoaXMuX2FuaW1hdGlvbnx8bi5zdHlsZVtnWzBdXX1pZih0aGlzLmRpcjEpc3dpdGNoKG51bGwhPXMmJihuLnN0eWxlW2xdPVwiXCIuY29uY2F0KHMsXCJweFwiKSx0aGlzLl9hbmltYXRpb258fG4uc3R5bGVbbF0pLHRoaXMuZGlyMSl7Y2FzZVwiZG93blwiOmNhc2VcInVwXCI6cys9bi5vZmZzZXRIZWlnaHQrdGhpcy5zcGFjaW5nMTticmVhaztjYXNlXCJsZWZ0XCI6Y2FzZVwicmlnaHRcIjpzKz1uLm9mZnNldFdpZHRoK3RoaXMuc3BhY2luZzF9ZWxzZXt2YXIgJD1mLzItbi5vZmZzZXRXaWR0aC8yLF89dS8yLW4ub2Zmc2V0SGVpZ2h0LzI7bi5zdHlsZS5sZWZ0PVwiXCIuY29uY2F0KCQsXCJweFwiKSxuLnN0eWxlLnRvcD1cIlwiLmNvbmNhdChfLFwicHhcIiksdGhpcy5fYW5pbWF0aW9ufHxuLnN0eWxlLmxlZnR9ZXx8KHRoaXMuZmlyc3Rwb3MxPW8sdGhpcy5maXJzdHBvczI9cix0aGlzLl9uZXh0cG9zMT1zLHRoaXMuX25leHRwb3MyPWEsdGhpcy5fYWRkcG9zMj1jKX19fX0se2tleTpcIl9hZGROb3RpY2VcIix2YWx1ZTpmdW5jdGlvbih0KXt2YXIgZT10aGlzO3RoaXMuZmlyZShcImJlZm9yZUFkZE5vdGljZVwiLHtub3RpY2U6dH0pO3ZhciBuPWZ1bmN0aW9uKCl7aWYoZS5maXJlKFwiYmVmb3JlT3Blbk5vdGljZVwiLHtub3RpY2U6dH0pLHQuZ2V0TW9kdWxlSGFuZGxlZCgpKWUuZmlyZShcImFmdGVyT3Blbk5vdGljZVwiLHtub3RpY2U6dH0pO2Vsc2V7aWYoZS5fb3Blbk5vdGljZXMrKywoXCJpc2hcIiE9PWUubW9kYWx8fCFlLl9vdmVybGF5T3BlbikmJmUubWF4T3BlbiE9PTEvMCYmZS5fb3Blbk5vdGljZXM+ZS5tYXhPcGVuJiZcImNsb3NlXCI9PT1lLm1heFN0cmF0ZWd5KXt2YXIgbj1lLl9vcGVuTm90aWNlcy1lLm1heE9wZW47ZS5mb3JFYWNoKChmdW5jdGlvbih0KXtpZigtMSE9PVtcIm9wZW5pbmdcIixcIm9wZW5cIl0uaW5kZXhPZih0LmdldFN0YXRlKCkpKXJldHVybiB0LmNsb3NlKCExLCExLGUubWF4Q2xvc3VyZUNhdXNlc1dhaXQpLHQ9PT1lLl9sZWFkZXImJmUuX3NldExlYWRlcihudWxsKSwhIS0tbn0pKX0hMD09PWUubW9kYWwmJmUuX2luc2VydE92ZXJsYXkoKSxcImlzaFwiIT09ZS5tb2RhbHx8ZS5fbGVhZGVyJiYtMSE9PVtcIm9wZW5pbmdcIixcIm9wZW5cIixcImNsb3NpbmdcIl0uaW5kZXhPZihlLl9sZWFkZXIuZ2V0U3RhdGUoKSl8fGUuX3NldExlYWRlcih0KSxcImlzaFwiPT09ZS5tb2RhbCYmZS5fb3ZlcmxheU9wZW4mJnQuX3ByZXZlbnRUaW1lckNsb3NlKCEwKSxlLmZpcmUoXCJhZnRlck9wZW5Ob3RpY2VcIix7bm90aWNlOnR9KX19LGk9e25vdGljZTp0LHByZXY6bnVsbCxuZXh0Om51bGwsYmVmb3JlT3Blbk9mZjp0Lm9uKFwicG5vdGlmeTpiZWZvcmVPcGVuXCIsbiksYWZ0ZXJDbG9zZU9mZjp0Lm9uKFwicG5vdGlmeTphZnRlckNsb3NlXCIsKGZ1bmN0aW9uKCl7aWYoZS5maXJlKFwiYmVmb3JlQ2xvc2VOb3RpY2VcIix7bm90aWNlOnR9KSx0LmdldE1vZHVsZUhhbmRsZWQoKSllLmZpcmUoXCJhZnRlckNsb3NlTm90aWNlXCIse25vdGljZTp0fSk7ZWxzZXtpZihlLl9vcGVuTm90aWNlcy0tLFwiaXNoXCI9PT1lLm1vZGFsJiZ0PT09ZS5fbGVhZGVyJiYoZS5fc2V0TGVhZGVyKG51bGwpLGUuX21hc2tpbmcmJmUuX3NldE1hc2tpbmcobnVsbCkpLCFlLl9zd2FwcGluZyYmZS5tYXhPcGVuIT09MS8wJiZlLl9vcGVuTm90aWNlczxlLm1heE9wZW4pe3ZhciBuPSExLGk9ZnVuY3Rpb24oaSl7aWYoaSE9PXQmJlwid2FpdGluZ1wiPT09aS5nZXRTdGF0ZSgpJiYoaS5vcGVuKCkuY2F0Y2goKGZ1bmN0aW9uKCl7fSkpLGUuX29wZW5Ob3RpY2VzPj1lLm1heE9wZW4pKXJldHVybiBuPSEwLCExfTtcIndhaXRcIj09PWUubWF4U3RyYXRlZ3k/KGUuZm9yRWFjaChpLHtzdGFydDp0LGRpcjpcIm5leHRcIn0pLG58fGUuZm9yRWFjaChpLHtzdGFydDp0LGRpcjpcInByZXZcIn0pKTpcImNsb3NlXCI9PT1lLm1heFN0cmF0ZWd5JiZlLm1heENsb3N1cmVDYXVzZXNXYWl0JiYoZS5mb3JFYWNoKGkse3N0YXJ0OnQsZGlyOlwib2xkZXJcIn0pLG58fGUuZm9yRWFjaChpLHtzdGFydDp0LGRpcjpcIm5ld2VyXCJ9KSl9ZS5fb3Blbk5vdGljZXM8PTA/KGUuX29wZW5Ob3RpY2VzPTAsZS5fcmVzZXRQb3NpdGlvbkRhdGEoKSxlLl9vdmVybGF5T3BlbiYmIWUuX3N3YXBwaW5nJiZlLl9yZW1vdmVPdmVybGF5KCkpOmUuX2NvbGxhcHNpbmdNb2RhbFN0YXRlfHxlLnF1ZXVlUG9zaXRpb24oMCksZS5maXJlKFwiYWZ0ZXJDbG9zZU5vdGljZVwiLHtub3RpY2U6dH0pfX0pKX07aWYoXCJ0b3BcIj09PXRoaXMucHVzaD8oaS5uZXh0PXRoaXMuX25vdGljZUhlYWQubmV4dCxpLnByZXY9dGhpcy5fbm90aWNlSGVhZCxpLm5leHQucHJldj1pLGkucHJldi5uZXh0PWkpOihpLnByZXY9dGhpcy5fbm90aWNlVGFpbC5wcmV2LGkubmV4dD10aGlzLl9ub3RpY2VUYWlsLGkucHJldi5uZXh0PWksaS5uZXh0LnByZXY9aSksdGhpcy5fbm90aWNlTWFwLnNldCh0LGkpLHRoaXMuX2xlbmd0aCsrLHRoaXMuX2xpc3RlbmVyfHwodGhpcy5fbGlzdGVuZXI9ZnVuY3Rpb24oKXtyZXR1cm4gZS5wb3NpdGlvbigpfSx0aGlzLmNvbnRleHQuYWRkRXZlbnRMaXN0ZW5lcihcInBub3RpZnk6cG9zaXRpb25cIix0aGlzLl9saXN0ZW5lcikpLC0xIT09W1wib3BlblwiLFwib3BlbmluZ1wiLFwiY2xvc2luZ1wiXS5pbmRleE9mKHQuZ2V0U3RhdGUoKSkpbigpO2Vsc2UgaWYoXCJpc2hcIj09PXRoaXMubW9kYWwmJnRoaXMubW9kYWxpc2hGbGFzaCYmdGhpcy5fc2hvdWxkTm90aWNlV2FpdCh0KSl2YXIgbz10Lm9uKFwicG5vdGlmeTptb3VudFwiLChmdW5jdGlvbigpe28oKSx0Ll9zZXRNYXNraW5nKCEwLCExLChmdW5jdGlvbigpe3QuX3NldE1hc2tpbmcoITEpfSkpLGUuX3Jlc2V0UG9zaXRpb25EYXRhKCksZS5fcG9zaXRpb25Ob3RpY2UoZS5fbGVhZGVyKSx3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKChmdW5jdGlvbigpe2UuX3Bvc2l0aW9uTm90aWNlKHQsITApfSkpfSkpO3RoaXMuZmlyZShcImFmdGVyQWRkTm90aWNlXCIse25vdGljZTp0fSl9fSx7a2V5OlwiX3JlbW92ZU5vdGljZVwiLHZhbHVlOmZ1bmN0aW9uKHQpe2lmKHRoaXMuX25vdGljZU1hcC5oYXModCkpe3RoaXMuZmlyZShcImJlZm9yZVJlbW92ZU5vdGljZVwiLHtub3RpY2U6dH0pO3ZhciBlPXRoaXMuX25vdGljZU1hcC5nZXQodCk7dGhpcy5fbGVhZGVyPT09dCYmdGhpcy5fc2V0TGVhZGVyKG51bGwpLHRoaXMuX21hc2tpbmc9PT10JiZ0aGlzLl9zZXRNYXNraW5nKG51bGwpLGUucHJldi5uZXh0PWUubmV4dCxlLm5leHQucHJldj1lLnByZXYsZS5wcmV2PW51bGwsZS5uZXh0PW51bGwsZS5iZWZvcmVPcGVuT2ZmKCksZS5iZWZvcmVPcGVuT2ZmPW51bGwsZS5hZnRlckNsb3NlT2ZmKCksZS5hZnRlckNsb3NlT2ZmPW51bGwsdGhpcy5fbm90aWNlTWFwLmRlbGV0ZSh0KSx0aGlzLl9sZW5ndGgtLSwhdGhpcy5fbGVuZ3RoJiZ0aGlzLl9saXN0ZW5lciYmKHRoaXMuY29udGV4dC5yZW1vdmVFdmVudExpc3RlbmVyKFwicG5vdGlmeTpwb3NpdGlvblwiLHRoaXMuX2xpc3RlbmVyKSx0aGlzLl9saXN0ZW5lcj1udWxsKSwhdGhpcy5fbGVuZ3RoJiZ0aGlzLl9vdmVybGF5T3BlbiYmdGhpcy5fcmVtb3ZlT3ZlcmxheSgpLC0xIT09W1wib3BlblwiLFwib3BlbmluZ1wiLFwiY2xvc2luZ1wiXS5pbmRleE9mKHQuZ2V0U3RhdGUoKSkmJnRoaXMuX2hhbmRsZU5vdGljZUNsb3NlZCh0KSx0aGlzLmZpcmUoXCJhZnRlclJlbW92ZU5vdGljZVwiLHtub3RpY2U6dH0pfX19LHtrZXk6XCJfc2V0TGVhZGVyXCIsdmFsdWU6ZnVuY3Rpb24odCl7dmFyIGU9dGhpcztpZih0aGlzLmZpcmUoXCJiZWZvcmVTZXRMZWFkZXJcIix7bGVhZGVyOnR9KSx0aGlzLl9sZWFkZXJPZmYmJih0aGlzLl9sZWFkZXJPZmYoKSx0aGlzLl9sZWFkZXJPZmY9bnVsbCksdGhpcy5fbGVhZGVyPXQsdGhpcy5fbGVhZGVyKXt2YXIgbixpPWZ1bmN0aW9uKCl7dmFyIHQ9bnVsbDtlLl9vdmVybGF5T3BlbiYmKGUuX2NvbGxhcHNpbmdNb2RhbFN0YXRlPSEwLGUuZm9yRWFjaCgoZnVuY3Rpb24obil7bi5fcHJldmVudFRpbWVyQ2xvc2UoITEpLG4hPT1lLl9sZWFkZXImJi0xIT09W1wib3BlbmluZ1wiLFwib3BlblwiXS5pbmRleE9mKG4uZ2V0U3RhdGUoKSkmJih0fHwodD1uKSxuLmNsb3NlKG49PT10LCExLCEwKSl9KSx7c3RhcnQ6ZS5fbGVhZGVyLGRpcjpcIm5leHRcIixza2lwTW9kdWxlSGFuZGxlZDohMH0pLGUuX3JlbW92ZU92ZXJsYXkoKSksbyYmKGNsZWFyVGltZW91dChvKSxvPW51bGwpLGUuZm9yRWFjaCgoZnVuY3Rpb24obil7aWYobiE9PWUuX2xlYWRlcilyZXR1cm5cIndhaXRpbmdcIj09PW4uZ2V0U3RhdGUoKXx8bj09PXQ/KGUuX3NldE1hc2tpbmcobiwhIXQpLCExKTp2b2lkIDB9KSx7c3RhcnQ6ZS5fbGVhZGVyLGRpcjpcIm5leHRcIixza2lwTW9kdWxlSGFuZGxlZDohMH0pfSxvPW51bGwscj1mdW5jdGlvbigpe28mJihjbGVhclRpbWVvdXQobyksbz1udWxsKSxvPXNldFRpbWVvdXQoKGZ1bmN0aW9uKCl7bz1udWxsLGUuX3NldE1hc2tpbmcobnVsbCl9KSw3NTApfTt0aGlzLl9sZWFkZXJPZmY9KG49W3RoaXMuX2xlYWRlci5vbihcIm1vdXNlZW50ZXJcIixpKSx0aGlzLl9sZWFkZXIub24oXCJmb2N1c2luXCIsaSksdGhpcy5fbGVhZGVyLm9uKFwibW91c2VsZWF2ZVwiLHIpLHRoaXMuX2xlYWRlci5vbihcImZvY3Vzb3V0XCIscildLGZ1bmN0aW9uKCl7cmV0dXJuIG4ubWFwKChmdW5jdGlvbih0KXtyZXR1cm4gdCgpfSkpfSksdGhpcy5maXJlKFwiYWZ0ZXJTZXRMZWFkZXJcIix7bGVhZGVyOnR9KX1lbHNlIHRoaXMuZmlyZShcImFmdGVyU2V0TGVhZGVyXCIse2xlYWRlcjp0fSl9fSx7a2V5OlwiX3NldE1hc2tpbmdcIix2YWx1ZTpmdW5jdGlvbih0LGUpe3ZhciBuPXRoaXM7aWYodGhpcy5fbWFza2luZyl7aWYodGhpcy5fbWFza2luZz09PXQpcmV0dXJuO3RoaXMuX21hc2tpbmcuX3NldE1hc2tpbmcoITEsZSl9aWYodGhpcy5fbWFza2luZ09mZiYmKHRoaXMuX21hc2tpbmdPZmYoKSx0aGlzLl9tYXNraW5nT2ZmPW51bGwpLHRoaXMuX21hc2tpbmc9dCx0aGlzLl9tYXNraW5nKXt0aGlzLl9yZXNldFBvc2l0aW9uRGF0YSgpLHRoaXMuX2xlYWRlciYmdGhpcy5fcG9zaXRpb25Ob3RpY2UodGhpcy5fbGVhZGVyKSx0aGlzLl9tYXNraW5nLl9zZXRNYXNraW5nKCEwLGUpLHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKGZ1bmN0aW9uKCl7bi5fbWFza2luZyYmbi5fcG9zaXRpb25Ob3RpY2Uobi5fbWFza2luZyl9KSk7dmFyIGksbz1mdW5jdGlvbigpe1wiaXNoXCI9PT1uLm1vZGFsJiYobi5faW5zZXJ0T3ZlcmxheSgpLG4uX3NldE1hc2tpbmcobnVsbCwhMCksbi5mb3JFYWNoKChmdW5jdGlvbih0KXt0Ll9wcmV2ZW50VGltZXJDbG9zZSghMCksXCJ3YWl0aW5nXCI9PT10LmdldFN0YXRlKCkmJnQub3BlbigpfSkse3N0YXJ0Om4uX2xlYWRlcixkaXI6XCJuZXh0XCIsc2tpcE1vZHVsZUhhbmRsZWQ6ITB9KSl9O3RoaXMuX21hc2tpbmdPZmY9KGk9W3RoaXMuX21hc2tpbmcub24oXCJtb3VzZWVudGVyXCIsbyksdGhpcy5fbWFza2luZy5vbihcImZvY3VzaW5cIixvKV0sZnVuY3Rpb24oKXtyZXR1cm4gaS5tYXAoKGZ1bmN0aW9uKHQpe3JldHVybiB0KCl9KSl9KX19fSx7a2V5OlwiX3Nob3VsZE5vdGljZVdhaXRcIix2YWx1ZTpmdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5fc3dhcHBpbmchPT10JiYhKFwiaXNoXCI9PT10aGlzLm1vZGFsJiZ0aGlzLl9vdmVybGF5T3BlbikmJnRoaXMubWF4T3BlbiE9PTEvMCYmdGhpcy5fb3Blbk5vdGljZXM+PXRoaXMubWF4T3BlbiYmXCJ3YWl0XCI9PT10aGlzLm1heFN0cmF0ZWd5fX0se2tleTpcIl9pbnNlcnRPdmVybGF5XCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgdD10aGlzO3RoaXMuX292ZXJsYXl8fCh0aGlzLl9vdmVybGF5PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksdGhpcy5fb3ZlcmxheS5jbGFzc0xpc3QuYWRkKFwicG5vdGlmeS1tb2RhbC1vdmVybGF5XCIpLHRoaXMuZGlyMSYmdGhpcy5fb3ZlcmxheS5jbGFzc0xpc3QuYWRkKFwicG5vdGlmeS1tb2RhbC1vdmVybGF5LVwiLmNvbmNhdCh0aGlzLmRpcjEpKSx0aGlzLm92ZXJsYXlDbG9zZSYmdGhpcy5fb3ZlcmxheS5jbGFzc0xpc3QuYWRkKFwicG5vdGlmeS1tb2RhbC1vdmVybGF5LWNsb3Nlc1wiKSx0aGlzLmNvbnRleHQhPT1kb2N1bWVudC5ib2R5JiYodGhpcy5fb3ZlcmxheS5zdHlsZS5oZWlnaHQ9XCJcIi5jb25jYXQodGhpcy5jb250ZXh0LnNjcm9sbEhlaWdodCxcInB4XCIpLHRoaXMuX292ZXJsYXkuc3R5bGUud2lkdGg9XCJcIi5jb25jYXQodGhpcy5jb250ZXh0LnNjcm9sbFdpZHRoLFwicHhcIikpLHRoaXMuX292ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKGZ1bmN0aW9uKGUpe2lmKHQub3ZlcmxheUNsb3NlKXtpZih0LmZpcmUoXCJvdmVybGF5Q2xvc2VcIix7Y2xpY2tFdmVudDplfSksZS5kZWZhdWx0UHJldmVudGVkKXJldHVybjt0Ll9sZWFkZXImJnQuX3NldExlYWRlcihudWxsKSx0LmZvckVhY2goKGZ1bmN0aW9uKGUpey0xPT09W1wiY2xvc2VkXCIsXCJjbG9zaW5nXCIsXCJ3YWl0aW5nXCJdLmluZGV4T2YoZS5nZXRTdGF0ZSgpKSYmKGUuaGlkZXx8dC5vdmVybGF5Q2xvc2VzUGlubmVkP2UuY2xvc2UoKTplLmhpZGV8fFwiaXNoXCIhPT10Lm1vZGFsfHwodC5fbGVhZGVyP2UuY2xvc2UoITEsITEsITApOnQuX3NldExlYWRlcihlKSkpfSkse3NraXBNb2R1bGVIYW5kbGVkOiEwfSksdC5fb3ZlcmxheU9wZW4mJnQuX3JlbW92ZU92ZXJsYXkoKX19KSkpLHRoaXMuX292ZXJsYXkucGFyZW50Tm9kZSE9PXRoaXMuY29udGV4dCYmKHRoaXMuZmlyZShcImJlZm9yZUFkZE92ZXJsYXlcIiksdGhpcy5fb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKFwicG5vdGlmeS1tb2RhbC1vdmVybGF5LWluXCIpLHRoaXMuX292ZXJsYXk9dGhpcy5jb250ZXh0Lmluc2VydEJlZm9yZSh0aGlzLl9vdmVybGF5LHRoaXMuY29udGV4dC5maXJzdENoaWxkKSx0aGlzLl9vdmVybGF5T3Blbj0hMCx0aGlzLl9vdmVybGF5SW5zZXJ0ZWQ9ITAsd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgoZnVuY3Rpb24oKXt0Ll9vdmVybGF5LmNsYXNzTGlzdC5hZGQoXCJwbm90aWZ5LW1vZGFsLW92ZXJsYXktaW5cIiksdC5maXJlKFwiYWZ0ZXJBZGRPdmVybGF5XCIpfSkpKSx0aGlzLl9jb2xsYXBzaW5nTW9kYWxTdGF0ZT0hMX19LHtrZXk6XCJfcmVtb3ZlT3ZlcmxheVwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpczt0aGlzLl9vdmVybGF5LnBhcmVudE5vZGUmJih0aGlzLmZpcmUoXCJiZWZvcmVSZW1vdmVPdmVybGF5XCIpLHRoaXMuX292ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZShcInBub3RpZnktbW9kYWwtb3ZlcmxheS1pblwiKSx0aGlzLl9vdmVybGF5T3Blbj0hMSxzZXRUaW1lb3V0KChmdW5jdGlvbigpe3QuX292ZXJsYXlJbnNlcnRlZD0hMSx0Ll9vdmVybGF5LnBhcmVudE5vZGUmJih0Ll9vdmVybGF5LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodC5fb3ZlcmxheSksdC5maXJlKFwiYWZ0ZXJSZW1vdmVPdmVybGF5XCIpKX0pLDI1MCksc2V0VGltZW91dCgoZnVuY3Rpb24oKXt0Ll9jb2xsYXBzaW5nTW9kYWxTdGF0ZT0hMX0pLDQwMCkpfX0se2tleTpcIm5vdGljZXNcIixnZXQ6ZnVuY3Rpb24oKXt2YXIgdD1bXTtyZXR1cm4gdGhpcy5mb3JFYWNoKChmdW5jdGlvbihlKXtyZXR1cm4gdC5wdXNoKGUpfSkpLHR9fSx7a2V5OlwibGVuZ3RoXCIsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX2xlbmd0aH19LHtrZXk6XCJsZWFkZXJcIixnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fbGVhZGVyfX1dKSx0fSgpLGd0PWZ1bmN0aW9uKCl7Zm9yKHZhciB0PWFyZ3VtZW50cy5sZW5ndGgsZT1uZXcgQXJyYXkodCksbj0wO248dDtuKyspZVtuXT1hcmd1bWVudHNbbl07cmV0dXJuIGYoSnQsZSl9O3ZhciAkdD1hdC5NYXA7ZnVuY3Rpb24gX3QodCxlLG4pe3ZhciBpPXQuc2xpY2UoKTtyZXR1cm4gaVsxMDldPWVbbl1bMF0saVsxMTBdPWVbbl1bMV0saX1mdW5jdGlvbiBrdCh0LGUsbil7dmFyIGk9dC5zbGljZSgpO3JldHVybiBpWzEwOV09ZVtuXVswXSxpWzExMF09ZVtuXVsxXSxpfWZ1bmN0aW9uIHh0KHQsZSxuKXt2YXIgaT10LnNsaWNlKCk7cmV0dXJuIGlbMTA5XT1lW25dWzBdLGlbMTEwXT1lW25dWzFdLGl9ZnVuY3Rpb24gYnQodCxlLG4pe3ZhciBpPXQuc2xpY2UoKTtyZXR1cm4gaVsxMDldPWVbbl1bMF0saVsxMTBdPWVbbl1bMV0saX1mdW5jdGlvbiB3dCh0LGUpe3ZhciBuLGksbyxyLHM9W3tzZWxmOmVbNDJdfSxlWzExMF1dLGE9ZVsxMDldLmRlZmF1bHQ7ZnVuY3Rpb24gYyh0KXtmb3IodmFyIGU9e30sbj0wO248cy5sZW5ndGg7bis9MSllPSQoZSxzW25dKTtyZXR1cm57cHJvcHM6ZX19cmV0dXJuIGEmJihpPW5ldyBhKGMoKSkpLHtrZXk6dCxmaXJzdDpudWxsLGM6ZnVuY3Rpb24oKXtuPVMoKSxpJiZkdChpLiQkLmZyYWdtZW50KSxvPVMoKSx0aGlzLmZpcnN0PW59LG06ZnVuY3Rpb24odCxlKXtDKHQsbixlKSxpJiZodChpLHQsZSksQyh0LG8sZSkscj0hMH0scDpmdW5jdGlvbih0LGUpe3ZhciBuPTIxNzYmZVsxXT91dChzLFsyMDQ4JmVbMV0mJntzZWxmOnRbNDJdfSwxMjgmZVsxXSYmZnQodFsxMTBdKV0pOnt9O2lmKGEhPT0oYT10WzEwOV0uZGVmYXVsdCkpe2lmKGkpe2l0KCk7dmFyIHI9aTtzdChyLiQkLmZyYWdtZW50LDEsMCwoZnVuY3Rpb24oKXtwdChyLDEpfSkpLG90KCl9YT8oZHQoKGk9bmV3IGEoYygpKSkuJCQuZnJhZ21lbnQpLHJ0KGkuJCQuZnJhZ21lbnQsMSksaHQoaSxvLnBhcmVudE5vZGUsbykpOmk9bnVsbH1lbHNlIGEmJmkuJHNldChuKX0saTpmdW5jdGlvbih0KXtyfHwoaSYmcnQoaS4kJC5mcmFnbWVudCx0KSxyPSEwKX0sbzpmdW5jdGlvbih0KXtpJiZzdChpLiQkLmZyYWdtZW50LHQpLHI9ITF9LGQ6ZnVuY3Rpb24odCl7dCYmTShuKSx0JiZNKG8pLGkmJnB0KGksdCl9fX1mdW5jdGlvbiBPdCh0KXt2YXIgZSxuLGksbyxyLHM7cmV0dXJue2M6ZnVuY3Rpb24oKXtlPVQoXCJkaXZcIiksUChuPVQoXCJzcGFuXCIpLFwiY2xhc3NcIix0WzIyXShcImNsb3NlclwiKSksUChlLFwiY2xhc3NcIixpPVwicG5vdGlmeS1jbG9zZXIgXCIuY29uY2F0KHRbMjFdKFwiY2xvc2VyXCIpLFwiIFwiKS5jb25jYXQodFsxN10mJiF0WzI2XXx8dFsyOF0/XCJwbm90aWZ5LWhpZGRlblwiOlwiXCIpKSxQKGUsXCJyb2xlXCIsXCJidXR0b25cIiksUChlLFwidGFiaW5kZXhcIixcIjBcIiksUChlLFwidGl0bGVcIixvPXRbMjBdLmNsb3NlKX0sbTpmdW5jdGlvbihpLG8pe0MoaSxlLG8pLE8oZSxuKSxyfHwocz1OKGUsXCJjbGlja1wiLHRbODFdKSxyPSEwKX0scDpmdW5jdGlvbih0LG4pezMzNTY3NTM5MiZuWzBdJiZpIT09KGk9XCJwbm90aWZ5LWNsb3NlciBcIi5jb25jYXQodFsyMV0oXCJjbG9zZXJcIiksXCIgXCIpLmNvbmNhdCh0WzE3XSYmIXRbMjZdfHx0WzI4XT9cInBub3RpZnktaGlkZGVuXCI6XCJcIikpJiZQKGUsXCJjbGFzc1wiLGkpLDEwNDg1NzYmblswXSYmbyE9PShvPXRbMjBdLmNsb3NlKSYmUChlLFwidGl0bGVcIixvKX0sZDpmdW5jdGlvbih0KXt0JiZNKGUpLHI9ITEscygpfX19ZnVuY3Rpb24gQ3QodCl7dmFyIGUsbixpLG8scixzLGEsYztyZXR1cm57YzpmdW5jdGlvbigpe2U9VChcImRpdlwiKSxQKG49VChcInNwYW5cIiksXCJjbGFzc1wiLGk9XCJcIi5jb25jYXQodFsyMl0oXCJzdGlja2VyXCIpLFwiIFwiKS5jb25jYXQodFszXT90WzIyXShcInVuc3R1Y2tcIik6dFsyMl0oXCJzdHVja1wiKSkpLFAoZSxcImNsYXNzXCIsbz1cInBub3RpZnktc3RpY2tlciBcIi5jb25jYXQodFsyMV0oXCJzdGlja2VyXCIpLFwiIFwiKS5jb25jYXQodFsxOV0mJiF0WzI2XXx8dFsyOF0/XCJwbm90aWZ5LWhpZGRlblwiOlwiXCIpKSxQKGUsXCJyb2xlXCIsXCJidXR0b25cIiksUChlLFwiYXJpYS1wcmVzc2VkXCIscj0hdFszXSksUChlLFwidGFiaW5kZXhcIixcIjBcIiksUChlLFwidGl0bGVcIixzPXRbM10/dFsyMF0uc3RpY2s6dFsyMF0udW5zdGljayl9LG06ZnVuY3Rpb24oaSxvKXtDKGksZSxvKSxPKGUsbiksYXx8KGM9TihlLFwiY2xpY2tcIix0WzgyXSksYT0hMCl9LHA6ZnVuY3Rpb24odCxhKXs4JmFbMF0mJmkhPT0oaT1cIlwiLmNvbmNhdCh0WzIyXShcInN0aWNrZXJcIiksXCIgXCIpLmNvbmNhdCh0WzNdP3RbMjJdKFwidW5zdHVja1wiKTp0WzIyXShcInN0dWNrXCIpKSkmJlAobixcImNsYXNzXCIsaSksMzM2MDY4NjA4JmFbMF0mJm8hPT0obz1cInBub3RpZnktc3RpY2tlciBcIi5jb25jYXQodFsyMV0oXCJzdGlja2VyXCIpLFwiIFwiKS5jb25jYXQodFsxOV0mJiF0WzI2XXx8dFsyOF0/XCJwbm90aWZ5LWhpZGRlblwiOlwiXCIpKSYmUChlLFwiY2xhc3NcIixvKSw4JmFbMF0mJnIhPT0ocj0hdFszXSkmJlAoZSxcImFyaWEtcHJlc3NlZFwiLHIpLDEwNDg1ODQmYVswXSYmcyE9PShzPXRbM10/dFsyMF0uc3RpY2s6dFsyMF0udW5zdGljaykmJlAoZSxcInRpdGxlXCIscyl9LGQ6ZnVuY3Rpb24odCl7dCYmTShlKSxhPSExLGMoKX19fWZ1bmN0aW9uIE10KHQpe3ZhciBlLG4saTtyZXR1cm57YzpmdW5jdGlvbigpe2U9VChcImRpdlwiKSxQKG49VChcInNwYW5cIiksXCJjbGFzc1wiLGk9ITA9PT10WzEzXT90WzIyXSh0WzRdKTp0WzEzXSksUChlLFwiY2xhc3NcIixcInBub3RpZnktaWNvbiBcIi5jb25jYXQodFsyMV0oXCJpY29uXCIpKSl9LG06ZnVuY3Rpb24oaSxvKXtDKGksZSxvKSxPKGUsbiksdFs4M10oZSl9LHA6ZnVuY3Rpb24odCxlKXs4MjA4JmVbMF0mJmkhPT0oaT0hMD09PXRbMTNdP3RbMjJdKHRbNF0pOnRbMTNdKSYmUChuLFwiY2xhc3NcIixpKX0sZDpmdW5jdGlvbihuKXtuJiZNKGUpLHRbODNdKG51bGwpfX19ZnVuY3Rpb24gVHQodCxlKXt2YXIgbixpLG8scixzPVt7c2VsZjplWzQyXX0sZVsxMTBdXSxhPWVbMTA5XS5kZWZhdWx0O2Z1bmN0aW9uIGModCl7Zm9yKHZhciBlPXt9LG49MDtuPHMubGVuZ3RoO24rPTEpZT0kKGUsc1tuXSk7cmV0dXJue3Byb3BzOmV9fXJldHVybiBhJiYoaT1uZXcgYShjKCkpKSx7a2V5OnQsZmlyc3Q6bnVsbCxjOmZ1bmN0aW9uKCl7bj1TKCksaSYmZHQoaS4kJC5mcmFnbWVudCksbz1TKCksdGhpcy5maXJzdD1ufSxtOmZ1bmN0aW9uKHQsZSl7Qyh0LG4sZSksaSYmaHQoaSx0LGUpLEModCxvLGUpLHI9ITB9LHA6ZnVuY3Rpb24odCxlKXt2YXIgbj0yMzA0JmVbMV0/dXQocyxbMjA0OCZlWzFdJiZ7c2VsZjp0WzQyXX0sMjU2JmVbMV0mJmZ0KHRbMTEwXSldKTp7fTtpZihhIT09KGE9dFsxMDldLmRlZmF1bHQpKXtpZihpKXtpdCgpO3ZhciByPWk7c3Qoci4kJC5mcmFnbWVudCwxLDAsKGZ1bmN0aW9uKCl7cHQociwxKX0pKSxvdCgpfWE/KGR0KChpPW5ldyBhKGMoKSkpLiQkLmZyYWdtZW50KSxydChpLiQkLmZyYWdtZW50LDEpLGh0KGksby5wYXJlbnROb2RlLG8pKTppPW51bGx9ZWxzZSBhJiZpLiRzZXQobil9LGk6ZnVuY3Rpb24odCl7cnx8KGkmJnJ0KGkuJCQuZnJhZ21lbnQsdCkscj0hMCl9LG86ZnVuY3Rpb24odCl7aSYmc3QoaS4kJC5mcmFnbWVudCx0KSxyPSExfSxkOmZ1bmN0aW9uKHQpe3QmJk0obiksdCYmTShvKSxpJiZwdChpLHQpfX19ZnVuY3Rpb24gSHQodCl7dmFyIGUsbj0hdFszNF0mJkV0KHQpO3JldHVybntjOmZ1bmN0aW9uKCl7ZT1UKFwiZGl2XCIpLG4mJm4uYygpLFAoZSxcImNsYXNzXCIsXCJwbm90aWZ5LXRpdGxlIFwiLmNvbmNhdCh0WzIxXShcInRpdGxlXCIpKSl9LG06ZnVuY3Rpb24oaSxvKXtDKGksZSxvKSxuJiZuLm0oZSxudWxsKSx0Wzg0XShlKX0scDpmdW5jdGlvbih0LGkpe3RbMzRdP24mJihuLmQoMSksbj1udWxsKTpuP24ucCh0LGkpOigobj1FdCh0KSkuYygpLG4ubShlLG51bGwpKX0sZDpmdW5jdGlvbihpKXtpJiZNKGUpLG4mJm4uZCgpLHRbODRdKG51bGwpfX19ZnVuY3Rpb24gRXQodCl7dmFyIGU7ZnVuY3Rpb24gbih0LGUpe3JldHVybiB0WzZdP050OlN0fXZhciBpPW4odCksbz1pKHQpO3JldHVybntjOmZ1bmN0aW9uKCl7by5jKCksZT1TKCl9LG06ZnVuY3Rpb24odCxuKXtvLm0odCxuKSxDKHQsZSxuKX0scDpmdW5jdGlvbih0LHIpe2k9PT0oaT1uKHQpKSYmbz9vLnAodCxyKTooby5kKDEpLChvPWkodCkpJiYoby5jKCksby5tKGUucGFyZW50Tm9kZSxlKSkpfSxkOmZ1bmN0aW9uKHQpe28uZCh0KSx0JiZNKGUpfX19ZnVuY3Rpb24gU3QodCl7dmFyIGUsbjtyZXR1cm57YzpmdW5jdGlvbigpe2U9VChcInNwYW5cIiksbj1IKHRbNV0pLFAoZSxcImNsYXNzXCIsXCJwbm90aWZ5LXByZS1saW5lXCIpfSxtOmZ1bmN0aW9uKHQsaSl7Qyh0LGUsaSksTyhlLG4pfSxwOmZ1bmN0aW9uKHQsZSl7MzImZVswXSYmTChuLHRbNV0pfSxkOmZ1bmN0aW9uKHQpe3QmJk0oZSl9fX1mdW5jdGlvbiBOdCh0KXt2YXIgZSxuO3JldHVybntjOmZ1bmN0aW9uKCl7bj1TKCksZT1uZXcgUihuKX0sbTpmdW5jdGlvbihpLG8pe2UubSh0WzVdLGksbyksQyhpLG4sbyl9LHA6ZnVuY3Rpb24odCxuKXszMiZuWzBdJiZlLnAodFs1XSl9LGQ6ZnVuY3Rpb24odCl7dCYmTShuKSx0JiZlLmQoKX19fWZ1bmN0aW9uIFB0KHQpe3ZhciBlLG4saT0hdFszNV0mJkF0KHQpO3JldHVybntjOmZ1bmN0aW9uKCl7ZT1UKFwiZGl2XCIpLGkmJmkuYygpLFAoZSxcImNsYXNzXCIsbj1cInBub3RpZnktdGV4dCBcIi5jb25jYXQodFsyMV0oXCJ0ZXh0XCIpLFwiIFwiKS5jb25jYXQoXCJcIj09PXRbMzNdP1wiXCI6XCJwbm90aWZ5LXRleHQtd2l0aC1tYXgtaGVpZ2h0XCIpKSxQKGUsXCJzdHlsZVwiLHRbMzNdKSxQKGUsXCJyb2xlXCIsXCJhbGVydFwiKX0sbTpmdW5jdGlvbihuLG8pe0MobixlLG8pLGkmJmkubShlLG51bGwpLHRbODVdKGUpfSxwOmZ1bmN0aW9uKHQsbyl7dFszNV0/aSYmKGkuZCgxKSxpPW51bGwpOmk/aS5wKHQsbyk6KChpPUF0KHQpKS5jKCksaS5tKGUsbnVsbCkpLDQmb1sxXSYmbiE9PShuPVwicG5vdGlmeS10ZXh0IFwiLmNvbmNhdCh0WzIxXShcInRleHRcIiksXCIgXCIpLmNvbmNhdChcIlwiPT09dFszM10/XCJcIjpcInBub3RpZnktdGV4dC13aXRoLW1heC1oZWlnaHRcIikpJiZQKGUsXCJjbGFzc1wiLG4pLDQmb1sxXSYmUChlLFwic3R5bGVcIix0WzMzXSl9LGQ6ZnVuY3Rpb24obil7biYmTShlKSxpJiZpLmQoKSx0Wzg1XShudWxsKX19fWZ1bmN0aW9uIEF0KHQpe3ZhciBlO2Z1bmN0aW9uIG4odCxlKXtyZXR1cm4gdFs4XT9qdDpMdH12YXIgaT1uKHQpLG89aSh0KTtyZXR1cm57YzpmdW5jdGlvbigpe28uYygpLGU9UygpfSxtOmZ1bmN0aW9uKHQsbil7by5tKHQsbiksQyh0LGUsbil9LHA6ZnVuY3Rpb24odCxyKXtpPT09KGk9bih0KSkmJm8/by5wKHQscik6KG8uZCgxKSwobz1pKHQpKSYmKG8uYygpLG8ubShlLnBhcmVudE5vZGUsZSkpKX0sZDpmdW5jdGlvbih0KXtvLmQodCksdCYmTShlKX19fWZ1bmN0aW9uIEx0KHQpe3ZhciBlLG47cmV0dXJue2M6ZnVuY3Rpb24oKXtlPVQoXCJzcGFuXCIpLG49SCh0WzddKSxQKGUsXCJjbGFzc1wiLFwicG5vdGlmeS1wcmUtbGluZVwiKX0sbTpmdW5jdGlvbih0LGkpe0ModCxlLGkpLE8oZSxuKX0scDpmdW5jdGlvbih0LGUpezEyOCZlWzBdJiZMKG4sdFs3XSl9LGQ6ZnVuY3Rpb24odCl7dCYmTShlKX19fWZ1bmN0aW9uIGp0KHQpe3ZhciBlLG47cmV0dXJue2M6ZnVuY3Rpb24oKXtuPVMoKSxlPW5ldyBSKG4pfSxtOmZ1bmN0aW9uKGksbyl7ZS5tKHRbN10saSxvKSxDKGksbixvKX0scDpmdW5jdGlvbih0LG4pezEyOCZuWzBdJiZlLnAodFs3XSl9LGQ6ZnVuY3Rpb24odCl7dCYmTShuKSx0JiZlLmQoKX19fWZ1bmN0aW9uIFJ0KHQsZSl7dmFyIG4saSxvLHIscz1be3NlbGY6ZVs0Ml19LGVbMTEwXV0sYT1lWzEwOV0uZGVmYXVsdDtmdW5jdGlvbiBjKHQpe2Zvcih2YXIgZT17fSxuPTA7bjxzLmxlbmd0aDtuKz0xKWU9JChlLHNbbl0pO3JldHVybntwcm9wczplfX1yZXR1cm4gYSYmKGk9bmV3IGEoYygpKSkse2tleTp0LGZpcnN0Om51bGwsYzpmdW5jdGlvbigpe249UygpLGkmJmR0KGkuJCQuZnJhZ21lbnQpLG89UygpLHRoaXMuZmlyc3Q9bn0sbTpmdW5jdGlvbih0LGUpe0ModCxuLGUpLGkmJmh0KGksdCxlKSxDKHQsbyxlKSxyPSEwfSxwOmZ1bmN0aW9uKHQsZSl7dmFyIG49MjU2MCZlWzFdP3V0KHMsWzIwNDgmZVsxXSYme3NlbGY6dFs0Ml19LDUxMiZlWzFdJiZmdCh0WzExMF0pXSk6e307aWYoYSE9PShhPXRbMTA5XS5kZWZhdWx0KSl7aWYoaSl7aXQoKTt2YXIgcj1pO3N0KHIuJCQuZnJhZ21lbnQsMSwwLChmdW5jdGlvbigpe3B0KHIsMSl9KSksb3QoKX1hPyhkdCgoaT1uZXcgYShjKCkpKS4kJC5mcmFnbWVudCkscnQoaS4kJC5mcmFnbWVudCwxKSxodChpLG8ucGFyZW50Tm9kZSxvKSk6aT1udWxsfWVsc2UgYSYmaS4kc2V0KG4pfSxpOmZ1bmN0aW9uKHQpe3J8fChpJiZydChpLiQkLmZyYWdtZW50LHQpLHI9ITApfSxvOmZ1bmN0aW9uKHQpe2kmJnN0KGkuJCQuZnJhZ21lbnQsdCkscj0hMX0sZDpmdW5jdGlvbih0KXt0JiZNKG4pLHQmJk0obyksaSYmcHQoaSx0KX19fWZ1bmN0aW9uIFd0KHQsZSl7dmFyIG4saSxvLHIscz1be3NlbGY6ZVs0Ml19LGVbMTEwXV0sYT1lWzEwOV0uZGVmYXVsdDtmdW5jdGlvbiBjKHQpe2Zvcih2YXIgZT17fSxuPTA7bjxzLmxlbmd0aDtuKz0xKWU9JChlLHNbbl0pO3JldHVybntwcm9wczplfX1yZXR1cm4gYSYmKGk9bmV3IGEoYygpKSkse2tleTp0LGZpcnN0Om51bGwsYzpmdW5jdGlvbigpe249UygpLGkmJmR0KGkuJCQuZnJhZ21lbnQpLG89UygpLHRoaXMuZmlyc3Q9bn0sbTpmdW5jdGlvbih0LGUpe0ModCxuLGUpLGkmJmh0KGksdCxlKSxDKHQsbyxlKSxyPSEwfSxwOmZ1bmN0aW9uKHQsZSl7dmFyIG49MzA3MiZlWzFdP3V0KHMsWzIwNDgmZVsxXSYme3NlbGY6dFs0Ml19LDEwMjQmZVsxXSYmZnQodFsxMTBdKV0pOnt9O2lmKGEhPT0oYT10WzEwOV0uZGVmYXVsdCkpe2lmKGkpe2l0KCk7dmFyIHI9aTtzdChyLiQkLmZyYWdtZW50LDEsMCwoZnVuY3Rpb24oKXtwdChyLDEpfSkpLG90KCl9YT8oZHQoKGk9bmV3IGEoYygpKSkuJCQuZnJhZ21lbnQpLHJ0KGkuJCQuZnJhZ21lbnQsMSksaHQoaSxvLnBhcmVudE5vZGUsbykpOmk9bnVsbH1lbHNlIGEmJmkuJHNldChuKX0saTpmdW5jdGlvbih0KXtyfHwoaSYmcnQoaS4kJC5mcmFnbWVudCx0KSxyPSEwKX0sbzpmdW5jdGlvbih0KXtpJiZzdChpLiQkLmZyYWdtZW50LHQpLHI9ITF9LGQ6ZnVuY3Rpb24odCl7dCYmTShuKSx0JiZNKG8pLGkmJnB0KGksdCl9fX1mdW5jdGlvbiBJdCh0KXtmb3IodmFyIGUsbixpLG8scixzLGEsYyxsLHUsZixkLGgscCxtLHYseSwkPVtdLF89bmV3ICR0LGs9W10sdz1uZXcgJHQsSD1bXSxTPW5ldyAkdCxBPVtdLEw9bmV3ICR0LGo9dFszOF0sUj1mdW5jdGlvbih0KXtyZXR1cm4gdFsxMDldfSxXPTA7VzxqLmxlbmd0aDtXKz0xKXt2YXIgST1idCh0LGosVyksRD1SKEkpO18uc2V0KEQsJFtXXT13dChELEkpKX1mb3IodmFyIEY9dFsxNl0mJiF0WzM2XSYmT3QodCkscT10WzE4XSYmIXRbMzZdJiZDdCh0KSxCPSExIT09dFsxM10mJk10KHQpLHo9dFszOV0sVT1mdW5jdGlvbih0KXtyZXR1cm4gdFsxMDldfSxHPTA7Rzx6Lmxlbmd0aDtHKz0xKXt2YXIgSj14dCh0LHosRyksSz1VKEopO3cuc2V0KEssa1tHXT1UdChLLEopKX1mb3IodmFyIFE9ITEhPT10WzVdJiZIdCh0KSxWPSExIT09dFs3XSYmUHQodCksWD10WzQwXSxZPWZ1bmN0aW9uKHQpe3JldHVybiB0WzEwOV19LFo9MDtaPFgubGVuZ3RoO1orPTEpe3ZhciB0dD1rdCh0LFgsWiksZXQ9WSh0dCk7Uy5zZXQoZXQsSFtaXT1SdChldCx0dCkpfWZvcih2YXIgbnQ9dFs0MV0sYXQ9ZnVuY3Rpb24odCl7cmV0dXJuIHRbMTA5XX0sdXQ9MDt1dDxudC5sZW5ndGg7dXQrPTEpe3ZhciBmdD1fdCh0LG50LHV0KSxkdD1hdChmdCk7TC5zZXQoZHQsQVt1dF09V3QoZHQsZnQpKX1yZXR1cm57YzpmdW5jdGlvbigpe2U9VChcImRpdlwiKSxuPVQoXCJkaXZcIik7Zm9yKHZhciBtPTA7bTwkLmxlbmd0aDttKz0xKSRbbV0uYygpO2k9RSgpLEYmJkYuYygpLG89RSgpLHEmJnEuYygpLHI9RSgpLEImJkIuYygpLHM9RSgpLGE9VChcImRpdlwiKTtmb3IodmFyIHY9MDt2PGsubGVuZ3RoO3YrPTEpa1t2XS5jKCk7Yz1FKCksUSYmUS5jKCksbD1FKCksViYmVi5jKCksdT1FKCk7Zm9yKHZhciB5PTA7eTxILmxlbmd0aDt5Kz0xKUhbeV0uYygpO2Y9RSgpO2Zvcih2YXIgZz0wO2c8QS5sZW5ndGg7Zys9MSlBW2ddLmMoKTtQKGEsXCJjbGFzc1wiLFwicG5vdGlmeS1jb250ZW50IFwiLmNvbmNhdCh0WzIxXShcImNvbnRlbnRcIikpKSxQKG4sXCJjbGFzc1wiLGQ9XCJwbm90aWZ5LWNvbnRhaW5lciBcIi5jb25jYXQodFsyMV0oXCJjb250YWluZXJcIiksXCIgXCIpLmNvbmNhdCh0WzIxXSh0WzRdKSxcIiBcIikuY29uY2F0KHRbMTVdP1wicG5vdGlmeS1zaGFkb3dcIjpcIlwiLFwiIFwiKS5jb25jYXQodFsyN10uY29udGFpbmVyLmpvaW4oXCIgXCIpKSksUChuLFwic3R5bGVcIixoPVwiXCIuY29uY2F0KHRbMzFdLFwiIFwiKS5jb25jYXQodFszMl0pKSxQKG4sXCJyb2xlXCIsXCJhbGVydFwiKSxQKGUsXCJkYXRhLXBub3RpZnlcIixcIlwiKSxQKGUsXCJjbGFzc1wiLHA9XCJwbm90aWZ5IFwiLmNvbmNhdCghdFswXXx8dFswXS5wb3NpdGlvbmVkP1wicG5vdGlmeS1wb3NpdGlvbmVkXCI6XCJcIixcIiBcIikuY29uY2F0KCExIT09dFsxM10/XCJwbm90aWZ5LXdpdGgtaWNvblwiOlwiXCIsXCIgXCIpLmNvbmNhdCh0WzIxXShcImVsZW1cIiksXCIgcG5vdGlmeS1tb2RlLVwiKS5jb25jYXQodFs5XSxcIiBcIikuY29uY2F0KHRbMTBdLFwiIFwiKS5jb25jYXQodFsyNF0sXCIgXCIpLmNvbmNhdCh0WzI1XSxcIiBcIikuY29uY2F0KHRbMzddLFwiIFwiKS5jb25jYXQoXCJmYWRlXCI9PT10WzJdP1wicG5vdGlmeS1mYWRlLVwiLmNvbmNhdCh0WzE0XSk6XCJcIixcIiBcIikuY29uY2F0KHRbMzBdP1wicG5vdGlmeS1tb2RhbCBcIi5jb25jYXQodFsxMV0pOnRbMTJdLFwiIFwiKS5jb25jYXQodFsyOF0/XCJwbm90aWZ5LW1hc2tpbmdcIjpcIlwiLFwiIFwiKS5jb25jYXQodFsyOV0/XCJwbm90aWZ5LW1hc2tpbmctaW5cIjpcIlwiLFwiIFwiKS5jb25jYXQodFsyN10uZWxlbS5qb2luKFwiIFwiKSkpLFAoZSxcImFyaWEtbGl2ZVwiLFwiYXNzZXJ0aXZlXCIpLFAoZSxcInJvbGVcIixcImFsZXJ0ZGlhbG9nXCIpfSxtOmZ1bmN0aW9uKGQsaCl7QyhkLGUsaCksTyhlLG4pO2Zvcih2YXIgcD0wO3A8JC5sZW5ndGg7cCs9MSkkW3BdLm0obixudWxsKTtPKG4saSksRiYmRi5tKG4sbnVsbCksTyhuLG8pLHEmJnEubShuLG51bGwpLE8obixyKSxCJiZCLm0obixudWxsKSxPKG4scyksTyhuLGEpO2Zvcih2YXIgXz0wO188ay5sZW5ndGg7Xys9MSlrW19dLm0oYSxudWxsKTtPKGEsYyksUSYmUS5tKGEsbnVsbCksTyhhLGwpLFYmJlYubShhLG51bGwpLE8oYSx1KTtmb3IodmFyIHg9MDt4PEgubGVuZ3RoO3grPTEpSFt4XS5tKGEsbnVsbCk7dFs4Nl0oYSksTyhuLGYpO2Zvcih2YXIgdz0wO3c8QS5sZW5ndGg7dys9MSlBW3ddLm0obixudWxsKTt2YXIgTTt0Wzg3XShuKSx0Wzg4XShlKSxtPSEwLHZ8fCh5PVsoTT10WzQzXS5jYWxsKG51bGwsZSksTSYmYihNLmRlc3Ryb3kpP00uZGVzdHJveTpnKSxOKGUsXCJtb3VzZWVudGVyXCIsdFs0NF0pLE4oZSxcIm1vdXNlbGVhdmVcIix0WzQ1XSksTihlLFwiZm9jdXNpblwiLHRbNDRdKSxOKGUsXCJmb2N1c291dFwiLHRbNDVdKV0sdj0hMCl9LHA6ZnVuY3Rpb24odCxmKXtpZigyMTc2JmZbMV0pe3ZhciB2PXRbMzhdO2l0KCksJD1sdCgkLGYsUiwxLHQsdixfLG4sY3Qsd3QsaSxidCksb3QoKX1pZih0WzE2XSYmIXRbMzZdP0Y/Ri5wKHQsZik6KChGPU90KHQpKS5jKCksRi5tKG4sbykpOkYmJihGLmQoMSksRj1udWxsKSx0WzE4XSYmIXRbMzZdP3E/cS5wKHQsZik6KChxPUN0KHQpKS5jKCkscS5tKG4scikpOnEmJihxLmQoMSkscT1udWxsKSwhMSE9PXRbMTNdP0I/Qi5wKHQsZik6KChCPU10KHQpKS5jKCksQi5tKG4scykpOkImJihCLmQoMSksQj1udWxsKSwyMzA0JmZbMV0pe3ZhciB5PXRbMzldO2l0KCksaz1sdChrLGYsVSwxLHQseSx3LGEsY3QsVHQsYyx4dCksb3QoKX1pZighMSE9PXRbNV0/UT9RLnAodCxmKTooKFE9SHQodCkpLmMoKSxRLm0oYSxsKSk6USYmKFEuZCgxKSxRPW51bGwpLCExIT09dFs3XT9WP1YucCh0LGYpOigoVj1QdCh0KSkuYygpLFYubShhLHUpKTpWJiYoVi5kKDEpLFY9bnVsbCksMjU2MCZmWzFdKXt2YXIgZz10WzQwXTtpdCgpLEg9bHQoSCxmLFksMSx0LGcsUyxhLGN0LFJ0LG51bGwsa3QpLG90KCl9aWYoMzA3MiZmWzFdKXt2YXIgeD10WzQxXTtpdCgpLEE9bHQoQSxmLGF0LDEsdCx4LEwsbixjdCxXdCxudWxsLF90KSxvdCgpfSghbXx8MTM0MjUwNTEyJmZbMF0mJmQhPT0oZD1cInBub3RpZnktY29udGFpbmVyIFwiLmNvbmNhdCh0WzIxXShcImNvbnRhaW5lclwiKSxcIiBcIikuY29uY2F0KHRbMjFdKHRbNF0pLFwiIFwiKS5jb25jYXQodFsxNV0/XCJwbm90aWZ5LXNoYWRvd1wiOlwiXCIsXCIgXCIpLmNvbmNhdCh0WzI3XS5jb250YWluZXIuam9pbihcIiBcIikpKSkmJlAobixcImNsYXNzXCIsZCksKCFtfHwzJmZbMV0mJmghPT0oaD1cIlwiLmNvbmNhdCh0WzMxXSxcIiBcIikuY29uY2F0KHRbMzJdKSkpJiZQKG4sXCJzdHlsZVwiLGgpLCghbXx8MjA2MzYyOTgyOSZmWzBdfDY0JmZbMV0mJnAhPT0ocD1cInBub3RpZnkgXCIuY29uY2F0KCF0WzBdfHx0WzBdLnBvc2l0aW9uZWQ/XCJwbm90aWZ5LXBvc2l0aW9uZWRcIjpcIlwiLFwiIFwiKS5jb25jYXQoITEhPT10WzEzXT9cInBub3RpZnktd2l0aC1pY29uXCI6XCJcIixcIiBcIikuY29uY2F0KHRbMjFdKFwiZWxlbVwiKSxcIiBwbm90aWZ5LW1vZGUtXCIpLmNvbmNhdCh0WzldLFwiIFwiKS5jb25jYXQodFsxMF0sXCIgXCIpLmNvbmNhdCh0WzI0XSxcIiBcIikuY29uY2F0KHRbMjVdLFwiIFwiKS5jb25jYXQodFszN10sXCIgXCIpLmNvbmNhdChcImZhZGVcIj09PXRbMl0/XCJwbm90aWZ5LWZhZGUtXCIuY29uY2F0KHRbMTRdKTpcIlwiLFwiIFwiKS5jb25jYXQodFszMF0/XCJwbm90aWZ5LW1vZGFsIFwiLmNvbmNhdCh0WzExXSk6dFsxMl0sXCIgXCIpLmNvbmNhdCh0WzI4XT9cInBub3RpZnktbWFza2luZ1wiOlwiXCIsXCIgXCIpLmNvbmNhdCh0WzI5XT9cInBub3RpZnktbWFza2luZy1pblwiOlwiXCIsXCIgXCIpLmNvbmNhdCh0WzI3XS5lbGVtLmpvaW4oXCIgXCIpKSkpJiZQKGUsXCJjbGFzc1wiLHApfSxpOmZ1bmN0aW9uKHQpe2lmKCFtKXtmb3IodmFyIGU9MDtlPGoubGVuZ3RoO2UrPTEpcnQoJFtlXSk7Zm9yKHZhciBuPTA7bjx6Lmxlbmd0aDtuKz0xKXJ0KGtbbl0pO2Zvcih2YXIgaT0wO2k8WC5sZW5ndGg7aSs9MSlydChIW2ldKTtmb3IodmFyIG89MDtvPG50Lmxlbmd0aDtvKz0xKXJ0KEFbb10pO209ITB9fSxvOmZ1bmN0aW9uKHQpe2Zvcih2YXIgZT0wO2U8JC5sZW5ndGg7ZSs9MSlzdCgkW2VdKTtmb3IodmFyIG49MDtuPGsubGVuZ3RoO24rPTEpc3Qoa1tuXSk7Zm9yKHZhciBpPTA7aTxILmxlbmd0aDtpKz0xKXN0KEhbaV0pO2Zvcih2YXIgbz0wO288QS5sZW5ndGg7bys9MSlzdChBW29dKTttPSExfSxkOmZ1bmN0aW9uKG4pe24mJk0oZSk7Zm9yKHZhciBpPTA7aTwkLmxlbmd0aDtpKz0xKSRbaV0uZCgpO0YmJkYuZCgpLHEmJnEuZCgpLEImJkIuZCgpO2Zvcih2YXIgbz0wO288ay5sZW5ndGg7bys9MSlrW29dLmQoKTtRJiZRLmQoKSxWJiZWLmQoKTtmb3IodmFyIHI9MDtyPEgubGVuZ3RoO3IrPTEpSFtyXS5kKCk7dFs4Nl0obnVsbCk7Zm9yKHZhciBzPTA7czxBLmxlbmd0aDtzKz0xKUFbc10uZCgpO3RbODddKG51bGwpLHRbODhdKG51bGwpLHY9ITEseCh5KX19fWZ1bmN0aW9uIER0KHQsbil7XCJvYmplY3RcIiE9PWUodCkmJih0PXt0ZXh0OnR9KSxuJiYodC50eXBlPW4pO3ZhciBpPWRvY3VtZW50LmJvZHk7cmV0dXJuXCJzdGFja1wiaW4gdCYmdC5zdGFjayYmdC5zdGFjay5jb250ZXh0JiYoaT10LnN0YWNrLmNvbnRleHQpLHt0YXJnZXQ6aSxwcm9wczp0fX12YXIgRnQscXQ9bmV3IHl0KHtkaXIxOlwiZG93blwiLGRpcjI6XCJsZWZ0XCIsZmlyc3Rwb3MxOjI1LGZpcnN0cG9zMjoyNSxzcGFjaW5nMTozNixzcGFjaW5nMjozNixwdXNoOlwiYm90dG9tXCJ9KSxCdD1uZXcgTWFwLHp0PXt0eXBlOlwibm90aWNlXCIsdGl0bGU6ITEsdGl0bGVUcnVzdGVkOiExLHRleHQ6ITEsdGV4dFRydXN0ZWQ6ITEsc3R5bGluZzpcImJyaWdodHRoZW1lXCIsaWNvbnM6XCJicmlnaHR0aGVtZVwiLG1vZGU6XCJuby1wcmVmZXJlbmNlXCIsYWRkQ2xhc3M6XCJcIixhZGRNb2RhbENsYXNzOlwiXCIsYWRkTW9kZWxlc3NDbGFzczpcIlwiLGF1dG9PcGVuOiEwLHdpZHRoOlwiMzYwcHhcIixtaW5IZWlnaHQ6XCIxNnB4XCIsbWF4VGV4dEhlaWdodDpcIjIwMHB4XCIsaWNvbjohMCxhbmltYXRpb246XCJmYWRlXCIsYW5pbWF0ZVNwZWVkOlwibm9ybWFsXCIsc2hhZG93OiEwLGhpZGU6ITAsZGVsYXk6OGUzLG1vdXNlUmVzZXQ6ITAsY2xvc2VyOiEwLGNsb3NlckhvdmVyOiEwLHN0aWNrZXI6ITAsc3RpY2tlckhvdmVyOiEwLGxhYmVsczp7Y2xvc2U6XCJDbG9zZVwiLHN0aWNrOlwiUGluXCIsdW5zdGljazpcIlVucGluXCJ9LHJlbW92ZTohMCxkZXN0cm95OiEwLHN0YWNrOnF0LG1vZHVsZXM6QnR9O2Z1bmN0aW9uIFV0KCl7cXQuY29udGV4dHx8KHF0LmNvbnRleHQ9ZG9jdW1lbnQuYm9keSksd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwoZnVuY3Rpb24oKXtGdCYmY2xlYXJUaW1lb3V0KEZ0KSxGdD1zZXRUaW1lb3V0KChmdW5jdGlvbigpe3ZhciB0PW5ldyBFdmVudChcInBub3RpZnk6cG9zaXRpb25cIik7ZG9jdW1lbnQuYm9keS5kaXNwYXRjaEV2ZW50KHQpLEZ0PW51bGx9KSwxMCl9KSl9ZnVuY3Rpb24gR3QodCxlLG4pe3ZhciBpPUkoKSxvPUQoKSxyPWZ1bmN0aW9uKHQpe3ZhciBlPWFyZ3VtZW50cy5sZW5ndGg+MSYmdm9pZCAwIT09YXJndW1lbnRzWzFdP2FyZ3VtZW50c1sxXTpbXSxuPVtcImZvY3VzXCIsXCJibHVyXCIsXCJmdWxsc2NyZWVuY2hhbmdlXCIsXCJmdWxsc2NyZWVuZXJyb3JcIixcInNjcm9sbFwiLFwiY3V0XCIsXCJjb3B5XCIsXCJwYXN0ZVwiLFwia2V5ZG93blwiLFwia2V5cHJlc3NcIixcImtleXVwXCIsXCJhdXhjbGlja1wiLFwiY2xpY2tcIixcImNvbnRleHRtZW51XCIsXCJkYmxjbGlja1wiLFwibW91c2Vkb3duXCIsXCJtb3VzZWVudGVyXCIsXCJtb3VzZWxlYXZlXCIsXCJtb3VzZW1vdmVcIixcIm1vdXNlb3ZlclwiLFwibW91c2VvdXRcIixcIm1vdXNldXBcIixcInBvaW50ZXJsb2NrY2hhbmdlXCIsXCJwb2ludGVybG9ja2Vycm9yXCIsXCJzZWxlY3RcIixcIndoZWVsXCIsXCJkcmFnXCIsXCJkcmFnZW5kXCIsXCJkcmFnZW50ZXJcIixcImRyYWdzdGFydFwiLFwiZHJhZ2xlYXZlXCIsXCJkcmFnb3ZlclwiLFwiZHJvcFwiLFwidG91Y2hjYW5jZWxcIixcInRvdWNoZW5kXCIsXCJ0b3VjaG1vdmVcIixcInRvdWNoc3RhcnRcIixcInBvaW50ZXJvdmVyXCIsXCJwb2ludGVyZW50ZXJcIixcInBvaW50ZXJkb3duXCIsXCJwb2ludGVybW92ZVwiLFwicG9pbnRlcnVwXCIsXCJwb2ludGVyY2FuY2VsXCIsXCJwb2ludGVyb3V0XCIsXCJwb2ludGVybGVhdmVcIixcImdvdHBvaW50ZXJjYXB0dXJlXCIsXCJsb3N0cG9pbnRlcmNhcHR1cmVcIl0uY29uY2F0KG0oZSkpO2Z1bmN0aW9uIGkoZSl7Rih0LGUpfXJldHVybiBmdW5jdGlvbih0KXtmb3IodmFyIGU9W10sbz0wO288bi5sZW5ndGg7bysrKWUucHVzaChOKHQsbltvXSxpKSk7cmV0dXJue2Rlc3Ryb3k6ZnVuY3Rpb24oKXtmb3IodmFyIHQ9MDt0PGUubGVuZ3RoO3QrKyllW3RdKCl9fX19KGksW1wicG5vdGlmeTppbml0XCIsXCJwbm90aWZ5Om1vdW50XCIsXCJwbm90aWZ5OnVwZGF0ZVwiLFwicG5vdGlmeTpiZWZvcmVPcGVuXCIsXCJwbm90aWZ5OmFmdGVyT3BlblwiLFwicG5vdGlmeTplbnRlck1vZGFsXCIsXCJwbm90aWZ5OmxlYXZlTW9kYWxcIixcInBub3RpZnk6YmVmb3JlQ2xvc2VcIixcInBub3RpZnk6YWZ0ZXJDbG9zZVwiLFwicG5vdGlmeTpiZWZvcmVEZXN0cm95XCIsXCJwbm90aWZ5OmFmdGVyRGVzdHJveVwiLFwiZm9jdXNpblwiLFwiZm9jdXNvdXRcIixcImFuaW1hdGlvbmVuZFwiLFwidHJhbnNpdGlvbmVuZFwiXSkscz1lLm1vZHVsZXMsYz12b2lkIDA9PT1zP25ldyBNYXAoenQubW9kdWxlcyk6cyxsPWUuc3RhY2ssdT12b2lkIDA9PT1sP3p0LnN0YWNrOmwsZj17ZWxlbTpudWxsLGNvbnRhaW5lcjpudWxsLGNvbnRlbnQ6bnVsbCxpY29uQ29udGFpbmVyOm51bGwsdGl0bGVDb250YWluZXI6bnVsbCx0ZXh0Q29udGFpbmVyOm51bGx9LGQ9YSh7fSx6dCk7UXQoXCJpbml0XCIse25vdGljZTppLGRlZmF1bHRzOmR9KTt2YXIgaCx2PWUudHlwZSx5PXZvaWQgMD09PXY/ZC50eXBlOnYsZz1lLnRpdGxlLCQ9dm9pZCAwPT09Zz9kLnRpdGxlOmcsXz1lLnRpdGxlVHJ1c3RlZCxrPXZvaWQgMD09PV8/ZC50aXRsZVRydXN0ZWQ6Xyx4PWUudGV4dCxiPXZvaWQgMD09PXg/ZC50ZXh0Ongsdz1lLnRleHRUcnVzdGVkLE89dm9pZCAwPT09dz9kLnRleHRUcnVzdGVkOncsQz1lLnN0eWxpbmcsTT12b2lkIDA9PT1DP2Quc3R5bGluZzpDLFQ9ZS5pY29ucyxIPXZvaWQgMD09PVQ/ZC5pY29uczpULEU9ZS5tb2RlLFM9dm9pZCAwPT09RT9kLm1vZGU6RSxQPWUuYWRkQ2xhc3MsQT12b2lkIDA9PT1QP2QuYWRkQ2xhc3M6UCxMPWUuYWRkTW9kYWxDbGFzcyxqPXZvaWQgMD09PUw/ZC5hZGRNb2RhbENsYXNzOkwsUj1lLmFkZE1vZGVsZXNzQ2xhc3MsVz12b2lkIDA9PT1SP2QuYWRkTW9kZWxlc3NDbGFzczpSLHE9ZS5hdXRvT3Blbix6PXZvaWQgMD09PXE/ZC5hdXRvT3BlbjpxLFU9ZS53aWR0aCxHPXZvaWQgMD09PVU/ZC53aWR0aDpVLEo9ZS5taW5IZWlnaHQsSz12b2lkIDA9PT1KP2QubWluSGVpZ2h0OkosVj1lLm1heFRleHRIZWlnaHQsWD12b2lkIDA9PT1WP2QubWF4VGV4dEhlaWdodDpWLFk9ZS5pY29uLFo9dm9pZCAwPT09WT9kLmljb246WSx0dD1lLmFuaW1hdGlvbixldD12b2lkIDA9PT10dD9kLmFuaW1hdGlvbjp0dCxudD1lLmFuaW1hdGVTcGVlZCxpdD12b2lkIDA9PT1udD9kLmFuaW1hdGVTcGVlZDpudCxvdD1lLnNoYWRvdyxydD12b2lkIDA9PT1vdD9kLnNoYWRvdzpvdCxzdD1lLmhpZGUsYXQ9dm9pZCAwPT09c3Q/ZC5oaWRlOnN0LGN0PWUuZGVsYXksbHQ9dm9pZCAwPT09Y3Q/ZC5kZWxheTpjdCx1dD1lLm1vdXNlUmVzZXQsZnQ9dm9pZCAwPT09dXQ/ZC5tb3VzZVJlc2V0OnV0LGR0PWUuY2xvc2VyLGh0PXZvaWQgMD09PWR0P2QuY2xvc2VyOmR0LHB0PWUuY2xvc2VySG92ZXIsbXQ9dm9pZCAwPT09cHQ/ZC5jbG9zZXJIb3ZlcjpwdCx2dD1lLnN0aWNrZXIseXQ9dm9pZCAwPT09dnQ/ZC5zdGlja2VyOnZ0LGd0PWUuc3RpY2tlckhvdmVyLCR0PXZvaWQgMD09PWd0P2Quc3RpY2tlckhvdmVyOmd0LF90PWUubGFiZWxzLGt0PXZvaWQgMD09PV90P2QubGFiZWxzOl90LHh0PWUucmVtb3ZlLGJ0PXZvaWQgMD09PXh0P2QucmVtb3ZlOnh0LHd0PWUuZGVzdHJveSxPdD12b2lkIDA9PT13dD9kLmRlc3Ryb3k6d3QsQ3Q9XCJjbG9zZWRcIixNdD1udWxsLFR0PW51bGwsSHQ9bnVsbCxFdD0hMSxTdD1cIlwiLE50PVwiXCIsUHQ9ITEsQXQ9ITEsTHQ9e2VsZW06W10sY29udGFpbmVyOltdfSxqdD0hMSxSdD0hMSxXdD0hMSxJdD0hMSxEdD1udWxsLEZ0PWF0LHF0PW51bGwsQnQ9bnVsbCxVdD11JiYoITA9PT11Lm1vZGFsfHxcImlzaFwiPT09dS5tb2RhbCYmXCJwcmV2ZW50ZWRcIj09PU10KSxHdD1OYU4sSnQ9bnVsbCxLdD1udWxsO2Z1bmN0aW9uIFF0KHQpe3ZhciBlPWFyZ3VtZW50cy5sZW5ndGg+MSYmdm9pZCAwIT09YXJndW1lbnRzWzFdP2FyZ3VtZW50c1sxXTp7fSxuPWEoe25vdGljZTppfSxlKTtcImluaXRcIj09PXQmJkFycmF5LmZyb20oYykuZm9yRWFjaCgoZnVuY3Rpb24odCl7dmFyIGU9cCh0LDIpLGk9ZVswXTtlWzFdO3JldHVyblwiaW5pdFwiaW4gaSYmaS5pbml0KG4pfSkpO3ZhciByPWYuZWxlbXx8dSYmdS5jb250ZXh0fHxkb2N1bWVudC5ib2R5O2lmKCFyKXJldHVybiBvKFwicG5vdGlmeTpcIi5jb25jYXQodCksbiksITA7dmFyIHM9bmV3IEV2ZW50KFwicG5vdGlmeTpcIi5jb25jYXQodCkse2J1YmJsZXM6XCJpbml0XCI9PT10fHxcIm1vdW50XCI9PT10LGNhbmNlbGFibGU6dC5zdGFydHNXaXRoKFwiYmVmb3JlXCIpfSk7cmV0dXJuIHMuZGV0YWlsPW4sci5kaXNwYXRjaEV2ZW50KHMpLCFzLmRlZmF1bHRQcmV2ZW50ZWR9ZnVuY3Rpb24gVnQoKXt2YXIgdD11JiZ1LmNvbnRleHR8fGRvY3VtZW50LmJvZHk7aWYoIXQpdGhyb3cgbmV3IEVycm9yKFwiTm8gY29udGV4dCB0byBpbnNlcnQgdGhpcyBub3RpY2UgaW50by5cIik7aWYoIWYuZWxlbSl0aHJvdyBuZXcgRXJyb3IoXCJUcnlpbmcgdG8gaW5zZXJ0IG5vdGljZSBiZWZvcmUgZWxlbWVudCBpcyBhdmFpbGFibGUuXCIpO2YuZWxlbS5wYXJlbnROb2RlIT09dCYmdC5hcHBlbmRDaGlsZChmLmVsZW0pfWZ1bmN0aW9uIFh0KCl7Zi5lbGVtJiZmLmVsZW0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChmLmVsZW0pfWg9ZnVuY3Rpb24oKXtRdChcIm1vdW50XCIpLHomJlp0KCkuY2F0Y2goKGZ1bmN0aW9uKCl7fSkpfSxJKCkuJCQub25fbW91bnQucHVzaChoKSxmdW5jdGlvbih0KXtJKCkuJCQuYmVmb3JlX3VwZGF0ZS5wdXNoKHQpfSgoZnVuY3Rpb24oKXtRdChcInVwZGF0ZVwiKSxcImNsb3NlZFwiIT09Q3QmJlwid2FpdGluZ1wiIT09Q3QmJmF0IT09RnQmJihhdD9GdHx8YWUoKTpzZSgpKSxcImNsb3NlZFwiIT09Q3QmJlwiY2xvc2luZ1wiIT09Q3QmJnUmJiF1Ll9jb2xsYXBzaW5nTW9kYWxTdGF0ZSYmdS5xdWV1ZVBvc2l0aW9uKCksRnQ9YXR9KSk7dmFyIFl0PWUub3BlbixadD12b2lkIDA9PT1ZdD9mdW5jdGlvbih0KXtpZihcIm9wZW5pbmdcIj09PUN0KXJldHVybiBxdDtpZihcIm9wZW5cIj09PUN0KXJldHVybiBhdCYmYWUoKSxQcm9taXNlLnJlc29sdmUoKTtpZighanQmJnUmJnUuX3Nob3VsZE5vdGljZVdhaXQoaSkpcmV0dXJuIEN0PVwid2FpdGluZ1wiLFByb21pc2UucmVqZWN0KCk7aWYoIVF0KFwiYmVmb3JlT3BlblwiLHtpbW1lZGlhdGU6dH0pKXJldHVybiBQcm9taXNlLnJlamVjdCgpO3ZhciBlLG87Q3Q9XCJvcGVuaW5nXCIsbigyOCxXdD0hMSksbigyNCxTdD1cInBub3RpZnktaW5pdGlhbCBwbm90aWZ5LWhpZGRlblwiKTt2YXIgcj1uZXcgUHJvbWlzZSgoZnVuY3Rpb24odCxuKXtlPXQsbz1ufSkpO3F0PXI7dmFyIHM9ZnVuY3Rpb24oKXthdCYmYWUoKSxDdD1cIm9wZW5cIixRdChcImFmdGVyT3BlblwiLHtpbW1lZGlhdGU6dH0pLHF0PW51bGwsZSgpfTtyZXR1cm4gUnQ/KHMoKSxQcm9taXNlLnJlc29sdmUoKSk6KFZ0KCksd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgoZnVuY3Rpb24oKXtpZihcIm9wZW5pbmdcIiE9PUN0KXJldHVybiBvKCksdm9pZChxdD1udWxsKTt1JiYobigwLHUuX2FuaW1hdGlvbj0hMSx1KSxcInRvcFwiPT09dS5wdXNoJiZ1Ll9yZXNldFBvc2l0aW9uRGF0YSgpLHUuX3Bvc2l0aW9uTm90aWNlKGkpLHUucXVldWVQb3NpdGlvbigwKSxuKDAsdS5fYW5pbWF0aW9uPSEwLHUpKSxpZShzLHQpfSkpLHIpfTpZdCx0ZT1lLmNsb3NlLGVlPXZvaWQgMD09PXRlP2Z1bmN0aW9uKHQsZSxvKXtpZihcImNsb3NpbmdcIj09PUN0KXJldHVybiBCdDtpZihcImNsb3NlZFwiPT09Q3QpcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO3ZhciByLHM9ZnVuY3Rpb24oKXtRdChcImJlZm9yZURlc3Ryb3lcIikmJih1JiZ1Ll9yZW1vdmVOb3RpY2UoaSksaS4kZGVzdHJveSgpLFF0KFwiYWZ0ZXJEZXN0cm95XCIpKX07aWYoXCJ3YWl0aW5nXCI9PT1DdClyZXR1cm4gb3x8KEN0PVwiY2xvc2VkXCIsT3QmJiFvJiZzKCkpLFByb21pc2UucmVzb2x2ZSgpO2lmKCFRdChcImJlZm9yZUNsb3NlXCIse2ltbWVkaWF0ZTp0LHRpbWVySGlkZTplLHdhaXRBZnRlcndhcmQ6b30pKXJldHVybiBQcm9taXNlLnJlamVjdCgpO0N0PVwiY2xvc2luZ1wiLFB0PSEhZSxNdCYmXCJwcmV2ZW50ZWRcIiE9PU10JiZjbGVhclRpbWVvdXQmJmNsZWFyVGltZW91dChNdCksTXQ9bnVsbDt2YXIgYT1uZXcgUHJvbWlzZSgoZnVuY3Rpb24odCxlKXtyPXR9KSk7cmV0dXJuIEJ0PWEscmUoKGZ1bmN0aW9uKCl7bigyNixBdD0hMSksUHQ9ITEsQ3Q9bz9cIndhaXRpbmdcIjpcImNsb3NlZFwiLFF0KFwiYWZ0ZXJDbG9zZVwiLHtpbW1lZGlhdGU6dCx0aW1lckhpZGU6ZSx3YWl0QWZ0ZXJ3YXJkOm99KSxCdD1udWxsLHIoKSxvfHwoT3Q/cygpOmJ0JiZYdCgpKX0pLHQpLGF9OnRlLG5lPWUuYW5pbWF0ZUluLGllPXZvaWQgMD09PW5lP2Z1bmN0aW9uKHQsZSl7RXQ9XCJpblwiO3ZhciBpPWZ1bmN0aW9uIGUobil7aWYoIShuJiZmLmVsZW0mJm4udGFyZ2V0IT09Zi5lbGVtfHwoZi5lbGVtJiZmLmVsZW0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRyYW5zaXRpb25lbmRcIixlKSxUdCYmY2xlYXJUaW1lb3V0KFR0KSxcImluXCIhPT1FdCkpKXt2YXIgaT1SdDtpZighaSYmZi5lbGVtKXt2YXIgbz1mLmVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7Zm9yKHZhciByIGluIG8paWYob1tyXT4wKXtpPSEwO2JyZWFrfX1pPyh0JiZ0LmNhbGwoKSxFdD0hMSk6VHQ9c2V0VGltZW91dChlLDQwKX19O2lmKFwiZmFkZVwiIT09ZXR8fGUpe3ZhciBvPWV0O24oMixldD1cIm5vbmVcIiksbigyNCxTdD1cInBub3RpZnktaW4gXCIuY29uY2F0KFwiZmFkZVwiPT09bz9cInBub3RpZnktZmFkZS1pblwiOlwiXCIpKSxRKCkudGhlbigoZnVuY3Rpb24oKXtuKDIsZXQ9byksaSgpfSkpfWVsc2UgZi5lbGVtJiZmLmVsZW0uYWRkRXZlbnRMaXN0ZW5lcihcInRyYW5zaXRpb25lbmRcIixpKSxuKDI0LFN0PVwicG5vdGlmeS1pblwiKSxRKCkudGhlbigoZnVuY3Rpb24oKXtuKDI0LFN0PVwicG5vdGlmeS1pbiBwbm90aWZ5LWZhZGUtaW5cIiksVHQ9c2V0VGltZW91dChpLDY1MCl9KSl9Om5lLG9lPWUuYW5pbWF0ZU91dCxyZT12b2lkIDA9PT1vZT9mdW5jdGlvbih0LGUpe0V0PVwib3V0XCI7dmFyIGk9ZnVuY3Rpb24gZShpKXtpZighKGkmJmYuZWxlbSYmaS50YXJnZXQhPT1mLmVsZW18fChmLmVsZW0mJmYuZWxlbS5yZW1vdmVFdmVudExpc3RlbmVyKFwidHJhbnNpdGlvbmVuZFwiLGUpLEh0JiZjbGVhclRpbWVvdXQoSHQpLFwib3V0XCIhPT1FdCkpKXt2YXIgbz1SdDtpZighbyYmZi5lbGVtKXt2YXIgcj1mLmVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7Zm9yKHZhciBzIGluIHIpaWYocltzXT4wKXtvPSEwO2JyZWFrfX1mLmVsZW0mJmYuZWxlbS5zdHlsZS5vcGFjaXR5JiZcIjBcIiE9PWYuZWxlbS5zdHlsZS5vcGFjaXR5JiZvP0h0PXNldFRpbWVvdXQoZSw0MCk6KG4oMjQsU3Q9XCJcIiksdCYmdC5jYWxsKCksRXQ9ITEpfX07XCJmYWRlXCIhPT1ldHx8ZT8obigyNCxTdD1cIlwiKSxRKCkudGhlbigoZnVuY3Rpb24oKXtpKCl9KSkpOihmLmVsZW0mJmYuZWxlbS5hZGRFdmVudExpc3RlbmVyKFwidHJhbnNpdGlvbmVuZFwiLGkpLG4oMjQsU3Q9XCJwbm90aWZ5LWluXCIpLEh0PXNldFRpbWVvdXQoaSw2NTApKX06b2U7ZnVuY3Rpb24gc2UoKXtNdCYmXCJwcmV2ZW50ZWRcIiE9PU10JiYoY2xlYXJUaW1lb3V0KE10KSxNdD1udWxsKSxIdCYmY2xlYXJUaW1lb3V0KEh0KSxcImNsb3NpbmdcIj09PUN0JiYoQ3Q9XCJvcGVuXCIsRXQ9ITEsbigyNCxTdD1cImZhZGVcIj09PWV0P1wicG5vdGlmeS1pbiBwbm90aWZ5LWZhZGUtaW5cIjpcInBub3RpZnktaW5cIikpfWZ1bmN0aW9uIGFlKCl7XCJwcmV2ZW50ZWRcIiE9PU10JiYoc2UoKSxsdCE9PTEvMCYmKE10PXNldFRpbWVvdXQoKGZ1bmN0aW9uKCl7cmV0dXJuIGVlKCExLCEwKX0pLGlzTmFOKGx0KT8wOmx0KSkpfXZhciBjZSxsZSx1ZSxmZSxkZSxoZSxwZSxtZSx2ZSx5ZSxnZTtyZXR1cm4gdC4kJHNldD1mdW5jdGlvbih0KXtcIm1vZHVsZXNcImluIHQmJm4oNDYsYz10Lm1vZHVsZXMpLFwic3RhY2tcImluIHQmJm4oMCx1PXQuc3RhY2spLFwidHlwZVwiaW4gdCYmbig0LHk9dC50eXBlKSxcInRpdGxlXCJpbiB0JiZuKDUsJD10LnRpdGxlKSxcInRpdGxlVHJ1c3RlZFwiaW4gdCYmbig2LGs9dC50aXRsZVRydXN0ZWQpLFwidGV4dFwiaW4gdCYmbig3LGI9dC50ZXh0KSxcInRleHRUcnVzdGVkXCJpbiB0JiZuKDgsTz10LnRleHRUcnVzdGVkKSxcInN0eWxpbmdcImluIHQmJm4oNDcsTT10LnN0eWxpbmcpLFwiaWNvbnNcImluIHQmJm4oNDgsSD10Lmljb25zKSxcIm1vZGVcImluIHQmJm4oOSxTPXQubW9kZSksXCJhZGRDbGFzc1wiaW4gdCYmbigxMCxBPXQuYWRkQ2xhc3MpLFwiYWRkTW9kYWxDbGFzc1wiaW4gdCYmbigxMSxqPXQuYWRkTW9kYWxDbGFzcyksXCJhZGRNb2RlbGVzc0NsYXNzXCJpbiB0JiZuKDEyLFc9dC5hZGRNb2RlbGVzc0NsYXNzKSxcImF1dG9PcGVuXCJpbiB0JiZuKDQ5LHo9dC5hdXRvT3BlbiksXCJ3aWR0aFwiaW4gdCYmbig1MCxHPXQud2lkdGgpLFwibWluSGVpZ2h0XCJpbiB0JiZuKDUxLEs9dC5taW5IZWlnaHQpLFwibWF4VGV4dEhlaWdodFwiaW4gdCYmbig1MixYPXQubWF4VGV4dEhlaWdodCksXCJpY29uXCJpbiB0JiZuKDEzLFo9dC5pY29uKSxcImFuaW1hdGlvblwiaW4gdCYmbigyLGV0PXQuYW5pbWF0aW9uKSxcImFuaW1hdGVTcGVlZFwiaW4gdCYmbigxNCxpdD10LmFuaW1hdGVTcGVlZCksXCJzaGFkb3dcImluIHQmJm4oMTUscnQ9dC5zaGFkb3cpLFwiaGlkZVwiaW4gdCYmbigzLGF0PXQuaGlkZSksXCJkZWxheVwiaW4gdCYmbig1MyxsdD10LmRlbGF5KSxcIm1vdXNlUmVzZXRcImluIHQmJm4oNTQsZnQ9dC5tb3VzZVJlc2V0KSxcImNsb3NlclwiaW4gdCYmbigxNixodD10LmNsb3NlciksXCJjbG9zZXJIb3ZlclwiaW4gdCYmbigxNyxtdD10LmNsb3NlckhvdmVyKSxcInN0aWNrZXJcImluIHQmJm4oMTgseXQ9dC5zdGlja2VyKSxcInN0aWNrZXJIb3ZlclwiaW4gdCYmbigxOSwkdD10LnN0aWNrZXJIb3ZlciksXCJsYWJlbHNcImluIHQmJm4oMjAsa3Q9dC5sYWJlbHMpLFwicmVtb3ZlXCJpbiB0JiZuKDU1LGJ0PXQucmVtb3ZlKSxcImRlc3Ryb3lcImluIHQmJm4oNTYsT3Q9dC5kZXN0cm95KSxcIm9wZW5cImluIHQmJm4oNTksWnQ9dC5vcGVuKSxcImNsb3NlXCJpbiB0JiZuKDIzLGVlPXQuY2xvc2UpLFwiYW5pbWF0ZUluXCJpbiB0JiZuKDYwLGllPXQuYW5pbWF0ZUluKSxcImFuaW1hdGVPdXRcImluIHQmJm4oNjEscmU9dC5hbmltYXRlT3V0KX0sdC4kJC51cGRhdGU9ZnVuY3Rpb24oKXs1MjQyODgmdC4kJC5kaXJ0eVsxXSYmbigzMSxjZT1cInN0cmluZ1wiPT10eXBlb2YgRz9cIndpZHRoOiBcIi5jb25jYXQoRyxcIjtcIik6XCJcIiksMTA0ODU3NiZ0LiQkLmRpcnR5WzFdJiZuKDMyLGxlPVwic3RyaW5nXCI9PXR5cGVvZiBLP1wibWluLWhlaWdodDogXCIuY29uY2F0KEssXCI7XCIpOlwiXCIpLDIwOTcxNTImdC4kJC5kaXJ0eVsxXSYmbigzMyx1ZT1cInN0cmluZ1wiPT10eXBlb2YgWD9cIm1heC1oZWlnaHQ6IFwiLmNvbmNhdChYLFwiO1wiKTpcIlwiKSwzMiZ0LiQkLmRpcnR5WzBdJiZuKDM0LGZlPSQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCksMTI4JnQuJCQuZGlydHlbMF0mJm4oMzUsZGU9YiBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSwxJnQuJCQuZGlydHlbMF18MTc5MiZ0LiQkLmRpcnR5WzNdJiZHdCE9PXUmJihHdCYmKEd0Ll9yZW1vdmVOb3RpY2UoaSksbigzMCxVdD0hMSksSnQoKSxLdCgpKSx1JiYodS5fYWRkTm90aWNlKGkpLG4oMTAyLEp0PXUub24oXCJiZWZvcmVBZGRPdmVybGF5XCIsKGZ1bmN0aW9uKCl7bigzMCxVdD0hMCksUXQoXCJlbnRlck1vZGFsXCIpfSkpKSxuKDEwMyxLdD11Lm9uKFwiYWZ0ZXJSZW1vdmVPdmVybGF5XCIsKGZ1bmN0aW9uKCl7bigzMCxVdD0hMSksUXQoXCJsZWF2ZU1vZGFsXCIpfSkpKSksbigxMDEsR3Q9dSkpLDEwNzM3NDg5OTImdC4kJC5kaXJ0eVswXSYmbigzNixoZT1BLm1hdGNoKC9cXGJub25ibG9ja1xcYi8pfHxqLm1hdGNoKC9cXGJub25ibG9ja1xcYi8pJiZVdHx8Vy5tYXRjaCgvXFxibm9uYmxvY2tcXGIvKSYmIVV0KSwxJnQuJCQuZGlydHlbMF0mJm4oMzcscGU9dSYmdS5kaXIxP1wicG5vdGlmeS1zdGFjay1cIi5jb25jYXQodS5kaXIxKTpcIlwiKSwzMjc2OCZ0LiQkLmRpcnR5WzFdJiZuKDM4LG1lPUFycmF5LmZyb20oYykuZmlsdGVyKChmdW5jdGlvbih0KXt2YXIgZT1wKHQsMiksbj1lWzBdO2VbMV07cmV0dXJuXCJQcmVwZW5kQ29udGFpbmVyXCI9PT1uLnBvc2l0aW9ufSkpKSwzMjc2OCZ0LiQkLmRpcnR5WzFdJiZuKDM5LHZlPUFycmF5LmZyb20oYykuZmlsdGVyKChmdW5jdGlvbih0KXt2YXIgZT1wKHQsMiksbj1lWzBdO2VbMV07cmV0dXJuXCJQcmVwZW5kQ29udGVudFwiPT09bi5wb3NpdGlvbn0pKSksMzI3NjgmdC4kJC5kaXJ0eVsxXSYmbig0MCx5ZT1BcnJheS5mcm9tKGMpLmZpbHRlcigoZnVuY3Rpb24odCl7dmFyIGU9cCh0LDIpLG49ZVswXTtlWzFdO3JldHVyblwiQXBwZW5kQ29udGVudFwiPT09bi5wb3NpdGlvbn0pKSksMzI3NjgmdC4kJC5kaXJ0eVsxXSYmbig0MSxnZT1BcnJheS5mcm9tKGMpLmZpbHRlcigoZnVuY3Rpb24odCl7dmFyIGU9cCh0LDIpLG49ZVswXTtlWzFdO3JldHVyblwiQXBwZW5kQ29udGFpbmVyXCI9PT1uLnBvc2l0aW9ufSkpKSwzNCZ0LiQkLmRpcnR5WzBdfDgmdC4kJC5kaXJ0eVsxXSYmZmUmJmYudGl0bGVDb250YWluZXImJmYudGl0bGVDb250YWluZXIuYXBwZW5kQ2hpbGQoJCksMTMwJnQuJCQuZGlydHlbMF18MTYmdC4kJC5kaXJ0eVsxXSYmZGUmJmYudGV4dENvbnRhaW5lciYmZi50ZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKGIpfSxbdSxmLGV0LGF0LHksJCxrLGIsTyxTLEEsaixXLFosaXQscnQsaHQsbXQseXQsJHQsa3QsZnVuY3Rpb24odCl7cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIE0/XCJcIi5jb25jYXQoTSxcIi1cIikuY29uY2F0KHQpOnQgaW4gTT9NW3RdOlwiXCIuY29uY2F0KE0ucHJlZml4LFwiLVwiKS5jb25jYXQodCl9LGZ1bmN0aW9uKHQpe3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiBIP1wiXCIuY29uY2F0KEgsXCItaWNvbi1cIikuY29uY2F0KHQpOnQgaW4gSD9IW3RdOlwiXCIuY29uY2F0KEgucHJlZml4LFwiLWljb24tXCIpLmNvbmNhdCh0KX0sZWUsU3QsTnQsQXQsTHQsV3QsSXQsVXQsY2UsbGUsdWUsZmUsZGUsaGUscGUsbWUsdmUseWUsZ2UsaSxyLGZ1bmN0aW9uKHQpe2lmKG4oMjYsQXQ9ITApLGZ0JiZcImNsb3NpbmdcIj09PUN0KXtpZighUHQpcmV0dXJuO3NlKCl9YXQmJmZ0JiZzZSgpfSxmdW5jdGlvbih0KXtuKDI2LEF0PSExKSxhdCYmZnQmJlwib3V0XCIhPT1FdCYmLTEhPT1bXCJvcGVuXCIsXCJvcGVuaW5nXCJdLmluZGV4T2YoQ3QpJiZhZSgpfSxjLE0sSCx6LEcsSyxYLGx0LGZ0LGJ0LE90LGZ1bmN0aW9uKCl7cmV0dXJuIEN0fSxmdW5jdGlvbigpe3JldHVybiBNdH0sWnQsaWUscmUsc2UsYWUsZnVuY3Rpb24odCl7dD8oc2UoKSxNdD1cInByZXZlbnRlZFwiKTpcInByZXZlbnRlZFwiPT09TXQmJihNdD1udWxsLFwib3BlblwiPT09Q3QmJmF0JiZhZSgpKX0sZnVuY3Rpb24oKXtyZXR1cm4gaS4kb24uYXBwbHkoaSxhcmd1bWVudHMpfSxmdW5jdGlvbigpe3JldHVybiBpLiRzZXQuYXBwbHkoaSxhcmd1bWVudHMpfSxmdW5jdGlvbih0LGUpe28odCxlKX0sZnVuY3Rpb24odCl7Zm9yKHZhciBlPTA7ZTwoYXJndW1lbnRzLmxlbmd0aDw9MT8wOmFyZ3VtZW50cy5sZW5ndGgtMSk7ZSsrKXt2YXIgaT1lKzE8MXx8YXJndW1lbnRzLmxlbmd0aDw9ZSsxP3ZvaWQgMDphcmd1bWVudHNbZSsxXTstMT09PUx0W3RdLmluZGV4T2YoaSkmJkx0W3RdLnB1c2goaSl9bigyNyxMdCl9LGZ1bmN0aW9uKHQpe2Zvcih2YXIgZT0wO2U8KGFyZ3VtZW50cy5sZW5ndGg8PTE/MDphcmd1bWVudHMubGVuZ3RoLTEpO2UrKyl7dmFyIGk9ZSsxPDF8fGFyZ3VtZW50cy5sZW5ndGg8PWUrMT92b2lkIDA6YXJndW1lbnRzW2UrMV0sbz1MdFt0XS5pbmRleE9mKGkpOy0xIT09byYmTHRbdF0uc3BsaWNlKG8sMSl9bigyNyxMdCl9LGZ1bmN0aW9uKHQpe2Zvcih2YXIgZT0wO2U8KGFyZ3VtZW50cy5sZW5ndGg8PTE/MDphcmd1bWVudHMubGVuZ3RoLTEpO2UrKyl7dmFyIG49ZSsxPDF8fGFyZ3VtZW50cy5sZW5ndGg8PWUrMT92b2lkIDA6YXJndW1lbnRzW2UrMV07aWYoLTE9PT1MdFt0XS5pbmRleE9mKG4pKXJldHVybiExfXJldHVybiEwfSxmdW5jdGlvbigpe3JldHVybiBqdH0sZnVuY3Rpb24odCl7cmV0dXJuIGp0PXR9LGZ1bmN0aW9uKCl7cmV0dXJuIFJ0fSxmdW5jdGlvbih0KXtyZXR1cm4gUnQ9dH0sZnVuY3Rpb24odCl7cmV0dXJuIEV0PXR9LGZ1bmN0aW9uKCl7cmV0dXJuIFN0fSxmdW5jdGlvbih0KXtyZXR1cm4gbigyNCxTdD10KX0sZnVuY3Rpb24oKXtyZXR1cm4gTnR9LGZ1bmN0aW9uKHQpe3JldHVybiBuKDI1LE50PXQpfSxmdW5jdGlvbih0LGUsaSl7aWYoRHQmJmNsZWFyVGltZW91dChEdCksV3QhPT10KWlmKHQpbigyOCxXdD0hMCksbigyOSxJdD0hIWUpLFZ0KCksUSgpLnRoZW4oKGZ1bmN0aW9uKCl7d2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgoZnVuY3Rpb24oKXtpZihXdClpZihlJiZpKWkoKTtlbHNle24oMjksSXQ9ITApO3ZhciB0PWZ1bmN0aW9uIHQoKXtmLmVsZW0mJmYuZWxlbS5yZW1vdmVFdmVudExpc3RlbmVyKFwidHJhbnNpdGlvbmVuZFwiLHQpLER0JiZjbGVhclRpbWVvdXQoRHQpLEl0JiZpJiZpKCl9O2YuZWxlbSYmZi5lbGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJ0cmFuc2l0aW9uZW5kXCIsdCksRHQ9c2V0VGltZW91dCh0LDY1MCl9fSkpfSkpO2Vsc2UgaWYoZSluKDI4LFd0PSExKSxuKDI5LEl0PSExKSxidCYmLTE9PT1bXCJvcGVuXCIsXCJvcGVuaW5nXCIsXCJjbG9zaW5nXCJdLmluZGV4T2YoQ3QpJiZYdCgpLGkmJmkoKTtlbHNle3ZhciBvPWZ1bmN0aW9uIHQoKXtmLmVsZW0mJmYuZWxlbS5yZW1vdmVFdmVudExpc3RlbmVyKFwidHJhbnNpdGlvbmVuZFwiLHQpLER0JiZjbGVhclRpbWVvdXQoRHQpLEl0fHwobigyOCxXdD0hMSksYnQmJi0xPT09W1wib3BlblwiLFwib3BlbmluZ1wiLFwiY2xvc2luZ1wiXS5pbmRleE9mKEN0KSYmWHQoKSxpJiZpKCkpfTtuKDI5LEl0PSExKSxmLmVsZW0mJmYuZWxlbS5hZGRFdmVudExpc3RlbmVyKFwidHJhbnNpdGlvbmVuZFwiLG8pLGYuZWxlbSYmZi5lbGVtLnN0eWxlLm9wYWNpdHksRHQ9c2V0VGltZW91dChvLDY1MCl9fSxmdW5jdGlvbigpe3JldHVybiBlZSghMSl9LGZ1bmN0aW9uKCl7cmV0dXJuIG4oMyxhdD0hYXQpfSxmdW5jdGlvbih0KXtCW3Q/XCJ1bnNoaWZ0XCI6XCJwdXNoXCJdKChmdW5jdGlvbigpe2YuaWNvbkNvbnRhaW5lcj10LG4oMSxmKX0pKX0sZnVuY3Rpb24odCl7Qlt0P1widW5zaGlmdFwiOlwicHVzaFwiXSgoZnVuY3Rpb24oKXtmLnRpdGxlQ29udGFpbmVyPXQsbigxLGYpfSkpfSxmdW5jdGlvbih0KXtCW3Q/XCJ1bnNoaWZ0XCI6XCJwdXNoXCJdKChmdW5jdGlvbigpe2YudGV4dENvbnRhaW5lcj10LG4oMSxmKX0pKX0sZnVuY3Rpb24odCl7Qlt0P1widW5zaGlmdFwiOlwicHVzaFwiXSgoZnVuY3Rpb24oKXtmLmNvbnRlbnQ9dCxuKDEsZil9KSl9LGZ1bmN0aW9uKHQpe0JbdD9cInVuc2hpZnRcIjpcInB1c2hcIl0oKGZ1bmN0aW9uKCl7Zi5jb250YWluZXI9dCxuKDEsZil9KSl9LGZ1bmN0aW9uKHQpe0JbdD9cInVuc2hpZnRcIjpcInB1c2hcIl0oKGZ1bmN0aW9uKCl7Zi5lbGVtPXQsbigxLGYpfSkpfV19d2luZG93JiZkb2N1bWVudC5ib2R5P1V0KCk6ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIixVdCk7dmFyIEp0PWZ1bmN0aW9uKHQpeyFmdW5jdGlvbih0LGUpe2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIGUmJm51bGwhPT1lKXRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTt0LnByb3RvdHlwZT1PYmplY3QuY3JlYXRlKGUmJmUucHJvdG90eXBlLHtjb25zdHJ1Y3Rvcjp7dmFsdWU6dCx3cml0YWJsZTohMCxjb25maWd1cmFibGU6ITB9fSksZSYmbCh0LGUpfShzLHQpO3ZhciBlLGkscj0oZT1zLGk9dSgpLGZ1bmN0aW9uKCl7dmFyIHQsbj1jKGUpO2lmKGkpe3ZhciBvPWModGhpcykuY29uc3RydWN0b3I7dD1SZWZsZWN0LmNvbnN0cnVjdChuLGFyZ3VtZW50cyxvKX1lbHNlIHQ9bi5hcHBseSh0aGlzLGFyZ3VtZW50cyk7cmV0dXJuIGgodGhpcyx0KX0pO2Z1bmN0aW9uIHModCl7dmFyIGU7cmV0dXJuIG4odGhpcyxzKSxmdW5jdGlvbih0LGUsbixpLG8scil7dmFyIHM9YXJndW1lbnRzLmxlbmd0aD42JiZ2b2lkIDAhPT1hcmd1bWVudHNbNl0/YXJndW1lbnRzWzZdOlstMV0sYT1qO1codCk7dmFyIGM9ZS5wcm9wc3x8e30sbD10LiQkPXtmcmFnbWVudDpudWxsLGN0eDpudWxsLHByb3BzOnIsdXBkYXRlOmcsbm90X2VxdWFsOm8sYm91bmQ6aygpLG9uX21vdW50OltdLG9uX2Rlc3Ryb3k6W10sYmVmb3JlX3VwZGF0ZTpbXSxhZnRlcl91cGRhdGU6W10sY29udGV4dDpuZXcgTWFwKGE/YS4kJC5jb250ZXh0OltdKSxjYWxsYmFja3M6aygpLGRpcnR5OnMsc2tpcF9ib3VuZDohMX0sdT0hMTtpZihsLmN0eD1uP24odCxjLChmdW5jdGlvbihlLG4pe3ZhciBpPSEoYXJndW1lbnRzLmxlbmd0aDw9MikmJmFyZ3VtZW50cy5sZW5ndGgtMj9hcmd1bWVudHMubGVuZ3RoPD0yP3ZvaWQgMDphcmd1bWVudHNbMl06bjtyZXR1cm4gbC5jdHgmJm8obC5jdHhbZV0sbC5jdHhbZV09aSkmJighbC5za2lwX2JvdW5kJiZsLmJvdW5kW2VdJiZsLmJvdW5kW2VdKGkpLHUmJm10KHQsZSkpLG59KSk6W10sbC51cGRhdGUoKSx1PSEwLHgobC5iZWZvcmVfdXBkYXRlKSxsLmZyYWdtZW50PSEhaSYmaShsLmN0eCksZS50YXJnZXQpe2lmKGUuaHlkcmF0ZSl7dmFyIGY9QShlLnRhcmdldCk7bC5mcmFnbWVudCYmbC5mcmFnbWVudC5sKGYpLGYuZm9yRWFjaChNKX1lbHNlIGwuZnJhZ21lbnQmJmwuZnJhZ21lbnQuYygpO2UuaW50cm8mJnJ0KHQuJCQuZnJhZ21lbnQpLGh0KHQsZS50YXJnZXQsZS5hbmNob3IpLFooKX1XKGEpfShkKGU9ci5jYWxsKHRoaXMpKSx0LEd0LEl0LHcse21vZHVsZXM6NDYsc3RhY2s6MCxyZWZzOjEsdHlwZTo0LHRpdGxlOjUsdGl0bGVUcnVzdGVkOjYsdGV4dDo3LHRleHRUcnVzdGVkOjgsc3R5bGluZzo0NyxpY29uczo0OCxtb2RlOjksYWRkQ2xhc3M6MTAsYWRkTW9kYWxDbGFzczoxMSxhZGRNb2RlbGVzc0NsYXNzOjEyLGF1dG9PcGVuOjQ5LHdpZHRoOjUwLG1pbkhlaWdodDo1MSxtYXhUZXh0SGVpZ2h0OjUyLGljb246MTMsYW5pbWF0aW9uOjIsYW5pbWF0ZVNwZWVkOjE0LHNoYWRvdzoxNSxoaWRlOjMsZGVsYXk6NTMsbW91c2VSZXNldDo1NCxjbG9zZXI6MTYsY2xvc2VySG92ZXI6MTcsc3RpY2tlcjoxOCxzdGlja2VySG92ZXI6MTksbGFiZWxzOjIwLHJlbW92ZTo1NSxkZXN0cm95OjU2LGdldFN0YXRlOjU3LGdldFRpbWVyOjU4LGdldFN0eWxlOjIxLGdldEljb246MjIsb3Blbjo1OSxjbG9zZToyMyxhbmltYXRlSW46NjAsYW5pbWF0ZU91dDo2MSxjYW5jZWxDbG9zZTo2MixxdWV1ZUNsb3NlOjYzLF9wcmV2ZW50VGltZXJDbG9zZTo2NCxvbjo2NSx1cGRhdGU6NjYsZmlyZTo2NyxhZGRNb2R1bGVDbGFzczo2OCxyZW1vdmVNb2R1bGVDbGFzczo2OSxoYXNNb2R1bGVDbGFzczo3MCxnZXRNb2R1bGVIYW5kbGVkOjcxLHNldE1vZHVsZUhhbmRsZWQ6NzIsZ2V0TW9kdWxlT3Blbjo3MyxzZXRNb2R1bGVPcGVuOjc0LHNldEFuaW1hdGluZzo3NSxnZXRBbmltYXRpbmdDbGFzczo3NixzZXRBbmltYXRpbmdDbGFzczo3NyxfZ2V0TW92ZUNsYXNzOjc4LF9zZXRNb3ZlQ2xhc3M6NzksX3NldE1hc2tpbmc6ODB9LFstMSwtMSwtMSwtMV0pLGV9cmV0dXJuIG8ocyxbe2tleTpcIm1vZHVsZXNcIixnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy4kJC5jdHhbNDZdfSxzZXQ6ZnVuY3Rpb24odCl7dGhpcy4kc2V0KHttb2R1bGVzOnR9KSxaKCl9fSx7a2V5Olwic3RhY2tcIixnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy4kJC5jdHhbMF19LHNldDpmdW5jdGlvbih0KXt0aGlzLiRzZXQoe3N0YWNrOnR9KSxaKCl9fSx7a2V5OlwicmVmc1wiLGdldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLiQkLmN0eFsxXX19LHtrZXk6XCJ0eXBlXCIsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuJCQuY3R4WzRdfSxzZXQ6ZnVuY3Rpb24odCl7dGhpcy4kc2V0KHt0eXBlOnR9KSxaKCl9fSx7a2V5OlwidGl0bGVcIixnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy4kJC5jdHhbNV19LHNldDpmdW5jdGlvbih0KXt0aGlzLiRzZXQoe3RpdGxlOnR9KSxaKCl9fSx7a2V5OlwidGl0bGVUcnVzdGVkXCIsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuJCQuY3R4WzZdfSxzZXQ6ZnVuY3Rpb24odCl7dGhpcy4kc2V0KHt0aXRsZVRydXN0ZWQ6dH0pLFooKX19LHtrZXk6XCJ0ZXh0XCIsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuJCQuY3R4WzddfSxzZXQ6ZnVuY3Rpb24odCl7dGhpcy4kc2V0KHt0ZXh0OnR9KSxaKCl9fSx7a2V5OlwidGV4dFRydXN0ZWRcIixnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy4kJC5jdHhbOF19LHNldDpmdW5jdGlvbih0KXt0aGlzLiRzZXQoe3RleHRUcnVzdGVkOnR9KSxaKCl9fSx7a2V5Olwic3R5bGluZ1wiLGdldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLiQkLmN0eFs0N119LHNldDpmdW5jdGlvbih0KXt0aGlzLiRzZXQoe3N0eWxpbmc6dH0pLFooKX19LHtrZXk6XCJpY29uc1wiLGdldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLiQkLmN0eFs0OF19LHNldDpmdW5jdGlvbih0KXt0aGlzLiRzZXQoe2ljb25zOnR9KSxaKCl9fSx7a2V5OlwibW9kZVwiLGdldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLiQkLmN0eFs5XX0sc2V0OmZ1bmN0aW9uKHQpe3RoaXMuJHNldCh7bW9kZTp0fSksWigpfX0se2tleTpcImFkZENsYXNzXCIsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuJCQuY3R4WzEwXX0sc2V0OmZ1bmN0aW9uKHQpe3RoaXMuJHNldCh7YWRkQ2xhc3M6dH0pLFooKX19LHtrZXk6XCJhZGRNb2RhbENsYXNzXCIsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuJCQuY3R4WzExXX0sc2V0OmZ1bmN0aW9uKHQpe3RoaXMuJHNldCh7YWRkTW9kYWxDbGFzczp0fSksWigpfX0se2tleTpcImFkZE1vZGVsZXNzQ2xhc3NcIixnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy4kJC5jdHhbMTJdfSxzZXQ6ZnVuY3Rpb24odCl7dGhpcy4kc2V0KHthZGRNb2RlbGVzc0NsYXNzOnR9KSxaKCl9fSx7a2V5OlwiYXV0b09wZW5cIixnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy4kJC5jdHhbNDldfSxzZXQ6ZnVuY3Rpb24odCl7dGhpcy4kc2V0KHthdXRvT3Blbjp0fSksWigpfX0se2tleTpcIndpZHRoXCIsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuJCQuY3R4WzUwXX0sc2V0OmZ1bmN0aW9uKHQpe3RoaXMuJHNldCh7d2lkdGg6dH0pLFooKX19LHtrZXk6XCJtaW5IZWlnaHRcIixnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy4kJC5jdHhbNTFdfSxzZXQ6ZnVuY3Rpb24odCl7dGhpcy4kc2V0KHttaW5IZWlnaHQ6dH0pLFooKX19LHtrZXk6XCJtYXhUZXh0SGVpZ2h0XCIsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuJCQuY3R4WzUyXX0sc2V0OmZ1bmN0aW9uKHQpe3RoaXMuJHNldCh7bWF4VGV4dEhlaWdodDp0fSksWigpfX0se2tleTpcImljb25cIixnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy4kJC5jdHhbMTNdfSxzZXQ6ZnVuY3Rpb24odCl7dGhpcy4kc2V0KHtpY29uOnR9KSxaKCl9fSx7a2V5OlwiYW5pbWF0aW9uXCIsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuJCQuY3R4WzJdfSxzZXQ6ZnVuY3Rpb24odCl7dGhpcy4kc2V0KHthbmltYXRpb246dH0pLFooKX19LHtrZXk6XCJhbmltYXRlU3BlZWRcIixnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy4kJC5jdHhbMTRdfSxzZXQ6ZnVuY3Rpb24odCl7dGhpcy4kc2V0KHthbmltYXRlU3BlZWQ6dH0pLFooKX19LHtrZXk6XCJzaGFkb3dcIixnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy4kJC5jdHhbMTVdfSxzZXQ6ZnVuY3Rpb24odCl7dGhpcy4kc2V0KHtzaGFkb3c6dH0pLFooKX19LHtrZXk6XCJoaWRlXCIsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuJCQuY3R4WzNdfSxzZXQ6ZnVuY3Rpb24odCl7dGhpcy4kc2V0KHtoaWRlOnR9KSxaKCl9fSx7a2V5OlwiZGVsYXlcIixnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy4kJC5jdHhbNTNdfSxzZXQ6ZnVuY3Rpb24odCl7dGhpcy4kc2V0KHtkZWxheTp0fSksWigpfX0se2tleTpcIm1vdXNlUmVzZXRcIixnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy4kJC5jdHhbNTRdfSxzZXQ6ZnVuY3Rpb24odCl7dGhpcy4kc2V0KHttb3VzZVJlc2V0OnR9KSxaKCl9fSx7a2V5OlwiY2xvc2VyXCIsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuJCQuY3R4WzE2XX0sc2V0OmZ1bmN0aW9uKHQpe3RoaXMuJHNldCh7Y2xvc2VyOnR9KSxaKCl9fSx7a2V5OlwiY2xvc2VySG92ZXJcIixnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy4kJC5jdHhbMTddfSxzZXQ6ZnVuY3Rpb24odCl7dGhpcy4kc2V0KHtjbG9zZXJIb3Zlcjp0fSksWigpfX0se2tleTpcInN0aWNrZXJcIixnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy4kJC5jdHhbMThdfSxzZXQ6ZnVuY3Rpb24odCl7dGhpcy4kc2V0KHtzdGlja2VyOnR9KSxaKCl9fSx7a2V5Olwic3RpY2tlckhvdmVyXCIsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuJCQuY3R4WzE5XX0sc2V0OmZ1bmN0aW9uKHQpe3RoaXMuJHNldCh7c3RpY2tlckhvdmVyOnR9KSxaKCl9fSx7a2V5OlwibGFiZWxzXCIsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuJCQuY3R4WzIwXX0sc2V0OmZ1bmN0aW9uKHQpe3RoaXMuJHNldCh7bGFiZWxzOnR9KSxaKCl9fSx7a2V5OlwicmVtb3ZlXCIsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuJCQuY3R4WzU1XX0sc2V0OmZ1bmN0aW9uKHQpe3RoaXMuJHNldCh7cmVtb3ZlOnR9KSxaKCl9fSx7a2V5OlwiZGVzdHJveVwiLGdldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLiQkLmN0eFs1Nl19LHNldDpmdW5jdGlvbih0KXt0aGlzLiRzZXQoe2Rlc3Ryb3k6dH0pLFooKX19LHtrZXk6XCJnZXRTdGF0ZVwiLGdldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLiQkLmN0eFs1N119fSx7a2V5OlwiZ2V0VGltZXJcIixnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy4kJC5jdHhbNThdfX0se2tleTpcImdldFN0eWxlXCIsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuJCQuY3R4WzIxXX19LHtrZXk6XCJnZXRJY29uXCIsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuJCQuY3R4WzIyXX19LHtrZXk6XCJvcGVuXCIsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuJCQuY3R4WzU5XX0sc2V0OmZ1bmN0aW9uKHQpe3RoaXMuJHNldCh7b3Blbjp0fSksWigpfX0se2tleTpcImNsb3NlXCIsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuJCQuY3R4WzIzXX0sc2V0OmZ1bmN0aW9uKHQpe3RoaXMuJHNldCh7Y2xvc2U6dH0pLFooKX19LHtrZXk6XCJhbmltYXRlSW5cIixnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy4kJC5jdHhbNjBdfSxzZXQ6ZnVuY3Rpb24odCl7dGhpcy4kc2V0KHthbmltYXRlSW46dH0pLFooKX19LHtrZXk6XCJhbmltYXRlT3V0XCIsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuJCQuY3R4WzYxXX0sc2V0OmZ1bmN0aW9uKHQpe3RoaXMuJHNldCh7YW5pbWF0ZU91dDp0fSksWigpfX0se2tleTpcImNhbmNlbENsb3NlXCIsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuJCQuY3R4WzYyXX19LHtrZXk6XCJxdWV1ZUNsb3NlXCIsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuJCQuY3R4WzYzXX19LHtrZXk6XCJfcHJldmVudFRpbWVyQ2xvc2VcIixnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy4kJC5jdHhbNjRdfX0se2tleTpcIm9uXCIsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuJCQuY3R4WzY1XX19LHtrZXk6XCJ1cGRhdGVcIixnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy4kJC5jdHhbNjZdfX0se2tleTpcImZpcmVcIixnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy4kJC5jdHhbNjddfX0se2tleTpcImFkZE1vZHVsZUNsYXNzXCIsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuJCQuY3R4WzY4XX19LHtrZXk6XCJyZW1vdmVNb2R1bGVDbGFzc1wiLGdldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLiQkLmN0eFs2OV19fSx7a2V5OlwiaGFzTW9kdWxlQ2xhc3NcIixnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy4kJC5jdHhbNzBdfX0se2tleTpcImdldE1vZHVsZUhhbmRsZWRcIixnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy4kJC5jdHhbNzFdfX0se2tleTpcInNldE1vZHVsZUhhbmRsZWRcIixnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy4kJC5jdHhbNzJdfX0se2tleTpcImdldE1vZHVsZU9wZW5cIixnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy4kJC5jdHhbNzNdfX0se2tleTpcInNldE1vZHVsZU9wZW5cIixnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy4kJC5jdHhbNzRdfX0se2tleTpcInNldEFuaW1hdGluZ1wiLGdldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLiQkLmN0eFs3NV19fSx7a2V5OlwiZ2V0QW5pbWF0aW5nQ2xhc3NcIixnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy4kJC5jdHhbNzZdfX0se2tleTpcInNldEFuaW1hdGluZ0NsYXNzXCIsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuJCQuY3R4Wzc3XX19LHtrZXk6XCJfZ2V0TW92ZUNsYXNzXCIsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuJCQuY3R4Wzc4XX19LHtrZXk6XCJfc2V0TW92ZUNsYXNzXCIsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuJCQuY3R4Wzc5XX19LHtrZXk6XCJfc2V0TWFza2luZ1wiLGdldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLiQkLmN0eFs4MF19fV0pLHN9KHZ0KTt0LlN0YWNrPXl0LHQuYWxlcnQ9ZnVuY3Rpb24odCl7cmV0dXJuIGd0KER0KHQpKX0sdC5kZWZhdWx0PUp0LHQuZGVmYXVsdE1vZHVsZXM9QnQsdC5kZWZhdWx0U3RhY2s9cXQsdC5kZWZhdWx0cz16dCx0LmVycm9yPWZ1bmN0aW9uKHQpe3JldHVybiBndChEdCh0LFwiZXJyb3JcIikpfSx0LmluZm89ZnVuY3Rpb24odCl7cmV0dXJuIGd0KER0KHQsXCJpbmZvXCIpKX0sdC5ub3RpY2U9ZnVuY3Rpb24odCl7cmV0dXJuIGd0KER0KHQsXCJub3RpY2VcIikpfSx0LnN1Y2Nlc3M9ZnVuY3Rpb24odCl7cmV0dXJuIGd0KER0KHQsXCJzdWNjZXNzXCIpKX0sT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSl9KSk7XG4iLCJ2YXIgSGFuZGxlYmFycyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvaGFuZGxlYmFycy9ydW50aW1lLmpzXCIpO1xuZnVuY3Rpb24gX19kZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIChvYmouX19lc01vZHVsZSA/IG9ialtcImRlZmF1bHRcIl0gOiBvYmopOyB9XG5tb2R1bGUuZXhwb3J0cyA9IChIYW5kbGViYXJzW1wiZGVmYXVsdFwiXSB8fCBIYW5kbGViYXJzKS50ZW1wbGF0ZSh7XCJjb21waWxlclwiOls4LFwiPj0gNC4zLjBcIl0sXCJtYWluXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgaGVscGVyLCBhbGlhczE9ZGVwdGgwICE9IG51bGwgPyBkZXB0aDAgOiAoY29udGFpbmVyLm51bGxDb250ZXh0IHx8IHt9KSwgYWxpYXMyPWNvbnRhaW5lci5ob29rcy5oZWxwZXJNaXNzaW5nLCBhbGlhczM9XCJmdW5jdGlvblwiLCBhbGlhczQ9Y29udGFpbmVyLmVzY2FwZUV4cHJlc3Npb24sIGxvb2t1cFByb3BlcnR5ID0gY29udGFpbmVyLmxvb2t1cFByb3BlcnR5IHx8IGZ1bmN0aW9uKHBhcmVudCwgcHJvcGVydHlOYW1lKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocGFyZW50LCBwcm9wZXJ0eU5hbWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHBhcmVudFtwcm9wZXJ0eU5hbWVdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICB9O1xuXG4gIHJldHVybiBcIjxkaXYgY2xhc3M9J3Bob3RvLWNhcmQnPlxcclxcbiAgPGltZyBzcmM9J1wiXG4gICAgKyBhbGlhczQoKChoZWxwZXIgPSAoaGVscGVyID0gbG9va3VwUHJvcGVydHkoaGVscGVycyxcIndlYmZvcm1hdFVSTFwiKSB8fCAoZGVwdGgwICE9IG51bGwgPyBsb29rdXBQcm9wZXJ0eShkZXB0aDAsXCJ3ZWJmb3JtYXRVUkxcIikgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogYWxpYXMyKSwodHlwZW9mIGhlbHBlciA9PT0gYWxpYXMzID8gaGVscGVyLmNhbGwoYWxpYXMxLHtcIm5hbWVcIjpcIndlYmZvcm1hdFVSTFwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGEsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjoyLFwiY29sdW1uXCI6MTJ9LFwiZW5kXCI6e1wibGluZVwiOjIsXCJjb2x1bW5cIjoyOH19fSkgOiBoZWxwZXIpKSlcbiAgICArIFwiJyBhbHQ9JycgZGF0YS11cmw9J1wiXG4gICAgKyBhbGlhczQoKChoZWxwZXIgPSAoaGVscGVyID0gbG9va3VwUHJvcGVydHkoaGVscGVycyxcImxhcmdlSW1hZ2VVUkxcIikgfHwgKGRlcHRoMCAhPSBudWxsID8gbG9va3VwUHJvcGVydHkoZGVwdGgwLFwibGFyZ2VJbWFnZVVSTFwiKSA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBhbGlhczIpLCh0eXBlb2YgaGVscGVyID09PSBhbGlhczMgPyBoZWxwZXIuY2FsbChhbGlhczEse1wibmFtZVwiOlwibGFyZ2VJbWFnZVVSTFwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGEsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjoyLFwiY29sdW1uXCI6NDd9LFwiZW5kXCI6e1wibGluZVwiOjIsXCJjb2x1bW5cIjo2NH19fSkgOiBoZWxwZXIpKSlcbiAgICArIFwiJyAvPlxcclxcblxcclxcbiAgPGRpdiBjbGFzcz0nc3RhdHMnPlxcclxcbiAgICA8cCBjbGFzcz0nc3RhdHMtaXRlbSc+XFxyXFxuICAgICAgPGkgY2xhc3M9J21hdGVyaWFsLWljb25zJz50aHVtYl91cDwvaT5cXHJcXG4gICAgICBcIlxuICAgICsgYWxpYXM0KCgoaGVscGVyID0gKGhlbHBlciA9IGxvb2t1cFByb3BlcnR5KGhlbHBlcnMsXCJsaWtlc1wiKSB8fCAoZGVwdGgwICE9IG51bGwgPyBsb29rdXBQcm9wZXJ0eShkZXB0aDAsXCJsaWtlc1wiKSA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBhbGlhczIpLCh0eXBlb2YgaGVscGVyID09PSBhbGlhczMgPyBoZWxwZXIuY2FsbChhbGlhczEse1wibmFtZVwiOlwibGlrZXNcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhLFwibG9jXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6NyxcImNvbHVtblwiOjZ9LFwiZW5kXCI6e1wibGluZVwiOjcsXCJjb2x1bW5cIjoxNX19fSkgOiBoZWxwZXIpKSlcbiAgICArIFwiXFxyXFxuICAgIDwvcD5cXHJcXG4gICAgPHAgY2xhc3M9J3N0YXRzLWl0ZW0nPlxcclxcbiAgICAgIDxpIGNsYXNzPSdtYXRlcmlhbC1pY29ucyc+dmlzaWJpbGl0eTwvaT5cXHJcXG4gICAgICBcIlxuICAgICsgYWxpYXM0KCgoaGVscGVyID0gKGhlbHBlciA9IGxvb2t1cFByb3BlcnR5KGhlbHBlcnMsXCJ2aWV3c1wiKSB8fCAoZGVwdGgwICE9IG51bGwgPyBsb29rdXBQcm9wZXJ0eShkZXB0aDAsXCJ2aWV3c1wiKSA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBhbGlhczIpLCh0eXBlb2YgaGVscGVyID09PSBhbGlhczMgPyBoZWxwZXIuY2FsbChhbGlhczEse1wibmFtZVwiOlwidmlld3NcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhLFwibG9jXCI6e1wic3RhcnRcIjp7XCJsaW5lXCI6MTEsXCJjb2x1bW5cIjo2fSxcImVuZFwiOntcImxpbmVcIjoxMSxcImNvbHVtblwiOjE1fX19KSA6IGhlbHBlcikpKVxuICAgICsgXCJcXHJcXG4gICAgPC9wPlxcclxcbiAgICA8cCBjbGFzcz0nc3RhdHMtaXRlbSc+XFxyXFxuICAgICAgPGkgY2xhc3M9J21hdGVyaWFsLWljb25zJz5jb21tZW50PC9pPlxcclxcbiAgICAgIFwiXG4gICAgKyBhbGlhczQoKChoZWxwZXIgPSAoaGVscGVyID0gbG9va3VwUHJvcGVydHkoaGVscGVycyxcImNvbW1lbnRzXCIpIHx8IChkZXB0aDAgIT0gbnVsbCA/IGxvb2t1cFByb3BlcnR5KGRlcHRoMCxcImNvbW1lbnRzXCIpIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGFsaWFzMiksKHR5cGVvZiBoZWxwZXIgPT09IGFsaWFzMyA/IGhlbHBlci5jYWxsKGFsaWFzMSx7XCJuYW1lXCI6XCJjb21tZW50c1wiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGEsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjoxNSxcImNvbHVtblwiOjZ9LFwiZW5kXCI6e1wibGluZVwiOjE1LFwiY29sdW1uXCI6MTh9fX0pIDogaGVscGVyKSkpXG4gICAgKyBcIlxcclxcbiAgICA8L3A+XFxyXFxuICAgIDxwIGNsYXNzPSdzdGF0cy1pdGVtJz5cXHJcXG4gICAgICA8aSBjbGFzcz0nbWF0ZXJpYWwtaWNvbnMnPmNsb3VkX2Rvd25sb2FkPC9pPlxcclxcbiAgICAgIFwiXG4gICAgKyBhbGlhczQoKChoZWxwZXIgPSAoaGVscGVyID0gbG9va3VwUHJvcGVydHkoaGVscGVycyxcImRvd25sb2Fkc1wiKSB8fCAoZGVwdGgwICE9IG51bGwgPyBsb29rdXBQcm9wZXJ0eShkZXB0aDAsXCJkb3dubG9hZHNcIikgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogYWxpYXMyKSwodHlwZW9mIGhlbHBlciA9PT0gYWxpYXMzID8gaGVscGVyLmNhbGwoYWxpYXMxLHtcIm5hbWVcIjpcImRvd25sb2Fkc1wiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGEsXCJsb2NcIjp7XCJzdGFydFwiOntcImxpbmVcIjoxOSxcImNvbHVtblwiOjZ9LFwiZW5kXCI6e1wibGluZVwiOjE5LFwiY29sdW1uXCI6MTl9fX0pIDogaGVscGVyKSkpXG4gICAgKyBcIlxcclxcbiAgICA8L3A+XFxyXFxuICA8L2Rpdj5cXHJcXG48L2Rpdj5cIjtcbn0sXCJ1c2VEYXRhXCI6dHJ1ZX0pOyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbi8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxuLy8gaXN0YW5idWwgaWdub3JlIG5leHRcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IG5ld09ialsnZGVmYXVsdCddID0gb2JqOyByZXR1cm4gbmV3T2JqOyB9IH1cblxudmFyIF9oYW5kbGViYXJzQmFzZSA9IHJlcXVpcmUoJy4vaGFuZGxlYmFycy9iYXNlJyk7XG5cbnZhciBiYXNlID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX2hhbmRsZWJhcnNCYXNlKTtcblxuLy8gRWFjaCBvZiB0aGVzZSBhdWdtZW50IHRoZSBIYW5kbGViYXJzIG9iamVjdC4gTm8gbmVlZCB0byBzZXR1cCBoZXJlLlxuLy8gKFRoaXMgaXMgZG9uZSB0byBlYXNpbHkgc2hhcmUgY29kZSBiZXR3ZWVuIGNvbW1vbmpzIGFuZCBicm93c2UgZW52cylcblxudmFyIF9oYW5kbGViYXJzU2FmZVN0cmluZyA9IHJlcXVpcmUoJy4vaGFuZGxlYmFycy9zYWZlLXN0cmluZycpO1xuXG52YXIgX2hhbmRsZWJhcnNTYWZlU3RyaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2hhbmRsZWJhcnNTYWZlU3RyaW5nKTtcblxudmFyIF9oYW5kbGViYXJzRXhjZXB0aW9uID0gcmVxdWlyZSgnLi9oYW5kbGViYXJzL2V4Y2VwdGlvbicpO1xuXG52YXIgX2hhbmRsZWJhcnNFeGNlcHRpb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaGFuZGxlYmFyc0V4Y2VwdGlvbik7XG5cbnZhciBfaGFuZGxlYmFyc1V0aWxzID0gcmVxdWlyZSgnLi9oYW5kbGViYXJzL3V0aWxzJyk7XG5cbnZhciBVdGlscyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9oYW5kbGViYXJzVXRpbHMpO1xuXG52YXIgX2hhbmRsZWJhcnNSdW50aW1lID0gcmVxdWlyZSgnLi9oYW5kbGViYXJzL3J1bnRpbWUnKTtcblxudmFyIHJ1bnRpbWUgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfaGFuZGxlYmFyc1J1bnRpbWUpO1xuXG52YXIgX2hhbmRsZWJhcnNOb0NvbmZsaWN0ID0gcmVxdWlyZSgnLi9oYW5kbGViYXJzL25vLWNvbmZsaWN0Jyk7XG5cbnZhciBfaGFuZGxlYmFyc05vQ29uZmxpY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaGFuZGxlYmFyc05vQ29uZmxpY3QpO1xuXG4vLyBGb3IgY29tcGF0aWJpbGl0eSBhbmQgdXNhZ2Ugb3V0c2lkZSBvZiBtb2R1bGUgc3lzdGVtcywgbWFrZSB0aGUgSGFuZGxlYmFycyBvYmplY3QgYSBuYW1lc3BhY2VcbmZ1bmN0aW9uIGNyZWF0ZSgpIHtcbiAgdmFyIGhiID0gbmV3IGJhc2UuSGFuZGxlYmFyc0Vudmlyb25tZW50KCk7XG5cbiAgVXRpbHMuZXh0ZW5kKGhiLCBiYXNlKTtcbiAgaGIuU2FmZVN0cmluZyA9IF9oYW5kbGViYXJzU2FmZVN0cmluZzJbJ2RlZmF1bHQnXTtcbiAgaGIuRXhjZXB0aW9uID0gX2hhbmRsZWJhcnNFeGNlcHRpb24yWydkZWZhdWx0J107XG4gIGhiLlV0aWxzID0gVXRpbHM7XG4gIGhiLmVzY2FwZUV4cHJlc3Npb24gPSBVdGlscy5lc2NhcGVFeHByZXNzaW9uO1xuXG4gIGhiLlZNID0gcnVudGltZTtcbiAgaGIudGVtcGxhdGUgPSBmdW5jdGlvbiAoc3BlYykge1xuICAgIHJldHVybiBydW50aW1lLnRlbXBsYXRlKHNwZWMsIGhiKTtcbiAgfTtcblxuICByZXR1cm4gaGI7XG59XG5cbnZhciBpbnN0ID0gY3JlYXRlKCk7XG5pbnN0LmNyZWF0ZSA9IGNyZWF0ZTtcblxuX2hhbmRsZWJhcnNOb0NvbmZsaWN0MlsnZGVmYXVsdCddKGluc3QpO1xuXG5pbnN0WydkZWZhdWx0J10gPSBpbnN0O1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBpbnN0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUwyeHBZaTlvWVc1a2JHVmlZWEp6TG5KMWJuUnBiV1V1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPenM3T3pzN09FSkJRWE5DTEcxQ1FVRnRRanM3U1VGQk4wSXNTVUZCU1RzN096czdiME5CU1U4c01FSkJRVEJDT3pzN08yMURRVU16UWl4M1FrRkJkMEk3T3pzN0swSkJRM1pDTEc5Q1FVRnZRanM3U1VGQkwwSXNTMEZCU3pzN2FVTkJRMUVzYzBKQlFYTkNPenRKUVVGdVF5eFBRVUZQT3p0dlEwRkZTU3d3UWtGQk1FSTdPenM3TzBGQlIycEVMRk5CUVZNc1RVRkJUU3hIUVVGSE8wRkJRMmhDTEUxQlFVa3NSVUZCUlN4SFFVRkhMRWxCUVVrc1NVRkJTU3hEUVVGRExIRkNRVUZ4UWl4RlFVRkZMRU5CUVVNN08wRkJSVEZETEU5QlFVc3NRMEZCUXl4TlFVRk5MRU5CUVVNc1JVRkJSU3hGUVVGRkxFbEJRVWtzUTBGQlF5eERRVUZETzBGQlEzWkNMRWxCUVVVc1EwRkJReXhWUVVGVkxHOURRVUZoTEVOQlFVTTdRVUZETTBJc1NVRkJSU3hEUVVGRExGTkJRVk1zYlVOQlFWa3NRMEZCUXp0QlFVTjZRaXhKUVVGRkxFTkJRVU1zUzBGQlN5eEhRVUZITEV0QlFVc3NRMEZCUXp0QlFVTnFRaXhKUVVGRkxFTkJRVU1zWjBKQlFXZENMRWRCUVVjc1MwRkJTeXhEUVVGRExHZENRVUZuUWl4RFFVRkRPenRCUVVVM1F5eEpRVUZGTEVOQlFVTXNSVUZCUlN4SFFVRkhMRTlCUVU4c1EwRkJRenRCUVVOb1FpeEpRVUZGTEVOQlFVTXNVVUZCVVN4SFFVRkhMRlZCUVZNc1NVRkJTU3hGUVVGRk8wRkJRek5DTEZkQlFVOHNUMEZCVHl4RFFVRkRMRkZCUVZFc1EwRkJReXhKUVVGSkxFVkJRVVVzUlVGQlJTeERRVUZETEVOQlFVTTdSMEZEYmtNc1EwRkJRenM3UVVGRlJpeFRRVUZQTEVWQlFVVXNRMEZCUXp0RFFVTllPenRCUVVWRUxFbEJRVWtzU1VGQlNTeEhRVUZITEUxQlFVMHNSVUZCUlN4RFFVRkRPMEZCUTNCQ0xFbEJRVWtzUTBGQlF5eE5RVUZOTEVkQlFVY3NUVUZCVFN4RFFVRkRPenRCUVVWeVFpeHJRMEZCVnl4SlFVRkpMRU5CUVVNc1EwRkJRenM3UVVGRmFrSXNTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF6czdjVUpCUlZJc1NVRkJTU0lzSW1acGJHVWlPaUpvWVc1a2JHVmlZWEp6TG5KMWJuUnBiV1V1YW5NaUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ0tpQmhjeUJpWVhObElHWnliMjBnSnk0dmFHRnVaR3hsWW1GeWN5OWlZWE5sSnp0Y2JseHVMeThnUldGamFDQnZaaUIwYUdWelpTQmhkV2R0Wlc1MElIUm9aU0JJWVc1a2JHVmlZWEp6SUc5aWFtVmpkQzRnVG04Z2JtVmxaQ0IwYnlCelpYUjFjQ0JvWlhKbExseHVMeThnS0ZSb2FYTWdhWE1nWkc5dVpTQjBieUJsWVhOcGJIa2djMmhoY21VZ1kyOWtaU0JpWlhSM1pXVnVJR052YlcxdmJtcHpJR0Z1WkNCaWNtOTNjMlVnWlc1MmN5bGNibWx0Y0c5eWRDQlRZV1psVTNSeWFXNW5JR1p5YjIwZ0p5NHZhR0Z1Wkd4bFltRnljeTl6WVdabExYTjBjbWx1WnljN1hHNXBiWEJ2Y25RZ1JYaGpaWEIwYVc5dUlHWnliMjBnSnk0dmFHRnVaR3hsWW1GeWN5OWxlR05sY0hScGIyNG5PMXh1YVcxd2IzSjBJQ29nWVhNZ1ZYUnBiSE1nWm5KdmJTQW5MaTlvWVc1a2JHVmlZWEp6TDNWMGFXeHpKenRjYm1sdGNHOXlkQ0FxSUdGeklISjFiblJwYldVZ1puSnZiU0FuTGk5b1lXNWtiR1ZpWVhKekwzSjFiblJwYldVbk8xeHVYRzVwYlhCdmNuUWdibTlEYjI1bWJHbGpkQ0JtY205dElDY3VMMmhoYm1Sc1pXSmhjbk12Ym04dFkyOXVabXhwWTNRbk8xeHVYRzR2THlCR2IzSWdZMjl0Y0dGMGFXSnBiR2wwZVNCaGJtUWdkWE5oWjJVZ2IzVjBjMmxrWlNCdlppQnRiMlIxYkdVZ2MzbHpkR1Z0Y3l3Z2JXRnJaU0IwYUdVZ1NHRnVaR3hsWW1GeWN5QnZZbXBsWTNRZ1lTQnVZVzFsYzNCaFkyVmNibVoxYm1OMGFXOXVJR055WldGMFpTZ3BJSHRjYmlBZ2JHVjBJR2hpSUQwZ2JtVjNJR0poYzJVdVNHRnVaR3hsWW1GeWMwVnVkbWx5YjI1dFpXNTBLQ2s3WEc1Y2JpQWdWWFJwYkhNdVpYaDBaVzVrS0doaUxDQmlZWE5sS1R0Y2JpQWdhR0l1VTJGbVpWTjBjbWx1WnlBOUlGTmhabVZUZEhKcGJtYzdYRzRnSUdoaUxrVjRZMlZ3ZEdsdmJpQTlJRVY0WTJWd2RHbHZianRjYmlBZ2FHSXVWWFJwYkhNZ1BTQlZkR2xzY3p0Y2JpQWdhR0l1WlhOallYQmxSWGh3Y21WemMybHZiaUE5SUZWMGFXeHpMbVZ6WTJGd1pVVjRjSEpsYzNOcGIyNDdYRzVjYmlBZ2FHSXVWazBnUFNCeWRXNTBhVzFsTzF4dUlDQm9ZaTUwWlcxd2JHRjBaU0E5SUdaMWJtTjBhVzl1S0hOd1pXTXBJSHRjYmlBZ0lDQnlaWFIxY200Z2NuVnVkR2x0WlM1MFpXMXdiR0YwWlNoemNHVmpMQ0JvWWlrN1hHNGdJSDA3WEc1Y2JpQWdjbVYwZFhKdUlHaGlPMXh1ZlZ4dVhHNXNaWFFnYVc1emRDQTlJR055WldGMFpTZ3BPMXh1YVc1emRDNWpjbVZoZEdVZ1BTQmpjbVZoZEdVN1hHNWNibTV2UTI5dVpteHBZM1FvYVc1emRDazdYRzVjYm1sdWMzUmJKMlJsWm1GMWJIUW5YU0E5SUdsdWMzUTdYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJR2x1YzNRN1hHNGlYWDA9XG4iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLkhhbmRsZWJhcnNFbnZpcm9ubWVudCA9IEhhbmRsZWJhcnNFbnZpcm9ubWVudDtcbi8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcblxudmFyIF9leGNlcHRpb24gPSByZXF1aXJlKCcuL2V4Y2VwdGlvbicpO1xuXG52YXIgX2V4Y2VwdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9leGNlcHRpb24pO1xuXG52YXIgX2hlbHBlcnMgPSByZXF1aXJlKCcuL2hlbHBlcnMnKTtcblxudmFyIF9kZWNvcmF0b3JzID0gcmVxdWlyZSgnLi9kZWNvcmF0b3JzJyk7XG5cbnZhciBfbG9nZ2VyID0gcmVxdWlyZSgnLi9sb2dnZXInKTtcblxudmFyIF9sb2dnZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbG9nZ2VyKTtcblxudmFyIF9pbnRlcm5hbFByb3RvQWNjZXNzID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9wcm90by1hY2Nlc3MnKTtcblxudmFyIFZFUlNJT04gPSAnNC43LjcnO1xuZXhwb3J0cy5WRVJTSU9OID0gVkVSU0lPTjtcbnZhciBDT01QSUxFUl9SRVZJU0lPTiA9IDg7XG5leHBvcnRzLkNPTVBJTEVSX1JFVklTSU9OID0gQ09NUElMRVJfUkVWSVNJT047XG52YXIgTEFTVF9DT01QQVRJQkxFX0NPTVBJTEVSX1JFVklTSU9OID0gNztcblxuZXhwb3J0cy5MQVNUX0NPTVBBVElCTEVfQ09NUElMRVJfUkVWSVNJT04gPSBMQVNUX0NPTVBBVElCTEVfQ09NUElMRVJfUkVWSVNJT047XG52YXIgUkVWSVNJT05fQ0hBTkdFUyA9IHtcbiAgMTogJzw9IDEuMC5yYy4yJywgLy8gMS4wLnJjLjIgaXMgYWN0dWFsbHkgcmV2MiBidXQgZG9lc24ndCByZXBvcnQgaXRcbiAgMjogJz09IDEuMC4wLXJjLjMnLFxuICAzOiAnPT0gMS4wLjAtcmMuNCcsXG4gIDQ6ICc9PSAxLngueCcsXG4gIDU6ICc9PSAyLjAuMC1hbHBoYS54JyxcbiAgNjogJz49IDIuMC4wLWJldGEuMScsXG4gIDc6ICc+PSA0LjAuMCA8NC4zLjAnLFxuICA4OiAnPj0gNC4zLjAnXG59O1xuXG5leHBvcnRzLlJFVklTSU9OX0NIQU5HRVMgPSBSRVZJU0lPTl9DSEFOR0VTO1xudmFyIG9iamVjdFR5cGUgPSAnW29iamVjdCBPYmplY3RdJztcblxuZnVuY3Rpb24gSGFuZGxlYmFyc0Vudmlyb25tZW50KGhlbHBlcnMsIHBhcnRpYWxzLCBkZWNvcmF0b3JzKSB7XG4gIHRoaXMuaGVscGVycyA9IGhlbHBlcnMgfHwge307XG4gIHRoaXMucGFydGlhbHMgPSBwYXJ0aWFscyB8fCB7fTtcbiAgdGhpcy5kZWNvcmF0b3JzID0gZGVjb3JhdG9ycyB8fCB7fTtcblxuICBfaGVscGVycy5yZWdpc3RlckRlZmF1bHRIZWxwZXJzKHRoaXMpO1xuICBfZGVjb3JhdG9ycy5yZWdpc3RlckRlZmF1bHREZWNvcmF0b3JzKHRoaXMpO1xufVxuXG5IYW5kbGViYXJzRW52aXJvbm1lbnQucHJvdG90eXBlID0ge1xuICBjb25zdHJ1Y3RvcjogSGFuZGxlYmFyc0Vudmlyb25tZW50LFxuXG4gIGxvZ2dlcjogX2xvZ2dlcjJbJ2RlZmF1bHQnXSxcbiAgbG9nOiBfbG9nZ2VyMlsnZGVmYXVsdCddLmxvZyxcblxuICByZWdpc3RlckhlbHBlcjogZnVuY3Rpb24gcmVnaXN0ZXJIZWxwZXIobmFtZSwgZm4pIHtcbiAgICBpZiAoX3V0aWxzLnRvU3RyaW5nLmNhbGwobmFtZSkgPT09IG9iamVjdFR5cGUpIHtcbiAgICAgIGlmIChmbikge1xuICAgICAgICB0aHJvdyBuZXcgX2V4Y2VwdGlvbjJbJ2RlZmF1bHQnXSgnQXJnIG5vdCBzdXBwb3J0ZWQgd2l0aCBtdWx0aXBsZSBoZWxwZXJzJyk7XG4gICAgICB9XG4gICAgICBfdXRpbHMuZXh0ZW5kKHRoaXMuaGVscGVycywgbmFtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaGVscGVyc1tuYW1lXSA9IGZuO1xuICAgIH1cbiAgfSxcbiAgdW5yZWdpc3RlckhlbHBlcjogZnVuY3Rpb24gdW5yZWdpc3RlckhlbHBlcihuYW1lKSB7XG4gICAgZGVsZXRlIHRoaXMuaGVscGVyc1tuYW1lXTtcbiAgfSxcblxuICByZWdpc3RlclBhcnRpYWw6IGZ1bmN0aW9uIHJlZ2lzdGVyUGFydGlhbChuYW1lLCBwYXJ0aWFsKSB7XG4gICAgaWYgKF91dGlscy50b1N0cmluZy5jYWxsKG5hbWUpID09PSBvYmplY3RUeXBlKSB7XG4gICAgICBfdXRpbHMuZXh0ZW5kKHRoaXMucGFydGlhbHMsIG5hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodHlwZW9mIHBhcnRpYWwgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRocm93IG5ldyBfZXhjZXB0aW9uMlsnZGVmYXVsdCddKCdBdHRlbXB0aW5nIHRvIHJlZ2lzdGVyIGEgcGFydGlhbCBjYWxsZWQgXCInICsgbmFtZSArICdcIiBhcyB1bmRlZmluZWQnKTtcbiAgICAgIH1cbiAgICAgIHRoaXMucGFydGlhbHNbbmFtZV0gPSBwYXJ0aWFsO1xuICAgIH1cbiAgfSxcbiAgdW5yZWdpc3RlclBhcnRpYWw6IGZ1bmN0aW9uIHVucmVnaXN0ZXJQYXJ0aWFsKG5hbWUpIHtcbiAgICBkZWxldGUgdGhpcy5wYXJ0aWFsc1tuYW1lXTtcbiAgfSxcblxuICByZWdpc3RlckRlY29yYXRvcjogZnVuY3Rpb24gcmVnaXN0ZXJEZWNvcmF0b3IobmFtZSwgZm4pIHtcbiAgICBpZiAoX3V0aWxzLnRvU3RyaW5nLmNhbGwobmFtZSkgPT09IG9iamVjdFR5cGUpIHtcbiAgICAgIGlmIChmbikge1xuICAgICAgICB0aHJvdyBuZXcgX2V4Y2VwdGlvbjJbJ2RlZmF1bHQnXSgnQXJnIG5vdCBzdXBwb3J0ZWQgd2l0aCBtdWx0aXBsZSBkZWNvcmF0b3JzJyk7XG4gICAgICB9XG4gICAgICBfdXRpbHMuZXh0ZW5kKHRoaXMuZGVjb3JhdG9ycywgbmFtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGVjb3JhdG9yc1tuYW1lXSA9IGZuO1xuICAgIH1cbiAgfSxcbiAgdW5yZWdpc3RlckRlY29yYXRvcjogZnVuY3Rpb24gdW5yZWdpc3RlckRlY29yYXRvcihuYW1lKSB7XG4gICAgZGVsZXRlIHRoaXMuZGVjb3JhdG9yc1tuYW1lXTtcbiAgfSxcbiAgLyoqXG4gICAqIFJlc2V0IHRoZSBtZW1vcnkgb2YgaWxsZWdhbCBwcm9wZXJ0eSBhY2Nlc3NlcyB0aGF0IGhhdmUgYWxyZWFkeSBiZWVuIGxvZ2dlZC5cbiAgICogQGRlcHJlY2F0ZWQgc2hvdWxkIG9ubHkgYmUgdXNlZCBpbiBoYW5kbGViYXJzIHRlc3QtY2FzZXNcbiAgICovXG4gIHJlc2V0TG9nZ2VkUHJvcGVydHlBY2Nlc3NlczogZnVuY3Rpb24gcmVzZXRMb2dnZWRQcm9wZXJ0eUFjY2Vzc2VzKCkge1xuICAgIF9pbnRlcm5hbFByb3RvQWNjZXNzLnJlc2V0TG9nZ2VkUHJvcGVydGllcygpO1xuICB9XG59O1xuXG52YXIgbG9nID0gX2xvZ2dlcjJbJ2RlZmF1bHQnXS5sb2c7XG5cbmV4cG9ydHMubG9nID0gbG9nO1xuZXhwb3J0cy5jcmVhdGVGcmFtZSA9IF91dGlscy5jcmVhdGVGcmFtZTtcbmV4cG9ydHMubG9nZ2VyID0gX2xvZ2dlcjJbJ2RlZmF1bHQnXTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYklpNHVMeTR1THk0dUwyeHBZaTlvWVc1a2JHVmlZWEp6TDJKaGMyVXVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN096czdjVUpCUVRoRExGTkJRVk03TzNsQ1FVTnFReXhoUVVGaE96czdPM1ZDUVVOSkxGZEJRVmM3T3pCQ1FVTlNMR05CUVdNN08zTkNRVU55UXl4VlFVRlZPenM3TzIxRFFVTlRMSGxDUVVGNVFqczdRVUZGZUVRc1NVRkJUU3hQUVVGUExFZEJRVWNzVDBGQlR5eERRVUZET3p0QlFVTjRRaXhKUVVGTkxHbENRVUZwUWl4SFFVRkhMRU5CUVVNc1EwRkJRenM3UVVGRE5VSXNTVUZCVFN4cFEwRkJhVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdPenRCUVVVMVF5eEpRVUZOTEdkQ1FVRm5RaXhIUVVGSE8wRkJRemxDTEVkQlFVTXNSVUZCUlN4aFFVRmhPMEZCUTJoQ0xFZEJRVU1zUlVGQlJTeGxRVUZsTzBGQlEyeENMRWRCUVVNc1JVRkJSU3hsUVVGbE8wRkJRMnhDTEVkQlFVTXNSVUZCUlN4VlFVRlZPMEZCUTJJc1IwRkJReXhGUVVGRkxHdENRVUZyUWp0QlFVTnlRaXhIUVVGRExFVkJRVVVzYVVKQlFXbENPMEZCUTNCQ0xFZEJRVU1zUlVGQlJTeHBRa0ZCYVVJN1FVRkRjRUlzUjBGQlF5eEZRVUZGTEZWQlFWVTdRMEZEWkN4RFFVRkRPenM3UVVGRlJpeEpRVUZOTEZWQlFWVXNSMEZCUnl4cFFrRkJhVUlzUTBGQlF6czdRVUZGT1VJc1UwRkJVeXh4UWtGQmNVSXNRMEZCUXl4UFFVRlBMRVZCUVVVc1VVRkJVU3hGUVVGRkxGVkJRVlVzUlVGQlJUdEJRVU51UlN4TlFVRkpMRU5CUVVNc1QwRkJUeXhIUVVGSExFOUJRVThzU1VGQlNTeEZRVUZGTEVOQlFVTTdRVUZETjBJc1RVRkJTU3hEUVVGRExGRkJRVkVzUjBGQlJ5eFJRVUZSTEVsQlFVa3NSVUZCUlN4RFFVRkRPMEZCUXk5Q0xFMUJRVWtzUTBGQlF5eFZRVUZWTEVkQlFVY3NWVUZCVlN4SlFVRkpMRVZCUVVVc1EwRkJRenM3UVVGRmJrTXNhME5CUVhWQ0xFbEJRVWtzUTBGQlF5eERRVUZETzBGQlF6ZENMSGREUVVFd1FpeEpRVUZKTEVOQlFVTXNRMEZCUXp0RFFVTnFRenM3UVVGRlJDeHhRa0ZCY1VJc1EwRkJReXhUUVVGVExFZEJRVWM3UVVGRGFFTXNZVUZCVnl4RlFVRkZMSEZDUVVGeFFqczdRVUZGYkVNc1VVRkJUU3h4UWtGQlVUdEJRVU5rTEV0QlFVY3NSVUZCUlN4dlFrRkJUeXhIUVVGSE96dEJRVVZtTEdkQ1FVRmpMRVZCUVVVc2QwSkJRVk1zU1VGQlNTeEZRVUZGTEVWQlFVVXNSVUZCUlR0QlFVTnFReXhSUVVGSkxHZENRVUZUTEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhWUVVGVkxFVkJRVVU3UVVGRGRFTXNWVUZCU1N4RlFVRkZMRVZCUVVVN1FVRkRUaXhqUVVGTkxESkNRVUZqTEhsRFFVRjVReXhEUVVGRExFTkJRVU03VDBGRGFFVTdRVUZEUkN4dlFrRkJUeXhKUVVGSkxFTkJRVU1zVDBGQlR5eEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRPMHRCUXpWQ0xFMUJRVTA3UVVGRFRDeFZRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFVkJRVVVzUTBGQlF6dExRVU42UWp0SFFVTkdPMEZCUTBRc2EwSkJRV2RDTEVWQlFVVXNNRUpCUVZNc1NVRkJTU3hGUVVGRk8wRkJReTlDTEZkQlFVOHNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dEhRVU16UWpzN1FVRkZSQ3hwUWtGQlpTeEZRVUZGTEhsQ1FVRlRMRWxCUVVrc1JVRkJSU3hQUVVGUExFVkJRVVU3UVVGRGRrTXNVVUZCU1N4blFrRkJVeXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEV0QlFVc3NWVUZCVlN4RlFVRkZPMEZCUTNSRExHOUNRVUZQTEVsQlFVa3NRMEZCUXl4UlFVRlJMRVZCUVVVc1NVRkJTU3hEUVVGRExFTkJRVU03UzBGRE4wSXNUVUZCVFR0QlFVTk1MRlZCUVVrc1QwRkJUeXhQUVVGUExFdEJRVXNzVjBGQlZ5eEZRVUZGTzBGQlEyeERMR05CUVUwc2VVVkJRM2RETEVsQlFVa3NiMEpCUTJwRUxFTkJRVU03VDBGRFNEdEJRVU5FTEZWQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzVDBGQlR5eERRVUZETzB0QlF5OUNPMGRCUTBZN1FVRkRSQ3h0UWtGQmFVSXNSVUZCUlN3eVFrRkJVeXhKUVVGSkxFVkJRVVU3UVVGRGFFTXNWMEZCVHl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzBkQlF6VkNPenRCUVVWRUxHMUNRVUZwUWl4RlFVRkZMREpDUVVGVExFbEJRVWtzUlVGQlJTeEZRVUZGTEVWQlFVVTdRVUZEY0VNc1VVRkJTU3huUWtGQlV5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1ZVRkJWU3hGUVVGRk8wRkJRM1JETEZWQlFVa3NSVUZCUlN4RlFVRkZPMEZCUTA0c1kwRkJUU3d5UWtGQll5dzBRMEZCTkVNc1EwRkJReXhEUVVGRE8wOUJRMjVGTzBGQlEwUXNiMEpCUVU4c1NVRkJTU3hEUVVGRExGVkJRVlVzUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXp0TFFVTXZRaXhOUVVGTk8wRkJRMHdzVlVGQlNTeERRVUZETEZWQlFWVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhGUVVGRkxFTkJRVU03UzBGRE5VSTdSMEZEUmp0QlFVTkVMSEZDUVVGdFFpeEZRVUZGTERaQ1FVRlRMRWxCUVVrc1JVRkJSVHRCUVVOc1F5eFhRVUZQTEVsQlFVa3NRMEZCUXl4VlFVRlZMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03UjBGRE9VSTdPenM3TzBGQlMwUXNOa0pCUVRKQ0xFVkJRVUVzZFVOQlFVYzdRVUZETlVJc1owUkJRWFZDTEVOQlFVTTdSMEZEZWtJN1EwRkRSaXhEUVVGRE96dEJRVVZMTEVsQlFVa3NSMEZCUnl4SFFVRkhMRzlDUVVGUExFZEJRVWNzUTBGQlF6czdPMUZCUlc1Q0xGZEJRVmM3VVVGQlJTeE5RVUZOSWl3aVptbHNaU0k2SW1KaGMyVXVhbk1pTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnZXlCamNtVmhkR1ZHY21GdFpTd2daWGgwWlc1a0xDQjBiMU4wY21sdVp5QjlJR1p5YjIwZ0p5NHZkWFJwYkhNbk8xeHVhVzF3YjNKMElFVjRZMlZ3ZEdsdmJpQm1jbTl0SUNjdUwyVjRZMlZ3ZEdsdmJpYzdYRzVwYlhCdmNuUWdleUJ5WldkcGMzUmxja1JsWm1GMWJIUklaV3h3WlhKeklIMGdabkp2YlNBbkxpOW9aV3h3WlhKekp6dGNibWx0Y0c5eWRDQjdJSEpsWjJsemRHVnlSR1ZtWVhWc2RFUmxZMjl5WVhSdmNuTWdmU0JtY205dElDY3VMMlJsWTI5eVlYUnZjbk1uTzF4dWFXMXdiM0owSUd4dloyZGxjaUJtY205dElDY3VMMnh2WjJkbGNpYzdYRzVwYlhCdmNuUWdleUJ5WlhObGRFeHZaMmRsWkZCeWIzQmxjblJwWlhNZ2ZTQm1jbTl0SUNjdUwybHVkR1Z5Ym1Gc0wzQnliM1J2TFdGalkyVnpjeWM3WEc1Y2JtVjRjRzl5ZENCamIyNXpkQ0JXUlZKVFNVOU9JRDBnSnpRdU55NDNKenRjYm1WNGNHOXlkQ0JqYjI1emRDQkRUMDFRU1V4RlVsOVNSVlpKVTBsUFRpQTlJRGc3WEc1bGVIQnZjblFnWTI5dWMzUWdURUZUVkY5RFQwMVFRVlJKUWt4RlgwTlBUVkJKVEVWU1gxSkZWa2xUU1U5T0lEMGdOenRjYmx4dVpYaHdiM0owSUdOdmJuTjBJRkpGVmtsVFNVOU9YME5JUVU1SFJWTWdQU0I3WEc0Z0lERTZJQ2M4UFNBeExqQXVjbU11TWljc0lDOHZJREV1TUM1eVl5NHlJR2x6SUdGamRIVmhiR3g1SUhKbGRqSWdZblYwSUdSdlpYTnVKM1FnY21Wd2IzSjBJR2wwWEc0Z0lESTZJQ2M5UFNBeExqQXVNQzF5WXk0ekp5eGNiaUFnTXpvZ0p6MDlJREV1TUM0d0xYSmpMalFuTEZ4dUlDQTBPaUFuUFQwZ01TNTRMbmduTEZ4dUlDQTFPaUFuUFQwZ01pNHdMakF0WVd4d2FHRXVlQ2NzWEc0Z0lEWTZJQ2MrUFNBeUxqQXVNQzFpWlhSaExqRW5MRnh1SUNBM09pQW5QajBnTkM0d0xqQWdQRFF1TXk0d0p5eGNiaUFnT0RvZ0p6NDlJRFF1TXk0d0oxeHVmVHRjYmx4dVkyOXVjM1FnYjJKcVpXTjBWSGx3WlNBOUlDZGJiMkpxWldOMElFOWlhbVZqZEYwbk8xeHVYRzVsZUhCdmNuUWdablZ1WTNScGIyNGdTR0Z1Wkd4bFltRnljMFZ1ZG1seWIyNXRaVzUwS0dobGJIQmxjbk1zSUhCaGNuUnBZV3h6TENCa1pXTnZjbUYwYjNKektTQjdYRzRnSUhSb2FYTXVhR1ZzY0dWeWN5QTlJR2hsYkhCbGNuTWdmSHdnZTMwN1hHNGdJSFJvYVhNdWNHRnlkR2xoYkhNZ1BTQndZWEowYVdGc2N5QjhmQ0I3ZlR0Y2JpQWdkR2hwY3k1a1pXTnZjbUYwYjNKeklEMGdaR1ZqYjNKaGRHOXljeUI4ZkNCN2ZUdGNibHh1SUNCeVpXZHBjM1JsY2tSbFptRjFiSFJJWld4d1pYSnpLSFJvYVhNcE8xeHVJQ0J5WldkcGMzUmxja1JsWm1GMWJIUkVaV052Y21GMGIzSnpLSFJvYVhNcE8xeHVmVnh1WEc1SVlXNWtiR1ZpWVhKelJXNTJhWEp2Ym0xbGJuUXVjSEp2ZEc5MGVYQmxJRDBnZTF4dUlDQmpiMjV6ZEhKMVkzUnZjam9nU0dGdVpHeGxZbUZ5YzBWdWRtbHliMjV0Wlc1MExGeHVYRzRnSUd4dloyZGxjam9nYkc5bloyVnlMRnh1SUNCc2IyYzZJR3h2WjJkbGNpNXNiMmNzWEc1Y2JpQWdjbVZuYVhOMFpYSklaV3h3WlhJNklHWjFibU4wYVc5dUtHNWhiV1VzSUdadUtTQjdYRzRnSUNBZ2FXWWdLSFJ2VTNSeWFXNW5MbU5oYkd3b2JtRnRaU2tnUFQwOUlHOWlhbVZqZEZSNWNHVXBJSHRjYmlBZ0lDQWdJR2xtSUNobWJpa2dlMXh1SUNBZ0lDQWdJQ0IwYUhKdmR5QnVaWGNnUlhoalpYQjBhVzl1S0NkQmNtY2dibTkwSUhOMWNIQnZjblJsWkNCM2FYUm9JRzExYkhScGNHeGxJR2hsYkhCbGNuTW5LVHRjYmlBZ0lDQWdJSDFjYmlBZ0lDQWdJR1Y0ZEdWdVpDaDBhR2x6TG1obGJIQmxjbk1zSUc1aGJXVXBPMXh1SUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNCMGFHbHpMbWhsYkhCbGNuTmJibUZ0WlYwZ1BTQm1ianRjYmlBZ0lDQjlYRzRnSUgwc1hHNGdJSFZ1Y21WbmFYTjBaWEpJWld4d1pYSTZJR1oxYm1OMGFXOXVLRzVoYldVcElIdGNiaUFnSUNCa1pXeGxkR1VnZEdocGN5NW9aV3h3WlhKelcyNWhiV1ZkTzF4dUlDQjlMRnh1WEc0Z0lISmxaMmx6ZEdWeVVHRnlkR2xoYkRvZ1puVnVZM1JwYjI0b2JtRnRaU3dnY0dGeWRHbGhiQ2tnZTF4dUlDQWdJR2xtSUNoMGIxTjBjbWx1Wnk1allXeHNLRzVoYldVcElEMDlQU0J2WW1wbFkzUlVlWEJsS1NCN1hHNGdJQ0FnSUNCbGVIUmxibVFvZEdocGN5NXdZWEowYVdGc2N5d2dibUZ0WlNrN1hHNGdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJR2xtSUNoMGVYQmxiMllnY0dGeWRHbGhiQ0E5UFQwZ0ozVnVaR1ZtYVc1bFpDY3BJSHRjYmlBZ0lDQWdJQ0FnZEdoeWIzY2dibVYzSUVWNFkyVndkR2x2YmloY2JpQWdJQ0FnSUNBZ0lDQmdRWFIwWlcxd2RHbHVaeUIwYnlCeVpXZHBjM1JsY2lCaElIQmhjblJwWVd3Z1kyRnNiR1ZrSUZ3aUpIdHVZVzFsZlZ3aUlHRnpJSFZ1WkdWbWFXNWxaR0JjYmlBZ0lDQWdJQ0FnS1R0Y2JpQWdJQ0FnSUgxY2JpQWdJQ0FnSUhSb2FYTXVjR0Z5ZEdsaGJITmJibUZ0WlYwZ1BTQndZWEowYVdGc08xeHVJQ0FnSUgxY2JpQWdmU3hjYmlBZ2RXNXlaV2RwYzNSbGNsQmhjblJwWVd3NklHWjFibU4wYVc5dUtHNWhiV1VwSUh0Y2JpQWdJQ0JrWld4bGRHVWdkR2hwY3k1d1lYSjBhV0ZzYzF0dVlXMWxYVHRjYmlBZ2ZTeGNibHh1SUNCeVpXZHBjM1JsY2tSbFkyOXlZWFJ2Y2pvZ1puVnVZM1JwYjI0b2JtRnRaU3dnWm00cElIdGNiaUFnSUNCcFppQW9kRzlUZEhKcGJtY3VZMkZzYkNodVlXMWxLU0E5UFQwZ2IySnFaV04wVkhsd1pTa2dlMXh1SUNBZ0lDQWdhV1lnS0dadUtTQjdYRzRnSUNBZ0lDQWdJSFJvY205M0lHNWxkeUJGZUdObGNIUnBiMjRvSjBGeVp5QnViM1FnYzNWd2NHOXlkR1ZrSUhkcGRHZ2diWFZzZEdsd2JHVWdaR1ZqYjNKaGRHOXljeWNwTzF4dUlDQWdJQ0FnZlZ4dUlDQWdJQ0FnWlhoMFpXNWtLSFJvYVhNdVpHVmpiM0poZEc5eWN5d2dibUZ0WlNrN1hHNGdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJSFJvYVhNdVpHVmpiM0poZEc5eWMxdHVZVzFsWFNBOUlHWnVPMXh1SUNBZ0lIMWNiaUFnZlN4Y2JpQWdkVzV5WldkcGMzUmxja1JsWTI5eVlYUnZjam9nWm5WdVkzUnBiMjRvYm1GdFpTa2dlMXh1SUNBZ0lHUmxiR1YwWlNCMGFHbHpMbVJsWTI5eVlYUnZjbk5iYm1GdFpWMDdYRzRnSUgwc1hHNGdJQzhxS2x4dUlDQWdLaUJTWlhObGRDQjBhR1VnYldWdGIzSjVJRzltSUdsc2JHVm5ZV3dnY0hKdmNHVnlkSGtnWVdOalpYTnpaWE1nZEdoaGRDQm9ZWFpsSUdGc2NtVmhaSGtnWW1WbGJpQnNiMmRuWldRdVhHNGdJQ0FxSUVCa1pYQnlaV05oZEdWa0lITm9iM1ZzWkNCdmJteDVJR0psSUhWelpXUWdhVzRnYUdGdVpHeGxZbUZ5Y3lCMFpYTjBMV05oYzJWelhHNGdJQ0FxTDF4dUlDQnlaWE5sZEV4dloyZGxaRkJ5YjNCbGNuUjVRV05qWlhOelpYTW9LU0I3WEc0Z0lDQWdjbVZ6WlhSTWIyZG5aV1JRY205d1pYSjBhV1Z6S0NrN1hHNGdJSDFjYm4wN1hHNWNibVY0Y0c5eWRDQnNaWFFnYkc5bklEMGdiRzluWjJWeUxteHZaenRjYmx4dVpYaHdiM0owSUhzZ1kzSmxZWFJsUm5KaGJXVXNJR3h2WjJkbGNpQjlPMXh1SWwxOVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5yZWdpc3RlckRlZmF1bHREZWNvcmF0b3JzID0gcmVnaXN0ZXJEZWZhdWx0RGVjb3JhdG9ycztcbi8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9kZWNvcmF0b3JzSW5saW5lID0gcmVxdWlyZSgnLi9kZWNvcmF0b3JzL2lubGluZScpO1xuXG52YXIgX2RlY29yYXRvcnNJbmxpbmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVjb3JhdG9yc0lubGluZSk7XG5cbmZ1bmN0aW9uIHJlZ2lzdGVyRGVmYXVsdERlY29yYXRvcnMoaW5zdGFuY2UpIHtcbiAgX2RlY29yYXRvcnNJbmxpbmUyWydkZWZhdWx0J10oaW5zdGFuY2UpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMeTR1TDJ4cFlpOW9ZVzVrYkdWaVlYSnpMMlJsWTI5eVlYUnZjbk11YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPenM3WjBOQlFUSkNMSEZDUVVGeFFqczdPenRCUVVWNlF5eFRRVUZUTEhsQ1FVRjVRaXhEUVVGRExGRkJRVkVzUlVGQlJUdEJRVU5zUkN4blEwRkJaU3hSUVVGUkxFTkJRVU1zUTBGQlF6dERRVU14UWlJc0ltWnBiR1VpT2lKa1pXTnZjbUYwYjNKekxtcHpJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJSEpsWjJsemRHVnlTVzVzYVc1bElHWnliMjBnSnk0dlpHVmpiM0poZEc5eWN5OXBibXhwYm1Vbk8xeHVYRzVsZUhCdmNuUWdablZ1WTNScGIyNGdjbVZuYVhOMFpYSkVaV1poZFd4MFJHVmpiM0poZEc5eWN5aHBibk4wWVc1alpTa2dlMXh1SUNCeVpXZHBjM1JsY2tsdWJHbHVaU2hwYm5OMFlXNWpaU2s3WEc1OVhHNGlYWDA9XG4iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi91dGlscycpO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBmdW5jdGlvbiAoaW5zdGFuY2UpIHtcbiAgaW5zdGFuY2UucmVnaXN0ZXJEZWNvcmF0b3IoJ2lubGluZScsIGZ1bmN0aW9uIChmbiwgcHJvcHMsIGNvbnRhaW5lciwgb3B0aW9ucykge1xuICAgIHZhciByZXQgPSBmbjtcbiAgICBpZiAoIXByb3BzLnBhcnRpYWxzKSB7XG4gICAgICBwcm9wcy5wYXJ0aWFscyA9IHt9O1xuICAgICAgcmV0ID0gZnVuY3Rpb24gKGNvbnRleHQsIG9wdGlvbnMpIHtcbiAgICAgICAgLy8gQ3JlYXRlIGEgbmV3IHBhcnRpYWxzIHN0YWNrIGZyYW1lIHByaW9yIHRvIGV4ZWMuXG4gICAgICAgIHZhciBvcmlnaW5hbCA9IGNvbnRhaW5lci5wYXJ0aWFscztcbiAgICAgICAgY29udGFpbmVyLnBhcnRpYWxzID0gX3V0aWxzLmV4dGVuZCh7fSwgb3JpZ2luYWwsIHByb3BzLnBhcnRpYWxzKTtcbiAgICAgICAgdmFyIHJldCA9IGZuKGNvbnRleHQsIG9wdGlvbnMpO1xuICAgICAgICBjb250YWluZXIucGFydGlhbHMgPSBvcmlnaW5hbDtcbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcHJvcHMucGFydGlhbHNbb3B0aW9ucy5hcmdzWzBdXSA9IG9wdGlvbnMuZm47XG5cbiAgICByZXR1cm4gcmV0O1xuICB9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMeTR1THk0dUwyeHBZaTlvWVc1a2JHVmlZWEp6TDJSbFkyOXlZWFJ2Y25NdmFXNXNhVzVsTG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdjVUpCUVhWQ0xGVkJRVlU3TzNGQ1FVVnNRaXhWUVVGVExGRkJRVkVzUlVGQlJUdEJRVU5vUXl4VlFVRlJMRU5CUVVNc2FVSkJRV2xDTEVOQlFVTXNVVUZCVVN4RlFVRkZMRlZCUVZNc1JVRkJSU3hGUVVGRkxFdEJRVXNzUlVGQlJTeFRRVUZUTEVWQlFVVXNUMEZCVHl4RlFVRkZPMEZCUXpORkxGRkJRVWtzUjBGQlJ5eEhRVUZITEVWQlFVVXNRMEZCUXp0QlFVTmlMRkZCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zVVVGQlVTeEZRVUZGTzBGQlEyNUNMRmRCUVVzc1EwRkJReXhSUVVGUkxFZEJRVWNzUlVGQlJTeERRVUZETzBGQlEzQkNMRk5CUVVjc1IwRkJSeXhWUVVGVExFOUJRVThzUlVGQlJTeFBRVUZQTEVWQlFVVTdPMEZCUlM5Q0xGbEJRVWtzVVVGQlVTeEhRVUZITEZOQlFWTXNRMEZCUXl4UlFVRlJMRU5CUVVNN1FVRkRiRU1zYVVKQlFWTXNRMEZCUXl4UlFVRlJMRWRCUVVjc1kwRkJUeXhGUVVGRkxFVkJRVVVzVVVGQlVTeEZRVUZGTEV0QlFVc3NRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJRenRCUVVNeFJDeFpRVUZKTEVkQlFVY3NSMEZCUnl4RlFVRkZMRU5CUVVNc1QwRkJUeXhGUVVGRkxFOUJRVThzUTBGQlF5eERRVUZETzBGQlF5OUNMR2xDUVVGVExFTkJRVU1zVVVGQlVTeEhRVUZITEZGQlFWRXNRMEZCUXp0QlFVTTVRaXhsUVVGUExFZEJRVWNzUTBGQlF6dFBRVU5hTEVOQlFVTTdTMEZEU0RzN1FVRkZSQ3hUUVVGTExFTkJRVU1zVVVGQlVTeERRVUZETEU5QlFVOHNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eFBRVUZQTEVOQlFVTXNSVUZCUlN4RFFVRkRPenRCUVVVM1F5eFhRVUZQTEVkQlFVY3NRMEZCUXp0SFFVTmFMRU5CUVVNc1EwRkJRenREUVVOS0lpd2labWxzWlNJNkltbHViR2x1WlM1cWN5SXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQjdJR1Y0ZEdWdVpDQjlJR1p5YjIwZ0p5NHVMM1YwYVd4ekp6dGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdablZ1WTNScGIyNG9hVzV6ZEdGdVkyVXBJSHRjYmlBZ2FXNXpkR0Z1WTJVdWNtVm5hWE4wWlhKRVpXTnZjbUYwYjNJb0oybHViR2x1WlNjc0lHWjFibU4wYVc5dUtHWnVMQ0J3Y205d2N5d2dZMjl1ZEdGcGJtVnlMQ0J2Y0hScGIyNXpLU0I3WEc0Z0lDQWdiR1YwSUhKbGRDQTlJR1p1TzF4dUlDQWdJR2xtSUNnaGNISnZjSE11Y0dGeWRHbGhiSE1wSUh0Y2JpQWdJQ0FnSUhCeWIzQnpMbkJoY25ScFlXeHpJRDBnZTMwN1hHNGdJQ0FnSUNCeVpYUWdQU0JtZFc1amRHbHZiaWhqYjI1MFpYaDBMQ0J2Y0hScGIyNXpLU0I3WEc0Z0lDQWdJQ0FnSUM4dklFTnlaV0YwWlNCaElHNWxkeUJ3WVhKMGFXRnNjeUJ6ZEdGamF5Qm1jbUZ0WlNCd2NtbHZjaUIwYnlCbGVHVmpMbHh1SUNBZ0lDQWdJQ0JzWlhRZ2IzSnBaMmx1WVd3Z1BTQmpiMjUwWVdsdVpYSXVjR0Z5ZEdsaGJITTdYRzRnSUNBZ0lDQWdJR052Ym5SaGFXNWxjaTV3WVhKMGFXRnNjeUE5SUdWNGRHVnVaQ2g3ZlN3Z2IzSnBaMmx1WVd3c0lIQnliM0J6TG5CaGNuUnBZV3h6S1R0Y2JpQWdJQ0FnSUNBZ2JHVjBJSEpsZENBOUlHWnVLR052Ym5SbGVIUXNJRzl3ZEdsdmJuTXBPMXh1SUNBZ0lDQWdJQ0JqYjI1MFlXbHVaWEl1Y0dGeWRHbGhiSE1nUFNCdmNtbG5hVzVoYkR0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhKbGREdGNiaUFnSUNBZ0lIMDdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2NISnZjSE11Y0dGeWRHbGhiSE5iYjNCMGFXOXVjeTVoY21keld6QmRYU0E5SUc5d2RHbHZibk11Wm00N1hHNWNiaUFnSUNCeVpYUjFjbTRnY21WME8xeHVJQ0I5S1R0Y2JuMWNiaUpkZlE9PVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xudmFyIGVycm9yUHJvcHMgPSBbJ2Rlc2NyaXB0aW9uJywgJ2ZpbGVOYW1lJywgJ2xpbmVOdW1iZXInLCAnZW5kTGluZU51bWJlcicsICdtZXNzYWdlJywgJ25hbWUnLCAnbnVtYmVyJywgJ3N0YWNrJ107XG5cbmZ1bmN0aW9uIEV4Y2VwdGlvbihtZXNzYWdlLCBub2RlKSB7XG4gIHZhciBsb2MgPSBub2RlICYmIG5vZGUubG9jLFxuICAgICAgbGluZSA9IHVuZGVmaW5lZCxcbiAgICAgIGVuZExpbmVOdW1iZXIgPSB1bmRlZmluZWQsXG4gICAgICBjb2x1bW4gPSB1bmRlZmluZWQsXG4gICAgICBlbmRDb2x1bW4gPSB1bmRlZmluZWQ7XG5cbiAgaWYgKGxvYykge1xuICAgIGxpbmUgPSBsb2Muc3RhcnQubGluZTtcbiAgICBlbmRMaW5lTnVtYmVyID0gbG9jLmVuZC5saW5lO1xuICAgIGNvbHVtbiA9IGxvYy5zdGFydC5jb2x1bW47XG4gICAgZW5kQ29sdW1uID0gbG9jLmVuZC5jb2x1bW47XG5cbiAgICBtZXNzYWdlICs9ICcgLSAnICsgbGluZSArICc6JyArIGNvbHVtbjtcbiAgfVxuXG4gIHZhciB0bXAgPSBFcnJvci5wcm90b3R5cGUuY29uc3RydWN0b3IuY2FsbCh0aGlzLCBtZXNzYWdlKTtcblxuICAvLyBVbmZvcnR1bmF0ZWx5IGVycm9ycyBhcmUgbm90IGVudW1lcmFibGUgaW4gQ2hyb21lIChhdCBsZWFzdCksIHNvIGBmb3IgcHJvcCBpbiB0bXBgIGRvZXNuJ3Qgd29yay5cbiAgZm9yICh2YXIgaWR4ID0gMDsgaWR4IDwgZXJyb3JQcm9wcy5sZW5ndGg7IGlkeCsrKSB7XG4gICAgdGhpc1tlcnJvclByb3BzW2lkeF1dID0gdG1wW2Vycm9yUHJvcHNbaWR4XV07XG4gIH1cblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICBpZiAoRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UpIHtcbiAgICBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSh0aGlzLCBFeGNlcHRpb24pO1xuICB9XG5cbiAgdHJ5IHtcbiAgICBpZiAobG9jKSB7XG4gICAgICB0aGlzLmxpbmVOdW1iZXIgPSBsaW5lO1xuICAgICAgdGhpcy5lbmRMaW5lTnVtYmVyID0gZW5kTGluZU51bWJlcjtcblxuICAgICAgLy8gV29yayBhcm91bmQgaXNzdWUgdW5kZXIgc2FmYXJpIHdoZXJlIHdlIGNhbid0IGRpcmVjdGx5IHNldCB0aGUgY29sdW1uIHZhbHVlXG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ2NvbHVtbicsIHtcbiAgICAgICAgICB2YWx1ZTogY29sdW1uLFxuICAgICAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAnZW5kQ29sdW1uJywge1xuICAgICAgICAgIHZhbHVlOiBlbmRDb2x1bW4sXG4gICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY29sdW1uID0gY29sdW1uO1xuICAgICAgICB0aGlzLmVuZENvbHVtbiA9IGVuZENvbHVtbjtcbiAgICAgIH1cbiAgICB9XG4gIH0gY2F0Y2ggKG5vcCkge1xuICAgIC8qIElnbm9yZSBpZiB0aGUgYnJvd3NlciBpcyB2ZXJ5IHBhcnRpY3VsYXIgKi9cbiAgfVxufVxuXG5FeGNlcHRpb24ucHJvdG90eXBlID0gbmV3IEVycm9yKCk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IEV4Y2VwdGlvbjtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMeTR1TDJ4cFlpOW9ZVzVrYkdWaVlYSnpMMlY0WTJWd2RHbHZiaTVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN1FVRkJRU3hKUVVGTkxGVkJRVlVzUjBGQlJ5eERRVU5xUWl4aFFVRmhMRVZCUTJJc1ZVRkJWU3hGUVVOV0xGbEJRVmtzUlVGRFdpeGxRVUZsTEVWQlEyWXNVMEZCVXl4RlFVTlVMRTFCUVUwc1JVRkRUaXhSUVVGUkxFVkJRMUlzVDBGQlR5eERRVU5TTEVOQlFVTTdPMEZCUlVZc1UwRkJVeXhUUVVGVExFTkJRVU1zVDBGQlR5eEZRVUZGTEVsQlFVa3NSVUZCUlR0QlFVTm9ReXhOUVVGSkxFZEJRVWNzUjBGQlJ5eEpRVUZKTEVsQlFVa3NTVUZCU1N4RFFVRkRMRWRCUVVjN1RVRkRlRUlzU1VGQlNTeFpRVUZCTzAxQlEwb3NZVUZCWVN4WlFVRkJPMDFCUTJJc1RVRkJUU3haUVVGQk8wMUJRMDRzVTBGQlV5eFpRVUZCTEVOQlFVTTdPMEZCUlZvc1RVRkJTU3hIUVVGSExFVkJRVVU3UVVGRFVDeFJRVUZKTEVkQlFVY3NSMEZCUnl4RFFVRkRMRXRCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU03UVVGRGRFSXNhVUpCUVdFc1IwRkJSeXhIUVVGSExFTkJRVU1zUjBGQlJ5eERRVUZETEVsQlFVa3NRMEZCUXp0QlFVTTNRaXhWUVVGTkxFZEJRVWNzUjBGQlJ5eERRVUZETEV0QlFVc3NRMEZCUXl4TlFVRk5MRU5CUVVNN1FVRkRNVUlzWVVGQlV5eEhRVUZITEVkQlFVY3NRMEZCUXl4SFFVRkhMRU5CUVVNc1RVRkJUU3hEUVVGRE96dEJRVVV6UWl4WFFVRlBMRWxCUVVrc1MwRkJTeXhIUVVGSExFbEJRVWtzUjBGQlJ5eEhRVUZITEVkQlFVY3NUVUZCVFN4RFFVRkRPMGRCUTNoRE96dEJRVVZFTEUxQlFVa3NSMEZCUnl4SFFVRkhMRXRCUVVzc1EwRkJReXhUUVVGVExFTkJRVU1zVjBGQlZ5eERRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpMRVZCUVVVc1QwRkJUeXhEUVVGRExFTkJRVU03T3p0QlFVY3hSQ3hQUVVGTExFbEJRVWtzUjBGQlJ5eEhRVUZITEVOQlFVTXNSVUZCUlN4SFFVRkhMRWRCUVVjc1ZVRkJWU3hEUVVGRExFMUJRVTBzUlVGQlJTeEhRVUZITEVWQlFVVXNSVUZCUlR0QlFVTm9SQ3hSUVVGSkxFTkJRVU1zVlVGQlZTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1IwRkJSeXhEUVVGRExGVkJRVlVzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRPMGRCUXpsRE96czdRVUZIUkN4TlFVRkpMRXRCUVVzc1EwRkJReXhwUWtGQmFVSXNSVUZCUlR0QlFVTXpRaXhUUVVGTExFTkJRVU1zYVVKQlFXbENMRU5CUVVNc1NVRkJTU3hGUVVGRkxGTkJRVk1zUTBGQlF5eERRVUZETzBkQlF6RkRPenRCUVVWRUxFMUJRVWs3UVVGRFJpeFJRVUZKTEVkQlFVY3NSVUZCUlR0QlFVTlFMRlZCUVVrc1EwRkJReXhWUVVGVkxFZEJRVWNzU1VGQlNTeERRVUZETzBGQlEzWkNMRlZCUVVrc1EwRkJReXhoUVVGaExFZEJRVWNzWVVGQllTeERRVUZET3pzN08wRkJTVzVETEZWQlFVa3NUVUZCVFN4RFFVRkRMR05CUVdNc1JVRkJSVHRCUVVONlFpeGpRVUZOTEVOQlFVTXNZMEZCWXl4RFFVRkRMRWxCUVVrc1JVRkJSU3hSUVVGUkxFVkJRVVU3UVVGRGNFTXNaVUZCU3l4RlFVRkZMRTFCUVUwN1FVRkRZaXh2UWtGQlZTeEZRVUZGTEVsQlFVazdVMEZEYWtJc1EwRkJReXhEUVVGRE8wRkJRMGdzWTBGQlRTeERRVUZETEdOQlFXTXNRMEZCUXl4SlFVRkpMRVZCUVVVc1YwRkJWeXhGUVVGRk8wRkJRM1pETEdWQlFVc3NSVUZCUlN4VFFVRlRPMEZCUTJoQ0xHOUNRVUZWTEVWQlFVVXNTVUZCU1R0VFFVTnFRaXhEUVVGRExFTkJRVU03VDBGRFNpeE5RVUZOTzBGQlEwd3NXVUZCU1N4RFFVRkRMRTFCUVUwc1IwRkJSeXhOUVVGTkxFTkJRVU03UVVGRGNrSXNXVUZCU1N4RFFVRkRMRk5CUVZNc1IwRkJSeXhUUVVGVExFTkJRVU03VDBGRE5VSTdTMEZEUmp0SFFVTkdMRU5CUVVNc1QwRkJUeXhIUVVGSExFVkJRVVU3TzBkQlJXSTdRMEZEUmpzN1FVRkZSQ3hUUVVGVExFTkJRVU1zVTBGQlV5eEhRVUZITEVsQlFVa3NTMEZCU3l4RlFVRkZMRU5CUVVNN08zRkNRVVZ1UWl4VFFVRlRJaXdpWm1sc1pTSTZJbVY0WTJWd2RHbHZiaTVxY3lJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltTnZibk4wSUdWeWNtOXlVSEp2Y0hNZ1BTQmJYRzRnSUNka1pYTmpjbWx3ZEdsdmJpY3NYRzRnSUNkbWFXeGxUbUZ0WlNjc1hHNGdJQ2RzYVc1bFRuVnRZbVZ5Snl4Y2JpQWdKMlZ1WkV4cGJtVk9kVzFpWlhJbkxGeHVJQ0FuYldWemMyRm5aU2NzWEc0Z0lDZHVZVzFsSnl4Y2JpQWdKMjUxYldKbGNpY3NYRzRnSUNkemRHRmpheWRjYmwwN1hHNWNibVoxYm1OMGFXOXVJRVY0WTJWd2RHbHZiaWh0WlhOellXZGxMQ0J1YjJSbEtTQjdYRzRnSUd4bGRDQnNiMk1nUFNCdWIyUmxJQ1ltSUc1dlpHVXViRzlqTEZ4dUlDQWdJR3hwYm1Vc1hHNGdJQ0FnWlc1a1RHbHVaVTUxYldKbGNpeGNiaUFnSUNCamIyeDFiVzRzWEc0Z0lDQWdaVzVrUTI5c2RXMXVPMXh1WEc0Z0lHbG1JQ2hzYjJNcElIdGNiaUFnSUNCc2FXNWxJRDBnYkc5akxuTjBZWEowTG14cGJtVTdYRzRnSUNBZ1pXNWtUR2x1WlU1MWJXSmxjaUE5SUd4dll5NWxibVF1YkdsdVpUdGNiaUFnSUNCamIyeDFiVzRnUFNCc2IyTXVjM1JoY25RdVkyOXNkVzF1TzF4dUlDQWdJR1Z1WkVOdmJIVnRiaUE5SUd4dll5NWxibVF1WTI5c2RXMXVPMXh1WEc0Z0lDQWdiV1Z6YzJGblpTQXJQU0FuSUMwZ0p5QXJJR3hwYm1VZ0t5QW5PaWNnS3lCamIyeDFiVzQ3WEc0Z0lIMWNibHh1SUNCc1pYUWdkRzF3SUQwZ1JYSnliM0l1Y0hKdmRHOTBlWEJsTG1OdmJuTjBjblZqZEc5eUxtTmhiR3dvZEdocGN5d2diV1Z6YzJGblpTazdYRzVjYmlBZ0x5OGdWVzVtYjNKMGRXNWhkR1ZzZVNCbGNuSnZjbk1nWVhKbElHNXZkQ0JsYm5WdFpYSmhZbXhsSUdsdUlFTm9jbTl0WlNBb1lYUWdiR1ZoYzNRcExDQnpieUJnWm05eUlIQnliM0FnYVc0Z2RHMXdZQ0JrYjJWemJpZDBJSGR2Y21zdVhHNGdJR1p2Y2lBb2JHVjBJR2xrZUNBOUlEQTdJR2xrZUNBOElHVnljbTl5VUhKdmNITXViR1Z1WjNSb095QnBaSGdyS3lrZ2UxeHVJQ0FnSUhSb2FYTmJaWEp5YjNKUWNtOXdjMXRwWkhoZFhTQTlJSFJ0Y0Z0bGNuSnZjbEJ5YjNCelcybGtlRjFkTzF4dUlDQjlYRzVjYmlBZ0x5b2dhWE4wWVc1aWRXd2dhV2R1YjNKbElHVnNjMlVnS2k5Y2JpQWdhV1lnS0VWeWNtOXlMbU5oY0hSMWNtVlRkR0ZqYTFSeVlXTmxLU0I3WEc0Z0lDQWdSWEp5YjNJdVkyRndkSFZ5WlZOMFlXTnJWSEpoWTJVb2RHaHBjeXdnUlhoalpYQjBhVzl1S1R0Y2JpQWdmVnh1WEc0Z0lIUnllU0I3WEc0Z0lDQWdhV1lnS0d4dll5a2dlMXh1SUNBZ0lDQWdkR2hwY3k1c2FXNWxUblZ0WW1WeUlEMGdiR2x1WlR0Y2JpQWdJQ0FnSUhSb2FYTXVaVzVrVEdsdVpVNTFiV0psY2lBOUlHVnVaRXhwYm1WT2RXMWlaWEk3WEc1Y2JpQWdJQ0FnSUM4dklGZHZjbXNnWVhKdmRXNWtJR2x6YzNWbElIVnVaR1Z5SUhOaFptRnlhU0IzYUdWeVpTQjNaU0JqWVc0bmRDQmthWEpsWTNSc2VTQnpaWFFnZEdobElHTnZiSFZ0YmlCMllXeDFaVnh1SUNBZ0lDQWdMeW9nYVhOMFlXNWlkV3dnYVdkdWIzSmxJRzVsZUhRZ0tpOWNiaUFnSUNBZ0lHbG1JQ2hQWW1wbFkzUXVaR1ZtYVc1bFVISnZjR1Z5ZEhrcElIdGNiaUFnSUNBZ0lDQWdUMkpxWldOMExtUmxabWx1WlZCeWIzQmxjblI1S0hSb2FYTXNJQ2RqYjJ4MWJXNG5MQ0I3WEc0Z0lDQWdJQ0FnSUNBZ2RtRnNkV1U2SUdOdmJIVnRiaXhjYmlBZ0lDQWdJQ0FnSUNCbGJuVnRaWEpoWW14bE9pQjBjblZsWEc0Z0lDQWdJQ0FnSUgwcE8xeHVJQ0FnSUNBZ0lDQlBZbXBsWTNRdVpHVm1hVzVsVUhKdmNHVnlkSGtvZEdocGN5d2dKMlZ1WkVOdmJIVnRiaWNzSUh0Y2JpQWdJQ0FnSUNBZ0lDQjJZV3gxWlRvZ1pXNWtRMjlzZFcxdUxGeHVJQ0FnSUNBZ0lDQWdJR1Z1ZFcxbGNtRmliR1U2SUhSeWRXVmNiaUFnSUNBZ0lDQWdmU2s3WEc0Z0lDQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdJQ0IwYUdsekxtTnZiSFZ0YmlBOUlHTnZiSFZ0Ymp0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVsYm1SRGIyeDFiVzRnUFNCbGJtUkRiMngxYlc0N1hHNGdJQ0FnSUNCOVhHNGdJQ0FnZlZ4dUlDQjlJR05oZEdOb0lDaHViM0FwSUh0Y2JpQWdJQ0F2S2lCSloyNXZjbVVnYVdZZ2RHaGxJR0p5YjNkelpYSWdhWE1nZG1WeWVTQndZWEowYVdOMWJHRnlJQ292WEc0Z0lIMWNibjFjYmx4dVJYaGpaWEIwYVc5dUxuQnliM1J2ZEhsd1pTQTlJRzVsZHlCRmNuSnZjaWdwTzF4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCRmVHTmxjSFJwYjI0N1hHNGlYWDA9XG4iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLnJlZ2lzdGVyRGVmYXVsdEhlbHBlcnMgPSByZWdpc3RlckRlZmF1bHRIZWxwZXJzO1xuZXhwb3J0cy5tb3ZlSGVscGVyVG9Ib29rcyA9IG1vdmVIZWxwZXJUb0hvb2tzO1xuLy8gaXN0YW5idWwgaWdub3JlIG5leHRcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX2hlbHBlcnNCbG9ja0hlbHBlck1pc3NpbmcgPSByZXF1aXJlKCcuL2hlbHBlcnMvYmxvY2staGVscGVyLW1pc3NpbmcnKTtcblxudmFyIF9oZWxwZXJzQmxvY2tIZWxwZXJNaXNzaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2hlbHBlcnNCbG9ja0hlbHBlck1pc3NpbmcpO1xuXG52YXIgX2hlbHBlcnNFYWNoID0gcmVxdWlyZSgnLi9oZWxwZXJzL2VhY2gnKTtcblxudmFyIF9oZWxwZXJzRWFjaDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oZWxwZXJzRWFjaCk7XG5cbnZhciBfaGVscGVyc0hlbHBlck1pc3NpbmcgPSByZXF1aXJlKCcuL2hlbHBlcnMvaGVscGVyLW1pc3NpbmcnKTtcblxudmFyIF9oZWxwZXJzSGVscGVyTWlzc2luZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oZWxwZXJzSGVscGVyTWlzc2luZyk7XG5cbnZhciBfaGVscGVyc0lmID0gcmVxdWlyZSgnLi9oZWxwZXJzL2lmJyk7XG5cbnZhciBfaGVscGVyc0lmMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2hlbHBlcnNJZik7XG5cbnZhciBfaGVscGVyc0xvZyA9IHJlcXVpcmUoJy4vaGVscGVycy9sb2cnKTtcblxudmFyIF9oZWxwZXJzTG9nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2hlbHBlcnNMb2cpO1xuXG52YXIgX2hlbHBlcnNMb29rdXAgPSByZXF1aXJlKCcuL2hlbHBlcnMvbG9va3VwJyk7XG5cbnZhciBfaGVscGVyc0xvb2t1cDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oZWxwZXJzTG9va3VwKTtcblxudmFyIF9oZWxwZXJzV2l0aCA9IHJlcXVpcmUoJy4vaGVscGVycy93aXRoJyk7XG5cbnZhciBfaGVscGVyc1dpdGgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaGVscGVyc1dpdGgpO1xuXG5mdW5jdGlvbiByZWdpc3RlckRlZmF1bHRIZWxwZXJzKGluc3RhbmNlKSB7XG4gIF9oZWxwZXJzQmxvY2tIZWxwZXJNaXNzaW5nMlsnZGVmYXVsdCddKGluc3RhbmNlKTtcbiAgX2hlbHBlcnNFYWNoMlsnZGVmYXVsdCddKGluc3RhbmNlKTtcbiAgX2hlbHBlcnNIZWxwZXJNaXNzaW5nMlsnZGVmYXVsdCddKGluc3RhbmNlKTtcbiAgX2hlbHBlcnNJZjJbJ2RlZmF1bHQnXShpbnN0YW5jZSk7XG4gIF9oZWxwZXJzTG9nMlsnZGVmYXVsdCddKGluc3RhbmNlKTtcbiAgX2hlbHBlcnNMb29rdXAyWydkZWZhdWx0J10oaW5zdGFuY2UpO1xuICBfaGVscGVyc1dpdGgyWydkZWZhdWx0J10oaW5zdGFuY2UpO1xufVxuXG5mdW5jdGlvbiBtb3ZlSGVscGVyVG9Ib29rcyhpbnN0YW5jZSwgaGVscGVyTmFtZSwga2VlcEhlbHBlcikge1xuICBpZiAoaW5zdGFuY2UuaGVscGVyc1toZWxwZXJOYW1lXSkge1xuICAgIGluc3RhbmNlLmhvb2tzW2hlbHBlck5hbWVdID0gaW5zdGFuY2UuaGVscGVyc1toZWxwZXJOYW1lXTtcbiAgICBpZiAoIWtlZXBIZWxwZXIpIHtcbiAgICAgIGRlbGV0ZSBpbnN0YW5jZS5oZWxwZXJzW2hlbHBlck5hbWVdO1xuICAgIH1cbiAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMeTR1TDJ4cFlpOW9ZVzVrYkdWaVlYSnpMMmhsYkhCbGNuTXVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN096czdPM2xEUVVGMVF5eG5RMEZCWjBNN096czdNa0pCUXpsRExHZENRVUZuUWpzN096dHZRMEZEVUN3d1FrRkJNRUk3T3pzN2VVSkJRM0pETEdOQlFXTTdPenM3TUVKQlEySXNaVUZCWlRzN096czJRa0ZEV2l4clFrRkJhMEk3T3pzN01rSkJRM0JDTEdkQ1FVRm5RanM3T3p0QlFVVnNReXhUUVVGVExITkNRVUZ6UWl4RFFVRkRMRkZCUVZFc1JVRkJSVHRCUVVNdlF5eDVRMEZCTWtJc1VVRkJVU3hEUVVGRExFTkJRVU03UVVGRGNrTXNNa0pCUVdFc1VVRkJVU3hEUVVGRExFTkJRVU03UVVGRGRrSXNiME5CUVhOQ0xGRkJRVkVzUTBGQlF5eERRVUZETzBGQlEyaERMSGxDUVVGWExGRkJRVkVzUTBGQlF5eERRVUZETzBGQlEzSkNMREJDUVVGWkxGRkJRVkVzUTBGQlF5eERRVUZETzBGQlEzUkNMRFpDUVVGbExGRkJRVkVzUTBGQlF5eERRVUZETzBGQlEzcENMREpDUVVGaExGRkJRVkVzUTBGQlF5eERRVUZETzBOQlEzaENPenRCUVVWTkxGTkJRVk1zYVVKQlFXbENMRU5CUVVNc1VVRkJVU3hGUVVGRkxGVkJRVlVzUlVGQlJTeFZRVUZWTEVWQlFVVTdRVUZEYkVVc1RVRkJTU3hSUVVGUkxFTkJRVU1zVDBGQlR5eERRVUZETEZWQlFWVXNRMEZCUXl4RlFVRkZPMEZCUTJoRExGbEJRVkVzUTBGQlF5eExRVUZMTEVOQlFVTXNWVUZCVlN4RFFVRkRMRWRCUVVjc1VVRkJVU3hEUVVGRExFOUJRVThzUTBGQlF5eFZRVUZWTEVOQlFVTXNRMEZCUXp0QlFVTXhSQ3hSUVVGSkxFTkJRVU1zVlVGQlZTeEZRVUZGTzBGQlEyWXNZVUZCVHl4UlFVRlJMRU5CUVVNc1QwRkJUeXhEUVVGRExGVkJRVlVzUTBGQlF5eERRVUZETzB0QlEzSkRPMGRCUTBZN1EwRkRSaUlzSW1acGJHVWlPaUpvWld4d1pYSnpMbXB6SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUhKbFoybHpkR1Z5UW14dlkydElaV3h3WlhKTmFYTnphVzVuSUdaeWIyMGdKeTR2YUdWc2NHVnljeTlpYkc5amF5MW9aV3h3WlhJdGJXbHpjMmx1WnljN1hHNXBiWEJ2Y25RZ2NtVm5hWE4wWlhKRllXTm9JR1p5YjIwZ0p5NHZhR1ZzY0dWeWN5OWxZV05vSnp0Y2JtbHRjRzl5ZENCeVpXZHBjM1JsY2tobGJIQmxjazFwYzNOcGJtY2dabkp2YlNBbkxpOW9aV3h3WlhKekwyaGxiSEJsY2kxdGFYTnphVzVuSnp0Y2JtbHRjRzl5ZENCeVpXZHBjM1JsY2tsbUlHWnliMjBnSnk0dmFHVnNjR1Z5Y3k5cFppYzdYRzVwYlhCdmNuUWdjbVZuYVhOMFpYSk1iMmNnWm5KdmJTQW5MaTlvWld4d1pYSnpMMnh2WnljN1hHNXBiWEJ2Y25RZ2NtVm5hWE4wWlhKTWIyOXJkWEFnWm5KdmJTQW5MaTlvWld4d1pYSnpMMnh2YjJ0MWNDYzdYRzVwYlhCdmNuUWdjbVZuYVhOMFpYSlhhWFJvSUdaeWIyMGdKeTR2YUdWc2NHVnljeTkzYVhSb0p6dGNibHh1Wlhod2IzSjBJR1oxYm1OMGFXOXVJSEpsWjJsemRHVnlSR1ZtWVhWc2RFaGxiSEJsY25Nb2FXNXpkR0Z1WTJVcElIdGNiaUFnY21WbmFYTjBaWEpDYkc5amEwaGxiSEJsY2sxcGMzTnBibWNvYVc1emRHRnVZMlVwTzF4dUlDQnlaV2RwYzNSbGNrVmhZMmdvYVc1emRHRnVZMlVwTzF4dUlDQnlaV2RwYzNSbGNraGxiSEJsY2sxcGMzTnBibWNvYVc1emRHRnVZMlVwTzF4dUlDQnlaV2RwYzNSbGNrbG1LR2x1YzNSaGJtTmxLVHRjYmlBZ2NtVm5hWE4wWlhKTWIyY29hVzV6ZEdGdVkyVXBPMXh1SUNCeVpXZHBjM1JsY2t4dmIydDFjQ2hwYm5OMFlXNWpaU2s3WEc0Z0lISmxaMmx6ZEdWeVYybDBhQ2hwYm5OMFlXNWpaU2s3WEc1OVhHNWNibVY0Y0c5eWRDQm1kVzVqZEdsdmJpQnRiM1psU0dWc2NHVnlWRzlJYjI5cmN5aHBibk4wWVc1alpTd2dhR1ZzY0dWeVRtRnRaU3dnYTJWbGNFaGxiSEJsY2lrZ2UxeHVJQ0JwWmlBb2FXNXpkR0Z1WTJVdWFHVnNjR1Z5YzF0b1pXeHdaWEpPWVcxbFhTa2dlMXh1SUNBZ0lHbHVjM1JoYm1ObExtaHZiMnR6VzJobGJIQmxjazVoYldWZElEMGdhVzV6ZEdGdVkyVXVhR1ZzY0dWeWMxdG9aV3h3WlhKT1lXMWxYVHRjYmlBZ0lDQnBaaUFvSVd0bFpYQklaV3h3WlhJcElIdGNiaUFnSUNBZ0lHUmxiR1YwWlNCcGJuTjBZVzVqWlM1b1pXeHdaWEp6VzJobGJIQmxjazVoYldWZE8xeHVJQ0FnSUgxY2JpQWdmVnh1ZlZ4dUlsMTlcbiIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uL3V0aWxzJyk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGZ1bmN0aW9uIChpbnN0YW5jZSkge1xuICBpbnN0YW5jZS5yZWdpc3RlckhlbHBlcignYmxvY2tIZWxwZXJNaXNzaW5nJywgZnVuY3Rpb24gKGNvbnRleHQsIG9wdGlvbnMpIHtcbiAgICB2YXIgaW52ZXJzZSA9IG9wdGlvbnMuaW52ZXJzZSxcbiAgICAgICAgZm4gPSBvcHRpb25zLmZuO1xuXG4gICAgaWYgKGNvbnRleHQgPT09IHRydWUpIHtcbiAgICAgIHJldHVybiBmbih0aGlzKTtcbiAgICB9IGVsc2UgaWYgKGNvbnRleHQgPT09IGZhbHNlIHx8IGNvbnRleHQgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGludmVyc2UodGhpcyk7XG4gICAgfSBlbHNlIGlmIChfdXRpbHMuaXNBcnJheShjb250ZXh0KSkge1xuICAgICAgaWYgKGNvbnRleHQubGVuZ3RoID4gMCkge1xuICAgICAgICBpZiAob3B0aW9ucy5pZHMpIHtcbiAgICAgICAgICBvcHRpb25zLmlkcyA9IFtvcHRpb25zLm5hbWVdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGluc3RhbmNlLmhlbHBlcnMuZWFjaChjb250ZXh0LCBvcHRpb25zKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBpbnZlcnNlKHRoaXMpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAob3B0aW9ucy5kYXRhICYmIG9wdGlvbnMuaWRzKSB7XG4gICAgICAgIHZhciBkYXRhID0gX3V0aWxzLmNyZWF0ZUZyYW1lKG9wdGlvbnMuZGF0YSk7XG4gICAgICAgIGRhdGEuY29udGV4dFBhdGggPSBfdXRpbHMuYXBwZW5kQ29udGV4dFBhdGgob3B0aW9ucy5kYXRhLmNvbnRleHRQYXRoLCBvcHRpb25zLm5hbWUpO1xuICAgICAgICBvcHRpb25zID0geyBkYXRhOiBkYXRhIH07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmbihjb250ZXh0LCBvcHRpb25zKTtcbiAgICB9XG4gIH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUx5NHVMeTR1TDJ4cFlpOW9ZVzVrYkdWaVlYSnpMMmhsYkhCbGNuTXZZbXh2WTJzdGFHVnNjR1Z5TFcxcGMzTnBibWN1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096dHhRa0ZCZDBRc1ZVRkJWVHM3Y1VKQlJXNUVMRlZCUVZNc1VVRkJVU3hGUVVGRk8wRkJRMmhETEZWQlFWRXNRMEZCUXl4alFVRmpMRU5CUVVNc2IwSkJRVzlDTEVWQlFVVXNWVUZCVXl4UFFVRlBMRVZCUVVVc1QwRkJUeXhGUVVGRk8wRkJRM1pGTEZGQlFVa3NUMEZCVHl4SFFVRkhMRTlCUVU4c1EwRkJReXhQUVVGUE8xRkJRek5DTEVWQlFVVXNSMEZCUnl4UFFVRlBMRU5CUVVNc1JVRkJSU3hEUVVGRE96dEJRVVZzUWl4UlFVRkpMRTlCUVU4c1MwRkJTeXhKUVVGSkxFVkJRVVU3UVVGRGNFSXNZVUZCVHl4RlFVRkZMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03UzBGRGFrSXNUVUZCVFN4SlFVRkpMRTlCUVU4c1MwRkJTeXhMUVVGTExFbEJRVWtzVDBGQlR5eEpRVUZKTEVsQlFVa3NSVUZCUlR0QlFVTXZReXhoUVVGUExFOUJRVThzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0TFFVTjBRaXhOUVVGTkxFbEJRVWtzWlVGQlVTeFBRVUZQTEVOQlFVTXNSVUZCUlR0QlFVTXpRaXhWUVVGSkxFOUJRVThzUTBGQlF5eE5RVUZOTEVkQlFVY3NRMEZCUXl4RlFVRkZPMEZCUTNSQ0xGbEJRVWtzVDBGQlR5eERRVUZETEVkQlFVY3NSVUZCUlR0QlFVTm1MR2xDUVVGUExFTkJRVU1zUjBGQlJ5eEhRVUZITEVOQlFVTXNUMEZCVHl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xTkJRemxDT3p0QlFVVkVMR1ZCUVU4c1VVRkJVU3hEUVVGRExFOUJRVThzUTBGQlF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RlFVRkZMRTlCUVU4c1EwRkJReXhEUVVGRE8wOUJRMmhFTEUxQlFVMDdRVUZEVEN4bFFVRlBMRTlCUVU4c1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFBRVU4wUWp0TFFVTkdMRTFCUVUwN1FVRkRUQ3hWUVVGSkxFOUJRVThzUTBGQlF5eEpRVUZKTEVsQlFVa3NUMEZCVHl4RFFVRkRMRWRCUVVjc1JVRkJSVHRCUVVNdlFpeFpRVUZKTEVsQlFVa3NSMEZCUnl4dFFrRkJXU3hQUVVGUExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdRVUZEY2tNc1dVRkJTU3hEUVVGRExGZEJRVmNzUjBGQlJ5eDVRa0ZEYWtJc1QwRkJUeXhEUVVGRExFbEJRVWtzUTBGQlF5eFhRVUZYTEVWQlEzaENMRTlCUVU4c1EwRkJReXhKUVVGSkxFTkJRMklzUTBGQlF6dEJRVU5HTEdWQlFVOHNSMEZCUnl4RlFVRkZMRWxCUVVrc1JVRkJSU3hKUVVGSkxFVkJRVVVzUTBGQlF6dFBRVU14UWpzN1FVRkZSQ3hoUVVGUExFVkJRVVVzUTBGQlF5eFBRVUZQTEVWQlFVVXNUMEZCVHl4RFFVRkRMRU5CUVVNN1MwRkROMEk3UjBGRFJpeERRVUZETEVOQlFVTTdRMEZEU2lJc0ltWnBiR1VpT2lKaWJHOWpheTFvWld4d1pYSXRiV2x6YzJsdVp5NXFjeUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0I3SUdGd2NHVnVaRU52Ym5SbGVIUlFZWFJvTENCamNtVmhkR1ZHY21GdFpTd2dhWE5CY25KaGVTQjlJR1p5YjIwZ0p5NHVMM1YwYVd4ekp6dGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdablZ1WTNScGIyNG9hVzV6ZEdGdVkyVXBJSHRjYmlBZ2FXNXpkR0Z1WTJVdWNtVm5hWE4wWlhKSVpXeHdaWElvSjJKc2IyTnJTR1ZzY0dWeVRXbHpjMmx1Wnljc0lHWjFibU4wYVc5dUtHTnZiblJsZUhRc0lHOXdkR2x2Ym5NcElIdGNiaUFnSUNCc1pYUWdhVzUyWlhKelpTQTlJRzl3ZEdsdmJuTXVhVzUyWlhKelpTeGNiaUFnSUNBZ0lHWnVJRDBnYjNCMGFXOXVjeTVtYmp0Y2JseHVJQ0FnSUdsbUlDaGpiMjUwWlhoMElEMDlQU0IwY25WbEtTQjdYRzRnSUNBZ0lDQnlaWFIxY200Z1ptNG9kR2hwY3lrN1hHNGdJQ0FnZlNCbGJITmxJR2xtSUNoamIyNTBaWGgwSUQwOVBTQm1ZV3h6WlNCOGZDQmpiMjUwWlhoMElEMDlJRzUxYkd3cElIdGNiaUFnSUNBZ0lISmxkSFZ5YmlCcGJuWmxjbk5sS0hSb2FYTXBPMXh1SUNBZ0lIMGdaV3h6WlNCcFppQW9hWE5CY25KaGVTaGpiMjUwWlhoMEtTa2dlMXh1SUNBZ0lDQWdhV1lnS0dOdmJuUmxlSFF1YkdWdVozUm9JRDRnTUNrZ2UxeHVJQ0FnSUNBZ0lDQnBaaUFvYjNCMGFXOXVjeTVwWkhNcElIdGNiaUFnSUNBZ0lDQWdJQ0J2Y0hScGIyNXpMbWxrY3lBOUlGdHZjSFJwYjI1ekxtNWhiV1ZkTzF4dUlDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlHbHVjM1JoYm1ObExtaGxiSEJsY25NdVpXRmphQ2hqYjI1MFpYaDBMQ0J2Y0hScGIyNXpLVHRjYmlBZ0lDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQnBiblpsY25ObEtIUm9hWE1wTzF4dUlDQWdJQ0FnZlZ4dUlDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQnBaaUFvYjNCMGFXOXVjeTVrWVhSaElDWW1JRzl3ZEdsdmJuTXVhV1J6S1NCN1hHNGdJQ0FnSUNBZ0lHeGxkQ0JrWVhSaElEMGdZM0psWVhSbFJuSmhiV1VvYjNCMGFXOXVjeTVrWVhSaEtUdGNiaUFnSUNBZ0lDQWdaR0YwWVM1amIyNTBaWGgwVUdGMGFDQTlJR0Z3Y0dWdVpFTnZiblJsZUhSUVlYUm9LRnh1SUNBZ0lDQWdJQ0FnSUc5d2RHbHZibk11WkdGMFlTNWpiMjUwWlhoMFVHRjBhQ3hjYmlBZ0lDQWdJQ0FnSUNCdmNIUnBiMjV6TG01aGJXVmNiaUFnSUNBZ0lDQWdLVHRjYmlBZ0lDQWdJQ0FnYjNCMGFXOXVjeUE5SUhzZ1pHRjBZVG9nWkdGMFlTQjlPMXh1SUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0J5WlhSMWNtNGdabTRvWTI5dWRHVjRkQ3dnYjNCMGFXOXVjeWs3WEc0Z0lDQWdmVnh1SUNCOUtUdGNibjFjYmlKZGZRPT1cbiIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbi8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uL3V0aWxzJyk7XG5cbnZhciBfZXhjZXB0aW9uID0gcmVxdWlyZSgnLi4vZXhjZXB0aW9uJyk7XG5cbnZhciBfZXhjZXB0aW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2V4Y2VwdGlvbik7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGZ1bmN0aW9uIChpbnN0YW5jZSkge1xuICBpbnN0YW5jZS5yZWdpc3RlckhlbHBlcignZWFjaCcsIGZ1bmN0aW9uIChjb250ZXh0LCBvcHRpb25zKSB7XG4gICAgaWYgKCFvcHRpb25zKSB7XG4gICAgICB0aHJvdyBuZXcgX2V4Y2VwdGlvbjJbJ2RlZmF1bHQnXSgnTXVzdCBwYXNzIGl0ZXJhdG9yIHRvICNlYWNoJyk7XG4gICAgfVxuXG4gICAgdmFyIGZuID0gb3B0aW9ucy5mbixcbiAgICAgICAgaW52ZXJzZSA9IG9wdGlvbnMuaW52ZXJzZSxcbiAgICAgICAgaSA9IDAsXG4gICAgICAgIHJldCA9ICcnLFxuICAgICAgICBkYXRhID0gdW5kZWZpbmVkLFxuICAgICAgICBjb250ZXh0UGF0aCA9IHVuZGVmaW5lZDtcblxuICAgIGlmIChvcHRpb25zLmRhdGEgJiYgb3B0aW9ucy5pZHMpIHtcbiAgICAgIGNvbnRleHRQYXRoID0gX3V0aWxzLmFwcGVuZENvbnRleHRQYXRoKG9wdGlvbnMuZGF0YS5jb250ZXh0UGF0aCwgb3B0aW9ucy5pZHNbMF0pICsgJy4nO1xuICAgIH1cblxuICAgIGlmIChfdXRpbHMuaXNGdW5jdGlvbihjb250ZXh0KSkge1xuICAgICAgY29udGV4dCA9IGNvbnRleHQuY2FsbCh0aGlzKTtcbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy5kYXRhKSB7XG4gICAgICBkYXRhID0gX3V0aWxzLmNyZWF0ZUZyYW1lKG9wdGlvbnMuZGF0YSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZXhlY0l0ZXJhdGlvbihmaWVsZCwgaW5kZXgsIGxhc3QpIHtcbiAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgIGRhdGEua2V5ID0gZmllbGQ7XG4gICAgICAgIGRhdGEuaW5kZXggPSBpbmRleDtcbiAgICAgICAgZGF0YS5maXJzdCA9IGluZGV4ID09PSAwO1xuICAgICAgICBkYXRhLmxhc3QgPSAhIWxhc3Q7XG5cbiAgICAgICAgaWYgKGNvbnRleHRQYXRoKSB7XG4gICAgICAgICAgZGF0YS5jb250ZXh0UGF0aCA9IGNvbnRleHRQYXRoICsgZmllbGQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0ID0gcmV0ICsgZm4oY29udGV4dFtmaWVsZF0sIHtcbiAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgYmxvY2tQYXJhbXM6IF91dGlscy5ibG9ja1BhcmFtcyhbY29udGV4dFtmaWVsZF0sIGZpZWxkXSwgW2NvbnRleHRQYXRoICsgZmllbGQsIG51bGxdKVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGNvbnRleHQgJiYgdHlwZW9mIGNvbnRleHQgPT09ICdvYmplY3QnKSB7XG4gICAgICBpZiAoX3V0aWxzLmlzQXJyYXkoY29udGV4dCkpIHtcbiAgICAgICAgZm9yICh2YXIgaiA9IGNvbnRleHQubGVuZ3RoOyBpIDwgajsgaSsrKSB7XG4gICAgICAgICAgaWYgKGkgaW4gY29udGV4dCkge1xuICAgICAgICAgICAgZXhlY0l0ZXJhdGlvbihpLCBpLCBpID09PSBjb250ZXh0Lmxlbmd0aCAtIDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChnbG9iYWwuU3ltYm9sICYmIGNvbnRleHRbZ2xvYmFsLlN5bWJvbC5pdGVyYXRvcl0pIHtcbiAgICAgICAgdmFyIG5ld0NvbnRleHQgPSBbXTtcbiAgICAgICAgdmFyIGl0ZXJhdG9yID0gY29udGV4dFtnbG9iYWwuU3ltYm9sLml0ZXJhdG9yXSgpO1xuICAgICAgICBmb3IgKHZhciBpdCA9IGl0ZXJhdG9yLm5leHQoKTsgIWl0LmRvbmU7IGl0ID0gaXRlcmF0b3IubmV4dCgpKSB7XG4gICAgICAgICAgbmV3Q29udGV4dC5wdXNoKGl0LnZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBjb250ZXh0ID0gbmV3Q29udGV4dDtcbiAgICAgICAgZm9yICh2YXIgaiA9IGNvbnRleHQubGVuZ3RoOyBpIDwgajsgaSsrKSB7XG4gICAgICAgICAgZXhlY0l0ZXJhdGlvbihpLCBpLCBpID09PSBjb250ZXh0Lmxlbmd0aCAtIDEpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHZhciBwcmlvcktleSA9IHVuZGVmaW5lZDtcblxuICAgICAgICAgIE9iamVjdC5rZXlzKGNvbnRleHQpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgLy8gV2UncmUgcnVubmluZyB0aGUgaXRlcmF0aW9ucyBvbmUgc3RlcCBvdXQgb2Ygc3luYyBzbyB3ZSBjYW4gZGV0ZWN0XG4gICAgICAgICAgICAvLyB0aGUgbGFzdCBpdGVyYXRpb24gd2l0aG91dCBoYXZlIHRvIHNjYW4gdGhlIG9iamVjdCB0d2ljZSBhbmQgY3JlYXRlXG4gICAgICAgICAgICAvLyBhbiBpdGVybWVkaWF0ZSBrZXlzIGFycmF5LlxuICAgICAgICAgICAgaWYgKHByaW9yS2V5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgZXhlY0l0ZXJhdGlvbihwcmlvcktleSwgaSAtIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHJpb3JLZXkgPSBrZXk7XG4gICAgICAgICAgICBpKys7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgaWYgKHByaW9yS2V5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGV4ZWNJdGVyYXRpb24ocHJpb3JLZXksIGkgLSAxLCB0cnVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGkgPT09IDApIHtcbiAgICAgIHJldCA9IGludmVyc2UodGhpcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJldDtcbiAgfSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYklpNHVMeTR1THk0dUx5NHVMMnhwWWk5b1lXNWtiR1ZpWVhKekwyaGxiSEJsY25NdlpXRmphQzVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN096czdPM0ZDUVUxUExGVkJRVlU3TzNsQ1FVTkxMR05CUVdNN096czdjVUpCUlhKQ0xGVkJRVk1zVVVGQlVTeEZRVUZGTzBGQlEyaERMRlZCUVZFc1EwRkJReXhqUVVGakxFTkJRVU1zVFVGQlRTeEZRVUZGTEZWQlFWTXNUMEZCVHl4RlFVRkZMRTlCUVU4c1JVRkJSVHRCUVVONlJDeFJRVUZKTEVOQlFVTXNUMEZCVHl4RlFVRkZPMEZCUTFvc1dVRkJUU3d5UWtGQll5dzJRa0ZCTmtJc1EwRkJReXhEUVVGRE8wdEJRM0JFT3p0QlFVVkVMRkZCUVVrc1JVRkJSU3hIUVVGSExFOUJRVThzUTBGQlF5eEZRVUZGTzFGQlEycENMRTlCUVU4c1IwRkJSeXhQUVVGUExFTkJRVU1zVDBGQlR6dFJRVU42UWl4RFFVRkRMRWRCUVVjc1EwRkJRenRSUVVOTUxFZEJRVWNzUjBGQlJ5eEZRVUZGTzFGQlExSXNTVUZCU1N4WlFVRkJPMUZCUTBvc1YwRkJWeXhaUVVGQkxFTkJRVU03TzBGQlJXUXNVVUZCU1N4UFFVRlBMRU5CUVVNc1NVRkJTU3hKUVVGSkxFOUJRVThzUTBGQlF5eEhRVUZITEVWQlFVVTdRVUZETDBJc2FVSkJRVmNzUjBGRFZDeDVRa0ZCYTBJc1QwRkJUeXhEUVVGRExFbEJRVWtzUTBGQlF5eFhRVUZYTEVWQlFVVXNUMEZCVHl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVkQlFVY3NRMEZCUXp0TFFVTnlSVHM3UVVGRlJDeFJRVUZKTEd0Q1FVRlhMRTlCUVU4c1EwRkJReXhGUVVGRk8wRkJRM1pDTEdGQlFVOHNSMEZCUnl4UFFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzB0QlF6bENPenRCUVVWRUxGRkJRVWtzVDBGQlR5eERRVUZETEVsQlFVa3NSVUZCUlR0QlFVTm9RaXhWUVVGSkxFZEJRVWNzYlVKQlFWa3NUMEZCVHl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8wdEJRMnhET3p0QlFVVkVMR0ZCUVZNc1lVRkJZU3hEUVVGRExFdEJRVXNzUlVGQlJTeExRVUZMTEVWQlFVVXNTVUZCU1N4RlFVRkZPMEZCUTNwRExGVkJRVWtzU1VGQlNTeEZRVUZGTzBGQlExSXNXVUZCU1N4RFFVRkRMRWRCUVVjc1IwRkJSeXhMUVVGTExFTkJRVU03UVVGRGFrSXNXVUZCU1N4RFFVRkRMRXRCUVVzc1IwRkJSeXhMUVVGTExFTkJRVU03UVVGRGJrSXNXVUZCU1N4RFFVRkRMRXRCUVVzc1IwRkJSeXhMUVVGTExFdEJRVXNzUTBGQlF5eERRVUZETzBGQlEzcENMRmxCUVVrc1EwRkJReXhKUVVGSkxFZEJRVWNzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXpzN1FVRkZia0lzV1VGQlNTeFhRVUZYTEVWQlFVVTdRVUZEWml4alFVRkpMRU5CUVVNc1YwRkJWeXhIUVVGSExGZEJRVmNzUjBGQlJ5eExRVUZMTEVOQlFVTTdVMEZEZUVNN1QwRkRSanM3UVVGRlJDeFRRVUZITEVkQlEwUXNSMEZCUnl4SFFVTklMRVZCUVVVc1EwRkJReXhQUVVGUExFTkJRVU1zUzBGQlN5eERRVUZETEVWQlFVVTdRVUZEYWtJc1dVRkJTU3hGUVVGRkxFbEJRVWs3UVVGRFZpeHRRa0ZCVnl4RlFVRkZMRzFDUVVOWUxFTkJRVU1zVDBGQlR5eERRVUZETEV0QlFVc3NRMEZCUXl4RlFVRkZMRXRCUVVzc1EwRkJReXhGUVVOMlFpeERRVUZETEZkQlFWY3NSMEZCUnl4TFFVRkxMRVZCUVVVc1NVRkJTU3hEUVVGRExFTkJRelZDTzA5QlEwWXNRMEZCUXl4RFFVRkRPMHRCUTA0N08wRkJSVVFzVVVGQlNTeFBRVUZQTEVsQlFVa3NUMEZCVHl4UFFVRlBMRXRCUVVzc1VVRkJVU3hGUVVGRk8wRkJRekZETEZWQlFVa3NaVUZCVVN4UFFVRlBMRU5CUVVNc1JVRkJSVHRCUVVOd1FpeGhRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRTlCUVU4c1EwRkJReXhOUVVGTkxFVkJRVVVzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSVHRCUVVOMlF5eGpRVUZKTEVOQlFVTXNTVUZCU1N4UFFVRlBMRVZCUVVVN1FVRkRhRUlzZVVKQlFXRXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zUzBGQlN5eFBRVUZQTEVOQlFVTXNUVUZCVFN4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRE8xZEJReTlETzFOQlEwWTdUMEZEUml4TlFVRk5MRWxCUVVrc1RVRkJUU3hEUVVGRExFMUJRVTBzU1VGQlNTeFBRVUZQTEVOQlFVTXNUVUZCVFN4RFFVRkRMRTFCUVUwc1EwRkJReXhSUVVGUkxFTkJRVU1zUlVGQlJUdEJRVU16UkN4WlFVRk5MRlZCUVZVc1IwRkJSeXhGUVVGRkxFTkJRVU03UVVGRGRFSXNXVUZCVFN4UlFVRlJMRWRCUVVjc1QwRkJUeXhEUVVGRExFMUJRVTBzUTBGQlF5eE5RVUZOTEVOQlFVTXNVVUZCVVN4RFFVRkRMRVZCUVVVc1EwRkJRenRCUVVOdVJDeGhRVUZMTEVsQlFVa3NSVUZCUlN4SFFVRkhMRkZCUVZFc1EwRkJReXhKUVVGSkxFVkJRVVVzUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4SlFVRkpMRVZCUVVVc1JVRkJSU3hIUVVGSExGRkJRVkVzUTBGQlF5eEpRVUZKTEVWQlFVVXNSVUZCUlR0QlFVTTNSQ3h2UWtGQlZTeERRVUZETEVsQlFVa3NRMEZCUXl4RlFVRkZMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03VTBGRE0wSTdRVUZEUkN4bFFVRlBMRWRCUVVjc1ZVRkJWU3hEUVVGRE8wRkJRM0pDTEdGQlFVc3NTVUZCU1N4RFFVRkRMRWRCUVVjc1QwRkJUeXhEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRk8wRkJRM1pETEhWQ1FVRmhMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEV0QlFVc3NUMEZCVHl4RFFVRkRMRTFCUVUwc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF6dFRRVU12UXp0UFFVTkdMRTFCUVUwN08wRkJRMHdzWTBGQlNTeFJRVUZSTEZsQlFVRXNRMEZCUXpzN1FVRkZZaXhuUWtGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhQUVVGUExFTkJRVU1zVlVGQlFTeEhRVUZITEVWQlFVazdPenM3UVVGSmJFTXNaMEpCUVVrc1VVRkJVU3hMUVVGTExGTkJRVk1zUlVGQlJUdEJRVU14UWl3eVFrRkJZU3hEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNN1lVRkRhRU03UVVGRFJDeHZRa0ZCVVN4SFFVRkhMRWRCUVVjc1EwRkJRenRCUVVObUxHRkJRVU1zUlVGQlJTeERRVUZETzFkQlEwd3NRMEZCUXl4RFFVRkRPMEZCUTBnc1kwRkJTU3hSUVVGUkxFdEJRVXNzVTBGQlV5eEZRVUZGTzBGQlF6RkNMSGxDUVVGaExFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1NVRkJTU3hEUVVGRExFTkJRVU03VjBGRGRFTTdPMDlCUTBZN1MwRkRSanM3UVVGRlJDeFJRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRVZCUVVVN1FVRkRXQ3hUUVVGSExFZEJRVWNzVDBGQlR5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMHRCUTNKQ096dEJRVVZFTEZkQlFVOHNSMEZCUnl4RFFVRkRPMGRCUTFvc1EwRkJReXhEUVVGRE8wTkJRMG9pTENKbWFXeGxJam9pWldGamFDNXFjeUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0I3WEc0Z0lHRndjR1Z1WkVOdmJuUmxlSFJRWVhSb0xGeHVJQ0JpYkc5amExQmhjbUZ0Y3l4Y2JpQWdZM0psWVhSbFJuSmhiV1VzWEc0Z0lHbHpRWEp5WVhrc1hHNGdJR2x6Um5WdVkzUnBiMjVjYm4wZ1puSnZiU0FuTGk0dmRYUnBiSE1uTzF4dWFXMXdiM0owSUVWNFkyVndkR2x2YmlCbWNtOXRJQ2N1TGk5bGVHTmxjSFJwYjI0bk8xeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQm1kVzVqZEdsdmJpaHBibk4wWVc1alpTa2dlMXh1SUNCcGJuTjBZVzVqWlM1eVpXZHBjM1JsY2tobGJIQmxjaWduWldGamFDY3NJR1oxYm1OMGFXOXVLR052Ym5SbGVIUXNJRzl3ZEdsdmJuTXBJSHRjYmlBZ0lDQnBaaUFvSVc5d2RHbHZibk1wSUh0Y2JpQWdJQ0FnSUhSb2NtOTNJRzVsZHlCRmVHTmxjSFJwYjI0b0owMTFjM1FnY0dGemN5QnBkR1Z5WVhSdmNpQjBieUFqWldGamFDY3BPMXh1SUNBZ0lIMWNibHh1SUNBZ0lHeGxkQ0JtYmlBOUlHOXdkR2x2Ym5NdVptNHNYRzRnSUNBZ0lDQnBiblpsY25ObElEMGdiM0IwYVc5dWN5NXBiblpsY25ObExGeHVJQ0FnSUNBZ2FTQTlJREFzWEc0Z0lDQWdJQ0J5WlhRZ1BTQW5KeXhjYmlBZ0lDQWdJR1JoZEdFc1hHNGdJQ0FnSUNCamIyNTBaWGgwVUdGMGFEdGNibHh1SUNBZ0lHbG1JQ2h2Y0hScGIyNXpMbVJoZEdFZ0ppWWdiM0IwYVc5dWN5NXBaSE1wSUh0Y2JpQWdJQ0FnSUdOdmJuUmxlSFJRWVhSb0lEMWNiaUFnSUNBZ0lDQWdZWEJ3Wlc1a1EyOXVkR1Y0ZEZCaGRHZ29iM0IwYVc5dWN5NWtZWFJoTG1OdmJuUmxlSFJRWVhSb0xDQnZjSFJwYjI1ekxtbGtjMXN3WFNrZ0t5QW5MaWM3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdhV1lnS0dselJuVnVZM1JwYjI0b1kyOXVkR1Y0ZENrcElIdGNiaUFnSUNBZ0lHTnZiblJsZUhRZ1BTQmpiMjUwWlhoMExtTmhiR3dvZEdocGN5azdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2FXWWdLRzl3ZEdsdmJuTXVaR0YwWVNrZ2UxeHVJQ0FnSUNBZ1pHRjBZU0E5SUdOeVpXRjBaVVp5WVcxbEtHOXdkR2x2Ym5NdVpHRjBZU2s3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdablZ1WTNScGIyNGdaWGhsWTBsMFpYSmhkR2x2YmlobWFXVnNaQ3dnYVc1a1pYZ3NJR3hoYzNRcElIdGNiaUFnSUNBZ0lHbG1JQ2hrWVhSaEtTQjdYRzRnSUNBZ0lDQWdJR1JoZEdFdWEyVjVJRDBnWm1sbGJHUTdYRzRnSUNBZ0lDQWdJR1JoZEdFdWFXNWtaWGdnUFNCcGJtUmxlRHRjYmlBZ0lDQWdJQ0FnWkdGMFlTNW1hWEp6ZENBOUlHbHVaR1Y0SUQwOVBTQXdPMXh1SUNBZ0lDQWdJQ0JrWVhSaExteGhjM1FnUFNBaElXeGhjM1E3WEc1Y2JpQWdJQ0FnSUNBZ2FXWWdLR052Ym5SbGVIUlFZWFJvS1NCN1hHNGdJQ0FnSUNBZ0lDQWdaR0YwWVM1amIyNTBaWGgwVUdGMGFDQTlJR052Ym5SbGVIUlFZWFJvSUNzZ1ptbGxiR1E3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ2NtVjBJRDFjYmlBZ0lDQWdJQ0FnY21WMElDdGNiaUFnSUNBZ0lDQWdabTRvWTI5dWRHVjRkRnRtYVdWc1pGMHNJSHRjYmlBZ0lDQWdJQ0FnSUNCa1lYUmhPaUJrWVhSaExGeHVJQ0FnSUNBZ0lDQWdJR0pzYjJOclVHRnlZVzF6T2lCaWJHOWphMUJoY21GdGN5aGNiaUFnSUNBZ0lDQWdJQ0FnSUZ0amIyNTBaWGgwVzJacFpXeGtYU3dnWm1sbGJHUmRMRnh1SUNBZ0lDQWdJQ0FnSUNBZ1cyTnZiblJsZUhSUVlYUm9JQ3NnWm1sbGJHUXNJRzUxYkd4ZFhHNGdJQ0FnSUNBZ0lDQWdLVnh1SUNBZ0lDQWdJQ0I5S1R0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0JwWmlBb1kyOXVkR1Y0ZENBbUppQjBlWEJsYjJZZ1kyOXVkR1Y0ZENBOVBUMGdKMjlpYW1WamRDY3BJSHRjYmlBZ0lDQWdJR2xtSUNocGMwRnljbUY1S0dOdmJuUmxlSFFwS1NCN1hHNGdJQ0FnSUNBZ0lHWnZjaUFvYkdWMElHb2dQU0JqYjI1MFpYaDBMbXhsYm1kMGFEc2dhU0E4SUdvN0lHa3JLeWtnZTF4dUlDQWdJQ0FnSUNBZ0lHbG1JQ2hwSUdsdUlHTnZiblJsZUhRcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdWNFpXTkpkR1Z5WVhScGIyNG9hU3dnYVN3Z2FTQTlQVDBnWTI5dWRHVjRkQzVzWlc1bmRHZ2dMU0F4S1R0Y2JpQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJSDBnWld4elpTQnBaaUFvWjJ4dlltRnNMbE41YldKdmJDQW1KaUJqYjI1MFpYaDBXMmRzYjJKaGJDNVRlVzFpYjJ3dWFYUmxjbUYwYjNKZEtTQjdYRzRnSUNBZ0lDQWdJR052Ym5OMElHNWxkME52Ym5SbGVIUWdQU0JiWFR0Y2JpQWdJQ0FnSUNBZ1kyOXVjM1FnYVhSbGNtRjBiM0lnUFNCamIyNTBaWGgwVzJkc2IySmhiQzVUZVcxaWIyd3VhWFJsY21GMGIzSmRLQ2s3WEc0Z0lDQWdJQ0FnSUdadmNpQW9iR1YwSUdsMElEMGdhWFJsY21GMGIzSXVibVY0ZENncE95QWhhWFF1Wkc5dVpUc2dhWFFnUFNCcGRHVnlZWFJ2Y2k1dVpYaDBLQ2twSUh0Y2JpQWdJQ0FnSUNBZ0lDQnVaWGREYjI1MFpYaDBMbkIxYzJnb2FYUXVkbUZzZFdVcE8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJR052Ym5SbGVIUWdQU0J1WlhkRGIyNTBaWGgwTzF4dUlDQWdJQ0FnSUNCbWIzSWdLR3hsZENCcUlEMGdZMjl1ZEdWNGRDNXNaVzVuZEdnN0lHa2dQQ0JxT3lCcEt5c3BJSHRjYmlBZ0lDQWdJQ0FnSUNCbGVHVmpTWFJsY21GMGFXOXVLR2tzSUdrc0lHa2dQVDA5SUdOdmJuUmxlSFF1YkdWdVozUm9JQzBnTVNrN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNBZ0lHeGxkQ0J3Y21sdmNrdGxlVHRjYmx4dUlDQWdJQ0FnSUNCUFltcGxZM1F1YTJWNWN5aGpiMjUwWlhoMEtTNW1iM0pGWVdOb0tHdGxlU0E5UGlCN1hHNGdJQ0FnSUNBZ0lDQWdMeThnVjJVbmNtVWdjblZ1Ym1sdVp5QjBhR1VnYVhSbGNtRjBhVzl1Y3lCdmJtVWdjM1JsY0NCdmRYUWdiMllnYzNsdVl5QnpieUIzWlNCallXNGdaR1YwWldOMFhHNGdJQ0FnSUNBZ0lDQWdMeThnZEdobElHeGhjM1FnYVhSbGNtRjBhVzl1SUhkcGRHaHZkWFFnYUdGMlpTQjBieUJ6WTJGdUlIUm9aU0J2WW1wbFkzUWdkSGRwWTJVZ1lXNWtJR055WldGMFpWeHVJQ0FnSUNBZ0lDQWdJQzh2SUdGdUlHbDBaWEp0WldScFlYUmxJR3RsZVhNZ1lYSnlZWGt1WEc0Z0lDQWdJQ0FnSUNBZ2FXWWdLSEJ5YVc5eVMyVjVJQ0U5UFNCMWJtUmxabWx1WldRcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdWNFpXTkpkR1Z5WVhScGIyNG9jSEpwYjNKTFpYa3NJR2tnTFNBeEtUdGNiaUFnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUNBZ2NISnBiM0pMWlhrZ1BTQnJaWGs3WEc0Z0lDQWdJQ0FnSUNBZ2FTc3JPMXh1SUNBZ0lDQWdJQ0I5S1R0Y2JpQWdJQ0FnSUNBZ2FXWWdLSEJ5YVc5eVMyVjVJQ0U5UFNCMWJtUmxabWx1WldRcElIdGNiaUFnSUNBZ0lDQWdJQ0JsZUdWalNYUmxjbUYwYVc5dUtIQnlhVzl5UzJWNUxDQnBJQzBnTVN3Z2RISjFaU2s3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUgxY2JpQWdJQ0I5WEc1Y2JpQWdJQ0JwWmlBb2FTQTlQVDBnTUNrZ2UxeHVJQ0FnSUNBZ2NtVjBJRDBnYVc1MlpYSnpaU2gwYUdsektUdGNiaUFnSUNCOVhHNWNiaUFnSUNCeVpYUjFjbTRnY21WME8xeHVJQ0I5S1R0Y2JuMWNiaUpkZlE9PVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuLy8gaXN0YW5idWwgaWdub3JlIG5leHRcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX2V4Y2VwdGlvbiA9IHJlcXVpcmUoJy4uL2V4Y2VwdGlvbicpO1xuXG52YXIgX2V4Y2VwdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9leGNlcHRpb24pO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBmdW5jdGlvbiAoaW5zdGFuY2UpIHtcbiAgaW5zdGFuY2UucmVnaXN0ZXJIZWxwZXIoJ2hlbHBlck1pc3NpbmcnLCBmdW5jdGlvbiAoKSAvKiBbYXJncywgXW9wdGlvbnMgKi97XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEpIHtcbiAgICAgIC8vIEEgbWlzc2luZyBmaWVsZCBpbiBhIHt7Zm9vfX0gY29uc3RydWN0LlxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gU29tZW9uZSBpcyBhY3R1YWxseSB0cnlpbmcgdG8gY2FsbCBzb21ldGhpbmcsIGJsb3cgdXAuXG4gICAgICB0aHJvdyBuZXcgX2V4Y2VwdGlvbjJbJ2RlZmF1bHQnXSgnTWlzc2luZyBoZWxwZXI6IFwiJyArIGFyZ3VtZW50c1thcmd1bWVudHMubGVuZ3RoIC0gMV0ubmFtZSArICdcIicpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYklpNHVMeTR1THk0dUx5NHVMMnhwWWk5b1lXNWtiR1ZpWVhKekwyaGxiSEJsY25NdmFHVnNjR1Z5TFcxcGMzTnBibWN1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPenQ1UWtGQmMwSXNZMEZCWXpzN096dHhRa0ZGY2tJc1ZVRkJVeXhSUVVGUkxFVkJRVVU3UVVGRGFFTXNWVUZCVVN4RFFVRkRMR05CUVdNc1EwRkJReXhsUVVGbExFVkJRVVVzYVVOQlFXZERPMEZCUTNaRkxGRkJRVWtzVTBGQlV5eERRVUZETEUxQlFVMHNTMEZCU3l4RFFVRkRMRVZCUVVVN08wRkJSVEZDTEdGQlFVOHNVMEZCVXl4RFFVRkRPMHRCUTJ4Q0xFMUJRVTA3TzBGQlJVd3NXVUZCVFN3eVFrRkRTaXh0UWtGQmJVSXNSMEZCUnl4VFFVRlRMRU5CUVVNc1UwRkJVeXhEUVVGRExFMUJRVTBzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMRWRCUVVjc1IwRkJSeXhEUVVOcVJTeERRVUZETzB0QlEwZzdSMEZEUml4RFFVRkRMRU5CUVVNN1EwRkRTaUlzSW1acGJHVWlPaUpvWld4d1pYSXRiV2x6YzJsdVp5NXFjeUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0JGZUdObGNIUnBiMjRnWm5KdmJTQW5MaTR2WlhoalpYQjBhVzl1Snp0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ1puVnVZM1JwYjI0b2FXNXpkR0Z1WTJVcElIdGNiaUFnYVc1emRHRnVZMlV1Y21WbmFYTjBaWEpJWld4d1pYSW9KMmhsYkhCbGNrMXBjM05wYm1jbkxDQm1kVzVqZEdsdmJpZ3ZLaUJiWVhKbmN5d2dYVzl3ZEdsdmJuTWdLaThwSUh0Y2JpQWdJQ0JwWmlBb1lYSm5kVzFsYm5SekxteGxibWQwYUNBOVBUMGdNU2tnZTF4dUlDQWdJQ0FnTHk4Z1FTQnRhWE56YVc1bklHWnBaV3hrSUdsdUlHRWdlM3RtYjI5OWZTQmpiMjV6ZEhKMVkzUXVYRzRnSUNBZ0lDQnlaWFIxY200Z2RXNWtaV1pwYm1Wa08xeHVJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0F2THlCVGIyMWxiMjVsSUdseklHRmpkSFZoYkd4NUlIUnllV2x1WnlCMGJ5QmpZV3hzSUhOdmJXVjBhR2x1Wnl3Z1lteHZkeUIxY0M1Y2JpQWdJQ0FnSUhSb2NtOTNJRzVsZHlCRmVHTmxjSFJwYjI0b1hHNGdJQ0FnSUNBZ0lDZE5hWE56YVc1bklHaGxiSEJsY2pvZ1hDSW5JQ3NnWVhKbmRXMWxiblJ6VzJGeVozVnRaVzUwY3k1c1pXNW5kR2dnTFNBeFhTNXVZVzFsSUNzZ0oxd2lKMXh1SUNBZ0lDQWdLVHRjYmlBZ0lDQjlYRzRnSUgwcE8xeHVmVnh1SWwxOVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuLy8gaXN0YW5idWwgaWdub3JlIG5leHRcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMnKTtcblxudmFyIF9leGNlcHRpb24gPSByZXF1aXJlKCcuLi9leGNlcHRpb24nKTtcblxudmFyIF9leGNlcHRpb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXhjZXB0aW9uKTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gZnVuY3Rpb24gKGluc3RhbmNlKSB7XG4gIGluc3RhbmNlLnJlZ2lzdGVySGVscGVyKCdpZicsIGZ1bmN0aW9uIChjb25kaXRpb25hbCwgb3B0aW9ucykge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoICE9IDIpIHtcbiAgICAgIHRocm93IG5ldyBfZXhjZXB0aW9uMlsnZGVmYXVsdCddKCcjaWYgcmVxdWlyZXMgZXhhY3RseSBvbmUgYXJndW1lbnQnKTtcbiAgICB9XG4gICAgaWYgKF91dGlscy5pc0Z1bmN0aW9uKGNvbmRpdGlvbmFsKSkge1xuICAgICAgY29uZGl0aW9uYWwgPSBjb25kaXRpb25hbC5jYWxsKHRoaXMpO1xuICAgIH1cblxuICAgIC8vIERlZmF1bHQgYmVoYXZpb3IgaXMgdG8gcmVuZGVyIHRoZSBwb3NpdGl2ZSBwYXRoIGlmIHRoZSB2YWx1ZSBpcyB0cnV0aHkgYW5kIG5vdCBlbXB0eS5cbiAgICAvLyBUaGUgYGluY2x1ZGVaZXJvYCBvcHRpb24gbWF5IGJlIHNldCB0byB0cmVhdCB0aGUgY29uZHRpb25hbCBhcyBwdXJlbHkgbm90IGVtcHR5IGJhc2VkIG9uIHRoZVxuICAgIC8vIGJlaGF2aW9yIG9mIGlzRW1wdHkuIEVmZmVjdGl2ZWx5IHRoaXMgZGV0ZXJtaW5lcyBpZiAwIGlzIGhhbmRsZWQgYnkgdGhlIHBvc2l0aXZlIHBhdGggb3IgbmVnYXRpdmUuXG4gICAgaWYgKCFvcHRpb25zLmhhc2guaW5jbHVkZVplcm8gJiYgIWNvbmRpdGlvbmFsIHx8IF91dGlscy5pc0VtcHR5KGNvbmRpdGlvbmFsKSkge1xuICAgICAgcmV0dXJuIG9wdGlvbnMuaW52ZXJzZSh0aGlzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG9wdGlvbnMuZm4odGhpcyk7XG4gICAgfVxuICB9KTtcblxuICBpbnN0YW5jZS5yZWdpc3RlckhlbHBlcigndW5sZXNzJywgZnVuY3Rpb24gKGNvbmRpdGlvbmFsLCBvcHRpb25zKSB7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggIT0gMikge1xuICAgICAgdGhyb3cgbmV3IF9leGNlcHRpb24yWydkZWZhdWx0J10oJyN1bmxlc3MgcmVxdWlyZXMgZXhhY3RseSBvbmUgYXJndW1lbnQnKTtcbiAgICB9XG4gICAgcmV0dXJuIGluc3RhbmNlLmhlbHBlcnNbJ2lmJ10uY2FsbCh0aGlzLCBjb25kaXRpb25hbCwge1xuICAgICAgZm46IG9wdGlvbnMuaW52ZXJzZSxcbiAgICAgIGludmVyc2U6IG9wdGlvbnMuZm4sXG4gICAgICBoYXNoOiBvcHRpb25zLmhhc2hcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYklpNHVMeTR1THk0dUx5NHVMMnhwWWk5b1lXNWtiR1ZpWVhKekwyaGxiSEJsY25NdmFXWXVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN096dHhRa0ZCYjBNc1ZVRkJWVHM3ZVVKQlEzaENMR05CUVdNN096czdjVUpCUlhKQ0xGVkJRVk1zVVVGQlVTeEZRVUZGTzBGQlEyaERMRlZCUVZFc1EwRkJReXhqUVVGakxFTkJRVU1zU1VGQlNTeEZRVUZGTEZWQlFWTXNWMEZCVnl4RlFVRkZMRTlCUVU4c1JVRkJSVHRCUVVNelJDeFJRVUZKTEZOQlFWTXNRMEZCUXl4TlFVRk5MRWxCUVVrc1EwRkJReXhGUVVGRk8wRkJRM3BDTEZsQlFVMHNNa0pCUVdNc2JVTkJRVzFETEVOQlFVTXNRMEZCUXp0TFFVTXhSRHRCUVVORUxGRkJRVWtzYTBKQlFWY3NWMEZCVnl4RFFVRkRMRVZCUVVVN1FVRkRNMElzYVVKQlFWY3NSMEZCUnl4WFFVRlhMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzB0QlEzUkRPenM3T3p0QlFVdEVMRkZCUVVrc1FVRkJReXhEUVVGRExFOUJRVThzUTBGQlF5eEpRVUZKTEVOQlFVTXNWMEZCVnl4SlFVRkpMRU5CUVVNc1YwRkJWeXhKUVVGTExHVkJRVkVzVjBGQlZ5eERRVUZETEVWQlFVVTdRVUZEZGtVc1lVRkJUeXhQUVVGUExFTkJRVU1zVDBGQlR5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMHRCUXpsQ0xFMUJRVTA3UVVGRFRDeGhRVUZQTEU5QlFVOHNRMEZCUXl4RlFVRkZMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03UzBGRGVrSTdSMEZEUml4RFFVRkRMRU5CUVVNN08wRkJSVWdzVlVGQlVTeERRVUZETEdOQlFXTXNRMEZCUXl4UlFVRlJMRVZCUVVVc1ZVRkJVeXhYUVVGWExFVkJRVVVzVDBGQlR5eEZRVUZGTzBGQlF5OUVMRkZCUVVrc1UwRkJVeXhEUVVGRExFMUJRVTBzU1VGQlNTeERRVUZETEVWQlFVVTdRVUZEZWtJc1dVRkJUU3d5UWtGQll5eDFRMEZCZFVNc1EwRkJReXhEUVVGRE8wdEJRemxFTzBGQlEwUXNWMEZCVHl4UlFVRlJMRU5CUVVNc1QwRkJUeXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpMRVZCUVVVc1YwRkJWeXhGUVVGRk8wRkJRM0JFTEZGQlFVVXNSVUZCUlN4UFFVRlBMRU5CUVVNc1QwRkJUenRCUVVOdVFpeGhRVUZQTEVWQlFVVXNUMEZCVHl4RFFVRkRMRVZCUVVVN1FVRkRia0lzVlVGQlNTeEZRVUZGTEU5QlFVOHNRMEZCUXl4SlFVRkpPMHRCUTI1Q0xFTkJRVU1zUTBGQlF6dEhRVU5LTEVOQlFVTXNRMEZCUXp0RFFVTktJaXdpWm1sc1pTSTZJbWxtTG1weklpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElIc2dhWE5GYlhCMGVTd2dhWE5HZFc1amRHbHZiaUI5SUdaeWIyMGdKeTR1TDNWMGFXeHpKenRjYm1sdGNHOXlkQ0JGZUdObGNIUnBiMjRnWm5KdmJTQW5MaTR2WlhoalpYQjBhVzl1Snp0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ1puVnVZM1JwYjI0b2FXNXpkR0Z1WTJVcElIdGNiaUFnYVc1emRHRnVZMlV1Y21WbmFYTjBaWEpJWld4d1pYSW9KMmxtSnl3Z1puVnVZM1JwYjI0b1kyOXVaR2wwYVc5dVlXd3NJRzl3ZEdsdmJuTXBJSHRjYmlBZ0lDQnBaaUFvWVhKbmRXMWxiblJ6TG14bGJtZDBhQ0FoUFNBeUtTQjdYRzRnSUNBZ0lDQjBhSEp2ZHlCdVpYY2dSWGhqWlhCMGFXOXVLQ2NqYVdZZ2NtVnhkV2x5WlhNZ1pYaGhZM1JzZVNCdmJtVWdZWEpuZFcxbGJuUW5LVHRjYmlBZ0lDQjlYRzRnSUNBZ2FXWWdLR2x6Um5WdVkzUnBiMjRvWTI5dVpHbDBhVzl1WVd3cEtTQjdYRzRnSUNBZ0lDQmpiMjVrYVhScGIyNWhiQ0E5SUdOdmJtUnBkR2x2Ym1Gc0xtTmhiR3dvZEdocGN5azdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ0x5OGdSR1ZtWVhWc2RDQmlaV2hoZG1sdmNpQnBjeUIwYnlCeVpXNWtaWElnZEdobElIQnZjMmwwYVhabElIQmhkR2dnYVdZZ2RHaGxJSFpoYkhWbElHbHpJSFJ5ZFhSb2VTQmhibVFnYm05MElHVnRjSFI1TGx4dUlDQWdJQzh2SUZSb1pTQmdhVzVqYkhWa1pWcGxjbTlnSUc5d2RHbHZiaUJ0WVhrZ1ltVWdjMlYwSUhSdklIUnlaV0YwSUhSb1pTQmpiMjVrZEdsdmJtRnNJR0Z6SUhCMWNtVnNlU0J1YjNRZ1pXMXdkSGtnWW1GelpXUWdiMjRnZEdobFhHNGdJQ0FnTHk4Z1ltVm9ZWFpwYjNJZ2IyWWdhWE5GYlhCMGVTNGdSV1ptWldOMGFYWmxiSGtnZEdocGN5QmtaWFJsY20xcGJtVnpJR2xtSURBZ2FYTWdhR0Z1Wkd4bFpDQmllU0IwYUdVZ2NHOXphWFJwZG1VZ2NHRjBhQ0J2Y2lCdVpXZGhkR2wyWlM1Y2JpQWdJQ0JwWmlBb0tDRnZjSFJwYjI1ekxtaGhjMmd1YVc1amJIVmtaVnBsY204Z0ppWWdJV052Ym1ScGRHbHZibUZzS1NCOGZDQnBjMFZ0Y0hSNUtHTnZibVJwZEdsdmJtRnNLU2tnZTF4dUlDQWdJQ0FnY21WMGRYSnVJRzl3ZEdsdmJuTXVhVzUyWlhKelpTaDBhR2x6S1R0Y2JpQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdjbVYwZFhKdUlHOXdkR2x2Ym5NdVptNG9kR2hwY3lrN1hHNGdJQ0FnZlZ4dUlDQjlLVHRjYmx4dUlDQnBibk4wWVc1alpTNXlaV2RwYzNSbGNraGxiSEJsY2lnbmRXNXNaWE56Snl3Z1puVnVZM1JwYjI0b1kyOXVaR2wwYVc5dVlXd3NJRzl3ZEdsdmJuTXBJSHRjYmlBZ0lDQnBaaUFvWVhKbmRXMWxiblJ6TG14bGJtZDBhQ0FoUFNBeUtTQjdYRzRnSUNBZ0lDQjBhSEp2ZHlCdVpYY2dSWGhqWlhCMGFXOXVLQ2NqZFc1c1pYTnpJSEpsY1hWcGNtVnpJR1Y0WVdOMGJIa2diMjVsSUdGeVozVnRaVzUwSnlrN1hHNGdJQ0FnZlZ4dUlDQWdJSEpsZEhWeWJpQnBibk4wWVc1alpTNW9aV3h3WlhKeld5ZHBaaWRkTG1OaGJHd29kR2hwY3l3Z1kyOXVaR2wwYVc5dVlXd3NJSHRjYmlBZ0lDQWdJR1p1T2lCdmNIUnBiMjV6TG1sdWRtVnljMlVzWEc0Z0lDQWdJQ0JwYm5abGNuTmxPaUJ2Y0hScGIyNXpMbVp1TEZ4dUlDQWdJQ0FnYUdGemFEb2diM0IwYVc5dWN5NW9ZWE5vWEc0Z0lDQWdmU2s3WEc0Z0lIMHBPMXh1ZlZ4dUlsMTlcbiIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gZnVuY3Rpb24gKGluc3RhbmNlKSB7XG4gIGluc3RhbmNlLnJlZ2lzdGVySGVscGVyKCdsb2cnLCBmdW5jdGlvbiAoKSAvKiBtZXNzYWdlLCBvcHRpb25zICove1xuICAgIHZhciBhcmdzID0gW3VuZGVmaW5lZF0sXG4gICAgICAgIG9wdGlvbnMgPSBhcmd1bWVudHNbYXJndW1lbnRzLmxlbmd0aCAtIDFdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgYXJncy5wdXNoKGFyZ3VtZW50c1tpXSk7XG4gICAgfVxuXG4gICAgdmFyIGxldmVsID0gMTtcbiAgICBpZiAob3B0aW9ucy5oYXNoLmxldmVsICE9IG51bGwpIHtcbiAgICAgIGxldmVsID0gb3B0aW9ucy5oYXNoLmxldmVsO1xuICAgIH0gZWxzZSBpZiAob3B0aW9ucy5kYXRhICYmIG9wdGlvbnMuZGF0YS5sZXZlbCAhPSBudWxsKSB7XG4gICAgICBsZXZlbCA9IG9wdGlvbnMuZGF0YS5sZXZlbDtcbiAgICB9XG4gICAgYXJnc1swXSA9IGxldmVsO1xuXG4gICAgaW5zdGFuY2UubG9nLmFwcGx5KGluc3RhbmNlLCBhcmdzKTtcbiAgfSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYklpNHVMeTR1THk0dUx5NHVMMnhwWWk5b1lXNWtiR1ZpWVhKekwyaGxiSEJsY25NdmJHOW5MbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN2NVSkJRV1VzVlVGQlV5eFJRVUZSTEVWQlFVVTdRVUZEYUVNc1ZVRkJVU3hEUVVGRExHTkJRV01zUTBGQlF5eExRVUZMTEVWQlFVVXNhME5CUVdsRE8wRkJRemxFTEZGQlFVa3NTVUZCU1N4SFFVRkhMRU5CUVVNc1UwRkJVeXhEUVVGRE8xRkJRM0JDTEU5QlFVOHNSMEZCUnl4VFFVRlRMRU5CUVVNc1UwRkJVeXhEUVVGRExFMUJRVTBzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXp0QlFVTTFReXhUUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1UwRkJVeXhEUVVGRExFMUJRVTBzUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVN1FVRkROME1zVlVGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dExRVU42UWpzN1FVRkZSQ3hSUVVGSkxFdEJRVXNzUjBGQlJ5eERRVUZETEVOQlFVTTdRVUZEWkN4UlFVRkpMRTlCUVU4c1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eEpRVUZKTEVsQlFVa3NSVUZCUlR0QlFVTTVRaXhYUVVGTExFZEJRVWNzVDBGQlR5eERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNN1MwRkROVUlzVFVGQlRTeEpRVUZKTEU5QlFVOHNRMEZCUXl4SlFVRkpMRWxCUVVrc1QwRkJUeXhEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVsQlFVa3NTVUZCU1N4RlFVRkZPMEZCUTNKRUxGZEJRVXNzUjBGQlJ5eFBRVUZQTEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJRenRMUVVNMVFqdEJRVU5FTEZGQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhMUVVGTExFTkJRVU03TzBGQlJXaENMRmxCUVZFc1EwRkJReXhIUVVGSExFMUJRVUVzUTBGQldpeFJRVUZSTEVWQlFWRXNTVUZCU1N4RFFVRkRMRU5CUVVNN1IwRkRka0lzUTBGQlF5eERRVUZETzBOQlEwb2lMQ0ptYVd4bElqb2liRzluTG1weklpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2laWGh3YjNKMElHUmxabUYxYkhRZ1puVnVZM1JwYjI0b2FXNXpkR0Z1WTJVcElIdGNiaUFnYVc1emRHRnVZMlV1Y21WbmFYTjBaWEpJWld4d1pYSW9KMnh2Wnljc0lHWjFibU4wYVc5dUtDOHFJRzFsYzNOaFoyVXNJRzl3ZEdsdmJuTWdLaThwSUh0Y2JpQWdJQ0JzWlhRZ1lYSm5jeUE5SUZ0MWJtUmxabWx1WldSZExGeHVJQ0FnSUNBZ2IzQjBhVzl1Y3lBOUlHRnlaM1Z0Wlc1MGMxdGhjbWQxYldWdWRITXViR1Z1WjNSb0lDMGdNVjA3WEc0Z0lDQWdabTl5SUNoc1pYUWdhU0E5SURBN0lHa2dQQ0JoY21kMWJXVnVkSE11YkdWdVozUm9JQzBnTVRzZ2FTc3JLU0I3WEc0Z0lDQWdJQ0JoY21kekxuQjFjMmdvWVhKbmRXMWxiblJ6VzJsZEtUdGNiaUFnSUNCOVhHNWNiaUFnSUNCc1pYUWdiR1YyWld3Z1BTQXhPMXh1SUNBZ0lHbG1JQ2h2Y0hScGIyNXpMbWhoYzJndWJHVjJaV3dnSVQwZ2JuVnNiQ2tnZTF4dUlDQWdJQ0FnYkdWMlpXd2dQU0J2Y0hScGIyNXpMbWhoYzJndWJHVjJaV3c3WEc0Z0lDQWdmU0JsYkhObElHbG1JQ2h2Y0hScGIyNXpMbVJoZEdFZ0ppWWdiM0IwYVc5dWN5NWtZWFJoTG14bGRtVnNJQ0U5SUc1MWJHd3BJSHRjYmlBZ0lDQWdJR3hsZG1Wc0lEMGdiM0IwYVc5dWN5NWtZWFJoTG14bGRtVnNPMXh1SUNBZ0lIMWNiaUFnSUNCaGNtZHpXekJkSUQwZ2JHVjJaV3c3WEc1Y2JpQWdJQ0JwYm5OMFlXNWpaUzVzYjJjb0xpNHVZWEpuY3lrN1hHNGdJSDBwTzF4dWZWeHVJbDE5XG4iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGZ1bmN0aW9uIChpbnN0YW5jZSkge1xuICBpbnN0YW5jZS5yZWdpc3RlckhlbHBlcignbG9va3VwJywgZnVuY3Rpb24gKG9iaiwgZmllbGQsIG9wdGlvbnMpIHtcbiAgICBpZiAoIW9iaikge1xuICAgICAgLy8gTm90ZSBmb3IgNS4wOiBDaGFuZ2UgdG8gXCJvYmogPT0gbnVsbFwiIGluIDUuMFxuICAgICAgcmV0dXJuIG9iajtcbiAgICB9XG4gICAgcmV0dXJuIG9wdGlvbnMubG9va3VwUHJvcGVydHkob2JqLCBmaWVsZCk7XG4gIH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUx5NHVMeTR1TDJ4cFlpOW9ZVzVrYkdWaVlYSnpMMmhsYkhCbGNuTXZiRzl2YTNWd0xtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3Y1VKQlFXVXNWVUZCVXl4UlFVRlJMRVZCUVVVN1FVRkRhRU1zVlVGQlVTeERRVUZETEdOQlFXTXNRMEZCUXl4UlFVRlJMRVZCUVVVc1ZVRkJVeXhIUVVGSExFVkJRVVVzUzBGQlN5eEZRVUZGTEU5QlFVOHNSVUZCUlR0QlFVTTVSQ3hSUVVGSkxFTkJRVU1zUjBGQlJ5eEZRVUZGT3p0QlFVVlNMR0ZCUVU4c1IwRkJSeXhEUVVGRE8wdEJRMW83UVVGRFJDeFhRVUZQTEU5QlFVOHNRMEZCUXl4alFVRmpMRU5CUVVNc1IwRkJSeXhGUVVGRkxFdEJRVXNzUTBGQlF5eERRVUZETzBkQlF6TkRMRU5CUVVNc1EwRkJRenREUVVOS0lpd2labWxzWlNJNklteHZiMnQxY0M1cWN5SXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbVY0Y0c5eWRDQmtaV1poZFd4MElHWjFibU4wYVc5dUtHbHVjM1JoYm1ObEtTQjdYRzRnSUdsdWMzUmhibU5sTG5KbFoybHpkR1Z5U0dWc2NHVnlLQ2RzYjI5cmRYQW5MQ0JtZFc1amRHbHZiaWh2WW1vc0lHWnBaV3hrTENCdmNIUnBiMjV6S1NCN1hHNGdJQ0FnYVdZZ0tDRnZZbW9wSUh0Y2JpQWdJQ0FnSUM4dklFNXZkR1VnWm05eUlEVXVNRG9nUTJoaGJtZGxJSFJ2SUZ3aWIySnFJRDA5SUc1MWJHeGNJaUJwYmlBMUxqQmNiaUFnSUNBZ0lISmxkSFZ5YmlCdlltbzdYRzRnSUNBZ2ZWeHVJQ0FnSUhKbGRIVnliaUJ2Y0hScGIyNXpMbXh2YjJ0MWNGQnliM0JsY25SNUtHOWlhaXdnWm1sbGJHUXBPMXh1SUNCOUtUdGNibjFjYmlKZGZRPT1cbiIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbi8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uL3V0aWxzJyk7XG5cbnZhciBfZXhjZXB0aW9uID0gcmVxdWlyZSgnLi4vZXhjZXB0aW9uJyk7XG5cbnZhciBfZXhjZXB0aW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2V4Y2VwdGlvbik7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGZ1bmN0aW9uIChpbnN0YW5jZSkge1xuICBpbnN0YW5jZS5yZWdpc3RlckhlbHBlcignd2l0aCcsIGZ1bmN0aW9uIChjb250ZXh0LCBvcHRpb25zKSB7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggIT0gMikge1xuICAgICAgdGhyb3cgbmV3IF9leGNlcHRpb24yWydkZWZhdWx0J10oJyN3aXRoIHJlcXVpcmVzIGV4YWN0bHkgb25lIGFyZ3VtZW50Jyk7XG4gICAgfVxuICAgIGlmIChfdXRpbHMuaXNGdW5jdGlvbihjb250ZXh0KSkge1xuICAgICAgY29udGV4dCA9IGNvbnRleHQuY2FsbCh0aGlzKTtcbiAgICB9XG5cbiAgICB2YXIgZm4gPSBvcHRpb25zLmZuO1xuXG4gICAgaWYgKCFfdXRpbHMuaXNFbXB0eShjb250ZXh0KSkge1xuICAgICAgdmFyIGRhdGEgPSBvcHRpb25zLmRhdGE7XG4gICAgICBpZiAob3B0aW9ucy5kYXRhICYmIG9wdGlvbnMuaWRzKSB7XG4gICAgICAgIGRhdGEgPSBfdXRpbHMuY3JlYXRlRnJhbWUob3B0aW9ucy5kYXRhKTtcbiAgICAgICAgZGF0YS5jb250ZXh0UGF0aCA9IF91dGlscy5hcHBlbmRDb250ZXh0UGF0aChvcHRpb25zLmRhdGEuY29udGV4dFBhdGgsIG9wdGlvbnMuaWRzWzBdKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZuKGNvbnRleHQsIHtcbiAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgYmxvY2tQYXJhbXM6IF91dGlscy5ibG9ja1BhcmFtcyhbY29udGV4dF0sIFtkYXRhICYmIGRhdGEuY29udGV4dFBhdGhdKVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBvcHRpb25zLmludmVyc2UodGhpcyk7XG4gICAgfVxuICB9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMeTR1THk0dUwyeHBZaTlvWVc1a2JHVmlZWEp6TDJobGJIQmxjbk12ZDJsMGFDNXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3T3pzN08zRkNRVTFQTEZWQlFWVTdPM2xDUVVOTExHTkJRV003T3pzN2NVSkJSWEpDTEZWQlFWTXNVVUZCVVN4RlFVRkZPMEZCUTJoRExGVkJRVkVzUTBGQlF5eGpRVUZqTEVOQlFVTXNUVUZCVFN4RlFVRkZMRlZCUVZNc1QwRkJUeXhGUVVGRkxFOUJRVThzUlVGQlJUdEJRVU42UkN4UlFVRkpMRk5CUVZNc1EwRkJReXhOUVVGTkxFbEJRVWtzUTBGQlF5eEZRVUZGTzBGQlEzcENMRmxCUVUwc01rSkJRV01zY1VOQlFYRkRMRU5CUVVNc1EwRkJRenRMUVVNMVJEdEJRVU5FTEZGQlFVa3NhMEpCUVZjc1QwRkJUeXhEUVVGRExFVkJRVVU3UVVGRGRrSXNZVUZCVHl4SFFVRkhMRTlCUVU4c1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdTMEZET1VJN08wRkJSVVFzVVVGQlNTeEZRVUZGTEVkQlFVY3NUMEZCVHl4RFFVRkRMRVZCUVVVc1EwRkJRenM3UVVGRmNFSXNVVUZCU1N4RFFVRkRMR1ZCUVZFc1QwRkJUeXhEUVVGRExFVkJRVVU3UVVGRGNrSXNWVUZCU1N4SlFVRkpMRWRCUVVjc1QwRkJUeXhEUVVGRExFbEJRVWtzUTBGQlF6dEJRVU40UWl4VlFVRkpMRTlCUVU4c1EwRkJReXhKUVVGSkxFbEJRVWtzVDBGQlR5eERRVUZETEVkQlFVY3NSVUZCUlR0QlFVTXZRaXhaUVVGSkxFZEJRVWNzYlVKQlFWa3NUMEZCVHl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8wRkJRMnBETEZsQlFVa3NRMEZCUXl4WFFVRlhMRWRCUVVjc2VVSkJRMnBDTEU5QlFVOHNRMEZCUXl4SlFVRkpMRU5CUVVNc1YwRkJWeXhGUVVONFFpeFBRVUZQTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVObUxFTkJRVU03VDBGRFNEczdRVUZGUkN4aFFVRlBMRVZCUVVVc1EwRkJReXhQUVVGUExFVkJRVVU3UVVGRGFrSXNXVUZCU1N4RlFVRkZMRWxCUVVrN1FVRkRWaXh0UWtGQlZ5eEZRVUZGTEcxQ1FVRlpMRU5CUVVNc1QwRkJUeXhEUVVGRExFVkJRVVVzUTBGQlF5eEpRVUZKTEVsQlFVa3NTVUZCU1N4RFFVRkRMRmRCUVZjc1EwRkJReXhEUVVGRE8wOUJRMmhGTEVOQlFVTXNRMEZCUXp0TFFVTktMRTFCUVUwN1FVRkRUQ3hoUVVGUExFOUJRVThzUTBGQlF5eFBRVUZQTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1MwRkRPVUk3UjBGRFJpeERRVUZETEVOQlFVTTdRMEZEU2lJc0ltWnBiR1VpT2lKM2FYUm9MbXB6SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUh0Y2JpQWdZWEJ3Wlc1a1EyOXVkR1Y0ZEZCaGRHZ3NYRzRnSUdKc2IyTnJVR0Z5WVcxekxGeHVJQ0JqY21WaGRHVkdjbUZ0WlN4Y2JpQWdhWE5GYlhCMGVTeGNiaUFnYVhOR2RXNWpkR2x2Ymx4dWZTQm1jbTl0SUNjdUxpOTFkR2xzY3ljN1hHNXBiWEJ2Y25RZ1JYaGpaWEIwYVc5dUlHWnliMjBnSnk0dUwyVjRZMlZ3ZEdsdmJpYzdYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJR1oxYm1OMGFXOXVLR2x1YzNSaGJtTmxLU0I3WEc0Z0lHbHVjM1JoYm1ObExuSmxaMmx6ZEdWeVNHVnNjR1Z5S0NkM2FYUm9KeXdnWm5WdVkzUnBiMjRvWTI5dWRHVjRkQ3dnYjNCMGFXOXVjeWtnZTF4dUlDQWdJR2xtSUNoaGNtZDFiV1Z1ZEhNdWJHVnVaM1JvSUNFOUlESXBJSHRjYmlBZ0lDQWdJSFJvY205M0lHNWxkeUJGZUdObGNIUnBiMjRvSnlOM2FYUm9JSEpsY1hWcGNtVnpJR1Y0WVdOMGJIa2diMjVsSUdGeVozVnRaVzUwSnlrN1hHNGdJQ0FnZlZ4dUlDQWdJR2xtSUNocGMwWjFibU4wYVc5dUtHTnZiblJsZUhRcEtTQjdYRzRnSUNBZ0lDQmpiMjUwWlhoMElEMGdZMjl1ZEdWNGRDNWpZV3hzS0hSb2FYTXBPMXh1SUNBZ0lIMWNibHh1SUNBZ0lHeGxkQ0JtYmlBOUlHOXdkR2x2Ym5NdVptNDdYRzVjYmlBZ0lDQnBaaUFvSVdselJXMXdkSGtvWTI5dWRHVjRkQ2twSUh0Y2JpQWdJQ0FnSUd4bGRDQmtZWFJoSUQwZ2IzQjBhVzl1Y3k1a1lYUmhPMXh1SUNBZ0lDQWdhV1lnS0c5d2RHbHZibk11WkdGMFlTQW1KaUJ2Y0hScGIyNXpMbWxrY3lrZ2UxeHVJQ0FnSUNBZ0lDQmtZWFJoSUQwZ1kzSmxZWFJsUm5KaGJXVW9iM0IwYVc5dWN5NWtZWFJoS1R0Y2JpQWdJQ0FnSUNBZ1pHRjBZUzVqYjI1MFpYaDBVR0YwYUNBOUlHRndjR1Z1WkVOdmJuUmxlSFJRWVhSb0tGeHVJQ0FnSUNBZ0lDQWdJRzl3ZEdsdmJuTXVaR0YwWVM1amIyNTBaWGgwVUdGMGFDeGNiaUFnSUNBZ0lDQWdJQ0J2Y0hScGIyNXpMbWxrYzFzd1hWeHVJQ0FnSUNBZ0lDQXBPMXh1SUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0J5WlhSMWNtNGdabTRvWTI5dWRHVjRkQ3dnZTF4dUlDQWdJQ0FnSUNCa1lYUmhPaUJrWVhSaExGeHVJQ0FnSUNBZ0lDQmliRzlqYTFCaGNtRnRjem9nWW14dlkydFFZWEpoYlhNb1cyTnZiblJsZUhSZExDQmJaR0YwWVNBbUppQmtZWFJoTG1OdmJuUmxlSFJRWVhSb1hTbGNiaUFnSUNBZ0lIMHBPMXh1SUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNCeVpYUjFjbTRnYjNCMGFXOXVjeTVwYm5abGNuTmxLSFJvYVhNcE8xeHVJQ0FnSUgxY2JpQWdmU2s3WEc1OVhHNGlYWDA9XG4iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmNyZWF0ZU5ld0xvb2t1cE9iamVjdCA9IGNyZWF0ZU5ld0xvb2t1cE9iamVjdDtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uL3V0aWxzJyk7XG5cbi8qKlxuICogQ3JlYXRlIGEgbmV3IG9iamVjdCB3aXRoIFwibnVsbFwiLXByb3RvdHlwZSB0byBhdm9pZCB0cnV0aHkgcmVzdWx0cyBvbiBwcm90b3R5cGUgcHJvcGVydGllcy5cbiAqIFRoZSByZXN1bHRpbmcgb2JqZWN0IGNhbiBiZSB1c2VkIHdpdGggXCJvYmplY3RbcHJvcGVydHldXCIgdG8gY2hlY2sgaWYgYSBwcm9wZXJ0eSBleGlzdHNcbiAqIEBwYXJhbSB7Li4ub2JqZWN0fSBzb3VyY2VzIGEgdmFyYXJncyBwYXJhbWV0ZXIgb2Ygc291cmNlIG9iamVjdHMgdGhhdCB3aWxsIGJlIG1lcmdlZFxuICogQHJldHVybnMge29iamVjdH1cbiAqL1xuXG5mdW5jdGlvbiBjcmVhdGVOZXdMb29rdXBPYmplY3QoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBzb3VyY2VzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgc291cmNlc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHJldHVybiBfdXRpbHMuZXh0ZW5kLmFwcGx5KHVuZGVmaW5lZCwgW09iamVjdC5jcmVhdGUobnVsbCldLmNvbmNhdChzb3VyY2VzKSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUx5NHVMeTR1TDJ4cFlpOW9ZVzVrYkdWaVlYSnpMMmx1ZEdWeWJtRnNMMk55WldGMFpTMXVaWGN0Ykc5dmEzVndMVzlpYW1WamRDNXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3T3p0eFFrRkJkVUlzVlVGQlZUczdPenM3T3pzN08wRkJVVEZDTEZOQlFWTXNjVUpCUVhGQ0xFZEJRV0U3YjBOQlFWUXNUMEZCVHp0QlFVRlFMRmRCUVU4N096dEJRVU01UXl4VFFVRlBMR2REUVVGUExFMUJRVTBzUTBGQlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRk5CUVVzc1QwRkJUeXhGUVVGRExFTkJRVU03UTBGRGFFUWlMQ0ptYVd4bElqb2lZM0psWVhSbExXNWxkeTFzYjI5cmRYQXRiMkpxWldOMExtcHpJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJSHNnWlhoMFpXNWtJSDBnWm5KdmJTQW5MaTR2ZFhScGJITW5PMXh1WEc0dktpcGNiaUFxSUVOeVpXRjBaU0JoSUc1bGR5QnZZbXBsWTNRZ2QybDBhQ0JjSW01MWJHeGNJaTF3Y205MGIzUjVjR1VnZEc4Z1lYWnZhV1FnZEhKMWRHaDVJSEpsYzNWc2RITWdiMjRnY0hKdmRHOTBlWEJsSUhCeWIzQmxjblJwWlhNdVhHNGdLaUJVYUdVZ2NtVnpkV3gwYVc1bklHOWlhbVZqZENCallXNGdZbVVnZFhObFpDQjNhWFJvSUZ3aWIySnFaV04wVzNCeWIzQmxjblI1WFZ3aUlIUnZJR05vWldOcklHbG1JR0VnY0hKdmNHVnlkSGtnWlhocGMzUnpYRzRnS2lCQWNHRnlZVzBnZXk0dUxtOWlhbVZqZEgwZ2MyOTFjbU5sY3lCaElIWmhjbUZ5WjNNZ2NHRnlZVzFsZEdWeUlHOW1JSE52ZFhKalpTQnZZbXBsWTNSeklIUm9ZWFFnZDJsc2JDQmlaU0J0WlhKblpXUmNiaUFxSUVCeVpYUjFjbTV6SUh0dlltcGxZM1I5WEc0Z0tpOWNibVY0Y0c5eWRDQm1kVzVqZEdsdmJpQmpjbVZoZEdWT1pYZE1iMjlyZFhCUFltcGxZM1FvTGk0dWMyOTFjbU5sY3lrZ2UxeHVJQ0J5WlhSMWNtNGdaWGgwWlc1a0tFOWlhbVZqZEM1amNtVmhkR1VvYm5Wc2JDa3NJQzR1TG5OdmRYSmpaWE1wTzF4dWZWeHVJbDE5XG4iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmNyZWF0ZVByb3RvQWNjZXNzQ29udHJvbCA9IGNyZWF0ZVByb3RvQWNjZXNzQ29udHJvbDtcbmV4cG9ydHMucmVzdWx0SXNBbGxvd2VkID0gcmVzdWx0SXNBbGxvd2VkO1xuZXhwb3J0cy5yZXNldExvZ2dlZFByb3BlcnRpZXMgPSByZXNldExvZ2dlZFByb3BlcnRpZXM7XG4vLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gbmV3T2JqWydkZWZhdWx0J10gPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxuXG52YXIgX2NyZWF0ZU5ld0xvb2t1cE9iamVjdCA9IHJlcXVpcmUoJy4vY3JlYXRlLW5ldy1sb29rdXAtb2JqZWN0Jyk7XG5cbnZhciBfbG9nZ2VyID0gcmVxdWlyZSgnLi4vbG9nZ2VyJyk7XG5cbnZhciBsb2dnZXIgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfbG9nZ2VyKTtcblxudmFyIGxvZ2dlZFByb3BlcnRpZXMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXG5mdW5jdGlvbiBjcmVhdGVQcm90b0FjY2Vzc0NvbnRyb2wocnVudGltZU9wdGlvbnMpIHtcbiAgdmFyIGRlZmF1bHRNZXRob2RXaGl0ZUxpc3QgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICBkZWZhdWx0TWV0aG9kV2hpdGVMaXN0Wydjb25zdHJ1Y3RvciddID0gZmFsc2U7XG4gIGRlZmF1bHRNZXRob2RXaGl0ZUxpc3RbJ19fZGVmaW5lR2V0dGVyX18nXSA9IGZhbHNlO1xuICBkZWZhdWx0TWV0aG9kV2hpdGVMaXN0WydfX2RlZmluZVNldHRlcl9fJ10gPSBmYWxzZTtcbiAgZGVmYXVsdE1ldGhvZFdoaXRlTGlzdFsnX19sb29rdXBHZXR0ZXJfXyddID0gZmFsc2U7XG5cbiAgdmFyIGRlZmF1bHRQcm9wZXJ0eVdoaXRlTGlzdCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b1xuICBkZWZhdWx0UHJvcGVydHlXaGl0ZUxpc3RbJ19fcHJvdG9fXyddID0gZmFsc2U7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICB3aGl0ZWxpc3Q6IF9jcmVhdGVOZXdMb29rdXBPYmplY3QuY3JlYXRlTmV3TG9va3VwT2JqZWN0KGRlZmF1bHRQcm9wZXJ0eVdoaXRlTGlzdCwgcnVudGltZU9wdGlvbnMuYWxsb3dlZFByb3RvUHJvcGVydGllcyksXG4gICAgICBkZWZhdWx0VmFsdWU6IHJ1bnRpbWVPcHRpb25zLmFsbG93UHJvdG9Qcm9wZXJ0aWVzQnlEZWZhdWx0XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICB3aGl0ZWxpc3Q6IF9jcmVhdGVOZXdMb29rdXBPYmplY3QuY3JlYXRlTmV3TG9va3VwT2JqZWN0KGRlZmF1bHRNZXRob2RXaGl0ZUxpc3QsIHJ1bnRpbWVPcHRpb25zLmFsbG93ZWRQcm90b01ldGhvZHMpLFxuICAgICAgZGVmYXVsdFZhbHVlOiBydW50aW1lT3B0aW9ucy5hbGxvd1Byb3RvTWV0aG9kc0J5RGVmYXVsdFxuICAgIH1cbiAgfTtcbn1cblxuZnVuY3Rpb24gcmVzdWx0SXNBbGxvd2VkKHJlc3VsdCwgcHJvdG9BY2Nlc3NDb250cm9sLCBwcm9wZXJ0eU5hbWUpIHtcbiAgaWYgKHR5cGVvZiByZXN1bHQgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gY2hlY2tXaGl0ZUxpc3QocHJvdG9BY2Nlc3NDb250cm9sLm1ldGhvZHMsIHByb3BlcnR5TmFtZSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGNoZWNrV2hpdGVMaXN0KHByb3RvQWNjZXNzQ29udHJvbC5wcm9wZXJ0aWVzLCBwcm9wZXJ0eU5hbWUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNoZWNrV2hpdGVMaXN0KHByb3RvQWNjZXNzQ29udHJvbEZvclR5cGUsIHByb3BlcnR5TmFtZSkge1xuICBpZiAocHJvdG9BY2Nlc3NDb250cm9sRm9yVHlwZS53aGl0ZWxpc3RbcHJvcGVydHlOYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIHByb3RvQWNjZXNzQ29udHJvbEZvclR5cGUud2hpdGVsaXN0W3Byb3BlcnR5TmFtZV0gPT09IHRydWU7XG4gIH1cbiAgaWYgKHByb3RvQWNjZXNzQ29udHJvbEZvclR5cGUuZGVmYXVsdFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gcHJvdG9BY2Nlc3NDb250cm9sRm9yVHlwZS5kZWZhdWx0VmFsdWU7XG4gIH1cbiAgbG9nVW5leHBlY2VkUHJvcGVydHlBY2Nlc3NPbmNlKHByb3BlcnR5TmFtZSk7XG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gbG9nVW5leHBlY2VkUHJvcGVydHlBY2Nlc3NPbmNlKHByb3BlcnR5TmFtZSkge1xuICBpZiAobG9nZ2VkUHJvcGVydGllc1twcm9wZXJ0eU5hbWVdICE9PSB0cnVlKSB7XG4gICAgbG9nZ2VkUHJvcGVydGllc1twcm9wZXJ0eU5hbWVdID0gdHJ1ZTtcbiAgICBsb2dnZXIubG9nKCdlcnJvcicsICdIYW5kbGViYXJzOiBBY2Nlc3MgaGFzIGJlZW4gZGVuaWVkIHRvIHJlc29sdmUgdGhlIHByb3BlcnR5IFwiJyArIHByb3BlcnR5TmFtZSArICdcIiBiZWNhdXNlIGl0IGlzIG5vdCBhbiBcIm93biBwcm9wZXJ0eVwiIG9mIGl0cyBwYXJlbnQuXFxuJyArICdZb3UgY2FuIGFkZCBhIHJ1bnRpbWUgb3B0aW9uIHRvIGRpc2FibGUgdGhlIGNoZWNrIG9yIHRoaXMgd2FybmluZzpcXG4nICsgJ1NlZSBodHRwczovL2hhbmRsZWJhcnNqcy5jb20vYXBpLXJlZmVyZW5jZS9ydW50aW1lLW9wdGlvbnMuaHRtbCNvcHRpb25zLXRvLWNvbnRyb2wtcHJvdG90eXBlLWFjY2VzcyBmb3IgZGV0YWlscycpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlc2V0TG9nZ2VkUHJvcGVydGllcygpIHtcbiAgT2JqZWN0LmtleXMobG9nZ2VkUHJvcGVydGllcykuZm9yRWFjaChmdW5jdGlvbiAocHJvcGVydHlOYW1lKSB7XG4gICAgZGVsZXRlIGxvZ2dlZFByb3BlcnRpZXNbcHJvcGVydHlOYW1lXTtcbiAgfSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUx5NHVMeTR1TDJ4cFlpOW9ZVzVrYkdWaVlYSnpMMmx1ZEdWeWJtRnNMM0J5YjNSdkxXRmpZMlZ6Y3k1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPenM3T3pzN08zRkRRVUZ6UXl3MFFrRkJORUk3TzNOQ1FVTXhReXhYUVVGWE96dEpRVUYyUWl4TlFVRk5PenRCUVVWc1FpeEpRVUZOTEdkQ1FVRm5RaXhIUVVGSExFMUJRVTBzUTBGQlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN08wRkJSWFJETEZOQlFWTXNkMEpCUVhkQ0xFTkJRVU1zWTBGQll5eEZRVUZGTzBGQlEzWkVMRTFCUVVrc2MwSkJRWE5DTEVkQlFVY3NUVUZCVFN4RFFVRkRMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dEJRVU5xUkN4M1FrRkJjMElzUTBGQlF5eGhRVUZoTEVOQlFVTXNSMEZCUnl4TFFVRkxMRU5CUVVNN1FVRkRPVU1zZDBKQlFYTkNMRU5CUVVNc2EwSkJRV3RDTEVOQlFVTXNSMEZCUnl4TFFVRkxMRU5CUVVNN1FVRkRia1FzZDBKQlFYTkNMRU5CUVVNc2EwSkJRV3RDTEVOQlFVTXNSMEZCUnl4TFFVRkxMRU5CUVVNN1FVRkRia1FzZDBKQlFYTkNMRU5CUVVNc2EwSkJRV3RDTEVOQlFVTXNSMEZCUnl4TFFVRkxMRU5CUVVNN08wRkJSVzVFTEUxQlFVa3NkMEpCUVhkQ0xFZEJRVWNzVFVGQlRTeERRVUZETEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenM3UVVGRmJrUXNNRUpCUVhkQ0xFTkJRVU1zVjBGQlZ5eERRVUZETEVkQlFVY3NTMEZCU3l4RFFVRkRPenRCUVVVNVF5eFRRVUZQTzBGQlEwd3NZMEZCVlN4RlFVRkZPMEZCUTFZc1pVRkJVeXhGUVVGRkxEWkRRVU5VTEhkQ1FVRjNRaXhGUVVONFFpeGpRVUZqTEVOQlFVTXNjMEpCUVhOQ0xFTkJRM1JETzBGQlEwUXNhMEpCUVZrc1JVRkJSU3hqUVVGakxFTkJRVU1zTmtKQlFUWkNPMHRCUXpORU8wRkJRMFFzVjBGQlR5eEZRVUZGTzBGQlExQXNaVUZCVXl4RlFVRkZMRFpEUVVOVUxITkNRVUZ6UWl4RlFVTjBRaXhqUVVGakxFTkJRVU1zYlVKQlFXMUNMRU5CUTI1RE8wRkJRMFFzYTBKQlFWa3NSVUZCUlN4alFVRmpMRU5CUVVNc01FSkJRVEJDTzB0QlEzaEVPMGRCUTBZc1EwRkJRenREUVVOSU96dEJRVVZOTEZOQlFWTXNaVUZCWlN4RFFVRkRMRTFCUVUwc1JVRkJSU3hyUWtGQmEwSXNSVUZCUlN4WlFVRlpMRVZCUVVVN1FVRkRlRVVzVFVGQlNTeFBRVUZQTEUxQlFVMHNTMEZCU3l4VlFVRlZMRVZCUVVVN1FVRkRhRU1zVjBGQlR5eGpRVUZqTEVOQlFVTXNhMEpCUVd0Q0xFTkJRVU1zVDBGQlR5eEZRVUZGTEZsQlFWa3NRMEZCUXl4RFFVRkRPMGRCUTJwRkxFMUJRVTA3UVVGRFRDeFhRVUZQTEdOQlFXTXNRMEZCUXl4clFrRkJhMElzUTBGQlF5eFZRVUZWTEVWQlFVVXNXVUZCV1N4RFFVRkRMRU5CUVVNN1IwRkRjRVU3UTBGRFJqczdRVUZGUkN4VFFVRlRMR05CUVdNc1EwRkJReXg1UWtGQmVVSXNSVUZCUlN4WlFVRlpMRVZCUVVVN1FVRkRMMFFzVFVGQlNTeDVRa0ZCZVVJc1EwRkJReXhUUVVGVExFTkJRVU1zV1VGQldTeERRVUZETEV0QlFVc3NVMEZCVXl4RlFVRkZPMEZCUTI1RkxGZEJRVThzZVVKQlFYbENMRU5CUVVNc1UwRkJVeXhEUVVGRExGbEJRVmtzUTBGQlF5eExRVUZMTEVsQlFVa3NRMEZCUXp0SFFVTnVSVHRCUVVORUxFMUJRVWtzZVVKQlFYbENMRU5CUVVNc1dVRkJXU3hMUVVGTExGTkJRVk1zUlVGQlJUdEJRVU40UkN4WFFVRlBMSGxDUVVGNVFpeERRVUZETEZsQlFWa3NRMEZCUXp0SFFVTXZRenRCUVVORUxHZERRVUU0UWl4RFFVRkRMRmxCUVZrc1EwRkJReXhEUVVGRE8wRkJRemRETEZOQlFVOHNTMEZCU3l4RFFVRkRPME5CUTJRN08wRkJSVVFzVTBGQlV5dzRRa0ZCT0VJc1EwRkJReXhaUVVGWkxFVkJRVVU3UVVGRGNFUXNUVUZCU1N4blFrRkJaMElzUTBGQlF5eFpRVUZaTEVOQlFVTXNTMEZCU3l4SlFVRkpMRVZCUVVVN1FVRkRNME1zYjBKQlFXZENMRU5CUVVNc1dVRkJXU3hEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETzBGQlEzUkRMRlZCUVUwc1EwRkJReXhIUVVGSExFTkJRMUlzVDBGQlR5eEZRVU5RTEdsRlFVRXJSQ3haUVVGWkxHOUpRVU5JTEc5SVFVTXlReXhEUVVOd1NDeERRVUZETzBkQlEwZzdRMEZEUmpzN1FVRkZUU3hUUVVGVExIRkNRVUZ4UWl4SFFVRkhPMEZCUTNSRExGRkJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNaMEpCUVdkQ0xFTkJRVU1zUTBGQlF5eFBRVUZQTEVOQlFVTXNWVUZCUVN4WlFVRlpMRVZCUVVrN1FVRkRjRVFzVjBGQlR5eG5Ra0ZCWjBJc1EwRkJReXhaUVVGWkxFTkJRVU1zUTBGQlF6dEhRVU4yUXl4RFFVRkRMRU5CUVVNN1EwRkRTaUlzSW1acGJHVWlPaUp3Y205MGJ5MWhZMk5sYzNNdWFuTWlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdleUJqY21WaGRHVk9aWGRNYjI5cmRYQlBZbXBsWTNRZ2ZTQm1jbTl0SUNjdUwyTnlaV0YwWlMxdVpYY3RiRzl2YTNWd0xXOWlhbVZqZENjN1hHNXBiWEJ2Y25RZ0tpQmhjeUJzYjJkblpYSWdabkp2YlNBbkxpNHZiRzluWjJWeUp6dGNibHh1WTI5dWMzUWdiRzluWjJWa1VISnZjR1Z5ZEdsbGN5QTlJRTlpYW1WamRDNWpjbVZoZEdVb2JuVnNiQ2s3WEc1Y2JtVjRjRzl5ZENCbWRXNWpkR2x2YmlCamNtVmhkR1ZRY205MGIwRmpZMlZ6YzBOdmJuUnliMndvY25WdWRHbHRaVTl3ZEdsdmJuTXBJSHRjYmlBZ2JHVjBJR1JsWm1GMWJIUk5aWFJvYjJSWGFHbDBaVXhwYzNRZ1BTQlBZbXBsWTNRdVkzSmxZWFJsS0c1MWJHd3BPMXh1SUNCa1pXWmhkV3gwVFdWMGFHOWtWMmhwZEdWTWFYTjBXeWRqYjI1emRISjFZM1J2Y2lkZElEMGdabUZzYzJVN1hHNGdJR1JsWm1GMWJIUk5aWFJvYjJSWGFHbDBaVXhwYzNSYkoxOWZaR1ZtYVc1bFIyVjBkR1Z5WDE4blhTQTlJR1poYkhObE8xeHVJQ0JrWldaaGRXeDBUV1YwYUc5a1YyaHBkR1ZNYVhOMFd5ZGZYMlJsWm1sdVpWTmxkSFJsY2w5ZkoxMGdQU0JtWVd4elpUdGNiaUFnWkdWbVlYVnNkRTFsZEdodlpGZG9hWFJsVEdsemRGc25YMTlzYjI5cmRYQkhaWFIwWlhKZlh5ZGRJRDBnWm1Gc2MyVTdYRzVjYmlBZ2JHVjBJR1JsWm1GMWJIUlFjbTl3WlhKMGVWZG9hWFJsVEdsemRDQTlJRTlpYW1WamRDNWpjbVZoZEdVb2JuVnNiQ2s3WEc0Z0lDOHZJR1Z6YkdsdWRDMWthWE5oWW14bExXNWxlSFF0YkdsdVpTQnVieTF3Y205MGIxeHVJQ0JrWldaaGRXeDBVSEp2Y0dWeWRIbFhhR2wwWlV4cGMzUmJKMTlmY0hKdmRHOWZYeWRkSUQwZ1ptRnNjMlU3WEc1Y2JpQWdjbVYwZFhKdUlIdGNiaUFnSUNCd2NtOXdaWEowYVdWek9pQjdYRzRnSUNBZ0lDQjNhR2wwWld4cGMzUTZJR055WldGMFpVNWxkMHh2YjJ0MWNFOWlhbVZqZENoY2JpQWdJQ0FnSUNBZ1pHVm1ZWFZzZEZCeWIzQmxjblI1VjJocGRHVk1hWE4wTEZ4dUlDQWdJQ0FnSUNCeWRXNTBhVzFsVDNCMGFXOXVjeTVoYkd4dmQyVmtVSEp2ZEc5UWNtOXdaWEowYVdWelhHNGdJQ0FnSUNBcExGeHVJQ0FnSUNBZ1pHVm1ZWFZzZEZaaGJIVmxPaUJ5ZFc1MGFXMWxUM0IwYVc5dWN5NWhiR3h2ZDFCeWIzUnZVSEp2Y0dWeWRHbGxjMEo1UkdWbVlYVnNkRnh1SUNBZ0lIMHNYRzRnSUNBZ2JXVjBhRzlrY3pvZ2UxeHVJQ0FnSUNBZ2QyaHBkR1ZzYVhOME9pQmpjbVZoZEdWT1pYZE1iMjlyZFhCUFltcGxZM1FvWEc0Z0lDQWdJQ0FnSUdSbFptRjFiSFJOWlhSb2IyUlhhR2wwWlV4cGMzUXNYRzRnSUNBZ0lDQWdJSEoxYm5ScGJXVlBjSFJwYjI1ekxtRnNiRzkzWldSUWNtOTBiMDFsZEdodlpITmNiaUFnSUNBZ0lDa3NYRzRnSUNBZ0lDQmtaV1poZFd4MFZtRnNkV1U2SUhKMWJuUnBiV1ZQY0hScGIyNXpMbUZzYkc5M1VISnZkRzlOWlhSb2IyUnpRbmxFWldaaGRXeDBYRzRnSUNBZ2ZWeHVJQ0I5TzF4dWZWeHVYRzVsZUhCdmNuUWdablZ1WTNScGIyNGdjbVZ6ZFd4MFNYTkJiR3h2ZDJWa0tISmxjM1ZzZEN3Z2NISnZkRzlCWTJObGMzTkRiMjUwY205c0xDQndjbTl3WlhKMGVVNWhiV1VwSUh0Y2JpQWdhV1lnS0hSNWNHVnZaaUJ5WlhOMWJIUWdQVDA5SUNkbWRXNWpkR2x2YmljcElIdGNiaUFnSUNCeVpYUjFjbTRnWTJobFkydFhhR2wwWlV4cGMzUW9jSEp2ZEc5QlkyTmxjM05EYjI1MGNtOXNMbTFsZEdodlpITXNJSEJ5YjNCbGNuUjVUbUZ0WlNrN1hHNGdJSDBnWld4elpTQjdYRzRnSUNBZ2NtVjBkWEp1SUdOb1pXTnJWMmhwZEdWTWFYTjBLSEJ5YjNSdlFXTmpaWE56UTI5dWRISnZiQzV3Y205d1pYSjBhV1Z6TENCd2NtOXdaWEowZVU1aGJXVXBPMXh1SUNCOVhHNTlYRzVjYm1aMWJtTjBhVzl1SUdOb1pXTnJWMmhwZEdWTWFYTjBLSEJ5YjNSdlFXTmpaWE56UTI5dWRISnZiRVp2Y2xSNWNHVXNJSEJ5YjNCbGNuUjVUbUZ0WlNrZ2UxeHVJQ0JwWmlBb2NISnZkRzlCWTJObGMzTkRiMjUwY205c1JtOXlWSGx3WlM1M2FHbDBaV3hwYzNSYmNISnZjR1Z5ZEhsT1lXMWxYU0FoUFQwZ2RXNWtaV1pwYm1Wa0tTQjdYRzRnSUNBZ2NtVjBkWEp1SUhCeWIzUnZRV05qWlhOelEyOXVkSEp2YkVadmNsUjVjR1V1ZDJocGRHVnNhWE4wVzNCeWIzQmxjblI1VG1GdFpWMGdQVDA5SUhSeWRXVTdYRzRnSUgxY2JpQWdhV1lnS0hCeWIzUnZRV05qWlhOelEyOXVkSEp2YkVadmNsUjVjR1V1WkdWbVlYVnNkRlpoYkhWbElDRTlQU0IxYm1SbFptbHVaV1FwSUh0Y2JpQWdJQ0J5WlhSMWNtNGdjSEp2ZEc5QlkyTmxjM05EYjI1MGNtOXNSbTl5Vkhsd1pTNWtaV1poZFd4MFZtRnNkV1U3WEc0Z0lIMWNiaUFnYkc5blZXNWxlSEJsWTJWa1VISnZjR1Z5ZEhsQlkyTmxjM05QYm1ObEtIQnliM0JsY25SNVRtRnRaU2s3WEc0Z0lISmxkSFZ5YmlCbVlXeHpaVHRjYm4xY2JseHVablZ1WTNScGIyNGdiRzluVlc1bGVIQmxZMlZrVUhKdmNHVnlkSGxCWTJObGMzTlBibU5sS0hCeWIzQmxjblI1VG1GdFpTa2dlMXh1SUNCcFppQW9iRzluWjJWa1VISnZjR1Z5ZEdsbGMxdHdjbTl3WlhKMGVVNWhiV1ZkSUNFOVBTQjBjblZsS1NCN1hHNGdJQ0FnYkc5bloyVmtVSEp2Y0dWeWRHbGxjMXR3Y205d1pYSjBlVTVoYldWZElEMGdkSEoxWlR0Y2JpQWdJQ0JzYjJkblpYSXViRzluS0Z4dUlDQWdJQ0FnSjJWeWNtOXlKeXhjYmlBZ0lDQWdJR0JJWVc1a2JHVmlZWEp6T2lCQlkyTmxjM01nYUdGeklHSmxaVzRnWkdWdWFXVmtJSFJ2SUhKbGMyOXNkbVVnZEdobElIQnliM0JsY25SNUlGd2lKSHR3Y205d1pYSjBlVTVoYldWOVhDSWdZbVZqWVhWelpTQnBkQ0JwY3lCdWIzUWdZVzRnWENKdmQyNGdjSEp2Y0dWeWRIbGNJaUJ2WmlCcGRITWdjR0Z5Wlc1MExseGNibUFnSzF4dUlDQWdJQ0FnSUNCZ1dXOTFJR05oYmlCaFpHUWdZU0J5ZFc1MGFXMWxJRzl3ZEdsdmJpQjBieUJrYVhOaFlteGxJSFJvWlNCamFHVmpheUJ2Y2lCMGFHbHpJSGRoY201cGJtYzZYRnh1WUNBclhHNGdJQ0FnSUNBZ0lHQlRaV1VnYUhSMGNITTZMeTlvWVc1a2JHVmlZWEp6YW5NdVkyOXRMMkZ3YVMxeVpXWmxjbVZ1WTJVdmNuVnVkR2x0WlMxdmNIUnBiMjV6TG1oMGJXd2piM0IwYVc5dWN5MTBieTFqYjI1MGNtOXNMWEJ5YjNSdmRIbHdaUzFoWTJObGMzTWdabTl5SUdSbGRHRnBiSE5nWEc0Z0lDQWdLVHRjYmlBZ2ZWeHVmVnh1WEc1bGVIQnZjblFnWm5WdVkzUnBiMjRnY21WelpYUk1iMmRuWldSUWNtOXdaWEowYVdWektDa2dlMXh1SUNCUFltcGxZM1F1YTJWNWN5aHNiMmRuWldSUWNtOXdaWEowYVdWektTNW1iM0pGWVdOb0tIQnliM0JsY25SNVRtRnRaU0E5UGlCN1hHNGdJQ0FnWkdWc1pYUmxJR3h2WjJkbFpGQnliM0JsY25ScFpYTmJjSEp2Y0dWeWRIbE9ZVzFsWFR0Y2JpQWdmU2s3WEc1OVhHNGlYWDA9XG4iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLndyYXBIZWxwZXIgPSB3cmFwSGVscGVyO1xuXG5mdW5jdGlvbiB3cmFwSGVscGVyKGhlbHBlciwgdHJhbnNmb3JtT3B0aW9uc0ZuKSB7XG4gIGlmICh0eXBlb2YgaGVscGVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgLy8gVGhpcyBzaG91bGQgbm90IGhhcHBlbiwgYnV0IGFwcGFyZW50bHkgaXQgZG9lcyBpbiBodHRwczovL2dpdGh1Yi5jb20vd3ljYXRzL2hhbmRsZWJhcnMuanMvaXNzdWVzLzE2MzlcbiAgICAvLyBXZSB0cnkgdG8gbWFrZSB0aGUgd3JhcHBlciBsZWFzdC1pbnZhc2l2ZSBieSBub3Qgd3JhcHBpbmcgaXQsIGlmIHRoZSBoZWxwZXIgaXMgbm90IGEgZnVuY3Rpb24uXG4gICAgcmV0dXJuIGhlbHBlcjtcbiAgfVxuICB2YXIgd3JhcHBlciA9IGZ1bmN0aW9uIHdyYXBwZXIoKSAvKiBkeW5hbWljIGFyZ3VtZW50cyAqL3tcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50c1thcmd1bWVudHMubGVuZ3RoIC0gMV07XG4gICAgYXJndW1lbnRzW2FyZ3VtZW50cy5sZW5ndGggLSAxXSA9IHRyYW5zZm9ybU9wdGlvbnNGbihvcHRpb25zKTtcbiAgICByZXR1cm4gaGVscGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG4gIHJldHVybiB3cmFwcGVyO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMeTR1THk0dUwyeHBZaTlvWVc1a2JHVmlZWEp6TDJsdWRHVnlibUZzTDNkeVlYQklaV3h3WlhJdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenM3UVVGQlR5eFRRVUZUTEZWQlFWVXNRMEZCUXl4TlFVRk5MRVZCUVVVc2EwSkJRV3RDTEVWQlFVVTdRVUZEY2tRc1RVRkJTU3hQUVVGUExFMUJRVTBzUzBGQlN5eFZRVUZWTEVWQlFVVTdPenRCUVVkb1F5eFhRVUZQTEUxQlFVMHNRMEZCUXp0SFFVTm1PMEZCUTBRc1RVRkJTU3hQUVVGUExFZEJRVWNzVTBGQlZpeFBRVUZQTERCQ1FVRnhRenRCUVVNNVF5eFJRVUZOTEU5QlFVOHNSMEZCUnl4VFFVRlRMRU5CUVVNc1UwRkJVeXhEUVVGRExFMUJRVTBzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXp0QlFVTm9SQ3hoUVVGVExFTkJRVU1zVTBGQlV5eERRVUZETEUxQlFVMHNSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhyUWtGQmEwSXNRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJRenRCUVVNNVJDeFhRVUZQTEUxQlFVMHNRMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hGUVVGRkxGTkJRVk1zUTBGQlF5eERRVUZETzBkQlEzUkRMRU5CUVVNN1FVRkRSaXhUUVVGUExFOUJRVThzUTBGQlF6dERRVU5vUWlJc0ltWnBiR1VpT2lKM2NtRndTR1ZzY0dWeUxtcHpJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpWlhod2IzSjBJR1oxYm1OMGFXOXVJSGR5WVhCSVpXeHdaWElvYUdWc2NHVnlMQ0IwY21GdWMyWnZjbTFQY0hScGIyNXpSbTRwSUh0Y2JpQWdhV1lnS0hSNWNHVnZaaUJvWld4d1pYSWdJVDA5SUNkbWRXNWpkR2x2YmljcElIdGNiaUFnSUNBdkx5QlVhR2x6SUhOb2IzVnNaQ0J1YjNRZ2FHRndjR1Z1TENCaWRYUWdZWEJ3WVhKbGJuUnNlU0JwZENCa2IyVnpJR2x1SUdoMGRIQnpPaTh2WjJsMGFIVmlMbU52YlM5M2VXTmhkSE12YUdGdVpHeGxZbUZ5Y3k1cWN5OXBjM04xWlhNdk1UWXpPVnh1SUNBZ0lDOHZJRmRsSUhSeWVTQjBieUJ0WVd0bElIUm9aU0IzY21Gd2NHVnlJR3hsWVhOMExXbHVkbUZ6YVhabElHSjVJRzV2ZENCM2NtRndjR2x1WnlCcGRDd2dhV1lnZEdobElHaGxiSEJsY2lCcGN5QnViM1FnWVNCbWRXNWpkR2x2Ymk1Y2JpQWdJQ0J5WlhSMWNtNGdhR1ZzY0dWeU8xeHVJQ0I5WEc0Z0lHeGxkQ0IzY21Gd2NHVnlJRDBnWm5WdVkzUnBiMjRvTHlvZ1pIbHVZVzFwWXlCaGNtZDFiV1Z1ZEhNZ0tpOHBJSHRjYmlBZ0lDQmpiMjV6ZENCdmNIUnBiMjV6SUQwZ1lYSm5kVzFsYm5SelcyRnlaM1Z0Wlc1MGN5NXNaVzVuZEdnZ0xTQXhYVHRjYmlBZ0lDQmhjbWQxYldWdWRITmJZWEpuZFcxbGJuUnpMbXhsYm1kMGFDQXRJREZkSUQwZ2RISmhibk5tYjNKdFQzQjBhVzl1YzBadUtHOXdkR2x2Ym5NcE8xeHVJQ0FnSUhKbGRIVnliaUJvWld4d1pYSXVZWEJ3Ykhrb2RHaHBjeXdnWVhKbmRXMWxiblJ6S1R0Y2JpQWdmVHRjYmlBZ2NtVjBkWEp1SUhkeVlYQndaWEk3WEc1OVhHNGlYWDA9XG4iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG5cbnZhciBsb2dnZXIgPSB7XG4gIG1ldGhvZE1hcDogWydkZWJ1ZycsICdpbmZvJywgJ3dhcm4nLCAnZXJyb3InXSxcbiAgbGV2ZWw6ICdpbmZvJyxcblxuICAvLyBNYXBzIGEgZ2l2ZW4gbGV2ZWwgdmFsdWUgdG8gdGhlIGBtZXRob2RNYXBgIGluZGV4ZXMgYWJvdmUuXG4gIGxvb2t1cExldmVsOiBmdW5jdGlvbiBsb29rdXBMZXZlbChsZXZlbCkge1xuICAgIGlmICh0eXBlb2YgbGV2ZWwgPT09ICdzdHJpbmcnKSB7XG4gICAgICB2YXIgbGV2ZWxNYXAgPSBfdXRpbHMuaW5kZXhPZihsb2dnZXIubWV0aG9kTWFwLCBsZXZlbC50b0xvd2VyQ2FzZSgpKTtcbiAgICAgIGlmIChsZXZlbE1hcCA+PSAwKSB7XG4gICAgICAgIGxldmVsID0gbGV2ZWxNYXA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXZlbCA9IHBhcnNlSW50KGxldmVsLCAxMCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGxldmVsO1xuICB9LFxuXG4gIC8vIENhbiBiZSBvdmVycmlkZGVuIGluIHRoZSBob3N0IGVudmlyb25tZW50XG4gIGxvZzogZnVuY3Rpb24gbG9nKGxldmVsKSB7XG4gICAgbGV2ZWwgPSBsb2dnZXIubG9va3VwTGV2ZWwobGV2ZWwpO1xuXG4gICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJyAmJiBsb2dnZXIubG9va3VwTGV2ZWwobG9nZ2VyLmxldmVsKSA8PSBsZXZlbCkge1xuICAgICAgdmFyIG1ldGhvZCA9IGxvZ2dlci5tZXRob2RNYXBbbGV2ZWxdO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGlmICghY29uc29sZVttZXRob2RdKSB7XG4gICAgICAgIG1ldGhvZCA9ICdsb2cnO1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgbWVzc2FnZSA9IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgbWVzc2FnZVtfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICB9XG5cbiAgICAgIGNvbnNvbGVbbWV0aG9kXS5hcHBseShjb25zb2xlLCBtZXNzYWdlKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gICAgfVxuICB9XG59O1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBsb2dnZXI7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYklpNHVMeTR1THk0dUwyeHBZaTlvWVc1a2JHVmlZWEp6TDJ4dloyZGxjaTVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN08zRkNRVUYzUWl4VFFVRlRPenRCUVVWcVF5eEpRVUZKTEUxQlFVMHNSMEZCUnp0QlFVTllMRmRCUVZNc1JVRkJSU3hEUVVGRExFOUJRVThzUlVGQlJTeE5RVUZOTEVWQlFVVXNUVUZCVFN4RlFVRkZMRTlCUVU4c1EwRkJRenRCUVVNM1F5eFBRVUZMTEVWQlFVVXNUVUZCVFRzN08wRkJSMklzWVVGQlZ5eEZRVUZGTEhGQ1FVRlRMRXRCUVVzc1JVRkJSVHRCUVVNelFpeFJRVUZKTEU5QlFVOHNTMEZCU3l4TFFVRkxMRkZCUVZFc1JVRkJSVHRCUVVNM1FpeFZRVUZKTEZGQlFWRXNSMEZCUnl4bFFVRlJMRTFCUVUwc1EwRkJReXhUUVVGVExFVkJRVVVzUzBGQlN5eERRVUZETEZkQlFWY3NSVUZCUlN4RFFVRkRMRU5CUVVNN1FVRkRPVVFzVlVGQlNTeFJRVUZSTEVsQlFVa3NRMEZCUXl4RlFVRkZPMEZCUTJwQ0xHRkJRVXNzUjBGQlJ5eFJRVUZSTEVOQlFVTTdUMEZEYkVJc1RVRkJUVHRCUVVOTUxHRkJRVXNzUjBGQlJ5eFJRVUZSTEVOQlFVTXNTMEZCU3l4RlFVRkZMRVZCUVVVc1EwRkJReXhEUVVGRE8wOUJRemRDTzB0QlEwWTdPMEZCUlVRc1YwRkJUeXhMUVVGTExFTkJRVU03UjBGRFpEczdPMEZCUjBRc1MwRkJSeXhGUVVGRkxHRkJRVk1zUzBGQlN5eEZRVUZqTzBGQlF5OUNMRk5CUVVzc1IwRkJSeXhOUVVGTkxFTkJRVU1zVjBGQlZ5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRPenRCUVVWc1F5eFJRVU5GTEU5QlFVOHNUMEZCVHl4TFFVRkxMRmRCUVZjc1NVRkRPVUlzVFVGQlRTeERRVUZETEZkQlFWY3NRMEZCUXl4TlFVRk5MRU5CUVVNc1MwRkJTeXhEUVVGRExFbEJRVWtzUzBGQlN5eEZRVU42UXp0QlFVTkJMRlZCUVVrc1RVRkJUU3hIUVVGSExFMUJRVTBzUTBGQlF5eFRRVUZUTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN08wRkJSWEpETEZWQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1RVRkJUU3hEUVVGRExFVkJRVVU3UVVGRGNFSXNZMEZCVFN4SFFVRkhMRXRCUVVzc1EwRkJRenRQUVVOb1FqczdkME5CV0cxQ0xFOUJRVTg3UVVGQlVDeGxRVUZQT3pzN1FVRlpNMElzWVVGQlR5eERRVUZETEUxQlFVMHNUMEZCUXl4RFFVRm1MRTlCUVU4c1JVRkJXU3hQUVVGUExFTkJRVU1zUTBGQlF6dExRVU0zUWp0SFFVTkdPME5CUTBZc1EwRkJRenM3Y1VKQlJXRXNUVUZCVFNJc0ltWnBiR1VpT2lKc2IyZG5aWEl1YW5NaUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ2V5QnBibVJsZUU5bUlIMGdabkp2YlNBbkxpOTFkR2xzY3ljN1hHNWNibXhsZENCc2IyZG5aWElnUFNCN1hHNGdJRzFsZEdodlpFMWhjRG9nV3lka1pXSjFaeWNzSUNkcGJtWnZKeXdnSjNkaGNtNG5MQ0FuWlhKeWIzSW5YU3hjYmlBZ2JHVjJaV3c2SUNkcGJtWnZKeXhjYmx4dUlDQXZMeUJOWVhCeklHRWdaMmwyWlc0Z2JHVjJaV3dnZG1Gc2RXVWdkRzhnZEdobElHQnRaWFJvYjJSTllYQmdJR2x1WkdWNFpYTWdZV0p2ZG1VdVhHNGdJR3h2YjJ0MWNFeGxkbVZzT2lCbWRXNWpkR2x2Ymloc1pYWmxiQ2tnZTF4dUlDQWdJR2xtSUNoMGVYQmxiMllnYkdWMlpXd2dQVDA5SUNkemRISnBibWNuS1NCN1hHNGdJQ0FnSUNCc1pYUWdiR1YyWld4TllYQWdQU0JwYm1SbGVFOW1LR3h2WjJkbGNpNXRaWFJvYjJSTllYQXNJR3hsZG1Wc0xuUnZURzkzWlhKRFlYTmxLQ2twTzF4dUlDQWdJQ0FnYVdZZ0tHeGxkbVZzVFdGd0lENDlJREFwSUh0Y2JpQWdJQ0FnSUNBZ2JHVjJaV3dnUFNCc1pYWmxiRTFoY0R0Y2JpQWdJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUd4bGRtVnNJRDBnY0dGeWMyVkpiblFvYkdWMlpXd3NJREV3S1R0Y2JpQWdJQ0FnSUgxY2JpQWdJQ0I5WEc1Y2JpQWdJQ0J5WlhSMWNtNGdiR1YyWld3N1hHNGdJSDBzWEc1Y2JpQWdMeThnUTJGdUlHSmxJRzkyWlhKeWFXUmtaVzRnYVc0Z2RHaGxJR2h2YzNRZ1pXNTJhWEp2Ym0xbGJuUmNiaUFnYkc5bk9pQm1kVzVqZEdsdmJpaHNaWFpsYkN3Z0xpNHViV1Z6YzJGblpTa2dlMXh1SUNBZ0lHeGxkbVZzSUQwZ2JHOW5aMlZ5TG14dmIydDFjRXhsZG1Wc0tHeGxkbVZzS1R0Y2JseHVJQ0FnSUdsbUlDaGNiaUFnSUNBZ0lIUjVjR1Z2WmlCamIyNXpiMnhsSUNFOVBTQW5kVzVrWldacGJtVmtKeUFtSmx4dUlDQWdJQ0FnYkc5bloyVnlMbXh2YjJ0MWNFeGxkbVZzS0d4dloyZGxjaTVzWlhabGJDa2dQRDBnYkdWMlpXeGNiaUFnSUNBcElIdGNiaUFnSUNBZ0lHeGxkQ0J0WlhSb2IyUWdQU0JzYjJkblpYSXViV1YwYUc5a1RXRndXMnhsZG1Wc1hUdGNiaUFnSUNBZ0lDOHZJR1Z6YkdsdWRDMWthWE5oWW14bExXNWxlSFF0YkdsdVpTQnVieTFqYjI1emIyeGxYRzRnSUNBZ0lDQnBaaUFvSVdOdmJuTnZiR1ZiYldWMGFHOWtYU2tnZTF4dUlDQWdJQ0FnSUNCdFpYUm9iMlFnUFNBbmJHOW5KenRjYmlBZ0lDQWdJSDFjYmlBZ0lDQWdJR052Ym5OdmJHVmJiV1YwYUc5a1hTZ3VMaTV0WlhOellXZGxLVHNnTHk4Z1pYTnNhVzUwTFdScGMyRmliR1V0YkdsdVpTQnVieTFqYjI1emIyeGxYRzRnSUNBZ2ZWeHVJQ0I5WEc1OU8xeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQnNiMmRuWlhJN1hHNGlYWDA9XG4iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGZ1bmN0aW9uIChIYW5kbGViYXJzKSB7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gIHZhciByb290ID0gdHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcgPyBnbG9iYWwgOiB3aW5kb3csXG4gICAgICAkSGFuZGxlYmFycyA9IHJvb3QuSGFuZGxlYmFycztcbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgSGFuZGxlYmFycy5ub0NvbmZsaWN0ID0gZnVuY3Rpb24gKCkge1xuICAgIGlmIChyb290LkhhbmRsZWJhcnMgPT09IEhhbmRsZWJhcnMpIHtcbiAgICAgIHJvb3QuSGFuZGxlYmFycyA9ICRIYW5kbGViYXJzO1xuICAgIH1cbiAgICByZXR1cm4gSGFuZGxlYmFycztcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMeTR1TDJ4cFlpOW9ZVzVrYkdWaVlYSnpMMjV2TFdOdmJtWnNhV04wTG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdjVUpCUVdVc1ZVRkJVeXhWUVVGVkxFVkJRVVU3TzBGQlJXeERMRTFCUVVrc1NVRkJTU3hIUVVGSExFOUJRVThzVFVGQlRTeExRVUZMTEZkQlFWY3NSMEZCUnl4TlFVRk5MRWRCUVVjc1RVRkJUVHROUVVONFJDeFhRVUZYTEVkQlFVY3NTVUZCU1N4RFFVRkRMRlZCUVZVc1EwRkJRenM3UVVGRmFFTXNXVUZCVlN4RFFVRkRMRlZCUVZVc1IwRkJSeXhaUVVGWE8wRkJRMnBETEZGQlFVa3NTVUZCU1N4RFFVRkRMRlZCUVZVc1MwRkJTeXhWUVVGVkxFVkJRVVU3UVVGRGJFTXNWVUZCU1N4RFFVRkRMRlZCUVZVc1IwRkJSeXhYUVVGWExFTkJRVU03UzBGREwwSTdRVUZEUkN4WFFVRlBMRlZCUVZVc1EwRkJRenRIUVVOdVFpeERRVUZETzBOQlEwZ2lMQ0ptYVd4bElqb2libTh0WTI5dVpteHBZM1F1YW5NaUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SmxlSEJ2Y25RZ1pHVm1ZWFZzZENCbWRXNWpkR2x2YmloSVlXNWtiR1ZpWVhKektTQjdYRzRnSUM4cUlHbHpkR0Z1WW5Wc0lHbG5ibTl5WlNCdVpYaDBJQ292WEc0Z0lHeGxkQ0J5YjI5MElEMGdkSGx3Wlc5bUlHZHNiMkpoYkNBaFBUMGdKM1Z1WkdWbWFXNWxaQ2NnUHlCbmJHOWlZV3dnT2lCM2FXNWtiM2NzWEc0Z0lDQWdKRWhoYm1Sc1pXSmhjbk1nUFNCeWIyOTBMa2hoYm1Sc1pXSmhjbk03WEc0Z0lDOHFJR2x6ZEdGdVluVnNJR2xuYm05eVpTQnVaWGgwSUNvdlhHNGdJRWhoYm1Sc1pXSmhjbk11Ym05RGIyNW1iR2xqZENBOUlHWjFibU4wYVc5dUtDa2dlMXh1SUNBZ0lHbG1JQ2h5YjI5MExraGhibVJzWldKaGNuTWdQVDA5SUVoaGJtUnNaV0poY25NcElIdGNiaUFnSUNBZ0lISnZiM1F1U0dGdVpHeGxZbUZ5Y3lBOUlDUklZVzVrYkdWaVlYSnpPMXh1SUNBZ0lIMWNiaUFnSUNCeVpYUjFjbTRnU0dGdVpHeGxZbUZ5Y3p0Y2JpQWdmVHRjYm4xY2JpSmRmUT09XG4iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmNoZWNrUmV2aXNpb24gPSBjaGVja1JldmlzaW9uO1xuZXhwb3J0cy50ZW1wbGF0ZSA9IHRlbXBsYXRlO1xuZXhwb3J0cy53cmFwUHJvZ3JhbSA9IHdyYXBQcm9ncmFtO1xuZXhwb3J0cy5yZXNvbHZlUGFydGlhbCA9IHJlc29sdmVQYXJ0aWFsO1xuZXhwb3J0cy5pbnZva2VQYXJ0aWFsID0gaW52b2tlUGFydGlhbDtcbmV4cG9ydHMubm9vcCA9IG5vb3A7XG4vLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbi8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSBuZXdPYmpbJ2RlZmF1bHQnXSA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG5cbnZhciBVdGlscyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF91dGlscyk7XG5cbnZhciBfZXhjZXB0aW9uID0gcmVxdWlyZSgnLi9leGNlcHRpb24nKTtcblxudmFyIF9leGNlcHRpb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXhjZXB0aW9uKTtcblxudmFyIF9iYXNlID0gcmVxdWlyZSgnLi9iYXNlJyk7XG5cbnZhciBfaGVscGVycyA9IHJlcXVpcmUoJy4vaGVscGVycycpO1xuXG52YXIgX2ludGVybmFsV3JhcEhlbHBlciA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvd3JhcEhlbHBlcicpO1xuXG52YXIgX2ludGVybmFsUHJvdG9BY2Nlc3MgPSByZXF1aXJlKCcuL2ludGVybmFsL3Byb3RvLWFjY2VzcycpO1xuXG5mdW5jdGlvbiBjaGVja1JldmlzaW9uKGNvbXBpbGVySW5mbykge1xuICB2YXIgY29tcGlsZXJSZXZpc2lvbiA9IGNvbXBpbGVySW5mbyAmJiBjb21waWxlckluZm9bMF0gfHwgMSxcbiAgICAgIGN1cnJlbnRSZXZpc2lvbiA9IF9iYXNlLkNPTVBJTEVSX1JFVklTSU9OO1xuXG4gIGlmIChjb21waWxlclJldmlzaW9uID49IF9iYXNlLkxBU1RfQ09NUEFUSUJMRV9DT01QSUxFUl9SRVZJU0lPTiAmJiBjb21waWxlclJldmlzaW9uIDw9IF9iYXNlLkNPTVBJTEVSX1JFVklTSU9OKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGNvbXBpbGVyUmV2aXNpb24gPCBfYmFzZS5MQVNUX0NPTVBBVElCTEVfQ09NUElMRVJfUkVWSVNJT04pIHtcbiAgICB2YXIgcnVudGltZVZlcnNpb25zID0gX2Jhc2UuUkVWSVNJT05fQ0hBTkdFU1tjdXJyZW50UmV2aXNpb25dLFxuICAgICAgICBjb21waWxlclZlcnNpb25zID0gX2Jhc2UuUkVWSVNJT05fQ0hBTkdFU1tjb21waWxlclJldmlzaW9uXTtcbiAgICB0aHJvdyBuZXcgX2V4Y2VwdGlvbjJbJ2RlZmF1bHQnXSgnVGVtcGxhdGUgd2FzIHByZWNvbXBpbGVkIHdpdGggYW4gb2xkZXIgdmVyc2lvbiBvZiBIYW5kbGViYXJzIHRoYW4gdGhlIGN1cnJlbnQgcnVudGltZS4gJyArICdQbGVhc2UgdXBkYXRlIHlvdXIgcHJlY29tcGlsZXIgdG8gYSBuZXdlciB2ZXJzaW9uICgnICsgcnVudGltZVZlcnNpb25zICsgJykgb3IgZG93bmdyYWRlIHlvdXIgcnVudGltZSB0byBhbiBvbGRlciB2ZXJzaW9uICgnICsgY29tcGlsZXJWZXJzaW9ucyArICcpLicpO1xuICB9IGVsc2Uge1xuICAgIC8vIFVzZSB0aGUgZW1iZWRkZWQgdmVyc2lvbiBpbmZvIHNpbmNlIHRoZSBydW50aW1lIGRvZXNuJ3Qga25vdyBhYm91dCB0aGlzIHJldmlzaW9uIHlldFxuICAgIHRocm93IG5ldyBfZXhjZXB0aW9uMlsnZGVmYXVsdCddKCdUZW1wbGF0ZSB3YXMgcHJlY29tcGlsZWQgd2l0aCBhIG5ld2VyIHZlcnNpb24gb2YgSGFuZGxlYmFycyB0aGFuIHRoZSBjdXJyZW50IHJ1bnRpbWUuICcgKyAnUGxlYXNlIHVwZGF0ZSB5b3VyIHJ1bnRpbWUgdG8gYSBuZXdlciB2ZXJzaW9uICgnICsgY29tcGlsZXJJbmZvWzFdICsgJykuJyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdGVtcGxhdGUodGVtcGxhdGVTcGVjLCBlbnYpIHtcbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgaWYgKCFlbnYpIHtcbiAgICB0aHJvdyBuZXcgX2V4Y2VwdGlvbjJbJ2RlZmF1bHQnXSgnTm8gZW52aXJvbm1lbnQgcGFzc2VkIHRvIHRlbXBsYXRlJyk7XG4gIH1cbiAgaWYgKCF0ZW1wbGF0ZVNwZWMgfHwgIXRlbXBsYXRlU3BlYy5tYWluKSB7XG4gICAgdGhyb3cgbmV3IF9leGNlcHRpb24yWydkZWZhdWx0J10oJ1Vua25vd24gdGVtcGxhdGUgb2JqZWN0OiAnICsgdHlwZW9mIHRlbXBsYXRlU3BlYyk7XG4gIH1cblxuICB0ZW1wbGF0ZVNwZWMubWFpbi5kZWNvcmF0b3IgPSB0ZW1wbGF0ZVNwZWMubWFpbl9kO1xuXG4gIC8vIE5vdGU6IFVzaW5nIGVudi5WTSByZWZlcmVuY2VzIHJhdGhlciB0aGFuIGxvY2FsIHZhciByZWZlcmVuY2VzIHRocm91Z2hvdXQgdGhpcyBzZWN0aW9uIHRvIGFsbG93XG4gIC8vIGZvciBleHRlcm5hbCB1c2VycyB0byBvdmVycmlkZSB0aGVzZSBhcyBwc2V1ZG8tc3VwcG9ydGVkIEFQSXMuXG4gIGVudi5WTS5jaGVja1JldmlzaW9uKHRlbXBsYXRlU3BlYy5jb21waWxlcik7XG5cbiAgLy8gYmFja3dhcmRzIGNvbXBhdGliaWxpdHkgZm9yIHByZWNvbXBpbGVkIHRlbXBsYXRlcyB3aXRoIGNvbXBpbGVyLXZlcnNpb24gNyAoPDQuMy4wKVxuICB2YXIgdGVtcGxhdGVXYXNQcmVjb21waWxlZFdpdGhDb21waWxlclY3ID0gdGVtcGxhdGVTcGVjLmNvbXBpbGVyICYmIHRlbXBsYXRlU3BlYy5jb21waWxlclswXSA9PT0gNztcblxuICBmdW5jdGlvbiBpbnZva2VQYXJ0aWFsV3JhcHBlcihwYXJ0aWFsLCBjb250ZXh0LCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgICAgY29udGV4dCA9IFV0aWxzLmV4dGVuZCh7fSwgY29udGV4dCwgb3B0aW9ucy5oYXNoKTtcbiAgICAgIGlmIChvcHRpb25zLmlkcykge1xuICAgICAgICBvcHRpb25zLmlkc1swXSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHBhcnRpYWwgPSBlbnYuVk0ucmVzb2x2ZVBhcnRpYWwuY2FsbCh0aGlzLCBwYXJ0aWFsLCBjb250ZXh0LCBvcHRpb25zKTtcblxuICAgIHZhciBleHRlbmRlZE9wdGlvbnMgPSBVdGlscy5leHRlbmQoe30sIG9wdGlvbnMsIHtcbiAgICAgIGhvb2tzOiB0aGlzLmhvb2tzLFxuICAgICAgcHJvdG9BY2Nlc3NDb250cm9sOiB0aGlzLnByb3RvQWNjZXNzQ29udHJvbFxuICAgIH0pO1xuXG4gICAgdmFyIHJlc3VsdCA9IGVudi5WTS5pbnZva2VQYXJ0aWFsLmNhbGwodGhpcywgcGFydGlhbCwgY29udGV4dCwgZXh0ZW5kZWRPcHRpb25zKTtcblxuICAgIGlmIChyZXN1bHQgPT0gbnVsbCAmJiBlbnYuY29tcGlsZSkge1xuICAgICAgb3B0aW9ucy5wYXJ0aWFsc1tvcHRpb25zLm5hbWVdID0gZW52LmNvbXBpbGUocGFydGlhbCwgdGVtcGxhdGVTcGVjLmNvbXBpbGVyT3B0aW9ucywgZW52KTtcbiAgICAgIHJlc3VsdCA9IG9wdGlvbnMucGFydGlhbHNbb3B0aW9ucy5uYW1lXShjb250ZXh0LCBleHRlbmRlZE9wdGlvbnMpO1xuICAgIH1cbiAgICBpZiAocmVzdWx0ICE9IG51bGwpIHtcbiAgICAgIGlmIChvcHRpb25zLmluZGVudCkge1xuICAgICAgICB2YXIgbGluZXMgPSByZXN1bHQuc3BsaXQoJ1xcbicpO1xuICAgICAgICBmb3IgKHZhciBpID0gMCwgbCA9IGxpbmVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgIGlmICghbGluZXNbaV0gJiYgaSArIDEgPT09IGwpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGxpbmVzW2ldID0gb3B0aW9ucy5pbmRlbnQgKyBsaW5lc1tpXTtcbiAgICAgICAgfVxuICAgICAgICByZXN1bHQgPSBsaW5lcy5qb2luKCdcXG4nKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBfZXhjZXB0aW9uMlsnZGVmYXVsdCddKCdUaGUgcGFydGlhbCAnICsgb3B0aW9ucy5uYW1lICsgJyBjb3VsZCBub3QgYmUgY29tcGlsZWQgd2hlbiBydW5uaW5nIGluIHJ1bnRpbWUtb25seSBtb2RlJyk7XG4gICAgfVxuICB9XG5cbiAgLy8gSnVzdCBhZGQgd2F0ZXJcbiAgdmFyIGNvbnRhaW5lciA9IHtcbiAgICBzdHJpY3Q6IGZ1bmN0aW9uIHN0cmljdChvYmosIG5hbWUsIGxvYykge1xuICAgICAgaWYgKCFvYmogfHwgIShuYW1lIGluIG9iaikpIHtcbiAgICAgICAgdGhyb3cgbmV3IF9leGNlcHRpb24yWydkZWZhdWx0J10oJ1wiJyArIG5hbWUgKyAnXCIgbm90IGRlZmluZWQgaW4gJyArIG9iaiwge1xuICAgICAgICAgIGxvYzogbG9jXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRhaW5lci5sb29rdXBQcm9wZXJ0eShvYmosIG5hbWUpO1xuICAgIH0sXG4gICAgbG9va3VwUHJvcGVydHk6IGZ1bmN0aW9uIGxvb2t1cFByb3BlcnR5KHBhcmVudCwgcHJvcGVydHlOYW1lKSB7XG4gICAgICB2YXIgcmVzdWx0ID0gcGFyZW50W3Byb3BlcnR5TmFtZV07XG4gICAgICBpZiAocmVzdWx0ID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH1cbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocGFyZW50LCBwcm9wZXJ0eU5hbWUpKSB7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9XG5cbiAgICAgIGlmIChfaW50ZXJuYWxQcm90b0FjY2Vzcy5yZXN1bHRJc0FsbG93ZWQocmVzdWx0LCBjb250YWluZXIucHJvdG9BY2Nlc3NDb250cm9sLCBwcm9wZXJ0eU5hbWUpKSB7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH0sXG4gICAgbG9va3VwOiBmdW5jdGlvbiBsb29rdXAoZGVwdGhzLCBuYW1lKSB7XG4gICAgICB2YXIgbGVuID0gZGVwdGhzLmxlbmd0aDtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IGRlcHRoc1tpXSAmJiBjb250YWluZXIubG9va3VwUHJvcGVydHkoZGVwdGhzW2ldLCBuYW1lKTtcbiAgICAgICAgaWYgKHJlc3VsdCAhPSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIGRlcHRoc1tpXVtuYW1lXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgbGFtYmRhOiBmdW5jdGlvbiBsYW1iZGEoY3VycmVudCwgY29udGV4dCkge1xuICAgICAgcmV0dXJuIHR5cGVvZiBjdXJyZW50ID09PSAnZnVuY3Rpb24nID8gY3VycmVudC5jYWxsKGNvbnRleHQpIDogY3VycmVudDtcbiAgICB9LFxuXG4gICAgZXNjYXBlRXhwcmVzc2lvbjogVXRpbHMuZXNjYXBlRXhwcmVzc2lvbixcbiAgICBpbnZva2VQYXJ0aWFsOiBpbnZva2VQYXJ0aWFsV3JhcHBlcixcblxuICAgIGZuOiBmdW5jdGlvbiBmbihpKSB7XG4gICAgICB2YXIgcmV0ID0gdGVtcGxhdGVTcGVjW2ldO1xuICAgICAgcmV0LmRlY29yYXRvciA9IHRlbXBsYXRlU3BlY1tpICsgJ19kJ107XG4gICAgICByZXR1cm4gcmV0O1xuICAgIH0sXG5cbiAgICBwcm9ncmFtczogW10sXG4gICAgcHJvZ3JhbTogZnVuY3Rpb24gcHJvZ3JhbShpLCBkYXRhLCBkZWNsYXJlZEJsb2NrUGFyYW1zLCBibG9ja1BhcmFtcywgZGVwdGhzKSB7XG4gICAgICB2YXIgcHJvZ3JhbVdyYXBwZXIgPSB0aGlzLnByb2dyYW1zW2ldLFxuICAgICAgICAgIGZuID0gdGhpcy5mbihpKTtcbiAgICAgIGlmIChkYXRhIHx8IGRlcHRocyB8fCBibG9ja1BhcmFtcyB8fCBkZWNsYXJlZEJsb2NrUGFyYW1zKSB7XG4gICAgICAgIHByb2dyYW1XcmFwcGVyID0gd3JhcFByb2dyYW0odGhpcywgaSwgZm4sIGRhdGEsIGRlY2xhcmVkQmxvY2tQYXJhbXMsIGJsb2NrUGFyYW1zLCBkZXB0aHMpO1xuICAgICAgfSBlbHNlIGlmICghcHJvZ3JhbVdyYXBwZXIpIHtcbiAgICAgICAgcHJvZ3JhbVdyYXBwZXIgPSB0aGlzLnByb2dyYW1zW2ldID0gd3JhcFByb2dyYW0odGhpcywgaSwgZm4pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHByb2dyYW1XcmFwcGVyO1xuICAgIH0sXG5cbiAgICBkYXRhOiBmdW5jdGlvbiBkYXRhKHZhbHVlLCBkZXB0aCkge1xuICAgICAgd2hpbGUgKHZhbHVlICYmIGRlcHRoLS0pIHtcbiAgICAgICAgdmFsdWUgPSB2YWx1ZS5fcGFyZW50O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH0sXG4gICAgbWVyZ2VJZk5lZWRlZDogZnVuY3Rpb24gbWVyZ2VJZk5lZWRlZChwYXJhbSwgY29tbW9uKSB7XG4gICAgICB2YXIgb2JqID0gcGFyYW0gfHwgY29tbW9uO1xuXG4gICAgICBpZiAocGFyYW0gJiYgY29tbW9uICYmIHBhcmFtICE9PSBjb21tb24pIHtcbiAgICAgICAgb2JqID0gVXRpbHMuZXh0ZW5kKHt9LCBjb21tb24sIHBhcmFtKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG9iajtcbiAgICB9LFxuICAgIC8vIEFuIGVtcHR5IG9iamVjdCB0byB1c2UgYXMgcmVwbGFjZW1lbnQgZm9yIG51bGwtY29udGV4dHNcbiAgICBudWxsQ29udGV4dDogT2JqZWN0LnNlYWwoe30pLFxuXG4gICAgbm9vcDogZW52LlZNLm5vb3AsXG4gICAgY29tcGlsZXJJbmZvOiB0ZW1wbGF0ZVNwZWMuY29tcGlsZXJcbiAgfTtcblxuICBmdW5jdGlvbiByZXQoY29udGV4dCkge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8ge30gOiBhcmd1bWVudHNbMV07XG5cbiAgICB2YXIgZGF0YSA9IG9wdGlvbnMuZGF0YTtcblxuICAgIHJldC5fc2V0dXAob3B0aW9ucyk7XG4gICAgaWYgKCFvcHRpb25zLnBhcnRpYWwgJiYgdGVtcGxhdGVTcGVjLnVzZURhdGEpIHtcbiAgICAgIGRhdGEgPSBpbml0RGF0YShjb250ZXh0LCBkYXRhKTtcbiAgICB9XG4gICAgdmFyIGRlcHRocyA9IHVuZGVmaW5lZCxcbiAgICAgICAgYmxvY2tQYXJhbXMgPSB0ZW1wbGF0ZVNwZWMudXNlQmxvY2tQYXJhbXMgPyBbXSA6IHVuZGVmaW5lZDtcbiAgICBpZiAodGVtcGxhdGVTcGVjLnVzZURlcHRocykge1xuICAgICAgaWYgKG9wdGlvbnMuZGVwdGhzKSB7XG4gICAgICAgIGRlcHRocyA9IGNvbnRleHQgIT0gb3B0aW9ucy5kZXB0aHNbMF0gPyBbY29udGV4dF0uY29uY2F0KG9wdGlvbnMuZGVwdGhzKSA6IG9wdGlvbnMuZGVwdGhzO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGVwdGhzID0gW2NvbnRleHRdO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1haW4oY29udGV4dCAvKiwgb3B0aW9ucyovKSB7XG4gICAgICByZXR1cm4gJycgKyB0ZW1wbGF0ZVNwZWMubWFpbihjb250YWluZXIsIGNvbnRleHQsIGNvbnRhaW5lci5oZWxwZXJzLCBjb250YWluZXIucGFydGlhbHMsIGRhdGEsIGJsb2NrUGFyYW1zLCBkZXB0aHMpO1xuICAgIH1cblxuICAgIG1haW4gPSBleGVjdXRlRGVjb3JhdG9ycyh0ZW1wbGF0ZVNwZWMubWFpbiwgbWFpbiwgY29udGFpbmVyLCBvcHRpb25zLmRlcHRocyB8fCBbXSwgZGF0YSwgYmxvY2tQYXJhbXMpO1xuICAgIHJldHVybiBtYWluKGNvbnRleHQsIG9wdGlvbnMpO1xuICB9XG5cbiAgcmV0LmlzVG9wID0gdHJ1ZTtcblxuICByZXQuX3NldHVwID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICBpZiAoIW9wdGlvbnMucGFydGlhbCkge1xuICAgICAgdmFyIG1lcmdlZEhlbHBlcnMgPSBVdGlscy5leHRlbmQoe30sIGVudi5oZWxwZXJzLCBvcHRpb25zLmhlbHBlcnMpO1xuICAgICAgd3JhcEhlbHBlcnNUb1Bhc3NMb29rdXBQcm9wZXJ0eShtZXJnZWRIZWxwZXJzLCBjb250YWluZXIpO1xuICAgICAgY29udGFpbmVyLmhlbHBlcnMgPSBtZXJnZWRIZWxwZXJzO1xuXG4gICAgICBpZiAodGVtcGxhdGVTcGVjLnVzZVBhcnRpYWwpIHtcbiAgICAgICAgLy8gVXNlIG1lcmdlSWZOZWVkZWQgaGVyZSB0byBwcmV2ZW50IGNvbXBpbGluZyBnbG9iYWwgcGFydGlhbHMgbXVsdGlwbGUgdGltZXNcbiAgICAgICAgY29udGFpbmVyLnBhcnRpYWxzID0gY29udGFpbmVyLm1lcmdlSWZOZWVkZWQob3B0aW9ucy5wYXJ0aWFscywgZW52LnBhcnRpYWxzKTtcbiAgICAgIH1cbiAgICAgIGlmICh0ZW1wbGF0ZVNwZWMudXNlUGFydGlhbCB8fCB0ZW1wbGF0ZVNwZWMudXNlRGVjb3JhdG9ycykge1xuICAgICAgICBjb250YWluZXIuZGVjb3JhdG9ycyA9IFV0aWxzLmV4dGVuZCh7fSwgZW52LmRlY29yYXRvcnMsIG9wdGlvbnMuZGVjb3JhdG9ycyk7XG4gICAgICB9XG5cbiAgICAgIGNvbnRhaW5lci5ob29rcyA9IHt9O1xuICAgICAgY29udGFpbmVyLnByb3RvQWNjZXNzQ29udHJvbCA9IF9pbnRlcm5hbFByb3RvQWNjZXNzLmNyZWF0ZVByb3RvQWNjZXNzQ29udHJvbChvcHRpb25zKTtcblxuICAgICAgdmFyIGtlZXBIZWxwZXJJbkhlbHBlcnMgPSBvcHRpb25zLmFsbG93Q2FsbHNUb0hlbHBlck1pc3NpbmcgfHwgdGVtcGxhdGVXYXNQcmVjb21waWxlZFdpdGhDb21waWxlclY3O1xuICAgICAgX2hlbHBlcnMubW92ZUhlbHBlclRvSG9va3MoY29udGFpbmVyLCAnaGVscGVyTWlzc2luZycsIGtlZXBIZWxwZXJJbkhlbHBlcnMpO1xuICAgICAgX2hlbHBlcnMubW92ZUhlbHBlclRvSG9va3MoY29udGFpbmVyLCAnYmxvY2tIZWxwZXJNaXNzaW5nJywga2VlcEhlbHBlckluSGVscGVycyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRhaW5lci5wcm90b0FjY2Vzc0NvbnRyb2wgPSBvcHRpb25zLnByb3RvQWNjZXNzQ29udHJvbDsgLy8gaW50ZXJuYWwgb3B0aW9uXG4gICAgICBjb250YWluZXIuaGVscGVycyA9IG9wdGlvbnMuaGVscGVycztcbiAgICAgIGNvbnRhaW5lci5wYXJ0aWFscyA9IG9wdGlvbnMucGFydGlhbHM7XG4gICAgICBjb250YWluZXIuZGVjb3JhdG9ycyA9IG9wdGlvbnMuZGVjb3JhdG9ycztcbiAgICAgIGNvbnRhaW5lci5ob29rcyA9IG9wdGlvbnMuaG9va3M7XG4gICAgfVxuICB9O1xuXG4gIHJldC5fY2hpbGQgPSBmdW5jdGlvbiAoaSwgZGF0YSwgYmxvY2tQYXJhbXMsIGRlcHRocykge1xuICAgIGlmICh0ZW1wbGF0ZVNwZWMudXNlQmxvY2tQYXJhbXMgJiYgIWJsb2NrUGFyYW1zKSB7XG4gICAgICB0aHJvdyBuZXcgX2V4Y2VwdGlvbjJbJ2RlZmF1bHQnXSgnbXVzdCBwYXNzIGJsb2NrIHBhcmFtcycpO1xuICAgIH1cbiAgICBpZiAodGVtcGxhdGVTcGVjLnVzZURlcHRocyAmJiAhZGVwdGhzKSB7XG4gICAgICB0aHJvdyBuZXcgX2V4Y2VwdGlvbjJbJ2RlZmF1bHQnXSgnbXVzdCBwYXNzIHBhcmVudCBkZXB0aHMnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gd3JhcFByb2dyYW0oY29udGFpbmVyLCBpLCB0ZW1wbGF0ZVNwZWNbaV0sIGRhdGEsIDAsIGJsb2NrUGFyYW1zLCBkZXB0aHMpO1xuICB9O1xuICByZXR1cm4gcmV0O1xufVxuXG5mdW5jdGlvbiB3cmFwUHJvZ3JhbShjb250YWluZXIsIGksIGZuLCBkYXRhLCBkZWNsYXJlZEJsb2NrUGFyYW1zLCBibG9ja1BhcmFtcywgZGVwdGhzKSB7XG4gIGZ1bmN0aW9uIHByb2coY29udGV4dCkge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8ge30gOiBhcmd1bWVudHNbMV07XG5cbiAgICB2YXIgY3VycmVudERlcHRocyA9IGRlcHRocztcbiAgICBpZiAoZGVwdGhzICYmIGNvbnRleHQgIT0gZGVwdGhzWzBdICYmICEoY29udGV4dCA9PT0gY29udGFpbmVyLm51bGxDb250ZXh0ICYmIGRlcHRoc1swXSA9PT0gbnVsbCkpIHtcbiAgICAgIGN1cnJlbnREZXB0aHMgPSBbY29udGV4dF0uY29uY2F0KGRlcHRocyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZuKGNvbnRhaW5lciwgY29udGV4dCwgY29udGFpbmVyLmhlbHBlcnMsIGNvbnRhaW5lci5wYXJ0aWFscywgb3B0aW9ucy5kYXRhIHx8IGRhdGEsIGJsb2NrUGFyYW1zICYmIFtvcHRpb25zLmJsb2NrUGFyYW1zXS5jb25jYXQoYmxvY2tQYXJhbXMpLCBjdXJyZW50RGVwdGhzKTtcbiAgfVxuXG4gIHByb2cgPSBleGVjdXRlRGVjb3JhdG9ycyhmbiwgcHJvZywgY29udGFpbmVyLCBkZXB0aHMsIGRhdGEsIGJsb2NrUGFyYW1zKTtcblxuICBwcm9nLnByb2dyYW0gPSBpO1xuICBwcm9nLmRlcHRoID0gZGVwdGhzID8gZGVwdGhzLmxlbmd0aCA6IDA7XG4gIHByb2cuYmxvY2tQYXJhbXMgPSBkZWNsYXJlZEJsb2NrUGFyYW1zIHx8IDA7XG4gIHJldHVybiBwcm9nO1xufVxuXG4vKipcbiAqIFRoaXMgaXMgY3VycmVudGx5IHBhcnQgb2YgdGhlIG9mZmljaWFsIEFQSSwgdGhlcmVmb3JlIGltcGxlbWVudGF0aW9uIGRldGFpbHMgc2hvdWxkIG5vdCBiZSBjaGFuZ2VkLlxuICovXG5cbmZ1bmN0aW9uIHJlc29sdmVQYXJ0aWFsKHBhcnRpYWwsIGNvbnRleHQsIG9wdGlvbnMpIHtcbiAgaWYgKCFwYXJ0aWFsKSB7XG4gICAgaWYgKG9wdGlvbnMubmFtZSA9PT0gJ0BwYXJ0aWFsLWJsb2NrJykge1xuICAgICAgcGFydGlhbCA9IG9wdGlvbnMuZGF0YVsncGFydGlhbC1ibG9jayddO1xuICAgIH0gZWxzZSB7XG4gICAgICBwYXJ0aWFsID0gb3B0aW9ucy5wYXJ0aWFsc1tvcHRpb25zLm5hbWVdO1xuICAgIH1cbiAgfSBlbHNlIGlmICghcGFydGlhbC5jYWxsICYmICFvcHRpb25zLm5hbWUpIHtcbiAgICAvLyBUaGlzIGlzIGEgZHluYW1pYyBwYXJ0aWFsIHRoYXQgcmV0dXJuZWQgYSBzdHJpbmdcbiAgICBvcHRpb25zLm5hbWUgPSBwYXJ0aWFsO1xuICAgIHBhcnRpYWwgPSBvcHRpb25zLnBhcnRpYWxzW3BhcnRpYWxdO1xuICB9XG4gIHJldHVybiBwYXJ0aWFsO1xufVxuXG5mdW5jdGlvbiBpbnZva2VQYXJ0aWFsKHBhcnRpYWwsIGNvbnRleHQsIG9wdGlvbnMpIHtcbiAgLy8gVXNlIHRoZSBjdXJyZW50IGNsb3N1cmUgY29udGV4dCB0byBzYXZlIHRoZSBwYXJ0aWFsLWJsb2NrIGlmIHRoaXMgcGFydGlhbFxuICB2YXIgY3VycmVudFBhcnRpYWxCbG9jayA9IG9wdGlvbnMuZGF0YSAmJiBvcHRpb25zLmRhdGFbJ3BhcnRpYWwtYmxvY2snXTtcbiAgb3B0aW9ucy5wYXJ0aWFsID0gdHJ1ZTtcbiAgaWYgKG9wdGlvbnMuaWRzKSB7XG4gICAgb3B0aW9ucy5kYXRhLmNvbnRleHRQYXRoID0gb3B0aW9ucy5pZHNbMF0gfHwgb3B0aW9ucy5kYXRhLmNvbnRleHRQYXRoO1xuICB9XG5cbiAgdmFyIHBhcnRpYWxCbG9jayA9IHVuZGVmaW5lZDtcbiAgaWYgKG9wdGlvbnMuZm4gJiYgb3B0aW9ucy5mbiAhPT0gbm9vcCkge1xuICAgIChmdW5jdGlvbiAoKSB7XG4gICAgICBvcHRpb25zLmRhdGEgPSBfYmFzZS5jcmVhdGVGcmFtZShvcHRpb25zLmRhdGEpO1xuICAgICAgLy8gV3JhcHBlciBmdW5jdGlvbiB0byBnZXQgYWNjZXNzIHRvIGN1cnJlbnRQYXJ0aWFsQmxvY2sgZnJvbSB0aGUgY2xvc3VyZVxuICAgICAgdmFyIGZuID0gb3B0aW9ucy5mbjtcbiAgICAgIHBhcnRpYWxCbG9jayA9IG9wdGlvbnMuZGF0YVsncGFydGlhbC1ibG9jayddID0gZnVuY3Rpb24gcGFydGlhbEJsb2NrV3JhcHBlcihjb250ZXh0KSB7XG4gICAgICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8ge30gOiBhcmd1bWVudHNbMV07XG5cbiAgICAgICAgLy8gUmVzdG9yZSB0aGUgcGFydGlhbC1ibG9jayBmcm9tIHRoZSBjbG9zdXJlIGZvciB0aGUgZXhlY3V0aW9uIG9mIHRoZSBibG9ja1xuICAgICAgICAvLyBpLmUuIHRoZSBwYXJ0IGluc2lkZSB0aGUgYmxvY2sgb2YgdGhlIHBhcnRpYWwgY2FsbC5cbiAgICAgICAgb3B0aW9ucy5kYXRhID0gX2Jhc2UuY3JlYXRlRnJhbWUob3B0aW9ucy5kYXRhKTtcbiAgICAgICAgb3B0aW9ucy5kYXRhWydwYXJ0aWFsLWJsb2NrJ10gPSBjdXJyZW50UGFydGlhbEJsb2NrO1xuICAgICAgICByZXR1cm4gZm4oY29udGV4dCwgb3B0aW9ucyk7XG4gICAgICB9O1xuICAgICAgaWYgKGZuLnBhcnRpYWxzKSB7XG4gICAgICAgIG9wdGlvbnMucGFydGlhbHMgPSBVdGlscy5leHRlbmQoe30sIG9wdGlvbnMucGFydGlhbHMsIGZuLnBhcnRpYWxzKTtcbiAgICAgIH1cbiAgICB9KSgpO1xuICB9XG5cbiAgaWYgKHBhcnRpYWwgPT09IHVuZGVmaW5lZCAmJiBwYXJ0aWFsQmxvY2spIHtcbiAgICBwYXJ0aWFsID0gcGFydGlhbEJsb2NrO1xuICB9XG5cbiAgaWYgKHBhcnRpYWwgPT09IHVuZGVmaW5lZCkge1xuICAgIHRocm93IG5ldyBfZXhjZXB0aW9uMlsnZGVmYXVsdCddKCdUaGUgcGFydGlhbCAnICsgb3B0aW9ucy5uYW1lICsgJyBjb3VsZCBub3QgYmUgZm91bmQnKTtcbiAgfSBlbHNlIGlmIChwYXJ0aWFsIGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcbiAgICByZXR1cm4gcGFydGlhbChjb250ZXh0LCBvcHRpb25zKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBub29wKCkge1xuICByZXR1cm4gJyc7XG59XG5cbmZ1bmN0aW9uIGluaXREYXRhKGNvbnRleHQsIGRhdGEpIHtcbiAgaWYgKCFkYXRhIHx8ICEoJ3Jvb3QnIGluIGRhdGEpKSB7XG4gICAgZGF0YSA9IGRhdGEgPyBfYmFzZS5jcmVhdGVGcmFtZShkYXRhKSA6IHt9O1xuICAgIGRhdGEucm9vdCA9IGNvbnRleHQ7XG4gIH1cbiAgcmV0dXJuIGRhdGE7XG59XG5cbmZ1bmN0aW9uIGV4ZWN1dGVEZWNvcmF0b3JzKGZuLCBwcm9nLCBjb250YWluZXIsIGRlcHRocywgZGF0YSwgYmxvY2tQYXJhbXMpIHtcbiAgaWYgKGZuLmRlY29yYXRvcikge1xuICAgIHZhciBwcm9wcyA9IHt9O1xuICAgIHByb2cgPSBmbi5kZWNvcmF0b3IocHJvZywgcHJvcHMsIGNvbnRhaW5lciwgZGVwdGhzICYmIGRlcHRoc1swXSwgZGF0YSwgYmxvY2tQYXJhbXMsIGRlcHRocyk7XG4gICAgVXRpbHMuZXh0ZW5kKHByb2csIHByb3BzKTtcbiAgfVxuICByZXR1cm4gcHJvZztcbn1cblxuZnVuY3Rpb24gd3JhcEhlbHBlcnNUb1Bhc3NMb29rdXBQcm9wZXJ0eShtZXJnZWRIZWxwZXJzLCBjb250YWluZXIpIHtcbiAgT2JqZWN0LmtleXMobWVyZ2VkSGVscGVycykuZm9yRWFjaChmdW5jdGlvbiAoaGVscGVyTmFtZSkge1xuICAgIHZhciBoZWxwZXIgPSBtZXJnZWRIZWxwZXJzW2hlbHBlck5hbWVdO1xuICAgIG1lcmdlZEhlbHBlcnNbaGVscGVyTmFtZV0gPSBwYXNzTG9va3VwUHJvcGVydHlPcHRpb24oaGVscGVyLCBjb250YWluZXIpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcGFzc0xvb2t1cFByb3BlcnR5T3B0aW9uKGhlbHBlciwgY29udGFpbmVyKSB7XG4gIHZhciBsb29rdXBQcm9wZXJ0eSA9IGNvbnRhaW5lci5sb29rdXBQcm9wZXJ0eTtcbiAgcmV0dXJuIF9pbnRlcm5hbFdyYXBIZWxwZXIud3JhcEhlbHBlcihoZWxwZXIsIGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgcmV0dXJuIFV0aWxzLmV4dGVuZCh7IGxvb2t1cFByb3BlcnR5OiBsb29rdXBQcm9wZXJ0eSB9LCBvcHRpb25zKTtcbiAgfSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUx5NHVMMnhwWWk5b1lXNWtiR1ZpWVhKekwzSjFiblJwYldVdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenM3T3pzN096czdPenM3T3pzN2NVSkJRWFZDTEZOQlFWTTdPMGxCUVhCQ0xFdEJRVXM3TzNsQ1FVTkxMR0ZCUVdFN096czdiMEpCVFRWQ0xGRkJRVkU3TzNWQ1FVTnRRaXhYUVVGWE96dHJRMEZEYkVJc2RVSkJRWFZDT3p0dFEwRkpNME1zZVVKQlFYbENPenRCUVVWNlFpeFRRVUZUTEdGQlFXRXNRMEZCUXl4WlFVRlpMRVZCUVVVN1FVRkRNVU1zVFVGQlRTeG5Ra0ZCWjBJc1IwRkJSeXhCUVVGRExGbEJRVmtzU1VGQlNTeFpRVUZaTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWxCUVVzc1EwRkJRenROUVVNM1JDeGxRVUZsTERCQ1FVRnZRaXhEUVVGRE96dEJRVVYwUXl4TlFVTkZMR2RDUVVGblFpd3lRMEZCY1VNc1NVRkRja1FzWjBKQlFXZENMREpDUVVGeFFpeEZRVU55UXp0QlFVTkJMRmRCUVU4N1IwRkRVanM3UVVGRlJDeE5RVUZKTEdkQ1FVRm5RaXd3UTBGQmIwTXNSVUZCUlR0QlFVTjRSQ3hSUVVGTkxHVkJRV1VzUjBGQlJ5eDFRa0ZCYVVJc1pVRkJaU3hEUVVGRE8xRkJRM1pFTEdkQ1FVRm5RaXhIUVVGSExIVkNRVUZwUWl4blFrRkJaMElzUTBGQlF5eERRVUZETzBGQlEzaEVMRlZCUVUwc01rSkJRMG9zZVVaQlFYbEdMRWRCUTNaR0xIRkVRVUZ4UkN4SFFVTnlSQ3hsUVVGbExFZEJRMllzYlVSQlFXMUVMRWRCUTI1RUxHZENRVUZuUWl4SFFVTm9RaXhKUVVGSkxFTkJRMUFzUTBGQlF6dEhRVU5JTEUxQlFVMDdPMEZCUlV3c1ZVRkJUU3d5UWtGRFNpeDNSa0ZCZDBZc1IwRkRkRVlzYVVSQlFXbEVMRWRCUTJwRUxGbEJRVmtzUTBGQlF5eERRVUZETEVOQlFVTXNSMEZEWml4SlFVRkpMRU5CUTFBc1EwRkJRenRIUVVOSU8wTkJRMFk3TzBGQlJVMHNVMEZCVXl4UlFVRlJMRU5CUVVNc1dVRkJXU3hGUVVGRkxFZEJRVWNzUlVGQlJUczdRVUZGTVVNc1RVRkJTU3hEUVVGRExFZEJRVWNzUlVGQlJUdEJRVU5TTEZWQlFVMHNNa0pCUVdNc2JVTkJRVzFETEVOQlFVTXNRMEZCUXp0SFFVTXhSRHRCUVVORUxFMUJRVWtzUTBGQlF5eFpRVUZaTEVsQlFVa3NRMEZCUXl4WlFVRlpMRU5CUVVNc1NVRkJTU3hGUVVGRk8wRkJRM1pETEZWQlFVMHNNa0pCUVdNc01rSkJRVEpDTEVkQlFVY3NUMEZCVHl4WlFVRlpMRU5CUVVNc1EwRkJRenRIUVVONFJUczdRVUZGUkN4alFVRlpMRU5CUVVNc1NVRkJTU3hEUVVGRExGTkJRVk1zUjBGQlJ5eFpRVUZaTEVOQlFVTXNUVUZCVFN4RFFVRkRPenM3TzBGQlNXeEVMRXRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zWVVGQllTeERRVUZETEZsQlFWa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJRenM3TzBGQlJ6VkRMRTFCUVUwc2IwTkJRVzlETEVkQlEzaERMRmxCUVZrc1EwRkJReXhSUVVGUkxFbEJRVWtzV1VGQldTeERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03TzBGQlJURkVMRmRCUVZNc2IwSkJRVzlDTEVOQlFVTXNUMEZCVHl4RlFVRkZMRTlCUVU4c1JVRkJSU3hQUVVGUExFVkJRVVU3UVVGRGRrUXNVVUZCU1N4UFFVRlBMRU5CUVVNc1NVRkJTU3hGUVVGRk8wRkJRMmhDTEdGQlFVOHNSMEZCUnl4TFFVRkxMRU5CUVVNc1RVRkJUU3hEUVVGRExFVkJRVVVzUlVGQlJTeFBRVUZQTEVWQlFVVXNUMEZCVHl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8wRkJRMnhFTEZWQlFVa3NUMEZCVHl4RFFVRkRMRWRCUVVjc1JVRkJSVHRCUVVObUxHVkJRVThzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRE8wOUJRM1pDTzB0QlEwWTdRVUZEUkN4WFFVRlBMRWRCUVVjc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eGpRVUZqTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1JVRkJSU3hQUVVGUExFVkJRVVVzVDBGQlR5eEZRVUZGTEU5QlFVOHNRMEZCUXl4RFFVRkRPenRCUVVWMFJTeFJRVUZKTEdWQlFXVXNSMEZCUnl4TFFVRkxMRU5CUVVNc1RVRkJUU3hEUVVGRExFVkJRVVVzUlVGQlJTeFBRVUZQTEVWQlFVVTdRVUZET1VNc1YwRkJTeXhGUVVGRkxFbEJRVWtzUTBGQlF5eExRVUZMTzBGQlEycENMSGRDUVVGclFpeEZRVUZGTEVsQlFVa3NRMEZCUXl4clFrRkJhMEk3UzBGRE5VTXNRMEZCUXl4RFFVRkRPenRCUVVWSUxGRkJRVWtzVFVGQlRTeEhRVUZITEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1lVRkJZU3hEUVVGRExFbEJRVWtzUTBGRGNFTXNTVUZCU1N4RlFVTktMRTlCUVU4c1JVRkRVQ3hQUVVGUExFVkJRMUFzWlVGQlpTeERRVU5vUWl4RFFVRkRPenRCUVVWR0xGRkJRVWtzVFVGQlRTeEpRVUZKTEVsQlFVa3NTVUZCU1N4SFFVRkhMRU5CUVVNc1QwRkJUeXhGUVVGRk8wRkJRMnBETEdGQlFVOHNRMEZCUXl4UlFVRlJMRU5CUVVNc1QwRkJUeXhEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEVkQlFVY3NRMEZCUXl4UFFVRlBMRU5CUXpGRExFOUJRVThzUlVGRFVDeFpRVUZaTEVOQlFVTXNaVUZCWlN4RlFVTTFRaXhIUVVGSExFTkJRMG9zUTBGQlF6dEJRVU5HTEZsQlFVMHNSMEZCUnl4UFFVRlBMRU5CUVVNc1VVRkJVU3hEUVVGRExFOUJRVThzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4UFFVRlBMRVZCUVVVc1pVRkJaU3hEUVVGRExFTkJRVU03UzBGRGJrVTdRVUZEUkN4UlFVRkpMRTFCUVUwc1NVRkJTU3hKUVVGSkxFVkJRVVU3UVVGRGJFSXNWVUZCU1N4UFFVRlBMRU5CUVVNc1RVRkJUU3hGUVVGRk8wRkJRMnhDTEZsQlFVa3NTMEZCU3l4SFFVRkhMRTFCUVUwc1EwRkJReXhMUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdRVUZETDBJc1lVRkJTeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRXRCUVVzc1EwRkJReXhOUVVGTkxFVkJRVVVzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSVHRCUVVNMVF5eGpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEV0QlFVc3NRMEZCUXl4RlFVRkZPMEZCUXpWQ0xHdENRVUZOTzFkQlExQTdPMEZCUlVRc1pVRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEU5QlFVOHNRMEZCUXl4TlFVRk5MRWRCUVVjc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFOQlEzUkRPMEZCUTBRc1kwRkJUU3hIUVVGSExFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1QwRkRNMEk3UVVGRFJDeGhRVUZQTEUxQlFVMHNRMEZCUXp0TFFVTm1MRTFCUVUwN1FVRkRUQ3haUVVGTkxESkNRVU5LTEdOQlFXTXNSMEZEV2l4UFFVRlBMRU5CUVVNc1NVRkJTU3hIUVVOYUxEQkVRVUV3UkN4RFFVTTNSQ3hEUVVGRE8wdEJRMGc3UjBGRFJqczdPMEZCUjBRc1RVRkJTU3hUUVVGVExFZEJRVWM3UVVGRFpDeFZRVUZOTEVWQlFVVXNaMEpCUVZNc1IwRkJSeXhGUVVGRkxFbEJRVWtzUlVGQlJTeEhRVUZITEVWQlFVVTdRVUZETDBJc1ZVRkJTU3hEUVVGRExFZEJRVWNzU1VGQlNTeEZRVUZGTEVsQlFVa3NTVUZCU1N4SFFVRkhMRU5CUVVFc1FVRkJReXhGUVVGRk8wRkJRekZDTEdOQlFVMHNNa0pCUVdNc1IwRkJSeXhIUVVGSExFbEJRVWtzUjBGQlJ5eHRRa0ZCYlVJc1IwRkJSeXhIUVVGSExFVkJRVVU3UVVGRE1VUXNZVUZCUnl4RlFVRkZMRWRCUVVjN1UwRkRWQ3hEUVVGRExFTkJRVU03VDBGRFNqdEJRVU5FTEdGQlFVOHNVMEZCVXl4RFFVRkRMR05CUVdNc1EwRkJReXhIUVVGSExFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTTdTMEZETlVNN1FVRkRSQ3hyUWtGQll5eEZRVUZGTEhkQ1FVRlRMRTFCUVUwc1JVRkJSU3haUVVGWkxFVkJRVVU3UVVGRE4wTXNWVUZCU1N4TlFVRk5MRWRCUVVjc1RVRkJUU3hEUVVGRExGbEJRVmtzUTBGQlF5eERRVUZETzBGQlEyeERMRlZCUVVrc1RVRkJUU3hKUVVGSkxFbEJRVWtzUlVGQlJUdEJRVU5zUWl4bFFVRlBMRTFCUVUwc1EwRkJRenRQUVVObU8wRkJRMFFzVlVGQlNTeE5RVUZOTEVOQlFVTXNVMEZCVXl4RFFVRkRMR05CUVdNc1EwRkJReXhKUVVGSkxFTkJRVU1zVFVGQlRTeEZRVUZGTEZsQlFWa3NRMEZCUXl4RlFVRkZPMEZCUXpsRUxHVkJRVThzVFVGQlRTeERRVUZETzA5QlEyWTdPMEZCUlVRc1ZVRkJTU3h4UTBGQlowSXNUVUZCVFN4RlFVRkZMRk5CUVZNc1EwRkJReXhyUWtGQmEwSXNSVUZCUlN4WlFVRlpMRU5CUVVNc1JVRkJSVHRCUVVOMlJTeGxRVUZQTEUxQlFVMHNRMEZCUXp0UFFVTm1PMEZCUTBRc1lVRkJUeXhUUVVGVExFTkJRVU03UzBGRGJFSTdRVUZEUkN4VlFVRk5MRVZCUVVVc1owSkJRVk1zVFVGQlRTeEZRVUZGTEVsQlFVa3NSVUZCUlR0QlFVTTNRaXhWUVVGTkxFZEJRVWNzUjBGQlJ5eE5RVUZOTEVOQlFVTXNUVUZCVFN4RFFVRkRPMEZCUXpGQ0xGZEJRVXNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhIUVVGSExFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVTdRVUZETlVJc1dVRkJTU3hOUVVGTkxFZEJRVWNzVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMRk5CUVZNc1EwRkJReXhqUVVGakxFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRWxCUVVrc1EwRkJReXhEUVVGRE8wRkJRM0JGTEZsQlFVa3NUVUZCVFN4SlFVRkpMRWxCUVVrc1JVRkJSVHRCUVVOc1FpeHBRa0ZCVHl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdVMEZEZUVJN1QwRkRSanRMUVVOR08wRkJRMFFzVlVGQlRTeEZRVUZGTEdkQ1FVRlRMRTlCUVU4c1JVRkJSU3hQUVVGUExFVkJRVVU3UVVGRGFrTXNZVUZCVHl4UFFVRlBMRTlCUVU4c1MwRkJTeXhWUVVGVkxFZEJRVWNzVDBGQlR5eERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1IwRkJSeXhQUVVGUExFTkJRVU03UzBGRGVFVTdPMEZCUlVRc2IwSkJRV2RDTEVWQlFVVXNTMEZCU3l4RFFVRkRMR2RDUVVGblFqdEJRVU40UXl4cFFrRkJZU3hGUVVGRkxHOUNRVUZ2UWpzN1FVRkZia01zVFVGQlJTeEZRVUZGTEZsQlFWTXNRMEZCUXl4RlFVRkZPMEZCUTJRc1ZVRkJTU3hIUVVGSExFZEJRVWNzV1VGQldTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMEZCUXpGQ0xGTkJRVWNzUTBGQlF5eFRRVUZUTEVkQlFVY3NXVUZCV1N4RFFVRkRMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zUTBGQlF6dEJRVU4yUXl4aFFVRlBMRWRCUVVjc1EwRkJRenRMUVVOYU96dEJRVVZFTEZsQlFWRXNSVUZCUlN4RlFVRkZPMEZCUTFvc1YwRkJUeXhGUVVGRkxHbENRVUZUTEVOQlFVTXNSVUZCUlN4SlFVRkpMRVZCUVVVc2JVSkJRVzFDTEVWQlFVVXNWMEZCVnl4RlFVRkZMRTFCUVUwc1JVRkJSVHRCUVVOdVJTeFZRVUZKTEdOQlFXTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU1zUTBGQlF6dFZRVU51UXl4RlFVRkZMRWRCUVVjc1NVRkJTU3hEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0QlFVTnNRaXhWUVVGSkxFbEJRVWtzU1VGQlNTeE5RVUZOTEVsQlFVa3NWMEZCVnl4SlFVRkpMRzFDUVVGdFFpeEZRVUZGTzBGQlEzaEVMSE5DUVVGakxFZEJRVWNzVjBGQlZ5eERRVU14UWl4SlFVRkpMRVZCUTBvc1EwRkJReXhGUVVORUxFVkJRVVVzUlVGRFJpeEpRVUZKTEVWQlEwb3NiVUpCUVcxQ0xFVkJRMjVDTEZkQlFWY3NSVUZEV0N4TlFVRk5MRU5CUTFBc1EwRkJRenRQUVVOSUxFMUJRVTBzU1VGQlNTeERRVUZETEdOQlFXTXNSVUZCUlR0QlFVTXhRaXh6UWtGQll5eEhRVUZITEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzVjBGQlZ5eERRVUZETEVsQlFVa3NSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSU3hEUVVGRExFTkJRVU03VDBGRE9VUTdRVUZEUkN4aFFVRlBMR05CUVdNc1EwRkJRenRMUVVOMlFqczdRVUZGUkN4UlFVRkpMRVZCUVVVc1kwRkJVeXhMUVVGTExFVkJRVVVzUzBGQlN5eEZRVUZGTzBGQlF6TkNMR0ZCUVU4c1MwRkJTeXhKUVVGSkxFdEJRVXNzUlVGQlJTeEZRVUZGTzBGQlEzWkNMR0ZCUVVzc1IwRkJSeXhMUVVGTExFTkJRVU1zVDBGQlR5eERRVUZETzA5QlEzWkNPMEZCUTBRc1lVRkJUeXhMUVVGTExFTkJRVU03UzBGRFpEdEJRVU5FTEdsQ1FVRmhMRVZCUVVVc2RVSkJRVk1zUzBGQlN5eEZRVUZGTEUxQlFVMHNSVUZCUlR0QlFVTnlReXhWUVVGSkxFZEJRVWNzUjBGQlJ5eExRVUZMTEVsQlFVa3NUVUZCVFN4RFFVRkRPenRCUVVVeFFpeFZRVUZKTEV0QlFVc3NTVUZCU1N4TlFVRk5MRWxCUVVrc1MwRkJTeXhMUVVGTExFMUJRVTBzUlVGQlJUdEJRVU4yUXl4WFFVRkhMRWRCUVVjc1MwRkJTeXhEUVVGRExFMUJRVTBzUTBGQlF5eEZRVUZGTEVWQlFVVXNUVUZCVFN4RlFVRkZMRXRCUVVzc1EwRkJReXhEUVVGRE8wOUJRM1pET3p0QlFVVkVMR0ZCUVU4c1IwRkJSeXhEUVVGRE8wdEJRMW83TzBGQlJVUXNaVUZCVnl4RlFVRkZMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zUlVGQlJTeERRVUZET3p0QlFVVTFRaXhSUVVGSkxFVkJRVVVzUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SlFVRkpPMEZCUTJwQ0xHZENRVUZaTEVWQlFVVXNXVUZCV1N4RFFVRkRMRkZCUVZFN1IwRkRjRU1zUTBGQlF6czdRVUZGUml4WFFVRlRMRWRCUVVjc1EwRkJReXhQUVVGUExFVkJRV2RDTzFGQlFXUXNUMEZCVHl4NVJFRkJSeXhGUVVGRk96dEJRVU5vUXl4UlFVRkpMRWxCUVVrc1IwRkJSeXhQUVVGUExFTkJRVU1zU1VGQlNTeERRVUZET3p0QlFVVjRRaXhQUVVGSExFTkJRVU1zVFVGQlRTeERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRPMEZCUTNCQ0xGRkJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNUMEZCVHl4SlFVRkpMRmxCUVZrc1EwRkJReXhQUVVGUExFVkJRVVU3UVVGRE5VTXNWVUZCU1N4SFFVRkhMRkZCUVZFc1EwRkJReXhQUVVGUExFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTTdTMEZEYUVNN1FVRkRSQ3hSUVVGSkxFMUJRVTBzV1VGQlFUdFJRVU5TTEZkQlFWY3NSMEZCUnl4WlFVRlpMRU5CUVVNc1kwRkJZeXhIUVVGSExFVkJRVVVzUjBGQlJ5eFRRVUZUTEVOQlFVTTdRVUZETjBRc1VVRkJTU3haUVVGWkxFTkJRVU1zVTBGQlV5eEZRVUZGTzBGQlF6RkNMRlZCUVVrc1QwRkJUeXhEUVVGRExFMUJRVTBzUlVGQlJUdEJRVU5zUWl4alFVRk5MRWRCUTBvc1QwRkJUeXhKUVVGSkxFOUJRVThzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUTNoQ0xFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTXNUVUZCVFN4RFFVRkRMRTlCUVU4c1EwRkJReXhOUVVGTkxFTkJRVU1zUjBGRGFFTXNUMEZCVHl4RFFVRkRMRTFCUVUwc1EwRkJRenRQUVVOMFFpeE5RVUZOTzBGQlEwd3NZMEZCVFN4SFFVRkhMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU03VDBGRGNFSTdTMEZEUmpzN1FVRkZSQ3hoUVVGVExFbEJRVWtzUTBGQlF5eFBRVUZQTEdkQ1FVRm5RanRCUVVOdVF5eGhRVU5GTEVWQlFVVXNSMEZEUml4WlFVRlpMRU5CUVVNc1NVRkJTU3hEUVVObUxGTkJRVk1zUlVGRFZDeFBRVUZQTEVWQlExQXNVMEZCVXl4RFFVRkRMRTlCUVU4c1JVRkRha0lzVTBGQlV5eERRVUZETEZGQlFWRXNSVUZEYkVJc1NVRkJTU3hGUVVOS0xGZEJRVmNzUlVGRFdDeE5RVUZOTEVOQlExQXNRMEZEUkR0TFFVTklPenRCUVVWRUxGRkJRVWtzUjBGQlJ5eHBRa0ZCYVVJc1EwRkRkRUlzV1VGQldTeERRVUZETEVsQlFVa3NSVUZEYWtJc1NVRkJTU3hGUVVOS0xGTkJRVk1zUlVGRFZDeFBRVUZQTEVOQlFVTXNUVUZCVFN4SlFVRkpMRVZCUVVVc1JVRkRjRUlzU1VGQlNTeEZRVU5LTEZkQlFWY3NRMEZEV2l4RFFVRkRPMEZCUTBZc1YwRkJUeXhKUVVGSkxFTkJRVU1zVDBGQlR5eEZRVUZGTEU5QlFVOHNRMEZCUXl4RFFVRkRPMGRCUXk5Q096dEJRVVZFTEV0QlFVY3NRMEZCUXl4TFFVRkxMRWRCUVVjc1NVRkJTU3hEUVVGRE96dEJRVVZxUWl4TFFVRkhMRU5CUVVNc1RVRkJUU3hIUVVGSExGVkJRVk1zVDBGQlR5eEZRVUZGTzBGQlF6ZENMRkZCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zVDBGQlR5eEZRVUZGTzBGQlEzQkNMRlZCUVVrc1lVRkJZU3hIUVVGSExFdEJRVXNzUTBGQlF5eE5RVUZOTEVOQlFVTXNSVUZCUlN4RlFVRkZMRWRCUVVjc1EwRkJReXhQUVVGUExFVkJRVVVzVDBGQlR5eERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRPMEZCUTI1RkxIRkRRVUVyUWl4RFFVRkRMR0ZCUVdFc1JVRkJSU3hUUVVGVExFTkJRVU1zUTBGQlF6dEJRVU14UkN4bFFVRlRMRU5CUVVNc1QwRkJUeXhIUVVGSExHRkJRV0VzUTBGQlF6czdRVUZGYkVNc1ZVRkJTU3haUVVGWkxFTkJRVU1zVlVGQlZTeEZRVUZGT3p0QlFVVXpRaXhwUWtGQlV5eERRVUZETEZGQlFWRXNSMEZCUnl4VFFVRlRMRU5CUVVNc1lVRkJZU3hEUVVNeFF5eFBRVUZQTEVOQlFVTXNVVUZCVVN4RlFVTm9RaXhIUVVGSExFTkJRVU1zVVVGQlVTeERRVU5pTEVOQlFVTTdUMEZEU0R0QlFVTkVMRlZCUVVrc1dVRkJXU3hEUVVGRExGVkJRVlVzU1VGQlNTeFpRVUZaTEVOQlFVTXNZVUZCWVN4RlFVRkZPMEZCUTNwRUxHbENRVUZUTEVOQlFVTXNWVUZCVlN4SFFVRkhMRXRCUVVzc1EwRkJReXhOUVVGTkxFTkJRMnBETEVWQlFVVXNSVUZEUml4SFFVRkhMRU5CUVVNc1ZVRkJWU3hGUVVOa0xFOUJRVThzUTBGQlF5eFZRVUZWTEVOQlEyNUNMRU5CUVVNN1QwRkRTRHM3UVVGRlJDeGxRVUZUTEVOQlFVTXNTMEZCU3l4SFFVRkhMRVZCUVVVc1EwRkJRenRCUVVOeVFpeGxRVUZUTEVOQlFVTXNhMEpCUVd0Q0xFZEJRVWNzT0VOQlFYbENMRTlCUVU4c1EwRkJReXhEUVVGRE96dEJRVVZxUlN4VlFVRkpMRzFDUVVGdFFpeEhRVU55UWl4UFFVRlBMRU5CUVVNc2VVSkJRWGxDTEVsQlEycERMRzlEUVVGdlF5eERRVUZETzBGQlEzWkRMR2xEUVVGclFpeFRRVUZUTEVWQlFVVXNaVUZCWlN4RlFVRkZMRzFDUVVGdFFpeERRVUZETEVOQlFVTTdRVUZEYmtVc2FVTkJRV3RDTEZOQlFWTXNSVUZCUlN4dlFrRkJiMElzUlVGQlJTeHRRa0ZCYlVJc1EwRkJReXhEUVVGRE8wdEJRM3BGTEUxQlFVMDdRVUZEVEN4bFFVRlRMRU5CUVVNc2EwSkJRV3RDTEVkQlFVY3NUMEZCVHl4RFFVRkRMR3RDUVVGclFpeERRVUZETzBGQlF6RkVMR1ZCUVZNc1EwRkJReXhQUVVGUExFZEJRVWNzVDBGQlR5eERRVUZETEU5QlFVOHNRMEZCUXp0QlFVTndReXhsUVVGVExFTkJRVU1zVVVGQlVTeEhRVUZITEU5QlFVOHNRMEZCUXl4UlFVRlJMRU5CUVVNN1FVRkRkRU1zWlVGQlV5eERRVUZETEZWQlFWVXNSMEZCUnl4UFFVRlBMRU5CUVVNc1ZVRkJWU3hEUVVGRE8wRkJRekZETEdWQlFWTXNRMEZCUXl4TFFVRkxMRWRCUVVjc1QwRkJUeXhEUVVGRExFdEJRVXNzUTBGQlF6dExRVU5xUXp0SFFVTkdMRU5CUVVNN08wRkJSVVlzUzBGQlJ5eERRVUZETEUxQlFVMHNSMEZCUnl4VlFVRlRMRU5CUVVNc1JVRkJSU3hKUVVGSkxFVkJRVVVzVjBGQlZ5eEZRVUZGTEUxQlFVMHNSVUZCUlR0QlFVTnNSQ3hSUVVGSkxGbEJRVmtzUTBGQlF5eGpRVUZqTEVsQlFVa3NRMEZCUXl4WFFVRlhMRVZCUVVVN1FVRkRMME1zV1VGQlRTd3lRa0ZCWXl4M1FrRkJkMElzUTBGQlF5eERRVUZETzB0QlF5OURPMEZCUTBRc1VVRkJTU3haUVVGWkxFTkJRVU1zVTBGQlV5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RlFVRkZPMEZCUTNKRExGbEJRVTBzTWtKQlFXTXNlVUpCUVhsQ0xFTkJRVU1zUTBGQlF6dExRVU5vUkRzN1FVRkZSQ3hYUVVGUExGZEJRVmNzUTBGRGFFSXNVMEZCVXl4RlFVTlVMRU5CUVVNc1JVRkRSQ3haUVVGWkxFTkJRVU1zUTBGQlF5eERRVUZETEVWQlEyWXNTVUZCU1N4RlFVTktMRU5CUVVNc1JVRkRSQ3hYUVVGWExFVkJRMWdzVFVGQlRTeERRVU5RTEVOQlFVTTdSMEZEU0N4RFFVRkRPMEZCUTBZc1UwRkJUeXhIUVVGSExFTkJRVU03UTBGRFdqczdRVUZGVFN4VFFVRlRMRmRCUVZjc1EwRkRla0lzVTBGQlV5eEZRVU5VTEVOQlFVTXNSVUZEUkN4RlFVRkZMRVZCUTBZc1NVRkJTU3hGUVVOS0xHMUNRVUZ0UWl4RlFVTnVRaXhYUVVGWExFVkJRMWdzVFVGQlRTeEZRVU5PTzBGQlEwRXNWMEZCVXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhGUVVGblFqdFJRVUZrTEU5QlFVOHNlVVJCUVVjc1JVRkJSVHM3UVVGRGFrTXNVVUZCU1N4aFFVRmhMRWRCUVVjc1RVRkJUU3hEUVVGRE8wRkJRek5DTEZGQlEwVXNUVUZCVFN4SlFVTk9MRTlCUVU4c1NVRkJTU3hOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEVsQlEzQkNMRVZCUVVVc1QwRkJUeXhMUVVGTExGTkJRVk1zUTBGQlF5eFhRVUZYTEVsQlFVa3NUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhMUVVGTExFbEJRVWtzUTBGQlFTeEJRVUZETEVWQlF6RkVPMEZCUTBFc2JVSkJRV0VzUjBGQlJ5eERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRMRTFCUVUwc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF6dExRVU14UXpzN1FVRkZSQ3hYUVVGUExFVkJRVVVzUTBGRFVDeFRRVUZUTEVWQlExUXNUMEZCVHl4RlFVTlFMRk5CUVZNc1EwRkJReXhQUVVGUExFVkJRMnBDTEZOQlFWTXNRMEZCUXl4UlFVRlJMRVZCUTJ4Q0xFOUJRVThzUTBGQlF5eEpRVUZKTEVsQlFVa3NTVUZCU1N4RlFVTndRaXhYUVVGWExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNWMEZCVnl4RFFVRkRMRU5CUVVNc1RVRkJUU3hEUVVGRExGZEJRVmNzUTBGQlF5eEZRVU40UkN4aFFVRmhMRU5CUTJRc1EwRkJRenRIUVVOSU96dEJRVVZFTEUxQlFVa3NSMEZCUnl4cFFrRkJhVUlzUTBGQlF5eEZRVUZGTEVWQlFVVXNTVUZCU1N4RlFVRkZMRk5CUVZNc1JVRkJSU3hOUVVGTkxFVkJRVVVzU1VGQlNTeEZRVUZGTEZkQlFWY3NRMEZCUXl4RFFVRkRPenRCUVVWNlJTeE5RVUZKTEVOQlFVTXNUMEZCVHl4SFFVRkhMRU5CUVVNc1EwRkJRenRCUVVOcVFpeE5RVUZKTEVOQlFVTXNTMEZCU3l4SFFVRkhMRTFCUVUwc1IwRkJSeXhOUVVGTkxFTkJRVU1zVFVGQlRTeEhRVUZITEVOQlFVTXNRMEZCUXp0QlFVTjRReXhOUVVGSkxFTkJRVU1zVjBGQlZ5eEhRVUZITEcxQ1FVRnRRaXhKUVVGSkxFTkJRVU1zUTBGQlF6dEJRVU0xUXl4VFFVRlBMRWxCUVVrc1EwRkJRenREUVVOaU96czdPenM3UVVGTFRTeFRRVUZUTEdOQlFXTXNRMEZCUXl4UFFVRlBMRVZCUVVVc1QwRkJUeXhGUVVGRkxFOUJRVThzUlVGQlJUdEJRVU40UkN4TlFVRkpMRU5CUVVNc1QwRkJUeXhGUVVGRk8wRkJRMW9zVVVGQlNTeFBRVUZQTEVOQlFVTXNTVUZCU1N4TFFVRkxMR2RDUVVGblFpeEZRVUZGTzBGQlEzSkRMR0ZCUVU4c1IwRkJSeXhQUVVGUExFTkJRVU1zU1VGQlNTeERRVUZETEdWQlFXVXNRMEZCUXl4RFFVRkRPMHRCUTNwRExFMUJRVTA3UVVGRFRDeGhRVUZQTEVkQlFVY3NUMEZCVHl4RFFVRkRMRkZCUVZFc1EwRkJReXhQUVVGUExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdTMEZETVVNN1IwRkRSaXhOUVVGTkxFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNTVUZCU1N4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFbEJRVWtzUlVGQlJUczdRVUZGZWtNc1YwRkJUeXhEUVVGRExFbEJRVWtzUjBGQlJ5eFBRVUZQTEVOQlFVTTdRVUZEZGtJc1YwRkJUeXhIUVVGSExFOUJRVThzUTBGQlF5eFJRVUZSTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNN1IwRkRja003UVVGRFJDeFRRVUZQTEU5QlFVOHNRMEZCUXp0RFFVTm9RanM3UVVGRlRTeFRRVUZUTEdGQlFXRXNRMEZCUXl4UFFVRlBMRVZCUVVVc1QwRkJUeXhGUVVGRkxFOUJRVThzUlVGQlJUczdRVUZGZGtRc1RVRkJUU3h0UWtGQmJVSXNSMEZCUnl4UFFVRlBMRU5CUVVNc1NVRkJTU3hKUVVGSkxFOUJRVThzUTBGQlF5eEpRVUZKTEVOQlFVTXNaVUZCWlN4RFFVRkRMRU5CUVVNN1FVRkRNVVVzVTBGQlR5eERRVUZETEU5QlFVOHNSMEZCUnl4SlFVRkpMRU5CUVVNN1FVRkRka0lzVFVGQlNTeFBRVUZQTEVOQlFVTXNSMEZCUnl4RlFVRkZPMEZCUTJZc1YwRkJUeXhEUVVGRExFbEJRVWtzUTBGQlF5eFhRVUZYTEVkQlFVY3NUMEZCVHl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeFBRVUZQTEVOQlFVTXNTVUZCU1N4RFFVRkRMRmRCUVZjc1EwRkJRenRIUVVOMlJUczdRVUZGUkN4TlFVRkpMRmxCUVZrc1dVRkJRU3hEUVVGRE8wRkJRMnBDTEUxQlFVa3NUMEZCVHl4RFFVRkRMRVZCUVVVc1NVRkJTU3hQUVVGUExFTkJRVU1zUlVGQlJTeExRVUZMTEVsQlFVa3NSVUZCUlRzN1FVRkRja01zWVVGQlR5eERRVUZETEVsQlFVa3NSMEZCUnl4clFrRkJXU3hQUVVGUExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdPMEZCUlhwRExGVkJRVWtzUlVGQlJTeEhRVUZITEU5QlFVOHNRMEZCUXl4RlFVRkZMRU5CUVVNN1FVRkRjRUlzYTBKQlFWa3NSMEZCUnl4UFFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRExHVkJRV1VzUTBGQlF5eEhRVUZITEZOQlFWTXNiVUpCUVcxQ0xFTkJRM3BGTEU5QlFVOHNSVUZGVUR0WlFVUkJMRTlCUVU4c2VVUkJRVWNzUlVGQlJUczdPenRCUVVsYUxHVkJRVThzUTBGQlF5eEpRVUZKTEVkQlFVY3NhMEpCUVZrc1QwRkJUeXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzBGQlEzcERMR1ZCUVU4c1EwRkJReXhKUVVGSkxFTkJRVU1zWlVGQlpTeERRVUZETEVkQlFVY3NiVUpCUVcxQ0xFTkJRVU03UVVGRGNFUXNaVUZCVHl4RlFVRkZMRU5CUVVNc1QwRkJUeXhGUVVGRkxFOUJRVThzUTBGQlF5eERRVUZETzA5QlF6ZENMRU5CUVVNN1FVRkRSaXhWUVVGSkxFVkJRVVVzUTBGQlF5eFJRVUZSTEVWQlFVVTdRVUZEWml4bFFVRlBMRU5CUVVNc1VVRkJVU3hIUVVGSExFdEJRVXNzUTBGQlF5eE5RVUZOTEVOQlFVTXNSVUZCUlN4RlFVRkZMRTlCUVU4c1EwRkJReXhSUVVGUkxFVkJRVVVzUlVGQlJTeERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRPMDlCUTNCRk96dEhRVU5HT3p0QlFVVkVMRTFCUVVrc1QwRkJUeXhMUVVGTExGTkJRVk1zU1VGQlNTeFpRVUZaTEVWQlFVVTdRVUZEZWtNc1YwRkJUeXhIUVVGSExGbEJRVmtzUTBGQlF6dEhRVU40UWpzN1FVRkZSQ3hOUVVGSkxFOUJRVThzUzBGQlN5eFRRVUZUTEVWQlFVVTdRVUZEZWtJc1ZVRkJUU3d5UWtGQll5eGpRVUZqTEVkQlFVY3NUMEZCVHl4RFFVRkRMRWxCUVVrc1IwRkJSeXh4UWtGQmNVSXNRMEZCUXl4RFFVRkRPMGRCUXpWRkxFMUJRVTBzU1VGQlNTeFBRVUZQTEZsQlFWa3NVVUZCVVN4RlFVRkZPMEZCUTNSRExGZEJRVThzVDBGQlR5eERRVUZETEU5QlFVOHNSVUZCUlN4UFFVRlBMRU5CUVVNc1EwRkJRenRIUVVOc1F6dERRVU5HT3p0QlFVVk5MRk5CUVZNc1NVRkJTU3hIUVVGSE8wRkJRM0pDTEZOQlFVOHNSVUZCUlN4RFFVRkRPME5CUTFnN08wRkJSVVFzVTBGQlV5eFJRVUZSTEVOQlFVTXNUMEZCVHl4RlFVRkZMRWxCUVVrc1JVRkJSVHRCUVVNdlFpeE5RVUZKTEVOQlFVTXNTVUZCU1N4SlFVRkpMRVZCUVVVc1RVRkJUU3hKUVVGSkxFbEJRVWtzUTBGQlFTeEJRVUZETEVWQlFVVTdRVUZET1VJc1VVRkJTU3hIUVVGSExFbEJRVWtzUjBGQlJ5eHJRa0ZCV1N4SlFVRkpMRU5CUVVNc1IwRkJSeXhGUVVGRkxFTkJRVU03UVVGRGNrTXNVVUZCU1N4RFFVRkRMRWxCUVVrc1IwRkJSeXhQUVVGUExFTkJRVU03UjBGRGNrSTdRVUZEUkN4VFFVRlBMRWxCUVVrc1EwRkJRenREUVVOaU96dEJRVVZFTEZOQlFWTXNhVUpCUVdsQ0xFTkJRVU1zUlVGQlJTeEZRVUZGTEVsQlFVa3NSVUZCUlN4VFFVRlRMRVZCUVVVc1RVRkJUU3hGUVVGRkxFbEJRVWtzUlVGQlJTeFhRVUZYTEVWQlFVVTdRVUZEZWtVc1RVRkJTU3hGUVVGRkxFTkJRVU1zVTBGQlV5eEZRVUZGTzBGQlEyaENMRkZCUVVrc1MwRkJTeXhIUVVGSExFVkJRVVVzUTBGQlF6dEJRVU5tTEZGQlFVa3NSMEZCUnl4RlFVRkZMRU5CUVVNc1UwRkJVeXhEUVVOcVFpeEpRVUZKTEVWQlEwb3NTMEZCU3l4RlFVTk1MRk5CUVZNc1JVRkRWQ3hOUVVGTkxFbEJRVWtzVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4RlFVTnVRaXhKUVVGSkxFVkJRMG9zVjBGQlZ5eEZRVU5ZTEUxQlFVMHNRMEZEVUN4RFFVRkRPMEZCUTBZc1UwRkJTeXhEUVVGRExFMUJRVTBzUTBGQlF5eEpRVUZKTEVWQlFVVXNTMEZCU3l4RFFVRkRMRU5CUVVNN1IwRkRNMEk3UVVGRFJDeFRRVUZQTEVsQlFVa3NRMEZCUXp0RFFVTmlPenRCUVVWRUxGTkJRVk1zSzBKQlFTdENMRU5CUVVNc1lVRkJZU3hGUVVGRkxGTkJRVk1zUlVGQlJUdEJRVU5xUlN4UlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExHRkJRV0VzUTBGQlF5eERRVUZETEU5QlFVOHNRMEZCUXl4VlFVRkJMRlZCUVZVc1JVRkJTVHRCUVVNdlF5eFJRVUZKTEUxQlFVMHNSMEZCUnl4aFFVRmhMRU5CUVVNc1ZVRkJWU3hEUVVGRExFTkJRVU03UVVGRGRrTXNhVUpCUVdFc1EwRkJReXhWUVVGVkxFTkJRVU1zUjBGQlJ5eDNRa0ZCZDBJc1EwRkJReXhOUVVGTkxFVkJRVVVzVTBGQlV5eERRVUZETEVOQlFVTTdSMEZEZWtVc1EwRkJReXhEUVVGRE8wTkJRMG83TzBGQlJVUXNVMEZCVXl4M1FrRkJkMElzUTBGQlF5eE5RVUZOTEVWQlFVVXNVMEZCVXl4RlFVRkZPMEZCUTI1RUxFMUJRVTBzWTBGQll5eEhRVUZITEZOQlFWTXNRMEZCUXl4alFVRmpMRU5CUVVNN1FVRkRhRVFzVTBGQlR5d3JRa0ZCVnl4TlFVRk5MRVZCUVVVc1ZVRkJRU3hQUVVGUExFVkJRVWs3UVVGRGJrTXNWMEZCVHl4TFFVRkxMRU5CUVVNc1RVRkJUU3hEUVVGRExFVkJRVVVzWTBGQll5eEZRVUZrTEdOQlFXTXNSVUZCUlN4RlFVRkZMRTlCUVU4c1EwRkJReXhEUVVGRE8wZEJRMnhFTEVOQlFVTXNRMEZCUXp0RFFVTktJaXdpWm1sc1pTSTZJbkoxYm5ScGJXVXVhbk1pTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnS2lCaGN5QlZkR2xzY3lCbWNtOXRJQ2N1TDNWMGFXeHpKenRjYm1sdGNHOXlkQ0JGZUdObGNIUnBiMjRnWm5KdmJTQW5MaTlsZUdObGNIUnBiMjRuTzF4dWFXMXdiM0owSUh0Y2JpQWdRMDlOVUVsTVJWSmZVa1ZXU1ZOSlQwNHNYRzRnSUdOeVpXRjBaVVp5WVcxbExGeHVJQ0JNUVZOVVgwTlBUVkJCVkVsQ1RFVmZRMDlOVUVsTVJWSmZVa1ZXU1ZOSlQwNHNYRzRnSUZKRlZrbFRTVTlPWDBOSVFVNUhSVk5jYm4wZ1puSnZiU0FuTGk5aVlYTmxKenRjYm1sdGNHOXlkQ0I3SUcxdmRtVklaV3h3WlhKVWIwaHZiMnR6SUgwZ1puSnZiU0FuTGk5b1pXeHdaWEp6Snp0Y2JtbHRjRzl5ZENCN0lIZHlZWEJJWld4d1pYSWdmU0JtY205dElDY3VMMmx1ZEdWeWJtRnNMM2R5WVhCSVpXeHdaWEluTzF4dWFXMXdiM0owSUh0Y2JpQWdZM0psWVhSbFVISnZkRzlCWTJObGMzTkRiMjUwY205c0xGeHVJQ0J5WlhOMWJIUkpjMEZzYkc5M1pXUmNibjBnWm5KdmJTQW5MaTlwYm5SbGNtNWhiQzl3Y205MGJ5MWhZMk5sYzNNbk8xeHVYRzVsZUhCdmNuUWdablZ1WTNScGIyNGdZMmhsWTJ0U1pYWnBjMmx2YmloamIyMXdhV3hsY2tsdVptOHBJSHRjYmlBZ1kyOXVjM1FnWTI5dGNHbHNaWEpTWlhacGMybHZiaUE5SUNoamIyMXdhV3hsY2tsdVptOGdKaVlnWTI5dGNHbHNaWEpKYm1adld6QmRLU0I4ZkNBeExGeHVJQ0FnSUdOMWNuSmxiblJTWlhacGMybHZiaUE5SUVOUFRWQkpURVZTWDFKRlZrbFRTVTlPTzF4dVhHNGdJR2xtSUNoY2JpQWdJQ0JqYjIxd2FXeGxjbEpsZG1semFXOXVJRDQ5SUV4QlUxUmZRMDlOVUVGVVNVSk1SVjlEVDAxUVNVeEZVbDlTUlZaSlUwbFBUaUFtSmx4dUlDQWdJR052YlhCcGJHVnlVbVYyYVhOcGIyNGdQRDBnUTA5TlVFbE1SVkpmVWtWV1NWTkpUMDVjYmlBZ0tTQjdYRzRnSUNBZ2NtVjBkWEp1TzF4dUlDQjlYRzVjYmlBZ2FXWWdLR052YlhCcGJHVnlVbVYyYVhOcGIyNGdQQ0JNUVZOVVgwTlBUVkJCVkVsQ1RFVmZRMDlOVUVsTVJWSmZVa1ZXU1ZOSlQwNHBJSHRjYmlBZ0lDQmpiMjV6ZENCeWRXNTBhVzFsVm1WeWMybHZibk1nUFNCU1JWWkpVMGxQVGw5RFNFRk9SMFZUVzJOMWNuSmxiblJTWlhacGMybHZibDBzWEc0Z0lDQWdJQ0JqYjIxd2FXeGxjbFpsY25OcGIyNXpJRDBnVWtWV1NWTkpUMDVmUTBoQlRrZEZVMXRqYjIxd2FXeGxjbEpsZG1semFXOXVYVHRjYmlBZ0lDQjBhSEp2ZHlCdVpYY2dSWGhqWlhCMGFXOXVLRnh1SUNBZ0lDQWdKMVJsYlhCc1lYUmxJSGRoY3lCd2NtVmpiMjF3YVd4bFpDQjNhWFJvSUdGdUlHOXNaR1Z5SUhabGNuTnBiMjRnYjJZZ1NHRnVaR3hsWW1GeWN5QjBhR0Z1SUhSb1pTQmpkWEp5Wlc1MElISjFiblJwYldVdUlDY2dLMXh1SUNBZ0lDQWdJQ0FuVUd4bFlYTmxJSFZ3WkdGMFpTQjViM1Z5SUhCeVpXTnZiWEJwYkdWeUlIUnZJR0VnYm1WM1pYSWdkbVZ5YzJsdmJpQW9KeUFyWEc0Z0lDQWdJQ0FnSUhKMWJuUnBiV1ZXWlhKemFXOXVjeUFyWEc0Z0lDQWdJQ0FnSUNjcElHOXlJR1J2ZDI1bmNtRmtaU0I1YjNWeUlISjFiblJwYldVZ2RHOGdZVzRnYjJ4a1pYSWdkbVZ5YzJsdmJpQW9KeUFyWEc0Z0lDQWdJQ0FnSUdOdmJYQnBiR1Z5Vm1WeWMybHZibk1nSzF4dUlDQWdJQ0FnSUNBbktTNG5YRzRnSUNBZ0tUdGNiaUFnZlNCbGJITmxJSHRjYmlBZ0lDQXZMeUJWYzJVZ2RHaGxJR1Z0WW1Wa1pHVmtJSFpsY25OcGIyNGdhVzVtYnlCemFXNWpaU0IwYUdVZ2NuVnVkR2x0WlNCa2IyVnpiaWQwSUd0dWIzY2dZV0p2ZFhRZ2RHaHBjeUJ5WlhacGMybHZiaUI1WlhSY2JpQWdJQ0IwYUhKdmR5QnVaWGNnUlhoalpYQjBhVzl1S0Z4dUlDQWdJQ0FnSjFSbGJYQnNZWFJsSUhkaGN5QndjbVZqYjIxd2FXeGxaQ0IzYVhSb0lHRWdibVYzWlhJZ2RtVnljMmx2YmlCdlppQklZVzVrYkdWaVlYSnpJSFJvWVc0Z2RHaGxJR04xY25KbGJuUWdjblZ1ZEdsdFpTNGdKeUFyWEc0Z0lDQWdJQ0FnSUNkUWJHVmhjMlVnZFhCa1lYUmxJSGx2ZFhJZ2NuVnVkR2x0WlNCMGJ5QmhJRzVsZDJWeUlIWmxjbk5wYjI0Z0tDY2dLMXh1SUNBZ0lDQWdJQ0JqYjIxd2FXeGxja2x1Wm05Yk1WMGdLMXh1SUNBZ0lDQWdJQ0FuS1M0blhHNGdJQ0FnS1R0Y2JpQWdmVnh1ZlZ4dVhHNWxlSEJ2Y25RZ1puVnVZM1JwYjI0Z2RHVnRjR3hoZEdVb2RHVnRjR3hoZEdWVGNHVmpMQ0JsYm5ZcElIdGNiaUFnTHlvZ2FYTjBZVzVpZFd3Z2FXZHViM0psSUc1bGVIUWdLaTljYmlBZ2FXWWdLQ0ZsYm5ZcElIdGNiaUFnSUNCMGFISnZkeUJ1WlhjZ1JYaGpaWEIwYVc5dUtDZE9ieUJsYm5acGNtOXViV1Z1ZENCd1lYTnpaV1FnZEc4Z2RHVnRjR3hoZEdVbktUdGNiaUFnZlZ4dUlDQnBaaUFvSVhSbGJYQnNZWFJsVTNCbFl5QjhmQ0FoZEdWdGNHeGhkR1ZUY0dWakxtMWhhVzRwSUh0Y2JpQWdJQ0IwYUhKdmR5QnVaWGNnUlhoalpYQjBhVzl1S0NkVmJtdHViM2R1SUhSbGJYQnNZWFJsSUc5aWFtVmpkRG9nSnlBcklIUjVjR1Z2WmlCMFpXMXdiR0YwWlZOd1pXTXBPMXh1SUNCOVhHNWNiaUFnZEdWdGNHeGhkR1ZUY0dWakxtMWhhVzR1WkdWamIzSmhkRzl5SUQwZ2RHVnRjR3hoZEdWVGNHVmpMbTFoYVc1ZlpEdGNibHh1SUNBdkx5Qk9iM1JsT2lCVmMybHVaeUJsYm5ZdVZrMGdjbVZtWlhKbGJtTmxjeUJ5WVhSb1pYSWdkR2hoYmlCc2IyTmhiQ0IyWVhJZ2NtVm1aWEpsYm1ObGN5QjBhSEp2ZFdkb2IzVjBJSFJvYVhNZ2MyVmpkR2x2YmlCMGJ5QmhiR3h2ZDF4dUlDQXZMeUJtYjNJZ1pYaDBaWEp1WVd3Z2RYTmxjbk1nZEc4Z2IzWmxjbkpwWkdVZ2RHaGxjMlVnWVhNZ2NITmxkV1J2TFhOMWNIQnZjblJsWkNCQlVFbHpMbHh1SUNCbGJuWXVWazB1WTJobFkydFNaWFpwYzJsdmJpaDBaVzF3YkdGMFpWTndaV011WTI5dGNHbHNaWElwTzF4dVhHNGdJQzh2SUdKaFkydDNZWEprY3lCamIyMXdZWFJwWW1sc2FYUjVJR1p2Y2lCd2NtVmpiMjF3YVd4bFpDQjBaVzF3YkdGMFpYTWdkMmwwYUNCamIyMXdhV3hsY2kxMlpYSnphVzl1SURjZ0tEdzBMak11TUNsY2JpQWdZMjl1YzNRZ2RHVnRjR3hoZEdWWFlYTlFjbVZqYjIxd2FXeGxaRmRwZEdoRGIyMXdhV3hsY2xZM0lEMWNiaUFnSUNCMFpXMXdiR0YwWlZOd1pXTXVZMjl0Y0dsc1pYSWdKaVlnZEdWdGNHeGhkR1ZUY0dWakxtTnZiWEJwYkdWeVd6QmRJRDA5UFNBM08xeHVYRzRnSUdaMWJtTjBhVzl1SUdsdWRtOXJaVkJoY25ScFlXeFhjbUZ3Y0dWeUtIQmhjblJwWVd3c0lHTnZiblJsZUhRc0lHOXdkR2x2Ym5NcElIdGNiaUFnSUNCcFppQW9iM0IwYVc5dWN5NW9ZWE5vS1NCN1hHNGdJQ0FnSUNCamIyNTBaWGgwSUQwZ1ZYUnBiSE11WlhoMFpXNWtLSHQ5TENCamIyNTBaWGgwTENCdmNIUnBiMjV6TG1oaGMyZ3BPMXh1SUNBZ0lDQWdhV1lnS0c5d2RHbHZibk11YVdSektTQjdYRzRnSUNBZ0lDQWdJRzl3ZEdsdmJuTXVhV1J6V3pCZElEMGdkSEoxWlR0Y2JpQWdJQ0FnSUgxY2JpQWdJQ0I5WEc0Z0lDQWdjR0Z5ZEdsaGJDQTlJR1Z1ZGk1V1RTNXlaWE52YkhabFVHRnlkR2xoYkM1allXeHNLSFJvYVhNc0lIQmhjblJwWVd3c0lHTnZiblJsZUhRc0lHOXdkR2x2Ym5NcE8xeHVYRzRnSUNBZ2JHVjBJR1Y0ZEdWdVpHVmtUM0IwYVc5dWN5QTlJRlYwYVd4ekxtVjRkR1Z1WkNoN2ZTd2diM0IwYVc5dWN5d2dlMXh1SUNBZ0lDQWdhRzl2YTNNNklIUm9hWE11YUc5dmEzTXNYRzRnSUNBZ0lDQndjbTkwYjBGalkyVnpjME52Ym5SeWIydzZJSFJvYVhNdWNISnZkRzlCWTJObGMzTkRiMjUwY205c1hHNGdJQ0FnZlNrN1hHNWNiaUFnSUNCc1pYUWdjbVZ6ZFd4MElEMGdaVzUyTGxaTkxtbHVkbTlyWlZCaGNuUnBZV3d1WTJGc2JDaGNiaUFnSUNBZ0lIUm9hWE1zWEc0Z0lDQWdJQ0J3WVhKMGFXRnNMRnh1SUNBZ0lDQWdZMjl1ZEdWNGRDeGNiaUFnSUNBZ0lHVjRkR1Z1WkdWa1QzQjBhVzl1YzF4dUlDQWdJQ2s3WEc1Y2JpQWdJQ0JwWmlBb2NtVnpkV3gwSUQwOUlHNTFiR3dnSmlZZ1pXNTJMbU52YlhCcGJHVXBJSHRjYmlBZ0lDQWdJRzl3ZEdsdmJuTXVjR0Z5ZEdsaGJITmJiM0IwYVc5dWN5NXVZVzFsWFNBOUlHVnVkaTVqYjIxd2FXeGxLRnh1SUNBZ0lDQWdJQ0J3WVhKMGFXRnNMRnh1SUNBZ0lDQWdJQ0IwWlcxd2JHRjBaVk53WldNdVkyOXRjR2xzWlhKUGNIUnBiMjV6TEZ4dUlDQWdJQ0FnSUNCbGJuWmNiaUFnSUNBZ0lDazdYRzRnSUNBZ0lDQnlaWE4xYkhRZ1BTQnZjSFJwYjI1ekxuQmhjblJwWVd4elcyOXdkR2x2Ym5NdWJtRnRaVjBvWTI5dWRHVjRkQ3dnWlhoMFpXNWtaV1JQY0hScGIyNXpLVHRjYmlBZ0lDQjlYRzRnSUNBZ2FXWWdLSEpsYzNWc2RDQWhQU0J1ZFd4c0tTQjdYRzRnSUNBZ0lDQnBaaUFvYjNCMGFXOXVjeTVwYm1SbGJuUXBJSHRjYmlBZ0lDQWdJQ0FnYkdWMElHeHBibVZ6SUQwZ2NtVnpkV3gwTG5Od2JHbDBLQ2RjWEc0bktUdGNiaUFnSUNBZ0lDQWdabTl5SUNoc1pYUWdhU0E5SURBc0lHd2dQU0JzYVc1bGN5NXNaVzVuZEdnN0lHa2dQQ0JzT3lCcEt5c3BJSHRjYmlBZ0lDQWdJQ0FnSUNCcFppQW9JV3hwYm1WelcybGRJQ1ltSUdrZ0t5QXhJRDA5UFNCc0tTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCaWNtVmhhenRjYmlBZ0lDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdJQ0JzYVc1bGMxdHBYU0E5SUc5d2RHbHZibk11YVc1a1pXNTBJQ3NnYkdsdVpYTmJhVjA3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2NtVnpkV3gwSUQwZ2JHbHVaWE11YW05cGJpZ25YRnh1SnlrN1hHNGdJQ0FnSUNCOVhHNGdJQ0FnSUNCeVpYUjFjbTRnY21WemRXeDBPMXh1SUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNCMGFISnZkeUJ1WlhjZ1JYaGpaWEIwYVc5dUtGeHVJQ0FnSUNBZ0lDQW5WR2hsSUhCaGNuUnBZV3dnSnlBclhHNGdJQ0FnSUNBZ0lDQWdiM0IwYVc5dWN5NXVZVzFsSUN0Y2JpQWdJQ0FnSUNBZ0lDQW5JR052ZFd4a0lHNXZkQ0JpWlNCamIyMXdhV3hsWkNCM2FHVnVJSEoxYm01cGJtY2dhVzRnY25WdWRHbHRaUzF2Ym14NUlHMXZaR1VuWEc0Z0lDQWdJQ0FwTzF4dUlDQWdJSDFjYmlBZ2ZWeHVYRzRnSUM4dklFcDFjM1FnWVdSa0lIZGhkR1Z5WEc0Z0lHeGxkQ0JqYjI1MFlXbHVaWElnUFNCN1hHNGdJQ0FnYzNSeWFXTjBPaUJtZFc1amRHbHZiaWh2WW1vc0lHNWhiV1VzSUd4dll5a2dlMXh1SUNBZ0lDQWdhV1lnS0NGdlltb2dmSHdnSVNodVlXMWxJR2x1SUc5aWFpa3BJSHRjYmlBZ0lDQWdJQ0FnZEdoeWIzY2dibVYzSUVWNFkyVndkR2x2YmlnblhDSW5JQ3NnYm1GdFpTQXJJQ2RjSWlCdWIzUWdaR1ZtYVc1bFpDQnBiaUFuSUNzZ2IySnFMQ0I3WEc0Z0lDQWdJQ0FnSUNBZ2JHOWpPaUJzYjJOY2JpQWdJQ0FnSUNBZ2ZTazdYRzRnSUNBZ0lDQjlYRzRnSUNBZ0lDQnlaWFIxY200Z1kyOXVkR0ZwYm1WeUxteHZiMnQxY0ZCeWIzQmxjblI1S0c5aWFpd2dibUZ0WlNrN1hHNGdJQ0FnZlN4Y2JpQWdJQ0JzYjI5cmRYQlFjbTl3WlhKMGVUb2dablZ1WTNScGIyNG9jR0Z5Wlc1MExDQndjbTl3WlhKMGVVNWhiV1VwSUh0Y2JpQWdJQ0FnSUd4bGRDQnlaWE4xYkhRZ1BTQndZWEpsYm5SYmNISnZjR1Z5ZEhsT1lXMWxYVHRjYmlBZ0lDQWdJR2xtSUNoeVpYTjFiSFFnUFQwZ2JuVnNiQ2tnZTF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnY21WemRXeDBPMXh1SUNBZ0lDQWdmVnh1SUNBZ0lDQWdhV1lnS0U5aWFtVmpkQzV3Y205MGIzUjVjR1V1YUdGelQzZHVVSEp2Y0dWeWRIa3VZMkZzYkNod1lYSmxiblFzSUhCeWIzQmxjblI1VG1GdFpTa3BJSHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSEpsYzNWc2REdGNiaUFnSUNBZ0lIMWNibHh1SUNBZ0lDQWdhV1lnS0hKbGMzVnNkRWx6UVd4c2IzZGxaQ2h5WlhOMWJIUXNJR052Ym5SaGFXNWxjaTV3Y205MGIwRmpZMlZ6YzBOdmJuUnliMndzSUhCeWIzQmxjblI1VG1GdFpTa3BJSHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSEpsYzNWc2REdGNiaUFnSUNBZ0lIMWNiaUFnSUNBZ0lISmxkSFZ5YmlCMWJtUmxabWx1WldRN1hHNGdJQ0FnZlN4Y2JpQWdJQ0JzYjI5cmRYQTZJR1oxYm1OMGFXOXVLR1JsY0hSb2N5d2dibUZ0WlNrZ2UxeHVJQ0FnSUNBZ1kyOXVjM1FnYkdWdUlEMGdaR1Z3ZEdoekxteGxibWQwYUR0Y2JpQWdJQ0FnSUdadmNpQW9iR1YwSUdrZ1BTQXdPeUJwSUR3Z2JHVnVPeUJwS3lzcElIdGNiaUFnSUNBZ0lDQWdiR1YwSUhKbGMzVnNkQ0E5SUdSbGNIUm9jMXRwWFNBbUppQmpiMjUwWVdsdVpYSXViRzl2YTNWd1VISnZjR1Z5ZEhrb1pHVndkR2h6VzJsZExDQnVZVzFsS1R0Y2JpQWdJQ0FnSUNBZ2FXWWdLSEpsYzNWc2RDQWhQU0J1ZFd4c0tTQjdYRzRnSUNBZ0lDQWdJQ0FnY21WMGRYSnVJR1JsY0hSb2MxdHBYVnR1WVcxbFhUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdmVnh1SUNBZ0lIMHNYRzRnSUNBZ2JHRnRZbVJoT2lCbWRXNWpkR2x2YmloamRYSnlaVzUwTENCamIyNTBaWGgwS1NCN1hHNGdJQ0FnSUNCeVpYUjFjbTRnZEhsd1pXOW1JR04xY25KbGJuUWdQVDA5SUNkbWRXNWpkR2x2YmljZ1B5QmpkWEp5Wlc1MExtTmhiR3dvWTI5dWRHVjRkQ2tnT2lCamRYSnlaVzUwTzF4dUlDQWdJSDBzWEc1Y2JpQWdJQ0JsYzJOaGNHVkZlSEJ5WlhOemFXOXVPaUJWZEdsc2N5NWxjMk5oY0dWRmVIQnlaWE56YVc5dUxGeHVJQ0FnSUdsdWRtOXJaVkJoY25ScFlXdzZJR2x1ZG05clpWQmhjblJwWVd4WGNtRndjR1Z5TEZ4dVhHNGdJQ0FnWm00NklHWjFibU4wYVc5dUtHa3BJSHRjYmlBZ0lDQWdJR3hsZENCeVpYUWdQU0IwWlcxd2JHRjBaVk53WldOYmFWMDdYRzRnSUNBZ0lDQnlaWFF1WkdWamIzSmhkRzl5SUQwZ2RHVnRjR3hoZEdWVGNHVmpXMmtnS3lBblgyUW5YVHRjYmlBZ0lDQWdJSEpsZEhWeWJpQnlaWFE3WEc0Z0lDQWdmU3hjYmx4dUlDQWdJSEJ5YjJkeVlXMXpPaUJiWFN4Y2JpQWdJQ0J3Y205bmNtRnRPaUJtZFc1amRHbHZiaWhwTENCa1lYUmhMQ0JrWldOc1lYSmxaRUpzYjJOclVHRnlZVzF6TENCaWJHOWphMUJoY21GdGN5d2daR1Z3ZEdoektTQjdYRzRnSUNBZ0lDQnNaWFFnY0hKdlozSmhiVmR5WVhCd1pYSWdQU0IwYUdsekxuQnliMmR5WVcxelcybGRMRnh1SUNBZ0lDQWdJQ0JtYmlBOUlIUm9hWE11Wm00b2FTazdYRzRnSUNBZ0lDQnBaaUFvWkdGMFlTQjhmQ0JrWlhCMGFITWdmSHdnWW14dlkydFFZWEpoYlhNZ2ZId2daR1ZqYkdGeVpXUkNiRzlqYTFCaGNtRnRjeWtnZTF4dUlDQWdJQ0FnSUNCd2NtOW5jbUZ0VjNKaGNIQmxjaUE5SUhkeVlYQlFjbTluY21GdEtGeHVJQ0FnSUNBZ0lDQWdJSFJvYVhNc1hHNGdJQ0FnSUNBZ0lDQWdhU3hjYmlBZ0lDQWdJQ0FnSUNCbWJpeGNiaUFnSUNBZ0lDQWdJQ0JrWVhSaExGeHVJQ0FnSUNBZ0lDQWdJR1JsWTJ4aGNtVmtRbXh2WTJ0UVlYSmhiWE1zWEc0Z0lDQWdJQ0FnSUNBZ1lteHZZMnRRWVhKaGJYTXNYRzRnSUNBZ0lDQWdJQ0FnWkdWd2RHaHpYRzRnSUNBZ0lDQWdJQ2s3WEc0Z0lDQWdJQ0I5SUdWc2MyVWdhV1lnS0NGd2NtOW5jbUZ0VjNKaGNIQmxjaWtnZTF4dUlDQWdJQ0FnSUNCd2NtOW5jbUZ0VjNKaGNIQmxjaUE5SUhSb2FYTXVjSEp2WjNKaGJYTmJhVjBnUFNCM2NtRndVSEp2WjNKaGJTaDBhR2x6TENCcExDQm1iaWs3WEc0Z0lDQWdJQ0I5WEc0Z0lDQWdJQ0J5WlhSMWNtNGdjSEp2WjNKaGJWZHlZWEJ3WlhJN1hHNGdJQ0FnZlN4Y2JseHVJQ0FnSUdSaGRHRTZJR1oxYm1OMGFXOXVLSFpoYkhWbExDQmtaWEIwYUNrZ2UxeHVJQ0FnSUNBZ2QyaHBiR1VnS0haaGJIVmxJQ1ltSUdSbGNIUm9MUzBwSUh0Y2JpQWdJQ0FnSUNBZ2RtRnNkV1VnUFNCMllXeDFaUzVmY0dGeVpXNTBPMXh1SUNBZ0lDQWdmVnh1SUNBZ0lDQWdjbVYwZFhKdUlIWmhiSFZsTzF4dUlDQWdJSDBzWEc0Z0lDQWdiV1Z5WjJWSlprNWxaV1JsWkRvZ1puVnVZM1JwYjI0b2NHRnlZVzBzSUdOdmJXMXZiaWtnZTF4dUlDQWdJQ0FnYkdWMElHOWlhaUE5SUhCaGNtRnRJSHg4SUdOdmJXMXZianRjYmx4dUlDQWdJQ0FnYVdZZ0tIQmhjbUZ0SUNZbUlHTnZiVzF2YmlBbUppQndZWEpoYlNBaFBUMGdZMjl0Ylc5dUtTQjdYRzRnSUNBZ0lDQWdJRzlpYWlBOUlGVjBhV3h6TG1WNGRHVnVaQ2g3ZlN3Z1kyOXRiVzl1TENCd1lYSmhiU2s3WEc0Z0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUhKbGRIVnliaUJ2WW1vN1hHNGdJQ0FnZlN4Y2JpQWdJQ0F2THlCQmJpQmxiWEIwZVNCdlltcGxZM1FnZEc4Z2RYTmxJR0Z6SUhKbGNHeGhZMlZ0Wlc1MElHWnZjaUJ1ZFd4c0xXTnZiblJsZUhSelhHNGdJQ0FnYm5Wc2JFTnZiblJsZUhRNklFOWlhbVZqZEM1elpXRnNLSHQ5S1N4Y2JseHVJQ0FnSUc1dmIzQTZJR1Z1ZGk1V1RTNXViMjl3TEZ4dUlDQWdJR052YlhCcGJHVnlTVzVtYnpvZ2RHVnRjR3hoZEdWVGNHVmpMbU52YlhCcGJHVnlYRzRnSUgwN1hHNWNiaUFnWm5WdVkzUnBiMjRnY21WMEtHTnZiblJsZUhRc0lHOXdkR2x2Ym5NZ1BTQjdmU2tnZTF4dUlDQWdJR3hsZENCa1lYUmhJRDBnYjNCMGFXOXVjeTVrWVhSaE8xeHVYRzRnSUNBZ2NtVjBMbDl6WlhSMWNDaHZjSFJwYjI1ektUdGNiaUFnSUNCcFppQW9JVzl3ZEdsdmJuTXVjR0Z5ZEdsaGJDQW1KaUIwWlcxd2JHRjBaVk53WldNdWRYTmxSR0YwWVNrZ2UxeHVJQ0FnSUNBZ1pHRjBZU0E5SUdsdWFYUkVZWFJoS0dOdmJuUmxlSFFzSUdSaGRHRXBPMXh1SUNBZ0lIMWNiaUFnSUNCc1pYUWdaR1Z3ZEdoekxGeHVJQ0FnSUNBZ1lteHZZMnRRWVhKaGJYTWdQU0IwWlcxd2JHRjBaVk53WldNdWRYTmxRbXh2WTJ0UVlYSmhiWE1nUHlCYlhTQTZJSFZ1WkdWbWFXNWxaRHRjYmlBZ0lDQnBaaUFvZEdWdGNHeGhkR1ZUY0dWakxuVnpaVVJsY0hSb2N5a2dlMXh1SUNBZ0lDQWdhV1lnS0c5d2RHbHZibk11WkdWd2RHaHpLU0I3WEc0Z0lDQWdJQ0FnSUdSbGNIUm9jeUE5WEc0Z0lDQWdJQ0FnSUNBZ1kyOXVkR1Y0ZENBaFBTQnZjSFJwYjI1ekxtUmxjSFJvYzFzd1hWeHVJQ0FnSUNBZ0lDQWdJQ0FnUHlCYlkyOXVkR1Y0ZEYwdVkyOXVZMkYwS0c5d2RHbHZibk11WkdWd2RHaHpLVnh1SUNBZ0lDQWdJQ0FnSUNBZ09pQnZjSFJwYjI1ekxtUmxjSFJvY3p0Y2JpQWdJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUdSbGNIUm9jeUE5SUZ0amIyNTBaWGgwWFR0Y2JpQWdJQ0FnSUgxY2JpQWdJQ0I5WEc1Y2JpQWdJQ0JtZFc1amRHbHZiaUJ0WVdsdUtHTnZiblJsZUhRZ0x5b3NJRzl3ZEdsdmJuTXFMeWtnZTF4dUlDQWdJQ0FnY21WMGRYSnVJQ2hjYmlBZ0lDQWdJQ0FnSnljZ0sxeHVJQ0FnSUNBZ0lDQjBaVzF3YkdGMFpWTndaV011YldGcGJpaGNiaUFnSUNBZ0lDQWdJQ0JqYjI1MFlXbHVaWElzWEc0Z0lDQWdJQ0FnSUNBZ1kyOXVkR1Y0ZEN4Y2JpQWdJQ0FnSUNBZ0lDQmpiMjUwWVdsdVpYSXVhR1ZzY0dWeWN5eGNiaUFnSUNBZ0lDQWdJQ0JqYjI1MFlXbHVaWEl1Y0dGeWRHbGhiSE1zWEc0Z0lDQWdJQ0FnSUNBZ1pHRjBZU3hjYmlBZ0lDQWdJQ0FnSUNCaWJHOWphMUJoY21GdGN5eGNiaUFnSUNBZ0lDQWdJQ0JrWlhCMGFITmNiaUFnSUNBZ0lDQWdLVnh1SUNBZ0lDQWdLVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQnRZV2x1SUQwZ1pYaGxZM1YwWlVSbFkyOXlZWFJ2Y25Nb1hHNGdJQ0FnSUNCMFpXMXdiR0YwWlZOd1pXTXViV0ZwYml4Y2JpQWdJQ0FnSUcxaGFXNHNYRzRnSUNBZ0lDQmpiMjUwWVdsdVpYSXNYRzRnSUNBZ0lDQnZjSFJwYjI1ekxtUmxjSFJvY3lCOGZDQmJYU3hjYmlBZ0lDQWdJR1JoZEdFc1hHNGdJQ0FnSUNCaWJHOWphMUJoY21GdGMxeHVJQ0FnSUNrN1hHNGdJQ0FnY21WMGRYSnVJRzFoYVc0b1kyOXVkR1Y0ZEN3Z2IzQjBhVzl1Y3lrN1hHNGdJSDFjYmx4dUlDQnlaWFF1YVhOVWIzQWdQU0IwY25WbE8xeHVYRzRnSUhKbGRDNWZjMlYwZFhBZ1BTQm1kVzVqZEdsdmJpaHZjSFJwYjI1ektTQjdYRzRnSUNBZ2FXWWdLQ0Z2Y0hScGIyNXpMbkJoY25ScFlXd3BJSHRjYmlBZ0lDQWdJR3hsZENCdFpYSm5aV1JJWld4d1pYSnpJRDBnVlhScGJITXVaWGgwWlc1a0tIdDlMQ0JsYm5ZdWFHVnNjR1Z5Y3l3Z2IzQjBhVzl1Y3k1b1pXeHdaWEp6S1R0Y2JpQWdJQ0FnSUhkeVlYQklaV3h3WlhKelZHOVFZWE56VEc5dmEzVndVSEp2Y0dWeWRIa29iV1Z5WjJWa1NHVnNjR1Z5Y3l3Z1kyOXVkR0ZwYm1WeUtUdGNiaUFnSUNBZ0lHTnZiblJoYVc1bGNpNW9aV3h3WlhKeklEMGdiV1Z5WjJWa1NHVnNjR1Z5Y3p0Y2JseHVJQ0FnSUNBZ2FXWWdLSFJsYlhCc1lYUmxVM0JsWXk1MWMyVlFZWEowYVdGc0tTQjdYRzRnSUNBZ0lDQWdJQzh2SUZWelpTQnRaWEpuWlVsbVRtVmxaR1ZrSUdobGNtVWdkRzhnY0hKbGRtVnVkQ0JqYjIxd2FXeHBibWNnWjJ4dlltRnNJSEJoY25ScFlXeHpJRzExYkhScGNHeGxJSFJwYldWelhHNGdJQ0FnSUNBZ0lHTnZiblJoYVc1bGNpNXdZWEowYVdGc2N5QTlJR052Ym5SaGFXNWxjaTV0WlhKblpVbG1UbVZsWkdWa0tGeHVJQ0FnSUNBZ0lDQWdJRzl3ZEdsdmJuTXVjR0Z5ZEdsaGJITXNYRzRnSUNBZ0lDQWdJQ0FnWlc1MkxuQmhjblJwWVd4elhHNGdJQ0FnSUNBZ0lDazdYRzRnSUNBZ0lDQjlYRzRnSUNBZ0lDQnBaaUFvZEdWdGNHeGhkR1ZUY0dWakxuVnpaVkJoY25ScFlXd2dmSHdnZEdWdGNHeGhkR1ZUY0dWakxuVnpaVVJsWTI5eVlYUnZjbk1wSUh0Y2JpQWdJQ0FnSUNBZ1kyOXVkR0ZwYm1WeUxtUmxZMjl5WVhSdmNuTWdQU0JWZEdsc2N5NWxlSFJsYm1Rb1hHNGdJQ0FnSUNBZ0lDQWdlMzBzWEc0Z0lDQWdJQ0FnSUNBZ1pXNTJMbVJsWTI5eVlYUnZjbk1zWEc0Z0lDQWdJQ0FnSUNBZ2IzQjBhVzl1Y3k1a1pXTnZjbUYwYjNKelhHNGdJQ0FnSUNBZ0lDazdYRzRnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJR052Ym5SaGFXNWxjaTVvYjI5cmN5QTlJSHQ5TzF4dUlDQWdJQ0FnWTI5dWRHRnBibVZ5TG5CeWIzUnZRV05qWlhOelEyOXVkSEp2YkNBOUlHTnlaV0YwWlZCeWIzUnZRV05qWlhOelEyOXVkSEp2YkNodmNIUnBiMjV6S1R0Y2JseHVJQ0FnSUNBZ2JHVjBJR3RsWlhCSVpXeHdaWEpKYmtobGJIQmxjbk1nUFZ4dUlDQWdJQ0FnSUNCdmNIUnBiMjV6TG1Gc2JHOTNRMkZzYkhOVWIwaGxiSEJsY2sxcGMzTnBibWNnZkh4Y2JpQWdJQ0FnSUNBZ2RHVnRjR3hoZEdWWFlYTlFjbVZqYjIxd2FXeGxaRmRwZEdoRGIyMXdhV3hsY2xZM08xeHVJQ0FnSUNBZ2JXOTJaVWhsYkhCbGNsUnZTRzl2YTNNb1kyOXVkR0ZwYm1WeUxDQW5hR1ZzY0dWeVRXbHpjMmx1Wnljc0lHdGxaWEJJWld4d1pYSkpia2hsYkhCbGNuTXBPMXh1SUNBZ0lDQWdiVzkyWlVobGJIQmxjbFJ2U0c5dmEzTW9ZMjl1ZEdGcGJtVnlMQ0FuWW14dlkydElaV3h3WlhKTmFYTnphVzVuSnl3Z2EyVmxjRWhsYkhCbGNrbHVTR1ZzY0dWeWN5azdYRzRnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUdOdmJuUmhhVzVsY2k1d2NtOTBiMEZqWTJWemMwTnZiblJ5YjJ3Z1BTQnZjSFJwYjI1ekxuQnliM1J2UVdOalpYTnpRMjl1ZEhKdmJEc2dMeThnYVc1MFpYSnVZV3dnYjNCMGFXOXVYRzRnSUNBZ0lDQmpiMjUwWVdsdVpYSXVhR1ZzY0dWeWN5QTlJRzl3ZEdsdmJuTXVhR1ZzY0dWeWN6dGNiaUFnSUNBZ0lHTnZiblJoYVc1bGNpNXdZWEowYVdGc2N5QTlJRzl3ZEdsdmJuTXVjR0Z5ZEdsaGJITTdYRzRnSUNBZ0lDQmpiMjUwWVdsdVpYSXVaR1ZqYjNKaGRHOXljeUE5SUc5d2RHbHZibk11WkdWamIzSmhkRzl5Y3p0Y2JpQWdJQ0FnSUdOdmJuUmhhVzVsY2k1b2IyOXJjeUE5SUc5d2RHbHZibk11YUc5dmEzTTdYRzRnSUNBZ2ZWeHVJQ0I5TzF4dVhHNGdJSEpsZEM1ZlkyaHBiR1FnUFNCbWRXNWpkR2x2YmlocExDQmtZWFJoTENCaWJHOWphMUJoY21GdGN5d2daR1Z3ZEdoektTQjdYRzRnSUNBZ2FXWWdLSFJsYlhCc1lYUmxVM0JsWXk1MWMyVkNiRzlqYTFCaGNtRnRjeUFtSmlBaFlteHZZMnRRWVhKaGJYTXBJSHRjYmlBZ0lDQWdJSFJvY205M0lHNWxkeUJGZUdObGNIUnBiMjRvSjIxMWMzUWdjR0Z6Y3lCaWJHOWpheUJ3WVhKaGJYTW5LVHRjYmlBZ0lDQjlYRzRnSUNBZ2FXWWdLSFJsYlhCc1lYUmxVM0JsWXk1MWMyVkVaWEIwYUhNZ0ppWWdJV1JsY0hSb2N5a2dlMXh1SUNBZ0lDQWdkR2h5YjNjZ2JtVjNJRVY0WTJWd2RHbHZiaWduYlhWemRDQndZWE56SUhCaGNtVnVkQ0JrWlhCMGFITW5LVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQnlaWFIxY200Z2QzSmhjRkJ5YjJkeVlXMG9YRzRnSUNBZ0lDQmpiMjUwWVdsdVpYSXNYRzRnSUNBZ0lDQnBMRnh1SUNBZ0lDQWdkR1Z0Y0d4aGRHVlRjR1ZqVzJsZExGeHVJQ0FnSUNBZ1pHRjBZU3hjYmlBZ0lDQWdJREFzWEc0Z0lDQWdJQ0JpYkc5amExQmhjbUZ0Y3l4Y2JpQWdJQ0FnSUdSbGNIUm9jMXh1SUNBZ0lDazdYRzRnSUgwN1hHNGdJSEpsZEhWeWJpQnlaWFE3WEc1OVhHNWNibVY0Y0c5eWRDQm1kVzVqZEdsdmJpQjNjbUZ3VUhKdlozSmhiU2hjYmlBZ1kyOXVkR0ZwYm1WeUxGeHVJQ0JwTEZ4dUlDQm1iaXhjYmlBZ1pHRjBZU3hjYmlBZ1pHVmpiR0Z5WldSQ2JHOWphMUJoY21GdGN5eGNiaUFnWW14dlkydFFZWEpoYlhNc1hHNGdJR1JsY0hSb2MxeHVLU0I3WEc0Z0lHWjFibU4wYVc5dUlIQnliMmNvWTI5dWRHVjRkQ3dnYjNCMGFXOXVjeUE5SUh0OUtTQjdYRzRnSUNBZ2JHVjBJR04xY25KbGJuUkVaWEIwYUhNZ1BTQmtaWEIwYUhNN1hHNGdJQ0FnYVdZZ0tGeHVJQ0FnSUNBZ1pHVndkR2h6SUNZbVhHNGdJQ0FnSUNCamIyNTBaWGgwSUNFOUlHUmxjSFJvYzFzd1hTQW1KbHh1SUNBZ0lDQWdJU2hqYjI1MFpYaDBJRDA5UFNCamIyNTBZV2x1WlhJdWJuVnNiRU52Ym5SbGVIUWdKaVlnWkdWd2RHaHpXekJkSUQwOVBTQnVkV3hzS1Z4dUlDQWdJQ2tnZTF4dUlDQWdJQ0FnWTNWeWNtVnVkRVJsY0hSb2N5QTlJRnRqYjI1MFpYaDBYUzVqYjI1allYUW9aR1Z3ZEdoektUdGNiaUFnSUNCOVhHNWNiaUFnSUNCeVpYUjFjbTRnWm00b1hHNGdJQ0FnSUNCamIyNTBZV2x1WlhJc1hHNGdJQ0FnSUNCamIyNTBaWGgwTEZ4dUlDQWdJQ0FnWTI5dWRHRnBibVZ5TG1obGJIQmxjbk1zWEc0Z0lDQWdJQ0JqYjI1MFlXbHVaWEl1Y0dGeWRHbGhiSE1zWEc0Z0lDQWdJQ0J2Y0hScGIyNXpMbVJoZEdFZ2ZId2daR0YwWVN4Y2JpQWdJQ0FnSUdKc2IyTnJVR0Z5WVcxeklDWW1JRnR2Y0hScGIyNXpMbUpzYjJOclVHRnlZVzF6WFM1amIyNWpZWFFvWW14dlkydFFZWEpoYlhNcExGeHVJQ0FnSUNBZ1kzVnljbVZ1ZEVSbGNIUm9jMXh1SUNBZ0lDazdYRzRnSUgxY2JseHVJQ0J3Y205bklEMGdaWGhsWTNWMFpVUmxZMjl5WVhSdmNuTW9abTRzSUhCeWIyY3NJR052Ym5SaGFXNWxjaXdnWkdWd2RHaHpMQ0JrWVhSaExDQmliRzlqYTFCaGNtRnRjeWs3WEc1Y2JpQWdjSEp2Wnk1d2NtOW5jbUZ0SUQwZ2FUdGNiaUFnY0hKdlp5NWtaWEIwYUNBOUlHUmxjSFJvY3lBL0lHUmxjSFJvY3k1c1pXNW5kR2dnT2lBd08xeHVJQ0J3Y205bkxtSnNiMk5yVUdGeVlXMXpJRDBnWkdWamJHRnlaV1JDYkc5amExQmhjbUZ0Y3lCOGZDQXdPMXh1SUNCeVpYUjFjbTRnY0hKdlp6dGNibjFjYmx4dUx5b3FYRzRnS2lCVWFHbHpJR2x6SUdOMWNuSmxiblJzZVNCd1lYSjBJRzltSUhSb1pTQnZabVpwWTJsaGJDQkJVRWtzSUhSb1pYSmxabTl5WlNCcGJYQnNaVzFsYm5SaGRHbHZiaUJrWlhSaGFXeHpJSE5vYjNWc1pDQnViM1FnWW1VZ1kyaGhibWRsWkM1Y2JpQXFMMXh1Wlhod2IzSjBJR1oxYm1OMGFXOXVJSEpsYzI5c2RtVlFZWEowYVdGc0tIQmhjblJwWVd3c0lHTnZiblJsZUhRc0lHOXdkR2x2Ym5NcElIdGNiaUFnYVdZZ0tDRndZWEowYVdGc0tTQjdYRzRnSUNBZ2FXWWdLRzl3ZEdsdmJuTXVibUZ0WlNBOVBUMGdKMEJ3WVhKMGFXRnNMV0pzYjJOckp5a2dlMXh1SUNBZ0lDQWdjR0Z5ZEdsaGJDQTlJRzl3ZEdsdmJuTXVaR0YwWVZzbmNHRnlkR2xoYkMxaWJHOWpheWRkTzF4dUlDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQndZWEowYVdGc0lEMGdiM0IwYVc5dWN5NXdZWEowYVdGc2MxdHZjSFJwYjI1ekxtNWhiV1ZkTzF4dUlDQWdJSDFjYmlBZ2ZTQmxiSE5sSUdsbUlDZ2hjR0Z5ZEdsaGJDNWpZV3hzSUNZbUlDRnZjSFJwYjI1ekxtNWhiV1VwSUh0Y2JpQWdJQ0F2THlCVWFHbHpJR2x6SUdFZ1pIbHVZVzFwWXlCd1lYSjBhV0ZzSUhSb1lYUWdjbVYwZFhKdVpXUWdZU0J6ZEhKcGJtZGNiaUFnSUNCdmNIUnBiMjV6TG01aGJXVWdQU0J3WVhKMGFXRnNPMXh1SUNBZ0lIQmhjblJwWVd3Z1BTQnZjSFJwYjI1ekxuQmhjblJwWVd4elczQmhjblJwWVd4ZE8xeHVJQ0I5WEc0Z0lISmxkSFZ5YmlCd1lYSjBhV0ZzTzF4dWZWeHVYRzVsZUhCdmNuUWdablZ1WTNScGIyNGdhVzUyYjJ0bFVHRnlkR2xoYkNod1lYSjBhV0ZzTENCamIyNTBaWGgwTENCdmNIUnBiMjV6S1NCN1hHNGdJQzh2SUZWelpTQjBhR1VnWTNWeWNtVnVkQ0JqYkc5emRYSmxJR052Ym5SbGVIUWdkRzhnYzJGMlpTQjBhR1VnY0dGeWRHbGhiQzFpYkc5amF5QnBaaUIwYUdseklIQmhjblJwWVd4Y2JpQWdZMjl1YzNRZ1kzVnljbVZ1ZEZCaGNuUnBZV3hDYkc5amF5QTlJRzl3ZEdsdmJuTXVaR0YwWVNBbUppQnZjSFJwYjI1ekxtUmhkR0ZiSjNCaGNuUnBZV3d0WW14dlkyc25YVHRjYmlBZ2IzQjBhVzl1Y3k1d1lYSjBhV0ZzSUQwZ2RISjFaVHRjYmlBZ2FXWWdLRzl3ZEdsdmJuTXVhV1J6S1NCN1hHNGdJQ0FnYjNCMGFXOXVjeTVrWVhSaExtTnZiblJsZUhSUVlYUm9JRDBnYjNCMGFXOXVjeTVwWkhOYk1GMGdmSHdnYjNCMGFXOXVjeTVrWVhSaExtTnZiblJsZUhSUVlYUm9PMXh1SUNCOVhHNWNiaUFnYkdWMElIQmhjblJwWVd4Q2JHOWphenRjYmlBZ2FXWWdLRzl3ZEdsdmJuTXVabTRnSmlZZ2IzQjBhVzl1Y3k1bWJpQWhQVDBnYm05dmNDa2dlMXh1SUNBZ0lHOXdkR2x2Ym5NdVpHRjBZU0E5SUdOeVpXRjBaVVp5WVcxbEtHOXdkR2x2Ym5NdVpHRjBZU2s3WEc0Z0lDQWdMeThnVjNKaGNIQmxjaUJtZFc1amRHbHZiaUIwYnlCblpYUWdZV05qWlhOeklIUnZJR04xY25KbGJuUlFZWEowYVdGc1FteHZZMnNnWm5KdmJTQjBhR1VnWTJ4dmMzVnlaVnh1SUNBZ0lHeGxkQ0JtYmlBOUlHOXdkR2x2Ym5NdVptNDdYRzRnSUNBZ2NHRnlkR2xoYkVKc2IyTnJJRDBnYjNCMGFXOXVjeTVrWVhSaFd5ZHdZWEowYVdGc0xXSnNiMk5ySjEwZ1BTQm1kVzVqZEdsdmJpQndZWEowYVdGc1FteHZZMnRYY21Gd2NHVnlLRnh1SUNBZ0lDQWdZMjl1ZEdWNGRDeGNiaUFnSUNBZ0lHOXdkR2x2Ym5NZ1BTQjdmVnh1SUNBZ0lDa2dlMXh1SUNBZ0lDQWdMeThnVW1WemRHOXlaU0IwYUdVZ2NHRnlkR2xoYkMxaWJHOWpheUJtY205dElIUm9aU0JqYkc5emRYSmxJR1p2Y2lCMGFHVWdaWGhsWTNWMGFXOXVJRzltSUhSb1pTQmliRzlqYTF4dUlDQWdJQ0FnTHk4Z2FTNWxMaUIwYUdVZ2NHRnlkQ0JwYm5OcFpHVWdkR2hsSUdKc2IyTnJJRzltSUhSb1pTQndZWEowYVdGc0lHTmhiR3d1WEc0Z0lDQWdJQ0J2Y0hScGIyNXpMbVJoZEdFZ1BTQmpjbVZoZEdWR2NtRnRaU2h2Y0hScGIyNXpMbVJoZEdFcE8xeHVJQ0FnSUNBZ2IzQjBhVzl1Y3k1a1lYUmhXeWR3WVhKMGFXRnNMV0pzYjJOckoxMGdQU0JqZFhKeVpXNTBVR0Z5ZEdsaGJFSnNiMk5yTzF4dUlDQWdJQ0FnY21WMGRYSnVJR1p1S0dOdmJuUmxlSFFzSUc5d2RHbHZibk1wTzF4dUlDQWdJSDA3WEc0Z0lDQWdhV1lnS0dadUxuQmhjblJwWVd4ektTQjdYRzRnSUNBZ0lDQnZjSFJwYjI1ekxuQmhjblJwWVd4eklEMGdWWFJwYkhNdVpYaDBaVzVrS0h0OUxDQnZjSFJwYjI1ekxuQmhjblJwWVd4ekxDQm1iaTV3WVhKMGFXRnNjeWs3WEc0Z0lDQWdmVnh1SUNCOVhHNWNiaUFnYVdZZ0tIQmhjblJwWVd3Z1BUMDlJSFZ1WkdWbWFXNWxaQ0FtSmlCd1lYSjBhV0ZzUW14dlkyc3BJSHRjYmlBZ0lDQndZWEowYVdGc0lEMGdjR0Z5ZEdsaGJFSnNiMk5yTzF4dUlDQjlYRzVjYmlBZ2FXWWdLSEJoY25ScFlXd2dQVDA5SUhWdVpHVm1hVzVsWkNrZ2UxeHVJQ0FnSUhSb2NtOTNJRzVsZHlCRmVHTmxjSFJwYjI0b0oxUm9aU0J3WVhKMGFXRnNJQ2NnS3lCdmNIUnBiMjV6TG01aGJXVWdLeUFuSUdOdmRXeGtJRzV2ZENCaVpTQm1iM1Z1WkNjcE8xeHVJQ0I5SUdWc2MyVWdhV1lnS0hCaGNuUnBZV3dnYVc1emRHRnVZMlZ2WmlCR2RXNWpkR2x2YmlrZ2UxeHVJQ0FnSUhKbGRIVnliaUJ3WVhKMGFXRnNLR052Ym5SbGVIUXNJRzl3ZEdsdmJuTXBPMXh1SUNCOVhHNTlYRzVjYm1WNGNHOXlkQ0JtZFc1amRHbHZiaUJ1YjI5d0tDa2dlMXh1SUNCeVpYUjFjbTRnSnljN1hHNTlYRzVjYm1aMWJtTjBhVzl1SUdsdWFYUkVZWFJoS0dOdmJuUmxlSFFzSUdSaGRHRXBJSHRjYmlBZ2FXWWdLQ0ZrWVhSaElIeDhJQ0VvSjNKdmIzUW5JR2x1SUdSaGRHRXBLU0I3WEc0Z0lDQWdaR0YwWVNBOUlHUmhkR0VnUHlCamNtVmhkR1ZHY21GdFpTaGtZWFJoS1NBNklIdDlPMXh1SUNBZ0lHUmhkR0V1Y205dmRDQTlJR052Ym5SbGVIUTdYRzRnSUgxY2JpQWdjbVYwZFhKdUlHUmhkR0U3WEc1OVhHNWNibVoxYm1OMGFXOXVJR1Y0WldOMWRHVkVaV052Y21GMGIzSnpLR1p1TENCd2NtOW5MQ0JqYjI1MFlXbHVaWElzSUdSbGNIUm9jeXdnWkdGMFlTd2dZbXh2WTJ0UVlYSmhiWE1wSUh0Y2JpQWdhV1lnS0dadUxtUmxZMjl5WVhSdmNpa2dlMXh1SUNBZ0lHeGxkQ0J3Y205d2N5QTlJSHQ5TzF4dUlDQWdJSEJ5YjJjZ1BTQm1iaTVrWldOdmNtRjBiM0lvWEc0Z0lDQWdJQ0J3Y205bkxGeHVJQ0FnSUNBZ2NISnZjSE1zWEc0Z0lDQWdJQ0JqYjI1MFlXbHVaWElzWEc0Z0lDQWdJQ0JrWlhCMGFITWdKaVlnWkdWd2RHaHpXekJkTEZ4dUlDQWdJQ0FnWkdGMFlTeGNiaUFnSUNBZ0lHSnNiMk5yVUdGeVlXMXpMRnh1SUNBZ0lDQWdaR1Z3ZEdoelhHNGdJQ0FnS1R0Y2JpQWdJQ0JWZEdsc2N5NWxlSFJsYm1Rb2NISnZaeXdnY0hKdmNITXBPMXh1SUNCOVhHNGdJSEpsZEhWeWJpQndjbTluTzF4dWZWeHVYRzVtZFc1amRHbHZiaUIzY21Gd1NHVnNjR1Z5YzFSdlVHRnpjMHh2YjJ0MWNGQnliM0JsY25SNUtHMWxjbWRsWkVobGJIQmxjbk1zSUdOdmJuUmhhVzVsY2lrZ2UxeHVJQ0JQWW1wbFkzUXVhMlY1Y3lodFpYSm5aV1JJWld4d1pYSnpLUzVtYjNKRllXTm9LR2hsYkhCbGNrNWhiV1VnUFQ0Z2UxeHVJQ0FnSUd4bGRDQm9aV3h3WlhJZ1BTQnRaWEpuWldSSVpXeHdaWEp6VzJobGJIQmxjazVoYldWZE8xeHVJQ0FnSUcxbGNtZGxaRWhsYkhCbGNuTmJhR1ZzY0dWeVRtRnRaVjBnUFNCd1lYTnpURzl2YTNWd1VISnZjR1Z5ZEhsUGNIUnBiMjRvYUdWc2NHVnlMQ0JqYjI1MFlXbHVaWElwTzF4dUlDQjlLVHRjYm4xY2JseHVablZ1WTNScGIyNGdjR0Z6YzB4dmIydDFjRkJ5YjNCbGNuUjVUM0IwYVc5dUtHaGxiSEJsY2l3Z1kyOXVkR0ZwYm1WeUtTQjdYRzRnSUdOdmJuTjBJR3h2YjJ0MWNGQnliM0JsY25SNUlEMGdZMjl1ZEdGcGJtVnlMbXh2YjJ0MWNGQnliM0JsY25SNU8xeHVJQ0J5WlhSMWNtNGdkM0poY0VobGJIQmxjaWhvWld4d1pYSXNJRzl3ZEdsdmJuTWdQVDRnZTF4dUlDQWdJSEpsZEhWeWJpQlZkR2xzY3k1bGVIUmxibVFvZXlCc2IyOXJkWEJRY205d1pYSjBlU0I5TENCdmNIUnBiMjV6S1R0Y2JpQWdmU2s3WEc1OVhHNGlYWDA9XG4iLCIvLyBCdWlsZCBvdXQgb3VyIGJhc2ljIFNhZmVTdHJpbmcgdHlwZVxuJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZnVuY3Rpb24gU2FmZVN0cmluZyhzdHJpbmcpIHtcbiAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG59XG5cblNhZmVTdHJpbmcucHJvdG90eXBlLnRvU3RyaW5nID0gU2FmZVN0cmluZy5wcm90b3R5cGUudG9IVE1MID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gJycgKyB0aGlzLnN0cmluZztcbn07XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IFNhZmVTdHJpbmc7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYklpNHVMeTR1THk0dUwyeHBZaTlvWVc1a2JHVmlZWEp6TDNOaFptVXRjM1J5YVc1bkxtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3UVVGRFFTeFRRVUZUTEZWQlFWVXNRMEZCUXl4TlFVRk5MRVZCUVVVN1FVRkRNVUlzVFVGQlNTeERRVUZETEUxQlFVMHNSMEZCUnl4TlFVRk5MRU5CUVVNN1EwRkRkRUk3TzBGQlJVUXNWVUZCVlN4RFFVRkRMRk5CUVZNc1EwRkJReXhSUVVGUkxFZEJRVWNzVlVGQlZTeERRVUZETEZOQlFWTXNRMEZCUXl4TlFVRk5MRWRCUVVjc1dVRkJWenRCUVVOMlJTeFRRVUZQTEVWQlFVVXNSMEZCUnl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRE8wTkJRM3BDTEVOQlFVTTdPM0ZDUVVWaExGVkJRVlVpTENKbWFXeGxJam9pYzJGbVpTMXpkSEpwYm1jdWFuTWlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUl2THlCQ2RXbHNaQ0J2ZFhRZ2IzVnlJR0poYzJsaklGTmhabVZUZEhKcGJtY2dkSGx3WlZ4dVpuVnVZM1JwYjI0Z1UyRm1aVk4wY21sdVp5aHpkSEpwYm1jcElIdGNiaUFnZEdocGN5NXpkSEpwYm1jZ1BTQnpkSEpwYm1jN1hHNTlYRzVjYmxOaFptVlRkSEpwYm1jdWNISnZkRzkwZVhCbExuUnZVM1J5YVc1bklEMGdVMkZtWlZOMGNtbHVaeTV3Y205MGIzUjVjR1V1ZEc5SVZFMU1JRDBnWm5WdVkzUnBiMjRvS1NCN1hHNGdJSEpsZEhWeWJpQW5KeUFySUhSb2FYTXVjM1J5YVc1bk8xeHVmVHRjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnVTJGbVpWTjBjbWx1Wnp0Y2JpSmRmUT09XG4iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmV4dGVuZCA9IGV4dGVuZDtcbmV4cG9ydHMuaW5kZXhPZiA9IGluZGV4T2Y7XG5leHBvcnRzLmVzY2FwZUV4cHJlc3Npb24gPSBlc2NhcGVFeHByZXNzaW9uO1xuZXhwb3J0cy5pc0VtcHR5ID0gaXNFbXB0eTtcbmV4cG9ydHMuY3JlYXRlRnJhbWUgPSBjcmVhdGVGcmFtZTtcbmV4cG9ydHMuYmxvY2tQYXJhbXMgPSBibG9ja1BhcmFtcztcbmV4cG9ydHMuYXBwZW5kQ29udGV4dFBhdGggPSBhcHBlbmRDb250ZXh0UGF0aDtcbnZhciBlc2NhcGUgPSB7XG4gICcmJzogJyZhbXA7JyxcbiAgJzwnOiAnJmx0OycsXG4gICc+JzogJyZndDsnLFxuICAnXCInOiAnJnF1b3Q7JyxcbiAgXCInXCI6ICcmI3gyNzsnLFxuICAnYCc6ICcmI3g2MDsnLFxuICAnPSc6ICcmI3gzRDsnXG59O1xuXG52YXIgYmFkQ2hhcnMgPSAvWyY8PlwiJ2A9XS9nLFxuICAgIHBvc3NpYmxlID0gL1smPD5cIidgPV0vO1xuXG5mdW5jdGlvbiBlc2NhcGVDaGFyKGNocikge1xuICByZXR1cm4gZXNjYXBlW2Nocl07XG59XG5cbmZ1bmN0aW9uIGV4dGVuZChvYmogLyogLCAuLi5zb3VyY2UgKi8pIHtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gYXJndW1lbnRzW2ldKSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGFyZ3VtZW50c1tpXSwga2V5KSkge1xuICAgICAgICBvYmpba2V5XSA9IGFyZ3VtZW50c1tpXVtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbnZhciB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cbmV4cG9ydHMudG9TdHJpbmcgPSB0b1N0cmluZztcbi8vIFNvdXJjZWQgZnJvbSBsb2Rhc2hcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9iZXN0aWVqcy9sb2Rhc2gvYmxvYi9tYXN0ZXIvTElDRU5TRS50eHRcbi8qIGVzbGludC1kaXNhYmxlIGZ1bmMtc3R5bGUgKi9cbnZhciBpc0Z1bmN0aW9uID0gZnVuY3Rpb24gaXNGdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nO1xufTtcbi8vIGZhbGxiYWNrIGZvciBvbGRlciB2ZXJzaW9ucyBvZiBDaHJvbWUgYW5kIFNhZmFyaVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmlmIChpc0Z1bmN0aW9uKC94LykpIHtcbiAgZXhwb3J0cy5pc0Z1bmN0aW9uID0gaXNGdW5jdGlvbiA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicgJiYgdG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG4gIH07XG59XG5leHBvcnRzLmlzRnVuY3Rpb24gPSBpc0Z1bmN0aW9uO1xuXG4vKiBlc2xpbnQtZW5hYmxlIGZ1bmMtc3R5bGUgKi9cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgPyB0b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgQXJyYXldJyA6IGZhbHNlO1xufTtcblxuZXhwb3J0cy5pc0FycmF5ID0gaXNBcnJheTtcbi8vIE9sZGVyIElFIHZlcnNpb25zIGRvIG5vdCBkaXJlY3RseSBzdXBwb3J0IGluZGV4T2Ygc28gd2UgbXVzdCBpbXBsZW1lbnQgb3VyIG93biwgc2FkbHkuXG5cbmZ1bmN0aW9uIGluZGV4T2YoYXJyYXksIHZhbHVlKSB7XG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBhcnJheS5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGlmIChhcnJheVtpXSA9PT0gdmFsdWUpIHtcbiAgICAgIHJldHVybiBpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gLTE7XG59XG5cbmZ1bmN0aW9uIGVzY2FwZUV4cHJlc3Npb24oc3RyaW5nKSB7XG4gIGlmICh0eXBlb2Ygc3RyaW5nICE9PSAnc3RyaW5nJykge1xuICAgIC8vIGRvbid0IGVzY2FwZSBTYWZlU3RyaW5ncywgc2luY2UgdGhleSdyZSBhbHJlYWR5IHNhZmVcbiAgICBpZiAoc3RyaW5nICYmIHN0cmluZy50b0hUTUwpIHtcbiAgICAgIHJldHVybiBzdHJpbmcudG9IVE1MKCk7XG4gICAgfSBlbHNlIGlmIChzdHJpbmcgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH0gZWxzZSBpZiAoIXN0cmluZykge1xuICAgICAgcmV0dXJuIHN0cmluZyArICcnO1xuICAgIH1cblxuICAgIC8vIEZvcmNlIGEgc3RyaW5nIGNvbnZlcnNpb24gYXMgdGhpcyB3aWxsIGJlIGRvbmUgYnkgdGhlIGFwcGVuZCByZWdhcmRsZXNzIGFuZFxuICAgIC8vIHRoZSByZWdleCB0ZXN0IHdpbGwgZG8gdGhpcyB0cmFuc3BhcmVudGx5IGJlaGluZCB0aGUgc2NlbmVzLCBjYXVzaW5nIGlzc3VlcyBpZlxuICAgIC8vIGFuIG9iamVjdCdzIHRvIHN0cmluZyBoYXMgZXNjYXBlZCBjaGFyYWN0ZXJzIGluIGl0LlxuICAgIHN0cmluZyA9ICcnICsgc3RyaW5nO1xuICB9XG5cbiAgaWYgKCFwb3NzaWJsZS50ZXN0KHN0cmluZykpIHtcbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG4gIHJldHVybiBzdHJpbmcucmVwbGFjZShiYWRDaGFycywgZXNjYXBlQ2hhcik7XG59XG5cbmZ1bmN0aW9uIGlzRW1wdHkodmFsdWUpIHtcbiAgaWYgKCF2YWx1ZSAmJiB2YWx1ZSAhPT0gMCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2UgaWYgKGlzQXJyYXkodmFsdWUpICYmIHZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVGcmFtZShvYmplY3QpIHtcbiAgdmFyIGZyYW1lID0gZXh0ZW5kKHt9LCBvYmplY3QpO1xuICBmcmFtZS5fcGFyZW50ID0gb2JqZWN0O1xuICByZXR1cm4gZnJhbWU7XG59XG5cbmZ1bmN0aW9uIGJsb2NrUGFyYW1zKHBhcmFtcywgaWRzKSB7XG4gIHBhcmFtcy5wYXRoID0gaWRzO1xuICByZXR1cm4gcGFyYW1zO1xufVxuXG5mdW5jdGlvbiBhcHBlbmRDb250ZXh0UGF0aChjb250ZXh0UGF0aCwgaWQpIHtcbiAgcmV0dXJuIChjb250ZXh0UGF0aCA/IGNvbnRleHRQYXRoICsgJy4nIDogJycpICsgaWQ7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUx5NHVMMnhwWWk5b1lXNWtiR1ZpWVhKekwzVjBhV3h6TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdPenM3T3pzN1FVRkJRU3hKUVVGTkxFMUJRVTBzUjBGQlJ6dEJRVU5pTEV0QlFVY3NSVUZCUlN4UFFVRlBPMEZCUTFvc1MwRkJSeXhGUVVGRkxFMUJRVTA3UVVGRFdDeExRVUZITEVWQlFVVXNUVUZCVFR0QlFVTllMRXRCUVVjc1JVRkJSU3hSUVVGUk8wRkJRMklzUzBGQlJ5eEZRVUZGTEZGQlFWRTdRVUZEWWl4TFFVRkhMRVZCUVVVc1VVRkJVVHRCUVVOaUxFdEJRVWNzUlVGQlJTeFJRVUZSTzBOQlEyUXNRMEZCUXpzN1FVRkZSaXhKUVVGTkxGRkJRVkVzUjBGQlJ5eFpRVUZaTzBsQlF6TkNMRkZCUVZFc1IwRkJSeXhYUVVGWExFTkJRVU03TzBGQlJYcENMRk5CUVZNc1ZVRkJWU3hEUVVGRExFZEJRVWNzUlVGQlJUdEJRVU4yUWl4VFFVRlBMRTFCUVUwc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dERRVU53UWpzN1FVRkZUU3hUUVVGVExFMUJRVTBzUTBGQlF5eEhRVUZITEc5Q1FVRnZRanRCUVVNMVF5eFBRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzVTBGQlV5eERRVUZETEUxQlFVMHNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSVHRCUVVONlF5eFRRVUZMTEVsQlFVa3NSMEZCUnl4SlFVRkpMRk5CUVZNc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJUdEJRVU0xUWl4VlFVRkpMRTFCUVUwc1EwRkJReXhUUVVGVExFTkJRVU1zWTBGQll5eERRVUZETEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUjBGQlJ5eERRVUZETEVWQlFVVTdRVUZETTBRc1YwRkJSeXhEUVVGRExFZEJRVWNzUTBGQlF5eEhRVUZITEZOQlFWTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dFBRVU01UWp0TFFVTkdPMGRCUTBZN08wRkJSVVFzVTBGQlR5eEhRVUZITEVOQlFVTTdRMEZEV2pzN1FVRkZUU3hKUVVGSkxGRkJRVkVzUjBGQlJ5eE5RVUZOTEVOQlFVTXNVMEZCVXl4RFFVRkRMRkZCUVZFc1EwRkJRenM3T3pzN08wRkJTMmhFTEVsQlFVa3NWVUZCVlN4SFFVRkhMRzlDUVVGVExFdEJRVXNzUlVGQlJUdEJRVU12UWl4VFFVRlBMRTlCUVU4c1MwRkJTeXhMUVVGTExGVkJRVlVzUTBGQlF6dERRVU53UXl4RFFVRkRPenM3UVVGSFJpeEpRVUZKTEZWQlFWVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSVHRCUVVOdVFpeFZRVTlQTEZWQlFWVXNSMEZRYWtJc1ZVRkJWU3hIUVVGSExGVkJRVk1zUzBGQlN5eEZRVUZGTzBGQlF6TkNMRmRCUTBVc1QwRkJUeXhMUVVGTExFdEJRVXNzVlVGQlZTeEpRVU16UWl4UlFVRlJMRU5CUVVNc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eExRVUZMTEcxQ1FVRnRRaXhEUVVNMVF6dEhRVU5JTEVOQlFVTTdRMEZEU0R0UlFVTlJMRlZCUVZVc1IwRkJWaXhWUVVGVk96czdPenRCUVVsYUxFbEJRVTBzVDBGQlR5eEhRVU5zUWl4TFFVRkxMRU5CUVVNc1QwRkJUeXhKUVVOaUxGVkJRVk1zUzBGQlN5eEZRVUZGTzBGQlEyUXNVMEZCVHl4TFFVRkxMRWxCUVVrc1QwRkJUeXhMUVVGTExFdEJRVXNzVVVGQlVTeEhRVU55UXl4UlFVRlJMRU5CUVVNc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eExRVUZMTEdkQ1FVRm5RaXhIUVVONlF5eExRVUZMTEVOQlFVTTdRMEZEV0N4RFFVRkRPenM3T3p0QlFVZEhMRk5CUVZNc1QwRkJUeXhEUVVGRExFdEJRVXNzUlVGQlJTeExRVUZMTEVWQlFVVTdRVUZEY0VNc1QwRkJTeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNSMEZCUnl4SFFVRkhMRXRCUVVzc1EwRkJReXhOUVVGTkxFVkJRVVVzUTBGQlF5eEhRVUZITEVkQlFVY3NSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSVHRCUVVOb1JDeFJRVUZKTEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1MwRkJTeXhMUVVGTExFVkJRVVU3UVVGRGRFSXNZVUZCVHl4RFFVRkRMRU5CUVVNN1MwRkRWanRIUVVOR08wRkJRMFFzVTBGQlR5eERRVUZETEVOQlFVTXNRMEZCUXp0RFFVTllPenRCUVVWTkxGTkJRVk1zWjBKQlFXZENMRU5CUVVNc1RVRkJUU3hGUVVGRk8wRkJRM1pETEUxQlFVa3NUMEZCVHl4TlFVRk5MRXRCUVVzc1VVRkJVU3hGUVVGRk96dEJRVVU1UWl4UlFVRkpMRTFCUVUwc1NVRkJTU3hOUVVGTkxFTkJRVU1zVFVGQlRTeEZRVUZGTzBGQlF6TkNMR0ZCUVU4c1RVRkJUU3hEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETzB0QlEzaENMRTFCUVUwc1NVRkJTU3hOUVVGTkxFbEJRVWtzU1VGQlNTeEZRVUZGTzBGQlEzcENMR0ZCUVU4c1JVRkJSU3hEUVVGRE8wdEJRMWdzVFVGQlRTeEpRVUZKTEVOQlFVTXNUVUZCVFN4RlFVRkZPMEZCUTJ4Q0xHRkJRVThzVFVGQlRTeEhRVUZITEVWQlFVVXNRMEZCUXp0TFFVTndRanM3T3pzN1FVRkxSQ3hWUVVGTkxFZEJRVWNzUlVGQlJTeEhRVUZITEUxQlFVMHNRMEZCUXp0SFFVTjBRanM3UVVGRlJDeE5RVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zUlVGQlJUdEJRVU14UWl4WFFVRlBMRTFCUVUwc1EwRkJRenRIUVVObU8wRkJRMFFzVTBGQlR5eE5RVUZOTEVOQlFVTXNUMEZCVHl4RFFVRkRMRkZCUVZFc1JVRkJSU3hWUVVGVkxFTkJRVU1zUTBGQlF6dERRVU0zUXpzN1FVRkZUU3hUUVVGVExFOUJRVThzUTBGQlF5eExRVUZMTEVWQlFVVTdRVUZETjBJc1RVRkJTU3hEUVVGRExFdEJRVXNzU1VGQlNTeExRVUZMTEV0QlFVc3NRMEZCUXl4RlFVRkZPMEZCUTNwQ0xGZEJRVThzU1VGQlNTeERRVUZETzBkQlEySXNUVUZCVFN4SlFVRkpMRTlCUVU4c1EwRkJReXhMUVVGTExFTkJRVU1zU1VGQlNTeExRVUZMTEVOQlFVTXNUVUZCVFN4TFFVRkxMRU5CUVVNc1JVRkJSVHRCUVVNdlF5eFhRVUZQTEVsQlFVa3NRMEZCUXp0SFFVTmlMRTFCUVUwN1FVRkRUQ3hYUVVGUExFdEJRVXNzUTBGQlF6dEhRVU5rTzBOQlEwWTdPMEZCUlUwc1UwRkJVeXhYUVVGWExFTkJRVU1zVFVGQlRTeEZRVUZGTzBGQlEyeERMRTFCUVVrc1MwRkJTeXhIUVVGSExFMUJRVTBzUTBGQlF5eEZRVUZGTEVWQlFVVXNUVUZCVFN4RFFVRkRMRU5CUVVNN1FVRkRMMElzVDBGQlN5eERRVUZETEU5QlFVOHNSMEZCUnl4TlFVRk5MRU5CUVVNN1FVRkRka0lzVTBGQlR5eExRVUZMTEVOQlFVTTdRMEZEWkRzN1FVRkZUU3hUUVVGVExGZEJRVmNzUTBGQlF5eE5RVUZOTEVWQlFVVXNSMEZCUnl4RlFVRkZPMEZCUTNaRExGRkJRVTBzUTBGQlF5eEpRVUZKTEVkQlFVY3NSMEZCUnl4RFFVRkRPMEZCUTJ4Q0xGTkJRVThzVFVGQlRTeERRVUZETzBOQlEyWTdPMEZCUlUwc1UwRkJVeXhwUWtGQmFVSXNRMEZCUXl4WFFVRlhMRVZCUVVVc1JVRkJSU3hGUVVGRk8wRkJRMnBFTEZOQlFVOHNRMEZCUXl4WFFVRlhMRWRCUVVjc1YwRkJWeXhIUVVGSExFZEJRVWNzUjBGQlJ5eEZRVUZGTEVOQlFVRXNSMEZCU1N4RlFVRkZMRU5CUVVNN1EwRkRjRVFpTENKbWFXeGxJam9pZFhScGJITXVhbk1pTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKamIyNXpkQ0JsYzJOaGNHVWdQU0I3WEc0Z0lDY21Kem9nSnlaaGJYQTdKeXhjYmlBZ0p6d25PaUFuSm14ME95Y3NYRzRnSUNjK0p6b2dKeVpuZERzbkxGeHVJQ0FuWENJbk9pQW5KbkYxYjNRN0p5eGNiaUFnWENJblhDSTZJQ2NtSTNneU56c25MRnh1SUNBbllDYzZJQ2NtSTNnMk1Ec25MRnh1SUNBblBTYzZJQ2NtSTNnelJEc25YRzU5TzF4dVhHNWpiMjV6ZENCaVlXUkRhR0Z5Y3lBOUlDOWJKancrWENJbllEMWRMMmNzWEc0Z0lIQnZjM05wWW14bElEMGdMMXNtUEQ1Y0lpZGdQVjB2TzF4dVhHNW1kVzVqZEdsdmJpQmxjMk5oY0dWRGFHRnlLR05vY2lrZ2UxeHVJQ0J5WlhSMWNtNGdaWE5qWVhCbFcyTm9jbDA3WEc1OVhHNWNibVY0Y0c5eWRDQm1kVzVqZEdsdmJpQmxlSFJsYm1Rb2IySnFJQzhxSUN3Z0xpNHVjMjkxY21ObElDb3ZLU0I3WEc0Z0lHWnZjaUFvYkdWMElHa2dQU0F4T3lCcElEd2dZWEpuZFcxbGJuUnpMbXhsYm1kMGFEc2dhU3NyS1NCN1hHNGdJQ0FnWm05eUlDaHNaWFFnYTJWNUlHbHVJR0Z5WjNWdFpXNTBjMXRwWFNrZ2UxeHVJQ0FnSUNBZ2FXWWdLRTlpYW1WamRDNXdjbTkwYjNSNWNHVXVhR0Z6VDNkdVVISnZjR1Z5ZEhrdVkyRnNiQ2hoY21kMWJXVnVkSE5iYVYwc0lHdGxlU2twSUh0Y2JpQWdJQ0FnSUNBZ2IySnFXMnRsZVYwZ1BTQmhjbWQxYldWdWRITmJhVjFiYTJWNVhUdGNiaUFnSUNBZ0lIMWNiaUFnSUNCOVhHNGdJSDFjYmx4dUlDQnlaWFIxY200Z2IySnFPMXh1ZlZ4dVhHNWxlSEJ2Y25RZ2JHVjBJSFJ2VTNSeWFXNW5JRDBnVDJKcVpXTjBMbkJ5YjNSdmRIbHdaUzUwYjFOMGNtbHVaenRjYmx4dUx5OGdVMjkxY21ObFpDQm1jbTl0SUd4dlpHRnphRnh1THk4Z2FIUjBjSE02THk5bmFYUm9kV0l1WTI5dEwySmxjM1JwWldwekwyeHZaR0Z6YUM5aWJHOWlMMjFoYzNSbGNpOU1TVU5GVGxORkxuUjRkRnh1THlvZ1pYTnNhVzUwTFdScGMyRmliR1VnWm5WdVl5MXpkSGxzWlNBcUwxeHViR1YwSUdselJuVnVZM1JwYjI0Z1BTQm1kVzVqZEdsdmJpaDJZV3gxWlNrZ2UxeHVJQ0J5WlhSMWNtNGdkSGx3Wlc5bUlIWmhiSFZsSUQwOVBTQW5ablZ1WTNScGIyNG5PMXh1ZlR0Y2JpOHZJR1poYkd4aVlXTnJJR1p2Y2lCdmJHUmxjaUIyWlhKemFXOXVjeUJ2WmlCRGFISnZiV1VnWVc1a0lGTmhabUZ5YVZ4dUx5b2dhWE4wWVc1aWRXd2dhV2R1YjNKbElHNWxlSFFnS2k5Y2JtbG1JQ2hwYzBaMWJtTjBhVzl1S0M5NEx5a3BJSHRjYmlBZ2FYTkdkVzVqZEdsdmJpQTlJR1oxYm1OMGFXOXVLSFpoYkhWbEtTQjdYRzRnSUNBZ2NtVjBkWEp1SUNoY2JpQWdJQ0FnSUhSNWNHVnZaaUIyWVd4MVpTQTlQVDBnSjJaMWJtTjBhVzl1SnlBbUpseHVJQ0FnSUNBZ2RHOVRkSEpwYm1jdVkyRnNiQ2gyWVd4MVpTa2dQVDA5SUNkYmIySnFaV04wSUVaMWJtTjBhVzl1WFNkY2JpQWdJQ0FwTzF4dUlDQjlPMXh1ZlZ4dVpYaHdiM0owSUhzZ2FYTkdkVzVqZEdsdmJpQjlPMXh1THlvZ1pYTnNhVzUwTFdWdVlXSnNaU0JtZFc1akxYTjBlV3hsSUNvdlhHNWNiaThxSUdsemRHRnVZblZzSUdsbmJtOXlaU0J1WlhoMElDb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ2FYTkJjbkpoZVNBOVhHNGdJRUZ5Y21GNUxtbHpRWEp5WVhrZ2ZIeGNiaUFnWm5WdVkzUnBiMjRvZG1Gc2RXVXBJSHRjYmlBZ0lDQnlaWFIxY200Z2RtRnNkV1VnSmlZZ2RIbHdaVzltSUhaaGJIVmxJRDA5UFNBbmIySnFaV04wSjF4dUlDQWdJQ0FnUHlCMGIxTjBjbWx1Wnk1allXeHNLSFpoYkhWbEtTQTlQVDBnSjF0dlltcGxZM1FnUVhKeVlYbGRKMXh1SUNBZ0lDQWdPaUJtWVd4elpUdGNiaUFnZlR0Y2JseHVMeThnVDJ4a1pYSWdTVVVnZG1WeWMybHZibk1nWkc4Z2JtOTBJR1JwY21WamRHeDVJSE4xY0hCdmNuUWdhVzVrWlhoUFppQnpieUIzWlNCdGRYTjBJR2x0Y0d4bGJXVnVkQ0J2ZFhJZ2IzZHVMQ0J6WVdSc2VTNWNibVY0Y0c5eWRDQm1kVzVqZEdsdmJpQnBibVJsZUU5bUtHRnljbUY1TENCMllXeDFaU2tnZTF4dUlDQm1iM0lnS0d4bGRDQnBJRDBnTUN3Z2JHVnVJRDBnWVhKeVlYa3ViR1Z1WjNSb095QnBJRHdnYkdWdU95QnBLeXNwSUh0Y2JpQWdJQ0JwWmlBb1lYSnlZWGxiYVYwZ1BUMDlJSFpoYkhWbEtTQjdYRzRnSUNBZ0lDQnlaWFIxY200Z2FUdGNiaUFnSUNCOVhHNGdJSDFjYmlBZ2NtVjBkWEp1SUMweE8xeHVmVnh1WEc1bGVIQnZjblFnWm5WdVkzUnBiMjRnWlhOallYQmxSWGh3Y21WemMybHZiaWh6ZEhKcGJtY3BJSHRjYmlBZ2FXWWdLSFI1Y0dWdlppQnpkSEpwYm1jZ0lUMDlJQ2R6ZEhKcGJtY25LU0I3WEc0Z0lDQWdMeThnWkc5dUozUWdaWE5qWVhCbElGTmhabVZUZEhKcGJtZHpMQ0J6YVc1alpTQjBhR1Y1SjNKbElHRnNjbVZoWkhrZ2MyRm1aVnh1SUNBZ0lHbG1JQ2h6ZEhKcGJtY2dKaVlnYzNSeWFXNW5MblJ2U0ZSTlRDa2dlMXh1SUNBZ0lDQWdjbVYwZFhKdUlITjBjbWx1Wnk1MGIwaFVUVXdvS1R0Y2JpQWdJQ0I5SUdWc2MyVWdhV1lnS0hOMGNtbHVaeUE5UFNCdWRXeHNLU0I3WEc0Z0lDQWdJQ0J5WlhSMWNtNGdKeWM3WEc0Z0lDQWdmU0JsYkhObElHbG1JQ2doYzNSeWFXNW5LU0I3WEc0Z0lDQWdJQ0J5WlhSMWNtNGdjM1J5YVc1bklDc2dKeWM3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdMeThnUm05eVkyVWdZU0J6ZEhKcGJtY2dZMjl1ZG1WeWMybHZiaUJoY3lCMGFHbHpJSGRwYkd3Z1ltVWdaRzl1WlNCaWVTQjBhR1VnWVhCd1pXNWtJSEpsWjJGeVpHeGxjM01nWVc1a1hHNGdJQ0FnTHk4Z2RHaGxJSEpsWjJWNElIUmxjM1FnZDJsc2JDQmtieUIwYUdseklIUnlZVzV6Y0dGeVpXNTBiSGtnWW1Wb2FXNWtJSFJvWlNCelkyVnVaWE1zSUdOaGRYTnBibWNnYVhOemRXVnpJR2xtWEc0Z0lDQWdMeThnWVc0Z2IySnFaV04wSjNNZ2RHOGdjM1J5YVc1bklHaGhjeUJsYzJOaGNHVmtJR05vWVhKaFkzUmxjbk1nYVc0Z2FYUXVYRzRnSUNBZ2MzUnlhVzVuSUQwZ0p5Y2dLeUJ6ZEhKcGJtYzdYRzRnSUgxY2JseHVJQ0JwWmlBb0lYQnZjM05wWW14bExuUmxjM1FvYzNSeWFXNW5LU2tnZTF4dUlDQWdJSEpsZEhWeWJpQnpkSEpwYm1jN1hHNGdJSDFjYmlBZ2NtVjBkWEp1SUhOMGNtbHVaeTV5WlhCc1lXTmxLR0poWkVOb1lYSnpMQ0JsYzJOaGNHVkRhR0Z5S1R0Y2JuMWNibHh1Wlhod2IzSjBJR1oxYm1OMGFXOXVJR2x6Ulcxd2RIa29kbUZzZFdVcElIdGNiaUFnYVdZZ0tDRjJZV3gxWlNBbUppQjJZV3gxWlNBaFBUMGdNQ2tnZTF4dUlDQWdJSEpsZEhWeWJpQjBjblZsTzF4dUlDQjlJR1ZzYzJVZ2FXWWdLR2x6UVhKeVlYa29kbUZzZFdVcElDWW1JSFpoYkhWbExteGxibWQwYUNBOVBUMGdNQ2tnZTF4dUlDQWdJSEpsZEhWeWJpQjBjblZsTzF4dUlDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUhKbGRIVnliaUJtWVd4elpUdGNiaUFnZlZ4dWZWeHVYRzVsZUhCdmNuUWdablZ1WTNScGIyNGdZM0psWVhSbFJuSmhiV1VvYjJKcVpXTjBLU0I3WEc0Z0lHeGxkQ0JtY21GdFpTQTlJR1Y0ZEdWdVpDaDdmU3dnYjJKcVpXTjBLVHRjYmlBZ1puSmhiV1V1WDNCaGNtVnVkQ0E5SUc5aWFtVmpkRHRjYmlBZ2NtVjBkWEp1SUdaeVlXMWxPMXh1ZlZ4dVhHNWxlSEJ2Y25RZ1puVnVZM1JwYjI0Z1lteHZZMnRRWVhKaGJYTW9jR0Z5WVcxekxDQnBaSE1wSUh0Y2JpQWdjR0Z5WVcxekxuQmhkR2dnUFNCcFpITTdYRzRnSUhKbGRIVnliaUJ3WVhKaGJYTTdYRzU5WEc1Y2JtVjRjRzl5ZENCbWRXNWpkR2x2YmlCaGNIQmxibVJEYjI1MFpYaDBVR0YwYUNoamIyNTBaWGgwVUdGMGFDd2dhV1FwSUh0Y2JpQWdjbVYwZFhKdUlDaGpiMjUwWlhoMFVHRjBhQ0EvSUdOdmJuUmxlSFJRWVhSb0lDc2dKeTRuSURvZ0p5Y3BJQ3NnYVdRN1hHNTlYRzRpWFgwPVxuIiwiLy8gQ3JlYXRlIGEgc2ltcGxlIHBhdGggYWxpYXMgdG8gYWxsb3cgYnJvd3NlcmlmeSB0byByZXNvbHZlXG4vLyB0aGUgcnVudGltZSBvbiBhIHN1cHBvcnRlZCBwYXRoLlxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2pzL2hhbmRsZWJhcnMucnVudGltZScpWydkZWZhdWx0J107XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvKiEgQHByZXNlcnZlXG4gKiBudW1lcmFsLmpzXG4gKiB2ZXJzaW9uIDogMi4wLjZcbiAqIGF1dGhvciA6IEFkYW0gRHJhcGVyXG4gKiBsaWNlbnNlIDogTUlUXG4gKiBodHRwOi8vYWRhbXdkcmFwZXIuZ2l0aHViLmNvbS9OdW1lcmFsLWpzL1xuICovXG5cbihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gICAgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgICAgICBkZWZpbmUoZmFjdG9yeSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cykge1xuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBnbG9iYWwubnVtZXJhbCA9IGZhY3RvcnkoKTtcbiAgICB9XG59KHRoaXMsIGZ1bmN0aW9uICgpIHtcbiAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgICAgIFZhcmlhYmxlc1xuICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuICAgIHZhciBudW1lcmFsLFxuICAgICAgICBfLFxuICAgICAgICBWRVJTSU9OID0gJzIuMC42JyxcbiAgICAgICAgZm9ybWF0cyA9IHt9LFxuICAgICAgICBsb2NhbGVzID0ge30sXG4gICAgICAgIGRlZmF1bHRzID0ge1xuICAgICAgICAgICAgY3VycmVudExvY2FsZTogJ2VuJyxcbiAgICAgICAgICAgIHplcm9Gb3JtYXQ6IG51bGwsXG4gICAgICAgICAgICBudWxsRm9ybWF0OiBudWxsLFxuICAgICAgICAgICAgZGVmYXVsdEZvcm1hdDogJzAsMCcsXG4gICAgICAgICAgICBzY2FsZVBlcmNlbnRCeTEwMDogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBvcHRpb25zID0ge1xuICAgICAgICAgICAgY3VycmVudExvY2FsZTogZGVmYXVsdHMuY3VycmVudExvY2FsZSxcbiAgICAgICAgICAgIHplcm9Gb3JtYXQ6IGRlZmF1bHRzLnplcm9Gb3JtYXQsXG4gICAgICAgICAgICBudWxsRm9ybWF0OiBkZWZhdWx0cy5udWxsRm9ybWF0LFxuICAgICAgICAgICAgZGVmYXVsdEZvcm1hdDogZGVmYXVsdHMuZGVmYXVsdEZvcm1hdCxcbiAgICAgICAgICAgIHNjYWxlUGVyY2VudEJ5MTAwOiBkZWZhdWx0cy5zY2FsZVBlcmNlbnRCeTEwMFxuICAgICAgICB9O1xuXG5cbiAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgICAgIENvbnN0cnVjdG9yc1xuICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuICAgIC8vIE51bWVyYWwgcHJvdG90eXBlIG9iamVjdFxuICAgIGZ1bmN0aW9uIE51bWVyYWwoaW5wdXQsIG51bWJlcikge1xuICAgICAgICB0aGlzLl9pbnB1dCA9IGlucHV0O1xuXG4gICAgICAgIHRoaXMuX3ZhbHVlID0gbnVtYmVyO1xuICAgIH1cblxuICAgIG51bWVyYWwgPSBmdW5jdGlvbihpbnB1dCkge1xuICAgICAgICB2YXIgdmFsdWUsXG4gICAgICAgICAgICBraW5kLFxuICAgICAgICAgICAgdW5mb3JtYXRGdW5jdGlvbixcbiAgICAgICAgICAgIHJlZ2V4cDtcblxuICAgICAgICBpZiAobnVtZXJhbC5pc051bWVyYWwoaW5wdXQpKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IGlucHV0LnZhbHVlKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoaW5wdXQgPT09IDAgfHwgdHlwZW9mIGlucHV0ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgdmFsdWUgPSAwO1xuICAgICAgICB9IGVsc2UgaWYgKGlucHV0ID09PSBudWxsIHx8IF8uaXNOYU4oaW5wdXQpKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IG51bGw7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGlucHV0ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMuemVyb0Zvcm1hdCAmJiBpbnB1dCA9PT0gb3B0aW9ucy56ZXJvRm9ybWF0KSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSAwO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChvcHRpb25zLm51bGxGb3JtYXQgJiYgaW5wdXQgPT09IG9wdGlvbnMubnVsbEZvcm1hdCB8fCAhaW5wdXQucmVwbGFjZSgvW14wLTldKy9nLCAnJykubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBudWxsO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3IgKGtpbmQgaW4gZm9ybWF0cykge1xuICAgICAgICAgICAgICAgICAgICByZWdleHAgPSB0eXBlb2YgZm9ybWF0c1traW5kXS5yZWdleHBzLnVuZm9ybWF0ID09PSAnZnVuY3Rpb24nID8gZm9ybWF0c1traW5kXS5yZWdleHBzLnVuZm9ybWF0KCkgOiBmb3JtYXRzW2tpbmRdLnJlZ2V4cHMudW5mb3JtYXQ7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlZ2V4cCAmJiBpbnB1dC5tYXRjaChyZWdleHApKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1bmZvcm1hdEZ1bmN0aW9uID0gZm9ybWF0c1traW5kXS51bmZvcm1hdDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB1bmZvcm1hdEZ1bmN0aW9uID0gdW5mb3JtYXRGdW5jdGlvbiB8fCBudW1lcmFsLl8uc3RyaW5nVG9OdW1iZXI7XG5cbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHVuZm9ybWF0RnVuY3Rpb24oaW5wdXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFsdWUgPSBOdW1iZXIoaW5wdXQpfHwgbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXcgTnVtZXJhbChpbnB1dCwgdmFsdWUpO1xuICAgIH07XG5cbiAgICAvLyB2ZXJzaW9uIG51bWJlclxuICAgIG51bWVyYWwudmVyc2lvbiA9IFZFUlNJT047XG5cbiAgICAvLyBjb21wYXJlIG51bWVyYWwgb2JqZWN0XG4gICAgbnVtZXJhbC5pc051bWVyYWwgPSBmdW5jdGlvbihvYmopIHtcbiAgICAgICAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIE51bWVyYWw7XG4gICAgfTtcblxuICAgIC8vIGhlbHBlciBmdW5jdGlvbnNcbiAgICBudW1lcmFsLl8gPSBfID0ge1xuICAgICAgICAvLyBmb3JtYXRzIG51bWJlcnMgc2VwYXJhdG9ycywgZGVjaW1hbHMgcGxhY2VzLCBzaWducywgYWJicmV2aWF0aW9uc1xuICAgICAgICBudW1iZXJUb0Zvcm1hdDogZnVuY3Rpb24odmFsdWUsIGZvcm1hdCwgcm91bmRpbmdGdW5jdGlvbikge1xuICAgICAgICAgICAgdmFyIGxvY2FsZSA9IGxvY2FsZXNbbnVtZXJhbC5vcHRpb25zLmN1cnJlbnRMb2NhbGVdLFxuICAgICAgICAgICAgICAgIG5lZ1AgPSBmYWxzZSxcbiAgICAgICAgICAgICAgICBvcHREZWMgPSBmYWxzZSxcbiAgICAgICAgICAgICAgICBsZWFkaW5nQ291bnQgPSAwLFxuICAgICAgICAgICAgICAgIGFiYnIgPSAnJyxcbiAgICAgICAgICAgICAgICB0cmlsbGlvbiA9IDEwMDAwMDAwMDAwMDAsXG4gICAgICAgICAgICAgICAgYmlsbGlvbiA9IDEwMDAwMDAwMDAsXG4gICAgICAgICAgICAgICAgbWlsbGlvbiA9IDEwMDAwMDAsXG4gICAgICAgICAgICAgICAgdGhvdXNhbmQgPSAxMDAwLFxuICAgICAgICAgICAgICAgIGRlY2ltYWwgPSAnJyxcbiAgICAgICAgICAgICAgICBuZWcgPSBmYWxzZSxcbiAgICAgICAgICAgICAgICBhYmJyRm9yY2UsIC8vIGZvcmNlIGFiYnJldmlhdGlvblxuICAgICAgICAgICAgICAgIGFicyxcbiAgICAgICAgICAgICAgICBtaW4sXG4gICAgICAgICAgICAgICAgbWF4LFxuICAgICAgICAgICAgICAgIHBvd2VyLFxuICAgICAgICAgICAgICAgIGludCxcbiAgICAgICAgICAgICAgICBwcmVjaXNpb24sXG4gICAgICAgICAgICAgICAgc2lnbmVkLFxuICAgICAgICAgICAgICAgIHRob3VzYW5kcyxcbiAgICAgICAgICAgICAgICBvdXRwdXQ7XG5cbiAgICAgICAgICAgIC8vIG1ha2Ugc3VyZSB3ZSBuZXZlciBmb3JtYXQgYSBudWxsIHZhbHVlXG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlIHx8IDA7XG5cbiAgICAgICAgICAgIGFicyA9IE1hdGguYWJzKHZhbHVlKTtcblxuICAgICAgICAgICAgLy8gc2VlIGlmIHdlIHNob3VsZCB1c2UgcGFyZW50aGVzZXMgZm9yIG5lZ2F0aXZlIG51bWJlciBvciBpZiB3ZSBzaG91bGQgcHJlZml4IHdpdGggYSBzaWduXG4gICAgICAgICAgICAvLyBpZiBib3RoIGFyZSBwcmVzZW50IHdlIGRlZmF1bHQgdG8gcGFyZW50aGVzZXNcbiAgICAgICAgICAgIGlmIChudW1lcmFsLl8uaW5jbHVkZXMoZm9ybWF0LCAnKCcpKSB7XG4gICAgICAgICAgICAgICAgbmVnUCA9IHRydWU7XG4gICAgICAgICAgICAgICAgZm9ybWF0ID0gZm9ybWF0LnJlcGxhY2UoL1tcXCh8XFwpXS9nLCAnJyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG51bWVyYWwuXy5pbmNsdWRlcyhmb3JtYXQsICcrJykgfHwgbnVtZXJhbC5fLmluY2x1ZGVzKGZvcm1hdCwgJy0nKSkge1xuICAgICAgICAgICAgICAgIHNpZ25lZCA9IG51bWVyYWwuXy5pbmNsdWRlcyhmb3JtYXQsICcrJykgPyBmb3JtYXQuaW5kZXhPZignKycpIDogdmFsdWUgPCAwID8gZm9ybWF0LmluZGV4T2YoJy0nKSA6IC0xO1xuICAgICAgICAgICAgICAgIGZvcm1hdCA9IGZvcm1hdC5yZXBsYWNlKC9bXFwrfFxcLV0vZywgJycpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBzZWUgaWYgYWJicmV2aWF0aW9uIGlzIHdhbnRlZFxuICAgICAgICAgICAgaWYgKG51bWVyYWwuXy5pbmNsdWRlcyhmb3JtYXQsICdhJykpIHtcbiAgICAgICAgICAgICAgICBhYmJyRm9yY2UgPSBmb3JtYXQubWF0Y2goL2Eoa3xtfGJ8dCk/Lyk7XG5cbiAgICAgICAgICAgICAgICBhYmJyRm9yY2UgPSBhYmJyRm9yY2UgPyBhYmJyRm9yY2VbMV0gOiBmYWxzZTtcblxuICAgICAgICAgICAgICAgIC8vIGNoZWNrIGZvciBzcGFjZSBiZWZvcmUgYWJicmV2aWF0aW9uXG4gICAgICAgICAgICAgICAgaWYgKG51bWVyYWwuXy5pbmNsdWRlcyhmb3JtYXQsICcgYScpKSB7XG4gICAgICAgICAgICAgICAgICAgIGFiYnIgPSAnICc7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZm9ybWF0ID0gZm9ybWF0LnJlcGxhY2UobmV3IFJlZ0V4cChhYmJyICsgJ2Fba21idF0/JyksICcnKTtcblxuICAgICAgICAgICAgICAgIGlmIChhYnMgPj0gdHJpbGxpb24gJiYgIWFiYnJGb3JjZSB8fCBhYmJyRm9yY2UgPT09ICd0Jykge1xuICAgICAgICAgICAgICAgICAgICAvLyB0cmlsbGlvblxuICAgICAgICAgICAgICAgICAgICBhYmJyICs9IGxvY2FsZS5hYmJyZXZpYXRpb25zLnRyaWxsaW9uO1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlIC8gdHJpbGxpb247XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChhYnMgPCB0cmlsbGlvbiAmJiBhYnMgPj0gYmlsbGlvbiAmJiAhYWJickZvcmNlIHx8IGFiYnJGb3JjZSA9PT0gJ2InKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGJpbGxpb25cbiAgICAgICAgICAgICAgICAgICAgYWJiciArPSBsb2NhbGUuYWJicmV2aWF0aW9ucy5iaWxsaW9uO1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlIC8gYmlsbGlvbjtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGFicyA8IGJpbGxpb24gJiYgYWJzID49IG1pbGxpb24gJiYgIWFiYnJGb3JjZSB8fCBhYmJyRm9yY2UgPT09ICdtJykge1xuICAgICAgICAgICAgICAgICAgICAvLyBtaWxsaW9uXG4gICAgICAgICAgICAgICAgICAgIGFiYnIgKz0gbG9jYWxlLmFiYnJldmlhdGlvbnMubWlsbGlvbjtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZSAvIG1pbGxpb247XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChhYnMgPCBtaWxsaW9uICYmIGFicyA+PSB0aG91c2FuZCAmJiAhYWJickZvcmNlIHx8IGFiYnJGb3JjZSA9PT0gJ2snKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRob3VzYW5kXG4gICAgICAgICAgICAgICAgICAgIGFiYnIgKz0gbG9jYWxlLmFiYnJldmlhdGlvbnMudGhvdXNhbmQ7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUgLyB0aG91c2FuZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGNoZWNrIGZvciBvcHRpb25hbCBkZWNpbWFsc1xuICAgICAgICAgICAgaWYgKG51bWVyYWwuXy5pbmNsdWRlcyhmb3JtYXQsICdbLl0nKSkge1xuICAgICAgICAgICAgICAgIG9wdERlYyA9IHRydWU7XG4gICAgICAgICAgICAgICAgZm9ybWF0ID0gZm9ybWF0LnJlcGxhY2UoJ1suXScsICcuJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGJyZWFrIG51bWJlciBhbmQgZm9ybWF0XG4gICAgICAgICAgICBpbnQgPSB2YWx1ZS50b1N0cmluZygpLnNwbGl0KCcuJylbMF07XG4gICAgICAgICAgICBwcmVjaXNpb24gPSBmb3JtYXQuc3BsaXQoJy4nKVsxXTtcbiAgICAgICAgICAgIHRob3VzYW5kcyA9IGZvcm1hdC5pbmRleE9mKCcsJyk7XG4gICAgICAgICAgICBsZWFkaW5nQ291bnQgPSAoZm9ybWF0LnNwbGl0KCcuJylbMF0uc3BsaXQoJywnKVswXS5tYXRjaCgvMC9nKSB8fCBbXSkubGVuZ3RoO1xuXG4gICAgICAgICAgICBpZiAocHJlY2lzaW9uKSB7XG4gICAgICAgICAgICAgICAgaWYgKG51bWVyYWwuXy5pbmNsdWRlcyhwcmVjaXNpb24sICdbJykpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJlY2lzaW9uID0gcHJlY2lzaW9uLnJlcGxhY2UoJ10nLCAnJyk7XG4gICAgICAgICAgICAgICAgICAgIHByZWNpc2lvbiA9IHByZWNpc2lvbi5zcGxpdCgnWycpO1xuICAgICAgICAgICAgICAgICAgICBkZWNpbWFsID0gbnVtZXJhbC5fLnRvRml4ZWQodmFsdWUsIChwcmVjaXNpb25bMF0ubGVuZ3RoICsgcHJlY2lzaW9uWzFdLmxlbmd0aCksIHJvdW5kaW5nRnVuY3Rpb24sIHByZWNpc2lvblsxXS5sZW5ndGgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGRlY2ltYWwgPSBudW1lcmFsLl8udG9GaXhlZCh2YWx1ZSwgcHJlY2lzaW9uLmxlbmd0aCwgcm91bmRpbmdGdW5jdGlvbik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaW50ID0gZGVjaW1hbC5zcGxpdCgnLicpWzBdO1xuXG4gICAgICAgICAgICAgICAgaWYgKG51bWVyYWwuXy5pbmNsdWRlcyhkZWNpbWFsLCAnLicpKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlY2ltYWwgPSBsb2NhbGUuZGVsaW1pdGVycy5kZWNpbWFsICsgZGVjaW1hbC5zcGxpdCgnLicpWzFdO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGRlY2ltYWwgPSAnJztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAob3B0RGVjICYmIE51bWJlcihkZWNpbWFsLnNsaWNlKDEpKSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBkZWNpbWFsID0gJyc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpbnQgPSBudW1lcmFsLl8udG9GaXhlZCh2YWx1ZSwgMCwgcm91bmRpbmdGdW5jdGlvbik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGNoZWNrIGFiYnJldmlhdGlvbiBhZ2FpbiBhZnRlciByb3VuZGluZ1xuICAgICAgICAgICAgaWYgKGFiYnIgJiYgIWFiYnJGb3JjZSAmJiBOdW1iZXIoaW50KSA+PSAxMDAwICYmIGFiYnIgIT09IGxvY2FsZS5hYmJyZXZpYXRpb25zLnRyaWxsaW9uKSB7XG4gICAgICAgICAgICAgICAgaW50ID0gU3RyaW5nKE51bWJlcihpbnQpIC8gMTAwMCk7XG5cbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGFiYnIpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBsb2NhbGUuYWJicmV2aWF0aW9ucy50aG91c2FuZDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGFiYnIgPSBsb2NhbGUuYWJicmV2aWF0aW9ucy5taWxsaW9uO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgbG9jYWxlLmFiYnJldmlhdGlvbnMubWlsbGlvbjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGFiYnIgPSBsb2NhbGUuYWJicmV2aWF0aW9ucy5iaWxsaW9uO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgbG9jYWxlLmFiYnJldmlhdGlvbnMuYmlsbGlvbjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGFiYnIgPSBsb2NhbGUuYWJicmV2aWF0aW9ucy50cmlsbGlvbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAvLyBmb3JtYXQgbnVtYmVyXG4gICAgICAgICAgICBpZiAobnVtZXJhbC5fLmluY2x1ZGVzKGludCwgJy0nKSkge1xuICAgICAgICAgICAgICAgIGludCA9IGludC5zbGljZSgxKTtcbiAgICAgICAgICAgICAgICBuZWcgPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaW50Lmxlbmd0aCA8IGxlYWRpbmdDb3VudCkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSBsZWFkaW5nQ291bnQgLSBpbnQubGVuZ3RoOyBpID4gMDsgaS0tKSB7XG4gICAgICAgICAgICAgICAgICAgIGludCA9ICcwJyArIGludDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aG91c2FuZHMgPiAtMSkge1xuICAgICAgICAgICAgICAgIGludCA9IGludC50b1N0cmluZygpLnJlcGxhY2UoLyhcXGQpKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJyQxJyArIGxvY2FsZS5kZWxpbWl0ZXJzLnRob3VzYW5kcyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChmb3JtYXQuaW5kZXhPZignLicpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgaW50ID0gJyc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG91dHB1dCA9IGludCArIGRlY2ltYWwgKyAoYWJiciA/IGFiYnIgOiAnJyk7XG5cbiAgICAgICAgICAgIGlmIChuZWdQKSB7XG4gICAgICAgICAgICAgICAgb3V0cHV0ID0gKG5lZ1AgJiYgbmVnID8gJygnIDogJycpICsgb3V0cHV0ICsgKG5lZ1AgJiYgbmVnID8gJyknIDogJycpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoc2lnbmVkID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgb3V0cHV0ID0gc2lnbmVkID09PSAwID8gKG5lZyA/ICctJyA6ICcrJykgKyBvdXRwdXQgOiBvdXRwdXQgKyAobmVnID8gJy0nIDogJysnKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG5lZykge1xuICAgICAgICAgICAgICAgICAgICBvdXRwdXQgPSAnLScgKyBvdXRwdXQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gb3V0cHV0O1xuICAgICAgICB9LFxuICAgICAgICAvLyB1bmZvcm1hdHMgbnVtYmVycyBzZXBhcmF0b3JzLCBkZWNpbWFscyBwbGFjZXMsIHNpZ25zLCBhYmJyZXZpYXRpb25zXG4gICAgICAgIHN0cmluZ1RvTnVtYmVyOiBmdW5jdGlvbihzdHJpbmcpIHtcbiAgICAgICAgICAgIHZhciBsb2NhbGUgPSBsb2NhbGVzW29wdGlvbnMuY3VycmVudExvY2FsZV0sXG4gICAgICAgICAgICAgICAgc3RyaW5nT3JpZ2luYWwgPSBzdHJpbmcsXG4gICAgICAgICAgICAgICAgYWJicmV2aWF0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICAgICAgdGhvdXNhbmQ6IDMsXG4gICAgICAgICAgICAgICAgICAgIG1pbGxpb246IDYsXG4gICAgICAgICAgICAgICAgICAgIGJpbGxpb246IDksXG4gICAgICAgICAgICAgICAgICAgIHRyaWxsaW9uOiAxMlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYWJicmV2aWF0aW9uLFxuICAgICAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgICAgIGksXG4gICAgICAgICAgICAgICAgcmVnZXhwO1xuXG4gICAgICAgICAgICBpZiAob3B0aW9ucy56ZXJvRm9ybWF0ICYmIHN0cmluZyA9PT0gb3B0aW9ucy56ZXJvRm9ybWF0KSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSAwO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChvcHRpb25zLm51bGxGb3JtYXQgJiYgc3RyaW5nID09PSBvcHRpb25zLm51bGxGb3JtYXQgfHwgIXN0cmluZy5yZXBsYWNlKC9bXjAtOV0rL2csICcnKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IG51bGw7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gMTtcblxuICAgICAgICAgICAgICAgIGlmIChsb2NhbGUuZGVsaW1pdGVycy5kZWNpbWFsICE9PSAnLicpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RyaW5nID0gc3RyaW5nLnJlcGxhY2UoL1xcLi9nLCAnJykucmVwbGFjZShsb2NhbGUuZGVsaW1pdGVycy5kZWNpbWFsLCAnLicpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZvciAoYWJicmV2aWF0aW9uIGluIGFiYnJldmlhdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVnZXhwID0gbmV3IFJlZ0V4cCgnW15hLXpBLVpdJyArIGxvY2FsZS5hYmJyZXZpYXRpb25zW2FiYnJldmlhdGlvbl0gKyAnKD86XFxcXCl8KFxcXFwnICsgbG9jYWxlLmN1cnJlbmN5LnN5bWJvbCArICcpPyg/OlxcXFwpKT8pPyQnKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoc3RyaW5nT3JpZ2luYWwubWF0Y2gocmVnZXhwKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgKj0gTWF0aC5wb3coMTAsIGFiYnJldmlhdGlvbnNbYWJicmV2aWF0aW9uXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIGNoZWNrIGZvciBuZWdhdGl2ZSBudW1iZXJcbiAgICAgICAgICAgICAgICB2YWx1ZSAqPSAoc3RyaW5nLnNwbGl0KCctJykubGVuZ3RoICsgTWF0aC5taW4oc3RyaW5nLnNwbGl0KCcoJykubGVuZ3RoIC0gMSwgc3RyaW5nLnNwbGl0KCcpJykubGVuZ3RoIC0gMSkpICUgMiA/IDEgOiAtMTtcblxuICAgICAgICAgICAgICAgIC8vIHJlbW92ZSBub24gbnVtYmVyc1xuICAgICAgICAgICAgICAgIHN0cmluZyA9IHN0cmluZy5yZXBsYWNlKC9bXjAtOVxcLl0rL2csICcnKTtcblxuICAgICAgICAgICAgICAgIHZhbHVlICo9IE51bWJlcihzdHJpbmcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGlzTmFOOiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgJiYgaXNOYU4odmFsdWUpO1xuICAgICAgICB9LFxuICAgICAgICBpbmNsdWRlczogZnVuY3Rpb24oc3RyaW5nLCBzZWFyY2gpIHtcbiAgICAgICAgICAgIHJldHVybiBzdHJpbmcuaW5kZXhPZihzZWFyY2gpICE9PSAtMTtcbiAgICAgICAgfSxcbiAgICAgICAgaW5zZXJ0OiBmdW5jdGlvbihzdHJpbmcsIHN1YlN0cmluZywgc3RhcnQpIHtcbiAgICAgICAgICAgIHJldHVybiBzdHJpbmcuc2xpY2UoMCwgc3RhcnQpICsgc3ViU3RyaW5nICsgc3RyaW5nLnNsaWNlKHN0YXJ0KTtcbiAgICAgICAgfSxcbiAgICAgICAgcmVkdWNlOiBmdW5jdGlvbihhcnJheSwgY2FsbGJhY2sgLyosIGluaXRpYWxWYWx1ZSovKSB7XG4gICAgICAgICAgICBpZiAodGhpcyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FycmF5LnByb3RvdHlwZS5yZWR1Y2UgY2FsbGVkIG9uIG51bGwgb3IgdW5kZWZpbmVkJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGNhbGxiYWNrICsgJyBpcyBub3QgYSBmdW5jdGlvbicpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgdCA9IE9iamVjdChhcnJheSksXG4gICAgICAgICAgICAgICAgbGVuID0gdC5sZW5ndGggPj4+IDAsXG4gICAgICAgICAgICAgICAgayA9IDAsXG4gICAgICAgICAgICAgICAgdmFsdWU7XG5cbiAgICAgICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAzKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBhcmd1bWVudHNbMl07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHdoaWxlIChrIDwgbGVuICYmICEoayBpbiB0KSkge1xuICAgICAgICAgICAgICAgICAgICBrKys7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGsgPj0gbGVuKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1JlZHVjZSBvZiBlbXB0eSBhcnJheSB3aXRoIG5vIGluaXRpYWwgdmFsdWUnKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHRbaysrXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoOyBrIDwgbGVuOyBrKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoayBpbiB0KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gY2FsbGJhY2sodmFsdWUsIHRba10sIGssIHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIENvbXB1dGVzIHRoZSBtdWx0aXBsaWVyIG5lY2Vzc2FyeSB0byBtYWtlIHggPj0gMSxcbiAgICAgICAgICogZWZmZWN0aXZlbHkgZWxpbWluYXRpbmcgbWlzY2FsY3VsYXRpb25zIGNhdXNlZCBieVxuICAgICAgICAgKiBmaW5pdGUgcHJlY2lzaW9uLlxuICAgICAgICAgKi9cbiAgICAgICAgbXVsdGlwbGllcjogZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgICAgIHZhciBwYXJ0cyA9IHgudG9TdHJpbmcoKS5zcGxpdCgnLicpO1xuXG4gICAgICAgICAgICByZXR1cm4gcGFydHMubGVuZ3RoIDwgMiA/IDEgOiBNYXRoLnBvdygxMCwgcGFydHNbMV0ubGVuZ3RoKTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdpdmVuIGEgdmFyaWFibGUgbnVtYmVyIG9mIGFyZ3VtZW50cywgcmV0dXJucyB0aGUgbWF4aW11bVxuICAgICAgICAgKiBtdWx0aXBsaWVyIHRoYXQgbXVzdCBiZSB1c2VkIHRvIG5vcm1hbGl6ZSBhbiBvcGVyYXRpb24gaW52b2x2aW5nXG4gICAgICAgICAqIGFsbCBvZiB0aGVtLlxuICAgICAgICAgKi9cbiAgICAgICAgY29ycmVjdGlvbkZhY3RvcjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuXG4gICAgICAgICAgICByZXR1cm4gYXJncy5yZWR1Y2UoZnVuY3Rpb24oYWNjdW0sIG5leHQpIHtcbiAgICAgICAgICAgICAgICB2YXIgbW4gPSBfLm11bHRpcGxpZXIobmV4dCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFjY3VtID4gbW4gPyBhY2N1bSA6IG1uO1xuICAgICAgICAgICAgfSwgMSk7XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJbXBsZW1lbnRhdGlvbiBvZiB0b0ZpeGVkKCkgdGhhdCB0cmVhdHMgZmxvYXRzIG1vcmUgbGlrZSBkZWNpbWFsc1xuICAgICAgICAgKlxuICAgICAgICAgKiBGaXhlcyBiaW5hcnkgcm91bmRpbmcgaXNzdWVzIChlZy4gKDAuNjE1KS50b0ZpeGVkKDIpID09PSAnMC42MScpIHRoYXQgcHJlc2VudFxuICAgICAgICAgKiBwcm9ibGVtcyBmb3IgYWNjb3VudGluZy0gYW5kIGZpbmFuY2UtcmVsYXRlZCBzb2Z0d2FyZS5cbiAgICAgICAgICovXG4gICAgICAgIHRvRml4ZWQ6IGZ1bmN0aW9uKHZhbHVlLCBtYXhEZWNpbWFscywgcm91bmRpbmdGdW5jdGlvbiwgb3B0aW9uYWxzKSB7XG4gICAgICAgICAgICB2YXIgc3BsaXRWYWx1ZSA9IHZhbHVlLnRvU3RyaW5nKCkuc3BsaXQoJy4nKSxcbiAgICAgICAgICAgICAgICBtaW5EZWNpbWFscyA9IG1heERlY2ltYWxzIC0gKG9wdGlvbmFscyB8fCAwKSxcbiAgICAgICAgICAgICAgICBib3VuZGVkUHJlY2lzaW9uLFxuICAgICAgICAgICAgICAgIG9wdGlvbmFsc1JlZ0V4cCxcbiAgICAgICAgICAgICAgICBwb3dlcixcbiAgICAgICAgICAgICAgICBvdXRwdXQ7XG5cbiAgICAgICAgICAgIC8vIFVzZSB0aGUgc21hbGxlc3QgcHJlY2lzaW9uIHZhbHVlIHBvc3NpYmxlIHRvIGF2b2lkIGVycm9ycyBmcm9tIGZsb2F0aW5nIHBvaW50IHJlcHJlc2VudGF0aW9uXG4gICAgICAgICAgICBpZiAoc3BsaXRWYWx1ZS5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgICAgICAgYm91bmRlZFByZWNpc2lvbiA9IE1hdGgubWluKE1hdGgubWF4KHNwbGl0VmFsdWVbMV0ubGVuZ3RoLCBtaW5EZWNpbWFscyksIG1heERlY2ltYWxzKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGJvdW5kZWRQcmVjaXNpb24gPSBtaW5EZWNpbWFscztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcG93ZXIgPSBNYXRoLnBvdygxMCwgYm91bmRlZFByZWNpc2lvbik7XG5cbiAgICAgICAgICAgIC8vIE11bHRpcGx5IHVwIGJ5IHByZWNpc2lvbiwgcm91bmQgYWNjdXJhdGVseSwgdGhlbiBkaXZpZGUgYW5kIHVzZSBuYXRpdmUgdG9GaXhlZCgpOlxuICAgICAgICAgICAgb3V0cHV0ID0gKHJvdW5kaW5nRnVuY3Rpb24odmFsdWUgKyAnZSsnICsgYm91bmRlZFByZWNpc2lvbikgLyBwb3dlcikudG9GaXhlZChib3VuZGVkUHJlY2lzaW9uKTtcblxuICAgICAgICAgICAgaWYgKG9wdGlvbmFscyA+IG1heERlY2ltYWxzIC0gYm91bmRlZFByZWNpc2lvbikge1xuICAgICAgICAgICAgICAgIG9wdGlvbmFsc1JlZ0V4cCA9IG5ldyBSZWdFeHAoJ1xcXFwuPzB7MSwnICsgKG9wdGlvbmFscyAtIChtYXhEZWNpbWFscyAtIGJvdW5kZWRQcmVjaXNpb24pKSArICd9JCcpO1xuICAgICAgICAgICAgICAgIG91dHB1dCA9IG91dHB1dC5yZXBsYWNlKG9wdGlvbmFsc1JlZ0V4cCwgJycpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gb3V0cHV0O1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8vIGF2YWxpYWJsZSBvcHRpb25zXG4gICAgbnVtZXJhbC5vcHRpb25zID0gb3B0aW9ucztcblxuICAgIC8vIGF2YWxpYWJsZSBmb3JtYXRzXG4gICAgbnVtZXJhbC5mb3JtYXRzID0gZm9ybWF0cztcblxuICAgIC8vIGF2YWxpYWJsZSBmb3JtYXRzXG4gICAgbnVtZXJhbC5sb2NhbGVzID0gbG9jYWxlcztcblxuICAgIC8vIFRoaXMgZnVuY3Rpb24gc2V0cyB0aGUgY3VycmVudCBsb2NhbGUuICBJZlxuICAgIC8vIG5vIGFyZ3VtZW50cyBhcmUgcGFzc2VkIGluLCBpdCB3aWxsIHNpbXBseSByZXR1cm4gdGhlIGN1cnJlbnQgZ2xvYmFsXG4gICAgLy8gbG9jYWxlIGtleS5cbiAgICBudW1lcmFsLmxvY2FsZSA9IGZ1bmN0aW9uKGtleSkge1xuICAgICAgICBpZiAoa2V5KSB7XG4gICAgICAgICAgICBvcHRpb25zLmN1cnJlbnRMb2NhbGUgPSBrZXkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBvcHRpb25zLmN1cnJlbnRMb2NhbGU7XG4gICAgfTtcblxuICAgIC8vIFRoaXMgZnVuY3Rpb24gcHJvdmlkZXMgYWNjZXNzIHRvIHRoZSBsb2FkZWQgbG9jYWxlIGRhdGEuICBJZlxuICAgIC8vIG5vIGFyZ3VtZW50cyBhcmUgcGFzc2VkIGluLCBpdCB3aWxsIHNpbXBseSByZXR1cm4gdGhlIGN1cnJlbnRcbiAgICAvLyBnbG9iYWwgbG9jYWxlIG9iamVjdC5cbiAgICBudW1lcmFsLmxvY2FsZURhdGEgPSBmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgaWYgKCFrZXkpIHtcbiAgICAgICAgICAgIHJldHVybiBsb2NhbGVzW29wdGlvbnMuY3VycmVudExvY2FsZV07XG4gICAgICAgIH1cblxuICAgICAgICBrZXkgPSBrZXkudG9Mb3dlckNhc2UoKTtcblxuICAgICAgICBpZiAoIWxvY2FsZXNba2V5XSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmtub3duIGxvY2FsZSA6ICcgKyBrZXkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGxvY2FsZXNba2V5XTtcbiAgICB9O1xuXG4gICAgbnVtZXJhbC5yZXNldCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBmb3IgKHZhciBwcm9wZXJ0eSBpbiBkZWZhdWx0cykge1xuICAgICAgICAgICAgb3B0aW9uc1twcm9wZXJ0eV0gPSBkZWZhdWx0c1twcm9wZXJ0eV07XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgbnVtZXJhbC56ZXJvRm9ybWF0ID0gZnVuY3Rpb24oZm9ybWF0KSB7XG4gICAgICAgIG9wdGlvbnMuemVyb0Zvcm1hdCA9IHR5cGVvZihmb3JtYXQpID09PSAnc3RyaW5nJyA/IGZvcm1hdCA6IG51bGw7XG4gICAgfTtcblxuICAgIG51bWVyYWwubnVsbEZvcm1hdCA9IGZ1bmN0aW9uIChmb3JtYXQpIHtcbiAgICAgICAgb3B0aW9ucy5udWxsRm9ybWF0ID0gdHlwZW9mKGZvcm1hdCkgPT09ICdzdHJpbmcnID8gZm9ybWF0IDogbnVsbDtcbiAgICB9O1xuXG4gICAgbnVtZXJhbC5kZWZhdWx0Rm9ybWF0ID0gZnVuY3Rpb24oZm9ybWF0KSB7XG4gICAgICAgIG9wdGlvbnMuZGVmYXVsdEZvcm1hdCA9IHR5cGVvZihmb3JtYXQpID09PSAnc3RyaW5nJyA/IGZvcm1hdCA6ICcwLjAnO1xuICAgIH07XG5cbiAgICBudW1lcmFsLnJlZ2lzdGVyID0gZnVuY3Rpb24odHlwZSwgbmFtZSwgZm9ybWF0KSB7XG4gICAgICAgIG5hbWUgPSBuYW1lLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgaWYgKHRoaXNbdHlwZSArICdzJ11bbmFtZV0pIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IobmFtZSArICcgJyArIHR5cGUgKyAnIGFscmVhZHkgcmVnaXN0ZXJlZC4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXNbdHlwZSArICdzJ11bbmFtZV0gPSBmb3JtYXQ7XG5cbiAgICAgICAgcmV0dXJuIGZvcm1hdDtcbiAgICB9O1xuXG5cbiAgICBudW1lcmFsLnZhbGlkYXRlID0gZnVuY3Rpb24odmFsLCBjdWx0dXJlKSB7XG4gICAgICAgIHZhciBfZGVjaW1hbFNlcCxcbiAgICAgICAgICAgIF90aG91c2FuZFNlcCxcbiAgICAgICAgICAgIF9jdXJyU3ltYm9sLFxuICAgICAgICAgICAgX3ZhbEFycmF5LFxuICAgICAgICAgICAgX2FiYnJPYmosXG4gICAgICAgICAgICBfdGhvdXNhbmRSZWdFeCxcbiAgICAgICAgICAgIGxvY2FsZURhdGEsXG4gICAgICAgICAgICB0ZW1wO1xuXG4gICAgICAgIC8vY29lcmNlIHZhbCB0byBzdHJpbmdcbiAgICAgICAgaWYgKHR5cGVvZiB2YWwgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICB2YWwgKz0gJyc7XG5cbiAgICAgICAgICAgIGlmIChjb25zb2xlLndhcm4pIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ051bWVyYWwuanM6IFZhbHVlIGlzIG5vdCBzdHJpbmcuIEl0IGhhcyBiZWVuIGNvLWVyY2VkIHRvOiAnLCB2YWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy90cmltIHdoaXRlc3BhY2VzIGZyb20gZWl0aGVyIHNpZGVzXG4gICAgICAgIHZhbCA9IHZhbC50cmltKCk7XG5cbiAgICAgICAgLy9pZiB2YWwgaXMganVzdCBkaWdpdHMgcmV0dXJuIHRydWVcbiAgICAgICAgaWYgKCEhdmFsLm1hdGNoKC9eXFxkKyQvKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICAvL2lmIHZhbCBpcyBlbXB0eSByZXR1cm4gZmFsc2VcbiAgICAgICAgaWYgKHZhbCA9PT0gJycpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vZ2V0IHRoZSBkZWNpbWFsIGFuZCB0aG91c2FuZHMgc2VwYXJhdG9yIGZyb20gbnVtZXJhbC5sb2NhbGVEYXRhXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvL2NoZWNrIGlmIHRoZSBjdWx0dXJlIGlzIHVuZGVyc3Rvb2QgYnkgbnVtZXJhbC4gaWYgbm90LCBkZWZhdWx0IGl0IHRvIGN1cnJlbnQgbG9jYWxlXG4gICAgICAgICAgICBsb2NhbGVEYXRhID0gbnVtZXJhbC5sb2NhbGVEYXRhKGN1bHR1cmUpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBsb2NhbGVEYXRhID0gbnVtZXJhbC5sb2NhbGVEYXRhKG51bWVyYWwubG9jYWxlKCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9zZXR1cCB0aGUgZGVsaW1pdGVycyBhbmQgY3VycmVuY3kgc3ltYm9sIGJhc2VkIG9uIGN1bHR1cmUvbG9jYWxlXG4gICAgICAgIF9jdXJyU3ltYm9sID0gbG9jYWxlRGF0YS5jdXJyZW5jeS5zeW1ib2w7XG4gICAgICAgIF9hYmJyT2JqID0gbG9jYWxlRGF0YS5hYmJyZXZpYXRpb25zO1xuICAgICAgICBfZGVjaW1hbFNlcCA9IGxvY2FsZURhdGEuZGVsaW1pdGVycy5kZWNpbWFsO1xuICAgICAgICBpZiAobG9jYWxlRGF0YS5kZWxpbWl0ZXJzLnRob3VzYW5kcyA9PT0gJy4nKSB7XG4gICAgICAgICAgICBfdGhvdXNhbmRTZXAgPSAnXFxcXC4nO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgX3Rob3VzYW5kU2VwID0gbG9jYWxlRGF0YS5kZWxpbWl0ZXJzLnRob3VzYW5kcztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHZhbGlkYXRpbmcgY3VycmVuY3kgc3ltYm9sXG4gICAgICAgIHRlbXAgPSB2YWwubWF0Y2goL15bXlxcZF0rLyk7XG4gICAgICAgIGlmICh0ZW1wICE9PSBudWxsKSB7XG4gICAgICAgICAgICB2YWwgPSB2YWwuc3Vic3RyKDEpO1xuICAgICAgICAgICAgaWYgKHRlbXBbMF0gIT09IF9jdXJyU3ltYm9sKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy92YWxpZGF0aW5nIGFiYnJldmlhdGlvbiBzeW1ib2xcbiAgICAgICAgdGVtcCA9IHZhbC5tYXRjaCgvW15cXGRdKyQvKTtcbiAgICAgICAgaWYgKHRlbXAgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHZhbCA9IHZhbC5zbGljZSgwLCAtMSk7XG4gICAgICAgICAgICBpZiAodGVtcFswXSAhPT0gX2FiYnJPYmoudGhvdXNhbmQgJiYgdGVtcFswXSAhPT0gX2FiYnJPYmoubWlsbGlvbiAmJiB0ZW1wWzBdICE9PSBfYWJick9iai5iaWxsaW9uICYmIHRlbXBbMF0gIT09IF9hYmJyT2JqLnRyaWxsaW9uKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgX3Rob3VzYW5kUmVnRXggPSBuZXcgUmVnRXhwKF90aG91c2FuZFNlcCArICd7Mn0nKTtcblxuICAgICAgICBpZiAoIXZhbC5tYXRjaCgvW15cXGQuLF0vZykpIHtcbiAgICAgICAgICAgIF92YWxBcnJheSA9IHZhbC5zcGxpdChfZGVjaW1hbFNlcCk7XG4gICAgICAgICAgICBpZiAoX3ZhbEFycmF5Lmxlbmd0aCA+IDIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChfdmFsQXJyYXkubGVuZ3RoIDwgMikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKCAhISBfdmFsQXJyYXlbMF0ubWF0Y2goL15cXGQrLipcXGQkLykgJiYgIV92YWxBcnJheVswXS5tYXRjaChfdGhvdXNhbmRSZWdFeCkpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfdmFsQXJyYXlbMF0ubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKCAhISBfdmFsQXJyYXlbMF0ubWF0Y2goL15cXGQrJC8pICYmICFfdmFsQXJyYXlbMF0ubWF0Y2goX3Rob3VzYW5kUmVnRXgpICYmICEhIF92YWxBcnJheVsxXS5tYXRjaCgvXlxcZCskLykpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICggISEgX3ZhbEFycmF5WzBdLm1hdGNoKC9eXFxkKy4qXFxkJC8pICYmICFfdmFsQXJyYXlbMF0ubWF0Y2goX3Rob3VzYW5kUmVnRXgpICYmICEhIF92YWxBcnJheVsxXS5tYXRjaCgvXlxcZCskLykpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG5cblxuICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAgICAgTnVtZXJhbCBQcm90b3R5cGVcbiAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbiAgICBudW1lcmFsLmZuID0gTnVtZXJhbC5wcm90b3R5cGUgPSB7XG4gICAgICAgIGNsb25lOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiBudW1lcmFsKHRoaXMpO1xuICAgICAgICB9LFxuICAgICAgICBmb3JtYXQ6IGZ1bmN0aW9uKGlucHV0U3RyaW5nLCByb3VuZGluZ0Z1bmN0aW9uKSB7XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLl92YWx1ZSxcbiAgICAgICAgICAgICAgICBmb3JtYXQgPSBpbnB1dFN0cmluZyB8fCBvcHRpb25zLmRlZmF1bHRGb3JtYXQsXG4gICAgICAgICAgICAgICAga2luZCxcbiAgICAgICAgICAgICAgICBvdXRwdXQsXG4gICAgICAgICAgICAgICAgZm9ybWF0RnVuY3Rpb247XG5cbiAgICAgICAgICAgIC8vIG1ha2Ugc3VyZSB3ZSBoYXZlIGEgcm91bmRpbmdGdW5jdGlvblxuICAgICAgICAgICAgcm91bmRpbmdGdW5jdGlvbiA9IHJvdW5kaW5nRnVuY3Rpb24gfHwgTWF0aC5yb3VuZDtcblxuICAgICAgICAgICAgLy8gZm9ybWF0IGJhc2VkIG9uIHZhbHVlXG4gICAgICAgICAgICBpZiAodmFsdWUgPT09IDAgJiYgb3B0aW9ucy56ZXJvRm9ybWF0ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgb3V0cHV0ID0gb3B0aW9ucy56ZXJvRm9ybWF0O1xuICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gbnVsbCAmJiBvcHRpb25zLm51bGxGb3JtYXQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBvdXRwdXQgPSBvcHRpb25zLm51bGxGb3JtYXQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGZvciAoa2luZCBpbiBmb3JtYXRzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChmb3JtYXQubWF0Y2goZm9ybWF0c1traW5kXS5yZWdleHBzLmZvcm1hdCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdEZ1bmN0aW9uID0gZm9ybWF0c1traW5kXS5mb3JtYXQ7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZm9ybWF0RnVuY3Rpb24gPSBmb3JtYXRGdW5jdGlvbiB8fCBudW1lcmFsLl8ubnVtYmVyVG9Gb3JtYXQ7XG5cbiAgICAgICAgICAgICAgICBvdXRwdXQgPSBmb3JtYXRGdW5jdGlvbih2YWx1ZSwgZm9ybWF0LCByb3VuZGluZ0Z1bmN0aW9uKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICAgICAgfSxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBpbnB1dDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5faW5wdXQ7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX3ZhbHVlID0gTnVtYmVyKHZhbHVlKTtcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH0sXG4gICAgICAgIGFkZDogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIHZhciBjb3JyRmFjdG9yID0gXy5jb3JyZWN0aW9uRmFjdG9yLmNhbGwobnVsbCwgdGhpcy5fdmFsdWUsIHZhbHVlKTtcblxuICAgICAgICAgICAgZnVuY3Rpb24gY2JhY2soYWNjdW0sIGN1cnIsIGN1cnJJLCBPKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFjY3VtICsgTWF0aC5yb3VuZChjb3JyRmFjdG9yICogY3Vycik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuX3ZhbHVlID0gXy5yZWR1Y2UoW3RoaXMuX3ZhbHVlLCB2YWx1ZV0sIGNiYWNrLCAwKSAvIGNvcnJGYWN0b3I7XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9LFxuICAgICAgICBzdWJ0cmFjdDogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIHZhciBjb3JyRmFjdG9yID0gXy5jb3JyZWN0aW9uRmFjdG9yLmNhbGwobnVsbCwgdGhpcy5fdmFsdWUsIHZhbHVlKTtcblxuICAgICAgICAgICAgZnVuY3Rpb24gY2JhY2soYWNjdW0sIGN1cnIsIGN1cnJJLCBPKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFjY3VtIC0gTWF0aC5yb3VuZChjb3JyRmFjdG9yICogY3Vycik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuX3ZhbHVlID0gXy5yZWR1Y2UoW3ZhbHVlXSwgY2JhY2ssIE1hdGgucm91bmQodGhpcy5fdmFsdWUgKiBjb3JyRmFjdG9yKSkgLyBjb3JyRmFjdG9yO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfSxcbiAgICAgICAgbXVsdGlwbHk6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBmdW5jdGlvbiBjYmFjayhhY2N1bSwgY3VyciwgY3VyckksIE8pIHtcbiAgICAgICAgICAgICAgICB2YXIgY29yckZhY3RvciA9IF8uY29ycmVjdGlvbkZhY3RvcihhY2N1bSwgY3Vycik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE1hdGgucm91bmQoYWNjdW0gKiBjb3JyRmFjdG9yKSAqIE1hdGgucm91bmQoY3VyciAqIGNvcnJGYWN0b3IpIC8gTWF0aC5yb3VuZChjb3JyRmFjdG9yICogY29yckZhY3Rvcik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuX3ZhbHVlID0gXy5yZWR1Y2UoW3RoaXMuX3ZhbHVlLCB2YWx1ZV0sIGNiYWNrLCAxKTtcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH0sXG4gICAgICAgIGRpdmlkZTogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGZ1bmN0aW9uIGNiYWNrKGFjY3VtLCBjdXJyLCBjdXJySSwgTykge1xuICAgICAgICAgICAgICAgIHZhciBjb3JyRmFjdG9yID0gXy5jb3JyZWN0aW9uRmFjdG9yKGFjY3VtLCBjdXJyKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gTWF0aC5yb3VuZChhY2N1bSAqIGNvcnJGYWN0b3IpIC8gTWF0aC5yb3VuZChjdXJyICogY29yckZhY3Rvcik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuX3ZhbHVlID0gXy5yZWR1Y2UoW3RoaXMuX3ZhbHVlLCB2YWx1ZV0sIGNiYWNrKTtcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH0sXG4gICAgICAgIGRpZmZlcmVuY2U6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5hYnMobnVtZXJhbCh0aGlzLl92YWx1ZSkuc3VidHJhY3QodmFsdWUpLnZhbHVlKCkpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAgICAgRGVmYXVsdCBMb2NhbGUgJiYgRm9ybWF0XG4gICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4gICAgbnVtZXJhbC5yZWdpc3RlcignbG9jYWxlJywgJ2VuJywge1xuICAgICAgICBkZWxpbWl0ZXJzOiB7XG4gICAgICAgICAgICB0aG91c2FuZHM6ICcsJyxcbiAgICAgICAgICAgIGRlY2ltYWw6ICcuJ1xuICAgICAgICB9LFxuICAgICAgICBhYmJyZXZpYXRpb25zOiB7XG4gICAgICAgICAgICB0aG91c2FuZDogJ2snLFxuICAgICAgICAgICAgbWlsbGlvbjogJ20nLFxuICAgICAgICAgICAgYmlsbGlvbjogJ2InLFxuICAgICAgICAgICAgdHJpbGxpb246ICd0J1xuICAgICAgICB9LFxuICAgICAgICBvcmRpbmFsOiBmdW5jdGlvbihudW1iZXIpIHtcbiAgICAgICAgICAgIHZhciBiID0gbnVtYmVyICUgMTA7XG4gICAgICAgICAgICByZXR1cm4gKH5+KG51bWJlciAlIDEwMCAvIDEwKSA9PT0gMSkgPyAndGgnIDpcbiAgICAgICAgICAgICAgICAoYiA9PT0gMSkgPyAnc3QnIDpcbiAgICAgICAgICAgICAgICAoYiA9PT0gMikgPyAnbmQnIDpcbiAgICAgICAgICAgICAgICAoYiA9PT0gMykgPyAncmQnIDogJ3RoJztcbiAgICAgICAgfSxcbiAgICAgICAgY3VycmVuY3k6IHtcbiAgICAgICAgICAgIHN5bWJvbDogJyQnXG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIFxuXG4oZnVuY3Rpb24oKSB7XG4gICAgICAgIG51bWVyYWwucmVnaXN0ZXIoJ2Zvcm1hdCcsICdicHMnLCB7XG4gICAgICAgICAgICByZWdleHBzOiB7XG4gICAgICAgICAgICAgICAgZm9ybWF0OiAvKEJQUykvLFxuICAgICAgICAgICAgICAgIHVuZm9ybWF0OiAvKEJQUykvXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZm9ybWF0OiBmdW5jdGlvbih2YWx1ZSwgZm9ybWF0LCByb3VuZGluZ0Z1bmN0aW9uKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNwYWNlID0gbnVtZXJhbC5fLmluY2x1ZGVzKGZvcm1hdCwgJyBCUFMnKSA/ICcgJyA6ICcnLFxuICAgICAgICAgICAgICAgICAgICBvdXRwdXQ7XG5cbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlICogMTAwMDA7XG5cbiAgICAgICAgICAgICAgICAvLyBjaGVjayBmb3Igc3BhY2UgYmVmb3JlIEJQU1xuICAgICAgICAgICAgICAgIGZvcm1hdCA9IGZvcm1hdC5yZXBsYWNlKC9cXHM/QlBTLywgJycpO1xuXG4gICAgICAgICAgICAgICAgb3V0cHV0ID0gbnVtZXJhbC5fLm51bWJlclRvRm9ybWF0KHZhbHVlLCBmb3JtYXQsIHJvdW5kaW5nRnVuY3Rpb24pO1xuXG4gICAgICAgICAgICAgICAgaWYgKG51bWVyYWwuXy5pbmNsdWRlcyhvdXRwdXQsICcpJykpIHtcbiAgICAgICAgICAgICAgICAgICAgb3V0cHV0ID0gb3V0cHV0LnNwbGl0KCcnKTtcblxuICAgICAgICAgICAgICAgICAgICBvdXRwdXQuc3BsaWNlKC0xLCAwLCBzcGFjZSArICdCUFMnKTtcblxuICAgICAgICAgICAgICAgICAgICBvdXRwdXQgPSBvdXRwdXQuam9pbignJyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgb3V0cHV0ID0gb3V0cHV0ICsgc3BhY2UgKyAnQlBTJztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gb3V0cHV0O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHVuZm9ybWF0OiBmdW5jdGlvbihzdHJpbmcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKyhudW1lcmFsLl8uc3RyaW5nVG9OdW1iZXIoc3RyaW5nKSAqIDAuMDAwMSkudG9GaXhlZCgxNSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xufSkoKTtcblxuXG4oZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBkZWNpbWFsID0ge1xuICAgICAgICAgICAgYmFzZTogMTAwMCxcbiAgICAgICAgICAgIHN1ZmZpeGVzOiBbJ0InLCAnS0InLCAnTUInLCAnR0InLCAnVEInLCAnUEInLCAnRUInLCAnWkInLCAnWUInXVxuICAgICAgICB9LFxuICAgICAgICBiaW5hcnkgPSB7XG4gICAgICAgICAgICBiYXNlOiAxMDI0LFxuICAgICAgICAgICAgc3VmZml4ZXM6IFsnQicsICdLaUInLCAnTWlCJywgJ0dpQicsICdUaUInLCAnUGlCJywgJ0VpQicsICdaaUInLCAnWWlCJ11cbiAgICAgICAgfTtcblxuICAgIHZhciBhbGxTdWZmaXhlcyA9ICBkZWNpbWFsLnN1ZmZpeGVzLmNvbmNhdChiaW5hcnkuc3VmZml4ZXMuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICByZXR1cm4gZGVjaW1hbC5zdWZmaXhlcy5pbmRleE9mKGl0ZW0pIDwgMDtcbiAgICAgICAgfSkpO1xuICAgICAgICB2YXIgdW5mb3JtYXRSZWdleCA9IGFsbFN1ZmZpeGVzLmpvaW4oJ3wnKTtcbiAgICAgICAgLy8gQWxsb3cgc3VwcG9ydCBmb3IgQlBTIChodHRwOi8vd3d3LmludmVzdG9wZWRpYS5jb20vdGVybXMvYi9iYXNpc3BvaW50LmFzcClcbiAgICAgICAgdW5mb3JtYXRSZWdleCA9ICcoJyArIHVuZm9ybWF0UmVnZXgucmVwbGFjZSgnQicsICdCKD8hUFMpJykgKyAnKSc7XG5cbiAgICBudW1lcmFsLnJlZ2lzdGVyKCdmb3JtYXQnLCAnYnl0ZXMnLCB7XG4gICAgICAgIHJlZ2V4cHM6IHtcbiAgICAgICAgICAgIGZvcm1hdDogLyhbMFxcc11pP2IpLyxcbiAgICAgICAgICAgIHVuZm9ybWF0OiBuZXcgUmVnRXhwKHVuZm9ybWF0UmVnZXgpXG4gICAgICAgIH0sXG4gICAgICAgIGZvcm1hdDogZnVuY3Rpb24odmFsdWUsIGZvcm1hdCwgcm91bmRpbmdGdW5jdGlvbikge1xuICAgICAgICAgICAgdmFyIG91dHB1dCxcbiAgICAgICAgICAgICAgICBieXRlcyA9IG51bWVyYWwuXy5pbmNsdWRlcyhmb3JtYXQsICdpYicpID8gYmluYXJ5IDogZGVjaW1hbCxcbiAgICAgICAgICAgICAgICBzdWZmaXggPSBudW1lcmFsLl8uaW5jbHVkZXMoZm9ybWF0LCAnIGInKSB8fCBudW1lcmFsLl8uaW5jbHVkZXMoZm9ybWF0LCAnIGliJykgPyAnICcgOiAnJyxcbiAgICAgICAgICAgICAgICBwb3dlcixcbiAgICAgICAgICAgICAgICBtaW4sXG4gICAgICAgICAgICAgICAgbWF4O1xuXG4gICAgICAgICAgICAvLyBjaGVjayBmb3Igc3BhY2UgYmVmb3JlXG4gICAgICAgICAgICBmb3JtYXQgPSBmb3JtYXQucmVwbGFjZSgvXFxzP2k/Yi8sICcnKTtcblxuICAgICAgICAgICAgZm9yIChwb3dlciA9IDA7IHBvd2VyIDw9IGJ5dGVzLnN1ZmZpeGVzLmxlbmd0aDsgcG93ZXIrKykge1xuICAgICAgICAgICAgICAgIG1pbiA9IE1hdGgucG93KGJ5dGVzLmJhc2UsIHBvd2VyKTtcbiAgICAgICAgICAgICAgICBtYXggPSBNYXRoLnBvdyhieXRlcy5iYXNlLCBwb3dlciArIDEpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSAwIHx8IHZhbHVlID49IG1pbiAmJiB2YWx1ZSA8IG1heCkge1xuICAgICAgICAgICAgICAgICAgICBzdWZmaXggKz0gYnl0ZXMuc3VmZml4ZXNbcG93ZXJdO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChtaW4gPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlIC8gbWluO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBvdXRwdXQgPSBudW1lcmFsLl8ubnVtYmVyVG9Gb3JtYXQodmFsdWUsIGZvcm1hdCwgcm91bmRpbmdGdW5jdGlvbik7XG5cbiAgICAgICAgICAgIHJldHVybiBvdXRwdXQgKyBzdWZmaXg7XG4gICAgICAgIH0sXG4gICAgICAgIHVuZm9ybWF0OiBmdW5jdGlvbihzdHJpbmcpIHtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IG51bWVyYWwuXy5zdHJpbmdUb051bWJlcihzdHJpbmcpLFxuICAgICAgICAgICAgICAgIHBvd2VyLFxuICAgICAgICAgICAgICAgIGJ5dGVzTXVsdGlwbGllcjtcblxuICAgICAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgZm9yIChwb3dlciA9IGRlY2ltYWwuc3VmZml4ZXMubGVuZ3RoIC0gMTsgcG93ZXIgPj0gMDsgcG93ZXItLSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAobnVtZXJhbC5fLmluY2x1ZGVzKHN0cmluZywgZGVjaW1hbC5zdWZmaXhlc1twb3dlcl0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBieXRlc011bHRpcGxpZXIgPSBNYXRoLnBvdyhkZWNpbWFsLmJhc2UsIHBvd2VyKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAobnVtZXJhbC5fLmluY2x1ZGVzKHN0cmluZywgYmluYXJ5LnN1ZmZpeGVzW3Bvd2VyXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ5dGVzTXVsdGlwbGllciA9IE1hdGgucG93KGJpbmFyeS5iYXNlLCBwb3dlcik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdmFsdWUgKj0gKGJ5dGVzTXVsdGlwbGllciB8fCAxKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9XG4gICAgfSk7XG59KSgpO1xuXG5cbihmdW5jdGlvbigpIHtcbiAgICAgICAgbnVtZXJhbC5yZWdpc3RlcignZm9ybWF0JywgJ2N1cnJlbmN5Jywge1xuICAgICAgICByZWdleHBzOiB7XG4gICAgICAgICAgICBmb3JtYXQ6IC8oXFwkKS9cbiAgICAgICAgfSxcbiAgICAgICAgZm9ybWF0OiBmdW5jdGlvbih2YWx1ZSwgZm9ybWF0LCByb3VuZGluZ0Z1bmN0aW9uKSB7XG4gICAgICAgICAgICB2YXIgbG9jYWxlID0gbnVtZXJhbC5sb2NhbGVzW251bWVyYWwub3B0aW9ucy5jdXJyZW50TG9jYWxlXSxcbiAgICAgICAgICAgICAgICBzeW1ib2xzID0ge1xuICAgICAgICAgICAgICAgICAgICBiZWZvcmU6IGZvcm1hdC5tYXRjaCgvXihbXFwrfFxcLXxcXCh8XFxzfFxcJF0qKS8pWzBdLFxuICAgICAgICAgICAgICAgICAgICBhZnRlcjogZm9ybWF0Lm1hdGNoKC8oW1xcK3xcXC18XFwpfFxcc3xcXCRdKikkLylbMF1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG91dHB1dCxcbiAgICAgICAgICAgICAgICBzeW1ib2wsXG4gICAgICAgICAgICAgICAgaTtcblxuICAgICAgICAgICAgLy8gc3RyaXAgZm9ybWF0IG9mIHNwYWNlcyBhbmQgJFxuICAgICAgICAgICAgZm9ybWF0ID0gZm9ybWF0LnJlcGxhY2UoL1xccz9cXCRcXHM/LywgJycpO1xuXG4gICAgICAgICAgICAvLyBmb3JtYXQgdGhlIG51bWJlclxuICAgICAgICAgICAgb3V0cHV0ID0gbnVtZXJhbC5fLm51bWJlclRvRm9ybWF0KHZhbHVlLCBmb3JtYXQsIHJvdW5kaW5nRnVuY3Rpb24pO1xuXG4gICAgICAgICAgICAvLyB1cGRhdGUgdGhlIGJlZm9yZSBhbmQgYWZ0ZXIgYmFzZWQgb24gdmFsdWVcbiAgICAgICAgICAgIGlmICh2YWx1ZSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgc3ltYm9scy5iZWZvcmUgPSBzeW1ib2xzLmJlZm9yZS5yZXBsYWNlKC9bXFwtXFwoXS8sICcnKTtcbiAgICAgICAgICAgICAgICBzeW1ib2xzLmFmdGVyID0gc3ltYm9scy5hZnRlci5yZXBsYWNlKC9bXFwtXFwpXS8sICcnKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWUgPCAwICYmICghbnVtZXJhbC5fLmluY2x1ZGVzKHN5bWJvbHMuYmVmb3JlLCAnLScpICYmICFudW1lcmFsLl8uaW5jbHVkZXMoc3ltYm9scy5iZWZvcmUsICcoJykpKSB7XG4gICAgICAgICAgICAgICAgc3ltYm9scy5iZWZvcmUgPSAnLScgKyBzeW1ib2xzLmJlZm9yZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gbG9vcCB0aHJvdWdoIGVhY2ggYmVmb3JlIHN5bWJvbFxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHN5bWJvbHMuYmVmb3JlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgc3ltYm9sID0gc3ltYm9scy5iZWZvcmVbaV07XG5cbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHN5bWJvbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICckJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dCA9IG51bWVyYWwuXy5pbnNlcnQob3V0cHV0LCBsb2NhbGUuY3VycmVuY3kuc3ltYm9sLCBpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICcgJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dCA9IG51bWVyYWwuXy5pbnNlcnQob3V0cHV0LCAnICcsIGkgKyBsb2NhbGUuY3VycmVuY3kuc3ltYm9sLmxlbmd0aCAtIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBsb29wIHRocm91Z2ggZWFjaCBhZnRlciBzeW1ib2xcbiAgICAgICAgICAgIGZvciAoaSA9IHN5bWJvbHMuYWZ0ZXIubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgICAgICBzeW1ib2wgPSBzeW1ib2xzLmFmdGVyW2ldO1xuXG4gICAgICAgICAgICAgICAgc3dpdGNoIChzeW1ib2wpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnJCc6XG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXQgPSBpID09PSBzeW1ib2xzLmFmdGVyLmxlbmd0aCAtIDEgPyBvdXRwdXQgKyBsb2NhbGUuY3VycmVuY3kuc3ltYm9sIDogbnVtZXJhbC5fLmluc2VydChvdXRwdXQsIGxvY2FsZS5jdXJyZW5jeS5zeW1ib2wsIC0oc3ltYm9scy5hZnRlci5sZW5ndGggLSAoMSArIGkpKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnICc6XG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXQgPSBpID09PSBzeW1ib2xzLmFmdGVyLmxlbmd0aCAtIDEgPyBvdXRwdXQgKyAnICcgOiBudW1lcmFsLl8uaW5zZXJ0KG91dHB1dCwgJyAnLCAtKHN5bWJvbHMuYWZ0ZXIubGVuZ3RoIC0gKDEgKyBpKSArIGxvY2FsZS5jdXJyZW5jeS5zeW1ib2wubGVuZ3RoIC0gMSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgICAgIH1cbiAgICB9KTtcbn0pKCk7XG5cblxuKGZ1bmN0aW9uKCkge1xuICAgICAgICBudW1lcmFsLnJlZ2lzdGVyKCdmb3JtYXQnLCAnZXhwb25lbnRpYWwnLCB7XG4gICAgICAgIHJlZ2V4cHM6IHtcbiAgICAgICAgICAgIGZvcm1hdDogLyhlXFwrfGUtKS8sXG4gICAgICAgICAgICB1bmZvcm1hdDogLyhlXFwrfGUtKS9cbiAgICAgICAgfSxcbiAgICAgICAgZm9ybWF0OiBmdW5jdGlvbih2YWx1ZSwgZm9ybWF0LCByb3VuZGluZ0Z1bmN0aW9uKSB7XG4gICAgICAgICAgICB2YXIgb3V0cHV0LFxuICAgICAgICAgICAgICAgIGV4cG9uZW50aWFsID0gdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyAmJiAhbnVtZXJhbC5fLmlzTmFOKHZhbHVlKSA/IHZhbHVlLnRvRXhwb25lbnRpYWwoKSA6ICcwZSswJyxcbiAgICAgICAgICAgICAgICBwYXJ0cyA9IGV4cG9uZW50aWFsLnNwbGl0KCdlJyk7XG5cbiAgICAgICAgICAgIGZvcm1hdCA9IGZvcm1hdC5yZXBsYWNlKC9lW1xcK3xcXC1dezF9MC8sICcnKTtcblxuICAgICAgICAgICAgb3V0cHV0ID0gbnVtZXJhbC5fLm51bWJlclRvRm9ybWF0KE51bWJlcihwYXJ0c1swXSksIGZvcm1hdCwgcm91bmRpbmdGdW5jdGlvbik7XG5cbiAgICAgICAgICAgIHJldHVybiBvdXRwdXQgKyAnZScgKyBwYXJ0c1sxXTtcbiAgICAgICAgfSxcbiAgICAgICAgdW5mb3JtYXQ6IGZ1bmN0aW9uKHN0cmluZykge1xuICAgICAgICAgICAgdmFyIHBhcnRzID0gbnVtZXJhbC5fLmluY2x1ZGVzKHN0cmluZywgJ2UrJykgPyBzdHJpbmcuc3BsaXQoJ2UrJykgOiBzdHJpbmcuc3BsaXQoJ2UtJyksXG4gICAgICAgICAgICAgICAgdmFsdWUgPSBOdW1iZXIocGFydHNbMF0pLFxuICAgICAgICAgICAgICAgIHBvd2VyID0gTnVtYmVyKHBhcnRzWzFdKTtcblxuICAgICAgICAgICAgcG93ZXIgPSBudW1lcmFsLl8uaW5jbHVkZXMoc3RyaW5nLCAnZS0nKSA/IHBvd2VyICo9IC0xIDogcG93ZXI7XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGNiYWNrKGFjY3VtLCBjdXJyLCBjdXJySSwgTykge1xuICAgICAgICAgICAgICAgIHZhciBjb3JyRmFjdG9yID0gbnVtZXJhbC5fLmNvcnJlY3Rpb25GYWN0b3IoYWNjdW0sIGN1cnIpLFxuICAgICAgICAgICAgICAgICAgICBudW0gPSAoYWNjdW0gKiBjb3JyRmFjdG9yKSAqIChjdXJyICogY29yckZhY3RvcikgLyAoY29yckZhY3RvciAqIGNvcnJGYWN0b3IpO1xuICAgICAgICAgICAgICAgIHJldHVybiBudW07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBudW1lcmFsLl8ucmVkdWNlKFt2YWx1ZSwgTWF0aC5wb3coMTAsIHBvd2VyKV0sIGNiYWNrLCAxKTtcbiAgICAgICAgfVxuICAgIH0pO1xufSkoKTtcblxuXG4oZnVuY3Rpb24oKSB7XG4gICAgICAgIG51bWVyYWwucmVnaXN0ZXIoJ2Zvcm1hdCcsICdvcmRpbmFsJywge1xuICAgICAgICByZWdleHBzOiB7XG4gICAgICAgICAgICBmb3JtYXQ6IC8obykvXG4gICAgICAgIH0sXG4gICAgICAgIGZvcm1hdDogZnVuY3Rpb24odmFsdWUsIGZvcm1hdCwgcm91bmRpbmdGdW5jdGlvbikge1xuICAgICAgICAgICAgdmFyIGxvY2FsZSA9IG51bWVyYWwubG9jYWxlc1tudW1lcmFsLm9wdGlvbnMuY3VycmVudExvY2FsZV0sXG4gICAgICAgICAgICAgICAgb3V0cHV0LFxuICAgICAgICAgICAgICAgIG9yZGluYWwgPSBudW1lcmFsLl8uaW5jbHVkZXMoZm9ybWF0LCAnIG8nKSA/ICcgJyA6ICcnO1xuXG4gICAgICAgICAgICAvLyBjaGVjayBmb3Igc3BhY2UgYmVmb3JlXG4gICAgICAgICAgICBmb3JtYXQgPSBmb3JtYXQucmVwbGFjZSgvXFxzP28vLCAnJyk7XG5cbiAgICAgICAgICAgIG9yZGluYWwgKz0gbG9jYWxlLm9yZGluYWwodmFsdWUpO1xuXG4gICAgICAgICAgICBvdXRwdXQgPSBudW1lcmFsLl8ubnVtYmVyVG9Gb3JtYXQodmFsdWUsIGZvcm1hdCwgcm91bmRpbmdGdW5jdGlvbik7XG5cbiAgICAgICAgICAgIHJldHVybiBvdXRwdXQgKyBvcmRpbmFsO1xuICAgICAgICB9XG4gICAgfSk7XG59KSgpO1xuXG5cbihmdW5jdGlvbigpIHtcbiAgICAgICAgbnVtZXJhbC5yZWdpc3RlcignZm9ybWF0JywgJ3BlcmNlbnRhZ2UnLCB7XG4gICAgICAgIHJlZ2V4cHM6IHtcbiAgICAgICAgICAgIGZvcm1hdDogLyglKS8sXG4gICAgICAgICAgICB1bmZvcm1hdDogLyglKS9cbiAgICAgICAgfSxcbiAgICAgICAgZm9ybWF0OiBmdW5jdGlvbih2YWx1ZSwgZm9ybWF0LCByb3VuZGluZ0Z1bmN0aW9uKSB7XG4gICAgICAgICAgICB2YXIgc3BhY2UgPSBudW1lcmFsLl8uaW5jbHVkZXMoZm9ybWF0LCAnICUnKSA/ICcgJyA6ICcnLFxuICAgICAgICAgICAgICAgIG91dHB1dDtcblxuICAgICAgICAgICAgaWYgKG51bWVyYWwub3B0aW9ucy5zY2FsZVBlcmNlbnRCeTEwMCkge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUgKiAxMDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGNoZWNrIGZvciBzcGFjZSBiZWZvcmUgJVxuICAgICAgICAgICAgZm9ybWF0ID0gZm9ybWF0LnJlcGxhY2UoL1xccz9cXCUvLCAnJyk7XG5cbiAgICAgICAgICAgIG91dHB1dCA9IG51bWVyYWwuXy5udW1iZXJUb0Zvcm1hdCh2YWx1ZSwgZm9ybWF0LCByb3VuZGluZ0Z1bmN0aW9uKTtcblxuICAgICAgICAgICAgaWYgKG51bWVyYWwuXy5pbmNsdWRlcyhvdXRwdXQsICcpJykpIHtcbiAgICAgICAgICAgICAgICBvdXRwdXQgPSBvdXRwdXQuc3BsaXQoJycpO1xuXG4gICAgICAgICAgICAgICAgb3V0cHV0LnNwbGljZSgtMSwgMCwgc3BhY2UgKyAnJScpO1xuXG4gICAgICAgICAgICAgICAgb3V0cHV0ID0gb3V0cHV0LmpvaW4oJycpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBvdXRwdXQgPSBvdXRwdXQgKyBzcGFjZSArICclJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICAgICAgfSxcbiAgICAgICAgdW5mb3JtYXQ6IGZ1bmN0aW9uKHN0cmluZykge1xuICAgICAgICAgICAgdmFyIG51bWJlciA9IG51bWVyYWwuXy5zdHJpbmdUb051bWJlcihzdHJpbmcpO1xuICAgICAgICAgICAgaWYgKG51bWVyYWwub3B0aW9ucy5zY2FsZVBlcmNlbnRCeTEwMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudW1iZXIgKiAwLjAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG51bWJlcjtcbiAgICAgICAgfVxuICAgIH0pO1xufSkoKTtcblxuXG4oZnVuY3Rpb24oKSB7XG4gICAgICAgIG51bWVyYWwucmVnaXN0ZXIoJ2Zvcm1hdCcsICd0aW1lJywge1xuICAgICAgICByZWdleHBzOiB7XG4gICAgICAgICAgICBmb3JtYXQ6IC8oOikvLFxuICAgICAgICAgICAgdW5mb3JtYXQ6IC8oOikvXG4gICAgICAgIH0sXG4gICAgICAgIGZvcm1hdDogZnVuY3Rpb24odmFsdWUsIGZvcm1hdCwgcm91bmRpbmdGdW5jdGlvbikge1xuICAgICAgICAgICAgdmFyIGhvdXJzID0gTWF0aC5mbG9vcih2YWx1ZSAvIDYwIC8gNjApLFxuICAgICAgICAgICAgICAgIG1pbnV0ZXMgPSBNYXRoLmZsb29yKCh2YWx1ZSAtIChob3VycyAqIDYwICogNjApKSAvIDYwKSxcbiAgICAgICAgICAgICAgICBzZWNvbmRzID0gTWF0aC5yb3VuZCh2YWx1ZSAtIChob3VycyAqIDYwICogNjApIC0gKG1pbnV0ZXMgKiA2MCkpO1xuXG4gICAgICAgICAgICByZXR1cm4gaG91cnMgKyAnOicgKyAobWludXRlcyA8IDEwID8gJzAnICsgbWludXRlcyA6IG1pbnV0ZXMpICsgJzonICsgKHNlY29uZHMgPCAxMCA/ICcwJyArIHNlY29uZHMgOiBzZWNvbmRzKTtcbiAgICAgICAgfSxcbiAgICAgICAgdW5mb3JtYXQ6IGZ1bmN0aW9uKHN0cmluZykge1xuICAgICAgICAgICAgdmFyIHRpbWVBcnJheSA9IHN0cmluZy5zcGxpdCgnOicpLFxuICAgICAgICAgICAgICAgIHNlY29uZHMgPSAwO1xuXG4gICAgICAgICAgICAvLyB0dXJuIGhvdXJzIGFuZCBtaW51dGVzIGludG8gc2Vjb25kcyBhbmQgYWRkIHRoZW0gYWxsIHVwXG4gICAgICAgICAgICBpZiAodGltZUFycmF5Lmxlbmd0aCA9PT0gMykge1xuICAgICAgICAgICAgICAgIC8vIGhvdXJzXG4gICAgICAgICAgICAgICAgc2Vjb25kcyA9IHNlY29uZHMgKyAoTnVtYmVyKHRpbWVBcnJheVswXSkgKiA2MCAqIDYwKTtcbiAgICAgICAgICAgICAgICAvLyBtaW51dGVzXG4gICAgICAgICAgICAgICAgc2Vjb25kcyA9IHNlY29uZHMgKyAoTnVtYmVyKHRpbWVBcnJheVsxXSkgKiA2MCk7XG4gICAgICAgICAgICAgICAgLy8gc2Vjb25kc1xuICAgICAgICAgICAgICAgIHNlY29uZHMgPSBzZWNvbmRzICsgTnVtYmVyKHRpbWVBcnJheVsyXSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRpbWVBcnJheS5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgICAgICAgICAvLyBtaW51dGVzXG4gICAgICAgICAgICAgICAgc2Vjb25kcyA9IHNlY29uZHMgKyAoTnVtYmVyKHRpbWVBcnJheVswXSkgKiA2MCk7XG4gICAgICAgICAgICAgICAgLy8gc2Vjb25kc1xuICAgICAgICAgICAgICAgIHNlY29uZHMgPSBzZWNvbmRzICsgTnVtYmVyKHRpbWVBcnJheVsxXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gTnVtYmVyKHNlY29uZHMpO1xuICAgICAgICB9XG4gICAgfSk7XG59KSgpO1xuXG5yZXR1cm4gbnVtZXJhbDtcbn0pKTtcbiIsImltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscy5qcyc7XG5pbXBvcnQgaHR0cEFkYXB0ZXIgZnJvbSAnLi9odHRwLmpzJztcbmltcG9ydCB4aHJBZGFwdGVyIGZyb20gJy4veGhyLmpzJztcbmltcG9ydCBBeGlvc0Vycm9yIGZyb20gXCIuLi9jb3JlL0F4aW9zRXJyb3IuanNcIjtcblxuY29uc3Qga25vd25BZGFwdGVycyA9IHtcbiAgaHR0cDogaHR0cEFkYXB0ZXIsXG4gIHhocjogeGhyQWRhcHRlclxufVxuXG51dGlscy5mb3JFYWNoKGtub3duQWRhcHRlcnMsIChmbiwgdmFsdWUpID0+IHtcbiAgaWYoZm4pIHtcbiAgICB0cnkge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGZuLCAnbmFtZScsIHt2YWx1ZX0pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1lbXB0eVxuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZm4sICdhZGFwdGVyTmFtZScsIHt2YWx1ZX0pO1xuICB9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBnZXRBZGFwdGVyOiAoYWRhcHRlcnMpID0+IHtcbiAgICBhZGFwdGVycyA9IHV0aWxzLmlzQXJyYXkoYWRhcHRlcnMpID8gYWRhcHRlcnMgOiBbYWRhcHRlcnNdO1xuXG4gICAgY29uc3Qge2xlbmd0aH0gPSBhZGFwdGVycztcbiAgICBsZXQgbmFtZU9yQWRhcHRlcjtcbiAgICBsZXQgYWRhcHRlcjtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIG5hbWVPckFkYXB0ZXIgPSBhZGFwdGVyc1tpXTtcbiAgICAgIGlmKChhZGFwdGVyID0gdXRpbHMuaXNTdHJpbmcobmFtZU9yQWRhcHRlcikgPyBrbm93bkFkYXB0ZXJzW25hbWVPckFkYXB0ZXIudG9Mb3dlckNhc2UoKV0gOiBuYW1lT3JBZGFwdGVyKSkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIWFkYXB0ZXIpIHtcbiAgICAgIGlmIChhZGFwdGVyID09PSBmYWxzZSkge1xuICAgICAgICB0aHJvdyBuZXcgQXhpb3NFcnJvcihcbiAgICAgICAgICBgQWRhcHRlciAke25hbWVPckFkYXB0ZXJ9IGlzIG5vdCBzdXBwb3J0ZWQgYnkgdGhlIGVudmlyb25tZW50YCxcbiAgICAgICAgICAnRVJSX05PVF9TVVBQT1JUJ1xuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIHV0aWxzLmhhc093blByb3Aoa25vd25BZGFwdGVycywgbmFtZU9yQWRhcHRlcikgP1xuICAgICAgICAgIGBBZGFwdGVyICcke25hbWVPckFkYXB0ZXJ9JyBpcyBub3QgYXZhaWxhYmxlIGluIHRoZSBidWlsZGAgOlxuICAgICAgICAgIGBVbmtub3duIGFkYXB0ZXIgJyR7bmFtZU9yQWRhcHRlcn0nYFxuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAoIXV0aWxzLmlzRnVuY3Rpb24oYWRhcHRlcikpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2FkYXB0ZXIgaXMgbm90IGEgZnVuY3Rpb24nKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWRhcHRlcjtcbiAgfSxcbiAgYWRhcHRlcnM6IGtub3duQWRhcHRlcnNcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHV0aWxzIGZyb20gJy4vLi4vdXRpbHMuanMnO1xuaW1wb3J0IHNldHRsZSBmcm9tICcuLy4uL2NvcmUvc2V0dGxlLmpzJztcbmltcG9ydCBjb29raWVzIGZyb20gJy4vLi4vaGVscGVycy9jb29raWVzLmpzJztcbmltcG9ydCBidWlsZFVSTCBmcm9tICcuLy4uL2hlbHBlcnMvYnVpbGRVUkwuanMnO1xuaW1wb3J0IGJ1aWxkRnVsbFBhdGggZnJvbSAnLi4vY29yZS9idWlsZEZ1bGxQYXRoLmpzJztcbmltcG9ydCBpc1VSTFNhbWVPcmlnaW4gZnJvbSAnLi8uLi9oZWxwZXJzL2lzVVJMU2FtZU9yaWdpbi5qcyc7XG5pbXBvcnQgdHJhbnNpdGlvbmFsRGVmYXVsdHMgZnJvbSAnLi4vZGVmYXVsdHMvdHJhbnNpdGlvbmFsLmpzJztcbmltcG9ydCBBeGlvc0Vycm9yIGZyb20gJy4uL2NvcmUvQXhpb3NFcnJvci5qcyc7XG5pbXBvcnQgQ2FuY2VsZWRFcnJvciBmcm9tICcuLi9jYW5jZWwvQ2FuY2VsZWRFcnJvci5qcyc7XG5pbXBvcnQgcGFyc2VQcm90b2NvbCBmcm9tICcuLi9oZWxwZXJzL3BhcnNlUHJvdG9jb2wuanMnO1xuaW1wb3J0IHBsYXRmb3JtIGZyb20gJy4uL3BsYXRmb3JtL2luZGV4LmpzJztcbmltcG9ydCBBeGlvc0hlYWRlcnMgZnJvbSAnLi4vY29yZS9BeGlvc0hlYWRlcnMuanMnO1xuaW1wb3J0IHNwZWVkb21ldGVyIGZyb20gJy4uL2hlbHBlcnMvc3BlZWRvbWV0ZXIuanMnO1xuXG5mdW5jdGlvbiBwcm9ncmVzc0V2ZW50UmVkdWNlcihsaXN0ZW5lciwgaXNEb3dubG9hZFN0cmVhbSkge1xuICBsZXQgYnl0ZXNOb3RpZmllZCA9IDA7XG4gIGNvbnN0IF9zcGVlZG9tZXRlciA9IHNwZWVkb21ldGVyKDUwLCAyNTApO1xuXG4gIHJldHVybiBlID0+IHtcbiAgICBjb25zdCBsb2FkZWQgPSBlLmxvYWRlZDtcbiAgICBjb25zdCB0b3RhbCA9IGUubGVuZ3RoQ29tcHV0YWJsZSA/IGUudG90YWwgOiB1bmRlZmluZWQ7XG4gICAgY29uc3QgcHJvZ3Jlc3NCeXRlcyA9IGxvYWRlZCAtIGJ5dGVzTm90aWZpZWQ7XG4gICAgY29uc3QgcmF0ZSA9IF9zcGVlZG9tZXRlcihwcm9ncmVzc0J5dGVzKTtcbiAgICBjb25zdCBpblJhbmdlID0gbG9hZGVkIDw9IHRvdGFsO1xuXG4gICAgYnl0ZXNOb3RpZmllZCA9IGxvYWRlZDtcblxuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICBsb2FkZWQsXG4gICAgICB0b3RhbCxcbiAgICAgIHByb2dyZXNzOiB0b3RhbCA/IChsb2FkZWQgLyB0b3RhbCkgOiB1bmRlZmluZWQsXG4gICAgICBieXRlczogcHJvZ3Jlc3NCeXRlcyxcbiAgICAgIHJhdGU6IHJhdGUgPyByYXRlIDogdW5kZWZpbmVkLFxuICAgICAgZXN0aW1hdGVkOiByYXRlICYmIHRvdGFsICYmIGluUmFuZ2UgPyAodG90YWwgLSBsb2FkZWQpIC8gcmF0ZSA6IHVuZGVmaW5lZCxcbiAgICAgIGV2ZW50OiBlXG4gICAgfTtcblxuICAgIGRhdGFbaXNEb3dubG9hZFN0cmVhbSA/ICdkb3dubG9hZCcgOiAndXBsb2FkJ10gPSB0cnVlO1xuXG4gICAgbGlzdGVuZXIoZGF0YSk7XG4gIH07XG59XG5cbmNvbnN0IGlzWEhSQWRhcHRlclN1cHBvcnRlZCA9IHR5cGVvZiBYTUxIdHRwUmVxdWVzdCAhPT0gJ3VuZGVmaW5lZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGlzWEhSQWRhcHRlclN1cHBvcnRlZCAmJiBmdW5jdGlvbiAoY29uZmlnKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiBkaXNwYXRjaFhoclJlcXVlc3QocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgbGV0IHJlcXVlc3REYXRhID0gY29uZmlnLmRhdGE7XG4gICAgY29uc3QgcmVxdWVzdEhlYWRlcnMgPSBBeGlvc0hlYWRlcnMuZnJvbShjb25maWcuaGVhZGVycykubm9ybWFsaXplKCk7XG4gICAgY29uc3QgcmVzcG9uc2VUeXBlID0gY29uZmlnLnJlc3BvbnNlVHlwZTtcbiAgICBsZXQgb25DYW5jZWxlZDtcbiAgICBmdW5jdGlvbiBkb25lKCkge1xuICAgICAgaWYgKGNvbmZpZy5jYW5jZWxUb2tlbikge1xuICAgICAgICBjb25maWcuY2FuY2VsVG9rZW4udW5zdWJzY3JpYmUob25DYW5jZWxlZCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChjb25maWcuc2lnbmFsKSB7XG4gICAgICAgIGNvbmZpZy5zaWduYWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignYWJvcnQnLCBvbkNhbmNlbGVkKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodXRpbHMuaXNGb3JtRGF0YShyZXF1ZXN0RGF0YSkgJiYgKHBsYXRmb3JtLmlzU3RhbmRhcmRCcm93c2VyRW52IHx8IHBsYXRmb3JtLmlzU3RhbmRhcmRCcm93c2VyV2ViV29ya2VyRW52KSkge1xuICAgICAgcmVxdWVzdEhlYWRlcnMuc2V0Q29udGVudFR5cGUoZmFsc2UpOyAvLyBMZXQgdGhlIGJyb3dzZXIgc2V0IGl0XG4gICAgfVxuXG4gICAgbGV0IHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuICAgIC8vIEhUVFAgYmFzaWMgYXV0aGVudGljYXRpb25cbiAgICBpZiAoY29uZmlnLmF1dGgpIHtcbiAgICAgIGNvbnN0IHVzZXJuYW1lID0gY29uZmlnLmF1dGgudXNlcm5hbWUgfHwgJyc7XG4gICAgICBjb25zdCBwYXNzd29yZCA9IGNvbmZpZy5hdXRoLnBhc3N3b3JkID8gdW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KGNvbmZpZy5hdXRoLnBhc3N3b3JkKSkgOiAnJztcbiAgICAgIHJlcXVlc3RIZWFkZXJzLnNldCgnQXV0aG9yaXphdGlvbicsICdCYXNpYyAnICsgYnRvYSh1c2VybmFtZSArICc6JyArIHBhc3N3b3JkKSk7XG4gICAgfVxuXG4gICAgY29uc3QgZnVsbFBhdGggPSBidWlsZEZ1bGxQYXRoKGNvbmZpZy5iYXNlVVJMLCBjb25maWcudXJsKTtcblxuICAgIHJlcXVlc3Qub3Blbihjb25maWcubWV0aG9kLnRvVXBwZXJDYXNlKCksIGJ1aWxkVVJMKGZ1bGxQYXRoLCBjb25maWcucGFyYW1zLCBjb25maWcucGFyYW1zU2VyaWFsaXplciksIHRydWUpO1xuXG4gICAgLy8gU2V0IHRoZSByZXF1ZXN0IHRpbWVvdXQgaW4gTVNcbiAgICByZXF1ZXN0LnRpbWVvdXQgPSBjb25maWcudGltZW91dDtcblxuICAgIGZ1bmN0aW9uIG9ubG9hZGVuZCgpIHtcbiAgICAgIGlmICghcmVxdWVzdCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICAvLyBQcmVwYXJlIHRoZSByZXNwb25zZVxuICAgICAgY29uc3QgcmVzcG9uc2VIZWFkZXJzID0gQXhpb3NIZWFkZXJzLmZyb20oXG4gICAgICAgICdnZXRBbGxSZXNwb25zZUhlYWRlcnMnIGluIHJlcXVlc3QgJiYgcmVxdWVzdC5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKVxuICAgICAgKTtcbiAgICAgIGNvbnN0IHJlc3BvbnNlRGF0YSA9ICFyZXNwb25zZVR5cGUgfHwgcmVzcG9uc2VUeXBlID09PSAndGV4dCcgfHwgcmVzcG9uc2VUeXBlID09PSAnanNvbicgP1xuICAgICAgICByZXF1ZXN0LnJlc3BvbnNlVGV4dCA6IHJlcXVlc3QucmVzcG9uc2U7XG4gICAgICBjb25zdCByZXNwb25zZSA9IHtcbiAgICAgICAgZGF0YTogcmVzcG9uc2VEYXRhLFxuICAgICAgICBzdGF0dXM6IHJlcXVlc3Quc3RhdHVzLFxuICAgICAgICBzdGF0dXNUZXh0OiByZXF1ZXN0LnN0YXR1c1RleHQsXG4gICAgICAgIGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVycyxcbiAgICAgICAgY29uZmlnLFxuICAgICAgICByZXF1ZXN0XG4gICAgICB9O1xuXG4gICAgICBzZXR0bGUoZnVuY3Rpb24gX3Jlc29sdmUodmFsdWUpIHtcbiAgICAgICAgcmVzb2x2ZSh2YWx1ZSk7XG4gICAgICAgIGRvbmUoKTtcbiAgICAgIH0sIGZ1bmN0aW9uIF9yZWplY3QoZXJyKSB7XG4gICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICBkb25lKCk7XG4gICAgICB9LCByZXNwb25zZSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH1cblxuICAgIGlmICgnb25sb2FkZW5kJyBpbiByZXF1ZXN0KSB7XG4gICAgICAvLyBVc2Ugb25sb2FkZW5kIGlmIGF2YWlsYWJsZVxuICAgICAgcmVxdWVzdC5vbmxvYWRlbmQgPSBvbmxvYWRlbmQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIExpc3RlbiBmb3IgcmVhZHkgc3RhdGUgdG8gZW11bGF0ZSBvbmxvYWRlbmRcbiAgICAgIHJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gaGFuZGxlTG9hZCgpIHtcbiAgICAgICAgaWYgKCFyZXF1ZXN0IHx8IHJlcXVlc3QucmVhZHlTdGF0ZSAhPT0gNCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRoZSByZXF1ZXN0IGVycm9yZWQgb3V0IGFuZCB3ZSBkaWRuJ3QgZ2V0IGEgcmVzcG9uc2UsIHRoaXMgd2lsbCBiZVxuICAgICAgICAvLyBoYW5kbGVkIGJ5IG9uZXJyb3IgaW5zdGVhZFxuICAgICAgICAvLyBXaXRoIG9uZSBleGNlcHRpb246IHJlcXVlc3QgdGhhdCB1c2luZyBmaWxlOiBwcm90b2NvbCwgbW9zdCBicm93c2Vyc1xuICAgICAgICAvLyB3aWxsIHJldHVybiBzdGF0dXMgYXMgMCBldmVuIHRob3VnaCBpdCdzIGEgc3VjY2Vzc2Z1bCByZXF1ZXN0XG4gICAgICAgIGlmIChyZXF1ZXN0LnN0YXR1cyA9PT0gMCAmJiAhKHJlcXVlc3QucmVzcG9uc2VVUkwgJiYgcmVxdWVzdC5yZXNwb25zZVVSTC5pbmRleE9mKCdmaWxlOicpID09PSAwKSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyByZWFkeXN0YXRlIGhhbmRsZXIgaXMgY2FsbGluZyBiZWZvcmUgb25lcnJvciBvciBvbnRpbWVvdXQgaGFuZGxlcnMsXG4gICAgICAgIC8vIHNvIHdlIHNob3VsZCBjYWxsIG9ubG9hZGVuZCBvbiB0aGUgbmV4dCAndGljaydcbiAgICAgICAgc2V0VGltZW91dChvbmxvYWRlbmQpO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBIYW5kbGUgYnJvd3NlciByZXF1ZXN0IGNhbmNlbGxhdGlvbiAoYXMgb3Bwb3NlZCB0byBhIG1hbnVhbCBjYW5jZWxsYXRpb24pXG4gICAgcmVxdWVzdC5vbmFib3J0ID0gZnVuY3Rpb24gaGFuZGxlQWJvcnQoKSB7XG4gICAgICBpZiAoIXJlcXVlc3QpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICByZWplY3QobmV3IEF4aW9zRXJyb3IoJ1JlcXVlc3QgYWJvcnRlZCcsIEF4aW9zRXJyb3IuRUNPTk5BQk9SVEVELCBjb25maWcsIHJlcXVlc3QpKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEhhbmRsZSBsb3cgbGV2ZWwgbmV0d29yayBlcnJvcnNcbiAgICByZXF1ZXN0Lm9uZXJyb3IgPSBmdW5jdGlvbiBoYW5kbGVFcnJvcigpIHtcbiAgICAgIC8vIFJlYWwgZXJyb3JzIGFyZSBoaWRkZW4gZnJvbSB1cyBieSB0aGUgYnJvd3NlclxuICAgICAgLy8gb25lcnJvciBzaG91bGQgb25seSBmaXJlIGlmIGl0J3MgYSBuZXR3b3JrIGVycm9yXG4gICAgICByZWplY3QobmV3IEF4aW9zRXJyb3IoJ05ldHdvcmsgRXJyb3InLCBBeGlvc0Vycm9yLkVSUl9ORVRXT1JLLCBjb25maWcsIHJlcXVlc3QpKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEhhbmRsZSB0aW1lb3V0XG4gICAgcmVxdWVzdC5vbnRpbWVvdXQgPSBmdW5jdGlvbiBoYW5kbGVUaW1lb3V0KCkge1xuICAgICAgbGV0IHRpbWVvdXRFcnJvck1lc3NhZ2UgPSBjb25maWcudGltZW91dCA/ICd0aW1lb3V0IG9mICcgKyBjb25maWcudGltZW91dCArICdtcyBleGNlZWRlZCcgOiAndGltZW91dCBleGNlZWRlZCc7XG4gICAgICBjb25zdCB0cmFuc2l0aW9uYWwgPSBjb25maWcudHJhbnNpdGlvbmFsIHx8IHRyYW5zaXRpb25hbERlZmF1bHRzO1xuICAgICAgaWYgKGNvbmZpZy50aW1lb3V0RXJyb3JNZXNzYWdlKSB7XG4gICAgICAgIHRpbWVvdXRFcnJvck1lc3NhZ2UgPSBjb25maWcudGltZW91dEVycm9yTWVzc2FnZTtcbiAgICAgIH1cbiAgICAgIHJlamVjdChuZXcgQXhpb3NFcnJvcihcbiAgICAgICAgdGltZW91dEVycm9yTWVzc2FnZSxcbiAgICAgICAgdHJhbnNpdGlvbmFsLmNsYXJpZnlUaW1lb3V0RXJyb3IgPyBBeGlvc0Vycm9yLkVUSU1FRE9VVCA6IEF4aW9zRXJyb3IuRUNPTk5BQk9SVEVELFxuICAgICAgICBjb25maWcsXG4gICAgICAgIHJlcXVlc3QpKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEFkZCB4c3JmIGhlYWRlclxuICAgIC8vIFRoaXMgaXMgb25seSBkb25lIGlmIHJ1bm5pbmcgaW4gYSBzdGFuZGFyZCBicm93c2VyIGVudmlyb25tZW50LlxuICAgIC8vIFNwZWNpZmljYWxseSBub3QgaWYgd2UncmUgaW4gYSB3ZWIgd29ya2VyLCBvciByZWFjdC1uYXRpdmUuXG4gICAgaWYgKHBsYXRmb3JtLmlzU3RhbmRhcmRCcm93c2VyRW52KSB7XG4gICAgICAvLyBBZGQgeHNyZiBoZWFkZXJcbiAgICAgIGNvbnN0IHhzcmZWYWx1ZSA9IChjb25maWcud2l0aENyZWRlbnRpYWxzIHx8IGlzVVJMU2FtZU9yaWdpbihmdWxsUGF0aCkpXG4gICAgICAgICYmIGNvbmZpZy54c3JmQ29va2llTmFtZSAmJiBjb29raWVzLnJlYWQoY29uZmlnLnhzcmZDb29raWVOYW1lKTtcblxuICAgICAgaWYgKHhzcmZWYWx1ZSkge1xuICAgICAgICByZXF1ZXN0SGVhZGVycy5zZXQoY29uZmlnLnhzcmZIZWFkZXJOYW1lLCB4c3JmVmFsdWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJlbW92ZSBDb250ZW50LVR5cGUgaWYgZGF0YSBpcyB1bmRlZmluZWRcbiAgICByZXF1ZXN0RGF0YSA9PT0gdW5kZWZpbmVkICYmIHJlcXVlc3RIZWFkZXJzLnNldENvbnRlbnRUeXBlKG51bGwpO1xuXG4gICAgLy8gQWRkIGhlYWRlcnMgdG8gdGhlIHJlcXVlc3RcbiAgICBpZiAoJ3NldFJlcXVlc3RIZWFkZXInIGluIHJlcXVlc3QpIHtcbiAgICAgIHV0aWxzLmZvckVhY2gocmVxdWVzdEhlYWRlcnMudG9KU09OKCksIGZ1bmN0aW9uIHNldFJlcXVlc3RIZWFkZXIodmFsLCBrZXkpIHtcbiAgICAgICAgcmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKGtleSwgdmFsKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIEFkZCB3aXRoQ3JlZGVudGlhbHMgdG8gcmVxdWVzdCBpZiBuZWVkZWRcbiAgICBpZiAoIXV0aWxzLmlzVW5kZWZpbmVkKGNvbmZpZy53aXRoQ3JlZGVudGlhbHMpKSB7XG4gICAgICByZXF1ZXN0LndpdGhDcmVkZW50aWFscyA9ICEhY29uZmlnLndpdGhDcmVkZW50aWFscztcbiAgICB9XG5cbiAgICAvLyBBZGQgcmVzcG9uc2VUeXBlIHRvIHJlcXVlc3QgaWYgbmVlZGVkXG4gICAgaWYgKHJlc3BvbnNlVHlwZSAmJiByZXNwb25zZVR5cGUgIT09ICdqc29uJykge1xuICAgICAgcmVxdWVzdC5yZXNwb25zZVR5cGUgPSBjb25maWcucmVzcG9uc2VUeXBlO1xuICAgIH1cblxuICAgIC8vIEhhbmRsZSBwcm9ncmVzcyBpZiBuZWVkZWRcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5vbkRvd25sb2FkUHJvZ3Jlc3MgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJlcXVlc3QuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCBwcm9ncmVzc0V2ZW50UmVkdWNlcihjb25maWcub25Eb3dubG9hZFByb2dyZXNzLCB0cnVlKSk7XG4gICAgfVxuXG4gICAgLy8gTm90IGFsbCBicm93c2VycyBzdXBwb3J0IHVwbG9hZCBldmVudHNcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5vblVwbG9hZFByb2dyZXNzID09PSAnZnVuY3Rpb24nICYmIHJlcXVlc3QudXBsb2FkKSB7XG4gICAgICByZXF1ZXN0LnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIHByb2dyZXNzRXZlbnRSZWR1Y2VyKGNvbmZpZy5vblVwbG9hZFByb2dyZXNzKSk7XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5jYW5jZWxUb2tlbiB8fCBjb25maWcuc2lnbmFsKSB7XG4gICAgICAvLyBIYW5kbGUgY2FuY2VsbGF0aW9uXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuICAgICAgb25DYW5jZWxlZCA9IGNhbmNlbCA9PiB7XG4gICAgICAgIGlmICghcmVxdWVzdCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICByZWplY3QoIWNhbmNlbCB8fCBjYW5jZWwudHlwZSA/IG5ldyBDYW5jZWxlZEVycm9yKG51bGwsIGNvbmZpZywgcmVxdWVzdCkgOiBjYW5jZWwpO1xuICAgICAgICByZXF1ZXN0LmFib3J0KCk7XG4gICAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgICAgfTtcblxuICAgICAgY29uZmlnLmNhbmNlbFRva2VuICYmIGNvbmZpZy5jYW5jZWxUb2tlbi5zdWJzY3JpYmUob25DYW5jZWxlZCk7XG4gICAgICBpZiAoY29uZmlnLnNpZ25hbCkge1xuICAgICAgICBjb25maWcuc2lnbmFsLmFib3J0ZWQgPyBvbkNhbmNlbGVkKCkgOiBjb25maWcuc2lnbmFsLmFkZEV2ZW50TGlzdGVuZXIoJ2Fib3J0Jywgb25DYW5jZWxlZCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcHJvdG9jb2wgPSBwYXJzZVByb3RvY29sKGZ1bGxQYXRoKTtcblxuICAgIGlmIChwcm90b2NvbCAmJiBwbGF0Zm9ybS5wcm90b2NvbHMuaW5kZXhPZihwcm90b2NvbCkgPT09IC0xKSB7XG4gICAgICByZWplY3QobmV3IEF4aW9zRXJyb3IoJ1Vuc3VwcG9ydGVkIHByb3RvY29sICcgKyBwcm90b2NvbCArICc6JywgQXhpb3NFcnJvci5FUlJfQkFEX1JFUVVFU1QsIGNvbmZpZykpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuXG4gICAgLy8gU2VuZCB0aGUgcmVxdWVzdFxuICAgIHJlcXVlc3Quc2VuZChyZXF1ZXN0RGF0YSB8fCBudWxsKTtcbiAgfSk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB1dGlscyBmcm9tICcuL3V0aWxzLmpzJztcbmltcG9ydCBiaW5kIGZyb20gJy4vaGVscGVycy9iaW5kLmpzJztcbmltcG9ydCBBeGlvcyBmcm9tICcuL2NvcmUvQXhpb3MuanMnO1xuaW1wb3J0IG1lcmdlQ29uZmlnIGZyb20gJy4vY29yZS9tZXJnZUNvbmZpZy5qcyc7XG5pbXBvcnQgZGVmYXVsdHMgZnJvbSAnLi9kZWZhdWx0cy9pbmRleC5qcyc7XG5pbXBvcnQgZm9ybURhdGFUb0pTT04gZnJvbSAnLi9oZWxwZXJzL2Zvcm1EYXRhVG9KU09OLmpzJztcbmltcG9ydCBDYW5jZWxlZEVycm9yIGZyb20gJy4vY2FuY2VsL0NhbmNlbGVkRXJyb3IuanMnO1xuaW1wb3J0IENhbmNlbFRva2VuIGZyb20gJy4vY2FuY2VsL0NhbmNlbFRva2VuLmpzJztcbmltcG9ydCBpc0NhbmNlbCBmcm9tICcuL2NhbmNlbC9pc0NhbmNlbC5qcyc7XG5pbXBvcnQge1ZFUlNJT059IGZyb20gJy4vZW52L2RhdGEuanMnO1xuaW1wb3J0IHRvRm9ybURhdGEgZnJvbSAnLi9oZWxwZXJzL3RvRm9ybURhdGEuanMnO1xuaW1wb3J0IEF4aW9zRXJyb3IgZnJvbSAnLi9jb3JlL0F4aW9zRXJyb3IuanMnO1xuaW1wb3J0IHNwcmVhZCBmcm9tICcuL2hlbHBlcnMvc3ByZWFkLmpzJztcbmltcG9ydCBpc0F4aW9zRXJyb3IgZnJvbSAnLi9oZWxwZXJzL2lzQXhpb3NFcnJvci5qcyc7XG5pbXBvcnQgQXhpb3NIZWFkZXJzIGZyb20gXCIuL2NvcmUvQXhpb3NIZWFkZXJzLmpzXCI7XG5pbXBvcnQgSHR0cFN0YXR1c0NvZGUgZnJvbSAnLi9oZWxwZXJzL0h0dHBTdGF0dXNDb2RlLmpzJztcblxuLyoqXG4gKiBDcmVhdGUgYW4gaW5zdGFuY2Ugb2YgQXhpb3NcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gZGVmYXVsdENvbmZpZyBUaGUgZGVmYXVsdCBjb25maWcgZm9yIHRoZSBpbnN0YW5jZVxuICpcbiAqIEByZXR1cm5zIHtBeGlvc30gQSBuZXcgaW5zdGFuY2Ugb2YgQXhpb3NcbiAqL1xuZnVuY3Rpb24gY3JlYXRlSW5zdGFuY2UoZGVmYXVsdENvbmZpZykge1xuICBjb25zdCBjb250ZXh0ID0gbmV3IEF4aW9zKGRlZmF1bHRDb25maWcpO1xuICBjb25zdCBpbnN0YW5jZSA9IGJpbmQoQXhpb3MucHJvdG90eXBlLnJlcXVlc3QsIGNvbnRleHQpO1xuXG4gIC8vIENvcHkgYXhpb3MucHJvdG90eXBlIHRvIGluc3RhbmNlXG4gIHV0aWxzLmV4dGVuZChpbnN0YW5jZSwgQXhpb3MucHJvdG90eXBlLCBjb250ZXh0LCB7YWxsT3duS2V5czogdHJ1ZX0pO1xuXG4gIC8vIENvcHkgY29udGV4dCB0byBpbnN0YW5jZVxuICB1dGlscy5leHRlbmQoaW5zdGFuY2UsIGNvbnRleHQsIG51bGwsIHthbGxPd25LZXlzOiB0cnVlfSk7XG5cbiAgLy8gRmFjdG9yeSBmb3IgY3JlYXRpbmcgbmV3IGluc3RhbmNlc1xuICBpbnN0YW5jZS5jcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUoaW5zdGFuY2VDb25maWcpIHtcbiAgICByZXR1cm4gY3JlYXRlSW5zdGFuY2UobWVyZ2VDb25maWcoZGVmYXVsdENvbmZpZywgaW5zdGFuY2VDb25maWcpKTtcbiAgfTtcblxuICByZXR1cm4gaW5zdGFuY2U7XG59XG5cbi8vIENyZWF0ZSB0aGUgZGVmYXVsdCBpbnN0YW5jZSB0byBiZSBleHBvcnRlZFxuY29uc3QgYXhpb3MgPSBjcmVhdGVJbnN0YW5jZShkZWZhdWx0cyk7XG5cbi8vIEV4cG9zZSBBeGlvcyBjbGFzcyB0byBhbGxvdyBjbGFzcyBpbmhlcml0YW5jZVxuYXhpb3MuQXhpb3MgPSBBeGlvcztcblxuLy8gRXhwb3NlIENhbmNlbCAmIENhbmNlbFRva2VuXG5heGlvcy5DYW5jZWxlZEVycm9yID0gQ2FuY2VsZWRFcnJvcjtcbmF4aW9zLkNhbmNlbFRva2VuID0gQ2FuY2VsVG9rZW47XG5heGlvcy5pc0NhbmNlbCA9IGlzQ2FuY2VsO1xuYXhpb3MuVkVSU0lPTiA9IFZFUlNJT047XG5heGlvcy50b0Zvcm1EYXRhID0gdG9Gb3JtRGF0YTtcblxuLy8gRXhwb3NlIEF4aW9zRXJyb3IgY2xhc3NcbmF4aW9zLkF4aW9zRXJyb3IgPSBBeGlvc0Vycm9yO1xuXG4vLyBhbGlhcyBmb3IgQ2FuY2VsZWRFcnJvciBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eVxuYXhpb3MuQ2FuY2VsID0gYXhpb3MuQ2FuY2VsZWRFcnJvcjtcblxuLy8gRXhwb3NlIGFsbC9zcHJlYWRcbmF4aW9zLmFsbCA9IGZ1bmN0aW9uIGFsbChwcm9taXNlcykge1xuICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xufTtcblxuYXhpb3Muc3ByZWFkID0gc3ByZWFkO1xuXG4vLyBFeHBvc2UgaXNBeGlvc0Vycm9yXG5heGlvcy5pc0F4aW9zRXJyb3IgPSBpc0F4aW9zRXJyb3I7XG5cbi8vIEV4cG9zZSBtZXJnZUNvbmZpZ1xuYXhpb3MubWVyZ2VDb25maWcgPSBtZXJnZUNvbmZpZztcblxuYXhpb3MuQXhpb3NIZWFkZXJzID0gQXhpb3NIZWFkZXJzO1xuXG5heGlvcy5mb3JtVG9KU09OID0gdGhpbmcgPT4gZm9ybURhdGFUb0pTT04odXRpbHMuaXNIVE1MRm9ybSh0aGluZykgPyBuZXcgRm9ybURhdGEodGhpbmcpIDogdGhpbmcpO1xuXG5heGlvcy5IdHRwU3RhdHVzQ29kZSA9IEh0dHBTdGF0dXNDb2RlO1xuXG5heGlvcy5kZWZhdWx0ID0gYXhpb3M7XG5cbi8vIHRoaXMgbW9kdWxlIHNob3VsZCBvbmx5IGhhdmUgYSBkZWZhdWx0IGV4cG9ydFxuZXhwb3J0IGRlZmF1bHQgYXhpb3NcbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IENhbmNlbGVkRXJyb3IgZnJvbSAnLi9DYW5jZWxlZEVycm9yLmpzJztcblxuLyoqXG4gKiBBIGBDYW5jZWxUb2tlbmAgaXMgYW4gb2JqZWN0IHRoYXQgY2FuIGJlIHVzZWQgdG8gcmVxdWVzdCBjYW5jZWxsYXRpb24gb2YgYW4gb3BlcmF0aW9uLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGV4ZWN1dG9yIFRoZSBleGVjdXRvciBmdW5jdGlvbi5cbiAqXG4gKiBAcmV0dXJucyB7Q2FuY2VsVG9rZW59XG4gKi9cbmNsYXNzIENhbmNlbFRva2VuIHtcbiAgY29uc3RydWN0b3IoZXhlY3V0b3IpIHtcbiAgICBpZiAodHlwZW9mIGV4ZWN1dG9yICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdleGVjdXRvciBtdXN0IGJlIGEgZnVuY3Rpb24uJyk7XG4gICAgfVxuXG4gICAgbGV0IHJlc29sdmVQcm9taXNlO1xuXG4gICAgdGhpcy5wcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gcHJvbWlzZUV4ZWN1dG9yKHJlc29sdmUpIHtcbiAgICAgIHJlc29sdmVQcm9taXNlID0gcmVzb2x2ZTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHRva2VuID0gdGhpcztcblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG4gICAgdGhpcy5wcm9taXNlLnRoZW4oY2FuY2VsID0+IHtcbiAgICAgIGlmICghdG9rZW4uX2xpc3RlbmVycykgcmV0dXJuO1xuXG4gICAgICBsZXQgaSA9IHRva2VuLl9saXN0ZW5lcnMubGVuZ3RoO1xuXG4gICAgICB3aGlsZSAoaS0tID4gMCkge1xuICAgICAgICB0b2tlbi5fbGlzdGVuZXJzW2ldKGNhbmNlbCk7XG4gICAgICB9XG4gICAgICB0b2tlbi5fbGlzdGVuZXJzID0gbnVsbDtcbiAgICB9KTtcblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG4gICAgdGhpcy5wcm9taXNlLnRoZW4gPSBvbmZ1bGZpbGxlZCA9PiB7XG4gICAgICBsZXQgX3Jlc29sdmU7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuICAgICAgY29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICB0b2tlbi5zdWJzY3JpYmUocmVzb2x2ZSk7XG4gICAgICAgIF9yZXNvbHZlID0gcmVzb2x2ZTtcbiAgICAgIH0pLnRoZW4ob25mdWxmaWxsZWQpO1xuXG4gICAgICBwcm9taXNlLmNhbmNlbCA9IGZ1bmN0aW9uIHJlamVjdCgpIHtcbiAgICAgICAgdG9rZW4udW5zdWJzY3JpYmUoX3Jlc29sdmUpO1xuICAgICAgfTtcblxuICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfTtcblxuICAgIGV4ZWN1dG9yKGZ1bmN0aW9uIGNhbmNlbChtZXNzYWdlLCBjb25maWcsIHJlcXVlc3QpIHtcbiAgICAgIGlmICh0b2tlbi5yZWFzb24pIHtcbiAgICAgICAgLy8gQ2FuY2VsbGF0aW9uIGhhcyBhbHJlYWR5IGJlZW4gcmVxdWVzdGVkXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdG9rZW4ucmVhc29uID0gbmV3IENhbmNlbGVkRXJyb3IobWVzc2FnZSwgY29uZmlnLCByZXF1ZXN0KTtcbiAgICAgIHJlc29sdmVQcm9taXNlKHRva2VuLnJlYXNvbik7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogVGhyb3dzIGEgYENhbmNlbGVkRXJyb3JgIGlmIGNhbmNlbGxhdGlvbiBoYXMgYmVlbiByZXF1ZXN0ZWQuXG4gICAqL1xuICB0aHJvd0lmUmVxdWVzdGVkKCkge1xuICAgIGlmICh0aGlzLnJlYXNvbikge1xuICAgICAgdGhyb3cgdGhpcy5yZWFzb247XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFN1YnNjcmliZSB0byB0aGUgY2FuY2VsIHNpZ25hbFxuICAgKi9cblxuICBzdWJzY3JpYmUobGlzdGVuZXIpIHtcbiAgICBpZiAodGhpcy5yZWFzb24pIHtcbiAgICAgIGxpc3RlbmVyKHRoaXMucmVhc29uKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fbGlzdGVuZXJzKSB7XG4gICAgICB0aGlzLl9saXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2xpc3RlbmVycyA9IFtsaXN0ZW5lcl07XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFVuc3Vic2NyaWJlIGZyb20gdGhlIGNhbmNlbCBzaWduYWxcbiAgICovXG5cbiAgdW5zdWJzY3JpYmUobGlzdGVuZXIpIHtcbiAgICBpZiAoIXRoaXMuX2xpc3RlbmVycykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBpbmRleCA9IHRoaXMuX2xpc3RlbmVycy5pbmRleE9mKGxpc3RlbmVyKTtcbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICB0aGlzLl9saXN0ZW5lcnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBvYmplY3QgdGhhdCBjb250YWlucyBhIG5ldyBgQ2FuY2VsVG9rZW5gIGFuZCBhIGZ1bmN0aW9uIHRoYXQsIHdoZW4gY2FsbGVkLFxuICAgKiBjYW5jZWxzIHRoZSBgQ2FuY2VsVG9rZW5gLlxuICAgKi9cbiAgc3RhdGljIHNvdXJjZSgpIHtcbiAgICBsZXQgY2FuY2VsO1xuICAgIGNvbnN0IHRva2VuID0gbmV3IENhbmNlbFRva2VuKGZ1bmN0aW9uIGV4ZWN1dG9yKGMpIHtcbiAgICAgIGNhbmNlbCA9IGM7XG4gICAgfSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRva2VuLFxuICAgICAgY2FuY2VsXG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYW5jZWxUb2tlbjtcbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IEF4aW9zRXJyb3IgZnJvbSAnLi4vY29yZS9BeGlvc0Vycm9yLmpzJztcbmltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscy5qcyc7XG5cbi8qKlxuICogQSBgQ2FuY2VsZWRFcnJvcmAgaXMgYW4gb2JqZWN0IHRoYXQgaXMgdGhyb3duIHdoZW4gYW4gb3BlcmF0aW9uIGlzIGNhbmNlbGVkLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nPX0gbWVzc2FnZSBUaGUgbWVzc2FnZS5cbiAqIEBwYXJhbSB7T2JqZWN0PX0gY29uZmlnIFRoZSBjb25maWcuXG4gKiBAcGFyYW0ge09iamVjdD19IHJlcXVlc3QgVGhlIHJlcXVlc3QuXG4gKlxuICogQHJldHVybnMge0NhbmNlbGVkRXJyb3J9IFRoZSBjcmVhdGVkIGVycm9yLlxuICovXG5mdW5jdGlvbiBDYW5jZWxlZEVycm9yKG1lc3NhZ2UsIGNvbmZpZywgcmVxdWVzdCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZXEtbnVsbCxlcWVxZXFcbiAgQXhpb3NFcnJvci5jYWxsKHRoaXMsIG1lc3NhZ2UgPT0gbnVsbCA/ICdjYW5jZWxlZCcgOiBtZXNzYWdlLCBBeGlvc0Vycm9yLkVSUl9DQU5DRUxFRCwgY29uZmlnLCByZXF1ZXN0KTtcbiAgdGhpcy5uYW1lID0gJ0NhbmNlbGVkRXJyb3InO1xufVxuXG51dGlscy5pbmhlcml0cyhDYW5jZWxlZEVycm9yLCBBeGlvc0Vycm9yLCB7XG4gIF9fQ0FOQ0VMX186IHRydWVcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBDYW5jZWxlZEVycm9yO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0NhbmNlbCh2YWx1ZSkge1xuICByZXR1cm4gISEodmFsdWUgJiYgdmFsdWUuX19DQU5DRUxfXyk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB1dGlscyBmcm9tICcuLy4uL3V0aWxzLmpzJztcbmltcG9ydCBidWlsZFVSTCBmcm9tICcuLi9oZWxwZXJzL2J1aWxkVVJMLmpzJztcbmltcG9ydCBJbnRlcmNlcHRvck1hbmFnZXIgZnJvbSAnLi9JbnRlcmNlcHRvck1hbmFnZXIuanMnO1xuaW1wb3J0IGRpc3BhdGNoUmVxdWVzdCBmcm9tICcuL2Rpc3BhdGNoUmVxdWVzdC5qcyc7XG5pbXBvcnQgbWVyZ2VDb25maWcgZnJvbSAnLi9tZXJnZUNvbmZpZy5qcyc7XG5pbXBvcnQgYnVpbGRGdWxsUGF0aCBmcm9tICcuL2J1aWxkRnVsbFBhdGguanMnO1xuaW1wb3J0IHZhbGlkYXRvciBmcm9tICcuLi9oZWxwZXJzL3ZhbGlkYXRvci5qcyc7XG5pbXBvcnQgQXhpb3NIZWFkZXJzIGZyb20gJy4vQXhpb3NIZWFkZXJzLmpzJztcblxuY29uc3QgdmFsaWRhdG9ycyA9IHZhbGlkYXRvci52YWxpZGF0b3JzO1xuXG4vKipcbiAqIENyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiBBeGlvc1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBpbnN0YW5jZUNvbmZpZyBUaGUgZGVmYXVsdCBjb25maWcgZm9yIHRoZSBpbnN0YW5jZVxuICpcbiAqIEByZXR1cm4ge0F4aW9zfSBBIG5ldyBpbnN0YW5jZSBvZiBBeGlvc1xuICovXG5jbGFzcyBBeGlvcyB7XG4gIGNvbnN0cnVjdG9yKGluc3RhbmNlQ29uZmlnKSB7XG4gICAgdGhpcy5kZWZhdWx0cyA9IGluc3RhbmNlQ29uZmlnO1xuICAgIHRoaXMuaW50ZXJjZXB0b3JzID0ge1xuICAgICAgcmVxdWVzdDogbmV3IEludGVyY2VwdG9yTWFuYWdlcigpLFxuICAgICAgcmVzcG9uc2U6IG5ldyBJbnRlcmNlcHRvck1hbmFnZXIoKVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogRGlzcGF0Y2ggYSByZXF1ZXN0XG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfE9iamVjdH0gY29uZmlnT3JVcmwgVGhlIGNvbmZpZyBzcGVjaWZpYyBmb3IgdGhpcyByZXF1ZXN0IChtZXJnZWQgd2l0aCB0aGlzLmRlZmF1bHRzKVxuICAgKiBAcGFyYW0gez9PYmplY3R9IGNvbmZpZ1xuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZX0gVGhlIFByb21pc2UgdG8gYmUgZnVsZmlsbGVkXG4gICAqL1xuICByZXF1ZXN0KGNvbmZpZ09yVXJsLCBjb25maWcpIHtcbiAgICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgICAvLyBBbGxvdyBmb3IgYXhpb3MoJ2V4YW1wbGUvdXJsJ1ssIGNvbmZpZ10pIGEgbGEgZmV0Y2ggQVBJXG4gICAgaWYgKHR5cGVvZiBjb25maWdPclVybCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcbiAgICAgIGNvbmZpZy51cmwgPSBjb25maWdPclVybDtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uZmlnID0gY29uZmlnT3JVcmwgfHwge307XG4gICAgfVxuXG4gICAgY29uZmlnID0gbWVyZ2VDb25maWcodGhpcy5kZWZhdWx0cywgY29uZmlnKTtcblxuICAgIGNvbnN0IHt0cmFuc2l0aW9uYWwsIHBhcmFtc1NlcmlhbGl6ZXIsIGhlYWRlcnN9ID0gY29uZmlnO1xuXG4gICAgaWYgKHRyYW5zaXRpb25hbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB2YWxpZGF0b3IuYXNzZXJ0T3B0aW9ucyh0cmFuc2l0aW9uYWwsIHtcbiAgICAgICAgc2lsZW50SlNPTlBhcnNpbmc6IHZhbGlkYXRvcnMudHJhbnNpdGlvbmFsKHZhbGlkYXRvcnMuYm9vbGVhbiksXG4gICAgICAgIGZvcmNlZEpTT05QYXJzaW5nOiB2YWxpZGF0b3JzLnRyYW5zaXRpb25hbCh2YWxpZGF0b3JzLmJvb2xlYW4pLFxuICAgICAgICBjbGFyaWZ5VGltZW91dEVycm9yOiB2YWxpZGF0b3JzLnRyYW5zaXRpb25hbCh2YWxpZGF0b3JzLmJvb2xlYW4pXG4gICAgICB9LCBmYWxzZSk7XG4gICAgfVxuXG4gICAgaWYgKHBhcmFtc1NlcmlhbGl6ZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdmFsaWRhdG9yLmFzc2VydE9wdGlvbnMocGFyYW1zU2VyaWFsaXplciwge1xuICAgICAgICBlbmNvZGU6IHZhbGlkYXRvcnMuZnVuY3Rpb24sXG4gICAgICAgIHNlcmlhbGl6ZTogdmFsaWRhdG9ycy5mdW5jdGlvblxuICAgICAgfSwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgLy8gU2V0IGNvbmZpZy5tZXRob2RcbiAgICBjb25maWcubWV0aG9kID0gKGNvbmZpZy5tZXRob2QgfHwgdGhpcy5kZWZhdWx0cy5tZXRob2QgfHwgJ2dldCcpLnRvTG93ZXJDYXNlKCk7XG5cbiAgICBsZXQgY29udGV4dEhlYWRlcnM7XG5cbiAgICAvLyBGbGF0dGVuIGhlYWRlcnNcbiAgICBjb250ZXh0SGVhZGVycyA9IGhlYWRlcnMgJiYgdXRpbHMubWVyZ2UoXG4gICAgICBoZWFkZXJzLmNvbW1vbixcbiAgICAgIGhlYWRlcnNbY29uZmlnLm1ldGhvZF1cbiAgICApO1xuXG4gICAgY29udGV4dEhlYWRlcnMgJiYgdXRpbHMuZm9yRWFjaChcbiAgICAgIFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJywgJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJywgJ2NvbW1vbiddLFxuICAgICAgKG1ldGhvZCkgPT4ge1xuICAgICAgICBkZWxldGUgaGVhZGVyc1ttZXRob2RdO1xuICAgICAgfVxuICAgICk7XG5cbiAgICBjb25maWcuaGVhZGVycyA9IEF4aW9zSGVhZGVycy5jb25jYXQoY29udGV4dEhlYWRlcnMsIGhlYWRlcnMpO1xuXG4gICAgLy8gZmlsdGVyIG91dCBza2lwcGVkIGludGVyY2VwdG9yc1xuICAgIGNvbnN0IHJlcXVlc3RJbnRlcmNlcHRvckNoYWluID0gW107XG4gICAgbGV0IHN5bmNocm9ub3VzUmVxdWVzdEludGVyY2VwdG9ycyA9IHRydWU7XG4gICAgdGhpcy5pbnRlcmNlcHRvcnMucmVxdWVzdC5mb3JFYWNoKGZ1bmN0aW9uIHVuc2hpZnRSZXF1ZXN0SW50ZXJjZXB0b3JzKGludGVyY2VwdG9yKSB7XG4gICAgICBpZiAodHlwZW9mIGludGVyY2VwdG9yLnJ1bldoZW4gPT09ICdmdW5jdGlvbicgJiYgaW50ZXJjZXB0b3IucnVuV2hlbihjb25maWcpID09PSBmYWxzZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHN5bmNocm9ub3VzUmVxdWVzdEludGVyY2VwdG9ycyA9IHN5bmNocm9ub3VzUmVxdWVzdEludGVyY2VwdG9ycyAmJiBpbnRlcmNlcHRvci5zeW5jaHJvbm91cztcblxuICAgICAgcmVxdWVzdEludGVyY2VwdG9yQ2hhaW4udW5zaGlmdChpbnRlcmNlcHRvci5mdWxmaWxsZWQsIGludGVyY2VwdG9yLnJlamVjdGVkKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHJlc3BvbnNlSW50ZXJjZXB0b3JDaGFpbiA9IFtdO1xuICAgIHRoaXMuaW50ZXJjZXB0b3JzLnJlc3BvbnNlLmZvckVhY2goZnVuY3Rpb24gcHVzaFJlc3BvbnNlSW50ZXJjZXB0b3JzKGludGVyY2VwdG9yKSB7XG4gICAgICByZXNwb25zZUludGVyY2VwdG9yQ2hhaW4ucHVzaChpbnRlcmNlcHRvci5mdWxmaWxsZWQsIGludGVyY2VwdG9yLnJlamVjdGVkKTtcbiAgICB9KTtcblxuICAgIGxldCBwcm9taXNlO1xuICAgIGxldCBpID0gMDtcbiAgICBsZXQgbGVuO1xuXG4gICAgaWYgKCFzeW5jaHJvbm91c1JlcXVlc3RJbnRlcmNlcHRvcnMpIHtcbiAgICAgIGNvbnN0IGNoYWluID0gW2Rpc3BhdGNoUmVxdWVzdC5iaW5kKHRoaXMpLCB1bmRlZmluZWRdO1xuICAgICAgY2hhaW4udW5zaGlmdC5hcHBseShjaGFpbiwgcmVxdWVzdEludGVyY2VwdG9yQ2hhaW4pO1xuICAgICAgY2hhaW4ucHVzaC5hcHBseShjaGFpbiwgcmVzcG9uc2VJbnRlcmNlcHRvckNoYWluKTtcbiAgICAgIGxlbiA9IGNoYWluLmxlbmd0aDtcblxuICAgICAgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZShjb25maWcpO1xuXG4gICAgICB3aGlsZSAoaSA8IGxlbikge1xuICAgICAgICBwcm9taXNlID0gcHJvbWlzZS50aGVuKGNoYWluW2krK10sIGNoYWluW2krK10pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9XG5cbiAgICBsZW4gPSByZXF1ZXN0SW50ZXJjZXB0b3JDaGFpbi5sZW5ndGg7XG5cbiAgICBsZXQgbmV3Q29uZmlnID0gY29uZmlnO1xuXG4gICAgaSA9IDA7XG5cbiAgICB3aGlsZSAoaSA8IGxlbikge1xuICAgICAgY29uc3Qgb25GdWxmaWxsZWQgPSByZXF1ZXN0SW50ZXJjZXB0b3JDaGFpbltpKytdO1xuICAgICAgY29uc3Qgb25SZWplY3RlZCA9IHJlcXVlc3RJbnRlcmNlcHRvckNoYWluW2krK107XG4gICAgICB0cnkge1xuICAgICAgICBuZXdDb25maWcgPSBvbkZ1bGZpbGxlZChuZXdDb25maWcpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgb25SZWplY3RlZC5jYWxsKHRoaXMsIGVycm9yKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIHByb21pc2UgPSBkaXNwYXRjaFJlcXVlc3QuY2FsbCh0aGlzLCBuZXdDb25maWcpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xuICAgIH1cblxuICAgIGkgPSAwO1xuICAgIGxlbiA9IHJlc3BvbnNlSW50ZXJjZXB0b3JDaGFpbi5sZW5ndGg7XG5cbiAgICB3aGlsZSAoaSA8IGxlbikge1xuICAgICAgcHJvbWlzZSA9IHByb21pc2UudGhlbihyZXNwb25zZUludGVyY2VwdG9yQ2hhaW5baSsrXSwgcmVzcG9uc2VJbnRlcmNlcHRvckNoYWluW2krK10pO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9taXNlO1xuICB9XG5cbiAgZ2V0VXJpKGNvbmZpZykge1xuICAgIGNvbmZpZyA9IG1lcmdlQ29uZmlnKHRoaXMuZGVmYXVsdHMsIGNvbmZpZyk7XG4gICAgY29uc3QgZnVsbFBhdGggPSBidWlsZEZ1bGxQYXRoKGNvbmZpZy5iYXNlVVJMLCBjb25maWcudXJsKTtcbiAgICByZXR1cm4gYnVpbGRVUkwoZnVsbFBhdGgsIGNvbmZpZy5wYXJhbXMsIGNvbmZpZy5wYXJhbXNTZXJpYWxpemVyKTtcbiAgfVxufVxuXG4vLyBQcm92aWRlIGFsaWFzZXMgZm9yIHN1cHBvcnRlZCByZXF1ZXN0IG1ldGhvZHNcbnV0aWxzLmZvckVhY2goWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnLCAnb3B0aW9ucyddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kTm9EYXRhKG1ldGhvZCkge1xuICAvKmVzbGludCBmdW5jLW5hbWVzOjAqL1xuICBBeGlvcy5wcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKHVybCwgY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdChtZXJnZUNvbmZpZyhjb25maWcgfHwge30sIHtcbiAgICAgIG1ldGhvZCxcbiAgICAgIHVybCxcbiAgICAgIGRhdGE6IChjb25maWcgfHwge30pLmRhdGFcbiAgICB9KSk7XG4gIH07XG59KTtcblxudXRpbHMuZm9yRWFjaChbJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2RXaXRoRGF0YShtZXRob2QpIHtcbiAgLyplc2xpbnQgZnVuYy1uYW1lczowKi9cblxuICBmdW5jdGlvbiBnZW5lcmF0ZUhUVFBNZXRob2QoaXNGb3JtKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIGh0dHBNZXRob2QodXJsLCBkYXRhLCBjb25maWcpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlcXVlc3QobWVyZ2VDb25maWcoY29uZmlnIHx8IHt9LCB7XG4gICAgICAgIG1ldGhvZCxcbiAgICAgICAgaGVhZGVyczogaXNGb3JtID8ge1xuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnbXVsdGlwYXJ0L2Zvcm0tZGF0YSdcbiAgICAgICAgfSA6IHt9LFxuICAgICAgICB1cmwsXG4gICAgICAgIGRhdGFcbiAgICAgIH0pKTtcbiAgICB9O1xuICB9XG5cbiAgQXhpb3MucHJvdG90eXBlW21ldGhvZF0gPSBnZW5lcmF0ZUhUVFBNZXRob2QoKTtcblxuICBBeGlvcy5wcm90b3R5cGVbbWV0aG9kICsgJ0Zvcm0nXSA9IGdlbmVyYXRlSFRUUE1ldGhvZCh0cnVlKTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBBeGlvcztcbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHV0aWxzIGZyb20gJy4uL3V0aWxzLmpzJztcblxuLyoqXG4gKiBDcmVhdGUgYW4gRXJyb3Igd2l0aCB0aGUgc3BlY2lmaWVkIG1lc3NhZ2UsIGNvbmZpZywgZXJyb3IgY29kZSwgcmVxdWVzdCBhbmQgcmVzcG9uc2UuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UgVGhlIGVycm9yIG1lc3NhZ2UuXG4gKiBAcGFyYW0ge3N0cmluZ30gW2NvZGVdIFRoZSBlcnJvciBjb2RlIChmb3IgZXhhbXBsZSwgJ0VDT05OQUJPUlRFRCcpLlxuICogQHBhcmFtIHtPYmplY3R9IFtjb25maWddIFRoZSBjb25maWcuXG4gKiBAcGFyYW0ge09iamVjdH0gW3JlcXVlc3RdIFRoZSByZXF1ZXN0LlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXNwb25zZV0gVGhlIHJlc3BvbnNlLlxuICpcbiAqIEByZXR1cm5zIHtFcnJvcn0gVGhlIGNyZWF0ZWQgZXJyb3IuXG4gKi9cbmZ1bmN0aW9uIEF4aW9zRXJyb3IobWVzc2FnZSwgY29kZSwgY29uZmlnLCByZXF1ZXN0LCByZXNwb25zZSkge1xuICBFcnJvci5jYWxsKHRoaXMpO1xuXG4gIGlmIChFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSkge1xuICAgIEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKHRoaXMsIHRoaXMuY29uc3RydWN0b3IpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuc3RhY2sgPSAobmV3IEVycm9yKCkpLnN0YWNrO1xuICB9XG5cbiAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgdGhpcy5uYW1lID0gJ0F4aW9zRXJyb3InO1xuICBjb2RlICYmICh0aGlzLmNvZGUgPSBjb2RlKTtcbiAgY29uZmlnICYmICh0aGlzLmNvbmZpZyA9IGNvbmZpZyk7XG4gIHJlcXVlc3QgJiYgKHRoaXMucmVxdWVzdCA9IHJlcXVlc3QpO1xuICByZXNwb25zZSAmJiAodGhpcy5yZXNwb25zZSA9IHJlc3BvbnNlKTtcbn1cblxudXRpbHMuaW5oZXJpdHMoQXhpb3NFcnJvciwgRXJyb3IsIHtcbiAgdG9KU09OOiBmdW5jdGlvbiB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC8vIFN0YW5kYXJkXG4gICAgICBtZXNzYWdlOiB0aGlzLm1lc3NhZ2UsXG4gICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICAvLyBNaWNyb3NvZnRcbiAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmRlc2NyaXB0aW9uLFxuICAgICAgbnVtYmVyOiB0aGlzLm51bWJlcixcbiAgICAgIC8vIE1vemlsbGFcbiAgICAgIGZpbGVOYW1lOiB0aGlzLmZpbGVOYW1lLFxuICAgICAgbGluZU51bWJlcjogdGhpcy5saW5lTnVtYmVyLFxuICAgICAgY29sdW1uTnVtYmVyOiB0aGlzLmNvbHVtbk51bWJlcixcbiAgICAgIHN0YWNrOiB0aGlzLnN0YWNrLFxuICAgICAgLy8gQXhpb3NcbiAgICAgIGNvbmZpZzogdXRpbHMudG9KU09OT2JqZWN0KHRoaXMuY29uZmlnKSxcbiAgICAgIGNvZGU6IHRoaXMuY29kZSxcbiAgICAgIHN0YXR1czogdGhpcy5yZXNwb25zZSAmJiB0aGlzLnJlc3BvbnNlLnN0YXR1cyA/IHRoaXMucmVzcG9uc2Uuc3RhdHVzIDogbnVsbFxuICAgIH07XG4gIH1cbn0pO1xuXG5jb25zdCBwcm90b3R5cGUgPSBBeGlvc0Vycm9yLnByb3RvdHlwZTtcbmNvbnN0IGRlc2NyaXB0b3JzID0ge307XG5cbltcbiAgJ0VSUl9CQURfT1BUSU9OX1ZBTFVFJyxcbiAgJ0VSUl9CQURfT1BUSU9OJyxcbiAgJ0VDT05OQUJPUlRFRCcsXG4gICdFVElNRURPVVQnLFxuICAnRVJSX05FVFdPUksnLFxuICAnRVJSX0ZSX1RPT19NQU5ZX1JFRElSRUNUUycsXG4gICdFUlJfREVQUkVDQVRFRCcsXG4gICdFUlJfQkFEX1JFU1BPTlNFJyxcbiAgJ0VSUl9CQURfUkVRVUVTVCcsXG4gICdFUlJfQ0FOQ0VMRUQnLFxuICAnRVJSX05PVF9TVVBQT1JUJyxcbiAgJ0VSUl9JTlZBTElEX1VSTCdcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5dLmZvckVhY2goY29kZSA9PiB7XG4gIGRlc2NyaXB0b3JzW2NvZGVdID0ge3ZhbHVlOiBjb2RlfTtcbn0pO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydGllcyhBeGlvc0Vycm9yLCBkZXNjcmlwdG9ycyk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkocHJvdG90eXBlLCAnaXNBeGlvc0Vycm9yJywge3ZhbHVlOiB0cnVlfSk7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5BeGlvc0Vycm9yLmZyb20gPSAoZXJyb3IsIGNvZGUsIGNvbmZpZywgcmVxdWVzdCwgcmVzcG9uc2UsIGN1c3RvbVByb3BzKSA9PiB7XG4gIGNvbnN0IGF4aW9zRXJyb3IgPSBPYmplY3QuY3JlYXRlKHByb3RvdHlwZSk7XG5cbiAgdXRpbHMudG9GbGF0T2JqZWN0KGVycm9yLCBheGlvc0Vycm9yLCBmdW5jdGlvbiBmaWx0ZXIob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAhPT0gRXJyb3IucHJvdG90eXBlO1xuICB9LCBwcm9wID0+IHtcbiAgICByZXR1cm4gcHJvcCAhPT0gJ2lzQXhpb3NFcnJvcic7XG4gIH0pO1xuXG4gIEF4aW9zRXJyb3IuY2FsbChheGlvc0Vycm9yLCBlcnJvci5tZXNzYWdlLCBjb2RlLCBjb25maWcsIHJlcXVlc3QsIHJlc3BvbnNlKTtcblxuICBheGlvc0Vycm9yLmNhdXNlID0gZXJyb3I7XG5cbiAgYXhpb3NFcnJvci5uYW1lID0gZXJyb3IubmFtZTtcblxuICBjdXN0b21Qcm9wcyAmJiBPYmplY3QuYXNzaWduKGF4aW9zRXJyb3IsIGN1c3RvbVByb3BzKTtcblxuICByZXR1cm4gYXhpb3NFcnJvcjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEF4aW9zRXJyb3I7XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscy5qcyc7XG5pbXBvcnQgcGFyc2VIZWFkZXJzIGZyb20gJy4uL2hlbHBlcnMvcGFyc2VIZWFkZXJzLmpzJztcblxuY29uc3QgJGludGVybmFscyA9IFN5bWJvbCgnaW50ZXJuYWxzJyk7XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZUhlYWRlcihoZWFkZXIpIHtcbiAgcmV0dXJuIGhlYWRlciAmJiBTdHJpbmcoaGVhZGVyKS50cmltKCkudG9Mb3dlckNhc2UoKTtcbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplVmFsdWUodmFsdWUpIHtcbiAgaWYgKHZhbHVlID09PSBmYWxzZSB8fCB2YWx1ZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIHV0aWxzLmlzQXJyYXkodmFsdWUpID8gdmFsdWUubWFwKG5vcm1hbGl6ZVZhbHVlKSA6IFN0cmluZyh2YWx1ZSk7XG59XG5cbmZ1bmN0aW9uIHBhcnNlVG9rZW5zKHN0cikge1xuICBjb25zdCB0b2tlbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICBjb25zdCB0b2tlbnNSRSA9IC8oW15cXHMsOz1dKylcXHMqKD86PVxccyooW14sO10rKSk/L2c7XG4gIGxldCBtYXRjaDtcblxuICB3aGlsZSAoKG1hdGNoID0gdG9rZW5zUkUuZXhlYyhzdHIpKSkge1xuICAgIHRva2Vuc1ttYXRjaFsxXV0gPSBtYXRjaFsyXTtcbiAgfVxuXG4gIHJldHVybiB0b2tlbnM7XG59XG5cbmZ1bmN0aW9uIGlzVmFsaWRIZWFkZXJOYW1lKHN0cikge1xuICByZXR1cm4gL15bLV9hLXpBLVpdKyQvLnRlc3Qoc3RyLnRyaW0oKSk7XG59XG5cbmZ1bmN0aW9uIG1hdGNoSGVhZGVyVmFsdWUoY29udGV4dCwgdmFsdWUsIGhlYWRlciwgZmlsdGVyKSB7XG4gIGlmICh1dGlscy5pc0Z1bmN0aW9uKGZpbHRlcikpIHtcbiAgICByZXR1cm4gZmlsdGVyLmNhbGwodGhpcywgdmFsdWUsIGhlYWRlcik7XG4gIH1cblxuICBpZiAoIXV0aWxzLmlzU3RyaW5nKHZhbHVlKSkgcmV0dXJuO1xuXG4gIGlmICh1dGlscy5pc1N0cmluZyhmaWx0ZXIpKSB7XG4gICAgcmV0dXJuIHZhbHVlLmluZGV4T2YoZmlsdGVyKSAhPT0gLTE7XG4gIH1cblxuICBpZiAodXRpbHMuaXNSZWdFeHAoZmlsdGVyKSkge1xuICAgIHJldHVybiBmaWx0ZXIudGVzdCh2YWx1ZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZm9ybWF0SGVhZGVyKGhlYWRlcikge1xuICByZXR1cm4gaGVhZGVyLnRyaW0oKVxuICAgIC50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoLyhbYS16XFxkXSkoXFx3KikvZywgKHcsIGNoYXIsIHN0cikgPT4ge1xuICAgICAgcmV0dXJuIGNoYXIudG9VcHBlckNhc2UoKSArIHN0cjtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gYnVpbGRBY2Nlc3NvcnMob2JqLCBoZWFkZXIpIHtcbiAgY29uc3QgYWNjZXNzb3JOYW1lID0gdXRpbHMudG9DYW1lbENhc2UoJyAnICsgaGVhZGVyKTtcblxuICBbJ2dldCcsICdzZXQnLCAnaGFzJ10uZm9yRWFjaChtZXRob2ROYW1lID0+IHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBtZXRob2ROYW1lICsgYWNjZXNzb3JOYW1lLCB7XG4gICAgICB2YWx1ZTogZnVuY3Rpb24oYXJnMSwgYXJnMiwgYXJnMykge1xuICAgICAgICByZXR1cm4gdGhpc1ttZXRob2ROYW1lXS5jYWxsKHRoaXMsIGhlYWRlciwgYXJnMSwgYXJnMiwgYXJnMyk7XG4gICAgICB9LFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0pO1xufVxuXG5jbGFzcyBBeGlvc0hlYWRlcnMge1xuICBjb25zdHJ1Y3RvcihoZWFkZXJzKSB7XG4gICAgaGVhZGVycyAmJiB0aGlzLnNldChoZWFkZXJzKTtcbiAgfVxuXG4gIHNldChoZWFkZXIsIHZhbHVlT3JSZXdyaXRlLCByZXdyaXRlKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICBmdW5jdGlvbiBzZXRIZWFkZXIoX3ZhbHVlLCBfaGVhZGVyLCBfcmV3cml0ZSkge1xuICAgICAgY29uc3QgbEhlYWRlciA9IG5vcm1hbGl6ZUhlYWRlcihfaGVhZGVyKTtcblxuICAgICAgaWYgKCFsSGVhZGVyKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignaGVhZGVyIG5hbWUgbXVzdCBiZSBhIG5vbi1lbXB0eSBzdHJpbmcnKTtcbiAgICAgIH1cblxuICAgICAgY29uc3Qga2V5ID0gdXRpbHMuZmluZEtleShzZWxmLCBsSGVhZGVyKTtcblxuICAgICAgaWYoIWtleSB8fCBzZWxmW2tleV0gPT09IHVuZGVmaW5lZCB8fCBfcmV3cml0ZSA9PT0gdHJ1ZSB8fCAoX3Jld3JpdGUgPT09IHVuZGVmaW5lZCAmJiBzZWxmW2tleV0gIT09IGZhbHNlKSkge1xuICAgICAgICBzZWxmW2tleSB8fCBfaGVhZGVyXSA9IG5vcm1hbGl6ZVZhbHVlKF92YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0SGVhZGVycyA9IChoZWFkZXJzLCBfcmV3cml0ZSkgPT5cbiAgICAgIHV0aWxzLmZvckVhY2goaGVhZGVycywgKF92YWx1ZSwgX2hlYWRlcikgPT4gc2V0SGVhZGVyKF92YWx1ZSwgX2hlYWRlciwgX3Jld3JpdGUpKTtcblxuICAgIGlmICh1dGlscy5pc1BsYWluT2JqZWN0KGhlYWRlcikgfHwgaGVhZGVyIGluc3RhbmNlb2YgdGhpcy5jb25zdHJ1Y3Rvcikge1xuICAgICAgc2V0SGVhZGVycyhoZWFkZXIsIHZhbHVlT3JSZXdyaXRlKVxuICAgIH0gZWxzZSBpZih1dGlscy5pc1N0cmluZyhoZWFkZXIpICYmIChoZWFkZXIgPSBoZWFkZXIudHJpbSgpKSAmJiAhaXNWYWxpZEhlYWRlck5hbWUoaGVhZGVyKSkge1xuICAgICAgc2V0SGVhZGVycyhwYXJzZUhlYWRlcnMoaGVhZGVyKSwgdmFsdWVPclJld3JpdGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBoZWFkZXIgIT0gbnVsbCAmJiBzZXRIZWFkZXIodmFsdWVPclJld3JpdGUsIGhlYWRlciwgcmV3cml0ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBnZXQoaGVhZGVyLCBwYXJzZXIpIHtcbiAgICBoZWFkZXIgPSBub3JtYWxpemVIZWFkZXIoaGVhZGVyKTtcblxuICAgIGlmIChoZWFkZXIpIHtcbiAgICAgIGNvbnN0IGtleSA9IHV0aWxzLmZpbmRLZXkodGhpcywgaGVhZGVyKTtcblxuICAgICAgaWYgKGtleSkge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXNba2V5XTtcblxuICAgICAgICBpZiAoIXBhcnNlcikge1xuICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwYXJzZXIgPT09IHRydWUpIHtcbiAgICAgICAgICByZXR1cm4gcGFyc2VUb2tlbnModmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24ocGFyc2VyKSkge1xuICAgICAgICAgIHJldHVybiBwYXJzZXIuY2FsbCh0aGlzLCB2YWx1ZSwga2V5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh1dGlscy5pc1JlZ0V4cChwYXJzZXIpKSB7XG4gICAgICAgICAgcmV0dXJuIHBhcnNlci5leGVjKHZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ3BhcnNlciBtdXN0IGJlIGJvb2xlYW58cmVnZXhwfGZ1bmN0aW9uJyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaGFzKGhlYWRlciwgbWF0Y2hlcikge1xuICAgIGhlYWRlciA9IG5vcm1hbGl6ZUhlYWRlcihoZWFkZXIpO1xuXG4gICAgaWYgKGhlYWRlcikge1xuICAgICAgY29uc3Qga2V5ID0gdXRpbHMuZmluZEtleSh0aGlzLCBoZWFkZXIpO1xuXG4gICAgICByZXR1cm4gISEoa2V5ICYmIHRoaXNba2V5XSAhPT0gdW5kZWZpbmVkICYmICghbWF0Y2hlciB8fCBtYXRjaEhlYWRlclZhbHVlKHRoaXMsIHRoaXNba2V5XSwga2V5LCBtYXRjaGVyKSkpO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGRlbGV0ZShoZWFkZXIsIG1hdGNoZXIpIHtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICBsZXQgZGVsZXRlZCA9IGZhbHNlO1xuXG4gICAgZnVuY3Rpb24gZGVsZXRlSGVhZGVyKF9oZWFkZXIpIHtcbiAgICAgIF9oZWFkZXIgPSBub3JtYWxpemVIZWFkZXIoX2hlYWRlcik7XG5cbiAgICAgIGlmIChfaGVhZGVyKSB7XG4gICAgICAgIGNvbnN0IGtleSA9IHV0aWxzLmZpbmRLZXkoc2VsZiwgX2hlYWRlcik7XG5cbiAgICAgICAgaWYgKGtleSAmJiAoIW1hdGNoZXIgfHwgbWF0Y2hIZWFkZXJWYWx1ZShzZWxmLCBzZWxmW2tleV0sIGtleSwgbWF0Y2hlcikpKSB7XG4gICAgICAgICAgZGVsZXRlIHNlbGZba2V5XTtcblxuICAgICAgICAgIGRlbGV0ZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHV0aWxzLmlzQXJyYXkoaGVhZGVyKSkge1xuICAgICAgaGVhZGVyLmZvckVhY2goZGVsZXRlSGVhZGVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGVsZXRlSGVhZGVyKGhlYWRlcik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRlbGV0ZWQ7XG4gIH1cblxuICBjbGVhcihtYXRjaGVyKSB7XG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHRoaXMpO1xuICAgIGxldCBpID0ga2V5cy5sZW5ndGg7XG4gICAgbGV0IGRlbGV0ZWQgPSBmYWxzZTtcblxuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIGNvbnN0IGtleSA9IGtleXNbaV07XG4gICAgICBpZighbWF0Y2hlciB8fCBtYXRjaEhlYWRlclZhbHVlKHRoaXMsIHRoaXNba2V5XSwga2V5LCBtYXRjaGVyKSkge1xuICAgICAgICBkZWxldGUgdGhpc1trZXldO1xuICAgICAgICBkZWxldGVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZGVsZXRlZDtcbiAgfVxuXG4gIG5vcm1hbGl6ZShmb3JtYXQpIHtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICBjb25zdCBoZWFkZXJzID0ge307XG5cbiAgICB1dGlscy5mb3JFYWNoKHRoaXMsICh2YWx1ZSwgaGVhZGVyKSA9PiB7XG4gICAgICBjb25zdCBrZXkgPSB1dGlscy5maW5kS2V5KGhlYWRlcnMsIGhlYWRlcik7XG5cbiAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgc2VsZltrZXldID0gbm9ybWFsaXplVmFsdWUodmFsdWUpO1xuICAgICAgICBkZWxldGUgc2VsZltoZWFkZXJdO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG5vcm1hbGl6ZWQgPSBmb3JtYXQgPyBmb3JtYXRIZWFkZXIoaGVhZGVyKSA6IFN0cmluZyhoZWFkZXIpLnRyaW0oKTtcblxuICAgICAgaWYgKG5vcm1hbGl6ZWQgIT09IGhlYWRlcikge1xuICAgICAgICBkZWxldGUgc2VsZltoZWFkZXJdO1xuICAgICAgfVxuXG4gICAgICBzZWxmW25vcm1hbGl6ZWRdID0gbm9ybWFsaXplVmFsdWUodmFsdWUpO1xuXG4gICAgICBoZWFkZXJzW25vcm1hbGl6ZWRdID0gdHJ1ZTtcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgY29uY2F0KC4uLnRhcmdldHMpIHtcbiAgICByZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvci5jb25jYXQodGhpcywgLi4udGFyZ2V0cyk7XG4gIH1cblxuICB0b0pTT04oYXNTdHJpbmdzKSB7XG4gICAgY29uc3Qgb2JqID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcblxuICAgIHV0aWxzLmZvckVhY2godGhpcywgKHZhbHVlLCBoZWFkZXIpID0+IHtcbiAgICAgIHZhbHVlICE9IG51bGwgJiYgdmFsdWUgIT09IGZhbHNlICYmIChvYmpbaGVhZGVyXSA9IGFzU3RyaW5ncyAmJiB1dGlscy5pc0FycmF5KHZhbHVlKSA/IHZhbHVlLmpvaW4oJywgJykgOiB2YWx1ZSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgW1N5bWJvbC5pdGVyYXRvcl0oKSB7XG4gICAgcmV0dXJuIE9iamVjdC5lbnRyaWVzKHRoaXMudG9KU09OKCkpW1N5bWJvbC5pdGVyYXRvcl0oKTtcbiAgfVxuXG4gIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiBPYmplY3QuZW50cmllcyh0aGlzLnRvSlNPTigpKS5tYXAoKFtoZWFkZXIsIHZhbHVlXSkgPT4gaGVhZGVyICsgJzogJyArIHZhbHVlKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIGdldCBbU3ltYm9sLnRvU3RyaW5nVGFnXSgpIHtcbiAgICByZXR1cm4gJ0F4aW9zSGVhZGVycyc7XG4gIH1cblxuICBzdGF0aWMgZnJvbSh0aGluZykge1xuICAgIHJldHVybiB0aGluZyBpbnN0YW5jZW9mIHRoaXMgPyB0aGluZyA6IG5ldyB0aGlzKHRoaW5nKTtcbiAgfVxuXG4gIHN0YXRpYyBjb25jYXQoZmlyc3QsIC4uLnRhcmdldHMpIHtcbiAgICBjb25zdCBjb21wdXRlZCA9IG5ldyB0aGlzKGZpcnN0KTtcblxuICAgIHRhcmdldHMuZm9yRWFjaCgodGFyZ2V0KSA9PiBjb21wdXRlZC5zZXQodGFyZ2V0KSk7XG5cbiAgICByZXR1cm4gY29tcHV0ZWQ7XG4gIH1cblxuICBzdGF0aWMgYWNjZXNzb3IoaGVhZGVyKSB7XG4gICAgY29uc3QgaW50ZXJuYWxzID0gdGhpc1skaW50ZXJuYWxzXSA9ICh0aGlzWyRpbnRlcm5hbHNdID0ge1xuICAgICAgYWNjZXNzb3JzOiB7fVxuICAgIH0pO1xuXG4gICAgY29uc3QgYWNjZXNzb3JzID0gaW50ZXJuYWxzLmFjY2Vzc29ycztcbiAgICBjb25zdCBwcm90b3R5cGUgPSB0aGlzLnByb3RvdHlwZTtcblxuICAgIGZ1bmN0aW9uIGRlZmluZUFjY2Vzc29yKF9oZWFkZXIpIHtcbiAgICAgIGNvbnN0IGxIZWFkZXIgPSBub3JtYWxpemVIZWFkZXIoX2hlYWRlcik7XG5cbiAgICAgIGlmICghYWNjZXNzb3JzW2xIZWFkZXJdKSB7XG4gICAgICAgIGJ1aWxkQWNjZXNzb3JzKHByb3RvdHlwZSwgX2hlYWRlcik7XG4gICAgICAgIGFjY2Vzc29yc1tsSGVhZGVyXSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdXRpbHMuaXNBcnJheShoZWFkZXIpID8gaGVhZGVyLmZvckVhY2goZGVmaW5lQWNjZXNzb3IpIDogZGVmaW5lQWNjZXNzb3IoaGVhZGVyKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG5cbkF4aW9zSGVhZGVycy5hY2Nlc3NvcihbJ0NvbnRlbnQtVHlwZScsICdDb250ZW50LUxlbmd0aCcsICdBY2NlcHQnLCAnQWNjZXB0LUVuY29kaW5nJywgJ1VzZXItQWdlbnQnLCAnQXV0aG9yaXphdGlvbiddKTtcblxudXRpbHMuZnJlZXplTWV0aG9kcyhBeGlvc0hlYWRlcnMucHJvdG90eXBlKTtcbnV0aWxzLmZyZWV6ZU1ldGhvZHMoQXhpb3NIZWFkZXJzKTtcblxuZXhwb3J0IGRlZmF1bHQgQXhpb3NIZWFkZXJzO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgdXRpbHMgZnJvbSAnLi8uLi91dGlscy5qcyc7XG5cbmNsYXNzIEludGVyY2VwdG9yTWFuYWdlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuaGFuZGxlcnMgPSBbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgYSBuZXcgaW50ZXJjZXB0b3IgdG8gdGhlIHN0YWNrXG4gICAqXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bGZpbGxlZCBUaGUgZnVuY3Rpb24gdG8gaGFuZGxlIGB0aGVuYCBmb3IgYSBgUHJvbWlzZWBcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gcmVqZWN0ZWQgVGhlIGZ1bmN0aW9uIHRvIGhhbmRsZSBgcmVqZWN0YCBmb3IgYSBgUHJvbWlzZWBcbiAgICpcbiAgICogQHJldHVybiB7TnVtYmVyfSBBbiBJRCB1c2VkIHRvIHJlbW92ZSBpbnRlcmNlcHRvciBsYXRlclxuICAgKi9cbiAgdXNlKGZ1bGZpbGxlZCwgcmVqZWN0ZWQsIG9wdGlvbnMpIHtcbiAgICB0aGlzLmhhbmRsZXJzLnB1c2goe1xuICAgICAgZnVsZmlsbGVkLFxuICAgICAgcmVqZWN0ZWQsXG4gICAgICBzeW5jaHJvbm91czogb3B0aW9ucyA/IG9wdGlvbnMuc3luY2hyb25vdXMgOiBmYWxzZSxcbiAgICAgIHJ1bldoZW46IG9wdGlvbnMgPyBvcHRpb25zLnJ1bldoZW4gOiBudWxsXG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXMuaGFuZGxlcnMubGVuZ3RoIC0gMTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgYW4gaW50ZXJjZXB0b3IgZnJvbSB0aGUgc3RhY2tcbiAgICpcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGlkIFRoZSBJRCB0aGF0IHdhcyByZXR1cm5lZCBieSBgdXNlYFxuICAgKlxuICAgKiBAcmV0dXJucyB7Qm9vbGVhbn0gYHRydWVgIGlmIHRoZSBpbnRlcmNlcHRvciB3YXMgcmVtb3ZlZCwgYGZhbHNlYCBvdGhlcndpc2VcbiAgICovXG4gIGVqZWN0KGlkKSB7XG4gICAgaWYgKHRoaXMuaGFuZGxlcnNbaWRdKSB7XG4gICAgICB0aGlzLmhhbmRsZXJzW2lkXSA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENsZWFyIGFsbCBpbnRlcmNlcHRvcnMgZnJvbSB0aGUgc3RhY2tcbiAgICpcbiAgICogQHJldHVybnMge3ZvaWR9XG4gICAqL1xuICBjbGVhcigpIHtcbiAgICBpZiAodGhpcy5oYW5kbGVycykge1xuICAgICAgdGhpcy5oYW5kbGVycyA9IFtdO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBJdGVyYXRlIG92ZXIgYWxsIHRoZSByZWdpc3RlcmVkIGludGVyY2VwdG9yc1xuICAgKlxuICAgKiBUaGlzIG1ldGhvZCBpcyBwYXJ0aWN1bGFybHkgdXNlZnVsIGZvciBza2lwcGluZyBvdmVyIGFueVxuICAgKiBpbnRlcmNlcHRvcnMgdGhhdCBtYXkgaGF2ZSBiZWNvbWUgYG51bGxgIGNhbGxpbmcgYGVqZWN0YC5cbiAgICpcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uIHRvIGNhbGwgZm9yIGVhY2ggaW50ZXJjZXB0b3JcbiAgICpcbiAgICogQHJldHVybnMge3ZvaWR9XG4gICAqL1xuICBmb3JFYWNoKGZuKSB7XG4gICAgdXRpbHMuZm9yRWFjaCh0aGlzLmhhbmRsZXJzLCBmdW5jdGlvbiBmb3JFYWNoSGFuZGxlcihoKSB7XG4gICAgICBpZiAoaCAhPT0gbnVsbCkge1xuICAgICAgICBmbihoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnRlcmNlcHRvck1hbmFnZXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBpc0Fic29sdXRlVVJMIGZyb20gJy4uL2hlbHBlcnMvaXNBYnNvbHV0ZVVSTC5qcyc7XG5pbXBvcnQgY29tYmluZVVSTHMgZnJvbSAnLi4vaGVscGVycy9jb21iaW5lVVJMcy5qcyc7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBVUkwgYnkgY29tYmluaW5nIHRoZSBiYXNlVVJMIHdpdGggdGhlIHJlcXVlc3RlZFVSTCxcbiAqIG9ubHkgd2hlbiB0aGUgcmVxdWVzdGVkVVJMIGlzIG5vdCBhbHJlYWR5IGFuIGFic29sdXRlIFVSTC5cbiAqIElmIHRoZSByZXF1ZXN0VVJMIGlzIGFic29sdXRlLCB0aGlzIGZ1bmN0aW9uIHJldHVybnMgdGhlIHJlcXVlc3RlZFVSTCB1bnRvdWNoZWQuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGJhc2VVUkwgVGhlIGJhc2UgVVJMXG4gKiBAcGFyYW0ge3N0cmluZ30gcmVxdWVzdGVkVVJMIEFic29sdXRlIG9yIHJlbGF0aXZlIFVSTCB0byBjb21iaW5lXG4gKlxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGNvbWJpbmVkIGZ1bGwgcGF0aFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZEZ1bGxQYXRoKGJhc2VVUkwsIHJlcXVlc3RlZFVSTCkge1xuICBpZiAoYmFzZVVSTCAmJiAhaXNBYnNvbHV0ZVVSTChyZXF1ZXN0ZWRVUkwpKSB7XG4gICAgcmV0dXJuIGNvbWJpbmVVUkxzKGJhc2VVUkwsIHJlcXVlc3RlZFVSTCk7XG4gIH1cbiAgcmV0dXJuIHJlcXVlc3RlZFVSTDtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHRyYW5zZm9ybURhdGEgZnJvbSAnLi90cmFuc2Zvcm1EYXRhLmpzJztcbmltcG9ydCBpc0NhbmNlbCBmcm9tICcuLi9jYW5jZWwvaXNDYW5jZWwuanMnO1xuaW1wb3J0IGRlZmF1bHRzIGZyb20gJy4uL2RlZmF1bHRzL2luZGV4LmpzJztcbmltcG9ydCBDYW5jZWxlZEVycm9yIGZyb20gJy4uL2NhbmNlbC9DYW5jZWxlZEVycm9yLmpzJztcbmltcG9ydCBBeGlvc0hlYWRlcnMgZnJvbSAnLi4vY29yZS9BeGlvc0hlYWRlcnMuanMnO1xuaW1wb3J0IGFkYXB0ZXJzIGZyb20gXCIuLi9hZGFwdGVycy9hZGFwdGVycy5qc1wiO1xuXG4vKipcbiAqIFRocm93cyBhIGBDYW5jZWxlZEVycm9yYCBpZiBjYW5jZWxsYXRpb24gaGFzIGJlZW4gcmVxdWVzdGVkLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZyB0aGF0IGlzIHRvIGJlIHVzZWQgZm9yIHRoZSByZXF1ZXN0XG4gKlxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmZ1bmN0aW9uIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKSB7XG4gIGlmIChjb25maWcuY2FuY2VsVG9rZW4pIHtcbiAgICBjb25maWcuY2FuY2VsVG9rZW4udGhyb3dJZlJlcXVlc3RlZCgpO1xuICB9XG5cbiAgaWYgKGNvbmZpZy5zaWduYWwgJiYgY29uZmlnLnNpZ25hbC5hYm9ydGVkKSB7XG4gICAgdGhyb3cgbmV3IENhbmNlbGVkRXJyb3IobnVsbCwgY29uZmlnKTtcbiAgfVxufVxuXG4vKipcbiAqIERpc3BhdGNoIGEgcmVxdWVzdCB0byB0aGUgc2VydmVyIHVzaW5nIHRoZSBjb25maWd1cmVkIGFkYXB0ZXIuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnIHRoYXQgaXMgdG8gYmUgdXNlZCBmb3IgdGhlIHJlcXVlc3RcbiAqXG4gKiBAcmV0dXJucyB7UHJvbWlzZX0gVGhlIFByb21pc2UgdG8gYmUgZnVsZmlsbGVkXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpc3BhdGNoUmVxdWVzdChjb25maWcpIHtcbiAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpO1xuXG4gIGNvbmZpZy5oZWFkZXJzID0gQXhpb3NIZWFkZXJzLmZyb20oY29uZmlnLmhlYWRlcnMpO1xuXG4gIC8vIFRyYW5zZm9ybSByZXF1ZXN0IGRhdGFcbiAgY29uZmlnLmRhdGEgPSB0cmFuc2Zvcm1EYXRhLmNhbGwoXG4gICAgY29uZmlnLFxuICAgIGNvbmZpZy50cmFuc2Zvcm1SZXF1ZXN0XG4gICk7XG5cbiAgaWYgKFsncG9zdCcsICdwdXQnLCAncGF0Y2gnXS5pbmRleE9mKGNvbmZpZy5tZXRob2QpICE9PSAtMSkge1xuICAgIGNvbmZpZy5oZWFkZXJzLnNldENvbnRlbnRUeXBlKCdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLCBmYWxzZSk7XG4gIH1cblxuICBjb25zdCBhZGFwdGVyID0gYWRhcHRlcnMuZ2V0QWRhcHRlcihjb25maWcuYWRhcHRlciB8fCBkZWZhdWx0cy5hZGFwdGVyKTtcblxuICByZXR1cm4gYWRhcHRlcihjb25maWcpLnRoZW4oZnVuY3Rpb24gb25BZGFwdGVyUmVzb2x1dGlvbihyZXNwb25zZSkge1xuICAgIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTtcblxuICAgIC8vIFRyYW5zZm9ybSByZXNwb25zZSBkYXRhXG4gICAgcmVzcG9uc2UuZGF0YSA9IHRyYW5zZm9ybURhdGEuY2FsbChcbiAgICAgIGNvbmZpZyxcbiAgICAgIGNvbmZpZy50cmFuc2Zvcm1SZXNwb25zZSxcbiAgICAgIHJlc3BvbnNlXG4gICAgKTtcblxuICAgIHJlc3BvbnNlLmhlYWRlcnMgPSBBeGlvc0hlYWRlcnMuZnJvbShyZXNwb25zZS5oZWFkZXJzKTtcblxuICAgIHJldHVybiByZXNwb25zZTtcbiAgfSwgZnVuY3Rpb24gb25BZGFwdGVyUmVqZWN0aW9uKHJlYXNvbikge1xuICAgIGlmICghaXNDYW5jZWwocmVhc29uKSkge1xuICAgICAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpO1xuXG4gICAgICAvLyBUcmFuc2Zvcm0gcmVzcG9uc2UgZGF0YVxuICAgICAgaWYgKHJlYXNvbiAmJiByZWFzb24ucmVzcG9uc2UpIHtcbiAgICAgICAgcmVhc29uLnJlc3BvbnNlLmRhdGEgPSB0cmFuc2Zvcm1EYXRhLmNhbGwoXG4gICAgICAgICAgY29uZmlnLFxuICAgICAgICAgIGNvbmZpZy50cmFuc2Zvcm1SZXNwb25zZSxcbiAgICAgICAgICByZWFzb24ucmVzcG9uc2VcbiAgICAgICAgKTtcbiAgICAgICAgcmVhc29uLnJlc3BvbnNlLmhlYWRlcnMgPSBBeGlvc0hlYWRlcnMuZnJvbShyZWFzb24ucmVzcG9uc2UuaGVhZGVycyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHJlYXNvbik7XG4gIH0pO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgdXRpbHMgZnJvbSAnLi4vdXRpbHMuanMnO1xuaW1wb3J0IEF4aW9zSGVhZGVycyBmcm9tIFwiLi9BeGlvc0hlYWRlcnMuanNcIjtcblxuY29uc3QgaGVhZGVyc1RvT2JqZWN0ID0gKHRoaW5nKSA9PiB0aGluZyBpbnN0YW5jZW9mIEF4aW9zSGVhZGVycyA/IHRoaW5nLnRvSlNPTigpIDogdGhpbmc7XG5cbi8qKlxuICogQ29uZmlnLXNwZWNpZmljIG1lcmdlLWZ1bmN0aW9uIHdoaWNoIGNyZWF0ZXMgYSBuZXcgY29uZmlnLW9iamVjdFxuICogYnkgbWVyZ2luZyB0d28gY29uZmlndXJhdGlvbiBvYmplY3RzIHRvZ2V0aGVyLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcxXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnMlxuICpcbiAqIEByZXR1cm5zIHtPYmplY3R9IE5ldyBvYmplY3QgcmVzdWx0aW5nIGZyb20gbWVyZ2luZyBjb25maWcyIHRvIGNvbmZpZzFcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVyZ2VDb25maWcoY29uZmlnMSwgY29uZmlnMikge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgY29uZmlnMiA9IGNvbmZpZzIgfHwge307XG4gIGNvbnN0IGNvbmZpZyA9IHt9O1xuXG4gIGZ1bmN0aW9uIGdldE1lcmdlZFZhbHVlKHRhcmdldCwgc291cmNlLCBjYXNlbGVzcykge1xuICAgIGlmICh1dGlscy5pc1BsYWluT2JqZWN0KHRhcmdldCkgJiYgdXRpbHMuaXNQbGFpbk9iamVjdChzb3VyY2UpKSB7XG4gICAgICByZXR1cm4gdXRpbHMubWVyZ2UuY2FsbCh7Y2FzZWxlc3N9LCB0YXJnZXQsIHNvdXJjZSk7XG4gICAgfSBlbHNlIGlmICh1dGlscy5pc1BsYWluT2JqZWN0KHNvdXJjZSkpIHtcbiAgICAgIHJldHVybiB1dGlscy5tZXJnZSh7fSwgc291cmNlKTtcbiAgICB9IGVsc2UgaWYgKHV0aWxzLmlzQXJyYXkoc291cmNlKSkge1xuICAgICAgcmV0dXJuIHNvdXJjZS5zbGljZSgpO1xuICAgIH1cbiAgICByZXR1cm4gc291cmNlO1xuICB9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbnNpc3RlbnQtcmV0dXJuXG4gIGZ1bmN0aW9uIG1lcmdlRGVlcFByb3BlcnRpZXMoYSwgYiwgY2FzZWxlc3MpIHtcbiAgICBpZiAoIXV0aWxzLmlzVW5kZWZpbmVkKGIpKSB7XG4gICAgICByZXR1cm4gZ2V0TWVyZ2VkVmFsdWUoYSwgYiwgY2FzZWxlc3MpO1xuICAgIH0gZWxzZSBpZiAoIXV0aWxzLmlzVW5kZWZpbmVkKGEpKSB7XG4gICAgICByZXR1cm4gZ2V0TWVyZ2VkVmFsdWUodW5kZWZpbmVkLCBhLCBjYXNlbGVzcyk7XG4gICAgfVxuICB9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbnNpc3RlbnQtcmV0dXJuXG4gIGZ1bmN0aW9uIHZhbHVlRnJvbUNvbmZpZzIoYSwgYikge1xuICAgIGlmICghdXRpbHMuaXNVbmRlZmluZWQoYikpIHtcbiAgICAgIHJldHVybiBnZXRNZXJnZWRWYWx1ZSh1bmRlZmluZWQsIGIpO1xuICAgIH1cbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb25zaXN0ZW50LXJldHVyblxuICBmdW5jdGlvbiBkZWZhdWx0VG9Db25maWcyKGEsIGIpIHtcbiAgICBpZiAoIXV0aWxzLmlzVW5kZWZpbmVkKGIpKSB7XG4gICAgICByZXR1cm4gZ2V0TWVyZ2VkVmFsdWUodW5kZWZpbmVkLCBiKTtcbiAgICB9IGVsc2UgaWYgKCF1dGlscy5pc1VuZGVmaW5lZChhKSkge1xuICAgICAgcmV0dXJuIGdldE1lcmdlZFZhbHVlKHVuZGVmaW5lZCwgYSk7XG4gICAgfVxuICB9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbnNpc3RlbnQtcmV0dXJuXG4gIGZ1bmN0aW9uIG1lcmdlRGlyZWN0S2V5cyhhLCBiLCBwcm9wKSB7XG4gICAgaWYgKHByb3AgaW4gY29uZmlnMikge1xuICAgICAgcmV0dXJuIGdldE1lcmdlZFZhbHVlKGEsIGIpO1xuICAgIH0gZWxzZSBpZiAocHJvcCBpbiBjb25maWcxKSB7XG4gICAgICByZXR1cm4gZ2V0TWVyZ2VkVmFsdWUodW5kZWZpbmVkLCBhKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBtZXJnZU1hcCA9IHtcbiAgICB1cmw6IHZhbHVlRnJvbUNvbmZpZzIsXG4gICAgbWV0aG9kOiB2YWx1ZUZyb21Db25maWcyLFxuICAgIGRhdGE6IHZhbHVlRnJvbUNvbmZpZzIsXG4gICAgYmFzZVVSTDogZGVmYXVsdFRvQ29uZmlnMixcbiAgICB0cmFuc2Zvcm1SZXF1ZXN0OiBkZWZhdWx0VG9Db25maWcyLFxuICAgIHRyYW5zZm9ybVJlc3BvbnNlOiBkZWZhdWx0VG9Db25maWcyLFxuICAgIHBhcmFtc1NlcmlhbGl6ZXI6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgdGltZW91dDogZGVmYXVsdFRvQ29uZmlnMixcbiAgICB0aW1lb3V0TWVzc2FnZTogZGVmYXVsdFRvQ29uZmlnMixcbiAgICB3aXRoQ3JlZGVudGlhbHM6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgYWRhcHRlcjogZGVmYXVsdFRvQ29uZmlnMixcbiAgICByZXNwb25zZVR5cGU6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgeHNyZkNvb2tpZU5hbWU6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgeHNyZkhlYWRlck5hbWU6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgb25VcGxvYWRQcm9ncmVzczogZGVmYXVsdFRvQ29uZmlnMixcbiAgICBvbkRvd25sb2FkUHJvZ3Jlc3M6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgZGVjb21wcmVzczogZGVmYXVsdFRvQ29uZmlnMixcbiAgICBtYXhDb250ZW50TGVuZ3RoOiBkZWZhdWx0VG9Db25maWcyLFxuICAgIG1heEJvZHlMZW5ndGg6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgYmVmb3JlUmVkaXJlY3Q6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgdHJhbnNwb3J0OiBkZWZhdWx0VG9Db25maWcyLFxuICAgIGh0dHBBZ2VudDogZGVmYXVsdFRvQ29uZmlnMixcbiAgICBodHRwc0FnZW50OiBkZWZhdWx0VG9Db25maWcyLFxuICAgIGNhbmNlbFRva2VuOiBkZWZhdWx0VG9Db25maWcyLFxuICAgIHNvY2tldFBhdGg6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgcmVzcG9uc2VFbmNvZGluZzogZGVmYXVsdFRvQ29uZmlnMixcbiAgICB2YWxpZGF0ZVN0YXR1czogbWVyZ2VEaXJlY3RLZXlzLFxuICAgIGhlYWRlcnM6IChhLCBiKSA9PiBtZXJnZURlZXBQcm9wZXJ0aWVzKGhlYWRlcnNUb09iamVjdChhKSwgaGVhZGVyc1RvT2JqZWN0KGIpLCB0cnVlKVxuICB9O1xuXG4gIHV0aWxzLmZvckVhY2goT2JqZWN0LmtleXMoY29uZmlnMSkuY29uY2F0KE9iamVjdC5rZXlzKGNvbmZpZzIpKSwgZnVuY3Rpb24gY29tcHV0ZUNvbmZpZ1ZhbHVlKHByb3ApIHtcbiAgICBjb25zdCBtZXJnZSA9IG1lcmdlTWFwW3Byb3BdIHx8IG1lcmdlRGVlcFByb3BlcnRpZXM7XG4gICAgY29uc3QgY29uZmlnVmFsdWUgPSBtZXJnZShjb25maWcxW3Byb3BdLCBjb25maWcyW3Byb3BdLCBwcm9wKTtcbiAgICAodXRpbHMuaXNVbmRlZmluZWQoY29uZmlnVmFsdWUpICYmIG1lcmdlICE9PSBtZXJnZURpcmVjdEtleXMpIHx8IChjb25maWdbcHJvcF0gPSBjb25maWdWYWx1ZSk7XG4gIH0pO1xuXG4gIHJldHVybiBjb25maWc7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBBeGlvc0Vycm9yIGZyb20gJy4vQXhpb3NFcnJvci5qcyc7XG5cbi8qKlxuICogUmVzb2x2ZSBvciByZWplY3QgYSBQcm9taXNlIGJhc2VkIG9uIHJlc3BvbnNlIHN0YXR1cy5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZXNvbHZlIEEgZnVuY3Rpb24gdGhhdCByZXNvbHZlcyB0aGUgcHJvbWlzZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlamVjdCBBIGZ1bmN0aW9uIHRoYXQgcmVqZWN0cyB0aGUgcHJvbWlzZS5cbiAqIEBwYXJhbSB7b2JqZWN0fSByZXNwb25zZSBUaGUgcmVzcG9uc2UuXG4gKlxuICogQHJldHVybnMge29iamVjdH0gVGhlIHJlc3BvbnNlLlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCByZXNwb25zZSkge1xuICBjb25zdCB2YWxpZGF0ZVN0YXR1cyA9IHJlc3BvbnNlLmNvbmZpZy52YWxpZGF0ZVN0YXR1cztcbiAgaWYgKCFyZXNwb25zZS5zdGF0dXMgfHwgIXZhbGlkYXRlU3RhdHVzIHx8IHZhbGlkYXRlU3RhdHVzKHJlc3BvbnNlLnN0YXR1cykpIHtcbiAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgfSBlbHNlIHtcbiAgICByZWplY3QobmV3IEF4aW9zRXJyb3IoXG4gICAgICAnUmVxdWVzdCBmYWlsZWQgd2l0aCBzdGF0dXMgY29kZSAnICsgcmVzcG9uc2Uuc3RhdHVzLFxuICAgICAgW0F4aW9zRXJyb3IuRVJSX0JBRF9SRVFVRVNULCBBeGlvc0Vycm9yLkVSUl9CQURfUkVTUE9OU0VdW01hdGguZmxvb3IocmVzcG9uc2Uuc3RhdHVzIC8gMTAwKSAtIDRdLFxuICAgICAgcmVzcG9uc2UuY29uZmlnLFxuICAgICAgcmVzcG9uc2UucmVxdWVzdCxcbiAgICAgIHJlc3BvbnNlXG4gICAgKSk7XG4gIH1cbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHV0aWxzIGZyb20gJy4vLi4vdXRpbHMuanMnO1xuaW1wb3J0IGRlZmF1bHRzIGZyb20gJy4uL2RlZmF1bHRzL2luZGV4LmpzJztcbmltcG9ydCBBeGlvc0hlYWRlcnMgZnJvbSAnLi4vY29yZS9BeGlvc0hlYWRlcnMuanMnO1xuXG4vKipcbiAqIFRyYW5zZm9ybSB0aGUgZGF0YSBmb3IgYSByZXF1ZXN0IG9yIGEgcmVzcG9uc2VcbiAqXG4gKiBAcGFyYW0ge0FycmF5fEZ1bmN0aW9ufSBmbnMgQSBzaW5nbGUgZnVuY3Rpb24gb3IgQXJyYXkgb2YgZnVuY3Rpb25zXG4gKiBAcGFyYW0gez9PYmplY3R9IHJlc3BvbnNlIFRoZSByZXNwb25zZSBvYmplY3RcbiAqXG4gKiBAcmV0dXJucyB7Kn0gVGhlIHJlc3VsdGluZyB0cmFuc2Zvcm1lZCBkYXRhXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRyYW5zZm9ybURhdGEoZm5zLCByZXNwb25zZSkge1xuICBjb25zdCBjb25maWcgPSB0aGlzIHx8IGRlZmF1bHRzO1xuICBjb25zdCBjb250ZXh0ID0gcmVzcG9uc2UgfHwgY29uZmlnO1xuICBjb25zdCBoZWFkZXJzID0gQXhpb3NIZWFkZXJzLmZyb20oY29udGV4dC5oZWFkZXJzKTtcbiAgbGV0IGRhdGEgPSBjb250ZXh0LmRhdGE7XG5cbiAgdXRpbHMuZm9yRWFjaChmbnMsIGZ1bmN0aW9uIHRyYW5zZm9ybShmbikge1xuICAgIGRhdGEgPSBmbi5jYWxsKGNvbmZpZywgZGF0YSwgaGVhZGVycy5ub3JtYWxpemUoKSwgcmVzcG9uc2UgPyByZXNwb25zZS5zdGF0dXMgOiB1bmRlZmluZWQpO1xuICB9KTtcblxuICBoZWFkZXJzLm5vcm1hbGl6ZSgpO1xuXG4gIHJldHVybiBkYXRhO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgdXRpbHMgZnJvbSAnLi4vdXRpbHMuanMnO1xuaW1wb3J0IEF4aW9zRXJyb3IgZnJvbSAnLi4vY29yZS9BeGlvc0Vycm9yLmpzJztcbmltcG9ydCB0cmFuc2l0aW9uYWxEZWZhdWx0cyBmcm9tICcuL3RyYW5zaXRpb25hbC5qcyc7XG5pbXBvcnQgdG9Gb3JtRGF0YSBmcm9tICcuLi9oZWxwZXJzL3RvRm9ybURhdGEuanMnO1xuaW1wb3J0IHRvVVJMRW5jb2RlZEZvcm0gZnJvbSAnLi4vaGVscGVycy90b1VSTEVuY29kZWRGb3JtLmpzJztcbmltcG9ydCBwbGF0Zm9ybSBmcm9tICcuLi9wbGF0Zm9ybS9pbmRleC5qcyc7XG5pbXBvcnQgZm9ybURhdGFUb0pTT04gZnJvbSAnLi4vaGVscGVycy9mb3JtRGF0YVRvSlNPTi5qcyc7XG5cbmNvbnN0IERFRkFVTFRfQ09OVEVOVF9UWVBFID0ge1xuICAnQ29udGVudC1UeXBlJzogdW5kZWZpbmVkXG59O1xuXG4vKipcbiAqIEl0IHRha2VzIGEgc3RyaW5nLCB0cmllcyB0byBwYXJzZSBpdCwgYW5kIGlmIGl0IGZhaWxzLCBpdCByZXR1cm5zIHRoZSBzdHJpbmdpZmllZCB2ZXJzaW9uXG4gKiBvZiB0aGUgaW5wdXRcbiAqXG4gKiBAcGFyYW0ge2FueX0gcmF3VmFsdWUgLSBUaGUgdmFsdWUgdG8gYmUgc3RyaW5naWZpZWQuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBwYXJzZXIgLSBBIGZ1bmN0aW9uIHRoYXQgcGFyc2VzIGEgc3RyaW5nIGludG8gYSBKYXZhU2NyaXB0IG9iamVjdC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGVuY29kZXIgLSBBIGZ1bmN0aW9uIHRoYXQgdGFrZXMgYSB2YWx1ZSBhbmQgcmV0dXJucyBhIHN0cmluZy5cbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBBIHN0cmluZ2lmaWVkIHZlcnNpb24gb2YgdGhlIHJhd1ZhbHVlLlxuICovXG5mdW5jdGlvbiBzdHJpbmdpZnlTYWZlbHkocmF3VmFsdWUsIHBhcnNlciwgZW5jb2Rlcikge1xuICBpZiAodXRpbHMuaXNTdHJpbmcocmF3VmFsdWUpKSB7XG4gICAgdHJ5IHtcbiAgICAgIChwYXJzZXIgfHwgSlNPTi5wYXJzZSkocmF3VmFsdWUpO1xuICAgICAgcmV0dXJuIHV0aWxzLnRyaW0ocmF3VmFsdWUpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGlmIChlLm5hbWUgIT09ICdTeW50YXhFcnJvcicpIHtcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gKGVuY29kZXIgfHwgSlNPTi5zdHJpbmdpZnkpKHJhd1ZhbHVlKTtcbn1cblxuY29uc3QgZGVmYXVsdHMgPSB7XG5cbiAgdHJhbnNpdGlvbmFsOiB0cmFuc2l0aW9uYWxEZWZhdWx0cyxcblxuICBhZGFwdGVyOiBbJ3hocicsICdodHRwJ10sXG5cbiAgdHJhbnNmb3JtUmVxdWVzdDogW2Z1bmN0aW9uIHRyYW5zZm9ybVJlcXVlc3QoZGF0YSwgaGVhZGVycykge1xuICAgIGNvbnN0IGNvbnRlbnRUeXBlID0gaGVhZGVycy5nZXRDb250ZW50VHlwZSgpIHx8ICcnO1xuICAgIGNvbnN0IGhhc0pTT05Db250ZW50VHlwZSA9IGNvbnRlbnRUeXBlLmluZGV4T2YoJ2FwcGxpY2F0aW9uL2pzb24nKSA+IC0xO1xuICAgIGNvbnN0IGlzT2JqZWN0UGF5bG9hZCA9IHV0aWxzLmlzT2JqZWN0KGRhdGEpO1xuXG4gICAgaWYgKGlzT2JqZWN0UGF5bG9hZCAmJiB1dGlscy5pc0hUTUxGb3JtKGRhdGEpKSB7XG4gICAgICBkYXRhID0gbmV3IEZvcm1EYXRhKGRhdGEpO1xuICAgIH1cblxuICAgIGNvbnN0IGlzRm9ybURhdGEgPSB1dGlscy5pc0Zvcm1EYXRhKGRhdGEpO1xuXG4gICAgaWYgKGlzRm9ybURhdGEpIHtcbiAgICAgIGlmICghaGFzSlNPTkNvbnRlbnRUeXBlKSB7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGhhc0pTT05Db250ZW50VHlwZSA/IEpTT04uc3RyaW5naWZ5KGZvcm1EYXRhVG9KU09OKGRhdGEpKSA6IGRhdGE7XG4gICAgfVxuXG4gICAgaWYgKHV0aWxzLmlzQXJyYXlCdWZmZXIoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzQnVmZmVyKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc1N0cmVhbShkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNGaWxlKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0Jsb2IoZGF0YSlcbiAgICApIHtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cbiAgICBpZiAodXRpbHMuaXNBcnJheUJ1ZmZlclZpZXcoZGF0YSkpIHtcbiAgICAgIHJldHVybiBkYXRhLmJ1ZmZlcjtcbiAgICB9XG4gICAgaWYgKHV0aWxzLmlzVVJMU2VhcmNoUGFyYW1zKGRhdGEpKSB7XG4gICAgICBoZWFkZXJzLnNldENvbnRlbnRUeXBlKCdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7Y2hhcnNldD11dGYtOCcsIGZhbHNlKTtcbiAgICAgIHJldHVybiBkYXRhLnRvU3RyaW5nKCk7XG4gICAgfVxuXG4gICAgbGV0IGlzRmlsZUxpc3Q7XG5cbiAgICBpZiAoaXNPYmplY3RQYXlsb2FkKSB7XG4gICAgICBpZiAoY29udGVudFR5cGUuaW5kZXhPZignYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJykgPiAtMSkge1xuICAgICAgICByZXR1cm4gdG9VUkxFbmNvZGVkRm9ybShkYXRhLCB0aGlzLmZvcm1TZXJpYWxpemVyKS50b1N0cmluZygpO1xuICAgICAgfVxuXG4gICAgICBpZiAoKGlzRmlsZUxpc3QgPSB1dGlscy5pc0ZpbGVMaXN0KGRhdGEpKSB8fCBjb250ZW50VHlwZS5pbmRleE9mKCdtdWx0aXBhcnQvZm9ybS1kYXRhJykgPiAtMSkge1xuICAgICAgICBjb25zdCBfRm9ybURhdGEgPSB0aGlzLmVudiAmJiB0aGlzLmVudi5Gb3JtRGF0YTtcblxuICAgICAgICByZXR1cm4gdG9Gb3JtRGF0YShcbiAgICAgICAgICBpc0ZpbGVMaXN0ID8geydmaWxlc1tdJzogZGF0YX0gOiBkYXRhLFxuICAgICAgICAgIF9Gb3JtRGF0YSAmJiBuZXcgX0Zvcm1EYXRhKCksXG4gICAgICAgICAgdGhpcy5mb3JtU2VyaWFsaXplclxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChpc09iamVjdFBheWxvYWQgfHwgaGFzSlNPTkNvbnRlbnRUeXBlICkge1xuICAgICAgaGVhZGVycy5zZXRDb250ZW50VHlwZSgnYXBwbGljYXRpb24vanNvbicsIGZhbHNlKTtcbiAgICAgIHJldHVybiBzdHJpbmdpZnlTYWZlbHkoZGF0YSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRhdGE7XG4gIH1dLFxuXG4gIHRyYW5zZm9ybVJlc3BvbnNlOiBbZnVuY3Rpb24gdHJhbnNmb3JtUmVzcG9uc2UoZGF0YSkge1xuICAgIGNvbnN0IHRyYW5zaXRpb25hbCA9IHRoaXMudHJhbnNpdGlvbmFsIHx8IGRlZmF1bHRzLnRyYW5zaXRpb25hbDtcbiAgICBjb25zdCBmb3JjZWRKU09OUGFyc2luZyA9IHRyYW5zaXRpb25hbCAmJiB0cmFuc2l0aW9uYWwuZm9yY2VkSlNPTlBhcnNpbmc7XG4gICAgY29uc3QgSlNPTlJlcXVlc3RlZCA9IHRoaXMucmVzcG9uc2VUeXBlID09PSAnanNvbic7XG5cbiAgICBpZiAoZGF0YSAmJiB1dGlscy5pc1N0cmluZyhkYXRhKSAmJiAoKGZvcmNlZEpTT05QYXJzaW5nICYmICF0aGlzLnJlc3BvbnNlVHlwZSkgfHwgSlNPTlJlcXVlc3RlZCkpIHtcbiAgICAgIGNvbnN0IHNpbGVudEpTT05QYXJzaW5nID0gdHJhbnNpdGlvbmFsICYmIHRyYW5zaXRpb25hbC5zaWxlbnRKU09OUGFyc2luZztcbiAgICAgIGNvbnN0IHN0cmljdEpTT05QYXJzaW5nID0gIXNpbGVudEpTT05QYXJzaW5nICYmIEpTT05SZXF1ZXN0ZWQ7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKGRhdGEpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBpZiAoc3RyaWN0SlNPTlBhcnNpbmcpIHtcbiAgICAgICAgICBpZiAoZS5uYW1lID09PSAnU3ludGF4RXJyb3InKSB7XG4gICAgICAgICAgICB0aHJvdyBBeGlvc0Vycm9yLmZyb20oZSwgQXhpb3NFcnJvci5FUlJfQkFEX1JFU1BPTlNFLCB0aGlzLCBudWxsLCB0aGlzLnJlc3BvbnNlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBkYXRhO1xuICB9XSxcblxuICAvKipcbiAgICogQSB0aW1lb3V0IGluIG1pbGxpc2Vjb25kcyB0byBhYm9ydCBhIHJlcXVlc3QuIElmIHNldCB0byAwIChkZWZhdWx0KSBhXG4gICAqIHRpbWVvdXQgaXMgbm90IGNyZWF0ZWQuXG4gICAqL1xuICB0aW1lb3V0OiAwLFxuXG4gIHhzcmZDb29raWVOYW1lOiAnWFNSRi1UT0tFTicsXG4gIHhzcmZIZWFkZXJOYW1lOiAnWC1YU1JGLVRPS0VOJyxcblxuICBtYXhDb250ZW50TGVuZ3RoOiAtMSxcbiAgbWF4Qm9keUxlbmd0aDogLTEsXG5cbiAgZW52OiB7XG4gICAgRm9ybURhdGE6IHBsYXRmb3JtLmNsYXNzZXMuRm9ybURhdGEsXG4gICAgQmxvYjogcGxhdGZvcm0uY2xhc3Nlcy5CbG9iXG4gIH0sXG5cbiAgdmFsaWRhdGVTdGF0dXM6IGZ1bmN0aW9uIHZhbGlkYXRlU3RhdHVzKHN0YXR1cykge1xuICAgIHJldHVybiBzdGF0dXMgPj0gMjAwICYmIHN0YXR1cyA8IDMwMDtcbiAgfSxcblxuICBoZWFkZXJzOiB7XG4gICAgY29tbW9uOiB7XG4gICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24sIHRleHQvcGxhaW4sICovKidcbiAgICB9XG4gIH1cbn07XG5cbnV0aWxzLmZvckVhY2goWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZE5vRGF0YShtZXRob2QpIHtcbiAgZGVmYXVsdHMuaGVhZGVyc1ttZXRob2RdID0ge307XG59KTtcblxudXRpbHMuZm9yRWFjaChbJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2RXaXRoRGF0YShtZXRob2QpIHtcbiAgZGVmYXVsdHMuaGVhZGVyc1ttZXRob2RdID0gdXRpbHMubWVyZ2UoREVGQVVMVF9DT05URU5UX1RZUEUpO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmF1bHRzO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHNpbGVudEpTT05QYXJzaW5nOiB0cnVlLFxuICBmb3JjZWRKU09OUGFyc2luZzogdHJ1ZSxcbiAgY2xhcmlmeVRpbWVvdXRFcnJvcjogZmFsc2Vcbn07XG4iLCJleHBvcnQgY29uc3QgVkVSU0lPTiA9IFwiMS4zLjJcIjsiLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB0b0Zvcm1EYXRhIGZyb20gJy4vdG9Gb3JtRGF0YS5qcyc7XG5cbi8qKlxuICogSXQgZW5jb2RlcyBhIHN0cmluZyBieSByZXBsYWNpbmcgYWxsIGNoYXJhY3RlcnMgdGhhdCBhcmUgbm90IGluIHRoZSB1bnJlc2VydmVkIHNldCB3aXRoXG4gKiB0aGVpciBwZXJjZW50LWVuY29kZWQgZXF1aXZhbGVudHNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyIC0gVGhlIHN0cmluZyB0byBlbmNvZGUuXG4gKlxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGVuY29kZWQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBlbmNvZGUoc3RyKSB7XG4gIGNvbnN0IGNoYXJNYXAgPSB7XG4gICAgJyEnOiAnJTIxJyxcbiAgICBcIidcIjogJyUyNycsXG4gICAgJygnOiAnJTI4JyxcbiAgICAnKSc6ICclMjknLFxuICAgICd+JzogJyU3RScsXG4gICAgJyUyMCc6ICcrJyxcbiAgICAnJTAwJzogJ1xceDAwJ1xuICB9O1xuICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHN0cikucmVwbGFjZSgvWyEnKCl+XXwlMjB8JTAwL2csIGZ1bmN0aW9uIHJlcGxhY2VyKG1hdGNoKSB7XG4gICAgcmV0dXJuIGNoYXJNYXBbbWF0Y2hdO1xuICB9KTtcbn1cblxuLyoqXG4gKiBJdCB0YWtlcyBhIHBhcmFtcyBvYmplY3QgYW5kIGNvbnZlcnRzIGl0IHRvIGEgRm9ybURhdGEgb2JqZWN0XG4gKlxuICogQHBhcmFtIHtPYmplY3Q8c3RyaW5nLCBhbnk+fSBwYXJhbXMgLSBUaGUgcGFyYW1ldGVycyB0byBiZSBjb252ZXJ0ZWQgdG8gYSBGb3JtRGF0YSBvYmplY3QuXG4gKiBAcGFyYW0ge09iamVjdDxzdHJpbmcsIGFueT59IG9wdGlvbnMgLSBUaGUgb3B0aW9ucyBvYmplY3QgcGFzc2VkIHRvIHRoZSBBeGlvcyBjb25zdHJ1Y3Rvci5cbiAqXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZnVuY3Rpb24gQXhpb3NVUkxTZWFyY2hQYXJhbXMocGFyYW1zLCBvcHRpb25zKSB7XG4gIHRoaXMuX3BhaXJzID0gW107XG5cbiAgcGFyYW1zICYmIHRvRm9ybURhdGEocGFyYW1zLCB0aGlzLCBvcHRpb25zKTtcbn1cblxuY29uc3QgcHJvdG90eXBlID0gQXhpb3NVUkxTZWFyY2hQYXJhbXMucHJvdG90eXBlO1xuXG5wcm90b3R5cGUuYXBwZW5kID0gZnVuY3Rpb24gYXBwZW5kKG5hbWUsIHZhbHVlKSB7XG4gIHRoaXMuX3BhaXJzLnB1c2goW25hbWUsIHZhbHVlXSk7XG59O1xuXG5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZyhlbmNvZGVyKSB7XG4gIGNvbnN0IF9lbmNvZGUgPSBlbmNvZGVyID8gZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXR1cm4gZW5jb2Rlci5jYWxsKHRoaXMsIHZhbHVlLCBlbmNvZGUpO1xuICB9IDogZW5jb2RlO1xuXG4gIHJldHVybiB0aGlzLl9wYWlycy5tYXAoZnVuY3Rpb24gZWFjaChwYWlyKSB7XG4gICAgcmV0dXJuIF9lbmNvZGUocGFpclswXSkgKyAnPScgKyBfZW5jb2RlKHBhaXJbMV0pO1xuICB9LCAnJykuam9pbignJicpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXhpb3NVUkxTZWFyY2hQYXJhbXM7XG4iLCJjb25zdCBIdHRwU3RhdHVzQ29kZSA9IHtcbiAgQ29udGludWU6IDEwMCxcbiAgU3dpdGNoaW5nUHJvdG9jb2xzOiAxMDEsXG4gIFByb2Nlc3Npbmc6IDEwMixcbiAgRWFybHlIaW50czogMTAzLFxuICBPazogMjAwLFxuICBDcmVhdGVkOiAyMDEsXG4gIEFjY2VwdGVkOiAyMDIsXG4gIE5vbkF1dGhvcml0YXRpdmVJbmZvcm1hdGlvbjogMjAzLFxuICBOb0NvbnRlbnQ6IDIwNCxcbiAgUmVzZXRDb250ZW50OiAyMDUsXG4gIFBhcnRpYWxDb250ZW50OiAyMDYsXG4gIE11bHRpU3RhdHVzOiAyMDcsXG4gIEFscmVhZHlSZXBvcnRlZDogMjA4LFxuICBJbVVzZWQ6IDIyNixcbiAgTXVsdGlwbGVDaG9pY2VzOiAzMDAsXG4gIE1vdmVkUGVybWFuZW50bHk6IDMwMSxcbiAgRm91bmQ6IDMwMixcbiAgU2VlT3RoZXI6IDMwMyxcbiAgTm90TW9kaWZpZWQ6IDMwNCxcbiAgVXNlUHJveHk6IDMwNSxcbiAgVW51c2VkOiAzMDYsXG4gIFRlbXBvcmFyeVJlZGlyZWN0OiAzMDcsXG4gIFBlcm1hbmVudFJlZGlyZWN0OiAzMDgsXG4gIEJhZFJlcXVlc3Q6IDQwMCxcbiAgVW5hdXRob3JpemVkOiA0MDEsXG4gIFBheW1lbnRSZXF1aXJlZDogNDAyLFxuICBGb3JiaWRkZW46IDQwMyxcbiAgTm90Rm91bmQ6IDQwNCxcbiAgTWV0aG9kTm90QWxsb3dlZDogNDA1LFxuICBOb3RBY2NlcHRhYmxlOiA0MDYsXG4gIFByb3h5QXV0aGVudGljYXRpb25SZXF1aXJlZDogNDA3LFxuICBSZXF1ZXN0VGltZW91dDogNDA4LFxuICBDb25mbGljdDogNDA5LFxuICBHb25lOiA0MTAsXG4gIExlbmd0aFJlcXVpcmVkOiA0MTEsXG4gIFByZWNvbmRpdGlvbkZhaWxlZDogNDEyLFxuICBQYXlsb2FkVG9vTGFyZ2U6IDQxMyxcbiAgVXJpVG9vTG9uZzogNDE0LFxuICBVbnN1cHBvcnRlZE1lZGlhVHlwZTogNDE1LFxuICBSYW5nZU5vdFNhdGlzZmlhYmxlOiA0MTYsXG4gIEV4cGVjdGF0aW9uRmFpbGVkOiA0MTcsXG4gIEltQVRlYXBvdDogNDE4LFxuICBNaXNkaXJlY3RlZFJlcXVlc3Q6IDQyMSxcbiAgVW5wcm9jZXNzYWJsZUVudGl0eTogNDIyLFxuICBMb2NrZWQ6IDQyMyxcbiAgRmFpbGVkRGVwZW5kZW5jeTogNDI0LFxuICBUb29FYXJseTogNDI1LFxuICBVcGdyYWRlUmVxdWlyZWQ6IDQyNixcbiAgUHJlY29uZGl0aW9uUmVxdWlyZWQ6IDQyOCxcbiAgVG9vTWFueVJlcXVlc3RzOiA0MjksXG4gIFJlcXVlc3RIZWFkZXJGaWVsZHNUb29MYXJnZTogNDMxLFxuICBVbmF2YWlsYWJsZUZvckxlZ2FsUmVhc29uczogNDUxLFxuICBJbnRlcm5hbFNlcnZlckVycm9yOiA1MDAsXG4gIE5vdEltcGxlbWVudGVkOiA1MDEsXG4gIEJhZEdhdGV3YXk6IDUwMixcbiAgU2VydmljZVVuYXZhaWxhYmxlOiA1MDMsXG4gIEdhdGV3YXlUaW1lb3V0OiA1MDQsXG4gIEh0dHBWZXJzaW9uTm90U3VwcG9ydGVkOiA1MDUsXG4gIFZhcmlhbnRBbHNvTmVnb3RpYXRlczogNTA2LFxuICBJbnN1ZmZpY2llbnRTdG9yYWdlOiA1MDcsXG4gIExvb3BEZXRlY3RlZDogNTA4LFxuICBOb3RFeHRlbmRlZDogNTEwLFxuICBOZXR3b3JrQXV0aGVudGljYXRpb25SZXF1aXJlZDogNTExLFxufTtcblxuT2JqZWN0LmVudHJpZXMoSHR0cFN0YXR1c0NvZGUpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICBIdHRwU3RhdHVzQ29kZVt2YWx1ZV0gPSBrZXk7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgSHR0cFN0YXR1c0NvZGU7XG4iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJpbmQoZm4sIHRoaXNBcmcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHdyYXAoKSB7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoaXNBcmcsIGFyZ3VtZW50cyk7XG4gIH07XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscy5qcyc7XG5pbXBvcnQgQXhpb3NVUkxTZWFyY2hQYXJhbXMgZnJvbSAnLi4vaGVscGVycy9BeGlvc1VSTFNlYXJjaFBhcmFtcy5qcyc7XG5cbi8qKlxuICogSXQgcmVwbGFjZXMgYWxsIGluc3RhbmNlcyBvZiB0aGUgY2hhcmFjdGVycyBgOmAsIGAkYCwgYCxgLCBgK2AsIGBbYCwgYW5kIGBdYCB3aXRoIHRoZWlyXG4gKiBVUkkgZW5jb2RlZCBjb3VudGVycGFydHNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsIFRoZSB2YWx1ZSB0byBiZSBlbmNvZGVkLlxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBlbmNvZGVkIHZhbHVlLlxuICovXG5mdW5jdGlvbiBlbmNvZGUodmFsKSB7XG4gIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQodmFsKS5cbiAgICByZXBsYWNlKC8lM0EvZ2ksICc6JykuXG4gICAgcmVwbGFjZSgvJTI0L2csICckJykuXG4gICAgcmVwbGFjZSgvJTJDL2dpLCAnLCcpLlxuICAgIHJlcGxhY2UoLyUyMC9nLCAnKycpLlxuICAgIHJlcGxhY2UoLyU1Qi9naSwgJ1snKS5cbiAgICByZXBsYWNlKC8lNUQvZ2ksICddJyk7XG59XG5cbi8qKlxuICogQnVpbGQgYSBVUkwgYnkgYXBwZW5kaW5nIHBhcmFtcyB0byB0aGUgZW5kXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybCBUaGUgYmFzZSBvZiB0aGUgdXJsIChlLmcuLCBodHRwOi8vd3d3Lmdvb2dsZS5jb20pXG4gKiBAcGFyYW0ge29iamVjdH0gW3BhcmFtc10gVGhlIHBhcmFtcyB0byBiZSBhcHBlbmRlZFxuICogQHBhcmFtIHs/b2JqZWN0fSBvcHRpb25zXG4gKlxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGZvcm1hdHRlZCB1cmxcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRVUkwodXJsLCBwYXJhbXMsIG9wdGlvbnMpIHtcbiAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gIGlmICghcGFyYW1zKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICBcbiAgY29uc3QgX2VuY29kZSA9IG9wdGlvbnMgJiYgb3B0aW9ucy5lbmNvZGUgfHwgZW5jb2RlO1xuXG4gIGNvbnN0IHNlcmlhbGl6ZUZuID0gb3B0aW9ucyAmJiBvcHRpb25zLnNlcmlhbGl6ZTtcblxuICBsZXQgc2VyaWFsaXplZFBhcmFtcztcblxuICBpZiAoc2VyaWFsaXplRm4pIHtcbiAgICBzZXJpYWxpemVkUGFyYW1zID0gc2VyaWFsaXplRm4ocGFyYW1zLCBvcHRpb25zKTtcbiAgfSBlbHNlIHtcbiAgICBzZXJpYWxpemVkUGFyYW1zID0gdXRpbHMuaXNVUkxTZWFyY2hQYXJhbXMocGFyYW1zKSA/XG4gICAgICBwYXJhbXMudG9TdHJpbmcoKSA6XG4gICAgICBuZXcgQXhpb3NVUkxTZWFyY2hQYXJhbXMocGFyYW1zLCBvcHRpb25zKS50b1N0cmluZyhfZW5jb2RlKTtcbiAgfVxuXG4gIGlmIChzZXJpYWxpemVkUGFyYW1zKSB7XG4gICAgY29uc3QgaGFzaG1hcmtJbmRleCA9IHVybC5pbmRleE9mKFwiI1wiKTtcblxuICAgIGlmIChoYXNobWFya0luZGV4ICE9PSAtMSkge1xuICAgICAgdXJsID0gdXJsLnNsaWNlKDAsIGhhc2htYXJrSW5kZXgpO1xuICAgIH1cbiAgICB1cmwgKz0gKHVybC5pbmRleE9mKCc/JykgPT09IC0xID8gJz8nIDogJyYnKSArIHNlcmlhbGl6ZWRQYXJhbXM7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgVVJMIGJ5IGNvbWJpbmluZyB0aGUgc3BlY2lmaWVkIFVSTHNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gYmFzZVVSTCBUaGUgYmFzZSBVUkxcbiAqIEBwYXJhbSB7c3RyaW5nfSByZWxhdGl2ZVVSTCBUaGUgcmVsYXRpdmUgVVJMXG4gKlxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGNvbWJpbmVkIFVSTFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb21iaW5lVVJMcyhiYXNlVVJMLCByZWxhdGl2ZVVSTCkge1xuICByZXR1cm4gcmVsYXRpdmVVUkxcbiAgICA/IGJhc2VVUkwucmVwbGFjZSgvXFwvKyQvLCAnJykgKyAnLycgKyByZWxhdGl2ZVVSTC5yZXBsYWNlKC9eXFwvKy8sICcnKVxuICAgIDogYmFzZVVSTDtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHV0aWxzIGZyb20gJy4vLi4vdXRpbHMuanMnO1xuaW1wb3J0IHBsYXRmb3JtIGZyb20gJy4uL3BsYXRmb3JtL2luZGV4LmpzJztcblxuZXhwb3J0IGRlZmF1bHQgcGxhdGZvcm0uaXNTdGFuZGFyZEJyb3dzZXJFbnYgP1xuXG4vLyBTdGFuZGFyZCBicm93c2VyIGVudnMgc3VwcG9ydCBkb2N1bWVudC5jb29raWVcbiAgKGZ1bmN0aW9uIHN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgd3JpdGU6IGZ1bmN0aW9uIHdyaXRlKG5hbWUsIHZhbHVlLCBleHBpcmVzLCBwYXRoLCBkb21haW4sIHNlY3VyZSkge1xuICAgICAgICBjb25zdCBjb29raWUgPSBbXTtcbiAgICAgICAgY29va2llLnB1c2gobmFtZSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpO1xuXG4gICAgICAgIGlmICh1dGlscy5pc051bWJlcihleHBpcmVzKSkge1xuICAgICAgICAgIGNvb2tpZS5wdXNoKCdleHBpcmVzPScgKyBuZXcgRGF0ZShleHBpcmVzKS50b0dNVFN0cmluZygpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhwYXRoKSkge1xuICAgICAgICAgIGNvb2tpZS5wdXNoKCdwYXRoPScgKyBwYXRoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhkb21haW4pKSB7XG4gICAgICAgICAgY29va2llLnB1c2goJ2RvbWFpbj0nICsgZG9tYWluKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzZWN1cmUgPT09IHRydWUpIHtcbiAgICAgICAgICBjb29raWUucHVzaCgnc2VjdXJlJyk7XG4gICAgICAgIH1cblxuICAgICAgICBkb2N1bWVudC5jb29raWUgPSBjb29raWUuam9pbignOyAnKTtcbiAgICAgIH0sXG5cbiAgICAgIHJlYWQ6IGZ1bmN0aW9uIHJlYWQobmFtZSkge1xuICAgICAgICBjb25zdCBtYXRjaCA9IGRvY3VtZW50LmNvb2tpZS5tYXRjaChuZXcgUmVnRXhwKCcoXnw7XFxcXHMqKSgnICsgbmFtZSArICcpPShbXjtdKiknKSk7XG4gICAgICAgIHJldHVybiAobWF0Y2ggPyBkZWNvZGVVUklDb21wb25lbnQobWF0Y2hbM10pIDogbnVsbCk7XG4gICAgICB9LFxuXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZShuYW1lKSB7XG4gICAgICAgIHRoaXMud3JpdGUobmFtZSwgJycsIERhdGUubm93KCkgLSA4NjQwMDAwMCk7XG4gICAgICB9XG4gICAgfTtcbiAgfSkoKSA6XG5cbi8vIE5vbiBzdGFuZGFyZCBicm93c2VyIGVudiAod2ViIHdvcmtlcnMsIHJlYWN0LW5hdGl2ZSkgbGFjayBuZWVkZWQgc3VwcG9ydC5cbiAgKGZ1bmN0aW9uIG5vblN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgd3JpdGU6IGZ1bmN0aW9uIHdyaXRlKCkge30sXG4gICAgICByZWFkOiBmdW5jdGlvbiByZWFkKCkgeyByZXR1cm4gbnVsbDsgfSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9KSgpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgdXRpbHMgZnJvbSAnLi4vdXRpbHMuanMnO1xuXG4vKipcbiAqIEl0IHRha2VzIGEgc3RyaW5nIGxpa2UgYGZvb1t4XVt5XVt6XWAgYW5kIHJldHVybnMgYW4gYXJyYXkgbGlrZSBgWydmb28nLCAneCcsICd5JywgJ3onXVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gVGhlIG5hbWUgb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqXG4gKiBAcmV0dXJucyBBbiBhcnJheSBvZiBzdHJpbmdzLlxuICovXG5mdW5jdGlvbiBwYXJzZVByb3BQYXRoKG5hbWUpIHtcbiAgLy8gZm9vW3hdW3ldW3pdXG4gIC8vIGZvby54LnkuelxuICAvLyBmb28teC15LXpcbiAgLy8gZm9vIHggeSB6XG4gIHJldHVybiB1dGlscy5tYXRjaEFsbCgvXFx3K3xcXFsoXFx3KildL2csIG5hbWUpLm1hcChtYXRjaCA9PiB7XG4gICAgcmV0dXJuIG1hdGNoWzBdID09PSAnW10nID8gJycgOiBtYXRjaFsxXSB8fCBtYXRjaFswXTtcbiAgfSk7XG59XG5cbi8qKlxuICogQ29udmVydCBhbiBhcnJheSB0byBhbiBvYmplY3QuXG4gKlxuICogQHBhcmFtIHtBcnJheTxhbnk+fSBhcnIgLSBUaGUgYXJyYXkgdG8gY29udmVydCB0byBhbiBvYmplY3QuXG4gKlxuICogQHJldHVybnMgQW4gb2JqZWN0IHdpdGggdGhlIHNhbWUga2V5cyBhbmQgdmFsdWVzIGFzIHRoZSBhcnJheS5cbiAqL1xuZnVuY3Rpb24gYXJyYXlUb09iamVjdChhcnIpIHtcbiAgY29uc3Qgb2JqID0ge307XG4gIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhhcnIpO1xuICBsZXQgaTtcbiAgY29uc3QgbGVuID0ga2V5cy5sZW5ndGg7XG4gIGxldCBrZXk7XG4gIGZvciAoaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgIGtleSA9IGtleXNbaV07XG4gICAgb2JqW2tleV0gPSBhcnJba2V5XTtcbiAgfVxuICByZXR1cm4gb2JqO1xufVxuXG4vKipcbiAqIEl0IHRha2VzIGEgRm9ybURhdGEgb2JqZWN0IGFuZCByZXR1cm5zIGEgSmF2YVNjcmlwdCBvYmplY3RcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gZm9ybURhdGEgVGhlIEZvcm1EYXRhIG9iamVjdCB0byBjb252ZXJ0IHRvIEpTT04uXG4gKlxuICogQHJldHVybnMge09iamVjdDxzdHJpbmcsIGFueT4gfCBudWxsfSBUaGUgY29udmVydGVkIG9iamVjdC5cbiAqL1xuZnVuY3Rpb24gZm9ybURhdGFUb0pTT04oZm9ybURhdGEpIHtcbiAgZnVuY3Rpb24gYnVpbGRQYXRoKHBhdGgsIHZhbHVlLCB0YXJnZXQsIGluZGV4KSB7XG4gICAgbGV0IG5hbWUgPSBwYXRoW2luZGV4KytdO1xuICAgIGNvbnN0IGlzTnVtZXJpY0tleSA9IE51bWJlci5pc0Zpbml0ZSgrbmFtZSk7XG4gICAgY29uc3QgaXNMYXN0ID0gaW5kZXggPj0gcGF0aC5sZW5ndGg7XG4gICAgbmFtZSA9ICFuYW1lICYmIHV0aWxzLmlzQXJyYXkodGFyZ2V0KSA/IHRhcmdldC5sZW5ndGggOiBuYW1lO1xuXG4gICAgaWYgKGlzTGFzdCkge1xuICAgICAgaWYgKHV0aWxzLmhhc093blByb3AodGFyZ2V0LCBuYW1lKSkge1xuICAgICAgICB0YXJnZXRbbmFtZV0gPSBbdGFyZ2V0W25hbWVdLCB2YWx1ZV07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0YXJnZXRbbmFtZV0gPSB2YWx1ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuICFpc051bWVyaWNLZXk7XG4gICAgfVxuXG4gICAgaWYgKCF0YXJnZXRbbmFtZV0gfHwgIXV0aWxzLmlzT2JqZWN0KHRhcmdldFtuYW1lXSkpIHtcbiAgICAgIHRhcmdldFtuYW1lXSA9IFtdO1xuICAgIH1cblxuICAgIGNvbnN0IHJlc3VsdCA9IGJ1aWxkUGF0aChwYXRoLCB2YWx1ZSwgdGFyZ2V0W25hbWVdLCBpbmRleCk7XG5cbiAgICBpZiAocmVzdWx0ICYmIHV0aWxzLmlzQXJyYXkodGFyZ2V0W25hbWVdKSkge1xuICAgICAgdGFyZ2V0W25hbWVdID0gYXJyYXlUb09iamVjdCh0YXJnZXRbbmFtZV0pO1xuICAgIH1cblxuICAgIHJldHVybiAhaXNOdW1lcmljS2V5O1xuICB9XG5cbiAgaWYgKHV0aWxzLmlzRm9ybURhdGEoZm9ybURhdGEpICYmIHV0aWxzLmlzRnVuY3Rpb24oZm9ybURhdGEuZW50cmllcykpIHtcbiAgICBjb25zdCBvYmogPSB7fTtcblxuICAgIHV0aWxzLmZvckVhY2hFbnRyeShmb3JtRGF0YSwgKG5hbWUsIHZhbHVlKSA9PiB7XG4gICAgICBidWlsZFBhdGgocGFyc2VQcm9wUGF0aChuYW1lKSwgdmFsdWUsIG9iaiwgMCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZvcm1EYXRhVG9KU09OO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciB0aGUgc3BlY2lmaWVkIFVSTCBpcyBhYnNvbHV0ZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIFVSTCB0byB0ZXN0XG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIHNwZWNpZmllZCBVUkwgaXMgYWJzb2x1dGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0Fic29sdXRlVVJMKHVybCkge1xuICAvLyBBIFVSTCBpcyBjb25zaWRlcmVkIGFic29sdXRlIGlmIGl0IGJlZ2lucyB3aXRoIFwiPHNjaGVtZT46Ly9cIiBvciBcIi8vXCIgKHByb3RvY29sLXJlbGF0aXZlIFVSTCkuXG4gIC8vIFJGQyAzOTg2IGRlZmluZXMgc2NoZW1lIG5hbWUgYXMgYSBzZXF1ZW5jZSBvZiBjaGFyYWN0ZXJzIGJlZ2lubmluZyB3aXRoIGEgbGV0dGVyIGFuZCBmb2xsb3dlZFxuICAvLyBieSBhbnkgY29tYmluYXRpb24gb2YgbGV0dGVycywgZGlnaXRzLCBwbHVzLCBwZXJpb2QsIG9yIGh5cGhlbi5cbiAgcmV0dXJuIC9eKFthLXpdW2EtelxcZCtcXC0uXSo6KT9cXC9cXC8vaS50ZXN0KHVybCk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB1dGlscyBmcm9tICcuLy4uL3V0aWxzLmpzJztcblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHBheWxvYWQgaXMgYW4gZXJyb3IgdGhyb3duIGJ5IEF4aW9zXG4gKlxuICogQHBhcmFtIHsqfSBwYXlsb2FkIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIHBheWxvYWQgaXMgYW4gZXJyb3IgdGhyb3duIGJ5IEF4aW9zLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNBeGlvc0Vycm9yKHBheWxvYWQpIHtcbiAgcmV0dXJuIHV0aWxzLmlzT2JqZWN0KHBheWxvYWQpICYmIChwYXlsb2FkLmlzQXhpb3NFcnJvciA9PT0gdHJ1ZSk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB1dGlscyBmcm9tICcuLy4uL3V0aWxzLmpzJztcbmltcG9ydCBwbGF0Zm9ybSBmcm9tICcuLi9wbGF0Zm9ybS9pbmRleC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHBsYXRmb3JtLmlzU3RhbmRhcmRCcm93c2VyRW52ID9cblxuLy8gU3RhbmRhcmQgYnJvd3NlciBlbnZzIGhhdmUgZnVsbCBzdXBwb3J0IG9mIHRoZSBBUElzIG5lZWRlZCB0byB0ZXN0XG4vLyB3aGV0aGVyIHRoZSByZXF1ZXN0IFVSTCBpcyBvZiB0aGUgc2FtZSBvcmlnaW4gYXMgY3VycmVudCBsb2NhdGlvbi5cbiAgKGZ1bmN0aW9uIHN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICBjb25zdCBtc2llID0gLyhtc2llfHRyaWRlbnQpL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcbiAgICBjb25zdCB1cmxQYXJzaW5nTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBsZXQgb3JpZ2luVVJMO1xuXG4gICAgLyoqXG4gICAgKiBQYXJzZSBhIFVSTCB0byBkaXNjb3ZlciBpdCdzIGNvbXBvbmVudHNcbiAgICAqXG4gICAgKiBAcGFyYW0ge1N0cmluZ30gdXJsIFRoZSBVUkwgdG8gYmUgcGFyc2VkXG4gICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICovXG4gICAgZnVuY3Rpb24gcmVzb2x2ZVVSTCh1cmwpIHtcbiAgICAgIGxldCBocmVmID0gdXJsO1xuXG4gICAgICBpZiAobXNpZSkge1xuICAgICAgICAvLyBJRSBuZWVkcyBhdHRyaWJ1dGUgc2V0IHR3aWNlIHRvIG5vcm1hbGl6ZSBwcm9wZXJ0aWVzXG4gICAgICAgIHVybFBhcnNpbmdOb2RlLnNldEF0dHJpYnV0ZSgnaHJlZicsIGhyZWYpO1xuICAgICAgICBocmVmID0gdXJsUGFyc2luZ05vZGUuaHJlZjtcbiAgICAgIH1cblxuICAgICAgdXJsUGFyc2luZ05vZGUuc2V0QXR0cmlidXRlKCdocmVmJywgaHJlZik7XG5cbiAgICAgIC8vIHVybFBhcnNpbmdOb2RlIHByb3ZpZGVzIHRoZSBVcmxVdGlscyBpbnRlcmZhY2UgLSBodHRwOi8vdXJsLnNwZWMud2hhdHdnLm9yZy8jdXJsdXRpbHNcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGhyZWY6IHVybFBhcnNpbmdOb2RlLmhyZWYsXG4gICAgICAgIHByb3RvY29sOiB1cmxQYXJzaW5nTm9kZS5wcm90b2NvbCA/IHVybFBhcnNpbmdOb2RlLnByb3RvY29sLnJlcGxhY2UoLzokLywgJycpIDogJycsXG4gICAgICAgIGhvc3Q6IHVybFBhcnNpbmdOb2RlLmhvc3QsXG4gICAgICAgIHNlYXJjaDogdXJsUGFyc2luZ05vZGUuc2VhcmNoID8gdXJsUGFyc2luZ05vZGUuc2VhcmNoLnJlcGxhY2UoL15cXD8vLCAnJykgOiAnJyxcbiAgICAgICAgaGFzaDogdXJsUGFyc2luZ05vZGUuaGFzaCA/IHVybFBhcnNpbmdOb2RlLmhhc2gucmVwbGFjZSgvXiMvLCAnJykgOiAnJyxcbiAgICAgICAgaG9zdG5hbWU6IHVybFBhcnNpbmdOb2RlLmhvc3RuYW1lLFxuICAgICAgICBwb3J0OiB1cmxQYXJzaW5nTm9kZS5wb3J0LFxuICAgICAgICBwYXRobmFtZTogKHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lLmNoYXJBdCgwKSA9PT0gJy8nKSA/XG4gICAgICAgICAgdXJsUGFyc2luZ05vZGUucGF0aG5hbWUgOlxuICAgICAgICAgICcvJyArIHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lXG4gICAgICB9O1xuICAgIH1cblxuICAgIG9yaWdpblVSTCA9IHJlc29sdmVVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpO1xuXG4gICAgLyoqXG4gICAgKiBEZXRlcm1pbmUgaWYgYSBVUkwgc2hhcmVzIHRoZSBzYW1lIG9yaWdpbiBhcyB0aGUgY3VycmVudCBsb2NhdGlvblxuICAgICpcbiAgICAqIEBwYXJhbSB7U3RyaW5nfSByZXF1ZXN0VVJMIFRoZSBVUkwgdG8gdGVzdFxuICAgICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgVVJMIHNoYXJlcyB0aGUgc2FtZSBvcmlnaW4sIG90aGVyd2lzZSBmYWxzZVxuICAgICovXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGlzVVJMU2FtZU9yaWdpbihyZXF1ZXN0VVJMKSB7XG4gICAgICBjb25zdCBwYXJzZWQgPSAodXRpbHMuaXNTdHJpbmcocmVxdWVzdFVSTCkpID8gcmVzb2x2ZVVSTChyZXF1ZXN0VVJMKSA6IHJlcXVlc3RVUkw7XG4gICAgICByZXR1cm4gKHBhcnNlZC5wcm90b2NvbCA9PT0gb3JpZ2luVVJMLnByb3RvY29sICYmXG4gICAgICAgICAgcGFyc2VkLmhvc3QgPT09IG9yaWdpblVSTC5ob3N0KTtcbiAgICB9O1xuICB9KSgpIDpcblxuICAvLyBOb24gc3RhbmRhcmQgYnJvd3NlciBlbnZzICh3ZWIgd29ya2VycywgcmVhY3QtbmF0aXZlKSBsYWNrIG5lZWRlZCBzdXBwb3J0LlxuICAoZnVuY3Rpb24gbm9uU3RhbmRhcmRCcm93c2VyRW52KCkge1xuICAgIHJldHVybiBmdW5jdGlvbiBpc1VSTFNhbWVPcmlnaW4oKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xuICB9KSgpO1xuIiwiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHN0cmljdFxuZXhwb3J0IGRlZmF1bHQgbnVsbDtcbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHV0aWxzIGZyb20gJy4vLi4vdXRpbHMuanMnO1xuXG4vLyBSYXdBeGlvc0hlYWRlcnMgd2hvc2UgZHVwbGljYXRlcyBhcmUgaWdub3JlZCBieSBub2RlXG4vLyBjLmYuIGh0dHBzOi8vbm9kZWpzLm9yZy9hcGkvaHR0cC5odG1sI2h0dHBfbWVzc2FnZV9oZWFkZXJzXG5jb25zdCBpZ25vcmVEdXBsaWNhdGVPZiA9IHV0aWxzLnRvT2JqZWN0U2V0KFtcbiAgJ2FnZScsICdhdXRob3JpemF0aW9uJywgJ2NvbnRlbnQtbGVuZ3RoJywgJ2NvbnRlbnQtdHlwZScsICdldGFnJyxcbiAgJ2V4cGlyZXMnLCAnZnJvbScsICdob3N0JywgJ2lmLW1vZGlmaWVkLXNpbmNlJywgJ2lmLXVubW9kaWZpZWQtc2luY2UnLFxuICAnbGFzdC1tb2RpZmllZCcsICdsb2NhdGlvbicsICdtYXgtZm9yd2FyZHMnLCAncHJveHktYXV0aG9yaXphdGlvbicsXG4gICdyZWZlcmVyJywgJ3JldHJ5LWFmdGVyJywgJ3VzZXItYWdlbnQnXG5dKTtcblxuLyoqXG4gKiBQYXJzZSBoZWFkZXJzIGludG8gYW4gb2JqZWN0XG4gKlxuICogYGBgXG4gKiBEYXRlOiBXZWQsIDI3IEF1ZyAyMDE0IDA4OjU4OjQ5IEdNVFxuICogQ29udGVudC1UeXBlOiBhcHBsaWNhdGlvbi9qc29uXG4gKiBDb25uZWN0aW9uOiBrZWVwLWFsaXZlXG4gKiBUcmFuc2Zlci1FbmNvZGluZzogY2h1bmtlZFxuICogYGBgXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHJhd0hlYWRlcnMgSGVhZGVycyBuZWVkaW5nIHRvIGJlIHBhcnNlZFxuICpcbiAqIEByZXR1cm5zIHtPYmplY3R9IEhlYWRlcnMgcGFyc2VkIGludG8gYW4gb2JqZWN0XG4gKi9cbmV4cG9ydCBkZWZhdWx0IHJhd0hlYWRlcnMgPT4ge1xuICBjb25zdCBwYXJzZWQgPSB7fTtcbiAgbGV0IGtleTtcbiAgbGV0IHZhbDtcbiAgbGV0IGk7XG5cbiAgcmF3SGVhZGVycyAmJiByYXdIZWFkZXJzLnNwbGl0KCdcXG4nKS5mb3JFYWNoKGZ1bmN0aW9uIHBhcnNlcihsaW5lKSB7XG4gICAgaSA9IGxpbmUuaW5kZXhPZignOicpO1xuICAgIGtleSA9IGxpbmUuc3Vic3RyaW5nKDAsIGkpLnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xuICAgIHZhbCA9IGxpbmUuc3Vic3RyaW5nKGkgKyAxKS50cmltKCk7XG5cbiAgICBpZiAoIWtleSB8fCAocGFyc2VkW2tleV0gJiYgaWdub3JlRHVwbGljYXRlT2Zba2V5XSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoa2V5ID09PSAnc2V0LWNvb2tpZScpIHtcbiAgICAgIGlmIChwYXJzZWRba2V5XSkge1xuICAgICAgICBwYXJzZWRba2V5XS5wdXNoKHZhbCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJzZWRba2V5XSA9IFt2YWxdO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBwYXJzZWRba2V5XSA9IHBhcnNlZFtrZXldID8gcGFyc2VkW2tleV0gKyAnLCAnICsgdmFsIDogdmFsO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHBhcnNlZDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBhcnNlUHJvdG9jb2wodXJsKSB7XG4gIGNvbnN0IG1hdGNoID0gL14oWy0rXFx3XXsxLDI1fSkoOj9cXC9cXC98OikvLmV4ZWModXJsKTtcbiAgcmV0dXJuIG1hdGNoICYmIG1hdGNoWzFdIHx8ICcnO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIENhbGN1bGF0ZSBkYXRhIG1heFJhdGVcbiAqIEBwYXJhbSB7TnVtYmVyfSBbc2FtcGxlc0NvdW50PSAxMF1cbiAqIEBwYXJhbSB7TnVtYmVyfSBbbWluPSAxMDAwXVxuICogQHJldHVybnMge0Z1bmN0aW9ufVxuICovXG5mdW5jdGlvbiBzcGVlZG9tZXRlcihzYW1wbGVzQ291bnQsIG1pbikge1xuICBzYW1wbGVzQ291bnQgPSBzYW1wbGVzQ291bnQgfHwgMTA7XG4gIGNvbnN0IGJ5dGVzID0gbmV3IEFycmF5KHNhbXBsZXNDb3VudCk7XG4gIGNvbnN0IHRpbWVzdGFtcHMgPSBuZXcgQXJyYXkoc2FtcGxlc0NvdW50KTtcbiAgbGV0IGhlYWQgPSAwO1xuICBsZXQgdGFpbCA9IDA7XG4gIGxldCBmaXJzdFNhbXBsZVRTO1xuXG4gIG1pbiA9IG1pbiAhPT0gdW5kZWZpbmVkID8gbWluIDogMTAwMDtcblxuICByZXR1cm4gZnVuY3Rpb24gcHVzaChjaHVua0xlbmd0aCkge1xuICAgIGNvbnN0IG5vdyA9IERhdGUubm93KCk7XG5cbiAgICBjb25zdCBzdGFydGVkQXQgPSB0aW1lc3RhbXBzW3RhaWxdO1xuXG4gICAgaWYgKCFmaXJzdFNhbXBsZVRTKSB7XG4gICAgICBmaXJzdFNhbXBsZVRTID0gbm93O1xuICAgIH1cblxuICAgIGJ5dGVzW2hlYWRdID0gY2h1bmtMZW5ndGg7XG4gICAgdGltZXN0YW1wc1toZWFkXSA9IG5vdztcblxuICAgIGxldCBpID0gdGFpbDtcbiAgICBsZXQgYnl0ZXNDb3VudCA9IDA7XG5cbiAgICB3aGlsZSAoaSAhPT0gaGVhZCkge1xuICAgICAgYnl0ZXNDb3VudCArPSBieXRlc1tpKytdO1xuICAgICAgaSA9IGkgJSBzYW1wbGVzQ291bnQ7XG4gICAgfVxuXG4gICAgaGVhZCA9IChoZWFkICsgMSkgJSBzYW1wbGVzQ291bnQ7XG5cbiAgICBpZiAoaGVhZCA9PT0gdGFpbCkge1xuICAgICAgdGFpbCA9ICh0YWlsICsgMSkgJSBzYW1wbGVzQ291bnQ7XG4gICAgfVxuXG4gICAgaWYgKG5vdyAtIGZpcnN0U2FtcGxlVFMgPCBtaW4pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBwYXNzZWQgPSBzdGFydGVkQXQgJiYgbm93IC0gc3RhcnRlZEF0O1xuXG4gICAgcmV0dXJuIHBhc3NlZCA/IE1hdGgucm91bmQoYnl0ZXNDb3VudCAqIDEwMDAgLyBwYXNzZWQpIDogdW5kZWZpbmVkO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBzcGVlZG9tZXRlcjtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBTeW50YWN0aWMgc3VnYXIgZm9yIGludm9raW5nIGEgZnVuY3Rpb24gYW5kIGV4cGFuZGluZyBhbiBhcnJheSBmb3IgYXJndW1lbnRzLlxuICpcbiAqIENvbW1vbiB1c2UgY2FzZSB3b3VsZCBiZSB0byB1c2UgYEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseWAuXG4gKlxuICogIGBgYGpzXG4gKiAgZnVuY3Rpb24gZih4LCB5LCB6KSB7fVxuICogIHZhciBhcmdzID0gWzEsIDIsIDNdO1xuICogIGYuYXBwbHkobnVsbCwgYXJncyk7XG4gKiAgYGBgXG4gKlxuICogV2l0aCBgc3ByZWFkYCB0aGlzIGV4YW1wbGUgY2FuIGJlIHJlLXdyaXR0ZW4uXG4gKlxuICogIGBgYGpzXG4gKiAgc3ByZWFkKGZ1bmN0aW9uKHgsIHksIHopIHt9KShbMSwgMiwgM10pO1xuICogIGBgYFxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKlxuICogQHJldHVybnMge0Z1bmN0aW9ufVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzcHJlYWQoY2FsbGJhY2spIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHdyYXAoYXJyKSB7XG4gICAgcmV0dXJuIGNhbGxiYWNrLmFwcGx5KG51bGwsIGFycik7XG4gIH07XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscy5qcyc7XG5pbXBvcnQgQXhpb3NFcnJvciBmcm9tICcuLi9jb3JlL0F4aW9zRXJyb3IuanMnO1xuLy8gdGVtcG9yYXJ5IGhvdGZpeCB0byBhdm9pZCBjaXJjdWxhciByZWZlcmVuY2VzIHVudGlsIEF4aW9zVVJMU2VhcmNoUGFyYW1zIGlzIHJlZmFjdG9yZWRcbmltcG9ydCBQbGF0Zm9ybUZvcm1EYXRhIGZyb20gJy4uL3BsYXRmb3JtL25vZGUvY2xhc3Nlcy9Gb3JtRGF0YS5qcyc7XG5cbi8qKlxuICogRGV0ZXJtaW5lcyBpZiB0aGUgZ2l2ZW4gdGhpbmcgaXMgYSBhcnJheSBvciBqcyBvYmplY3QuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHRoaW5nIC0gVGhlIG9iamVjdCBvciBhcnJheSB0byBiZSB2aXNpdGVkLlxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBpc1Zpc2l0YWJsZSh0aGluZykge1xuICByZXR1cm4gdXRpbHMuaXNQbGFpbk9iamVjdCh0aGluZykgfHwgdXRpbHMuaXNBcnJheSh0aGluZyk7XG59XG5cbi8qKlxuICogSXQgcmVtb3ZlcyB0aGUgYnJhY2tldHMgZnJvbSB0aGUgZW5kIG9mIGEgc3RyaW5nXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSAtIFRoZSBrZXkgb2YgdGhlIHBhcmFtZXRlci5cbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfSB0aGUga2V5IHdpdGhvdXQgdGhlIGJyYWNrZXRzLlxuICovXG5mdW5jdGlvbiByZW1vdmVCcmFja2V0cyhrZXkpIHtcbiAgcmV0dXJuIHV0aWxzLmVuZHNXaXRoKGtleSwgJ1tdJykgPyBrZXkuc2xpY2UoMCwgLTIpIDoga2V5O1xufVxuXG4vKipcbiAqIEl0IHRha2VzIGEgcGF0aCwgYSBrZXksIGFuZCBhIGJvb2xlYW4sIGFuZCByZXR1cm5zIGEgc3RyaW5nXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHBhdGggLSBUaGUgcGF0aCB0byB0aGUgY3VycmVudCBrZXkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IC0gVGhlIGtleSBvZiB0aGUgY3VycmVudCBvYmplY3QgYmVpbmcgaXRlcmF0ZWQgb3Zlci5cbiAqIEBwYXJhbSB7c3RyaW5nfSBkb3RzIC0gSWYgdHJ1ZSwgdGhlIGtleSB3aWxsIGJlIHJlbmRlcmVkIHdpdGggZG90cyBpbnN0ZWFkIG9mIGJyYWNrZXRzLlxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBwYXRoIHRvIHRoZSBjdXJyZW50IGtleS5cbiAqL1xuZnVuY3Rpb24gcmVuZGVyS2V5KHBhdGgsIGtleSwgZG90cykge1xuICBpZiAoIXBhdGgpIHJldHVybiBrZXk7XG4gIHJldHVybiBwYXRoLmNvbmNhdChrZXkpLm1hcChmdW5jdGlvbiBlYWNoKHRva2VuLCBpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdG9rZW4gPSByZW1vdmVCcmFja2V0cyh0b2tlbik7XG4gICAgcmV0dXJuICFkb3RzICYmIGkgPyAnWycgKyB0b2tlbiArICddJyA6IHRva2VuO1xuICB9KS5qb2luKGRvdHMgPyAnLicgOiAnJyk7XG59XG5cbi8qKlxuICogSWYgdGhlIGFycmF5IGlzIGFuIGFycmF5IGFuZCBub25lIG9mIGl0cyBlbGVtZW50cyBhcmUgdmlzaXRhYmxlLCB0aGVuIGl0J3MgYSBmbGF0IGFycmF5LlxuICpcbiAqIEBwYXJhbSB7QXJyYXk8YW55Pn0gYXJyIC0gVGhlIGFycmF5IHRvIGNoZWNrXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGlzRmxhdEFycmF5KGFycikge1xuICByZXR1cm4gdXRpbHMuaXNBcnJheShhcnIpICYmICFhcnIuc29tZShpc1Zpc2l0YWJsZSk7XG59XG5cbmNvbnN0IHByZWRpY2F0ZXMgPSB1dGlscy50b0ZsYXRPYmplY3QodXRpbHMsIHt9LCBudWxsLCBmdW5jdGlvbiBmaWx0ZXIocHJvcCkge1xuICByZXR1cm4gL15pc1tBLVpdLy50ZXN0KHByb3ApO1xufSk7XG5cbi8qKlxuICogQ29udmVydCBhIGRhdGEgb2JqZWN0IHRvIEZvcm1EYXRhXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9ialxuICogQHBhcmFtIHs/T2JqZWN0fSBbZm9ybURhdGFdXG4gKiBAcGFyYW0gez9PYmplY3R9IFtvcHRpb25zXVxuICogQHBhcmFtIHtGdW5jdGlvbn0gW29wdGlvbnMudmlzaXRvcl1cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMubWV0YVRva2VucyA9IHRydWVdXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmRvdHMgPSBmYWxzZV1cbiAqIEBwYXJhbSB7P0Jvb2xlYW59IFtvcHRpb25zLmluZGV4ZXMgPSBmYWxzZV1cbiAqXG4gKiBAcmV0dXJucyB7T2JqZWN0fVxuICoqL1xuXG4vKipcbiAqIEl0IGNvbnZlcnRzIGFuIG9iamVjdCBpbnRvIGEgRm9ybURhdGEgb2JqZWN0XG4gKlxuICogQHBhcmFtIHtPYmplY3Q8YW55LCBhbnk+fSBvYmogLSBUaGUgb2JqZWN0IHRvIGNvbnZlcnQgdG8gZm9ybSBkYXRhLlxuICogQHBhcmFtIHtzdHJpbmd9IGZvcm1EYXRhIC0gVGhlIEZvcm1EYXRhIG9iamVjdCB0byBhcHBlbmQgdG8uXG4gKiBAcGFyYW0ge09iamVjdDxzdHJpbmcsIGFueT59IG9wdGlvbnNcbiAqXG4gKiBAcmV0dXJuc1xuICovXG5mdW5jdGlvbiB0b0Zvcm1EYXRhKG9iaiwgZm9ybURhdGEsIG9wdGlvbnMpIHtcbiAgaWYgKCF1dGlscy5pc09iamVjdChvYmopKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcigndGFyZ2V0IG11c3QgYmUgYW4gb2JqZWN0Jyk7XG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgZm9ybURhdGEgPSBmb3JtRGF0YSB8fCBuZXcgKFBsYXRmb3JtRm9ybURhdGEgfHwgRm9ybURhdGEpKCk7XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gIG9wdGlvbnMgPSB1dGlscy50b0ZsYXRPYmplY3Qob3B0aW9ucywge1xuICAgIG1ldGFUb2tlbnM6IHRydWUsXG4gICAgZG90czogZmFsc2UsXG4gICAgaW5kZXhlczogZmFsc2VcbiAgfSwgZmFsc2UsIGZ1bmN0aW9uIGRlZmluZWQob3B0aW9uLCBzb3VyY2UpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZXEtbnVsbCxlcWVxZXFcbiAgICByZXR1cm4gIXV0aWxzLmlzVW5kZWZpbmVkKHNvdXJjZVtvcHRpb25dKTtcbiAgfSk7XG5cbiAgY29uc3QgbWV0YVRva2VucyA9IG9wdGlvbnMubWV0YVRva2VucztcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVzZS1iZWZvcmUtZGVmaW5lXG4gIGNvbnN0IHZpc2l0b3IgPSBvcHRpb25zLnZpc2l0b3IgfHwgZGVmYXVsdFZpc2l0b3I7XG4gIGNvbnN0IGRvdHMgPSBvcHRpb25zLmRvdHM7XG4gIGNvbnN0IGluZGV4ZXMgPSBvcHRpb25zLmluZGV4ZXM7XG4gIGNvbnN0IF9CbG9iID0gb3B0aW9ucy5CbG9iIHx8IHR5cGVvZiBCbG9iICE9PSAndW5kZWZpbmVkJyAmJiBCbG9iO1xuICBjb25zdCB1c2VCbG9iID0gX0Jsb2IgJiYgdXRpbHMuaXNTcGVjQ29tcGxpYW50Rm9ybShmb3JtRGF0YSk7XG5cbiAgaWYgKCF1dGlscy5pc0Z1bmN0aW9uKHZpc2l0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcigndmlzaXRvciBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbnZlcnRWYWx1ZSh2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSA9PT0gbnVsbCkgcmV0dXJuICcnO1xuXG4gICAgaWYgKHV0aWxzLmlzRGF0ZSh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiB2YWx1ZS50b0lTT1N0cmluZygpO1xuICAgIH1cblxuICAgIGlmICghdXNlQmxvYiAmJiB1dGlscy5pc0Jsb2IodmFsdWUpKSB7XG4gICAgICB0aHJvdyBuZXcgQXhpb3NFcnJvcignQmxvYiBpcyBub3Qgc3VwcG9ydGVkLiBVc2UgYSBCdWZmZXIgaW5zdGVhZC4nKTtcbiAgICB9XG5cbiAgICBpZiAodXRpbHMuaXNBcnJheUJ1ZmZlcih2YWx1ZSkgfHwgdXRpbHMuaXNUeXBlZEFycmF5KHZhbHVlKSkge1xuICAgICAgcmV0dXJuIHVzZUJsb2IgJiYgdHlwZW9mIEJsb2IgPT09ICdmdW5jdGlvbicgPyBuZXcgQmxvYihbdmFsdWVdKSA6IEJ1ZmZlci5mcm9tKHZhbHVlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogRGVmYXVsdCB2aXNpdG9yLlxuICAgKlxuICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAqIEBwYXJhbSB7U3RyaW5nfE51bWJlcn0ga2V5XG4gICAqIEBwYXJhbSB7QXJyYXk8U3RyaW5nfE51bWJlcj59IHBhdGhcbiAgICogQHRoaXMge0Zvcm1EYXRhfVxuICAgKlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gcmV0dXJuIHRydWUgdG8gdmlzaXQgdGhlIGVhY2ggcHJvcCBvZiB0aGUgdmFsdWUgcmVjdXJzaXZlbHlcbiAgICovXG4gIGZ1bmN0aW9uIGRlZmF1bHRWaXNpdG9yKHZhbHVlLCBrZXksIHBhdGgpIHtcbiAgICBsZXQgYXJyID0gdmFsdWU7XG5cbiAgICBpZiAodmFsdWUgJiYgIXBhdGggJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgICAgaWYgKHV0aWxzLmVuZHNXaXRoKGtleSwgJ3t9JykpIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICAgIGtleSA9IG1ldGFUb2tlbnMgPyBrZXkgOiBrZXkuc2xpY2UoMCwgLTIpO1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgICAgdmFsdWUgPSBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAodXRpbHMuaXNBcnJheSh2YWx1ZSkgJiYgaXNGbGF0QXJyYXkodmFsdWUpKSB8fFxuICAgICAgICAoKHV0aWxzLmlzRmlsZUxpc3QodmFsdWUpIHx8IHV0aWxzLmVuZHNXaXRoKGtleSwgJ1tdJykpICYmIChhcnIgPSB1dGlscy50b0FycmF5KHZhbHVlKSlcbiAgICAgICAgKSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgICAga2V5ID0gcmVtb3ZlQnJhY2tldHMoa2V5KTtcblxuICAgICAgICBhcnIuZm9yRWFjaChmdW5jdGlvbiBlYWNoKGVsLCBpbmRleCkge1xuICAgICAgICAgICEodXRpbHMuaXNVbmRlZmluZWQoZWwpIHx8IGVsID09PSBudWxsKSAmJiBmb3JtRGF0YS5hcHBlbmQoXG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmVzdGVkLXRlcm5hcnlcbiAgICAgICAgICAgIGluZGV4ZXMgPT09IHRydWUgPyByZW5kZXJLZXkoW2tleV0sIGluZGV4LCBkb3RzKSA6IChpbmRleGVzID09PSBudWxsID8ga2V5IDoga2V5ICsgJ1tdJyksXG4gICAgICAgICAgICBjb252ZXJ0VmFsdWUoZWwpXG4gICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaXNWaXNpdGFibGUodmFsdWUpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBmb3JtRGF0YS5hcHBlbmQocmVuZGVyS2V5KHBhdGgsIGtleSwgZG90cyksIGNvbnZlcnRWYWx1ZSh2YWx1ZSkpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY29uc3Qgc3RhY2sgPSBbXTtcblxuICBjb25zdCBleHBvc2VkSGVscGVycyA9IE9iamVjdC5hc3NpZ24ocHJlZGljYXRlcywge1xuICAgIGRlZmF1bHRWaXNpdG9yLFxuICAgIGNvbnZlcnRWYWx1ZSxcbiAgICBpc1Zpc2l0YWJsZVxuICB9KTtcblxuICBmdW5jdGlvbiBidWlsZCh2YWx1ZSwgcGF0aCkge1xuICAgIGlmICh1dGlscy5pc1VuZGVmaW5lZCh2YWx1ZSkpIHJldHVybjtcblxuICAgIGlmIChzdGFjay5pbmRleE9mKHZhbHVlKSAhPT0gLTEpIHtcbiAgICAgIHRocm93IEVycm9yKCdDaXJjdWxhciByZWZlcmVuY2UgZGV0ZWN0ZWQgaW4gJyArIHBhdGguam9pbignLicpKTtcbiAgICB9XG5cbiAgICBzdGFjay5wdXNoKHZhbHVlKTtcblxuICAgIHV0aWxzLmZvckVhY2godmFsdWUsIGZ1bmN0aW9uIGVhY2goZWwsIGtleSkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gISh1dGlscy5pc1VuZGVmaW5lZChlbCkgfHwgZWwgPT09IG51bGwpICYmIHZpc2l0b3IuY2FsbChcbiAgICAgICAgZm9ybURhdGEsIGVsLCB1dGlscy5pc1N0cmluZyhrZXkpID8ga2V5LnRyaW0oKSA6IGtleSwgcGF0aCwgZXhwb3NlZEhlbHBlcnNcbiAgICAgICk7XG5cbiAgICAgIGlmIChyZXN1bHQgPT09IHRydWUpIHtcbiAgICAgICAgYnVpbGQoZWwsIHBhdGggPyBwYXRoLmNvbmNhdChrZXkpIDogW2tleV0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgc3RhY2sucG9wKCk7XG4gIH1cblxuICBpZiAoIXV0aWxzLmlzT2JqZWN0KG9iaikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdkYXRhIG11c3QgYmUgYW4gb2JqZWN0Jyk7XG4gIH1cblxuICBidWlsZChvYmopO1xuXG4gIHJldHVybiBmb3JtRGF0YTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdG9Gb3JtRGF0YTtcbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHV0aWxzIGZyb20gJy4uL3V0aWxzLmpzJztcbmltcG9ydCB0b0Zvcm1EYXRhIGZyb20gJy4vdG9Gb3JtRGF0YS5qcyc7XG5pbXBvcnQgcGxhdGZvcm0gZnJvbSAnLi4vcGxhdGZvcm0vaW5kZXguanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b1VSTEVuY29kZWRGb3JtKGRhdGEsIG9wdGlvbnMpIHtcbiAgcmV0dXJuIHRvRm9ybURhdGEoZGF0YSwgbmV3IHBsYXRmb3JtLmNsYXNzZXMuVVJMU2VhcmNoUGFyYW1zKCksIE9iamVjdC5hc3NpZ24oe1xuICAgIHZpc2l0b3I6IGZ1bmN0aW9uKHZhbHVlLCBrZXksIHBhdGgsIGhlbHBlcnMpIHtcbiAgICAgIGlmIChwbGF0Zm9ybS5pc05vZGUgJiYgdXRpbHMuaXNCdWZmZXIodmFsdWUpKSB7XG4gICAgICAgIHRoaXMuYXBwZW5kKGtleSwgdmFsdWUudG9TdHJpbmcoJ2Jhc2U2NCcpKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gaGVscGVycy5kZWZhdWx0VmlzaXRvci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfSwgb3B0aW9ucykpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQge1ZFUlNJT059IGZyb20gJy4uL2Vudi9kYXRhLmpzJztcbmltcG9ydCBBeGlvc0Vycm9yIGZyb20gJy4uL2NvcmUvQXhpb3NFcnJvci5qcyc7XG5cbmNvbnN0IHZhbGlkYXRvcnMgPSB7fTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblsnb2JqZWN0JywgJ2Jvb2xlYW4nLCAnbnVtYmVyJywgJ2Z1bmN0aW9uJywgJ3N0cmluZycsICdzeW1ib2wnXS5mb3JFYWNoKCh0eXBlLCBpKSA9PiB7XG4gIHZhbGlkYXRvcnNbdHlwZV0gPSBmdW5jdGlvbiB2YWxpZGF0b3IodGhpbmcpIHtcbiAgICByZXR1cm4gdHlwZW9mIHRoaW5nID09PSB0eXBlIHx8ICdhJyArIChpIDwgMSA/ICduICcgOiAnICcpICsgdHlwZTtcbiAgfTtcbn0pO1xuXG5jb25zdCBkZXByZWNhdGVkV2FybmluZ3MgPSB7fTtcblxuLyoqXG4gKiBUcmFuc2l0aW9uYWwgb3B0aW9uIHZhbGlkYXRvclxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb258Ym9vbGVhbj99IHZhbGlkYXRvciAtIHNldCB0byBmYWxzZSBpZiB0aGUgdHJhbnNpdGlvbmFsIG9wdGlvbiBoYXMgYmVlbiByZW1vdmVkXG4gKiBAcGFyYW0ge3N0cmluZz99IHZlcnNpb24gLSBkZXByZWNhdGVkIHZlcnNpb24gLyByZW1vdmVkIHNpbmNlIHZlcnNpb25cbiAqIEBwYXJhbSB7c3RyaW5nP30gbWVzc2FnZSAtIHNvbWUgbWVzc2FnZSB3aXRoIGFkZGl0aW9uYWwgaW5mb1xuICpcbiAqIEByZXR1cm5zIHtmdW5jdGlvbn1cbiAqL1xudmFsaWRhdG9ycy50cmFuc2l0aW9uYWwgPSBmdW5jdGlvbiB0cmFuc2l0aW9uYWwodmFsaWRhdG9yLCB2ZXJzaW9uLCBtZXNzYWdlKSB7XG4gIGZ1bmN0aW9uIGZvcm1hdE1lc3NhZ2Uob3B0LCBkZXNjKSB7XG4gICAgcmV0dXJuICdbQXhpb3MgdicgKyBWRVJTSU9OICsgJ10gVHJhbnNpdGlvbmFsIG9wdGlvbiBcXCcnICsgb3B0ICsgJ1xcJycgKyBkZXNjICsgKG1lc3NhZ2UgPyAnLiAnICsgbWVzc2FnZSA6ICcnKTtcbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG4gIHJldHVybiAodmFsdWUsIG9wdCwgb3B0cykgPT4ge1xuICAgIGlmICh2YWxpZGF0b3IgPT09IGZhbHNlKSB7XG4gICAgICB0aHJvdyBuZXcgQXhpb3NFcnJvcihcbiAgICAgICAgZm9ybWF0TWVzc2FnZShvcHQsICcgaGFzIGJlZW4gcmVtb3ZlZCcgKyAodmVyc2lvbiA/ICcgaW4gJyArIHZlcnNpb24gOiAnJykpLFxuICAgICAgICBBeGlvc0Vycm9yLkVSUl9ERVBSRUNBVEVEXG4gICAgICApO1xuICAgIH1cblxuICAgIGlmICh2ZXJzaW9uICYmICFkZXByZWNhdGVkV2FybmluZ3Nbb3B0XSkge1xuICAgICAgZGVwcmVjYXRlZFdhcm5pbmdzW29wdF0gPSB0cnVlO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgZm9ybWF0TWVzc2FnZShcbiAgICAgICAgICBvcHQsXG4gICAgICAgICAgJyBoYXMgYmVlbiBkZXByZWNhdGVkIHNpbmNlIHYnICsgdmVyc2lvbiArICcgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiB0aGUgbmVhciBmdXR1cmUnXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRvciA/IHZhbGlkYXRvcih2YWx1ZSwgb3B0LCBvcHRzKSA6IHRydWU7XG4gIH07XG59O1xuXG4vKipcbiAqIEFzc2VydCBvYmplY3QncyBwcm9wZXJ0aWVzIHR5cGVcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICogQHBhcmFtIHtvYmplY3R9IHNjaGVtYVxuICogQHBhcmFtIHtib29sZWFuP30gYWxsb3dVbmtub3duXG4gKlxuICogQHJldHVybnMge29iamVjdH1cbiAqL1xuXG5mdW5jdGlvbiBhc3NlcnRPcHRpb25zKG9wdGlvbnMsIHNjaGVtYSwgYWxsb3dVbmtub3duKSB7XG4gIGlmICh0eXBlb2Ygb3B0aW9ucyAhPT0gJ29iamVjdCcpIHtcbiAgICB0aHJvdyBuZXcgQXhpb3NFcnJvcignb3B0aW9ucyBtdXN0IGJlIGFuIG9iamVjdCcsIEF4aW9zRXJyb3IuRVJSX0JBRF9PUFRJT05fVkFMVUUpO1xuICB9XG4gIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhvcHRpb25zKTtcbiAgbGV0IGkgPSBrZXlzLmxlbmd0aDtcbiAgd2hpbGUgKGktLSA+IDApIHtcbiAgICBjb25zdCBvcHQgPSBrZXlzW2ldO1xuICAgIGNvbnN0IHZhbGlkYXRvciA9IHNjaGVtYVtvcHRdO1xuICAgIGlmICh2YWxpZGF0b3IpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gb3B0aW9uc1tvcHRdO1xuICAgICAgY29uc3QgcmVzdWx0ID0gdmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWxpZGF0b3IodmFsdWUsIG9wdCwgb3B0aW9ucyk7XG4gICAgICBpZiAocmVzdWx0ICE9PSB0cnVlKSB7XG4gICAgICAgIHRocm93IG5ldyBBeGlvc0Vycm9yKCdvcHRpb24gJyArIG9wdCArICcgbXVzdCBiZSAnICsgcmVzdWx0LCBBeGlvc0Vycm9yLkVSUl9CQURfT1BUSU9OX1ZBTFVFKTtcbiAgICAgIH1cbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAoYWxsb3dVbmtub3duICE9PSB0cnVlKSB7XG4gICAgICB0aHJvdyBuZXcgQXhpb3NFcnJvcignVW5rbm93biBvcHRpb24gJyArIG9wdCwgQXhpb3NFcnJvci5FUlJfQkFEX09QVElPTik7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgYXNzZXJ0T3B0aW9ucyxcbiAgdmFsaWRhdG9yc1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IGRlZmF1bHQgRm9ybURhdGE7XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBBeGlvc1VSTFNlYXJjaFBhcmFtcyBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL0F4aW9zVVJMU2VhcmNoUGFyYW1zLmpzJztcbmV4cG9ydCBkZWZhdWx0IHR5cGVvZiBVUkxTZWFyY2hQYXJhbXMgIT09ICd1bmRlZmluZWQnID8gVVJMU2VhcmNoUGFyYW1zIDogQXhpb3NVUkxTZWFyY2hQYXJhbXM7XG4iLCJpbXBvcnQgVVJMU2VhcmNoUGFyYW1zIGZyb20gJy4vY2xhc3Nlcy9VUkxTZWFyY2hQYXJhbXMuanMnXG5pbXBvcnQgRm9ybURhdGEgZnJvbSAnLi9jbGFzc2VzL0Zvcm1EYXRhLmpzJ1xuXG4vKipcbiAqIERldGVybWluZSBpZiB3ZSdyZSBydW5uaW5nIGluIGEgc3RhbmRhcmQgYnJvd3NlciBlbnZpcm9ubWVudFxuICpcbiAqIFRoaXMgYWxsb3dzIGF4aW9zIHRvIHJ1biBpbiBhIHdlYiB3b3JrZXIsIGFuZCByZWFjdC1uYXRpdmUuXG4gKiBCb3RoIGVudmlyb25tZW50cyBzdXBwb3J0IFhNTEh0dHBSZXF1ZXN0LCBidXQgbm90IGZ1bGx5IHN0YW5kYXJkIGdsb2JhbHMuXG4gKlxuICogd2ViIHdvcmtlcnM6XG4gKiAgdHlwZW9mIHdpbmRvdyAtPiB1bmRlZmluZWRcbiAqICB0eXBlb2YgZG9jdW1lbnQgLT4gdW5kZWZpbmVkXG4gKlxuICogcmVhY3QtbmF0aXZlOlxuICogIG5hdmlnYXRvci5wcm9kdWN0IC0+ICdSZWFjdE5hdGl2ZSdcbiAqIG5hdGl2ZXNjcmlwdFxuICogIG5hdmlnYXRvci5wcm9kdWN0IC0+ICdOYXRpdmVTY3JpcHQnIG9yICdOUydcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuY29uc3QgaXNTdGFuZGFyZEJyb3dzZXJFbnYgPSAoKCkgPT4ge1xuICBsZXQgcHJvZHVjdDtcbiAgaWYgKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIChcbiAgICAocHJvZHVjdCA9IG5hdmlnYXRvci5wcm9kdWN0KSA9PT0gJ1JlYWN0TmF0aXZlJyB8fFxuICAgIHByb2R1Y3QgPT09ICdOYXRpdmVTY3JpcHQnIHx8XG4gICAgcHJvZHVjdCA9PT0gJ05TJylcbiAgKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCc7XG59KSgpO1xuXG4vKipcbiAqIERldGVybWluZSBpZiB3ZSdyZSBydW5uaW5nIGluIGEgc3RhbmRhcmQgYnJvd3NlciB3ZWJXb3JrZXIgZW52aXJvbm1lbnRcbiAqXG4gKiBBbHRob3VnaCB0aGUgYGlzU3RhbmRhcmRCcm93c2VyRW52YCBtZXRob2QgaW5kaWNhdGVzIHRoYXRcbiAqIGBhbGxvd3MgYXhpb3MgdG8gcnVuIGluIGEgd2ViIHdvcmtlcmAsIHRoZSBXZWJXb3JrZXIgd2lsbCBzdGlsbCBiZVxuICogZmlsdGVyZWQgb3V0IGR1ZSB0byBpdHMganVkZ21lbnQgc3RhbmRhcmRcbiAqIGB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnYC5cbiAqIFRoaXMgbGVhZHMgdG8gYSBwcm9ibGVtIHdoZW4gYXhpb3MgcG9zdCBgRm9ybURhdGFgIGluIHdlYldvcmtlclxuICovXG4gY29uc3QgaXNTdGFuZGFyZEJyb3dzZXJXZWJXb3JrZXJFbnYgPSAoKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIHR5cGVvZiBXb3JrZXJHbG9iYWxTY29wZSAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICBzZWxmIGluc3RhbmNlb2YgV29ya2VyR2xvYmFsU2NvcGUgJiZcbiAgICB0eXBlb2Ygc2VsZi5pbXBvcnRTY3JpcHRzID09PSAnZnVuY3Rpb24nXG4gICk7XG59KSgpO1xuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgaXNCcm93c2VyOiB0cnVlLFxuICBjbGFzc2VzOiB7XG4gICAgVVJMU2VhcmNoUGFyYW1zLFxuICAgIEZvcm1EYXRhLFxuICAgIEJsb2JcbiAgfSxcbiAgaXNTdGFuZGFyZEJyb3dzZXJFbnYsXG4gIGlzU3RhbmRhcmRCcm93c2VyV2ViV29ya2VyRW52LFxuICBwcm90b2NvbHM6IFsnaHR0cCcsICdodHRwcycsICdmaWxlJywgJ2Jsb2InLCAndXJsJywgJ2RhdGEnXVxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IGJpbmQgZnJvbSAnLi9oZWxwZXJzL2JpbmQuanMnO1xuXG4vLyB1dGlscyBpcyBhIGxpYnJhcnkgb2YgZ2VuZXJpYyBoZWxwZXIgZnVuY3Rpb25zIG5vbi1zcGVjaWZpYyB0byBheGlvc1xuXG5jb25zdCB7dG9TdHJpbmd9ID0gT2JqZWN0LnByb3RvdHlwZTtcbmNvbnN0IHtnZXRQcm90b3R5cGVPZn0gPSBPYmplY3Q7XG5cbmNvbnN0IGtpbmRPZiA9IChjYWNoZSA9PiB0aGluZyA9PiB7XG4gICAgY29uc3Qgc3RyID0gdG9TdHJpbmcuY2FsbCh0aGluZyk7XG4gICAgcmV0dXJuIGNhY2hlW3N0cl0gfHwgKGNhY2hlW3N0cl0gPSBzdHIuc2xpY2UoOCwgLTEpLnRvTG93ZXJDYXNlKCkpO1xufSkoT2JqZWN0LmNyZWF0ZShudWxsKSk7XG5cbmNvbnN0IGtpbmRPZlRlc3QgPSAodHlwZSkgPT4ge1xuICB0eXBlID0gdHlwZS50b0xvd2VyQ2FzZSgpO1xuICByZXR1cm4gKHRoaW5nKSA9PiBraW5kT2YodGhpbmcpID09PSB0eXBlXG59XG5cbmNvbnN0IHR5cGVPZlRlc3QgPSB0eXBlID0+IHRoaW5nID0+IHR5cGVvZiB0aGluZyA9PT0gdHlwZTtcblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBBcnJheVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBBcnJheSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmNvbnN0IHtpc0FycmF5fSA9IEFycmF5O1xuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIHVuZGVmaW5lZFxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIHZhbHVlIGlzIHVuZGVmaW5lZCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmNvbnN0IGlzVW5kZWZpbmVkID0gdHlwZU9mVGVzdCgndW5kZWZpbmVkJyk7XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBCdWZmZXJcbiAqXG4gKiBAcGFyYW0geyp9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgQnVmZmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNCdWZmZXIodmFsKSB7XG4gIHJldHVybiB2YWwgIT09IG51bGwgJiYgIWlzVW5kZWZpbmVkKHZhbCkgJiYgdmFsLmNvbnN0cnVjdG9yICE9PSBudWxsICYmICFpc1VuZGVmaW5lZCh2YWwuY29uc3RydWN0b3IpXG4gICAgJiYgaXNGdW5jdGlvbih2YWwuY29uc3RydWN0b3IuaXNCdWZmZXIpICYmIHZhbC5jb25zdHJ1Y3Rvci5pc0J1ZmZlcih2YWwpO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGFuIEFycmF5QnVmZmVyXG4gKlxuICogQHBhcmFtIHsqfSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBBcnJheUJ1ZmZlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmNvbnN0IGlzQXJyYXlCdWZmZXIgPSBraW5kT2ZUZXN0KCdBcnJheUJ1ZmZlcicpO1xuXG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSB2aWV3IG9uIGFuIEFycmF5QnVmZmVyXG4gKlxuICogQHBhcmFtIHsqfSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIHZpZXcgb24gYW4gQXJyYXlCdWZmZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5QnVmZmVyVmlldyh2YWwpIHtcbiAgbGV0IHJlc3VsdDtcbiAgaWYgKCh0eXBlb2YgQXJyYXlCdWZmZXIgIT09ICd1bmRlZmluZWQnKSAmJiAoQXJyYXlCdWZmZXIuaXNWaWV3KSkge1xuICAgIHJlc3VsdCA9IEFycmF5QnVmZmVyLmlzVmlldyh2YWwpO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9ICh2YWwpICYmICh2YWwuYnVmZmVyKSAmJiAoaXNBcnJheUJ1ZmZlcih2YWwuYnVmZmVyKSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFN0cmluZ1xuICpcbiAqIEBwYXJhbSB7Kn0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBTdHJpbmcsIG90aGVyd2lzZSBmYWxzZVxuICovXG5jb25zdCBpc1N0cmluZyA9IHR5cGVPZlRlc3QoJ3N0cmluZycpO1xuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRnVuY3Rpb25cbiAqXG4gKiBAcGFyYW0geyp9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBGdW5jdGlvbiwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmNvbnN0IGlzRnVuY3Rpb24gPSB0eXBlT2ZUZXN0KCdmdW5jdGlvbicpO1xuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgTnVtYmVyXG4gKlxuICogQHBhcmFtIHsqfSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIE51bWJlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmNvbnN0IGlzTnVtYmVyID0gdHlwZU9mVGVzdCgnbnVtYmVyJyk7XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYW4gT2JqZWN0XG4gKlxuICogQHBhcmFtIHsqfSB0aGluZyBUaGUgdmFsdWUgdG8gdGVzdFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIE9iamVjdCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmNvbnN0IGlzT2JqZWN0ID0gKHRoaW5nKSA9PiB0aGluZyAhPT0gbnVsbCAmJiB0eXBlb2YgdGhpbmcgPT09ICdvYmplY3QnO1xuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgQm9vbGVhblxuICpcbiAqIEBwYXJhbSB7Kn0gdGhpbmcgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgQm9vbGVhbiwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmNvbnN0IGlzQm9vbGVhbiA9IHRoaW5nID0+IHRoaW5nID09PSB0cnVlIHx8IHRoaW5nID09PSBmYWxzZTtcblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIHBsYWluIE9iamVjdFxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBwbGFpbiBPYmplY3QsIG90aGVyd2lzZSBmYWxzZVxuICovXG5jb25zdCBpc1BsYWluT2JqZWN0ID0gKHZhbCkgPT4ge1xuICBpZiAoa2luZE9mKHZhbCkgIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY29uc3QgcHJvdG90eXBlID0gZ2V0UHJvdG90eXBlT2YodmFsKTtcbiAgcmV0dXJuIChwcm90b3R5cGUgPT09IG51bGwgfHwgcHJvdG90eXBlID09PSBPYmplY3QucHJvdG90eXBlIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihwcm90b3R5cGUpID09PSBudWxsKSAmJiAhKFN5bWJvbC50b1N0cmluZ1RhZyBpbiB2YWwpICYmICEoU3ltYm9sLml0ZXJhdG9yIGluIHZhbCk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBEYXRlXG4gKlxuICogQHBhcmFtIHsqfSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIERhdGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5jb25zdCBpc0RhdGUgPSBraW5kT2ZUZXN0KCdEYXRlJyk7XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGaWxlXG4gKlxuICogQHBhcmFtIHsqfSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEZpbGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5jb25zdCBpc0ZpbGUgPSBraW5kT2ZUZXN0KCdGaWxlJyk7XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBCbG9iXG4gKlxuICogQHBhcmFtIHsqfSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEJsb2IsIG90aGVyd2lzZSBmYWxzZVxuICovXG5jb25zdCBpc0Jsb2IgPSBraW5kT2ZUZXN0KCdCbG9iJyk7XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGaWxlTGlzdFxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBGaWxlLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuY29uc3QgaXNGaWxlTGlzdCA9IGtpbmRPZlRlc3QoJ0ZpbGVMaXN0Jyk7XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBTdHJlYW1cbiAqXG4gKiBAcGFyYW0geyp9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgU3RyZWFtLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuY29uc3QgaXNTdHJlYW0gPSAodmFsKSA9PiBpc09iamVjdCh2YWwpICYmIGlzRnVuY3Rpb24odmFsLnBpcGUpO1xuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRm9ybURhdGFcbiAqXG4gKiBAcGFyYW0geyp9IHRoaW5nIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gRm9ybURhdGEsIG90aGVyd2lzZSBmYWxzZVxuICovXG5jb25zdCBpc0Zvcm1EYXRhID0gKHRoaW5nKSA9PiB7XG4gIGNvbnN0IHBhdHRlcm4gPSAnW29iamVjdCBGb3JtRGF0YV0nO1xuICByZXR1cm4gdGhpbmcgJiYgKFxuICAgICh0eXBlb2YgRm9ybURhdGEgPT09ICdmdW5jdGlvbicgJiYgdGhpbmcgaW5zdGFuY2VvZiBGb3JtRGF0YSkgfHxcbiAgICB0b1N0cmluZy5jYWxsKHRoaW5nKSA9PT0gcGF0dGVybiB8fFxuICAgIChpc0Z1bmN0aW9uKHRoaW5nLnRvU3RyaW5nKSAmJiB0aGluZy50b1N0cmluZygpID09PSBwYXR0ZXJuKVxuICApO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgVVJMU2VhcmNoUGFyYW1zIG9iamVjdFxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBVUkxTZWFyY2hQYXJhbXMgb2JqZWN0LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuY29uc3QgaXNVUkxTZWFyY2hQYXJhbXMgPSBraW5kT2ZUZXN0KCdVUkxTZWFyY2hQYXJhbXMnKTtcblxuLyoqXG4gKiBUcmltIGV4Y2VzcyB3aGl0ZXNwYWNlIG9mZiB0aGUgYmVnaW5uaW5nIGFuZCBlbmQgb2YgYSBzdHJpbmdcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyIFRoZSBTdHJpbmcgdG8gdHJpbVxuICpcbiAqIEByZXR1cm5zIHtTdHJpbmd9IFRoZSBTdHJpbmcgZnJlZWQgb2YgZXhjZXNzIHdoaXRlc3BhY2VcbiAqL1xuY29uc3QgdHJpbSA9IChzdHIpID0+IHN0ci50cmltID9cbiAgc3RyLnRyaW0oKSA6IHN0ci5yZXBsYWNlKC9eW1xcc1xcdUZFRkZcXHhBMF0rfFtcXHNcXHVGRUZGXFx4QTBdKyQvZywgJycpO1xuXG4vKipcbiAqIEl0ZXJhdGUgb3ZlciBhbiBBcnJheSBvciBhbiBPYmplY3QgaW52b2tpbmcgYSBmdW5jdGlvbiBmb3IgZWFjaCBpdGVtLlxuICpcbiAqIElmIGBvYmpgIGlzIGFuIEFycmF5IGNhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIHBhc3NpbmdcbiAqIHRoZSB2YWx1ZSwgaW5kZXgsIGFuZCBjb21wbGV0ZSBhcnJheSBmb3IgZWFjaCBpdGVtLlxuICpcbiAqIElmICdvYmonIGlzIGFuIE9iamVjdCBjYWxsYmFjayB3aWxsIGJlIGNhbGxlZCBwYXNzaW5nXG4gKiB0aGUgdmFsdWUsIGtleSwgYW5kIGNvbXBsZXRlIG9iamVjdCBmb3IgZWFjaCBwcm9wZXJ0eS5cbiAqXG4gKiBAcGFyYW0ge09iamVjdHxBcnJheX0gb2JqIFRoZSBvYmplY3QgdG8gaXRlcmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGNhbGxiYWNrIHRvIGludm9rZSBmb3IgZWFjaCBpdGVtXG4gKlxuICogQHBhcmFtIHtCb29sZWFufSBbYWxsT3duS2V5cyA9IGZhbHNlXVxuICogQHJldHVybnMge2FueX1cbiAqL1xuZnVuY3Rpb24gZm9yRWFjaChvYmosIGZuLCB7YWxsT3duS2V5cyA9IGZhbHNlfSA9IHt9KSB7XG4gIC8vIERvbid0IGJvdGhlciBpZiBubyB2YWx1ZSBwcm92aWRlZFxuICBpZiAob2JqID09PSBudWxsIHx8IHR5cGVvZiBvYmogPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgbGV0IGk7XG4gIGxldCBsO1xuXG4gIC8vIEZvcmNlIGFuIGFycmF5IGlmIG5vdCBhbHJlYWR5IHNvbWV0aGluZyBpdGVyYWJsZVxuICBpZiAodHlwZW9mIG9iaiAhPT0gJ29iamVjdCcpIHtcbiAgICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgICBvYmogPSBbb2JqXTtcbiAgfVxuXG4gIGlmIChpc0FycmF5KG9iaikpIHtcbiAgICAvLyBJdGVyYXRlIG92ZXIgYXJyYXkgdmFsdWVzXG4gICAgZm9yIChpID0gMCwgbCA9IG9iai5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGZuLmNhbGwobnVsbCwgb2JqW2ldLCBpLCBvYmopO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBJdGVyYXRlIG92ZXIgb2JqZWN0IGtleXNcbiAgICBjb25zdCBrZXlzID0gYWxsT3duS2V5cyA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKG9iaikgOiBPYmplY3Qua2V5cyhvYmopO1xuICAgIGNvbnN0IGxlbiA9IGtleXMubGVuZ3RoO1xuICAgIGxldCBrZXk7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGtleSA9IGtleXNbaV07XG4gICAgICBmbi5jYWxsKG51bGwsIG9ialtrZXldLCBrZXksIG9iaik7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGZpbmRLZXkob2JqLCBrZXkpIHtcbiAga2V5ID0ga2V5LnRvTG93ZXJDYXNlKCk7XG4gIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhvYmopO1xuICBsZXQgaSA9IGtleXMubGVuZ3RoO1xuICBsZXQgX2tleTtcbiAgd2hpbGUgKGktLSA+IDApIHtcbiAgICBfa2V5ID0ga2V5c1tpXTtcbiAgICBpZiAoa2V5ID09PSBfa2V5LnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgIHJldHVybiBfa2V5O1xuICAgIH1cbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cblxuY29uc3QgX2dsb2JhbCA9ICgoKSA9PiB7XG4gIC8qZXNsaW50IG5vLXVuZGVmOjAqL1xuICBpZiAodHlwZW9mIGdsb2JhbFRoaXMgIT09IFwidW5kZWZpbmVkXCIpIHJldHVybiBnbG9iYWxUaGlzO1xuICByZXR1cm4gdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDogZ2xvYmFsKVxufSkoKTtcblxuY29uc3QgaXNDb250ZXh0RGVmaW5lZCA9IChjb250ZXh0KSA9PiAhaXNVbmRlZmluZWQoY29udGV4dCkgJiYgY29udGV4dCAhPT0gX2dsb2JhbDtcblxuLyoqXG4gKiBBY2NlcHRzIHZhcmFyZ3MgZXhwZWN0aW5nIGVhY2ggYXJndW1lbnQgdG8gYmUgYW4gb2JqZWN0LCB0aGVuXG4gKiBpbW11dGFibHkgbWVyZ2VzIHRoZSBwcm9wZXJ0aWVzIG9mIGVhY2ggb2JqZWN0IGFuZCByZXR1cm5zIHJlc3VsdC5cbiAqXG4gKiBXaGVuIG11bHRpcGxlIG9iamVjdHMgY29udGFpbiB0aGUgc2FtZSBrZXkgdGhlIGxhdGVyIG9iamVjdCBpblxuICogdGhlIGFyZ3VtZW50cyBsaXN0IHdpbGwgdGFrZSBwcmVjZWRlbmNlLlxuICpcbiAqIEV4YW1wbGU6XG4gKlxuICogYGBganNcbiAqIHZhciByZXN1bHQgPSBtZXJnZSh7Zm9vOiAxMjN9LCB7Zm9vOiA0NTZ9KTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdC5mb28pOyAvLyBvdXRwdXRzIDQ1NlxuICogYGBgXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9iajEgT2JqZWN0IHRvIG1lcmdlXG4gKlxuICogQHJldHVybnMge09iamVjdH0gUmVzdWx0IG9mIGFsbCBtZXJnZSBwcm9wZXJ0aWVzXG4gKi9cbmZ1bmN0aW9uIG1lcmdlKC8qIG9iajEsIG9iajIsIG9iajMsIC4uLiAqLykge1xuICBjb25zdCB7Y2FzZWxlc3N9ID0gaXNDb250ZXh0RGVmaW5lZCh0aGlzKSAmJiB0aGlzIHx8IHt9O1xuICBjb25zdCByZXN1bHQgPSB7fTtcbiAgY29uc3QgYXNzaWduVmFsdWUgPSAodmFsLCBrZXkpID0+IHtcbiAgICBjb25zdCB0YXJnZXRLZXkgPSBjYXNlbGVzcyAmJiBmaW5kS2V5KHJlc3VsdCwga2V5KSB8fCBrZXk7XG4gICAgaWYgKGlzUGxhaW5PYmplY3QocmVzdWx0W3RhcmdldEtleV0pICYmIGlzUGxhaW5PYmplY3QodmFsKSkge1xuICAgICAgcmVzdWx0W3RhcmdldEtleV0gPSBtZXJnZShyZXN1bHRbdGFyZ2V0S2V5XSwgdmFsKTtcbiAgICB9IGVsc2UgaWYgKGlzUGxhaW5PYmplY3QodmFsKSkge1xuICAgICAgcmVzdWx0W3RhcmdldEtleV0gPSBtZXJnZSh7fSwgdmFsKTtcbiAgICB9IGVsc2UgaWYgKGlzQXJyYXkodmFsKSkge1xuICAgICAgcmVzdWx0W3RhcmdldEtleV0gPSB2YWwuc2xpY2UoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0W3RhcmdldEtleV0gPSB2YWw7XG4gICAgfVxuICB9XG5cbiAgZm9yIChsZXQgaSA9IDAsIGwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgYXJndW1lbnRzW2ldICYmIGZvckVhY2goYXJndW1lbnRzW2ldLCBhc3NpZ25WYWx1ZSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBFeHRlbmRzIG9iamVjdCBhIGJ5IG11dGFibHkgYWRkaW5nIHRvIGl0IHRoZSBwcm9wZXJ0aWVzIG9mIG9iamVjdCBiLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBhIFRoZSBvYmplY3QgdG8gYmUgZXh0ZW5kZWRcbiAqIEBwYXJhbSB7T2JqZWN0fSBiIFRoZSBvYmplY3QgdG8gY29weSBwcm9wZXJ0aWVzIGZyb21cbiAqIEBwYXJhbSB7T2JqZWN0fSB0aGlzQXJnIFRoZSBvYmplY3QgdG8gYmluZCBmdW5jdGlvbiB0b1xuICpcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW2FsbE93bktleXNdXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgcmVzdWx0aW5nIHZhbHVlIG9mIG9iamVjdCBhXG4gKi9cbmNvbnN0IGV4dGVuZCA9IChhLCBiLCB0aGlzQXJnLCB7YWxsT3duS2V5c309IHt9KSA9PiB7XG4gIGZvckVhY2goYiwgKHZhbCwga2V5KSA9PiB7XG4gICAgaWYgKHRoaXNBcmcgJiYgaXNGdW5jdGlvbih2YWwpKSB7XG4gICAgICBhW2tleV0gPSBiaW5kKHZhbCwgdGhpc0FyZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFba2V5XSA9IHZhbDtcbiAgICB9XG4gIH0sIHthbGxPd25LZXlzfSk7XG4gIHJldHVybiBhO1xufVxuXG4vKipcbiAqIFJlbW92ZSBieXRlIG9yZGVyIG1hcmtlci4gVGhpcyBjYXRjaGVzIEVGIEJCIEJGICh0aGUgVVRGLTggQk9NKVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb250ZW50IHdpdGggQk9NXG4gKlxuICogQHJldHVybnMge3N0cmluZ30gY29udGVudCB2YWx1ZSB3aXRob3V0IEJPTVxuICovXG5jb25zdCBzdHJpcEJPTSA9IChjb250ZW50KSA9PiB7XG4gIGlmIChjb250ZW50LmNoYXJDb2RlQXQoMCkgPT09IDB4RkVGRikge1xuICAgIGNvbnRlbnQgPSBjb250ZW50LnNsaWNlKDEpO1xuICB9XG4gIHJldHVybiBjb250ZW50O1xufVxuXG4vKipcbiAqIEluaGVyaXQgdGhlIHByb3RvdHlwZSBtZXRob2RzIGZyb20gb25lIGNvbnN0cnVjdG9yIGludG8gYW5vdGhlclxuICogQHBhcmFtIHtmdW5jdGlvbn0gY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IHN1cGVyQ29uc3RydWN0b3JcbiAqIEBwYXJhbSB7b2JqZWN0fSBbcHJvcHNdXG4gKiBAcGFyYW0ge29iamVjdH0gW2Rlc2NyaXB0b3JzXVxuICpcbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5jb25zdCBpbmhlcml0cyA9IChjb25zdHJ1Y3Rvciwgc3VwZXJDb25zdHJ1Y3RvciwgcHJvcHMsIGRlc2NyaXB0b3JzKSA9PiB7XG4gIGNvbnN0cnVjdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIGRlc2NyaXB0b3JzKTtcbiAgY29uc3RydWN0b3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gY29uc3RydWN0b3I7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb25zdHJ1Y3RvciwgJ3N1cGVyJywge1xuICAgIHZhbHVlOiBzdXBlckNvbnN0cnVjdG9yLnByb3RvdHlwZVxuICB9KTtcbiAgcHJvcHMgJiYgT2JqZWN0LmFzc2lnbihjb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3BzKTtcbn1cblxuLyoqXG4gKiBSZXNvbHZlIG9iamVjdCB3aXRoIGRlZXAgcHJvdG90eXBlIGNoYWluIHRvIGEgZmxhdCBvYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2VPYmogc291cmNlIG9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IFtkZXN0T2JqXVxuICogQHBhcmFtIHtGdW5jdGlvbnxCb29sZWFufSBbZmlsdGVyXVxuICogQHBhcmFtIHtGdW5jdGlvbn0gW3Byb3BGaWx0ZXJdXG4gKlxuICogQHJldHVybnMge09iamVjdH1cbiAqL1xuY29uc3QgdG9GbGF0T2JqZWN0ID0gKHNvdXJjZU9iaiwgZGVzdE9iaiwgZmlsdGVyLCBwcm9wRmlsdGVyKSA9PiB7XG4gIGxldCBwcm9wcztcbiAgbGV0IGk7XG4gIGxldCBwcm9wO1xuICBjb25zdCBtZXJnZWQgPSB7fTtcblxuICBkZXN0T2JqID0gZGVzdE9iaiB8fCB7fTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWVxLW51bGwsZXFlcWVxXG4gIGlmIChzb3VyY2VPYmogPT0gbnVsbCkgcmV0dXJuIGRlc3RPYmo7XG5cbiAgZG8ge1xuICAgIHByb3BzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoc291cmNlT2JqKTtcbiAgICBpID0gcHJvcHMubGVuZ3RoO1xuICAgIHdoaWxlIChpLS0gPiAwKSB7XG4gICAgICBwcm9wID0gcHJvcHNbaV07XG4gICAgICBpZiAoKCFwcm9wRmlsdGVyIHx8IHByb3BGaWx0ZXIocHJvcCwgc291cmNlT2JqLCBkZXN0T2JqKSkgJiYgIW1lcmdlZFtwcm9wXSkge1xuICAgICAgICBkZXN0T2JqW3Byb3BdID0gc291cmNlT2JqW3Byb3BdO1xuICAgICAgICBtZXJnZWRbcHJvcF0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICBzb3VyY2VPYmogPSBmaWx0ZXIgIT09IGZhbHNlICYmIGdldFByb3RvdHlwZU9mKHNvdXJjZU9iaik7XG4gIH0gd2hpbGUgKHNvdXJjZU9iaiAmJiAoIWZpbHRlciB8fCBmaWx0ZXIoc291cmNlT2JqLCBkZXN0T2JqKSkgJiYgc291cmNlT2JqICE9PSBPYmplY3QucHJvdG90eXBlKTtcblxuICByZXR1cm4gZGVzdE9iajtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgYSBzdHJpbmcgZW5kcyB3aXRoIHRoZSBjaGFyYWN0ZXJzIG9mIGEgc3BlY2lmaWVkIHN0cmluZ1xuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBzZWFyY2hTdHJpbmdcbiAqIEBwYXJhbSB7TnVtYmVyfSBbcG9zaXRpb249IDBdXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmNvbnN0IGVuZHNXaXRoID0gKHN0ciwgc2VhcmNoU3RyaW5nLCBwb3NpdGlvbikgPT4ge1xuICBzdHIgPSBTdHJpbmcoc3RyKTtcbiAgaWYgKHBvc2l0aW9uID09PSB1bmRlZmluZWQgfHwgcG9zaXRpb24gPiBzdHIubGVuZ3RoKSB7XG4gICAgcG9zaXRpb24gPSBzdHIubGVuZ3RoO1xuICB9XG4gIHBvc2l0aW9uIC09IHNlYXJjaFN0cmluZy5sZW5ndGg7XG4gIGNvbnN0IGxhc3RJbmRleCA9IHN0ci5pbmRleE9mKHNlYXJjaFN0cmluZywgcG9zaXRpb24pO1xuICByZXR1cm4gbGFzdEluZGV4ICE9PSAtMSAmJiBsYXN0SW5kZXggPT09IHBvc2l0aW9uO1xufVxuXG5cbi8qKlxuICogUmV0dXJucyBuZXcgYXJyYXkgZnJvbSBhcnJheSBsaWtlIG9iamVjdCBvciBudWxsIGlmIGZhaWxlZFxuICpcbiAqIEBwYXJhbSB7Kn0gW3RoaW5nXVxuICpcbiAqIEByZXR1cm5zIHs/QXJyYXl9XG4gKi9cbmNvbnN0IHRvQXJyYXkgPSAodGhpbmcpID0+IHtcbiAgaWYgKCF0aGluZykgcmV0dXJuIG51bGw7XG4gIGlmIChpc0FycmF5KHRoaW5nKSkgcmV0dXJuIHRoaW5nO1xuICBsZXQgaSA9IHRoaW5nLmxlbmd0aDtcbiAgaWYgKCFpc051bWJlcihpKSkgcmV0dXJuIG51bGw7XG4gIGNvbnN0IGFyciA9IG5ldyBBcnJheShpKTtcbiAgd2hpbGUgKGktLSA+IDApIHtcbiAgICBhcnJbaV0gPSB0aGluZ1tpXTtcbiAgfVxuICByZXR1cm4gYXJyO1xufVxuXG4vKipcbiAqIENoZWNraW5nIGlmIHRoZSBVaW50OEFycmF5IGV4aXN0cyBhbmQgaWYgaXQgZG9lcywgaXQgcmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgY2hlY2tzIGlmIHRoZVxuICogdGhpbmcgcGFzc2VkIGluIGlzIGFuIGluc3RhbmNlIG9mIFVpbnQ4QXJyYXlcbiAqXG4gKiBAcGFyYW0ge1R5cGVkQXJyYXl9XG4gKlxuICogQHJldHVybnMge0FycmF5fVxuICovXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuY29uc3QgaXNUeXBlZEFycmF5ID0gKFR5cGVkQXJyYXkgPT4ge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuICByZXR1cm4gdGhpbmcgPT4ge1xuICAgIHJldHVybiBUeXBlZEFycmF5ICYmIHRoaW5nIGluc3RhbmNlb2YgVHlwZWRBcnJheTtcbiAgfTtcbn0pKHR5cGVvZiBVaW50OEFycmF5ICE9PSAndW5kZWZpbmVkJyAmJiBnZXRQcm90b3R5cGVPZihVaW50OEFycmF5KSk7XG5cbi8qKlxuICogRm9yIGVhY2ggZW50cnkgaW4gdGhlIG9iamVjdCwgY2FsbCB0aGUgZnVuY3Rpb24gd2l0aCB0aGUga2V5IGFuZCB2YWx1ZS5cbiAqXG4gKiBAcGFyYW0ge09iamVjdDxhbnksIGFueT59IG9iaiAtIFRoZSBvYmplY3QgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gLSBUaGUgZnVuY3Rpb24gdG8gY2FsbCBmb3IgZWFjaCBlbnRyeS5cbiAqXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuY29uc3QgZm9yRWFjaEVudHJ5ID0gKG9iaiwgZm4pID0+IHtcbiAgY29uc3QgZ2VuZXJhdG9yID0gb2JqICYmIG9ialtTeW1ib2wuaXRlcmF0b3JdO1xuXG4gIGNvbnN0IGl0ZXJhdG9yID0gZ2VuZXJhdG9yLmNhbGwob2JqKTtcblxuICBsZXQgcmVzdWx0O1xuXG4gIHdoaWxlICgocmVzdWx0ID0gaXRlcmF0b3IubmV4dCgpKSAmJiAhcmVzdWx0LmRvbmUpIHtcbiAgICBjb25zdCBwYWlyID0gcmVzdWx0LnZhbHVlO1xuICAgIGZuLmNhbGwob2JqLCBwYWlyWzBdLCBwYWlyWzFdKTtcbiAgfVxufVxuXG4vKipcbiAqIEl0IHRha2VzIGEgcmVndWxhciBleHByZXNzaW9uIGFuZCBhIHN0cmluZywgYW5kIHJldHVybnMgYW4gYXJyYXkgb2YgYWxsIHRoZSBtYXRjaGVzXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHJlZ0V4cCAtIFRoZSByZWd1bGFyIGV4cHJlc3Npb24gdG8gbWF0Y2ggYWdhaW5zdC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgLSBUaGUgc3RyaW5nIHRvIHNlYXJjaC5cbiAqXG4gKiBAcmV0dXJucyB7QXJyYXk8Ym9vbGVhbj59XG4gKi9cbmNvbnN0IG1hdGNoQWxsID0gKHJlZ0V4cCwgc3RyKSA9PiB7XG4gIGxldCBtYXRjaGVzO1xuICBjb25zdCBhcnIgPSBbXTtcblxuICB3aGlsZSAoKG1hdGNoZXMgPSByZWdFeHAuZXhlYyhzdHIpKSAhPT0gbnVsbCkge1xuICAgIGFyci5wdXNoKG1hdGNoZXMpO1xuICB9XG5cbiAgcmV0dXJuIGFycjtcbn1cblxuLyogQ2hlY2tpbmcgaWYgdGhlIGtpbmRPZlRlc3QgZnVuY3Rpb24gcmV0dXJucyB0cnVlIHdoZW4gcGFzc2VkIGFuIEhUTUxGb3JtRWxlbWVudC4gKi9cbmNvbnN0IGlzSFRNTEZvcm0gPSBraW5kT2ZUZXN0KCdIVE1MRm9ybUVsZW1lbnQnKTtcblxuY29uc3QgdG9DYW1lbENhc2UgPSBzdHIgPT4ge1xuICByZXR1cm4gc3RyLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvWy1fXFxzXShbYS16XFxkXSkoXFx3KikvZyxcbiAgICBmdW5jdGlvbiByZXBsYWNlcihtLCBwMSwgcDIpIHtcbiAgICAgIHJldHVybiBwMS50b1VwcGVyQ2FzZSgpICsgcDI7XG4gICAgfVxuICApO1xufTtcblxuLyogQ3JlYXRpbmcgYSBmdW5jdGlvbiB0aGF0IHdpbGwgY2hlY2sgaWYgYW4gb2JqZWN0IGhhcyBhIHByb3BlcnR5LiAqL1xuY29uc3QgaGFzT3duUHJvcGVydHkgPSAoKHtoYXNPd25Qcm9wZXJ0eX0pID0+IChvYmosIHByb3ApID0+IGhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkoT2JqZWN0LnByb3RvdHlwZSk7XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBSZWdFeHAgb2JqZWN0XG4gKlxuICogQHBhcmFtIHsqfSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFJlZ0V4cCBvYmplY3QsIG90aGVyd2lzZSBmYWxzZVxuICovXG5jb25zdCBpc1JlZ0V4cCA9IGtpbmRPZlRlc3QoJ1JlZ0V4cCcpO1xuXG5jb25zdCByZWR1Y2VEZXNjcmlwdG9ycyA9IChvYmosIHJlZHVjZXIpID0+IHtcbiAgY29uc3QgZGVzY3JpcHRvcnMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhvYmopO1xuICBjb25zdCByZWR1Y2VkRGVzY3JpcHRvcnMgPSB7fTtcblxuICBmb3JFYWNoKGRlc2NyaXB0b3JzLCAoZGVzY3JpcHRvciwgbmFtZSkgPT4ge1xuICAgIGlmIChyZWR1Y2VyKGRlc2NyaXB0b3IsIG5hbWUsIG9iaikgIT09IGZhbHNlKSB7XG4gICAgICByZWR1Y2VkRGVzY3JpcHRvcnNbbmFtZV0gPSBkZXNjcmlwdG9yO1xuICAgIH1cbiAgfSk7XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMob2JqLCByZWR1Y2VkRGVzY3JpcHRvcnMpO1xufVxuXG4vKipcbiAqIE1ha2VzIGFsbCBtZXRob2RzIHJlYWQtb25seVxuICogQHBhcmFtIHtPYmplY3R9IG9ialxuICovXG5cbmNvbnN0IGZyZWV6ZU1ldGhvZHMgPSAob2JqKSA9PiB7XG4gIHJlZHVjZURlc2NyaXB0b3JzKG9iaiwgKGRlc2NyaXB0b3IsIG5hbWUpID0+IHtcbiAgICAvLyBza2lwIHJlc3RyaWN0ZWQgcHJvcHMgaW4gc3RyaWN0IG1vZGVcbiAgICBpZiAoaXNGdW5jdGlvbihvYmopICYmIFsnYXJndW1lbnRzJywgJ2NhbGxlcicsICdjYWxsZWUnXS5pbmRleE9mKG5hbWUpICE9PSAtMSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0IHZhbHVlID0gb2JqW25hbWVdO1xuXG4gICAgaWYgKCFpc0Z1bmN0aW9uKHZhbHVlKSkgcmV0dXJuO1xuXG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZmFsc2U7XG5cbiAgICBpZiAoJ3dyaXRhYmxlJyBpbiBkZXNjcmlwdG9yKSB7XG4gICAgICBkZXNjcmlwdG9yLndyaXRhYmxlID0gZmFsc2U7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCFkZXNjcmlwdG9yLnNldCkge1xuICAgICAgZGVzY3JpcHRvci5zZXQgPSAoKSA9PiB7XG4gICAgICAgIHRocm93IEVycm9yKCdDYW4gbm90IHJld3JpdGUgcmVhZC1vbmx5IG1ldGhvZCBcXCcnICsgbmFtZSArICdcXCcnKTtcbiAgICAgIH07XG4gICAgfVxuICB9KTtcbn1cblxuY29uc3QgdG9PYmplY3RTZXQgPSAoYXJyYXlPclN0cmluZywgZGVsaW1pdGVyKSA9PiB7XG4gIGNvbnN0IG9iaiA9IHt9O1xuXG4gIGNvbnN0IGRlZmluZSA9IChhcnIpID0+IHtcbiAgICBhcnIuZm9yRWFjaCh2YWx1ZSA9PiB7XG4gICAgICBvYmpbdmFsdWVdID0gdHJ1ZTtcbiAgICB9KTtcbiAgfVxuXG4gIGlzQXJyYXkoYXJyYXlPclN0cmluZykgPyBkZWZpbmUoYXJyYXlPclN0cmluZykgOiBkZWZpbmUoU3RyaW5nKGFycmF5T3JTdHJpbmcpLnNwbGl0KGRlbGltaXRlcikpO1xuXG4gIHJldHVybiBvYmo7XG59XG5cbmNvbnN0IG5vb3AgPSAoKSA9PiB7fVxuXG5jb25zdCB0b0Zpbml0ZU51bWJlciA9ICh2YWx1ZSwgZGVmYXVsdFZhbHVlKSA9PiB7XG4gIHZhbHVlID0gK3ZhbHVlO1xuICByZXR1cm4gTnVtYmVyLmlzRmluaXRlKHZhbHVlKSA/IHZhbHVlIDogZGVmYXVsdFZhbHVlO1xufVxuXG5jb25zdCBBTFBIQSA9ICdhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5eidcblxuY29uc3QgRElHSVQgPSAnMDEyMzQ1Njc4OSc7XG5cbmNvbnN0IEFMUEhBQkVUID0ge1xuICBESUdJVCxcbiAgQUxQSEEsXG4gIEFMUEhBX0RJR0lUOiBBTFBIQSArIEFMUEhBLnRvVXBwZXJDYXNlKCkgKyBESUdJVFxufVxuXG5jb25zdCBnZW5lcmF0ZVN0cmluZyA9IChzaXplID0gMTYsIGFscGhhYmV0ID0gQUxQSEFCRVQuQUxQSEFfRElHSVQpID0+IHtcbiAgbGV0IHN0ciA9ICcnO1xuICBjb25zdCB7bGVuZ3RofSA9IGFscGhhYmV0O1xuICB3aGlsZSAoc2l6ZS0tKSB7XG4gICAgc3RyICs9IGFscGhhYmV0W01hdGgucmFuZG9tKCkgKiBsZW5ndGh8MF1cbiAgfVxuXG4gIHJldHVybiBzdHI7XG59XG5cbi8qKlxuICogSWYgdGhlIHRoaW5nIGlzIGEgRm9ybURhdGEgb2JqZWN0LCByZXR1cm4gdHJ1ZSwgb3RoZXJ3aXNlIHJldHVybiBmYWxzZS5cbiAqXG4gKiBAcGFyYW0ge3Vua25vd259IHRoaW5nIC0gVGhlIHRoaW5nIHRvIGNoZWNrLlxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBpc1NwZWNDb21wbGlhbnRGb3JtKHRoaW5nKSB7XG4gIHJldHVybiAhISh0aGluZyAmJiBpc0Z1bmN0aW9uKHRoaW5nLmFwcGVuZCkgJiYgdGhpbmdbU3ltYm9sLnRvU3RyaW5nVGFnXSA9PT0gJ0Zvcm1EYXRhJyAmJiB0aGluZ1tTeW1ib2wuaXRlcmF0b3JdKTtcbn1cblxuY29uc3QgdG9KU09OT2JqZWN0ID0gKG9iaikgPT4ge1xuICBjb25zdCBzdGFjayA9IG5ldyBBcnJheSgxMCk7XG5cbiAgY29uc3QgdmlzaXQgPSAoc291cmNlLCBpKSA9PiB7XG5cbiAgICBpZiAoaXNPYmplY3Qoc291cmNlKSkge1xuICAgICAgaWYgKHN0YWNrLmluZGV4T2Yoc291cmNlKSA+PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYoISgndG9KU09OJyBpbiBzb3VyY2UpKSB7XG4gICAgICAgIHN0YWNrW2ldID0gc291cmNlO1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBpc0FycmF5KHNvdXJjZSkgPyBbXSA6IHt9O1xuXG4gICAgICAgIGZvckVhY2goc291cmNlLCAodmFsdWUsIGtleSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHJlZHVjZWRWYWx1ZSA9IHZpc2l0KHZhbHVlLCBpICsgMSk7XG4gICAgICAgICAgIWlzVW5kZWZpbmVkKHJlZHVjZWRWYWx1ZSkgJiYgKHRhcmdldFtrZXldID0gcmVkdWNlZFZhbHVlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc3RhY2tbaV0gPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc291cmNlO1xuICB9XG5cbiAgcmV0dXJuIHZpc2l0KG9iaiwgMCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgaXNBcnJheSxcbiAgaXNBcnJheUJ1ZmZlcixcbiAgaXNCdWZmZXIsXG4gIGlzRm9ybURhdGEsXG4gIGlzQXJyYXlCdWZmZXJWaWV3LFxuICBpc1N0cmluZyxcbiAgaXNOdW1iZXIsXG4gIGlzQm9vbGVhbixcbiAgaXNPYmplY3QsXG4gIGlzUGxhaW5PYmplY3QsXG4gIGlzVW5kZWZpbmVkLFxuICBpc0RhdGUsXG4gIGlzRmlsZSxcbiAgaXNCbG9iLFxuICBpc1JlZ0V4cCxcbiAgaXNGdW5jdGlvbixcbiAgaXNTdHJlYW0sXG4gIGlzVVJMU2VhcmNoUGFyYW1zLFxuICBpc1R5cGVkQXJyYXksXG4gIGlzRmlsZUxpc3QsXG4gIGZvckVhY2gsXG4gIG1lcmdlLFxuICBleHRlbmQsXG4gIHRyaW0sXG4gIHN0cmlwQk9NLFxuICBpbmhlcml0cyxcbiAgdG9GbGF0T2JqZWN0LFxuICBraW5kT2YsXG4gIGtpbmRPZlRlc3QsXG4gIGVuZHNXaXRoLFxuICB0b0FycmF5LFxuICBmb3JFYWNoRW50cnksXG4gIG1hdGNoQWxsLFxuICBpc0hUTUxGb3JtLFxuICBoYXNPd25Qcm9wZXJ0eSxcbiAgaGFzT3duUHJvcDogaGFzT3duUHJvcGVydHksIC8vIGFuIGFsaWFzIHRvIGF2b2lkIEVTTGludCBuby1wcm90b3R5cGUtYnVpbHRpbnMgZGV0ZWN0aW9uXG4gIHJlZHVjZURlc2NyaXB0b3JzLFxuICBmcmVlemVNZXRob2RzLFxuICB0b09iamVjdFNldCxcbiAgdG9DYW1lbENhc2UsXG4gIG5vb3AsXG4gIHRvRmluaXRlTnVtYmVyLFxuICBmaW5kS2V5LFxuICBnbG9iYWw6IF9nbG9iYWwsXG4gIGlzQ29udGV4dERlZmluZWQsXG4gIEFMUEhBQkVULFxuICBnZW5lcmF0ZVN0cmluZyxcbiAgaXNTcGVjQ29tcGxpYW50Rm9ybSxcbiAgdG9KU09OT2JqZWN0XG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgYWxlcnQgfSBmcm9tICdAcG5vdGlmeS9jb3JlJztcclxuaW1wb3J0ICdAcG5vdGlmeS9jb3JlL2Rpc3QvUE5vdGlmeS5jc3MnO1xyXG5pbXBvcnQgJ0Bwbm90aWZ5L2NvcmUvZGlzdC9CcmlnaHRUaGVtZS5jc3MnO1xyXG5pbXBvcnQgbnVtZXJhbCBmcm9tICdudW1lcmFsJztcclxuXHJcbmltcG9ydCAnLi9zdHlsZXMvaW5kZXguc2Nzcyc7XHJcbmltcG9ydCBwaG90b0NhcmRUZW1wbGF0ZSBmcm9tICcuL3BhcnRpYWxzL3Bob3RvQ2FyZC5oYnMnO1xyXG5cclxuLy8gVmFyc1xyXG5cclxuY29uc3QgZmV0Y2ggPSB7XHJcbiAgYXBpVG9rZW46ICczMzY2NTc1Ni03OTcwNTM0NzFhZjJhNDM3NzJmYjIyNmU1JyxcclxuICBhcGlMaW5rOlxyXG4gICAgJ2h0dHBzOi8vcGl4YWJheS5jb20vYXBpLz9pbWFnZV90eXBlPXBob3RvJm9yaWVudGF0aW9uPWhvcml6b250YWwmcT3Rh9GC0L5f0LjRgdC60LDRgtGMJnBhZ2U90L3QvtC80LXRgF/RgdGC0YDQsNC90LjRhtGLJnBlcl9wYWdlPTEyJmtleT3RgtCy0L7QuV/QutC70Y7RhycsXHJcbn07XHJcblxyXG5jb25zdCByZWZzID0ge1xyXG4gIGdhbGxlcnk6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYWxsZXJ5JyksXHJcbiAgc2VhcmNoRm9ybTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlYXJjaC1mb3JtJyksXHJcbiAgbG9hZE1vcmVCdG46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsb2FkTW9yZUJ0bicpLFxyXG4gIGxvYWRlcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvYWRlcicpLFxyXG4gIGJvZHk6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKSxcclxuICBtb2RhbDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJyksXHJcbiAgc2Nyb2xsQnRuOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2Nyb2xsLWJ0bicpLFxyXG59O1xyXG5cclxubGV0IHBhZ2UgPSAxO1xyXG5sZXQgcXVlcnkgPSAnJztcclxubGV0IHBlclBhZ2UgPSAxMjtcclxubGV0IHBob3RvQ2FyZHM7XHJcbmxldCBtb2RhbEltYWdlID0gJyc7XHJcblxyXG4vLyBGdW5jdGlvbnNcclxuXHJcbmZ1bmN0aW9uIGZpbmRQaG90b3MoKSB7XHJcbiAgcGhvdG9DYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5waG90by1jYXJkJyk7XHJcblxyXG4gIHBob3RvQ2FyZHMuZm9yRWFjaCgocGhvdG9DYXJkKSA9PiB7XHJcbiAgICBwaG90b0NhcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICBpZiAoIWUudGFyZ2V0LmRhdGFzZXQudXJsKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBtb2RhbEltYWdlID0gcmVmcy5tb2RhbC5maXJzdEVsZW1lbnRDaGlsZDtcclxuICAgICAgbW9kYWxJbWFnZS5zcmMgPSBlLnRhcmdldC5kYXRhc2V0LnVybDtcclxuICAgICAgcmVmcy5tb2RhbC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgcmVmcy5ib2R5LmNsYXNzTGlzdC5hZGQoJ2ZpeGVkJyk7XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgcmVmcy5tb2RhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICBpZiAoIWUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnbW9kYWxfX2ltZycpICYmIHJlZnMubW9kYWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xyXG4gICAgICByZWZzLm1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICByZWZzLmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnZml4ZWQnKTtcclxuXHJcbiAgICAgIG1vZGFsSW1hZ2Uuc3JjID0gJyc7XHJcbiAgICAgIG1vZGFsSW1hZ2UgPSAnJztcclxuICAgIH1cclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZmV0Y2hSZXF1ZXN0KCkge1xyXG4gIGlmIChwYWdlID4gMSkge1xyXG4gICAgcmVmcy5sb2FkTW9yZUJ0bi50ZXh0Q29udGVudCA9ICdMb2FkaW5nLi4uJztcclxuICAgIHJlZnMubG9hZGVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJlZnMubG9hZE1vcmVCdG4uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIHJlZnMubG9hZGVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gIH1cclxuXHJcbiAgYXhpb3NcclxuICAgIC5nZXQoYGh0dHBzOi8vcGl4YWJheS5jb20vYXBpYCwge1xyXG4gICAgICBwYXJhbXM6IHtcclxuICAgICAgICBxOiBxdWVyeSxcclxuICAgICAgICBwYWdlLFxyXG4gICAgICAgIHBlcl9wYWdlOiBwZXJQYWdlLFxyXG4gICAgICAgIGtleTogZmV0Y2guYXBpVG9rZW4sXHJcbiAgICAgICAgaW1hZ2VfdHlwZTogJ3Bob3RvJyxcclxuICAgICAgICBvcmllbnRhdGlvbjogJ2hvcml6b250YWwnLFxyXG4gICAgICB9LFxyXG4gICAgfSlcclxuICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgcmVmcy5sb2FkTW9yZUJ0bi50ZXh0Q29udGVudCA9ICdMb2FkIG1vcmUnO1xyXG5cclxuICAgICAgaWYgKHJlcy5kYXRhLmhpdHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgYWxlcnQoe1xyXG4gICAgICAgICAgdGV4dDogJ9Cd0ZbRh9C+0LPQviDQvdC1INC30L3QsNC50LTQtdC90L4nLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJlZnMubG9hZE1vcmVCdG4uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBwYWdlKys7XHJcbiAgICAgIGxldCBodG1sID0gJyc7XHJcblxyXG4gICAgICByZXMuZGF0YS5oaXRzLmZvckVhY2goKGhpdCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGhpdEh0bWwgPSBwaG90b0NhcmRUZW1wbGF0ZShoaXQpO1xyXG4gICAgICAgIGh0bWwgKz0gaGl0SHRtbDtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICByZWZzLmdhbGxlcnkuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBodG1sKTtcclxuXHJcbiAgICAgIGlmIChyZXMuZGF0YS5oaXRzLmxlbmd0aCA8IHBlclBhZ2UpIHtcclxuICAgICAgICByZWZzLmxvYWRNb3JlQnRuLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmVmcy5sb2FkTW9yZUJ0bi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICByZWZzLmxvYWRNb3JlQnRuLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZpbmRQaG90b3MoKTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgIGFsZXJ0KHtcclxuICAgICAgICB0aXRsZTogJ9Cd0LXQstGW0LTQvtC80LAg0L/QvtC80LjQu9C60LAnLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHJlZnMubG9hZE1vcmVCdG4uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIH0pXHJcbiAgICAuZmluYWxseSgoKSA9PiB7XHJcbiAgICAgIHJlZnMubG9hZGVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICB9KTtcclxufVxyXG5cclxuLy8gRXZlbnRzIGxpc3RlbmVyc1xyXG5cclxucmVmcy5zZWFyY2hGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICBxdWVyeSA9IGUudGFyZ2V0LmVsZW1lbnRzLnF1ZXJ5LnZhbHVlLnRyaW0oKTtcclxuXHJcbiAgaWYgKHF1ZXJ5ID09PSAnJykge1xyXG4gICAgYWxlcnQoe1xyXG4gICAgICB0ZXh0OiAn0JLQstC10LTRltGC0Ywg0L/QvtGI0YPQutC+0LLQuNC5INC30LDQv9C40YInLFxyXG4gICAgfSk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBpZiAocXVlcnkubGVuZ3RoID49IDEwMCkge1xyXG4gICAgYWxlcnQoe1xyXG4gICAgICB0ZXh0OiAn0JfQsNC/0LjRgiDQv9C+0LLQuNC90LXQvSDQvNGW0YHRgtC40YLQuCDQvdC1INCx0ZbQu9GM0YjQtSAxMDAg0YHQuNC80LLQvtC70ZbQsicsXHJcbiAgICB9KTtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIHJlZnMuZ2FsbGVyeS5pbm5lckhUTUwgPSAnJztcclxuICBwYWdlID0gMTtcclxuXHJcbiAgZmV0Y2hSZXF1ZXN0KCk7XHJcbn0pO1xyXG5cclxucmVmcy5sb2FkTW9yZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgcmVmcy5sb2FkTW9yZUJ0bi5kaXNhYmxlZCA9IHRydWU7XHJcbiAgZmV0Y2hSZXF1ZXN0KCk7XHJcbn0pO1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIChlKSA9PiB7XHJcbiAgaWYgKHdpbmRvdy5zY3JvbGxZID4gNDAwKSB7XHJcbiAgICByZWZzLnNjcm9sbEJ0bi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICB9IGVsc2Uge1xyXG4gICAgcmVmcy5zY3JvbGxCdG4uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgfVxyXG59KTtcclxuXHJcbnJlZnMuc2Nyb2xsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICB3aW5kb3cuc2Nyb2xsVG8oe1xyXG4gICAgdG9wOiAwLFxyXG4gICAgYmVoYXZpb3I6ICdzbW9vdGgnLFxyXG4gIH0pO1xyXG59KTtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcclxuICBpZiAoZS5jb2RlID09PSAnRXNjYXBlJyAmJiByZWZzLm1vZGFsLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcclxuICAgIHJlZnMubW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICByZWZzLmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnZml4ZWQnKTtcclxuXHJcbiAgICBtb2RhbEltYWdlLnNyYyA9ICcnO1xyXG4gICAgbW9kYWxJbWFnZSA9ICcnO1xyXG4gIH1cclxufSk7XHJcbiJdLCJuYW1lcyI6WyJheGlvcyIsImFsZXJ0IiwibnVtZXJhbCIsInBob3RvQ2FyZFRlbXBsYXRlIiwiZmV0Y2giLCJhcGlUb2tlbiIsImFwaUxpbmsiLCJyZWZzIiwiZ2FsbGVyeSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNlYXJjaEZvcm0iLCJsb2FkTW9yZUJ0biIsImxvYWRlciIsImJvZHkiLCJtb2RhbCIsInNjcm9sbEJ0biIsInBhZ2UiLCJxdWVyeSIsInBlclBhZ2UiLCJwaG90b0NhcmRzIiwibW9kYWxJbWFnZSIsImZpbmRQaG90b3MiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsInBob3RvQ2FyZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwidGFyZ2V0IiwiZGF0YXNldCIsInVybCIsImZpcnN0RWxlbWVudENoaWxkIiwic3JjIiwiY2xhc3NMaXN0IiwiYWRkIiwiY29udGFpbnMiLCJyZW1vdmUiLCJmZXRjaFJlcXVlc3QiLCJ0ZXh0Q29udGVudCIsInN0eWxlIiwiZGlzcGxheSIsImdldCIsInBhcmFtcyIsInEiLCJwZXJfcGFnZSIsImtleSIsImltYWdlX3R5cGUiLCJvcmllbnRhdGlvbiIsInRoZW4iLCJyZXMiLCJkYXRhIiwiaGl0cyIsImxlbmd0aCIsInRleHQiLCJodG1sIiwiaGl0IiwiaGl0SHRtbCIsImluc2VydEFkamFjZW50SFRNTCIsImRpc2FibGVkIiwiZXJyb3IiLCJ0aXRsZSIsInByZXZlbnREZWZhdWx0IiwiZWxlbWVudHMiLCJ2YWx1ZSIsInRyaW0iLCJpbm5lckhUTUwiLCJ3aW5kb3ciLCJzY3JvbGxZIiwic2Nyb2xsVG8iLCJ0b3AiLCJiZWhhdmlvciIsImNvZGUiXSwic291cmNlUm9vdCI6IiJ9