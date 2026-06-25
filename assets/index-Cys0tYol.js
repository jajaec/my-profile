(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))o(d);new MutationObserver(d=>{for(const h of d)if(h.type==="childList")for(const f of h.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&o(f)}).observe(document,{childList:!0,subtree:!0});function l(d){const h={};return d.integrity&&(h.integrity=d.integrity),d.referrerPolicy&&(h.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?h.credentials="include":d.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function o(d){if(d.ep)return;d.ep=!0;const h=l(d);fetch(d.href,h)}})();var tu={exports:{}},Ss={};var Hm;function s2(){if(Hm)return Ss;Hm=1;var a=Symbol.for("react.transitional.element"),s=Symbol.for("react.fragment");function l(o,d,h){var f=null;if(h!==void 0&&(f=""+h),d.key!==void 0&&(f=""+d.key),"key"in d){h={};for(var m in d)m!=="key"&&(h[m]=d[m])}else h=d;return d=h.ref,{$$typeof:a,type:o,key:f,ref:d!==void 0?d:null,props:h}}return Ss.Fragment=s,Ss.jsx=l,Ss.jsxs=l,Ss}var qm;function l2(){return qm||(qm=1,tu.exports=s2()),tu.exports}var u=l2(),nu={exports:{}},ue={};var Ym;function r2(){if(Ym)return ue;Ym=1;var a=Symbol.for("react.transitional.element"),s=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),h=Symbol.for("react.consumer"),f=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),b=Symbol.for("react.activity"),S=Symbol.iterator;function w(N){return N===null||typeof N!="object"?null:(N=S&&N[S]||N["@@iterator"],typeof N=="function"?N:null)}var _={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},H=Object.assign,K={};function G(N,L,$){this.props=N,this.context=L,this.refs=K,this.updater=$||_}G.prototype.isReactComponent={},G.prototype.setState=function(N,L){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,L,"setState")},G.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function Z(){}Z.prototype=G.prototype;function R(N,L,$){this.props=N,this.context=L,this.refs=K,this.updater=$||_}var V=R.prototype=new Z;V.constructor=R,H(V,G.prototype),V.isPureReactComponent=!0;var J=Array.isArray;function le(){}var F={H:null,A:null,T:null,S:null},Y=Object.prototype.hasOwnProperty;function ee(N,L,$){var ne=$.ref;return{$$typeof:a,type:N,key:L,ref:ne!==void 0?ne:null,props:$}}function ce(N,L){return ee(N.type,L,N.props)}function pe(N){return typeof N=="object"&&N!==null&&N.$$typeof===a}function je(N){var L={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function($){return L[$]})}var $e=/\/+/g;function te(N,L){return typeof N=="object"&&N!==null&&N.key!=null?je(""+N.key):L.toString(36)}function de(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(le,le):(N.status="pending",N.then(function(L){N.status==="pending"&&(N.status="fulfilled",N.value=L)},function(L){N.status==="pending"&&(N.status="rejected",N.reason=L)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function E(N,L,$,ne,fe){var ge=typeof N;(ge==="undefined"||ge==="boolean")&&(N=null);var Me=!1;if(N===null)Me=!0;else switch(ge){case"bigint":case"string":case"number":Me=!0;break;case"object":switch(N.$$typeof){case a:case s:Me=!0;break;case x:return Me=N._init,E(Me(N._payload),L,$,ne,fe)}}if(Me)return fe=fe(N),Me=ne===""?"."+te(N,0):ne,J(fe)?($="",Me!=null&&($=Me.replace($e,"$&/")+"/"),E(fe,L,$,"",function(ki){return ki})):fe!=null&&(pe(fe)&&(fe=ce(fe,$+(fe.key==null||N&&N.key===fe.key?"":(""+fe.key).replace($e,"$&/")+"/")+Me)),L.push(fe)),1;Me=0;var ot=ne===""?".":ne+":";if(J(N))for(var qe=0;qe<N.length;qe++)ne=N[qe],ge=ot+te(ne,qe),Me+=E(ne,L,$,ge,fe);else if(qe=w(N),typeof qe=="function")for(N=qe.call(N),qe=0;!(ne=N.next()).done;)ne=ne.value,ge=ot+te(ne,qe++),Me+=E(ne,L,$,ge,fe);else if(ge==="object"){if(typeof N.then=="function")return E(de(N),L,$,ne,fe);throw L=String(N),Error("Objects are not valid as a React child (found: "+(L==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":L)+"). If you meant to render a collection of children, use an array instead.")}return Me}function X(N,L,$){if(N==null)return N;var ne=[],fe=0;return E(N,ne,"","",function(ge){return L.call($,ge,fe++)}),ne}function P(N){if(N._status===-1){var L=N._result;L=L(),L.then(function($){(N._status===0||N._status===-1)&&(N._status=1,N._result=$)},function($){(N._status===0||N._status===-1)&&(N._status=2,N._result=$)}),N._status===-1&&(N._status=0,N._result=L)}if(N._status===1)return N._result.default;throw N._result}var ie=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var L=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(L))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)},se={map:X,forEach:function(N,L,$){X(N,function(){L.apply(this,arguments)},$)},count:function(N){var L=0;return X(N,function(){L++}),L},toArray:function(N){return X(N,function(L){return L})||[]},only:function(N){if(!pe(N))throw Error("React.Children.only expected to receive a single React element child.");return N}};return ue.Activity=b,ue.Children=se,ue.Component=G,ue.Fragment=l,ue.Profiler=d,ue.PureComponent=R,ue.StrictMode=o,ue.Suspense=y,ue.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,ue.__COMPILER_RUNTIME={__proto__:null,c:function(N){return F.H.useMemoCache(N)}},ue.cache=function(N){return function(){return N.apply(null,arguments)}},ue.cacheSignal=function(){return null},ue.cloneElement=function(N,L,$){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var ne=H({},N.props),fe=N.key;if(L!=null)for(ge in L.key!==void 0&&(fe=""+L.key),L)!Y.call(L,ge)||ge==="key"||ge==="__self"||ge==="__source"||ge==="ref"&&L.ref===void 0||(ne[ge]=L[ge]);var ge=arguments.length-2;if(ge===1)ne.children=$;else if(1<ge){for(var Me=Array(ge),ot=0;ot<ge;ot++)Me[ot]=arguments[ot+2];ne.children=Me}return ee(N.type,fe,ne)},ue.createContext=function(N){return N={$$typeof:f,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:h,_context:N},N},ue.createElement=function(N,L,$){var ne,fe={},ge=null;if(L!=null)for(ne in L.key!==void 0&&(ge=""+L.key),L)Y.call(L,ne)&&ne!=="key"&&ne!=="__self"&&ne!=="__source"&&(fe[ne]=L[ne]);var Me=arguments.length-2;if(Me===1)fe.children=$;else if(1<Me){for(var ot=Array(Me),qe=0;qe<Me;qe++)ot[qe]=arguments[qe+2];fe.children=ot}if(N&&N.defaultProps)for(ne in Me=N.defaultProps,Me)fe[ne]===void 0&&(fe[ne]=Me[ne]);return ee(N,ge,fe)},ue.createRef=function(){return{current:null}},ue.forwardRef=function(N){return{$$typeof:m,render:N}},ue.isValidElement=pe,ue.lazy=function(N){return{$$typeof:x,_payload:{_status:-1,_result:N},_init:P}},ue.memo=function(N,L){return{$$typeof:g,type:N,compare:L===void 0?null:L}},ue.startTransition=function(N){var L=F.T,$={};F.T=$;try{var ne=N(),fe=F.S;fe!==null&&fe($,ne),typeof ne=="object"&&ne!==null&&typeof ne.then=="function"&&ne.then(le,ie)}catch(ge){ie(ge)}finally{L!==null&&$.types!==null&&(L.types=$.types),F.T=L}},ue.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},ue.use=function(N){return F.H.use(N)},ue.useActionState=function(N,L,$){return F.H.useActionState(N,L,$)},ue.useCallback=function(N,L){return F.H.useCallback(N,L)},ue.useContext=function(N){return F.H.useContext(N)},ue.useDebugValue=function(){},ue.useDeferredValue=function(N,L){return F.H.useDeferredValue(N,L)},ue.useEffect=function(N,L){return F.H.useEffect(N,L)},ue.useEffectEvent=function(N){return F.H.useEffectEvent(N)},ue.useId=function(){return F.H.useId()},ue.useImperativeHandle=function(N,L,$){return F.H.useImperativeHandle(N,L,$)},ue.useInsertionEffect=function(N,L){return F.H.useInsertionEffect(N,L)},ue.useLayoutEffect=function(N,L){return F.H.useLayoutEffect(N,L)},ue.useMemo=function(N,L){return F.H.useMemo(N,L)},ue.useOptimistic=function(N,L){return F.H.useOptimistic(N,L)},ue.useReducer=function(N,L,$){return F.H.useReducer(N,L,$)},ue.useRef=function(N){return F.H.useRef(N)},ue.useState=function(N){return F.H.useState(N)},ue.useSyncExternalStore=function(N,L,$){return F.H.useSyncExternalStore(N,L,$)},ue.useTransition=function(){return F.H.useTransition()},ue.version="19.2.3",ue}var Gm;function Zu(){return Gm||(Gm=1,nu.exports=r2()),nu.exports}var D=Zu(),au={exports:{}},js={},iu={exports:{}},su={};var Xm;function o2(){return Xm||(Xm=1,(function(a){function s(E,X){var P=E.length;E.push(X);e:for(;0<P;){var ie=P-1>>>1,se=E[ie];if(0<d(se,X))E[ie]=X,E[P]=se,P=ie;else break e}}function l(E){return E.length===0?null:E[0]}function o(E){if(E.length===0)return null;var X=E[0],P=E.pop();if(P!==X){E[0]=P;e:for(var ie=0,se=E.length,N=se>>>1;ie<N;){var L=2*(ie+1)-1,$=E[L],ne=L+1,fe=E[ne];if(0>d($,P))ne<se&&0>d(fe,$)?(E[ie]=fe,E[ne]=P,ie=ne):(E[ie]=$,E[L]=P,ie=L);else if(ne<se&&0>d(fe,P))E[ie]=fe,E[ne]=P,ie=ne;else break e}}return X}function d(E,X){var P=E.sortIndex-X.sortIndex;return P!==0?P:E.id-X.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var h=performance;a.unstable_now=function(){return h.now()}}else{var f=Date,m=f.now();a.unstable_now=function(){return f.now()-m}}var y=[],g=[],x=1,b=null,S=3,w=!1,_=!1,H=!1,K=!1,G=typeof setTimeout=="function"?setTimeout:null,Z=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;function V(E){for(var X=l(g);X!==null;){if(X.callback===null)o(g);else if(X.startTime<=E)o(g),X.sortIndex=X.expirationTime,s(y,X);else break;X=l(g)}}function J(E){if(H=!1,V(E),!_)if(l(y)!==null)_=!0,le||(le=!0,je());else{var X=l(g);X!==null&&de(J,X.startTime-E)}}var le=!1,F=-1,Y=5,ee=-1;function ce(){return K?!0:!(a.unstable_now()-ee<Y)}function pe(){if(K=!1,le){var E=a.unstable_now();ee=E;var X=!0;try{e:{_=!1,H&&(H=!1,Z(F),F=-1),w=!0;var P=S;try{t:{for(V(E),b=l(y);b!==null&&!(b.expirationTime>E&&ce());){var ie=b.callback;if(typeof ie=="function"){b.callback=null,S=b.priorityLevel;var se=ie(b.expirationTime<=E);if(E=a.unstable_now(),typeof se=="function"){b.callback=se,V(E),X=!0;break t}b===l(y)&&o(y),V(E)}else o(y);b=l(y)}if(b!==null)X=!0;else{var N=l(g);N!==null&&de(J,N.startTime-E),X=!1}}break e}finally{b=null,S=P,w=!1}X=void 0}}finally{X?je():le=!1}}}var je;if(typeof R=="function")je=function(){R(pe)};else if(typeof MessageChannel<"u"){var $e=new MessageChannel,te=$e.port2;$e.port1.onmessage=pe,je=function(){te.postMessage(null)}}else je=function(){G(pe,0)};function de(E,X){F=G(function(){E(a.unstable_now())},X)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(E){E.callback=null},a.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Y=0<E?Math.floor(1e3/E):5},a.unstable_getCurrentPriorityLevel=function(){return S},a.unstable_next=function(E){switch(S){case 1:case 2:case 3:var X=3;break;default:X=S}var P=S;S=X;try{return E()}finally{S=P}},a.unstable_requestPaint=function(){K=!0},a.unstable_runWithPriority=function(E,X){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var P=S;S=E;try{return X()}finally{S=P}},a.unstable_scheduleCallback=function(E,X,P){var ie=a.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?ie+P:ie):P=ie,E){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=P+se,E={id:x++,callback:X,priorityLevel:E,startTime:P,expirationTime:se,sortIndex:-1},P>ie?(E.sortIndex=P,s(g,E),l(y)===null&&E===l(g)&&(H?(Z(F),F=-1):H=!0,de(J,P-ie))):(E.sortIndex=se,s(y,E),_||w||(_=!0,le||(le=!0,je()))),E},a.unstable_shouldYield=ce,a.unstable_wrapCallback=function(E){var X=S;return function(){var P=S;S=X;try{return E.apply(this,arguments)}finally{S=P}}}})(su)),su}var Km;function c2(){return Km||(Km=1,iu.exports=o2()),iu.exports}var lu={exports:{}},lt={};var Qm;function u2(){if(Qm)return lt;Qm=1;var a=Zu();function s(y){var g="https://react.dev/errors/"+y;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)g+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+y+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(){}var o={d:{f:l,r:function(){throw Error(s(522))},D:l,C:l,L:l,m:l,X:l,S:l,M:l},p:0,findDOMNode:null},d=Symbol.for("react.portal");function h(y,g,x){var b=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:b==null?null:""+b,children:y,containerInfo:g,implementation:x}}var f=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(y,g){if(y==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return lt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,lt.createPortal=function(y,g){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(s(299));return h(y,g,null,x)},lt.flushSync=function(y){var g=f.T,x=o.p;try{if(f.T=null,o.p=2,y)return y()}finally{f.T=g,o.p=x,o.d.f()}},lt.preconnect=function(y,g){typeof y=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,o.d.C(y,g))},lt.prefetchDNS=function(y){typeof y=="string"&&o.d.D(y)},lt.preinit=function(y,g){if(typeof y=="string"&&g&&typeof g.as=="string"){var x=g.as,b=m(x,g.crossOrigin),S=typeof g.integrity=="string"?g.integrity:void 0,w=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;x==="style"?o.d.S(y,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:b,integrity:S,fetchPriority:w}):x==="script"&&o.d.X(y,{crossOrigin:b,integrity:S,fetchPriority:w,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},lt.preinitModule=function(y,g){if(typeof y=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var x=m(g.as,g.crossOrigin);o.d.M(y,{crossOrigin:x,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&o.d.M(y)},lt.preload=function(y,g){if(typeof y=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var x=g.as,b=m(x,g.crossOrigin);o.d.L(y,x,{crossOrigin:b,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},lt.preloadModule=function(y,g){if(typeof y=="string")if(g){var x=m(g.as,g.crossOrigin);o.d.m(y,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:x,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else o.d.m(y)},lt.requestFormReset=function(y){o.d.r(y)},lt.unstable_batchedUpdates=function(y,g){return y(g)},lt.useFormState=function(y,g,x){return f.H.useFormState(y,g,x)},lt.useFormStatus=function(){return f.H.useHostTransitionStatus()},lt.version="19.2.3",lt}var Zm;function d2(){if(Zm)return lu.exports;Zm=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(s){console.error(s)}}return a(),lu.exports=u2(),lu.exports}var Jm;function f2(){if(Jm)return js;Jm=1;var a=c2(),s=Zu(),l=d2();function o(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function h(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function f(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function m(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function y(e){if(h(e)!==e)throw Error(o(188))}function g(e){var t=e.alternate;if(!t){if(t=h(e),t===null)throw Error(o(188));return t!==e?null:e}for(var n=e,i=t;;){var r=n.return;if(r===null)break;var c=r.alternate;if(c===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===c.child){for(c=r.child;c;){if(c===n)return y(r),e;if(c===i)return y(r),t;c=c.sibling}throw Error(o(188))}if(n.return!==i.return)n=r,i=c;else{for(var p=!1,v=r.child;v;){if(v===n){p=!0,n=r,i=c;break}if(v===i){p=!0,i=r,n=c;break}v=v.sibling}if(!p){for(v=c.child;v;){if(v===n){p=!0,n=c,i=r;break}if(v===i){p=!0,i=c,n=r;break}v=v.sibling}if(!p)throw Error(o(189))}}if(n.alternate!==i)throw Error(o(190))}if(n.tag!==3)throw Error(o(188));return n.stateNode.current===n?e:t}function x(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=x(e),t!==null)return t;e=e.sibling}return null}var b=Object.assign,S=Symbol.for("react.element"),w=Symbol.for("react.transitional.element"),_=Symbol.for("react.portal"),H=Symbol.for("react.fragment"),K=Symbol.for("react.strict_mode"),G=Symbol.for("react.profiler"),Z=Symbol.for("react.consumer"),R=Symbol.for("react.context"),V=Symbol.for("react.forward_ref"),J=Symbol.for("react.suspense"),le=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),Y=Symbol.for("react.lazy"),ee=Symbol.for("react.activity"),ce=Symbol.for("react.memo_cache_sentinel"),pe=Symbol.iterator;function je(e){return e===null||typeof e!="object"?null:(e=pe&&e[pe]||e["@@iterator"],typeof e=="function"?e:null)}var $e=Symbol.for("react.client.reference");function te(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===$e?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case H:return"Fragment";case G:return"Profiler";case K:return"StrictMode";case J:return"Suspense";case le:return"SuspenseList";case ee:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case _:return"Portal";case R:return e.displayName||"Context";case Z:return(e._context.displayName||"Context")+".Consumer";case V:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case F:return t=e.displayName||null,t!==null?t:te(e.type)||"Memo";case Y:t=e._payload,e=e._init;try{return te(e(t))}catch{}}return null}var de=Array.isArray,E=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,X=l.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,P={pending:!1,data:null,method:null,action:null},ie=[],se=-1;function N(e){return{current:e}}function L(e){0>se||(e.current=ie[se],ie[se]=null,se--)}function $(e,t){se++,ie[se]=e.current,e.current=t}var ne=N(null),fe=N(null),ge=N(null),Me=N(null);function ot(e,t){switch($(ge,t),$(fe,e),$(ne,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?cm(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=cm(t),e=um(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}L(ne),$(ne,e)}function qe(){L(ne),L(fe),L(ge)}function ki(e){e.memoizedState!==null&&$(Me,e);var t=ne.current,n=um(t,e.type);t!==n&&($(fe,e),$(ne,n))}function Xs(e){fe.current===e&&(L(ne),L(fe)),Me.current===e&&(L(Me),ys._currentValue=P)}var Vr,Ld;function In(e){if(Vr===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Vr=t&&t[1]||"",Ld=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Vr+e+Ld}var Ur=!1;function Lr(e,t){if(!e||Ur)return"";Ur=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var B=function(){throw Error()};if(Object.defineProperty(B.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(B,[])}catch(C){var z=C}Reflect.construct(e,[],B)}else{try{B.call()}catch(C){z=C}e.call(B.prototype)}}else{try{throw Error()}catch(C){z=C}(B=e())&&typeof B.catch=="function"&&B.catch(function(){})}}catch(C){if(C&&z&&typeof C.stack=="string")return[C.stack,z.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var r=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");r&&r.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=i.DetermineComponentFrameRoot(),p=c[0],v=c[1];if(p&&v){var j=p.split(`
`),k=v.split(`
`);for(r=i=0;i<j.length&&!j[i].includes("DetermineComponentFrameRoot");)i++;for(;r<k.length&&!k[r].includes("DetermineComponentFrameRoot");)r++;if(i===j.length||r===k.length)for(i=j.length-1,r=k.length-1;1<=i&&0<=r&&j[i]!==k[r];)r--;for(;1<=i&&0<=r;i--,r--)if(j[i]!==k[r]){if(i!==1||r!==1)do if(i--,r--,0>r||j[i]!==k[r]){var O=`
`+j[i].replace(" at new "," at ");return e.displayName&&O.includes("<anonymous>")&&(O=O.replace("<anonymous>",e.displayName)),O}while(1<=i&&0<=r);break}}}finally{Ur=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?In(n):""}function Vy(e,t){switch(e.tag){case 26:case 27:case 5:return In(e.type);case 16:return In("Lazy");case 13:return e.child!==t&&t!==null?In("Suspense Fallback"):In("Suspense");case 19:return In("SuspenseList");case 0:case 15:return Lr(e.type,!1);case 11:return Lr(e.type.render,!1);case 1:return Lr(e.type,!0);case 31:return In("Activity");default:return""}}function Bd(e){try{var t="",n=null;do t+=Vy(e,n),n=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var Br=Object.prototype.hasOwnProperty,Hr=a.unstable_scheduleCallback,qr=a.unstable_cancelCallback,Uy=a.unstable_shouldYield,Ly=a.unstable_requestPaint,vt=a.unstable_now,By=a.unstable_getCurrentPriorityLevel,Hd=a.unstable_ImmediatePriority,qd=a.unstable_UserBlockingPriority,Ks=a.unstable_NormalPriority,Hy=a.unstable_LowPriority,Yd=a.unstable_IdlePriority,qy=a.log,Yy=a.unstable_setDisableYieldValue,zi=null,bt=null;function Tn(e){if(typeof qy=="function"&&Yy(e),bt&&typeof bt.setStrictMode=="function")try{bt.setStrictMode(zi,e)}catch{}}var St=Math.clz32?Math.clz32:Ky,Gy=Math.log,Xy=Math.LN2;function Ky(e){return e>>>=0,e===0?32:31-(Gy(e)/Xy|0)|0}var Qs=256,Zs=262144,Js=4194304;function ea(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function $s(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var r=0,c=e.suspendedLanes,p=e.pingedLanes;e=e.warmLanes;var v=i&134217727;return v!==0?(i=v&~c,i!==0?r=ea(i):(p&=v,p!==0?r=ea(p):n||(n=v&~e,n!==0&&(r=ea(n))))):(v=i&~c,v!==0?r=ea(v):p!==0?r=ea(p):n||(n=i&~e,n!==0&&(r=ea(n)))),r===0?0:t!==0&&t!==r&&(t&c)===0&&(c=r&-r,n=t&-t,c>=n||c===32&&(n&4194048)!==0)?t:r}function Ei(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Qy(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Gd(){var e=Js;return Js<<=1,(Js&62914560)===0&&(Js=4194304),e}function Yr(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ci(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Zy(e,t,n,i,r,c){var p=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var v=e.entanglements,j=e.expirationTimes,k=e.hiddenUpdates;for(n=p&~n;0<n;){var O=31-St(n),B=1<<O;v[O]=0,j[O]=-1;var z=k[O];if(z!==null)for(k[O]=null,O=0;O<z.length;O++){var C=z[O];C!==null&&(C.lane&=-536870913)}n&=~B}i!==0&&Xd(e,i,0),c!==0&&r===0&&e.tag!==0&&(e.suspendedLanes|=c&~(p&~t))}function Xd(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-St(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function Kd(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-St(n),r=1<<i;r&t|e[i]&t&&(e[i]|=t),n&=~r}}function Qd(e,t){var n=t&-t;return n=(n&42)!==0?1:Gr(n),(n&(e.suspendedLanes|t))!==0?0:n}function Gr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Xr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Zd(){var e=X.p;return e!==0?e:(e=window.event,e===void 0?32:_m(e.type))}function Jd(e,t){var n=X.p;try{return X.p=e,t()}finally{X.p=n}}var Nn=Math.random().toString(36).slice(2),et="__reactFiber$"+Nn,ft="__reactProps$"+Nn,wa="__reactContainer$"+Nn,Kr="__reactEvents$"+Nn,Jy="__reactListeners$"+Nn,$y="__reactHandles$"+Nn,$d="__reactResources$"+Nn,Di="__reactMarker$"+Nn;function Qr(e){delete e[et],delete e[ft],delete e[Kr],delete e[Jy],delete e[$y]}function Ma(e){var t=e[et];if(t)return t;for(var n=e.parentNode;n;){if(t=n[wa]||n[et]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ym(e);e!==null;){if(n=e[et])return n;e=ym(e)}return t}e=n,n=e.parentNode}return null}function Aa(e){if(e=e[et]||e[wa]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function _i(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(o(33))}function ka(e){var t=e[$d];return t||(t=e[$d]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function We(e){e[Di]=!0}var Fd=new Set,Pd={};function ta(e,t){za(e,t),za(e+"Capture",t)}function za(e,t){for(Pd[e]=t,e=0;e<t.length;e++)Fd.add(t[e])}var Fy=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Wd={},Id={};function Py(e){return Br.call(Id,e)?!0:Br.call(Wd,e)?!1:Fy.test(e)?Id[e]=!0:(Wd[e]=!0,!1)}function Fs(e,t,n){if(Py(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Ps(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function tn(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+i)}}function zt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ef(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Wy(e,t,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var r=i.get,c=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return r.call(this)},set:function(p){n=""+p,c.call(this,p)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(p){n=""+p},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Zr(e){if(!e._valueTracker){var t=ef(e)?"checked":"value";e._valueTracker=Wy(e,t,""+e[t])}}function tf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=ef(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function Ws(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Iy=/[\n"\\]/g;function Et(e){return e.replace(Iy,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Jr(e,t,n,i,r,c,p,v){e.name="",p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"?e.type=p:e.removeAttribute("type"),t!=null?p==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+zt(t)):e.value!==""+zt(t)&&(e.value=""+zt(t)):p!=="submit"&&p!=="reset"||e.removeAttribute("value"),t!=null?$r(e,p,zt(t)):n!=null?$r(e,p,zt(n)):i!=null&&e.removeAttribute("value"),r==null&&c!=null&&(e.defaultChecked=!!c),r!=null&&(e.checked=r&&typeof r!="function"&&typeof r!="symbol"),v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.name=""+zt(v):e.removeAttribute("name")}function nf(e,t,n,i,r,c,p,v){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.type=c),t!=null||n!=null){if(!(c!=="submit"&&c!=="reset"||t!=null)){Zr(e);return}n=n!=null?""+zt(n):"",t=t!=null?""+zt(t):n,v||t===e.value||(e.value=t),e.defaultValue=t}i=i??r,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=v?e.checked:!!i,e.defaultChecked=!!i,p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(e.name=p),Zr(e)}function $r(e,t,n){t==="number"&&Ws(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Ea(e,t,n,i){if(e=e.options,t){t={};for(var r=0;r<n.length;r++)t["$"+n[r]]=!0;for(n=0;n<e.length;n++)r=t.hasOwnProperty("$"+e[n].value),e[n].selected!==r&&(e[n].selected=r),r&&i&&(e[n].defaultSelected=!0)}else{for(n=""+zt(n),t=null,r=0;r<e.length;r++){if(e[r].value===n){e[r].selected=!0,i&&(e[r].defaultSelected=!0);return}t!==null||e[r].disabled||(t=e[r])}t!==null&&(t.selected=!0)}}function af(e,t,n){if(t!=null&&(t=""+zt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+zt(n):""}function sf(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(o(92));if(de(i)){if(1<i.length)throw Error(o(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=zt(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),Zr(e)}function Ca(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ex=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function lf(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||ex.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function rf(e,t,n){if(t!=null&&typeof t!="object")throw Error(o(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var r in t)i=t[r],t.hasOwnProperty(r)&&n[r]!==i&&lf(e,r,i)}else for(var c in t)t.hasOwnProperty(c)&&lf(e,c,t[c])}function Fr(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var tx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),nx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Is(e){return nx.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function nn(){}var Pr=null;function Wr(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Da=null,_a=null;function of(e){var t=Aa(e);if(t&&(e=t.stateNode)){var n=e[ft]||null;e:switch(e=t.stateNode,t.type){case"input":if(Jr(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Et(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var r=i[ft]||null;if(!r)throw Error(o(90));Jr(i,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&tf(i)}break e;case"textarea":af(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&Ea(e,!!n.multiple,t,!1)}}}var Ir=!1;function cf(e,t,n){if(Ir)return e(t,n);Ir=!0;try{var i=e(t);return i}finally{if(Ir=!1,(Da!==null||_a!==null)&&(Hl(),Da&&(t=Da,e=_a,_a=Da=null,of(t),e)))for(t=0;t<e.length;t++)of(e[t])}}function Ri(e,t){var n=e.stateNode;if(n===null)return null;var i=n[ft]||null;if(i===null)return null;n=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(o(231,t,typeof n));return n}var an=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),eo=!1;if(an)try{var Oi={};Object.defineProperty(Oi,"passive",{get:function(){eo=!0}}),window.addEventListener("test",Oi,Oi),window.removeEventListener("test",Oi,Oi)}catch{eo=!1}var wn=null,to=null,el=null;function uf(){if(el)return el;var e,t=to,n=t.length,i,r="value"in wn?wn.value:wn.textContent,c=r.length;for(e=0;e<n&&t[e]===r[e];e++);var p=n-e;for(i=1;i<=p&&t[n-i]===r[c-i];i++);return el=r.slice(e,1<i?1-i:void 0)}function tl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function nl(){return!0}function df(){return!1}function ht(e){function t(n,i,r,c,p){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=c,this.target=p,this.currentTarget=null;for(var v in e)e.hasOwnProperty(v)&&(n=e[v],this[v]=n?n(c):c[v]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?nl:df,this.isPropagationStopped=df,this}return b(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=nl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=nl)},persist:function(){},isPersistent:nl}),t}var na={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},al=ht(na),Vi=b({},na,{view:0,detail:0}),ax=ht(Vi),no,ao,Ui,il=b({},Vi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:so,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ui&&(Ui&&e.type==="mousemove"?(no=e.screenX-Ui.screenX,ao=e.screenY-Ui.screenY):ao=no=0,Ui=e),no)},movementY:function(e){return"movementY"in e?e.movementY:ao}}),ff=ht(il),ix=b({},il,{dataTransfer:0}),sx=ht(ix),lx=b({},Vi,{relatedTarget:0}),io=ht(lx),rx=b({},na,{animationName:0,elapsedTime:0,pseudoElement:0}),ox=ht(rx),cx=b({},na,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ux=ht(cx),dx=b({},na,{data:0}),hf=ht(dx),fx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},hx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},px={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function mx(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=px[e])?!!t[e]:!1}function so(){return mx}var gx=b({},Vi,{key:function(e){if(e.key){var t=fx[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=tl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?hx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:so,charCode:function(e){return e.type==="keypress"?tl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?tl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),yx=ht(gx),xx=b({},il,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),pf=ht(xx),vx=b({},Vi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:so}),bx=ht(vx),Sx=b({},na,{propertyName:0,elapsedTime:0,pseudoElement:0}),jx=ht(Sx),Tx=b({},il,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Nx=ht(Tx),wx=b({},na,{newState:0,oldState:0}),Mx=ht(wx),Ax=[9,13,27,32],lo=an&&"CompositionEvent"in window,Li=null;an&&"documentMode"in document&&(Li=document.documentMode);var kx=an&&"TextEvent"in window&&!Li,mf=an&&(!lo||Li&&8<Li&&11>=Li),gf=" ",yf=!1;function xf(e,t){switch(e){case"keyup":return Ax.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function vf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ra=!1;function zx(e,t){switch(e){case"compositionend":return vf(t);case"keypress":return t.which!==32?null:(yf=!0,gf);case"textInput":return e=t.data,e===gf&&yf?null:e;default:return null}}function Ex(e,t){if(Ra)return e==="compositionend"||!lo&&xf(e,t)?(e=uf(),el=to=wn=null,Ra=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return mf&&t.locale!=="ko"?null:t.data;default:return null}}var Cx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function bf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Cx[e.type]:t==="textarea"}function Sf(e,t,n,i){Da?_a?_a.push(i):_a=[i]:Da=i,t=Zl(t,"onChange"),0<t.length&&(n=new al("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var Bi=null,Hi=null;function Dx(e){am(e,0)}function sl(e){var t=_i(e);if(tf(t))return e}function jf(e,t){if(e==="change")return t}var Tf=!1;if(an){var ro;if(an){var oo="oninput"in document;if(!oo){var Nf=document.createElement("div");Nf.setAttribute("oninput","return;"),oo=typeof Nf.oninput=="function"}ro=oo}else ro=!1;Tf=ro&&(!document.documentMode||9<document.documentMode)}function wf(){Bi&&(Bi.detachEvent("onpropertychange",Mf),Hi=Bi=null)}function Mf(e){if(e.propertyName==="value"&&sl(Hi)){var t=[];Sf(t,Hi,e,Wr(e)),cf(Dx,t)}}function _x(e,t,n){e==="focusin"?(wf(),Bi=t,Hi=n,Bi.attachEvent("onpropertychange",Mf)):e==="focusout"&&wf()}function Rx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return sl(Hi)}function Ox(e,t){if(e==="click")return sl(t)}function Vx(e,t){if(e==="input"||e==="change")return sl(t)}function Ux(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var jt=typeof Object.is=="function"?Object.is:Ux;function qi(e,t){if(jt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Br.call(t,r)||!jt(e[r],t[r]))return!1}return!0}function Af(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function kf(e,t){var n=Af(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Af(n)}}function zf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?zf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ef(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Ws(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ws(e.document)}return t}function co(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Lx=an&&"documentMode"in document&&11>=document.documentMode,Oa=null,uo=null,Yi=null,fo=!1;function Cf(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;fo||Oa==null||Oa!==Ws(i)||(i=Oa,"selectionStart"in i&&co(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Yi&&qi(Yi,i)||(Yi=i,i=Zl(uo,"onSelect"),0<i.length&&(t=new al("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=Oa)))}function aa(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Va={animationend:aa("Animation","AnimationEnd"),animationiteration:aa("Animation","AnimationIteration"),animationstart:aa("Animation","AnimationStart"),transitionrun:aa("Transition","TransitionRun"),transitionstart:aa("Transition","TransitionStart"),transitioncancel:aa("Transition","TransitionCancel"),transitionend:aa("Transition","TransitionEnd")},ho={},Df={};an&&(Df=document.createElement("div").style,"AnimationEvent"in window||(delete Va.animationend.animation,delete Va.animationiteration.animation,delete Va.animationstart.animation),"TransitionEvent"in window||delete Va.transitionend.transition);function ia(e){if(ho[e])return ho[e];if(!Va[e])return e;var t=Va[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Df)return ho[e]=t[n];return e}var _f=ia("animationend"),Rf=ia("animationiteration"),Of=ia("animationstart"),Bx=ia("transitionrun"),Hx=ia("transitionstart"),qx=ia("transitioncancel"),Vf=ia("transitionend"),Uf=new Map,po="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");po.push("scrollEnd");function Yt(e,t){Uf.set(e,t),ta(t,[e])}var ll=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Ct=[],Ua=0,mo=0;function rl(){for(var e=Ua,t=mo=Ua=0;t<e;){var n=Ct[t];Ct[t++]=null;var i=Ct[t];Ct[t++]=null;var r=Ct[t];Ct[t++]=null;var c=Ct[t];if(Ct[t++]=null,i!==null&&r!==null){var p=i.pending;p===null?r.next=r:(r.next=p.next,p.next=r),i.pending=r}c!==0&&Lf(n,r,c)}}function ol(e,t,n,i){Ct[Ua++]=e,Ct[Ua++]=t,Ct[Ua++]=n,Ct[Ua++]=i,mo|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function go(e,t,n,i){return ol(e,t,n,i),cl(e)}function sa(e,t){return ol(e,null,null,t),cl(e)}function Lf(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var r=!1,c=e.return;c!==null;)c.childLanes|=n,i=c.alternate,i!==null&&(i.childLanes|=n),c.tag===22&&(e=c.stateNode,e===null||e._visibility&1||(r=!0)),e=c,c=c.return;return e.tag===3?(c=e.stateNode,r&&t!==null&&(r=31-St(n),e=c.hiddenUpdates,i=e[r],i===null?e[r]=[t]:i.push(t),t.lane=n|536870912),c):null}function cl(e){if(50<us)throw us=0,wc=null,Error(o(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var La={};function Yx(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Tt(e,t,n,i){return new Yx(e,t,n,i)}function yo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function sn(e,t){var n=e.alternate;return n===null?(n=Tt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Bf(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function ul(e,t,n,i,r,c){var p=0;if(i=e,typeof e=="function")yo(e)&&(p=1);else if(typeof e=="string")p=Zv(e,n,ne.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case ee:return e=Tt(31,n,t,r),e.elementType=ee,e.lanes=c,e;case H:return la(n.children,r,c,t);case K:p=8,r|=24;break;case G:return e=Tt(12,n,t,r|2),e.elementType=G,e.lanes=c,e;case J:return e=Tt(13,n,t,r),e.elementType=J,e.lanes=c,e;case le:return e=Tt(19,n,t,r),e.elementType=le,e.lanes=c,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case R:p=10;break e;case Z:p=9;break e;case V:p=11;break e;case F:p=14;break e;case Y:p=16,i=null;break e}p=29,n=Error(o(130,e===null?"null":typeof e,"")),i=null}return t=Tt(p,n,t,r),t.elementType=e,t.type=i,t.lanes=c,t}function la(e,t,n,i){return e=Tt(7,e,i,t),e.lanes=n,e}function xo(e,t,n){return e=Tt(6,e,null,t),e.lanes=n,e}function Hf(e){var t=Tt(18,null,null,0);return t.stateNode=e,t}function vo(e,t,n){return t=Tt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var qf=new WeakMap;function Dt(e,t){if(typeof e=="object"&&e!==null){var n=qf.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Bd(t)},qf.set(e,t),t)}return{value:e,source:t,stack:Bd(t)}}var Ba=[],Ha=0,dl=null,Gi=0,_t=[],Rt=0,Mn=null,$t=1,Ft="";function ln(e,t){Ba[Ha++]=Gi,Ba[Ha++]=dl,dl=e,Gi=t}function Yf(e,t,n){_t[Rt++]=$t,_t[Rt++]=Ft,_t[Rt++]=Mn,Mn=e;var i=$t;e=Ft;var r=32-St(i)-1;i&=~(1<<r),n+=1;var c=32-St(t)+r;if(30<c){var p=r-r%5;c=(i&(1<<p)-1).toString(32),i>>=p,r-=p,$t=1<<32-St(t)+r|n<<r|i,Ft=c+e}else $t=1<<c|n<<r|i,Ft=e}function bo(e){e.return!==null&&(ln(e,1),Yf(e,1,0))}function So(e){for(;e===dl;)dl=Ba[--Ha],Ba[Ha]=null,Gi=Ba[--Ha],Ba[Ha]=null;for(;e===Mn;)Mn=_t[--Rt],_t[Rt]=null,Ft=_t[--Rt],_t[Rt]=null,$t=_t[--Rt],_t[Rt]=null}function Gf(e,t){_t[Rt++]=$t,_t[Rt++]=Ft,_t[Rt++]=Mn,$t=t.id,Ft=t.overflow,Mn=e}var tt=null,_e=null,Se=!1,An=null,Ot=!1,jo=Error(o(519));function kn(e){var t=Error(o(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Xi(Dt(t,e)),jo}function Xf(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[et]=e,t[ft]=i,n){case"dialog":xe("cancel",t),xe("close",t);break;case"iframe":case"object":case"embed":xe("load",t);break;case"video":case"audio":for(n=0;n<fs.length;n++)xe(fs[n],t);break;case"source":xe("error",t);break;case"img":case"image":case"link":xe("error",t),xe("load",t);break;case"details":xe("toggle",t);break;case"input":xe("invalid",t),nf(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":xe("invalid",t);break;case"textarea":xe("invalid",t),sf(t,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||rm(t.textContent,n)?(i.popover!=null&&(xe("beforetoggle",t),xe("toggle",t)),i.onScroll!=null&&xe("scroll",t),i.onScrollEnd!=null&&xe("scrollend",t),i.onClick!=null&&(t.onclick=nn),t=!0):t=!1,t||kn(e,!0)}function Kf(e){for(tt=e.return;tt;)switch(tt.tag){case 5:case 31:case 13:Ot=!1;return;case 27:case 3:Ot=!0;return;default:tt=tt.return}}function qa(e){if(e!==tt)return!1;if(!Se)return Kf(e),Se=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Hc(e.type,e.memoizedProps)),n=!n),n&&_e&&kn(e),Kf(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));_e=gm(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));_e=gm(e)}else t===27?(t=_e,Yn(e.type)?(e=Kc,Kc=null,_e=e):_e=t):_e=tt?Ut(e.stateNode.nextSibling):null;return!0}function ra(){_e=tt=null,Se=!1}function To(){var e=An;return e!==null&&(yt===null?yt=e:yt.push.apply(yt,e),An=null),e}function Xi(e){An===null?An=[e]:An.push(e)}var No=N(null),oa=null,rn=null;function zn(e,t,n){$(No,t._currentValue),t._currentValue=n}function on(e){e._currentValue=No.current,L(No)}function wo(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function Mo(e,t,n,i){var r=e.child;for(r!==null&&(r.return=e);r!==null;){var c=r.dependencies;if(c!==null){var p=r.child;c=c.firstContext;e:for(;c!==null;){var v=c;c=r;for(var j=0;j<t.length;j++)if(v.context===t[j]){c.lanes|=n,v=c.alternate,v!==null&&(v.lanes|=n),wo(c.return,n,e),i||(p=null);break e}c=v.next}}else if(r.tag===18){if(p=r.return,p===null)throw Error(o(341));p.lanes|=n,c=p.alternate,c!==null&&(c.lanes|=n),wo(p,n,e),p=null}else p=r.child;if(p!==null)p.return=r;else for(p=r;p!==null;){if(p===e){p=null;break}if(r=p.sibling,r!==null){r.return=p.return,p=r;break}p=p.return}r=p}}function Ya(e,t,n,i){e=null;for(var r=t,c=!1;r!==null;){if(!c){if((r.flags&524288)!==0)c=!0;else if((r.flags&262144)!==0)break}if(r.tag===10){var p=r.alternate;if(p===null)throw Error(o(387));if(p=p.memoizedProps,p!==null){var v=r.type;jt(r.pendingProps.value,p.value)||(e!==null?e.push(v):e=[v])}}else if(r===Me.current){if(p=r.alternate,p===null)throw Error(o(387));p.memoizedState.memoizedState!==r.memoizedState.memoizedState&&(e!==null?e.push(ys):e=[ys])}r=r.return}e!==null&&Mo(t,e,n,i),t.flags|=262144}function fl(e){for(e=e.firstContext;e!==null;){if(!jt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ca(e){oa=e,rn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function nt(e){return Qf(oa,e)}function hl(e,t){return oa===null&&ca(e),Qf(e,t)}function Qf(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},rn===null){if(e===null)throw Error(o(308));rn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else rn=rn.next=t;return n}var Gx=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},Xx=a.unstable_scheduleCallback,Kx=a.unstable_NormalPriority,Xe={$$typeof:R,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ao(){return{controller:new Gx,data:new Map,refCount:0}}function Ki(e){e.refCount--,e.refCount===0&&Xx(Kx,function(){e.controller.abort()})}var Qi=null,ko=0,Ga=0,Xa=null;function Qx(e,t){if(Qi===null){var n=Qi=[];ko=0,Ga=Cc(),Xa={status:"pending",value:void 0,then:function(i){n.push(i)}}}return ko++,t.then(Zf,Zf),t}function Zf(){if(--ko===0&&Qi!==null){Xa!==null&&(Xa.status="fulfilled");var e=Qi;Qi=null,Ga=0,Xa=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Zx(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(r){n.push(r)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var r=0;r<n.length;r++)(0,n[r])(t)},function(r){for(i.status="rejected",i.reason=r,r=0;r<n.length;r++)(0,n[r])(void 0)}),i}var Jf=E.S;E.S=function(e,t){Cp=vt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Qx(e,t),Jf!==null&&Jf(e,t)};var ua=N(null);function zo(){var e=ua.current;return e!==null?e:De.pooledCache}function pl(e,t){t===null?$(ua,ua.current):$(ua,t.pool)}function $f(){var e=zo();return e===null?null:{parent:Xe._currentValue,pool:e}}var Ka=Error(o(460)),Eo=Error(o(474)),ml=Error(o(542)),gl={then:function(){}};function Ff(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Pf(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(nn,nn),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,If(e),e;default:if(typeof t.status=="string")t.then(nn,nn);else{if(e=De,e!==null&&100<e.shellSuspendCounter)throw Error(o(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var r=t;r.status="fulfilled",r.value=i}},function(i){if(t.status==="pending"){var r=t;r.status="rejected",r.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,If(e),e}throw fa=t,Ka}}function da(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(fa=n,Ka):n}}var fa=null;function Wf(){if(fa===null)throw Error(o(459));var e=fa;return fa=null,e}function If(e){if(e===Ka||e===ml)throw Error(o(483))}var Qa=null,Zi=0;function yl(e){var t=Zi;return Zi+=1,Qa===null&&(Qa=[]),Pf(Qa,e,t)}function Ji(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function xl(e,t){throw t.$$typeof===S?Error(o(525)):(e=Object.prototype.toString.call(t),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function eh(e){function t(M,T){if(e){var A=M.deletions;A===null?(M.deletions=[T],M.flags|=16):A.push(T)}}function n(M,T){if(!e)return null;for(;T!==null;)t(M,T),T=T.sibling;return null}function i(M){for(var T=new Map;M!==null;)M.key!==null?T.set(M.key,M):T.set(M.index,M),M=M.sibling;return T}function r(M,T){return M=sn(M,T),M.index=0,M.sibling=null,M}function c(M,T,A){return M.index=A,e?(A=M.alternate,A!==null?(A=A.index,A<T?(M.flags|=67108866,T):A):(M.flags|=67108866,T)):(M.flags|=1048576,T)}function p(M){return e&&M.alternate===null&&(M.flags|=67108866),M}function v(M,T,A,U){return T===null||T.tag!==6?(T=xo(A,M.mode,U),T.return=M,T):(T=r(T,A),T.return=M,T)}function j(M,T,A,U){var re=A.type;return re===H?O(M,T,A.props.children,U,A.key):T!==null&&(T.elementType===re||typeof re=="object"&&re!==null&&re.$$typeof===Y&&da(re)===T.type)?(T=r(T,A.props),Ji(T,A),T.return=M,T):(T=ul(A.type,A.key,A.props,null,M.mode,U),Ji(T,A),T.return=M,T)}function k(M,T,A,U){return T===null||T.tag!==4||T.stateNode.containerInfo!==A.containerInfo||T.stateNode.implementation!==A.implementation?(T=vo(A,M.mode,U),T.return=M,T):(T=r(T,A.children||[]),T.return=M,T)}function O(M,T,A,U,re){return T===null||T.tag!==7?(T=la(A,M.mode,U,re),T.return=M,T):(T=r(T,A),T.return=M,T)}function B(M,T,A){if(typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint")return T=xo(""+T,M.mode,A),T.return=M,T;if(typeof T=="object"&&T!==null){switch(T.$$typeof){case w:return A=ul(T.type,T.key,T.props,null,M.mode,A),Ji(A,T),A.return=M,A;case _:return T=vo(T,M.mode,A),T.return=M,T;case Y:return T=da(T),B(M,T,A)}if(de(T)||je(T))return T=la(T,M.mode,A,null),T.return=M,T;if(typeof T.then=="function")return B(M,yl(T),A);if(T.$$typeof===R)return B(M,hl(M,T),A);xl(M,T)}return null}function z(M,T,A,U){var re=T!==null?T.key:null;if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return re!==null?null:v(M,T,""+A,U);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case w:return A.key===re?j(M,T,A,U):null;case _:return A.key===re?k(M,T,A,U):null;case Y:return A=da(A),z(M,T,A,U)}if(de(A)||je(A))return re!==null?null:O(M,T,A,U,null);if(typeof A.then=="function")return z(M,T,yl(A),U);if(A.$$typeof===R)return z(M,T,hl(M,A),U);xl(M,A)}return null}function C(M,T,A,U,re){if(typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint")return M=M.get(A)||null,v(T,M,""+U,re);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case w:return M=M.get(U.key===null?A:U.key)||null,j(T,M,U,re);case _:return M=M.get(U.key===null?A:U.key)||null,k(T,M,U,re);case Y:return U=da(U),C(M,T,A,U,re)}if(de(U)||je(U))return M=M.get(A)||null,O(T,M,U,re,null);if(typeof U.then=="function")return C(M,T,A,yl(U),re);if(U.$$typeof===R)return C(M,T,A,hl(T,U),re);xl(T,U)}return null}function I(M,T,A,U){for(var re=null,Te=null,ae=T,me=T=0,be=null;ae!==null&&me<A.length;me++){ae.index>me?(be=ae,ae=null):be=ae.sibling;var Ne=z(M,ae,A[me],U);if(Ne===null){ae===null&&(ae=be);break}e&&ae&&Ne.alternate===null&&t(M,ae),T=c(Ne,T,me),Te===null?re=Ne:Te.sibling=Ne,Te=Ne,ae=be}if(me===A.length)return n(M,ae),Se&&ln(M,me),re;if(ae===null){for(;me<A.length;me++)ae=B(M,A[me],U),ae!==null&&(T=c(ae,T,me),Te===null?re=ae:Te.sibling=ae,Te=ae);return Se&&ln(M,me),re}for(ae=i(ae);me<A.length;me++)be=C(ae,M,me,A[me],U),be!==null&&(e&&be.alternate!==null&&ae.delete(be.key===null?me:be.key),T=c(be,T,me),Te===null?re=be:Te.sibling=be,Te=be);return e&&ae.forEach(function(Zn){return t(M,Zn)}),Se&&ln(M,me),re}function oe(M,T,A,U){if(A==null)throw Error(o(151));for(var re=null,Te=null,ae=T,me=T=0,be=null,Ne=A.next();ae!==null&&!Ne.done;me++,Ne=A.next()){ae.index>me?(be=ae,ae=null):be=ae.sibling;var Zn=z(M,ae,Ne.value,U);if(Zn===null){ae===null&&(ae=be);break}e&&ae&&Zn.alternate===null&&t(M,ae),T=c(Zn,T,me),Te===null?re=Zn:Te.sibling=Zn,Te=Zn,ae=be}if(Ne.done)return n(M,ae),Se&&ln(M,me),re;if(ae===null){for(;!Ne.done;me++,Ne=A.next())Ne=B(M,Ne.value,U),Ne!==null&&(T=c(Ne,T,me),Te===null?re=Ne:Te.sibling=Ne,Te=Ne);return Se&&ln(M,me),re}for(ae=i(ae);!Ne.done;me++,Ne=A.next())Ne=C(ae,M,me,Ne.value,U),Ne!==null&&(e&&Ne.alternate!==null&&ae.delete(Ne.key===null?me:Ne.key),T=c(Ne,T,me),Te===null?re=Ne:Te.sibling=Ne,Te=Ne);return e&&ae.forEach(function(i2){return t(M,i2)}),Se&&ln(M,me),re}function Ce(M,T,A,U){if(typeof A=="object"&&A!==null&&A.type===H&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case w:e:{for(var re=A.key;T!==null;){if(T.key===re){if(re=A.type,re===H){if(T.tag===7){n(M,T.sibling),U=r(T,A.props.children),U.return=M,M=U;break e}}else if(T.elementType===re||typeof re=="object"&&re!==null&&re.$$typeof===Y&&da(re)===T.type){n(M,T.sibling),U=r(T,A.props),Ji(U,A),U.return=M,M=U;break e}n(M,T);break}else t(M,T);T=T.sibling}A.type===H?(U=la(A.props.children,M.mode,U,A.key),U.return=M,M=U):(U=ul(A.type,A.key,A.props,null,M.mode,U),Ji(U,A),U.return=M,M=U)}return p(M);case _:e:{for(re=A.key;T!==null;){if(T.key===re)if(T.tag===4&&T.stateNode.containerInfo===A.containerInfo&&T.stateNode.implementation===A.implementation){n(M,T.sibling),U=r(T,A.children||[]),U.return=M,M=U;break e}else{n(M,T);break}else t(M,T);T=T.sibling}U=vo(A,M.mode,U),U.return=M,M=U}return p(M);case Y:return A=da(A),Ce(M,T,A,U)}if(de(A))return I(M,T,A,U);if(je(A)){if(re=je(A),typeof re!="function")throw Error(o(150));return A=re.call(A),oe(M,T,A,U)}if(typeof A.then=="function")return Ce(M,T,yl(A),U);if(A.$$typeof===R)return Ce(M,T,hl(M,A),U);xl(M,A)}return typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint"?(A=""+A,T!==null&&T.tag===6?(n(M,T.sibling),U=r(T,A),U.return=M,M=U):(n(M,T),U=xo(A,M.mode,U),U.return=M,M=U),p(M)):n(M,T)}return function(M,T,A,U){try{Zi=0;var re=Ce(M,T,A,U);return Qa=null,re}catch(ae){if(ae===Ka||ae===ml)throw ae;var Te=Tt(29,ae,null,M.mode);return Te.lanes=U,Te.return=M,Te}}}var ha=eh(!0),th=eh(!1),En=!1;function Co(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Do(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Cn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Dn(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(we&2)!==0){var r=i.pending;return r===null?t.next=t:(t.next=r.next,r.next=t),i.pending=t,t=cl(e),Lf(e,null,n),t}return ol(e,i,t,n),cl(e)}function $i(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,Kd(e,n)}}function _o(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,c=null;if(n=n.firstBaseUpdate,n!==null){do{var p={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};c===null?r=c=p:c=c.next=p,n=n.next}while(n!==null);c===null?r=c=t:c=c.next=t}else r=c=t;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:c,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Ro=!1;function Fi(){if(Ro){var e=Xa;if(e!==null)throw e}}function Pi(e,t,n,i){Ro=!1;var r=e.updateQueue;En=!1;var c=r.firstBaseUpdate,p=r.lastBaseUpdate,v=r.shared.pending;if(v!==null){r.shared.pending=null;var j=v,k=j.next;j.next=null,p===null?c=k:p.next=k,p=j;var O=e.alternate;O!==null&&(O=O.updateQueue,v=O.lastBaseUpdate,v!==p&&(v===null?O.firstBaseUpdate=k:v.next=k,O.lastBaseUpdate=j))}if(c!==null){var B=r.baseState;p=0,O=k=j=null,v=c;do{var z=v.lane&-536870913,C=z!==v.lane;if(C?(ve&z)===z:(i&z)===z){z!==0&&z===Ga&&(Ro=!0),O!==null&&(O=O.next={lane:0,tag:v.tag,payload:v.payload,callback:null,next:null});e:{var I=e,oe=v;z=t;var Ce=n;switch(oe.tag){case 1:if(I=oe.payload,typeof I=="function"){B=I.call(Ce,B,z);break e}B=I;break e;case 3:I.flags=I.flags&-65537|128;case 0:if(I=oe.payload,z=typeof I=="function"?I.call(Ce,B,z):I,z==null)break e;B=b({},B,z);break e;case 2:En=!0}}z=v.callback,z!==null&&(e.flags|=64,C&&(e.flags|=8192),C=r.callbacks,C===null?r.callbacks=[z]:C.push(z))}else C={lane:z,tag:v.tag,payload:v.payload,callback:v.callback,next:null},O===null?(k=O=C,j=B):O=O.next=C,p|=z;if(v=v.next,v===null){if(v=r.shared.pending,v===null)break;C=v,v=C.next,C.next=null,r.lastBaseUpdate=C,r.shared.pending=null}}while(!0);O===null&&(j=B),r.baseState=j,r.firstBaseUpdate=k,r.lastBaseUpdate=O,c===null&&(r.shared.lanes=0),Un|=p,e.lanes=p,e.memoizedState=B}}function nh(e,t){if(typeof e!="function")throw Error(o(191,e));e.call(t)}function ah(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)nh(n[e],t)}var Za=N(null),vl=N(0);function ih(e,t){e=yn,$(vl,e),$(Za,t),yn=e|t.baseLanes}function Oo(){$(vl,yn),$(Za,Za.current)}function Vo(){yn=vl.current,L(Za),L(vl)}var Nt=N(null),Vt=null;function _n(e){var t=e.alternate;$(Ye,Ye.current&1),$(Nt,e),Vt===null&&(t===null||Za.current!==null||t.memoizedState!==null)&&(Vt=e)}function Uo(e){$(Ye,Ye.current),$(Nt,e),Vt===null&&(Vt=e)}function sh(e){e.tag===22?($(Ye,Ye.current),$(Nt,e),Vt===null&&(Vt=e)):Rn()}function Rn(){$(Ye,Ye.current),$(Nt,Nt.current)}function wt(e){L(Nt),Vt===e&&(Vt=null),L(Ye)}var Ye=N(0);function bl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Gc(n)||Xc(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var cn=0,he=null,ze=null,Ke=null,Sl=!1,Ja=!1,pa=!1,jl=0,Wi=0,$a=null,Jx=0;function Le(){throw Error(o(321))}function Lo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!jt(e[n],t[n]))return!1;return!0}function Bo(e,t,n,i,r,c){return cn=c,he=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,E.H=e===null||e.memoizedState===null?Yh:ec,pa=!1,c=n(i,r),pa=!1,Ja&&(c=rh(t,n,i,r)),lh(e),c}function lh(e){E.H=ts;var t=ze!==null&&ze.next!==null;if(cn=0,Ke=ze=he=null,Sl=!1,Wi=0,$a=null,t)throw Error(o(300));e===null||Qe||(e=e.dependencies,e!==null&&fl(e)&&(Qe=!0))}function rh(e,t,n,i){he=e;var r=0;do{if(Ja&&($a=null),Wi=0,Ja=!1,25<=r)throw Error(o(301));if(r+=1,Ke=ze=null,e.updateQueue!=null){var c=e.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}E.H=Gh,c=t(n,i)}while(Ja);return c}function $x(){var e=E.H,t=e.useState()[0];return t=typeof t.then=="function"?Ii(t):t,e=e.useState()[0],(ze!==null?ze.memoizedState:null)!==e&&(he.flags|=1024),t}function Ho(){var e=jl!==0;return jl=0,e}function qo(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Yo(e){if(Sl){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Sl=!1}cn=0,Ke=ze=he=null,Ja=!1,Wi=jl=0,$a=null}function ct(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ke===null?he.memoizedState=Ke=e:Ke=Ke.next=e,Ke}function Ge(){if(ze===null){var e=he.alternate;e=e!==null?e.memoizedState:null}else e=ze.next;var t=Ke===null?he.memoizedState:Ke.next;if(t!==null)Ke=t,ze=e;else{if(e===null)throw he.alternate===null?Error(o(467)):Error(o(310));ze=e,e={memoizedState:ze.memoizedState,baseState:ze.baseState,baseQueue:ze.baseQueue,queue:ze.queue,next:null},Ke===null?he.memoizedState=Ke=e:Ke=Ke.next=e}return Ke}function Tl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ii(e){var t=Wi;return Wi+=1,$a===null&&($a=[]),e=Pf($a,e,t),t=he,(Ke===null?t.memoizedState:Ke.next)===null&&(t=t.alternate,E.H=t===null||t.memoizedState===null?Yh:ec),e}function Nl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ii(e);if(e.$$typeof===R)return nt(e)}throw Error(o(438,String(e)))}function Go(e){var t=null,n=he.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=he.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(r){return r.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Tl(),he.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=ce;return t.index++,n}function un(e,t){return typeof t=="function"?t(e):t}function wl(e){var t=Ge();return Xo(t,ze,e)}function Xo(e,t,n){var i=e.queue;if(i===null)throw Error(o(311));i.lastRenderedReducer=n;var r=e.baseQueue,c=i.pending;if(c!==null){if(r!==null){var p=r.next;r.next=c.next,c.next=p}t.baseQueue=r=c,i.pending=null}if(c=e.baseState,r===null)e.memoizedState=c;else{t=r.next;var v=p=null,j=null,k=t,O=!1;do{var B=k.lane&-536870913;if(B!==k.lane?(ve&B)===B:(cn&B)===B){var z=k.revertLane;if(z===0)j!==null&&(j=j.next={lane:0,revertLane:0,gesture:null,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null}),B===Ga&&(O=!0);else if((cn&z)===z){k=k.next,z===Ga&&(O=!0);continue}else B={lane:0,revertLane:k.revertLane,gesture:null,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null},j===null?(v=j=B,p=c):j=j.next=B,he.lanes|=z,Un|=z;B=k.action,pa&&n(c,B),c=k.hasEagerState?k.eagerState:n(c,B)}else z={lane:B,revertLane:k.revertLane,gesture:k.gesture,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null},j===null?(v=j=z,p=c):j=j.next=z,he.lanes|=B,Un|=B;k=k.next}while(k!==null&&k!==t);if(j===null?p=c:j.next=v,!jt(c,e.memoizedState)&&(Qe=!0,O&&(n=Xa,n!==null)))throw n;e.memoizedState=c,e.baseState=p,e.baseQueue=j,i.lastRenderedState=c}return r===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function Ko(e){var t=Ge(),n=t.queue;if(n===null)throw Error(o(311));n.lastRenderedReducer=e;var i=n.dispatch,r=n.pending,c=t.memoizedState;if(r!==null){n.pending=null;var p=r=r.next;do c=e(c,p.action),p=p.next;while(p!==r);jt(c,t.memoizedState)||(Qe=!0),t.memoizedState=c,t.baseQueue===null&&(t.baseState=c),n.lastRenderedState=c}return[c,i]}function oh(e,t,n){var i=he,r=Ge(),c=Se;if(c){if(n===void 0)throw Error(o(407));n=n()}else n=t();var p=!jt((ze||r).memoizedState,n);if(p&&(r.memoizedState=n,Qe=!0),r=r.queue,Jo(dh.bind(null,i,r,e),[e]),r.getSnapshot!==t||p||Ke!==null&&Ke.memoizedState.tag&1){if(i.flags|=2048,Fa(9,{destroy:void 0},uh.bind(null,i,r,n,t),null),De===null)throw Error(o(349));c||(cn&127)!==0||ch(i,t,n)}return n}function ch(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=he.updateQueue,t===null?(t=Tl(),he.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function uh(e,t,n,i){t.value=n,t.getSnapshot=i,fh(t)&&hh(e)}function dh(e,t,n){return n(function(){fh(t)&&hh(e)})}function fh(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!jt(e,n)}catch{return!0}}function hh(e){var t=sa(e,2);t!==null&&xt(t,e,2)}function Qo(e){var t=ct();if(typeof e=="function"){var n=e;if(e=n(),pa){Tn(!0);try{n()}finally{Tn(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:un,lastRenderedState:e},t}function ph(e,t,n,i){return e.baseState=n,Xo(e,ze,typeof i=="function"?i:un)}function Fx(e,t,n,i,r){if(kl(e))throw Error(o(485));if(e=t.action,e!==null){var c={payload:r,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(p){c.listeners.push(p)}};E.T!==null?n(!0):c.isTransition=!1,i(c),n=t.pending,n===null?(c.next=t.pending=c,mh(t,c)):(c.next=n.next,t.pending=n.next=c)}}function mh(e,t){var n=t.action,i=t.payload,r=e.state;if(t.isTransition){var c=E.T,p={};E.T=p;try{var v=n(r,i),j=E.S;j!==null&&j(p,v),gh(e,t,v)}catch(k){Zo(e,t,k)}finally{c!==null&&p.types!==null&&(c.types=p.types),E.T=c}}else try{c=n(r,i),gh(e,t,c)}catch(k){Zo(e,t,k)}}function gh(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){yh(e,t,i)},function(i){return Zo(e,t,i)}):yh(e,t,n)}function yh(e,t,n){t.status="fulfilled",t.value=n,xh(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,mh(e,n)))}function Zo(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,xh(t),t=t.next;while(t!==i)}e.action=null}function xh(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function vh(e,t){return t}function bh(e,t){if(Se){var n=De.formState;if(n!==null){e:{var i=he;if(Se){if(_e){t:{for(var r=_e,c=Ot;r.nodeType!==8;){if(!c){r=null;break t}if(r=Ut(r.nextSibling),r===null){r=null;break t}}c=r.data,r=c==="F!"||c==="F"?r:null}if(r){_e=Ut(r.nextSibling),i=r.data==="F!";break e}}kn(i)}i=!1}i&&(t=n[0])}}return n=ct(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:vh,lastRenderedState:t},n.queue=i,n=Bh.bind(null,he,i),i.dispatch=n,i=Qo(!1),c=Io.bind(null,he,!1,i.queue),i=ct(),r={state:t,dispatch:null,action:e,pending:null},i.queue=r,n=Fx.bind(null,he,r,c,n),r.dispatch=n,i.memoizedState=e,[t,n,!1]}function Sh(e){var t=Ge();return jh(t,ze,e)}function jh(e,t,n){if(t=Xo(e,t,vh)[0],e=wl(un)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=Ii(t)}catch(p){throw p===Ka?ml:p}else i=t;t=Ge();var r=t.queue,c=r.dispatch;return n!==t.memoizedState&&(he.flags|=2048,Fa(9,{destroy:void 0},Px.bind(null,r,n),null)),[i,c,e]}function Px(e,t){e.action=t}function Th(e){var t=Ge(),n=ze;if(n!==null)return jh(t,n,e);Ge(),t=t.memoizedState,n=Ge();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function Fa(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=he.updateQueue,t===null&&(t=Tl(),he.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function Nh(){return Ge().memoizedState}function Ml(e,t,n,i){var r=ct();he.flags|=e,r.memoizedState=Fa(1|t,{destroy:void 0},n,i===void 0?null:i)}function Al(e,t,n,i){var r=Ge();i=i===void 0?null:i;var c=r.memoizedState.inst;ze!==null&&i!==null&&Lo(i,ze.memoizedState.deps)?r.memoizedState=Fa(t,c,n,i):(he.flags|=e,r.memoizedState=Fa(1|t,c,n,i))}function wh(e,t){Ml(8390656,8,e,t)}function Jo(e,t){Al(2048,8,e,t)}function Wx(e){he.flags|=4;var t=he.updateQueue;if(t===null)t=Tl(),he.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Mh(e){var t=Ge().memoizedState;return Wx({ref:t,nextImpl:e}),function(){if((we&2)!==0)throw Error(o(440));return t.impl.apply(void 0,arguments)}}function Ah(e,t){return Al(4,2,e,t)}function kh(e,t){return Al(4,4,e,t)}function zh(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Eh(e,t,n){n=n!=null?n.concat([e]):null,Al(4,4,zh.bind(null,t,e),n)}function $o(){}function Ch(e,t){var n=Ge();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&Lo(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function Dh(e,t){var n=Ge();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&Lo(t,i[1]))return i[0];if(i=e(),pa){Tn(!0);try{e()}finally{Tn(!1)}}return n.memoizedState=[i,t],i}function Fo(e,t,n){return n===void 0||(cn&1073741824)!==0&&(ve&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=_p(),he.lanes|=e,Un|=e,n)}function _h(e,t,n,i){return jt(n,t)?n:Za.current!==null?(e=Fo(e,n,i),jt(e,t)||(Qe=!0),e):(cn&42)===0||(cn&1073741824)!==0&&(ve&261930)===0?(Qe=!0,e.memoizedState=n):(e=_p(),he.lanes|=e,Un|=e,t)}function Rh(e,t,n,i,r){var c=X.p;X.p=c!==0&&8>c?c:8;var p=E.T,v={};E.T=v,Io(e,!1,t,n);try{var j=r(),k=E.S;if(k!==null&&k(v,j),j!==null&&typeof j=="object"&&typeof j.then=="function"){var O=Zx(j,i);es(e,t,O,kt(e))}else es(e,t,i,kt(e))}catch(B){es(e,t,{then:function(){},status:"rejected",reason:B},kt())}finally{X.p=c,p!==null&&v.types!==null&&(p.types=v.types),E.T=p}}function Ix(){}function Po(e,t,n,i){if(e.tag!==5)throw Error(o(476));var r=Oh(e).queue;Rh(e,r,t,P,n===null?Ix:function(){return Vh(e),n(i)})}function Oh(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:P,baseState:P,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:un,lastRenderedState:P},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:un,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Vh(e){var t=Oh(e);t.next===null&&(t=e.alternate.memoizedState),es(e,t.next.queue,{},kt())}function Wo(){return nt(ys)}function Uh(){return Ge().memoizedState}function Lh(){return Ge().memoizedState}function ev(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=kt();e=Cn(n);var i=Dn(t,e,n);i!==null&&(xt(i,t,n),$i(i,t,n)),t={cache:Ao()},e.payload=t;return}t=t.return}}function tv(e,t,n){var i=kt();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},kl(e)?Hh(t,n):(n=go(e,t,n,i),n!==null&&(xt(n,e,i),qh(n,t,i)))}function Bh(e,t,n){var i=kt();es(e,t,n,i)}function es(e,t,n,i){var r={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(kl(e))Hh(t,r);else{var c=e.alternate;if(e.lanes===0&&(c===null||c.lanes===0)&&(c=t.lastRenderedReducer,c!==null))try{var p=t.lastRenderedState,v=c(p,n);if(r.hasEagerState=!0,r.eagerState=v,jt(v,p))return ol(e,t,r,0),De===null&&rl(),!1}catch{}if(n=go(e,t,r,i),n!==null)return xt(n,e,i),qh(n,t,i),!0}return!1}function Io(e,t,n,i){if(i={lane:2,revertLane:Cc(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},kl(e)){if(t)throw Error(o(479))}else t=go(e,n,i,2),t!==null&&xt(t,e,2)}function kl(e){var t=e.alternate;return e===he||t!==null&&t===he}function Hh(e,t){Ja=Sl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function qh(e,t,n){if((n&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,Kd(e,n)}}var ts={readContext:nt,use:Nl,useCallback:Le,useContext:Le,useEffect:Le,useImperativeHandle:Le,useLayoutEffect:Le,useInsertionEffect:Le,useMemo:Le,useReducer:Le,useRef:Le,useState:Le,useDebugValue:Le,useDeferredValue:Le,useTransition:Le,useSyncExternalStore:Le,useId:Le,useHostTransitionStatus:Le,useFormState:Le,useActionState:Le,useOptimistic:Le,useMemoCache:Le,useCacheRefresh:Le};ts.useEffectEvent=Le;var Yh={readContext:nt,use:Nl,useCallback:function(e,t){return ct().memoizedState=[e,t===void 0?null:t],e},useContext:nt,useEffect:wh,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Ml(4194308,4,zh.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ml(4194308,4,e,t)},useInsertionEffect:function(e,t){Ml(4,2,e,t)},useMemo:function(e,t){var n=ct();t=t===void 0?null:t;var i=e();if(pa){Tn(!0);try{e()}finally{Tn(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=ct();if(n!==void 0){var r=n(t);if(pa){Tn(!0);try{n(t)}finally{Tn(!1)}}}else r=t;return i.memoizedState=i.baseState=r,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},i.queue=e,e=e.dispatch=tv.bind(null,he,e),[i.memoizedState,e]},useRef:function(e){var t=ct();return e={current:e},t.memoizedState=e},useState:function(e){e=Qo(e);var t=e.queue,n=Bh.bind(null,he,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:$o,useDeferredValue:function(e,t){var n=ct();return Fo(n,e,t)},useTransition:function(){var e=Qo(!1);return e=Rh.bind(null,he,e.queue,!0,!1),ct().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=he,r=ct();if(Se){if(n===void 0)throw Error(o(407));n=n()}else{if(n=t(),De===null)throw Error(o(349));(ve&127)!==0||ch(i,t,n)}r.memoizedState=n;var c={value:n,getSnapshot:t};return r.queue=c,wh(dh.bind(null,i,c,e),[e]),i.flags|=2048,Fa(9,{destroy:void 0},uh.bind(null,i,c,n,t),null),n},useId:function(){var e=ct(),t=De.identifierPrefix;if(Se){var n=Ft,i=$t;n=(i&~(1<<32-St(i)-1)).toString(32)+n,t="_"+t+"R_"+n,n=jl++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=Jx++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Wo,useFormState:bh,useActionState:bh,useOptimistic:function(e){var t=ct();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Io.bind(null,he,!0,n),n.dispatch=t,[e,t]},useMemoCache:Go,useCacheRefresh:function(){return ct().memoizedState=ev.bind(null,he)},useEffectEvent:function(e){var t=ct(),n={impl:e};return t.memoizedState=n,function(){if((we&2)!==0)throw Error(o(440));return n.impl.apply(void 0,arguments)}}},ec={readContext:nt,use:Nl,useCallback:Ch,useContext:nt,useEffect:Jo,useImperativeHandle:Eh,useInsertionEffect:Ah,useLayoutEffect:kh,useMemo:Dh,useReducer:wl,useRef:Nh,useState:function(){return wl(un)},useDebugValue:$o,useDeferredValue:function(e,t){var n=Ge();return _h(n,ze.memoizedState,e,t)},useTransition:function(){var e=wl(un)[0],t=Ge().memoizedState;return[typeof e=="boolean"?e:Ii(e),t]},useSyncExternalStore:oh,useId:Uh,useHostTransitionStatus:Wo,useFormState:Sh,useActionState:Sh,useOptimistic:function(e,t){var n=Ge();return ph(n,ze,e,t)},useMemoCache:Go,useCacheRefresh:Lh};ec.useEffectEvent=Mh;var Gh={readContext:nt,use:Nl,useCallback:Ch,useContext:nt,useEffect:Jo,useImperativeHandle:Eh,useInsertionEffect:Ah,useLayoutEffect:kh,useMemo:Dh,useReducer:Ko,useRef:Nh,useState:function(){return Ko(un)},useDebugValue:$o,useDeferredValue:function(e,t){var n=Ge();return ze===null?Fo(n,e,t):_h(n,ze.memoizedState,e,t)},useTransition:function(){var e=Ko(un)[0],t=Ge().memoizedState;return[typeof e=="boolean"?e:Ii(e),t]},useSyncExternalStore:oh,useId:Uh,useHostTransitionStatus:Wo,useFormState:Th,useActionState:Th,useOptimistic:function(e,t){var n=Ge();return ze!==null?ph(n,ze,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Go,useCacheRefresh:Lh};Gh.useEffectEvent=Mh;function tc(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:b({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var nc={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=kt(),r=Cn(i);r.payload=t,n!=null&&(r.callback=n),t=Dn(e,r,i),t!==null&&(xt(t,e,i),$i(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=kt(),r=Cn(i);r.tag=1,r.payload=t,n!=null&&(r.callback=n),t=Dn(e,r,i),t!==null&&(xt(t,e,i),$i(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=kt(),i=Cn(n);i.tag=2,t!=null&&(i.callback=t),t=Dn(e,i,n),t!==null&&(xt(t,e,n),$i(t,e,n))}};function Xh(e,t,n,i,r,c,p){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,c,p):t.prototype&&t.prototype.isPureReactComponent?!qi(n,i)||!qi(r,c):!0}function Kh(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&nc.enqueueReplaceState(t,t.state,null)}function ma(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=b({},n));for(var r in e)n[r]===void 0&&(n[r]=e[r])}return n}function Qh(e){ll(e)}function Zh(e){console.error(e)}function Jh(e){ll(e)}function zl(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function $h(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function ac(e,t,n){return n=Cn(n),n.tag=3,n.payload={element:null},n.callback=function(){zl(e,t)},n}function Fh(e){return e=Cn(e),e.tag=3,e}function Ph(e,t,n,i){var r=n.type.getDerivedStateFromError;if(typeof r=="function"){var c=i.value;e.payload=function(){return r(c)},e.callback=function(){$h(t,n,i)}}var p=n.stateNode;p!==null&&typeof p.componentDidCatch=="function"&&(e.callback=function(){$h(t,n,i),typeof r!="function"&&(Ln===null?Ln=new Set([this]):Ln.add(this));var v=i.stack;this.componentDidCatch(i.value,{componentStack:v!==null?v:""})})}function nv(e,t,n,i,r){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&Ya(t,n,r,!0),n=Nt.current,n!==null){switch(n.tag){case 31:case 13:return Vt===null?ql():n.alternate===null&&Be===0&&(Be=3),n.flags&=-257,n.flags|=65536,n.lanes=r,i===gl?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),kc(e,i,r)),!1;case 22:return n.flags|=65536,i===gl?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),kc(e,i,r)),!1}throw Error(o(435,n.tag))}return kc(e,i,r),ql(),!1}if(Se)return t=Nt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=r,i!==jo&&(e=Error(o(422),{cause:i}),Xi(Dt(e,n)))):(i!==jo&&(t=Error(o(423),{cause:i}),Xi(Dt(t,n))),e=e.current.alternate,e.flags|=65536,r&=-r,e.lanes|=r,i=Dt(i,n),r=ac(e.stateNode,i,r),_o(e,r),Be!==4&&(Be=2)),!1;var c=Error(o(520),{cause:i});if(c=Dt(c,n),cs===null?cs=[c]:cs.push(c),Be!==4&&(Be=2),t===null)return!0;i=Dt(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=r&-r,n.lanes|=e,e=ac(n.stateNode,i,e),_o(n,e),!1;case 1:if(t=n.type,c=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(Ln===null||!Ln.has(c))))return n.flags|=65536,r&=-r,n.lanes|=r,r=Fh(r),Ph(r,e,n,i),_o(n,r),!1}n=n.return}while(n!==null);return!1}var ic=Error(o(461)),Qe=!1;function at(e,t,n,i){t.child=e===null?th(t,null,n,i):ha(t,e.child,n,i)}function Wh(e,t,n,i,r){n=n.render;var c=t.ref;if("ref"in i){var p={};for(var v in i)v!=="ref"&&(p[v]=i[v])}else p=i;return ca(t),i=Bo(e,t,n,p,c,r),v=Ho(),e!==null&&!Qe?(qo(e,t,r),dn(e,t,r)):(Se&&v&&bo(t),t.flags|=1,at(e,t,i,r),t.child)}function Ih(e,t,n,i,r){if(e===null){var c=n.type;return typeof c=="function"&&!yo(c)&&c.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=c,ep(e,t,c,i,r)):(e=ul(n.type,null,i,t,t.mode,r),e.ref=t.ref,e.return=t,t.child=e)}if(c=e.child,!fc(e,r)){var p=c.memoizedProps;if(n=n.compare,n=n!==null?n:qi,n(p,i)&&e.ref===t.ref)return dn(e,t,r)}return t.flags|=1,e=sn(c,i),e.ref=t.ref,e.return=t,t.child=e}function ep(e,t,n,i,r){if(e!==null){var c=e.memoizedProps;if(qi(c,i)&&e.ref===t.ref)if(Qe=!1,t.pendingProps=i=c,fc(e,r))(e.flags&131072)!==0&&(Qe=!0);else return t.lanes=e.lanes,dn(e,t,r)}return sc(e,t,n,i,r)}function tp(e,t,n,i){var r=i.children,c=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((t.flags&128)!==0){if(c=c!==null?c.baseLanes|n:n,e!==null){for(i=t.child=e.child,r=0;i!==null;)r=r|i.lanes|i.childLanes,i=i.sibling;i=r&~c}else i=0,t.child=null;return np(e,t,c,n,i)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&pl(t,c!==null?c.cachePool:null),c!==null?ih(t,c):Oo(),sh(t);else return i=t.lanes=536870912,np(e,t,c!==null?c.baseLanes|n:n,n,i)}else c!==null?(pl(t,c.cachePool),ih(t,c),Rn(),t.memoizedState=null):(e!==null&&pl(t,null),Oo(),Rn());return at(e,t,r,n),t.child}function ns(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function np(e,t,n,i,r){var c=zo();return c=c===null?null:{parent:Xe._currentValue,pool:c},t.memoizedState={baseLanes:n,cachePool:c},e!==null&&pl(t,null),Oo(),sh(t),e!==null&&Ya(e,t,i,!0),t.childLanes=r,null}function El(e,t){return t=Dl({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function ap(e,t,n){return ha(t,e.child,null,n),e=El(t,t.pendingProps),e.flags|=2,wt(t),t.memoizedState=null,e}function av(e,t,n){var i=t.pendingProps,r=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Se){if(i.mode==="hidden")return e=El(t,i),t.lanes=536870912,ns(null,e);if(Uo(t),(e=_e)?(e=mm(e,Ot),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Mn!==null?{id:$t,overflow:Ft}:null,retryLane:536870912,hydrationErrors:null},n=Hf(e),n.return=t,t.child=n,tt=t,_e=null)):e=null,e===null)throw kn(t);return t.lanes=536870912,null}return El(t,i)}var c=e.memoizedState;if(c!==null){var p=c.dehydrated;if(Uo(t),r)if(t.flags&256)t.flags&=-257,t=ap(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(o(558));else if(Qe||Ya(e,t,n,!1),r=(n&e.childLanes)!==0,Qe||r){if(i=De,i!==null&&(p=Qd(i,n),p!==0&&p!==c.retryLane))throw c.retryLane=p,sa(e,p),xt(i,e,p),ic;ql(),t=ap(e,t,n)}else e=c.treeContext,_e=Ut(p.nextSibling),tt=t,Se=!0,An=null,Ot=!1,e!==null&&Gf(t,e),t=El(t,i),t.flags|=4096;return t}return e=sn(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Cl(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(o(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function sc(e,t,n,i,r){return ca(t),n=Bo(e,t,n,i,void 0,r),i=Ho(),e!==null&&!Qe?(qo(e,t,r),dn(e,t,r)):(Se&&i&&bo(t),t.flags|=1,at(e,t,n,r),t.child)}function ip(e,t,n,i,r,c){return ca(t),t.updateQueue=null,n=rh(t,i,n,r),lh(e),i=Ho(),e!==null&&!Qe?(qo(e,t,c),dn(e,t,c)):(Se&&i&&bo(t),t.flags|=1,at(e,t,n,c),t.child)}function sp(e,t,n,i,r){if(ca(t),t.stateNode===null){var c=La,p=n.contextType;typeof p=="object"&&p!==null&&(c=nt(p)),c=new n(i,c),t.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=nc,t.stateNode=c,c._reactInternals=t,c=t.stateNode,c.props=i,c.state=t.memoizedState,c.refs={},Co(t),p=n.contextType,c.context=typeof p=="object"&&p!==null?nt(p):La,c.state=t.memoizedState,p=n.getDerivedStateFromProps,typeof p=="function"&&(tc(t,n,p,i),c.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(p=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),p!==c.state&&nc.enqueueReplaceState(c,c.state,null),Pi(t,i,c,r),Fi(),c.state=t.memoizedState),typeof c.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){c=t.stateNode;var v=t.memoizedProps,j=ma(n,v);c.props=j;var k=c.context,O=n.contextType;p=La,typeof O=="object"&&O!==null&&(p=nt(O));var B=n.getDerivedStateFromProps;O=typeof B=="function"||typeof c.getSnapshotBeforeUpdate=="function",v=t.pendingProps!==v,O||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(v||k!==p)&&Kh(t,c,i,p),En=!1;var z=t.memoizedState;c.state=z,Pi(t,i,c,r),Fi(),k=t.memoizedState,v||z!==k||En?(typeof B=="function"&&(tc(t,n,B,i),k=t.memoizedState),(j=En||Xh(t,n,j,i,z,k,p))?(O||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(t.flags|=4194308)):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=k),c.props=i,c.state=k,c.context=p,i=j):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{c=t.stateNode,Do(e,t),p=t.memoizedProps,O=ma(n,p),c.props=O,B=t.pendingProps,z=c.context,k=n.contextType,j=La,typeof k=="object"&&k!==null&&(j=nt(k)),v=n.getDerivedStateFromProps,(k=typeof v=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(p!==B||z!==j)&&Kh(t,c,i,j),En=!1,z=t.memoizedState,c.state=z,Pi(t,i,c,r),Fi();var C=t.memoizedState;p!==B||z!==C||En||e!==null&&e.dependencies!==null&&fl(e.dependencies)?(typeof v=="function"&&(tc(t,n,v,i),C=t.memoizedState),(O=En||Xh(t,n,O,i,z,C,j)||e!==null&&e.dependencies!==null&&fl(e.dependencies))?(k||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(i,C,j),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(i,C,j)),typeof c.componentDidUpdate=="function"&&(t.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof c.componentDidUpdate!="function"||p===e.memoizedProps&&z===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&z===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=C),c.props=i,c.state=C,c.context=j,i=O):(typeof c.componentDidUpdate!="function"||p===e.memoizedProps&&z===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&z===e.memoizedState||(t.flags|=1024),i=!1)}return c=i,Cl(e,t),i=(t.flags&128)!==0,c||i?(c=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:c.render(),t.flags|=1,e!==null&&i?(t.child=ha(t,e.child,null,r),t.child=ha(t,null,n,r)):at(e,t,n,r),t.memoizedState=c.state,e=t.child):e=dn(e,t,r),e}function lp(e,t,n,i){return ra(),t.flags|=256,at(e,t,n,i),t.child}var lc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function rc(e){return{baseLanes:e,cachePool:$f()}}function oc(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=At),e}function rp(e,t,n){var i=t.pendingProps,r=!1,c=(t.flags&128)!==0,p;if((p=c)||(p=e!==null&&e.memoizedState===null?!1:(Ye.current&2)!==0),p&&(r=!0,t.flags&=-129),p=(t.flags&32)!==0,t.flags&=-33,e===null){if(Se){if(r?_n(t):Rn(),(e=_e)?(e=mm(e,Ot),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Mn!==null?{id:$t,overflow:Ft}:null,retryLane:536870912,hydrationErrors:null},n=Hf(e),n.return=t,t.child=n,tt=t,_e=null)):e=null,e===null)throw kn(t);return Xc(e)?t.lanes=32:t.lanes=536870912,null}var v=i.children;return i=i.fallback,r?(Rn(),r=t.mode,v=Dl({mode:"hidden",children:v},r),i=la(i,r,n,null),v.return=t,i.return=t,v.sibling=i,t.child=v,i=t.child,i.memoizedState=rc(n),i.childLanes=oc(e,p,n),t.memoizedState=lc,ns(null,i)):(_n(t),cc(t,v))}var j=e.memoizedState;if(j!==null&&(v=j.dehydrated,v!==null)){if(c)t.flags&256?(_n(t),t.flags&=-257,t=uc(e,t,n)):t.memoizedState!==null?(Rn(),t.child=e.child,t.flags|=128,t=null):(Rn(),v=i.fallback,r=t.mode,i=Dl({mode:"visible",children:i.children},r),v=la(v,r,n,null),v.flags|=2,i.return=t,v.return=t,i.sibling=v,t.child=i,ha(t,e.child,null,n),i=t.child,i.memoizedState=rc(n),i.childLanes=oc(e,p,n),t.memoizedState=lc,t=ns(null,i));else if(_n(t),Xc(v)){if(p=v.nextSibling&&v.nextSibling.dataset,p)var k=p.dgst;p=k,i=Error(o(419)),i.stack="",i.digest=p,Xi({value:i,source:null,stack:null}),t=uc(e,t,n)}else if(Qe||Ya(e,t,n,!1),p=(n&e.childLanes)!==0,Qe||p){if(p=De,p!==null&&(i=Qd(p,n),i!==0&&i!==j.retryLane))throw j.retryLane=i,sa(e,i),xt(p,e,i),ic;Gc(v)||ql(),t=uc(e,t,n)}else Gc(v)?(t.flags|=192,t.child=e.child,t=null):(e=j.treeContext,_e=Ut(v.nextSibling),tt=t,Se=!0,An=null,Ot=!1,e!==null&&Gf(t,e),t=cc(t,i.children),t.flags|=4096);return t}return r?(Rn(),v=i.fallback,r=t.mode,j=e.child,k=j.sibling,i=sn(j,{mode:"hidden",children:i.children}),i.subtreeFlags=j.subtreeFlags&65011712,k!==null?v=sn(k,v):(v=la(v,r,n,null),v.flags|=2),v.return=t,i.return=t,i.sibling=v,t.child=i,ns(null,i),i=t.child,v=e.child.memoizedState,v===null?v=rc(n):(r=v.cachePool,r!==null?(j=Xe._currentValue,r=r.parent!==j?{parent:j,pool:j}:r):r=$f(),v={baseLanes:v.baseLanes|n,cachePool:r}),i.memoizedState=v,i.childLanes=oc(e,p,n),t.memoizedState=lc,ns(e.child,i)):(_n(t),n=e.child,e=n.sibling,n=sn(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(p=t.deletions,p===null?(t.deletions=[e],t.flags|=16):p.push(e)),t.child=n,t.memoizedState=null,n)}function cc(e,t){return t=Dl({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Dl(e,t){return e=Tt(22,e,null,t),e.lanes=0,e}function uc(e,t,n){return ha(t,e.child,null,n),e=cc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function op(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),wo(e.return,t,n)}function dc(e,t,n,i,r,c){var p=e.memoizedState;p===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r,treeForkCount:c}:(p.isBackwards=t,p.rendering=null,p.renderingStartTime=0,p.last=i,p.tail=n,p.tailMode=r,p.treeForkCount=c)}function cp(e,t,n){var i=t.pendingProps,r=i.revealOrder,c=i.tail;i=i.children;var p=Ye.current,v=(p&2)!==0;if(v?(p=p&1|2,t.flags|=128):p&=1,$(Ye,p),at(e,t,i,n),i=Se?Gi:0,!v&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&op(e,n,t);else if(e.tag===19)op(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(r){case"forwards":for(n=t.child,r=null;n!==null;)e=n.alternate,e!==null&&bl(e)===null&&(r=n),n=n.sibling;n=r,n===null?(r=t.child,t.child=null):(r=n.sibling,n.sibling=null),dc(t,!1,r,n,c,i);break;case"backwards":case"unstable_legacy-backwards":for(n=null,r=t.child,t.child=null;r!==null;){if(e=r.alternate,e!==null&&bl(e)===null){t.child=r;break}e=r.sibling,r.sibling=n,n=r,r=e}dc(t,!0,n,null,c,i);break;case"together":dc(t,!1,null,null,void 0,i);break;default:t.memoizedState=null}return t.child}function dn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Un|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Ya(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,n=sn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=sn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function fc(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&fl(e)))}function iv(e,t,n){switch(t.tag){case 3:ot(t,t.stateNode.containerInfo),zn(t,Xe,e.memoizedState.cache),ra();break;case 27:case 5:ki(t);break;case 4:ot(t,t.stateNode.containerInfo);break;case 10:zn(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Uo(t),null;break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(_n(t),t.flags|=128,null):(n&t.child.childLanes)!==0?rp(e,t,n):(_n(t),e=dn(e,t,n),e!==null?e.sibling:null);_n(t);break;case 19:var r=(e.flags&128)!==0;if(i=(n&t.childLanes)!==0,i||(Ya(e,t,n,!1),i=(n&t.childLanes)!==0),r){if(i)return cp(e,t,n);t.flags|=128}if(r=t.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),$(Ye,Ye.current),i)break;return null;case 22:return t.lanes=0,tp(e,t,n,t.pendingProps);case 24:zn(t,Xe,e.memoizedState.cache)}return dn(e,t,n)}function up(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Qe=!0;else{if(!fc(e,n)&&(t.flags&128)===0)return Qe=!1,iv(e,t,n);Qe=(e.flags&131072)!==0}else Qe=!1,Se&&(t.flags&1048576)!==0&&Yf(t,Gi,t.index);switch(t.lanes=0,t.tag){case 16:e:{var i=t.pendingProps;if(e=da(t.elementType),t.type=e,typeof e=="function")yo(e)?(i=ma(e,i),t.tag=1,t=sp(null,t,e,i,n)):(t.tag=0,t=sc(null,t,e,i,n));else{if(e!=null){var r=e.$$typeof;if(r===V){t.tag=11,t=Wh(null,t,e,i,n);break e}else if(r===F){t.tag=14,t=Ih(null,t,e,i,n);break e}}throw t=te(e)||e,Error(o(306,t,""))}}return t;case 0:return sc(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,r=ma(i,t.pendingProps),sp(e,t,i,r,n);case 3:e:{if(ot(t,t.stateNode.containerInfo),e===null)throw Error(o(387));i=t.pendingProps;var c=t.memoizedState;r=c.element,Do(e,t),Pi(t,i,null,n);var p=t.memoizedState;if(i=p.cache,zn(t,Xe,i),i!==c.cache&&Mo(t,[Xe],n,!0),Fi(),i=p.element,c.isDehydrated)if(c={element:i,isDehydrated:!1,cache:p.cache},t.updateQueue.baseState=c,t.memoizedState=c,t.flags&256){t=lp(e,t,i,n);break e}else if(i!==r){r=Dt(Error(o(424)),t),Xi(r),t=lp(e,t,i,n);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,_e=Ut(e.firstChild),tt=t,Se=!0,An=null,Ot=!0,n=th(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ra(),i===r){t=dn(e,t,n);break e}at(e,t,i,n)}t=t.child}return t;case 26:return Cl(e,t),e===null?(n=Sm(t.type,null,t.pendingProps,null))?t.memoizedState=n:Se||(n=t.type,e=t.pendingProps,i=Jl(ge.current).createElement(n),i[et]=t,i[ft]=e,it(i,n,e),We(i),t.stateNode=i):t.memoizedState=Sm(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return ki(t),e===null&&Se&&(i=t.stateNode=xm(t.type,t.pendingProps,ge.current),tt=t,Ot=!0,r=_e,Yn(t.type)?(Kc=r,_e=Ut(i.firstChild)):_e=r),at(e,t,t.pendingProps.children,n),Cl(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Se&&((r=i=_e)&&(i=Rv(i,t.type,t.pendingProps,Ot),i!==null?(t.stateNode=i,tt=t,_e=Ut(i.firstChild),Ot=!1,r=!0):r=!1),r||kn(t)),ki(t),r=t.type,c=t.pendingProps,p=e!==null?e.memoizedProps:null,i=c.children,Hc(r,c)?i=null:p!==null&&Hc(r,p)&&(t.flags|=32),t.memoizedState!==null&&(r=Bo(e,t,$x,null,null,n),ys._currentValue=r),Cl(e,t),at(e,t,i,n),t.child;case 6:return e===null&&Se&&((e=n=_e)&&(n=Ov(n,t.pendingProps,Ot),n!==null?(t.stateNode=n,tt=t,_e=null,e=!0):e=!1),e||kn(t)),null;case 13:return rp(e,t,n);case 4:return ot(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=ha(t,null,i,n):at(e,t,i,n),t.child;case 11:return Wh(e,t,t.type,t.pendingProps,n);case 7:return at(e,t,t.pendingProps,n),t.child;case 8:return at(e,t,t.pendingProps.children,n),t.child;case 12:return at(e,t,t.pendingProps.children,n),t.child;case 10:return i=t.pendingProps,zn(t,t.type,i.value),at(e,t,i.children,n),t.child;case 9:return r=t.type._context,i=t.pendingProps.children,ca(t),r=nt(r),i=i(r),t.flags|=1,at(e,t,i,n),t.child;case 14:return Ih(e,t,t.type,t.pendingProps,n);case 15:return ep(e,t,t.type,t.pendingProps,n);case 19:return cp(e,t,n);case 31:return av(e,t,n);case 22:return tp(e,t,n,t.pendingProps);case 24:return ca(t),i=nt(Xe),e===null?(r=zo(),r===null&&(r=De,c=Ao(),r.pooledCache=c,c.refCount++,c!==null&&(r.pooledCacheLanes|=n),r=c),t.memoizedState={parent:i,cache:r},Co(t),zn(t,Xe,r)):((e.lanes&n)!==0&&(Do(e,t),Pi(t,null,null,n),Fi()),r=e.memoizedState,c=t.memoizedState,r.parent!==i?(r={parent:i,cache:i},t.memoizedState=r,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=r),zn(t,Xe,i)):(i=c.cache,zn(t,Xe,i),i!==r.cache&&Mo(t,[Xe],n,!0))),at(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(o(156,t.tag))}function fn(e){e.flags|=4}function hc(e,t,n,i,r){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(r&335544128)===r)if(e.stateNode.complete)e.flags|=8192;else if(Up())e.flags|=8192;else throw fa=gl,Eo}else e.flags&=-16777217}function dp(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Mm(t))if(Up())e.flags|=8192;else throw fa=gl,Eo}function _l(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Gd():536870912,e.lanes|=t,ei|=t)}function as(e,t){if(!Se)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Re(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var r=e.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&65011712,i|=r.flags&65011712,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function sv(e,t,n){var i=t.pendingProps;switch(So(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Re(t),null;case 1:return Re(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),on(Xe),qe(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(qa(t)?fn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,To())),Re(t),null;case 26:var r=t.type,c=t.memoizedState;return e===null?(fn(t),c!==null?(Re(t),dp(t,c)):(Re(t),hc(t,r,null,i,n))):c?c!==e.memoizedState?(fn(t),Re(t),dp(t,c)):(Re(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&fn(t),Re(t),hc(t,r,e,i,n)),null;case 27:if(Xs(t),n=ge.current,r=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&fn(t);else{if(!i){if(t.stateNode===null)throw Error(o(166));return Re(t),null}e=ne.current,qa(t)?Xf(t):(e=xm(r,i,n),t.stateNode=e,fn(t))}return Re(t),null;case 5:if(Xs(t),r=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&fn(t);else{if(!i){if(t.stateNode===null)throw Error(o(166));return Re(t),null}if(c=ne.current,qa(t))Xf(t);else{var p=Jl(ge.current);switch(c){case 1:c=p.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:c=p.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":c=p.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":c=p.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":c=p.createElement("div"),c.innerHTML="<script><\/script>",c=c.removeChild(c.firstChild);break;case"select":c=typeof i.is=="string"?p.createElement("select",{is:i.is}):p.createElement("select"),i.multiple?c.multiple=!0:i.size&&(c.size=i.size);break;default:c=typeof i.is=="string"?p.createElement(r,{is:i.is}):p.createElement(r)}}c[et]=t,c[ft]=i;e:for(p=t.child;p!==null;){if(p.tag===5||p.tag===6)c.appendChild(p.stateNode);else if(p.tag!==4&&p.tag!==27&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;p=p.return}p.sibling.return=p.return,p=p.sibling}t.stateNode=c;e:switch(it(c,r,i),r){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&fn(t)}}return Re(t),hc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&fn(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(o(166));if(e=ge.current,qa(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,r=tt,r!==null)switch(r.tag){case 27:case 5:i=r.memoizedProps}e[et]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||rm(e.nodeValue,n)),e||kn(t,!0)}else e=Jl(e).createTextNode(i),e[et]=t,t.stateNode=e}return Re(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(i=qa(t),n!==null){if(e===null){if(!i)throw Error(o(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(557));e[et]=t}else ra(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Re(t),e=!1}else n=To(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(wt(t),t):(wt(t),null);if((t.flags&128)!==0)throw Error(o(558))}return Re(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(r=qa(t),i!==null&&i.dehydrated!==null){if(e===null){if(!r)throw Error(o(318));if(r=t.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(o(317));r[et]=t}else ra(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Re(t),r=!1}else r=To(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),r=!0;if(!r)return t.flags&256?(wt(t),t):(wt(t),null)}return wt(t),(t.flags&128)!==0?(t.lanes=n,t):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=t.child,r=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(r=i.alternate.memoizedState.cachePool.pool),c=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(c=i.memoizedState.cachePool.pool),c!==r&&(i.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),_l(t,t.updateQueue),Re(t),null);case 4:return qe(),e===null&&Oc(t.stateNode.containerInfo),Re(t),null;case 10:return on(t.type),Re(t),null;case 19:if(L(Ye),i=t.memoizedState,i===null)return Re(t),null;if(r=(t.flags&128)!==0,c=i.rendering,c===null)if(r)as(i,!1);else{if(Be!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(c=bl(e),c!==null){for(t.flags|=128,as(i,!1),e=c.updateQueue,t.updateQueue=e,_l(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Bf(n,e),n=n.sibling;return $(Ye,Ye.current&1|2),Se&&ln(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&vt()>Ll&&(t.flags|=128,r=!0,as(i,!1),t.lanes=4194304)}else{if(!r)if(e=bl(c),e!==null){if(t.flags|=128,r=!0,e=e.updateQueue,t.updateQueue=e,_l(t,e),as(i,!0),i.tail===null&&i.tailMode==="hidden"&&!c.alternate&&!Se)return Re(t),null}else 2*vt()-i.renderingStartTime>Ll&&n!==536870912&&(t.flags|=128,r=!0,as(i,!1),t.lanes=4194304);i.isBackwards?(c.sibling=t.child,t.child=c):(e=i.last,e!==null?e.sibling=c:t.child=c,i.last=c)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=vt(),e.sibling=null,n=Ye.current,$(Ye,r?n&1|2:n&1),Se&&ln(t,i.treeForkCount),e):(Re(t),null);case 22:case 23:return wt(t),Vo(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(n&536870912)!==0&&(t.flags&128)===0&&(Re(t),t.subtreeFlags&6&&(t.flags|=8192)):Re(t),n=t.updateQueue,n!==null&&_l(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&L(ua),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),on(Xe),Re(t),null;case 25:return null;case 30:return null}throw Error(o(156,t.tag))}function lv(e,t){switch(So(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return on(Xe),qe(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Xs(t),null;case 31:if(t.memoizedState!==null){if(wt(t),t.alternate===null)throw Error(o(340));ra()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(wt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));ra()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return L(Ye),null;case 4:return qe(),null;case 10:return on(t.type),null;case 22:case 23:return wt(t),Vo(),e!==null&&L(ua),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return on(Xe),null;case 25:return null;default:return null}}function fp(e,t){switch(So(t),t.tag){case 3:on(Xe),qe();break;case 26:case 27:case 5:Xs(t);break;case 4:qe();break;case 31:t.memoizedState!==null&&wt(t);break;case 13:wt(t);break;case 19:L(Ye);break;case 10:on(t.type);break;case 22:case 23:wt(t),Vo(),e!==null&&L(ua);break;case 24:on(Xe)}}function is(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var r=i.next;n=r;do{if((n.tag&e)===e){i=void 0;var c=n.create,p=n.inst;i=c(),p.destroy=i}n=n.next}while(n!==r)}}catch(v){ke(t,t.return,v)}}function On(e,t,n){try{var i=t.updateQueue,r=i!==null?i.lastEffect:null;if(r!==null){var c=r.next;i=c;do{if((i.tag&e)===e){var p=i.inst,v=p.destroy;if(v!==void 0){p.destroy=void 0,r=t;var j=n,k=v;try{k()}catch(O){ke(r,j,O)}}}i=i.next}while(i!==c)}}catch(O){ke(t,t.return,O)}}function hp(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{ah(t,n)}catch(i){ke(e,e.return,i)}}}function pp(e,t,n){n.props=ma(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){ke(e,t,i)}}function ss(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(r){ke(e,t,r)}}function Pt(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(r){ke(e,t,r)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(r){ke(e,t,r)}else n.current=null}function mp(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break e;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(r){ke(e,e.return,r)}}function pc(e,t,n){try{var i=e.stateNode;kv(i,e.type,n,t),i[ft]=t}catch(r){ke(e,e.return,r)}}function gp(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Yn(e.type)||e.tag===4}function mc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||gp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Yn(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function gc(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=nn));else if(i!==4&&(i===27&&Yn(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(gc(e,t,n),e=e.sibling;e!==null;)gc(e,t,n),e=e.sibling}function Rl(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(i===27&&Yn(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Rl(e,t,n),e=e.sibling;e!==null;)Rl(e,t,n),e=e.sibling}function yp(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,r=t.attributes;r.length;)t.removeAttributeNode(r[0]);it(t,i,n),t[et]=e,t[ft]=n}catch(c){ke(e,e.return,c)}}var hn=!1,Ze=!1,yc=!1,xp=typeof WeakSet=="function"?WeakSet:Set,Ie=null;function rv(e,t){if(e=e.containerInfo,Lc=tr,e=Ef(e),co(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,c=i.focusNode;i=i.focusOffset;try{n.nodeType,c.nodeType}catch{n=null;break e}var p=0,v=-1,j=-1,k=0,O=0,B=e,z=null;t:for(;;){for(var C;B!==n||r!==0&&B.nodeType!==3||(v=p+r),B!==c||i!==0&&B.nodeType!==3||(j=p+i),B.nodeType===3&&(p+=B.nodeValue.length),(C=B.firstChild)!==null;)z=B,B=C;for(;;){if(B===e)break t;if(z===n&&++k===r&&(v=p),z===c&&++O===i&&(j=p),(C=B.nextSibling)!==null)break;B=z,z=B.parentNode}B=C}n=v===-1||j===-1?null:{start:v,end:j}}else n=null}n=n||{start:0,end:0}}else n=null;for(Bc={focusedElem:e,selectionRange:n},tr=!1,Ie=t;Ie!==null;)if(t=Ie,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Ie=e;else for(;Ie!==null;){switch(t=Ie,c=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)r=e[n],r.ref.impl=r.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&c!==null){e=void 0,n=t,r=c.memoizedProps,c=c.memoizedState,i=n.stateNode;try{var I=ma(n.type,r);e=i.getSnapshotBeforeUpdate(I,c),i.__reactInternalSnapshotBeforeUpdate=e}catch(oe){ke(n,n.return,oe)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)Yc(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Yc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(o(163))}if(e=t.sibling,e!==null){e.return=t.return,Ie=e;break}Ie=t.return}}function vp(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:mn(e,n),i&4&&is(5,n);break;case 1:if(mn(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(p){ke(n,n.return,p)}else{var r=ma(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(r,t,e.__reactInternalSnapshotBeforeUpdate)}catch(p){ke(n,n.return,p)}}i&64&&hp(n),i&512&&ss(n,n.return);break;case 3:if(mn(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{ah(e,t)}catch(p){ke(n,n.return,p)}}break;case 27:t===null&&i&4&&yp(n);case 26:case 5:mn(e,n),t===null&&i&4&&mp(n),i&512&&ss(n,n.return);break;case 12:mn(e,n);break;case 31:mn(e,n),i&4&&jp(e,n);break;case 13:mn(e,n),i&4&&Tp(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=gv.bind(null,n),Vv(e,n))));break;case 22:if(i=n.memoizedState!==null||hn,!i){t=t!==null&&t.memoizedState!==null||Ze,r=hn;var c=Ze;hn=i,(Ze=t)&&!c?gn(e,n,(n.subtreeFlags&8772)!==0):mn(e,n),hn=r,Ze=c}break;case 30:break;default:mn(e,n)}}function bp(e){var t=e.alternate;t!==null&&(e.alternate=null,bp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Qr(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ve=null,pt=!1;function pn(e,t,n){for(n=n.child;n!==null;)Sp(e,t,n),n=n.sibling}function Sp(e,t,n){if(bt&&typeof bt.onCommitFiberUnmount=="function")try{bt.onCommitFiberUnmount(zi,n)}catch{}switch(n.tag){case 26:Ze||Pt(n,t),pn(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Ze||Pt(n,t);var i=Ve,r=pt;Yn(n.type)&&(Ve=n.stateNode,pt=!1),pn(e,t,n),ps(n.stateNode),Ve=i,pt=r;break;case 5:Ze||Pt(n,t);case 6:if(i=Ve,r=pt,Ve=null,pn(e,t,n),Ve=i,pt=r,Ve!==null)if(pt)try{(Ve.nodeType===9?Ve.body:Ve.nodeName==="HTML"?Ve.ownerDocument.body:Ve).removeChild(n.stateNode)}catch(c){ke(n,t,c)}else try{Ve.removeChild(n.stateNode)}catch(c){ke(n,t,c)}break;case 18:Ve!==null&&(pt?(e=Ve,hm(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),oi(e)):hm(Ve,n.stateNode));break;case 4:i=Ve,r=pt,Ve=n.stateNode.containerInfo,pt=!0,pn(e,t,n),Ve=i,pt=r;break;case 0:case 11:case 14:case 15:On(2,n,t),Ze||On(4,n,t),pn(e,t,n);break;case 1:Ze||(Pt(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&pp(n,t,i)),pn(e,t,n);break;case 21:pn(e,t,n);break;case 22:Ze=(i=Ze)||n.memoizedState!==null,pn(e,t,n),Ze=i;break;default:pn(e,t,n)}}function jp(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{oi(e)}catch(n){ke(t,t.return,n)}}}function Tp(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{oi(e)}catch(n){ke(t,t.return,n)}}function ov(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new xp),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new xp),t;default:throw Error(o(435,e.tag))}}function Ol(e,t){var n=ov(e);t.forEach(function(i){if(!n.has(i)){n.add(i);var r=yv.bind(null,e,i);i.then(r,r)}})}function mt(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i],c=e,p=t,v=p;e:for(;v!==null;){switch(v.tag){case 27:if(Yn(v.type)){Ve=v.stateNode,pt=!1;break e}break;case 5:Ve=v.stateNode,pt=!1;break e;case 3:case 4:Ve=v.stateNode.containerInfo,pt=!0;break e}v=v.return}if(Ve===null)throw Error(o(160));Sp(c,p,r),Ve=null,pt=!1,c=r.alternate,c!==null&&(c.return=null),r.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Np(t,e),t=t.sibling}var Gt=null;function Np(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:mt(t,e),gt(e),i&4&&(On(3,e,e.return),is(3,e),On(5,e,e.return));break;case 1:mt(t,e),gt(e),i&512&&(Ze||n===null||Pt(n,n.return)),i&64&&hn&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var r=Gt;if(mt(t,e),gt(e),i&512&&(Ze||n===null||Pt(n,n.return)),i&4){var c=n!==null?n.memoizedState:null;if(i=e.memoizedState,n===null)if(i===null)if(e.stateNode===null){e:{i=e.type,n=e.memoizedProps,r=r.ownerDocument||r;t:switch(i){case"title":c=r.getElementsByTagName("title")[0],(!c||c[Di]||c[et]||c.namespaceURI==="http://www.w3.org/2000/svg"||c.hasAttribute("itemprop"))&&(c=r.createElement(i),r.head.insertBefore(c,r.querySelector("head > title"))),it(c,i,n),c[et]=e,We(c),i=c;break e;case"link":var p=Nm("link","href",r).get(i+(n.href||""));if(p){for(var v=0;v<p.length;v++)if(c=p[v],c.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&c.getAttribute("rel")===(n.rel==null?null:n.rel)&&c.getAttribute("title")===(n.title==null?null:n.title)&&c.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){p.splice(v,1);break t}}c=r.createElement(i),it(c,i,n),r.head.appendChild(c);break;case"meta":if(p=Nm("meta","content",r).get(i+(n.content||""))){for(v=0;v<p.length;v++)if(c=p[v],c.getAttribute("content")===(n.content==null?null:""+n.content)&&c.getAttribute("name")===(n.name==null?null:n.name)&&c.getAttribute("property")===(n.property==null?null:n.property)&&c.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&c.getAttribute("charset")===(n.charSet==null?null:n.charSet)){p.splice(v,1);break t}}c=r.createElement(i),it(c,i,n),r.head.appendChild(c);break;default:throw Error(o(468,i))}c[et]=e,We(c),i=c}e.stateNode=i}else wm(r,e.type,e.stateNode);else e.stateNode=Tm(r,i,e.memoizedProps);else c!==i?(c===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):c.count--,i===null?wm(r,e.type,e.stateNode):Tm(r,i,e.memoizedProps)):i===null&&e.stateNode!==null&&pc(e,e.memoizedProps,n.memoizedProps)}break;case 27:mt(t,e),gt(e),i&512&&(Ze||n===null||Pt(n,n.return)),n!==null&&i&4&&pc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(mt(t,e),gt(e),i&512&&(Ze||n===null||Pt(n,n.return)),e.flags&32){r=e.stateNode;try{Ca(r,"")}catch(I){ke(e,e.return,I)}}i&4&&e.stateNode!=null&&(r=e.memoizedProps,pc(e,r,n!==null?n.memoizedProps:r)),i&1024&&(yc=!0);break;case 6:if(mt(t,e),gt(e),i&4){if(e.stateNode===null)throw Error(o(162));i=e.memoizedProps,n=e.stateNode;try{n.nodeValue=i}catch(I){ke(e,e.return,I)}}break;case 3:if(Pl=null,r=Gt,Gt=$l(t.containerInfo),mt(t,e),Gt=r,gt(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{oi(t.containerInfo)}catch(I){ke(e,e.return,I)}yc&&(yc=!1,wp(e));break;case 4:i=Gt,Gt=$l(e.stateNode.containerInfo),mt(t,e),gt(e),Gt=i;break;case 12:mt(t,e),gt(e);break;case 31:mt(t,e),gt(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Ol(e,i)));break;case 13:mt(t,e),gt(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Ul=vt()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Ol(e,i)));break;case 22:r=e.memoizedState!==null;var j=n!==null&&n.memoizedState!==null,k=hn,O=Ze;if(hn=k||r,Ze=O||j,mt(t,e),Ze=O,hn=k,gt(e),i&8192)e:for(t=e.stateNode,t._visibility=r?t._visibility&-2:t._visibility|1,r&&(n===null||j||hn||Ze||ga(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){j=n=t;try{if(c=j.stateNode,r)p=c.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none";else{v=j.stateNode;var B=j.memoizedProps.style,z=B!=null&&B.hasOwnProperty("display")?B.display:null;v.style.display=z==null||typeof z=="boolean"?"":(""+z).trim()}}catch(I){ke(j,j.return,I)}}}else if(t.tag===6){if(n===null){j=t;try{j.stateNode.nodeValue=r?"":j.memoizedProps}catch(I){ke(j,j.return,I)}}}else if(t.tag===18){if(n===null){j=t;try{var C=j.stateNode;r?pm(C,!0):pm(j.stateNode,!1)}catch(I){ke(j,j.return,I)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,Ol(e,n))));break;case 19:mt(t,e),gt(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Ol(e,i)));break;case 30:break;case 21:break;default:mt(t,e),gt(e)}}function gt(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(gp(i)){n=i;break}i=i.return}if(n==null)throw Error(o(160));switch(n.tag){case 27:var r=n.stateNode,c=mc(e);Rl(e,c,r);break;case 5:var p=n.stateNode;n.flags&32&&(Ca(p,""),n.flags&=-33);var v=mc(e);Rl(e,v,p);break;case 3:case 4:var j=n.stateNode.containerInfo,k=mc(e);gc(e,k,j);break;default:throw Error(o(161))}}catch(O){ke(e,e.return,O)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function wp(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;wp(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function mn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)vp(e,t.alternate,t),t=t.sibling}function ga(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:On(4,t,t.return),ga(t);break;case 1:Pt(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&pp(t,t.return,n),ga(t);break;case 27:ps(t.stateNode);case 26:case 5:Pt(t,t.return),ga(t);break;case 22:t.memoizedState===null&&ga(t);break;case 30:ga(t);break;default:ga(t)}e=e.sibling}}function gn(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,r=e,c=t,p=c.flags;switch(c.tag){case 0:case 11:case 15:gn(r,c,n),is(4,c);break;case 1:if(gn(r,c,n),i=c,r=i.stateNode,typeof r.componentDidMount=="function")try{r.componentDidMount()}catch(k){ke(i,i.return,k)}if(i=c,r=i.updateQueue,r!==null){var v=i.stateNode;try{var j=r.shared.hiddenCallbacks;if(j!==null)for(r.shared.hiddenCallbacks=null,r=0;r<j.length;r++)nh(j[r],v)}catch(k){ke(i,i.return,k)}}n&&p&64&&hp(c),ss(c,c.return);break;case 27:yp(c);case 26:case 5:gn(r,c,n),n&&i===null&&p&4&&mp(c),ss(c,c.return);break;case 12:gn(r,c,n);break;case 31:gn(r,c,n),n&&p&4&&jp(r,c);break;case 13:gn(r,c,n),n&&p&4&&Tp(r,c);break;case 22:c.memoizedState===null&&gn(r,c,n),ss(c,c.return);break;case 30:break;default:gn(r,c,n)}t=t.sibling}}function xc(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Ki(n))}function vc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ki(e))}function Xt(e,t,n,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Mp(e,t,n,i),t=t.sibling}function Mp(e,t,n,i){var r=t.flags;switch(t.tag){case 0:case 11:case 15:Xt(e,t,n,i),r&2048&&is(9,t);break;case 1:Xt(e,t,n,i);break;case 3:Xt(e,t,n,i),r&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ki(e)));break;case 12:if(r&2048){Xt(e,t,n,i),e=t.stateNode;try{var c=t.memoizedProps,p=c.id,v=c.onPostCommit;typeof v=="function"&&v(p,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(j){ke(t,t.return,j)}}else Xt(e,t,n,i);break;case 31:Xt(e,t,n,i);break;case 13:Xt(e,t,n,i);break;case 23:break;case 22:c=t.stateNode,p=t.alternate,t.memoizedState!==null?c._visibility&2?Xt(e,t,n,i):ls(e,t):c._visibility&2?Xt(e,t,n,i):(c._visibility|=2,Pa(e,t,n,i,(t.subtreeFlags&10256)!==0||!1)),r&2048&&xc(p,t);break;case 24:Xt(e,t,n,i),r&2048&&vc(t.alternate,t);break;default:Xt(e,t,n,i)}}function Pa(e,t,n,i,r){for(r=r&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var c=e,p=t,v=n,j=i,k=p.flags;switch(p.tag){case 0:case 11:case 15:Pa(c,p,v,j,r),is(8,p);break;case 23:break;case 22:var O=p.stateNode;p.memoizedState!==null?O._visibility&2?Pa(c,p,v,j,r):ls(c,p):(O._visibility|=2,Pa(c,p,v,j,r)),r&&k&2048&&xc(p.alternate,p);break;case 24:Pa(c,p,v,j,r),r&&k&2048&&vc(p.alternate,p);break;default:Pa(c,p,v,j,r)}t=t.sibling}}function ls(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,r=i.flags;switch(i.tag){case 22:ls(n,i),r&2048&&xc(i.alternate,i);break;case 24:ls(n,i),r&2048&&vc(i.alternate,i);break;default:ls(n,i)}t=t.sibling}}var rs=8192;function Wa(e,t,n){if(e.subtreeFlags&rs)for(e=e.child;e!==null;)Ap(e,t,n),e=e.sibling}function Ap(e,t,n){switch(e.tag){case 26:Wa(e,t,n),e.flags&rs&&e.memoizedState!==null&&Jv(n,Gt,e.memoizedState,e.memoizedProps);break;case 5:Wa(e,t,n);break;case 3:case 4:var i=Gt;Gt=$l(e.stateNode.containerInfo),Wa(e,t,n),Gt=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=rs,rs=16777216,Wa(e,t,n),rs=i):Wa(e,t,n));break;default:Wa(e,t,n)}}function kp(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function os(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];Ie=i,Ep(i,e)}kp(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)zp(e),e=e.sibling}function zp(e){switch(e.tag){case 0:case 11:case 15:os(e),e.flags&2048&&On(9,e,e.return);break;case 3:os(e);break;case 12:os(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Vl(e)):os(e);break;default:os(e)}}function Vl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];Ie=i,Ep(i,e)}kp(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:On(8,t,t.return),Vl(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Vl(t));break;default:Vl(t)}e=e.sibling}}function Ep(e,t){for(;Ie!==null;){var n=Ie;switch(n.tag){case 0:case 11:case 15:On(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:Ki(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,Ie=i;else e:for(n=e;Ie!==null;){i=Ie;var r=i.sibling,c=i.return;if(bp(i),i===n){Ie=null;break e}if(r!==null){r.return=c,Ie=r;break e}Ie=c}}}var cv={getCacheForType:function(e){var t=nt(Xe),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return nt(Xe).controller.signal}},uv=typeof WeakMap=="function"?WeakMap:Map,we=0,De=null,ye=null,ve=0,Ae=0,Mt=null,Vn=!1,Ia=!1,bc=!1,yn=0,Be=0,Un=0,ya=0,Sc=0,At=0,ei=0,cs=null,yt=null,jc=!1,Ul=0,Cp=0,Ll=1/0,Bl=null,Ln=null,Fe=0,Bn=null,ti=null,xn=0,Tc=0,Nc=null,Dp=null,us=0,wc=null;function kt(){return(we&2)!==0&&ve!==0?ve&-ve:E.T!==null?Cc():Zd()}function _p(){if(At===0)if((ve&536870912)===0||Se){var e=Zs;Zs<<=1,(Zs&3932160)===0&&(Zs=262144),At=e}else At=536870912;return e=Nt.current,e!==null&&(e.flags|=32),At}function xt(e,t,n){(e===De&&(Ae===2||Ae===9)||e.cancelPendingCommit!==null)&&(ni(e,0),Hn(e,ve,At,!1)),Ci(e,n),((we&2)===0||e!==De)&&(e===De&&((we&2)===0&&(ya|=n),Be===4&&Hn(e,ve,At,!1)),Wt(e))}function Rp(e,t,n){if((we&6)!==0)throw Error(o(327));var i=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Ei(e,t),r=i?hv(e,t):Ac(e,t,!0),c=i;do{if(r===0){Ia&&!i&&Hn(e,t,0,!1);break}else{if(n=e.current.alternate,c&&!dv(n)){r=Ac(e,t,!1),c=!1;continue}if(r===2){if(c=t,e.errorRecoveryDisabledLanes&c)var p=0;else p=e.pendingLanes&-536870913,p=p!==0?p:p&536870912?536870912:0;if(p!==0){t=p;e:{var v=e;r=cs;var j=v.current.memoizedState.isDehydrated;if(j&&(ni(v,p).flags|=256),p=Ac(v,p,!1),p!==2){if(bc&&!j){v.errorRecoveryDisabledLanes|=c,ya|=c,r=4;break e}c=yt,yt=r,c!==null&&(yt===null?yt=c:yt.push.apply(yt,c))}r=p}if(c=!1,r!==2)continue}}if(r===1){ni(e,0),Hn(e,t,0,!0);break}e:{switch(i=e,c=r,c){case 0:case 1:throw Error(o(345));case 4:if((t&4194048)!==t)break;case 6:Hn(i,t,At,!Vn);break e;case 2:yt=null;break;case 3:case 5:break;default:throw Error(o(329))}if((t&62914560)===t&&(r=Ul+300-vt(),10<r)){if(Hn(i,t,At,!Vn),$s(i,0,!0)!==0)break e;xn=t,i.timeoutHandle=dm(Op.bind(null,i,n,yt,Bl,jc,t,At,ya,ei,Vn,c,"Throttled",-0,0),r);break e}Op(i,n,yt,Bl,jc,t,At,ya,ei,Vn,c,null,-0,0)}}break}while(!0);Wt(e)}function Op(e,t,n,i,r,c,p,v,j,k,O,B,z,C){if(e.timeoutHandle=-1,B=t.subtreeFlags,B&8192||(B&16785408)===16785408){B={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:nn},Ap(t,c,B);var I=(c&62914560)===c?Ul-vt():(c&4194048)===c?Cp-vt():0;if(I=$v(B,I),I!==null){xn=c,e.cancelPendingCommit=I(Gp.bind(null,e,t,c,n,i,r,p,v,j,O,B,null,z,C)),Hn(e,c,p,!k);return}}Gp(e,t,c,n,i,r,p,v,j)}function dv(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var r=n[i],c=r.getSnapshot;r=r.value;try{if(!jt(c(),r))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Hn(e,t,n,i){t&=~Sc,t&=~ya,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var r=t;0<r;){var c=31-St(r),p=1<<c;i[c]=-1,r&=~p}n!==0&&Xd(e,n,t)}function Hl(){return(we&6)===0?(ds(0),!1):!0}function Mc(){if(ye!==null){if(Ae===0)var e=ye.return;else e=ye,rn=oa=null,Yo(e),Qa=null,Zi=0,e=ye;for(;e!==null;)fp(e.alternate,e),e=e.return;ye=null}}function ni(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,Cv(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),xn=0,Mc(),De=e,ye=n=sn(e.current,null),ve=t,Ae=0,Mt=null,Vn=!1,Ia=Ei(e,t),bc=!1,ei=At=Sc=ya=Un=Be=0,yt=cs=null,jc=!1,(t&8)!==0&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var r=31-St(i),c=1<<r;t|=e[r],i&=~c}return yn=t,rl(),n}function Vp(e,t){he=null,E.H=ts,t===Ka||t===ml?(t=Wf(),Ae=3):t===Eo?(t=Wf(),Ae=4):Ae=t===ic?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Mt=t,ye===null&&(Be=1,zl(e,Dt(t,e.current)))}function Up(){var e=Nt.current;return e===null?!0:(ve&4194048)===ve?Vt===null:(ve&62914560)===ve||(ve&536870912)!==0?e===Vt:!1}function Lp(){var e=E.H;return E.H=ts,e===null?ts:e}function Bp(){var e=E.A;return E.A=cv,e}function ql(){Be=4,Vn||(ve&4194048)!==ve&&Nt.current!==null||(Ia=!0),(Un&134217727)===0&&(ya&134217727)===0||De===null||Hn(De,ve,At,!1)}function Ac(e,t,n){var i=we;we|=2;var r=Lp(),c=Bp();(De!==e||ve!==t)&&(Bl=null,ni(e,t)),t=!1;var p=Be;e:do try{if(Ae!==0&&ye!==null){var v=ye,j=Mt;switch(Ae){case 8:Mc(),p=6;break e;case 3:case 2:case 9:case 6:Nt.current===null&&(t=!0);var k=Ae;if(Ae=0,Mt=null,ai(e,v,j,k),n&&Ia){p=0;break e}break;default:k=Ae,Ae=0,Mt=null,ai(e,v,j,k)}}fv(),p=Be;break}catch(O){Vp(e,O)}while(!0);return t&&e.shellSuspendCounter++,rn=oa=null,we=i,E.H=r,E.A=c,ye===null&&(De=null,ve=0,rl()),p}function fv(){for(;ye!==null;)Hp(ye)}function hv(e,t){var n=we;we|=2;var i=Lp(),r=Bp();De!==e||ve!==t?(Bl=null,Ll=vt()+500,ni(e,t)):Ia=Ei(e,t);e:do try{if(Ae!==0&&ye!==null){t=ye;var c=Mt;t:switch(Ae){case 1:Ae=0,Mt=null,ai(e,t,c,1);break;case 2:case 9:if(Ff(c)){Ae=0,Mt=null,qp(t);break}t=function(){Ae!==2&&Ae!==9||De!==e||(Ae=7),Wt(e)},c.then(t,t);break e;case 3:Ae=7;break e;case 4:Ae=5;break e;case 7:Ff(c)?(Ae=0,Mt=null,qp(t)):(Ae=0,Mt=null,ai(e,t,c,7));break;case 5:var p=null;switch(ye.tag){case 26:p=ye.memoizedState;case 5:case 27:var v=ye;if(p?Mm(p):v.stateNode.complete){Ae=0,Mt=null;var j=v.sibling;if(j!==null)ye=j;else{var k=v.return;k!==null?(ye=k,Yl(k)):ye=null}break t}}Ae=0,Mt=null,ai(e,t,c,5);break;case 6:Ae=0,Mt=null,ai(e,t,c,6);break;case 8:Mc(),Be=6;break e;default:throw Error(o(462))}}pv();break}catch(O){Vp(e,O)}while(!0);return rn=oa=null,E.H=i,E.A=r,we=n,ye!==null?0:(De=null,ve=0,rl(),Be)}function pv(){for(;ye!==null&&!Uy();)Hp(ye)}function Hp(e){var t=up(e.alternate,e,yn);e.memoizedProps=e.pendingProps,t===null?Yl(e):ye=t}function qp(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=ip(n,t,t.pendingProps,t.type,void 0,ve);break;case 11:t=ip(n,t,t.pendingProps,t.type.render,t.ref,ve);break;case 5:Yo(t);default:fp(n,t),t=ye=Bf(t,yn),t=up(n,t,yn)}e.memoizedProps=e.pendingProps,t===null?Yl(e):ye=t}function ai(e,t,n,i){rn=oa=null,Yo(t),Qa=null,Zi=0;var r=t.return;try{if(nv(e,r,t,n,ve)){Be=1,zl(e,Dt(n,e.current)),ye=null;return}}catch(c){if(r!==null)throw ye=r,c;Be=1,zl(e,Dt(n,e.current)),ye=null;return}t.flags&32768?(Se||i===1?e=!0:Ia||(ve&536870912)!==0?e=!1:(Vn=e=!0,(i===2||i===9||i===3||i===6)&&(i=Nt.current,i!==null&&i.tag===13&&(i.flags|=16384))),Yp(t,e)):Yl(t)}function Yl(e){var t=e;do{if((t.flags&32768)!==0){Yp(t,Vn);return}e=t.return;var n=sv(t.alternate,t,yn);if(n!==null){ye=n;return}if(t=t.sibling,t!==null){ye=t;return}ye=t=e}while(t!==null);Be===0&&(Be=5)}function Yp(e,t){do{var n=lv(e.alternate,e);if(n!==null){n.flags&=32767,ye=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){ye=e;return}ye=e=n}while(e!==null);Be=6,ye=null}function Gp(e,t,n,i,r,c,p,v,j){e.cancelPendingCommit=null;do Gl();while(Fe!==0);if((we&6)!==0)throw Error(o(327));if(t!==null){if(t===e.current)throw Error(o(177));if(c=t.lanes|t.childLanes,c|=mo,Zy(e,n,c,p,v,j),e===De&&(ye=De=null,ve=0),ti=t,Bn=e,xn=n,Tc=c,Nc=r,Dp=i,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,xv(Ks,function(){return Jp(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=E.T,E.T=null,r=X.p,X.p=2,p=we,we|=4;try{rv(e,t,n)}finally{we=p,X.p=r,E.T=i}}Fe=1,Xp(),Kp(),Qp()}}function Xp(){if(Fe===1){Fe=0;var e=Bn,t=ti,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=E.T,E.T=null;var i=X.p;X.p=2;var r=we;we|=4;try{Np(t,e);var c=Bc,p=Ef(e.containerInfo),v=c.focusedElem,j=c.selectionRange;if(p!==v&&v&&v.ownerDocument&&zf(v.ownerDocument.documentElement,v)){if(j!==null&&co(v)){var k=j.start,O=j.end;if(O===void 0&&(O=k),"selectionStart"in v)v.selectionStart=k,v.selectionEnd=Math.min(O,v.value.length);else{var B=v.ownerDocument||document,z=B&&B.defaultView||window;if(z.getSelection){var C=z.getSelection(),I=v.textContent.length,oe=Math.min(j.start,I),Ce=j.end===void 0?oe:Math.min(j.end,I);!C.extend&&oe>Ce&&(p=Ce,Ce=oe,oe=p);var M=kf(v,oe),T=kf(v,Ce);if(M&&T&&(C.rangeCount!==1||C.anchorNode!==M.node||C.anchorOffset!==M.offset||C.focusNode!==T.node||C.focusOffset!==T.offset)){var A=B.createRange();A.setStart(M.node,M.offset),C.removeAllRanges(),oe>Ce?(C.addRange(A),C.extend(T.node,T.offset)):(A.setEnd(T.node,T.offset),C.addRange(A))}}}}for(B=[],C=v;C=C.parentNode;)C.nodeType===1&&B.push({element:C,left:C.scrollLeft,top:C.scrollTop});for(typeof v.focus=="function"&&v.focus(),v=0;v<B.length;v++){var U=B[v];U.element.scrollLeft=U.left,U.element.scrollTop=U.top}}tr=!!Lc,Bc=Lc=null}finally{we=r,X.p=i,E.T=n}}e.current=t,Fe=2}}function Kp(){if(Fe===2){Fe=0;var e=Bn,t=ti,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=E.T,E.T=null;var i=X.p;X.p=2;var r=we;we|=4;try{vp(e,t.alternate,t)}finally{we=r,X.p=i,E.T=n}}Fe=3}}function Qp(){if(Fe===4||Fe===3){Fe=0,Ly();var e=Bn,t=ti,n=xn,i=Dp;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Fe=5:(Fe=0,ti=Bn=null,Zp(e,e.pendingLanes));var r=e.pendingLanes;if(r===0&&(Ln=null),Xr(n),t=t.stateNode,bt&&typeof bt.onCommitFiberRoot=="function")try{bt.onCommitFiberRoot(zi,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=E.T,r=X.p,X.p=2,E.T=null;try{for(var c=e.onRecoverableError,p=0;p<i.length;p++){var v=i[p];c(v.value,{componentStack:v.stack})}}finally{E.T=t,X.p=r}}(xn&3)!==0&&Gl(),Wt(e),r=e.pendingLanes,(n&261930)!==0&&(r&42)!==0?e===wc?us++:(us=0,wc=e):us=0,ds(0)}}function Zp(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Ki(t)))}function Gl(){return Xp(),Kp(),Qp(),Jp()}function Jp(){if(Fe!==5)return!1;var e=Bn,t=Tc;Tc=0;var n=Xr(xn),i=E.T,r=X.p;try{X.p=32>n?32:n,E.T=null,n=Nc,Nc=null;var c=Bn,p=xn;if(Fe=0,ti=Bn=null,xn=0,(we&6)!==0)throw Error(o(331));var v=we;if(we|=4,zp(c.current),Mp(c,c.current,p,n),we=v,ds(0,!1),bt&&typeof bt.onPostCommitFiberRoot=="function")try{bt.onPostCommitFiberRoot(zi,c)}catch{}return!0}finally{X.p=r,E.T=i,Zp(e,t)}}function $p(e,t,n){t=Dt(n,t),t=ac(e.stateNode,t,2),e=Dn(e,t,2),e!==null&&(Ci(e,2),Wt(e))}function ke(e,t,n){if(e.tag===3)$p(e,e,n);else for(;t!==null;){if(t.tag===3){$p(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Ln===null||!Ln.has(i))){e=Dt(n,e),n=Fh(2),i=Dn(t,n,2),i!==null&&(Ph(n,i,t,e),Ci(i,2),Wt(i));break}}t=t.return}}function kc(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new uv;var r=new Set;i.set(t,r)}else r=i.get(t),r===void 0&&(r=new Set,i.set(t,r));r.has(n)||(bc=!0,r.add(n),e=mv.bind(null,e,t,n),t.then(e,e))}function mv(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,De===e&&(ve&n)===n&&(Be===4||Be===3&&(ve&62914560)===ve&&300>vt()-Ul?(we&2)===0&&ni(e,0):Sc|=n,ei===ve&&(ei=0)),Wt(e)}function Fp(e,t){t===0&&(t=Gd()),e=sa(e,t),e!==null&&(Ci(e,t),Wt(e))}function gv(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Fp(e,n)}function yv(e,t){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,r=e.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(o(314))}i!==null&&i.delete(t),Fp(e,n)}function xv(e,t){return Hr(e,t)}var Xl=null,ii=null,zc=!1,Kl=!1,Ec=!1,qn=0;function Wt(e){e!==ii&&e.next===null&&(ii===null?Xl=ii=e:ii=ii.next=e),Kl=!0,zc||(zc=!0,bv())}function ds(e,t){if(!Ec&&Kl){Ec=!0;do for(var n=!1,i=Xl;i!==null;){if(e!==0){var r=i.pendingLanes;if(r===0)var c=0;else{var p=i.suspendedLanes,v=i.pingedLanes;c=(1<<31-St(42|e)+1)-1,c&=r&~(p&~v),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(n=!0,em(i,c))}else c=ve,c=$s(i,i===De?c:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(c&3)===0||Ei(i,c)||(n=!0,em(i,c));i=i.next}while(n);Ec=!1}}function vv(){Pp()}function Pp(){Kl=zc=!1;var e=0;qn!==0&&Ev()&&(e=qn);for(var t=vt(),n=null,i=Xl;i!==null;){var r=i.next,c=Wp(i,t);c===0?(i.next=null,n===null?Xl=r:n.next=r,r===null&&(ii=n)):(n=i,(e!==0||(c&3)!==0)&&(Kl=!0)),i=r}Fe!==0&&Fe!==5||ds(e),qn!==0&&(qn=0)}function Wp(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,r=e.expirationTimes,c=e.pendingLanes&-62914561;0<c;){var p=31-St(c),v=1<<p,j=r[p];j===-1?((v&n)===0||(v&i)!==0)&&(r[p]=Qy(v,t)):j<=t&&(e.expiredLanes|=v),c&=~v}if(t=De,n=ve,n=$s(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(Ae===2||Ae===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&qr(i),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Ei(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&qr(i),Xr(n)){case 2:case 8:n=qd;break;case 32:n=Ks;break;case 268435456:n=Yd;break;default:n=Ks}return i=Ip.bind(null,e),n=Hr(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&qr(i),e.callbackPriority=2,e.callbackNode=null,2}function Ip(e,t){if(Fe!==0&&Fe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Gl()&&e.callbackNode!==n)return null;var i=ve;return i=$s(e,e===De?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(Rp(e,i,t),Wp(e,vt()),e.callbackNode!=null&&e.callbackNode===n?Ip.bind(null,e):null)}function em(e,t){if(Gl())return null;Rp(e,t,!0)}function bv(){Dv(function(){(we&6)!==0?Hr(Hd,vv):Pp()})}function Cc(){if(qn===0){var e=Ga;e===0&&(e=Qs,Qs<<=1,(Qs&261888)===0&&(Qs=256)),qn=e}return qn}function tm(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Is(""+e)}function nm(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function Sv(e,t,n,i,r){if(t==="submit"&&n&&n.stateNode===r){var c=tm((r[ft]||null).action),p=i.submitter;p&&(t=(t=p[ft]||null)?tm(t.formAction):p.getAttribute("formAction"),t!==null&&(c=t,p=null));var v=new al("action","action",null,i,r);e.push({event:v,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(qn!==0){var j=p?nm(r,p):new FormData(r);Po(n,{pending:!0,data:j,method:r.method,action:c},null,j)}}else typeof c=="function"&&(v.preventDefault(),j=p?nm(r,p):new FormData(r),Po(n,{pending:!0,data:j,method:r.method,action:c},c,j))},currentTarget:r}]})}}for(var Dc=0;Dc<po.length;Dc++){var _c=po[Dc],jv=_c.toLowerCase(),Tv=_c[0].toUpperCase()+_c.slice(1);Yt(jv,"on"+Tv)}Yt(_f,"onAnimationEnd"),Yt(Rf,"onAnimationIteration"),Yt(Of,"onAnimationStart"),Yt("dblclick","onDoubleClick"),Yt("focusin","onFocus"),Yt("focusout","onBlur"),Yt(Bx,"onTransitionRun"),Yt(Hx,"onTransitionStart"),Yt(qx,"onTransitionCancel"),Yt(Vf,"onTransitionEnd"),za("onMouseEnter",["mouseout","mouseover"]),za("onMouseLeave",["mouseout","mouseover"]),za("onPointerEnter",["pointerout","pointerover"]),za("onPointerLeave",["pointerout","pointerover"]),ta("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ta("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ta("onBeforeInput",["compositionend","keypress","textInput","paste"]),ta("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ta("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ta("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Nv=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(fs));function am(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],r=i.event;i=i.listeners;e:{var c=void 0;if(t)for(var p=i.length-1;0<=p;p--){var v=i[p],j=v.instance,k=v.currentTarget;if(v=v.listener,j!==c&&r.isPropagationStopped())break e;c=v,r.currentTarget=k;try{c(r)}catch(O){ll(O)}r.currentTarget=null,c=j}else for(p=0;p<i.length;p++){if(v=i[p],j=v.instance,k=v.currentTarget,v=v.listener,j!==c&&r.isPropagationStopped())break e;c=v,r.currentTarget=k;try{c(r)}catch(O){ll(O)}r.currentTarget=null,c=j}}}}function xe(e,t){var n=t[Kr];n===void 0&&(n=t[Kr]=new Set);var i=e+"__bubble";n.has(i)||(im(t,e,2,!1),n.add(i))}function Rc(e,t,n){var i=0;t&&(i|=4),im(n,e,i,t)}var Ql="_reactListening"+Math.random().toString(36).slice(2);function Oc(e){if(!e[Ql]){e[Ql]=!0,Fd.forEach(function(n){n!=="selectionchange"&&(Nv.has(n)||Rc(n,!1,e),Rc(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ql]||(t[Ql]=!0,Rc("selectionchange",!1,t))}}function im(e,t,n,i){switch(_m(t)){case 2:var r=Wv;break;case 8:r=Iv;break;default:r=Fc}n=r.bind(null,t,n,e),r=void 0,!eo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(r=!0),i?r!==void 0?e.addEventListener(t,n,{capture:!0,passive:r}):e.addEventListener(t,n,!0):r!==void 0?e.addEventListener(t,n,{passive:r}):e.addEventListener(t,n,!1)}function Vc(e,t,n,i,r){var c=i;if((t&1)===0&&(t&2)===0&&i!==null)e:for(;;){if(i===null)return;var p=i.tag;if(p===3||p===4){var v=i.stateNode.containerInfo;if(v===r)break;if(p===4)for(p=i.return;p!==null;){var j=p.tag;if((j===3||j===4)&&p.stateNode.containerInfo===r)return;p=p.return}for(;v!==null;){if(p=Ma(v),p===null)return;if(j=p.tag,j===5||j===6||j===26||j===27){i=c=p;continue e}v=v.parentNode}}i=i.return}cf(function(){var k=c,O=Wr(n),B=[];e:{var z=Uf.get(e);if(z!==void 0){var C=al,I=e;switch(e){case"keypress":if(tl(n)===0)break e;case"keydown":case"keyup":C=yx;break;case"focusin":I="focus",C=io;break;case"focusout":I="blur",C=io;break;case"beforeblur":case"afterblur":C=io;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":C=ff;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":C=sx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":C=bx;break;case _f:case Rf:case Of:C=ox;break;case Vf:C=jx;break;case"scroll":case"scrollend":C=ax;break;case"wheel":C=Nx;break;case"copy":case"cut":case"paste":C=ux;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":C=pf;break;case"toggle":case"beforetoggle":C=Mx}var oe=(t&4)!==0,Ce=!oe&&(e==="scroll"||e==="scrollend"),M=oe?z!==null?z+"Capture":null:z;oe=[];for(var T=k,A;T!==null;){var U=T;if(A=U.stateNode,U=U.tag,U!==5&&U!==26&&U!==27||A===null||M===null||(U=Ri(T,M),U!=null&&oe.push(hs(T,U,A))),Ce)break;T=T.return}0<oe.length&&(z=new C(z,I,null,n,O),B.push({event:z,listeners:oe}))}}if((t&7)===0){e:{if(z=e==="mouseover"||e==="pointerover",C=e==="mouseout"||e==="pointerout",z&&n!==Pr&&(I=n.relatedTarget||n.fromElement)&&(Ma(I)||I[wa]))break e;if((C||z)&&(z=O.window===O?O:(z=O.ownerDocument)?z.defaultView||z.parentWindow:window,C?(I=n.relatedTarget||n.toElement,C=k,I=I?Ma(I):null,I!==null&&(Ce=h(I),oe=I.tag,I!==Ce||oe!==5&&oe!==27&&oe!==6)&&(I=null)):(C=null,I=k),C!==I)){if(oe=ff,U="onMouseLeave",M="onMouseEnter",T="mouse",(e==="pointerout"||e==="pointerover")&&(oe=pf,U="onPointerLeave",M="onPointerEnter",T="pointer"),Ce=C==null?z:_i(C),A=I==null?z:_i(I),z=new oe(U,T+"leave",C,n,O),z.target=Ce,z.relatedTarget=A,U=null,Ma(O)===k&&(oe=new oe(M,T+"enter",I,n,O),oe.target=A,oe.relatedTarget=Ce,U=oe),Ce=U,C&&I)t:{for(oe=wv,M=C,T=I,A=0,U=M;U;U=oe(U))A++;U=0;for(var re=T;re;re=oe(re))U++;for(;0<A-U;)M=oe(M),A--;for(;0<U-A;)T=oe(T),U--;for(;A--;){if(M===T||T!==null&&M===T.alternate){oe=M;break t}M=oe(M),T=oe(T)}oe=null}else oe=null;C!==null&&sm(B,z,C,oe,!1),I!==null&&Ce!==null&&sm(B,Ce,I,oe,!0)}}e:{if(z=k?_i(k):window,C=z.nodeName&&z.nodeName.toLowerCase(),C==="select"||C==="input"&&z.type==="file")var Te=jf;else if(bf(z))if(Tf)Te=Vx;else{Te=Rx;var ae=_x}else C=z.nodeName,!C||C.toLowerCase()!=="input"||z.type!=="checkbox"&&z.type!=="radio"?k&&Fr(k.elementType)&&(Te=jf):Te=Ox;if(Te&&(Te=Te(e,k))){Sf(B,Te,n,O);break e}ae&&ae(e,z,k),e==="focusout"&&k&&z.type==="number"&&k.memoizedProps.value!=null&&$r(z,"number",z.value)}switch(ae=k?_i(k):window,e){case"focusin":(bf(ae)||ae.contentEditable==="true")&&(Oa=ae,uo=k,Yi=null);break;case"focusout":Yi=uo=Oa=null;break;case"mousedown":fo=!0;break;case"contextmenu":case"mouseup":case"dragend":fo=!1,Cf(B,n,O);break;case"selectionchange":if(Lx)break;case"keydown":case"keyup":Cf(B,n,O)}var me;if(lo)e:{switch(e){case"compositionstart":var be="onCompositionStart";break e;case"compositionend":be="onCompositionEnd";break e;case"compositionupdate":be="onCompositionUpdate";break e}be=void 0}else Ra?xf(e,n)&&(be="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(be="onCompositionStart");be&&(mf&&n.locale!=="ko"&&(Ra||be!=="onCompositionStart"?be==="onCompositionEnd"&&Ra&&(me=uf()):(wn=O,to="value"in wn?wn.value:wn.textContent,Ra=!0)),ae=Zl(k,be),0<ae.length&&(be=new hf(be,e,null,n,O),B.push({event:be,listeners:ae}),me?be.data=me:(me=vf(n),me!==null&&(be.data=me)))),(me=kx?zx(e,n):Ex(e,n))&&(be=Zl(k,"onBeforeInput"),0<be.length&&(ae=new hf("onBeforeInput","beforeinput",null,n,O),B.push({event:ae,listeners:be}),ae.data=me)),Sv(B,e,k,n,O)}am(B,t)})}function hs(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Zl(e,t){for(var n=t+"Capture",i=[];e!==null;){var r=e,c=r.stateNode;if(r=r.tag,r!==5&&r!==26&&r!==27||c===null||(r=Ri(e,n),r!=null&&i.unshift(hs(e,r,c)),r=Ri(e,t),r!=null&&i.push(hs(e,r,c))),e.tag===3)return i;e=e.return}return[]}function wv(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function sm(e,t,n,i,r){for(var c=t._reactName,p=[];n!==null&&n!==i;){var v=n,j=v.alternate,k=v.stateNode;if(v=v.tag,j!==null&&j===i)break;v!==5&&v!==26&&v!==27||k===null||(j=k,r?(k=Ri(n,c),k!=null&&p.unshift(hs(n,k,j))):r||(k=Ri(n,c),k!=null&&p.push(hs(n,k,j)))),n=n.return}p.length!==0&&e.push({event:t,listeners:p})}var Mv=/\r\n?/g,Av=/\u0000|\uFFFD/g;function lm(e){return(typeof e=="string"?e:""+e).replace(Mv,`
`).replace(Av,"")}function rm(e,t){return t=lm(t),lm(e)===t}function Ee(e,t,n,i,r,c){switch(n){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||Ca(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&Ca(e,""+i);break;case"className":Ps(e,"class",i);break;case"tabIndex":Ps(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Ps(e,n,i);break;case"style":rf(e,i,c);break;case"data":if(t!=="object"){Ps(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Is(""+i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(n==="formAction"?(t!=="input"&&Ee(e,t,"name",r.name,r,null),Ee(e,t,"formEncType",r.formEncType,r,null),Ee(e,t,"formMethod",r.formMethod,r,null),Ee(e,t,"formTarget",r.formTarget,r,null)):(Ee(e,t,"encType",r.encType,r,null),Ee(e,t,"method",r.method,r,null),Ee(e,t,"target",r.target,r,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Is(""+i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=nn);break;case"onScroll":i!=null&&xe("scroll",e);break;case"onScrollEnd":i!=null&&xe("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(o(61));if(n=i.__html,n!=null){if(r.children!=null)throw Error(o(60));e.innerHTML=n}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=Is(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""+i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":xe("beforetoggle",e),xe("toggle",e),Fs(e,"popover",i);break;case"xlinkActuate":tn(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":tn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":tn(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":tn(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":tn(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":tn(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":tn(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":tn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":tn(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Fs(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=tx.get(n)||n,Fs(e,n,i))}}function Uc(e,t,n,i,r,c){switch(n){case"style":rf(e,i,c);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(o(61));if(n=i.__html,n!=null){if(r.children!=null)throw Error(o(60));e.innerHTML=n}}break;case"children":typeof i=="string"?Ca(e,i):(typeof i=="number"||typeof i=="bigint")&&Ca(e,""+i);break;case"onScroll":i!=null&&xe("scroll",e);break;case"onScrollEnd":i!=null&&xe("scrollend",e);break;case"onClick":i!=null&&(e.onclick=nn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Pd.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(r=n.endsWith("Capture"),t=n.slice(2,r?n.length-7:void 0),c=e[ft]||null,c=c!=null?c[n]:null,typeof c=="function"&&e.removeEventListener(t,c,r),typeof i=="function")){typeof c!="function"&&c!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,i,r);break e}n in e?e[n]=i:i===!0?e.setAttribute(n,""):Fs(e,n,i)}}}function it(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":xe("error",e),xe("load",e);var i=!1,r=!1,c;for(c in n)if(n.hasOwnProperty(c)){var p=n[c];if(p!=null)switch(c){case"src":i=!0;break;case"srcSet":r=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:Ee(e,t,c,p,n,null)}}r&&Ee(e,t,"srcSet",n.srcSet,n,null),i&&Ee(e,t,"src",n.src,n,null);return;case"input":xe("invalid",e);var v=c=p=r=null,j=null,k=null;for(i in n)if(n.hasOwnProperty(i)){var O=n[i];if(O!=null)switch(i){case"name":r=O;break;case"type":p=O;break;case"checked":j=O;break;case"defaultChecked":k=O;break;case"value":c=O;break;case"defaultValue":v=O;break;case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(o(137,t));break;default:Ee(e,t,i,O,n,null)}}nf(e,c,v,j,k,p,r,!1);return;case"select":xe("invalid",e),i=p=c=null;for(r in n)if(n.hasOwnProperty(r)&&(v=n[r],v!=null))switch(r){case"value":c=v;break;case"defaultValue":p=v;break;case"multiple":i=v;default:Ee(e,t,r,v,n,null)}t=c,n=p,e.multiple=!!i,t!=null?Ea(e,!!i,t,!1):n!=null&&Ea(e,!!i,n,!0);return;case"textarea":xe("invalid",e),c=r=i=null;for(p in n)if(n.hasOwnProperty(p)&&(v=n[p],v!=null))switch(p){case"value":i=v;break;case"defaultValue":r=v;break;case"children":c=v;break;case"dangerouslySetInnerHTML":if(v!=null)throw Error(o(91));break;default:Ee(e,t,p,v,n,null)}sf(e,i,r,c);return;case"option":for(j in n)n.hasOwnProperty(j)&&(i=n[j],i!=null)&&(j==="selected"?e.selected=i&&typeof i!="function"&&typeof i!="symbol":Ee(e,t,j,i,n,null));return;case"dialog":xe("beforetoggle",e),xe("toggle",e),xe("cancel",e),xe("close",e);break;case"iframe":case"object":xe("load",e);break;case"video":case"audio":for(i=0;i<fs.length;i++)xe(fs[i],e);break;case"image":xe("error",e),xe("load",e);break;case"details":xe("toggle",e);break;case"embed":case"source":case"link":xe("error",e),xe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(k in n)if(n.hasOwnProperty(k)&&(i=n[k],i!=null))switch(k){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:Ee(e,t,k,i,n,null)}return;default:if(Fr(t)){for(O in n)n.hasOwnProperty(O)&&(i=n[O],i!==void 0&&Uc(e,t,O,i,n,void 0));return}}for(v in n)n.hasOwnProperty(v)&&(i=n[v],i!=null&&Ee(e,t,v,i,n,null))}function kv(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var r=null,c=null,p=null,v=null,j=null,k=null,O=null;for(C in n){var B=n[C];if(n.hasOwnProperty(C)&&B!=null)switch(C){case"checked":break;case"value":break;case"defaultValue":j=B;default:i.hasOwnProperty(C)||Ee(e,t,C,null,i,B)}}for(var z in i){var C=i[z];if(B=n[z],i.hasOwnProperty(z)&&(C!=null||B!=null))switch(z){case"type":c=C;break;case"name":r=C;break;case"checked":k=C;break;case"defaultChecked":O=C;break;case"value":p=C;break;case"defaultValue":v=C;break;case"children":case"dangerouslySetInnerHTML":if(C!=null)throw Error(o(137,t));break;default:C!==B&&Ee(e,t,z,C,i,B)}}Jr(e,p,v,j,k,O,c,r);return;case"select":C=p=v=z=null;for(c in n)if(j=n[c],n.hasOwnProperty(c)&&j!=null)switch(c){case"value":break;case"multiple":C=j;default:i.hasOwnProperty(c)||Ee(e,t,c,null,i,j)}for(r in i)if(c=i[r],j=n[r],i.hasOwnProperty(r)&&(c!=null||j!=null))switch(r){case"value":z=c;break;case"defaultValue":v=c;break;case"multiple":p=c;default:c!==j&&Ee(e,t,r,c,i,j)}t=v,n=p,i=C,z!=null?Ea(e,!!n,z,!1):!!i!=!!n&&(t!=null?Ea(e,!!n,t,!0):Ea(e,!!n,n?[]:"",!1));return;case"textarea":C=z=null;for(v in n)if(r=n[v],n.hasOwnProperty(v)&&r!=null&&!i.hasOwnProperty(v))switch(v){case"value":break;case"children":break;default:Ee(e,t,v,null,i,r)}for(p in i)if(r=i[p],c=n[p],i.hasOwnProperty(p)&&(r!=null||c!=null))switch(p){case"value":z=r;break;case"defaultValue":C=r;break;case"children":break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(o(91));break;default:r!==c&&Ee(e,t,p,r,i,c)}af(e,z,C);return;case"option":for(var I in n)z=n[I],n.hasOwnProperty(I)&&z!=null&&!i.hasOwnProperty(I)&&(I==="selected"?e.selected=!1:Ee(e,t,I,null,i,z));for(j in i)z=i[j],C=n[j],i.hasOwnProperty(j)&&z!==C&&(z!=null||C!=null)&&(j==="selected"?e.selected=z&&typeof z!="function"&&typeof z!="symbol":Ee(e,t,j,z,i,C));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var oe in n)z=n[oe],n.hasOwnProperty(oe)&&z!=null&&!i.hasOwnProperty(oe)&&Ee(e,t,oe,null,i,z);for(k in i)if(z=i[k],C=n[k],i.hasOwnProperty(k)&&z!==C&&(z!=null||C!=null))switch(k){case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(o(137,t));break;default:Ee(e,t,k,z,i,C)}return;default:if(Fr(t)){for(var Ce in n)z=n[Ce],n.hasOwnProperty(Ce)&&z!==void 0&&!i.hasOwnProperty(Ce)&&Uc(e,t,Ce,void 0,i,z);for(O in i)z=i[O],C=n[O],!i.hasOwnProperty(O)||z===C||z===void 0&&C===void 0||Uc(e,t,O,z,i,C);return}}for(var M in n)z=n[M],n.hasOwnProperty(M)&&z!=null&&!i.hasOwnProperty(M)&&Ee(e,t,M,null,i,z);for(B in i)z=i[B],C=n[B],!i.hasOwnProperty(B)||z===C||z==null&&C==null||Ee(e,t,B,z,i,C)}function om(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function zv(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var r=n[i],c=r.transferSize,p=r.initiatorType,v=r.duration;if(c&&v&&om(p)){for(p=0,v=r.responseEnd,i+=1;i<n.length;i++){var j=n[i],k=j.startTime;if(k>v)break;var O=j.transferSize,B=j.initiatorType;O&&om(B)&&(j=j.responseEnd,p+=O*(j<v?1:(v-k)/(j-k)))}if(--i,t+=8*(c+p)/(r.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Lc=null,Bc=null;function Jl(e){return e.nodeType===9?e:e.ownerDocument}function cm(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function um(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Hc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var qc=null;function Ev(){var e=window.event;return e&&e.type==="popstate"?e===qc?!1:(qc=e,!0):(qc=null,!1)}var dm=typeof setTimeout=="function"?setTimeout:void 0,Cv=typeof clearTimeout=="function"?clearTimeout:void 0,fm=typeof Promise=="function"?Promise:void 0,Dv=typeof queueMicrotask=="function"?queueMicrotask:typeof fm<"u"?function(e){return fm.resolve(null).then(e).catch(_v)}:dm;function _v(e){setTimeout(function(){throw e})}function Yn(e){return e==="head"}function hm(e,t){var n=t,i=0;do{var r=n.nextSibling;if(e.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(r),oi(t);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")ps(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,ps(n);for(var c=n.firstChild;c;){var p=c.nextSibling,v=c.nodeName;c[Di]||v==="SCRIPT"||v==="STYLE"||v==="LINK"&&c.rel.toLowerCase()==="stylesheet"||n.removeChild(c),c=p}}else n==="body"&&ps(e.ownerDocument.body);n=r}while(n);oi(t)}function pm(e,t){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function Yc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Yc(n),Qr(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function Rv(e,t,n,i){for(;e.nodeType===1;){var r=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[Di])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(c=e.getAttribute("rel"),c==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(c!==r.rel||e.getAttribute("href")!==(r.href==null||r.href===""?null:r.href)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin)||e.getAttribute("title")!==(r.title==null?null:r.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(c=e.getAttribute("src"),(c!==(r.src==null?null:r.src)||e.getAttribute("type")!==(r.type==null?null:r.type)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin))&&c&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var c=r.name==null?null:""+r.name;if(r.type==="hidden"&&e.getAttribute("name")===c)return e}else return e;if(e=Ut(e.nextSibling),e===null)break}return null}function Ov(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Ut(e.nextSibling),e===null))return null;return e}function mm(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Ut(e.nextSibling),e===null))return null;return e}function Gc(e){return e.data==="$?"||e.data==="$~"}function Xc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Vv(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function Ut(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Kc=null;function gm(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return Ut(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function ym(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function xm(e,t,n){switch(t=Jl(n),e){case"html":if(e=t.documentElement,!e)throw Error(o(452));return e;case"head":if(e=t.head,!e)throw Error(o(453));return e;case"body":if(e=t.body,!e)throw Error(o(454));return e;default:throw Error(o(451))}}function ps(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Qr(e)}var Lt=new Map,vm=new Set;function $l(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var vn=X.d;X.d={f:Uv,r:Lv,D:Bv,C:Hv,L:qv,m:Yv,X:Xv,S:Gv,M:Kv};function Uv(){var e=vn.f(),t=Hl();return e||t}function Lv(e){var t=Aa(e);t!==null&&t.tag===5&&t.type==="form"?Vh(t):vn.r(e)}var si=typeof document>"u"?null:document;function bm(e,t,n){var i=si;if(i&&typeof t=="string"&&t){var r=Et(t);r='link[rel="'+e+'"][href="'+r+'"]',typeof n=="string"&&(r+='[crossorigin="'+n+'"]'),vm.has(r)||(vm.add(r),e={rel:e,crossOrigin:n,href:t},i.querySelector(r)===null&&(t=i.createElement("link"),it(t,"link",e),We(t),i.head.appendChild(t)))}}function Bv(e){vn.D(e),bm("dns-prefetch",e,null)}function Hv(e,t){vn.C(e,t),bm("preconnect",e,t)}function qv(e,t,n){vn.L(e,t,n);var i=si;if(i&&e&&t){var r='link[rel="preload"][as="'+Et(t)+'"]';t==="image"&&n&&n.imageSrcSet?(r+='[imagesrcset="'+Et(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(r+='[imagesizes="'+Et(n.imageSizes)+'"]')):r+='[href="'+Et(e)+'"]';var c=r;switch(t){case"style":c=li(e);break;case"script":c=ri(e)}Lt.has(c)||(e=b({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Lt.set(c,e),i.querySelector(r)!==null||t==="style"&&i.querySelector(ms(c))||t==="script"&&i.querySelector(gs(c))||(t=i.createElement("link"),it(t,"link",e),We(t),i.head.appendChild(t)))}}function Yv(e,t){vn.m(e,t);var n=si;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",r='link[rel="modulepreload"][as="'+Et(i)+'"][href="'+Et(e)+'"]',c=r;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=ri(e)}if(!Lt.has(c)&&(e=b({rel:"modulepreload",href:e},t),Lt.set(c,e),n.querySelector(r)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(gs(c)))return}i=n.createElement("link"),it(i,"link",e),We(i),n.head.appendChild(i)}}}function Gv(e,t,n){vn.S(e,t,n);var i=si;if(i&&e){var r=ka(i).hoistableStyles,c=li(e);t=t||"default";var p=r.get(c);if(!p){var v={loading:0,preload:null};if(p=i.querySelector(ms(c)))v.loading=5;else{e=b({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Lt.get(c))&&Qc(e,n);var j=p=i.createElement("link");We(j),it(j,"link",e),j._p=new Promise(function(k,O){j.onload=k,j.onerror=O}),j.addEventListener("load",function(){v.loading|=1}),j.addEventListener("error",function(){v.loading|=2}),v.loading|=4,Fl(p,t,i)}p={type:"stylesheet",instance:p,count:1,state:v},r.set(c,p)}}}function Xv(e,t){vn.X(e,t);var n=si;if(n&&e){var i=ka(n).hoistableScripts,r=ri(e),c=i.get(r);c||(c=n.querySelector(gs(r)),c||(e=b({src:e,async:!0},t),(t=Lt.get(r))&&Zc(e,t),c=n.createElement("script"),We(c),it(c,"link",e),n.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},i.set(r,c))}}function Kv(e,t){vn.M(e,t);var n=si;if(n&&e){var i=ka(n).hoistableScripts,r=ri(e),c=i.get(r);c||(c=n.querySelector(gs(r)),c||(e=b({src:e,async:!0,type:"module"},t),(t=Lt.get(r))&&Zc(e,t),c=n.createElement("script"),We(c),it(c,"link",e),n.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},i.set(r,c))}}function Sm(e,t,n,i){var r=(r=ge.current)?$l(r):null;if(!r)throw Error(o(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=li(n.href),n=ka(r).hoistableStyles,i=n.get(t),i||(i={type:"style",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=li(n.href);var c=ka(r).hoistableStyles,p=c.get(e);if(p||(r=r.ownerDocument||r,p={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(e,p),(c=r.querySelector(ms(e)))&&!c._p&&(p.instance=c,p.state.loading=5),Lt.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Lt.set(e,n),c||Qv(r,e,n,p.state))),t&&i===null)throw Error(o(528,""));return p}if(t&&i!==null)throw Error(o(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=ri(n),n=ka(r).hoistableScripts,i=n.get(t),i||(i={type:"script",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,e))}}function li(e){return'href="'+Et(e)+'"'}function ms(e){return'link[rel="stylesheet"]['+e+"]"}function jm(e){return b({},e,{"data-precedence":e.precedence,precedence:null})}function Qv(e,t,n,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),it(t,"link",n),We(t),e.head.appendChild(t))}function ri(e){return'[src="'+Et(e)+'"]'}function gs(e){return"script[async]"+e}function Tm(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+Et(n.href)+'"]');if(i)return t.instance=i,We(i),i;var r=b({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),We(i),it(i,"style",r),Fl(i,n.precedence,e),t.instance=i;case"stylesheet":r=li(n.href);var c=e.querySelector(ms(r));if(c)return t.state.loading|=4,t.instance=c,We(c),c;i=jm(n),(r=Lt.get(r))&&Qc(i,r),c=(e.ownerDocument||e).createElement("link"),We(c);var p=c;return p._p=new Promise(function(v,j){p.onload=v,p.onerror=j}),it(c,"link",i),t.state.loading|=4,Fl(c,n.precedence,e),t.instance=c;case"script":return c=ri(n.src),(r=e.querySelector(gs(c)))?(t.instance=r,We(r),r):(i=n,(r=Lt.get(c))&&(i=b({},n),Zc(i,r)),e=e.ownerDocument||e,r=e.createElement("script"),We(r),it(r,"link",i),e.head.appendChild(r),t.instance=r);case"void":return null;default:throw Error(o(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,Fl(i,n.precedence,e));return t.instance}function Fl(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),r=i.length?i[i.length-1]:null,c=r,p=0;p<i.length;p++){var v=i[p];if(v.dataset.precedence===t)c=v;else if(c!==r)break}c?c.parentNode.insertBefore(e,c.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Qc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Zc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Pl=null;function Nm(e,t,n){if(Pl===null){var i=new Map,r=Pl=new Map;r.set(n,i)}else r=Pl,i=r.get(n),i||(i=new Map,r.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),r=0;r<n.length;r++){var c=n[r];if(!(c[Di]||c[et]||e==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var p=c.getAttribute(t)||"";p=e+p;var v=i.get(p);v?v.push(c):i.set(p,[c])}}return i}function wm(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function Zv(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Mm(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Jv(e,t,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var r=li(i.href),c=t.querySelector(ms(r));if(c){t=c._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Wl.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=c,We(c);return}c=t.ownerDocument||t,i=jm(i),(r=Lt.get(r))&&Qc(i,r),c=c.createElement("link"),We(c);var p=c;p._p=new Promise(function(v,j){p.onload=v,p.onerror=j}),it(c,"link",i),n.instance=c}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=Wl.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var Jc=0;function $v(e,t){return e.stylesheets&&e.count===0&&er(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&er(e,e.stylesheets),e.unsuspend){var c=e.unsuspend;e.unsuspend=null,c()}},6e4+t);0<e.imgBytes&&Jc===0&&(Jc=62500*zv());var r=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&er(e,e.stylesheets),e.unsuspend)){var c=e.unsuspend;e.unsuspend=null,c()}},(e.imgBytes>Jc?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(r)}}:null}function Wl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)er(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Il=null;function er(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Il=new Map,t.forEach(Fv,e),Il=null,Wl.call(e))}function Fv(e,t){if(!(t.state.loading&4)){var n=Il.get(e);if(n)var i=n.get(null);else{n=new Map,Il.set(e,n);for(var r=e.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<r.length;c++){var p=r[c];(p.nodeName==="LINK"||p.getAttribute("media")!=="not all")&&(n.set(p.dataset.precedence,p),i=p)}i&&n.set(null,i)}r=t.instance,p=r.getAttribute("data-precedence"),c=n.get(p)||i,c===i&&n.set(null,r),n.set(p,r),this.count++,i=Wl.bind(this),r.addEventListener("load",i),r.addEventListener("error",i),c?c.parentNode.insertBefore(r,c.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(r,e.firstChild)),t.state.loading|=4}}var ys={$$typeof:R,Provider:null,Consumer:null,_currentValue:P,_currentValue2:P,_threadCount:0};function Pv(e,t,n,i,r,c,p,v,j){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Yr(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Yr(0),this.hiddenUpdates=Yr(null),this.identifierPrefix=i,this.onUncaughtError=r,this.onCaughtError=c,this.onRecoverableError=p,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=j,this.incompleteTransitions=new Map}function Am(e,t,n,i,r,c,p,v,j,k,O,B){return e=new Pv(e,t,n,p,j,k,O,B,v),t=1,c===!0&&(t|=24),c=Tt(3,null,null,t),e.current=c,c.stateNode=e,t=Ao(),t.refCount++,e.pooledCache=t,t.refCount++,c.memoizedState={element:i,isDehydrated:n,cache:t},Co(c),e}function km(e){return e?(e=La,e):La}function zm(e,t,n,i,r,c){r=km(r),i.context===null?i.context=r:i.pendingContext=r,i=Cn(t),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=Dn(e,i,t),n!==null&&(xt(n,e,t),$i(n,e,t))}function Em(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function $c(e,t){Em(e,t),(e=e.alternate)&&Em(e,t)}function Cm(e){if(e.tag===13||e.tag===31){var t=sa(e,67108864);t!==null&&xt(t,e,67108864),$c(e,67108864)}}function Dm(e){if(e.tag===13||e.tag===31){var t=kt();t=Gr(t);var n=sa(e,t);n!==null&&xt(n,e,t),$c(e,t)}}var tr=!0;function Wv(e,t,n,i){var r=E.T;E.T=null;var c=X.p;try{X.p=2,Fc(e,t,n,i)}finally{X.p=c,E.T=r}}function Iv(e,t,n,i){var r=E.T;E.T=null;var c=X.p;try{X.p=8,Fc(e,t,n,i)}finally{X.p=c,E.T=r}}function Fc(e,t,n,i){if(tr){var r=Pc(i);if(r===null)Vc(e,t,i,nr,n),Rm(e,i);else if(t2(r,e,t,n,i))i.stopPropagation();else if(Rm(e,i),t&4&&-1<e2.indexOf(e)){for(;r!==null;){var c=Aa(r);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var p=ea(c.pendingLanes);if(p!==0){var v=c;for(v.pendingLanes|=2,v.entangledLanes|=2;p;){var j=1<<31-St(p);v.entanglements[1]|=j,p&=~j}Wt(c),(we&6)===0&&(Ll=vt()+500,ds(0))}}break;case 31:case 13:v=sa(c,2),v!==null&&xt(v,c,2),Hl(),$c(c,2)}if(c=Pc(i),c===null&&Vc(e,t,i,nr,n),c===r)break;r=c}r!==null&&i.stopPropagation()}else Vc(e,t,i,null,n)}}function Pc(e){return e=Wr(e),Wc(e)}var nr=null;function Wc(e){if(nr=null,e=Ma(e),e!==null){var t=h(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=f(t),e!==null)return e;e=null}else if(n===31){if(e=m(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return nr=e,null}function _m(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(By()){case Hd:return 2;case qd:return 8;case Ks:case Hy:return 32;case Yd:return 268435456;default:return 32}default:return 32}}var Ic=!1,Gn=null,Xn=null,Kn=null,xs=new Map,vs=new Map,Qn=[],e2="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Rm(e,t){switch(e){case"focusin":case"focusout":Gn=null;break;case"dragenter":case"dragleave":Xn=null;break;case"mouseover":case"mouseout":Kn=null;break;case"pointerover":case"pointerout":xs.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":vs.delete(t.pointerId)}}function bs(e,t,n,i,r,c){return e===null||e.nativeEvent!==c?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:c,targetContainers:[r]},t!==null&&(t=Aa(t),t!==null&&Cm(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,r!==null&&t.indexOf(r)===-1&&t.push(r),e)}function t2(e,t,n,i,r){switch(t){case"focusin":return Gn=bs(Gn,e,t,n,i,r),!0;case"dragenter":return Xn=bs(Xn,e,t,n,i,r),!0;case"mouseover":return Kn=bs(Kn,e,t,n,i,r),!0;case"pointerover":var c=r.pointerId;return xs.set(c,bs(xs.get(c)||null,e,t,n,i,r)),!0;case"gotpointercapture":return c=r.pointerId,vs.set(c,bs(vs.get(c)||null,e,t,n,i,r)),!0}return!1}function Om(e){var t=Ma(e.target);if(t!==null){var n=h(t);if(n!==null){if(t=n.tag,t===13){if(t=f(n),t!==null){e.blockedOn=t,Jd(e.priority,function(){Dm(n)});return}}else if(t===31){if(t=m(n),t!==null){e.blockedOn=t,Jd(e.priority,function(){Dm(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ar(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Pc(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);Pr=i,n.target.dispatchEvent(i),Pr=null}else return t=Aa(n),t!==null&&Cm(t),e.blockedOn=n,!1;t.shift()}return!0}function Vm(e,t,n){ar(e)&&n.delete(t)}function n2(){Ic=!1,Gn!==null&&ar(Gn)&&(Gn=null),Xn!==null&&ar(Xn)&&(Xn=null),Kn!==null&&ar(Kn)&&(Kn=null),xs.forEach(Vm),vs.forEach(Vm)}function ir(e,t){e.blockedOn===t&&(e.blockedOn=null,Ic||(Ic=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,n2)))}var sr=null;function Um(e){sr!==e&&(sr=e,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){sr===e&&(sr=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],r=e[t+2];if(typeof i!="function"){if(Wc(i||n)===null)continue;break}var c=Aa(n);c!==null&&(e.splice(t,3),t-=3,Po(c,{pending:!0,data:r,method:n.method,action:i},i,r))}}))}function oi(e){function t(j){return ir(j,e)}Gn!==null&&ir(Gn,e),Xn!==null&&ir(Xn,e),Kn!==null&&ir(Kn,e),xs.forEach(t),vs.forEach(t);for(var n=0;n<Qn.length;n++){var i=Qn[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<Qn.length&&(n=Qn[0],n.blockedOn===null);)Om(n),n.blockedOn===null&&Qn.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var r=n[i],c=n[i+1],p=r[ft]||null;if(typeof c=="function")p||Um(n);else if(p){var v=null;if(c&&c.hasAttribute("formAction")){if(r=c,p=c[ft]||null)v=p.formAction;else if(Wc(r)!==null)continue}else v=p.action;typeof v=="function"?n[i+1]=v:(n.splice(i,3),i-=3),Um(n)}}}function Lm(){function e(c){c.canIntercept&&c.info==="react-transition"&&c.intercept({handler:function(){return new Promise(function(p){return r=p})},focusReset:"manual",scroll:"manual"})}function t(){r!==null&&(r(),r=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var c=navigation.currentEntry;c&&c.url!=null&&navigation.navigate(c.url,{state:c.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,r=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),r!==null&&(r(),r=null)}}}function eu(e){this._internalRoot=e}lr.prototype.render=eu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));var n=t.current,i=kt();zm(n,i,e,t,null,null)},lr.prototype.unmount=eu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;zm(e.current,2,null,e,null,null),Hl(),t[wa]=null}};function lr(e){this._internalRoot=e}lr.prototype.unstable_scheduleHydration=function(e){if(e){var t=Zd();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Qn.length&&t!==0&&t<Qn[n].priority;n++);Qn.splice(n,0,e),n===0&&Om(e)}};var Bm=s.version;if(Bm!=="19.2.3")throw Error(o(527,Bm,"19.2.3"));X.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=g(t),e=e!==null?x(e):null,e=e===null?null:e.stateNode,e};var a2={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:E,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var rr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!rr.isDisabled&&rr.supportsFiber)try{zi=rr.inject(a2),bt=rr}catch{}}return js.createRoot=function(e,t){if(!d(e))throw Error(o(299));var n=!1,i="",r=Qh,c=Zh,p=Jh;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(r=t.onUncaughtError),t.onCaughtError!==void 0&&(c=t.onCaughtError),t.onRecoverableError!==void 0&&(p=t.onRecoverableError)),t=Am(e,1,!1,null,null,n,i,null,r,c,p,Lm),e[wa]=t.current,Oc(e),new eu(t)},js.hydrateRoot=function(e,t,n){if(!d(e))throw Error(o(299));var i=!1,r="",c=Qh,p=Zh,v=Jh,j=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(p=n.onCaughtError),n.onRecoverableError!==void 0&&(v=n.onRecoverableError),n.formState!==void 0&&(j=n.formState)),t=Am(e,1,!0,t,n??null,i,r,j,c,p,v,Lm),t.context=km(null),n=t.current,i=kt(),i=Gr(i),r=Cn(i),r.callback=null,Dn(n,r,i),n=i,t.current.lanes=n,Ci(t,n),Wt(t),e[wa]=t.current,Oc(e),new lr(t)},js.version="19.2.3",js}var $m;function h2(){if($m)return au.exports;$m=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(s){console.error(s)}}return a(),au.exports=f2(),au.exports}var p2=h2();const Ju=D.createContext({});function $u(a){const s=D.useRef(null);return s.current===null&&(s.current=a()),s.current}const Fu=typeof window<"u",y1=Fu?D.useLayoutEffect:D.useEffect,Ar=D.createContext(null);function Pu(a,s){a.indexOf(s)===-1&&a.push(s)}function Wu(a,s){const l=a.indexOf(s);l>-1&&a.splice(l,1)}const en=(a,s,l)=>l>s?s:l<a?a:l;let Iu=()=>{};const Sn={},x1=a=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(a);function v1(a){return typeof a=="object"&&a!==null}const b1=a=>/^0[^.\s]+$/u.test(a);function ed(a){let s;return()=>(s===void 0&&(s=a()),s)}const qt=a=>a,m2=(a,s)=>l=>s(a(l)),Us=(...a)=>a.reduce(m2),Cs=(a,s,l)=>{const o=s-a;return o===0?1:(l-a)/o};class td{constructor(){this.subscriptions=[]}add(s){return Pu(this.subscriptions,s),()=>Wu(this.subscriptions,s)}notify(s,l,o){const d=this.subscriptions.length;if(d)if(d===1)this.subscriptions[0](s,l,o);else for(let h=0;h<d;h++){const f=this.subscriptions[h];f&&f(s,l,o)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const bn=a=>a*1e3,Ht=a=>a/1e3;function S1(a,s){return s?a*(1e3/s):0}const j1=(a,s,l)=>(((1-3*l+3*s)*a+(3*l-6*s))*a+3*s)*a,g2=1e-7,y2=12;function x2(a,s,l,o,d){let h,f,m=0;do f=s+(l-s)/2,h=j1(f,o,d)-a,h>0?l=f:s=f;while(Math.abs(h)>g2&&++m<y2);return f}function Ls(a,s,l,o){if(a===s&&l===o)return qt;const d=h=>x2(h,0,1,a,l);return h=>h===0||h===1?h:j1(d(h),s,o)}const T1=a=>s=>s<=.5?a(2*s)/2:(2-a(2*(1-s)))/2,N1=a=>s=>1-a(1-s),w1=Ls(.33,1.53,.69,.99),nd=N1(w1),M1=T1(nd),A1=a=>(a*=2)<1?.5*nd(a):.5*(2-Math.pow(2,-10*(a-1))),ad=a=>1-Math.sin(Math.acos(a)),k1=N1(ad),z1=T1(ad),v2=Ls(.42,0,1,1),b2=Ls(0,0,.58,1),E1=Ls(.42,0,.58,1),S2=a=>Array.isArray(a)&&typeof a[0]!="number",C1=a=>Array.isArray(a)&&typeof a[0]=="number",j2={linear:qt,easeIn:v2,easeInOut:E1,easeOut:b2,circIn:ad,circInOut:z1,circOut:k1,backIn:nd,backInOut:M1,backOut:w1,anticipate:A1},T2=a=>typeof a=="string",Fm=a=>{if(C1(a)){Iu(a.length===4);const[s,l,o,d]=a;return Ls(s,l,o,d)}else if(T2(a))return j2[a];return a},or=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function N2(a,s){let l=new Set,o=new Set,d=!1,h=!1;const f=new WeakSet;let m={delta:0,timestamp:0,isProcessing:!1};function y(x){f.has(x)&&(g.schedule(x),a()),x(m)}const g={schedule:(x,b=!1,S=!1)=>{const _=S&&d?l:o;return b&&f.add(x),_.has(x)||_.add(x),x},cancel:x=>{o.delete(x),f.delete(x)},process:x=>{if(m=x,d){h=!0;return}d=!0,[l,o]=[o,l],l.forEach(y),l.clear(),d=!1,h&&(h=!1,g.process(x))}};return g}const w2=40;function D1(a,s){let l=!1,o=!0;const d={delta:0,timestamp:0,isProcessing:!1},h=()=>l=!0,f=or.reduce((R,V)=>(R[V]=N2(h),R),{}),{setup:m,read:y,resolveKeyframes:g,preUpdate:x,update:b,preRender:S,render:w,postRender:_}=f,H=()=>{const R=Sn.useManualTiming?d.timestamp:performance.now();l=!1,Sn.useManualTiming||(d.delta=o?1e3/60:Math.max(Math.min(R-d.timestamp,w2),1)),d.timestamp=R,d.isProcessing=!0,m.process(d),y.process(d),g.process(d),x.process(d),b.process(d),S.process(d),w.process(d),_.process(d),d.isProcessing=!1,l&&s&&(o=!1,a(H))},K=()=>{l=!0,o=!0,d.isProcessing||a(H)};return{schedule:or.reduce((R,V)=>{const J=f[V];return R[V]=(le,F=!1,Y=!1)=>(l||K(),J.schedule(le,F,Y)),R},{}),cancel:R=>{for(let V=0;V<or.length;V++)f[or[V]].cancel(R)},state:d,steps:f}}const{schedule:Oe,cancel:Fn,state:st,steps:ru}=D1(typeof requestAnimationFrame<"u"?requestAnimationFrame:qt,!0);let pr;function M2(){pr=void 0}const ut={now:()=>(pr===void 0&&ut.set(st.isProcessing||Sn.useManualTiming?st.timestamp:performance.now()),pr),set:a=>{pr=a,queueMicrotask(M2)}},_1=a=>s=>typeof s=="string"&&s.startsWith(a),R1=_1("--"),A2=_1("var(--"),id=a=>A2(a)?k2.test(a.split("/*")[0].trim()):!1,k2=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function Pm(a){return typeof a!="string"?!1:a.split("/*")[0].includes("var(--")}const vi={test:a=>typeof a=="number",parse:parseFloat,transform:a=>a},Ds={...vi,transform:a=>en(0,1,a)},cr={...vi,default:1},Ms=a=>Math.round(a*1e5)/1e5,sd=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function z2(a){return a==null}const E2=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,ld=(a,s)=>l=>!!(typeof l=="string"&&E2.test(l)&&l.startsWith(a)||s&&!z2(l)&&Object.prototype.hasOwnProperty.call(l,s)),O1=(a,s,l)=>o=>{if(typeof o!="string")return o;const[d,h,f,m]=o.match(sd);return{[a]:parseFloat(d),[s]:parseFloat(h),[l]:parseFloat(f),alpha:m!==void 0?parseFloat(m):1}},C2=a=>en(0,255,a),ou={...vi,transform:a=>Math.round(C2(a))},ba={test:ld("rgb","red"),parse:O1("red","green","blue"),transform:({red:a,green:s,blue:l,alpha:o=1})=>"rgba("+ou.transform(a)+", "+ou.transform(s)+", "+ou.transform(l)+", "+Ms(Ds.transform(o))+")"};function D2(a){let s="",l="",o="",d="";return a.length>5?(s=a.substring(1,3),l=a.substring(3,5),o=a.substring(5,7),d=a.substring(7,9)):(s=a.substring(1,2),l=a.substring(2,3),o=a.substring(3,4),d=a.substring(4,5),s+=s,l+=l,o+=o,d+=d),{red:parseInt(s,16),green:parseInt(l,16),blue:parseInt(o,16),alpha:d?parseInt(d,16)/255:1}}const Nu={test:ld("#"),parse:D2,transform:ba.transform},Bs=a=>({test:s=>typeof s=="string"&&s.endsWith(a)&&s.split(" ").length===1,parse:parseFloat,transform:s=>`${s}${a}`}),Jn=Bs("deg"),It=Bs("%"),W=Bs("px"),_2=Bs("vh"),R2=Bs("vw"),Wm={...It,parse:a=>It.parse(a)/100,transform:a=>It.transform(a*100)},ci={test:ld("hsl","hue"),parse:O1("hue","saturation","lightness"),transform:({hue:a,saturation:s,lightness:l,alpha:o=1})=>"hsla("+Math.round(a)+", "+It.transform(Ms(s))+", "+It.transform(Ms(l))+", "+Ms(Ds.transform(o))+")"},Je={test:a=>ba.test(a)||Nu.test(a)||ci.test(a),parse:a=>ba.test(a)?ba.parse(a):ci.test(a)?ci.parse(a):Nu.parse(a),transform:a=>typeof a=="string"?a:a.hasOwnProperty("red")?ba.transform(a):ci.transform(a),getAnimatableNone:a=>{const s=Je.parse(a);return s.alpha=0,Je.transform(s)}},O2=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function V2(a){return isNaN(a)&&typeof a=="string"&&(a.match(sd)?.length||0)+(a.match(O2)?.length||0)>0}const V1="number",U1="color",U2="var",L2="var(",Im="${}",B2=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function _s(a){const s=a.toString(),l=[],o={color:[],number:[],var:[]},d=[];let h=0;const m=s.replace(B2,y=>(Je.test(y)?(o.color.push(h),d.push(U1),l.push(Je.parse(y))):y.startsWith(L2)?(o.var.push(h),d.push(U2),l.push(y)):(o.number.push(h),d.push(V1),l.push(parseFloat(y))),++h,Im)).split(Im);return{values:l,split:m,indexes:o,types:d}}function L1(a){return _s(a).values}function B1(a){const{split:s,types:l}=_s(a),o=s.length;return d=>{let h="";for(let f=0;f<o;f++)if(h+=s[f],d[f]!==void 0){const m=l[f];m===V1?h+=Ms(d[f]):m===U1?h+=Je.transform(d[f]):h+=d[f]}return h}}const H2=a=>typeof a=="number"?0:Je.test(a)?Je.getAnimatableNone(a):a;function q2(a){const s=L1(a);return B1(a)(s.map(H2))}const Pn={test:V2,parse:L1,createTransformer:B1,getAnimatableNone:q2};function cu(a,s,l){return l<0&&(l+=1),l>1&&(l-=1),l<1/6?a+(s-a)*6*l:l<1/2?s:l<2/3?a+(s-a)*(2/3-l)*6:a}function Y2({hue:a,saturation:s,lightness:l,alpha:o}){a/=360,s/=100,l/=100;let d=0,h=0,f=0;if(!s)d=h=f=l;else{const m=l<.5?l*(1+s):l+s-l*s,y=2*l-m;d=cu(y,m,a+1/3),h=cu(y,m,a),f=cu(y,m,a-1/3)}return{red:Math.round(d*255),green:Math.round(h*255),blue:Math.round(f*255),alpha:o}}function vr(a,s){return l=>l>0?s:a}const Ue=(a,s,l)=>a+(s-a)*l,uu=(a,s,l)=>{const o=a*a,d=l*(s*s-o)+o;return d<0?0:Math.sqrt(d)},G2=[Nu,ba,ci],X2=a=>G2.find(s=>s.test(a));function e0(a){const s=X2(a);if(!s)return!1;let l=s.parse(a);return s===ci&&(l=Y2(l)),l}const t0=(a,s)=>{const l=e0(a),o=e0(s);if(!l||!o)return vr(a,s);const d={...l};return h=>(d.red=uu(l.red,o.red,h),d.green=uu(l.green,o.green,h),d.blue=uu(l.blue,o.blue,h),d.alpha=Ue(l.alpha,o.alpha,h),ba.transform(d))},wu=new Set(["none","hidden"]);function K2(a,s){return wu.has(a)?l=>l<=0?a:s:l=>l>=1?s:a}function Q2(a,s){return l=>Ue(a,s,l)}function rd(a){return typeof a=="number"?Q2:typeof a=="string"?id(a)?vr:Je.test(a)?t0:$2:Array.isArray(a)?H1:typeof a=="object"?Je.test(a)?t0:Z2:vr}function H1(a,s){const l=[...a],o=l.length,d=a.map((h,f)=>rd(h)(h,s[f]));return h=>{for(let f=0;f<o;f++)l[f]=d[f](h);return l}}function Z2(a,s){const l={...a,...s},o={};for(const d in l)a[d]!==void 0&&s[d]!==void 0&&(o[d]=rd(a[d])(a[d],s[d]));return d=>{for(const h in o)l[h]=o[h](d);return l}}function J2(a,s){const l=[],o={color:0,var:0,number:0};for(let d=0;d<s.values.length;d++){const h=s.types[d],f=a.indexes[h][o[h]],m=a.values[f]??0;l[d]=m,o[h]++}return l}const $2=(a,s)=>{const l=Pn.createTransformer(s),o=_s(a),d=_s(s);return o.indexes.var.length===d.indexes.var.length&&o.indexes.color.length===d.indexes.color.length&&o.indexes.number.length>=d.indexes.number.length?wu.has(a)&&!d.values.length||wu.has(s)&&!o.values.length?K2(a,s):Us(H1(J2(o,d),d.values),l):vr(a,s)};function q1(a,s,l){return typeof a=="number"&&typeof s=="number"&&typeof l=="number"?Ue(a,s,l):rd(a)(a,s)}const F2=a=>{const s=({timestamp:l})=>a(l);return{start:(l=!0)=>Oe.update(s,l),stop:()=>Fn(s),now:()=>st.isProcessing?st.timestamp:ut.now()}},Y1=(a,s,l=10)=>{let o="";const d=Math.max(Math.round(s/l),2);for(let h=0;h<d;h++)o+=Math.round(a(h/(d-1))*1e4)/1e4+", ";return`linear(${o.substring(0,o.length-2)})`},br=2e4;function od(a){let s=0;const l=50;let o=a.next(s);for(;!o.done&&s<br;)s+=l,o=a.next(s);return s>=br?1/0:s}function P2(a,s=100,l){const o=l({...a,keyframes:[0,s]}),d=Math.min(od(o),br);return{type:"keyframes",ease:h=>o.next(d*h).value/s,duration:Ht(d)}}const W2=5;function G1(a,s,l){const o=Math.max(s-W2,0);return S1(l-a(o),s-o)}const He={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},du=.001;function I2({duration:a=He.duration,bounce:s=He.bounce,velocity:l=He.velocity,mass:o=He.mass}){let d,h,f=1-s;f=en(He.minDamping,He.maxDamping,f),a=en(He.minDuration,He.maxDuration,Ht(a)),f<1?(d=g=>{const x=g*f,b=x*a,S=x-l,w=Mu(g,f),_=Math.exp(-b);return du-S/w*_},h=g=>{const b=g*f*a,S=b*l+l,w=Math.pow(f,2)*Math.pow(g,2)*a,_=Math.exp(-b),H=Mu(Math.pow(g,2),f);return(-d(g)+du>0?-1:1)*((S-w)*_)/H}):(d=g=>{const x=Math.exp(-g*a),b=(g-l)*a+1;return-du+x*b},h=g=>{const x=Math.exp(-g*a),b=(l-g)*(a*a);return x*b});const m=5/a,y=tb(d,h,m);if(a=bn(a),isNaN(y))return{stiffness:He.stiffness,damping:He.damping,duration:a};{const g=Math.pow(y,2)*o;return{stiffness:g,damping:f*2*Math.sqrt(o*g),duration:a}}}const eb=12;function tb(a,s,l){let o=l;for(let d=1;d<eb;d++)o=o-a(o)/s(o);return o}function Mu(a,s){return a*Math.sqrt(1-s*s)}const nb=["duration","bounce"],ab=["stiffness","damping","mass"];function n0(a,s){return s.some(l=>a[l]!==void 0)}function ib(a){let s={velocity:He.velocity,stiffness:He.stiffness,damping:He.damping,mass:He.mass,isResolvedFromDuration:!1,...a};if(!n0(a,ab)&&n0(a,nb))if(a.visualDuration){const l=a.visualDuration,o=2*Math.PI/(l*1.2),d=o*o,h=2*en(.05,1,1-(a.bounce||0))*Math.sqrt(d);s={...s,mass:He.mass,stiffness:d,damping:h}}else{const l=I2(a);s={...s,...l,mass:He.mass},s.isResolvedFromDuration=!0}return s}function Sr(a=He.visualDuration,s=He.bounce){const l=typeof a!="object"?{visualDuration:a,keyframes:[0,1],bounce:s}:a;let{restSpeed:o,restDelta:d}=l;const h=l.keyframes[0],f=l.keyframes[l.keyframes.length-1],m={done:!1,value:h},{stiffness:y,damping:g,mass:x,duration:b,velocity:S,isResolvedFromDuration:w}=ib({...l,velocity:-Ht(l.velocity||0)}),_=S||0,H=g/(2*Math.sqrt(y*x)),K=f-h,G=Ht(Math.sqrt(y/x)),Z=Math.abs(K)<5;o||(o=Z?He.restSpeed.granular:He.restSpeed.default),d||(d=Z?He.restDelta.granular:He.restDelta.default);let R;if(H<1){const J=Mu(G,H);R=le=>{const F=Math.exp(-H*G*le);return f-F*((_+H*G*K)/J*Math.sin(J*le)+K*Math.cos(J*le))}}else if(H===1)R=J=>f-Math.exp(-G*J)*(K+(_+G*K)*J);else{const J=G*Math.sqrt(H*H-1);R=le=>{const F=Math.exp(-H*G*le),Y=Math.min(J*le,300);return f-F*((_+H*G*K)*Math.sinh(Y)+J*K*Math.cosh(Y))/J}}const V={calculatedDuration:w&&b||null,next:J=>{const le=R(J);if(w)m.done=J>=b;else{let F=J===0?_:0;H<1&&(F=J===0?bn(_):G1(R,J,le));const Y=Math.abs(F)<=o,ee=Math.abs(f-le)<=d;m.done=Y&&ee}return m.value=m.done?f:le,m},toString:()=>{const J=Math.min(od(V),br),le=Y1(F=>V.next(J*F).value,J,30);return J+"ms "+le},toTransition:()=>{}};return V}Sr.applyToOptions=a=>{const s=P2(a,100,Sr);return a.ease=s.ease,a.duration=bn(s.duration),a.type="keyframes",a};function Au({keyframes:a,velocity:s=0,power:l=.8,timeConstant:o=325,bounceDamping:d=10,bounceStiffness:h=500,modifyTarget:f,min:m,max:y,restDelta:g=.5,restSpeed:x}){const b=a[0],S={done:!1,value:b},w=Y=>m!==void 0&&Y<m||y!==void 0&&Y>y,_=Y=>m===void 0?y:y===void 0||Math.abs(m-Y)<Math.abs(y-Y)?m:y;let H=l*s;const K=b+H,G=f===void 0?K:f(K);G!==K&&(H=G-b);const Z=Y=>-H*Math.exp(-Y/o),R=Y=>G+Z(Y),V=Y=>{const ee=Z(Y),ce=R(Y);S.done=Math.abs(ee)<=g,S.value=S.done?G:ce};let J,le;const F=Y=>{w(S.value)&&(J=Y,le=Sr({keyframes:[S.value,_(S.value)],velocity:G1(R,Y,S.value),damping:d,stiffness:h,restDelta:g,restSpeed:x}))};return F(0),{calculatedDuration:null,next:Y=>{let ee=!1;return!le&&J===void 0&&(ee=!0,V(Y),F(Y)),J!==void 0&&Y>=J?le.next(Y-J):(!ee&&V(Y),S)}}}function sb(a,s,l){const o=[],d=l||Sn.mix||q1,h=a.length-1;for(let f=0;f<h;f++){let m=d(a[f],a[f+1]);if(s){const y=Array.isArray(s)?s[f]||qt:s;m=Us(y,m)}o.push(m)}return o}function lb(a,s,{clamp:l=!0,ease:o,mixer:d}={}){const h=a.length;if(Iu(h===s.length),h===1)return()=>s[0];if(h===2&&s[0]===s[1])return()=>s[1];const f=a[0]===a[1];a[0]>a[h-1]&&(a=[...a].reverse(),s=[...s].reverse());const m=sb(s,o,d),y=m.length,g=x=>{if(f&&x<a[0])return s[0];let b=0;if(y>1)for(;b<a.length-2&&!(x<a[b+1]);b++);const S=Cs(a[b],a[b+1],x);return m[b](S)};return l?x=>g(en(a[0],a[h-1],x)):g}function rb(a,s){const l=a[a.length-1];for(let o=1;o<=s;o++){const d=Cs(0,s,o);a.push(Ue(l,1,d))}}function ob(a){const s=[0];return rb(s,a.length-1),s}function cb(a,s){return a.map(l=>l*s)}function ub(a,s){return a.map(()=>s||E1).splice(0,a.length-1)}function As({duration:a=300,keyframes:s,times:l,ease:o="easeInOut"}){const d=S2(o)?o.map(Fm):Fm(o),h={done:!1,value:s[0]},f=cb(l&&l.length===s.length?l:ob(s),a),m=lb(f,s,{ease:Array.isArray(d)?d:ub(s,d)});return{calculatedDuration:a,next:y=>(h.value=m(y),h.done=y>=a,h)}}const db=a=>a!==null;function cd(a,{repeat:s,repeatType:l="loop"},o,d=1){const h=a.filter(db),m=d<0||s&&l!=="loop"&&s%2===1?0:h.length-1;return!m||o===void 0?h[m]:o}const fb={decay:Au,inertia:Au,tween:As,keyframes:As,spring:Sr};function X1(a){typeof a.type=="string"&&(a.type=fb[a.type])}class ud{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(s=>{this.resolve=s})}notifyFinished(){this.resolve()}then(s,l){return this.finished.then(s,l)}}const hb=a=>a/100;class dd extends ud{constructor(s){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{const{motionValue:l}=this.options;l&&l.updatedAt!==ut.now()&&this.tick(ut.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),this.options.onStop?.())},this.options=s,this.initAnimation(),this.play(),s.autoplay===!1&&this.pause()}initAnimation(){const{options:s}=this;X1(s);const{type:l=As,repeat:o=0,repeatDelay:d=0,repeatType:h,velocity:f=0}=s;let{keyframes:m}=s;const y=l||As;y!==As&&typeof m[0]!="number"&&(this.mixKeyframes=Us(hb,q1(m[0],m[1])),m=[0,100]);const g=y({...s,keyframes:m});h==="mirror"&&(this.mirroredGenerator=y({...s,keyframes:[...m].reverse(),velocity:-f})),g.calculatedDuration===null&&(g.calculatedDuration=od(g));const{calculatedDuration:x}=g;this.calculatedDuration=x,this.resolvedDuration=x+d,this.totalDuration=this.resolvedDuration*(o+1)-d,this.generator=g}updateTime(s){const l=Math.round(s-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=l}tick(s,l=!1){const{generator:o,totalDuration:d,mixKeyframes:h,mirroredGenerator:f,resolvedDuration:m,calculatedDuration:y}=this;if(this.startTime===null)return o.next(0);const{delay:g=0,keyframes:x,repeat:b,repeatType:S,repeatDelay:w,type:_,onUpdate:H,finalKeyframe:K}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,s):this.speed<0&&(this.startTime=Math.min(s-d/this.speed,this.startTime)),l?this.currentTime=s:this.updateTime(s);const G=this.currentTime-g*(this.playbackSpeed>=0?1:-1),Z=this.playbackSpeed>=0?G<0:G>d;this.currentTime=Math.max(G,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=d);let R=this.currentTime,V=o;if(b){const Y=Math.min(this.currentTime,d)/m;let ee=Math.floor(Y),ce=Y%1;!ce&&Y>=1&&(ce=1),ce===1&&ee--,ee=Math.min(ee,b+1),ee%2&&(S==="reverse"?(ce=1-ce,w&&(ce-=w/m)):S==="mirror"&&(V=f)),R=en(0,1,ce)*m}const J=Z?{done:!1,value:x[0]}:V.next(R);h&&(J.value=h(J.value));let{done:le}=J;!Z&&y!==null&&(le=this.playbackSpeed>=0?this.currentTime>=d:this.currentTime<=0);const F=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&le);return F&&_!==Au&&(J.value=cd(x,this.options,K,this.speed)),H&&H(J.value),F&&this.finish(),J}then(s,l){return this.finished.then(s,l)}get duration(){return Ht(this.calculatedDuration)}get iterationDuration(){const{delay:s=0}=this.options||{};return this.duration+Ht(s)}get time(){return Ht(this.currentTime)}set time(s){s=bn(s),this.currentTime=s,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=s:this.driver&&(this.startTime=this.driver.now()-s/this.playbackSpeed),this.driver?.start(!1)}get speed(){return this.playbackSpeed}set speed(s){this.updateTime(ut.now());const l=this.playbackSpeed!==s;this.playbackSpeed=s,l&&(this.time=Ht(this.currentTime))}play(){if(this.isStopped)return;const{driver:s=F2,startTime:l}=this.options;this.driver||(this.driver=s(d=>this.tick(d))),this.options.onPlay?.();const o=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=o):this.holdTime!==null?this.startTime=o-this.holdTime:this.startTime||(this.startTime=l??o),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(ut.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state="finished",this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(s){return this.startTime=0,this.tick(s,!0)}attachTimeline(s){return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),this.driver?.stop(),s.observe(this)}}function pb(a){for(let s=1;s<a.length;s++)a[s]??(a[s]=a[s-1])}const Sa=a=>a*180/Math.PI,ku=a=>{const s=Sa(Math.atan2(a[1],a[0]));return zu(s)},mb={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:a=>(Math.abs(a[0])+Math.abs(a[3]))/2,rotate:ku,rotateZ:ku,skewX:a=>Sa(Math.atan(a[1])),skewY:a=>Sa(Math.atan(a[2])),skew:a=>(Math.abs(a[1])+Math.abs(a[2]))/2},zu=a=>(a=a%360,a<0&&(a+=360),a),a0=ku,i0=a=>Math.sqrt(a[0]*a[0]+a[1]*a[1]),s0=a=>Math.sqrt(a[4]*a[4]+a[5]*a[5]),gb={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:i0,scaleY:s0,scale:a=>(i0(a)+s0(a))/2,rotateX:a=>zu(Sa(Math.atan2(a[6],a[5]))),rotateY:a=>zu(Sa(Math.atan2(-a[2],a[0]))),rotateZ:a0,rotate:a0,skewX:a=>Sa(Math.atan(a[4])),skewY:a=>Sa(Math.atan(a[1])),skew:a=>(Math.abs(a[1])+Math.abs(a[4]))/2};function Eu(a){return a.includes("scale")?1:0}function Cu(a,s){if(!a||a==="none")return Eu(s);const l=a.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let o,d;if(l)o=gb,d=l;else{const m=a.match(/^matrix\(([-\d.e\s,]+)\)$/u);o=mb,d=m}if(!d)return Eu(s);const h=o[s],f=d[1].split(",").map(xb);return typeof h=="function"?h(f):f[h]}const yb=(a,s)=>{const{transform:l="none"}=getComputedStyle(a);return Cu(l,s)};function xb(a){return parseFloat(a.trim())}const bi=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Si=new Set(bi),l0=a=>a===vi||a===W,vb=new Set(["x","y","z"]),bb=bi.filter(a=>!vb.has(a));function Sb(a){const s=[];return bb.forEach(l=>{const o=a.getValue(l);o!==void 0&&(s.push([l,o.get()]),o.set(l.startsWith("scale")?1:0))}),s}const $n={width:({x:a},{paddingLeft:s="0",paddingRight:l="0"})=>a.max-a.min-parseFloat(s)-parseFloat(l),height:({y:a},{paddingTop:s="0",paddingBottom:l="0"})=>a.max-a.min-parseFloat(s)-parseFloat(l),top:(a,{top:s})=>parseFloat(s),left:(a,{left:s})=>parseFloat(s),bottom:({y:a},{top:s})=>parseFloat(s)+(a.max-a.min),right:({x:a},{left:s})=>parseFloat(s)+(a.max-a.min),x:(a,{transform:s})=>Cu(s,"x"),y:(a,{transform:s})=>Cu(s,"y")};$n.translateX=$n.x;$n.translateY=$n.y;const Ta=new Set;let Du=!1,_u=!1,Ru=!1;function K1(){if(_u){const a=Array.from(Ta).filter(o=>o.needsMeasurement),s=new Set(a.map(o=>o.element)),l=new Map;s.forEach(o=>{const d=Sb(o);d.length&&(l.set(o,d),o.render())}),a.forEach(o=>o.measureInitialState()),s.forEach(o=>{o.render();const d=l.get(o);d&&d.forEach(([h,f])=>{o.getValue(h)?.set(f)})}),a.forEach(o=>o.measureEndState()),a.forEach(o=>{o.suspendedScrollY!==void 0&&window.scrollTo(0,o.suspendedScrollY)})}_u=!1,Du=!1,Ta.forEach(a=>a.complete(Ru)),Ta.clear()}function Q1(){Ta.forEach(a=>{a.readKeyframes(),a.needsMeasurement&&(_u=!0)})}function jb(){Ru=!0,Q1(),K1(),Ru=!1}class fd{constructor(s,l,o,d,h,f=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...s],this.onComplete=l,this.name=o,this.motionValue=d,this.element=h,this.isAsync=f}scheduleResolve(){this.state="scheduled",this.isAsync?(Ta.add(this),Du||(Du=!0,Oe.read(Q1),Oe.resolveKeyframes(K1))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:s,name:l,element:o,motionValue:d}=this;if(s[0]===null){const h=d?.get(),f=s[s.length-1];if(h!==void 0)s[0]=h;else if(o&&l){const m=o.readValue(l,f);m!=null&&(s[0]=m)}s[0]===void 0&&(s[0]=f),d&&h===void 0&&d.set(s[0])}pb(s)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(s=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,s),Ta.delete(this)}cancel(){this.state==="scheduled"&&(Ta.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const Tb=a=>a.startsWith("--");function Nb(a,s,l){Tb(s)?a.style.setProperty(s,l):a.style[s]=l}const wb=ed(()=>window.ScrollTimeline!==void 0),Mb={};function Ab(a,s){const l=ed(a);return()=>Mb[s]??l()}const Z1=Ab(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Ns=([a,s,l,o])=>`cubic-bezier(${a}, ${s}, ${l}, ${o})`,r0={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Ns([0,.65,.55,1]),circOut:Ns([.55,0,1,.45]),backIn:Ns([.31,.01,.66,-.59]),backOut:Ns([.33,1.53,.69,.99])};function J1(a,s){if(a)return typeof a=="function"?Z1()?Y1(a,s):"ease-out":C1(a)?Ns(a):Array.isArray(a)?a.map(l=>J1(l,s)||r0.easeOut):r0[a]}function kb(a,s,l,{delay:o=0,duration:d=300,repeat:h=0,repeatType:f="loop",ease:m="easeOut",times:y}={},g=void 0){const x={[s]:l};y&&(x.offset=y);const b=J1(m,d);Array.isArray(b)&&(x.easing=b);const S={delay:o,duration:d,easing:Array.isArray(b)?"linear":b,fill:"both",iterations:h+1,direction:f==="reverse"?"alternate":"normal"};return g&&(S.pseudoElement=g),a.animate(x,S)}function $1(a){return typeof a=="function"&&"applyToOptions"in a}function zb({type:a,...s}){return $1(a)&&Z1()?a.applyToOptions(s):(s.duration??(s.duration=300),s.ease??(s.ease="easeOut"),s)}class Eb extends ud{constructor(s){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!s)return;const{element:l,name:o,keyframes:d,pseudoElement:h,allowFlatten:f=!1,finalKeyframe:m,onComplete:y}=s;this.isPseudoElement=!!h,this.allowFlatten=f,this.options=s,Iu(typeof s.type!="string");const g=zb(s);this.animation=kb(l,o,d,g,h),g.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!h){const x=cd(d,this.options,m,this.speed);this.updateMotionValue?this.updateMotionValue(x):Nb(l,o,x),this.animation.cancel()}y?.(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:s}=this;s==="idle"||s==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){this.isPseudoElement||this.animation.commitStyles?.()}get duration(){const s=this.animation.effect?.getComputedTiming?.().duration||0;return Ht(Number(s))}get iterationDuration(){const{delay:s=0}=this.options||{};return this.duration+Ht(s)}get time(){return Ht(Number(this.animation.currentTime)||0)}set time(s){this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=bn(s)}get speed(){return this.animation.playbackRate}set speed(s){s<0&&(this.finishedTime=null),this.animation.playbackRate=s}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(s){this.manualStartTime=this.animation.startTime=s}attachTimeline({timeline:s,observe:l}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:"linear"}),this.animation.onfinish=null,s&&wb()?(this.animation.timeline=s,qt):l(this)}}const F1={anticipate:A1,backInOut:M1,circInOut:z1};function Cb(a){return a in F1}function Db(a){typeof a.ease=="string"&&Cb(a.ease)&&(a.ease=F1[a.ease])}const fu=10;class _b extends Eb{constructor(s){Db(s),X1(s),super(s),s.startTime!==void 0&&(this.startTime=s.startTime),this.options=s}updateMotionValue(s){const{motionValue:l,onUpdate:o,onComplete:d,element:h,...f}=this.options;if(!l)return;if(s!==void 0){l.set(s);return}const m=new dd({...f,autoplay:!1}),y=Math.max(fu,ut.now()-this.startTime),g=en(0,fu,y-fu);l.setWithVelocity(m.sample(Math.max(0,y-g)).value,m.sample(y).value,g),m.stop()}}const o0=(a,s)=>s==="zIndex"?!1:!!(typeof a=="number"||Array.isArray(a)||typeof a=="string"&&(Pn.test(a)||a==="0")&&!a.startsWith("url("));function Rb(a){const s=a[0];if(a.length===1)return!0;for(let l=0;l<a.length;l++)if(a[l]!==s)return!0}function Ob(a,s,l,o){const d=a[0];if(d===null)return!1;if(s==="display"||s==="visibility")return!0;const h=a[a.length-1],f=o0(d,s),m=o0(h,s);return!f||!m?!1:Rb(a)||(l==="spring"||$1(l))&&o}function Ou(a){a.duration=0,a.type="keyframes"}const Vb=new Set(["opacity","clipPath","filter","transform"]),Ub=ed(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function Lb(a){const{motionValue:s,name:l,repeatDelay:o,repeatType:d,damping:h,type:f}=a;if(!(s?.owner?.current instanceof HTMLElement))return!1;const{onUpdate:y,transformTemplate:g}=s.owner.getProps();return Ub()&&l&&Vb.has(l)&&(l!=="transform"||!g)&&!y&&!o&&d!=="mirror"&&h!==0&&f!=="inertia"}const Bb=40;class Hb extends ud{constructor({autoplay:s=!0,delay:l=0,type:o="keyframes",repeat:d=0,repeatDelay:h=0,repeatType:f="loop",keyframes:m,name:y,motionValue:g,element:x,...b}){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=ut.now();const S={autoplay:s,delay:l,type:o,repeat:d,repeatDelay:h,repeatType:f,name:y,motionValue:g,element:x,...b},w=x?.KeyframeResolver||fd;this.keyframeResolver=new w(m,(_,H,K)=>this.onKeyframesResolved(_,H,S,!K),y,g,x),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(s,l,o,d){this.keyframeResolver=void 0;const{name:h,type:f,velocity:m,delay:y,isHandoff:g,onUpdate:x}=o;this.resolvedAt=ut.now(),Ob(s,h,f,m)||((Sn.instantAnimations||!y)&&x?.(cd(s,o,l)),s[0]=s[s.length-1],Ou(o),o.repeat=0);const S={startTime:d?this.resolvedAt?this.resolvedAt-this.createdAt>Bb?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:l,...o,keyframes:s},w=!g&&Lb(S)?new _b({...S,element:S.motionValue.owner.current}):new dd(S);w.finished.then(()=>this.notifyFinished()).catch(qt),this.pendingTimeline&&(this.stopTimeline=w.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=w}get finished(){return this._animation?this.animation.finished:this._finished}then(s,l){return this.finished.finally(s).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),jb()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(s){this.animation.time=s}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(s){this.animation.speed=s}get startTime(){return this.animation.startTime}attachTimeline(s){return this._animation?this.stopTimeline=this.animation.attachTimeline(s):this.pendingTimeline=s,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}}const qb=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function Yb(a){const s=qb.exec(a);if(!s)return[,];const[,l,o,d]=s;return[`--${l??o}`,d]}function P1(a,s,l=1){const[o,d]=Yb(a);if(!o)return;const h=window.getComputedStyle(s).getPropertyValue(o);if(h){const f=h.trim();return x1(f)?parseFloat(f):f}return id(d)?P1(d,s,l+1):d}function hd(a,s){return a?.[s]??a?.default??a}const W1=new Set(["width","height","top","left","right","bottom",...bi]),Gb={test:a=>a==="auto",parse:a=>a},I1=a=>s=>s.test(a),eg=[vi,W,It,Jn,R2,_2,Gb],c0=a=>eg.find(I1(a));function Xb(a){return typeof a=="number"?a===0:a!==null?a==="none"||a==="0"||b1(a):!0}const Kb=new Set(["brightness","contrast","saturate","opacity"]);function Qb(a){const[s,l]=a.slice(0,-1).split("(");if(s==="drop-shadow")return a;const[o]=l.match(sd)||[];if(!o)return a;const d=l.replace(o,"");let h=Kb.has(s)?1:0;return o!==l&&(h*=100),s+"("+h+d+")"}const Zb=/\b([a-z-]*)\(.*?\)/gu,Vu={...Pn,getAnimatableNone:a=>{const s=a.match(Zb);return s?s.map(Qb).join(" "):a}},u0={...vi,transform:Math.round},Jb={rotate:Jn,rotateX:Jn,rotateY:Jn,rotateZ:Jn,scale:cr,scaleX:cr,scaleY:cr,scaleZ:cr,skew:Jn,skewX:Jn,skewY:Jn,distance:W,translateX:W,translateY:W,translateZ:W,x:W,y:W,z:W,perspective:W,transformPerspective:W,opacity:Ds,originX:Wm,originY:Wm,originZ:W},pd={borderWidth:W,borderTopWidth:W,borderRightWidth:W,borderBottomWidth:W,borderLeftWidth:W,borderRadius:W,radius:W,borderTopLeftRadius:W,borderTopRightRadius:W,borderBottomRightRadius:W,borderBottomLeftRadius:W,width:W,maxWidth:W,height:W,maxHeight:W,top:W,right:W,bottom:W,left:W,inset:W,insetBlock:W,insetBlockStart:W,insetBlockEnd:W,insetInline:W,insetInlineStart:W,insetInlineEnd:W,padding:W,paddingTop:W,paddingRight:W,paddingBottom:W,paddingLeft:W,paddingBlock:W,paddingBlockStart:W,paddingBlockEnd:W,paddingInline:W,paddingInlineStart:W,paddingInlineEnd:W,margin:W,marginTop:W,marginRight:W,marginBottom:W,marginLeft:W,marginBlock:W,marginBlockStart:W,marginBlockEnd:W,marginInline:W,marginInlineStart:W,marginInlineEnd:W,backgroundPositionX:W,backgroundPositionY:W,...Jb,zIndex:u0,fillOpacity:Ds,strokeOpacity:Ds,numOctaves:u0},$b={...pd,color:Je,backgroundColor:Je,outlineColor:Je,fill:Je,stroke:Je,borderColor:Je,borderTopColor:Je,borderRightColor:Je,borderBottomColor:Je,borderLeftColor:Je,filter:Vu,WebkitFilter:Vu},tg=a=>$b[a];function ng(a,s){let l=tg(a);return l!==Vu&&(l=Pn),l.getAnimatableNone?l.getAnimatableNone(s):void 0}const Fb=new Set(["auto","none","0"]);function Pb(a,s,l){let o=0,d;for(;o<a.length&&!d;){const h=a[o];typeof h=="string"&&!Fb.has(h)&&_s(h).values.length&&(d=a[o]),o++}if(d&&l)for(const h of s)a[h]=ng(l,d)}class Wb extends fd{constructor(s,l,o,d,h){super(s,l,o,d,h,!0)}readKeyframes(){const{unresolvedKeyframes:s,element:l,name:o}=this;if(!l||!l.current)return;super.readKeyframes();for(let x=0;x<s.length;x++){let b=s[x];if(typeof b=="string"&&(b=b.trim(),id(b))){const S=P1(b,l.current);S!==void 0&&(s[x]=S),x===s.length-1&&(this.finalKeyframe=b)}}if(this.resolveNoneKeyframes(),!W1.has(o)||s.length!==2)return;const[d,h]=s,f=c0(d),m=c0(h),y=Pm(d),g=Pm(h);if(y!==g&&$n[o]){this.needsMeasurement=!0;return}if(f!==m)if(l0(f)&&l0(m))for(let x=0;x<s.length;x++){const b=s[x];typeof b=="string"&&(s[x]=parseFloat(b))}else $n[o]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:s,name:l}=this,o=[];for(let d=0;d<s.length;d++)(s[d]===null||Xb(s[d]))&&o.push(d);o.length&&Pb(s,o,l)}measureInitialState(){const{element:s,unresolvedKeyframes:l,name:o}=this;if(!s||!s.current)return;o==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=$n[o](s.measureViewportBox(),window.getComputedStyle(s.current)),l[0]=this.measuredOrigin;const d=l[l.length-1];d!==void 0&&s.getValue(o,d).jump(d,!1)}measureEndState(){const{element:s,name:l,unresolvedKeyframes:o}=this;if(!s||!s.current)return;const d=s.getValue(l);d&&d.jump(this.measuredOrigin,!1);const h=o.length-1,f=o[h];o[h]=$n[l](s.measureViewportBox(),window.getComputedStyle(s.current)),f!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=f),this.removedTransforms?.length&&this.removedTransforms.forEach(([m,y])=>{s.getValue(m).set(y)}),this.resolveNoneKeyframes()}}function Ib(a,s,l){if(a instanceof EventTarget)return[a];if(typeof a=="string"){let o=document;const d=l?.[a]??o.querySelectorAll(a);return d?Array.from(d):[]}return Array.from(a)}const ag=(a,s)=>s&&typeof a=="number"?s.transform(a):a;function ig(a){return v1(a)&&"offsetHeight"in a}const d0=30,e5=a=>!isNaN(parseFloat(a));class t5{constructor(s,l={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=o=>{const d=ut.now();if(this.updatedAt!==d&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(o),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(const h of this.dependents)h.dirty()},this.hasAnimated=!1,this.setCurrent(s),this.owner=l.owner}setCurrent(s){this.current=s,this.updatedAt=ut.now(),this.canTrackVelocity===null&&s!==void 0&&(this.canTrackVelocity=e5(this.current))}setPrevFrameValue(s=this.current){this.prevFrameValue=s,this.prevUpdatedAt=this.updatedAt}onChange(s){return this.on("change",s)}on(s,l){this.events[s]||(this.events[s]=new td);const o=this.events[s].add(l);return s==="change"?()=>{o(),Oe.read(()=>{this.events.change.getSize()||this.stop()})}:o}clearListeners(){for(const s in this.events)this.events[s].clear()}attach(s,l){this.passiveEffect=s,this.stopPassiveEffect=l}set(s){this.passiveEffect?this.passiveEffect(s,this.updateAndNotify):this.updateAndNotify(s)}setWithVelocity(s,l,o){this.set(l),this.prev=void 0,this.prevFrameValue=s,this.prevUpdatedAt=this.updatedAt-o}jump(s,l=!0){this.updateAndNotify(s),this.prev=s,this.prevUpdatedAt=this.prevFrameValue=void 0,l&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(s){this.dependents||(this.dependents=new Set),this.dependents.add(s)}removeDependent(s){this.dependents&&this.dependents.delete(s)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const s=ut.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||s-this.updatedAt>d0)return 0;const l=Math.min(this.updatedAt-this.prevUpdatedAt,d0);return S1(parseFloat(this.current)-parseFloat(this.prevFrameValue),l)}start(s){return this.stop(),new Promise(l=>{this.hasAnimated=!0,this.animation=s(l),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function pi(a,s){return new t5(a,s)}const{schedule:md}=D1(queueMicrotask,!1),Jt={x:!1,y:!1};function sg(){return Jt.x||Jt.y}function n5(a){return a==="x"||a==="y"?Jt[a]?null:(Jt[a]=!0,()=>{Jt[a]=!1}):Jt.x||Jt.y?null:(Jt.x=Jt.y=!0,()=>{Jt.x=Jt.y=!1})}function lg(a,s){const l=Ib(a),o=new AbortController,d={passive:!0,...s,signal:o.signal};return[l,d,()=>o.abort()]}function f0(a){return!(a.pointerType==="touch"||sg())}function a5(a,s,l={}){const[o,d,h]=lg(a,l),f=m=>{if(!f0(m))return;const{target:y}=m,g=s(y,m);if(typeof g!="function"||!y)return;const x=b=>{f0(b)&&(g(b),y.removeEventListener("pointerleave",x))};y.addEventListener("pointerleave",x,d)};return o.forEach(m=>{m.addEventListener("pointerenter",f,d)}),h}const rg=(a,s)=>s?a===s?!0:rg(a,s.parentElement):!1,gd=a=>a.pointerType==="mouse"?typeof a.button!="number"||a.button<=0:a.isPrimary!==!1,i5=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function og(a){return i5.has(a.tagName)||a.isContentEditable===!0}const mr=new WeakSet;function h0(a){return s=>{s.key==="Enter"&&a(s)}}function hu(a,s){a.dispatchEvent(new PointerEvent("pointer"+s,{isPrimary:!0,bubbles:!0}))}const s5=(a,s)=>{const l=a.currentTarget;if(!l)return;const o=h0(()=>{if(mr.has(l))return;hu(l,"down");const d=h0(()=>{hu(l,"up")}),h=()=>hu(l,"cancel");l.addEventListener("keyup",d,s),l.addEventListener("blur",h,s)});l.addEventListener("keydown",o,s),l.addEventListener("blur",()=>l.removeEventListener("keydown",o),s)};function p0(a){return gd(a)&&!sg()}function l5(a,s,l={}){const[o,d,h]=lg(a,l),f=m=>{const y=m.currentTarget;if(!p0(m))return;mr.add(y);const g=s(y,m),x=(w,_)=>{window.removeEventListener("pointerup",b),window.removeEventListener("pointercancel",S),mr.has(y)&&mr.delete(y),p0(w)&&typeof g=="function"&&g(w,{success:_})},b=w=>{x(w,y===window||y===document||l.useGlobalTarget||rg(y,w.target))},S=w=>{x(w,!1)};window.addEventListener("pointerup",b,d),window.addEventListener("pointercancel",S,d)};return o.forEach(m=>{(l.useGlobalTarget?window:m).addEventListener("pointerdown",f,d),ig(m)&&(m.addEventListener("focus",g=>s5(g,d)),!og(m)&&!m.hasAttribute("tabindex")&&(m.tabIndex=0))}),h}function cg(a){return v1(a)&&"ownerSVGElement"in a}function r5(a){return cg(a)&&a.tagName==="svg"}const rt=a=>!!(a&&a.getVelocity),o5=[...eg,Je,Pn],c5=a=>o5.find(I1(a)),yd=D.createContext({transformPagePoint:a=>a,isStatic:!1,reducedMotion:"never"});function m0(a,s){if(typeof a=="function")return a(s);a!=null&&(a.current=s)}function u5(...a){return s=>{let l=!1;const o=a.map(d=>{const h=m0(d,s);return!l&&typeof h=="function"&&(l=!0),h});if(l)return()=>{for(let d=0;d<o.length;d++){const h=o[d];typeof h=="function"?h():m0(a[d],null)}}}}function d5(...a){return D.useCallback(u5(...a),a)}class f5 extends D.Component{getSnapshotBeforeUpdate(s){const l=this.props.childRef.current;if(l&&s.isPresent&&!this.props.isPresent){const o=l.offsetParent,d=ig(o)&&o.offsetWidth||0,h=this.props.sizeRef.current;h.height=l.offsetHeight||0,h.width=l.offsetWidth||0,h.top=l.offsetTop,h.left=l.offsetLeft,h.right=d-h.width-h.left}return null}componentDidUpdate(){}render(){return this.props.children}}function h5({children:a,isPresent:s,anchorX:l,root:o}){const d=D.useId(),h=D.useRef(null),f=D.useRef({width:0,height:0,top:0,left:0,right:0}),{nonce:m}=D.useContext(yd),y=a.props?.ref??a?.ref,g=d5(h,y);return D.useInsertionEffect(()=>{const{width:x,height:b,top:S,left:w,right:_}=f.current;if(s||!h.current||!x||!b)return;const H=l==="left"?`left: ${w}`:`right: ${_}`;h.current.dataset.motionPopId=d;const K=document.createElement("style");m&&(K.nonce=m);const G=o??document.head;return G.appendChild(K),K.sheet&&K.sheet.insertRule(`
          [data-motion-pop-id="${d}"] {
            position: absolute !important;
            width: ${x}px !important;
            height: ${b}px !important;
            ${H}px !important;
            top: ${S}px !important;
          }
        `),()=>{G.contains(K)&&G.removeChild(K)}},[s]),u.jsx(f5,{isPresent:s,childRef:h,sizeRef:f,children:D.cloneElement(a,{ref:g})})}const p5=({children:a,initial:s,isPresent:l,onExitComplete:o,custom:d,presenceAffectsLayout:h,mode:f,anchorX:m,root:y})=>{const g=$u(m5),x=D.useId();let b=!0,S=D.useMemo(()=>(b=!1,{id:x,initial:s,isPresent:l,custom:d,onExitComplete:w=>{g.set(w,!0);for(const _ of g.values())if(!_)return;o&&o()},register:w=>(g.set(w,!1),()=>g.delete(w))}),[l,g,o]);return h&&b&&(S={...S}),D.useMemo(()=>{g.forEach((w,_)=>g.set(_,!1))},[l]),D.useEffect(()=>{!l&&!g.size&&o&&o()},[l]),f==="popLayout"&&(a=u.jsx(h5,{isPresent:l,anchorX:m,root:y,children:a})),u.jsx(Ar.Provider,{value:S,children:a})};function m5(){return new Map}function ug(a=!0){const s=D.useContext(Ar);if(s===null)return[!0,null];const{isPresent:l,onExitComplete:o,register:d}=s,h=D.useId();D.useEffect(()=>{if(a)return d(h)},[a]);const f=D.useCallback(()=>a&&o&&o(h),[h,o,a]);return!l&&o?[!1,f]:[!0]}const ur=a=>a.key||"";function g0(a){const s=[];return D.Children.forEach(a,l=>{D.isValidElement(l)&&s.push(l)}),s}const ji=({children:a,custom:s,initial:l=!0,onExitComplete:o,presenceAffectsLayout:d=!0,mode:h="sync",propagate:f=!1,anchorX:m="left",root:y})=>{const[g,x]=ug(f),b=D.useMemo(()=>g0(a),[a]),S=f&&!g?[]:b.map(ur),w=D.useRef(!0),_=D.useRef(b),H=$u(()=>new Map),K=D.useRef(new Set),[G,Z]=D.useState(b),[R,V]=D.useState(b);y1(()=>{w.current=!1,_.current=b;for(let F=0;F<R.length;F++){const Y=ur(R[F]);S.includes(Y)?(H.delete(Y),K.current.delete(Y)):H.get(Y)!==!0&&H.set(Y,!1)}},[R,S.length,S.join("-")]);const J=[];if(b!==G){let F=[...b];for(let Y=0;Y<R.length;Y++){const ee=R[Y],ce=ur(ee);S.includes(ce)||(F.splice(Y,0,ee),J.push(ee))}return h==="wait"&&J.length&&(F=J),V(g0(F)),Z(b),null}const{forceRender:le}=D.useContext(Ju);return u.jsx(u.Fragment,{children:R.map(F=>{const Y=ur(F),ee=f&&!g?!1:b===R||S.includes(Y),ce=()=>{if(K.current.has(Y))return;if(K.current.add(Y),H.has(Y))H.set(Y,!0);else return;let pe=!0;H.forEach(je=>{je||(pe=!1)}),pe&&(le?.(),V(_.current),f&&x?.(),o&&o())};return u.jsx(p5,{isPresent:ee,initial:!w.current||l?void 0:!1,custom:s,presenceAffectsLayout:d,mode:h,root:y,onExitComplete:ee?void 0:ce,anchorX:m,children:F},Y)})})},dg=D.createContext({strict:!1}),y0={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},mi={};for(const a in y0)mi[a]={isEnabled:s=>y0[a].some(l=>!!s[l])};function g5(a){for(const s in a)mi[s]={...mi[s],...a[s]}}const y5=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function jr(a){return a.startsWith("while")||a.startsWith("drag")&&a!=="draggable"||a.startsWith("layout")||a.startsWith("onTap")||a.startsWith("onPan")||a.startsWith("onLayout")||y5.has(a)}let fg=a=>!jr(a);function x5(a){typeof a=="function"&&(fg=s=>s.startsWith("on")?!jr(s):a(s))}try{x5(require("@emotion/is-prop-valid").default)}catch{}function v5(a,s,l){const o={};for(const d in a)d==="values"&&typeof a.values=="object"||(fg(d)||l===!0&&jr(d)||!s&&!jr(d)||a.draggable&&d.startsWith("onDrag"))&&(o[d]=a[d]);return o}const kr=D.createContext({});function zr(a){return a!==null&&typeof a=="object"&&typeof a.start=="function"}function Rs(a){return typeof a=="string"||Array.isArray(a)}const xd=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],vd=["initial",...xd];function Er(a){return zr(a.animate)||vd.some(s=>Rs(a[s]))}function hg(a){return!!(Er(a)||a.variants)}function b5(a,s){if(Er(a)){const{initial:l,animate:o}=a;return{initial:l===!1||Rs(l)?l:void 0,animate:Rs(o)?o:void 0}}return a.inherit!==!1?s:{}}function S5(a){const{initial:s,animate:l}=b5(a,D.useContext(kr));return D.useMemo(()=>({initial:s,animate:l}),[x0(s),x0(l)])}function x0(a){return Array.isArray(a)?a.join(" "):a}function v0(a,s){return s.max===s.min?0:a/(s.max-s.min)*100}const Ts={correct:(a,s)=>{if(!s.target)return a;if(typeof a=="string")if(W.test(a))a=parseFloat(a);else return a;const l=v0(a,s.target.x),o=v0(a,s.target.y);return`${l}% ${o}%`}},j5={correct:(a,{treeScale:s,projectionDelta:l})=>{const o=a,d=Pn.parse(a);if(d.length>5)return o;const h=Pn.createTransformer(a),f=typeof d[0]!="number"?1:0,m=l.x.scale*s.x,y=l.y.scale*s.y;d[0+f]/=m,d[1+f]/=y;const g=Ue(m,y,.5);return typeof d[2+f]=="number"&&(d[2+f]/=g),typeof d[3+f]=="number"&&(d[3+f]/=g),h(d)}},Uu={borderRadius:{...Ts,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Ts,borderTopRightRadius:Ts,borderBottomLeftRadius:Ts,borderBottomRightRadius:Ts,boxShadow:j5};function pg(a,{layout:s,layoutId:l}){return Si.has(a)||a.startsWith("origin")||(s||l!==void 0)&&(!!Uu[a]||a==="opacity")}const T5={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},N5=bi.length;function w5(a,s,l){let o="",d=!0;for(let h=0;h<N5;h++){const f=bi[h],m=a[f];if(m===void 0)continue;let y=!0;if(typeof m=="number"?y=m===(f.startsWith("scale")?1:0):y=parseFloat(m)===0,!y||l){const g=ag(m,pd[f]);if(!y){d=!1;const x=T5[f]||f;o+=`${x}(${g}) `}l&&(s[f]=g)}}return o=o.trim(),l?o=l(s,d?"":o):d&&(o="none"),o}function bd(a,s,l){const{style:o,vars:d,transformOrigin:h}=a;let f=!1,m=!1;for(const y in s){const g=s[y];if(Si.has(y)){f=!0;continue}else if(R1(y)){d[y]=g;continue}else{const x=ag(g,pd[y]);y.startsWith("origin")?(m=!0,h[y]=x):o[y]=x}}if(s.transform||(f||l?o.transform=w5(s,a.transform,l):o.transform&&(o.transform="none")),m){const{originX:y="50%",originY:g="50%",originZ:x=0}=h;o.transformOrigin=`${y} ${g} ${x}`}}const Sd=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function mg(a,s,l){for(const o in s)!rt(s[o])&&!pg(o,l)&&(a[o]=s[o])}function M5({transformTemplate:a},s){return D.useMemo(()=>{const l=Sd();return bd(l,s,a),Object.assign({},l.vars,l.style)},[s])}function A5(a,s){const l=a.style||{},o={};return mg(o,l,a),Object.assign(o,M5(a,s)),o}function k5(a,s){const l={},o=A5(a,s);return a.drag&&a.dragListener!==!1&&(l.draggable=!1,o.userSelect=o.WebkitUserSelect=o.WebkitTouchCallout="none",o.touchAction=a.drag===!0?"none":`pan-${a.drag==="x"?"y":"x"}`),a.tabIndex===void 0&&(a.onTap||a.onTapStart||a.whileTap)&&(l.tabIndex=0),l.style=o,l}const z5={offset:"stroke-dashoffset",array:"stroke-dasharray"},E5={offset:"strokeDashoffset",array:"strokeDasharray"};function C5(a,s,l=1,o=0,d=!0){a.pathLength=1;const h=d?z5:E5;a[h.offset]=W.transform(-o);const f=W.transform(s),m=W.transform(l);a[h.array]=`${f} ${m}`}const D5=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function gg(a,{attrX:s,attrY:l,attrScale:o,pathLength:d,pathSpacing:h=1,pathOffset:f=0,...m},y,g,x){if(bd(a,m,g),y){a.style.viewBox&&(a.attrs.viewBox=a.style.viewBox);return}a.attrs=a.style,a.style={};const{attrs:b,style:S}=a;b.transform&&(S.transform=b.transform,delete b.transform),(S.transform||b.transformOrigin)&&(S.transformOrigin=b.transformOrigin??"50% 50%",delete b.transformOrigin),S.transform&&(S.transformBox=x?.transformBox??"fill-box",delete b.transformBox);for(const w of D5)b[w]!==void 0&&(S[w]=b[w],delete b[w]);s!==void 0&&(b.x=s),l!==void 0&&(b.y=l),o!==void 0&&(b.scale=o),d!==void 0&&C5(b,d,h,f,!1)}const yg=()=>({...Sd(),attrs:{}}),xg=a=>typeof a=="string"&&a.toLowerCase()==="svg";function _5(a,s,l,o){const d=D.useMemo(()=>{const h=yg();return gg(h,s,xg(o),a.transformTemplate,a.style),{...h.attrs,style:{...h.style}}},[s]);if(a.style){const h={};mg(h,a.style,a),d.style={...h,...d.style}}return d}const R5=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function jd(a){return typeof a!="string"||a.includes("-")?!1:!!(R5.indexOf(a)>-1||/[A-Z]/u.test(a))}function O5(a,s,l,{latestValues:o},d,h=!1,f){const y=(f??jd(a)?_5:k5)(s,o,d,a),g=v5(s,typeof a=="string",h),x=a!==D.Fragment?{...g,...y,ref:l}:{},{children:b}=s,S=D.useMemo(()=>rt(b)?b.get():b,[b]);return D.createElement(a,{...x,children:S})}function b0(a){const s=[{},{}];return a?.values.forEach((l,o)=>{s[0][o]=l.get(),s[1][o]=l.getVelocity()}),s}function Td(a,s,l,o){if(typeof s=="function"){const[d,h]=b0(o);s=s(l!==void 0?l:a.custom,d,h)}if(typeof s=="string"&&(s=a.variants&&a.variants[s]),typeof s=="function"){const[d,h]=b0(o);s=s(l!==void 0?l:a.custom,d,h)}return s}function gr(a){return rt(a)?a.get():a}function V5({scrapeMotionValuesFromProps:a,createRenderState:s},l,o,d){return{latestValues:U5(l,o,d,a),renderState:s()}}function U5(a,s,l,o){const d={},h=o(a,{});for(const S in h)d[S]=gr(h[S]);let{initial:f,animate:m}=a;const y=Er(a),g=hg(a);s&&g&&!y&&a.inherit!==!1&&(f===void 0&&(f=s.initial),m===void 0&&(m=s.animate));let x=l?l.initial===!1:!1;x=x||f===!1;const b=x?m:f;if(b&&typeof b!="boolean"&&!zr(b)){const S=Array.isArray(b)?b:[b];for(let w=0;w<S.length;w++){const _=Td(a,S[w]);if(_){const{transitionEnd:H,transition:K,...G}=_;for(const Z in G){let R=G[Z];if(Array.isArray(R)){const V=x?R.length-1:0;R=R[V]}R!==null&&(d[Z]=R)}for(const Z in H)d[Z]=H[Z]}}}return d}const vg=a=>(s,l)=>{const o=D.useContext(kr),d=D.useContext(Ar),h=()=>V5(a,s,o,d);return l?h():$u(h)};function Nd(a,s,l){const{style:o}=a,d={};for(const h in o)(rt(o[h])||s.style&&rt(s.style[h])||pg(h,a)||l?.getValue(h)?.liveStyle!==void 0)&&(d[h]=o[h]);return d}const L5=vg({scrapeMotionValuesFromProps:Nd,createRenderState:Sd});function bg(a,s,l){const o=Nd(a,s,l);for(const d in a)if(rt(a[d])||rt(s[d])){const h=bi.indexOf(d)!==-1?"attr"+d.charAt(0).toUpperCase()+d.substring(1):d;o[h]=a[d]}return o}const B5=vg({scrapeMotionValuesFromProps:bg,createRenderState:yg}),H5=Symbol.for("motionComponentSymbol");function q5(a,s,l){const o=D.useRef(l);D.useInsertionEffect(()=>{o.current=l});const d=D.useRef(null);return D.useCallback(h=>{h&&a.onMount?.(h),s&&(h?s.mount(h):s.unmount());const f=o.current;if(typeof f=="function")if(h){const m=f(h);typeof m=="function"&&(d.current=m)}else d.current?(d.current(),d.current=null):f(h);else f&&(f.current=h)},[s])}const wd=a=>a.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),Y5="framerAppearId",Sg="data-"+wd(Y5),jg=D.createContext({});function ws(a){return a&&typeof a=="object"&&Object.prototype.hasOwnProperty.call(a,"current")}function G5(a,s,l,o,d,h){const{visualElement:f}=D.useContext(kr),m=D.useContext(dg),y=D.useContext(Ar),g=D.useContext(yd).reducedMotion,x=D.useRef(null);o=o||m.renderer,!x.current&&o&&(x.current=o(a,{visualState:s,parent:f,props:l,presenceContext:y,blockInitialAnimation:y?y.initial===!1:!1,reducedMotionConfig:g,isSVG:h}));const b=x.current,S=D.useContext(jg);b&&!b.projection&&d&&(b.type==="html"||b.type==="svg")&&X5(x.current,l,d,S);const w=D.useRef(!1);D.useInsertionEffect(()=>{b&&w.current&&b.update(l,y)});const _=l[Sg],H=D.useRef(!!_&&!window.MotionHandoffIsComplete?.(_)&&window.MotionHasOptimisedAnimation?.(_));return y1(()=>{b&&(w.current=!0,window.MotionIsMounted=!0,b.updateFeatures(),b.scheduleRenderMicrotask(),H.current&&b.animationState&&b.animationState.animateChanges())}),D.useEffect(()=>{b&&(!H.current&&b.animationState&&b.animationState.animateChanges(),H.current&&(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.(_)}),H.current=!1),b.enteringChildren=void 0)}),b}function X5(a,s,l,o){const{layoutId:d,layout:h,drag:f,dragConstraints:m,layoutScroll:y,layoutRoot:g,layoutCrossfade:x}=s;a.projection=new l(a.latestValues,s["data-framer-portal-id"]?void 0:Tg(a.parent)),a.projection.setOptions({layoutId:d,layout:h,alwaysMeasureLayout:!!f||m&&ws(m),visualElement:a,animationType:typeof h=="string"?h:"both",initialPromotionConfig:o,crossfade:x,layoutScroll:y,layoutRoot:g})}function Tg(a){if(a)return a.options.allowProjection!==!1?a.projection:Tg(a.parent)}function pu(a,{forwardMotionProps:s=!1,type:l}={},o,d){o&&g5(o);const h=l?l==="svg":jd(a),f=h?B5:L5;function m(g,x){let b;const S={...D.useContext(yd),...g,layoutId:K5(g)},{isStatic:w}=S,_=S5(g),H=f(g,w);if(!w&&Fu){Q5();const K=Z5(S);b=K.MeasureLayout,_.visualElement=G5(a,H,S,d,K.ProjectionNode,h)}return u.jsxs(kr.Provider,{value:_,children:[b&&_.visualElement?u.jsx(b,{visualElement:_.visualElement,...S}):null,O5(a,g,q5(H,_.visualElement,x),H,w,s,h)]})}m.displayName=`motion.${typeof a=="string"?a:`create(${a.displayName??a.name??""})`}`;const y=D.forwardRef(m);return y[H5]=a,y}function K5({layoutId:a}){const s=D.useContext(Ju).id;return s&&a!==void 0?s+"-"+a:a}function Q5(a,s){D.useContext(dg).strict}function Z5(a){const{drag:s,layout:l}=mi;if(!s&&!l)return{};const o={...s,...l};return{MeasureLayout:s?.isEnabled(a)||l?.isEnabled(a)?o.MeasureLayout:void 0,ProjectionNode:o.ProjectionNode}}function J5(a,s){if(typeof Proxy>"u")return pu;const l=new Map,o=(h,f)=>pu(h,f,a,s),d=(h,f)=>o(h,f);return new Proxy(d,{get:(h,f)=>f==="create"?o:(l.has(f)||l.set(f,pu(f,void 0,a,s)),l.get(f))})}function Ng({top:a,left:s,right:l,bottom:o}){return{x:{min:s,max:l},y:{min:a,max:o}}}function $5({x:a,y:s}){return{top:s.min,right:a.max,bottom:s.max,left:a.min}}function F5(a,s){if(!s)return a;const l=s({x:a.left,y:a.top}),o=s({x:a.right,y:a.bottom});return{top:l.y,left:l.x,bottom:o.y,right:o.x}}function mu(a){return a===void 0||a===1}function Lu({scale:a,scaleX:s,scaleY:l}){return!mu(a)||!mu(s)||!mu(l)}function va(a){return Lu(a)||wg(a)||a.z||a.rotate||a.rotateX||a.rotateY||a.skewX||a.skewY}function wg(a){return S0(a.x)||S0(a.y)}function S0(a){return a&&a!=="0%"}function Tr(a,s,l){const o=a-l,d=s*o;return l+d}function j0(a,s,l,o,d){return d!==void 0&&(a=Tr(a,d,o)),Tr(a,l,o)+s}function Bu(a,s=0,l=1,o,d){a.min=j0(a.min,s,l,o,d),a.max=j0(a.max,s,l,o,d)}function Mg(a,{x:s,y:l}){Bu(a.x,s.translate,s.scale,s.originPoint),Bu(a.y,l.translate,l.scale,l.originPoint)}const T0=.999999999999,N0=1.0000000000001;function P5(a,s,l,o=!1){const d=l.length;if(!d)return;s.x=s.y=1;let h,f;for(let m=0;m<d;m++){h=l[m],f=h.projectionDelta;const{visualElement:y}=h.options;y&&y.props.style&&y.props.style.display==="contents"||(o&&h.options.layoutScroll&&h.scroll&&h!==h.root&&di(a,{x:-h.scroll.offset.x,y:-h.scroll.offset.y}),f&&(s.x*=f.x.scale,s.y*=f.y.scale,Mg(a,f)),o&&va(h.latestValues)&&di(a,h.latestValues))}s.x<N0&&s.x>T0&&(s.x=1),s.y<N0&&s.y>T0&&(s.y=1)}function ui(a,s){a.min=a.min+s,a.max=a.max+s}function w0(a,s,l,o,d=.5){const h=Ue(a.min,a.max,d);Bu(a,s,l,h,o)}function di(a,s){w0(a.x,s.x,s.scaleX,s.scale,s.originX),w0(a.y,s.y,s.scaleY,s.scale,s.originY)}function Ag(a,s){return Ng(F5(a.getBoundingClientRect(),s))}function W5(a,s,l){const o=Ag(a,l),{scroll:d}=s;return d&&(ui(o.x,d.offset.x),ui(o.y,d.offset.y)),o}const M0=()=>({translate:0,scale:1,origin:0,originPoint:0}),fi=()=>({x:M0(),y:M0()}),A0=()=>({min:0,max:0}),Pe=()=>({x:A0(),y:A0()}),Hu={current:null},kg={current:!1};function I5(){if(kg.current=!0,!!Fu)if(window.matchMedia){const a=window.matchMedia("(prefers-reduced-motion)"),s=()=>Hu.current=a.matches;a.addEventListener("change",s),s()}else Hu.current=!1}const eS=new WeakMap;function tS(a,s,l){for(const o in s){const d=s[o],h=l[o];if(rt(d))a.addValue(o,d);else if(rt(h))a.addValue(o,pi(d,{owner:a}));else if(h!==d)if(a.hasValue(o)){const f=a.getValue(o);f.liveStyle===!0?f.jump(d):f.hasAnimated||f.set(d)}else{const f=a.getStaticValue(o);a.addValue(o,pi(f!==void 0?f:d,{owner:a}))}}for(const o in l)s[o]===void 0&&a.removeValue(o);return s}const k0=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class nS{scrapeMotionValuesFromProps(s,l,o){return{}}constructor({parent:s,props:l,presenceContext:o,reducedMotionConfig:d,blockInitialAnimation:h,visualState:f},m={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=fd,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const S=ut.now();this.renderScheduledAt<S&&(this.renderScheduledAt=S,Oe.render(this.render,!1,!0))};const{latestValues:y,renderState:g}=f;this.latestValues=y,this.baseTarget={...y},this.initialValues=l.initial?{...y}:{},this.renderState=g,this.parent=s,this.props=l,this.presenceContext=o,this.depth=s?s.depth+1:0,this.reducedMotionConfig=d,this.options=m,this.blockInitialAnimation=!!h,this.isControllingVariants=Er(l),this.isVariantNode=hg(l),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(s&&s.current);const{willChange:x,...b}=this.scrapeMotionValuesFromProps(l,{},this);for(const S in b){const w=b[S];y[S]!==void 0&&rt(w)&&w.set(y[S])}}mount(s){this.current=s,eS.set(s,this),this.projection&&!this.projection.instance&&this.projection.mount(s),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((l,o)=>this.bindToMotionValue(o,l)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(kg.current||I5(),this.shouldReduceMotion=Hu.current),this.parent?.addChild(this),this.update(this.props,this.presenceContext)}unmount(){this.projection&&this.projection.unmount(),Fn(this.notifyUpdate),Fn(this.render),this.valueSubscriptions.forEach(s=>s()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent?.removeChild(this);for(const s in this.events)this.events[s].clear();for(const s in this.features){const l=this.features[s];l&&(l.unmount(),l.isMounted=!1)}this.current=null}addChild(s){this.children.add(s),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(s)}removeChild(s){this.children.delete(s),this.enteringChildren&&this.enteringChildren.delete(s)}bindToMotionValue(s,l){this.valueSubscriptions.has(s)&&this.valueSubscriptions.get(s)();const o=Si.has(s);o&&this.onBindTransform&&this.onBindTransform();const d=l.on("change",f=>{this.latestValues[s]=f,this.props.onUpdate&&Oe.preRender(this.notifyUpdate),o&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let h;window.MotionCheckAppearSync&&(h=window.MotionCheckAppearSync(this,s,l)),this.valueSubscriptions.set(s,()=>{d(),h&&h(),l.owner&&l.stop()})}sortNodePosition(s){return!this.current||!this.sortInstanceNodePosition||this.type!==s.type?0:this.sortInstanceNodePosition(this.current,s.current)}updateFeatures(){let s="animation";for(s in mi){const l=mi[s];if(!l)continue;const{isEnabled:o,Feature:d}=l;if(!this.features[s]&&d&&o(this.props)&&(this.features[s]=new d(this)),this.features[s]){const h=this.features[s];h.isMounted?h.update():(h.mount(),h.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Pe()}getStaticValue(s){return this.latestValues[s]}setStaticValue(s,l){this.latestValues[s]=l}update(s,l){(s.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=s,this.prevPresenceContext=this.presenceContext,this.presenceContext=l;for(let o=0;o<k0.length;o++){const d=k0[o];this.propEventSubscriptions[d]&&(this.propEventSubscriptions[d](),delete this.propEventSubscriptions[d]);const h="on"+d,f=s[h];f&&(this.propEventSubscriptions[d]=this.on(d,f))}this.prevMotionValues=tS(this,this.scrapeMotionValuesFromProps(s,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(s){return this.props.variants?this.props.variants[s]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(s){const l=this.getClosestVariantNode();if(l)return l.variantChildren&&l.variantChildren.add(s),()=>l.variantChildren.delete(s)}addValue(s,l){const o=this.values.get(s);l!==o&&(o&&this.removeValue(s),this.bindToMotionValue(s,l),this.values.set(s,l),this.latestValues[s]=l.get())}removeValue(s){this.values.delete(s);const l=this.valueSubscriptions.get(s);l&&(l(),this.valueSubscriptions.delete(s)),delete this.latestValues[s],this.removeValueFromRenderState(s,this.renderState)}hasValue(s){return this.values.has(s)}getValue(s,l){if(this.props.values&&this.props.values[s])return this.props.values[s];let o=this.values.get(s);return o===void 0&&l!==void 0&&(o=pi(l===null?void 0:l,{owner:this}),this.addValue(s,o)),o}readValue(s,l){let o=this.latestValues[s]!==void 0||!this.current?this.latestValues[s]:this.getBaseTargetFromProps(this.props,s)??this.readValueFromInstance(this.current,s,this.options);return o!=null&&(typeof o=="string"&&(x1(o)||b1(o))?o=parseFloat(o):!c5(o)&&Pn.test(l)&&(o=ng(s,l)),this.setBaseTarget(s,rt(o)?o.get():o)),rt(o)?o.get():o}setBaseTarget(s,l){this.baseTarget[s]=l}getBaseTarget(s){const{initial:l}=this.props;let o;if(typeof l=="string"||typeof l=="object"){const h=Td(this.props,l,this.presenceContext?.custom);h&&(o=h[s])}if(l&&o!==void 0)return o;const d=this.getBaseTargetFromProps(this.props,s);return d!==void 0&&!rt(d)?d:this.initialValues[s]!==void 0&&o===void 0?void 0:this.baseTarget[s]}on(s,l){return this.events[s]||(this.events[s]=new td),this.events[s].add(l)}notify(s,...l){this.events[s]&&this.events[s].notify(...l)}scheduleRenderMicrotask(){md.render(this.render)}}class zg extends nS{constructor(){super(...arguments),this.KeyframeResolver=Wb}sortInstanceNodePosition(s,l){return s.compareDocumentPosition(l)&2?1:-1}getBaseTargetFromProps(s,l){return s.style?s.style[l]:void 0}removeValueFromRenderState(s,{vars:l,style:o}){delete l[s],delete o[s]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:s}=this.props;rt(s)&&(this.childSubscription=s.on("change",l=>{this.current&&(this.current.textContent=`${l}`)}))}}function Eg(a,{style:s,vars:l},o,d){const h=a.style;let f;for(f in s)h[f]=s[f];d?.applyProjectionStyles(h,o);for(f in l)h.setProperty(f,l[f])}function aS(a){return window.getComputedStyle(a)}class iS extends zg{constructor(){super(...arguments),this.type="html",this.renderInstance=Eg}readValueFromInstance(s,l){if(Si.has(l))return this.projection?.isProjecting?Eu(l):yb(s,l);{const o=aS(s),d=(R1(l)?o.getPropertyValue(l):o[l])||0;return typeof d=="string"?d.trim():d}}measureInstanceViewportBox(s,{transformPagePoint:l}){return Ag(s,l)}build(s,l,o){bd(s,l,o.transformTemplate)}scrapeMotionValuesFromProps(s,l,o){return Nd(s,l,o)}}const Cg=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function sS(a,s,l,o){Eg(a,s,void 0,o);for(const d in s.attrs)a.setAttribute(Cg.has(d)?d:wd(d),s.attrs[d])}class lS extends zg{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Pe}getBaseTargetFromProps(s,l){return s[l]}readValueFromInstance(s,l){if(Si.has(l)){const o=tg(l);return o&&o.default||0}return l=Cg.has(l)?l:wd(l),s.getAttribute(l)}scrapeMotionValuesFromProps(s,l,o){return bg(s,l,o)}build(s,l,o){gg(s,l,this.isSVGTag,o.transformTemplate,o.style)}renderInstance(s,l,o,d){sS(s,l,o,d)}mount(s){this.isSVGTag=xg(s.tagName),super.mount(s)}}const rS=(a,s)=>s.isSVG??jd(a)?new lS(s):new iS(s,{allowProjection:a!==D.Fragment});function hi(a,s,l){const o=a.getProps();return Td(o,s,l!==void 0?l:o.custom,a)}const qu=a=>Array.isArray(a);function oS(a,s,l){a.hasValue(s)?a.getValue(s).set(l):a.addValue(s,pi(l))}function cS(a){return qu(a)?a[a.length-1]||0:a}function uS(a,s){const l=hi(a,s);let{transitionEnd:o={},transition:d={},...h}=l||{};h={...h,...o};for(const f in h){const m=cS(h[f]);oS(a,f,m)}}function dS(a){return!!(rt(a)&&a.add)}function Yu(a,s){const l=a.getValue("willChange");if(dS(l))return l.add(s);if(!l&&Sn.WillChange){const o=new Sn.WillChange("auto");a.addValue("willChange",o),o.add(s)}}function Dg(a){return a.props[Sg]}const fS=a=>a!==null;function hS(a,{repeat:s,repeatType:l="loop"},o){const d=a.filter(fS),h=s&&l!=="loop"&&s%2===1?0:d.length-1;return d[h]}const pS={type:"spring",stiffness:500,damping:25,restSpeed:10},mS=a=>({type:"spring",stiffness:550,damping:a===0?2*Math.sqrt(550):30,restSpeed:10}),gS={type:"keyframes",duration:.8},yS={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},xS=(a,{keyframes:s})=>s.length>2?gS:Si.has(a)?a.startsWith("scale")?mS(s[1]):pS:yS;function vS({when:a,delay:s,delayChildren:l,staggerChildren:o,staggerDirection:d,repeat:h,repeatType:f,repeatDelay:m,from:y,elapsed:g,...x}){return!!Object.keys(x).length}const Md=(a,s,l,o={},d,h)=>f=>{const m=hd(o,a)||{},y=m.delay||o.delay||0;let{elapsed:g=0}=o;g=g-bn(y);const x={keyframes:Array.isArray(l)?l:[null,l],ease:"easeOut",velocity:s.getVelocity(),...m,delay:-g,onUpdate:S=>{s.set(S),m.onUpdate&&m.onUpdate(S)},onComplete:()=>{f(),m.onComplete&&m.onComplete()},name:a,motionValue:s,element:h?void 0:d};vS(m)||Object.assign(x,xS(a,x)),x.duration&&(x.duration=bn(x.duration)),x.repeatDelay&&(x.repeatDelay=bn(x.repeatDelay)),x.from!==void 0&&(x.keyframes[0]=x.from);let b=!1;if((x.type===!1||x.duration===0&&!x.repeatDelay)&&(Ou(x),x.delay===0&&(b=!0)),(Sn.instantAnimations||Sn.skipAnimations)&&(b=!0,Ou(x),x.delay=0),x.allowFlatten=!m.type&&!m.ease,b&&!h&&s.get()!==void 0){const S=hS(x.keyframes,m);if(S!==void 0){Oe.update(()=>{x.onUpdate(S),x.onComplete()});return}}return m.isSync?new dd(x):new Hb(x)};function bS({protectedKeys:a,needsAnimating:s},l){const o=a.hasOwnProperty(l)&&s[l]!==!0;return s[l]=!1,o}function _g(a,s,{delay:l=0,transitionOverride:o,type:d}={}){let{transition:h=a.getDefaultTransition(),transitionEnd:f,...m}=s;o&&(h=o);const y=[],g=d&&a.animationState&&a.animationState.getState()[d];for(const x in m){const b=a.getValue(x,a.latestValues[x]??null),S=m[x];if(S===void 0||g&&bS(g,x))continue;const w={delay:l,...hd(h||{},x)},_=b.get();if(_!==void 0&&!b.isAnimating&&!Array.isArray(S)&&S===_&&!w.velocity)continue;let H=!1;if(window.MotionHandoffAnimation){const G=Dg(a);if(G){const Z=window.MotionHandoffAnimation(G,x,Oe);Z!==null&&(w.startTime=Z,H=!0)}}Yu(a,x),b.start(Md(x,b,S,a.shouldReduceMotion&&W1.has(x)?{type:!1}:w,a,H));const K=b.animation;K&&y.push(K)}return f&&Promise.all(y).then(()=>{Oe.update(()=>{f&&uS(a,f)})}),y}function Rg(a,s,l,o=0,d=1){const h=Array.from(a).sort((g,x)=>g.sortNodePosition(x)).indexOf(s),f=a.size,m=(f-1)*o;return typeof l=="function"?l(h,f):d===1?h*o:m-h*o}function Gu(a,s,l={}){const o=hi(a,s,l.type==="exit"?a.presenceContext?.custom:void 0);let{transition:d=a.getDefaultTransition()||{}}=o||{};l.transitionOverride&&(d=l.transitionOverride);const h=o?()=>Promise.all(_g(a,o,l)):()=>Promise.resolve(),f=a.variantChildren&&a.variantChildren.size?(y=0)=>{const{delayChildren:g=0,staggerChildren:x,staggerDirection:b}=d;return SS(a,s,y,g,x,b,l)}:()=>Promise.resolve(),{when:m}=d;if(m){const[y,g]=m==="beforeChildren"?[h,f]:[f,h];return y().then(()=>g())}else return Promise.all([h(),f(l.delay)])}function SS(a,s,l=0,o=0,d=0,h=1,f){const m=[];for(const y of a.variantChildren)y.notify("AnimationStart",s),m.push(Gu(y,s,{...f,delay:l+(typeof o=="function"?0:o)+Rg(a.variantChildren,y,o,d,h)}).then(()=>y.notify("AnimationComplete",s)));return Promise.all(m)}function jS(a,s,l={}){a.notify("AnimationStart",s);let o;if(Array.isArray(s)){const d=s.map(h=>Gu(a,h,l));o=Promise.all(d)}else if(typeof s=="string")o=Gu(a,s,l);else{const d=typeof s=="function"?hi(a,s,l.custom):s;o=Promise.all(_g(a,d,l))}return o.then(()=>{a.notify("AnimationComplete",s)})}function Og(a,s){if(!Array.isArray(s))return!1;const l=s.length;if(l!==a.length)return!1;for(let o=0;o<l;o++)if(s[o]!==a[o])return!1;return!0}const TS=vd.length;function Vg(a){if(!a)return;if(!a.isControllingVariants){const l=a.parent?Vg(a.parent)||{}:{};return a.props.initial!==void 0&&(l.initial=a.props.initial),l}const s={};for(let l=0;l<TS;l++){const o=vd[l],d=a.props[o];(Rs(d)||d===!1)&&(s[o]=d)}return s}const NS=[...xd].reverse(),wS=xd.length;function MS(a){return s=>Promise.all(s.map(({animation:l,options:o})=>jS(a,l,o)))}function AS(a){let s=MS(a),l=z0(),o=!0;const d=y=>(g,x)=>{const b=hi(a,x,y==="exit"?a.presenceContext?.custom:void 0);if(b){const{transition:S,transitionEnd:w,..._}=b;g={...g,..._,...w}}return g};function h(y){s=y(a)}function f(y){const{props:g}=a,x=Vg(a.parent)||{},b=[],S=new Set;let w={},_=1/0;for(let K=0;K<wS;K++){const G=NS[K],Z=l[G],R=g[G]!==void 0?g[G]:x[G],V=Rs(R),J=G===y?Z.isActive:null;J===!1&&(_=K);let le=R===x[G]&&R!==g[G]&&V;if(le&&o&&a.manuallyAnimateOnMount&&(le=!1),Z.protectedKeys={...w},!Z.isActive&&J===null||!R&&!Z.prevProp||zr(R)||typeof R=="boolean")continue;const F=kS(Z.prevProp,R);let Y=F||G===y&&Z.isActive&&!le&&V||K>_&&V,ee=!1;const ce=Array.isArray(R)?R:[R];let pe=ce.reduce(d(G),{});J===!1&&(pe={});const{prevResolvedValues:je={}}=Z,$e={...je,...pe},te=X=>{Y=!0,S.has(X)&&(ee=!0,S.delete(X)),Z.needsAnimating[X]=!0;const P=a.getValue(X);P&&(P.liveStyle=!1)};for(const X in $e){const P=pe[X],ie=je[X];if(w.hasOwnProperty(X))continue;let se=!1;qu(P)&&qu(ie)?se=!Og(P,ie):se=P!==ie,se?P!=null?te(X):S.add(X):P!==void 0&&S.has(X)?te(X):Z.protectedKeys[X]=!0}Z.prevProp=R,Z.prevResolvedValues=pe,Z.isActive&&(w={...w,...pe}),o&&a.blockInitialAnimation&&(Y=!1);const de=le&&F;Y&&(!de||ee)&&b.push(...ce.map(X=>{const P={type:G};if(typeof X=="string"&&o&&!de&&a.manuallyAnimateOnMount&&a.parent){const{parent:ie}=a,se=hi(ie,X);if(ie.enteringChildren&&se){const{delayChildren:N}=se.transition||{};P.delay=Rg(ie.enteringChildren,a,N)}}return{animation:X,options:P}}))}if(S.size){const K={};if(typeof g.initial!="boolean"){const G=hi(a,Array.isArray(g.initial)?g.initial[0]:g.initial);G&&G.transition&&(K.transition=G.transition)}S.forEach(G=>{const Z=a.getBaseTarget(G),R=a.getValue(G);R&&(R.liveStyle=!0),K[G]=Z??null}),b.push({animation:K})}let H=!!b.length;return o&&(g.initial===!1||g.initial===g.animate)&&!a.manuallyAnimateOnMount&&(H=!1),o=!1,H?s(b):Promise.resolve()}function m(y,g){if(l[y].isActive===g)return Promise.resolve();a.variantChildren?.forEach(b=>b.animationState?.setActive(y,g)),l[y].isActive=g;const x=f(y);for(const b in l)l[b].protectedKeys={};return x}return{animateChanges:f,setActive:m,setAnimateFunction:h,getState:()=>l,reset:()=>{l=z0()}}}function kS(a,s){return typeof s=="string"?s!==a:Array.isArray(s)?!Og(s,a):!1}function xa(a=!1){return{isActive:a,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function z0(){return{animate:xa(!0),whileInView:xa(),whileHover:xa(),whileTap:xa(),whileDrag:xa(),whileFocus:xa(),exit:xa()}}class Wn{constructor(s){this.isMounted=!1,this.node=s}update(){}}class zS extends Wn{constructor(s){super(s),s.animationState||(s.animationState=AS(s))}updateAnimationControlsSubscription(){const{animate:s}=this.node.getProps();zr(s)&&(this.unmountControls=s.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:s}=this.node.getProps(),{animate:l}=this.node.prevProps||{};s!==l&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}}let ES=0;class CS extends Wn{constructor(){super(...arguments),this.id=ES++}update(){if(!this.node.presenceContext)return;const{isPresent:s,onExitComplete:l}=this.node.presenceContext,{isPresent:o}=this.node.prevPresenceContext||{};if(!this.node.animationState||s===o)return;const d=this.node.animationState.setActive("exit",!s);l&&!s&&d.then(()=>{l(this.id)})}mount(){const{register:s,onExitComplete:l}=this.node.presenceContext||{};l&&l(this.id),s&&(this.unmount=s(this.id))}unmount(){}}const DS={animation:{Feature:zS},exit:{Feature:CS}};function Os(a,s,l,o={passive:!0}){return a.addEventListener(s,l,o),()=>a.removeEventListener(s,l)}function Hs(a){return{point:{x:a.pageX,y:a.pageY}}}const _S=a=>s=>gd(s)&&a(s,Hs(s));function ks(a,s,l,o){return Os(a,s,_S(l),o)}const Ug=1e-4,RS=1-Ug,OS=1+Ug,Lg=.01,VS=0-Lg,US=0+Lg;function dt(a){return a.max-a.min}function LS(a,s,l){return Math.abs(a-s)<=l}function E0(a,s,l,o=.5){a.origin=o,a.originPoint=Ue(s.min,s.max,a.origin),a.scale=dt(l)/dt(s),a.translate=Ue(l.min,l.max,a.origin)-a.originPoint,(a.scale>=RS&&a.scale<=OS||isNaN(a.scale))&&(a.scale=1),(a.translate>=VS&&a.translate<=US||isNaN(a.translate))&&(a.translate=0)}function zs(a,s,l,o){E0(a.x,s.x,l.x,o?o.originX:void 0),E0(a.y,s.y,l.y,o?o.originY:void 0)}function C0(a,s,l){a.min=l.min+s.min,a.max=a.min+dt(s)}function BS(a,s,l){C0(a.x,s.x,l.x),C0(a.y,s.y,l.y)}function D0(a,s,l){a.min=s.min-l.min,a.max=a.min+dt(s)}function Nr(a,s,l){D0(a.x,s.x,l.x),D0(a.y,s.y,l.y)}function Bt(a){return[a("x"),a("y")]}const Bg=({current:a})=>a?a.ownerDocument.defaultView:null,_0=(a,s)=>Math.abs(a-s);function HS(a,s){const l=_0(a.x,s.x),o=_0(a.y,s.y);return Math.sqrt(l**2+o**2)}const R0=new Set(["auto","scroll"]);class Hg{constructor(s,l,{transformPagePoint:o,contextWindow:d=window,dragSnapToOrigin:h=!1,distanceThreshold:f=3,element:m}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=w=>{this.handleScroll(w.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const w=yu(this.lastMoveEventInfo,this.history),_=this.startEvent!==null,H=HS(w.offset,{x:0,y:0})>=this.distanceThreshold;if(!_&&!H)return;const{point:K}=w,{timestamp:G}=st;this.history.push({...K,timestamp:G});const{onStart:Z,onMove:R}=this.handlers;_||(Z&&Z(this.lastMoveEvent,w),this.startEvent=this.lastMoveEvent),R&&R(this.lastMoveEvent,w)},this.handlePointerMove=(w,_)=>{this.lastMoveEvent=w,this.lastMoveEventInfo=gu(_,this.transformPagePoint),Oe.update(this.updatePoint,!0)},this.handlePointerUp=(w,_)=>{this.end();const{onEnd:H,onSessionEnd:K,resumeAnimation:G}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&G&&G(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const Z=yu(w.type==="pointercancel"?this.lastMoveEventInfo:gu(_,this.transformPagePoint),this.history);this.startEvent&&H&&H(w,Z),K&&K(w,Z)},!gd(s))return;this.dragSnapToOrigin=h,this.handlers=l,this.transformPagePoint=o,this.distanceThreshold=f,this.contextWindow=d||window;const y=Hs(s),g=gu(y,this.transformPagePoint),{point:x}=g,{timestamp:b}=st;this.history=[{...x,timestamp:b}];const{onSessionStart:S}=l;S&&S(s,yu(g,this.history)),this.removeListeners=Us(ks(this.contextWindow,"pointermove",this.handlePointerMove),ks(this.contextWindow,"pointerup",this.handlePointerUp),ks(this.contextWindow,"pointercancel",this.handlePointerUp)),m&&this.startScrollTracking(m)}startScrollTracking(s){let l=s.parentElement;for(;l;){const o=getComputedStyle(l);(R0.has(o.overflowX)||R0.has(o.overflowY))&&this.scrollPositions.set(l,{x:l.scrollLeft,y:l.scrollTop}),l=l.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0,passive:!0}),window.addEventListener("scroll",this.onWindowScroll,{passive:!0}),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(s){const l=this.scrollPositions.get(s);if(!l)return;const o=s===window,d=o?{x:window.scrollX,y:window.scrollY}:{x:s.scrollLeft,y:s.scrollTop},h={x:d.x-l.x,y:d.y-l.y};h.x===0&&h.y===0||(o?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=h.x,this.lastMoveEventInfo.point.y+=h.y):this.history.length>0&&(this.history[0].x-=h.x,this.history[0].y-=h.y),this.scrollPositions.set(s,d),Oe.update(this.updatePoint,!0))}updateHandlers(s){this.handlers=s}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),Fn(this.updatePoint)}}function gu(a,s){return s?{point:s(a.point)}:a}function O0(a,s){return{x:a.x-s.x,y:a.y-s.y}}function yu({point:a},s){return{point:a,delta:O0(a,qg(s)),offset:O0(a,qS(s)),velocity:YS(s,.1)}}function qS(a){return a[0]}function qg(a){return a[a.length-1]}function YS(a,s){if(a.length<2)return{x:0,y:0};let l=a.length-1,o=null;const d=qg(a);for(;l>=0&&(o=a[l],!(d.timestamp-o.timestamp>bn(s)));)l--;if(!o)return{x:0,y:0};const h=Ht(d.timestamp-o.timestamp);if(h===0)return{x:0,y:0};const f={x:(d.x-o.x)/h,y:(d.y-o.y)/h};return f.x===1/0&&(f.x=0),f.y===1/0&&(f.y=0),f}function GS(a,{min:s,max:l},o){return s!==void 0&&a<s?a=o?Ue(s,a,o.min):Math.max(a,s):l!==void 0&&a>l&&(a=o?Ue(l,a,o.max):Math.min(a,l)),a}function V0(a,s,l){return{min:s!==void 0?a.min+s:void 0,max:l!==void 0?a.max+l-(a.max-a.min):void 0}}function XS(a,{top:s,left:l,bottom:o,right:d}){return{x:V0(a.x,l,d),y:V0(a.y,s,o)}}function U0(a,s){let l=s.min-a.min,o=s.max-a.max;return s.max-s.min<a.max-a.min&&([l,o]=[o,l]),{min:l,max:o}}function KS(a,s){return{x:U0(a.x,s.x),y:U0(a.y,s.y)}}function QS(a,s){let l=.5;const o=dt(a),d=dt(s);return d>o?l=Cs(s.min,s.max-o,a.min):o>d&&(l=Cs(a.min,a.max-d,s.min)),en(0,1,l)}function ZS(a,s){const l={};return s.min!==void 0&&(l.min=s.min-a.min),s.max!==void 0&&(l.max=s.max-a.min),l}const Xu=.35;function JS(a=Xu){return a===!1?a=0:a===!0&&(a=Xu),{x:L0(a,"left","right"),y:L0(a,"top","bottom")}}function L0(a,s,l){return{min:B0(a,s),max:B0(a,l)}}function B0(a,s){return typeof a=="number"?a:a[s]||0}const $S=new WeakMap;class FS{constructor(s){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Pe(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=s}start(s,{snapToCursor:l=!1,distanceThreshold:o}={}){const{presenceContext:d}=this.visualElement;if(d&&d.isPresent===!1)return;const h=b=>{l?(this.stopAnimation(),this.snapToCursor(Hs(b).point)):this.pauseAnimation()},f=(b,S)=>{this.stopAnimation();const{drag:w,dragPropagation:_,onDragStart:H}=this.getProps();if(w&&!_&&(this.openDragLock&&this.openDragLock(),this.openDragLock=n5(w),!this.openDragLock))return;this.latestPointerEvent=b,this.latestPanInfo=S,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Bt(G=>{let Z=this.getAxisMotionValue(G).get()||0;if(It.test(Z)){const{projection:R}=this.visualElement;if(R&&R.layout){const V=R.layout.layoutBox[G];V&&(Z=dt(V)*(parseFloat(Z)/100))}}this.originPoint[G]=Z}),H&&Oe.postRender(()=>H(b,S)),Yu(this.visualElement,"transform");const{animationState:K}=this.visualElement;K&&K.setActive("whileDrag",!0)},m=(b,S)=>{this.latestPointerEvent=b,this.latestPanInfo=S;const{dragPropagation:w,dragDirectionLock:_,onDirectionLock:H,onDrag:K}=this.getProps();if(!w&&!this.openDragLock)return;const{offset:G}=S;if(_&&this.currentDirection===null){this.currentDirection=PS(G),this.currentDirection!==null&&H&&H(this.currentDirection);return}this.updateAxis("x",S.point,G),this.updateAxis("y",S.point,G),this.visualElement.render(),K&&K(b,S)},y=(b,S)=>{this.latestPointerEvent=b,this.latestPanInfo=S,this.stop(b,S),this.latestPointerEvent=null,this.latestPanInfo=null},g=()=>Bt(b=>this.getAnimationState(b)==="paused"&&this.getAxisMotionValue(b).animation?.play()),{dragSnapToOrigin:x}=this.getProps();this.panSession=new Hg(s,{onSessionStart:h,onStart:f,onMove:m,onSessionEnd:y,resumeAnimation:g},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:x,distanceThreshold:o,contextWindow:Bg(this.visualElement),element:this.visualElement.current})}stop(s,l){const o=s||this.latestPointerEvent,d=l||this.latestPanInfo,h=this.isDragging;if(this.cancel(),!h||!d||!o)return;const{velocity:f}=d;this.startAnimation(f);const{onDragEnd:m}=this.getProps();m&&Oe.postRender(()=>m(o,d))}cancel(){this.isDragging=!1;const{projection:s,animationState:l}=this.visualElement;s&&(s.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:o}=this.getProps();!o&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),l&&l.setActive("whileDrag",!1)}updateAxis(s,l,o){const{drag:d}=this.getProps();if(!o||!dr(s,d,this.currentDirection))return;const h=this.getAxisMotionValue(s);let f=this.originPoint[s]+o[s];this.constraints&&this.constraints[s]&&(f=GS(f,this.constraints[s],this.elastic[s])),h.set(f)}resolveConstraints(){const{dragConstraints:s,dragElastic:l}=this.getProps(),o=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,d=this.constraints;s&&ws(s)?this.constraints||(this.constraints=this.resolveRefConstraints()):s&&o?this.constraints=XS(o.layoutBox,s):this.constraints=!1,this.elastic=JS(l),d!==this.constraints&&o&&this.constraints&&!this.hasMutatedConstraints&&Bt(h=>{this.constraints!==!1&&this.getAxisMotionValue(h)&&(this.constraints[h]=ZS(o.layoutBox[h],this.constraints[h]))})}resolveRefConstraints(){const{dragConstraints:s,onMeasureDragConstraints:l}=this.getProps();if(!s||!ws(s))return!1;const o=s.current,{projection:d}=this.visualElement;if(!d||!d.layout)return!1;const h=W5(o,d.root,this.visualElement.getTransformPagePoint());let f=KS(d.layout.layoutBox,h);if(l){const m=l($5(f));this.hasMutatedConstraints=!!m,m&&(f=Ng(m))}return f}startAnimation(s){const{drag:l,dragMomentum:o,dragElastic:d,dragTransition:h,dragSnapToOrigin:f,onDragTransitionEnd:m}=this.getProps(),y=this.constraints||{},g=Bt(x=>{if(!dr(x,l,this.currentDirection))return;let b=y&&y[x]||{};f&&(b={min:0,max:0});const S=d?200:1e6,w=d?40:1e7,_={type:"inertia",velocity:o?s[x]:0,bounceStiffness:S,bounceDamping:w,timeConstant:750,restDelta:1,restSpeed:10,...h,...b};return this.startAxisValueAnimation(x,_)});return Promise.all(g).then(m)}startAxisValueAnimation(s,l){const o=this.getAxisMotionValue(s);return Yu(this.visualElement,s),o.start(Md(s,o,0,l,this.visualElement,!1))}stopAnimation(){Bt(s=>this.getAxisMotionValue(s).stop())}pauseAnimation(){Bt(s=>this.getAxisMotionValue(s).animation?.pause())}getAnimationState(s){return this.getAxisMotionValue(s).animation?.state}getAxisMotionValue(s){const l=`_drag${s.toUpperCase()}`,o=this.visualElement.getProps(),d=o[l];return d||this.visualElement.getValue(s,(o.initial?o.initial[s]:void 0)||0)}snapToCursor(s){Bt(l=>{const{drag:o}=this.getProps();if(!dr(l,o,this.currentDirection))return;const{projection:d}=this.visualElement,h=this.getAxisMotionValue(l);if(d&&d.layout){const{min:f,max:m}=d.layout.layoutBox[l],y=h.get()||0;h.set(s[l]-Ue(f,m,.5)+y)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:s,dragConstraints:l}=this.getProps(),{projection:o}=this.visualElement;if(!ws(l)||!o||!this.constraints)return;this.stopAnimation();const d={x:0,y:0};Bt(f=>{const m=this.getAxisMotionValue(f);if(m&&this.constraints!==!1){const y=m.get();d[f]=QS({min:y,max:y},this.constraints[f])}});const{transformTemplate:h}=this.visualElement.getProps();this.visualElement.current.style.transform=h?h({},""):"none",o.root&&o.root.updateScroll(),o.updateLayout(),this.resolveConstraints(),Bt(f=>{if(!dr(f,s,null))return;const m=this.getAxisMotionValue(f),{min:y,max:g}=this.constraints[f];m.set(Ue(y,g,d[f]))})}addListeners(){if(!this.visualElement.current)return;$S.set(this.visualElement,this);const s=this.visualElement.current,l=ks(s,"pointerdown",y=>{const{drag:g,dragListener:x=!0}=this.getProps();g&&x&&!og(y.target)&&this.start(y)}),o=()=>{const{dragConstraints:y}=this.getProps();ws(y)&&y.current&&(this.constraints=this.resolveRefConstraints())},{projection:d}=this.visualElement,h=d.addEventListener("measure",o);d&&!d.layout&&(d.root&&d.root.updateScroll(),d.updateLayout()),Oe.read(o);const f=Os(window,"resize",()=>this.scalePositionWithinConstraints()),m=d.addEventListener("didUpdate",(({delta:y,hasLayoutChanged:g})=>{this.isDragging&&g&&(Bt(x=>{const b=this.getAxisMotionValue(x);b&&(this.originPoint[x]+=y[x].translate,b.set(b.get()+y[x].translate))}),this.visualElement.render())}));return()=>{f(),l(),h(),m&&m()}}getProps(){const s=this.visualElement.getProps(),{drag:l=!1,dragDirectionLock:o=!1,dragPropagation:d=!1,dragConstraints:h=!1,dragElastic:f=Xu,dragMomentum:m=!0}=s;return{...s,drag:l,dragDirectionLock:o,dragPropagation:d,dragConstraints:h,dragElastic:f,dragMomentum:m}}}function dr(a,s,l){return(s===!0||s===a)&&(l===null||l===a)}function PS(a,s=10){let l=null;return Math.abs(a.y)>s?l="y":Math.abs(a.x)>s&&(l="x"),l}class WS extends Wn{constructor(s){super(s),this.removeGroupControls=qt,this.removeListeners=qt,this.controls=new FS(s)}mount(){const{dragControls:s}=this.node.getProps();s&&(this.removeGroupControls=s.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||qt}update(){const{dragControls:s}=this.node.getProps(),{dragControls:l}=this.node.prevProps||{};s!==l&&(this.removeGroupControls(),s&&(this.removeGroupControls=s.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners()}}const H0=a=>(s,l)=>{a&&Oe.postRender(()=>a(s,l))};class IS extends Wn{constructor(){super(...arguments),this.removePointerDownListener=qt}onPointerDown(s){this.session=new Hg(s,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Bg(this.node)})}createPanHandlers(){const{onPanSessionStart:s,onPanStart:l,onPan:o,onPanEnd:d}=this.node.getProps();return{onSessionStart:H0(s),onStart:H0(l),onMove:o,onEnd:(h,f)=>{delete this.session,d&&Oe.postRender(()=>d(h,f))}}}mount(){this.removePointerDownListener=ks(this.node.current,"pointerdown",s=>this.onPointerDown(s))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const yr={hasAnimatedSinceResize:!0,hasEverUpdated:!1};let xu=!1;class e3 extends D.Component{componentDidMount(){const{visualElement:s,layoutGroup:l,switchLayoutGroup:o,layoutId:d}=this.props,{projection:h}=s;h&&(l.group&&l.group.add(h),o&&o.register&&d&&o.register(h),xu&&h.root.didUpdate(),h.addEventListener("animationComplete",()=>{this.safeToRemove()}),h.setOptions({...h.options,onExitComplete:()=>this.safeToRemove()})),yr.hasEverUpdated=!0}getSnapshotBeforeUpdate(s){const{layoutDependency:l,visualElement:o,drag:d,isPresent:h}=this.props,{projection:f}=o;return f&&(f.isPresent=h,xu=!0,d||s.layoutDependency!==l||l===void 0||s.isPresent!==h?f.willUpdate():this.safeToRemove(),s.isPresent!==h&&(h?f.promote():f.relegate()||Oe.postRender(()=>{const m=f.getStack();(!m||!m.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:s}=this.props.visualElement;s&&(s.root.didUpdate(),md.postRender(()=>{!s.currentAnimation&&s.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:s,layoutGroup:l,switchLayoutGroup:o}=this.props,{projection:d}=s;xu=!0,d&&(d.scheduleCheckAfterUnmount(),l&&l.group&&l.group.remove(d),o&&o.deregister&&o.deregister(d))}safeToRemove(){const{safeToRemove:s}=this.props;s&&s()}render(){return null}}function Yg(a){const[s,l]=ug(),o=D.useContext(Ju);return u.jsx(e3,{...a,layoutGroup:o,switchLayoutGroup:D.useContext(jg),isPresent:s,safeToRemove:l})}function t3(a,s,l){const o=rt(a)?a:pi(a);return o.start(Md("",o,s,l)),o.animation}const n3=(a,s)=>a.depth-s.depth;class a3{constructor(){this.children=[],this.isDirty=!1}add(s){Pu(this.children,s),this.isDirty=!0}remove(s){Wu(this.children,s),this.isDirty=!0}forEach(s){this.isDirty&&this.children.sort(n3),this.isDirty=!1,this.children.forEach(s)}}function i3(a,s){const l=ut.now(),o=({timestamp:d})=>{const h=d-l;h>=s&&(Fn(o),a(h-s))};return Oe.setup(o,!0),()=>Fn(o)}const Gg=["TopLeft","TopRight","BottomLeft","BottomRight"],s3=Gg.length,q0=a=>typeof a=="string"?parseFloat(a):a,Y0=a=>typeof a=="number"||W.test(a);function l3(a,s,l,o,d,h){d?(a.opacity=Ue(0,l.opacity??1,r3(o)),a.opacityExit=Ue(s.opacity??1,0,o3(o))):h&&(a.opacity=Ue(s.opacity??1,l.opacity??1,o));for(let f=0;f<s3;f++){const m=`border${Gg[f]}Radius`;let y=G0(s,m),g=G0(l,m);if(y===void 0&&g===void 0)continue;y||(y=0),g||(g=0),y===0||g===0||Y0(y)===Y0(g)?(a[m]=Math.max(Ue(q0(y),q0(g),o),0),(It.test(g)||It.test(y))&&(a[m]+="%")):a[m]=g}(s.rotate||l.rotate)&&(a.rotate=Ue(s.rotate||0,l.rotate||0,o))}function G0(a,s){return a[s]!==void 0?a[s]:a.borderRadius}const r3=Xg(0,.5,k1),o3=Xg(.5,.95,qt);function Xg(a,s,l){return o=>o<a?0:o>s?1:l(Cs(a,s,o))}function X0(a,s){a.min=s.min,a.max=s.max}function Kt(a,s){X0(a.x,s.x),X0(a.y,s.y)}function K0(a,s){a.translate=s.translate,a.scale=s.scale,a.originPoint=s.originPoint,a.origin=s.origin}function Q0(a,s,l,o,d){return a-=s,a=Tr(a,1/l,o),d!==void 0&&(a=Tr(a,1/d,o)),a}function c3(a,s=0,l=1,o=.5,d,h=a,f=a){if(It.test(s)&&(s=parseFloat(s),s=Ue(f.min,f.max,s/100)-f.min),typeof s!="number")return;let m=Ue(h.min,h.max,o);a===h&&(m-=s),a.min=Q0(a.min,s,l,m,d),a.max=Q0(a.max,s,l,m,d)}function Z0(a,s,[l,o,d],h,f){c3(a,s[l],s[o],s[d],s.scale,h,f)}const u3=["x","scaleX","originX"],d3=["y","scaleY","originY"];function J0(a,s,l,o){Z0(a.x,s,u3,l?l.x:void 0,o?o.x:void 0),Z0(a.y,s,d3,l?l.y:void 0,o?o.y:void 0)}function $0(a){return a.translate===0&&a.scale===1}function Kg(a){return $0(a.x)&&$0(a.y)}function F0(a,s){return a.min===s.min&&a.max===s.max}function f3(a,s){return F0(a.x,s.x)&&F0(a.y,s.y)}function P0(a,s){return Math.round(a.min)===Math.round(s.min)&&Math.round(a.max)===Math.round(s.max)}function Qg(a,s){return P0(a.x,s.x)&&P0(a.y,s.y)}function W0(a){return dt(a.x)/dt(a.y)}function I0(a,s){return a.translate===s.translate&&a.scale===s.scale&&a.originPoint===s.originPoint}class h3{constructor(){this.members=[]}add(s){Pu(this.members,s),s.scheduleRender()}remove(s){if(Wu(this.members,s),s===this.prevLead&&(this.prevLead=void 0),s===this.lead){const l=this.members[this.members.length-1];l&&this.promote(l)}}relegate(s){const l=this.members.findIndex(d=>s===d);if(l===0)return!1;let o;for(let d=l;d>=0;d--){const h=this.members[d];if(h.isPresent!==!1){o=h;break}}return o?(this.promote(o),!0):!1}promote(s,l){const o=this.lead;if(s!==o&&(this.prevLead=o,this.lead=s,s.show(),o)){o.instance&&o.scheduleRender(),s.scheduleRender(),s.resumeFrom=o,l&&(s.resumeFrom.preserveOpacity=!0),o.snapshot&&(s.snapshot=o.snapshot,s.snapshot.latestValues=o.animationValues||o.latestValues),s.root&&s.root.isUpdating&&(s.isLayoutDirty=!0);const{crossfade:d}=s.options;d===!1&&o.hide()}}exitAnimationComplete(){this.members.forEach(s=>{const{options:l,resumingFrom:o}=s;l.onExitComplete&&l.onExitComplete(),o&&o.options.onExitComplete&&o.options.onExitComplete()})}scheduleRender(){this.members.forEach(s=>{s.instance&&s.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function p3(a,s,l){let o="";const d=a.x.translate/s.x,h=a.y.translate/s.y,f=l?.z||0;if((d||h||f)&&(o=`translate3d(${d}px, ${h}px, ${f}px) `),(s.x!==1||s.y!==1)&&(o+=`scale(${1/s.x}, ${1/s.y}) `),l){const{transformPerspective:g,rotate:x,rotateX:b,rotateY:S,skewX:w,skewY:_}=l;g&&(o=`perspective(${g}px) ${o}`),x&&(o+=`rotate(${x}deg) `),b&&(o+=`rotateX(${b}deg) `),S&&(o+=`rotateY(${S}deg) `),w&&(o+=`skewX(${w}deg) `),_&&(o+=`skewY(${_}deg) `)}const m=a.x.scale*s.x,y=a.y.scale*s.y;return(m!==1||y!==1)&&(o+=`scale(${m}, ${y})`),o||"none"}const vu=["","X","Y","Z"],m3=1e3;let g3=0;function bu(a,s,l,o){const{latestValues:d}=s;d[a]&&(l[a]=d[a],s.setStaticValue(a,0),o&&(o[a]=0))}function Zg(a){if(a.hasCheckedOptimisedAppear=!0,a.root===a)return;const{visualElement:s}=a.options;if(!s)return;const l=Dg(s);if(window.MotionHasOptimisedAnimation(l,"transform")){const{layout:d,layoutId:h}=a.options;window.MotionCancelOptimisedAnimation(l,"transform",Oe,!(d||h))}const{parent:o}=a;o&&!o.hasCheckedOptimisedAppear&&Zg(o)}function Jg({attachResizeListener:a,defaultParent:s,measureScroll:l,checkIsScrollRoot:o,resetTransform:d}){return class{constructor(f={},m=s?.()){this.id=g3++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(v3),this.nodes.forEach(T3),this.nodes.forEach(N3),this.nodes.forEach(b3)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=f,this.root=m?m.root||m:this,this.path=m?[...m.path,m]:[],this.parent=m,this.depth=m?m.depth+1:0;for(let y=0;y<this.path.length;y++)this.path[y].shouldResetTransform=!0;this.root===this&&(this.nodes=new a3)}addEventListener(f,m){return this.eventHandlers.has(f)||this.eventHandlers.set(f,new td),this.eventHandlers.get(f).add(m)}notifyListeners(f,...m){const y=this.eventHandlers.get(f);y&&y.notify(...m)}hasListeners(f){return this.eventHandlers.has(f)}mount(f){if(this.instance)return;this.isSVG=cg(f)&&!r5(f),this.instance=f;const{layoutId:m,layout:y,visualElement:g}=this.options;if(g&&!g.current&&g.mount(f),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(y||m)&&(this.isLayoutDirty=!0),a){let x,b=0;const S=()=>this.root.updateBlockedByResize=!1;Oe.read(()=>{b=window.innerWidth}),a(f,()=>{const w=window.innerWidth;w!==b&&(b=w,this.root.updateBlockedByResize=!0,x&&x(),x=i3(S,250),yr.hasAnimatedSinceResize&&(yr.hasAnimatedSinceResize=!1,this.nodes.forEach(n1)))})}m&&this.root.registerSharedNode(m,this),this.options.animate!==!1&&g&&(m||y)&&this.addEventListener("didUpdate",({delta:x,hasLayoutChanged:b,hasRelativeLayoutChanged:S,layout:w})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const _=this.options.transition||g.getDefaultTransition()||z3,{onLayoutAnimationStart:H,onLayoutAnimationComplete:K}=g.getProps(),G=!this.targetLayout||!Qg(this.targetLayout,w),Z=!b&&S;if(this.options.layoutRoot||this.resumeFrom||Z||b&&(G||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const R={...hd(_,"layout"),onPlay:H,onComplete:K};(g.shouldReduceMotion||this.options.layoutRoot)&&(R.delay=0,R.type=!1),this.startAnimation(R),this.setAnimationOrigin(x,Z)}else b||n1(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=w})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const f=this.getStack();f&&f.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Fn(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(w3),this.animationId++)}getTransformTemplate(){const{visualElement:f}=this.options;return f&&f.getProps().transformTemplate}willUpdate(f=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Zg(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let x=0;x<this.path.length;x++){const b=this.path[x];b.shouldResetTransform=!0,b.updateScroll("snapshot"),b.options.layoutRoot&&b.willUpdate(!1)}const{layoutId:m,layout:y}=this.options;if(m===void 0&&!y)return;const g=this.getTransformTemplate();this.prevTransformTemplateValue=g?g(this.latestValues,""):void 0,this.updateSnapshot(),f&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(e1);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(t1);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(j3),this.nodes.forEach(y3),this.nodes.forEach(x3)):this.nodes.forEach(t1),this.clearAllSnapshots();const m=ut.now();st.delta=en(0,1e3/60,m-st.timestamp),st.timestamp=m,st.isProcessing=!0,ru.update.process(st),ru.preRender.process(st),ru.render.process(st),st.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,md.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(S3),this.sharedNodes.forEach(M3)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Oe.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Oe.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!dt(this.snapshot.measuredBox.x)&&!dt(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let y=0;y<this.path.length;y++)this.path[y].updateScroll();const f=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected=Pe(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:m}=this.options;m&&m.notify("LayoutMeasure",this.layout.layoutBox,f?f.layoutBox:void 0)}updateScroll(f="measure"){let m=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===f&&(m=!1),m&&this.instance){const y=o(this.instance);this.scroll={animationId:this.root.animationId,phase:f,isRoot:y,offset:l(this.instance),wasRoot:this.scroll?this.scroll.isRoot:y}}}resetTransform(){if(!d)return;const f=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,m=this.projectionDelta&&!Kg(this.projectionDelta),y=this.getTransformTemplate(),g=y?y(this.latestValues,""):void 0,x=g!==this.prevTransformTemplateValue;f&&this.instance&&(m||va(this.latestValues)||x)&&(d(this.instance,g),this.shouldResetTransform=!1,this.scheduleRender())}measure(f=!0){const m=this.measurePageBox();let y=this.removeElementScroll(m);return f&&(y=this.removeTransform(y)),E3(y),{animationId:this.root.animationId,measuredBox:m,layoutBox:y,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:f}=this.options;if(!f)return Pe();const m=f.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(C3))){const{scroll:g}=this.root;g&&(ui(m.x,g.offset.x),ui(m.y,g.offset.y))}return m}removeElementScroll(f){const m=Pe();if(Kt(m,f),this.scroll?.wasRoot)return m;for(let y=0;y<this.path.length;y++){const g=this.path[y],{scroll:x,options:b}=g;g!==this.root&&x&&b.layoutScroll&&(x.wasRoot&&Kt(m,f),ui(m.x,x.offset.x),ui(m.y,x.offset.y))}return m}applyTransform(f,m=!1){const y=Pe();Kt(y,f);for(let g=0;g<this.path.length;g++){const x=this.path[g];!m&&x.options.layoutScroll&&x.scroll&&x!==x.root&&di(y,{x:-x.scroll.offset.x,y:-x.scroll.offset.y}),va(x.latestValues)&&di(y,x.latestValues)}return va(this.latestValues)&&di(y,this.latestValues),y}removeTransform(f){const m=Pe();Kt(m,f);for(let y=0;y<this.path.length;y++){const g=this.path[y];if(!g.instance||!va(g.latestValues))continue;Lu(g.latestValues)&&g.updateSnapshot();const x=Pe(),b=g.measurePageBox();Kt(x,b),J0(m,g.latestValues,g.snapshot?g.snapshot.layoutBox:void 0,x)}return va(this.latestValues)&&J0(m,this.latestValues),m}setTargetDelta(f){this.targetDelta=f,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(f){this.options={...this.options,...f,crossfade:f.crossfade!==void 0?f.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==st.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(f=!1){const m=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=m.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=m.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=m.isSharedProjectionDirty);const y=!!this.resumingFrom||this!==m;if(!(f||y&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:x,layoutId:b}=this.options;if(!this.layout||!(x||b))return;this.resolvedRelativeTargetAt=st.timestamp;const S=this.getClosestProjectingParent();S&&this.linkedParentVersion!==S.layoutVersion&&!S.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(S&&S.layout?this.createRelativeTarget(S,this.layout.layoutBox,S.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=Pe(),this.targetWithTransforms=Pe()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),BS(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Kt(this.target,this.layout.layoutBox),Mg(this.target,this.targetDelta)):Kt(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,S&&!!S.resumingFrom==!!this.resumingFrom&&!S.options.layoutScroll&&S.target&&this.animationProgress!==1?this.createRelativeTarget(S,this.target,S.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||Lu(this.parent.latestValues)||wg(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(f,m,y){this.relativeParent=f,this.linkedParentVersion=f.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Pe(),this.relativeTargetOrigin=Pe(),Nr(this.relativeTargetOrigin,m,y),Kt(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){const f=this.getLead(),m=!!this.resumingFrom||this!==f;let y=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(y=!1),m&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(y=!1),this.resolvedRelativeTargetAt===st.timestamp&&(y=!1),y)return;const{layout:g,layoutId:x}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(g||x))return;Kt(this.layoutCorrected,this.layout.layoutBox);const b=this.treeScale.x,S=this.treeScale.y;P5(this.layoutCorrected,this.treeScale,this.path,m),f.layout&&!f.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(f.target=f.layout.layoutBox,f.targetWithTransforms=Pe());const{target:w}=f;if(!w){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(K0(this.prevProjectionDelta.x,this.projectionDelta.x),K0(this.prevProjectionDelta.y,this.projectionDelta.y)),zs(this.projectionDelta,this.layoutCorrected,w,this.latestValues),(this.treeScale.x!==b||this.treeScale.y!==S||!I0(this.projectionDelta.x,this.prevProjectionDelta.x)||!I0(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",w))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(f=!0){if(this.options.visualElement?.scheduleRender(),f){const m=this.getStack();m&&m.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=fi(),this.projectionDelta=fi(),this.projectionDeltaWithTransform=fi()}setAnimationOrigin(f,m=!1){const y=this.snapshot,g=y?y.latestValues:{},x={...this.latestValues},b=fi();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!m;const S=Pe(),w=y?y.source:void 0,_=this.layout?this.layout.source:void 0,H=w!==_,K=this.getStack(),G=!K||K.members.length<=1,Z=!!(H&&!G&&this.options.crossfade===!0&&!this.path.some(k3));this.animationProgress=0;let R;this.mixTargetDelta=V=>{const J=V/1e3;a1(b.x,f.x,J),a1(b.y,f.y,J),this.setTargetDelta(b),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Nr(S,this.layout.layoutBox,this.relativeParent.layout.layoutBox),A3(this.relativeTarget,this.relativeTargetOrigin,S,J),R&&f3(this.relativeTarget,R)&&(this.isProjectionDirty=!1),R||(R=Pe()),Kt(R,this.relativeTarget)),H&&(this.animationValues=x,l3(x,g,this.latestValues,J,Z,G)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=J},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(f){this.notifyListeners("animationStart"),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&(Fn(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Oe.update(()=>{yr.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=pi(0)),this.currentAnimation=t3(this.motionValue,[0,1e3],{...f,velocity:0,isSync:!0,onUpdate:m=>{this.mixTargetDelta(m),f.onUpdate&&f.onUpdate(m)},onStop:()=>{},onComplete:()=>{f.onComplete&&f.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const f=this.getStack();f&&f.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(m3),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const f=this.getLead();let{targetWithTransforms:m,target:y,layout:g,latestValues:x}=f;if(!(!m||!y||!g)){if(this!==f&&this.layout&&g&&$g(this.options.animationType,this.layout.layoutBox,g.layoutBox)){y=this.target||Pe();const b=dt(this.layout.layoutBox.x);y.x.min=f.target.x.min,y.x.max=y.x.min+b;const S=dt(this.layout.layoutBox.y);y.y.min=f.target.y.min,y.y.max=y.y.min+S}Kt(m,y),di(m,x),zs(this.projectionDeltaWithTransform,this.layoutCorrected,m,x)}}registerSharedNode(f,m){this.sharedNodes.has(f)||this.sharedNodes.set(f,new h3),this.sharedNodes.get(f).add(m);const g=m.options.initialPromotionConfig;m.promote({transition:g?g.transition:void 0,preserveFollowOpacity:g&&g.shouldPreserveFollowOpacity?g.shouldPreserveFollowOpacity(m):void 0})}isLead(){const f=this.getStack();return f?f.lead===this:!0}getLead(){const{layoutId:f}=this.options;return f?this.getStack()?.lead||this:this}getPrevLead(){const{layoutId:f}=this.options;return f?this.getStack()?.prevLead:void 0}getStack(){const{layoutId:f}=this.options;if(f)return this.root.sharedNodes.get(f)}promote({needsReset:f,transition:m,preserveFollowOpacity:y}={}){const g=this.getStack();g&&g.promote(this,y),f&&(this.projectionDelta=void 0,this.needsReset=!0),m&&this.setOptions({transition:m})}relegate(){const f=this.getStack();return f?f.relegate(this):!1}resetSkewAndRotation(){const{visualElement:f}=this.options;if(!f)return;let m=!1;const{latestValues:y}=f;if((y.z||y.rotate||y.rotateX||y.rotateY||y.rotateZ||y.skewX||y.skewY)&&(m=!0),!m)return;const g={};y.z&&bu("z",f,g,this.animationValues);for(let x=0;x<vu.length;x++)bu(`rotate${vu[x]}`,f,g,this.animationValues),bu(`skew${vu[x]}`,f,g,this.animationValues);f.render();for(const x in g)f.setStaticValue(x,g[x]),this.animationValues&&(this.animationValues[x]=g[x]);f.scheduleRender()}applyProjectionStyles(f,m){if(!this.instance||this.isSVG)return;if(!this.isVisible){f.visibility="hidden";return}const y=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,f.visibility="",f.opacity="",f.pointerEvents=gr(m?.pointerEvents)||"",f.transform=y?y(this.latestValues,""):"none";return}const g=this.getLead();if(!this.projectionDelta||!this.layout||!g.target){this.options.layoutId&&(f.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,f.pointerEvents=gr(m?.pointerEvents)||""),this.hasProjected&&!va(this.latestValues)&&(f.transform=y?y({},""):"none",this.hasProjected=!1);return}f.visibility="";const x=g.animationValues||g.latestValues;this.applyTransformsToTarget();let b=p3(this.projectionDeltaWithTransform,this.treeScale,x);y&&(b=y(x,b)),f.transform=b;const{x:S,y:w}=this.projectionDelta;f.transformOrigin=`${S.origin*100}% ${w.origin*100}% 0`,g.animationValues?f.opacity=g===this?x.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:x.opacityExit:f.opacity=g===this?x.opacity!==void 0?x.opacity:"":x.opacityExit!==void 0?x.opacityExit:0;for(const _ in Uu){if(x[_]===void 0)continue;const{correct:H,applyTo:K,isCSSVariable:G}=Uu[_],Z=b==="none"?x[_]:H(x[_],g);if(K){const R=K.length;for(let V=0;V<R;V++)f[K[V]]=Z}else G?this.options.visualElement.renderState.vars[_]=Z:f[_]=Z}this.options.layoutId&&(f.pointerEvents=g===this?gr(m?.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(f=>f.currentAnimation?.stop()),this.root.nodes.forEach(e1),this.root.sharedNodes.clear()}}}function y3(a){a.updateLayout()}function x3(a){const s=a.resumeFrom?.snapshot||a.snapshot;if(a.isLead()&&a.layout&&s&&a.hasListeners("didUpdate")){const{layoutBox:l,measuredBox:o}=a.layout,{animationType:d}=a.options,h=s.source!==a.layout.source;d==="size"?Bt(x=>{const b=h?s.measuredBox[x]:s.layoutBox[x],S=dt(b);b.min=l[x].min,b.max=b.min+S}):$g(d,s.layoutBox,l)&&Bt(x=>{const b=h?s.measuredBox[x]:s.layoutBox[x],S=dt(l[x]);b.max=b.min+S,a.relativeTarget&&!a.currentAnimation&&(a.isProjectionDirty=!0,a.relativeTarget[x].max=a.relativeTarget[x].min+S)});const f=fi();zs(f,l,s.layoutBox);const m=fi();h?zs(m,a.applyTransform(o,!0),s.measuredBox):zs(m,l,s.layoutBox);const y=!Kg(f);let g=!1;if(!a.resumeFrom){const x=a.getClosestProjectingParent();if(x&&!x.resumeFrom){const{snapshot:b,layout:S}=x;if(b&&S){const w=Pe();Nr(w,s.layoutBox,b.layoutBox);const _=Pe();Nr(_,l,S.layoutBox),Qg(w,_)||(g=!0),x.options.layoutRoot&&(a.relativeTarget=_,a.relativeTargetOrigin=w,a.relativeParent=x)}}}a.notifyListeners("didUpdate",{layout:l,snapshot:s,delta:m,layoutDelta:f,hasLayoutChanged:y,hasRelativeLayoutChanged:g})}else if(a.isLead()){const{onExitComplete:l}=a.options;l&&l()}a.options.transition=void 0}function v3(a){a.parent&&(a.isProjecting()||(a.isProjectionDirty=a.parent.isProjectionDirty),a.isSharedProjectionDirty||(a.isSharedProjectionDirty=!!(a.isProjectionDirty||a.parent.isProjectionDirty||a.parent.isSharedProjectionDirty)),a.isTransformDirty||(a.isTransformDirty=a.parent.isTransformDirty))}function b3(a){a.isProjectionDirty=a.isSharedProjectionDirty=a.isTransformDirty=!1}function S3(a){a.clearSnapshot()}function e1(a){a.clearMeasurements()}function t1(a){a.isLayoutDirty=!1}function j3(a){const{visualElement:s}=a.options;s&&s.getProps().onBeforeLayoutMeasure&&s.notify("BeforeLayoutMeasure"),a.resetTransform()}function n1(a){a.finishAnimation(),a.targetDelta=a.relativeTarget=a.target=void 0,a.isProjectionDirty=!0}function T3(a){a.resolveTargetDelta()}function N3(a){a.calcProjection()}function w3(a){a.resetSkewAndRotation()}function M3(a){a.removeLeadSnapshot()}function a1(a,s,l){a.translate=Ue(s.translate,0,l),a.scale=Ue(s.scale,1,l),a.origin=s.origin,a.originPoint=s.originPoint}function i1(a,s,l,o){a.min=Ue(s.min,l.min,o),a.max=Ue(s.max,l.max,o)}function A3(a,s,l,o){i1(a.x,s.x,l.x,o),i1(a.y,s.y,l.y,o)}function k3(a){return a.animationValues&&a.animationValues.opacityExit!==void 0}const z3={duration:.45,ease:[.4,0,.1,1]},s1=a=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(a),l1=s1("applewebkit/")&&!s1("chrome/")?Math.round:qt;function r1(a){a.min=l1(a.min),a.max=l1(a.max)}function E3(a){r1(a.x),r1(a.y)}function $g(a,s,l){return a==="position"||a==="preserve-aspect"&&!LS(W0(s),W0(l),.2)}function C3(a){return a!==a.root&&a.scroll?.wasRoot}const D3=Jg({attachResizeListener:(a,s)=>Os(a,"resize",s),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Su={current:void 0},Fg=Jg({measureScroll:a=>({x:a.scrollLeft,y:a.scrollTop}),defaultParent:()=>{if(!Su.current){const a=new D3({});a.mount(window),a.setOptions({layoutScroll:!0}),Su.current=a}return Su.current},resetTransform:(a,s)=>{a.style.transform=s!==void 0?s:"none"},checkIsScrollRoot:a=>window.getComputedStyle(a).position==="fixed"}),_3={pan:{Feature:IS},drag:{Feature:WS,ProjectionNode:Fg,MeasureLayout:Yg}};function o1(a,s,l){const{props:o}=a;a.animationState&&o.whileHover&&a.animationState.setActive("whileHover",l==="Start");const d="onHover"+l,h=o[d];h&&Oe.postRender(()=>h(s,Hs(s)))}class R3 extends Wn{mount(){const{current:s}=this.node;s&&(this.unmount=a5(s,(l,o)=>(o1(this.node,o,"Start"),d=>o1(this.node,d,"End"))))}unmount(){}}class O3 extends Wn{constructor(){super(...arguments),this.isActive=!1}onFocus(){let s=!1;try{s=this.node.current.matches(":focus-visible")}catch{s=!0}!s||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Us(Os(this.node.current,"focus",()=>this.onFocus()),Os(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function c1(a,s,l){const{props:o}=a;if(a.current instanceof HTMLButtonElement&&a.current.disabled)return;a.animationState&&o.whileTap&&a.animationState.setActive("whileTap",l==="Start");const d="onTap"+(l==="End"?"":l),h=o[d];h&&Oe.postRender(()=>h(s,Hs(s)))}class V3 extends Wn{mount(){const{current:s}=this.node;s&&(this.unmount=l5(s,(l,o)=>(c1(this.node,o,"Start"),(d,{success:h})=>c1(this.node,d,h?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const Ku=new WeakMap,ju=new WeakMap,U3=a=>{const s=Ku.get(a.target);s&&s(a)},L3=a=>{a.forEach(U3)};function B3({root:a,...s}){const l=a||document;ju.has(l)||ju.set(l,{});const o=ju.get(l),d=JSON.stringify(s);return o[d]||(o[d]=new IntersectionObserver(L3,{root:a,...s})),o[d]}function H3(a,s,l){const o=B3(s);return Ku.set(a,l),o.observe(a),()=>{Ku.delete(a),o.unobserve(a)}}const q3={some:0,all:1};class Y3 extends Wn{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:s={}}=this.node.getProps(),{root:l,margin:o,amount:d="some",once:h}=s,f={root:l?l.current:void 0,rootMargin:o,threshold:typeof d=="number"?d:q3[d]},m=y=>{const{isIntersecting:g}=y;if(this.isInView===g||(this.isInView=g,h&&!g&&this.hasEnteredView))return;g&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",g);const{onViewportEnter:x,onViewportLeave:b}=this.node.getProps(),S=g?x:b;S&&S(y)};return H3(this.node.current,f,m)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:s,prevProps:l}=this.node;["amount","margin","root"].some(G3(s,l))&&this.startObserver()}unmount(){}}function G3({viewport:a={}},{viewport:s={}}={}){return l=>a[l]!==s[l]}const X3={inView:{Feature:Y3},tap:{Feature:V3},focus:{Feature:O3},hover:{Feature:R3}},K3={layout:{ProjectionNode:Fg,MeasureLayout:Yg}},Q3={...DS,...X3,..._3,...K3},Q=J5(Q3,rS);const Z3=a=>a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),J3=a=>a.replace(/^([A-Z])|[\s-_]+(\w)/g,(s,l,o)=>o?o.toUpperCase():l.toLowerCase()),u1=a=>{const s=J3(a);return s.charAt(0).toUpperCase()+s.slice(1)},Pg=(...a)=>a.filter((s,l,o)=>!!s&&s.trim()!==""&&o.indexOf(s)===l).join(" ").trim(),$3=a=>{for(const s in a)if(s.startsWith("aria-")||s==="role"||s==="title")return!0};var F3={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const P3=D.forwardRef(({color:a="currentColor",size:s=24,strokeWidth:l=2,absoluteStrokeWidth:o,className:d="",children:h,iconNode:f,...m},y)=>D.createElement("svg",{ref:y,...F3,width:s,height:s,stroke:a,strokeWidth:o?Number(l)*24/Number(s):l,className:Pg("lucide",d),...!h&&!$3(m)&&{"aria-hidden":"true"},...m},[...f.map(([g,x])=>D.createElement(g,x)),...Array.isArray(h)?h:[h]]));const q=(a,s)=>{const l=D.forwardRef(({className:o,...d},h)=>D.createElement(P3,{ref:h,iconNode:s,className:Pg(`lucide-${Z3(u1(a))}`,`lucide-${a}`,o),...d}));return l.displayName=u1(a),l};const W3=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],wr=q("activity",W3);const I3=[["path",{d:"M12 6v16",key:"nqf5sj"}],["path",{d:"m19 13 2-1a9 9 0 0 1-18 0l2 1",key:"y7qv08"}],["path",{d:"M9 11h6",key:"1fldmi"}],["circle",{cx:"12",cy:"4",r:"2",key:"muu5ef"}]],e4=q("anchor",I3);const t4=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],qs=q("award",t4);const n4=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]],Wg=q("bell",n4);const a4=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],xr=q("book-open",a4);const i4=[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}],["path",{d:"M8 11h8",key:"vwpz6n"}],["path",{d:"M8 7h6",key:"1f0q6e"}]],s4=q("book-text",i4);const l4=[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"}]],Ig=q("bookmark",l4);const r4=[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]],ey=q("box",r4);const o4=[["path",{d:"M12 18V5",key:"adv99a"}],["path",{d:"M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4",key:"1e3is1"}],["path",{d:"M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5",key:"1gqd8o"}],["path",{d:"M17.997 5.125a4 4 0 0 1 2.526 5.77",key:"iwvgf7"}],["path",{d:"M18 18a4 4 0 0 0 2-7.464",key:"efp6ie"}],["path",{d:"M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517",key:"1gq6am"}],["path",{d:"M6 18a4 4 0 0 1-2-7.464",key:"k1g0md"}],["path",{d:"M6.003 5.125a4 4 0 0 0-2.526 5.77",key:"q97ue3"}]],Ad=q("brain",o4);const c4=[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]],Ys=q("briefcase",c4);const u4=[["path",{d:"M10 12h4",key:"a56b0p"}],["path",{d:"M10 8h4",key:"1sr2af"}],["path",{d:"M14 21v-3a2 2 0 0 0-4 0v3",key:"1rgiei"}],["path",{d:"M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2",key:"secmi2"}],["path",{d:"M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16",key:"16ra0t"}]],d4=q("building-2",u4);const f4=[["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M12 6h.01",key:"1vi96p"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M16 6h.01",key:"1x0f13"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M8 6h.01",key:"1dz90k"}],["path",{d:"M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3",key:"cabbwy"}],["rect",{x:"4",y:"2",width:"16",height:"20",rx:"2",key:"1uxh74"}]],ty=q("building",f4);const h4=[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]],p4=q("calculator",h4);const m4=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],jn=q("calendar",m4);const g4=[["path",{d:"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",key:"18u6gg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]],y4=q("camera",g4);const x4=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],gi=q("chart-column",x4);const v4=[["path",{d:"M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z",key:"pzmjnu"}],["path",{d:"M21.21 15.89A10 10 0 1 1 8 2.83",key:"k2fpak"}]],kd=q("chart-pie",v4);const b4=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],ny=q("check",b4);const S4=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Cr=q("chevron-down",S4);const j4=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],ay=q("chevron-right",j4);const T4=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],iy=q("circle-alert",T4);const N4=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],w4=q("circle-question-mark",N4);const M4=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}]],sy=q("clipboard",M4);const A4=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],ly=q("clock",A4);const k4=[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]],ry=q("cloud",k4);const z4=[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],Ti=q("code-xml",z4);const E4=[["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M14 2v2",key:"6buw04"}],["path",{d:"M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1",key:"pwadti"}],["path",{d:"M6 2v2",key:"colzsn"}]],C4=q("coffee",E4);const D4=[["path",{d:"M11 10.27 7 3.34",key:"16pf9h"}],["path",{d:"m11 13.73-4 6.93",key:"794ttg"}],["path",{d:"M12 22v-2",key:"1osdcq"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M14 12h8",key:"4f43i9"}],["path",{d:"m17 20.66-1-1.73",key:"eq3orb"}],["path",{d:"m17 3.34-1 1.73",key:"2wel8s"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"m20.66 17-1.73-1",key:"sg0v6f"}],["path",{d:"m20.66 7-1.73 1",key:"1ow05n"}],["path",{d:"m3.34 17 1.73-1",key:"nuk764"}],["path",{d:"m3.34 7 1.73 1",key:"1ulond"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["circle",{cx:"12",cy:"12",r:"8",key:"46899m"}]],_4=q("cog",D4);const R4=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],oy=q("copy",R4);const O4=[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]],cy=q("cpu",O4);const V4=[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]],uy=q("credit-card",V4);const U4=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],zd=q("database",U4);const L4=[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]],dy=q("dollar-sign",L4);const B4=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],Ed=q("download",B4);const H4=[["path",{d:"M21.54 15H17a2 2 0 0 0-2 2v4.54",key:"1djwo0"}],["path",{d:"M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17",key:"1tzkfa"}],["path",{d:"M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05",key:"14pb5j"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],q4=q("earth",H4);const Y4=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],yi=q("external-link",Y4);const G4=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],fy=q("eye-off",G4);const X4=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],hy=q("eye",X4);const K4=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],Dr=q("file-text",K4);const Q4=[["path",{d:"M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4",key:"1slcih"}]],Z4=q("flame",Q4);const J4=[["path",{d:"M18 19a5 5 0 0 1-5-5v8",key:"sz5oeg"}],["path",{d:"M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5",key:"1w6njk"}],["circle",{cx:"13",cy:"12",r:"2",key:"1j92g6"}],["circle",{cx:"20",cy:"19",r:"2",key:"1obnsp"}]],py=q("folder-git-2",J4);const $4=[["path",{d:"M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z",key:"1fr9dc"}],["path",{d:"M8 10v4",key:"tgpxqk"}],["path",{d:"M12 10v2",key:"hh53o1"}],["path",{d:"M16 10v6",key:"1d6xys"}]],F4=q("folder-kanban",$4);const P4=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]],W4=q("folder-open",P4);const I4=[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]],e6=q("folder",I4);const t6=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],Tu=q("funnel",t6);const n6=[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]],a6=q("gamepad-2",n6);const i6=[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1",key:"bkv52"}],["path",{d:"M12 8v13",key:"1c76mn"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",key:"6wjy6b"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",key:"1ihvrl"}]],s6=q("gift",i6);const l6=[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]],r6=q("git-branch",l6);const o6=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],c6=q("github",o6);const u6=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],Ni=q("globe",u6);const d6=[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]],Vs=q("graduation-cap",d6);const f6=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]],h6=q("grid-3x3",f6);const p6=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],m6=q("heart",p6);const g6=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],y6=q("house",g6);const x6=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],my=q("image",x6);const v6=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],b6=q("info",v6);const S6=[["path",{d:"m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4",key:"g0fldk"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}]],j6=q("key",S6);const T6=[["path",{d:"M18 5a2 2 0 0 1 2 2v8.526a2 2 0 0 0 .212.897l1.068 2.127a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45l1.068-2.127A2 2 0 0 0 4 15.526V7a2 2 0 0 1 2-2z",key:"1pdavp"}],["path",{d:"M20.054 15.987H3.946",key:"14rxg9"}]],d1=q("laptop",T6);const N6=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],gy=q("layers",N6);const w6=[["path",{d:"m16 6 4 14",key:"ji33uf"}],["path",{d:"M12 6v14",key:"1n7gus"}],["path",{d:"M8 8v12",key:"1gg7y9"}],["path",{d:"M4 4v16",key:"6qkkli"}]],yy=q("library",w6);const M6=[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],xy=q("lightbulb",M6);const A6=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]],vy=q("link",A6);const k6=[["path",{d:"M3 5h.01",key:"18ugdj"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 19h.01",key:"noohij"}],["path",{d:"M8 5h13",key:"1pao27"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 19h13",key:"m83p4d"}]],z6=q("list",k6);const E6=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],Cd=q("loader-circle",E6);const C6=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],ja=q("lock",C6);const D6=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],Dd=q("mail",D6);const _6=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],_r=q("map-pin",_6);const R6=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],O6=q("menu",R6);const V6=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]],U6=q("message-square",V6);const L6=[["path",{d:"M12 19v3",key:"npa21l"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["rect",{x:"9",y:"2",width:"6",height:"13",rx:"3",key:"s6n7sd"}]],B6=q("mic",L6);const H6=[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]],_d=q("monitor",H6);const q6=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],Y6=q("moon",q6);const G6=[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]],X6=q("music",G6);const K6=[["polygon",{points:"3 11 22 2 13 21 11 13 3 11",key:"1ltx0t"}]],Q6=q("navigation",K6);const Z6=[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1",key:"4q2zg0"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1",key:"8cvhb9"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1",key:"1egb70"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",key:"1jsf9p"}],["path",{d:"M12 12V8",key:"2874zd"}]],J6=q("network",Z6);const $6=[["path",{d:"M15 18h-5",key:"95g1m2"}],["path",{d:"M18 14h-8",key:"sponae"}],["path",{d:"M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9a2 2 0 0 1 2-2h2",key:"39pd36"}],["rect",{width:"8",height:"4",x:"10",y:"6",rx:"1",key:"aywv1n"}]],F6=q("newspaper",$6);const P6=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]],by=q("package",P6);const W6=[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]],I6=q("palette",W6);const ej=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M9 21V9",key:"1oto5p"}]],tj=q("panels-top-left",ej);const nj=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]],aj=q("pencil",nj);const ij=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],sj=q("play",ij);const lj=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],Qu=q("plus",lj);const rj=[["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6",key:"1itne7"}],["rect",{x:"6",y:"14",width:"12",height:"8",rx:"1",key:"1ue0tg"}]],Sy=q("printer",rj);const oj=[["rect",{width:"5",height:"5",x:"3",y:"3",rx:"1",key:"1tu5fj"}],["rect",{width:"5",height:"5",x:"16",y:"3",rx:"1",key:"1v8r4q"}],["rect",{width:"5",height:"5",x:"3",y:"16",rx:"1",key:"1x03jg"}],["path",{d:"M21 16h-3a2 2 0 0 0-2 2v3",key:"177gqh"}],["path",{d:"M21 21v.01",key:"ents32"}],["path",{d:"M12 7v3a2 2 0 0 1-2 2H7",key:"8crl2c"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M12 3h.01",key:"n36tog"}],["path",{d:"M12 16v.01",key:"133mhm"}],["path",{d:"M16 12h1",key:"1slzba"}],["path",{d:"M21 12v.01",key:"1lwtk9"}],["path",{d:"M12 21v-1",key:"1880an"}]],jy=q("qr-code",oj);const cj=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],Es=q("refresh-cw",cj);const uj=[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]],Rr=q("rocket",uj);const dj=[["path",{d:"M14 21v-3a2 2 0 0 0-4 0v3",key:"1rgiei"}],["path",{d:"M18 5v16",key:"1ethyx"}],["path",{d:"m4 6 7.106-3.79a2 2 0 0 1 1.788 0L20 6",key:"zywc2d"}],["path",{d:"m6 11-3.52 2.147a1 1 0 0 0-.48.854V19a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a1 1 0 0 0-.48-.853L18 11",key:"1d4ql0"}],["path",{d:"M6 5v16",key:"1sn0nx"}],["circle",{cx:"12",cy:"9",r:"2",key:"1092wv"}]],fj=q("school",dj);const hj=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],Gs=q("search",hj);const pj=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],Ty=q("send",pj);const mj=[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]],Rd=q("server",mj);const gj=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Od=q("settings",gj);const yj=[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]],xj=q("share-2",yj);const vj=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],bj=q("shield",vj);const Sj=[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]],Ny=q("shopping-cart",Sj);const jj=[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]],Vd=q("smartphone",jj);const Tj=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],Mr=q("sparkles",Tj);const Nj=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",key:"ohrbg2"}]],wj=q("square-pen",Nj);const Mj=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],Aj=q("star",Mj);const kj=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],zj=q("sun",kj);const Ej=[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]],wy=q("tag",Ej);const Cj=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],wi=q("target",Cj);const Dj=[["path",{d:"M12 19h8",key:"baeox8"}],["path",{d:"m4 17 6-6-6-6",key:"1yngyt"}]],My=q("terminal",Dj);const _j=[["path",{d:"M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z",key:"emmmcr"}],["path",{d:"M7 10v12",key:"1qc93n"}]],Rj=q("thumbs-up",_j);const Oj=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],Vj=q("trash-2",Oj);const Uj=[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]],Na=q("trending-up",Uj);const Lj=[["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",key:"wrbu53"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",key:"lysw3i"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]],Ay=q("truck",Lj);const Bj=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],ky=q("upload",Bj);const Hj=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],Ud=q("user",Hj);const qj=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],Mi=q("users",qj);const Yj=[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]],Gj=q("video",Yj);const Xj=[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]],Kj=q("wifi",Xj);const Qj=[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",key:"1ngwbx"}]],xi=q("wrench",Qj);const Zj=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Ai=q("x",Zj);const Jj=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],zy=q("zap",Jj),Ey=D.createContext(),$j=({children:a})=>{const[s,l]=D.useState(()=>{const d=localStorage.getItem("portfolio-theme");return d||"dark"});D.useEffect(()=>{document.documentElement.setAttribute("data-theme",s),localStorage.setItem("portfolio-theme",s)},[s]);const o=()=>{l(d=>d==="light"?"dark":"light")};return u.jsx(Ey.Provider,{value:{theme:s,toggleTheme:o},children:a})},Fj=()=>{const a=D.useContext(Ey);if(!a)throw new Error("useTheme must be used within a ThemeProvider");return a},Pj="/my-profile/images/profile.png",f1=[{id:"about",label:"About",icon:Ud},{id:"keyAchievements",label:"Key Expertise",icon:wi},{id:"experience",label:"Experience",icon:Ys},{id:"projects",label:"Projects",icon:py},{id:"techStack",label:"Tech Stack",icon:Ti},{id:"education",label:"Education",icon:Vs},{id:"certifications",label:"Certifications",icon:qs},{id:"resources",label:"Resources",icon:yy},{id:"webApps",label:"Playground",icon:Rr},{id:"bookmarks",label:"Bookmarks",icon:Ig,bottomAction:!0},{id:"glossary",label:"용어집",icon:s4,bottomAction:!0},{id:"analytics",label:"Analytics",icon:gi,bottomAction:!0}],Wj=({profile:a,activeSection:s,onSectionChange:l})=>{const{theme:o,toggleTheme:d}=Fj(),[h,f]=D.useState(!1),m=Pj,y=()=>u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"sidebar-profile",children:[u.jsx("div",{className:"profile-image-wrapper",children:u.jsx("img",{src:m,alt:a.name,className:"profile-image"})}),u.jsxs("div",{className:"profile-name-row",children:[u.jsx("h1",{className:"profile-name",children:a.name}),a.email&&u.jsx("a",{href:`mailto:${a.email}`,className:"email-icon-link","aria-label":"Send Email",title:a.email,children:u.jsx(Dd,{size:18})})]}),u.jsx("p",{className:"profile-role",children:a.role}),u.jsx("p",{className:"profile-location",children:a.location})]}),u.jsx("nav",{className:"sidebar-nav",children:f1.filter(g=>!g.bottomAction).map(g=>{const x=g.icon,b=s===g.id;return u.jsxs("button",{onClick:()=>{l(g.id),f(!1)},className:`nav-item ${b?"active":""}`,children:[u.jsx(x,{size:18}),u.jsx("span",{children:g.label}),b&&u.jsx(Q.div,{layoutId:"activeIndicator",className:"active-indicator"})]},g.id)})}),u.jsxs("div",{className:"sidebar-footer",children:[f1.filter(g=>g.bottomAction).map(g=>{const x=g.icon,b=s===g.id;return u.jsxs("button",{onClick:()=>{l(g.id),f(!1)},className:`nav-item ${b?"active":""}`,children:[u.jsx(x,{size:18}),u.jsx("span",{children:g.label})]},g.id)}),u.jsx("div",{style:{height:"16px"}}),u.jsxs("button",{onClick:d,className:"theme-toggle","aria-label":"Toggle theme",children:[o==="light"?u.jsx(Y6,{size:18}):u.jsx(zj,{size:18}),u.jsx("span",{children:o==="light"?"Dark Mode":"Light Mode"})]}),u.jsxs("a",{href:"https://antigravity.google/",target:"_blank",rel:"noopener noreferrer",className:"made-with",children:[u.jsx("span",{className:"made-with-text",children:"Built with"}),u.jsx("span",{className:"antigravity-icon",children:"🚀"}),u.jsx("span",{className:"antigravity-name",children:"Antigravity"})]})]})]});return u.jsxs(u.Fragment,{children:[u.jsx("button",{className:"mobile-menu-btn",onClick:()=>f(!h),"aria-label":"Toggle menu",children:h?u.jsx(Ai,{size:24}):u.jsx(O6,{size:24})}),u.jsx("aside",{className:"sidebar desktop-sidebar",children:u.jsx(y,{})}),u.jsx(ji,{children:h&&u.jsxs(u.Fragment,{children:[u.jsx(Q.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"mobile-overlay",onClick:()=>f(!1)}),u.jsx(Q.aside,{initial:{x:"-100%"},animate:{x:0},exit:{x:"-100%"},transition:{type:"spring",damping:25,stiffness:300},className:"sidebar mobile-sidebar",children:u.jsx(y,{})})]})}),u.jsx("style",{children:`
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
      `})]})},Ij=({isOpen:a,onClose:s,content:l})=>(D.useEffect(()=>{const o=d=>{d.key==="Escape"&&s()};return a&&(document.addEventListener("keydown",o),document.body.style.overflow="hidden"),()=>{document.removeEventListener("keydown",o),document.body.style.overflow="unset"}},[a,s]),l?u.jsx(ji,{children:a&&u.jsxs(u.Fragment,{children:[u.jsx(Q.div,{className:"modal-backdrop",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:s}),u.jsxs(Q.div,{className:"modal-container",initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.9},transition:{type:"spring",damping:25,stiffness:300},children:[u.jsx("button",{className:"modal-close-btn",onClick:s,"aria-label":"Close modal",children:u.jsx(Ai,{size:24})}),u.jsxs("div",{className:"modal-content",children:[l.type==="image"?u.jsx("img",{src:l.src,alt:l.caption||"Expanded image",className:"modal-image"}):u.jsx("div",{className:"modal-video-wrapper",children:u.jsx("iframe",{src:l.src,title:l.caption||"Video",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,className:"modal-video"})}),l.caption&&u.jsx("p",{className:"modal-caption",children:l.caption})]})]}),u.jsx("style",{children:`
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
          `})]})}):null),e8=({data:a,profile:s})=>{const l={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.15}}},o={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.5}}},d=[{icon:Mr,color:"#8b5cf6"},{icon:Ti,color:"#3b82f6"},{icon:Na,color:"#10b981"},{icon:Ys,color:"#f59e0b"}],h=[];let f=null;return a.blocks?.forEach(m=>{m.type==="heading"?(f&&h.push(f),f={title:m.value,texts:[],items:[]}):m.type==="text"&&f?f.texts.push(m.value):m.type==="list"&&f&&(f.items=m.items||[])}),f&&h.push(f),u.jsxs(Q.section,{className:"section about-section",variants:l,initial:"hidden",animate:"visible",children:[u.jsxs("div",{className:"about-header-row",children:[u.jsxs(Q.h2,{className:"section-title",variants:o,children:[u.jsx("span",{className:"title-icon",children:"👋"}),a.title]}),s?.resumeLink&&u.jsxs(Q.a,{href:s.resumeLink,className:"resume-download-btn",target:"_blank",rel:"noopener noreferrer",variants:o,whileHover:{scale:1.05},whileTap:{scale:.95},children:[u.jsx(Ed,{size:18}),u.jsx("span",{children:"이력서 다운로드"})]})]}),h.map((m,y)=>m.items.length>0?u.jsxs(Q.div,{className:"competency-section",variants:o,children:[u.jsxs("div",{className:"competency-header",children:[u.jsx(wi,{size:22}),u.jsx("h3",{className:"competency-title",children:m.title})]}),u.jsx("div",{className:"competency-grid",children:m.items.map((x,b)=>{const S=d[b%d.length].icon,w=d[b%d.length].color;return u.jsxs(Q.div,{className:"competency-card",whileHover:{scale:1.02,y:-4},transition:{duration:.2},children:[u.jsx("div",{className:"competency-icon",style:{background:`${w}15`,color:w},children:u.jsx(S,{size:20})}),u.jsx("span",{className:"competency-text",children:x})]},b)})})]},y):u.jsxs(Q.div,{className:"intro-card",variants:o,children:[u.jsxs("div",{className:"intro-header",children:[u.jsx("div",{className:"intro-icon-wrapper",children:u.jsx(Mr,{size:24})}),u.jsx("h3",{className:"intro-title",children:m.title})]}),u.jsx("div",{className:"intro-content",children:m.texts.map((x,b)=>u.jsx("p",{className:"intro-text",children:x},b))})]},y)),u.jsx("style",{children:`
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
          white-space: pre-wrap;
          word-break: break-word;
          overflow-wrap: break-word;
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
          .section-title {
            font-size: 1.5rem;
            margin-bottom: 16px;
          }
          .about-header-row {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `})]})},t8=({data:a})=>{const s={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1}}},l={hidden:{opacity:0,y:20},visible:{opacity:1,y:0}},o=[{title:"AX 전환 실행력",description:"AI, RPA, 자동화 기술을 실제 업무 프로세스에 적용해 조직의 일하는 방식을 개선하는 역량",icon:wi,color:"#3b82f6"},{title:"레거시 시스템 현대화 역량",description:"기존 ERP, 기간계, 내부 시스템의 구조와 한계를 이해하고 개선 방향을 설계·추진하는 역량",icon:Na,color:"#8b5cf6"},{title:"현업 중심 문제해결력",description:"기술 자체보다 현업의 반복업무, 비효율, 병목을 파악하고 실질적인 개선안으로 연결하는 역량",icon:Mi,color:"#10b981"},{title:"기술과 조직을 연결하는 리더십",description:"개발, 운영, 관리 경험을 바탕으로 팀원과 현업 부서를 연결하고 변화가 정착되도록 이끄는 역량",icon:e4,color:"#f59e0b"}],d=[{label:"15+ Years",type:"primary"},{label:"Team Lead",type:"secondary"},{label:"ERP / POS / B2C",type:"accent"},{label:"RPA / AI",type:"accent"},{label:"Manufacturing + Retail Domains",type:"outline"}];return u.jsxs(Q.section,{id:"section-keyAchievements",className:"section achievements-section",variants:s,initial:"hidden",whileInView:"visible",viewport:{once:!0,margin:"-100px"},children:[u.jsxs(Q.h2,{className:"section-title",variants:l,children:[u.jsx("span",{className:"title-icon",children:"🎯"}),"Key Area of Expertise"]}),u.jsx(Q.div,{className:"badges-container",variants:l,children:d.map((h,f)=>u.jsx("span",{className:`achievement-badge badge-${h.type}`,children:h.label},f))}),u.jsx(Q.div,{className:"achievements-grid",variants:s,children:o.map((h,f)=>{const m=h.icon;return u.jsxs(Q.div,{className:"achievement-card",variants:l,whileHover:{y:-5,boxShadow:"var(--shadow-lg)"},children:[u.jsx("div",{className:"achievement-icon-wrapper",style:{background:`${h.color}15`,color:h.color},children:u.jsx(m,{size:24})}),u.jsx("h3",{className:"achievement-title",children:h.title}),u.jsx("p",{className:"achievement-desc",children:h.description})]},f)})}),u.jsx("style",{children:`
        .achievements-section {
          padding-bottom: 2rem;
        }

        .badges-container {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 2rem;
        }

        .achievement-badge {
          padding: 6px 14px;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 600;
          letter-spacing: 0.3px;
        }

        .badge-primary {
          background: var(--accent-blue);
          color: white;
        }

        .badge-secondary {
          background: linear-gradient(135deg, #8b5cf6, #6366f1);
          color: white;
        }

        .badge-accent {
          background: var(--bg-tertiary);
          color: var(--text-primary);
          border: 1px solid var(--border-color);
        }

        .badge-outline {
          background: transparent;
          color: var(--text-secondary);
          border: 1px dashed var(--text-tertiary);
        }

        .achievements-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
        }

        .achievement-card {
          background: var(--bg-secondary);
          border: 1px solid var(--border-light);
          border-radius: 16px;
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          transition: all 0.3s ease;
        }

        .achievement-icon-wrapper {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.25rem;
        }

        .achievement-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.75rem;
          line-height: 1.4;
        }

        .achievement-desc {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .achievements-grid {
            grid-template-columns: 1fr;
          }
        }
      `})]})},n8=(a,s="image")=>a?s==="video"?`https://drive.google.com/file/d/${a}/preview`:`https://drive.google.com/uc?export=view&id=${a}`:"",a8={Code2:Ti,Layout:tj,Server:Rd,Database:zd,Cloud:ry,Wrench:xi,Brain:Ad,Cog:_4,Terminal:My,Globe:Ni,Smartphone:Vd,Cpu:cy,Monitor:_d,Layers:gy,Box:ey,Settings:Od,BarChart3:gi,TrendingUp:Na,Briefcase:Ys,Users:Mi,FileText:Dr,Target:wi,Lightbulb:xy,Rocket:Rr,GitBranch:r6},i8=({data:a})=>{const s={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1}}},l={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.5}}},o=h=>h>=67?"상 (Expert)":h>=34?"중 (Proficient)":"하 (Novice)",d=["#6b8cae","#6bb99b","#9d88b5","#c8925e","#c9768a","#6ba8a0"];return u.jsxs(Q.section,{className:"section tech-section",variants:s,initial:"hidden",animate:"visible",children:[u.jsxs(Q.div,{className:"tech-legend",variants:l,children:[u.jsxs("div",{className:"legend-item",children:[u.jsx("span",{className:"legend-badge",children:"상 (Expert)"})," 리딩 및 문제해결"]}),u.jsxs("div",{className:"legend-item",children:[u.jsx("span",{className:"legend-badge",children:"중 (Proficient)"})," 독립적 기능 구현"]}),u.jsxs("div",{className:"legend-item",children:[u.jsx("span",{className:"legend-badge",children:"하 (Novice)"})," 학습 및 보조 수행"]})]}),u.jsx(Q.div,{className:"tech-grid",variants:s,children:a.categories?.map((h,f)=>{const m=a8[h.icon]||Ti,y=d[f%d.length];return u.jsxs(Q.div,{className:"tech-card",variants:l,children:[u.jsxs("div",{className:"tech-card-header",children:[u.jsx("div",{className:"tech-card-iconbox",style:{background:`${y}15`,color:y},children:u.jsx(m,{size:24})}),u.jsx("h3",{className:"tech-card-title",children:h.name})]}),u.jsx("div",{className:"tech-card-divider"}),u.jsx("div",{className:"skills-list",children:h.items?.map((g,x)=>u.jsxs("div",{className:"skill-item",children:[u.jsxs("div",{className:"skill-info",children:[u.jsx("span",{className:"skill-name",children:g.name}),u.jsx("span",{className:"skill-label",style:{color:y,fontWeight:600},children:o(g.level)})]}),u.jsx("div",{className:"skill-bar-track",children:u.jsx(Q.div,{className:"skill-bar-fill",initial:{width:0},animate:{width:`${g.level}%`},transition:{duration:1,delay:x*.1+.3},style:{backgroundColor:y,opacity:.6}})})]},x))})]},f)})}),u.jsx("style",{children:`
        .tech-section {
          max-width: 1200px;
        }

        .tech-legend {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          margin-bottom: 24px;
          padding: 16px;
          background: var(--bg-secondary);
          border: 1px solid var(--border-light);
          border-radius: 12px;
          font-size: 0.9rem;
          color: var(--text-secondary);
        }

        .legend-item {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .legend-badge {
          font-weight: 600;
          color: var(--text-primary);
        }

        .tech-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 24px;
        }

        .tech-card {
          background: var(--bg-secondary);
          border-radius: 12px;
          border: 1px solid var(--border-light);
          padding: 28px;
          display: flex;
          flex-direction: column;
          box-shadow: var(--shadow-sm);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .tech-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-md);
        }

        .tech-card-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 24px;
        }

        .tech-card-iconbox {
          width: 48px;
          height: 48px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .tech-card-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text-primary);
          margin: 0;
          line-height: 1.3;
          white-space: pre-line;
        }

        .tech-card-divider {
          height: 1px;
          background: var(--border-light);
          margin-bottom: 24px;
        }

        .skills-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .skill-item {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .skill-info {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .skill-name {
          font-size: 0.95rem;
          color: var(--text-primary);
          font-weight: 500;
        }

        .skill-label {
          font-size: 0.9em;
          font-weight: 700;
        }

        .skill-bar-track {
          height: 4px;
          background: var(--border-color); /* Darker track for contrast */
          border-radius: 2px;
          overflow: hidden;
        }

        .skill-bar-fill {
          height: 100%;
          border-radius: 2px;
        }

        @media (max-width: 768px) {
          .tech-grid {
            grid-template-columns: 1fr;
          }
        }
      `})]})},s8=({data:a})=>{const[s,l]=D.useState(-1),o={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1}}},d={hidden:{opacity:0,x:-20},visible:{opacity:1,x:0}},h=f=>{l(s===f?-1:f)};return u.jsxs(Q.section,{className:"section experience-section",variants:o,initial:"hidden",animate:"visible",children:[u.jsxs(Q.h2,{className:"section-title",variants:d,children:[u.jsx("span",{className:"title-icon",children:"💼"}),a.title]}),u.jsx("div",{className:"timeline",children:a.items?.map((f,m)=>u.jsxs(Q.div,{className:`timeline-item ${s===m?"expanded":""}`,variants:d,children:[u.jsxs("div",{className:"timeline-marker",children:[u.jsx("div",{className:"marker-dot"}),m<a.items.length-1&&u.jsx("div",{className:"marker-line"})]}),u.jsxs("div",{className:"timeline-content",children:[u.jsxs("button",{className:"exp-header",onClick:()=>h(m),"aria-expanded":s===m,children:[u.jsxs("div",{className:"exp-header-main",children:[u.jsxs("div",{className:"exp-title-row",children:[u.jsx("h3",{className:"company-name",children:f.company}),u.jsx("span",{className:"exp-role",children:f.role})]}),f.techStack&&u.jsx("div",{className:"exp-tech-row",children:f.techStack.map((y,g)=>u.jsx("span",{className:"tech-tag-sm",children:y},g))})]}),u.jsxs("div",{className:"exp-header-meta",children:[u.jsxs("span",{className:"exp-period",children:[u.jsx(jn,{size:14}),f.period]}),u.jsx(Cr,{size:18,className:`expand-icon ${s===m?"rotated":""}`})]})]}),u.jsx(ji,{children:s===m&&u.jsxs(Q.div,{className:"exp-details",initial:{height:0,opacity:0},animate:{height:"auto",opacity:1},exit:{height:0,opacity:0},transition:{duration:.3},children:[u.jsx("p",{className:"exp-description",children:f.description}),u.jsxs("div",{className:"exp-tasks",children:[u.jsx("h4",{className:"tasks-title",children:"주요 업무"}),u.jsx("ul",{className:"tasks-list",children:f.tasks?.map((y,g)=>u.jsxs("li",{className:"task-item",children:[u.jsx("span",{className:"task-bullet",children:"•"}),u.jsx("span",{children:y})]},g))})]})]})})]})]},m))}),u.jsx("style",{children:`
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
          gap: 12px;
          flex: 1;
        }

        .exp-title-row {
          display: flex;
          align-items: baseline;
          flex-wrap: wrap;
          gap: 12px;
        }

        .company-name {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--text-primary);
          margin: 0;
        }

        .exp-role {
          font-size: 0.95rem;
          color: var(--accent-blue);
          font-weight: 500;
        }

        .exp-tech-row {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .tech-tag-sm {
          font-size: 0.75rem;
          font-weight: 500; /* Subtle text */
          padding: 4px 10px;
          border-radius: 4px;
          background: var(--bg-tertiary);
          color: var(--text-secondary);
        }

        .exp-header-meta {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding-top: 2px;
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
          padding-top: 16px;
          border-top: 1px solid var(--border-light);
        }

        .tasks-title {
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
      `})]})},l8=({block:a,onMediaClick:s})=>{const l=()=>{switch(a.type){case"text":return u.jsx("p",{className:"block-text",children:a.value});case"heading":return u.jsx("h3",{className:"block-heading",children:a.value});case"subheading":return u.jsx("h4",{className:"block-subheading",children:a.value});case"list":return u.jsx("ul",{className:"block-list",children:a.items?.map((g,x)=>u.jsxs("li",{className:"block-list-item",children:[u.jsx("span",{className:"list-bullet",children:"•"}),u.jsx("span",{children:g})]},x))});case"callout":return u.jsxs("div",{className:"block-callout",children:[u.jsx("span",{className:"callout-icon",children:a.icon||"💡"}),u.jsx("div",{className:"callout-content",children:a.items?u.jsx("ul",{className:"callout-list",children:a.items.map((g,x)=>u.jsx("li",{children:g},x))}):u.jsx("p",{className:"callout-text",children:a.value})})]});case"image":const o=a.driveId?n8(a.driveId,"image"):a.value;return o?u.jsxs("div",{className:"block-media",children:[u.jsx(Q.img,{src:o,alt:a.caption||"Project image",className:"block-image",whileHover:{scale:1.02},onClick:()=>s?.({type:"image",src:o,caption:a.caption}),referrerPolicy:"no-referrer"}),a.caption&&u.jsx("p",{className:"media-caption",children:a.caption})]}):null;case"video":const d=a.value;if(!d)return null;const h=d.includes("youtube.com")||d.includes("youtu.be"),f=d.includes("drive.google.com"),m=d.endsWith(".mp4")||d.endsWith(".webm")||d.endsWith(".ogg");let y=d;if(h&&!d.includes("/embed/")){const g=d.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\s?]+)/);g&&(y=`https://www.youtube.com/embed/${g[1]}`)}if(f&&!d.includes("/preview")){const g=d.match(/\/d\/([^/]+)/);g&&(y=`https://drive.google.com/file/d/${g[1]}/preview`)}return m?u.jsxs("div",{className:"block-media",children:[u.jsx("video",{src:y,controls:!0,className:"block-video-native",onClick:g=>g.stopPropagation(),children:"브라우저가 비디오를 지원하지 않습니다."}),a.caption&&u.jsx("p",{className:"media-caption",children:a.caption})]}):u.jsxs("div",{className:"block-media",children:[u.jsx("div",{className:"video-wrapper",onClick:()=>s?.({type:"video",src:y,caption:a.caption}),children:u.jsx("iframe",{src:y,title:a.caption||"Project video",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,className:"block-video"})}),a.caption&&u.jsx("p",{className:"media-caption",children:a.caption})]});case"divider":return u.jsx("hr",{className:"block-divider"});case"quote":return u.jsx("blockquote",{className:"block-quote",children:a.value});case"code":return u.jsx("pre",{className:"block-code",children:u.jsx("code",{children:a.value})});default:return null}};return u.jsxs(Q.div,{className:`block-wrapper type-${a.type}`,initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{duration:.3},children:[l(),u.jsx("style",{children:`
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
      `})]})},r8=({data:a,onMediaClick:s})=>{const[l,o]=D.useState(-1),d={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1}}},h={hidden:{opacity:0},visible:{opacity:1}},f=m=>{o(l===m?-1:m)};return u.jsxs(Q.section,{className:"section projects-section",variants:d,initial:"hidden",animate:"visible",children:[u.jsxs(Q.h2,{className:"section-title",variants:h,children:[u.jsx("span",{className:"title-icon",children:"🚀"}),a.title]}),u.jsx("div",{className:"projects-list",children:a.items?.map((m,y)=>u.jsxs(Q.div,{className:`project-card ${l===y?"expanded":""}`,variants:h,children:[u.jsx("div",{className:"project-header",onClick:()=>f(y),children:u.jsxs("div",{className:"header-main",children:[u.jsxs("div",{className:"title-row",children:[u.jsxs("div",{className:"title-group",children:[u.jsx(F4,{size:20,className:"project-icon"}),u.jsx("h3",{className:"project-title",children:m.title})]}),u.jsxs("div",{className:"header-actions",children:[m.links&&u.jsxs("div",{className:"quick-links",onClick:g=>g.stopPropagation(),children:[m.links.github&&u.jsx("a",{href:m.links.github,target:"_blank",rel:"noopener noreferrer",className:"icon-btn github",title:"View Code",children:u.jsx(c6,{size:18})}),m.links.demo&&u.jsx("a",{href:m.links.demo,target:"_blank",rel:"noopener noreferrer",className:"icon-btn demo",title:"Live Demo",children:u.jsx(yi,{size:18})})]}),u.jsx("button",{className:`expand-btn ${l===y?"rotated":""}`,"aria-label":"Toggle details",children:u.jsx(Cr,{size:20})})]})]}),u.jsx("div",{className:"meta-row",children:u.jsxs("div",{className:"meta-info",children:[m.company&&u.jsxs("span",{className:"meta-badge company",children:[u.jsx(d4,{size:12}),m.company]}),u.jsxs("span",{className:"meta-text role",children:[u.jsx(Ud,{size:12}),m.role]}),u.jsx("span",{className:"meta-divider",children:"|"}),u.jsxs("span",{className:"meta-text date",children:[u.jsx(jn,{size:12}),m.period]})]})}),m.techStack&&u.jsx("div",{className:"header-tech",children:m.techStack.map((g,x)=>u.jsx("span",{className:"tech-chip",children:g},x))})]})}),u.jsx(ji,{children:l===y&&u.jsx(Q.div,{className:"project-body",initial:{height:0,opacity:0},animate:{height:"auto",opacity:1},exit:{height:0,opacity:0},transition:{duration:.3},children:u.jsxs("div",{className:"body-inner",children:[u.jsxs("div",{className:"description-box",children:[u.jsx("h4",{className:"section-label",children:"Project Overview"}),u.jsx("p",{className:"project-desc",children:m.description})]}),u.jsxs("div",{className:"content-blocks",children:[m.blocks?.length>0&&u.jsx("h4",{className:"section-label",children:"Gallery & Details"}),m.blocks?.map((g,x)=>u.jsx(l8,{block:g,onMediaClick:s},x))]})]})})})]},y))}),u.jsx("style",{children:`
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
          background: var(--bg-tertiary);
          border: 1px solid var(--border-light);
          border-radius: 14px;
          transition: all 0.3s ease;
          overflow: hidden;
        }

        .project-card:hover {
          border-color: var(--accent-blue);
          box-shadow: var(--shadow-md);
        }

        .project-card.expanded {
          border-color: var(--accent-blue);
          box-shadow: var(--shadow-md);
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
      `})]})},o8={ShoppingCart:Ny,MapPin:_r,Wrench:xi,BarChart3:gi,FileText:Dr,Calculator:p4,Settings:Od,Database:zd,Search:Gs,Calendar:jn,Users:Mi,Package:by,Truck:Ay,Mail:Dd,Bell:Wg,Clipboard:sy,FolderOpen:W4,Image:my,Link:vy,Printer:Sy,QrCode:jy,RefreshCw:Es,Send:Ty,Tag:wy,Upload:ky,Download:Ed,CreditCard:uy,DollarSign:dy,PieChart:kd,TrendingUp:Na,Activity:wr,Globe:Ni},c8="dldbsgml0611!",u8=({data:a})=>{const[s,l]=D.useState(!1),[o,d]=D.useState(!1),[h,f]=D.useState(null),[m,y]=D.useState(""),[g,x]=D.useState(!1),[b,S]=D.useState(""),w={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1}}},_={hidden:{opacity:0,y:20},visible:{opacity:1,y:0}},H=V=>{window.open(V,"_blank","noopener,noreferrer")},K=V=>{const le=`${window.location.origin+window.location.pathname}?tool=${V}`;window.open(le,`tool_${V}`,"width=1200,height=800,resizable=yes,scrollbars=yes")},G=V=>{s?K(V):(f(V),d(!0),y(""),S(""))},Z=V=>{V.preventDefault(),m===c8?(l(!0),d(!1),h&&K(h),f(null),y(""),S("")):S("비밀번호가 올바르지 않습니다.")},R=()=>{d(!1),f(null),y(""),S("")};return u.jsxs(Q.section,{className:"section webapps-section",variants:w,initial:"hidden",animate:"visible",children:[u.jsxs(Q.h2,{className:"section-title",variants:_,children:[u.jsx("span",{className:"title-icon",children:"🌐"}),a.title]}),u.jsx(Q.p,{className:"section-description",variants:_,children:a.description||"직접 제작하여 배포한 웹 애플리케이션들입니다. 카드를 클릭하면 새 창에서 실행됩니다."}),u.jsx(Q.div,{className:"webapps-grid",variants:w,children:a.items?.map((V,J)=>u.jsxs(Q.div,{className:"webapp-card",variants:_,whileHover:{y:-6,boxShadow:"var(--shadow-lg)"},whileTap:{scale:.98},onClick:()=>H(V.url),children:[u.jsxs("div",{className:"webapp-thumbnail",children:[V.thumbnail?u.jsx("img",{src:V.thumbnail,alt:V.title,className:"thumbnail-img"}):u.jsx("div",{className:"thumbnail-placeholder",children:u.jsx(Ni,{size:48})}),u.jsxs("div",{className:"webapp-overlay",children:[u.jsx(yi,{size:24}),u.jsx("span",{children:"열기"})]})]}),u.jsxs("div",{className:"webapp-content",children:[u.jsxs("div",{className:"webapp-header",children:[u.jsx("h3",{className:"webapp-title",children:V.title}),u.jsxs("div",{className:"webapp-badges",children:[V.isNew&&u.jsxs("span",{className:"new-badge",children:[u.jsx(Mr,{size:12}),"NEW"]}),V.requiresLogin&&u.jsxs("span",{className:"login-badge",children:[u.jsx(ja,{size:12}),"계정 필요"]})]})]}),u.jsx("p",{className:"webapp-description",children:V.description}),V.techStack&&u.jsx("div",{className:"webapp-tech",children:V.techStack.map((le,F)=>u.jsx("span",{className:"tech-tag",children:le},F))}),V.platform&&u.jsxs("div",{className:"webapp-platform",children:[u.jsx("span",{className:"platform-label",children:"Platform:"}),u.jsx("span",{className:"platform-value",children:V.platform})]})]})]},J))}),a.internalTools&&u.jsxs(u.Fragment,{children:[u.jsxs(Q.div,{className:"internal-tools-divider",variants:_,children:[u.jsx("div",{className:"divider-line"}),u.jsxs("div",{className:"divider-content",children:[u.jsx(xi,{size:16}),u.jsx("span",{children:a.internalTools.title}),!s&&u.jsx(ja,{size:14,className:"lock-icon"})]}),u.jsx("div",{className:"divider-line"})]}),u.jsxs(Q.p,{className:"internal-tools-description",variants:_,children:[a.internalTools.description,!s&&" (비밀번호 필요)"]}),u.jsx(Q.div,{className:"internal-tools-grid",variants:w,children:a.internalTools.items?.map((V,J)=>{const le=o8[V.icon]||xi;return u.jsxs(Q.div,{className:`internal-tool-card ${s?"":"locked"}`,variants:_,whileHover:{y:-4,boxShadow:"var(--shadow-md)"},whileTap:{scale:.98},onClick:()=>G(V.id),children:[u.jsx("div",{className:"tool-icon",children:u.jsx(le,{size:24})}),u.jsxs("div",{className:"tool-info",children:[u.jsx("h4",{className:"tool-title",children:V.title}),u.jsx("p",{className:"tool-description",children:V.description})]}),u.jsx("div",{className:"tool-action",children:s?u.jsx(yi,{size:16}):u.jsx(ja,{size:16})})]},J)})})]}),u.jsx(ji,{children:o&&u.jsx(Q.div,{className:"password-modal-overlay",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:R,children:u.jsxs(Q.div,{className:"password-modal",initial:{opacity:0,scale:.9,y:20},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.9,y:20},onClick:V=>V.stopPropagation(),children:[u.jsx("button",{className:"modal-close-btn",onClick:R,children:u.jsx(Ai,{size:20})}),u.jsx("div",{className:"modal-icon",children:u.jsx(ja,{size:32})}),u.jsx("h3",{className:"modal-title",children:"비밀번호 입력"}),u.jsx("p",{className:"modal-description",children:"내부 개발 도구에 접근하려면 비밀번호를 입력하세요."}),u.jsxs("form",{onSubmit:Z,children:[u.jsxs("div",{className:"password-input-wrapper",children:[u.jsx("input",{type:g?"text":"password",value:m,onChange:V=>y(V.target.value),placeholder:"비밀번호",className:"password-input",autoFocus:!0}),u.jsx("button",{type:"button",className:"toggle-password-btn",onClick:()=>x(!g),children:g?u.jsx(fy,{size:18}):u.jsx(hy,{size:18})})]}),b&&u.jsx("p",{className:"error-message",children:b}),u.jsx("button",{type:"submit",className:"submit-btn",children:"확인"})]})]})})}),u.jsx("style",{children:`
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
      `})]})},h1={elementary:{icon:xr,colorClass:"elementary",label:"초등학교"},middle:{icon:xr,colorClass:"middle",label:"중학교"},high:{icon:fj,colorClass:"high",label:"고등학교"},university:{icon:Vs,colorClass:"university",label:"대학교"},graduate:{icon:Vs,colorClass:"graduate",label:"대학원"},academy:{icon:ty,colorClass:"academy",label:"학원/교육기관"},bootcamp:{icon:d1,colorClass:"bootcamp",label:"부트캠프"},online:{icon:d1,colorClass:"online",label:"온라인 교육"},certification:{icon:qs,colorClass:"certification",label:"자격 과정"},other:{icon:xr,colorClass:"other",label:"기타"}},d8=({data:a})=>{const s={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1}}},l={hidden:{opacity:0,y:20},visible:{opacity:1,y:0}},o=d=>h1[d]||h1.university;return u.jsxs(Q.section,{className:"section education-section",variants:s,initial:"hidden",animate:"visible",children:[u.jsxs(Q.h2,{className:"section-title",variants:l,children:[u.jsx("span",{className:"title-icon",children:"🎓"}),a.title]}),u.jsx(Q.div,{className:"education-list",variants:s,children:a.items?.map((d,h)=>{const f=o(d.type),m=f.icon;return u.jsxs(Q.div,{className:"education-card",variants:l,whileHover:{y:-4,boxShadow:"var(--shadow-md)"},children:[u.jsx("div",{className:`edu-icon-wrapper ${f.colorClass}`,children:u.jsx(m,{size:24})}),u.jsxs("div",{className:"edu-content",children:[u.jsx("h3",{className:"school-name",children:d.school}),u.jsxs("p",{className:"edu-major",children:[d.major," · ",d.degree]}),u.jsxs("div",{className:"edu-meta",children:[d.location&&u.jsxs("span",{className:"edu-location",children:[u.jsx(_r,{size:14}),d.location]}),u.jsxs("span",{className:"edu-period",children:[u.jsx(jn,{size:14}),d.period]})]}),d.description&&u.jsx("p",{className:"edu-description",children:d.description})]})]},h)})}),u.jsx("style",{children:`
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
      `})]})},f8=({data:a})=>{const s={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.08}}},l={hidden:{opacity:0,scale:.95},visible:{opacity:1,scale:1}};return u.jsxs(Q.section,{className:"section certifications-section",variants:s,initial:"hidden",animate:"visible",children:[u.jsxs(Q.h2,{className:"section-title",variants:l,children:[u.jsx("span",{className:"title-icon",children:"🏆"}),a.title]}),u.jsx(Q.div,{className:"certifications-grid",variants:s,children:a.items?.map((o,d)=>u.jsxs(Q.div,{className:"cert-card",variants:l,whileHover:{y:-4,boxShadow:"var(--shadow-md)",borderColor:"var(--accent-blue)"},children:[u.jsx("div",{className:"cert-icon",children:o.icon||u.jsx(qs,{size:20})}),u.jsxs("div",{className:"cert-content",children:[u.jsx("h3",{className:"cert-name",children:o.name}),u.jsx("p",{className:"cert-issuer",children:o.issuer}),u.jsxs("span",{className:"cert-date",children:[u.jsx(jn,{size:12}),o.date]})]})]},d))}),u.jsx("style",{children:`
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
      `})]})},h8=()=>{const[a,s]=D.useState(()=>{const w=new Date;return w.setDate(w.getDate()-1),w.toISOString().split("T")[0]}),[l,o]=D.useState(null),[d,h]=D.useState(!1),[f,m]=D.useState(null),y=async()=>{h(!0),m(null),o(null);try{const _=`https://order.iroyal.kr/google/get_mall_daily_report?dt=${a}`,H=await fetch(_);if(!H.ok)throw new Error("API 요청 실패");const K=await H.json();K.result?o(K.data):m("데이터를 가져올 수 없습니다.")}catch(w){m(w.message||"오류가 발생했습니다.")}finally{h(!1)}},g=w=>new Intl.NumberFormat("ko-KR",{style:"currency",currency:"KRW",maximumFractionDigits:0}).format(w),x=w=>new Intl.NumberFormat("ko-KR").format(w),b={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1}}},S={hidden:{opacity:0,y:20},visible:{opacity:1,y:0}};return u.jsxs(Q.section,{className:"section mall-report-section",variants:b,initial:"hidden",animate:"visible",children:[u.jsxs(Q.h2,{className:"section-title",variants:S,children:[u.jsx("span",{className:"title-icon",children:"🛒"}),"자사몰 매출 확인"]}),u.jsx(Q.p,{className:"section-description",variants:S,children:"날짜를 선택하고 조회 버튼을 클릭하면 해당 날짜의 매출 데이터를 확인할 수 있습니다."}),u.jsxs(Q.div,{className:"date-picker-container",variants:S,children:[u.jsxs("div",{className:"date-input-wrapper",children:[u.jsx(jn,{size:20,className:"date-icon"}),u.jsx("input",{type:"date",value:a,onChange:w=>s(w.target.value),className:"date-input"})]}),u.jsx("button",{onClick:y,disabled:d,className:"fetch-button",children:d?u.jsxs(u.Fragment,{children:[u.jsx(Cd,{size:18,className:"spinner"}),"조회 중..."]}):u.jsxs(u.Fragment,{children:[u.jsx(Gs,{size:18}),"조회하기"]})})]}),f&&u.jsxs(Q.div,{className:"error-message",variants:S,children:["⚠️ ",f]}),l&&u.jsxs(Q.div,{className:"report-results",initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{duration:.3},children:[u.jsxs("h3",{className:"results-title",children:["📊 ",l.DT," 매출 리포트"]}),u.jsxs("div",{className:"stats-grid",children:[u.jsxs("div",{className:"stat-card sales",children:[u.jsx("div",{className:"stat-icon",children:u.jsx(Na,{size:28})}),u.jsxs("div",{className:"stat-content",children:[u.jsx("span",{className:"stat-label",children:"매출액"}),u.jsx("span",{className:"stat-value",children:g(l.PO)})]})]}),u.jsxs("div",{className:"stat-card visitors",children:[u.jsx("div",{className:"stat-icon",children:u.jsx(Mi,{size:28})}),u.jsxs("div",{className:"stat-content",children:[u.jsx("span",{className:"stat-label",children:"방문자 수"}),u.jsxs("span",{className:"stat-value",children:[x(l.VISITORS),"명"]})]})]})]}),u.jsxs("div",{className:"json-container",children:[u.jsx("h4",{className:"json-title",children:"📋 원본 JSON 데이터"}),u.jsx("pre",{className:"json-content",children:JSON.stringify({result:!0,data:l},null,2)})]})]}),u.jsx("style",{children:`
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
      `})]})},p8=()=>{const[a,s]=D.useState("경기도 화성시 시청로 895-20"),[l,o]=D.useState(!1),[d,h]=D.useState(null),[f,m]=D.useState(null),[y,g]=D.useState(!1),x=async()=>{if(!a.trim()){h("주소를 입력해주세요.");return}o(!0),h(null),m(null);try{const G=await fetch(`https://dapi.kakao.com/v2/local/search/address.json?query=${encodeURIComponent(a)}`,{headers:{Authorization:"KakaoAK a9bd7c56d3bb0458de036cc050c65041"}});if(!G.ok)throw new Error("API 요청 실패");const Z=await G.json();Z.documents&&Z.documents.length>0?m(Z.documents[0]):h("검색 결과가 없습니다.")}catch(H){h(H.message||"오류가 발생했습니다.")}finally{o(!1)}},b=()=>{if(f){const H=`${f.y}, ${f.x}`;navigator.clipboard.writeText(H),g(!0),setTimeout(()=>g(!1),2e3)}},S=()=>{if(f){const H=`https://www.google.com/maps?q=${f.y},${f.x}`;window.open(H,"_blank","noopener,noreferrer")}},w={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1}}},_={hidden:{opacity:0,y:20},visible:{opacity:1,y:0}};return u.jsxs(Q.section,{className:"section address-map-section",variants:w,initial:"hidden",animate:"visible",children:[u.jsxs(Q.h2,{className:"section-title",variants:_,children:[u.jsx("span",{className:"title-icon",children:"📍"}),"주소 → 좌표 변환"]}),u.jsx(Q.p,{className:"section-description",variants:_,children:"주소를 입력하면 좌표(위도, 경도)를 조회하고 구글 지도에서 위치를 확인할 수 있습니다."}),u.jsxs(Q.div,{className:"search-container",variants:_,children:[u.jsxs("div",{className:"search-input-wrapper",children:[u.jsx(_r,{size:20,className:"search-icon"}),u.jsx("input",{type:"text",value:a,onChange:H=>s(H.target.value),onKeyPress:H=>H.key==="Enter"&&x(),placeholder:"주소를 입력하세요 (예: 서울시 강남구 테헤란로 123)",className:"search-input"})]}),u.jsx("button",{onClick:x,disabled:l,className:"search-button",children:l?u.jsxs(u.Fragment,{children:[u.jsx(Cd,{size:18,className:"spinner"}),"검색 중..."]}):u.jsxs(u.Fragment,{children:[u.jsx(Gs,{size:18}),"검색"]})})]}),d&&u.jsxs(Q.div,{className:"error-message",variants:_,children:["⚠️ ",d]}),f&&u.jsxs(Q.div,{className:"result-container",initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{duration:.3},children:[u.jsxs("div",{className:"address-info",children:[u.jsx("h3",{className:"result-title",children:"📌 검색 결과"}),u.jsxs("div",{className:"info-row",children:[u.jsx("span",{className:"info-label",children:"주소"}),u.jsx("span",{className:"info-value",children:f.address_name})]}),f.road_address&&u.jsxs("div",{className:"info-row",children:[u.jsx("span",{className:"info-label",children:"도로명"}),u.jsx("span",{className:"info-value",children:f.road_address.address_name})]}),f.address&&u.jsxs("div",{className:"info-row",children:[u.jsx("span",{className:"info-label",children:"지번"}),u.jsx("span",{className:"info-value",children:f.address.address_name})]})]}),u.jsxs("div",{className:"coordinates-card",children:[u.jsxs("div",{className:"coord-header",children:[u.jsx("h4",{children:"🌐 좌표 정보"}),u.jsxs("button",{onClick:b,className:"copy-button",title:"좌표 복사",children:[y?u.jsx(ny,{size:16}):u.jsx(oy,{size:16}),y?"복사됨!":"복사"]})]}),u.jsxs("div",{className:"coord-grid",children:[u.jsxs("div",{className:"coord-item",children:[u.jsx("span",{className:"coord-label",children:"위도 (Latitude)"}),u.jsx("span",{className:"coord-value",children:f.y})]}),u.jsxs("div",{className:"coord-item",children:[u.jsx("span",{className:"coord-label",children:"경도 (Longitude)"}),u.jsx("span",{className:"coord-value",children:f.x})]})]})]}),u.jsxs("button",{onClick:S,className:"map-button google",children:[u.jsx(Q6,{size:20}),"구글 지도에서 보기"]}),u.jsx("div",{className:"map-embed",children:u.jsx("iframe",{title:"Google Map",width:"100%",height:"400",style:{border:0,borderRadius:"12px"},loading:"lazy",allowFullScreen:!0,referrerPolicy:"no-referrer-when-downgrade",src:`https://maps.google.com/maps?q=${f.y},${f.x}&z=17&output=embed`})}),u.jsxs("div",{className:"json-container",children:[u.jsx("h4",{className:"json-title",children:"📋 API 응답 데이터"}),u.jsx("pre",{className:"json-content",children:JSON.stringify(f,null,2)})]})]}),u.jsx("style",{children:`
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
      `})]})},m8={Brain:Ad,Code2:Ti,Palette:I6,Zap:zy,GraduationCap:Vs,Newspaper:F6,Globe:Ni,Database:zd,Server:Rd,Cloud:ry,Wrench:xi,Terminal:My,Smartphone:Vd,Monitor:_d,Cpu:cy,Layers:gy,Box:ey,Settings:Od,Shield:bj,Lock:ja,Key:j6,Search:Gs,Bookmark:Ig,BookOpen:xr,FileText:Dr,Folder:e6,Image:my,Video:Gj,Music:X6,Camera:y4,Mic:B6,Play:sj,Star:Aj,Heart:m6,ThumbsUp:Rj,MessageSquare:U6,Mail:Dd,Bell:Wg,Share2:xj,Send:Ty,Calendar:jn,Clock:ly,MapPin:_r,Home:y6,Building:ty,Users:Mi,Briefcase:Ys,ShoppingCart:Ny,CreditCard:uy,DollarSign:dy,TrendingUp:Na,BarChart3:gi,PieChart:kd,Activity:wr,Target:wi,Award:qs,Gift:s6,Package:by,Truck:Ay,Lightbulb:xy,Rocket:Rr,Flame:Z4,Sparkles:Mr,Coffee:C4,Wifi:Kj,Download:Ed,Upload:ky,Link:vy,RefreshCw:Es,Grid:h6,List:z6,Edit:wj,Trash2:Vj,Copy:oy,Clipboard:sy,Check:ny,X:Ai,Plus:Qu,AlertCircle:iy,Info:b6,HelpCircle:w4,QrCode:jy,Printer:Sy,Gamepad2:a6},g8=({data:a})=>{const[s,l]=D.useState(a.categories?.reduce((m,y)=>({...m,[y.name]:!0}),{})||{}),o={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.08}}},d={hidden:{opacity:0,y:20},visible:{opacity:1,y:0}},h=m=>{l(y=>({...y,[m]:!y[m]}))},f=m=>{window.open(m,"_blank","noopener,noreferrer")};return u.jsxs(Q.section,{className:"section bookmarks-section",variants:o,initial:"hidden",animate:"visible",children:[u.jsxs(Q.h2,{className:"section-title",variants:d,children:[u.jsx("span",{className:"title-icon",children:"🔖"}),a.title]}),u.jsx(Q.p,{className:"section-description",variants:d,children:a.description}),u.jsx(Q.div,{className:"categories-container",variants:o,children:a.categories?.map((m,y)=>{const g=m8[m.icon]||Ni,x=s[m.name];return u.jsxs(Q.div,{className:"category-block",variants:d,children:[u.jsxs("button",{className:"category-header",onClick:()=>h(m.name),style:{"--category-color":m.color},children:[u.jsx("div",{className:"category-icon",style:{background:m.color},children:u.jsx(g,{size:20})}),u.jsx("span",{className:"category-name",children:m.name}),u.jsx("span",{className:"category-count",children:m.items?.length||0}),u.jsx("div",{className:"category-toggle",children:x?u.jsx(Cr,{size:18}):u.jsx(ay,{size:18})})]}),u.jsx(Q.div,{className:"category-items",initial:!1,animate:{height:x?"auto":0,opacity:x?1:0},transition:{duration:.3,ease:"easeInOut"},children:m.items?.map((b,S)=>u.jsxs(Q.div,{className:"bookmark-item",whileHover:{x:4},onClick:()=>f(b.url),children:[u.jsxs("div",{className:"bookmark-info",children:[u.jsx("h4",{className:"bookmark-title",children:b.title}),u.jsx("p",{className:"bookmark-description",children:b.description})]}),u.jsx("div",{className:"bookmark-action",children:u.jsx(yi,{size:14})})]},S))})]},y)})}),u.jsx("style",{children:`
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
      `})]})},y8="1Wjw9wakam_vAf2rPF3fkBABxCE3EpWqN9LPmGBu_jeU",x8="1uf0cixyr6vmKi4LQt6EfypHAG5Qgywtxog1lBX0hXIE",Qt={PROFILE:"profile",ABOUT:"about",TECH_STACK:"techStack",EXPERIENCE:"Experience",PROJECTS:"projects",EDUCATION:"Education",CERTIFICATIONS:"Certifications",BOOKMARKS:"bookmarks",LIVE_DEMO:"liveDemo",INTERNAL_TOOLS:"internalTools",RESOURCES:"Resources",GLOSSARY:"용어집"},v8=a=>`https://docs.google.com/spreadsheets/d/${y8}/gviz/tq?tqx=out:csv&sheet=${encodeURIComponent(a)}&headers=1`,b8=()=>`https://docs.google.com/spreadsheets/d/${x8}/gviz/tq?tqx=out:csv&headers=1`,S8="https://script.google.com/macros/s/AKfycbxgGEYs6Byxv5R5oHAvDp3deE8HT77-rF60P6mHfFaDhfHGMjLYD4Q5qPsaBJu08HIS/exec";async function Cy(a){const s={...a,memorized:a.memorized?"TRUE":"FALSE"},o=await(await fetch(S8,{method:"POST",headers:{"Content-Type":"text/plain"},body:JSON.stringify(s)})).json();if(!o.success)throw new Error(o.error||"요청에 실패했습니다.");return o}function j8(a){return Cy({action:"add",...a})}function T8(a,s){return Cy({action:"update",originalTerm:a,...s})}const p1={domain:"",term:"",abbr:"",description:"",importance:"",memorized:!1,url:""};function m1({isOpen:a,onClose:s,onSubmit:l,initialData:o,domains:d,importances:h,isSubmitting:f,error:m}){const[y,g]=D.useState(p1);D.useEffect(()=>{a&&g(o?{...o}:p1)},[a,o]);const x=w=>{const{name:_,value:H,type:K,checked:G}=w.target;g(Z=>({...Z,[_]:K==="checkbox"?G:H}))},b=w=>{w.preventDefault(),l(y)};if(!a)return null;const S=!!o;return u.jsx("div",{className:"glossary-modal-overlay",onClick:w=>w.target===w.currentTarget&&s(),children:u.jsxs("div",{className:"glossary-modal",role:"dialog","aria-modal":"true",children:[u.jsxs("div",{className:"glossary-modal-header",children:[u.jsx("h3",{children:S?"용어 수정":"용어 등록"}),u.jsx("button",{className:"modal-close-btn",onClick:s,"aria-label":"닫기",children:u.jsx(Ai,{size:20})})]}),u.jsxs("form",{onSubmit:b,className:"glossary-form",children:[u.jsxs("div",{className:"form-grid",children:[u.jsxs("div",{className:"form-field",children:[u.jsxs("label",{htmlFor:"gf-domain",children:["분야 ",u.jsx("span",{className:"required",children:"*"})]}),u.jsx("input",{id:"gf-domain",type:"text",name:"domain",value:y.domain,onChange:x,list:"gf-domain-list",required:!0,placeholder:"예: IT, 마케팅..."}),u.jsx("datalist",{id:"gf-domain-list",children:d.filter(w=>w!=="All").map(w=>u.jsx("option",{value:w},w))})]}),u.jsxs("div",{className:"form-field",children:[u.jsxs("label",{htmlFor:"gf-term",children:["용어 ",u.jsx("span",{className:"required",children:"*"})]}),u.jsx("input",{id:"gf-term",type:"text",name:"term",value:y.term,onChange:x,required:!0,placeholder:"용어명"})]}),u.jsxs("div",{className:"form-field",children:[u.jsx("label",{htmlFor:"gf-abbr",children:"약어/원문"}),u.jsx("input",{id:"gf-abbr",type:"text",name:"abbr",value:y.abbr,onChange:x,placeholder:"약어 또는 영문명"})]}),u.jsxs("div",{className:"form-field",children:[u.jsx("label",{htmlFor:"gf-importance",children:"중요도"}),u.jsx("input",{id:"gf-importance",type:"text",name:"importance",value:y.importance,onChange:x,list:"gf-importance-list",placeholder:"예: 높음, 중간, 낮음"}),u.jsx("datalist",{id:"gf-importance-list",children:[...h.filter(w=>w!=="All"),...["★★★★★","★★☆☆☆","★☆☆☆☆"].filter(w=>!h.includes(w))].map(w=>u.jsx("option",{value:w},w))})]})]}),u.jsxs("div",{className:"form-field",children:[u.jsx("label",{htmlFor:"gf-desc",children:"설명"}),u.jsx("textarea",{id:"gf-desc",name:"description",value:y.description,onChange:x,rows:3,placeholder:"용어에 대한 설명을 입력하세요"})]}),u.jsxs("div",{className:"form-field",children:[u.jsx("label",{htmlFor:"gf-url",children:"참고 URL"}),u.jsx("input",{id:"gf-url",type:"text",name:"url",value:y.url,onChange:x,placeholder:"https://..."})]}),u.jsxs("label",{className:"checkbox-label",children:[u.jsx("input",{type:"checkbox",name:"memorized",checked:y.memorized,onChange:x}),"암기 완료"]}),m&&u.jsxs("div",{className:"form-error",children:[u.jsx(iy,{size:16}),u.jsx("span",{children:m})]}),u.jsxs("div",{className:"form-actions",children:[u.jsx("button",{type:"button",className:"btn-cancel",onClick:s,disabled:f,children:"취소"}),u.jsxs("button",{type:"submit",className:"btn-submit",disabled:f,children:[f&&u.jsx(Cd,{size:16,className:"icon-spin"}),f?"저장 중...":S?"수정 완료":"등록"]})]})]})]})})}const N8=({data:a})=>{const[s,l]=D.useState(""),[o,d]=D.useState("All"),[h,f]=D.useState("All"),[m,y]=D.useState("All"),[g,x]=D.useState([]),[b,S]=D.useState(!1),[w,_]=D.useState(null),[H,K]=D.useState(""),[G,Z]=D.useState(!1),[R,V]=D.useState(null),[J,le]=D.useState(null);D.useEffect(()=>{a&&x(a)},[a]);const F=te=>{le(te),setTimeout(()=>le(null),3e3)},Y=D.useMemo(()=>{const te=new Set(g.map(de=>de.domain).filter(Boolean));return["All",...Array.from(te)]},[g]),ee=D.useMemo(()=>{const te=new Set(g.map(de=>de.importance).filter(Boolean));return["★★★★★","★★☆☆☆","★☆☆☆☆"].forEach(de=>te.add(de)),["All",...Array.from(te)]},[g]),ce=D.useMemo(()=>g.filter(de=>{const E=s.toLowerCase(),X=(de.term||"").toLowerCase().includes(E)||(de.abbr||"").toLowerCase().includes(E)||(de.description||"").toLowerCase().includes(E),P=o==="All"||de.domain===o,ie=h==="All"||de.importance===h;let se=!0;return m==="True"&&(se=de.memorized===!0),m==="False"&&(se=de.memorized===!1),X&&P&&ie&&se}).sort((de,E)=>{const X=String(de.domain||"").toLowerCase(),P=String(E.domain||"").toLowerCase();if(X<P)return-1;if(X>P)return 1;const ie=String(de.term||"").toLowerCase(),se=String(E.term||"").toLowerCase();return ie<se?-1:ie>se?1:0}),[g,s,o,h,m]),pe=()=>{_(null),K(""),V(null),S(!0)},je=te=>{_({...te}),K(te.term),V(null),S(!0)},$e=async te=>{Z(!0),V(null);try{w?(await T8(H,te),x(de=>de.map(E=>E.term===H?{...te}:E)),F("용어가 수정되었습니다.")):(await j8(te),x(de=>[...de,te]),F("용어가 등록되었습니다.")),S(!1)}catch(de){V(de.message)}finally{Z(!1)}};return!a||a.length===0?u.jsxs("section",{className:"section glossary-section",children:[u.jsxs("div",{className:"section-header",children:[u.jsx("h2",{children:"용어집 (Glossary)"}),u.jsxs("button",{className:"btn-add-term",onClick:pe,children:[u.jsx(Qu,{size:16})," 용어 등록"]})]}),u.jsx("div",{className:"empty-state",children:"용어집 데이터가 없습니다."}),u.jsx(m1,{isOpen:b,onClose:()=>S(!1),onSubmit:$e,initialData:w,domains:[],importances:[],isSubmitting:G,error:R})]}):u.jsxs("section",{className:"section glossary-section",children:[u.jsxs("div",{className:"section-header glossary-section-header",children:[u.jsxs("div",{children:[u.jsx("h2",{children:"용어집 (Glossary)"}),u.jsx("p",{className:"section-description",children:"IT 분야 및 업계 관련 용어, 약어 등을 정리한 공간입니다."})]}),u.jsxs("button",{className:"btn-add-term",onClick:pe,children:[u.jsx(Qu,{size:16})," 용어 등록"]})]}),u.jsxs("div",{className:"glossary-controls",children:[u.jsxs("div",{className:"search-bar",children:[u.jsx(Gs,{size:18,className:"search-icon"}),u.jsx("input",{type:"text",placeholder:"용어, 약어, 설명 검색...",value:s,onChange:te=>l(te.target.value),className:"search-input"})]}),u.jsxs("div",{className:"filter-group",children:[u.jsxs("div",{className:"filter-item",children:[u.jsxs("label",{children:[u.jsx(Tu,{size:14})," 분야"]}),u.jsx("select",{value:o,onChange:te=>d(te.target.value),className:"filter-select",children:Y.map(te=>u.jsx("option",{value:te,children:te},te))})]}),u.jsxs("div",{className:"filter-item",children:[u.jsxs("label",{children:[u.jsx(Tu,{size:14})," 중요도"]}),u.jsx("select",{value:h,onChange:te=>f(te.target.value),className:"filter-select",children:ee.map(te=>u.jsx("option",{value:te,children:te},te))})]}),u.jsxs("div",{className:"filter-item",children:[u.jsxs("label",{children:[u.jsx(Tu,{size:14})," 암기 여부"]}),u.jsxs("select",{value:m,onChange:te=>y(te.target.value),className:"filter-select",children:[u.jsx("option",{value:"All",children:"전체"}),u.jsx("option",{value:"True",children:"Y"}),u.jsx("option",{value:"False",children:"N"})]})]})]})]}),u.jsxs("div",{className:"glossary-summary",children:["총 ",u.jsx("strong",{children:ce.length}),"개의 용어가 있습니다. ",s&&"(검색 결과)"]}),u.jsx("div",{className:"glossary-table-wrapper",children:u.jsxs("table",{className:"glossary-table",children:[u.jsx("thead",{children:u.jsxs("tr",{children:[u.jsx("th",{children:"분야"}),u.jsx("th",{children:"용어"}),u.jsx("th",{children:"약어/원문"}),u.jsx("th",{children:"설명"}),u.jsx("th",{children:"중요도"}),u.jsx("th",{children:"암기"}),u.jsx("th",{children:"참고"}),u.jsx("th",{className:"col-edit-header"})]})}),u.jsx("tbody",{children:ce.length>0?ce.map((te,de)=>u.jsxs("tr",{className:te.memorized?"memorized-row":"",children:[u.jsx("td",{className:"col-domain",children:u.jsx("span",{className:"domain-badge",children:te.domain})}),u.jsx("td",{className:"col-term",children:te.term}),u.jsx("td",{className:"col-abbr",children:te.abbr}),u.jsx("td",{className:"col-desc",children:te.description}),u.jsx("td",{className:"col-importance",children:te.importance}),u.jsx("td",{className:"col-memorized",children:te.memorized?"Y":"N"}),u.jsx("td",{className:"col-url",children:te.url&&te.url!=="[URL]"&&u.jsx("a",{href:te.url,target:"_blank",rel:"noopener noreferrer",className:"link-button",title:"참고 링크 열기",children:u.jsx(yi,{size:16})})}),u.jsx("td",{className:"col-edit",children:u.jsx("button",{className:"edit-btn",onClick:()=>je(te),title:"수정",children:u.jsx(aj,{size:14})})})]},de)):u.jsx("tr",{children:u.jsx("td",{colSpan:"8",className:"no-results",children:"조건에 맞는 용어가 없습니다."})})})]})}),u.jsx(m1,{isOpen:b,onClose:()=>!G&&S(!1),onSubmit:$e,initialData:w,domains:Y,importances:ee,isSubmitting:G,error:R}),J&&u.jsx("div",{className:"glossary-toast",children:J})]})},w8={Brain:Ad,Zap:zy,Server:Rd,Wrench:xi},M8=({data:a})=>{const[s,l]=D.useState(a.categories?.reduce((m,y)=>({...m,[y.name]:!0}),{})||{}),o={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.08}}},d={hidden:{opacity:0,y:20},visible:{opacity:1,y:0}},h=m=>{l(y=>({...y,[m]:!y[m]}))},f=m=>{window.open(m,"_blank","noopener,noreferrer")};return u.jsxs(Q.section,{className:"section resources-section",variants:o,initial:"hidden",animate:"visible",children:[u.jsxs(Q.h2,{className:"section-title",variants:d,children:[u.jsx("span",{className:"title-icon",children:"📚"}),a.title]}),u.jsx(Q.p,{className:"section-description",variants:d,children:a.description}),u.jsx(Q.div,{className:"resources-list",variants:o,children:a.categories?.map((m,y)=>{const g=w8[m.icon]||Ni,x=s[m.name];return u.jsxs(Q.div,{className:"resource-category",variants:d,children:[u.jsxs("button",{className:"category-header",onClick:()=>h(m.name),style:{"--category-color":m.color},children:[u.jsx("div",{className:"category-icon",style:{background:m.color},children:u.jsx(g,{size:20})}),u.jsx("h3",{className:"category-name",children:m.name}),u.jsxs("span",{className:"category-count",children:[m.items?.length||0,"개"]}),u.jsx("div",{className:"category-toggle",children:x?u.jsx(Cr,{size:18}):u.jsx(ay,{size:18})})]}),u.jsx(Q.div,{className:"category-items",initial:!1,animate:{height:x?"auto":0,opacity:x?1:0},transition:{duration:.3,ease:"easeInOut"},children:m.items?.map((b,S)=>u.jsxs(Q.div,{className:"resource-item",whileHover:{x:4},onClick:()=>f(b.docUrl),children:[u.jsx("div",{className:"resource-icon",children:u.jsx(Dr,{size:18})}),u.jsxs("div",{className:"resource-info",children:[u.jsxs("h4",{className:"resource-title",children:[b.type&&u.jsx("span",{className:"resource-type-badge","data-type":b.type,children:b.type}),b.title]}),u.jsx("p",{className:"resource-description",children:b.description}),u.jsxs("div",{className:"resource-meta",children:[b.createdDate&&u.jsxs("span",{className:"resource-date",children:[u.jsx(jn,{size:10}),"등록일: ",b.createdDate]}),b.tags&&b.tags.map((w,_)=>u.jsxs("span",{className:"tag",children:[u.jsx(wy,{size:10}),w]},_))]})]}),u.jsx("div",{className:"resource-action",children:u.jsx(yi,{size:14})})]},S))})]},y)})}),u.jsx("style",{children:`
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
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }

        .resource-type-badge {
          display: inline-block;
          font-size: 0.65rem;
          font-weight: 600;
          padding: 2px 8px;
          background: #6b7280; /* 기본값: 회색 */
          color: #fff;
          border-radius: 4px;
          white-space: nowrap;
          flex-shrink: 0;
        }

        .resource-type-badge[data-type="교육"] {
          background: #3b82f6; /* 파랑 */
        }

        .resource-type-badge[data-type="발표"] {
          background: #ef4444; /* 빨강 */
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
      `})]})},A8="dldbsgml0611!",k8="https://script.google.com/macros/s/AKfycbz8J8B9bcqimeLoy_5VSpKgJiHHF5ajwocNR6bYylhju3TrVOiFoL6FVYqL5a65rQQ36g/exec",z8=()=>{const[a,s]=D.useState(!1),[l,o]=D.useState(!0),[d,h]=D.useState(""),[f,m]=D.useState(!1),[y,g]=D.useState(""),[x,b]=D.useState([]),[S,w]=D.useState(!1),[_,H]=D.useState(""),K={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1}}},G={hidden:{opacity:0,y:20},visible:{opacity:1,y:0}},Z=async()=>{w(!0),H("");try{const ee=await(await fetch(`${k8}?action=getLogs`)).json();ee.success?b(ee.logs||[]):H("로그 데이터를 불러올 수 없습니다.")}catch(Y){console.error("로그 조회 실패:",Y),H("로그 데이터를 불러오는 중 오류가 발생했습니다.")}finally{w(!1)}};D.useEffect(()=>{a&&Z()},[a]);const R=Y=>{if(!Y)return{date:"unknown",hour:null,formatted:"-"};let ee;const ce=String(Y);if(ce.includes("T")?ee=new Date(ce):ce.includes("-")&&ce.includes(":")?ee=new Date(ce.replace(" ","T")+"+09:00"):ee=new Date(ce),isNaN(ee.getTime()))return{date:"unknown",hour:null,formatted:ce};const pe=new Date(ee.toLocaleString("en-US",{timeZone:"Asia/Seoul"})),je=pe.getFullYear(),$e=String(pe.getMonth()+1).padStart(2,"0"),te=String(pe.getDate()).padStart(2,"0"),de=pe.getHours(),E=String(pe.getMinutes()).padStart(2,"0");return String(pe.getSeconds()).padStart(2,"0"),{date:`${je}-${$e}-${te}`,dateLabel:`${$e}/${te}`,hour:de,formatted:`${$e}/${te} ${String(de).padStart(2,"0")}:${E}`}},V=D.useMemo(()=>{if(x.length===0)return null;const Y={},ee={},ce={},pe={},je={desktop:0,mobile:0,tablet:0},$e=new Set;x.forEach(ie=>{const se=R(ie.datetime),N=ie.section||"unknown";N!=="_initial_load"&&(Y[N]=(Y[N]||0)+1),se.date!=="unknown"&&(ee[se.date]||(ee[se.date]={count:0,label:se.dateLabel}),ee[se.date].count++),se.hour!==null&&(ce[se.hour]=(ce[se.hour]||0)+1);const L=ie.ip||"unknown";L!=="unknown"&&(pe[L]=(pe[L]||0)+1);const $=(ie.userAgent||"").toLowerCase();$.includes("mobile")||$.includes("android")||$.includes("iphone")?je.mobile++:$.includes("tablet")||$.includes("ipad")?je.tablet++:je.desktop++,ie.sessionId&&$e.add(ie.sessionId)});const te=Object.entries(Y).sort((ie,se)=>se[1]-ie[1]).slice(0,8),E=Object.keys(ee).sort().slice(-7).map(ie=>({date:ee[ie].label||ie.slice(5),count:ee[ie].count})),X=Object.entries(ce).sort((ie,se)=>se[1]-ie[1])[0],P=Object.entries(pe).sort((ie,se)=>se[1]-ie[1]).slice(0,10);return{totalViews:x.length,uniqueVisitors:$e.size,topSections:te,dailyData:E,deviceCounts:je,topIPs:P,uniqueIPs:Object.keys(pe).length,peakHour:X?`${X[0]}시`:"-",averageDaily:E.length>0?Math.round(E.reduce((ie,se)=>ie+se.count,0)/E.length):0}},[x]),J=Y=>({about:"소개",techStack:"기술 스택",experience:"경력",projects:"프로젝트",webApps:"라이브 데모",education:"학력",certifications:"자격증",resources:"리소스",bookmarks:"북마크"})[Y]||Y,le=Y=>{Y.preventDefault(),d===A8?(s(!0),o(!1),h(""),g("")):g("비밀번호가 올바르지 않습니다.")},F=()=>{o(!1)};return a?S?u.jsxs(Q.section,{className:"section analytics-section",variants:K,initial:"hidden",animate:"visible",children:[u.jsxs(Q.h2,{className:"section-title",variants:G,children:[u.jsx("span",{className:"title-icon",children:"📊"}),"방문자 분석"]}),u.jsxs("div",{className:"loading-state",children:[u.jsx(Es,{size:32,className:"spin"}),u.jsx("p",{children:"데이터를 불러오는 중..."})]}),u.jsx("style",{children:fr})]}):_?u.jsxs(Q.section,{className:"section analytics-section",variants:K,initial:"hidden",animate:"visible",children:[u.jsxs(Q.h2,{className:"section-title",variants:G,children:[u.jsx("span",{className:"title-icon",children:"📊"}),"방문자 분석"]}),u.jsxs("div",{className:"error-state",children:[u.jsx("p",{children:_}),u.jsxs("button",{className:"retry-btn",onClick:Z,children:[u.jsx(Es,{size:16}),"다시 시도"]})]}),u.jsx("style",{children:fr})]}):u.jsxs("section",{className:"section analytics-section",children:[u.jsxs("div",{className:"section-header",children:[u.jsxs("h2",{className:"section-title",children:[u.jsx("span",{className:"title-icon",children:"📊"}),"방문자 분석"]}),u.jsxs("button",{className:"refresh-btn",onClick:Z,disabled:S,children:[u.jsx(Es,{size:16,className:S?"spin":""}),"새로고침"]})]}),V&&u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"stats-grid",children:[u.jsxs("div",{className:"stat-card",children:[u.jsx("div",{className:"stat-icon views",children:u.jsx(wr,{size:24})}),u.jsxs("div",{className:"stat-content",children:[u.jsx("span",{className:"stat-value",children:V.totalViews.toLocaleString()}),u.jsx("span",{className:"stat-label",children:"총 페이지뷰"})]})]}),u.jsxs("div",{className:"stat-card",children:[u.jsx("div",{className:"stat-icon visitors",children:u.jsx(Mi,{size:24})}),u.jsxs("div",{className:"stat-content",children:[u.jsx("span",{className:"stat-value",children:V.uniqueVisitors.toLocaleString()}),u.jsx("span",{className:"stat-label",children:"순 방문자"})]})]}),u.jsxs("div",{className:"stat-card",children:[u.jsx("div",{className:"stat-icon average",children:u.jsx(Na,{size:24})}),u.jsxs("div",{className:"stat-content",children:[u.jsx("span",{className:"stat-value",children:V.averageDaily}),u.jsx("span",{className:"stat-label",children:"일평균 조회"})]})]}),u.jsxs("div",{className:"stat-card",children:[u.jsx("div",{className:"stat-icon peak",children:u.jsx(ly,{size:24})}),u.jsxs("div",{className:"stat-content",children:[u.jsx("span",{className:"stat-value",children:V.peakHour}),u.jsx("span",{className:"stat-label",children:"피크 시간대"})]})]})]}),u.jsxs("div",{className:"charts-grid",children:[u.jsxs("div",{className:"chart-card",children:[u.jsxs("h3",{className:"chart-title",children:[u.jsx(gi,{size:18}),"인기 섹션 TOP 8"]}),u.jsx("div",{className:"bar-chart",children:V.topSections.map(([Y,ee],ce)=>{const pe=V.topSections[0][1],je=ee/pe*100;return u.jsxs("div",{className:"bar-item",children:[u.jsxs("div",{className:"bar-label",children:[u.jsxs("span",{className:"bar-rank",children:["#",ce+1]}),u.jsx("span",{className:"bar-name",children:J(Y)}),u.jsx("span",{className:"bar-count",children:ee})]}),u.jsx("div",{className:"bar-track",children:u.jsx(Q.div,{className:"bar-fill",initial:{width:0},animate:{width:`${je}%`},transition:{delay:ce*.1,duration:.5}})})]},Y)})})]}),u.jsxs("div",{className:"chart-card",children:[u.jsxs("h3",{className:"chart-title",children:[u.jsx(jn,{size:18}),"최근 7일 방문 추이"]}),u.jsx("div",{className:"line-chart",children:V.dailyData.map((Y,ee)=>{const ce=Math.max(...V.dailyData.map(je=>je.count)),pe=ce>0?Y.count/ce*100:0;return u.jsxs("div",{className:"line-bar-item",children:[u.jsx(Q.div,{className:"line-bar",initial:{height:0},animate:{height:`${Math.max(pe,5)}%`},transition:{delay:ee*.1,duration:.5},children:u.jsx("span",{className:"line-bar-value",children:Y.count})}),u.jsx("span",{className:"line-bar-label",children:Y.date})]},Y.date)})})]}),u.jsxs("div",{className:"chart-card device-chart",children:[u.jsxs("h3",{className:"chart-title",children:[u.jsx(kd,{size:18}),"디바이스 분포"]}),u.jsxs("div",{className:"device-stats",children:[u.jsxs("div",{className:"device-item",children:[u.jsx("div",{className:"device-icon desktop",children:u.jsx(_d,{size:24})}),u.jsxs("div",{className:"device-info",children:[u.jsx("span",{className:"device-name",children:"데스크톱"}),u.jsx("span",{className:"device-count",children:V.deviceCounts.desktop})]}),u.jsx("div",{className:"device-bar",children:u.jsx(Q.div,{className:"device-fill desktop",initial:{width:0},animate:{width:`${V.deviceCounts.desktop/V.totalViews*100}%`},transition:{duration:.5}})})]}),u.jsxs("div",{className:"device-item",children:[u.jsx("div",{className:"device-icon mobile",children:u.jsx(Vd,{size:24})}),u.jsxs("div",{className:"device-info",children:[u.jsx("span",{className:"device-name",children:"모바일"}),u.jsx("span",{className:"device-count",children:V.deviceCounts.mobile})]}),u.jsx("div",{className:"device-bar",children:u.jsx(Q.div,{className:"device-fill mobile",initial:{width:0},animate:{width:`${V.deviceCounts.mobile/V.totalViews*100}%`},transition:{duration:.5}})})]}),u.jsxs("div",{className:"device-item",children:[u.jsx("div",{className:"device-icon tablet",children:u.jsx(q4,{size:24})}),u.jsxs("div",{className:"device-info",children:[u.jsx("span",{className:"device-name",children:"태블릿"}),u.jsx("span",{className:"device-count",children:V.deviceCounts.tablet})]}),u.jsx("div",{className:"device-bar",children:u.jsx(Q.div,{className:"device-fill tablet",initial:{width:0},animate:{width:`${V.deviceCounts.tablet/V.totalViews*100}%`},transition:{duration:.5}})})]})]})]})]}),u.jsxs("div",{className:"chart-card ip-chart",children:[u.jsxs("h3",{className:"chart-title",children:[u.jsx(J6,{size:18}),"IP 주소별 접근 횟수 TOP 10",u.jsxs("span",{className:"ip-unique-badge",children:["고유 IP: ",V.uniqueIPs]})]}),u.jsxs("div",{className:"ip-list",children:[V.topIPs.map(([Y,ee],ce)=>{const pe=V.topIPs[0][1],je=ee/pe*100;return u.jsxs("div",{className:"ip-item",children:[u.jsxs("div",{className:"ip-label",children:[u.jsxs("span",{className:"ip-rank",children:["#",ce+1]}),u.jsx("span",{className:"ip-address",children:Y}),u.jsxs("span",{className:"ip-count",children:[ee,"회"]})]}),u.jsx("div",{className:"ip-bar-track",children:u.jsx(Q.div,{className:"ip-bar-fill",initial:{width:0},animate:{width:`${je}%`},transition:{delay:ce*.08,duration:.5}})})]},Y)}),V.topIPs.length===0&&u.jsx("p",{className:"no-ip-data",children:"IP 데이터가 없습니다."})]})]}),u.jsxs("div",{className:"recent-logs",children:[u.jsxs("h3",{className:"chart-title",children:[u.jsx(wr,{size:18}),"최근 접속 로그 (10건)"]}),u.jsx("div",{className:"logs-table-wrapper",children:u.jsxs("div",{className:"logs-table",children:[u.jsxs("div",{className:"logs-header",children:[u.jsx("span",{children:"시간"}),u.jsx("span",{children:"섹션"}),u.jsx("span",{children:"IP 주소"}),u.jsx("span",{children:"화면크기"}),u.jsx("span",{children:"User Agent"})]}),x.slice(-10).reverse().map((Y,ee)=>{const ce=R(Y.datetime);return u.jsxs("div",{className:"log-row",children:[u.jsx("span",{className:"log-time",children:ce.formatted}),u.jsx("span",{className:"log-section",children:J(Y.section)}),u.jsx("span",{className:"log-ip",children:Y.ip||"-"}),u.jsx("span",{className:"log-screen",children:Y.screenSize||"-"}),u.jsx("span",{className:"log-ua",title:Y.userAgent,children:Y.userAgent||"-"})]},ee)})]})})]})]}),!V&&u.jsxs("div",{className:"no-data",children:[u.jsx(gi,{size:48}),u.jsx("p",{children:"아직 수집된 데이터가 없습니다."})]}),u.jsx("style",{children:fr})]}):u.jsxs(Q.section,{className:"section analytics-section",variants:K,initial:"hidden",animate:"visible",children:[u.jsxs(Q.h2,{className:"section-title",variants:G,children:[u.jsx("span",{className:"title-icon",children:"📊"}),"방문자 분석"]}),u.jsx(ji,{children:l&&u.jsx(Q.div,{className:"password-modal-overlay",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:u.jsxs(Q.div,{className:"password-modal",initial:{opacity:0,scale:.9,y:20},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.9,y:20},children:[u.jsx("button",{className:"modal-close-btn",onClick:F,children:u.jsx(Ai,{size:20})}),u.jsx("div",{className:"modal-icon",children:u.jsx(ja,{size:32})}),u.jsx("h3",{className:"modal-title",children:"비밀번호 입력"}),u.jsx("p",{className:"modal-description",children:"방문자 분석 대시보드에 접근하려면 비밀번호를 입력하세요."}),u.jsxs("form",{onSubmit:le,children:[u.jsxs("div",{className:"password-input-wrapper",children:[u.jsx("input",{type:f?"text":"password",value:d,onChange:Y=>h(Y.target.value),placeholder:"비밀번호",className:"password-input",autoFocus:!0}),u.jsx("button",{type:"button",className:"toggle-password-btn",onClick:()=>m(!f),children:f?u.jsx(fy,{size:18}):u.jsx(hy,{size:18})})]}),y&&u.jsx("p",{className:"error-message",children:y}),u.jsx("button",{type:"submit",className:"submit-btn",children:"확인"})]})]})})}),!l&&u.jsxs(Q.div,{className:"auth-required",variants:G,children:[u.jsx(ja,{size:48}),u.jsx("h3",{children:"인증이 필요합니다"}),u.jsx("button",{className:"retry-auth-btn",onClick:()=>o(!0),children:"비밀번호 입력"})]}),u.jsx("style",{children:fr})]})},fr=`
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
`;function Dy(a){const s=[];let l=[],o="",d=!1;for(let h=0;h<a.length;h++){const f=a[h],m=a[h+1];d?f==='"'&&m==='"'?(o+='"',h++):f==='"'?d=!1:o+=f:f==='"'?d=!0:f===","?(l.push(o.trim()),o=""):f===`
`||f==="\r"&&m===`
`?(l.push(o.trim()),l.length>0&&l.some(y=>y!=="")&&s.push(l),l=[],o="",f==="\r"&&h++):o+=f}return(o||l.length>0)&&(l.push(o.trim()),l.some(h=>h!=="")&&s.push(l)),s}function _y(a){if(a.length<2)return[];const s=a[0],l=[];for(let o=1;o<a.length;o++){const d=a[o],h={};s.forEach((f,m)=>{h[f]=d[m]||""}),l.push(h)}return l}async function Zt(a){try{const s=v8(a),l=await fetch(s);if(!l.ok)throw new Error(`HTTP error! status: ${l.status}`);const o=await l.text(),d=Dy(o);return _y(d)}catch(s){throw console.error(`Error fetching sheet "${a}":`,s),s}}async function E8(){try{const a=b8(),s=await fetch(a);if(!s.ok)throw new Error(`HTTP error! status: ${s.status}`);const l=await s.text(),o=Dy(l);return _y(o)}catch(a){throw console.error("Error fetching glossary sheet:",a),a}}function Ry(a){return a?a.split(/\||\r?\n/).map(s=>s.trim()).filter(s=>s):[]}function Or(a){return a?a.split(",").map(s=>s.trim()).filter(s=>s):[]}function C8(a){if(!a||a.length===0)return null;const s=a[0];return{name:s.이름||"",role:s["직책/역할"]||"",email:s.이메일||"",location:s.지역||"",bio:s.자기소개||"",profileImage:s.프로필이미지URL||"",resumeLink:s["이력서 링크"]||s.이력서링크||Object.values(s)[6]||"",social:{email:s.이메일||""}}}function D8(a){if(!a||a.length===0)return{title:"About Me",blocks:[]};const s=[];return a.forEach(l=>{const o=l.섹션제목||"",d=l.내용||"";o&&s.push({type:"heading",value:o});const h=Ry(d);o.includes("Competencies")||o.includes("역량")?s.push({type:"list",items:h}):h.forEach(f=>{s.push({type:"text",value:f})})}),{title:"About Me",blocks:s}}function _8(a){if(!a||a.length===0)return{title:"Tech Stack",categories:[]};const s=new Map;return a.forEach(l=>{const o=l.분류||"",d=l.아이콘||"",h=l.기술명||"",f=parseInt(l["숙련도(100점)"]||"0",10);if(!o||!h)return;const m=l.표시여부;m&&m.toUpperCase()==="FALSE"||(s.has(o)||s.set(o,{name:o,icon:d,items:[]}),s.get(o).items.push({name:h,level:f}))}),{title:"Tech Stack",categories:Array.from(s.values())}}function R8(a){return!a||a.length===0?{title:"Experience",items:[]}:{title:"Experience",items:a.filter(l=>{if(!l.회사명)return!1;const o=l.표시여부;return!(o&&o.toUpperCase()==="FALSE")}).map(l=>({company:l.회사명||"",role:l.직책||"",period:l.근무기간||"",description:l.한줄설명||"",tasks:Ry(l.담당업무||""),techStack:Or(l.사용기술||"")}))}}function O8(a){return!a||a.length===0?{title:"Projects",items:[]}:{title:"Projects",items:a.filter(l=>{if(!l.프로젝트명)return!1;const o=l.표시여부;return!(o&&o.toUpperCase()==="FALSE")}).map(l=>{const o=[],d=l.개요||"";d&&(o.push({type:"heading",value:"프로젝트 개요"}),o.push({type:"text",value:d}));const h=l.주요기능||"";if(h){const x=h.split(/\r?\n/).map(b=>b.trim()).filter(b=>b);x.length>0&&(o.push({type:"heading",value:"주요 기능"}),o.push({type:"list",items:x}))}const f=l.핵심포인트||"",m=l.아이콘||"💡";if(f){const x=f.split(/\r?\n/).map(b=>b.trim()).filter(b=>b);x.length>0&&o.push({type:"callout",icon:m,items:x})}const y=(l.이미지URL||"").split(/[|\n]/).map(x=>x.trim()).filter(x=>x);y.length>0&&(o.push({type:"heading",value:"결과물"}),y.forEach((x,b)=>{o.push({type:"image",value:x,caption:`${l.프로젝트명} 화면 ${y.length>1?b+1:""}`.trim()})}));const g=(l.영상URL||"").split(/[|\n]/).map(x=>x.trim()).filter(x=>x);return g.length>0&&(y.length===0&&o.push({type:"heading",value:"결과물"}),g.forEach((x,b)=>{o.push({type:"video",value:x,caption:`${l.프로젝트명} 영상 ${g.length>1?b+1:""}`.trim()})})),{title:l.프로젝트명||"",company:l.회사||"",period:l.기간||"",role:l.역할||"",description:l.한줄설명||"",techStack:Or(l.기술스택||""),blocks:o,links:{}}})}}function V8(a){return!a||a.length===0?{title:"Education",items:[]}:{title:"Education",items:a.filter(l=>{if(!l.학교명)return!1;const o=l.표시여부;return!(o&&o.toUpperCase()==="FALSE")}).map(l=>({location:l.지역||"",school:l.학교명||"",major:l.전공||"",degree:l.학위||"",period:l.기간||"",description:l.비고||"",type:l.구분||"university"}))}}function U8(a){return!a||a.length===0?{title:"Certifications",items:[]}:{title:"Certifications",items:a.filter(l=>{if(!l.자격증명)return!1;const o=l.표시여부;return!(o&&o.toUpperCase()==="FALSE")}).map(l=>({name:l.자격증명||"",issuer:l.발급기관||"",date:l.취득일||"",icon:l.아이콘||"📜"}))}}function L8(a){if(!a||a.length===0)return{title:"Bookmarks",description:"",categories:[]};const s=new Map;return a.filter(l=>{if(!l.사이트명)return!1;const o=l.표시여부;return!(o&&o.toUpperCase()==="FALSE")}).forEach(l=>{const o=l.카테고리||"",d=l.카테고리아이콘||"",h=l.카테고리색상||"#8b5cf6";s.has(o)||s.set(o,{name:o,icon:d,color:h,items:[]}),s.get(o).items.push({title:l.사이트명||"",url:l.URL||"",description:l.설명||""})}),{title:"Bookmarks",description:"관심 있는 웹사이트들을 분야별로 정리했습니다.",categories:Array.from(s.values())}}function B8(a){return!a||a.length===0?{title:"Live Demo",description:"",items:[]}:{title:"Live Demo",description:"직접 제작하여 배포한 웹 애플리케이션들입니다. 카드를 클릭하면 새 창에서 실행됩니다.",items:a.filter(l=>{if(!l.제목)return!1;const o=l.표시여부;return!(o&&o.toUpperCase()==="FALSE")}).map(l=>({title:l.제목||"",description:l.설명||"",url:l.URL||"",thumbnail:l.썸네일URL||"",techStack:Or(l.기술스택||""),platform:l.플랫폼||"",isNew:l.신규여부?.toUpperCase()==="TRUE",requiresLogin:l.로그인필요?.toUpperCase()==="TRUE"}))}}function H8(a){return!a||a.length===0?{title:"Internal Tools",description:"",items:[]}:{title:"Internal Tools",description:"업무용으로 제작한 내부 도구입니다.",items:a.filter(l=>{if(!l.ID)return!1;const o=l.표시여부;return!(o&&o.toUpperCase()==="FALSE")}).map(l=>({id:l.ID||"",title:l.제목||"",description:l.설명||"",icon:l.아이콘||"Wrench"}))}}function q8(a){if(!a||a.length===0)return{title:"Resources",description:"",categories:[]};const s=new Map;return a.filter(l=>{if(!l.제목)return!1;const o=l.표시여부;return!(o&&o.toUpperCase()==="FALSE")}).forEach(l=>{const o=l.카테고리||"",d=l.카테고리아이콘||"",h=l.카테고리색상||"#8b5cf6";s.has(o)||s.set(o,{name:o,icon:d,color:h,items:[]}),s.get(o).items.push({title:l.제목||"",description:l.설명||"",docUrl:l.문서URL||"",tags:Or(l.태그||""),createdDate:l.작성일||"",type:l.구분||""})}),{title:"Resources",description:"IT 및 기타 유용한 정보들을 주제별로 정리했습니다. 클릭하면 Google Docs에서 상세 내용을 확인할 수 있습니다.",categories:Array.from(s.values())}}function Y8(a){if(!a||a.length===0)return[];a.length>0&&console.log("[Glossary] 실제 컬럼명:",Object.keys(a[0]));const s=(l,o)=>{for(const d of Object.keys(l)){const h=d.trim();if(o.some(f=>h===f||h.includes(f)))return l[d]||""}return""};return a.map(l=>{let o=!1;const d=String(s(l,["암기 여부","암기여부","암기"])).toUpperCase();return(d==="TRUE"||d==="O"||d==="Y")&&(o=!0),{domain:s(l,["분야"]),term:s(l,["용어"]),abbr:s(l,["약어/원문","약어/영문","약어","원문"]),description:s(l,["설명"]),importance:s(l,["중요도"]),url:s(l,["참고 URL","참고URL","URL"]),memorized:o}}).filter(l=>l.term!=="")}function G8(){const[a,s]=D.useState(null),[l,o]=D.useState(!0),[d,h]=D.useState(null);return D.useEffect(()=>{async function f(){try{o(!0);const[m,y,g,x,b,S,w,_,H,K,G,Z]=await Promise.all([Zt(Qt.PROFILE),Zt(Qt.ABOUT),Zt(Qt.TECH_STACK),Zt(Qt.EXPERIENCE),Zt(Qt.PROJECTS),Zt(Qt.EDUCATION),Zt(Qt.CERTIFICATIONS),Zt(Qt.BOOKMARKS),Zt(Qt.LIVE_DEMO),Zt(Qt.INTERNAL_TOOLS),Zt(Qt.RESOURCES),E8()]),R=B8(H),V=H8(K);s({profile:C8(m),about:D8(y),techStack:_8(g),education:V8(S),certifications:U8(w),experience:R8(x),projects:O8(b),liveDemo:{...R,internalTools:V},bookmarks:L8(_),resources:q8(G),glossary:Y8(Z)}),h(null)}catch(m){console.error("Failed to load sheet data:",m),h(m)}finally{o(!1)}}f()},[]),{data:a,loading:l,error:d,refetch:()=>window.location.reload()}}const X8="https://script.google.com/macros/s/AKfycbz8J8B9bcqimeLoy_5VSpKgJiHHF5ajwocNR6bYylhju3TrVOiFoL6FVYqL5a65rQQ36g/exec",K8=Math.random().toString(36).substring(2,15)+Date.now().toString(36);let hr=null;async function Q8(){if(hr)return hr;try{return hr=(await(await fetch("https://api.ipify.org?format=json")).json()).ip,hr}catch(a){return console.warn("IP 조회 실패:",a),""}}const Z8="221.165.52.1";async function Oy(a){try{const s=await Q8();if(s===Z8)return;const l={section:a,ip:s,userAgent:navigator.userAgent,referrer:document.referrer||"(직접 접속)",screenSize:`${window.innerWidth}x${window.innerHeight}`,sessionId:K8};await fetch(X8,{method:"POST",mode:"no-cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(l)}),console.log("📊 로그 기록:",a)}catch(s){console.warn("로깅 실패:",s)}}async function J8(){await Oy("_initial_load")}const g1=["about","keyAchievements","experience","projects","techStack","education","certifications","resources","webApps"],$8=["bookmarks","glossary","analytics"],F8={about:{label:"About",icon:Ud},keyAchievements:{label:"Key Expertise",icon:wi},techStack:{label:"Tech Stack",icon:Ti},experience:{label:"Experience",icon:Ys},projects:{label:"Projects",icon:py},education:{label:"Education",icon:Vs},certifications:{label:"Certifications",icon:qs},resources:{label:"Resources",icon:yy},webApps:{label:"Playground",icon:Rr}};function P8(){return new URLSearchParams(window.location.search).get("tool")}function W8({toolId:a}){const s={mallReport:"자사몰 매출 확인",addressMap:"주소 좌표 변환"};return u.jsxs("div",{className:"tool-popup-container",children:[u.jsx("header",{className:"tool-popup-header",children:u.jsx("h1",{children:s[a]||"도구"})}),u.jsxs("main",{className:"tool-popup-content",children:[a==="mallReport"&&u.jsx(h8,{}),a==="addressMap"&&u.jsx(p8,{})]}),u.jsx("style",{children:`
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
      `})]})}function I8(){const[a,s]=D.useState("about"),[l,o]=D.useState(!1),[d,h]=D.useState(null),[f,m]=D.useState(!1),[y,g]=D.useState(null),x=D.useRef(!1),b=D.useRef(null),{data:S,loading:w,error:_}=G8();D.useEffect(()=>{const R=P8();R?g(R):J8()},[]),D.useEffect(()=>{if(l||w||_||!S)return;const R=new IntersectionObserver(V=>{x.current||V.forEach(J=>{if(J.isIntersecting){const le=J.target.id.replace("section-","");s(le)}})},{root:null,rootMargin:"-30% 0px -60% 0px",threshold:0});return g1.forEach(V=>{const J=document.getElementById(`section-${V}`);J&&R.observe(J)}),()=>R.disconnect()},[l,w,_,S]);const H=D.useCallback(R=>{if(Oy(R),$8.includes(R)){o(!0),s(R);return}if(l){o(!1),s(R),setTimeout(()=>{const J=document.getElementById(`section-${R}`);J&&(x.current=!0,J.scrollIntoView({behavior:"smooth"}),setTimeout(()=>{x.current=!1},1e3))},100);return}s(R);const V=document.getElementById(`section-${R}`);V&&(x.current=!0,V.scrollIntoView({behavior:"smooth"}),setTimeout(()=>{x.current=!1},1e3))},[l]),K=R=>{h(R),m(!0)},G=()=>{m(!1),setTimeout(()=>h(null),300)};if(y)return u.jsx(W8,{toolId:y});if(w)return u.jsxs("div",{className:"loading-container",children:[u.jsx("div",{className:"loading-spinner"}),u.jsx("p",{children:"데이터를 불러오는 중..."}),u.jsx("style",{children:`
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
        `})]});if(_||!S)return u.jsxs("div",{className:"error-container",children:[u.jsx("div",{className:"error-icon",children:"⚠️"}),u.jsx("h2",{children:"데이터를 불러올 수 없습니다"}),u.jsx("p",{children:"Google Sheets 연결을 확인해 주세요."}),u.jsx("button",{onClick:()=>window.location.reload(),className:"retry-button",children:"다시 시도"}),u.jsx("style",{children:`
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
        `})]});const Z={onMediaClick:K};return u.jsxs("div",{className:"app-container",children:[u.jsx(Wj,{profile:S.profile,activeSection:a,onSectionChange:H}),u.jsx("main",{className:"main-content",ref:b,children:l?u.jsxs("div",{className:"section-wrapper",children:[a==="analytics"&&u.jsx(z8,{}),a==="bookmarks"&&u.jsx(g8,{data:S.bookmarks}),a==="glossary"&&u.jsx(N8,{data:S.glossary})]}):u.jsx("div",{className:"scroll-content",children:g1.map(R=>{const V=F8[R],J=V.icon;return u.jsxs("div",{id:`section-${R}`,className:"scroll-section",children:[!["about","keyAchievements"].includes(R)&&u.jsxs("div",{className:"scroll-section-header",children:[u.jsx(J,{size:20}),u.jsx("span",{children:V.label})]}),R==="about"&&u.jsx(e8,{data:S.about,profile:S.profile,...Z}),R==="keyAchievements"&&u.jsx(t8,{}),R==="techStack"&&u.jsx(i8,{data:S.techStack}),R==="experience"&&u.jsx(s8,{data:S.experience}),R==="projects"&&u.jsx(r8,{data:S.projects,...Z}),R==="education"&&u.jsx(d8,{data:S.education}),R==="certifications"&&u.jsx(f8,{data:S.certifications}),R==="resources"&&u.jsx(M8,{data:S.resources}),R==="webApps"&&u.jsx(u8,{data:S.liveDemo})]},R)})})}),u.jsx(Ij,{isOpen:f,onClose:G,content:d})]})}function eT(){return u.jsx($j,{children:u.jsx(I8,{})})}p2.createRoot(document.getElementById("root")).render(u.jsx(D.StrictMode,{children:u.jsx(eT,{})}));
