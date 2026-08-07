const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./Products-Dziclxi9.js","./SEO-tAcnYdzi.js","./ProductDetail-Zp3qZwOo.js","./About-gF6j7xxF.js","./Contact-DAhpdWiy.js","./Blog-S_QD1nhZ.js","./BlogPost-CF-MwMBH.js","./FancyPaperGallery-CvjxsuCg.js","./Industries-Cq4IzVMg.js","./box-RfXWI2xz.js","./Industries-A8ei1avt.css","./IndustryDetail-CV8I-5ru.js","./Materials-D3v77NDG.js","./pulpMaterialsData-TTMci1Aj.js","./materials-page-BZDkJhUe.css","./Processing-injXHGF2.js","./Quality-eSAlPaXG.js","./FAQ-dOvLMHTl.js","./HowToOrder-DL01b_EM.js","./Resources-CKIW1mj_.js","./PulpMaterials-BevYc4VH.js","./PulpArticle-BM2-HU9R.js"])))=>i.map(i=>d[i]);
import{a as e,c as t,d as n,f as r,l as i,o as a,u as o}from"./SEO-tAcnYdzi.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var s=n((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m)if(n(c)!==null)m=!0,ee||(ee=!0,re());else{var t=n(l);t!==null&&oe(x,t.startTime-e)}}var ee=!1,S=-1,te=5,C=-1;function w(){return g?!0:!(e.unstable_now()-C<te)}function ne(){if(g=!1,ee){var t=e.unstable_now();C=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(S),S=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&w());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&oe(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?re():ee=!1}}}var re;if(typeof y==`function`)re=function(){y(ne)};else if(typeof MessageChannel<`u`){var ie=new MessageChannel,ae=ie.port2;ie.port1.onmessage=ne,re=function(){ae.postMessage(null)}}else re=function(){_(ne,0)};function oe(t,n){S=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):te=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(S),S=-1):h=!0,oe(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,ee||(ee=!0,re()))),r},e.unstable_shouldYield=w,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),c=n(((e,t)=>{t.exports=s()})),l=n((e=>{var t=o();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function s(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var c=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function l(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return s(e,t,null,r)},e.flushSync=function(e){var t=c.T,n=i.p;try{if(c.T=null,i.p=2,e)return e()}finally{c.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=l(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`)if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=l(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=l(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`)if(t){var n=l(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return c.H.useFormState(e,t,n)},e.useFormStatus=function(){return c.H.useHostTransitionStatus()},e.version=`19.2.7`})),u=n(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=l()})),d=n((e=>{var t=c(),n=o(),r=u();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function s(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function l(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function d(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function f(e){if(s(e)!==e)throw Error(i(188))}function p(e){var t=e.alternate;if(!t){if(t=s(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var o=a.alternate;if(o===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===o.child){for(o=a.child;o;){if(o===n)return f(a),e;if(o===r)return f(a),t;o=o.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=o;else{for(var c=!1,l=a.child;l;){if(l===n){c=!0,n=a,r=o;break}if(l===r){c=!0,r=a,n=o;break}l=l.sibling}if(!c){for(l=o.child;l;){if(l===n){c=!0,n=o,r=a;break}if(l===r){c=!0,r=o,n=a;break}l=l.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function m(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=m(e),t!==null)return t;e=e.sibling}return null}var h=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),ee=Symbol.for(`react.consumer`),S=Symbol.for(`react.context`),te=Symbol.for(`react.forward_ref`),C=Symbol.for(`react.suspense`),w=Symbol.for(`react.suspense_list`),ne=Symbol.for(`react.memo`),re=Symbol.for(`react.lazy`),ie=Symbol.for(`react.activity`),ae=Symbol.for(`react.memo_cache_sentinel`),oe=Symbol.iterator;function se(e){return typeof e!=`object`||!e?null:(e=oe&&e[oe]||e[`@@iterator`],typeof e==`function`?e:null)}var ce=Symbol.for(`react.client.reference`);function le(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===ce?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case C:return`Suspense`;case w:return`SuspenseList`;case ie:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case S:return e.displayName||`Context`;case ee:return(e._context.displayName||`Context`)+`.Consumer`;case te:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case ne:return t=e.displayName||null,t===null?le(e.type)||`Memo`:t;case re:t=e._payload,e=e._init;try{return le(e(t))}catch{}}return null}var ue=Array.isArray,T=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,E=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,de={pending:!1,data:null,method:null,action:null},fe=[],pe=-1;function me(e){return{current:e}}function D(e){0>pe||(e.current=fe[pe],fe[pe]=null,pe--)}function O(e,t){pe++,fe[pe]=e.current,e.current=t}var he=me(null),ge=me(null),_e=me(null),ve=me(null);function ye(e,t){switch(O(_e,t),O(ge,e),O(he,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Vd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Vd(t),e=Hd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}D(he),O(he,e)}function be(){D(he),D(ge),D(_e)}function xe(e){e.memoizedState!==null&&O(ve,e);var t=he.current,n=Hd(t,e.type);t!==n&&(O(ge,e),O(he,n))}function Se(e){ge.current===e&&(D(he),D(ge)),ve.current===e&&(D(ve),Qf._currentValue=de)}var Ce,we;function Te(e){if(Ce===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);Ce=t&&t[1]||``,we=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+Ce+e+we}var Ee=!1;function De(e,t){if(!e||Ee)return``;Ee=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{Ee=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?Te(n):``}function Oe(e,t){switch(e.tag){case 26:case 27:case 5:return Te(e.type);case 16:return Te(`Lazy`);case 13:return e.child!==t&&t!==null?Te(`Suspense Fallback`):Te(`Suspense`);case 19:return Te(`SuspenseList`);case 0:case 15:return De(e.type,!1);case 11:return De(e.type.render,!1);case 1:return De(e.type,!0);case 31:return Te(`Activity`);default:return``}}function ke(e){try{var t=``,n=null;do t+=Oe(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var Ae=Object.prototype.hasOwnProperty,je=t.unstable_scheduleCallback,Me=t.unstable_cancelCallback,Ne=t.unstable_shouldYield,Pe=t.unstable_requestPaint,Fe=t.unstable_now,Ie=t.unstable_getCurrentPriorityLevel,Le=t.unstable_ImmediatePriority,Re=t.unstable_UserBlockingPriority,ze=t.unstable_NormalPriority,Be=t.unstable_LowPriority,Ve=t.unstable_IdlePriority,He=t.log,Ue=t.unstable_setDisableYieldValue,We=null,Ge=null;function Ke(e){if(typeof He==`function`&&Ue(e),Ge&&typeof Ge.setStrictMode==`function`)try{Ge.setStrictMode(We,e)}catch{}}var qe=Math.clz32?Math.clz32:Xe,Je=Math.log,Ye=Math.LN2;function Xe(e){return e>>>=0,e===0?32:31-(Je(e)/Ye|0)|0}var Ze=256,Qe=262144,$e=4194304;function et(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function tt(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=et(n))):i=et(o):i=et(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=et(n))):i=et(o)):i=et(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function nt(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function rt(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function it(){var e=$e;return $e<<=1,!($e&62914560)&&($e=4194304),e}function at(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ot(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function st(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-qe(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&ct(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function ct(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-qe(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function lt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-qe(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function ut(e,t){var n=t&-t;return n=n&42?1:dt(n),(n&(e.suspendedLanes|t))===0?n:0}function dt(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ft(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function pt(){var e=E.p;return e===0?(e=window.event,e===void 0?32:mp(e.type)):e}function mt(e,t){var n=E.p;try{return E.p=e,t()}finally{E.p=n}}var ht=Math.random().toString(36).slice(2),gt=`__reactFiber$`+ht,_t=`__reactProps$`+ht,vt=`__reactContainer$`+ht,yt=`__reactEvents$`+ht,bt=`__reactListeners$`+ht,xt=`__reactHandles$`+ht,St=`__reactResources$`+ht,Ct=`__reactMarker$`+ht;function wt(e){delete e[gt],delete e[_t],delete e[yt],delete e[bt],delete e[xt]}function Tt(e){var t=e[gt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[vt]||n[gt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[gt])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function Et(e){if(e=e[gt]||e[vt]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Dt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function Ot(e){var t=e[St];return t||=e[St]={hoistableStyles:new Map,hoistableScripts:new Map},t}function kt(e){e[Ct]=!0}var At=new Set,jt={};function Mt(e,t){Nt(e,t),Nt(e+`Capture`,t)}function Nt(e,t){for(jt[e]=t,e=0;e<t.length;e++)At.add(t[e])}var Pt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Ft={},It={};function Lt(e){return Ae.call(It,e)?!0:Ae.call(Ft,e)?!1:Pt.test(e)?It[e]=!0:(Ft[e]=!0,!1)}function Rt(e,t,n){if(Lt(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}function zt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function Bt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function Vt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function k(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Ht(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ut(e){if(!e._valueTracker){var t=k(e)?`checked`:`value`;e._valueTracker=Ht(e,t,``+e[t])}}function Wt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=k(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function Gt(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var Kt=/[\n"\\]/g;function qt(e){return e.replace(Kt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Jt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Vt(t)):e.value!==``+Vt(t)&&(e.value=``+Vt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Xt(e,o,Vt(n)):Xt(e,o,Vt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Vt(s):e.removeAttribute(`name`)}function Yt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Ut(e);return}n=n==null?``:``+Vt(n),t=t==null?n:``+Vt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Ut(e)}function Xt(e,t,n){t===`number`&&Gt(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Zt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Vt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Qt(e,t,n){if(t!=null&&(t=``+Vt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+Vt(n)}function $t(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(ue(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=Vt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Ut(e)}function en(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var tn=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function nn(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||tn.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function rn(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&nn(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&nn(e,o,t[o])}function an(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var on=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),sn=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function cn(e){return sn.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function ln(){}var un=null;function dn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var fn=null,pn=null;function mn(e){var t=Et(e);if(t&&(e=t.stateNode)){var n=e[_t]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Jt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+qt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[_t]||null;if(!a)throw Error(i(90));Jt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Wt(r)}break a;case`textarea`:Qt(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Zt(e,!!n.multiple,t,!1)}}}var hn=!1;function gn(e,t,n){if(hn)return e(t,n);hn=!0;try{return e(t)}finally{if(hn=!1,(fn!==null||pn!==null)&&(bu(),fn&&(t=fn,e=pn,pn=fn=null,mn(t),e)))for(t=0;t<e.length;t++)mn(e[t])}}function _n(e,t){var n=e.stateNode;if(n===null)return null;var r=n[_t]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var vn=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),yn=!1;if(vn)try{var bn={};Object.defineProperty(bn,"passive",{get:function(){yn=!0}}),window.addEventListener(`test`,bn,bn),window.removeEventListener(`test`,bn,bn)}catch{yn=!1}var xn=null,Sn=null,Cn=null;function wn(){if(Cn)return Cn;var e,t=Sn,n=t.length,r,i=`value`in xn?xn.value:xn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return Cn=i.slice(e,1<r?1-r:void 0)}function Tn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function En(){return!0}function Dn(){return!1}function On(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?En:Dn,this.isPropagationStopped=Dn,this}return h(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=En)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=En)},persist:function(){},isPersistent:En}),t}var kn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},An=On(kn),jn=h({},kn,{view:0,detail:0}),Mn=On(jn),A,Nn,Pn,Fn=h({},jn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Kn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Pn&&(Pn&&e.type===`mousemove`?(A=e.screenX-Pn.screenX,Nn=e.screenY-Pn.screenY):Nn=A=0,Pn=e),A)},movementY:function(e){return`movementY`in e?e.movementY:Nn}}),In=On(Fn),Ln=On(h({},Fn,{dataTransfer:0})),Rn=On(h({},jn,{relatedTarget:0})),zn=On(h({},kn,{animationName:0,elapsedTime:0,pseudoElement:0})),Bn=On(h({},kn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Vn=On(h({},kn,{data:0})),Hn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Un={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Wn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Gn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Wn[e])?!!t[e]:!1}function Kn(){return Gn}var qn=On(h({},jn,{key:function(e){if(e.key){var t=Hn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=Tn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Un[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Kn,charCode:function(e){return e.type===`keypress`?Tn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?Tn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Jn=On(h({},Fn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Yn=On(h({},jn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Kn})),j=On(h({},kn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Xn=On(h({},Fn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Zn=On(h({},kn,{newState:0,oldState:0})),Qn=[9,13,27,32],$n=vn&&`CompositionEvent`in window,er=null;vn&&`documentMode`in document&&(er=document.documentMode);var tr=vn&&`TextEvent`in window&&!er,nr=vn&&(!$n||er&&8<er&&11>=er),rr=` `,ir=!1;function ar(e,t){switch(e){case`keyup`:return Qn.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function or(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var sr=!1;function cr(e,t){switch(e){case`compositionend`:return or(t);case`keypress`:return t.which===32?(ir=!0,rr):null;case`textInput`:return e=t.data,e===rr&&ir?null:e;default:return null}}function lr(e,t){if(sr)return e===`compositionend`||!$n&&ar(e,t)?(e=wn(),Cn=Sn=xn=null,sr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return nr&&t.locale!==`ko`?null:t.data;default:return null}}var ur={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function dr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!ur[e.type]:t===`textarea`}function fr(e,t,n,r){fn?pn?pn.push(r):pn=[r]:fn=r,t=Ed(t,`onChange`),0<t.length&&(n=new An(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var pr=null,mr=null;function hr(e){yd(e,0)}function gr(e){if(Wt(Dt(e)))return e}function _r(e,t){if(e===`change`)return t}var vr=!1;if(vn){var yr;if(vn){var br=`oninput`in document;if(!br){var xr=document.createElement(`div`);xr.setAttribute(`oninput`,`return;`),br=typeof xr.oninput==`function`}yr=br}else yr=!1;vr=yr&&(!document.documentMode||9<document.documentMode)}function Sr(){pr&&(pr.detachEvent(`onpropertychange`,Cr),mr=pr=null)}function Cr(e){if(e.propertyName===`value`&&gr(mr)){var t=[];fr(t,mr,e,dn(e)),gn(hr,t)}}function wr(e,t,n){e===`focusin`?(Sr(),pr=t,mr=n,pr.attachEvent(`onpropertychange`,Cr)):e===`focusout`&&Sr()}function Tr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return gr(mr)}function Er(e,t){if(e===`click`)return gr(t)}function Dr(e,t){if(e===`input`||e===`change`)return gr(t)}function Or(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var kr=typeof Object.is==`function`?Object.is:Or;function Ar(e,t){if(kr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ae.call(t,i)||!kr(e[i],t[i]))return!1}return!0}function jr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Mr(e,t){var n=jr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=jr(n)}}function Nr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Nr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Pr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Gt(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Gt(e.document)}return t}function Fr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Ir=vn&&`documentMode`in document&&11>=document.documentMode,Lr=null,Rr=null,zr=null,Br=!1;function Vr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Br||Lr==null||Lr!==Gt(r)||(r=Lr,`selectionStart`in r&&Fr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),zr&&Ar(zr,r)||(zr=r,r=Ed(Rr,`onSelect`),0<r.length&&(t=new An(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Lr)))}function Hr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Ur={animationend:Hr(`Animation`,`AnimationEnd`),animationiteration:Hr(`Animation`,`AnimationIteration`),animationstart:Hr(`Animation`,`AnimationStart`),transitionrun:Hr(`Transition`,`TransitionRun`),transitionstart:Hr(`Transition`,`TransitionStart`),transitioncancel:Hr(`Transition`,`TransitionCancel`),transitionend:Hr(`Transition`,`TransitionEnd`)},Wr={},Gr={};vn&&(Gr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Ur.animationend.animation,delete Ur.animationiteration.animation,delete Ur.animationstart.animation),`TransitionEvent`in window||delete Ur.transitionend.transition);function Kr(e){if(Wr[e])return Wr[e];if(!Ur[e])return e;var t=Ur[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Gr)return Wr[e]=t[n];return e}var qr=Kr(`animationend`),Jr=Kr(`animationiteration`),Yr=Kr(`animationstart`),Xr=Kr(`transitionrun`),Zr=Kr(`transitionstart`),Qr=Kr(`transitioncancel`),$r=Kr(`transitionend`),ei=new Map,ti=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);ti.push(`scrollEnd`);function ni(e,t){ei.set(e,t),Mt(t,[e])}var ri=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},ii=[],ai=0,oi=0;function si(){for(var e=ai,t=oi=ai=0;t<e;){var n=ii[t];ii[t++]=null;var r=ii[t];ii[t++]=null;var i=ii[t];ii[t++]=null;var a=ii[t];if(ii[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&di(n,i,a)}}function ci(e,t,n,r){ii[ai++]=e,ii[ai++]=t,ii[ai++]=n,ii[ai++]=r,oi|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function li(e,t,n,r){return ci(e,t,n,r),fi(e)}function ui(e,t){return ci(e,null,null,t),fi(e)}function di(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-qe(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function fi(e){if(50<du)throw du=0,fu=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var pi={};function mi(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function hi(e,t,n,r){return new mi(e,t,n,r)}function gi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function _i(e,t){var n=e.alternate;return n===null?(n=hi(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function vi(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function yi(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)gi(e)&&(s=1);else if(typeof e==`string`)s=Uf(e,n,he.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case ie:return e=hi(31,n,t,a),e.elementType=ie,e.lanes=o,e;case y:return bi(n.children,a,o,t);case b:s=8,a|=24;break;case x:return e=hi(12,n,t,a|2),e.elementType=x,e.lanes=o,e;case C:return e=hi(13,n,t,a),e.elementType=C,e.lanes=o,e;case w:return e=hi(19,n,t,a),e.elementType=w,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case S:s=10;break a;case ee:s=9;break a;case te:s=11;break a;case ne:s=14;break a;case re:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=hi(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function bi(e,t,n,r){return e=hi(7,e,r,t),e.lanes=n,e}function xi(e,t,n){return e=hi(6,e,null,t),e.lanes=n,e}function Si(e){var t=hi(18,null,null,0);return t.stateNode=e,t}function Ci(e,t,n){return t=hi(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var wi=new WeakMap;function Ti(e,t){if(typeof e==`object`&&e){var n=wi.get(e);return n===void 0?(t={value:e,source:t,stack:ke(t)},wi.set(e,t),t):n}return{value:e,source:t,stack:ke(t)}}var Ei=[],Di=0,Oi=null,ki=0,Ai=[],ji=0,Mi=null,Ni=1,Pi=``;function Fi(e,t){Ei[Di++]=ki,Ei[Di++]=Oi,Oi=e,ki=t}function Ii(e,t,n){Ai[ji++]=Ni,Ai[ji++]=Pi,Ai[ji++]=Mi,Mi=e;var r=Ni;e=Pi;var i=32-qe(r)-1;r&=~(1<<i),n+=1;var a=32-qe(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Ni=1<<32-qe(t)+i|n<<i|r,Pi=a+e}else Ni=1<<a|n<<i|r,Pi=e}function Li(e){e.return!==null&&(Fi(e,1),Ii(e,1,0))}function Ri(e){for(;e===Oi;)Oi=Ei[--Di],Ei[Di]=null,ki=Ei[--Di],Ei[Di]=null;for(;e===Mi;)Mi=Ai[--ji],Ai[ji]=null,Pi=Ai[--ji],Ai[ji]=null,Ni=Ai[--ji],Ai[ji]=null}function zi(e,t){Ai[ji++]=Ni,Ai[ji++]=Pi,Ai[ji++]=Mi,Ni=t.id,Pi=t.overflow,Mi=e}var Bi=null,M=null,N=!1,Vi=null,Hi=!1,Ui=Error(i(519));function Wi(e){throw Xi(Ti(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Ui}function Gi(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[gt]=e,t[_t]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<_d.length;n++)Q(_d[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),Yt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),$t(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Md(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=ln),t=!0):t=!1,t||Wi(e,!0)}function Ki(e){for(Bi=e.return;Bi;)switch(Bi.tag){case 5:case 31:case 13:Hi=!1;return;case 27:case 3:Hi=!0;return;default:Bi=Bi.return}}function qi(e){if(e!==Bi)return!1;if(!N)return Ki(e),N=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!==`form`&&n!==`button`)||Ud(e.type,e.memoizedProps)),n=!n),n&&M&&Wi(e),Ki(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));M=uf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));M=uf(e)}else t===27?(t=M,Zd(e.type)?(e=lf,lf=null,M=e):M=t):M=Bi?cf(e.stateNode.nextSibling):null;return!0}function Ji(){M=Bi=null,N=!1}function Yi(){var e=Vi;return e!==null&&(Zl===null?Zl=e:Zl.push.apply(Zl,e),Vi=null),e}function Xi(e){Vi===null?Vi=[e]:Vi.push(e)}var Zi=me(null),Qi=null,$i=null;function ea(e,t,n){O(Zi,t._currentValue),t._currentValue=n}function ta(e){e._currentValue=Zi.current,D(Zi)}function na(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function ra(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),na(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),na(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function ia(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;kr(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===ve.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[Qf]:e.push(Qf))}a=a.return}e!==null&&ra(t,e,n,r),t.flags|=262144}function aa(e){for(e=e.firstContext;e!==null;){if(!kr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function oa(e){Qi=e,$i=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function sa(e){return la(Qi,e)}function ca(e,t){return Qi===null&&oa(e),la(e,t)}function la(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},$i===null){if(e===null)throw Error(i(308));$i=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else $i=$i.next=t;return n}var ua=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},da=t.unstable_scheduleCallback,fa=t.unstable_NormalPriority,P={$$typeof:S,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function pa(){return{controller:new ua,data:new Map,refCount:0}}function ma(e){e.refCount--,e.refCount===0&&da(fa,function(){e.controller.abort()})}var ha=null,ga=0,_a=0,va=null;function ya(e,t){if(ha===null){var n=ha=[];ga=0,_a=dd(),va={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return ga++,t.then(ba,ba),t}function ba(){if(--ga===0&&ha!==null){va!==null&&(va.status=`fulfilled`);var e=ha;ha=null,_a=0,va=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function xa(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var Sa=T.S;T.S=function(e,t){eu=Fe(),typeof t==`object`&&t&&typeof t.then==`function`&&ya(e,t),Sa!==null&&Sa(e,t)};var Ca=me(null);function wa(){var e=Ca.current;return e===null?K.pooledCache:e}function Ta(e,t){t===null?O(Ca,Ca.current):O(Ca,t.pool)}function Ea(){var e=wa();return e===null?null:{parent:P._currentValue,pool:e}}var Da=Error(i(460)),Oa=Error(i(474)),ka=Error(i(542)),Aa={then:function(){}};function ja(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Ma(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(ln,ln),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Ia(e),e;default:if(typeof t.status==`string`)t.then(ln,ln);else{if(e=K,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Ia(e),e}throw Pa=t,Da}}function Na(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Pa=e,Da):e}}var Pa=null;function Fa(){if(Pa===null)throw Error(i(459));var e=Pa;return Pa=null,e}function Ia(e){if(e===Da||e===ka)throw Error(i(483))}var La=null,Ra=0;function za(e){var t=Ra;return Ra+=1,La===null&&(La=[]),Ma(La,e,t)}function Ba(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Va(e,t){throw t.$$typeof===g?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Ha(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=_i(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=xi(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===re&&Na(i)===t.type)?(t=a(t,n.props),Ba(t,n),t.return=e,t):(t=yi(n.type,n.key,n.props,null,e.mode,r),Ba(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=Ci(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=bi(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=xi(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=yi(t.type,t.key,t.props,null,e.mode,n),Ba(n,t),n.return=e,n;case v:return t=Ci(t,e.mode,n),t.return=e,t;case re:return t=Na(t),f(e,t,n)}if(ue(t)||se(t))return t=bi(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,za(t),n);if(t.$$typeof===S)return f(e,ca(e,t),n);Va(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case re:return n=Na(n),p(e,t,n,r)}if(ue(n)||se(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,za(n),r);if(n.$$typeof===S)return p(e,t,ca(e,n),r);Va(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case re:return r=Na(r),m(e,t,n,r,i)}if(ue(r)||se(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,za(r),i);if(r.$$typeof===S)return m(e,t,n,ca(t,r),i);Va(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),N&&Fi(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return N&&Fi(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),N&&Fi(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),N&&Fi(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return N&&Fi(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),N&&Fi(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===y&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case _:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===y){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===re&&Na(l)===r.type){n(e,r.sibling),c=a(r,o.props),Ba(c,o),c.return=e,e=c;break a}n(e,r);break}else t(e,r);r=r.sibling}o.type===y?(c=bi(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=yi(o.type,o.key,o.props,null,e.mode,c),Ba(c,o),c.return=e,e=c)}return s(e);case v:a:{for(l=o.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}else{n(e,r);break}else t(e,r);r=r.sibling}c=Ci(o,e.mode,c),c.return=e,e=c}return s(e);case re:return o=Na(o),b(e,r,o,c)}if(ue(o))return h(e,r,o,c);if(se(o)){if(l=se(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,za(o),c);if(o.$$typeof===S)return b(e,r,ca(e,o),c);Va(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=xi(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{Ra=0;var i=b(e,t,n,r);return La=null,i}catch(t){if(t===Da||t===ka)throw t;var a=hi(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Ua=Ha(!0),Wa=Ha(!1),Ga=!1;function Ka(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function qa(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ja(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ya(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,G&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=fi(e),di(e,null,n),t}return ci(e,r,t,n),fi(e)}function Xa(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,lt(e,n)}}function Za(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Qa=!1;function $a(){if(Qa){var e=va;if(e!==null)throw e}}function eo(e,t,n,r){Qa=!1;var i=e.updateQueue;Ga=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(J&f)===f:(r&f)===f){f!==0&&f===_a&&(Qa=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(m=g.payload,typeof m==`function`){d=m.call(_,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,f=typeof m==`function`?m.call(_,d,f):m,f==null)break a;d=h({},d,f);break a;case 2:Ga=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Gl|=o,e.lanes=o,e.memoizedState=d}}function to(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function no(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)to(n[e],t)}var ro=me(null),io=me(0);function ao(e,t){e=Wl,O(io,e),O(ro,t),Wl=e|t.baseLanes}function oo(){O(io,Wl),O(ro,ro.current)}function so(){Wl=io.current,D(ro),D(io)}var co=me(null),lo=null;function uo(e){var t=e.alternate;O(F,F.current&1),O(co,e),lo===null&&(t===null||ro.current!==null||t.memoizedState!==null)&&(lo=e)}function fo(e){O(F,F.current),O(co,e),lo===null&&(lo=e)}function po(e){e.tag===22?(O(F,F.current),O(co,e),lo===null&&(lo=e)):mo(e)}function mo(){O(F,F.current),O(co,co.current)}function ho(e){D(co),lo===e&&(lo=null),D(F)}var F=me(0);function go(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||af(n)||of(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var _o=0,I=null,L=null,R=null,vo=!1,yo=!1,bo=!1,xo=0,So=0,Co=null,wo=0;function z(){throw Error(i(321))}function To(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!kr(e[n],t[n]))return!1;return!0}function Eo(e,t,n,r,i,a){return _o=a,I=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,T.H=e===null||e.memoizedState===null?Hs:Us,bo=!1,a=n(r,i),bo=!1,yo&&(a=Oo(t,n,r,i)),Do(e),a}function Do(e){T.H=Vs;var t=L!==null&&L.next!==null;if(_o=0,R=L=I=null,vo=!1,So=0,Co=null,t)throw Error(i(300));e===null||V||(e=e.dependencies,e!==null&&aa(e)&&(V=!0))}function Oo(e,t,n,r){I=e;var a=0;do{if(yo&&(Co=null),So=0,yo=!1,25<=a)throw Error(i(301));if(a+=1,R=L=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}T.H=Ws,o=t(n,r)}while(yo);return o}function ko(){var e=T.H,t=e.useState()[0];return t=typeof t.then==`function`?Fo(t):t,e=e.useState()[0],(L===null?null:L.memoizedState)!==e&&(I.flags|=1024),t}function Ao(){var e=xo!==0;return xo=0,e}function jo(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Mo(e){if(vo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}vo=!1}_o=0,R=L=I=null,yo=!1,So=xo=0,Co=null}function No(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return R===null?I.memoizedState=R=e:R=R.next=e,R}function B(){if(L===null){var e=I.alternate;e=e===null?null:e.memoizedState}else e=L.next;var t=R===null?I.memoizedState:R.next;if(t!==null)R=t,L=e;else{if(e===null)throw I.alternate===null?Error(i(467)):Error(i(310));L=e,e={memoizedState:L.memoizedState,baseState:L.baseState,baseQueue:L.baseQueue,queue:L.queue,next:null},R===null?I.memoizedState=R=e:R=R.next=e}return R}function Po(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Fo(e){var t=So;return So+=1,Co===null&&(Co=[]),e=Ma(Co,e,t),t=I,(R===null?t.memoizedState:R.next)===null&&(t=t.alternate,T.H=t===null||t.memoizedState===null?Hs:Us),e}function Io(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return Fo(e);if(e.$$typeof===S)return sa(e)}throw Error(i(438,String(e)))}function Lo(e){var t=null,n=I.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=I.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=Po(),I.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=ae;return t.index++,n}function Ro(e,t){return typeof t==`function`?t(e):t}function zo(e){return Bo(B(),L,e)}function Bo(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(_o&f)===f:(J&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===_a&&(d=!0);else if((_o&p)===p){u=u.next,p===_a&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,I.lanes|=p,Gl|=p;f=u.action,bo&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,I.lanes|=f,Gl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!kr(o,e.memoizedState)&&(V=!0,d&&(n=va,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Vo(e){var t=B(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);kr(o,t.memoizedState)||(V=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Ho(e,t,n){var r=I,a=B(),o=N;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!kr((L||a).memoizedState,n);if(s&&(a.memoizedState=n,V=!0),a=a.queue,ps(Go.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||R!==null&&R.memoizedState.tag&1){if(r.flags|=2048,cs(9,{destroy:void 0},Wo.bind(null,r,a,n,t),null),K===null)throw Error(i(349));o||_o&127||Uo(r,t,n)}return n}function Uo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=I.updateQueue,t===null?(t=Po(),I.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Wo(e,t,n,r){t.value=n,t.getSnapshot=r,Ko(t)&&qo(e)}function Go(e,t,n){return n(function(){Ko(t)&&qo(e)})}function Ko(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!kr(e,n)}catch{return!0}}function qo(e){var t=ui(e,2);t!==null&&hu(t,e,2)}function Jo(e){var t=No();if(typeof e==`function`){var n=e;if(e=n(),bo){Ke(!0);try{n()}finally{Ke(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ro,lastRenderedState:e},t}function Yo(e,t,n,r){return e.baseState=n,Bo(e,L,typeof r==`function`?r:Ro)}function Xo(e,t,n,r,a){if(Rs(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};T.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,Zo(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Zo(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=T.T,o={};T.T=o;try{var s=n(i,r),c=T.S;c!==null&&c(o,s),Qo(e,t,s)}catch(n){es(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),T.T=a}}else try{a=n(i,r),Qo(e,t,a)}catch(n){es(e,t,n)}}function Qo(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){$o(e,t,n)},function(n){return es(e,t,n)}):$o(e,t,n)}function $o(e,t,n){t.status=`fulfilled`,t.value=n,ts(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Zo(e,n)))}function es(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,ts(t),t=t.next;while(t!==r)}e.action=null}function ts(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function ns(e,t){return t}function rs(e,t){if(N){var n=K.formState;if(n!==null){a:{var r=I;if(N){if(M){b:{for(var i=M,a=Hi;i.nodeType!==8;){if(!a){i=null;break b}if(i=cf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){M=cf(i.nextSibling),r=i.data===`F!`;break a}}Wi(r)}r=!1}r&&(t=n[0])}}return n=No(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ns,lastRenderedState:t},n.queue=r,n=Fs.bind(null,I,r),r.dispatch=n,r=Jo(!1),a=Ls.bind(null,I,!1,r.queue),r=No(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Xo.bind(null,I,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function is(e){return as(B(),L,e)}function as(e,t,n){if(t=Bo(e,t,ns)[0],e=zo(Ro)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=Fo(t)}catch(e){throw e===Da?ka:e}else r=t;t=B();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(I.flags|=2048,cs(9,{destroy:void 0},os.bind(null,i,n),null)),[r,a,e]}function os(e,t){e.action=t}function ss(e){var t=B(),n=L;if(n!==null)return as(t,n,e);B(),t=t.memoizedState,n=B();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function cs(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=I.updateQueue,t===null&&(t=Po(),I.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function ls(){return B().memoizedState}function us(e,t,n,r){var i=No();I.flags|=e,i.memoizedState=cs(1|t,{destroy:void 0},n,r===void 0?null:r)}function ds(e,t,n,r){var i=B();r=r===void 0?null:r;var a=i.memoizedState.inst;L!==null&&r!==null&&To(r,L.memoizedState.deps)?i.memoizedState=cs(t,a,n,r):(I.flags|=e,i.memoizedState=cs(1|t,a,n,r))}function fs(e,t){us(8390656,8,e,t)}function ps(e,t){ds(2048,8,e,t)}function ms(e){I.flags|=4;var t=I.updateQueue;if(t===null)t=Po(),I.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function hs(e){var t=B().memoizedState;return ms({ref:t,nextImpl:e}),function(){if(G&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function gs(e,t){return ds(4,2,e,t)}function _s(e,t){return ds(4,4,e,t)}function vs(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ys(e,t,n){n=n==null?null:n.concat([e]),ds(4,4,vs.bind(null,t,e),n)}function bs(){}function xs(e,t){var n=B();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&To(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ss(e,t){var n=B();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&To(t,r[1]))return r[0];if(r=e(),bo){Ke(!0);try{e()}finally{Ke(!1)}}return n.memoizedState=[r,t],r}function Cs(e,t,n){return n===void 0||_o&1073741824&&!(J&261930)?e.memoizedState=t:(e.memoizedState=n,e=mu(),I.lanes|=e,Gl|=e,n)}function ws(e,t,n,r){return kr(n,t)?n:ro.current===null?!(_o&42)||_o&1073741824&&!(J&261930)?(V=!0,e.memoizedState=n):(e=mu(),I.lanes|=e,Gl|=e,t):(e=Cs(e,n,r),kr(e,t)||(V=!0),e)}function Ts(e,t,n,r,i){var a=E.p;E.p=a!==0&&8>a?a:8;var o=T.T,s={};T.T=s,Ls(e,!1,t,n);try{var c=i(),l=T.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Is(e,t,xa(c,r),pu(e)):Is(e,t,r,pu(e))}catch(n){Is(e,t,{then:function(){},status:`rejected`,reason:n},pu())}finally{E.p=a,o!==null&&s.types!==null&&(o.types=s.types),T.T=o}}function Es(){}function Ds(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=Os(e).queue;Ts(e,a,t,de,n===null?Es:function(){return ks(e),n(r)})}function Os(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:de,baseState:de,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ro,lastRenderedState:de},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ro,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function ks(e){var t=Os(e);t.next===null&&(t=e.alternate.memoizedState),Is(e,t.next.queue,{},pu())}function As(){return sa(Qf)}function js(){return B().memoizedState}function Ms(){return B().memoizedState}function Ns(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=pu();e=Ja(n);var r=Ya(t,e,n);r!==null&&(hu(r,t,n),Xa(r,t,n)),t={cache:pa()},e.payload=t;return}t=t.return}}function Ps(e,t,n){var r=pu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Rs(e)?zs(t,n):(n=li(e,t,n,r),n!==null&&(hu(n,e,r),Bs(n,t,r)))}function Fs(e,t,n){Is(e,t,n,pu())}function Is(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Rs(e))zs(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,kr(s,o))return ci(e,t,i,0),K===null&&si(),!1}catch{}if(n=li(e,t,i,r),n!==null)return hu(n,e,r),Bs(n,t,r),!0}return!1}function Ls(e,t,n,r){if(r={lane:2,revertLane:dd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Rs(e)){if(t)throw Error(i(479))}else t=li(e,n,r,2),t!==null&&hu(t,e,2)}function Rs(e){var t=e.alternate;return e===I||t!==null&&t===I}function zs(e,t){yo=vo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Bs(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,lt(e,n)}}var Vs={readContext:sa,use:Io,useCallback:z,useContext:z,useEffect:z,useImperativeHandle:z,useLayoutEffect:z,useInsertionEffect:z,useMemo:z,useReducer:z,useRef:z,useState:z,useDebugValue:z,useDeferredValue:z,useTransition:z,useSyncExternalStore:z,useId:z,useHostTransitionStatus:z,useFormState:z,useActionState:z,useOptimistic:z,useMemoCache:z,useCacheRefresh:z};Vs.useEffectEvent=z;var Hs={readContext:sa,use:Io,useCallback:function(e,t){return No().memoizedState=[e,t===void 0?null:t],e},useContext:sa,useEffect:fs,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),us(4194308,4,vs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return us(4194308,4,e,t)},useInsertionEffect:function(e,t){us(4,2,e,t)},useMemo:function(e,t){var n=No();t=t===void 0?null:t;var r=e();if(bo){Ke(!0);try{e()}finally{Ke(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=No();if(n!==void 0){var i=n(t);if(bo){Ke(!0);try{n(t)}finally{Ke(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Ps.bind(null,I,e),[r.memoizedState,e]},useRef:function(e){var t=No();return e={current:e},t.memoizedState=e},useState:function(e){e=Jo(e);var t=e.queue,n=Fs.bind(null,I,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:bs,useDeferredValue:function(e,t){return Cs(No(),e,t)},useTransition:function(){var e=Jo(!1);return e=Ts.bind(null,I,e.queue,!0,!1),No().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=I,a=No();if(N){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),K===null)throw Error(i(349));J&127||Uo(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,fs(Go.bind(null,r,o,e),[e]),r.flags|=2048,cs(9,{destroy:void 0},Wo.bind(null,r,o,n,t),null),n},useId:function(){var e=No(),t=K.identifierPrefix;if(N){var n=Pi,r=Ni;n=(r&~(1<<32-qe(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=xo++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=wo++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:As,useFormState:rs,useActionState:rs,useOptimistic:function(e){var t=No();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Ls.bind(null,I,!0,n),n.dispatch=t,[e,t]},useMemoCache:Lo,useCacheRefresh:function(){return No().memoizedState=Ns.bind(null,I)},useEffectEvent:function(e){var t=No(),n={impl:e};return t.memoizedState=n,function(){if(G&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},Us={readContext:sa,use:Io,useCallback:xs,useContext:sa,useEffect:ps,useImperativeHandle:ys,useInsertionEffect:gs,useLayoutEffect:_s,useMemo:Ss,useReducer:zo,useRef:ls,useState:function(){return zo(Ro)},useDebugValue:bs,useDeferredValue:function(e,t){return ws(B(),L.memoizedState,e,t)},useTransition:function(){var e=zo(Ro)[0],t=B().memoizedState;return[typeof e==`boolean`?e:Fo(e),t]},useSyncExternalStore:Ho,useId:js,useHostTransitionStatus:As,useFormState:is,useActionState:is,useOptimistic:function(e,t){return Yo(B(),L,e,t)},useMemoCache:Lo,useCacheRefresh:Ms};Us.useEffectEvent=hs;var Ws={readContext:sa,use:Io,useCallback:xs,useContext:sa,useEffect:ps,useImperativeHandle:ys,useInsertionEffect:gs,useLayoutEffect:_s,useMemo:Ss,useReducer:Vo,useRef:ls,useState:function(){return Vo(Ro)},useDebugValue:bs,useDeferredValue:function(e,t){var n=B();return L===null?Cs(n,e,t):ws(n,L.memoizedState,e,t)},useTransition:function(){var e=Vo(Ro)[0],t=B().memoizedState;return[typeof e==`boolean`?e:Fo(e),t]},useSyncExternalStore:Ho,useId:js,useHostTransitionStatus:As,useFormState:ss,useActionState:ss,useOptimistic:function(e,t){var n=B();return L===null?(n.baseState=e,[e,n.queue.dispatch]):Yo(n,L,e,t)},useMemoCache:Lo,useCacheRefresh:Ms};Ws.useEffectEvent=hs;function Gs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:h({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ks={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ja(r);i.payload=t,n!=null&&(i.callback=n),t=Ya(e,i,r),t!==null&&(hu(t,e,r),Xa(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ja(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Ya(e,i,r),t!==null&&(hu(t,e,r),Xa(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pu(),r=Ja(n);r.tag=2,t!=null&&(r.callback=t),t=Ya(e,r,n),t!==null&&(hu(t,e,n),Xa(t,e,n))}};function qs(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Ar(n,r)||!Ar(i,a):!0}function Js(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ks.enqueueReplaceState(t,t.state,null)}function Ys(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=h({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Xs(e){ri(e)}function Zs(e){console.error(e)}function Qs(e){ri(e)}function $s(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function ec(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function tc(e,t,n){return n=Ja(n),n.tag=3,n.payload={element:null},n.callback=function(){$s(e,t)},n}function nc(e){return e=Ja(e),e.tag=3,e}function rc(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){ec(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){ec(t,n,r),typeof i!=`function`&&(ru===null?ru=new Set([this]):ru.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function ic(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&ia(t,n,a,!0),n=co.current,n!==null){switch(n.tag){case 31:case 13:return lo===null?Du():n.alternate===null&&X===0&&(X=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===Aa?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Gu(e,r,a)),!1;case 22:return n.flags|=65536,r===Aa?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Gu(e,r,a)),!1}throw Error(i(435,n.tag))}return Gu(e,r,a),Du(),!1}if(N)return t=co.current,t===null?(r!==Ui&&(t=Error(i(423),{cause:r}),Xi(Ti(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=Ti(r,n),a=tc(e.stateNode,r,a),Za(e,a),X!==4&&(X=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==Ui&&(e=Error(i(422),{cause:r}),Xi(Ti(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=Ti(o,n),Xl===null?Xl=[o]:Xl.push(o),X!==4&&(X=2),t===null)return!0;r=Ti(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=tc(n.stateNode,r,e),Za(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(ru===null||!ru.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=nc(a),rc(a,e,n,r),Za(n,a),!1}n=n.return}while(n!==null);return!1}var ac=Error(i(461)),V=!1;function oc(e,t,n,r){t.child=e===null?Wa(t,null,n,r):Ua(t,e.child,n,r)}function sc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return oa(t),r=Eo(e,t,n,o,a,i),s=Ao(),e!==null&&!V?(jo(e,t,i),jc(e,t,i)):(N&&s&&Li(t),t.flags|=1,oc(e,t,r,i),t.child)}function cc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!gi(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,lc(e,t,a,r,i)):(e=yi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Mc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?Ar:n,n(o,r)&&e.ref===t.ref)return jc(e,t,i)}return t.flags|=1,e=_i(a,r),e.ref=t.ref,e.return=t,t.child=e}function lc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Ar(a,r)&&e.ref===t.ref)if(V=!1,t.pendingProps=r=a,Mc(e,i))e.flags&131072&&(V=!0);else return t.lanes=e.lanes,jc(e,t,i)}return _c(e,t,n,r,i)}function uc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return fc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ta(t,a===null?null:a.cachePool),a===null?oo():ao(t,a),po(t);else return r=t.lanes=536870912,fc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&Ta(t,null),oo(),mo(t)):(Ta(t,a.cachePool),ao(t,a),mo(t),t.memoizedState=null);return oc(e,t,i,n),t.child}function dc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function fc(e,t,n,r,i){var a=wa();return a=a===null?null:{parent:P._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Ta(t,null),oo(),po(t),e!==null&&ia(e,t,r,!0),t.childLanes=i,null}function pc(e,t){return t=Ec({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function mc(e,t,n){return Ua(t,e.child,null,n),e=pc(t,t.pendingProps),e.flags|=2,ho(t),t.memoizedState=null,e}function hc(e,t,n){var r=t.pendingProps,a=(t.flags&128)!=0;if(t.flags&=-129,e===null){if(N){if(r.mode===`hidden`)return e=pc(t,r),t.lanes=536870912,dc(null,e);if(fo(t),(e=M)?(e=rf(e,Hi),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Mi===null?null:{id:Ni,overflow:Pi},retryLane:536870912,hydrationErrors:null},n=Si(e),n.return=t,t.child=n,Bi=t,M=null)):e=null,e===null)throw Wi(t);return t.lanes=536870912,null}return pc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(fo(t),a)if(t.flags&256)t.flags&=-257,t=mc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558));else if(V||ia(e,t,n,!1),a=(n&e.childLanes)!==0,V||a){if(r=K,r!==null&&(s=ut(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,ui(e,s),hu(r,e,s),ac;Du(),t=mc(e,t,n)}else e=o.treeContext,M=cf(s.nextSibling),Bi=t,N=!0,Vi=null,Hi=!1,e!==null&&zi(t,e),t=pc(t,r),t.flags|=4096;return t}return e=_i(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function gc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function _c(e,t,n,r,i){return oa(t),n=Eo(e,t,n,r,void 0,i),r=Ao(),e!==null&&!V?(jo(e,t,i),jc(e,t,i)):(N&&r&&Li(t),t.flags|=1,oc(e,t,n,i),t.child)}function vc(e,t,n,r,i,a){return oa(t),t.updateQueue=null,n=Oo(t,r,n,i),Do(e),r=Ao(),e!==null&&!V?(jo(e,t,a),jc(e,t,a)):(N&&r&&Li(t),t.flags|=1,oc(e,t,n,a),t.child)}function yc(e,t,n,r,i){if(oa(t),t.stateNode===null){var a=pi,o=n.contextType;typeof o==`object`&&o&&(a=sa(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Ks,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},Ka(t),o=n.contextType,a.context=typeof o==`object`&&o?sa(o):pi,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Gs(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Ks.enqueueReplaceState(a,a.state,null),eo(t,r,a,i),$a(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Ys(n,s);a.props=c;var l=a.context,u=n.contextType;o=pi,typeof u==`object`&&u&&(o=sa(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Js(t,a,r,o),Ga=!1;var f=t.memoizedState;a.state=f,eo(t,r,a,i),$a(),l=t.memoizedState,s||f!==l||Ga?(typeof d==`function`&&(Gs(t,n,d,r),l=t.memoizedState),(c=Ga||qs(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,qa(e,t),o=t.memoizedProps,u=Ys(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=pi,typeof l==`object`&&l&&(c=sa(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Js(t,a,r,c),Ga=!1,f=t.memoizedState,a.state=f,eo(t,r,a,i),$a();var p=t.memoizedState;o!==d||f!==p||Ga||e!==null&&e.dependencies!==null&&aa(e.dependencies)?(typeof s==`function`&&(Gs(t,n,s,r),p=t.memoizedState),(u=Ga||qs(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&aa(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,gc(e,t),r=(t.flags&128)!=0,a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Ua(t,e.child,null,i),t.child=Ua(t,null,n,i)):oc(e,t,n,i),t.memoizedState=a.state,e=t.child):e=jc(e,t,i),e}function bc(e,t,n,r){return Ji(),t.flags|=256,oc(e,t,n,r),t.child}var xc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Sc(e){return{baseLanes:e,cachePool:Ea()}}function Cc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Jl),e}function wc(e,t,n){var r=t.pendingProps,a=!1,o=(t.flags&128)!=0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(F.current&2)!=0),s&&(a=!0,t.flags&=-129),s=(t.flags&32)!=0,t.flags&=-33,e===null){if(N){if(a?uo(t):mo(t),(e=M)?(e=rf(e,Hi),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Mi===null?null:{id:Ni,overflow:Pi},retryLane:536870912,hydrationErrors:null},n=Si(e),n.return=t,t.child=n,Bi=t,M=null)):e=null,e===null)throw Wi(t);return of(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?(mo(t),a=t.mode,c=Ec({mode:`hidden`,children:c},a),r=bi(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=Sc(n),r.childLanes=Cc(e,s,n),t.memoizedState=xc,dc(null,r)):(uo(t),Tc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(uo(t),t.flags&=-257,t=Dc(e,t,n)):t.memoizedState===null?(mo(t),c=r.fallback,a=t.mode,r=Ec({mode:`visible`,children:r.children},a),c=bi(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Ua(t,e.child,null,n),r=t.child,r.memoizedState=Sc(n),r.childLanes=Cc(e,s,n),t.memoizedState=xc,t=dc(null,r)):(mo(t),t.child=e.child,t.flags|=128,t=null);else if(uo(t),of(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,Xi({value:r,source:null,stack:null}),t=Dc(e,t,n)}else if(V||ia(e,t,n,!1),s=(n&e.childLanes)!==0,V||s){if(s=K,s!==null&&(r=ut(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,ui(e,r),hu(s,e,r),ac;af(c)||Du(),t=Dc(e,t,n)}else af(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,M=cf(c.nextSibling),Bi=t,N=!0,Vi=null,Hi=!1,e!==null&&zi(t,e),t=Tc(t,r.children),t.flags|=4096);return t}return a?(mo(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=_i(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=bi(c,a,n,null),c.flags|=2):c=_i(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,dc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=Sc(n):(a=c.cachePool,a===null?a=Ea():(l=P._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=Cc(e,s,n),t.memoizedState=xc,dc(e.child,r)):(uo(t),n=e.child,e=n.sibling,n=_i(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function Tc(e,t){return t=Ec({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Ec(e,t){return e=hi(22,e,null,t),e.lanes=0,e}function Dc(e,t,n){return Ua(t,e.child,null,n),e=Tc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Oc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),na(e.return,t,n)}function kc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function Ac(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=F.current,s=(o&2)!=0;if(s?(o=o&1|2,t.flags|=128):o&=1,O(F,o),oc(e,t,r,n),r=N?ki:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Oc(e,n,t);else if(e.tag===19)Oc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&go(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),kc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&go(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}kc(t,!0,n,null,a,r);break;case`together`:kc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function jc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Gl|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(ia(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=_i(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=_i(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Mc(e,t){return(e.lanes&t)===0?(e=e.dependencies,!!(e!==null&&aa(e))):!0}function Nc(e,t,n){switch(t.tag){case 3:ye(t,t.stateNode.containerInfo),ea(t,P,e.memoizedState.cache),Ji();break;case 27:case 5:xe(t);break;case 4:ye(t,t.stateNode.containerInfo);break;case 10:ea(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,fo(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(uo(t),e=jc(e,t,n),e===null?null:e.sibling):wc(e,t,n):(uo(t),t.flags|=128,null);uo(t);break;case 19:var i=(e.flags&128)!=0;if(r=(n&t.childLanes)!==0,r||=(ia(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return Ac(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),O(F,F.current),r)break;return null;case 22:return t.lanes=0,uc(e,t,n,t.pendingProps);case 24:ea(t,P,e.memoizedState.cache)}return jc(e,t,n)}function Pc(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)V=!0;else{if(!Mc(e,n)&&!(t.flags&128))return V=!1,Nc(e,t,n);V=!!(e.flags&131072)}else V=!1,N&&t.flags&1048576&&Ii(t,ki,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Na(t.elementType),t.type=e,typeof e==`function`)gi(e)?(r=Ys(e,r),t.tag=1,t=yc(null,t,e,r,n)):(t.tag=0,t=_c(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===te){t.tag=11,t=sc(null,t,e,r,n);break a}else if(a===ne){t.tag=14,t=cc(null,t,e,r,n);break a}}throw t=le(e)||e,Error(i(306,t,``))}}return t;case 0:return _c(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=Ys(r,t.pendingProps),yc(e,t,r,a,n);case 3:a:{if(ye(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,qa(e,t),eo(t,r,null,n);var s=t.memoizedState;if(r=s.cache,ea(t,P,r),r!==o.cache&&ra(t,[P],n,!0),$a(),r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=bc(e,t,r,n);break a}else if(r!==a){a=Ti(Error(i(424)),t),Xi(a),t=bc(e,t,r,n);break a}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(M=cf(e.firstChild),Bi=t,N=!0,Vi=null,Hi=!0,n=Wa(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Ji(),r===a){t=jc(e,t,n);break a}oc(e,t,r,n)}t=t.child}return t;case 26:return gc(e,t),e===null?(n=kf(t.type,null,t.pendingProps,null))?t.memoizedState=n:N||(n=t.type,e=t.pendingProps,r=Bd(_e.current).createElement(n),r[gt]=t,r[_t]=e,Pd(r,n,e),kt(r),t.stateNode=r):t.memoizedState=kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return xe(t),e===null&&N&&(r=t.stateNode=ff(t.type,t.pendingProps,_e.current),Bi=t,Hi=!0,a=M,Zd(t.type)?(lf=a,M=cf(r.firstChild)):M=a),oc(e,t,t.pendingProps.children,n),gc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&N&&((a=r=M)&&(r=tf(r,t.type,t.pendingProps,Hi),r===null?a=!1:(t.stateNode=r,Bi=t,M=cf(r.firstChild),Hi=!1,a=!0)),a||Wi(t)),xe(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,Ud(a,o)?r=null:s!==null&&Ud(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=Eo(e,t,ko,null,null,n),Qf._currentValue=a),gc(e,t),oc(e,t,r,n),t.child;case 6:return e===null&&N&&((e=n=M)&&(n=nf(n,t.pendingProps,Hi),n===null?e=!1:(t.stateNode=n,Bi=t,M=null,e=!0)),e||Wi(t)),null;case 13:return wc(e,t,n);case 4:return ye(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ua(t,null,r,n):oc(e,t,r,n),t.child;case 11:return sc(e,t,t.type,t.pendingProps,n);case 7:return oc(e,t,t.pendingProps,n),t.child;case 8:return oc(e,t,t.pendingProps.children,n),t.child;case 12:return oc(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,ea(t,t.type,r.value),oc(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,oa(t),a=sa(a),r=r(a),t.flags|=1,oc(e,t,r,n),t.child;case 14:return cc(e,t,t.type,t.pendingProps,n);case 15:return lc(e,t,t.type,t.pendingProps,n);case 19:return Ac(e,t,n);case 31:return hc(e,t,n);case 22:return uc(e,t,n,t.pendingProps);case 24:return oa(t),r=sa(P),e===null?(a=wa(),a===null&&(a=K,o=pa(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},Ka(t),ea(t,P,a)):((e.lanes&n)!==0&&(qa(e,t),eo(t,null,null,n),$a()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,ea(t,P,r),r!==a.cache&&ra(t,[P],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),ea(t,P,r))),oc(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function Fc(e){e.flags|=4}function Ic(e,t,n,r,i){if((t=(e.mode&32)!=0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(wu())e.flags|=8192;else throw Pa=Aa,Oa}else e.flags&=-16777217}function Lc(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wf(t))if(wu())e.flags|=8192;else throw Pa=Aa,Oa}function Rc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:it(),e.lanes|=t,Yl|=t)}function zc(e,t){if(!N)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function H(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Bc(e,t,n){var r=t.pendingProps;switch(Ri(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return H(t),null;case 1:return H(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),ta(P),be(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(qi(t)?Fc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Yi())),H(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(Fc(t),o===null?(H(t),Ic(t,a,null,r,n)):(H(t),Lc(t,o))):o?o===e.memoizedState?(H(t),t.flags&=-16777217):(Fc(t),H(t),Lc(t,o)):(e=e.memoizedProps,e!==r&&Fc(t),H(t),Ic(t,a,e,r,n)),null;case 27:if(Se(t),n=_e.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Fc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return H(t),null}e=he.current,qi(t)?Gi(t,e):(e=ff(a,r,n),t.stateNode=e,Fc(t))}return H(t),null;case 5:if(Se(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Fc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return H(t),null}if(o=he.current,qi(t))Gi(t,o);else{var s=Bd(_e.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[gt]=t,o[_t]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Pd(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Fc(t)}}return H(t),Ic(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Fc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=_e.current,qi(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=Bi,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[gt]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Md(e.nodeValue,n)),e||Wi(t,!0)}else e=Bd(e).createTextNode(r),e[gt]=t,t.stateNode=e}return H(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=qi(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[gt]=t}else Ji(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;H(t),e=!1}else n=Yi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(ho(t),t):(ho(t),null);if(t.flags&128)throw Error(i(558))}return H(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=qi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[gt]=t}else Ji(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;H(t),a=!1}else a=Yi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(ho(t),t):(ho(t),null)}return ho(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Rc(t,t.updateQueue),H(t),null);case 4:return be(),e===null&&Sd(t.stateNode.containerInfo),H(t),null;case 10:return ta(t.type),H(t),null;case 19:if(D(F),r=t.memoizedState,r===null)return H(t),null;if(a=(t.flags&128)!=0,o=r.rendering,o===null)if(a)zc(r,!1);else{if(X!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=go(e),o!==null){for(t.flags|=128,zc(r,!1),e=o.updateQueue,t.updateQueue=e,Rc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)vi(n,e),n=n.sibling;return O(F,F.current&1|2),N&&Fi(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Fe()>tu&&(t.flags|=128,a=!0,zc(r,!1),t.lanes=4194304)}else{if(!a)if(e=go(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Rc(t,e),zc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!N)return H(t),null}else 2*Fe()-r.renderingStartTime>tu&&n!==536870912&&(t.flags|=128,a=!0,zc(r,!1),t.lanes=4194304);r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(H(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Fe(),e.sibling=null,n=F.current,O(F,a?n&1|2:n&1),N&&Fi(t,r.treeForkCount),e);case 22:case 23:return ho(t),so(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(H(t),t.subtreeFlags&6&&(t.flags|=8192)):H(t),n=t.updateQueue,n!==null&&Rc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&D(Ca),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),ta(P),H(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function Vc(e,t){switch(Ri(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ta(P),be(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Se(t),null;case 31:if(t.memoizedState!==null){if(ho(t),t.alternate===null)throw Error(i(340));Ji()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(ho(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Ji()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return D(F),null;case 4:return be(),null;case 10:return ta(t.type),null;case 22:case 23:return ho(t),so(),e!==null&&D(Ca),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ta(P),null;case 25:return null;default:return null}}function Hc(e,t){switch(Ri(t),t.tag){case 3:ta(P),be();break;case 26:case 27:case 5:Se(t);break;case 4:be();break;case 31:t.memoizedState!==null&&ho(t);break;case 13:ho(t);break;case 19:D(F);break;case 10:ta(t.type);break;case 22:case 23:ho(t),so(),e!==null&&D(Ca);break;case 24:ta(P)}}function Uc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Z(t,t.return,e)}}function Wc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Z(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Z(t,t.return,e)}}function Gc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{no(t,n)}catch(t){Z(e,e.return,t)}}}function Kc(e,t,n){n.props=Ys(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Z(e,t,n)}}function qc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Z(e,t,n)}}function Jc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r==`function`)try{r()}catch(n){Z(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}function Yc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Z(e,e.return,t)}}function Xc(e,t,n){try{var r=e.stateNode;Fd(r,e.type,n,t),r[_t]=t}catch(t){Z(e,e.return,t)}}function Zc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zd(e.type)||e.tag===4}function Qc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Zc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function $c(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ln));else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for($c(e,t,n),e=e.sibling;e!==null;)$c(e,t,n),e=e.sibling}function el(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(el(e,t,n),e=e.sibling;e!==null;)el(e,t,n),e=e.sibling}function tl(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Pd(t,r,n),t[gt]=e,t[_t]=n}catch(t){Z(e,e.return,t)}}var nl=!1,U=!1,rl=!1,il=typeof WeakSet==`function`?WeakSet:Set,al=null;function ol(e,t){if(e=e.containerInfo,Rd=sp,e=Pr(e),Fr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(zd={focusedElem:e,selectionRange:n},sp=!1,al=t;al!==null;)if(t=al,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,al=e;else for(;al!==null;){switch(t=al,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=Ys(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Z(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ef(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:ef(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,al=e;break}al=t.return}}function sl(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:xl(e,n),r&4&&Uc(5,n);break;case 1:if(xl(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Z(n,n.return,e)}else{var i=Ys(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Z(n,n.return,e)}}r&64&&Gc(n),r&512&&qc(n,n.return);break;case 3:if(xl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{no(e,t)}catch(e){Z(n,n.return,e)}}break;case 27:t===null&&r&4&&tl(n);case 26:case 5:xl(e,n),t===null&&r&4&&Yc(n),r&512&&qc(n,n.return);break;case 12:xl(e,n);break;case 31:xl(e,n),r&4&&fl(e,n);break;case 13:xl(e,n),r&4&&pl(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Ju.bind(null,n),sf(e,n))));break;case 22:if(r=n.memoizedState!==null||nl,!r){t=t!==null&&t.memoizedState!==null||U,i=nl;var a=U;nl=r,(U=t)&&!a?Cl(e,n,(n.subtreeFlags&8772)!=0):xl(e,n),nl=i,U=a}break;case 30:break;default:xl(e,n)}}function cl(e){var t=e.alternate;t!==null&&(e.alternate=null,cl(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&wt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var W=null,ll=!1;function ul(e,t,n){for(n=n.child;n!==null;)dl(e,t,n),n=n.sibling}function dl(e,t,n){if(Ge&&typeof Ge.onCommitFiberUnmount==`function`)try{Ge.onCommitFiberUnmount(We,n)}catch{}switch(n.tag){case 26:U||Jc(n,t),ul(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:U||Jc(n,t);var r=W,i=ll;Zd(n.type)&&(W=n.stateNode,ll=!1),ul(e,t,n),pf(n.stateNode),W=r,ll=i;break;case 5:U||Jc(n,t);case 6:if(r=W,i=ll,W=null,ul(e,t,n),W=r,ll=i,W!==null)if(ll)try{(W.nodeType===9?W.body:W.nodeName===`HTML`?W.ownerDocument.body:W).removeChild(n.stateNode)}catch(e){Z(n,t,e)}else try{W.removeChild(n.stateNode)}catch(e){Z(n,t,e)}break;case 18:W!==null&&(ll?(e=W,Qd(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Np(e)):Qd(W,n.stateNode));break;case 4:r=W,i=ll,W=n.stateNode.containerInfo,ll=!0,ul(e,t,n),W=r,ll=i;break;case 0:case 11:case 14:case 15:Wc(2,n,t),U||Wc(4,n,t),ul(e,t,n);break;case 1:U||(Jc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Kc(n,t,r)),ul(e,t,n);break;case 21:ul(e,t,n);break;case 22:U=(r=U)||n.memoizedState!==null,ul(e,t,n),U=r;break;default:ul(e,t,n)}}function fl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Np(e)}catch(e){Z(t,t.return,e)}}}function pl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Np(e)}catch(e){Z(t,t.return,e)}}function ml(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new il),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new il),t;default:throw Error(i(435,e.tag))}}function hl(e,t){var n=ml(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Yu.bind(null,e,t);t.then(r,r)}})}function gl(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(Zd(c.type)){W=c.stateNode,ll=!1;break a}break;case 5:W=c.stateNode,ll=!1;break a;case 3:case 4:W=c.stateNode.containerInfo,ll=!0;break a}c=c.return}if(W===null)throw Error(i(160));dl(o,s,a),W=null,ll=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)vl(t,e),t=t.sibling}var _l=null;function vl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:gl(t,e),yl(e),r&4&&(Wc(3,e,e.return),Uc(3,e),Wc(5,e,e.return));break;case 1:gl(t,e),yl(e),r&512&&(U||n===null||Jc(n,n.return)),r&64&&nl&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=_l;if(gl(t,e),yl(e),r&512&&(U||n===null||Jc(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[Ct]||o[gt]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Pd(o,r,n),o[gt]=e,kt(o),r=o;break a;case`link`:var s=Vf(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=Vf(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[gt]=e,kt(o),r=o}e.stateNode=r}else Hf(a,e.type,e.stateNode);else e.stateNode=If(a,r,e.memoizedProps);else o===r?r===null&&e.stateNode!==null&&Xc(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Hf(a,e.type,e.stateNode):If(a,r,e.memoizedProps))}break;case 27:gl(t,e),yl(e),r&512&&(U||n===null||Jc(n,n.return)),n!==null&&r&4&&Xc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(gl(t,e),yl(e),r&512&&(U||n===null||Jc(n,n.return)),e.flags&32){a=e.stateNode;try{en(a,``)}catch(t){Z(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,Xc(e,a,n===null?a:n.memoizedProps)),r&1024&&(rl=!0);break;case 6:if(gl(t,e),yl(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Z(e,e.return,t)}}break;case 3:if(Bf=null,a=_l,_l=gf(t.containerInfo),gl(t,e),_l=a,yl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Np(t.containerInfo)}catch(t){Z(e,e.return,t)}rl&&(rl=!1,bl(e));break;case 4:r=_l,_l=gf(e.stateNode.containerInfo),gl(t,e),yl(e),_l=r;break;case 12:gl(t,e),yl(e);break;case 31:gl(t,e),yl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 13:gl(t,e),yl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&($l=Fe()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=nl,d=U;if(nl=u||a,U=d||l,gl(t,e),U=d,nl=u,yl(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||nl||U||Sl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Z(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){Z(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?$d(m,!0):$d(l.stateNode,!1)}catch(e){Z(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,hl(e,n))));break;case 19:gl(t,e),yl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 30:break;case 21:break;default:gl(t,e),yl(e)}}function yl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Zc(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;el(e,Qc(e),a);break;case 5:var o=n.stateNode;n.flags&32&&(en(o,``),n.flags&=-33),el(e,Qc(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;$c(e,Qc(e),s);break;default:throw Error(i(161))}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function bl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;bl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function xl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)sl(e,t.alternate,t),t=t.sibling}function Sl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Wc(4,t,t.return),Sl(t);break;case 1:Jc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Kc(t,t.return,n),Sl(t);break;case 27:pf(t.stateNode);case 26:case 5:Jc(t,t.return),Sl(t);break;case 22:t.memoizedState===null&&Sl(t);break;case 30:Sl(t);break;default:Sl(t)}e=e.sibling}}function Cl(e,t,n){for(n&&=(t.subtreeFlags&8772)!=0,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:Cl(i,a,n),Uc(4,a);break;case 1:if(Cl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Z(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)to(c[i],s)}catch(e){Z(r,r.return,e)}}n&&o&64&&Gc(a),qc(a,a.return);break;case 27:tl(a);case 26:case 5:Cl(i,a,n),n&&r===null&&o&4&&Yc(a),qc(a,a.return);break;case 12:Cl(i,a,n);break;case 31:Cl(i,a,n),n&&o&4&&fl(i,a);break;case 13:Cl(i,a,n),n&&o&4&&pl(i,a);break;case 22:a.memoizedState===null&&Cl(i,a,n),qc(a,a.return);break;case 30:break;default:Cl(i,a,n)}t=t.sibling}}function wl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&ma(n))}function Tl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ma(e))}function El(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Dl(e,t,n,r),t=t.sibling}function Dl(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:El(e,t,n,r),i&2048&&Uc(9,t);break;case 1:El(e,t,n,r);break;case 3:El(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ma(e)));break;case 12:if(i&2048){El(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Z(t,t.return,e)}}else El(e,t,n,r);break;case 31:El(e,t,n,r);break;case 13:El(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?El(e,t,n,r):(a._visibility|=2,Ol(e,t,n,r,(t.subtreeFlags&10256)!=0||!1)):a._visibility&2?El(e,t,n,r):kl(e,t),i&2048&&wl(o,t);break;case 24:El(e,t,n,r),i&2048&&Tl(t.alternate,t);break;default:El(e,t,n,r)}}function Ol(e,t,n,r,i){for(i&&=(t.subtreeFlags&10256)!=0||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Ol(a,o,s,c,i),Uc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Ol(a,o,s,c,i)):u._visibility&2?Ol(a,o,s,c,i):kl(a,o),i&&l&2048&&wl(o.alternate,o);break;case 24:Ol(a,o,s,c,i),i&&l&2048&&Tl(o.alternate,o);break;default:Ol(a,o,s,c,i)}t=t.sibling}}function kl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:kl(n,r),i&2048&&wl(r.alternate,r);break;case 24:kl(n,r),i&2048&&Tl(r.alternate,r);break;default:kl(n,r)}t=t.sibling}}var Al=8192;function jl(e,t,n){if(e.subtreeFlags&Al)for(e=e.child;e!==null;)Ml(e,t,n),e=e.sibling}function Ml(e,t,n){switch(e.tag){case 26:jl(e,t,n),e.flags&Al&&e.memoizedState!==null&&Gf(n,_l,e.memoizedState,e.memoizedProps);break;case 5:jl(e,t,n);break;case 3:case 4:var r=_l;_l=gf(e.stateNode.containerInfo),jl(e,t,n),_l=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Al,Al=16777216,jl(e,t,n),Al=r):jl(e,t,n));break;default:jl(e,t,n)}}function Nl(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Pl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];al=r,Ll(r,e)}Nl(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Fl(e),e=e.sibling}function Fl(e){switch(e.tag){case 0:case 11:case 15:Pl(e),e.flags&2048&&Wc(9,e,e.return);break;case 3:Pl(e);break;case 12:Pl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Il(e)):Pl(e);break;default:Pl(e)}}function Il(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];al=r,Ll(r,e)}Nl(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Wc(8,t,t.return),Il(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Il(t));break;default:Il(t)}e=e.sibling}}function Ll(e,t){for(;al!==null;){var n=al;switch(n.tag){case 0:case 11:case 15:Wc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:ma(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,al=r;else a:for(n=e;al!==null;){r=al;var i=r.sibling,a=r.return;if(cl(r),r===n){al=null;break a}if(i!==null){i.return=a,al=i;break a}al=a}}}var Rl={getCacheForType:function(e){var t=sa(P),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return sa(P).controller.signal}},zl=typeof WeakMap==`function`?WeakMap:Map,G=0,K=null,q=null,J=0,Y=0,Bl=null,Vl=!1,Hl=!1,Ul=!1,Wl=0,X=0,Gl=0,Kl=0,ql=0,Jl=0,Yl=0,Xl=null,Zl=null,Ql=!1,$l=0,eu=0,tu=1/0,nu=null,ru=null,iu=0,au=null,ou=null,su=0,cu=0,lu=null,uu=null,du=0,fu=null;function pu(){return G&2&&J!==0?J&-J:T.T===null?pt():dd()}function mu(){if(Jl===0)if(!(J&536870912)||N){var e=Qe;Qe<<=1,!(Qe&3932160)&&(Qe=262144),Jl=e}else Jl=536870912;return e=co.current,e!==null&&(e.flags|=32),Jl}function hu(e,t,n){(e===K&&(Y===2||Y===9)||e.cancelPendingCommit!==null)&&(Su(e,0),yu(e,J,Jl,!1)),ot(e,n),(!(G&2)||e!==K)&&(e===K&&(!(G&2)&&(Kl|=n),X===4&&yu(e,J,Jl,!1)),rd(e))}function gu(e,t,n){if(G&6)throw Error(i(327));var r=!n&&(t&127)==0&&(t&e.expiredLanes)===0||nt(e,t),a=r?Au(e,t):Ou(e,t,!0),o=r;do{if(a===0){Hl&&!r&&yu(e,t,0,!1);break}else{if(n=e.current.alternate,o&&!vu(n)){a=Ou(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=Xl;var l=c.current.memoizedState.isDehydrated;if(l&&(Su(c,s).flags|=256),s=Ou(c,s,!1),s!==2){if(Ul&&!l){c.errorRecoveryDisabledLanes|=o,Kl|=o,a=4;break a}o=Zl,Zl=a,o!==null&&(Zl===null?Zl=o:Zl.push.apply(Zl,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Su(e,0),yu(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:yu(r,t,Jl,!Vl);break a;case 2:Zl=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=$l+300-Fe(),10<a)){if(yu(r,t,Jl,!Vl),tt(r,0,!0)!==0)break a;su=t,r.timeoutHandle=Kd(_u.bind(null,r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Vl,o,`Throttled`,-0,0),a);break a}_u(r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Vl,o,null,-0,0)}}break}while(1);rd(e)}function _u(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ln},Ml(t,a,d);var m=(a&62914560)===a?$l-Fe():(a&4194048)===a?eu-Fe():0;if(m=qf(d,m),m!==null){su=a,e.cancelPendingCommit=m(Lu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),yu(e,a,o,!l);return}}Lu(e,t,a,n,r,i,o,s,c)}function vu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!kr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yu(e,t,n,r){t&=~ql,t&=~Kl,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-qe(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&ct(e,n,t)}function bu(){return G&6?!0:(id(0,!1),!1)}function xu(){if(q!==null){if(Y===0)var e=q.return;else e=q,$i=Qi=null,Mo(e),La=null,Ra=0,e=q;for(;e!==null;)Hc(e.alternate,e),e=e.return;q=null}}function Su(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,qd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),su=0,xu(),K=e,q=n=_i(e.current,null),J=t,Y=0,Bl=null,Vl=!1,Hl=nt(e,t),Ul=!1,Yl=Jl=ql=Kl=Gl=X=0,Zl=Xl=null,Ql=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-qe(r),a=1<<i;t|=e[i],r&=~a}return Wl=t,si(),n}function Cu(e,t){I=null,T.H=Vs,t===Da||t===ka?(t=Fa(),Y=3):t===Oa?(t=Fa(),Y=4):Y=t===ac?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Bl=t,q===null&&(X=1,$s(e,Ti(t,e.current)))}function wu(){var e=co.current;return e===null?!0:(J&4194048)===J?lo===null:(J&62914560)===J||J&536870912?e===lo:!1}function Tu(){var e=T.H;return T.H=Vs,e===null?Vs:e}function Eu(){var e=T.A;return T.A=Rl,e}function Du(){X=4,Vl||(J&4194048)!==J&&co.current!==null||(Hl=!0),!(Gl&134217727)&&!(Kl&134217727)||K===null||yu(K,J,Jl,!1)}function Ou(e,t,n){var r=G;G|=2;var i=Tu(),a=Eu();(K!==e||J!==t)&&(nu=null,Su(e,t)),t=!1;var o=X;a:do try{if(Y!==0&&q!==null){var s=q,c=Bl;switch(Y){case 8:xu(),o=6;break a;case 3:case 2:case 9:case 6:co.current===null&&(t=!0);var l=Y;if(Y=0,Bl=null,Pu(e,s,c,l),n&&Hl){o=0;break a}break;default:l=Y,Y=0,Bl=null,Pu(e,s,c,l)}}ku(),o=X;break}catch(t){Cu(e,t)}while(1);return t&&e.shellSuspendCounter++,$i=Qi=null,G=r,T.H=i,T.A=a,q===null&&(K=null,J=0,si()),o}function ku(){for(;q!==null;)Mu(q)}function Au(e,t){var n=G;G|=2;var r=Tu(),a=Eu();K!==e||J!==t?(nu=null,tu=Fe()+500,Su(e,t)):Hl=nt(e,t);a:do try{if(Y!==0&&q!==null){t=q;var o=Bl;b:switch(Y){case 1:Y=0,Bl=null,Pu(e,t,o,1);break;case 2:case 9:if(ja(o)){Y=0,Bl=null,Nu(t);break}t=function(){Y!==2&&Y!==9||K!==e||(Y=7),rd(e)},o.then(t,t);break a;case 3:Y=7;break a;case 4:Y=5;break a;case 7:ja(o)?(Y=0,Bl=null,Nu(t)):(Y=0,Bl=null,Pu(e,t,o,7));break;case 5:var s=null;switch(q.tag){case 26:s=q.memoizedState;case 5:case 27:var c=q;if(s?Wf(s):c.stateNode.complete){Y=0,Bl=null;var l=c.sibling;if(l!==null)q=l;else{var u=c.return;u===null?q=null:(q=u,Fu(u))}break b}}Y=0,Bl=null,Pu(e,t,o,5);break;case 6:Y=0,Bl=null,Pu(e,t,o,6);break;case 8:xu(),X=6;break a;default:throw Error(i(462))}}ju();break}catch(t){Cu(e,t)}while(1);return $i=Qi=null,T.H=r,T.A=a,G=n,q===null?(K=null,J=0,si(),X):0}function ju(){for(;q!==null&&!Ne();)Mu(q)}function Mu(e){var t=Pc(e.alternate,e,Wl);e.memoizedProps=e.pendingProps,t===null?Fu(e):q=t}function Nu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=vc(n,t,t.pendingProps,t.type,void 0,J);break;case 11:t=vc(n,t,t.pendingProps,t.type.render,t.ref,J);break;case 5:Mo(t);default:Hc(n,t),t=q=vi(t,Wl),t=Pc(n,t,Wl)}e.memoizedProps=e.pendingProps,t===null?Fu(e):q=t}function Pu(e,t,n,r){$i=Qi=null,Mo(t),La=null,Ra=0;var i=t.return;try{if(ic(e,i,t,n,J)){X=1,$s(e,Ti(n,e.current)),q=null;return}}catch(t){if(i!==null)throw q=i,t;X=1,$s(e,Ti(n,e.current)),q=null;return}t.flags&32768?(N||r===1?e=!0:Hl||J&536870912?e=!1:(Vl=e=!0,(r===2||r===9||r===3||r===6)&&(r=co.current,r!==null&&r.tag===13&&(r.flags|=16384))),Iu(t,e)):Fu(t)}function Fu(e){var t=e;do{if(t.flags&32768){Iu(t,Vl);return}e=t.return;var n=Bc(t.alternate,t,Wl);if(n!==null){q=n;return}if(t=t.sibling,t!==null){q=t;return}q=t=e}while(t!==null);X===0&&(X=5)}function Iu(e,t){do{var n=Vc(e.alternate,e);if(n!==null){n.flags&=32767,q=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){q=e;return}q=e=n}while(e!==null);X=6,q=null}function Lu(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do Hu();while(iu!==0);if(G&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=oi,st(e,n,o,s,c,l),e===K&&(q=K=null,J=0),ou=t,au=e,su=n,cu=o,lu=a,uu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Xu(ze,function(){return Uu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!=0,t.subtreeFlags&13878||r){r=T.T,T.T=null,a=E.p,E.p=2,s=G,G|=4;try{ol(e,t,n)}finally{G=s,E.p=a,T.T=r}}iu=1,Ru(),zu(),Bu()}}function Ru(){if(iu===1){iu=0;var e=au,t=ou,n=(t.flags&13878)!=0;if(t.subtreeFlags&13878||n){n=T.T,T.T=null;var r=E.p;E.p=2;var i=G;G|=4;try{vl(t,e);var a=zd,o=Pr(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&Nr(s.ownerDocument.documentElement,s)){if(c!==null&&Fr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Mr(s,h),v=Mr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}sp=!!Rd,zd=Rd=null}finally{G=i,E.p=r,T.T=n}}e.current=t,iu=2}}function zu(){if(iu===2){iu=0;var e=au,t=ou,n=(t.flags&8772)!=0;if(t.subtreeFlags&8772||n){n=T.T,T.T=null;var r=E.p;E.p=2;var i=G;G|=4;try{sl(e,t.alternate,t)}finally{G=i,E.p=r,T.T=n}}iu=3}}function Bu(){if(iu===4||iu===3){iu=0,Pe();var e=au,t=ou,n=su,r=uu;t.subtreeFlags&10256||t.flags&10256?iu=5:(iu=0,ou=au=null,Vu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(ru=null),ft(n),t=t.stateNode,Ge&&typeof Ge.onCommitFiberRoot==`function`)try{Ge.onCommitFiberRoot(We,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=T.T,i=E.p,E.p=2,T.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{T.T=t,E.p=i}}su&3&&Hu(),rd(e),i=e.pendingLanes,n&261930&&i&42?e===fu?du++:(du=0,fu=e):du=0,id(0,!1)}}function Vu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ma(t)))}function Hu(){return Ru(),zu(),Bu(),Uu()}function Uu(){if(iu!==5)return!1;var e=au,t=cu;cu=0;var n=ft(su),r=T.T,a=E.p;try{E.p=32>n?32:n,T.T=null,n=lu,lu=null;var o=au,s=su;if(iu=0,ou=au=null,su=0,G&6)throw Error(i(331));var c=G;if(G|=4,Fl(o.current),Dl(o,o.current,s,n),G=c,id(0,!1),Ge&&typeof Ge.onPostCommitFiberRoot==`function`)try{Ge.onPostCommitFiberRoot(We,o)}catch{}return!0}finally{E.p=a,T.T=r,Vu(e,t)}}function Wu(e,t,n){t=Ti(n,t),t=tc(e.stateNode,t,2),e=Ya(e,t,2),e!==null&&(ot(e,2),rd(e))}function Z(e,t,n){if(e.tag===3)Wu(e,e,n);else for(;t!==null;){if(t.tag===3){Wu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(ru===null||!ru.has(r))){e=Ti(n,e),n=nc(2),r=Ya(t,n,2),r!==null&&(rc(n,r,t,e),ot(r,2),rd(r));break}}t=t.return}}function Gu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new zl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Ul=!0,i.add(n),e=Ku.bind(null,e,t,n),t.then(e,e))}function Ku(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,K===e&&(J&n)===n&&(X===4||X===3&&(J&62914560)===J&&300>Fe()-$l?!(G&2)&&Su(e,0):ql|=n,Yl===J&&(Yl=0)),rd(e)}function qu(e,t){t===0&&(t=it()),e=ui(e,t),e!==null&&(ot(e,t),rd(e))}function Ju(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qu(e,n)}function Yu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),qu(e,n)}function Xu(e,t){return je(e,t)}var Zu=null,Qu=null,$u=!1,ed=!1,td=!1,nd=0;function rd(e){e!==Qu&&e.next===null&&(Qu===null?Zu=Qu=e:Qu=Qu.next=e),ed=!0,$u||($u=!0,ud())}function id(e,t){if(!td&&ed){td=!0;do for(var n=!1,r=Zu;r!==null;){if(!t)if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-qe(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,ld(r,a))}else a=J,a=tt(r,r===K?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||nt(r,a)||(n=!0,ld(r,a));r=r.next}while(n);td=!1}}function ad(){od()}function od(){ed=$u=!1;var e=0;nd!==0&&Gd()&&(e=nd);for(var t=Fe(),n=null,r=Zu;r!==null;){var i=r.next,a=sd(r,t);a===0?(r.next=null,n===null?Zu=i:n.next=i,i===null&&(Qu=n)):(n=r,(e!==0||a&3)&&(ed=!0)),r=i}iu!==0&&iu!==5||id(e,!1),nd!==0&&(nd=0)}function sd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-qe(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=rt(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=K,n=J,n=tt(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(Y===2||Y===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Me(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||nt(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Me(r),ft(n)){case 2:case 8:n=Re;break;case 32:n=ze;break;case 268435456:n=Ve;break;default:n=ze}return r=cd.bind(null,e),n=je(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Me(r),e.callbackPriority=2,e.callbackNode=null,2}function cd(e,t){if(iu!==0&&iu!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Hu()&&e.callbackNode!==n)return null;var r=J;return r=tt(e,e===K?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(gu(e,r,t),sd(e,Fe()),e.callbackNode!=null&&e.callbackNode===n?cd.bind(null,e):null)}function ld(e,t){if(Hu())return null;gu(e,t,!0)}function ud(){Yd(function(){G&6?je(Le,ad):od()})}function dd(){if(nd===0){var e=_a;e===0&&(e=Ze,Ze<<=1,!(Ze&261888)&&(Ze=256)),nd=e}return nd}function fd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:cn(``+e)}function pd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function md(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=fd((i[_t]||null).action),o=r.submitter;o&&(t=(t=o[_t]||null)?fd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new An(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(nd!==0){var e=o?pd(i,o):new FormData(i);Ds(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?pd(i,o):new FormData(i),Ds(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var hd=0;hd<ti.length;hd++){var gd=ti[hd];ni(gd.toLowerCase(),`on`+(gd[0].toUpperCase()+gd.slice(1)))}ni(qr,`onAnimationEnd`),ni(Jr,`onAnimationIteration`),ni(Yr,`onAnimationStart`),ni(`dblclick`,`onDoubleClick`),ni(`focusin`,`onFocus`),ni(`focusout`,`onBlur`),ni(Xr,`onTransitionRun`),ni(Zr,`onTransitionStart`),ni(Qr,`onTransitionCancel`),ni($r,`onTransitionEnd`),Nt(`onMouseEnter`,[`mouseout`,`mouseover`]),Nt(`onMouseLeave`,[`mouseout`,`mouseover`]),Nt(`onPointerEnter`,[`pointerout`,`pointerover`]),Nt(`onPointerLeave`,[`pointerout`,`pointerover`]),Mt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),Mt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),Mt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),Mt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),Mt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),Mt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var _d=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),vd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(_d));function yd(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ri(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ri(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[yt];n===void 0&&(n=t[yt]=new Set);var r=e+`__bubble`;n.has(r)||(Cd(t,e,2,!1),n.add(r))}function bd(e,t,n){var r=0;t&&(r|=4),Cd(n,e,r,t)}var xd=`_reactListening`+Math.random().toString(36).slice(2);function Sd(e){if(!e[xd]){e[xd]=!0,At.forEach(function(t){t!==`selectionchange`&&(vd.has(t)||bd(t,!1,e),bd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xd]||(t[xd]=!0,bd(`selectionchange`,!1,t))}}function Cd(e,t,n,r){switch(mp(t)){case 2:var i=cp;break;case 8:i=lp;break;default:i=up}n=i.bind(null,t,n,e),i=void 0,!yn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function wd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var c=r.stateNode.containerInfo;if(c===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&o.stateNode.containerInfo===i)return;o=o.return}for(;c!==null;){if(o=Tt(c),o===null)return;if(l=o.tag,l===5||l===6||l===26||l===27){r=a=o;continue a}c=c.parentNode}}r=r.return}gn(function(){var r=a,i=dn(n),o=[];a:{var c=ei.get(e);if(c!==void 0){var l=An,u=e;switch(e){case`keypress`:if(Tn(n)===0)break a;case`keydown`:case`keyup`:l=qn;break;case`focusin`:u=`focus`,l=Rn;break;case`focusout`:u=`blur`,l=Rn;break;case`beforeblur`:case`afterblur`:l=Rn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=In;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=Ln;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=Yn;break;case qr:case Jr:case Yr:l=zn;break;case $r:l=j;break;case`scroll`:case`scrollend`:l=Mn;break;case`wheel`:l=Xn;break;case`copy`:case`cut`:case`paste`:l=Bn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=Jn;break;case`toggle`:case`beforetoggle`:l=Zn}var d=(t&4)!=0,f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=_n(m,p),g!=null&&d.push(Td(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),o.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==un&&(u=n.relatedTarget||n.fromElement)&&(Tt(u)||u[vt]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?Tt(u):null,u!==null&&(f=s(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=In,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Jn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:Dt(l),h=u==null?c:Dt(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,Tt(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=Dd,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&Od(o,c,l,d,!1),u!==null&&f!==null&&Od(o,f,u,d,!0)}}a:{if(c=r?Dt(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=_r;else if(dr(c))if(vr)v=Dr;else{v=Tr;var y=wr}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&an(r.elementType)&&(v=_r):v=Er;if(v&&=v(e,r)){fr(o,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&Xt(c,`number`,c.value)}switch(y=r?Dt(r):window,e){case`focusin`:(dr(y)||y.contentEditable===`true`)&&(Lr=y,Rr=r,zr=null);break;case`focusout`:zr=Rr=Lr=null;break;case`mousedown`:Br=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Br=!1,Vr(o,n,i);break;case`selectionchange`:if(Ir)break;case`keydown`:case`keyup`:Vr(o,n,i)}var b;if($n)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else sr?ar(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(nr&&n.locale!==`ko`&&(sr||x!==`onCompositionStart`?x===`onCompositionEnd`&&sr&&(b=wn()):(xn=i,Sn=`value`in xn?xn.value:xn.textContent,sr=!0)),y=Ed(r,x),0<y.length&&(x=new Vn(x,e,null,n,i),o.push({event:x,listeners:y}),b?x.data=b:(b=or(n),b!==null&&(x.data=b)))),(b=tr?cr(e,n):lr(e,n))&&(x=Ed(r,`onBeforeInput`),0<x.length&&(y=new Vn(`onBeforeInput`,`beforeinput`,null,n,i),o.push({event:y,listeners:x}),y.data=b)),md(o,e,r,n,i)}yd(o,t)})}function Td(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ed(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=_n(e,n),i!=null&&r.unshift(Td(e,i,a)),i=_n(e,t),i!=null&&r.push(Td(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Dd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Od(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=_n(n,a),l!=null&&o.unshift(Td(n,l,c))):i||(l=_n(n,a),l!=null&&o.push(Td(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var kd=/\r\n?/g,Ad=/\u0000|\uFFFD/g;function jd(e){return(typeof e==`string`?e:``+e).replace(kd,`
`).replace(Ad,``)}function Md(e,t){return t=jd(t),jd(e)===t}function $(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||en(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&en(e,``+r);break;case`className`:zt(e,`class`,r);break;case`tabIndex`:zt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:zt(e,n,r);break;case`style`:rn(e,r,o);break;case`data`:if(t!==`object`){zt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=cn(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}else typeof o==`function`&&(n===`formAction`?(t!==`input`&&$(e,t,`name`,a.name,a,null),$(e,t,`formEncType`,a.formEncType,a,null),$(e,t,`formMethod`,a.formMethod,a,null),$(e,t,`formTarget`,a.formTarget,a,null)):($(e,t,`encType`,a.encType,a,null),$(e,t,`method`,a.method,a,null),$(e,t,`target`,a.target,a,null)));if(r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=cn(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=ln);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=cn(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),Rt(e,`popover`,r);break;case`xlinkActuate`:Bt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:Bt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:Bt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:Bt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:Bt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:Bt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:Bt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:Bt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:Bt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:Rt(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=on.get(n)||n,Rt(e,n,r))}}function Nd(e,t,n,r,a,o){switch(n){case`style`:rn(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?en(e,r):(typeof r==`number`||typeof r==`bigint`)&&en(e,``+r);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=ln);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!jt.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[_t]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):Rt(e,n,r)}}}function Pd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,o,s,n,null)}}a&&$(e,t,`srcSet`,n.srcSet,n,null),r&&$(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:$(e,t,r,d,n,null)}}Yt(e,o,c,l,u,s,a,!1);return;case`select`:for(a in Q(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:$(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&Zt(e,!!r,n,!0):Zt(e,!!r,t,!1);return;case`textarea`:for(s in Q(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:$(e,t,s,c,n,null)}$t(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:$(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<_d.length;r++)Q(_d[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,u,r,n,null)}return;default:if(an(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Nd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&$(e,t,c,r,n,null))}function Fd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||$(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&$(e,t,p,m,r,f)}}Jt(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||$(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&$(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?Zt(e,!!n,n?[]:``,!1):Zt(e,!!n,t,!0)):Zt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:$(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&$(e,t,s,a,r,o)}Qt(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:$(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:$(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&$(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:$(e,t,u,p,r,m)}return;default:if(an(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Nd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Nd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&$(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||$(e,t,f,p,r,m)}function Id(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Ld(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Id(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Id(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Rd=null,zd=null;function Bd(e){return e.nodeType===9?e:e.ownerDocument}function Vd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Hd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Ud(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wd=null;function Gd(){var e=window.event;return e&&e.type===`popstate`?e===Wd?!1:(Wd=e,!0):(Wd=null,!1)}var Kd=typeof setTimeout==`function`?setTimeout:void 0,qd=typeof clearTimeout==`function`?clearTimeout:void 0,Jd=typeof Promise==`function`?Promise:void 0,Yd=typeof queueMicrotask==`function`?queueMicrotask:Jd===void 0?Kd:function(e){return Jd.resolve(null).then(e).catch(Xd)};function Xd(e){setTimeout(function(){throw e})}function Zd(e){return e===`head`}function Qd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Np(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)pf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,pf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[Ct]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&pf(e.ownerDocument.body);n=i}while(n);Np(t)}function $d(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8)if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++;n=r}while(n)}function ef(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:ef(n),wt(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function tf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r)if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e;else if(!e[Ct])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=cf(e.nextSibling),e===null)break}return null}function nf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=cf(e.nextSibling),e===null))return null;return e}function rf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=cf(e.nextSibling),e===null))return null;return e}function af(e){return e.data===`$?`||e.data===`$~`}function of(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function sf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function cf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var lf=null;function uf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return cf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function ff(e,t,n){switch(t=Bd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function pf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);wt(e)}var mf=new Map,hf=new Set;function gf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _f=E.d;E.d={f:vf,r:yf,D:Sf,C:Cf,L:wf,m:Tf,X:Df,S:Ef,M:Of};function vf(){var e=_f.f(),t=bu();return e||t}function yf(e){var t=Et(e);t!==null&&t.tag===5&&t.type===`form`?ks(t):_f.r(e)}var bf=typeof document>`u`?null:document;function xf(e,t,n){var r=bf;if(r&&typeof t==`string`&&t){var i=qt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),hf.has(i)||(hf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Pd(t,`link`,e),kt(t),r.head.appendChild(t)))}}function Sf(e){_f.D(e),xf(`dns-prefetch`,e,null)}function Cf(e,t){_f.C(e,t),xf(`preconnect`,e,t)}function wf(e,t,n){_f.L(e,t,n);var r=bf;if(r&&e&&t){var i=`link[rel="preload"][as="`+qt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+qt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+qt(n.imageSizes)+`"]`)):i+=`[href="`+qt(e)+`"]`;var a=i;switch(t){case`style`:a=Af(e);break;case`script`:a=Pf(e)}mf.has(a)||(e=h({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),mf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(jf(a))||t===`script`&&r.querySelector(Ff(a))||(t=r.createElement(`link`),Pd(t,`link`,e),kt(t),r.head.appendChild(t)))}}function Tf(e,t){_f.m(e,t);var n=bf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+qt(r)+`"][href="`+qt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Pf(e)}if(!mf.has(a)&&(e=h({rel:`modulepreload`,href:e},t),mf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Ff(a)))return}r=n.createElement(`link`),Pd(r,`link`,e),kt(r),n.head.appendChild(r)}}}function Ef(e,t,n){_f.S(e,t,n);var r=bf;if(r&&e){var i=Ot(r).hoistableStyles,a=Af(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(jf(a)))s.loading=5;else{e=h({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=mf.get(a))&&Rf(e,n);var c=o=r.createElement(`link`);kt(c),Pd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Lf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Df(e,t){_f.X(e,t);var n=bf;if(n&&e){var r=Ot(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),kt(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Of(e,t){_f.M(e,t);var n=bf;if(n&&e){var r=Ot(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0,type:`module`},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),kt(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t,n,r){var a=(a=_e.current)?gf(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Af(n.href),n=Ot(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Af(n.href);var o=Ot(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(jf(e)))&&!o._p&&(s.instance=o,s.state.loading=5),mf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mf.set(e,n),o||Nf(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Pf(n),n=Ot(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Af(e){return`href="`+qt(e)+`"`}function jf(e){return`link[rel="stylesheet"][`+e+`]`}function Mf(e){return h({},e,{"data-precedence":e.precedence,precedence:null})}function Nf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Pd(t,`link`,n),kt(t),e.head.appendChild(t))}function Pf(e){return`[src="`+qt(e)+`"]`}function Ff(e){return`script[async]`+e}function If(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+qt(n.href)+`"]`);if(r)return t.instance=r,kt(r),r;var a=h({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),kt(r),Pd(r,`style`,a),Lf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Af(n.href);var o=e.querySelector(jf(a));if(o)return t.state.loading|=4,t.instance=o,kt(o),o;r=Mf(n),(a=mf.get(a))&&Rf(r,a),o=(e.ownerDocument||e).createElement(`link`),kt(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Pd(o,`link`,r),t.state.loading|=4,Lf(o,n.precedence,e),t.instance=o;case`script`:return o=Pf(n.src),(a=e.querySelector(Ff(o)))?(t.instance=a,kt(a),a):(r=n,(a=mf.get(o))&&(r=h({},n),zf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),kt(a),Pd(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Lf(r,n.precedence,e));return t.instance}function Lf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Bf=null;function Vf(e,t,n){if(Bf===null){var r=new Map,i=Bf=new Map;i.set(n,r)}else i=Bf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[Ct]||a[gt]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Hf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Uf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Wf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Gf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Af(r.href),a=t.querySelector(jf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Jf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,kt(a);return}a=t.ownerDocument||t,r=Mf(r),(i=mf.get(i))&&Rf(r,i),a=a.createElement(`link`),kt(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Jf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Kf=0;function qf(e,t){return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Kf===0&&(Kf=62500*Ld());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Kf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Jf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yf=null;function Xf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yf=new Map,t.forEach(Zf,e),Yf=null,Jf.call(e))}function Zf(e,t){if(!(t.state.loading&4)){var n=Yf.get(e);if(n)var r=n.get(null);else{n=new Map,Yf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Jf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Qf={$$typeof:S,Provider:null,Consumer:null,_currentValue:de,_currentValue2:de,_threadCount:0};function $f(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=at(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=at(0),this.hiddenUpdates=at(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ep(e,t,n,r,i,a,o,s,c,l,u,d){return e=new $f(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=hi(3,null,null,t),e.current=a,a.stateNode=e,t=pa(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},Ka(a),e}function tp(e){return e?(e=pi,e):pi}function np(e,t,n,r,i,a){i=tp(i),r.context===null?r.context=i:r.pendingContext=i,r=Ja(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Ya(e,r,t),n!==null&&(hu(n,e,t),Xa(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ap(e){if(e.tag===13||e.tag===31){var t=ui(e,67108864);t!==null&&hu(t,e,67108864),ip(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=pu();t=dt(t);var n=ui(e,t);n!==null&&hu(n,e,t),ip(e,t)}}var sp=!0;function cp(e,t,n,r){var i=T.T;T.T=null;var a=E.p;try{E.p=2,up(e,t,n,r)}finally{E.p=a,T.T=i}}function lp(e,t,n,r){var i=T.T;T.T=null;var a=E.p;try{E.p=8,up(e,t,n,r)}finally{E.p=a,T.T=i}}function up(e,t,n,r){if(sp){var i=dp(r);if(i===null)wd(e,t,r,fp,n),Cp(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(Cp(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=Et(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=et(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-qe(o);s.entanglements[1]|=c,o&=~c}rd(a),!(G&6)&&(tu=Fe()+500,id(0,!1))}}break;case 31:case 13:s=ui(a,2),s!==null&&hu(s,a,2),bu(),ip(a,2)}if(a=dp(r),a===null&&wd(e,t,r,fp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else wd(e,t,r,null,n)}}function dp(e){return e=dn(e),pp(e)}var fp=null;function pp(e){if(fp=null,e=Tt(e),e!==null){var t=s(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=l(t),e!==null)return e;e=null}else if(n===31){if(e=d(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fp=e,null}function mp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Ie()){case Le:return 2;case Re:return 8;case ze:case Be:return 32;case Ve:return 268435456;default:return 32}default:return 32}}var hp=!1,gp=null,_p=null,vp=null,yp=new Map,bp=new Map,xp=[],Sp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Cp(e,t){switch(e){case`focusin`:case`focusout`:gp=null;break;case`dragenter`:case`dragleave`:_p=null;break;case`mouseover`:case`mouseout`:vp=null;break;case`pointerover`:case`pointerout`:yp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:bp.delete(t.pointerId)}}function wp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Et(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case`focusin`:return gp=wp(gp,e,t,n,r,i),!0;case`dragenter`:return _p=wp(_p,e,t,n,r,i),!0;case`mouseover`:return vp=wp(vp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return yp.set(a,wp(yp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,bp.set(a,wp(bp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=Tt(e.target);if(t!==null){var n=s(t);if(n!==null){if(t=n.tag,t===13){if(t=l(n),t!==null){e.blockedOn=t,mt(e.priority,function(){op(n)});return}}else if(t===31){if(t=d(n),t!==null){e.blockedOn=t,mt(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);un=r,n.target.dispatchEvent(r),un=null}else return t=Et(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){Dp(e)&&n.delete(t)}function kp(){hp=!1,gp!==null&&Dp(gp)&&(gp=null),_p!==null&&Dp(_p)&&(_p=null),vp!==null&&Dp(vp)&&(vp=null),yp.forEach(Op),bp.forEach(Op)}function Ap(e,n){e.blockedOn===n&&(e.blockedOn=null,hp||(hp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kp)))}var jp=null;function Mp(e){jp!==e&&(jp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){jp===e&&(jp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(pp(r||n)===null)continue;break}var a=Et(n);a!==null&&(e.splice(t,3),t-=3,Ds(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Np(e){function t(t){return Ap(t,e)}gp!==null&&Ap(gp,e),_p!==null&&Ap(_p,e),vp!==null&&Ap(vp,e),yp.forEach(t),bp.forEach(t);for(var n=0;n<xp.length;n++){var r=xp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xp.length&&(n=xp[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&xp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[_t]||null;if(typeof a==`function`)o||Mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[_t]||null)s=o.formAction;else if(pp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Mp(n)}}}function Pp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Fp(e){this._internalRoot=e}Ip.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;np(n,pu(),e,t,null,null)},Ip.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),bu(),t[vt]=null}};function Ip(e){this._internalRoot=e}Ip.prototype.unstable_scheduleHydration=function(e){if(e){var t=pt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xp.length&&t!==0&&t<xp[n].priority;n++);xp.splice(n,0,e),n===0&&Ep(e)}};var Lp=n.version;if(Lp!==`19.2.7`)throw Error(i(527,Lp,`19.2.7`));E.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=p(t),e=e===null?null:m(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.7`,rendererPackageName:`react-dom`,currentDispatcherRef:T,reconcilerVersion:`19.2.7`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{We=zp.inject(Rp),Ge=zp}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Xs,s=Zs,c=Qs;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,o,s,c,Pp),e[vt]=t.current,Sd(e),new Fp(t)}})),f=n(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=d()})),p=r(o(),1),m=f(),h=`modulepreload`,g=function(e,t){return new URL(e,t).href},_={},v=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,import.meta.url).href}r=o(t.map(t=>{if(t=g(t,n),t=s(t),t in _)return;_[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:h,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},y=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,b=/^[\\/]{2}/;function x(e,t){return t+e.replace(/\\/g,`/`)}var ee=`popstate`;function S(e){return typeof e==`object`&&!!e&&`pathname`in e&&`search`in e&&`hash`in e&&`state`in e&&`key`in e}function te(e={}){function t(e,t){let n=t.state?.masked,{pathname:r,search:i,hash:a}=n||e.location;return ie(``,{pathname:r,search:i,hash:a},t.state&&t.state.usr||null,t.state&&t.state.key||`default`,n?{pathname:e.location.pathname,search:e.location.search,hash:e.location.hash}:void 0)}function n(e,t){return typeof t==`string`?t:ae(t)}return se(t,n,null,e)}function C(e,t){if(e===!1||e==null)throw Error(t)}function w(e,t){if(!e){typeof console<`u`&&console.warn(t);try{throw Error(t)}catch{}}}function ne(){return Math.random().toString(36).substring(2,10)}function re(e,t){return{usr:e.state,key:e.key,idx:t,masked:e.mask?{pathname:e.pathname,search:e.search,hash:e.hash}:void 0}}function ie(e,t,n=null,r,i){return{pathname:typeof e==`string`?e:e.pathname,search:``,hash:``,...typeof t==`string`?oe(t):t,state:n,key:t&&t.key||r||ne(),mask:i}}function ae({pathname:e=`/`,search:t=``,hash:n=``}){return t&&t!==`?`&&(e+=t.charAt(0)===`?`?t:`?`+t),n&&n!==`#`&&(e+=n.charAt(0)===`#`?n:`#`+n),e}function oe(e){let t={};if(e){let n=e.indexOf(`#`);n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf(`?`);r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function se(e,t,n,r={}){let{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,s=`POP`,c=null,l=u();l??(l=0,o.replaceState({...o.state,idx:l},``));function u(){return(o.state||{idx:null}).idx}function d(){s=`POP`;let e=u(),t=e==null?null:e-l;l=e,c&&c({action:s,location:h.location,delta:t})}function f(e,t){s=`PUSH`;let r=S(e)?e:ie(h.location,e,t);n&&n(r,e),l=u()+1;let d=re(r,l),f=h.createHref(r.mask||r);try{o.pushState(d,``,f)}catch(e){if(e instanceof DOMException&&e.name===`DataCloneError`)throw e;i.location.assign(f)}a&&c&&c({action:s,location:h.location,delta:1})}function p(e,t){s=`REPLACE`;let r=S(e)?e:ie(h.location,e,t);n&&n(r,e),l=u();let i=re(r,l),d=h.createHref(r.mask||r);o.replaceState(i,``,d),a&&c&&c({action:s,location:h.location,delta:0})}function m(e){return ce(i,e)}let h={get action(){return s},get location(){return e(i,o)},listen(e){if(c)throw Error(`A history only accepts one active listener`);return i.addEventListener(ee,d),c=e,()=>{i.removeEventListener(ee,d),c=null}},createHref(e){return t(i,e)},createURL:m,encodeLocation(e){let t=m(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:f,replace:p,go(e){return o.go(e)}};return h}function ce(e,t,n=!1){let r=`http://localhost`;e&&(r=e.location.origin===`null`?e.location.href:e.location.origin),C(r,`No window.location.(origin|href) available to create URL`);let i=typeof t==`string`?t:ae(t);return i=i.replace(/ $/,`%20`),!n&&b.test(i)&&(i=r+i),new URL(i,r)}function le(e,t,n=`/`){return ue(e,t,n,!1)}function ue(e,t,n,r,i){let a=Ee((typeof t==`string`?oe(t):t).pathname||`/`,n);if(a==null)return null;let o=i??E(e),s=null,c=Te(a);for(let e=0;s==null&&e<o.length;++e)s=xe(o[e],c,r);return s}function T(e,t){let{route:n,pathname:r,params:i}=e;return{id:n.id,pathname:r,params:i,data:t[n.id],loaderData:t[n.id],handle:n.handle}}function E(e){let t=de(e);return pe(t),t}function de(e,t=[],n=[],r=``,i=!1){let a=(e,a,o=i,s)=>{let c={relativePath:s===void 0?e.path||``:s,caseSensitive:e.caseSensitive===!0,childrenIndex:a,route:e};if(c.relativePath.startsWith(`/`)){if(!c.relativePath.startsWith(r)&&o)return;C(c.relativePath.startsWith(r),`Absolute route path "${c.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),c.relativePath=c.relativePath.slice(r.length)}let l=Pe([r,c.relativePath]),u=n.concat(c);e.children&&e.children.length>0&&(C(e.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${l}".`),de(e.children,t,u,l,o)),!(e.path==null&&!e.index)&&t.push({path:l,score:ye(l,e.index),routesMeta:u.map((e,t)=>{let[n,r]=we(e.relativePath,e.caseSensitive,t===u.length-1);return{...e,matcher:n,compiledParams:r}})})};return e.forEach((e,t)=>{if(e.path===``||!e.path?.includes(`?`))a(e,t);else for(let n of fe(e.path))a(e,t,!0,n)}),t}function fe(e){let t=e.split(`/`);if(t.length===0)return[];let[n,...r]=t,i=n.endsWith(`?`),a=n.replace(/\?$/,``);if(r.length===0)return i?[a,``]:[a];let o=fe(r.join(`/`)),s=[];return s.push(...o.map(e=>e===``?a:[a,e].join(`/`))),i&&s.push(...o),s.map(t=>e.startsWith(`/`)&&t===``?`/`:t)}function pe(e){e.sort((e,t)=>e.score===t.score?be(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)):t.score-e.score)}var me=/^:[\w-]+$/,D=3,O=2,he=1,ge=10,_e=-2,ve=e=>e===`*`;function ye(e,t){let n=e.split(`/`),r=n.length;return n.some(ve)&&(r+=_e),t&&(r+=O),n.filter(e=>!ve(e)).reduce((e,t)=>e+(me.test(t)?D:t===``?he:ge),r)}function be(e,t){return e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n])?e[e.length-1]-t[t.length-1]:0}function xe(e,t,n=!1){let{routesMeta:r}=e,i={},a=`/`,o=[];for(let e=0;e<r.length;++e){let s=r[e],c=e===r.length-1,l=a===`/`?t:t.slice(a.length)||`/`,u={path:s.relativePath,caseSensitive:s.caseSensitive,end:c},d=s.matcher&&s.compiledParams?Ce(u,l,s.matcher,s.compiledParams):Se(u,l),f=s.route;if(!d&&c&&n&&!r[r.length-1].route.index&&(d=Se({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},l)),!d)return null;Object.assign(i,d.params),o.push({params:i,pathname:Pe([a,d.pathname]),pathnameBase:Ie(Pe([a,d.pathnameBase])),route:f}),d.pathnameBase!==`/`&&(a=Pe([a,d.pathnameBase]))}return o}function Se(e,t){typeof e==`string`&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=we(e.path,e.caseSensitive,e.end);return Ce(e,t,n,r)}function Ce(e,t,n,r){let i=t.match(n);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,`$1`),s=i.slice(1);return{params:r.reduce((e,{paramName:t,isOptional:n},r)=>{if(t===`*`){let e=s[r]||``;o=a.slice(0,a.length-e.length).replace(/(.)\/+$/,`$1`)}let i=s[r];return n&&!i?e[t]=void 0:e[t]=(i||``).replace(/%2F/g,`/`),e},{}),pathname:a,pathnameBase:o,pattern:e}}function we(e,t=!1,n=!0){w(e===`*`||!e.endsWith(`*`)||e.endsWith(`/*`),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,`/*`)}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,`/*`)}".`);let r=[],i=`^`+e.replace(/\/*\*?$/,``).replace(/^\/*/,`/`).replace(/[\\.*+^${}|()[\]]/g,`\\$&`).replace(/\/:([\w-]+)(\?)?/g,(e,t,n,i,a)=>{if(r.push({paramName:t,isOptional:n!=null}),n){let t=a.charAt(i+e.length);return t&&t!==`/`?`/([^\\/]*)`:`(?:/([^\\/]*))?`}return`/([^\\/]+)`}).replace(/\/([\w-]+)\?(\/|$)/g,`(/$1)?$2`);return e.endsWith(`*`)?(r.push({paramName:`*`}),i+=e===`*`||e===`/*`?`(.*)$`:`(?:\\/(.+)|\\/*)$`):n?i+=`\\/*$`:e!==``&&e!==`/`&&(i+=`(?:(?=\\/|$))`),[new RegExp(i,t?void 0:`i`),r]}function Te(e){try{return e.split(`/`).map(e=>decodeURIComponent(e).replace(/\//g,`%2F`)).join(`/`)}catch(t){return w(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function Ee(e,t){if(t===`/`)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith(`/`)?t.length-1:t.length,r=e.charAt(n);return r&&r!==`/`?null:e.slice(n)||`/`}function De(e,t=`/`){let{pathname:n,search:r=``,hash:i=``}=typeof e==`string`?oe(e):e,a;return n?(n=Ne(n),a=n.startsWith(`/`)?Oe(n.substring(1),`/`):Oe(n,t)):a=t,{pathname:a,search:Le(r),hash:Re(i)}}function Oe(e,t){let n=Fe(t).split(`/`);return e.split(`/`).forEach(e=>{e===`..`?n.length>1&&n.pop():e!==`.`&&n.push(e)}),n.length>1?n.join(`/`):`/`}function ke(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Ae(e){return e.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function je(e){let t=Ae(e);return t.map((e,n)=>n===t.length-1?e.pathname:e.pathnameBase)}function Me(e,t,n,r=!1){let i;typeof e==`string`?i=oe(e):(i={...e},C(!i.pathname||!i.pathname.includes(`?`),ke(`?`,`pathname`,`search`,i)),C(!i.pathname||!i.pathname.includes(`#`),ke(`#`,`pathname`,`hash`,i)),C(!i.search||!i.search.includes(`#`),ke(`#`,`search`,`hash`,i)));let a=e===``||i.pathname===``,o=a?`/`:i.pathname,s;if(o==null)s=n;else{let e=t.length-1;if(!r&&o.startsWith(`..`)){let t=o.split(`/`);for(;t[0]===`..`;)t.shift(),--e;i.pathname=t.join(`/`)}s=e>=0?t[e]:`/`}let c=De(i,s),l=o&&o!==`/`&&o.endsWith(`/`),u=(a||o===`.`)&&n.endsWith(`/`);return!c.pathname.endsWith(`/`)&&(l||u)&&(c.pathname+=`/`),c}var Ne=e=>e.replace(/[\\/]{2,}/g,`/`),Pe=e=>Ne(e.join(`/`)),Fe=e=>e.replace(/\/+$/,``),Ie=e=>Fe(e).replace(/^\/*/,`/`),Le=e=>!e||e===`?`?``:e.startsWith(`?`)?e:`?`+e,Re=e=>!e||e===`#`?``:e.startsWith(`#`)?e:`#`+e,ze=class{constructor(e,t,n,r=!1){this.status=e,this.statusText=t||``,this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function Be(e){return e!=null&&typeof e.status==`number`&&typeof e.statusText==`string`&&typeof e.internal==`boolean`&&`data`in e}function Ve(e){return Pe(e.map(e=>e.route.path).filter(Boolean))||`/`}var He=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;function Ue(e,t){let n=e;if(typeof n!=`string`||!y.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let r=n,i=!1;if(He)try{let e=new URL(window.location.href),r=b.test(n)?new URL(x(n,e.protocol)):new URL(n),a=Ee(r.pathname,t);r.origin===e.origin&&a!=null?n=a+r.search+r.hash:i=!0}catch{w(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:i,to:n}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);var We=[`POST`,`PUT`,`PATCH`,`DELETE`];new Set(We);var Ge=[`GET`,...We];new Set(Ge);var Ke=[`about:`,`blob:`,`chrome:`,`chrome-untrusted:`,`content:`,`data:`,`devtools:`,`file:`,`filesystem:`,`javascript:`];function qe(e){try{return Ke.includes(new URL(e).protocol)}catch{return!1}}var Je=p.createContext(null);Je.displayName=`DataRouter`;var Ye=p.createContext(null);Ye.displayName=`DataRouterState`;var Xe=p.createContext(!1);function Ze(){return p.useContext(Xe)}var Qe=p.createContext({isTransitioning:!1});Qe.displayName=`ViewTransition`;var $e=p.createContext(new Map);$e.displayName=`Fetchers`;var et=p.createContext(null);et.displayName=`Await`;var tt=p.createContext(null);tt.displayName=`Navigation`;var nt=p.createContext(null);nt.displayName=`Location`;var rt=p.createContext({outlet:null,matches:[],isDataRoute:!1});rt.displayName=`Route`;var it=p.createContext(null);it.displayName=`RouteError`;var at=`REACT_ROUTER_ERROR`,ot=`REDIRECT`,st=`ROUTE_ERROR_RESPONSE`;function ct(e){if(e.startsWith(`${at}:${ot}:{`))try{let t=JSON.parse(e.slice(28));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`&&typeof t.location==`string`&&typeof t.reloadDocument==`boolean`&&typeof t.replace==`boolean`)return t}catch{}}function lt(e){if(e.startsWith(`${at}:${st}:{`))try{let t=JSON.parse(e.slice(40));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`)return new ze(t.status,t.statusText,t.data)}catch{}}function ut(e,{relative:t}={}){C(dt(),`useHref() may be used only in the context of a <Router> component.`);let{basename:n,navigator:r}=p.useContext(tt),{hash:i,pathname:a,search:o}=vt(e,{relative:t}),s=a;return n!==`/`&&(s=a===`/`?n:Pe([n,a])),r.createHref({pathname:s,search:o,hash:i})}function dt(){return p.useContext(nt)!=null}function ft(){return C(dt(),`useLocation() may be used only in the context of a <Router> component.`),p.useContext(nt).location}var pt=`You should call navigate() in a React.useEffect(), not when your component is first rendered.`;function mt(e){p.useContext(tt).static||p.useLayoutEffect(e)}function ht(){let{isDataRoute:e}=p.useContext(rt);return e?Lt():gt()}function gt(){C(dt(),`useNavigate() may be used only in the context of a <Router> component.`);let e=p.useContext(Je),{basename:t,navigator:n}=p.useContext(tt),{matches:r}=p.useContext(rt),{pathname:i}=ft(),a=JSON.stringify(je(r)),o=p.useRef(!1);return mt(()=>{o.current=!0}),p.useCallback((r,s={})=>{if(w(o.current,pt),!o.current)return;if(typeof r==`number`){n.go(r);return}let c=Me(r,JSON.parse(a),i,s.relative===`path`);e==null&&t!==`/`&&(c.pathname=c.pathname===`/`?t:Pe([t,c.pathname])),(s.replace?n.replace:n.push)(c,s.state,s)},[t,n,a,i,e])}p.createContext(null);function _t(){let{matches:e}=p.useContext(rt);return e[e.length-1]?.params??{}}function vt(e,{relative:t}={}){let{matches:n}=p.useContext(rt),{pathname:r}=ft(),i=JSON.stringify(je(n));return p.useMemo(()=>Me(e,JSON.parse(i),r,t===`path`),[e,i,r,t])}function yt(e,t){return bt(e,t)}function bt(e,t,n){C(dt(),`useRoutes() may be used only in the context of a <Router> component.`);let{navigator:r}=p.useContext(tt),{matches:i}=p.useContext(rt),a=i[i.length-1],o=a?a.params:{},s=a?a.pathname:`/`,c=a?a.pathnameBase:`/`,l=a&&a.route;{let e=l&&l.path||``;zt(s,!l||e.endsWith(`*`)||e.endsWith(`*?`),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${s}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${e}"> to <Route path="${e===`/`?`*`:`${e}/*`}">.`)}let u=ft(),d;if(t){let e=typeof t==`string`?oe(t):t;C(c===`/`||e.pathname?.startsWith(c),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${e.pathname}" was given in the \`location\` prop.`),d=e}else d=u;let f=d.pathname||`/`,m=f;if(c!==`/`){let e=c.replace(/^\//,``).split(`/`);m=`/`+f.replace(/^\//,``).split(`/`).slice(e.length).join(`/`)}let h=n&&n.state.matches.length?n.state.matches.map(e=>Object.assign(e,{route:n.manifest[e.route.id]||e.route})):le(e,{pathname:m});w(l||h!=null,`No routes matched location "${d.pathname}${d.search}${d.hash}" `),w(h==null||h[h.length-1].route.element!==void 0||h[h.length-1].route.Component!==void 0||h[h.length-1].route.lazy!==void 0,`Matched leaf route at location "${d.pathname}${d.search}${d.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let g=Dt(h&&h.map(e=>Object.assign({},e,{params:Object.assign({},o,e.params),pathname:Pe([c,r.encodeLocation?r.encodeLocation(e.pathname.replace(/%/g,`%25`).replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathname]),pathnameBase:e.pathnameBase===`/`?c:Pe([c,r.encodeLocation?r.encodeLocation(e.pathnameBase.replace(/%/g,`%25`).replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathnameBase])})),i,n);return t&&g?p.createElement(nt.Provider,{value:{location:{pathname:`/`,search:``,hash:``,state:null,key:`default`,mask:void 0,...d},navigationType:`POP`}},g):g}function xt(){let e=It(),t=Be(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r=`rgba(200,200,200, 0.5)`,i={padding:`0.5rem`,backgroundColor:r},a={padding:`2px 4px`,backgroundColor:r},o=null;return console.error(`Error handled by React Router default ErrorBoundary:`,e),o=p.createElement(p.Fragment,null,p.createElement(`p`,null,`💿 Hey developer 👋`),p.createElement(`p`,null,`You can provide a way better UX than this when your app throws errors by providing your own `,p.createElement(`code`,{style:a},`ErrorBoundary`),` or`,` `,p.createElement(`code`,{style:a},`errorElement`),` prop on your route.`)),p.createElement(p.Fragment,null,p.createElement(`h2`,null,`Unexpected Application Error!`),p.createElement(`h3`,{style:{fontStyle:`italic`}},t),n?p.createElement(`pre`,{style:i},n):null,o)}var St=p.createElement(xt,null),Ct=class extends p.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!==`idle`&&e.revalidation===`idle`?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error===void 0?t.error:e.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error(`React Router caught the following error during render`,e)}render(){let e=this.state.error;if(this.context&&typeof e==`object`&&e&&`digest`in e&&typeof e.digest==`string`){let t=lt(e.digest);t&&(e=t)}let t=e===void 0?this.props.children:p.createElement(rt.Provider,{value:this.props.routeContext},p.createElement(it.Provider,{value:e,children:this.props.component}));return this.context?p.createElement(Tt,{error:e},t):t}};Ct.contextType=Xe;var wt=new WeakMap;function Tt({children:e,error:t}){let{basename:n}=p.useContext(tt);if(typeof t==`object`&&t&&`digest`in t&&typeof t.digest==`string`){let e=ct(t.digest);if(e){let r=wt.get(t);if(r)throw r;let i=Ue(e.location,n),a=i.absoluteURL||i.to;if(qe(a))throw Error(`Invalid redirect location`);if(He&&!wt.get(t))if(i.isExternal||e.reloadDocument)window.location.href=a;else{let n=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(i.to,{replace:e.replace}));throw wt.set(t,n),n}return p.createElement(`meta`,{httpEquiv:`refresh`,content:`0;url=${a}`})}}return e}function Et({routeContext:e,match:t,children:n}){let r=p.useContext(Je);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),p.createElement(rt.Provider,{value:e},n)}function Dt(e,t=[],n){let r=n?.state;if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let i=e,a=r?.errors;if(a!=null){let e=i.findIndex(e=>e.route.id&&a?.[e.route.id]!==void 0);C(e>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(`,`)}`),i=i.slice(0,Math.min(i.length,e+1))}let o=!1,s=-1;if(n&&r){o=r.renderFallback;for(let e=0;e<i.length;e++){let t=i[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(s=e),t.route.id){let{loaderData:e,errors:a}=r,c=t.route.loader&&!e.hasOwnProperty(t.route.id)&&(!a||a[t.route.id]===void 0);if(t.route.lazy||c){n.isStatic&&(o=!0),i=s>=0?i.slice(0,s+1):[i[0]];break}}}}let c=n?.onError,l=r&&c?(e,t)=>{c(e,{location:r.location,params:r.matches?.[0]?.params??{},pattern:Ve(r.matches),errorInfo:t})}:void 0;return i.reduceRight((e,n,c)=>{let u,d=!1,f=null,m=null;r&&(u=a&&n.route.id?a[n.route.id]:void 0,f=n.route.errorElement||St,o&&(s<0&&c===0?(zt(`route-fallback`,!1,"No `HydrateFallback` element provided to render during initial hydration"),d=!0,m=null):s===c&&(d=!0,m=n.route.hydrateFallbackElement||null)));let h=t.concat(i.slice(0,c+1)),g=()=>{let t;return t=u?f:d?m:n.route.Component?p.createElement(n.route.Component,null):n.route.element?n.route.element:e,p.createElement(Et,{match:n,routeContext:{outlet:e,matches:h,isDataRoute:r!=null},children:t})};return r&&(n.route.ErrorBoundary||n.route.errorElement||c===0)?p.createElement(Ct,{location:r.location,revalidation:r.revalidation,component:f,error:u,children:g(),routeContext:{outlet:null,matches:h,isDataRoute:!0},onError:l}):g()},null)}function Ot(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function kt(e){let t=p.useContext(Je);return C(t,Ot(e)),t}function At(e){let t=p.useContext(Ye);return C(t,Ot(e)),t}function jt(e){let t=p.useContext(rt);return C(t,Ot(e)),t}function Mt(e){let t=jt(e),n=t.matches[t.matches.length-1];return C(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function Nt(){return Mt(`useRouteId`)}function Pt(){let e=At(`useNavigation`);return p.useMemo(()=>{let{matches:t,historyAction:n,...r}=e.navigation;return r},[e.navigation])}function Ft(){let{matches:e,loaderData:t}=At(`useMatches`);return p.useMemo(()=>e.map(e=>T(e,t)),[e,t])}function It(){let e=p.useContext(it),t=At(`useRouteError`),n=Mt(`useRouteError`);return e===void 0?t.errors?.[n]:e}function Lt(){let{router:e}=kt(`useNavigate`),t=Mt(`useNavigate`),n=p.useRef(!1);return mt(()=>{n.current=!0}),p.useCallback(async(r,i={})=>{w(n.current,pt),n.current&&(typeof r==`number`?await e.navigate(r):await e.navigate(r,{fromRouteId:t,...i}))},[e,t])}var Rt={};function zt(e,t,n){!t&&!Rt[e]&&(Rt[e]=!0,w(!1,n))}p.memo(Bt);function Bt({routes:e,manifest:t,future:n,state:r,isStatic:i,onError:a}){return bt(e,void 0,{manifest:t,state:r,isStatic:i,onError:a,future:n})}function Vt({to:e,replace:t,state:n,relative:r}){C(dt(),`<Navigate> may be used only in the context of a <Router> component.`);let{static:i}=p.useContext(tt);w(!i,`<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.`);let{matches:a}=p.useContext(rt),{pathname:o}=ft(),s=ht(),c=Me(e,je(a),o,r===`path`),l=JSON.stringify(c);return p.useEffect(()=>{s(JSON.parse(l),{replace:t,state:n,relative:r})},[s,l,r,t,n]),null}function k(e){C(!1,`A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.`)}function Ht({basename:e=`/`,children:t=null,location:n,navigationType:r=`POP`,navigator:i,static:a=!1,useTransitions:o}){C(!dt(),`You cannot render a <Router> inside another <Router>. You should never have more than one in your app.`);let s=e.replace(/^\/*/,`/`),c=p.useMemo(()=>({basename:s,navigator:i,static:a,useTransitions:o,future:{}}),[s,i,a,o]);typeof n==`string`&&(n=oe(n));let{pathname:l=`/`,search:u=``,hash:d=``,state:f=null,key:m=`default`,mask:h}=n,g=p.useMemo(()=>{let e=Ee(l,s);return e==null?null:{location:{pathname:e,search:u,hash:d,state:f,key:m,mask:h},navigationType:r}},[s,l,u,d,f,m,r,h]);return w(g!=null,`<Router basename="${s}"> is not able to match the URL "${l}${u}${d}" because it does not start with the basename, so the <Router> won't render anything.`),g==null?null:p.createElement(tt.Provider,{value:c},p.createElement(nt.Provider,{children:t,value:g}))}function Ut({children:e,location:t}){return yt(Wt(e),t)}p.Component;function Wt(e,t=[]){let n=[];return p.Children.forEach(e,(e,r)=>{if(!p.isValidElement(e))return;let i=[...t,r];if(e.type===p.Fragment){n.push.apply(n,Wt(e.props.children,i));return}C(e.type===k,`[${typeof e.type==`string`?e.type:e.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),C(!e.props.index||!e.props.children,`An index route cannot have child routes.`);let a={id:e.props.id||i.join(`-`),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,middleware:e.props.middleware,loader:e.props.loader,action:e.props.action,hydrateFallbackElement:e.props.hydrateFallbackElement,HydrateFallback:e.props.HydrateFallback,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:e.props.hasErrorBoundary===!0||e.props.ErrorBoundary!=null||e.props.errorElement!=null,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(a.children=Wt(e.props.children,i)),n.push(a)}),n}var Gt=`get`,Kt=`application/x-www-form-urlencoded`;function qt(e){return typeof HTMLElement<`u`&&e instanceof HTMLElement}function Jt(e){return qt(e)&&e.tagName.toLowerCase()===`button`}function Yt(e){return qt(e)&&e.tagName.toLowerCase()===`form`}function Xt(e){return qt(e)&&e.tagName.toLowerCase()===`input`}function Zt(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Qt(e,t){return e.button===0&&(!t||t===`_self`)&&!Zt(e)}var $t=null;function en(){if($t===null)try{new FormData(document.createElement(`form`),0),$t=!1}catch{$t=!0}return $t}var tn=new Set([`application/x-www-form-urlencoded`,`multipart/form-data`,`text/plain`]);function nn(e){return e!=null&&!tn.has(e)?(w(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Kt}"`),null):e}function rn(e,t){let n,r,i,a,o;if(Yt(e)){let o=e.getAttribute(`action`);r=o?Ee(o,t):null,n=e.getAttribute(`method`)||Gt,i=nn(e.getAttribute(`enctype`))||Kt,a=new FormData(e)}else if(Jt(e)||Xt(e)&&(e.type===`submit`||e.type===`image`)){let o=e.form;if(o==null)throw Error(`Cannot submit a <button> or <input type="submit"> without a <form>`);let s=e.getAttribute(`formaction`)||o.getAttribute(`action`);if(r=s?Ee(s,t):null,n=e.getAttribute(`formmethod`)||o.getAttribute(`method`)||Gt,i=nn(e.getAttribute(`formenctype`))||nn(o.getAttribute(`enctype`))||Kt,a=new FormData(o,e),!en()){let{name:t,type:n,value:r}=e;if(n===`image`){let e=t?`${t}.`:``;a.append(`${e}x`,`0`),a.append(`${e}y`,`0`)}else t&&a.append(t,r)}}else if(qt(e))throw Error(`Cannot submit element that is not <form>, <button>, or <input type="submit|image">`);else n=Gt,r=null,i=Kt,o=e;return a&&i===`text/plain`&&(o=a,a=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:a,body:o}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);var an={"&":`\\u0026`,">":`\\u003e`,"<":`\\u003c`,"\u2028":`\\u2028`,"\u2029":`\\u2029`},on=/[&><\u2028\u2029]/g;function sn(e){return e.replace(on,e=>an[e])}function cn(e,t){if(e===!1||e==null)throw Error(t)}function ln(e,t,n,r){let i=typeof e==`string`?new URL(e,typeof window>`u`?`server://singlefetch/`:window.location.origin):e;return n?i.pathname.endsWith(`/`)?i.pathname=`${i.pathname}_.${r}`:i.pathname=`${i.pathname}.${r}`:i.pathname===`/`?i.pathname=`_root.${r}`:t&&Ee(i.pathname,t)===`/`?i.pathname=`${Fe(t)}/_root.${r}`:i.pathname=`${Fe(i.pathname)}.${r}`,i}async function un(e,t){if(e.id in t)return t[e.id];try{let n=await v(()=>import(e.module),[],import.meta.url);return t[e.id]=n,n}catch(t){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function dn(e){return e!=null&&typeof e.page==`string`}function fn(e){return e==null?!1:e.href==null?e.rel===`preload`&&typeof e.imageSrcSet==`string`&&typeof e.imageSizes==`string`:typeof e.rel==`string`&&typeof e.href==`string`}async function pn(e,t,n){return vn((await Promise.all(e.map(async e=>{let r=t.routes[e.route.id];if(r){let e=await un(r,n);return e.links?e.links():[]}return[]}))).flat(1).filter(fn).filter(e=>e.rel===`stylesheet`||e.rel===`preload`).map(e=>e.rel===`stylesheet`?{...e,rel:`prefetch`,as:`style`}:{...e,rel:`prefetch`}))}function mn(e,t,n,r,i,a){let o=(e,t)=>!n[t]||e.route.id!==n[t].route.id,s=(e,t)=>n[t].pathname!==e.pathname||n[t].route.path?.endsWith(`*`)&&n[t].params[`*`]!==e.params[`*`];return a===`assets`?t.filter((e,t)=>o(e,t)||s(e,t)):a===`data`?t.filter((t,a)=>{let c=r.routes[t.route.id];if(!c||!c.hasLoader)return!1;if(o(t,a)||s(t,a))return!0;if(t.route.shouldRevalidate){let r=t.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:t.params,defaultShouldRevalidate:!0});if(typeof r==`boolean`)return r}return!0}):[]}function hn(e,t,{includeHydrateFallback:n}={}){return gn(e.map(e=>{let r=t.routes[e.route.id];if(!r)return[];let i=[r.module];return r.clientActionModule&&(i=i.concat(r.clientActionModule)),r.clientLoaderModule&&(i=i.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(i=i.concat(r.hydrateFallbackModule)),r.imports&&(i=i.concat(r.imports)),i}).flat(1))}function gn(e){return[...new Set(e)]}function _n(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}function vn(e,t){let n=new Set,r=new Set(t);return e.reduce((e,i)=>{if(t&&!dn(i)&&i.as===`script`&&i.href&&r.has(i.href))return e;let a=JSON.stringify(_n(i));return n.has(a)||(n.add(a),e.push({key:a,link:i})),e},[])}function yn(){let e=p.useContext(Je);return cn(e,`You must render this element inside a <DataRouterContext.Provider> element`),e}function bn(){let e=p.useContext(Ye);return cn(e,`You must render this element inside a <DataRouterStateContext.Provider> element`),e}var xn=p.createContext(void 0);xn.displayName=`FrameworkContext`;function Sn(){let e=p.useContext(xn);return cn(e,`You must render this element inside a <HydratedRouter> element`),e}function Cn(e,t){let n=p.useContext(xn),[r,i]=p.useState(!1),[a,o]=p.useState(!1),{onFocus:s,onBlur:c,onMouseEnter:l,onMouseLeave:u,onTouchStart:d}=t,f=p.useRef(null);p.useEffect(()=>{if(e===`render`&&o(!0),e===`viewport`){let e=new IntersectionObserver(e=>{e.forEach(e=>{o(e.isIntersecting)})},{threshold:.5});return f.current&&e.observe(f.current),()=>{e.disconnect()}}},[e]),p.useEffect(()=>{if(r){let e=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(e)}}},[r]);let m=()=>{i(!0)},h=()=>{i(!1),o(!1)};return n?e===`intent`?[a,f,{onFocus:wn(s,m),onBlur:wn(c,h),onMouseEnter:wn(l,m),onMouseLeave:wn(u,h),onTouchStart:wn(d,m)}]:[a,f,{}]:[!1,f,{}]}function wn(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function Tn({page:e,...t}){let n=Ze(),{nonce:r}=Sn(),{router:i}=yn(),a=p.useMemo(()=>le(i.routes,e,i.basename),[i.routes,e,i.basename]);return a?(t.nonce==null&&r&&(t={...t,nonce:r}),n?p.createElement(Dn,{page:e,matches:a,...t}):p.createElement(On,{page:e,matches:a,...t})):null}function En(e){let{manifest:t,routeModules:n}=Sn(),[r,i]=p.useState([]);return p.useEffect(()=>{let r=!1;return pn(e,t,n).then(e=>{r||i(e)}),()=>{r=!0}},[e,t,n]),r}function Dn({page:e,matches:t,...n}){let r=ft(),{future:i}=Sn(),{basename:a}=yn(),o=p.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=ln(e,a,i.v8_trailingSlashAwareDataRequests,`rsc`),o=!1,s=[];for(let e of t)typeof e.route.shouldRevalidate==`function`?o=!0:s.push(e.route.id);return o&&s.length>0&&n.searchParams.set(`_routes`,s.join(`,`)),[n.pathname+n.search]},[a,i.v8_trailingSlashAwareDataRequests,e,r,t]);return p.createElement(p.Fragment,null,o.map(e=>p.createElement(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})))}function On({page:e,matches:t,...n}){let r=ft(),{future:i,manifest:a,routeModules:o}=Sn(),{basename:s}=yn(),{loaderData:c,matches:l}=bn(),u=p.useMemo(()=>mn(e,t,l,a,r,`data`),[e,t,l,a,r]),d=p.useMemo(()=>mn(e,t,l,a,r,`assets`),[e,t,l,a,r]),f=p.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=new Set,l=!1;if(t.forEach(e=>{let t=a.routes[e.route.id];!t||!t.hasLoader||(!u.some(t=>t.route.id===e.route.id)&&e.route.id in c&&o[e.route.id]?.shouldRevalidate||t.hasClientLoader?l=!0:n.add(e.route.id))}),n.size===0)return[];let d=ln(e,s,i.v8_trailingSlashAwareDataRequests,`data`);return l&&n.size>0&&d.searchParams.set(`_routes`,t.filter(e=>n.has(e.route.id)).map(e=>e.route.id).join(`,`)),[d.pathname+d.search]},[s,i.v8_trailingSlashAwareDataRequests,c,r,a,u,t,e,o]),m=p.useMemo(()=>hn(d,a),[d,a]),h=En(d);return p.createElement(p.Fragment,null,f.map(e=>p.createElement(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})),m.map(e=>p.createElement(`link`,{key:e,rel:`modulepreload`,href:e,...n})),h.map(({key:e,link:t})=>p.createElement(`link`,{key:e,nonce:n.nonce,...t,crossOrigin:t.crossOrigin??n.crossOrigin})))}function kn(...e){return t=>{e.forEach(e=>{typeof e==`function`?e(t):e!=null&&(e.current=t)})}}p.Component;var An=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;try{An&&(window.__reactRouterVersion=`7.18.1`)}catch{}function jn({basename:e,children:t,useTransitions:n,window:r}){let i=p.useRef();i.current??=te({window:r,v5Compat:!0});let a=i.current,[o,s]=p.useState({action:a.action,location:a.location}),c=p.useCallback(e=>{n===!1?s(e):p.startTransition(()=>s(e))},[n]);return p.useLayoutEffect(()=>a.listen(c),[a,c]),p.createElement(Ht,{basename:e,children:t,location:o.location,navigationType:o.action,navigator:a,useTransitions:n})}function Mn({basename:e,children:t,history:n,useTransitions:r}){let[i,a]=p.useState({action:n.action,location:n.location}),o=p.useCallback(e=>{r===!1?a(e):p.startTransition(()=>a(e))},[r]);return p.useLayoutEffect(()=>n.listen(o),[n,o]),p.createElement(Ht,{basename:e,children:t,location:i.location,navigationType:i.action,navigator:n,useTransitions:r})}Mn.displayName=`unstable_HistoryRouter`;var A=p.forwardRef(function({onClick:e,discover:t=`render`,prefetch:n=`none`,relative:r,reloadDocument:i,replace:a,mask:o,state:s,target:c,to:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f,...m},h){let{basename:g,navigator:_,useTransitions:v}=p.useContext(tt),b=typeof l==`string`&&y.test(l),x=Ue(l,g);l=x.to;let ee=ut(l,{relative:r}),S=ft(),te=null;if(o){let e=Me(o,[],S.mask?S.mask.pathname:`/`,!0);g!==`/`&&(e.pathname=e.pathname===`/`?g:Pe([g,e.pathname])),te=_.createHref(e)}let[C,w,ne]=Cn(n,m),re=zn(l,{replace:a,mask:o,state:s,target:c,preventScrollReset:u,relative:r,viewTransition:d,defaultShouldRevalidate:f,useTransitions:v});function ie(t){e&&e(t),t.defaultPrevented||re(t)}let ae=!(x.isExternal||i),oe=p.createElement(`a`,{...m,...ne,href:(ae?te:void 0)||x.absoluteURL||ee,onClick:ae?ie:e,ref:kn(h,w),target:c,"data-discover":!b&&t===`render`?`true`:void 0});return C&&!b?p.createElement(p.Fragment,null,oe,p.createElement(Tn,{page:ee})):oe});A.displayName=`Link`;var Nn=p.forwardRef(function({"aria-current":e=`page`,caseSensitive:t=!1,className:n=``,end:r=!1,style:i,to:a,viewTransition:o,children:s,...c},l){let u=vt(a,{relative:c.relative}),d=ft(),f=p.useContext(Ye),{navigator:m,basename:h}=p.useContext(tt),g=f!=null&&Yn(u)&&o===!0,_=m.encodeLocation?m.encodeLocation(u).pathname:u.pathname,v=d.pathname,y=f&&f.navigation&&f.navigation.location?f.navigation.location.pathname:null;t||(v=v.toLowerCase(),y=y?y.toLowerCase():null,_=_.toLowerCase()),y&&h&&(y=Ee(y,h)||y);let b=_!==`/`&&_.endsWith(`/`)?_.length-1:_.length,x=v===_||!r&&v.startsWith(_)&&v.charAt(b)===`/`,ee=y!=null&&(y===_||!r&&y.startsWith(_)&&y.charAt(_.length)===`/`),S={isActive:x,isPending:ee,isTransitioning:g},te=x?e:void 0,C;C=typeof n==`function`?n(S):[n,x?`active`:null,ee?`pending`:null,g?`transitioning`:null].filter(Boolean).join(` `);let w=typeof i==`function`?i(S):i;return p.createElement(A,{...c,"aria-current":te,className:C,ref:l,style:w,to:a,viewTransition:o},typeof s==`function`?s(S):s)});Nn.displayName=`NavLink`;var Pn=p.forwardRef(({discover:e=`render`,fetcherKey:t,navigate:n,reloadDocument:r,replace:i,state:a,method:o=Gt,action:s,onSubmit:c,relative:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f,...m},h)=>{let{useTransitions:g}=p.useContext(tt),_=Hn(),v=Un(s,{relative:l}),b=o.toLowerCase()===`get`?`get`:`post`,x=typeof s==`string`&&y.test(s);return p.createElement(`form`,{ref:h,method:b,action:v,onSubmit:r?c:e=>{if(c&&c(e),e.defaultPrevented)return;e.preventDefault();let r=e.nativeEvent.submitter,s=r?.getAttribute(`formmethod`)||o,m=()=>_(r||e.currentTarget,{fetcherKey:t,method:s,navigate:n,replace:i,state:a,relative:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f});g&&n!==!1?p.startTransition(()=>m()):m()},...m,"data-discover":!x&&e===`render`?`true`:void 0})});Pn.displayName=`Form`;function Fn({getKey:e,storageKey:t,...n}){let r=p.useContext(xn),{basename:i}=p.useContext(tt),a=ft(),o=Ft();qn({getKey:e,storageKey:t});let s=p.useMemo(()=>{if(!r||!e)return null;let t=Kn(a,o,i,e);return t===a.key?null:t},[]);if(!r||r.isSpaMode)return null;let c=((e,t)=>{if(!window.history.state||!window.history.state.key){let e=Math.random().toString(32).slice(2);window.history.replaceState({key:e},``)}try{let n=JSON.parse(sessionStorage.getItem(e)||`{}`)[t||window.history.state.key];typeof n==`number`&&window.scrollTo(0,n)}catch(t){console.error(t),sessionStorage.removeItem(e)}}).toString();return n.nonce==null&&r?.nonce&&(n.nonce=r.nonce),p.createElement(`script`,{...n,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${c})(${sn(JSON.stringify(t||Wn))}, ${sn(JSON.stringify(s))})`}})}Fn.displayName=`ScrollRestoration`;function In(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Ln(e){let t=p.useContext(Je);return C(t,In(e)),t}function Rn(e){let t=p.useContext(Ye);return C(t,In(e)),t}function zn(e,{target:t,replace:n,mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,defaultShouldRevalidate:c,useTransitions:l}={}){let u=ht(),d=ft(),f=vt(e,{relative:o});return p.useCallback(m=>{if(Qt(m,t)){m.preventDefault();let t=n===void 0?ae(d)===ae(f):n,h=()=>u(e,{replace:t,mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,defaultShouldRevalidate:c});l?p.startTransition(()=>h()):h()}},[d,u,f,n,r,i,t,e,a,o,s,c,l])}var Bn=0,Vn=()=>`__${String(++Bn)}__`;function Hn(){let{router:e}=Ln(`useSubmit`),{basename:t}=p.useContext(tt),n=Nt(),r=e.fetch,i=e.navigate;return p.useCallback(async(e,a={})=>{let{action:o,method:s,encType:c,formData:l,body:u}=rn(e,t);if(a.navigate===!1){let e=a.fetcherKey||Vn();await r(e,n,a.action||o,{defaultShouldRevalidate:a.defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,flushSync:a.flushSync})}else await i(a.action||o,{defaultShouldRevalidate:a.defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,replace:a.replace,state:a.state,fromRouteId:n,flushSync:a.flushSync,viewTransition:a.viewTransition})},[r,i,t,n])}function Un(e,{relative:t}={}){let{basename:n}=p.useContext(tt),r=p.useContext(rt);C(r,`useFormAction must be used inside a RouteContext`);let[i]=r.matches.slice(-1),a={...vt(e||`.`,{relative:t})},o=ft();if(e==null){a.search=o.search;let e=new URLSearchParams(a.search),t=e.getAll(`index`);if(t.some(e=>e===``)){e.delete(`index`),t.filter(e=>e).forEach(t=>e.append(`index`,t));let n=e.toString();a.search=n?`?${n}`:``}}return(!e||e===`.`)&&i.route.index&&(a.search=a.search?a.search.replace(/^\?/,`?index&`):`?index`),n!==`/`&&(a.pathname=a.pathname===`/`?n:Pe([n,a.pathname])),ae(a)}var Wn=`react-router-scroll-positions`,Gn={};function Kn(e,t,n,r){let i=null;return r&&(i=r(n===`/`?e:{...e,pathname:Ee(e.pathname,n)||e.pathname},t)),i??=e.key,i}function qn({getKey:e,storageKey:t}={}){let{router:n}=Ln(`useScrollRestoration`),{restoreScrollPosition:r,preventScrollReset:i}=Rn(`useScrollRestoration`),{basename:a}=p.useContext(tt),o=ft(),s=Ft(),c=Pt();p.useEffect(()=>(window.history.scrollRestoration=`manual`,()=>{window.history.scrollRestoration=`auto`}),[]),Jn(p.useCallback(()=>{if(c.state===`idle`){let t=Kn(o,s,a,e);Gn[t]=window.scrollY}try{sessionStorage.setItem(t||Wn,JSON.stringify(Gn))}catch(e){w(!1,`Failed to save scroll positions in sessionStorage, <ScrollRestoration /> will not work properly (${e}).`)}window.history.scrollRestoration=`auto`},[c.state,e,a,o,s,t])),typeof document<`u`&&(p.useLayoutEffect(()=>{try{let e=sessionStorage.getItem(t||Wn);e&&(Gn=JSON.parse(e))}catch{}},[t]),p.useLayoutEffect(()=>{let t=n?.enableScrollRestoration(Gn,()=>window.scrollY,e?(t,n)=>Kn(t,n,a,e):void 0);return()=>t&&t()},[n,a,e]),p.useLayoutEffect(()=>{if(r!==!1){if(typeof r==`number`){window.scrollTo(0,r);return}try{if(o.hash){let e=document.getElementById(decodeURIComponent(o.hash.slice(1)));if(e){e.scrollIntoView();return}}}catch{w(!1,`"${o.hash.slice(1)}" is not a decodable element ID. The view will not scroll to it.`)}i!==!0&&window.scrollTo(0,0)}},[o,r,i]))}function Jn(e,t){let{capture:n}=t||{};p.useEffect(()=>{let t=n==null?void 0:{capture:n};return window.addEventListener(`pagehide`,e,t),()=>{window.removeEventListener(`pagehide`,e,t)}},[e,n])}function Yn(e,{relative:t}={}){let n=p.useContext(Qe);C(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Ln(`useViewTransitionState`),i=vt(e,{relative:t});if(!n.isTransitioning)return!1;let a=Ee(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=Ee(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Se(i.pathname,o)!=null||Se(i.pathname,a)!=null}var j=t(),Xn=(0,p.createContext)();function Zn(){return(0,p.useContext)(Xn)}function Qn({children:e}){let[t,n]=(0,p.useState)(()=>{try{return localStorage.getItem(`ys-lang`)||`en`}catch{return`en`}});(0,p.useEffect)(()=>{try{localStorage.setItem(`ys-lang`,t)}catch{}document.documentElement.lang=t===`es`?`es`:`en`},[t]);let r={en:`es`,es:`en`};return(0,j.jsx)(Xn.Provider,{value:{lang:t,toggleLang:()=>n(e=>r[e]||`en`),langLabel:{en:`ES`,es:`EN`},t:e=>{let n=$n[e];return n&&(n[t]||n.en)||e}},children:e})}var $n={Home:{en:`Home`,es:`Inicio`},Products:{en:`Products`,es:`Productos`},Processing:{en:`Processing`},"Why Us":{en:`Why Us`,es:`Por Qué Nosotros`},Contact:{en:`Contact`,es:`Contacto`},"Sustainable Paper, Global Reach":{en:`Sustainable Paper, Global Reach`,es:`Papel Sostenible, Alcance Global`},"Premium Paper & Board":{en:`Premium Paper & Board`,es:`Papel y Cartón Premium`},"& Board Solutions":{en:`& Board Solutions`,es:`y Soluciones en Cartón`},"Explore Products":{en:`Explore Products`,es:`Explorar Productos`},"Get a Quote":{en:`Get a Quote`,es:`Solicitar Cotización`},hero_subtitle:{en:`20+ years manufacturing and exporting grey board, black cardboard, and specialty paper. Strategic partnerships with APP, Sun Paper, Nine Dragons, Liansheng, and Huatai.`,es:`Más de 20 años fabricando y exportando cartón gris, cartulina negra y papel especial. Alianzas estratégicas con APP, Sun Paper, Nine Dragons, Liansheng y Huatai.`},"View Products":{en:`View Products`,es:`Ver Productos`},"View Products →":{en:`View Products →`},"Durable structural packaging — from rigid boxes to folding cartons.":{en:`Durable structural packaging — from rigid boxes to folding cartons.`,es:`Embalaje estructural duradero — desde cajas rígidas hasta estuches plegables.`},"High-performance surfaces for premium printing and publishing.":{en:`High-performance surfaces for premium printing and publishing.`,es:`Superficies de alto rendimiento para impresión y publicación premium.`},"Curated textures for high-end luxury branding.":{en:`Curated textures for high-end luxury branding.`,es:`Texturas seleccionadas para marcas de lujo de alta gama.`},"Safe, food-grade solutions for culinary and beverage applications.":{en:`Safe, food-grade solutions for culinary and beverage applications.`,es:`Soluciones seguras de grado alimenticio para uso culinario y bebidas.`},"What We Supply":{en:`What We Supply`,es:`Qué Suministramos`},"Paper & Board That Performs":{en:`Paper & Board That Performs`,es:`Papel y Cartón de Alto Rendimiento`},"About YOUNGSUN":{en:`About YOUNGSUN`,es:`Sobre YOUNGSUN`},"Your Paper Supply Partner Since 2002":{en:`Your Paper Supply Partner Since 2002`,es:`Su Socio Papelero Desde 2002`},"The YOUNGSUN Difference":{en:`The YOUNGSUN Difference`,es:`La Diferencia YOUNGSUN`},"Why Global Partners Choose Us":{en:`Why Global Partners Choose Us`,es:`Por Qué los Socios Globales Nos Eligen`},"Our Commitment":{en:`Our Commitment`,es:`Nuestro Compromiso`},"Sustainability Is Not Optional":{en:`Sustainability Is Not Optional`,es:`La Sostenibilidad No Es Opcional`},"Worldwide Presence":{en:`Worldwide Presence`,es:`Presencia Mundial`},"Global Reach, Personal Service":{en:`Global Reach, Personal Service`,es:`Alcance Global, Servicio Personal`},"Client Voices":{en:`Client Voices`,es:`Voces de Clientes`},"Trusted by Industry Leaders":{en:`Trusted by Industry Leaders`,es:`Confiado por Líderes de la Industria`},"Get In Touch":{en:`Get In Touch`,es:`Contáctenos`},"Let's Talk Paper":{en:`Let's Talk Paper`,es:`Hablemos de Papel`},"Frequently Asked Questions":{en:`Frequently Asked Questions`,es:`Preguntas Frecuentes`},"Questions About Our Paper Products and Services":{en:`Questions About Our Paper Products and Services`,es:`Preguntas Sobre Nuestros Productos y Servicios`},about_desc:{en:`YOUNGSUN PAPER (Dongguan Banyan Material Co., Ltd.) is headquartered in Dongguan City, Guangdong Province — just 50km from Shenzhen port. Our 20,000m² workshop houses 2 grey board machines and 2 black paper machines, operated by a team of 220+ skilled workers. With a monthly production capacity of 20,000 tons and 50,000 tons of warehouse stock, we ensure fast and reliable delivery to clients worldwide.`,es:`YOUNGSUN PAPER tiene su sede en Dongguan, provincia de Guangdong, a solo 50 km del puerto de Shenzhen. Nuestro taller de 20.000 m² alberga 2 máquinas de cartón gris y 2 de cartulina negra, operadas por más de 220 trabajadores. Con capacidad mensual de 20.000 toneladas y 50.000 toneladas de stock, garantizamos entregas rápidas a clientes en todo el mundo.`},about_desc2:{en:`We partner with China's premier paper mills — including APP, CHENMING, NINEDRAGON, BOHUI, GOLDENEAST, and IPSUN — to source the full spectrum of printing, packaging, and specialty paper grades. Our five sales teams (50+ specialists) serve customers across 60+ countries, exporting 36,000+ tons annually. Every product is FSC and SGS certified. Custom size, weight, and labeling available with free samples.`,es:`Colaboramos con las principales fábricas de China — APP, CHENMING, NINEDRAGON, BOHUI, GOLDENEAST e IPSUN — para ofrecer la gama completa de papeles. Cinco equipos de ventas con más de 50 especialistas atienden a clientes en más de 60 países, exportando más de 36.000 toneladas al año. Todos los productos cuentan con certificación FSC y SGS.`},whyus_desc:{en:`It's not just about paper — it's about reliability, expertise, and a partnership that makes your supply chain stronger.`,es:`No se trata solo de papel — se trata de fiabilidad, experiencia y una asociación que fortalece su cadena de suministro.`},sustainability_subtitle:{en:`Every paper product we supply comes with a chain-of-custody story. We believe transparency — not marketing — is what earns trust.`,es:`Cada producto de papel que suministramos viene con una historia de cadena de custodia. Creemos que la transparencia — no el marketing — es lo que genera confianza.`},global_subtitle:{en:`From our base in China, we serve converters, printers, manufacturers, and brands across six continents. Every client has a dedicated account manager who knows their specifications, preferences, and schedule.`,es:`Desde nuestra base en China, servimos a transformadores, impresores, fabricantes y marcas en seis continentes. Cada cliente tiene un gestor de cuenta dedicado que conoce sus especificaciones.`},testimonials_desc:{en:`What our partners say about working with YOUNGSUN PAPER.`,es:`Lo que dicen nuestros socios sobre trabajar con YOUNGSUN PAPER.`},contact_subtitle:{en:`Tell us what you need — product, specification, volume, and destination. We'll respond with a competitive quote, lead time, and logistics plan within 24 hours.`,es:`Cuéntenos qué necesita — producto, especificación, volumen y destino. Responderemos con una cotización competitiva, plazo de entrega y plan logístico en 24 horas.`},faq_desc:{en:`Quick answers to the most common questions from international buyers, converters, and procurement teams.`,es:`Respuestas rápidas a las preguntas más comunes de compradores internacionales, transformadores y equipos de compras.`},four_cat_desc:{en:`Four product categories. 20+ grades. One reliable supply partner. Select a category to explore specifications, applications, and certifications.`,es:`Cuatro categorías de productos. Más de 20 grados. Un socio de suministro confiable. Seleccione una categoría para explorar especificaciones, aplicaciones y certificaciones.`},"Export Countries":{en:`Export Countries`,es:`Países de Exportación`},"Paper Grades":{en:`Paper Grades`,es:`Tipos de Papel`},"Warehouse Stock":{en:`Warehouse Stock`,es:`Stock en Almacén`},"Annual Export":{en:`Annual Export`,es:`Exportación Anual`},"Countries Served":{en:`Countries Served`,es:`Países Atendidos`},"Years Experience":{en:`Years Experience`,es:`Años de Experiencia`},"Send Us a Message":{en:`Send Us a Message`,es:`Envíenos un Mensaje`},"Your Name *":{en:`Your Name *`,es:`Su Nombre *`},"Email Address *":{en:`Email Address *`,es:`Correo Electrónico *`},"Product Interest":{en:`Product Interest`,es:`Producto de Interés`},"Select a product category":{en:`Select a product category`,es:`Seleccione una categoría`},"Other / Not Sure":{en:`Other / Not Sure`,es:`Otro / No Estoy Seguro`},"Your Message *":{en:`Your Message *`,es:`Su Mensaje *`},"Send Inquiry":{en:`Send Inquiry`,es:`Enviar Consulta`},"✓ Message Sent!":{en:`✓ Message Sent!`},"Product Categories":{en:`Product Categories`,es:`Categorías de Productos`},Company:{en:`Company`,es:`Empresa`},Resources:{en:`Resources`,es:`Recursos`},"About Us":{en:`About Us`,es:`Sobre Nosotros`},Sustainability:{en:`Sustainability`,es:`Sostenibilidad`},"Global Reach":{en:`Global Reach`,es:`Alcance Global`},"Product Catalog":{en:`Product Catalog`,es:`Catálogo de Productos`},"Request a Quote":{en:`Request a Quote`,es:`Solicitar Cotización`},"Quality Certifications":{en:`Quality Certifications`,es:`Certificaciones de Calidad`},"Logistics & Shipping":{en:`Logistics & Shipping`,es:`Logística y Envío`},"Technical Specs":{en:`Technical Specs`,es:`Especificaciones Técnicas`},"Diversified Product Range":{en:`Diversified Product Range`},"Certified Quality — FSC & SGS":{en:`Certified Quality — FSC & SGS`},"Strong Production Capacity":{en:`Strong Production Capacity`},"Fast & Timely Delivery":{en:`Fast & Timely Delivery`},"Customized Solutions":{en:`Customized Solutions`},"Global Export Expertise":{en:`Global Export Expertise`},"FSC® Certified":{en:`FSC® Certified`},"SGS Certified":{en:`SGS Certified`},"ISO 14001":{en:`ISO 14001`},"20+ Years Experience":{en:`20+ Years Experience`},"60+ Export Countries":{en:`60+ Export Countries`},"PFAS-Free":{en:`PFAS-Free`},"Carbon-Conscious":{en:`Carbon-Conscious`},whyus_desc:{en:`It's not just about paper — it's about reliability, expertise, and a partnership that makes your supply chain stronger.`,es:`No se trata solo de papel — se trata de fiabilidad, experiencia y una asociación que fortalece su cadena de suministro.`},whyus_1_desc:{en:`We supply a comprehensive range of premium printing and packaging paper and paperboard — covering all four categories: Package Board, Culture Paper, Fancy Paper, and Food Packaging Paper. One supplier, multiple grades, simplified procurement.`,es:`Suministramos una gama completa de papel y cartón premium para impresión y embalaje — cubriendo las cuatro categorías: Package Board, Culture Paper, Fancy Paper y Food Packaging Paper. Un solo proveedor, múltiples grados, adquisición simplificada.`},whyus_2_desc:{en:`All products are FSC and SGS certified. Every shipment is inspected for grammage, brightness, moisture, caliper, and surface quality against agreed specifications. Consistent quality, batch after batch.`,es:`Todos los productos cuentan con certificación FSC y SGS. Cada envío se inspecciona en gramaje, blancura, humedad, calibre y calidad superficial según las especificaciones acordadas. Calidad consistente, lote tras lote.`},whyus_3_desc:{en:`Our 20,000m² workshop runs 2 grey board machines and 2 black paper machines, delivering 20,000 tons monthly. Partner mills — APP, CHENMING, NINEDRAGON, BOHUI, GOLDENEAST, IPSUN — provide additional capacity and grade coverage.`,es:`Nuestro taller de 20.000 m² opera 2 máquinas de cartón gris y 2 de cartulina negra, produciendo 20.000 toneladas mensuales. Las fábricas asociadas — APP, CHENMING, NINEDRAGON, BOHUI, GOLDENEAST, IPSUN — proporcionan capacidad adicional y cobertura de grados.`},whyus_4_desc:{en:`50,000 tons of permanent warehouse stock enables rapid dispatch. Located 50km from Shenzhen port, we load containers efficiently. Five sales teams (50+ specialists) provide proactive delivery tracking and after-sales support.`,es:`50.000 toneladas de stock permanente en almacén permiten un despacho rápido. Ubicados a 50 km del puerto de Shenzhen, cargamos contenedores eficientemente. Cinco equipos de ventas (más de 50 especialistas) brindan seguimiento proactivo de entregas y soporte postventa.`},whyus_5_desc:{en:`We provide custom size, weight, and labeling solutions with free samples before bulk order. Need specific slitting, sheeting, embossing, or packaging? Our converting partners deliver finished product to your exact specifications.`,es:`Ofrecemos soluciones personalizadas de tamaño, gramaje y etiquetado con muestras gratuitas antes del pedido. ¿Necesita corte, laminado, gofrado o embalaje específico? Nuestros socios transformadores entregan el producto terminado según sus especificaciones exactas.`},whyus_6_desc:{en:`36,000+ tons exported annually to 60+ countries. We handle FSC chain-of-custody, certificates of origin, fumigation, packing lists, and bills of lading — full documentation for seamless customs clearance at any destination port.`,es:`Más de 36.000 toneladas exportadas anualmente a más de 60 países. Gestionamos la cadena de custodia FSC, certificados de origen, fumigación, listas de empaque y conocimientos de embarque — documentación completa para un despacho aduanero sin problemas en cualquier puerto de destino.`},sustainability_subtitle:{en:`Every paper product we supply comes with a chain-of-custody story. We believe transparency — not marketing — is what earns trust. That means clear certification, honest sourcing, and measurable environmental accountability.`,es:`Cada producto de papel que suministramos viene con una historia de cadena de custodia. Creemos que la transparencia — no el marketing — es lo que genera confianza. Eso significa certificación clara, abastecimiento honesto y responsabilidad ambiental medible.`},sus_1_title:{en:`Certified Sources`,es:`Fuentes Certificadas`},sus_1_desc:{en:`Primary supply chain is FSC or PEFC certified. Chain-of-custody documentation provided with every order.`,es:`La cadena de suministro principal cuenta con certificación FSC o PEFC. Se proporciona documentación de cadena de custodia con cada pedido.`},sus_2_title:{en:`Recycled Content`,es:`Contenido Reciclado`},sus_2_desc:{en:`Post-consumer and post-industrial recycled fiber options available across all four product categories.`,es:`Opciones de fibra reciclada post-consumo y post-industrial disponibles en las cuatro categorías de productos.`},sus_3_title:{en:`PFAS-Free`,es:`Libre de PFAS`},sus_3_desc:{en:`All food-contact papers are PFAS-free — grease resistance is achieved through fiber engineering, not chemical additives.`,es:`Todos los papeles de contacto alimentario son libres de PFAS — la resistencia a la grasa se logra mediante ingeniería de fibra, no aditivos químicos.`},sus_4_title:{en:`Low-Carbon Mills`,es:`Fábricas Bajas en Carbono`},sus_4_desc:{en:`Partnering with mills that use green energy, biogas recovery, and closed-loop water systems to minimize environmental footprint.`,es:`Colaboramos con fábricas que utilizan energía verde, recuperación de biogás y sistemas de agua de ciclo cerrado para minimizar la huella ambiental.`},sus_5_title:{en:`Full Traceability`,es:`Trazabilidad Completa`},sus_5_desc:{en:`From forest or recovery facility to final delivery — traceable chain of custody with auditable documentation.`,es:`Desde el bosque o la instalación de recuperación hasta la entrega final — cadena de custodia trazable con documentación auditable.`},sus_6_title:{en:`Carbon-Conscious Logistics`,es:`Logística Baja en Carbono`},sus_6_desc:{en:`Route optimization, consolidated shipments, and sea freight preference to reduce transport-related emissions.`,es:`Optimización de rutas, envíos consolidados y preferencia por transporte marítimo para reducir las emisiones del transporte.`},global_subtitle:{en:`From our base in China, we serve converters, printers, manufacturers, and brands across six continents. Every client has a dedicated account manager who knows their specifications, preferences, and schedule.`,es:`Desde nuestra base en China, servimos a transformadores, impresores, fabricantes y marcas en seis continentes. Cada cliente tiene un gestor de cuenta dedicado que conoce sus especificaciones.`},region_1_name:{en:`Asia`,es:`Asia`},region_1_detail:{en:`Core supply base & largest volume market`,es:`Base de suministro principal y mercado de mayor volumen`},region_2_name:{en:`Europe`,es:`Europa`},region_2_detail:{en:`Key export market with growing demand`,es:`Mercado de exportación clave con demanda creciente`},region_3_name:{en:`Americas`,es:`Américas`},region_3_detail:{en:`Expanding partnership network`,es:`Red de alianzas en expansión`},region_4_name:{en:`Africa & Middle East`,es:`África y Medio Oriente`},region_4_detail:{en:`High-growth emerging markets`,es:`Mercados emergentes de alto crecimiento`},region_5_name:{en:`Oceania`,es:`Oceanía`},region_5_detail:{en:`Established trade routes`,es:`Rutas comerciales establecidas`},testimonials_desc:{en:`What our partners say about working with YOUNGSUN PAPER.`,es:`Lo que dicen nuestros socios sobre trabajar con YOUNGSUN PAPER.`},testimonial_1_quote:{en:`YOUNGSUN's consistency in kraft paper quality and delivery has made them our go-to supplier for over five years. Their technical team understands our converting requirements and always delivers to spec.`},testimonial_1_author:{en:`Purchasing Director`},testimonial_2_quote:{en:`We switched our coated paper sourcing to YOUNGSUN and immediately reduced our per-ton cost while maintaining print quality. Their documentation and logistics handling makes import seamless.`},testimonial_2_author:{en:`CEO`},testimonial_3_quote:{en:`Finding a supplier who genuinely understands specialty paper — grades, finishes, and converting behavior — was difficult until we found YOUNGSUN. Their fancy paper range is exceptional.`},testimonial_3_author:{en:`Creative Director`},contact_subtitle:{en:`Tell us what you need — product, specification, volume, and destination. We'll respond with a competitive quote, lead time, and logistics plan within 24 hours.`,es:`Cuéntenos qué necesita — producto, especificación, volumen y destino. Responderemos con una cotización competitiva, plazo de entrega y plan logístico en 24 horas.`},"Send Us a Message":{en:`Send Us a Message`,es:`Envíenos un Mensaje`},"Your Name *":{en:`Your Name *`,es:`Su Nombre *`},"Email Address *":{en:`Email Address *`,es:`Correo Electrónico *`},"Product Interest":{en:`Product Interest`,es:`Producto de Interés`},"Select a product category":{en:`Select a product category`,es:`Seleccione una categoría`},"Other / Not Sure":{en:`Other / Not Sure`,es:`Otro / No Estoy Seguro`},"Your Message *":{en:`Your Message *`,es:`Su Mensaje *`},"Send Inquiry":{en:`Send Inquiry`,es:`Enviar Consulta`},"✓ Message Sent!":{en:`✓ Message Sent!`},placeholder_msg:{en:`Tell us about your paper requirements, volume, target specifications, or any questions...`},faq_desc:{en:`Quick answers to the most common questions from international buyers, converters, and procurement teams.`},faq_q1:{en:`What paper products does YOUNGSUN PAPER supply?`},faq_a1:{en:`YOUNGSUN PAPER supplies four categories of paper and board: Package Board, Culture Paper, Fancy Paper, and Food Packaging Paper — covering grey board, black paper, kraft paper, coated paper, specialty paper, and more. All FSC and SGS certified.`},faq_q2:{en:`Where is YOUNGSUN PAPER located and how fast can you deliver?`},faq_a2:{en:`Headquartered in Dongguan, Guangdong — 50km from Shenzhen port. 50,000 tons warehouse stock. Container loading typically within 7-14 days of order confirmation.`},faq_q3:{en:`What certifications do your paper products have?`},faq_a3:{en:`All products are FSC and SGS certified. Food-contact grades are FDA and EU 1935/2004 compliant. PFAS-free certification available. Full documentation provided with every shipment.`},faq_q4:{en:`Can you customize paper size, weight, or packaging?`},faq_a4:{en:`Yes. Custom slitting, sheeting, weight within range, labeling, and packaging. Free samples before bulk order. Converting partners offer embossing, die-cutting, printing, and lamination.`},faq_q5:{en:`What is your minimum order quantity and how do I get a quote?`},faq_a5:{en:`Typically one 20-foot container (20-25 tons). Send specifications to Alice@yspaper.com or WhatsApp +86 13713459656. We respond within 24 hours.`},faq_q6:{en:`Do you supply food-grade paper for direct food contact?`},faq_a6:{en:`Yes. Cup paper, greaseproof paper (PFAS-free), and silicone coated paper — all FDA and EU compliant. Certification provided with every shipment.`},faq_q7:{en:`Which countries do you export to?`},faq_a7:{en:`60+ countries across Asia (25+), Europe (18+), Americas (12+), Africa, Middle East, and Oceania. Full export documentation handled.`},faq_q8:{en:`What paper mills do you partner with?`},faq_a8:{en:`APP, CHENMING, NINEDRAGON, BOHUI, GOLDENEAST, and IPSUN. Our own facility has 2 grey board and 2 black paper machines with 20,000 tons monthly capacity.`},"Product Categories":{en:`Product Categories`,es:`Categorías de Productos`},Company:{en:`Company`,es:`Empresa`},Resources:{en:`Resources`,es:`Recursos`},"Package Board":{en:`Package Board`,es:`Cartón para Embalaje`},"Culture Paper":{en:`Culture Paper`,es:`Papel Cultural`},"Fancy Paper":{en:`Fancy Paper`,es:`Papel de Fantasía`},"Food Packaging Paper":{en:`Food Packaging Paper`,es:`Papel para Envases Alimentarios`},"Processing Services":{en:`Processing Services`},"About Us":{en:`About Us`,es:`Sobre Nosotros`},"Why Choose Us":{en:`Why Choose Us`,es:`Por Qué Elegirnos`},Sustainability:{en:`Sustainability`,es:`Sostenibilidad`},"Global Reach":{en:`Global Reach`,es:`Alcance Global`},"Product Catalog":{en:`Product Catalog`,es:`Catálogo de Productos`},"Request a Quote":{en:`Request a Quote`,es:`Solicitar Cotización`},"Quality Certifications":{en:`Quality Certifications`,es:`Certificaciones de Calidad`},"Logistics & Shipping":{en:`Logistics & Shipping`,es:`Logística y Envío`},"Technical Specs":{en:`Technical Specs`,es:`Especificaciones Técnicas`},"Countries Served":{en:`Countries Served`,es:`Países Atendidos`},"Years Experience":{en:`Years Experience`,es:`Años de Experiencia`},"Annual Export":{en:`Annual Export`,es:`Exportación Anual`},"Warehouse Stock":{en:`Warehouse Stock`,es:`Stock en Almacén`},vision:{en:`To be the most reliable, transparent, and sustainability-driven paper supply partner for businesses worldwide.`},four_cat_desc:{en:`Four product categories. 20+ grades. One reliable supply partner. Select a category to explore specifications, applications, and certifications.`},"Request Quote":{en:`Request Quote`},"Full Product Description":{en:`Full Product Description`,es:`Descripción Completa`},"Complete Specifications":{en:`Complete Specifications`,es:`Especificaciones Completas`},"All Applications":{en:`All Applications`,es:`Todas las Aplicaciones`},Certifications:{en:`Certifications`,es:`Certificaciones`},"cat_summary_package-board":{en:`Your comprehensive source for durable structural packaging. Our extensive range covers Grey Board, Black Cardboard, Folding Box Board (FBB), C2S Art Board, Kraft Paper, and Duplex Board to meet all your rigid box and container needs.`,es:`Su fuente integral para embalaje estructural duradero. Nuestra amplia gama cubre cartón gris, cartulina negra, FBB, cartón arte C2S, papel kraft y cartón dúplex para todas sus necesidades de cajas rígidas y contenedores.`},"cat_summary_culture-paper":{en:`We supply Woodfree Paper, Color Offset Paper, LWC Paper, and NCR Paper, ensuring crisp, consistent results for your brochures, books, and professional stationery.`,es:`Suministramos papel woodfree, papel offset de color, papel LWC y papel NCR, garantizando resultados nítidos y consistentes para sus folletos, libros y papelería profesional.`},"cat_summary_fancy-paper":{en:`Explore our specialized collection, including Soft Touch, Leather, Pearlescent, and Embossed papers, as well as dedicated Label papers for distinctive, premium design projects.`,es:`Explore nuestra colección especializada, que incluye papeles soft touch, cuero, perlados y gofrados, así como papeles para etiquetas para proyectos de diseño premium distintivos.`},"cat_summary_food-packaging":{en:`Our selection features Cup Paper, Greaseproof Paper, and Silicone Coated Paper, specifically engineered for hygiene, moisture resistance, and reliable food safety.`,es:`Nuestra selección incluye papel para vasos, papel antigrasa y papel siliconado, diseñados específicamente para higiene, resistencia a la humedad y seguridad alimentaria confiable.`},"All Products":{en:`All Products`,es:`Todos los Productos`}},er={name:`YOUNGSUN PAPER`,legalName:`Dongguan Banyan Material Co., Ltd.`,tagline:`Sustainable Paper, Global Reach`,description:`YOUNGSUN PAPER (Dongguan Banyan Material Co., Ltd.) supplies premium paper and board to manufacturers, printers, converters, and brands worldwide. Founded in 2002 in Dongguan, Guangdong — 50km from Shenzhen port — with a 20,000m² workshop, 220+ workers, and 50,000 tons of warehouse stock. All paper is FSC and SGS certified. We serve 60+ countries with 36,000+ tons exported annually.`,email:`Alice@yspaper.com`,phone:`+86 13713459656`,whatsapp:`+86 13713459656`,wechat:`ALICEZEO`,address:`NO.167, Meijing West Road, Songmushan, Dalang Town, Dongguan City, Guangdong Province, China`,founded:2002,stats:{countries:60,products:20,monthlyCapacity:2e4,annualExport:36e3,warehouseStock:5e4,workers:220,workshop:2e4,salesSpecialists:50,years:24},millPartners:[`IPSUN`,`CHENMING`,`NINEDRAGON`,`APP`,`BOHUI`,`GOLDENEAST`]},tr=[{id:`package-board`,title:`Package Board`,icon:`📦`,tagline:`Durable structural packaging — from rigid boxes to folding cartons.`,summary:`Your comprehensive source for durable structural packaging. Our extensive range covers Grey Board, Black Cardboard, Folding Box Board (FBB), C2S Art Board, Kraft Paper, and Duplex Board to meet all your rigid box and container needs.`,image:`/images/products/package-board/package-category-card.jpg`,background:`images/products/package-board/package-category-card.jpg`},{id:`culture-paper`,title:`Culture Paper`,icon:`📄`,tagline:`High-performance surfaces for premium printing and publishing.`,summary:`We supply Woodfree Paper, Color Offset Paper, LWC Paper, and NCR Paper, ensuring crisp, consistent results for your brochures, books, and professional stationery.`,image:`/images/products/culture-paper/culture-category-card.jpg`,background:`images/products/culture-paper/culture-category-card.jpg`},{id:`fancy-paper`,title:`Fancy Paper`,icon:`✨`,tagline:`Curated textures for high-end luxury branding.`,summary:`Explore our specialized collection, including Soft Touch, Leather, Pearlescent, and Embossed papers, as well as dedicated Label papers for distinctive, premium design projects.`,image:`/images/products/fancy-paper/fancy-paper-category-card.jpg`,background:`images/products/fancy-paper/fancy-paper-category-card.jpg`},{id:`food-packaging`,title:`Food Packaging Paper`,icon:`🍽️`,tagline:`Safe, food-grade solutions for culinary and beverage applications.`,summary:`Our selection features Cup Paper, Greaseproof Paper, and Silicone Coated Paper, specifically engineered for hygiene, moisture resistance, and reliable food safety.`,image:`/images/products/food-packaging/food-packaging-paper-01.jpg`,background:`images/products/food-packaging/food-packaging-paper-detail.jpg`}],nr={"grey-board":{id:`grey-board`,name:`Grey Board`,category:`package-board`,tagline:`FSC-certified recycled grey board for rigid boxes, bookbinding, stationery, puzzles and industrial packaging.`,description:`YOUNGSUN Grey Board is made from 100% post-consumer recovered paper and designed for applications that require dependable thickness, rigidity and converting performance. It is available in sheets, reels, custom-cut panels and laminated structures for rigid box, bookbinding and stationery production. The board features a working thickness range of 0.5–4.0 mm (300–3000 gsm in sheet form, 250–600 gsm in reel form), with stock sizes of 787×1092 mm and 889×1194 mm and maximum sheet dimensions up to 1600×3000 mm. The natural grey uncoated surface provides excellent adhesion for laminating, wrapping, and gluing. For enhanced surface appearance, buyers can choose laminated variants with coated white, uncoated white, colored, kraft, black, gold, silver or specialty facing papers bonded to the grey board base according to the required look and converting process. Common applications include rigid gift boxes, magnetic closure boxes, hardcover books, lever arch files, puzzles, game boards, photo albums, and packaging inserts. Custom grammage, sheet dimensions, panel cutting, die-cutting, and export pallet packing are all supported.`,specs:[`Thickness: 0.5 mm – 4.0 mm (500 – 4000 gsm equivalent)`,`Color: Natural grey / Custom tint available`,`Surface: Smooth both sides, uncoated`,`Format: Sheets (standard & custom sizes) or reels`,`Moisture: 8% ± 2%`,`Fiber: 100% recycled post-consumer fiber`],applications:[`Rigid gift boxes and luxury packaging bases`,`Hardcover book covers and case-making`,`Jigsaw puzzles and game boards`,`Ring binders, lever-arch files, and stationery`,`Screen-printed signage and display boards`,`Archival and conservation mounting boards`],certifications:[`FSC Recycled`,`ISO 14001`],variants:[`Single Layer Grey Board`,`Laminated Grey Board`,`One-Side Kraft-Lined Grey Board`,`One-Side White Grey Board`,`One-Side Black Grey Board`],features:[`Stable Thickness — Supports consistent box dimensions, cover alignment and batch production.`,`Reliable Rigidity — Provides a strong structural base for rigid packaging and bookbinding.`,`Clean Converting — Suitable for cutting, die-cutting, grooving, laminating and wrapping.`,`Flexible Processing — Available as full sheets, reels or finished components according to drawings.`],customization:[`Custom grammage and thickness`,`Custom sheet dimensions`,`Panel cutting and die-cutting`,`Single-side or laminated surface options`,`Export pallet packing`],commercial:{moq:`1 metric ton`,leadTime:`2–3 weeks`,samples:`Free samples available`,certification:`FSC certified`,containerLoading:`40HQ full load: 25 metric tons`},quoteReqs:[`Grammage or thickness`,`Sheet or reel size`,`Quantity`,`Application`,`Destination port`,`Cutting requirements`],seoTitle:`Grey Board Manufacturer for Rigid Boxes`,metaDescription:`FSC-certified recycled grey board in sheets, reels and custom-cut panels for rigid boxes, bookbinding, files and packaging.`,keywords:[`grey board`,`grey chipboard`,`recycled greyboard`,`rigid box board`,`bookbinding board`,`puzzle board`],image:`/images/products/package-board/grey-board-main.jpg`,gallery:[{src:`/images/products/package-board/gallery/grey-board-scene-01.jpg`,alt:`grey board scene 01 scene`},{src:`/images/products/package-board/gallery/grey-board-scene-02.jpg`,alt:`grey board scene 02 scene`},{src:`/images/products/package-board/gallery/grey-board-scene-03.jpg`,alt:`grey board scene 03 scene`},{src:`/images/products/package-board/gallery/grey-board-scene-04.jpg`,alt:`grey board scene 04 scene`},{src:`/images/products/package-board/gallery/grey-board-scene-05.jpg`,alt:`grey board scene 05 scene`},{src:`/images/products/package-board/gallery/grey-board-scene-06.jpg`,alt:`grey board scene 06 scene`},{src:`/images/products/package-board/gallery/grey-board-scene-07.jpg`,alt:`grey board scene 07 scene`},{src:`/images/products/package-board/gallery/grey-board-scene-08.jpg`,alt:`grey board scene 08 scene`},{src:`/images/products/package-board/gallery/grey-board-photo-01.jpg`,alt:`grey board procurement photo`},{src:`/images/products/package-board/gallery/grey-board-photo-02.jpg`,alt:`grey board spec sample photo`},{src:`/images/products/package-board/gallery/grey-board-photo-03.jpg`,alt:`grey board design hero photo`},{src:`/images/products/package-board/gallery/grey-board-photo-04.jpg`,alt:`grey board application photo`},{src:`/images/products/package-board/gallery/grey-board-photo-05.jpg`,alt:`grey board website banner`}]},"black-paper":{id:`black-paper`,name:`Black Paper`,category:`package-board`,tagline:`Deep-black paper and cardboard for luxury packaging, hang tags, stationery, printing and creative converting.`,description:`YOUNGSUN supplies black paper in virgin-fibre and recycled-fibre grades, offering a comprehensive range from 80 gsm lightweight paper up to 1500 gsm laminated heavy board. The material features a uniform through-dyed black appearance — not surface-printed — ensuring clean cutting edges with no white line on cuts or folds, which is critical for premium packaging and printed products. Standard single-ply grades range from 80–600 gsm in uncoated black finish, with stock sheet sizes of 787×1092 mm and 889×1194 mm. The material performs exceptionally well with hot foil stamping, screen printing, UV printing, embossing, and lamination. Key applications span luxury rigid box lining and wrapping, photo albums, greeting cards, high-end retail shopping bags, business cards, presentation folders, and envelope inserts. Custom grammage, sheet size, virgin or recycled fibre selection, laminated heavy board construction, and custom packing are all available.`,specs:[`Grammage: 80 – 400 gsm`,`Color: Through-dyed black (not surface-printed)`,`Finishes: Uncoated / Matte coated / Gloss coated`,`Format: Sheets & reels`,`Lightfastness: ISO 105-B02 rated`,`Core-color guarantee: no white edge on cut or fold`],applications:[`Luxury rigid box lining and wrapping`,`Photo albums, scrapbooks, and memory books`,`Greeting cards and invitation cards`,`High-end retail shopping bags`,`Business cards and presentation folders`,`Envelope and stationery inserts`],certifications:[`FSC Mix`,`ISO 14001`],variants:[`Virgin Black Paper`,`Recycled Black Paper`,`Laminated Heavy Black Board`],features:[`Uniform Black Appearance — Provides a premium dark surface for visible packaging and printed products.`,`Clean Cutting Edges — Suitable for precise die-cutting, card making and structural converting.`,`Multiple Finishing Options — Works with hot foil stamping, screen printing, UV printing, embossing and lamination.`,`Wide Grammage Range — Covers lightweight paper, card and laminated heavy-board applications.`],customization:[`Custom grammage`,`Custom sheet size`,`Virgin or recycled fibre`,`Laminated heavy board`,`Custom packing`],commercial:{moq:`1 metric ton`,leadTime:`2–3 weeks`,samples:`Free samples available`,certification:`FSC certified`,containerLoading:`40HQ full load: 25 metric tons`},quoteReqs:[`Required grammage`,`Sheet or reel size`,`Virgin or recycled grade`,`Quantity`,`Application`,`Destination port`],seoTitle:`Black Paper and Black Cardboard Supplier`,metaDescription:`Virgin and recycled black paper from 80 to 1500 gsm for luxury packaging, hang tags, stationery and premium printing.`,keywords:[`black paper`,`black card stock`,`through-dyed paper`,`black cardboard`,`luxury black paper`,`core-dyed black board`],image:`/images/products/package-board/black-paper-main.jpg`,gallery:[{src:`/images/products/package-board/gallery/black-paper-scene-01.jpg`,alt:`black paper scene 01 scene`},{src:`/images/products/package-board/gallery/black-paper-scene-02.jpg`,alt:`black paper scene 02 scene`},{src:`/images/products/package-board/gallery/black-paper-scene-03.jpg`,alt:`black paper scene 03 scene`},{src:`/images/products/package-board/gallery/black-paper-scene-04.jpg`,alt:`black paper scene 04 scene`},{src:`/images/products/package-board/gallery/black-paper-scene-05.jpg`,alt:`black paper scene 05 scene`},{src:`/images/products/package-board/gallery/black-paper-scene-06.jpg`,alt:`black paper scene 06 scene`},{src:`/images/products/package-board/gallery/black-paper-scene-07.jpg`,alt:`black paper scene 07 scene`},{src:`/images/products/package-board/gallery/black-paper-scene-08.jpg`,alt:`black paper scene 08 scene`},{src:`/images/products/package-board/gallery/black-paper-photo-01.jpg`,alt:`black paper card procurement photo`},{src:`/images/products/package-board/gallery/black-paper-photo-02.jpg`,alt:`black paper card spec sample photo`},{src:`/images/products/package-board/gallery/black-paper-photo-03.jpg`,alt:`black paper card design hero photo`},{src:`/images/products/package-board/gallery/black-paper-photo-04.jpg`,alt:`black paper card application photo`},{src:`/images/products/package-board/gallery/black-paper-photo-05.jpg`,alt:`black paper card website banner`}]},"color-card-paper":{id:`color-card-paper`,name:`Color Card Paper`,category:`package-board`,tagline:`Colored card paper for packaging, hang tags, stationery, invitations and creative printing.`,description:`YOUNGSUN Color Card Paper is available in a broad range of standard, deep, and embossed colors, combining uniform shade consistency with clean converting performance for packaging, garment tags, stationery, and promotional applications. The grammage range spans 110–400 gsm, with common weights at 110, 150, 180, 230, 250, 300, 350, and 400 gsm. Standard sheet sizes are 787×1092 mm and 889×1194 mm, with supply in sheets, reels, and custom-cut sizes. Surface options include smooth uncoated and embossed textures. The paper delivers wide color selection for coordinated branding projects, consistent shade across repeat production runs, and good converting performance for cutting, folding, die-cutting, embossing, and lamination. It is compatible with hot stamping, screen printing, UV, and selected offset printing. Typical applications include hang tags, gift boxes, greeting cards, invitations, folders, book covers, and paper crafts. Custom color matching is available subject to order quantity, along with custom grammage, size, embossed textures, and packing.`,specs:[`Grammage: 120 – 400 gsm`,`Color: Through-dyed, 30+ standard colors, custom Pantone available`,`Finish: Uncoated smooth / Textured options`,`Format: Sheets (standard & custom), reels`,`Batch consistency: Delta E ≤ 1.5`,`Packaging: Ream-wrapped or bulk-packed`],applications:[`Filing folders, dividers, and index cards`,`Craft and DIY cardstock`,`Point-of-sale displays and signage`,`Custom packaging and gift boxes`,`Business cards and hang tags`,`Educational and art supplies`],certifications:[`FSC Mix`,`ISO 9001`],variants:[`Standard Color Card`,`Deep Color Card`,`Embossed Color Card`],features:[`Wide Color Selection — Supports coordinated packaging, branding and stationery projects.`,`Consistent Shade — Helps maintain visual consistency across repeat production.`,`Good Converting Performance — Suitable for cutting, folding, die-cutting, embossing and lamination.`,`Premium Finishing Compatibility — Suitable for hot stamping, screen printing, UV and selected offset printing.`],customization:[`Custom color matching subject to quantity`,`Custom grammage`,`Custom size`,`Embossed textures`,`Custom packing`],commercial:{moq:`1 metric ton`,leadTime:`2–3 weeks`,samples:`Free samples available`,certification:`FSC certified`,containerLoading:`40HQ full load: 25 metric tons`},quoteReqs:[`Color reference or code`,`Grammage`,`Sheet or reel size`,`Quantity`,`Application`,`Destination port`],seoTitle:`Color Card Paper Supplier for Packaging and Hang Tags`,metaDescription:`Colored card paper from 110 to 400 gsm in standard and embossed finishes for packaging, hang tags, stationery and printing.`,keywords:[`color card paper`,`colored cardboard`,`solid color cardstock`,`colored paper board`,`Pantone paper`,`craft cardstock`],image:`/images/products/package-board/color-card-paper-main.jpg`,gallery:[{src:`/images/products/package-board/gallery/color-card-paper-scene-01.jpg`,alt:`color card paper scene 01 scene`},{src:`/images/products/package-board/gallery/color-card-paper-scene-02.jpg`,alt:`color card paper scene 02 scene`},{src:`/images/products/package-board/gallery/color-card-paper-scene-03.jpg`,alt:`color card paper scene 03 scene`},{src:`/images/products/package-board/gallery/color-card-paper-scene-04.jpg`,alt:`color card paper scene 04 scene`},{src:`/images/products/package-board/gallery/color-card-paper-scene-05.jpg`,alt:`color card paper scene 05 scene`},{src:`/images/products/package-board/gallery/color-card-paper-scene-06.jpg`,alt:`color card paper scene 06 scene`},{src:`/images/products/package-board/gallery/color-card-paper-scene-07.jpg`,alt:`color card paper scene 07 scene`},{src:`/images/products/package-board/gallery/color-card-paper-scene-08.jpg`,alt:`color card paper scene 08 scene`},{src:`/images/products/package-board/gallery/color-card-paper-photo-01.jpg`,alt:`color card paper procurement photo`},{src:`/images/products/package-board/gallery/color-card-paper-photo-02.jpg`,alt:`color card paper spec sample photo`},{src:`/images/products/package-board/gallery/color-card-paper-photo-03.jpg`,alt:`color card paper design hero photo`},{src:`/images/products/package-board/gallery/color-card-paper-photo-04.jpg`,alt:`color card paper application photo`},{src:`/images/products/package-board/gallery/color-card-paper-photo-05.jpg`,alt:`color card paper website banner`}]},"folding-box-board":{id:`folding-box-board`,name:`Folding Box Board`,category:`package-board`,tagline:`C1S ivory board with a smooth coated surface, high brightness and reliable folding performance for printed cartons.`,description:`YOUNGSUN Folding Box Board is a coated virgin-fibre paperboard (GC1/C1S Ivory Board) developed for high-quality printing and folding carton conversion. Regular-bulk (170–400 gsm) and high-bulk (195–345 gsm) options allow buyers to balance caliper, stiffness, print performance, and material yield. The board features a smooth, coated white printing surface on the front side with a light-treated reverse, delivering excellent brightness for detailed graphics, strong color reproduction, and premium carton presentation. It is engineered for reliable scoring, folding, die-cutting, and gluing on high-speed converting lines. Primary applications include cosmetic cartons, pharmaceutical boxes, retail packaging, food secondary packaging, and personal care packaging. Buyers can specify regular or high bulk, custom grammage, sheet or reel supply, custom cutting, and export packing.`,specs:[`Grammage: 200 – 450 gsm`,`Grades: GC1 (white back) / GC2 (cream back) / GC3 (kraft back)`,`Thickness: 350 – 650 μm`,`Brightness: ISO 90%+ (top side)`,`Stiffness: High L&W bending resistance`,`Food-grade and pharma-grade options available`],applications:[`Pharmaceutical folding cartons`,`Cosmetic and skincare packaging`,`Dry food cartons (cereal, biscuits, tea)`,`Frozen food packaging (with barrier coating)`,`Consumer electronics boxes`,`Chocolate and confectionery boxes`],certifications:[`FSC Mix`,`ISO 9001`,`FDA-compliant grades`],variants:[`Regular Bulk C1S Ivory Board`,`High Bulk C1S Ivory Board`],features:[`High-Quality Print Surface — Supports detailed graphics, strong color reproduction and premium carton presentation.`,`Reliable Folding — Designed for scoring, folding, die-cutting and gluing.`,`Regular and High Bulk Options — Allows buyers to select the required thickness and material yield.`,`Broad Packaging Use — Suitable for retail, beauty, pharmaceutical and secondary food packaging.`],customization:[`Regular or high bulk`,`Custom grammage`,`Sheet or reel supply`,`Custom cutting`,`Export packing`],commercial:{moq:`1 metric ton`,leadTime:`2–3 weeks`,samples:`Free samples available`,certification:`FSC certified`,containerLoading:`40HQ full load: 25 metric tons`},quoteReqs:[`Regular or high bulk`,`Grammage`,`Sheet or reel size`,`Quantity`,`Application`,`Destination port`],seoTitle:`Folding Box Board and C1S Ivory Board Supplier`,metaDescription:`Regular and high bulk C1S ivory board from 170 to 400 gsm for cosmetics, pharmaceuticals, retail and folding cartons.`,keywords:[`folding box board`,`FBB`,`GC1 board`,`carton board`,`pharma packaging board`,`cosmetic box board`],image:`/images/products/package-board/folding-box-board-main.jpg`,gallery:[{src:`/images/products/package-board/gallery/folding-box-board-scene-01.jpg`,alt:`folding box board scene 01 scene`},{src:`/images/products/package-board/gallery/folding-box-board-scene-02.jpg`,alt:`folding box board scene 02 scene`},{src:`/images/products/package-board/gallery/folding-box-board-scene-03.jpg`,alt:`folding box board scene 03 scene`},{src:`/images/products/package-board/gallery/folding-box-board-scene-04.jpg`,alt:`folding box board scene 04 scene`},{src:`/images/products/package-board/gallery/folding-box-board-scene-05.jpg`,alt:`folding box board scene 05 scene`},{src:`/images/products/package-board/gallery/folding-box-board-scene-06.jpg`,alt:`folding box board scene 06 scene`},{src:`/images/products/package-board/gallery/folding-box-board-scene-07.jpg`,alt:`folding box board scene 07 scene`},{src:`/images/products/package-board/gallery/folding-box-board-scene-08.jpg`,alt:`folding box board scene 08 scene`},{src:`/images/products/package-board/gallery/folding-box-board-photo-01.jpg`,alt:`folding box board procurement photo`},{src:`/images/products/package-board/gallery/folding-box-board-photo-02.jpg`,alt:`folding box board spec sample photo`},{src:`/images/products/package-board/gallery/folding-box-board-photo-03.jpg`,alt:`folding box board design hero photo`},{src:`/images/products/package-board/gallery/folding-box-board-photo-04.jpg`,alt:`folding box board application photo`},{src:`/images/products/package-board/gallery/folding-box-board-photo-05.jpg`,alt:`folding box board website banner`}]},"c2s-art-board":{id:`c2s-art-board`,name:`C2S Art Board Card`,category:`package-board`,tagline:`Coated-two-sides art board with bright white surface and smooth finish — for premium print and high-end card applications.`,description:`YOUNGSUN C2S (Coated Two Sides) Art Board — also referred to as art card, SBS board, or coated duplex board — features a double-coated white surface on both sides with ISO 92%+ brightness and CIE 140+ whiteness. The coating layer ensures sharp dot reproduction, high ink gloss, and consistent color fidelity for offset, UV offset, and digital printing. Available in 200–400 gsm, the board can be specified in C2S High Bulk Bristol Board configuration (210–320 gsm) which combines a coated surface on both sides with increased caliper at a controlled grammage, providing a more substantial hand feel. Smoothness is rated at ≤1.5 μm (PPS), making it the board of choice for luxury greeting cards, premium hang tags and swing tickets, book covers and dust jackets, high-end brochure and catalog covers, promotional card mailers, and certificate stock. Custom grammage, sheet size, sheet or reel supply, and custom packing options are available.`,specs:[`Grammage: 200 – 400 gsm`,`Coating: Double-coated both sides (C2S)`,`Brightness: ISO 92%+`,`Whiteness: CIE 140+`,`Smoothness: ≤ 1.5 μm (PPS)`,`Format: Sheets — standard & custom sizes`],applications:[`Luxury greeting cards and invitations`,`Premium hang tags and swing tickets`,`Book covers and dust jackets`,`High-end brochure and catalog covers`,`Promotional card mailers`,`Certificate and diploma stock`],certifications:[`FSC Mix`,`ISO 9001`],variants:[`C2S High Bulk Bristol Board`],features:[`Two-Side Printability — Supports high-quality printing on both sides.`,`High Bulk — Provides greater thickness and a premium hand feel at a controlled basis weight.`,`Clean Converting — Suitable for cutting, scoring, folding and die-cutting.`,`Versatile Graphic Use — Works for covers, cards, folders and premium printed packaging.`],customization:[`Custom grammage`,`Custom sheet size`,`Sheet or reel supply`,`Custom packing`],commercial:{moq:`1 metric ton`,leadTime:`2–3 weeks`,samples:`Free samples available`,certification:`FSC certified`,containerLoading:`40HQ full load: 25 metric tons`},quoteReqs:[`Grammage`,`Sheet or reel size`,`Quantity`,`Printing method`,`Application`,`Destination port`],seoTitle:`C2S High Bulk Bristol Board Supplier`,metaDescription:`Two-side coated high bulk bristol board from 210 to 320 gsm for premium printing, covers, cards and packaging.`,keywords:[`C2S art board`,`coated art card`,`SBS board`,`art card paper`,`premium card stock`,`double-coated board`],image:`/images/products/package-board/c2s-art-board-main.jpg`,gallery:[{src:`/images/products/package-board/gallery/c2s-art-board-scene-01.jpg`,alt:`c2s art board card scene 01 scene`},{src:`/images/products/package-board/gallery/c2s-art-board-scene-02.jpg`,alt:`c2s art board card scene 02 scene`},{src:`/images/products/package-board/gallery/c2s-art-board-scene-03.jpg`,alt:`c2s art board card scene 03 scene`},{src:`/images/products/package-board/gallery/c2s-art-board-scene-04.jpg`,alt:`c2s art board card scene 04 scene`},{src:`/images/products/package-board/gallery/c2s-art-board-scene-05.jpg`,alt:`c2s art board card scene 05 scene`},{src:`/images/products/package-board/gallery/c2s-art-board-scene-06.jpg`,alt:`c2s art board card scene 06 scene`},{src:`/images/products/package-board/gallery/c2s-art-board-scene-07.jpg`,alt:`c2s art board card scene 07 scene`},{src:`/images/products/package-board/gallery/c2s-art-board-scene-08.jpg`,alt:`c2s art board card scene 08 scene`},{src:`/images/products/package-board/gallery/c2s-art-board-photo-01.jpg`,alt:`c2s art board card procurement photo`},{src:`/images/products/package-board/gallery/c2s-art-board-photo-02.jpg`,alt:`c2s art board card spec sample photo`},{src:`/images/products/package-board/gallery/c2s-art-board-photo-03.jpg`,alt:`c2s art board card design hero photo`},{src:`/images/products/package-board/gallery/c2s-art-board-photo-04.jpg`,alt:`c2s art board card application photo`},{src:`/images/products/package-board/gallery/c2s-art-board-photo-05.jpg`,alt:`c2s art board card website banner`}]},"kraft-paper":{id:`kraft-paper`,name:`Kraft Paper`,category:`package-board`,tagline:`Natural kraft paper for sacks, bags, wrapping, industrial packaging and paper converting.`,description:`YOUNGSUN supplies extensible sack kraft, high-strength sack kraft, and premium kraft paper for packaging and industrial converting, with grades selectable according to required tensile strength, tear resistance, extensibility, and printability. Commercial grades range from 50–120 gsm, with extensible sack kraft at 65–95 gsm. Tensile index is rated at ≥80 Nm/g (MD) with tear index ≥12 mNm²/g. Available in natural brown, bleached white, and recycled options, the paper features controlled porosity per application and is supplied in standard and jumbo rolls as well as sheets. The strong fibre structure supports demanding sack, bag, and wrapping applications, with extensible grades that absorb stress during filling, handling, and transport. Key applications span industrial sacks, shopping bags, food bags, wrapping paper, protective packaging, laminated packaging, and general paper converting. Custom grade selection, grammage, sheet or reel supply, size, and printing support are available.`,specs:[`Grammage: 35 – 200 gsm`,`Grades: Natural (brown) / Bleached (white) / Recycled`,`Tensile index: ≥ 80 Nm/g (MD)`,`Tear index: ≥ 12 mNm²/g`,`Porosity: Controlled per application`,`Format: Rolls (standard & jumbo), sheets`],applications:[`Multi-wall sacks for cement, chemicals, and flour`,`Corrugated liner and fluting medium`,`Industrial wrapping and void-fill paper`,`Shopping bags and grocery sacks`,`Envelopes and postal packaging`,`Protective interleaving and dunnage`],certifications:[`FSC 100%`,`PEFC`,`ISO 9001`],variants:[`Extensible Sack Kraft Paper`,`High Strength Sack Kraft Paper`,`Premium Kraft Paper`],features:[`Strong Fibre Structure — Supports demanding sack, bag and wrapping applications.`,`Extensible Grade Available — Helps absorb stress during filling, handling and transport.`,`Good Converting Performance — Suitable for bag making, printing, laminating and wrapping.`,`Multiple Strength Grades — Allows selection according to product weight and packaging structure.`],customization:[`Grade selection`,`Custom grammage`,`Sheet or reel supply`,`Custom size`,`Printing and converting support`],commercial:{moq:`1 metric ton`,leadTime:`2–3 weeks`,samples:`Free samples available`,certification:`FSC certified`,containerLoading:`40HQ full load: 25 metric tons`},quoteReqs:[`Grade (natural/bleached/recycled)`,`Grammage`,`Roll or sheet size`,`Quantity`,`End use`,`Destination port`],seoTitle:`Kraft Paper Supplier for Packaging and Industrial Use`,metaDescription:`Natural, bleached and recycled kraft paper from 35 to 200 gsm for sacks, bags, wrapping and industrial converting.`,keywords:[`kraft paper`,`virgin kraft`,`sack kraft paper`,`brown kraft paper`,`packaging kraft`,`industrial kraft paper`],image:`/images/products/package-board/kraft-paper-main.jpg`,gallery:[{src:`/images/products/package-board/gallery/kraft-paper-scene-01.jpg`,alt:`kraft paper scene 01 scene`},{src:`/images/products/package-board/gallery/kraft-paper-scene-02.jpg`,alt:`kraft paper scene 02 scene`},{src:`/images/products/package-board/gallery/kraft-paper-scene-03.jpg`,alt:`kraft paper scene 03 scene`},{src:`/images/products/package-board/gallery/kraft-paper-scene-04.jpg`,alt:`kraft paper scene 04 scene`},{src:`/images/products/package-board/gallery/kraft-paper-scene-05.jpg`,alt:`kraft paper scene 05 scene`},{src:`/images/products/package-board/gallery/kraft-paper-scene-06.jpg`,alt:`kraft paper scene 06 scene`},{src:`/images/products/package-board/gallery/kraft-paper-scene-07.jpg`,alt:`kraft paper scene 07 scene`},{src:`/images/products/package-board/gallery/kraft-paper-scene-08.jpg`,alt:`kraft paper scene 08 scene`},{src:`/images/products/package-board/gallery/kraft-paper-photo-01.jpg`,alt:`kraft paper procurement photo`},{src:`/images/products/package-board/gallery/kraft-paper-photo-02.jpg`,alt:`kraft paper spec sample photo`},{src:`/images/products/package-board/gallery/kraft-paper-photo-03.jpg`,alt:`kraft paper design hero photo`},{src:`/images/products/package-board/gallery/kraft-paper-photo-04.jpg`,alt:`kraft paper application photo`},{src:`/images/products/package-board/gallery/kraft-paper-photo-05.jpg`,alt:`kraft paper website banner`}]},"duplex-board":{id:`duplex-board`,name:`Duplex Board`,category:`package-board`,tagline:`Coated white-top duplex board with grey back for economical folding cartons and printed packaging.`,description:`YOUNGSUN Duplex Board provides a smooth, coated white printing front side with an economical recycled grey reverse, making it ideal for high-volume packaging where print quality, converting efficiency, and cost control must be balanced. Available in 200–450 gsm, the board offers ISO 85%+ brightness on the coated top side with stiffness optimized for carton converting. It comes in grey back as standard, with white back available subject to order quantity. The printable white surface supports multicolor carton printing, while the recycled base balances packaging performance and cost. The board is suitable for die-cutting, scoring, folding, and gluing on automated lines. Typical applications include consumer product cartons, food secondary packaging, toy boxes, shoe boxes, household packaging, and display packaging. Food-grade options with barrier coating are also available. Custom grammage, size, sheet or reel supply, cutting, and export packing are supported.`,specs:[`Grammage: 200 – 450 gsm`,`Structure: White coated top + grey uncoated back`,`Brightness: ISO 85%+ (top side)`,`Stiffness: Optimized for carton converting`,`Format: Sheets & reels`,`Food-grade options with barrier coating`],applications:[`FMCG retail cartons (soap, toothpaste, snacks)`,`Shoe boxes and garment boxes`,`Toy and game packaging`,`Matchbox and firework cartons`,`Pharmaceutical secondary packaging`,`General retail and display packaging`],certifications:[`FSC Recycled`,`ISO 9001`],variants:[`Duplex Board Grey Back`,`Duplex Board White Back (subject to availability)`],features:[`Printable White Surface — Provides a suitable surface for multicolor carton printing.`,`Economical Recycled Base — Balances packaging performance and cost.`,`Good Converting Performance — Suitable for die-cutting, scoring, folding and gluing.`,`Flexible Supply — Available in sheets, reels and custom dimensions.`],customization:[`Custom grammage`,`Custom size`,`Sheet or reel supply`,`Custom cutting`,`Export packing`],commercial:{moq:`1 metric ton`,leadTime:`2–3 weeks`,samples:`Free samples available`,certification:`FSC certified`,containerLoading:`40HQ full load: 25 metric tons`},quoteReqs:[`Grey back or white back`,`Grammage`,`Size`,`Quantity`,`Application`,`Destination port`],seoTitle:`Duplex Board Grey Back Supplier`,metaDescription:`Coated white-top duplex board from 200 to 400 gsm for economical folding cartons, retail packaging and printed boxes.`,keywords:[`duplex board`,`white-lined chipboard`,`WLC`,`coated duplex board`,`grey back board`,`FMCG carton board`],image:`/images/products/package-board/duplex-board-main.jpg`,gallery:[{src:`/images/products/package-board/gallery/duplex-board-scene-01.jpg`,alt:`duplex board scene 01 scene`},{src:`/images/products/package-board/gallery/duplex-board-scene-02.jpg`,alt:`duplex board scene 02 scene`},{src:`/images/products/package-board/gallery/duplex-board-scene-03.jpg`,alt:`duplex board scene 03 scene`},{src:`/images/products/package-board/gallery/duplex-board-scene-04.jpg`,alt:`duplex board scene 04 scene`},{src:`/images/products/package-board/gallery/duplex-board-scene-05.jpg`,alt:`duplex board scene 05 scene`},{src:`/images/products/package-board/gallery/duplex-board-scene-06.jpg`,alt:`duplex board scene 06 scene`},{src:`/images/products/package-board/gallery/duplex-board-scene-07.jpg`,alt:`duplex board scene 07 scene`},{src:`/images/products/package-board/gallery/duplex-board-scene-08.jpg`,alt:`duplex board scene 08 scene`},{src:`/images/products/package-board/gallery/duplex-board-photo-01.jpg`,alt:`duplex board procurement photo`},{src:`/images/products/package-board/gallery/duplex-board-photo-02.jpg`,alt:`duplex board spec sample photo`},{src:`/images/products/package-board/gallery/duplex-board-photo-03.jpg`,alt:`duplex board design hero photo`},{src:`/images/products/package-board/gallery/duplex-board-photo-04.jpg`,alt:`duplex board application photo`},{src:`/images/products/package-board/gallery/duplex-board-photo-05.jpg`,alt:`duplex board website banner`}]},"pe-coated-paper":{id:`pe-coated-paper`,name:`PE Coated Paper`,category:`package-board`,tagline:`Polyethylene-laminated paper and board for moisture barrier, heat-seal, and liquid-resistant packaging.`,description:`PE coated paper consists of a paper or board substrate extrusion-coated with a thin layer of polyethylene (PE) on one or both sides. The PE layer creates a moisture-proof, grease-resistant, and heat-sealable barrier — making it the standard material for paper cups, cold-drink cups, ice-cream tubs, and takeaway containers. Available with single-side PE coating (1PE) for general moisture protection or double-side coating (2PE) for full liquid containment. PE grammage ranges from 12 gsm to 30 gsm depending on barrier requirements.`,specs:[`Substrate: Kraft paper / White paper / Board, 80–350 gsm`,`PE coating: 12–30 gsm, one side (1PE) or two sides (2PE)`,`Heat-sealable: Yes, standard PE heat-seal range 110–150°C`,`Moisture barrier: WVTR ≤ 10 g/m²/24h (at 38°C, 90% RH)`,`Format: Rolls (slit to width) & sheets`,`Food-grade: FDA 21 CFR 176.170 & EU 1935/2004 compliant`],applications:[`Paper cups — hot cups and cold cups`,`Ice cream tubs and lids`,`Takeaway food containers and boxes`,`Frozen food packaging`,`Grease-resistant wrapping and bags`,`Butter and margarine wraps`],certifications:[`FDA-compliant`,`EU 1935/2004`,`FSC Mix`],variants:[`Single-Side PE Coated Paper (1PE)`,`Double-Side PE Coated Paper (2PE)`,`PE Coated Kraft Paper`,`PE Coated White Board`],features:[`Moisture Barrier — PE layer prevents water and moisture penetration for food and liquid packaging.`,`Heat-Sealable — Standard PE heat-seal range 110–150°C for cup and container forming.`,`Grease Resistant — Suitable for oily and greasy food applications.`,`Food-Grade Compliance — FDA 21 CFR 176.170 & EU 1935/2004 compliant for direct food contact.`],customization:[`Custom PE coating weight (12–30 gsm)`,`Single or double side coating`,`Custom substrate grammage`,`Slit-to-width reels`,`Custom packing`],commercial:{moq:`1 metric ton`,leadTime:`2–3 weeks`,samples:`Free samples available`,certification:`FSC certified`,containerLoading:`40HQ full load: 25 metric tons`},keywords:[`PE coated paper`,`polyethylene coated paper`,`paper cup stock`,`PE coated board`,`heat seal paper`,`food-grade coated paper`],image:`/images/products/package-board/pe-coated-paper-main.jpg`,gallery:[{src:`/images/products/package-board/gallery/pe-coated-paper-scene-01.jpg`,alt:`pe coated paper scene 01 scene`},{src:`/images/products/package-board/gallery/pe-coated-paper-scene-02.jpg`,alt:`pe coated paper scene 02 scene`},{src:`/images/products/package-board/gallery/pe-coated-paper-scene-03.jpg`,alt:`pe coated paper scene 03 scene`},{src:`/images/products/package-board/gallery/pe-coated-paper-scene-04.jpg`,alt:`pe coated paper scene 04 scene`},{src:`/images/products/package-board/gallery/pe-coated-paper-scene-05.jpg`,alt:`pe coated paper scene 05 scene`},{src:`/images/products/package-board/gallery/pe-coated-paper-scene-06.jpg`,alt:`pe coated paper scene 06 scene`},{src:`/images/products/package-board/gallery/pe-coated-paper-scene-07.jpg`,alt:`pe coated paper scene 07 scene`},{src:`/images/products/package-board/gallery/pe-coated-paper-scene-08.jpg`,alt:`pe coated paper scene 08 scene`},{src:`/images/products/package-board/gallery/pe-coated-paper-photo-01.jpg`,alt:`pe coated paper procurement photo`},{src:`/images/products/package-board/gallery/pe-coated-paper-photo-02.jpg`,alt:`pe coated paper spec sample photo`},{src:`/images/products/package-board/gallery/pe-coated-paper-photo-03.jpg`,alt:`pe coated paper design hero photo`},{src:`/images/products/package-board/gallery/pe-coated-paper-photo-04.jpg`,alt:`pe coated paper application photo`},{src:`/images/products/package-board/gallery/pe-coated-paper-photo-05.jpg`,alt:`pe coated paper website banner`}]},ckb:{id:`ckb`,name:`CKB (Coated Kraft Back)`,category:`package-board`,tagline:`High-strength coated kraft back board for beverage, food, frozen, retail and industrial folding cartons.`,description:`YOUNGSUN Coated Kraft Back Board (CKB) combines a multi-coated (triple-coated) white printing surface with a strong unbleached kraft reverse, delivering both attractive retail presentation and robust structural performance. Available in 200–350 gsm with common weights at 200, 235, 245, 255, 280, 300, 325, and 350 gsm, the board is hard-sized for demanding applications including cold storage, frozen food, and beverage packaging. The strong kraft reverse provides reliable tear and compression performance, while the high-quality coated top supports detailed printing and branding. The board can be supplied in sheets, reels, and custom sizes. Primary applications include beverage packaging, dry food cartons, frozen food packaging, cold storage packaging, toy boxes, shoe boxes, and tool packaging. Custom grammage, sheet or reel supply, size, cutting, and export packing are all supported. Food-contact certification is available upon request.`,specs:[`Grammage: 200 – 350 gsm`,`Surface: Triple-coated white top with unbleached kraft back`,`Supply forms: Sheets, reels, custom sizes`,`Grade: CKB`],applications:[`Beverage packaging`,`Dry food cartons`,`Frozen food packaging`,`Cold storage packaging`,`Toy boxes`,`Shoe boxes`,`Tool packaging`],certifications:[`FSC certified`],variants:[`Coated Kraft Back Board`],features:[`Strong Kraft Reverse — Provides reliable tear and compression performance.`,`High-Quality Coated Top — Supports attractive printing and retail presentation.`,`Hard-Sized Structure — Suitable for cold storage, frozen and beverage packaging applications.`,`High Yield — Combines structural performance with efficient material use.`],customization:[`Custom grammage`,`Sheet or reel supply`,`Custom size`,`Custom cutting`,`Export packing`],commercial:{moq:`1 metric ton`,leadTime:`2–3 weeks`,samples:`Free samples available`,certification:`FSC certified`,containerLoading:`40HQ full load: 25 metric tons`},quoteReqs:[`Grammage`,`Sheet or reel size`,`Quantity`,`End use`,`Food-contact requirement`,`Destination port`],seoTitle:`Coated Kraft Back Board Supplier`,metaDescription:`CKB coated kraft back board from 200 to 350 gsm for beverage, frozen food, retail and industrial folding cartons.`,keywords:[`coated kraft back board`,`CKB paperboard supplier`,`kraft back folding carton`,`beverage packaging board`,`frozen food paperboard`],image:`/images/products/package-board/ckb-main.jpg`,gallery:[{src:`/images/products/package-board/gallery/01-CBK-Raw-Material-Jumbo-Roll.jpg`,alt:`CKB raw material jumbo roll`},{src:`/images/products/package-board/gallery/02-CBK-Spiral-Paper-Tube-Line.jpg`,alt:`CKB spiral paper tube line`},{src:`/images/products/package-board/gallery/03-CBK-Flexible-Film-Roll-Core.jpg`,alt:`CKB flexible film roll core`},{src:`/images/products/package-board/gallery/04-CBK-Textile-Yarn-Cones.jpg`,alt:`CKB textile yarn cones`},{src:`/images/products/package-board/gallery/05-CBK-Tissue-Roll-Cores.jpg`,alt:`CKB tissue roll cores`},{src:`/images/products/package-board/gallery/06-CBK-Pallet-Edge-Protectors.jpg`,alt:`CKB pallet edge protectors`},{src:`/images/products/package-board/gallery/07-CBK-Fiber-Drums.jpg`,alt:`CKB fiber drums`},{src:`/images/products/package-board/gallery/08-CBK-Industrial-Roll-Cores.jpg`,alt:`CKB industrial roll cores`}]},"woodfree-paper":{id:`woodfree-paper`,name:`Woodfree Paper`,category:`culture-paper`,tagline:`Uncoated woodfree paper with high brightness, good opacity and stable runnability for books, notebooks and commercial printing.`,description:`YOUNGSUN Woodfree Offset Paper is an uncoated printing paper developed for clear text reproduction, balanced ink absorption, and reliable high-speed press performance. Available in 60–120 gsm with common weights at 60, 65, 70, 80, 100, and 120 gsm, the paper offers high white and natural white color options depending on the grade. It delivers good opacity for double-sided printing, making it suitable for books, notebooks, textbooks, manuals, forms, envelopes, and general commercial printing. The balanced ink absorption supports clean offset results without show-through, while reliable runnability ensures consistent feeding and printing on high-speed equipment. Available in sheets, reels, and custom-cut formats. Custom grammage, color selection, sheet or reel supply, size, and packing are all available to order.`,specs:[`Grammage: 60 – 120 gsm (custom up to 300 gsm)`,`Brightness: ISO 90–100%`,`Opacity: ≥ 90% at 80 gsm`,`Cobb value: ≤ 30 g/m² (sized for offset/inkjet)`,`Format: Sheets (A4, A3, SRA3, custom), rolls`,`Acid-free: pH 7.0–9.0, alkaline reserve ≥ 2% CaCO₃`],applications:[`Office documents — A4 / A3 copy and printer paper`,`Book publishing — text stock for novels and textbooks`,`Business stationery — letterhead, envelopes, notepads`,`Commercial print — flyers, leaflets, newsletters`,`Envelope paper — wallet, pocket, and window envelopes`,`Archival documents — ISO 9706 permanent paper`],certifications:[`FSC Mix`,`ISO 9706 (archival)`,`ISO 9001`],variants:[`High White Offset Paper`,`Natural White Offset Paper (subject to order)`],features:[`Balanced Ink Absorption — Supports clean text and stable offset printing.`,`Good Opacity — Suitable for double-sided books, manuals and forms.`,`Reliable Runnability — Designed for consistent feeding and printing performance.`,`Multiple Supply Forms — Available in sheets, reels and custom formats.`],customization:[`Custom grammage`,`High white or natural white`,`Sheet or reel supply`,`Custom size`,`Custom packing`],commercial:{moq:`1 metric ton`,leadTime:`2–3 weeks`,samples:`Free samples available`,certification:`FSC certified`,containerLoading:`40HQ full load: 25 metric tons`},quoteReqs:[`Grammage`,`Sheet or reel size`,`Quantity`,`Printing method`,`Application`,`Destination port`],seoTitle:`Woodfree Offset Paper Supplier`,metaDescription:`Woodfree offset paper for premium commercial printing, books, brochures and business stationery.`,keywords:[`woodfree paper`,`uncoated woodfree`,`UWF paper`,`office paper`,`bond paper`,`book paper`],image:`/images/products/culture-paper/woodfree-paper-main.jpg`,gallery:[{src:`/images/products/culture-paper/gallery/woodfree-paper-scene-01.jpg`,alt:`woodfree paper scene 01 scene`},{src:`/images/products/culture-paper/gallery/woodfree-paper-scene-02.jpg`,alt:`woodfree paper scene 02 scene`},{src:`/images/products/culture-paper/gallery/woodfree-paper-scene-03.jpg`,alt:`woodfree paper scene 03 scene`},{src:`/images/products/culture-paper/gallery/woodfree-paper-scene-04.jpg`,alt:`woodfree paper scene 04 scene`},{src:`/images/products/culture-paper/gallery/woodfree-paper-scene-05.jpg`,alt:`woodfree paper scene 05 scene`},{src:`/images/products/culture-paper/gallery/woodfree-paper-scene-06.jpg`,alt:`woodfree paper scene 06 scene`},{src:`/images/products/culture-paper/gallery/woodfree-paper-scene-07.jpg`,alt:`woodfree paper scene 07 scene`},{src:`/images/products/culture-paper/gallery/woodfree-paper-scene-08.jpg`,alt:`woodfree paper scene 08 scene`},{src:`/images/products/culture-paper/gallery/woodfree-paper-photo-01.jpg`,alt:`woodfree paper procurement photo`},{src:`/images/products/culture-paper/gallery/woodfree-paper-photo-02.jpg`,alt:`woodfree paper spec sample photo`},{src:`/images/products/culture-paper/gallery/woodfree-paper-photo-03.jpg`,alt:`woodfree paper design hero photo`},{src:`/images/products/culture-paper/gallery/woodfree-paper-photo-04.jpg`,alt:`woodfree paper application photo`},{src:`/images/products/culture-paper/gallery/woodfree-paper-photo-05.jpg`,alt:`woodfree paper website banner`}]},"color-offset-paper":{id:`color-offset-paper`,name:`Color Offset Paper`,category:`culture-paper`,tagline:`Lightweight colored offset paper for office forms, inserts, publishing, stationery and promotional printing.`,description:`YOUNGSUN Color Offset Paper is available in standard, deep, and fluorescent shades for a wide range of printing and converting applications. The grammage range spans 60–150 gsm with an uncoated surface suitable for offset printing, copying, writing, and general paper converting. Lighter weights work well for inserts, forms, and multi-page printed products, while heavier weights serve stationery and promotional items. The broad color range supports coding, branding, publishing, and promotional use. Common applications include office forms, book inserts, flyers, stationery, educational materials, tickets, and promotional printing. Available in sheets, reels, and custom-cut sizes. Custom color selection, grammage, sheet or reel supply, size, and packing are supported.`,specs:[`Grammage: 60 – 200 gsm`,`Colors: 20+ standard, custom matching available`,`Color consistency: Delta E ≤ 1.5 batch-to-batch`,`Surface: Sized for offset, good ink holdout`,`Format: Sheets & reels`,`Lightfastness: ISO 105-B02 rated`],applications:[`Colored letterhead and corporate stationery`,`Event programs, menus, and brochures`,`Colored flyers, leaflets, and direct mail`,`Scrapbooking and craft paper`,`Colored envelope stock`,`Colored divider pages and interleaving`],certifications:[`FSC Mix`,`ISO 9001`],variants:[`Standard Color Offset Paper`,`Deep Color Offset Paper`,`Fluorescent Offset Paper`],features:[`Broad Color Range — Supports coding, branding, publishing and promotional use.`,`Uncoated Printing Surface — Suitable for offset printing, writing and selected digital applications.`,`Lightweight Options — Suitable for inserts, forms and multi-page printed products.`,`Custom Converting — Available in sheets, reels and custom-cut sizes.`],customization:[`Color selection`,`Custom grammage`,`Sheet or reel supply`,`Custom size`,`Custom packing`],commercial:{moq:`1 metric ton`,leadTime:`2–3 weeks`,samples:`Free samples available`,certification:`FSC certified`,containerLoading:`40HQ full load: 25 metric tons`},quoteReqs:[`Color reference`,`Grammage`,`Sheet or reel size`,`Quantity`,`Printing method`,`Destination port`],seoTitle:`Color Offset Paper Supplier`,metaDescription:`Color offset paper in a wide range of shades for commercial printing, stationery and specialty applications.`,keywords:[`color offset paper`,`colored uncoated paper`,`tinted offset`,`colored printing paper`,`dyed paper`,`offset color paper`],image:`/images/products/culture-paper/color-offset-paper-main.jpg`,gallery:[{src:`/images/products/culture-paper/gallery/color-offset-paper-scene-01.jpg`,alt:`color offset paper scene 01 scene`},{src:`/images/products/culture-paper/gallery/color-offset-paper-scene-02.jpg`,alt:`color offset paper scene 02 scene`},{src:`/images/products/culture-paper/gallery/color-offset-paper-scene-03.jpg`,alt:`color offset paper scene 03 scene`},{src:`/images/products/culture-paper/gallery/color-offset-paper-scene-04.jpg`,alt:`color offset paper scene 04 scene`},{src:`/images/products/culture-paper/gallery/color-offset-paper-scene-05.jpg`,alt:`color offset paper scene 05 scene`},{src:`/images/products/culture-paper/gallery/color-offset-paper-scene-06.jpg`,alt:`color offset paper scene 06 scene`},{src:`/images/products/culture-paper/gallery/color-offset-paper-scene-07.jpg`,alt:`color offset paper scene 07 scene`},{src:`/images/products/culture-paper/gallery/color-offset-paper-scene-08.jpg`,alt:`color offset paper scene 08 scene`},{src:`/images/products/culture-paper/gallery/color-offset-paper-photo-01.jpg`,alt:`color offset paper procurement photo`},{src:`/images/products/culture-paper/gallery/color-offset-paper-photo-02.jpg`,alt:`color offset paper spec sample photo`},{src:`/images/products/culture-paper/gallery/color-offset-paper-photo-03.jpg`,alt:`color offset paper design hero photo`},{src:`/images/products/culture-paper/gallery/color-offset-paper-photo-04.jpg`,alt:`color offset paper application photo`},{src:`/images/products/culture-paper/gallery/color-offset-paper-photo-05.jpg`,alt:`color offset paper website banner`}]},"lwc-paper":{id:`lwc-paper`,name:`LWC Paper (Lightweight Coated)`,category:`culture-paper`,tagline:`Lightweight coated paper for magazines, catalogs, inserts, manuals and high-volume commercial printing.`,description:`YOUNGSUN LWC (Lightweight Coated) Paper combines low basis weight with a coated printing surface, helping publishers and printers reduce product weight and distribution cost while maintaining image quality and opacity. Available in 58–80 gsm with common weights at 58, 60, 62, 64, 70, and 80 gsm. Typical specifications include 43% gloss, ISO 84% whiteness, and opacity ranging from approximately 89.5% to 96% depending on grammage — suitable for double-sided publication printing. The coated surface supports clear images and consistent color reproduction, making it ideal for high-volume magazine, catalog, advertising insert, instruction manual, retail leaflet, and direct mail applications. Available in sheets, reels, and custom sizes with export packing options.`,specs:[`Grammage: 35 – 70 gsm`,`Coating: Light on-machine coated, gloss or matt`,`Brightness: ISO 70–80%`,`Opacity: ≥ 88% at 60 gsm`,`Format: Reels (standard widths), sheets on request`,`Suitable for: Heatset web offset, rotogravure`],applications:[`High-circulation magazines and periodicals`,`Retail catalogs and mail-order books`,`Advertising inserts and newspaper supplements`,`Direct mail flyers and brochures`,`Coupon booklets and promotional booklets`,`Telephone directories and reference books`],certifications:[`FSC Mix`,`PEFC`,`ISO 9001`],variants:[`Lightweight Coated Paper`],features:[`Low Basis Weight — Helps reduce publication weight and distribution cost.`,`Coated Print Surface — Supports clear images and consistent color reproduction.`,`Good Opacity — Suitable for double-sided publication printing.`,`High-Volume Printing Use — Designed for magazines, catalogs, inserts and commercial print runs.`],customization:[`Custom grammage`,`Sheet or reel supply`,`Custom size`,`Custom packing`],commercial:{moq:`1 metric ton`,leadTime:`2–3 weeks`,samples:`Free samples available`,certification:`FSC certified`,containerLoading:`40HQ full load: 25 metric tons`},quoteReqs:[`Grammage`,`Sheet or reel size`,`Quantity`,`Printing method`,`Application`,`Destination port`],seoTitle:`LWC Paper Supplier for Magazines and Catalogs`,metaDescription:`Lightweight coated paper with high opacity for magazines, catalogs, inserts and high-volume commercial printing.`,keywords:[`LWC paper`,`lightweight coated paper`,`magazine paper`,`catalog paper`,`low grammage coated`,`heatset web paper`],image:`/images/products/culture-paper/lwc-paper-main.jpg`,gallery:[{src:`/images/products/culture-paper/gallery/lwc-paper-scene-01.jpg`,alt:`lwc paper scene 01 scene`},{src:`/images/products/culture-paper/gallery/lwc-paper-scene-02.jpg`,alt:`lwc paper scene 02 scene`},{src:`/images/products/culture-paper/gallery/lwc-paper-scene-03.jpg`,alt:`lwc paper scene 03 scene`},{src:`/images/products/culture-paper/gallery/lwc-paper-scene-04.jpg`,alt:`lwc paper scene 04 scene`},{src:`/images/products/culture-paper/gallery/lwc-paper-scene-05.jpg`,alt:`lwc paper scene 05 scene`},{src:`/images/products/culture-paper/gallery/lwc-paper-scene-06.jpg`,alt:`lwc paper scene 06 scene`},{src:`/images/products/culture-paper/gallery/lwc-paper-scene-07.jpg`,alt:`lwc paper scene 07 scene`},{src:`/images/products/culture-paper/gallery/lwc-paper-scene-08.jpg`,alt:`lwc paper scene 08 scene`},{src:`/images/products/culture-paper/gallery/lwc-paper-photo-01.jpg`,alt:`lwc paper procurement photo`},{src:`/images/products/culture-paper/gallery/lwc-paper-photo-02.jpg`,alt:`lwc paper spec sample photo`},{src:`/images/products/culture-paper/gallery/lwc-paper-photo-03.jpg`,alt:`lwc paper design hero photo`},{src:`/images/products/culture-paper/gallery/lwc-paper-photo-04.jpg`,alt:`lwc paper application photo`},{src:`/images/products/culture-paper/gallery/lwc-paper-photo-05.jpg`,alt:`lwc paper website banner`}]},"ncr-paper":{id:`ncr-paper`,name:`NCR Paper (Carbonless Paper)`,category:`culture-paper`,tagline:`Self-copying carbonless paper for forms, invoices, and receipts — no carbon sheet needed, clean and smudge-free.`,description:`YOUNGSUN NCR (No Carbon Required) carbonless copy paper provides reliable image transfer in multi-part forms, invoices, receipts, and business documents. Available in 2-part to 6-part configurations, the paper uses a chemical coating system — CB (Coated Back), CFB (Coated Front and Back), and CF (Coated Front) sheets — to produce clean, consistent copies without carbon interleaves. The paper delivers sharp blue or black image transfer under writing or impact printing pressure, with good fade resistance for archival records. Common applications include business forms, invoices, delivery notes, receipts, contracts, bank slips, and warehouse documentation. The paper is compatible with offset and letterpress printing for form design and branding. Custom ply configurations, grammage, sheet or roll sizes, and packing are available to order.`,specs:[`Types: CB (Coated Back) / CFB (Coated Front & Back) / CF (Coated Front)`,`Grammage: 50 – 60 gsm per ply`,`Colors: White / Pink / Yellow / Blue / Green (sequential sets)`,`Image color: Blue (standard) / Black (specialty)`,`Format: Sheets (standard & custom sizes), reels`,`Shelf life: Minimum 2 years under normal storage`],applications:[`Business forms — invoices, purchase orders, delivery notes`,`Receipt books and cash-register rolls`,`Multi-part contracts and agreements`,`Medical prescription pads and lab forms`,`Logistics waybills and consignment notes`,`Bank deposit and withdrawal slips`],certifications:[`FSC Mix`,`ISO 9001`],variants:[`CB (Coated Back) — Top Sheet`,`CFB (Coated Front & Back) — Middle Sheet`,`CF (Coated Front) — Bottom Sheet`,`2-Part to 6-Part Sets`],features:[`Clean Self-Copying — Creates instant copies without carbon sheets, pressure-activated microcapsule technology.`,`Multi-Part Capability — Standard sets from 2-part up to 6-part for complex business forms.`,`Color-Coded Plies — Sequential colors (white, pink, yellow, blue, green) for easy identification.`,`Smudge-Free Images — Blue or black image options with sharp contrast for permanent records.`],customization:[`Custom sheet size`,`Multi-part set configuration`,`Sequential color plies`,`Blue or black image color`,`Reel or sheet supply`],commercial:{moq:`1 metric ton`,leadTime:`2–3 weeks`,samples:`Free samples available`,certification:`FSC certified`,containerLoading:`40HQ full load: 25 metric tons`},quoteReqs:[`Number of plies`,`Grammage`,`Sheet or roll size`,`Quantity`,`Printing method`,`Destination port`],seoTitle:`NCR Carbonless Paper Supplier`,metaDescription:`NCR carbonless copy paper in multi-ply configurations for forms, invoices, receipts and business documents.`,keywords:[`NCR paper`,`carbonless paper`,`carbonless copy paper`,`self-copy paper`,`CB CFB CF paper`,`multi-part forms paper`],image:`/images/products/culture-paper/ncr-paper-main.jpg`,gallery:[{src:`/images/products/culture-paper/gallery/ncr-paper-scene-01.jpg`,alt:`ncr paper scene 01 scene`},{src:`/images/products/culture-paper/gallery/ncr-paper-scene-02.jpg`,alt:`ncr paper scene 02 scene`},{src:`/images/products/culture-paper/gallery/ncr-paper-scene-03.jpg`,alt:`ncr paper scene 03 scene`},{src:`/images/products/culture-paper/gallery/ncr-paper-scene-04.jpg`,alt:`ncr paper scene 04 scene`},{src:`/images/products/culture-paper/gallery/ncr-paper-scene-05.jpg`,alt:`ncr paper scene 05 scene`},{src:`/images/products/culture-paper/gallery/ncr-paper-scene-06.jpg`,alt:`ncr paper scene 06 scene`},{src:`/images/products/culture-paper/gallery/ncr-paper-scene-07.jpg`,alt:`ncr paper scene 07 scene`},{src:`/images/products/culture-paper/gallery/ncr-paper-scene-08.jpg`,alt:`ncr paper scene 08 scene`},{src:`/images/products/culture-paper/gallery/ncr-paper-photo-01.jpg`,alt:`ncr paper procurement photo`},{src:`/images/products/culture-paper/gallery/ncr-paper-photo-02.jpg`,alt:`ncr paper spec sample photo`},{src:`/images/products/culture-paper/gallery/ncr-paper-photo-03.jpg`,alt:`ncr paper design hero photo`},{src:`/images/products/culture-paper/gallery/ncr-paper-photo-04.jpg`,alt:`ncr paper application photo`},{src:`/images/products/culture-paper/gallery/ncr-paper-photo-05.jpg`,alt:`ncr paper website banner`}]},"copy-paper":{id:`copy-paper`,name:`Copy Paper`,category:`culture-paper`,tagline:`Office copy paper in multiple grammages, sheet formats and packing options for distributors, institutions and private-label buyers.`,description:`YOUNGSUN supplies copy paper for photocopying, laser printing, inkjet printing, and general office use in both 70 gsm and 80 gsm grades. Standard sheet formats cover A-series (A3, A4, A5), B-series (B4, B5), K-series (8K, 16K), and US formats. Ream configurations are flexible: standard 400 or 500 sheets per ream, with customized counts from 240 to 500 sheets available. Carton packing options include 5, 6, 8, or 10 reams per carton according to target market requirements. For wholesale distribution and institutional buyers, private-label packaging can be developed — custom ream wrapper and carton designs are available for qualified container-volume orders (MOQ approximately 2×40HQ, around 20,000 cartons). Standard packing MOQ is 500 cartons. Key applications span office printing, photocopying, schools and universities, government and institutional procurement, corporate stationery, and wholesale/retail distribution.`,specs:[`Grammage: 70 / 75 / 80 gsm`,`Brightness: ISO 92–100%`,`Format: A4 (210×297mm), A3 (297×420mm), Letter, Legal`,`Opacity: ≥ 92% at 80 gsm`,`Moisture: 4.5% ± 1%`,`Packaging: 500 sheets/ream, 5–10 reams/carton`,`Compatibility: Laser, inkjet, copier, fax`],applications:[`Office printing and copying`,`School and educational use`,`Government and institutional procurement`,`Home office and remote work`,`Commercial printing of forms and documents`,`Export wholesale — container-load supply`],certifications:[`FSC Mix`,`SGS certified`,`ISO 9001`],variants:[`70 gsm Copy Paper`,`80 gsm Copy Paper`,`Standard Packing`,`Private-Label Packing`],features:[`Multiple Office Formats — Available in common A-, B- and K-series formats, including A3, A4, A5, B4, B5, 8K and 16K.`,`Flexible Ream Configuration — Standard 400- or 500-sheet reams are available, with customized packs from 240 to 500 sheets.`,`Wholesale Carton Options — Cartons can be arranged with 5, 6, 8 or 10 reams according to the target market.`,`Private-Label Supply — Customized wrapper and carton designs are available for qualified container-volume programs.`],customization:[`Private-label ream wrapper`,`Customized carton design`,`Custom sheet count from 240 to 500 sheets`,`5, 6, 8 or 10 reams per carton`,`Selected A-, B-, K- and US sheet formats`],commercial:{moq:`500 cartons (standard) / 2×40HQ ~20,000 cartons (private label)`,leadTime:`2–3 weeks`,samples:`Free samples available`,certification:`FSC certified`,containerLoading:`40HQ full load: 25 metric tons`},quoteReqs:[`Grammage (70/75 gsm)`,`Sheet size (A4/A3/Letter)`,`Quantity (reams/pallets)`,`Brightness requirement`,`Destination port`],seoTitle:`Copy Paper Supplier for Office and Commercial Use`,metaDescription:`High-brightness copy paper in A4/A3/Letter formats for office, commercial printing and stationery use.`,keywords:[`copy paper`,`A4 copy paper`,`office paper`,`printer paper`,`multi-purpose paper`,`copy paper wholesale`],image:`/images/products/culture-paper/copy-paper-main.jpg`,gallery:[]},newsprint:{id:`newsprint`,name:`Newsprint`,category:`culture-paper`,tagline:`Cost-efficient, high-speed printing paper for newspapers, advertising inserts, and mass-circulation publications.`,description:`Newsprint is a low-cost, lightweight paper grade designed primarily for high-speed web offset (coldset) printing of newspapers, advertising flyers, and mass-circulation periodicals. Made predominantly from mechanical wood pulp (groundwood or TMP) with a small percentage of chemical pulp for strength, newsprint is engineered for runnability, printability, and economy at scale.`,specs:[`Grammage: 40 / 42 / 45 / 48.8 / 52 / 57 gsm`,`Brightness: ISO 56–68%`,`Opacity: ≥ 92% at 48.8 gsm`,`Format: Reels (standard width 600–1800mm), sheets on request`,`Composition: 80–90% mechanical pulp, 10–20% chemical pulp`],applications:[`Daily and weekly newspaper printing (coldset web offset)`,`Advertising inserts and flyers for retail distribution`,`Mass-circulation community and free newspapers`,`Trade and industry newsletters and bulletins`,`Election and political campaign materials`,`Directory and catalog printing (economy grade)`],certifications:[`FSC Mix`,`SGS certified`,`ISO 14001`],variants:[`Standard Newsprint (40–57 gsm)`,`Improved Newsprint (higher brightness)`,`Colored Newsprint (subject to order)`],features:[`Cost-Efficient — Low basis weight designed for high-volume, economical printing at scale.`,`High-Speed Runnability — Engineered for coldset web offset presses with minimal web breaks.`,`Good Opacity — Maintains readability even at lightweight grammages for double-sided printing.`,`Reel Supply — Standard and jumbo reels for high-speed newspaper and publication presses.`],customization:[`Custom grammage`,`Custom reel width`,`Sheet supply on request`,`Custom packing`],commercial:{moq:`1 metric ton`,leadTime:`2–3 weeks`,samples:`Free samples available`,certification:`FSC certified`,containerLoading:`40HQ full load: 25 metric tons`},keywords:[`newsprint`,`newsprint paper`,`newspaper paper`,`coldset paper`,`standard newsprint`,`web offset paper`],image:`/images/products/culture-paper/newsprint-main.jpg`,gallery:[{src:`/images/products/culture-paper/gallery/01-Newsprint-Printing-Press.jpg`,alt:`Newsprint printing press`},{src:`/images/products/culture-paper/gallery/02-Newsprint-Cafe-Reader.jpg`,alt:`Newsprint cafe reader`},{src:`/images/products/culture-paper/gallery/03-Newsprint-Newspaper-Kiosk.jpg`,alt:`Newsprint newspaper kiosk`},{src:`/images/products/culture-paper/gallery/04-Newsprint-Advertising-Circulars.jpg`,alt:`Newsprint advertising circulars`},{src:`/images/products/culture-paper/gallery/05-Newsprint-Free-Sheet-Distribution.jpg`,alt:`Newsprint free sheet distribution`},{src:`/images/products/culture-paper/gallery/06-Newsprint-Weekend-Supplement.jpg`,alt:`Newsprint weekend supplement`},{src:`/images/products/culture-paper/gallery/07-Newsprint-Protective-Wrapping.jpg`,alt:`Newsprint protective wrapping`},{src:`/images/products/culture-paper/gallery/08-Newsprint-Charcoal-Sketch-Pad.jpg`,alt:`Newsprint charcoal sketch pad`}]},"a4-copy-paper":{id:`a4-copy-paper`,name:`A4 Copy Paper`,category:`culture-paper`,tagline:`Standard A4 office copy paper — bright white, jam-free, and laser/inkjet compatible in bulk packaging for export.`,description:`A4 Copy Paper is the universal office paper standard — 210×297mm, 70–80 gsm, high brightness (ISO 92%+). Designed for reliable performance across laser printers, inkjet printers, copiers, and fax machines. Smooth, dust-free surface ensures sharp text, clean graphics, and minimal paper jams. Packaged 500 sheets per ream, 5 or 10 reams per carton. Supplied in container loads to distributors, office supply chains, and government procurement programs worldwide. This is the highest-volume paper grade in global trade.`,specs:[`Grammage: 70 / 75 / 80 gsm`,`Brightness: ISO 92–100%`,`Format: A4 (210×297mm)`,`Opacity: ≥ 92% at 80 gsm`,`Packaging: 500 sheets/ream, 5–10 reams/carton`,`Export carton: Palletized, moisture-barrier wrapped`],applications:[`Office printing and copying — laser, inkjet, copier`,`School and educational procurement`,`Government and institutional bulk supply`,`Home office and remote work`,`Wholesale distribution to office supply chains`],certifications:[`FSC Mix`,`SGS certified`,`ISO 9001`],variants:[`70 gsm A4 Copy Paper`,`75 gsm A4 Copy Paper`,`80 gsm A4 Copy Paper`],features:[`Universal Compatibility — Optimized for laser, inkjet, copier and fax machines with jam-free performance.`,`High Brightness — ISO 92–100% brightness for sharp text and clean document appearance.`,`Smooth Surface — Dust-free finish ensures consistent toner/ink adhesion and crisp output.`,`Export-Ready Packaging — Palletized with moisture-barrier wrapping for container shipping.`],customization:[`Private-label ream wrapper`,`Custom carton design`,`Grammage selection (70/75/80 gsm)`,`Ream count configuration`,`Export pallet packing`],commercial:{moq:`500 cartons`,leadTime:`2–3 weeks`,samples:`Free samples available`,certification:`FSC certified`,containerLoading:`40HQ full load: 25 metric tons`},keywords:[`A4 copy paper`,`copy paper`,`office paper`,`A4 printer paper`,`bulk copy paper`,`copy paper export`],image:`/images/products/culture-paper/a4-copy-paper-main.jpg`,gallery:[]},"a4-thermal-paper":{id:`a4-thermal-paper`,name:`A4 Thermal Paper`,category:`culture-paper`,tagline:`A4-sized thermal paper for portable and mobile printing — no ink, no toner, just heat. Ideal for on-the-go professionals.`,description:`A4 Thermal Paper is a heat-sensitive paper that produces images through direct thermal transfer — no ink cartridges, ribbons, or toner required. Compatible with compact portable thermal printers widely used by field sales teams, logistics coordinators, healthcare workers, and remote professionals. Each sheet is standard A4 size (210×297mm), pre-cut for immediate use. The thermal coating produces sharp black images with good contrast and reasonable archival stability. An innovative solution for printing contracts, invoices, reports, and documents anywhere.`,specs:[`Size: A4 (210×297mm)`,`Coating: Direct thermal (BPA-free options available)`,`Image color: Black`,`Compatibility: Portable thermal printers`,`Packaging: Pre-cut sheets, boxed or bulk`,`No ink/toner required`],applications:[`Portable printing for field sales and service teams`,`On-the-spot contracts, invoices, and receipts`,`Healthcare patient documents and prescriptions`,`Logistics waybills and delivery confirmations`,`Remote work and co-working space printing`,`Travel and hospitality documentation`],certifications:[`BPA-free grades available`,`ISO 9001`],variants:[`Standard A4 Thermal Paper`,`BPA-Free A4 Thermal Paper`],features:[`No Ink Required — Direct thermal transfer produces sharp images without cartridges, ribbons or toner.`,`Portable Printer Compatible — Pre-cut A4 sheets for compact mobile thermal printers used by field professionals.`,`Good Image Contrast — Produces clear black text and graphics for documents, contracts and invoices.`,`Instant Printing — Heat-sensitive coating enables immediate output without warm-up time.`],customization:[`BPA-free option`,`Custom sheet count per box`,`Custom packing`,`Branded packaging`],commercial:{moq:`1 metric ton`,leadTime:`2–3 weeks`,samples:`Free samples available`,certification:`ISO 9001`,containerLoading:`40HQ full load: 25 metric tons`},keywords:[`A4 thermal paper`,`thermal printer paper`,`portable printer paper`,`no-ink printing paper`,`mobile printing paper`,`compact printer paper`],image:`/images/products/culture-paper/a4-thermal-paper-main.jpg`,gallery:[]},"thermal-paper-roll":{id:`thermal-paper-roll`,name:`Thermal Paper Roll`,category:`culture-paper`,tagline:`Small-format thermal paper rolls for POS terminals, receipt printers, and instant photo printers — crisp images, reliable performance.`,description:`Thermal Paper Rolls are heat-sensitive paper wound into compact rolls for use in point-of-sale (POS) terminals, credit card terminals, receipt printers, kitchen printers, and mini instant photo printers. Available in standard widths (57mm, 80mm) and various roll diameters. The thermal coating produces sharp, clear prints without ink or toner. BPA-free and phenol-free grades are available for food-service and healthcare applications. A high-volume consumable with consistent global demand from retail, hospitality, banking, and logistics sectors.`,specs:[`Width: 57mm / 80mm (standard), custom widths available`,`Roll diameter: 30–80mm`,`Core size: 12mm / 17mm / 25mm`,`Coating: Direct thermal (BPA-free, phenol-free options)`,`Image color: Black, high contrast`,`Packaging: Shrink-wrapped rolls, carton-packed`],applications:[`POS receipt printing — retail, restaurants, cafes`,`Credit card terminal receipts`,`Kitchen order tickets`,`Logistics label and barcode printing`,`Mini instant photo printers`,`ATM and banking transaction records`],certifications:[`BPA-free grades`,`Phenol-free grades`,`ISO 9001`],variants:[`57mm Width Thermal Roll`,`80mm Width Thermal Roll`,`BPA-Free Thermal Roll`,`Phenol-Free Thermal Roll`],features:[`Universal POS Compatibility — Standard 57mm and 80mm widths fit all major POS and receipt printer brands.`,`Crisp Print Quality — High-contrast black imaging for barcode scanning and long-term record keeping.`,`BPA-Free & Phenol-Free Options — Safer chemistry for food-service, healthcare and retail environments.`,`Consistent Roll Winding — Uniform tension ensures smooth feeding without jams or misalignment.`],customization:[`Custom roll width and diameter`,`Core size selection (12/17/25mm)`,`BPA-free or phenol-free grade`,`Custom packing and labeling`,`Shrink-wrapped or bulk-packed`],commercial:{moq:`1 metric ton`,leadTime:`2–3 weeks`,samples:`Free samples available`,certification:`ISO 9001`,containerLoading:`40HQ full load: 25 metric tons`},keywords:[`thermal paper roll`,`POS paper roll`,`receipt paper roll`,`thermal roll paper`,`cash register paper`,`thermal printer roll`],image:`/images/products/culture-paper/thermal-paper-roll-main.jpg`,gallery:[{src:`/images/products/culture-paper/gallery/thermal-paper-roll-scene-01.jpg`,alt:`Thermal paper roll POS receipt`},{src:`/images/products/culture-paper/gallery/thermal-paper-roll-scene-02.jpg`,alt:`Thermal paper roll credit card terminal`},{src:`/images/products/culture-paper/gallery/thermal-paper-roll-scene-03.jpg`,alt:`Thermal paper roll kitchen order`},{src:`/images/products/culture-paper/gallery/thermal-paper-roll-scene-04.jpg`,alt:`Thermal paper roll logistics label`},{src:`/images/products/culture-paper/gallery/thermal-paper-roll-scene-05.jpg`,alt:`Thermal paper roll mini photo printer`},{src:`/images/products/culture-paper/gallery/thermal-paper-roll-scene-06.jpg`,alt:`Thermal paper roll ATM receipt`},{src:`/images/products/culture-paper/gallery/thermal-paper-roll-scene-07.jpg`,alt:`Thermal paper roll retail POS`},{src:`/images/products/culture-paper/gallery/thermal-paper-roll-scene-08.jpg`,alt:`Thermal paper roll banking transaction`}]},"soft-touch-paper":{id:`soft-touch-paper`,name:`Soft Touch Paper`,category:`fancy-paper`,tagline:`Velvet-smooth tactile coated paper — the sensation of luxury that makes people stop and touch.`,description:`Soft touch paper — also called velvet paper, suede-touch, or soft-feel coated paper — is a paper or board substrate coated with a water-based polyurethane or acrylic dispersion that creates a remarkably smooth, almost rubbery tactile surface. The coating transforms ordinary printed paper into a sensory experience — warm to the touch, fingerprint-resistant, and scuff-resistant. It is widely used by luxury brands for premium packaging, business cards, book covers, and high-end promotional materials where first impression is everything. Soft touch coating also deepens printed colors, giving blacks a richer, denser appearance.`,specs:[`Substrate: Coated paper / Board, 120–400 gsm`,`Coating: Water-based PU or acrylic soft-feel`,`Touch feel: Velvet-smooth, warm, non-slip`,`Print compatibility: Offset, UV offset, screen, foil stamping`,`Durability: Fingerprint-resistant, scuff-resistant`,`Format: Sheets & reels`],applications:[`Luxury business cards and corporate identity`,`Premium book covers and case-bound books`,`High-end cosmetic and perfume packaging`,`Invitation cards and wedding stationery`,`Gift boxes, rigid boxes, and presentation folders`,`Hang tags and swing tickets for fashion brands`],certifications:[`FSC Mix`,`ISO 9001`],variants:[`Soft Touch Coated Paper (120–250 gsm)`,`Soft Touch Coated Board (250–400 gsm)`,`Matte Soft Touch`,`Anti-Scuff Soft Touch`],features:[`Velvet-Smooth Tactile Surface — Creates an irresistible touch sensation that signals luxury and quality.`,`Fingerprint Resistant — Maintains a clean, premium appearance even with repeated handling.`,`Deepens Printed Colors — Blacks appear richer, colors more saturated for dramatic visual impact.`,`Scuff & Scratch Resistant — Durable coating withstands converting, handling and shipping.`],customization:[`Custom grammage`,`Sheet or reel supply`,`Custom size`,`Printing coordination`,`Custom packing`],commercial:{moq:`1 metric ton`,leadTime:`2–3 weeks`,samples:`Free samples available`,certification:`FSC certified`,containerLoading:`40HQ full load: 25 metric tons`},keywords:[`soft touch paper`,`velvet paper`,`suede-touch paper`,`soft-feel coated`,`luxury paper`,`tactile paper`],image:`/images/products/fancy-paper/soft-touch-paper-main.jpg`,gallery:[{src:`/images/products/fancy-paper/gallery/soft-touch-paper-scene-01.jpg`,alt:`soft touch paper scene 01 scene`},{src:`/images/products/fancy-paper/gallery/soft-touch-paper-scene-02.jpg`,alt:`soft touch paper scene 02 scene`},{src:`/images/products/fancy-paper/gallery/soft-touch-paper-scene-03.jpg`,alt:`soft touch paper scene 03 scene`},{src:`/images/products/fancy-paper/gallery/soft-touch-paper-scene-04.jpg`,alt:`soft touch paper scene 04 scene`},{src:`/images/products/fancy-paper/gallery/soft-touch-paper-scene-05.jpg`,alt:`soft touch paper scene 05 scene`},{src:`/images/products/fancy-paper/gallery/soft-touch-paper-scene-06.jpg`,alt:`soft touch paper scene 06 scene`},{src:`/images/products/fancy-paper/gallery/soft-touch-paper-scene-07.jpg`,alt:`soft touch paper scene 07 scene`},{src:`/images/products/fancy-paper/gallery/soft-touch-paper-scene-08.jpg`,alt:`soft touch paper scene 08 scene`},{src:`/images/products/fancy-paper/gallery/soft-touch-paper-photo-01.jpg`,alt:`soft touch paper procurement photo`},{src:`/images/products/fancy-paper/gallery/soft-touch-paper-photo-02.jpg`,alt:`soft touch paper spec sample photo`},{src:`/images/products/fancy-paper/gallery/soft-touch-paper-photo-03.jpg`,alt:`soft touch paper design hero photo`},{src:`/images/products/fancy-paper/gallery/soft-touch-paper-photo-04.jpg`,alt:`soft touch paper application photo`},{src:`/images/products/fancy-paper/gallery/soft-touch-paper-photo-05.jpg`,alt:`soft touch paper website banner`}]},"leather-paper":{id:`leather-paper`,name:`Leather Paper`,category:`fancy-paper`,tagline:`Paper that looks and feels like genuine leather — animal-free, durable, premium.`,description:`Leather paper — also called leatherette paper, faux-leather paper, or leather-embossed paper — is a paper or board substrate embossed with a leather-grain texture and surface-finished to replicate the look and hand-feel of natural leather. It is 100% animal-free (vegan) while delivering genuine luxury aesthetics. Widely used for book covers, diaries, premium packaging, and gift boxes. Available in a range of leather patterns (crocodile, calf, ostrich, pebble grain) and classic leather colors (black, brown, tan, burgundy, navy, dark green).`,specs:[`Substrate: FBB / Grey board / Kraft board, 120–400 gsm`,`Embossing: Leather-grain pattern (multiple textures available)`,`Color: Classic leather tones — customizable`,`Surface: Matte-laminated or PU-coated for durability`,`Format: Sheets & reels`,`Vegan: 100% animal-free material`],applications:[`Book covers — diaries, journals, bibles, notebooks`,`Premium gift boxes and jewelry boxes`,`Wine and spirits packaging`,`Corporate presentation folders`,`Watch and accessory boxes`,`Certificate and diploma holders`],certifications:[`FSC Mix`,`Vegan certified`,`ISO 9001`],variants:[`Crocodile Grain Leather Paper`,`Calf Grain Leather Paper`,`Ostrich Grain Leather Paper`,`Pebble Grain Leather Paper`],features:[`Authentic Leather Look & Feel — Embossed texture replicates genuine leather without animal materials.`,`100% Vegan — Animal-free alternative that delivers the same luxury aesthetic for ethical brands.`,`Multiple Leather Patterns — Crocodile, calf, ostrich, pebble grain and custom textures available.`,`Rich Color Palette — Classic leather tones: black, brown, tan, burgundy, navy, dark green.`],customization:[`Leather grain pattern selection`,`Custom color matching`,`Custom grammage and substrate`,`Sheet or reel supply`,`Custom packing`],commercial:{moq:`1 metric ton`,leadTime:`2–3 weeks`,samples:`Free samples available`,certification:`FSC certified`,containerLoading:`40HQ full load: 25 metric tons`},keywords:[`leather paper`,`leatherette paper`,`faux leather paper`,`leather embossed paper`,`vegan leather paper`,`leather-texture board`],image:`/images/products/fancy-paper/leather-paper-main.jpg`,gallery:[{src:`/images/products/fancy-paper/gallery/leather-paper-scene-01.jpg`,alt:`leather paper scene 01 scene`},{src:`/images/products/fancy-paper/gallery/leather-paper-scene-02.jpg`,alt:`leather paper scene 02 scene`},{src:`/images/products/fancy-paper/gallery/leather-paper-scene-03.jpg`,alt:`leather paper scene 03 scene`},{src:`/images/products/fancy-paper/gallery/leather-paper-scene-04.jpg`,alt:`leather paper scene 04 scene`},{src:`/images/products/fancy-paper/gallery/leather-paper-scene-05.jpg`,alt:`leather paper scene 05 scene`},{src:`/images/products/fancy-paper/gallery/leather-paper-scene-06.jpg`,alt:`leather paper scene 06 scene`},{src:`/images/products/fancy-paper/gallery/leather-paper-scene-07.jpg`,alt:`leather paper scene 07 scene`},{src:`/images/products/fancy-paper/gallery/leather-paper-scene-08.jpg`,alt:`leather paper scene 08 scene`},{src:`/images/products/fancy-paper/gallery/leather-paper-photo-01.jpg`,alt:`leather paper procurement photo`},{src:`/images/products/fancy-paper/gallery/leather-paper-photo-02.jpg`,alt:`leather paper spec sample photo`},{src:`/images/products/fancy-paper/gallery/leather-paper-photo-03.jpg`,alt:`leather paper design hero photo`},{src:`/images/products/fancy-paper/gallery/leather-paper-photo-04.jpg`,alt:`leather paper application photo`},{src:`/images/products/fancy-paper/gallery/leather-paper-photo-05.jpg`,alt:`leather paper website banner`}]},"pearlescent-paper":{id:`pearlescent-paper`,name:`Pearlescent Paper`,category:`fancy-paper`,tagline:`Light-reflecting iridescent paper with a pearl-like shimmer — elegance that moves with the light.`,description:`Pearlescent paper — also called pearl paper, iridescent paper, or mica-coated paper — is coated with a layer containing mica-based pigments that create a luminous, light-reflecting finish. The paper shifts subtly in color and brightness as the viewing angle changes, producing a sophisticated shimmer effect. Available in white pearl, gold pearl, silver pearl, and tinted pearl variants. Grammages from 120 gsm to 350 gsm. Used for wedding invitations, luxury packaging, cosmetic branding, and high-end print collateral where visual impact differentiates the brand.`,specs:[`Grammage: 120 – 350 gsm`,`Finish: Pearl / Iridescent / Shimmer`,`Colors: White pearl, champagne, gold, silver, custom tinted`,`Print compatibility: Offset, screen, foil, embossing, debossing`,`Coating: Mica-based pigment layer`,`Format: Sheets & reels`],applications:[`Wedding invitations and save-the-date cards`,`Cosmetic and skincare packaging`,`Perfume box linings and inserts`,`Luxury brand business cards`,`Certificate and award folders`,`High-end brochure and menu covers`],certifications:[`FSC Mix`,`ISO 9001`],variants:[`White Pearl Paper`,`Champagne Pearl Paper`,`Gold Pearl Paper`,`Silver Pearl Paper`,`Custom Tinted Pearl Paper`],features:[`Light-Reflecting Shimmer — Mica-based pigments create a luminous finish that shifts with viewing angle.`,`Premium Visual Impact — Instantly communicates luxury for weddings, cosmetics and high-end brands.`,`Multiple Pearl Tones — White, champagne, gold, silver and custom tinted pearl variants available.`,`Print & Finish Compatible — Works with offset, screen, foil stamping, embossing and debossing.`],customization:[`Pearlescent tone selection`,`Custom grammage`,`Sheet or reel supply`,`Custom size`,`Foil and embossing coordination`],commercial:{moq:`1 metric ton`,leadTime:`2–3 weeks`,samples:`Free samples available`,certification:`FSC certified`,containerLoading:`40HQ full load: 25 metric tons`},keywords:[`pearlescent paper`,`pearl paper`,`iridescent paper`,`mica coated paper`,`shimmer paper`,`pearl cardstock`],image:`/images/products/fancy-paper/pearlescent-paper-main.jpg`,gallery:[{src:`/images/products/fancy-paper/gallery/pearlescent-paper-scene-01.jpg`,alt:`pearlescent paper scene 01 scene`},{src:`/images/products/fancy-paper/gallery/pearlescent-paper-scene-02.jpg`,alt:`pearlescent paper scene 02 scene`},{src:`/images/products/fancy-paper/gallery/pearlescent-paper-scene-03.jpg`,alt:`pearlescent paper scene 03 scene`},{src:`/images/products/fancy-paper/gallery/pearlescent-paper-scene-04.jpg`,alt:`pearlescent paper scene 04 scene`},{src:`/images/products/fancy-paper/gallery/pearlescent-paper-scene-05.jpg`,alt:`pearlescent paper scene 05 scene`},{src:`/images/products/fancy-paper/gallery/pearlescent-paper-scene-06.jpg`,alt:`pearlescent paper scene 06 scene`},{src:`/images/products/fancy-paper/gallery/pearlescent-paper-scene-07.jpg`,alt:`pearlescent paper scene 07 scene`},{src:`/images/products/fancy-paper/gallery/pearlescent-paper-scene-08.jpg`,alt:`pearlescent paper scene 08 scene`},{src:`/images/products/fancy-paper/gallery/pearlescent-paper-photo-01.jpg`,alt:`pearlescent paper procurement photo`},{src:`/images/products/fancy-paper/gallery/pearlescent-paper-photo-02.jpg`,alt:`pearlescent paper spec sample photo`},{src:`/images/products/fancy-paper/gallery/pearlescent-paper-photo-03.jpg`,alt:`pearlescent paper design hero photo`},{src:`/images/products/fancy-paper/gallery/pearlescent-paper-photo-04.jpg`,alt:`pearlescent paper application photo`},{src:`/images/products/fancy-paper/gallery/pearlescent-paper-photo-05.jpg`,alt:`pearlescent paper website banner`}]},"embossed-paper":{id:`embossed-paper`,name:`Embossed Paper`,category:`fancy-paper`,tagline:`Three-dimensional textured paper — raised patterns that turn packaging into a tactile brand experience.`,description:`Embossed paper features a raised relief pattern mechanically pressed into the paper or board surface under heat and pressure. Unlike printed textures, embossing creates genuine three-dimensional topography that catches light, invites touch, and signals premium quality. Patterns range from classic (linen, felt, laid, canvas, woodgrain) to custom-designed brand-specific textures. Compatible with subsequent printing, foil stamping, and die-cutting processes. Used by luxury, fashion, and premium consumer brands to elevate packaging and print collateral above the ordinary.`,specs:[`Substrate: Wide range, 80–400 gsm`,`Patterns: Linen / Felt / Canvas / Woodgrain / Custom`,`Embossing depth: Fine to deep relief`,`Print compatibility: Post-emboss offset, screen, foil`,`Custom patterns: Available with dedicated embossing roller`,`Format: Sheets & reels`],applications:[`Luxury brand packaging and rigid boxes`,`Fashion hang tags and swing tickets`,`Business cards and corporate stationery`,`Book and diary covers`,`Certificate paper and diploma stock`,`Bespoke wedding and event stationery`],certifications:[`FSC Mix`,`ISO 9001`],variants:[`Linen Embossed Paper`,`Felt Embossed Paper`,`Canvas Embossed Paper`,`Woodgrain Embossed Paper`,`Custom Pattern Embossed Paper`],features:[`Genuine 3D Texture — Mechanically pressed relief patterns create real topography, not printed imitation.`,`Tactile Brand Experience — Invites touch and signals premium quality for luxury packaging and stationery.`,`Wide Pattern Library — Standard patterns include linen, felt, canvas, woodgrain; custom patterns available.`,`Post-Emboss Compatible — Accepts subsequent printing, foil stamping and die-cutting without pattern loss.`],customization:[`Pattern selection (standard or custom)`,`Custom embossing depth`,`Custom grammage and substrate`,`Sheet or reel supply`,`Custom packing`],commercial:{moq:`1 metric ton`,leadTime:`2–3 weeks`,samples:`Free samples available`,certification:`FSC certified`,containerLoading:`40HQ full load: 25 metric tons`},keywords:[`embossed paper`,`textured paper`,`raised pattern paper`,`linen embossed`,`custom embossed paper`,`3D paper texture`],image:`/images/products/fancy-paper/embossed-paper-main.jpg`,gallery:[{src:`/images/products/fancy-paper/gallery/embossed-paper-scene-01.jpg`,alt:`embossed paper scene 01 scene`},{src:`/images/products/fancy-paper/gallery/embossed-paper-scene-02.jpg`,alt:`embossed paper scene 02 scene`},{src:`/images/products/fancy-paper/gallery/embossed-paper-scene-03.jpg`,alt:`embossed paper scene 03 scene`},{src:`/images/products/fancy-paper/gallery/embossed-paper-scene-04.jpg`,alt:`embossed paper scene 04 scene`},{src:`/images/products/fancy-paper/gallery/embossed-paper-scene-05.jpg`,alt:`embossed paper scene 05 scene`},{src:`/images/products/fancy-paper/gallery/embossed-paper-scene-06.jpg`,alt:`embossed paper scene 06 scene`},{src:`/images/products/fancy-paper/gallery/embossed-paper-scene-07.jpg`,alt:`embossed paper scene 07 scene`},{src:`/images/products/fancy-paper/gallery/embossed-paper-scene-08.jpg`,alt:`embossed paper scene 08 scene`},{src:`/images/products/fancy-paper/gallery/embossed-paper-photo-01.jpg`,alt:`embossed paper procurement photo`},{src:`/images/products/fancy-paper/gallery/embossed-paper-photo-02.jpg`,alt:`embossed paper spec sample photo`},{src:`/images/products/fancy-paper/gallery/embossed-paper-photo-03.jpg`,alt:`embossed paper design hero photo`},{src:`/images/products/fancy-paper/gallery/embossed-paper-photo-04.jpg`,alt:`embossed paper application photo`},{src:`/images/products/fancy-paper/gallery/embossed-paper-photo-05.jpg`,alt:`embossed paper website banner`}]},"gold-silver-card":{id:`gold-silver-card`,name:`Gold & Silver Card Paper`,category:`fancy-paper`,tagline:`Brilliant metallic gold and silver card paper with mirror-like reflective surface — for luxury packaging, gift boxes, greeting cards, and high-end brand presentation.`,description:`Gold & Silver Card Paper features a brilliant metallic surface achieved through vacuum metallization, foil lamination, or metallic coating on a premium paper or board substrate. Available in classic gold, bright silver, rose gold, champagne gold, and custom metallic finishes. The mirror-like reflective surface offers exceptional visual impact and can accept offset printing, screen printing, embossing, debossing, and foil stamping. Grammages from 200 gsm to 400 gsm cover everything from lightweight inserts and greeting cards to structural luxury packaging boards.`,specs:[`Grammage: 200 – 400 gsm`,`Finishes: Gold / Silver / Rose Gold / Champagne Gold / Custom metallic`,`Surface: Mirror-reflective metallic, smooth both sides`,`Format: Sheets (standard & custom sizes) or reels`,`Print compatibility: Offset, screen, foil stamping, embossing, debossing`,`Metallization: Vacuum metallized or foil-laminated options`],applications:[`Luxury gift boxes and rigid packaging`,`Greeting cards and invitation cards`,`Cosmetic and perfume packaging`,`Jewelry and watch box interiors and exteriors`,`Wine and spirits packaging`,`Premium business cards and presentation folders`,`Certificate and award folders`,`Holiday and festive packaging`],certifications:[`FSC Mix`,`ISO 9001`,`SGS certified`],variants:[`Classic Gold Card Paper`,`Bright Silver Card Paper`,`Rose Gold Card Paper`,`Champagne Gold Card Paper`,`Custom Metallic Finish`],features:[`Mirror-Like Reflective Surface — Vacuum metallization creates brilliant, light-catching metallic finish.`,`Multiple Metallic Tones — Gold, silver, rose gold, champagne and custom metallic shades available.`,`Print-Compatible — Accepts offset, screen printing, embossing, debossing and foil stamping.`,`Luxury Brand Positioning — Instantly elevates gift boxes, cosmetics, jewelry and spirits packaging.`],customization:[`Metallic finish selection`,`Custom grammage`,`Sheet or reel supply`,`Custom size`,`Embossing and foil coordination`],commercial:{moq:`1 metric ton`,leadTime:`2–3 weeks`,samples:`Free samples available`,certification:`FSC certified`,containerLoading:`40HQ full load: 25 metric tons`},keywords:[`gold silver card paper`,`metallic card paper`,`gold foil paper`,`silver cardstock`,`metallic board`,`luxury metallic paper`],image:`/images/products/fancy-paper/gold-silver-card-main.jpg`,gallery:[{src:`/images/products/fancy-paper/gallery/GOLD-Chocolate-Packaging.jpg`,alt:`Gold chocolate packaging`},{src:`/images/products/fancy-paper/gallery/GOLD-Cosmetic-Packaging.jpg`,alt:`Gold cosmetic packaging`},{src:`/images/products/fancy-paper/gallery/GOLD-Gift-Box-Sleeves.jpg`,alt:`Gold gift box sleeves`},{src:`/images/products/fancy-paper/gallery/GOLD-Jewelry-Packaging.jpg`,alt:`Gold jewelry packaging`},{src:`/images/products/fancy-paper/gallery/GOLD-Shopping-Bag-and-Tags.jpg`,alt:`Gold shopping bag and tags`},{src:`/images/products/fancy-paper/gallery/GOLD-Tea-Packaging.jpg`,alt:`Gold tea packaging`},{src:`/images/products/fancy-paper/gallery/GOLD-Wedding-Stationery.jpg`,alt:`Gold wedding stationery`},{src:`/images/products/fancy-paper/gallery/GOLD-Wine-Gift-Carton.jpg`,alt:`Gold wine gift carton`},{src:`/images/products/fancy-paper/gallery/SILVER-Catalog-and-Folder.jpg`,alt:`Silver catalog and folder`},{src:`/images/products/fancy-paper/gallery/SILVER-Chocolate-Packaging.jpg`,alt:`Silver chocolate packaging`},{src:`/images/products/fancy-paper/gallery/SILVER-Cosmetic-Packaging.jpg`,alt:`Silver cosmetic packaging`},{src:`/images/products/fancy-paper/gallery/SILVER-Electronics-Packaging.jpg`,alt:`Silver electronics packaging`},{src:`/images/products/fancy-paper/gallery/SILVER-Garment-Hang-Tags.jpg`,alt:`Silver garment hang tags`},{src:`/images/products/fancy-paper/gallery/SILVER-Supplement-Packaging.jpg`,alt:`Silver supplement packaging`},{src:`/images/products/fancy-paper/gallery/SILVER-Wedding-Stationery.jpg`,alt:`Silver wedding stationery`},{src:`/images/products/fancy-paper/gallery/SILVER-Wine-Gift-Carton.jpg`,alt:`Silver wine gift carton`},{src:`/images/products/fancy-paper/gallery/Black-Fragrance-Packaging.jpg`,alt:`Black fragrance packaging`},{src:`/images/products/fancy-paper/gallery/Blue-Electronics-Packaging.jpg`,alt:`Blue electronics packaging`},{src:`/images/products/fancy-paper/gallery/Champagne-Soap-Packaging.jpg`,alt:`Champagne soap packaging`},{src:`/images/products/fancy-paper/gallery/Copper-Coffee-Packaging.jpg`,alt:`Copper coffee packaging`},{src:`/images/products/fancy-paper/gallery/Green-Skincare-Packaging.jpg`,alt:`Green skincare packaging`},{src:`/images/products/fancy-paper/gallery/Purple-Magenta-Perfume-Packaging.jpg`,alt:`Purple magenta perfume packaging`},{src:`/images/products/fancy-paper/gallery/Red-Chocolate-Packaging.jpg`,alt:`Red chocolate packaging`},{src:`/images/products/fancy-paper/gallery/Rose-Pink-Cosmetic-Packaging.jpg`,alt:`Rose pink cosmetic packaging`}]},"label-paper":{id:`label-paper`,name:`Label Paper`,category:`fancy-paper`,tagline:`Premium label and tag face stock — smooth, printable, and engineered for high-speed converting and adhesive coating.`,description:`Label paper — also called label face stock or tag paper — is a high-quality paper engineered as the printable surface layer for pressure-sensitive labels, wet-glue labels, and hang tags. The paper must be strong enough to withstand high-speed label converting (die-cutting, matrix stripping, rewinding), smooth enough for fine print reproduction, and dimensionally stable under adhesive coating. Available as C1S (coated one side) for wet-glue labels and C2S (coated two sides) for premium hang tags. Grammages from 60 gsm (lightweight labels) to 250 gsm (structural hang tags).`,specs:[`Grammage: 60 – 250 gsm`,`Types: C1S (label face) / C2S (hang tag) / Metallized`,`Finish: Gloss / Matt / Semi-gloss`,`Strength: High tensile, low stretch for converting`,`Format: Reels (standard widths), sheets`,`Adhesive compatibility: Hot-melt, water-based acrylic, solvent`],applications:[`Pressure-sensitive labels for bottles and containers`,`Hang tags and swing tickets for apparel`,`Wet-glue labels for beer, wine, and beverage bottles`,`Price tags and retail shelf labels`,`Logistics and barcode labels`,`Security and tamper-evident label face stock`],certifications:[`FSC Mix`,`ISO 9001`],variants:[`C1S Label Face Stock (coated one side)`,`C2S Hang Tag Paper (coated two sides)`,`Metallized Label Paper`,`Wet-Glue Label Paper`],features:[`High-Speed Converting — Engineered for die-cutting, matrix stripping and rewinding at production speeds.`,`Smooth Print Surface — Delivers fine text, barcodes and brand graphics with sharp reproduction.`,`Dimensional Stability — Resists curling and stretching under adhesive coating for reliable label application.`,`Multi-Purpose Grades — C1S for pressure-sensitive labels, C2S for premium hang tags and swing tickets.`],customization:[`C1S or C2S grade`,`Gloss, matt or semi-gloss finish`,`Custom grammage`,`Reel or sheet supply`,`Adhesive compatibility consultation`],commercial:{moq:`1 metric ton`,leadTime:`2–3 weeks`,samples:`Free samples available`,certification:`FSC certified`,containerLoading:`40HQ full load: 25 metric tons`},keywords:[`label paper`,`label face stock`,`tag paper`,`hang tag paper`,`C1S label paper`,`pressure sensitive label paper`],image:`/images/products/fancy-paper/label-paper-main.jpg`,gallery:[{src:`/images/products/fancy-paper/gallery/label-paper-scene-01.jpg`,alt:`label paper scene 01 scene`},{src:`/images/products/fancy-paper/gallery/label-paper-scene-02.jpg`,alt:`label paper scene 02 scene`},{src:`/images/products/fancy-paper/gallery/label-paper-scene-03.jpg`,alt:`label paper scene 03 scene`},{src:`/images/products/fancy-paper/gallery/label-paper-scene-04.jpg`,alt:`label paper scene 04 scene`},{src:`/images/products/fancy-paper/gallery/label-paper-scene-05.jpg`,alt:`label paper scene 05 scene`},{src:`/images/products/fancy-paper/gallery/label-paper-scene-06.jpg`,alt:`label paper scene 06 scene`},{src:`/images/products/fancy-paper/gallery/label-paper-scene-07.jpg`,alt:`label paper scene 07 scene`},{src:`/images/products/fancy-paper/gallery/label-paper-scene-08.jpg`,alt:`label paper scene 08 scene`},{src:`/images/products/fancy-paper/gallery/label-paper-photo-01.jpg`,alt:`label paper procurement photo`},{src:`/images/products/fancy-paper/gallery/label-paper-photo-02.jpg`,alt:`label paper spec sample photo`},{src:`/images/products/fancy-paper/gallery/label-paper-photo-03.jpg`,alt:`label paper design hero photo`},{src:`/images/products/fancy-paper/gallery/label-paper-photo-04.jpg`,alt:`label paper application photo`},{src:`/images/products/fancy-paper/gallery/label-paper-photo-05.jpg`,alt:`label paper website banner`}]},"color-tissue-paper":{id:`color-tissue-paper`,name:`Color Tissue Paper`,category:`fancy-paper`,tagline:`Vibrant translucent tissue in a rainbow palette — the finishing touch that transforms packaging into an experience.`,description:`Color tissue paper is a lightweight, translucent, acid-free tissue available in an extensive color range — from soft pastels to bold saturated hues. Made from high-quality virgin wood pulp or recycled fiber, it is soft, flexible, and cleanly cut for use in luxury gift wrapping, retail packaging, shoe and garment stuffing, floral arrangements, and creative craft projects. The paper is colorfast and non-bleeding, so it can be safely used to wrap clothing, accessories, and delicate items without risk of color transfer.`,specs:[`Grammage: 17 / 20 / 24 / 28 gsm`,`Color range: 30+ standard colors, custom PMS matching available`,`Composition: Virgin wood pulp or recycled fiber, acid-free`,`Properties: Colorfast, non-bleeding, soft fold`,`Format: Sheets (standard 500×750mm / 750×1000mm), custom sizes`],applications:[`Luxury retail gift wrapping and tissue lining`,`Shoe and handbag stuffing and presentation`,`Garment and apparel packaging — boutique folding tissue`,`Floral and bouquet wrapping`,`Craft, scrapbooking, and DIY decoration`,`Branded unboxing experience — custom-printed tissue options`],certifications:[`FSC Mix`,`SGS certified`,`ISO 9001`],variants:[`Pastel Color Tissue Paper`,`Bold Saturated Color Tissue Paper`,`Virgin Fiber Tissue Paper`,`Recycled Fiber Tissue Paper`],features:[`Extensive Color Palette — 30+ standard colors from soft pastels to bold saturated hues for any brand.`,`Colorfast & Non-Bleeding — Safe for wrapping clothing, accessories and delicate items without color transfer.`,`Acid-Free & Archival Safe — pH neutral composition protects wrapped items from discoloration.`,`Soft Flexible Fold — Lightweight and pliable for creating luxurious unboxing experiences.`],customization:[`Custom PMS color matching`,`Custom sheet size`,`Virgin or recycled fiber`,`Custom printing`,`Custom packing`],commercial:{moq:`1 metric ton`,leadTime:`2–3 weeks`,samples:`Free samples available`,certification:`FSC certified`,containerLoading:`40HQ full load: 25 metric tons`},keywords:[`color tissue paper`,`colored tissue paper`,`gift tissue paper`,`luxury tissue paper`,`acid-free tissue`,`packaging tissue paper`],image:`/images/products/fancy-paper/color-tissue-paper-main.jpg`,gallery:[{src:`/images/products/fancy-paper/gallery/01-Color-Tissue-Apparel-Gift-Box.jpg`,alt:`Color tissue apparel gift box`},{src:`/images/products/fancy-paper/gallery/02-Color-Tissue-Florist-Bouquet.jpg`,alt:`Color tissue florist bouquet`},{src:`/images/products/fancy-paper/gallery/03-Color-Tissue-Shoe-Box.jpg`,alt:`Color tissue shoe box`},{src:`/images/products/fancy-paper/gallery/04-Color-Tissue-Cosmetics-Unboxing.jpg`,alt:`Color tissue cosmetics unboxing`},{src:`/images/products/fancy-paper/gallery/05-Color-Tissue-Jewelry-Protection.jpg`,alt:`Color tissue jewelry protection`},{src:`/images/products/fancy-paper/gallery/06-Color-Tissue-Retail-Shopping-Bags.jpg`,alt:`Color tissue retail shopping bags`},{src:`/images/products/fancy-paper/gallery/07-Color-Tissue-Party-Pom-Poms.jpg`,alt:`Color tissue party pom poms`},{src:`/images/products/fancy-paper/gallery/08-Color-Tissue-Paper-Flowers.jpg`,alt:`Color tissue paper flowers`}]},"tracing-paper":{id:`tracing-paper`,name:`Tracing Paper`,category:`culture-paper`,tagline:`Translucent tracing paper for luxury packaging, printing, drawing, invitations and decorative applications.`,description:`YOUNGSUN Tracing Paper combines controlled transparency (approximately 56%–73% depending on grammage) with a smooth, clean surface for printing, drawing, and premium packaging applications. Available from 50–180 gsm across eleven common weight points (50, 60, 70, 80, 90, 100, 110, 130, 150, 170, and 180 gsm), the paper is supplied in sheets, reels, and custom sizes in its natural translucent white color. The controlled transparency creates layered visual effects while maintaining readability and structural integrity. The smooth surface is suitable for printing, drawing, hot stamping, and decorative converting, adding a refined translucent effect to luxury packaging, book and brochure inserts, and invitations. Applications extend to envelopes, architectural drawing, garment patterns, hang tags, and decorative printing. Custom grammage, transparency specification, sheet or reel supply, size, and printing/hot stamping coordination are all supported.`,specs:[`Grammage: 45 – 200 gsm`,`Translucency: 50–70% light transmission`,`Surface: Smooth, sized for ink and pencil`,`Strength: High tensile, tear-resistant`,`Format: Sheets (standard & custom), rolls`,`Acid-free: pH neutral, archival grades available`],applications:[`Architectural and engineering tracing overlays`,`Fashion design and pattern-making`,`Creative stationery — envelopes, inserts, overlays`,`Decorative packaging windows and wraps`,`Art and illustration — marker and ink drawing`,`Wedding invitation overlays and belly bands`],certifications:[`FSC Mix`,`ISO 9001`],variants:[`Standard Tracing Paper`,`Heavyweight Tracing Paper`],features:[`Controlled Transparency — Creates layered visual effects while maintaining readability and structure.`,`Smooth Surface — Suitable for printing, drawing, hot stamping and decorative converting.`,`Wide Grammage Range — Covers lightweight overlays and heavier packaging inserts.`,`Premium Appearance — Adds a refined translucent effect to invitations, books and packaging.`],customization:[`Custom grammage`,`Sheet or reel supply`,`Custom size`,`Printing and hot stamping coordination`,`Custom packing`],commercial:{moq:`1 metric ton`,leadTime:`2–3 weeks`,samples:`Free samples available`,certification:`FSC certified`,containerLoading:`40HQ full load: 25 metric tons`},quoteReqs:[`Grammage`,`Sheet or roll size`,`Quantity`,`Transparency requirement`,`Application`,`Destination port`],seoTitle:`Tracing Paper Supplier for Drawing and Design`,metaDescription:`Tracing paper in various grammages for sketching, drafting, overlays and creative projects.`,keywords:[`tracing paper`,`translucent paper`,`transparent paper`,`vellum paper`,`architectural tracing`,`design tracing paper`],image:`/images/products/culture-paper/tracing-paper-main.jpg`,gallery:[{src:`/images/products/culture-paper/gallery/tracing-paper-scene-01.jpg`,alt:`tracing paper scene 01 scene`},{src:`/images/products/culture-paper/gallery/tracing-paper-scene-02.jpg`,alt:`tracing paper scene 02 scene`},{src:`/images/products/culture-paper/gallery/tracing-paper-scene-03.jpg`,alt:`tracing paper scene 03 scene`},{src:`/images/products/culture-paper/gallery/tracing-paper-scene-04.jpg`,alt:`tracing paper scene 04 scene`},{src:`/images/products/culture-paper/gallery/tracing-paper-scene-05.jpg`,alt:`tracing paper scene 05 scene`},{src:`/images/products/culture-paper/gallery/tracing-paper-scene-06.jpg`,alt:`tracing paper scene 06 scene`},{src:`/images/products/culture-paper/gallery/tracing-paper-scene-07.jpg`,alt:`tracing paper scene 07 scene`},{src:`/images/products/culture-paper/gallery/tracing-paper-scene-08.jpg`,alt:`tracing paper scene 08 scene`},{src:`/images/products/culture-paper/gallery/tracing-paper-photo-01.jpg`,alt:`tracing paper procurement photo`},{src:`/images/products/culture-paper/gallery/tracing-paper-photo-02.jpg`,alt:`tracing paper spec sample photo`},{src:`/images/products/culture-paper/gallery/tracing-paper-photo-03.jpg`,alt:`tracing paper design hero photo`},{src:`/images/products/culture-paper/gallery/tracing-paper-photo-04.jpg`,alt:`tracing paper application photo`},{src:`/images/products/culture-paper/gallery/tracing-paper-photo-05.jpg`,alt:`tracing paper website banner`}]},"cup-paper":{id:`cup-paper`,name:`Cup Paper`,category:`food-packaging`,tagline:`Food-grade cupstock base board for paper cups, food containers and PE-coated packaging.`,description:`YOUNGSUN Cupstock Board is a virgin-fibre paperboard developed specifically for cup making and food packaging conversion. Available from 160–330 gsm across twelve common weight points (160, 170, 190, 210, 230, 240, 250, 260, 280, 300, 310, and 330 gsm), the board offers a clean, uncoated printing surface with reliable forming performance for cup sidewalls and food container converting. It is compatible with both single-side and double-side PE coating for moisture and liquid barrier requirements. The virgin-fibre base is suitable for food packaging applications subject to required compliance documentation. Key applications include hot drink cups, cold drink cups, food containers, ice cream cups, and takeaway packaging. Custom grammage, sheet or reel supply, PE coating coordination, size, and packing are supported.`,specs:[`Substrate: Bleached kraft / White board, 180–350 gsm`,`PE coating: 1PE (cold cup) or 2PE (hot cup), 15–25 gsm per side`,`Heat-seal temperature: 120–150°C`,`Water resistance: ≥ 24 hours at 95°C (hot cup grade)`,`Format: Reels, slit to converting width`,`Food-grade: FDA 21 CFR 176.170, EU 1935/2004, GB 4806.8`],applications:[`Hot drink cups — coffee, tea, hot chocolate`,`Cold drink cups — iced coffee, soda, smoothies`,`Soup and food containers`,`Ice cream cups and tubs`,`Portion cups for sauces and condiments`,`Sampling cups for promotions and events`],certifications:[`FDA-compliant`,`EU 1935/2004`,`FSC Mix`,`ISO 9001`],variants:[`Uncoated Cupstock Board`,`PE-Coated Cupstock (subject to order)`],features:[`Reliable Forming — Suitable for cup sidewalls and food container converting.`,`Clean Printing Surface — Supports food-service graphics and branding.`,`PE-Coating Compatibility — Can be converted with single- or double-side PE coating.`,`Virgin-Fibre Base — Suitable for food packaging applications subject to the required compliance documents.`],customization:[`Custom grammage`,`Sheet or reel supply`,`PE coating coordination`,`Custom size`,`Custom packing`],commercial:{moq:`1 metric ton`,leadTime:`2–3 weeks`,samples:`Free samples available`,certification:`FSC certified`,containerLoading:`40HQ full load: 25 metric tons`},quoteReqs:[`Grammage`,`PE coating (single/double side)`,`Roll width`,`Quantity`,`Food safety certification needed`,`Destination port`],seoTitle:`Cupstock Board Supplier for Paper Cups`,metaDescription:`Food-grade cupstock board with PE coating for paper cups, food containers and hot/cold beverage packaging.`,keywords:[`cup paper`,`cup stock`,`paper cup paper`,`PE coated cup board`,`hot cup paper`,`cold cup stock`],image:`/images/products/food-packaging/cup-paper-main.jpg`,gallery:[{src:`/images/products/food-packaging/gallery/cup-paper-scene-01.jpg`,alt:`cup paper scene 01 scene`},{src:`/images/products/food-packaging/gallery/cup-paper-scene-02.jpg`,alt:`cup paper scene 02 scene`},{src:`/images/products/food-packaging/gallery/cup-paper-scene-03.jpg`,alt:`cup paper scene 03 scene`},{src:`/images/products/food-packaging/gallery/cup-paper-scene-04.jpg`,alt:`cup paper scene 04 scene`},{src:`/images/products/food-packaging/gallery/cup-paper-scene-05.jpg`,alt:`cup paper scene 05 scene`},{src:`/images/products/food-packaging/gallery/cup-paper-scene-06.jpg`,alt:`cup paper scene 06 scene`},{src:`/images/products/food-packaging/gallery/cup-paper-scene-07.jpg`,alt:`cup paper scene 07 scene`},{src:`/images/products/food-packaging/gallery/cup-paper-scene-08.jpg`,alt:`cup paper scene 08 scene`},{src:`/images/products/food-packaging/gallery/cup-paper-photo-01.jpg`,alt:`cup paper procurement photo`},{src:`/images/products/food-packaging/gallery/cup-paper-photo-02.jpg`,alt:`cup paper spec sample photo`},{src:`/images/products/food-packaging/gallery/cup-paper-photo-03.jpg`,alt:`cup paper design hero photo`},{src:`/images/products/food-packaging/gallery/cup-paper-photo-04.jpg`,alt:`cup paper application photo`},{src:`/images/products/food-packaging/gallery/cup-paper-photo-05.jpg`,alt:`cup paper website banner`}]},"greaseproof-paper":{id:`greaseproof-paper`,name:`Greaseproof Paper`,category:`food-packaging`,tagline:`White and natural greaseproof paper for bakery, fast food, takeaway and food wrapping applications.`,description:`YOUNGSUN Greaseproof Paper is engineered to resist oil and grease penetration while maintaining suitable strength and converting performance for food-service applications. Available in 35–60 gsm with common weights at 35, 40, 50, and 60 gsm, the paper achieves 3M KIT level 6 or higher grease resistance for the referenced grade. Both white and natural color options are available, supplied in sheets, reels, and custom-cut formats. The paper provides good strength for wrapping, folding, bag making, and food handling, with white and natural options supporting different brand and sustainability aesthetics. Custom printing can be applied for branded sheets, wraps, and bags. Typical applications include bakery wrapping, burger and sandwich wraps, fried food liners, takeaway bags, tray liners, confectionery wrapping, and food interleaving. Custom grammage, color, sheet or reel supply, printing, and cut-sheet formats are available.`,specs:[`Grammage: 28 – 80 gsm`,`Grease resistance: Kit rating 8–12 (TAPPI T559)`,`Barrier mechanism: Mechanical (fiber densification), no chemical coating`,`PFAS-free: Yes, no fluorochemicals added`,`Heat resistance: Oven-safe up to 220°C`,`Format: Sheets & reels`],applications:[`Baking paper — lining baking trays and cake tins`,`Sandwich and burger wrap paper`,`Butter, margarine, and cheese wrapping`,`Fast food basket liners and tray liners`,`Interleaving for sliced meats and cheeses`,`Fish and chip wrapping (traditional chippy paper)`],certifications:[`FDA 21 CFR 176.170`,`EU 1935/2004`,`PFAS-free certified`,`FSC Mix`],variants:[`White Greaseproof Paper`,`Natural Greaseproof Paper`,`Printed Greaseproof Paper (subject to order)`],features:[`Grease Resistance — Helps prevent oil and grease penetration in food-service use.`,`Good Strength — Suitable for wrapping, folding, bag making and food handling.`,`White and Natural Options — Supports different brand and sustainability aesthetics.`,`Custom Printing Available — Can be converted into branded sheets, wraps and bags.`],customization:[`White or natural color`,`Custom grammage`,`Sheet or reel supply`,`Custom printing`,`Custom-cut sheets`],commercial:{moq:`1 metric ton`,leadTime:`2–3 weeks`,samples:`Free samples available`,certification:`FSC certified`,containerLoading:`40HQ full load: 25 metric tons`},quoteReqs:[`Grammage`,`Sheet or roll size`,`Quantity`,`Food-contact requirement`,`Application`,`Destination port`],seoTitle:`Greaseproof Paper Supplier for Food Packaging`,metaDescription:`Greaseproof paper for food wrapping, bakery packaging and grease-resistant applications.`,keywords:[`greaseproof paper`,`grease resistant paper`,`baking paper`,`food wrap paper`,`oil proof paper`,`PFAS-free food paper`],image:`/images/products/food-packaging/greaseproof-paper-main.jpg`,gallery:[{src:`/images/products/food-packaging/gallery/greaseproof-paper-scene-01.jpg`,alt:`greaseproof paper scene 01 scene`},{src:`/images/products/food-packaging/gallery/greaseproof-paper-scene-02.jpg`,alt:`greaseproof paper scene 02 scene`},{src:`/images/products/food-packaging/gallery/greaseproof-paper-scene-03.jpg`,alt:`greaseproof paper scene 03 scene`},{src:`/images/products/food-packaging/gallery/greaseproof-paper-scene-04.jpg`,alt:`greaseproof paper scene 04 scene`},{src:`/images/products/food-packaging/gallery/greaseproof-paper-scene-05.jpg`,alt:`greaseproof paper scene 05 scene`},{src:`/images/products/food-packaging/gallery/greaseproof-paper-scene-06.jpg`,alt:`greaseproof paper scene 06 scene`},{src:`/images/products/food-packaging/gallery/greaseproof-paper-scene-07.jpg`,alt:`greaseproof paper scene 07 scene`},{src:`/images/products/food-packaging/gallery/greaseproof-paper-scene-08.jpg`,alt:`greaseproof paper scene 08 scene`},{src:`/images/products/food-packaging/gallery/greaseproof-paper-photo-01.jpg`,alt:`greaseproof paper procurement photo`},{src:`/images/products/food-packaging/gallery/greaseproof-paper-photo-02.jpg`,alt:`greaseproof paper spec sample photo`},{src:`/images/products/food-packaging/gallery/greaseproof-paper-photo-03.jpg`,alt:`greaseproof paper design hero photo`},{src:`/images/products/food-packaging/gallery/greaseproof-paper-photo-04.jpg`,alt:`greaseproof paper application photo`},{src:`/images/products/food-packaging/gallery/greaseproof-paper-photo-05.jpg`,alt:`greaseproof paper website banner`}]},"mg-paper":{id:`mg-paper`,name:`MG Paper`,category:`food-packaging`,tagline:`Machine-glazed paper with a smooth glossy side and a more absorbent reverse for wrapping, bags and converting.`,description:`YOUNGSUN MG Paper provides a smooth machine-glazed face for printing and presentation, with a more open reverse for converting and adhesion. The lightweight range is suitable for food wrapping, bags, liners and general packaging.`,specs:[`Grammage: 23 – 80 gsm`,`Surface: Machine-glazed front and natural reverse`,`Brightness: Available in white grades`,`Supply forms: Sheets, reels, custom sizes`],applications:[`Food wrapping`,`Paper bags`,`Bakery liners`,`Interleaving paper`,`General wrapping`,`Flexible packaging`,`Printed inserts`],certifications:[`FSC certified`],variants:[`White MG Paper`,`Natural MG Paper`,`Bleached MG Paper`],features:[`Smooth Glazed Side — Machine-glazed front surface provides a smooth, printable face for branding.`,`Absorbent Reverse — Open-fiber back side designed for adhesion, lamination and converting.`,`Lightweight Efficiency — Available from 23 gsm for economical food wrapping and bag applications.`,`Flexible Converting — Suitable for bag making, wrapping, interleaving and liner applications.`],customization:[`Custom grammage`,`Sheet or reel supply`,`Custom size`,`Custom packing`],commercial:{moq:`1 metric ton`,leadTime:`2–3 weeks`,samples:`Free samples available`,certification:`FSC certified`,containerLoading:`40HQ full load: 25 metric tons`},keywords:[`MG paper supplier`,`machine glazed paper`,`food wrapping paper`,`paper bag material`,`glazed packaging paper`],image:`/images/products/food-packaging/mg-paper-main.jpg`},"silicone-coated-paper":{id:`silicone-coated-paper`,name:`Silicone Coated Paper`,category:`food-packaging`,tagline:`Premium release liner and non-stick baking paper — silicone-coated for clean release every time.`,description:`Silicone coated paper — also called silicone release paper, non-stick baking paper, or parchment paper — is a paper substrate coated with a thin layer of food-grade silicone on one or both sides. The silicone creates a non-stick, heat-resistant surface that food cannot adhere to, making it the essential material for baking, roasting, and cooking. In industrial applications, silicone coated paper serves as a release liner for self-adhesive labels, tapes, and hygiene products. Available in bleached (white) and unbleached (natural brown) variants. Heat-resistant to 230°C in continuous use and up to 250°C for short durations.`,specs:[`Substrate: Bleached kraft / Unbleached kraft, 40–120 gsm`,`Silicone coating: One side (1S) or two sides (2S)`,`Release force: Adjustable — easy, medium, or tight release`,`Heat resistance: 230°C continuous, 250°C short-term`,`Format: Sheets & reels`,`Food-grade: FDA 21 CFR 175.300, EU 1935/2004`],applications:[`Baking paper — cookie sheets, cake pans, roasting trays`,`Release liner — pressure-sensitive adhesive labels and tapes`,`Hygiene industry — diaper and sanitary napkin release paper`,`Non-stick food wrapping and interleaving`,`Industrial molding release liner`,`Silicone-coated kraft for bakery and patisserie`],certifications:[`FDA-compliant`,`EU 1935/2004`,`FSC Mix`,`ISO 9001`],variants:[`Single-Side Silicone Coated (1S)`,`Double-Side Silicone Coated (2S)`,`Bleached Silicone Paper (White)`,`Unbleached Silicone Paper (Natural Brown)`],features:[`Non-Stick Performance — Food-grade silicone layer ensures clean release for baking and cooking.`,`High Heat Resistance — Withstands 230°C continuous and up to 250°C short-term for oven and grill use.`,`Adjustable Release Force — Easy, medium or tight release options for different industrial applications.`,`Dual-Purpose Design — Serves both food-contact baking and industrial release liner applications.`],customization:[`Single or double side silicone`,`Release force level (easy/medium/tight)`,`Custom grammage`,`Sheet or reel supply`,`Custom packing`],commercial:{moq:`1 metric ton`,leadTime:`2–3 weeks`,samples:`Free samples available`,certification:`FSC certified`,containerLoading:`40HQ full load: 25 metric tons`},keywords:[`silicone coated paper`,`silicone release paper`,`non-stick paper`,`parchment paper`,`baking parchment`,`release liner paper`],image:`/images/products/food-packaging/silicone-coated-paper-main.jpg`,gallery:[{src:`/images/products/food-packaging/gallery/silicone-coated-paper-scene-01.jpg`,alt:`silicone coated paper scene 01 scene`},{src:`/images/products/food-packaging/gallery/silicone-coated-paper-scene-02.jpg`,alt:`silicone coated paper scene 02 scene`},{src:`/images/products/food-packaging/gallery/silicone-coated-paper-scene-03.jpg`,alt:`silicone coated paper scene 03 scene`},{src:`/images/products/food-packaging/gallery/silicone-coated-paper-scene-04.jpg`,alt:`silicone coated paper scene 04 scene`},{src:`/images/products/food-packaging/gallery/silicone-coated-paper-scene-05.jpg`,alt:`silicone coated paper scene 05 scene`},{src:`/images/products/food-packaging/gallery/silicone-coated-paper-scene-06.jpg`,alt:`silicone coated paper scene 06 scene`},{src:`/images/products/food-packaging/gallery/silicone-coated-paper-scene-07.jpg`,alt:`silicone coated paper scene 07 scene`},{src:`/images/products/food-packaging/gallery/silicone-coated-paper-scene-08.jpg`,alt:`silicone coated paper scene 08 scene`},{src:`/images/products/food-packaging/gallery/silicone-coated-paper-photo-01.jpg`,alt:`silicone coated paper procurement photo`},{src:`/images/products/food-packaging/gallery/silicone-coated-paper-photo-02.jpg`,alt:`silicone coated paper spec sample photo`},{src:`/images/products/food-packaging/gallery/silicone-coated-paper-photo-03.jpg`,alt:`silicone coated paper design hero photo`},{src:`/images/products/food-packaging/gallery/silicone-coated-paper-photo-04.jpg`,alt:`silicone coated paper application photo`},{src:`/images/products/food-packaging/gallery/silicone-coated-paper-photo-05.jpg`,alt:`silicone coated paper website banner`}]},"absorbent-paper":{id:`absorbent-paper`,name:`Absorbent Paper`,category:`fancy-paper`,tagline:`High-performance absorbent cotton paper for perfume test strips, beverage coasters, and creative packaging — fast absorption, natural texture.`,description:`YOUNGSUN absorbent paper — also known as blotting paper or absorbent cotton paper — is made from 100% cotton fiber with a highly porous structure that delivers fast liquid absorption and excellent retention. The natural felt-like textured surface adds tactile quality and visual depth, creating a premium hand-feel for luxury branding. Available in seven thicknesses (0.4mm–1.6mm) and two color tones (super white and natural white). Fully compatible with embossing, debossing, die-cutting, and logo printing. Common applications include perfume test strips, beverage coasters, desiccant cards, food freshness cards, hangtags, and creative stationery.`,specs:[`Material: 100% Cotton fiber / High absorbent pulp`,`Thickness: 0.4 / 0.5 / 0.6 / 0.8 / 1.0 / 1.2 / 1.6 mm`,`Grammage: Approx. 380–1500 gsm (varies by thickness)`,`Color: Super White / Natural White`,`Surface: Textured, natural felt-like finish`,`Absorption: Fast absorption, excellent liquid retention`,`Format: Sheets, reels, and die-cut components`,`Certifications: FSC certified, food contact safe`],applications:[`Perfume test strips / blotters`,`Beer and beverage coasters`,`Desiccant and moisture absorber cards`,`Food freshness indicator cards`,`Hangtags and product tags`,`Gift box liners and inserts`,`Creative stationery cards`,`Aromatherapy and fragrance cards`,`Tea and coffee packaging inserts`],certifications:[`FSC`,`SGS`],image:`/images/products/fancy-paper/absorbent-paper-main.jpg`,images:[],processingNote:`Customized converting services available: sheet cutting, strip die-cutting (any shape), coaster die-cutting (round/square/custom), embossing and debossing, logo printing (single/multi-color). Pre-cut and pre-printed components supplied according to customer drawings.`}},rr=[{title:`Diversified Product Range`,icon:`📦`,description:`We supply a comprehensive range of premium printing and packaging paper and paperboard — covering all four categories: Package Board, Culture Paper, Fancy Paper, and Food Packaging Paper. One supplier, multiple grades, simplified procurement.`},{title:`Certified Quality — FSC & SGS`,icon:`✅`,description:`All products are FSC (Forest Stewardship Council) and SGS certified. Every shipment is inspected for grammage, brightness, moisture, caliper, and surface quality against agreed specifications. Consistent quality, batch after batch.`},{title:`Strong Production Capacity`,icon:`🏭`,description:`Our 20,000m² workshop runs 2 grey board machines and 2 black paper machines, delivering 20,000 tons monthly. Partner mills — APP, CHENMING, NINEDRAGON, BOHUI, GOLDENEAST, IPSUN — provide additional capacity and grade coverage.`},{title:`Fast & Timely Delivery`,icon:`🚢`,description:`50,000 tons of permanent warehouse stock enables rapid dispatch. Located 50km from Shenzhen port, we load containers efficiently. Five sales teams (50+ specialists) provide proactive delivery tracking and after-sales support.`},{title:`Customized Solutions`,icon:`🔧`,description:`We provide custom size, weight, and labeling solutions with free samples before bulk order. Need specific slitting, sheeting, embossing, or packaging? Our converting partners deliver finished product to your exact specifications.`},{title:`Global Export Expertise`,icon:`🌍`,description:`36,000+ tons exported annually to 60+ countries. We handle FSC chain-of-custody, certificates of origin, fumigation, packing lists, and bills of lading — full documentation for seamless customs clearance at any destination port.`}],ir={title:`Sustainability Is Not Optional`,subtitle:`Every paper product we supply comes with a chain-of-custody story. We believe transparency — not marketing — is what earns trust. That means clear certification, honest sourcing, and measurable environmental accountability.`,commitments:[{icon:`🌳`,title:`Certified Sources`,description:`Primary supply chain is FSC or PEFC certified. Chain-of-custody documentation provided with every order.`},{icon:`♻️`,title:`Recycled Content`,description:`Post-consumer and post-industrial recycled fiber options available across all four product categories.`},{icon:`🧪`,title:`PFAS-Free`,description:`All food-contact papers are PFAS-free — grease resistance is achieved through fiber engineering, not chemical additives.`},{icon:`⚡`,title:`Low-Carbon Mills`,description:`Partnering with mills that use green energy, biogas recovery, and closed-loop water systems to minimize environmental footprint.`},{icon:`📋`,title:`Full Traceability`,description:`From forest or recovery facility to final delivery — traceable chain of custody with auditable documentation.`},{icon:`🌍`,title:`Carbon-Conscious Logistics`,description:`Route optimization, consolidated shipments, and sea freight preference to reduce transport-related emissions.`}]},ar={title:`Global Reach, Personal Service`,subtitle:`From our base in China, we serve converters, printers, manufacturers, and brands across six continents. Every client has a dedicated account manager who knows their specifications, preferences, and schedule.`,regions:[{name:`Asia`,countries:`25+ countries`,highlight:`Core supply base & largest volume market`},{name:`Europe`,countries:`18+ countries`,highlight:`Key export market with growing demand`},{name:`Americas`,countries:`12+ countries`,highlight:`Expanding partnership network`},{name:`Africa & Middle East`,countries:`8+ countries`,highlight:`High-growth emerging markets`},{name:`Oceania`,countries:`3+ countries`,highlight:`Established trade routes`}]},or={title:`Let's Talk Paper`,subtitle:`Tell us what you need — product, specification, volume, and destination. We'll respond with a competitive quote, lead time, and logistics plan within 24 hours.`,email:`Alice@yspaper.com`,phone:`+86 13713459656`,whatsapp:`+86 13713459656`,wechat:`ALICEZEO`},sr=[{question:`What paper products does YOUNGSUN PAPER supply?`,answer:`YOUNGSUN PAPER supplies four categories of paper and board: Package Board (grey board, black paper, kraft paper, C1S ivory board, duplex board, C2S art board, PE coated paper, color card, folding box board), Culture Paper (woodfree paper, offset paper, copy paper, color offset paper, LWC paper, NCR paper), Fancy Paper (soft touch paper, leather paper, pearlescent paper, embossed paper, label paper, tracing paper), and Food Packaging Paper (cup paper, greaseproof paper, silicone coated paper). All products are FSC and SGS certified.`},{question:`Where is YOUNGSUN PAPER located and how fast can you deliver?`,answer:`YOUNGSUN PAPER (Dongguan Banyan Material Co., Ltd.) is headquartered in Dalang Town, Dongguan City, Guangdong Province, China — approximately 50 km from Shenzhen port. We maintain 50,000 tons of permanent warehouse stock for rapid dispatch. Container loading is typically completed within 7–14 days of order confirmation, depending on product specifications and volume.`},{question:`What certifications do your paper products have?`,answer:`All YOUNGSUN PAPER products are FSC (Forest Stewardship Council) certified for responsible forestry and SGS certified for quality assurance. Food-contact grades are FDA and EU 1935/2004 compliant. PFAS-free certification is available for all food packaging papers. Chain-of-custody documentation, certificates of origin, and mill test certificates are provided with every shipment.`},{question:`Can you customize paper size, weight, or packaging?`,answer:`Yes. YOUNGSUN PAPER provides custom size (slitting and sheeting to exact dimensions), custom weight (grammage within available range), and custom labeling and packaging solutions. Free samples are provided before bulk order confirmation. Our converting partners offer embossing, die-cutting, printing, lamination, and export-grade packing as value-added services.`},{question:`What is your minimum order quantity (MOQ) and how do I get a quote?`,answer:`Minimum order quantities vary by product grade — typically one 20-foot container (approximately 20–25 tons depending on paper grammage) for export orders. Domestic and sample orders can be smaller. For a quotation, contact us at Alice@yspaper.com or WhatsApp +86 13713459656 with your product specifications, grammage, size, quantity, and delivery port. We respond within 24 hours.`},{question:`Do you supply food-grade paper for direct food contact?`,answer:`Yes. Our Food Packaging Paper category includes cup paper (PE-coated for hot and cold cups), greaseproof paper (PFAS-free, Kit rating 8–12), and silicone coated paper (heat-resistant to 230°C). All food-contact grades are FDA 21 CFR 176.170 and EU 1935/2004 compliant. Certification documentation is provided with every food-grade shipment.`},{question:`Which countries do you export to?`,answer:`YOUNGSUN PAPER exports to 60+ countries across six continents. Our largest markets are in Asia (25+ countries), Europe (18+ countries), and the Americas (12+ countries). We also serve growing markets in Africa, the Middle East, and Oceania. We handle all export documentation — certificates of origin, fumigation certificates, FSC chain-of-custody, packing lists, and bills of lading.`},{question:`What paper mills do you partner with?`,answer:`We maintain strategic sourcing partnerships with China's leading paper mills including APP, CHENMING, NINEDRAGON, BOHUI, GOLDENEAST, and IPSUN. Our own facility houses 2 grey board machines and 2 black paper machines with a monthly production capacity of 20,000 tons. This dual-model (in-house production + mill partnerships) ensures competitive pricing and supply chain resilience.`}],cr=[{id:`grey-board-vs-duplex-board-comparison`,title:`Grey Board vs Duplex Board: The Complete Comparison for Packaging Buyers`,seoTitle:`Grey Board vs Duplex Board — Differences, Uses & How to Choose | YOUNGSUN`,metaDescription:`Compare grey board and duplex board side by side: composition, surface, stiffness, printability, cost, and best applications. Make the right choice for rigid boxes, cartons, and display packaging.`,date:`2026-08-05`,author:`YOUNGSUN PAPER Editorial`,category:`Packaging`,excerpt:`Grey board and duplex board look similar on a specification sheet but serve completely different purposes in packaging production. This guide breaks down the differences — and helps you choose the right one for your project.`,content:`# Grey Board vs Duplex Board: The Complete Comparison for Packaging Buyers

Two of the most commonly confused paperboard grades in packaging procurement are [grey board](/products/grey-board) (also called grey chipboard) and [duplex board](/products/duplex-board) (also called grey back board or white back duplex). They both have a grey component. They both come in sheets. And on a quick glance at a specification table, they can look interchangeable.

They are not.

Choosing the wrong one means boxes that collapse during shipping, printing that looks washed out on a grey surface, or paying for print quality you don't need because the board will be wrapped anyway.

This guide compares grey board and duplex board across the dimensions that matter most for packaging buyers: composition, surface, stiffness, printability, applications, cost, and converting behavior.

## What Is Grey Board?

[Grey board](/products/grey-board) is a dense, uncoated paperboard made primarily from recycled fiber. It has a natural grey color on both sides, a smooth but uncoated surface, and high stiffness relative to its weight. It is typically manufactured in thicknesses from 0.5 mm to 3.0 mm, with higher densities available for structural applications.

Grey board's primary job is **structure**. It provides the rigid backbone inside luxury gift boxes, hardcover books, puzzle boards, file folders, and display mounts. It is rarely the visible surface in a finished product — instead, it is wrapped, laminated, or mounted with decorative paper, fabric, leatherette, or printed sheets.

Key characteristics:
- Through-grey color (both sides identical)
- High stiffness and flatness
- Smooth uncoated surface suitable for gluing and mounting
- Made from 100% post-consumer recycled fiber (FSC Recycled available)
- Not designed for direct high-quality offset printing

## What Is Duplex Board?

[Duplex board](/products/duplex-board) is a two-layer paperboard: a coated white top layer for printing, bonded to a grey back layer that provides thickness and stiffness at lower cost. The white top is typically clay-coated for smoothness and print receptivity, while the grey back is uncoated.

Duplex board's primary job is **printable packaging at an economical price point**. It is widely used for retail cartons, display packaging, backing boards, shoe boxes, and general consumer goods packaging where one side needs to look good and the other side is hidden inside the carton.

Key characteristics:
- Coated white printing surface on top
- Grey uncoated back
- Moderate stiffness (less than grey board at equivalent thickness)
- Good offset and flexo print quality on the coated side
- More economical than FBB (folding box board) for many applications

## Side-by-Side Comparison

| Property | Grey Board | Duplex Board |
|----------|-----------|-------------|
| **Fiber source** | 100% recycled (post-consumer) | Mixed (recycled grey back, cleaner fiber on white top) |
| **Surface** | Both sides grey, uncoated | One side white coated, one side grey uncoated |
| **Printability** | Not designed for direct quality printing | Good offset/flexo on white side |
| **Stiffness** | High (dense fiber structure) | Moderate (softer structure) |
| **Thickness range** | 0.5–3.0 mm | 0.3–1.0 mm typical |
| **Main use** | Structural base for rigid boxes, book covers | Printed retail cartons, display boxes |
| **Cost position** | Economical structural board | Economical printable carton board |
| **FSC availability** | FSC Recycled certified | FSC Recycled certified |
| **Common sheet sizes** | 787×1092 mm, 889×1194 mm | 787×1092 mm, 889×1194 mm |

## When to Choose Grey Board

Choose [grey board](/products/grey-board) when your packaging project needs **structure first, printability second (or not at all).**

**Grey board is the right choice for:**
- **Rigid gift boxes** — The grey board forms the structural shell. It will be wrapped with printed art paper, [black paper](/products/black-paper), [fancy paper](/products/fancy-paper), fabric, or leatherette.
- **Hardcover book covers** — The stiff board inside the cover that gives a book its rigid feel.
- **Jigsaw puzzles and game boards** — Flat, stiff, dimensionally stable substrate.
- **File folders and ring binders** — Long-term durability and stiffness.
- **Display and mounting boards** — Backing that stays flat under the weight of mounted items.
- **Calendar backs and notepad bases** — A stiff backer that keeps the product flat.

**If your finished package will have the grey board visible to the customer**, you are probably using grey board as a structural layer beneath a decorative wrap — not as the final surface.

## When to Choose Duplex Board

Choose [duplex board](/products/duplex-board) when your packaging needs **one printable side and modest structural performance at an economical price.**

**Duplex board is the right choice for:**
- **Retail folding cartons** — Cereal boxes, toy packaging, household product cartons, where the outside is printed and the inside is grey.
- **Display packaging** — Counter displays, shelf trays, promotional packaging with printing on the visible side.
- **Shoe boxes** — Printed outside, grey inside, with sufficient stiffness for stacking.
- **Backing boards for blister packs** — Stiff, printable, and cost-effective.
- **Economical gift boxes** — Lower-cost alternatives to rigid boxes, where the box itself is printed (not wrapped).

**If your package needs direct printing and the inside surface won't be seen**, duplex board is often the most cost-effective choice.

## The Critical Question: Will It Be Printed or Wrapped?

This is the single question that most reliably separates grey board from duplex board projects:

- **Wrapped / mounted / covered → Grey board.** The decorative surface comes from the wrapping material, not the board itself. The board provides structure.
- **Printed directly → Duplex board** (or [FBB](/products/folding-box-board), [C2S](/products/c2s-art-board), depending on quality requirements). The board surface is the packaging surface.

There is a middle ground: some converters print directly onto grey board for utilitarian applications (simple one-color logos, internal dividers, industrial packaging). But these are exceptions. For any packaging where print quality affects the customer's perception of the product, grey board should be wrapped, not printed.

## Cost Comparison

At equivalent thickness, grey board is typically more economical per sheet than duplex board because it is made from 100% recycled fiber with no coating process. However, cost-per-sheet comparisons can be misleading — the total project cost depends on the entire converting process.

A rigid box using grey board requires:
1. Grey board (structural base)
2. Wrapping paper (decorative surface)
3. Glue/adhesive
4. Labor for mounting and wrapping

A carton using duplex board requires:
1. Duplex board (structure + print surface in one)
2. Printing (ink, plates, press time)
3. Die-cutting, folding, gluing

The total cost comparison depends on your converting setup, labor costs, order volume, and whether you do wrapping in-house or outsource it.

## Can You Use Grey Board and Duplex Board Together?

Yes. Many premium packaging projects use both:
- **Duplex board** for the outer printed carton or slipcase
- **Grey board** for the inner rigid structure, tray, or platform

This combination gives you print quality on the outside (duplex) and structural integrity on the inside (grey board). It is common in cosmetic packaging, electronics packaging, and premium gift sets.

## How to Specify Your Requirement to a Supplier

When requesting a quotation for either board, include:

- Board type: Grey board or duplex board
- Required thickness (mm) or GSM
- Sheet size (width × length in mm)
- For grey board: wrapping material and method (will affect gluing compatibility)
- For duplex board: printing method (offset, flexo, digital) and number of colors
- Application (rigid box, carton, book cover, etc.)
- FSC certification required?
- Quantity and target delivery schedule

## FAQ

### Which is stronger — grey board or duplex board?

Grey board has higher stiffness and density at equivalent thickness. It is the stronger structural board.

### Can grey board be printed on?

Grey board can accept simple one-color printing, but it is not designed for high-quality process-color offset printing. For printed packaging, choose duplex board, [FBB](/products/folding-box-board), or [C2S art board](/products/c2s-art-board).

### Is duplex board the same as folding box board?

No. Duplex board has one coated white side and one grey back. [Folding box board (FBB)](/products/folding-box-board) typically has multiple coating layers on the top and a cream or white back, with higher print quality and stiffness for premium retail cartons.

### Is grey board FSC certified?

Yes. YOUNGSUN grey board is available with FSC Recycled certification.

### What's the difference between grey board and chipboard?

Grey board and chipboard are the same material. In some regions (especially North America), it is called chipboard; in Asia and Europe, grey board or grey chipboard is more common.

## Suggested Internal Links

- [Grey Board — rigid box structural board (FSC Recycled)](/products/grey-board)
- [Duplex Board — cost-effective printed carton board](/products/duplex-board)
- [Folding Box Board (FBB) — premium retail carton board](/products/folding-box-board)
- [C2S Art Board — double-coated premium printing board](/products/c2s-art-board)
- [Black Paper — through-dyed luxury wrapping paper](/products/black-paper)
- [All Products & Categories](/products)`,image:`/images/products/package-board/duplex-board-main.jpg`,tags:[`grey board`,`duplex board`,`paperboard comparison`,`packaging board`,`rigid box`]},{id:`paper-gsm-thickness-conversion-chart`,title:`Paper GSM to Thickness Conversion: Understanding Paper Weight for International Buyers`,seoTitle:`Paper GSM to Thickness Chart — Grammage, Caliper & Weight Guide | YOUNGSUN`,metaDescription:`Complete guide to paper GSM (grams per square meter), thickness (caliper/microns), and basis weight conversion. Includes reference charts for common paper grades from 35 to 600 GSM.`,date:`2026-08-05`,author:`YOUNGSUN PAPER Editorial`,category:`Guides`,excerpt:`GSM, caliper, basis weight, points — paper measurement systems confuse even experienced buyers. This guide explains every term, provides conversion charts, and shows you how to specify weight correctly to avoid costly ordering mistakes.`,content:`# Paper GSM to Thickness Conversion: Understanding Paper Weight for International Buyers

One of the most common sources of confusion in international paper sourcing is weight measurement. A buyer in the United States asks for "80 lb cover." A mill in China quotes in GSM. A European printer specifies microns. And somewhere in between, an order comes out wrong — paper that is too thin, too thick, or outright unusable for the intended application.

This guide covers every major paper weight and thickness measurement system, with practical conversion charts for the grades most commonly sourced internationally: [grey board](/products/grey-board), [duplex board](/products/duplex-board), [kraft paper](/products/kraft-paper), [woodfree paper](/products/woodfree-paper), [folding box board](/products/folding-box-board), and more.

## What Is GSM?

**GSM** stands for **grams per square meter**. It is the weight in grams of a single sheet of paper measuring 1 meter × 1 meter. A paper specified at 200 GSM means that one square meter of that paper weighs 200 grams.

GSM is the most widely used paper weight measurement system internationally and is the standard in China, Europe, and most of Asia.

**Key point:** GSM measures **weight per unit area**, not thickness. Two papers at 200 GSM can have slightly different thicknesses depending on fiber composition, density, and manufacturing process.

## GSM vs Thickness (Caliper): They Are NOT the Same

GSM (weight) and caliper (thickness) are related but not identical. A dense, highly refined paper can be thinner than a bulky, less-refined paper at the same GSM.

**Example:**
- A 200 GSM [C2S art board](/products/c2s-art-board) (dense, clay-coated) might be approximately 0.20 mm thick.
- A 200 GSM [grey board](/products/grey-board) (recycled fiber, lower density) might be approximately 0.35 mm thick.

Same weight. Different thickness. Different stiffness. Different performance in your packaging or printing application.

This is why thickness (caliper) should always be confirmed alongside GSM when the physical dimension matters — for rigid boxes that must fit a specific cavity, for book covers that must match a spine width, or for paper that must run through a specific converting machine.

## The Three Most Common Measurement Systems

### 1. GSM (International Standard)
- Used in: China, Europe, Asia, Middle East, Africa, Latin America
- Measures: Weight (grams per square meter)
- Example: "250 GSM grey board"

### 2. Basis Weight (US System)
- Used in: United States, Canada (partially)
- Measures: Weight in pounds of a ream (500 sheets) cut to a standard basis size
- Example: "80 lb cover"
- **IMPORTANT:** The basis size changes with paper type. 80 lb bond paper is NOT the same weight as 80 lb cover paper, because the basis sheet sizes are different. This is the most confusing aspect for international buyers.

### 3. Microns (μm) and Points (pt)
- Used in: Europe (microns), US (points, mostly for board)
- Measures: Actual physical thickness
- 1 point = 0.001 inch = 25.4 microns
- Example: "24 pt board" = 0.024 inches thick ≈ 610 microns

## GSM to Thickness Reference Chart (Approximate)

These values are **approximate averages** for common grades. Actual thickness varies by manufacturer, density, fiber composition, and production process. Always confirm exact caliper with your supplier.

### Uncoated Paper & Kraft (Woodfree, Offset, Kraft)

| GSM | Approx. Thickness (microns) | Approx. Thickness (mm) | Common Applications |
|-----|---------------------------|----------------------|---------------------|
| 35 | 45–50 | 0.045–0.050 | [Greaseproof paper](/products/greaseproof-paper) for food wrap |
| 50 | 60–70 | 0.060–0.070 | Lightweight [kraft paper](/products/kraft-paper), wrapping |
| 60 | 75–85 | 0.075–0.085 | Envelopes, light kraft bags |
| 70 | 85–95 | 0.085–0.095 | [Woodfree paper](/products/woodfree-paper) for notebooks |
| 80 | 95–105 | 0.095–0.105 | Standard office paper, [copy paper](/products/copy-paper) |
| 100 | 115–125 | 0.115–0.125 | Letterhead, book paper, light kraft |
| 120 | 135–150 | 0.135–0.150 | Book covers, heavier kraft bags |
| 150 | 165–185 | 0.165–0.185 | Cardstock, folder paper, [color card](/products/color-card-paper) |
| 200 | 215–240 | 0.215–0.240 | Heavy card, tags, light board |
| 250 | 265–290 | 0.265–0.290 | Cover stock, heavy tags, [color card](/products/color-card-paper) |
| 300 | 310–340 | 0.310–0.340 | Board for folders, light packaging |
| 350 | 360–390 | 0.360–0.390 | Heavy card, [black paper](/products/black-paper) for rigid boxes |
| 400 | 410–440 | 0.410–0.440 | Heavy board, structural card |

### Coated Paper & Board (C2S, FBB, Duplex)

| GSM | Approx. Thickness (microns) | Approx. Thickness (mm) | Common Applications |
|-----|---------------------------|----------------------|---------------------|
| 90 | 70–80 | 0.070–0.080 | [LWC paper](/products/lwc-paper) for magazines |
| 105 | 80–90 | 0.080–0.090 | Magazine covers, brochures |
| 128 | 95–105 | 0.095–0.105 | Catalog pages, [C2S art paper](/products/c2s-art-board) |
| 157 | 115–130 | 0.115–0.130 | Premium brochures, [C2S art paper](/products/c2s-art-board) |
| 200 | 145–165 | 0.145–0.165 | Light carton board, [duplex board](/products/duplex-board) |
| 210 | 190–210 | 0.190–0.210 | [FBB](/products/folding-box-board) for retail cartons |
| 230 | 210–230 | 0.210–0.230 | Standard FBB for cosmetics, pharma cartons |
| 250 | 230–260 | 0.230–0.260 | Retail carton board, [duplex board](/products/duplex-board) |
| 270 | 260–290 | 0.260–0.290 | Heavy FBB, [CKB](/products/ckb) for beverage cartons |
| 300 | 280–320 | 0.280–0.320 | Premium carton board, [CKB](/products/ckb) |
| 330 | 310–350 | 0.310–0.350 | [Cupstock board](/products/cup-paper) for paper cups |
| 350 | 330–370 | 0.330–0.370 | Heavy-duty cartons, display board |
| 400 | 370–410 | 0.370–0.410 | Display stands, heavy packaging |

### Structural Board (Grey Board)

For structural board, thickness in millimeters is the primary specification, and GSM is secondary. Grey board is typically ordered by thickness (mm), not by GSM.

| Thickness (mm) | Approx. GSM | Common Applications |
|---------------|-------------|---------------------|
| 0.5 | 350–400 | Light backing board, calendar backs |
| 1.0 | 700–800 | Standard rigid box board, folders |
| 1.5 | 1050–1200 | Premium rigid boxes, book covers |
| 2.0 | 1400–1600 | Heavy rigid boxes, puzzle boards |
| 2.5 | 1750–2000 | Extra-heavy boxes, display stands |
| 3.0 | 2100–2400 | Industrial board, structural panels |

## US Basis Weight to GSM Conversion

This chart helps US-based buyers communicate with international suppliers. **Always confirm the paper type** — 100 lb text and 100 lb cover are completely different weights.

### Bond / Writing Paper (Basis: 17″ × 22″, 500 sheets)

| US Basis Weight (lb) | Approx. GSM |
|----------------------|-------------|
| 20 lb bond | 75 GSM |
| 24 lb bond | 90 GSM |
| 28 lb bond | 105 GSM |
| 32 lb bond | 120 GSM |

### Text / Book Paper (Basis: 25″ × 38″, 500 sheets)

| US Basis Weight (lb) | Approx. GSM |
|----------------------|-------------|
| 60 lb text | 89 GSM |
| 70 lb text | 104 GSM |
| 80 lb text | 118 GSM |
| 100 lb text | 148 GSM |

### Cover Paper (Basis: 20″ × 26″, 500 sheets)

| US Basis Weight (lb) | Approx. GSM |
|----------------------|-------------|
| 50 lb cover | 135 GSM |
| 65 lb cover | 176 GSM |
| 80 lb cover | 216 GSM |
| 100 lb cover | 270 GSM |
| 120 lb cover | 325 GSM |

## How to Specify Weight and Thickness Correctly

When requesting a quotation from an international supplier, specify both weight (GSM) and thickness (mm or microns) when the physical dimension matters. A complete specification looks like:

**Good specification:**
> "200 GSM C2S art paper, approximate caliper 160–180 microns, sheets 787 × 1092 mm."

This gives the supplier:
1. The target GSM (weight)
2. The expected thickness range (so the supplier can confirm their grade matches)
3. The format (sheets, with dimensions)

**Incomplete specification (risk of error):**
> "Thick paper for brochure cover, around 200 gsm."

This leaves too much room for interpretation. "Around 200 GSM" could mean 180 GSM or 230 GSM. No format is specified. No thickness expectation is given.

## Common Measurement Mistakes That Lead to Costly Errors

### Mistake 1: Assuming GSM = Thickness

As explained above, different paper grades have different densities. A 250 GSM grey board is thicker than a 250 GSM C2S art board. If you ordered by GSM alone expecting a specific thickness, you may receive material that is too thin or too thick for your die-cutting, box-making, or printing equipment.

**Fix:** Always specify and confirm caliper (mm or microns) alongside GSM when thickness matters.

### Mistake 2: Confusing US Basis Weights Across Paper Types

"80 lb paper" means completely different things depending on whether the paper type is bond, text, or cover. 80 lb bond ≈ 120 GSM. 80 lb text ≈ 118 GSM. 80 lb cover ≈ 216 GSM — nearly double.

**Fix:** When communication with an international supplier, always convert to GSM. Don't use US basis weight terms unless the supplier confirms they understand the basis size.

### Mistake 3: Not Accounting for Coating Weight

A coated paper weighs more than the same base paper uncoated. The coating adds 5–20 GSM depending on coating type and thickness. If you specify a coated paper by GSM, you are specifying the total weight (base paper + coating).

**Fix:** This is usually handled correctly because suppliers quote the total GSM. But it's worth being aware of if you're comparing coated and uncoated alternatives.

### Mistake 4: Ignoring Moisture Content

Paper absorbs moisture from the air. The same paper can vary in weight by 3–8% depending on ambient humidity — more for uncoated grades. This can affect both weight-based pricing and actual performance.

**Fix:** Paper is typically quoted at standard conditioned weight (50% RH, 23°C). Confirm this with your supplier if exact weight is critical to your application.

## How to Convert Between Systems (Quick Reference)

### Formula: GSM → Approx. Microns

\`\`\`
Microns ≈ GSM / Density × 1000

Where Density is in g/cm³:
- Coated papers (C2S, FBB): ~1.1–1.3 g/cm³
- Uncoated papers (woodfree, kraft): ~0.7–0.9 g/cm³
- Recycled board (grey board, duplex): ~0.6–0.8 g/cm³
\`\`\`

**Example calculation for 250 GSM C2S art paper:**
\`\`\`
Microns ≈ 250 / 1.2 × 1000 ≈ 208 microns ≈ 0.21 mm
\`\`\`

### Formula: US Cover (lb) → GSM

\`\`\`
GSM ≈ US Cover Weight × 2.704

Example: 80 lb cover × 2.704 ≈ 216 GSM
\`\`\`

### Formula: Microns → Points

\`\`\`
Points = Microns / 25.4

Example: 500 microns / 25.4 ≈ 19.7 pt
\`\`\`

## Why Accurate Weight Specification Matters for Container Shipping

Paper is heavy. A 40-foot high-cube container typically holds approximately 25 metric tons. If you order "200 GSM paper" and the supplier delivers 210 GSM (a 5% deviation that may be within tolerance for the grade), that's an extra 1.25 tons of paper — more than you ordered and more than you paid for in freight.

Conversely, if the paper is 5% lighter than specified, you're paying for container space you're not fully utilizing.

For buyers who ship in container volumes, confirming weight tolerance with the supplier is an important cost-control measure. See our [guide to calculating paper weight for container shipping](./how-to-calculate-paper-weight-container-shipping) for detailed calculations.

## FAQ

### What does GSM stand for in paper?

GSM stands for grams per square meter — the weight in grams of one square meter of paper.

### Is 200 GSM paper thick?

200 GSM is moderate thickness — approximately 0.15–0.25 mm depending on the paper type. It is suitable for brochure covers, light card, and tags.

### How do I convert US paper weight to GSM?

For cover paper: GSM ≈ US cover weight × 2.704. For bond paper: GSM ≈ US bond weight × 3.76. For text paper: GSM ≈ US text weight × 1.48. Always confirm the paper type before converting.

### What GSM is best for business cards?

250–350 GSM is the typical range for business cards. 300 GSM is the most common choice.

### Does higher GSM mean thicker paper?

Generally yes, but two papers at the same GSM from different grades (e.g., coated vs uncoated) can have different thicknesses. GSM measures weight, not thickness.

### What is the thickest paper GSM?

Standard paper grades go up to about 400 GSM. Board grades (grey board, etc.) are specified by thickness in mm rather than GSM and can reach 3.0 mm or more.

## Suggested Internal Links

- [Grey Board — structural board (1.0–3.0 mm)](/products/grey-board)
- [Duplex Board — coated one-side carton board](/products/duplex-board)
- [Folding Box Board — premium retail carton board](/products/folding-box-board)
- [C2S Art Board — double-coated premium paperboard](/products/c2s-art-board)
- [Woodfree Paper — uncoated offset printing paper](/products/woodfree-paper)
- [Kraft Paper — natural & bleached packaging paper](/products/kraft-paper)
- [All Products & Categories](/products)
- [How to Calculate Paper Weight for Container Shipping](./how-to-calculate-paper-weight-container-shipping)`,image:`/images/products/culture-paper/woodfree-paper-main.jpg`,tags:[`GSM`,`paper weight`,`thickness chart`,`caliper`,`paper conversion`,`basis weight`]},{id:`folding-box-board-fbb-buyer-guide`,title:`Folding Box Board (FBB) Complete Buyer Guide: Grades, Applications, and Sourcing Tips`,seoTitle:`Folding Box Board (FBB) Buyer Guide — Grades, GSM, Sourcing | YOUNGSUN`,metaDescription:`Complete guide to folding box board (FBB, GC1, GC2): grades explained, GSM range, coating types, stiffness, applications for cosmetics, pharma, food cartons, and sourcing from China.`,date:`2026-08-05`,author:`YOUNGSUN PAPER Editorial`,category:`Products`,excerpt:`Folding box board is the workhorse of retail packaging — cosmetics boxes, pharma cartons, food packaging. This guide covers FBB grades (GC1, GC2), key specifications, how to evaluate quality, and what to ask your supplier.`,content:`# Folding Box Board (FBB) Complete Buyer Guide: Grades, Applications, and Sourcing Tips

Folding box board — commonly abbreviated as FBB — is one of the most widely specified paperboard grades in the world. If you have ever opened a cosmetics box, a pharmaceutical carton, a frozen food package, or a premium retail carton, there is a high probability you were holding FBB.

For packaging buyers, FBB sits in the sweet spot between economy and performance: it prints beautifully, folds cleanly, and costs less than solid bleached sulphate (SBS) board. But FBB is not one single product. It comes in different grades, coating configurations, and stiffness levels — and choosing the wrong one leads to cracking on the fold, poor print reproduction, or cartons that fail on high-speed filling lines.

This guide explains everything a buyer needs to know about [folding box board](/products/folding-box-board): what it is, how grades differ, typical specifications, and how to source it correctly.

## What Is Folding Box Board?

Folding box board is a multi-layer paperboard with a mechanical pulp middle layer sandwiched between chemical pulp outer layers. The top layer is typically coated with one to three layers of coating (clay and/or calcium carbonate) to create a smooth, white printing surface. The back layer may be white, cream, or light grey depending on the grade.

This three-layer structure is what gives FBB its characteristic combination of properties:

- **Top layer (chemical pulp + coating):** Print surface — smooth, white, receptive to ink and varnish
- **Middle layer (mechanical pulp):** Bulk and stiffness — thicker fibers provide rigidity without adding proportional weight
- **Back layer (chemical pulp or light-colored recycled fiber):** Reverse side — may be uncoated or lightly coated depending on grade

## FBB Grades: GC1, GC2, and Beyond

The most common FBB grade designations come from the German classification system, which is widely used in international trade:

### GC1 (Grey Back / White Back)

GC1 is the standard premium FBB grade. It features:
- Multi-coated white top surface
- White or cream back (sometimes called "white back FBB")
- Virgin fiber construction throughout

**Best for:** Cosmetics, pharmaceuticals, premium food packaging, and any application where the inside of the carton should look clean and white.

### GC2 (Grey/Cream Back)

GC2 is the economy FBB grade. It features:
- Multi-coated white top surface
- Grey or light-grey back layer (recycled fiber content)
- Slightly lower cost than GC1

**Best for:** General retail cartons, household products, dry food packaging, and applications where the inside surface color is not critical.

### C1S Ivory Board

Often discussed alongside FBB, [C1S ivory board](/products/folding-box-board) is a high-bulk board with one coated side (typically the top) and an uncoated reverse. It combines FBB-like stiffness with a premium ivory appearance.

**Best for:** Premium hang tags, greeting cards, covers, and packaging where the board's natural ivory color contributes to the design.

## Key FBB Specifications

| Property | GC1 (White Back) | GC2 (Grey/Cream Back) |
|----------|-----------------|----------------------|
| **Top surface** | Multi-coated, bright white | Multi-coated, bright white |
| **Back surface** | White or cream, lightly coated or uncoated | Grey or light-grey, uncoated |
| **Fiber** | Virgin (chemical + mechanical pulp) | Mixed (virgin top, recycled content in back) |
| **Typical GSM range** | 200–400 GSM | 200–400 GSM |
| **Common thickness** | 0.30–0.60 mm | 0.30–0.60 mm |
| **Brightness (top)** | 88–92% ISO | 88–92% ISO |
| **Smoothness (top)** | 1.0–1.5 μm (PPS) | 1.0–1.5 μm (PPS) |
| **Stiffness** | High (mechanical pulp middle) | High (mechanical pulp middle) |
| **FSC availability** | FSC Mix certified | FSC Mix / Recycled certified |

## FBB vs Other Carton Boards

### FBB vs SBS (Solid Bleached Sulphate)

SBS is the premium carton board made from 100% bleached chemical pulp. It offers higher brightness, better whiteness, and superior odor/taste neutrality (important for food packaging). FBB offers higher stiffness at equivalent GSM — a 230 GSM FBB can be stiffer than a 250 GSM SBS. FBB is typically lower cost than SBS.

### FBB vs Duplex Board

[Duplex board](/products/duplex-board) has a coated white top and a grey back, similar to GC2 FBB. The difference is that duplex board typically uses more recycled fiber and has lower stiffness. FBB is the premium alternative for applications where folding performance, stiffness, and consistent print quality matter.

### FBB vs C2S Art Board

[C2S art board](/products/c2s-art-board) is coated on both sides and is designed for premium printing on both faces. FBB is designed for carton converting — folding, creasing, gluing. C2S is chosen for print quality; FBB is chosen for converting performance plus print quality.

## How to Evaluate FBB Quality

When sampling FBB, evaluate these properties:

1. **Print gloss and ink holdout** — Print a test image. Does the coating hold ink without mottling? Is the gloss uniform?
2. **Creasing and folding** — Score and fold the board at 90° and 180°. Does it crack at the fold? Cracking on the fold line is a common FBB quality issue.
3. **Stiffness** — Does the board feel rigid enough for the carton size? A larger carton needs a stiffer board.
4. **Flatness** — Sheets must lie flat for sheet-fed printing. Curled or wavy sheets cause feeding problems.
5. **Delamination resistance** — The layers must not separate during printing, creasing, or use.
6. **Odor and taint** — For food and pharma packaging, the board must be organoleptically neutral.

## Common FBB Applications

FBB is used across virtually every consumer goods category:

- **Cosmetics:** Skincare cartons, fragrance boxes, makeup packaging
- **Pharmaceuticals:** Medicine cartons, patient information leaflet packaging
- **Food:** Dry food cartons (cereal, pasta, biscuits), frozen food packaging
- **Beverage:** Multi-pack cartons, cup sleeves
- **Electronics:** Accessory boxes, charger packaging
- **Household:** Detergent cartons, home care product packaging
- **Confectionery:** Chocolate boxes, gift confectionery packaging

## Sourcing FBB from China: What to Ask Your Supplier

When requesting an FBB quotation from a Chinese supplier, include:

1. **Grade:** GC1, GC2, or specify if you need a particular mill brand
2. **GSM:** 210, 230, 250, 270, 300, 330, 350, or 400 GSM
3. **Format:** Sheets (specify size in mm) or reels (specify width and max diameter)
4. **Printing method:** Offset, flexo, or digital — this affects which coating formulation is recommended
5. **Application:** Food, pharma, cosmetics, general — this affects food-contact and odor requirements
6. **Certification:** FSC, food-contact compliance documents for target market
7. **Volume:** Metric tons or number of sheets
8. **Destination port:** For freight quotation

A good supplier will ask you about your application and converting process before quoting a grade — not simply respond with a price.

## FAQ

### What is the difference between FBB GC1 and GC2?

GC1 has a white or cream back. GC2 has a grey or light-grey back (contains recycled fiber). GC1 is preferred for premium packaging and applications where the inside of the carton is visible. GC2 is more economical for general carton applications.

### What GSM is best for cosmetics packaging?

250–330 GSM is the typical range for cosmetics cartons. 300 GSM is a common choice for luxury skincare and fragrance cartons.

### Is FBB food-safe?

FBB can be manufactured to food-contact standards, but food-safety compliance is not automatic — it must be specified and documented. Confirm the required compliance standard (FDA, EU 1935/2004, GB 9685) with your supplier.

### Can FBB be hot foil stamped?

Yes. FBB's smooth coated surface is excellent for hot foil stamping, embossing, and spot UV.

### What is the minimum order quantity for FBB from China?

Typical MOQ is 1–3 metric tons, though pricing improves at container-load volumes (20–25 tons per 40HQ container).

## Suggested Internal Links

- [Folding Box Board — premium carton board (GC1/GC2)](/products/folding-box-board)
- [Duplex Board — cost-effective carton board alternative](/products/duplex-board)
- [C2S Art Board — double-coated premium printing board](/products/c2s-art-board)
- [CKB (Coated Kraft Back) — beverage & frozen food carton board](/products/ckb)
- [Grey Board — structural base for rigid boxes](/products/grey-board)
- [All Products & Categories](/products)`,image:`/images/products/package-board/folding-box-board-main.jpg`,tags:[`FBB`,`folding box board`,`GC1`,`GC2`,`carton board`,`packaging board`]},{id:`how-to-calculate-paper-weight-container-shipping`,title:`How to Calculate Paper Weight for Container Shipping: A Practical Guide for Importers`,seoTitle:`Calculate Paper Weight for Container Shipping — Container Loading Guide | YOUNGSUN`,metaDescription:`Learn to calculate exact paper weight per container, estimate freight cost, and optimize container loading. Includes formulas, common paper grade densities, and a 40HQ container calculator for paper importers.`,date:`2026-08-05`,author:`YOUNGSUN PAPER Editorial`,category:`Guides`,excerpt:`Paper is dense and heavy. A 40HQ container holds about 25 tons — but the exact number depends on GSM, sheet size, and packing configuration. This guide shows you how to calculate it precisely before you order.`,content:`# How to Calculate Paper Weight for Container Shipping: A Practical Guide for Importers

International paper buyers face a unique logistics challenge: paper is one of the densest commodities shipped in containers. A 40-foot high-cube (40HQ) container can hold approximately 25 metric tons of paper — but the exact capacity depends on the paper grade, GSM, sheet size, pallet configuration, and loading method. Miscalculate by just a few percent, and you either pay for empty container space or end up with an overweight container that the shipping line refuses to load.

This guide covers the practical calculations every paper importer should know before placing an order.

## The Basic Calculation: Paper Weight from GSM and Sheet Dimensions

The fundamental formula is:

\`\`\`
Weight of one sheet (kg) = GSM × Length (m) × Width (m) / 1000
\`\`\`

**Example:** A sheet of [grey board](/products/grey-board), 1.5 mm thick, approximately 1050 GSM, size 787 × 1092 mm:

\`\`\`
Weight per sheet = 1050 × 0.787 × 1.092 / 1000
                = 1050 × 0.859 / 1000
                = 0.902 kg per sheet
\`\`\`

So each sheet weighs approximately 0.9 kg.

## Total Order Weight: Sheets to Metric Tons

Once you know the per-sheet weight, calculate the total order weight:

\`\`\`
Total weight (kg) = Weight per sheet (kg) × Number of sheets
Total weight (tons) = Total weight (kg) / 1000
\`\`\`

**Example (continued):** An order of 20,000 sheets of the above grey board:

\`\`\`
Total weight = 0.902 × 20,000 = 18,040 kg = 18.04 metric tons
\`\`\`

This fits comfortably in one 40HQ container (typical capacity ~25 tons).

## Paper Reel Weight: Roll Calculation

For paper sold in reels, the calculation uses reel dimensions:

\`\`\`
Weight per reel (kg) = GSM × Width (m) × Length (m) / 1000

Where Length (m) = π × (Reel diameter² - Core diameter²) / (4 × Caliper in meters)
\`\`\`

**Simplified approach:** Most suppliers provide the net weight per reel directly. Confirm:
- Reel width (mm)
- Reel diameter (mm)
- Core diameter (typically 76 mm or 152 mm)
- Net weight per reel (kg)
- Number of reels per pallet / per container

## Container Capacity by Paper Grade

Paper density varies by grade. The table below shows approximate container loading for common grades in a 40HQ container:

| Paper Grade | Typical Density | Approx. 40HQ Load | Products |
|------------|----------------|-------------------|----------|
| [Grey board](/products/grey-board) | 0.6–0.8 g/cm³ | 23–26 tons | Rigid box board, structural board |
| [Duplex board](/products/duplex-board) | 0.7–0.85 g/cm³ | 24–27 tons | Carton board, display board |
| [FBB](/products/folding-box-board) | 0.75–0.9 g/cm³ | 24–27 tons | Retail carton board |
| [C2S art board](/products/c2s-art-board) | 0.9–1.1 g/cm³ | 24–26 tons | Premium printing board |
| [Woodfree paper](/products/woodfree-paper) | 0.75–0.85 g/cm³ | 22–25 tons | Offset printing paper |
| [Kraft paper](/products/kraft-paper) | 0.65–0.8 g/cm³ | 22–26 tons | Packaging kraft, bags |
| [Cupstock](/products/cup-paper) | 0.7–0.85 g/cm³ | 23–26 tons | Paper cup board |
| [Greaseproof paper](/products/greaseproof-paper) | 0.8–1.0 g/cm³ | 22–25 tons | Food wrap paper |
| [Copy paper](/products/copy-paper) | 0.75–0.85 g/cm³ | 24–27 tons | Office paper |
| [Newsprint](/products/newsprint) | 0.55–0.65 g/cm³ | 18–22 tons | Newspaper, publishing |
| [NCR carbonless](/products/ncr-carbonless-paper) | 0.7–0.8 g/cm³ | 22–25 tons | Business forms |

**Important:** These are approximate values. Actual container weight depends on sheet size, packing method (ream-wrapped, bulk on pallets, or loose-loaded), pallet weight, and moisture content.

## Practical Container Loading: Palletized vs Bulk

### Palletized Loading

Most export paper is shipped on pallets. Standard export pallets:
- **Euro pallet:** 1200 × 800 mm
- **Industrial pallet:** 1200 × 1000 mm
- **Custom pallet:** Matched to sheet size (e.g., 787 × 1092 mm sheets → custom pallet)

A 40HQ container typically holds:
- 20–24 standard pallets (Euro or industrial)
- 18–22 oversize pallets

Each pallet typically carries 800–1500 kg of paper, depending on sheet size, pack height, and product density.

### Bulk (Loose) Loading

Some buyers opt for bulk loading to maximize container utilization. Without pallets, you gain the pallet weight and height — typically 200–500 kg extra capacity per container. The trade-off is that unloading requires more labor and equipment at destination.

## Freight Cost Calculation

Ocean freight for paper is typically charged per container, not per ton. A 40HQ container from major Chinese ports (Shenzhen, Shanghai, Ningbo) to:

- **Europe (Rotterdam, Hamburg):** Variable market rate
- **North America (LA/LB, New York):** Variable market rate
- **Middle East (Jebel Ali):** Variable market rate
- **Southeast Asia:** Variable market rate
- **Africa:** Variable market rate
- **South America:** Variable market rate

**Per-ton cost formula:**

\`\`\`
Freight cost per ton = Container freight rate / Tons loaded
\`\`\`

**Example:** If the container freight is $3,000 and you load 25 tons:
\`\`\`
Freight cost per ton = $3,000 / 25 = $120 per ton
\`\`\`

This is why maximizing container utilization directly reduces your per-ton freight cost. Loading 23 tons instead of 25 tons increases your per-ton freight cost by approximately 9%.

## Weight Tolerance: How Much Deviation Is Acceptable?

Paper weight can vary from the nominal specification due to:
- Production tolerance (typically ±3–5% on GSM)
- Moisture content variation (can affect weight by 3–8%)
- Sheet cutting tolerance (can affect calculated total weight slightly)

International trade practice generally accepts weight tolerance of ±5% on the total order weight. For a 25-ton order, this means the actual shipped weight can range from 23.75 to 26.25 tons.

**Practical tip:** When ordering a full container, aim for a calculated weight of 24–25 tons to leave headroom for tolerance. If the supplier ships 26.5 tons due to positive tolerance, the container may exceed road weight limits in your destination country.

## Multi-Product Containers (Mixed Loads)

When a container includes multiple products — different paper grades, different GSMs, or different sheet sizes — calculate the total weight as a sum:

\`\`\`
Total weight = Σ (GSM_i × Length_i × Width_i × Quantity_i / 1,000,000)
\`\`\`

Where the sum is over all products in the container.

Request a detailed packing list showing:
- Number of sheets/reels per product
- Pallet-by-pallet weight
- Total net weight and gross weight (including pallets and packing)

## Container Weight Limits by Destination

Be aware of road weight limits at the destination:

| Country / Region | Typical Max Gross Vehicle Weight |
|-----------------|--------------------------------|
| EU (general) | 40 tons (tractor + trailer + cargo) |
| USA (federal) | 80,000 lbs (36.3 tons) gross |
| UK | 44 tons gross (6 axles) |
| Middle East (varies) | 40–45 tons gross |

A 40HQ container with 25 tons of paper plus the container tare weight (approximately 3.8 tons) gives a cargo weight of approximately 28.8 tons — within limits for most destinations when carried on a standard trailer.

## Checklist: Before You Confirm a Container Order

- [ ] Calculate total paper weight using GSM × sheet dimensions × quantity
- [ ] Confirm the container type (40HQ standard for paper)
- [ ] Confirm the supplier's weight tolerance (±X%)
- [ ] Request a loading plan showing pallet/package arrangement
- [ ] Confirm gross weight includes pallets, wrapping, and container tare
- [ ] Check destination road weight limits
- [ ] Confirm moisture protection (container liner, desiccants)
- [ ] Request photo documentation of loading
- [ ] Verify the Bill of Lading weight matches the supplier's packing list

## FAQ

### How many tons of paper fit in a 20ft container?

A 20ft container typically holds 10–14 tons of paper, depending on paper grade and packing configuration. 40HQ containers are more common for paper because of weight efficiency — you ship more tons per container and reduce per-ton freight cost.

### How many tons of paper fit in a 40HQ container?

Typically 22–27 tons, depending on paper grade density and packing method. For most paperboard grades, 25 tons is a good planning estimate.

### How do I calculate the weight of paper from GSM?

Weight per sheet (kg) = GSM × Length (m) × Width (m) / 1000. Multiply by the number of sheets for total weight.

### What happens if my container is overweight?

The shipping line may refuse to load it, or the truck at destination may be over the road weight limit. Always calculate total weight in advance and confirm with your supplier.

### Do I pay freight per ton or per container?

Ocean freight for paper is typically charged per container. This is why maximizing the tons per container reduces your per-ton freight cost.

### How much does a pallet of paper weigh?

A typical export pallet of paper weighs 800–1500 kg, depending on sheet size, GSM, and pack height. The pallet itself adds 20–25 kg.

## Suggested Internal Links

- [All Products & Categories](/products)
- [Grey Board — structural board for rigid packaging](/products/grey-board)
- [Folding Box Board — retail carton board](/products/folding-box-board)
- [Kraft Paper — bags, wrap & industrial packaging](/products/kraft-paper)
- [Woodfree Paper — offset printing paper](/products/woodfree-paper)
- [Paper GSM to Thickness Conversion Chart](./paper-gsm-thickness-conversion-chart)
- [How to Source Paper from China — Complete Guide](./how-to-source-paper-from-china)`,image:`/images/products/package-board/kraft-paper-main.jpg`,tags:[`container shipping`,`paper weight`,`freight calculation`,`container loading`,`logistics`]},{id:`fsc-paper-certification-guide-international-buyers`,title:`FSC Paper Certification Explained: A Step-by-Step Guide for International Buyers Sourcing from China`,seoTitle:`FSC Paper Certification Guide — How to Verify & Source FSC Paper from China | YOUNGSUN`,metaDescription:`Complete guide to FSC paper certification for international buyers: FSC 100%, FSC Mix, FSC Recycled explained, how to verify certificates, chain of custody, and how to source FSC certified paper from China.`,date:`2026-08-05`,author:`YOUNGSUN PAPER Editorial`,category:`Compliance`,excerpt:`FSC certification is the most requested sustainability credential in paper procurement — but many buyers don't know how to verify it. This guide explains the three FSC labels, chain of custody, how to check a certificate, and what documentation you should receive with your shipment.`,content:`# FSC Paper Certification Explained: A Step-by-Step Guide for International Buyers Sourcing from China

FSC — the Forest Stewardship Council — is the most recognized forest certification system in the world. For paper and packaging buyers, FSC certification is increasingly a non-negotiable requirement: retailers demand it, brands include it in ESG targets, and regulators are making it mandatory in certain markets.

But FSC certification is widely misunderstood. Buyers often assume that any supplier who says "FSC certified" is automatically providing legitimate certified material. In reality, FSC certification involves a complex chain-of-custody system, specific label categories with distinct meanings, and documentation requirements that extend from the forest to the shipping container.

This guide explains FSC certification from the perspective of an international paper buyer sourcing from China: what each label means, how to verify a supplier's credentials, what documentation to expect, and how to avoid common mistakes.

## What Is FSC Certification?

The Forest Stewardship Council (FSC) is an international non-profit organization that sets standards for responsible forest management. FSC certification verifies that forest products — including paper — come from responsibly managed forests that meet environmental, social, and economic criteria.

FSC certification has two components:

1. **Forest Management (FM) Certification:** Certifies that a specific forest is managed to FSC standards — protecting biodiversity, respecting indigenous rights, maintaining high conservation values, and ensuring long-term forest health.

2. **Chain of Custody (CoC) Certification:** Tracks FSC-certified material from the forest through every stage of processing, manufacturing, distribution, and sale. A paper mill, trader, converter, or printer must have CoC certification to sell FSC-labeled products.

When you buy "FSC certified paper," you are buying from a supplier with FSC CoC certification who sources fiber from FSC-certified forests or controlled sources.

## The Three FSC Labels: What Each One Means

FSC has three main product labels. Understanding the differences is critical because they represent fundamentally different fiber sources:

### FSC 100%

**Meaning:** All fiber in the product comes from FSC-certified forests.

**Best for:** Products where the brand wants the strongest sustainability claim. Virgin-fiber products like [woodfree paper](/products/woodfree-paper), [folding box board](/products/folding-box-board), [cup paper](/products/cup-paper), and [kraft paper](/products/kraft-paper) made from 100% certified virgin pulp.

**What to expect:** The supplier's invoice should state "FSC 100%" and include the FSC certificate number.

### FSC Mix

**Meaning:** The product contains a mixture of:
- Fiber from FSC-certified forests
- Recycled fiber (post-consumer or post-industrial)
- FSC Controlled Wood (not certified but risk-assessed to exclude unacceptable sources like illegal logging)

**Best for:** Most printing and packaging papers where a blend of virgin and recycled fiber is used. This is the most common FSC label in the paper industry.

**What to expect:** The supplier should state the percentage of FSC-certified and recycled content if requested.

### FSC Recycled

**Meaning:** All fiber in the product is recycled (post-consumer and/or post-industrial recovered material).

**Best for:** Products made from 100% recovered paper — [grey board](/products/grey-board), [duplex board](/products/duplex-board), recycled [black paper](/products/black-paper), and recycled [kraft paper](/products/kraft-paper).

**What to expect:** The FSC Recycled label is the strongest recycling credential in the FSC system.

### Comparison Table

| FSC Label | Fiber Source | Environmental Significance | Common Products at YOUNGSUN |
|-----------|-------------|---------------------------|---------------------------|
| FSC 100% | 100% certified virgin fiber | Highest virgin fiber standard | [Woodfree paper](/products/woodfree-paper), [FBB](/products/folding-box-board), [cupstock](/products/cup-paper) |
| FSC Mix | Mix of certified + recycled + controlled | Broad market standard | Most printing and packaging papers |
| FSC Recycled | 100% recycled fiber | Highest recycled content standard | [Grey board](/products/grey-board), [duplex board](/products/duplex-board), recycled [black paper](/products/black-paper) |

## How to Verify FSC Certification: A Practical Checklist

A supplier saying "we are FSC certified" is not enough. Verification takes five minutes and protects you from buying uncertified material at certified prices.

### Step 1: Request the FSC Certificate Number

Every FSC-certified company has a unique certificate number in the format:

\`\`\`
XXX-COC-XXXXXX
\`\`\`

Example: \`SGS-COC-009999\`

### Step 2: Verify on the FSC Public Database

Visit [info.fsc.org](https://info.fsc.org/) and enter the certificate number. The database will show:

- **Certificate holder name** — Does it match the supplier you are dealing with?
- **Certificate status** — Active, suspended, or expired?
- **Scope** — Which product categories are covered?
- **Validity dates** — Is the certificate currently valid?
- **Certification body** — Which accredited body issued the certificate (SGS, Bureau Veritas, Control Union, etc.)?

### Step 3: Confirm the Certificate Covers Your Specific Product

FSC certificates are issued for specific product categories and material types. A supplier may have FSC CoC certification for "Paper and Paperboard — Printing and Writing" but not for "Paper and Paperboard — Packaging." Confirm that your specific product type falls within the certificate scope.

### Step 4: Request Chain of Custody Documentation

For every FSC-labeled shipment, the supplier should provide:

- **FSC invoice** — Must include the FSC certificate number and the FSC claim (FSC 100%, FSC Mix, FSC Recycled)
- **FSC delivery note / packing list** — Must reference the FSC certificate number
- **FSC transaction certificate** (in some cases) — Documents the transfer of FSC material from one CoC holder to another

### Step 5: Check the Physical Product Labeling

FSC-certified paper products should carry the FSC label on the packaging, ream wrap, pallet label, or product itself. The label must include:
- The FSC logo
- The FSC label type (100%, Mix, or Recycled)
- The certificate number

## FSC Certification Costs and Implications

FSC-certified paper typically carries a modest premium compared to non-certified paper of the same grade. The premium reflects:

- Certification audit costs for the mill and trader
- Segregation and traceability costs throughout the supply chain
- More limited supply pool (only FSC-certified forests and controlled sources)

For most packaging and printing applications, the FSC premium is small relative to the total project cost — and the ability to offer FSC-labeled packaging to your own customers is often worth far more than the premium.

## FSC Chain of Custody: Why Every Link Matters

FSC chain of custody is like a chain: every company that handles the material between the forest and the end user must have FSC CoC certification for the final product to carry the FSC label.

A typical chain for paper exported from China:

1. **FSC-certified forest** (FM certified) → Fiber enters the supply chain
2. **Pulp mill** (CoC certified) → Converts wood to pulp; maintains FSC fiber identity
3. **Paper mill** (CoC certified) → Produces paper; FSC claim passes to the paper product
4. **Trader / exporter** (CoC certified) → Sells and ships the paper; FSC claim on invoice
5. **Importer / converter** (CoC certified, if labeling) → Converts paper into finished packaging; FSC label on finished product
6. **Brand owner / retailer** → Final FSC-labeled product reaches the consumer

If any link in this chain does not have CoC certification, the FSC claim is broken and the final product cannot carry an FSC label.

**Key point for buyers:** If you plan to sell FSC-labeled packaging to your customers, your own company may need FSC CoC certification. Check with your certification body or the FSC office in your country.

## FSC and Other Certifications: How They Compare

### FSC vs PEFC

PEFC (Programme for the Endorsement of Forest Certification) is another international forest certification system. Both FSC and PEFC are globally recognized, but FSC has stronger brand recognition in consumer-facing markets, especially in Europe and North America. Some buyers accept either; others specifically require FSC.

### FSC vs SFI

SFI (Sustainable Forestry Initiative) is primarily used in North America. It is less well recognized in European and Asian markets. If your customer base is global, FSC is typically the safer choice.

### FSC vs ISO 14001

ISO 14001 is an environmental management system standard. It certifies that a company has processes for managing environmental impact. It does NOT certify the fiber source or make claims about forest origin. FSC and ISO 14001 serve complementary but different purposes.

## Common FSC Mistakes Buyers Make

### Mistake 1: Assuming All of a Supplier's Products Are FSC Certified

A supplier may have FSC certification but only for specific product lines. Always confirm that the specific grade and product you are ordering is covered.

### Mistake 2: Not Keeping FSC Documentation

FSC documentation (invoices, delivery notes with certificate numbers) should be retained for at least five years. Auditors may request it, and your customers may need it for their own FSC claims.

### Mistake 3: Confusing FSC Mix with FSC Recycled

FSC Mix contains a proportion of recycled fiber but is not 100% recycled. FSC Recycled is 100% recycled fiber. If your brand claims require 100% recycled content, specify FSC Recycled — not FSC Mix.

### Mistake 4: Not Verifying the Certificate Online

It takes less than five minutes to check a certificate on info.fsc.org. Do it before placing your first order with a new supplier.

## How to Request FSC Paper from a Chinese Supplier

When requesting a quotation for FSC-certified paper, include this information:

- **FSC label required:** FSC 100%, FSC Mix, or FSC Recycled
- **FSC certificate number:** Request this from the supplier upfront
- **Documentation required:** FSC invoice, FSC packing list, FSC transaction certificate (if applicable)
- **On-product labeling:** Does the packaging need FSC labels on reams, pallets, or individual packs?
- **Destination market:** EU, USA, or other — labeling and documentation requirements may vary

A professional supplier should be able to provide the FSC certificate number and sample documentation upon request.

## FAQ

### How do I check if a paper supplier is really FSC certified?

Request their FSC certificate number (format: XXX-COC-XXXXXX) and verify it at info.fsc.org. The database will show the certificate status, holder name, scope, and validity dates.

### What is the difference between FSC Mix and FSC Recycled?

FSC Mix contains a blend of certified virgin fiber, recycled fiber, and/or controlled wood. FSC Recycled means 100% of the fiber is recycled (post-consumer or post-industrial).

### Does FSC certification mean the paper is food-safe?

No. FSC certifies forest management and chain of custody. Food-contact safety is certified under different standards (FDA, EU 1935/2004, GB 9685). A paper can be FSC certified without being food-safe, and vice versa.

### Is FSC paper more expensive?

FSC-certified paper typically carries a small premium (usually single-digit percentage) due to certification costs and more limited supply. For most packaging projects, the premium is small relative to the value of being able to offer FSC-labeled packaging.

### Do I need FSC certification to buy FSC paper?

You do not need FSC certification simply to purchase FSC-certified paper. However, if you want to sell products that carry the FSC label to your customers, your company may need FSC Chain of Custody certification.

### What happens if my shipment arrives without FSC documentation?

Without proper FSC documentation (invoice with certificate number and FSC claim), you cannot legally label the resulting products as FSC certified. Always confirm documentation requirements before shipment, not after.

## Suggested Internal Links

- [Grey Board — FSC Recycled rigid box board](/products/grey-board)
- [Woodfree Paper — FSC 100% available](/products/woodfree-paper)
- [Folding Box Board — FSC certified carton board](/products/folding-box-board)
- [Kraft Paper — FSC certified packaging kraft](/products/kraft-paper)
- [Sustainable Paper Packaging: FSC & Compliance Guide](./sustainable-paper-fsc-recycled-compliance-guide)
- [All Products & Categories](/products)
- [How to Source Paper from China — Complete Guide](./how-to-source-paper-from-china)`,image:`/images/products/package-board/grey-board-main.jpg`,tags:[`FSC certification`,`chain of custody`,`sustainability`,`compliance`,`forest stewardship`]},{id:`kraft-paper-vs-virgin-pulp-comparison`,title:`Kraft Paper vs Virgin Pulp Paper: Which Is Right for Your Packaging Project?`,seoTitle:`Kraft Paper vs Virgin Pulp Paper — Strength, Cost & Uses Compared | YOUNGSUN`,metaDescription:`Comparing kraft paper and virgin pulp paper: strength, appearance, cost, sustainability, recyclability, and best applications for bags, wrapping, packaging, and printing. Make the right grade choice.`,date:`2026-08-05`,author:`YOUNGSUN PAPER Editorial`,category:`Packaging`,excerpt:`Kraft paper and virgin pulp paper serve different purposes in packaging and printing. This comparison covers strength, appearance, cost, sustainability credentials, and how to choose between them for bags, wraps, cartons, and commercial print.`,content:`# Kraft Paper vs Virgin Pulp Paper: Which Is Right for Your Packaging Project?

One of the most fundamental choices in paper packaging procurement is between [kraft paper](/products/kraft-paper) and virgin pulp paper — two broad categories that cover the majority of paper and board products sourced internationally.

Kraft paper — with its distinctive natural brown color and high tear strength — communicates sustainability, simplicity, and durability. Virgin pulp papers — brighter, smoother, and more printable — deliver the clean surface and consistent performance required for premium printing and branded packaging.

But the choice is not simply aesthetic. These two paper families differ in fiber composition, strength properties, printing behavior, cost structure, sustainability profile, and converting performance. Choosing the right one — or knowing when to use both in combination — can make the difference between packaging that performs and packaging that disappoints.

## What Is Kraft Paper?

[Kraft paper](/products/kraft-paper) is produced through the kraft (sulphate) pulping process, which uses sodium hydroxide and sodium sulphide to separate lignin from cellulose fibers. The kraft process produces stronger fibers than mechanical pulping because it preserves more of the fiber length.

Kraft paper is characterized by:
- **High tear and tensile strength** — The strongest common paper grade relative to its weight
- **Natural brown color** — Unbleached kraft retains the brown color of the wood lignin residues
- **Coarse surface texture** — Less smooth than bleached papers
- **Excellent converting durability** — Resists tearing during bag forming, wrapping, and handling

Kraft paper is available in:
- **Natural brown kraft** — Unbleached, traditional kraft appearance
- **Bleached white kraft** — Bleached for a cleaner appearance while retaining kraft strength
- **Recycled kraft** — Made from recovered kraft fiber (OCC — old corrugated containers)

## What Is Virgin Pulp Paper?

"Virgin pulp paper" is a broad category encompassing paper grades made from first-use wood fiber (never previously made into paper). The fiber may come from the kraft, sulphite, mechanical, or chemi-thermomechanical (CTMP) pulping process.

Common virgin pulp papers include:
- **[Woodfree paper](/products/woodfree-paper)** — Uncoated, high-brightness paper for books, notebooks, commercial printing
- **[Folding box board (FBB)](/products/folding-box-board)** — Multi-layer carton board with mechanical pulp middle
- **[C2S art paper](/products/c2s-art-board)** — Double-coated premium printing paper
- **[Cupstock board](/products/cup-paper)** — Virgin-fibre board for paper cups

Virgin pulp papers are characterized by:
- **Higher brightness and whiteness** — Especially bleached chemical pulp grades
- **Smoother surface** — Better print reproduction, especially for halftone and process color
- **More consistent formation** — Uniform fiber distribution for predictable printing and converting
- **Wider range of finishes** — Coated, calendered, embossed, and specialty finishes available

## Side-by-Side Comparison

| Property | Kraft Paper | Virgin Pulp Paper (e.g., Woodfree) |
|----------|------------|-----------------------------------|
| **Fiber source** | Virgin softwood (typically pine/spruce) via kraft process; recycled kraft available | Virgin chemical or mechanical pulp (various wood species) |
| **Strength** | Highest tear and tensile strength per GSM | Moderate to high depending on grade |
| **Appearance** | Brown (natural) or white (bleached); coarse texture | White/cream; smooth surface |
| **Brightness** | Low (20–40% ISO for natural; 75–82% for bleached) | High (85–98% ISO) |
| **Printability** | Accepts simple flexo/offset; not ideal for high-quality process color | Excellent offset, flexo, digital, and gravure printing |
| **Cost per ton** | Lower (simpler process, unbleached options) | Higher (more refining, bleaching, coating) |
| **Sustainability signal** | Strong — natural brown kraft is visually associated with eco-friendly packaging | Variable — depends on certification and fiber source |
| **Recyclability** | Excellent — widely recycled in OCC stream | Excellent — widely recycled in mixed paper stream |
| **Biodegradability** | Naturally biodegradable | Naturally biodegradable |
| **Common GSMs** | 35–200 GSM | 60–400 GSM (
| **Common forms** | Rolls, sheets, bags | Sheets, reels |

## When to Choose Kraft Paper

Choose kraft paper when your packaging priorities are:

### 1. Strength and Durability
Kraft paper is the strongest common paper grade per unit weight. For paper shopping bags, industrial sacks, wrapping that must resist tearing, and packaging subject to rough handling, kraft is the material of choice.

**Typical applications:**
- Paper shopping bags
- Industrial sacks (cement, chemicals, animal feed)
- Protective wrapping and interleaving
- Envelopes and mailers
- Corrugated liner and medium

### 2. Natural / Eco Brand Positioning
Natural brown kraft paper has become a powerful visual shorthand for sustainability, simplicity, and environmental responsibility. Brands in food, fashion, organic products, handmade goods, and eco-conscious consumer segments choose kraft specifically for its visual message.

**Typical applications:**
- Eco-branded retail bags
- Artisanal bakery packaging
- Natural cosmetics packaging
- Sustainable fashion hang tags and packaging inserts
- Organic food wrapping

### 3. Cost-Sensitive Applications
Natural kraft paper is typically more economical per ton than bleached virgin pulp papers because it skips the bleaching and brightening stages. For volume packaging applications where print quality is secondary to function, kraft offers the best strength-to-cost ratio.

### 4. Industrial and Utility Packaging
Where packaging is functional — not decorative — kraft is the standard choice. It performs reliably in automated bagging, wrapping, and palletizing systems.

## When to Choose Virgin Pulp Paper

Choose virgin pulp paper when your packaging priorities are:

### 1. Print Quality
If the packaging surface must reproduce brand colors accurately, show photographic images, or carry fine text and detail, virgin pulp paper — especially coated grades like [C2S art board](/products/c2s-art-board) or [FBB](/products/folding-box-board) — is the standard choice.

**Typical applications:**
- Cosmetics and fragrance cartons
- Pharmaceutical packaging with fine print
- Branded retail cartons with photographic images
- Catalogs, brochures, and premium print

### 2. Brightness and Whiteness
For brands whose identity depends on clean, bright whites (medical, premium skincare, minimalist luxury), bleached virgin pulp papers provide the highest brightness levels (90%+ ISO).

### 3. Consistent Surface for Converting
High-speed carton forming, precise die-cutting, and tight-register printing all benefit from the uniform surface and formation of virgin pulp papers.

### 4. Food Contact (with Compliance)
For food-contact applications requiring specific compliance documentation (FDA, EU 1935/2004), virgin pulp papers are widely used because the fiber source and manufacturing process are well-documented. Kraft paper can also be used for food contact — especially for dry foods, bakery, and produce — but buyers must confirm the grade is manufactured to food-contact standards.

## Using Kraft and Virgin Pulp Together

Many packaging projects use both kraft and virgin pulp papers in complementary roles:

- **Kraft outer bag + virgin pulp printed insert card** — A natural kraft paper bag with a brightly printed C2S insert card combines eco-positioning with premium brand communication.
- **Virgin pulp printed carton + kraft inner wrap** — A high-quality printed retail carton with kraft tissue or kraft paper inner wrapping combines shelf appeal with product protection.
- **Kraft box exterior + virgin pulp printed label** — A kraft-finish rigid box with a C2S printed label or sticker combines texture with crisp branding.
- **[Grey board](/products/grey-board) structural base + kraft wrapping** — A rigid box made from grey board and wrapped with kraft paper for a natural, sturdy finish.

This combination approach lets you use each material where its properties are strongest — and avoid paying for properties you don't need everywhere.

## Sustainability: Kraft vs Virgin Pulp

Both kraft and virgin pulp papers can be sustainable choices — but the sustainability case is different for each:

### Kraft Paper Sustainability
- **Fiber source:** Typically softwood (pine, spruce) from managed forests. FSC certification available.
- **Recycled content:** Recycled kraft (from OCC) is widely available for brown grades.
- **Bleaching:** Natural kraft is unbleached — no chlorine or bleaching chemicals.
- **Visual signal:** The brown color itself communicates "eco-friendly" to consumers, even before any label or certification is read.

### Virgin Pulp Paper Sustainability
- **Fiber source:** Can be FSC 100% certified virgin fiber from responsibly managed forests.
- **Bleaching:** Modern mills use ECF (elemental chlorine-free) or TCF (totally chlorine-free) bleaching.
- **Recycled content:** Virgin pulp papers can include post-consumer recycled content in some grades, but by definition they contain a significant proportion of first-use fiber.
- **Performance efficiency:** Higher stiffness per GSM means less material weight for the same carton performance — a sustainability advantage that is measured in logistics efficiency, not just fiber source.

**Neither is automatically "better" for the environment.** The sustainable choice depends on the specific grade, fiber source, certification, manufacturing process, transport distance, and end-of-life pathway. FSC certification is the most reliable indicator for both kraft and virgin pulp papers.

## Cost Comparison

On a per-ton basis, natural kraft paper is generally less expensive than virgin pulp papers of equivalent GSM. However, per-ton cost is not the whole story:

- Kraft paper may be used at a lighter GSM due to its higher strength, reducing total tonnage for a given number of bags or wraps.
- Virgin pulp paper may command a higher price for the finished packaging because of its superior print quality and premium appearance.

For buyers, the right comparison is **total packaging cost per unit** — not cost per ton of paper.

## How to Choose: A Decision Framework

Ask these questions to decide between kraft and virgin pulp paper:

1. **What is the primary function:** Strength/durability or print/brand appearance?
2. **What printing method and quality level is required?**
3. **What is the brand positioning:** Natural/eco or premium/refined?
4. **Is the packaging subject to rough handling or moisture?**
5. **What certification (FSC, food-contact, etc.) is required?**
6. **What is the target cost per finished unit?**
7. **Will the packaging be visible to the end consumer (retail) or functional (industrial)?**

## FAQ

### Is kraft paper stronger than regular paper?

Yes. Kraft paper has significantly higher tear resistance and tensile strength than most other paper grades at equivalent GSM due to the kraft pulping process, which preserves longer fibers.

### Can kraft paper be printed in full color?

Kraft paper can be printed, but the natural brown background reduces color accuracy and contrast compared to white papers. Flexographic printing with opaque inks works well; full-color offset on natural kraft is challenging. For vibrant color printing, bleached white kraft or virgin pulp papers are better choices.

### Is kraft paper always brown?

Natural (unbleached) kraft paper is brown. Bleached kraft paper is white or cream. Both are available.

### Is virgin pulp paper more sustainable than kraft?

Not necessarily. Both can be sustainable when FSC certified and sourced responsibly. Natural kraft avoids bleaching chemicals; virgin pulp papers can offer higher stiffness per GSM (less material for the same performance). The specific certification, fiber source, and manufacturing process matter more than the general category.

### Which is cheaper — kraft or virgin pulp paper?

Natural kraft paper is generally less expensive per ton than virgin pulp paper. However, total packaging cost depends on GSM, converting, and the value of the finished product.

### Can kraft paper be used for food packaging?

Yes. Kraft paper is widely used for food bags, bakery wrapping, produce packaging, and dry food packaging. For food-contact applications, confirm the grade is manufactured to the required food-safety standard for your target market.

## Suggested Internal Links

- [Kraft Paper — natural & bleached packaging grades](/products/kraft-paper)
- [Woodfree Paper — uncoated virgin pulp printing paper](/products/woodfree-paper)
- [Folding Box Board — virgin fiber carton board](/products/folding-box-board)
- [C2S Art Board — coated premium printing board](/products/c2s-art-board)
- [Grey Board — FSC Recycled structural board](/products/grey-board)
- [Duplex Board — cost-effective carton board](/products/duplex-board)
- [All Products & Categories](/products)
- [Grey Board vs Duplex Board — Complete Comparison](./grey-board-vs-duplex-board-comparison)`,image:`/images/products/culture-paper/copy-paper-main.jpg`,tags:[`kraft paper`,`virgin pulp`,`paper comparison`,`packaging paper`,`sustainability`]},{id:`black-paper-color-card-packaging-guide`,title:`Black Paper and Color Card: The Complete Guide to Colored Paperboard for Premium Packaging`,seoTitle:`Black Paper and Color Card Supplier for Luxury Packaging | YOUNGSUN`,metaDescription:`Compare black paper (virgin, recycled, laminated), color card (standard, deep, embossed) and gold/silver card for premium packaging, hang tags and stationery. Custom sizes available.`,date:`2026-07-23`,author:`YOUNGSUN PAPER Editorial`,category:`Design`,excerpt:`Black paper and color card paper give packaging, tags and stationery instant visual identity. This guide compares grades, finishes, converting compatibility and sourcing considerations for international buyers.`,content:`# Black Paper and Color Card: The Complete Guide to Colored Paperboard for Premium Packaging

Color is one of the most immediate signals of quality in packaging. A deep black box suggests luxury. A rich navy hang tag communicates sophistication. A vibrant red folder stands out on a retail shelf. For brands that want packaging to make an impression before the product is even touched, colored paperboard is a strategic material choice.

This guide covers three essential categories: [black paper](/products/black-paper), [color card paper](/products/color-card-paper), and [gold/silver card](/products/gold-silver-card) — what they are, how they differ, and how to select the right grade for your application.

## Black Paper: Depth and Drama

Black paper and black cardboard are among the most popular colored paperboard grades for premium packaging. Unlike surface-printed black, true [black paper](/products/black-paper) is through-dyed — the color runs through the entire sheet, which means clean edges on cuts and folds with no white line showing.

### Available Grades

YOUNGSUN supplies black paper in three configurations:

- **Virgin Black Paper (80–600 gsm):** Made from virgin fiber with a uniform black appearance and excellent surface for printing, foil stamping, and embossing.
- **Recycled Black Paper (80–600 gsm):** Post-consumer recycled fiber with the same through-dyed black quality, supporting sustainability goals.
- **Laminated Heavy Black Board (up to 1500 gsm):** Multiple plies of black paper bonded together for heavy structural applications like rigid boxes and book covers.

### Key Specifications

| Property | Value |
|----------|-------|
| Grammage | 80–1500 gsm |
| Single-ply range | 80–600 gsm |
| Color | Through-dyed black (not surface-printed) |
| Stock sheet sizes | 787×1092 mm, 889×1194 mm |
| Supply forms | Sheets, reels, custom-cut sizes |

### Converting Compatibility

Black paper performs well with:
- Hot foil stamping (gold, silver, copper, holographic)
- Screen printing
- UV printing and spot UV
- Embossing and debossing
- Die-cutting
- Lamination

The through-dyed construction means that die-cut edges, folded corners, and creased lines all remain black — a critical detail for premium packaging where every visible edge matters.

### Common Applications

- Luxury rigid box lining and wrapping
- Hang tags and swing tickets for apparel and accessories
- Greeting cards and invitation cards
- Photo albums and scrapbooks
- High-end retail shopping bags
- Business cards and presentation folders
- Book covers and endpapers

## Color Card Paper: A Spectrum of Possibilities

[Color card paper](/products/color-card-paper) opens up branding possibilities beyond black and white. Available in a broad palette of standard, deep, and embossed colors, it combines uniform shade consistency with clean converting performance.

### Color Categories

- **Standard Colors:** A curated range of common shades — reds, blues, greens, yellows, pinks, and neutrals — stocked for regular availability.
- **Deep Colors:** Richer, more saturated versions of standard colors for higher-impact branding.
- **Embossed Colors:** Color card paper with a pressed texture pattern, combining color with tactile interest in a single sheet.

### Key Specifications

| Property | Value |
|----------|-------|
| Grammage | 110–400 gsm |
| Common weights | 110, 150, 180, 230, 250, 300, 350, 400 gsm |
| Stock sheet sizes | 787×1092 mm, 889×1194 mm |
| Surface options | Smooth uncoated, embossed |
| Supply forms | Sheets, reels, custom-cut sizes |

### Converting Compatibility

Color card paper is compatible with:
- Offset printing (selected grades)
- Hot foil stamping
- Screen printing
- UV printing
- Embossing and debossing
- Die-cutting, scoring, and folding
- Lamination

Not all colors and finishes are equally printable. Darker and deeply saturated colors may require white underprinting or be better suited to foil stamping and screen printing than offset. Always test with your specific ink, color, and press conditions.

### Custom Color Matching

For brands with specific color requirements, custom color matching is available subject to minimum order quantity. This is particularly valuable for:
- Brand identity packaging with exact Pantone or brand-color requirements
- Coordinated packaging suites (box + tag + insert in matching color)
- Seasonal or limited-edition product launches

## Gold and Silver Card: Metallic Brilliance

[Gold and silver card paper](/products/gold-silver-card) features a brilliant metallic surface achieved through foil lamination or metallic coating. It is used when packaging needs maximum visual impact — gift boxes, certificate covers, premium hang tags, and celebratory packaging.

These papers work exceptionally well with:
- Debossing (pressing design into the metallic surface)
- Overprinting with transparent or opaque inks
- Spot UV contrast effects
- Die-cutting for shaped cards and tags

## How to Choose Between Black Paper and Color Card

The choice depends on three main factors:

### 1. Brand Identity
- **Black paper:** Luxury, minimalism, sophistication, modernity
- **Color card:** Brand color matching, playfulness, category coding (e.g., navy for men's grooming, blush for beauty)
- **Gold/silver card:** Celebration, prestige, gifting, certification

### 2. Printing Requirements
- If you need full-color offset printing on the paper surface, choose lighter color card shades or uncoated white/black grades rated for offset.
- If the design relies on foil stamping, embossing, or screen printing, darker and more saturated colors work well.
- Black paper with gold or silver foil is a classic luxury combination that requires no process-color printing on the black surface.

### 3. Structural Requirements
- For lightweight tags and cards: 110–250 gsm color card or single-ply black paper.
- For rigid boxes and structural packaging: laminated heavy black board (up to 1500 gsm) or grey board wrapped with color/black paper.
- For flexible packaging and bags: lighter grammages (80–150 gsm) in reel form.

## Sourcing Considerations for International Buyers

### Minimum Order Quantity
Standard MOQ is 1 metric ton. For custom color matching, minimums may be higher depending on the color formulation and grammage.

### Sampling
Free samples of standard colors and black paper grades are available for evaluation. Request samples of the exact grammage and finish you intend to use — a 120 gsm sample does not represent the performance of 350 gsm.

### Lead Time
Standard lead time is 2–3 weeks from order confirmation. Custom color matching may add 1–2 weeks depending on complexity.

### What to Prepare for a Quote
- Color reference (Pantone code, physical sample, or color description)
- Required grammage
- Sheet or reel size
- Quantity
- Intended application
- Destination port

### Container Loading
A 40HQ container typically holds 25 metric tons of paperboard. Mixed loads combining multiple colors, grammages, or products can be arranged.

## Design Tips for Working with Colored Paperboard

1. **Use foil, not ink, on dark papers.** Gold, silver, white, or holographic foil stamping reads clearly on black and dark-colored papers without the opacity challenges of light ink on dark stock.

2. **Consider the edge.** One advantage of through-dyed black paper and color card is that cut edges match the surface. Use this as a design feature — visible edge detail on hang tags, business cards, and book covers.

3. **Test embossing depth.** Heavier grammages (250 gsm and above) can support deeper embossing. Test your die on the actual production stock — results vary with fibre composition and density.

4. **Coordinate across the packaging suite.** Using the same color card for the outer box, inner card, hang tag, and envelope creates a cohesive unboxing experience.

5. **Pair texture with color.** Embossed color card combines two sensory dimensions in one material — the visual signal of color plus the tactile signal of texture.

## FAQ

### What is the difference between surface-printed black and through-dyed black paper?
Surface-printed black has black ink or coating only on the surface — cut edges and folds show the original paper color (usually white or grey). Through-dyed black paper is colored throughout the sheet, so edges remain black when cut or folded.

### Can black paper be printed with white ink?
Yes, but opacity can be challenging. Screen printing and foil stamping typically produce better results than offset white ink on black paper.

### What is the minimum order for custom color matching?
Custom color matching is available subject to minimum order quantity, typically starting from 3–5 metric tons depending on the color formulation.

### Is color card paper FSC certified?
Yes. YOUNGSUN color card paper and black paper are available with FSC certification.

## Suggested Internal Links

- [Black Paper — through-dyed luxury black paperboard](/products/black-paper)
- [Color Card Paper — standard, deep & embossed colors](/products/color-card-paper)
- [Gold & Silver Card — metallic brilliance for premium packaging](/products/gold-silver-card)
- [All Products & Categories](/products)
- [Fancy Paper Collection — 120+ textures](/fancy-paper-collection)`,image:`/images/blog-articles/black-paper-color-card-packaging-guide.jpg`,tags:[`black paper`,`color card paper`,`colored paperboard`,`luxury packaging`]},{id:`cupstock-greaseproof-food-packaging-technical-guide`,title:`Cupstock and Greaseproof Paper: A Technical Buyer's Guide to Food-Safe Paper Packaging`,seoTitle:`Cupstock Board and Greaseproof Paper Supplier | YOUNGSUN`,metaDescription:`Technical guide to cupstock board (160-330 gsm), greaseproof paper (35-60 gsm, KIT 6+), PE coated paper and silicone coated paper for food packaging. FSC certified, bulk export.`,date:`2026-07-23`,author:`YOUNGSUN PAPER Editorial`,category:`Products`,excerpt:`Food packaging paper must balance safety, strength, and converting performance. This technical guide covers cupstock, greaseproof, PE coated, and silicone coated paper — specifications, certifications, and sourcing best practices.`,content:`# Cupstock and Greaseproof Paper: A Technical Buyer's Guide to Food-Safe Paper Packaging

Food packaging is one of the most technically demanding segments of the paper industry. The paper must be safe for food contact, resistant to grease or moisture, strong enough to hold hot liquids or heavy contents, and compatible with high-speed converting equipment. A single specification gap — the wrong grammage, an insufficient KIT rating, or a missing compliance document — can disrupt an entire production run.

This guide covers four essential food-grade paper and board categories: [cupstock board](/products/cup-paper), [greaseproof paper](/products/greaseproof-paper), [PE coated paper](/products/pe-coated-paper), and [silicone coated paper](/products/silicone-coated-paper).

## Cupstock Board: The Foundation of Paper Cups

[Cupstock board](/products/cup-paper) is a virgin-fibre paperboard developed specifically for paper cup manufacturing and food container converting. It must deliver reliable forming performance on high-speed cup-making machines while providing a clean surface for food-service branding and graphics.

### Technical Specifications

| Property | Value |
|----------|-------|
| Grammage range | 160–330 gsm |
| Common weights | 160, 170, 190, 210, 230, 240, 250, 260, 280, 300, 310, 330 gsm |
| Fiber type | Virgin fibre |
| Surface | Uncoated cupstock base board |
| PE coating compatibility | Single-side PE, double-side PE |
| Supply forms | Sheets, reels, custom sizes |

### Choosing the Right Grammage

Cup grammage selection depends on cup size, contents, and whether the cup is for hot or cold beverages:

- **160–190 gsm:** Small cups (4–8 oz), typically cold drinks
- **210–250 gsm:** Medium cups (8–16 oz), hot and cold beverages
- **260–330 gsm:** Large cups (16–24 oz), heavyweight hot cups, and food containers

Higher grammage provides more insulation and rigidity but increases material cost and cup weight. The optimal grammage balances structural performance with cost efficiency for the specific cup format.

### PE Coating Options

Cupstock can be supplied uncoated for in-house PE coating, or with single-side or double-side PE coating applied. Single-side PE coating (inside the cup) provides liquid barrier for cold drinks. Double-side PE coating (inside and outside) is typically used for hot drinks to prevent condensation from softening the outer surface.

For buyers who manage PE coating in their own converting process, uncoated cupstock base board is the standard supply form. For buyers who require ready-to-convert PE-coated board, coated options are available subject to order specifications.

### Key Converting Properties

- **Forming performance:** The board must form clean cup sidewalls without cracking, splitting, or delamination at high machine speeds.
- **Printing surface:** The outside surface should accept flexographic or offset printing for brand graphics.
- **Sealing behavior:** The PE coating must heat-seal reliably at cup-forming temperatures.
- **Rim curl:** The top edge must curl cleanly to form the drinking rim without tearing.

### Applications

- Hot drink cups (coffee, tea)
- Cold drink cups (soft drinks, iced coffee, smoothies)
- Food containers (soup, noodles, salad bowls)
- Ice cream cups and tubs
- Takeaway packaging

## Greaseproof Paper: Barrier Without Coating

[Greaseproof paper](/products/greaseproof-paper) achieves oil and grease resistance through intensive fiber refining (mechanical treatment), not through chemical coating. The highly hydrated and fibrillated fibers create a dense, closed sheet structure that physically blocks grease penetration — a different mechanism from PE-coated or chemically treated papers.

### Technical Specifications

| Property | Value |
|----------|-------|
| Grammage range | 35–60 gsm |
| Common weights | 35, 40, 50, 60 gsm |
| Grease resistance | 3M KIT level 6 or higher |
| Color options | White, natural |
| Supply forms | Sheets, reels, custom-cut formats |

### Understanding KIT Ratings

The 3M KIT test is the standard method for measuring grease resistance in paper. It uses a series of 12 test solutions (KIT 1 through KIT 12) with increasing aggressiveness. A higher KIT number means better grease resistance.

For food-service applications:
- **KIT 5–6:** Suitable for dry or low-grease foods (bread, pastries, cookies)
- **KIT 7–8:** Suitable for moderate-grease foods (burgers, sandwiches, fried chicken)
- **KIT 9+:**  Suitable for high-grease foods (fries, oily snacks, cheese)

YOUNGSUN greaseproof paper is rated at KIT level 6 or higher for the referenced grade. Buyers with specific KIT requirements should specify the target level when requesting a quotation.

### White vs. Natural Greaseproof

- **White greaseproof:** Bleached for a clean, bright appearance. Preferred for bakery wrapping, branded food-service packaging, and applications where food visibility matters.
- **Natural greaseproof:** Unbleached, maintaining the natural brown fiber color. Preferred for eco-branded packaging, rustic or artisanal food presentation, and sustainability-focused brands.

### Converting and Printing

Greaseproof paper can be:
- Cut to sheet or roll format
- Printed with flexographic or offset methods (pre-print or post-print)
- Folded, wrapped, or bag-formed
- Interleaved between food layers

Custom printing is available for branded sheets, wraps, and bags — a key value-add for QSR chains and food-service brands.

### Applications

- Bakery wrapping (pastries, bread, croissants)
- Burger and sandwich wraps
- Fried food liners and baskets
- Takeaway bags and pouches
- Tray liners for food service
- Confectionery wrapping
- Food interleaving (separating layers of cheese, meat, or pastry)

## PE Coated Paper: Barrier by Lamination

[PE coated paper](/products/pe-coated-paper) consists of a paper or board substrate extrusion-coated with a layer of polyethylene on one or both sides. The PE layer provides moisture resistance, liquid barrier performance, and heat-sealing capability — properties that the paper substrate alone cannot deliver.

### Common Configurations

- **Single-side PE coated:** Barrier on one face. Used for wrap materials, cup stock (when only the inside needs liquid barrier), and general moisture-resistant packaging.
- **Double-side PE coated:** Barrier on both faces. Used for cups (hot drinks), food containers, and applications requiring both internal liquid barrier and external condensation resistance.

### Substrate Options

PE coating can be applied to different paper and board substrates depending on the application:
- Cupstock board for paper cups
- Kraft paper for wraps and bags
- White paperboard for food containers

### Heat-Sealing Performance

One key advantage of PE coated paper is heat-sealing capability. Under heat and pressure, the PE layer melts and bonds to itself, creating a strong, leak-proof seal. This is essential for cup side-seam sealing, lid attachment, and pouch or bag forming.

## Silicone Coated Paper: Non-Stick Release Performance

[Silicone coated paper](/products/silicone-coated-paper) — also called silicone release paper or non-stick baking paper — has a silicone coating applied to one or both sides, creating a surface that food, adhesive, or other substances will not stick to.

### Key Properties

- **Non-stick surface:** Food releases cleanly without oil or grease.
- **Heat resistance:** Suitable for baking temperatures (typically up to 220°C / 428°F).
- **Moisture resistance:** The silicone layer provides moisture barrier in addition to release performance.
- **Reusable:** Depending on application and care, silicone coated paper can be used multiple times.

### Applications

- Baking paper and parchment
- Food wrapping for sticky or moist products
- Release liners for adhesive labels and tapes
- Industrial release applications

## Food Safety Certifications and Compliance

For international buyers, food-contact compliance documentation is essential. Different markets have different regulatory frameworks:

| Market | Regulation | Key Requirements |
|--------|-----------|------------------|
| USA | FDA 21 CFR 176.170/180 | Components safe for food contact |
| EU | EU 1935/2004 and EU 10/2011 | Overall migration limits, positive list |
| China | GB 9685 | Positive list for food contact materials |

When sourcing food-grade paper and board, always:
1. Specify the target market and required compliance standard
2. Request the relevant compliance documentation from the supplier
3. Confirm whether the compliance covers the base paper, the coating, or both
4. Verify that compliance is valid for your specific food type (fatty, aqueous, acidic, dry) and temperature conditions (hot fill, ambient, frozen)

YOUNGSUN provides FSC certification as standard. For specific food-contact compliance documentation, buyers should specify requirements when requesting a quotation.

## Practical Buyer Checklist

Before placing an order for food-grade paper or board, confirm:

- Product type and application
- Required grammage
- PE coating: none, single-side, or double-side
- For greaseproof: KIT level requirement
- Sheet or reel size
- Food type the packaging will contact (fatty, aqueous, acidic, dry)
- Hot, ambient, or frozen service temperature
- Target market (USA, EU, China, other)
- Required compliance documentation
- Printing requirements (pre-converting or post-converting)
- Quantity
- Destination port

## Conclusion

Food packaging paper and board are technical products where specification accuracy matters. Cupstock grammage must match cup size and contents. Greaseproof KIT rating must match the food's grease load. PE coating configuration must match the liquid barrier and sealing requirements. Compliance documentation must match the target market.

The most successful food packaging projects start with a clear specification shared between buyer and supplier. When both sides understand the application, the food type, the converting process, and the compliance requirements, sampling, pricing, and production proceed more smoothly.

## FAQ

### What is the difference between greaseproof paper and PE coated paper?
Greaseproof paper achieves barrier through dense fiber structure (mechanical treatment). PE coated paper achieves barrier through a polyethylene coating layer (extrusion lamination). Greaseproof is typically used for wraps and liners; PE coated paper is typically used for cups and containers requiring liquid barrier.

### What KIT rating do I need for burger wrap?
KIT 6–8 is typically sufficient for burgers and sandwiches. Higher-fat products like fried chicken or cheese may require KIT 8+.

### Can cupstock be used without PE coating?
Uncoated cupstock can be used for cold drinks with an aqueous or wax coating applied during converting, but PE coating is the industry standard for reliable liquid barrier and heat-sealing performance.

### Is FSC certification available for food-grade papers?
Yes. YOUNGSUN food-grade paper and board products are available with FSC certification.

## Suggested Internal Links

- [Cupstock Board — 160–330 gsm virgin-fibre cup paper](/products/cup-paper)
- [Greaseproof Paper — KIT 6+ oil-resistant food wrap](/products/greaseproof-paper)
- [PE Coated Paper — moisture barrier & heat-seal packaging](/products/pe-coated-paper)
- [Silicone Coated Paper — non-stick release baking paper](/products/silicone-coated-paper)
- [Kraft Paper — natural kraft for bags and wraps](/products/kraft-paper)
- [All Products & Categories](/products)`,image:`/images/blog-articles/cupstock-greaseproof-food-packaging-guide.jpg`,tags:[`cupstock`,`greaseproof paper`,`food packaging`,`paper cups`,`PE coated paper`]},{id:`how-to-choose-right-paperboard-packaging`,title:`How to Choose the Right Paperboard for Your Packaging Project`,seoTitle:`How to Choose Paperboard for Packaging | YOUNGSUN PAPER`,metaDescription:`Compare grey board, folding box board, duplex board, C2S art board, kraft paper and PE coated paper for packaging projects.`,date:`2026-07-03`,author:`YOUNGSUN PAPER Editorial`,category:`Packaging`,excerpt:`Different packaging projects require different paperboard. This guide explains how to choose by structure, printing, surface, food contact and cost.`,content:`# How to Choose the Right Paperboard for Your Packaging Project

Choosing paperboard is not only a price decision. The right board affects print quality, folding strength, box structure, shelf appearance, shipping protection and the customer’s first impression of a product.

For packaging buyers, the most important question is simple: what does the finished package need to do?

Some packages need to look premium. Some need to protect weight. Some need to fold cleanly at high speed. Some need moisture resistance. Some need food-contact suitability. The right paperboard depends on the final application.

## Start With the Packaging Type

Before comparing paper grades, define the packaging format:

- Rigid box
- Folding carton
- Paper bag
- Display card
- Sleeve
- Tag or insert
- Food cup or takeaway packaging
- Book cover or folder

Each format has different requirements. A rigid gift box usually needs [grey board](/products/grey-board) as a structural base. A retail carton usually needs [folding box board](/products/folding-box-board) or [duplex board](/products/duplex-board). A high-end printed card may need [C2S art board](/products/c2s-art-board). A paper bag may need [kraft paper](/products/kraft-paper).

## Grey Board for Rigid Structure

Grey board is suitable when the packaging needs thickness and structure. It is commonly used for rigid boxes, book covers, folders, puzzles and premium packaging bases.

Choose grey board when you need:

- High stiffness
- Stable thickness
- Good mounting or wrapping performance
- Cost-effective structure
- Recycled fiber options

Grey board is usually not the best choice for direct high-quality color printing. It is often covered with printed paper, fancy paper, leatherette paper or other decorative material.

## Folding Box Board for Retail Cartons

Folding box board, often called FBB, is widely used for retail boxes. It normally has a good printing surface and folding performance, making it suitable for cosmetics, healthcare products, food cartons and consumer goods packaging.

Choose folding box board when you need:

- Clean printing surface
- Good folding strength
- Retail carton appearance
- Lightweight but stable packaging
- Better shelf presentation

FBB is a strong option when the package must be printed, creased, folded and glued efficiently.

## Duplex Board for Cost-Effective Printed Packaging

Duplex board usually has a coated white top side and grey back. It is commonly used for cartons, display packaging, backing boards and general printed packaging.

Choose duplex board when you need:

- Printable coated surface
- Economical carton board
- Good stiffness for the price
- Retail or industrial packaging use

It is often a practical choice for large-volume packaging where cost control matters.

## C2S Art Board for Premium Printing

C2S art board card has coated surfaces on both sides, giving it strong print quality and a refined appearance. It is suitable for premium cards, covers, sleeves, catalogues and high-quality packaging inserts.

Choose C2S art board when you need:

- High-quality color printing
- Smooth coated surface
- Premium finish
- Printing on both sides
- Display cards or packaging sleeves

It is often used where visual quality is more important than heavy structural strength.

## Kraft Paper for Natural and Strong Packaging

Kraft paper is known for strength and a natural appearance. It is widely used for paper bags, wrapping, envelopes, liners and eco-style packaging.

Choose kraft paper when you need:

- Natural brown or white kraft appearance
- High tear strength
- Recyclable packaging feel
- Bags, wrapping or liners
- Sustainable brand positioning

Kraft paper works well for brands that want a simple, natural and durable packaging style.

## PE Coated Paper for Barrier Requirements

[PE coated paper](/products/pe-coated-paper) has a polyethylene coating that improves moisture resistance and heat-sealing performance. It is commonly used for paper cups, food packaging and disposable packaging.

Choose PE coated paper when you need:

- Moisture resistance
- Heat-seal ability
- Cup stock
- Food service packaging
- Liquid or grease barrier support

For food-contact applications, buyers should always confirm the required compliance documents for the target market.

## Practical Buyer Checklist

Before placing an order, confirm:

- Product application
- GSM or thickness
- Roll or sheet format
- Sheet size or roll width
- Printing method
- Surface finish
- Certification requirements
- Packing method
- Destination port
- Quantity and delivery schedule

Samples are important. A board that looks good on a data sheet still needs to run well on your printing, die cutting, folding or box-making line.

## Conclusion

The best paperboard is the one that matches the finished package. Grey board gives structure. Folding box board supports retail cartons. Duplex board balances printability and cost. C2S art board improves premium printing. Kraft paper adds natural strength. PE coated paper supports barrier packaging.

When sourcing paperboard, share the final use, size, quantity, printing method and destination with your supplier. A clear specification leads to better samples, faster quotation and fewer production problems.

## FAQ

### What is the best board for rigid boxes?

Grey board is commonly used as the structural base for rigid boxes.

### What board is best for printed retail cartons?

Folding box board or duplex board is commonly used for printed retail cartons.

### Is kraft paper suitable for luxury packaging?

Yes. Kraft paper can be used for natural, minimalist and eco-style luxury packaging.

### When should I choose PE coated paper?

Choose PE coated paper when moisture resistance, heat sealing or cup stock performance is required.

## Suggested Internal Links

- [All Products & Categories](/products)
- [Grey Board — rigid box & structural board](/products/grey-board)
- [Folding Box Board — retail carton board](/products/folding-box-board)
- [Kraft Paper — bags, wrap & industrial packaging](/products/kraft-paper)
- [Duplex Board — cost-effective printed cartons](/products/duplex-board)`,image:`/images/blog-articles/how-to-choose-right-paperboard-packaging.jpg`,tags:[`paperboard for packaging`]},{id:`specialty-paper-luxury-branding`,title:`Specialty Papers: The Secret Weapon of Luxury Brand Packaging`,seoTitle:`Fancy Paper for Luxury Packaging | YOUNGSUN PAPER`,metaDescription:`Explore how soft touch paper, leather paper, pearlescent paper, embossed paper, label paper and tracing paper improve luxury packaging and brand presentation.`,date:`2026-07-04`,author:`YOUNGSUN PAPER Editorial`,category:`Packaging`,excerpt:`Fancy paper can turn ordinary packaging into a memorable brand experience through texture, color, shimmer and transparency.`,content:`# Specialty Papers: The Secret Weapon of Luxury Brand Packaging

Luxury packaging is not only about structure. It is about surface, touch and memory. A customer may forget the exact dimensions of a box, but they remember the feel of [soft-touch paper](/products/soft-touch-paper), the shimmer of [pearlescent paper](/products/pearlescent-paper) or the texture of an [embossed paper](/products/embossed-paper) cover.

Fancy paper, also called specialty paper, gives brands a way to express quality before the product is even opened.

## What Is Fancy Paper?

Fancy paper is a broad category of decorative and tactile paper grades. These papers are selected for texture, color, finish, transparency, shimmer or surface effect.

Common fancy paper types include:

- Soft touch paper
- Leather paper
- Pearlescent paper
- Embossed paper
- Label paper
- Tracing paper
- Linen texture paper
- Metallic paper

They are widely used in packaging, tags, covers, invitations, stationery, labels, inserts and brand communication materials.

## Why Fancy Paper Matters in Branding

Packaging is often the first physical contact between a brand and a customer. Fancy paper helps create a stronger impression because it adds sensory detail.

It can communicate:

- Premium quality
- Natural elegance
- Modern minimalism
- Craftsmanship
- Luxury positioning
- Creative identity

For cosmetics, fragrance, fashion, jewelry, wine, gifts and boutique products, surface material is part of the brand story.

## Soft Touch Paper

[Soft touch paper](/products/soft-touch-paper) has a smooth, velvety surface feel. It is often used for luxury boxes, book covers, hangtags, cards and premium printed pieces.

Choose soft touch paper when you want:

- Smooth matte feel
- Elegant low-gloss surface
- Premium hand feel
- Modern luxury appearance

It works well with simple typography, metallic stamping, embossing and deep-color designs.

## Leather Paper

[Leather paper](/products/leather-paper) has a leather-like texture. It is suitable for covers, folders, rigid boxes, luxury packaging and products that need a tactile surface.

Choose leather paper when you want:

- Strong texture
- Classic luxury feel
- Durable visual impression
- Packaging with depth and character

Leather paper is often used in gift boxes, wine packaging, notebooks and premium folders.

## Pearlescent Paper

[Pearlescent paper](/products/pearlescent-paper) has a soft shimmer effect. It reflects light gently and gives packaging a refined decorative quality.

Choose pearlescent paper for:

- Gift packaging
- Cosmetic packaging
- Invitations
- Labels
- Premium cards
- Decorative sleeves

It is especially useful when the design needs elegance without heavy color or complex printing.

## Embossed Paper

[Embossed paper](/products/embossed-paper) has raised or pressed texture patterns. It can be used to create fabric-like, geometric, linen, leather or custom patterns.

Choose embossed paper when you want:

- Strong tactile identity
- Decorative surface pattern
- Better visual depth
- Premium packaging finish

Embossed paper often works well for box wrapping, covers, hangtags and stationery.

## Tracing Paper

[Tracing paper](/products/tracing-paper) is translucent and smooth. It is often used for overlays, inserts, sleeves, invitations and layered packaging design.

Choose tracing paper when you want:

- Soft transparency
- Layered visual effect
- Elegant inserts
- Minimalist design
- Invitation or sleeve applications

Tracing paper can make packaging feel lighter, more refined and more designed.

## How to Choose Fancy Paper

When choosing fancy paper, consider:

- Brand style
- Required texture
- Printing compatibility
- Folding and wrapping performance
- GSM
- Color stability
- Surface durability
- Final converting process

Always test the paper with printing, stamping, glue, folding and lamination if those processes are part of production.

## Conclusion

Fancy paper is a powerful material for brands that want packaging to feel premium. It adds touch, visual depth and emotional quality to boxes, tags, labels, covers and inserts.

For packaging buyers, the right fancy paper should match both design intent and production reality. A beautiful paper must also print, fold, wrap and convert reliably.

## FAQ

### What is fancy paper used for?

Fancy paper is used for premium packaging, covers, tags, labels, invitations, sleeves, inserts and brand materials.

### Which fancy paper is best for luxury boxes?

Soft touch paper, leather paper, pearlescent paper and embossed paper are commonly used for luxury boxes.

### Can fancy paper be printed?

Many fancy paper grades can be printed, but results depend on texture, coating, ink and printing method.

### What is tracing paper used for in packaging?

Tracing paper is often used for translucent sleeves, overlays, inserts and layered packaging effects.

## Suggested Internal Links

- [All Fancy Paper Products](/products/fancy-paper)
- [Soft Touch Paper — velvet-smooth luxury feel](/products/soft-touch-paper)
- [Leather Paper — animal-free leather texture](/products/leather-paper)
- [Pearlescent Paper — pearl shimmer finish](/products/pearlescent-paper)
- [Embossed Paper — 3D textured surface](/products/embossed-paper)`,image:`/images/blog-articles/specialty-paper-luxury-branding.jpg`,tags:[`fancy paper`]},{id:`food-packaging-paper-buyer-guide`,title:`Food Packaging Paper: A Practical Buyer Guide for Cups, Wraps and Grease-Resistant Packaging`,seoTitle:`Food Packaging Paper Buyer Guide | YOUNGSUN PAPER`,metaDescription:`A practical guide to cup paper, greaseproof paper, silicone coated paper and coated food packaging paper for buyers and converters.`,date:`2026-07-05`,author:`YOUNGSUN PAPER Editorial`,category:`Packaging`,excerpt:`Food packaging paper must match the application, barrier needs, converting process and destination market requirements.`,content:`# Food Packaging Paper: A Practical Buyer Guide for Cups, Wraps and Grease-Resistant Packaging

Food packaging paper must do more than look clean. It needs to protect food, run well on converting equipment, match the final application and meet the documentation requirements of the destination market.

For buyers of cups, wraps, bakery bags, tray liners and takeaway packaging, choosing the right paper grade is an important sourcing decision.

## Main Types of Food Packaging Paper

Food packaging paper covers several different product types. The most common include:

- [Cup paper](/products/cup-paper)
- [Greaseproof paper](/products/greaseproof-paper)
- [Silicone coated paper](/products/silicone-coated-paper)
- [PE coated paper](/products/pe-coated-paper)
- Kraft food packaging paper
- Tray liner paper
- Bakery wrapping paper

Each type has a different function. [Cup paper](/products/cup-paper) needs stiffness and coating compatibility. [Greaseproof paper](/products/greaseproof-paper) needs oil resistance. [Silicone coated paper](/products/silicone-coated-paper) needs release performance. [PE coated paper](/products/pe-coated-paper) needs moisture resistance and heat-sealing properties.

## Cup Paper

Cup paper is used for paper cups and beverage packaging. It usually needs good stiffness, smooth surface quality and compatibility with barrier coating.

Important points for cup paper buyers:

- GSM and stiffness
- Roll width or sheet size
- Coating compatibility
- Printing surface
- Cup forming performance
- Heat-sealing requirements
- Food-contact documentation

Cup paper may be coated with PE or other barrier systems depending on the final cup design and market requirements.

## Greaseproof Paper

Greaseproof paper is used for foods that contain oil or fat. It is common in bakery packaging, burger wrapping, sandwich paper, fries bags and tray liners.

Choose greaseproof paper when you need:

- Oil and grease resistance
- Clean food presentation
- Wrapping flexibility
- Bakery or fast-food use
- Printing or branding options

Buyers should test grease resistance with the actual food product, temperature and holding time.

## Silicone Coated Paper

Silicone coated paper provides a release surface. It is used for baking, adhesive backing, release liners and some food-related applications.

Choose silicone coated paper when you need:

- Non-stick surface
- Release performance
- Baking or liner use
- One-side or two-side coating options
- Stable converting behavior

Release performance can vary by coating weight, paper base and end use, so sample testing is important.

## PE Coated Paper

PE coated paper is paper laminated with polyethylene to improve moisture resistance and heat sealing. It is widely used for paper cups, takeaway packaging and disposable food packaging.

Choose PE coated paper when you need:

- Moisture resistance
- Liquid barrier support
- Heat sealing
- Cup stock
- Food service packaging

Buyers should confirm coating side, coating weight, base paper GSM and sealing performance before ordering.

## Compliance and Documentation

Food packaging requirements vary by destination market and application. Buyers should confirm which documents are needed for the final use and region.

Common buyer requests may include:

- Food-contact declaration
- Test reports
- Material specification sheet
- Certificate of origin
- Production batch information
- Packaging and labeling documents

This article is a sourcing guide, not legal advice. For regulated food-contact packaging, confirm applicable requirements with qualified compliance partners and the final market’s rules.

## Sourcing Checklist

Before requesting a quote, prepare:

- Paper type
- GSM
- Roll width or sheet size
- Coating type and side
- Quantity
- Food type or application
- Printing requirements
- Destination country
- Required certificates or reports
- Target delivery schedule

The more complete your specification, the faster your supplier can recommend a grade, prepare samples and quote accurately.

## Conclusion

Food packaging paper is application-specific. Cup paper, greaseproof paper, silicone coated paper and PE coated paper each solve different packaging problems. Choosing the right grade requires attention to barrier needs, converting process, food type and documentation.

For buyers, sample testing is the safest step before bulk orders. Test the paper with real food, real machines and real packing conditions.

## FAQ

### What paper is used for paper cups?

Cup paper is commonly used for paper cups. It is often paired with a barrier coating depending on the final cup design.

### What is greaseproof paper used for?

Greaseproof paper is used for oily or fatty foods such as bakery goods, burgers, fries, sandwiches and tray liners.

### What is silicone coated paper?

Silicone coated paper has a release surface and is used for baking, liners, adhesive backing and specialty converting.

### Is PE coated paper suitable for food packaging?

PE coated paper is widely used in food service packaging, but buyers should confirm the required documentation for the destination market and final application.

## Suggested Internal Links

- [All Food Packaging Paper Products](/products/food-packaging)
- [Cup Paper — hot & cold drink cup stock](/products/cup-paper)
- [Greaseproof Paper — PFAS-free oil barrier](/products/greaseproof-paper)
- [Silicone Coated Paper — non-stick release liner](/products/silicone-coated-paper)
- [PE Coated Paper — moisture barrier & heat seal](/products/pe-coated-paper)`,image:`/images/blog-articles/food-packaging-paper-buyer-guide.jpg`,tags:[`food packaging paper`]},{id:`kraft-paper-packaging-guide`,title:`Kraft Paper: From Industrial Packaging to Premium Brand Presentation`,seoTitle:`Kraft Paper for Bags, Wrapping and Packaging | YOUNGSUN PAPER`,metaDescription:`A buyer guide to kraft paper for paper bags, wrapping, liners, envelopes and sustainable packaging, including grades, applications and sourcing points.`,date:`2026-07-06`,author:`YOUNGSUN PAPER Editorial`,category:`Packaging`,excerpt:`Kraft paper is valued for strength, natural appearance and packaging versatility. Learn how buyers use it across bags, wrapping, liners and premium packaging.`,content:`# Kraft Paper: From Industrial Packaging to Premium Brand Presentation

Kraft paper has moved far beyond basic wrapping. Today it is used in paper bags, envelopes, corrugated liners, product sleeves, food service packaging and premium brand packaging. Its natural appearance, strength and recyclable character make it a practical choice for both industrial and retail applications.

For packaging buyers, kraft paper is attractive because it balances function and brand image. It can look simple and natural while still performing well in converting, printing and packing.

## What Is Kraft Paper?

[Kraft paper](/products/kraft-paper) is a strong paper grade known for its tear resistance and natural fiber appearance. It is commonly available in brown natural kraft, bleached white kraft and recycled kraft options.

Its surface can be uncoated, coated, laminated or converted depending on the end use. Kraft paper can be supplied in rolls or sheets and can be customized by GSM, width, size and packing method.

## Common Applications

Kraft paper is widely used for:

- Paper shopping bags
- Food bags and bakery bags
- Wrapping paper
- Envelopes and mailers
- Corrugated facing and liners
- Product sleeves
- Industrial packaging
- Eco-style gift packaging
- Protective interleaving paper

For retail brands, kraft paper gives packaging a natural and responsible appearance. For industrial users, it provides strength and practicality.

## Natural Kraft vs White Kraft

Natural kraft paper has a brown fiber appearance. It is commonly used when brands want a simple, organic or recycled visual style. White kraft paper is suitable when a cleaner background or stronger print contrast is needed.

Natural kraft is often selected for:

- Eco-style bags
- Natural product packaging
- Industrial wrapping
- Rustic brand presentation

White kraft is often selected for:

- Printed bags
- Branded sleeves
- Cleaner retail packaging
- Food service presentation

The right choice depends on printing requirements, brand style and end-use performance.

## Why Brands Use Kraft Paper

Kraft paper communicates simplicity, strength and environmental awareness. It is especially popular among brands in food, fashion, cosmetics, handmade products, organic products and e-commerce packaging.

Key benefits include:

- Strong tear resistance
- Natural visual appeal
- Good converting performance
- Recyclable packaging image
- Suitable for bags, wraps and liners
- Compatible with printing and lamination options

Kraft paper also works well with minimal design. A simple logo printed on natural kraft can create a premium, understated look. It also pairs well with [fancy paper](/products/fancy-paper) accents for brand packaging.

## Important Sourcing Specifications

When sourcing kraft paper, buyers should confirm:

- GSM
- Roll width or sheet size
- Natural, bleached or recycled grade
- Surface finish
- Tensile strength requirements
- Printing method
- Moisture requirements
- Food-contact requirements if applicable
- Packing method
- Certification needs

For paper bag production, strength and folding performance matter. For wrapping paper, hand feel and printability may be more important. For corrugated applications, tensile strength and runnability are critical.

## Kraft Paper and Food Packaging

Kraft paper can be used in food packaging, but the correct grade and treatment must be selected. Some food packaging applications may require grease resistance, barrier coating, [PE coating](/products/pe-coated-paper) or other functional treatment.

Buyers should always confirm food-contact documents based on destination market and final use. A bakery bag, a dry food wrapper and a hot drink cup stock have different requirements.

## Export Buyer Tips

For international buyers, kraft paper is often ordered in large-volume rolls or sheets. Before ordering, check:

- Container loading method
- Roll diameter and core size
- Pallet size
- Moisture protection
- Labeling requirements
- Documentation
- Delivery lead time

Clear export packing helps reduce damage and makes warehouse handling easier at destination.

## Conclusion

Kraft paper is one of the most versatile paper packaging materials. It can be used for industrial strength, natural retail presentation and sustainable brand communication. The key is to match the grade to the final product: bag, wrap, liner, sleeve or food packaging.

For buyers, the best results come from sharing the end use, GSM, width, quantity and destination early in the sourcing process.

## FAQ

### What is kraft paper used for?

Kraft paper is used for bags, wrapping, envelopes, liners, sleeves, food bags and industrial packaging.

### Is kraft paper recyclable?

Many kraft paper grades are recyclable, depending on coatings, laminations and local recycling systems.

### Can kraft paper be printed?

Yes. Kraft paper can be printed, but the final print effect depends on surface color, ink, coating and printing method.

### What is the difference between natural kraft and white kraft?

Natural kraft has a brown fiber appearance. White kraft is bleached and offers a cleaner background for printing.

## Suggested Internal Links

- [Kraft Paper — natural & bleached grades](/products/kraft-paper)
- [PE Coated Paper — moisture barrier & heat seal](/products/pe-coated-paper)
- [Food Packaging Paper — food-safe paper solutions](/products/food-packaging)
- [Package Board — explore all packaging grades](/products/package-board)
- [Fancy Paper — decorative surface materials](/products/fancy-paper)`,image:`/images/blog-articles/kraft-paper-packaging-guide.jpg`,tags:[`kraft paper`]},{id:`why-grey-board-premium-rigid-packaging`,title:`Why Grey Board Is the Backbone of Premium Rigid Packaging`,seoTitle:`Grey Board for Rigid Packaging | YOUNGSUN PAPER`,metaDescription:`Learn why grey board is widely used for rigid boxes, book covers, puzzles, folders and premium packaging, including thickness, applications and sourcing tips.`,date:`2026-07-07`,author:`YOUNGSUN PAPER Editorial`,category:`Packaging`,excerpt:`Grey board is one of the most practical structural materials for rigid packaging, bookbinding and display products. Here is what buyers should know before sourcing it.`,content:`# Why Grey Board Is the Backbone of Premium Rigid Packaging

Grey board, also known as grey chipboard, is one of the most widely used paperboard materials in packaging and converting. It is not usually chosen for decorative surface appearance. It is chosen because it gives packaging structure, stiffness and reliable thickness at a practical cost.

For buyers of rigid boxes, hardcover books, puzzles, folders, stationery products and display boards, grey board is often the hidden material that determines whether the finished product feels solid, flat and durable.

## What Is Grey Board?

Grey board is a dense paperboard generally made from recycled fiber. It has a natural grey color, a firm hand feel and a smooth uncoated surface. It is usually supplied in sheets and can be laminated, wrapped, die cut, grooved, mounted or covered with printed paper, [fancy paper](/products/fancy-paper), leatherette paper or other decorative materials.

Unlike folding carton board, grey board is not designed mainly for direct high-color printing. It is used as the structural base beneath an outer wrapping layer. It is the most common structural material for rigid box makers worldwide — browse our [full grey board product page](/products/grey-board) for detailed thickness options. This makes it ideal for rigid packaging projects where the final appearance comes from printed paper, specialty paper, fabric, leatherette paper or other surface materials.

## Common Applications

Grey board is used in many products where stiffness and flatness matter:

- Rigid gift boxes
- Luxury packaging bases
- Hardcover book covers
- Ring binders and file folders
- Jigsaw puzzles and game boards
- Display boards and mounting boards
- Stationery backing boards
- Cosmetic and electronics packaging structures

In luxury packaging, grey board is commonly wrapped with [art paper](/products/art-paper), [black paper](/products/black-paper), [pearlescent paper](/products/pearlescent-paper), [embossed paper](/products/embossed-paper) or printed paper. The buyer sees the premium outer finish, but the grey board provides the strength underneath.

## Why Packaging Buyers Choose Grey Board

The main value of grey board is structure. A good grey board helps a finished box stay square, resist warping and feel substantial in the customer’s hand.

Key advantages include:

- High stiffness for rigid boxes and covers
- Stable thickness options
- Cost-effective recycled fiber base
- Good converting performance
- Compatible with lamination, wrapping and die cutting
- Suitable for custom sheet sizes

For many packaging factories, grey board is also easy to process with common converting equipment. It can be cut, pasted, mounted and grooved for box making.

## How to Choose the Right Grey Board

Buyers should not select grey board by thickness alone. A board with the same thickness can feel different depending on density, moisture, fiber composition and production control.

When sourcing grey board, check these points:

- Thickness or GSM equivalent
- Sheet size tolerance
- Moisture level
- Flatness and warping control
- Surface smoothness
- Cutting and grooving performance
- Packing method for export
- Certification requirements such as FSC recycled

If the board will be used for premium rigid boxes, ask for samples before confirming a bulk order. Test the board with your actual wrapping paper, glue, cutting method and box structure.

## Grey Board vs Duplex Board

[Grey board](/products/grey-board) and [duplex board](/products/duplex-board) are often confused, but they serve different purposes.

[Grey board](/products/grey-board) is usually used as an inner structural board for rigid boxes, book covers and mounting. [Duplex board](/products/duplex-board) has a printable coated white surface and a grey back, making it more suitable for cartons, retail packaging and printed folding boxes.

If your packaging needs direct printing, [duplex board](/products/duplex-board) or [folding box board](/products/folding-box-board) may be more suitable. If your packaging needs rigid structure under a wrap, [grey board](/products/grey-board) is often the better choice.

## Export Sourcing Tips

For international buyers, consistent packing and documentation are just as important as the board itself. Ask your supplier about pallet packing, moisture protection, container loading, certificates and lead time.

A reliable grey board supplier should be able to provide:

- Stable thickness and density
- Custom sheet size support
- Export pallet packing
- Clear product specification sheet
- Sample support
- Production and delivery schedule
- Certificates when required

## Conclusion

Grey board may not be the most visible part of premium packaging, but it is often the material that gives the package its value. It supports the structure, improves the hand feel and helps the finished product stay strong through production, shipping and use.

For rigid box makers, bookbinders, stationery producers and packaging converters, choosing the right grey board is a practical step toward better quality and more stable production.

## FAQ

### What is grey board used for?

Grey board is used for rigid boxes, book covers, file folders, puzzles, game boards, display boards and premium packaging structures.

### Is grey board printable?

Grey board can be printed in some cases, but it is more commonly used as a structural base and wrapped with printed paper, fancy paper or other surface materials.

### What thickness is available for grey board?

Common options range from thin board to heavy board used for rigid packaging. Buyers should confirm thickness, density and sheet size with the supplier.

### Is grey board eco-friendly?

Many grey board grades are made from recycled fiber. Buyers can request FSC recycled or other certification depending on market requirements.

## Suggested Internal Links

- [Grey Board — structural board for rigid packaging](/products/grey-board)
- [Duplex Board — cost-effective printed carton board](/products/duplex-board)
- [Fancy Paper — decorative wrapping & surface materials](/products/fancy-paper)
- [Folding Box Board — retail & pharma carton board](/products/folding-box-board)
- [Black Paper — through-dyed luxury wrapping paper](/products/black-paper)`,image:`/images/blog-articles/why-grey-board-premium-rigid-packaging.jpg`,tags:[`grey board`]},{id:`how-to-source-paper-from-china`,title:`How to Source Paper from China: A Complete Guide for International Packaging Buyers`,seoTitle:`How to Source Paper from China | Complete Buyer Guide | YOUNGSUN PAPER`,metaDescription:`A practical guide for international buyers sourcing paper and board from China — covering product selection, specifications, logistics, quality control, certifications, and common mistakes to avoid.`,date:`2026-07-18`,author:`YOUNGSUN PAPER Editorial`,category:`Guides`,excerpt:`Sourcing paper from China can reduce costs and expand your supplier base — but only if you know how to specify, qualify, and manage orders correctly. This guide covers the full process from product selection to container loading.`,content:`# How to Source Paper from China: A Complete Guide for International Packaging Buyers

China is the world's largest paper and paperboard producer, exporting over 10 million tons annually to more than 150 countries. For packaging converters, printers, box makers, and industrial buyers, sourcing paper from China offers access to competitive pricing, broad product range, and flexible supply — but only when the process is managed correctly.

This guide covers the full sourcing journey: from defining your specification to receiving the container at your warehouse.

## Why Source Paper from China?

International buyers source paper from China for several practical reasons:

- **Competitive pricing** — Economies of scale, integrated mills, and efficient logistics keep costs competitive.
- **Product breadth** — From lightweight tissue to heavy structural board, Chinese mills produce virtually every paper grade.
- **Flexible order sizes** — Many suppliers accept smaller minimum order quantities (MOQ) than Western mills.
- **Customization** — Custom sheet sizes, reel widths, packing configurations, and private-label programs are widely available.
- **Export experience** — Established suppliers have container loading, documentation, and international logistics routines in place.

However, sourcing from China also requires careful supplier qualification, clear specification, and disciplined quality management.

## Step 1: Define Your Paper Specification Clearly

The most common sourcing mistake is sending an incomplete specification. A vague inquiry such as "I need kraft paper" will generate dozens of unfiltered responses. A precise specification gets you accurate quotes faster.

**Essential specification points:**

- **Product type** — Which grade? Example: [grey board](/products/grey-board), [CKB](/products/ckb), [folding box board](/products/folding-box-board), [woodfree paper](/products/woodfree-paper), [greaseproof paper](/products/greaseproof-paper), etc.
- **Grammage (GSM)** or thickness (mm/μm) — The basis weight or caliper
- **Format** — Sheets or reels? If sheets: width × length in mm. If reels: width in mm, maximum diameter, core size
- **Quantity** — Metric tons or number of sheets/reels per order
- **Application** — What will the paper be used for? Rigid boxes, folding cartons, printing, bags, food wrapping?
- **Printing method** — Offset, flexo, digital, screen, hot stamping, or none
- **Surface requirements** — Coated or uncoated? Gloss, matt, or embossed? One-side or two-side?
- **Certification needs** — FSC, SGS, ISO, food-contact compliance documents
- **Destination port** — Required for accurate freight quotation
- **Target delivery schedule** — Helps the supplier confirm production slot availability

**Example of a good inquiry:**

> "I need 20 metric tons of grey board, 1.5 mm thickness (±0.1 mm), sheets 787 × 1092 mm, for rigid gift box production. FSC Recycled certification required. Destination: Port of Hamburg, Germany. Target delivery: within 6 weeks."

This level of detail allows a supplier to respond with a firm quotation within hours, not days.

## Step 2: Understand the Paper Grades Relevant to Your Project

Different applications require fundamentally different paper types. Here is a practical overview of the main categories:

### Structural & Packaging Board
- **[Grey Board](/products/grey-board)** — Recycled structural board for rigid boxes, book covers, puzzles, folders. Also available in laminated variants with white, colored, kraft, black, gold or silver facing papers.
- **[CKB (Coated Kraft Back)](/products/ckb)** — Multi-coated white top surface with strong unbleached kraft reverse. Ideal for beverage cartons, frozen food packaging, and retail folding cartons.
- **[Folding Box Board (FBB)](/products/folding-box-board)** — Coated virgin-fibre board with excellent printing and folding performance for cosmetics, pharmaceuticals, and food cartons.
- **[Duplex Board](/products/duplex-board)** — Coated white top with grey back for economical printed cartons.
- **[Black Paper](/products/black-paper)** — Through-dyed black paper and card for luxury packaging, hang tags, and stationery.

### Printing & Culture Paper
- **[Woodfree Paper](/products/woodfree-paper)** — Uncoated, high-brightness paper for books, notebooks, and commercial printing.
- **[C2S Art Paper](/products/art-paper)** — Two-side coated gloss or matt paper for catalogs, magazines, and premium print.
- **[LWC Paper](/products/lwc-paper)** — Lightweight coated paper for magazines, catalogs, and high-volume publishing.
- **[Newsprint](/products/newsprint)** — Cost-efficient paper for newspapers, advertising inserts, and mass-circulation printing.
- **[Copy Paper](/products/copy-paper)** — Standard office and photocopy paper in multiple formats and packing options.
- **[Color Offset Paper](/products/color-offset-paper)** — Colored uncoated paper for forms, inserts, stationery, and promotional printing.

### Fancy & Specialty Paper
- **[Color Tissue Paper](/products/color-tissue-paper)** — Lightweight translucent colored tissue for luxury gift wrapping, shoe stuffing, floral arrangements, and retail presentation.
- **[Soft Touch Paper](/products/soft-touch-paper)** — Velvet-smooth tactile coated paper for premium boxes, covers, and hangtags.
- **[Leather Paper](/products/leather-paper)** — Leather-textured paper for luxury packaging and stationery.
- **[Pearlescent Paper](/products/pearlescent-paper)** — Soft shimmer paper for gift packaging, cosmetics, and invitations.
- **[Embossed Paper](/products/embossed-paper)** — Textured surface paper with raised patterns for decorative packaging.
- **[Label Paper](/products/label-paper)** — Premium face stock for pressure-sensitive labels, hang tags, and wet-glue labels.
- **[Tracing Paper](/products/tracing-paper)** — Translucent paper for luxury packaging overlays, invitations, and book inserts.

### Food & Industrial Packaging Paper
- **[Cup Paper](/products/cup-paper)** — Virgin-fibre cupstock board for hot and cold drink cups.
- **[Greaseproof Paper](/products/greaseproof-paper)** — Oil-resistant paper for bakery, fast food, and food wrapping.
- **[MG Paper](/products/mg-paper)** — Machine-glazed paper with glossy face for wrapping, bags, and flexible packaging.
- **[PE Coated Paper](/products/pe-coated-paper)** — Polyethylene-coated paper for moisture barrier and heat-seal applications.
- **[Kraft Paper](/products/kraft-paper)** — High-strength natural or bleached paper for bags, sacks, and industrial packaging.

## Step 3: Qualify Your Supplier

Not all suppliers are equal. Before placing a purchase order, verify:

- **Years in business** — How long has the supplier been exporting?
- **Mill partnerships** — Which mills do they work with? Major Chinese mills include CHENMING, APP, NINEDRAGON, BOHUI, and others.
- **Warehouse capacity** — Do they hold stock, or is every order produced to order?
- **Export volume** — How many containers do they ship per month?
- **Certifications** — Can they provide valid FSC, SGS, ISO, or other certificates?
- **Sample policy** — Do they offer free samples?
- **References** — Can they share references from buyers in your region?
- **Communication responsiveness** — How quickly and clearly do they respond to technical questions?

A factory visit or third-party inspection is recommended for large or long-term contracts. If you cannot visit in person, request a video call showing the warehouse, loading area, and sample stock.

## Step 4: Request and Evaluate Samples

Never skip the sample stage. A specification sheet tells you numbers; a sample tells you how the paper actually performs.

When you receive samples:

- Measure the **thickness/GSM** against the specification
- Check **surface quality** — smoothness, coating uniformity, color consistency
- Test with your actual **printing, cutting, folding, gluing, or wrapping** process
- Evaluate **stiffness and rigidity** for structural applications
- For food-contact grades, verify **odor, cleanliness, and appearance**
- Test **moisture behavior** in your production environment

If the sample performs well, ask the supplier to confirm that production stock will match the sample quality. A written confirmation helps set clear expectations.

## Step 5: Understand Pricing and Payment Terms

Paper pricing is usually quoted **FOB** (Free On Board) or **CIF** (Cost, Insurance, Freight). Make sure you understand which you are receiving.

- **FOB** — You pay the supplier for the goods plus local charges. You arrange and pay for ocean freight separately.
- **CIF** — The supplier includes ocean freight and insurance in the price.

Common payment terms:

- **T/T (Telegraphic Transfer)** — Usually 30% deposit, 70% against copy of shipping documents or before shipment.
- **L/C (Letter of Credit)** — Common for larger orders; terms must be clearly agreed in advance.

Ask for a proforma invoice that details:

- Product description and specification
- Quantity and unit price
- Total amount
- Payment terms
- Delivery terms (Incoterms)
- Estimated shipment date
- Port of loading and destination
- Packing details

## Step 6: Container Loading and Logistics

Paper is heavy and dense. A **40-foot high-cube (40HQ) container** typically holds approximately **25 metric tons** of paper, depending on the product density and packing configuration.

Key logistics points:

- **Packing method** — Ream-wrapped, palletized, bulk-packed, or custom packing?
- **Moisture protection** — Is the container lined with moisture barrier? Are desiccants included?
- **Pallet specifications** — Standard or custom pallet size? Are pallets IPPC heat-treated for export?
- **Loading plan** — Confirm weight distribution and loading sequence with your supplier.
- **Documentation** — Bill of Lading, Commercial Invoice, Packing List, Certificate of Origin, and any required certificates.

For multi-product containers (e.g., mixed grades or mixed sizes), request a detailed loading list showing the position and quantity of each item.

## Step 7: Quality Control and Dispute Prevention

Even with a qualified supplier, quality issues can arise. A few precautions reduce risk significantly:

- **Pre-shipment inspection** — Hire a third-party inspection company to check quantity, packing, specification, and appearance before the container is sealed.
- **Photo documentation** — Ask the supplier to send photos of the production lot, packing process, and loaded container.
- **Retain samples** — Keep the original approved sample and the pre-shipment sample for comparison.
- **Written confirmation** — Confirm all specifications, tolerances, and packing requirements in writing, not just in conversation.

Common quality issues to watch for:

- GSM or thickness out of tolerance
- Poor sheet cutting accuracy (±3 mm or more)
- Surface scratches, dirt, or coating defects
- Moisture content too high, causing warping
- Color variation between batches
- Insufficient packing leading to transport damage

## The Sourcing Checklist

Before you send an inquiry, confirm you can answer these questions:

1. Product grade and GSM/thickness — confirmed?
2. Sheet size or reel width — confirmed?
3. Quantity in metric tons — confirmed?
4. Application and printing method — confirmed?
5. Certification requirements — confirmed?
6. Packing requirements — confirmed?
7. Destination port — confirmed?
8. Target delivery date — confirmed?
9. Budget range — confirmed?
10. Sample requirement — confirmed?

The more complete your inquiry, the faster and more accurate the quotation you will receive.

## Common Mistakes to Avoid

- **Comparing price without comparing specification** — Two quotes for "grey board 1.5 mm" can refer to completely different density, moisture, and flatness.
- **Skipping samples** — The cost of a bad container far exceeds the time spent testing samples.
- **Not confirming packing** — A container of paper that arrives wet or damaged is a total loss.
- **Rushing without documentation** — Missing certificates can delay customs clearance and cost storage fees.
- **No quality inspection** — A third-party inspection costs a few hundred dollars but can save tens of thousands.

## Conclusion

Sourcing paper from China is a proven strategy for packaging converters, printers, and industrial buyers worldwide. The key to success is preparation: define your specification precisely, qualify your supplier carefully, test samples thoroughly, agree on packing and documentation, and maintain clear communication throughout the process.

A good supplier relationship is built on clear expectations, consistent quality, and reliable delivery. When those three elements are in place, sourcing from China becomes a long-term competitive advantage.

## FAQ

### What is the minimum order quantity for paper from China?

Many suppliers accept MOQs as low as 1 metric ton, though pricing improves with larger volumes. Container-load orders (20–25 tons) offer the best freight efficiency.

### How long does it take to receive paper from China?

Production lead time is typically 2–3 weeks. Ocean freight to Europe takes approximately 30–40 days, to North America 15–25 days, and to the Middle East 15–20 days. Total timeline from order to delivery: approximately 6–9 weeks.

### Which certifications should I request?

FSC certification is the most commonly requested. For food-contact applications, additional compliance documents apply. SGS test reports and ISO 9001/14001 certificates are also common.

### Can I get custom sheet sizes?

Yes. Most suppliers offer custom cutting to buyer specifications. Confirm cutting tolerance (±1 mm or ±2 mm) before ordering.

### How do I pay for paper orders from China?

The most common method is T/T (30% deposit, 70% before shipment or against copy of documents). Letters of Credit are also used for larger orders.

## Suggested Internal Links

- [All Products & Categories](/products)
- [Grey Board — rigid box structural base](/products/grey-board)
- [CKB (Coated Kraft Back) — beverage & frozen food packaging](/products/ckb)
- [Folding Box Board — retail carton board](/products/folding-box-board)
- [Kraft Paper — bags, sacks & wrapping](/products/kraft-paper)
- [Color Tissue Paper — luxury gift wrapping tissue](/products/color-tissue-paper)
- [Newsprint — newspaper & publishing paper](/products/newsprint)
- [MG Paper — machine-glazed wrapping paper](/products/mg-paper)`,image:`/images/blog-articles/importing-paper-from-china-complete-guide.jpg`,tags:[`sourcing guide`,`paper export`,`buyer guide`]},{id:`sustainable-paper-fsc-recycled-compliance-guide`,title:`Sustainable Paper Packaging: FSC, Recycled Content, and Compliance for International Buyers`,seoTitle:`FSC Paper & Sustainable Packaging Compliance Guide | YOUNGSUN PAPER`,metaDescription:`A comprehensive guide to FSC certification, recycled content, EUDR, PPWR, and food-contact compliance for international paper and packaging buyers sourcing from China.`,date:`2026-07-18`,author:`YOUNGSUN PAPER Editorial`,category:`Compliance`,excerpt:`Sustainability in paper packaging is no longer optional. International buyers face evolving regulations, customer expectations, and supply chain transparency requirements. This guide covers FSC certification, recycled content, food-contact compliance, and what to ask your supplier.`,content:`# Sustainable Paper Packaging: FSC, Recycled Content, and Compliance for International Buyers

Sustainability in the paper and packaging industry has moved from a marketing advantage to a business requirement. Retail chains, brand owners, government regulations, and end consumers now expect packaging to carry verifiable sustainability credentials — not vague claims, but documented proof.

For international buyers sourcing paper and board from China, understanding certification systems, recycled content claims, and destination-market regulations is an essential part of procurement. This guide explains the key frameworks, what they mean in practice, and how to verify them with your supplier.

## Why Sustainability Matters in Paper Sourcing

Paper is inherently one of the more sustainable packaging materials — it comes from a renewable resource, it is widely recycled, and it biodegrades. But not all paper is sourced equally. A paper product's true environmental footprint depends on:

- **Forest origin** — Was the fiber sourced from responsibly managed forests, or from illegal logging or high-conservation-value areas?
- **Recycled content** — How much post-consumer or post-industrial fiber is in the product?
- **Manufacturing impact** — What is the mill's energy source, water usage, chemical management, and carbon footprint?
- **Chemical safety** — For food-contact papers, are PFAS or other harmful chemicals present?
- **End-of-life** — Can the paper be recycled in standard waste streams after use?

For buyers, the challenge is that these factors are invisible in the finished product. You cannot look at a sheet of [grey board](/products/grey-board) or a roll of [kraft paper](/products/kraft-paper) and determine whether the fiber came from a certified forest. That is why third-party certification systems exist.

## FSC Certification: The Global Standard for Responsible Forestry

### What Is FSC?

The Forest Stewardship Council (FSC) is the most widely recognized international certification system for responsible forest management. FSC certification verifies that wood and paper products come from forests that are managed to meet environmental, social, and economic standards.

### FSC Labels: What Each One Means

FSC has three main labels that buyers encounter:

- **FSC 100%** — All fiber in the product comes from FSC-certified forests. This is the highest standard and applies to virgin-fiber products like [woodfree paper](/products/woodfree-paper) or [folding box board](/products/folding-box-board) made entirely from certified wood pulp.
- **FSC Mix** — The product contains a mixture of FSC-certified fiber, recycled fiber, and/or controlled wood. Controlled wood is not from FSC-certified forests but has been risk-assessed to exclude illegal logging, high-conservation-value forests, and other unacceptable sources. Most printing and packaging papers carry FSC Mix certification.
- **FSC Recycled** — All fiber in the product is recycled (post-consumer or post-industrial). This is the label commonly found on [grey board](/products/grey-board) and [duplex board](/products/duplex-board) made from recovered paper.

### What FSC Certification Does NOT Cover

It is important to understand the scope of FSC certification:

- FSC certifies **forest management** and **chain of custody** (traceability from forest to finished product). It does not directly certify manufacturing emissions, water usage, or chemical inputs (those fall under ISO 14001 or other environmental management systems).
- FSC certification applies to the **fiber source**, not necessarily every manufacturing step. A paper mill may have FSC chain-of-custody certification; the converting plant that cuts and packs it may also need separate certification if the buyer requires end-to-end traceability.
- FSC does not replace **food-contact compliance** or other product-safety certifications.

### How to Verify FSC Claims

When a supplier states that their products are FSC certified, buyers should:

1. Request the **FSC certificate number** (format: XXX-COC-XXXXXX)
2. Verify the certificate on the [FSC public database](https://info.fsc.org/)
3. Confirm that the certificate covers the **specific product grade** you are purchasing
4. Check that the **chain-of-custody documentation** will be included with your shipment
5. Confirm whether the certificate is valid for the **current calendar year**

A legitimate FSC-certified supplier should be able to provide this information within one business day. YOUNGSUN PAPER products are FSC certified, and certificates are provided with every export shipment.

## Recycled Content: Post-Consumer vs Post-Industrial

### Understanding Recycled Fiber Categories

Not all recycled content is equal. Buyers should understand the distinction:

- **Post-Consumer Recycled (PCR)** — Fiber recovered from products that have been used by consumers and collected through recycling systems. Examples: old corrugated containers (OCC), used office paper, recovered newspapers. PCR content has the highest environmental value because it diverts waste from landfill and reduces demand for virgin fiber.
- **Post-Industrial Recycled (PIR)** — Fiber recovered from manufacturing waste before it reaches consumers. Examples: mill broke, converting trim, printing waste. PIR content also has value but is considered less impactful than PCR because this material has always been widely recovered in the paper industry.

### Products With High Recycled Content

At YOUNGSUN, several product categories are specifically designed for high recycled content:

- **[Grey Board](/products/grey-board)** — Made from 100% post-consumer recovered paper fiber. FSC Recycled certified.
- **[Duplex Board](/products/duplex-board)** — Features a recycled grey back layer, balancing printability with recycled content value. FSC Recycled certified.
- **[Black Paper (recycled grade)](/products/black-paper)** — Recycled-fibre option available for buyers prioritizing circular economy goals.
- **[Color Card Paper](/products/color-card-paper)** — Recycled content options available subject to grade and color selection.

### Why Recycled Content Matters for Buyers

Recycled content in paper products is increasingly important for several reasons:

- **EU Packaging and Packaging Waste Regulation (PPWR)** — The EU is moving toward mandatory recycled content minimums in packaging. Buyers supplying European markets should track recycled content percentages now.
- **Brand ESG commitments** — Global brands have public recycled-content targets. Their packaging procurement teams need documentation from suppliers.
- **Eco-label eligibility** — Environmental labels such as the EU Ecolabel, Blue Angel, and Nordic Swan have recycled-content thresholds that packaging must meet.
- **Consumer perception** — In many markets, "made from recycled materials" is a positive purchase driver.

## Food-Contact Compliance: What Paper Buyers Need to Know

For paper products intended to touch food — such as [cup paper](/products/cup-paper), [greaseproof paper](/products/greaseproof-paper), [silicone coated paper](/products/silicone-coated-paper), [PE coated paper](/products/pe-coated-paper), [MG paper](/products/mg-paper), and [kraft paper](/products/kraft-paper) for food bags — food-contact safety is a non-negotiable requirement.

### Key Regulatory Frameworks

Different markets have different food-contact regulations:

- **United States: FDA 21 CFR 176.170** — Regulates paper and paperboard in contact with aqueous and fatty foods. Also relevant: 21 CFR 176.180 (dry food) and 21 CFR 175.300 (resinous and polymeric coatings).
- **European Union: Framework Regulation (EC) No 1935/2004** — Establishes general safety requirements for all food-contact materials. Specific measures for paper and board are set at member-state level (e.g., German BfR Recommendation XXXVI, Dutch Warenwet, French DGCCRF).
- **China: GB 4806.8** — National food safety standard for paper and paperboard food-contact materials and articles.

### PFAS: What Buyers Should Know

Per- and polyfluoroalkyl substances (PFAS), sometimes called "forever chemicals," have historically been used in some grease-resistant papers to achieve oil repellency. Regulatory scrutiny is increasing rapidly:

- The EU is considering a broad restriction on PFAS under REACH.
- Several US states have enacted PFAS bans in food packaging.
- Major fast-food and retail chains have committed to PFAS-free packaging.

YOUNGSUN [greaseproof paper](/products/greaseproof-paper) achieves grease resistance through **mechanical fiber densification** — not chemical PFAS treatment. This means our greaseproof papers are inherently PFAS-free. Buyers can request PFAS-free certification documentation with their order.

### How to Request Food-Contact Documentation

When sourcing food-contact paper, ask your supplier for:

1. **Declaration of Compliance (DoC)** — A document stating that the product meets the applicable food-contact regulation for the destination market.
2. **Test reports** — Laboratory analysis confirming compliance with specific migration limits, sensory properties, and purity requirements.
3. **Statement on PFAS** — Explicit confirmation of whether PFAS were intentionally added.
4. **GMP certificate** — Evidence of Good Manufacturing Practice for food-contact materials.

## Carbon, Energy, and Manufacturing Impact

Beyond fiber sourcing, the environmental footprint of paper production includes energy use, water consumption, emissions, and waste management. While these are typically managed at the mill level rather than by individual product, buyers can still ask meaningful questions:

- **Mill certifications** — Does the producing mill hold ISO 14001 (environmental management) and ISO 50001 (energy management)?
- **Energy source** — Does the mill use renewable energy, biomass co-generation, or coal? Chinese mills vary significantly on this point.
- **Water management** — Does the mill have closed-loop water systems or advanced effluent treatment?
- **Transport footprint** — How far does the paper travel from mill to port? YOUNGSUN's location 50 km from Shenzhen port minimizes inland transport compared to suppliers in northern China.

While detailed mill-level data is not always available for every grade, asking these questions signals to your supplier that sustainability matters — and it encourages continuous improvement.

## Practical Buyer Checklist: Verifying Sustainability Claims

Before placing an order, use this checklist to verify sustainability credentials:

**For All Paper Orders:**
- [ ] FSC certificate number requested and verified on info.fsc.org
- [ ] Chain-of-custody documentation confirmed for the shipment
- [ ] Recycled content percentage confirmed (if applicable)
- [ ] Mill certifications confirmed (ISO 14001, ISO 9001)

**For Food-Contact Paper Orders (Additional):**
- [ ] Declaration of Compliance for destination market (FDA, EU, GB)
- [ ] PFAS-free confirmation in writing
- [ ] GMP certificate available
- [ ] Test reports available for specific migration limits

**For EU-Bound Shipments (Additional):**
- [ ] EUDR (EU Deforestation Regulation) requirements reviewed
- [ ] PPWR recycled content tracking initiated
- [ ] Certificate of Origin prepared
- [ ] FSC chain-of-custody documentation in order

## The EU Deforestation Regulation (EUDR): What Paper Buyers Need to Know

The EU Deforestation Regulation (Regulation (EU) 2023/1115), which applies to imports of wood and paper products into the EU, requires operators to conduct due diligence demonstrating that products are deforestation-free and legally produced.

For paper buyers, key points include:

- **Due Diligence Statement** — Importers must submit a due diligence statement confirming that the product is deforestation-free.
- **Geolocation** — For wood-based products, the plot of land where the trees were harvested must be geolocated.
- **Legality** — The product must comply with the laws of the country of harvest.
- **FSC and PEFC** — While certification does not automatically fulfill EUDR requirements, certified material may support due diligence efforts.

Buyers importing paper into the EU should consult with their legal and compliance teams about EUDR obligations. YOUNGSUN PAPER can provide the documentation that supports buyer due diligence, including FSC certificates, mill declarations, and supplier statements.

## Greenwashing: What to Avoid in Paper Procurement

"Greenwashing" — making misleading or unsubstantiated environmental claims — is under increasing scrutiny from regulators, especially in the EU under the proposed Green Claims Directive. Paper buyers should be aware of common pitfalls:

- **Vague terms without evidence** — Words like "eco-friendly," "green," or "natural" without specific, verifiable certification or data.
- **Certification references that cannot be verified** — Always check the certificate number.
- **Recycled content claims without percentage** — "Contains recycled material" is meaningless without a percentage and fiber category (PCR vs PIR).
- **"Biodegradable" claims** — Most paper is biodegradable in the right conditions, but the claim may be misleading if the destination country has no industrial composting infrastructure.
- **Self-declared labels** — Labels created by the manufacturer without independent third-party verification carry less weight than recognized certifications like FSC, PEFC, or SGS.

When in doubt, ask for the test report, certificate, or audit document behind the claim. A supplier who cannot produce documentation in 48 hours is not a supplier whose sustainability claims should be trusted.

## The Business Case: Why Sustainability Documentation Sells

Sustainability is not only about compliance — it directly supports your sales proposition to your own customers:

- **Retailer requirements** — Major retailers increasingly require FSC certification and recycled content documentation as a condition of listing.
- **Brand ESG reporting** — Your brand-owner customers need data for their annual sustainability reports. Providing this data makes you a preferred supplier.
- **Tender qualification** — Many public-sector and corporate tenders now include sustainability criteria in the scoring.
- **Price premium potential** — In some markets, certified sustainable packaging commands a measurable price premium.
- **Risk reduction** — Documented supply chains reduce the risk of regulatory action, border delays, or reputational damage.

For packaging converters and printers, being able to pass sustainability documentation upstream to your brand-owner customers is a competitive advantage. It positions you as a knowledgeable, responsible partner — not just a commodity supplier.

## Conclusion

Sustainable paper procurement requires more than a certificate logo on a website. It requires understanding what each certification means, verifying documentation, matching compliance to destination-market regulations, and pushing suppliers for continuous improvement.

The key frameworks — FSC, recycled content, food-contact compliance, and emerging regulations like EUDR and PPWR — each serve a different purpose. Together, they form a system that helps buyers source paper with confidence in its environmental and safety credentials.

For international buyers, the most important step is simple: ask for documentation, verify it, and keep it on file. A good supplier will provide it promptly. A great supplier will provide it before you ask.

## FAQ

### What is the difference between FSC 100%, FSC Mix, and FSC Recycled?

FSC 100% means all fiber is from FSC-certified forests. FSC Mix contains a mixture of certified, recycled, and/or controlled wood fiber. FSC Recycled means all fiber is post-consumer or post-industrial recycled material.

### Does FSC certification cover food-contact safety?

No. FSC certifies forest management and chain of custody. Food-contact compliance requires separate documentation under FDA 21 CFR, EU 1935/2004, GB 4806.8, or equivalent regulations for your target market.

### Is YOUNGSUN greaseproof paper PFAS-free?

Yes. YOUNGSUN greaseproof paper achieves oil and grease resistance through mechanical fiber densification during the papermaking process — no PFAS chemicals are added. PFAS-free certification is available on request.

### What recycled content percentage can I expect from grey board?

YOUNGSUN grey board is made from 100% post-consumer recovered paper fiber and carries FSC Recycled certification.

### How do I verify an FSC certificate?

Visit info.fsc.org and enter the supplier's FSC certificate number (format: XXX-COC-XXXXXX). The database will show the certificate holder name, scope, product categories covered, and validity dates.

### What is EUDR and does it affect paper imports?

Yes. The EU Deforestation Regulation requires importers of wood and paper products into the EU to conduct due diligence confirming the products are deforestation-free. FSC certification supports due diligence but does not automatically fulfill all EUDR obligations.

## Suggested Internal Links

- [All Products & Categories](/products)
- [Grey Board — 100% recycled fiber rigid box board](/products/grey-board)
- [Greaseproof Paper — PFAS-free food packaging paper](/products/greaseproof-paper)
- [Kraft Paper — FSC certified packaging kraft](/products/kraft-paper)
- [Cup Paper — food-grade cupstock board](/products/cup-paper)
- [PE Coated Paper — food-contact moisture barrier paper](/products/pe-coated-paper)`,image:`/images/blog-articles/sustainable-paper-fsc-compliance-guide.jpg`,tags:[`sustainability`,`FSC certification`,`recycled content`,`compliance`,`food safety`,`EUDR`]},{id:`paper-design-material-surface-texture-color-finish`,title:`Paper as a Design Material: How Surface, Texture, Color, and Finish Shape Brand Perception`,seoTitle:`Paper as a Design Material — Surface, Texture & Finish Guide | YOUNGSUN PAPER`,metaDescription:`A designer's guide to paper surface, texture, color, and finishing techniques — from soft touch to metallic foil, learn how material choices define brand perception in packaging and print.`,date:`2026-07-19`,author:`YOUNGSUN PAPER Editorial`,category:`Design`,excerpt:`Paper is not a neutral carrier of graphics. Its surface, texture, color, and finish actively shape how people perceive a brand before they read a single word. This guide explores paper as a design material.`,content:`# Paper as a Design Material: How Surface, Texture, Color, and Finish Shape Brand Perception

Paper is often treated as the background — the invisible substrate that carries ink. But in premium packaging and print design, the paper itself is half the design. Before anyone reads a word of copy or recognizes a logo, their fingers have already touched the surface. Their eyes have already registered whether the light reflects off a gloss coat, sinks into an uncoated texture, or shimmers across a pearlescent finish.

This guide is written for designers, creative directors, and brand managers who want to understand paper not as a commodity specification but as a design material with its own vocabulary, behavior, and expressive range.

## The Material First Impression

Consider two boxes sitting side by side on a retail shelf. Both are the same dimensions. Both carry the same brand logo. One is wrapped in standard coated paper with a smooth glossy finish. The other is covered in [soft touch paper](/products/soft-touch-paper) with a velvet-matte surface, the logo debossed into the texture, and a subtle [pearlescent shimmer](/products/pearlescent-paper) catching the light along the edges.

Which one says "premium" before the customer reads a single word?

Paper choice communicates brand values through sensory channels that copy and graphics cannot reach alone:

- **Touch** — Is the surface warm or cold? Smooth or textured? Soft or crisp?
- **Sight** — Does it reflect light or absorb it? Is the color through-dyed or surface-printed? Does it shimmer or stay matte?
- **Sound** — Does the paper rustle with stiffness or fold quietly? Does the box lid make a satisfying sound when it closes?
- **Weight** — Does the board feel substantial in the hand, or light and disposable?

These perceptions form within milliseconds and set the expectation for the product inside. A luxury watch in a flimsy box feels less valuable. An organic skincare product in high-gloss plasticized packaging feels contradictory. The paper is the first material evidence of the brand's promise.

## Surface Language: Gloss, Matt, and Everything Between

### Gloss Coated

Gloss-coated papers and boards — such as [C2S art board](/products/c2s-art-board) and coated [folding box board](/products/folding-box-board) — reflect light efficiently. They make colors pop, deepen blacks, and create a polished, commercial finish. Gloss surfaces are the default choice for retail packaging where shelf visibility matters: cosmetics, consumer electronics, mass-market confectionery.

Design considerations for gloss surfaces:

- **Pros**: Maximum color saturation, sharp image reproduction, high contrast, perceived as clean and modern.
- **Cons**: Fingerprints and scratches are visible; can feel generic if overused; may conflict with "natural" or "craft" brand positioning.
- **Best for**: Cosmetics, electronics, mass retail, promotional printing, catalog covers.

### Matt Coated

Matt-coated surfaces — available in [C2S art matt paper](/products/art-paper) and [label paper](/products/label-paper) — reduce glare while maintaining print quality. They feel more refined, less commercial. Matt surfaces are increasingly preferred in premium sectors because they photograph well (no glare spots) and feel more tactile.

Design considerations for matt surfaces:

- **Pros**: Elegant, low-glare, photographs beautifully, feels more premium and less mass-market.
- **Cons**: Slightly less color pop than gloss; can scuff if not laminated; some matt coatings show finger oils.
- **Best for**: Premium packaging, editorial design, luxury catalogs, boutique brand boxes.

### Uncoated

Uncoated papers — such as [woodfree offset paper](/products/woodfree-paper) and [kraft paper](/products/kraft-paper) — have an open fiber surface that absorbs ink and feels warm and natural to the touch. They communicate honesty, simplicity, and environmental awareness.

Design considerations for uncoated surfaces:

- **Pros**: Natural tactile warmth, eco-aesthetic, excellent writability, strong craft/artisan association.
- **Cons**: Lower print resolution (ink spreads into fibers), colors appear muted, less durable without lamination.
- **Best for**: Stationery, notebooks, natural product packaging, eco-brands, food bags, art books.

### The Surface-to-Brand Translation

| Brand Position | Recommended Surface | Why |
| --- | --- | --- |
| Ultra-luxury | [Soft touch](/products/soft-touch-paper) or [leather paper](/products/leather-paper) | Tactile, distinctive, memorable |
| Modern premium | Matt coated + spot UV or foil | Refined but not flashy |
| Natural / organic | Uncoated [kraft](/products/kraft-paper) or textured uncoated | Honest, warm, sustainable feel |
| Mass retail | Gloss coated [duplex board](/products/duplex-board) | Bright, visible, cost-effective |
| Fashion / cosmetics | [Pearlescent](/products/pearlescent-paper) or metallic accents | Glamour, light-play, Instagram-ready |
| Minimalist / editorial | Uncoated with bold typography | Quiet confidence, substance over style |

## Texture: The Dimension Print Cannot Reach

Texture is the most underused tool in packaging design — and the most powerful. A printed image of linen cannot replace the feel of real [linen-embossed paper](/products/embossed-paper). A photograph of leather grain cannot replicate the tactile depth of [leather paper](/products/leather-paper). Texture adds a dimension that screens cannot simulate and competitors cannot easily copy.

### Embossed Textures

[Embossed paper](/products/embossed-paper) carries a permanent three-dimensional pattern pressed into the surface under heat and pressure. The patterns are physical, not visual. They catch light differently at every angle, invite touch, and signal that someone invested in the material.

Common embossed patterns and their associations:

- **Linen** — Classic, refined, heritage. Used for stationery, book covers, wedding invitations.
- **Canvas** — Artistic, textured, creative. Used for art prints, portfolio covers, creative brand packaging.
- **Woodgrain** — Natural, organic, warm. Used for craft product packaging, furniture tags, eco-brands.
- **Felt / Laid** — Traditional, artisanal, hand-crafted feel. Used for letterpress cards, certificates, premium stationery.
- **Custom patterns** — Brand-specific textures (monograms, logos, proprietary patterns) that become part of the visual identity system.

### Leather and Suede Finishes

[Leather paper](/products/leather-paper) replicates the grain, depth, and hand-feel of genuine leather without animal materials. It is available in crocodile, calf, ostrich, and pebble grain patterns. The surface can be colored in classic leather tones — black, cognac, burgundy, navy — or custom-matched to brand palettes.

[Soft touch paper](/products/soft-touch-paper) creates a velvet-smooth, almost rubbery surface that people instinctively want to stroke. It deepens printed blacks, resists fingerprints, and adds a contemporary luxury feel that gloss lamination cannot achieve.

Design rule: **texture and finish should reinforce the brand idea, not fight it.** A leather-textured box for a vegan skincare brand is a mixed message. A soft-touch surface for a rugged outdoor brand may feel too delicate. The material should tell the same story as the brand.

## Color: Through-Dyed, Surface-Printed, and Metallic

### Through-Dyed Paper

Through-dyed paper — such as [black paper](/products/black-paper) and [color card paper](/products/color-card-paper) — has pigment distributed throughout the entire sheet, not just on the surface. When you cut, fold, crease, or tear through-dyed paper, the edge reveals the same color as the surface.

Why this matters for design:

- **Clean edges on die-cut shapes** — No white line at cut boundaries.
- **Crease and fold integrity** — The color does not crack or expose a different core.
- **Premium unboxing** — The inside of a rigid box wrapped in through-dyed paper matches the outside.
- **Perceived quality** — Through-dyed color communicates that the material itself is valuable, not just coated to look that way.

[Black paper](/products/black-paper) is the most widely used through-dyed paper in luxury packaging. It creates dramatic contrast with gold or silver foil stamping and provides a deep, light-absorbing background that makes metallic accents appear to float.

### Metallic and Pearlescent

Metallic papers — such as [gold and silver card paper](/products/gold-silver-card) — use vacuum metallization or foil lamination to create mirror-like reflective surfaces. They are the most visually assertive paper choice available.

[Pearlescent paper](/products/pearlescent-paper) uses mica-based pigments to create a softer, shifting shimmer rather than a hard mirror reflection. The effect changes with viewing angle, adding depth and movement to packaging surfaces.

Design considerations for metallic and pearl surfaces:

- **Less is more** — A full metallic box can overwhelm. Consider metallic accents, bands, inserts, or interior linings.
- **Print compatibility** — Metallized surfaces may require specific inks or printing methods. Always test before production.
- **Photography** — Metallic surfaces are challenging to photograph for e-commerce. Consider how the packaging will appear online.

### Color Tissue and Translucency

[Color tissue paper](/products/color-tissue-paper) adds a final layer of color and texture to the unboxing experience. It is the first thing a customer touches when they open a box. A carefully chosen tissue color — matching the brand palette or creating deliberate contrast — turns a practical protective layer into a designed moment.

## Finishing Techniques: The Final Layer of Intent

Paper selection and finishing techniques are not separate decisions. The paper substrate determines which finishes are possible and what they look like. A foil stamp on uncoated kraft looks completely different from the same foil on gloss-coated board.

### Foil Stamping

Hot foil stamping applies a metallic or pigmented foil to the paper surface under heat and pressure. The result is a reflective, premium mark that cannot be achieved with ink alone.

Foil works best on:

- Smooth, coated surfaces — Maximum reflectivity, clean edges.
- [Black paper](/products/black-paper) — Maximum contrast, especially with gold or rose gold foil.
- [Soft touch paper](/products/soft-touch-paper) — Creates a sophisticated matte-metallic juxtaposition.
- Lightly textured surfaces — Foil sits on top of the texture, creating an interesting mixed finish.

Foil is less effective on:

- Deeply textured or uncoated papers — Foil may not adhere uniformly; edges may appear irregular.
- Very lightweight papers — Heat and pressure can distort the sheet.

### Embossing and Debossing

Blind embossing (no ink or foil) creates a raised or recessed design using only the paper surface. The effect is subtle, tactile, and communicates understated luxury. It works especially well on [thick grey board](/products/grey-board) structures and [embossed paper](/products/embossed-paper) covers.

Debossing (pressed into the surface) is more common than embossing (raised from the surface) for packaging because it protects the raised area from scuffing during handling.

### Spot UV and Coatings

Spot UV varnish applies a high-gloss coating to selected areas, creating contrast between gloss and matt zones on the same surface. It is most effective when the base paper has a matt finish — the gloss UV areas pop dramatically.

### Die-Cutting and Structural Design

The paper choice influences what structural shapes are possible. Heavy [grey board](/products/grey-board) (0.5–4.0 mm) can be die-cut into rigid box components, game board pieces, and structural inserts. Lightweight [tracing paper](/products/tracing-paper) can be die-cut into delicate overlays and sleeves. The material determines the structural vocabulary available to the designer.

## Choosing Paper for the Design Outcome, Not the Spec Sheet

A common mistake in paper sourcing is to select by GSM and price before defining the design intent. A more effective sequence is:

1. **Define the sensory goal** — What should the customer feel, see, and perceive when they encounter this packaging or printed piece?
2. **Identify the surface language** — Gloss, matt, uncoated, or specialty finish? What does the brand's visual identity require?
3. **Select texture and color** — Does the brand need through-dyed color? An embossed pattern? A metallic accent?
4. **Choose finishing techniques** — Foil, emboss, spot UV, or a combination?
5. **Now specify GSM and format** — The substrate serves the design, not the other way around.

This sequence ensures the paper decision is driven by creative intent, not by spreadsheet optimization.

## Translucency, Overlay, and the Power of Reveal

[Tracing paper](/products/tracing-paper) occupies a unique position in paper design. Its translucency — approximately 56%–73% depending on grammage — creates layered visual effects that opaque papers cannot achieve.

Design applications of translucency:

- **Packaging overlays** — A translucent tracing paper sleeve over a printed box creates depth and a "reveal" moment.
- **Book and brochure inserts** — Partially obscuring the page beneath creates visual intrigue.
- **Invitation suites** — A translucent outer layer with the event details printed beneath.
- **Belly bands** — A translucent band that wraps around a box without hiding the surface beneath.

Translucent papers work best when the designer thinks in layers. The paper is not the final surface — it is a filter, a curtain, a moment of anticipation.

## Sustainable Design: Material Honesty as an Aesthetic

Sustainability in paper design is not only about certification. It is also an aesthetic. The visual language of recycled, uncoated, natural-toned papers has become a design style in its own right — what some call "material honesty."

[Kraft paper](/products/kraft-paper) typifies this approach. Its natural brown fiber appearance, uncoated texture, and visible fiber pattern communicate environmental responsibility without needing a logo or a claim. Brands in food, fashion, lifestyle, and personal care increasingly choose kraft and recycled papers because the material itself conveys the sustainability message.

[Grey board](/products/grey-board) — made from 100% post-consumer recycled fiber — is another material that carries its sustainability credentials visibly. When designers leave portions of grey board exposed (rather than covering every surface with printed wrap), the board itself becomes part of the brand's sustainability story.

Design consideration: FSC certification logos are important, but the material can communicate sustainability more powerfully than any printed label.

## Practical Considerations: From Design Concept to Production Reality

### Test Before You Commit

The most beautiful paper sample can fail in production. Always test:

- **Print adhesion** — Does the ink sit on the surface or absorb in? On textured or specialty papers, results vary dramatically.
- **Folding and creasing** — Does the paper crack along the fold? Through-dyed papers and thick boards are more prone to cracking without proper scoring.
- **Gluing and adhesion** — Does the adhesive bond to the surface? Soft-touch coatings and metallic surfaces can resist standard adhesives.
- **Die-cutting** — Do cut edges stay clean? Laminated and coated boards may delaminate if the die is dull or pressure is wrong.
- **Foil stamp release** — Does the foil adhere cleanly? Test on the actual production stock, not a substitute.

### Communicate with Your Supplier

Paper suppliers and converters can advise on material selection for specific production processes. When requesting samples, share:

- The design intent and brand positioning
- The converting processes (printing, die-cutting, gluing, foil stamping, embossing)
- The expected production volume
- The target market and any regulatory requirements

A good supplier will recommend grades that match both the creative vision and the production reality.

## Conclusion

Paper is not a passive substrate. It is an active design material with its own language of surface, texture, color, and finish. For designers and brands, learning to speak that language means creating packaging and print that communicates before anyone reads a word.

The most effective paper choices are not the most expensive or the most unusual. They are the choices that align the sensory experience of the material with the values and identity of the brand. When paper and brand speak the same language, the result is not just packaging — it is presence.

## FAQ

### What is the best paper finish for luxury packaging?

Soft touch paper, leather paper, and matt-coated papers with foil stamping or embossing are the most common choices for luxury packaging. The specific choice depends on the brand's visual identity and tactile goals.

### How do I choose between gloss and matt paper?

Gloss maximizes color saturation and shelf visibility. Matt communicates refinement and photographs better for e-commerce. Choose based on where and how the customer will encounter the packaging.

### What paper works best with foil stamping?

Smooth, coated papers produce the cleanest foil results. [Black paper](/products/black-paper) with gold foil creates the highest contrast. Soft touch paper with foil creates an interesting matte-metallic tension.

### Can textured paper be printed?

Yes, but results depend on the texture depth, ink, and printing method. Deep textures may cause uneven ink coverage. Always test before production.

### What is through-dyed paper and why does it matter?

Through-dyed paper has pigment throughout the entire sheet, not just on the surface. It matters because cut edges, creases, and folds show no white line — a premium detail that elevates packaging quality.

### Is uncoated paper suitable for luxury design?

Yes. Uncoated papers can communicate understated luxury, craftsmanship, and material honesty. They work especially well for brands with natural, artisanal, or minimalist positioning.

## Suggested Internal Links

- [Soft Touch Paper — velvet-smooth luxury surface](/products/soft-touch-paper)
- [Leather Paper — animal-free leather texture](/products/leather-paper)
- [Pearlescent Paper — iridescent shimmer finish](/products/pearlescent-paper)
- [Embossed Paper — 3D textured patterns](/products/embossed-paper)
- [Black Paper — through-dyed luxury black board](/products/black-paper)
- [Gold & Silver Card Paper — metallic reflective surface](/products/gold-silver-card)
- [Tracing Paper — translucent overlay material](/products/tracing-paper)
- [Grey Board — recycled structural board](/products/grey-board)
- [Kraft Paper — natural uncoated packaging paper](/products/kraft-paper)`,image:`/images/blog-articles/paper-design-material-surface-texture-finish-cover-v2.png`,tags:[`paper design`,`surface texture`,`packaging design`,`fancy paper`,`luxury branding`,`design guide`]},{id:`grey-board-vs-duplex-vs-fbb-comparison`,title:`Grey Board vs Duplex Board vs FBB: Which Packaging Board Should You Choose?`,seoTitle:`Grey Board vs Duplex Board vs FBB Comparison Guide | YOUNGSUN`,metaDescription:`Head-to-head comparison of grey board, duplex board, and folding box board (FBB) for packaging. Learn which board to use for rigid boxes, retail cartons, and premium packaging.`,date:`2026-07-24`,author:`YOUNGSUN PAPER Editorial`,category:`Packaging`,excerpt:`Grey board, duplex board, and FBB serve different packaging needs. This head-to-head comparison helps you choose the right board for your project — based on structure, printing, cost, and sustainability.`,content:`# Grey Board vs Duplex Board vs FBB: Which Packaging Board Should You Choose?

Choosing the wrong board for your packaging project costs more than money — it costs production time, print quality, and customer perception. Yet many buyers default to whatever board their converter recommends without understanding the alternatives.

This guide compares three of the most commonly specified packaging boards — [grey board](/products/grey-board), [duplex board](/products/duplex-board), and [folding box board](/products/folding-box-board) — across the dimensions that matter in production: structure, print surface, cost, and sustainability.

## Quick Comparison Table

| Property | Grey Board | Duplex Board | Folding Box Board (FBB) |
|----------|-----------|-------------|------------------------|
| **Primary use** | Structural base for rigid boxes | Cost-effective printed cartons | Premium printed cartons |
| **Fiber type** | 100% recycled | Recycled grey back, white top | Virgin fibre |
| **GSM range** | 300–2500 | 200–450 | 200–450 |
| **Thickness** | 0.5–4.0mm | 0.3–0.6mm | 0.3–0.6mm |
| **Print surface** | Not for direct printing | Coated white top (one side) | Coated white (both sides) |
| **Folding performance** | Poor (rigid, may crack) | Good | Excellent |
| **Price level** | $ | $ | $$ |
| **FSC available** | FSC Recycled | FSC Recycled | FSC Mix / 100% |
| **Best for** | Rigid boxes, book covers, puzzles | Retail cartons, backing boards | Cosmetics, pharma, food cartons |

## Grey Board: The Structural Workhorse

[Grey board](/products/grey-board) is made from 100% post-consumer recycled fiber. It is dense, rigid, and designed for structural applications — not for direct printing. Think of it as the skeleton of a rigid box that gets wrapped with printed paper, fancy paper, or fabric.

### When to Choose Grey Board
- You need **thickness and stiffness** above all else (rigid boxes, book covers, puzzles)
- The board will be **wrapped or covered** with decorative material
- **Sustainability** is a priority (100% recycled, FSC Recycled certified)
- **Cost per millimeter of thickness** is the key metric

### When NOT to Choose Grey Board
- You need **direct high-quality printing** on the board surface
- The packaging requires **clean folding** (grey board creases but may crack on fold)
- You need **lightweight** board (grey board is dense and heavy)

### Real-World Example
A luxury candle brand uses 2.0mm grey board for their rigid box base, wrapped with black soft-touch paper and gold foil stamped. The grey board provides the premium weight and structure — the customer never sees it, but they feel it every time they pick up the box.

## Duplex Board: The Economical All-Rounder

[Duplex board](/products/duplex-board) has a coated white printing surface on top and a grey recycled-fiber back. It is the workhorse of cost-sensitive retail packaging — cereal boxes, shoe boxes, and general merchandise cartons.

### When to Choose Duplex Board
- You need **one-side printing** at good quality
- **Budget is the primary constraint** per unit
- The packaging is a **standard retail carton** with moderate structural demands
- You want **recycled content** (the grey back layer is post-consumer fiber)

### When NOT to Choose Duplex Board
- You need **both sides printed** (the grey back is not printable)
- The packaging requires **premium shelf appearance** (FBB looks better)
- **Food contact** with the uncoated side (the grey back may not be food-safe)

### Real-World Example
A mid-market shoe brand uses 300 gsm duplex board for their shoebox. The coated white top prints their logo and product image crisply. The grey back is unseen inside the box. At 300 gsm, the box has enough rigidity to stack 12 high in a retail stockroom.

## Folding Box Board (FBB): The Premium Performer

[Folding box board](/products/folding-box-board) is made from virgin fibre with coated surfaces. It is the preferred choice for high-speed carton converting lines in cosmetics, pharmaceuticals, and premium food packaging.

### When to Choose FBB
- **Print quality is critical** — both sides may be printed
- **High-speed folding/gluing** — FBB folds cleanly without cracking
- **Premium brand positioning** — the board itself communicates quality
- **Food contact** — virgin fibre is preferred for direct food contact

### When NOT to Choose FBB
- **Thick structural applications** — FBB is typically 200–450 gsm, not suitable for rigid boxes
- **Budget is very tight** — FBB costs more than duplex board
- **You need recycled content** — virgin fibre FBB has lower recycled content than duplex or grey board

### Real-World Example
A cosmetics brand uses 350 gsm FBB for their retail carton. Both sides are coated — the outside prints full-color graphics, the inside has a subtle pattern. The carton folds and glues at 30,000 units per hour on the converter's high-speed line with less than 0.1% reject rate.

## Decision Flowchart

\`\`\`
What is your packaging format?
├─ Rigid box → Grey Board
├─ Folding retail carton, budget priority → Duplex Board
└─ Folding retail carton, quality priority → FBB
\`\`\`

## The Cost Breakdown

Here is a rough cost comparison for a typical 50,000-unit carton order (300 gsm, 500×400mm sheet):

| Board Type | Approx. Cost/Ton (CIF) | Cost per 1000 Sheets | Relative Cost |
|-----------|----------------------|---------------------|---------------|
| Grey Board | $450–550 | Lowest | ★ |
| Duplex Board | $550–700 | Medium | ★★ |
| FBB | $750–950 | Highest | ★★★ |

*Prices are indicative and vary by market, quantity, and specification.*

## Sustainability Comparison

| Criteria | Grey Board | Duplex Board | FBB |
|----------|-----------|-------------|-----|
| Recycled content | ★★★★★ (100%) | ★★★☆☆ (grey back only) | ★☆☆☆☆ (virgin fibre) |
| Recyclability after use | ★★★★★ | ★★★★☆ | ★★★★☆ |
| FSC certification | Recycled | Recycled | Mix / 100% |
| Carbon footprint | Lowest | Medium | Higher |

## Common Mistakes Buyers Make

1. **Specifying FBB for a rigid box** — FBB is not designed for structural rigidity above 450 gsm. Use grey board.
2. **Specifying duplex board when both sides need printing** — Only the white top is printable.
3. **Comparing thickness without comparing density** — Two boards at 1.5mm can have completely different stiffness.
4. **Not testing folding performance** — Board that prints beautifully may still crack on the crease.

## The Bottom Line

- **Rigid box?** Grey board. No questions.
- **Retail carton on a budget?** Duplex board. It prints well, costs less.
- **Premium retail carton?** FBB. The print quality and folding performance justify the cost.

Still not sure? [Contact us](/contact) with your packaging specification — we'll recommend the right board and send samples within 5 business days.

## Suggested Internal Links
- [Grey Board — 100% recycled structural board](/products/grey-board)
- [Duplex Board — cost-effective printed cartons](/products/duplex-board)
- [Folding Box Board — premium virgin-fibre carton board](/products/folding-box-board)
- [C2S Art Board — double-side coated for premium print](/products/art-paper)
- [All Products & Categories](/products)`,image:`/images/blog-articles/grey-board-vs-duplex-vs-fbb-comparison-cover-v2.png`,tags:[`grey board`,`duplex board`,`FBB`,`packaging board`,`comparison guide`,`paperboard selection`]},{id:`paper-thickness-guide-gsm-caliper-points`,title:`Paper Thickness Explained: GSM, Caliper, Microns, and Points — A Complete Guide for Buyers`,seoTitle:`Paper Thickness Guide: GSM, Caliper, Points Explained | YOUNGSUN`,metaDescription:`Understand paper thickness measurements: GSM, caliper (microns/mm), and points (pt). Learn how to specify thickness correctly and avoid costly ordering mistakes.`,date:`2026-07-24`,author:`YOUNGSUN PAPER Editorial`,category:`Guides`,excerpt:`GSM, caliper, microns, points — paper thickness has multiple measurement systems. This guide explains each one, how they relate, and how to specify thickness correctly in your purchase order.`,content:`# Paper Thickness Explained: GSM, Caliper, Microns, and Points

"I need 300 gsm paper." It's the most common specification in paper buying — and one of the most frequently misunderstood. A buyer who specifies only GSM without understanding caliper may receive paper that is technically correct but practically wrong for their application.

This guide explains the four main paper thickness measurement systems, how they relate to each other, and how to avoid the most common specification mistakes.

## The Four Measurement Systems

### 1. GSM (Grams per Square Meter)

**What it measures:** The weight of a single sheet of paper measuring 1 meter × 1 meter.

**Example:** A 300 gsm paper means one square meter of that paper weighs 300 grams.

**Best for:** Comparing papers of the same type. Two 300 gsm woodfree papers will feel similar. But a 300 gsm grey board and a 300 gsm art paper will have completely different thicknesses because density varies by fiber composition and manufacturing process.

**Limitations:** GSM does NOT tell you thickness. A dense, compressed paper can have the same GSM as a bulky, airy paper but be half as thick.

### 2. Caliper (Thickness)

**What it measures:** The actual physical thickness of a single sheet, measured in microns (µm) or millimeters (mm).

**Example:** A 300 gsm grey board might have a caliper of 450 microns (0.45mm), while a 300 gsm C2S art paper might be only 280 microns (0.28mm).

**Best for:** Applications where physical thickness matters — rigid box fit, spine width of a book, stacking height, die-cutting clearance.

**How it's measured:** A precision micrometer applies standardized pressure to the sheet. Measurement conditions (temperature, humidity) affect results because paper expands and contracts with moisture.

### 3. Microns (µm)

**What it measures:** The same as caliper — physical thickness. 1 micron = 0.001 millimeter.

**Why it's used:** Microns are common in Asia and Europe. Millimeters are more common in North America.

**Conversion:**
- 1000 microns = 1.0 millimeter
- 500 microns = 0.5 millimeter
- 100 microns = 0.1 millimeter

### 4. Points (pt)

**What it measures:** Thickness in thousandths of an inch. Used primarily in North America.

**Conversion:**
- 1 point (pt) = 0.001 inches = 25.4 microns
- 10 pt = 0.010 inches ≈ 254 microns ≈ 0.25 mm
- 24 pt = 0.024 inches ≈ 610 microns ≈ 0.61 mm

## The Density Factor: Why GSM ≠ Thickness

Paper density is the bridge between GSM and caliper. Two papers with identical GSM can have dramatically different calipers because of different densities.

| Paper Type | Typical Density | 300 GSM Caliper |
|-----------|----------------|-----------------|
| Grey board (high density) | 0.75–0.85 g/cm³ | ~350–400 µm (0.35–0.40 mm) |
| Woodfree paper (medium density) | 0.70–0.80 g/cm³ | ~375–430 µm (0.38–0.43 mm) |
| FBB (medium density) | 0.60–0.75 g/cm³ | ~400–500 µm (0.40–0.50 mm) |
| C2S Art paper (lower density) | 0.55–0.70 g/cm³ | ~430–550 µm (0.43–0.55 mm) |

*Actual values vary by manufacturer, fiber type, filler content, and calendering.*

## Common Specification Mistakes

### Mistake 1: Specifying only GSM
"I need 300 gsm paper" — but 300 gsm grey board is 0.4mm thick while 300 gsm art paper may be 0.5mm thick. If your die-cutting tooling is set for 0.4mm and you receive 0.5mm, you'll have problems.

**Fix:** Always specify BOTH GSM and target caliper with tolerance.
> "300 gsm (±5%), caliper 400 µm (±20 µm)"

### Mistake 2: Confusing points with GSM
A North American buyer asks for "12 point board." An Asian supplier unfamiliar with the points system quotes 12 gsm. Result: the buyer receives paper 0.3mm thick instead of the 0.3mm expected — but at 1/25th the weight.

**Fix:** Always provide thickness in both systems.
> "12 pt (0.012 inches / 305 microns)"

### Mistake 3: Not specifying measurement conditions
Paper thickness changes with humidity. A sheet measured at 50% RH in a Chinese factory in winter may read differently at 65% RH in a Brazilian warehouse in summer.

**Fix:** Reference the test standard.
> "Caliper measured per TAPPI T411 at 50% RH, 23°C"

### Mistake 4: Ignoring bulk requirements for books
Book publishers care about bulk (pages per inch or cm). Specifying only GSM without bulk specification can result in a book that is 20% thicker or thinner than expected — changing the spine width and cover design.

**Fix:** Specify bulk.
> "Bulk: 1.8 cm³/g minimum"

## How to Write a Bulletproof Thickness Specification

\`\`\`
Product: Folding Box Board
GSM: 300 ±5%
Caliper: 420 µm ±20 µm (per ISO 534)
Bulk: 1.4 cm³/g minimum
Measurement conditions: 23°C, 50% RH
\`\`\`

This specification tells the supplier exactly what you need, how to measure it, and what tolerance is acceptable. No ambiguity. No surprises.

## Quick Reference Table

| Measurement | Unit | Region | Use Case |
|------------|------|--------|----------|
| GSM | g/m² | Global (standard) | Material specification, pricing |
| Microns (µm) | 0.001 mm | Asia, Europe | Physical thickness |
| Millimeters (mm) | 1.0 mm | Global | Physical thickness |
| Points (pt) | 0.001 inch | North America | Physical thickness |

## The Bottom Line

Specify GSM for weight and pricing. Specify caliper for physical thickness. Never assume one predicts the other. The five minutes it takes to write a proper dual specification will save weeks of delay, rework, and dispute resolution.

Need help specifying your project? [Contact our technical team](/contact) — we'll help you write a specification that ensures you get exactly what you need.

## Suggested Internal Links
- [Materials Library — compare 25+ paper grades](/materials)
- [How to Order — specification guide](/how-to-order)
- [Grey Board — 100% recycled structural board](/products/grey-board)
- [All Products & Categories](/products)`,image:`/images/blog-articles/paper-thickness-guide-gsm-caliper-points-cover-v2.png`,tags:[`paper thickness`,`GSM`,`caliper`,`paper specification`,`buying guide`,`technical guide`]},{id:`ocean-freight-paper-logistics-guide`,title:`Ocean Freight for Paper Buyers: Container Types, Costs, Transit Times, and Documentation`,seoTitle:`Ocean Freight for Paper: Container Guide & Transit Times | YOUNGSUN`,metaDescription:`Complete guide to ocean freight for paper and board imports. Container types (20ft, 40ft, 40HQ), loading capacity (tons per container), transit times by route, and required shipping documents.`,date:`2026-07-24`,author:`YOUNGSUN PAPER Editorial`,category:`Guides`,excerpt:`Understanding ocean freight is essential for paper importers. This guide covers container types and capacities, transit times from China to major ports, shipping documents, and practical tips to reduce freight costs.`,content:`# Ocean Freight for Paper Buyers: Container Types, Costs, Transit Times, and Documentation

Paper is heavy. A single 40-foot container of paperboard can weigh 25 metric tons — more than a fully loaded 18-wheeler truck. Understanding container logistics is not optional for paper importers; it's the difference between profitable sourcing and losing money on freight.

This guide covers everything international paper buyers need to know about ocean freight from China.

## Container Types and Paper Capacity

### 20-Foot Container (20GP)
- **Internal dimensions:** 5.9m × 2.35m × 2.39m
- **Volume:** ~33 cubic meters
- **Max payload:** ~28 tons (but paper usually maxes out weight before volume)
- **Paper capacity:** 15–18 metric tons (depending on product density)
- **Best for:** Trial orders, smaller volumes, destinations with weight restrictions

### 40-Foot Container (40GP)
- **Internal dimensions:** 12.03m × 2.35m × 2.39m
- **Volume:** ~67 cubic meters
- **Max payload:** ~26–28 tons
- **Paper capacity:** 22–26 metric tons
- **Best for:** Regular orders, medium-volume buyers

### 40-Foot High Cube (40HQ)
- **Internal dimensions:** 12.03m × 2.35m × 2.69m (30cm taller)
- **Volume:** ~76 cubic meters
- **Max payload:** ~26–28 tons
- **Paper capacity:** ~25 metric tons (industry standard for paper)
- **Best for:** Most paper and board orders — the extra height allows better pallet stacking

### Why 40HQ is the Paper Industry Standard
Paper and paperboard are dense products. You typically hit the weight limit (25–26 tons) before filling the volume of a 40HQ. This makes 40HQ the most cost-effective option: you maximize payload while the freight cost difference between 40GP and 40HQ is minimal.

## Transit Times from Shenzhen to Major Destinations

| Destination Region | Port Example | Transit Time | Notes |
|-------------------|-------------|-------------|-------|
| Southeast Asia | Singapore, Jakarta | 7–12 days | Fastest routes |
| Middle East | Dubai, Jeddah | 15–20 days | Via Strait of Malacca |
| North America (West) | Los Angeles, Vancouver | 15–22 days | Direct Pacific crossing |
| North America (East) | New York, Savannah | 28–35 days | Via Panama Canal |
| Europe (North) | Hamburg, Rotterdam | 30–35 days | Via Suez Canal |
| Europe (South) | Barcelona, Valencia | 28–33 days | Via Suez Canal |
| South America (West) | Buenaventura, Callao | 30–35 days | Trans-Pacific |
| South America (East) | Santos, Buenos Aires | 35–40 days | Via Cape of Good Hope |
| Africa (East) | Mombasa, Dar es Salaam | 25–30 days | Via Strait of Malacca |
| Africa (West) | Lagos, Abidjan | 35–40 days | Via Cape of Good Hope |
| Australia | Sydney, Melbourne | 18–25 days | Direct Pacific |

*Times are approximate and vary by carrier, season, and port congestion. Add 1–2 weeks for inland trucking/rail to your final delivery address.*

## Total Timeline: Order to Delivery

\`\`\`
Week 1–3:  Production (paper making, cutting, packing)
Week 3–4:  Inland transport to port + customs export clearance
Week 4–10: Ocean transit (varies by destination)
Week 10–11: Import customs clearance + port handling
Week 11–12: Inland delivery to your warehouse

TOTAL: ~6–12 weeks from order confirmation to delivery
\`\`\`

## Required Shipping Documents

Every paper export shipment requires these documents:

| Document | Purpose | Issued By |
|----------|---------|-----------|
| **Bill of Lading (B/L)** | Proof of shipment, title to goods | Shipping line |
| **Commercial Invoice** | Transaction record, customs valuation | Supplier |
| **Packing List** | Container contents, weight, dimensions | Supplier |
| **Certificate of Origin** | Proves country of manufacture | Chamber of Commerce |
| **FSC Certificate** | Chain of custody documentation | Supplier / Certifier |
| **SGS Test Report** | Third-party quality verification | SGS (if requested) |
| **FDA Compliance Letter** | Food-contact material declaration | Supplier (if applicable) |

## Key Freight Terms: FOB vs CIF

**FOB (Free On Board):** The supplier pays all costs until the goods are loaded onto the vessel at the port of origin. YOU arrange and pay for ocean freight, insurance, and destination charges.

**CIF (Cost, Insurance, Freight):** The supplier includes ocean freight and insurance in the price. The supplier arranges shipping to your destination port. You handle import clearance and inland delivery.

### Which Should You Choose?

- **New buyer / first order:** CIF is simpler. One price, one point of contact.
- **Experienced importer with freight forwarder relationships:** FOB gives you more control over carrier choice and potentially lower costs.
- **Small volume (<5 tons):** CIF is almost always better — you won't get competitive freight rates on small volumes.

## 5 Practical Tips to Reduce Freight Costs

1. **Always ship full containers.** Less-than-container-load (LCL) paper shipments cost 40–60% more per ton than full-container-load (FCL).
2. **Use 40HQ containers.** The cost difference between 40GP and 40HQ is minimal ($100–200), but 40HQ fits more paper — lowering your per-ton freight cost.
3. **Plan for port proximity.** YOUNGSUN is 50km from Shenzhen port. Shorter inland trucking = lower FOB cost.
4. **Negotiate annual freight contracts.** If you ship 10+ containers per year, negotiate annual rates with carriers — savings of 15–25% vs spot rates.
5. **Consolidate mixed orders.** Combine multiple paper grades in one container instead of splitting across containers. Mixed loading is standard at YOUNGSUN.

## What to Ask Your Supplier Before Shipping

- [ ] What is the container loading plan? (weight distribution, pallet layout)
- [ ] Are desiccants included for moisture protection?
- [ ] Are pallets IPPC heat-treated for export?
- [ ] What documentation package will I receive?
- [ ] Can you provide photos of the loaded container before sealing?
- [ ] What is the estimated vessel departure date?

## The Bottom Line

Ocean freight can represent 10–25% of your total paper cost depending on destination. Understanding container types, transit times, and documentation requirements helps you budget accurately, avoid delays, and negotiate better terms.

[Request a quote](/contact) with your destination port, and we'll provide a detailed CIF quotation including ocean freight and all documentation.

## Suggested Internal Links
- [How to Order — complete sourcing process](/how-to-order)
- [How to Source Paper from China — full guide](/blog/how-to-source-paper-from-china)
- [All Products & Categories](/products)`,image:`/images/blog-articles/ocean-freight-paper-logistics-guide-cover-v2.png`,tags:[`ocean freight`,`shipping guide`,`logistics`,`container loading`,`FOB`,`CIF`,`import guide`]},{id:`paper-moisture-content-control-guide`,title:`Paper Moisture Content: Why It Matters and How to Control It for Export Shipments`,seoTitle:`Paper Moisture Content Guide: Control for Export | YOUNGSUN`,metaDescription:`How paper moisture content affects printing, converting, and storage. Learn the ideal moisture range (6-8%), measurement methods, and how to prevent moisture damage during ocean freight.`,date:`2026-07-24`,author:`YOUNGSUN PAPER Editorial`,category:`Guides`,excerpt:`Paper moisture content affects everything — print quality, dimensional stability, converting performance, and shelf life. This technical guide covers measurement, ideal ranges, and ocean freight moisture protection.`,content:`# Paper Moisture Content: Why It Matters and How to Control It

Paper is hygroscopic — it absorbs and releases moisture from the surrounding air. A sheet of paper that measures perfectly at 50% relative humidity in a Chinese factory may arrive in Europe or the Middle East with completely different physical properties.

For international buyers importing paper by ocean container, moisture content is one of the most common causes of quality disputes — and one of the easiest to manage with proper specification and handling.

## What Is Paper Moisture Content?

Paper moisture content is the percentage of water weight in a sheet of paper relative to its total weight.

**Example:** A 100-gram sheet with 7% moisture content contains 7 grams of water and 93 grams of fiber and filler.

## Why Moisture Content Matters

### 1. Dimensional Stability
Paper expands when it absorbs moisture and shrinks when it dries. This is not uniform — paper expands more across the grain than along the grain. A 1% change in moisture content can cause a 0.1–0.2% dimensional change.

For a 1,000mm sheet, that's 1–2mm of expansion. For multi-color printing requiring precise registration, this is enough to cause misregistration and waste.

### 2. Print Quality
- **Too dry (<4%):** Static electricity, poor ink adhesion, brittle paper that cracks on folding.
- **Too wet (>9%):** Ink smearing, slow drying, wavy edges, poor toner adhesion in digital printing.
- **Optimal (5–7%):** Clean ink transfer, predictable drying, stable dimensions.

### 3. Converting Performance
Die-cutting, creasing, and folding all depend on the paper having the right moisture level. Overly dry paper cracks on the crease. Overly wet paper stretches and tears.

### 4. Mold and Mildew
Moisture content above 10% combined with warm temperatures creates conditions for mold growth. A container of paper that gets hot and humid during a 30-day ocean voyage is at risk.

## Ideal Moisture Content by Product Type

| Product | Ideal MC | Notes |
|---------|---------|-------|
| Grey board | 7–9% | Dense board tolerates slightly higher MC |
| Duplex board | 6–8% | Balance print surface with structure |
| FBB | 6–8% | Virgin fibre, stable |
| Woodfree paper | 5–7% | Lower MC for better print registration |
| C2S Art paper | 5–7% | Coating provides some moisture barrier |
| Kraft paper | 6–8% | Natural kraft absorbs/desorbs quickly |
| Greaseproof paper | 5–7% | Dense structure, slow moisture exchange |
| Cupstock | 6–8% | PE coating provides moisture barrier |

## How Moisture Content Is Measured

### Oven-Dry Method (Reference Standard)
A sample is weighed, dried in an oven at 105°C until all moisture evaporates, then re-weighed. The weight difference is the moisture content.

**Standard:** ISO 287, TAPPI T412
**Accuracy:** ±0.1%
**Limitation:** Destructive, takes hours

### Electronic Moisture Meter
A handheld meter measures electrical resistance or capacitance, which correlates with moisture content.

**Standard:** Calibrated against oven-dry method
**Accuracy:** ±0.5–1%
**Advantage:** Instant, non-destructive

## Moisture Protection During Ocean Freight

Ocean containers experience extreme conditions: daytime solar heating (container interior can reach 60°C/140°F), nighttime cooling, and humidity fluctuations from 40% to 95% RH.

### The "Container Rain" Problem
When a container cools at night, moisture in the air condenses on the container walls and ceiling. This "container rain" can drip onto paper cargo, causing localized water damage — wavy edges, stuck sheets, and mold.

### Protection Methods

1. **Moisture Barrier Wrapping:** Entire pallets wrapped in polyethylene film with taped seams.
2. **Desiccants:** Silica gel or calcium chloride desiccant packs placed inside the container. A 40HQ container typically needs 10–15 kg of desiccant.
3. **Container Liner:** A kraft paper or polyethylene liner inside the container walls absorbs condensation before it reaches the cargo.
4. **Kraft Paper Interleaving:** Top and bottom of each pallet covered with absorbent kraft sheets.

### YOUNGSUN's Standard Export Packing
- All pallets wrapped in moisture-barrier PE film
- 10 kg calcium chloride desiccant per 40HQ container
- Container floor lined with kraft paper
- Photo documentation of packing before container sealing

## What to Check When Your Container Arrives

1. **Inspect the container exterior** for damage, holes, or signs of water ingress.
2. **Open the container and check** for condensation on walls/ceiling.
3. **Check desiccant packs** — if they are saturated (hard/full), the container experienced high humidity.
4. **Random moisture meter testing** of 5–10 sheets from different pallets.
5. **Visual inspection** for wavy edges, discoloration, mold spots, or stuck-together sheets.

If moisture is outside the agreed specification (±1% from target), document it immediately with photos and notify your supplier.

## How to Specify Moisture Content in Your Purchase Order

\`\`\`
Moisture content: 7.0% ±1.0% (per ISO 287 oven-dry method)
Packing: PE-wrapped pallets, 10 kg desiccant per 40HQ container
Storage before shipping: Conditioned at 23°C, 50% RH for minimum 48 hours
\`\`\`

## The Bottom Line

Moisture content is invisible — you cannot see whether a sheet is at 6% or 9% MC by looking at it. But you will see the consequences in your printing press, die-cutter, or folder-gluer. A 30-second moisture meter check at receiving can prevent hours of production downtime.

[Contact our quality team](/quality) for moisture content specifications and test reports for your product grade.

## Suggested Internal Links
- [Quality Assurance — our 5-stage inspection process](/quality)
- [How to Order — packing & shipping details](/how-to-order)
- [Materials Library — technical specs for all grades](/materials)`,image:`/images/blog-articles/paper-moisture-content-control-guide-cover-v2.png`,tags:[`moisture content`,`paper quality`,`ocean freight`,`export packing`,`technical guide`,`quality control`]},{id:`paper-glossary-terms-buyers-should-know`,title:`The Paper Buyer's Glossary: 50+ Essential Terms Every Importer Should Know`,seoTitle:`Paper Industry Glossary: 50+ Terms for Buyers | YOUNGSUN`,metaDescription:`Comprehensive paper industry glossary for international buyers. Covers printing terms, paper grades, converting processes, specifications, and logistics terminology.`,date:`2026-07-24`,author:`YOUNGSUN PAPER Editorial`,category:`Guides`,excerpt:`From 'abrasion resistance' to 'whiteness,' this glossary defines 50+ paper industry terms that every international buyer, importer, and packaging professional should know.`,content:`# The Paper Buyer's Glossary: 50+ Essential Terms Every Importer Should Know

The paper industry speaks its own language. When a supplier says "C2S art board with 92% brightness, PPI 600, caliper 12pt," they are communicating precise specifications — but only if you understand the vocabulary.

This glossary defines 50+ essential terms organized by category. Use it as a reference when reading specifications, comparing quotes, or communicating with suppliers.

## Paper Grades & Types

**Art Paper / C2S:** Paper coated on both sides (Coated 2 Sides). Used for high-quality printing — magazines, catalogs, brochures. Available in gloss and matt finishes.

**C1S:** Coated one side. Used for labels and packaging where only the outside needs printing.

**CKB (Coated Kraft Back):** Board with a coated white printing surface on top and unbleached kraft fiber on the reverse. Used for beverage cartons and frozen food packaging.

**Chipboard:** Another term for grey board — dense recycled paperboard for structural applications.

**Duplex Board:** Paperboard with a coated white top layer and grey recycled back layer. Economical choice for printed cartons.

**FBB (Folding Box Board):** Virgin-fibre board with coated surfaces, engineered for clean folding and high-quality printing on carton converting lines.

**Grey Board:** Dense structural board made from recycled fiber. The standard material for rigid boxes and book covers.

**Kraft Paper:** Strong paper made from kraft (sulfate) pulp. Natural brown or bleached white. Used for bags, wrapping, and industrial packaging.

**LWC (Lightweight Coated):** Low-grammage coated paper (40–80 gsm) for magazines and catalogs where postal weight matters.

**MG Paper (Machine Glazed):** Paper with one glossy side (dried against a heated cylinder) and one matte side.

**NCR Paper (No Carbon Required):** Carbonless copy paper that transfers writing pressure to underlying sheets through micro-encapsulated dye.

**Newsprint:** Low-cost, uncoated paper for newspapers and mass-circulation printing.

**Woodfree Paper:** Paper made from chemical pulp with lignin removed. Higher brightness and better aging than mechanical (wood-containing) papers. Used for books, notebooks, and office paper.

## Physical Properties

**Basis Weight:** Weight of paper per unit area. Expressed as GSM (grams per square meter) or lbs (pounds per ream in North America).

**Bulk:** The volume occupied by paper per unit weight. Measured in cm³/g. Higher bulk means thicker paper at the same GSM. Important for book publishers.

**Caliper:** Physical thickness of a single sheet. Measured in microns (µm), millimeters (mm), or points (pt).

**Density:** Weight per unit volume (g/cm³). The relationship between GSM and caliper. Higher density = thinner paper at the same GSM.

**Formation:** The uniformity of fiber distribution in a sheet. Good formation = even look-through, consistent strength. Poor formation = cloudy appearance, weak spots.

**Grain Direction:** The direction in which most fibers are aligned. Paper folds more easily parallel to the grain. Expands more across the grain with moisture changes.

**GSM (Grams per Square Meter):** The standard international unit for paper basis weight. Also written as g/m² or gsm.

**Moisture Content:** Percentage of water weight in paper relative to total weight. Typically 5–8% for most grades.

**Opacity:** The ability of paper to prevent show-through of printing from the reverse side. Higher opacity = less show-through.

**Points (pt):** North American thickness unit. 1 pt = 0.001 inches = 25.4 microns.

**Porosity:** The degree to which paper allows air to pass through. Affects ink absorption and drying.

**Stiffness:** Resistance to bending. Critical for carton board and packaging. Related to caliper, density, and fiber composition.

**Whiteness / Brightness:** Measurement of light reflectance. Higher values appear whiter/brighter. ISO brightness (diffuse blue reflectance) vs CIE whiteness (full spectrum).

## Printing & Surface Properties

**Coated Paper:** Paper with a surface layer of mineral coating (clay, calcium carbonate) for improved print quality. Gloss, matt, silk, and satin finishes available.

**Dot Gain:** The increase in halftone dot size during printing. Affected by paper absorbency, ink, and press conditions.

**Gloss:** Specular reflection of light from a paper surface. Higher gloss = shinier, more reflective.

**Ink Holdout:** The ability of paper to keep ink on the surface rather than absorbing it. Better holdout = sharper images, less ink consumption.

**Picking:** The lifting of fibers or coating particles from the paper surface during printing. Caused by ink tack exceeding surface strength.

**Runnability:** The ability of paper to perform on a printing press or converting machine without breaks, jams, or quality issues.

**Smoothness:** Surface flatness of paper. Measured by air leak methods (Bendtsen, Sheffield). Smoother paper = better print quality.

**Uncoated Paper:** Paper without surface coating. Ink absorbs into the fiber. Natural, tactile appearance.

## Converting & Finishing

**Creasing:** Creating a compressed line in paperboard to enable clean folding without cracking.

**Die-Cutting:** Cutting paper or board into shapes using a steel rule die.

**Embossing:** Creating a raised (embossed) or recessed (debossed) design on paper using pressure and heat.

**Foil Stamping:** Applying metallic or pigmented foil to paper using a heated die. Also called hot foil stamping or hot stamping.

**Lamination:** Bonding a plastic film (gloss, matt, soft-touch) to paper or board for protection and appearance.

**Perforating:** Creating a line of small holes to enable easy tearing.

**Scoring:** Creating a groove in heavy board to enable folding. Similar to creasing but for thicker materials.

**Slitting:** Cutting a master roll into narrower rolls of specified width.

**Spot UV:** Applying UV varnish to selected areas only, creating contrast between gloss and matt areas on the same surface.

## Certifications & Testing

**Burst Strength:** Resistance to rupture under pressure. Measured in kPa. Important for packaging and bags.

**Cobb Test:** Measures water absorbency of paper. Grams of water absorbed per square meter in a specified time. Lower values = more water-resistant.

**FSC (Forest Stewardship Council):** International certification for responsibly managed forests and chain of custody. Labels: FSC 100%, FSC Mix, FSC Recycled.

**KIT Test:** Standard method (TAPPI T559) for measuring grease resistance. Scale of 1–12. Higher numbers = better grease resistance.

**ISO 9001:** Quality management system standard.

**ISO 14001:** Environmental management system standard.

**SGS:** Independent testing, inspection, and certification company.

**TAPPI:** Technical Association of the Pulp and Paper Industry. Publishes standard test methods.

**Tear Strength:** Force required to continue tearing paper from an initial cut. Measured in mN. Important for bags, wrapping, and industrial papers.

**Tensile Strength:** Force required to break a strip of paper under tension. Measured in kN/m. Important for web-fed printing and converting.

## Logistics & Trade

**B/L (Bill of Lading):** Shipping document issued by the carrier. Serves as receipt for goods, contract of carriage, and document of title.

**CIF (Cost, Insurance, Freight):** Incoterm where the seller arranges and pays for ocean freight and insurance to the destination port.

**Certificate of Origin:** Document certifying the country where goods were manufactured. Required for customs clearance in many countries.

**FCL (Full Container Load):** A container exclusively used by one shipper. Opposite of LCL.

**FOB (Free On Board):** Incoterm where the seller delivers goods onto the vessel at the port of loading. The buyer arranges ocean freight.

**LCL (Less than Container Load):** Shared container space with other shippers. Higher per-unit cost than FCL.

**MOQ (Minimum Order Quantity):** The smallest quantity a supplier will accept for an order.

**TEU (Twenty-foot Equivalent Unit):** Standard unit for counting container capacity. 1 × 20ft container = 1 TEU. 1 × 40ft container = 2 TEU.

## Quick Acronym Reference

| Acronym | Meaning |
|---------|---------|
| C1S | Coated 1 Side |
| C2S | Coated 2 Sides |
| CKB | Coated Kraft Back |
| FBB | Folding Box Board |
| FSC | Forest Stewardship Council |
| GSM | Grams per Square Meter |
| LWC | Lightweight Coated |
| MG | Machine Glazed |
| NCR | No Carbon Required |
| PE | Polyethylene (coating) |

## The Bottom Line

You don't need to memorize every term. But when your supplier sends a specification sheet, you should understand what each value means and which ones matter for your application. Bookmark this page — it's your quick reference for clearer communication and better sourcing outcomes.

Have a term you'd like added? [Let us know](/contact).

## Suggested Internal Links
- [Paper Thickness Guide — GSM, caliper, points explained](/blog/paper-thickness-guide-gsm-caliper-points)
- [Materials Library — technical specs for all grades](/materials)
- [How to Source Paper from China — complete guide](/blog/how-to-source-paper-from-china)`,image:`/images/blog-articles/paper-glossary-terms-buyers-should-know-cover-v2.png`,tags:[`paper glossary`,`paper terms`,`buyer education`,`industry terminology`,`reference guide`]},{id:`how-to-compare-paper-quotes-from-different-suppliers`,title:`How to Compare Paper Quotes from Different Suppliers: The 10-Point Checklist`,seoTitle:`Compare Paper Quotes: 10-Point Checklist for Buyers | YOUNGSUN`,metaDescription:`Learn how to compare paper quotations from different suppliers like-for-like. Avoid the trap of comparing price alone — use this 10-point checklist covering specification, incoterms, certification, and hidden costs.`,date:`2026-07-24`,author:`YOUNGSUN PAPER Editorial`,category:`Guides`,excerpt:`The cheapest quote is rarely the best value. This 10-point checklist helps international paper buyers compare supplier quotations like-for-like and avoid hidden costs that inflate the final landed price.`,content:`# How to Compare Paper Quotes from Different Suppliers: The 10-Point Checklist

Three suppliers. Three quotes. Three prices that differ by 15%. Which one is the best deal?

If you're comparing the price-per-ton line alone, you're almost certainly making the wrong decision. A lower FOB price can easily result in a higher total landed cost once freight, duties, credit terms, quality risk, and documentation gaps are factored in.

This guide provides a systematic, 10-point checklist for comparing paper supplier quotations on a truly like-for-like basis.

## The Trap of Price-Only Comparison

Here's a real scenario:

| | Supplier A | Supplier B | Supplier C |
|---|-----------|-----------|------------|
| Price/ton (FOB) | $580 | $620 | $550 |
| First impression | Mid-range | Expensive | Cheapest ✅ |

Price-only comparison says: Supplier C at $550/ton.

Now let's apply the checklist.

## The 10-Point Comparison Checklist

### 1. Specification Match

Are all three suppliers quoting the EXACT same specification?

| Check | Supplier A | Supplier B | Supplier C |
|-------|-----------|-----------|------------|
| GSM | 300 | 300 | 280 ⚠️ |
| Caliper | 400 µm ±20 | 400 µm ±20 | Not specified ⚠️ |
| Sheet size | 787×1092mm | 787×1092mm | 700×1000mm ⚠️ |
| Certification | FSC Recycled | FSC Recycled | None mentioned ⚠️ |
| Moisture | 7% ±1% | 7% ±1% | Not specified ⚠️ |

**Reality:** Supplier C is quoting a different (lower) specification. Their price is lower because the product is different — not because they're more competitive.

**Action:** Before comparing prices, confirm ALL suppliers are quoting identical or comparable specifications. If one quote lacks detail, request clarification.

### 2. Incoterms

FOB vs CIF vs CFR — the same product at the same price looks very different under different Incoterms.

- **FOB $550/ton** + freight + insurance = total landed cost unknown until you add shipping
- **CIF $680/ton** = all-inclusive to your destination port

Always convert all quotes to the same Incoterm before comparing. CIF = FOB + ocean freight + insurance.

### 3. Payment Terms

Payment terms affect your cash flow and risk exposure.

| Terms | Cash Flow Impact | Risk |
|-------|-----------------|------|
| 100% upfront | Worst — you carry all risk | Highest |
| 30% deposit, 70% before shipment | Standard — balanced | Moderate |
| 30% deposit, 70% against B/L copy | Good — you pay after goods are shipped | Lower |
| L/C at sight | Good — bank guarantee | Lower (but LC fees apply) |
| 30% deposit, 70% 30 days after arrival | Best — you pay after inspection | Lowest |

A supplier offering 30/70 against B/L at $620/ton may be better value than a supplier demanding 100% upfront at $580/ton.

### 4. Delivery Time

A lower price that arrives 4 weeks later could cost more in missed production or stockout penalties.

- Supplier A: 3 weeks production + 20 days transit = 6 weeks total
- Supplier B: 4 weeks production + 20 days transit = 7 weeks total
- Supplier C: 2 weeks production + 20 days transit = 5 weeks total

If Supplier C can deliver 2 weeks faster at $580/ton vs Supplier A at $550/ton, the $30/ton premium may be worth the faster delivery if production scheduling is tight.

### 5. Sample Quality

Never compare prices without comparing physical samples. Specifications on paper can match perfectly while actual performance differs.

Request all suppliers to send samples of the exact grade and GSM you're quoting. Test on YOUR production line with YOUR printing, cutting, folding, and gluing processes.

A sample that prints beautifully but cracks on the crease is not a viable option — regardless of price.

### 6. Certification and Documentation

Missing documentation can cause customs delays that cost far more than the price difference.

- Does the quote include FSC certificates valid for the shipment date?
- For food-contact products: FDA/EU compliance documentation included?
- Certificate of Origin included in the price?
- SGS inspection report included, or is it an extra cost?

A supplier who includes complete documentation at $620 may save you $200–500 in customs broker fees and 2–3 days of clearance time versus a supplier who provides minimal paperwork at $580.

### 7. Packing Quality

Packing quality directly affects damage rates during transit.

Ask each supplier:
- How are pallets wrapped? (PE film vs stretch wrap)
- Are desiccants included?
- Pallet type and quality? (IPPC heat-treated?)
- Edge protection? Corner boards?
- What is the damage/claim rate on their export shipments?

A 2% damage rate on a 25-ton container = 500 kg of damaged product. At $580/ton, that's $290 in waste. If a supplier with better packing at $600/ton has a 0.5% damage rate, the "more expensive" supplier actually costs less per usable ton delivered.

### 8. Communication Responsiveness

How quickly and clearly does each supplier respond to technical questions?

- Reply time: Same-day? 24 hours? 3 days?
- Language quality: Clear technical English or do you need a translator?
- Detail level: Direct answers or vague responses?

Poor communication during the quoting phase almost always means poor communication when problems arise during production or shipping.

### 9. Company Stability and Track Record

- Years in business?
- Export volume per month?
- Mill partnerships (which mills do they source from)?
- References from buyers in your region?
- Factory visit possible? Video call available?

A supplier that has been exporting for 20 years and ships 1,000+ containers annually is less likely to disappear with your deposit than a trading company that opened 6 months ago.

### 10. Hidden Costs

Before comparing final prices, add all hidden costs:

\`\`\`
FOB Price
+ Ocean freight
+ Insurance (0.3–0.5% of CIF value)
+ Customs duties (check your country's HS code — typically 0–6% for paper)
+ Port handling charges
+ Inland trucking to your warehouse
+ Bank transfer fees ($30–50)
+ LC issuance fees (if applicable, 0.1–0.2% of LC value)
+ Customs broker fee
+ Storage/demurrage (if clearance delayed)
─────────────────────────
= TOTAL LANDED COST per ton
\`\`\`

## The Comparison Spreadsheet

Create a simple spreadsheet with these columns:

| Criteria | Weight | Supplier A | Supplier B | Supplier C |
|----------|--------|-----------|-----------|------------|
| Landed cost/ton | 30% | | | |
| Payment terms | 15% | | | |
| Delivery time | 15% | | | |
| Sample quality | 15% | | | |
| Certifications | 10% | | | |
| Communication | 10% | | | |
| Company track record | 5% | | | |
| **Weighted Score** | **100%** | | | |

## The Bottom Line

After applying the checklist to our opening scenario:

| | Supplier A | Supplier B | Supplier C |
|---|-----------|-----------|------------|
| Price/ton (FOB) | $580 | $620 | $550 |
| Spec match? | ✅ | ✅ | ❌ (different spec) |
| Payment terms | 30/70 vs B/L | 30/70 vs B/L | 100% upfront |
| Total landed cost | $735 | $750 | Not comparable |
| Sample quality | Good | Excellent | Not received |
| **Verdict** | **Shortlisted** | **Recommended** | **Eliminated** |

Supplier B is recommended despite the higher FOB price. Their total landed cost is only 2% more, their sample quality is better, their certifications are complete, and their communication is excellent.

Supplier C — the "cheapest" — is eliminated because their specification doesn't match. They're not quoting the same product.

## Final Advice

1. **Always convert to total landed cost** before comparing.
2. **Test samples** on your actual production line before placing a bulk order.
3. **Weight non-price factors** (delivery, payment, communication) appropriately.
4. **The cheapest quote almost never wins** when all factors are properly weighted.

[Request a quotation](/contact) from YOUNGSUN PAPER and see how our pricing, specifications, and documentation compare.

## Suggested Internal Links
- [How to Source Paper from China — complete guide](/blog/how-to-source-paper-from-china)
- [How to Order — the full process](/how-to-order)
- [Materials Library — compare specifications](/materials)`,image:`/images/blog-articles/how-to-compare-paper-quotes-cover-v2.png`,tags:[`supplier comparison`,`quotation`,`buying guide`,`cost comparison`,`sourcing strategy`,`price analysis`]},{id:`paper-surface-finishing-guide-gloss-matt-soft-touch-uv-foil`,title:`Paper Surface Finishing: The Complete Guide to Gloss, Matt, Soft-Touch, UV, and Foil`,seoTitle:`Paper Surface Finishing Guide: Gloss, Matt, UV, Foil | YOUNGSUN`,metaDescription:`Complete guide to paper surface finishing techniques: gloss & matt lamination, soft-touch coating, spot UV varnish, hot foil stamping, debossing. Choose the right finish for your packaging.`,date:`2026-07-24`,author:`YOUNGSUN PAPER Editorial`,category:`Design`,excerpt:`Surface finishing transforms ordinary paper into premium packaging. This guide compares gloss lamination, matt lamination, soft-touch coating, spot UV, foil stamping, and embossing — cost, performance, and when to use each.`,content:`# Paper Surface Finishing: The Complete Guide to Gloss, Matt, Soft-Touch, UV, and Foil

Paper surface finishing is the difference between a box that says "budget" and one that says "luxury." Two sheets of the same 300 gsm C2S art board can look and feel completely different depending on whether they're gloss laminated, matt laminated, or soft-touch coated.

This guide compares the six most common surface finishing techniques for paper and board packaging — their cost, performance, best applications, and limitations.

## The Six Finishing Techniques at a Glance

| Finish | Look | Touch | Relative Cost | Durability |
|--------|------|-------|---------------|------------|
| Gloss lamination | Shiny, reflective | Smooth, slippery | $$ | ★★★★★ |
| Matt lamination | Flat, understated | Smooth, warm | $$ | ★★★★☆ |
| Soft-touch coating | Deep matte | Velvet, tactile | $$$ | ★★★☆☆ |
| Spot UV | Gloss on matt contrast | Textured contrast | $$$ | ★★★☆☆ |
| Hot foil stamping | Metallic, reflective | Smooth, premium | $$$$ | ★★★★☆ |
| Blind embossing | Subtle, 3D | Raised texture | $$$ | ★★★☆☆ |

## Gloss Lamination

A clear glossy plastic film (typically 25–30 micron BOPP) thermally bonded to the paper surface.

**Pros:**
- Maximum color saturation — colors pop
- Excellent scuff and moisture resistance
- Wipe-clean surface (important for food and cosmetics packaging)
- Lowest cost among lamination options

**Cons:**
- Can look "cheap" or mass-market if overused
- Fingerprints visible
- Glare makes photography difficult (e-commerce product shots)

**Best for:** Mass-market retail packaging, food cartons, magazine covers, children's books

**Cost:** $0.03–0.06 per A4 sheet (varies by volume)

## Matt Lamination

Same process as gloss but with a matte-finish film.

**Pros:**
- Elegant, understated appearance
- No glare — photographs beautifully
- Softer hand-feel than gloss
- Good scuff resistance

**Cons:**
- Slightly more expensive than gloss
- Can show scuff marks more visibly than gloss on dark colors
- Darker, less vibrant colors than gloss

**Best for:** Premium retail packaging, luxury catalogs, corporate brochures, book covers

**Cost:** $0.04–0.08 per A4 sheet

## Soft-Touch Coating

A specialty aqueous or UV coating that creates a velvet-smooth, matte surface with a distinctive tactile feel.

**Pros:**
- Unique tactile experience — people want to touch it
- Deepens blacks and enriches colors
- Fingerprint resistant (unlike gloss)
- Premium, contemporary luxury feel

**Cons:**
- More expensive than standard lamination
- Less scratch-resistant than gloss/matt lamination
- Oil from fingers can leave marks on some formulations
- Not suitable for high-abrasion applications

**Best for:** Luxury cosmetics, premium hang tags, high-end business cards, gift boxes

**Cost:** $0.08–0.15 per A4 sheet

**YOUNGSUN option:** [Soft Touch Paper](/products/soft-touch-paper) — pre-coated at the mill, eliminating the need for post-print coating.

## Spot UV Varnish

A high-gloss UV-cured varnish applied to selected areas only, creating contrast between gloss and matt zones on the same surface.

**Pros:**
- Creates visual drama — gloss areas "pop" against matt background
- Can highlight logos, product names, or design elements
- Adds perceived value without full-surface coating cost
- Works on both coated and uncoated papers

**Cons:**
- Requires precise registration (adds setup cost)
- Registration errors visible (misaligned UV is obvious)
- Less protective than full-surface lamination

**Best for:** Premium packaging, brochure covers, presentation folders, business cards

**Cost:** $0.06–0.12 per A4 sheet (setup cost additional)

## Hot Foil Stamping

A heated die presses metallic or pigmented foil onto the paper surface, bonding it under heat and pressure.

**Pros:**
- Unmatched luxury perception — metallic foil communicates premium instantly
- Available in gold, silver, copper, rose gold, holographic, and pigmented foils
- Works on dark papers where ink would be invisible
- Permanent — won't fade, scratch, or peel

**Cons:**
- Most expensive finishing technique
- Custom die required (one-time cost: $80–200)
- Fine detail can fill in or lose definition
- Not suitable for large solid areas (foil may wrinkle)

**Best for:** Luxury packaging, wine labels, certificate covers, wedding invitations, brand logos

**Gold foil on [black paper](/products/black-paper) is the classic luxury packaging combination.**

**Cost:** Die: $80–200 one-time. Per impression: $0.03–0.10 depending on foil type and coverage area.

## Blind Embossing/Debossing

A die presses the paper into a raised (embossed) or recessed (debossed) design — without ink, foil, or coating.

**Pros:**
- Ultimate understated luxury — no color, just texture
- Works on any paper type
- Communicates craftsmanship and attention to detail
- Can be combined with foil stamping (foil emboss)

**Cons:**
- Die cost (one-time)
- Very fine detail may not reproduce cleanly
- Deep embossing on thin paper may cause cracking
- Less visible in flat lighting (needs side light to see)

**Best for:** Luxury letterhead, certificate covers, premium hang tags, book covers

**Cost:** Die: $100–250 one-time. Per impression: $0.04–0.12.

## Combining Finishes

The most sophisticated packaging often combines multiple finishing techniques:

| Combination | Effect | Example |
|-------------|--------|---------|
| Matt lam + Spot UV | Matt surface with gloss highlights | Premium brochure cover |
| Soft-touch + Gold foil | Velvet surface with metallic logo | Luxury cosmetics box |
| Matt lam + Blind deboss | Flat surface with recessed texture | High-end stationery |
| Gloss lam + Spot UV | Maximum gloss with even more gloss contrast | Magazine special edition |

## How to Choose

\`\`\`
What is your priority?
├─ Maximum durability → Gloss lamination
├─ Elegant, understated → Matt lamination
├─ Tactile luxury → Soft-touch coating
├─ Attention to specific elements → Spot UV
├─ Metallic luxury → Hot foil stamping
└─ Texture without color → Blind embossing
\`\`\`

## Practical Tips

1. **Always test on the actual production stock.** A finish that looks perfect on coated board may behave differently on uncoated paper.
2. **Consider the full production chain.** Will the finished piece be glued, folded, die-cut AFTER finishing? Some coatings can interfere with glue adhesion.
3. **Think about the end-user experience.** A high-gloss black box shows every fingerprint. A soft-touch box feels amazing but may scuff in a retail bag.
4. **Budget for dies and setup.** Foil stamping and embossing have one-time die costs. Amortize over your print run.
5. **Sustainability consideration.** Lamination films make paper harder to recycle. If sustainability is a brand priority, consider aqueous or UV coatings instead of plastic film lamination.

## Conclusion

Surface finishing is not an afterthought — it's a primary design decision that affects how your packaging looks, feels, performs, and is perceived. A $0.05 lamination upgrade can make $1 of paper and printing look like $5 worth of packaging.

[Contact us](/contact) to discuss finishing options for your paper order — we can supply paper matched to your finishing requirements or coordinate finishing services as part of your order.

## Suggested Internal Links
- [Soft Touch Paper — velvet-smooth, mill-coated](/products/soft-touch-paper)
- [Black Paper — through-dyed, foil stamping perfect](/products/black-paper)
- [Fancy Paper Collection — 120+ textures](/fancy-paper-collection)
- [Paper as a Design Material — surface, texture, finish](/blog/paper-design-material-surface-texture-color-finish)`,image:`/images/blog-articles/paper-surface-finishing-guide-gloss-matt-soft-touch-uv-foil-cover-v2.png`,tags:[`surface finishing`,`lamination`,`foil stamping`,`UV coating`,`soft touch`,`packaging design`]},{id:`reduce-packaging-costs-without-sacrificing-quality`,title:`How to Reduce Paper Packaging Costs Without Sacrificing Quality: 8 Proven Strategies`,seoTitle:`Reduce Paper Packaging Costs: 8 Strategies That Work | YOUNGSUN`,metaDescription:`8 practical strategies to reduce paper and board packaging costs without compromising quality. GSM optimization, sheet utilization, container efficiency, and more.`,date:`2026-07-24`,author:`YOUNGSUN PAPER Editorial`,category:`Packaging`,excerpt:`Packaging cost pressure is real, but quality doesn't have to suffer. These 8 proven strategies help buyers reduce paper and board costs by 10-25% through smarter specification, sourcing, and logistics.`,content:`# How to Reduce Paper Packaging Costs Without Sacrificing Quality: 8 Proven Strategies

Every packaging buyer faces the same pressure: reduce costs, maintain quality. The easy answer is "switch to a cheaper supplier" — but that usually means lower quality, later deliveries, or missing certifications.

These 8 strategies reduce your paper and board costs by 10–25% while maintaining — or even improving — packaging quality. No supplier switch required.

## Strategy 1: Optimize GSM Without Sacrificing Performance

The most common over-specification in paper buying: ordering 350 gsm when 300 gsm would perform identically.

**The math:**
- 350 gsm board at $800/ton = $0.28 per square meter
- 300 gsm board at $800/ton = $0.24 per square meter
- Savings: **14% in material cost**

**How to test:** Order sample sheets of the next GSM down (e.g., 300 gsm instead of 350). Run them through your full production process — printing, die-cutting, folding, gluing, filling, shipping. If the finished box performs acceptably, you just found a permanent cost reduction.

**Where this works best:** Rigid boxes, retail cartons, display packaging — anywhere GSM is specified by habit rather than by testing.

**Where to be careful:** Cupstock (too light = cup collapses), heavy-duty shipping boxes, structural components.

## Strategy 2: Optimize Sheet Size to Reduce Trim Waste

Standard sheet sizes (787×1092mm, 889×1194mm) are efficient for standard box formats. But if your box layout wastes 15% of the sheet as trim, you're paying for 15% more paper than you need.

**The fix:** Custom sheet sizes slitted to your exact layout dimensions.

**Example:**
- Standard sheet 787×1092mm = 0.86 m² per sheet
- Your box layout uses only 0.72 m² (16% trim waste)
- Switch to a custom 740×1020mm sheet at 0.75 m²
- Savings: **12% fewer square meters per box**

**What to ask your supplier:** "Can you supply custom-cut sheets to my exact layout size? What is the MOQ for custom sizes?"

**YOUNGSUN capability:** Custom sheet sizes available with ±1mm cutting tolerance. MOQ: 1 ton per size.

## Strategy 3: Switch from Virgin to Recycled Board (Where Appropriate)

Recycled board (grey board, recycled duplex) costs 15–30% less than equivalent virgin-fibre board (FBB).

**When recycled works:**
- Rigid box structures (wrapped — customer never sees the base board)
- Industrial packaging, backing boards, dividers
- Any application where the board is not directly printed or visible

**When to stick with virgin:**
- Direct food contact (virgin fibre preferred in many markets)
- Premium printed surfaces (recycled board has lower brightness)
- Applications requiring maximum folding endurance

**Real example:** A European cosmetics brand switched their rigid box base from virgin-fibre board to YOUNGSUN FSC Recycled grey board. Material cost reduced 22%, FSC Recycled certification achieved, zero quality difference in the finished box.

## Strategy 4: Buy Full Containers, Not Partial Loads

LCL (less-than-container-load) shipping costs 40–60% more per ton than FCL (full-container-load).

**Example: Shenzhen → Hamburg**
- LCL: $120–180 per ton (sharing container space)
- FCL (40HQ, 25 tons): $60–80 per ton
- Savings: **$60–100 per ton**

**If you don't need 25 tons:**
- Combine multiple products in one container (mixed loading is standard)
- Coordinate with a nearby buyer to share a container
- Build inventory — the freight savings usually outweigh carrying costs

## Strategy 5: Negotiate Annual Contracts Instead of Spot Buying

Spot market paper prices fluctuate. Annual or semi-annual contracts with volume commitments typically secure 5–12% lower pricing than spot purchases.

**What suppliers want in return:**
- Volume commitment (e.g., 10 containers per year)
- Predictable delivery schedule
- Longer payment terms may be offered

**What you get:**
- Lower, locked-in pricing
- Priority production scheduling
- Consistent quality (same mill, same specification)

## Strategy 6: Standardize Specifications Across Product Lines

If you produce 12 different box SKUs using 6 different board specifications, you're paying a complexity premium.

**The fix:** Rationalize to 2–3 standard board specifications that cover all SKUs.

**Example:**
- Before: 6 board specs (different GSM, size, grade) × 6 MOQs × 6 inventory lines
- After: 2 board specs × 2 MOQs × 2 inventory lines
- Savings: Larger per-spec order quantities = lower per-unit pricing, simpler inventory, fewer SKU codes

## Strategy 7: Reduce Damage Rates with Better Packing

A 2% transit damage rate on a 25-ton container = 500 kg of unusable paper worth $300–400. Better export packing costs pennies per ton and drops damage rates to near zero.

**Specify:**
- PE film moisture-barrier wrapping on every pallet
- Desiccant packs (10–15 kg per 40HQ container)
- Edge protectors / corner boards
- IPPC heat-treated pallets

**ROI:** $15–25 per container in packing upgrades saves $300–400 in damage claims.

## Strategy 8: Challenge Every Specification

The most powerful cost-reduction question in paper buying: **"Why this specification?"**

| Specification | Challenge Question |
|--------------|-------------------|
| 350 gsm FBB | Could 300 gsm perform the same? |
| Virgin fibre only | Could recycled content work? |
| 787×1092mm sheet | Could a custom size reduce trim? |
| CIF delivery | Could you get better freight rates on FOB? |
| Monthly ordering | Could quarterly ordering secure volume pricing? |
| Gloss lam on everything | Could some lines use matt (cheaper)? |

## Putting It All Together: A Real Scenario

| Strategy | Action | Annual Savings |
|----------|--------|---------------|
| GSM optimization | 350→300 gsm on 50% of volume | $4,200 |
| Custom sheet size | 12% trim waste eliminated | $3,600 |
| Recycled board | 30% volume switched | $2,800 |
| Full containers | Eliminate LCL shipments | $3,000 |
| Annual contract | 8% price reduction | $4,800 |
| Better packing | 2%→0.3% damage rate | $1,200 |
| **Total** | | **$19,600/year** |

*Based on a mid-size converter purchasing 200 tons per year at average $750/ton.*

## Conclusion

Cost reduction doesn't mean sacrificing quality. The most effective strategies — GSM optimization, custom sheet sizes, full container shipping — actually improve quality consistency while reducing cost.

Start with one strategy. Test it on a single product line. Measure the results. Then roll out what works.

[Request a quote](/contact) and mention which cost-reduction strategies you'd like to explore. We'll help you find savings without compromising your packaging quality.

## Suggested Internal Links
- [How to Compare Paper Quotes — 10-point checklist](/blog/how-to-compare-paper-quotes)
- [Ocean Freight for Paper Buyers](/blog/ocean-freight-paper-logistics-guide)
- [Grey Board vs Duplex vs FBB comparison](/blog/grey-board-vs-duplex-vs-fbb-comparison)`,image:`/images/blog-articles/reduce-packaging-costs-without-sacrificing-quality-cover-v2.png`,tags:[`cost reduction`,`packaging optimization`,`GSM optimization`,`container shipping`,`sourcing strategy`,`cost savings`]},{id:`pe-coated-vs-greaseproof-vs-silicone-barrier-paper-comparison`,title:`PE Coated vs Greaseproof vs Silicone Paper: Which Barrier Paper Should You Choose?`,seoTitle:`PE Coated vs Greaseproof vs Silicone Paper Comparison | YOUNGSUN`,metaDescription:`Compare PE coated paper, greaseproof paper, and silicone coated paper for food packaging. Understand barrier mechanisms, KIT ratings, heat resistance, and which to use for cups, wraps, and baking.`,date:`2026-07-24`,author:`YOUNGSUN PAPER Editorial`,category:`Products`,excerpt:`PE coated, greaseproof, and silicone coated paper each solve different barrier problems. This comparison guide explains the differences and helps you choose the right paper for your food packaging application.`,content:`# PE Coated vs Greaseproof vs Silicone Paper: Which Barrier Paper Should You Choose?

All three papers provide a barrier — but the mechanism, performance, and appropriate applications are completely different. Using the wrong one means packaging that leaks, sticks, or fails regulatory compliance.

This guide explains what each paper does, how it works, and when to use it.

## The Three Barrier Papers at a Glance

| Property | PE Coated Paper | Greaseproof Paper | Silicone Coated Paper |
|----------|----------------|-------------------|----------------------|
| **Barrier type** | Moisture & liquid (PE film) | Oil & grease (dense fiber) | Non-stick release (silicone) |
| **How it works** | Polyethylene layer blocks liquids | Dense fiber structure blocks oil penetration | Silicone coating prevents adhesion |
| **KIT rating** | N/A (moisture barrier) | KIT 6–8+ | N/A (release function) |
| **Heat resistance** | PE melts at ~110°C / 230°F | Up to 180°C / 356°F | Up to 220°C / 428°F |
| **Heat sealable** | ✅ Yes | ❌ No | ❌ No |
| **Printable** | ✅ Yes (flexo, offset) | ✅ Yes (flexo recommended) | ⚠️ Limited |
| **PFAS-free** | ✅ Yes (PE is PFAS-free) | ✅ Yes (mechanical, no chemicals) | ✅ Yes |
| **Recyclability** | Difficult (plastic layer) | Recyclable in paper stream | Difficult (silicone layer) |
| **Cost level** | $$ | $$ | $$$ |

## PE Coated Paper: The Moisture & Liquid Barrier

[PE coated paper](/products/pe-coated-paper) is paper or board extrusion-coated with polyethylene on one or both sides.

**How it works:** The PE layer is a physical film that water, oil, and liquids cannot penetrate.

**Best for:**
- Paper cups (hot and cold drinks) — the standard barrier layer for cupstock
- Takeaway food containers — prevents sauce and liquid leakage
- Moisture-resistant wraps — protects contents from external humidity
- Frozen food packaging — barrier against freezer burn and moisture

**Key advantage:** Heat-sealable. PE melts and bonds to itself under heat, forming leak-proof seams on cups and containers.

**Limitation:** PE melts at ~110°C. Not suitable for oven use. The plastic layer makes recycling more difficult.

**PE coating options:**
- Single-side PE: Barrier on inside of cup/container
- Double-side PE: Barrier on both sides (hot drink cups — protects against external condensation)

## Greaseproof Paper: The Oil & Grease Barrier

[Greaseproof paper](/products/greaseproof-paper) achieves oil resistance through mechanical fiber refining — not chemical coating.

**How it works:** During papermaking, fibers are heavily refined (beaten) to create a dense, closed sheet structure. The tiny gaps between fibers are smaller than oil molecules, so grease cannot penetrate.

**Best for:**
- Burger and sandwich wraps
- Bakery wrapping (pastries, bread, croissants)
- Fried food liners and baskets
- Tray liners for food service
- Food interleaving (cheese slices, meat patties)

**Key advantage:** PFAS-free by design. No chemicals needed — the barrier is mechanical. Acceptable for direct food contact in all major markets (FDA, EU, GB).

**Limitation:** Grease-resistant, not waterproof. Prolonged contact with watery foods (soups, sauces) will eventually penetrate. Not heat-sealable.

**KIT rating guide:**
- KIT 5–6: Dry or low-fat foods (bread, pastries, cookies)
- KIT 7–8: Moderate-fat foods (burgers, sandwiches, fried chicken)
- KIT 9+: High-fat foods (fries, oily snacks, cheese)

**YOUNGSUN standard:** KIT 6+ (white or natural). Higher KIT ratings available on request.

## Silicone Coated Paper: The Non-Stick Release Liner

[Silicone coated paper](/products/silicone-coated-paper) has a layer of silicone applied to one or both sides, creating a surface that nothing sticks to.

**How it works:** Silicone is chemically non-stick. Food, adhesive, or any substance peels away cleanly from the surface.

**Best for:**
- Baking paper / parchment — cookies slide off, no oil needed
- Food wrapping for sticky products (caramel, dried fruit, cheese)
- Release liners for adhesive labels and tapes
- Industrial release applications

**Key advantage:** Heat resistant to 220°C (428°F). Can go in the oven. Reusable — depending on application, the same sheet can be used multiple times.

**Limitation:** Does NOT provide grease or moisture barrier — it only provides release. More expensive than greaseproof or PE coated paper.

## Decision Flowchart

\`\`\`
What does your packaging need to do?
├─ Hold hot/cold liquids → PE Coated Paper (cupstock)
├─ Wrap oily/greasy foods → Greaseproof Paper
├─ Prevent food from sticking, oven use → Silicone Coated Paper
├─ Heat-seal into cups/containers → PE Coated Paper
├─ Wrapping dry/low-fat food, eco-brand → Greaseproof Paper (natural)
└─ High-heat baking, non-stick → Silicone Coated Paper
\`\`\`

## Can You Combine Them?

Sometimes one barrier isn't enough. Common combinations:

| Need | Solution |
|------|----------|
| Grease barrier + heat seal | Greaseproof paper + PE coating on one side |
| Moisture barrier + non-stick | PE coated paper + silicone on food-contact side |
| Grease barrier + printable surface | White greaseproof paper (flexo printed) |

## Regulatory Considerations

| Regulation | PE Coated | Greaseproof | Silicone |
|-----------|-----------|-------------|----------|
| FDA 21 CFR 176.170 | ✅ | ✅ | ✅ |
| EU 1935/2004 | ✅ | ✅ | ✅ |
| GB 9685 (China) | ✅ | ✅ | ✅ |
| PFAS-free | ✅ | ✅ | ✅ |

**Important:** Compliance documentation must match the final product configuration (base paper + coating). Always request documentation that covers the complete product, not just the base paper.

## The Bottom Line

PE coated paper = liquid barrier. Greaseproof paper = oil barrier. Silicone coated paper = non-stick release. Choose based on what you're protecting against — moisture, grease, or adhesion.

Still not sure? [Contact our technical team](/contact) with your food type, packaging format, and target market. We'll recommend the right paper and provide samples for testing.

## Suggested Internal Links
- [Cupstock Board — 160–330 gsm for paper cups](/products/cup-paper)
- [Greaseproof Paper — PFAS-free, KIT 6+](/products/greaseproof-paper)
- [PE Coated Paper — moisture barrier & heat seal](/products/pe-coated-paper)
- [Silicone Coated Paper — non-stick, heat resistant](/products/silicone-coated-paper)
- [Food Packaging Paper Buyer Guide](/blog/food-packaging-paper-buyer-guide)`,image:`/images/blog-articles/pe-coated-vs-greaseproof-vs-silicone-barrier-paper-comparison-cover-v2.png`,tags:[`PE coated paper`,`greaseproof paper`,`silicone coated paper`,`barrier paper`,`food packaging`,`comparison guide`]},{id:`paper-trade-shows-events-calendar-2026-2027`,title:`Paper & Packaging Trade Shows 2026-2027: The Complete Global Calendar for Buyers and Suppliers`,seoTitle:`Paper & Packaging Trade Shows 2026-2027 Calendar | YOUNGSUN`,metaDescription:`Complete calendar of paper, packaging, and printing trade shows worldwide for 2026-2027. drupa, interpack, SinoCorrugated, Paperworld, and more — with dates, locations, and focus areas.`,date:`2026-07-24`,author:`YOUNGSUN PAPER Editorial`,category:`Guides`,excerpt:`Plan your paper and packaging trade show visits with this complete 2026-2027 calendar. Covers drupa, interpack, Paperworld, SinoCorrugated, and 15+ more industry events worldwide.`,content:`# Paper & Packaging Trade Shows 2026-2027: The Complete Global Calendar

Trade shows remain the most efficient way to discover new paper grades, meet suppliers face-to-face, compare samples across multiple mills, and negotiate directly. For international buyers, one well-planned trade show visit can replace months of email-based sourcing.

This calendar covers the major paper, packaging, and printing industry events from mid-2026 through 2027.

## Major International Shows

### drupa 2028
- **Date:** May 2028 (held every 4 years)
- **Location:** Düsseldorf, Germany
- **Focus:** Printing technology, paper, converting, packaging production
- **Why attend:** The world's largest printing and paper show. 260,000+ visitors from 180+ countries. Every major paper mill, coater, and converter exhibits.
- **Planning:** drupa 2028 is the next edition. Start planning Q4 2027.

### interpack 2026
- **Date:** May 7–13, 2026 (just passed)
- **Location:** Düsseldorf, Germany
- **Focus:** Packaging materials, machinery, and processes
- **Next edition:** May 2029

### SinoCorrugated / SinoFoldingCarton 2027
- **Date:** April 2027 (typically)
- **Location:** Shanghai, China
- **Focus:** Corrugated packaging, folding carton production, paperboard
- **Why attend:** The largest Asian packaging manufacturing show. Direct access to Chinese paper mills, converting equipment manufacturers, and packaging converters.

### Paperworld Middle East 2026
- **Date:** November 2026 (typically)
- **Location:** Dubai, UAE
- **Focus:** Paper, stationery, office supplies, packaging
- **Why attend:** The gateway show for Middle East and Africa paper buyers.

### Paperworld China 2026
- **Date:** November 2026 (typically)
- **Location:** Shanghai, China
- **Focus:** Paper products, stationery, office supplies

## Regional Shows Worth Attending

### Asia

| Show | Date | Location | Focus |
|------|------|----------|-------|
| Asian Paper Bangkok | June 2027 | Bangkok, Thailand | Pulp, paper, packaging — Southeast Asian market focus |
| China Print | May 2027 | Beijing, China | Printing equipment and materials |
| Corrugated Asia | September 2027 | Various (rotating) | Corrugated packaging for Asian market |

### Europe

| Show | Date | Location | Focus |
|------|------|----------|-------|
| Packaging Première | April 2027 | Milan, Italy | Luxury packaging materials and design |
| Luxe Pack Monaco | October 2026 | Monaco | Luxury packaging — fancy paper, rigid boxes, premium finishes |
| London Packaging Week | September 2027 | London, UK | All packaging sectors |
| FachPack | September 2027 | Nuremberg, Germany | Industrial packaging, labeling, processing |

### North America

| Show | Date | Location | Focus |
|------|------|----------|-------|
| Pack Expo | September 2026 / 2027 | Las Vegas / Chicago (alternating) | Packaging machinery and materials |
| Paper & Plastics Recycling Conference | October 2026 | Chicago, USA | Recycled paper, recovered fiber markets |
| Printing United | October 2027 | Various, USA | Printing technology and substrates |

### Middle East & Africa

| Show | Date | Location | Focus |
|------|------|----------|-------|
| Propak Africa | March 2027 | Johannesburg, South Africa | Packaging, plastics, printing — African market |
| Gulf Print & Pack | January 2027 | Dubai, UAE | Commercial printing and packaging — Middle East |

### Latin America

| Show | Date | Location | Focus |
|------|------|----------|-------|
| EXPOPRINT Latin America | March 2027 | São Paulo, Brazil | Printing and converting — Latin American market |
| Andina Pack | November 2027 | Bogotá, Colombia | Packaging and processing — Andean region |

## How to Make the Most of a Trade Show Visit

### Before the Show
1. **Register early** — early-bird rates can save 30–50%
2. **Pre-book supplier meetings** — the best suppliers' calendars fill up 4–6 weeks before the show
3. **Prepare your specification list** — know exactly what GSM, grades, and quantities you're sourcing
4. **Request samples in advance** — suppliers can bring your specific samples to the show booth
5. **Book accommodation early** — Düsseldorf hotels during drupa sell out 12+ months ahead

### At the Show
1. **Bring your specification sheets** — paper samples work best when compared directly against your current stock
2. **Collect business cards and photograph samples** — you'll forget which supplier showed which paper by day 3
3. **Visit mill booths, not just trading companies** — mills can discuss production capabilities and custom grades
4. **Attend technical seminars** — many shows offer free sessions on paper trends, regulations, and technology
5. **Wear comfortable shoes** — drupa halls stretch over 15 km of walking

### After the Show
1. **Organize samples within 48 hours** — label everything before you forget
2. **Follow up within 1 week** — reference your booth conversation in the email subject line
3. **Request formal quotations** — trade show pricing is often promotional; confirm validity period
4. **Share your show report internally** — photos, samples, pricing intelligence, and supplier assessments

## Meet YOUNGSUN PAPER

YOUNGSUN PAPER regularly participates in major paper and packaging trade shows. We bring sample books covering all 25+ grades, specification sheets, and FSC/SGS certification documentation.

[Contact us](/contact) to schedule a meeting at an upcoming show or to request sample books shipped to your office.

## Suggested Internal Links
- [How to Source Paper from China — complete guide](/blog/how-to-source-paper-from-china)
- [How to Compare Paper Quotes — 10-point checklist](/blog/how-to-compare-paper-quotes)
- [Materials Library — 25+ paper grades](/materials)`,image:`/images/blog-articles/paper-trade-shows-events-calendar-2026-2027-cover-v2.png`,tags:[`trade shows`,`industry events`,`drupa`,`paper exhibitions`,`packaging shows`,`buyer guide`]},{id:`custom-paper-sizes-slitting-minimize-waste-guide`,title:`Custom Paper Sizes and Slitting: How to Minimize Waste and Save Money on Every Order`,seoTitle:`Custom Paper Sizes & Slitting: Reduce Waste, Save Money | YOUNGSUN`,metaDescription:`Learn how custom sheet sizes and precision slitting reduce paper trim waste by 10-20%. Guide to sheet optimization, roll slitting tolerances, and MOQ for custom sizes.`,date:`2026-07-24`,author:`YOUNGSUN PAPER Editorial`,category:`Guides`,excerpt:`Standard paper sizes waste material. Custom slitting and sheeting to your exact converting dimensions eliminates trim waste, reduces per-unit cost, and simplifies your production — with surprisingly low MOQs.`,content:`# Custom Paper Sizes and Slitting: How to Minimize Waste and Save Money

Standard sheet sizes exist for a reason — they're efficient for mills to produce and easy for distributors to stock. But if your end product doesn't align neatly with 787×1092mm or 889×1194mm, you're paying for paper that goes straight to the recycling bin.

Custom slitting and sheeting are among the most underutilized cost-reduction tools in paper buying. This guide explains how they work and how to calculate whether custom sizes will save you money.

## The Hidden Cost of Standard Sizes

**Example: Box manufacturer using 787×1092mm sheets**

- Sheet area: 787 × 1092 = 0.859 m²
- Box blank layout (after nesting): uses 0.645 m² per sheet
- Usable area: 0.645 / 0.859 = 75.1%
- **Trim waste: 24.9%**

With a custom sheet size of 680×950mm:
- Sheet area: 680 × 950 = 0.646 m²
- Box blank layout: uses 0.640 m²
- Usable area: 0.640 / 0.646 = 99.1%
- **Trim waste: 0.9%** — a 96% reduction in waste

**Annual savings at 200 tons/year, $700/ton:**
- Before: 200 tons with 25% waste = 150 usable tons
- After: 154 tons with 1% waste = 152 usable tons (same output, 23% less paper purchased)
- **Savings: $32,200 per year**

## How Custom Sizing Works

### Custom Sheet Sizes

Sheets are cut to your exact width × length from master rolls or sheets.

- **Tolerance:** ±1 mm (standard), ±0.5 mm (precision)
- **Min size:** ~300×400 mm (smaller sizes generate more handling cost)
- **Max size:** Up to 1200×1600 mm (depending on base sheet)
- **MOQ:** Typically 1 metric ton per size

### Custom Reel/Roll Slitting

Master rolls slit to your exact width and diameter.

- **Tolerance:** ±0.5 mm on width
- **Min slit width:** 15 mm
- **Max roll diameter:** 1,200 mm (depending on grade)
- **Core sizes:** 3", 6", 12" or custom
- **MOQ:** Typically 500 kg per width

## When Custom Sizes Make Sense

✅ **High-volume production** — Even 5% waste reduction on 100+ tons/year pays back quickly.
✅ **Non-standard box formats** — Unusual aspect ratios waste more on standard sheets.
✅ **Multiple SKUs from one sheet** — Custom sheet optimizes nesting of different box layouts.
✅ **Web-fed converting** — Custom reel width eliminates edge trim on bag machines, flexo presses.
✅ **Just-in-time delivery** — Less waste = less inventory = less warehouse space.

❌ **Small trial orders** — The MOQ (1 ton) may exceed your needs. Use standard sizes for samples.
❌ **Standard box formats** — If your layout fits 787×1092mm efficiently, don't over-optimize.

## How to Calculate Whether Custom Sizes Pay Off

### Step 1: Calculate Current Waste Rate

\`\`\`
Waste % = (Sheet area - Used area) / Sheet area × 100
\`\`\`

### Step 2: Calculate Annual Waste Cost

\`\`\`
Waste cost = Annual tonnage × Waste % × Price per ton
\`\`\`

### Step 3: Compare to Custom Size Scenario

\`\`\`
Custom sheet area needed = Used area + 1% handling waste
New annual tonnage = Old tonnage × (Custom area / Standard area)
Savings = (Old tonnage - New tonnage) × Price per ton
\`\`\`

### Step 4: Compare to MOQ and Premium

Custom sizes may carry a small premium (5–10% on small orders). Factor this in:

\`\`\`
Net savings = Material savings - Custom cutting premium
\`\`\`

If net savings > $500–1,000/year, it's worth doing.

## Slitting Specifications: How to Write a Good One

A clear slitting specification prevents disputes:

\`\`\`
Product: 300 gsm FBB
Format: Reels
Width: 850 mm ±0.5 mm
Max roll diameter: 1,100 mm
Core: 6 inch (152 mm)
Winding direction: Print side out
Slitting quality: Clean cut, no dust, no edge burr
Packing: PE-wrapped, palletized, desiccant included
\`\`\`

## Common Pitfalls

1. **Not accounting for grain direction** — Sheets cut from reels have grain parallel to the long edge. If your application needs grain the other way, specify it.
2. **Ignoring cutting dust** — Slitting generates paper dust. Specify "dust extraction during slitting" for clean-room applications.
3. **Over-optimizing** — If the savings is $200/year on a $50,000 order, the complexity isn't worth it. Only optimize when savings exceed $500/year.
4. **Skipping the trial** — Always order 1 ton of the custom size as a trial before committing to volume.

## YOUNGSUN Custom Sizing Capabilities

| Service | Specs | MOQ | Lead Time |
|---------|-------|-----|-----------|
| Custom sheet cutting | ±1 mm tolerance | 1 ton/size | +1–2 days |
| Precision sheet cutting | ±0.5 mm tolerance | 2 tons/size | +2–3 days |
| Reel slitting | ±0.5 mm width tolerance | 500 kg/width | +1–2 days |
| Square-cut sheets | 90° ±0.1° | 1 ton/size | +1–2 days |

## The Bottom Line

If you're buying more than 50 tons per year and your current sheet utilization is below 85%, custom sizes will almost certainly save you money. The math is simple — the only question is whether the savings justify the slightly higher per-ton price and the planning discipline of ordering to your exact specification.

[Contact us](/contact) with your current sheet size, box layout dimensions, and annual volume. We'll calculate your waste rate and recommend the optimal custom size.

## Suggested Internal Links
- [Processing Services — slitting & sheeting details](/processing)
- [How to Order — specification guide](/how-to-order)
- [Reduce Packaging Costs Without Sacrificing Quality](/blog/reduce-packaging-costs-without-sacrificing-quality)`,image:`/images/blog-articles/custom-paper-sizes-slitting-minimize-waste-guide-cover-v2.png`,tags:[`custom sizes`,`slitting`,`sheeting`,`waste reduction`,`cost optimization`,`paper converting`]},{id:`food-grade-paper-certifications-guide-fda-eu-gb`,title:`Food-Grade Paper Certifications Explained: FDA, EU 1935/2004, GB 9685, and PFAS-Free Claims`,seoTitle:`Food-Grade Paper Certifications: FDA, EU, GB Guide | YOUNGSUN`,metaDescription:`Understand food-grade paper certifications: FDA 21 CFR, EU 1935/2004, GB 9685, and PFAS-free claims. Learn which certifications you need for your target market and how to verify them.`,date:`2026-07-24`,author:`YOUNGSUN PAPER Editorial`,category:`Compliance`,excerpt:`Food-grade paper certifications are complex and market-specific. This guide explains FDA, EU, Chinese, and PFAS-free requirements — and how to ensure your supplier's documentation is valid and complete.`,content:`# Food-Grade Paper Certifications Explained: FDA, EU 1935/2004, GB 9685, and PFAS-Free

"Is your paper food-safe?"

Every paper buyer serving the food industry asks this question. But the answer depends on which food, which market, and which part of the packaging touches the food.

This guide explains the major food-contact regulatory frameworks, what they cover, and how to verify compliance documentation from your paper supplier.

## Why Food-Grade Paper Regulation Matters

Paper and board used for food packaging can transfer substances to food through migration. These substances include:

- Residual chemicals from pulping and bleaching
- Coating components (PE, silicone, waxes)
- Printing inks and varnishes
- Recycled fiber contaminants (mineral oils, phthalates)

Regulations exist to ensure that any migration stays within safe limits — defined as not endangering human health, not changing food composition unacceptably, and not deteriorating taste or odor.

## The Three Major Regulatory Frameworks

### USA: FDA 21 CFR 176.170 & 176.180

**Regulation:** Code of Federal Regulations Title 21, Parts 176.170 and 176.180

**What it covers:**
- 176.170: Paper and paperboard in contact with aqueous and fatty foods
- 176.180: Paper and paperboard in contact with dry food

**Key requirements:**
- Substances used in paper manufacturing must be Generally Recognized as Safe (GRAS) or listed in the regulation
- Migration testing for specific food types (aqueous, acidic, alcoholic, fatty)
- Good Manufacturing Practices (GMP) must be followed

**How suppliers demonstrate compliance:**
- Declaration of Compliance letter stating the product meets FDA 21 CFR requirements
- Supporting documentation: test reports, raw material specifications, manufacturing process description

**Important:** FDA does not "approve" or "certify" individual paper products. Compliance is self-declared by the manufacturer based on testing and ingredient review.

### European Union: Framework Regulation (EC) No 1935/2004

**Regulation:** EC 1935/2004 on materials and articles intended to come into contact with food

**What it covers:** All food-contact materials — plastics, paper, ceramics, metals, adhesives, printing inks

**Key requirements:**
- Materials must not transfer constituents to food in quantities that endanger human health
- Materials must not bring about unacceptable changes in food composition
- Materials must not cause deterioration in organoleptic characteristics (taste, smell)
- Good Manufacturing Practices required (EC 2023/2006)

**How suppliers demonstrate compliance:**
- Declaration of Compliance (DoC) per article 16 of 1935/2004
- Supporting test reports (overall migration, specific migration for restricted substances)
- Reference to applicable national measures (German BfR XXXVI, Dutch Warenwet, French DGCCRF)

**Important:** EU 1935/2004 sets the framework, but specific measures for paper and board are at member-state level. Germany's BfR Recommendation XXXVI is the most widely referenced.

### China: GB 9685 and GB 4806.8

**Regulation:** GB 4806.8 (National Food Safety Standard — Paper and Paperboard Food Contact Materials and Articles) and GB 9685 (Positive List of Additives)

**What it covers:** Paper, paperboard, and coated paper products intended for food contact in the Chinese market

**Key requirements:**
- Raw materials must comply with GB 9685 positive list
- Migration limits for lead, arsenic, formaldehyde, and other substances
- Sensory testing (no off-odor or off-taste)
- Microbial limits for certain applications

**How suppliers demonstrate compliance:**
- Test reports from CNAS-accredited laboratories
- Compliance declaration per GB 4806.8

## PFAS-Free: The Growing Requirement

PFAS (per- and polyfluoroalkyl substances) have historically been used to create oil-resistant papers. Regulatory pressure is rapidly eliminating PFAS from food packaging:

- **EU:** Proposed restriction on all PFAS under REACH
- **USA:** Several states have enacted PFAS bans in food packaging (California, New York, Washington, and others)
- **Global:** Major QSR chains have committed to PFAS-free packaging

### How Paper Can Be Grease-Resistant Without PFAS

YOUNGSUN greaseproof paper achieves oil resistance through **mechanical fiber densification** — intensive refining during papermaking creates a dense fiber structure that physically blocks oil penetration. No chemical treatment. No PFAS.

When requesting PFAS-free documentation, ask for:
- Statement confirming no PFAS intentionally added
- Test results showing PFAS below detection limits (typically <10 ppb)
- Third-party lab certification (SGS, Intertek, Eurofins)

## How to Verify Food-Grade Compliance Documentation

When your supplier sends compliance documents, check:

1. **Does the document cover YOUR specific product?** A generic FDA compliance letter that doesn't mention your GSM, coating, and paper grade is worthless.
2. **Does it cover YOUR target market?** FDA compliance doesn't automatically mean EU or China compliance.
3. **Is the document current?** Certificates have expiration dates. Check validity.
4. **Who issued it?** Independent third-party lab (SGS, Intertek, TÜV) carries more weight than self-declaration.
5. **Does it cover all components?** If your product is PE coated, the compliance document must cover base paper + PE coating, not just the base paper.

## Red Flags in Compliance Documentation

🚩 **"Our products are food-safe" without specifying which regulation** — Too vague. Request specific regulation reference.

🚩 **Certificate dated more than 2 years ago** — Formulations and raw materials change. Ask for a current certificate.

🚩 **Document doesn't mention your product grade** — Could be a generic certificate that doesn't apply to your specific order.

🚩 **"PFAS-free" claim without test data** — Request the actual test report showing PFAS below detection limits.

🚩 **Supplier can't explain what the certificate covers** — If they can't walk you through their own compliance document, they may not understand what they're selling.

## Practical Buyer Checklist

Before placing a food-grade paper order:

- [ ] Target market identified (USA? EU? China? Multiple?)
- [ ] Applicable regulations confirmed (FDA 21 CFR, EU 1935/2004, GB 9685)
- [ ] Food type specified (aqueous, fatty, acidic, dry, alcoholic)
- [ ] Temperature conditions specified (frozen, ambient, hot fill, oven)
- [ ] Full product specification provided (grade, GSM, coating)
- [ ] Compliance documentation requested and received
- [ ] Third-party test reports reviewed (not just supplier self-declaration)
- [ ] PFAS-free statement received (if applicable)
- [ ] Certificate validity dates checked
- [ ] Documents cover all product components (paper + coating + ink if printed)

## How YOUNGSUN Supports Food-Grade Compliance

- FSC certification for all food-grade paper products
- SGS test reports for FDA, EU, and GB compliance
- PFAS-free certification for greaseproof paper
- Declaration of Compliance documents specific to your product and market
- Documentation provided BEFORE shipment — not after

[Request food-grade paper samples and compliance documentation](/contact). Specify your target market and food type for the fastest response.

## Suggested Internal Links
- [Greaseproof Paper — PFAS-free, KIT 6+](/products/greaseproof-paper)
- [Cupstock Board — FDA compliant](/products/cup-paper)
- [PE Coated Paper — food-grade moisture barrier](/products/pe-coated-paper)
- [Silicone Coated Paper — non-stick, heat resistant](/products/silicone-coated-paper)
- [Sustainable Paper & FSC Compliance Guide](/blog/sustainable-paper-fsc-recycled-compliance-guide)`,image:`/images/blog-articles/food-grade-paper-certifications-guide-fda-eu-gb-cover-v2.png`,tags:[`food grade`,`FDA`,`EU regulation`,`compliance`,`PFAS-free`,`food safety`,`certifications`]},{id:`gold-card-metallic-luxury-packaging-guide`,title:`Gold Card Paper: The Ultimate Guide to Metallic Luxury in Packaging and Print`,seoTitle:`Gold Card Paper Guide: Metallic Luxury Packaging | YOUNGSUN`,metaDescription:`Complete guide to gold card paper for premium packaging. Learn about gold foil card, metallic finishes, applications in cosmetics, wine, gifts, and stationery. Custom sizes and grammages available.`,date:`2026-07-26`,author:`YOUNGSUN PAPER Editorial`,category:`Design`,excerpt:`Gold card paper transforms ordinary packaging into an event. This guide covers gold metallic paper grades, foil vs. coating, design techniques, and applications across cosmetics, wine, gifts, weddings, and luxury stationery.`,content:`# Gold Card Paper: The Ultimate Guide to Metallic Luxury in Packaging and Print

There is a reason gold has been the color of luxury for five thousand years. When a customer sees a gold box, a gold-trimmed invitation, or a gold-stamped hang tag, their brain registers value before they consciously process what they're looking at. It is the most primal visual signal of quality in packaging.

Gold card paper — also called gold foil paper, metallic gold board, or gold laminated card — delivers that signal at a fraction of the cost of actual gold stamping. This guide covers everything buyers and designers need to know about selecting, specifying, and applying gold card paper.

## What Is Gold Card Paper?

Gold card paper is paper or paperboard with a brilliant gold metallic surface. The gold effect is achieved through one of two manufacturing methods:

### 1. Gold Foil Lamination
A thin metallic gold film (typically PET-based) is thermally bonded to a paper or board substrate. This produces the most brilliant, mirror-like gold surface.

**Characteristics:**
- Maximum reflectivity — true mirror gold
- Excellent surface durability
- Available in light gold, champagne, rose gold, and deep gold tones
- Can be laminated on one or both sides
- Substrate options: grey board, duplex board, C2S art board, black paper

### 2. Gold Metallic Coating
A gold-pigmented coating is applied to the paper surface via gravure or flexographic process, then cured. Less reflective than foil lamination but more economical for large solid areas.

**Characteristics:**
- Soft, satin metallic sheen (not mirror)
- Lower cost than foil lamination
- Better printability — can be overprinted with inks
- Available in a wider color range (antique gold, brushed gold, champagne)

### Which to Choose?

| Requirement | Foil Laminated Gold Card | Metallic Coated Gold Card |
|-------------|------------------------|--------------------------|
| Mirror reflectivity | ★★★★★ | ★★☆☆☆ |
| Cost | $$$ | $$ |
| Surface durability | ★★★★☆ | ★★★☆☆ |
| Overprinting (ink on gold) | Limited | Good |
| Best for | Max impact, small areas | Large solid areas, economy |

## Applications: Where Gold Card Paper Shines

### Wedding Stationery
Gold wedding invitations, RSVP cards, place cards, and menus are among the most popular applications. Gold on white or cream paper creates an instantly celebratory, elegant impression. Through-dyed black paper with gold foil is the classic luxury wedding combination.

### Cosmetics & Perfume Packaging
A gold-embellished perfume box signals indulgence. Gold card paper is widely used for cosmetic gift sets, limited-edition packaging, and premium skincare presentation boxes.

### Wine & Spirit Gift Cartons
Gold metallic accents on wine gift cartons communicate premium quality and make the product gift-ready without additional wrapping. Gold foil stamping on a dark matte background is the standard luxury wine packaging aesthetic.

### Chocolate & Confectionery
Gold packaging has been the standard for premium chocolate since the 19th century. Gold card paper is used for chocolate boxes, truffle trays, and seasonal confectionery gift packaging.

### Jewelry & Accessories
Gold card inserts, presentation trays, and gift boxes elevate the unboxing experience for jewelry, watches, and luxury accessories. The gold surface mirrors the value of the product inside.

### Shopping Bags & Hang Tags
Gold foil-embellished shopping bags and hang tags are walking advertisements for luxury brands. The gold catches light and draws attention in retail and street settings.

## Design Techniques for Gold Card Paper

### 1. Foil on Gold — Double Luxury
Applying gold hot stamping foil ON TOP of gold card paper creates a subtle tone-on-tone effect — the stamped area has a slightly different gold hue and a debossed texture. This understated technique is favored by minimalist luxury brands.

### 2. Debossing on Gold
A blind deboss (no ink, no foil — just pressure) on gold card creates a recessed design with subtle depth. The debossed area appears slightly darker, creating contrast through texture alone.

### 3. Overprinting on Gold
Printing dark ink (black, navy, deep green) on gold card creates a dramatic contrast. The gold shows through the unprinted areas while the dark ink provides readability and brand messaging. This technique works best on metallic coated gold paper.

### 4. Gold + Texture
Combining gold card paper with an embossed texture (linen, leather grain, geometric) adds tactile dimension. The texture catches light differently across the surface, creating a dynamic, living metallic effect.

### 5. Gold + Soft Touch
A soft-touch coating applied selectively to gold card paper creates a striking tactile contrast — matte velvet against brilliant metallic. The soft-touch areas deepen the gold to a warm, muted tone while the uncoated areas remain brilliantly reflective.

## Specifications and Sourcing

### Available Configurations

| Property | Range |
|----------|-------|
| Substrate | Grey board, duplex board, C2S art board, black paper, white card |
| Grammage | 120–400 gsm (card), up to 1500 gsm (laminated heavy board) |
| Gold tones | Bright gold, champagne gold, rose gold, antique gold, copper gold |
| Coating | Single-side or double-side |
| Sheet sizes | 787×1092mm, 889×1194mm, custom |
| MOQ | 1 metric ton (standard tones), higher for custom color matching |

### What to Specify When Ordering

- Required gold tone (send a physical sample or Pantone metallic reference)
- Substrate type and GSM
- Single-side or double-side gold
- Sheet size or reel width
- Intended application (printing, die-cutting, foil stamping, embossing)
- Destination market and any certification requirements (FSC available)

### Production and Delivery
- Standard lead time: 2–3 weeks from order confirmation
- Custom color matching: add 1–2 weeks
- Container loading: ~25 tons per 40HQ container
- FSC certification available on request

## Care and Handling

Gold card paper surfaces can show fingerprints, scratches, and scuffs more visibly than uncoated papers. Best practices:

- **Handle with cotton gloves** during production and assembly
- **Use interleaving tissue** between sheets during storage and transport
- **Avoid direct finger contact** with the gold surface — the natural oils in skin can leave permanent marks
- **Consider lamination** — a thin protective film over the gold surface reduces fingerprint visibility
- **Test die-cutting pressure** — excessive pressure can crack the metallic layer around cut edges

## Cost Considerations

Gold card paper typically costs 30–80% more than the same substrate without gold finishing, depending on:
- Foil lamination vs metallic coating (foil is more expensive)
- Single-side vs double-side
- Substrate type (grey board base is less expensive than C2S art board base)
- Gold tone (specialty tones like rose gold or antique gold may cost more)
- Order quantity (larger orders reduce per-unit cost)

## Sustainability

Gold foil laminated paper is more difficult to recycle than uncoated paper because the metallic PET film must be separated from the paper fiber. However:
- FSC certified substrates are available
- The metallic layer represents a very small percentage of total material weight
- Some recyclers accept metallic laminated paper in the mixed paper stream
- For brands prioritizing recyclability, gold metallic coating (vs foil lamination) is the preferred option

## Why Buyers Choose Gold Card Paper

1. **Instant perceived value** — No other finish communicates luxury as immediately as a gold metallic surface.
2. **Versatility across sectors** — From wedding stationery to wine cartons, gold works across categories.
3. **Photographs beautifully** — Gold surfaces catch light and create dynamic, social-media-friendly packaging shots.
4. **Timeless appeal** — Unlike trend-driven colors, gold has been associated with quality for millennia and will not date.
5. **Pairs with everything** — Gold works with black, white, cream, navy, burgundy, forest green — essentially any brand palette.

## Suggested Internal Links

- [Gold & Silver Card Paper — product details](/products/gold-silver-card)
- [Black Paper — the classic gold foil partner](/products/black-paper)
- [Soft Touch Paper — velvet-luxury finish](/products/soft-touch-paper)
- [Paper Surface Finishing Guide](/blog/paper-surface-finishing-guide-gloss-matt-soft-touch-uv-foil)
- [Fancy Paper Collection](/fancy-paper-collection)`,image:`/images/blog-articles/gold-card-metallic-luxury-packaging-guide.png`,tags:[`gold card`,`metallic paper`,`gold foil`,`luxury packaging`,`wedding stationery`,`premium design`]},{id:`silver-card-modern-elegance-packaging-guide`,title:`Silver Card Paper: Modern Elegance for Electronics, Cosmetics, and Premium Branding`,seoTitle:`Silver Card Paper Guide: Modern Metallic Packaging | YOUNGSUN`,metaDescription:`Complete guide to silver card paper for modern packaging. Applications in electronics, cosmetics, supplements, and high-tech branding. Compare silver foil card vs. metallic coating with specification details.`,date:`2026-07-26`,author:`YOUNGSUN PAPER Editorial`,category:`Design`,excerpt:`Silver card paper communicates modernity, precision, and technical excellence. This guide covers silver metallic paper grades, foil vs. coating comparisons, and applications across electronics, cosmetics, supplements, and contemporary branding.`,content:`# Silver Card Paper: Modern Elegance for Electronics, Cosmetics, and Premium Branding

If gold is the color of tradition and luxury, silver is the color of modernity and precision. Silver card paper signals technical excellence, contemporary design, and understated sophistication. It is the metallic of choice for electronics packaging, modern cosmetics, health supplements, and any brand positioning itself as clean, precise, and forward-looking.

This guide covers everything buyers and designers need to know about silver card paper — from manufacturing methods to design strategies and sourcing specifications.

## What Is Silver Card Paper?

Silver card paper delivers a brilliant silver metallic surface through one of two manufacturing processes:

### 1. Silver Foil Lamination
A metallic silver PET film is thermally bonded to the paper or board substrate under heat and pressure. Produces the most reflective, mirror-like silver surface.

**Characteristics:**
- Mirror reflectivity — closest to actual metal appearance
- Excellent surface durability and moisture resistance
- Available in bright silver, brushed silver, and matte silver
- Can be laminated on one or both sides
- Compatible with overprinting, debossing, and spot UV

### 2. Silver Metallic Coating
A silver-pigmented coating applied to the paper surface and cured. Less reflective than foil lamination but more economical and more printable.

**Characteristics:**
- Satin metallic sheen (not mirror)
- Lower cost than foil lamination
- Better ink adhesion for overprinting
- Available in a range of silver tones (bright silver, gunmetal, pewter)

### Which to Choose?

| Requirement | Foil Laminated Silver | Metallic Coated Silver |
|-------------|----------------------|------------------------|
| Mirror reflectivity | ★★★★★ | ★★☆☆☆ |
| Cost | $$$ | $$ |
| Ink adhesion | Limited | Good |
| Best for | Maximum impact, tech products, premium events | Large areas, catalog covers, supplement packaging |

## Applications: Where Silver Card Paper Excels

### Electronics & Technology
Silver is the dominant packaging color for consumer electronics — smartphones, tablets, headphones, smartwatches. It communicates precision engineering, cutting-edge technology, and premium build quality. Silver card paper is widely used for electronic product boxes, insert cards, and accessory packaging.

### Health Supplements & Wellness
Silver packaging has become the standard for premium supplement brands. It signals purity, clinical quality, and scientific credibility. Silver foil accents on white or minimalist supplement boxes differentiate premium products from mass-market alternatives.

### Modern Cosmetics & Skincare
While gold dominates traditional luxury cosmetics, silver is the choice for modern, science-led beauty brands. Silver card packaging for serums, creams, and treatment products communicates clinical efficacy and contemporary aesthetics.

### Wine & Spirits
Silver foil on dark backgrounds — particularly midnight blue, charcoal, and black — is a signature of premium spirit packaging. Silver communicates cool elegance, appropriate for vodka, gin, white wine, and champagne.

### Catalogs & Corporate Folders
Silver card covers for annual reports, corporate brochures, and presentation folders project professionalism and financial credibility. Silver metallic accents on corporate identity materials signal stability and precision.

### Garment Hang Tags & Fashion
Silver foil hang tags on apparel communicate modern luxury — less traditional than gold, more contemporary. Particularly effective for monochrome, minimalist, and streetwear fashion brands.

## Design Techniques for Silver Card Paper

### 1. Silver + White — The Tech Aesthetic
White printing on silver card, or silver foil on white board, is the classic consumer electronics look. The combination reads as clean, modern, and precise. Apple's packaging aesthetic has made this combination the global standard for premium tech products.

### 2. Silver + Black — Maximum Contrast
Black ink or black paper combined with silver foil creates the highest possible contrast in packaging. The silver appears to float above the black surface. This combination is widely used in premium spirits, luxury fashion, and high-end corporate materials.

### 3. Silver + Color — Brand Identity
Overprinting transparent color inks on silver card creates luminous, metallic brand colors that are impossible to achieve on white paper. A blue overprint on silver creates a metallic blue; red creates a metallic red. This technique allows brands to maintain their color identity while adding metallic depth.

### 4. Silver + Spot UV — Depth and Contrast
Applying spot UV varnish to selected areas of silver card creates gloss-on-metallic contrast. The UV-coated areas become more reflective while uncoated areas retain the base silver finish. This technique is effective for highlighting logos, product names, or design elements.

### 5. Silver + Debossing — Subtle Texture
A blind deboss on silver card adds dimension without adding color. The debossed area reflects light differently, creating visible texture through relief alone. This understated technique is favored by minimalist luxury brands.

## Specifications and Sourcing

### Available Configurations

| Property | Range |
|----------|-------|
| Substrate | Grey board, duplex board, C2S art board, black paper, white card |
| Grammage | 120–400 gsm (card), up to 1500 gsm (laminated heavy board) |
| Silver tones | Bright silver, brushed silver, matte silver, gunmetal, pewter |
| Coating | Single-side or double-side |
| Sheet sizes | 787×1092mm, 889×1194mm, custom |
| MOQ | 1 metric ton (standard tones), higher for custom matching |

### What to Specify When Ordering

- Required silver tone (bright, brushed, matte, or gunmetal)
- Substrate type and GSM
- Single-side or double-side
- Sheet size or reel width
- Intended finishing processes (printing, foil stamping, embossing, die-cutting)
- Certification requirements (FSC available)

### Production and Lead Time
- Standard: 2–3 weeks from order confirmation
- Custom silver tones: add 1–2 weeks
- 40HQ container: ~25 tons

## Silver vs Gold: How to Choose

| Factor | Choose Gold | Choose Silver |
|--------|-------------|---------------|
| Brand personality | Traditional, warm, heritage | Modern, cool, precision |
| Industry | Wedding, chocolate, jewelry, luxury fashion | Electronics, supplements, modern beauty, corporate |
| Color pairing | Black, cream, burgundy, green | White, black, navy, grey, blue |
| Cultural signal | Celebration, prestige, indulgence | Innovation, science, sophistication |
| Competitor landscape | Competitors use silver → your gold stands out | Competitors use gold → your silver stands out |

## Care and Handling

Like gold card, silver metallic surfaces require careful handling:

- **Use gloves** during production and assembly to prevent fingerprints
- **Interleave sheets** with tissue paper during storage
- **Avoid excessive heat** during foil stamping or lamination — the metallic layer can delaminate at high temperatures
- **Test adhesives** before production — some glues may not bond to the metallic surface
- **Die-cutting pressure** must be calibrated — too much pressure can crack the metallic layer at cut edges

## Sustainability Considerations

As with gold laminated paper, silver foil laminated paper presents recycling challenges due to the metallic PET layer. Options for more sustainable choices:

- **Metallic coating** instead of foil lamination (easier to recycle)
- **FSC certified substrates** available for both coating and lamination
- **Selective application** — use silver only on the visible exterior surfaces, with uncoated interior surfaces
- **Communicate disposal** — include recycling instructions on the packaging

## Why Buyers Choose Silver Card Paper

1. **Modern luxury positioning** — Silver signals contemporary premium quality, not old-world tradition.
2. **Technology association** — The color of precision engineering and cutting-edge innovation.
3. **Photographs cleanly** — Silver surfaces photograph beautifully in studio and e-commerce settings.
4. **Pairs with monochrome** — Silver + white + black is the most enduring color combination in design.
5. **Differentiation** — In a market saturated with gold, silver provides a distinctive alternative.

## Suggested Internal Links

- [Gold & Silver Card Paper — product details](/products/gold-silver-card)
- [Gold Card Paper Guide — metallic luxury packaging](/blog/gold-card-metallic-luxury-packaging-guide)
- [Black Paper — dramatic contrast for silver foil](/products/black-paper)
- [Paper Surface Finishing Guide](/blog/paper-surface-finishing-guide-gloss-matt-soft-touch-uv-foil)
- [Fancy Paper Collection](/fancy-paper-collection)`,image:`/images/blog-articles/silver-card-modern-elegance-packaging-guide.png`,tags:[`silver card`,`metallic paper`,`silver foil`,`electronics packaging`,`cosmetics packaging`,`modern design`]},{id:`how-to-prepare-paper-trade-show-buyer-guide`,title:`How to Prepare for a Paper Trade Show: A Buyer's Complete Guide to Making the Most of Your Visit`,seoTitle:`Paper Trade Show Preparation Guide for Buyers | YOUNGSUN`,metaDescription:`Maximize your paper trade show visit with this preparation guide. What to bring, how to collect samples, questions to ask suppliers, and follow-up strategies for international paper buyers.`,date:`2026-07-30`,author:`YOUNGSUN PAPER Editorial`,category:`Guides`,excerpt:`A trade show visit can replace months of email-based sourcing — if you prepare correctly. This guide covers what to bring, which suppliers to target, how to evaluate paper samples on the spot, and the follow-up system that turns contacts into contracts.`,content:`# How to Prepare for a Paper Trade Show: A Buyer's Complete Guide

A well-planned trade show visit can do more for your paper sourcing in three days than six months of emails and video calls. You can touch dozens of paper grades in person, compare samples from multiple mills side by side, negotiate directly with supplier representatives, and build relationships that improve pricing and priority for years.

But a poorly prepared visit wastes time, money, and opportunity. You come home with a bag of unlabeled samples, a stack of business cards you can't remember, and no clear next steps.

This guide covers preparation, on-site strategy, and post-show follow-up — drawn from YOUNGSUN's experience exhibiting at paper and packaging trade shows worldwide.

## Before the Show: The 4-Week Preparation Timeline

### 4 Weeks Out: Define Your Objectives

What do you actually want to accomplish?

| Objective | What to Prepare |
|-----------|----------------|
| Find a new grey board supplier | Current spec sheet, target price, annual volume |
| Compare 5 mills' FBB samples | Standardized evaluation criteria, GSM range needed |
| Negotiate better pricing | Current contract terms, competitor quotes |
| Explore fancy paper for new product line | Design brief, target aesthetic, budget range |
| Meet existing suppliers face-to-face | Schedule meetings, bring current issues to discuss |

Write down your top 3 objectives and prioritize everything around them.

### 3 Weeks Out: Research Exhibitors

Most trade shows publish an exhibitor list 3-4 weeks before the event.

1. **Download the exhibitor list** and categorize by relevance: Priority A (must visit), Priority B (should visit), Priority C (visit if time).
2. **Check each supplier's website** before the show — know what they make before you arrive at their booth.
3. **Pre-book meetings** with Priority A suppliers. Their calendars fill up 4-6 weeks before major shows.
4. **Prepare a one-page spec sheet** summarizing your requirements: grades, GSM ranges, sheet sizes, annual volumes, target markets, certification needs.

### 2 Weeks Out: Prepare Your Kit

What to bring:

- **Your spec sheets** — one page per product line you're sourcing
- **Your current paper samples** — bring your current stock to compare directly with supplier samples at the booth
- **A notebook or tablet** — you will forget which supplier showed which paper by day 3
- **Business cards** — at least 50; you'll hand out more than you think
- **A portable phone charger** — trade show halls drain batteries fast
- **Comfortable shoes** — major shows involve 10-15 km of walking per day
- **A lightweight bag or folder** — for collecting samples and brochures
- **Sticky notes and a marker** — label every sample IMMEDIATELY with supplier name, grade, and GSM

### 1 Week Out: Confirm and Plan Your Route

- Confirm meeting times with pre-booked suppliers
- Study the hall map and plan a logical walking route
- Check the seminar schedule — many shows offer free technical sessions
- Download the show's mobile app if available

## At the Show: How to Evaluate Paper Like a Pro

### The 10-Minute Booth Visit Protocol

1. **Introduce yourself and your company** (1 min) — who you are, what you buy, annual volume
2. **State your objective** (30 sec) — "I'm here to evaluate grey board for rigid box production"
3. **Hand over your spec sheet** (30 sec) — this immediately separates you from tire-kickers
4. **Ask for the relevant samples** (2 min) — request the exact grade and GSM you're evaluating
5. **Do a quick hands-on evaluation** (3 min) — see checklist below
6. **Exchange contact details** (1 min) — business card + confirm who will follow up
7. **Note your impressions immediately** (2 min) — write notes before visiting the next booth

### Hands-On Sample Evaluation Checklist

At the booth, do these quick checks:

- [ ] **Stiffness** — hold the sample at one corner; does it droop or hold firm?
- [ ] **Surface** — run your fingers over the surface; smooth or textured? Consistent?
- [ ] **Color** — hold it next to your current stock; any visible difference?
- [ ] **Edge quality** — check the cut edge; clean or ragged?
- [ ] **Thickness feel** — does it feel like the GSM you specified?
- [ ] **Fold test** — gently crease; does it crack or fold cleanly?
- [ ] **Print surface** — if printed, check registration, color, and dot quality

### Questions to Ask at the Booth

| Topic | Question |
|-------|----------|
| Production | "Which mill produces this grade?" |
| Capacity | "What is your monthly export volume for this product?" |
| Lead time | "What is your standard production lead time?" |
| MOQ | "What is the minimum order quantity?" |
| Customization | "Can you supply custom sheet sizes or reel widths?" |
| Certifications | "Can you provide FSC chain-of-custody for this grade?" |
| Samples | "Can you ship A4 samples of this exact grade to my office?" |
| Pricing | "Can you give me an indicative FOB price range?" |

## After the Show: The 48-Hour Follow-Up System

The most valuable 48 hours of your trade show experience are the two days after it ends. This is when you organize everything before memory fades.

### Day 1 After the Show

1. **Organize all samples** — lay them out, check labels, add notes you wrote at the booth
2. **Photograph each sample** with its label visible — create a digital record
3. **Sort into three piles**:
   - **Green**: Meets requirements, request formal quotation
   - **Yellow**: Promising but needs more information
   - **Red**: Not suitable for current needs
4. **Enter all contacts** into your CRM or spreadsheet

### Day 2-3 After the Show

1. **Email every Green supplier** with subject: "Great to meet you at [Show Name] — [Your Company] — [Product Grade]"
2. In the email: reference your booth conversation, attach your spec sheet, request a formal quotation
3. **Email every Yellow supplier** asking for the specific information you need
4. **Share your findings internally** — brief your team on new suppliers, pricing intelligence, and market trends

### Week 2: Request and Compare Formal Quotes

By now, suppliers who are serious will have responded with quotations. Use the [10-point comparison checklist](/blog/how-to-compare-paper-quotes) to evaluate them systematically.

## YOUNGSUN at Trade Shows

YOUNGSUN PAPER exhibits at major paper and packaging trade shows throughout the year. Visit our booth to:

- Touch and compare 25+ paper and board grades in person
- Discuss your specifications directly with our technical team
- Receive sample books and FSC/SGS certification documentation
- Get on-the-spot indicative pricing based on your volume and destination

[Contact us](/contact) to schedule a meeting at an upcoming show, or to request that we bring specific samples for your evaluation.

## Suggested Internal Links
- [Paper & Packaging Trade Shows 2026-2027 Calendar](/blog/paper-trade-shows-events-calendar-2026-2027)
- [How to Compare Paper Quotes — 10-Point Checklist](/blog/how-to-compare-paper-quotes)
- [How to Source Paper from China — Complete Guide](/blog/how-to-source-paper-from-china)
- [Materials Library — 25+ paper grades](/materials)`,image:`/images/blog-articles/how-to-prepare-paper-trade-show-buyer-guide.jpg`,tags:[`trade shows`,`buyer guide`,`exhibition tips`,`paper sourcing`,`supplier meetings`,`sample evaluation`]},{id:`making-the-most-of-trade-show-paper-samples`,title:`Making the Most of Trade Show Paper Samples: What to Look For and What to Ask`,seoTitle:`Evaluate Trade Show Paper Samples Like a Pro | YOUNGSUN`,metaDescription:`Learn how to evaluate paper samples at trade shows effectively. Hands-on tests for stiffness, surface, print quality, and converting compatibility — plus the questions to ask suppliers before you leave the booth.`,date:`2026-07-30`,author:`YOUNGSUN PAPER Editorial`,category:`Guides`,excerpt:`The paper samples you collect at trade shows are the foundation of your sourcing decisions. This guide teaches you how to evaluate samples on the spot, what tests to request, and how to avoid the most common sample evaluation mistakes.`,content:`# Making the Most of Trade Show Paper Samples: What to Look For and What to Ask

A trade show sample is a promise. The supplier is saying: "The paper we deliver will be like this." But a sample that looks perfect at the booth may behave completely differently on your production line — different printing, different folding, different humidity, different everything.

This guide covers how to evaluate trade show paper samples effectively, what follow-up tests to request, and the most common mistakes buyers make with samples.

## The Two Purposes of a Trade Show Sample

A trade show sample serves two different purposes, and confusing them leads to bad decisions:

| Purpose | What You're Evaluating | When to Trust It |
|---------|----------------------|------------------|
| **First impression** | Does this paper feel right? Does the surface, color, and stiffness match what I need? | Immediately — your hands and eyes don't lie |
| **Production prediction** | Will this paper run on my press? Will it die-cut cleanly? Will it fold without cracking? | Only after testing on your actual production line |

**The #1 sample mistake:** Approving a supplier based on trade show booth samples without production testing.

## Hands-On Evaluation at the Booth

You can learn a lot about paper in 3-5 minutes with nothing but your hands and eyes.

### The 60-Second Surface Assessment

1. **Run your fingertips lightly across the surface** — is it smooth, textured, velvety, or rough? Is the texture consistent across the entire sheet?
2. **Hold the sheet at a 45° angle to the light** — does the surface reflect evenly? Any visible coating defects, streaks, or dull spots?
3. **Look at the sheet edge-on** — is it a single ply or laminated? For through-dyed papers, does the color go all the way through?
4. **Smell the paper** (important for food-grade papers) — any chemical, musty, or unusual odor?

### The Stiffness and Handling Check

1. **Hold the sample by one corner** — how much does it droop? Compare to your current stock at the same GSM.
2. **Gently wave the sheet** — does it feel rigid and crisp, or limp and soft?
3. **Try a rough fold** (ask permission first if it's a display sample) — does it crease cleanly or crack? Is there a white line at the fold?
4. **Rub two sheets together** — do they slide smoothly or catch? This matters for sheet-fed printing and converting.

### The Print Surface Check (If Pre-Printed)

If the sample has printing on it:

- **Check registration** — are colors aligned? Any visible misregistration?
- **Check dot quality** — look closely at halftone areas; are dots clean or ragged?
- **Check solid areas** — are they uniform or mottled?
- **Rub the printed surface with your thumb** — does the ink smudge or stay put?
- **Check the reverse side** — any show-through?

## What the Booth Sample CANNOT Tell You

A 3-minute booth inspection cannot tell you:

- How the paper runs on a high-speed press at 15,000 sheets per hour
- Whether it will jam in your die-cutter
- How it absorbs ink with your specific ink and press settings
- Whether the coating will crack when folded on your automated folder-gluer
- How it behaves at your factory's temperature and humidity
- Whether batch 2 will match the booth sample quality

## The Follow-Up Sample Request: What to Ask For

Before leaving the booth, request these follow-up items:

### 1. A4 Blank Samples of the Exact Grade
Ask for 10-20 blank sheets of the exact grade and GSM you're evaluating, shipped to your office. These are for:
- Printing tests on your press
- Die-cutting and folding tests on your converting line
- Gluing and assembly tests
- Comparing against your current stock under your lighting conditions

### 2. Printed Samples from a Production Run
A pre-printed booth sample may have been produced under ideal conditions on the supplier's best equipment. Ask for printed samples from a regular production run — same grade, same printing method, but from a commercial job.

### 3. A Technical Data Sheet
This should include:
- Guaranteed GSM and caliper (± tolerance)
- Brightness (ISO %)
- Opacity (%)
- Smoothness (Bendtsen or Bekk)
- Moisture content range
- Tensile strength (MD and CD)
- Tear strength (MD and CD)
- Burst strength (for packaging grades)
- Stiffness (for board grades)

### 4. Certification Documentation
- FSC certificate number (verify at info.fsc.org)
- SGS test reports (if available)
- Food-contact compliance documents (if applicable)
- ISO 9001/14001 certificates

## Sample Evaluation at Your Facility: The Production Test

When samples arrive at your facility, test them under your real production conditions:

| Test | What to Check | Pass/Fail Criterion |
|------|--------------|---------------------|
| Printing | Registration, dot gain, ink drying, color accuracy | Matches or exceeds current stock within acceptable tolerance |
| Die-cutting | Edge quality, dimensional accuracy, tool wear | Clean edges, ±0.5mm dimensional tolerance |
| Folding/Creasing | Crack-free folds, consistent crease depth | No visible cracking at crease under magnification |
| Gluing | Bond strength, open time, coverage | Full bond within specified open time |
| Lamination | Adhesion, bubble-free, edge seal | No delamination at cut edges |
| Embossing/Foil | Depth consistency, foil adhesion, detail retention | Clean reproduction of finest detail element |

## Red Flags in Sample Evaluation

🚩 **"This is a hand sheet, production will be similar"** — Hand sheets and production sheets are not the same. Insist on seeing a production sample.

🚩 **The sample is a different GSM than what you're quoting** — A 250 gsm sample does not represent 350 gsm production. Request the exact GSM.

🚩 **The sample looks perfect but the supplier can't provide technical data** — Beautiful paper with no data is a risk. Demand the spec sheet.

🚩 **"The sample is from last year's production"** — Formulations change. Request a recent production sample.

🚩 **The supplier has no answer for "What happens if the production doesn't match the sample?"** — Clear quality guarantees and claim procedures should be established before ordering.

## Sample Documentation: Your Internal System

Create a simple sample log:

\`\`\`
Sample ID: 2026-EXPO-042
Supplier: [Name]
Grade: Grey Board 1.5mm
Date Collected: July 15, 2026
Booth Contact: [Name] / [Email] / [Phone]
Initial Impression: Good stiffness, consistent color, slight surface roughness
Follow-Up Requested: A4 sheets, production sample, technical data sheet
Quotation Status: Requested July 17 / Received July 19 / Under review
\`\`\`

Six months later, when you can't remember which supplier had the grey board with the good stiffness, this log is invaluable.

## YOUNGSUN Sample Policy

At YOUNGSUN PAPER, we make sampling straightforward:

- **Free samples** of standard products shipped within 3-5 business days
- **Production-run samples** available for serious inquiries — not hand sheets, not lab samples
- **Technical data sheets** provided with every sample shipment
- **FSC and SGS documentation** included when applicable to the grade
- **Pre-production samples** available before bulk orders — same specification, same production line

[Request samples](/contact) with your required grade, GSM, sheet size, and application. Specify whether you need blank sheets, printed samples, or both.

## Suggested Internal Links
- [How to Prepare for a Paper Trade Show — Buyer's Guide](/blog/how-to-prepare-paper-trade-show-buyer-guide)
- [Paper & Packaging Trade Shows 2026-2027 Calendar](/blog/paper-trade-shows-events-calendar-2026-2027)
- [How to Compare Paper Quotes — 10-Point Checklist](/blog/how-to-compare-paper-quotes)
- [Materials Library — 25+ paper grades with specs](/materials)`,image:`/images/blog-articles/making-the-most-of-trade-show-paper-samples.jpg`,tags:[`trade shows`,`paper samples`,`sample evaluation`,`buyer guide`,`quality testing`,`supplier assessment`]}],lr=[`All`,`Packaging`,`Guides`,`Design`,`Compliance`,`Products`];function ur(){let{lang:e}=Zn(),[t,n]=(0,p.useState)(``),[r,i]=(0,p.useState)(!1),[a,o]=(0,p.useState)(0),s=(0,p.useRef)(null),c=(0,p.useRef)(null),l=ht(),u=(0,p.useMemo)(()=>{let e=[];return Object.values(nr).forEach(t=>{t.id&&t.name&&t.category&&e.push({type:`product`,id:t.id,name:t.name,text:[t.name,t.tagline||``,...t.keywords||[]].join(` `).toLowerCase(),href:`/products/${t.id}`})}),cr.forEach(t=>{t.id&&t.title&&e.push({type:`blog`,id:t.id,name:t.title,text:[t.title,t.summary||``,t.category||``].join(` `).toLowerCase(),href:`/blog/${t.id}`})}),e},[]),d=(0,p.useMemo)(()=>{if(t.trim().length<2)return[];let e=t.toLowerCase();return u.filter(t=>t.text.includes(e)).slice(0,8)},[t,u]);(0,p.useEffect)(()=>{o(0)},[d.length]);let f=e=>{l(e),n(``),i(!1)},m=e=>{e.key===`ArrowDown`?(e.preventDefault(),o(e=>Math.min(e+1,d.length-1))):e.key===`ArrowUp`?(e.preventDefault(),o(e=>Math.max(e-1,0))):e.key===`Enter`&&d[a]?f(d[a].href):e.key===`Escape`&&(i(!1),s.current?.blur())};(0,p.useEffect)(()=>{let e=e=>{c.current&&!c.current.contains(e.target)&&i(!1)};return document.addEventListener(`mousedown`,e),()=>document.removeEventListener(`mousedown`,e)},[]);let h=t=>e===`es`?t===`product`?`Producto`:`Blog`:t===`product`?`Product`:`Blog`;return(0,j.jsxs)(`div`,{className:`search-bar`,ref:c,children:[(0,j.jsxs)(`div`,{className:`search-input-wrap`,children:[(0,j.jsxs)(`svg`,{className:`search-icon`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,children:[(0,j.jsx)(`circle`,{cx:`11`,cy:`11`,r:`8`}),(0,j.jsx)(`path`,{d:`m21 21-4.35-4.35`})]}),(0,j.jsx)(`input`,{ref:s,className:`search-input`,type:`text`,placeholder:e===`es`?`Buscar productos...`:`Search products...`,value:t,onChange:e=>{n(e.target.value),i(!0)},onFocus:()=>{d.length>0&&i(!0)},onKeyDown:m}),t&&(0,j.jsx)(`button`,{className:`search-clear`,onClick:()=>{n(``),s.current?.focus()},children:`✕`})]}),r&&d.length>0&&(0,j.jsx)(`div`,{className:`search-dropdown`,children:d.map((e,t)=>(0,j.jsxs)(`button`,{className:`search-result${t===a?` active`:``}`,onMouseDown:e=>e.preventDefault(),onClick:()=>f(e.href),children:[(0,j.jsx)(`span`,{className:`search-result-type`,children:h(e.type)}),(0,j.jsx)(`span`,{className:`search-result-name`,children:e.name})]},e.type+`-`+e.id))}),r&&t.length>=2&&d.length===0&&(0,j.jsx)(`div`,{className:`search-dropdown`,children:(0,j.jsx)(`div`,{className:`search-empty`,children:e===`es`?`Sin resultados`:`No results found`})})]})}var dr=(...e)=>e.filter((e,t,n)=>!!e&&e.trim()!==``&&n.indexOf(e)===t).join(` `).trim(),fr=e=>e.replace(/([a-z0-9])([A-Z])/g,`$1-$2`).toLowerCase(),pr=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,n)=>n?n.toUpperCase():t.toLowerCase()),mr=e=>{let t=pr(e);return t.charAt(0).toUpperCase()+t.slice(1)},hr={xmlns:`http://www.w3.org/2000/svg`,width:24,height:24,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:2,strokeLinecap:`round`,strokeLinejoin:`round`},gr=e=>{for(let t in e)if(t.startsWith(`aria-`)||t===`role`||t===`title`)return!0;return!1},_r=(0,p.createContext)({}),vr=()=>(0,p.useContext)(_r),yr=(0,p.forwardRef)(({color:e,size:t,strokeWidth:n,absoluteStrokeWidth:r,className:i=``,children:a,iconNode:o,...s},c)=>{let{size:l=24,strokeWidth:u=2,absoluteStrokeWidth:d=!1,color:f=`currentColor`,className:m=``}=vr()??{},h=r??d?Number(n??u)*24/Number(t??l):n??u;return(0,p.createElement)(`svg`,{ref:c,...hr,width:t??l??hr.width,height:t??l??hr.height,stroke:e??f,strokeWidth:h,className:dr(`lucide`,m,i),...!a&&!gr(s)&&{"aria-hidden":`true`},...s},[...o.map(([e,t])=>(0,p.createElement)(e,t)),...Array.isArray(a)?a:[a]])}),br=(e,t)=>{let n=(0,p.forwardRef)(({className:n,...r},i)=>(0,p.createElement)(yr,{ref:i,iconNode:t,className:dr(`lucide-${fr(mr(e))}`,`lucide-${e}`,n),...r}));return n.displayName=mr(e),n},xr=br(`arrow-up-right`,[[`path`,{d:`M7 7h10v10`,key:`1tivn9`}],[`path`,{d:`M7 17 17 7`,key:`1vkiza`}]]),Sr=br(`book-open`,[[`path`,{d:`M12 5v16`,key:`1f6ucr`}],[`path`,{d:`M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z`,key:`1fyvmf`}]]),Cr=br(`building-2`,[[`path`,{d:`M10 12h4`,key:`a56b0p`}],[`path`,{d:`M10 8h4`,key:`1sr2af`}],[`path`,{d:`M14 21v-3a2 2 0 0 0-4 0v3`,key:`1rgiei`}],[`path`,{d:`M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2`,key:`secmi2`}],[`path`,{d:`M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16`,key:`16ra0t`}]]),wr=br(`cpu`,[[`path`,{d:`M12 20v2`,key:`1lh1kg`}],[`path`,{d:`M12 2v2`,key:`tus03m`}],[`path`,{d:`M17 20v2`,key:`1rnc9c`}],[`path`,{d:`M17 2v2`,key:`11trls`}],[`path`,{d:`M2 12h2`,key:`1t8f8n`}],[`path`,{d:`M2 17h2`,key:`7oei6x`}],[`path`,{d:`M2 7h2`,key:`asdhe0`}],[`path`,{d:`M20 12h2`,key:`1q8mjw`}],[`path`,{d:`M20 17h2`,key:`1fpfkl`}],[`path`,{d:`M20 7h2`,key:`1o8tra`}],[`path`,{d:`M7 20v2`,key:`4gnj0m`}],[`path`,{d:`M7 2v2`,key:`1i4yhu`}],[`rect`,{x:`4`,y:`4`,width:`16`,height:`16`,rx:`2`,key:`1vbyd7`}],[`rect`,{x:`8`,y:`8`,width:`8`,height:`8`,rx:`1`,key:`z9xiuo`}]]),Tr=br(`gem`,[[`path`,{d:`M10.5 3 8 9l4 13 4-13-2.5-6`,key:`b3dvk1`}],[`path`,{d:`M17 3a2 2 0 0 1 1.6.8l3 4a2 2 0 0 1 .013 2.382l-7.99 10.986a2 2 0 0 1-3.247 0l-7.99-10.986A2 2 0 0 1 2.4 7.8l2.998-3.997A2 2 0 0 1 7 3z`,key:`7w4byz`}],[`path`,{d:`M2 9h20`,key:`16fsjt`}]]),Er=br(`package-open`,[[`path`,{d:`M12 22v-9`,key:`x3hkom`}],[`path`,{d:`M15.17 2.21a1.67 1.67 0 0 1 1.63 0L21 4.57a1.93 1.93 0 0 1 0 3.36L8.82 14.79a1.655 1.655 0 0 1-1.64 0L3 12.43a1.93 1.93 0 0 1 0-3.36z`,key:`2ntwy6`}],[`path`,{d:`M20 13v3.87a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13`,key:`1pmm1c`}],[`path`,{d:`M21 12.43a1.93 1.93 0 0 0 0-3.36L8.83 2.2a1.64 1.64 0 0 0-1.63 0L3 4.57a1.93 1.93 0 0 0 0 3.36l12.18 6.86a1.636 1.636 0 0 0 1.63 0z`,key:`12ttoo`}]]),Dr=br(`utensils-crossed`,[[`path`,{d:`m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8`,key:`n7qcjb`}],[`path`,{d:`M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7`,key:`d0u48b`}],[`path`,{d:`m2.1 21.8 6.4-6.3`,key:`yn04lh`}],[`path`,{d:`m19 5-7 7`,key:`194lzd`}]]),Or={"grey-board":{tagline:`Cartón gris reciclado de alta densidad para embalaje rígido, encuadernación y papelería — resistencia estructural rentable.`,specs:[`Grosor: 0.5 – 4.0 mm`,`Color: Gris natural / Tinte personalizado`,`Superficie: Lisa ambas caras`,`Formato: Hojas y bobinas`,`Humedad: 8% ± 2%`,`Fibra: 100% reciclada post-consumo`],applications:[`Cajas rígidas de regalo`,`Tapas de libros de tapa dura`,`Rompecabezas`,`Carpetas de archivo`,`Cartelería serigrafiada`]},"black-paper":{tagline:`Papel negro teñido en masa con color uniforme — sin blanqueamiento en bordes, sin transferencia de color.`,specs:[`Gramaje: 80–400 gsm`,`Color: Negro teñido en masa`,`Acabados: Sin estucar / Mate / Brillo`,`Formato: Hojas y bobinas`,`Resistencia a la luz: ISO 105-B02`],applications:[`Forro de cajas de lujo`,`Álbumes de fotos`,`Tarjetas de felicitación`,`Bolsas de compras premium`,`Tarjetas de visita`]},"color-card-paper":{tagline:`Cartulina de color vibrante y uniforme — desde bolsas hasta cajas exclusivas.`,specs:[`Gramaje: 120–400 gsm`,`Color: Teñido en masa, 30+ colores`,`Acabado: Lisa / Texturizada`,`Formato: Hojas y bobinas`,`Consistencia: Delta E ≤ 1.5`],applications:[`Bolsas de compras`,`Cajas de embalaje premium`,`Carpetas de presentación`,`Etiquetas colgantes`,`Expositores PLV`]},"folding-box-board":{tagline:`Cartón multicapa con liner blanco brillante — para estuches farmacéuticos, cosméticos y alimentarios.`,specs:[`Gramaje: 200–450 gsm`,`Grados: GC1/GC2/GC3`,`Grosor: 350–650 μm`,`Blancura: ISO 90%+`,`Rigidez: Alta resistencia L&W`],applications:[`Estuches farmacéuticos`,`Envases cosméticos`,`Cajas de alimentos secos`,`Envases de electrónica`,`Cajas de chocolate`]},"art-paper":{tagline:`Papel arte estucado de doble cara con blancura, suavidad y brillo de impresión excepcionales — para publicaciones de gama alta, catálogos e impresión comercial.`,specs:[`Gramaje: 80–200 gsm`,`Acabado: Brillo/Mate/Seda`,`Blancura: ISO 92%+`,`Suavidad: ≤ 1.0 μm (PPS)`,`Formato: Hojas y bobinas`],applications:[`Revistas y catálogos`,`Libros de arte y fotografía`,`Pósteres y calendarios`,`Folletos de gama alta`,`Lookbooks de marcas de lujo`]},"c2s-art-board":{tagline:`Cartón estucado dos caras con acabado liso — para impresión premium y tarjetas de alta gama.`,specs:[`Gramaje: 200–400 gsm`,`Estucado: Doble cara (C2S)`,`Blancura: ISO 92%+`,`Suavidad: ≤ 1.5 μm`,`Formato: Hojas estándar y personalizado`],applications:[`Tarjetas de felicitación de lujo`,`Etiquetas colgantes premium`,`Cubiertas de libros`,`Portadas de catálogos`,`Certificados y diplomas`]},"kraft-paper":{tagline:`Papel kraft virgen de alta resistencia para embalaje industrial y bolsas — resistente y reciclable.`,specs:[`Gramaje: 35–200 gsm`,`Grados: Natural/Blanqueado/Reciclado`,`Índice de tracción: ≥ 80 Nm/g`,`Índice de desgarro: ≥ 12 mNm²/g`,`Formato: Bobinas y hojas`],applications:[`Sacos multicapa`,`Liner para corrugado`,`Envoltura industrial`,`Bolsas de compras`,`Sobres y embalaje postal`]},"duplex-board":{tagline:`Cartón de dos capas con cara blanca y reverso gris — rentable para embalaje minorista.`,specs:[`Gramaje: 200–450 gsm`,`Estructura: Cara blanca + reverso gris`,`Blancura: ISO 85%+`,`Formato: Hojas y bobinas`,`Grado alimentario disponible`],applications:[`Estuches minoristas FMCG`,`Cajas de zapatos`,`Envases de juguetes`,`Envases farmacéuticos secundarios`,`Embalaje minorista general`]},"pe-coated-paper":{tagline:`Papel laminado PE para barrera contra humedad y termosellado.`,specs:[`Sustrato: Kraft/Board, 80–350 gsm`,`Recubrimiento PE: 12–30 gsm`,`Termosellable: 110–150°C`,`Barrera: WVTR ≤ 10 g/m²/24h`,`Grado alimentario: FDA y EU`],applications:[`Vasos de papel fríos/calientes`,`Tarrinas de helado`,`Envases para llevar`,`Alimentos congelados`,`Envoltura antigrasa`]},"woodfree-paper":{tagline:`Papel sin pasta mecánica, blanco brillante y libre de ácido para oficina, libros e impresión comercial.`,specs:[`Gramaje: 60–120 gsm`,`Blancura: ISO 90–100%`,`Opacidad: ≥ 90% a 80 gsm`,`Valor Cobb: ≤ 30 g/m²`,`Formato: Hojas A4/A3 y bobinas`,`Libre de ácido: pH 7.0–9.0`],applications:[`Documentos de oficina A4/A3`,`Publicación de libros`,`Papelería comercial`,`Impresión comercial`,`Sobres y documentos de archivo`]},"color-offset-paper":{tagline:`Papel offset de color sin estucar — tono consistente, excelente imprimibilidad.`,specs:[`Gramaje: 60–200 gsm`,`Colores: 20+ estándar`,`Consistencia: Delta E ≤ 1.5`,`Superficie: Encolada para offset`,`Formato: Hojas y bobinas`],applications:[`Papelería corporativa de color`,`Programas de eventos`,`Folletos publicitarios`,`Scrapbooking`,`Sobres de color`]},"lwc-paper":{tagline:`Papel estucado ligero para revistas, catálogos y papel de regalo impreso.`,specs:[`Gramaje: 35–70 gsm`,`Estucado: Ligero en máquina`,`Blancura: ISO 70–80%`,`Opacidad: ≥ 88% a 60 gsm`,`Formato: Bobinas`],applications:[`Revistas y publicaciones`,`Catálogos minoristas`,`Insertos publicitarios`,`Papel de regalo impreso`,`Folletos de correo directo`]},"ncr-paper":{tagline:`Papel autocopiativo sin carbón para formularios y facturas — copia limpia sin manchas.`,specs:[`Tipos: CB/CFB/CF`,`Gramaje: 50–60 gsm`,`Colores: Blanco/Rosa/Amarillo/Azul/Verde`,`Color imagen: Azul o Negro`,`Formato: Hojas y bobinas`],applications:[`Formularios comerciales`,`Talonarios de recibos`,`Contratos multicopia`,`Recetas médicas`,`Albaranes de logística`]},"multi-color-bond-paper":{tagline:`Papel bond en múltiples colores — superficie lisa, alimentación fiable en impresora.`,specs:[`Gramaje: 70–80 gsm`,`Colores: Múltiples colores prácticos`,`Superficie: Lisa para láser/inyección`,`Formato: A4 y Carta`,`Embalaje: 500 hojas/resma`],applications:[`Archivo por colores`,`Volantes y anuncios`,`Manualidades escolares`,`Menús de restaurante`,`Boletines comunitarios`]},"copy-paper":{tagline:`Papel de oficina multiusos de alta blancura — sin atascos, compatible láser/inyección.`,specs:[`Gramaje: 70/75/80 gsm`,`Blancura: ISO 92–100%`,`Formato: A4, A3, Carta, Legal`,`Opacidad: ≥ 92% a 80 gsm`,`Embalaje: 500 hojas/resma`],applications:[`Impresión de oficina`,`Uso escolar`,`Adquisiciones gubernamentales`,`Oficina en casa`,`Distribución mayorista`]},"a4-copy-paper":{tagline:`Papel estándar A4 para oficina — blanco brillante, sin atascos, en embalaje de exportación.`,specs:[`Gramaje: 70/75/80 gsm`,`Blancura: ISO 92–100%`,`Formato: A4 (210×297mm)`,`Opacidad: ≥ 92%`,`Embalaje: 500 hojas/resma, 5–10 resmas/caja`],applications:[`Impresión de oficina`,`Adquisiciones escolares`,`Suministro gubernamental`,`Oficina en casa`,`Distribución mayorista`]},"a4-thermal-paper":{tagline:`Papel térmico tamaño A4 para impresión portátil — sin tinta ni tóner, solo calor.`,specs:[`Tamaño: A4 (210×297mm)`,`Recubrimiento: Térmico directo`,`Color imagen: Negro`,`Compatibilidad: Impresoras térmicas portátiles`,`Sin tinta/tóner`],applications:[`Impresión portátil para ventas`,`Contratos in situ`,`Documentos médicos`,`Albaranes de logística`,`Coworking y viajes`]},"thermal-paper-roll":{tagline:`Rollos de papel térmico para TPV, recibos e impresoras de fotos instantáneas.`,specs:[`Ancho: 57mm/80mm`,`Diámetro: 30–80mm`,`Núcleo: 12/17/25mm`,`Recubrimiento: Térmico directo`,`Embalaje: Rollos retractilados`],applications:[`Recibos TPV`,`Recibos de tarjeta`,`Tickets de cocina`,`Etiquetas logísticas`,`Mini impresoras fotográficas`]},"tracing-paper":{tagline:`Papel translúcido, liso y dimensionalmente estable — revela lo que hay debajo.`,specs:[`Gramaje: 45–200 gsm`,`Translucidez: 50–70% transmisión`,`Superficie: Lisa, encolada`,`Alta resistencia a la tracción`,`Formato: Hojas y bobinas`],applications:[`Superposiciones de arquitectura`,`Diseño de moda`,`Papelería creativa`,`Ventanas decorativas`,`Arte e ilustración`]},"soft-touch-paper":{tagline:`Papel con recubrimiento táctil aterciopelado — la sensación de lujo que invita a tocar.`,specs:[`Sustrato: Papel/cartón, 120–400 gsm`,`Recubrimiento: PU base agua`,`Textura: Terciopelo suave`,`Compatibilidad: Offset, UV, serigrafía`,`Resistente a huellas`],applications:[`Tarjetas de visita de lujo`,`Cubiertas de libros premium`,`Envases de cosméticos`,`Invitaciones de boda`,`Etiquetas colgantes de moda`]},"leather-paper":{tagline:`Papel que se ve y se siente como cuero genuino — vegano, duradero, premium.`,specs:[`Sustrato: FBB/Grey board, 120–400 gsm`,`Gofrado: Textura de cuero`,`Colores: Tonos clásicos de cuero`,`Superficie: Laminado mate o PU`,`100% libre de animales`],applications:[`Cubiertas de libros`,`Cajas de regalo premium`,`Envases de vinos`,`Carpetas de presentación`,`Cajas de relojes`]},"pearlescent-paper":{tagline:`Papel iridiscente con brillo perlado — elegancia que se mueve con la luz.`,specs:[`Gramaje: 120–350 gsm`,`Acabado: Perla/Iridiscente`,`Colores: Perla blanca, champagne, oro, plata`,`Imprimible: Offset, serigrafía, foil`,`Formato: Hojas y bobinas`],applications:[`Invitaciones de boda`,`Envases de cosmética`,`Forros de perfume`,`Tarjetas de lujo`,`Carpetas de certificados`]},"embossed-paper":{tagline:`Papel con textura tridimensional en relieve — convierte el embalaje en experiencia táctil.`,specs:[`Sustrato: 80–400 gsm`,`Patrones: Lino/Fieltro/Lienzo/Veta/Personalizado`,`Profundidad: Fina a profunda`,`Imprimible post-gofrado`,`Formato: Hojas y bobinas`],applications:[`Envases de lujo`,`Etiquetas colgantes de moda`,`Tarjetas corporativas`,`Cubiertas de libros`,`Papelería de boda`]},"label-paper":{tagline:`Papel facial premium para etiquetas — liso, imprimible, para conversión de alta velocidad.`,specs:[`Gramaje: 60–250 gsm`,`Tipos: C1S/C2S/Metalizado`,`Acabado: Brillo/Mate/Semimate`,`Alta resistencia a la tracción`,`Formato: Bobinas y hojas`],applications:[`Etiquetas para botellas`,`Etiquetas colgantes de moda`,`Etiquetas de bebidas`,`Etiquetas de precio`,`Etiquetas de seguridad`]},"cup-paper":{tagline:`Cartón para vasos con recubrimiento PE — apto para alimentos, rígido, optimizado para conversión.`,specs:[`Sustrato: Kraft blanqueado, 180–350 gsm`,`Recubrimiento PE: 1PE o 2PE`,`Termosellado: 120–150°C`,`Resistencia al agua: ≥ 24h a 95°C`,`Grado alimentario: FDA, EU, GB`],applications:[`Vasos para bebidas calientes`,`Vasos para bebidas frías`,`Envases de sopa`,`Tarrinas de helado`,`Vasos para salsas`]},"greaseproof-paper":{tagline:`Papel antigrasa de alta densidad — sin recubrimiento, solo ingeniería de fibra pura.`,specs:[`Gramaje: 28–80 gsm`,`Resistencia a grasa: Kit 8–12`,`Mecanismo: Densificación de fibra`,`Libre de PFAS`,`Resistente al horno hasta 220°C`],applications:[`Papel de hornear`,`Envoltura de sándwiches`,`Envoltura de mantequilla`,`Forros de bandejas`,`Papel para fish and chips`]},"silicone-coated-paper":{tagline:`Papel antiadherente con silicona — liberación limpia en cada uso.`,specs:[`Sustrato: Kraft, 40–120 gsm`,`Silicona: Una o dos caras`,`Resistencia al calor: 230°C`,`Fuerza de liberación: Ajustable`,`Grado alimentario: FDA, EU`],applications:[`Papel de hornear`,`Liner para etiquetas`,`Envoltura antiadherente`,`Liner de moldeo industrial`,`Papel para hamburguesas`]},"absorbent-paper":{tagline:`Papel absorbente de algodón de alto rendimiento — absorción rápida, textura natural.`,specs:[`Material: 100% fibra de algodón`,`Espesor: 0.4–1.6 mm`,`Gramaje: 380–1500 gsm`,`Color: Blanco / Natural`,`Certificado: FSC, contacto alimentario`],applications:[`Tiras para perfume`,`Posavasos`,`Tarjetas desecantes`,`Tarjetas de frescura`,`Etiquetas colgantes`,`Forros de cajas de regalo`]}},kr=[{id:`packaging-printing`,title:{en:`Packaging & Printing`,es:`Embalaje e Impresión`},icon:`📦`,heroImage:`/images/industries/industry-packaging.jpg`,tagline:{en:`Structural integrity and print brilliance — from folding cartons to rigid luxury boxes.`,es:`Integridad estructural y brillo de impresión — desde cajas plegables hasta cajas rígidas de lujo.`},overview:{en:`The packaging and printing industry demands paper and board that balances structural strength with surface quality. Whether it's a folding carton for retail, a rigid gift box for premium cosmetics, or corrugated packaging for e-commerce, the right paperboard directly impacts brand perception, production efficiency, and sustainability credentials.`,es:`La industria del embalaje e impresión exige papel y cartón que equilibren resistencia estructural con calidad superficial. Ya sea una caja plegable para venta minorista, una caja rígida para cosméticos premium o embalaje corrugado para comercio electrónico, el cartón adecuado impacta directamente la percepción de marca, la eficiencia de producción y las credenciales de sostenibilidad.`},challenges:[{title:{en:`Structural integrity`,es:`Integridad estructural`},desc:{en:`Boxes must withstand stacking, shipping, and handling without deformation.`,es:`Las cajas deben soportar apilamiento, envío y manipulación sin deformarse.`}},{title:{en:`Print quality`,es:`Calidad de impresión`},desc:{en:`High-resolution graphics require smooth, coated surfaces with consistent ink holdout.`,es:`Los gráficos de alta resolución requieren superficies lisas y recubiertas con retención de tinta consistente.`}},{title:{en:`Sustainability compliance`,es:`Cumplimiento de sostenibilidad`},desc:{en:`Brands increasingly require FSC certification, recycled content, and recyclable packaging.`,es:`Las marcas exigen cada vez más certificación FSC, contenido reciclado y embalaje reciclable.`}},{title:{en:`Cost efficiency`,es:`Eficiencia de costos`},desc:{en:`Balancing material cost with performance — over-specification wastes money, under-specification risks failure.`,es:`Equilibrar el costo del material con el rendimiento — sobre-especificar desperdicia dinero, sub-especificar arriesga fallos.`}}],solutions:{en:`YOUNGSUN supplies a complete range of packaging boards engineered for every packaging format. Our grey board provides rigid box structure at competitive pricing. Our duplex board and folding box board deliver the print surface and fold quality needed for retail cartons. Our kraft paper offers natural strength for bags and wraps. All products are available with FSC certification and can be supplied in custom sheet sizes or reel formats.`,es:`YOUNGSUN suministra una gama completa de cartones para embalaje diseñados para cada formato. Nuestro cartón gris proporciona estructura rígida a precios competitivos. Nuestro cartón dúplex y folding box board ofrecen la superficie de impresión y calidad de plegado necesarias para cajas minoristas. Nuestro papel kraft ofrece resistencia natural para bolsas y envolturas. Todos los productos están disponibles con certificación FSC.`},recommendedProducts:[`grey-board`,`duplex-board`,`folding-box-board`,`c2s-art-board`,`kraft-paper`,`black-paper`,`color-card-paper`,`gold-silver-card`],faqs:[{q:{en:`What board is best for rigid luxury boxes?`,es:`¿Qué cartón es mejor para cajas rígidas de lujo?`},a:{en:`Grey board (1.5mm–3.0mm) is the industry standard for rigid boxes. It provides excellent stiffness and is typically wrapped with printed paper, fancy paper, or fabric for the finished look.`,es:`El cartón gris (1.5mm–3.0mm) es el estándar para cajas rígidas. Proporciona excelente rigidez y generalmente se envuelve con papel impreso, papel fancy o tela para el acabado final.`}},{q:{en:`Do you supply FSC-certified packaging board?`,es:`¿Suministran cartón con certificación FSC?`},a:{en:`Yes. All YOUNGSUN packaging boards are available with FSC certification. FSC 100%, FSC Mix, and FSC Recycled labels are available depending on the product grade.`,es:`Sí. Todos los cartones de embalaje YOUNGSUN están disponibles con certificación FSC. Las etiquetas FSC 100%, FSC Mix y FSC Reciclado están disponibles según el grado del producto.`}},{q:{en:`What is the minimum order quantity?`,es:`¿Cuál es la cantidad mínima de pedido?`},a:{en:`Standard MOQ is 1 metric ton. For custom sizes or colors, minimums may vary. Contact us for specific product MOQs.`,es:`El MOQ estándar es de 1 tonelada métrica. Para tamaños o colores personalizados, los mínimos pueden variar. Contáctenos para MOQs específicos.`}}]},{id:`food-beverage`,title:{en:`Food & Beverage`,es:`Alimentos y Bebidas`},icon:`🍽️`,heroImage:`/images/industries/industry-food.jpg`,tagline:{en:`Food-safe paper and board — from disposable cups to grease-resistant wraps.`,es:`Papel y cartón aptos para alimentos — desde vasos desechables hasta envolturas resistentes a la grasa.`},overview:{en:`Food packaging is one of the most technically demanding segments of the paper industry. Materials must be safe for food contact, resistant to grease and moisture, strong enough for hot liquids, and compliant with evolving regulations across different markets. YOUNGSUN supplies a complete portfolio of food-grade papers designed for converters serving QSR chains, food manufacturers, and food-service distributors worldwide.`,es:`El embalaje de alimentos es uno de los segmentos más exigentes de la industria papelera. Los materiales deben ser seguros para contacto alimentario, resistentes a grasa y humedad, suficientemente fuertes para líquidos calientes y cumplir con regulaciones en evolución. YOUNGSUN suministra una cartera completa de papeles de grado alimentario para convertidores que sirven a cadenas QSR, fabricantes de alimentos y distribuidores de servicios alimentarios.`},challenges:[{title:{en:`Food safety compliance`,es:`Cumplimiento de seguridad alimentaria`},desc:{en:`FDA, EU 1935/2004, and GB 9685 compliance required for different markets.`,es:`Se requiere cumplimiento FDA, EU 1935/2004 y GB 9685 para diferentes mercados.`}},{title:{en:`Grease and moisture resistance`,es:`Resistencia a grasa y humedad`},desc:{en:`Papers must prevent oil penetration and maintain structural integrity with wet or fatty foods.`,es:`Los papeles deben prevenir la penetración de aceite y mantener la integridad estructural con alimentos húmedos o grasos.`}},{title:{en:`Heat sealability`,es:`Sellabilidad térmica`},desc:{en:`Cup stock and coated papers must heat-seal reliably at high converting speeds.`,es:`El papel para vasos y papeles recubiertos deben sellarse térmicamente de manera confiable a altas velocidades de conversión.`}},{title:{en:`PFAS-free requirements`,es:`Requisitos libres de PFAS`},desc:{en:`Growing regulatory pressure to eliminate PFAS from food packaging — our greaseproof paper achieves oil resistance through mechanical fiber densification, not chemical treatment.`,es:`Creciente presión regulatoria para eliminar PFAS del embalaje alimentario — nuestro papel antigrasa logra resistencia al aceite mediante densificación mecánica de fibra, no tratamiento químico.`}}],solutions:{en:`Our food packaging portfolio includes cupstock board (160–330 gsm) for hot and cold drink cups, PFAS-free greaseproof paper (35–60 gsm, KIT 6+) for wraps and liners, PE coated paper for moisture barrier applications, and silicone coated paper for non-stick baking and release applications. All products are available with FSC certification and food-contact compliance documentation for your target market.`,es:`Nuestra cartera de embalaje alimentario incluye cartón para vasos (160–330 gsm), papel antigrasa libre de PFAS (35–60 gsm, KIT 6+), papel recubierto PE para barrera de humedad y papel siliconado para aplicaciones antiadherentes. Todos los productos están disponibles con certificación FSC y documentación de cumplimiento para contacto alimentario.`},recommendedProducts:[`cup-paper`,`greaseproof-paper`,`pe-coated-paper`,`silicone-coated-paper`,`kraft-paper`,`mg-paper`],faqs:[{q:{en:`Is your greaseproof paper PFAS-free?`,es:`¿Su papel antigrasa es libre de PFAS?`},a:{en:`Yes. YOUNGSUN greaseproof paper achieves oil resistance through mechanical fiber densification during the papermaking process — no PFAS chemicals are added. PFAS-free certification documentation is available on request.`,es:`Sí. El papel antigrasa YOUNGSUN logra resistencia al aceite mediante densificación mecánica de fibra — no se añaden químicos PFAS. La documentación de certificación libre de PFAS está disponible bajo solicitud.`}},{q:{en:`What KIT rating do I need for burger wrap?`,es:`¿Qué clasificación KIT necesito para envoltura de hamburguesas?`},a:{en:`KIT 6–8 is typically sufficient for burgers and sandwiches. Higher-fat foods like fried chicken or cheese may require KIT 8+.`,es:`KIT 6–8 es típicamente suficiente para hamburguesas y sándwiches. Alimentos más grasos como pollo frito o queso pueden requerir KIT 8+.`}},{q:{en:`Do you provide FDA compliance documentation?`,es:`¿Proporcionan documentación de cumplimiento FDA?`},a:{en:`Yes. We provide Declaration of Compliance (DoC) documents and test reports for FDA 21 CFR, EU 1935/2004, and GB 9685. Please specify your target market when requesting a quotation.`,es:`Sí. Proporcionamos documentos de Declaración de Conformidad e informes de prueba para FDA 21 CFR, EU 1935/2004 y GB 9685. Especifique su mercado objetivo al solicitar cotización.`}}]},{id:`luxury-cosmetics`,title:{en:`Luxury & Cosmetics`,es:`Lujo y Cosmética`},icon:`✨`,heroImage:`/images/industries/industry-luxury.jpg`,tagline:{en:`Tactile surfaces and premium finishes — packaging that communicates luxury before the product is revealed.`,es:`Superficies táctiles y acabados premium — embalaje que comunica lujo antes de revelar el producto.`},overview:{en:`In luxury and cosmetics packaging, the material IS the message. Before a customer sees the product, they touch the box. The surface texture, the weight of the board, the way light catches a pearlescent finish — these sensory details define brand perception. YOUNGSUN's fancy paper collection provides designers and brands with a palette of textures, colors, and finishes that elevate packaging from functional to memorable.`,es:`En el embalaje de lujo y cosmética, el material ES el mensaje. Antes de que el cliente vea el producto, toca la caja. La textura superficial, el peso del cartón, la forma en que la luz capta un acabado perlado — estos detalles sensoriales definen la percepción de marca. La colección de papeles fancy de YOUNGSUN proporciona a diseñadores y marcas una paleta de texturas, colores y acabados que elevan el embalaje de funcional a memorable.`},challenges:[{title:{en:`Sensory differentiation`,es:`Diferenciación sensorial`},desc:{en:`Luxury brands need packaging that stands out through touch, not just visuals. Soft-touch, leather texture, and pearlescent finishes create memorable unboxing experiences.`,es:`Las marcas de lujo necesitan embalaje que destaque por el tacto, no solo por lo visual. Los acabados soft-touch, textura de cuero y perlados crean experiencias de unboxing memorables.`}},{title:{en:`Color precision`,es:`Precisión de color`},desc:{en:`Brand colors must be consistent across packaging suites — matching Pantone specifications for boxes, tags, and inserts.`,es:`Los colores de marca deben ser consistentes en todos los conjuntos de embalaje — coincidiendo con especificaciones Pantone para cajas, etiquetas e insertos.`}},{title:{en:`Foil and embossing compatibility`,es:`Compatibilidad con foil y relieve`},desc:{en:`Premium finishing techniques require papers that accept foil stamping, embossing, and debossing cleanly without cracking or delamination.`,es:`Las técnicas de acabado premium requieren papeles que acepten estampado foil, relieve y bajorrelieve limpiamente sin agrietarse ni delaminarse.`}},{title:{en:`Sustainability without compromise`,es:`Sostenibilidad sin compromiso`},desc:{en:`Luxury consumers increasingly demand sustainable packaging — the challenge is achieving premium look and feel with FSC-certified and recycled materials.`,es:`Los consumidores de lujo exigen cada vez más embalaje sostenible — el desafío es lograr apariencia y tacto premium con materiales certificados FSC y reciclados.`}}],solutions:{en:`Our fancy paper collection includes soft touch paper with its velvet-smooth surface, leather paper with authentic grain patterns, pearlescent paper with subtle shimmer, embossed paper with 3D texture, and through-dyed black paper for dramatic contrast with gold foil. We also offer color card paper in standard, deep, and custom-matched shades. Every grade is tested for foil stamping, embossing, die-cutting, and folding performance.`,es:`Nuestra colección de papeles fancy incluye papel soft touch con superficie aterciopelada, papel cuero con patrones de grano auténtico, papel perlado con brillo sutil, papel gofrado con textura 3D y papel negro teñido en masa para contraste dramático con foil dorado. También ofrecemos cartulina de color en tonos estándar, profundos y personalizados.`},recommendedProducts:[`soft-touch-paper`,`leather-paper`,`pearlescent-paper`,`embossed-paper`,`black-paper`,`color-card-paper`,`gold-silver-card`,`tracing-paper`,`color-tissue-paper`,`label-paper`],faqs:[{q:{en:`What paper works best with gold foil stamping?`,es:`¿Qué papel funciona mejor con estampado foil dorado?`},a:{en:`Smooth, coated papers produce the cleanest foil results. Black paper (through-dyed) with gold foil creates the highest contrast and is a classic luxury combination. Soft touch paper with foil creates an interesting matte-metallic tension.`,es:`Los papeles lisos y recubiertos producen los resultados de foil más limpios. El papel negro (teñido en masa) con foil dorado crea el mayor contraste y es una combinación clásica de lujo. El papel soft touch con foil crea una tensión mate-metálica interesante.`}},{q:{en:`Can you match our brand color?`,es:`¿Pueden igualar nuestro color de marca?`},a:{en:`Yes. Custom color matching is available for color card paper, subject to minimum order quantity (typically 3–5 metric tons). Please provide your Pantone reference or physical color sample.`,es:`Sí. El match de color personalizado está disponible para cartulina de color, sujeto a cantidad mínima de pedido (típicamente 3–5 toneladas). Proporcione su referencia Pantone o muestra física de color.`}},{q:{en:`Is your leather paper made from animal leather?`,es:`¿Su papel cuero está hecho de cuero animal?`},a:{en:`No. YOUNGSUN leather paper is 100% animal-free. It replicates the grain, depth, and hand-feel of genuine leather through embossing and surface treatment on a paper base. Available in crocodile, calf, ostrich, and pebble grain patterns.`,es:`No. El papel cuero YOUNGSUN es 100% libre de animales. Replica el grano, profundidad y tacto del cuero genuino mediante gofrado y tratamiento superficial sobre base de papel. Disponible en patrones de cocodrilo, ternera, avestruz y grano de piedra.`}}]},{id:`publishing-stationery`,title:{en:`Publishing & Stationery`,es:`Editorial y Papelería`},icon:`📚`,heroImage:`/images/industries/industry-publishing.jpg`,tagline:{en:`High-performance printing surfaces — from art books to business stationery.`,es:`Superficies de impresión de alto rendimiento — desde libros de arte hasta papelería comercial.`},overview:{en:`Publishing and stationery demand papers that balance print quality, opacity, bulk, and cost. Whether it's a high-end art book requiring coated paper for image reproduction, an office stationery range needing consistent uncoated woodfree paper, or a mass-market catalog optimizing cost per page, paper selection directly impacts the final product's quality, weight, and economics.`,es:`La industria editorial y de papelería demanda papeles que equilibren calidad de impresión, opacidad, volumen y costo. Ya sea un libro de arte que requiere papel estucado para reproducción de imágenes, una línea de papelería que necesita papel woodfree no estucado consistente, o un catálogo masivo optimizando costo por página, la selección de papel impacta directamente la calidad, peso y economía del producto final.`},challenges:[{title:{en:`Print fidelity`,es:`Fidelidad de impresión`},desc:{en:`High-resolution image reproduction requires consistent coating, brightness, and smoothness across the entire sheet.`,es:`La reproducción de imágenes de alta resolución requiere recubrimiento, blancura y lisura consistentes en toda la hoja.`}},{title:{en:`Opacity and bulk`,es:`Opacidad y volumen`},desc:{en:`Books and publications need sufficient opacity to prevent show-through while maintaining a desirable hand-feel and page count.`,es:`Libros y publicaciones necesitan opacidad suficiente para prevenir transparencia mientras mantienen un tacto agradable y conteo de páginas.`}},{title:{en:`Runability`,es:`Runnability`},desc:{en:`Papers must perform flawlessly on high-speed web and sheet-fed presses without breaks, dust, or misregistration.`,es:`Los papeles deben funcionar perfectamente en prensas rotativas y de pliegos de alta velocidad sin roturas, polvo o mal registro.`}}],solutions:{en:`YOUNGSUN supplies a full range of culture papers: woodfree offset paper for books and notebooks, C2S art paper (gloss and matt) for premium catalogs and magazines, LWC paper for high-volume publishing, color offset paper for forms and inserts, and NCR paper for business forms. All grades are available in sheets or reels with consistent quality from major mill partners including APP, CHENMING, and NINEDRAGON.`,es:`YOUNGSUN suministra una gama completa de papeles culturales: papel offset woodfree para libros y cuadernos, papel arte C2S (brillo y mate) para catálogos y revistas premium, papel LWC para publicaciones de alto volumen, papel offset color para formularios e insertos, y papel NCR para formularios comerciales. Todos los grados disponibles en hojas o bobinas.`},recommendedProducts:[`woodfree-paper`,`art-paper`,`lwc-paper`,`color-offset-paper`,`ncr-paper`,`copy-paper`,`newsprint`],faqs:[{q:{en:`What is the difference between woodfree and coated paper?`,es:`¿Cuál es la diferencia entre papel woodfree y estucado?`},a:{en:`Woodfree paper is uncoated — ink absorbs into the fiber surface, giving a natural, matte appearance. Coated paper (C2S art paper) has a mineral coating that sits on top of the fibers, producing sharper images, deeper blacks, and more vibrant colors. Choose woodfree for novels and stationery; choose coated for art books and magazines.`,es:`El papel woodfree no está estucado — la tinta se absorbe en la superficie de fibra, dando una apariencia natural y mate. El papel estucado (papel arte C2S) tiene un recubrimiento mineral sobre las fibras, produciendo imágenes más nítidas, negros más profundos y colores más vibrantes. Elija woodfree para novelas y papelería; elija estucado para libros de arte y revistas.`}},{q:{en:`Can you supply in custom sheet sizes?`,es:`¿Pueden suministrar en tamaños de hoja personalizados?`},a:{en:`Yes. Custom sheet sizes are available. Common stock sizes include 787×1092mm and 889×1194mm. Specify your required dimensions when requesting a quotation.`,es:`Sí. Tamaños de hoja personalizados están disponibles. Los tamaños comunes incluyen 787×1092mm y 889×1194mm. Especifique sus dimensiones requeridas al solicitar cotización.`}}]},{id:`electronics-industrial`,title:{en:`Electronics & Industrial`,es:`Electrónica e Industrial`},icon:`⚙️`,heroImage:`/images/industries/industry-electronics.jpg`,tagline:{en:`High-performance papers for demanding technical applications — from electrical insulation to industrial packaging.`,es:`Papeles de alto rendimiento para aplicaciones técnicas exigentes — desde aislamiento eléctrico hasta embalaje industrial.`},overview:{en:`Industrial paper applications require specialized grades engineered for specific technical performance: electrical insulation, thermal conductivity, chemical resistance, mechanical cushioning, and conductive or anti-static properties. YOUNGSUN supplies technical papers and boards that meet tight specifications for electronics manufacturing, automotive components, industrial packaging, and construction materials.`,es:`Las aplicaciones industriales de papel requieren grados especializados diseñados para rendimiento técnico específico: aislamiento eléctrico, conductividad térmica, resistencia química, amortiguación mecánica y propiedades conductoras o antiestáticas. YOUNGSUN suministra papeles y cartones técnicos que cumplen especificaciones estrictas para fabricación electrónica, componentes automotrices, embalaje industrial y materiales de construcción.`},challenges:[{title:{en:`Technical specifications`,es:`Especificaciones técnicas`},desc:{en:`Industrial papers must meet precise electrical, thermal, and mechanical specifications with tight tolerances.`,es:`Los papeles industriales deben cumplir especificaciones eléctricas, térmicas y mecánicas precisas con tolerancias ajustadas.`}},{title:{en:`Consistency at scale`,es:`Consistencia a escala`},desc:{en:`Mass production requires batch-to-batch consistency — a single out-of-spec batch can halt an entire production line.`,es:`La producción en masa requiere consistencia lote a lote — un solo lote fuera de especificación puede detener toda una línea de producción.`}},{title:{en:`Supply chain reliability`,es:`Fiabilidad de cadena de suministro`},desc:{en:`Industrial buyers need guaranteed supply with predictable lead times and buffer stock availability.`,es:`Los compradores industriales necesitan suministro garantizado con tiempos de entrega predecibles y disponibilidad de stock de reserva.`}}],solutions:{en:`Our industrial portfolio includes kraft paper for protective packaging and interleaving, grey board for structural components, PE coated paper for moisture barriers, and specialty grades for electrical and thermal applications. With 50,000 tons of warehouse stock and partnerships with major Chinese mills, we provide reliable, large-volume supply with consistent quality.`,es:`Nuestra cartera industrial incluye papel kraft para embalaje protector e intercalado, cartón gris para componentes estructurales, papel recubierto PE para barreras de humedad y grados especiales para aplicaciones eléctricas y térmicas. Con 50,000 toneladas de stock en almacén y alianzas con los principales molinos chinos, proporcionamos suministro confiable a gran volumen con calidad consistente.`},recommendedProducts:[`kraft-paper`,`grey-board`,`pe-coated-paper`,`mg-paper`,`silicone-coated-paper`],faqs:[{q:{en:`What is the maximum roll width available?`,es:`¿Cuál es el ancho máximo de bobina disponible?`},a:{en:`Roll widths vary by product grade. Standard widths range from 300mm to 2400mm. Custom slitting to your exact specification is available. Contact us with your requirements.`,es:`Los anchos de bobina varían según el grado del producto. Los anchos estándar varían de 300mm a 2400mm. Corte personalizado a su especificación exacta está disponible. Contáctenos con sus requisitos.`}},{q:{en:`Do you offer just-in-time delivery?`,es:`¿Ofrecen entrega just-in-time?`},a:{en:`Yes. For qualified long-term contracts, we can arrange scheduled deliveries aligned with your production planning. Our warehouse stock of 50,000 tons enables flexible fulfillment.`,es:`Sí. Para contratos calificados a largo plazo, podemos organizar entregas programadas alineadas con su planificación de producción. Nuestro stock de 50,000 toneladas permite cumplimiento flexible.`}}]},{id:`construction-decoration`,title:{en:`Construction & Decoration`,es:`Construcción y Decoración`},icon:`🏗️`,heroImage:`/images/industries/industry-construction.jpg`,tagline:{en:`Durable paper-based materials for building, interior design, and surface decoration.`,es:`Materiales duraderos a base de papel para construcción, diseño interior y decoración de superficies.`},overview:{en:`Paper and board products play a vital role in modern construction and interior decoration — from decorative laminates and wall coverings to insulation facing and protective underlayment. These applications demand materials with fire resistance, dimensional stability, moisture tolerance, and long-term durability. YOUNGSUN supplies base papers and boards engineered for converting into construction and decoration products.`,es:`Los productos de papel y cartón juegan un papel vital en la construcción moderna y decoración interior — desde laminados decorativos y revestimientos de paredes hasta revestimientos aislantes y capas base protectoras. Estas aplicaciones exigen materiales con resistencia al fuego, estabilidad dimensional, tolerancia a la humedad y durabilidad a largo plazo.`},challenges:[{title:{en:`Fire resistance`,es:`Resistencia al fuego`},desc:{en:`Construction materials must meet fire safety standards (BS 476, EN 13501, ASTM E84) for building code compliance.`,es:`Los materiales de construcción deben cumplir estándares de seguridad contra incendios (BS 476, EN 13501, ASTM E84) para cumplimiento de código de construcción.`}},{title:{en:`Dimensional stability`,es:`Estabilidad dimensional`},desc:{en:`Papers used in laminates and surfaces must resist warping, shrinking, and expanding with humidity and temperature changes.`,es:`Los papeles usados en laminados y superficies deben resistir deformación, contracción y expansión con cambios de humedad y temperatura.`}},{title:{en:`Surface quality`,es:`Calidad superficial`},desc:{en:`Decorative papers require uniform formation, consistent absorbency for resin impregnation, and clean printing surface for wood-grain and pattern reproduction.`,es:`Los papeles decorativos requieren formación uniforme, absorbencia consistente para impregnación de resina y superficie de impresión limpia para reproducción de vetas de madera y patrones.`}}],solutions:{en:`YOUNGSUN supplies base papers for decorative laminates, impregnation papers for surface finishing, kraft paper for construction underlayment and insulation facing, and heavy-duty boards for temporary protection and construction packaging. Our products are sourced from mills with ISO 9001 and ISO 14001 certification, ensuring consistent quality for industrial converting processes.`,es:`YOUNGSUN suministra papeles base para laminados decorativos, papeles de impregnación para acabado de superficies, papel kraft para capas base de construcción y revestimiento aislante, y cartones de alta resistencia para protección temporal y embalaje de construcción. Nuestros productos provienen de molinos con certificación ISO 9001 e ISO 14001.`},recommendedProducts:[`kraft-paper`,`grey-board`,`duplex-board`,`folding-box-board`],faqs:[{q:{en:`Can you supply fire-retardant treated paper?`,es:`¿Pueden suministrar papel tratado ignífugo?`},a:{en:`Fire-retardant treatments can be applied to certain grades. Please specify the required fire rating standard (BS 476, ASTM E84, EN 13501) and we will confirm availability for your application.`,es:`Se pueden aplicar tratamientos ignífugos a ciertos grados. Especifique el estándar de clasificación de fuego requerido (BS 476, ASTM E84, EN 13501) y confirmaremos disponibilidad para su aplicación.`}}]}];kr.length;var Ar=`https://formsubmit.co/ajax/Alice@yspaper.com`,jr=3e3;function Mr(e){let[t,n]=(0,p.useState)(e),[r,i]=(0,p.useState)(!1),[a,o]=(0,p.useState)(!1),[s,c]=(0,p.useState)(``),l=(0,p.useRef)(null),u=(0,p.useRef)(0),d=(0,p.useCallback)(e=>{n(t=>({...t,[e.target.name]:e.target.value}))},[]),f=(0,p.useCallback)(async r=>{if(r.preventDefault(),c(``),l.current&&l.current.value){i(!0),setTimeout(()=>i(!1),5e3);return}if(Date.now()-u.current<jr){c(`Please wait a moment before submitting.`);return}o(!0);try{let r={name:t.name,email:t.email,company:t.company||`(not provided)`,phone:t.phone||`(not provided)`,product:t.product||`(not specified)`,gsm:t.gsm||``,size:t.size||``,quantity:t.quantity||``,destination:t.destination||``,message:t.message,_subject:`New Inquiry from ${t.name||`Website Visitor`}: ${t.product||`Paper Products`}`,_captcha:`false`,page_url:window.location.href},a=await fetch(Ar,{method:`POST`,headers:{"Content-Type":`application/json`,Accept:`application/json`},body:JSON.stringify(r)});if(a.ok)i(!0),n(e),typeof window<`u`&&(window.gtag&&window.gtag(`event`,`generate_lead`,{event_category:`contact_form`,event_label:t.product||`inquiry`,value:1}),window.gtag_report_conversion&&window.gtag_report_conversion(),window.clarity&&window.clarity(`event`,`contact_form_submit`)),setTimeout(()=>i(!1),6e3);else{let e=await a.json().catch(()=>({}));c(e.message||`Failed to send message. Please email us directly at Alice@yspaper.com`)}}catch{c(`Network error. Please check your connection and try again, or email us at Alice@yspaper.com`)}o(!1)},[t,e]);return{form:t,submitted:r,sending:a,error:s,honeypotRef:l,submitTimeRef:(0,p.useCallback)(()=>{u.current=Date.now()},[]),handleChange:d,handleSubmit:f}}function Nr(){return(0,j.jsxs)(`svg`,{viewBox:`0 0 24 24`,"aria-hidden":`true`,width:`18`,height:`18`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:[(0,j.jsx)(`path`,{d:`M5 12h13`}),(0,j.jsx)(`path`,{d:`m13 6 6 6-6 6`})]})}function Pr(){let{t,lang:n}=Zn();return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(a,{title:`Premium Paper Trading & Manufacturing`,description:`YOUNGSUN PAPER — premium paper and board supplier since 2002. Grey board, kraft paper, specialty paper, and food packaging for global brands. FSC & SGS certified.`,path:`/`}),(0,j.jsx)(e,{}),(0,j.jsxs)(`section`,{className:`hero`,id:`home`,children:[(0,j.jsx)(`div`,{className:`hero-bg`,children:(0,j.jsx)(`img`,{src:`images/products/fancy-paper/background-hangtag-section-clean.jpg`,alt:``,"aria-hidden":`true`,fetchpriority:`high`})}),(0,j.jsxs)(`div`,{className:`hero-content`,children:[(0,j.jsx)(`p`,{className:`hero-eyebrow`,children:t(`Sustainable Paper, Global Reach`)}),(0,j.jsx)(`div`,{className:`hero-title`,children:(0,j.jsxs)(`h1`,{children:[`Premium Paper & Paperboard`,(0,j.jsx)(`br`,{}),(0,j.jsx)(`span`,{className:`gold-text`,children:`Supplier in China`})]})}),(0,j.jsx)(`p`,{className:`hero-subtitle`,children:t(`hero_subtitle`)}),(0,j.jsxs)(`div`,{className:`hero-actions`,children:[(0,j.jsxs)(A,{to:`/products`,className:`btn btn-primary`,children:[t(`Explore Products`),(0,j.jsx)(`span`,{className:`btn-arrow`,children:(0,j.jsx)(Nr,{})})]}),(0,j.jsx)(A,{to:`/contact`,className:`btn btn-outline`,children:t(`Get a Quote`)})]}),(0,j.jsxs)(`div`,{className:`hero-eco-badges`,children:[(0,j.jsxs)(`span`,{className:`hero-eco-badge`,children:[(0,j.jsx)(`span`,{className:`badge-dot`}),` `,t(`FSC® Certified`)]}),(0,j.jsxs)(`span`,{className:`hero-eco-badge`,children:[(0,j.jsx)(`span`,{className:`badge-dot`}),` `,t(`SGS Certified`)]}),(0,j.jsxs)(`span`,{className:`hero-eco-badge`,children:[(0,j.jsx)(`span`,{className:`badge-dot`}),` ISO 14001`]}),(0,j.jsxs)(`span`,{className:`hero-eco-badge`,children:[(0,j.jsx)(`span`,{className:`badge-dot`}),` `,t(`20+ Years Experience`)]}),(0,j.jsxs)(`span`,{className:`hero-eco-badge`,children:[(0,j.jsx)(`span`,{className:`badge-dot`}),` `,t(`60+ Export Countries`)]})]})]})]}),(0,j.jsx)(`section`,{className:`section category-overview-section`,children:(0,j.jsx)(`div`,{className:`cat-overview-grid container`,children:tr.map(e=>(0,j.jsxs)(A,{className:`cat-overview-card`,to:`/products/${e.id}`,children:[(0,j.jsxs)(`div`,{className:`cat-overview-image`,children:[(0,j.jsx)(`img`,{src:e.image,alt:e.title,loading:`lazy`}),(0,j.jsx)(`div`,{className:`cat-overview-overlay`})]}),(0,j.jsxs)(`div`,{className:`cat-overview-body`,children:[(0,j.jsx)(`span`,{className:`cat-overview-icon`,children:e.icon}),(0,j.jsx)(`h3`,{children:e.title}),(0,j.jsx)(`p`,{children:t(e.tagline)}),(0,j.jsxs)(`span`,{className:`cat-overview-link`,children:[t(`View Products`),` →`]})]})]},e.id))})}),(0,j.jsx)(Fr,{}),(0,j.jsx)(Ir,{}),(0,j.jsx)(Lr,{}),(0,j.jsx)(Gr,{}),(0,j.jsx)(Rr,{}),(0,j.jsx)(zr,{}),(0,j.jsx)(Br,{}),(0,j.jsx)(Vr,{}),(0,j.jsx)(Hr,{}),(0,j.jsx)(Ur,{}),(0,j.jsx)(Wr,{}),(0,j.jsx)(Kr,{})]})}function Fr(){let{t:e}=Zn();return(0,j.jsx)(`section`,{className:`section about-section`,id:`about`,children:(0,j.jsxs)(`div`,{className:`about-grid container`,children:[(0,j.jsxs)(`div`,{className:`about-text`,children:[(0,j.jsx)(`span`,{className:`section-label`,children:e(`About YOUNGSUN`)}),(0,j.jsx)(`h2`,{children:e(`Your Paper Supply Partner Since 2002`)}),(0,j.jsx)(`p`,{children:`Headquartered in Dongguan, China, Youngsun Group is a leading manufacturer and exporter with over 20 years of industry experience. We specialize in high-quality grey board, black cardboard, and specialty paper, offering extensive expertise in custom paper solutions tailored for luxury brands and high-end packaging needs.`}),(0,j.jsx)(`p`,{children:`Beyond our core manufacturing, we maintain close strategic partnerships with major domestic mills — including APP, Sun Paper, Nine Dragons, Liansheng, and Huatai — allowing us to provide a comprehensive, one-stop sourcing experience for products such as FBB GC1, Art Paper, and Woodfree Paper.`}),(0,j.jsx)(A,{to:`/about`,style:{color:`var(--gold)`,fontWeight:700,fontSize:14,marginTop:16,display:`inline-block`},children:`Read Full Story →`})]}),(0,j.jsxs)(`div`,{className:`about-stats`,children:[(0,j.jsxs)(`div`,{className:`stat-card`,style:{overflow:`hidden`,padding:0,aspectRatio:`1/1`},children:[(0,j.jsx)(`img`,{src:`images/factory/about-youngsun-factory-photo.jpg`,alt:`Factory`,style:{width:`100%`,height:`100%`,objectFit:`cover`}}),(0,j.jsx)(`span`,{style:{position:`absolute`,bottom:0,left:0,right:0,background:`linear-gradient(transparent, rgba(0,0,0,0.7))`,color:`#fff`,padding:`20px 12px 10px`,fontSize:12,fontWeight:700},children:`20,000m² Workshop`})]}),(0,j.jsxs)(`div`,{className:`stat-card`,style:{overflow:`hidden`,padding:0,aspectRatio:`1/1`},children:[(0,j.jsx)(`img`,{src:`images/factory/news-paperboard-supply.jpg`,alt:`Supply`,style:{width:`100%`,height:`100%`,objectFit:`cover`}}),(0,j.jsx)(`span`,{style:{position:`absolute`,bottom:0,left:0,right:0,background:`linear-gradient(transparent, rgba(0,0,0,0.7))`,color:`#fff`,padding:`20px 12px 10px`,fontSize:12,fontWeight:700},children:`Paperboard Supply`})]}),(0,j.jsxs)(`div`,{className:`stat-card`,style:{overflow:`hidden`,padding:0,aspectRatio:`1/1`},children:[(0,j.jsx)(`img`,{src:`images/factory/process-lamination-coating-line-01.jpg`,alt:`Lamination`,style:{width:`100%`,height:`100%`,objectFit:`cover`}}),(0,j.jsx)(`span`,{style:{position:`absolute`,bottom:0,left:0,right:0,background:`linear-gradient(transparent, rgba(0,0,0,0.7))`,color:`#fff`,padding:`20px 12px 10px`,fontSize:12,fontWeight:700},children:`Coating & Lamination`})]}),(0,j.jsxs)(`div`,{className:`stat-card`,style:{overflow:`hidden`,padding:0,aspectRatio:`1/1`},children:[(0,j.jsx)(`img`,{src:`images/factory/processing-slitting-cutting.jpg`,alt:`Converting`,style:{width:`100%`,height:`100%`,objectFit:`cover`}}),(0,j.jsx)(`span`,{style:{position:`absolute`,bottom:0,left:0,right:0,background:`linear-gradient(transparent, rgba(0,0,0,0.7))`,color:`#fff`,padding:`20px 12px 10px`,fontSize:12,fontWeight:700},children:`Slitting & Converting`})]})]})]})})}function Ir(){let{t:e,lang:t}=Zn(),n=t===`es`,r=Object.values(nr).slice(0,4);return(0,j.jsxs)(`section`,{className:`section products-section`,id:`products-preview`,children:[(0,j.jsxs)(`div`,{className:`section-header`,children:[(0,j.jsx)(`span`,{className:`section-label`,children:e(`What We Supply`)}),(0,j.jsx)(`h2`,{id:`products-heading`,children:e(`Paper & Board That Performs`)}),(0,j.jsx)(`p`,{children:e(`four_cat_desc`)})]}),(0,j.jsx)(`div`,{className:`subproduct-grid container`,children:r.map(e=>(0,j.jsxs)(A,{to:`/products/${e.id}`,className:`subproduct-card`,style:{color:`inherit`},children:[(0,j.jsx)(`div`,{className:`subproduct-image-wrap`,children:(0,j.jsx)(`img`,{src:e.image,alt:e.name,className:`subproduct-image`,loading:`lazy`})}),(0,j.jsxs)(`div`,{className:`subproduct-info`,children:[(0,j.jsx)(`h3`,{children:e.name}),(0,j.jsx)(`p`,{className:`subproduct-tagline`,children:n&&Or[e.id]?.tagline?Or[e.id].tagline:e.tagline}),(0,j.jsx)(`div`,{className:`subproduct-certs`,children:e.certifications.slice(0,2).map((e,t)=>(0,j.jsx)(`span`,{className:`subproduct-cert-tag`,children:e},t))}),(0,j.jsx)(`span`,{style:{color:`var(--gold)`,fontSize:12,fontWeight:700,marginTop:8,display:`inline-block`},children:`View Details →`})]})]},e.id))}),(0,j.jsx)(`div`,{style:{textAlign:`center`,marginTop:36},children:(0,j.jsxs)(A,{to:`/products`,className:`btn btn-primary`,children:[`View All Products `,(0,j.jsx)(`span`,{className:`btn-arrow`,children:`→`})]})})]})}function Lr(){let{t:e}=Zn();return(0,j.jsxs)(`section`,{style:{background:`url(/images/fancy-paper-banner.jpg) center/cover no-repeat`,padding:`80px 0`,position:`relative`},children:[(0,j.jsx)(`div`,{style:{position:`absolute`,inset:0,background:`linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.5) 100%)`}}),(0,j.jsxs)(`div`,{className:`container`,style:{position:`relative`,zIndex:1,textAlign:`center`},children:[(0,j.jsx)(`h2`,{style:{color:`#fff`,fontSize:`clamp(28px, 4vw, 40px)`,fontWeight:900,marginBottom:10,textShadow:`0 2px 12px rgba(0,0,0,0.5)`},children:`Fancy Paper`}),(0,j.jsx)(`p`,{style:{color:`rgba(255,255,255,0.85)`,fontSize:15,maxWidth:480,margin:`0 auto 24px`,lineHeight:1.6,textShadow:`0 1px 8px rgba(0,0,0,0.5)`},children:`Texture. Shimmer. Luxury. Papers that make people stop and touch.`}),(0,j.jsx)(A,{to:`/fancy-paper-collection`,className:`btn btn-primary`,style:{background:`var(--lime)`,color:`var(--forest)`,border:`none`,fontWeight:800},children:`Explore Collection →`})]})]})}function Rr(){let{lang:e}=Zn(),t=e===`es`,n={"packaging-printing":Er,"food-beverage":Dr,"luxury-cosmetics":Tr,"publishing-stationery":Sr,"electronics-industrial":wr,"construction-decoration":Cr};return(0,j.jsxs)(`section`,{className:`section industry-solutions-home`,children:[(0,j.jsxs)(`div`,{className:`container industry-home-heading`,children:[(0,j.jsxs)(`div`,{children:[(0,j.jsx)(`span`,{className:`section-label`,children:t?`Soluciones por Industria`:`Solutions by Industry`}),(0,j.jsx)(`h2`,{children:t?`Papel Diseñado para Su Sector`:`Paper Engineered for Your Industry`})]}),(0,j.jsx)(`p`,{children:t?`Cada industria exige algo diferente del papel. Explore nuestras soluciones adaptadas.`:`Every industry demands something different from paper. Explore our tailored solutions.`})]}),(0,j.jsx)(`div`,{className:`container industry-solution-grid`,children:kr.map((r,i)=>{let a=n[r.id]||Er;return(0,j.jsxs)(A,{to:`/industries/${r.id}`,className:`industry-solution-card industry-tone-${i+1}`,children:[(0,j.jsxs)(`div`,{className:`industry-solution-card-top`,children:[(0,j.jsx)(`span`,{className:`industry-solution-icon`,children:(0,j.jsx)(a,{size:24,strokeWidth:1.7,"aria-hidden":`true`})}),(0,j.jsx)(xr,{className:`industry-solution-arrow`,size:20,strokeWidth:1.8,"aria-hidden":`true`})]}),(0,j.jsx)(`h3`,{children:r.title[e]}),(0,j.jsx)(`p`,{children:r.tagline[e]}),(0,j.jsx)(`span`,{className:`industry-solution-link`,children:t?`Explorar soluciones`:`Explore solutions`})]},r.id)})}),(0,j.jsx)(`div`,{style:{textAlign:`center`,marginTop:28},children:(0,j.jsxs)(A,{to:`/industries`,className:`btn btn-outline`,children:[t?`Ver Todas las Industrias`:`View All Industries`,` →`]})})]})}function zr(){let{lang:e}=Zn(),t=e===`es`,n=[{name:`APP`,detail:t?`Grupo de pulpa y papel`:`Pulp & paper group`,logo:`/images/partners/app-official.png`},{name:`Sun Paper`,detail:t?`Papel y nuevos materiales`:`Paper & new materials`,logo:`/images/partners/sun-paper-official.png`,logoClass:`sun-paper-logo`},{name:`Nine Dragons Paper`,detail:t?`Papel para embalaje`:`Packaging paper`,logo:`/images/partners/nine-dragons-official.png`},{name:`Liansheng Paper`,detail:t?`Papel para embalaje`:`Packaging paper`,monogram:`LS`,tone:`blue`},{name:`Huatai Paper`,detail:t?`Papel cultural y especial`:`Culture & specialty paper`,monogram:`HT`,tone:`green`}];return(0,j.jsx)(`section`,{className:`section mill-network-section`,children:(0,j.jsxs)(`div`,{className:`container mill-network-inner`,children:[(0,j.jsxs)(`div`,{className:`mill-network-heading`,children:[(0,j.jsx)(`span`,{className:`section-label`,children:t?`Red de Abastecimiento`:`Mill & Supply Network`}),(0,j.jsx)(`h2`,{children:t?`Acceso a los principales fabricantes de papel de China`:`Connected to China's leading paper mills`}),(0,j.jsx)(`p`,{children:t?`Combinamos nuestra producción propia con una red de abastecimiento estable para ofrecer más grados, especificaciones y opciones de entrega.`:`We combine in-house manufacturing with an established sourcing network to offer broader grades, specifications, and delivery options.`})]}),(0,j.jsx)(`div`,{className:`mill-logo-marquee`,"aria-label":t?`Red de fábricas de papel`:`Paper mill network`,children:(0,j.jsx)(`div`,{className:`mill-logo-track`,children:[0,1].map(e=>(0,j.jsx)(`div`,{className:`mill-logo-group`,"aria-hidden":e===1,children:n.map(t=>(0,j.jsxs)(`div`,{className:`mill-logo-card`,children:[(0,j.jsx)(`div`,{className:`mill-logo-visual`,children:t.logo?(0,j.jsx)(`img`,{className:t.logoClass||``,src:t.logo,alt:e===0?`${t.name} logo`:``,loading:`lazy`}):(0,j.jsx)(`span`,{className:`mill-monogram ${t.tone||``}`,"aria-hidden":`true`,children:t.monogram})}),!t.logo&&(0,j.jsx)(`strong`,{children:t.name}),(0,j.jsx)(`span`,{className:`mill-logo-detail`,children:t.detail})]},`${e}-${t.name}`))},e))})}),(0,j.jsx)(`p`,{className:`mill-network-note`,children:t?`Trabajamos con una red de fábricas nacionales para ampliar la disponibilidad de grados. Los nombres se muestran como referencias de abastecimiento, no como clientes ni como avales de marca.`:`We work with established domestic mills to broaden grade availability. Mill names are shown as sourcing references, not as customer endorsements.`})]})})}function Br(){let{lang:e}=Zn(),t=e===`es`;return(0,j.jsxs)(`section`,{className:`section`,style:{background:`#fff`},children:[(0,j.jsxs)(`div`,{className:`section-header`,children:[(0,j.jsx)(`span`,{className:`section-label`,children:t?`Aplicaciones de Compra`:`Buyer Applications`}),(0,j.jsx)(`h2`,{children:t?`Empiece por el uso final`:`Start with the end use`}),(0,j.jsx)(`p`,{children:t?`Ejemplos prácticos para ayudarle a elegir un grado. No se presentan como resultados de clientes ni como garantías de rendimiento.`:`Practical examples to help you select a grade. These are not presented as customer results or performance guarantees.`})]}),(0,j.jsx)(`div`,{className:`container`,style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(300px, 1fr))`,gap:24,maxWidth:1100},children:[{label:t?`Embalaje Rígido`:`Rigid Packaging`,title:t?`Cartón gris y papel negro para cajas rígidas`:`Grey board and black paper for rigid boxes`,description:t?`Seleccione por espesor, rigidez, acabado y proceso de conversión. Se admiten hojas y paneles a medida.`:`Select by thickness, stiffness, surface finish, and converting process. Custom sheets and cut panels are available.`,href:`/products/grey-board`,facts:[t?`Muestras disponibles`:`Samples available`,t?`Corte a medida`:`Custom cutting`]},{label:t?`Impresión Comercial`:`Commercial Printing`,title:t?`Papel woodfree y cartulina estucada para impresión`:`Woodfree paper and coated board for print`,description:t?`Compare gramaje, blancura, suavidad y formato antes de realizar un pedido de producción.`:`Compare grammage, brightness, smoothness, and sheet or reel format before placing a production order.`,href:`/products/woodfree-paper`,facts:[t?`Hojas o bobinas`:`Sheets or reels`,t?`Ficha técnica`:`Technical data`]},{label:t?`Envases Alimentarios`:`Food Packaging`,title:t?`Papel para vasos y papel antigrasa`:`Cup paper and greaseproof paper`,description:t?`Confirme la estructura de barrera, el uso final y los requisitos de contacto alimentario para cada mercado.`:`Confirm barrier structure, end use, and food-contact requirements for the destination market.`,href:`/products/cup-paper`,facts:[t?`Revisión de uso final`:`End-use review`,t?`Documentos por grado`:`Grade documents`]}].map(e=>(0,j.jsxs)(A,{to:e.href,style:{background:`var(--paper)`,borderRadius:8,padding:`28px`,textDecoration:`none`,color:`inherit`,border:`1px solid var(--line)`,transition:`border-color 0.2s var(--ease-out)`},children:[(0,j.jsx)(`span`,{style:{color:`var(--gold)`,fontSize:11,fontWeight:700,textTransform:`uppercase`},children:e.label}),(0,j.jsx)(`h4`,{style:{fontSize:17,fontWeight:700,color:`var(--forest)`,margin:`12px 0 10px`,lineHeight:1.4},children:e.title}),(0,j.jsx)(`p`,{style:{fontSize:13,color:`var(--muted)`,lineHeight:1.7},children:e.description}),(0,j.jsx)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:8,marginTop:16,paddingTop:16,borderTop:`1px solid var(--line)`},children:e.facts.map(e=>(0,j.jsx)(`span`,{style:{color:`var(--forest)`,fontSize:11,fontWeight:600},children:e},e))})]},e.href))}),(0,j.jsx)(`div`,{style:{textAlign:`center`,marginTop:28},children:(0,j.jsxs)(A,{to:`/products`,className:`btn btn-outline`,children:[t?`Ver Todos los Productos`:`View All Products`,` →`]})})]})}function Vr(){let{lang:e}=Zn(),t=cr.slice(0,3);return(0,j.jsxs)(`section`,{className:`section`,style:{background:`var(--paper)`},children:[(0,j.jsxs)(`div`,{className:`section-header`,children:[(0,j.jsx)(`span`,{className:`section-label`,children:e===`es`?`Blog y Guías`:`Blog & Guides`}),(0,j.jsx)(`h2`,{children:e===`es`?`Últimos Artículos y Guías`:`Latest Articles & Guides`}),(0,j.jsx)(`p`,{children:e===`es`?`Conocimiento de la industria papelera, guías de compra y consejos de diseño.`:`Paper industry knowledge, sourcing guides, and design insights.`})]}),(0,j.jsx)(`div`,{className:`container`,style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(300px, 1fr))`,gap:24,maxWidth:1100},children:t.map(e=>(0,j.jsxs)(A,{to:`/blog/${e.id}`,style:{background:`#fff`,borderRadius:14,overflow:`hidden`,textDecoration:`none`,color:`inherit`,boxShadow:`var(--shadow-sm)`,transition:`transform 0.2s var(--ease-out)`},onMouseEnter:e=>{e.currentTarget.style.transform=`translateY(-3px)`},onMouseLeave:e=>{e.currentTarget.style.transform=``},children:[(0,j.jsx)(`div`,{style:{height:180,overflow:`hidden`,background:`var(--forest-light)`},children:(0,j.jsx)(`img`,{src:e.image,alt:``,style:{width:`100%`,height:`100%`,objectFit:`cover`},loading:`lazy`})}),(0,j.jsxs)(`div`,{style:{padding:`20px 24px`},children:[(0,j.jsxs)(`div`,{style:{display:`flex`,gap:8,marginBottom:10,alignItems:`center`},children:[(0,j.jsx)(`span`,{style:{background:`var(--gold-pale)`,color:`var(--gold)`,padding:`2px 10px`,borderRadius:20,fontSize:11,fontWeight:600},children:e.category}),(0,j.jsx)(`span`,{style:{fontSize:11,color:`var(--muted-light)`},children:e.date})]}),(0,j.jsx)(`h4`,{style:{fontSize:15,fontWeight:700,color:`var(--forest)`,lineHeight:1.4,marginBottom:8},children:e.title}),(0,j.jsxs)(`p`,{style:{fontSize:13,color:`var(--muted)`,lineHeight:1.6},children:[e.excerpt.slice(0,120),`…`]})]})]},e.id))}),(0,j.jsx)(`div`,{style:{textAlign:`center`,marginTop:28},children:(0,j.jsxs)(A,{to:`/blog`,className:`btn btn-outline`,children:[e===`es`?`Ver Todos los Artículos`:`View All Articles`,` →`]})})]})}function Hr(){let{t:e}=Zn(),t=[`whyus_1_desc`,`whyus_2_desc`,`whyus_3_desc`,`whyus_4_desc`,`whyus_5_desc`,`whyus_6_desc`];return(0,j.jsxs)(`section`,{className:`section why-us-section`,id:`why-us`,children:[(0,j.jsxs)(`div`,{className:`section-header`,children:[(0,j.jsx)(`span`,{className:`section-label`,children:e(`The YOUNGSUN Difference`)}),(0,j.jsx)(`h2`,{children:e(`Why Global Partners Choose Us`)}),(0,j.jsx)(`p`,{children:e(`whyus_desc`)})]}),(0,j.jsx)(`div`,{className:`features-grid container`,children:rr.map((n,r)=>(0,j.jsxs)(`div`,{className:`feature-card`,children:[(0,j.jsx)(`span`,{className:`feature-icon`,children:n.icon}),(0,j.jsx)(`h3`,{children:e(n.title)}),(0,j.jsx)(`p`,{children:e(t[r])})]},n.title))})]})}function Ur(){let{lang:e}=Zn(),t=e===`es`;return(0,j.jsxs)(`section`,{className:`section testimonials-section`,id:`testimonials`,children:[(0,j.jsxs)(`div`,{className:`section-header`,children:[(0,j.jsx)(`span`,{className:`section-label`,children:t?`Confianza Verificable`:`Verifiable Confidence`}),(0,j.jsx)(`h2`,{children:t?`Compruebe antes de comprar`:`Verify before you buy`}),(0,j.jsx)(`p`,{children:t?`La confianza debe basarse en muestras, documentos y controles claros, no en logotipos o testimonios anónimos.`:`Confidence should come from samples, documents, and clear checks, not logos or anonymous testimonials.`})]}),(0,j.jsx)(`div`,{className:`testimonials-grid container`,children:[{number:`01`,title:t?`Aprobación de muestras`:`Sample approval`,description:t?`Confirme color, espesor, superficie y rendimiento de conversión antes de la producción en masa.`:`Confirm color, thickness, surface, and converting performance before bulk production.`},{number:`02`,title:t?`Documentos por producto`:`Product-specific documents`,description:t?`Solicite fichas técnicas, certificados y documentos de prueba aplicables al grado cotizado.`:`Request technical data, certificates, and test documents that apply to the quoted grade.`},{number:`03`,title:t?`Control antes del envío`:`Pre-shipment control`,description:t?`El gramaje, tamaño, embalaje y marcas de envío se confirman contra su pedido antes de la expedición.`:`Grammage, size, packing, and shipping marks are checked against your order before dispatch.`}].map(e=>(0,j.jsxs)(`div`,{className:`testimonial-card`,children:[(0,j.jsx)(`span`,{style:{color:`var(--lime)`,fontSize:13,fontWeight:800},children:e.number}),(0,j.jsx)(`h3`,{style:{color:`#fff`,fontSize:18,margin:`14px 0 10px`},children:e.title}),(0,j.jsx)(`p`,{style:{color:`rgba(255,255,255,0.68)`,fontSize:14,lineHeight:1.7},children:e.description})]},e.number))}),(0,j.jsx)(`div`,{style:{textAlign:`center`,marginTop:30},children:(0,j.jsxs)(A,{to:`/quality`,className:`btn btn-outline`,children:[t?`Ver Control de Calidad`:`View Quality Control`,` →`]})})]})}function Wr(){let{t:e}=Zn(),{form:t,submitted:n,sending:r,error:i,honeypotRef:a,submitTimeRef:o,handleChange:s,handleSubmit:c}=Mr({name:``,email:``,company:``,phone:``,product:``,gsm:``,size:``,quantity:``,destination:``,message:``});return(0,j.jsxs)(`section`,{className:`section contact-section`,id:`contact`,children:[(0,j.jsxs)(`div`,{className:`section-header`,children:[(0,j.jsx)(`span`,{className:`section-label`,children:e(`Get In Touch`)}),(0,j.jsx)(`h2`,{children:e(`Let's Talk Paper`)}),(0,j.jsx)(`p`,{children:e(`contact_subtitle`)})]}),(0,j.jsxs)(`div`,{className:`contact-grid container`,children:[(0,j.jsx)(`div`,{className:`contact-info`,children:(0,j.jsxs)(`div`,{className:`contact-methods`,children:[(0,j.jsxs)(`a`,{href:`mailto:${or.email}`,className:`contact-method`,children:[(0,j.jsx)(`span`,{className:`method-icon`,children:`✉️`}),(0,j.jsxs)(`div`,{children:[(0,j.jsx)(`span`,{className:`method-label`,children:`Email`}),(0,j.jsx)(`span`,{className:`method-value`,children:or.email})]})]}),(0,j.jsxs)(`a`,{href:`tel:${or.phone}`,className:`contact-method`,children:[(0,j.jsx)(`span`,{className:`method-icon`,children:`📞`}),(0,j.jsxs)(`div`,{children:[(0,j.jsx)(`span`,{className:`method-label`,children:`Phone`}),(0,j.jsx)(`span`,{className:`method-value`,children:or.phone})]})]}),(0,j.jsxs)(`a`,{href:`https://wa.me/${or.whatsapp.replace(/\D/g,``)}`,className:`contact-method`,target:`_blank`,rel:`noopener noreferrer`,children:[(0,j.jsx)(`span`,{className:`method-icon`,children:`💬`}),(0,j.jsxs)(`div`,{children:[(0,j.jsx)(`span`,{className:`method-label`,children:`WhatsApp`}),(0,j.jsx)(`span`,{className:`method-value`,children:or.whatsapp})]})]}),(0,j.jsxs)(`div`,{className:`contact-method`,children:[(0,j.jsx)(`span`,{className:`method-icon`,children:`💬`}),(0,j.jsxs)(`div`,{children:[(0,j.jsx)(`span`,{className:`method-label`,children:`WeChat`}),(0,j.jsx)(`span`,{className:`method-value`,children:or.wechat})]})]})]})}),(0,j.jsxs)(`form`,{className:`contact-form`,onSubmit:c,onFocus:o,children:[(0,j.jsx)(`h3`,{children:e(`Send Us a Message`)}),n&&(0,j.jsxs)(`div`,{style:{background:`#F0FDF4`,border:`1px solid #86EFAC`,color:`#166534`,padding:`20px`,borderRadius:12,marginBottom:16,textAlign:`center`},children:[(0,j.jsx)(`div`,{style:{fontSize:36,marginBottom:4},children:`✅`}),(0,j.jsx)(`div`,{style:{fontWeight:700},children:`Message Sent! We'll reply within 24h.`})]}),i&&(0,j.jsxs)(`div`,{style:{background:`#FEF2F2`,color:`#DC2626`,padding:`12px 16px`,borderRadius:8,marginBottom:16,fontSize:13},children:[`⚠️ `,i]}),(0,j.jsx)(`div`,{style:{position:`absolute`,left:`-9999px`,opacity:0},"aria-hidden":`true`,children:(0,j.jsx)(`input`,{ref:a,type:`text`,name:`hp_field`,tabIndex:-1,autoComplete:`off`})}),(0,j.jsxs)(`div`,{className:`form-group`,children:[(0,j.jsx)(`label`,{htmlFor:`hname`,children:e(`Your Name *`)}),(0,j.jsx)(`input`,{type:`text`,id:`hname`,name:`name`,value:t.name,onChange:s,required:!0})]}),(0,j.jsxs)(`div`,{className:`form-group`,children:[(0,j.jsx)(`label`,{children:`Company`}),(0,j.jsx)(`input`,{type:`text`,name:`company`,value:t.company,onChange:s})]}),(0,j.jsxs)(`div`,{className:`form-group`,children:[(0,j.jsx)(`label`,{htmlFor:`hemail`,children:e(`Email Address *`)}),(0,j.jsx)(`input`,{type:`email`,id:`hemail`,name:`email`,value:t.email,onChange:s,required:!0})]}),(0,j.jsxs)(`div`,{className:`form-group`,children:[(0,j.jsx)(`label`,{children:`Phone / WhatsApp`}),(0,j.jsx)(`input`,{type:`text`,name:`phone`,value:t.phone,onChange:s})]}),(0,j.jsxs)(`div`,{className:`form-group`,children:[(0,j.jsx)(`label`,{htmlFor:`hproduct`,children:e(`Product Interest`)}),(0,j.jsxs)(`select`,{id:`hproduct`,name:`product`,value:t.product,onChange:s,children:[(0,j.jsx)(`option`,{value:``,children:e(`Select a product category`)}),tr.map(e=>(0,j.jsx)(`option`,{value:e.id,children:e.title},e.id)),(0,j.jsx)(`option`,{value:`other`,children:e(`Other / Not Sure`)})]})]}),(0,j.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`1fr 1fr`,gap:12},children:[(0,j.jsxs)(`div`,{className:`form-group`,children:[(0,j.jsx)(`label`,{children:`GSM / Thickness`}),(0,j.jsx)(`input`,{type:`text`,name:`gsm`,value:t.gsm,onChange:s,placeholder:`e.g. 200-400 gsm`})]}),(0,j.jsxs)(`div`,{className:`form-group`,children:[(0,j.jsx)(`label`,{children:`Size`}),(0,j.jsx)(`input`,{type:`text`,name:`size`,value:t.size,onChange:s,placeholder:`e.g. A4, custom`})]})]}),(0,j.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`1fr 1fr`,gap:12},children:[(0,j.jsxs)(`div`,{className:`form-group`,children:[(0,j.jsx)(`label`,{children:`Quantity`}),(0,j.jsx)(`input`,{type:`text`,name:`quantity`,value:t.quantity,onChange:s,placeholder:`e.g. 1x20ft container`})]}),(0,j.jsxs)(`div`,{className:`form-group`,children:[(0,j.jsx)(`label`,{children:`Destination Country / Port`}),(0,j.jsx)(`input`,{type:`text`,name:`destination`,value:t.destination,onChange:s,placeholder:`e.g. Hamburg, Germany`})]})]}),(0,j.jsxs)(`div`,{className:`form-group`,children:[(0,j.jsx)(`label`,{htmlFor:`hmessage`,children:e(`Your Message *`)}),(0,j.jsx)(`textarea`,{id:`hmessage`,name:`message`,value:t.message,onChange:s,required:!0})]}),(0,j.jsx)(`button`,{type:`submit`,className:`form-submit`,disabled:r,children:r?`⏳ Sending...`:e(`Send Inquiry`)})]})]})]})}function Gr(){let{lang:e}=Zn(),t=e===`es`,[n,r]=(0,p.useState)(null),i=[`expo-20260730000425.jpg`,`expo-20260730000434.jpg`,`expo-20260730000456.jpg`,`expo-20260730000458.jpg`].map(e=>({src:`/images/exhibitions/${e}`,thumb:`/images/exhibitions/${e}`}));return(0,j.jsxs)(`section`,{className:`section`,style:{background:`#fff`},children:[(0,j.jsxs)(`div`,{className:`section-header`,children:[(0,j.jsx)(`span`,{className:`section-label`,children:t?`Ferias y Exposiciones`:`Exhibitions & Trade Shows`}),(0,j.jsx)(`h2`,{children:t?`Conózcanos en Persona`:`Meet Us in Person`})]}),(0,j.jsx)(`div`,{className:`container`,style:{maxWidth:900},children:(0,j.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(4, 1fr)`,gap:12},children:i.map((e,t)=>(0,j.jsx)(`div`,{onClick:()=>r(t),style:{aspectRatio:`4/3`,overflow:`hidden`,borderRadius:10,cursor:`pointer`},children:(0,j.jsx)(`img`,{src:e.thumb,alt:`Exhibition ${t+1}`,loading:`lazy`,style:{width:`100%`,height:`100%`,objectFit:`cover`}})},t))})}),n!==null&&(0,j.jsxs)(`div`,{onClick:()=>r(null),style:{position:`fixed`,inset:0,zIndex:1e4,background:`rgba(0,0,0,0.92)`,display:`flex`,alignItems:`center`,justifyContent:`center`},children:[(0,j.jsx)(`button`,{onClick:e=>{e.stopPropagation(),r(null)},style:{position:`absolute`,top:20,right:20,background:`rgba(255,255,255,0.15)`,border:`none`,color:`#fff`,width:44,height:44,borderRadius:`50%`,fontSize:22,cursor:`pointer`},children:`✕`}),(0,j.jsx)(`img`,{src:i[n].src,alt:``,style:{maxWidth:`90vw`,maxHeight:`85vh`,objectFit:`contain`,borderRadius:8},onClick:e=>e.stopPropagation()}),(0,j.jsxs)(`span`,{style:{position:`absolute`,bottom:24,color:`rgba(255,255,255,0.5)`,fontSize:13},children:[n+1,` / `,i.length]})]})]})}function Kr(){let{t:e}=Zn(),t=[`faq_q1`,`faq_q2`,`faq_q3`,`faq_q4`,`faq_q5`],n=[`faq_a1`,`faq_a2`,`faq_a3`,`faq_a4`,`faq_a5`];return(0,j.jsxs)(`section`,{className:`section faq-section`,id:`faq`,children:[(0,j.jsxs)(`div`,{className:`section-header`,children:[(0,j.jsx)(`span`,{className:`section-label`,children:e(`Frequently Asked Questions`)}),(0,j.jsx)(`h2`,{children:e(`Questions About Our Paper Products and Services`)})]}),(0,j.jsx)(`div`,{className:`faq-grid container`,children:sr.slice(0,5).map((r,i)=>(0,j.jsxs)(`details`,{className:`faq-item`,children:[(0,j.jsx)(`summary`,{className:`faq-question`,children:e(t[i])}),(0,j.jsx)(`div`,{className:`faq-answer`,children:(0,j.jsx)(`p`,{children:e(n[i])})})]},i))}),(0,j.jsx)(`div`,{style:{textAlign:`center`,marginTop:28},children:(0,j.jsx)(A,{to:`/faq`,className:`btn btn-outline`,children:`View All FAQs →`})})]})}var qr=(0,p.lazy)(()=>v(()=>import(`./Products-Dziclxi9.js`),__vite__mapDeps([0,1]),import.meta.url)),Jr=(0,p.lazy)(()=>v(()=>import(`./ProductDetail-Zp3qZwOo.js`),__vite__mapDeps([2,1]),import.meta.url)),Yr=(0,p.lazy)(()=>v(()=>import(`./About-gF6j7xxF.js`),__vite__mapDeps([3,1]),import.meta.url)),Xr=(0,p.lazy)(()=>v(()=>import(`./Contact-DAhpdWiy.js`),__vite__mapDeps([4,1]),import.meta.url)),Zr=(0,p.lazy)(()=>v(()=>import(`./Blog-S_QD1nhZ.js`),__vite__mapDeps([5,1]),import.meta.url)),Qr=(0,p.lazy)(()=>v(()=>import(`./BlogPost-CF-MwMBH.js`),__vite__mapDeps([6,1]),import.meta.url)),$r=(0,p.lazy)(()=>v(()=>import(`./FancyPaperGallery-CvjxsuCg.js`),__vite__mapDeps([7,1]),import.meta.url)),ei=(0,p.lazy)(()=>v(()=>import(`./Industries-Cq4IzVMg.js`),__vite__mapDeps([8,1,9,10]),import.meta.url)),ti=(0,p.lazy)(()=>v(()=>import(`./IndustryDetail-CV8I-5ru.js`),__vite__mapDeps([11,1]),import.meta.url)),ni=(0,p.lazy)(()=>v(()=>import(`./Materials-D3v77NDG.js`),__vite__mapDeps([12,1,9,13,14]),import.meta.url)),ri=(0,p.lazy)(()=>v(()=>import(`./Processing-injXHGF2.js`),__vite__mapDeps([15,1]),import.meta.url)),ii=(0,p.lazy)(()=>v(()=>import(`./Quality-eSAlPaXG.js`),__vite__mapDeps([16,1]),import.meta.url)),ai=(0,p.lazy)(()=>v(()=>import(`./FAQ-dOvLMHTl.js`),__vite__mapDeps([17,1]),import.meta.url)),oi=(0,p.lazy)(()=>v(()=>import(`./HowToOrder-DL01b_EM.js`),__vite__mapDeps([18,1]),import.meta.url)),si=(0,p.lazy)(()=>v(()=>import(`./Resources-CKIW1mj_.js`),__vite__mapDeps([19,1]),import.meta.url)),ci=(0,p.lazy)(()=>v(()=>import(`./PulpMaterials-BevYc4VH.js`),__vite__mapDeps([20,1,13]),import.meta.url)),li=(0,p.lazy)(()=>v(()=>import(`./PulpArticle-BM2-HU9R.js`),__vite__mapDeps([21,1,13,14]),import.meta.url));function ui(){return(0,j.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`center`,minHeight:`60vh`,flexDirection:`column`,gap:16,paddingTop:100},children:[(0,j.jsx)(`div`,{style:{width:36,height:36,border:`3px solid var(--line)`,borderTopColor:`var(--gold)`,borderRadius:`50%`,animation:`spin 0.7s linear infinite`}}),(0,j.jsx)(`span`,{style:{fontSize:13,color:`var(--muted)`},children:`Loading…`}),(0,j.jsx)(`style`,{children:`@keyframes spin { to { transform: rotate(360deg); } }`})]})}function di(){let[e,t]=(0,p.useState)(!1),[n,r]=(0,p.useState)(null);(0,p.useEffect)(()=>{if(window.matchMedia(`(display-mode: standalone)`).matches)return;let e=e=>{e.preventDefault(),r(e),setTimeout(()=>t(!0),2500)};return window.addEventListener(`beforeinstallprompt`,e),window.addEventListener(`appinstalled`,()=>{t(!1),r(null),console.log(`[PWA] App installed successfully!`)}),()=>window.removeEventListener(`beforeinstallprompt`,e)},[]);let i=(0,p.useCallback)(async()=>{if(!n)return;n.prompt();let{outcome:e}=await n.userChoice;console.log(`[PWA] Install prompt outcome: ${e}`),r(null),t(!1)},[n]);return e?(0,j.jsxs)(`div`,{className:`pwa-install-toast`,style:{position:`fixed`,bottom:20,left:`50%`,transform:`translateX(-50%)`,zIndex:9999,background:`var(--forest, #0f2b1a)`,color:`#fff`,padding:`14px 22px`,borderRadius:14,display:`flex`,alignItems:`center`,gap:14,boxShadow:`0 8px 32px rgba(15,43,26,0.35)`,maxWidth:`calc(100vw - 32px)`,animation:`pwaSlideUp 0.4s cubic-bezier(0.34,1.56,0.64,1)`},children:[(0,j.jsx)(`img`,{src:`/apple-touch-icon.png`,alt:``,width:`36`,height:`36`,style:{borderRadius:8,flexShrink:0}}),(0,j.jsx)(`span`,{style:{fontSize:14,fontWeight:600,whiteSpace:`nowrap`},children:`Install YOUNGSUN PAPER App`}),(0,j.jsx)(`button`,{onClick:i,style:{background:`var(--gold, #c8923f)`,border:`none`,color:`#fff`,padding:`8px 16px`,borderRadius:8,fontWeight:700,fontSize:13,cursor:`pointer`,whiteSpace:`nowrap`,flexShrink:0},children:`Install`}),(0,j.jsx)(`button`,{onClick:()=>{t(!1)},style:{background:`transparent`,border:`none`,color:`rgba(255,255,255,0.5)`,padding:`4px`,cursor:`pointer`,fontSize:16,lineHeight:1},"aria-label":`Dismiss`,children:`✕`}),(0,j.jsx)(`style`,{children:`
        @keyframes pwaSlideUp {
          from { opacity: 0; transform: translateX(-50%) translateY(20px); }
          to   { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
      `})]}):null}function fi(){let{pathname:e}=ft();return(0,p.useEffect)(()=>{window.scrollTo(0,0)},[e]),null}function pi(){let{lang:e,toggleLang:t,langLabel:n,t:r}=Zn(),[i,a]=(0,p.useState)(!1),[o,s]=(0,p.useState)(!1);(0,p.useEffect)(()=>{let e=()=>a(window.scrollY>60);return window.addEventListener(`scroll`,e,{passive:!0}),()=>window.removeEventListener(`scroll`,e)},[]),(0,p.useEffect)(()=>(document.body.style.overflow=o?`hidden`:``,()=>{document.body.style.overflow=``}),[o]);let c=[{label:`Home`,href:`/`},{label:`Products`,href:`/products`},{label:`Industries`,href:`/industries`},{label:`Materials`,href:`/materials`},{label:`Processing`,href:`/processing`},{label:`Blog`,href:`/blog`},{label:`About`,href:`/about`},{label:`Contact`,href:`/contact`}];return(0,j.jsxs)(`header`,{className:`site-header${i?` scrolled`:``}`,children:[(0,j.jsx)(A,{className:`site-logo`,to:`/`,children:(0,j.jsx)(`img`,{className:`logo-image`,src:`/images/logo.png`,alt:`YOUNGSUN PAPER`,width:`160`,height:`40`})}),(0,j.jsx)(`nav`,{className:`desktop-nav`,children:c.map(e=>(0,j.jsx)(Nn,{to:e.href,end:e.href===`/`,children:r(e.label)},e.label))}),(0,j.jsx)(ur,{}),(0,j.jsxs)(`div`,{className:`header-actions`,children:[(0,j.jsx)(`button`,{className:`lang-switch`,onClick:t,children:n[e]}),(0,j.jsxs)(`button`,{className:`menu-trigger${o?` open`:``}`,onClick:()=>s(e=>!e),"aria-label":`Menu`,children:[(0,j.jsx)(`span`,{}),(0,j.jsx)(`span`,{}),(0,j.jsx)(`span`,{})]})]}),(0,j.jsx)(`nav`,{className:`mobile-menu${o?` open`:``}`,children:c.map(e=>(0,j.jsx)(A,{to:e.href,onClick:()=>s(!1),children:r(e.label)},e.label))})]})}function mi(){let{t:e}=Zn(),[t,n]=(0,p.useState)(``),[r,i]=(0,p.useState)(!1);return(0,j.jsxs)(`footer`,{className:`site-footer`,children:[(0,j.jsxs)(`div`,{className:`footer-grid`,children:[(0,j.jsxs)(`div`,{className:`footer-brand`,children:[(0,j.jsxs)(`div`,{className:`footer-logo`,children:[`YOUNGSUN`,(0,j.jsx)(`span`,{children:`PAPER`})]}),(0,j.jsx)(`p`,{children:`Premium paper and board supply since 2002.`}),(0,j.jsxs)(`div`,{style:{marginTop:18},children:[(0,j.jsxs)(`h4`,{style:{color:`#fff`,fontSize:13,marginBottom:6,fontWeight:600},children:[`📬 `,e(`Subscribe`)||`Subscribe`]}),(0,j.jsx)(`p`,{style:{color:`rgba(255,255,255,0.5)`,fontSize:11,marginBottom:10,lineHeight:1.5},children:`Get product updates, paper guides & sourcing tips.`}),(0,j.jsxs)(`form`,{onSubmit:e=>{e.preventDefault(),t&&(i(!0),n(``),setTimeout(()=>i(!1),5e3))},style:{display:`flex`,gap:6},children:[(0,j.jsx)(`input`,{type:`email`,value:t,onChange:e=>n(e.target.value),placeholder:`your@email.com`,required:!0,style:{flex:1,padding:`9px 12px`,borderRadius:6,border:`1px solid rgba(255,255,255,0.2)`,background:`rgba(255,255,255,0.08)`,color:`#fff`,fontSize:12,outline:`none`,minWidth:130}}),(0,j.jsx)(`button`,{type:`submit`,style:{padding:`9px 14px`,borderRadius:6,border:`none`,background:r?`var(--leaf)`:`var(--gold)`,color:`#fff`,fontWeight:700,fontSize:12,cursor:`pointer`,whiteSpace:`nowrap`},children:r?`✓ Done!`:`Subscribe`})]})]})]}),(0,j.jsxs)(`div`,{className:`footer-column`,children:[(0,j.jsx)(`h4`,{children:e(`Product Categories`)}),(0,j.jsx)(A,{to:`/products`,children:e(`Package Board`)}),(0,j.jsx)(A,{to:`/products`,children:e(`Culture Paper`)}),(0,j.jsx)(A,{to:`/products`,children:e(`Fancy Paper`)}),(0,j.jsx)(A,{to:`/products`,children:e(`Food Packaging Paper`)}),(0,j.jsxs)(A,{to:`/materials`,children:[`📋 `,e(`Materials Library`)||`Materials Library`]})]}),(0,j.jsxs)(`div`,{className:`footer-column`,children:[(0,j.jsx)(`h4`,{children:e(`Company`)}),(0,j.jsx)(A,{to:`/about`,children:e(`About Us`)}),(0,j.jsx)(A,{to:`/industries`,children:e(`Industries`)||`Industries`}),(0,j.jsx)(A,{to:`/quality`,children:e(`Quality Assurance`)||`Quality Assurance`}),(0,j.jsx)(A,{to:`/contact`,children:e(`Contact`)})]}),(0,j.jsxs)(`div`,{className:`footer-column`,children:[(0,j.jsx)(`h4`,{children:e(`Resources`)}),(0,j.jsx)(A,{to:`/products`,children:e(`Product Catalog`)}),(0,j.jsx)(A,{to:`/materials`,children:e(`Paper Grade Guide`)||`Paper Grade Guide`}),(0,j.jsxs)(A,{to:`/resources`,children:[`📥 `,e(`Downloads`)||`Downloads`]}),(0,j.jsx)(A,{to:`/processing`,children:e(`Processing Services`)||`Processing`}),(0,j.jsx)(A,{to:`/how-to-order`,children:e(`How to Order`)||`How to Order`}),(0,j.jsx)(A,{to:`/faq`,children:`FAQ`}),(0,j.jsx)(A,{to:`/blog`,children:`Blog`}),(0,j.jsx)(A,{to:`/contact`,children:e(`Request a Quote`)})]})]}),(0,j.jsx)(`div`,{className:`footer-bottom`,style:{flexDirection:`column`,gap:12},children:(0,j.jsxs)(`div`,{style:{display:`flex`,gap:18,alignItems:`center`,flexWrap:`wrap`,justifyContent:`center`},children:[(0,j.jsxs)(`p`,{children:[`© `,new Date().getFullYear(),` YOUNGSUN PAPER.`]}),(0,j.jsx)(`span`,{style:{color:`rgba(255,255,255,0.2)`},children:`|`}),(0,j.jsx)(`a`,{href:`https://analytics.google.com`,target:`_blank`,rel:`noopener noreferrer`,style:{color:`rgba(255,255,255,0.4)`,fontSize:11},children:`📊 Analytics`}),(0,j.jsx)(`span`,{style:{color:`rgba(255,255,255,0.2)`},children:`|`}),(0,j.jsxs)(`div`,{className:`footer-social`,children:[(0,j.jsx)(`a`,{href:`https://www.linkedin.com/company/133053995/`,target:`_blank`,rel:`noopener noreferrer`,children:`LinkedIn`}),(0,j.jsx)(`a`,{href:`mailto:${or.email}`,children:`Email`}),(0,j.jsx)(`a`,{href:`https://wa.me/${or.whatsapp.replace(/\D/g,``)}`,target:`_blank`,rel:`noopener noreferrer`,children:`WhatsApp`})]})]})})]})}function hi(){let[e,t]=(0,p.useState)(!1);return(0,p.useEffect)(()=>{let e=()=>t(window.scrollY>600);return window.addEventListener(`scroll`,e,{passive:!0}),()=>window.removeEventListener(`scroll`,e)},[]),(0,j.jsxs)(`div`,{className:`floating-actions`,style:{position:`fixed`,bottom:24,right:24,zIndex:999,display:`flex`,flexDirection:`column`,alignItems:`flex-end`,gap:12},children:[e&&(0,j.jsx)(`button`,{onClick:()=>window.scrollTo({top:0,behavior:`smooth`}),style:{width:48,height:48,borderRadius:`50%`,background:`#fff`,border:`1px solid var(--line-strong)`,boxShadow:`var(--shadow-md)`,cursor:`pointer`,fontSize:18,display:`flex`,alignItems:`center`,justifyContent:`center`},"aria-label":`Back to top`,children:`↑`}),(0,j.jsx)(`a`,{href:`https://wa.me/${or.whatsapp.replace(/\D/g,``)}`,target:`_blank`,rel:`noopener noreferrer`,style:{width:56,height:56,borderRadius:`50%`,background:`#25D366`,boxShadow:`0 6px 24px rgba(37,211,102,0.35)`,cursor:`pointer`,fontSize:26,display:`flex`,alignItems:`center`,justifyContent:`center`,textDecoration:`none`},"aria-label":`Chat on WhatsApp`,children:`💬`})]})}function gi(){let[e,t]=(0,p.useState)(!1);return(0,p.useEffect)(()=>{let e=()=>t(!0);return window.addEventListener(`pwa-update-available`,e),()=>window.removeEventListener(`pwa-update-available`,e)},[]),(0,j.jsx)(i,{children:(0,j.jsx)(Qn,{children:(0,j.jsxs)(jn,{children:[(0,j.jsx)(fi,{}),(0,j.jsx)(pi,{}),(0,j.jsx)(`main`,{id:`main-content`,children:(0,j.jsx)(p.Suspense,{fallback:(0,j.jsx)(ui,{}),children:(0,j.jsxs)(Ut,{children:[(0,j.jsx)(k,{path:`/`,element:(0,j.jsx)(Pr,{})}),(0,j.jsx)(k,{path:`/products`,element:(0,j.jsx)(qr,{})}),(0,j.jsx)(k,{path:`/products/:id`,element:(0,j.jsx)(Jr,{})}),(0,j.jsx)(k,{path:`/about`,element:(0,j.jsx)(Yr,{})}),(0,j.jsx)(k,{path:`/contact`,element:(0,j.jsx)(Xr,{})}),(0,j.jsx)(k,{path:`/blog`,element:(0,j.jsx)(Zr,{})}),(0,j.jsx)(k,{path:`/blog/:id`,element:(0,j.jsx)(Qr,{})}),(0,j.jsx)(k,{path:`/fancy-paper-collection`,element:(0,j.jsx)($r,{})}),(0,j.jsx)(k,{path:`/industries`,element:(0,j.jsx)(ei,{})}),(0,j.jsx)(k,{path:`/industries/:id`,element:(0,j.jsx)(ti,{})}),(0,j.jsx)(k,{path:`/materials`,element:(0,j.jsx)(ni,{})}),(0,j.jsx)(k,{path:`/materials/pulp`,element:(0,j.jsx)(ci,{})}),(0,j.jsx)(k,{path:`/materials/:id`,element:(0,j.jsx)(li,{})}),(0,j.jsx)(k,{path:`/case-studies`,element:(0,j.jsx)(Vt,{to:`/quality`,replace:!0})}),(0,j.jsx)(k,{path:`/case-studies/:id`,element:(0,j.jsx)(Vt,{to:`/quality`,replace:!0})}),(0,j.jsx)(k,{path:`/processing`,element:(0,j.jsx)(ri,{})}),(0,j.jsx)(k,{path:`/quality`,element:(0,j.jsx)(ii,{})}),(0,j.jsx)(k,{path:`/faq`,element:(0,j.jsx)(ai,{})}),(0,j.jsx)(k,{path:`/how-to-order`,element:(0,j.jsx)(oi,{})}),(0,j.jsx)(k,{path:`/resources`,element:(0,j.jsx)(si,{})}),(0,j.jsx)(k,{path:`/testimonials`,element:(0,j.jsx)(Vt,{to:`/quality`,replace:!0})})]})})}),(0,j.jsx)(mi,{}),(0,j.jsx)(hi,{}),(0,j.jsx)(di,{}),e&&(0,j.jsxs)(`div`,{style:{position:`fixed`,top:16,left:`50%`,transform:`translateX(-50%)`,zIndex:9999,background:`var(--forest, #0f2b1a)`,color:`#fff`,padding:`12px 22px`,borderRadius:12,display:`flex`,alignItems:`center`,gap:14,boxShadow:`0 6px 24px rgba(15,43,26,0.3)`,fontSize:14,fontWeight:600},children:[`🔄 New version available`,(0,j.jsx)(`button`,{onClick:()=>window.location.reload(),style:{background:`var(--gold, #c8923f)`,border:`none`,color:`#fff`,padding:`6px 14px`,borderRadius:6,fontWeight:700,fontSize:13,cursor:`pointer`},children:`Update`})]})]})})})}(0,m.createRoot)(document.getElementById(`root`)).render((0,j.jsx)(p.StrictMode,{children:(0,j.jsx)(gi,{})})),`serviceWorker`in navigator&&window.addEventListener(`load`,()=>{navigator.serviceWorker.register(`/sw.js`,{scope:`/`}).then(e=>{console.log(`[PWA] Service Worker registered:`,e.scope),e.addEventListener(`updatefound`,()=>{let t=e.installing;t&&t.addEventListener(`statechange`,()=>{t.state===`installed`&&navigator.serviceWorker.controller&&(console.log(`[PWA] New version available. Refresh to update.`),window.dispatchEvent(new CustomEvent(`pwa-update-available`,{detail:{registration:e}})))})})}).catch(e=>{console.warn(`[PWA] Service Worker registration failed:`,e.message)});let e=!1;navigator.serviceWorker.addEventListener(`controllerchange`,()=>{e||(e=!0,console.log(`[PWA] Controller changed — reloading for update.`),window.location.reload())})});export{_t as C,ht as S,rr as _,Tr as a,Vt as b,lr as c,sr as d,ar as f,ir as g,nr as h,Er as i,cr as l,er as m,kr as n,Sr as o,tr as p,Or as r,br as s,Mr as t,or as u,Zn as v,ft as x,A as y};