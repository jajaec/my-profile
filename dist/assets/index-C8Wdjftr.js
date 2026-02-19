(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))o(u);new MutationObserver(u=>{for(const h of u)if(h.type==="childList")for(const f of h.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&o(f)}).observe(document,{childList:!0,subtree:!0});function l(u){const h={};return u.integrity&&(h.integrity=u.integrity),u.referrerPolicy&&(h.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?h.credentials="include":u.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function o(u){if(u.ep)return;u.ep=!0;const h=l(u);fetch(u.href,h)}})();var Ic={exports:{}},gs={};var Om;function $x(){if(Om)return gs;Om=1;var a=Symbol.for("react.transitional.element"),s=Symbol.for("react.fragment");function l(o,u,h){var f=null;if(h!==void 0&&(f=""+h),u.key!==void 0&&(f=""+u.key),"key"in u){h={};for(var m in u)m!=="key"&&(h[m]=u[m])}else h=u;return u=h.ref,{$$typeof:a,type:o,key:f,ref:u!==void 0?u:null,props:h}}return gs.Fragment=s,gs.jsx=l,gs.jsxs=l,gs}var Vm;function Fx(){return Vm||(Vm=1,Ic.exports=$x()),Ic.exports}var d=Fx(),tu={exports:{}},ct={};var Um;function Px(){if(Um)return ct;Um=1;var a=Symbol.for("react.transitional.element"),s=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),h=Symbol.for("react.consumer"),f=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),b=Symbol.for("react.activity"),j=Symbol.iterator;function k(w){return w===null||typeof w!="object"?null:(w=j&&w[j]||w["@@iterator"],typeof w=="function"?w:null)}var C={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},B=Object.assign,K={};function G(w,O,Z){this.props=w,this.context=O,this.refs=K,this.updater=Z||C}G.prototype.isReactComponent={},G.prototype.setState=function(w,O){if(typeof w!="object"&&typeof w!="function"&&w!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,w,O,"setState")},G.prototype.forceUpdate=function(w){this.updater.enqueueForceUpdate(this,w,"forceUpdate")};function J(){}J.prototype=G.prototype;function Y(w,O,Z){this.props=w,this.context=O,this.refs=K,this.updater=Z||C}var H=Y.prototype=new J;H.constructor=Y,B(H,G.prototype),H.isPureReactComponent=!0;var F=Array.isArray;function st(){}var $={H:null,A:null,T:null,S:null},q=Object.prototype.hasOwnProperty;function nt(w,O,Z){var tt=Z.ref;return{$$typeof:a,type:w,key:O,ref:tt!==void 0?tt:null,props:Z}}function ot(w,O){return nt(w.type,O,w.props)}function ht(w){return typeof w=="object"&&w!==null&&w.$$typeof===a}function bt(w){var O={"=":"=0",":":"=2"};return"$"+w.replace(/[=:]/g,function(Z){return O[Z]})}var se=/\/+/g;function $t(w,O){return typeof w=="object"&&w!==null&&w.key!=null?bt(""+w.key):O.toString(36)}function Ft(w){switch(w.status){case"fulfilled":return w.value;case"rejected":throw w.reason;default:switch(typeof w.status=="string"?w.then(st,st):(w.status="pending",w.then(function(O){w.status==="pending"&&(w.status="fulfilled",w.value=O)},function(O){w.status==="pending"&&(w.status="rejected",w.reason=O)})),w.status){case"fulfilled":return w.value;case"rejected":throw w.reason}}throw w}function D(w,O,Z,tt,ut){var pt=typeof w;(pt==="undefined"||pt==="boolean")&&(w=null);var wt=!1;if(w===null)wt=!0;else switch(pt){case"bigint":case"string":case"number":wt=!0;break;case"object":switch(w.$$typeof){case a:case s:wt=!0;break;case x:return wt=w._init,D(wt(w._payload),O,Z,tt,ut)}}if(wt)return ut=ut(w),wt=tt===""?"."+$t(w,0):tt,F(ut)?(Z="",wt!=null&&(Z=wt.replace(se,"$&/")+"/"),D(ut,O,Z,"",function(Ti){return Ti})):ut!=null&&(ht(ut)&&(ut=ot(ut,Z+(ut.key==null||w&&w.key===ut.key?"":(""+ut.key).replace(se,"$&/")+"/")+wt)),O.push(ut)),1;wt=0;var oe=tt===""?".":tt+":";if(F(w))for(var Bt=0;Bt<w.length;Bt++)tt=w[Bt],pt=oe+$t(tt,Bt),wt+=D(tt,O,Z,pt,ut);else if(Bt=k(w),typeof Bt=="function")for(w=Bt.call(w),Bt=0;!(tt=w.next()).done;)tt=tt.value,pt=oe+$t(tt,Bt++),wt+=D(tt,O,Z,pt,ut);else if(pt==="object"){if(typeof w.then=="function")return D(Ft(w),O,Z,tt,ut);throw O=String(w),Error("Objects are not valid as a React child (found: "+(O==="[object Object]"?"object with keys {"+Object.keys(w).join(", ")+"}":O)+"). If you meant to render a collection of children, use an array instead.")}return wt}function X(w,O,Z){if(w==null)return w;var tt=[],ut=0;return D(w,tt,"","",function(pt){return O.call(Z,pt,ut++)}),tt}function I(w){if(w._status===-1){var O=w._result;O=O(),O.then(function(Z){(w._status===0||w._status===-1)&&(w._status=1,w._result=Z)},function(Z){(w._status===0||w._status===-1)&&(w._status=2,w._result=Z)}),w._status===-1&&(w._status=0,w._result=O)}if(w._status===1)return w._result.default;throw w._result}var at=typeof reportError=="function"?reportError:function(w){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var O=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof w=="object"&&w!==null&&typeof w.message=="string"?String(w.message):String(w),error:w});if(!window.dispatchEvent(O))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",w);return}console.error(w)},lt={map:X,forEach:function(w,O,Z){X(w,function(){O.apply(this,arguments)},Z)},count:function(w){var O=0;return X(w,function(){O++}),O},toArray:function(w){return X(w,function(O){return O})||[]},only:function(w){if(!ht(w))throw Error("React.Children.only expected to receive a single React element child.");return w}};return ct.Activity=b,ct.Children=lt,ct.Component=G,ct.Fragment=l,ct.Profiler=u,ct.PureComponent=Y,ct.StrictMode=o,ct.Suspense=g,ct.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=$,ct.__COMPILER_RUNTIME={__proto__:null,c:function(w){return $.H.useMemoCache(w)}},ct.cache=function(w){return function(){return w.apply(null,arguments)}},ct.cacheSignal=function(){return null},ct.cloneElement=function(w,O,Z){if(w==null)throw Error("The argument must be a React element, but you passed "+w+".");var tt=B({},w.props),ut=w.key;if(O!=null)for(pt in O.key!==void 0&&(ut=""+O.key),O)!q.call(O,pt)||pt==="key"||pt==="__self"||pt==="__source"||pt==="ref"&&O.ref===void 0||(tt[pt]=O[pt]);var pt=arguments.length-2;if(pt===1)tt.children=Z;else if(1<pt){for(var wt=Array(pt),oe=0;oe<pt;oe++)wt[oe]=arguments[oe+2];tt.children=wt}return nt(w.type,ut,tt)},ct.createContext=function(w){return w={$$typeof:f,_currentValue:w,_currentValue2:w,_threadCount:0,Provider:null,Consumer:null},w.Provider=w,w.Consumer={$$typeof:h,_context:w},w},ct.createElement=function(w,O,Z){var tt,ut={},pt=null;if(O!=null)for(tt in O.key!==void 0&&(pt=""+O.key),O)q.call(O,tt)&&tt!=="key"&&tt!=="__self"&&tt!=="__source"&&(ut[tt]=O[tt]);var wt=arguments.length-2;if(wt===1)ut.children=Z;else if(1<wt){for(var oe=Array(wt),Bt=0;Bt<wt;Bt++)oe[Bt]=arguments[Bt+2];ut.children=oe}if(w&&w.defaultProps)for(tt in wt=w.defaultProps,wt)ut[tt]===void 0&&(ut[tt]=wt[tt]);return nt(w,pt,ut)},ct.createRef=function(){return{current:null}},ct.forwardRef=function(w){return{$$typeof:m,render:w}},ct.isValidElement=ht,ct.lazy=function(w){return{$$typeof:x,_payload:{_status:-1,_result:w},_init:I}},ct.memo=function(w,O){return{$$typeof:y,type:w,compare:O===void 0?null:O}},ct.startTransition=function(w){var O=$.T,Z={};$.T=Z;try{var tt=w(),ut=$.S;ut!==null&&ut(Z,tt),typeof tt=="object"&&tt!==null&&typeof tt.then=="function"&&tt.then(st,at)}catch(pt){at(pt)}finally{O!==null&&Z.types!==null&&(O.types=Z.types),$.T=O}},ct.unstable_useCacheRefresh=function(){return $.H.useCacheRefresh()},ct.use=function(w){return $.H.use(w)},ct.useActionState=function(w,O,Z){return $.H.useActionState(w,O,Z)},ct.useCallback=function(w,O){return $.H.useCallback(w,O)},ct.useContext=function(w){return $.H.useContext(w)},ct.useDebugValue=function(){},ct.useDeferredValue=function(w,O){return $.H.useDeferredValue(w,O)},ct.useEffect=function(w,O){return $.H.useEffect(w,O)},ct.useEffectEvent=function(w){return $.H.useEffectEvent(w)},ct.useId=function(){return $.H.useId()},ct.useImperativeHandle=function(w,O,Z){return $.H.useImperativeHandle(w,O,Z)},ct.useInsertionEffect=function(w,O){return $.H.useInsertionEffect(w,O)},ct.useLayoutEffect=function(w,O){return $.H.useLayoutEffect(w,O)},ct.useMemo=function(w,O){return $.H.useMemo(w,O)},ct.useOptimistic=function(w,O){return $.H.useOptimistic(w,O)},ct.useReducer=function(w,O,Z){return $.H.useReducer(w,O,Z)},ct.useRef=function(w){return $.H.useRef(w)},ct.useState=function(w){return $.H.useState(w)},ct.useSyncExternalStore=function(w,O,Z){return $.H.useSyncExternalStore(w,O,Z)},ct.useTransition=function(){return $.H.useTransition()},ct.version="19.2.3",ct}var Lm;function Gu(){return Lm||(Lm=1,tu.exports=Px()),tu.exports}var U=Gu(),eu={exports:{}},ys={},nu={exports:{}},au={};var Bm;function Wx(){return Bm||(Bm=1,(function(a){function s(D,X){var I=D.length;D.push(X);t:for(;0<I;){var at=I-1>>>1,lt=D[at];if(0<u(lt,X))D[at]=X,D[I]=lt,I=at;else break t}}function l(D){return D.length===0?null:D[0]}function o(D){if(D.length===0)return null;var X=D[0],I=D.pop();if(I!==X){D[0]=I;t:for(var at=0,lt=D.length,w=lt>>>1;at<w;){var O=2*(at+1)-1,Z=D[O],tt=O+1,ut=D[tt];if(0>u(Z,I))tt<lt&&0>u(ut,Z)?(D[at]=ut,D[tt]=I,at=tt):(D[at]=Z,D[O]=I,at=O);else if(tt<lt&&0>u(ut,I))D[at]=ut,D[tt]=I,at=tt;else break t}}return X}function u(D,X){var I=D.sortIndex-X.sortIndex;return I!==0?I:D.id-X.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var h=performance;a.unstable_now=function(){return h.now()}}else{var f=Date,m=f.now();a.unstable_now=function(){return f.now()-m}}var g=[],y=[],x=1,b=null,j=3,k=!1,C=!1,B=!1,K=!1,G=typeof setTimeout=="function"?setTimeout:null,J=typeof clearTimeout=="function"?clearTimeout:null,Y=typeof setImmediate<"u"?setImmediate:null;function H(D){for(var X=l(y);X!==null;){if(X.callback===null)o(y);else if(X.startTime<=D)o(y),X.sortIndex=X.expirationTime,s(g,X);else break;X=l(y)}}function F(D){if(B=!1,H(D),!C)if(l(g)!==null)C=!0,st||(st=!0,bt());else{var X=l(y);X!==null&&Ft(F,X.startTime-D)}}var st=!1,$=-1,q=5,nt=-1;function ot(){return K?!0:!(a.unstable_now()-nt<q)}function ht(){if(K=!1,st){var D=a.unstable_now();nt=D;var X=!0;try{t:{C=!1,B&&(B=!1,J($),$=-1),k=!0;var I=j;try{e:{for(H(D),b=l(g);b!==null&&!(b.expirationTime>D&&ot());){var at=b.callback;if(typeof at=="function"){b.callback=null,j=b.priorityLevel;var lt=at(b.expirationTime<=D);if(D=a.unstable_now(),typeof lt=="function"){b.callback=lt,H(D),X=!0;break e}b===l(g)&&o(g),H(D)}else o(g);b=l(g)}if(b!==null)X=!0;else{var w=l(y);w!==null&&Ft(F,w.startTime-D),X=!1}}break t}finally{b=null,j=I,k=!1}X=void 0}}finally{X?bt():st=!1}}}var bt;if(typeof Y=="function")bt=function(){Y(ht)};else if(typeof MessageChannel<"u"){var se=new MessageChannel,$t=se.port2;se.port1.onmessage=ht,bt=function(){$t.postMessage(null)}}else bt=function(){G(ht,0)};function Ft(D,X){$=G(function(){D(a.unstable_now())},X)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(D){D.callback=null},a.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):q=0<D?Math.floor(1e3/D):5},a.unstable_getCurrentPriorityLevel=function(){return j},a.unstable_next=function(D){switch(j){case 1:case 2:case 3:var X=3;break;default:X=j}var I=j;j=X;try{return D()}finally{j=I}},a.unstable_requestPaint=function(){K=!0},a.unstable_runWithPriority=function(D,X){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var I=j;j=D;try{return X()}finally{j=I}},a.unstable_scheduleCallback=function(D,X,I){var at=a.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?at+I:at):I=at,D){case 1:var lt=-1;break;case 2:lt=250;break;case 5:lt=1073741823;break;case 4:lt=1e4;break;default:lt=5e3}return lt=I+lt,D={id:x++,callback:X,priorityLevel:D,startTime:I,expirationTime:lt,sortIndex:-1},I>at?(D.sortIndex=I,s(y,D),l(g)===null&&D===l(y)&&(B?(J($),$=-1):B=!0,Ft(F,I-at))):(D.sortIndex=lt,s(g,D),C||k||(C=!0,st||(st=!0,bt()))),D},a.unstable_shouldYield=ot,a.unstable_wrapCallback=function(D){var X=j;return function(){var I=j;j=X;try{return D.apply(this,arguments)}finally{j=I}}}})(au)),au}var Hm;function Ix(){return Hm||(Hm=1,nu.exports=Wx()),nu.exports}var iu={exports:{}},le={};var qm;function t2(){if(qm)return le;qm=1;var a=Gu();function s(g){var y="https://react.dev/errors/"+g;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)y+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+g+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(){}var o={d:{f:l,r:function(){throw Error(s(522))},D:l,C:l,L:l,m:l,X:l,S:l,M:l},p:0,findDOMNode:null},u=Symbol.for("react.portal");function h(g,y,x){var b=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:u,key:b==null?null:""+b,children:g,containerInfo:y,implementation:x}}var f=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(g,y){if(g==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return le.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,le.createPortal=function(g,y){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(s(299));return h(g,y,null,x)},le.flushSync=function(g){var y=f.T,x=o.p;try{if(f.T=null,o.p=2,g)return g()}finally{f.T=y,o.p=x,o.d.f()}},le.preconnect=function(g,y){typeof g=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,o.d.C(g,y))},le.prefetchDNS=function(g){typeof g=="string"&&o.d.D(g)},le.preinit=function(g,y){if(typeof g=="string"&&y&&typeof y.as=="string"){var x=y.as,b=m(x,y.crossOrigin),j=typeof y.integrity=="string"?y.integrity:void 0,k=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;x==="style"?o.d.S(g,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:b,integrity:j,fetchPriority:k}):x==="script"&&o.d.X(g,{crossOrigin:b,integrity:j,fetchPriority:k,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},le.preinitModule=function(g,y){if(typeof g=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var x=m(y.as,y.crossOrigin);o.d.M(g,{crossOrigin:x,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&o.d.M(g)},le.preload=function(g,y){if(typeof g=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var x=y.as,b=m(x,y.crossOrigin);o.d.L(g,x,{crossOrigin:b,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},le.preloadModule=function(g,y){if(typeof g=="string")if(y){var x=m(y.as,y.crossOrigin);o.d.m(g,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:x,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else o.d.m(g)},le.requestFormReset=function(g){o.d.r(g)},le.unstable_batchedUpdates=function(g,y){return g(y)},le.useFormState=function(g,y,x){return f.H.useFormState(g,y,x)},le.useFormStatus=function(){return f.H.useHostTransitionStatus()},le.version="19.2.3",le}var Ym;function e2(){if(Ym)return iu.exports;Ym=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(s){console.error(s)}}return a(),iu.exports=t2(),iu.exports}var Gm;function n2(){if(Gm)return ys;Gm=1;var a=Ix(),s=Gu(),l=e2();function o(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function h(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function f(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function m(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function g(t){if(h(t)!==t)throw Error(o(188))}function y(t){var e=t.alternate;if(!e){if(e=h(t),e===null)throw Error(o(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var c=r.alternate;if(c===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===c.child){for(c=r.child;c;){if(c===n)return g(r),t;if(c===i)return g(r),e;c=c.sibling}throw Error(o(188))}if(n.return!==i.return)n=r,i=c;else{for(var p=!1,v=r.child;v;){if(v===n){p=!0,n=r,i=c;break}if(v===i){p=!0,i=r,n=c;break}v=v.sibling}if(!p){for(v=c.child;v;){if(v===n){p=!0,n=c,i=r;break}if(v===i){p=!0,i=c,n=r;break}v=v.sibling}if(!p)throw Error(o(189))}}if(n.alternate!==i)throw Error(o(190))}if(n.tag!==3)throw Error(o(188));return n.stateNode.current===n?t:e}function x(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=x(t),e!==null)return e;t=t.sibling}return null}var b=Object.assign,j=Symbol.for("react.element"),k=Symbol.for("react.transitional.element"),C=Symbol.for("react.portal"),B=Symbol.for("react.fragment"),K=Symbol.for("react.strict_mode"),G=Symbol.for("react.profiler"),J=Symbol.for("react.consumer"),Y=Symbol.for("react.context"),H=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),st=Symbol.for("react.suspense_list"),$=Symbol.for("react.memo"),q=Symbol.for("react.lazy"),nt=Symbol.for("react.activity"),ot=Symbol.for("react.memo_cache_sentinel"),ht=Symbol.iterator;function bt(t){return t===null||typeof t!="object"?null:(t=ht&&t[ht]||t["@@iterator"],typeof t=="function"?t:null)}var se=Symbol.for("react.client.reference");function $t(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===se?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case B:return"Fragment";case G:return"Profiler";case K:return"StrictMode";case F:return"Suspense";case st:return"SuspenseList";case nt:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case C:return"Portal";case Y:return t.displayName||"Context";case J:return(t._context.displayName||"Context")+".Consumer";case H:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case $:return e=t.displayName||null,e!==null?e:$t(t.type)||"Memo";case q:e=t._payload,t=t._init;try{return $t(t(e))}catch{}}return null}var Ft=Array.isArray,D=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,X=l.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,I={pending:!1,data:null,method:null,action:null},at=[],lt=-1;function w(t){return{current:t}}function O(t){0>lt||(t.current=at[lt],at[lt]=null,lt--)}function Z(t,e){lt++,at[lt]=t.current,t.current=e}var tt=w(null),ut=w(null),pt=w(null),wt=w(null);function oe(t,e){switch(Z(pt,e),Z(ut,t),Z(tt,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?im(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=im(e),t=sm(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}O(tt),Z(tt,t)}function Bt(){O(tt),O(ut),O(pt)}function Ti(t){t.memoizedState!==null&&Z(wt,t);var e=tt.current,n=sm(e,t.type);e!==n&&(Z(ut,t),Z(tt,n))}function Bs(t){ut.current===t&&(O(tt),O(ut)),wt.current===t&&(O(wt),fs._currentValue=I)}var Rr,_d;function In(t){if(Rr===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Rr=e&&e[1]||"",_d=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Rr+t+_d}var Or=!1;function Vr(t,e){if(!t||Or)return"";Or=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(e){var V=function(){throw Error()};if(Object.defineProperty(V.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(V,[])}catch(E){var z=E}Reflect.construct(t,[],V)}else{try{V.call()}catch(E){z=E}t.call(V.prototype)}}else{try{throw Error()}catch(E){z=E}(V=t())&&typeof V.catch=="function"&&V.catch(function(){})}}catch(E){if(E&&z&&typeof E.stack=="string")return[E.stack,z.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var r=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");r&&r.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=i.DetermineComponentFrameRoot(),p=c[0],v=c[1];if(p&&v){var S=p.split(`
`),A=v.split(`
`);for(r=i=0;i<S.length&&!S[i].includes("DetermineComponentFrameRoot");)i++;for(;r<A.length&&!A[r].includes("DetermineComponentFrameRoot");)r++;if(i===S.length||r===A.length)for(i=S.length-1,r=A.length-1;1<=i&&0<=r&&S[i]!==A[r];)r--;for(;1<=i&&0<=r;i--,r--)if(S[i]!==A[r]){if(i!==1||r!==1)do if(i--,r--,0>r||S[i]!==A[r]){var _=`
`+S[i].replace(" at new "," at ");return t.displayName&&_.includes("<anonymous>")&&(_=_.replace("<anonymous>",t.displayName)),_}while(1<=i&&0<=r);break}}}finally{Or=!1,Error.prepareStackTrace=n}return(n=t?t.displayName||t.name:"")?In(n):""}function Ny(t,e){switch(t.tag){case 26:case 27:case 5:return In(t.type);case 16:return In("Lazy");case 13:return t.child!==e&&e!==null?In("Suspense Fallback"):In("Suspense");case 19:return In("SuspenseList");case 0:case 15:return Vr(t.type,!1);case 11:return Vr(t.type.render,!1);case 1:return Vr(t.type,!0);case 31:return In("Activity");default:return""}}function Rd(t){try{var e="",n=null;do e+=Ny(t,n),n=t,t=t.return;while(t);return e}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var Ur=Object.prototype.hasOwnProperty,Lr=a.unstable_scheduleCallback,Br=a.unstable_cancelCallback,Ay=a.unstable_shouldYield,ky=a.unstable_requestPaint,xe=a.unstable_now,zy=a.unstable_getCurrentPriorityLevel,Od=a.unstable_ImmediatePriority,Vd=a.unstable_UserBlockingPriority,Hs=a.unstable_NormalPriority,Ey=a.unstable_LowPriority,Ud=a.unstable_IdlePriority,Cy=a.log,Dy=a.unstable_setDisableYieldValue,wi=null,be=null;function Tn(t){if(typeof Cy=="function"&&Dy(t),be&&typeof be.setStrictMode=="function")try{be.setStrictMode(wi,t)}catch{}}var Se=Math.clz32?Math.clz32:Oy,_y=Math.log,Ry=Math.LN2;function Oy(t){return t>>>=0,t===0?32:31-(_y(t)/Ry|0)|0}var qs=256,Ys=262144,Gs=4194304;function ta(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Xs(t,e,n){var i=t.pendingLanes;if(i===0)return 0;var r=0,c=t.suspendedLanes,p=t.pingedLanes;t=t.warmLanes;var v=i&134217727;return v!==0?(i=v&~c,i!==0?r=ta(i):(p&=v,p!==0?r=ta(p):n||(n=v&~t,n!==0&&(r=ta(n))))):(v=i&~c,v!==0?r=ta(v):p!==0?r=ta(p):n||(n=i&~t,n!==0&&(r=ta(n)))),r===0?0:e!==0&&e!==r&&(e&c)===0&&(c=r&-r,n=e&-e,c>=n||c===32&&(n&4194048)!==0)?e:r}function Mi(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function Vy(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ld(){var t=Gs;return Gs<<=1,(Gs&62914560)===0&&(Gs=4194304),t}function Hr(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ni(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Uy(t,e,n,i,r,c){var p=t.pendingLanes;t.pendingLanes=n,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=n,t.entangledLanes&=n,t.errorRecoveryDisabledLanes&=n,t.shellSuspendCounter=0;var v=t.entanglements,S=t.expirationTimes,A=t.hiddenUpdates;for(n=p&~n;0<n;){var _=31-Se(n),V=1<<_;v[_]=0,S[_]=-1;var z=A[_];if(z!==null)for(A[_]=null,_=0;_<z.length;_++){var E=z[_];E!==null&&(E.lane&=-536870913)}n&=~V}i!==0&&Bd(t,i,0),c!==0&&r===0&&t.tag!==0&&(t.suspendedLanes|=c&~(p&~e))}function Bd(t,e,n){t.pendingLanes|=e,t.suspendedLanes&=~e;var i=31-Se(e);t.entangledLanes|=e,t.entanglements[i]=t.entanglements[i]|1073741824|n&261930}function Hd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Se(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}function qd(t,e){var n=e&-e;return n=(n&42)!==0?1:qr(n),(n&(t.suspendedLanes|e))!==0?0:n}function qr(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Yr(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Yd(){var t=X.p;return t!==0?t:(t=window.event,t===void 0?32:km(t.type))}function Gd(t,e){var n=X.p;try{return X.p=t,e()}finally{X.p=n}}var wn=Math.random().toString(36).slice(2),It="__reactFiber$"+wn,fe="__reactProps$"+wn,Ma="__reactContainer$"+wn,Gr="__reactEvents$"+wn,Ly="__reactListeners$"+wn,By="__reactHandles$"+wn,Xd="__reactResources$"+wn,Ai="__reactMarker$"+wn;function Xr(t){delete t[It],delete t[fe],delete t[Gr],delete t[Ly],delete t[By]}function Na(t){var e=t[It];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ma]||n[It]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=fm(t);t!==null;){if(n=t[It])return n;t=fm(t)}return e}t=n,n=t.parentNode}return null}function Aa(t){if(t=t[It]||t[Ma]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function ki(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(o(33))}function ka(t){var e=t[Xd];return e||(e=t[Xd]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function Pt(t){t[Ai]=!0}var Kd=new Set,Qd={};function ea(t,e){za(t,e),za(t+"Capture",e)}function za(t,e){for(Qd[t]=e,t=0;t<e.length;t++)Kd.add(e[t])}var Hy=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Zd={},Jd={};function qy(t){return Ur.call(Jd,t)?!0:Ur.call(Zd,t)?!1:Hy.test(t)?Jd[t]=!0:(Zd[t]=!0,!1)}function Ks(t,e,n){if(qy(e))if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var i=e.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+n)}}function Qs(t,e,n){if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+n)}}function en(t,e,n,i){if(i===null)t.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttributeNS(e,n,""+i)}}function ze(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function $d(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Yy(t,e,n){var i=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var r=i.get,c=i.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(p){n=""+p,c.call(this,p)}}),Object.defineProperty(t,e,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(p){n=""+p},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Kr(t){if(!t._valueTracker){var e=$d(t)?"checked":"value";t._valueTracker=Yy(t,e,""+t[e])}}function Fd(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=$d(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Zs(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Gy=/[\n"\\]/g;function Ee(t){return t.replace(Gy,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function Qr(t,e,n,i,r,c,p,v){t.name="",p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"?t.type=p:t.removeAttribute("type"),e!=null?p==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+ze(e)):t.value!==""+ze(e)&&(t.value=""+ze(e)):p!=="submit"&&p!=="reset"||t.removeAttribute("value"),e!=null?Zr(t,p,ze(e)):n!=null?Zr(t,p,ze(n)):i!=null&&t.removeAttribute("value"),r==null&&c!=null&&(t.defaultChecked=!!c),r!=null&&(t.checked=r&&typeof r!="function"&&typeof r!="symbol"),v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?t.name=""+ze(v):t.removeAttribute("name")}function Pd(t,e,n,i,r,c,p,v){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(t.type=c),e!=null||n!=null){if(!(c!=="submit"&&c!=="reset"||e!=null)){Kr(t);return}n=n!=null?""+ze(n):"",e=e!=null?""+ze(e):n,v||e===t.value||(t.value=e),t.defaultValue=e}i=i??r,i=typeof i!="function"&&typeof i!="symbol"&&!!i,t.checked=v?t.checked:!!i,t.defaultChecked=!!i,p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(t.name=p),Kr(t)}function Zr(t,e,n){e==="number"&&Zs(t.ownerDocument)===t||t.defaultValue===""+n||(t.defaultValue=""+n)}function Ea(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+ze(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Wd(t,e,n){if(e!=null&&(e=""+ze(e),e!==t.value&&(t.value=e),n==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=n!=null?""+ze(n):""}function Id(t,e,n,i){if(e==null){if(i!=null){if(n!=null)throw Error(o(92));if(Ft(i)){if(1<i.length)throw Error(o(93));i=i[0]}n=i}n==null&&(n=""),e=n}n=ze(e),t.defaultValue=n,i=t.textContent,i===n&&i!==""&&i!==null&&(t.value=i),Kr(t)}function Ca(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Xy=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function tf(t,e,n){var i=e.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":i?t.setProperty(e,n):typeof n!="number"||n===0||Xy.has(e)?e==="float"?t.cssFloat=n:t[e]=(""+n).trim():t[e]=n+"px"}function ef(t,e,n){if(e!=null&&typeof e!="object")throw Error(o(62));if(t=t.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||e!=null&&e.hasOwnProperty(i)||(i.indexOf("--")===0?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="");for(var r in e)i=e[r],e.hasOwnProperty(r)&&n[r]!==i&&tf(t,r,i)}else for(var c in e)e.hasOwnProperty(c)&&tf(t,c,e[c])}function Jr(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ky=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Qy=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Js(t){return Qy.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function nn(){}var $r=null;function Fr(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Da=null,_a=null;function nf(t){var e=Aa(t);if(e&&(t=e.stateNode)){var n=t[fe]||null;t:switch(t=e.stateNode,e.type){case"input":if(Qr(t,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Ee(""+e)+'"][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=i[fe]||null;if(!r)throw Error(o(90));Qr(i,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name)}}for(e=0;e<n.length;e++)i=n[e],i.form===t.form&&Fd(i)}break t;case"textarea":Wd(t,n.value,n.defaultValue);break t;case"select":e=n.value,e!=null&&Ea(t,!!n.multiple,e,!1)}}}var Pr=!1;function af(t,e,n){if(Pr)return t(e,n);Pr=!0;try{var i=t(e);return i}finally{if(Pr=!1,(Da!==null||_a!==null)&&(Ol(),Da&&(e=Da,t=_a,_a=Da=null,nf(e),t)))for(e=0;e<t.length;e++)nf(t[e])}}function zi(t,e){var n=t.stateNode;if(n===null)return null;var i=n[fe]||null;if(i===null)return null;n=i[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break t;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(o(231,e,typeof n));return n}var an=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Wr=!1;if(an)try{var Ei={};Object.defineProperty(Ei,"passive",{get:function(){Wr=!0}}),window.addEventListener("test",Ei,Ei),window.removeEventListener("test",Ei,Ei)}catch{Wr=!1}var Mn=null,Ir=null,$s=null;function sf(){if($s)return $s;var t,e=Ir,n=e.length,i,r="value"in Mn?Mn.value:Mn.textContent,c=r.length;for(t=0;t<n&&e[t]===r[t];t++);var p=n-t;for(i=1;i<=p&&e[n-i]===r[c-i];i++);return $s=r.slice(t,1<i?1-i:void 0)}function Fs(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ps(){return!0}function lf(){return!1}function he(t){function e(n,i,r,c,p){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=c,this.target=p,this.currentTarget=null;for(var v in t)t.hasOwnProperty(v)&&(n=t[v],this[v]=n?n(c):c[v]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?Ps:lf,this.isPropagationStopped=lf,this}return b(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ps)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ps)},persist:function(){},isPersistent:Ps}),e}var na={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ws=he(na),Ci=b({},na,{view:0,detail:0}),Zy=he(Ci),to,eo,Di,Is=b({},Ci,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ao,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Di&&(Di&&t.type==="mousemove"?(to=t.screenX-Di.screenX,eo=t.screenY-Di.screenY):eo=to=0,Di=t),to)},movementY:function(t){return"movementY"in t?t.movementY:eo}}),rf=he(Is),Jy=b({},Is,{dataTransfer:0}),$y=he(Jy),Fy=b({},Ci,{relatedTarget:0}),no=he(Fy),Py=b({},na,{animationName:0,elapsedTime:0,pseudoElement:0}),Wy=he(Py),Iy=b({},na,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),tv=he(Iy),ev=b({},na,{data:0}),of=he(ev),nv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},av={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},iv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function sv(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=iv[t])?!!e[t]:!1}function ao(){return sv}var lv=b({},Ci,{key:function(t){if(t.key){var e=nv[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Fs(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?av[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ao,charCode:function(t){return t.type==="keypress"?Fs(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Fs(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),rv=he(lv),ov=b({},Is,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),cf=he(ov),cv=b({},Ci,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ao}),uv=he(cv),dv=b({},na,{propertyName:0,elapsedTime:0,pseudoElement:0}),fv=he(dv),hv=b({},Is,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),pv=he(hv),mv=b({},na,{newState:0,oldState:0}),gv=he(mv),yv=[9,13,27,32],io=an&&"CompositionEvent"in window,_i=null;an&&"documentMode"in document&&(_i=document.documentMode);var vv=an&&"TextEvent"in window&&!_i,uf=an&&(!io||_i&&8<_i&&11>=_i),df=" ",ff=!1;function hf(t,e){switch(t){case"keyup":return yv.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function pf(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ra=!1;function xv(t,e){switch(t){case"compositionend":return pf(e);case"keypress":return e.which!==32?null:(ff=!0,df);case"textInput":return t=e.data,t===df&&ff?null:t;default:return null}}function bv(t,e){if(Ra)return t==="compositionend"||!io&&hf(t,e)?(t=sf(),$s=Ir=Mn=null,Ra=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return uf&&e.locale!=="ko"?null:e.data;default:return null}}var Sv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function mf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Sv[t.type]:e==="textarea"}function gf(t,e,n,i){Da?_a?_a.push(i):_a=[i]:Da=i,e=Yl(e,"onChange"),0<e.length&&(n=new Ws("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Ri=null,Oi=null;function jv(t){Wp(t,0)}function tl(t){var e=ki(t);if(Fd(e))return t}function yf(t,e){if(t==="change")return e}var vf=!1;if(an){var so;if(an){var lo="oninput"in document;if(!lo){var xf=document.createElement("div");xf.setAttribute("oninput","return;"),lo=typeof xf.oninput=="function"}so=lo}else so=!1;vf=so&&(!document.documentMode||9<document.documentMode)}function bf(){Ri&&(Ri.detachEvent("onpropertychange",Sf),Oi=Ri=null)}function Sf(t){if(t.propertyName==="value"&&tl(Oi)){var e=[];gf(e,Oi,t,Fr(t)),af(jv,e)}}function Tv(t,e,n){t==="focusin"?(bf(),Ri=e,Oi=n,Ri.attachEvent("onpropertychange",Sf)):t==="focusout"&&bf()}function wv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return tl(Oi)}function Mv(t,e){if(t==="click")return tl(e)}function Nv(t,e){if(t==="input"||t==="change")return tl(e)}function Av(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var je=typeof Object.is=="function"?Object.is:Av;function Vi(t,e){if(je(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Ur.call(e,r)||!je(t[r],e[r]))return!1}return!0}function jf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Tf(t,e){var n=jf(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=jf(n)}}function wf(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?wf(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Mf(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=Zs(t.document);e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Zs(t.document)}return e}function ro(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var kv=an&&"documentMode"in document&&11>=document.documentMode,Oa=null,oo=null,Ui=null,co=!1;function Nf(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;co||Oa==null||Oa!==Zs(i)||(i=Oa,"selectionStart"in i&&ro(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ui&&Vi(Ui,i)||(Ui=i,i=Yl(oo,"onSelect"),0<i.length&&(e=new Ws("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Oa)))}function aa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Va={animationend:aa("Animation","AnimationEnd"),animationiteration:aa("Animation","AnimationIteration"),animationstart:aa("Animation","AnimationStart"),transitionrun:aa("Transition","TransitionRun"),transitionstart:aa("Transition","TransitionStart"),transitioncancel:aa("Transition","TransitionCancel"),transitionend:aa("Transition","TransitionEnd")},uo={},Af={};an&&(Af=document.createElement("div").style,"AnimationEvent"in window||(delete Va.animationend.animation,delete Va.animationiteration.animation,delete Va.animationstart.animation),"TransitionEvent"in window||delete Va.transitionend.transition);function ia(t){if(uo[t])return uo[t];if(!Va[t])return t;var e=Va[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Af)return uo[t]=e[n];return t}var kf=ia("animationend"),zf=ia("animationiteration"),Ef=ia("animationstart"),zv=ia("transitionrun"),Ev=ia("transitionstart"),Cv=ia("transitioncancel"),Cf=ia("transitionend"),Df=new Map,fo="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");fo.push("scrollEnd");function Ye(t,e){Df.set(t,e),ea(e,[t])}var el=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Ce=[],Ua=0,ho=0;function nl(){for(var t=Ua,e=ho=Ua=0;e<t;){var n=Ce[e];Ce[e++]=null;var i=Ce[e];Ce[e++]=null;var r=Ce[e];Ce[e++]=null;var c=Ce[e];if(Ce[e++]=null,i!==null&&r!==null){var p=i.pending;p===null?r.next=r:(r.next=p.next,p.next=r),i.pending=r}c!==0&&_f(n,r,c)}}function al(t,e,n,i){Ce[Ua++]=t,Ce[Ua++]=e,Ce[Ua++]=n,Ce[Ua++]=i,ho|=i,t.lanes|=i,t=t.alternate,t!==null&&(t.lanes|=i)}function po(t,e,n,i){return al(t,e,n,i),il(t)}function sa(t,e){return al(t,null,null,e),il(t)}function _f(t,e,n){t.lanes|=n;var i=t.alternate;i!==null&&(i.lanes|=n);for(var r=!1,c=t.return;c!==null;)c.childLanes|=n,i=c.alternate,i!==null&&(i.childLanes|=n),c.tag===22&&(t=c.stateNode,t===null||t._visibility&1||(r=!0)),t=c,c=c.return;return t.tag===3?(c=t.stateNode,r&&e!==null&&(r=31-Se(n),t=c.hiddenUpdates,i=t[r],i===null?t[r]=[e]:i.push(e),e.lane=n|536870912),c):null}function il(t){if(50<ss)throw ss=0,Tc=null,Error(o(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var La={};function Dv(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Te(t,e,n,i){return new Dv(t,e,n,i)}function mo(t){return t=t.prototype,!(!t||!t.isReactComponent)}function sn(t,e){var n=t.alternate;return n===null?(n=Te(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&65011712,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n.refCleanup=t.refCleanup,n}function Rf(t,e){t.flags&=65011714;var n=t.alternate;return n===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,t.type=n.type,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function sl(t,e,n,i,r,c){var p=0;if(i=t,typeof t=="function")mo(t)&&(p=1);else if(typeof t=="string")p=Ux(t,n,tt.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case nt:return t=Te(31,n,e,r),t.elementType=nt,t.lanes=c,t;case B:return la(n.children,r,c,e);case K:p=8,r|=24;break;case G:return t=Te(12,n,e,r|2),t.elementType=G,t.lanes=c,t;case F:return t=Te(13,n,e,r),t.elementType=F,t.lanes=c,t;case st:return t=Te(19,n,e,r),t.elementType=st,t.lanes=c,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Y:p=10;break t;case J:p=9;break t;case H:p=11;break t;case $:p=14;break t;case q:p=16,i=null;break t}p=29,n=Error(o(130,t===null?"null":typeof t,"")),i=null}return e=Te(p,n,e,r),e.elementType=t,e.type=i,e.lanes=c,e}function la(t,e,n,i){return t=Te(7,t,i,e),t.lanes=n,t}function go(t,e,n){return t=Te(6,t,null,e),t.lanes=n,t}function Of(t){var e=Te(18,null,null,0);return e.stateNode=t,e}function yo(t,e,n){return e=Te(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var Vf=new WeakMap;function De(t,e){if(typeof t=="object"&&t!==null){var n=Vf.get(t);return n!==void 0?n:(e={value:t,source:e,stack:Rd(e)},Vf.set(t,e),e)}return{value:t,source:e,stack:Rd(e)}}var Ba=[],Ha=0,ll=null,Li=0,_e=[],Re=0,Nn=null,$e=1,Fe="";function ln(t,e){Ba[Ha++]=Li,Ba[Ha++]=ll,ll=t,Li=e}function Uf(t,e,n){_e[Re++]=$e,_e[Re++]=Fe,_e[Re++]=Nn,Nn=t;var i=$e;t=Fe;var r=32-Se(i)-1;i&=~(1<<r),n+=1;var c=32-Se(e)+r;if(30<c){var p=r-r%5;c=(i&(1<<p)-1).toString(32),i>>=p,r-=p,$e=1<<32-Se(e)+r|n<<r|i,Fe=c+t}else $e=1<<c|n<<r|i,Fe=t}function vo(t){t.return!==null&&(ln(t,1),Uf(t,1,0))}function xo(t){for(;t===ll;)ll=Ba[--Ha],Ba[Ha]=null,Li=Ba[--Ha],Ba[Ha]=null;for(;t===Nn;)Nn=_e[--Re],_e[Re]=null,Fe=_e[--Re],_e[Re]=null,$e=_e[--Re],_e[Re]=null}function Lf(t,e){_e[Re++]=$e,_e[Re++]=Fe,_e[Re++]=Nn,$e=e.id,Fe=e.overflow,Nn=t}var te=null,Ct=null,xt=!1,An=null,Oe=!1,bo=Error(o(519));function kn(t){var e=Error(o(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Bi(De(e,t)),bo}function Bf(t){var e=t.stateNode,n=t.type,i=t.memoizedProps;switch(e[It]=t,e[fe]=i,n){case"dialog":gt("cancel",e),gt("close",e);break;case"iframe":case"object":case"embed":gt("load",e);break;case"video":case"audio":for(n=0;n<rs.length;n++)gt(rs[n],e);break;case"source":gt("error",e);break;case"img":case"image":case"link":gt("error",e),gt("load",e);break;case"details":gt("toggle",e);break;case"input":gt("invalid",e),Pd(e,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":gt("invalid",e);break;case"textarea":gt("invalid",e),Id(e,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||e.textContent===""+n||i.suppressHydrationWarning===!0||nm(e.textContent,n)?(i.popover!=null&&(gt("beforetoggle",e),gt("toggle",e)),i.onScroll!=null&&gt("scroll",e),i.onScrollEnd!=null&&gt("scrollend",e),i.onClick!=null&&(e.onclick=nn),e=!0):e=!1,e||kn(t,!0)}function Hf(t){for(te=t.return;te;)switch(te.tag){case 5:case 31:case 13:Oe=!1;return;case 27:case 3:Oe=!0;return;default:te=te.return}}function qa(t){if(t!==te)return!1;if(!xt)return Hf(t),xt=!0,!1;var e=t.tag,n;if((n=e!==3&&e!==27)&&((n=e===5)&&(n=t.type,n=!(n!=="form"&&n!=="button")||Lc(t.type,t.memoizedProps)),n=!n),n&&Ct&&kn(t),Hf(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(o(317));Ct=dm(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(o(317));Ct=dm(t)}else e===27?(e=Ct,Yn(t.type)?(t=Gc,Gc=null,Ct=t):Ct=e):Ct=te?Ue(t.stateNode.nextSibling):null;return!0}function ra(){Ct=te=null,xt=!1}function So(){var t=An;return t!==null&&(ye===null?ye=t:ye.push.apply(ye,t),An=null),t}function Bi(t){An===null?An=[t]:An.push(t)}var jo=w(null),oa=null,rn=null;function zn(t,e,n){Z(jo,e._currentValue),e._currentValue=n}function on(t){t._currentValue=jo.current,O(jo)}function To(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function wo(t,e,n,i){var r=t.child;for(r!==null&&(r.return=t);r!==null;){var c=r.dependencies;if(c!==null){var p=r.child;c=c.firstContext;t:for(;c!==null;){var v=c;c=r;for(var S=0;S<e.length;S++)if(v.context===e[S]){c.lanes|=n,v=c.alternate,v!==null&&(v.lanes|=n),To(c.return,n,t),i||(p=null);break t}c=v.next}}else if(r.tag===18){if(p=r.return,p===null)throw Error(o(341));p.lanes|=n,c=p.alternate,c!==null&&(c.lanes|=n),To(p,n,t),p=null}else p=r.child;if(p!==null)p.return=r;else for(p=r;p!==null;){if(p===t){p=null;break}if(r=p.sibling,r!==null){r.return=p.return,p=r;break}p=p.return}r=p}}function Ya(t,e,n,i){t=null;for(var r=e,c=!1;r!==null;){if(!c){if((r.flags&524288)!==0)c=!0;else if((r.flags&262144)!==0)break}if(r.tag===10){var p=r.alternate;if(p===null)throw Error(o(387));if(p=p.memoizedProps,p!==null){var v=r.type;je(r.pendingProps.value,p.value)||(t!==null?t.push(v):t=[v])}}else if(r===wt.current){if(p=r.alternate,p===null)throw Error(o(387));p.memoizedState.memoizedState!==r.memoizedState.memoizedState&&(t!==null?t.push(fs):t=[fs])}r=r.return}t!==null&&wo(e,t,n,i),e.flags|=262144}function rl(t){for(t=t.firstContext;t!==null;){if(!je(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function ca(t){oa=t,rn=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function ee(t){return qf(oa,t)}function ol(t,e){return oa===null&&ca(t),qf(t,e)}function qf(t,e){var n=e._currentValue;if(e={context:e,memoizedValue:n,next:null},rn===null){if(t===null)throw Error(o(308));rn=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else rn=rn.next=e;return n}var _v=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(n,i){t.push(i)}};this.abort=function(){e.aborted=!0,t.forEach(function(n){return n()})}},Rv=a.unstable_scheduleCallback,Ov=a.unstable_NormalPriority,Yt={$$typeof:Y,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Mo(){return{controller:new _v,data:new Map,refCount:0}}function Hi(t){t.refCount--,t.refCount===0&&Rv(Ov,function(){t.controller.abort()})}var qi=null,No=0,Ga=0,Xa=null;function Vv(t,e){if(qi===null){var n=qi=[];No=0,Ga=zc(),Xa={status:"pending",value:void 0,then:function(i){n.push(i)}}}return No++,e.then(Yf,Yf),e}function Yf(){if(--No===0&&qi!==null){Xa!==null&&(Xa.status="fulfilled");var t=qi;qi=null,Ga=0,Xa=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function Uv(t,e){var n=[],i={status:"pending",value:null,reason:null,then:function(r){n.push(r)}};return t.then(function(){i.status="fulfilled",i.value=e;for(var r=0;r<n.length;r++)(0,n[r])(e)},function(r){for(i.status="rejected",i.reason=r,r=0;r<n.length;r++)(0,n[r])(void 0)}),i}var Gf=D.S;D.S=function(t,e){Np=xe(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&Vv(t,e),Gf!==null&&Gf(t,e)};var ua=w(null);function Ao(){var t=ua.current;return t!==null?t:Et.pooledCache}function cl(t,e){e===null?Z(ua,ua.current):Z(ua,e.pool)}function Xf(){var t=Ao();return t===null?null:{parent:Yt._currentValue,pool:t}}var Ka=Error(o(460)),ko=Error(o(474)),ul=Error(o(542)),dl={then:function(){}};function Kf(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Qf(t,e,n){switch(n=t[n],n===void 0?t.push(e):n!==e&&(e.then(nn,nn),e=n),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Jf(t),t;default:if(typeof e.status=="string")e.then(nn,nn);else{if(t=Et,t!==null&&100<t.shellSuspendCounter)throw Error(o(482));t=e,t.status="pending",t.then(function(i){if(e.status==="pending"){var r=e;r.status="fulfilled",r.value=i}},function(i){if(e.status==="pending"){var r=e;r.status="rejected",r.reason=i}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Jf(t),t}throw fa=e,Ka}}function da(t){try{var e=t._init;return e(t._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(fa=n,Ka):n}}var fa=null;function Zf(){if(fa===null)throw Error(o(459));var t=fa;return fa=null,t}function Jf(t){if(t===Ka||t===ul)throw Error(o(483))}var Qa=null,Yi=0;function fl(t){var e=Yi;return Yi+=1,Qa===null&&(Qa=[]),Qf(Qa,t,e)}function Gi(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function hl(t,e){throw e.$$typeof===j?Error(o(525)):(t=Object.prototype.toString.call(e),Error(o(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function $f(t){function e(M,T){if(t){var N=M.deletions;N===null?(M.deletions=[T],M.flags|=16):N.push(T)}}function n(M,T){if(!t)return null;for(;T!==null;)e(M,T),T=T.sibling;return null}function i(M){for(var T=new Map;M!==null;)M.key!==null?T.set(M.key,M):T.set(M.index,M),M=M.sibling;return T}function r(M,T){return M=sn(M,T),M.index=0,M.sibling=null,M}function c(M,T,N){return M.index=N,t?(N=M.alternate,N!==null?(N=N.index,N<T?(M.flags|=67108866,T):N):(M.flags|=67108866,T)):(M.flags|=1048576,T)}function p(M){return t&&M.alternate===null&&(M.flags|=67108866),M}function v(M,T,N,R){return T===null||T.tag!==6?(T=go(N,M.mode,R),T.return=M,T):(T=r(T,N),T.return=M,T)}function S(M,T,N,R){var it=N.type;return it===B?_(M,T,N.props.children,R,N.key):T!==null&&(T.elementType===it||typeof it=="object"&&it!==null&&it.$$typeof===q&&da(it)===T.type)?(T=r(T,N.props),Gi(T,N),T.return=M,T):(T=sl(N.type,N.key,N.props,null,M.mode,R),Gi(T,N),T.return=M,T)}function A(M,T,N,R){return T===null||T.tag!==4||T.stateNode.containerInfo!==N.containerInfo||T.stateNode.implementation!==N.implementation?(T=yo(N,M.mode,R),T.return=M,T):(T=r(T,N.children||[]),T.return=M,T)}function _(M,T,N,R,it){return T===null||T.tag!==7?(T=la(N,M.mode,R,it),T.return=M,T):(T=r(T,N),T.return=M,T)}function V(M,T,N){if(typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint")return T=go(""+T,M.mode,N),T.return=M,T;if(typeof T=="object"&&T!==null){switch(T.$$typeof){case k:return N=sl(T.type,T.key,T.props,null,M.mode,N),Gi(N,T),N.return=M,N;case C:return T=yo(T,M.mode,N),T.return=M,T;case q:return T=da(T),V(M,T,N)}if(Ft(T)||bt(T))return T=la(T,M.mode,N,null),T.return=M,T;if(typeof T.then=="function")return V(M,fl(T),N);if(T.$$typeof===Y)return V(M,ol(M,T),N);hl(M,T)}return null}function z(M,T,N,R){var it=T!==null?T.key:null;if(typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint")return it!==null?null:v(M,T,""+N,R);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case k:return N.key===it?S(M,T,N,R):null;case C:return N.key===it?A(M,T,N,R):null;case q:return N=da(N),z(M,T,N,R)}if(Ft(N)||bt(N))return it!==null?null:_(M,T,N,R,null);if(typeof N.then=="function")return z(M,T,fl(N),R);if(N.$$typeof===Y)return z(M,T,ol(M,N),R);hl(M,N)}return null}function E(M,T,N,R,it){if(typeof R=="string"&&R!==""||typeof R=="number"||typeof R=="bigint")return M=M.get(N)||null,v(T,M,""+R,it);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case k:return M=M.get(R.key===null?N:R.key)||null,S(T,M,R,it);case C:return M=M.get(R.key===null?N:R.key)||null,A(T,M,R,it);case q:return R=da(R),E(M,T,N,R,it)}if(Ft(R)||bt(R))return M=M.get(N)||null,_(T,M,R,it,null);if(typeof R.then=="function")return E(M,T,N,fl(R),it);if(R.$$typeof===Y)return E(M,T,N,ol(T,R),it);hl(T,R)}return null}function W(M,T,N,R){for(var it=null,St=null,et=T,ft=T=0,vt=null;et!==null&&ft<N.length;ft++){et.index>ft?(vt=et,et=null):vt=et.sibling;var jt=z(M,et,N[ft],R);if(jt===null){et===null&&(et=vt);break}t&&et&&jt.alternate===null&&e(M,et),T=c(jt,T,ft),St===null?it=jt:St.sibling=jt,St=jt,et=vt}if(ft===N.length)return n(M,et),xt&&ln(M,ft),it;if(et===null){for(;ft<N.length;ft++)et=V(M,N[ft],R),et!==null&&(T=c(et,T,ft),St===null?it=et:St.sibling=et,St=et);return xt&&ln(M,ft),it}for(et=i(et);ft<N.length;ft++)vt=E(et,M,ft,N[ft],R),vt!==null&&(t&&vt.alternate!==null&&et.delete(vt.key===null?ft:vt.key),T=c(vt,T,ft),St===null?it=vt:St.sibling=vt,St=vt);return t&&et.forEach(function(Zn){return e(M,Zn)}),xt&&ln(M,ft),it}function rt(M,T,N,R){if(N==null)throw Error(o(151));for(var it=null,St=null,et=T,ft=T=0,vt=null,jt=N.next();et!==null&&!jt.done;ft++,jt=N.next()){et.index>ft?(vt=et,et=null):vt=et.sibling;var Zn=z(M,et,jt.value,R);if(Zn===null){et===null&&(et=vt);break}t&&et&&Zn.alternate===null&&e(M,et),T=c(Zn,T,ft),St===null?it=Zn:St.sibling=Zn,St=Zn,et=vt}if(jt.done)return n(M,et),xt&&ln(M,ft),it;if(et===null){for(;!jt.done;ft++,jt=N.next())jt=V(M,jt.value,R),jt!==null&&(T=c(jt,T,ft),St===null?it=jt:St.sibling=jt,St=jt);return xt&&ln(M,ft),it}for(et=i(et);!jt.done;ft++,jt=N.next())jt=E(et,M,ft,jt.value,R),jt!==null&&(t&&jt.alternate!==null&&et.delete(jt.key===null?ft:jt.key),T=c(jt,T,ft),St===null?it=jt:St.sibling=jt,St=jt);return t&&et.forEach(function(Jx){return e(M,Jx)}),xt&&ln(M,ft),it}function zt(M,T,N,R){if(typeof N=="object"&&N!==null&&N.type===B&&N.key===null&&(N=N.props.children),typeof N=="object"&&N!==null){switch(N.$$typeof){case k:t:{for(var it=N.key;T!==null;){if(T.key===it){if(it=N.type,it===B){if(T.tag===7){n(M,T.sibling),R=r(T,N.props.children),R.return=M,M=R;break t}}else if(T.elementType===it||typeof it=="object"&&it!==null&&it.$$typeof===q&&da(it)===T.type){n(M,T.sibling),R=r(T,N.props),Gi(R,N),R.return=M,M=R;break t}n(M,T);break}else e(M,T);T=T.sibling}N.type===B?(R=la(N.props.children,M.mode,R,N.key),R.return=M,M=R):(R=sl(N.type,N.key,N.props,null,M.mode,R),Gi(R,N),R.return=M,M=R)}return p(M);case C:t:{for(it=N.key;T!==null;){if(T.key===it)if(T.tag===4&&T.stateNode.containerInfo===N.containerInfo&&T.stateNode.implementation===N.implementation){n(M,T.sibling),R=r(T,N.children||[]),R.return=M,M=R;break t}else{n(M,T);break}else e(M,T);T=T.sibling}R=yo(N,M.mode,R),R.return=M,M=R}return p(M);case q:return N=da(N),zt(M,T,N,R)}if(Ft(N))return W(M,T,N,R);if(bt(N)){if(it=bt(N),typeof it!="function")throw Error(o(150));return N=it.call(N),rt(M,T,N,R)}if(typeof N.then=="function")return zt(M,T,fl(N),R);if(N.$$typeof===Y)return zt(M,T,ol(M,N),R);hl(M,N)}return typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint"?(N=""+N,T!==null&&T.tag===6?(n(M,T.sibling),R=r(T,N),R.return=M,M=R):(n(M,T),R=go(N,M.mode,R),R.return=M,M=R),p(M)):n(M,T)}return function(M,T,N,R){try{Yi=0;var it=zt(M,T,N,R);return Qa=null,it}catch(et){if(et===Ka||et===ul)throw et;var St=Te(29,et,null,M.mode);return St.lanes=R,St.return=M,St}}}var ha=$f(!0),Ff=$f(!1),En=!1;function zo(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Eo(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Cn(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Dn(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,(Tt&2)!==0){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,e=il(t),_f(t,null,n),e}return al(t,i,e,n),il(t)}function Xi(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194048)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Hd(t,n)}}function Co(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,c=null;if(n=n.firstBaseUpdate,n!==null){do{var p={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};c===null?r=c=p:c=c.next=p,n=n.next}while(n!==null);c===null?r=c=e:c=c.next=e}else r=c=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:c,shared:i.shared,callbacks:i.callbacks},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}var Do=!1;function Ki(){if(Do){var t=Xa;if(t!==null)throw t}}function Qi(t,e,n,i){Do=!1;var r=t.updateQueue;En=!1;var c=r.firstBaseUpdate,p=r.lastBaseUpdate,v=r.shared.pending;if(v!==null){r.shared.pending=null;var S=v,A=S.next;S.next=null,p===null?c=A:p.next=A,p=S;var _=t.alternate;_!==null&&(_=_.updateQueue,v=_.lastBaseUpdate,v!==p&&(v===null?_.firstBaseUpdate=A:v.next=A,_.lastBaseUpdate=S))}if(c!==null){var V=r.baseState;p=0,_=A=S=null,v=c;do{var z=v.lane&-536870913,E=z!==v.lane;if(E?(yt&z)===z:(i&z)===z){z!==0&&z===Ga&&(Do=!0),_!==null&&(_=_.next={lane:0,tag:v.tag,payload:v.payload,callback:null,next:null});t:{var W=t,rt=v;z=e;var zt=n;switch(rt.tag){case 1:if(W=rt.payload,typeof W=="function"){V=W.call(zt,V,z);break t}V=W;break t;case 3:W.flags=W.flags&-65537|128;case 0:if(W=rt.payload,z=typeof W=="function"?W.call(zt,V,z):W,z==null)break t;V=b({},V,z);break t;case 2:En=!0}}z=v.callback,z!==null&&(t.flags|=64,E&&(t.flags|=8192),E=r.callbacks,E===null?r.callbacks=[z]:E.push(z))}else E={lane:z,tag:v.tag,payload:v.payload,callback:v.callback,next:null},_===null?(A=_=E,S=V):_=_.next=E,p|=z;if(v=v.next,v===null){if(v=r.shared.pending,v===null)break;E=v,v=E.next,E.next=null,r.lastBaseUpdate=E,r.shared.pending=null}}while(!0);_===null&&(S=V),r.baseState=S,r.firstBaseUpdate=A,r.lastBaseUpdate=_,c===null&&(r.shared.lanes=0),Un|=p,t.lanes=p,t.memoizedState=V}}function Pf(t,e){if(typeof t!="function")throw Error(o(191,t));t.call(e)}function Wf(t,e){var n=t.callbacks;if(n!==null)for(t.callbacks=null,t=0;t<n.length;t++)Pf(n[t],e)}var Za=w(null),pl=w(0);function If(t,e){t=yn,Z(pl,t),Z(Za,e),yn=t|e.baseLanes}function _o(){Z(pl,yn),Z(Za,Za.current)}function Ro(){yn=pl.current,O(Za),O(pl)}var we=w(null),Ve=null;function _n(t){var e=t.alternate;Z(Ht,Ht.current&1),Z(we,t),Ve===null&&(e===null||Za.current!==null||e.memoizedState!==null)&&(Ve=t)}function Oo(t){Z(Ht,Ht.current),Z(we,t),Ve===null&&(Ve=t)}function th(t){t.tag===22?(Z(Ht,Ht.current),Z(we,t),Ve===null&&(Ve=t)):Rn()}function Rn(){Z(Ht,Ht.current),Z(we,we.current)}function Me(t){O(we),Ve===t&&(Ve=null),O(Ht)}var Ht=w(0);function ml(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||qc(n)||Yc(n)))return e}else if(e.tag===19&&(e.memoizedProps.revealOrder==="forwards"||e.memoizedProps.revealOrder==="backwards"||e.memoizedProps.revealOrder==="unstable_legacy-backwards"||e.memoizedProps.revealOrder==="together")){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var cn=0,dt=null,At=null,Gt=null,gl=!1,Ja=!1,pa=!1,yl=0,Zi=0,$a=null,Lv=0;function Vt(){throw Error(o(321))}function Vo(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!je(t[n],e[n]))return!1;return!0}function Uo(t,e,n,i,r,c){return cn=c,dt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,D.H=t===null||t.memoizedState===null?Uh:Wo,pa=!1,c=n(i,r),pa=!1,Ja&&(c=nh(e,n,i,r)),eh(t),c}function eh(t){D.H=Fi;var e=At!==null&&At.next!==null;if(cn=0,Gt=At=dt=null,gl=!1,Zi=0,$a=null,e)throw Error(o(300));t===null||Xt||(t=t.dependencies,t!==null&&rl(t)&&(Xt=!0))}function nh(t,e,n,i){dt=t;var r=0;do{if(Ja&&($a=null),Zi=0,Ja=!1,25<=r)throw Error(o(301));if(r+=1,Gt=At=null,t.updateQueue!=null){var c=t.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}D.H=Lh,c=e(n,i)}while(Ja);return c}function Bv(){var t=D.H,e=t.useState()[0];return e=typeof e.then=="function"?Ji(e):e,t=t.useState()[0],(At!==null?At.memoizedState:null)!==t&&(dt.flags|=1024),e}function Lo(){var t=yl!==0;return yl=0,t}function Bo(t,e,n){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~n}function Ho(t){if(gl){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}gl=!1}cn=0,Gt=At=dt=null,Ja=!1,Zi=yl=0,$a=null}function ce(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Gt===null?dt.memoizedState=Gt=t:Gt=Gt.next=t,Gt}function qt(){if(At===null){var t=dt.alternate;t=t!==null?t.memoizedState:null}else t=At.next;var e=Gt===null?dt.memoizedState:Gt.next;if(e!==null)Gt=e,At=t;else{if(t===null)throw dt.alternate===null?Error(o(467)):Error(o(310));At=t,t={memoizedState:At.memoizedState,baseState:At.baseState,baseQueue:At.baseQueue,queue:At.queue,next:null},Gt===null?dt.memoizedState=Gt=t:Gt=Gt.next=t}return Gt}function vl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ji(t){var e=Zi;return Zi+=1,$a===null&&($a=[]),t=Qf($a,t,e),e=dt,(Gt===null?e.memoizedState:Gt.next)===null&&(e=e.alternate,D.H=e===null||e.memoizedState===null?Uh:Wo),t}function xl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Ji(t);if(t.$$typeof===Y)return ee(t)}throw Error(o(438,String(t)))}function qo(t){var e=null,n=dt.updateQueue;if(n!==null&&(e=n.memoCache),e==null){var i=dt.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(e={data:i.data.map(function(r){return r.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),n===null&&(n=vl(),dt.updateQueue=n),n.memoCache=e,n=e.data[e.index],n===void 0)for(n=e.data[e.index]=Array(t),i=0;i<t;i++)n[i]=ot;return e.index++,n}function un(t,e){return typeof e=="function"?e(t):e}function bl(t){var e=qt();return Yo(e,At,t)}function Yo(t,e,n){var i=t.queue;if(i===null)throw Error(o(311));i.lastRenderedReducer=n;var r=t.baseQueue,c=i.pending;if(c!==null){if(r!==null){var p=r.next;r.next=c.next,c.next=p}e.baseQueue=r=c,i.pending=null}if(c=t.baseState,r===null)t.memoizedState=c;else{e=r.next;var v=p=null,S=null,A=e,_=!1;do{var V=A.lane&-536870913;if(V!==A.lane?(yt&V)===V:(cn&V)===V){var z=A.revertLane;if(z===0)S!==null&&(S=S.next={lane:0,revertLane:0,gesture:null,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null}),V===Ga&&(_=!0);else if((cn&z)===z){A=A.next,z===Ga&&(_=!0);continue}else V={lane:0,revertLane:A.revertLane,gesture:null,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null},S===null?(v=S=V,p=c):S=S.next=V,dt.lanes|=z,Un|=z;V=A.action,pa&&n(c,V),c=A.hasEagerState?A.eagerState:n(c,V)}else z={lane:V,revertLane:A.revertLane,gesture:A.gesture,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null},S===null?(v=S=z,p=c):S=S.next=z,dt.lanes|=V,Un|=V;A=A.next}while(A!==null&&A!==e);if(S===null?p=c:S.next=v,!je(c,t.memoizedState)&&(Xt=!0,_&&(n=Xa,n!==null)))throw n;t.memoizedState=c,t.baseState=p,t.baseQueue=S,i.lastRenderedState=c}return r===null&&(i.lanes=0),[t.memoizedState,i.dispatch]}function Go(t){var e=qt(),n=e.queue;if(n===null)throw Error(o(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,c=e.memoizedState;if(r!==null){n.pending=null;var p=r=r.next;do c=t(c,p.action),p=p.next;while(p!==r);je(c,e.memoizedState)||(Xt=!0),e.memoizedState=c,e.baseQueue===null&&(e.baseState=c),n.lastRenderedState=c}return[c,i]}function ah(t,e,n){var i=dt,r=qt(),c=xt;if(c){if(n===void 0)throw Error(o(407));n=n()}else n=e();var p=!je((At||r).memoizedState,n);if(p&&(r.memoizedState=n,Xt=!0),r=r.queue,Qo(lh.bind(null,i,r,t),[t]),r.getSnapshot!==e||p||Gt!==null&&Gt.memoizedState.tag&1){if(i.flags|=2048,Fa(9,{destroy:void 0},sh.bind(null,i,r,n,e),null),Et===null)throw Error(o(349));c||(cn&127)!==0||ih(i,e,n)}return n}function ih(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=dt.updateQueue,e===null?(e=vl(),dt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function sh(t,e,n,i){e.value=n,e.getSnapshot=i,rh(e)&&oh(t)}function lh(t,e,n){return n(function(){rh(e)&&oh(t)})}function rh(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!je(t,n)}catch{return!0}}function oh(t){var e=sa(t,2);e!==null&&ve(e,t,2)}function Xo(t){var e=ce();if(typeof t=="function"){var n=t;if(t=n(),pa){Tn(!0);try{n()}finally{Tn(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:un,lastRenderedState:t},e}function ch(t,e,n,i){return t.baseState=n,Yo(t,At,typeof i=="function"?i:un)}function Hv(t,e,n,i,r){if(Tl(t))throw Error(o(485));if(t=e.action,t!==null){var c={payload:r,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(p){c.listeners.push(p)}};D.T!==null?n(!0):c.isTransition=!1,i(c),n=e.pending,n===null?(c.next=e.pending=c,uh(e,c)):(c.next=n.next,e.pending=n.next=c)}}function uh(t,e){var n=e.action,i=e.payload,r=t.state;if(e.isTransition){var c=D.T,p={};D.T=p;try{var v=n(r,i),S=D.S;S!==null&&S(p,v),dh(t,e,v)}catch(A){Ko(t,e,A)}finally{c!==null&&p.types!==null&&(c.types=p.types),D.T=c}}else try{c=n(r,i),dh(t,e,c)}catch(A){Ko(t,e,A)}}function dh(t,e,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){fh(t,e,i)},function(i){return Ko(t,e,i)}):fh(t,e,n)}function fh(t,e,n){e.status="fulfilled",e.value=n,hh(e),t.state=n,e=t.pending,e!==null&&(n=e.next,n===e?t.pending=null:(n=n.next,e.next=n,uh(t,n)))}function Ko(t,e,n){var i=t.pending;if(t.pending=null,i!==null){i=i.next;do e.status="rejected",e.reason=n,hh(e),e=e.next;while(e!==i)}t.action=null}function hh(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function ph(t,e){return e}function mh(t,e){if(xt){var n=Et.formState;if(n!==null){t:{var i=dt;if(xt){if(Ct){e:{for(var r=Ct,c=Oe;r.nodeType!==8;){if(!c){r=null;break e}if(r=Ue(r.nextSibling),r===null){r=null;break e}}c=r.data,r=c==="F!"||c==="F"?r:null}if(r){Ct=Ue(r.nextSibling),i=r.data==="F!";break t}}kn(i)}i=!1}i&&(e=n[0])}}return n=ce(),n.memoizedState=n.baseState=e,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ph,lastRenderedState:e},n.queue=i,n=Rh.bind(null,dt,i),i.dispatch=n,i=Xo(!1),c=Po.bind(null,dt,!1,i.queue),i=ce(),r={state:e,dispatch:null,action:t,pending:null},i.queue=r,n=Hv.bind(null,dt,r,c,n),r.dispatch=n,i.memoizedState=t,[e,n,!1]}function gh(t){var e=qt();return yh(e,At,t)}function yh(t,e,n){if(e=Yo(t,e,ph)[0],t=bl(un)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var i=Ji(e)}catch(p){throw p===Ka?ul:p}else i=e;e=qt();var r=e.queue,c=r.dispatch;return n!==e.memoizedState&&(dt.flags|=2048,Fa(9,{destroy:void 0},qv.bind(null,r,n),null)),[i,c,t]}function qv(t,e){t.action=e}function vh(t){var e=qt(),n=At;if(n!==null)return yh(e,n,t);qt(),e=e.memoizedState,n=qt();var i=n.queue.dispatch;return n.memoizedState=t,[e,i,!1]}function Fa(t,e,n,i){return t={tag:t,create:n,deps:i,inst:e,next:null},e=dt.updateQueue,e===null&&(e=vl(),dt.updateQueue=e),n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t),t}function xh(){return qt().memoizedState}function Sl(t,e,n,i){var r=ce();dt.flags|=t,r.memoizedState=Fa(1|e,{destroy:void 0},n,i===void 0?null:i)}function jl(t,e,n,i){var r=qt();i=i===void 0?null:i;var c=r.memoizedState.inst;At!==null&&i!==null&&Vo(i,At.memoizedState.deps)?r.memoizedState=Fa(e,c,n,i):(dt.flags|=t,r.memoizedState=Fa(1|e,c,n,i))}function bh(t,e){Sl(8390656,8,t,e)}function Qo(t,e){jl(2048,8,t,e)}function Yv(t){dt.flags|=4;var e=dt.updateQueue;if(e===null)e=vl(),dt.updateQueue=e,e.events=[t];else{var n=e.events;n===null?e.events=[t]:n.push(t)}}function Sh(t){var e=qt().memoizedState;return Yv({ref:e,nextImpl:t}),function(){if((Tt&2)!==0)throw Error(o(440));return e.impl.apply(void 0,arguments)}}function jh(t,e){return jl(4,2,t,e)}function Th(t,e){return jl(4,4,t,e)}function wh(t,e){if(typeof e=="function"){t=t();var n=e(t);return function(){typeof n=="function"?n():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Mh(t,e,n){n=n!=null?n.concat([t]):null,jl(4,4,wh.bind(null,e,t),n)}function Zo(){}function Nh(t,e){var n=qt();e=e===void 0?null:e;var i=n.memoizedState;return e!==null&&Vo(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Ah(t,e){var n=qt();e=e===void 0?null:e;var i=n.memoizedState;if(e!==null&&Vo(e,i[1]))return i[0];if(i=t(),pa){Tn(!0);try{t()}finally{Tn(!1)}}return n.memoizedState=[i,e],i}function Jo(t,e,n){return n===void 0||(cn&1073741824)!==0&&(yt&261930)===0?t.memoizedState=e:(t.memoizedState=n,t=kp(),dt.lanes|=t,Un|=t,n)}function kh(t,e,n,i){return je(n,e)?n:Za.current!==null?(t=Jo(t,n,i),je(t,e)||(Xt=!0),t):(cn&42)===0||(cn&1073741824)!==0&&(yt&261930)===0?(Xt=!0,t.memoizedState=n):(t=kp(),dt.lanes|=t,Un|=t,e)}function zh(t,e,n,i,r){var c=X.p;X.p=c!==0&&8>c?c:8;var p=D.T,v={};D.T=v,Po(t,!1,e,n);try{var S=r(),A=D.S;if(A!==null&&A(v,S),S!==null&&typeof S=="object"&&typeof S.then=="function"){var _=Uv(S,i);$i(t,e,_,ke(t))}else $i(t,e,i,ke(t))}catch(V){$i(t,e,{then:function(){},status:"rejected",reason:V},ke())}finally{X.p=c,p!==null&&v.types!==null&&(p.types=v.types),D.T=p}}function Gv(){}function $o(t,e,n,i){if(t.tag!==5)throw Error(o(476));var r=Eh(t).queue;zh(t,r,e,I,n===null?Gv:function(){return Ch(t),n(i)})}function Eh(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:I,baseState:I,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:un,lastRenderedState:I},next:null};var n={};return e.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:un,lastRenderedState:n},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function Ch(t){var e=Eh(t);e.next===null&&(e=t.alternate.memoizedState),$i(t,e.next.queue,{},ke())}function Fo(){return ee(fs)}function Dh(){return qt().memoizedState}function _h(){return qt().memoizedState}function Xv(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var n=ke();t=Cn(n);var i=Dn(e,t,n);i!==null&&(ve(i,e,n),Xi(i,e,n)),e={cache:Mo()},t.payload=e;return}e=e.return}}function Kv(t,e,n){var i=ke();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Tl(t)?Oh(e,n):(n=po(t,e,n,i),n!==null&&(ve(n,t,i),Vh(n,e,i)))}function Rh(t,e,n){var i=ke();$i(t,e,n,i)}function $i(t,e,n,i){var r={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Tl(t))Oh(e,r);else{var c=t.alternate;if(t.lanes===0&&(c===null||c.lanes===0)&&(c=e.lastRenderedReducer,c!==null))try{var p=e.lastRenderedState,v=c(p,n);if(r.hasEagerState=!0,r.eagerState=v,je(v,p))return al(t,e,r,0),Et===null&&nl(),!1}catch{}if(n=po(t,e,r,i),n!==null)return ve(n,t,i),Vh(n,e,i),!0}return!1}function Po(t,e,n,i){if(i={lane:2,revertLane:zc(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},Tl(t)){if(e)throw Error(o(479))}else e=po(t,n,i,2),e!==null&&ve(e,t,2)}function Tl(t){var e=t.alternate;return t===dt||e!==null&&e===dt}function Oh(t,e){Ja=gl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Vh(t,e,n){if((n&4194048)!==0){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Hd(t,n)}}var Fi={readContext:ee,use:xl,useCallback:Vt,useContext:Vt,useEffect:Vt,useImperativeHandle:Vt,useLayoutEffect:Vt,useInsertionEffect:Vt,useMemo:Vt,useReducer:Vt,useRef:Vt,useState:Vt,useDebugValue:Vt,useDeferredValue:Vt,useTransition:Vt,useSyncExternalStore:Vt,useId:Vt,useHostTransitionStatus:Vt,useFormState:Vt,useActionState:Vt,useOptimistic:Vt,useMemoCache:Vt,useCacheRefresh:Vt};Fi.useEffectEvent=Vt;var Uh={readContext:ee,use:xl,useCallback:function(t,e){return ce().memoizedState=[t,e===void 0?null:e],t},useContext:ee,useEffect:bh,useImperativeHandle:function(t,e,n){n=n!=null?n.concat([t]):null,Sl(4194308,4,wh.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Sl(4194308,4,t,e)},useInsertionEffect:function(t,e){Sl(4,2,t,e)},useMemo:function(t,e){var n=ce();e=e===void 0?null:e;var i=t();if(pa){Tn(!0);try{t()}finally{Tn(!1)}}return n.memoizedState=[i,e],i},useReducer:function(t,e,n){var i=ce();if(n!==void 0){var r=n(e);if(pa){Tn(!0);try{n(e)}finally{Tn(!1)}}}else r=e;return i.memoizedState=i.baseState=r,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:r},i.queue=t,t=t.dispatch=Kv.bind(null,dt,t),[i.memoizedState,t]},useRef:function(t){var e=ce();return t={current:t},e.memoizedState=t},useState:function(t){t=Xo(t);var e=t.queue,n=Rh.bind(null,dt,e);return e.dispatch=n,[t.memoizedState,n]},useDebugValue:Zo,useDeferredValue:function(t,e){var n=ce();return Jo(n,t,e)},useTransition:function(){var t=Xo(!1);return t=zh.bind(null,dt,t.queue,!0,!1),ce().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,n){var i=dt,r=ce();if(xt){if(n===void 0)throw Error(o(407));n=n()}else{if(n=e(),Et===null)throw Error(o(349));(yt&127)!==0||ih(i,e,n)}r.memoizedState=n;var c={value:n,getSnapshot:e};return r.queue=c,bh(lh.bind(null,i,c,t),[t]),i.flags|=2048,Fa(9,{destroy:void 0},sh.bind(null,i,c,n,e),null),n},useId:function(){var t=ce(),e=Et.identifierPrefix;if(xt){var n=Fe,i=$e;n=(i&~(1<<32-Se(i)-1)).toString(32)+n,e="_"+e+"R_"+n,n=yl++,0<n&&(e+="H"+n.toString(32)),e+="_"}else n=Lv++,e="_"+e+"r_"+n.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:Fo,useFormState:mh,useActionState:mh,useOptimistic:function(t){var e=ce();e.memoizedState=e.baseState=t;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=n,e=Po.bind(null,dt,!0,n),n.dispatch=e,[t,e]},useMemoCache:qo,useCacheRefresh:function(){return ce().memoizedState=Xv.bind(null,dt)},useEffectEvent:function(t){var e=ce(),n={impl:t};return e.memoizedState=n,function(){if((Tt&2)!==0)throw Error(o(440));return n.impl.apply(void 0,arguments)}}},Wo={readContext:ee,use:xl,useCallback:Nh,useContext:ee,useEffect:Qo,useImperativeHandle:Mh,useInsertionEffect:jh,useLayoutEffect:Th,useMemo:Ah,useReducer:bl,useRef:xh,useState:function(){return bl(un)},useDebugValue:Zo,useDeferredValue:function(t,e){var n=qt();return kh(n,At.memoizedState,t,e)},useTransition:function(){var t=bl(un)[0],e=qt().memoizedState;return[typeof t=="boolean"?t:Ji(t),e]},useSyncExternalStore:ah,useId:Dh,useHostTransitionStatus:Fo,useFormState:gh,useActionState:gh,useOptimistic:function(t,e){var n=qt();return ch(n,At,t,e)},useMemoCache:qo,useCacheRefresh:_h};Wo.useEffectEvent=Sh;var Lh={readContext:ee,use:xl,useCallback:Nh,useContext:ee,useEffect:Qo,useImperativeHandle:Mh,useInsertionEffect:jh,useLayoutEffect:Th,useMemo:Ah,useReducer:Go,useRef:xh,useState:function(){return Go(un)},useDebugValue:Zo,useDeferredValue:function(t,e){var n=qt();return At===null?Jo(n,t,e):kh(n,At.memoizedState,t,e)},useTransition:function(){var t=Go(un)[0],e=qt().memoizedState;return[typeof t=="boolean"?t:Ji(t),e]},useSyncExternalStore:ah,useId:Dh,useHostTransitionStatus:Fo,useFormState:vh,useActionState:vh,useOptimistic:function(t,e){var n=qt();return At!==null?ch(n,At,t,e):(n.baseState=t,[t,n.queue.dispatch])},useMemoCache:qo,useCacheRefresh:_h};Lh.useEffectEvent=Sh;function Io(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:b({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var tc={enqueueSetState:function(t,e,n){t=t._reactInternals;var i=ke(),r=Cn(i);r.payload=e,n!=null&&(r.callback=n),e=Dn(t,r,i),e!==null&&(ve(e,t,i),Xi(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=ke(),r=Cn(i);r.tag=1,r.payload=e,n!=null&&(r.callback=n),e=Dn(t,r,i),e!==null&&(ve(e,t,i),Xi(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ke(),i=Cn(n);i.tag=2,e!=null&&(i.callback=e),e=Dn(t,i,n),e!==null&&(ve(e,t,n),Xi(e,t,n))}};function Bh(t,e,n,i,r,c,p){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,c,p):e.prototype&&e.prototype.isPureReactComponent?!Vi(n,i)||!Vi(r,c):!0}function Hh(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&tc.enqueueReplaceState(e,e.state,null)}function ma(t,e){var n=e;if("ref"in e){n={};for(var i in e)i!=="ref"&&(n[i]=e[i])}if(t=t.defaultProps){n===e&&(n=b({},n));for(var r in t)n[r]===void 0&&(n[r]=t[r])}return n}function qh(t){el(t)}function Yh(t){console.error(t)}function Gh(t){el(t)}function wl(t,e){try{var n=t.onUncaughtError;n(e.value,{componentStack:e.stack})}catch(i){setTimeout(function(){throw i})}}function Xh(t,e,n){try{var i=t.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function ec(t,e,n){return n=Cn(n),n.tag=3,n.payload={element:null},n.callback=function(){wl(t,e)},n}function Kh(t){return t=Cn(t),t.tag=3,t}function Qh(t,e,n,i){var r=n.type.getDerivedStateFromError;if(typeof r=="function"){var c=i.value;t.payload=function(){return r(c)},t.callback=function(){Xh(e,n,i)}}var p=n.stateNode;p!==null&&typeof p.componentDidCatch=="function"&&(t.callback=function(){Xh(e,n,i),typeof r!="function"&&(Ln===null?Ln=new Set([this]):Ln.add(this));var v=i.stack;this.componentDidCatch(i.value,{componentStack:v!==null?v:""})})}function Qv(t,e,n,i,r){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(e=n.alternate,e!==null&&Ya(e,n,r,!0),n=we.current,n!==null){switch(n.tag){case 31:case 13:return Ve===null?Vl():n.alternate===null&&Ut===0&&(Ut=3),n.flags&=-257,n.flags|=65536,n.lanes=r,i===dl?n.flags|=16384:(e=n.updateQueue,e===null?n.updateQueue=new Set([i]):e.add(i),Nc(t,i,r)),!1;case 22:return n.flags|=65536,i===dl?n.flags|=16384:(e=n.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=e):(n=e.retryQueue,n===null?e.retryQueue=new Set([i]):n.add(i)),Nc(t,i,r)),!1}throw Error(o(435,n.tag))}return Nc(t,i,r),Vl(),!1}if(xt)return e=we.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=r,i!==bo&&(t=Error(o(422),{cause:i}),Bi(De(t,n)))):(i!==bo&&(e=Error(o(423),{cause:i}),Bi(De(e,n))),t=t.current.alternate,t.flags|=65536,r&=-r,t.lanes|=r,i=De(i,n),r=ec(t.stateNode,i,r),Co(t,r),Ut!==4&&(Ut=2)),!1;var c=Error(o(520),{cause:i});if(c=De(c,n),is===null?is=[c]:is.push(c),Ut!==4&&(Ut=2),e===null)return!0;i=De(i,n),n=e;do{switch(n.tag){case 3:return n.flags|=65536,t=r&-r,n.lanes|=t,t=ec(n.stateNode,i,t),Co(n,t),!1;case 1:if(e=n.type,c=n.stateNode,(n.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(Ln===null||!Ln.has(c))))return n.flags|=65536,r&=-r,n.lanes|=r,r=Kh(r),Qh(r,t,n,i),Co(n,r),!1}n=n.return}while(n!==null);return!1}var nc=Error(o(461)),Xt=!1;function ne(t,e,n,i){e.child=t===null?Ff(e,null,n,i):ha(e,t.child,n,i)}function Zh(t,e,n,i,r){n=n.render;var c=e.ref;if("ref"in i){var p={};for(var v in i)v!=="ref"&&(p[v]=i[v])}else p=i;return ca(e),i=Uo(t,e,n,p,c,r),v=Lo(),t!==null&&!Xt?(Bo(t,e,r),dn(t,e,r)):(xt&&v&&vo(e),e.flags|=1,ne(t,e,i,r),e.child)}function Jh(t,e,n,i,r){if(t===null){var c=n.type;return typeof c=="function"&&!mo(c)&&c.defaultProps===void 0&&n.compare===null?(e.tag=15,e.type=c,$h(t,e,c,i,r)):(t=sl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(c=t.child,!uc(t,r)){var p=c.memoizedProps;if(n=n.compare,n=n!==null?n:Vi,n(p,i)&&t.ref===e.ref)return dn(t,e,r)}return e.flags|=1,t=sn(c,i),t.ref=e.ref,t.return=e,e.child=t}function $h(t,e,n,i,r){if(t!==null){var c=t.memoizedProps;if(Vi(c,i)&&t.ref===e.ref)if(Xt=!1,e.pendingProps=i=c,uc(t,r))(t.flags&131072)!==0&&(Xt=!0);else return e.lanes=t.lanes,dn(t,e,r)}return ac(t,e,n,i,r)}function Fh(t,e,n,i){var r=i.children,c=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((e.flags&128)!==0){if(c=c!==null?c.baseLanes|n:n,t!==null){for(i=e.child=t.child,r=0;i!==null;)r=r|i.lanes|i.childLanes,i=i.sibling;i=r&~c}else i=0,e.child=null;return Ph(t,e,c,n,i)}if((n&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&cl(e,c!==null?c.cachePool:null),c!==null?If(e,c):_o(),th(e);else return i=e.lanes=536870912,Ph(t,e,c!==null?c.baseLanes|n:n,n,i)}else c!==null?(cl(e,c.cachePool),If(e,c),Rn(),e.memoizedState=null):(t!==null&&cl(e,null),_o(),Rn());return ne(t,e,r,n),e.child}function Pi(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function Ph(t,e,n,i,r){var c=Ao();return c=c===null?null:{parent:Yt._currentValue,pool:c},e.memoizedState={baseLanes:n,cachePool:c},t!==null&&cl(e,null),_o(),th(e),t!==null&&Ya(t,e,i,!0),e.childLanes=r,null}function Ml(t,e){return e=Al({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function Wh(t,e,n){return ha(e,t.child,null,n),t=Ml(e,e.pendingProps),t.flags|=2,Me(e),e.memoizedState=null,t}function Zv(t,e,n){var i=e.pendingProps,r=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(xt){if(i.mode==="hidden")return t=Ml(e,i),e.lanes=536870912,Pi(null,t);if(Oo(e),(t=Ct)?(t=um(t,Oe),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:Nn!==null?{id:$e,overflow:Fe}:null,retryLane:536870912,hydrationErrors:null},n=Of(t),n.return=e,e.child=n,te=e,Ct=null)):t=null,t===null)throw kn(e);return e.lanes=536870912,null}return Ml(e,i)}var c=t.memoizedState;if(c!==null){var p=c.dehydrated;if(Oo(e),r)if(e.flags&256)e.flags&=-257,e=Wh(t,e,n);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(o(558));else if(Xt||Ya(t,e,n,!1),r=(n&t.childLanes)!==0,Xt||r){if(i=Et,i!==null&&(p=qd(i,n),p!==0&&p!==c.retryLane))throw c.retryLane=p,sa(t,p),ve(i,t,p),nc;Vl(),e=Wh(t,e,n)}else t=c.treeContext,Ct=Ue(p.nextSibling),te=e,xt=!0,An=null,Oe=!1,t!==null&&Lf(e,t),e=Ml(e,i),e.flags|=4096;return e}return t=sn(t.child,{mode:i.mode,children:i.children}),t.ref=e.ref,e.child=t,t.return=e,t}function Nl(t,e){var n=e.ref;if(n===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(o(284));(t===null||t.ref!==n)&&(e.flags|=4194816)}}function ac(t,e,n,i,r){return ca(e),n=Uo(t,e,n,i,void 0,r),i=Lo(),t!==null&&!Xt?(Bo(t,e,r),dn(t,e,r)):(xt&&i&&vo(e),e.flags|=1,ne(t,e,n,r),e.child)}function Ih(t,e,n,i,r,c){return ca(e),e.updateQueue=null,n=nh(e,i,n,r),eh(t),i=Lo(),t!==null&&!Xt?(Bo(t,e,c),dn(t,e,c)):(xt&&i&&vo(e),e.flags|=1,ne(t,e,n,c),e.child)}function tp(t,e,n,i,r){if(ca(e),e.stateNode===null){var c=La,p=n.contextType;typeof p=="object"&&p!==null&&(c=ee(p)),c=new n(i,c),e.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=tc,e.stateNode=c,c._reactInternals=e,c=e.stateNode,c.props=i,c.state=e.memoizedState,c.refs={},zo(e),p=n.contextType,c.context=typeof p=="object"&&p!==null?ee(p):La,c.state=e.memoizedState,p=n.getDerivedStateFromProps,typeof p=="function"&&(Io(e,n,p,i),c.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(p=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),p!==c.state&&tc.enqueueReplaceState(c,c.state,null),Qi(e,i,c,r),Ki(),c.state=e.memoizedState),typeof c.componentDidMount=="function"&&(e.flags|=4194308),i=!0}else if(t===null){c=e.stateNode;var v=e.memoizedProps,S=ma(n,v);c.props=S;var A=c.context,_=n.contextType;p=La,typeof _=="object"&&_!==null&&(p=ee(_));var V=n.getDerivedStateFromProps;_=typeof V=="function"||typeof c.getSnapshotBeforeUpdate=="function",v=e.pendingProps!==v,_||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(v||A!==p)&&Hh(e,c,i,p),En=!1;var z=e.memoizedState;c.state=z,Qi(e,i,c,r),Ki(),A=e.memoizedState,v||z!==A||En?(typeof V=="function"&&(Io(e,n,V,i),A=e.memoizedState),(S=En||Bh(e,n,S,i,z,A,p))?(_||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(e.flags|=4194308)):(typeof c.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=A),c.props=i,c.state=A,c.context=p,i=S):(typeof c.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{c=e.stateNode,Eo(t,e),p=e.memoizedProps,_=ma(n,p),c.props=_,V=e.pendingProps,z=c.context,A=n.contextType,S=La,typeof A=="object"&&A!==null&&(S=ee(A)),v=n.getDerivedStateFromProps,(A=typeof v=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(p!==V||z!==S)&&Hh(e,c,i,S),En=!1,z=e.memoizedState,c.state=z,Qi(e,i,c,r),Ki();var E=e.memoizedState;p!==V||z!==E||En||t!==null&&t.dependencies!==null&&rl(t.dependencies)?(typeof v=="function"&&(Io(e,n,v,i),E=e.memoizedState),(_=En||Bh(e,n,_,i,z,E,S)||t!==null&&t.dependencies!==null&&rl(t.dependencies))?(A||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(i,E,S),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(i,E,S)),typeof c.componentDidUpdate=="function"&&(e.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof c.componentDidUpdate!="function"||p===t.memoizedProps&&z===t.memoizedState||(e.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||p===t.memoizedProps&&z===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=E),c.props=i,c.state=E,c.context=S,i=_):(typeof c.componentDidUpdate!="function"||p===t.memoizedProps&&z===t.memoizedState||(e.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||p===t.memoizedProps&&z===t.memoizedState||(e.flags|=1024),i=!1)}return c=i,Nl(t,e),i=(e.flags&128)!==0,c||i?(c=e.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:c.render(),e.flags|=1,t!==null&&i?(e.child=ha(e,t.child,null,r),e.child=ha(e,null,n,r)):ne(t,e,n,r),e.memoizedState=c.state,t=e.child):t=dn(t,e,r),t}function ep(t,e,n,i){return ra(),e.flags|=256,ne(t,e,n,i),e.child}var ic={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function sc(t){return{baseLanes:t,cachePool:Xf()}}function lc(t,e,n){return t=t!==null?t.childLanes&~n:0,e&&(t|=Ae),t}function np(t,e,n){var i=e.pendingProps,r=!1,c=(e.flags&128)!==0,p;if((p=c)||(p=t!==null&&t.memoizedState===null?!1:(Ht.current&2)!==0),p&&(r=!0,e.flags&=-129),p=(e.flags&32)!==0,e.flags&=-33,t===null){if(xt){if(r?_n(e):Rn(),(t=Ct)?(t=um(t,Oe),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:Nn!==null?{id:$e,overflow:Fe}:null,retryLane:536870912,hydrationErrors:null},n=Of(t),n.return=e,e.child=n,te=e,Ct=null)):t=null,t===null)throw kn(e);return Yc(t)?e.lanes=32:e.lanes=536870912,null}var v=i.children;return i=i.fallback,r?(Rn(),r=e.mode,v=Al({mode:"hidden",children:v},r),i=la(i,r,n,null),v.return=e,i.return=e,v.sibling=i,e.child=v,i=e.child,i.memoizedState=sc(n),i.childLanes=lc(t,p,n),e.memoizedState=ic,Pi(null,i)):(_n(e),rc(e,v))}var S=t.memoizedState;if(S!==null&&(v=S.dehydrated,v!==null)){if(c)e.flags&256?(_n(e),e.flags&=-257,e=oc(t,e,n)):e.memoizedState!==null?(Rn(),e.child=t.child,e.flags|=128,e=null):(Rn(),v=i.fallback,r=e.mode,i=Al({mode:"visible",children:i.children},r),v=la(v,r,n,null),v.flags|=2,i.return=e,v.return=e,i.sibling=v,e.child=i,ha(e,t.child,null,n),i=e.child,i.memoizedState=sc(n),i.childLanes=lc(t,p,n),e.memoizedState=ic,e=Pi(null,i));else if(_n(e),Yc(v)){if(p=v.nextSibling&&v.nextSibling.dataset,p)var A=p.dgst;p=A,i=Error(o(419)),i.stack="",i.digest=p,Bi({value:i,source:null,stack:null}),e=oc(t,e,n)}else if(Xt||Ya(t,e,n,!1),p=(n&t.childLanes)!==0,Xt||p){if(p=Et,p!==null&&(i=qd(p,n),i!==0&&i!==S.retryLane))throw S.retryLane=i,sa(t,i),ve(p,t,i),nc;qc(v)||Vl(),e=oc(t,e,n)}else qc(v)?(e.flags|=192,e.child=t.child,e=null):(t=S.treeContext,Ct=Ue(v.nextSibling),te=e,xt=!0,An=null,Oe=!1,t!==null&&Lf(e,t),e=rc(e,i.children),e.flags|=4096);return e}return r?(Rn(),v=i.fallback,r=e.mode,S=t.child,A=S.sibling,i=sn(S,{mode:"hidden",children:i.children}),i.subtreeFlags=S.subtreeFlags&65011712,A!==null?v=sn(A,v):(v=la(v,r,n,null),v.flags|=2),v.return=e,i.return=e,i.sibling=v,e.child=i,Pi(null,i),i=e.child,v=t.child.memoizedState,v===null?v=sc(n):(r=v.cachePool,r!==null?(S=Yt._currentValue,r=r.parent!==S?{parent:S,pool:S}:r):r=Xf(),v={baseLanes:v.baseLanes|n,cachePool:r}),i.memoizedState=v,i.childLanes=lc(t,p,n),e.memoizedState=ic,Pi(t.child,i)):(_n(e),n=t.child,t=n.sibling,n=sn(n,{mode:"visible",children:i.children}),n.return=e,n.sibling=null,t!==null&&(p=e.deletions,p===null?(e.deletions=[t],e.flags|=16):p.push(t)),e.child=n,e.memoizedState=null,n)}function rc(t,e){return e=Al({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function Al(t,e){return t=Te(22,t,null,e),t.lanes=0,t}function oc(t,e,n){return ha(e,t.child,null,n),t=rc(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function ap(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),To(t.return,e,n)}function cc(t,e,n,i,r,c){var p=t.memoizedState;p===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r,treeForkCount:c}:(p.isBackwards=e,p.rendering=null,p.renderingStartTime=0,p.last=i,p.tail=n,p.tailMode=r,p.treeForkCount=c)}function ip(t,e,n){var i=e.pendingProps,r=i.revealOrder,c=i.tail;i=i.children;var p=Ht.current,v=(p&2)!==0;if(v?(p=p&1|2,e.flags|=128):p&=1,Z(Ht,p),ne(t,e,i,n),i=xt?Li:0,!v&&t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&ap(t,n,e);else if(t.tag===19)ap(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&ml(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),cc(e,!1,r,n,c,i);break;case"backwards":case"unstable_legacy-backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&ml(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}cc(e,!0,n,null,c,i);break;case"together":cc(e,!1,null,null,void 0,i);break;default:e.memoizedState=null}return e.child}function dn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Un|=e.lanes,(n&e.childLanes)===0)if(t!==null){if(Ya(t,e,n,!1),(n&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(o(153));if(e.child!==null){for(t=e.child,n=sn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=sn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function uc(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&rl(t)))}function Jv(t,e,n){switch(e.tag){case 3:oe(e,e.stateNode.containerInfo),zn(e,Yt,t.memoizedState.cache),ra();break;case 27:case 5:Ti(e);break;case 4:oe(e,e.stateNode.containerInfo);break;case 10:zn(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,Oo(e),null;break;case 13:var i=e.memoizedState;if(i!==null)return i.dehydrated!==null?(_n(e),e.flags|=128,null):(n&e.child.childLanes)!==0?np(t,e,n):(_n(e),t=dn(t,e,n),t!==null?t.sibling:null);_n(e);break;case 19:var r=(t.flags&128)!==0;if(i=(n&e.childLanes)!==0,i||(Ya(t,e,n,!1),i=(n&e.childLanes)!==0),r){if(i)return ip(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Z(Ht,Ht.current),i)break;return null;case 22:return e.lanes=0,Fh(t,e,n,e.pendingProps);case 24:zn(e,Yt,t.memoizedState.cache)}return dn(t,e,n)}function sp(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps)Xt=!0;else{if(!uc(t,n)&&(e.flags&128)===0)return Xt=!1,Jv(t,e,n);Xt=(t.flags&131072)!==0}else Xt=!1,xt&&(e.flags&1048576)!==0&&Uf(e,Li,e.index);switch(e.lanes=0,e.tag){case 16:t:{var i=e.pendingProps;if(t=da(e.elementType),e.type=t,typeof t=="function")mo(t)?(i=ma(t,i),e.tag=1,e=tp(null,e,t,i,n)):(e.tag=0,e=ac(null,e,t,i,n));else{if(t!=null){var r=t.$$typeof;if(r===H){e.tag=11,e=Zh(null,e,t,i,n);break t}else if(r===$){e.tag=14,e=Jh(null,e,t,i,n);break t}}throw e=$t(t)||t,Error(o(306,e,""))}}return e;case 0:return ac(t,e,e.type,e.pendingProps,n);case 1:return i=e.type,r=ma(i,e.pendingProps),tp(t,e,i,r,n);case 3:t:{if(oe(e,e.stateNode.containerInfo),t===null)throw Error(o(387));i=e.pendingProps;var c=e.memoizedState;r=c.element,Eo(t,e),Qi(e,i,null,n);var p=e.memoizedState;if(i=p.cache,zn(e,Yt,i),i!==c.cache&&wo(e,[Yt],n,!0),Ki(),i=p.element,c.isDehydrated)if(c={element:i,isDehydrated:!1,cache:p.cache},e.updateQueue.baseState=c,e.memoizedState=c,e.flags&256){e=ep(t,e,i,n);break t}else if(i!==r){r=De(Error(o(424)),e),Bi(r),e=ep(t,e,i,n);break t}else for(t=e.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,Ct=Ue(t.firstChild),te=e,xt=!0,An=null,Oe=!0,n=Ff(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ra(),i===r){e=dn(t,e,n);break t}ne(t,e,i,n)}e=e.child}return e;case 26:return Nl(t,e),t===null?(n=gm(e.type,null,e.pendingProps,null))?e.memoizedState=n:xt||(n=e.type,t=e.pendingProps,i=Gl(pt.current).createElement(n),i[It]=e,i[fe]=t,ae(i,n,t),Pt(i),e.stateNode=i):e.memoizedState=gm(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return Ti(e),t===null&&xt&&(i=e.stateNode=hm(e.type,e.pendingProps,pt.current),te=e,Oe=!0,r=Ct,Yn(e.type)?(Gc=r,Ct=Ue(i.firstChild)):Ct=r),ne(t,e,e.pendingProps.children,n),Nl(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&xt&&((r=i=Ct)&&(i=wx(i,e.type,e.pendingProps,Oe),i!==null?(e.stateNode=i,te=e,Ct=Ue(i.firstChild),Oe=!1,r=!0):r=!1),r||kn(e)),Ti(e),r=e.type,c=e.pendingProps,p=t!==null?t.memoizedProps:null,i=c.children,Lc(r,c)?i=null:p!==null&&Lc(r,p)&&(e.flags|=32),e.memoizedState!==null&&(r=Uo(t,e,Bv,null,null,n),fs._currentValue=r),Nl(t,e),ne(t,e,i,n),e.child;case 6:return t===null&&xt&&((t=n=Ct)&&(n=Mx(n,e.pendingProps,Oe),n!==null?(e.stateNode=n,te=e,Ct=null,t=!0):t=!1),t||kn(e)),null;case 13:return np(t,e,n);case 4:return oe(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=ha(e,null,i,n):ne(t,e,i,n),e.child;case 11:return Zh(t,e,e.type,e.pendingProps,n);case 7:return ne(t,e,e.pendingProps,n),e.child;case 8:return ne(t,e,e.pendingProps.children,n),e.child;case 12:return ne(t,e,e.pendingProps.children,n),e.child;case 10:return i=e.pendingProps,zn(e,e.type,i.value),ne(t,e,i.children,n),e.child;case 9:return r=e.type._context,i=e.pendingProps.children,ca(e),r=ee(r),i=i(r),e.flags|=1,ne(t,e,i,n),e.child;case 14:return Jh(t,e,e.type,e.pendingProps,n);case 15:return $h(t,e,e.type,e.pendingProps,n);case 19:return ip(t,e,n);case 31:return Zv(t,e,n);case 22:return Fh(t,e,n,e.pendingProps);case 24:return ca(e),i=ee(Yt),t===null?(r=Ao(),r===null&&(r=Et,c=Mo(),r.pooledCache=c,c.refCount++,c!==null&&(r.pooledCacheLanes|=n),r=c),e.memoizedState={parent:i,cache:r},zo(e),zn(e,Yt,r)):((t.lanes&n)!==0&&(Eo(t,e),Qi(e,null,null,n),Ki()),r=t.memoizedState,c=e.memoizedState,r.parent!==i?(r={parent:i,cache:i},e.memoizedState=r,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=r),zn(e,Yt,i)):(i=c.cache,zn(e,Yt,i),i!==r.cache&&wo(e,[Yt],n,!0))),ne(t,e,e.pendingProps.children,n),e.child;case 29:throw e.pendingProps}throw Error(o(156,e.tag))}function fn(t){t.flags|=4}function dc(t,e,n,i,r){if((e=(t.mode&32)!==0)&&(e=!1),e){if(t.flags|=16777216,(r&335544128)===r)if(t.stateNode.complete)t.flags|=8192;else if(Dp())t.flags|=8192;else throw fa=dl,ko}else t.flags&=-16777217}function lp(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Sm(e))if(Dp())t.flags|=8192;else throw fa=dl,ko}function kl(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?Ld():536870912,t.lanes|=e,ti|=e)}function Wi(t,e){if(!xt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Dt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&65011712,i|=r.flags&65011712,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function $v(t,e,n){var i=e.pendingProps;switch(xo(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Dt(e),null;case 1:return Dt(e),null;case 3:return n=e.stateNode,i=null,t!==null&&(i=t.memoizedState.cache),e.memoizedState.cache!==i&&(e.flags|=2048),on(Yt),Bt(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(t===null||t.child===null)&&(qa(e)?fn(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,So())),Dt(e),null;case 26:var r=e.type,c=e.memoizedState;return t===null?(fn(e),c!==null?(Dt(e),lp(e,c)):(Dt(e),dc(e,r,null,i,n))):c?c!==t.memoizedState?(fn(e),Dt(e),lp(e,c)):(Dt(e),e.flags&=-16777217):(t=t.memoizedProps,t!==i&&fn(e),Dt(e),dc(e,r,t,i,n)),null;case 27:if(Bs(e),n=pt.current,r=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==i&&fn(e);else{if(!i){if(e.stateNode===null)throw Error(o(166));return Dt(e),null}t=tt.current,qa(e)?Bf(e):(t=hm(r,i,n),e.stateNode=t,fn(e))}return Dt(e),null;case 5:if(Bs(e),r=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==i&&fn(e);else{if(!i){if(e.stateNode===null)throw Error(o(166));return Dt(e),null}if(c=tt.current,qa(e))Bf(e);else{var p=Gl(pt.current);switch(c){case 1:c=p.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:c=p.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":c=p.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":c=p.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":c=p.createElement("div"),c.innerHTML="<script><\/script>",c=c.removeChild(c.firstChild);break;case"select":c=typeof i.is=="string"?p.createElement("select",{is:i.is}):p.createElement("select"),i.multiple?c.multiple=!0:i.size&&(c.size=i.size);break;default:c=typeof i.is=="string"?p.createElement(r,{is:i.is}):p.createElement(r)}}c[It]=e,c[fe]=i;t:for(p=e.child;p!==null;){if(p.tag===5||p.tag===6)c.appendChild(p.stateNode);else if(p.tag!==4&&p.tag!==27&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break t;for(;p.sibling===null;){if(p.return===null||p.return===e)break t;p=p.return}p.sibling.return=p.return,p=p.sibling}e.stateNode=c;t:switch(ae(c,r,i),r){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break t;case"img":i=!0;break t;default:i=!1}i&&fn(e)}}return Dt(e),dc(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,n),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==i&&fn(e);else{if(typeof i!="string"&&e.stateNode===null)throw Error(o(166));if(t=pt.current,qa(e)){if(t=e.stateNode,n=e.memoizedProps,i=null,r=te,r!==null)switch(r.tag){case 27:case 5:i=r.memoizedProps}t[It]=e,t=!!(t.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||nm(t.nodeValue,n)),t||kn(e,!0)}else t=Gl(t).createTextNode(i),t[It]=e,e.stateNode=t}return Dt(e),null;case 31:if(n=e.memoizedState,t===null||t.memoizedState!==null){if(i=qa(e),n!==null){if(t===null){if(!i)throw Error(o(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(o(557));t[It]=e}else ra(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Dt(e),t=!1}else n=So(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=n),t=!0;if(!t)return e.flags&256?(Me(e),e):(Me(e),null);if((e.flags&128)!==0)throw Error(o(558))}return Dt(e),null;case 13:if(i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(r=qa(e),i!==null&&i.dehydrated!==null){if(t===null){if(!r)throw Error(o(318));if(r=e.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(o(317));r[It]=e}else ra(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Dt(e),r=!1}else r=So(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=r),r=!0;if(!r)return e.flags&256?(Me(e),e):(Me(e),null)}return Me(e),(e.flags&128)!==0?(e.lanes=n,e):(n=i!==null,t=t!==null&&t.memoizedState!==null,n&&(i=e.child,r=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(r=i.alternate.memoizedState.cachePool.pool),c=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(c=i.memoizedState.cachePool.pool),c!==r&&(i.flags|=2048)),n!==t&&n&&(e.child.flags|=8192),kl(e,e.updateQueue),Dt(e),null);case 4:return Bt(),t===null&&_c(e.stateNode.containerInfo),Dt(e),null;case 10:return on(e.type),Dt(e),null;case 19:if(O(Ht),i=e.memoizedState,i===null)return Dt(e),null;if(r=(e.flags&128)!==0,c=i.rendering,c===null)if(r)Wi(i,!1);else{if(Ut!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(c=ml(t),c!==null){for(e.flags|=128,Wi(i,!1),t=c.updateQueue,e.updateQueue=t,kl(e,t),e.subtreeFlags=0,t=n,n=e.child;n!==null;)Rf(n,t),n=n.sibling;return Z(Ht,Ht.current&1|2),xt&&ln(e,i.treeForkCount),e.child}t=t.sibling}i.tail!==null&&xe()>_l&&(e.flags|=128,r=!0,Wi(i,!1),e.lanes=4194304)}else{if(!r)if(t=ml(c),t!==null){if(e.flags|=128,r=!0,t=t.updateQueue,e.updateQueue=t,kl(e,t),Wi(i,!0),i.tail===null&&i.tailMode==="hidden"&&!c.alternate&&!xt)return Dt(e),null}else 2*xe()-i.renderingStartTime>_l&&n!==536870912&&(e.flags|=128,r=!0,Wi(i,!1),e.lanes=4194304);i.isBackwards?(c.sibling=e.child,e.child=c):(t=i.last,t!==null?t.sibling=c:e.child=c,i.last=c)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=xe(),t.sibling=null,n=Ht.current,Z(Ht,r?n&1|2:n&1),xt&&ln(e,i.treeForkCount),t):(Dt(e),null);case 22:case 23:return Me(e),Ro(),i=e.memoizedState!==null,t!==null?t.memoizedState!==null!==i&&(e.flags|=8192):i&&(e.flags|=8192),i?(n&536870912)!==0&&(e.flags&128)===0&&(Dt(e),e.subtreeFlags&6&&(e.flags|=8192)):Dt(e),n=e.updateQueue,n!==null&&kl(e,n.retryQueue),n=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),i=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(i=e.memoizedState.cachePool.pool),i!==n&&(e.flags|=2048),t!==null&&O(ua),null;case 24:return n=null,t!==null&&(n=t.memoizedState.cache),e.memoizedState.cache!==n&&(e.flags|=2048),on(Yt),Dt(e),null;case 25:return null;case 30:return null}throw Error(o(156,e.tag))}function Fv(t,e){switch(xo(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return on(Yt),Bt(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return Bs(e),null;case 31:if(e.memoizedState!==null){if(Me(e),e.alternate===null)throw Error(o(340));ra()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(Me(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(o(340));ra()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return O(Ht),null;case 4:return Bt(),null;case 10:return on(e.type),null;case 22:case 23:return Me(e),Ro(),t!==null&&O(ua),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return on(Yt),null;case 25:return null;default:return null}}function rp(t,e){switch(xo(e),e.tag){case 3:on(Yt),Bt();break;case 26:case 27:case 5:Bs(e);break;case 4:Bt();break;case 31:e.memoizedState!==null&&Me(e);break;case 13:Me(e);break;case 19:O(Ht);break;case 10:on(e.type);break;case 22:case 23:Me(e),Ro(),t!==null&&O(ua);break;case 24:on(Yt)}}function Ii(t,e){try{var n=e.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var r=i.next;n=r;do{if((n.tag&t)===t){i=void 0;var c=n.create,p=n.inst;i=c(),p.destroy=i}n=n.next}while(n!==r)}}catch(v){Nt(e,e.return,v)}}function On(t,e,n){try{var i=e.updateQueue,r=i!==null?i.lastEffect:null;if(r!==null){var c=r.next;i=c;do{if((i.tag&t)===t){var p=i.inst,v=p.destroy;if(v!==void 0){p.destroy=void 0,r=e;var S=n,A=v;try{A()}catch(_){Nt(r,S,_)}}}i=i.next}while(i!==c)}}catch(_){Nt(e,e.return,_)}}function op(t){var e=t.updateQueue;if(e!==null){var n=t.stateNode;try{Wf(e,n)}catch(i){Nt(t,t.return,i)}}}function cp(t,e,n){n.props=ma(t.type,t.memoizedProps),n.state=t.memoizedState;try{n.componentWillUnmount()}catch(i){Nt(t,e,i)}}function ts(t,e){try{var n=t.ref;if(n!==null){switch(t.tag){case 26:case 27:case 5:var i=t.stateNode;break;case 30:i=t.stateNode;break;default:i=t.stateNode}typeof n=="function"?t.refCleanup=n(i):n.current=i}}catch(r){Nt(t,e,r)}}function Pe(t,e){var n=t.ref,i=t.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(r){Nt(t,e,r)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(r){Nt(t,e,r)}else n.current=null}function up(t){var e=t.type,n=t.memoizedProps,i=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break t;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(r){Nt(t,t.return,r)}}function fc(t,e,n){try{var i=t.stateNode;vx(i,t.type,n,e),i[fe]=e}catch(r){Nt(t,t.return,r)}}function dp(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Yn(t.type)||t.tag===4}function hc(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||dp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Yn(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function pc(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(t,e):(e=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,e.appendChild(t),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=nn));else if(i!==4&&(i===27&&Yn(t.type)&&(n=t.stateNode,e=null),t=t.child,t!==null))for(pc(t,e,n),t=t.sibling;t!==null;)pc(t,e,n),t=t.sibling}function zl(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(i===27&&Yn(t.type)&&(n=t.stateNode),t=t.child,t!==null))for(zl(t,e,n),t=t.sibling;t!==null;)zl(t,e,n),t=t.sibling}function fp(t){var e=t.stateNode,n=t.memoizedProps;try{for(var i=t.type,r=e.attributes;r.length;)e.removeAttributeNode(r[0]);ae(e,i,n),e[It]=t,e[fe]=n}catch(c){Nt(t,t.return,c)}}var hn=!1,Kt=!1,mc=!1,hp=typeof WeakSet=="function"?WeakSet:Set,Wt=null;function Pv(t,e){if(t=t.containerInfo,Vc=Fl,t=Mf(t),ro(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else t:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,c=i.focusNode;i=i.focusOffset;try{n.nodeType,c.nodeType}catch{n=null;break t}var p=0,v=-1,S=-1,A=0,_=0,V=t,z=null;e:for(;;){for(var E;V!==n||r!==0&&V.nodeType!==3||(v=p+r),V!==c||i!==0&&V.nodeType!==3||(S=p+i),V.nodeType===3&&(p+=V.nodeValue.length),(E=V.firstChild)!==null;)z=V,V=E;for(;;){if(V===t)break e;if(z===n&&++A===r&&(v=p),z===c&&++_===i&&(S=p),(E=V.nextSibling)!==null)break;V=z,z=V.parentNode}V=E}n=v===-1||S===-1?null:{start:v,end:S}}else n=null}n=n||{start:0,end:0}}else n=null;for(Uc={focusedElem:t,selectionRange:n},Fl=!1,Wt=e;Wt!==null;)if(e=Wt,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Wt=t;else for(;Wt!==null;){switch(e=Wt,c=e.alternate,t=e.flags,e.tag){case 0:if((t&4)!==0&&(t=e.updateQueue,t=t!==null?t.events:null,t!==null))for(n=0;n<t.length;n++)r=t[n],r.ref.impl=r.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&c!==null){t=void 0,n=e,r=c.memoizedProps,c=c.memoizedState,i=n.stateNode;try{var W=ma(n.type,r);t=i.getSnapshotBeforeUpdate(W,c),i.__reactInternalSnapshotBeforeUpdate=t}catch(rt){Nt(n,n.return,rt)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,n=t.nodeType,n===9)Hc(t);else if(n===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Hc(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(o(163))}if(t=e.sibling,t!==null){t.return=e.return,Wt=t;break}Wt=e.return}}function pp(t,e,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:mn(t,n),i&4&&Ii(5,n);break;case 1:if(mn(t,n),i&4)if(t=n.stateNode,e===null)try{t.componentDidMount()}catch(p){Nt(n,n.return,p)}else{var r=ma(n.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(r,e,t.__reactInternalSnapshotBeforeUpdate)}catch(p){Nt(n,n.return,p)}}i&64&&op(n),i&512&&ts(n,n.return);break;case 3:if(mn(t,n),i&64&&(t=n.updateQueue,t!==null)){if(e=null,n.child!==null)switch(n.child.tag){case 27:case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}try{Wf(t,e)}catch(p){Nt(n,n.return,p)}}break;case 27:e===null&&i&4&&fp(n);case 26:case 5:mn(t,n),e===null&&i&4&&up(n),i&512&&ts(n,n.return);break;case 12:mn(t,n);break;case 31:mn(t,n),i&4&&yp(t,n);break;case 13:mn(t,n),i&4&&vp(t,n),i&64&&(t=n.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(n=lx.bind(null,n),Nx(t,n))));break;case 22:if(i=n.memoizedState!==null||hn,!i){e=e!==null&&e.memoizedState!==null||Kt,r=hn;var c=Kt;hn=i,(Kt=e)&&!c?gn(t,n,(n.subtreeFlags&8772)!==0):mn(t,n),hn=r,Kt=c}break;case 30:break;default:mn(t,n)}}function mp(t){var e=t.alternate;e!==null&&(t.alternate=null,mp(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&Xr(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Rt=null,pe=!1;function pn(t,e,n){for(n=n.child;n!==null;)gp(t,e,n),n=n.sibling}function gp(t,e,n){if(be&&typeof be.onCommitFiberUnmount=="function")try{be.onCommitFiberUnmount(wi,n)}catch{}switch(n.tag){case 26:Kt||Pe(n,e),pn(t,e,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Kt||Pe(n,e);var i=Rt,r=pe;Yn(n.type)&&(Rt=n.stateNode,pe=!1),pn(t,e,n),cs(n.stateNode),Rt=i,pe=r;break;case 5:Kt||Pe(n,e);case 6:if(i=Rt,r=pe,Rt=null,pn(t,e,n),Rt=i,pe=r,Rt!==null)if(pe)try{(Rt.nodeType===9?Rt.body:Rt.nodeName==="HTML"?Rt.ownerDocument.body:Rt).removeChild(n.stateNode)}catch(c){Nt(n,e,c)}else try{Rt.removeChild(n.stateNode)}catch(c){Nt(n,e,c)}break;case 18:Rt!==null&&(pe?(t=Rt,om(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,n.stateNode),oi(t)):om(Rt,n.stateNode));break;case 4:i=Rt,r=pe,Rt=n.stateNode.containerInfo,pe=!0,pn(t,e,n),Rt=i,pe=r;break;case 0:case 11:case 14:case 15:On(2,n,e),Kt||On(4,n,e),pn(t,e,n);break;case 1:Kt||(Pe(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"&&cp(n,e,i)),pn(t,e,n);break;case 21:pn(t,e,n);break;case 22:Kt=(i=Kt)||n.memoizedState!==null,pn(t,e,n),Kt=i;break;default:pn(t,e,n)}}function yp(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{oi(t)}catch(n){Nt(e,e.return,n)}}}function vp(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{oi(t)}catch(n){Nt(e,e.return,n)}}function Wv(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new hp),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new hp),e;default:throw Error(o(435,t.tag))}}function El(t,e){var n=Wv(t);e.forEach(function(i){if(!n.has(i)){n.add(i);var r=rx.bind(null,t,i);i.then(r,r)}})}function me(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i],c=t,p=e,v=p;t:for(;v!==null;){switch(v.tag){case 27:if(Yn(v.type)){Rt=v.stateNode,pe=!1;break t}break;case 5:Rt=v.stateNode,pe=!1;break t;case 3:case 4:Rt=v.stateNode.containerInfo,pe=!0;break t}v=v.return}if(Rt===null)throw Error(o(160));gp(c,p,r),Rt=null,pe=!1,c=r.alternate,c!==null&&(c.return=null),r.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)xp(e,t),e=e.sibling}var Ge=null;function xp(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:me(e,t),ge(t),i&4&&(On(3,t,t.return),Ii(3,t),On(5,t,t.return));break;case 1:me(e,t),ge(t),i&512&&(Kt||n===null||Pe(n,n.return)),i&64&&hn&&(t=t.updateQueue,t!==null&&(i=t.callbacks,i!==null&&(n=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var r=Ge;if(me(e,t),ge(t),i&512&&(Kt||n===null||Pe(n,n.return)),i&4){var c=n!==null?n.memoizedState:null;if(i=t.memoizedState,n===null)if(i===null)if(t.stateNode===null){t:{i=t.type,n=t.memoizedProps,r=r.ownerDocument||r;e:switch(i){case"title":c=r.getElementsByTagName("title")[0],(!c||c[Ai]||c[It]||c.namespaceURI==="http://www.w3.org/2000/svg"||c.hasAttribute("itemprop"))&&(c=r.createElement(i),r.head.insertBefore(c,r.querySelector("head > title"))),ae(c,i,n),c[It]=t,Pt(c),i=c;break t;case"link":var p=xm("link","href",r).get(i+(n.href||""));if(p){for(var v=0;v<p.length;v++)if(c=p[v],c.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&c.getAttribute("rel")===(n.rel==null?null:n.rel)&&c.getAttribute("title")===(n.title==null?null:n.title)&&c.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){p.splice(v,1);break e}}c=r.createElement(i),ae(c,i,n),r.head.appendChild(c);break;case"meta":if(p=xm("meta","content",r).get(i+(n.content||""))){for(v=0;v<p.length;v++)if(c=p[v],c.getAttribute("content")===(n.content==null?null:""+n.content)&&c.getAttribute("name")===(n.name==null?null:n.name)&&c.getAttribute("property")===(n.property==null?null:n.property)&&c.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&c.getAttribute("charset")===(n.charSet==null?null:n.charSet)){p.splice(v,1);break e}}c=r.createElement(i),ae(c,i,n),r.head.appendChild(c);break;default:throw Error(o(468,i))}c[It]=t,Pt(c),i=c}t.stateNode=i}else bm(r,t.type,t.stateNode);else t.stateNode=vm(r,i,t.memoizedProps);else c!==i?(c===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):c.count--,i===null?bm(r,t.type,t.stateNode):vm(r,i,t.memoizedProps)):i===null&&t.stateNode!==null&&fc(t,t.memoizedProps,n.memoizedProps)}break;case 27:me(e,t),ge(t),i&512&&(Kt||n===null||Pe(n,n.return)),n!==null&&i&4&&fc(t,t.memoizedProps,n.memoizedProps);break;case 5:if(me(e,t),ge(t),i&512&&(Kt||n===null||Pe(n,n.return)),t.flags&32){r=t.stateNode;try{Ca(r,"")}catch(W){Nt(t,t.return,W)}}i&4&&t.stateNode!=null&&(r=t.memoizedProps,fc(t,r,n!==null?n.memoizedProps:r)),i&1024&&(mc=!0);break;case 6:if(me(e,t),ge(t),i&4){if(t.stateNode===null)throw Error(o(162));i=t.memoizedProps,n=t.stateNode;try{n.nodeValue=i}catch(W){Nt(t,t.return,W)}}break;case 3:if(Ql=null,r=Ge,Ge=Xl(e.containerInfo),me(e,t),Ge=r,ge(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{oi(e.containerInfo)}catch(W){Nt(t,t.return,W)}mc&&(mc=!1,bp(t));break;case 4:i=Ge,Ge=Xl(t.stateNode.containerInfo),me(e,t),ge(t),Ge=i;break;case 12:me(e,t),ge(t);break;case 31:me(e,t),ge(t),i&4&&(i=t.updateQueue,i!==null&&(t.updateQueue=null,El(t,i)));break;case 13:me(e,t),ge(t),t.child.flags&8192&&t.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Dl=xe()),i&4&&(i=t.updateQueue,i!==null&&(t.updateQueue=null,El(t,i)));break;case 22:r=t.memoizedState!==null;var S=n!==null&&n.memoizedState!==null,A=hn,_=Kt;if(hn=A||r,Kt=_||S,me(e,t),Kt=_,hn=A,ge(t),i&8192)t:for(e=t.stateNode,e._visibility=r?e._visibility&-2:e._visibility|1,r&&(n===null||S||hn||Kt||ga(t)),n=null,e=t;;){if(e.tag===5||e.tag===26){if(n===null){S=n=e;try{if(c=S.stateNode,r)p=c.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none";else{v=S.stateNode;var V=S.memoizedProps.style,z=V!=null&&V.hasOwnProperty("display")?V.display:null;v.style.display=z==null||typeof z=="boolean"?"":(""+z).trim()}}catch(W){Nt(S,S.return,W)}}}else if(e.tag===6){if(n===null){S=e;try{S.stateNode.nodeValue=r?"":S.memoizedProps}catch(W){Nt(S,S.return,W)}}}else if(e.tag===18){if(n===null){S=e;try{var E=S.stateNode;r?cm(E,!0):cm(S.stateNode,!1)}catch(W){Nt(S,S.return,W)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;n===e&&(n=null),e=e.return}n===e&&(n=null),e.sibling.return=e.return,e=e.sibling}i&4&&(i=t.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,El(t,n))));break;case 19:me(e,t),ge(t),i&4&&(i=t.updateQueue,i!==null&&(t.updateQueue=null,El(t,i)));break;case 30:break;case 21:break;default:me(e,t),ge(t)}}function ge(t){var e=t.flags;if(e&2){try{for(var n,i=t.return;i!==null;){if(dp(i)){n=i;break}i=i.return}if(n==null)throw Error(o(160));switch(n.tag){case 27:var r=n.stateNode,c=hc(t);zl(t,c,r);break;case 5:var p=n.stateNode;n.flags&32&&(Ca(p,""),n.flags&=-33);var v=hc(t);zl(t,v,p);break;case 3:case 4:var S=n.stateNode.containerInfo,A=hc(t);pc(t,A,S);break;default:throw Error(o(161))}}catch(_){Nt(t,t.return,_)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function bp(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;bp(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function mn(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)pp(t,e.alternate,e),e=e.sibling}function ga(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:On(4,e,e.return),ga(e);break;case 1:Pe(e,e.return);var n=e.stateNode;typeof n.componentWillUnmount=="function"&&cp(e,e.return,n),ga(e);break;case 27:cs(e.stateNode);case 26:case 5:Pe(e,e.return),ga(e);break;case 22:e.memoizedState===null&&ga(e);break;case 30:ga(e);break;default:ga(e)}t=t.sibling}}function gn(t,e,n){for(n=n&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var i=e.alternate,r=t,c=e,p=c.flags;switch(c.tag){case 0:case 11:case 15:gn(r,c,n),Ii(4,c);break;case 1:if(gn(r,c,n),i=c,r=i.stateNode,typeof r.componentDidMount=="function")try{r.componentDidMount()}catch(A){Nt(i,i.return,A)}if(i=c,r=i.updateQueue,r!==null){var v=i.stateNode;try{var S=r.shared.hiddenCallbacks;if(S!==null)for(r.shared.hiddenCallbacks=null,r=0;r<S.length;r++)Pf(S[r],v)}catch(A){Nt(i,i.return,A)}}n&&p&64&&op(c),ts(c,c.return);break;case 27:fp(c);case 26:case 5:gn(r,c,n),n&&i===null&&p&4&&up(c),ts(c,c.return);break;case 12:gn(r,c,n);break;case 31:gn(r,c,n),n&&p&4&&yp(r,c);break;case 13:gn(r,c,n),n&&p&4&&vp(r,c);break;case 22:c.memoizedState===null&&gn(r,c,n),ts(c,c.return);break;case 30:break;default:gn(r,c,n)}e=e.sibling}}function gc(t,e){var n=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==n&&(t!=null&&t.refCount++,n!=null&&Hi(n))}function yc(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Hi(t))}function Xe(t,e,n,i){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Sp(t,e,n,i),e=e.sibling}function Sp(t,e,n,i){var r=e.flags;switch(e.tag){case 0:case 11:case 15:Xe(t,e,n,i),r&2048&&Ii(9,e);break;case 1:Xe(t,e,n,i);break;case 3:Xe(t,e,n,i),r&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Hi(t)));break;case 12:if(r&2048){Xe(t,e,n,i),t=e.stateNode;try{var c=e.memoizedProps,p=c.id,v=c.onPostCommit;typeof v=="function"&&v(p,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(S){Nt(e,e.return,S)}}else Xe(t,e,n,i);break;case 31:Xe(t,e,n,i);break;case 13:Xe(t,e,n,i);break;case 23:break;case 22:c=e.stateNode,p=e.alternate,e.memoizedState!==null?c._visibility&2?Xe(t,e,n,i):es(t,e):c._visibility&2?Xe(t,e,n,i):(c._visibility|=2,Pa(t,e,n,i,(e.subtreeFlags&10256)!==0||!1)),r&2048&&gc(p,e);break;case 24:Xe(t,e,n,i),r&2048&&yc(e.alternate,e);break;default:Xe(t,e,n,i)}}function Pa(t,e,n,i,r){for(r=r&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var c=t,p=e,v=n,S=i,A=p.flags;switch(p.tag){case 0:case 11:case 15:Pa(c,p,v,S,r),Ii(8,p);break;case 23:break;case 22:var _=p.stateNode;p.memoizedState!==null?_._visibility&2?Pa(c,p,v,S,r):es(c,p):(_._visibility|=2,Pa(c,p,v,S,r)),r&&A&2048&&gc(p.alternate,p);break;case 24:Pa(c,p,v,S,r),r&&A&2048&&yc(p.alternate,p);break;default:Pa(c,p,v,S,r)}e=e.sibling}}function es(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var n=t,i=e,r=i.flags;switch(i.tag){case 22:es(n,i),r&2048&&gc(i.alternate,i);break;case 24:es(n,i),r&2048&&yc(i.alternate,i);break;default:es(n,i)}e=e.sibling}}var ns=8192;function Wa(t,e,n){if(t.subtreeFlags&ns)for(t=t.child;t!==null;)jp(t,e,n),t=t.sibling}function jp(t,e,n){switch(t.tag){case 26:Wa(t,e,n),t.flags&ns&&t.memoizedState!==null&&Lx(n,Ge,t.memoizedState,t.memoizedProps);break;case 5:Wa(t,e,n);break;case 3:case 4:var i=Ge;Ge=Xl(t.stateNode.containerInfo),Wa(t,e,n),Ge=i;break;case 22:t.memoizedState===null&&(i=t.alternate,i!==null&&i.memoizedState!==null?(i=ns,ns=16777216,Wa(t,e,n),ns=i):Wa(t,e,n));break;default:Wa(t,e,n)}}function Tp(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function as(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var n=0;n<e.length;n++){var i=e[n];Wt=i,Mp(i,t)}Tp(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)wp(t),t=t.sibling}function wp(t){switch(t.tag){case 0:case 11:case 15:as(t),t.flags&2048&&On(9,t,t.return);break;case 3:as(t);break;case 12:as(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,Cl(t)):as(t);break;default:as(t)}}function Cl(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var n=0;n<e.length;n++){var i=e[n];Wt=i,Mp(i,t)}Tp(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:On(8,e,e.return),Cl(e);break;case 22:n=e.stateNode,n._visibility&2&&(n._visibility&=-3,Cl(e));break;default:Cl(e)}t=t.sibling}}function Mp(t,e){for(;Wt!==null;){var n=Wt;switch(n.tag){case 0:case 11:case 15:On(8,n,e);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:Hi(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,Wt=i;else t:for(n=t;Wt!==null;){i=Wt;var r=i.sibling,c=i.return;if(mp(i),i===n){Wt=null;break t}if(r!==null){r.return=c,Wt=r;break t}Wt=c}}}var Iv={getCacheForType:function(t){var e=ee(Yt),n=e.data.get(t);return n===void 0&&(n=t(),e.data.set(t,n)),n},cacheSignal:function(){return ee(Yt).controller.signal}},tx=typeof WeakMap=="function"?WeakMap:Map,Tt=0,Et=null,mt=null,yt=0,Mt=0,Ne=null,Vn=!1,Ia=!1,vc=!1,yn=0,Ut=0,Un=0,ya=0,xc=0,Ae=0,ti=0,is=null,ye=null,bc=!1,Dl=0,Np=0,_l=1/0,Rl=null,Ln=null,Zt=0,Bn=null,ei=null,vn=0,Sc=0,jc=null,Ap=null,ss=0,Tc=null;function ke(){return(Tt&2)!==0&&yt!==0?yt&-yt:D.T!==null?zc():Yd()}function kp(){if(Ae===0)if((yt&536870912)===0||xt){var t=Ys;Ys<<=1,(Ys&3932160)===0&&(Ys=262144),Ae=t}else Ae=536870912;return t=we.current,t!==null&&(t.flags|=32),Ae}function ve(t,e,n){(t===Et&&(Mt===2||Mt===9)||t.cancelPendingCommit!==null)&&(ni(t,0),Hn(t,yt,Ae,!1)),Ni(t,n),((Tt&2)===0||t!==Et)&&(t===Et&&((Tt&2)===0&&(ya|=n),Ut===4&&Hn(t,yt,Ae,!1)),We(t))}function zp(t,e,n){if((Tt&6)!==0)throw Error(o(327));var i=!n&&(e&127)===0&&(e&t.expiredLanes)===0||Mi(t,e),r=i?ax(t,e):Mc(t,e,!0),c=i;do{if(r===0){Ia&&!i&&Hn(t,e,0,!1);break}else{if(n=t.current.alternate,c&&!ex(n)){r=Mc(t,e,!1),c=!1;continue}if(r===2){if(c=e,t.errorRecoveryDisabledLanes&c)var p=0;else p=t.pendingLanes&-536870913,p=p!==0?p:p&536870912?536870912:0;if(p!==0){e=p;t:{var v=t;r=is;var S=v.current.memoizedState.isDehydrated;if(S&&(ni(v,p).flags|=256),p=Mc(v,p,!1),p!==2){if(vc&&!S){v.errorRecoveryDisabledLanes|=c,ya|=c,r=4;break t}c=ye,ye=r,c!==null&&(ye===null?ye=c:ye.push.apply(ye,c))}r=p}if(c=!1,r!==2)continue}}if(r===1){ni(t,0),Hn(t,e,0,!0);break}t:{switch(i=t,c=r,c){case 0:case 1:throw Error(o(345));case 4:if((e&4194048)!==e)break;case 6:Hn(i,e,Ae,!Vn);break t;case 2:ye=null;break;case 3:case 5:break;default:throw Error(o(329))}if((e&62914560)===e&&(r=Dl+300-xe(),10<r)){if(Hn(i,e,Ae,!Vn),Xs(i,0,!0)!==0)break t;vn=e,i.timeoutHandle=lm(Ep.bind(null,i,n,ye,Rl,bc,e,Ae,ya,ti,Vn,c,"Throttled",-0,0),r);break t}Ep(i,n,ye,Rl,bc,e,Ae,ya,ti,Vn,c,null,-0,0)}}break}while(!0);We(t)}function Ep(t,e,n,i,r,c,p,v,S,A,_,V,z,E){if(t.timeoutHandle=-1,V=e.subtreeFlags,V&8192||(V&16785408)===16785408){V={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:nn},jp(e,c,V);var W=(c&62914560)===c?Dl-xe():(c&4194048)===c?Np-xe():0;if(W=Bx(V,W),W!==null){vn=c,t.cancelPendingCommit=W(Lp.bind(null,t,e,c,n,i,r,p,v,S,_,V,null,z,E)),Hn(t,c,p,!A);return}}Lp(t,e,c,n,i,r,p,v,S)}function ex(t){for(var e=t;;){var n=e.tag;if((n===0||n===11||n===15)&&e.flags&16384&&(n=e.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var r=n[i],c=r.getSnapshot;r=r.value;try{if(!je(c(),r))return!1}catch{return!1}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Hn(t,e,n,i){e&=~xc,e&=~ya,t.suspendedLanes|=e,t.pingedLanes&=~e,i&&(t.warmLanes|=e),i=t.expirationTimes;for(var r=e;0<r;){var c=31-Se(r),p=1<<c;i[c]=-1,r&=~p}n!==0&&Bd(t,n,e)}function Ol(){return(Tt&6)===0?(ls(0),!1):!0}function wc(){if(mt!==null){if(Mt===0)var t=mt.return;else t=mt,rn=oa=null,Ho(t),Qa=null,Yi=0,t=mt;for(;t!==null;)rp(t.alternate,t),t=t.return;mt=null}}function ni(t,e){var n=t.timeoutHandle;n!==-1&&(t.timeoutHandle=-1,Sx(n)),n=t.cancelPendingCommit,n!==null&&(t.cancelPendingCommit=null,n()),vn=0,wc(),Et=t,mt=n=sn(t.current,null),yt=e,Mt=0,Ne=null,Vn=!1,Ia=Mi(t,e),vc=!1,ti=Ae=xc=ya=Un=Ut=0,ye=is=null,bc=!1,(e&8)!==0&&(e|=e&32);var i=t.entangledLanes;if(i!==0)for(t=t.entanglements,i&=e;0<i;){var r=31-Se(i),c=1<<r;e|=t[r],i&=~c}return yn=e,nl(),n}function Cp(t,e){dt=null,D.H=Fi,e===Ka||e===ul?(e=Zf(),Mt=3):e===ko?(e=Zf(),Mt=4):Mt=e===nc?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,Ne=e,mt===null&&(Ut=1,wl(t,De(e,t.current)))}function Dp(){var t=we.current;return t===null?!0:(yt&4194048)===yt?Ve===null:(yt&62914560)===yt||(yt&536870912)!==0?t===Ve:!1}function _p(){var t=D.H;return D.H=Fi,t===null?Fi:t}function Rp(){var t=D.A;return D.A=Iv,t}function Vl(){Ut=4,Vn||(yt&4194048)!==yt&&we.current!==null||(Ia=!0),(Un&134217727)===0&&(ya&134217727)===0||Et===null||Hn(Et,yt,Ae,!1)}function Mc(t,e,n){var i=Tt;Tt|=2;var r=_p(),c=Rp();(Et!==t||yt!==e)&&(Rl=null,ni(t,e)),e=!1;var p=Ut;t:do try{if(Mt!==0&&mt!==null){var v=mt,S=Ne;switch(Mt){case 8:wc(),p=6;break t;case 3:case 2:case 9:case 6:we.current===null&&(e=!0);var A=Mt;if(Mt=0,Ne=null,ai(t,v,S,A),n&&Ia){p=0;break t}break;default:A=Mt,Mt=0,Ne=null,ai(t,v,S,A)}}nx(),p=Ut;break}catch(_){Cp(t,_)}while(!0);return e&&t.shellSuspendCounter++,rn=oa=null,Tt=i,D.H=r,D.A=c,mt===null&&(Et=null,yt=0,nl()),p}function nx(){for(;mt!==null;)Op(mt)}function ax(t,e){var n=Tt;Tt|=2;var i=_p(),r=Rp();Et!==t||yt!==e?(Rl=null,_l=xe()+500,ni(t,e)):Ia=Mi(t,e);t:do try{if(Mt!==0&&mt!==null){e=mt;var c=Ne;e:switch(Mt){case 1:Mt=0,Ne=null,ai(t,e,c,1);break;case 2:case 9:if(Kf(c)){Mt=0,Ne=null,Vp(e);break}e=function(){Mt!==2&&Mt!==9||Et!==t||(Mt=7),We(t)},c.then(e,e);break t;case 3:Mt=7;break t;case 4:Mt=5;break t;case 7:Kf(c)?(Mt=0,Ne=null,Vp(e)):(Mt=0,Ne=null,ai(t,e,c,7));break;case 5:var p=null;switch(mt.tag){case 26:p=mt.memoizedState;case 5:case 27:var v=mt;if(p?Sm(p):v.stateNode.complete){Mt=0,Ne=null;var S=v.sibling;if(S!==null)mt=S;else{var A=v.return;A!==null?(mt=A,Ul(A)):mt=null}break e}}Mt=0,Ne=null,ai(t,e,c,5);break;case 6:Mt=0,Ne=null,ai(t,e,c,6);break;case 8:wc(),Ut=6;break t;default:throw Error(o(462))}}ix();break}catch(_){Cp(t,_)}while(!0);return rn=oa=null,D.H=i,D.A=r,Tt=n,mt!==null?0:(Et=null,yt=0,nl(),Ut)}function ix(){for(;mt!==null&&!Ay();)Op(mt)}function Op(t){var e=sp(t.alternate,t,yn);t.memoizedProps=t.pendingProps,e===null?Ul(t):mt=e}function Vp(t){var e=t,n=e.alternate;switch(e.tag){case 15:case 0:e=Ih(n,e,e.pendingProps,e.type,void 0,yt);break;case 11:e=Ih(n,e,e.pendingProps,e.type.render,e.ref,yt);break;case 5:Ho(e);default:rp(n,e),e=mt=Rf(e,yn),e=sp(n,e,yn)}t.memoizedProps=t.pendingProps,e===null?Ul(t):mt=e}function ai(t,e,n,i){rn=oa=null,Ho(e),Qa=null,Yi=0;var r=e.return;try{if(Qv(t,r,e,n,yt)){Ut=1,wl(t,De(n,t.current)),mt=null;return}}catch(c){if(r!==null)throw mt=r,c;Ut=1,wl(t,De(n,t.current)),mt=null;return}e.flags&32768?(xt||i===1?t=!0:Ia||(yt&536870912)!==0?t=!1:(Vn=t=!0,(i===2||i===9||i===3||i===6)&&(i=we.current,i!==null&&i.tag===13&&(i.flags|=16384))),Up(e,t)):Ul(e)}function Ul(t){var e=t;do{if((e.flags&32768)!==0){Up(e,Vn);return}t=e.return;var n=$v(e.alternate,e,yn);if(n!==null){mt=n;return}if(e=e.sibling,e!==null){mt=e;return}mt=e=t}while(e!==null);Ut===0&&(Ut=5)}function Up(t,e){do{var n=Fv(t.alternate,t);if(n!==null){n.flags&=32767,mt=n;return}if(n=t.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!e&&(t=t.sibling,t!==null)){mt=t;return}mt=t=n}while(t!==null);Ut=6,mt=null}function Lp(t,e,n,i,r,c,p,v,S){t.cancelPendingCommit=null;do Ll();while(Zt!==0);if((Tt&6)!==0)throw Error(o(327));if(e!==null){if(e===t.current)throw Error(o(177));if(c=e.lanes|e.childLanes,c|=ho,Uy(t,n,c,p,v,S),t===Et&&(mt=Et=null,yt=0),ei=e,Bn=t,vn=n,Sc=c,jc=r,Ap=i,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,ox(Hs,function(){return Gp(),null})):(t.callbackNode=null,t.callbackPriority=0),i=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||i){i=D.T,D.T=null,r=X.p,X.p=2,p=Tt,Tt|=4;try{Pv(t,e,n)}finally{Tt=p,X.p=r,D.T=i}}Zt=1,Bp(),Hp(),qp()}}function Bp(){if(Zt===1){Zt=0;var t=Bn,e=ei,n=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||n){n=D.T,D.T=null;var i=X.p;X.p=2;var r=Tt;Tt|=4;try{xp(e,t);var c=Uc,p=Mf(t.containerInfo),v=c.focusedElem,S=c.selectionRange;if(p!==v&&v&&v.ownerDocument&&wf(v.ownerDocument.documentElement,v)){if(S!==null&&ro(v)){var A=S.start,_=S.end;if(_===void 0&&(_=A),"selectionStart"in v)v.selectionStart=A,v.selectionEnd=Math.min(_,v.value.length);else{var V=v.ownerDocument||document,z=V&&V.defaultView||window;if(z.getSelection){var E=z.getSelection(),W=v.textContent.length,rt=Math.min(S.start,W),zt=S.end===void 0?rt:Math.min(S.end,W);!E.extend&&rt>zt&&(p=zt,zt=rt,rt=p);var M=Tf(v,rt),T=Tf(v,zt);if(M&&T&&(E.rangeCount!==1||E.anchorNode!==M.node||E.anchorOffset!==M.offset||E.focusNode!==T.node||E.focusOffset!==T.offset)){var N=V.createRange();N.setStart(M.node,M.offset),E.removeAllRanges(),rt>zt?(E.addRange(N),E.extend(T.node,T.offset)):(N.setEnd(T.node,T.offset),E.addRange(N))}}}}for(V=[],E=v;E=E.parentNode;)E.nodeType===1&&V.push({element:E,left:E.scrollLeft,top:E.scrollTop});for(typeof v.focus=="function"&&v.focus(),v=0;v<V.length;v++){var R=V[v];R.element.scrollLeft=R.left,R.element.scrollTop=R.top}}Fl=!!Vc,Uc=Vc=null}finally{Tt=r,X.p=i,D.T=n}}t.current=e,Zt=2}}function Hp(){if(Zt===2){Zt=0;var t=Bn,e=ei,n=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||n){n=D.T,D.T=null;var i=X.p;X.p=2;var r=Tt;Tt|=4;try{pp(t,e.alternate,e)}finally{Tt=r,X.p=i,D.T=n}}Zt=3}}function qp(){if(Zt===4||Zt===3){Zt=0,ky();var t=Bn,e=ei,n=vn,i=Ap;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?Zt=5:(Zt=0,ei=Bn=null,Yp(t,t.pendingLanes));var r=t.pendingLanes;if(r===0&&(Ln=null),Yr(n),e=e.stateNode,be&&typeof be.onCommitFiberRoot=="function")try{be.onCommitFiberRoot(wi,e,void 0,(e.current.flags&128)===128)}catch{}if(i!==null){e=D.T,r=X.p,X.p=2,D.T=null;try{for(var c=t.onRecoverableError,p=0;p<i.length;p++){var v=i[p];c(v.value,{componentStack:v.stack})}}finally{D.T=e,X.p=r}}(vn&3)!==0&&Ll(),We(t),r=t.pendingLanes,(n&261930)!==0&&(r&42)!==0?t===Tc?ss++:(ss=0,Tc=t):ss=0,ls(0)}}function Yp(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,Hi(e)))}function Ll(){return Bp(),Hp(),qp(),Gp()}function Gp(){if(Zt!==5)return!1;var t=Bn,e=Sc;Sc=0;var n=Yr(vn),i=D.T,r=X.p;try{X.p=32>n?32:n,D.T=null,n=jc,jc=null;var c=Bn,p=vn;if(Zt=0,ei=Bn=null,vn=0,(Tt&6)!==0)throw Error(o(331));var v=Tt;if(Tt|=4,wp(c.current),Sp(c,c.current,p,n),Tt=v,ls(0,!1),be&&typeof be.onPostCommitFiberRoot=="function")try{be.onPostCommitFiberRoot(wi,c)}catch{}return!0}finally{X.p=r,D.T=i,Yp(t,e)}}function Xp(t,e,n){e=De(n,e),e=ec(t.stateNode,e,2),t=Dn(t,e,2),t!==null&&(Ni(t,2),We(t))}function Nt(t,e,n){if(t.tag===3)Xp(t,t,n);else for(;e!==null;){if(e.tag===3){Xp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Ln===null||!Ln.has(i))){t=De(n,t),n=Kh(2),i=Dn(e,n,2),i!==null&&(Qh(n,i,e,t),Ni(i,2),We(i));break}}e=e.return}}function Nc(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new tx;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(vc=!0,r.add(n),t=sx.bind(null,t,e,n),e.then(t,t))}function sx(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),t.pingedLanes|=t.suspendedLanes&n,t.warmLanes&=~n,Et===t&&(yt&n)===n&&(Ut===4||Ut===3&&(yt&62914560)===yt&&300>xe()-Dl?(Tt&2)===0&&ni(t,0):xc|=n,ti===yt&&(ti=0)),We(t)}function Kp(t,e){e===0&&(e=Ld()),t=sa(t,e),t!==null&&(Ni(t,e),We(t))}function lx(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Kp(t,n)}function rx(t,e){var n=0;switch(t.tag){case 31:case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;case 22:i=t.stateNode._retryCache;break;default:throw Error(o(314))}i!==null&&i.delete(e),Kp(t,n)}function ox(t,e){return Lr(t,e)}var Bl=null,ii=null,Ac=!1,Hl=!1,kc=!1,qn=0;function We(t){t!==ii&&t.next===null&&(ii===null?Bl=ii=t:ii=ii.next=t),Hl=!0,Ac||(Ac=!0,ux())}function ls(t,e){if(!kc&&Hl){kc=!0;do for(var n=!1,i=Bl;i!==null;){if(t!==0){var r=i.pendingLanes;if(r===0)var c=0;else{var p=i.suspendedLanes,v=i.pingedLanes;c=(1<<31-Se(42|t)+1)-1,c&=r&~(p&~v),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(n=!0,$p(i,c))}else c=yt,c=Xs(i,i===Et?c:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(c&3)===0||Mi(i,c)||(n=!0,$p(i,c));i=i.next}while(n);kc=!1}}function cx(){Qp()}function Qp(){Hl=Ac=!1;var t=0;qn!==0&&bx()&&(t=qn);for(var e=xe(),n=null,i=Bl;i!==null;){var r=i.next,c=Zp(i,e);c===0?(i.next=null,n===null?Bl=r:n.next=r,r===null&&(ii=n)):(n=i,(t!==0||(c&3)!==0)&&(Hl=!0)),i=r}Zt!==0&&Zt!==5||ls(t),qn!==0&&(qn=0)}function Zp(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,c=t.pendingLanes&-62914561;0<c;){var p=31-Se(c),v=1<<p,S=r[p];S===-1?((v&n)===0||(v&i)!==0)&&(r[p]=Vy(v,e)):S<=e&&(t.expiredLanes|=v),c&=~v}if(e=Et,n=yt,n=Xs(t,t===e?n:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),i=t.callbackNode,n===0||t===e&&(Mt===2||Mt===9)||t.cancelPendingCommit!==null)return i!==null&&i!==null&&Br(i),t.callbackNode=null,t.callbackPriority=0;if((n&3)===0||Mi(t,n)){if(e=n&-n,e===t.callbackPriority)return e;switch(i!==null&&Br(i),Yr(n)){case 2:case 8:n=Vd;break;case 32:n=Hs;break;case 268435456:n=Ud;break;default:n=Hs}return i=Jp.bind(null,t),n=Lr(n,i),t.callbackPriority=e,t.callbackNode=n,e}return i!==null&&i!==null&&Br(i),t.callbackPriority=2,t.callbackNode=null,2}function Jp(t,e){if(Zt!==0&&Zt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var n=t.callbackNode;if(Ll()&&t.callbackNode!==n)return null;var i=yt;return i=Xs(t,t===Et?i:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),i===0?null:(zp(t,i,e),Zp(t,xe()),t.callbackNode!=null&&t.callbackNode===n?Jp.bind(null,t):null)}function $p(t,e){if(Ll())return null;zp(t,e,!0)}function ux(){jx(function(){(Tt&6)!==0?Lr(Od,cx):Qp()})}function zc(){if(qn===0){var t=Ga;t===0&&(t=qs,qs<<=1,(qs&261888)===0&&(qs=256)),qn=t}return qn}function Fp(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Js(""+t)}function Pp(t,e){var n=e.ownerDocument.createElement("input");return n.name=e.name,n.value=e.value,t.id&&n.setAttribute("form",t.id),e.parentNode.insertBefore(n,e),t=new FormData(t),n.parentNode.removeChild(n),t}function dx(t,e,n,i,r){if(e==="submit"&&n&&n.stateNode===r){var c=Fp((r[fe]||null).action),p=i.submitter;p&&(e=(e=p[fe]||null)?Fp(e.formAction):p.getAttribute("formAction"),e!==null&&(c=e,p=null));var v=new Ws("action","action",null,i,r);t.push({event:v,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(qn!==0){var S=p?Pp(r,p):new FormData(r);$o(n,{pending:!0,data:S,method:r.method,action:c},null,S)}}else typeof c=="function"&&(v.preventDefault(),S=p?Pp(r,p):new FormData(r),$o(n,{pending:!0,data:S,method:r.method,action:c},c,S))},currentTarget:r}]})}}for(var Ec=0;Ec<fo.length;Ec++){var Cc=fo[Ec],fx=Cc.toLowerCase(),hx=Cc[0].toUpperCase()+Cc.slice(1);Ye(fx,"on"+hx)}Ye(kf,"onAnimationEnd"),Ye(zf,"onAnimationIteration"),Ye(Ef,"onAnimationStart"),Ye("dblclick","onDoubleClick"),Ye("focusin","onFocus"),Ye("focusout","onBlur"),Ye(zv,"onTransitionRun"),Ye(Ev,"onTransitionStart"),Ye(Cv,"onTransitionCancel"),Ye(Cf,"onTransitionEnd"),za("onMouseEnter",["mouseout","mouseover"]),za("onMouseLeave",["mouseout","mouseover"]),za("onPointerEnter",["pointerout","pointerover"]),za("onPointerLeave",["pointerout","pointerover"]),ea("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ea("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ea("onBeforeInput",["compositionend","keypress","textInput","paste"]),ea("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ea("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ea("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var rs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),px=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(rs));function Wp(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;t:{var c=void 0;if(e)for(var p=i.length-1;0<=p;p--){var v=i[p],S=v.instance,A=v.currentTarget;if(v=v.listener,S!==c&&r.isPropagationStopped())break t;c=v,r.currentTarget=A;try{c(r)}catch(_){el(_)}r.currentTarget=null,c=S}else for(p=0;p<i.length;p++){if(v=i[p],S=v.instance,A=v.currentTarget,v=v.listener,S!==c&&r.isPropagationStopped())break t;c=v,r.currentTarget=A;try{c(r)}catch(_){el(_)}r.currentTarget=null,c=S}}}}function gt(t,e){var n=e[Gr];n===void 0&&(n=e[Gr]=new Set);var i=t+"__bubble";n.has(i)||(Ip(e,t,2,!1),n.add(i))}function Dc(t,e,n){var i=0;e&&(i|=4),Ip(n,t,i,e)}var ql="_reactListening"+Math.random().toString(36).slice(2);function _c(t){if(!t[ql]){t[ql]=!0,Kd.forEach(function(n){n!=="selectionchange"&&(px.has(n)||Dc(n,!1,t),Dc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ql]||(e[ql]=!0,Dc("selectionchange",!1,e))}}function Ip(t,e,n,i){switch(km(e)){case 2:var r=Yx;break;case 8:r=Gx;break;default:r=Jc}n=r.bind(null,e,n,t),r=void 0,!Wr||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Rc(t,e,n,i,r){var c=i;if((e&1)===0&&(e&2)===0&&i!==null)t:for(;;){if(i===null)return;var p=i.tag;if(p===3||p===4){var v=i.stateNode.containerInfo;if(v===r)break;if(p===4)for(p=i.return;p!==null;){var S=p.tag;if((S===3||S===4)&&p.stateNode.containerInfo===r)return;p=p.return}for(;v!==null;){if(p=Na(v),p===null)return;if(S=p.tag,S===5||S===6||S===26||S===27){i=c=p;continue t}v=v.parentNode}}i=i.return}af(function(){var A=c,_=Fr(n),V=[];t:{var z=Df.get(t);if(z!==void 0){var E=Ws,W=t;switch(t){case"keypress":if(Fs(n)===0)break t;case"keydown":case"keyup":E=rv;break;case"focusin":W="focus",E=no;break;case"focusout":W="blur",E=no;break;case"beforeblur":case"afterblur":E=no;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":E=rf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":E=$y;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":E=uv;break;case kf:case zf:case Ef:E=Wy;break;case Cf:E=fv;break;case"scroll":case"scrollend":E=Zy;break;case"wheel":E=pv;break;case"copy":case"cut":case"paste":E=tv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":E=cf;break;case"toggle":case"beforetoggle":E=gv}var rt=(e&4)!==0,zt=!rt&&(t==="scroll"||t==="scrollend"),M=rt?z!==null?z+"Capture":null:z;rt=[];for(var T=A,N;T!==null;){var R=T;if(N=R.stateNode,R=R.tag,R!==5&&R!==26&&R!==27||N===null||M===null||(R=zi(T,M),R!=null&&rt.push(os(T,R,N))),zt)break;T=T.return}0<rt.length&&(z=new E(z,W,null,n,_),V.push({event:z,listeners:rt}))}}if((e&7)===0){t:{if(z=t==="mouseover"||t==="pointerover",E=t==="mouseout"||t==="pointerout",z&&n!==$r&&(W=n.relatedTarget||n.fromElement)&&(Na(W)||W[Ma]))break t;if((E||z)&&(z=_.window===_?_:(z=_.ownerDocument)?z.defaultView||z.parentWindow:window,E?(W=n.relatedTarget||n.toElement,E=A,W=W?Na(W):null,W!==null&&(zt=h(W),rt=W.tag,W!==zt||rt!==5&&rt!==27&&rt!==6)&&(W=null)):(E=null,W=A),E!==W)){if(rt=rf,R="onMouseLeave",M="onMouseEnter",T="mouse",(t==="pointerout"||t==="pointerover")&&(rt=cf,R="onPointerLeave",M="onPointerEnter",T="pointer"),zt=E==null?z:ki(E),N=W==null?z:ki(W),z=new rt(R,T+"leave",E,n,_),z.target=zt,z.relatedTarget=N,R=null,Na(_)===A&&(rt=new rt(M,T+"enter",W,n,_),rt.target=N,rt.relatedTarget=zt,R=rt),zt=R,E&&W)e:{for(rt=mx,M=E,T=W,N=0,R=M;R;R=rt(R))N++;R=0;for(var it=T;it;it=rt(it))R++;for(;0<N-R;)M=rt(M),N--;for(;0<R-N;)T=rt(T),R--;for(;N--;){if(M===T||T!==null&&M===T.alternate){rt=M;break e}M=rt(M),T=rt(T)}rt=null}else rt=null;E!==null&&tm(V,z,E,rt,!1),W!==null&&zt!==null&&tm(V,zt,W,rt,!0)}}t:{if(z=A?ki(A):window,E=z.nodeName&&z.nodeName.toLowerCase(),E==="select"||E==="input"&&z.type==="file")var St=yf;else if(mf(z))if(vf)St=Nv;else{St=wv;var et=Tv}else E=z.nodeName,!E||E.toLowerCase()!=="input"||z.type!=="checkbox"&&z.type!=="radio"?A&&Jr(A.elementType)&&(St=yf):St=Mv;if(St&&(St=St(t,A))){gf(V,St,n,_);break t}et&&et(t,z,A),t==="focusout"&&A&&z.type==="number"&&A.memoizedProps.value!=null&&Zr(z,"number",z.value)}switch(et=A?ki(A):window,t){case"focusin":(mf(et)||et.contentEditable==="true")&&(Oa=et,oo=A,Ui=null);break;case"focusout":Ui=oo=Oa=null;break;case"mousedown":co=!0;break;case"contextmenu":case"mouseup":case"dragend":co=!1,Nf(V,n,_);break;case"selectionchange":if(kv)break;case"keydown":case"keyup":Nf(V,n,_)}var ft;if(io)t:{switch(t){case"compositionstart":var vt="onCompositionStart";break t;case"compositionend":vt="onCompositionEnd";break t;case"compositionupdate":vt="onCompositionUpdate";break t}vt=void 0}else Ra?hf(t,n)&&(vt="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(vt="onCompositionStart");vt&&(uf&&n.locale!=="ko"&&(Ra||vt!=="onCompositionStart"?vt==="onCompositionEnd"&&Ra&&(ft=sf()):(Mn=_,Ir="value"in Mn?Mn.value:Mn.textContent,Ra=!0)),et=Yl(A,vt),0<et.length&&(vt=new of(vt,t,null,n,_),V.push({event:vt,listeners:et}),ft?vt.data=ft:(ft=pf(n),ft!==null&&(vt.data=ft)))),(ft=vv?xv(t,n):bv(t,n))&&(vt=Yl(A,"onBeforeInput"),0<vt.length&&(et=new of("onBeforeInput","beforeinput",null,n,_),V.push({event:et,listeners:vt}),et.data=ft)),dx(V,t,A,n,_)}Wp(V,e)})}function os(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Yl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,c=r.stateNode;if(r=r.tag,r!==5&&r!==26&&r!==27||c===null||(r=zi(t,n),r!=null&&i.unshift(os(t,r,c)),r=zi(t,e),r!=null&&i.push(os(t,r,c))),t.tag===3)return i;t=t.return}return[]}function mx(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function tm(t,e,n,i,r){for(var c=e._reactName,p=[];n!==null&&n!==i;){var v=n,S=v.alternate,A=v.stateNode;if(v=v.tag,S!==null&&S===i)break;v!==5&&v!==26&&v!==27||A===null||(S=A,r?(A=zi(n,c),A!=null&&p.unshift(os(n,A,S))):r||(A=zi(n,c),A!=null&&p.push(os(n,A,S)))),n=n.return}p.length!==0&&t.push({event:e,listeners:p})}var gx=/\r\n?/g,yx=/\u0000|\uFFFD/g;function em(t){return(typeof t=="string"?t:""+t).replace(gx,`
`).replace(yx,"")}function nm(t,e){return e=em(e),em(t)===e}function kt(t,e,n,i,r,c){switch(n){case"children":typeof i=="string"?e==="body"||e==="textarea"&&i===""||Ca(t,i):(typeof i=="number"||typeof i=="bigint")&&e!=="body"&&Ca(t,""+i);break;case"className":Qs(t,"class",i);break;case"tabIndex":Qs(t,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Qs(t,n,i);break;case"style":ef(t,i,c);break;case"data":if(e!=="object"){Qs(t,"data",i);break}case"src":case"href":if(i===""&&(e!=="a"||n!=="href")){t.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){t.removeAttribute(n);break}i=Js(""+i),t.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){t.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(n==="formAction"?(e!=="input"&&kt(t,e,"name",r.name,r,null),kt(t,e,"formEncType",r.formEncType,r,null),kt(t,e,"formMethod",r.formMethod,r,null),kt(t,e,"formTarget",r.formTarget,r,null)):(kt(t,e,"encType",r.encType,r,null),kt(t,e,"method",r.method,r,null),kt(t,e,"target",r.target,r,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){t.removeAttribute(n);break}i=Js(""+i),t.setAttribute(n,i);break;case"onClick":i!=null&&(t.onclick=nn);break;case"onScroll":i!=null&&gt("scroll",t);break;case"onScrollEnd":i!=null&&gt("scrollend",t);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(o(61));if(n=i.__html,n!=null){if(r.children!=null)throw Error(o(60));t.innerHTML=n}}break;case"multiple":t.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":t.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){t.removeAttribute("xlink:href");break}n=Js(""+i),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(n,""+i):t.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(n,""):t.removeAttribute(n);break;case"capture":case"download":i===!0?t.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(n,i):t.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?t.setAttribute(n,i):t.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?t.removeAttribute(n):t.setAttribute(n,i);break;case"popover":gt("beforetoggle",t),gt("toggle",t),Ks(t,"popover",i);break;case"xlinkActuate":en(t,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":en(t,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":en(t,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":en(t,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":en(t,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":en(t,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":en(t,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":en(t,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":en(t,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Ks(t,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=Ky.get(n)||n,Ks(t,n,i))}}function Oc(t,e,n,i,r,c){switch(n){case"style":ef(t,i,c);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(o(61));if(n=i.__html,n!=null){if(r.children!=null)throw Error(o(60));t.innerHTML=n}}break;case"children":typeof i=="string"?Ca(t,i):(typeof i=="number"||typeof i=="bigint")&&Ca(t,""+i);break;case"onScroll":i!=null&&gt("scroll",t);break;case"onScrollEnd":i!=null&&gt("scrollend",t);break;case"onClick":i!=null&&(t.onclick=nn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Qd.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(r=n.endsWith("Capture"),e=n.slice(2,r?n.length-7:void 0),c=t[fe]||null,c=c!=null?c[n]:null,typeof c=="function"&&t.removeEventListener(e,c,r),typeof i=="function")){typeof c!="function"&&c!==null&&(n in t?t[n]=null:t.hasAttribute(n)&&t.removeAttribute(n)),t.addEventListener(e,i,r);break t}n in t?t[n]=i:i===!0?t.setAttribute(n,""):Ks(t,n,i)}}}function ae(t,e,n){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":gt("error",t),gt("load",t);var i=!1,r=!1,c;for(c in n)if(n.hasOwnProperty(c)){var p=n[c];if(p!=null)switch(c){case"src":i=!0;break;case"srcSet":r=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,e));default:kt(t,e,c,p,n,null)}}r&&kt(t,e,"srcSet",n.srcSet,n,null),i&&kt(t,e,"src",n.src,n,null);return;case"input":gt("invalid",t);var v=c=p=r=null,S=null,A=null;for(i in n)if(n.hasOwnProperty(i)){var _=n[i];if(_!=null)switch(i){case"name":r=_;break;case"type":p=_;break;case"checked":S=_;break;case"defaultChecked":A=_;break;case"value":c=_;break;case"defaultValue":v=_;break;case"children":case"dangerouslySetInnerHTML":if(_!=null)throw Error(o(137,e));break;default:kt(t,e,i,_,n,null)}}Pd(t,c,v,S,A,p,r,!1);return;case"select":gt("invalid",t),i=p=c=null;for(r in n)if(n.hasOwnProperty(r)&&(v=n[r],v!=null))switch(r){case"value":c=v;break;case"defaultValue":p=v;break;case"multiple":i=v;default:kt(t,e,r,v,n,null)}e=c,n=p,t.multiple=!!i,e!=null?Ea(t,!!i,e,!1):n!=null&&Ea(t,!!i,n,!0);return;case"textarea":gt("invalid",t),c=r=i=null;for(p in n)if(n.hasOwnProperty(p)&&(v=n[p],v!=null))switch(p){case"value":i=v;break;case"defaultValue":r=v;break;case"children":c=v;break;case"dangerouslySetInnerHTML":if(v!=null)throw Error(o(91));break;default:kt(t,e,p,v,n,null)}Id(t,i,r,c);return;case"option":for(S in n)n.hasOwnProperty(S)&&(i=n[S],i!=null)&&(S==="selected"?t.selected=i&&typeof i!="function"&&typeof i!="symbol":kt(t,e,S,i,n,null));return;case"dialog":gt("beforetoggle",t),gt("toggle",t),gt("cancel",t),gt("close",t);break;case"iframe":case"object":gt("load",t);break;case"video":case"audio":for(i=0;i<rs.length;i++)gt(rs[i],t);break;case"image":gt("error",t),gt("load",t);break;case"details":gt("toggle",t);break;case"embed":case"source":case"link":gt("error",t),gt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(A in n)if(n.hasOwnProperty(A)&&(i=n[A],i!=null))switch(A){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,e));default:kt(t,e,A,i,n,null)}return;default:if(Jr(e)){for(_ in n)n.hasOwnProperty(_)&&(i=n[_],i!==void 0&&Oc(t,e,_,i,n,void 0));return}}for(v in n)n.hasOwnProperty(v)&&(i=n[v],i!=null&&kt(t,e,v,i,n,null))}function vx(t,e,n,i){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var r=null,c=null,p=null,v=null,S=null,A=null,_=null;for(E in n){var V=n[E];if(n.hasOwnProperty(E)&&V!=null)switch(E){case"checked":break;case"value":break;case"defaultValue":S=V;default:i.hasOwnProperty(E)||kt(t,e,E,null,i,V)}}for(var z in i){var E=i[z];if(V=n[z],i.hasOwnProperty(z)&&(E!=null||V!=null))switch(z){case"type":c=E;break;case"name":r=E;break;case"checked":A=E;break;case"defaultChecked":_=E;break;case"value":p=E;break;case"defaultValue":v=E;break;case"children":case"dangerouslySetInnerHTML":if(E!=null)throw Error(o(137,e));break;default:E!==V&&kt(t,e,z,E,i,V)}}Qr(t,p,v,S,A,_,c,r);return;case"select":E=p=v=z=null;for(c in n)if(S=n[c],n.hasOwnProperty(c)&&S!=null)switch(c){case"value":break;case"multiple":E=S;default:i.hasOwnProperty(c)||kt(t,e,c,null,i,S)}for(r in i)if(c=i[r],S=n[r],i.hasOwnProperty(r)&&(c!=null||S!=null))switch(r){case"value":z=c;break;case"defaultValue":v=c;break;case"multiple":p=c;default:c!==S&&kt(t,e,r,c,i,S)}e=v,n=p,i=E,z!=null?Ea(t,!!n,z,!1):!!i!=!!n&&(e!=null?Ea(t,!!n,e,!0):Ea(t,!!n,n?[]:"",!1));return;case"textarea":E=z=null;for(v in n)if(r=n[v],n.hasOwnProperty(v)&&r!=null&&!i.hasOwnProperty(v))switch(v){case"value":break;case"children":break;default:kt(t,e,v,null,i,r)}for(p in i)if(r=i[p],c=n[p],i.hasOwnProperty(p)&&(r!=null||c!=null))switch(p){case"value":z=r;break;case"defaultValue":E=r;break;case"children":break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(o(91));break;default:r!==c&&kt(t,e,p,r,i,c)}Wd(t,z,E);return;case"option":for(var W in n)z=n[W],n.hasOwnProperty(W)&&z!=null&&!i.hasOwnProperty(W)&&(W==="selected"?t.selected=!1:kt(t,e,W,null,i,z));for(S in i)z=i[S],E=n[S],i.hasOwnProperty(S)&&z!==E&&(z!=null||E!=null)&&(S==="selected"?t.selected=z&&typeof z!="function"&&typeof z!="symbol":kt(t,e,S,z,i,E));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var rt in n)z=n[rt],n.hasOwnProperty(rt)&&z!=null&&!i.hasOwnProperty(rt)&&kt(t,e,rt,null,i,z);for(A in i)if(z=i[A],E=n[A],i.hasOwnProperty(A)&&z!==E&&(z!=null||E!=null))switch(A){case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(o(137,e));break;default:kt(t,e,A,z,i,E)}return;default:if(Jr(e)){for(var zt in n)z=n[zt],n.hasOwnProperty(zt)&&z!==void 0&&!i.hasOwnProperty(zt)&&Oc(t,e,zt,void 0,i,z);for(_ in i)z=i[_],E=n[_],!i.hasOwnProperty(_)||z===E||z===void 0&&E===void 0||Oc(t,e,_,z,i,E);return}}for(var M in n)z=n[M],n.hasOwnProperty(M)&&z!=null&&!i.hasOwnProperty(M)&&kt(t,e,M,null,i,z);for(V in i)z=i[V],E=n[V],!i.hasOwnProperty(V)||z===E||z==null&&E==null||kt(t,e,V,z,i,E)}function am(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function xx(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var r=n[i],c=r.transferSize,p=r.initiatorType,v=r.duration;if(c&&v&&am(p)){for(p=0,v=r.responseEnd,i+=1;i<n.length;i++){var S=n[i],A=S.startTime;if(A>v)break;var _=S.transferSize,V=S.initiatorType;_&&am(V)&&(S=S.responseEnd,p+=_*(S<v?1:(v-A)/(S-A)))}if(--i,e+=8*(c+p)/(r.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Vc=null,Uc=null;function Gl(t){return t.nodeType===9?t:t.ownerDocument}function im(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function sm(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function Lc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Bc=null;function bx(){var t=window.event;return t&&t.type==="popstate"?t===Bc?!1:(Bc=t,!0):(Bc=null,!1)}var lm=typeof setTimeout=="function"?setTimeout:void 0,Sx=typeof clearTimeout=="function"?clearTimeout:void 0,rm=typeof Promise=="function"?Promise:void 0,jx=typeof queueMicrotask=="function"?queueMicrotask:typeof rm<"u"?function(t){return rm.resolve(null).then(t).catch(Tx)}:lm;function Tx(t){setTimeout(function(){throw t})}function Yn(t){return t==="head"}function om(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"||n==="/&"){if(i===0){t.removeChild(r),oi(e);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")cs(t.ownerDocument.documentElement);else if(n==="head"){n=t.ownerDocument.head,cs(n);for(var c=n.firstChild;c;){var p=c.nextSibling,v=c.nodeName;c[Ai]||v==="SCRIPT"||v==="STYLE"||v==="LINK"&&c.rel.toLowerCase()==="stylesheet"||n.removeChild(c),c=p}}else n==="body"&&cs(t.ownerDocument.body);n=r}while(n);oi(e)}function cm(t,e){var n=t;t=0;do{var i=n.nextSibling;if(n.nodeType===1?e?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(e?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(t===0)break;t--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||t++;n=i}while(n)}function Hc(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var n=e;switch(e=e.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Hc(n),Xr(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}t.removeChild(n)}}function wx(t,e,n,i){for(;t.nodeType===1;){var r=n;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!i&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(i){if(!t[Ai])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(c=t.getAttribute("rel"),c==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(c!==r.rel||t.getAttribute("href")!==(r.href==null||r.href===""?null:r.href)||t.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin)||t.getAttribute("title")!==(r.title==null?null:r.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(c=t.getAttribute("src"),(c!==(r.src==null?null:r.src)||t.getAttribute("type")!==(r.type==null?null:r.type)||t.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin))&&c&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var c=r.name==null?null:""+r.name;if(r.type==="hidden"&&t.getAttribute("name")===c)return t}else return t;if(t=Ue(t.nextSibling),t===null)break}return null}function Mx(t,e,n){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Ue(t.nextSibling),t===null))return null;return t}function um(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=Ue(t.nextSibling),t===null))return null;return t}function qc(t){return t.data==="$?"||t.data==="$~"}function Yc(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Nx(t,e){var n=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||n.readyState!=="loading")e();else{var i=function(){e(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),t._reactRetry=i}}function Ue(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var Gc=null;function dm(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"||n==="/&"){if(e===0)return Ue(t.nextSibling);e--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||e++}t=t.nextSibling}return null}function fm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(e===0)return t;e--}else n!=="/$"&&n!=="/&"||e++}t=t.previousSibling}return null}function hm(t,e,n){switch(e=Gl(n),t){case"html":if(t=e.documentElement,!t)throw Error(o(452));return t;case"head":if(t=e.head,!t)throw Error(o(453));return t;case"body":if(t=e.body,!t)throw Error(o(454));return t;default:throw Error(o(451))}}function cs(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);Xr(t)}var Le=new Map,pm=new Set;function Xl(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var xn=X.d;X.d={f:Ax,r:kx,D:zx,C:Ex,L:Cx,m:Dx,X:Rx,S:_x,M:Ox};function Ax(){var t=xn.f(),e=Ol();return t||e}function kx(t){var e=Aa(t);e!==null&&e.tag===5&&e.type==="form"?Ch(e):xn.r(t)}var si=typeof document>"u"?null:document;function mm(t,e,n){var i=si;if(i&&typeof e=="string"&&e){var r=Ee(e);r='link[rel="'+t+'"][href="'+r+'"]',typeof n=="string"&&(r+='[crossorigin="'+n+'"]'),pm.has(r)||(pm.add(r),t={rel:t,crossOrigin:n,href:e},i.querySelector(r)===null&&(e=i.createElement("link"),ae(e,"link",t),Pt(e),i.head.appendChild(e)))}}function zx(t){xn.D(t),mm("dns-prefetch",t,null)}function Ex(t,e){xn.C(t,e),mm("preconnect",t,e)}function Cx(t,e,n){xn.L(t,e,n);var i=si;if(i&&t&&e){var r='link[rel="preload"][as="'+Ee(e)+'"]';e==="image"&&n&&n.imageSrcSet?(r+='[imagesrcset="'+Ee(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(r+='[imagesizes="'+Ee(n.imageSizes)+'"]')):r+='[href="'+Ee(t)+'"]';var c=r;switch(e){case"style":c=li(t);break;case"script":c=ri(t)}Le.has(c)||(t=b({rel:"preload",href:e==="image"&&n&&n.imageSrcSet?void 0:t,as:e},n),Le.set(c,t),i.querySelector(r)!==null||e==="style"&&i.querySelector(us(c))||e==="script"&&i.querySelector(ds(c))||(e=i.createElement("link"),ae(e,"link",t),Pt(e),i.head.appendChild(e)))}}function Dx(t,e){xn.m(t,e);var n=si;if(n&&t){var i=e&&typeof e.as=="string"?e.as:"script",r='link[rel="modulepreload"][as="'+Ee(i)+'"][href="'+Ee(t)+'"]',c=r;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=ri(t)}if(!Le.has(c)&&(t=b({rel:"modulepreload",href:t},e),Le.set(c,t),n.querySelector(r)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(ds(c)))return}i=n.createElement("link"),ae(i,"link",t),Pt(i),n.head.appendChild(i)}}}function _x(t,e,n){xn.S(t,e,n);var i=si;if(i&&t){var r=ka(i).hoistableStyles,c=li(t);e=e||"default";var p=r.get(c);if(!p){var v={loading:0,preload:null};if(p=i.querySelector(us(c)))v.loading=5;else{t=b({rel:"stylesheet",href:t,"data-precedence":e},n),(n=Le.get(c))&&Xc(t,n);var S=p=i.createElement("link");Pt(S),ae(S,"link",t),S._p=new Promise(function(A,_){S.onload=A,S.onerror=_}),S.addEventListener("load",function(){v.loading|=1}),S.addEventListener("error",function(){v.loading|=2}),v.loading|=4,Kl(p,e,i)}p={type:"stylesheet",instance:p,count:1,state:v},r.set(c,p)}}}function Rx(t,e){xn.X(t,e);var n=si;if(n&&t){var i=ka(n).hoistableScripts,r=ri(t),c=i.get(r);c||(c=n.querySelector(ds(r)),c||(t=b({src:t,async:!0},e),(e=Le.get(r))&&Kc(t,e),c=n.createElement("script"),Pt(c),ae(c,"link",t),n.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},i.set(r,c))}}function Ox(t,e){xn.M(t,e);var n=si;if(n&&t){var i=ka(n).hoistableScripts,r=ri(t),c=i.get(r);c||(c=n.querySelector(ds(r)),c||(t=b({src:t,async:!0,type:"module"},e),(e=Le.get(r))&&Kc(t,e),c=n.createElement("script"),Pt(c),ae(c,"link",t),n.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},i.set(r,c))}}function gm(t,e,n,i){var r=(r=pt.current)?Xl(r):null;if(!r)throw Error(o(446));switch(t){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(e=li(n.href),n=ka(r).hoistableStyles,i=n.get(e),i||(i={type:"style",instance:null,count:0,state:null},n.set(e,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){t=li(n.href);var c=ka(r).hoistableStyles,p=c.get(t);if(p||(r=r.ownerDocument||r,p={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(t,p),(c=r.querySelector(us(t)))&&!c._p&&(p.instance=c,p.state.loading=5),Le.has(t)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Le.set(t,n),c||Vx(r,t,n,p.state))),e&&i===null)throw Error(o(528,""));return p}if(e&&i!==null)throw Error(o(529,""));return null;case"script":return e=n.async,n=n.src,typeof n=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=ri(n),n=ka(r).hoistableScripts,i=n.get(e),i||(i={type:"script",instance:null,count:0,state:null},n.set(e,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,t))}}function li(t){return'href="'+Ee(t)+'"'}function us(t){return'link[rel="stylesheet"]['+t+"]"}function ym(t){return b({},t,{"data-precedence":t.precedence,precedence:null})}function Vx(t,e,n,i){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?i.loading=1:(e=t.createElement("link"),i.preload=e,e.addEventListener("load",function(){return i.loading|=1}),e.addEventListener("error",function(){return i.loading|=2}),ae(e,"link",n),Pt(e),t.head.appendChild(e))}function ri(t){return'[src="'+Ee(t)+'"]'}function ds(t){return"script[async]"+t}function vm(t,e,n){if(e.count++,e.instance===null)switch(e.type){case"style":var i=t.querySelector('style[data-href~="'+Ee(n.href)+'"]');if(i)return e.instance=i,Pt(i),i;var r=b({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(t.ownerDocument||t).createElement("style"),Pt(i),ae(i,"style",r),Kl(i,n.precedence,t),e.instance=i;case"stylesheet":r=li(n.href);var c=t.querySelector(us(r));if(c)return e.state.loading|=4,e.instance=c,Pt(c),c;i=ym(n),(r=Le.get(r))&&Xc(i,r),c=(t.ownerDocument||t).createElement("link"),Pt(c);var p=c;return p._p=new Promise(function(v,S){p.onload=v,p.onerror=S}),ae(c,"link",i),e.state.loading|=4,Kl(c,n.precedence,t),e.instance=c;case"script":return c=ri(n.src),(r=t.querySelector(ds(c)))?(e.instance=r,Pt(r),r):(i=n,(r=Le.get(c))&&(i=b({},n),Kc(i,r)),t=t.ownerDocument||t,r=t.createElement("script"),Pt(r),ae(r,"link",i),t.head.appendChild(r),e.instance=r);case"void":return null;default:throw Error(o(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(i=e.instance,e.state.loading|=4,Kl(i,n.precedence,t));return e.instance}function Kl(t,e,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),r=i.length?i[i.length-1]:null,c=r,p=0;p<i.length;p++){var v=i[p];if(v.dataset.precedence===e)c=v;else if(c!==r)break}c?c.parentNode.insertBefore(t,c.nextSibling):(e=n.nodeType===9?n.head:n,e.insertBefore(t,e.firstChild))}function Xc(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function Kc(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var Ql=null;function xm(t,e,n){if(Ql===null){var i=new Map,r=Ql=new Map;r.set(n,i)}else r=Ql,i=r.get(n),i||(i=new Map,r.set(n,i));if(i.has(t))return i;for(i.set(t,null),n=n.getElementsByTagName(t),r=0;r<n.length;r++){var c=n[r];if(!(c[Ai]||c[It]||t==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var p=c.getAttribute(e)||"";p=t+p;var v=i.get(p);v?v.push(c):i.set(p,[c])}}return i}function bm(t,e,n){t=t.ownerDocument||t,t.head.insertBefore(n,e==="title"?t.querySelector("head > title"):null)}function Ux(t,e,n){if(n===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;return e.rel==="stylesheet"?(t=e.disabled,typeof e.precedence=="string"&&t==null):!0;case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function Sm(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Lx(t,e,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var r=li(i.href),c=e.querySelector(us(r));if(c){e=c._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=Zl.bind(t),e.then(t,t)),n.state.loading|=4,n.instance=c,Pt(c);return}c=e.ownerDocument||e,i=ym(i),(r=Le.get(r))&&Xc(i,r),c=c.createElement("link"),Pt(c);var p=c;p._p=new Promise(function(v,S){p.onload=v,p.onerror=S}),ae(c,"link",i),n.instance=c}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(t.count++,n=Zl.bind(t),e.addEventListener("load",n),e.addEventListener("error",n))}}var Qc=0;function Bx(t,e){return t.stylesheets&&t.count===0&&$l(t,t.stylesheets),0<t.count||0<t.imgCount?function(n){var i=setTimeout(function(){if(t.stylesheets&&$l(t,t.stylesheets),t.unsuspend){var c=t.unsuspend;t.unsuspend=null,c()}},6e4+e);0<t.imgBytes&&Qc===0&&(Qc=62500*xx());var r=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&$l(t,t.stylesheets),t.unsuspend)){var c=t.unsuspend;t.unsuspend=null,c()}},(t.imgBytes>Qc?50:800)+e);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(i),clearTimeout(r)}}:null}function Zl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)$l(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Jl=null;function $l(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Jl=new Map,e.forEach(Hx,t),Jl=null,Zl.call(t))}function Hx(t,e){if(!(e.state.loading&4)){var n=Jl.get(t);if(n)var i=n.get(null);else{n=new Map,Jl.set(t,n);for(var r=t.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<r.length;c++){var p=r[c];(p.nodeName==="LINK"||p.getAttribute("media")!=="not all")&&(n.set(p.dataset.precedence,p),i=p)}i&&n.set(null,i)}r=e.instance,p=r.getAttribute("data-precedence"),c=n.get(p)||i,c===i&&n.set(null,r),n.set(p,r),this.count++,i=Zl.bind(this),r.addEventListener("load",i),r.addEventListener("error",i),c?c.parentNode.insertBefore(r,c.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(r,t.firstChild)),e.state.loading|=4}}var fs={$$typeof:Y,Provider:null,Consumer:null,_currentValue:I,_currentValue2:I,_threadCount:0};function qx(t,e,n,i,r,c,p,v,S){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Hr(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Hr(0),this.hiddenUpdates=Hr(null),this.identifierPrefix=i,this.onUncaughtError=r,this.onCaughtError=c,this.onRecoverableError=p,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=S,this.incompleteTransitions=new Map}function jm(t,e,n,i,r,c,p,v,S,A,_,V){return t=new qx(t,e,n,p,S,A,_,V,v),e=1,c===!0&&(e|=24),c=Te(3,null,null,e),t.current=c,c.stateNode=t,e=Mo(),e.refCount++,t.pooledCache=e,e.refCount++,c.memoizedState={element:i,isDehydrated:n,cache:e},zo(c),t}function Tm(t){return t?(t=La,t):La}function wm(t,e,n,i,r,c){r=Tm(r),i.context===null?i.context=r:i.pendingContext=r,i=Cn(e),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=Dn(t,i,e),n!==null&&(ve(n,t,e),Xi(n,t,e))}function Mm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Zc(t,e){Mm(t,e),(t=t.alternate)&&Mm(t,e)}function Nm(t){if(t.tag===13||t.tag===31){var e=sa(t,67108864);e!==null&&ve(e,t,67108864),Zc(t,67108864)}}function Am(t){if(t.tag===13||t.tag===31){var e=ke();e=qr(e);var n=sa(t,e);n!==null&&ve(n,t,e),Zc(t,e)}}var Fl=!0;function Yx(t,e,n,i){var r=D.T;D.T=null;var c=X.p;try{X.p=2,Jc(t,e,n,i)}finally{X.p=c,D.T=r}}function Gx(t,e,n,i){var r=D.T;D.T=null;var c=X.p;try{X.p=8,Jc(t,e,n,i)}finally{X.p=c,D.T=r}}function Jc(t,e,n,i){if(Fl){var r=$c(i);if(r===null)Rc(t,e,i,Pl,n),zm(t,i);else if(Kx(r,t,e,n,i))i.stopPropagation();else if(zm(t,i),e&4&&-1<Xx.indexOf(t)){for(;r!==null;){var c=Aa(r);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var p=ta(c.pendingLanes);if(p!==0){var v=c;for(v.pendingLanes|=2,v.entangledLanes|=2;p;){var S=1<<31-Se(p);v.entanglements[1]|=S,p&=~S}We(c),(Tt&6)===0&&(_l=xe()+500,ls(0))}}break;case 31:case 13:v=sa(c,2),v!==null&&ve(v,c,2),Ol(),Zc(c,2)}if(c=$c(i),c===null&&Rc(t,e,i,Pl,n),c===r)break;r=c}r!==null&&i.stopPropagation()}else Rc(t,e,i,null,n)}}function $c(t){return t=Fr(t),Fc(t)}var Pl=null;function Fc(t){if(Pl=null,t=Na(t),t!==null){var e=h(t);if(e===null)t=null;else{var n=e.tag;if(n===13){if(t=f(e),t!==null)return t;t=null}else if(n===31){if(t=m(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return Pl=t,null}function km(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(zy()){case Od:return 2;case Vd:return 8;case Hs:case Ey:return 32;case Ud:return 268435456;default:return 32}default:return 32}}var Pc=!1,Gn=null,Xn=null,Kn=null,hs=new Map,ps=new Map,Qn=[],Xx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function zm(t,e){switch(t){case"focusin":case"focusout":Gn=null;break;case"dragenter":case"dragleave":Xn=null;break;case"mouseover":case"mouseout":Kn=null;break;case"pointerover":case"pointerout":hs.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ps.delete(e.pointerId)}}function ms(t,e,n,i,r,c){return t===null||t.nativeEvent!==c?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:c,targetContainers:[r]},e!==null&&(e=Aa(e),e!==null&&Nm(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Kx(t,e,n,i,r){switch(e){case"focusin":return Gn=ms(Gn,t,e,n,i,r),!0;case"dragenter":return Xn=ms(Xn,t,e,n,i,r),!0;case"mouseover":return Kn=ms(Kn,t,e,n,i,r),!0;case"pointerover":var c=r.pointerId;return hs.set(c,ms(hs.get(c)||null,t,e,n,i,r)),!0;case"gotpointercapture":return c=r.pointerId,ps.set(c,ms(ps.get(c)||null,t,e,n,i,r)),!0}return!1}function Em(t){var e=Na(t.target);if(e!==null){var n=h(e);if(n!==null){if(e=n.tag,e===13){if(e=f(n),e!==null){t.blockedOn=e,Gd(t.priority,function(){Am(n)});return}}else if(e===31){if(e=m(n),e!==null){t.blockedOn=e,Gd(t.priority,function(){Am(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Wl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=$c(t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);$r=i,n.target.dispatchEvent(i),$r=null}else return e=Aa(n),e!==null&&Nm(e),t.blockedOn=n,!1;e.shift()}return!0}function Cm(t,e,n){Wl(t)&&n.delete(e)}function Qx(){Pc=!1,Gn!==null&&Wl(Gn)&&(Gn=null),Xn!==null&&Wl(Xn)&&(Xn=null),Kn!==null&&Wl(Kn)&&(Kn=null),hs.forEach(Cm),ps.forEach(Cm)}function Il(t,e){t.blockedOn===e&&(t.blockedOn=null,Pc||(Pc=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,Qx)))}var tr=null;function Dm(t){tr!==t&&(tr=t,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){tr===t&&(tr=null);for(var e=0;e<t.length;e+=3){var n=t[e],i=t[e+1],r=t[e+2];if(typeof i!="function"){if(Fc(i||n)===null)continue;break}var c=Aa(n);c!==null&&(t.splice(e,3),e-=3,$o(c,{pending:!0,data:r,method:n.method,action:i},i,r))}}))}function oi(t){function e(S){return Il(S,t)}Gn!==null&&Il(Gn,t),Xn!==null&&Il(Xn,t),Kn!==null&&Il(Kn,t),hs.forEach(e),ps.forEach(e);for(var n=0;n<Qn.length;n++){var i=Qn[n];i.blockedOn===t&&(i.blockedOn=null)}for(;0<Qn.length&&(n=Qn[0],n.blockedOn===null);)Em(n),n.blockedOn===null&&Qn.shift();if(n=(t.ownerDocument||t).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var r=n[i],c=n[i+1],p=r[fe]||null;if(typeof c=="function")p||Dm(n);else if(p){var v=null;if(c&&c.hasAttribute("formAction")){if(r=c,p=c[fe]||null)v=p.formAction;else if(Fc(r)!==null)continue}else v=p.action;typeof v=="function"?n[i+1]=v:(n.splice(i,3),i-=3),Dm(n)}}}function _m(){function t(c){c.canIntercept&&c.info==="react-transition"&&c.intercept({handler:function(){return new Promise(function(p){return r=p})},focusReset:"manual",scroll:"manual"})}function e(){r!==null&&(r(),r=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var c=navigation.currentEntry;c&&c.url!=null&&navigation.navigate(c.url,{state:c.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,r=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),r!==null&&(r(),r=null)}}}function Wc(t){this._internalRoot=t}er.prototype.render=Wc.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(o(409));var n=e.current,i=ke();wm(n,i,t,e,null,null)},er.prototype.unmount=Wc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;wm(t.current,2,null,t,null,null),Ol(),e[Ma]=null}};function er(t){this._internalRoot=t}er.prototype.unstable_scheduleHydration=function(t){if(t){var e=Yd();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Qn.length&&e!==0&&e<Qn[n].priority;n++);Qn.splice(n,0,t),n===0&&Em(t)}};var Rm=s.version;if(Rm!=="19.2.3")throw Error(o(527,Rm,"19.2.3"));X.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(o(188)):(t=Object.keys(t).join(","),Error(o(268,t)));return t=y(e),t=t!==null?x(t):null,t=t===null?null:t.stateNode,t};var Zx={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:D,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var nr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!nr.isDisabled&&nr.supportsFiber)try{wi=nr.inject(Zx),be=nr}catch{}}return ys.createRoot=function(t,e){if(!u(t))throw Error(o(299));var n=!1,i="",r=qh,c=Yh,p=Gh;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onUncaughtError!==void 0&&(r=e.onUncaughtError),e.onCaughtError!==void 0&&(c=e.onCaughtError),e.onRecoverableError!==void 0&&(p=e.onRecoverableError)),e=jm(t,1,!1,null,null,n,i,null,r,c,p,_m),t[Ma]=e.current,_c(t),new Wc(e)},ys.hydrateRoot=function(t,e,n){if(!u(t))throw Error(o(299));var i=!1,r="",c=qh,p=Yh,v=Gh,S=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(p=n.onCaughtError),n.onRecoverableError!==void 0&&(v=n.onRecoverableError),n.formState!==void 0&&(S=n.formState)),e=jm(t,1,!0,e,n??null,i,r,S,c,p,v,_m),e.context=Tm(null),n=e.current,i=ke(),i=qr(i),r=Cn(i),r.callback=null,Dn(n,r,i),n=i,e.current.lanes=n,Ni(e,n),We(e),t[Ma]=e.current,_c(t),new er(e)},ys.version="19.2.3",ys}var Xm;function a2(){if(Xm)return eu.exports;Xm=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(s){console.error(s)}}return a(),eu.exports=n2(),eu.exports}var i2=a2();const Xu=U.createContext({});function Ku(a){const s=U.useRef(null);return s.current===null&&(s.current=a()),s.current}const Qu=typeof window<"u",c1=Qu?U.useLayoutEffect:U.useEffect,Tr=U.createContext(null);function Zu(a,s){a.indexOf(s)===-1&&a.push(s)}function Ju(a,s){const l=a.indexOf(s);l>-1&&a.splice(l,1)}const tn=(a,s,l)=>l>s?s:l<a?a:l;let $u=()=>{};const Sn={},u1=a=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(a);function d1(a){return typeof a=="object"&&a!==null}const f1=a=>/^0[^.\s]+$/u.test(a);function Fu(a){let s;return()=>(s===void 0&&(s=a()),s)}const qe=a=>a,s2=(a,s)=>l=>s(a(l)),Ds=(...a)=>a.reduce(s2),Ns=(a,s,l)=>{const o=s-a;return o===0?1:(l-a)/o};class Pu{constructor(){this.subscriptions=[]}add(s){return Zu(this.subscriptions,s),()=>Ju(this.subscriptions,s)}notify(s,l,o){const u=this.subscriptions.length;if(u)if(u===1)this.subscriptions[0](s,l,o);else for(let h=0;h<u;h++){const f=this.subscriptions[h];f&&f(s,l,o)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const bn=a=>a*1e3,He=a=>a/1e3;function h1(a,s){return s?a*(1e3/s):0}const p1=(a,s,l)=>(((1-3*l+3*s)*a+(3*l-6*s))*a+3*s)*a,l2=1e-7,r2=12;function o2(a,s,l,o,u){let h,f,m=0;do f=s+(l-s)/2,h=p1(f,o,u)-a,h>0?l=f:s=f;while(Math.abs(h)>l2&&++m<r2);return f}function _s(a,s,l,o){if(a===s&&l===o)return qe;const u=h=>o2(h,0,1,a,l);return h=>h===0||h===1?h:p1(u(h),s,o)}const m1=a=>s=>s<=.5?a(2*s)/2:(2-a(2*(1-s)))/2,g1=a=>s=>1-a(1-s),y1=_s(.33,1.53,.69,.99),Wu=g1(y1),v1=m1(Wu),x1=a=>(a*=2)<1?.5*Wu(a):.5*(2-Math.pow(2,-10*(a-1))),Iu=a=>1-Math.sin(Math.acos(a)),b1=g1(Iu),S1=m1(Iu),c2=_s(.42,0,1,1),u2=_s(0,0,.58,1),j1=_s(.42,0,.58,1),d2=a=>Array.isArray(a)&&typeof a[0]!="number",T1=a=>Array.isArray(a)&&typeof a[0]=="number",f2={linear:qe,easeIn:c2,easeInOut:j1,easeOut:u2,circIn:Iu,circInOut:S1,circOut:b1,backIn:Wu,backInOut:v1,backOut:y1,anticipate:x1},h2=a=>typeof a=="string",Km=a=>{if(T1(a)){$u(a.length===4);const[s,l,o,u]=a;return _s(s,l,o,u)}else if(h2(a))return f2[a];return a},ar=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function p2(a,s){let l=new Set,o=new Set,u=!1,h=!1;const f=new WeakSet;let m={delta:0,timestamp:0,isProcessing:!1};function g(x){f.has(x)&&(y.schedule(x),a()),x(m)}const y={schedule:(x,b=!1,j=!1)=>{const C=j&&u?l:o;return b&&f.add(x),C.has(x)||C.add(x),x},cancel:x=>{o.delete(x),f.delete(x)},process:x=>{if(m=x,u){h=!0;return}u=!0,[l,o]=[o,l],l.forEach(g),l.clear(),u=!1,h&&(h=!1,y.process(x))}};return y}const m2=40;function w1(a,s){let l=!1,o=!0;const u={delta:0,timestamp:0,isProcessing:!1},h=()=>l=!0,f=ar.reduce((Y,H)=>(Y[H]=p2(h),Y),{}),{setup:m,read:g,resolveKeyframes:y,preUpdate:x,update:b,preRender:j,render:k,postRender:C}=f,B=()=>{const Y=Sn.useManualTiming?u.timestamp:performance.now();l=!1,Sn.useManualTiming||(u.delta=o?1e3/60:Math.max(Math.min(Y-u.timestamp,m2),1)),u.timestamp=Y,u.isProcessing=!0,m.process(u),g.process(u),y.process(u),x.process(u),b.process(u),j.process(u),k.process(u),C.process(u),u.isProcessing=!1,l&&s&&(o=!1,a(B))},K=()=>{l=!0,o=!0,u.isProcessing||a(B)};return{schedule:ar.reduce((Y,H)=>{const F=f[H];return Y[H]=(st,$=!1,q=!1)=>(l||K(),F.schedule(st,$,q)),Y},{}),cancel:Y=>{for(let H=0;H<ar.length;H++)f[ar[H]].cancel(Y)},state:u,steps:f}}const{schedule:_t,cancel:Fn,state:ie,steps:su}=w1(typeof requestAnimationFrame<"u"?requestAnimationFrame:qe,!0);let cr;function g2(){cr=void 0}const ue={now:()=>(cr===void 0&&ue.set(ie.isProcessing||Sn.useManualTiming?ie.timestamp:performance.now()),cr),set:a=>{cr=a,queueMicrotask(g2)}},M1=a=>s=>typeof s=="string"&&s.startsWith(a),N1=M1("--"),y2=M1("var(--"),td=a=>y2(a)?v2.test(a.split("/*")[0].trim()):!1,v2=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function Qm(a){return typeof a!="string"?!1:a.split("/*")[0].includes("var(--")}const vi={test:a=>typeof a=="number",parse:parseFloat,transform:a=>a},As={...vi,transform:a=>tn(0,1,a)},ir={...vi,default:1},Ss=a=>Math.round(a*1e5)/1e5,ed=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function x2(a){return a==null}const b2=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,nd=(a,s)=>l=>!!(typeof l=="string"&&b2.test(l)&&l.startsWith(a)||s&&!x2(l)&&Object.prototype.hasOwnProperty.call(l,s)),A1=(a,s,l)=>o=>{if(typeof o!="string")return o;const[u,h,f,m]=o.match(ed);return{[a]:parseFloat(u),[s]:parseFloat(h),[l]:parseFloat(f),alpha:m!==void 0?parseFloat(m):1}},S2=a=>tn(0,255,a),lu={...vi,transform:a=>Math.round(S2(a))},ba={test:nd("rgb","red"),parse:A1("red","green","blue"),transform:({red:a,green:s,blue:l,alpha:o=1})=>"rgba("+lu.transform(a)+", "+lu.transform(s)+", "+lu.transform(l)+", "+Ss(As.transform(o))+")"};function j2(a){let s="",l="",o="",u="";return a.length>5?(s=a.substring(1,3),l=a.substring(3,5),o=a.substring(5,7),u=a.substring(7,9)):(s=a.substring(1,2),l=a.substring(2,3),o=a.substring(3,4),u=a.substring(4,5),s+=s,l+=l,o+=o,u+=u),{red:parseInt(s,16),green:parseInt(l,16),blue:parseInt(o,16),alpha:u?parseInt(u,16)/255:1}}const Su={test:nd("#"),parse:j2,transform:ba.transform},Rs=a=>({test:s=>typeof s=="string"&&s.endsWith(a)&&s.split(" ").length===1,parse:parseFloat,transform:s=>`${s}${a}`}),Jn=Rs("deg"),Ie=Rs("%"),P=Rs("px"),T2=Rs("vh"),w2=Rs("vw"),Zm={...Ie,parse:a=>Ie.parse(a)/100,transform:a=>Ie.transform(a*100)},ci={test:nd("hsl","hue"),parse:A1("hue","saturation","lightness"),transform:({hue:a,saturation:s,lightness:l,alpha:o=1})=>"hsla("+Math.round(a)+", "+Ie.transform(Ss(s))+", "+Ie.transform(Ss(l))+", "+Ss(As.transform(o))+")"},Qt={test:a=>ba.test(a)||Su.test(a)||ci.test(a),parse:a=>ba.test(a)?ba.parse(a):ci.test(a)?ci.parse(a):Su.parse(a),transform:a=>typeof a=="string"?a:a.hasOwnProperty("red")?ba.transform(a):ci.transform(a),getAnimatableNone:a=>{const s=Qt.parse(a);return s.alpha=0,Qt.transform(s)}},M2=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function N2(a){return isNaN(a)&&typeof a=="string"&&(a.match(ed)?.length||0)+(a.match(M2)?.length||0)>0}const k1="number",z1="color",A2="var",k2="var(",Jm="${}",z2=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function ks(a){const s=a.toString(),l=[],o={color:[],number:[],var:[]},u=[];let h=0;const m=s.replace(z2,g=>(Qt.test(g)?(o.color.push(h),u.push(z1),l.push(Qt.parse(g))):g.startsWith(k2)?(o.var.push(h),u.push(A2),l.push(g)):(o.number.push(h),u.push(k1),l.push(parseFloat(g))),++h,Jm)).split(Jm);return{values:l,split:m,indexes:o,types:u}}function E1(a){return ks(a).values}function C1(a){const{split:s,types:l}=ks(a),o=s.length;return u=>{let h="";for(let f=0;f<o;f++)if(h+=s[f],u[f]!==void 0){const m=l[f];m===k1?h+=Ss(u[f]):m===z1?h+=Qt.transform(u[f]):h+=u[f]}return h}}const E2=a=>typeof a=="number"?0:Qt.test(a)?Qt.getAnimatableNone(a):a;function C2(a){const s=E1(a);return C1(a)(s.map(E2))}const Pn={test:N2,parse:E1,createTransformer:C1,getAnimatableNone:C2};function ru(a,s,l){return l<0&&(l+=1),l>1&&(l-=1),l<1/6?a+(s-a)*6*l:l<1/2?s:l<2/3?a+(s-a)*(2/3-l)*6:a}function D2({hue:a,saturation:s,lightness:l,alpha:o}){a/=360,s/=100,l/=100;let u=0,h=0,f=0;if(!s)u=h=f=l;else{const m=l<.5?l*(1+s):l+s-l*s,g=2*l-m;u=ru(g,m,a+1/3),h=ru(g,m,a),f=ru(g,m,a-1/3)}return{red:Math.round(u*255),green:Math.round(h*255),blue:Math.round(f*255),alpha:o}}function pr(a,s){return l=>l>0?s:a}const Ot=(a,s,l)=>a+(s-a)*l,ou=(a,s,l)=>{const o=a*a,u=l*(s*s-o)+o;return u<0?0:Math.sqrt(u)},_2=[Su,ba,ci],R2=a=>_2.find(s=>s.test(a));function $m(a){const s=R2(a);if(!s)return!1;let l=s.parse(a);return s===ci&&(l=D2(l)),l}const Fm=(a,s)=>{const l=$m(a),o=$m(s);if(!l||!o)return pr(a,s);const u={...l};return h=>(u.red=ou(l.red,o.red,h),u.green=ou(l.green,o.green,h),u.blue=ou(l.blue,o.blue,h),u.alpha=Ot(l.alpha,o.alpha,h),ba.transform(u))},ju=new Set(["none","hidden"]);function O2(a,s){return ju.has(a)?l=>l<=0?a:s:l=>l>=1?s:a}function V2(a,s){return l=>Ot(a,s,l)}function ad(a){return typeof a=="number"?V2:typeof a=="string"?td(a)?pr:Qt.test(a)?Fm:B2:Array.isArray(a)?D1:typeof a=="object"?Qt.test(a)?Fm:U2:pr}function D1(a,s){const l=[...a],o=l.length,u=a.map((h,f)=>ad(h)(h,s[f]));return h=>{for(let f=0;f<o;f++)l[f]=u[f](h);return l}}function U2(a,s){const l={...a,...s},o={};for(const u in l)a[u]!==void 0&&s[u]!==void 0&&(o[u]=ad(a[u])(a[u],s[u]));return u=>{for(const h in o)l[h]=o[h](u);return l}}function L2(a,s){const l=[],o={color:0,var:0,number:0};for(let u=0;u<s.values.length;u++){const h=s.types[u],f=a.indexes[h][o[h]],m=a.values[f]??0;l[u]=m,o[h]++}return l}const B2=(a,s)=>{const l=Pn.createTransformer(s),o=ks(a),u=ks(s);return o.indexes.var.length===u.indexes.var.length&&o.indexes.color.length===u.indexes.color.length&&o.indexes.number.length>=u.indexes.number.length?ju.has(a)&&!u.values.length||ju.has(s)&&!o.values.length?O2(a,s):Ds(D1(L2(o,u),u.values),l):pr(a,s)};function _1(a,s,l){return typeof a=="number"&&typeof s=="number"&&typeof l=="number"?Ot(a,s,l):ad(a)(a,s)}const H2=a=>{const s=({timestamp:l})=>a(l);return{start:(l=!0)=>_t.update(s,l),stop:()=>Fn(s),now:()=>ie.isProcessing?ie.timestamp:ue.now()}},R1=(a,s,l=10)=>{let o="";const u=Math.max(Math.round(s/l),2);for(let h=0;h<u;h++)o+=Math.round(a(h/(u-1))*1e4)/1e4+", ";return`linear(${o.substring(0,o.length-2)})`},mr=2e4;function id(a){let s=0;const l=50;let o=a.next(s);for(;!o.done&&s<mr;)s+=l,o=a.next(s);return s>=mr?1/0:s}function q2(a,s=100,l){const o=l({...a,keyframes:[0,s]}),u=Math.min(id(o),mr);return{type:"keyframes",ease:h=>o.next(u*h).value/s,duration:He(u)}}const Y2=5;function O1(a,s,l){const o=Math.max(s-Y2,0);return h1(l-a(o),s-o)}const Lt={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},cu=.001;function G2({duration:a=Lt.duration,bounce:s=Lt.bounce,velocity:l=Lt.velocity,mass:o=Lt.mass}){let u,h,f=1-s;f=tn(Lt.minDamping,Lt.maxDamping,f),a=tn(Lt.minDuration,Lt.maxDuration,He(a)),f<1?(u=y=>{const x=y*f,b=x*a,j=x-l,k=Tu(y,f),C=Math.exp(-b);return cu-j/k*C},h=y=>{const b=y*f*a,j=b*l+l,k=Math.pow(f,2)*Math.pow(y,2)*a,C=Math.exp(-b),B=Tu(Math.pow(y,2),f);return(-u(y)+cu>0?-1:1)*((j-k)*C)/B}):(u=y=>{const x=Math.exp(-y*a),b=(y-l)*a+1;return-cu+x*b},h=y=>{const x=Math.exp(-y*a),b=(l-y)*(a*a);return x*b});const m=5/a,g=K2(u,h,m);if(a=bn(a),isNaN(g))return{stiffness:Lt.stiffness,damping:Lt.damping,duration:a};{const y=Math.pow(g,2)*o;return{stiffness:y,damping:f*2*Math.sqrt(o*y),duration:a}}}const X2=12;function K2(a,s,l){let o=l;for(let u=1;u<X2;u++)o=o-a(o)/s(o);return o}function Tu(a,s){return a*Math.sqrt(1-s*s)}const Q2=["duration","bounce"],Z2=["stiffness","damping","mass"];function Pm(a,s){return s.some(l=>a[l]!==void 0)}function J2(a){let s={velocity:Lt.velocity,stiffness:Lt.stiffness,damping:Lt.damping,mass:Lt.mass,isResolvedFromDuration:!1,...a};if(!Pm(a,Z2)&&Pm(a,Q2))if(a.visualDuration){const l=a.visualDuration,o=2*Math.PI/(l*1.2),u=o*o,h=2*tn(.05,1,1-(a.bounce||0))*Math.sqrt(u);s={...s,mass:Lt.mass,stiffness:u,damping:h}}else{const l=G2(a);s={...s,...l,mass:Lt.mass},s.isResolvedFromDuration=!0}return s}function gr(a=Lt.visualDuration,s=Lt.bounce){const l=typeof a!="object"?{visualDuration:a,keyframes:[0,1],bounce:s}:a;let{restSpeed:o,restDelta:u}=l;const h=l.keyframes[0],f=l.keyframes[l.keyframes.length-1],m={done:!1,value:h},{stiffness:g,damping:y,mass:x,duration:b,velocity:j,isResolvedFromDuration:k}=J2({...l,velocity:-He(l.velocity||0)}),C=j||0,B=y/(2*Math.sqrt(g*x)),K=f-h,G=He(Math.sqrt(g/x)),J=Math.abs(K)<5;o||(o=J?Lt.restSpeed.granular:Lt.restSpeed.default),u||(u=J?Lt.restDelta.granular:Lt.restDelta.default);let Y;if(B<1){const F=Tu(G,B);Y=st=>{const $=Math.exp(-B*G*st);return f-$*((C+B*G*K)/F*Math.sin(F*st)+K*Math.cos(F*st))}}else if(B===1)Y=F=>f-Math.exp(-G*F)*(K+(C+G*K)*F);else{const F=G*Math.sqrt(B*B-1);Y=st=>{const $=Math.exp(-B*G*st),q=Math.min(F*st,300);return f-$*((C+B*G*K)*Math.sinh(q)+F*K*Math.cosh(q))/F}}const H={calculatedDuration:k&&b||null,next:F=>{const st=Y(F);if(k)m.done=F>=b;else{let $=F===0?C:0;B<1&&($=F===0?bn(C):O1(Y,F,st));const q=Math.abs($)<=o,nt=Math.abs(f-st)<=u;m.done=q&&nt}return m.value=m.done?f:st,m},toString:()=>{const F=Math.min(id(H),mr),st=R1($=>H.next(F*$).value,F,30);return F+"ms "+st},toTransition:()=>{}};return H}gr.applyToOptions=a=>{const s=q2(a,100,gr);return a.ease=s.ease,a.duration=bn(s.duration),a.type="keyframes",a};function wu({keyframes:a,velocity:s=0,power:l=.8,timeConstant:o=325,bounceDamping:u=10,bounceStiffness:h=500,modifyTarget:f,min:m,max:g,restDelta:y=.5,restSpeed:x}){const b=a[0],j={done:!1,value:b},k=q=>m!==void 0&&q<m||g!==void 0&&q>g,C=q=>m===void 0?g:g===void 0||Math.abs(m-q)<Math.abs(g-q)?m:g;let B=l*s;const K=b+B,G=f===void 0?K:f(K);G!==K&&(B=G-b);const J=q=>-B*Math.exp(-q/o),Y=q=>G+J(q),H=q=>{const nt=J(q),ot=Y(q);j.done=Math.abs(nt)<=y,j.value=j.done?G:ot};let F,st;const $=q=>{k(j.value)&&(F=q,st=gr({keyframes:[j.value,C(j.value)],velocity:O1(Y,q,j.value),damping:u,stiffness:h,restDelta:y,restSpeed:x}))};return $(0),{calculatedDuration:null,next:q=>{let nt=!1;return!st&&F===void 0&&(nt=!0,H(q),$(q)),F!==void 0&&q>=F?st.next(q-F):(!nt&&H(q),j)}}}function $2(a,s,l){const o=[],u=l||Sn.mix||_1,h=a.length-1;for(let f=0;f<h;f++){let m=u(a[f],a[f+1]);if(s){const g=Array.isArray(s)?s[f]||qe:s;m=Ds(g,m)}o.push(m)}return o}function F2(a,s,{clamp:l=!0,ease:o,mixer:u}={}){const h=a.length;if($u(h===s.length),h===1)return()=>s[0];if(h===2&&s[0]===s[1])return()=>s[1];const f=a[0]===a[1];a[0]>a[h-1]&&(a=[...a].reverse(),s=[...s].reverse());const m=$2(s,o,u),g=m.length,y=x=>{if(f&&x<a[0])return s[0];let b=0;if(g>1)for(;b<a.length-2&&!(x<a[b+1]);b++);const j=Ns(a[b],a[b+1],x);return m[b](j)};return l?x=>y(tn(a[0],a[h-1],x)):y}function P2(a,s){const l=a[a.length-1];for(let o=1;o<=s;o++){const u=Ns(0,s,o);a.push(Ot(l,1,u))}}function W2(a){const s=[0];return P2(s,a.length-1),s}function I2(a,s){return a.map(l=>l*s)}function tb(a,s){return a.map(()=>s||j1).splice(0,a.length-1)}function js({duration:a=300,keyframes:s,times:l,ease:o="easeInOut"}){const u=d2(o)?o.map(Km):Km(o),h={done:!1,value:s[0]},f=I2(l&&l.length===s.length?l:W2(s),a),m=F2(f,s,{ease:Array.isArray(u)?u:tb(s,u)});return{calculatedDuration:a,next:g=>(h.value=m(g),h.done=g>=a,h)}}const eb=a=>a!==null;function sd(a,{repeat:s,repeatType:l="loop"},o,u=1){const h=a.filter(eb),m=u<0||s&&l!=="loop"&&s%2===1?0:h.length-1;return!m||o===void 0?h[m]:o}const nb={decay:wu,inertia:wu,tween:js,keyframes:js,spring:gr};function V1(a){typeof a.type=="string"&&(a.type=nb[a.type])}class ld{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(s=>{this.resolve=s})}notifyFinished(){this.resolve()}then(s,l){return this.finished.then(s,l)}}const ab=a=>a/100;class rd extends ld{constructor(s){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{const{motionValue:l}=this.options;l&&l.updatedAt!==ue.now()&&this.tick(ue.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),this.options.onStop?.())},this.options=s,this.initAnimation(),this.play(),s.autoplay===!1&&this.pause()}initAnimation(){const{options:s}=this;V1(s);const{type:l=js,repeat:o=0,repeatDelay:u=0,repeatType:h,velocity:f=0}=s;let{keyframes:m}=s;const g=l||js;g!==js&&typeof m[0]!="number"&&(this.mixKeyframes=Ds(ab,_1(m[0],m[1])),m=[0,100]);const y=g({...s,keyframes:m});h==="mirror"&&(this.mirroredGenerator=g({...s,keyframes:[...m].reverse(),velocity:-f})),y.calculatedDuration===null&&(y.calculatedDuration=id(y));const{calculatedDuration:x}=y;this.calculatedDuration=x,this.resolvedDuration=x+u,this.totalDuration=this.resolvedDuration*(o+1)-u,this.generator=y}updateTime(s){const l=Math.round(s-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=l}tick(s,l=!1){const{generator:o,totalDuration:u,mixKeyframes:h,mirroredGenerator:f,resolvedDuration:m,calculatedDuration:g}=this;if(this.startTime===null)return o.next(0);const{delay:y=0,keyframes:x,repeat:b,repeatType:j,repeatDelay:k,type:C,onUpdate:B,finalKeyframe:K}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,s):this.speed<0&&(this.startTime=Math.min(s-u/this.speed,this.startTime)),l?this.currentTime=s:this.updateTime(s);const G=this.currentTime-y*(this.playbackSpeed>=0?1:-1),J=this.playbackSpeed>=0?G<0:G>u;this.currentTime=Math.max(G,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=u);let Y=this.currentTime,H=o;if(b){const q=Math.min(this.currentTime,u)/m;let nt=Math.floor(q),ot=q%1;!ot&&q>=1&&(ot=1),ot===1&&nt--,nt=Math.min(nt,b+1),nt%2&&(j==="reverse"?(ot=1-ot,k&&(ot-=k/m)):j==="mirror"&&(H=f)),Y=tn(0,1,ot)*m}const F=J?{done:!1,value:x[0]}:H.next(Y);h&&(F.value=h(F.value));let{done:st}=F;!J&&g!==null&&(st=this.playbackSpeed>=0?this.currentTime>=u:this.currentTime<=0);const $=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&st);return $&&C!==wu&&(F.value=sd(x,this.options,K,this.speed)),B&&B(F.value),$&&this.finish(),F}then(s,l){return this.finished.then(s,l)}get duration(){return He(this.calculatedDuration)}get iterationDuration(){const{delay:s=0}=this.options||{};return this.duration+He(s)}get time(){return He(this.currentTime)}set time(s){s=bn(s),this.currentTime=s,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=s:this.driver&&(this.startTime=this.driver.now()-s/this.playbackSpeed),this.driver?.start(!1)}get speed(){return this.playbackSpeed}set speed(s){this.updateTime(ue.now());const l=this.playbackSpeed!==s;this.playbackSpeed=s,l&&(this.time=He(this.currentTime))}play(){if(this.isStopped)return;const{driver:s=H2,startTime:l}=this.options;this.driver||(this.driver=s(u=>this.tick(u))),this.options.onPlay?.();const o=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=o):this.holdTime!==null?this.startTime=o-this.holdTime:this.startTime||(this.startTime=l??o),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(ue.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state="finished",this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(s){return this.startTime=0,this.tick(s,!0)}attachTimeline(s){return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),this.driver?.stop(),s.observe(this)}}function ib(a){for(let s=1;s<a.length;s++)a[s]??(a[s]=a[s-1])}const Sa=a=>a*180/Math.PI,Mu=a=>{const s=Sa(Math.atan2(a[1],a[0]));return Nu(s)},sb={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:a=>(Math.abs(a[0])+Math.abs(a[3]))/2,rotate:Mu,rotateZ:Mu,skewX:a=>Sa(Math.atan(a[1])),skewY:a=>Sa(Math.atan(a[2])),skew:a=>(Math.abs(a[1])+Math.abs(a[2]))/2},Nu=a=>(a=a%360,a<0&&(a+=360),a),Wm=Mu,Im=a=>Math.sqrt(a[0]*a[0]+a[1]*a[1]),t0=a=>Math.sqrt(a[4]*a[4]+a[5]*a[5]),lb={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:Im,scaleY:t0,scale:a=>(Im(a)+t0(a))/2,rotateX:a=>Nu(Sa(Math.atan2(a[6],a[5]))),rotateY:a=>Nu(Sa(Math.atan2(-a[2],a[0]))),rotateZ:Wm,rotate:Wm,skewX:a=>Sa(Math.atan(a[4])),skewY:a=>Sa(Math.atan(a[1])),skew:a=>(Math.abs(a[1])+Math.abs(a[4]))/2};function Au(a){return a.includes("scale")?1:0}function ku(a,s){if(!a||a==="none")return Au(s);const l=a.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let o,u;if(l)o=lb,u=l;else{const m=a.match(/^matrix\(([-\d.e\s,]+)\)$/u);o=sb,u=m}if(!u)return Au(s);const h=o[s],f=u[1].split(",").map(ob);return typeof h=="function"?h(f):f[h]}const rb=(a,s)=>{const{transform:l="none"}=getComputedStyle(a);return ku(l,s)};function ob(a){return parseFloat(a.trim())}const xi=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],bi=new Set(xi),e0=a=>a===vi||a===P,cb=new Set(["x","y","z"]),ub=xi.filter(a=>!cb.has(a));function db(a){const s=[];return ub.forEach(l=>{const o=a.getValue(l);o!==void 0&&(s.push([l,o.get()]),o.set(l.startsWith("scale")?1:0))}),s}const $n={width:({x:a},{paddingLeft:s="0",paddingRight:l="0"})=>a.max-a.min-parseFloat(s)-parseFloat(l),height:({y:a},{paddingTop:s="0",paddingBottom:l="0"})=>a.max-a.min-parseFloat(s)-parseFloat(l),top:(a,{top:s})=>parseFloat(s),left:(a,{left:s})=>parseFloat(s),bottom:({y:a},{top:s})=>parseFloat(s)+(a.max-a.min),right:({x:a},{left:s})=>parseFloat(s)+(a.max-a.min),x:(a,{transform:s})=>ku(s,"x"),y:(a,{transform:s})=>ku(s,"y")};$n.translateX=$n.x;$n.translateY=$n.y;const Ta=new Set;let zu=!1,Eu=!1,Cu=!1;function U1(){if(Eu){const a=Array.from(Ta).filter(o=>o.needsMeasurement),s=new Set(a.map(o=>o.element)),l=new Map;s.forEach(o=>{const u=db(o);u.length&&(l.set(o,u),o.render())}),a.forEach(o=>o.measureInitialState()),s.forEach(o=>{o.render();const u=l.get(o);u&&u.forEach(([h,f])=>{o.getValue(h)?.set(f)})}),a.forEach(o=>o.measureEndState()),a.forEach(o=>{o.suspendedScrollY!==void 0&&window.scrollTo(0,o.suspendedScrollY)})}Eu=!1,zu=!1,Ta.forEach(a=>a.complete(Cu)),Ta.clear()}function L1(){Ta.forEach(a=>{a.readKeyframes(),a.needsMeasurement&&(Eu=!0)})}function fb(){Cu=!0,L1(),U1(),Cu=!1}class od{constructor(s,l,o,u,h,f=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...s],this.onComplete=l,this.name=o,this.motionValue=u,this.element=h,this.isAsync=f}scheduleResolve(){this.state="scheduled",this.isAsync?(Ta.add(this),zu||(zu=!0,_t.read(L1),_t.resolveKeyframes(U1))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:s,name:l,element:o,motionValue:u}=this;if(s[0]===null){const h=u?.get(),f=s[s.length-1];if(h!==void 0)s[0]=h;else if(o&&l){const m=o.readValue(l,f);m!=null&&(s[0]=m)}s[0]===void 0&&(s[0]=f),u&&h===void 0&&u.set(s[0])}ib(s)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(s=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,s),Ta.delete(this)}cancel(){this.state==="scheduled"&&(Ta.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const hb=a=>a.startsWith("--");function pb(a,s,l){hb(s)?a.style.setProperty(s,l):a.style[s]=l}const mb=Fu(()=>window.ScrollTimeline!==void 0),gb={};function yb(a,s){const l=Fu(a);return()=>gb[s]??l()}const B1=yb(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),xs=([a,s,l,o])=>`cubic-bezier(${a}, ${s}, ${l}, ${o})`,n0={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:xs([0,.65,.55,1]),circOut:xs([.55,0,1,.45]),backIn:xs([.31,.01,.66,-.59]),backOut:xs([.33,1.53,.69,.99])};function H1(a,s){if(a)return typeof a=="function"?B1()?R1(a,s):"ease-out":T1(a)?xs(a):Array.isArray(a)?a.map(l=>H1(l,s)||n0.easeOut):n0[a]}function vb(a,s,l,{delay:o=0,duration:u=300,repeat:h=0,repeatType:f="loop",ease:m="easeOut",times:g}={},y=void 0){const x={[s]:l};g&&(x.offset=g);const b=H1(m,u);Array.isArray(b)&&(x.easing=b);const j={delay:o,duration:u,easing:Array.isArray(b)?"linear":b,fill:"both",iterations:h+1,direction:f==="reverse"?"alternate":"normal"};return y&&(j.pseudoElement=y),a.animate(x,j)}function q1(a){return typeof a=="function"&&"applyToOptions"in a}function xb({type:a,...s}){return q1(a)&&B1()?a.applyToOptions(s):(s.duration??(s.duration=300),s.ease??(s.ease="easeOut"),s)}class bb extends ld{constructor(s){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!s)return;const{element:l,name:o,keyframes:u,pseudoElement:h,allowFlatten:f=!1,finalKeyframe:m,onComplete:g}=s;this.isPseudoElement=!!h,this.allowFlatten=f,this.options=s,$u(typeof s.type!="string");const y=xb(s);this.animation=vb(l,o,u,y,h),y.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!h){const x=sd(u,this.options,m,this.speed);this.updateMotionValue?this.updateMotionValue(x):pb(l,o,x),this.animation.cancel()}g?.(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:s}=this;s==="idle"||s==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){this.isPseudoElement||this.animation.commitStyles?.()}get duration(){const s=this.animation.effect?.getComputedTiming?.().duration||0;return He(Number(s))}get iterationDuration(){const{delay:s=0}=this.options||{};return this.duration+He(s)}get time(){return He(Number(this.animation.currentTime)||0)}set time(s){this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=bn(s)}get speed(){return this.animation.playbackRate}set speed(s){s<0&&(this.finishedTime=null),this.animation.playbackRate=s}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(s){this.manualStartTime=this.animation.startTime=s}attachTimeline({timeline:s,observe:l}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:"linear"}),this.animation.onfinish=null,s&&mb()?(this.animation.timeline=s,qe):l(this)}}const Y1={anticipate:x1,backInOut:v1,circInOut:S1};function Sb(a){return a in Y1}function jb(a){typeof a.ease=="string"&&Sb(a.ease)&&(a.ease=Y1[a.ease])}const uu=10;class Tb extends bb{constructor(s){jb(s),V1(s),super(s),s.startTime!==void 0&&(this.startTime=s.startTime),this.options=s}updateMotionValue(s){const{motionValue:l,onUpdate:o,onComplete:u,element:h,...f}=this.options;if(!l)return;if(s!==void 0){l.set(s);return}const m=new rd({...f,autoplay:!1}),g=Math.max(uu,ue.now()-this.startTime),y=tn(0,uu,g-uu);l.setWithVelocity(m.sample(Math.max(0,g-y)).value,m.sample(g).value,y),m.stop()}}const a0=(a,s)=>s==="zIndex"?!1:!!(typeof a=="number"||Array.isArray(a)||typeof a=="string"&&(Pn.test(a)||a==="0")&&!a.startsWith("url("));function wb(a){const s=a[0];if(a.length===1)return!0;for(let l=0;l<a.length;l++)if(a[l]!==s)return!0}function Mb(a,s,l,o){const u=a[0];if(u===null)return!1;if(s==="display"||s==="visibility")return!0;const h=a[a.length-1],f=a0(u,s),m=a0(h,s);return!f||!m?!1:wb(a)||(l==="spring"||q1(l))&&o}function Du(a){a.duration=0,a.type="keyframes"}const Nb=new Set(["opacity","clipPath","filter","transform"]),Ab=Fu(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function kb(a){const{motionValue:s,name:l,repeatDelay:o,repeatType:u,damping:h,type:f}=a;if(!(s?.owner?.current instanceof HTMLElement))return!1;const{onUpdate:g,transformTemplate:y}=s.owner.getProps();return Ab()&&l&&Nb.has(l)&&(l!=="transform"||!y)&&!g&&!o&&u!=="mirror"&&h!==0&&f!=="inertia"}const zb=40;class Eb extends ld{constructor({autoplay:s=!0,delay:l=0,type:o="keyframes",repeat:u=0,repeatDelay:h=0,repeatType:f="loop",keyframes:m,name:g,motionValue:y,element:x,...b}){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=ue.now();const j={autoplay:s,delay:l,type:o,repeat:u,repeatDelay:h,repeatType:f,name:g,motionValue:y,element:x,...b},k=x?.KeyframeResolver||od;this.keyframeResolver=new k(m,(C,B,K)=>this.onKeyframesResolved(C,B,j,!K),g,y,x),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(s,l,o,u){this.keyframeResolver=void 0;const{name:h,type:f,velocity:m,delay:g,isHandoff:y,onUpdate:x}=o;this.resolvedAt=ue.now(),Mb(s,h,f,m)||((Sn.instantAnimations||!g)&&x?.(sd(s,o,l)),s[0]=s[s.length-1],Du(o),o.repeat=0);const j={startTime:u?this.resolvedAt?this.resolvedAt-this.createdAt>zb?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:l,...o,keyframes:s},k=!y&&kb(j)?new Tb({...j,element:j.motionValue.owner.current}):new rd(j);k.finished.then(()=>this.notifyFinished()).catch(qe),this.pendingTimeline&&(this.stopTimeline=k.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=k}get finished(){return this._animation?this.animation.finished:this._finished}then(s,l){return this.finished.finally(s).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),fb()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(s){this.animation.time=s}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(s){this.animation.speed=s}get startTime(){return this.animation.startTime}attachTimeline(s){return this._animation?this.stopTimeline=this.animation.attachTimeline(s):this.pendingTimeline=s,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}}const Cb=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function Db(a){const s=Cb.exec(a);if(!s)return[,];const[,l,o,u]=s;return[`--${l??o}`,u]}function G1(a,s,l=1){const[o,u]=Db(a);if(!o)return;const h=window.getComputedStyle(s).getPropertyValue(o);if(h){const f=h.trim();return u1(f)?parseFloat(f):f}return td(u)?G1(u,s,l+1):u}function cd(a,s){return a?.[s]??a?.default??a}const X1=new Set(["width","height","top","left","right","bottom",...xi]),_b={test:a=>a==="auto",parse:a=>a},K1=a=>s=>s.test(a),Q1=[vi,P,Ie,Jn,w2,T2,_b],i0=a=>Q1.find(K1(a));function Rb(a){return typeof a=="number"?a===0:a!==null?a==="none"||a==="0"||f1(a):!0}const Ob=new Set(["brightness","contrast","saturate","opacity"]);function Vb(a){const[s,l]=a.slice(0,-1).split("(");if(s==="drop-shadow")return a;const[o]=l.match(ed)||[];if(!o)return a;const u=l.replace(o,"");let h=Ob.has(s)?1:0;return o!==l&&(h*=100),s+"("+h+u+")"}const Ub=/\b([a-z-]*)\(.*?\)/gu,_u={...Pn,getAnimatableNone:a=>{const s=a.match(Ub);return s?s.map(Vb).join(" "):a}},s0={...vi,transform:Math.round},Lb={rotate:Jn,rotateX:Jn,rotateY:Jn,rotateZ:Jn,scale:ir,scaleX:ir,scaleY:ir,scaleZ:ir,skew:Jn,skewX:Jn,skewY:Jn,distance:P,translateX:P,translateY:P,translateZ:P,x:P,y:P,z:P,perspective:P,transformPerspective:P,opacity:As,originX:Zm,originY:Zm,originZ:P},ud={borderWidth:P,borderTopWidth:P,borderRightWidth:P,borderBottomWidth:P,borderLeftWidth:P,borderRadius:P,radius:P,borderTopLeftRadius:P,borderTopRightRadius:P,borderBottomRightRadius:P,borderBottomLeftRadius:P,width:P,maxWidth:P,height:P,maxHeight:P,top:P,right:P,bottom:P,left:P,inset:P,insetBlock:P,insetBlockStart:P,insetBlockEnd:P,insetInline:P,insetInlineStart:P,insetInlineEnd:P,padding:P,paddingTop:P,paddingRight:P,paddingBottom:P,paddingLeft:P,paddingBlock:P,paddingBlockStart:P,paddingBlockEnd:P,paddingInline:P,paddingInlineStart:P,paddingInlineEnd:P,margin:P,marginTop:P,marginRight:P,marginBottom:P,marginLeft:P,marginBlock:P,marginBlockStart:P,marginBlockEnd:P,marginInline:P,marginInlineStart:P,marginInlineEnd:P,backgroundPositionX:P,backgroundPositionY:P,...Lb,zIndex:s0,fillOpacity:As,strokeOpacity:As,numOctaves:s0},Bb={...ud,color:Qt,backgroundColor:Qt,outlineColor:Qt,fill:Qt,stroke:Qt,borderColor:Qt,borderTopColor:Qt,borderRightColor:Qt,borderBottomColor:Qt,borderLeftColor:Qt,filter:_u,WebkitFilter:_u},Z1=a=>Bb[a];function J1(a,s){let l=Z1(a);return l!==_u&&(l=Pn),l.getAnimatableNone?l.getAnimatableNone(s):void 0}const Hb=new Set(["auto","none","0"]);function qb(a,s,l){let o=0,u;for(;o<a.length&&!u;){const h=a[o];typeof h=="string"&&!Hb.has(h)&&ks(h).values.length&&(u=a[o]),o++}if(u&&l)for(const h of s)a[h]=J1(l,u)}class Yb extends od{constructor(s,l,o,u,h){super(s,l,o,u,h,!0)}readKeyframes(){const{unresolvedKeyframes:s,element:l,name:o}=this;if(!l||!l.current)return;super.readKeyframes();for(let x=0;x<s.length;x++){let b=s[x];if(typeof b=="string"&&(b=b.trim(),td(b))){const j=G1(b,l.current);j!==void 0&&(s[x]=j),x===s.length-1&&(this.finalKeyframe=b)}}if(this.resolveNoneKeyframes(),!X1.has(o)||s.length!==2)return;const[u,h]=s,f=i0(u),m=i0(h),g=Qm(u),y=Qm(h);if(g!==y&&$n[o]){this.needsMeasurement=!0;return}if(f!==m)if(e0(f)&&e0(m))for(let x=0;x<s.length;x++){const b=s[x];typeof b=="string"&&(s[x]=parseFloat(b))}else $n[o]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:s,name:l}=this,o=[];for(let u=0;u<s.length;u++)(s[u]===null||Rb(s[u]))&&o.push(u);o.length&&qb(s,o,l)}measureInitialState(){const{element:s,unresolvedKeyframes:l,name:o}=this;if(!s||!s.current)return;o==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=$n[o](s.measureViewportBox(),window.getComputedStyle(s.current)),l[0]=this.measuredOrigin;const u=l[l.length-1];u!==void 0&&s.getValue(o,u).jump(u,!1)}measureEndState(){const{element:s,name:l,unresolvedKeyframes:o}=this;if(!s||!s.current)return;const u=s.getValue(l);u&&u.jump(this.measuredOrigin,!1);const h=o.length-1,f=o[h];o[h]=$n[l](s.measureViewportBox(),window.getComputedStyle(s.current)),f!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=f),this.removedTransforms?.length&&this.removedTransforms.forEach(([m,g])=>{s.getValue(m).set(g)}),this.resolveNoneKeyframes()}}function Gb(a,s,l){if(a instanceof EventTarget)return[a];if(typeof a=="string"){let o=document;const u=l?.[a]??o.querySelectorAll(a);return u?Array.from(u):[]}return Array.from(a)}const $1=(a,s)=>s&&typeof a=="number"?s.transform(a):a;function F1(a){return d1(a)&&"offsetHeight"in a}const l0=30,Xb=a=>!isNaN(parseFloat(a));class Kb{constructor(s,l={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=o=>{const u=ue.now();if(this.updatedAt!==u&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(o),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(const h of this.dependents)h.dirty()},this.hasAnimated=!1,this.setCurrent(s),this.owner=l.owner}setCurrent(s){this.current=s,this.updatedAt=ue.now(),this.canTrackVelocity===null&&s!==void 0&&(this.canTrackVelocity=Xb(this.current))}setPrevFrameValue(s=this.current){this.prevFrameValue=s,this.prevUpdatedAt=this.updatedAt}onChange(s){return this.on("change",s)}on(s,l){this.events[s]||(this.events[s]=new Pu);const o=this.events[s].add(l);return s==="change"?()=>{o(),_t.read(()=>{this.events.change.getSize()||this.stop()})}:o}clearListeners(){for(const s in this.events)this.events[s].clear()}attach(s,l){this.passiveEffect=s,this.stopPassiveEffect=l}set(s){this.passiveEffect?this.passiveEffect(s,this.updateAndNotify):this.updateAndNotify(s)}setWithVelocity(s,l,o){this.set(l),this.prev=void 0,this.prevFrameValue=s,this.prevUpdatedAt=this.updatedAt-o}jump(s,l=!0){this.updateAndNotify(s),this.prev=s,this.prevUpdatedAt=this.prevFrameValue=void 0,l&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(s){this.dependents||(this.dependents=new Set),this.dependents.add(s)}removeDependent(s){this.dependents&&this.dependents.delete(s)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const s=ue.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||s-this.updatedAt>l0)return 0;const l=Math.min(this.updatedAt-this.prevUpdatedAt,l0);return h1(parseFloat(this.current)-parseFloat(this.prevFrameValue),l)}start(s){return this.stop(),new Promise(l=>{this.hasAnimated=!0,this.animation=s(l),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function pi(a,s){return new Kb(a,s)}const{schedule:dd}=w1(queueMicrotask,!1),Je={x:!1,y:!1};function P1(){return Je.x||Je.y}function Qb(a){return a==="x"||a==="y"?Je[a]?null:(Je[a]=!0,()=>{Je[a]=!1}):Je.x||Je.y?null:(Je.x=Je.y=!0,()=>{Je.x=Je.y=!1})}function W1(a,s){const l=Gb(a),o=new AbortController,u={passive:!0,...s,signal:o.signal};return[l,u,()=>o.abort()]}function r0(a){return!(a.pointerType==="touch"||P1())}function Zb(a,s,l={}){const[o,u,h]=W1(a,l),f=m=>{if(!r0(m))return;const{target:g}=m,y=s(g,m);if(typeof y!="function"||!g)return;const x=b=>{r0(b)&&(y(b),g.removeEventListener("pointerleave",x))};g.addEventListener("pointerleave",x,u)};return o.forEach(m=>{m.addEventListener("pointerenter",f,u)}),h}const I1=(a,s)=>s?a===s?!0:I1(a,s.parentElement):!1,fd=a=>a.pointerType==="mouse"?typeof a.button!="number"||a.button<=0:a.isPrimary!==!1,Jb=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function tg(a){return Jb.has(a.tagName)||a.isContentEditable===!0}const ur=new WeakSet;function o0(a){return s=>{s.key==="Enter"&&a(s)}}function du(a,s){a.dispatchEvent(new PointerEvent("pointer"+s,{isPrimary:!0,bubbles:!0}))}const $b=(a,s)=>{const l=a.currentTarget;if(!l)return;const o=o0(()=>{if(ur.has(l))return;du(l,"down");const u=o0(()=>{du(l,"up")}),h=()=>du(l,"cancel");l.addEventListener("keyup",u,s),l.addEventListener("blur",h,s)});l.addEventListener("keydown",o,s),l.addEventListener("blur",()=>l.removeEventListener("keydown",o),s)};function c0(a){return fd(a)&&!P1()}function Fb(a,s,l={}){const[o,u,h]=W1(a,l),f=m=>{const g=m.currentTarget;if(!c0(m))return;ur.add(g);const y=s(g,m),x=(k,C)=>{window.removeEventListener("pointerup",b),window.removeEventListener("pointercancel",j),ur.has(g)&&ur.delete(g),c0(k)&&typeof y=="function"&&y(k,{success:C})},b=k=>{x(k,g===window||g===document||l.useGlobalTarget||I1(g,k.target))},j=k=>{x(k,!1)};window.addEventListener("pointerup",b,u),window.addEventListener("pointercancel",j,u)};return o.forEach(m=>{(l.useGlobalTarget?window:m).addEventListener("pointerdown",f,u),F1(m)&&(m.addEventListener("focus",y=>$b(y,u)),!tg(m)&&!m.hasAttribute("tabindex")&&(m.tabIndex=0))}),h}function eg(a){return d1(a)&&"ownerSVGElement"in a}function Pb(a){return eg(a)&&a.tagName==="svg"}const re=a=>!!(a&&a.getVelocity),Wb=[...Q1,Qt,Pn],Ib=a=>Wb.find(K1(a)),hd=U.createContext({transformPagePoint:a=>a,isStatic:!1,reducedMotion:"never"});function u0(a,s){if(typeof a=="function")return a(s);a!=null&&(a.current=s)}function t5(...a){return s=>{let l=!1;const o=a.map(u=>{const h=u0(u,s);return!l&&typeof h=="function"&&(l=!0),h});if(l)return()=>{for(let u=0;u<o.length;u++){const h=o[u];typeof h=="function"?h():u0(a[u],null)}}}}function e5(...a){return U.useCallback(t5(...a),a)}class n5 extends U.Component{getSnapshotBeforeUpdate(s){const l=this.props.childRef.current;if(l&&s.isPresent&&!this.props.isPresent){const o=l.offsetParent,u=F1(o)&&o.offsetWidth||0,h=this.props.sizeRef.current;h.height=l.offsetHeight||0,h.width=l.offsetWidth||0,h.top=l.offsetTop,h.left=l.offsetLeft,h.right=u-h.width-h.left}return null}componentDidUpdate(){}render(){return this.props.children}}function a5({children:a,isPresent:s,anchorX:l,root:o}){const u=U.useId(),h=U.useRef(null),f=U.useRef({width:0,height:0,top:0,left:0,right:0}),{nonce:m}=U.useContext(hd),g=a.props?.ref??a?.ref,y=e5(h,g);return U.useInsertionEffect(()=>{const{width:x,height:b,top:j,left:k,right:C}=f.current;if(s||!h.current||!x||!b)return;const B=l==="left"?`left: ${k}`:`right: ${C}`;h.current.dataset.motionPopId=u;const K=document.createElement("style");m&&(K.nonce=m);const G=o??document.head;return G.appendChild(K),K.sheet&&K.sheet.insertRule(`
          [data-motion-pop-id="${u}"] {
            position: absolute !important;
            width: ${x}px !important;
            height: ${b}px !important;
            ${B}px !important;
            top: ${j}px !important;
          }
        `),()=>{G.contains(K)&&G.removeChild(K)}},[s]),d.jsx(n5,{isPresent:s,childRef:h,sizeRef:f,children:U.cloneElement(a,{ref:y})})}const i5=({children:a,initial:s,isPresent:l,onExitComplete:o,custom:u,presenceAffectsLayout:h,mode:f,anchorX:m,root:g})=>{const y=Ku(s5),x=U.useId();let b=!0,j=U.useMemo(()=>(b=!1,{id:x,initial:s,isPresent:l,custom:u,onExitComplete:k=>{y.set(k,!0);for(const C of y.values())if(!C)return;o&&o()},register:k=>(y.set(k,!1),()=>y.delete(k))}),[l,y,o]);return h&&b&&(j={...j}),U.useMemo(()=>{y.forEach((k,C)=>y.set(C,!1))},[l]),U.useEffect(()=>{!l&&!y.size&&o&&o()},[l]),f==="popLayout"&&(a=d.jsx(a5,{isPresent:l,anchorX:m,root:g,children:a})),d.jsx(Tr.Provider,{value:j,children:a})};function s5(){return new Map}function ng(a=!0){const s=U.useContext(Tr);if(s===null)return[!0,null];const{isPresent:l,onExitComplete:o,register:u}=s,h=U.useId();U.useEffect(()=>{if(a)return u(h)},[a]);const f=U.useCallback(()=>a&&o&&o(h),[h,o,a]);return!l&&o?[!1,f]:[!0]}const sr=a=>a.key||"";function d0(a){const s=[];return U.Children.forEach(a,l=>{U.isValidElement(l)&&s.push(l)}),s}const wa=({children:a,custom:s,initial:l=!0,onExitComplete:o,presenceAffectsLayout:u=!0,mode:h="sync",propagate:f=!1,anchorX:m="left",root:g})=>{const[y,x]=ng(f),b=U.useMemo(()=>d0(a),[a]),j=f&&!y?[]:b.map(sr),k=U.useRef(!0),C=U.useRef(b),B=Ku(()=>new Map),K=U.useRef(new Set),[G,J]=U.useState(b),[Y,H]=U.useState(b);c1(()=>{k.current=!1,C.current=b;for(let $=0;$<Y.length;$++){const q=sr(Y[$]);j.includes(q)?(B.delete(q),K.current.delete(q)):B.get(q)!==!0&&B.set(q,!1)}},[Y,j.length,j.join("-")]);const F=[];if(b!==G){let $=[...b];for(let q=0;q<Y.length;q++){const nt=Y[q],ot=sr(nt);j.includes(ot)||($.splice(q,0,nt),F.push(nt))}return h==="wait"&&F.length&&($=F),H(d0($)),J(b),null}const{forceRender:st}=U.useContext(Xu);return d.jsx(d.Fragment,{children:Y.map($=>{const q=sr($),nt=f&&!y?!1:b===Y||j.includes(q),ot=()=>{if(K.current.has(q))return;if(K.current.add(q),B.has(q))B.set(q,!0);else return;let ht=!0;B.forEach(bt=>{bt||(ht=!1)}),ht&&(st?.(),H(C.current),f&&x?.(),o&&o())};return d.jsx(i5,{isPresent:nt,initial:!k.current||l?void 0:!1,custom:s,presenceAffectsLayout:u,mode:h,root:g,onExitComplete:nt?void 0:ot,anchorX:m,children:$},q)})})},ag=U.createContext({strict:!1}),f0={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},mi={};for(const a in f0)mi[a]={isEnabled:s=>f0[a].some(l=>!!s[l])};function l5(a){for(const s in a)mi[s]={...mi[s],...a[s]}}const r5=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function yr(a){return a.startsWith("while")||a.startsWith("drag")&&a!=="draggable"||a.startsWith("layout")||a.startsWith("onTap")||a.startsWith("onPan")||a.startsWith("onLayout")||r5.has(a)}let ig=a=>!yr(a);function o5(a){typeof a=="function"&&(ig=s=>s.startsWith("on")?!yr(s):a(s))}try{o5(require("@emotion/is-prop-valid").default)}catch{}function c5(a,s,l){const o={};for(const u in a)u==="values"&&typeof a.values=="object"||(ig(u)||l===!0&&yr(u)||!s&&!yr(u)||a.draggable&&u.startsWith("onDrag"))&&(o[u]=a[u]);return o}const wr=U.createContext({});function Mr(a){return a!==null&&typeof a=="object"&&typeof a.start=="function"}function zs(a){return typeof a=="string"||Array.isArray(a)}const pd=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],md=["initial",...pd];function Nr(a){return Mr(a.animate)||md.some(s=>zs(a[s]))}function sg(a){return!!(Nr(a)||a.variants)}function u5(a,s){if(Nr(a)){const{initial:l,animate:o}=a;return{initial:l===!1||zs(l)?l:void 0,animate:zs(o)?o:void 0}}return a.inherit!==!1?s:{}}function d5(a){const{initial:s,animate:l}=u5(a,U.useContext(wr));return U.useMemo(()=>({initial:s,animate:l}),[h0(s),h0(l)])}function h0(a){return Array.isArray(a)?a.join(" "):a}function p0(a,s){return s.max===s.min?0:a/(s.max-s.min)*100}const vs={correct:(a,s)=>{if(!s.target)return a;if(typeof a=="string")if(P.test(a))a=parseFloat(a);else return a;const l=p0(a,s.target.x),o=p0(a,s.target.y);return`${l}% ${o}%`}},f5={correct:(a,{treeScale:s,projectionDelta:l})=>{const o=a,u=Pn.parse(a);if(u.length>5)return o;const h=Pn.createTransformer(a),f=typeof u[0]!="number"?1:0,m=l.x.scale*s.x,g=l.y.scale*s.y;u[0+f]/=m,u[1+f]/=g;const y=Ot(m,g,.5);return typeof u[2+f]=="number"&&(u[2+f]/=y),typeof u[3+f]=="number"&&(u[3+f]/=y),h(u)}},Ru={borderRadius:{...vs,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:vs,borderTopRightRadius:vs,borderBottomLeftRadius:vs,borderBottomRightRadius:vs,boxShadow:f5};function lg(a,{layout:s,layoutId:l}){return bi.has(a)||a.startsWith("origin")||(s||l!==void 0)&&(!!Ru[a]||a==="opacity")}const h5={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},p5=xi.length;function m5(a,s,l){let o="",u=!0;for(let h=0;h<p5;h++){const f=xi[h],m=a[f];if(m===void 0)continue;let g=!0;if(typeof m=="number"?g=m===(f.startsWith("scale")?1:0):g=parseFloat(m)===0,!g||l){const y=$1(m,ud[f]);if(!g){u=!1;const x=h5[f]||f;o+=`${x}(${y}) `}l&&(s[f]=y)}}return o=o.trim(),l?o=l(s,u?"":o):u&&(o="none"),o}function gd(a,s,l){const{style:o,vars:u,transformOrigin:h}=a;let f=!1,m=!1;for(const g in s){const y=s[g];if(bi.has(g)){f=!0;continue}else if(N1(g)){u[g]=y;continue}else{const x=$1(y,ud[g]);g.startsWith("origin")?(m=!0,h[g]=x):o[g]=x}}if(s.transform||(f||l?o.transform=m5(s,a.transform,l):o.transform&&(o.transform="none")),m){const{originX:g="50%",originY:y="50%",originZ:x=0}=h;o.transformOrigin=`${g} ${y} ${x}`}}const yd=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function rg(a,s,l){for(const o in s)!re(s[o])&&!lg(o,l)&&(a[o]=s[o])}function g5({transformTemplate:a},s){return U.useMemo(()=>{const l=yd();return gd(l,s,a),Object.assign({},l.vars,l.style)},[s])}function y5(a,s){const l=a.style||{},o={};return rg(o,l,a),Object.assign(o,g5(a,s)),o}function v5(a,s){const l={},o=y5(a,s);return a.drag&&a.dragListener!==!1&&(l.draggable=!1,o.userSelect=o.WebkitUserSelect=o.WebkitTouchCallout="none",o.touchAction=a.drag===!0?"none":`pan-${a.drag==="x"?"y":"x"}`),a.tabIndex===void 0&&(a.onTap||a.onTapStart||a.whileTap)&&(l.tabIndex=0),l.style=o,l}const x5={offset:"stroke-dashoffset",array:"stroke-dasharray"},b5={offset:"strokeDashoffset",array:"strokeDasharray"};function S5(a,s,l=1,o=0,u=!0){a.pathLength=1;const h=u?x5:b5;a[h.offset]=P.transform(-o);const f=P.transform(s),m=P.transform(l);a[h.array]=`${f} ${m}`}const j5=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function og(a,{attrX:s,attrY:l,attrScale:o,pathLength:u,pathSpacing:h=1,pathOffset:f=0,...m},g,y,x){if(gd(a,m,y),g){a.style.viewBox&&(a.attrs.viewBox=a.style.viewBox);return}a.attrs=a.style,a.style={};const{attrs:b,style:j}=a;b.transform&&(j.transform=b.transform,delete b.transform),(j.transform||b.transformOrigin)&&(j.transformOrigin=b.transformOrigin??"50% 50%",delete b.transformOrigin),j.transform&&(j.transformBox=x?.transformBox??"fill-box",delete b.transformBox);for(const k of j5)b[k]!==void 0&&(j[k]=b[k],delete b[k]);s!==void 0&&(b.x=s),l!==void 0&&(b.y=l),o!==void 0&&(b.scale=o),u!==void 0&&S5(b,u,h,f,!1)}const cg=()=>({...yd(),attrs:{}}),ug=a=>typeof a=="string"&&a.toLowerCase()==="svg";function T5(a,s,l,o){const u=U.useMemo(()=>{const h=cg();return og(h,s,ug(o),a.transformTemplate,a.style),{...h.attrs,style:{...h.style}}},[s]);if(a.style){const h={};rg(h,a.style,a),u.style={...h,...u.style}}return u}const w5=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function vd(a){return typeof a!="string"||a.includes("-")?!1:!!(w5.indexOf(a)>-1||/[A-Z]/u.test(a))}function M5(a,s,l,{latestValues:o},u,h=!1,f){const g=(f??vd(a)?T5:v5)(s,o,u,a),y=c5(s,typeof a=="string",h),x=a!==U.Fragment?{...y,...g,ref:l}:{},{children:b}=s,j=U.useMemo(()=>re(b)?b.get():b,[b]);return U.createElement(a,{...x,children:j})}function m0(a){const s=[{},{}];return a?.values.forEach((l,o)=>{s[0][o]=l.get(),s[1][o]=l.getVelocity()}),s}function xd(a,s,l,o){if(typeof s=="function"){const[u,h]=m0(o);s=s(l!==void 0?l:a.custom,u,h)}if(typeof s=="string"&&(s=a.variants&&a.variants[s]),typeof s=="function"){const[u,h]=m0(o);s=s(l!==void 0?l:a.custom,u,h)}return s}function dr(a){return re(a)?a.get():a}function N5({scrapeMotionValuesFromProps:a,createRenderState:s},l,o,u){return{latestValues:A5(l,o,u,a),renderState:s()}}function A5(a,s,l,o){const u={},h=o(a,{});for(const j in h)u[j]=dr(h[j]);let{initial:f,animate:m}=a;const g=Nr(a),y=sg(a);s&&y&&!g&&a.inherit!==!1&&(f===void 0&&(f=s.initial),m===void 0&&(m=s.animate));let x=l?l.initial===!1:!1;x=x||f===!1;const b=x?m:f;if(b&&typeof b!="boolean"&&!Mr(b)){const j=Array.isArray(b)?b:[b];for(let k=0;k<j.length;k++){const C=xd(a,j[k]);if(C){const{transitionEnd:B,transition:K,...G}=C;for(const J in G){let Y=G[J];if(Array.isArray(Y)){const H=x?Y.length-1:0;Y=Y[H]}Y!==null&&(u[J]=Y)}for(const J in B)u[J]=B[J]}}}return u}const dg=a=>(s,l)=>{const o=U.useContext(wr),u=U.useContext(Tr),h=()=>N5(a,s,o,u);return l?h():Ku(h)};function bd(a,s,l){const{style:o}=a,u={};for(const h in o)(re(o[h])||s.style&&re(s.style[h])||lg(h,a)||l?.getValue(h)?.liveStyle!==void 0)&&(u[h]=o[h]);return u}const k5=dg({scrapeMotionValuesFromProps:bd,createRenderState:yd});function fg(a,s,l){const o=bd(a,s,l);for(const u in a)if(re(a[u])||re(s[u])){const h=xi.indexOf(u)!==-1?"attr"+u.charAt(0).toUpperCase()+u.substring(1):u;o[h]=a[u]}return o}const z5=dg({scrapeMotionValuesFromProps:fg,createRenderState:cg}),E5=Symbol.for("motionComponentSymbol");function C5(a,s,l){const o=U.useRef(l);U.useInsertionEffect(()=>{o.current=l});const u=U.useRef(null);return U.useCallback(h=>{h&&a.onMount?.(h),s&&(h?s.mount(h):s.unmount());const f=o.current;if(typeof f=="function")if(h){const m=f(h);typeof m=="function"&&(u.current=m)}else u.current?(u.current(),u.current=null):f(h);else f&&(f.current=h)},[s])}const Sd=a=>a.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),D5="framerAppearId",hg="data-"+Sd(D5),pg=U.createContext({});function bs(a){return a&&typeof a=="object"&&Object.prototype.hasOwnProperty.call(a,"current")}function _5(a,s,l,o,u,h){const{visualElement:f}=U.useContext(wr),m=U.useContext(ag),g=U.useContext(Tr),y=U.useContext(hd).reducedMotion,x=U.useRef(null);o=o||m.renderer,!x.current&&o&&(x.current=o(a,{visualState:s,parent:f,props:l,presenceContext:g,blockInitialAnimation:g?g.initial===!1:!1,reducedMotionConfig:y,isSVG:h}));const b=x.current,j=U.useContext(pg);b&&!b.projection&&u&&(b.type==="html"||b.type==="svg")&&R5(x.current,l,u,j);const k=U.useRef(!1);U.useInsertionEffect(()=>{b&&k.current&&b.update(l,g)});const C=l[hg],B=U.useRef(!!C&&!window.MotionHandoffIsComplete?.(C)&&window.MotionHasOptimisedAnimation?.(C));return c1(()=>{b&&(k.current=!0,window.MotionIsMounted=!0,b.updateFeatures(),b.scheduleRenderMicrotask(),B.current&&b.animationState&&b.animationState.animateChanges())}),U.useEffect(()=>{b&&(!B.current&&b.animationState&&b.animationState.animateChanges(),B.current&&(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.(C)}),B.current=!1),b.enteringChildren=void 0)}),b}function R5(a,s,l,o){const{layoutId:u,layout:h,drag:f,dragConstraints:m,layoutScroll:g,layoutRoot:y,layoutCrossfade:x}=s;a.projection=new l(a.latestValues,s["data-framer-portal-id"]?void 0:mg(a.parent)),a.projection.setOptions({layoutId:u,layout:h,alwaysMeasureLayout:!!f||m&&bs(m),visualElement:a,animationType:typeof h=="string"?h:"both",initialPromotionConfig:o,crossfade:x,layoutScroll:g,layoutRoot:y})}function mg(a){if(a)return a.options.allowProjection!==!1?a.projection:mg(a.parent)}function fu(a,{forwardMotionProps:s=!1,type:l}={},o,u){o&&l5(o);const h=l?l==="svg":vd(a),f=h?z5:k5;function m(y,x){let b;const j={...U.useContext(hd),...y,layoutId:O5(y)},{isStatic:k}=j,C=d5(y),B=f(y,k);if(!k&&Qu){V5();const K=U5(j);b=K.MeasureLayout,C.visualElement=_5(a,B,j,u,K.ProjectionNode,h)}return d.jsxs(wr.Provider,{value:C,children:[b&&C.visualElement?d.jsx(b,{visualElement:C.visualElement,...j}):null,M5(a,y,C5(B,C.visualElement,x),B,k,s,h)]})}m.displayName=`motion.${typeof a=="string"?a:`create(${a.displayName??a.name??""})`}`;const g=U.forwardRef(m);return g[E5]=a,g}function O5({layoutId:a}){const s=U.useContext(Xu).id;return s&&a!==void 0?s+"-"+a:a}function V5(a,s){U.useContext(ag).strict}function U5(a){const{drag:s,layout:l}=mi;if(!s&&!l)return{};const o={...s,...l};return{MeasureLayout:s?.isEnabled(a)||l?.isEnabled(a)?o.MeasureLayout:void 0,ProjectionNode:o.ProjectionNode}}function L5(a,s){if(typeof Proxy>"u")return fu;const l=new Map,o=(h,f)=>fu(h,f,a,s),u=(h,f)=>o(h,f);return new Proxy(u,{get:(h,f)=>f==="create"?o:(l.has(f)||l.set(f,fu(f,void 0,a,s)),l.get(f))})}function gg({top:a,left:s,right:l,bottom:o}){return{x:{min:s,max:l},y:{min:a,max:o}}}function B5({x:a,y:s}){return{top:s.min,right:a.max,bottom:s.max,left:a.min}}function H5(a,s){if(!s)return a;const l=s({x:a.left,y:a.top}),o=s({x:a.right,y:a.bottom});return{top:l.y,left:l.x,bottom:o.y,right:o.x}}function hu(a){return a===void 0||a===1}function Ou({scale:a,scaleX:s,scaleY:l}){return!hu(a)||!hu(s)||!hu(l)}function xa(a){return Ou(a)||yg(a)||a.z||a.rotate||a.rotateX||a.rotateY||a.skewX||a.skewY}function yg(a){return g0(a.x)||g0(a.y)}function g0(a){return a&&a!=="0%"}function vr(a,s,l){const o=a-l,u=s*o;return l+u}function y0(a,s,l,o,u){return u!==void 0&&(a=vr(a,u,o)),vr(a,l,o)+s}function Vu(a,s=0,l=1,o,u){a.min=y0(a.min,s,l,o,u),a.max=y0(a.max,s,l,o,u)}function vg(a,{x:s,y:l}){Vu(a.x,s.translate,s.scale,s.originPoint),Vu(a.y,l.translate,l.scale,l.originPoint)}const v0=.999999999999,x0=1.0000000000001;function q5(a,s,l,o=!1){const u=l.length;if(!u)return;s.x=s.y=1;let h,f;for(let m=0;m<u;m++){h=l[m],f=h.projectionDelta;const{visualElement:g}=h.options;g&&g.props.style&&g.props.style.display==="contents"||(o&&h.options.layoutScroll&&h.scroll&&h!==h.root&&di(a,{x:-h.scroll.offset.x,y:-h.scroll.offset.y}),f&&(s.x*=f.x.scale,s.y*=f.y.scale,vg(a,f)),o&&xa(h.latestValues)&&di(a,h.latestValues))}s.x<x0&&s.x>v0&&(s.x=1),s.y<x0&&s.y>v0&&(s.y=1)}function ui(a,s){a.min=a.min+s,a.max=a.max+s}function b0(a,s,l,o,u=.5){const h=Ot(a.min,a.max,u);Vu(a,s,l,h,o)}function di(a,s){b0(a.x,s.x,s.scaleX,s.scale,s.originX),b0(a.y,s.y,s.scaleY,s.scale,s.originY)}function xg(a,s){return gg(H5(a.getBoundingClientRect(),s))}function Y5(a,s,l){const o=xg(a,l),{scroll:u}=s;return u&&(ui(o.x,u.offset.x),ui(o.y,u.offset.y)),o}const S0=()=>({translate:0,scale:1,origin:0,originPoint:0}),fi=()=>({x:S0(),y:S0()}),j0=()=>({min:0,max:0}),Jt=()=>({x:j0(),y:j0()}),Uu={current:null},bg={current:!1};function G5(){if(bg.current=!0,!!Qu)if(window.matchMedia){const a=window.matchMedia("(prefers-reduced-motion)"),s=()=>Uu.current=a.matches;a.addEventListener("change",s),s()}else Uu.current=!1}const X5=new WeakMap;function K5(a,s,l){for(const o in s){const u=s[o],h=l[o];if(re(u))a.addValue(o,u);else if(re(h))a.addValue(o,pi(u,{owner:a}));else if(h!==u)if(a.hasValue(o)){const f=a.getValue(o);f.liveStyle===!0?f.jump(u):f.hasAnimated||f.set(u)}else{const f=a.getStaticValue(o);a.addValue(o,pi(f!==void 0?f:u,{owner:a}))}}for(const o in l)s[o]===void 0&&a.removeValue(o);return s}const T0=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class Q5{scrapeMotionValuesFromProps(s,l,o){return{}}constructor({parent:s,props:l,presenceContext:o,reducedMotionConfig:u,blockInitialAnimation:h,visualState:f},m={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=od,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const j=ue.now();this.renderScheduledAt<j&&(this.renderScheduledAt=j,_t.render(this.render,!1,!0))};const{latestValues:g,renderState:y}=f;this.latestValues=g,this.baseTarget={...g},this.initialValues=l.initial?{...g}:{},this.renderState=y,this.parent=s,this.props=l,this.presenceContext=o,this.depth=s?s.depth+1:0,this.reducedMotionConfig=u,this.options=m,this.blockInitialAnimation=!!h,this.isControllingVariants=Nr(l),this.isVariantNode=sg(l),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(s&&s.current);const{willChange:x,...b}=this.scrapeMotionValuesFromProps(l,{},this);for(const j in b){const k=b[j];g[j]!==void 0&&re(k)&&k.set(g[j])}}mount(s){this.current=s,X5.set(s,this),this.projection&&!this.projection.instance&&this.projection.mount(s),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((l,o)=>this.bindToMotionValue(o,l)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(bg.current||G5(),this.shouldReduceMotion=Uu.current),this.parent?.addChild(this),this.update(this.props,this.presenceContext)}unmount(){this.projection&&this.projection.unmount(),Fn(this.notifyUpdate),Fn(this.render),this.valueSubscriptions.forEach(s=>s()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent?.removeChild(this);for(const s in this.events)this.events[s].clear();for(const s in this.features){const l=this.features[s];l&&(l.unmount(),l.isMounted=!1)}this.current=null}addChild(s){this.children.add(s),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(s)}removeChild(s){this.children.delete(s),this.enteringChildren&&this.enteringChildren.delete(s)}bindToMotionValue(s,l){this.valueSubscriptions.has(s)&&this.valueSubscriptions.get(s)();const o=bi.has(s);o&&this.onBindTransform&&this.onBindTransform();const u=l.on("change",f=>{this.latestValues[s]=f,this.props.onUpdate&&_t.preRender(this.notifyUpdate),o&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let h;window.MotionCheckAppearSync&&(h=window.MotionCheckAppearSync(this,s,l)),this.valueSubscriptions.set(s,()=>{u(),h&&h(),l.owner&&l.stop()})}sortNodePosition(s){return!this.current||!this.sortInstanceNodePosition||this.type!==s.type?0:this.sortInstanceNodePosition(this.current,s.current)}updateFeatures(){let s="animation";for(s in mi){const l=mi[s];if(!l)continue;const{isEnabled:o,Feature:u}=l;if(!this.features[s]&&u&&o(this.props)&&(this.features[s]=new u(this)),this.features[s]){const h=this.features[s];h.isMounted?h.update():(h.mount(),h.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Jt()}getStaticValue(s){return this.latestValues[s]}setStaticValue(s,l){this.latestValues[s]=l}update(s,l){(s.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=s,this.prevPresenceContext=this.presenceContext,this.presenceContext=l;for(let o=0;o<T0.length;o++){const u=T0[o];this.propEventSubscriptions[u]&&(this.propEventSubscriptions[u](),delete this.propEventSubscriptions[u]);const h="on"+u,f=s[h];f&&(this.propEventSubscriptions[u]=this.on(u,f))}this.prevMotionValues=K5(this,this.scrapeMotionValuesFromProps(s,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(s){return this.props.variants?this.props.variants[s]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(s){const l=this.getClosestVariantNode();if(l)return l.variantChildren&&l.variantChildren.add(s),()=>l.variantChildren.delete(s)}addValue(s,l){const o=this.values.get(s);l!==o&&(o&&this.removeValue(s),this.bindToMotionValue(s,l),this.values.set(s,l),this.latestValues[s]=l.get())}removeValue(s){this.values.delete(s);const l=this.valueSubscriptions.get(s);l&&(l(),this.valueSubscriptions.delete(s)),delete this.latestValues[s],this.removeValueFromRenderState(s,this.renderState)}hasValue(s){return this.values.has(s)}getValue(s,l){if(this.props.values&&this.props.values[s])return this.props.values[s];let o=this.values.get(s);return o===void 0&&l!==void 0&&(o=pi(l===null?void 0:l,{owner:this}),this.addValue(s,o)),o}readValue(s,l){let o=this.latestValues[s]!==void 0||!this.current?this.latestValues[s]:this.getBaseTargetFromProps(this.props,s)??this.readValueFromInstance(this.current,s,this.options);return o!=null&&(typeof o=="string"&&(u1(o)||f1(o))?o=parseFloat(o):!Ib(o)&&Pn.test(l)&&(o=J1(s,l)),this.setBaseTarget(s,re(o)?o.get():o)),re(o)?o.get():o}setBaseTarget(s,l){this.baseTarget[s]=l}getBaseTarget(s){const{initial:l}=this.props;let o;if(typeof l=="string"||typeof l=="object"){const h=xd(this.props,l,this.presenceContext?.custom);h&&(o=h[s])}if(l&&o!==void 0)return o;const u=this.getBaseTargetFromProps(this.props,s);return u!==void 0&&!re(u)?u:this.initialValues[s]!==void 0&&o===void 0?void 0:this.baseTarget[s]}on(s,l){return this.events[s]||(this.events[s]=new Pu),this.events[s].add(l)}notify(s,...l){this.events[s]&&this.events[s].notify(...l)}scheduleRenderMicrotask(){dd.render(this.render)}}class Sg extends Q5{constructor(){super(...arguments),this.KeyframeResolver=Yb}sortInstanceNodePosition(s,l){return s.compareDocumentPosition(l)&2?1:-1}getBaseTargetFromProps(s,l){return s.style?s.style[l]:void 0}removeValueFromRenderState(s,{vars:l,style:o}){delete l[s],delete o[s]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:s}=this.props;re(s)&&(this.childSubscription=s.on("change",l=>{this.current&&(this.current.textContent=`${l}`)}))}}function jg(a,{style:s,vars:l},o,u){const h=a.style;let f;for(f in s)h[f]=s[f];u?.applyProjectionStyles(h,o);for(f in l)h.setProperty(f,l[f])}function Z5(a){return window.getComputedStyle(a)}class J5 extends Sg{constructor(){super(...arguments),this.type="html",this.renderInstance=jg}readValueFromInstance(s,l){if(bi.has(l))return this.projection?.isProjecting?Au(l):rb(s,l);{const o=Z5(s),u=(N1(l)?o.getPropertyValue(l):o[l])||0;return typeof u=="string"?u.trim():u}}measureInstanceViewportBox(s,{transformPagePoint:l}){return xg(s,l)}build(s,l,o){gd(s,l,o.transformTemplate)}scrapeMotionValuesFromProps(s,l,o){return bd(s,l,o)}}const Tg=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function $5(a,s,l,o){jg(a,s,void 0,o);for(const u in s.attrs)a.setAttribute(Tg.has(u)?u:Sd(u),s.attrs[u])}class F5 extends Sg{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Jt}getBaseTargetFromProps(s,l){return s[l]}readValueFromInstance(s,l){if(bi.has(l)){const o=Z1(l);return o&&o.default||0}return l=Tg.has(l)?l:Sd(l),s.getAttribute(l)}scrapeMotionValuesFromProps(s,l,o){return fg(s,l,o)}build(s,l,o){og(s,l,this.isSVGTag,o.transformTemplate,o.style)}renderInstance(s,l,o,u){$5(s,l,o,u)}mount(s){this.isSVGTag=ug(s.tagName),super.mount(s)}}const P5=(a,s)=>s.isSVG??vd(a)?new F5(s):new J5(s,{allowProjection:a!==U.Fragment});function hi(a,s,l){const o=a.getProps();return xd(o,s,l!==void 0?l:o.custom,a)}const Lu=a=>Array.isArray(a);function W5(a,s,l){a.hasValue(s)?a.getValue(s).set(l):a.addValue(s,pi(l))}function I5(a){return Lu(a)?a[a.length-1]||0:a}function tS(a,s){const l=hi(a,s);let{transitionEnd:o={},transition:u={},...h}=l||{};h={...h,...o};for(const f in h){const m=I5(h[f]);W5(a,f,m)}}function eS(a){return!!(re(a)&&a.add)}function Bu(a,s){const l=a.getValue("willChange");if(eS(l))return l.add(s);if(!l&&Sn.WillChange){const o=new Sn.WillChange("auto");a.addValue("willChange",o),o.add(s)}}function wg(a){return a.props[hg]}const nS=a=>a!==null;function aS(a,{repeat:s,repeatType:l="loop"},o){const u=a.filter(nS),h=s&&l!=="loop"&&s%2===1?0:u.length-1;return u[h]}const iS={type:"spring",stiffness:500,damping:25,restSpeed:10},sS=a=>({type:"spring",stiffness:550,damping:a===0?2*Math.sqrt(550):30,restSpeed:10}),lS={type:"keyframes",duration:.8},rS={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},oS=(a,{keyframes:s})=>s.length>2?lS:bi.has(a)?a.startsWith("scale")?sS(s[1]):iS:rS;function cS({when:a,delay:s,delayChildren:l,staggerChildren:o,staggerDirection:u,repeat:h,repeatType:f,repeatDelay:m,from:g,elapsed:y,...x}){return!!Object.keys(x).length}const jd=(a,s,l,o={},u,h)=>f=>{const m=cd(o,a)||{},g=m.delay||o.delay||0;let{elapsed:y=0}=o;y=y-bn(g);const x={keyframes:Array.isArray(l)?l:[null,l],ease:"easeOut",velocity:s.getVelocity(),...m,delay:-y,onUpdate:j=>{s.set(j),m.onUpdate&&m.onUpdate(j)},onComplete:()=>{f(),m.onComplete&&m.onComplete()},name:a,motionValue:s,element:h?void 0:u};cS(m)||Object.assign(x,oS(a,x)),x.duration&&(x.duration=bn(x.duration)),x.repeatDelay&&(x.repeatDelay=bn(x.repeatDelay)),x.from!==void 0&&(x.keyframes[0]=x.from);let b=!1;if((x.type===!1||x.duration===0&&!x.repeatDelay)&&(Du(x),x.delay===0&&(b=!0)),(Sn.instantAnimations||Sn.skipAnimations)&&(b=!0,Du(x),x.delay=0),x.allowFlatten=!m.type&&!m.ease,b&&!h&&s.get()!==void 0){const j=aS(x.keyframes,m);if(j!==void 0){_t.update(()=>{x.onUpdate(j),x.onComplete()});return}}return m.isSync?new rd(x):new Eb(x)};function uS({protectedKeys:a,needsAnimating:s},l){const o=a.hasOwnProperty(l)&&s[l]!==!0;return s[l]=!1,o}function Mg(a,s,{delay:l=0,transitionOverride:o,type:u}={}){let{transition:h=a.getDefaultTransition(),transitionEnd:f,...m}=s;o&&(h=o);const g=[],y=u&&a.animationState&&a.animationState.getState()[u];for(const x in m){const b=a.getValue(x,a.latestValues[x]??null),j=m[x];if(j===void 0||y&&uS(y,x))continue;const k={delay:l,...cd(h||{},x)},C=b.get();if(C!==void 0&&!b.isAnimating&&!Array.isArray(j)&&j===C&&!k.velocity)continue;let B=!1;if(window.MotionHandoffAnimation){const G=wg(a);if(G){const J=window.MotionHandoffAnimation(G,x,_t);J!==null&&(k.startTime=J,B=!0)}}Bu(a,x),b.start(jd(x,b,j,a.shouldReduceMotion&&X1.has(x)?{type:!1}:k,a,B));const K=b.animation;K&&g.push(K)}return f&&Promise.all(g).then(()=>{_t.update(()=>{f&&tS(a,f)})}),g}function Ng(a,s,l,o=0,u=1){const h=Array.from(a).sort((y,x)=>y.sortNodePosition(x)).indexOf(s),f=a.size,m=(f-1)*o;return typeof l=="function"?l(h,f):u===1?h*o:m-h*o}function Hu(a,s,l={}){const o=hi(a,s,l.type==="exit"?a.presenceContext?.custom:void 0);let{transition:u=a.getDefaultTransition()||{}}=o||{};l.transitionOverride&&(u=l.transitionOverride);const h=o?()=>Promise.all(Mg(a,o,l)):()=>Promise.resolve(),f=a.variantChildren&&a.variantChildren.size?(g=0)=>{const{delayChildren:y=0,staggerChildren:x,staggerDirection:b}=u;return dS(a,s,g,y,x,b,l)}:()=>Promise.resolve(),{when:m}=u;if(m){const[g,y]=m==="beforeChildren"?[h,f]:[f,h];return g().then(()=>y())}else return Promise.all([h(),f(l.delay)])}function dS(a,s,l=0,o=0,u=0,h=1,f){const m=[];for(const g of a.variantChildren)g.notify("AnimationStart",s),m.push(Hu(g,s,{...f,delay:l+(typeof o=="function"?0:o)+Ng(a.variantChildren,g,o,u,h)}).then(()=>g.notify("AnimationComplete",s)));return Promise.all(m)}function fS(a,s,l={}){a.notify("AnimationStart",s);let o;if(Array.isArray(s)){const u=s.map(h=>Hu(a,h,l));o=Promise.all(u)}else if(typeof s=="string")o=Hu(a,s,l);else{const u=typeof s=="function"?hi(a,s,l.custom):s;o=Promise.all(Mg(a,u,l))}return o.then(()=>{a.notify("AnimationComplete",s)})}function Ag(a,s){if(!Array.isArray(s))return!1;const l=s.length;if(l!==a.length)return!1;for(let o=0;o<l;o++)if(s[o]!==a[o])return!1;return!0}const hS=md.length;function kg(a){if(!a)return;if(!a.isControllingVariants){const l=a.parent?kg(a.parent)||{}:{};return a.props.initial!==void 0&&(l.initial=a.props.initial),l}const s={};for(let l=0;l<hS;l++){const o=md[l],u=a.props[o];(zs(u)||u===!1)&&(s[o]=u)}return s}const pS=[...pd].reverse(),mS=pd.length;function gS(a){return s=>Promise.all(s.map(({animation:l,options:o})=>fS(a,l,o)))}function yS(a){let s=gS(a),l=w0(),o=!0;const u=g=>(y,x)=>{const b=hi(a,x,g==="exit"?a.presenceContext?.custom:void 0);if(b){const{transition:j,transitionEnd:k,...C}=b;y={...y,...C,...k}}return y};function h(g){s=g(a)}function f(g){const{props:y}=a,x=kg(a.parent)||{},b=[],j=new Set;let k={},C=1/0;for(let K=0;K<mS;K++){const G=pS[K],J=l[G],Y=y[G]!==void 0?y[G]:x[G],H=zs(Y),F=G===g?J.isActive:null;F===!1&&(C=K);let st=Y===x[G]&&Y!==y[G]&&H;if(st&&o&&a.manuallyAnimateOnMount&&(st=!1),J.protectedKeys={...k},!J.isActive&&F===null||!Y&&!J.prevProp||Mr(Y)||typeof Y=="boolean")continue;const $=vS(J.prevProp,Y);let q=$||G===g&&J.isActive&&!st&&H||K>C&&H,nt=!1;const ot=Array.isArray(Y)?Y:[Y];let ht=ot.reduce(u(G),{});F===!1&&(ht={});const{prevResolvedValues:bt={}}=J,se={...bt,...ht},$t=X=>{q=!0,j.has(X)&&(nt=!0,j.delete(X)),J.needsAnimating[X]=!0;const I=a.getValue(X);I&&(I.liveStyle=!1)};for(const X in se){const I=ht[X],at=bt[X];if(k.hasOwnProperty(X))continue;let lt=!1;Lu(I)&&Lu(at)?lt=!Ag(I,at):lt=I!==at,lt?I!=null?$t(X):j.add(X):I!==void 0&&j.has(X)?$t(X):J.protectedKeys[X]=!0}J.prevProp=Y,J.prevResolvedValues=ht,J.isActive&&(k={...k,...ht}),o&&a.blockInitialAnimation&&(q=!1);const Ft=st&&$;q&&(!Ft||nt)&&b.push(...ot.map(X=>{const I={type:G};if(typeof X=="string"&&o&&!Ft&&a.manuallyAnimateOnMount&&a.parent){const{parent:at}=a,lt=hi(at,X);if(at.enteringChildren&&lt){const{delayChildren:w}=lt.transition||{};I.delay=Ng(at.enteringChildren,a,w)}}return{animation:X,options:I}}))}if(j.size){const K={};if(typeof y.initial!="boolean"){const G=hi(a,Array.isArray(y.initial)?y.initial[0]:y.initial);G&&G.transition&&(K.transition=G.transition)}j.forEach(G=>{const J=a.getBaseTarget(G),Y=a.getValue(G);Y&&(Y.liveStyle=!0),K[G]=J??null}),b.push({animation:K})}let B=!!b.length;return o&&(y.initial===!1||y.initial===y.animate)&&!a.manuallyAnimateOnMount&&(B=!1),o=!1,B?s(b):Promise.resolve()}function m(g,y){if(l[g].isActive===y)return Promise.resolve();a.variantChildren?.forEach(b=>b.animationState?.setActive(g,y)),l[g].isActive=y;const x=f(g);for(const b in l)l[b].protectedKeys={};return x}return{animateChanges:f,setActive:m,setAnimateFunction:h,getState:()=>l,reset:()=>{l=w0()}}}function vS(a,s){return typeof s=="string"?s!==a:Array.isArray(s)?!Ag(s,a):!1}function va(a=!1){return{isActive:a,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function w0(){return{animate:va(!0),whileInView:va(),whileHover:va(),whileTap:va(),whileDrag:va(),whileFocus:va(),exit:va()}}class Wn{constructor(s){this.isMounted=!1,this.node=s}update(){}}class xS extends Wn{constructor(s){super(s),s.animationState||(s.animationState=yS(s))}updateAnimationControlsSubscription(){const{animate:s}=this.node.getProps();Mr(s)&&(this.unmountControls=s.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:s}=this.node.getProps(),{animate:l}=this.node.prevProps||{};s!==l&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}}let bS=0;class SS extends Wn{constructor(){super(...arguments),this.id=bS++}update(){if(!this.node.presenceContext)return;const{isPresent:s,onExitComplete:l}=this.node.presenceContext,{isPresent:o}=this.node.prevPresenceContext||{};if(!this.node.animationState||s===o)return;const u=this.node.animationState.setActive("exit",!s);l&&!s&&u.then(()=>{l(this.id)})}mount(){const{register:s,onExitComplete:l}=this.node.presenceContext||{};l&&l(this.id),s&&(this.unmount=s(this.id))}unmount(){}}const jS={animation:{Feature:xS},exit:{Feature:SS}};function Es(a,s,l,o={passive:!0}){return a.addEventListener(s,l,o),()=>a.removeEventListener(s,l)}function Os(a){return{point:{x:a.pageX,y:a.pageY}}}const TS=a=>s=>fd(s)&&a(s,Os(s));function Ts(a,s,l,o){return Es(a,s,TS(l),o)}const zg=1e-4,wS=1-zg,MS=1+zg,Eg=.01,NS=0-Eg,AS=0+Eg;function de(a){return a.max-a.min}function kS(a,s,l){return Math.abs(a-s)<=l}function M0(a,s,l,o=.5){a.origin=o,a.originPoint=Ot(s.min,s.max,a.origin),a.scale=de(l)/de(s),a.translate=Ot(l.min,l.max,a.origin)-a.originPoint,(a.scale>=wS&&a.scale<=MS||isNaN(a.scale))&&(a.scale=1),(a.translate>=NS&&a.translate<=AS||isNaN(a.translate))&&(a.translate=0)}function ws(a,s,l,o){M0(a.x,s.x,l.x,o?o.originX:void 0),M0(a.y,s.y,l.y,o?o.originY:void 0)}function N0(a,s,l){a.min=l.min+s.min,a.max=a.min+de(s)}function zS(a,s,l){N0(a.x,s.x,l.x),N0(a.y,s.y,l.y)}function A0(a,s,l){a.min=s.min-l.min,a.max=a.min+de(s)}function xr(a,s,l){A0(a.x,s.x,l.x),A0(a.y,s.y,l.y)}function Be(a){return[a("x"),a("y")]}const Cg=({current:a})=>a?a.ownerDocument.defaultView:null,k0=(a,s)=>Math.abs(a-s);function ES(a,s){const l=k0(a.x,s.x),o=k0(a.y,s.y);return Math.sqrt(l**2+o**2)}const z0=new Set(["auto","scroll"]);class Dg{constructor(s,l,{transformPagePoint:o,contextWindow:u=window,dragSnapToOrigin:h=!1,distanceThreshold:f=3,element:m}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=k=>{this.handleScroll(k.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const k=mu(this.lastMoveEventInfo,this.history),C=this.startEvent!==null,B=ES(k.offset,{x:0,y:0})>=this.distanceThreshold;if(!C&&!B)return;const{point:K}=k,{timestamp:G}=ie;this.history.push({...K,timestamp:G});const{onStart:J,onMove:Y}=this.handlers;C||(J&&J(this.lastMoveEvent,k),this.startEvent=this.lastMoveEvent),Y&&Y(this.lastMoveEvent,k)},this.handlePointerMove=(k,C)=>{this.lastMoveEvent=k,this.lastMoveEventInfo=pu(C,this.transformPagePoint),_t.update(this.updatePoint,!0)},this.handlePointerUp=(k,C)=>{this.end();const{onEnd:B,onSessionEnd:K,resumeAnimation:G}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&G&&G(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const J=mu(k.type==="pointercancel"?this.lastMoveEventInfo:pu(C,this.transformPagePoint),this.history);this.startEvent&&B&&B(k,J),K&&K(k,J)},!fd(s))return;this.dragSnapToOrigin=h,this.handlers=l,this.transformPagePoint=o,this.distanceThreshold=f,this.contextWindow=u||window;const g=Os(s),y=pu(g,this.transformPagePoint),{point:x}=y,{timestamp:b}=ie;this.history=[{...x,timestamp:b}];const{onSessionStart:j}=l;j&&j(s,mu(y,this.history)),this.removeListeners=Ds(Ts(this.contextWindow,"pointermove",this.handlePointerMove),Ts(this.contextWindow,"pointerup",this.handlePointerUp),Ts(this.contextWindow,"pointercancel",this.handlePointerUp)),m&&this.startScrollTracking(m)}startScrollTracking(s){let l=s.parentElement;for(;l;){const o=getComputedStyle(l);(z0.has(o.overflowX)||z0.has(o.overflowY))&&this.scrollPositions.set(l,{x:l.scrollLeft,y:l.scrollTop}),l=l.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0,passive:!0}),window.addEventListener("scroll",this.onWindowScroll,{passive:!0}),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(s){const l=this.scrollPositions.get(s);if(!l)return;const o=s===window,u=o?{x:window.scrollX,y:window.scrollY}:{x:s.scrollLeft,y:s.scrollTop},h={x:u.x-l.x,y:u.y-l.y};h.x===0&&h.y===0||(o?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=h.x,this.lastMoveEventInfo.point.y+=h.y):this.history.length>0&&(this.history[0].x-=h.x,this.history[0].y-=h.y),this.scrollPositions.set(s,u),_t.update(this.updatePoint,!0))}updateHandlers(s){this.handlers=s}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),Fn(this.updatePoint)}}function pu(a,s){return s?{point:s(a.point)}:a}function E0(a,s){return{x:a.x-s.x,y:a.y-s.y}}function mu({point:a},s){return{point:a,delta:E0(a,_g(s)),offset:E0(a,CS(s)),velocity:DS(s,.1)}}function CS(a){return a[0]}function _g(a){return a[a.length-1]}function DS(a,s){if(a.length<2)return{x:0,y:0};let l=a.length-1,o=null;const u=_g(a);for(;l>=0&&(o=a[l],!(u.timestamp-o.timestamp>bn(s)));)l--;if(!o)return{x:0,y:0};const h=He(u.timestamp-o.timestamp);if(h===0)return{x:0,y:0};const f={x:(u.x-o.x)/h,y:(u.y-o.y)/h};return f.x===1/0&&(f.x=0),f.y===1/0&&(f.y=0),f}function _S(a,{min:s,max:l},o){return s!==void 0&&a<s?a=o?Ot(s,a,o.min):Math.max(a,s):l!==void 0&&a>l&&(a=o?Ot(l,a,o.max):Math.min(a,l)),a}function C0(a,s,l){return{min:s!==void 0?a.min+s:void 0,max:l!==void 0?a.max+l-(a.max-a.min):void 0}}function RS(a,{top:s,left:l,bottom:o,right:u}){return{x:C0(a.x,l,u),y:C0(a.y,s,o)}}function D0(a,s){let l=s.min-a.min,o=s.max-a.max;return s.max-s.min<a.max-a.min&&([l,o]=[o,l]),{min:l,max:o}}function OS(a,s){return{x:D0(a.x,s.x),y:D0(a.y,s.y)}}function VS(a,s){let l=.5;const o=de(a),u=de(s);return u>o?l=Ns(s.min,s.max-o,a.min):o>u&&(l=Ns(a.min,a.max-u,s.min)),tn(0,1,l)}function US(a,s){const l={};return s.min!==void 0&&(l.min=s.min-a.min),s.max!==void 0&&(l.max=s.max-a.min),l}const qu=.35;function LS(a=qu){return a===!1?a=0:a===!0&&(a=qu),{x:_0(a,"left","right"),y:_0(a,"top","bottom")}}function _0(a,s,l){return{min:R0(a,s),max:R0(a,l)}}function R0(a,s){return typeof a=="number"?a:a[s]||0}const BS=new WeakMap;class HS{constructor(s){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Jt(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=s}start(s,{snapToCursor:l=!1,distanceThreshold:o}={}){const{presenceContext:u}=this.visualElement;if(u&&u.isPresent===!1)return;const h=b=>{l?(this.stopAnimation(),this.snapToCursor(Os(b).point)):this.pauseAnimation()},f=(b,j)=>{this.stopAnimation();const{drag:k,dragPropagation:C,onDragStart:B}=this.getProps();if(k&&!C&&(this.openDragLock&&this.openDragLock(),this.openDragLock=Qb(k),!this.openDragLock))return;this.latestPointerEvent=b,this.latestPanInfo=j,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Be(G=>{let J=this.getAxisMotionValue(G).get()||0;if(Ie.test(J)){const{projection:Y}=this.visualElement;if(Y&&Y.layout){const H=Y.layout.layoutBox[G];H&&(J=de(H)*(parseFloat(J)/100))}}this.originPoint[G]=J}),B&&_t.postRender(()=>B(b,j)),Bu(this.visualElement,"transform");const{animationState:K}=this.visualElement;K&&K.setActive("whileDrag",!0)},m=(b,j)=>{this.latestPointerEvent=b,this.latestPanInfo=j;const{dragPropagation:k,dragDirectionLock:C,onDirectionLock:B,onDrag:K}=this.getProps();if(!k&&!this.openDragLock)return;const{offset:G}=j;if(C&&this.currentDirection===null){this.currentDirection=qS(G),this.currentDirection!==null&&B&&B(this.currentDirection);return}this.updateAxis("x",j.point,G),this.updateAxis("y",j.point,G),this.visualElement.render(),K&&K(b,j)},g=(b,j)=>{this.latestPointerEvent=b,this.latestPanInfo=j,this.stop(b,j),this.latestPointerEvent=null,this.latestPanInfo=null},y=()=>Be(b=>this.getAnimationState(b)==="paused"&&this.getAxisMotionValue(b).animation?.play()),{dragSnapToOrigin:x}=this.getProps();this.panSession=new Dg(s,{onSessionStart:h,onStart:f,onMove:m,onSessionEnd:g,resumeAnimation:y},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:x,distanceThreshold:o,contextWindow:Cg(this.visualElement),element:this.visualElement.current})}stop(s,l){const o=s||this.latestPointerEvent,u=l||this.latestPanInfo,h=this.isDragging;if(this.cancel(),!h||!u||!o)return;const{velocity:f}=u;this.startAnimation(f);const{onDragEnd:m}=this.getProps();m&&_t.postRender(()=>m(o,u))}cancel(){this.isDragging=!1;const{projection:s,animationState:l}=this.visualElement;s&&(s.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:o}=this.getProps();!o&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),l&&l.setActive("whileDrag",!1)}updateAxis(s,l,o){const{drag:u}=this.getProps();if(!o||!lr(s,u,this.currentDirection))return;const h=this.getAxisMotionValue(s);let f=this.originPoint[s]+o[s];this.constraints&&this.constraints[s]&&(f=_S(f,this.constraints[s],this.elastic[s])),h.set(f)}resolveConstraints(){const{dragConstraints:s,dragElastic:l}=this.getProps(),o=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,u=this.constraints;s&&bs(s)?this.constraints||(this.constraints=this.resolveRefConstraints()):s&&o?this.constraints=RS(o.layoutBox,s):this.constraints=!1,this.elastic=LS(l),u!==this.constraints&&o&&this.constraints&&!this.hasMutatedConstraints&&Be(h=>{this.constraints!==!1&&this.getAxisMotionValue(h)&&(this.constraints[h]=US(o.layoutBox[h],this.constraints[h]))})}resolveRefConstraints(){const{dragConstraints:s,onMeasureDragConstraints:l}=this.getProps();if(!s||!bs(s))return!1;const o=s.current,{projection:u}=this.visualElement;if(!u||!u.layout)return!1;const h=Y5(o,u.root,this.visualElement.getTransformPagePoint());let f=OS(u.layout.layoutBox,h);if(l){const m=l(B5(f));this.hasMutatedConstraints=!!m,m&&(f=gg(m))}return f}startAnimation(s){const{drag:l,dragMomentum:o,dragElastic:u,dragTransition:h,dragSnapToOrigin:f,onDragTransitionEnd:m}=this.getProps(),g=this.constraints||{},y=Be(x=>{if(!lr(x,l,this.currentDirection))return;let b=g&&g[x]||{};f&&(b={min:0,max:0});const j=u?200:1e6,k=u?40:1e7,C={type:"inertia",velocity:o?s[x]:0,bounceStiffness:j,bounceDamping:k,timeConstant:750,restDelta:1,restSpeed:10,...h,...b};return this.startAxisValueAnimation(x,C)});return Promise.all(y).then(m)}startAxisValueAnimation(s,l){const o=this.getAxisMotionValue(s);return Bu(this.visualElement,s),o.start(jd(s,o,0,l,this.visualElement,!1))}stopAnimation(){Be(s=>this.getAxisMotionValue(s).stop())}pauseAnimation(){Be(s=>this.getAxisMotionValue(s).animation?.pause())}getAnimationState(s){return this.getAxisMotionValue(s).animation?.state}getAxisMotionValue(s){const l=`_drag${s.toUpperCase()}`,o=this.visualElement.getProps(),u=o[l];return u||this.visualElement.getValue(s,(o.initial?o.initial[s]:void 0)||0)}snapToCursor(s){Be(l=>{const{drag:o}=this.getProps();if(!lr(l,o,this.currentDirection))return;const{projection:u}=this.visualElement,h=this.getAxisMotionValue(l);if(u&&u.layout){const{min:f,max:m}=u.layout.layoutBox[l],g=h.get()||0;h.set(s[l]-Ot(f,m,.5)+g)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:s,dragConstraints:l}=this.getProps(),{projection:o}=this.visualElement;if(!bs(l)||!o||!this.constraints)return;this.stopAnimation();const u={x:0,y:0};Be(f=>{const m=this.getAxisMotionValue(f);if(m&&this.constraints!==!1){const g=m.get();u[f]=VS({min:g,max:g},this.constraints[f])}});const{transformTemplate:h}=this.visualElement.getProps();this.visualElement.current.style.transform=h?h({},""):"none",o.root&&o.root.updateScroll(),o.updateLayout(),this.resolveConstraints(),Be(f=>{if(!lr(f,s,null))return;const m=this.getAxisMotionValue(f),{min:g,max:y}=this.constraints[f];m.set(Ot(g,y,u[f]))})}addListeners(){if(!this.visualElement.current)return;BS.set(this.visualElement,this);const s=this.visualElement.current,l=Ts(s,"pointerdown",g=>{const{drag:y,dragListener:x=!0}=this.getProps();y&&x&&!tg(g.target)&&this.start(g)}),o=()=>{const{dragConstraints:g}=this.getProps();bs(g)&&g.current&&(this.constraints=this.resolveRefConstraints())},{projection:u}=this.visualElement,h=u.addEventListener("measure",o);u&&!u.layout&&(u.root&&u.root.updateScroll(),u.updateLayout()),_t.read(o);const f=Es(window,"resize",()=>this.scalePositionWithinConstraints()),m=u.addEventListener("didUpdate",(({delta:g,hasLayoutChanged:y})=>{this.isDragging&&y&&(Be(x=>{const b=this.getAxisMotionValue(x);b&&(this.originPoint[x]+=g[x].translate,b.set(b.get()+g[x].translate))}),this.visualElement.render())}));return()=>{f(),l(),h(),m&&m()}}getProps(){const s=this.visualElement.getProps(),{drag:l=!1,dragDirectionLock:o=!1,dragPropagation:u=!1,dragConstraints:h=!1,dragElastic:f=qu,dragMomentum:m=!0}=s;return{...s,drag:l,dragDirectionLock:o,dragPropagation:u,dragConstraints:h,dragElastic:f,dragMomentum:m}}}function lr(a,s,l){return(s===!0||s===a)&&(l===null||l===a)}function qS(a,s=10){let l=null;return Math.abs(a.y)>s?l="y":Math.abs(a.x)>s&&(l="x"),l}class YS extends Wn{constructor(s){super(s),this.removeGroupControls=qe,this.removeListeners=qe,this.controls=new HS(s)}mount(){const{dragControls:s}=this.node.getProps();s&&(this.removeGroupControls=s.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||qe}update(){const{dragControls:s}=this.node.getProps(),{dragControls:l}=this.node.prevProps||{};s!==l&&(this.removeGroupControls(),s&&(this.removeGroupControls=s.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners()}}const O0=a=>(s,l)=>{a&&_t.postRender(()=>a(s,l))};class GS extends Wn{constructor(){super(...arguments),this.removePointerDownListener=qe}onPointerDown(s){this.session=new Dg(s,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Cg(this.node)})}createPanHandlers(){const{onPanSessionStart:s,onPanStart:l,onPan:o,onPanEnd:u}=this.node.getProps();return{onSessionStart:O0(s),onStart:O0(l),onMove:o,onEnd:(h,f)=>{delete this.session,u&&_t.postRender(()=>u(h,f))}}}mount(){this.removePointerDownListener=Ts(this.node.current,"pointerdown",s=>this.onPointerDown(s))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const fr={hasAnimatedSinceResize:!0,hasEverUpdated:!1};let gu=!1;class XS extends U.Component{componentDidMount(){const{visualElement:s,layoutGroup:l,switchLayoutGroup:o,layoutId:u}=this.props,{projection:h}=s;h&&(l.group&&l.group.add(h),o&&o.register&&u&&o.register(h),gu&&h.root.didUpdate(),h.addEventListener("animationComplete",()=>{this.safeToRemove()}),h.setOptions({...h.options,onExitComplete:()=>this.safeToRemove()})),fr.hasEverUpdated=!0}getSnapshotBeforeUpdate(s){const{layoutDependency:l,visualElement:o,drag:u,isPresent:h}=this.props,{projection:f}=o;return f&&(f.isPresent=h,gu=!0,u||s.layoutDependency!==l||l===void 0||s.isPresent!==h?f.willUpdate():this.safeToRemove(),s.isPresent!==h&&(h?f.promote():f.relegate()||_t.postRender(()=>{const m=f.getStack();(!m||!m.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:s}=this.props.visualElement;s&&(s.root.didUpdate(),dd.postRender(()=>{!s.currentAnimation&&s.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:s,layoutGroup:l,switchLayoutGroup:o}=this.props,{projection:u}=s;gu=!0,u&&(u.scheduleCheckAfterUnmount(),l&&l.group&&l.group.remove(u),o&&o.deregister&&o.deregister(u))}safeToRemove(){const{safeToRemove:s}=this.props;s&&s()}render(){return null}}function Rg(a){const[s,l]=ng(),o=U.useContext(Xu);return d.jsx(XS,{...a,layoutGroup:o,switchLayoutGroup:U.useContext(pg),isPresent:s,safeToRemove:l})}function KS(a,s,l){const o=re(a)?a:pi(a);return o.start(jd("",o,s,l)),o.animation}const QS=(a,s)=>a.depth-s.depth;class ZS{constructor(){this.children=[],this.isDirty=!1}add(s){Zu(this.children,s),this.isDirty=!0}remove(s){Ju(this.children,s),this.isDirty=!0}forEach(s){this.isDirty&&this.children.sort(QS),this.isDirty=!1,this.children.forEach(s)}}function JS(a,s){const l=ue.now(),o=({timestamp:u})=>{const h=u-l;h>=s&&(Fn(o),a(h-s))};return _t.setup(o,!0),()=>Fn(o)}const Og=["TopLeft","TopRight","BottomLeft","BottomRight"],$S=Og.length,V0=a=>typeof a=="string"?parseFloat(a):a,U0=a=>typeof a=="number"||P.test(a);function FS(a,s,l,o,u,h){u?(a.opacity=Ot(0,l.opacity??1,PS(o)),a.opacityExit=Ot(s.opacity??1,0,WS(o))):h&&(a.opacity=Ot(s.opacity??1,l.opacity??1,o));for(let f=0;f<$S;f++){const m=`border${Og[f]}Radius`;let g=L0(s,m),y=L0(l,m);if(g===void 0&&y===void 0)continue;g||(g=0),y||(y=0),g===0||y===0||U0(g)===U0(y)?(a[m]=Math.max(Ot(V0(g),V0(y),o),0),(Ie.test(y)||Ie.test(g))&&(a[m]+="%")):a[m]=y}(s.rotate||l.rotate)&&(a.rotate=Ot(s.rotate||0,l.rotate||0,o))}function L0(a,s){return a[s]!==void 0?a[s]:a.borderRadius}const PS=Vg(0,.5,b1),WS=Vg(.5,.95,qe);function Vg(a,s,l){return o=>o<a?0:o>s?1:l(Ns(a,s,o))}function B0(a,s){a.min=s.min,a.max=s.max}function Ke(a,s){B0(a.x,s.x),B0(a.y,s.y)}function H0(a,s){a.translate=s.translate,a.scale=s.scale,a.originPoint=s.originPoint,a.origin=s.origin}function q0(a,s,l,o,u){return a-=s,a=vr(a,1/l,o),u!==void 0&&(a=vr(a,1/u,o)),a}function IS(a,s=0,l=1,o=.5,u,h=a,f=a){if(Ie.test(s)&&(s=parseFloat(s),s=Ot(f.min,f.max,s/100)-f.min),typeof s!="number")return;let m=Ot(h.min,h.max,o);a===h&&(m-=s),a.min=q0(a.min,s,l,m,u),a.max=q0(a.max,s,l,m,u)}function Y0(a,s,[l,o,u],h,f){IS(a,s[l],s[o],s[u],s.scale,h,f)}const t3=["x","scaleX","originX"],e3=["y","scaleY","originY"];function G0(a,s,l,o){Y0(a.x,s,t3,l?l.x:void 0,o?o.x:void 0),Y0(a.y,s,e3,l?l.y:void 0,o?o.y:void 0)}function X0(a){return a.translate===0&&a.scale===1}function Ug(a){return X0(a.x)&&X0(a.y)}function K0(a,s){return a.min===s.min&&a.max===s.max}function n3(a,s){return K0(a.x,s.x)&&K0(a.y,s.y)}function Q0(a,s){return Math.round(a.min)===Math.round(s.min)&&Math.round(a.max)===Math.round(s.max)}function Lg(a,s){return Q0(a.x,s.x)&&Q0(a.y,s.y)}function Z0(a){return de(a.x)/de(a.y)}function J0(a,s){return a.translate===s.translate&&a.scale===s.scale&&a.originPoint===s.originPoint}class a3{constructor(){this.members=[]}add(s){Zu(this.members,s),s.scheduleRender()}remove(s){if(Ju(this.members,s),s===this.prevLead&&(this.prevLead=void 0),s===this.lead){const l=this.members[this.members.length-1];l&&this.promote(l)}}relegate(s){const l=this.members.findIndex(u=>s===u);if(l===0)return!1;let o;for(let u=l;u>=0;u--){const h=this.members[u];if(h.isPresent!==!1){o=h;break}}return o?(this.promote(o),!0):!1}promote(s,l){const o=this.lead;if(s!==o&&(this.prevLead=o,this.lead=s,s.show(),o)){o.instance&&o.scheduleRender(),s.scheduleRender(),s.resumeFrom=o,l&&(s.resumeFrom.preserveOpacity=!0),o.snapshot&&(s.snapshot=o.snapshot,s.snapshot.latestValues=o.animationValues||o.latestValues),s.root&&s.root.isUpdating&&(s.isLayoutDirty=!0);const{crossfade:u}=s.options;u===!1&&o.hide()}}exitAnimationComplete(){this.members.forEach(s=>{const{options:l,resumingFrom:o}=s;l.onExitComplete&&l.onExitComplete(),o&&o.options.onExitComplete&&o.options.onExitComplete()})}scheduleRender(){this.members.forEach(s=>{s.instance&&s.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function i3(a,s,l){let o="";const u=a.x.translate/s.x,h=a.y.translate/s.y,f=l?.z||0;if((u||h||f)&&(o=`translate3d(${u}px, ${h}px, ${f}px) `),(s.x!==1||s.y!==1)&&(o+=`scale(${1/s.x}, ${1/s.y}) `),l){const{transformPerspective:y,rotate:x,rotateX:b,rotateY:j,skewX:k,skewY:C}=l;y&&(o=`perspective(${y}px) ${o}`),x&&(o+=`rotate(${x}deg) `),b&&(o+=`rotateX(${b}deg) `),j&&(o+=`rotateY(${j}deg) `),k&&(o+=`skewX(${k}deg) `),C&&(o+=`skewY(${C}deg) `)}const m=a.x.scale*s.x,g=a.y.scale*s.y;return(m!==1||g!==1)&&(o+=`scale(${m}, ${g})`),o||"none"}const yu=["","X","Y","Z"],s3=1e3;let l3=0;function vu(a,s,l,o){const{latestValues:u}=s;u[a]&&(l[a]=u[a],s.setStaticValue(a,0),o&&(o[a]=0))}function Bg(a){if(a.hasCheckedOptimisedAppear=!0,a.root===a)return;const{visualElement:s}=a.options;if(!s)return;const l=wg(s);if(window.MotionHasOptimisedAnimation(l,"transform")){const{layout:u,layoutId:h}=a.options;window.MotionCancelOptimisedAnimation(l,"transform",_t,!(u||h))}const{parent:o}=a;o&&!o.hasCheckedOptimisedAppear&&Bg(o)}function Hg({attachResizeListener:a,defaultParent:s,measureScroll:l,checkIsScrollRoot:o,resetTransform:u}){return class{constructor(f={},m=s?.()){this.id=l3++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(c3),this.nodes.forEach(h3),this.nodes.forEach(p3),this.nodes.forEach(u3)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=f,this.root=m?m.root||m:this,this.path=m?[...m.path,m]:[],this.parent=m,this.depth=m?m.depth+1:0;for(let g=0;g<this.path.length;g++)this.path[g].shouldResetTransform=!0;this.root===this&&(this.nodes=new ZS)}addEventListener(f,m){return this.eventHandlers.has(f)||this.eventHandlers.set(f,new Pu),this.eventHandlers.get(f).add(m)}notifyListeners(f,...m){const g=this.eventHandlers.get(f);g&&g.notify(...m)}hasListeners(f){return this.eventHandlers.has(f)}mount(f){if(this.instance)return;this.isSVG=eg(f)&&!Pb(f),this.instance=f;const{layoutId:m,layout:g,visualElement:y}=this.options;if(y&&!y.current&&y.mount(f),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(g||m)&&(this.isLayoutDirty=!0),a){let x,b=0;const j=()=>this.root.updateBlockedByResize=!1;_t.read(()=>{b=window.innerWidth}),a(f,()=>{const k=window.innerWidth;k!==b&&(b=k,this.root.updateBlockedByResize=!0,x&&x(),x=JS(j,250),fr.hasAnimatedSinceResize&&(fr.hasAnimatedSinceResize=!1,this.nodes.forEach(P0)))})}m&&this.root.registerSharedNode(m,this),this.options.animate!==!1&&y&&(m||g)&&this.addEventListener("didUpdate",({delta:x,hasLayoutChanged:b,hasRelativeLayoutChanged:j,layout:k})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const C=this.options.transition||y.getDefaultTransition()||x3,{onLayoutAnimationStart:B,onLayoutAnimationComplete:K}=y.getProps(),G=!this.targetLayout||!Lg(this.targetLayout,k),J=!b&&j;if(this.options.layoutRoot||this.resumeFrom||J||b&&(G||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const Y={...cd(C,"layout"),onPlay:B,onComplete:K};(y.shouldReduceMotion||this.options.layoutRoot)&&(Y.delay=0,Y.type=!1),this.startAnimation(Y),this.setAnimationOrigin(x,J)}else b||P0(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=k})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const f=this.getStack();f&&f.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Fn(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(m3),this.animationId++)}getTransformTemplate(){const{visualElement:f}=this.options;return f&&f.getProps().transformTemplate}willUpdate(f=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Bg(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let x=0;x<this.path.length;x++){const b=this.path[x];b.shouldResetTransform=!0,b.updateScroll("snapshot"),b.options.layoutRoot&&b.willUpdate(!1)}const{layoutId:m,layout:g}=this.options;if(m===void 0&&!g)return;const y=this.getTransformTemplate();this.prevTransformTemplateValue=y?y(this.latestValues,""):void 0,this.updateSnapshot(),f&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach($0);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(F0);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(f3),this.nodes.forEach(r3),this.nodes.forEach(o3)):this.nodes.forEach(F0),this.clearAllSnapshots();const m=ue.now();ie.delta=tn(0,1e3/60,m-ie.timestamp),ie.timestamp=m,ie.isProcessing=!0,su.update.process(ie),su.preRender.process(ie),su.render.process(ie),ie.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,dd.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(d3),this.sharedNodes.forEach(g3)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,_t.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){_t.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!de(this.snapshot.measuredBox.x)&&!de(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let g=0;g<this.path.length;g++)this.path[g].updateScroll();const f=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected=Jt(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:m}=this.options;m&&m.notify("LayoutMeasure",this.layout.layoutBox,f?f.layoutBox:void 0)}updateScroll(f="measure"){let m=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===f&&(m=!1),m&&this.instance){const g=o(this.instance);this.scroll={animationId:this.root.animationId,phase:f,isRoot:g,offset:l(this.instance),wasRoot:this.scroll?this.scroll.isRoot:g}}}resetTransform(){if(!u)return;const f=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,m=this.projectionDelta&&!Ug(this.projectionDelta),g=this.getTransformTemplate(),y=g?g(this.latestValues,""):void 0,x=y!==this.prevTransformTemplateValue;f&&this.instance&&(m||xa(this.latestValues)||x)&&(u(this.instance,y),this.shouldResetTransform=!1,this.scheduleRender())}measure(f=!0){const m=this.measurePageBox();let g=this.removeElementScroll(m);return f&&(g=this.removeTransform(g)),b3(g),{animationId:this.root.animationId,measuredBox:m,layoutBox:g,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:f}=this.options;if(!f)return Jt();const m=f.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(S3))){const{scroll:y}=this.root;y&&(ui(m.x,y.offset.x),ui(m.y,y.offset.y))}return m}removeElementScroll(f){const m=Jt();if(Ke(m,f),this.scroll?.wasRoot)return m;for(let g=0;g<this.path.length;g++){const y=this.path[g],{scroll:x,options:b}=y;y!==this.root&&x&&b.layoutScroll&&(x.wasRoot&&Ke(m,f),ui(m.x,x.offset.x),ui(m.y,x.offset.y))}return m}applyTransform(f,m=!1){const g=Jt();Ke(g,f);for(let y=0;y<this.path.length;y++){const x=this.path[y];!m&&x.options.layoutScroll&&x.scroll&&x!==x.root&&di(g,{x:-x.scroll.offset.x,y:-x.scroll.offset.y}),xa(x.latestValues)&&di(g,x.latestValues)}return xa(this.latestValues)&&di(g,this.latestValues),g}removeTransform(f){const m=Jt();Ke(m,f);for(let g=0;g<this.path.length;g++){const y=this.path[g];if(!y.instance||!xa(y.latestValues))continue;Ou(y.latestValues)&&y.updateSnapshot();const x=Jt(),b=y.measurePageBox();Ke(x,b),G0(m,y.latestValues,y.snapshot?y.snapshot.layoutBox:void 0,x)}return xa(this.latestValues)&&G0(m,this.latestValues),m}setTargetDelta(f){this.targetDelta=f,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(f){this.options={...this.options,...f,crossfade:f.crossfade!==void 0?f.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==ie.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(f=!1){const m=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=m.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=m.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=m.isSharedProjectionDirty);const g=!!this.resumingFrom||this!==m;if(!(f||g&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:x,layoutId:b}=this.options;if(!this.layout||!(x||b))return;this.resolvedRelativeTargetAt=ie.timestamp;const j=this.getClosestProjectingParent();j&&this.linkedParentVersion!==j.layoutVersion&&!j.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(j&&j.layout?this.createRelativeTarget(j,this.layout.layoutBox,j.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=Jt(),this.targetWithTransforms=Jt()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),zS(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Ke(this.target,this.layout.layoutBox),vg(this.target,this.targetDelta)):Ke(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,j&&!!j.resumingFrom==!!this.resumingFrom&&!j.options.layoutScroll&&j.target&&this.animationProgress!==1?this.createRelativeTarget(j,this.target,j.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||Ou(this.parent.latestValues)||yg(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(f,m,g){this.relativeParent=f,this.linkedParentVersion=f.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Jt(),this.relativeTargetOrigin=Jt(),xr(this.relativeTargetOrigin,m,g),Ke(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){const f=this.getLead(),m=!!this.resumingFrom||this!==f;let g=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(g=!1),m&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(g=!1),this.resolvedRelativeTargetAt===ie.timestamp&&(g=!1),g)return;const{layout:y,layoutId:x}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(y||x))return;Ke(this.layoutCorrected,this.layout.layoutBox);const b=this.treeScale.x,j=this.treeScale.y;q5(this.layoutCorrected,this.treeScale,this.path,m),f.layout&&!f.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(f.target=f.layout.layoutBox,f.targetWithTransforms=Jt());const{target:k}=f;if(!k){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(H0(this.prevProjectionDelta.x,this.projectionDelta.x),H0(this.prevProjectionDelta.y,this.projectionDelta.y)),ws(this.projectionDelta,this.layoutCorrected,k,this.latestValues),(this.treeScale.x!==b||this.treeScale.y!==j||!J0(this.projectionDelta.x,this.prevProjectionDelta.x)||!J0(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",k))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(f=!0){if(this.options.visualElement?.scheduleRender(),f){const m=this.getStack();m&&m.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=fi(),this.projectionDelta=fi(),this.projectionDeltaWithTransform=fi()}setAnimationOrigin(f,m=!1){const g=this.snapshot,y=g?g.latestValues:{},x={...this.latestValues},b=fi();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!m;const j=Jt(),k=g?g.source:void 0,C=this.layout?this.layout.source:void 0,B=k!==C,K=this.getStack(),G=!K||K.members.length<=1,J=!!(B&&!G&&this.options.crossfade===!0&&!this.path.some(v3));this.animationProgress=0;let Y;this.mixTargetDelta=H=>{const F=H/1e3;W0(b.x,f.x,F),W0(b.y,f.y,F),this.setTargetDelta(b),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(xr(j,this.layout.layoutBox,this.relativeParent.layout.layoutBox),y3(this.relativeTarget,this.relativeTargetOrigin,j,F),Y&&n3(this.relativeTarget,Y)&&(this.isProjectionDirty=!1),Y||(Y=Jt()),Ke(Y,this.relativeTarget)),B&&(this.animationValues=x,FS(x,y,this.latestValues,F,J,G)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=F},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(f){this.notifyListeners("animationStart"),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&(Fn(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=_t.update(()=>{fr.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=pi(0)),this.currentAnimation=KS(this.motionValue,[0,1e3],{...f,velocity:0,isSync:!0,onUpdate:m=>{this.mixTargetDelta(m),f.onUpdate&&f.onUpdate(m)},onStop:()=>{},onComplete:()=>{f.onComplete&&f.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const f=this.getStack();f&&f.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(s3),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const f=this.getLead();let{targetWithTransforms:m,target:g,layout:y,latestValues:x}=f;if(!(!m||!g||!y)){if(this!==f&&this.layout&&y&&qg(this.options.animationType,this.layout.layoutBox,y.layoutBox)){g=this.target||Jt();const b=de(this.layout.layoutBox.x);g.x.min=f.target.x.min,g.x.max=g.x.min+b;const j=de(this.layout.layoutBox.y);g.y.min=f.target.y.min,g.y.max=g.y.min+j}Ke(m,g),di(m,x),ws(this.projectionDeltaWithTransform,this.layoutCorrected,m,x)}}registerSharedNode(f,m){this.sharedNodes.has(f)||this.sharedNodes.set(f,new a3),this.sharedNodes.get(f).add(m);const y=m.options.initialPromotionConfig;m.promote({transition:y?y.transition:void 0,preserveFollowOpacity:y&&y.shouldPreserveFollowOpacity?y.shouldPreserveFollowOpacity(m):void 0})}isLead(){const f=this.getStack();return f?f.lead===this:!0}getLead(){const{layoutId:f}=this.options;return f?this.getStack()?.lead||this:this}getPrevLead(){const{layoutId:f}=this.options;return f?this.getStack()?.prevLead:void 0}getStack(){const{layoutId:f}=this.options;if(f)return this.root.sharedNodes.get(f)}promote({needsReset:f,transition:m,preserveFollowOpacity:g}={}){const y=this.getStack();y&&y.promote(this,g),f&&(this.projectionDelta=void 0,this.needsReset=!0),m&&this.setOptions({transition:m})}relegate(){const f=this.getStack();return f?f.relegate(this):!1}resetSkewAndRotation(){const{visualElement:f}=this.options;if(!f)return;let m=!1;const{latestValues:g}=f;if((g.z||g.rotate||g.rotateX||g.rotateY||g.rotateZ||g.skewX||g.skewY)&&(m=!0),!m)return;const y={};g.z&&vu("z",f,y,this.animationValues);for(let x=0;x<yu.length;x++)vu(`rotate${yu[x]}`,f,y,this.animationValues),vu(`skew${yu[x]}`,f,y,this.animationValues);f.render();for(const x in y)f.setStaticValue(x,y[x]),this.animationValues&&(this.animationValues[x]=y[x]);f.scheduleRender()}applyProjectionStyles(f,m){if(!this.instance||this.isSVG)return;if(!this.isVisible){f.visibility="hidden";return}const g=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,f.visibility="",f.opacity="",f.pointerEvents=dr(m?.pointerEvents)||"",f.transform=g?g(this.latestValues,""):"none";return}const y=this.getLead();if(!this.projectionDelta||!this.layout||!y.target){this.options.layoutId&&(f.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,f.pointerEvents=dr(m?.pointerEvents)||""),this.hasProjected&&!xa(this.latestValues)&&(f.transform=g?g({},""):"none",this.hasProjected=!1);return}f.visibility="";const x=y.animationValues||y.latestValues;this.applyTransformsToTarget();let b=i3(this.projectionDeltaWithTransform,this.treeScale,x);g&&(b=g(x,b)),f.transform=b;const{x:j,y:k}=this.projectionDelta;f.transformOrigin=`${j.origin*100}% ${k.origin*100}% 0`,y.animationValues?f.opacity=y===this?x.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:x.opacityExit:f.opacity=y===this?x.opacity!==void 0?x.opacity:"":x.opacityExit!==void 0?x.opacityExit:0;for(const C in Ru){if(x[C]===void 0)continue;const{correct:B,applyTo:K,isCSSVariable:G}=Ru[C],J=b==="none"?x[C]:B(x[C],y);if(K){const Y=K.length;for(let H=0;H<Y;H++)f[K[H]]=J}else G?this.options.visualElement.renderState.vars[C]=J:f[C]=J}this.options.layoutId&&(f.pointerEvents=y===this?dr(m?.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(f=>f.currentAnimation?.stop()),this.root.nodes.forEach($0),this.root.sharedNodes.clear()}}}function r3(a){a.updateLayout()}function o3(a){const s=a.resumeFrom?.snapshot||a.snapshot;if(a.isLead()&&a.layout&&s&&a.hasListeners("didUpdate")){const{layoutBox:l,measuredBox:o}=a.layout,{animationType:u}=a.options,h=s.source!==a.layout.source;u==="size"?Be(x=>{const b=h?s.measuredBox[x]:s.layoutBox[x],j=de(b);b.min=l[x].min,b.max=b.min+j}):qg(u,s.layoutBox,l)&&Be(x=>{const b=h?s.measuredBox[x]:s.layoutBox[x],j=de(l[x]);b.max=b.min+j,a.relativeTarget&&!a.currentAnimation&&(a.isProjectionDirty=!0,a.relativeTarget[x].max=a.relativeTarget[x].min+j)});const f=fi();ws(f,l,s.layoutBox);const m=fi();h?ws(m,a.applyTransform(o,!0),s.measuredBox):ws(m,l,s.layoutBox);const g=!Ug(f);let y=!1;if(!a.resumeFrom){const x=a.getClosestProjectingParent();if(x&&!x.resumeFrom){const{snapshot:b,layout:j}=x;if(b&&j){const k=Jt();xr(k,s.layoutBox,b.layoutBox);const C=Jt();xr(C,l,j.layoutBox),Lg(k,C)||(y=!0),x.options.layoutRoot&&(a.relativeTarget=C,a.relativeTargetOrigin=k,a.relativeParent=x)}}}a.notifyListeners("didUpdate",{layout:l,snapshot:s,delta:m,layoutDelta:f,hasLayoutChanged:g,hasRelativeLayoutChanged:y})}else if(a.isLead()){const{onExitComplete:l}=a.options;l&&l()}a.options.transition=void 0}function c3(a){a.parent&&(a.isProjecting()||(a.isProjectionDirty=a.parent.isProjectionDirty),a.isSharedProjectionDirty||(a.isSharedProjectionDirty=!!(a.isProjectionDirty||a.parent.isProjectionDirty||a.parent.isSharedProjectionDirty)),a.isTransformDirty||(a.isTransformDirty=a.parent.isTransformDirty))}function u3(a){a.isProjectionDirty=a.isSharedProjectionDirty=a.isTransformDirty=!1}function d3(a){a.clearSnapshot()}function $0(a){a.clearMeasurements()}function F0(a){a.isLayoutDirty=!1}function f3(a){const{visualElement:s}=a.options;s&&s.getProps().onBeforeLayoutMeasure&&s.notify("BeforeLayoutMeasure"),a.resetTransform()}function P0(a){a.finishAnimation(),a.targetDelta=a.relativeTarget=a.target=void 0,a.isProjectionDirty=!0}function h3(a){a.resolveTargetDelta()}function p3(a){a.calcProjection()}function m3(a){a.resetSkewAndRotation()}function g3(a){a.removeLeadSnapshot()}function W0(a,s,l){a.translate=Ot(s.translate,0,l),a.scale=Ot(s.scale,1,l),a.origin=s.origin,a.originPoint=s.originPoint}function I0(a,s,l,o){a.min=Ot(s.min,l.min,o),a.max=Ot(s.max,l.max,o)}function y3(a,s,l,o){I0(a.x,s.x,l.x,o),I0(a.y,s.y,l.y,o)}function v3(a){return a.animationValues&&a.animationValues.opacityExit!==void 0}const x3={duration:.45,ease:[.4,0,.1,1]},t1=a=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(a),e1=t1("applewebkit/")&&!t1("chrome/")?Math.round:qe;function n1(a){a.min=e1(a.min),a.max=e1(a.max)}function b3(a){n1(a.x),n1(a.y)}function qg(a,s,l){return a==="position"||a==="preserve-aspect"&&!kS(Z0(s),Z0(l),.2)}function S3(a){return a!==a.root&&a.scroll?.wasRoot}const j3=Hg({attachResizeListener:(a,s)=>Es(a,"resize",s),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),xu={current:void 0},Yg=Hg({measureScroll:a=>({x:a.scrollLeft,y:a.scrollTop}),defaultParent:()=>{if(!xu.current){const a=new j3({});a.mount(window),a.setOptions({layoutScroll:!0}),xu.current=a}return xu.current},resetTransform:(a,s)=>{a.style.transform=s!==void 0?s:"none"},checkIsScrollRoot:a=>window.getComputedStyle(a).position==="fixed"}),T3={pan:{Feature:GS},drag:{Feature:YS,ProjectionNode:Yg,MeasureLayout:Rg}};function a1(a,s,l){const{props:o}=a;a.animationState&&o.whileHover&&a.animationState.setActive("whileHover",l==="Start");const u="onHover"+l,h=o[u];h&&_t.postRender(()=>h(s,Os(s)))}class w3 extends Wn{mount(){const{current:s}=this.node;s&&(this.unmount=Zb(s,(l,o)=>(a1(this.node,o,"Start"),u=>a1(this.node,u,"End"))))}unmount(){}}class M3 extends Wn{constructor(){super(...arguments),this.isActive=!1}onFocus(){let s=!1;try{s=this.node.current.matches(":focus-visible")}catch{s=!0}!s||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Ds(Es(this.node.current,"focus",()=>this.onFocus()),Es(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function i1(a,s,l){const{props:o}=a;if(a.current instanceof HTMLButtonElement&&a.current.disabled)return;a.animationState&&o.whileTap&&a.animationState.setActive("whileTap",l==="Start");const u="onTap"+(l==="End"?"":l),h=o[u];h&&_t.postRender(()=>h(s,Os(s)))}class N3 extends Wn{mount(){const{current:s}=this.node;s&&(this.unmount=Fb(s,(l,o)=>(i1(this.node,o,"Start"),(u,{success:h})=>i1(this.node,u,h?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const Yu=new WeakMap,bu=new WeakMap,A3=a=>{const s=Yu.get(a.target);s&&s(a)},k3=a=>{a.forEach(A3)};function z3({root:a,...s}){const l=a||document;bu.has(l)||bu.set(l,{});const o=bu.get(l),u=JSON.stringify(s);return o[u]||(o[u]=new IntersectionObserver(k3,{root:a,...s})),o[u]}function E3(a,s,l){const o=z3(s);return Yu.set(a,l),o.observe(a),()=>{Yu.delete(a),o.unobserve(a)}}const C3={some:0,all:1};class D3 extends Wn{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:s={}}=this.node.getProps(),{root:l,margin:o,amount:u="some",once:h}=s,f={root:l?l.current:void 0,rootMargin:o,threshold:typeof u=="number"?u:C3[u]},m=g=>{const{isIntersecting:y}=g;if(this.isInView===y||(this.isInView=y,h&&!y&&this.hasEnteredView))return;y&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",y);const{onViewportEnter:x,onViewportLeave:b}=this.node.getProps(),j=y?x:b;j&&j(g)};return E3(this.node.current,f,m)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:s,prevProps:l}=this.node;["amount","margin","root"].some(_3(s,l))&&this.startObserver()}unmount(){}}function _3({viewport:a={}},{viewport:s={}}={}){return l=>a[l]!==s[l]}const R3={inView:{Feature:D3},tap:{Feature:N3},focus:{Feature:M3},hover:{Feature:w3}},O3={layout:{ProjectionNode:Yg,MeasureLayout:Rg}},V3={...jS,...R3,...T3,...O3},Q=L5(V3,P5),Gg=U.createContext(),U3=({children:a})=>{const[s,l]=U.useState(()=>{const u=localStorage.getItem("portfolio-theme");return u||"dark"});U.useEffect(()=>{document.documentElement.setAttribute("data-theme",s),localStorage.setItem("portfolio-theme",s)},[s]);const o=()=>{l(u=>u==="light"?"dark":"light")};return d.jsx(Gg.Provider,{value:{theme:s,toggleTheme:o},children:a})},L3=()=>{const a=U.useContext(Gg);if(!a)throw new Error("useTheme must be used within a ThemeProvider");return a};const B3=a=>a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),H3=a=>a.replace(/^([A-Z])|[\s-_]+(\w)/g,(s,l,o)=>o?o.toUpperCase():l.toLowerCase()),s1=a=>{const s=H3(a);return s.charAt(0).toUpperCase()+s.slice(1)},Xg=(...a)=>a.filter((s,l,o)=>!!s&&s.trim()!==""&&o.indexOf(s)===l).join(" ").trim(),q3=a=>{for(const s in a)if(s.startsWith("aria-")||s==="role"||s==="title")return!0};var Y3={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const G3=U.forwardRef(({color:a="currentColor",size:s=24,strokeWidth:l=2,absoluteStrokeWidth:o,className:u="",children:h,iconNode:f,...m},g)=>U.createElement("svg",{ref:g,...Y3,width:s,height:s,stroke:a,strokeWidth:o?Number(l)*24/Number(s):l,className:Xg("lucide",u),...!h&&!q3(m)&&{"aria-hidden":"true"},...m},[...f.map(([y,x])=>U.createElement(y,x)),...Array.isArray(h)?h:[h]]));const L=(a,s)=>{const l=U.forwardRef(({className:o,...u},h)=>U.createElement(G3,{ref:h,iconNode:s,className:Xg(`lucide-${B3(s1(a))}`,`lucide-${a}`,o),...u}));return l.displayName=s1(a),l};const X3=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],br=L("activity",X3);const K3=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],Ar=L("award",K3);const Q3=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]],Kg=L("bell",Q3);const Z3=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],hr=L("book-open",Z3);const J3=[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"}]],Qg=L("bookmark",J3);const $3=[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]],Zg=L("box",$3);const F3=[["path",{d:"M12 18V5",key:"adv99a"}],["path",{d:"M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4",key:"1e3is1"}],["path",{d:"M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5",key:"1gqd8o"}],["path",{d:"M17.997 5.125a4 4 0 0 1 2.526 5.77",key:"iwvgf7"}],["path",{d:"M18 18a4 4 0 0 0 2-7.464",key:"efp6ie"}],["path",{d:"M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517",key:"1gq6am"}],["path",{d:"M6 18a4 4 0 0 1-2-7.464",key:"k1g0md"}],["path",{d:"M6.003 5.125a4 4 0 0 0-2.526 5.77",key:"q97ue3"}]],Td=L("brain",F3);const P3=[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]],kr=L("briefcase",P3);const W3=[["path",{d:"M10 12h4",key:"a56b0p"}],["path",{d:"M10 8h4",key:"1sr2af"}],["path",{d:"M14 21v-3a2 2 0 0 0-4 0v3",key:"1rgiei"}],["path",{d:"M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2",key:"secmi2"}],["path",{d:"M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16",key:"16ra0t"}]],I3=L("building-2",W3);const t4=[["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M12 6h.01",key:"1vi96p"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M16 6h.01",key:"1x0f13"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M8 6h.01",key:"1dz90k"}],["path",{d:"M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3",key:"cabbwy"}],["rect",{x:"4",y:"2",width:"16",height:"20",rx:"2",key:"1uxh74"}]],Jg=L("building",t4);const e4=[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]],n4=L("calculator",e4);const a4=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],jn=L("calendar",a4);const i4=[["path",{d:"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",key:"18u6gg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]],s4=L("camera",i4);const l4=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],gi=L("chart-column",l4);const r4=[["path",{d:"M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z",key:"pzmjnu"}],["path",{d:"M21.21 15.89A10 10 0 1 1 8 2.83",key:"k2fpak"}]],wd=L("chart-pie",r4);const o4=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],$g=L("check",o4);const c4=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],zr=L("chevron-down",c4);const u4=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Fg=L("chevron-right",u4);const d4=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],f4=L("circle-alert",d4);const h4=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],p4=L("circle-question-mark",h4);const m4=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}]],Pg=L("clipboard",m4);const g4=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Wg=L("clock",g4);const y4=[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]],Ig=L("cloud",y4);const v4=[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],Vs=L("code-xml",v4);const x4=[["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M14 2v2",key:"6buw04"}],["path",{d:"M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1",key:"pwadti"}],["path",{d:"M6 2v2",key:"colzsn"}]],b4=L("coffee",x4);const S4=[["path",{d:"M11 10.27 7 3.34",key:"16pf9h"}],["path",{d:"m11 13.73-4 6.93",key:"794ttg"}],["path",{d:"M12 22v-2",key:"1osdcq"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M14 12h8",key:"4f43i9"}],["path",{d:"m17 20.66-1-1.73",key:"eq3orb"}],["path",{d:"m17 3.34-1 1.73",key:"2wel8s"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"m20.66 17-1.73-1",key:"sg0v6f"}],["path",{d:"m20.66 7-1.73 1",key:"1ow05n"}],["path",{d:"m3.34 17 1.73-1",key:"nuk764"}],["path",{d:"m3.34 7 1.73 1",key:"1ulond"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["circle",{cx:"12",cy:"12",r:"8",key:"46899m"}]],j4=L("cog",S4);const T4=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],ty=L("copy",T4);const w4=[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]],ey=L("cpu",w4);const M4=[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]],ny=L("credit-card",M4);const N4=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],Md=L("database",N4);const A4=[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]],ay=L("dollar-sign",A4);const k4=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],iy=L("download",k4);const z4=[["path",{d:"M21.54 15H17a2 2 0 0 0-2 2v4.54",key:"1djwo0"}],["path",{d:"M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17",key:"1tzkfa"}],["path",{d:"M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05",key:"14pb5j"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],E4=L("earth",z4);const C4=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],Cs=L("external-link",C4);const D4=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],sy=L("eye-off",D4);const _4=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],ly=L("eye",_4);const R4=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],Er=L("file-text",R4);const O4=[["path",{d:"M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4",key:"1slcih"}]],V4=L("flame",O4);const U4=[["path",{d:"M18 19a5 5 0 0 1-5-5v8",key:"sz5oeg"}],["path",{d:"M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5",key:"1w6njk"}],["circle",{cx:"13",cy:"12",r:"2",key:"1j92g6"}],["circle",{cx:"20",cy:"19",r:"2",key:"1obnsp"}]],L4=L("folder-git-2",U4);const B4=[["path",{d:"M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z",key:"1fr9dc"}],["path",{d:"M8 10v4",key:"tgpxqk"}],["path",{d:"M12 10v2",key:"hh53o1"}],["path",{d:"M16 10v6",key:"1d6xys"}]],H4=L("folder-kanban",B4);const q4=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]],Y4=L("folder-open",q4);const G4=[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]],X4=L("folder",G4);const K4=[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]],Q4=L("gamepad-2",K4);const Z4=[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1",key:"bkv52"}],["path",{d:"M12 8v13",key:"1c76mn"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",key:"6wjy6b"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",key:"1ihvrl"}]],J4=L("gift",Z4);const $4=[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]],F4=L("git-branch",$4);const P4=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],W4=L("github",P4);const I4=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],Si=L("globe",I4);const t6=[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]],Sr=L("graduation-cap",t6);const e6=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]],n6=L("grid-3x3",e6);const a6=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],i6=L("heart",a6);const s6=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],l6=L("house",s6);const r6=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],ry=L("image",r6);const o6=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],c6=L("info",o6);const u6=[["path",{d:"m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4",key:"g0fldk"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}]],d6=L("key",u6);const f6=[["path",{d:"M18 5a2 2 0 0 1 2 2v8.526a2 2 0 0 0 .212.897l1.068 2.127a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45l1.068-2.127A2 2 0 0 0 4 15.526V7a2 2 0 0 1 2-2z",key:"1pdavp"}],["path",{d:"M20.054 15.987H3.946",key:"14rxg9"}]],l1=L("laptop",f6);const h6=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],oy=L("layers",h6);const p6=[["path",{d:"m16 6 4 14",key:"ji33uf"}],["path",{d:"M12 6v14",key:"1n7gus"}],["path",{d:"M8 8v12",key:"1gg7y9"}],["path",{d:"M4 4v16",key:"6qkkli"}]],m6=L("library",p6);const g6=[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],cy=L("lightbulb",g6);const y6=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]],uy=L("link",y6);const v6=[["path",{d:"M3 5h.01",key:"18ugdj"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 19h.01",key:"noohij"}],["path",{d:"M8 5h13",key:"1pao27"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 19h13",key:"m83p4d"}]],x6=L("list",v6);const b6=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],dy=L("loader-circle",b6);const S6=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],ja=L("lock",S6);const j6=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],Nd=L("mail",j6);const T6=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],Cr=L("map-pin",T6);const w6=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],M6=L("menu",w6);const N6=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]],A6=L("message-square",N6);const k6=[["path",{d:"M12 19v3",key:"npa21l"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["rect",{x:"9",y:"2",width:"6",height:"13",rx:"3",key:"s6n7sd"}]],z6=L("mic",k6);const E6=[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]],Ad=L("monitor",E6);const C6=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],D6=L("moon",C6);const _6=[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]],R6=L("music",_6);const O6=[["polygon",{points:"3 11 22 2 13 21 11 13 3 11",key:"1ltx0t"}]],V6=L("navigation",O6);const U6=[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1",key:"4q2zg0"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1",key:"8cvhb9"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1",key:"1egb70"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",key:"1jsf9p"}],["path",{d:"M12 12V8",key:"2874zd"}]],L6=L("network",U6);const B6=[["path",{d:"M15 18h-5",key:"95g1m2"}],["path",{d:"M18 14h-8",key:"sponae"}],["path",{d:"M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9a2 2 0 0 1 2-2h2",key:"39pd36"}],["rect",{width:"8",height:"4",x:"10",y:"6",rx:"1",key:"aywv1n"}]],H6=L("newspaper",B6);const q6=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]],fy=L("package",q6);const Y6=[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]],G6=L("palette",Y6);const X6=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M9 21V9",key:"1oto5p"}]],K6=L("panels-top-left",X6);const Q6=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],Z6=L("play",Q6);const J6=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],$6=L("plus",J6);const F6=[["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6",key:"1itne7"}],["rect",{x:"6",y:"14",width:"12",height:"8",rx:"1",key:"1ue0tg"}]],hy=L("printer",F6);const P6=[["rect",{width:"5",height:"5",x:"3",y:"3",rx:"1",key:"1tu5fj"}],["rect",{width:"5",height:"5",x:"16",y:"3",rx:"1",key:"1v8r4q"}],["rect",{width:"5",height:"5",x:"3",y:"16",rx:"1",key:"1x03jg"}],["path",{d:"M21 16h-3a2 2 0 0 0-2 2v3",key:"177gqh"}],["path",{d:"M21 21v.01",key:"ents32"}],["path",{d:"M12 7v3a2 2 0 0 1-2 2H7",key:"8crl2c"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M12 3h.01",key:"n36tog"}],["path",{d:"M12 16v.01",key:"133mhm"}],["path",{d:"M16 12h1",key:"1slzba"}],["path",{d:"M21 12v.01",key:"1lwtk9"}],["path",{d:"M12 21v-1",key:"1880an"}]],py=L("qr-code",P6);const W6=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],Ms=L("refresh-cw",W6);const I6=[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]],kd=L("rocket",I6);const t8=[["path",{d:"M14 21v-3a2 2 0 0 0-4 0v3",key:"1rgiei"}],["path",{d:"M18 5v16",key:"1ethyx"}],["path",{d:"m4 6 7.106-3.79a2 2 0 0 1 1.788 0L20 6",key:"zywc2d"}],["path",{d:"m6 11-3.52 2.147a1 1 0 0 0-.48.854V19a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a1 1 0 0 0-.48-.853L18 11",key:"1d4ql0"}],["path",{d:"M6 5v16",key:"1sn0nx"}],["circle",{cx:"12",cy:"9",r:"2",key:"1092wv"}]],e8=L("school",t8);const n8=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],Dr=L("search",n8);const a8=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],my=L("send",a8);const i8=[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]],zd=L("server",i8);const s8=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Ed=L("settings",s8);const l8=[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]],r8=L("share-2",l8);const o8=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],c8=L("shield",o8);const u8=[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]],gy=L("shopping-cart",u8);const d8=[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]],Cd=L("smartphone",d8);const f8=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],jr=L("sparkles",f8);const h8=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",key:"ohrbg2"}]],p8=L("square-pen",h8);const m8=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],g8=L("star",m8);const y8=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],v8=L("sun",y8);const x8=[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]],yy=L("tag",x8);const b8=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],Dd=L("target",b8);const S8=[["path",{d:"M12 19h8",key:"baeox8"}],["path",{d:"m4 17 6-6-6-6",key:"1yngyt"}]],vy=L("terminal",S8);const j8=[["path",{d:"M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z",key:"emmmcr"}],["path",{d:"M7 10v12",key:"1qc93n"}]],T8=L("thumbs-up",j8);const w8=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],M8=L("trash-2",w8);const N8=[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]],ji=L("trending-up",N8);const A8=[["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",key:"wrbu53"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",key:"lysw3i"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]],xy=L("truck",A8);const k8=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],by=L("upload",k8);const z8=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],Sy=L("user",z8);const E8=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],Us=L("users",E8);const C8=[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]],D8=L("video",C8);const _8=[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]],R8=L("wifi",_8);const O8=[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",key:"1ngwbx"}]],yi=L("wrench",O8);const V8=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Ls=L("x",V8);const U8=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],jy=L("zap",U8),Ty=(a,s="image")=>a?s==="video"?`https://drive.google.com/file/d/${a}/preview`:`https://drive.google.com/uc?export=view&id=${a}`:"",L8=a=>a>=90?"var(--accent-green)":a>=75?"var(--accent-blue)":a>=60?"var(--accent-purple)":a>=40?"var(--accent-orange)":"var(--accent-yellow)",B8=[{id:"about",label:"About",icon:Sy},{id:"techStack",label:"Tech Stack",icon:Vs},{id:"experience",label:"Experience",icon:kr},{id:"projects",label:"Projects",icon:L4},{id:"education",label:"Education",icon:Sr},{id:"certifications",label:"Certifications",icon:Ar},{id:"resources",label:"Resources",icon:m6},{id:"webApps",label:"Live Demo",icon:kd},{id:"bookmarks",label:"Bookmarks",icon:Qg},{id:"analytics",label:"Analytics",icon:gi}],H8=({profile:a,activeSection:s,onSectionChange:l})=>{const{theme:o,toggleTheme:u}=L3(),[h,f]=U.useState(!1),m=a.profileImage||(a.drivePhotoId?Ty(a.drivePhotoId,"image"):""),g=()=>d.jsxs(d.Fragment,{children:[d.jsxs("div",{className:"sidebar-profile",children:[d.jsx("div",{className:"profile-image-wrapper",children:d.jsx("img",{src:m,alt:a.name,className:"profile-image"})}),d.jsxs("div",{className:"profile-name-row",children:[d.jsx("h1",{className:"profile-name",children:a.name}),a.email&&d.jsx("a",{href:`mailto:${a.email}`,className:"email-icon-link","aria-label":"Send Email",title:a.email,children:d.jsx(Nd,{size:18})})]}),d.jsx("p",{className:"profile-role",children:a.role}),d.jsx("p",{className:"profile-location",children:a.location})]}),d.jsx("nav",{className:"sidebar-nav",children:B8.map(y=>{const x=y.icon,b=s===y.id;return d.jsxs("button",{onClick:()=>{l(y.id),f(!1)},className:`nav-item ${b?"active":""}`,children:[d.jsx(x,{size:18}),d.jsx("span",{children:y.label}),b&&d.jsx(Q.div,{layoutId:"activeIndicator",className:"active-indicator"})]},y.id)})}),d.jsxs("div",{className:"sidebar-footer",children:[d.jsxs("button",{onClick:u,className:"theme-toggle","aria-label":"Toggle theme",children:[o==="light"?d.jsx(D6,{size:18}):d.jsx(v8,{size:18}),d.jsx("span",{children:o==="light"?"Dark Mode":"Light Mode"})]}),d.jsxs("a",{href:"https://antigravity.google/",target:"_blank",rel:"noopener noreferrer",className:"made-with",children:[d.jsx("span",{className:"made-with-text",children:"Built with"}),d.jsx("span",{className:"antigravity-icon",children:"🚀"}),d.jsx("span",{className:"antigravity-name",children:"Antigravity"})]})]})]});return d.jsxs(d.Fragment,{children:[d.jsx("button",{className:"mobile-menu-btn",onClick:()=>f(!h),"aria-label":"Toggle menu",children:h?d.jsx(Ls,{size:24}):d.jsx(M6,{size:24})}),d.jsx("aside",{className:"sidebar desktop-sidebar",children:d.jsx(g,{})}),d.jsx(wa,{children:h&&d.jsxs(d.Fragment,{children:[d.jsx(Q.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"mobile-overlay",onClick:()=>f(!1)}),d.jsx(Q.aside,{initial:{x:"-100%"},animate:{x:0},exit:{x:"-100%"},transition:{type:"spring",damping:25,stiffness:300},className:"sidebar mobile-sidebar",children:d.jsx(g,{})})]})}),d.jsx("style",{children:`
        .mobile-menu-btn {
          display: none;
          position: fixed;
          top: 16px;
          left: 16px;
          z-index: 60;
          padding: 8px;
          background: var(--bg-primary);
          border: 1px solid var(--border-color);
          border-radius: 8px;
          cursor: pointer;
          color: var(--text-primary);
          box-shadow: var(--shadow-md);
        }

        .sidebar {
          width: 260px;
          height: 100vh;
          background: var(--bg-sidebar);
          border-right: 1px solid var(--border-color);
          display: flex;
          flex-direction: column;
          padding: 24px 16px;
          position: fixed;
          top: 0;
          left: 0;
          overflow-y: auto;
          z-index: 50;
        }

        .mobile-sidebar {
          display: none;
        }

        .mobile-overlay {
          display: none;
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.5);
          z-index: 40;
        }

        .sidebar-profile {
          text-align: center;
          padding-bottom: 20px;
          border-bottom: 1px solid var(--border-light);
          margin-bottom: 20px;
        }

        .profile-image-wrapper {
          width: 100px;
          height: 100px;
          margin: 0 auto 16px;
          border-radius: 50%;
          overflow: hidden;
          border: 3px solid var(--border-color);
          box-shadow: var(--shadow-md);
        }

        .profile-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .profile-name-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin-bottom: 4px;
        }

        .profile-name {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text-primary);
          margin: 0;
        }

        .email-icon-link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-blue);
          transition: all 0.2s ease;
          margin-left: 4px;
        }

        .email-icon-link:hover {
          color: var(--text-primary);
          transform: scale(1.1);
        }

        .profile-role {
          font-size: 0.875rem;
          color: var(--accent-blue);
          font-weight: 500;
          margin-bottom: 4px;
        }

        .profile-location {
          font-size: 0.75rem;
          color: var(--text-secondary);
        }

        .sidebar-nav {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .nav-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 12px;
          border-radius: 6px;
          border: none;
          background: transparent;
          color: var(--text-secondary);
          font-size: 0.9rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.15s ease;
          position: relative;
          text-align: left;
          width: 100%;
        }

        .nav-item:hover {
          background: var(--bg-hover);
          color: var(--text-primary);
        }

        .nav-item.active {
          background: var(--bg-tertiary);
          color: var(--text-primary);
        }

        .active-indicator {
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 3px;
          height: 20px;
          background: var(--accent-blue);
          border-radius: 0 3px 3px 0;
        }

        .sidebar-footer {
          padding-top: 16px;
          border-top: 1px solid var(--border-light);
          margin-top: auto;
        }

        .theme-toggle {
          display: flex;
          align-items: center;
          gap: 12px;
          width: 100%;
          padding: 10px 12px;
          border-radius: 6px;
          border: none;
          background: var(--bg-tertiary);
          color: var(--text-secondary);
          font-size: 0.875rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.15s ease;
        }

        .theme-toggle:hover {
          background: var(--bg-hover);
          color: var(--text-primary);
        }

        .made-with {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 4px;
          padding-top: 10px;
          margin-top: 10px;
          border-top: 1px solid var(--border-light);
          text-decoration: none;
          transition: opacity 0.2s ease;
        }

        .made-with:hover {
          opacity: 0.8;
        }

        .made-with-text {
          font-size: 0.65rem;
          color: var(--text-tertiary);
        }

        .antigravity-icon {
          font-size: 0.7rem;
        }

        .antigravity-name {
          font-size: 0.7rem;
          background: linear-gradient(135deg, #8b5cf6, #3b82f6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-weight: 600;
        }

        @media (max-width: 768px) {
          .mobile-menu-btn {
            display: flex;
          }

          .desktop-sidebar {
            display: none;
          }

          .mobile-sidebar {
            display: flex;
          }

          .mobile-overlay {
            display: block;
          }
        }
      `})]})},q8=({isOpen:a,onClose:s,content:l})=>(U.useEffect(()=>{const o=u=>{u.key==="Escape"&&s()};return a&&(document.addEventListener("keydown",o),document.body.style.overflow="hidden"),()=>{document.removeEventListener("keydown",o),document.body.style.overflow="unset"}},[a,s]),l?d.jsx(wa,{children:a&&d.jsxs(d.Fragment,{children:[d.jsx(Q.div,{className:"modal-backdrop",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:s}),d.jsxs(Q.div,{className:"modal-container",initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.9},transition:{type:"spring",damping:25,stiffness:300},children:[d.jsx("button",{className:"modal-close-btn",onClick:s,"aria-label":"Close modal",children:d.jsx(Ls,{size:24})}),d.jsxs("div",{className:"modal-content",children:[l.type==="image"?d.jsx("img",{src:l.src,alt:l.caption||"Expanded image",className:"modal-image"}):d.jsx("div",{className:"modal-video-wrapper",children:d.jsx("iframe",{src:l.src,title:l.caption||"Video",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,className:"modal-video"})}),l.caption&&d.jsx("p",{className:"modal-caption",children:l.caption})]})]}),d.jsx("style",{children:`
            .modal-backdrop {
              position: fixed;
              inset: 0;
              background: rgba(0, 0, 0, 0.85);
              z-index: 100;
              backdrop-filter: blur(4px);
            }

            .modal-container {
              position: fixed;
              inset: 0;
              z-index: 101;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              padding: 40px;
              pointer-events: none;
            }

            .modal-close-btn {
              position: fixed;
              top: 20px;
              right: 20px;
              background: rgba(255, 255, 255, 0.15);
              border: none;
              color: white;
              padding: 12px;
              border-radius: 50%;
              cursor: pointer;
              transition: all 0.2s ease;
              z-index: 102;
              pointer-events: auto;
            }

            .modal-close-btn:hover {
              background: rgba(255, 255, 255, 0.3);
              transform: scale(1.1);
            }

            .modal-content {
              display: flex;
              flex-direction: column;
              align-items: center;
              gap: 16px;
              pointer-events: auto;
            }

            .modal-image {
              max-width: 85vw;
              max-height: 80vh;
              object-fit: contain;
              border-radius: 8px;
              box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
            }

            .modal-video-wrapper {
              width: 80vw;
              max-width: 1000px;
              aspect-ratio: 16 / 9;
              border-radius: 8px;
              overflow: hidden;
              box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
            }

            .modal-video {
              width: 100%;
              height: 100%;
            }

            .modal-caption {
              color: rgba(255, 255, 255, 0.85);
              font-size: 0.95rem;
              text-align: center;
              max-width: 600px;
              margin-top: 8px;
            }

            @media (max-width: 768px) {
              .modal-container {
                padding: 20px;
              }

              .modal-video-wrapper {
                width: 95vw;
              }

              .modal-close-btn {
                top: 15px;
                right: 15px;
                padding: 10px;
              }
            }
          `})]})}):null),r1=({data:a})=>{const s={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.15}}},l={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.5}}},o=[{icon:jr,color:"#8b5cf6"},{icon:Vs,color:"#3b82f6"},{icon:ji,color:"#10b981"},{icon:kr,color:"#f59e0b"}],u=[];let h=null;return a.blocks?.forEach(f=>{f.type==="heading"?(h&&u.push(h),h={title:f.value,texts:[],items:[]}):f.type==="text"&&h?h.texts.push(f.value):f.type==="list"&&h&&(h.items=f.items||[])}),h&&u.push(h),d.jsxs(Q.section,{className:"section about-section",variants:s,initial:"hidden",animate:"visible",children:[d.jsxs(Q.h2,{className:"section-title",variants:l,children:[d.jsx("span",{className:"title-icon",children:"👋"}),a.title]}),u.map((f,m)=>f.items.length>0?d.jsxs(Q.div,{className:"competency-section",variants:l,children:[d.jsxs("div",{className:"competency-header",children:[d.jsx(Dd,{size:22}),d.jsx("h3",{className:"competency-title",children:f.title})]}),d.jsx("div",{className:"competency-grid",children:f.items.map((y,x)=>{const b=o[x%o.length].icon,j=o[x%o.length].color;return d.jsxs(Q.div,{className:"competency-card",whileHover:{scale:1.02,y:-4},transition:{duration:.2},children:[d.jsx("div",{className:"competency-icon",style:{background:`${j}15`,color:j},children:d.jsx(b,{size:20})}),d.jsx("span",{className:"competency-text",children:y})]},x)})})]},m):d.jsxs(Q.div,{className:"intro-card",variants:l,children:[d.jsxs("div",{className:"intro-header",children:[d.jsx("div",{className:"intro-icon-wrapper",children:d.jsx(jr,{size:24})}),d.jsx("h3",{className:"intro-title",children:f.title})]}),d.jsx("div",{className:"intro-content",children:f.texts.map((y,x)=>d.jsx("p",{className:"intro-text",children:y},x))})]},m)),d.jsx("style",{children:`
        .about-section {
          max-width: 900px;
        }

        .section-title {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 1.75rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 28px;
          padding-bottom: 12px;
          border-bottom: 1px solid var(--border-light);
        }

        .title-icon {
          font-size: 1.5rem;
        }

        /* 간략 소개 카드 */
        .intro-card {
          background: linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-tertiary) 100%);
          border: 1px solid var(--border-light);
          border-radius: 16px;
          padding: 28px;
          margin-bottom: 24px;
          position: relative;
          overflow: hidden;
        }

        .intro-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #8b5cf6, #3b82f6, #10b981);
        }

        .intro-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
        }

        .intro-icon-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          background: linear-gradient(135deg, #8b5cf6, #6366f1);
          border-radius: 12px;
          color: white;
        }

        .intro-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--text-primary);
          margin: 0;
        }

        .intro-content {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .intro-text {
          font-size: 1rem;
          line-height: 1.8;
          color: var(--text-secondary);
          margin: 0;
          padding-left: 16px;
          border-left: 3px solid var(--accent-blue);
          white-space: pre-line;
        }

        .intro-text:first-child {
          font-size: 1.1rem;
          color: var(--text-primary);
          font-weight: 500;
          border-left-color: #8b5cf6;
        }

        /* 핵심 역량 섹션 */
        .competency-section {
          background: var(--bg-secondary);
          border: 1px solid var(--border-light);
          border-radius: 16px;
          padding: 28px;
          margin-bottom: 24px;
        }

        .competency-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 20px;
          color: var(--text-primary);
        }

        .competency-title {
          font-size: 1.25rem;
          font-weight: 600;
          margin: 0;
        }

        .competency-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 16px;
        }

        .competency-card {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 18px 20px;
          background: var(--bg-primary);
          border: 1px solid var(--border-light);
          border-radius: 12px;
          cursor: default;
          transition: all 0.2s ease;
        }

        .competency-card:hover {
          border-color: var(--accent-blue);
          box-shadow: 0 4px 20px rgba(59, 130, 246, 0.15);
        }

        .competency-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 10px;
          flex-shrink: 0;
        }

        .competency-text {
          font-size: 0.95rem;
          font-weight: 500;
          color: var(--text-primary);
          line-height: 1.4;
        }

        @media (max-width: 768px) {
          .intro-card, .competency-section {
            padding: 20px;
          }

          .competency-grid {
            grid-template-columns: 1fr;
          }

          .intro-text {
            padding-left: 12px;
          }
        }
      `})]})},Y8={Code2:Vs,Layout:K6,Server:zd,Database:Md,Cloud:Ig,Wrench:yi,Brain:Td,Cog:j4,Terminal:vy,Globe:Si,Smartphone:Cd,Cpu:ey,Monitor:Ad,Layers:oy,Box:Zg,Settings:Ed,BarChart3:gi,TrendingUp:ji,Briefcase:kr,Users:Us,FileText:Er,Target:Dd,Lightbulb:cy,Rocket:kd,GitBranch:F4},G8=({data:a})=>{const s={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1}}},l={hidden:{opacity:0,y:20},visible:{opacity:1,y:0}};return d.jsxs(Q.section,{className:"section tech-section",variants:s,initial:"hidden",animate:"visible",children:[d.jsxs(Q.h2,{className:"section-title",variants:l,children:[d.jsx("span",{className:"title-icon",children:"⚡"}),a.title]}),d.jsx(Q.div,{className:"tech-grid",variants:s,children:a.categories?.map((o,u)=>{const h=Y8[o.icon]||Vs;return d.jsxs(Q.div,{className:"tech-card",variants:l,whileHover:{y:-4,boxShadow:"var(--shadow-md)"},children:[d.jsxs("div",{className:"tech-card-header",children:[d.jsx(h,{size:20,className:"category-icon"}),d.jsx("h3",{className:"category-name",children:o.name})]}),d.jsx("div",{className:"skills-list",children:o.items?.map((f,m)=>d.jsxs("div",{className:"skill-item",children:[d.jsxs("div",{className:"skill-info",children:[d.jsx("span",{className:"skill-name",children:f.name}),d.jsxs("span",{className:"skill-level",children:[f.level,"%"]})]}),d.jsx("div",{className:"skill-bar-bg",children:d.jsx(Q.div,{className:"skill-bar-fill",initial:{width:0},animate:{width:`${f.level}%`},transition:{duration:.8,delay:m*.1},style:{backgroundColor:L8(f.level)}})})]},m))})]},u)})}),d.jsx("style",{children:`
        .tech-section {
          max-width: 1200px;
        }

        .section-title {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 1.75rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 24px;
          padding-bottom: 12px;
          border-bottom: 1px solid var(--border-light);
        }

        .title-icon {
          font-size: 1.5rem;
        }

        .tech-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 20px;
        }

        .tech-card {
          background: var(--bg-secondary);
          border-radius: 10px;
          padding: 20px;
          border: 1px solid var(--border-light);
          transition: all 0.2s ease;
        }

        .tech-card-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 16px;
          padding-bottom: 12px;
          border-bottom: 1px solid var(--border-light);
        }

        .category-icon {
          color: var(--accent-blue);
        }

        .category-name {
          font-size: 1rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .skills-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .skill-item {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .skill-info {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .skill-name {
          font-size: 0.9rem;
          color: var(--text-primary);
          font-weight: 500;
        }

        .skill-level {
          font-size: 0.75rem;
          color: var(--text-secondary);
        }

        .skill-bar-bg {
          height: 6px;
          background: var(--bg-tertiary);
          border-radius: 3px;
          overflow: hidden;
        }

        .skill-bar-fill {
          height: 100%;
          border-radius: 3px;
          transition: width 0.3s ease;
        }

        @media (max-width: 768px) {
          .tech-grid {
            grid-template-columns: 1fr;
          }
        }
      `})]})},X8=({data:a})=>{const[s,l]=U.useState(0),o={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1}}},u={hidden:{opacity:0,x:-20},visible:{opacity:1,x:0}},h=f=>{l(s===f?-1:f)};return d.jsxs(Q.section,{className:"section experience-section",variants:o,initial:"hidden",animate:"visible",children:[d.jsxs(Q.h2,{className:"section-title",variants:u,children:[d.jsx("span",{className:"title-icon",children:"💼"}),a.title]}),d.jsx("div",{className:"timeline",children:a.items?.map((f,m)=>d.jsxs(Q.div,{className:`timeline-item ${s===m?"expanded":""}`,variants:u,children:[d.jsxs("div",{className:"timeline-marker",children:[d.jsx("div",{className:"marker-dot"}),m<a.items.length-1&&d.jsx("div",{className:"marker-line"})]}),d.jsxs("div",{className:"timeline-content",children:[d.jsxs("button",{className:"exp-header",onClick:()=>h(m),"aria-expanded":s===m,children:[d.jsxs("div",{className:"exp-header-main",children:[d.jsx("h3",{className:"company-name",children:f.company}),d.jsx("span",{className:"exp-role",children:f.role})]}),d.jsxs("div",{className:"exp-header-meta",children:[d.jsxs("span",{className:"exp-period",children:[d.jsx(jn,{size:14}),f.period]}),d.jsx(zr,{size:18,className:`expand-icon ${s===m?"rotated":""}`})]})]}),d.jsx(wa,{children:s===m&&d.jsxs(Q.div,{className:"exp-details",initial:{height:0,opacity:0},animate:{height:"auto",opacity:1},exit:{height:0,opacity:0},transition:{duration:.3},children:[d.jsx("p",{className:"exp-description",children:f.description}),d.jsxs("div",{className:"exp-tasks",children:[d.jsx("h4",{className:"tasks-title",children:"주요 업무"}),d.jsx("ul",{className:"tasks-list",children:f.tasks?.map((g,y)=>d.jsxs("li",{className:"task-item",children:[d.jsx("span",{className:"task-bullet",children:"•"}),d.jsx("span",{children:g})]},y))})]}),f.techStack&&d.jsxs("div",{className:"exp-tech",children:[d.jsx("h4",{className:"tech-title",children:"기술 스택"}),d.jsx("div",{className:"tech-tags",children:f.techStack.map((g,y)=>d.jsx("span",{className:"tech-tag",children:g},y))})]})]})})]})]},m))}),d.jsx("style",{children:`
        .experience-section {
          max-width: 900px;
        }

        .section-title {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 1.75rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 24px;
          padding-bottom: 12px;
          border-bottom: 1px solid var(--border-light);
        }

        .title-icon {
          font-size: 1.5rem;
        }

        .timeline {
          position: relative;
          padding-left: 8px;
        }

        .timeline-item {
          display: flex;
          gap: 20px;
          margin-bottom: 8px;
        }

        .timeline-marker {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 16px;
          flex-shrink: 0;
        }

        .marker-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: var(--accent-blue);
          border: 2px solid var(--bg-primary);
          box-shadow: 0 0 0 2px var(--accent-blue);
          flex-shrink: 0;
          margin-top: 20px;
        }

        .marker-line {
          width: 2px;
          flex: 1;
          background: var(--border-color);
          margin-top: 8px;
        }

        .timeline-content {
          flex: 1;
          background: var(--bg-secondary);
          border-radius: 10px;
          border: 1px solid var(--border-light);
          overflow: hidden;
          transition: all 0.2s ease;
        }

        .timeline-item.expanded .timeline-content {
          box-shadow: var(--shadow-sm);
        }

        .exp-header {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          padding: 16px 20px;
          background: transparent;
          border: none;
          cursor: pointer;
          text-align: left;
          color: var(--text-primary);
          transition: background 0.15s ease;
        }

        .exp-header:hover {
          background: var(--bg-hover);
        }

        .exp-header-main {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .company-name {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .exp-role {
          font-size: 0.9rem;
          color: var(--accent-blue);
          font-weight: 500;
        }

        .exp-header-meta {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .exp-period {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.85rem;
          color: var(--text-secondary);
        }

        .expand-icon {
          color: var(--text-tertiary);
          transition: transform 0.3s ease;
        }

        .expand-icon.rotated {
          transform: rotate(180deg);
        }

        .exp-details {
          padding: 0 20px 20px;
          overflow: hidden;
        }

        .exp-description {
          font-size: 0.95rem;
          color: var(--text-secondary);
          margin-bottom: 16px;
          padding-top: 4px;
          border-top: 1px solid var(--border-light);
          padding-top: 16px;
        }

        .tasks-title,
        .tech-title {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-tertiary);
          margin-bottom: 8px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .tasks-list {
          list-style: none;
          padding: 0;
          margin: 0 0 16px 0;
        }

        .task-item {
          display: flex;
          gap: 8px;
          padding: 4px 0;
          font-size: 0.9rem;
          color: var(--text-primary);
          line-height: 1.6;
        }

        .task-bullet {
          color: var(--accent-blue);
          flex-shrink: 0;
        }

        .exp-tech {
          padding-top: 12px;
          border-top: 1px solid var(--border-light);
        }

        .tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .tech-tag {
          padding: 4px 10px;
          background: var(--bg-tertiary);
          border-radius: 4px;
          font-size: 0.8rem;
          color: var(--text-secondary);
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .exp-header {
            flex-direction: column;
            gap: 8px;
          }

          .exp-header-meta {
            width: 100%;
            justify-content: space-between;
          }
        }
      `})]})},K8=({block:a,onMediaClick:s})=>{const l=()=>{switch(a.type){case"text":return d.jsx("p",{className:"block-text",children:a.value});case"heading":return d.jsx("h3",{className:"block-heading",children:a.value});case"subheading":return d.jsx("h4",{className:"block-subheading",children:a.value});case"list":return d.jsx("ul",{className:"block-list",children:a.items?.map((y,x)=>d.jsxs("li",{className:"block-list-item",children:[d.jsx("span",{className:"list-bullet",children:"•"}),d.jsx("span",{children:y})]},x))});case"callout":return d.jsxs("div",{className:"block-callout",children:[d.jsx("span",{className:"callout-icon",children:a.icon||"💡"}),d.jsx("div",{className:"callout-content",children:a.items?d.jsx("ul",{className:"callout-list",children:a.items.map((y,x)=>d.jsx("li",{children:y},x))}):d.jsx("p",{className:"callout-text",children:a.value})})]});case"image":const o=a.driveId?Ty(a.driveId,"image"):a.value;return o?d.jsxs("div",{className:"block-media",children:[d.jsx(Q.img,{src:o,alt:a.caption||"Project image",className:"block-image",whileHover:{scale:1.02},onClick:()=>s?.({type:"image",src:o,caption:a.caption}),referrerPolicy:"no-referrer"}),a.caption&&d.jsx("p",{className:"media-caption",children:a.caption})]}):null;case"video":const u=a.value;if(!u)return null;const h=u.includes("youtube.com")||u.includes("youtu.be"),f=u.includes("drive.google.com"),m=u.endsWith(".mp4")||u.endsWith(".webm")||u.endsWith(".ogg");let g=u;if(h&&!u.includes("/embed/")){const y=u.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\s?]+)/);y&&(g=`https://www.youtube.com/embed/${y[1]}`)}if(f&&!u.includes("/preview")){const y=u.match(/\/d\/([^/]+)/);y&&(g=`https://drive.google.com/file/d/${y[1]}/preview`)}return m?d.jsxs("div",{className:"block-media",children:[d.jsx("video",{src:g,controls:!0,className:"block-video-native",onClick:y=>y.stopPropagation(),children:"브라우저가 비디오를 지원하지 않습니다."}),a.caption&&d.jsx("p",{className:"media-caption",children:a.caption})]}):d.jsxs("div",{className:"block-media",children:[d.jsx("div",{className:"video-wrapper",onClick:()=>s?.({type:"video",src:g,caption:a.caption}),children:d.jsx("iframe",{src:g,title:a.caption||"Project video",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,className:"block-video"})}),a.caption&&d.jsx("p",{className:"media-caption",children:a.caption})]});case"divider":return d.jsx("hr",{className:"block-divider"});case"quote":return d.jsx("blockquote",{className:"block-quote",children:a.value});case"code":return d.jsx("pre",{className:"block-code",children:d.jsx("code",{children:a.value})});default:return null}};return d.jsxs(Q.div,{className:`block-wrapper type-${a.type}`,initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{duration:.3},children:[l(),d.jsx("style",{children:`
        .block-wrapper {
          margin-bottom: 12px;
        }

        .block-text {
          font-size: 1rem;
          line-height: 1.7;
          color: var(--text-primary);
          white-space: pre-line;
        }

        .block-heading {
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-top: 16px;
          margin-bottom: 8px;
        }

        .block-subheading {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-top: 12px;
          margin-bottom: 6px;
        }

        .block-list {
          list-style: none;
          padding: 0;
          margin: 8px 0;
        }

        .block-list-item {
          display: flex;
          gap: 8px;
          padding: 4px 0;
          color: var(--text-primary);
          font-size: 0.95rem;
          line-height: 1.6;
        }

        .list-bullet {
          color: var(--text-tertiary);
          flex-shrink: 0;
        }

        .block-callout {
          display: flex;
          gap: 12px;
          padding: 16px;
          background: var(--bg-secondary);
          border-radius: 6px;
          margin: 12px 0;
        }

        .callout-icon {
          font-size: 1.25rem;
          flex-shrink: 0;
        }

        .callout-content {
          flex: 1;
        }

        .callout-list {
          margin: 0;
          padding-left: 20px;
          list-style-type: disc;
        }

        .callout-list li {
          margin-bottom: 4px;
          color: var(--text-primary);
          font-size: 0.95rem;
          line-height: 1.6;
        }

        .callout-list li:last-child {
          margin-bottom: 0;
        }

        .callout-text {
          color: var(--text-primary);
          font-size: 0.95rem;
          line-height: 1.6;
          white-space: pre-line;
          margin: 0;
        }

        .block-media {
          margin: 12px 0;
        }

        .block-image {
          width: 100%;
          max-width: 100%;
          border-radius: 8px;
          cursor: pointer;
          box-shadow: var(--shadow-sm);
          transition: box-shadow 0.2s ease;
          aspect-ratio: 16/9;
          object-fit: cover;
          background: var(--bg-secondary);
        }

        .block-image:hover {
          box-shadow: var(--shadow-md);
        }

        .video-wrapper {
          position: relative;
          width: 100%;
          aspect-ratio: 16/9;
          padding-bottom: 0; /* Use aspect-ratio instead of padding hack */
          overflow: hidden;
          border-radius: 8px;
          cursor: pointer;
          box-shadow: var(--shadow-sm);
          background: var(--bg-secondary);
        }

        .block-video {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .block-video-native {
          width: 100%;
          max-width: 100%;
          border-radius: 8px;
          box-shadow: var(--shadow-sm);
          background: #000;
        }

        .media-caption {
          margin-top: 8px;
          font-size: 0.85rem;
          color: var(--text-secondary);
          text-align: center;
          font-style: italic;
        }

        .block-divider {
          height: 1px;
          background: var(--border-color);
          border: none;
          margin: 20px 0;
        }

        .block-quote {
          padding: 12px 16px;
          border-left: 3px solid var(--accent-blue);
          background: var(--bg-secondary);
          font-style: italic;
          color: var(--text-primary);
          margin: 12px 0;
          border-radius: 0 6px 6px 0;
        }

        .block-code {
          background: var(--bg-tertiary);
          padding: 16px;
          border-radius: 6px;
          overflow-x: auto;
          font-family: 'SFMono-Regular', 'Consolas', 'Liberation Mono', 'Menlo', monospace;
          font-size: 0.875rem;
          line-height: 1.6;
          color: var(--text-primary);
        }
      `})]})},Q8=({data:a,onMediaClick:s})=>{const[l,o]=U.useState(0),u={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1}}},h={hidden:{opacity:0},visible:{opacity:1}},f=m=>{o(l===m?-1:m)};return d.jsxs(Q.section,{className:"section projects-section",variants:u,initial:"hidden",animate:"visible",children:[d.jsxs(Q.h2,{className:"section-title",variants:h,children:[d.jsx("span",{className:"title-icon",children:"🚀"}),a.title]}),d.jsx("div",{className:"projects-list",children:a.items?.map((m,g)=>d.jsxs(Q.div,{className:`project-card ${l===g?"expanded":""}`,variants:h,children:[d.jsx("div",{className:"project-header",onClick:()=>f(g),children:d.jsxs("div",{className:"header-main",children:[d.jsxs("div",{className:"title-row",children:[d.jsxs("div",{className:"title-group",children:[d.jsx(H4,{size:20,className:"project-icon"}),d.jsx("h3",{className:"project-title",children:m.title})]}),d.jsxs("div",{className:"header-actions",children:[m.links&&d.jsxs("div",{className:"quick-links",onClick:y=>y.stopPropagation(),children:[m.links.github&&d.jsx("a",{href:m.links.github,target:"_blank",rel:"noopener noreferrer",className:"icon-btn github",title:"View Code",children:d.jsx(W4,{size:18})}),m.links.demo&&d.jsx("a",{href:m.links.demo,target:"_blank",rel:"noopener noreferrer",className:"icon-btn demo",title:"Live Demo",children:d.jsx(Cs,{size:18})})]}),d.jsx("button",{className:`expand-btn ${l===g?"rotated":""}`,"aria-label":"Toggle details",children:d.jsx(zr,{size:20})})]})]}),d.jsx("div",{className:"meta-row",children:d.jsxs("div",{className:"meta-info",children:[m.company&&d.jsxs("span",{className:"meta-badge company",children:[d.jsx(I3,{size:12}),m.company]}),d.jsxs("span",{className:"meta-text role",children:[d.jsx(Sy,{size:12}),m.role]}),d.jsx("span",{className:"meta-divider",children:"|"}),d.jsxs("span",{className:"meta-text date",children:[d.jsx(jn,{size:12}),m.period]})]})}),m.techStack&&d.jsx("div",{className:"header-tech",children:m.techStack.map((y,x)=>d.jsx("span",{className:"tech-chip",children:y},x))})]})}),d.jsx(wa,{children:l===g&&d.jsx(Q.div,{className:"project-body",initial:{height:0,opacity:0},animate:{height:"auto",opacity:1},exit:{height:0,opacity:0},transition:{duration:.3},children:d.jsxs("div",{className:"body-inner",children:[d.jsxs("div",{className:"description-box",children:[d.jsx("h4",{className:"section-label",children:"Project Overview"}),d.jsx("p",{className:"project-desc",children:m.description})]}),d.jsxs("div",{className:"content-blocks",children:[m.blocks?.length>0&&d.jsx("h4",{className:"section-label",children:"Gallery & Details"}),m.blocks?.map((y,x)=>d.jsx(K8,{block:y,onMediaClick:s},x))]})]})})})]},g))}),d.jsx("style",{children:`
        .projects-section {
          max-width: 900px;
        }

        .section-title {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 1.75rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 32px;
          padding-bottom: 12px;
          border-bottom: 1px solid var(--border-light);
        }

        .title-icon {
          font-size: 1.5rem;
        }

        .projects-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .project-card {
          background: var(--bg-secondary);
          border: 1px solid var(--border-light);
          border-radius: 12px;
          transition: all 0.25s ease;
          box-shadow: 0 2px 4px rgba(0,0,0,0.02);
        }

        .project-card:hover {
          border-color: var(--border-color);
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
        }

        .project-card.expanded {
          border-color: var(--accent-blue);
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.1);
        }

        .project-header {
          position: sticky;
          top: 0;
          z-index: 10;
          padding: 16px 20px;
          cursor: pointer;
          background: var(--bg-secondary);
          transition: background 0.15s ease;
          border-bottom: 1px solid transparent;
          border-radius: 12px;
        }

        .project-card.expanded .project-header {
          border-bottom-color: var(--border-light);
          border-radius: 12px 12px 0 0;
        }

        .project-header:hover {
          background: var(--bg-hover);
        }

        .header-main {
          display: flex;
          flex-direction: column;
          gap: 8px; /* Reduced from 12px */
        }

        .title-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 16px;
        }

        .title-group {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .project-icon {
          color: var(--accent-blue);
          flex-shrink: 0;
        }

        .project-title {
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--text-primary);
          line-height: 1.3;
        }

        .header-actions {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-shrink: 0;
        }

        .quick-links {
          display: flex;
          gap: 6px;
        }

        .icon-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 28px;
          height: 28px;
          border-radius: 6px;
          background: var(--bg-tertiary);
          color: var(--text-secondary);
          transition: all 0.2s ease;
          border: 1px solid transparent;
        }

        .icon-btn:hover {
          background: var(--accent-blue);
          color: white;
          border-color: var(--accent-blue);
          transform: translateY(-1px);
        }

        .expand-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 28px;
          height: 28px;
          border: none;
          background: transparent;
          color: var(--text-tertiary);
          cursor: pointer;
          transition: transform 0.3s ease, color 0.2s ease;
        }

        .expand-btn.rotated {
          transform: rotate(180deg);
          color: var(--accent-blue);
        }

        .meta-row {
          display: flex;
          align-items: center;
        }

        .meta-info {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 8px;
          font-size: 0.85rem;
          color: var(--text-secondary);
        }

        .meta-badge {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 2px 6px;
          border-radius: 4px;
          font-weight: 500;
          font-size: 0.75rem;
        }

        .meta-badge.company {
          background: rgba(139, 92, 246, 0.1);
          color: #a78bfa;
        }

        .meta-text {
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .meta-text.role {
          font-weight: 500;
          color: var(--text-primary);
        }

        .meta-divider {
          color: var(--border-color);
          font-size: 0.8rem;
        }

        .header-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 4px;
          margin-top: 2px;
        }

        .tech-chip {
          padding: 2px 8px;
          background: var(--bg-tertiary);
          border-radius: 12px;
          font-size: 0.75rem;
          color: var(--text-secondary);
          border: 1px solid var(--border-light);
          font-weight: 500;
        }

        .project-body {
          overflow: hidden;
          background: var(--bg-tertiary);
          border-top: 1px solid var(--border-light);
          border-radius: 0 0 12px 12px;
        }

        .body-inner {
          padding: 20px;
        }

        .section-label {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--text-tertiary);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 8px;
        }

        .description-box {
          margin-bottom: 20px;
        }

        .project-desc {
          font-size: 0.95rem;
          line-height: 1.6;
          color: var(--text-secondary);
        }

        .content-blocks {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
          align-items: start;
        }

        /* 기본적으로 모든 블록은 전체 너비를 차지 */
        .content-blocks .block-wrapper {
          grid-column: 1 / -1;
          margin-bottom: 0 !important;
        }

        /* 이미지와 비디오만 2분할 (PC) */
        .content-blocks .block-wrapper.type-image,
        .content-blocks .block-wrapper.type-video {
          grid-column: span 1;
        }

        @media (max-width: 768px) {
          .content-blocks {
            grid-template-columns: 1fr;
          }
          
          .content-blocks .block-wrapper.type-image,
          .content-blocks .block-wrapper.type-video {
            grid-column: 1 / -1;
          }

          .title-row {
            flex-direction: column;
            gap: 12px;
          }

          .header-actions {
            width: 100%;
            justify-content: space-between;
            padding-left: 32px;
          }
        }
      `})]})},Z8={ShoppingCart:gy,MapPin:Cr,Wrench:yi,BarChart3:gi,FileText:Er,Calculator:n4,Settings:Ed,Database:Md,Search:Dr,Calendar:jn,Users:Us,Package:fy,Truck:xy,Mail:Nd,Bell:Kg,Clipboard:Pg,FolderOpen:Y4,Image:ry,Link:uy,Printer:hy,QrCode:py,RefreshCw:Ms,Send:my,Tag:yy,Upload:by,Download:iy,CreditCard:ny,DollarSign:ay,PieChart:wd,TrendingUp:ji,Activity:br,Globe:Si},J8="dldbsgml0611!",$8=({data:a})=>{const[s,l]=U.useState(!1),[o,u]=U.useState(!1),[h,f]=U.useState(null),[m,g]=U.useState(""),[y,x]=U.useState(!1),[b,j]=U.useState(""),k={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1}}},C={hidden:{opacity:0,y:20},visible:{opacity:1,y:0}},B=H=>{window.open(H,"_blank","noopener,noreferrer")},K=H=>{const st=`${window.location.origin+window.location.pathname}?tool=${H}`;window.open(st,`tool_${H}`,"width=1200,height=800,resizable=yes,scrollbars=yes")},G=H=>{s?K(H):(f(H),u(!0),g(""),j(""))},J=H=>{H.preventDefault(),m===J8?(l(!0),u(!1),h&&K(h),f(null),g(""),j("")):j("비밀번호가 올바르지 않습니다.")},Y=()=>{u(!1),f(null),g(""),j("")};return d.jsxs(Q.section,{className:"section webapps-section",variants:k,initial:"hidden",animate:"visible",children:[d.jsxs(Q.h2,{className:"section-title",variants:C,children:[d.jsx("span",{className:"title-icon",children:"🌐"}),a.title]}),d.jsx(Q.p,{className:"section-description",variants:C,children:a.description||"직접 제작하여 배포한 웹 애플리케이션들입니다. 카드를 클릭하면 새 창에서 실행됩니다."}),d.jsx(Q.div,{className:"webapps-grid",variants:k,children:a.items?.map((H,F)=>d.jsxs(Q.div,{className:"webapp-card",variants:C,whileHover:{y:-6,boxShadow:"var(--shadow-lg)"},whileTap:{scale:.98},onClick:()=>B(H.url),children:[d.jsxs("div",{className:"webapp-thumbnail",children:[H.thumbnail?d.jsx("img",{src:H.thumbnail,alt:H.title,className:"thumbnail-img"}):d.jsx("div",{className:"thumbnail-placeholder",children:d.jsx(Si,{size:48})}),d.jsxs("div",{className:"webapp-overlay",children:[d.jsx(Cs,{size:24}),d.jsx("span",{children:"열기"})]})]}),d.jsxs("div",{className:"webapp-content",children:[d.jsxs("div",{className:"webapp-header",children:[d.jsx("h3",{className:"webapp-title",children:H.title}),d.jsxs("div",{className:"webapp-badges",children:[H.isNew&&d.jsxs("span",{className:"new-badge",children:[d.jsx(jr,{size:12}),"NEW"]}),H.requiresLogin&&d.jsxs("span",{className:"login-badge",children:[d.jsx(ja,{size:12}),"계정 필요"]})]})]}),d.jsx("p",{className:"webapp-description",children:H.description}),H.techStack&&d.jsx("div",{className:"webapp-tech",children:H.techStack.map((st,$)=>d.jsx("span",{className:"tech-tag",children:st},$))}),H.platform&&d.jsxs("div",{className:"webapp-platform",children:[d.jsx("span",{className:"platform-label",children:"Platform:"}),d.jsx("span",{className:"platform-value",children:H.platform})]})]})]},F))}),a.internalTools&&d.jsxs(d.Fragment,{children:[d.jsxs(Q.div,{className:"internal-tools-divider",variants:C,children:[d.jsx("div",{className:"divider-line"}),d.jsxs("div",{className:"divider-content",children:[d.jsx(yi,{size:16}),d.jsx("span",{children:a.internalTools.title}),!s&&d.jsx(ja,{size:14,className:"lock-icon"})]}),d.jsx("div",{className:"divider-line"})]}),d.jsxs(Q.p,{className:"internal-tools-description",variants:C,children:[a.internalTools.description,!s&&" (비밀번호 필요)"]}),d.jsx(Q.div,{className:"internal-tools-grid",variants:k,children:a.internalTools.items?.map((H,F)=>{const st=Z8[H.icon]||yi;return d.jsxs(Q.div,{className:`internal-tool-card ${s?"":"locked"}`,variants:C,whileHover:{y:-4,boxShadow:"var(--shadow-md)"},whileTap:{scale:.98},onClick:()=>G(H.id),children:[d.jsx("div",{className:"tool-icon",children:d.jsx(st,{size:24})}),d.jsxs("div",{className:"tool-info",children:[d.jsx("h4",{className:"tool-title",children:H.title}),d.jsx("p",{className:"tool-description",children:H.description})]}),d.jsx("div",{className:"tool-action",children:s?d.jsx(Cs,{size:16}):d.jsx(ja,{size:16})})]},F)})})]}),d.jsx(wa,{children:o&&d.jsx(Q.div,{className:"password-modal-overlay",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:Y,children:d.jsxs(Q.div,{className:"password-modal",initial:{opacity:0,scale:.9,y:20},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.9,y:20},onClick:H=>H.stopPropagation(),children:[d.jsx("button",{className:"modal-close-btn",onClick:Y,children:d.jsx(Ls,{size:20})}),d.jsx("div",{className:"modal-icon",children:d.jsx(ja,{size:32})}),d.jsx("h3",{className:"modal-title",children:"비밀번호 입력"}),d.jsx("p",{className:"modal-description",children:"내부 개발 도구에 접근하려면 비밀번호를 입력하세요."}),d.jsxs("form",{onSubmit:J,children:[d.jsxs("div",{className:"password-input-wrapper",children:[d.jsx("input",{type:y?"text":"password",value:m,onChange:H=>g(H.target.value),placeholder:"비밀번호",className:"password-input",autoFocus:!0}),d.jsx("button",{type:"button",className:"toggle-password-btn",onClick:()=>x(!y),children:y?d.jsx(sy,{size:18}):d.jsx(ly,{size:18})})]}),b&&d.jsx("p",{className:"error-message",children:b}),d.jsx("button",{type:"submit",className:"submit-btn",children:"확인"})]})]})})}),d.jsx("style",{children:`
        .webapps-section {
          max-width: 1200px;
        }

        .section-title {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 1.75rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 12px;
          padding-bottom: 12px;
          border-bottom: 1px solid var(--border-light);
        }

        .title-icon {
          font-size: 1.5rem;
        }

        .section-description {
          color: var(--text-secondary);
          font-size: 0.95rem;
          margin-bottom: 24px;
        }

        .webapps-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 20px;
        }

        .webapp-card {
          background: var(--bg-secondary);
          border: 1px solid var(--border-light);
          border-radius: 12px;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .webapp-card:hover {
          border-color: var(--accent-blue);
        }

        .webapp-card:hover .webapp-overlay {
          opacity: 1;
        }

        .webapp-thumbnail {
          position: relative;
          width: 100%;
          height: 160px;
          background: var(--bg-tertiary);
          overflow: hidden;
        }

        .thumbnail-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .webapp-card:hover .thumbnail-img {
          transform: scale(1.05);
        }

        .thumbnail-placeholder {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, var(--accent-blue) 0%, var(--accent-purple) 100%);
          color: white;
          opacity: 0.8;
        }

        .webapp-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.6);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 8px;
          color: white;
          opacity: 0;
          transition: opacity 0.3s ease;
          font-weight: 500;
          font-size: 0.9rem;
        }

        .webapp-content {
          padding: 16px;
        }

        .webapp-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 8px;
          margin-bottom: 8px;
        }

        .webapp-title {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--text-primary);
          flex: 1;
        }

        .webapp-badges {
          display: flex;
          flex-wrap: wrap;
          gap: 4px;
          flex-shrink: 0;
        }

        .new-badge {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 2px 8px;
          background: linear-gradient(135deg, #f97316, #ea580c);
          color: white;
          font-size: 0.7rem;
          font-weight: 600;
          border-radius: 4px;
        }

        .login-badge {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 2px 8px;
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          color: white;
          font-size: 0.7rem;
          font-weight: 500;
          border-radius: 4px;
        }

        .webapp-description {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 12px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .webapp-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 12px;
        }

        .tech-tag {
          padding: 3px 8px;
          background: var(--bg-tertiary);
          border-radius: 4px;
          font-size: 0.75rem;
          color: var(--text-secondary);
          font-weight: 500;
        }

        .webapp-platform {
          display: flex;
          align-items: center;
          gap: 6px;
          padding-top: 12px;
          border-top: 1px solid var(--border-light);
          font-size: 0.8rem;
        }

        .platform-label {
          color: var(--text-tertiary);
        }

        .platform-value {
          color: var(--accent-blue);
          font-weight: 500;
        }

        /* Internal Tools Styles */
        .internal-tools-divider {
          display: flex;
          align-items: center;
          gap: 16px;
          margin: 40px 0 16px;
        }

        .divider-line {
          flex: 1;
          height: 1px;
          background: var(--border-light);
        }

        .divider-content {
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--text-secondary);
          font-size: 0.9rem;
          font-weight: 600;
          padding: 8px 16px;
          background: var(--bg-tertiary);
          border-radius: 20px;
        }

        .lock-icon {
          color: var(--accent-purple);
        }

        .internal-tools-description {
          color: var(--text-tertiary);
          font-size: 0.85rem;
          margin-bottom: 16px;
          text-align: center;
        }

        .internal-tools-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 12px;
        }

        .internal-tool-card {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 16px 20px;
          background: var(--bg-secondary);
          border: 1px solid var(--border-light);
          border-radius: 10px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .internal-tool-card.locked {
          opacity: 0.85;
        }

        .internal-tool-card:hover {
          border-color: var(--accent-purple);
          background: var(--bg-tertiary);
        }

        .internal-tool-card:hover .tool-icon {
          background: var(--accent-purple);
          color: white;
        }

        .tool-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          border-radius: 10px;
          background: var(--bg-tertiary);
          color: var(--text-secondary);
          transition: all 0.2s ease;
          flex-shrink: 0;
        }

        .tool-info {
          flex: 1;
          min-width: 0;
        }

        .tool-title {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 4px;
        }

        .tool-description {
          font-size: 0.8rem;
          color: var(--text-tertiary);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .tool-action {
          color: var(--text-tertiary);
          opacity: 0;
          transition: opacity 0.2s ease;
        }

        .internal-tool-card:hover .tool-action {
          opacity: 1;
          color: var(--accent-purple);
        }

        /* Password Modal Styles */
        .password-modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 20px;
        }

        .password-modal {
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: 16px;
          padding: 32px;
          width: 100%;
          max-width: 400px;
          position: relative;
          box-shadow: var(--shadow-lg);
        }

        .modal-close-btn {
          position: absolute;
          top: 16px;
          right: 16px;
          background: transparent;
          border: none;
          color: var(--text-tertiary);
          cursor: pointer;
          padding: 4px;
          border-radius: 6px;
          transition: all 0.2s ease;
        }

        .modal-close-btn:hover {
          background: var(--bg-tertiary);
          color: var(--text-primary);
        }

        .modal-icon {
          width: 64px;
          height: 64px;
          margin: 0 auto 16px;
          background: linear-gradient(135deg, var(--accent-purple), #8b5cf6);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }

        .modal-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text-primary);
          text-align: center;
          margin-bottom: 8px;
        }

        .modal-description {
          font-size: 0.9rem;
          color: var(--text-secondary);
          text-align: center;
          margin-bottom: 24px;
        }

        .password-input-wrapper {
          position: relative;
          margin-bottom: 16px;
        }

        .password-input {
          width: 100%;
          padding: 12px 48px 12px 16px;
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          border-radius: 10px;
          font-size: 1rem;
          color: var(--text-primary);
          transition: all 0.2s ease;
        }

        .password-input:focus {
          outline: none;
          border-color: var(--accent-purple);
          box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.2);
        }

        .password-input::placeholder {
          color: var(--text-tertiary);
        }

        .toggle-password-btn {
          position: absolute;
          right: 12px;
          top: 50%;
          transform: translateY(-50%);
          background: transparent;
          border: none;
          color: var(--text-tertiary);
          cursor: pointer;
          padding: 4px;
        }

        .toggle-password-btn:hover {
          color: var(--text-secondary);
        }

        .error-message {
          color: #ef4444;
          font-size: 0.85rem;
          text-align: center;
          margin-bottom: 16px;
        }

        .submit-btn {
          width: 100%;
          padding: 12px;
          background: linear-gradient(135deg, var(--accent-purple), #8b5cf6);
          border: none;
          border-radius: 10px;
          color: white;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(139, 92, 246, 0.4);
        }

        .submit-btn:active {
          transform: translateY(0);
        }

        @media (max-width: 768px) {
          .webapps-grid {
            grid-template-columns: 1fr;
          }
          
          .internal-tools-grid {
            grid-template-columns: 1fr;
          }

          .password-modal {
            padding: 24px;
          }
        }
      `})]})},o1={elementary:{icon:hr,colorClass:"elementary",label:"초등학교"},middle:{icon:hr,colorClass:"middle",label:"중학교"},high:{icon:e8,colorClass:"high",label:"고등학교"},university:{icon:Sr,colorClass:"university",label:"대학교"},graduate:{icon:Sr,colorClass:"graduate",label:"대학원"},academy:{icon:Jg,colorClass:"academy",label:"학원/교육기관"},bootcamp:{icon:l1,colorClass:"bootcamp",label:"부트캠프"},online:{icon:l1,colorClass:"online",label:"온라인 교육"},certification:{icon:Ar,colorClass:"certification",label:"자격 과정"},other:{icon:hr,colorClass:"other",label:"기타"}},F8=({data:a})=>{const s={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1}}},l={hidden:{opacity:0,y:20},visible:{opacity:1,y:0}},o=u=>o1[u]||o1.university;return d.jsxs(Q.section,{className:"section education-section",variants:s,initial:"hidden",animate:"visible",children:[d.jsxs(Q.h2,{className:"section-title",variants:l,children:[d.jsx("span",{className:"title-icon",children:"🎓"}),a.title]}),d.jsx(Q.div,{className:"education-list",variants:s,children:a.items?.map((u,h)=>{const f=o(u.type),m=f.icon;return d.jsxs(Q.div,{className:"education-card",variants:l,whileHover:{y:-4,boxShadow:"var(--shadow-md)"},children:[d.jsx("div",{className:`edu-icon-wrapper ${f.colorClass}`,children:d.jsx(m,{size:24})}),d.jsxs("div",{className:"edu-content",children:[d.jsx("h3",{className:"school-name",children:u.school}),d.jsxs("p",{className:"edu-major",children:[u.major," · ",u.degree]}),d.jsxs("div",{className:"edu-meta",children:[u.location&&d.jsxs("span",{className:"edu-location",children:[d.jsx(Cr,{size:14}),u.location]}),d.jsxs("span",{className:"edu-period",children:[d.jsx(jn,{size:14}),u.period]})]}),u.description&&d.jsx("p",{className:"edu-description",children:u.description})]})]},h)})}),d.jsx("style",{children:`
        .education-section {
          max-width: 800px;
        }

        .section-title {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 1.75rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 24px;
          padding-bottom: 12px;
          border-bottom: 1px solid var(--border-light);
        }

        .title-icon {
          font-size: 1.5rem;
        }

        .education-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .education-card {
          display: flex;
          gap: 20px;
          padding: 20px;
          background: var(--bg-secondary);
          border: 1px solid var(--border-light);
          border-radius: 10px;
          transition: all 0.2s ease;
        }

        .edu-icon-wrapper {
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, var(--accent-blue), var(--accent-purple));
          border-radius: 12px;
          color: white;
          flex-shrink: 0;
        }

        /* 초등학교 - 연두색 */
        .edu-icon-wrapper.elementary {
          background: linear-gradient(135deg, #84cc16, #22c55e);
        }

        /* 중학교 - 청록색 */
        .edu-icon-wrapper.middle {
          background: linear-gradient(135deg, #14b8a6, #06b6d4);
        }

        /* 고등학교 - 파란색 */
        .edu-icon-wrapper.high {
          background: linear-gradient(135deg, #3b82f6, #6366f1);
        }

        /* 대학교 - 파랑/보라 (기본) */
        .edu-icon-wrapper.university {
          background: linear-gradient(135deg, var(--accent-blue), var(--accent-purple));
        }

        /* 대학원 - 보라/분홍 */
        .edu-icon-wrapper.graduate {
          background: linear-gradient(135deg, #8b5cf6, #d946ef);
        }

        /* 학원/교육기관 - 주황색 */
        .edu-icon-wrapper.academy {
          background: linear-gradient(135deg, #f59e0b, #ea580c);
        }

        /* 부트캠프 - 빨간색 */
        .edu-icon-wrapper.bootcamp {
          background: linear-gradient(135deg, #ef4444, #f97316);
        }

        /* 온라인 교육 - 하늘색 */
        .edu-icon-wrapper.online {
          background: linear-gradient(135deg, #0ea5e9, #38bdf8);
        }

        /* 자격 과정 - 금색 */
        .edu-icon-wrapper.certification {
          background: linear-gradient(135deg, #eab308, #fbbf24);
        }

        /* 기타 - 회색 */
        .edu-icon-wrapper.other {
          background: linear-gradient(135deg, #6b7280, #9ca3af);
        }

        .edu-content {
          flex: 1;
        }

        .school-name {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 4px;
        }

        .edu-major {
          font-size: 0.95rem;
          color: var(--accent-blue);
          font-weight: 500;
          margin-bottom: 8px;
        }

        .edu-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 8px;
        }

        .edu-period, .edu-location {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.85rem;
          color: var(--text-secondary);
          padding: 4px 10px;
          background: var(--bg-tertiary);
          border-radius: 4px;
        }

        .edu-description {
          margin-top: 12px;
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .education-card {
            flex-direction: column;
            gap: 12px;
          }
        }
      `})]})},P8=({data:a})=>{const s={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.08}}},l={hidden:{opacity:0,scale:.95},visible:{opacity:1,scale:1}};return d.jsxs(Q.section,{className:"section certifications-section",variants:s,initial:"hidden",animate:"visible",children:[d.jsxs(Q.h2,{className:"section-title",variants:l,children:[d.jsx("span",{className:"title-icon",children:"🏆"}),a.title]}),d.jsx(Q.div,{className:"certifications-grid",variants:s,children:a.items?.map((o,u)=>d.jsxs(Q.div,{className:"cert-card",variants:l,whileHover:{y:-4,boxShadow:"var(--shadow-md)",borderColor:"var(--accent-blue)"},children:[d.jsx("div",{className:"cert-icon",children:o.icon||d.jsx(Ar,{size:20})}),d.jsxs("div",{className:"cert-content",children:[d.jsx("h3",{className:"cert-name",children:o.name}),d.jsx("p",{className:"cert-issuer",children:o.issuer}),d.jsxs("span",{className:"cert-date",children:[d.jsx(jn,{size:12}),o.date]})]})]},u))}),d.jsx("style",{children:`
        .certifications-section {
          max-width: 1000px;
        }

        .section-title {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 1.75rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 24px;
          padding-bottom: 12px;
          border-bottom: 1px solid var(--border-light);
        }

        .title-icon {
          font-size: 1.5rem;
        }

        .certifications-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 16px;
        }

        .cert-card {
          display: flex;
          gap: 14px;
          padding: 18px;
          background: var(--bg-secondary);
          border: 1px solid var(--border-light);
          border-radius: 10px;
          transition: all 0.2s ease;
        }

        .cert-icon {
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, var(--accent-yellow), var(--accent-orange));
          border-radius: 10px;
          font-size: 1.25rem;
          flex-shrink: 0;
        }

        .cert-content {
          flex: 1;
          min-width: 0;
        }

        .cert-name {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 4px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .cert-issuer {
          font-size: 0.85rem;
          color: var(--text-secondary);
          margin-bottom: 8px;
        }

        .cert-date {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.75rem;
          color: var(--text-tertiary);
          padding: 3px 8px;
          background: var(--bg-tertiary);
          border-radius: 4px;
        }

        @media (max-width: 768px) {
          .certifications-grid {
            grid-template-columns: 1fr;
          }
        }
      `})]})},W8=()=>{const[a,s]=U.useState(()=>{const k=new Date;return k.setDate(k.getDate()-1),k.toISOString().split("T")[0]}),[l,o]=U.useState(null),[u,h]=U.useState(!1),[f,m]=U.useState(null),g=async()=>{h(!0),m(null),o(null);try{const C=`https://order.iroyal.kr/google/get_mall_daily_report?dt=${a}`,B=await fetch(C);if(!B.ok)throw new Error("API 요청 실패");const K=await B.json();K.result?o(K.data):m("데이터를 가져올 수 없습니다.")}catch(k){m(k.message||"오류가 발생했습니다.")}finally{h(!1)}},y=k=>new Intl.NumberFormat("ko-KR",{style:"currency",currency:"KRW",maximumFractionDigits:0}).format(k),x=k=>new Intl.NumberFormat("ko-KR").format(k),b={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1}}},j={hidden:{opacity:0,y:20},visible:{opacity:1,y:0}};return d.jsxs(Q.section,{className:"section mall-report-section",variants:b,initial:"hidden",animate:"visible",children:[d.jsxs(Q.h2,{className:"section-title",variants:j,children:[d.jsx("span",{className:"title-icon",children:"🛒"}),"자사몰 매출 확인"]}),d.jsx(Q.p,{className:"section-description",variants:j,children:"날짜를 선택하고 조회 버튼을 클릭하면 해당 날짜의 매출 데이터를 확인할 수 있습니다."}),d.jsxs(Q.div,{className:"date-picker-container",variants:j,children:[d.jsxs("div",{className:"date-input-wrapper",children:[d.jsx(jn,{size:20,className:"date-icon"}),d.jsx("input",{type:"date",value:a,onChange:k=>s(k.target.value),className:"date-input"})]}),d.jsx("button",{onClick:g,disabled:u,className:"fetch-button",children:u?d.jsxs(d.Fragment,{children:[d.jsx(dy,{size:18,className:"spinner"}),"조회 중..."]}):d.jsxs(d.Fragment,{children:[d.jsx(Dr,{size:18}),"조회하기"]})})]}),f&&d.jsxs(Q.div,{className:"error-message",variants:j,children:["⚠️ ",f]}),l&&d.jsxs(Q.div,{className:"report-results",initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{duration:.3},children:[d.jsxs("h3",{className:"results-title",children:["📊 ",l.DT," 매출 리포트"]}),d.jsxs("div",{className:"stats-grid",children:[d.jsxs("div",{className:"stat-card sales",children:[d.jsx("div",{className:"stat-icon",children:d.jsx(ji,{size:28})}),d.jsxs("div",{className:"stat-content",children:[d.jsx("span",{className:"stat-label",children:"매출액"}),d.jsx("span",{className:"stat-value",children:y(l.PO)})]})]}),d.jsxs("div",{className:"stat-card visitors",children:[d.jsx("div",{className:"stat-icon",children:d.jsx(Us,{size:28})}),d.jsxs("div",{className:"stat-content",children:[d.jsx("span",{className:"stat-label",children:"방문자 수"}),d.jsxs("span",{className:"stat-value",children:[x(l.VISITORS),"명"]})]})]})]}),d.jsxs("div",{className:"json-container",children:[d.jsx("h4",{className:"json-title",children:"📋 원본 JSON 데이터"}),d.jsx("pre",{className:"json-content",children:JSON.stringify({result:!0,data:l},null,2)})]})]}),d.jsx("style",{children:`
        .mall-report-section {
          max-width: 800px;
        }

        .section-title {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 1.75rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 12px;
          padding-bottom: 12px;
          border-bottom: 1px solid var(--border-light);
        }

        .title-icon {
          font-size: 1.5rem;
        }

        .section-description {
          color: var(--text-secondary);
          font-size: 0.95rem;
          margin-bottom: 24px;
        }

        .date-picker-container {
          display: flex;
          gap: 12px;
          margin-bottom: 24px;
          flex-wrap: wrap;
        }

        .date-input-wrapper {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 16px;
          background: var(--bg-secondary);
          border: 1px solid var(--border-light);
          border-radius: 8px;
          flex: 1;
          min-width: 200px;
        }

        .date-icon {
          color: var(--text-secondary);
        }

        .date-input {
          border: none;
          background: transparent;
          font-size: 1rem;
          color: var(--text-primary);
          outline: none;
          flex: 1;
        }

        .date-input::-webkit-calendar-picker-indicator {
          cursor: pointer;
          filter: invert(0.5);
        }

        .fetch-button {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 24px;
          background: linear-gradient(135deg, #3b82f6, #2563eb);
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 0.95rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .fetch-button:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
        }

        .fetch-button:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .spinner {
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .error-message {
          padding: 12px 16px;
          background: rgba(239, 68, 68, 0.1);
          border: 1px solid rgba(239, 68, 68, 0.3);
          border-radius: 8px;
          color: #ef4444;
          margin-bottom: 20px;
        }

        .report-results {
          background: var(--bg-secondary);
          border: 1px solid var(--border-light);
          border-radius: 12px;
          padding: 24px;
        }

        .results-title {
          font-size: 1.2rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 20px;
          padding-bottom: 12px;
          border-bottom: 1px solid var(--border-light);
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 16px;
          margin-bottom: 24px;
        }

        .stat-card {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 20px;
          border-radius: 12px;
          background: var(--bg-primary);
          border: 1px solid var(--border-light);
        }

        .stat-card.sales {
          border-left: 4px solid #10b981;
        }

        .stat-card.sales .stat-icon {
          background: rgba(16, 185, 129, 0.1);
          color: #10b981;
        }

        .stat-card.visitors {
          border-left: 4px solid #8b5cf6;
        }

        .stat-card.visitors .stat-icon {
          background: rgba(139, 92, 246, 0.1);
          color: #8b5cf6;
        }

        .stat-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 56px;
          height: 56px;
          border-radius: 12px;
        }

        .stat-content {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .stat-label {
          font-size: 0.85rem;
          color: var(--text-secondary);
          font-weight: 500;
        }

        .stat-value {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .json-container {
          background: var(--bg-tertiary);
          border-radius: 8px;
          overflow: hidden;
        }

        .json-title {
          padding: 12px 16px;
          background: var(--bg-hover);
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--text-primary);
          margin: 0;
          border-bottom: 1px solid var(--border-light);
        }

        .json-content {
          padding: 16px;
          margin: 0;
          font-family: 'Fira Code', 'Consolas', monospace;
          font-size: 0.85rem;
          color: var(--text-primary);
          overflow-x: auto;
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .date-picker-container {
            flex-direction: column;
          }

          .fetch-button {
            width: 100%;
            justify-content: center;
          }

          .stat-value {
            font-size: 1.25rem;
          }
        }
      `})]})},I8=()=>{const[a,s]=U.useState("경기도 화성시 시청로 895-20"),[l,o]=U.useState(!1),[u,h]=U.useState(null),[f,m]=U.useState(null),[g,y]=U.useState(!1),x=async()=>{if(!a.trim()){h("주소를 입력해주세요.");return}o(!0),h(null),m(null);try{const G=await fetch(`https://dapi.kakao.com/v2/local/search/address.json?query=${encodeURIComponent(a)}`,{headers:{Authorization:"KakaoAK a9bd7c56d3bb0458de036cc050c65041"}});if(!G.ok)throw new Error("API 요청 실패");const J=await G.json();J.documents&&J.documents.length>0?m(J.documents[0]):h("검색 결과가 없습니다.")}catch(B){h(B.message||"오류가 발생했습니다.")}finally{o(!1)}},b=()=>{if(f){const B=`${f.y}, ${f.x}`;navigator.clipboard.writeText(B),y(!0),setTimeout(()=>y(!1),2e3)}},j=()=>{if(f){const B=`https://www.google.com/maps?q=${f.y},${f.x}`;window.open(B,"_blank","noopener,noreferrer")}},k={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1}}},C={hidden:{opacity:0,y:20},visible:{opacity:1,y:0}};return d.jsxs(Q.section,{className:"section address-map-section",variants:k,initial:"hidden",animate:"visible",children:[d.jsxs(Q.h2,{className:"section-title",variants:C,children:[d.jsx("span",{className:"title-icon",children:"📍"}),"주소 → 좌표 변환"]}),d.jsx(Q.p,{className:"section-description",variants:C,children:"주소를 입력하면 좌표(위도, 경도)를 조회하고 구글 지도에서 위치를 확인할 수 있습니다."}),d.jsxs(Q.div,{className:"search-container",variants:C,children:[d.jsxs("div",{className:"search-input-wrapper",children:[d.jsx(Cr,{size:20,className:"search-icon"}),d.jsx("input",{type:"text",value:a,onChange:B=>s(B.target.value),onKeyPress:B=>B.key==="Enter"&&x(),placeholder:"주소를 입력하세요 (예: 서울시 강남구 테헤란로 123)",className:"search-input"})]}),d.jsx("button",{onClick:x,disabled:l,className:"search-button",children:l?d.jsxs(d.Fragment,{children:[d.jsx(dy,{size:18,className:"spinner"}),"검색 중..."]}):d.jsxs(d.Fragment,{children:[d.jsx(Dr,{size:18}),"검색"]})})]}),u&&d.jsxs(Q.div,{className:"error-message",variants:C,children:["⚠️ ",u]}),f&&d.jsxs(Q.div,{className:"result-container",initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{duration:.3},children:[d.jsxs("div",{className:"address-info",children:[d.jsx("h3",{className:"result-title",children:"📌 검색 결과"}),d.jsxs("div",{className:"info-row",children:[d.jsx("span",{className:"info-label",children:"주소"}),d.jsx("span",{className:"info-value",children:f.address_name})]}),f.road_address&&d.jsxs("div",{className:"info-row",children:[d.jsx("span",{className:"info-label",children:"도로명"}),d.jsx("span",{className:"info-value",children:f.road_address.address_name})]}),f.address&&d.jsxs("div",{className:"info-row",children:[d.jsx("span",{className:"info-label",children:"지번"}),d.jsx("span",{className:"info-value",children:f.address.address_name})]})]}),d.jsxs("div",{className:"coordinates-card",children:[d.jsxs("div",{className:"coord-header",children:[d.jsx("h4",{children:"🌐 좌표 정보"}),d.jsxs("button",{onClick:b,className:"copy-button",title:"좌표 복사",children:[g?d.jsx($g,{size:16}):d.jsx(ty,{size:16}),g?"복사됨!":"복사"]})]}),d.jsxs("div",{className:"coord-grid",children:[d.jsxs("div",{className:"coord-item",children:[d.jsx("span",{className:"coord-label",children:"위도 (Latitude)"}),d.jsx("span",{className:"coord-value",children:f.y})]}),d.jsxs("div",{className:"coord-item",children:[d.jsx("span",{className:"coord-label",children:"경도 (Longitude)"}),d.jsx("span",{className:"coord-value",children:f.x})]})]})]}),d.jsxs("button",{onClick:j,className:"map-button google",children:[d.jsx(V6,{size:20}),"구글 지도에서 보기"]}),d.jsx("div",{className:"map-embed",children:d.jsx("iframe",{title:"Google Map",width:"100%",height:"400",style:{border:0,borderRadius:"12px"},loading:"lazy",allowFullScreen:!0,referrerPolicy:"no-referrer-when-downgrade",src:`https://maps.google.com/maps?q=${f.y},${f.x}&z=17&output=embed`})}),d.jsxs("div",{className:"json-container",children:[d.jsx("h4",{className:"json-title",children:"📋 API 응답 데이터"}),d.jsx("pre",{className:"json-content",children:JSON.stringify(f,null,2)})]})]}),d.jsx("style",{children:`
        .address-map-section {
          max-width: 900px;
        }

        .section-title {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 1.75rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 12px;
          padding-bottom: 12px;
          border-bottom: 1px solid var(--border-light);
        }

        .title-icon {
          font-size: 1.5rem;
        }

        .section-description {
          color: var(--text-secondary);
          font-size: 0.95rem;
          margin-bottom: 24px;
        }

        .search-container {
          display: flex;
          gap: 12px;
          margin-bottom: 24px;
          flex-wrap: wrap;
        }

        .search-input-wrapper {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 16px;
          background: var(--bg-secondary);
          border: 1px solid var(--border-light);
          border-radius: 8px;
          flex: 1;
          min-width: 300px;
        }

        .search-icon {
          color: var(--text-secondary);
          flex-shrink: 0;
        }

        .search-input {
          border: none;
          background: transparent;
          font-size: 1rem;
          color: var(--text-primary);
          outline: none;
          flex: 1;
          width: 100%;
        }

        .search-input::placeholder {
          color: var(--text-tertiary);
        }

        .search-button {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 24px;
          background: linear-gradient(135deg, #10b981, #059669);
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 0.95rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .search-button:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(16, 185, 129, 0.4);
        }

        .search-button:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .spinner {
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .error-message {
          padding: 12px 16px;
          background: rgba(239, 68, 68, 0.1);
          border: 1px solid rgba(239, 68, 68, 0.3);
          border-radius: 8px;
          color: #ef4444;
          margin-bottom: 20px;
        }

        .result-container {
          background: var(--bg-secondary);
          border: 1px solid var(--border-light);
          border-radius: 12px;
          padding: 24px;
        }

        .address-info {
          margin-bottom: 20px;
        }

        .result-title {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 16px;
        }

        .info-row {
          display: flex;
          gap: 12px;
          padding: 8px 0;
          border-bottom: 1px dashed var(--border-light);
        }

        .info-row:last-child {
          border-bottom: none;
        }

        .info-label {
          min-width: 60px;
          font-size: 0.85rem;
          color: var(--text-secondary);
          font-weight: 500;
        }

        .info-value {
          font-size: 0.95rem;
          color: var(--text-primary);
        }

        .coordinates-card {
          background: var(--bg-tertiary);
          border-radius: 10px;
          padding: 16px;
          margin-bottom: 20px;
        }

        .coord-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }

        .coord-header h4 {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text-primary);
          margin: 0;
        }

        .copy-button {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 6px 12px;
          background: var(--bg-hover);
          border: 1px solid var(--border-light);
          border-radius: 6px;
          font-size: 0.8rem;
          color: var(--text-secondary);
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .copy-button:hover {
          background: var(--accent-blue);
          color: white;
          border-color: var(--accent-blue);
        }

        .coord-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 12px;
        }

        .coord-item {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .coord-label {
          font-size: 0.8rem;
          color: var(--text-tertiary);
        }

        .coord-value {
          font-family: 'Fira Code', 'Consolas', monospace;
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--accent-blue);
        }

        .map-button {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          width: 100%;
          padding: 14px 24px;
          background: linear-gradient(135deg, #4285f4, #1a73e8);
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
          margin-bottom: 20px;
        }

        .map-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(66, 133, 244, 0.4);
        }

        .map-embed {
          margin-bottom: 20px;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .json-container {
          background: var(--bg-tertiary);
          border-radius: 8px;
          overflow: hidden;
        }

        .json-title {
          padding: 12px 16px;
          background: var(--bg-hover);
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--text-primary);
          margin: 0;
          border-bottom: 1px solid var(--border-light);
        }

        .json-content {
          padding: 16px;
          margin: 0;
          font-family: 'Fira Code', 'Consolas', monospace;
          font-size: 0.8rem;
          color: var(--text-primary);
          overflow-x: auto;
          line-height: 1.5;
          max-height: 300px;
          overflow-y: auto;
        }

        @media (max-width: 768px) {
          .search-container {
            flex-direction: column;
          }

          .search-input-wrapper {
            min-width: 100%;
          }

          .search-button {
            width: 100%;
            justify-content: center;
          }

          .coord-value {
            font-size: 0.95rem;
          }
        }
      `})]})},tj={Brain:Td,Code2:Vs,Palette:G6,Zap:jy,GraduationCap:Sr,Newspaper:H6,Globe:Si,Database:Md,Server:zd,Cloud:Ig,Wrench:yi,Terminal:vy,Smartphone:Cd,Monitor:Ad,Cpu:ey,Layers:oy,Box:Zg,Settings:Ed,Shield:c8,Lock:ja,Key:d6,Search:Dr,Bookmark:Qg,BookOpen:hr,FileText:Er,Folder:X4,Image:ry,Video:D8,Music:R6,Camera:s4,Mic:z6,Play:Z6,Star:g8,Heart:i6,ThumbsUp:T8,MessageSquare:A6,Mail:Nd,Bell:Kg,Share2:r8,Send:my,Calendar:jn,Clock:Wg,MapPin:Cr,Home:l6,Building:Jg,Users:Us,Briefcase:kr,ShoppingCart:gy,CreditCard:ny,DollarSign:ay,TrendingUp:ji,BarChart3:gi,PieChart:wd,Activity:br,Target:Dd,Award:Ar,Gift:J4,Package:fy,Truck:xy,Lightbulb:cy,Rocket:kd,Flame:V4,Sparkles:jr,Coffee:b4,Wifi:R8,Download:iy,Upload:by,Link:uy,RefreshCw:Ms,Grid:n6,List:x6,Edit:p8,Trash2:M8,Copy:ty,Clipboard:Pg,Check:$g,X:Ls,Plus:$6,AlertCircle:f4,Info:c6,HelpCircle:p4,QrCode:py,Printer:hy,Gamepad2:Q4},ej=({data:a})=>{const[s,l]=U.useState(a.categories?.reduce((m,g)=>({...m,[g.name]:!0}),{})||{}),o={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.08}}},u={hidden:{opacity:0,y:20},visible:{opacity:1,y:0}},h=m=>{l(g=>({...g,[m]:!g[m]}))},f=m=>{window.open(m,"_blank","noopener,noreferrer")};return d.jsxs(Q.section,{className:"section bookmarks-section",variants:o,initial:"hidden",animate:"visible",children:[d.jsxs(Q.h2,{className:"section-title",variants:u,children:[d.jsx("span",{className:"title-icon",children:"🔖"}),a.title]}),d.jsx(Q.p,{className:"section-description",variants:u,children:a.description}),d.jsx(Q.div,{className:"categories-container",variants:o,children:a.categories?.map((m,g)=>{const y=tj[m.icon]||Si,x=s[m.name];return d.jsxs(Q.div,{className:"category-block",variants:u,children:[d.jsxs("button",{className:"category-header",onClick:()=>h(m.name),style:{"--category-color":m.color},children:[d.jsx("div",{className:"category-icon",style:{background:m.color},children:d.jsx(y,{size:20})}),d.jsx("span",{className:"category-name",children:m.name}),d.jsx("span",{className:"category-count",children:m.items?.length||0}),d.jsx("div",{className:"category-toggle",children:x?d.jsx(zr,{size:18}):d.jsx(Fg,{size:18})})]}),d.jsx(Q.div,{className:"category-items",initial:!1,animate:{height:x?"auto":0,opacity:x?1:0},transition:{duration:.3,ease:"easeInOut"},children:m.items?.map((b,j)=>d.jsxs(Q.div,{className:"bookmark-item",whileHover:{x:4},onClick:()=>f(b.url),children:[d.jsxs("div",{className:"bookmark-info",children:[d.jsx("h4",{className:"bookmark-title",children:b.title}),d.jsx("p",{className:"bookmark-description",children:b.description})]}),d.jsx("div",{className:"bookmark-action",children:d.jsx(Cs,{size:14})})]},j))})]},g)})}),d.jsx("style",{children:`
        .bookmarks-section {
          max-width: 1200px;
        }

        .section-title {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 1.75rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 12px;
          padding-bottom: 12px;
          border-bottom: 1px solid var(--border-light);
        }

        .title-icon {
          font-size: 1.5rem;
        }

        .section-description {
          color: var(--text-secondary);
          font-size: 0.95rem;
          margin-bottom: 24px;
        }

        .categories-container {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }

        .category-block {
          background: var(--bg-secondary);
          border: 1px solid var(--border-light);
          border-radius: 12px;
          overflow: hidden;
        }

        .category-header {
          display: flex;
          align-items: center;
          gap: 12px;
          width: 100%;
          padding: 16px 20px;
          background: transparent;
          border: none;
          cursor: pointer;
          transition: all 0.2s ease;
          text-align: left;
        }

        .category-header:hover {
          background: var(--bg-tertiary);
        }

        .category-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 10px;
          color: white;
          flex-shrink: 0;
        }

        .category-name {
          flex: 1;
          font-size: 1rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .category-count {
          padding: 4px 10px;
          background: var(--bg-tertiary);
          border-radius: 12px;
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--text-secondary);
        }

        .category-toggle {
          color: var(--text-tertiary);
          transition: transform 0.2s ease;
        }

        .category-items {
          overflow: hidden;
          border-top: 1px solid var(--border-light);
        }

        .bookmark-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 20px 12px 72px;
          cursor: pointer;
          transition: all 0.15s ease;
          border-bottom: 1px solid var(--border-light);
        }

        .bookmark-item:last-child {
          border-bottom: none;
        }

        .bookmark-item:hover {
          background: var(--bg-tertiary);
        }

        .bookmark-item:hover .bookmark-action {
          opacity: 1;
          color: var(--accent-blue);
        }

        .bookmark-info {
          flex: 1;
          min-width: 0;
        }

        .bookmark-title {
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--text-primary);
          margin-bottom: 2px;
        }

        .bookmark-description {
          font-size: 0.8rem;
          color: var(--text-tertiary);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .bookmark-action {
          color: var(--text-tertiary);
          opacity: 0;
          transition: all 0.15s ease;
          flex-shrink: 0;
        }

        @media (max-width: 900px) {
          .categories-container {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .bookmark-item {
            padding-left: 20px;
          }

          .category-icon {
            width: 36px;
            height: 36px;
          }
        }
      `})]})},nj={Brain:Td,Zap:jy,Server:zd,Wrench:yi},aj=({data:a})=>{const[s,l]=U.useState(a.categories?.reduce((m,g)=>({...m,[g.name]:!0}),{})||{}),o={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.08}}},u={hidden:{opacity:0,y:20},visible:{opacity:1,y:0}},h=m=>{l(g=>({...g,[m]:!g[m]}))},f=m=>{window.open(m,"_blank","noopener,noreferrer")};return d.jsxs(Q.section,{className:"section resources-section",variants:o,initial:"hidden",animate:"visible",children:[d.jsxs(Q.h2,{className:"section-title",variants:u,children:[d.jsx("span",{className:"title-icon",children:"📚"}),a.title]}),d.jsx(Q.p,{className:"section-description",variants:u,children:a.description}),d.jsx(Q.div,{className:"resources-list",variants:o,children:a.categories?.map((m,g)=>{const y=nj[m.icon]||Si,x=s[m.name];return d.jsxs(Q.div,{className:"resource-category",variants:u,children:[d.jsxs("button",{className:"category-header",onClick:()=>h(m.name),style:{"--category-color":m.color},children:[d.jsx("div",{className:"category-icon",style:{background:m.color},children:d.jsx(y,{size:20})}),d.jsx("h3",{className:"category-name",children:m.name}),d.jsxs("span",{className:"category-count",children:[m.items?.length||0,"개"]}),d.jsx("div",{className:"category-toggle",children:x?d.jsx(zr,{size:18}):d.jsx(Fg,{size:18})})]}),d.jsx(Q.div,{className:"category-items",initial:!1,animate:{height:x?"auto":0,opacity:x?1:0},transition:{duration:.3,ease:"easeInOut"},children:m.items?.map((b,j)=>d.jsxs(Q.div,{className:"resource-item",whileHover:{x:4},onClick:()=>f(b.docUrl),children:[d.jsx("div",{className:"resource-icon",children:d.jsx(Er,{size:18})}),d.jsxs("div",{className:"resource-info",children:[d.jsx("h4",{className:"resource-title",children:b.title}),d.jsx("p",{className:"resource-description",children:b.description}),d.jsxs("div",{className:"resource-meta",children:[b.createdDate&&d.jsxs("span",{className:"resource-date",children:[d.jsx(jn,{size:10}),"등록일: ",b.createdDate]}),b.tags&&b.tags.map((k,C)=>d.jsxs("span",{className:"tag",children:[d.jsx(yy,{size:10}),k]},C))]})]}),d.jsx("div",{className:"resource-action",children:d.jsx(Cs,{size:14})})]},j))})]},g)})}),d.jsx("style",{children:`
        .resources-section {
          max-width: 900px;
        }

        .section-title {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 1.75rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 12px;
          padding-bottom: 12px;
          border-bottom: 1px solid var(--border-light);
        }

        .title-icon {
          font-size: 1.5rem;
        }

        .section-description {
          color: var(--text-secondary);
          font-size: 0.95rem;
          margin-bottom: 24px;
        }

        .resources-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .resource-category {
          background: var(--bg-secondary);
          border: 1px solid var(--border-light);
          border-radius: 12px;
          overflow: hidden;
        }

        .category-header {
          display: flex;
          align-items: center;
          gap: 12px;
          width: 100%;
          padding: 16px 20px;
          background: transparent;
          border: none;
          cursor: pointer;
          transition: all 0.2s ease;
          text-align: left;
        }

        .category-header:hover {
          background: var(--bg-tertiary);
        }

        .category-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 10px;
          color: white;
          flex-shrink: 0;
        }

        .category-name {
          flex: 1;
          font-size: 1rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .category-count {
          padding: 4px 12px;
          background: var(--bg-tertiary);
          border-radius: 12px;
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--text-secondary);
        }

        .category-toggle {
          color: var(--text-tertiary);
          transition: transform 0.2s ease;
        }

        .category-items {
          overflow: hidden;
          border-top: 1px solid var(--border-light);
        }

        .resource-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 14px 20px 14px 72px;
          cursor: pointer;
          transition: all 0.15s ease;
          border-bottom: 1px solid var(--border-light);
        }

        .resource-item:last-child {
          border-bottom: none;
        }

        .resource-item:hover {
          background: var(--bg-tertiary);
        }

        .resource-item:hover .resource-action {
          opacity: 1;
          color: var(--accent-blue);
        }

        .resource-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border-radius: 6px;
          background: var(--bg-tertiary);
          color: var(--text-secondary);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .resource-item:hover .resource-icon {
          background: var(--accent-blue);
          color: white;
        }

        .resource-info {
          flex: 1;
          min-width: 0;
        }

        .resource-title {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 4px;
        }

        .resource-description {
          font-size: 0.8rem;
          color: var(--text-tertiary);
          line-height: 1.4;
          margin-bottom: 8px;
        }

        .resource-meta {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 8px;
        }

        .resource-date {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 3px 10px;
          background: var(--bg-tertiary);
          border-radius: 4px;
          font-size: 0.7rem;
          color: var(--text-tertiary);
        }

        .tag {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 3px 10px;
          background: var(--bg-tertiary);
          border-radius: 4px;
          font-size: 0.7rem;
          color: var(--text-secondary);
        }

        .resource-action {
          color: var(--text-tertiary);
          opacity: 0;
          transition: all 0.15s ease;
          flex-shrink: 0;
          margin-top: 4px;
        }

        @media (max-width: 768px) {
          .resource-item {
            padding-left: 20px;
          }

          .category-icon {
            width: 36px;
            height: 36px;
          }
        }
      `})]})},ij="dldbsgml0611!",sj="https://script.google.com/macros/s/AKfycbz8J8B9bcqimeLoy_5VSpKgJiHHF5ajwocNR6bYylhju3TrVOiFoL6FVYqL5a65rQQ36g/exec",lj=()=>{const[a,s]=U.useState(!1),[l,o]=U.useState(!0),[u,h]=U.useState(""),[f,m]=U.useState(!1),[g,y]=U.useState(""),[x,b]=U.useState([]),[j,k]=U.useState(!1),[C,B]=U.useState(""),K={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1}}},G={hidden:{opacity:0,y:20},visible:{opacity:1,y:0}},J=async()=>{k(!0),B("");try{const nt=await(await fetch(`${sj}?action=getLogs`)).json();nt.success?b(nt.logs||[]):B("로그 데이터를 불러올 수 없습니다.")}catch(q){console.error("로그 조회 실패:",q),B("로그 데이터를 불러오는 중 오류가 발생했습니다.")}finally{k(!1)}};U.useEffect(()=>{a&&J()},[a]);const Y=q=>{if(!q)return{date:"unknown",hour:null,formatted:"-"};let nt;const ot=String(q);if(ot.includes("T")?nt=new Date(ot):ot.includes("-")&&ot.includes(":")?nt=new Date(ot.replace(" ","T")+"+09:00"):nt=new Date(ot),isNaN(nt.getTime()))return{date:"unknown",hour:null,formatted:ot};const ht=new Date(nt.toLocaleString("en-US",{timeZone:"Asia/Seoul"})),bt=ht.getFullYear(),se=String(ht.getMonth()+1).padStart(2,"0"),$t=String(ht.getDate()).padStart(2,"0"),Ft=ht.getHours(),D=String(ht.getMinutes()).padStart(2,"0");return String(ht.getSeconds()).padStart(2,"0"),{date:`${bt}-${se}-${$t}`,dateLabel:`${se}/${$t}`,hour:Ft,formatted:`${se}/${$t} ${String(Ft).padStart(2,"0")}:${D}`}},H=U.useMemo(()=>{if(x.length===0)return null;const q={},nt={},ot={},ht={},bt={desktop:0,mobile:0,tablet:0},se=new Set;x.forEach(at=>{const lt=Y(at.datetime),w=at.section||"unknown";w!=="_initial_load"&&(q[w]=(q[w]||0)+1),lt.date!=="unknown"&&(nt[lt.date]||(nt[lt.date]={count:0,label:lt.dateLabel}),nt[lt.date].count++),lt.hour!==null&&(ot[lt.hour]=(ot[lt.hour]||0)+1);const O=at.ip||"unknown";O!=="unknown"&&(ht[O]=(ht[O]||0)+1);const Z=(at.userAgent||"").toLowerCase();Z.includes("mobile")||Z.includes("android")||Z.includes("iphone")?bt.mobile++:Z.includes("tablet")||Z.includes("ipad")?bt.tablet++:bt.desktop++,at.sessionId&&se.add(at.sessionId)});const $t=Object.entries(q).sort((at,lt)=>lt[1]-at[1]).slice(0,8),D=Object.keys(nt).sort().slice(-7).map(at=>({date:nt[at].label||at.slice(5),count:nt[at].count})),X=Object.entries(ot).sort((at,lt)=>lt[1]-at[1])[0],I=Object.entries(ht).sort((at,lt)=>lt[1]-at[1]).slice(0,10);return{totalViews:x.length,uniqueVisitors:se.size,topSections:$t,dailyData:D,deviceCounts:bt,topIPs:I,uniqueIPs:Object.keys(ht).length,peakHour:X?`${X[0]}시`:"-",averageDaily:D.length>0?Math.round(D.reduce((at,lt)=>at+lt.count,0)/D.length):0}},[x]),F=q=>({about:"소개",techStack:"기술 스택",experience:"경력",projects:"프로젝트",webApps:"라이브 데모",education:"학력",certifications:"자격증",resources:"리소스",bookmarks:"북마크"})[q]||q,st=q=>{q.preventDefault(),u===ij?(s(!0),o(!1),h(""),y("")):y("비밀번호가 올바르지 않습니다.")},$=()=>{o(!1)};return a?j?d.jsxs(Q.section,{className:"section analytics-section",variants:K,initial:"hidden",animate:"visible",children:[d.jsxs(Q.h2,{className:"section-title",variants:G,children:[d.jsx("span",{className:"title-icon",children:"📊"}),"방문자 분석"]}),d.jsxs("div",{className:"loading-state",children:[d.jsx(Ms,{size:32,className:"spin"}),d.jsx("p",{children:"데이터를 불러오는 중..."})]}),d.jsx("style",{children:rr})]}):C?d.jsxs(Q.section,{className:"section analytics-section",variants:K,initial:"hidden",animate:"visible",children:[d.jsxs(Q.h2,{className:"section-title",variants:G,children:[d.jsx("span",{className:"title-icon",children:"📊"}),"방문자 분석"]}),d.jsxs("div",{className:"error-state",children:[d.jsx("p",{children:C}),d.jsxs("button",{className:"retry-btn",onClick:J,children:[d.jsx(Ms,{size:16}),"다시 시도"]})]}),d.jsx("style",{children:rr})]}):d.jsxs("section",{className:"section analytics-section",children:[d.jsxs("div",{className:"section-header",children:[d.jsxs("h2",{className:"section-title",children:[d.jsx("span",{className:"title-icon",children:"📊"}),"방문자 분석"]}),d.jsxs("button",{className:"refresh-btn",onClick:J,disabled:j,children:[d.jsx(Ms,{size:16,className:j?"spin":""}),"새로고침"]})]}),H&&d.jsxs(d.Fragment,{children:[d.jsxs("div",{className:"stats-grid",children:[d.jsxs("div",{className:"stat-card",children:[d.jsx("div",{className:"stat-icon views",children:d.jsx(br,{size:24})}),d.jsxs("div",{className:"stat-content",children:[d.jsx("span",{className:"stat-value",children:H.totalViews.toLocaleString()}),d.jsx("span",{className:"stat-label",children:"총 페이지뷰"})]})]}),d.jsxs("div",{className:"stat-card",children:[d.jsx("div",{className:"stat-icon visitors",children:d.jsx(Us,{size:24})}),d.jsxs("div",{className:"stat-content",children:[d.jsx("span",{className:"stat-value",children:H.uniqueVisitors.toLocaleString()}),d.jsx("span",{className:"stat-label",children:"순 방문자"})]})]}),d.jsxs("div",{className:"stat-card",children:[d.jsx("div",{className:"stat-icon average",children:d.jsx(ji,{size:24})}),d.jsxs("div",{className:"stat-content",children:[d.jsx("span",{className:"stat-value",children:H.averageDaily}),d.jsx("span",{className:"stat-label",children:"일평균 조회"})]})]}),d.jsxs("div",{className:"stat-card",children:[d.jsx("div",{className:"stat-icon peak",children:d.jsx(Wg,{size:24})}),d.jsxs("div",{className:"stat-content",children:[d.jsx("span",{className:"stat-value",children:H.peakHour}),d.jsx("span",{className:"stat-label",children:"피크 시간대"})]})]})]}),d.jsxs("div",{className:"charts-grid",children:[d.jsxs("div",{className:"chart-card",children:[d.jsxs("h3",{className:"chart-title",children:[d.jsx(gi,{size:18}),"인기 섹션 TOP 8"]}),d.jsx("div",{className:"bar-chart",children:H.topSections.map(([q,nt],ot)=>{const ht=H.topSections[0][1],bt=nt/ht*100;return d.jsxs("div",{className:"bar-item",children:[d.jsxs("div",{className:"bar-label",children:[d.jsxs("span",{className:"bar-rank",children:["#",ot+1]}),d.jsx("span",{className:"bar-name",children:F(q)}),d.jsx("span",{className:"bar-count",children:nt})]}),d.jsx("div",{className:"bar-track",children:d.jsx(Q.div,{className:"bar-fill",initial:{width:0},animate:{width:`${bt}%`},transition:{delay:ot*.1,duration:.5}})})]},q)})})]}),d.jsxs("div",{className:"chart-card",children:[d.jsxs("h3",{className:"chart-title",children:[d.jsx(jn,{size:18}),"최근 7일 방문 추이"]}),d.jsx("div",{className:"line-chart",children:H.dailyData.map((q,nt)=>{const ot=Math.max(...H.dailyData.map(bt=>bt.count)),ht=ot>0?q.count/ot*100:0;return d.jsxs("div",{className:"line-bar-item",children:[d.jsx(Q.div,{className:"line-bar",initial:{height:0},animate:{height:`${Math.max(ht,5)}%`},transition:{delay:nt*.1,duration:.5},children:d.jsx("span",{className:"line-bar-value",children:q.count})}),d.jsx("span",{className:"line-bar-label",children:q.date})]},q.date)})})]}),d.jsxs("div",{className:"chart-card device-chart",children:[d.jsxs("h3",{className:"chart-title",children:[d.jsx(wd,{size:18}),"디바이스 분포"]}),d.jsxs("div",{className:"device-stats",children:[d.jsxs("div",{className:"device-item",children:[d.jsx("div",{className:"device-icon desktop",children:d.jsx(Ad,{size:24})}),d.jsxs("div",{className:"device-info",children:[d.jsx("span",{className:"device-name",children:"데스크톱"}),d.jsx("span",{className:"device-count",children:H.deviceCounts.desktop})]}),d.jsx("div",{className:"device-bar",children:d.jsx(Q.div,{className:"device-fill desktop",initial:{width:0},animate:{width:`${H.deviceCounts.desktop/H.totalViews*100}%`},transition:{duration:.5}})})]}),d.jsxs("div",{className:"device-item",children:[d.jsx("div",{className:"device-icon mobile",children:d.jsx(Cd,{size:24})}),d.jsxs("div",{className:"device-info",children:[d.jsx("span",{className:"device-name",children:"모바일"}),d.jsx("span",{className:"device-count",children:H.deviceCounts.mobile})]}),d.jsx("div",{className:"device-bar",children:d.jsx(Q.div,{className:"device-fill mobile",initial:{width:0},animate:{width:`${H.deviceCounts.mobile/H.totalViews*100}%`},transition:{duration:.5}})})]}),d.jsxs("div",{className:"device-item",children:[d.jsx("div",{className:"device-icon tablet",children:d.jsx(E4,{size:24})}),d.jsxs("div",{className:"device-info",children:[d.jsx("span",{className:"device-name",children:"태블릿"}),d.jsx("span",{className:"device-count",children:H.deviceCounts.tablet})]}),d.jsx("div",{className:"device-bar",children:d.jsx(Q.div,{className:"device-fill tablet",initial:{width:0},animate:{width:`${H.deviceCounts.tablet/H.totalViews*100}%`},transition:{duration:.5}})})]})]})]})]}),d.jsxs("div",{className:"chart-card ip-chart",children:[d.jsxs("h3",{className:"chart-title",children:[d.jsx(L6,{size:18}),"IP 주소별 접근 횟수 TOP 10",d.jsxs("span",{className:"ip-unique-badge",children:["고유 IP: ",H.uniqueIPs]})]}),d.jsxs("div",{className:"ip-list",children:[H.topIPs.map(([q,nt],ot)=>{const ht=H.topIPs[0][1],bt=nt/ht*100;return d.jsxs("div",{className:"ip-item",children:[d.jsxs("div",{className:"ip-label",children:[d.jsxs("span",{className:"ip-rank",children:["#",ot+1]}),d.jsx("span",{className:"ip-address",children:q}),d.jsxs("span",{className:"ip-count",children:[nt,"회"]})]}),d.jsx("div",{className:"ip-bar-track",children:d.jsx(Q.div,{className:"ip-bar-fill",initial:{width:0},animate:{width:`${bt}%`},transition:{delay:ot*.08,duration:.5}})})]},q)}),H.topIPs.length===0&&d.jsx("p",{className:"no-ip-data",children:"IP 데이터가 없습니다."})]})]}),d.jsxs("div",{className:"recent-logs",children:[d.jsxs("h3",{className:"chart-title",children:[d.jsx(br,{size:18}),"최근 접속 로그 (10건)"]}),d.jsx("div",{className:"logs-table-wrapper",children:d.jsxs("div",{className:"logs-table",children:[d.jsxs("div",{className:"logs-header",children:[d.jsx("span",{children:"시간"}),d.jsx("span",{children:"섹션"}),d.jsx("span",{children:"IP 주소"}),d.jsx("span",{children:"화면크기"}),d.jsx("span",{children:"User Agent"})]}),x.slice(-10).reverse().map((q,nt)=>{const ot=Y(q.datetime);return d.jsxs("div",{className:"log-row",children:[d.jsx("span",{className:"log-time",children:ot.formatted}),d.jsx("span",{className:"log-section",children:F(q.section)}),d.jsx("span",{className:"log-ip",children:q.ip||"-"}),d.jsx("span",{className:"log-screen",children:q.screenSize||"-"}),d.jsx("span",{className:"log-ua",title:q.userAgent,children:q.userAgent||"-"})]},nt)})]})})]})]}),!H&&d.jsxs("div",{className:"no-data",children:[d.jsx(gi,{size:48}),d.jsx("p",{children:"아직 수집된 데이터가 없습니다."})]}),d.jsx("style",{children:rr})]}):d.jsxs(Q.section,{className:"section analytics-section",variants:K,initial:"hidden",animate:"visible",children:[d.jsxs(Q.h2,{className:"section-title",variants:G,children:[d.jsx("span",{className:"title-icon",children:"📊"}),"방문자 분석"]}),d.jsx(wa,{children:l&&d.jsx(Q.div,{className:"password-modal-overlay",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:d.jsxs(Q.div,{className:"password-modal",initial:{opacity:0,scale:.9,y:20},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.9,y:20},children:[d.jsx("button",{className:"modal-close-btn",onClick:$,children:d.jsx(Ls,{size:20})}),d.jsx("div",{className:"modal-icon",children:d.jsx(ja,{size:32})}),d.jsx("h3",{className:"modal-title",children:"비밀번호 입력"}),d.jsx("p",{className:"modal-description",children:"방문자 분석 대시보드에 접근하려면 비밀번호를 입력하세요."}),d.jsxs("form",{onSubmit:st,children:[d.jsxs("div",{className:"password-input-wrapper",children:[d.jsx("input",{type:f?"text":"password",value:u,onChange:q=>h(q.target.value),placeholder:"비밀번호",className:"password-input",autoFocus:!0}),d.jsx("button",{type:"button",className:"toggle-password-btn",onClick:()=>m(!f),children:f?d.jsx(sy,{size:18}):d.jsx(ly,{size:18})})]}),g&&d.jsx("p",{className:"error-message",children:g}),d.jsx("button",{type:"submit",className:"submit-btn",children:"확인"})]})]})})}),!l&&d.jsxs(Q.div,{className:"auth-required",variants:G,children:[d.jsx(ja,{size:48}),d.jsx("h3",{children:"인증이 필요합니다"}),d.jsx("button",{className:"retry-auth-btn",onClick:()=>o(!0),children:"비밀번호 입력"})]}),d.jsx("style",{children:rr})]})},rr=`
  .analytics-section {
    max-width: 1200px;
  }

  .section-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
  }

  .section-title {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 1.75rem;
    font-weight: 700;
    color: var(--text-primary);
    margin: 0;
    padding-bottom: 12px;
    border-bottom: 1px solid var(--border-light);
  }

  .title-icon {
    font-size: 1.5rem;
  }

  .refresh-btn {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 8px 16px;
    background: var(--bg-tertiary);
    border: 1px solid var(--border-color);
    border-radius: 8px;
    color: var(--text-secondary);
    font-size: 0.85rem;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .refresh-btn:hover:not(:disabled) {
    background: var(--bg-secondary);
    border-color: var(--accent-blue);
    color: var(--accent-blue);
  }

  .refresh-btn:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .spin {
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    to { transform: rotate(360deg); }
  }

  /* Stats Grid */
  .stats-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
    margin-bottom: 24px;
  }

  .stat-card {
    background: var(--bg-secondary);
    border: 1px solid var(--border-light);
    border-radius: 12px;
    padding: 20px;
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .stat-icon {
    width: 48px;
    height: 48px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .stat-icon.views {
    background: linear-gradient(135deg, #3b82f6, #1d4ed8);
    color: white;
  }

  .stat-icon.visitors {
    background: linear-gradient(135deg, #10b981, #059669);
    color: white;
  }

  .stat-icon.average {
    background: linear-gradient(135deg, #8b5cf6, #6d28d9);
    color: white;
  }

  .stat-icon.peak {
    background: linear-gradient(135deg, #f59e0b, #d97706);
    color: white;
  }

  .stat-content {
    display: flex;
    flex-direction: column;
  }

  .stat-value {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--text-primary);
  }

  .stat-label {
    font-size: 0.85rem;
    color: var(--text-secondary);
  }

  /* Charts Grid */
  .charts-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    margin-bottom: 24px;
  }

  .chart-card {
    background: var(--bg-secondary);
    border: 1px solid var(--border-light);
    border-radius: 12px;
    padding: 20px;
  }

  .chart-card.device-chart {
    grid-column: span 2;
  }

  .chart-title {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 1rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 16px;
    padding-bottom: 12px;
    border-bottom: 1px solid var(--border-light);
  }

  /* Bar Chart */
  .bar-chart {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .bar-item {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .bar-label {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 0.85rem;
  }

  .bar-rank {
    color: var(--text-tertiary);
    width: 24px;
  }

  .bar-name {
    color: var(--text-primary);
    flex: 1;
  }

  .bar-count {
    color: var(--accent-blue);
    font-weight: 600;
  }

  .bar-track {
    height: 8px;
    background: var(--bg-tertiary);
    border-radius: 4px;
    overflow: hidden;
  }

  .bar-fill {
    height: 100%;
    background: linear-gradient(90deg, #3b82f6, #8b5cf6);
    border-radius: 4px;
  }

  /* Line Chart */
  .line-chart {
    display: flex;
    align-items: flex-end;
    justify-content: space-around;
    height: 200px;
    gap: 8px;
  }

  .line-bar-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    height: 100%;
  }

  .line-bar {
    width: 100%;
    max-width: 40px;
    background: linear-gradient(180deg, #3b82f6, #8b5cf6);
    border-radius: 4px 4px 0 0;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding-top: 8px;
    margin-top: auto;
  }

  .line-bar-value {
    font-size: 0.75rem;
    font-weight: 600;
    color: white;
  }

  .line-bar-label {
    font-size: 0.75rem;
    color: var(--text-secondary);
    margin-top: 8px;
  }

  /* Device Stats */
  .device-stats {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }

  .device-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
  }

  .device-icon {
    width: 56px;
    height: 56px;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .device-icon.desktop {
    background: linear-gradient(135deg, #3b82f6, #1d4ed8);
    color: white;
  }

  .device-icon.mobile {
    background: linear-gradient(135deg, #10b981, #059669);
    color: white;
  }

  .device-icon.tablet {
    background: linear-gradient(135deg, #f59e0b, #d97706);
    color: white;
  }

  .device-info {
    text-align: center;
  }

  .device-name {
    display: block;
    font-size: 0.9rem;
    color: var(--text-primary);
    font-weight: 500;
  }

  .device-count {
    display: block;
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--text-primary);
  }

  .device-bar {
    width: 100%;
    height: 6px;
    background: var(--bg-tertiary);
    border-radius: 3px;
    overflow: hidden;
  }

  .device-fill {
    height: 100%;
    border-radius: 3px;
  }

  .device-fill.desktop {
    background: #3b82f6;
  }

  .device-fill.mobile {
    background: #10b981;
  }

  .device-fill.tablet {
    background: #f59e0b;
  }

  /* IP Chart */
  .ip-chart {
    grid-column: span 2;
  }

  .ip-unique-badge {
    margin-left: auto;
    font-size: 0.75rem;
    font-weight: 500;
    color: var(--text-tertiary);
    background: var(--bg-tertiary);
    padding: 2px 10px;
    border-radius: 12px;
  }

  .ip-list {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .ip-item {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .ip-label {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 0.85rem;
  }

  .ip-rank {
    color: var(--text-tertiary);
    width: 28px;
    font-weight: 600;
  }

  .ip-address {
    color: var(--text-primary);
    font-family: monospace;
    font-size: 0.82rem;
    flex: 1;
  }

  .ip-count {
    color: #10b981;
    font-weight: 600;
  }

  .ip-bar-track {
    height: 8px;
    background: var(--bg-tertiary);
    border-radius: 4px;
    overflow: hidden;
  }

  .ip-bar-fill {
    height: 100%;
    background: linear-gradient(90deg, #10b981, #3b82f6);
    border-radius: 4px;
  }

  .no-ip-data {
    color: var(--text-tertiary);
    font-size: 0.85rem;
    text-align: center;
    padding: 20px;
  }

  /* Recent Logs */
  .recent-logs {
    background: var(--bg-secondary);
    border: 1px solid var(--border-light);
    border-radius: 12px;
    padding: 20px;
  }

  .logs-table-wrapper {
    overflow-x: auto;
  }

  .logs-table {
    display: flex;
    flex-direction: column;
    gap: 8px;
    min-width: 800px;
  }

  .logs-header {
    display: grid;
    grid-template-columns: 100px 80px 130px 100px 1fr;
    gap: 12px;
    padding: 8px 12px;
    background: var(--bg-tertiary);
    border-radius: 6px;
    font-size: 0.8rem;
    font-weight: 600;
    color: var(--text-secondary);
  }

  .log-row {
    display: grid;
    grid-template-columns: 100px 80px 130px 100px 1fr;
    gap: 12px;
    padding: 10px 12px;
    background: var(--bg-primary);
    border: 1px solid var(--border-light);
    border-radius: 6px;
    font-size: 0.8rem;
    transition: all 0.2s ease;
  }

  .log-row:hover {
    background: var(--bg-tertiary);
  }

  .log-time {
    color: var(--text-primary);
    font-family: monospace;
    font-size: 0.75rem;
  }

  .log-section {
    color: var(--accent-blue);
    font-weight: 500;
  }

  .log-ip {
    color: var(--text-secondary);
    font-family: monospace;
    font-size: 0.75rem;
  }

  .log-screen {
    color: var(--text-secondary);
    font-size: 0.75rem;
  }

  .log-ua {
    color: var(--text-tertiary);
    font-size: 0.7rem;
    word-break: break-all;
  }

  /* States */
  .loading-state,
  .error-state,
  .no-data,
  .auth-required {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 60px 20px;
    color: var(--text-secondary);
    gap: 16px;
    text-align: center;
  }

  .retry-btn,
  .retry-auth-btn {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 10px 20px;
    background: var(--accent-blue);
    border: none;
    border-radius: 8px;
    color: white;
    font-size: 0.9rem;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .retry-btn:hover,
  .retry-auth-btn:hover {
    opacity: 0.9;
    transform: translateY(-2px);
  }

  /* Password Modal (same as WebAppsSection) */
  .password-modal-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(4px);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    padding: 20px;
  }

  .password-modal {
    background: var(--bg-secondary);
    border: 1px solid var(--border-color);
    border-radius: 16px;
    padding: 32px;
    width: 100%;
    max-width: 400px;
    position: relative;
    box-shadow: var(--shadow-lg);
  }

  .modal-close-btn {
    position: absolute;
    top: 16px;
    right: 16px;
    background: transparent;
    border: none;
    color: var(--text-tertiary);
    cursor: pointer;
    padding: 4px;
    border-radius: 6px;
    transition: all 0.2s ease;
  }

  .modal-close-btn:hover {
    background: var(--bg-tertiary);
    color: var(--text-primary);
  }

  .modal-icon {
    width: 64px;
    height: 64px;
    margin: 0 auto 16px;
    background: linear-gradient(135deg, #3b82f6, #8b5cf6);
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
  }

  .modal-title {
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--text-primary);
    text-align: center;
    margin-bottom: 8px;
  }

  .modal-description {
    font-size: 0.9rem;
    color: var(--text-secondary);
    text-align: center;
    margin-bottom: 24px;
  }

  .password-input-wrapper {
    position: relative;
    margin-bottom: 16px;
  }

  .password-input {
    width: 100%;
    padding: 12px 48px 12px 16px;
    background: var(--bg-tertiary);
    border: 1px solid var(--border-color);
    border-radius: 10px;
    font-size: 1rem;
    color: var(--text-primary);
    transition: all 0.2s ease;
  }

  .password-input:focus {
    outline: none;
    border-color: var(--accent-blue);
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
  }

  .password-input::placeholder {
    color: var(--text-tertiary);
  }

  .toggle-password-btn {
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    background: transparent;
    border: none;
    color: var(--text-tertiary);
    cursor: pointer;
    padding: 4px;
  }

  .toggle-password-btn:hover {
    color: var(--text-secondary);
  }

  .error-message {
    color: #ef4444;
    font-size: 0.85rem;
    text-align: center;
    margin-bottom: 16px;
  }

  .submit-btn {
    width: 100%;
    padding: 12px;
    background: linear-gradient(135deg, #3b82f6, #8b5cf6);
    border: none;
    border-radius: 10px;
    color: white;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .submit-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
  }

  @media (max-width: 1024px) {
    .stats-grid {
      grid-template-columns: repeat(2, 1fr);
    }
    
    .charts-grid {
      grid-template-columns: 1fr;
    }
    
    .chart-card.device-chart {
      grid-column: span 1;
    }

    .ip-chart {
      grid-column: span 1;
    }
    
    .device-stats {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 768px) {
    .stats-grid {
      grid-template-columns: 1fr;
    }
    
    .logs-header,
    .log-row {
      grid-template-columns: 1fr 1fr;
    }
    
    .logs-header span:nth-child(3),
    .logs-header span:nth-child(4),
    .log-row span:nth-child(3),
    .log-row span:nth-child(4) {
      display: none;
    }
  }
`,rj="1Wjw9wakam_vAf2rPF3fkBABxCE3EpWqN9LPmGBu_jeU",Qe={PROFILE:"profile",ABOUT:"about",TECH_STACK:"techStack",EXPERIENCE:"Experience",PROJECTS:"projects",EDUCATION:"Education",CERTIFICATIONS:"Certifications",BOOKMARKS:"bookmarks",LIVE_DEMO:"liveDemo",INTERNAL_TOOLS:"internalTools",RESOURCES:"Resources"},oj=a=>`https://docs.google.com/spreadsheets/d/${rj}/gviz/tq?tqx=out:csv&sheet=${encodeURIComponent(a)}&headers=1`;function cj(a){const s=[];let l=[],o="",u=!1;for(let h=0;h<a.length;h++){const f=a[h],m=a[h+1];u?f==='"'&&m==='"'?(o+='"',h++):f==='"'?u=!1:o+=f:f==='"'?u=!0:f===","?(l.push(o.trim()),o=""):f===`
`||f==="\r"&&m===`
`?(l.push(o.trim()),l.length>0&&l.some(g=>g!=="")&&s.push(l),l=[],o="",f==="\r"&&h++):o+=f}return(o||l.length>0)&&(l.push(o.trim()),l.some(h=>h!=="")&&s.push(l)),s}function uj(a){if(a.length<2)return[];const s=a[0],l=[];for(let o=1;o<a.length;o++){const u=a[o],h={};s.forEach((f,m)=>{h[f]=u[m]||""}),l.push(h)}return l}async function Ze(a){try{const s=oj(a),l=await fetch(s);if(!l.ok)throw new Error(`HTTP error! status: ${l.status}`);const o=await l.text(),u=cj(o);return uj(u)}catch(s){throw console.error(`Error fetching sheet "${a}":`,s),s}}function wy(a){return a?a.split(/\||\r?\n/).map(s=>s.trim()).filter(s=>s):[]}function _r(a){return a?a.split(",").map(s=>s.trim()).filter(s=>s):[]}function dj(a){if(!a||a.length===0)return null;const s=a[0];return{name:s.이름||"",role:s["직책/역할"]||"",email:s.이메일||"",location:s.지역||"",bio:s.자기소개||"",profileImage:s.프로필이미지URL||"",social:{email:s.이메일||""}}}function fj(a){if(!a||a.length===0)return{title:"About Me",blocks:[]};const s=[];return a.forEach(l=>{const o=l.섹션제목||"",u=l.내용||"";o&&s.push({type:"heading",value:o});const h=wy(u);o.includes("Competencies")||o.includes("역량")?s.push({type:"list",items:h}):h.forEach(f=>{s.push({type:"text",value:f})})}),{title:"About Me",blocks:s}}function hj(a){if(!a||a.length===0)return{title:"Tech Stack",categories:[]};const s=new Map;return a.forEach(l=>{const o=l.분류||"",u=l.아이콘||"",h=l.기술명||"",f=parseInt(l["숙련도(100점)"]||"0",10);if(!o||!h)return;const m=l.표시여부;m&&m.toUpperCase()==="FALSE"||(s.has(o)||s.set(o,{name:o,icon:u,items:[]}),s.get(o).items.push({name:h,level:f}))}),{title:"Tech Stack",categories:Array.from(s.values())}}function pj(a){return!a||a.length===0?{title:"Experience",items:[]}:{title:"Experience",items:a.filter(l=>{if(!l.회사명)return!1;const o=l.표시여부;return!(o&&o.toUpperCase()==="FALSE")}).map(l=>({company:l.회사명||"",role:l.직책||"",period:l.근무기간||"",description:l.한줄설명||"",tasks:wy(l.담당업무||""),techStack:_r(l.사용기술||"")}))}}function mj(a){return!a||a.length===0?{title:"Projects",items:[]}:{title:"Projects",items:a.filter(l=>{if(!l.프로젝트명)return!1;const o=l.표시여부;return!(o&&o.toUpperCase()==="FALSE")}).map(l=>{const o=[],u=l.개요||"";u&&(o.push({type:"heading",value:"프로젝트 개요"}),o.push({type:"text",value:u}));const h=l.주요기능||"";if(h){const x=h.split(/\r?\n/).map(b=>b.trim()).filter(b=>b);x.length>0&&(o.push({type:"heading",value:"주요 기능"}),o.push({type:"list",items:x}))}const f=l.핵심포인트||"",m=l.아이콘||"💡";if(f){const x=f.split(/\r?\n/).map(b=>b.trim()).filter(b=>b);x.length>0&&o.push({type:"callout",icon:m,items:x})}const g=(l.이미지URL||"").split(/[|\n]/).map(x=>x.trim()).filter(x=>x);g.length>0&&(o.push({type:"heading",value:"결과물"}),g.forEach((x,b)=>{o.push({type:"image",value:x,caption:`${l.프로젝트명} 화면 ${g.length>1?b+1:""}`.trim()})}));const y=(l.영상URL||"").split(/[|\n]/).map(x=>x.trim()).filter(x=>x);return y.length>0&&(g.length===0&&o.push({type:"heading",value:"결과물"}),y.forEach((x,b)=>{o.push({type:"video",value:x,caption:`${l.프로젝트명} 영상 ${y.length>1?b+1:""}`.trim()})})),{title:l.프로젝트명||"",company:l.회사||"",period:l.기간||"",role:l.역할||"",description:l.한줄설명||"",techStack:_r(l.기술스택||""),blocks:o,links:{}}})}}function gj(a){return!a||a.length===0?{title:"Education",items:[]}:{title:"Education",items:a.filter(l=>{if(!l.학교명)return!1;const o=l.표시여부;return!(o&&o.toUpperCase()==="FALSE")}).map(l=>({location:l.지역||"",school:l.학교명||"",major:l.전공||"",degree:l.학위||"",period:l.기간||"",description:l.비고||"",type:l.구분||"university"}))}}function yj(a){return!a||a.length===0?{title:"Certifications",items:[]}:{title:"Certifications",items:a.filter(l=>{if(!l.자격증명)return!1;const o=l.표시여부;return!(o&&o.toUpperCase()==="FALSE")}).map(l=>({name:l.자격증명||"",issuer:l.발급기관||"",date:l.취득일||"",icon:l.아이콘||"📜"}))}}function vj(a){if(!a||a.length===0)return{title:"Bookmarks",description:"",categories:[]};const s=new Map;return a.filter(l=>{if(!l.사이트명)return!1;const o=l.표시여부;return!(o&&o.toUpperCase()==="FALSE")}).forEach(l=>{const o=l.카테고리||"",u=l.카테고리아이콘||"",h=l.카테고리색상||"#8b5cf6";s.has(o)||s.set(o,{name:o,icon:u,color:h,items:[]}),s.get(o).items.push({title:l.사이트명||"",url:l.URL||"",description:l.설명||""})}),{title:"Bookmarks",description:"관심 있는 웹사이트들을 분야별로 정리했습니다.",categories:Array.from(s.values())}}function xj(a){return!a||a.length===0?{title:"Live Demo",description:"",items:[]}:{title:"Live Demo",description:"직접 제작하여 배포한 웹 애플리케이션들입니다. 카드를 클릭하면 새 창에서 실행됩니다.",items:a.filter(l=>{if(!l.제목)return!1;const o=l.표시여부;return!(o&&o.toUpperCase()==="FALSE")}).map(l=>({title:l.제목||"",description:l.설명||"",url:l.URL||"",thumbnail:l.썸네일URL||"",techStack:_r(l.기술스택||""),platform:l.플랫폼||"",isNew:l.신규여부?.toUpperCase()==="TRUE",requiresLogin:l.로그인필요?.toUpperCase()==="TRUE"}))}}function bj(a){return!a||a.length===0?{title:"Internal Tools",description:"",items:[]}:{title:"Internal Tools",description:"업무용으로 제작한 내부 도구입니다.",items:a.filter(l=>{if(!l.ID)return!1;const o=l.표시여부;return!(o&&o.toUpperCase()==="FALSE")}).map(l=>({id:l.ID||"",title:l.제목||"",description:l.설명||"",icon:l.아이콘||"Wrench"}))}}function Sj(a){if(!a||a.length===0)return{title:"Resources",description:"",categories:[]};const s=new Map;return a.filter(l=>{if(!l.제목)return!1;const o=l.표시여부;return!(o&&o.toUpperCase()==="FALSE")}).forEach(l=>{const o=l.카테고리||"",u=l.카테고리아이콘||"",h=l.카테고리색상||"#8b5cf6";s.has(o)||s.set(o,{name:o,icon:u,color:h,items:[]}),s.get(o).items.push({title:l.제목||"",description:l.설명||"",docUrl:l.문서URL||"",tags:_r(l.태그||""),createdDate:l.작성일||""})}),{title:"Resources",description:"IT 및 기타 유용한 정보들을 주제별로 정리했습니다. 클릭하면 Google Docs에서 상세 내용을 확인할 수 있습니다.",categories:Array.from(s.values())}}function jj(){const[a,s]=U.useState(null),[l,o]=U.useState(!0),[u,h]=U.useState(null);return U.useEffect(()=>{async function f(){try{o(!0);const[m,g,y,x,b,j,k,C,B,K,G]=await Promise.all([Ze(Qe.PROFILE),Ze(Qe.ABOUT),Ze(Qe.TECH_STACK),Ze(Qe.EXPERIENCE),Ze(Qe.PROJECTS),Ze(Qe.EDUCATION),Ze(Qe.CERTIFICATIONS),Ze(Qe.BOOKMARKS),Ze(Qe.LIVE_DEMO),Ze(Qe.INTERNAL_TOOLS),Ze(Qe.RESOURCES)]),J=xj(B),Y=bj(K);s({profile:dj(m),about:fj(g),techStack:hj(y),education:gj(j),certifications:yj(k),experience:pj(x),projects:mj(b),liveDemo:{...J,internalTools:Y},bookmarks:vj(C),resources:Sj(G)}),h(null)}catch(m){console.error("Failed to load sheet data:",m),h(m)}finally{o(!1)}}f()},[]),{data:a,loading:l,error:u,refetch:()=>window.location.reload()}}const Tj="https://script.google.com/macros/s/AKfycbz8J8B9bcqimeLoy_5VSpKgJiHHF5ajwocNR6bYylhju3TrVOiFoL6FVYqL5a65rQQ36g/exec",wj=Math.random().toString(36).substring(2,15)+Date.now().toString(36);let or=null;async function Mj(){if(or)return or;try{return or=(await(await fetch("https://api.ipify.org?format=json")).json()).ip,or}catch(a){return console.warn("IP 조회 실패:",a),""}}const Nj="221.165.52.1";async function My(a){try{const s=await Mj();if(s===Nj)return;const l={section:a,ip:s,userAgent:navigator.userAgent,referrer:document.referrer||"(직접 접속)",screenSize:`${window.innerWidth}x${window.innerHeight}`,sessionId:wj};await fetch(Tj,{method:"POST",mode:"no-cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(l)}),console.log("📊 로그 기록:",a)}catch(s){console.warn("로깅 실패:",s)}}async function Aj(){await My("_initial_load")}function kj(){return new URLSearchParams(window.location.search).get("tool")}function zj({toolId:a}){const s={mallReport:"자사몰 매출 확인",addressMap:"주소 좌표 변환"};return d.jsxs("div",{className:"tool-popup-container",children:[d.jsx("header",{className:"tool-popup-header",children:d.jsx("h1",{children:s[a]||"도구"})}),d.jsxs("main",{className:"tool-popup-content",children:[a==="mallReport"&&d.jsx(W8,{}),a==="addressMap"&&d.jsx(I8,{})]}),d.jsx("style",{children:`
        .tool-popup-container {
          min-height: 100vh;
          background: var(--bg-primary);
          color: var(--text-primary);
        }
        .tool-popup-header {
          padding: 16px 24px;
          background: var(--bg-secondary);
          border-bottom: 1px solid var(--border-color);
        }
        .tool-popup-header h1 {
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--text-primary);
          margin: 0;
        }
        .tool-popup-content {
          padding: 24px;
        }
        .tool-popup-content .section {
          padding: 0;
        }
      `})]})}function Ej(){const[a,s]=U.useState("about"),[l,o]=U.useState(null),[u,h]=U.useState(!1),[f,m]=U.useState(null),{data:g,loading:y,error:x}=jj();U.useEffect(()=>{const C=kj();C?m(C):Aj()},[]);const b=C=>{o(C),h(!0)},j=()=>{h(!1),setTimeout(()=>o(null),300)};if(f)return d.jsx(zj,{toolId:f});if(y)return d.jsxs("div",{className:"loading-container",children:[d.jsx("div",{className:"loading-spinner"}),d.jsx("p",{children:"데이터를 불러오는 중..."}),d.jsx("style",{children:`
          .loading-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            background: var(--bg-primary);
            color: var(--text-primary);
            gap: 16px;
          }
          .loading-spinner {
            width: 48px;
            height: 48px;
            border: 4px solid var(--border-color);
            border-top-color: var(--accent-primary);
            border-radius: 50%;
            animation: spin 1s linear infinite;
          }
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `})]});if(x||!g)return d.jsxs("div",{className:"error-container",children:[d.jsx("div",{className:"error-icon",children:"⚠️"}),d.jsx("h2",{children:"데이터를 불러올 수 없습니다"}),d.jsx("p",{children:"Google Sheets 연결을 확인해 주세요."}),d.jsx("button",{onClick:()=>window.location.reload(),className:"retry-button",children:"다시 시도"}),d.jsx("style",{children:`
          .error-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            background: var(--bg-primary);
            color: var(--text-primary);
            gap: 16px;
            text-align: center;
            padding: 24px;
          }
          .error-icon {
            font-size: 48px;
          }
          .error-container h2 {
            font-size: 1.5rem;
            margin: 0;
          }
          .error-container p {
            color: var(--text-secondary);
            margin: 0;
          }
          .retry-button {
            margin-top: 16px;
            padding: 12px 24px;
            background: var(--accent-primary);
            color: white;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            font-size: 1rem;
            transition: opacity 0.2s;
          }
          .retry-button:hover {
            opacity: 0.9;
          }
        `})]});const k=()=>{const C={onMediaClick:b};switch(a){case"about":return d.jsx(r1,{data:g.about,...C});case"techStack":return d.jsx(G8,{data:g.techStack});case"experience":return d.jsx(X8,{data:g.experience});case"projects":return d.jsx(Q8,{data:g.projects,...C});case"webApps":return d.jsx($8,{data:g.liveDemo});case"education":return d.jsx(F8,{data:g.education});case"certifications":return d.jsx(P8,{data:g.certifications});case"resources":return d.jsx(aj,{data:g.resources});case"bookmarks":return d.jsx(ej,{data:g.bookmarks});case"analytics":return d.jsx(lj,{});default:return d.jsx(r1,{data:g.about,...C})}};return d.jsxs("div",{className:"app-container",children:[d.jsx(H8,{profile:g.profile,activeSection:a,onSectionChange:C=>{s(C),My(C)}}),d.jsx("main",{className:"main-content",children:d.jsx(wa,{mode:"wait",children:d.jsx(Q.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3},className:"section-wrapper",children:k()},a)})}),d.jsx(q8,{isOpen:u,onClose:j,content:l})]})}function Cj(){return d.jsx(U3,{children:d.jsx(Ej,{})})}i2.createRoot(document.getElementById("root")).render(d.jsx(U.StrictMode,{children:d.jsx(Cj,{})}));
