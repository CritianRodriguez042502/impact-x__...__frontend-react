function gR(n,r){for(var l=0;l<r.length;l++){const d=r[l];if(typeof d!="string"&&!Array.isArray(d)){for(const h in d)if(h!=="default"&&!(h in n)){const p=Object.getOwnPropertyDescriptor(d,h);p&&Object.defineProperty(n,h,p.get?p:{enumerable:!0,get:()=>d[h]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const h of document.querySelectorAll('link[rel="modulepreload"]'))d(h);new MutationObserver(h=>{for(const p of h)if(p.type==="childList")for(const k of p.addedNodes)k.tagName==="LINK"&&k.rel==="modulepreload"&&d(k)}).observe(document,{childList:!0,subtree:!0});function l(h){const p={};return h.integrity&&(p.integrity=h.integrity),h.referrerPolicy&&(p.referrerPolicy=h.referrerPolicy),h.crossOrigin==="use-credentials"?p.credentials="include":h.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function d(h){if(h.ep)return;h.ep=!0;const p=l(h);fetch(h.href,p)}})();var ho=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function xa(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var i5={exports:{}},Hp={},s5={exports:{}},at={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vh=Symbol.for("react.element"),mR=Symbol.for("react.portal"),kR=Symbol.for("react.fragment"),bR=Symbol.for("react.strict_mode"),wR=Symbol.for("react.profiler"),vR=Symbol.for("react.provider"),_R=Symbol.for("react.context"),yR=Symbol.for("react.forward_ref"),CR=Symbol.for("react.suspense"),AR=Symbol.for("react.memo"),xR=Symbol.for("react.lazy"),O2=Symbol.iterator;function ER(n){return n===null||typeof n!="object"?null:(n=O2&&n[O2]||n["@@iterator"],typeof n=="function"?n:null)}var a5={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},l5=Object.assign,c5={};function Td(n,r,l){this.props=n,this.context=r,this.refs=c5,this.updater=l||a5}Td.prototype.isReactComponent={};Td.prototype.setState=function(n,r){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,r,"setState")};Td.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function d5(){}d5.prototype=Td.prototype;function H0(n,r,l){this.props=n,this.context=r,this.refs=c5,this.updater=l||a5}var $0=H0.prototype=new d5;$0.constructor=H0;l5($0,Td.prototype);$0.isPureReactComponent=!0;var L2=Array.isArray,u5=Object.prototype.hasOwnProperty,W0={current:null},h5={key:!0,ref:!0,__self:!0,__source:!0};function f5(n,r,l){var d,h={},p=null,k=null;if(r!=null)for(d in r.ref!==void 0&&(k=r.ref),r.key!==void 0&&(p=""+r.key),r)u5.call(r,d)&&!h5.hasOwnProperty(d)&&(h[d]=r[d]);var b=arguments.length-2;if(b===1)h.children=l;else if(1<b){for(var g=Array(b),v=0;v<b;v++)g[v]=arguments[v+2];h.children=g}if(n&&n.defaultProps)for(d in b=n.defaultProps,b)h[d]===void 0&&(h[d]=b[d]);return{$$typeof:vh,type:n,key:p,ref:k,props:h,_owner:W0.current}}function SR(n,r){return{$$typeof:vh,type:n.type,key:r,ref:n.ref,props:n.props,_owner:n._owner}}function q0(n){return typeof n=="object"&&n!==null&&n.$$typeof===vh}function DR(n){var r={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(l){return r[l]})}var R2=/\/+/g;function Tk(n,r){return typeof n=="object"&&n!==null&&n.key!=null?DR(""+n.key):r.toString(36)}function Wf(n,r,l,d,h){var p=typeof n;(p==="undefined"||p==="boolean")&&(n=null);var k=!1;if(n===null)k=!0;else switch(p){case"string":case"number":k=!0;break;case"object":switch(n.$$typeof){case vh:case mR:k=!0}}if(k)return k=n,h=h(k),n=d===""?"."+Tk(k,0):d,L2(h)?(l="",n!=null&&(l=n.replace(R2,"$&/")+"/"),Wf(h,r,l,"",function(v){return v})):h!=null&&(q0(h)&&(h=SR(h,l+(!h.key||k&&k.key===h.key?"":(""+h.key).replace(R2,"$&/")+"/")+n)),r.push(h)),1;if(k=0,d=d===""?".":d+":",L2(n))for(var b=0;b<n.length;b++){p=n[b];var g=d+Tk(p,b);k+=Wf(p,r,l,g,h)}else if(g=ER(n),typeof g=="function")for(n=g.call(n),b=0;!(p=n.next()).done;)p=p.value,g=d+Tk(p,b++),k+=Wf(p,r,l,g,h);else if(p==="object")throw r=String(n),Error("Objects are not valid as a React child (found: "+(r==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":r)+"). If you meant to render a collection of children, use an array instead.");return k}function Af(n,r,l){if(n==null)return n;var d=[],h=0;return Wf(n,d,"","",function(p){return r.call(l,p,h++)}),d}function TR(n){if(n._status===-1){var r=n._result;r=r(),r.then(function(l){(n._status===0||n._status===-1)&&(n._status=1,n._result=l)},function(l){(n._status===0||n._status===-1)&&(n._status=2,n._result=l)}),n._status===-1&&(n._status=0,n._result=r)}if(n._status===1)return n._result.default;throw n._result}var jo={current:null},qf={transition:null},IR={ReactCurrentDispatcher:jo,ReactCurrentBatchConfig:qf,ReactCurrentOwner:W0};at.Children={map:Af,forEach:function(n,r,l){Af(n,function(){r.apply(this,arguments)},l)},count:function(n){var r=0;return Af(n,function(){r++}),r},toArray:function(n){return Af(n,function(r){return r})||[]},only:function(n){if(!q0(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};at.Component=Td;at.Fragment=kR;at.Profiler=wR;at.PureComponent=H0;at.StrictMode=bR;at.Suspense=CR;at.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=IR;at.cloneElement=function(n,r,l){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var d=l5({},n.props),h=n.key,p=n.ref,k=n._owner;if(r!=null){if(r.ref!==void 0&&(p=r.ref,k=W0.current),r.key!==void 0&&(h=""+r.key),n.type&&n.type.defaultProps)var b=n.type.defaultProps;for(g in r)u5.call(r,g)&&!h5.hasOwnProperty(g)&&(d[g]=r[g]===void 0&&b!==void 0?b[g]:r[g])}var g=arguments.length-2;if(g===1)d.children=l;else if(1<g){b=Array(g);for(var v=0;v<g;v++)b[v]=arguments[v+2];d.children=b}return{$$typeof:vh,type:n.type,key:h,ref:p,props:d,_owner:k}};at.createContext=function(n){return n={$$typeof:_R,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:vR,_context:n},n.Consumer=n};at.createElement=f5;at.createFactory=function(n){var r=f5.bind(null,n);return r.type=n,r};at.createRef=function(){return{current:null}};at.forwardRef=function(n){return{$$typeof:yR,render:n}};at.isValidElement=q0;at.lazy=function(n){return{$$typeof:xR,_payload:{_status:-1,_result:n},_init:TR}};at.memo=function(n,r){return{$$typeof:AR,type:n,compare:r===void 0?null:r}};at.startTransition=function(n){var r=qf.transition;qf.transition={};try{n()}finally{qf.transition=r}};at.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};at.useCallback=function(n,r){return jo.current.useCallback(n,r)};at.useContext=function(n){return jo.current.useContext(n)};at.useDebugValue=function(){};at.useDeferredValue=function(n){return jo.current.useDeferredValue(n)};at.useEffect=function(n,r){return jo.current.useEffect(n,r)};at.useId=function(){return jo.current.useId()};at.useImperativeHandle=function(n,r,l){return jo.current.useImperativeHandle(n,r,l)};at.useInsertionEffect=function(n,r){return jo.current.useInsertionEffect(n,r)};at.useLayoutEffect=function(n,r){return jo.current.useLayoutEffect(n,r)};at.useMemo=function(n,r){return jo.current.useMemo(n,r)};at.useReducer=function(n,r,l){return jo.current.useReducer(n,r,l)};at.useRef=function(n){return jo.current.useRef(n)};at.useState=function(n){return jo.current.useState(n)};at.useSyncExternalStore=function(n,r,l){return jo.current.useSyncExternalStore(n,r,l)};at.useTransition=function(){return jo.current.useTransition()};at.version="18.2.0";s5.exports=at;var J=s5.exports;const cr=xa(J),MR=gR({__proto__:null,default:cr},[J]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var NR=J,jR=Symbol.for("react.element"),PR=Symbol.for("react.fragment"),BR=Object.prototype.hasOwnProperty,OR=NR.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,LR={key:!0,ref:!0,__self:!0,__source:!0};function p5(n,r,l){var d,h={},p=null,k=null;l!==void 0&&(p=""+l),r.key!==void 0&&(p=""+r.key),r.ref!==void 0&&(k=r.ref);for(d in r)BR.call(r,d)&&!LR.hasOwnProperty(d)&&(h[d]=r[d]);if(n&&n.defaultProps)for(d in r=n.defaultProps,r)h[d]===void 0&&(h[d]=r[d]);return{$$typeof:jR,type:n,key:p,ref:k,props:h,_owner:OR.current}}Hp.Fragment=PR;Hp.jsx=p5;Hp.jsxs=p5;i5.exports=Hp;var D=i5.exports,jb={},g5={exports:{}},pr={},m5={exports:{}},k5={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function r(ke,se){var ce=ke.length;ke.push(se);e:for(;0<ce;){var xe=ce-1>>>1,Ae=ke[xe];if(0<h(Ae,se))ke[xe]=se,ke[ce]=Ae,ce=xe;else break e}}function l(ke){return ke.length===0?null:ke[0]}function d(ke){if(ke.length===0)return null;var se=ke[0],ce=ke.pop();if(ce!==se){ke[0]=ce;e:for(var xe=0,Ae=ke.length,Pt=Ae>>>1;xe<Pt;){var te=2*(xe+1)-1,Jt=ke[te],Ce=te+1,Ne=ke[Ce];if(0>h(Jt,ce))Ce<Ae&&0>h(Ne,Jt)?(ke[xe]=Ne,ke[Ce]=ce,xe=Ce):(ke[xe]=Jt,ke[te]=ce,xe=te);else if(Ce<Ae&&0>h(Ne,ce))ke[xe]=Ne,ke[Ce]=ce,xe=Ce;else break e}}return se}function h(ke,se){var ce=ke.sortIndex-se.sortIndex;return ce!==0?ce:ke.id-se.id}if(typeof performance=="object"&&typeof performance.now=="function"){var p=performance;n.unstable_now=function(){return p.now()}}else{var k=Date,b=k.now();n.unstable_now=function(){return k.now()-b}}var g=[],v=[],A=1,x=null,_=3,C=!1,M=!1,T=!1,O=typeof setTimeout=="function"?setTimeout:null,P=typeof clearTimeout=="function"?clearTimeout:null,j=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function R(ke){for(var se=l(v);se!==null;){if(se.callback===null)d(v);else if(se.startTime<=ke)d(v),se.sortIndex=se.expirationTime,r(g,se);else break;se=l(v)}}function L(ke){if(T=!1,R(ke),!M)if(l(g)!==null)M=!0,ue(q);else{var se=l(v);se!==null&&ze(L,se.startTime-ke)}}function q(ke,se){M=!1,T&&(T=!1,P(V),V=-1),C=!0;var ce=_;try{for(R(se),x=l(g);x!==null&&(!(x.expirationTime>se)||ke&&!ae());){var xe=x.callback;if(typeof xe=="function"){x.callback=null,_=x.priorityLevel;var Ae=xe(x.expirationTime<=se);se=n.unstable_now(),typeof Ae=="function"?x.callback=Ae:x===l(g)&&d(g),R(se)}else d(g);x=l(g)}if(x!==null)var Pt=!0;else{var te=l(v);te!==null&&ze(L,te.startTime-se),Pt=!1}return Pt}finally{x=null,_=ce,C=!1}}var ee=!1,G=null,V=-1,X=5,Q=-1;function ae(){return!(n.unstable_now()-Q<X)}function pe(){if(G!==null){var ke=n.unstable_now();Q=ke;var se=!0;try{se=G(!0,ke)}finally{se?me():(ee=!1,G=null)}}else ee=!1}var me;if(typeof j=="function")me=function(){j(pe)};else if(typeof MessageChannel<"u"){var Pe=new MessageChannel,De=Pe.port2;Pe.port1.onmessage=pe,me=function(){De.postMessage(null)}}else me=function(){O(pe,0)};function ue(ke){G=ke,ee||(ee=!0,me())}function ze(ke,se){V=O(function(){ke(n.unstable_now())},se)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(ke){ke.callback=null},n.unstable_continueExecution=function(){M||C||(M=!0,ue(q))},n.unstable_forceFrameRate=function(ke){0>ke||125<ke?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<ke?Math.floor(1e3/ke):5},n.unstable_getCurrentPriorityLevel=function(){return _},n.unstable_getFirstCallbackNode=function(){return l(g)},n.unstable_next=function(ke){switch(_){case 1:case 2:case 3:var se=3;break;default:se=_}var ce=_;_=se;try{return ke()}finally{_=ce}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(ke,se){switch(ke){case 1:case 2:case 3:case 4:case 5:break;default:ke=3}var ce=_;_=ke;try{return se()}finally{_=ce}},n.unstable_scheduleCallback=function(ke,se,ce){var xe=n.unstable_now();switch(typeof ce=="object"&&ce!==null?(ce=ce.delay,ce=typeof ce=="number"&&0<ce?xe+ce:xe):ce=xe,ke){case 1:var Ae=-1;break;case 2:Ae=250;break;case 5:Ae=1073741823;break;case 4:Ae=1e4;break;default:Ae=5e3}return Ae=ce+Ae,ke={id:A++,callback:se,priorityLevel:ke,startTime:ce,expirationTime:Ae,sortIndex:-1},ce>xe?(ke.sortIndex=ce,r(v,ke),l(g)===null&&ke===l(v)&&(T?(P(V),V=-1):T=!0,ze(L,ce-xe))):(ke.sortIndex=Ae,r(g,ke),M||C||(M=!0,ue(q))),ke},n.unstable_shouldYield=ae,n.unstable_wrapCallback=function(ke){var se=_;return function(){var ce=_;_=se;try{return ke.apply(this,arguments)}finally{_=ce}}}})(k5);m5.exports=k5;var RR=m5.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var b5=J,hr=RR;function we(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,l=1;l<arguments.length;l++)r+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var w5=new Set,Qu={};function Gl(n,r){bd(n,r),bd(n+"Capture",r)}function bd(n,r){for(Qu[n]=r,n=0;n<r.length;n++)w5.add(r[n])}var gs=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Pb=Object.prototype.hasOwnProperty,zR=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,z2={},F2={};function FR(n){return Pb.call(F2,n)?!0:Pb.call(z2,n)?!1:zR.test(n)?F2[n]=!0:(z2[n]=!0,!1)}function VR(n,r,l,d){if(l!==null&&l.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return d?!1:l!==null?!l.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function UR(n,r,l,d){if(r===null||typeof r>"u"||VR(n,r,l,d))return!0;if(d)return!1;if(l!==null)switch(l.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function Po(n,r,l,d,h,p,k){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=d,this.attributeNamespace=h,this.mustUseProperty=l,this.propertyName=n,this.type=r,this.sanitizeURL=p,this.removeEmptyString=k}var po={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){po[n]=new Po(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];po[r]=new Po(r,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){po[n]=new Po(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){po[n]=new Po(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){po[n]=new Po(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){po[n]=new Po(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){po[n]=new Po(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){po[n]=new Po(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){po[n]=new Po(n,5,!1,n.toLowerCase(),null,!1,!1)});var G0=/[\-:]([a-z])/g;function K0(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(G0,K0);po[r]=new Po(r,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(G0,K0);po[r]=new Po(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(G0,K0);po[r]=new Po(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){po[n]=new Po(n,1,!1,n.toLowerCase(),null,!1,!1)});po.xlinkHref=new Po("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){po[n]=new Po(n,1,!1,n.toLowerCase(),null,!0,!0)});function Y0(n,r,l,d){var h=po.hasOwnProperty(r)?po[r]:null;(h!==null?h.type!==0:d||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(UR(r,l,h,d)&&(l=null),d||h===null?FR(r)&&(l===null?n.removeAttribute(r):n.setAttribute(r,""+l)):h.mustUseProperty?n[h.propertyName]=l===null?h.type===3?!1:"":l:(r=h.attributeName,d=h.attributeNamespace,l===null?n.removeAttribute(r):(h=h.type,l=h===3||h===4&&l===!0?"":""+l,d?n.setAttributeNS(d,r,l):n.setAttribute(r,l))))}var vs=b5.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,xf=Symbol.for("react.element"),Kc=Symbol.for("react.portal"),Yc=Symbol.for("react.fragment"),Q0=Symbol.for("react.strict_mode"),Bb=Symbol.for("react.profiler"),v5=Symbol.for("react.provider"),_5=Symbol.for("react.context"),Z0=Symbol.for("react.forward_ref"),Ob=Symbol.for("react.suspense"),Lb=Symbol.for("react.suspense_list"),J0=Symbol.for("react.memo"),na=Symbol.for("react.lazy"),y5=Symbol.for("react.offscreen"),V2=Symbol.iterator;function wu(n){return n===null||typeof n!="object"?null:(n=V2&&n[V2]||n["@@iterator"],typeof n=="function"?n:null)}var kn=Object.assign,Ik;function Bu(n){if(Ik===void 0)try{throw Error()}catch(l){var r=l.stack.trim().match(/\n( *(at )?)/);Ik=r&&r[1]||""}return`
`+Ik+n}var Mk=!1;function Nk(n,r){if(!n||Mk)return"";Mk=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(v){var d=v}Reflect.construct(n,[],r)}else{try{r.call()}catch(v){d=v}n.call(r.prototype)}else{try{throw Error()}catch(v){d=v}n()}}catch(v){if(v&&d&&typeof v.stack=="string"){for(var h=v.stack.split(`
`),p=d.stack.split(`
`),k=h.length-1,b=p.length-1;1<=k&&0<=b&&h[k]!==p[b];)b--;for(;1<=k&&0<=b;k--,b--)if(h[k]!==p[b]){if(k!==1||b!==1)do if(k--,b--,0>b||h[k]!==p[b]){var g=`
`+h[k].replace(" at new "," at ");return n.displayName&&g.includes("<anonymous>")&&(g=g.replace("<anonymous>",n.displayName)),g}while(1<=k&&0<=b);break}}}finally{Mk=!1,Error.prepareStackTrace=l}return(n=n?n.displayName||n.name:"")?Bu(n):""}function HR(n){switch(n.tag){case 5:return Bu(n.type);case 16:return Bu("Lazy");case 13:return Bu("Suspense");case 19:return Bu("SuspenseList");case 0:case 2:case 15:return n=Nk(n.type,!1),n;case 11:return n=Nk(n.type.render,!1),n;case 1:return n=Nk(n.type,!0),n;default:return""}}function Rb(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case Yc:return"Fragment";case Kc:return"Portal";case Bb:return"Profiler";case Q0:return"StrictMode";case Ob:return"Suspense";case Lb:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case _5:return(n.displayName||"Context")+".Consumer";case v5:return(n._context.displayName||"Context")+".Provider";case Z0:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case J0:return r=n.displayName||null,r!==null?r:Rb(n.type)||"Memo";case na:r=n._payload,n=n._init;try{return Rb(n(r))}catch{}}return null}function $R(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Rb(r);case 8:return r===Q0?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function va(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function C5(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function WR(n){var r=C5(n)?"checked":"value",l=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),d=""+n[r];if(!n.hasOwnProperty(r)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var h=l.get,p=l.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return h.call(this)},set:function(k){d=""+k,p.call(this,k)}}),Object.defineProperty(n,r,{enumerable:l.enumerable}),{getValue:function(){return d},setValue:function(k){d=""+k},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function Ef(n){n._valueTracker||(n._valueTracker=WR(n))}function A5(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var l=r.getValue(),d="";return n&&(d=C5(n)?n.checked?"true":"false":n.value),n=d,n!==l?(r.setValue(n),!0):!1}function lp(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function zb(n,r){var l=r.checked;return kn({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??n._wrapperState.initialChecked})}function U2(n,r){var l=r.defaultValue==null?"":r.defaultValue,d=r.checked!=null?r.checked:r.defaultChecked;l=va(r.value!=null?r.value:l),n._wrapperState={initialChecked:d,initialValue:l,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function x5(n,r){r=r.checked,r!=null&&Y0(n,"checked",r,!1)}function Fb(n,r){x5(n,r);var l=va(r.value),d=r.type;if(l!=null)d==="number"?(l===0&&n.value===""||n.value!=l)&&(n.value=""+l):n.value!==""+l&&(n.value=""+l);else if(d==="submit"||d==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?Vb(n,r.type,l):r.hasOwnProperty("defaultValue")&&Vb(n,r.type,va(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function H2(n,r,l){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var d=r.type;if(!(d!=="submit"&&d!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,l||r===n.value||(n.value=r),n.defaultValue=r}l=n.name,l!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,l!==""&&(n.name=l)}function Vb(n,r,l){(r!=="number"||lp(n.ownerDocument)!==n)&&(l==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+l&&(n.defaultValue=""+l))}var Ou=Array.isArray;function ld(n,r,l,d){if(n=n.options,r){r={};for(var h=0;h<l.length;h++)r["$"+l[h]]=!0;for(l=0;l<n.length;l++)h=r.hasOwnProperty("$"+n[l].value),n[l].selected!==h&&(n[l].selected=h),h&&d&&(n[l].defaultSelected=!0)}else{for(l=""+va(l),r=null,h=0;h<n.length;h++){if(n[h].value===l){n[h].selected=!0,d&&(n[h].defaultSelected=!0);return}r!==null||n[h].disabled||(r=n[h])}r!==null&&(r.selected=!0)}}function Ub(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(we(91));return kn({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function $2(n,r){var l=r.value;if(l==null){if(l=r.children,r=r.defaultValue,l!=null){if(r!=null)throw Error(we(92));if(Ou(l)){if(1<l.length)throw Error(we(93));l=l[0]}r=l}r==null&&(r=""),l=r}n._wrapperState={initialValue:va(l)}}function E5(n,r){var l=va(r.value),d=va(r.defaultValue);l!=null&&(l=""+l,l!==n.value&&(n.value=l),r.defaultValue==null&&n.defaultValue!==l&&(n.defaultValue=l)),d!=null&&(n.defaultValue=""+d)}function W2(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function S5(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Hb(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?S5(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Sf,D5=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,l,d,h){MSApp.execUnsafeLocalFunction(function(){return n(r,l,d,h)})}:n}(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(Sf=Sf||document.createElement("div"),Sf.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=Sf.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function Zu(n,r){if(r){var l=n.firstChild;if(l&&l===n.lastChild&&l.nodeType===3){l.nodeValue=r;return}}n.textContent=r}var Fu={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},qR=["Webkit","ms","Moz","O"];Object.keys(Fu).forEach(function(n){qR.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),Fu[r]=Fu[n]})});function T5(n,r,l){return r==null||typeof r=="boolean"||r===""?"":l||typeof r!="number"||r===0||Fu.hasOwnProperty(n)&&Fu[n]?(""+r).trim():r+"px"}function I5(n,r){n=n.style;for(var l in r)if(r.hasOwnProperty(l)){var d=l.indexOf("--")===0,h=T5(l,r[l],d);l==="float"&&(l="cssFloat"),d?n.setProperty(l,h):n[l]=h}}var GR=kn({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function $b(n,r){if(r){if(GR[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(we(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(we(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(we(61))}if(r.style!=null&&typeof r.style!="object")throw Error(we(62))}}function Wb(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var qb=null;function X0(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Gb=null,cd=null,dd=null;function q2(n){if(n=Ch(n)){if(typeof Gb!="function")throw Error(we(280));var r=n.stateNode;r&&(r=Kp(r),Gb(n.stateNode,n.type,r))}}function M5(n){cd?dd?dd.push(n):dd=[n]:cd=n}function N5(){if(cd){var n=cd,r=dd;if(dd=cd=null,q2(n),r)for(n=0;n<r.length;n++)q2(r[n])}}function j5(n,r){return n(r)}function P5(){}var jk=!1;function B5(n,r,l){if(jk)return n(r,l);jk=!0;try{return j5(n,r,l)}finally{jk=!1,(cd!==null||dd!==null)&&(P5(),N5())}}function Ju(n,r){var l=n.stateNode;if(l===null)return null;var d=Kp(l);if(d===null)return null;l=d[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(d=!d.disabled)||(n=n.type,d=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!d;break e;default:n=!1}if(n)return null;if(l&&typeof l!="function")throw Error(we(231,r,typeof l));return l}var Kb=!1;if(gs)try{var vu={};Object.defineProperty(vu,"passive",{get:function(){Kb=!0}}),window.addEventListener("test",vu,vu),window.removeEventListener("test",vu,vu)}catch{Kb=!1}function KR(n,r,l,d,h,p,k,b,g){var v=Array.prototype.slice.call(arguments,3);try{r.apply(l,v)}catch(A){this.onError(A)}}var Vu=!1,cp=null,dp=!1,Yb=null,YR={onError:function(n){Vu=!0,cp=n}};function QR(n,r,l,d,h,p,k,b,g){Vu=!1,cp=null,KR.apply(YR,arguments)}function ZR(n,r,l,d,h,p,k,b,g){if(QR.apply(this,arguments),Vu){if(Vu){var v=cp;Vu=!1,cp=null}else throw Error(we(198));dp||(dp=!0,Yb=v)}}function Kl(n){var r=n,l=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,r.flags&4098&&(l=r.return),n=r.return;while(n)}return r.tag===3?l:null}function O5(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function G2(n){if(Kl(n)!==n)throw Error(we(188))}function JR(n){var r=n.alternate;if(!r){if(r=Kl(n),r===null)throw Error(we(188));return r!==n?null:n}for(var l=n,d=r;;){var h=l.return;if(h===null)break;var p=h.alternate;if(p===null){if(d=h.return,d!==null){l=d;continue}break}if(h.child===p.child){for(p=h.child;p;){if(p===l)return G2(h),n;if(p===d)return G2(h),r;p=p.sibling}throw Error(we(188))}if(l.return!==d.return)l=h,d=p;else{for(var k=!1,b=h.child;b;){if(b===l){k=!0,l=h,d=p;break}if(b===d){k=!0,d=h,l=p;break}b=b.sibling}if(!k){for(b=p.child;b;){if(b===l){k=!0,l=p,d=h;break}if(b===d){k=!0,d=p,l=h;break}b=b.sibling}if(!k)throw Error(we(189))}}if(l.alternate!==d)throw Error(we(190))}if(l.tag!==3)throw Error(we(188));return l.stateNode.current===l?n:r}function L5(n){return n=JR(n),n!==null?R5(n):null}function R5(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=R5(n);if(r!==null)return r;n=n.sibling}return null}var z5=hr.unstable_scheduleCallback,K2=hr.unstable_cancelCallback,XR=hr.unstable_shouldYield,ez=hr.unstable_requestPaint,Tn=hr.unstable_now,tz=hr.unstable_getCurrentPriorityLevel,ew=hr.unstable_ImmediatePriority,F5=hr.unstable_UserBlockingPriority,up=hr.unstable_NormalPriority,nz=hr.unstable_LowPriority,V5=hr.unstable_IdlePriority,$p=null,Ui=null;function oz(n){if(Ui&&typeof Ui.onCommitFiberRoot=="function")try{Ui.onCommitFiberRoot($p,n,void 0,(n.current.flags&128)===128)}catch{}}var li=Math.clz32?Math.clz32:sz,rz=Math.log,iz=Math.LN2;function sz(n){return n>>>=0,n===0?32:31-(rz(n)/iz|0)|0}var Df=64,Tf=4194304;function Lu(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function hp(n,r){var l=n.pendingLanes;if(l===0)return 0;var d=0,h=n.suspendedLanes,p=n.pingedLanes,k=l&268435455;if(k!==0){var b=k&~h;b!==0?d=Lu(b):(p&=k,p!==0&&(d=Lu(p)))}else k=l&~h,k!==0?d=Lu(k):p!==0&&(d=Lu(p));if(d===0)return 0;if(r!==0&&r!==d&&!(r&h)&&(h=d&-d,p=r&-r,h>=p||h===16&&(p&4194240)!==0))return r;if(d&4&&(d|=l&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=d;0<r;)l=31-li(r),h=1<<l,d|=n[l],r&=~h;return d}function az(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function lz(n,r){for(var l=n.suspendedLanes,d=n.pingedLanes,h=n.expirationTimes,p=n.pendingLanes;0<p;){var k=31-li(p),b=1<<k,g=h[k];g===-1?(!(b&l)||b&d)&&(h[k]=az(b,r)):g<=r&&(n.expiredLanes|=b),p&=~b}}function Qb(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function U5(){var n=Df;return Df<<=1,!(Df&4194240)&&(Df=64),n}function Pk(n){for(var r=[],l=0;31>l;l++)r.push(n);return r}function _h(n,r,l){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-li(r),n[r]=l}function cz(n,r){var l=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var d=n.eventTimes;for(n=n.expirationTimes;0<l;){var h=31-li(l),p=1<<h;r[h]=0,d[h]=-1,n[h]=-1,l&=~p}}function tw(n,r){var l=n.entangledLanes|=r;for(n=n.entanglements;l;){var d=31-li(l),h=1<<d;h&r|n[d]&r&&(n[d]|=r),l&=~h}}var Nt=0;function H5(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var $5,nw,W5,q5,G5,Zb=!1,If=[],ca=null,da=null,ua=null,Xu=new Map,eh=new Map,ra=[],dz="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Y2(n,r){switch(n){case"focusin":case"focusout":ca=null;break;case"dragenter":case"dragleave":da=null;break;case"mouseover":case"mouseout":ua=null;break;case"pointerover":case"pointerout":Xu.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":eh.delete(r.pointerId)}}function _u(n,r,l,d,h,p){return n===null||n.nativeEvent!==p?(n={blockedOn:r,domEventName:l,eventSystemFlags:d,nativeEvent:p,targetContainers:[h]},r!==null&&(r=Ch(r),r!==null&&nw(r)),n):(n.eventSystemFlags|=d,r=n.targetContainers,h!==null&&r.indexOf(h)===-1&&r.push(h),n)}function uz(n,r,l,d,h){switch(r){case"focusin":return ca=_u(ca,n,r,l,d,h),!0;case"dragenter":return da=_u(da,n,r,l,d,h),!0;case"mouseover":return ua=_u(ua,n,r,l,d,h),!0;case"pointerover":var p=h.pointerId;return Xu.set(p,_u(Xu.get(p)||null,n,r,l,d,h)),!0;case"gotpointercapture":return p=h.pointerId,eh.set(p,_u(eh.get(p)||null,n,r,l,d,h)),!0}return!1}function K5(n){var r=Nl(n.target);if(r!==null){var l=Kl(r);if(l!==null){if(r=l.tag,r===13){if(r=O5(l),r!==null){n.blockedOn=r,G5(n.priority,function(){W5(l)});return}}else if(r===3&&l.stateNode.current.memoizedState.isDehydrated){n.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Gf(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var l=Jb(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(l===null){l=n.nativeEvent;var d=new l.constructor(l.type,l);qb=d,l.target.dispatchEvent(d),qb=null}else return r=Ch(l),r!==null&&nw(r),n.blockedOn=l,!1;r.shift()}return!0}function Q2(n,r,l){Gf(n)&&l.delete(r)}function hz(){Zb=!1,ca!==null&&Gf(ca)&&(ca=null),da!==null&&Gf(da)&&(da=null),ua!==null&&Gf(ua)&&(ua=null),Xu.forEach(Q2),eh.forEach(Q2)}function yu(n,r){n.blockedOn===r&&(n.blockedOn=null,Zb||(Zb=!0,hr.unstable_scheduleCallback(hr.unstable_NormalPriority,hz)))}function th(n){function r(h){return yu(h,n)}if(0<If.length){yu(If[0],n);for(var l=1;l<If.length;l++){var d=If[l];d.blockedOn===n&&(d.blockedOn=null)}}for(ca!==null&&yu(ca,n),da!==null&&yu(da,n),ua!==null&&yu(ua,n),Xu.forEach(r),eh.forEach(r),l=0;l<ra.length;l++)d=ra[l],d.blockedOn===n&&(d.blockedOn=null);for(;0<ra.length&&(l=ra[0],l.blockedOn===null);)K5(l),l.blockedOn===null&&ra.shift()}var ud=vs.ReactCurrentBatchConfig,fp=!0;function fz(n,r,l,d){var h=Nt,p=ud.transition;ud.transition=null;try{Nt=1,ow(n,r,l,d)}finally{Nt=h,ud.transition=p}}function pz(n,r,l,d){var h=Nt,p=ud.transition;ud.transition=null;try{Nt=4,ow(n,r,l,d)}finally{Nt=h,ud.transition=p}}function ow(n,r,l,d){if(fp){var h=Jb(n,r,l,d);if(h===null)$k(n,r,d,pp,l),Y2(n,d);else if(uz(h,n,r,l,d))d.stopPropagation();else if(Y2(n,d),r&4&&-1<dz.indexOf(n)){for(;h!==null;){var p=Ch(h);if(p!==null&&$5(p),p=Jb(n,r,l,d),p===null&&$k(n,r,d,pp,l),p===h)break;h=p}h!==null&&d.stopPropagation()}else $k(n,r,d,null,l)}}var pp=null;function Jb(n,r,l,d){if(pp=null,n=X0(d),n=Nl(n),n!==null)if(r=Kl(n),r===null)n=null;else if(l=r.tag,l===13){if(n=O5(r),n!==null)return n;n=null}else if(l===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return pp=n,null}function Y5(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(tz()){case ew:return 1;case F5:return 4;case up:case nz:return 16;case V5:return 536870912;default:return 16}default:return 16}}var aa=null,rw=null,Kf=null;function Q5(){if(Kf)return Kf;var n,r=rw,l=r.length,d,h="value"in aa?aa.value:aa.textContent,p=h.length;for(n=0;n<l&&r[n]===h[n];n++);var k=l-n;for(d=1;d<=k&&r[l-d]===h[p-d];d++);return Kf=h.slice(n,1<d?1-d:void 0)}function Yf(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function Mf(){return!0}function Z2(){return!1}function gr(n){function r(l,d,h,p,k){this._reactName=l,this._targetInst=h,this.type=d,this.nativeEvent=p,this.target=k,this.currentTarget=null;for(var b in n)n.hasOwnProperty(b)&&(l=n[b],this[b]=l?l(p):p[b]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?Mf:Z2,this.isPropagationStopped=Z2,this}return kn(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Mf)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Mf)},persist:function(){},isPersistent:Mf}),r}var Id={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},iw=gr(Id),yh=kn({},Id,{view:0,detail:0}),gz=gr(yh),Bk,Ok,Cu,Wp=kn({},yh,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:sw,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Cu&&(Cu&&n.type==="mousemove"?(Bk=n.screenX-Cu.screenX,Ok=n.screenY-Cu.screenY):Ok=Bk=0,Cu=n),Bk)},movementY:function(n){return"movementY"in n?n.movementY:Ok}}),J2=gr(Wp),mz=kn({},Wp,{dataTransfer:0}),kz=gr(mz),bz=kn({},yh,{relatedTarget:0}),Lk=gr(bz),wz=kn({},Id,{animationName:0,elapsedTime:0,pseudoElement:0}),vz=gr(wz),_z=kn({},Id,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),yz=gr(_z),Cz=kn({},Id,{data:0}),X2=gr(Cz),Az={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},xz={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ez={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Sz(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=Ez[n])?!!r[n]:!1}function sw(){return Sz}var Dz=kn({},yh,{key:function(n){if(n.key){var r=Az[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=Yf(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?xz[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:sw,charCode:function(n){return n.type==="keypress"?Yf(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Yf(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Tz=gr(Dz),Iz=kn({},Wp,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),eE=gr(Iz),Mz=kn({},yh,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:sw}),Nz=gr(Mz),jz=kn({},Id,{propertyName:0,elapsedTime:0,pseudoElement:0}),Pz=gr(jz),Bz=kn({},Wp,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Oz=gr(Bz),Lz=[9,13,27,32],aw=gs&&"CompositionEvent"in window,Uu=null;gs&&"documentMode"in document&&(Uu=document.documentMode);var Rz=gs&&"TextEvent"in window&&!Uu,Z5=gs&&(!aw||Uu&&8<Uu&&11>=Uu),tE=String.fromCharCode(32),nE=!1;function J5(n,r){switch(n){case"keyup":return Lz.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function X5(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Qc=!1;function zz(n,r){switch(n){case"compositionend":return X5(r);case"keypress":return r.which!==32?null:(nE=!0,tE);case"textInput":return n=r.data,n===tE&&nE?null:n;default:return null}}function Fz(n,r){if(Qc)return n==="compositionend"||!aw&&J5(n,r)?(n=Q5(),Kf=rw=aa=null,Qc=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Z5&&r.locale!=="ko"?null:r.data;default:return null}}var Vz={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function oE(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!Vz[n.type]:r==="textarea"}function eD(n,r,l,d){M5(d),r=gp(r,"onChange"),0<r.length&&(l=new iw("onChange","change",null,l,d),n.push({event:l,listeners:r}))}var Hu=null,nh=null;function Uz(n){uD(n,0)}function qp(n){var r=Xc(n);if(A5(r))return n}function Hz(n,r){if(n==="change")return r}var tD=!1;if(gs){var Rk;if(gs){var zk="oninput"in document;if(!zk){var rE=document.createElement("div");rE.setAttribute("oninput","return;"),zk=typeof rE.oninput=="function"}Rk=zk}else Rk=!1;tD=Rk&&(!document.documentMode||9<document.documentMode)}function iE(){Hu&&(Hu.detachEvent("onpropertychange",nD),nh=Hu=null)}function nD(n){if(n.propertyName==="value"&&qp(nh)){var r=[];eD(r,nh,n,X0(n)),B5(Uz,r)}}function $z(n,r,l){n==="focusin"?(iE(),Hu=r,nh=l,Hu.attachEvent("onpropertychange",nD)):n==="focusout"&&iE()}function Wz(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return qp(nh)}function qz(n,r){if(n==="click")return qp(r)}function Gz(n,r){if(n==="input"||n==="change")return qp(r)}function Kz(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var di=typeof Object.is=="function"?Object.is:Kz;function oh(n,r){if(di(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var l=Object.keys(n),d=Object.keys(r);if(l.length!==d.length)return!1;for(d=0;d<l.length;d++){var h=l[d];if(!Pb.call(r,h)||!di(n[h],r[h]))return!1}return!0}function sE(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function aE(n,r){var l=sE(n);n=0;for(var d;l;){if(l.nodeType===3){if(d=n+l.textContent.length,n<=r&&d>=r)return{node:l,offset:r-n};n=d}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=sE(l)}}function oD(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?oD(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function rD(){for(var n=window,r=lp();r instanceof n.HTMLIFrameElement;){try{var l=typeof r.contentWindow.location.href=="string"}catch{l=!1}if(l)n=r.contentWindow;else break;r=lp(n.document)}return r}function lw(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function Yz(n){var r=rD(),l=n.focusedElem,d=n.selectionRange;if(r!==l&&l&&l.ownerDocument&&oD(l.ownerDocument.documentElement,l)){if(d!==null&&lw(l)){if(r=d.start,n=d.end,n===void 0&&(n=r),"selectionStart"in l)l.selectionStart=r,l.selectionEnd=Math.min(n,l.value.length);else if(n=(r=l.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var h=l.textContent.length,p=Math.min(d.start,h);d=d.end===void 0?p:Math.min(d.end,h),!n.extend&&p>d&&(h=d,d=p,p=h),h=aE(l,p);var k=aE(l,d);h&&k&&(n.rangeCount!==1||n.anchorNode!==h.node||n.anchorOffset!==h.offset||n.focusNode!==k.node||n.focusOffset!==k.offset)&&(r=r.createRange(),r.setStart(h.node,h.offset),n.removeAllRanges(),p>d?(n.addRange(r),n.extend(k.node,k.offset)):(r.setEnd(k.node,k.offset),n.addRange(r)))}}for(r=[],n=l;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<r.length;l++)n=r[l],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Qz=gs&&"documentMode"in document&&11>=document.documentMode,Zc=null,Xb=null,$u=null,e0=!1;function lE(n,r,l){var d=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;e0||Zc==null||Zc!==lp(d)||(d=Zc,"selectionStart"in d&&lw(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),$u&&oh($u,d)||($u=d,d=gp(Xb,"onSelect"),0<d.length&&(r=new iw("onSelect","select",null,r,l),n.push({event:r,listeners:d}),r.target=Zc)))}function Nf(n,r){var l={};return l[n.toLowerCase()]=r.toLowerCase(),l["Webkit"+n]="webkit"+r,l["Moz"+n]="moz"+r,l}var Jc={animationend:Nf("Animation","AnimationEnd"),animationiteration:Nf("Animation","AnimationIteration"),animationstart:Nf("Animation","AnimationStart"),transitionend:Nf("Transition","TransitionEnd")},Fk={},iD={};gs&&(iD=document.createElement("div").style,"AnimationEvent"in window||(delete Jc.animationend.animation,delete Jc.animationiteration.animation,delete Jc.animationstart.animation),"TransitionEvent"in window||delete Jc.transitionend.transition);function Gp(n){if(Fk[n])return Fk[n];if(!Jc[n])return n;var r=Jc[n],l;for(l in r)if(r.hasOwnProperty(l)&&l in iD)return Fk[n]=r[l];return n}var sD=Gp("animationend"),aD=Gp("animationiteration"),lD=Gp("animationstart"),cD=Gp("transitionend"),dD=new Map,cE="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ea(n,r){dD.set(n,r),Gl(r,[n])}for(var Vk=0;Vk<cE.length;Vk++){var Uk=cE[Vk],Zz=Uk.toLowerCase(),Jz=Uk[0].toUpperCase()+Uk.slice(1);Ea(Zz,"on"+Jz)}Ea(sD,"onAnimationEnd");Ea(aD,"onAnimationIteration");Ea(lD,"onAnimationStart");Ea("dblclick","onDoubleClick");Ea("focusin","onFocus");Ea("focusout","onBlur");Ea(cD,"onTransitionEnd");bd("onMouseEnter",["mouseout","mouseover"]);bd("onMouseLeave",["mouseout","mouseover"]);bd("onPointerEnter",["pointerout","pointerover"]);bd("onPointerLeave",["pointerout","pointerover"]);Gl("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Gl("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Gl("onBeforeInput",["compositionend","keypress","textInput","paste"]);Gl("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Gl("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Gl("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ru="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Xz=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ru));function dE(n,r,l){var d=n.type||"unknown-event";n.currentTarget=l,ZR(d,r,void 0,n),n.currentTarget=null}function uD(n,r){r=(r&4)!==0;for(var l=0;l<n.length;l++){var d=n[l],h=d.event;d=d.listeners;e:{var p=void 0;if(r)for(var k=d.length-1;0<=k;k--){var b=d[k],g=b.instance,v=b.currentTarget;if(b=b.listener,g!==p&&h.isPropagationStopped())break e;dE(h,b,v),p=g}else for(k=0;k<d.length;k++){if(b=d[k],g=b.instance,v=b.currentTarget,b=b.listener,g!==p&&h.isPropagationStopped())break e;dE(h,b,v),p=g}}}if(dp)throw n=Yb,dp=!1,Yb=null,n}function nn(n,r){var l=r[i0];l===void 0&&(l=r[i0]=new Set);var d=n+"__bubble";l.has(d)||(hD(r,n,2,!1),l.add(d))}function Hk(n,r,l){var d=0;r&&(d|=4),hD(l,n,d,r)}var jf="_reactListening"+Math.random().toString(36).slice(2);function rh(n){if(!n[jf]){n[jf]=!0,w5.forEach(function(l){l!=="selectionchange"&&(Xz.has(l)||Hk(l,!1,n),Hk(l,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[jf]||(r[jf]=!0,Hk("selectionchange",!1,r))}}function hD(n,r,l,d){switch(Y5(r)){case 1:var h=fz;break;case 4:h=pz;break;default:h=ow}l=h.bind(null,r,l,n),h=void 0,!Kb||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(h=!0),d?h!==void 0?n.addEventListener(r,l,{capture:!0,passive:h}):n.addEventListener(r,l,!0):h!==void 0?n.addEventListener(r,l,{passive:h}):n.addEventListener(r,l,!1)}function $k(n,r,l,d,h){var p=d;if(!(r&1)&&!(r&2)&&d!==null)e:for(;;){if(d===null)return;var k=d.tag;if(k===3||k===4){var b=d.stateNode.containerInfo;if(b===h||b.nodeType===8&&b.parentNode===h)break;if(k===4)for(k=d.return;k!==null;){var g=k.tag;if((g===3||g===4)&&(g=k.stateNode.containerInfo,g===h||g.nodeType===8&&g.parentNode===h))return;k=k.return}for(;b!==null;){if(k=Nl(b),k===null)return;if(g=k.tag,g===5||g===6){d=p=k;continue e}b=b.parentNode}}d=d.return}B5(function(){var v=p,A=X0(l),x=[];e:{var _=dD.get(n);if(_!==void 0){var C=iw,M=n;switch(n){case"keypress":if(Yf(l)===0)break e;case"keydown":case"keyup":C=Tz;break;case"focusin":M="focus",C=Lk;break;case"focusout":M="blur",C=Lk;break;case"beforeblur":case"afterblur":C=Lk;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":C=J2;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":C=kz;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":C=Nz;break;case sD:case aD:case lD:C=vz;break;case cD:C=Pz;break;case"scroll":C=gz;break;case"wheel":C=Oz;break;case"copy":case"cut":case"paste":C=yz;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":C=eE}var T=(r&4)!==0,O=!T&&n==="scroll",P=T?_!==null?_+"Capture":null:_;T=[];for(var j=v,R;j!==null;){R=j;var L=R.stateNode;if(R.tag===5&&L!==null&&(R=L,P!==null&&(L=Ju(j,P),L!=null&&T.push(ih(j,L,R)))),O)break;j=j.return}0<T.length&&(_=new C(_,M,null,l,A),x.push({event:_,listeners:T}))}}if(!(r&7)){e:{if(_=n==="mouseover"||n==="pointerover",C=n==="mouseout"||n==="pointerout",_&&l!==qb&&(M=l.relatedTarget||l.fromElement)&&(Nl(M)||M[ms]))break e;if((C||_)&&(_=A.window===A?A:(_=A.ownerDocument)?_.defaultView||_.parentWindow:window,C?(M=l.relatedTarget||l.toElement,C=v,M=M?Nl(M):null,M!==null&&(O=Kl(M),M!==O||M.tag!==5&&M.tag!==6)&&(M=null)):(C=null,M=v),C!==M)){if(T=J2,L="onMouseLeave",P="onMouseEnter",j="mouse",(n==="pointerout"||n==="pointerover")&&(T=eE,L="onPointerLeave",P="onPointerEnter",j="pointer"),O=C==null?_:Xc(C),R=M==null?_:Xc(M),_=new T(L,j+"leave",C,l,A),_.target=O,_.relatedTarget=R,L=null,Nl(A)===v&&(T=new T(P,j+"enter",M,l,A),T.target=R,T.relatedTarget=O,L=T),O=L,C&&M)t:{for(T=C,P=M,j=0,R=T;R;R=Wc(R))j++;for(R=0,L=P;L;L=Wc(L))R++;for(;0<j-R;)T=Wc(T),j--;for(;0<R-j;)P=Wc(P),R--;for(;j--;){if(T===P||P!==null&&T===P.alternate)break t;T=Wc(T),P=Wc(P)}T=null}else T=null;C!==null&&uE(x,_,C,T,!1),M!==null&&O!==null&&uE(x,O,M,T,!0)}}e:{if(_=v?Xc(v):window,C=_.nodeName&&_.nodeName.toLowerCase(),C==="select"||C==="input"&&_.type==="file")var q=Hz;else if(oE(_))if(tD)q=Gz;else{q=Wz;var ee=$z}else(C=_.nodeName)&&C.toLowerCase()==="input"&&(_.type==="checkbox"||_.type==="radio")&&(q=qz);if(q&&(q=q(n,v))){eD(x,q,l,A);break e}ee&&ee(n,_,v),n==="focusout"&&(ee=_._wrapperState)&&ee.controlled&&_.type==="number"&&Vb(_,"number",_.value)}switch(ee=v?Xc(v):window,n){case"focusin":(oE(ee)||ee.contentEditable==="true")&&(Zc=ee,Xb=v,$u=null);break;case"focusout":$u=Xb=Zc=null;break;case"mousedown":e0=!0;break;case"contextmenu":case"mouseup":case"dragend":e0=!1,lE(x,l,A);break;case"selectionchange":if(Qz)break;case"keydown":case"keyup":lE(x,l,A)}var G;if(aw)e:{switch(n){case"compositionstart":var V="onCompositionStart";break e;case"compositionend":V="onCompositionEnd";break e;case"compositionupdate":V="onCompositionUpdate";break e}V=void 0}else Qc?J5(n,l)&&(V="onCompositionEnd"):n==="keydown"&&l.keyCode===229&&(V="onCompositionStart");V&&(Z5&&l.locale!=="ko"&&(Qc||V!=="onCompositionStart"?V==="onCompositionEnd"&&Qc&&(G=Q5()):(aa=A,rw="value"in aa?aa.value:aa.textContent,Qc=!0)),ee=gp(v,V),0<ee.length&&(V=new X2(V,n,null,l,A),x.push({event:V,listeners:ee}),G?V.data=G:(G=X5(l),G!==null&&(V.data=G)))),(G=Rz?zz(n,l):Fz(n,l))&&(v=gp(v,"onBeforeInput"),0<v.length&&(A=new X2("onBeforeInput","beforeinput",null,l,A),x.push({event:A,listeners:v}),A.data=G))}uD(x,r)})}function ih(n,r,l){return{instance:n,listener:r,currentTarget:l}}function gp(n,r){for(var l=r+"Capture",d=[];n!==null;){var h=n,p=h.stateNode;h.tag===5&&p!==null&&(h=p,p=Ju(n,l),p!=null&&d.unshift(ih(n,p,h)),p=Ju(n,r),p!=null&&d.push(ih(n,p,h))),n=n.return}return d}function Wc(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function uE(n,r,l,d,h){for(var p=r._reactName,k=[];l!==null&&l!==d;){var b=l,g=b.alternate,v=b.stateNode;if(g!==null&&g===d)break;b.tag===5&&v!==null&&(b=v,h?(g=Ju(l,p),g!=null&&k.unshift(ih(l,g,b))):h||(g=Ju(l,p),g!=null&&k.push(ih(l,g,b)))),l=l.return}k.length!==0&&n.push({event:r,listeners:k})}var e7=/\r\n?/g,t7=/\u0000|\uFFFD/g;function hE(n){return(typeof n=="string"?n:""+n).replace(e7,`
`).replace(t7,"")}function Pf(n,r,l){if(r=hE(r),hE(n)!==r&&l)throw Error(we(425))}function mp(){}var t0=null,n0=null;function o0(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var r0=typeof setTimeout=="function"?setTimeout:void 0,n7=typeof clearTimeout=="function"?clearTimeout:void 0,fE=typeof Promise=="function"?Promise:void 0,o7=typeof queueMicrotask=="function"?queueMicrotask:typeof fE<"u"?function(n){return fE.resolve(null).then(n).catch(r7)}:r0;function r7(n){setTimeout(function(){throw n})}function Wk(n,r){var l=r,d=0;do{var h=l.nextSibling;if(n.removeChild(l),h&&h.nodeType===8)if(l=h.data,l==="/$"){if(d===0){n.removeChild(h),th(r);return}d--}else l!=="$"&&l!=="$?"&&l!=="$!"||d++;l=h}while(l);th(r)}function ha(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function pE(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var l=n.data;if(l==="$"||l==="$!"||l==="$?"){if(r===0)return n;r--}else l==="/$"&&r++}n=n.previousSibling}return null}var Md=Math.random().toString(36).slice(2),Vi="__reactFiber$"+Md,sh="__reactProps$"+Md,ms="__reactContainer$"+Md,i0="__reactEvents$"+Md,i7="__reactListeners$"+Md,s7="__reactHandles$"+Md;function Nl(n){var r=n[Vi];if(r)return r;for(var l=n.parentNode;l;){if(r=l[ms]||l[Vi]){if(l=r.alternate,r.child!==null||l!==null&&l.child!==null)for(n=pE(n);n!==null;){if(l=n[Vi])return l;n=pE(n)}return r}n=l,l=n.parentNode}return null}function Ch(n){return n=n[Vi]||n[ms],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Xc(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(we(33))}function Kp(n){return n[sh]||null}var s0=[],ed=-1;function Sa(n){return{current:n}}function on(n){0>ed||(n.current=s0[ed],s0[ed]=null,ed--)}function Zt(n,r){ed++,s0[ed]=n.current,n.current=r}var _a={},xo=Sa(_a),Ko=Sa(!1),zl=_a;function wd(n,r){var l=n.type.contextTypes;if(!l)return _a;var d=n.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===r)return d.__reactInternalMemoizedMaskedChildContext;var h={},p;for(p in l)h[p]=r[p];return d&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=h),h}function Yo(n){return n=n.childContextTypes,n!=null}function kp(){on(Ko),on(xo)}function gE(n,r,l){if(xo.current!==_a)throw Error(we(168));Zt(xo,r),Zt(Ko,l)}function fD(n,r,l){var d=n.stateNode;if(r=r.childContextTypes,typeof d.getChildContext!="function")return l;d=d.getChildContext();for(var h in d)if(!(h in r))throw Error(we(108,$R(n)||"Unknown",h));return kn({},l,d)}function bp(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||_a,zl=xo.current,Zt(xo,n),Zt(Ko,Ko.current),!0}function mE(n,r,l){var d=n.stateNode;if(!d)throw Error(we(169));l?(n=fD(n,r,zl),d.__reactInternalMemoizedMergedChildContext=n,on(Ko),on(xo),Zt(xo,n)):on(Ko),Zt(Ko,l)}var cs=null,Yp=!1,qk=!1;function pD(n){cs===null?cs=[n]:cs.push(n)}function a7(n){Yp=!0,pD(n)}function Da(){if(!qk&&cs!==null){qk=!0;var n=0,r=Nt;try{var l=cs;for(Nt=1;n<l.length;n++){var d=l[n];do d=d(!0);while(d!==null)}cs=null,Yp=!1}catch(h){throw cs!==null&&(cs=cs.slice(n+1)),z5(ew,Da),h}finally{Nt=r,qk=!1}}return null}var td=[],nd=0,wp=null,vp=0,jr=[],Pr=0,Fl=null,ds=1,us="";function Tl(n,r){td[nd++]=vp,td[nd++]=wp,wp=n,vp=r}function gD(n,r,l){jr[Pr++]=ds,jr[Pr++]=us,jr[Pr++]=Fl,Fl=n;var d=ds;n=us;var h=32-li(d)-1;d&=~(1<<h),l+=1;var p=32-li(r)+h;if(30<p){var k=h-h%5;p=(d&(1<<k)-1).toString(32),d>>=k,h-=k,ds=1<<32-li(r)+h|l<<h|d,us=p+n}else ds=1<<p|l<<h|d,us=n}function cw(n){n.return!==null&&(Tl(n,1),gD(n,1,0))}function dw(n){for(;n===wp;)wp=td[--nd],td[nd]=null,vp=td[--nd],td[nd]=null;for(;n===Fl;)Fl=jr[--Pr],jr[Pr]=null,us=jr[--Pr],jr[Pr]=null,ds=jr[--Pr],jr[Pr]=null}var dr=null,lr=null,un=!1,ri=null;function mD(n,r){var l=Br(5,null,null,0);l.elementType="DELETED",l.stateNode=r,l.return=n,r=n.deletions,r===null?(n.deletions=[l],n.flags|=16):r.push(l)}function kE(n,r){switch(n.tag){case 5:var l=n.type;return r=r.nodeType!==1||l.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,dr=n,lr=ha(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,dr=n,lr=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(l=Fl!==null?{id:ds,overflow:us}:null,n.memoizedState={dehydrated:r,treeContext:l,retryLane:1073741824},l=Br(18,null,null,0),l.stateNode=r,l.return=n,n.child=l,dr=n,lr=null,!0):!1;default:return!1}}function a0(n){return(n.mode&1)!==0&&(n.flags&128)===0}function l0(n){if(un){var r=lr;if(r){var l=r;if(!kE(n,r)){if(a0(n))throw Error(we(418));r=ha(l.nextSibling);var d=dr;r&&kE(n,r)?mD(d,l):(n.flags=n.flags&-4097|2,un=!1,dr=n)}}else{if(a0(n))throw Error(we(418));n.flags=n.flags&-4097|2,un=!1,dr=n}}}function bE(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;dr=n}function Bf(n){if(n!==dr)return!1;if(!un)return bE(n),un=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!o0(n.type,n.memoizedProps)),r&&(r=lr)){if(a0(n))throw kD(),Error(we(418));for(;r;)mD(n,r),r=ha(r.nextSibling)}if(bE(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(we(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var l=n.data;if(l==="/$"){if(r===0){lr=ha(n.nextSibling);break e}r--}else l!=="$"&&l!=="$!"&&l!=="$?"||r++}n=n.nextSibling}lr=null}}else lr=dr?ha(n.stateNode.nextSibling):null;return!0}function kD(){for(var n=lr;n;)n=ha(n.nextSibling)}function vd(){lr=dr=null,un=!1}function uw(n){ri===null?ri=[n]:ri.push(n)}var l7=vs.ReactCurrentBatchConfig;function ti(n,r){if(n&&n.defaultProps){r=kn({},r),n=n.defaultProps;for(var l in n)r[l]===void 0&&(r[l]=n[l]);return r}return r}var _p=Sa(null),yp=null,od=null,hw=null;function fw(){hw=od=yp=null}function pw(n){var r=_p.current;on(_p),n._currentValue=r}function c0(n,r,l){for(;n!==null;){var d=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,d!==null&&(d.childLanes|=r)):d!==null&&(d.childLanes&r)!==r&&(d.childLanes|=r),n===l)break;n=n.return}}function hd(n,r){yp=n,hw=od=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&r&&(Go=!0),n.firstContext=null)}function Rr(n){var r=n._currentValue;if(hw!==n)if(n={context:n,memoizedValue:r,next:null},od===null){if(yp===null)throw Error(we(308));od=n,yp.dependencies={lanes:0,firstContext:n}}else od=od.next=n;return r}var jl=null;function gw(n){jl===null?jl=[n]:jl.push(n)}function bD(n,r,l,d){var h=r.interleaved;return h===null?(l.next=l,gw(r)):(l.next=h.next,h.next=l),r.interleaved=l,ks(n,d)}function ks(n,r){n.lanes|=r;var l=n.alternate;for(l!==null&&(l.lanes|=r),l=n,n=n.return;n!==null;)n.childLanes|=r,l=n.alternate,l!==null&&(l.childLanes|=r),l=n,n=n.return;return l.tag===3?l.stateNode:null}var oa=!1;function mw(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function wD(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function hs(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function fa(n,r,l){var d=n.updateQueue;if(d===null)return null;if(d=d.shared,kt&2){var h=d.pending;return h===null?r.next=r:(r.next=h.next,h.next=r),d.pending=r,ks(n,l)}return h=d.interleaved,h===null?(r.next=r,gw(d)):(r.next=h.next,h.next=r),d.interleaved=r,ks(n,l)}function Qf(n,r,l){if(r=r.updateQueue,r!==null&&(r=r.shared,(l&4194240)!==0)){var d=r.lanes;d&=n.pendingLanes,l|=d,r.lanes=l,tw(n,l)}}function wE(n,r){var l=n.updateQueue,d=n.alternate;if(d!==null&&(d=d.updateQueue,l===d)){var h=null,p=null;if(l=l.firstBaseUpdate,l!==null){do{var k={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};p===null?h=p=k:p=p.next=k,l=l.next}while(l!==null);p===null?h=p=r:p=p.next=r}else h=p=r;l={baseState:d.baseState,firstBaseUpdate:h,lastBaseUpdate:p,shared:d.shared,effects:d.effects},n.updateQueue=l;return}n=l.lastBaseUpdate,n===null?l.firstBaseUpdate=r:n.next=r,l.lastBaseUpdate=r}function Cp(n,r,l,d){var h=n.updateQueue;oa=!1;var p=h.firstBaseUpdate,k=h.lastBaseUpdate,b=h.shared.pending;if(b!==null){h.shared.pending=null;var g=b,v=g.next;g.next=null,k===null?p=v:k.next=v,k=g;var A=n.alternate;A!==null&&(A=A.updateQueue,b=A.lastBaseUpdate,b!==k&&(b===null?A.firstBaseUpdate=v:b.next=v,A.lastBaseUpdate=g))}if(p!==null){var x=h.baseState;k=0,A=v=g=null,b=p;do{var _=b.lane,C=b.eventTime;if((d&_)===_){A!==null&&(A=A.next={eventTime:C,lane:0,tag:b.tag,payload:b.payload,callback:b.callback,next:null});e:{var M=n,T=b;switch(_=r,C=l,T.tag){case 1:if(M=T.payload,typeof M=="function"){x=M.call(C,x,_);break e}x=M;break e;case 3:M.flags=M.flags&-65537|128;case 0:if(M=T.payload,_=typeof M=="function"?M.call(C,x,_):M,_==null)break e;x=kn({},x,_);break e;case 2:oa=!0}}b.callback!==null&&b.lane!==0&&(n.flags|=64,_=h.effects,_===null?h.effects=[b]:_.push(b))}else C={eventTime:C,lane:_,tag:b.tag,payload:b.payload,callback:b.callback,next:null},A===null?(v=A=C,g=x):A=A.next=C,k|=_;if(b=b.next,b===null){if(b=h.shared.pending,b===null)break;_=b,b=_.next,_.next=null,h.lastBaseUpdate=_,h.shared.pending=null}}while(1);if(A===null&&(g=x),h.baseState=g,h.firstBaseUpdate=v,h.lastBaseUpdate=A,r=h.shared.interleaved,r!==null){h=r;do k|=h.lane,h=h.next;while(h!==r)}else p===null&&(h.shared.lanes=0);Ul|=k,n.lanes=k,n.memoizedState=x}}function vE(n,r,l){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var d=n[r],h=d.callback;if(h!==null){if(d.callback=null,d=l,typeof h!="function")throw Error(we(191,h));h.call(d)}}}var vD=new b5.Component().refs;function d0(n,r,l,d){r=n.memoizedState,l=l(d,r),l=l==null?r:kn({},r,l),n.memoizedState=l,n.lanes===0&&(n.updateQueue.baseState=l)}var Qp={isMounted:function(n){return(n=n._reactInternals)?Kl(n)===n:!1},enqueueSetState:function(n,r,l){n=n._reactInternals;var d=No(),h=ga(n),p=hs(d,h);p.payload=r,l!=null&&(p.callback=l),r=fa(n,p,h),r!==null&&(ci(r,n,h,d),Qf(r,n,h))},enqueueReplaceState:function(n,r,l){n=n._reactInternals;var d=No(),h=ga(n),p=hs(d,h);p.tag=1,p.payload=r,l!=null&&(p.callback=l),r=fa(n,p,h),r!==null&&(ci(r,n,h,d),Qf(r,n,h))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var l=No(),d=ga(n),h=hs(l,d);h.tag=2,r!=null&&(h.callback=r),r=fa(n,h,d),r!==null&&(ci(r,n,d,l),Qf(r,n,d))}};function _E(n,r,l,d,h,p,k){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(d,p,k):r.prototype&&r.prototype.isPureReactComponent?!oh(l,d)||!oh(h,p):!0}function _D(n,r,l){var d=!1,h=_a,p=r.contextType;return typeof p=="object"&&p!==null?p=Rr(p):(h=Yo(r)?zl:xo.current,d=r.contextTypes,p=(d=d!=null)?wd(n,h):_a),r=new r(l,p),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Qp,n.stateNode=r,r._reactInternals=n,d&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=h,n.__reactInternalMemoizedMaskedChildContext=p),r}function yE(n,r,l,d){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(l,d),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(l,d),r.state!==n&&Qp.enqueueReplaceState(r,r.state,null)}function u0(n,r,l,d){var h=n.stateNode;h.props=l,h.state=n.memoizedState,h.refs=vD,mw(n);var p=r.contextType;typeof p=="object"&&p!==null?h.context=Rr(p):(p=Yo(r)?zl:xo.current,h.context=wd(n,p)),h.state=n.memoizedState,p=r.getDerivedStateFromProps,typeof p=="function"&&(d0(n,r,p,l),h.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(r=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),r!==h.state&&Qp.enqueueReplaceState(h,h.state,null),Cp(n,l,h,d),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308)}function Au(n,r,l){if(n=l.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(we(309));var d=l.stateNode}if(!d)throw Error(we(147,n));var h=d,p=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===p?r.ref:(r=function(k){var b=h.refs;b===vD&&(b=h.refs={}),k===null?delete b[p]:b[p]=k},r._stringRef=p,r)}if(typeof n!="string")throw Error(we(284));if(!l._owner)throw Error(we(290,n))}return n}function Of(n,r){throw n=Object.prototype.toString.call(r),Error(we(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function CE(n){var r=n._init;return r(n._payload)}function yD(n){function r(P,j){if(n){var R=P.deletions;R===null?(P.deletions=[j],P.flags|=16):R.push(j)}}function l(P,j){if(!n)return null;for(;j!==null;)r(P,j),j=j.sibling;return null}function d(P,j){for(P=new Map;j!==null;)j.key!==null?P.set(j.key,j):P.set(j.index,j),j=j.sibling;return P}function h(P,j){return P=ma(P,j),P.index=0,P.sibling=null,P}function p(P,j,R){return P.index=R,n?(R=P.alternate,R!==null?(R=R.index,R<j?(P.flags|=2,j):R):(P.flags|=2,j)):(P.flags|=1048576,j)}function k(P){return n&&P.alternate===null&&(P.flags|=2),P}function b(P,j,R,L){return j===null||j.tag!==6?(j=Xk(R,P.mode,L),j.return=P,j):(j=h(j,R),j.return=P,j)}function g(P,j,R,L){var q=R.type;return q===Yc?A(P,j,R.props.children,L,R.key):j!==null&&(j.elementType===q||typeof q=="object"&&q!==null&&q.$$typeof===na&&CE(q)===j.type)?(L=h(j,R.props),L.ref=Au(P,j,R),L.return=P,L):(L=np(R.type,R.key,R.props,null,P.mode,L),L.ref=Au(P,j,R),L.return=P,L)}function v(P,j,R,L){return j===null||j.tag!==4||j.stateNode.containerInfo!==R.containerInfo||j.stateNode.implementation!==R.implementation?(j=eb(R,P.mode,L),j.return=P,j):(j=h(j,R.children||[]),j.return=P,j)}function A(P,j,R,L,q){return j===null||j.tag!==7?(j=Ll(R,P.mode,L,q),j.return=P,j):(j=h(j,R),j.return=P,j)}function x(P,j,R){if(typeof j=="string"&&j!==""||typeof j=="number")return j=Xk(""+j,P.mode,R),j.return=P,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case xf:return R=np(j.type,j.key,j.props,null,P.mode,R),R.ref=Au(P,null,j),R.return=P,R;case Kc:return j=eb(j,P.mode,R),j.return=P,j;case na:var L=j._init;return x(P,L(j._payload),R)}if(Ou(j)||wu(j))return j=Ll(j,P.mode,R,null),j.return=P,j;Of(P,j)}return null}function _(P,j,R,L){var q=j!==null?j.key:null;if(typeof R=="string"&&R!==""||typeof R=="number")return q!==null?null:b(P,j,""+R,L);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case xf:return R.key===q?g(P,j,R,L):null;case Kc:return R.key===q?v(P,j,R,L):null;case na:return q=R._init,_(P,j,q(R._payload),L)}if(Ou(R)||wu(R))return q!==null?null:A(P,j,R,L,null);Of(P,R)}return null}function C(P,j,R,L,q){if(typeof L=="string"&&L!==""||typeof L=="number")return P=P.get(R)||null,b(j,P,""+L,q);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case xf:return P=P.get(L.key===null?R:L.key)||null,g(j,P,L,q);case Kc:return P=P.get(L.key===null?R:L.key)||null,v(j,P,L,q);case na:var ee=L._init;return C(P,j,R,ee(L._payload),q)}if(Ou(L)||wu(L))return P=P.get(R)||null,A(j,P,L,q,null);Of(j,L)}return null}function M(P,j,R,L){for(var q=null,ee=null,G=j,V=j=0,X=null;G!==null&&V<R.length;V++){G.index>V?(X=G,G=null):X=G.sibling;var Q=_(P,G,R[V],L);if(Q===null){G===null&&(G=X);break}n&&G&&Q.alternate===null&&r(P,G),j=p(Q,j,V),ee===null?q=Q:ee.sibling=Q,ee=Q,G=X}if(V===R.length)return l(P,G),un&&Tl(P,V),q;if(G===null){for(;V<R.length;V++)G=x(P,R[V],L),G!==null&&(j=p(G,j,V),ee===null?q=G:ee.sibling=G,ee=G);return un&&Tl(P,V),q}for(G=d(P,G);V<R.length;V++)X=C(G,P,V,R[V],L),X!==null&&(n&&X.alternate!==null&&G.delete(X.key===null?V:X.key),j=p(X,j,V),ee===null?q=X:ee.sibling=X,ee=X);return n&&G.forEach(function(ae){return r(P,ae)}),un&&Tl(P,V),q}function T(P,j,R,L){var q=wu(R);if(typeof q!="function")throw Error(we(150));if(R=q.call(R),R==null)throw Error(we(151));for(var ee=q=null,G=j,V=j=0,X=null,Q=R.next();G!==null&&!Q.done;V++,Q=R.next()){G.index>V?(X=G,G=null):X=G.sibling;var ae=_(P,G,Q.value,L);if(ae===null){G===null&&(G=X);break}n&&G&&ae.alternate===null&&r(P,G),j=p(ae,j,V),ee===null?q=ae:ee.sibling=ae,ee=ae,G=X}if(Q.done)return l(P,G),un&&Tl(P,V),q;if(G===null){for(;!Q.done;V++,Q=R.next())Q=x(P,Q.value,L),Q!==null&&(j=p(Q,j,V),ee===null?q=Q:ee.sibling=Q,ee=Q);return un&&Tl(P,V),q}for(G=d(P,G);!Q.done;V++,Q=R.next())Q=C(G,P,V,Q.value,L),Q!==null&&(n&&Q.alternate!==null&&G.delete(Q.key===null?V:Q.key),j=p(Q,j,V),ee===null?q=Q:ee.sibling=Q,ee=Q);return n&&G.forEach(function(pe){return r(P,pe)}),un&&Tl(P,V),q}function O(P,j,R,L){if(typeof R=="object"&&R!==null&&R.type===Yc&&R.key===null&&(R=R.props.children),typeof R=="object"&&R!==null){switch(R.$$typeof){case xf:e:{for(var q=R.key,ee=j;ee!==null;){if(ee.key===q){if(q=R.type,q===Yc){if(ee.tag===7){l(P,ee.sibling),j=h(ee,R.props.children),j.return=P,P=j;break e}}else if(ee.elementType===q||typeof q=="object"&&q!==null&&q.$$typeof===na&&CE(q)===ee.type){l(P,ee.sibling),j=h(ee,R.props),j.ref=Au(P,ee,R),j.return=P,P=j;break e}l(P,ee);break}else r(P,ee);ee=ee.sibling}R.type===Yc?(j=Ll(R.props.children,P.mode,L,R.key),j.return=P,P=j):(L=np(R.type,R.key,R.props,null,P.mode,L),L.ref=Au(P,j,R),L.return=P,P=L)}return k(P);case Kc:e:{for(ee=R.key;j!==null;){if(j.key===ee)if(j.tag===4&&j.stateNode.containerInfo===R.containerInfo&&j.stateNode.implementation===R.implementation){l(P,j.sibling),j=h(j,R.children||[]),j.return=P,P=j;break e}else{l(P,j);break}else r(P,j);j=j.sibling}j=eb(R,P.mode,L),j.return=P,P=j}return k(P);case na:return ee=R._init,O(P,j,ee(R._payload),L)}if(Ou(R))return M(P,j,R,L);if(wu(R))return T(P,j,R,L);Of(P,R)}return typeof R=="string"&&R!==""||typeof R=="number"?(R=""+R,j!==null&&j.tag===6?(l(P,j.sibling),j=h(j,R),j.return=P,P=j):(l(P,j),j=Xk(R,P.mode,L),j.return=P,P=j),k(P)):l(P,j)}return O}var _d=yD(!0),CD=yD(!1),Ah={},Hi=Sa(Ah),ah=Sa(Ah),lh=Sa(Ah);function Pl(n){if(n===Ah)throw Error(we(174));return n}function kw(n,r){switch(Zt(lh,r),Zt(ah,n),Zt(Hi,Ah),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:Hb(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=Hb(r,n)}on(Hi),Zt(Hi,r)}function yd(){on(Hi),on(ah),on(lh)}function AD(n){Pl(lh.current);var r=Pl(Hi.current),l=Hb(r,n.type);r!==l&&(Zt(ah,n),Zt(Hi,l))}function bw(n){ah.current===n&&(on(Hi),on(ah))}var gn=Sa(0);function Ap(n){for(var r=n;r!==null;){if(r.tag===13){var l=r.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if(r.flags&128)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Gk=[];function ww(){for(var n=0;n<Gk.length;n++)Gk[n]._workInProgressVersionPrimary=null;Gk.length=0}var Zf=vs.ReactCurrentDispatcher,Kk=vs.ReactCurrentBatchConfig,Vl=0,mn=null,$n=null,oo=null,xp=!1,Wu=!1,ch=0,c7=0;function vo(){throw Error(we(321))}function vw(n,r){if(r===null)return!1;for(var l=0;l<r.length&&l<n.length;l++)if(!di(n[l],r[l]))return!1;return!0}function _w(n,r,l,d,h,p){if(Vl=p,mn=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Zf.current=n===null||n.memoizedState===null?f7:p7,n=l(d,h),Wu){p=0;do{if(Wu=!1,ch=0,25<=p)throw Error(we(301));p+=1,oo=$n=null,r.updateQueue=null,Zf.current=g7,n=l(d,h)}while(Wu)}if(Zf.current=Ep,r=$n!==null&&$n.next!==null,Vl=0,oo=$n=mn=null,xp=!1,r)throw Error(we(300));return n}function yw(){var n=ch!==0;return ch=0,n}function Fi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return oo===null?mn.memoizedState=oo=n:oo=oo.next=n,oo}function zr(){if($n===null){var n=mn.alternate;n=n!==null?n.memoizedState:null}else n=$n.next;var r=oo===null?mn.memoizedState:oo.next;if(r!==null)oo=r,$n=n;else{if(n===null)throw Error(we(310));$n=n,n={memoizedState:$n.memoizedState,baseState:$n.baseState,baseQueue:$n.baseQueue,queue:$n.queue,next:null},oo===null?mn.memoizedState=oo=n:oo=oo.next=n}return oo}function dh(n,r){return typeof r=="function"?r(n):r}function Yk(n){var r=zr(),l=r.queue;if(l===null)throw Error(we(311));l.lastRenderedReducer=n;var d=$n,h=d.baseQueue,p=l.pending;if(p!==null){if(h!==null){var k=h.next;h.next=p.next,p.next=k}d.baseQueue=h=p,l.pending=null}if(h!==null){p=h.next,d=d.baseState;var b=k=null,g=null,v=p;do{var A=v.lane;if((Vl&A)===A)g!==null&&(g=g.next={lane:0,action:v.action,hasEagerState:v.hasEagerState,eagerState:v.eagerState,next:null}),d=v.hasEagerState?v.eagerState:n(d,v.action);else{var x={lane:A,action:v.action,hasEagerState:v.hasEagerState,eagerState:v.eagerState,next:null};g===null?(b=g=x,k=d):g=g.next=x,mn.lanes|=A,Ul|=A}v=v.next}while(v!==null&&v!==p);g===null?k=d:g.next=b,di(d,r.memoizedState)||(Go=!0),r.memoizedState=d,r.baseState=k,r.baseQueue=g,l.lastRenderedState=d}if(n=l.interleaved,n!==null){h=n;do p=h.lane,mn.lanes|=p,Ul|=p,h=h.next;while(h!==n)}else h===null&&(l.lanes=0);return[r.memoizedState,l.dispatch]}function Qk(n){var r=zr(),l=r.queue;if(l===null)throw Error(we(311));l.lastRenderedReducer=n;var d=l.dispatch,h=l.pending,p=r.memoizedState;if(h!==null){l.pending=null;var k=h=h.next;do p=n(p,k.action),k=k.next;while(k!==h);di(p,r.memoizedState)||(Go=!0),r.memoizedState=p,r.baseQueue===null&&(r.baseState=p),l.lastRenderedState=p}return[p,d]}function xD(){}function ED(n,r){var l=mn,d=zr(),h=r(),p=!di(d.memoizedState,h);if(p&&(d.memoizedState=h,Go=!0),d=d.queue,Cw(TD.bind(null,l,d,n),[n]),d.getSnapshot!==r||p||oo!==null&&oo.memoizedState.tag&1){if(l.flags|=2048,uh(9,DD.bind(null,l,d,h,r),void 0,null),ro===null)throw Error(we(349));Vl&30||SD(l,r,h)}return h}function SD(n,r,l){n.flags|=16384,n={getSnapshot:r,value:l},r=mn.updateQueue,r===null?(r={lastEffect:null,stores:null},mn.updateQueue=r,r.stores=[n]):(l=r.stores,l===null?r.stores=[n]:l.push(n))}function DD(n,r,l,d){r.value=l,r.getSnapshot=d,ID(r)&&MD(n)}function TD(n,r,l){return l(function(){ID(r)&&MD(n)})}function ID(n){var r=n.getSnapshot;n=n.value;try{var l=r();return!di(n,l)}catch{return!0}}function MD(n){var r=ks(n,1);r!==null&&ci(r,n,1,-1)}function AE(n){var r=Fi();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:dh,lastRenderedState:n},r.queue=n,n=n.dispatch=h7.bind(null,mn,n),[r.memoizedState,n]}function uh(n,r,l,d){return n={tag:n,create:r,destroy:l,deps:d,next:null},r=mn.updateQueue,r===null?(r={lastEffect:null,stores:null},mn.updateQueue=r,r.lastEffect=n.next=n):(l=r.lastEffect,l===null?r.lastEffect=n.next=n:(d=l.next,l.next=n,n.next=d,r.lastEffect=n)),n}function ND(){return zr().memoizedState}function Jf(n,r,l,d){var h=Fi();mn.flags|=n,h.memoizedState=uh(1|r,l,void 0,d===void 0?null:d)}function Zp(n,r,l,d){var h=zr();d=d===void 0?null:d;var p=void 0;if($n!==null){var k=$n.memoizedState;if(p=k.destroy,d!==null&&vw(d,k.deps)){h.memoizedState=uh(r,l,p,d);return}}mn.flags|=n,h.memoizedState=uh(1|r,l,p,d)}function xE(n,r){return Jf(8390656,8,n,r)}function Cw(n,r){return Zp(2048,8,n,r)}function jD(n,r){return Zp(4,2,n,r)}function PD(n,r){return Zp(4,4,n,r)}function BD(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function OD(n,r,l){return l=l!=null?l.concat([n]):null,Zp(4,4,BD.bind(null,r,n),l)}function Aw(){}function LD(n,r){var l=zr();r=r===void 0?null:r;var d=l.memoizedState;return d!==null&&r!==null&&vw(r,d[1])?d[0]:(l.memoizedState=[n,r],n)}function RD(n,r){var l=zr();r=r===void 0?null:r;var d=l.memoizedState;return d!==null&&r!==null&&vw(r,d[1])?d[0]:(n=n(),l.memoizedState=[n,r],n)}function zD(n,r,l){return Vl&21?(di(l,r)||(l=U5(),mn.lanes|=l,Ul|=l,n.baseState=!0),r):(n.baseState&&(n.baseState=!1,Go=!0),n.memoizedState=l)}function d7(n,r){var l=Nt;Nt=l!==0&&4>l?l:4,n(!0);var d=Kk.transition;Kk.transition={};try{n(!1),r()}finally{Nt=l,Kk.transition=d}}function FD(){return zr().memoizedState}function u7(n,r,l){var d=ga(n);if(l={lane:d,action:l,hasEagerState:!1,eagerState:null,next:null},VD(n))UD(r,l);else if(l=bD(n,r,l,d),l!==null){var h=No();ci(l,n,d,h),HD(l,r,d)}}function h7(n,r,l){var d=ga(n),h={lane:d,action:l,hasEagerState:!1,eagerState:null,next:null};if(VD(n))UD(r,h);else{var p=n.alternate;if(n.lanes===0&&(p===null||p.lanes===0)&&(p=r.lastRenderedReducer,p!==null))try{var k=r.lastRenderedState,b=p(k,l);if(h.hasEagerState=!0,h.eagerState=b,di(b,k)){var g=r.interleaved;g===null?(h.next=h,gw(r)):(h.next=g.next,g.next=h),r.interleaved=h;return}}catch{}finally{}l=bD(n,r,h,d),l!==null&&(h=No(),ci(l,n,d,h),HD(l,r,d))}}function VD(n){var r=n.alternate;return n===mn||r!==null&&r===mn}function UD(n,r){Wu=xp=!0;var l=n.pending;l===null?r.next=r:(r.next=l.next,l.next=r),n.pending=r}function HD(n,r,l){if(l&4194240){var d=r.lanes;d&=n.pendingLanes,l|=d,r.lanes=l,tw(n,l)}}var Ep={readContext:Rr,useCallback:vo,useContext:vo,useEffect:vo,useImperativeHandle:vo,useInsertionEffect:vo,useLayoutEffect:vo,useMemo:vo,useReducer:vo,useRef:vo,useState:vo,useDebugValue:vo,useDeferredValue:vo,useTransition:vo,useMutableSource:vo,useSyncExternalStore:vo,useId:vo,unstable_isNewReconciler:!1},f7={readContext:Rr,useCallback:function(n,r){return Fi().memoizedState=[n,r===void 0?null:r],n},useContext:Rr,useEffect:xE,useImperativeHandle:function(n,r,l){return l=l!=null?l.concat([n]):null,Jf(4194308,4,BD.bind(null,r,n),l)},useLayoutEffect:function(n,r){return Jf(4194308,4,n,r)},useInsertionEffect:function(n,r){return Jf(4,2,n,r)},useMemo:function(n,r){var l=Fi();return r=r===void 0?null:r,n=n(),l.memoizedState=[n,r],n},useReducer:function(n,r,l){var d=Fi();return r=l!==void 0?l(r):r,d.memoizedState=d.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},d.queue=n,n=n.dispatch=u7.bind(null,mn,n),[d.memoizedState,n]},useRef:function(n){var r=Fi();return n={current:n},r.memoizedState=n},useState:AE,useDebugValue:Aw,useDeferredValue:function(n){return Fi().memoizedState=n},useTransition:function(){var n=AE(!1),r=n[0];return n=d7.bind(null,n[1]),Fi().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,l){var d=mn,h=Fi();if(un){if(l===void 0)throw Error(we(407));l=l()}else{if(l=r(),ro===null)throw Error(we(349));Vl&30||SD(d,r,l)}h.memoizedState=l;var p={value:l,getSnapshot:r};return h.queue=p,xE(TD.bind(null,d,p,n),[n]),d.flags|=2048,uh(9,DD.bind(null,d,p,l,r),void 0,null),l},useId:function(){var n=Fi(),r=ro.identifierPrefix;if(un){var l=us,d=ds;l=(d&~(1<<32-li(d)-1)).toString(32)+l,r=":"+r+"R"+l,l=ch++,0<l&&(r+="H"+l.toString(32)),r+=":"}else l=c7++,r=":"+r+"r"+l.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},p7={readContext:Rr,useCallback:LD,useContext:Rr,useEffect:Cw,useImperativeHandle:OD,useInsertionEffect:jD,useLayoutEffect:PD,useMemo:RD,useReducer:Yk,useRef:ND,useState:function(){return Yk(dh)},useDebugValue:Aw,useDeferredValue:function(n){var r=zr();return zD(r,$n.memoizedState,n)},useTransition:function(){var n=Yk(dh)[0],r=zr().memoizedState;return[n,r]},useMutableSource:xD,useSyncExternalStore:ED,useId:FD,unstable_isNewReconciler:!1},g7={readContext:Rr,useCallback:LD,useContext:Rr,useEffect:Cw,useImperativeHandle:OD,useInsertionEffect:jD,useLayoutEffect:PD,useMemo:RD,useReducer:Qk,useRef:ND,useState:function(){return Qk(dh)},useDebugValue:Aw,useDeferredValue:function(n){var r=zr();return $n===null?r.memoizedState=n:zD(r,$n.memoizedState,n)},useTransition:function(){var n=Qk(dh)[0],r=zr().memoizedState;return[n,r]},useMutableSource:xD,useSyncExternalStore:ED,useId:FD,unstable_isNewReconciler:!1};function Cd(n,r){try{var l="",d=r;do l+=HR(d),d=d.return;while(d);var h=l}catch(p){h=`
Error generating stack: `+p.message+`
`+p.stack}return{value:n,source:r,stack:h,digest:null}}function Zk(n,r,l){return{value:n,source:null,stack:l??null,digest:r??null}}function h0(n,r){try{console.error(r.value)}catch(l){setTimeout(function(){throw l})}}var m7=typeof WeakMap=="function"?WeakMap:Map;function $D(n,r,l){l=hs(-1,l),l.tag=3,l.payload={element:null};var d=r.value;return l.callback=function(){Dp||(Dp=!0,y0=d),h0(n,r)},l}function WD(n,r,l){l=hs(-1,l),l.tag=3;var d=n.type.getDerivedStateFromError;if(typeof d=="function"){var h=r.value;l.payload=function(){return d(h)},l.callback=function(){h0(n,r)}}var p=n.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(l.callback=function(){h0(n,r),typeof d!="function"&&(pa===null?pa=new Set([this]):pa.add(this));var k=r.stack;this.componentDidCatch(r.value,{componentStack:k!==null?k:""})}),l}function EE(n,r,l){var d=n.pingCache;if(d===null){d=n.pingCache=new m7;var h=new Set;d.set(r,h)}else h=d.get(r),h===void 0&&(h=new Set,d.set(r,h));h.has(l)||(h.add(l),n=I7.bind(null,n,r,l),r.then(n,n))}function SE(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function DE(n,r,l,d,h){return n.mode&1?(n.flags|=65536,n.lanes=h,n):(n===r?n.flags|=65536:(n.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(r=hs(-1,1),r.tag=2,fa(l,r,1))),l.lanes|=1),n)}var k7=vs.ReactCurrentOwner,Go=!1;function Mo(n,r,l,d){r.child=n===null?CD(r,null,l,d):_d(r,n.child,l,d)}function TE(n,r,l,d,h){l=l.render;var p=r.ref;return hd(r,h),d=_w(n,r,l,d,p,h),l=yw(),n!==null&&!Go?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~h,bs(n,r,h)):(un&&l&&cw(r),r.flags|=1,Mo(n,r,d,h),r.child)}function IE(n,r,l,d,h){if(n===null){var p=l.type;return typeof p=="function"&&!Nw(p)&&p.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(r.tag=15,r.type=p,qD(n,r,p,d,h)):(n=np(l.type,null,d,r,r.mode,h),n.ref=r.ref,n.return=r,r.child=n)}if(p=n.child,!(n.lanes&h)){var k=p.memoizedProps;if(l=l.compare,l=l!==null?l:oh,l(k,d)&&n.ref===r.ref)return bs(n,r,h)}return r.flags|=1,n=ma(p,d),n.ref=r.ref,n.return=r,r.child=n}function qD(n,r,l,d,h){if(n!==null){var p=n.memoizedProps;if(oh(p,d)&&n.ref===r.ref)if(Go=!1,r.pendingProps=d=p,(n.lanes&h)!==0)n.flags&131072&&(Go=!0);else return r.lanes=n.lanes,bs(n,r,h)}return f0(n,r,l,d,h)}function GD(n,r,l){var d=r.pendingProps,h=d.children,p=n!==null?n.memoizedState:null;if(d.mode==="hidden")if(!(r.mode&1))r.memoizedState={baseLanes:0,cachePool:null,transitions:null},Zt(id,ar),ar|=l;else{if(!(l&1073741824))return n=p!==null?p.baseLanes|l:l,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,Zt(id,ar),ar|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},d=p!==null?p.baseLanes:l,Zt(id,ar),ar|=d}else p!==null?(d=p.baseLanes|l,r.memoizedState=null):d=l,Zt(id,ar),ar|=d;return Mo(n,r,h,l),r.child}function KD(n,r){var l=r.ref;(n===null&&l!==null||n!==null&&n.ref!==l)&&(r.flags|=512,r.flags|=2097152)}function f0(n,r,l,d,h){var p=Yo(l)?zl:xo.current;return p=wd(r,p),hd(r,h),l=_w(n,r,l,d,p,h),d=yw(),n!==null&&!Go?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~h,bs(n,r,h)):(un&&d&&cw(r),r.flags|=1,Mo(n,r,l,h),r.child)}function ME(n,r,l,d,h){if(Yo(l)){var p=!0;bp(r)}else p=!1;if(hd(r,h),r.stateNode===null)Xf(n,r),_D(r,l,d),u0(r,l,d,h),d=!0;else if(n===null){var k=r.stateNode,b=r.memoizedProps;k.props=b;var g=k.context,v=l.contextType;typeof v=="object"&&v!==null?v=Rr(v):(v=Yo(l)?zl:xo.current,v=wd(r,v));var A=l.getDerivedStateFromProps,x=typeof A=="function"||typeof k.getSnapshotBeforeUpdate=="function";x||typeof k.UNSAFE_componentWillReceiveProps!="function"&&typeof k.componentWillReceiveProps!="function"||(b!==d||g!==v)&&yE(r,k,d,v),oa=!1;var _=r.memoizedState;k.state=_,Cp(r,d,k,h),g=r.memoizedState,b!==d||_!==g||Ko.current||oa?(typeof A=="function"&&(d0(r,l,A,d),g=r.memoizedState),(b=oa||_E(r,l,b,d,_,g,v))?(x||typeof k.UNSAFE_componentWillMount!="function"&&typeof k.componentWillMount!="function"||(typeof k.componentWillMount=="function"&&k.componentWillMount(),typeof k.UNSAFE_componentWillMount=="function"&&k.UNSAFE_componentWillMount()),typeof k.componentDidMount=="function"&&(r.flags|=4194308)):(typeof k.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=d,r.memoizedState=g),k.props=d,k.state=g,k.context=v,d=b):(typeof k.componentDidMount=="function"&&(r.flags|=4194308),d=!1)}else{k=r.stateNode,wD(n,r),b=r.memoizedProps,v=r.type===r.elementType?b:ti(r.type,b),k.props=v,x=r.pendingProps,_=k.context,g=l.contextType,typeof g=="object"&&g!==null?g=Rr(g):(g=Yo(l)?zl:xo.current,g=wd(r,g));var C=l.getDerivedStateFromProps;(A=typeof C=="function"||typeof k.getSnapshotBeforeUpdate=="function")||typeof k.UNSAFE_componentWillReceiveProps!="function"&&typeof k.componentWillReceiveProps!="function"||(b!==x||_!==g)&&yE(r,k,d,g),oa=!1,_=r.memoizedState,k.state=_,Cp(r,d,k,h);var M=r.memoizedState;b!==x||_!==M||Ko.current||oa?(typeof C=="function"&&(d0(r,l,C,d),M=r.memoizedState),(v=oa||_E(r,l,v,d,_,M,g)||!1)?(A||typeof k.UNSAFE_componentWillUpdate!="function"&&typeof k.componentWillUpdate!="function"||(typeof k.componentWillUpdate=="function"&&k.componentWillUpdate(d,M,g),typeof k.UNSAFE_componentWillUpdate=="function"&&k.UNSAFE_componentWillUpdate(d,M,g)),typeof k.componentDidUpdate=="function"&&(r.flags|=4),typeof k.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof k.componentDidUpdate!="function"||b===n.memoizedProps&&_===n.memoizedState||(r.flags|=4),typeof k.getSnapshotBeforeUpdate!="function"||b===n.memoizedProps&&_===n.memoizedState||(r.flags|=1024),r.memoizedProps=d,r.memoizedState=M),k.props=d,k.state=M,k.context=g,d=v):(typeof k.componentDidUpdate!="function"||b===n.memoizedProps&&_===n.memoizedState||(r.flags|=4),typeof k.getSnapshotBeforeUpdate!="function"||b===n.memoizedProps&&_===n.memoizedState||(r.flags|=1024),d=!1)}return p0(n,r,l,d,p,h)}function p0(n,r,l,d,h,p){KD(n,r);var k=(r.flags&128)!==0;if(!d&&!k)return h&&mE(r,l,!1),bs(n,r,p);d=r.stateNode,k7.current=r;var b=k&&typeof l.getDerivedStateFromError!="function"?null:d.render();return r.flags|=1,n!==null&&k?(r.child=_d(r,n.child,null,p),r.child=_d(r,null,b,p)):Mo(n,r,b,p),r.memoizedState=d.state,h&&mE(r,l,!0),r.child}function YD(n){var r=n.stateNode;r.pendingContext?gE(n,r.pendingContext,r.pendingContext!==r.context):r.context&&gE(n,r.context,!1),kw(n,r.containerInfo)}function NE(n,r,l,d,h){return vd(),uw(h),r.flags|=256,Mo(n,r,l,d),r.child}var g0={dehydrated:null,treeContext:null,retryLane:0};function m0(n){return{baseLanes:n,cachePool:null,transitions:null}}function QD(n,r,l){var d=r.pendingProps,h=gn.current,p=!1,k=(r.flags&128)!==0,b;if((b=k)||(b=n!==null&&n.memoizedState===null?!1:(h&2)!==0),b?(p=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(h|=1),Zt(gn,h&1),n===null)return l0(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(r.mode&1?n.data==="$!"?r.lanes=8:r.lanes=1073741824:r.lanes=1,null):(k=d.children,n=d.fallback,p?(d=r.mode,p=r.child,k={mode:"hidden",children:k},!(d&1)&&p!==null?(p.childLanes=0,p.pendingProps=k):p=eg(k,d,0,null),n=Ll(n,d,l,null),p.return=r,n.return=r,p.sibling=n,r.child=p,r.child.memoizedState=m0(l),r.memoizedState=g0,n):xw(r,k));if(h=n.memoizedState,h!==null&&(b=h.dehydrated,b!==null))return b7(n,r,k,d,b,h,l);if(p){p=d.fallback,k=r.mode,h=n.child,b=h.sibling;var g={mode:"hidden",children:d.children};return!(k&1)&&r.child!==h?(d=r.child,d.childLanes=0,d.pendingProps=g,r.deletions=null):(d=ma(h,g),d.subtreeFlags=h.subtreeFlags&14680064),b!==null?p=ma(b,p):(p=Ll(p,k,l,null),p.flags|=2),p.return=r,d.return=r,d.sibling=p,r.child=d,d=p,p=r.child,k=n.child.memoizedState,k=k===null?m0(l):{baseLanes:k.baseLanes|l,cachePool:null,transitions:k.transitions},p.memoizedState=k,p.childLanes=n.childLanes&~l,r.memoizedState=g0,d}return p=n.child,n=p.sibling,d=ma(p,{mode:"visible",children:d.children}),!(r.mode&1)&&(d.lanes=l),d.return=r,d.sibling=null,n!==null&&(l=r.deletions,l===null?(r.deletions=[n],r.flags|=16):l.push(n)),r.child=d,r.memoizedState=null,d}function xw(n,r){return r=eg({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function Lf(n,r,l,d){return d!==null&&uw(d),_d(r,n.child,null,l),n=xw(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function b7(n,r,l,d,h,p,k){if(l)return r.flags&256?(r.flags&=-257,d=Zk(Error(we(422))),Lf(n,r,k,d)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(p=d.fallback,h=r.mode,d=eg({mode:"visible",children:d.children},h,0,null),p=Ll(p,h,k,null),p.flags|=2,d.return=r,p.return=r,d.sibling=p,r.child=d,r.mode&1&&_d(r,n.child,null,k),r.child.memoizedState=m0(k),r.memoizedState=g0,p);if(!(r.mode&1))return Lf(n,r,k,null);if(h.data==="$!"){if(d=h.nextSibling&&h.nextSibling.dataset,d)var b=d.dgst;return d=b,p=Error(we(419)),d=Zk(p,d,void 0),Lf(n,r,k,d)}if(b=(k&n.childLanes)!==0,Go||b){if(d=ro,d!==null){switch(k&-k){case 4:h=2;break;case 16:h=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:h=32;break;case 536870912:h=268435456;break;default:h=0}h=h&(d.suspendedLanes|k)?0:h,h!==0&&h!==p.retryLane&&(p.retryLane=h,ks(n,h),ci(d,n,h,-1))}return Mw(),d=Zk(Error(we(421))),Lf(n,r,k,d)}return h.data==="$?"?(r.flags|=128,r.child=n.child,r=M7.bind(null,n),h._reactRetry=r,null):(n=p.treeContext,lr=ha(h.nextSibling),dr=r,un=!0,ri=null,n!==null&&(jr[Pr++]=ds,jr[Pr++]=us,jr[Pr++]=Fl,ds=n.id,us=n.overflow,Fl=r),r=xw(r,d.children),r.flags|=4096,r)}function jE(n,r,l){n.lanes|=r;var d=n.alternate;d!==null&&(d.lanes|=r),c0(n.return,r,l)}function Jk(n,r,l,d,h){var p=n.memoizedState;p===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:d,tail:l,tailMode:h}:(p.isBackwards=r,p.rendering=null,p.renderingStartTime=0,p.last=d,p.tail=l,p.tailMode=h)}function ZD(n,r,l){var d=r.pendingProps,h=d.revealOrder,p=d.tail;if(Mo(n,r,d.children,l),d=gn.current,d&2)d=d&1|2,r.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&jE(n,l,r);else if(n.tag===19)jE(n,l,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}d&=1}if(Zt(gn,d),!(r.mode&1))r.memoizedState=null;else switch(h){case"forwards":for(l=r.child,h=null;l!==null;)n=l.alternate,n!==null&&Ap(n)===null&&(h=l),l=l.sibling;l=h,l===null?(h=r.child,r.child=null):(h=l.sibling,l.sibling=null),Jk(r,!1,h,l,p);break;case"backwards":for(l=null,h=r.child,r.child=null;h!==null;){if(n=h.alternate,n!==null&&Ap(n)===null){r.child=h;break}n=h.sibling,h.sibling=l,l=h,h=n}Jk(r,!0,l,null,p);break;case"together":Jk(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Xf(n,r){!(r.mode&1)&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function bs(n,r,l){if(n!==null&&(r.dependencies=n.dependencies),Ul|=r.lanes,!(l&r.childLanes))return null;if(n!==null&&r.child!==n.child)throw Error(we(153));if(r.child!==null){for(n=r.child,l=ma(n,n.pendingProps),r.child=l,l.return=r;n.sibling!==null;)n=n.sibling,l=l.sibling=ma(n,n.pendingProps),l.return=r;l.sibling=null}return r.child}function w7(n,r,l){switch(r.tag){case 3:YD(r),vd();break;case 5:AD(r);break;case 1:Yo(r.type)&&bp(r);break;case 4:kw(r,r.stateNode.containerInfo);break;case 10:var d=r.type._context,h=r.memoizedProps.value;Zt(_p,d._currentValue),d._currentValue=h;break;case 13:if(d=r.memoizedState,d!==null)return d.dehydrated!==null?(Zt(gn,gn.current&1),r.flags|=128,null):l&r.child.childLanes?QD(n,r,l):(Zt(gn,gn.current&1),n=bs(n,r,l),n!==null?n.sibling:null);Zt(gn,gn.current&1);break;case 19:if(d=(l&r.childLanes)!==0,n.flags&128){if(d)return ZD(n,r,l);r.flags|=128}if(h=r.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),Zt(gn,gn.current),d)break;return null;case 22:case 23:return r.lanes=0,GD(n,r,l)}return bs(n,r,l)}var JD,k0,XD,eT;JD=function(n,r){for(var l=r.child;l!==null;){if(l.tag===5||l.tag===6)n.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===r)break;for(;l.sibling===null;){if(l.return===null||l.return===r)return;l=l.return}l.sibling.return=l.return,l=l.sibling}};k0=function(){};XD=function(n,r,l,d){var h=n.memoizedProps;if(h!==d){n=r.stateNode,Pl(Hi.current);var p=null;switch(l){case"input":h=zb(n,h),d=zb(n,d),p=[];break;case"select":h=kn({},h,{value:void 0}),d=kn({},d,{value:void 0}),p=[];break;case"textarea":h=Ub(n,h),d=Ub(n,d),p=[];break;default:typeof h.onClick!="function"&&typeof d.onClick=="function"&&(n.onclick=mp)}$b(l,d);var k;l=null;for(v in h)if(!d.hasOwnProperty(v)&&h.hasOwnProperty(v)&&h[v]!=null)if(v==="style"){var b=h[v];for(k in b)b.hasOwnProperty(k)&&(l||(l={}),l[k]="")}else v!=="dangerouslySetInnerHTML"&&v!=="children"&&v!=="suppressContentEditableWarning"&&v!=="suppressHydrationWarning"&&v!=="autoFocus"&&(Qu.hasOwnProperty(v)?p||(p=[]):(p=p||[]).push(v,null));for(v in d){var g=d[v];if(b=h!=null?h[v]:void 0,d.hasOwnProperty(v)&&g!==b&&(g!=null||b!=null))if(v==="style")if(b){for(k in b)!b.hasOwnProperty(k)||g&&g.hasOwnProperty(k)||(l||(l={}),l[k]="");for(k in g)g.hasOwnProperty(k)&&b[k]!==g[k]&&(l||(l={}),l[k]=g[k])}else l||(p||(p=[]),p.push(v,l)),l=g;else v==="dangerouslySetInnerHTML"?(g=g?g.__html:void 0,b=b?b.__html:void 0,g!=null&&b!==g&&(p=p||[]).push(v,g)):v==="children"?typeof g!="string"&&typeof g!="number"||(p=p||[]).push(v,""+g):v!=="suppressContentEditableWarning"&&v!=="suppressHydrationWarning"&&(Qu.hasOwnProperty(v)?(g!=null&&v==="onScroll"&&nn("scroll",n),p||b===g||(p=[])):(p=p||[]).push(v,g))}l&&(p=p||[]).push("style",l);var v=p;(r.updateQueue=v)&&(r.flags|=4)}};eT=function(n,r,l,d){l!==d&&(r.flags|=4)};function xu(n,r){if(!un)switch(n.tailMode){case"hidden":r=n.tail;for(var l=null;r!==null;)r.alternate!==null&&(l=r),r=r.sibling;l===null?n.tail=null:l.sibling=null;break;case"collapsed":l=n.tail;for(var d=null;l!==null;)l.alternate!==null&&(d=l),l=l.sibling;d===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:d.sibling=null}}function _o(n){var r=n.alternate!==null&&n.alternate.child===n.child,l=0,d=0;if(r)for(var h=n.child;h!==null;)l|=h.lanes|h.childLanes,d|=h.subtreeFlags&14680064,d|=h.flags&14680064,h.return=n,h=h.sibling;else for(h=n.child;h!==null;)l|=h.lanes|h.childLanes,d|=h.subtreeFlags,d|=h.flags,h.return=n,h=h.sibling;return n.subtreeFlags|=d,n.childLanes=l,r}function v7(n,r,l){var d=r.pendingProps;switch(dw(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return _o(r),null;case 1:return Yo(r.type)&&kp(),_o(r),null;case 3:return d=r.stateNode,yd(),on(Ko),on(xo),ww(),d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null),(n===null||n.child===null)&&(Bf(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&!(r.flags&256)||(r.flags|=1024,ri!==null&&(x0(ri),ri=null))),k0(n,r),_o(r),null;case 5:bw(r);var h=Pl(lh.current);if(l=r.type,n!==null&&r.stateNode!=null)XD(n,r,l,d,h),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!d){if(r.stateNode===null)throw Error(we(166));return _o(r),null}if(n=Pl(Hi.current),Bf(r)){d=r.stateNode,l=r.type;var p=r.memoizedProps;switch(d[Vi]=r,d[sh]=p,n=(r.mode&1)!==0,l){case"dialog":nn("cancel",d),nn("close",d);break;case"iframe":case"object":case"embed":nn("load",d);break;case"video":case"audio":for(h=0;h<Ru.length;h++)nn(Ru[h],d);break;case"source":nn("error",d);break;case"img":case"image":case"link":nn("error",d),nn("load",d);break;case"details":nn("toggle",d);break;case"input":U2(d,p),nn("invalid",d);break;case"select":d._wrapperState={wasMultiple:!!p.multiple},nn("invalid",d);break;case"textarea":$2(d,p),nn("invalid",d)}$b(l,p),h=null;for(var k in p)if(p.hasOwnProperty(k)){var b=p[k];k==="children"?typeof b=="string"?d.textContent!==b&&(p.suppressHydrationWarning!==!0&&Pf(d.textContent,b,n),h=["children",b]):typeof b=="number"&&d.textContent!==""+b&&(p.suppressHydrationWarning!==!0&&Pf(d.textContent,b,n),h=["children",""+b]):Qu.hasOwnProperty(k)&&b!=null&&k==="onScroll"&&nn("scroll",d)}switch(l){case"input":Ef(d),H2(d,p,!0);break;case"textarea":Ef(d),W2(d);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(d.onclick=mp)}d=h,r.updateQueue=d,d!==null&&(r.flags|=4)}else{k=h.nodeType===9?h:h.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=S5(l)),n==="http://www.w3.org/1999/xhtml"?l==="script"?(n=k.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof d.is=="string"?n=k.createElement(l,{is:d.is}):(n=k.createElement(l),l==="select"&&(k=n,d.multiple?k.multiple=!0:d.size&&(k.size=d.size))):n=k.createElementNS(n,l),n[Vi]=r,n[sh]=d,JD(n,r,!1,!1),r.stateNode=n;e:{switch(k=Wb(l,d),l){case"dialog":nn("cancel",n),nn("close",n),h=d;break;case"iframe":case"object":case"embed":nn("load",n),h=d;break;case"video":case"audio":for(h=0;h<Ru.length;h++)nn(Ru[h],n);h=d;break;case"source":nn("error",n),h=d;break;case"img":case"image":case"link":nn("error",n),nn("load",n),h=d;break;case"details":nn("toggle",n),h=d;break;case"input":U2(n,d),h=zb(n,d),nn("invalid",n);break;case"option":h=d;break;case"select":n._wrapperState={wasMultiple:!!d.multiple},h=kn({},d,{value:void 0}),nn("invalid",n);break;case"textarea":$2(n,d),h=Ub(n,d),nn("invalid",n);break;default:h=d}$b(l,h),b=h;for(p in b)if(b.hasOwnProperty(p)){var g=b[p];p==="style"?I5(n,g):p==="dangerouslySetInnerHTML"?(g=g?g.__html:void 0,g!=null&&D5(n,g)):p==="children"?typeof g=="string"?(l!=="textarea"||g!=="")&&Zu(n,g):typeof g=="number"&&Zu(n,""+g):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(Qu.hasOwnProperty(p)?g!=null&&p==="onScroll"&&nn("scroll",n):g!=null&&Y0(n,p,g,k))}switch(l){case"input":Ef(n),H2(n,d,!1);break;case"textarea":Ef(n),W2(n);break;case"option":d.value!=null&&n.setAttribute("value",""+va(d.value));break;case"select":n.multiple=!!d.multiple,p=d.value,p!=null?ld(n,!!d.multiple,p,!1):d.defaultValue!=null&&ld(n,!!d.multiple,d.defaultValue,!0);break;default:typeof h.onClick=="function"&&(n.onclick=mp)}switch(l){case"button":case"input":case"select":case"textarea":d=!!d.autoFocus;break e;case"img":d=!0;break e;default:d=!1}}d&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return _o(r),null;case 6:if(n&&r.stateNode!=null)eT(n,r,n.memoizedProps,d);else{if(typeof d!="string"&&r.stateNode===null)throw Error(we(166));if(l=Pl(lh.current),Pl(Hi.current),Bf(r)){if(d=r.stateNode,l=r.memoizedProps,d[Vi]=r,(p=d.nodeValue!==l)&&(n=dr,n!==null))switch(n.tag){case 3:Pf(d.nodeValue,l,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Pf(d.nodeValue,l,(n.mode&1)!==0)}p&&(r.flags|=4)}else d=(l.nodeType===9?l:l.ownerDocument).createTextNode(d),d[Vi]=r,r.stateNode=d}return _o(r),null;case 13:if(on(gn),d=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(un&&lr!==null&&r.mode&1&&!(r.flags&128))kD(),vd(),r.flags|=98560,p=!1;else if(p=Bf(r),d!==null&&d.dehydrated!==null){if(n===null){if(!p)throw Error(we(318));if(p=r.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(we(317));p[Vi]=r}else vd(),!(r.flags&128)&&(r.memoizedState=null),r.flags|=4;_o(r),p=!1}else ri!==null&&(x0(ri),ri=null),p=!0;if(!p)return r.flags&65536?r:null}return r.flags&128?(r.lanes=l,r):(d=d!==null,d!==(n!==null&&n.memoizedState!==null)&&d&&(r.child.flags|=8192,r.mode&1&&(n===null||gn.current&1?Wn===0&&(Wn=3):Mw())),r.updateQueue!==null&&(r.flags|=4),_o(r),null);case 4:return yd(),k0(n,r),n===null&&rh(r.stateNode.containerInfo),_o(r),null;case 10:return pw(r.type._context),_o(r),null;case 17:return Yo(r.type)&&kp(),_o(r),null;case 19:if(on(gn),p=r.memoizedState,p===null)return _o(r),null;if(d=(r.flags&128)!==0,k=p.rendering,k===null)if(d)xu(p,!1);else{if(Wn!==0||n!==null&&n.flags&128)for(n=r.child;n!==null;){if(k=Ap(n),k!==null){for(r.flags|=128,xu(p,!1),d=k.updateQueue,d!==null&&(r.updateQueue=d,r.flags|=4),r.subtreeFlags=0,d=l,l=r.child;l!==null;)p=l,n=d,p.flags&=14680066,k=p.alternate,k===null?(p.childLanes=0,p.lanes=n,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=k.childLanes,p.lanes=k.lanes,p.child=k.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=k.memoizedProps,p.memoizedState=k.memoizedState,p.updateQueue=k.updateQueue,p.type=k.type,n=k.dependencies,p.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),l=l.sibling;return Zt(gn,gn.current&1|2),r.child}n=n.sibling}p.tail!==null&&Tn()>Ad&&(r.flags|=128,d=!0,xu(p,!1),r.lanes=4194304)}else{if(!d)if(n=Ap(k),n!==null){if(r.flags|=128,d=!0,l=n.updateQueue,l!==null&&(r.updateQueue=l,r.flags|=4),xu(p,!0),p.tail===null&&p.tailMode==="hidden"&&!k.alternate&&!un)return _o(r),null}else 2*Tn()-p.renderingStartTime>Ad&&l!==1073741824&&(r.flags|=128,d=!0,xu(p,!1),r.lanes=4194304);p.isBackwards?(k.sibling=r.child,r.child=k):(l=p.last,l!==null?l.sibling=k:r.child=k,p.last=k)}return p.tail!==null?(r=p.tail,p.rendering=r,p.tail=r.sibling,p.renderingStartTime=Tn(),r.sibling=null,l=gn.current,Zt(gn,d?l&1|2:l&1),r):(_o(r),null);case 22:case 23:return Iw(),d=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==d&&(r.flags|=8192),d&&r.mode&1?ar&1073741824&&(_o(r),r.subtreeFlags&6&&(r.flags|=8192)):_o(r),null;case 24:return null;case 25:return null}throw Error(we(156,r.tag))}function _7(n,r){switch(dw(r),r.tag){case 1:return Yo(r.type)&&kp(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return yd(),on(Ko),on(xo),ww(),n=r.flags,n&65536&&!(n&128)?(r.flags=n&-65537|128,r):null;case 5:return bw(r),null;case 13:if(on(gn),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(we(340));vd()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return on(gn),null;case 4:return yd(),null;case 10:return pw(r.type._context),null;case 22:case 23:return Iw(),null;case 24:return null;default:return null}}var Rf=!1,Ao=!1,y7=typeof WeakSet=="function"?WeakSet:Set,Ie=null;function rd(n,r){var l=n.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(d){yn(n,r,d)}else l.current=null}function b0(n,r,l){try{l()}catch(d){yn(n,r,d)}}var PE=!1;function C7(n,r){if(t0=fp,n=rD(),lw(n)){if("selectionStart"in n)var l={start:n.selectionStart,end:n.selectionEnd};else e:{l=(l=n.ownerDocument)&&l.defaultView||window;var d=l.getSelection&&l.getSelection();if(d&&d.rangeCount!==0){l=d.anchorNode;var h=d.anchorOffset,p=d.focusNode;d=d.focusOffset;try{l.nodeType,p.nodeType}catch{l=null;break e}var k=0,b=-1,g=-1,v=0,A=0,x=n,_=null;t:for(;;){for(var C;x!==l||h!==0&&x.nodeType!==3||(b=k+h),x!==p||d!==0&&x.nodeType!==3||(g=k+d),x.nodeType===3&&(k+=x.nodeValue.length),(C=x.firstChild)!==null;)_=x,x=C;for(;;){if(x===n)break t;if(_===l&&++v===h&&(b=k),_===p&&++A===d&&(g=k),(C=x.nextSibling)!==null)break;x=_,_=x.parentNode}x=C}l=b===-1||g===-1?null:{start:b,end:g}}else l=null}l=l||{start:0,end:0}}else l=null;for(n0={focusedElem:n,selectionRange:l},fp=!1,Ie=r;Ie!==null;)if(r=Ie,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,Ie=n;else for(;Ie!==null;){r=Ie;try{var M=r.alternate;if(r.flags&1024)switch(r.tag){case 0:case 11:case 15:break;case 1:if(M!==null){var T=M.memoizedProps,O=M.memoizedState,P=r.stateNode,j=P.getSnapshotBeforeUpdate(r.elementType===r.type?T:ti(r.type,T),O);P.__reactInternalSnapshotBeforeUpdate=j}break;case 3:var R=r.stateNode.containerInfo;R.nodeType===1?R.textContent="":R.nodeType===9&&R.documentElement&&R.removeChild(R.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(we(163))}}catch(L){yn(r,r.return,L)}if(n=r.sibling,n!==null){n.return=r.return,Ie=n;break}Ie=r.return}return M=PE,PE=!1,M}function qu(n,r,l){var d=r.updateQueue;if(d=d!==null?d.lastEffect:null,d!==null){var h=d=d.next;do{if((h.tag&n)===n){var p=h.destroy;h.destroy=void 0,p!==void 0&&b0(r,l,p)}h=h.next}while(h!==d)}}function Jp(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&n)===n){var d=l.create;l.destroy=d()}l=l.next}while(l!==r)}}function w0(n){var r=n.ref;if(r!==null){var l=n.stateNode;switch(n.tag){case 5:n=l;break;default:n=l}typeof r=="function"?r(n):r.current=n}}function tT(n){var r=n.alternate;r!==null&&(n.alternate=null,tT(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[Vi],delete r[sh],delete r[i0],delete r[i7],delete r[s7])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function nT(n){return n.tag===5||n.tag===3||n.tag===4}function BE(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||nT(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function v0(n,r,l){var d=n.tag;if(d===5||d===6)n=n.stateNode,r?l.nodeType===8?l.parentNode.insertBefore(n,r):l.insertBefore(n,r):(l.nodeType===8?(r=l.parentNode,r.insertBefore(n,l)):(r=l,r.appendChild(n)),l=l._reactRootContainer,l!=null||r.onclick!==null||(r.onclick=mp));else if(d!==4&&(n=n.child,n!==null))for(v0(n,r,l),n=n.sibling;n!==null;)v0(n,r,l),n=n.sibling}function _0(n,r,l){var d=n.tag;if(d===5||d===6)n=n.stateNode,r?l.insertBefore(n,r):l.appendChild(n);else if(d!==4&&(n=n.child,n!==null))for(_0(n,r,l),n=n.sibling;n!==null;)_0(n,r,l),n=n.sibling}var uo=null,ni=!1;function ea(n,r,l){for(l=l.child;l!==null;)oT(n,r,l),l=l.sibling}function oT(n,r,l){if(Ui&&typeof Ui.onCommitFiberUnmount=="function")try{Ui.onCommitFiberUnmount($p,l)}catch{}switch(l.tag){case 5:Ao||rd(l,r);case 6:var d=uo,h=ni;uo=null,ea(n,r,l),uo=d,ni=h,uo!==null&&(ni?(n=uo,l=l.stateNode,n.nodeType===8?n.parentNode.removeChild(l):n.removeChild(l)):uo.removeChild(l.stateNode));break;case 18:uo!==null&&(ni?(n=uo,l=l.stateNode,n.nodeType===8?Wk(n.parentNode,l):n.nodeType===1&&Wk(n,l),th(n)):Wk(uo,l.stateNode));break;case 4:d=uo,h=ni,uo=l.stateNode.containerInfo,ni=!0,ea(n,r,l),uo=d,ni=h;break;case 0:case 11:case 14:case 15:if(!Ao&&(d=l.updateQueue,d!==null&&(d=d.lastEffect,d!==null))){h=d=d.next;do{var p=h,k=p.destroy;p=p.tag,k!==void 0&&(p&2||p&4)&&b0(l,r,k),h=h.next}while(h!==d)}ea(n,r,l);break;case 1:if(!Ao&&(rd(l,r),d=l.stateNode,typeof d.componentWillUnmount=="function"))try{d.props=l.memoizedProps,d.state=l.memoizedState,d.componentWillUnmount()}catch(b){yn(l,r,b)}ea(n,r,l);break;case 21:ea(n,r,l);break;case 22:l.mode&1?(Ao=(d=Ao)||l.memoizedState!==null,ea(n,r,l),Ao=d):ea(n,r,l);break;default:ea(n,r,l)}}function OE(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var l=n.stateNode;l===null&&(l=n.stateNode=new y7),r.forEach(function(d){var h=N7.bind(null,n,d);l.has(d)||(l.add(d),d.then(h,h))})}}function ei(n,r){var l=r.deletions;if(l!==null)for(var d=0;d<l.length;d++){var h=l[d];try{var p=n,k=r,b=k;e:for(;b!==null;){switch(b.tag){case 5:uo=b.stateNode,ni=!1;break e;case 3:uo=b.stateNode.containerInfo,ni=!0;break e;case 4:uo=b.stateNode.containerInfo,ni=!0;break e}b=b.return}if(uo===null)throw Error(we(160));oT(p,k,h),uo=null,ni=!1;var g=h.alternate;g!==null&&(g.return=null),h.return=null}catch(v){yn(h,r,v)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)rT(r,n),r=r.sibling}function rT(n,r){var l=n.alternate,d=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(ei(r,n),Li(n),d&4){try{qu(3,n,n.return),Jp(3,n)}catch(T){yn(n,n.return,T)}try{qu(5,n,n.return)}catch(T){yn(n,n.return,T)}}break;case 1:ei(r,n),Li(n),d&512&&l!==null&&rd(l,l.return);break;case 5:if(ei(r,n),Li(n),d&512&&l!==null&&rd(l,l.return),n.flags&32){var h=n.stateNode;try{Zu(h,"")}catch(T){yn(n,n.return,T)}}if(d&4&&(h=n.stateNode,h!=null)){var p=n.memoizedProps,k=l!==null?l.memoizedProps:p,b=n.type,g=n.updateQueue;if(n.updateQueue=null,g!==null)try{b==="input"&&p.type==="radio"&&p.name!=null&&x5(h,p),Wb(b,k);var v=Wb(b,p);for(k=0;k<g.length;k+=2){var A=g[k],x=g[k+1];A==="style"?I5(h,x):A==="dangerouslySetInnerHTML"?D5(h,x):A==="children"?Zu(h,x):Y0(h,A,x,v)}switch(b){case"input":Fb(h,p);break;case"textarea":E5(h,p);break;case"select":var _=h._wrapperState.wasMultiple;h._wrapperState.wasMultiple=!!p.multiple;var C=p.value;C!=null?ld(h,!!p.multiple,C,!1):_!==!!p.multiple&&(p.defaultValue!=null?ld(h,!!p.multiple,p.defaultValue,!0):ld(h,!!p.multiple,p.multiple?[]:"",!1))}h[sh]=p}catch(T){yn(n,n.return,T)}}break;case 6:if(ei(r,n),Li(n),d&4){if(n.stateNode===null)throw Error(we(162));h=n.stateNode,p=n.memoizedProps;try{h.nodeValue=p}catch(T){yn(n,n.return,T)}}break;case 3:if(ei(r,n),Li(n),d&4&&l!==null&&l.memoizedState.isDehydrated)try{th(r.containerInfo)}catch(T){yn(n,n.return,T)}break;case 4:ei(r,n),Li(n);break;case 13:ei(r,n),Li(n),h=n.child,h.flags&8192&&(p=h.memoizedState!==null,h.stateNode.isHidden=p,!p||h.alternate!==null&&h.alternate.memoizedState!==null||(Dw=Tn())),d&4&&OE(n);break;case 22:if(A=l!==null&&l.memoizedState!==null,n.mode&1?(Ao=(v=Ao)||A,ei(r,n),Ao=v):ei(r,n),Li(n),d&8192){if(v=n.memoizedState!==null,(n.stateNode.isHidden=v)&&!A&&n.mode&1)for(Ie=n,A=n.child;A!==null;){for(x=Ie=A;Ie!==null;){switch(_=Ie,C=_.child,_.tag){case 0:case 11:case 14:case 15:qu(4,_,_.return);break;case 1:rd(_,_.return);var M=_.stateNode;if(typeof M.componentWillUnmount=="function"){d=_,l=_.return;try{r=d,M.props=r.memoizedProps,M.state=r.memoizedState,M.componentWillUnmount()}catch(T){yn(d,l,T)}}break;case 5:rd(_,_.return);break;case 22:if(_.memoizedState!==null){RE(x);continue}}C!==null?(C.return=_,Ie=C):RE(x)}A=A.sibling}e:for(A=null,x=n;;){if(x.tag===5){if(A===null){A=x;try{h=x.stateNode,v?(p=h.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(b=x.stateNode,g=x.memoizedProps.style,k=g!=null&&g.hasOwnProperty("display")?g.display:null,b.style.display=T5("display",k))}catch(T){yn(n,n.return,T)}}}else if(x.tag===6){if(A===null)try{x.stateNode.nodeValue=v?"":x.memoizedProps}catch(T){yn(n,n.return,T)}}else if((x.tag!==22&&x.tag!==23||x.memoizedState===null||x===n)&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===n)break e;for(;x.sibling===null;){if(x.return===null||x.return===n)break e;A===x&&(A=null),x=x.return}A===x&&(A=null),x.sibling.return=x.return,x=x.sibling}}break;case 19:ei(r,n),Li(n),d&4&&OE(n);break;case 21:break;default:ei(r,n),Li(n)}}function Li(n){var r=n.flags;if(r&2){try{e:{for(var l=n.return;l!==null;){if(nT(l)){var d=l;break e}l=l.return}throw Error(we(160))}switch(d.tag){case 5:var h=d.stateNode;d.flags&32&&(Zu(h,""),d.flags&=-33);var p=BE(n);_0(n,p,h);break;case 3:case 4:var k=d.stateNode.containerInfo,b=BE(n);v0(n,b,k);break;default:throw Error(we(161))}}catch(g){yn(n,n.return,g)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function A7(n,r,l){Ie=n,iT(n)}function iT(n,r,l){for(var d=(n.mode&1)!==0;Ie!==null;){var h=Ie,p=h.child;if(h.tag===22&&d){var k=h.memoizedState!==null||Rf;if(!k){var b=h.alternate,g=b!==null&&b.memoizedState!==null||Ao;b=Rf;var v=Ao;if(Rf=k,(Ao=g)&&!v)for(Ie=h;Ie!==null;)k=Ie,g=k.child,k.tag===22&&k.memoizedState!==null?zE(h):g!==null?(g.return=k,Ie=g):zE(h);for(;p!==null;)Ie=p,iT(p),p=p.sibling;Ie=h,Rf=b,Ao=v}LE(n)}else h.subtreeFlags&8772&&p!==null?(p.return=h,Ie=p):LE(n)}}function LE(n){for(;Ie!==null;){var r=Ie;if(r.flags&8772){var l=r.alternate;try{if(r.flags&8772)switch(r.tag){case 0:case 11:case 15:Ao||Jp(5,r);break;case 1:var d=r.stateNode;if(r.flags&4&&!Ao)if(l===null)d.componentDidMount();else{var h=r.elementType===r.type?l.memoizedProps:ti(r.type,l.memoizedProps);d.componentDidUpdate(h,l.memoizedState,d.__reactInternalSnapshotBeforeUpdate)}var p=r.updateQueue;p!==null&&vE(r,p,d);break;case 3:var k=r.updateQueue;if(k!==null){if(l=null,r.child!==null)switch(r.child.tag){case 5:l=r.child.stateNode;break;case 1:l=r.child.stateNode}vE(r,k,l)}break;case 5:var b=r.stateNode;if(l===null&&r.flags&4){l=b;var g=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":g.autoFocus&&l.focus();break;case"img":g.src&&(l.src=g.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var v=r.alternate;if(v!==null){var A=v.memoizedState;if(A!==null){var x=A.dehydrated;x!==null&&th(x)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(we(163))}Ao||r.flags&512&&w0(r)}catch(_){yn(r,r.return,_)}}if(r===n){Ie=null;break}if(l=r.sibling,l!==null){l.return=r.return,Ie=l;break}Ie=r.return}}function RE(n){for(;Ie!==null;){var r=Ie;if(r===n){Ie=null;break}var l=r.sibling;if(l!==null){l.return=r.return,Ie=l;break}Ie=r.return}}function zE(n){for(;Ie!==null;){var r=Ie;try{switch(r.tag){case 0:case 11:case 15:var l=r.return;try{Jp(4,r)}catch(g){yn(r,l,g)}break;case 1:var d=r.stateNode;if(typeof d.componentDidMount=="function"){var h=r.return;try{d.componentDidMount()}catch(g){yn(r,h,g)}}var p=r.return;try{w0(r)}catch(g){yn(r,p,g)}break;case 5:var k=r.return;try{w0(r)}catch(g){yn(r,k,g)}}}catch(g){yn(r,r.return,g)}if(r===n){Ie=null;break}var b=r.sibling;if(b!==null){b.return=r.return,Ie=b;break}Ie=r.return}}var x7=Math.ceil,Sp=vs.ReactCurrentDispatcher,Ew=vs.ReactCurrentOwner,Or=vs.ReactCurrentBatchConfig,kt=0,ro=null,Ln=null,fo=0,ar=0,id=Sa(0),Wn=0,hh=null,Ul=0,Xp=0,Sw=0,Gu=null,qo=null,Dw=0,Ad=1/0,ls=null,Dp=!1,y0=null,pa=null,zf=!1,la=null,Tp=0,Ku=0,C0=null,ep=-1,tp=0;function No(){return kt&6?Tn():ep!==-1?ep:ep=Tn()}function ga(n){return n.mode&1?kt&2&&fo!==0?fo&-fo:l7.transition!==null?(tp===0&&(tp=U5()),tp):(n=Nt,n!==0||(n=window.event,n=n===void 0?16:Y5(n.type)),n):1}function ci(n,r,l,d){if(50<Ku)throw Ku=0,C0=null,Error(we(185));_h(n,l,d),(!(kt&2)||n!==ro)&&(n===ro&&(!(kt&2)&&(Xp|=l),Wn===4&&ia(n,fo)),Qo(n,d),l===1&&kt===0&&!(r.mode&1)&&(Ad=Tn()+500,Yp&&Da()))}function Qo(n,r){var l=n.callbackNode;lz(n,r);var d=hp(n,n===ro?fo:0);if(d===0)l!==null&&K2(l),n.callbackNode=null,n.callbackPriority=0;else if(r=d&-d,n.callbackPriority!==r){if(l!=null&&K2(l),r===1)n.tag===0?a7(FE.bind(null,n)):pD(FE.bind(null,n)),o7(function(){!(kt&6)&&Da()}),l=null;else{switch(H5(d)){case 1:l=ew;break;case 4:l=F5;break;case 16:l=up;break;case 536870912:l=V5;break;default:l=up}l=fT(l,sT.bind(null,n))}n.callbackPriority=r,n.callbackNode=l}}function sT(n,r){if(ep=-1,tp=0,kt&6)throw Error(we(327));var l=n.callbackNode;if(fd()&&n.callbackNode!==l)return null;var d=hp(n,n===ro?fo:0);if(d===0)return null;if(d&30||d&n.expiredLanes||r)r=Ip(n,d);else{r=d;var h=kt;kt|=2;var p=lT();(ro!==n||fo!==r)&&(ls=null,Ad=Tn()+500,Ol(n,r));do try{D7();break}catch(b){aT(n,b)}while(1);fw(),Sp.current=p,kt=h,Ln!==null?r=0:(ro=null,fo=0,r=Wn)}if(r!==0){if(r===2&&(h=Qb(n),h!==0&&(d=h,r=A0(n,h))),r===1)throw l=hh,Ol(n,0),ia(n,d),Qo(n,Tn()),l;if(r===6)ia(n,d);else{if(h=n.current.alternate,!(d&30)&&!E7(h)&&(r=Ip(n,d),r===2&&(p=Qb(n),p!==0&&(d=p,r=A0(n,p))),r===1))throw l=hh,Ol(n,0),ia(n,d),Qo(n,Tn()),l;switch(n.finishedWork=h,n.finishedLanes=d,r){case 0:case 1:throw Error(we(345));case 2:Il(n,qo,ls);break;case 3:if(ia(n,d),(d&130023424)===d&&(r=Dw+500-Tn(),10<r)){if(hp(n,0)!==0)break;if(h=n.suspendedLanes,(h&d)!==d){No(),n.pingedLanes|=n.suspendedLanes&h;break}n.timeoutHandle=r0(Il.bind(null,n,qo,ls),r);break}Il(n,qo,ls);break;case 4:if(ia(n,d),(d&4194240)===d)break;for(r=n.eventTimes,h=-1;0<d;){var k=31-li(d);p=1<<k,k=r[k],k>h&&(h=k),d&=~p}if(d=h,d=Tn()-d,d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3e3>d?3e3:4320>d?4320:1960*x7(d/1960))-d,10<d){n.timeoutHandle=r0(Il.bind(null,n,qo,ls),d);break}Il(n,qo,ls);break;case 5:Il(n,qo,ls);break;default:throw Error(we(329))}}}return Qo(n,Tn()),n.callbackNode===l?sT.bind(null,n):null}function A0(n,r){var l=Gu;return n.current.memoizedState.isDehydrated&&(Ol(n,r).flags|=256),n=Ip(n,r),n!==2&&(r=qo,qo=l,r!==null&&x0(r)),n}function x0(n){qo===null?qo=n:qo.push.apply(qo,n)}function E7(n){for(var r=n;;){if(r.flags&16384){var l=r.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var d=0;d<l.length;d++){var h=l[d],p=h.getSnapshot;h=h.value;try{if(!di(p(),h))return!1}catch{return!1}}}if(l=r.child,r.subtreeFlags&16384&&l!==null)l.return=r,r=l;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function ia(n,r){for(r&=~Sw,r&=~Xp,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var l=31-li(r),d=1<<l;n[l]=-1,r&=~d}}function FE(n){if(kt&6)throw Error(we(327));fd();var r=hp(n,0);if(!(r&1))return Qo(n,Tn()),null;var l=Ip(n,r);if(n.tag!==0&&l===2){var d=Qb(n);d!==0&&(r=d,l=A0(n,d))}if(l===1)throw l=hh,Ol(n,0),ia(n,r),Qo(n,Tn()),l;if(l===6)throw Error(we(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,Il(n,qo,ls),Qo(n,Tn()),null}function Tw(n,r){var l=kt;kt|=1;try{return n(r)}finally{kt=l,kt===0&&(Ad=Tn()+500,Yp&&Da())}}function Hl(n){la!==null&&la.tag===0&&!(kt&6)&&fd();var r=kt;kt|=1;var l=Or.transition,d=Nt;try{if(Or.transition=null,Nt=1,n)return n()}finally{Nt=d,Or.transition=l,kt=r,!(kt&6)&&Da()}}function Iw(){ar=id.current,on(id)}function Ol(n,r){n.finishedWork=null,n.finishedLanes=0;var l=n.timeoutHandle;if(l!==-1&&(n.timeoutHandle=-1,n7(l)),Ln!==null)for(l=Ln.return;l!==null;){var d=l;switch(dw(d),d.tag){case 1:d=d.type.childContextTypes,d!=null&&kp();break;case 3:yd(),on(Ko),on(xo),ww();break;case 5:bw(d);break;case 4:yd();break;case 13:on(gn);break;case 19:on(gn);break;case 10:pw(d.type._context);break;case 22:case 23:Iw()}l=l.return}if(ro=n,Ln=n=ma(n.current,null),fo=ar=r,Wn=0,hh=null,Sw=Xp=Ul=0,qo=Gu=null,jl!==null){for(r=0;r<jl.length;r++)if(l=jl[r],d=l.interleaved,d!==null){l.interleaved=null;var h=d.next,p=l.pending;if(p!==null){var k=p.next;p.next=h,d.next=k}l.pending=d}jl=null}return n}function aT(n,r){do{var l=Ln;try{if(fw(),Zf.current=Ep,xp){for(var d=mn.memoizedState;d!==null;){var h=d.queue;h!==null&&(h.pending=null),d=d.next}xp=!1}if(Vl=0,oo=$n=mn=null,Wu=!1,ch=0,Ew.current=null,l===null||l.return===null){Wn=1,hh=r,Ln=null;break}e:{var p=n,k=l.return,b=l,g=r;if(r=fo,b.flags|=32768,g!==null&&typeof g=="object"&&typeof g.then=="function"){var v=g,A=b,x=A.tag;if(!(A.mode&1)&&(x===0||x===11||x===15)){var _=A.alternate;_?(A.updateQueue=_.updateQueue,A.memoizedState=_.memoizedState,A.lanes=_.lanes):(A.updateQueue=null,A.memoizedState=null)}var C=SE(k);if(C!==null){C.flags&=-257,DE(C,k,b,p,r),C.mode&1&&EE(p,v,r),r=C,g=v;var M=r.updateQueue;if(M===null){var T=new Set;T.add(g),r.updateQueue=T}else M.add(g);break e}else{if(!(r&1)){EE(p,v,r),Mw();break e}g=Error(we(426))}}else if(un&&b.mode&1){var O=SE(k);if(O!==null){!(O.flags&65536)&&(O.flags|=256),DE(O,k,b,p,r),uw(Cd(g,b));break e}}p=g=Cd(g,b),Wn!==4&&(Wn=2),Gu===null?Gu=[p]:Gu.push(p),p=k;do{switch(p.tag){case 3:p.flags|=65536,r&=-r,p.lanes|=r;var P=$D(p,g,r);wE(p,P);break e;case 1:b=g;var j=p.type,R=p.stateNode;if(!(p.flags&128)&&(typeof j.getDerivedStateFromError=="function"||R!==null&&typeof R.componentDidCatch=="function"&&(pa===null||!pa.has(R)))){p.flags|=65536,r&=-r,p.lanes|=r;var L=WD(p,b,r);wE(p,L);break e}}p=p.return}while(p!==null)}dT(l)}catch(q){r=q,Ln===l&&l!==null&&(Ln=l=l.return);continue}break}while(1)}function lT(){var n=Sp.current;return Sp.current=Ep,n===null?Ep:n}function Mw(){(Wn===0||Wn===3||Wn===2)&&(Wn=4),ro===null||!(Ul&268435455)&&!(Xp&268435455)||ia(ro,fo)}function Ip(n,r){var l=kt;kt|=2;var d=lT();(ro!==n||fo!==r)&&(ls=null,Ol(n,r));do try{S7();break}catch(h){aT(n,h)}while(1);if(fw(),kt=l,Sp.current=d,Ln!==null)throw Error(we(261));return ro=null,fo=0,Wn}function S7(){for(;Ln!==null;)cT(Ln)}function D7(){for(;Ln!==null&&!XR();)cT(Ln)}function cT(n){var r=hT(n.alternate,n,ar);n.memoizedProps=n.pendingProps,r===null?dT(n):Ln=r,Ew.current=null}function dT(n){var r=n;do{var l=r.alternate;if(n=r.return,r.flags&32768){if(l=_7(l,r),l!==null){l.flags&=32767,Ln=l;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Wn=6,Ln=null;return}}else if(l=v7(l,r,ar),l!==null){Ln=l;return}if(r=r.sibling,r!==null){Ln=r;return}Ln=r=n}while(r!==null);Wn===0&&(Wn=5)}function Il(n,r,l){var d=Nt,h=Or.transition;try{Or.transition=null,Nt=1,T7(n,r,l,d)}finally{Or.transition=h,Nt=d}return null}function T7(n,r,l,d){do fd();while(la!==null);if(kt&6)throw Error(we(327));l=n.finishedWork;var h=n.finishedLanes;if(l===null)return null;if(n.finishedWork=null,n.finishedLanes=0,l===n.current)throw Error(we(177));n.callbackNode=null,n.callbackPriority=0;var p=l.lanes|l.childLanes;if(cz(n,p),n===ro&&(Ln=ro=null,fo=0),!(l.subtreeFlags&2064)&&!(l.flags&2064)||zf||(zf=!0,fT(up,function(){return fd(),null})),p=(l.flags&15990)!==0,l.subtreeFlags&15990||p){p=Or.transition,Or.transition=null;var k=Nt;Nt=1;var b=kt;kt|=4,Ew.current=null,C7(n,l),rT(l,n),Yz(n0),fp=!!t0,n0=t0=null,n.current=l,A7(l),ez(),kt=b,Nt=k,Or.transition=p}else n.current=l;if(zf&&(zf=!1,la=n,Tp=h),p=n.pendingLanes,p===0&&(pa=null),oz(l.stateNode),Qo(n,Tn()),r!==null)for(d=n.onRecoverableError,l=0;l<r.length;l++)h=r[l],d(h.value,{componentStack:h.stack,digest:h.digest});if(Dp)throw Dp=!1,n=y0,y0=null,n;return Tp&1&&n.tag!==0&&fd(),p=n.pendingLanes,p&1?n===C0?Ku++:(Ku=0,C0=n):Ku=0,Da(),null}function fd(){if(la!==null){var n=H5(Tp),r=Or.transition,l=Nt;try{if(Or.transition=null,Nt=16>n?16:n,la===null)var d=!1;else{if(n=la,la=null,Tp=0,kt&6)throw Error(we(331));var h=kt;for(kt|=4,Ie=n.current;Ie!==null;){var p=Ie,k=p.child;if(Ie.flags&16){var b=p.deletions;if(b!==null){for(var g=0;g<b.length;g++){var v=b[g];for(Ie=v;Ie!==null;){var A=Ie;switch(A.tag){case 0:case 11:case 15:qu(8,A,p)}var x=A.child;if(x!==null)x.return=A,Ie=x;else for(;Ie!==null;){A=Ie;var _=A.sibling,C=A.return;if(tT(A),A===v){Ie=null;break}if(_!==null){_.return=C,Ie=_;break}Ie=C}}}var M=p.alternate;if(M!==null){var T=M.child;if(T!==null){M.child=null;do{var O=T.sibling;T.sibling=null,T=O}while(T!==null)}}Ie=p}}if(p.subtreeFlags&2064&&k!==null)k.return=p,Ie=k;else e:for(;Ie!==null;){if(p=Ie,p.flags&2048)switch(p.tag){case 0:case 11:case 15:qu(9,p,p.return)}var P=p.sibling;if(P!==null){P.return=p.return,Ie=P;break e}Ie=p.return}}var j=n.current;for(Ie=j;Ie!==null;){k=Ie;var R=k.child;if(k.subtreeFlags&2064&&R!==null)R.return=k,Ie=R;else e:for(k=j;Ie!==null;){if(b=Ie,b.flags&2048)try{switch(b.tag){case 0:case 11:case 15:Jp(9,b)}}catch(q){yn(b,b.return,q)}if(b===k){Ie=null;break e}var L=b.sibling;if(L!==null){L.return=b.return,Ie=L;break e}Ie=b.return}}if(kt=h,Da(),Ui&&typeof Ui.onPostCommitFiberRoot=="function")try{Ui.onPostCommitFiberRoot($p,n)}catch{}d=!0}return d}finally{Nt=l,Or.transition=r}}return!1}function VE(n,r,l){r=Cd(l,r),r=$D(n,r,1),n=fa(n,r,1),r=No(),n!==null&&(_h(n,1,r),Qo(n,r))}function yn(n,r,l){if(n.tag===3)VE(n,n,l);else for(;r!==null;){if(r.tag===3){VE(r,n,l);break}else if(r.tag===1){var d=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof d.componentDidCatch=="function"&&(pa===null||!pa.has(d))){n=Cd(l,n),n=WD(r,n,1),r=fa(r,n,1),n=No(),r!==null&&(_h(r,1,n),Qo(r,n));break}}r=r.return}}function I7(n,r,l){var d=n.pingCache;d!==null&&d.delete(r),r=No(),n.pingedLanes|=n.suspendedLanes&l,ro===n&&(fo&l)===l&&(Wn===4||Wn===3&&(fo&130023424)===fo&&500>Tn()-Dw?Ol(n,0):Sw|=l),Qo(n,r)}function uT(n,r){r===0&&(n.mode&1?(r=Tf,Tf<<=1,!(Tf&130023424)&&(Tf=4194304)):r=1);var l=No();n=ks(n,r),n!==null&&(_h(n,r,l),Qo(n,l))}function M7(n){var r=n.memoizedState,l=0;r!==null&&(l=r.retryLane),uT(n,l)}function N7(n,r){var l=0;switch(n.tag){case 13:var d=n.stateNode,h=n.memoizedState;h!==null&&(l=h.retryLane);break;case 19:d=n.stateNode;break;default:throw Error(we(314))}d!==null&&d.delete(r),uT(n,l)}var hT;hT=function(n,r,l){if(n!==null)if(n.memoizedProps!==r.pendingProps||Ko.current)Go=!0;else{if(!(n.lanes&l)&&!(r.flags&128))return Go=!1,w7(n,r,l);Go=!!(n.flags&131072)}else Go=!1,un&&r.flags&1048576&&gD(r,vp,r.index);switch(r.lanes=0,r.tag){case 2:var d=r.type;Xf(n,r),n=r.pendingProps;var h=wd(r,xo.current);hd(r,l),h=_w(null,r,d,n,h,l);var p=yw();return r.flags|=1,typeof h=="object"&&h!==null&&typeof h.render=="function"&&h.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Yo(d)?(p=!0,bp(r)):p=!1,r.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,mw(r),h.updater=Qp,r.stateNode=h,h._reactInternals=r,u0(r,d,n,l),r=p0(null,r,d,!0,p,l)):(r.tag=0,un&&p&&cw(r),Mo(null,r,h,l),r=r.child),r;case 16:d=r.elementType;e:{switch(Xf(n,r),n=r.pendingProps,h=d._init,d=h(d._payload),r.type=d,h=r.tag=P7(d),n=ti(d,n),h){case 0:r=f0(null,r,d,n,l);break e;case 1:r=ME(null,r,d,n,l);break e;case 11:r=TE(null,r,d,n,l);break e;case 14:r=IE(null,r,d,ti(d.type,n),l);break e}throw Error(we(306,d,""))}return r;case 0:return d=r.type,h=r.pendingProps,h=r.elementType===d?h:ti(d,h),f0(n,r,d,h,l);case 1:return d=r.type,h=r.pendingProps,h=r.elementType===d?h:ti(d,h),ME(n,r,d,h,l);case 3:e:{if(YD(r),n===null)throw Error(we(387));d=r.pendingProps,p=r.memoizedState,h=p.element,wD(n,r),Cp(r,d,null,l);var k=r.memoizedState;if(d=k.element,p.isDehydrated)if(p={element:d,isDehydrated:!1,cache:k.cache,pendingSuspenseBoundaries:k.pendingSuspenseBoundaries,transitions:k.transitions},r.updateQueue.baseState=p,r.memoizedState=p,r.flags&256){h=Cd(Error(we(423)),r),r=NE(n,r,d,l,h);break e}else if(d!==h){h=Cd(Error(we(424)),r),r=NE(n,r,d,l,h);break e}else for(lr=ha(r.stateNode.containerInfo.firstChild),dr=r,un=!0,ri=null,l=CD(r,null,d,l),r.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(vd(),d===h){r=bs(n,r,l);break e}Mo(n,r,d,l)}r=r.child}return r;case 5:return AD(r),n===null&&l0(r),d=r.type,h=r.pendingProps,p=n!==null?n.memoizedProps:null,k=h.children,o0(d,h)?k=null:p!==null&&o0(d,p)&&(r.flags|=32),KD(n,r),Mo(n,r,k,l),r.child;case 6:return n===null&&l0(r),null;case 13:return QD(n,r,l);case 4:return kw(r,r.stateNode.containerInfo),d=r.pendingProps,n===null?r.child=_d(r,null,d,l):Mo(n,r,d,l),r.child;case 11:return d=r.type,h=r.pendingProps,h=r.elementType===d?h:ti(d,h),TE(n,r,d,h,l);case 7:return Mo(n,r,r.pendingProps,l),r.child;case 8:return Mo(n,r,r.pendingProps.children,l),r.child;case 12:return Mo(n,r,r.pendingProps.children,l),r.child;case 10:e:{if(d=r.type._context,h=r.pendingProps,p=r.memoizedProps,k=h.value,Zt(_p,d._currentValue),d._currentValue=k,p!==null)if(di(p.value,k)){if(p.children===h.children&&!Ko.current){r=bs(n,r,l);break e}}else for(p=r.child,p!==null&&(p.return=r);p!==null;){var b=p.dependencies;if(b!==null){k=p.child;for(var g=b.firstContext;g!==null;){if(g.context===d){if(p.tag===1){g=hs(-1,l&-l),g.tag=2;var v=p.updateQueue;if(v!==null){v=v.shared;var A=v.pending;A===null?g.next=g:(g.next=A.next,A.next=g),v.pending=g}}p.lanes|=l,g=p.alternate,g!==null&&(g.lanes|=l),c0(p.return,l,r),b.lanes|=l;break}g=g.next}}else if(p.tag===10)k=p.type===r.type?null:p.child;else if(p.tag===18){if(k=p.return,k===null)throw Error(we(341));k.lanes|=l,b=k.alternate,b!==null&&(b.lanes|=l),c0(k,l,r),k=p.sibling}else k=p.child;if(k!==null)k.return=p;else for(k=p;k!==null;){if(k===r){k=null;break}if(p=k.sibling,p!==null){p.return=k.return,k=p;break}k=k.return}p=k}Mo(n,r,h.children,l),r=r.child}return r;case 9:return h=r.type,d=r.pendingProps.children,hd(r,l),h=Rr(h),d=d(h),r.flags|=1,Mo(n,r,d,l),r.child;case 14:return d=r.type,h=ti(d,r.pendingProps),h=ti(d.type,h),IE(n,r,d,h,l);case 15:return qD(n,r,r.type,r.pendingProps,l);case 17:return d=r.type,h=r.pendingProps,h=r.elementType===d?h:ti(d,h),Xf(n,r),r.tag=1,Yo(d)?(n=!0,bp(r)):n=!1,hd(r,l),_D(r,d,h),u0(r,d,h,l),p0(null,r,d,!0,n,l);case 19:return ZD(n,r,l);case 22:return GD(n,r,l)}throw Error(we(156,r.tag))};function fT(n,r){return z5(n,r)}function j7(n,r,l,d){this.tag=n,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=d,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Br(n,r,l,d){return new j7(n,r,l,d)}function Nw(n){return n=n.prototype,!(!n||!n.isReactComponent)}function P7(n){if(typeof n=="function")return Nw(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Z0)return 11;if(n===J0)return 14}return 2}function ma(n,r){var l=n.alternate;return l===null?(l=Br(n.tag,r,n.key,n.mode),l.elementType=n.elementType,l.type=n.type,l.stateNode=n.stateNode,l.alternate=n,n.alternate=l):(l.pendingProps=r,l.type=n.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=n.flags&14680064,l.childLanes=n.childLanes,l.lanes=n.lanes,l.child=n.child,l.memoizedProps=n.memoizedProps,l.memoizedState=n.memoizedState,l.updateQueue=n.updateQueue,r=n.dependencies,l.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},l.sibling=n.sibling,l.index=n.index,l.ref=n.ref,l}function np(n,r,l,d,h,p){var k=2;if(d=n,typeof n=="function")Nw(n)&&(k=1);else if(typeof n=="string")k=5;else e:switch(n){case Yc:return Ll(l.children,h,p,r);case Q0:k=8,h|=8;break;case Bb:return n=Br(12,l,r,h|2),n.elementType=Bb,n.lanes=p,n;case Ob:return n=Br(13,l,r,h),n.elementType=Ob,n.lanes=p,n;case Lb:return n=Br(19,l,r,h),n.elementType=Lb,n.lanes=p,n;case y5:return eg(l,h,p,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case v5:k=10;break e;case _5:k=9;break e;case Z0:k=11;break e;case J0:k=14;break e;case na:k=16,d=null;break e}throw Error(we(130,n==null?n:typeof n,""))}return r=Br(k,l,r,h),r.elementType=n,r.type=d,r.lanes=p,r}function Ll(n,r,l,d){return n=Br(7,n,d,r),n.lanes=l,n}function eg(n,r,l,d){return n=Br(22,n,d,r),n.elementType=y5,n.lanes=l,n.stateNode={isHidden:!1},n}function Xk(n,r,l){return n=Br(6,n,null,r),n.lanes=l,n}function eb(n,r,l){return r=Br(4,n.children!==null?n.children:[],n.key,r),r.lanes=l,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function B7(n,r,l,d,h){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Pk(0),this.expirationTimes=Pk(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Pk(0),this.identifierPrefix=d,this.onRecoverableError=h,this.mutableSourceEagerHydrationData=null}function jw(n,r,l,d,h,p,k,b,g){return n=new B7(n,r,l,b,g),r===1?(r=1,p===!0&&(r|=8)):r=0,p=Br(3,null,null,r),n.current=p,p.stateNode=n,p.memoizedState={element:d,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},mw(p),n}function O7(n,r,l){var d=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Kc,key:d==null?null:""+d,children:n,containerInfo:r,implementation:l}}function pT(n){if(!n)return _a;n=n._reactInternals;e:{if(Kl(n)!==n||n.tag!==1)throw Error(we(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Yo(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(we(171))}if(n.tag===1){var l=n.type;if(Yo(l))return fD(n,l,r)}return r}function gT(n,r,l,d,h,p,k,b,g){return n=jw(l,d,!0,n,h,p,k,b,g),n.context=pT(null),l=n.current,d=No(),h=ga(l),p=hs(d,h),p.callback=r??null,fa(l,p,h),n.current.lanes=h,_h(n,h,d),Qo(n,d),n}function tg(n,r,l,d){var h=r.current,p=No(),k=ga(h);return l=pT(l),r.context===null?r.context=l:r.pendingContext=l,r=hs(p,k),r.payload={element:n},d=d===void 0?null:d,d!==null&&(r.callback=d),n=fa(h,r,k),n!==null&&(ci(n,h,k,p),Qf(n,h,k)),k}function Mp(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function UE(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var l=n.retryLane;n.retryLane=l!==0&&l<r?l:r}}function Pw(n,r){UE(n,r),(n=n.alternate)&&UE(n,r)}function L7(){return null}var mT=typeof reportError=="function"?reportError:function(n){console.error(n)};function Bw(n){this._internalRoot=n}ng.prototype.render=Bw.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(we(409));tg(n,r,null,null)};ng.prototype.unmount=Bw.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;Hl(function(){tg(null,n,null,null)}),r[ms]=null}};function ng(n){this._internalRoot=n}ng.prototype.unstable_scheduleHydration=function(n){if(n){var r=q5();n={blockedOn:null,target:n,priority:r};for(var l=0;l<ra.length&&r!==0&&r<ra[l].priority;l++);ra.splice(l,0,n),l===0&&K5(n)}};function Ow(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function og(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function HE(){}function R7(n,r,l,d,h){if(h){if(typeof d=="function"){var p=d;d=function(){var v=Mp(k);p.call(v)}}var k=gT(r,d,n,0,null,!1,!1,"",HE);return n._reactRootContainer=k,n[ms]=k.current,rh(n.nodeType===8?n.parentNode:n),Hl(),k}for(;h=n.lastChild;)n.removeChild(h);if(typeof d=="function"){var b=d;d=function(){var v=Mp(g);b.call(v)}}var g=jw(n,0,!1,null,null,!1,!1,"",HE);return n._reactRootContainer=g,n[ms]=g.current,rh(n.nodeType===8?n.parentNode:n),Hl(function(){tg(r,g,l,d)}),g}function rg(n,r,l,d,h){var p=l._reactRootContainer;if(p){var k=p;if(typeof h=="function"){var b=h;h=function(){var g=Mp(k);b.call(g)}}tg(r,k,n,h)}else k=R7(l,r,n,h,d);return Mp(k)}$5=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var l=Lu(r.pendingLanes);l!==0&&(tw(r,l|1),Qo(r,Tn()),!(kt&6)&&(Ad=Tn()+500,Da()))}break;case 13:Hl(function(){var d=ks(n,1);if(d!==null){var h=No();ci(d,n,1,h)}}),Pw(n,1)}};nw=function(n){if(n.tag===13){var r=ks(n,134217728);if(r!==null){var l=No();ci(r,n,134217728,l)}Pw(n,134217728)}};W5=function(n){if(n.tag===13){var r=ga(n),l=ks(n,r);if(l!==null){var d=No();ci(l,n,r,d)}Pw(n,r)}};q5=function(){return Nt};G5=function(n,r){var l=Nt;try{return Nt=n,r()}finally{Nt=l}};Gb=function(n,r,l){switch(r){case"input":if(Fb(n,l),r=l.name,l.type==="radio"&&r!=null){for(l=n;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<l.length;r++){var d=l[r];if(d!==n&&d.form===n.form){var h=Kp(d);if(!h)throw Error(we(90));A5(d),Fb(d,h)}}}break;case"textarea":E5(n,l);break;case"select":r=l.value,r!=null&&ld(n,!!l.multiple,r,!1)}};j5=Tw;P5=Hl;var z7={usingClientEntryPoint:!1,Events:[Ch,Xc,Kp,M5,N5,Tw]},Eu={findFiberByHostInstance:Nl,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},F7={bundleType:Eu.bundleType,version:Eu.version,rendererPackageName:Eu.rendererPackageName,rendererConfig:Eu.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:vs.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=L5(n),n===null?null:n.stateNode},findFiberByHostInstance:Eu.findFiberByHostInstance||L7,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ff=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ff.isDisabled&&Ff.supportsFiber)try{$p=Ff.inject(F7),Ui=Ff}catch{}}pr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=z7;pr.createPortal=function(n,r){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ow(r))throw Error(we(200));return O7(n,r,null,l)};pr.createRoot=function(n,r){if(!Ow(n))throw Error(we(299));var l=!1,d="",h=mT;return r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(d=r.identifierPrefix),r.onRecoverableError!==void 0&&(h=r.onRecoverableError)),r=jw(n,1,!1,null,null,l,!1,d,h),n[ms]=r.current,rh(n.nodeType===8?n.parentNode:n),new Bw(r)};pr.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(we(188)):(n=Object.keys(n).join(","),Error(we(268,n)));return n=L5(r),n=n===null?null:n.stateNode,n};pr.flushSync=function(n){return Hl(n)};pr.hydrate=function(n,r,l){if(!og(r))throw Error(we(200));return rg(null,n,r,!0,l)};pr.hydrateRoot=function(n,r,l){if(!Ow(n))throw Error(we(405));var d=l!=null&&l.hydratedSources||null,h=!1,p="",k=mT;if(l!=null&&(l.unstable_strictMode===!0&&(h=!0),l.identifierPrefix!==void 0&&(p=l.identifierPrefix),l.onRecoverableError!==void 0&&(k=l.onRecoverableError)),r=gT(r,null,n,1,l??null,h,!1,p,k),n[ms]=r.current,rh(n),d)for(n=0;n<d.length;n++)l=d[n],h=l._getVersion,h=h(l._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[l,h]:r.mutableSourceEagerHydrationData.push(l,h);return new ng(r)};pr.render=function(n,r,l){if(!og(r))throw Error(we(200));return rg(null,n,r,!1,l)};pr.unmountComponentAtNode=function(n){if(!og(n))throw Error(we(40));return n._reactRootContainer?(Hl(function(){rg(null,null,n,!1,function(){n._reactRootContainer=null,n[ms]=null})}),!0):!1};pr.unstable_batchedUpdates=Tw;pr.unstable_renderSubtreeIntoContainer=function(n,r,l,d){if(!og(l))throw Error(we(200));if(n==null||n._reactInternals===void 0)throw Error(we(38));return rg(n,r,l,!1,d)};pr.version="18.2.0-next-9e3b772b8-20220608";function kT(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(kT)}catch(n){console.error(n)}}kT(),g5.exports=pr;var bT=g5.exports,$E=bT;jb.createRoot=$E.createRoot,jb.hydrateRoot=$E.hydrateRoot;var wT={exports:{}},vT={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xd=J;function V7(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var U7=typeof Object.is=="function"?Object.is:V7,H7=xd.useState,$7=xd.useEffect,W7=xd.useLayoutEffect,q7=xd.useDebugValue;function G7(n,r){var l=r(),d=H7({inst:{value:l,getSnapshot:r}}),h=d[0].inst,p=d[1];return W7(function(){h.value=l,h.getSnapshot=r,tb(h)&&p({inst:h})},[n,l,r]),$7(function(){return tb(h)&&p({inst:h}),n(function(){tb(h)&&p({inst:h})})},[n]),q7(l),l}function tb(n){var r=n.getSnapshot;n=n.value;try{var l=r();return!U7(n,l)}catch{return!0}}function K7(n,r){return r()}var Y7=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?K7:G7;vT.useSyncExternalStore=xd.useSyncExternalStore!==void 0?xd.useSyncExternalStore:Y7;wT.exports=vT;var Q7=wT.exports,_T={exports:{}},yT={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ig=J,Z7=Q7;function J7(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var X7=typeof Object.is=="function"?Object.is:J7,e6=Z7.useSyncExternalStore,t6=ig.useRef,n6=ig.useEffect,o6=ig.useMemo,r6=ig.useDebugValue;yT.useSyncExternalStoreWithSelector=function(n,r,l,d,h){var p=t6(null);if(p.current===null){var k={hasValue:!1,value:null};p.current=k}else k=p.current;p=o6(function(){function g(C){if(!v){if(v=!0,A=C,C=d(C),h!==void 0&&k.hasValue){var M=k.value;if(h(M,C))return x=M}return x=C}if(M=x,X7(A,C))return M;var T=d(C);return h!==void 0&&h(M,T)?M:(A=C,x=T)}var v=!1,A,x,_=l===void 0?null:l;return[function(){return g(r())},_===null?void 0:function(){return g(_())}]},[r,l,d,h]);var b=e6(n,p[0],p[1]);return n6(function(){k.hasValue=!0,k.value=b},[b]),r6(b),b};_T.exports=yT;var i6=_T.exports;function s6(n){n()}let CT=s6;const a6=n=>CT=n,l6=()=>CT,WE=Symbol.for("react-redux-context"),qE=typeof globalThis<"u"?globalThis:{};function c6(){var n;if(!J.createContext)return{};const r=(n=qE[WE])!=null?n:qE[WE]=new Map;let l=r.get(J.createContext);return l||(l=J.createContext(null),r.set(J.createContext,l)),l}const ya=c6();function Lw(n=ya){return function(){return J.useContext(n)}}const AT=Lw(),d6=()=>{throw new Error("uSES not initialized!")};let xT=d6;const u6=n=>{xT=n},h6=(n,r)=>n===r;function f6(n=ya){const r=n===ya?AT:Lw(n);return function(d,h={}){const{equalityFn:p=h6,stabilityCheck:k=void 0,noopCheck:b=void 0}=typeof h=="function"?{equalityFn:h}:h,{store:g,subscription:v,getServerState:A,stabilityCheck:x,noopCheck:_}=r();J.useRef(!0);const C=J.useCallback({[d.name](T){return d(T)}}[d.name],[d,x,k]),M=xT(v.addNestedSub,g.getState,A||g.getState,C,p);return J.useDebugValue(M),M}}const Qe=f6();var ET={exports:{}},jt={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var io=typeof Symbol=="function"&&Symbol.for,Rw=io?Symbol.for("react.element"):60103,zw=io?Symbol.for("react.portal"):60106,sg=io?Symbol.for("react.fragment"):60107,ag=io?Symbol.for("react.strict_mode"):60108,lg=io?Symbol.for("react.profiler"):60114,cg=io?Symbol.for("react.provider"):60109,dg=io?Symbol.for("react.context"):60110,Fw=io?Symbol.for("react.async_mode"):60111,ug=io?Symbol.for("react.concurrent_mode"):60111,hg=io?Symbol.for("react.forward_ref"):60112,fg=io?Symbol.for("react.suspense"):60113,p6=io?Symbol.for("react.suspense_list"):60120,pg=io?Symbol.for("react.memo"):60115,gg=io?Symbol.for("react.lazy"):60116,g6=io?Symbol.for("react.block"):60121,m6=io?Symbol.for("react.fundamental"):60117,k6=io?Symbol.for("react.responder"):60118,b6=io?Symbol.for("react.scope"):60119;function mr(n){if(typeof n=="object"&&n!==null){var r=n.$$typeof;switch(r){case Rw:switch(n=n.type,n){case Fw:case ug:case sg:case lg:case ag:case fg:return n;default:switch(n=n&&n.$$typeof,n){case dg:case hg:case gg:case pg:case cg:return n;default:return r}}case zw:return r}}}function ST(n){return mr(n)===ug}jt.AsyncMode=Fw;jt.ConcurrentMode=ug;jt.ContextConsumer=dg;jt.ContextProvider=cg;jt.Element=Rw;jt.ForwardRef=hg;jt.Fragment=sg;jt.Lazy=gg;jt.Memo=pg;jt.Portal=zw;jt.Profiler=lg;jt.StrictMode=ag;jt.Suspense=fg;jt.isAsyncMode=function(n){return ST(n)||mr(n)===Fw};jt.isConcurrentMode=ST;jt.isContextConsumer=function(n){return mr(n)===dg};jt.isContextProvider=function(n){return mr(n)===cg};jt.isElement=function(n){return typeof n=="object"&&n!==null&&n.$$typeof===Rw};jt.isForwardRef=function(n){return mr(n)===hg};jt.isFragment=function(n){return mr(n)===sg};jt.isLazy=function(n){return mr(n)===gg};jt.isMemo=function(n){return mr(n)===pg};jt.isPortal=function(n){return mr(n)===zw};jt.isProfiler=function(n){return mr(n)===lg};jt.isStrictMode=function(n){return mr(n)===ag};jt.isSuspense=function(n){return mr(n)===fg};jt.isValidElementType=function(n){return typeof n=="string"||typeof n=="function"||n===sg||n===ug||n===lg||n===ag||n===fg||n===p6||typeof n=="object"&&n!==null&&(n.$$typeof===gg||n.$$typeof===pg||n.$$typeof===cg||n.$$typeof===dg||n.$$typeof===hg||n.$$typeof===m6||n.$$typeof===k6||n.$$typeof===b6||n.$$typeof===g6)};jt.typeOf=mr;ET.exports=jt;var w6=ET.exports,DT=w6,v6={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},_6={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},TT={};TT[DT.ForwardRef]=v6;TT[DT.Memo]=_6;var zt={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vw=Symbol.for("react.element"),Uw=Symbol.for("react.portal"),mg=Symbol.for("react.fragment"),kg=Symbol.for("react.strict_mode"),bg=Symbol.for("react.profiler"),wg=Symbol.for("react.provider"),vg=Symbol.for("react.context"),y6=Symbol.for("react.server_context"),_g=Symbol.for("react.forward_ref"),yg=Symbol.for("react.suspense"),Cg=Symbol.for("react.suspense_list"),Ag=Symbol.for("react.memo"),xg=Symbol.for("react.lazy"),C6=Symbol.for("react.offscreen"),IT;IT=Symbol.for("react.module.reference");function Fr(n){if(typeof n=="object"&&n!==null){var r=n.$$typeof;switch(r){case Vw:switch(n=n.type,n){case mg:case bg:case kg:case yg:case Cg:return n;default:switch(n=n&&n.$$typeof,n){case y6:case vg:case _g:case xg:case Ag:case wg:return n;default:return r}}case Uw:return r}}}zt.ContextConsumer=vg;zt.ContextProvider=wg;zt.Element=Vw;zt.ForwardRef=_g;zt.Fragment=mg;zt.Lazy=xg;zt.Memo=Ag;zt.Portal=Uw;zt.Profiler=bg;zt.StrictMode=kg;zt.Suspense=yg;zt.SuspenseList=Cg;zt.isAsyncMode=function(){return!1};zt.isConcurrentMode=function(){return!1};zt.isContextConsumer=function(n){return Fr(n)===vg};zt.isContextProvider=function(n){return Fr(n)===wg};zt.isElement=function(n){return typeof n=="object"&&n!==null&&n.$$typeof===Vw};zt.isForwardRef=function(n){return Fr(n)===_g};zt.isFragment=function(n){return Fr(n)===mg};zt.isLazy=function(n){return Fr(n)===xg};zt.isMemo=function(n){return Fr(n)===Ag};zt.isPortal=function(n){return Fr(n)===Uw};zt.isProfiler=function(n){return Fr(n)===bg};zt.isStrictMode=function(n){return Fr(n)===kg};zt.isSuspense=function(n){return Fr(n)===yg};zt.isSuspenseList=function(n){return Fr(n)===Cg};zt.isValidElementType=function(n){return typeof n=="string"||typeof n=="function"||n===mg||n===bg||n===kg||n===yg||n===Cg||n===C6||typeof n=="object"&&n!==null&&(n.$$typeof===xg||n.$$typeof===Ag||n.$$typeof===wg||n.$$typeof===vg||n.$$typeof===_g||n.$$typeof===IT||n.getModuleId!==void 0)};zt.typeOf=Fr;function A6(){const n=l6();let r=null,l=null;return{clear(){r=null,l=null},notify(){n(()=>{let d=r;for(;d;)d.callback(),d=d.next})},get(){let d=[],h=r;for(;h;)d.push(h),h=h.next;return d},subscribe(d){let h=!0,p=l={callback:d,next:null,prev:l};return p.prev?p.prev.next=p:r=p,function(){!h||r===null||(h=!1,p.next?p.next.prev=p.prev:l=p.prev,p.prev?p.prev.next=p.next:r=p.next)}}}}const GE={notify(){},get:()=>[]};function x6(n,r){let l,d=GE;function h(x){return g(),d.subscribe(x)}function p(){d.notify()}function k(){A.onStateChange&&A.onStateChange()}function b(){return!!l}function g(){l||(l=r?r.addNestedSub(k):n.subscribe(k),d=A6())}function v(){l&&(l(),l=void 0,d.clear(),d=GE)}const A={addNestedSub:h,notifyNestedSubs:p,handleChangeWrapper:k,isSubscribed:b,trySubscribe:g,tryUnsubscribe:v,getListeners:()=>d};return A}const E6=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",S6=E6?J.useLayoutEffect:J.useEffect;function D6({store:n,context:r,children:l,serverState:d,stabilityCheck:h="once",noopCheck:p="once"}){const k=J.useMemo(()=>{const v=x6(n);return{store:n,subscription:v,getServerState:d?()=>d:void 0,stabilityCheck:h,noopCheck:p}},[n,d,h,p]),b=J.useMemo(()=>n.getState(),[n]);S6(()=>{const{subscription:v}=k;return v.onStateChange=v.notifyNestedSubs,v.trySubscribe(),b!==n.getState()&&v.notifyNestedSubs(),()=>{v.tryUnsubscribe(),v.onStateChange=void 0}},[k,b]);const g=r||ya;return J.createElement(g.Provider,{value:k},l)}function MT(n=ya){const r=n===ya?AT:Lw(n);return function(){const{store:d}=r();return d}}const T6=MT();function I6(n=ya){const r=n===ya?T6:MT(n);return function(){return r().dispatch}}const Eo=I6();u6(i6.useSyncExternalStoreWithSelector);a6(bT.unstable_batchedUpdates);function ii(n){for(var r=arguments.length,l=Array(r>1?r-1:0),d=1;d<r;d++)l[d-1]=arguments[d];throw Error("[Immer] minified error nr: "+n+(l.length?" "+l.map(function(h){return"'"+h+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function Ca(n){return!!n&&!!n[cn]}function ws(n){var r;return!!n&&(function(l){if(!l||typeof l!="object")return!1;var d=Object.getPrototypeOf(l);if(d===null)return!0;var h=Object.hasOwnProperty.call(d,"constructor")&&d.constructor;return h===Object||typeof h=="function"&&Function.toString.call(h)===z6}(n)||Array.isArray(n)||!!n[eS]||!!(!((r=n.constructor)===null||r===void 0)&&r[eS])||Hw(n)||$w(n))}function $l(n,r,l){l===void 0&&(l=!1),Nd(n)===0?(l?Object.keys:gd)(n).forEach(function(d){l&&typeof d=="symbol"||r(d,n[d],n)}):n.forEach(function(d,h){return r(h,d,n)})}function Nd(n){var r=n[cn];return r?r.i>3?r.i-4:r.i:Array.isArray(n)?1:Hw(n)?2:$w(n)?3:0}function pd(n,r){return Nd(n)===2?n.has(r):Object.prototype.hasOwnProperty.call(n,r)}function M6(n,r){return Nd(n)===2?n.get(r):n[r]}function NT(n,r,l){var d=Nd(n);d===2?n.set(r,l):d===3?n.add(l):n[r]=l}function jT(n,r){return n===r?n!==0||1/n==1/r:n!=n&&r!=r}function Hw(n){return L6&&n instanceof Map}function $w(n){return R6&&n instanceof Set}function Ml(n){return n.o||n.t}function Ww(n){if(Array.isArray(n))return Array.prototype.slice.call(n);var r=BT(n);delete r[cn];for(var l=gd(r),d=0;d<l.length;d++){var h=l[d],p=r[h];p.writable===!1&&(p.writable=!0,p.configurable=!0),(p.get||p.set)&&(r[h]={configurable:!0,writable:!0,enumerable:p.enumerable,value:n[h]})}return Object.create(Object.getPrototypeOf(n),r)}function qw(n,r){return r===void 0&&(r=!1),Gw(n)||Ca(n)||!ws(n)||(Nd(n)>1&&(n.set=n.add=n.clear=n.delete=N6),Object.freeze(n),r&&$l(n,function(l,d){return qw(d,!0)},!0)),n}function N6(){ii(2)}function Gw(n){return n==null||typeof n!="object"||Object.isFrozen(n)}function $i(n){var r=T0[n];return r||ii(18,n),r}function j6(n,r){T0[n]||(T0[n]=r)}function E0(){return fh}function nb(n,r){r&&($i("Patches"),n.u=[],n.s=[],n.v=r)}function Np(n){S0(n),n.p.forEach(P6),n.p=null}function S0(n){n===fh&&(fh=n.l)}function KE(n){return fh={p:[],l:fh,h:n,m:!0,_:0}}function P6(n){var r=n[cn];r.i===0||r.i===1?r.j():r.g=!0}function ob(n,r){r._=r.p.length;var l=r.p[0],d=n!==void 0&&n!==l;return r.h.O||$i("ES5").S(r,n,d),d?(l[cn].P&&(Np(r),ii(4)),ws(n)&&(n=jp(r,n),r.l||Pp(r,n)),r.u&&$i("Patches").M(l[cn].t,n,r.u,r.s)):n=jp(r,l,[]),Np(r),r.u&&r.v(r.u,r.s),n!==PT?n:void 0}function jp(n,r,l){if(Gw(r))return r;var d=r[cn];if(!d)return $l(r,function(b,g){return YE(n,d,r,b,g,l)},!0),r;if(d.A!==n)return r;if(!d.P)return Pp(n,d.t,!0),d.t;if(!d.I){d.I=!0,d.A._--;var h=d.i===4||d.i===5?d.o=Ww(d.k):d.o,p=h,k=!1;d.i===3&&(p=new Set(h),h.clear(),k=!0),$l(p,function(b,g){return YE(n,d,h,b,g,l,k)}),Pp(n,h,!1),l&&n.u&&$i("Patches").N(d,l,n.u,n.s)}return d.o}function YE(n,r,l,d,h,p,k){if(Ca(h)){var b=jp(n,h,p&&r&&r.i!==3&&!pd(r.R,d)?p.concat(d):void 0);if(NT(l,d,b),!Ca(b))return;n.m=!1}else k&&l.add(h);if(ws(h)&&!Gw(h)){if(!n.h.D&&n._<1)return;jp(n,h),r&&r.A.l||Pp(n,h)}}function Pp(n,r,l){l===void 0&&(l=!1),!n.l&&n.h.D&&n.m&&qw(r,l)}function rb(n,r){var l=n[cn];return(l?Ml(l):n)[r]}function QE(n,r){if(r in n)for(var l=Object.getPrototypeOf(n);l;){var d=Object.getOwnPropertyDescriptor(l,r);if(d)return d;l=Object.getPrototypeOf(l)}}function sa(n){n.P||(n.P=!0,n.l&&sa(n.l))}function ib(n){n.o||(n.o=Ww(n.t))}function D0(n,r,l){var d=Hw(r)?$i("MapSet").F(r,l):$w(r)?$i("MapSet").T(r,l):n.O?function(h,p){var k=Array.isArray(h),b={i:k?1:0,A:p?p.A:E0(),P:!1,I:!1,R:{},l:p,t:h,k:null,o:null,j:null,C:!1},g=b,v=ph;k&&(g=[b],v=zu);var A=Proxy.revocable(g,v),x=A.revoke,_=A.proxy;return b.k=_,b.j=x,_}(r,l):$i("ES5").J(r,l);return(l?l.A:E0()).p.push(d),d}function B6(n){return Ca(n)||ii(22,n),function r(l){if(!ws(l))return l;var d,h=l[cn],p=Nd(l);if(h){if(!h.P&&(h.i<4||!$i("ES5").K(h)))return h.t;h.I=!0,d=ZE(l,p),h.I=!1}else d=ZE(l,p);return $l(d,function(k,b){h&&M6(h.t,k)===b||NT(d,k,r(b))}),p===3?new Set(d):d}(n)}function ZE(n,r){switch(r){case 2:return new Map(n);case 3:return Array.from(n)}return Ww(n)}function O6(){function n(p,k){var b=h[p];return b?b.enumerable=k:h[p]=b={configurable:!0,enumerable:k,get:function(){var g=this[cn];return ph.get(g,p)},set:function(g){var v=this[cn];ph.set(v,p,g)}},b}function r(p){for(var k=p.length-1;k>=0;k--){var b=p[k][cn];if(!b.P)switch(b.i){case 5:d(b)&&sa(b);break;case 4:l(b)&&sa(b)}}}function l(p){for(var k=p.t,b=p.k,g=gd(b),v=g.length-1;v>=0;v--){var A=g[v];if(A!==cn){var x=k[A];if(x===void 0&&!pd(k,A))return!0;var _=b[A],C=_&&_[cn];if(C?C.t!==x:!jT(_,x))return!0}}var M=!!k[cn];return g.length!==gd(k).length+(M?0:1)}function d(p){var k=p.k;if(k.length!==p.t.length)return!0;var b=Object.getOwnPropertyDescriptor(k,k.length-1);if(b&&!b.get)return!0;for(var g=0;g<k.length;g++)if(!k.hasOwnProperty(g))return!0;return!1}var h={};j6("ES5",{J:function(p,k){var b=Array.isArray(p),g=function(A,x){if(A){for(var _=Array(x.length),C=0;C<x.length;C++)Object.defineProperty(_,""+C,n(C,!0));return _}var M=BT(x);delete M[cn];for(var T=gd(M),O=0;O<T.length;O++){var P=T[O];M[P]=n(P,A||!!M[P].enumerable)}return Object.create(Object.getPrototypeOf(x),M)}(b,p),v={i:b?5:4,A:k?k.A:E0(),P:!1,I:!1,R:{},l:k,t:p,k:g,o:null,g:!1,C:!1};return Object.defineProperty(g,cn,{value:v,writable:!0}),g},S:function(p,k,b){b?Ca(k)&&k[cn].A===p&&r(p.p):(p.u&&function g(v){if(v&&typeof v=="object"){var A=v[cn];if(A){var x=A.t,_=A.k,C=A.R,M=A.i;if(M===4)$l(_,function(R){R!==cn&&(x[R]!==void 0||pd(x,R)?C[R]||g(_[R]):(C[R]=!0,sa(A)))}),$l(x,function(R){_[R]!==void 0||pd(_,R)||(C[R]=!1,sa(A))});else if(M===5){if(d(A)&&(sa(A),C.length=!0),_.length<x.length)for(var T=_.length;T<x.length;T++)C[T]=!1;else for(var O=x.length;O<_.length;O++)C[O]=!0;for(var P=Math.min(_.length,x.length),j=0;j<P;j++)_.hasOwnProperty(j)||(C[j]=!0),C[j]===void 0&&g(_[j])}}}}(p.p[0]),r(p.p))},K:function(p){return p.i===4?l(p):d(p)}})}var JE,fh,Kw=typeof Symbol<"u"&&typeof Symbol("x")=="symbol",L6=typeof Map<"u",R6=typeof Set<"u",XE=typeof Proxy<"u"&&Proxy.revocable!==void 0&&typeof Reflect<"u",PT=Kw?Symbol.for("immer-nothing"):((JE={})["immer-nothing"]=!0,JE),eS=Kw?Symbol.for("immer-draftable"):"__$immer_draftable",cn=Kw?Symbol.for("immer-state"):"__$immer_state",z6=""+Object.prototype.constructor,gd=typeof Reflect<"u"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(n){return Object.getOwnPropertyNames(n).concat(Object.getOwnPropertySymbols(n))}:Object.getOwnPropertyNames,BT=Object.getOwnPropertyDescriptors||function(n){var r={};return gd(n).forEach(function(l){r[l]=Object.getOwnPropertyDescriptor(n,l)}),r},T0={},ph={get:function(n,r){if(r===cn)return n;var l=Ml(n);if(!pd(l,r))return function(h,p,k){var b,g=QE(p,k);return g?"value"in g?g.value:(b=g.get)===null||b===void 0?void 0:b.call(h.k):void 0}(n,l,r);var d=l[r];return n.I||!ws(d)?d:d===rb(n.t,r)?(ib(n),n.o[r]=D0(n.A.h,d,n)):d},has:function(n,r){return r in Ml(n)},ownKeys:function(n){return Reflect.ownKeys(Ml(n))},set:function(n,r,l){var d=QE(Ml(n),r);if(d!=null&&d.set)return d.set.call(n.k,l),!0;if(!n.P){var h=rb(Ml(n),r),p=h==null?void 0:h[cn];if(p&&p.t===l)return n.o[r]=l,n.R[r]=!1,!0;if(jT(l,h)&&(l!==void 0||pd(n.t,r)))return!0;ib(n),sa(n)}return n.o[r]===l&&(l!==void 0||r in n.o)||Number.isNaN(l)&&Number.isNaN(n.o[r])||(n.o[r]=l,n.R[r]=!0),!0},deleteProperty:function(n,r){return rb(n.t,r)!==void 0||r in n.t?(n.R[r]=!1,ib(n),sa(n)):delete n.R[r],n.o&&delete n.o[r],!0},getOwnPropertyDescriptor:function(n,r){var l=Ml(n),d=Reflect.getOwnPropertyDescriptor(l,r);return d&&{writable:!0,configurable:n.i!==1||r!=="length",enumerable:d.enumerable,value:l[r]}},defineProperty:function(){ii(11)},getPrototypeOf:function(n){return Object.getPrototypeOf(n.t)},setPrototypeOf:function(){ii(12)}},zu={};$l(ph,function(n,r){zu[n]=function(){return arguments[0]=arguments[0][0],r.apply(this,arguments)}}),zu.deleteProperty=function(n,r){return zu.set.call(this,n,r,void 0)},zu.set=function(n,r,l){return ph.set.call(this,n[0],r,l,n[0])};var F6=function(){function n(l){var d=this;this.O=XE,this.D=!0,this.produce=function(h,p,k){if(typeof h=="function"&&typeof p!="function"){var b=p;p=h;var g=d;return function(T){var O=this;T===void 0&&(T=b);for(var P=arguments.length,j=Array(P>1?P-1:0),R=1;R<P;R++)j[R-1]=arguments[R];return g.produce(T,function(L){var q;return(q=p).call.apply(q,[O,L].concat(j))})}}var v;if(typeof p!="function"&&ii(6),k!==void 0&&typeof k!="function"&&ii(7),ws(h)){var A=KE(d),x=D0(d,h,void 0),_=!0;try{v=p(x),_=!1}finally{_?Np(A):S0(A)}return typeof Promise<"u"&&v instanceof Promise?v.then(function(T){return nb(A,k),ob(T,A)},function(T){throw Np(A),T}):(nb(A,k),ob(v,A))}if(!h||typeof h!="object"){if((v=p(h))===void 0&&(v=h),v===PT&&(v=void 0),d.D&&qw(v,!0),k){var C=[],M=[];$i("Patches").M(h,v,C,M),k(C,M)}return v}ii(21,h)},this.produceWithPatches=function(h,p){if(typeof h=="function")return function(v){for(var A=arguments.length,x=Array(A>1?A-1:0),_=1;_<A;_++)x[_-1]=arguments[_];return d.produceWithPatches(v,function(C){return h.apply(void 0,[C].concat(x))})};var k,b,g=d.produce(h,p,function(v,A){k=v,b=A});return typeof Promise<"u"&&g instanceof Promise?g.then(function(v){return[v,k,b]}):[g,k,b]},typeof(l==null?void 0:l.useProxies)=="boolean"&&this.setUseProxies(l.useProxies),typeof(l==null?void 0:l.autoFreeze)=="boolean"&&this.setAutoFreeze(l.autoFreeze)}var r=n.prototype;return r.createDraft=function(l){ws(l)||ii(8),Ca(l)&&(l=B6(l));var d=KE(this),h=D0(this,l,void 0);return h[cn].C=!0,S0(d),h},r.finishDraft=function(l,d){var h=l&&l[cn],p=h.A;return nb(p,d),ob(void 0,p)},r.setAutoFreeze=function(l){this.D=l},r.setUseProxies=function(l){l&&!XE&&ii(20),this.O=l},r.applyPatches=function(l,d){var h;for(h=d.length-1;h>=0;h--){var p=d[h];if(p.path.length===0&&p.op==="replace"){l=p.value;break}}h>-1&&(d=d.slice(h+1));var k=$i("Patches").$;return Ca(l)?k(l,d):this.produce(l,function(b){return k(b,d)})},n}(),fr=new F6,OT=fr.produce;fr.produceWithPatches.bind(fr);fr.setAutoFreeze.bind(fr);fr.setUseProxies.bind(fr);fr.applyPatches.bind(fr);fr.createDraft.bind(fr);fr.finishDraft.bind(fr);function gh(n){"@babel/helpers - typeof";return gh=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},gh(n)}function V6(n,r){if(gh(n)!=="object"||n===null)return n;var l=n[Symbol.toPrimitive];if(l!==void 0){var d=l.call(n,r||"default");if(gh(d)!=="object")return d;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(n)}function U6(n){var r=V6(n,"string");return gh(r)==="symbol"?r:String(r)}function H6(n,r,l){return r=U6(r),r in n?Object.defineProperty(n,r,{value:l,enumerable:!0,configurable:!0,writable:!0}):n[r]=l,n}function tS(n,r){var l=Object.keys(n);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(n);r&&(d=d.filter(function(h){return Object.getOwnPropertyDescriptor(n,h).enumerable})),l.push.apply(l,d)}return l}function nS(n){for(var r=1;r<arguments.length;r++){var l=arguments[r]!=null?arguments[r]:{};r%2?tS(Object(l),!0).forEach(function(d){H6(n,d,l[d])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(l)):tS(Object(l)).forEach(function(d){Object.defineProperty(n,d,Object.getOwnPropertyDescriptor(l,d))})}return n}function Co(n){return"Minified Redux error #"+n+"; visit https://redux.js.org/Errors?code="+n+" for the full message or use the non-minified dev environment for full errors. "}var oS=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),sb=function(){return Math.random().toString(36).substring(7).split("").join(".")},Bp={INIT:"@@redux/INIT"+sb(),REPLACE:"@@redux/REPLACE"+sb(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+sb()}};function $6(n){if(typeof n!="object"||n===null)return!1;for(var r=n;Object.getPrototypeOf(r)!==null;)r=Object.getPrototypeOf(r);return Object.getPrototypeOf(n)===r}function LT(n,r,l){var d;if(typeof r=="function"&&typeof l=="function"||typeof l=="function"&&typeof arguments[3]=="function")throw new Error(Co(0));if(typeof r=="function"&&typeof l>"u"&&(l=r,r=void 0),typeof l<"u"){if(typeof l!="function")throw new Error(Co(1));return l(LT)(n,r)}if(typeof n!="function")throw new Error(Co(2));var h=n,p=r,k=[],b=k,g=!1;function v(){b===k&&(b=k.slice())}function A(){if(g)throw new Error(Co(3));return p}function x(T){if(typeof T!="function")throw new Error(Co(4));if(g)throw new Error(Co(5));var O=!0;return v(),b.push(T),function(){if(O){if(g)throw new Error(Co(6));O=!1,v();var j=b.indexOf(T);b.splice(j,1),k=null}}}function _(T){if(!$6(T))throw new Error(Co(7));if(typeof T.type>"u")throw new Error(Co(8));if(g)throw new Error(Co(9));try{g=!0,p=h(p,T)}finally{g=!1}for(var O=k=b,P=0;P<O.length;P++){var j=O[P];j()}return T}function C(T){if(typeof T!="function")throw new Error(Co(10));h=T,_({type:Bp.REPLACE})}function M(){var T,O=x;return T={subscribe:function(j){if(typeof j!="object"||j===null)throw new Error(Co(11));function R(){j.next&&j.next(A())}R();var L=O(R);return{unsubscribe:L}}},T[oS]=function(){return this},T}return _({type:Bp.INIT}),d={dispatch:_,subscribe:x,getState:A,replaceReducer:C},d[oS]=M,d}function W6(n){Object.keys(n).forEach(function(r){var l=n[r],d=l(void 0,{type:Bp.INIT});if(typeof d>"u")throw new Error(Co(12));if(typeof l(void 0,{type:Bp.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(Co(13))})}function q6(n){for(var r=Object.keys(n),l={},d=0;d<r.length;d++){var h=r[d];typeof n[h]=="function"&&(l[h]=n[h])}var p=Object.keys(l),k;try{W6(l)}catch(b){k=b}return function(g,v){if(g===void 0&&(g={}),k)throw k;for(var A=!1,x={},_=0;_<p.length;_++){var C=p[_],M=l[C],T=g[C],O=M(T,v);if(typeof O>"u")throw v&&v.type,new Error(Co(14));x[C]=O,A=A||O!==T}return A=A||p.length!==Object.keys(g).length,A?x:g}}function Op(){for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return r.length===0?function(d){return d}:r.length===1?r[0]:r.reduce(function(d,h){return function(){return d(h.apply(void 0,arguments))}})}function G6(){for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return function(d){return function(){var h=d.apply(void 0,arguments),p=function(){throw new Error(Co(15))},k={getState:h.getState,dispatch:function(){return p.apply(void 0,arguments)}},b=r.map(function(g){return g(k)});return p=Op.apply(void 0,b)(h.dispatch),nS(nS({},h),{},{dispatch:p})}}}function RT(n){var r=function(d){var h=d.dispatch,p=d.getState;return function(k){return function(b){return typeof b=="function"?b(h,p,n):k(b)}}};return r}var zT=RT();zT.withExtraArgument=RT;const rS=zT;var FT=globalThis&&globalThis.__extends||function(){var n=function(r,l){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,h){d.__proto__=h}||function(d,h){for(var p in h)Object.prototype.hasOwnProperty.call(h,p)&&(d[p]=h[p])},n(r,l)};return function(r,l){if(typeof l!="function"&&l!==null)throw new TypeError("Class extends value "+String(l)+" is not a constructor or null");n(r,l);function d(){this.constructor=r}r.prototype=l===null?Object.create(l):(d.prototype=l.prototype,new d)}}(),K6=globalThis&&globalThis.__generator||function(n,r){var l={label:0,sent:function(){if(p[0]&1)throw p[1];return p[1]},trys:[],ops:[]},d,h,p,k;return k={next:b(0),throw:b(1),return:b(2)},typeof Symbol=="function"&&(k[Symbol.iterator]=function(){return this}),k;function b(v){return function(A){return g([v,A])}}function g(v){if(d)throw new TypeError("Generator is already executing.");for(;l;)try{if(d=1,h&&(p=v[0]&2?h.return:v[0]?h.throw||((p=h.return)&&p.call(h),0):h.next)&&!(p=p.call(h,v[1])).done)return p;switch(h=0,p&&(v=[v[0]&2,p.value]),v[0]){case 0:case 1:p=v;break;case 4:return l.label++,{value:v[1],done:!1};case 5:l.label++,h=v[1],v=[0];continue;case 7:v=l.ops.pop(),l.trys.pop();continue;default:if(p=l.trys,!(p=p.length>0&&p[p.length-1])&&(v[0]===6||v[0]===2)){l=0;continue}if(v[0]===3&&(!p||v[1]>p[0]&&v[1]<p[3])){l.label=v[1];break}if(v[0]===6&&l.label<p[1]){l.label=p[1],p=v;break}if(p&&l.label<p[2]){l.label=p[2],l.ops.push(v);break}p[2]&&l.ops.pop(),l.trys.pop();continue}v=r.call(n,l)}catch(A){v=[6,A],h=0}finally{d=p=0}if(v[0]&5)throw v[1];return{value:v[0]?v[1]:void 0,done:!0}}},Ed=globalThis&&globalThis.__spreadArray||function(n,r){for(var l=0,d=r.length,h=n.length;l<d;l++,h++)n[h]=r[l];return n},Y6=Object.defineProperty,Q6=Object.defineProperties,Z6=Object.getOwnPropertyDescriptors,iS=Object.getOwnPropertySymbols,J6=Object.prototype.hasOwnProperty,X6=Object.prototype.propertyIsEnumerable,sS=function(n,r,l){return r in n?Y6(n,r,{enumerable:!0,configurable:!0,writable:!0,value:l}):n[r]=l},ka=function(n,r){for(var l in r||(r={}))J6.call(r,l)&&sS(n,l,r[l]);if(iS)for(var d=0,h=iS(r);d<h.length;d++){var l=h[d];X6.call(r,l)&&sS(n,l,r[l])}return n},ab=function(n,r){return Q6(n,Z6(r))},e9=function(n,r,l){return new Promise(function(d,h){var p=function(g){try{b(l.next(g))}catch(v){h(v)}},k=function(g){try{b(l.throw(g))}catch(v){h(v)}},b=function(g){return g.done?d(g.value):Promise.resolve(g.value).then(p,k)};b((l=l.apply(n,r)).next())})},t9=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Op:Op.apply(null,arguments)};function n9(n){if(typeof n!="object"||n===null)return!1;var r=Object.getPrototypeOf(n);if(r===null)return!0;for(var l=r;Object.getPrototypeOf(l)!==null;)l=Object.getPrototypeOf(l);return r===l}var o9=function(n){FT(r,n);function r(){for(var l=[],d=0;d<arguments.length;d++)l[d]=arguments[d];var h=n.apply(this,l)||this;return Object.setPrototypeOf(h,r.prototype),h}return Object.defineProperty(r,Symbol.species,{get:function(){return r},enumerable:!1,configurable:!0}),r.prototype.concat=function(){for(var l=[],d=0;d<arguments.length;d++)l[d]=arguments[d];return n.prototype.concat.apply(this,l)},r.prototype.prepend=function(){for(var l=[],d=0;d<arguments.length;d++)l[d]=arguments[d];return l.length===1&&Array.isArray(l[0])?new(r.bind.apply(r,Ed([void 0],l[0].concat(this)))):new(r.bind.apply(r,Ed([void 0],l.concat(this))))},r}(Array),r9=function(n){FT(r,n);function r(){for(var l=[],d=0;d<arguments.length;d++)l[d]=arguments[d];var h=n.apply(this,l)||this;return Object.setPrototypeOf(h,r.prototype),h}return Object.defineProperty(r,Symbol.species,{get:function(){return r},enumerable:!1,configurable:!0}),r.prototype.concat=function(){for(var l=[],d=0;d<arguments.length;d++)l[d]=arguments[d];return n.prototype.concat.apply(this,l)},r.prototype.prepend=function(){for(var l=[],d=0;d<arguments.length;d++)l[d]=arguments[d];return l.length===1&&Array.isArray(l[0])?new(r.bind.apply(r,Ed([void 0],l[0].concat(this)))):new(r.bind.apply(r,Ed([void 0],l.concat(this))))},r}(Array);function I0(n){return ws(n)?OT(n,function(){}):n}function i9(n){return typeof n=="boolean"}function s9(){return function(r){return a9(r)}}function a9(n){n===void 0&&(n={});var r=n.thunk,l=r===void 0?!0:r;n.immutableCheck,n.serializableCheck;var d=new o9;return l&&(i9(l)?d.push(rS):d.push(rS.withExtraArgument(l.extraArgument))),d}var l9=!0;function c9(n){var r=s9(),l=n||{},d=l.reducer,h=d===void 0?void 0:d,p=l.middleware,k=p===void 0?r():p,b=l.devTools,g=b===void 0?!0:b,v=l.preloadedState,A=v===void 0?void 0:v,x=l.enhancers,_=x===void 0?void 0:x,C;if(typeof h=="function")C=h;else if(n9(h))C=q6(h);else throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');var M=k;typeof M=="function"&&(M=M(r));var T=G6.apply(void 0,M),O=Op;g&&(O=t9(ka({trace:!l9},typeof g=="object"&&g)));var P=new r9(T),j=P;Array.isArray(_)?j=Ed([T],_):typeof _=="function"&&(j=_(P));var R=O.apply(void 0,j);return LT(C,A,R)}function ba(n,r){function l(){for(var d=[],h=0;h<arguments.length;h++)d[h]=arguments[h];if(r){var p=r.apply(void 0,d);if(!p)throw new Error("prepareAction did not return an object");return ka(ka({type:n,payload:p.payload},"meta"in p&&{meta:p.meta}),"error"in p&&{error:p.error})}return{type:n,payload:d[0]}}return l.toString=function(){return""+n},l.type=n,l.match=function(d){return d.type===n},l}function VT(n){var r={},l=[],d,h={addCase:function(p,k){var b=typeof p=="string"?p:p.type;if(b in r)throw new Error("addCase cannot be called with two reducers for the same action type");return r[b]=k,h},addMatcher:function(p,k){return l.push({matcher:p,reducer:k}),h},addDefaultCase:function(p){return d=p,h}};return n(h),[r,l,d]}function d9(n){return typeof n=="function"}function u9(n,r,l,d){l===void 0&&(l=[]);var h=typeof r=="function"?VT(r):[r,l,d],p=h[0],k=h[1],b=h[2],g;if(d9(n))g=function(){return I0(n())};else{var v=I0(n);g=function(){return v}}function A(x,_){x===void 0&&(x=g());var C=Ed([p[_.type]],k.filter(function(M){var T=M.matcher;return T(_)}).map(function(M){var T=M.reducer;return T}));return C.filter(function(M){return!!M}).length===0&&(C=[b]),C.reduce(function(M,T){if(T)if(Ca(M)){var O=M,P=T(O,_);return P===void 0?M:P}else{if(ws(M))return OT(M,function(j){return T(j,_)});var P=T(M,_);if(P===void 0){if(M===null)return M;throw Error("A case reducer on a non-draftable value must not return undefined")}return P}return M},x)}return A.getInitialState=g,A}function h9(n,r){return n+"/"+r}function Ft(n){var r=n.name;if(!r)throw new Error("`name` is a required option for createSlice");typeof process<"u";var l=typeof n.initialState=="function"?n.initialState:I0(n.initialState),d=n.reducers||{},h=Object.keys(d),p={},k={},b={};h.forEach(function(A){var x=d[A],_=h9(r,A),C,M;"reducer"in x?(C=x.reducer,M=x.prepare):C=x,p[A]=C,k[_]=C,b[A]=M?ba(_,M):ba(_)});function g(){var A=typeof n.extraReducers=="function"?VT(n.extraReducers):[n.extraReducers],x=A[0],_=x===void 0?{}:x,C=A[1],M=C===void 0?[]:C,T=A[2],O=T===void 0?void 0:T,P=ka(ka({},_),k);return u9(l,function(j){for(var R in P)j.addCase(R,P[R]);for(var L=0,q=M;L<q.length;L++){var ee=q[L];j.addMatcher(ee.matcher,ee.reducer)}O&&j.addDefaultCase(O)})}var v;return{name:r,reducer:function(A,x){return v||(v=g()),v(A,x)},actions:b,caseReducers:p,getInitialState:function(){return v||(v=g()),v.getInitialState()}}}var f9="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",p9=function(n){n===void 0&&(n=21);for(var r="",l=n;l--;)r+=f9[Math.random()*64|0];return r},g9=["name","message","stack","code"],lb=function(){function n(r,l){this.payload=r,this.meta=l}return n}(),aS=function(){function n(r,l){this.payload=r,this.meta=l}return n}(),m9=function(n){if(typeof n=="object"&&n!==null){for(var r={},l=0,d=g9;l<d.length;l++){var h=d[l];typeof n[h]=="string"&&(r[h]=n[h])}return r}return{message:String(n)}},Vt=function(){function n(r,l,d){var h=ba(r+"/fulfilled",function(v,A,x,_){return{payload:v,meta:ab(ka({},_||{}),{arg:x,requestId:A,requestStatus:"fulfilled"})}}),p=ba(r+"/pending",function(v,A,x){return{payload:void 0,meta:ab(ka({},x||{}),{arg:A,requestId:v,requestStatus:"pending"})}}),k=ba(r+"/rejected",function(v,A,x,_,C){return{payload:_,error:(d&&d.serializeError||m9)(v||"Rejected"),meta:ab(ka({},C||{}),{arg:x,requestId:A,rejectedWithValue:!!_,requestStatus:"rejected",aborted:(v==null?void 0:v.name)==="AbortError",condition:(v==null?void 0:v.name)==="ConditionError"})}}),b=typeof AbortController<"u"?AbortController:function(){function v(){this.signal={aborted:!1,addEventListener:function(){},dispatchEvent:function(){return!1},onabort:function(){},removeEventListener:function(){},reason:void 0,throwIfAborted:function(){}}}return v.prototype.abort=function(){},v}();function g(v){return function(A,x,_){var C=d!=null&&d.idGenerator?d.idGenerator(v):p9(),M=new b,T;function O(j){T=j,M.abort()}var P=function(){return e9(this,null,function(){var j,R,L,q,ee,G,V;return K6(this,function(X){switch(X.label){case 0:return X.trys.push([0,4,,5]),q=(j=d==null?void 0:d.condition)==null?void 0:j.call(d,v,{getState:x,extra:_}),b9(q)?[4,q]:[3,2];case 1:q=X.sent(),X.label=2;case 2:if(q===!1||M.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};return ee=new Promise(function(Q,ae){return M.signal.addEventListener("abort",function(){return ae({name:"AbortError",message:T||"Aborted"})})}),A(p(C,v,(R=d==null?void 0:d.getPendingMeta)==null?void 0:R.call(d,{requestId:C,arg:v},{getState:x,extra:_}))),[4,Promise.race([ee,Promise.resolve(l(v,{dispatch:A,getState:x,extra:_,requestId:C,signal:M.signal,abort:O,rejectWithValue:function(Q,ae){return new lb(Q,ae)},fulfillWithValue:function(Q,ae){return new aS(Q,ae)}})).then(function(Q){if(Q instanceof lb)throw Q;return Q instanceof aS?h(Q.payload,C,v,Q.meta):h(Q,C,v)})])];case 3:return L=X.sent(),[3,5];case 4:return G=X.sent(),L=G instanceof lb?k(null,C,v,G.payload,G.meta):k(G,C,v),[3,5];case 5:return V=d&&!d.dispatchConditionRejection&&k.match(L)&&L.meta.condition,V||A(L),[2,L]}})})}();return Object.assign(P,{abort:O,requestId:C,arg:v,unwrap:function(){return P.then(k9)}})}}return Object.assign(g,{pending:p,rejected:k,fulfilled:h,typePrefix:r})}return n.withTypes=function(){return n},n}();function k9(n){if(n.meta&&n.meta.rejectedWithValue)throw n.payload;if(n.error)throw n.error;return n.payload}function b9(n){return n!==null&&typeof n=="object"&&typeof n.then=="function"}var Yw="listenerMiddleware";ba(Yw+"/add");ba(Yw+"/removeAll");ba(Yw+"/remove");var lS;typeof queueMicrotask=="function"&&queueMicrotask.bind(typeof window<"u"?window:typeof global<"u"?global:globalThis);O6();function UT(n,r){return function(){return n.apply(r,arguments)}}const{toString:w9}=Object.prototype,{getPrototypeOf:Qw}=Object,Eg=(n=>r=>{const l=w9.call(r);return n[l]||(n[l]=l.slice(8,-1).toLowerCase())})(Object.create(null)),Wi=n=>(n=n.toLowerCase(),r=>Eg(r)===n),Sg=n=>r=>typeof r===n,{isArray:jd}=Array,mh=Sg("undefined");function v9(n){return n!==null&&!mh(n)&&n.constructor!==null&&!mh(n.constructor)&&Lr(n.constructor.isBuffer)&&n.constructor.isBuffer(n)}const HT=Wi("ArrayBuffer");function _9(n){let r;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?r=ArrayBuffer.isView(n):r=n&&n.buffer&&HT(n.buffer),r}const y9=Sg("string"),Lr=Sg("function"),$T=Sg("number"),Dg=n=>n!==null&&typeof n=="object",C9=n=>n===!0||n===!1,op=n=>{if(Eg(n)!=="object")return!1;const r=Qw(n);return(r===null||r===Object.prototype||Object.getPrototypeOf(r)===null)&&!(Symbol.toStringTag in n)&&!(Symbol.iterator in n)},A9=Wi("Date"),x9=Wi("File"),E9=Wi("Blob"),S9=Wi("FileList"),D9=n=>Dg(n)&&Lr(n.pipe),T9=n=>{let r;return n&&(typeof FormData=="function"&&n instanceof FormData||Lr(n.append)&&((r=Eg(n))==="formdata"||r==="object"&&Lr(n.toString)&&n.toString()==="[object FormData]"))},I9=Wi("URLSearchParams"),M9=n=>n.trim?n.trim():n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function xh(n,r,{allOwnKeys:l=!1}={}){if(n===null||typeof n>"u")return;let d,h;if(typeof n!="object"&&(n=[n]),jd(n))for(d=0,h=n.length;d<h;d++)r.call(null,n[d],d,n);else{const p=l?Object.getOwnPropertyNames(n):Object.keys(n),k=p.length;let b;for(d=0;d<k;d++)b=p[d],r.call(null,n[b],b,n)}}function WT(n,r){r=r.toLowerCase();const l=Object.keys(n);let d=l.length,h;for(;d-- >0;)if(h=l[d],r===h.toLowerCase())return h;return null}const qT=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),GT=n=>!mh(n)&&n!==qT;function M0(){const{caseless:n}=GT(this)&&this||{},r={},l=(d,h)=>{const p=n&&WT(r,h)||h;op(r[p])&&op(d)?r[p]=M0(r[p],d):op(d)?r[p]=M0({},d):jd(d)?r[p]=d.slice():r[p]=d};for(let d=0,h=arguments.length;d<h;d++)arguments[d]&&xh(arguments[d],l);return r}const N9=(n,r,l,{allOwnKeys:d}={})=>(xh(r,(h,p)=>{l&&Lr(h)?n[p]=UT(h,l):n[p]=h},{allOwnKeys:d}),n),j9=n=>(n.charCodeAt(0)===65279&&(n=n.slice(1)),n),P9=(n,r,l,d)=>{n.prototype=Object.create(r.prototype,d),n.prototype.constructor=n,Object.defineProperty(n,"super",{value:r.prototype}),l&&Object.assign(n.prototype,l)},B9=(n,r,l,d)=>{let h,p,k;const b={};if(r=r||{},n==null)return r;do{for(h=Object.getOwnPropertyNames(n),p=h.length;p-- >0;)k=h[p],(!d||d(k,n,r))&&!b[k]&&(r[k]=n[k],b[k]=!0);n=l!==!1&&Qw(n)}while(n&&(!l||l(n,r))&&n!==Object.prototype);return r},O9=(n,r,l)=>{n=String(n),(l===void 0||l>n.length)&&(l=n.length),l-=r.length;const d=n.indexOf(r,l);return d!==-1&&d===l},L9=n=>{if(!n)return null;if(jd(n))return n;let r=n.length;if(!$T(r))return null;const l=new Array(r);for(;r-- >0;)l[r]=n[r];return l},R9=(n=>r=>n&&r instanceof n)(typeof Uint8Array<"u"&&Qw(Uint8Array)),z9=(n,r)=>{const d=(n&&n[Symbol.iterator]).call(n);let h;for(;(h=d.next())&&!h.done;){const p=h.value;r.call(n,p[0],p[1])}},F9=(n,r)=>{let l;const d=[];for(;(l=n.exec(r))!==null;)d.push(l);return d},V9=Wi("HTMLFormElement"),U9=n=>n.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(l,d,h){return d.toUpperCase()+h}),cS=(({hasOwnProperty:n})=>(r,l)=>n.call(r,l))(Object.prototype),H9=Wi("RegExp"),KT=(n,r)=>{const l=Object.getOwnPropertyDescriptors(n),d={};xh(l,(h,p)=>{let k;(k=r(h,p,n))!==!1&&(d[p]=k||h)}),Object.defineProperties(n,d)},$9=n=>{KT(n,(r,l)=>{if(Lr(n)&&["arguments","caller","callee"].indexOf(l)!==-1)return!1;const d=n[l];if(Lr(d)){if(r.enumerable=!1,"writable"in r){r.writable=!1;return}r.set||(r.set=()=>{throw Error("Can not rewrite read-only method '"+l+"'")})}})},W9=(n,r)=>{const l={},d=h=>{h.forEach(p=>{l[p]=!0})};return jd(n)?d(n):d(String(n).split(r)),l},q9=()=>{},G9=(n,r)=>(n=+n,Number.isFinite(n)?n:r),cb="abcdefghijklmnopqrstuvwxyz",dS="0123456789",YT={DIGIT:dS,ALPHA:cb,ALPHA_DIGIT:cb+cb.toUpperCase()+dS},K9=(n=16,r=YT.ALPHA_DIGIT)=>{let l="";const{length:d}=r;for(;n--;)l+=r[Math.random()*d|0];return l};function Y9(n){return!!(n&&Lr(n.append)&&n[Symbol.toStringTag]==="FormData"&&n[Symbol.iterator])}const Q9=n=>{const r=new Array(10),l=(d,h)=>{if(Dg(d)){if(r.indexOf(d)>=0)return;if(!("toJSON"in d)){r[h]=d;const p=jd(d)?[]:{};return xh(d,(k,b)=>{const g=l(k,h+1);!mh(g)&&(p[b]=g)}),r[h]=void 0,p}}return d};return l(n,0)},Z9=Wi("AsyncFunction"),J9=n=>n&&(Dg(n)||Lr(n))&&Lr(n.then)&&Lr(n.catch),he={isArray:jd,isArrayBuffer:HT,isBuffer:v9,isFormData:T9,isArrayBufferView:_9,isString:y9,isNumber:$T,isBoolean:C9,isObject:Dg,isPlainObject:op,isUndefined:mh,isDate:A9,isFile:x9,isBlob:E9,isRegExp:H9,isFunction:Lr,isStream:D9,isURLSearchParams:I9,isTypedArray:R9,isFileList:S9,forEach:xh,merge:M0,extend:N9,trim:M9,stripBOM:j9,inherits:P9,toFlatObject:B9,kindOf:Eg,kindOfTest:Wi,endsWith:O9,toArray:L9,forEachEntry:z9,matchAll:F9,isHTMLForm:V9,hasOwnProperty:cS,hasOwnProp:cS,reduceDescriptors:KT,freezeMethods:$9,toObjectSet:W9,toCamelCase:U9,noop:q9,toFiniteNumber:G9,findKey:WT,global:qT,isContextDefined:GT,ALPHABET:YT,generateString:K9,isSpecCompliantForm:Y9,toJSONObject:Q9,isAsyncFn:Z9,isThenable:J9};function mt(n,r,l,d,h){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=n,this.name="AxiosError",r&&(this.code=r),l&&(this.config=l),d&&(this.request=d),h&&(this.response=h)}he.inherits(mt,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:he.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const QT=mt.prototype,ZT={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(n=>{ZT[n]={value:n}});Object.defineProperties(mt,ZT);Object.defineProperty(QT,"isAxiosError",{value:!0});mt.from=(n,r,l,d,h,p)=>{const k=Object.create(QT);return he.toFlatObject(n,k,function(g){return g!==Error.prototype},b=>b!=="isAxiosError"),mt.call(k,n.message,r,l,d,h),k.cause=n,k.name=n.name,p&&Object.assign(k,p),k};const X9=null;function N0(n){return he.isPlainObject(n)||he.isArray(n)}function JT(n){return he.endsWith(n,"[]")?n.slice(0,-2):n}function uS(n,r,l){return n?n.concat(r).map(function(h,p){return h=JT(h),!l&&p?"["+h+"]":h}).join(l?".":""):r}function e8(n){return he.isArray(n)&&!n.some(N0)}const t8=he.toFlatObject(he,{},null,function(r){return/^is[A-Z]/.test(r)});function Tg(n,r,l){if(!he.isObject(n))throw new TypeError("target must be an object");r=r||new FormData,l=he.toFlatObject(l,{metaTokens:!0,dots:!1,indexes:!1},!1,function(T,O){return!he.isUndefined(O[T])});const d=l.metaTokens,h=l.visitor||A,p=l.dots,k=l.indexes,g=(l.Blob||typeof Blob<"u"&&Blob)&&he.isSpecCompliantForm(r);if(!he.isFunction(h))throw new TypeError("visitor must be a function");function v(M){if(M===null)return"";if(he.isDate(M))return M.toISOString();if(!g&&he.isBlob(M))throw new mt("Blob is not supported. Use a Buffer instead.");return he.isArrayBuffer(M)||he.isTypedArray(M)?g&&typeof Blob=="function"?new Blob([M]):Buffer.from(M):M}function A(M,T,O){let P=M;if(M&&!O&&typeof M=="object"){if(he.endsWith(T,"{}"))T=d?T:T.slice(0,-2),M=JSON.stringify(M);else if(he.isArray(M)&&e8(M)||(he.isFileList(M)||he.endsWith(T,"[]"))&&(P=he.toArray(M)))return T=JT(T),P.forEach(function(R,L){!(he.isUndefined(R)||R===null)&&r.append(k===!0?uS([T],L,p):k===null?T:T+"[]",v(R))}),!1}return N0(M)?!0:(r.append(uS(O,T,p),v(M)),!1)}const x=[],_=Object.assign(t8,{defaultVisitor:A,convertValue:v,isVisitable:N0});function C(M,T){if(!he.isUndefined(M)){if(x.indexOf(M)!==-1)throw Error("Circular reference detected in "+T.join("."));x.push(M),he.forEach(M,function(P,j){(!(he.isUndefined(P)||P===null)&&h.call(r,P,he.isString(j)?j.trim():j,T,_))===!0&&C(P,T?T.concat(j):[j])}),x.pop()}}if(!he.isObject(n))throw new TypeError("data must be an object");return C(n),r}function hS(n){const r={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(n).replace(/[!'()~]|%20|%00/g,function(d){return r[d]})}function Zw(n,r){this._pairs=[],n&&Tg(n,this,r)}const XT=Zw.prototype;XT.append=function(r,l){this._pairs.push([r,l])};XT.toString=function(r){const l=r?function(d){return r.call(this,d,hS)}:hS;return this._pairs.map(function(h){return l(h[0])+"="+l(h[1])},"").join("&")};function n8(n){return encodeURIComponent(n).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function eI(n,r,l){if(!r)return n;const d=l&&l.encode||n8,h=l&&l.serialize;let p;if(h?p=h(r,l):p=he.isURLSearchParams(r)?r.toString():new Zw(r,l).toString(d),p){const k=n.indexOf("#");k!==-1&&(n=n.slice(0,k)),n+=(n.indexOf("?")===-1?"?":"&")+p}return n}class o8{constructor(){this.handlers=[]}use(r,l,d){return this.handlers.push({fulfilled:r,rejected:l,synchronous:d?d.synchronous:!1,runWhen:d?d.runWhen:null}),this.handlers.length-1}eject(r){this.handlers[r]&&(this.handlers[r]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(r){he.forEach(this.handlers,function(d){d!==null&&r(d)})}}const fS=o8,tI={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},r8=typeof URLSearchParams<"u"?URLSearchParams:Zw,i8=typeof FormData<"u"?FormData:null,s8=typeof Blob<"u"?Blob:null,a8=(()=>{let n;return typeof navigator<"u"&&((n=navigator.product)==="ReactNative"||n==="NativeScript"||n==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),l8=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),si={isBrowser:!0,classes:{URLSearchParams:r8,FormData:i8,Blob:s8},isStandardBrowserEnv:a8,isStandardBrowserWebWorkerEnv:l8,protocols:["http","https","file","blob","url","data"]};function c8(n,r){return Tg(n,new si.classes.URLSearchParams,Object.assign({visitor:function(l,d,h,p){return si.isNode&&he.isBuffer(l)?(this.append(d,l.toString("base64")),!1):p.defaultVisitor.apply(this,arguments)}},r))}function d8(n){return he.matchAll(/\w+|\[(\w*)]/g,n).map(r=>r[0]==="[]"?"":r[1]||r[0])}function u8(n){const r={},l=Object.keys(n);let d;const h=l.length;let p;for(d=0;d<h;d++)p=l[d],r[p]=n[p];return r}function nI(n){function r(l,d,h,p){let k=l[p++];const b=Number.isFinite(+k),g=p>=l.length;return k=!k&&he.isArray(h)?h.length:k,g?(he.hasOwnProp(h,k)?h[k]=[h[k],d]:h[k]=d,!b):((!h[k]||!he.isObject(h[k]))&&(h[k]=[]),r(l,d,h[k],p)&&he.isArray(h[k])&&(h[k]=u8(h[k])),!b)}if(he.isFormData(n)&&he.isFunction(n.entries)){const l={};return he.forEachEntry(n,(d,h)=>{r(d8(d),h,l,0)}),l}return null}function h8(n,r,l){if(he.isString(n))try{return(r||JSON.parse)(n),he.trim(n)}catch(d){if(d.name!=="SyntaxError")throw d}return(l||JSON.stringify)(n)}const Jw={transitional:tI,adapter:si.isNode?"http":"xhr",transformRequest:[function(r,l){const d=l.getContentType()||"",h=d.indexOf("application/json")>-1,p=he.isObject(r);if(p&&he.isHTMLForm(r)&&(r=new FormData(r)),he.isFormData(r))return h&&h?JSON.stringify(nI(r)):r;if(he.isArrayBuffer(r)||he.isBuffer(r)||he.isStream(r)||he.isFile(r)||he.isBlob(r))return r;if(he.isArrayBufferView(r))return r.buffer;if(he.isURLSearchParams(r))return l.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),r.toString();let b;if(p){if(d.indexOf("application/x-www-form-urlencoded")>-1)return c8(r,this.formSerializer).toString();if((b=he.isFileList(r))||d.indexOf("multipart/form-data")>-1){const g=this.env&&this.env.FormData;return Tg(b?{"files[]":r}:r,g&&new g,this.formSerializer)}}return p||h?(l.setContentType("application/json",!1),h8(r)):r}],transformResponse:[function(r){const l=this.transitional||Jw.transitional,d=l&&l.forcedJSONParsing,h=this.responseType==="json";if(r&&he.isString(r)&&(d&&!this.responseType||h)){const k=!(l&&l.silentJSONParsing)&&h;try{return JSON.parse(r)}catch(b){if(k)throw b.name==="SyntaxError"?mt.from(b,mt.ERR_BAD_RESPONSE,this,null,this.response):b}}return r}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:si.classes.FormData,Blob:si.classes.Blob},validateStatus:function(r){return r>=200&&r<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};he.forEach(["delete","get","head","post","put","patch"],n=>{Jw.headers[n]={}});const Xw=Jw,f8=he.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),p8=n=>{const r={};let l,d,h;return n&&n.split(`
`).forEach(function(k){h=k.indexOf(":"),l=k.substring(0,h).trim().toLowerCase(),d=k.substring(h+1).trim(),!(!l||r[l]&&f8[l])&&(l==="set-cookie"?r[l]?r[l].push(d):r[l]=[d]:r[l]=r[l]?r[l]+", "+d:d)}),r},pS=Symbol("internals");function Su(n){return n&&String(n).trim().toLowerCase()}function rp(n){return n===!1||n==null?n:he.isArray(n)?n.map(rp):String(n)}function g8(n){const r=Object.create(null),l=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let d;for(;d=l.exec(n);)r[d[1]]=d[2];return r}const m8=n=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(n.trim());function db(n,r,l,d,h){if(he.isFunction(d))return d.call(this,r,l);if(h&&(r=l),!!he.isString(r)){if(he.isString(d))return r.indexOf(d)!==-1;if(he.isRegExp(d))return d.test(r)}}function k8(n){return n.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(r,l,d)=>l.toUpperCase()+d)}function b8(n,r){const l=he.toCamelCase(" "+r);["get","set","has"].forEach(d=>{Object.defineProperty(n,d+l,{value:function(h,p,k){return this[d].call(this,r,h,p,k)},configurable:!0})})}class Ig{constructor(r){r&&this.set(r)}set(r,l,d){const h=this;function p(b,g,v){const A=Su(g);if(!A)throw new Error("header name must be a non-empty string");const x=he.findKey(h,A);(!x||h[x]===void 0||v===!0||v===void 0&&h[x]!==!1)&&(h[x||g]=rp(b))}const k=(b,g)=>he.forEach(b,(v,A)=>p(v,A,g));return he.isPlainObject(r)||r instanceof this.constructor?k(r,l):he.isString(r)&&(r=r.trim())&&!m8(r)?k(p8(r),l):r!=null&&p(l,r,d),this}get(r,l){if(r=Su(r),r){const d=he.findKey(this,r);if(d){const h=this[d];if(!l)return h;if(l===!0)return g8(h);if(he.isFunction(l))return l.call(this,h,d);if(he.isRegExp(l))return l.exec(h);throw new TypeError("parser must be boolean|regexp|function")}}}has(r,l){if(r=Su(r),r){const d=he.findKey(this,r);return!!(d&&this[d]!==void 0&&(!l||db(this,this[d],d,l)))}return!1}delete(r,l){const d=this;let h=!1;function p(k){if(k=Su(k),k){const b=he.findKey(d,k);b&&(!l||db(d,d[b],b,l))&&(delete d[b],h=!0)}}return he.isArray(r)?r.forEach(p):p(r),h}clear(r){const l=Object.keys(this);let d=l.length,h=!1;for(;d--;){const p=l[d];(!r||db(this,this[p],p,r,!0))&&(delete this[p],h=!0)}return h}normalize(r){const l=this,d={};return he.forEach(this,(h,p)=>{const k=he.findKey(d,p);if(k){l[k]=rp(h),delete l[p];return}const b=r?k8(p):String(p).trim();b!==p&&delete l[p],l[b]=rp(h),d[b]=!0}),this}concat(...r){return this.constructor.concat(this,...r)}toJSON(r){const l=Object.create(null);return he.forEach(this,(d,h)=>{d!=null&&d!==!1&&(l[h]=r&&he.isArray(d)?d.join(", "):d)}),l}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([r,l])=>r+": "+l).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(r){return r instanceof this?r:new this(r)}static concat(r,...l){const d=new this(r);return l.forEach(h=>d.set(h)),d}static accessor(r){const d=(this[pS]=this[pS]={accessors:{}}).accessors,h=this.prototype;function p(k){const b=Su(k);d[b]||(b8(h,k),d[b]=!0)}return he.isArray(r)?r.forEach(p):p(r),this}}Ig.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);he.reduceDescriptors(Ig.prototype,({value:n},r)=>{let l=r[0].toUpperCase()+r.slice(1);return{get:()=>n,set(d){this[l]=d}}});he.freezeMethods(Ig);const fs=Ig;function ub(n,r){const l=this||Xw,d=r||l,h=fs.from(d.headers);let p=d.data;return he.forEach(n,function(b){p=b.call(l,p,h.normalize(),r?r.status:void 0)}),h.normalize(),p}function oI(n){return!!(n&&n.__CANCEL__)}function Eh(n,r,l){mt.call(this,n??"canceled",mt.ERR_CANCELED,r,l),this.name="CanceledError"}he.inherits(Eh,mt,{__CANCEL__:!0});function w8(n,r,l){const d=l.config.validateStatus;!l.status||!d||d(l.status)?n(l):r(new mt("Request failed with status code "+l.status,[mt.ERR_BAD_REQUEST,mt.ERR_BAD_RESPONSE][Math.floor(l.status/100)-4],l.config,l.request,l))}const v8=si.isStandardBrowserEnv?function(){return{write:function(l,d,h,p,k,b){const g=[];g.push(l+"="+encodeURIComponent(d)),he.isNumber(h)&&g.push("expires="+new Date(h).toGMTString()),he.isString(p)&&g.push("path="+p),he.isString(k)&&g.push("domain="+k),b===!0&&g.push("secure"),document.cookie=g.join("; ")},read:function(l){const d=document.cookie.match(new RegExp("(^|;\\s*)("+l+")=([^;]*)"));return d?decodeURIComponent(d[3]):null},remove:function(l){this.write(l,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function _8(n){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(n)}function y8(n,r){return r?n.replace(/\/+$/,"")+"/"+r.replace(/^\/+/,""):n}function rI(n,r){return n&&!_8(r)?y8(n,r):r}const C8=si.isStandardBrowserEnv?function(){const r=/(msie|trident)/i.test(navigator.userAgent),l=document.createElement("a");let d;function h(p){let k=p;return r&&(l.setAttribute("href",k),k=l.href),l.setAttribute("href",k),{href:l.href,protocol:l.protocol?l.protocol.replace(/:$/,""):"",host:l.host,search:l.search?l.search.replace(/^\?/,""):"",hash:l.hash?l.hash.replace(/^#/,""):"",hostname:l.hostname,port:l.port,pathname:l.pathname.charAt(0)==="/"?l.pathname:"/"+l.pathname}}return d=h(window.location.href),function(k){const b=he.isString(k)?h(k):k;return b.protocol===d.protocol&&b.host===d.host}}():function(){return function(){return!0}}();function A8(n){const r=/^([-+\w]{1,25})(:?\/\/|:)/.exec(n);return r&&r[1]||""}function x8(n,r){n=n||10;const l=new Array(n),d=new Array(n);let h=0,p=0,k;return r=r!==void 0?r:1e3,function(g){const v=Date.now(),A=d[p];k||(k=v),l[h]=g,d[h]=v;let x=p,_=0;for(;x!==h;)_+=l[x++],x=x%n;if(h=(h+1)%n,h===p&&(p=(p+1)%n),v-k<r)return;const C=A&&v-A;return C?Math.round(_*1e3/C):void 0}}function gS(n,r){let l=0;const d=x8(50,250);return h=>{const p=h.loaded,k=h.lengthComputable?h.total:void 0,b=p-l,g=d(b),v=p<=k;l=p;const A={loaded:p,total:k,progress:k?p/k:void 0,bytes:b,rate:g||void 0,estimated:g&&k&&v?(k-p)/g:void 0,event:h};A[r?"download":"upload"]=!0,n(A)}}const E8=typeof XMLHttpRequest<"u",S8=E8&&function(n){return new Promise(function(l,d){let h=n.data;const p=fs.from(n.headers).normalize(),k=n.responseType;let b;function g(){n.cancelToken&&n.cancelToken.unsubscribe(b),n.signal&&n.signal.removeEventListener("abort",b)}he.isFormData(h)&&(si.isStandardBrowserEnv||si.isStandardBrowserWebWorkerEnv?p.setContentType(!1):p.setContentType("multipart/form-data;",!1));let v=new XMLHttpRequest;if(n.auth){const C=n.auth.username||"",M=n.auth.password?unescape(encodeURIComponent(n.auth.password)):"";p.set("Authorization","Basic "+btoa(C+":"+M))}const A=rI(n.baseURL,n.url);v.open(n.method.toUpperCase(),eI(A,n.params,n.paramsSerializer),!0),v.timeout=n.timeout;function x(){if(!v)return;const C=fs.from("getAllResponseHeaders"in v&&v.getAllResponseHeaders()),T={data:!k||k==="text"||k==="json"?v.responseText:v.response,status:v.status,statusText:v.statusText,headers:C,config:n,request:v};w8(function(P){l(P),g()},function(P){d(P),g()},T),v=null}if("onloadend"in v?v.onloadend=x:v.onreadystatechange=function(){!v||v.readyState!==4||v.status===0&&!(v.responseURL&&v.responseURL.indexOf("file:")===0)||setTimeout(x)},v.onabort=function(){v&&(d(new mt("Request aborted",mt.ECONNABORTED,n,v)),v=null)},v.onerror=function(){d(new mt("Network Error",mt.ERR_NETWORK,n,v)),v=null},v.ontimeout=function(){let M=n.timeout?"timeout of "+n.timeout+"ms exceeded":"timeout exceeded";const T=n.transitional||tI;n.timeoutErrorMessage&&(M=n.timeoutErrorMessage),d(new mt(M,T.clarifyTimeoutError?mt.ETIMEDOUT:mt.ECONNABORTED,n,v)),v=null},si.isStandardBrowserEnv){const C=(n.withCredentials||C8(A))&&n.xsrfCookieName&&v8.read(n.xsrfCookieName);C&&p.set(n.xsrfHeaderName,C)}h===void 0&&p.setContentType(null),"setRequestHeader"in v&&he.forEach(p.toJSON(),function(M,T){v.setRequestHeader(T,M)}),he.isUndefined(n.withCredentials)||(v.withCredentials=!!n.withCredentials),k&&k!=="json"&&(v.responseType=n.responseType),typeof n.onDownloadProgress=="function"&&v.addEventListener("progress",gS(n.onDownloadProgress,!0)),typeof n.onUploadProgress=="function"&&v.upload&&v.upload.addEventListener("progress",gS(n.onUploadProgress)),(n.cancelToken||n.signal)&&(b=C=>{v&&(d(!C||C.type?new Eh(null,n,v):C),v.abort(),v=null)},n.cancelToken&&n.cancelToken.subscribe(b),n.signal&&(n.signal.aborted?b():n.signal.addEventListener("abort",b)));const _=A8(A);if(_&&si.protocols.indexOf(_)===-1){d(new mt("Unsupported protocol "+_+":",mt.ERR_BAD_REQUEST,n));return}v.send(h||null)})},ip={http:X9,xhr:S8};he.forEach(ip,(n,r)=>{if(n){try{Object.defineProperty(n,"name",{value:r})}catch{}Object.defineProperty(n,"adapterName",{value:r})}});const iI={getAdapter:n=>{n=he.isArray(n)?n:[n];const{length:r}=n;let l,d;for(let h=0;h<r&&(l=n[h],!(d=he.isString(l)?ip[l.toLowerCase()]:l));h++);if(!d)throw d===!1?new mt(`Adapter ${l} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(he.hasOwnProp(ip,l)?`Adapter '${l}' is not available in the build`:`Unknown adapter '${l}'`);if(!he.isFunction(d))throw new TypeError("adapter is not a function");return d},adapters:ip};function hb(n){if(n.cancelToken&&n.cancelToken.throwIfRequested(),n.signal&&n.signal.aborted)throw new Eh(null,n)}function mS(n){return hb(n),n.headers=fs.from(n.headers),n.data=ub.call(n,n.transformRequest),["post","put","patch"].indexOf(n.method)!==-1&&n.headers.setContentType("application/x-www-form-urlencoded",!1),iI.getAdapter(n.adapter||Xw.adapter)(n).then(function(d){return hb(n),d.data=ub.call(n,n.transformResponse,d),d.headers=fs.from(d.headers),d},function(d){return oI(d)||(hb(n),d&&d.response&&(d.response.data=ub.call(n,n.transformResponse,d.response),d.response.headers=fs.from(d.response.headers))),Promise.reject(d)})}const kS=n=>n instanceof fs?n.toJSON():n;function Sd(n,r){r=r||{};const l={};function d(v,A,x){return he.isPlainObject(v)&&he.isPlainObject(A)?he.merge.call({caseless:x},v,A):he.isPlainObject(A)?he.merge({},A):he.isArray(A)?A.slice():A}function h(v,A,x){if(he.isUndefined(A)){if(!he.isUndefined(v))return d(void 0,v,x)}else return d(v,A,x)}function p(v,A){if(!he.isUndefined(A))return d(void 0,A)}function k(v,A){if(he.isUndefined(A)){if(!he.isUndefined(v))return d(void 0,v)}else return d(void 0,A)}function b(v,A,x){if(x in r)return d(v,A);if(x in n)return d(void 0,v)}const g={url:p,method:p,data:p,baseURL:k,transformRequest:k,transformResponse:k,paramsSerializer:k,timeout:k,timeoutMessage:k,withCredentials:k,adapter:k,responseType:k,xsrfCookieName:k,xsrfHeaderName:k,onUploadProgress:k,onDownloadProgress:k,decompress:k,maxContentLength:k,maxBodyLength:k,beforeRedirect:k,transport:k,httpAgent:k,httpsAgent:k,cancelToken:k,socketPath:k,responseEncoding:k,validateStatus:b,headers:(v,A)=>h(kS(v),kS(A),!0)};return he.forEach(Object.keys(Object.assign({},n,r)),function(A){const x=g[A]||h,_=x(n[A],r[A],A);he.isUndefined(_)&&x!==b||(l[A]=_)}),l}const sI="1.5.0",ev={};["object","boolean","number","function","string","symbol"].forEach((n,r)=>{ev[n]=function(d){return typeof d===n||"a"+(r<1?"n ":" ")+n}});const bS={};ev.transitional=function(r,l,d){function h(p,k){return"[Axios v"+sI+"] Transitional option '"+p+"'"+k+(d?". "+d:"")}return(p,k,b)=>{if(r===!1)throw new mt(h(k," has been removed"+(l?" in "+l:"")),mt.ERR_DEPRECATED);return l&&!bS[k]&&(bS[k]=!0,console.warn(h(k," has been deprecated since v"+l+" and will be removed in the near future"))),r?r(p,k,b):!0}};function D8(n,r,l){if(typeof n!="object")throw new mt("options must be an object",mt.ERR_BAD_OPTION_VALUE);const d=Object.keys(n);let h=d.length;for(;h-- >0;){const p=d[h],k=r[p];if(k){const b=n[p],g=b===void 0||k(b,p,n);if(g!==!0)throw new mt("option "+p+" must be "+g,mt.ERR_BAD_OPTION_VALUE);continue}if(l!==!0)throw new mt("Unknown option "+p,mt.ERR_BAD_OPTION)}}const j0={assertOptions:D8,validators:ev},ta=j0.validators;class Lp{constructor(r){this.defaults=r,this.interceptors={request:new fS,response:new fS}}request(r,l){typeof r=="string"?(l=l||{},l.url=r):l=r||{},l=Sd(this.defaults,l);const{transitional:d,paramsSerializer:h,headers:p}=l;d!==void 0&&j0.assertOptions(d,{silentJSONParsing:ta.transitional(ta.boolean),forcedJSONParsing:ta.transitional(ta.boolean),clarifyTimeoutError:ta.transitional(ta.boolean)},!1),h!=null&&(he.isFunction(h)?l.paramsSerializer={serialize:h}:j0.assertOptions(h,{encode:ta.function,serialize:ta.function},!0)),l.method=(l.method||this.defaults.method||"get").toLowerCase();let k=p&&he.merge(p.common,p[l.method]);p&&he.forEach(["delete","get","head","post","put","patch","common"],M=>{delete p[M]}),l.headers=fs.concat(k,p);const b=[];let g=!0;this.interceptors.request.forEach(function(T){typeof T.runWhen=="function"&&T.runWhen(l)===!1||(g=g&&T.synchronous,b.unshift(T.fulfilled,T.rejected))});const v=[];this.interceptors.response.forEach(function(T){v.push(T.fulfilled,T.rejected)});let A,x=0,_;if(!g){const M=[mS.bind(this),void 0];for(M.unshift.apply(M,b),M.push.apply(M,v),_=M.length,A=Promise.resolve(l);x<_;)A=A.then(M[x++],M[x++]);return A}_=b.length;let C=l;for(x=0;x<_;){const M=b[x++],T=b[x++];try{C=M(C)}catch(O){T.call(this,O);break}}try{A=mS.call(this,C)}catch(M){return Promise.reject(M)}for(x=0,_=v.length;x<_;)A=A.then(v[x++],v[x++]);return A}getUri(r){r=Sd(this.defaults,r);const l=rI(r.baseURL,r.url);return eI(l,r.params,r.paramsSerializer)}}he.forEach(["delete","get","head","options"],function(r){Lp.prototype[r]=function(l,d){return this.request(Sd(d||{},{method:r,url:l,data:(d||{}).data}))}});he.forEach(["post","put","patch"],function(r){function l(d){return function(p,k,b){return this.request(Sd(b||{},{method:r,headers:d?{"Content-Type":"multipart/form-data"}:{},url:p,data:k}))}}Lp.prototype[r]=l(),Lp.prototype[r+"Form"]=l(!0)});const sp=Lp;class tv{constructor(r){if(typeof r!="function")throw new TypeError("executor must be a function.");let l;this.promise=new Promise(function(p){l=p});const d=this;this.promise.then(h=>{if(!d._listeners)return;let p=d._listeners.length;for(;p-- >0;)d._listeners[p](h);d._listeners=null}),this.promise.then=h=>{let p;const k=new Promise(b=>{d.subscribe(b),p=b}).then(h);return k.cancel=function(){d.unsubscribe(p)},k},r(function(p,k,b){d.reason||(d.reason=new Eh(p,k,b),l(d.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(r){if(this.reason){r(this.reason);return}this._listeners?this._listeners.push(r):this._listeners=[r]}unsubscribe(r){if(!this._listeners)return;const l=this._listeners.indexOf(r);l!==-1&&this._listeners.splice(l,1)}static source(){let r;return{token:new tv(function(h){r=h}),cancel:r}}}const T8=tv;function I8(n){return function(l){return n.apply(null,l)}}function M8(n){return he.isObject(n)&&n.isAxiosError===!0}const P0={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(P0).forEach(([n,r])=>{P0[r]=n});const N8=P0;function aI(n){const r=new sp(n),l=UT(sp.prototype.request,r);return he.extend(l,sp.prototype,r,{allOwnKeys:!0}),he.extend(l,r,null,{allOwnKeys:!0}),l.create=function(h){return aI(Sd(n,h))},l}const Rn=aI(Xw);Rn.Axios=sp;Rn.CanceledError=Eh;Rn.CancelToken=T8;Rn.isCancel=oI;Rn.VERSION=sI;Rn.toFormData=Tg;Rn.AxiosError=mt;Rn.Cancel=Rn.CanceledError;Rn.all=function(r){return Promise.all(r)};Rn.spread=I8;Rn.isAxiosError=M8;Rn.mergeConfig=Sd;Rn.AxiosHeaders=fs;Rn.formToJSON=n=>nI(he.isHTMLForm(n)?new FormData(n):n);Rn.getAdapter=iI.getAdapter;Rn.HttpStatusCode=N8;Rn.default=Rn;const rt=Rn,fb=Vt("categorys",async()=>{const n="https://server-agency-1203.onrender.com/blog/all_categoryes/";return(await rt.get(n)).data}),j8=Ft({name:"categorys",initialState:{info:null,status:null,error:null},reducers:{},extraReducers:function(n){n.addCase(fb.pending,function(r){r.status="pending"}),n.addCase(fb.fulfilled,function(r,l){r.status="fulfilled",r.info=l.payload}),n.addCase(fb.rejected,function(r,l){r.status="rejected",r.error=l.error.message})}}),P8=j8.reducer,wS=Vt("allBlogs",async()=>{const n="https://server-agency-1203.onrender.com/blog/all_blog/";try{const r=await rt.get(n);return{status:r.status,data:r.data}}catch(r){return{status:r.response.status,data:r.response.data}}}),B8=Ft({name:"allBlogs",initialState:{info:null,status:null,error:null},reducers:{},extraReducers:function(n){n.addCase(wS.pending,function(r){r.status="pending"}),n.addCase(wS.fulfilled,function(r,l){l.payload.status===404?(r.status="rejected",r.info=l.payload.data):(r.status="fulfilled",r.info=l.payload.data)})}}),O8=B8.reducer,pb=Vt("blogTypeCategory",async n=>{const r=`https://server-agency-1203.onrender.com/blog/blog_by_category/?slug=${n}`;return(await rt.get(r)).data}),L8=Ft({name:"BlogTypeCategory",initialState:{info:null,status:null,error:null},reducers:{},extraReducers:function(n){n.addCase(pb.pending,function(r){r.status="pending"}),n.addCase(pb.fulfilled,function(r,l){r.status="fulfilled",r.info=l.payload}),n.addCase(pb.rejected,function(r,l){r.status="rejected",r.error=l.error.message})}}),R8=L8.reducer,gb=Vt("blogDetail",async n=>{const r=`https://server-agency-1203.onrender.com/blog/blog_detail/?slug=${n}`;try{return(await rt.get(r)).data}catch{throw new Error("Este blog no existe")}}),z8=Ft({name:"blogDetail",initialState:{info:null,status:null,error:null},reducers:{},extraReducers:function(n){n.addCase(gb.pending,function(r){r.status="pending"}),n.addCase(gb.fulfilled,function(r,l){r.status="fulfilled",r.info=l.payload}),n.addCase(gb.rejected,function(r,l){r.status="rejected",r.error=l.error.message})}}),F8=z8.reducer,mb=Vt("SearchBlogs",async n=>{const r=`https://server-agency-1203.onrender.com/blog/search_blogs/?slug=${n}`;return(await rt.get(r)).data}),V8=Ft({name:"searchBlogs",initialState:{info:null,status:null,error:null},reducers:{},extraReducers:function(n){n.addCase(mb.pending,function(r){r.status="pending"}),n.addCase(mb.fulfilled,function(r,l){r.status="fulfilled",r.info=l.payload}),n.addCase(mb.rejected,function(r,l){r.status="rejected",r.error=l.error.message})}}),U8=V8.reducer,vS=Vt("create_user",async n=>{const r="https://server-agency-1203.onrender.com/user_system/auth/users/";try{const l=await rt.post(r,n);return{status:l.status,data:l.data}}catch(l){return{status:l.response.status,data:l.response.data}}}),H8={info:null,status:null,error:null},$8=Ft({name:"createUser",initialState:H8,reducers:{},extraReducers:function(n){n.addCase(vS.pending,function(r){r.status="pending"}),n.addCase(vS.fulfilled,function(r,l){l.payload.status===400?(r.status="rejected",r.info=l.payload.data):(r.status="fulfilled",r.info=l.payload.data)})}}),W8=$8.reducer,kb=Vt("resendEmail",async n=>{const r="https://server-agency-1203.onrender.com/user_system/auth/users/resend_activation/";return(await rt.post(r,n)).data}),q8={status:null,error:null},G8=Ft({name:"resendEmail",initialState:q8,reducers:{},extraReducers:function(n){n.addCase(kb.pending,function(r){r.status="pending"}),n.addCase(kb.fulfilled,function(r){r.status="fulfilled"}),n.addCase(kb.rejected,function(r,l){r.status="rejected",r.error=l.error.message})}}),K8=G8.reducer,bb=Vt("activation",async n=>{const r="https://server-agency-1203.onrender.com/user_system/auth/users/activation/";return(await rt.post(r,n)).data}),Y8={status:null,error:null},Q8=Ft({name:"activationUser",initialState:Y8,reducers:{},extraReducers:function(n){n.addCase(bb.pending,function(r){r.status="pending"}),n.addCase(bb.fulfilled,function(r){r.status="fulfilled"}),n.addCase(bb.rejected,function(r,l){r.status="rejected",r.error=l.error.message})}}),Z8=Q8.reducer,wb=Vt("JWTCreate",async n=>{const r="https://server-agency-1203.onrender.com/user_system/auth/jwt/create/";return(await rt.post(r,n)).data}),J8={info:null,status:null,error:null},X8=Ft({name:"signinUser",initialState:J8,reducers:{},extraReducers:function(n){n.addCase(wb.pending,function(r){r.status="pending"}),n.addCase(wb.fulfilled,function(r,l){r.status="fulfilled",r.info=l.payload.refresh}),n.addCase(wb.rejected,function(r,l){r.status="rejected",r.error=l.error.message})}}),eF=X8.reducer,vb=Vt("JWTRefresh",async n=>{const r="https://server-agency-1203.onrender.com/user_system/auth/jwt/refresh/";return(await rt.post(r,n)).data}),tF={info:null,status:null,error:null},nF=Ft({name:"JWTRefresh",initialState:tF,reducers:{},extraReducers:function(n){n.addCase(vb.pending,function(r){r.status="pending"}),n.addCase(vb.fulfilled,function(r,l){r.status="fulfilled",r.info=l.payload,localStorage.setItem("access",JSON.stringify(l.payload.access))}),n.addCase(vb.rejected,function(r,l){r.status="rejected",r.error=l.error.message})}}),oF=nF.reducer,B0=Vt("JWTVerify",async n=>{const r="https://server-agency-1203.onrender.com/user_system/auth/jwt/verify/";try{return(await rt.post(r,n)).status}catch(l){return l.response.status}}),rF={status:null,error:null},iF=Ft({name:"JWTVerify",initialState:rF,reducers:{},extraReducers:function(n){n.addCase(B0.pending,function(r){r.status="pending"}),n.addCase(B0.fulfilled,function(r,l){l.payload==200?r.status="fulfilled":r.status="rejected"})}}),sF=iF.reducer,_S=Vt("userData",async n=>{const r={Authorization:`JWT ${n.jwt}`};if(n.method==="get")try{const l="https://server-agency-1203.onrender.com/user_system/auth/users/me/",d=await rt.get(l,{headers:r});return{status:d.status,data:d.data}}catch(l){return{status:l.response.status,data:l.response.data}}else if(n.method==="put")try{const l="https://server-agency-1203.onrender.com/user_system/auth/users/me/",d=await rt.put(l,n.info,{headers:r});return{status:d.status,data:d.data}}catch(l){return{status:l.response.status,data:l.response.data}}else throw new Error("Error")}),aF={info:null,status:null,error:null},lF=Ft({name:"userData",initialState:aF,reducers:{},extraReducers:function(n){n.addCase(_S.pending,function(r){r.status="pending"}),n.addCase(_S.fulfilled,function(r,l){l.payload.status===200?(r.status="fulfilled",r.info=l.payload.data,localStorage.setItem("username",JSON.stringify(l.payload.data.username))):(r.status="rejected",r.info=l.payload.data)})}}),cF=lF.reducer,_b=Vt("restPassword",async n=>{const r="https://server-agency-1203.onrender.com/user_system/auth/users/reset_password/";try{return(await rt.post(r,n)).status}catch{throw new Error("El apartado de correo no puede ir vacio")}}),dF={status:null,error:null},uF=Ft({name:"resetPassword",initialState:dF,reducers:{},extraReducers:function(n){n.addCase(_b.pending,function(r){r.status="pending"}),n.addCase(_b.fulfilled,function(r,l){r.status="fulfilled"}),n.addCase(_b.rejected,function(r,l){r.status="rejected",r.error=l.error.message})}}),hF=uF.reducer,yS=Vt("resetPasswordConfirm",async n=>{const r="https://server-agency-1203.onrender.com/user_system/auth/users/reset_password_confirm/";try{return(await rt.post(r,n)).status}catch(l){return{status:l.response.status,data:l.response.data}}}),fF={info:null,status:null,error:null},pF=Ft({name:"resetPasswordConfirm",initialState:fF,reducers:{},extraReducers:function(n){n.addCase(yS.pending,function(r){r.status="pending"}),n.addCase(yS.fulfilled,function(r,l){l.payload.status===204?r.status="fulfilled":(r.status="rejected",r.info=l.payload.data)})}}),gF=pF.reducer,yb=Vt("authGoogle",async()=>{const n="https://server-agency-1203.onrender.com/user_system/auth/o/google-oauth2/?redirect_uri=https://critianrodriguez042502.github.io/agency_view/#/access/signin";return(await rt.get(n)).data}),mF={url:null,status:null,error:null},kF=Ft({name:"authGoogle",initialState:mF,reducers:{},extraReducers:function(n){n.addCase(yb.pending,function(r){r.status="pending"}),n.addCase(yb.fulfilled,function(r,l){r.status="fulfilled",r.url=l.payload.authorization_url}),n.addCase(yb.rejected,function(r,l){r.status="rejected",r.error=l.error.message})}}),bF=kF.reducer,CS=Vt("loginGoogle",async n=>{const r={headers:{"Content-Type":"application/x-www-form-urlencoded"}},l="https://server-agency-1203.onrender.com/user_system/auth/o/google-oauth2/";if(n.state&&n.code){const d=new URLSearchParams;d.append("state",d.state),d.append("code",d.code);try{const h=await rt.post(l,d.toString(),r);return{status:h.status,data:h.data}}catch(h){return{status:h.response.status,data:h.response.data}}}}),wF={info:null,status:null,error:null},vF=Ft({name:"loginGoogle",initialState:wF,reducers:{},extraReducers:function(n){n.addCase(CS.pending,function(r){r.status="pending"}),n.addCase(CS.fulfilled,function(r,l){l.payload.status===400?(r.status="rejected",r.info=l.payload.data):(r.status="fulfilled",r.info=l.payload.data)})}}),_F=vF.reducer,AS=Vt("AllUsernames",async n=>{const r={Authorization:`JWT ${n.jwt}`},l="https://server-agency-1203.onrender.com/dashboard/get_all_usernames/";try{const d=await rt.get(l,{headers:r});return{status:d.status,data:d.data}}catch(d){return{status:d.response.status,data:d.response.data}}}),yF=Ft({name:"allUsernames",initialState:{info:null,status:null,error:null},reducers:{},extraReducers:function(n){n.addCase(AS.pending,function(r){r.status="pending"}),n.addCase(AS.fulfilled,function(r,l){l.payload.status===200?(r.status="fulfilled",r.info=l.payload.data):(r.status="rejected",r.info=l.payload.data)})}}),CF=yF.reducer,Cb=Vt("blogByUser",async n=>{const r={Authorization:`JWT ${n}`},l="https://server-agency-1203.onrender.com/dashboard/blog_by_user/";return(await rt.get(l,{headers:r})).data}),AF={info:null,status:null,error:null},xF=Ft({name:"blogByUser",initialState:AF,reducers:{},extraReducers:function(n){n.addCase(Cb.pending,function(r){r.status="pending"}),n.addCase(Cb.fulfilled,function(r,l){r.status="fulfilled",r.info=l.payload}),n.addCase(Cb.rejected,function(r,l){r.status="rejected",r.error={name:l.error.name,message:l.error.message,code:l.error.code}})}}),EF=xF.reducer,Ab=Vt("detailedUserBlog",async n=>{const r={Authorization:`JWT ${n.jwt}`},l=`https://server-agency-1203.onrender.com/dashboard/blog_detail_by_user/?slug=${n.slug}`;return(await rt.get(l,{headers:r})).data}),SF={info:null,status:null,error:null},DF=Ft({name:"detailedUserBlog",initialState:SF,reducers:{},extraReducers:function(n){n.addCase(Ab.pending,function(r){r.status="pending"}),n.addCase(Ab.fulfilled,function(r,l){r.info=l.payload,r.status="fulfilled"}),n.addCase(Ab.rejected,function(r,l){r.status="rejected",r.error=l.error.message})}}),TF=DF.reducer,xS=Vt("getUserBlogReactions",async n=>{const r={Authorization:`JWT ${n.jwt}`},l=`https://server-agency-1203.onrender.com/dashboard/get_user_blog_reactions/?slug=${n.slug}`;try{const d=await rt.get(l,{headers:r});return{status:d.status,data:d.data}}catch(d){return{status:d.response.status,data:d.response.data}}}),IF=Ft({name:"getUserBlogReactions",initialState:{info:null,status:null,error:null},reducers:{},extraReducers:function(n){n.addCase(xS.pending,function(r){r.status="pending"}),n.addCase(xS.fulfilled,function(r,l){l.payload.status===200?(r.status="fulfilled",r.info=l.payload.data):(r.status="rejected",r.info=l.payload.data)})}}),MF=IF.reducer,xb=Vt("updateBlogUser",async n=>{const r={Authorization:`JWT ${n.jwt}`},l=`https://server-agency-1203.onrender.com/dashboard/update_blogs_by_user/?slug=${n.slug}`,d=new FormData;return d.append("title",n.info.title),d.append("description",n.info.description),d.append("public",n.info.public),d.append("content",n.info.content),d.append("category",n.info.category),d.append("file",n.info.img),(await rt.put(l,d,{headers:r})).data}),NF={status:null,error:null},jF=Ft({name:"UpdateBlog",initialState:NF,reducers:{},extraReducers:function(n){n.addCase(xb.pending,function(r){r.status="pending"}),n.addCase(xb.fulfilled,function(r){r.status="fulfilled"}),n.addCase(xb.rejected,function(r){r.status="rejected"})}}),PF=jF.reducer,Eb=Vt("createBlog",async n=>{const r={Authorization:`JWT ${n.jwt}`},l="https://server-agency-1203.onrender.com/dashboard/create_blog_by_user/",d=new FormData;return d.append("title",n.info.title),d.append("description",n.info.description),d.append("content",n.info.content),d.append("public",n.info.public),d.append("category",n.info.category),d.append("file",n.info.img),(await rt.post(l,d,{headers:r})).data}),BF={status:null,error:null},OF=Ft({name:"CreateBlogUser",initialState:BF,reducers:{},extraReducers:function(n){n.addCase(Eb.pending,function(r){r.status="pending"}),n.addCase(Eb.fulfilled,function(r){r.status="fulfilled"}),n.addCase(Eb.rejected,function(r,l){r.status="rejected",r.error=l.error.message})}}),LF=OF.reducer,Sb=Vt("deleteBlogUser",async n=>{const r={Authorization:`JWT ${n.jwt}`},l=`https://server-agency-1203.onrender.com/dashboard/delete_blog_by_user/?slug=${n.slug}`;return(await rt.delete(l,{headers:r})).data}),RF={status:null,error:null},zF=Ft({name:"deleteBlogUser",initialState:RF,reducers:{},extraReducers:function(n){n.addCase(Sb.pending,function(r){r.status="pending"}),n.addCase(Sb.fulfilled,function(r){r.status="fulfilled"}),n.addCase(Sb.rejected,function(r,l){r.status="rejected",r.error=l.error.message})}}),FF=zF.reducer,ES=Vt("LikeBlog",async n=>{const r={Authorization:`JWT ${n.jwt}`},l="https://server-agency-1203.onrender.com/blog_reactions/likes/";try{const d=await rt.patch(l,n,{headers:r});return{status:d.status,data:d.data}}catch(d){return{status:d.response.status,data:d.response.data}}}),VF={info:null,status:null,error:null},UF=Ft({name:"LikeBlogs",initialState:VF,reducers:{},extraReducers:function(n){n.addCase(ES.pending,function(r){r.status="pending"}),n.addCase(ES.fulfilled,function(r,l){l.payload.status==200?(r.status="fulfilled",r.info=l.payload):(r.status="rejected",r.info=l.payload)})}}),HF=UF.reducer,SS=Vt("comments",async n=>{const r={Authorization:`JWT ${n.jwt}`};if(n.method==="get"){const l=`https://server-agency-1203.onrender.com/blog_reactions/comments/?unique_brand=${n.unique_brand}`;try{const d=await rt.get(l,{headers:r});return{status:d.status,data:d.data}}catch(d){return{status:d.response.status,data:d.response.data}}}else if(n.method==="post")try{const l="https://server-agency-1203.onrender.com/blog_reactions/comments/",d=await rt.post(l,n,{headers:r});return{status:d.status,data:d.data}}catch(l){return{status:l.response.status,data:l.response.data}}else if(n.method==="patch")try{const l="https://server-agency-1203.onrender.com/blog_reactions/comments/",d=await rt.patch(l,n,{headers:r});return{status:d.status,data:d.data}}catch(l){return{status:l.response.status,data:l.response.data}}else if(n.method==="delete")try{const l=`https://server-agency-1203.onrender.com/blog_reactions/comments/?unique_key=${n.unique_key}`,d=await rt.delete(l,{headers:r});return{status:d.status,data:d.data}}catch(l){return{status:l.response.status,data:l.response.data}}else return{status:"Error"}}),$F=Ft({name:"CommentsBlog",initialState:{info:null,status:null,error:null},reducers:{},extraReducers:function(n){n.addCase(SS.pending,function(r){r.status="pending"}),n.addCase(SS.fulfilled,function(r,l){l.payload.status===200?(r.status="fulfilled",r.info=l.payload.data):(r.status="rejected",r.info=l.payload.data)})}}),WF=$F.reducer,DS=Vt("Detaildecomments",async n=>{const r={Authorization:`JWT ${n.jwt}`},l=`https://server-agency-1203.onrender.com/blog_reactions/comments/?unique_brand=${n.unique_brand}`;try{const d=await rt.get(l,{headers:r});return{status:d.status,data:d.data}}catch(d){return{status:d.response.status,data:d.response.data}}}),qF=Ft({name:"DetailedCommentsBlog",initialState:{info:null,status:null,error:null},reducers:{},extraReducers:function(n){n.addCase(DS.pending,function(r){r.status="pending"}),n.addCase(DS.fulfilled,function(r,l){l.payload.status===200?(r.status="fulfilled",r.info=l.payload.data):(r.status="rejected",r.info=l.payload.data)})}}),GF=qF.reducer,TS=Vt("GetLikesBlog",async n=>{const r=`https://server-agency-1203.onrender.com/blog/get_blog_likes/?slug=${n}`;try{const l=await rt.get(r);return{status:l.status,data:l.data}}catch(l){return{status:l.response.status,data:l.response.data}}}),KF={info:null,status:null,error:null},YF=Ft({name:"LikeBlogs",initialState:KF,reducers:{},extraReducers:function(n){n.addCase(TS.pending,function(r){r.status="pending"}),n.addCase(TS.fulfilled,function(r,l){l.payload.status==200?(r.status="fulfilled",r.info=l.payload):(r.status="rejected",r.info=l.payload)})}}),QF=YF.reducer,IS=Vt("getCommentsBlog",async n=>{const r=`https://server-agency-1203.onrender.com/blog/get_blog_comments/?slug=${n}`;try{const l=await rt.request({url:r,method:"get"});return{status:l.status,data:l.data}}catch(l){return{status:l.response.status,data:l.response.data}}}),ZF={info:null,status:null,error:null},JF=Ft({name:"GetComments",initialState:ZF,reducers:{},extraReducers:function(n){n.addCase(IS.pending,function(r){r.status="pending"}),n.addCase(IS.fulfilled,function(r,l){l.payload.status==200?(r.status="fulfilled",r.info=l.payload.data):(r.status="rejected",r.info=l.payload.data)})}}),XF=JF.reducer,eV=c9({reducer:{category:P8,allBlogs:O8,blogTypeCategory:R8,blogDetail:F8,searchBlog:U8,createUser:W8,resendEmail:K8,activate:Z8,JWTCreate:eF,JWTRefresh:oF,JWTVerify:sF,resetPasword:hF,resetPasswordConfirm:gF,userData:cF,authGoogle:bF,loginGoogle:_F,allUsernames:CF,blogsByUser:EF,detailedUserBlog:TF,getUserBlogReactions:MF,createBlogUser:LF,updateBlogUser:PF,deleteBlogUser:FF,getLikesBlog:QF,getComments:XF,likeBlog:HF,commentsBlog:WF,detailedCommentBlog:GF}});/**
 * @remix-run/router v1.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function dn(){return dn=Object.assign?Object.assign.bind():function(n){for(var r=1;r<arguments.length;r++){var l=arguments[r];for(var d in l)Object.prototype.hasOwnProperty.call(l,d)&&(n[d]=l[d])}return n},dn.apply(this,arguments)}var On;(function(n){n.Pop="POP",n.Push="PUSH",n.Replace="REPLACE"})(On||(On={}));const MS="popstate";function tV(n){n===void 0&&(n={});function r(h,p){let{pathname:k="/",search:b="",hash:g=""}=qi(h.location.hash.substr(1));return!k.startsWith("/")&&!k.startsWith(".")&&(k="/"+k),kh("",{pathname:k,search:b,hash:g},p.state&&p.state.usr||null,p.state&&p.state.key||"default")}function l(h,p){let k=h.document.querySelector("base"),b="";if(k&&k.getAttribute("href")){let g=h.location.href,v=g.indexOf("#");b=v===-1?g:g.slice(0,v)}return b+"#"+(typeof p=="string"?p:ql(p))}function d(h,p){Wl(h.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(p)+")")}return oV(r,l,d,n)}function ot(n,r){if(n===!1||n===null||typeof n>"u")throw new Error(r)}function Wl(n,r){if(!n){typeof console<"u"&&console.warn(r);try{throw new Error(r)}catch{}}}function nV(){return Math.random().toString(36).substr(2,8)}function NS(n,r){return{usr:n.state,key:n.key,idx:r}}function kh(n,r,l,d){return l===void 0&&(l=null),dn({pathname:typeof n=="string"?n:n.pathname,search:"",hash:""},typeof r=="string"?qi(r):r,{state:l,key:r&&r.key||d||nV()})}function ql(n){let{pathname:r="/",search:l="",hash:d=""}=n;return l&&l!=="?"&&(r+=l.charAt(0)==="?"?l:"?"+l),d&&d!=="#"&&(r+=d.charAt(0)==="#"?d:"#"+d),r}function qi(n){let r={};if(n){let l=n.indexOf("#");l>=0&&(r.hash=n.substr(l),n=n.substr(0,l));let d=n.indexOf("?");d>=0&&(r.search=n.substr(d),n=n.substr(0,d)),n&&(r.pathname=n)}return r}function oV(n,r,l,d){d===void 0&&(d={});let{window:h=document.defaultView,v5Compat:p=!1}=d,k=h.history,b=On.Pop,g=null,v=A();v==null&&(v=0,k.replaceState(dn({},k.state,{idx:v}),""));function A(){return(k.state||{idx:null}).idx}function x(){b=On.Pop;let O=A(),P=O==null?null:O-v;v=O,g&&g({action:b,location:T.location,delta:P})}function _(O,P){b=On.Push;let j=kh(T.location,O,P);l&&l(j,O),v=A()+1;let R=NS(j,v),L=T.createHref(j);try{k.pushState(R,"",L)}catch(q){if(q instanceof DOMException&&q.name==="DataCloneError")throw q;h.location.assign(L)}p&&g&&g({action:b,location:T.location,delta:1})}function C(O,P){b=On.Replace;let j=kh(T.location,O,P);l&&l(j,O),v=A();let R=NS(j,v),L=T.createHref(j);k.replaceState(R,"",L),p&&g&&g({action:b,location:T.location,delta:0})}function M(O){let P=h.location.origin!=="null"?h.location.origin:h.location.href,j=typeof O=="string"?O:ql(O);return ot(P,"No window.location.(origin|href) available to create URL for href: "+j),new URL(j,P)}let T={get action(){return b},get location(){return n(h,k)},listen(O){if(g)throw new Error("A history only accepts one active listener");return h.addEventListener(MS,x),g=O,()=>{h.removeEventListener(MS,x),g=null}},createHref(O){return r(h,O)},createURL:M,encodeLocation(O){let P=M(O);return{pathname:P.pathname,search:P.search,hash:P.hash}},push:_,replace:C,go(O){return k.go(O)}};return T}var Dn;(function(n){n.data="data",n.deferred="deferred",n.redirect="redirect",n.error="error"})(Dn||(Dn={}));const rV=new Set(["lazy","caseSensitive","path","id","index","children"]);function iV(n){return n.index===!0}function O0(n,r,l,d){return l===void 0&&(l=[]),d===void 0&&(d={}),n.map((h,p)=>{let k=[...l,p],b=typeof h.id=="string"?h.id:k.join("-");if(ot(h.index!==!0||!h.children,"Cannot specify children on an index route"),ot(!d[b],'Found a route id collision on id "'+b+`".  Route id's must be globally unique within Data Router usages`),iV(h)){let g=dn({},h,r(h),{id:b});return d[b]=g,g}else{let g=dn({},h,r(h),{id:b,children:void 0});return d[b]=g,h.children&&(g.children=O0(h.children,r,k,d)),g}})}function sd(n,r,l){l===void 0&&(l="/");let d=typeof r=="string"?qi(r):r,h=Pd(d.pathname||"/",l);if(h==null)return null;let p=lI(n);sV(p);let k=null;for(let b=0;k==null&&b<p.length;++b)k=gV(p[b],bV(h));return k}function lI(n,r,l,d){r===void 0&&(r=[]),l===void 0&&(l=[]),d===void 0&&(d="");let h=(p,k,b)=>{let g={relativePath:b===void 0?p.path||"":b,caseSensitive:p.caseSensitive===!0,childrenIndex:k,route:p};g.relativePath.startsWith("/")&&(ot(g.relativePath.startsWith(d),'Absolute route path "'+g.relativePath+'" nested under path '+('"'+d+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),g.relativePath=g.relativePath.slice(d.length));let v=ps([d,g.relativePath]),A=l.concat(g);p.children&&p.children.length>0&&(ot(p.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+v+'".')),lI(p.children,r,A,v)),!(p.path==null&&!p.index)&&r.push({path:v,score:fV(v,p.index),routesMeta:A})};return n.forEach((p,k)=>{var b;if(p.path===""||!((b=p.path)!=null&&b.includes("?")))h(p,k);else for(let g of cI(p.path))h(p,k,g)}),r}function cI(n){let r=n.split("/");if(r.length===0)return[];let[l,...d]=r,h=l.endsWith("?"),p=l.replace(/\?$/,"");if(d.length===0)return h?[p,""]:[p];let k=cI(d.join("/")),b=[];return b.push(...k.map(g=>g===""?p:[p,g].join("/"))),h&&b.push(...k),b.map(g=>n.startsWith("/")&&g===""?"/":g)}function sV(n){n.sort((r,l)=>r.score!==l.score?l.score-r.score:pV(r.routesMeta.map(d=>d.childrenIndex),l.routesMeta.map(d=>d.childrenIndex)))}const aV=/^:\w+$/,lV=3,cV=2,dV=1,uV=10,hV=-2,jS=n=>n==="*";function fV(n,r){let l=n.split("/"),d=l.length;return l.some(jS)&&(d+=hV),r&&(d+=cV),l.filter(h=>!jS(h)).reduce((h,p)=>h+(aV.test(p)?lV:p===""?dV:uV),d)}function pV(n,r){return n.length===r.length&&n.slice(0,-1).every((d,h)=>d===r[h])?n[n.length-1]-r[r.length-1]:0}function gV(n,r){let{routesMeta:l}=n,d={},h="/",p=[];for(let k=0;k<l.length;++k){let b=l[k],g=k===l.length-1,v=h==="/"?r:r.slice(h.length)||"/",A=mV({path:b.relativePath,caseSensitive:b.caseSensitive,end:g},v);if(!A)return null;Object.assign(d,A.params);let x=b.route;p.push({params:d,pathname:ps([h,A.pathname]),pathnameBase:yV(ps([h,A.pathnameBase])),route:x}),A.pathnameBase!=="/"&&(h=ps([h,A.pathnameBase]))}return p}function mV(n,r){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[l,d]=kV(n.path,n.caseSensitive,n.end),h=r.match(l);if(!h)return null;let p=h[0],k=p.replace(/(.)\/+$/,"$1"),b=h.slice(1);return{params:d.reduce((v,A,x)=>{if(A==="*"){let _=b[x]||"";k=p.slice(0,p.length-_.length).replace(/(.)\/+$/,"$1")}return v[A]=wV(b[x]||"",A),v},{}),pathname:p,pathnameBase:k,pattern:n}}function kV(n,r,l){r===void 0&&(r=!1),l===void 0&&(l=!0),Wl(n==="*"||!n.endsWith("*")||n.endsWith("/*"),'Route path "'+n+'" will be treated as if it were '+('"'+n.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+n.replace(/\*$/,"/*")+'".'));let d=[],h="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(k,b)=>(d.push(b),"/([^\\/]+)"));return n.endsWith("*")?(d.push("*"),h+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):l?h+="\\/*$":n!==""&&n!=="/"&&(h+="(?:(?=\\/|$))"),[new RegExp(h,r?void 0:"i"),d]}function bV(n){try{return decodeURI(n)}catch(r){return Wl(!1,'The URL path "'+n+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+r+").")),n}}function wV(n,r){try{return decodeURIComponent(n)}catch(l){return Wl(!1,'The value for the URL param "'+r+'" will not be decoded because'+(' the string "'+n+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+l+").")),n}}function Pd(n,r){if(r==="/")return n;if(!n.toLowerCase().startsWith(r.toLowerCase()))return null;let l=r.endsWith("/")?r.length-1:r.length,d=n.charAt(l);return d&&d!=="/"?null:n.slice(l)||"/"}function vV(n,r){r===void 0&&(r="/");let{pathname:l,search:d="",hash:h=""}=typeof n=="string"?qi(n):n;return{pathname:l?l.startsWith("/")?l:_V(l,r):r,search:CV(d),hash:AV(h)}}function _V(n,r){let l=r.replace(/\/+$/,"").split("/");return n.split("/").forEach(h=>{h===".."?l.length>1&&l.pop():h!=="."&&l.push(h)}),l.length>1?l.join("/"):"/"}function Db(n,r,l,d){return"Cannot include a '"+n+"' character in a manually specified "+("`to."+r+"` field ["+JSON.stringify(d)+"].  Please separate it out to the ")+("`to."+l+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Mg(n){return n.filter((r,l)=>l===0||r.route.path&&r.route.path.length>0)}function nv(n,r,l,d){d===void 0&&(d=!1);let h;typeof n=="string"?h=qi(n):(h=dn({},n),ot(!h.pathname||!h.pathname.includes("?"),Db("?","pathname","search",h)),ot(!h.pathname||!h.pathname.includes("#"),Db("#","pathname","hash",h)),ot(!h.search||!h.search.includes("#"),Db("#","search","hash",h)));let p=n===""||h.pathname==="",k=p?"/":h.pathname,b;if(d||k==null)b=l;else{let x=r.length-1;if(k.startsWith("..")){let _=k.split("/");for(;_[0]==="..";)_.shift(),x-=1;h.pathname=_.join("/")}b=x>=0?r[x]:"/"}let g=vV(h,b),v=k&&k!=="/"&&k.endsWith("/"),A=(p||k===".")&&l.endsWith("/");return!g.pathname.endsWith("/")&&(v||A)&&(g.pathname+="/"),g}const ps=n=>n.join("/").replace(/\/\/+/g,"/"),yV=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),CV=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,AV=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;class ov{constructor(r,l,d,h){h===void 0&&(h=!1),this.status=r,this.statusText=l||"",this.internal=h,d instanceof Error?(this.data=d.toString(),this.error=d):this.data=d}}function dI(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}const uI=["post","put","patch","delete"],xV=new Set(uI),EV=["get",...uI],SV=new Set(EV),DV=new Set([301,302,303,307,308]),TV=new Set([307,308]),Tb={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},IV={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Du={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},hI=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,MV=n=>({hasErrorBoundary:!!n.hasErrorBoundary});function NV(n){const r=n.window?n.window:typeof window<"u"?window:void 0,l=typeof r<"u"&&typeof r.document<"u"&&typeof r.document.createElement<"u",d=!l;ot(n.routes.length>0,"You must provide a non-empty routes array to createRouter");let h;if(n.mapRouteProperties)h=n.mapRouteProperties;else if(n.detectErrorBoundary){let oe=n.detectErrorBoundary;h=ie=>({hasErrorBoundary:oe(ie)})}else h=MV;let p={},k=O0(n.routes,h,void 0,p),b,g=n.basename||"/",v=dn({v7_normalizeFormMethod:!1,v7_prependBasename:!1},n.future),A=null,x=new Set,_=null,C=null,M=null,T=n.hydrationData!=null,O=sd(k,n.history.location,g),P=null;if(O==null){let oe=Nr(404,{pathname:n.history.location.pathname}),{matches:ie,route:fe}=VS(k);O=ie,P={[fe.id]:oe}}let j=!O.some(oe=>oe.route.lazy)&&(!O.some(oe=>oe.route.loader)||n.hydrationData!=null),R,L={historyAction:n.history.action,location:n.history.location,matches:O,initialized:j,navigation:Tb,restoreScrollPosition:n.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:n.hydrationData&&n.hydrationData.loaderData||{},actionData:n.hydrationData&&n.hydrationData.actionData||null,errors:n.hydrationData&&n.hydrationData.errors||P,fetchers:new Map,blockers:new Map},q=On.Pop,ee=!1,G,V=!1,X=!1,Q=[],ae=[],pe=new Map,me=0,Pe=-1,De=new Map,ue=new Set,ze=new Map,ke=new Map,se=new Map,ce=!1;function xe(){return A=n.history.listen(oe=>{let{action:ie,location:fe,delta:_e}=oe;if(ce){ce=!1;return}Wl(se.size===0||_e!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let Te=Ut({currentLocation:L.location,nextLocation:fe,historyAction:ie});if(Te&&_e!=null){ce=!0,n.history.go(_e*-1),lt(Te,{state:"blocked",location:fe,proceed(){lt(Te,{state:"proceeding",proceed:void 0,reset:void 0,location:fe}),n.history.go(_e)},reset(){let Be=new Map(L.blockers);Be.set(Te,Du),te({blockers:Be})}});return}return Xe(ie,fe)}),L.initialized||Xe(On.Pop,L.location),R}function Ae(){A&&A(),x.clear(),G&&G.abort(),L.fetchers.forEach((oe,ie)=>hn(ie)),L.blockers.forEach((oe,ie)=>He(ie))}function Pt(oe){return x.add(oe),()=>x.delete(oe)}function te(oe){L=dn({},L,oe),x.forEach(ie=>ie(L))}function Jt(oe,ie){var fe,_e;let Te=L.actionData!=null&&L.navigation.formMethod!=null&&oi(L.navigation.formMethod)&&L.navigation.state==="loading"&&((fe=oe.state)==null?void 0:fe._isRedirect)!==!0,Be;ie.actionData?Object.keys(ie.actionData).length>0?Be=ie.actionData:Be=null:Te?Be=L.actionData:Be=null;let Le=ie.loaderData?FS(L.loaderData,ie.loaderData,ie.matches||[],ie.errors):L.loaderData,Oe=L.blockers;Oe.size>0&&(Oe=new Map(Oe),Oe.forEach((pt,fn)=>Oe.set(fn,Du)));let Ee=ee===!0||L.navigation.formMethod!=null&&oi(L.navigation.formMethod)&&((_e=oe.state)==null?void 0:_e._isRedirect)!==!0;b&&(k=b,b=void 0),V||q===On.Pop||(q===On.Push?n.history.push(oe,oe.state):q===On.Replace&&n.history.replace(oe,oe.state)),te(dn({},ie,{actionData:Be,loaderData:Le,historyAction:q,location:oe,initialized:!0,navigation:Tb,revalidation:"idle",restoreScrollPosition:mo(oe,ie.matches||L.matches),preventScrollReset:Ee,blockers:Oe})),q=On.Pop,ee=!1,V=!1,X=!1,Q=[],ae=[]}async function Ce(oe,ie){if(typeof oe=="number"){n.history.go(oe);return}let fe=L0(L.location,L.matches,g,v.v7_prependBasename,oe,ie==null?void 0:ie.fromRouteId,ie==null?void 0:ie.relative),{path:_e,submission:Te,error:Be}=PS(v.v7_normalizeFormMethod,!1,fe,ie),Le=L.location,Oe=kh(L.location,_e,ie&&ie.state);Oe=dn({},Oe,n.history.encodeLocation(Oe));let Ee=ie&&ie.replace!=null?ie.replace:void 0,pt=On.Push;Ee===!0?pt=On.Replace:Ee===!1||Te!=null&&oi(Te.formMethod)&&Te.formAction===L.location.pathname+L.location.search&&(pt=On.Replace);let fn=ie&&"preventScrollReset"in ie?ie.preventScrollReset===!0:void 0,ct=Ut({currentLocation:Le,nextLocation:Oe,historyAction:pt});if(ct){lt(ct,{state:"blocked",location:Oe,proceed(){lt(ct,{state:"proceeding",proceed:void 0,reset:void 0,location:Oe}),Ce(oe,ie)},reset(){let $t=new Map(L.blockers);$t.set(ct,Du),te({blockers:$t})}});return}return await Xe(pt,Oe,{submission:Te,pendingError:Be,preventScrollReset:fn,replace:ie&&ie.replace})}function Ne(){if(Vr(),te({revalidation:"loading"}),L.navigation.state!=="submitting"){if(L.navigation.state==="idle"){Xe(L.historyAction,L.location,{startUninterruptedRevalidation:!0});return}Xe(q||L.historyAction,L.navigation.location,{overrideNavigation:L.navigation})}}async function Xe(oe,ie,fe){G&&G.abort(),G=null,q=oe,V=(fe&&fe.startUninterruptedRevalidation)===!0,Oo(L.location,L.matches),ee=(fe&&fe.preventScrollReset)===!0;let _e=b||k,Te=fe&&fe.overrideNavigation,Be=sd(_e,ie,g);if(!Be){let $t=Nr(404,{pathname:ie.pathname}),{matches:sn,route:bt}=VS(_e);Kn(),Jt(ie,{matches:sn,loaderData:{},errors:{[bt.id]:$t}});return}if(L.initialized&&!X&&LV(L.location,ie)&&!(fe&&fe.submission&&oi(fe.submission.formMethod))){Jt(ie,{matches:Be});return}G=new AbortController;let Le=Iu(n.history,ie,G.signal,fe&&fe.submission),Oe,Ee;if(fe&&fe.pendingError)Ee={[ad(Be).route.id]:fe.pendingError};else if(fe&&fe.submission&&oi(fe.submission.formMethod)){let $t=await _t(Le,ie,fe.submission,Be,{replace:fe.replace});if($t.shortCircuited)return;Oe=$t.pendingActionData,Ee=$t.pendingActionError,Te=Vf(ie,fe.submission),Le=new Request(Le.url,{signal:Le.signal})}let{shortCircuited:pt,loaderData:fn,errors:ct}=await it(Le,ie,Be,Te,fe&&fe.submission,fe&&fe.fetcherSubmission,fe&&fe.replace,Oe,Ee);pt||(G=null,Jt(ie,dn({matches:Be},Oe?{actionData:Oe}:{},{loaderData:fn,errors:ct})))}async function _t(oe,ie,fe,_e,Te){Te===void 0&&(Te={}),Vr();let Be=UV(ie,fe);te({navigation:Be});let Le,Oe=z0(_e,ie);if(!Oe.route.action&&!Oe.route.lazy)Le={type:Dn.error,error:Nr(405,{method:oe.method,pathname:ie.pathname,routeId:Oe.route.id})};else if(Le=await Tu("action",oe,Oe,_e,p,h,g),oe.signal.aborted)return{shortCircuited:!0};if(md(Le)){let Ee;return Te&&Te.replace!=null?Ee=Te.replace:Ee=Le.location===L.location.pathname+L.location.search,await Gn(L,Le,{submission:fe,replace:Ee}),{shortCircuited:!0}}if(Yu(Le)){let Ee=ad(_e,Oe.route.id);return(Te&&Te.replace)!==!0&&(q=On.Push),{pendingActionData:{},pendingActionError:{[Ee.route.id]:Le.error}}}if(Bl(Le))throw Nr(400,{type:"defer-action"});return{pendingActionData:{[Oe.route.id]:Le.data}}}async function it(oe,ie,fe,_e,Te,Be,Le,Oe,Ee){let pt=_e||Vf(ie,Te),fn=Te||Be||$S(pt),ct=b||k,[$t,sn]=BS(n.history,L,fe,fn,ie,X,Q,ae,ze,ue,ct,g,Oe,Ee);if(Kn(tt=>!(fe&&fe.some(ao=>ao.route.id===tt))||$t&&$t.some(ao=>ao.route.id===tt)),Pe=++me,$t.length===0&&sn.length===0){let tt=St();return Jt(ie,dn({matches:fe,loaderData:{},errors:Ee||null},Oe?{actionData:Oe}:{},tt?{fetchers:new Map(L.fetchers)}:{})),{shortCircuited:!0}}if(!V){sn.forEach(ao=>{let Fn=L.fetchers.get(ao.key),dt=Mu(void 0,Fn?Fn.data:void 0);L.fetchers.set(ao.key,dt)});let tt=Oe||L.actionData;te(dn({navigation:pt},tt?Object.keys(tt).length===0?{actionData:null}:{actionData:tt}:{},sn.length>0?{fetchers:new Map(L.fetchers)}:{}))}sn.forEach(tt=>{pe.has(tt.key)&&go(tt.key),tt.controller&&pe.set(tt.key,tt.controller)});let bt=()=>sn.forEach(tt=>go(tt.key));G&&G.signal.addEventListener("abort",bt);let{results:Lo,loaderResults:So,fetcherResults:Yn}=await so(L.matches,fe,$t,sn,oe);if(oe.signal.aborted)return{shortCircuited:!0};G&&G.signal.removeEventListener("abort",bt),sn.forEach(tt=>pe.delete(tt.key));let Qn=US(Lo);if(Qn){if(Qn.idx>=$t.length){let tt=sn[Qn.idx-$t.length].key;ue.add(tt)}return await Gn(L,Qn.result,{replace:Le}),{shortCircuited:!0}}let{loaderData:Do,errors:fi}=zS(L,fe,$t,So,Ee,sn,Yn,ke);ke.forEach((tt,ao)=>{tt.subscribe(Fn=>{(Fn||tt.done)&&ke.delete(ao)})});let Ur=St(),Gi=Xt(Pe),zn=Ur||Gi||sn.length>0;return dn({loaderData:Do,errors:fi},zn?{fetchers:new Map(L.fetchers)}:{})}function xt(oe){return L.fetchers.get(oe)||IV}function In(oe,ie,fe,_e){if(d)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");pe.has(oe)&&go(oe);let Te=b||k,Be=L0(L.location,L.matches,g,v.v7_prependBasename,fe,ie,_e==null?void 0:_e.relative),Le=sd(Te,Be,g);if(!Le){yt(oe,ie,Nr(404,{pathname:Be}));return}let{path:Oe,submission:Ee,error:pt}=PS(v.v7_normalizeFormMethod,!0,Be,_e);if(pt){yt(oe,ie,pt);return}let fn=z0(Le,Oe);if(ee=(_e&&_e.preventScrollReset)===!0,Ee&&oi(Ee.formMethod)){Bo(oe,ie,Oe,fn,Le,Ee);return}ze.set(oe,{routeId:ie,path:Oe}),Ye(oe,ie,Oe,fn,Le,Ee)}async function Bo(oe,ie,fe,_e,Te,Be){if(Vr(),ze.delete(oe),!_e.route.action&&!_e.route.lazy){let en=Nr(405,{method:Be.formMethod,pathname:fe,routeId:ie});yt(oe,ie,en);return}let Le=L.fetchers.get(oe),Oe=HV(Be,Le);L.fetchers.set(oe,Oe),te({fetchers:new Map(L.fetchers)});let Ee=new AbortController,pt=Iu(n.history,fe,Ee.signal,Be);pe.set(oe,Ee);let fn=me,ct=await Tu("action",pt,_e,Te,p,h,g);if(pt.signal.aborted){pe.get(oe)===Ee&&pe.delete(oe);return}if(md(ct))if(pe.delete(oe),Pe>fn){let en=Gc(void 0);L.fetchers.set(oe,en),te({fetchers:new Map(L.fetchers)});return}else{ue.add(oe);let en=Mu(Be);return L.fetchers.set(oe,en),te({fetchers:new Map(L.fetchers)}),Gn(L,ct,{submission:Be,isFetchActionRedirect:!0})}if(Yu(ct)){yt(oe,ie,ct.error);return}if(Bl(ct))throw Nr(400,{type:"defer-action"});let $t=L.navigation.location||L.location,sn=Iu(n.history,$t,Ee.signal),bt=b||k,Lo=L.navigation.state!=="idle"?sd(bt,L.navigation.location,g):L.matches;ot(Lo,"Didn't find any matches after fetcher action");let So=++me;De.set(oe,So);let Yn=Mu(Be,ct.data);L.fetchers.set(oe,Yn);let[Qn,Do]=BS(n.history,L,Lo,Be,$t,X,Q,ae,ze,ue,bt,g,{[_e.route.id]:ct.data},void 0);Do.filter(en=>en.key!==oe).forEach(en=>{let Zn=en.key,Hr=L.fetchers.get(Zn),_s=Mu(void 0,Hr?Hr.data:void 0);L.fetchers.set(Zn,_s),pe.has(Zn)&&go(Zn),en.controller&&pe.set(Zn,en.controller)}),te({fetchers:new Map(L.fetchers)});let fi=()=>Do.forEach(en=>go(en.key));Ee.signal.addEventListener("abort",fi);let{results:Ur,loaderResults:Gi,fetcherResults:zn}=await so(L.matches,Lo,Qn,Do,sn);if(Ee.signal.aborted)return;Ee.signal.removeEventListener("abort",fi),De.delete(oe),pe.delete(oe),Do.forEach(en=>pe.delete(en.key));let tt=US(Ur);if(tt){if(tt.idx>=Qn.length){let en=Do[tt.idx-Qn.length].key;ue.add(en)}return Gn(L,tt.result)}let{loaderData:ao,errors:Fn}=zS(L,L.matches,Qn,Gi,void 0,Do,zn,ke);if(L.fetchers.has(oe)){let en=Gc(ct.data);L.fetchers.set(oe,en)}let dt=Xt(So);L.navigation.state==="loading"&&So>Pe?(ot(q,"Expected pending action"),G&&G.abort(),Jt(L.navigation.location,{matches:Lo,loaderData:ao,errors:Fn,fetchers:new Map(L.fetchers)})):(te(dn({errors:Fn,loaderData:FS(L.loaderData,ao,Lo,Fn)},dt||Do.length>0?{fetchers:new Map(L.fetchers)}:{})),X=!1)}async function Ye(oe,ie,fe,_e,Te,Be){let Le=L.fetchers.get(oe),Oe=Mu(Be,Le?Le.data:void 0);L.fetchers.set(oe,Oe),te({fetchers:new Map(L.fetchers)});let Ee=new AbortController,pt=Iu(n.history,fe,Ee.signal);pe.set(oe,Ee);let fn=me,ct=await Tu("loader",pt,_e,Te,p,h,g);if(Bl(ct)&&(ct=await gI(ct,pt.signal,!0)||ct),pe.get(oe)===Ee&&pe.delete(oe),pt.signal.aborted)return;if(md(ct))if(Pe>fn){let sn=Gc(void 0);L.fetchers.set(oe,sn),te({fetchers:new Map(L.fetchers)});return}else{ue.add(oe),await Gn(L,ct);return}if(Yu(ct)){let sn=ad(L.matches,ie);L.fetchers.delete(oe),te({fetchers:new Map(L.fetchers),errors:{[sn.route.id]:ct.error}});return}ot(!Bl(ct),"Unhandled fetcher deferred data");let $t=Gc(ct.data);L.fetchers.set(oe,$t),te({fetchers:new Map(L.fetchers)})}async function Gn(oe,ie,fe){let{submission:_e,replace:Te,isFetchActionRedirect:Be}=fe===void 0?{}:fe;ie.revalidate&&(X=!0);let Le=kh(oe.location,ie.location,dn({_isRedirect:!0},Be?{_isFetchActionRedirect:!0}:{}));if(ot(Le,"Expected a location on the redirect navigation"),l){let pt=!1;if(ie.reloadDocument)pt=!0;else if(hI.test(ie.location)){const fn=n.history.createURL(ie.location);pt=fn.origin!==r.location.origin||Pd(fn.pathname,g)==null}if(pt){Te?r.location.replace(ie.location):r.location.assign(ie.location);return}}G=null;let Oe=Te===!0?On.Replace:On.Push,Ee=_e||$S(oe.navigation);if(TV.has(ie.status)&&Ee&&oi(Ee.formMethod))await Xe(Oe,Le,{submission:dn({},Ee,{formAction:ie.location}),preventScrollReset:ee});else if(Be)await Xe(Oe,Le,{overrideNavigation:Vf(Le),fetcherSubmission:Ee,preventScrollReset:ee});else{let pt=Vf(Le,Ee);await Xe(Oe,Le,{overrideNavigation:pt,preventScrollReset:ee})}}async function so(oe,ie,fe,_e,Te){let Be=await Promise.all([...fe.map(Ee=>Tu("loader",Te,Ee,ie,p,h,g)),..._e.map(Ee=>Ee.matches&&Ee.match&&Ee.controller?Tu("loader",Iu(n.history,Ee.path,Ee.controller.signal),Ee.match,Ee.matches,p,h,g):{type:Dn.error,error:Nr(404,{pathname:Ee.path})})]),Le=Be.slice(0,fe.length),Oe=Be.slice(fe.length);return await Promise.all([HS(oe,fe,Le,Le.map(()=>Te.signal),!1,L.loaderData),HS(oe,_e.map(Ee=>Ee.match),Oe,_e.map(Ee=>Ee.controller?Ee.controller.signal:null),!0)]),{results:Be,loaderResults:Le,fetcherResults:Oe}}function Vr(){X=!0,Q.push(...Kn()),ze.forEach((oe,ie)=>{pe.has(ie)&&(ae.push(ie),go(ie))})}function yt(oe,ie,fe){let _e=ad(L.matches,ie);hn(oe),te({errors:{[_e.route.id]:fe},fetchers:new Map(L.fetchers)})}function hn(oe){let ie=L.fetchers.get(oe);pe.has(oe)&&!(ie&&ie.state==="loading"&&De.has(oe))&&go(oe),ze.delete(oe),De.delete(oe),ue.delete(oe),L.fetchers.delete(oe)}function go(oe){let ie=pe.get(oe);ot(ie,"Expected fetch controller: "+oe),ie.abort(),pe.delete(oe)}function rn(oe){for(let ie of oe){let fe=xt(ie),_e=Gc(fe.data);L.fetchers.set(ie,_e)}}function St(){let oe=[],ie=!1;for(let fe of ue){let _e=L.fetchers.get(fe);ot(_e,"Expected fetcher: "+fe),_e.state==="loading"&&(ue.delete(fe),oe.push(fe),ie=!0)}return rn(oe),ie}function Xt(oe){let ie=[];for(let[fe,_e]of De)if(_e<oe){let Te=L.fetchers.get(fe);ot(Te,"Expected fetcher: "+fe),Te.state==="loading"&&(go(fe),De.delete(fe),ie.push(fe))}return rn(ie),ie.length>0}function kr(oe,ie){let fe=L.blockers.get(oe)||Du;return se.get(oe)!==ie&&se.set(oe,ie),fe}function He(oe){L.blockers.delete(oe),se.delete(oe)}function lt(oe,ie){let fe=L.blockers.get(oe)||Du;ot(fe.state==="unblocked"&&ie.state==="blocked"||fe.state==="blocked"&&ie.state==="blocked"||fe.state==="blocked"&&ie.state==="proceeding"||fe.state==="blocked"&&ie.state==="unblocked"||fe.state==="proceeding"&&ie.state==="unblocked","Invalid blocker state transition: "+fe.state+" -> "+ie.state);let _e=new Map(L.blockers);_e.set(oe,ie),te({blockers:_e})}function Ut(oe){let{currentLocation:ie,nextLocation:fe,historyAction:_e}=oe;if(se.size===0)return;se.size>1&&Wl(!1,"A router only supports one blocker at a time");let Te=Array.from(se.entries()),[Be,Le]=Te[Te.length-1],Oe=L.blockers.get(Be);if(!(Oe&&Oe.state==="proceeding")&&Le({currentLocation:ie,nextLocation:fe,historyAction:_e}))return Be}function Kn(oe){let ie=[];return ke.forEach((fe,_e)=>{(!oe||oe(_e))&&(fe.cancel(),ie.push(_e),ke.delete(_e))}),ie}function Ct(oe,ie,fe){if(_=oe,M=ie,C=fe||null,!T&&L.navigation===Tb){T=!0;let _e=mo(L.location,L.matches);_e!=null&&te({restoreScrollPosition:_e})}return()=>{_=null,M=null,C=null}}function Ht(oe,ie){return C&&C(oe,ie.map(_e=>VV(_e,L.loaderData)))||oe.key}function Oo(oe,ie){if(_&&M){let fe=Ht(oe,ie);_[fe]=M()}}function mo(oe,ie){if(_){let fe=Ht(oe,ie),_e=_[fe];if(typeof _e=="number")return _e}return null}function Cn(oe){p={},b=O0(oe,h,void 0,p)}return R={get basename(){return g},get state(){return L},get routes(){return k},initialize:xe,subscribe:Pt,enableScrollRestoration:Ct,navigate:Ce,fetch:In,revalidate:Ne,createHref:oe=>n.history.createHref(oe),encodeLocation:oe=>n.history.encodeLocation(oe),getFetcher:xt,deleteFetcher:hn,dispose:Ae,getBlocker:kr,deleteBlocker:He,_internalFetchControllers:pe,_internalActiveDeferreds:ke,_internalSetRoutes:Cn},R}function jV(n){return n!=null&&("formData"in n&&n.formData!=null||"body"in n&&n.body!==void 0)}function L0(n,r,l,d,h,p,k){let b,g;if(p!=null&&k!=="path"){b=[];for(let A of r)if(b.push(A),A.route.id===p){g=A;break}}else b=r,g=r[r.length-1];let v=nv(h||".",Mg(b).map(A=>A.pathnameBase),Pd(n.pathname,l)||n.pathname,k==="path");return h==null&&(v.search=n.search,v.hash=n.hash),(h==null||h===""||h===".")&&g&&g.route.index&&!rv(v.search)&&(v.search=v.search?v.search.replace(/^\?/,"?index&"):"?index"),d&&l!=="/"&&(v.pathname=v.pathname==="/"?l:ps([l,v.pathname])),ql(v)}function PS(n,r,l,d){if(!d||!jV(d))return{path:l};if(d.formMethod&&!FV(d.formMethod))return{path:l,error:Nr(405,{method:d.formMethod})};let h=()=>({path:l,error:Nr(400,{type:"invalid-body"})}),p=d.formMethod||"get",k=n?p.toUpperCase():p.toLowerCase(),b=pI(l);if(d.body!==void 0){if(d.formEncType==="text/plain"){if(!oi(k))return h();let _=typeof d.body=="string"?d.body:d.body instanceof FormData||d.body instanceof URLSearchParams?Array.from(d.body.entries()).reduce((C,M)=>{let[T,O]=M;return""+C+T+"="+O+`
`},""):String(d.body);return{path:l,submission:{formMethod:k,formAction:b,formEncType:d.formEncType,formData:void 0,json:void 0,text:_}}}else if(d.formEncType==="application/json"){if(!oi(k))return h();try{let _=typeof d.body=="string"?JSON.parse(d.body):d.body;return{path:l,submission:{formMethod:k,formAction:b,formEncType:d.formEncType,formData:void 0,json:_,text:void 0}}}catch{return h()}}}ot(typeof FormData=="function","FormData is not available in this environment");let g,v;if(d.formData)g=R0(d.formData),v=d.formData;else if(d.body instanceof FormData)g=R0(d.body),v=d.body;else if(d.body instanceof URLSearchParams)g=d.body,v=RS(g);else if(d.body==null)g=new URLSearchParams,v=new FormData;else try{g=new URLSearchParams(d.body),v=RS(g)}catch{return h()}let A={formMethod:k,formAction:b,formEncType:d&&d.formEncType||"application/x-www-form-urlencoded",formData:v,json:void 0,text:void 0};if(oi(A.formMethod))return{path:l,submission:A};let x=qi(l);return r&&x.search&&rv(x.search)&&g.append("index",""),x.search="?"+g,{path:ql(x),submission:A}}function PV(n,r){let l=n;if(r){let d=n.findIndex(h=>h.route.id===r);d>=0&&(l=n.slice(0,d))}return l}function BS(n,r,l,d,h,p,k,b,g,v,A,x,_,C){let M=C?Object.values(C)[0]:_?Object.values(_)[0]:void 0,T=n.createURL(r.location),O=n.createURL(h),P=C?Object.keys(C)[0]:void 0,R=PV(l,P).filter((q,ee)=>{if(q.route.lazy)return!0;if(q.route.loader==null)return!1;if(BV(r.loaderData,r.matches[ee],q)||k.some(X=>X===q.route.id))return!0;let G=r.matches[ee],V=q;return OS(q,dn({currentUrl:T,currentParams:G.params,nextUrl:O,nextParams:V.params},d,{actionResult:M,defaultShouldRevalidate:p||T.pathname+T.search===O.pathname+O.search||T.search!==O.search||fI(G,V)}))}),L=[];return g.forEach((q,ee)=>{if(!l.some(ae=>ae.route.id===q.routeId))return;let G=sd(A,q.path,x);if(!G){L.push({key:ee,routeId:q.routeId,path:q.path,matches:null,match:null,controller:null});return}let V=r.fetchers.get(ee),X=z0(G,q.path),Q=!1;v.has(ee)?Q=!1:b.includes(ee)?Q=!0:V&&V.state!=="idle"&&V.data===void 0?Q=p:Q=OS(X,dn({currentUrl:T,currentParams:r.matches[r.matches.length-1].params,nextUrl:O,nextParams:l[l.length-1].params},d,{actionResult:M,defaultShouldRevalidate:p})),Q&&L.push({key:ee,routeId:q.routeId,path:q.path,matches:G,match:X,controller:new AbortController})}),[R,L]}function BV(n,r,l){let d=!r||l.route.id!==r.route.id,h=n[l.route.id]===void 0;return d||h}function fI(n,r){let l=n.route.path;return n.pathname!==r.pathname||l!=null&&l.endsWith("*")&&n.params["*"]!==r.params["*"]}function OS(n,r){if(n.route.shouldRevalidate){let l=n.route.shouldRevalidate(r);if(typeof l=="boolean")return l}return r.defaultShouldRevalidate}async function LS(n,r,l){if(!n.lazy)return;let d=await n.lazy();if(!n.lazy)return;let h=l[n.id];ot(h,"No route found in manifest");let p={};for(let k in d){let g=h[k]!==void 0&&k!=="hasErrorBoundary";Wl(!g,'Route "'+h.id+'" has a static property "'+k+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+k+'" will be ignored.')),!g&&!rV.has(k)&&(p[k]=d[k])}Object.assign(h,p),Object.assign(h,dn({},r(h),{lazy:void 0}))}async function Tu(n,r,l,d,h,p,k,b){b===void 0&&(b={});let g,v,A,x=M=>{let T,O=new Promise((P,j)=>T=j);return A=()=>T(),r.signal.addEventListener("abort",A),Promise.race([M({request:r,params:l.params,context:b.requestContext}),O])};try{let M=l.route[n];if(l.route.lazy)if(M)v=(await Promise.all([x(M),LS(l.route,p,h)]))[0];else if(await LS(l.route,p,h),M=l.route[n],M)v=await x(M);else if(n==="action"){let T=new URL(r.url),O=T.pathname+T.search;throw Nr(405,{method:r.method,pathname:O,routeId:l.route.id})}else return{type:Dn.data,data:void 0};else if(M)v=await x(M);else{let T=new URL(r.url),O=T.pathname+T.search;throw Nr(404,{pathname:O})}ot(v!==void 0,"You defined "+(n==="action"?"an action":"a loader")+" for route "+('"'+l.route.id+"\" but didn't return anything from your `"+n+"` ")+"function. Please return a value or `null`.")}catch(M){g=Dn.error,v=M}finally{A&&r.signal.removeEventListener("abort",A)}if(zV(v)){let M=v.status;if(DV.has(M)){let P=v.headers.get("Location");if(ot(P,"Redirects returned/thrown from loaders/actions must have a Location header"),!hI.test(P))P=L0(new URL(r.url),d.slice(0,d.indexOf(l)+1),k,!0,P);else if(!b.isStaticRequest){let j=new URL(r.url),R=P.startsWith("//")?new URL(j.protocol+P):new URL(P),L=Pd(R.pathname,k)!=null;R.origin===j.origin&&L&&(P=R.pathname+R.search+R.hash)}if(b.isStaticRequest)throw v.headers.set("Location",P),v;return{type:Dn.redirect,status:M,location:P,revalidate:v.headers.get("X-Remix-Revalidate")!==null,reloadDocument:v.headers.get("X-Remix-Reload-Document")!==null}}if(b.isRouteRequest)throw{type:g===Dn.error?Dn.error:Dn.data,response:v};let T,O=v.headers.get("Content-Type");return O&&/\bapplication\/json\b/.test(O)?T=await v.json():T=await v.text(),g===Dn.error?{type:g,error:new ov(M,v.statusText,T),headers:v.headers}:{type:Dn.data,data:T,statusCode:v.status,headers:v.headers}}if(g===Dn.error)return{type:g,error:v};if(RV(v)){var _,C;return{type:Dn.deferred,deferredData:v,statusCode:(_=v.init)==null?void 0:_.status,headers:((C=v.init)==null?void 0:C.headers)&&new Headers(v.init.headers)}}return{type:Dn.data,data:v}}function Iu(n,r,l,d){let h=n.createURL(pI(r)).toString(),p={signal:l};if(d&&oi(d.formMethod)){let{formMethod:k,formEncType:b}=d;p.method=k.toUpperCase(),b==="application/json"?(p.headers=new Headers({"Content-Type":b}),p.body=JSON.stringify(d.json)):b==="text/plain"?p.body=d.text:b==="application/x-www-form-urlencoded"&&d.formData?p.body=R0(d.formData):p.body=d.formData}return new Request(h,p)}function R0(n){let r=new URLSearchParams;for(let[l,d]of n.entries())r.append(l,typeof d=="string"?d:d.name);return r}function RS(n){let r=new FormData;for(let[l,d]of n.entries())r.append(l,d);return r}function OV(n,r,l,d,h){let p={},k=null,b,g=!1,v={};return l.forEach((A,x)=>{let _=r[x].route.id;if(ot(!md(A),"Cannot handle redirect results in processLoaderData"),Yu(A)){let C=ad(n,_),M=A.error;d&&(M=Object.values(d)[0],d=void 0),k=k||{},k[C.route.id]==null&&(k[C.route.id]=M),p[_]=void 0,g||(g=!0,b=dI(A.error)?A.error.status:500),A.headers&&(v[_]=A.headers)}else Bl(A)?(h.set(_,A.deferredData),p[_]=A.deferredData.data):p[_]=A.data,A.statusCode!=null&&A.statusCode!==200&&!g&&(b=A.statusCode),A.headers&&(v[_]=A.headers)}),d&&(k=d,p[Object.keys(d)[0]]=void 0),{loaderData:p,errors:k,statusCode:b||200,loaderHeaders:v}}function zS(n,r,l,d,h,p,k,b){let{loaderData:g,errors:v}=OV(r,l,d,h,b);for(let A=0;A<p.length;A++){let{key:x,match:_,controller:C}=p[A];ot(k!==void 0&&k[A]!==void 0,"Did not find corresponding fetcher result");let M=k[A];if(!(C&&C.signal.aborted))if(Yu(M)){let T=ad(n.matches,_==null?void 0:_.route.id);v&&v[T.route.id]||(v=dn({},v,{[T.route.id]:M.error})),n.fetchers.delete(x)}else if(md(M))ot(!1,"Unhandled fetcher revalidation redirect");else if(Bl(M))ot(!1,"Unhandled fetcher deferred data");else{let T=Gc(M.data);n.fetchers.set(x,T)}}return{loaderData:g,errors:v}}function FS(n,r,l,d){let h=dn({},r);for(let p of l){let k=p.route.id;if(r.hasOwnProperty(k)?r[k]!==void 0&&(h[k]=r[k]):n[k]!==void 0&&p.route.loader&&(h[k]=n[k]),d&&d.hasOwnProperty(k))break}return h}function ad(n,r){return(r?n.slice(0,n.findIndex(d=>d.route.id===r)+1):[...n]).reverse().find(d=>d.route.hasErrorBoundary===!0)||n[0]}function VS(n){let r=n.find(l=>l.index||!l.path||l.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:r}],route:r}}function Nr(n,r){let{pathname:l,routeId:d,method:h,type:p}=r===void 0?{}:r,k="Unknown Server Error",b="Unknown @remix-run/router error";return n===400?(k="Bad Request",h&&l&&d?b="You made a "+h+' request to "'+l+'" but '+('did not provide a `loader` for route "'+d+'", ')+"so there is no way to handle the request.":p==="defer-action"?b="defer() is not supported in actions":p==="invalid-body"&&(b="Unable to encode submission body")):n===403?(k="Forbidden",b='Route "'+d+'" does not match URL "'+l+'"'):n===404?(k="Not Found",b='No route matches URL "'+l+'"'):n===405&&(k="Method Not Allowed",h&&l&&d?b="You made a "+h.toUpperCase()+' request to "'+l+'" but '+('did not provide an `action` for route "'+d+'", ')+"so there is no way to handle the request.":h&&(b='Invalid request method "'+h.toUpperCase()+'"')),new ov(n||500,k,new Error(b),!0)}function US(n){for(let r=n.length-1;r>=0;r--){let l=n[r];if(md(l))return{result:l,idx:r}}}function pI(n){let r=typeof n=="string"?qi(n):n;return ql(dn({},r,{hash:""}))}function LV(n,r){return n.pathname!==r.pathname||n.search!==r.search?!1:n.hash===""?r.hash!=="":n.hash===r.hash?!0:r.hash!==""}function Bl(n){return n.type===Dn.deferred}function Yu(n){return n.type===Dn.error}function md(n){return(n&&n.type)===Dn.redirect}function RV(n){let r=n;return r&&typeof r=="object"&&typeof r.data=="object"&&typeof r.subscribe=="function"&&typeof r.cancel=="function"&&typeof r.resolveData=="function"}function zV(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.headers=="object"&&typeof n.body<"u"}function FV(n){return SV.has(n.toLowerCase())}function oi(n){return xV.has(n.toLowerCase())}async function HS(n,r,l,d,h,p){for(let k=0;k<l.length;k++){let b=l[k],g=r[k];if(!g)continue;let v=n.find(x=>x.route.id===g.route.id),A=v!=null&&!fI(v,g)&&(p&&p[g.route.id])!==void 0;if(Bl(b)&&(h||A)){let x=d[k];ot(x,"Expected an AbortSignal for revalidating fetcher deferred result"),await gI(b,x,h).then(_=>{_&&(l[k]=_||l[k])})}}}async function gI(n,r,l){if(l===void 0&&(l=!1),!await n.deferredData.resolveData(r)){if(l)try{return{type:Dn.data,data:n.deferredData.unwrappedData}}catch(h){return{type:Dn.error,error:h}}return{type:Dn.data,data:n.deferredData.data}}}function rv(n){return new URLSearchParams(n).getAll("index").some(r=>r==="")}function VV(n,r){let{route:l,pathname:d,params:h}=n;return{id:l.id,pathname:d,params:h,data:r[l.id],handle:l.handle}}function z0(n,r){let l=typeof r=="string"?qi(r).search:r.search;if(n[n.length-1].route.index&&rv(l||""))return n[n.length-1];let d=Mg(n);return d[d.length-1]}function $S(n){let{formMethod:r,formAction:l,formEncType:d,text:h,formData:p,json:k}=n;if(!(!r||!l||!d)){if(h!=null)return{formMethod:r,formAction:l,formEncType:d,formData:void 0,json:void 0,text:h};if(p!=null)return{formMethod:r,formAction:l,formEncType:d,formData:p,json:void 0,text:void 0};if(k!==void 0)return{formMethod:r,formAction:l,formEncType:d,formData:void 0,json:k,text:void 0}}}function Vf(n,r){return r?{state:"loading",location:n,formMethod:r.formMethod,formAction:r.formAction,formEncType:r.formEncType,formData:r.formData,json:r.json,text:r.text}:{state:"loading",location:n,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function UV(n,r){return{state:"submitting",location:n,formMethod:r.formMethod,formAction:r.formAction,formEncType:r.formEncType,formData:r.formData,json:r.json,text:r.text}}function Mu(n,r){return n?{state:"loading",formMethod:n.formMethod,formAction:n.formAction,formEncType:n.formEncType,formData:n.formData,json:n.json,text:n.text,data:r," _hasFetcherDoneAnything ":!0}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:r," _hasFetcherDoneAnything ":!0}}function HV(n,r){return{state:"submitting",formMethod:n.formMethod,formAction:n.formAction,formEncType:n.formEncType,formData:n.formData,json:n.json,text:n.text,data:r?r.data:void 0," _hasFetcherDoneAnything ":!0}}function Gc(n){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:n," _hasFetcherDoneAnything ":!0}}/**
 * React Router v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Rp(){return Rp=Object.assign?Object.assign.bind():function(n){for(var r=1;r<arguments.length;r++){var l=arguments[r];for(var d in l)Object.prototype.hasOwnProperty.call(l,d)&&(n[d]=l[d])}return n},Rp.apply(this,arguments)}const Ng=J.createContext(null),iv=J.createContext(null),Yl=J.createContext(null),jg=J.createContext(null),Ta=J.createContext({outlet:null,matches:[],isDataRoute:!1}),mI=J.createContext(null);function $V(n,r){let{relative:l}=r===void 0?{}:r;Sh()||ot(!1);let{basename:d,navigator:h}=J.useContext(Yl),{hash:p,pathname:k,search:b}=sv(n,{relative:l}),g=k;return d!=="/"&&(g=k==="/"?d:ps([d,k])),h.createHref({pathname:g,search:b,hash:p})}function Sh(){return J.useContext(jg)!=null}function Dh(){return Sh()||ot(!1),J.useContext(jg).location}function kI(n){J.useContext(Yl).static||J.useLayoutEffect(n)}function Zo(){let{isDataRoute:n}=J.useContext(Ta);return n?nU():WV()}function WV(){Sh()||ot(!1);let n=J.useContext(Ng),{basename:r,navigator:l}=J.useContext(Yl),{matches:d}=J.useContext(Ta),{pathname:h}=Dh(),p=JSON.stringify(Mg(d).map(g=>g.pathnameBase)),k=J.useRef(!1);return kI(()=>{k.current=!0}),J.useCallback(function(g,v){if(v===void 0&&(v={}),!k.current)return;if(typeof g=="number"){l.go(g);return}let A=nv(g,JSON.parse(p),h,v.relative==="path");n==null&&r!=="/"&&(A.pathname=A.pathname==="/"?r:ps([r,A.pathname])),(v.replace?l.replace:l.push)(A,v.state,v)},[r,l,p,h,n])}function Ql(){let{matches:n}=J.useContext(Ta),r=n[n.length-1];return r?r.params:{}}function sv(n,r){let{relative:l}=r===void 0?{}:r,{matches:d}=J.useContext(Ta),{pathname:h}=Dh(),p=JSON.stringify(Mg(d).map(k=>k.pathnameBase));return J.useMemo(()=>nv(n,JSON.parse(p),h,l==="path"),[n,p,h,l])}function qV(n,r,l){Sh()||ot(!1);let{navigator:d}=J.useContext(Yl),{matches:h}=J.useContext(Ta),p=h[h.length-1],k=p?p.params:{};p&&p.pathname;let b=p?p.pathnameBase:"/";p&&p.route;let g=Dh(),v;if(r){var A;let T=typeof r=="string"?qi(r):r;b==="/"||(A=T.pathname)!=null&&A.startsWith(b)||ot(!1),v=T}else v=g;let x=v.pathname||"/",_=b==="/"?x:x.slice(b.length)||"/",C=sd(n,{pathname:_}),M=ZV(C&&C.map(T=>Object.assign({},T,{params:Object.assign({},k,T.params),pathname:ps([b,d.encodeLocation?d.encodeLocation(T.pathname).pathname:T.pathname]),pathnameBase:T.pathnameBase==="/"?b:ps([b,d.encodeLocation?d.encodeLocation(T.pathnameBase).pathname:T.pathnameBase])})),h,l);return r&&M?J.createElement(jg.Provider,{value:{location:Rp({pathname:"/",search:"",hash:"",state:null,key:"default"},v),navigationType:On.Pop}},M):M}function GV(){let n=tU(),r=dI(n)?n.status+" "+n.statusText:n instanceof Error?n.message:JSON.stringify(n),l=n instanceof Error?n.stack:null,h={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},p=null;return J.createElement(J.Fragment,null,J.createElement("h2",null,"Unexpected Application Error!"),J.createElement("h3",{style:{fontStyle:"italic"}},r),l?J.createElement("pre",{style:h},l):null,p)}const KV=J.createElement(GV,null);class YV extends J.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,l){return l.location!==r.location||l.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error||l.error,location:l.location,revalidation:r.revalidation||l.revalidation}}componentDidCatch(r,l){console.error("React Router caught the following error during render",r,l)}render(){return this.state.error?J.createElement(Ta.Provider,{value:this.props.routeContext},J.createElement(mI.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function QV(n){let{routeContext:r,match:l,children:d}=n,h=J.useContext(Ng);return h&&h.static&&h.staticContext&&(l.route.errorElement||l.route.ErrorBoundary)&&(h.staticContext._deepestRenderedBoundaryId=l.route.id),J.createElement(Ta.Provider,{value:r},d)}function ZV(n,r,l){var d;if(r===void 0&&(r=[]),l===void 0&&(l=null),n==null){var h;if((h=l)!=null&&h.errors)n=l.matches;else return null}let p=n,k=(d=l)==null?void 0:d.errors;if(k!=null){let b=p.findIndex(g=>g.route.id&&(k==null?void 0:k[g.route.id]));b>=0||ot(!1),p=p.slice(0,Math.min(p.length,b+1))}return p.reduceRight((b,g,v)=>{let A=g.route.id?k==null?void 0:k[g.route.id]:null,x=null;l&&(x=g.route.errorElement||KV);let _=r.concat(p.slice(0,v+1)),C=()=>{let M;return A?M=x:g.route.Component?M=J.createElement(g.route.Component,null):g.route.element?M=g.route.element:M=b,J.createElement(QV,{match:g,routeContext:{outlet:b,matches:_,isDataRoute:l!=null},children:M})};return l&&(g.route.ErrorBoundary||g.route.errorElement||v===0)?J.createElement(YV,{location:l.location,revalidation:l.revalidation,component:x,error:A,children:C(),routeContext:{outlet:null,matches:_,isDataRoute:!0}}):C()},null)}var bI=function(n){return n.UseBlocker="useBlocker",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n}(bI||{}),zp=function(n){return n.UseBlocker="useBlocker",n.UseLoaderData="useLoaderData",n.UseActionData="useActionData",n.UseRouteError="useRouteError",n.UseNavigation="useNavigation",n.UseRouteLoaderData="useRouteLoaderData",n.UseMatches="useMatches",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n.UseRouteId="useRouteId",n}(zp||{});function JV(n){let r=J.useContext(Ng);return r||ot(!1),r}function XV(n){let r=J.useContext(iv);return r||ot(!1),r}function eU(n){let r=J.useContext(Ta);return r||ot(!1),r}function wI(n){let r=eU(),l=r.matches[r.matches.length-1];return l.route.id||ot(!1),l.route.id}function tU(){var n;let r=J.useContext(mI),l=XV(zp.UseRouteError),d=wI(zp.UseRouteError);return r||((n=l.errors)==null?void 0:n[d])}function nU(){let{router:n}=JV(bI.UseNavigateStable),r=wI(zp.UseNavigateStable),l=J.useRef(!1);return kI(()=>{l.current=!0}),J.useCallback(function(h,p){p===void 0&&(p={}),l.current&&(typeof h=="number"?n.navigate(h):n.navigate(h,Rp({fromRouteId:r},p)))},[n,r])}const oU="startTransition",WS=MR[oU];function rU(n){let{fallbackElement:r,router:l,future:d}=n,[h,p]=J.useState(l.state),{v7_startTransition:k}=d||{},b=J.useCallback(x=>{k&&WS?WS(()=>p(x)):p(x)},[p,k]);J.useLayoutEffect(()=>l.subscribe(b),[l,b]);let g=J.useMemo(()=>({createHref:l.createHref,encodeLocation:l.encodeLocation,go:x=>l.navigate(x),push:(x,_,C)=>l.navigate(x,{state:_,preventScrollReset:C==null?void 0:C.preventScrollReset}),replace:(x,_,C)=>l.navigate(x,{replace:!0,state:_,preventScrollReset:C==null?void 0:C.preventScrollReset})}),[l]),v=l.basename||"/",A=J.useMemo(()=>({router:l,navigator:g,static:!1,basename:v}),[l,g,v]);return J.createElement(J.Fragment,null,J.createElement(Ng.Provider,{value:A},J.createElement(iv.Provider,{value:h},J.createElement(sU,{basename:v,location:h.location,navigationType:h.historyAction,navigator:g},h.initialized?J.createElement(iU,{routes:l.routes,state:h}):r))),null)}function iU(n){let{routes:r,state:l}=n;return qV(r,void 0,l)}function sU(n){let{basename:r="/",children:l=null,location:d,navigationType:h=On.Pop,navigator:p,static:k=!1}=n;Sh()&&ot(!1);let b=r.replace(/^\/*/,"/"),g=J.useMemo(()=>({basename:b,navigator:p,static:k}),[b,p,k]);typeof d=="string"&&(d=qi(d));let{pathname:v="/",search:A="",hash:x="",state:_=null,key:C="default"}=d,M=J.useMemo(()=>{let T=Pd(v,b);return T==null?null:{location:{pathname:T,search:A,hash:x,state:_,key:C},navigationType:h}},[b,v,A,x,_,C,h]);return M==null?null:J.createElement(Yl.Provider,{value:g},J.createElement(jg.Provider,{children:l,value:M}))}new Promise(()=>{});function aU(n){let r={hasErrorBoundary:n.ErrorBoundary!=null||n.errorElement!=null};return n.Component&&Object.assign(r,{element:J.createElement(n.Component),Component:void 0}),n.ErrorBoundary&&Object.assign(r,{errorElement:J.createElement(n.ErrorBoundary),ErrorBoundary:void 0}),r}/**
 * React Router DOM v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Dd(){return Dd=Object.assign?Object.assign.bind():function(n){for(var r=1;r<arguments.length;r++){var l=arguments[r];for(var d in l)Object.prototype.hasOwnProperty.call(l,d)&&(n[d]=l[d])}return n},Dd.apply(this,arguments)}function vI(n,r){if(n==null)return{};var l={},d=Object.keys(n),h,p;for(p=0;p<d.length;p++)h=d[p],!(r.indexOf(h)>=0)&&(l[h]=n[h]);return l}function lU(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function cU(n,r){return n.button===0&&(!r||r==="_self")&&!lU(n)}const dU=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],uU=["aria-current","caseSensitive","className","end","style","to","children"];function hU(n,r){return NV({basename:r==null?void 0:r.basename,future:Dd({},r==null?void 0:r.future,{v7_prependBasename:!0}),history:tV({window:r==null?void 0:r.window}),hydrationData:(r==null?void 0:r.hydrationData)||fU(),routes:n,mapRouteProperties:aU}).initialize()}function fU(){var n;let r=(n=window)==null?void 0:n.__staticRouterHydrationData;return r&&r.errors&&(r=Dd({},r,{errors:pU(r.errors)})),r}function pU(n){if(!n)return null;let r=Object.entries(n),l={};for(let[d,h]of r)if(h&&h.__type==="RouteErrorResponse")l[d]=new ov(h.status,h.statusText,h.data,h.internal===!0);else if(h&&h.__type==="Error"){if(h.__subType){let p=window[h.__subType];if(typeof p=="function")try{let k=new p(h.message);k.stack="",l[d]=k}catch{}}if(l[d]==null){let p=new Error(h.message);p.stack="",l[d]=p}}else l[d]=h;return l}const gU=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",mU=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ur=J.forwardRef(function(r,l){let{onClick:d,relative:h,reloadDocument:p,replace:k,state:b,target:g,to:v,preventScrollReset:A}=r,x=vI(r,dU),{basename:_}=J.useContext(Yl),C,M=!1;if(typeof v=="string"&&mU.test(v)&&(C=v,gU))try{let j=new URL(window.location.href),R=v.startsWith("//")?new URL(j.protocol+v):new URL(v),L=Pd(R.pathname,_);R.origin===j.origin&&L!=null?v=L+R.search+R.hash:M=!0}catch{}let T=$V(v,{relative:h}),O=kU(v,{replace:k,state:b,target:g,preventScrollReset:A,relative:h});function P(j){d&&d(j),j.defaultPrevented||O(j)}return J.createElement("a",Dd({},x,{href:C||T,onClick:M||p?d:P,ref:l,target:g}))}),El=J.forwardRef(function(r,l){let{"aria-current":d="page",caseSensitive:h=!1,className:p="",end:k=!1,style:b,to:g,children:v}=r,A=vI(r,uU),x=sv(g,{relative:A.relative}),_=Dh(),C=J.useContext(iv),{navigator:M}=J.useContext(Yl),T=M.encodeLocation?M.encodeLocation(x).pathname:x.pathname,O=_.pathname,P=C&&C.navigation&&C.navigation.location?C.navigation.location.pathname:null;h||(O=O.toLowerCase(),P=P?P.toLowerCase():null,T=T.toLowerCase());let j=O===T||!k&&O.startsWith(T)&&O.charAt(T.length)==="/",R=P!=null&&(P===T||!k&&P.startsWith(T)&&P.charAt(T.length)==="/"),L=j?d:void 0,q;typeof p=="function"?q=p({isActive:j,isPending:R}):q=[p,j?"active":null,R?"pending":null].filter(Boolean).join(" ");let ee=typeof b=="function"?b({isActive:j,isPending:R}):b;return J.createElement(ur,Dd({},A,{"aria-current":L,className:q,ref:l,style:ee,to:g}),typeof v=="function"?v({isActive:j,isPending:R}):v)});var qS;(function(n){n.UseScrollRestoration="useScrollRestoration",n.UseSubmit="useSubmit",n.UseSubmitFetcher="useSubmitFetcher",n.UseFetcher="useFetcher"})(qS||(qS={}));var GS;(function(n){n.UseFetchers="useFetchers",n.UseScrollRestoration="useScrollRestoration"})(GS||(GS={}));function kU(n,r){let{target:l,replace:d,state:h,preventScrollReset:p,relative:k}=r===void 0?{}:r,b=Zo(),g=Dh(),v=sv(n,{relative:k});return J.useCallback(A=>{if(cU(A,l)){A.preventDefault();let x=d!==void 0?d:ql(g)===ql(v);b(n,{replace:x,state:h,preventScrollReset:p,relative:k})}},[g,b,v,d,h,l,n,p,k])}const bU="modulepreload",wU=function(n){return"/agency_view/"+n},KS={},Je=function(r,l,d){if(!l||l.length===0)return r();const h=document.getElementsByTagName("link");return Promise.all(l.map(p=>{if(p=wU(p),p in KS)return;KS[p]=!0;const k=p.endsWith(".css"),b=k?'[rel="stylesheet"]':"";if(!!d)for(let A=h.length-1;A>=0;A--){const x=h[A];if(x.href===p&&(!k||x.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${p}"]${b}`))return;const v=document.createElement("link");if(v.rel=k?"stylesheet":bU,k||(v.as="script",v.crossOrigin=""),v.href=p,document.head.appendChild(v),k)return new Promise((A,x)=>{v.addEventListener("load",A),v.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${p}`)))})})).then(()=>r()).catch(p=>{const k=new Event("vite:preloadError",{cancelable:!0});if(k.payload=p,window.dispatchEvent(k),!k.defaultPrevented)throw p})};var _I={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},YS=cr.createContext&&cr.createContext(_I),wa=globalThis&&globalThis.__assign||function(){return wa=Object.assign||function(n){for(var r,l=1,d=arguments.length;l<d;l++){r=arguments[l];for(var h in r)Object.prototype.hasOwnProperty.call(r,h)&&(n[h]=r[h])}return n},wa.apply(this,arguments)},vU=globalThis&&globalThis.__rest||function(n,r){var l={};for(var d in n)Object.prototype.hasOwnProperty.call(n,d)&&r.indexOf(d)<0&&(l[d]=n[d]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var h=0,d=Object.getOwnPropertySymbols(n);h<d.length;h++)r.indexOf(d[h])<0&&Object.prototype.propertyIsEnumerable.call(n,d[h])&&(l[d[h]]=n[d[h]]);return l};function yI(n){return n&&n.map(function(r,l){return cr.createElement(r.tag,wa({key:l},r.attr),yI(r.child))})}function ui(n){return function(r){return cr.createElement(_U,wa({attr:wa({},n.attr)},r),yI(n.child))}}function _U(n){var r=function(l){var d=n.attr,h=n.size,p=n.title,k=vU(n,["attr","size","title"]),b=h||l.size||"1em",g;return l.className&&(g=l.className),n.className&&(g=(g?g+" ":"")+n.className),cr.createElement("svg",wa({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},l.attr,d,k,{className:g,style:wa(wa({color:n.color||l.color},l.style),n.style),height:b,width:b,xmlns:"http://www.w3.org/2000/svg"}),p&&cr.createElement("title",null,p),n.children)};return YS!==void 0?cr.createElement(YS.Consumer,null,function(l){return r(l)}):r(_I)}function Aa(n){return ui({tag:"svg",attr:{viewBox:"0 0 1024 1024",fill:"currentColor",fillRule:"evenodd"},child:[{tag:"path",attr:{d:"M799.855 166.312c.023.007.043.018.084.059l57.69 57.69c.041.041.052.06.059.084a.118.118 0 0 1 0 .069c-.007.023-.018.042-.059.083L569.926 512l287.703 287.703c.041.04.052.06.059.083a.118.118 0 0 1 0 .07c-.007.022-.018.042-.059.083l-57.69 57.69c-.041.041-.06.052-.084.059a.118.118 0 0 1-.069 0c-.023-.007-.042-.018-.083-.059L512 569.926 224.297 857.629c-.04.041-.06.052-.083.059a.118.118 0 0 1-.07 0c-.022-.007-.042-.018-.083-.059l-57.69-57.69c-.041-.041-.052-.06-.059-.084a.118.118 0 0 1 0-.069c.007-.023.018-.042.059-.083L454.073 512 166.371 224.297c-.041-.04-.052-.06-.059-.083a.118.118 0 0 1 0-.07c.007-.022.018-.042.059-.083l57.69-57.69c.041-.041.06-.052.084-.059a.118.118 0 0 1 .069 0c.023.007.042.018.083.059L512 454.073l287.703-287.702c.04-.041.06-.052.083-.059a.118.118 0 0 1 .07 0Z"}}]})(n)}function yU(n){return ui({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M272.9 512l265.4-339.1c4.1-5.2.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L186.8 492.3a31.99 31.99 0 0 0 0 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H532c6.7 0 10.4-7.7 6.3-12.9L272.9 512zm304 0l265.4-339.1c4.1-5.2.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L490.8 492.3a31.99 31.99 0 0 0 0 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H836c6.7 0 10.4-7.7 6.3-12.9L576.9 512z"}}]})(n)}function CU(n){return ui({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M533.2 492.3L277.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H188c-6.7 0-10.4 7.7-6.3 12.9L447.1 512 181.7 851.1A7.98 7.98 0 0 0 188 864h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5zm304 0L581.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H492c-6.7 0-10.4 7.7-6.3 12.9L751.1 512 485.7 851.1A7.98 7.98 0 0 0 492 864h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5z"}}]})(n)}function bh(n){return ui({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"}}]})(n)}const AU="_parentContainer_1gaaw_33",xU="_navegation_1gaaw_65",EU="_navegationApparButton_1gaaw_93",SU="_navbarLink_1gaaw_143",DU="_buttonLogin_1gaaw_181",TU="_buttonDashboard_1gaaw_219",Ri={parentContainer:AU,navegation:xU,navegationApparButton:EU,navbarLink:SU,buttonLogin:DU,buttonDashboard:TU};function IU(){const n=Eo(),r=Qe(g=>g.JWTVerify),l=Qe(g=>g.category),d=JSON.parse(localStorage.getItem("access")),[h,p]=J.useState(!1),[k,b]=J.useState(!1);return J.useEffect(()=>{d||(p(!1),localStorage.clear()),r.status||n(B0({token:d})),r.status==="fulfilled"&&d&&p(!0),r.status==="rejected"&&(localStorage.clear(),p(!1))},[r.status]),J.useEffect(()=>{(l.status===null||l.status==="rejected")&&setTimeout(()=>{Je(()=>import("./index-0da35582.js"),[]).then(g=>{n(g.axiosCategorys())})},4e3)},[l.status]),D.jsx("main",{children:D.jsxs("section",{className:Ri.parentContainer,children:[D.jsx("div",{children:D.jsx("h1",{children:" 🧩 IMPACT X 🧩 "})}),D.jsx("div",{children:D.jsx("h1",{onClick:g=>{b(!0)},className:Ri.navegationApparButton,children:D.jsx(bh,{})})}),D.jsxs("div",{style:{right:k?0:-300},className:Ri.navegation,children:[D.jsx("div",{children:D.jsx("p",{onClick:g=>{b(!1)},children:D.jsx(Aa,{})})}),D.jsxs("nav",{children:[D.jsx(El,{className:Ri.navbarLink,to:"/home",children:"INICIO"}),D.jsx(El,{className:Ri.navbarLink,to:"/services",children:"SERVICIOS"}),D.jsx(El,{className:Ri.navbarLink,to:"/about",children:"SOBRE NOSOTROS"}),D.jsx(El,{className:Ri.navbarLink,to:"/contact",children:"CONTACTOS"}),D.jsx(El,{className:Ri.navbarLink,to:"/blogs",children:"BLOG"}),h===!0?D.jsx(El,{className:Ri.buttonDashboard,to:"/dashboard",children:"DASHBOARD"}):h===!1?D.jsx("div",{children:D.jsx(El,{className:Ri.buttonLogin,to:"/access",children:"UNETE..."})}):!1]})]})]})})}function hi({children:n}){return D.jsxs("div",{children:[D.jsx(IU,{}),n]})}var CI={exports:{}};/*!
* sweetalert2 v11.7.32
* Released under the MIT License.
*/(function(n,r){(function(l,d){n.exports=d()})(ho,function(){function l(E,I){var z=h(E,I,"get");return p(E,z)}function d(E,I,z){var K=h(E,I,"set");return k(E,K,z),z}function h(E,I,z){if(!I.has(E))throw new TypeError("attempted to "+z+" private field on non-instance");return I.get(E)}function p(E,I){return I.get?I.get.call(E):I.value}function k(E,I,z){if(I.set)I.set.call(E,z);else{if(!I.writable)throw new TypeError("attempted to set read only private field");I.value=z}}function b(E,I){if(I.has(E))throw new TypeError("Cannot initialize the same private elements twice on an object")}function g(E,I,z){b(E,I),I.set(E,z)}const v=100,A={},x=()=>{A.previousActiveElement instanceof HTMLElement?(A.previousActiveElement.focus(),A.previousActiveElement=null):document.body&&document.body.focus()},_=E=>new Promise(I=>{if(!E)return I();const z=window.scrollX,K=window.scrollY;A.restoreFocusTimeout=setTimeout(()=>{x(),I()},v),window.scrollTo(z,K)}),C="swal2-",T=["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","default-outline","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error"].reduce((E,I)=>(E[I]=C+I,E),{}),P=["success","warning","info","question","error"].reduce((E,I)=>(E[I]=C+I,E),{}),j="SweetAlert2:",R=E=>E.charAt(0).toUpperCase()+E.slice(1),L=E=>{console.warn("".concat(j," ").concat(typeof E=="object"?E.join(" "):E))},q=E=>{console.error("".concat(j," ").concat(E))},ee=[],G=E=>{ee.includes(E)||(ee.push(E),L(E))},V=(E,I)=>{G('"'.concat(E,'" is deprecated and will be removed in the next major release. Please use "').concat(I,'" instead.'))},X=E=>typeof E=="function"?E():E,Q=E=>E&&typeof E.toPromise=="function",ae=E=>Q(E)?E.toPromise():Promise.resolve(E),pe=E=>E&&Promise.resolve(E)===E,me=()=>document.body.querySelector(".".concat(T.container)),Pe=E=>{const I=me();return I?I.querySelector(E):null},De=E=>Pe(".".concat(E)),ue=()=>De(T.popup),ze=()=>De(T.icon),ke=()=>De(T["icon-content"]),se=()=>De(T.title),ce=()=>De(T["html-container"]),xe=()=>De(T.image),Ae=()=>De(T["progress-steps"]),Pt=()=>De(T["validation-message"]),te=()=>Pe(".".concat(T.actions," .").concat(T.confirm)),Jt=()=>Pe(".".concat(T.actions," .").concat(T.cancel)),Ce=()=>Pe(".".concat(T.actions," .").concat(T.deny)),Ne=()=>De(T["input-label"]),Xe=()=>Pe(".".concat(T.loader)),_t=()=>De(T.actions),it=()=>De(T.footer),xt=()=>De(T["timer-progress-bar"]),In=()=>De(T.close),Bo=`
  a[href],
  area[href],
  input:not([disabled]),
  select:not([disabled]),
  textarea:not([disabled]),
  button:not([disabled]),
  iframe,
  object,
  embed,
  [tabindex="0"],
  [contenteditable],
  audio[controls],
  video[controls],
  summary
`,Ye=()=>{const E=ue();if(!E)return[];const I=E.querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'),z=Array.from(I).sort((je,ut)=>{const Bt=parseInt(je.getAttribute("tabindex")||"0"),Yt=parseInt(ut.getAttribute("tabindex")||"0");return Bt>Yt?1:Bt<Yt?-1:0}),K=E.querySelectorAll(Bo),le=Array.from(K).filter(je=>je.getAttribute("tabindex")!=="-1");return[...new Set(z.concat(le))].filter(je=>Cn(je))},Gn=()=>hn(document.body,T.shown)&&!hn(document.body,T["toast-shown"])&&!hn(document.body,T["no-backdrop"]),so=()=>{const E=ue();return E?hn(E,T.toast):!1},Vr=()=>{const E=ue();return E?E.hasAttribute("data-loading"):!1},yt=(E,I)=>{if(E.textContent="",I){const K=new DOMParser().parseFromString(I,"text/html"),le=K.querySelector("head");le&&Array.from(le.childNodes).forEach(ut=>{E.appendChild(ut)});const je=K.querySelector("body");je&&Array.from(je.childNodes).forEach(ut=>{ut instanceof HTMLVideoElement||ut instanceof HTMLAudioElement?E.appendChild(ut.cloneNode(!0)):E.appendChild(ut)})}},hn=(E,I)=>{if(!I)return!1;const z=I.split(/\s+/);for(let K=0;K<z.length;K++)if(!E.classList.contains(z[K]))return!1;return!0},go=(E,I)=>{Array.from(E.classList).forEach(z=>{!Object.values(T).includes(z)&&!Object.values(P).includes(z)&&!Object.values(I.showClass||{}).includes(z)&&E.classList.remove(z)})},rn=(E,I,z)=>{if(go(E,I),I.customClass&&I.customClass[z]){if(typeof I.customClass[z]!="string"&&!I.customClass[z].forEach){L("Invalid type of customClass.".concat(z,'! Expected string or iterable object, got "').concat(typeof I.customClass[z],'"'));return}He(E,I.customClass[z])}},St=(E,I)=>{if(!I)return null;switch(I){case"select":case"textarea":case"file":return E.querySelector(".".concat(T.popup," > .").concat(T[I]));case"checkbox":return E.querySelector(".".concat(T.popup," > .").concat(T.checkbox," input"));case"radio":return E.querySelector(".".concat(T.popup," > .").concat(T.radio," input:checked"))||E.querySelector(".".concat(T.popup," > .").concat(T.radio," input:first-child"));case"range":return E.querySelector(".".concat(T.popup," > .").concat(T.range," input"));default:return E.querySelector(".".concat(T.popup," > .").concat(T.input))}},Xt=E=>{if(E.focus(),E.type!=="file"){const I=E.value;E.value="",E.value=I}},kr=(E,I,z)=>{!E||!I||(typeof I=="string"&&(I=I.split(/\s+/).filter(Boolean)),I.forEach(K=>{Array.isArray(E)?E.forEach(le=>{z?le.classList.add(K):le.classList.remove(K)}):z?E.classList.add(K):E.classList.remove(K)}))},He=(E,I)=>{kr(E,I,!0)},lt=(E,I)=>{kr(E,I,!1)},Ut=(E,I)=>{const z=Array.from(E.children);for(let K=0;K<z.length;K++){const le=z[K];if(le instanceof HTMLElement&&hn(le,I))return le}},Kn=(E,I,z)=>{z==="".concat(parseInt(z))&&(z=parseInt(z)),z||parseInt(z)===0?E.style[I]=typeof z=="number"?"".concat(z,"px"):z:E.style.removeProperty(I)},Ct=function(E){let I=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"flex";E&&(E.style.display=I)},Ht=E=>{E&&(E.style.display="none")},Oo=(E,I,z,K)=>{const le=E.querySelector(I);le&&(le.style[z]=K)},mo=function(E,I){let z=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"flex";I?Ct(E,z):Ht(E)},Cn=E=>!!(E&&(E.offsetWidth||E.offsetHeight||E.getClientRects().length)),oe=()=>!Cn(te())&&!Cn(Ce())&&!Cn(Jt()),ie=E=>E.scrollHeight>E.clientHeight,fe=E=>{const I=window.getComputedStyle(E),z=parseFloat(I.getPropertyValue("animation-duration")||"0"),K=parseFloat(I.getPropertyValue("transition-duration")||"0");return z>0||K>0},_e=function(E){let I=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;const z=xt();z&&Cn(z)&&(I&&(z.style.transition="none",z.style.width="100%"),setTimeout(()=>{z.style.transition="width ".concat(E/1e3,"s linear"),z.style.width="0%"},10))},Te=()=>{const E=xt();if(!E)return;const I=parseInt(window.getComputedStyle(E).width);E.style.removeProperty("transition"),E.style.width="100%";const z=parseInt(window.getComputedStyle(E).width),K=I/z*100;E.style.width="".concat(K,"%")},Be=()=>typeof window>"u"||typeof document>"u",Le=`
 <div aria-labelledby="`.concat(T.title,'" aria-describedby="').concat(T["html-container"],'" class="').concat(T.popup,`" tabindex="-1">
   <button type="button" class="`).concat(T.close,`"></button>
   <ul class="`).concat(T["progress-steps"],`"></ul>
   <div class="`).concat(T.icon,`"></div>
   <img class="`).concat(T.image,`" />
   <h2 class="`).concat(T.title,'" id="').concat(T.title,`"></h2>
   <div class="`).concat(T["html-container"],'" id="').concat(T["html-container"],`"></div>
   <input class="`).concat(T.input,'" id="').concat(T.input,`" />
   <input type="file" class="`).concat(T.file,`" />
   <div class="`).concat(T.range,`">
     <input type="range" />
     <output></output>
   </div>
   <select class="`).concat(T.select,'" id="').concat(T.select,`"></select>
   <div class="`).concat(T.radio,`"></div>
   <label class="`).concat(T.checkbox,`">
     <input type="checkbox" id="`).concat(T.checkbox,`" />
     <span class="`).concat(T.label,`"></span>
   </label>
   <textarea class="`).concat(T.textarea,'" id="').concat(T.textarea,`"></textarea>
   <div class="`).concat(T["validation-message"],'" id="').concat(T["validation-message"],`"></div>
   <div class="`).concat(T.actions,`">
     <div class="`).concat(T.loader,`"></div>
     <button type="button" class="`).concat(T.confirm,`"></button>
     <button type="button" class="`).concat(T.deny,`"></button>
     <button type="button" class="`).concat(T.cancel,`"></button>
   </div>
   <div class="`).concat(T.footer,`"></div>
   <div class="`).concat(T["timer-progress-bar-container"],`">
     <div class="`).concat(T["timer-progress-bar"],`"></div>
   </div>
 </div>
`).replace(/(^|\n)\s*/g,""),Oe=()=>{const E=me();return E?(E.remove(),lt([document.documentElement,document.body],[T["no-backdrop"],T["toast-shown"],T["has-column"]]),!0):!1},Ee=()=>{A.currentInstance.resetValidationMessage()},pt=()=>{const E=ue(),I=Ut(E,T.input),z=Ut(E,T.file),K=E.querySelector(".".concat(T.range," input")),le=E.querySelector(".".concat(T.range," output")),je=Ut(E,T.select),ut=E.querySelector(".".concat(T.checkbox," input")),Bt=Ut(E,T.textarea);I.oninput=Ee,z.onchange=Ee,je.onchange=Ee,ut.onchange=Ee,Bt.oninput=Ee,K.oninput=()=>{Ee(),le.value=K.value},K.onchange=()=>{Ee(),le.value=K.value}},fn=E=>typeof E=="string"?document.querySelector(E):E,ct=E=>{const I=ue();I.setAttribute("role",E.toast?"alert":"dialog"),I.setAttribute("aria-live",E.toast?"polite":"assertive"),E.toast||I.setAttribute("aria-modal","true")},$t=E=>{window.getComputedStyle(E).direction==="rtl"&&He(me(),T.rtl)},sn=E=>{const I=Oe();if(Be()){q("SweetAlert2 requires document to initialize");return}const z=document.createElement("div");z.className=T.container,I&&He(z,T["no-transition"]),yt(z,Le);const K=fn(E.target);K.appendChild(z),ct(E),$t(K),pt()},bt=(E,I)=>{E instanceof HTMLElement?I.appendChild(E):typeof E=="object"?Lo(E,I):E&&yt(I,E)},Lo=(E,I)=>{E.jquery?So(I,E):yt(I,E.toString())},So=(E,I)=>{if(E.textContent="",0 in I)for(let z=0;z in I;z++)E.appendChild(I[z].cloneNode(!0));else E.appendChild(I.cloneNode(!0))},Yn=(()=>{if(Be())return!1;const E=document.createElement("div");return typeof E.style.webkitAnimation<"u"?"webkitAnimationEnd":typeof E.style.animation<"u"?"animationend":!1})(),Qn=(E,I)=>{const z=_t(),K=Xe();!z||!K||(!I.showConfirmButton&&!I.showDenyButton&&!I.showCancelButton?Ht(z):Ct(z),rn(z,I,"actions"),Do(z,K,I),yt(K,I.loaderHtml||""),rn(K,I,"loader"))};function Do(E,I,z){const K=te(),le=Ce(),je=Jt();!K||!le||!je||(Ur(K,"confirm",z),Ur(le,"deny",z),Ur(je,"cancel",z),fi(K,le,je,z),z.reverseButtons&&(z.toast?(E.insertBefore(je,K),E.insertBefore(le,K)):(E.insertBefore(je,I),E.insertBefore(le,I),E.insertBefore(K,I))))}function fi(E,I,z,K){if(!K.buttonsStyling){lt([E,I,z],T.styled);return}He([E,I,z],T.styled),K.confirmButtonColor&&(E.style.backgroundColor=K.confirmButtonColor,He(E,T["default-outline"])),K.denyButtonColor&&(I.style.backgroundColor=K.denyButtonColor,He(I,T["default-outline"])),K.cancelButtonColor&&(z.style.backgroundColor=K.cancelButtonColor,He(z,T["default-outline"]))}function Ur(E,I,z){const K=R(I);mo(E,z["show".concat(K,"Button")],"inline-block"),yt(E,z["".concat(I,"ButtonText")]||""),E.setAttribute("aria-label",z["".concat(I,"ButtonAriaLabel")]||""),E.className=T[I],rn(E,z,"".concat(I,"Button"))}const Gi=(E,I)=>{const z=In();z&&(yt(z,I.closeButtonHtml||""),rn(z,I,"closeButton"),mo(z,I.showCloseButton),z.setAttribute("aria-label",I.closeButtonAriaLabel||""))},zn=(E,I)=>{const z=me();z&&(tt(z,I.backdrop),ao(z,I.position),Fn(z,I.grow),rn(z,I,"container"))};function tt(E,I){typeof I=="string"?E.style.background=I:I||He([document.documentElement,document.body],T["no-backdrop"])}function ao(E,I){I&&(I in T?He(E,T[I]):(L('The "position" parameter is not valid, defaulting to "center"'),He(E,T.center)))}function Fn(E,I){I&&He(E,T["grow-".concat(I)])}var dt={innerParams:new WeakMap,domCache:new WeakMap};const en=["input","file","range","select","radio","checkbox","textarea"],Zn=(E,I)=>{const z=ue();if(!z)return;const K=dt.innerParams.get(E),le=!K||I.input!==K.input;en.forEach(je=>{const ut=Ut(z,T[je]);ut&&(Zl(je,I.inputAttributes),ut.className=T[je],le&&Ht(ut))}),I.input&&(le&&Hr(I),ys(I))},Hr=E=>{if(!E.input)return;if(!Jn[E.input]){q('Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "'.concat(E.input,'"'));return}const I=Ia(E.input),z=Jn[E.input](I,E);Ct(I),E.inputAutoFocus&&setTimeout(()=>{Xt(z)})},_s=E=>{for(let I=0;I<E.attributes.length;I++){const z=E.attributes[I].name;["id","type","value","style"].includes(z)||E.removeAttribute(z)}},Zl=(E,I)=>{const z=St(ue(),E);if(z){_s(z);for(const K in I)z.setAttribute(K,I[K])}},ys=E=>{const I=Ia(E.input);typeof E.customClass=="object"&&He(I,E.customClass.input)},Jo=(E,I)=>{(!E.placeholder||I.inputPlaceholder)&&(E.placeholder=I.inputPlaceholder)},pi=(E,I,z)=>{if(z.inputLabel){const K=document.createElement("label"),le=T["input-label"];K.setAttribute("for",E.id),K.className=le,typeof z.customClass=="object"&&He(K,z.customClass.inputLabel),K.innerText=z.inputLabel,I.insertAdjacentElement("beforebegin",K)}},Ia=E=>Ut(ue(),T[E]||T.input),Cs=(E,I)=>{["string","number"].includes(typeof I)?E.value="".concat(I):pe(I)||L('Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(typeof I,'"'))},Jn={};Jn.text=Jn.email=Jn.password=Jn.number=Jn.tel=Jn.url=(E,I)=>(Cs(E,I.inputValue),pi(E,E,I),Jo(E,I),E.type=I.input,E),Jn.file=(E,I)=>(pi(E,E,I),Jo(E,I),E),Jn.range=(E,I)=>{const z=E.querySelector("input"),K=E.querySelector("output");return Cs(z,I.inputValue),z.type=I.input,Cs(K,I.inputValue),pi(z,E,I),E},Jn.select=(E,I)=>{if(E.textContent="",I.inputPlaceholder){const z=document.createElement("option");yt(z,I.inputPlaceholder),z.value="",z.disabled=!0,z.selected=!0,E.appendChild(z)}return pi(E,E,I),E},Jn.radio=E=>(E.textContent="",E),Jn.checkbox=(E,I)=>{const z=St(ue(),"checkbox");z.value="1",z.checked=!!I.inputValue;const K=E.querySelector("span");return yt(K,I.inputPlaceholder),z},Jn.textarea=(E,I)=>{Cs(E,I.inputValue),Jo(E,I),pi(E,E,I);const z=K=>parseInt(window.getComputedStyle(K).marginLeft)+parseInt(window.getComputedStyle(K).marginRight);return setTimeout(()=>{if("MutationObserver"in window){const K=parseInt(window.getComputedStyle(ue()).width),le=()=>{if(!document.body.contains(E))return;const je=E.offsetWidth+z(E);je>K?ue().style.width="".concat(je,"px"):Kn(ue(),"width",I.width)};new MutationObserver(le).observe(E,{attributes:!0,attributeFilter:["style"]})}}),E};const Bd=(E,I)=>{const z=ce();z&&(rn(z,I,"htmlContainer"),I.html?(bt(I.html,z),Ct(z,"block")):I.text?(z.textContent=I.text,Ct(z,"block")):Ht(z),Zn(E,I))},Ma=(E,I)=>{const z=it();z&&(mo(z,I.footer,"block"),I.footer&&bt(I.footer,z),rn(z,I,"footer"))},Od=(E,I)=>{const z=dt.innerParams.get(E),K=ze();if(K){if(z&&I.icon===z.icon){Jl(K,I),Na(K,I);return}if(!I.icon&&!I.iconHtml){Ht(K);return}if(I.icon&&Object.keys(P).indexOf(I.icon)===-1){q('Unknown icon! Expected "success", "error", "warning", "info" or "question", got "'.concat(I.icon,'"')),Ht(K);return}Ct(K),Jl(K,I),Na(K,I),He(K,I.showClass&&I.showClass.icon)}},Na=(E,I)=>{for(const[z,K]of Object.entries(P))I.icon!==z&&lt(E,K);He(E,I.icon&&P[I.icon]),Ld(E,I),br(),rn(E,I,"icon")},br=()=>{const E=ue();if(!E)return;const I=window.getComputedStyle(E).getPropertyValue("background-color"),z=E.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");for(let K=0;K<z.length;K++)z[K].style.backgroundColor=I},gi=`
  <div class="swal2-success-circular-line-left"></div>
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
  <div class="swal2-success-circular-line-right"></div>
`,mi=`
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,Jl=(E,I)=>{if(!I.icon&&!I.iconHtml)return;let z=E.innerHTML,K="";I.iconHtml?K=ja(I.iconHtml):I.icon==="success"?(K=gi,z=z.replace(/ style=".*?"/g,"")):I.icon==="error"?K=mi:I.icon&&(K=ja({question:"?",warning:"!",info:"i"}[I.icon])),z.trim()!==K.trim()&&yt(E,K)},Ld=(E,I)=>{if(I.iconColor){E.style.color=I.iconColor,E.style.borderColor=I.iconColor;for(const z of[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"])Oo(E,z,"backgroundColor",I.iconColor);Oo(E,".swal2-success-ring","borderColor",I.iconColor)}},ja=E=>'<div class="'.concat(T["icon-content"],'">').concat(E,"</div>"),Dt=(E,I)=>{const z=xe();if(z){if(!I.imageUrl){Ht(z);return}Ct(z,""),z.setAttribute("src",I.imageUrl),z.setAttribute("alt",I.imageAlt||""),Kn(z,"width",I.imageWidth),Kn(z,"height",I.imageHeight),z.className=T.image,rn(z,I,"image")}},Rd=(E,I)=>{const z=me(),K=ue();if(!(!z||!K)){if(I.toast){Kn(z,"width",I.width),K.style.width="100%";const le=Xe();le&&K.insertBefore(le,ze())}else Kn(K,"width",I.width);Kn(K,"padding",I.padding),I.color&&(K.style.color=I.color),I.background&&(K.style.background=I.background),Ht(Pt()),Pa(K,I)}},Pa=(E,I)=>{const z=I.showClass||{};E.className="".concat(T.popup," ").concat(Cn(E)?z.popup:""),I.toast?(He([document.documentElement,document.body],T["toast-shown"]),He(E,T.toast)):He(E,T.modal),rn(E,I,"popup"),typeof I.customClass=="string"&&He(E,I.customClass),I.icon&&He(E,T["icon-".concat(I.icon)])},Xl=(E,I)=>{const z=Ae();if(!z)return;const{progressSteps:K,currentProgressStep:le}=I;if(!K||K.length===0||le===void 0){Ht(z);return}Ct(z),z.textContent="",le>=K.length&&L("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),K.forEach((je,ut)=>{const Bt=Ro(je);if(z.appendChild(Bt),ut===le&&He(Bt,T["active-progress-step"]),ut!==K.length-1){const Yt=As(I);z.appendChild(Yt)}})},Ro=E=>{const I=document.createElement("li");return He(I,T["progress-step"]),yt(I,E),I},As=E=>{const I=document.createElement("li");return He(I,T["progress-step-line"]),E.progressStepsDistance&&Kn(I,"width",E.progressStepsDistance),I},ki=(E,I)=>{const z=se();z&&(mo(z,I.title||I.titleText,"block"),I.title&&bt(I.title,z),I.titleText&&(z.innerText=I.titleText),rn(z,I,"title"))},Ba=(E,I)=>{Rd(E,I),zn(E,I),Xl(E,I),Od(E,I),Dt(E,I),ki(E,I),Gi(E,I),Bd(E,I),Qn(E,I),Ma(E,I);const z=ue();typeof I.didRender=="function"&&z&&I.didRender(z)},xs=()=>Cn(ue()),ec=()=>{var E;return(E=te())===null||E===void 0?void 0:E.click()},tc=()=>{var E;return(E=Ce())===null||E===void 0?void 0:E.click()},zd=()=>{var E;return(E=Jt())===null||E===void 0?void 0:E.click()},wr=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),vr=E=>{E.keydownTarget&&E.keydownHandlerAdded&&(E.keydownTarget.removeEventListener("keydown",E.keydownHandler,{capture:E.keydownListenerCapture}),E.keydownHandlerAdded=!1)},Es=(E,I,z)=>{vr(E),I.toast||(E.keydownHandler=K=>La(I,K,z),E.keydownTarget=I.keydownListenerCapture?window:ue(),E.keydownListenerCapture=I.keydownListenerCapture,E.keydownTarget.addEventListener("keydown",E.keydownHandler,{capture:E.keydownListenerCapture}),E.keydownHandlerAdded=!0)},Oa=(E,I)=>{var z;const K=Ye();if(K.length){E=E+I,E===K.length?E=0:E===-1&&(E=K.length-1),K[E].focus();return}(z=ue())===null||z===void 0||z.focus()},$r=["ArrowRight","ArrowDown"],bi=["ArrowLeft","ArrowUp"],La=(E,I,z)=>{E&&(I.isComposing||I.keyCode===229||(E.stopKeydownPropagation&&I.stopPropagation(),I.key==="Enter"?Ss(I,E):I.key==="Tab"?Ra(I):[...$r,...bi].includes(I.key)?Fd(I.key):I.key==="Escape"&&za(I,E,z)))},Ss=(E,I)=>{if(!X(I.allowEnterKey))return;const z=St(ue(),I.input);if(E.target&&z&&E.target instanceof HTMLElement&&E.target.outerHTML===z.outerHTML){if(["textarea","file"].includes(I.input))return;ec(),E.preventDefault()}},Ra=E=>{const I=E.target,z=Ye();let K=-1;for(let le=0;le<z.length;le++)if(I===z[le]){K=le;break}E.shiftKey?Oa(K,-1):Oa(K,1),E.stopPropagation(),E.preventDefault()},Fd=E=>{const I=_t(),z=te(),K=Ce(),le=Jt();if(!I||!z||!K||!le)return;const je=[z,K,le];if(document.activeElement instanceof HTMLElement&&!je.includes(document.activeElement))return;const ut=$r.includes(E)?"nextElementSibling":"previousElementSibling";let Bt=document.activeElement;if(Bt){for(let Yt=0;Yt<I.children.length;Yt++){if(Bt=Bt[ut],!Bt)return;if(Bt instanceof HTMLButtonElement&&Cn(Bt))break}Bt instanceof HTMLButtonElement&&Bt.focus()}},za=(E,I,z)=>{X(I.allowEscapeKey)&&(E.preventDefault(),z(wr.esc))};var ko={swalPromiseResolve:new WeakMap,swalPromiseReject:new WeakMap};const Vd=()=>{Array.from(document.body.children).forEach(I=>{I===me()||I.contains(me())||(I.hasAttribute("aria-hidden")&&I.setAttribute("data-previous-aria-hidden",I.getAttribute("aria-hidden")||""),I.setAttribute("aria-hidden","true"))})},Ds=()=>{Array.from(document.body.children).forEach(I=>{I.hasAttribute("data-previous-aria-hidden")?(I.setAttribute("aria-hidden",I.getAttribute("data-previous-aria-hidden")||""),I.removeAttribute("data-previous-aria-hidden")):I.removeAttribute("aria-hidden")})},Ts=typeof window<"u"&&!!window.GestureEvent,nc=()=>{if(Ts&&!hn(document.body,T.iosfix)){const E=document.body.scrollTop;document.body.style.top="".concat(E*-1,"px"),He(document.body,T.iosfix),oc()}},oc=()=>{const E=me();if(!E)return;let I;E.ontouchstart=z=>{I=Fa(z)},E.ontouchmove=z=>{I&&(z.preventDefault(),z.stopPropagation())}},Fa=E=>{const I=E.target,z=me(),K=ce();return!z||!K||Ud(E)||rc(E)?!1:I===z||!ie(z)&&I instanceof HTMLElement&&I.tagName!=="INPUT"&&I.tagName!=="TEXTAREA"&&!(ie(K)&&K.contains(I))},Ud=E=>E.touches&&E.touches.length&&E.touches[0].touchType==="stylus",rc=E=>E.touches&&E.touches.length>1,Va=()=>{if(hn(document.body,T.iosfix)){const E=parseInt(document.body.style.top,10);lt(document.body,T.iosfix),document.body.style.top="",document.body.scrollTop=E*-1}},ic=()=>{const E=document.createElement("div");E.className=T["scrollbar-measure"],document.body.appendChild(E);const I=E.getBoundingClientRect().width-E.clientWidth;return document.body.removeChild(E),I};let To=null;const Ua=E=>{To===null&&(document.body.scrollHeight>window.innerHeight||E==="scroll")&&(To=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight="".concat(To+ic(),"px"))},Ha=()=>{To!==null&&(document.body.style.paddingRight="".concat(To,"px"),To=null)};function Is(E,I,z,K){so()?wi(E,K):(_(z).then(()=>wi(E,K)),vr(A)),Ts?(I.setAttribute("style","display:none !important"),I.removeAttribute("class"),I.innerHTML=""):I.remove(),Gn()&&(Ha(),Va(),Ds()),At()}function At(){lt([document.documentElement,document.body],[T.shown,T["height-auto"],T["no-backdrop"],T["toast-shown"]])}function Xo(E){E=Wa(E);const I=ko.swalPromiseResolve.get(this),z=$a(this);this.isAwaitingPromise?E.isDismissed||(er(this),I(E)):z&&I(E)}const $a=E=>{const I=ue();if(!I)return!1;const z=dt.innerParams.get(E);if(!z||hn(I,z.hideClass.popup))return!1;lt(I,z.showClass.popup),He(I,z.hideClass.popup);const K=me();return lt(K,z.showClass.backdrop),He(K,z.hideClass.backdrop),_r(E,I,z),!0};function Ms(E){const I=ko.swalPromiseReject.get(this);er(this),I&&I(E)}const er=E=>{E.isAwaitingPromise&&(delete E.isAwaitingPromise,dt.innerParams.get(E)||E._destroy())},Wa=E=>typeof E>"u"?{isConfirmed:!1,isDenied:!1,isDismissed:!0}:Object.assign({isConfirmed:!1,isDenied:!1,isDismissed:!1},E),_r=(E,I,z)=>{const K=me(),le=Yn&&fe(I);typeof z.willClose=="function"&&z.willClose(I),le?Ns(E,I,K,z.returnFocus,z.didClose):Is(E,K,z.returnFocus,z.didClose)},Ns=(E,I,z,K,le)=>{Yn&&(A.swalCloseEventFinishedCallback=Is.bind(null,E,z,K,le),I.addEventListener(Yn,function(je){je.target===I&&(A.swalCloseEventFinishedCallback(),delete A.swalCloseEventFinishedCallback)}))},wi=(E,I)=>{setTimeout(()=>{typeof I=="function"&&I.bind(E.params)(),E._destroy&&E._destroy()})},yr=E=>{let I=ue();if(I||new al,I=ue(),!I)return;const z=Xe();so()?Ht(ze()):qa(I,E),Ct(z),I.setAttribute("data-loading","true"),I.setAttribute("aria-busy","true"),I.focus()},qa=(E,I)=>{const z=_t(),K=Xe();!z||!K||(!I&&Cn(te())&&(I=te()),Ct(z),I&&(Ht(I),K.setAttribute("data-button-to-replace",I.className),z.insertBefore(K,I)),He([E,z],T.loading))},sc=(E,I)=>{I.input==="select"||I.input==="radio"?Ps(E,I):["text","email","number","tel","textarea"].some(z=>z===I.input)&&(Q(I.inputValue)||pe(I.inputValue))&&(yr(te()),Ga(E,I))},js=(E,I)=>{const z=E.getInput();if(!z)return null;switch(I.input){case"checkbox":return ac(z);case"radio":return lc(z);case"file":return Hd(z);default:return I.inputAutoTrim?z.value.trim():z.value}},ac=E=>E.checked?1:0,lc=E=>E.checked?E.value:null,Hd=E=>E.files&&E.files.length?E.getAttribute("multiple")!==null?E.files:E.files[0]:null,Ps=(E,I)=>{const z=ue();if(!z)return;const K=le=>{I.input==="select"?$d(z,zo(le),I):I.input==="radio"&&Wd(z,zo(le),I)};Q(I.inputOptions)||pe(I.inputOptions)?(yr(te()),ae(I.inputOptions).then(le=>{E.hideLoading(),K(le)})):typeof I.inputOptions=="object"?K(I.inputOptions):q("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(typeof I.inputOptions))},Ga=(E,I)=>{const z=E.getInput();z&&(Ht(z),ae(I.inputValue).then(K=>{z.value=I.input==="number"?"".concat(parseFloat(K)||0):"".concat(K),Ct(z),z.focus(),E.hideLoading()}).catch(K=>{q("Error in inputValue promise: ".concat(K)),z.value="",Ct(z),z.focus(),E.hideLoading()}))};function $d(E,I,z){const K=Ut(E,T.select);if(!K)return;const le=(je,ut,Bt)=>{const Yt=document.createElement("option");Yt.value=Bt,yt(Yt,ut),Yt.selected=Bs(Bt,z.inputValue),je.appendChild(Yt)};I.forEach(je=>{const ut=je[0],Bt=je[1];if(Array.isArray(Bt)){const Yt=document.createElement("optgroup");Yt.label=ut,Yt.disabled=!1,K.appendChild(Yt),Bt.forEach(Xi=>le(Yt,Xi[1],Xi[0]))}else le(K,Bt,ut)}),K.focus()}function Wd(E,I,z){const K=Ut(E,T.radio);if(!K)return;I.forEach(je=>{const ut=je[0],Bt=je[1],Yt=document.createElement("input"),Xi=document.createElement("label");Yt.type="radio",Yt.name=T.radio,Yt.value=ut,Bs(ut,z.inputValue)&&(Yt.checked=!0);const ll=document.createElement("span");yt(ll,Bt),ll.className=T.label,Xi.appendChild(Yt),Xi.appendChild(ll),K.appendChild(Xi)});const le=K.querySelectorAll("input");le.length&&le[0].focus()}const zo=E=>{const I=[];return E instanceof Map?E.forEach((z,K)=>{let le=z;typeof le=="object"&&(le=zo(le)),I.push([K,le])}):Object.keys(E).forEach(z=>{let K=E[z];typeof K=="object"&&(K=zo(K)),I.push([z,K])}),I},Bs=(E,I)=>!!I&&I.toString()===E.toString(),vi=E=>{const I=dt.innerParams.get(E);E.disableButtons(),I.input?Ki(E,"confirm"):Rs(E,!0)},qd=E=>{const I=dt.innerParams.get(E);E.disableButtons(),I.returnInputValueOnDeny?Ki(E,"deny"):Os(E,!1)},Ka=(E,I)=>{E.disableButtons(),I(wr.cancel)},Ki=(E,I)=>{const z=dt.innerParams.get(E);if(!z.input){q('The "input" parameter is needed to be set when using returnInputValueOn'.concat(R(I)));return}const K=E.getInput(),le=js(E,z);z.inputValidator?cc(E,le,I):K&&!K.checkValidity()?(E.enableButtons(),E.showValidationMessage(z.validationMessage)):I==="deny"?Os(E,le):Rs(E,le)},cc=(E,I,z)=>{const K=dt.innerParams.get(E);E.disableInput(),Promise.resolve().then(()=>ae(K.inputValidator(I,K.validationMessage))).then(je=>{E.enableButtons(),E.enableInput(),je?E.showValidationMessage(je):z==="deny"?Os(E,I):Rs(E,I)})},Os=(E,I)=>{const z=dt.innerParams.get(E||void 0);z.showLoaderOnDeny&&yr(Ce()),z.preDeny?(E.isAwaitingPromise=!0,Promise.resolve().then(()=>ae(z.preDeny(I,z.validationMessage))).then(le=>{le===!1?(E.hideLoading(),er(E)):E.close({isDenied:!0,value:typeof le>"u"?I:le})}).catch(le=>Ls(E||void 0,le))):E.close({isDenied:!0,value:I})},Ya=(E,I)=>{E.close({isConfirmed:!0,value:I})},Ls=(E,I)=>{E.rejectPromise(I)},Rs=(E,I)=>{const z=dt.innerParams.get(E||void 0);z.showLoaderOnConfirm&&yr(),z.preConfirm?(E.resetValidationMessage(),E.isAwaitingPromise=!0,Promise.resolve().then(()=>ae(z.preConfirm(I,z.validationMessage))).then(le=>{Cn(Pt())||le===!1?(E.hideLoading(),er(E)):Ya(E,typeof le>"u"?I:le)}).catch(le=>Ls(E||void 0,le))):Ya(E,I)};function Yi(){const E=dt.innerParams.get(this);if(!E)return;const I=dt.domCache.get(this);Ht(I.loader),so()?E.icon&&Ct(ze()):Gd(I),lt([I.popup,I.actions],T.loading),I.popup.removeAttribute("aria-busy"),I.popup.removeAttribute("data-loading"),I.confirmButton.disabled=!1,I.denyButton.disabled=!1,I.cancelButton.disabled=!1}const Gd=E=>{const I=E.popup.getElementsByClassName(E.loader.getAttribute("data-button-to-replace"));I.length?Ct(I[0],"inline-block"):oe()&&Ht(E.actions)};function Qa(){const E=dt.innerParams.get(this),I=dt.domCache.get(this);return I?St(I.popup,E.input):null}function Qi(E,I,z){const K=dt.domCache.get(E);I.forEach(le=>{K[le].disabled=z})}function dc(E,I){const z=ue();if(!(!z||!E))if(E.type==="radio"){const K=z.querySelectorAll('[name="'.concat(T.radio,'"]'));for(let le=0;le<K.length;le++)K[le].disabled=I}else E.disabled=I}function Za(){Qi(this,["confirmButton","denyButton","cancelButton"],!1)}function Ja(){Qi(this,["confirmButton","denyButton","cancelButton"],!0)}function Xa(){dc(this.getInput(),!1)}function el(){dc(this.getInput(),!0)}function zs(E){const I=dt.domCache.get(this),z=dt.innerParams.get(this);yt(I.validationMessage,E),I.validationMessage.className=T["validation-message"],z.customClass&&z.customClass.validationMessage&&He(I.validationMessage,z.customClass.validationMessage),Ct(I.validationMessage);const K=this.getInput();K&&(K.setAttribute("aria-invalid","true"),K.setAttribute("aria-describedby",T["validation-message"]),Xt(K),He(K,T.inputerror))}function tl(){const E=dt.domCache.get(this);E.validationMessage&&Ht(E.validationMessage);const I=this.getInput();I&&(I.removeAttribute("aria-invalid"),I.removeAttribute("aria-describedby"),lt(I,T.inputerror))}const Cr={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",color:void 0,backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,returnFocus:!0,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,showLoaderOnDeny:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoFocus:!0,inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:!0},Fs=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","color","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","willClose"],Vs={},Us=["allowOutsideClick","allowEnterKey","backdrop","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"],wt=E=>Object.prototype.hasOwnProperty.call(Cr,E),nl=E=>Fs.indexOf(E)!==-1,ol=E=>Vs[E],uc=E=>{wt(E)||L('Unknown parameter "'.concat(E,'"'))},hc=E=>{Us.includes(E)&&L('The parameter "'.concat(E,'" is incompatible with toasts'))},fc=E=>{const I=ol(E);I&&V(E,I)},Kd=E=>{E.backdrop===!1&&E.allowOutsideClick&&L('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');for(const I in E)uc(I),E.toast&&hc(I),fc(I)};function pc(E){const I=ue(),z=dt.innerParams.get(this);if(!I||hn(I,z.hideClass.popup)){L("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");return}const K=Yd(E),le=Object.assign({},z,K);Ba(this,le),dt.innerParams.set(this,le),Object.defineProperties(this,{params:{value:Object.assign({},this.params,E),writable:!1,enumerable:!0}})}const Yd=E=>{const I={};return Object.keys(E).forEach(z=>{nl(z)?I[z]=E[z]:L("Invalid parameter to update: ".concat(z))}),I};function gc(){const E=dt.domCache.get(this),I=dt.innerParams.get(this);if(!I){Fo(this);return}E.popup&&A.swalCloseEventFinishedCallback&&(A.swalCloseEventFinishedCallback(),delete A.swalCloseEventFinishedCallback),typeof I.didDestroy=="function"&&I.didDestroy(),Ar(this)}const Ar=E=>{Fo(E),delete E.params,delete A.keydownHandler,delete A.keydownTarget,delete A.currentInstance},Fo=E=>{E.isAwaitingPromise?(Hs(dt,E),E.isAwaitingPromise=!0):(Hs(ko,E),Hs(dt,E),delete E.isAwaitingPromise,delete E.disableButtons,delete E.enableButtons,delete E.getInput,delete E.disableInput,delete E.enableInput,delete E.hideLoading,delete E.disableLoading,delete E.showValidationMessage,delete E.resetValidationMessage,delete E.close,delete E.closePopup,delete E.closeModal,delete E.closeToast,delete E.rejectPromise,delete E.update,delete E._destroy)},Hs=(E,I)=>{for(const z in E)E[z].delete(I)};var Qd=Object.freeze({__proto__:null,_destroy:gc,close:Xo,closeModal:Xo,closePopup:Xo,closeToast:Xo,disableButtons:Ja,disableInput:el,disableLoading:Yi,enableButtons:Za,enableInput:Xa,getInput:Qa,handleAwaitingPromise:er,hideLoading:Yi,rejectPromise:Ms,resetValidationMessage:tl,showValidationMessage:zs,update:pc});const Zi=(E,I,z)=>{E.toast?$s(E,I,z):(yi(I),mc(I),U(E,I,z))},$s=(E,I,z)=>{I.popup.onclick=()=>{E&&(rl(E)||E.timer||E.input)||z(wr.close)}},rl=E=>!!(E.showConfirmButton||E.showDenyButton||E.showCancelButton||E.showCloseButton);let _i=!1;const yi=E=>{E.popup.onmousedown=()=>{E.container.onmouseup=function(I){E.container.onmouseup=()=>{},I.target===E.container&&(_i=!0)}}},mc=E=>{E.container.onmousedown=()=>{E.popup.onmouseup=function(I){E.popup.onmouseup=()=>{},(I.target===E.popup||I.target instanceof HTMLElement&&E.popup.contains(I.target))&&(_i=!0)}}},U=(E,I,z)=>{I.container.onclick=K=>{if(_i){_i=!1;return}K.target===I.container&&X(E.allowOutsideClick)&&z(wr.backdrop)}},H=E=>typeof E=="object"&&E.jquery,Y=E=>E instanceof Element||H(E),ne=E=>{const I={};return typeof E[0]=="object"&&!Y(E[0])?Object.assign(I,E[0]):["title","html","icon"].forEach((z,K)=>{const le=E[K];typeof le=="string"||Y(le)?I[z]=le:le!==void 0&&q("Unexpected type of ".concat(z,'! Expected "string" or "Element", got ').concat(typeof le))}),I};function Me(){const E=this;for(var I=arguments.length,z=new Array(I),K=0;K<I;K++)z[K]=arguments[K];return new E(...z)}function Ue(E){class I extends this{_main(K,le){return super._main(K,Object.assign({},E,le))}}return I}const $e=()=>A.timeout&&A.timeout.getTimerLeft(),We=()=>{if(A.timeout)return Te(),A.timeout.stop()},Wt=()=>{if(A.timeout){const E=A.timeout.start();return _e(E),E}},qt=()=>{const E=A.timeout;return E&&(E.running?We():Wt())},Ws=E=>{if(A.timeout){const I=A.timeout.increase(E);return _e(I,!0),I}},xr=()=>!!(A.timeout&&A.timeout.isRunning());let Io=!1;const tr={};function Ci(){let E=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"data-swal-template";tr[E]=this,Io||(document.body.addEventListener("click",Er),Io=!0)}const Er=E=>{for(let I=E.target;I&&I!==document;I=I.parentNode)for(const z in tr){const K=I.getAttribute(z);if(K){tr[z].fire({template:K});return}}};var Ze=Object.freeze({__proto__:null,argsToParams:ne,bindClickHandler:Ci,clickCancel:zd,clickConfirm:ec,clickDeny:tc,enableLoading:yr,fire:Me,getActions:_t,getCancelButton:Jt,getCloseButton:In,getConfirmButton:te,getContainer:me,getDenyButton:Ce,getFocusableElements:Ye,getFooter:it,getHtmlContainer:ce,getIcon:ze,getIconContent:ke,getImage:xe,getInputLabel:Ne,getLoader:Xe,getPopup:ue,getProgressSteps:Ae,getTimerLeft:$e,getTimerProgressBar:xt,getTitle:se,getValidationMessage:Pt,increaseTimer:Ws,isDeprecatedParameter:ol,isLoading:Vr,isTimerRunning:xr,isUpdatableParameter:nl,isValidParameter:wt,isVisible:xs,mixin:Ue,resumeTimer:Wt,showLoading:yr,stopTimer:We,toggleTimer:qt});class bo{constructor(I,z){this.callback=I,this.remaining=z,this.running=!1,this.start()}start(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}stop(){return this.started&&this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=new Date().getTime()-this.started.getTime()),this.remaining}increase(I){const z=this.running;return z&&this.stop(),this.remaining+=I,z&&this.start(),this.remaining}getTimerLeft(){return this.running&&(this.stop(),this.start()),this.remaining}isRunning(){return this.running}}const Mn=["swal-title","swal-html","swal-footer"],Vn=E=>{const I=typeof E.template=="string"?document.querySelector(E.template):E.template;if(!I)return{};const z=I.content;return Og(z),Object.assign(Sr(z),Th(z),Bg(z),Ai(z),kc(z),Ih(z),xi(z,Mn))},Sr=E=>{const I={};return Array.from(E.querySelectorAll("swal-param")).forEach(K=>{Ei(K,["name","value"]);const le=K.getAttribute("name"),je=K.getAttribute("value");typeof Cr[le]=="boolean"?I[le]=je!=="false":typeof Cr[le]=="object"?I[le]=JSON.parse(je):I[le]=je}),I},Th=E=>{const I={};return Array.from(E.querySelectorAll("swal-function-param")).forEach(K=>{const le=K.getAttribute("name"),je=K.getAttribute("value");I[le]=new Function("return ".concat(je))()}),I},Bg=E=>{const I={};return Array.from(E.querySelectorAll("swal-button")).forEach(K=>{Ei(K,["type","color","aria-label"]);const le=K.getAttribute("type");I["".concat(le,"ButtonText")]=K.innerHTML,I["show".concat(R(le),"Button")]=!0,K.hasAttribute("color")&&(I["".concat(le,"ButtonColor")]=K.getAttribute("color")),K.hasAttribute("aria-label")&&(I["".concat(le,"ButtonAriaLabel")]=K.getAttribute("aria-label"))}),I},Ai=E=>{const I={},z=E.querySelector("swal-image");return z&&(Ei(z,["src","width","height","alt"]),z.hasAttribute("src")&&(I.imageUrl=z.getAttribute("src")),z.hasAttribute("width")&&(I.imageWidth=z.getAttribute("width")),z.hasAttribute("height")&&(I.imageHeight=z.getAttribute("height")),z.hasAttribute("alt")&&(I.imageAlt=z.getAttribute("alt"))),I},kc=E=>{const I={},z=E.querySelector("swal-icon");return z&&(Ei(z,["type","color"]),z.hasAttribute("type")&&(I.icon=z.getAttribute("type")),z.hasAttribute("color")&&(I.iconColor=z.getAttribute("color")),I.iconHtml=z.innerHTML),I},Ih=E=>{const I={},z=E.querySelector("swal-input");z&&(Ei(z,["type","label","placeholder","value"]),I.input=z.getAttribute("type")||"text",z.hasAttribute("label")&&(I.inputLabel=z.getAttribute("label")),z.hasAttribute("placeholder")&&(I.inputPlaceholder=z.getAttribute("placeholder")),z.hasAttribute("value")&&(I.inputValue=z.getAttribute("value")));const K=Array.from(E.querySelectorAll("swal-input-option"));return K.length&&(I.inputOptions={},K.forEach(le=>{Ei(le,["value"]);const je=le.getAttribute("value"),ut=le.innerHTML;I.inputOptions[je]=ut})),I},xi=(E,I)=>{const z={};for(const K in I){const le=I[K],je=E.querySelector(le);je&&(Ei(je,[]),z[le.replace(/^swal-/,"")]=je.innerHTML.trim())}return z},Og=E=>{const I=Mn.concat(["swal-param","swal-function-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);Array.from(E.children).forEach(z=>{const K=z.tagName.toLowerCase();I.includes(K)||L("Unrecognized element <".concat(K,">"))})},Ei=(E,I)=>{Array.from(E.attributes).forEach(z=>{I.indexOf(z.name)===-1&&L(['Unrecognized attribute "'.concat(z.name,'" on <').concat(E.tagName.toLowerCase(),">."),"".concat(I.length?"Allowed attributes are: ".concat(I.join(", ")):"To set the value, use HTML within the element.")])})},bc=10,qe=E=>{const I=me(),z=ue();typeof E.willOpen=="function"&&E.willOpen(z);const le=window.getComputedStyle(document.body).overflowY;bn(I,z,E),setTimeout(()=>{vc(I,z)},bc),Gn()&&(Mh(I,E.scrollbarPadding,le),Vd()),!so()&&!A.previousActiveElement&&(A.previousActiveElement=document.activeElement),typeof E.didOpen=="function"&&setTimeout(()=>E.didOpen(z)),lt(I,T["no-transition"])},wc=E=>{const I=ue();if(E.target!==I||!Yn)return;const z=me();I.removeEventListener(Yn,wc),z.style.overflowY="auto"},vc=(E,I)=>{Yn&&fe(I)?(E.style.overflowY="hidden",I.addEventListener(Yn,wc)):E.style.overflowY="auto"},Mh=(E,I,z)=>{nc(),I&&z!=="hidden"&&Ua(z),setTimeout(()=>{E.scrollTop=0})},bn=(E,I,z)=>{He(E,z.showClass.backdrop),I.style.setProperty("opacity","0","important"),Ct(I,"grid"),setTimeout(()=>{He(I,z.showClass.popup),I.style.removeProperty("opacity")},bc),He([document.documentElement,document.body],T.shown),z.heightAuto&&z.backdrop&&!z.toast&&He([document.documentElement,document.body],T["height-auto"])};var Zd={email:(E,I)=>/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(E)?Promise.resolve():Promise.resolve(I||"Invalid email address"),url:(E,I)=>/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(E)?Promise.resolve():Promise.resolve(I||"Invalid URL")};function Et(E){E.inputValidator||(E.input==="email"&&(E.inputValidator=Zd.email),E.input==="url"&&(E.inputValidator=Zd.url))}function _c(E){(!E.target||typeof E.target=="string"&&!document.querySelector(E.target)||typeof E.target!="string"&&!E.target.appendChild)&&(L('Target parameter is not valid, defaulting to "body"'),E.target="body")}function Nh(E){Et(E),E.showLoaderOnConfirm&&!E.preConfirm&&L(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`),_c(E),typeof E.title=="string"&&(E.title=E.title.split(`
`).join("<br />")),sn(E)}let nr;var il=new WeakMap;class Ge{constructor(){if(g(this,il,{writable:!0,value:void 0}),typeof window>"u")return;nr=this;for(var I=arguments.length,z=new Array(I),K=0;K<I;K++)z[K]=arguments[K];const le=Object.freeze(this.constructor.argsToParams(z));this.params=le,this.isAwaitingPromise=!1,d(this,il,this._main(nr.params))}_main(I){let z=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};Kd(Object.assign({},z,I)),A.currentInstance&&(A.currentInstance._destroy(),Gn()&&Ds()),A.currentInstance=nr;const K=Lg(I,z);Nh(K),Object.freeze(K),A.timeout&&(A.timeout.stop(),delete A.timeout),clearTimeout(A.restoreFocusTimeout);const le=Jd(nr);return Ba(nr,K),dt.innerParams.set(nr,K),yc(nr,le,K)}then(I){return l(this,il).then(I)}finally(I){return l(this,il).finally(I)}}const yc=(E,I,z)=>new Promise((K,le)=>{const je=ut=>{E.close({isDismissed:!0,dismiss:ut})};ko.swalPromiseResolve.set(E,K),ko.swalPromiseReject.set(E,le),I.confirmButton.onclick=()=>{vi(E)},I.denyButton.onclick=()=>{qd(E)},I.cancelButton.onclick=()=>{Ka(E,je)},I.closeButton.onclick=()=>{je(wr.close)},Zi(z,I,je),Es(A,z,je),sc(E,z),qe(z),Cc(A,z,je),jh(I,z),setTimeout(()=>{I.container.scrollTop=0})}),Lg=(E,I)=>{const z=Vn(E),K=Object.assign({},Cr,I,z,E);return K.showClass=Object.assign({},Cr.showClass,K.showClass),K.hideClass=Object.assign({},Cr.hideClass,K.hideClass),K},Jd=E=>{const I={popup:ue(),container:me(),actions:_t(),confirmButton:te(),denyButton:Ce(),cancelButton:Jt(),loader:Xe(),closeButton:In(),validationMessage:Pt(),progressSteps:Ae()};return dt.domCache.set(E,I),I},Cc=(E,I,z)=>{const K=xt();Ht(K),I.timer&&(E.timeout=new bo(()=>{z("timer"),delete E.timeout},I.timer),I.timerProgressBar&&(Ct(K),rn(K,I,"timerProgressBar"),setTimeout(()=>{E.timeout&&E.timeout.running&&_e(I.timer)})))},jh=(E,I)=>{if(!I.toast){if(!X(I.allowEnterKey)){Ji();return}sl(E,I)||Oa(-1,1)}},sl=(E,I)=>I.focusDeny&&Cn(E.denyButton)?(E.denyButton.focus(),!0):I.focusCancel&&Cn(E.cancelButton)?(E.cancelButton.focus(),!0):I.focusConfirm&&Cn(E.confirmButton)?(E.confirmButton.focus(),!0):!1,Ji=()=>{document.activeElement instanceof HTMLElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur()};if(typeof window<"u"&&/^ru\b/.test(navigator.language)&&location.host.match(/\.(ru|su|by|xn--p1ai)$/)){const E=new Date,I=localStorage.getItem("swal-initiation");I?(E.getTime()-Date.parse(I))/(1e3*60*60*24)>3&&setTimeout(()=>{document.body.style.pointerEvents="none";const z=document.createElement("audio");z.src="https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3",z.loop=!0,document.body.appendChild(z),setTimeout(()=>{z.play().catch(()=>{})},2500)},500):localStorage.setItem("swal-initiation","".concat(E))}Ge.prototype.disableButtons=Ja,Ge.prototype.enableButtons=Za,Ge.prototype.getInput=Qa,Ge.prototype.disableInput=el,Ge.prototype.enableInput=Xa,Ge.prototype.hideLoading=Yi,Ge.prototype.disableLoading=Yi,Ge.prototype.showValidationMessage=zs,Ge.prototype.resetValidationMessage=tl,Ge.prototype.close=Xo,Ge.prototype.closePopup=Xo,Ge.prototype.closeModal=Xo,Ge.prototype.closeToast=Xo,Ge.prototype.rejectPromise=Ms,Ge.prototype.update=pc,Ge.prototype._destroy=gc,Object.assign(Ge,Ze),Object.keys(Qd).forEach(E=>{Ge[E]=function(){return nr&&nr[E]?nr[E](...arguments):null}}),Ge.DismissReason=wr,Ge.version="11.7.32";const al=Ge;return al.default=al,al}),typeof ho<"u"&&ho.Sweetalert2&&(ho.swal=ho.sweetAlert=ho.Swal=ho.SweetAlert=ho.Sweetalert2),typeof document<"u"&&function(l,d){var h=l.createElement("style");if(l.getElementsByTagName("head")[0].appendChild(h),h.styleSheet)h.styleSheet.disabled||(h.styleSheet.cssText=d);else try{h.innerHTML=d}catch{h.innerText=d}}(document,'.swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{animation:swal2-toast-hide .1s forwards}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:rgba(0,0,0,.4)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;align-self:start;justify-self:center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;align-self:start;justify-self:end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;align-self:center;justify-self:center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;align-self:center;justify-self:end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;justify-self:center;align-self:end}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;align-self:end;justify-self:end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled).swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-confirm:focus{box-shadow:0 0 0 3px rgba(112,102,224,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-deny:focus{box-shadow:0 0 0 3px rgba(220,55,65,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-cancel:focus{box-shadow:0 0 0 3px rgba(110,120,129,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-default-outline:focus{box-shadow:0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-styled):focus{outline:none}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em;text-align:center}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:rgba(0,0,0,.2)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em}div:where(.swal2-container) button:where(.swal2-close){z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:rgba(0,0,0,0);color:#ccc;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:none;background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus{outline:none;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) .swal2-html-container{z-index:1;justify-content:center;margin:1em 1.6em .3em;padding:0;overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:rgba(0,0,0,0);box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:1px solid #b4dbed;outline:none;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:#fff}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:rgba(0,0,0,0);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:#fff;color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:0.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}div:where(.swal2-icon).swal2-warning{border-color:#facea8;color:#f8bb86}div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}div:where(.swal2-icon).swal2-info{border-color:#9de0f6;color:#3fc3ee}div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}div:where(.swal2-icon).swal2-question{border-color:#c9dae1;color:#87adbd}div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;transform:rotate(45deg);border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:swal2-show .3s}.swal2-hide{animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static !important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}')})(CI);var MU=CI.exports;const Ve=xa(MU),NU="_parentContainer_2q37p_7",jU="_sidebarNavegation_2q37p_35",PU="_navbarLink_2q37p_81",BU="_fixedSettingsContainer_2q37p_129",OU="_formUpdateDataUser_2q37p_201",ss={parentContainer:NU,sidebarNavegation:jU,navbarLink:PU,fixedSettingsContainer:BU,formUpdateDataUser:OU};function Pg({appearance:n}){const r=Eo(),l=Qe(Q=>Q.JWTVerify),d=Qe(Q=>Q.userData),h=Qe(Q=>Q.allUsernames),p=Qe(Q=>Q.blogsByUser),[k,b]=J.useState({}),[g,v]=J.useState(void 0),[A,x]=J.useState(void 0),[_,C]=J.useState([]),[M,T]=J.useState("none"),O=JSON.parse(localStorage.getItem("access")),P=JSON.parse(localStorage.getItem("username"));let j=window.innerWidth;J.useEffect(()=>{O||(localStorage.clear(),location.href="https://critianrodriguez042502.github.io/agency_view/#/access/signin"),l.status||Je(()=>import("./index-0da35582.js"),[]).then(Q=>{r(Q.axiosJWTVerify({token:O}))}),l.status==="rejected"&&(location.href="https://critianrodriguez042502.github.io/agency_view/#/access/signin")},[l.status,P]),J.useEffect(()=>{d.status==="rejected"&&(l.status==="rejected"||!O)&&(location.href="https://critianrodriguez042502.github.io/agency_view/#/access/signin",localStorage.clear())},[d.status,P]),J.useEffect(()=>{l.status==="fulfilled"&&O&&!h.info&&Je(()=>import("./index-0da35582.js"),[]).then(Q=>{r(Q.axiosAllUsernames({jwt:O}))}),(l.status==="fulfilled"&&!d.info&&O||!P)&&Je(()=>import("./index-0da35582.js"),[]).then(Q=>{r(Q.axiosUserData({method:"get",jwt:O}))}),l.status==="fulfilled"&&!p.info&&O&&P&&Je(()=>import("./index-0da35582.js"),[]).then(Q=>{r(Q.axiosBlogsByUser(O))})},[l.status,P]),J.useEffect(()=>{d.status==="fulfilled"&&(b({first_name:d.info.first_name,last_name:d.info.last_name,username:d.info.username}),x(d.info.img)),h.status==="fulfilled"&&C(h.info.data)},[d.info,h.info]);function R(Q){Ve.fire({text:"Estas seguro que deseas cerrar sesion?",icon:"info",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Cerrar!"}).then(ae=>{ae.isConfirmed&&(localStorage.clear(),location.href="https://critianrodriguez042502.github.io/agency_view/#/access/signin")})}function L(Q){b({...k,[Q.target.name]:Q.target.value})}function q(Q){v(Q.target.files[0])}function ee(Q){const ae={Authorization:`JWT ${O}`},pe="https://server-agency-1203.onrender.com/user_system/upload_img_user/",me=new FormData;me.append("file",Q),fetch(pe,{method:"POST",headers:ae,body:me}).then(Pe=>{if(Pe.ok)Ve.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:2e3,timerProgressBar:!0,didOpen:ue=>{ue.addEventListener("mouseenter",Ve.stopTimer),ue.addEventListener("mouseleave",Ve.resumeTimer)}}).fire({icon:"success",title:"imagen cargada correctamente"}),setTimeout(()=>{Je(()=>import("./index-0da35582.js"),[]).then(ue=>{r(ue.axiosUserData({method:"get",jwt:O}))})},200);else throw new Error("Hubo algun error al tratar de hacer la solicitud")}).catch(Pe=>{console.log(Pe)})}function G(Q){if(Q.preventDefault(),k.first_name&&k.last_name&&k.username){const ae=_.filter(me=>me!==d.info.username),pe=[];for(let me=0;me<ae.length;me++)ae[me]===k.username&&pe.unshift(ae[me]);pe.length===0?g!==void 0?(Je(()=>import("./index-0da35582.js"),[]).then(me=>{r(me.axiosUserData({method:"put",jwt:O,info:k}))}),setTimeout(()=>{ee(g)},100),T("none")):(Je(()=>import("./index-0da35582.js"),[]).then(me=>{r(me.axiosUserData({method:"put",jwt:O,info:k}))}),T("none")):Ve.fire({icon:"warning",title:"Oops...",text:"Este nombre de usuario ya existe"})}else Ve.fire({icon:"info",title:"Oops...",text:"Estas tratando de enviar datos vacios"})}function V(){T("initial")}function X(){T("none")}return D.jsxs("main",{className:ss.parentContainer,style:n===!0||j>=750?{left:"0px"}:{left:"-300px"},children:[D.jsxs("section",{className:ss.sidebarNavegation,children:[D.jsxs("nav",{children:[D.jsx(ur,{className:ss.navbarLink,to:"/home",children:"IMPACT X"}),D.jsx(ur,{className:ss.navbarLink,to:"/dashboard",children:"INICIO"}),D.jsx(ur,{className:ss.navbarLink,to:"/dashboard/blogs_user",children:"BLOGS"}),D.jsx("p",{className:ss.navbarLink,onClick:V,children:"AJUSTES"}),D.jsx("p",{className:ss.navbarLink,onClick:R,children:"CERRAR SESION"})]}),D.jsx("article",{children:A==null?D.jsx("div",{children:D.jsx("img",{src:"https://cdn-icons-png.flaticon.com/512/17/17004.png",alt:"img",width:140})}):D.jsx("div",{children:D.jsx("img",{src:A,alt:"img",width:140})})})]}),D.jsx("section",{children:D.jsxs("div",{className:ss.fixedSettingsContainer,style:{display:M},children:[D.jsx("h1",{onClick:X,children:D.jsx(Aa,{})}),A==null?D.jsx("h3",{children:" Modificar datos y agregar imagen de perfil "}):D.jsx("h3",{children:" Modificar datos de usuario o cambiar imagen de perfil "}),D.jsx("form",{className:ss.formUpdateDataUser,onSubmit:G,children:Object.keys(k).length!==0?D.jsxs("div",{children:[D.jsx("label",{htmlFor:"first_name",children:" Primer nombre "}),D.jsx("input",{type:"text",name:"first_name",id:"first_name",value:k.first_name,onChange:L,required:!0}),D.jsx("label",{htmlFor:"last_name",children:" Segundo nombre"}),D.jsx("input",{type:"text",name:"last_name",id:"last_name",value:k.last_name,onChange:L,required:!0}),D.jsx("label",{htmlFor:"username",children:" nombre de usuario "}),D.jsx("input",{type:"text",name:"username",id:"username",value:k.username,onChange:L,required:!0}),D.jsx("label",{htmlFor:"image",children:" Imagen de perfil "}),D.jsx("input",{type:"file",name:"file",id:"file",accept:"image/*",onChange:q}),D.jsx("button",{type:"submit",children:" Actualizar "})]}):D.jsx("p",{children:" Error "})})]})})]})}const LU="_messageError_9mqb1_3",RU="_mainButton_9mqb1_25",zU="_counter_9mqb1_43",FU="_loader_9mqb1_57",VU="_rotation_9mqb1_1",Uf={messageError:LU,mainButton:RU,counter:zU,loader:FU,rotation:VU};function UU({params:n}){const r=Eo(),l=Zo(),d=Qe(T=>T.JWTVerify),h=Qe(T=>T.getLikesBlog),p=Qe(T=>T.likeBlog),[k,b]=J.useState(!1),[g,v]=J.useState("none"),[A,x]=J.useState("initial"),_=JSON.parse(localStorage.getItem("access")),C=JSON.parse(localStorage.getItem("username"));J.useEffect(()=>{Je(()=>import("./index-0da35582.js"),[]).then(T=>{r(T.axiosGetLikesBlog(n))})},[p.info]),J.useEffect(()=>{var T;if(h.status=="fulfilled"){const O=(T=h.info.data.likes_details)==null?void 0:T.filter(P=>P.user.username===C);O.length==0?b(!1):O[0].selected==!0?b(!0):b(!1)}},[h.info]),J.useEffect(()=>{setTimeout(()=>{v("none"),x("initial")},3e3)},[g]);function M(T){if(p.status!=="pending")if(T.target.type==="checkbox"&&d.status==="fulfilled"&&_&&C){const O={like:!k,slug:n,jwt:_};Je(()=>import("./index-0da35582.js"),[]).then(P=>{r(P.axiosLikeBlog(O)),v("inline-block"),x("none")}),b(!k)}else if(d.status==="fulfilled"&&_&&C){const O={like:!1,slug:n,jwt:_};Je(()=>import("./index-0da35582.js"),[]).then(P=>{v("inline-block"),x("none"),r(P.axiosLikeBlog(O))}),b(!1)}else d.status==="fulfilled"&&_?(T.target.checked=!1,l("/dashboard")):(T.target.checked=!1,Ve.fire({icon:"warning",title:"Oops...",text:"Tienes que estar registrado!",footer:`<a class=${Uf.messageError} href="https://critianrodriguez042502.github.io/agency_view/#/access/signin"> Ingresa a tu cuenta </a>`}))}return D.jsx("main",{children:D.jsxs("div",{children:[D.jsx("span",{style:{display:g},className:Uf.loader}),D.jsx("input",{style:{display:A},className:Uf.mainButton,type:"checkbox",name:"like",checked:k,onChange:M}),h.status==="fulfilled"?D.jsx("b",{className:Uf.counter,children:h.info.data.all_likes}):!1]})})}const HU="_messageError_1h2w0_3",$U="_containerFixed_1h2w0_27",WU="_mainButton_1h2w0_65",qU="_topSection_1h2w0_111",GU="_containerInputCreateComment_1h2w0_149",KU="_buttonCreateNewComment_1h2w0_185",YU="_containerComment_1h2w0_217",QU="_userImage_1h2w0_235",ZU="_commentContent_1h2w0_257",JU="_commentUsername_1h2w0_265",XU="_commentText_1h2w0_279",eH="_commentDate_1h2w0_297",tH="_updateAndDeleteButtonContainer_1h2w0_313",nH="_buttonUpdate_1h2w0_333",oH="_buttonDelete_1h2w0_365",rH="_commentsUpdateVisibility_1h2w0_399",iH="_buttonClose_1h2w0_435",sH="_containerUpdateComment_1h2w0_447",aH="_textTarea_1h2w0_461",lH="_buttonFormUpdate_1h2w0_481",Gt={messageError:HU,containerFixed:$U,mainButton:WU,topSection:qU,containerInputCreateComment:GU,buttonCreateNewComment:KU,containerComment:YU,userImage:QU,commentContent:ZU,commentUsername:JU,commentText:XU,commentDate:eH,updateAndDeleteButtonContainer:tH,buttonUpdate:nH,buttonDelete:oH,commentsUpdateVisibility:rH,buttonClose:iH,containerUpdateComment:sH,textTarea:aH,buttonFormUpdate:lH};function cH({params:n}){const r=Eo(),l=Zo(),d=Ql(),h=Qe(ue=>ue.JWTVerify),p=Qe(ue=>ue.getComments),k=Qe(ue=>ue.commentsBlog),b=Qe(ue=>ue.detailedCommentBlog);let[g,v]=J.useState("");const[A,x]=J.useState(""),[_,C]=J.useState("none"),[M,T]=J.useState("none"),[O,P]=J.useState("1"),j=JSON.parse(localStorage.getItem("access")),R=JSON.parse(localStorage.getItem("username")),L=new URLSearchParams(location.search).get("unique_brand"),[q,ee]=J.useState("0");J.useEffect(()=>{Je(()=>import("./index-0da35582.js"),[]).then(ue=>{r(ue.axiosGetCommentsBlog(n))})},[n,k.info]),J.useEffect(()=>{L&&Je(()=>import("./index-0da35582.js"),[]).then(ue=>{r(ue.axiosDetailedCommentsBlog({method:"get",jwt:j,unique_brand:L}))})},[L]),J.useEffect(()=>{b.info&&x(b.info.comment)},[b.info]);function G(ue){v(ue.target.value)}function V(ue){ue.preventDefault(),g?h.status==="fulfilled"&&j&&R?(P("0"),Je(()=>import("./index-0da35582.js"),[]).then(ze=>{r(ze.axiosCommentsBlog({method:"post",jwt:j,slug:d.slug,content:g}))}),v("")):Ve.fire({icon:"warning",title:"Oops...",text:"Tienes que estar registrado!",footer:`<a class=${Gt.messageError} href="https://critianrodriguez042502.github.io/agency_view/#/access/signin"> Ingresa a tu cuenta </a>`}):Ve.fire({icon:"error",title:"Oops...",text:"No puedes enviar datos vacios!"})}function X(){setTimeout(()=>{P("1")},350)}setTimeout(()=>{ee("1")},350);function Q(ue){x(ue.target.value)}function ae(ue){ue.preventDefault(),A?(P("0"),Je(()=>import("./index-0da35582.js"),[]).then(ze=>{r(ze.axiosCommentsBlog({method:"patch",jwt:j,unique_key:L,content:A}))}),T("none"),l(`/blogs/blog_detail/${d.slug}`)):Ve.fire({icon:"error",title:"Oops...",text:"No puedes enviar datos vacios!"})}function pe(ue){C("initial")}function me(ue){C("none")}function Pe(ue){T("none")}function De(){var ke,se;X();const ue=(ke=p.info.results.data)==null?void 0:ke.filter(ce=>ce.user.username===R),ze=(se=p.info.results.data)==null?void 0:se.filter(ce=>ce.user.username!==R);return D.jsxs("div",{children:[ue==null?void 0:ue.map(function(ce){return D.jsxs("div",{className:Gt.containerComment,children:[D.jsx("div",{className:Gt.userImage,children:ce.user.img===null?D.jsx("img",{src:"https://cdn-icons-png.flaticon.com/512/17/17004.png",alt:"img",width:70}):D.jsx("img",{src:`https://server-agency-1203.onrender.com${ce.user.img}`,alt:"img",width:70})}),D.jsxs("div",{className:Gt.commentContent,children:[D.jsx("h2",{className:Gt.commentUsername,children:ce.user.username}),D.jsxs("p",{className:Gt.commentText,children:[" ",ce.comments," "]}),D.jsx("hr",{style:{border:"2px solid gray"}}),D.jsxs("div",{className:Gt.updateAndDeleteButtonContainer,children:[D.jsxs("aside",{children:[D.jsx("button",{className:Gt.buttonUpdate,onClick:xe=>{T("initial"),l(`/blogs/blog_detail/${d.slug}?unique_brand=${ce.unique_brand}`),ee("0")},children:"Modificar"}),D.jsx("button",{className:Gt.buttonDelete,onClick:xe=>{P("0"),Je(()=>import("./index-0da35582.js"),[]).then(Ae=>{r(Ae.axiosCommentsBlog({method:"delete",jwt:j,unique_key:ce.unique_brand}))})},children:"Eliminar"})]}),D.jsx("aside",{children:D.jsxs("b",{className:Gt.commentDate,children:[" ",ce.creation," "]})})]})]})]},ce.id)}),ze==null?void 0:ze.map(function(ce){return D.jsxs("div",{className:Gt.containerComment,children:[D.jsx("div",{className:Gt.userImage,children:ce.user.img===null?D.jsx("img",{src:"https://cdn-icons-png.flaticon.com/512/17/17004.png",alt:"img",width:70}):D.jsx("img",{src:`https://server-agency-1203.onrender.com${ce.user.img}`,alt:"img",width:70})}),D.jsxs("div",{className:Gt.commentContent,children:[D.jsx("h2",{className:Gt.commentUsername,children:ce.user.username}),D.jsxs("p",{className:Gt.commentText,children:[" ",ce.comments," "]}),D.jsx("hr",{style:{border:"2px solid gray"}}),D.jsxs("b",{className:Gt.commentDate,children:[" ",ce.creation," "]})]})]},ce.id)})]})}return D.jsxs("main",{children:[D.jsx("div",{children:D.jsxs("b",{className:Gt.mainButton,onClick:pe,children:[" ","Comentarios"," "]})}),D.jsxs("article",{style:{display:_},className:Gt.containerFixed,children:[D.jsx("section",{children:D.jsxs("div",{className:Gt.topSection,children:[p.status==="fulfilled"?D.jsx("div",{children:p.info.results.all===1?D.jsx("p",{children:" 1 comentario "}):p.info.results.all===0?D.jsx("p",{children:" No hay comentarios "}):D.jsxs("p",{children:[" ",p.info.results.all," comentarios "]})}):!1,D.jsx("h1",{onClick:me,children:D.jsx(Aa,{})})]})}),D.jsx("section",{children:D.jsxs("form",{className:Gt.containerInputCreateComment,onSubmit:V,children:[D.jsx("input",{type:"text",name:"new_comment",id:"new_comment",value:g,onChange:G,placeholder:"nuevo comentario",required:!0}),D.jsx("button",{className:Gt.buttonCreateNewComment,type:"sumbit",children:"Crear"})]})}),D.jsx("section",{style:{opacity:O},children:p.status==="fulfilled"?De():!1}),D.jsx("section",{style:{display:M},className:Gt.commentsUpdateVisibility,children:D.jsx("div",{style:{opacity:q},className:Gt.inputUpdateComment,children:D.jsxs("aside",{children:[D.jsx("h1",{className:Gt.buttonClose,onClick:Pe,children:D.jsx(Aa,{})}),D.jsxs("form",{className:Gt.containerUpdateComment,onSubmit:ae,children:[D.jsx("textarea",{onChange:Q,value:A,className:Gt.textTarea,name:"updateComment",id:"updateComment",cols:"30",rows:"10",required:!0}),D.jsxs("button",{className:Gt.buttonFormUpdate,type:"submit",children:[" ","Actualizar"," "]})]})]})})})]})]})}function QS(n){return ui({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.5a1 1 0 0 0-.8.4l-1.9 2.533a1 1 0 0 1-1.6 0L5.3 12.4a1 1 0 0 0-.8-.4H2a2 2 0 0 1-2-2V2zm3.5 1a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5z"}}]})(n)}const dH="_containerFixed_hyfzg_5",uH="_containerButtonReactions_hyfzg_41",hH="_buttonReactions_hyfzg_69",fH="_bottonWithoutVisibilityComments_hyfzg_109",pH="_moveToLikes_hyfzg_121",gH="_buttonToMoveToLikes_hyfzg_137",mH="_containerComment_hyfzg_147",kH="_userImage_hyfzg_163",bH="_commentContent_hyfzg_191",wH="_commentUsername_hyfzg_199",vH="_commentText_hyfzg_213",_H="_commentDate_hyfzg_233",yH="_likesContainer_hyfzg_253",CH="_moveToComents_hyfzg_273",AH="_buttonToMoveToComment_hyfzg_289",xH="_likesList_hyfzg_321",EH="_likeUser_hyfzg_333",SH="_likeItem_hyfzg_343",Bn={containerFixed:dH,containerButtonReactions:uH,buttonReactions:hH,bottonWithoutVisibilityComments:fH,moveToLikes:pH,buttonToMoveToLikes:gH,containerComment:mH,userImage:kH,commentContent:bH,commentUsername:wH,commentText:vH,commentDate:_H,likesContainer:yH,moveToComents:CH,buttonToMoveToComment:AH,likesList:xH,likeUser:EH,likeItem:SH};function DH({params:n}){var _;const r=Eo(),l=JSON.parse(localStorage.getItem("access")),d=Qe(C=>C.getUserBlogReactions),[h,p]=J.useState("none"),[k,b]=J.useState("none");J.useEffect(()=>{Je(()=>import("./index-0da35582.js"),[]).then(C=>{r(C.axiosGetUserBlogReactions({jwt:l,slug:n}))})},[]);function g(C){p("initial"),b("none")}function v(C){p("none")}function A(C){b("initial"),p("none")}function x(C){b("none")}return D.jsxs("main",{children:[D.jsx("div",{className:Bn.containerButtonReactions,children:D.jsxs("p",{className:Bn.buttonReactions,onClick:g,children:[D.jsx("span",{style:{margin:"5px"},children:D.jsx(QS,{})}),"Likes y comentarios",D.jsx("span",{style:{margin:"5px"},children:D.jsx(QS,{})})]})}),D.jsxs("section",{className:Bn.containerFixed,style:{display:h},children:[D.jsx("div",{className:Bn.bottonWithoutVisibilityComments,children:D.jsx("b",{onClick:v,children:D.jsx(Aa,{})})}),D.jsxs("div",{className:Bn.moveToLikes,children:[D.jsx("div",{children:d.status==="fulfilled"&&d.info.comments.length===1?D.jsx("b",{children:" 1 Comentario "}):d.status==="fulfilled"&&d.info.comments.length>=1?D.jsxs("b",{children:[d.info.comments.length," Comentarios"]}):D.jsx("b",{children:" Sin comentarios "})}),D.jsx("h1",{className:Bn.buttonToMoveToLikes,onClick:A,children:D.jsx(CU,{})})]}),D.jsx("div",{children:d.status==="fulfilled"&&d.info.comments.length!==0?(_=d.info.comments)==null?void 0:_.map(C=>D.jsxs("div",{className:Bn.containerComment,children:[D.jsx("div",{className:Bn.userImage,children:C.user.img===null?D.jsx("img",{src:"https://cdn-icons-png.flaticon.com/512/17/17004.png",alt:"img",width:70}):D.jsx("img",{src:`https://server-agency-1203.onrender.com${C.user.img}`,alt:"img",width:70})}),D.jsxs("div",{className:Bn.commentContent,children:[D.jsx("h2",{className:Bn.commentUsername,children:C.user.username}),D.jsxs("p",{className:Bn.commentText,children:[" ",C.comments," "]}),D.jsx("hr",{style:{border:"2px solid gray"}}),D.jsxs("b",{className:Bn.commentDate,children:[" ",C.creation," "]})]})]},C.id)):d.status==="fulfilled"&&d.info.comments.length===0?D.jsx("p",{children:" No hay comentarios "}):D.jsx("p",{children:" Hubo algún error "})})]}),D.jsxs("section",{style:{display:k},className:Bn.containerFixed,children:[D.jsx("div",{className:Bn.bottonWithoutVisibilityComments,children:D.jsx("b",{onClick:x,children:D.jsx(Aa,{})})}),D.jsxs("div",{className:Bn.moveToComents,children:[D.jsx("div",{children:d.status==="fulfilled"&&d.info.likes.length===1?D.jsx("b",{children:" 1 like "}):d.status==="fulfilled"&&d.info.likes.length>=1?D.jsxs("b",{children:[" ",d.info.likes.length," likes "]}):D.jsx("b",{children:" Sin Likes "})}),D.jsx("h1",{className:Bn.buttonToMoveToComment,onClick:g,children:D.jsx(yU,{})})]}),D.jsx("div",{className:Bn.likesContainer,children:d.status==="fulfilled"&&d.info.likes.length>0?D.jsx("div",{children:D.jsx("ul",{className:Bn.likesList,children:d.info.likes.map(C=>D.jsx("li",{className:Bn.likeItem,children:D.jsxs("div",{className:Bn.likeUser,children:[C.user.img===null?D.jsx("img",{src:"https://cdn-icons-png.flaticon.com/512/17/17004.png",alt:"img",width:70}):D.jsx("img",{src:`https://server-agency-1203.onrender.com${C.user.img}`,alt:"img",width:70}),D.jsx("h2",{children:C.user.username})]})},C.id))})}):D.jsx("p",{children:"No hay likes."})})]})]})}function TH(){return D.jsx("div",{children:D.jsx("h1",{children:" No existe la pagina '404' "})})}var AI={exports:{}},IH="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",MH=IH,NH=MH;function xI(){}function EI(){}EI.resetWarningCache=xI;var jH=function(){function n(d,h,p,k,b,g){if(g!==NH){var v=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw v.name="Invariant Violation",v}}n.isRequired=n;function r(){return n}var l={array:n,bigint:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:r,element:n,elementType:n,instanceOf:r,node:n,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:EI,resetWarningCache:xI};return l.PropTypes=l,l};AI.exports=jH();var PH=AI.exports;const an=xa(PH);function BH(n){return n&&typeof n=="object"&&"default"in n?n.default:n}var SI=J,OH=BH(SI);function ZS(n,r,l){return r in n?Object.defineProperty(n,r,{value:l,enumerable:!0,configurable:!0,writable:!0}):n[r]=l,n}function LH(n,r){n.prototype=Object.create(r.prototype),n.prototype.constructor=n,n.__proto__=r}var RH=!!(typeof window<"u"&&window.document&&window.document.createElement);function zH(n,r,l){if(typeof n!="function")throw new Error("Expected reducePropsToState to be a function.");if(typeof r!="function")throw new Error("Expected handleStateChangeOnClient to be a function.");if(typeof l<"u"&&typeof l!="function")throw new Error("Expected mapStateOnServer to either be undefined or a function.");function d(h){return h.displayName||h.name||"Component"}return function(p){if(typeof p!="function")throw new Error("Expected WrappedComponent to be a React component.");var k=[],b;function g(){b=n(k.map(function(A){return A.props})),v.canUseDOM?r(b):l&&(b=l(b))}var v=function(A){LH(x,A);function x(){return A.apply(this,arguments)||this}x.peek=function(){return b},x.rewind=function(){if(x.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var M=b;return b=void 0,k=[],M};var _=x.prototype;return _.UNSAFE_componentWillMount=function(){k.push(this),g()},_.componentDidUpdate=function(){g()},_.componentWillUnmount=function(){var M=k.indexOf(this);k.splice(M,1),g()},_.render=function(){return OH.createElement(p,this.props)},x}(SI.PureComponent);return ZS(v,"displayName","SideEffect("+d(p)+")"),ZS(v,"canUseDOM",RH),v}}var FH=zH;const VH=xa(FH);var UH=typeof Element<"u",HH=typeof Map=="function",$H=typeof Set=="function",WH=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function ap(n,r){if(n===r)return!0;if(n&&r&&typeof n=="object"&&typeof r=="object"){if(n.constructor!==r.constructor)return!1;var l,d,h;if(Array.isArray(n)){if(l=n.length,l!=r.length)return!1;for(d=l;d--!==0;)if(!ap(n[d],r[d]))return!1;return!0}var p;if(HH&&n instanceof Map&&r instanceof Map){if(n.size!==r.size)return!1;for(p=n.entries();!(d=p.next()).done;)if(!r.has(d.value[0]))return!1;for(p=n.entries();!(d=p.next()).done;)if(!ap(d.value[1],r.get(d.value[0])))return!1;return!0}if($H&&n instanceof Set&&r instanceof Set){if(n.size!==r.size)return!1;for(p=n.entries();!(d=p.next()).done;)if(!r.has(d.value[0]))return!1;return!0}if(WH&&ArrayBuffer.isView(n)&&ArrayBuffer.isView(r)){if(l=n.length,l!=r.length)return!1;for(d=l;d--!==0;)if(n[d]!==r[d])return!1;return!0}if(n.constructor===RegExp)return n.source===r.source&&n.flags===r.flags;if(n.valueOf!==Object.prototype.valueOf&&typeof n.valueOf=="function"&&typeof r.valueOf=="function")return n.valueOf()===r.valueOf();if(n.toString!==Object.prototype.toString&&typeof n.toString=="function"&&typeof r.toString=="function")return n.toString()===r.toString();if(h=Object.keys(n),l=h.length,l!==Object.keys(r).length)return!1;for(d=l;d--!==0;)if(!Object.prototype.hasOwnProperty.call(r,h[d]))return!1;if(UH&&n instanceof Element)return!1;for(d=l;d--!==0;)if(!((h[d]==="_owner"||h[d]==="__v"||h[d]==="__o")&&n.$$typeof)&&!ap(n[h[d]],r[h[d]]))return!1;return!0}return n!==n&&r!==r}var qH=function(r,l){try{return ap(r,l)}catch(d){if((d.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw d}};const GH=xa(qH);/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var JS=Object.getOwnPropertySymbols,KH=Object.prototype.hasOwnProperty,YH=Object.prototype.propertyIsEnumerable;function QH(n){if(n==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(n)}function ZH(){try{if(!Object.assign)return!1;var n=new String("abc");if(n[5]="de",Object.getOwnPropertyNames(n)[0]==="5")return!1;for(var r={},l=0;l<10;l++)r["_"+String.fromCharCode(l)]=l;var d=Object.getOwnPropertyNames(r).map(function(p){return r[p]});if(d.join("")!=="0123456789")return!1;var h={};return"abcdefghijklmnopqrst".split("").forEach(function(p){h[p]=p}),Object.keys(Object.assign({},h)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var JH=ZH()?Object.assign:function(n,r){for(var l,d=QH(n),h,p=1;p<arguments.length;p++){l=Object(arguments[p]);for(var k in l)KH.call(l,k)&&(d[k]=l[k]);if(JS){h=JS(l);for(var b=0;b<h.length;b++)YH.call(l,h[b])&&(d[h[b]]=l[h[b]])}}return d};const XH=xa(JH);var Rl={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"},Ke={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"};Object.keys(Ke).map(function(n){return Ke[n]});var ln={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src",TARGET:"target"},Fp={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},wh={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},e$=Object.keys(Fp).reduce(function(n,r){return n[Fp[r]]=r,n},{}),t$=[Ke.NOSCRIPT,Ke.SCRIPT,Ke.STYLE],ai="data-react-helmet",n$=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},o$=function(n,r){if(!(n instanceof r))throw new TypeError("Cannot call a class as a function")},r$=function(){function n(r,l){for(var d=0;d<l.length;d++){var h=l[d];h.enumerable=h.enumerable||!1,h.configurable=!0,"value"in h&&(h.writable=!0),Object.defineProperty(r,h.key,h)}}return function(r,l,d){return l&&n(r.prototype,l),d&&n(r,d),r}}(),Wo=Object.assign||function(n){for(var r=1;r<arguments.length;r++){var l=arguments[r];for(var d in l)Object.prototype.hasOwnProperty.call(l,d)&&(n[d]=l[d])}return n},i$=function(n,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof r);n.prototype=Object.create(r&&r.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),r&&(Object.setPrototypeOf?Object.setPrototypeOf(n,r):n.__proto__=r)},XS=function(n,r){var l={};for(var d in n)r.indexOf(d)>=0||Object.prototype.hasOwnProperty.call(n,d)&&(l[d]=n[d]);return l},s$=function(n,r){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r&&(typeof r=="object"||typeof r=="function")?r:n},F0=function(r){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return l===!1?String(r):String(r).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},a$=function(r){var l=kd(r,Ke.TITLE),d=kd(r,wh.TITLE_TEMPLATE);if(d&&l)return d.replace(/%s/g,function(){return Array.isArray(l)?l.join(""):l});var h=kd(r,wh.DEFAULT_TITLE);return l||h||void 0},l$=function(r){return kd(r,wh.ON_CHANGE_CLIENT_STATE)||function(){}},Ib=function(r,l){return l.filter(function(d){return typeof d[r]<"u"}).map(function(d){return d[r]}).reduce(function(d,h){return Wo({},d,h)},{})},c$=function(r,l){return l.filter(function(d){return typeof d[Ke.BASE]<"u"}).map(function(d){return d[Ke.BASE]}).reverse().reduce(function(d,h){if(!d.length)for(var p=Object.keys(h),k=0;k<p.length;k++){var b=p[k],g=b.toLowerCase();if(r.indexOf(g)!==-1&&h[g])return d.concat(h)}return d},[])},Nu=function(r,l,d){var h={};return d.filter(function(p){return Array.isArray(p[r])?!0:(typeof p[r]<"u"&&f$("Helmet: "+r+' should be of type "Array". Instead found type "'+n$(p[r])+'"'),!1)}).map(function(p){return p[r]}).reverse().reduce(function(p,k){var b={};k.filter(function(_){for(var C=void 0,M=Object.keys(_),T=0;T<M.length;T++){var O=M[T],P=O.toLowerCase();l.indexOf(P)!==-1&&!(C===ln.REL&&_[C].toLowerCase()==="canonical")&&!(P===ln.REL&&_[P].toLowerCase()==="stylesheet")&&(C=P),l.indexOf(O)!==-1&&(O===ln.INNER_HTML||O===ln.CSS_TEXT||O===ln.ITEM_PROP)&&(C=O)}if(!C||!_[C])return!1;var j=_[C].toLowerCase();return h[C]||(h[C]={}),b[C]||(b[C]={}),h[C][j]?!1:(b[C][j]=!0,!0)}).reverse().forEach(function(_){return p.push(_)});for(var g=Object.keys(b),v=0;v<g.length;v++){var A=g[v],x=XH({},h[A],b[A]);h[A]=x}return p},[]).reverse()},kd=function(r,l){for(var d=r.length-1;d>=0;d--){var h=r[d];if(h.hasOwnProperty(l))return h[l]}return null},d$=function(r){return{baseTag:c$([ln.HREF,ln.TARGET],r),bodyAttributes:Ib(Rl.BODY,r),defer:kd(r,wh.DEFER),encode:kd(r,wh.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:Ib(Rl.HTML,r),linkTags:Nu(Ke.LINK,[ln.REL,ln.HREF],r),metaTags:Nu(Ke.META,[ln.NAME,ln.CHARSET,ln.HTTPEQUIV,ln.PROPERTY,ln.ITEM_PROP],r),noscriptTags:Nu(Ke.NOSCRIPT,[ln.INNER_HTML],r),onChangeClientState:l$(r),scriptTags:Nu(Ke.SCRIPT,[ln.SRC,ln.INNER_HTML],r),styleTags:Nu(Ke.STYLE,[ln.CSS_TEXT],r),title:a$(r),titleAttributes:Ib(Rl.TITLE,r)}},V0=function(){var n=Date.now();return function(r){var l=Date.now();l-n>16?(n=l,r(l)):setTimeout(function(){V0(r)},0)}}(),e5=function(r){return clearTimeout(r)},u$=typeof window<"u"?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||V0:global.requestAnimationFrame||V0,h$=typeof window<"u"?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||e5:global.cancelAnimationFrame||e5,f$=function(r){return console&&typeof console.warn=="function"&&console.warn(r)},ju=null,p$=function(r){ju&&h$(ju),r.defer?ju=u$(function(){t5(r,function(){ju=null})}):(t5(r),ju=null)},t5=function(r,l){var d=r.baseTag,h=r.bodyAttributes,p=r.htmlAttributes,k=r.linkTags,b=r.metaTags,g=r.noscriptTags,v=r.onChangeClientState,A=r.scriptTags,x=r.styleTags,_=r.title,C=r.titleAttributes;U0(Ke.BODY,h),U0(Ke.HTML,p),g$(_,C);var M={baseTag:qc(Ke.BASE,d),linkTags:qc(Ke.LINK,k),metaTags:qc(Ke.META,b),noscriptTags:qc(Ke.NOSCRIPT,g),scriptTags:qc(Ke.SCRIPT,A),styleTags:qc(Ke.STYLE,x)},T={},O={};Object.keys(M).forEach(function(P){var j=M[P],R=j.newTags,L=j.oldTags;R.length&&(T[P]=R),L.length&&(O[P]=M[P].oldTags)}),l&&l(),v(r,T,O)},DI=function(r){return Array.isArray(r)?r.join(""):r},g$=function(r,l){typeof r<"u"&&document.title!==r&&(document.title=DI(r)),U0(Ke.TITLE,l)},U0=function(r,l){var d=document.getElementsByTagName(r)[0];if(d){for(var h=d.getAttribute(ai),p=h?h.split(","):[],k=[].concat(p),b=Object.keys(l),g=0;g<b.length;g++){var v=b[g],A=l[v]||"";d.getAttribute(v)!==A&&d.setAttribute(v,A),p.indexOf(v)===-1&&p.push(v);var x=k.indexOf(v);x!==-1&&k.splice(x,1)}for(var _=k.length-1;_>=0;_--)d.removeAttribute(k[_]);p.length===k.length?d.removeAttribute(ai):d.getAttribute(ai)!==b.join(",")&&d.setAttribute(ai,b.join(","))}},qc=function(r,l){var d=document.head||document.querySelector(Ke.HEAD),h=d.querySelectorAll(r+"["+ai+"]"),p=Array.prototype.slice.call(h),k=[],b=void 0;return l&&l.length&&l.forEach(function(g){var v=document.createElement(r);for(var A in g)if(g.hasOwnProperty(A))if(A===ln.INNER_HTML)v.innerHTML=g.innerHTML;else if(A===ln.CSS_TEXT)v.styleSheet?v.styleSheet.cssText=g.cssText:v.appendChild(document.createTextNode(g.cssText));else{var x=typeof g[A]>"u"?"":g[A];v.setAttribute(A,x)}v.setAttribute(ai,"true"),p.some(function(_,C){return b=C,v.isEqualNode(_)})?p.splice(b,1):k.push(v)}),p.forEach(function(g){return g.parentNode.removeChild(g)}),k.forEach(function(g){return d.appendChild(g)}),{oldTags:p,newTags:k}},TI=function(r){return Object.keys(r).reduce(function(l,d){var h=typeof r[d]<"u"?d+'="'+r[d]+'"':""+d;return l?l+" "+h:h},"")},m$=function(r,l,d,h){var p=TI(d),k=DI(l);return p?"<"+r+" "+ai+'="true" '+p+">"+F0(k,h)+"</"+r+">":"<"+r+" "+ai+'="true">'+F0(k,h)+"</"+r+">"},k$=function(r,l,d){return l.reduce(function(h,p){var k=Object.keys(p).filter(function(v){return!(v===ln.INNER_HTML||v===ln.CSS_TEXT)}).reduce(function(v,A){var x=typeof p[A]>"u"?A:A+'="'+F0(p[A],d)+'"';return v?v+" "+x:x},""),b=p.innerHTML||p.cssText||"",g=t$.indexOf(r)===-1;return h+"<"+r+" "+ai+'="true" '+k+(g?"/>":">"+b+"</"+r+">")},"")},II=function(r){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Object.keys(r).reduce(function(d,h){return d[Fp[h]||h]=r[h],d},l)},b$=function(r){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Object.keys(r).reduce(function(d,h){return d[e$[h]||h]=r[h],d},l)},w$=function(r,l,d){var h,p=(h={key:l},h[ai]=!0,h),k=II(d,p);return[cr.createElement(Ke.TITLE,k,l)]},v$=function(r,l){return l.map(function(d,h){var p,k=(p={key:h},p[ai]=!0,p);return Object.keys(d).forEach(function(b){var g=Fp[b]||b;if(g===ln.INNER_HTML||g===ln.CSS_TEXT){var v=d.innerHTML||d.cssText;k.dangerouslySetInnerHTML={__html:v}}else k[g]=d[b]}),cr.createElement(r,k)})},as=function(r,l,d){switch(r){case Ke.TITLE:return{toComponent:function(){return w$(r,l.title,l.titleAttributes)},toString:function(){return m$(r,l.title,l.titleAttributes,d)}};case Rl.BODY:case Rl.HTML:return{toComponent:function(){return II(l)},toString:function(){return TI(l)}};default:return{toComponent:function(){return v$(r,l)},toString:function(){return k$(r,l,d)}}}},MI=function(r){var l=r.baseTag,d=r.bodyAttributes,h=r.encode,p=r.htmlAttributes,k=r.linkTags,b=r.metaTags,g=r.noscriptTags,v=r.scriptTags,A=r.styleTags,x=r.title,_=x===void 0?"":x,C=r.titleAttributes;return{base:as(Ke.BASE,l,h),bodyAttributes:as(Rl.BODY,d,h),htmlAttributes:as(Rl.HTML,p,h),link:as(Ke.LINK,k,h),meta:as(Ke.META,b,h),noscript:as(Ke.NOSCRIPT,g,h),script:as(Ke.SCRIPT,v,h),style:as(Ke.STYLE,A,h),title:as(Ke.TITLE,{title:_,titleAttributes:C},h)}},_$=function(r){var l,d;return d=l=function(h){i$(p,h);function p(){return o$(this,p),s$(this,h.apply(this,arguments))}return p.prototype.shouldComponentUpdate=function(b){return!GH(this.props,b)},p.prototype.mapNestedChildrenToProps=function(b,g){if(!g)return null;switch(b.type){case Ke.SCRIPT:case Ke.NOSCRIPT:return{innerHTML:g};case Ke.STYLE:return{cssText:g}}throw new Error("<"+b.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},p.prototype.flattenArrayTypeChildren=function(b){var g,v=b.child,A=b.arrayTypeChildren,x=b.newChildProps,_=b.nestedChildren;return Wo({},A,(g={},g[v.type]=[].concat(A[v.type]||[],[Wo({},x,this.mapNestedChildrenToProps(v,_))]),g))},p.prototype.mapObjectTypeChildren=function(b){var g,v,A=b.child,x=b.newProps,_=b.newChildProps,C=b.nestedChildren;switch(A.type){case Ke.TITLE:return Wo({},x,(g={},g[A.type]=C,g.titleAttributes=Wo({},_),g));case Ke.BODY:return Wo({},x,{bodyAttributes:Wo({},_)});case Ke.HTML:return Wo({},x,{htmlAttributes:Wo({},_)})}return Wo({},x,(v={},v[A.type]=Wo({},_),v))},p.prototype.mapArrayTypeChildrenToProps=function(b,g){var v=Wo({},g);return Object.keys(b).forEach(function(A){var x;v=Wo({},v,(x={},x[A]=b[A],x))}),v},p.prototype.warnOnInvalidChildren=function(b,g){return!0},p.prototype.mapChildrenToProps=function(b,g){var v=this,A={};return cr.Children.forEach(b,function(x){if(!(!x||!x.props)){var _=x.props,C=_.children,M=XS(_,["children"]),T=b$(M);switch(v.warnOnInvalidChildren(x,C),x.type){case Ke.LINK:case Ke.META:case Ke.NOSCRIPT:case Ke.SCRIPT:case Ke.STYLE:A=v.flattenArrayTypeChildren({child:x,arrayTypeChildren:A,newChildProps:T,nestedChildren:C});break;default:g=v.mapObjectTypeChildren({child:x,newProps:g,newChildProps:T,nestedChildren:C});break}}}),g=this.mapArrayTypeChildrenToProps(A,g),g},p.prototype.render=function(){var b=this.props,g=b.children,v=XS(b,["children"]),A=Wo({},v);return g&&(A=this.mapChildrenToProps(g,A)),cr.createElement(r,A)},r$(p,null,[{key:"canUseDOM",set:function(b){r.canUseDOM=b}}]),p}(cr.Component),l.propTypes={base:an.object,bodyAttributes:an.object,children:an.oneOfType([an.arrayOf(an.node),an.node]),defaultTitle:an.string,defer:an.bool,encodeSpecialCharacters:an.bool,htmlAttributes:an.object,link:an.arrayOf(an.object),meta:an.arrayOf(an.object),noscript:an.arrayOf(an.object),onChangeClientState:an.func,script:an.arrayOf(an.object),style:an.arrayOf(an.object),title:an.string,titleAttributes:an.object,titleTemplate:an.string},l.defaultProps={defer:!0,encodeSpecialCharacters:!0},l.peek=r.peek,l.rewind=function(){var h=r.rewind();return h||(h=MI({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),h},d},y$=function(){return null},C$=VH(d$,p$,MI)(y$),qn=_$(C$);qn.renderStatic=qn.rewind;var NI={exports:{}};(function(n,r){(function(l,d){n.exports=d(J)})(typeof self<"u"?self:ho,l=>(()=>{var d={7403:(b,g,v)=>{v.d(g,{default:()=>ke});var A=v(4087),x=v.n(A);const _=function(se){return new RegExp(/<[a-z][\s\S]*>/i).test(se)},C=function(se,ce){return Math.floor(Math.random()*(ce-se+1))+se};var M="TYPE_CHARACTER",T="REMOVE_CHARACTER",O="REMOVE_ALL",P="REMOVE_LAST_VISIBLE_NODE",j="PAUSE_FOR",R="CALL_FUNCTION",L="ADD_HTML_TAG_ELEMENT",q="CHANGE_DELETE_SPEED",ee="CHANGE_DELAY",G="CHANGE_CURSOR",V="PASTE_STRING",X="HTML_TAG";function Q(se){return Q=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(ce){return typeof ce}:function(ce){return ce&&typeof Symbol=="function"&&ce.constructor===Symbol&&ce!==Symbol.prototype?"symbol":typeof ce},Q(se)}function ae(se,ce){var xe=Object.keys(se);if(Object.getOwnPropertySymbols){var Ae=Object.getOwnPropertySymbols(se);ce&&(Ae=Ae.filter(function(Pt){return Object.getOwnPropertyDescriptor(se,Pt).enumerable})),xe.push.apply(xe,Ae)}return xe}function pe(se){for(var ce=1;ce<arguments.length;ce++){var xe=arguments[ce]!=null?arguments[ce]:{};ce%2?ae(Object(xe),!0).forEach(function(Ae){ue(se,Ae,xe[Ae])}):Object.getOwnPropertyDescriptors?Object.defineProperties(se,Object.getOwnPropertyDescriptors(xe)):ae(Object(xe)).forEach(function(Ae){Object.defineProperty(se,Ae,Object.getOwnPropertyDescriptor(xe,Ae))})}return se}function me(se){return function(ce){if(Array.isArray(ce))return Pe(ce)}(se)||function(ce){if(typeof Symbol<"u"&&ce[Symbol.iterator]!=null||ce["@@iterator"]!=null)return Array.from(ce)}(se)||function(ce,xe){if(ce){if(typeof ce=="string")return Pe(ce,xe);var Ae=Object.prototype.toString.call(ce).slice(8,-1);return Ae==="Object"&&ce.constructor&&(Ae=ce.constructor.name),Ae==="Map"||Ae==="Set"?Array.from(ce):Ae==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Ae)?Pe(ce,xe):void 0}}(se)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function Pe(se,ce){(ce==null||ce>se.length)&&(ce=se.length);for(var xe=0,Ae=new Array(ce);xe<ce;xe++)Ae[xe]=se[xe];return Ae}function De(se,ce){for(var xe=0;xe<ce.length;xe++){var Ae=ce[xe];Ae.enumerable=Ae.enumerable||!1,Ae.configurable=!0,"value"in Ae&&(Ae.writable=!0),Object.defineProperty(se,ze(Ae.key),Ae)}}function ue(se,ce,xe){return(ce=ze(ce))in se?Object.defineProperty(se,ce,{value:xe,enumerable:!0,configurable:!0,writable:!0}):se[ce]=xe,se}function ze(se){var ce=function(xe,Ae){if(Q(xe)!=="object"||xe===null)return xe;var Pt=xe[Symbol.toPrimitive];if(Pt!==void 0){var te=Pt.call(xe,"string");if(Q(te)!=="object")return te;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(xe)}(se);return Q(ce)==="symbol"?ce:String(ce)}const ke=function(){function se(Ae,Pt){var te=this;if(function(Ce,Ne){if(!(Ce instanceof Ne))throw new TypeError("Cannot call a class as a function")}(this,se),ue(this,"state",{cursorAnimation:null,lastFrameTime:null,pauseUntil:null,eventQueue:[],eventLoop:null,eventLoopPaused:!1,reverseCalledEvents:[],calledEvents:[],visibleNodes:[],initialOptions:null,elements:{container:null,wrapper:document.createElement("span"),cursor:document.createElement("span")}}),ue(this,"options",{strings:null,cursor:"|",delay:"natural",pauseFor:1500,deleteSpeed:"natural",loop:!1,autoStart:!1,devMode:!1,skipAddStyles:!1,wrapperClassName:"Typewriter__wrapper",cursorClassName:"Typewriter__cursor",stringSplitter:null,onCreateTextNode:null,onRemoveNode:null}),ue(this,"setupWrapperElement",function(){te.state.elements.container&&(te.state.elements.wrapper.className=te.options.wrapperClassName,te.state.elements.cursor.className=te.options.cursorClassName,te.state.elements.cursor.innerHTML=te.options.cursor,te.state.elements.container.innerHTML="",te.state.elements.container.appendChild(te.state.elements.wrapper),te.state.elements.container.appendChild(te.state.elements.cursor))}),ue(this,"start",function(){return te.state.eventLoopPaused=!1,te.runEventLoop(),te}),ue(this,"pause",function(){return te.state.eventLoopPaused=!0,te}),ue(this,"stop",function(){return te.state.eventLoop&&((0,A.cancel)(te.state.eventLoop),te.state.eventLoop=null),te}),ue(this,"pauseFor",function(Ce){return te.addEventToQueue(j,{ms:Ce}),te}),ue(this,"typeOutAllStrings",function(){return typeof te.options.strings=="string"?(te.typeString(te.options.strings).pauseFor(te.options.pauseFor),te):(te.options.strings.forEach(function(Ce){te.typeString(Ce).pauseFor(te.options.pauseFor).deleteAll(te.options.deleteSpeed)}),te)}),ue(this,"typeString",function(Ce){var Ne=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(_(Ce))return te.typeOutHTMLString(Ce,Ne);if(Ce){var Xe=(te.options||{}).stringSplitter,_t=typeof Xe=="function"?Xe(Ce):Ce.split("");te.typeCharacters(_t,Ne)}return te}),ue(this,"pasteString",function(Ce){var Ne=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;return _(Ce)?te.typeOutHTMLString(Ce,Ne,!0):(Ce&&te.addEventToQueue(V,{character:Ce,node:Ne}),te)}),ue(this,"typeOutHTMLString",function(Ce){var Ne=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,Xe=arguments.length>2?arguments[2]:void 0,_t=function(Bo){var Ye=document.createElement("div");return Ye.innerHTML=Bo,Ye.childNodes}(Ce);if(_t.length>0)for(var it=0;it<_t.length;it++){var xt=_t[it],In=xt.innerHTML;xt&&xt.nodeType!==3?(xt.innerHTML="",te.addEventToQueue(L,{node:xt,parentNode:Ne}),Xe?te.pasteString(In,xt):te.typeString(In,xt)):xt.textContent&&(Xe?te.pasteString(xt.textContent,Ne):te.typeString(xt.textContent,Ne))}return te}),ue(this,"deleteAll",function(){var Ce=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"natural";return te.addEventToQueue(O,{speed:Ce}),te}),ue(this,"changeDeleteSpeed",function(Ce){if(!Ce)throw new Error("Must provide new delete speed");return te.addEventToQueue(q,{speed:Ce}),te}),ue(this,"changeDelay",function(Ce){if(!Ce)throw new Error("Must provide new delay");return te.addEventToQueue(ee,{delay:Ce}),te}),ue(this,"changeCursor",function(Ce){if(!Ce)throw new Error("Must provide new cursor");return te.addEventToQueue(G,{cursor:Ce}),te}),ue(this,"deleteChars",function(Ce){if(!Ce)throw new Error("Must provide amount of characters to delete");for(var Ne=0;Ne<Ce;Ne++)te.addEventToQueue(T);return te}),ue(this,"callFunction",function(Ce,Ne){if(!Ce||typeof Ce!="function")throw new Error("Callback must be a function");return te.addEventToQueue(R,{cb:Ce,thisArg:Ne}),te}),ue(this,"typeCharacters",function(Ce){var Ne=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Ce||!Array.isArray(Ce))throw new Error("Characters must be an array");return Ce.forEach(function(Xe){te.addEventToQueue(M,{character:Xe,node:Ne})}),te}),ue(this,"removeCharacters",function(Ce){if(!Ce||!Array.isArray(Ce))throw new Error("Characters must be an array");return Ce.forEach(function(){te.addEventToQueue(T)}),te}),ue(this,"addEventToQueue",function(Ce,Ne){var Xe=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return te.addEventToStateProperty(Ce,Ne,Xe,"eventQueue")}),ue(this,"addReverseCalledEvent",function(Ce,Ne){var Xe=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return te.options.loop?te.addEventToStateProperty(Ce,Ne,Xe,"reverseCalledEvents"):te}),ue(this,"addEventToStateProperty",function(Ce,Ne){var Xe=arguments.length>2&&arguments[2]!==void 0&&arguments[2],_t=arguments.length>3?arguments[3]:void 0,it={eventName:Ce,eventArgs:Ne||{}};return te.state[_t]=Xe?[it].concat(me(te.state[_t])):[].concat(me(te.state[_t]),[it]),te}),ue(this,"runEventLoop",function(){te.state.lastFrameTime||(te.state.lastFrameTime=Date.now());var Ce=Date.now(),Ne=Ce-te.state.lastFrameTime;if(!te.state.eventQueue.length){if(!te.options.loop)return;te.state.eventQueue=me(te.state.calledEvents),te.state.calledEvents=[],te.options=pe({},te.state.initialOptions)}if(te.state.eventLoop=x()(te.runEventLoop),!te.state.eventLoopPaused){if(te.state.pauseUntil){if(Ce<te.state.pauseUntil)return;te.state.pauseUntil=null}var Xe,_t=me(te.state.eventQueue),it=_t.shift();if(!(Ne<=(Xe=it.eventName===P||it.eventName===T?te.options.deleteSpeed==="natural"?C(40,80):te.options.deleteSpeed:te.options.delay==="natural"?C(120,160):te.options.delay))){var xt=it.eventName,In=it.eventArgs;switch(te.logInDevMode({currentEvent:it,state:te.state,delay:Xe}),xt){case V:case M:var Bo=In.character,Ye=In.node,Gn=document.createTextNode(Bo),so=Gn;te.options.onCreateTextNode&&typeof te.options.onCreateTextNode=="function"&&(so=te.options.onCreateTextNode(Bo,Gn)),so&&(Ye?Ye.appendChild(so):te.state.elements.wrapper.appendChild(so)),te.state.visibleNodes=[].concat(me(te.state.visibleNodes),[{type:"TEXT_NODE",character:Bo,node:so}]);break;case T:_t.unshift({eventName:P,eventArgs:{removingCharacterNode:!0}});break;case j:var Vr=it.eventArgs.ms;te.state.pauseUntil=Date.now()+parseInt(Vr);break;case R:var yt=it.eventArgs,hn=yt.cb,go=yt.thisArg;hn.call(go,{elements:te.state.elements});break;case L:var rn=it.eventArgs,St=rn.node,Xt=rn.parentNode;Xt?Xt.appendChild(St):te.state.elements.wrapper.appendChild(St),te.state.visibleNodes=[].concat(me(te.state.visibleNodes),[{type:X,node:St,parentNode:Xt||te.state.elements.wrapper}]);break;case O:var kr=te.state.visibleNodes,He=In.speed,lt=[];He&&lt.push({eventName:q,eventArgs:{speed:He,temp:!0}});for(var Ut=0,Kn=kr.length;Ut<Kn;Ut++)lt.push({eventName:P,eventArgs:{removingCharacterNode:!1}});He&&lt.push({eventName:q,eventArgs:{speed:te.options.deleteSpeed,temp:!0}}),_t.unshift.apply(_t,lt);break;case P:var Ct=it.eventArgs.removingCharacterNode;if(te.state.visibleNodes.length){var Ht=te.state.visibleNodes.pop(),Oo=Ht.type,mo=Ht.node,Cn=Ht.character;te.options.onRemoveNode&&typeof te.options.onRemoveNode=="function"&&te.options.onRemoveNode({node:mo,character:Cn}),mo&&mo.parentNode.removeChild(mo),Oo===X&&Ct&&_t.unshift({eventName:P,eventArgs:{}})}break;case q:te.options.deleteSpeed=it.eventArgs.speed;break;case ee:te.options.delay=it.eventArgs.delay;break;case G:te.options.cursor=it.eventArgs.cursor,te.state.elements.cursor.innerHTML=it.eventArgs.cursor}te.options.loop&&(it.eventName===P||it.eventArgs&&it.eventArgs.temp||(te.state.calledEvents=[].concat(me(te.state.calledEvents),[it]))),te.state.eventQueue=_t,te.state.lastFrameTime=Ce}}}),Ae)if(typeof Ae=="string"){var Jt=document.querySelector(Ae);if(!Jt)throw new Error("Could not find container element");this.state.elements.container=Jt}else this.state.elements.container=Ae;Pt&&(this.options=pe(pe({},this.options),Pt)),this.state.initialOptions=pe({},this.options),this.init()}var ce,xe;return ce=se,(xe=[{key:"init",value:function(){var Ae,Pt;this.setupWrapperElement(),this.addEventToQueue(G,{cursor:this.options.cursor},!0),this.addEventToQueue(O,null,!0),!window||window.___TYPEWRITER_JS_STYLES_ADDED___||this.options.skipAddStyles||(Ae=".Typewriter__cursor{-webkit-animation:Typewriter-cursor 1s infinite;animation:Typewriter-cursor 1s infinite;margin-left:1px}@-webkit-keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}",(Pt=document.createElement("style")).appendChild(document.createTextNode(Ae)),document.head.appendChild(Pt),window.___TYPEWRITER_JS_STYLES_ADDED___=!0),this.options.autoStart===!0&&this.options.strings&&this.typeOutAllStrings().start()}},{key:"logInDevMode",value:function(Ae){this.options.devMode&&console.log(Ae)}}])&&De(ce.prototype,xe),Object.defineProperty(ce,"prototype",{writable:!1}),se}()},8552:(b,g,v)=>{var A=v(852)(v(5639),"DataView");b.exports=A},1989:(b,g,v)=>{var A=v(1789),x=v(401),_=v(7667),C=v(1327),M=v(1866);function T(O){var P=-1,j=O==null?0:O.length;for(this.clear();++P<j;){var R=O[P];this.set(R[0],R[1])}}T.prototype.clear=A,T.prototype.delete=x,T.prototype.get=_,T.prototype.has=C,T.prototype.set=M,b.exports=T},8407:(b,g,v)=>{var A=v(7040),x=v(4125),_=v(2117),C=v(7518),M=v(4705);function T(O){var P=-1,j=O==null?0:O.length;for(this.clear();++P<j;){var R=O[P];this.set(R[0],R[1])}}T.prototype.clear=A,T.prototype.delete=x,T.prototype.get=_,T.prototype.has=C,T.prototype.set=M,b.exports=T},7071:(b,g,v)=>{var A=v(852)(v(5639),"Map");b.exports=A},3369:(b,g,v)=>{var A=v(4785),x=v(1285),_=v(6e3),C=v(9916),M=v(5265);function T(O){var P=-1,j=O==null?0:O.length;for(this.clear();++P<j;){var R=O[P];this.set(R[0],R[1])}}T.prototype.clear=A,T.prototype.delete=x,T.prototype.get=_,T.prototype.has=C,T.prototype.set=M,b.exports=T},3818:(b,g,v)=>{var A=v(852)(v(5639),"Promise");b.exports=A},8525:(b,g,v)=>{var A=v(852)(v(5639),"Set");b.exports=A},8668:(b,g,v)=>{var A=v(3369),x=v(619),_=v(2385);function C(M){var T=-1,O=M==null?0:M.length;for(this.__data__=new A;++T<O;)this.add(M[T])}C.prototype.add=C.prototype.push=x,C.prototype.has=_,b.exports=C},6384:(b,g,v)=>{var A=v(8407),x=v(7465),_=v(3779),C=v(7599),M=v(4758),T=v(4309);function O(P){var j=this.__data__=new A(P);this.size=j.size}O.prototype.clear=x,O.prototype.delete=_,O.prototype.get=C,O.prototype.has=M,O.prototype.set=T,b.exports=O},2705:(b,g,v)=>{var A=v(5639).Symbol;b.exports=A},1149:(b,g,v)=>{var A=v(5639).Uint8Array;b.exports=A},577:(b,g,v)=>{var A=v(852)(v(5639),"WeakMap");b.exports=A},4963:b=>{b.exports=function(g,v){for(var A=-1,x=g==null?0:g.length,_=0,C=[];++A<x;){var M=g[A];v(M,A,g)&&(C[_++]=M)}return C}},4636:(b,g,v)=>{var A=v(2545),x=v(5694),_=v(1469),C=v(4144),M=v(5776),T=v(6719),O=Object.prototype.hasOwnProperty;b.exports=function(P,j){var R=_(P),L=!R&&x(P),q=!R&&!L&&C(P),ee=!R&&!L&&!q&&T(P),G=R||L||q||ee,V=G?A(P.length,String):[],X=V.length;for(var Q in P)!j&&!O.call(P,Q)||G&&(Q=="length"||q&&(Q=="offset"||Q=="parent")||ee&&(Q=="buffer"||Q=="byteLength"||Q=="byteOffset")||M(Q,X))||V.push(Q);return V}},2488:b=>{b.exports=function(g,v){for(var A=-1,x=v.length,_=g.length;++A<x;)g[_+A]=v[A];return g}},2908:b=>{b.exports=function(g,v){for(var A=-1,x=g==null?0:g.length;++A<x;)if(v(g[A],A,g))return!0;return!1}},8470:(b,g,v)=>{var A=v(7813);b.exports=function(x,_){for(var C=x.length;C--;)if(A(x[C][0],_))return C;return-1}},8866:(b,g,v)=>{var A=v(2488),x=v(1469);b.exports=function(_,C,M){var T=C(_);return x(_)?T:A(T,M(_))}},4239:(b,g,v)=>{var A=v(2705),x=v(9607),_=v(2333),C=A?A.toStringTag:void 0;b.exports=function(M){return M==null?M===void 0?"[object Undefined]":"[object Null]":C&&C in Object(M)?x(M):_(M)}},9454:(b,g,v)=>{var A=v(4239),x=v(7005);b.exports=function(_){return x(_)&&A(_)=="[object Arguments]"}},939:(b,g,v)=>{var A=v(2492),x=v(7005);b.exports=function _(C,M,T,O,P){return C===M||(C==null||M==null||!x(C)&&!x(M)?C!=C&&M!=M:A(C,M,T,O,_,P))}},2492:(b,g,v)=>{var A=v(6384),x=v(7114),_=v(8351),C=v(6096),M=v(4160),T=v(1469),O=v(4144),P=v(6719),j="[object Arguments]",R="[object Array]",L="[object Object]",q=Object.prototype.hasOwnProperty;b.exports=function(ee,G,V,X,Q,ae){var pe=T(ee),me=T(G),Pe=pe?R:M(ee),De=me?R:M(G),ue=(Pe=Pe==j?L:Pe)==L,ze=(De=De==j?L:De)==L,ke=Pe==De;if(ke&&O(ee)){if(!O(G))return!1;pe=!0,ue=!1}if(ke&&!ue)return ae||(ae=new A),pe||P(ee)?x(ee,G,V,X,Q,ae):_(ee,G,Pe,V,X,Q,ae);if(!(1&V)){var se=ue&&q.call(ee,"__wrapped__"),ce=ze&&q.call(G,"__wrapped__");if(se||ce){var xe=se?ee.value():ee,Ae=ce?G.value():G;return ae||(ae=new A),Q(xe,Ae,V,X,ae)}}return!!ke&&(ae||(ae=new A),C(ee,G,V,X,Q,ae))}},8458:(b,g,v)=>{var A=v(3560),x=v(5346),_=v(3218),C=v(346),M=/^\[object .+?Constructor\]$/,T=Function.prototype,O=Object.prototype,P=T.toString,j=O.hasOwnProperty,R=RegExp("^"+P.call(j).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");b.exports=function(L){return!(!_(L)||x(L))&&(A(L)?R:M).test(C(L))}},8749:(b,g,v)=>{var A=v(4239),x=v(1780),_=v(7005),C={};C["[object Float32Array]"]=C["[object Float64Array]"]=C["[object Int8Array]"]=C["[object Int16Array]"]=C["[object Int32Array]"]=C["[object Uint8Array]"]=C["[object Uint8ClampedArray]"]=C["[object Uint16Array]"]=C["[object Uint32Array]"]=!0,C["[object Arguments]"]=C["[object Array]"]=C["[object ArrayBuffer]"]=C["[object Boolean]"]=C["[object DataView]"]=C["[object Date]"]=C["[object Error]"]=C["[object Function]"]=C["[object Map]"]=C["[object Number]"]=C["[object Object]"]=C["[object RegExp]"]=C["[object Set]"]=C["[object String]"]=C["[object WeakMap]"]=!1,b.exports=function(M){return _(M)&&x(M.length)&&!!C[A(M)]}},280:(b,g,v)=>{var A=v(5726),x=v(6916),_=Object.prototype.hasOwnProperty;b.exports=function(C){if(!A(C))return x(C);var M=[];for(var T in Object(C))_.call(C,T)&&T!="constructor"&&M.push(T);return M}},2545:b=>{b.exports=function(g,v){for(var A=-1,x=Array(g);++A<g;)x[A]=v(A);return x}},1717:b=>{b.exports=function(g){return function(v){return g(v)}}},4757:b=>{b.exports=function(g,v){return g.has(v)}},4429:(b,g,v)=>{var A=v(5639)["__core-js_shared__"];b.exports=A},7114:(b,g,v)=>{var A=v(8668),x=v(2908),_=v(4757);b.exports=function(C,M,T,O,P,j){var R=1&T,L=C.length,q=M.length;if(L!=q&&!(R&&q>L))return!1;var ee=j.get(C),G=j.get(M);if(ee&&G)return ee==M&&G==C;var V=-1,X=!0,Q=2&T?new A:void 0;for(j.set(C,M),j.set(M,C);++V<L;){var ae=C[V],pe=M[V];if(O)var me=R?O(pe,ae,V,M,C,j):O(ae,pe,V,C,M,j);if(me!==void 0){if(me)continue;X=!1;break}if(Q){if(!x(M,function(Pe,De){if(!_(Q,De)&&(ae===Pe||P(ae,Pe,T,O,j)))return Q.push(De)})){X=!1;break}}else if(ae!==pe&&!P(ae,pe,T,O,j)){X=!1;break}}return j.delete(C),j.delete(M),X}},8351:(b,g,v)=>{var A=v(2705),x=v(1149),_=v(7813),C=v(7114),M=v(8776),T=v(1814),O=A?A.prototype:void 0,P=O?O.valueOf:void 0;b.exports=function(j,R,L,q,ee,G,V){switch(L){case"[object DataView]":if(j.byteLength!=R.byteLength||j.byteOffset!=R.byteOffset)return!1;j=j.buffer,R=R.buffer;case"[object ArrayBuffer]":return!(j.byteLength!=R.byteLength||!G(new x(j),new x(R)));case"[object Boolean]":case"[object Date]":case"[object Number]":return _(+j,+R);case"[object Error]":return j.name==R.name&&j.message==R.message;case"[object RegExp]":case"[object String]":return j==R+"";case"[object Map]":var X=M;case"[object Set]":var Q=1&q;if(X||(X=T),j.size!=R.size&&!Q)return!1;var ae=V.get(j);if(ae)return ae==R;q|=2,V.set(j,R);var pe=C(X(j),X(R),q,ee,G,V);return V.delete(j),pe;case"[object Symbol]":if(P)return P.call(j)==P.call(R)}return!1}},6096:(b,g,v)=>{var A=v(8234),x=Object.prototype.hasOwnProperty;b.exports=function(_,C,M,T,O,P){var j=1&M,R=A(_),L=R.length;if(L!=A(C).length&&!j)return!1;for(var q=L;q--;){var ee=R[q];if(!(j?ee in C:x.call(C,ee)))return!1}var G=P.get(_),V=P.get(C);if(G&&V)return G==C&&V==_;var X=!0;P.set(_,C),P.set(C,_);for(var Q=j;++q<L;){var ae=_[ee=R[q]],pe=C[ee];if(T)var me=j?T(pe,ae,ee,C,_,P):T(ae,pe,ee,_,C,P);if(!(me===void 0?ae===pe||O(ae,pe,M,T,P):me)){X=!1;break}Q||(Q=ee=="constructor")}if(X&&!Q){var Pe=_.constructor,De=C.constructor;Pe==De||!("constructor"in _)||!("constructor"in C)||typeof Pe=="function"&&Pe instanceof Pe&&typeof De=="function"&&De instanceof De||(X=!1)}return P.delete(_),P.delete(C),X}},1957:(b,g,v)=>{var A=typeof v.g=="object"&&v.g&&v.g.Object===Object&&v.g;b.exports=A},8234:(b,g,v)=>{var A=v(8866),x=v(9551),_=v(3674);b.exports=function(C){return A(C,_,x)}},5050:(b,g,v)=>{var A=v(7019);b.exports=function(x,_){var C=x.__data__;return A(_)?C[typeof _=="string"?"string":"hash"]:C.map}},852:(b,g,v)=>{var A=v(8458),x=v(7801);b.exports=function(_,C){var M=x(_,C);return A(M)?M:void 0}},9607:(b,g,v)=>{var A=v(2705),x=Object.prototype,_=x.hasOwnProperty,C=x.toString,M=A?A.toStringTag:void 0;b.exports=function(T){var O=_.call(T,M),P=T[M];try{T[M]=void 0;var j=!0}catch{}var R=C.call(T);return j&&(O?T[M]=P:delete T[M]),R}},9551:(b,g,v)=>{var A=v(4963),x=v(479),_=Object.prototype.propertyIsEnumerable,C=Object.getOwnPropertySymbols,M=C?function(T){return T==null?[]:(T=Object(T),A(C(T),function(O){return _.call(T,O)}))}:x;b.exports=M},4160:(b,g,v)=>{var A=v(8552),x=v(7071),_=v(3818),C=v(8525),M=v(577),T=v(4239),O=v(346),P="[object Map]",j="[object Promise]",R="[object Set]",L="[object WeakMap]",q="[object DataView]",ee=O(A),G=O(x),V=O(_),X=O(C),Q=O(M),ae=T;(A&&ae(new A(new ArrayBuffer(1)))!=q||x&&ae(new x)!=P||_&&ae(_.resolve())!=j||C&&ae(new C)!=R||M&&ae(new M)!=L)&&(ae=function(pe){var me=T(pe),Pe=me=="[object Object]"?pe.constructor:void 0,De=Pe?O(Pe):"";if(De)switch(De){case ee:return q;case G:return P;case V:return j;case X:return R;case Q:return L}return me}),b.exports=ae},7801:b=>{b.exports=function(g,v){return g==null?void 0:g[v]}},1789:(b,g,v)=>{var A=v(4536);b.exports=function(){this.__data__=A?A(null):{},this.size=0}},401:b=>{b.exports=function(g){var v=this.has(g)&&delete this.__data__[g];return this.size-=v?1:0,v}},7667:(b,g,v)=>{var A=v(4536),x=Object.prototype.hasOwnProperty;b.exports=function(_){var C=this.__data__;if(A){var M=C[_];return M==="__lodash_hash_undefined__"?void 0:M}return x.call(C,_)?C[_]:void 0}},1327:(b,g,v)=>{var A=v(4536),x=Object.prototype.hasOwnProperty;b.exports=function(_){var C=this.__data__;return A?C[_]!==void 0:x.call(C,_)}},1866:(b,g,v)=>{var A=v(4536);b.exports=function(x,_){var C=this.__data__;return this.size+=this.has(x)?0:1,C[x]=A&&_===void 0?"__lodash_hash_undefined__":_,this}},5776:b=>{var g=/^(?:0|[1-9]\d*)$/;b.exports=function(v,A){var x=typeof v;return!!(A=A??9007199254740991)&&(x=="number"||x!="symbol"&&g.test(v))&&v>-1&&v%1==0&&v<A}},7019:b=>{b.exports=function(g){var v=typeof g;return v=="string"||v=="number"||v=="symbol"||v=="boolean"?g!=="__proto__":g===null}},5346:(b,g,v)=>{var A,x=v(4429),_=(A=/[^.]+$/.exec(x&&x.keys&&x.keys.IE_PROTO||""))?"Symbol(src)_1."+A:"";b.exports=function(C){return!!_&&_ in C}},5726:b=>{var g=Object.prototype;b.exports=function(v){var A=v&&v.constructor;return v===(typeof A=="function"&&A.prototype||g)}},7040:b=>{b.exports=function(){this.__data__=[],this.size=0}},4125:(b,g,v)=>{var A=v(8470),x=Array.prototype.splice;b.exports=function(_){var C=this.__data__,M=A(C,_);return!(M<0||(M==C.length-1?C.pop():x.call(C,M,1),--this.size,0))}},2117:(b,g,v)=>{var A=v(8470);b.exports=function(x){var _=this.__data__,C=A(_,x);return C<0?void 0:_[C][1]}},7518:(b,g,v)=>{var A=v(8470);b.exports=function(x){return A(this.__data__,x)>-1}},4705:(b,g,v)=>{var A=v(8470);b.exports=function(x,_){var C=this.__data__,M=A(C,x);return M<0?(++this.size,C.push([x,_])):C[M][1]=_,this}},4785:(b,g,v)=>{var A=v(1989),x=v(8407),_=v(7071);b.exports=function(){this.size=0,this.__data__={hash:new A,map:new(_||x),string:new A}}},1285:(b,g,v)=>{var A=v(5050);b.exports=function(x){var _=A(this,x).delete(x);return this.size-=_?1:0,_}},6e3:(b,g,v)=>{var A=v(5050);b.exports=function(x){return A(this,x).get(x)}},9916:(b,g,v)=>{var A=v(5050);b.exports=function(x){return A(this,x).has(x)}},5265:(b,g,v)=>{var A=v(5050);b.exports=function(x,_){var C=A(this,x),M=C.size;return C.set(x,_),this.size+=C.size==M?0:1,this}},8776:b=>{b.exports=function(g){var v=-1,A=Array(g.size);return g.forEach(function(x,_){A[++v]=[_,x]}),A}},4536:(b,g,v)=>{var A=v(852)(Object,"create");b.exports=A},6916:(b,g,v)=>{var A=v(5569)(Object.keys,Object);b.exports=A},1167:(b,g,v)=>{b=v.nmd(b);var A=v(1957),x=g&&!g.nodeType&&g,_=x&&b&&!b.nodeType&&b,C=_&&_.exports===x&&A.process,M=function(){try{return _&&_.require&&_.require("util").types||C&&C.binding&&C.binding("util")}catch{}}();b.exports=M},2333:b=>{var g=Object.prototype.toString;b.exports=function(v){return g.call(v)}},5569:b=>{b.exports=function(g,v){return function(A){return g(v(A))}}},5639:(b,g,v)=>{var A=v(1957),x=typeof self=="object"&&self&&self.Object===Object&&self,_=A||x||Function("return this")();b.exports=_},619:b=>{b.exports=function(g){return this.__data__.set(g,"__lodash_hash_undefined__"),this}},2385:b=>{b.exports=function(g){return this.__data__.has(g)}},1814:b=>{b.exports=function(g){var v=-1,A=Array(g.size);return g.forEach(function(x){A[++v]=x}),A}},7465:(b,g,v)=>{var A=v(8407);b.exports=function(){this.__data__=new A,this.size=0}},3779:b=>{b.exports=function(g){var v=this.__data__,A=v.delete(g);return this.size=v.size,A}},7599:b=>{b.exports=function(g){return this.__data__.get(g)}},4758:b=>{b.exports=function(g){return this.__data__.has(g)}},4309:(b,g,v)=>{var A=v(8407),x=v(7071),_=v(3369);b.exports=function(C,M){var T=this.__data__;if(T instanceof A){var O=T.__data__;if(!x||O.length<199)return O.push([C,M]),this.size=++T.size,this;T=this.__data__=new _(O)}return T.set(C,M),this.size=T.size,this}},346:b=>{var g=Function.prototype.toString;b.exports=function(v){if(v!=null){try{return g.call(v)}catch{}try{return v+""}catch{}}return""}},7813:b=>{b.exports=function(g,v){return g===v||g!=g&&v!=v}},5694:(b,g,v)=>{var A=v(9454),x=v(7005),_=Object.prototype,C=_.hasOwnProperty,M=_.propertyIsEnumerable,T=A(function(){return arguments}())?A:function(O){return x(O)&&C.call(O,"callee")&&!M.call(O,"callee")};b.exports=T},1469:b=>{var g=Array.isArray;b.exports=g},8612:(b,g,v)=>{var A=v(3560),x=v(1780);b.exports=function(_){return _!=null&&x(_.length)&&!A(_)}},4144:(b,g,v)=>{b=v.nmd(b);var A=v(5639),x=v(5062),_=g&&!g.nodeType&&g,C=_&&b&&!b.nodeType&&b,M=C&&C.exports===_?A.Buffer:void 0,T=(M?M.isBuffer:void 0)||x;b.exports=T},8446:(b,g,v)=>{var A=v(939);b.exports=function(x,_){return A(x,_)}},3560:(b,g,v)=>{var A=v(4239),x=v(3218);b.exports=function(_){if(!x(_))return!1;var C=A(_);return C=="[object Function]"||C=="[object GeneratorFunction]"||C=="[object AsyncFunction]"||C=="[object Proxy]"}},1780:b=>{b.exports=function(g){return typeof g=="number"&&g>-1&&g%1==0&&g<=9007199254740991}},3218:b=>{b.exports=function(g){var v=typeof g;return g!=null&&(v=="object"||v=="function")}},7005:b=>{b.exports=function(g){return g!=null&&typeof g=="object"}},6719:(b,g,v)=>{var A=v(8749),x=v(1717),_=v(1167),C=_&&_.isTypedArray,M=C?x(C):A;b.exports=M},3674:(b,g,v)=>{var A=v(4636),x=v(280),_=v(8612);b.exports=function(C){return _(C)?A(C):x(C)}},479:b=>{b.exports=function(){return[]}},5062:b=>{b.exports=function(){return!1}},75:function(b){(function(){var g,v,A,x,_,C;typeof performance<"u"&&performance!==null&&performance.now?b.exports=function(){return performance.now()}:typeof process<"u"&&process!==null&&process.hrtime?(b.exports=function(){return(g()-_)/1e6},v=process.hrtime,x=(g=function(){var M;return 1e9*(M=v())[0]+M[1]})(),C=1e9*process.uptime(),_=x-C):Date.now?(b.exports=function(){return Date.now()-A},A=Date.now()):(b.exports=function(){return new Date().getTime()-A},A=new Date().getTime())}).call(this)},4087:(b,g,v)=>{for(var A=v(75),x=typeof window>"u"?v.g:window,_=["moz","webkit"],C="AnimationFrame",M=x["request"+C],T=x["cancel"+C]||x["cancelRequest"+C],O=0;!M&&O<_.length;O++)M=x[_[O]+"Request"+C],T=x[_[O]+"Cancel"+C]||x[_[O]+"CancelRequest"+C];if(!M||!T){var P=0,j=0,R=[];M=function(L){if(R.length===0){var q=A(),ee=Math.max(0,16.666666666666668-(q-P));P=ee+q,setTimeout(function(){var G=R.slice(0);R.length=0;for(var V=0;V<G.length;V++)if(!G[V].cancelled)try{G[V].callback(P)}catch(X){setTimeout(function(){throw X},0)}},Math.round(ee))}return R.push({handle:++j,callback:L,cancelled:!1}),j},T=function(L){for(var q=0;q<R.length;q++)R[q].handle===L&&(R[q].cancelled=!0)}}b.exports=function(L){return M.call(x,L)},b.exports.cancel=function(){T.apply(x,arguments)},b.exports.polyfill=function(L){L||(L=x),L.requestAnimationFrame=M,L.cancelAnimationFrame=T}},8156:b=>{b.exports=l}},h={};function p(b){var g=h[b];if(g!==void 0)return g.exports;var v=h[b]={id:b,loaded:!1,exports:{}};return d[b].call(v.exports,v,v.exports,p),v.loaded=!0,v.exports}p.n=b=>{var g=b&&b.__esModule?()=>b.default:()=>b;return p.d(g,{a:g}),g},p.d=(b,g)=>{for(var v in g)p.o(g,v)&&!p.o(b,v)&&Object.defineProperty(b,v,{enumerable:!0,get:g[v]})},p.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),p.o=(b,g)=>Object.prototype.hasOwnProperty.call(b,g),p.nmd=b=>(b.paths=[],b.children||(b.children=[]),b);var k={};return(()=>{p.d(k,{default:()=>R});var b=p(8156),g=p.n(b),v=p(7403),A=p(8446),x=p.n(A);function _(L){return _=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(q){return typeof q}:function(q){return q&&typeof Symbol=="function"&&q.constructor===Symbol&&q!==Symbol.prototype?"symbol":typeof q},_(L)}function C(L,q){for(var ee=0;ee<q.length;ee++){var G=q[ee];G.enumerable=G.enumerable||!1,G.configurable=!0,"value"in G&&(G.writable=!0),Object.defineProperty(L,P(G.key),G)}}function M(L,q){return M=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(ee,G){return ee.__proto__=G,ee},M(L,q)}function T(L){if(L===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return L}function O(L){return O=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(q){return q.__proto__||Object.getPrototypeOf(q)},O(L)}function P(L){var q=function(ee,G){if(_(ee)!=="object"||ee===null)return ee;var V=ee[Symbol.toPrimitive];if(V!==void 0){var X=V.call(ee,"string");if(_(X)!=="object")return X;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(ee)}(L);return _(q)==="symbol"?q:String(q)}var j=function(L){(function(ae,pe){if(typeof pe!="function"&&pe!==null)throw new TypeError("Super expression must either be null or a function");ae.prototype=Object.create(pe&&pe.prototype,{constructor:{value:ae,writable:!0,configurable:!0}}),Object.defineProperty(ae,"prototype",{writable:!1}),pe&&M(ae,pe)})(Q,L);var q,ee,G,V,X=(G=Q,V=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var ae,pe=O(G);if(V){var me=O(this).constructor;ae=Reflect.construct(pe,arguments,me)}else ae=pe.apply(this,arguments);return function(Pe,De){if(De&&(_(De)==="object"||typeof De=="function"))return De;if(De!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return T(Pe)}(this,ae)});function Q(){var ae,pe,me,Pe;(function(ke,se){if(!(ke instanceof se))throw new TypeError("Cannot call a class as a function")})(this,Q);for(var De=arguments.length,ue=new Array(De),ze=0;ze<De;ze++)ue[ze]=arguments[ze];return pe=T(ae=X.call.apply(X,[this].concat(ue))),Pe={instance:null},(me=P(me="state"))in pe?Object.defineProperty(pe,me,{value:Pe,enumerable:!0,configurable:!0,writable:!0}):pe[me]=Pe,ae}return q=Q,(ee=[{key:"componentDidMount",value:function(){var ae=this,pe=new v.default(this.typewriter,this.props.options);this.setState({instance:pe},function(){var me=ae.props.onInit;me&&me(pe)})}},{key:"componentDidUpdate",value:function(ae){x()(this.props.options,ae.options)||this.setState({instance:new v.default(this.typewriter,this.props.options)})}},{key:"componentWillUnmount",value:function(){this.state.instance&&this.state.instance.stop()}},{key:"render",value:function(){var ae=this,pe=this.props.component;return g().createElement(pe,{ref:function(me){return ae.typewriter=me},className:"Typewriter","data-testid":"typewriter-wrapper"})}}])&&C(q.prototype,ee),Object.defineProperty(q,"prototype",{writable:!1}),Q}(b.Component);j.defaultProps={component:"div"};const R=j})(),k.default})())})(NI);var A$=NI.exports;const x$=xa(A$),E$="_containerInitial1_o0r63_7",S$="_containerContent1_o0r63_23",D$="_tecnologyAndDesignContainer_o0r63_47",T$="_containerImg1_o0r63_93",I$="_containerInitial2_o0r63_117",M$="_containerContent2_o0r63_147",N$="_containerOfAdvantagesItem_o0r63_169",j$="_containerInitial3_o0r63_237",P$="_containerContent3_o0r63_255",B$="_containerImg2_o0r63_297",O$="_containerInitial4_o0r63_321",L$="_containerContent4_o0r63_339",R$="_containerImg3_o0r63_357",z$="_AdvantagesItemTitle_o0r63_601",Hn={containerInitial1:E$,containerContent1:S$,tecnologyAndDesignContainer:D$,containerImg1:T$,containerInitial2:I$,containerContent2:M$,containerOfAdvantagesItem:N$,containerInitial3:j$,containerContent3:P$,containerImg2:B$,containerInitial4:O$,containerContent4:L$,containerImg3:R$,AdvantagesItemTitle:z$};function n5(){return D.jsxs("main",{children:[D.jsxs(qn,{children:[D.jsx("meta",{charset:"UTF-8"}),D.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),D.jsx("title",{children:" Inicio ... "})]}),D.jsxs(hi,{children:[D.jsxs("section",{className:Hn.containerInitial1,children:[D.jsxs("aside",{className:Hn.containerContent1,children:[D.jsx("h1",{children:D.jsx(x$,{options:{strings:["Sistemas personalizados para tu exito empresarial ...","Software y soluciones digitales adaptadas a tu necesidades ...","Diseño a la altura de tus expectativas ...","Convierte tus ideas en software de calidad ...","Software que se ajusta a tus Requisitos ..."],autoStart:!0,loop:!0,delay:25}})}),D.jsxs("div",{className:Hn.tecnologyAndDesignContainer,children:[D.jsx("b",{children:" Desarrollo web "}),D.jsx("b",{children:" Diseño "})]})]}),D.jsx("aside",{className:Hn.containerImg1,children:D.jsx("img",{src:"https://i.pinimg.com/originals/3f/4c/b0/3f4cb0a7ad7ddc1ffebe3c244595ca67.png",alt:"img"})})]}),D.jsxs("section",{className:Hn.containerInitial2,children:[D.jsxs("h1",{children:["¿Porque elegir nuestra ",D.jsx("br",{}),"agencia?"]}),D.jsxs("div",{className:Hn.containerContent2,children:[D.jsx("h2",{children:" Ventajas de la plataforma"}),D.jsxs("div",{className:Hn.containerOfAdvantages,children:[D.jsxs("article",{className:Hn.containerOfAdvantagesItem,children:[D.jsx("h1",{children:" 01 "}),D.jsxs("div",{children:[D.jsx("h3",{className:Hn.AdvantagesItemTitle,children:"Agil desarrollo"}),D.jsx("p",{children:"Los productos digitales se trabajan con metodologiias agiles por lo tanto podemos garantizar un desarrollo fluido y eficiente"})]})]}),D.jsxs("article",{className:Hn.containerOfAdvantagesItem,children:[D.jsx("h1",{children:" 02 "}),D.jsxs("div",{children:[D.jsx("h3",{className:Hn.AdvantagesItemTitle,children:"Diseños atractivos"}),D.jsx("p",{children:"En nuestra agencia de desarrollo de productos de IMPACT X desarrollamos interfaces de usuario funcionales y atractivas."})]})]}),D.jsxs("article",{className:Hn.containerOfAdvantagesItem,children:[D.jsx("h1",{children:" 03 "}),D.jsxs("div",{children:[D.jsx("h3",{className:Hn.AdvantagesItemTitle,children:" Optimizacion "}),D.jsx("p",{children:"Optimizamos continuamente nuestros procesos para ofrecer productos de gran calidad mientras reducimos los costos y tiempos de desarrollo"})]})]})]})]})]}),D.jsxs("section",{className:Hn.containerInitial3,children:[D.jsxs("aside",{className:Hn.containerContent3,children:[D.jsx("h1",{children:"Construimos mas que solo aplicaciones"}),D.jsx("p",{children:"IMPACT X es una agencia de diseño, desarrollo y mantenimiento de productos digitales. cuenta con expertos de mas de 5 años de experiencia que utilizan de forma eficiente y eficaz las herramientas de punta en el desarrollo y diseño para la creacion de proyectos desde cero."})]}),D.jsx("aside",{className:Hn.containerImg2,children:D.jsx("img",{src:"https://cdn-icons-png.flaticon.com/512/1995/1995515.png",alt:"img"})})]}),D.jsx("section",{className:Hn.containerInitial4,children:D.jsxs("aside",{className:Hn.containerContent4,children:[D.jsx("div",{className:Hn.containerImg3,children:D.jsx("img",{src:"https://femcet.com/wp-content/uploads/2021/05/atencion-al-cliente-jpg-800.jpg",alt:"img"})}),D.jsxs("div",{children:[D.jsx("h1",{children:" ¿Tienes dudas?"}),D.jsx("p",{children:"Solicita una demostración con nuestro equipo, totalmente gratis y sin compromiso."}),D.jsx("button",{type:"button",children:" Solicitar demostracion "})]})]})})]})]})}const F$="_containerContent_1g7a4_5",V$="_containerInputs_1g7a4_55",U$="_containerButton_1g7a4_115",H$="_containerImg_1g7a4_155",$$="_containerContact_1g7a4_185",Pu={containerContent:F$,containerInputs:V$,containerButton:U$,containerImg:H$,containerContact:$$};function W$(){return D.jsxs("main",{children:[D.jsxs(qn,{children:[D.jsx("meta",{charset:"UTF-8"}),D.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),D.jsx("title",{children:" Contacto ... "})]}),D.jsx(hi,{children:D.jsxs("section",{className:Pu.containerContact,children:[D.jsxs("aside",{className:Pu.containerContent,children:[D.jsx("h1",{children:"Quieres hacer un proyecto?"}),D.jsx("p",{children:"Solo cuéntanos que tienes en mente, cuáles son tus objetivos y comencemos"}),D.jsxs("form",{className:Pu.containerInputs,children:[D.jsx("label",{htmlFor:"first_name",children:" Nombre y apellido "}),D.jsx("input",{type:"text",id:"first_name",name:"first_name",required:!0}),D.jsx("label",{htmlFor:"last_name",children:" Correo "}),D.jsx("input",{type:"email",id:"email",name:"email",required:!0}),D.jsx("label",{htmlFor:"content",children:" Mensaje "}),D.jsx("textarea",{name:"content",id:"content",cols:"30",rows:"3",required:!0}),D.jsx("div",{className:Pu.containerButton,children:D.jsx("button",{type:"submit",children:" Enviar "})})]})]}),D.jsx("aside",{className:Pu.containerImg,children:D.jsx("img",{src:"https://cdn.icon-icons.com/icons2/1603/PNG/512/message-mail-envelope-email-personal-user_108507.png",alt:"img"})})]})})]})}function o5(n){return ui({tag:"svg",attr:{version:"1",viewBox:"0 0 48 48",enableBackground:"new 0 0 48 48"},child:[{tag:"path",attr:{fill:"#00A344",d:"M24,13c-7.2,0-13,5.8-13,13s5.8,13,13,13s13-5.8,13-13S31.2,13,24,13z M24,35c-5,0-9-4-9-9s4-9,9-9s9,4,9,9 S29,35,24,35z"}},{tag:"path",attr:{fill:"#00C853",d:"M8.5,25.4c4-2.2,9-1.1,11.5,2.5c0.1,0.1,0.2,0.1,0.3,0.1l1.2-0.7c0.1-0.1,0.2-0.2,0.1-0.3 c0-0.2-0.1-0.4-0.1-0.6c0,0,0,0,0,0c0-0.1,0-0.1,0-0.2c0,0,0,0,0,0c0-0.1,0-0.1,0-0.2c0,0,0,0,0,0c0-0.1,0-0.1,0-0.2l0,0 c0-0.1,0-0.1,0.1-0.2c0,0,0,0,0,0c0-0.1,0-0.1,0.1-0.2c0,0,0,0,0,0c0,0,0-0.1,0.1-0.1c0,0,0-0.1,0.1-0.1c0,0,0-0.1,0.1-0.1 c0,0,0.1-0.1,0.1-0.1c0,0,0,0,0,0c0,0,0.1-0.1,0.1-0.1c0,0,0,0,0,0c0,0,0.1-0.1,0.1-0.1c0,0,0,0,0,0c0,0,0.1-0.1,0.1-0.1 c0,0,0,0,0,0c0,0,0.1-0.1,0.1-0.1c0,0,0,0,0.1,0c0.2-0.1,0.4-0.2,0.5-0.2c0.1,0,0.2-0.1,0.2-0.3v-1.3c0-0.1-0.1-0.2-0.2-0.2 c-4.5-0.4-8-4.1-8-8.6c0-4.1,3-7.6,6.9-8.4c0.1,0,0.2-0.1,0.2-0.3V4.8c0-0.1-0.1-0.2-0.2-0.2C16.4,5.5,12,10.4,12,16.3 c0,1.3,0.2,2.6,0.6,3.8c-1.2,0.2-2.5,0.7-3.6,1.3c-5.2,3-7.3,9.2-5.2,14.5C3.9,36,4,36,4.1,36l0.3-0.2c0.1-0.1,0.2-0.2,0.1-0.3 C3.3,31.7,4.8,27.4,8.5,25.4L8.5,25.4z M39,21.4c-1.2-0.7-2.4-1.1-3.6-1.3c0.4-1.2,0.6-2.4,0.6-3.8c0-5.9-4.4-10.8-10.2-11.7 c-0.1,0-0.2,0.1-0.2,0.2v0.4c0,0.1,0.1,0.2,0.2,0.3c4,0.8,6.9,4.3,6.9,8.4c0,4.5-3.5,8.2-8,8.6c-0.1,0-0.2,0.1-0.2,0.2v1.3 c0,0.1,0.1,0.2,0.2,0.3c0.2,0.1,0.4,0.1,0.6,0.2c0,0,0,0,0,0c0,0,0.1,0.1,0.1,0.1c0,0,0,0,0,0c0.1,0,0.1,0.1,0.1,0.1c0,0,0,0,0,0 c0.1,0.1,0.2,0.2,0.3,0.3c0,0,0,0,0,0c0,0,0.1,0.1,0.1,0.1c0,0,0,0,0,0c0,0,0.1,0.1,0.1,0.1c0,0,0,0.1,0,0.1c0,0,0,0.1,0,0.1 c0,0,0,0.1,0.1,0.1c0,0,0,0,0,0c0,0.1,0,0.1,0.1,0.2c0,0,0,0,0,0c0,0.1,0,0.1,0,0.2c0,0,0,0,0,0c0,0.1,0,0.1,0,0.2c0,0,0,0,0,0.1 c0,0,0,0.1,0,0.1c0,0,0,0,0,0.1c0,0.2,0,0.4-0.1,0.6c0,0.1,0,0.2,0.1,0.3l1.2,0.7c0.1,0.1,0.2,0,0.3-0.1c2.6-3.6,7.6-4.8,11.5-2.5 c3.6,2.1,5.2,6.3,3.9,10.1c0,0.1,0,0.2,0.1,0.3l0.3,0.2c0.1,0.1,0.2,0,0.3-0.1C46.3,30.5,44.2,24.3,39,21.4L39,21.4z M30.8,40.3 c-4-2.2-5.5-7.1-3.5-11.1c0.1-0.1,0-0.2-0.1-0.3L26,28.2c-0.1-0.1-0.2,0-0.3,0c-0.2,0.1-0.3,0.3-0.5,0.3c0,0,0,0,0,0 c-0.1,0-0.1,0.1-0.2,0.1c0,0,0,0,0,0c-0.1,0-0.1,0-0.2,0.1c0,0,0,0,0,0c-0.1,0-0.3,0.1-0.4,0.1c0,0,0,0,0,0c-0.1,0-0.1,0-0.2,0 c0,0,0,0-0.1,0c0,0-0.1,0-0.1,0c0,0-0.1,0-0.1,0c0,0-0.1,0-0.1,0c0,0-0.1,0-0.1,0c0,0,0,0-0.1,0c-0.1,0-0.1,0-0.2,0c0,0,0,0,0,0 c-0.1,0-0.1,0-0.2,0c0,0,0,0,0,0c-0.1,0-0.1,0-0.2-0.1c0,0,0,0,0,0c0,0-0.1,0-0.1-0.1c0,0,0,0-0.1,0c-0.2-0.1-0.3-0.2-0.5-0.3 c-0.1-0.1-0.2-0.1-0.3,0l-1.2,0.7c-0.1,0.1-0.1,0.2-0.1,0.3c1.9,4,0.4,8.8-3.5,11.1c-3.6,2.1-8.2,1.3-10.9-1.7 c-0.1-0.1-0.2-0.1-0.3-0.1l-0.3,0.2c-0.1,0.1-0.1,0.2-0.1,0.3c3.6,4.5,10.2,5.8,15.4,2.8c1.2-0.7,2.2-1.5,3-2.4 c0.8,0.9,1.8,1.8,3,2.4c5.2,3,11.7,1.6,15.4-2.8c0.1-0.1,0-0.2-0.1-0.3L42,38.5c-0.1-0.1-0.2,0-0.3,0.1C39,41.5,34.4,42.3,30.8,40.3 L30.8,40.3z"}}]})(n)}function q$(n){return ui({tag:"svg",attr:{version:"1",viewBox:"0 0 48 48",enableBackground:"new 0 0 48 48"},child:[{tag:"path",attr:{fill:"#FFB74D",d:"M10,12c-2.8,0-5-2.2-5-5s2.2-5,5-5s5,2.2,5,5S12.8,12,10,12z"}},{tag:"path",attr:{fill:"#607D8B",d:"M2,22v8l3,2l1,14h8l1-14l3-2v-8c0-4.4-3.6-8-8-8h0C5.6,14,2,17.6,2,22z"}},{tag:"g",attr:{fill:"#263238"},child:[{tag:"path",attr:{d:"M22.4,40.4c-0.6,2.5-1,3.6-2.4,3.6c-0.6,0-1.2-0.5-1.9-1.1c-1-0.8-2.2-1.9-4.1-1.9v2c1.1,0,1.9,0.7,2.8,1.4 c0.9,0.7,1.9,1.6,3.2,1.6c3.1,0,3.8-2.9,4.4-5.2C25,38.2,25.4,37,27,37v-2C23.7,35,22.9,38.1,22.4,40.4z"}},{tag:"polygon",attr:{points:"14.4,40 10,40 10,44 14.1,44"}}]},{tag:"circle",attr:{fill:"#4CAF50",cx:"36",cy:"36",r:"10"}},{tag:"path",attr:{fill:"#fff",d:"M35,34c0.1,0.2,0.1,0.3,0.3,0.4c0.1,0.1,0.3,0.2,0.5,0.4c0.2,0.1,0.5,0.2,0.8,0.3c0.5,0.2,0.9,0.4,1.3,0.6 c0.4,0.2,0.7,0.4,1,0.7c0.3,0.3,0.5,0.6,0.7,0.9c0.2,0.4,0.2,0.8,0.2,1.3c0,0.4-0.1,0.8-0.2,1.2c-0.1,0.4-0.3,0.7-0.6,0.9 c-0.3,0.3-0.6,0.5-0.9,0.6c-0.4,0.2-0.8,0.3-1.2,0.3v1.5h-1.2v-1.5c-0.4,0-0.8-0.1-1.2-0.3c-0.4-0.2-0.7-0.4-1-0.6 c-0.3-0.3-0.5-0.6-0.7-1.1c-0.2-0.4-0.3-0.9-0.3-1.5h2.2c0,0.4,0,0.7,0.1,0.9c0.1,0.2,0.2,0.4,0.4,0.6c0.2,0.1,0.3,0.2,0.5,0.3 c0.2,0.1,0.4,0.1,0.6,0.1c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.3-0.2,0.4-0.3c0.1-0.1,0.2-0.3,0.3-0.4c0.1-0.2,0.1-0.3,0.1-0.5 c0-0.2,0-0.4-0.1-0.6c-0.1-0.2-0.1-0.3-0.3-0.4c-0.1-0.1-0.3-0.3-0.5-0.4c-0.2-0.1-0.4-0.2-0.7-0.3c-0.5-0.2-0.9-0.4-1.3-0.6 c-0.4-0.2-0.7-0.4-1-0.7c-0.3-0.3-0.5-0.6-0.7-0.9c-0.2-0.4-0.2-0.8-0.2-1.3c0-0.4,0.1-0.8,0.2-1.2c0.1-0.3,0.3-0.7,0.6-0.9 c0.3-0.3,0.6-0.5,0.9-0.6c0.4-0.2,0.8-0.3,1.2-0.3v-1.6h1.2v1.6c0.4,0.1,0.8,0.2,1.2,0.4c0.4,0.2,0.6,0.4,0.9,0.7 c0.2,0.3,0.4,0.6,0.6,1c0.1,0.4,0.2,0.9,0.2,1.4h-2.2c0-0.6-0.1-1-0.4-1.3c-0.2-0.3-0.6-0.4-1-0.4c-0.2,0-0.4,0-0.6,0.1 c-0.2,0.1-0.3,0.2-0.4,0.3C35.1,32.7,35,32.8,35,33s-0.1,0.3-0.1,0.5C34.9,33.7,34.9,33.9,35,34z"}}]})(n)}function Sl(n){return ui({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M2 12h2a7.986 7.986 0 0 1 2.337-5.663 7.91 7.91 0 0 1 2.542-1.71 8.12 8.12 0 0 1 6.13-.041A2.488 2.488 0 0 0 17.5 7C18.886 7 20 5.886 20 4.5S18.886 2 17.5 2c-.689 0-1.312.276-1.763.725-2.431-.973-5.223-.958-7.635.059a9.928 9.928 0 0 0-3.18 2.139 9.92 9.92 0 0 0-2.14 3.179A10.005 10.005 0 0 0 2 12zm17.373 3.122c-.401.952-.977 1.808-1.71 2.541s-1.589 1.309-2.542 1.71a8.12 8.12 0 0 1-6.13.041A2.488 2.488 0 0 0 6.5 17C5.114 17 4 18.114 4 19.5S5.114 22 6.5 22c.689 0 1.312-.276 1.763-.725A9.965 9.965 0 0 0 12 22a9.983 9.983 0 0 0 9.217-6.102A9.992 9.992 0 0 0 22 12h-2a7.993 7.993 0 0 1-.627 3.122z"}},{tag:"path",attr:{d:"M12 7.462c-2.502 0-4.538 2.036-4.538 4.538S9.498 16.538 12 16.538s4.538-2.036 4.538-4.538S14.502 7.462 12 7.462zm0 7.076c-1.399 0-2.538-1.139-2.538-2.538S10.601 9.462 12 9.462s2.538 1.139 2.538 2.538-1.139 2.538-2.538 2.538z"}}]})(n)}function G$(n){return ui({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M3.102 20.898c.698.699 1.696 1.068 2.887 1.068 1.742 0 3.855-.778 6.012-2.127 2.156 1.35 4.27 2.127 6.012 2.127 1.19 0 2.188-.369 2.887-1.068 1.269-1.269 1.411-3.413.401-6.039-.358-.932-.854-1.895-1.457-2.859a16.792 16.792 0 0 0 1.457-2.859c1.01-2.626.867-4.771-.401-6.039-.698-.699-1.696-1.068-2.887-1.068-1.742 0-3.855.778-6.012 2.127-2.156-1.35-4.27-2.127-6.012-2.127-1.19 0-2.188.369-2.887 1.068C1.833 4.371 1.69 6.515 2.7 9.141c.359.932.854 1.895 1.457 2.859A16.792 16.792 0 0 0 2.7 14.859c-1.01 2.626-.867 4.77.402 6.039zm16.331-5.321c.689 1.79.708 3.251.052 3.907-.32.32-.815.482-1.473.482-1.167 0-2.646-.503-4.208-1.38a26.611 26.611 0 0 0 4.783-4.784c.336.601.623 1.196.846 1.775zM12 17.417a23.568 23.568 0 0 1-2.934-2.483A23.998 23.998 0 0 1 6.566 12 23.74 23.74 0 0 1 12 6.583a23.568 23.568 0 0 1 2.934 2.483 23.998 23.998 0 0 1 2.5 2.934A23.74 23.74 0 0 1 12 17.417zm6.012-13.383c.657 0 1.152.162 1.473.482.656.656.638 2.117-.052 3.907-.223.579-.51 1.174-.846 1.775a26.448 26.448 0 0 0-4.783-4.784c1.562-.876 3.041-1.38 4.208-1.38zM4.567 8.423c-.689-1.79-.708-3.251-.052-3.907.32-.32.815-.482 1.473-.482 1.167 0 2.646.503 4.208 1.38a26.448 26.448 0 0 0-4.783 4.784 13.934 13.934 0 0 1-.846-1.775zm0 7.154c.223-.579.51-1.174.846-1.775a26.448 26.448 0 0 0 4.783 4.784c-1.563.877-3.041 1.38-4.208 1.38-.657 0-1.152-.162-1.473-.482-.656-.656-.637-2.117.052-3.907z"}},{tag:"circle",attr:{cx:"12",cy:"12",r:"2.574"}}]})(n)}function K$(n){return ui({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M9 9h6v2H9zm0 4h6v2H9z"}},{tag:"path",attr:{d:"m18 5.414 1.707-1.707-1.414-1.414-1.563 1.562C15.483 2.708 13.824 2 12 2s-3.483.708-4.73 1.855L5.707 2.293 4.293 3.707 6 5.414A6.937 6.937 0 0 0 5 9H3v2h2v2H3v2h2c0 3.86 3.141 7 7 7s7-3.14 7-7h2v-2h-2v-2h2V9h-2a6.937 6.937 0 0 0-1-3.586zM17 13v2c0 2.757-2.243 5-5 5s-5-2.243-5-5V9c0-2.757 2.243-5 5-5s5 2.243 5 5v4z"}}]})(n)}function Y$(n){return ui({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M11.219 3.375 8 7.399 4.781 3.375A1.002 1.002 0 0 0 3 4v15c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V4a1.002 1.002 0 0 0-1.781-.625L16 7.399l-3.219-4.024c-.381-.474-1.181-.474-1.562 0zM5 19v-2h14.001v2H5zm10.219-9.375c.381.475 1.182.475 1.563 0L19 6.851 19.001 15H5V6.851l2.219 2.774c.381.475 1.182.475 1.563 0L12 5.601l3.219 4.024z"}}]})(n)}const Q$="_containerAbout1_12y0h_7",Z$="_text_12y0h_45",J$="_iconContainer_12y0h_57",X$="_icon_12y0h_57",eW="_containerAbout2_12y0h_85",tW="_manager_12y0h_97",nW="_iconManager_12y0h_109",oW="_photoManager_12y0h_127",rW="_containerAbout3_12y0h_149",iW="_description_12y0h_167",sW="_containerImagesLaptops_12y0h_183",aW="_containerAbout4_12y0h_227",lW="_title_12y0h_247",cW="_containerImageTeam_12y0h_285",dW="_containerTitleAndText_12y0h_319",uW="_containerContentAbout4_12y0h_475",En={containerAbout1:Q$,text:Z$,iconContainer:J$,icon:X$,containerAbout2:eW,manager:tW,iconManager:nW,photoManager:oW,containerAbout3:rW,description:iW,containerImagesLaptops:sW,containerAbout4:aW,title:lW,containerImageTeam:cW,containerTitleAndText:dW,containerContentAbout4:uW};function hW(){return D.jsxs("main",{children:[D.jsxs(qn,{children:[D.jsx("meta",{charset:"UTF-8"}),D.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),D.jsx("title",{children:" Sobre nosotros ... "})]}),D.jsxs(hi,{children:[D.jsxs("section",{className:En.containerAbout1,children:[D.jsxs("aside",{className:En.containerTitleAndText,children:[D.jsx("h1",{className:En.title,children:"SOBRE NOSOTROS"}),D.jsx("p",{className:En.text,children:"Los productos digitales se han convertido en una parte fundamental de nuestro mundo actual, y su desarrollo ha evolucionado significativamente en los últimos años. Para afrontar los desafíos de este entorno dinámico y competitivo, es esencial adoptar metodologías ágiles."})]}),D.jsxs("div",{className:En.iconContainer,children:[D.jsx("h4",{className:En.icon,children:D.jsx(o5,{})}),D.jsx("h4",{className:En.icon,children:D.jsx(q$,{})}),D.jsx("h4",{className:En.icon,children:D.jsx(o5,{})})]})]}),D.jsxs("section",{className:En.containerAbout2,children:[D.jsxs("aside",{className:En.manager,children:[D.jsx("h1",{children:" GERENTE "}),D.jsx("h4",{className:En.iconManager,children:D.jsx(Y$,{})})]}),D.jsx("aside",{className:En.photoManager,children:D.jsx("img",{src:"https://cdn-icons-png.flaticon.com/512/1995/1995446.png",alt:"img"})})]}),D.jsxs("section",{className:En.containerAbout3,children:[D.jsx("p",{className:En.description,children:"Nuestro equipo altamente capacitado en diseño y desarrollo en JavaScript está comprometido en ofrecer soluciones digitales excepcionales para empresas y startups innovadoras en todo el mundo. Más allá de nuestra sede central en Colombia, en el distrito de Bogotá, tenemos una presencia global que nos permite brindar servicios personalizados y de calidad a clientes en diversos continentes"}),D.jsxs("div",{className:En.containerImagesLaptops,children:[D.jsx("img",{src:"https://img.freepik.com/fotos-premium/experiencia-programacion-persona-que-trabaja-codigos-computadora_23-2150010151.jpg",alt:"Imagen de desarrollador programando en una computadora"}),D.jsx("img",{src:"https://hireline.io/blog/wp-content/uploads/2019/12/Aprender-a-programar-Java.jpg",alt:"Imagen de un teclado y código Java"})]})]}),D.jsxs("section",{className:En.containerAbout4,children:[D.jsxs("div",{className:En.containerContentAbout4,children:[D.jsx("h1",{className:En.title,children:"NUESTROS ENFOQUES"}),D.jsx("p",{className:En.paragraph,children:"- Creemos firmemente que emprender el desarrollo de un producto sin una investigación exhaustiva del negocio y la audiencia objetivo es como disparar al azar en la oscuridad mientras cruzamos los dedos. Nuestro competente equipo utiliza un enfoque metódico para crear experiencias digitales que conducen paso a paso a los negocios hacia resultados exitosos."}),D.jsx("p",{className:En.paragraph,children:"- Pensamos que la usabilidad del producto es como el amor. Debes preocuparte, escuchar y tienes que estar dispuesto a cambiar y arreglar tus infelicidades. Por lo tanto, prestamos especial atención a las pruebas de los usuarios y nuestro objetivo es ofrecer mejores productos que sean rápidamente apreciados por las personas."})]}),D.jsx("div",{className:En.containerImageTeam,children:D.jsx("img",{src:"https://2.bp.blogspot.com/-KwRFJBvUo38/XIJu0Vn82tI/AAAAAAAA9AA/MW5Ej9UIt2YS8zfqXlISB1bpC0FqeDzRgCLcBGAs/s1600/workteam.jpg",alt:"Imagen de un equipo de trabajo"})})]})]})]})}const fW="_containerServices1_1vjt6_7",pW="_servicesContent1_1vjt6_21",gW="_containerImg_1vjt6_101",mW="_containerServices2_1vjt6_113",kW="_servicesContent2_1vjt6_139",bW="_icon_1vjt6_169",wW="_containerServices3_1vjt6_225",vW="_circule_1vjt6_471",zi={containerServices1:fW,servicesContent1:pW,containerImg:gW,containerServices2:mW,servicesContent2:kW,icon:bW,containerServices3:wW,circule:vW};function _W(){const[n,r]=J.useState(1),[l,d]=J.useState(1),[h,p]=J.useState(1);J.useEffect(()=>{n<=5630&&setTimeout(()=>{r(n+140)},20),l<=2300&&setTimeout(()=>{d(l+94)},20),h<=3500&&setTimeout(()=>{p(h+94)},20)},[n,l,h]);function k(){const b="https://server-agency-1203.onrender.com/blog/create/",g={name:"Software"},v={name:"Marketing"},A={name:"Robotica"},x={name:"Videojuegos"},_={name:"Ciberseguridad"};setTimeout(()=>{rt.post(b,g).then(C=>{C.status==200&&console.log(".")}).catch(C=>{console.log(C)})},1e3),setTimeout(()=>{rt.post(b,v).then(C=>{C.status==200&&console.log(".")}).catch(C=>{console.log(C)})},2e3),setTimeout(()=>{rt.post(b,A).then(C=>{C.status==200&&console.log(".")}).catch(C=>{console.log(C)})},3e3),setTimeout(()=>{rt.post(b,x).then(C=>{C.status==200&&console.log(".")}).catch(C=>{console.log(C)})},4e3),setTimeout(()=>{rt.post(b,_).then(C=>{C.status==200&&console.log(".")}).catch(C=>{console.log(C)})},5e3)}return D.jsxs("main",{children:[D.jsxs(qn,{children:[D.jsx("meta",{charset:"UTF-8"}),D.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),D.jsx("title",{children:" Servicios ... "})]}),D.jsxs(hi,{children:[D.jsxs("section",{className:zi.containerServices1,children:[D.jsxs("aside",{className:zi.servicesContent1,children:[D.jsx("h1",{children:" PROGRAMACION DE SOFTWARE "}),D.jsx("p",{children:"Nos fascina transformar los modelos de pensamiento convencionales y generar lo que nunca antes se había ensayado. Tomamos ideas iniciales y desarrollamos entornos exuberantes."}),D.jsxs("div",{children:[D.jsxs("h3",{children:[n," ",D.jsx("span",{children:" + "})]}),D.jsxs("h3",{children:[l," ",D.jsx("span",{children:" + "})]}),D.jsxs("h3",{children:[h," ",D.jsx("span",{children:" + "})]})]})]}),D.jsx("aside",{className:zi.containerImg,children:D.jsx("img",{src:"https://cdn-icons-png.flaticon.com/512/8415/8415599.png",alt:"img"})})]}),D.jsxs("section",{className:zi.containerServices2,children:[D.jsx("h1",{children:" PRODUCTOS DE DESARROLLO DE SOFTWARE"}),D.jsxs("aside",{className:zi.servicesContent2,children:[D.jsxs("div",{children:[D.jsx("h4",{className:zi.icon,children:D.jsx(Sl,{})}),D.jsx("h1",{children:" Equipo de programacion de software "}),D.jsx("p",{children:"Los productos digitales se trabajan con metodologiias agiles por lo tanto podemos garantizar un desarrollo fluido y eficiente"})]}),D.jsxs("div",{children:[D.jsx("h4",{className:zi.icon,children:D.jsx(G$,{})}),D.jsx("h1",{children:" Equipo de programacion de software "}),D.jsx("p",{children:"Los productos digitales se trabajan con metodologiias agiles por lo tanto podemos garantizar un desarrollo fluido y eficiente"})]}),D.jsxs("div",{children:[D.jsx("h4",{className:zi.icon,children:D.jsx(K$,{})}),D.jsx("h1",{children:" Equipo de programacion de software "}),D.jsx("p",{children:"Los productos digitales se trabajan con metodologiias agiles por lo tanto podemos garantizar un desarrollo fluido y eficiente"})]})]})]}),D.jsxs("section",{className:zi.containerServices3,children:[D.jsxs("aside",{children:[D.jsx("h1",{children:" NUESTROS CLIENTES "}),D.jsx("p",{children:"Pensamos que las marcas son el vínculo cultural entre las compañías y sus comunidades."}),D.jsxs("div",{children:[D.jsx("p",{children:D.jsx(Sl,{})}),D.jsx("p",{children:D.jsx(Sl,{})}),D.jsx("p",{children:D.jsx(Sl,{})}),D.jsx("p",{children:D.jsx(Sl,{})}),D.jsx("p",{children:D.jsx(Sl,{})}),D.jsx("p",{onClick:k,children:D.jsx(Sl,{})})]})]}),D.jsx("aside",{className:zi.circule,children:" "})]})]})]})}const yW="_overlay_z34hk_7",CW="_loaderContainer_z34hk_25",AW="_loader_z34hk_25",xW="_rotation_z34hk_1",EW="_containerAllBlogs1_z34hk_87",SW="_categories_z34hk_97",DW="_link_z34hk_109",TW="_searchForm_z34hk_135",IW="_blogContentContainer_z34hk_199",MW="_containerImg_z34hk_237",NW="_blogImage_z34hk_265",jW="_title_z34hk_273",PW="_description_z34hk_287",BW="_creation_z34hk_301",OW="_pagination_z34hk_321",LW="_pageButton_z34hk_335",RW="_containerAllBlogs2_z34hk_407",zW="_blogInfo_z34hk_437",Kt={overlay:yW,loaderContainer:CW,loader:AW,rotation:xW,containerAllBlogs1:EW,categories:SW,link:DW,searchForm:TW,blogContentContainer:IW,containerImg:MW,blogImage:NW,title:jW,description:PW,creation:BW,pagination:OW,pageButton:LW,containerAllBlogs2:RW,blogInfo:zW};function FW(){var T,O,P;const n=Eo(),r=Zo(),l=Qe(j=>j.category),d=Qe(j=>j.allBlogs),[h,p]=J.useState("initial"),[k,b]=J.useState("0"),[g,v]=J.useState("0"),[A,x]=J.useState({}),_=new URLSearchParams(location.search).get("page");J.useEffect(()=>{l.info||Je(()=>import("./index-0da35582.js"),[]).then(j=>{n(j.axiosCategorys())}),l.info&&d.info&&p("none")},[d.info,l.info]),J.useEffect(()=>{Je(()=>import("./index-0da35582.js"),[]).then(j=>{n(j.axiosAllBlogs())})},[]),J.useEffect(()=>{if(_){const j=`https://server-agency-1203.onrender.com/blog/all_blog/?page=${_}`;fetch(j,{method:"GET"}).then(R=>{if(!R.ok)throw new Error("Hubo algun error");return R.json()}).then(R=>{x(R),setTimeout(()=>{v("1")},350)})}},[_]),setTimeout(()=>{b("1")},350);function C(j){j.preventDefault();const R=j.target.search.value;R?r(`/blogs/search/${R}`):alert("Estas tratando de enviar datos vacios")}function M(){const R=(d.info.count/5).toString().split(".");if(R.length===1){const L=[];for(let q=1;q<=Number(R[0]);q++)L.push(q);if(L.length>1)return D.jsx("div",{className:Kt.pagination,children:L.map(q=>D.jsx("button",{onClick:ee=>{r(`/blogs?page=${q}`),v("0")},className:Kt.pageButton,children:q},q))})}else{const L=[];for(let q=1;q<=Number(R[0])+1;q++)L.push(q);if(L.length>1)return D.jsx("div",{className:Kt.pagination,children:L.map(q=>D.jsx("button",{onClick:ee=>{r(`/blogs?page=${q}`),v("0")},className:Kt.pageButton,children:q},q))})}}return D.jsxs("main",{children:[D.jsxs(qn,{children:[D.jsx("meta",{charset:"UTF-8"}),D.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),D.jsx("title",{children:" Blogs "})]}),D.jsx(hi,{children:D.jsxs("article",{style:{position:"relative"},children:[D.jsx("div",{style:{display:h},class:Kt.overlay,children:D.jsx("div",{class:Kt.loaderContainer,children:D.jsx("span",{class:Kt.loader})})}),D.jsxs("section",{className:Kt.containerAllBlogs1,children:[D.jsxs("nav",{className:Kt.categories,children:[location.pathname=="/blogs"?D.jsx(ur,{style:{color:"green",textDecoration:"underline"},className:Kt.link,to:"/blogs",children:"Todos"}):D.jsx(ur,{className:Kt.link,to:"/blogs",children:"Todos"}),l.status==="fulfilled"?(T=l.info)==null?void 0:T.map(j=>D.jsx(ur,{className:Kt.link,to:`/blogs/category/${j.slug}`,children:j.name},j.id)):(l.status==="pending",!1)]}),D.jsxs("form",{onSubmit:C,className:Kt.searchForm,children:[D.jsx("input",{type:"text",name:"search",id:"search",placeholder:"Buscar",required:!0}),D.jsx("button",{type:"submit",children:"Buscar"})]})]}),D.jsx("section",{className:Kt.containerAllBlogs2,style:{opacity:k},children:d.status==="fulfilled"&&!location.search?D.jsxs("article",{children:[(O=d.info.results)==null?void 0:O.map(j=>D.jsx("div",{onClick:R=>{r(`/blogs/blog_detail/${j.slug}`)},children:D.jsxs("aside",{className:Kt.blogContentContainer,children:[D.jsx("div",{className:Kt.containerImg,children:D.jsx("img",{src:`https://server-agency-1203.onrender.com${j.img}`,alt:"img"})}),D.jsxs("div",{className:Kt.blogInfo,children:[D.jsxs("h1",{className:Kt.title,children:[" ",j.title," "]}),D.jsx("p",{className:Kt.description,children:j.description}),D.jsxs("p",{className:Kt.creation,children:[" ",j.creation," "]})]})]})},j.id)),d.status==="fulfilled"?M():!1]}):Object.keys(A).length!==0?D.jsx("section",{className:Kt.containerAllBlogs2,style:{opacity:g},children:D.jsxs("article",{children:[(P=A.results)==null?void 0:P.map(j=>D.jsx("div",{onClick:R=>{r(`/blogs/blog_detail/${j.slug}`)},children:D.jsxs("aside",{className:Kt.blogContentContainer,children:[D.jsx("div",{className:Kt.containerImg,children:D.jsx("img",{src:`https://server-agency-1203.onrender.com${j.img}`,alt:"img"})}),D.jsxs("div",{className:Kt.blogInfo,children:[D.jsxs("h1",{className:Kt.title,children:[" ",j.title," "]}),D.jsx("p",{className:Kt.description,children:j.description}),D.jsxs("p",{className:Kt.creation,children:[" ",j.creation," "]})]})]})},j.id)),d.status==="fulfilled"?M():!1]})}):d.status==="rejected"?D.jsx("h1",{children:" No hay blogs "}):!1})]})})]})}const VW="_containerAllBlogs1_197xs_9",UW="_categories_197xs_19",HW="_link_197xs_31",$W="_searchForm_197xs_57",WW="_blogContentContainer_197xs_121",qW="_containerImg_197xs_159",GW="_blogImage_197xs_187",KW="_title_197xs_195",YW="_description_197xs_209",QW="_creation_197xs_223",ZW="_pagination_197xs_243",JW="_pageButton_197xs_257",XW="_containerAllBlogs2_197xs_327",eq="_blogInfo_197xs_355",_n={containerAllBlogs1:VW,categories:UW,link:HW,searchForm:$W,blogContentContainer:WW,containerImg:qW,blogImage:GW,title:KW,description:YW,creation:QW,pagination:ZW,pageButton:JW,containerAllBlogs2:XW,blogInfo:eq};function tq(){var M,T,O;const n=Eo(),r=Zo(),l=Ql(),d=Qe(P=>P.blogTypeCategory),h=Qe(P=>P.category),[p,k]=J.useState("0"),[b,g]=J.useState("0"),[v,A]=J.useState({}),x=new URLSearchParams(location.search).get("page");J.useEffect(function(){h.info||Je(()=>import("./index-0da35582.js"),[]).then(P=>{n(P.axiosCategorys())}),Je(()=>import("./index-0da35582.js"),[]).then(P=>{n(P.axiosBlogTypeCategory(l.slug))})},[l.slug]),J.useEffect(()=>{k("0")},[l.slug]),J.useEffect(()=>{if(x){const P=`https://server-agency-1203.onrender.com/blog/blog_by_category/?page=${x}&slug=${l.slug}`;fetch(P,{method:"GET"}).then(j=>{if(!j.ok)throw new Error("Hubo algun error");return j.json()}).then(j=>{A(j),setTimeout(()=>{g("1")},350)})}},[x]),setTimeout(function(){k("1")},350);function _(P){P.preventDefault();const j=P.target.search.value;j?r(`/blogs/search/${j}`):alert("Estas tratando de enviar datos vacios")}function C(){const j=(d.info.count/5).toString().split(".");if(j.length===1){const R=[];for(let L=1;L<=Number(j[0]);L++)R.push(L);if(R.length>1)return D.jsx("div",{className:_n.pagination,children:R.map(L=>D.jsx("button",{onClick:q=>{r(`/blogs/category/${l.slug}?page=${L}`),g("0")},className:_n.pageButton,children:L},L))})}else{const R=[];for(let L=1;L<=Number(j[0])+1;L++)R.push(L);if(R.length>1)return D.jsx("div",{className:_n.pagination,children:R.map(L=>D.jsx("button",{onClick:q=>{r(`/blogs/category/${l.slug}?page=${L}`),g("0")},className:_n.pageButton,children:L},L))})}}return D.jsxs("main",{children:[D.jsxs(qn,{children:[D.jsx("meta",{charset:"UTF-8"}),D.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),D.jsx("title",{children:" Blogs / categorya "})]}),D.jsxs(hi,{children:[D.jsxs("section",{className:_n.containerAllBlogs1,children:[D.jsxs("nav",{className:_n.categories,children:[D.jsx(ur,{className:_n.link,to:"/blogs",children:"Todos"}),h.status==="fulfilled"?(M=h.info)==null?void 0:M.map(P=>D.jsx(ur,{style:l.slug===P.slug?{color:"green",textDecoration:"underline"}:{color:"#333"},className:_n.link,to:`/blogs/category/${P.slug}`,children:P.name},P.id)):(h.status==="pending",!1)]}),D.jsxs("form",{onSubmit:_,className:_n.searchForm,children:[D.jsx("input",{type:"text",name:"search",id:"search",placeholder:"Buscar",required:!0}),D.jsx("button",{type:"submit",children:"Buscar"})]})]}),D.jsx("section",{className:_n.containerAllBlogs2,style:{opacity:p},children:d.status==="fulfilled"&&!location.search?D.jsxs("article",{children:[(T=d.info.results)==null?void 0:T.map(P=>D.jsx("div",{onClick:j=>{r(`/blogs/blog_detail/${P.slug}`)},children:D.jsxs("aside",{className:_n.blogContentContainer,children:[D.jsx("div",{className:_n.containerImg,children:D.jsx("img",{src:`https://server-agency-1203.onrender.com${P.img}`,alt:"img"})}),D.jsxs("div",{className:_n.blogInfo,children:[D.jsxs("h1",{className:_n.title,children:[" ",P.title," "]}),D.jsx("p",{className:_n.description,children:P.description}),D.jsxs("p",{className:_n.creation,children:[" ",P.creation," "]})]})]})},P.id)),d.status==="fulfilled"?C():!1]}):Object.keys(v).length!==0?D.jsxs("div",{style:{opacity:b},children:[(O=v.results)==null?void 0:O.map(P=>D.jsx("div",{onClick:j=>{r(`/blogs/blog_detail/${P.slug}`)},children:D.jsxs("aside",{className:_n.blogContentContainer,children:[D.jsx("div",{className:_n.containerImg,children:D.jsx("img",{src:`https://server-agency-1203.onrender.com${P.img}`,alt:"img"})}),D.jsxs("div",{className:_n.blogInfo,children:[D.jsxs("h1",{className:_n.title,children:[" ",P.title," "]}),D.jsx("p",{className:_n.description,children:P.description}),D.jsxs("p",{className:_n.creation,children:[" ",P.creation," "]})]})]})},P.id)),d.status==="fulfilled"?C():!1]}):d.status==="rejected"?D.jsx("h1",{children:" No hay blogs "}):!1})]})]})}const nq="_blogDetailContainer_1dlpd_3",oq="_title_1dlpd_17",rq="_infoBar_1dlpd_33",iq="_info_1dlpd_33",sq="_infoLabel_1dlpd_61",aq="_infoDato_1dlpd_79",lq="_content_1dlpd_87",to={blogDetailContainer:nq,title:oq,infoBar:rq,info:iq,infoLabel:sq,infoDato:aq,content:lq};function cq(){var p;const n=Eo(),r=Ql(),l=Qe(k=>k.blogDetail),[d,h]=J.useState("0");return J.useEffect(function(){Je(()=>import("./index-0da35582.js"),[]).then(k=>{n(k.axiosBlogDetail(r.slug))})},[r.slug]),setTimeout(()=>{h("1")},350),D.jsxs("main",{children:[D.jsxs(qn,{children:[D.jsx("meta",{charset:"UTF-8"}),D.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),D.jsx("title",{children:" Blog / name "})]}),D.jsx(hi,{children:D.jsx("section",{className:to.containerBlogDetail,style:{opacity:d},children:l.status==="fulfilled"?(p=l.info)==null?void 0:p.map(k=>D.jsxs("aside",{className:to.blogDetailContainer,children:[D.jsxs("h1",{className:to.title,children:[" ",k.title," "]}),D.jsxs("div",{className:to.infoBar,children:[D.jsxs("div",{className:to.info,children:[D.jsx("p",{className:to.infoLabel,children:"Likes:"}),D.jsx(UU,{params:r.slug})]}),D.jsxs("div",{className:to.info,children:[D.jsx("p",{className:to.infoLabel,children:"Comentarios:"}),D.jsx(cH,{params:r.slug})]}),D.jsxs("div",{className:to.info,children:[D.jsx("p",{className:to.infoLabel,children:"Categoría:"}),D.jsx("p",{className:to.infoDato,children:k.category.name})]}),D.jsxs("div",{className:to.info,children:[D.jsx("p",{className:to.infoLabel,children:"Fecha:"}),D.jsxs("p",{className:to.infoDato,children:[" ",k.creation]})]}),D.jsxs("div",{className:to.info,children:[D.jsx("p",{className:to.infoLabel,children:"Autor:"}),D.jsxs("p",{className:to.infoDato,children:[" ",k.user.username," "]})]})]}),D.jsx("article",{className:to.content,dangerouslySetInnerHTML:{__html:k.content}})]},k.id)):l.status==="pending"?!1:l.status==="rejected"?D.jsx("h1",{children:" Este blog no existe"}):!1})})]})}const dq="_containerContent_buli6_5",uq="_containerButtons_buli6_73",hq="_containerImg_buli6_113",fq="_containerAccess_buli6_139",Hf={containerContent:dq,containerButtons:uq,containerImg:hq,containerAccess:fq};function pq(){const n=Zo(),r=Qe(d=>d.JWTVerify),l=JSON.parse(localStorage.getItem("access"));return J.useEffect(()=>{r.status==="fulfilled"&&l&&n("/dashboard")},[r.status]),D.jsxs("main",{children:[D.jsxs(qn,{children:[D.jsx("meta",{charset:"UTF-8"}),D.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),D.jsx("title",{children:" Accede al blog ... "})]}),D.jsx(hi,{children:D.jsxs("section",{className:Hf.containerAccess,children:[D.jsxs("aside",{className:Hf.containerContent,children:[D.jsxs("h1",{children:[D.jsx("span",{style:{color:"green",fontSize:"30px"},children:"A"}),"ccede a nuestro blog"]}),D.jsx("p",{children:"Explora nuestro blog y desbloquea una experiencia enriquecedora al registrarte. Únete a nuestra comunidad y comparte tus pasiones a través de publicaciones que te permitirán expresarte en temas que realmente te interesan. ¡Regístrate ahora para comenzar a ser parte de la conversación y aprovechar al máximo tu membresía!"}),D.jsxs("div",{className:Hf.containerButtons,children:[D.jsx("button",{onClick:d=>{n("/access/signup")},type:"button",children:"Registrarse"}),D.jsx("button",{onClick:d=>{n("/access/signin")},type:"button",children:"Ingresar"})]})]}),D.jsx("aside",{className:Hf.containerImg,children:D.jsx("img",{src:"https://cdn-icons-png.flaticon.com/512/993/993686.png",alt:"img"})})]})})]})}const gq="_containerLogin_8se5n_3",mq="_containerInputs_8se5n_41",kq="_messageError_8se5n_153",$f={containerLogin:gq,containerInputs:mq,messageError:kq};function bq(){const n=Eo(),r=Zo(),l=Qe(O=>O.JWTCreate),d=Qe(O=>O.JWTRefresh),h=Qe(O=>O.JWTVerify),p=Qe(O=>O.resetPasword),[k,b]=J.useState({}),g=JSON.parse(localStorage.getItem("access")),v=Qe(O=>O.authGoogle),A=new URLSearchParams(location.search),x=A.get("state"),_=A.get("code");J.useEffect(()=>{if(v.url&&(location.href=v.url),x&&_&&!v.info){const O={state:x,code:_};Je(()=>import("./index-0da35582.js"),[]).then(P=>{n(P.axiosLoginGoogle(O))})}},[v,x,_]),J.useEffect(()=>{l.status==="rejected"&&Ve.fire({icon:"error",title:"Oops...",text:"Combinacion de credenciales incorrecta!",footer:`<a class=${$f.messageError} href="https://critianrodriguez042502.github.io/access/signup">Ya te registraste? Crea tu cuenta...</a>`}),l.info&&l.status==="fulfilled"&&!d.info&&Je(()=>import("./index-0da35582.js"),[]).then(O=>{n(O.axiosJWTRefresh({refresh:l.info}))}),d.info&&(h.status==="rejected"||!g)&&Je(()=>import("./index-0da35582.js"),[]).then(O=>{n(O.axiosJWTVerify({token:d.info.access}))}),h.status==="fulfilled"&&g&&(Ve.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!0,didOpen:P=>{P.addEventListener("mouseenter",Ve.stopTimer),P.addEventListener("mouseleave",Ve.resumeTimer)}}).fire({icon:"success",title:"Acceso permitido"}),setTimeout(()=>{r("/dashboard")},2e3))},[l.status,l.info,d.info,h.status]);function C(O){b({...k,[O.target.name]:O.target.value})}function M(O){O.preventDefault(),k.email&&k.password&&(Ve.showLoading(),Je(()=>import("./index-0da35582.js"),[]).then(P=>{n(P.axiosJWTCreate(k))}))}J.useEffect(()=>{p.status==="fulfilled"&&Ve.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:2500,timerProgressBar:!0,didOpen:P=>{P.addEventListener("mouseenter",Ve.stopTimer),P.addEventListener("mouseleave",Ve.resumeTimer)}}).fire({icon:"success",title:"Email enviado"}),p.status==="rejected"&&Ve.fire({icon:"error",title:"Oops...",text:"Esta cuenta existe!",footer:`<a class=${$f.messageError} href="https://critianrodriguez042502.github.io/access/signup">Ya te registraste? Crea tu cuenta...</a>`})},[p.status]);async function T(){const{value:O}=await Ve.fire({title:"Recuperar contraseña",input:"email",inputLabel:"Escribe tu correo electronico",inputPlaceholder:"Email"});O&&(console.log(O),Ve.fire(`Verifica tu email: ${O}`),Je(()=>import("./index-0da35582.js"),[]).then(P=>{n(P.axiosResetPassword({email:O}))}))}return D.jsxs("main",{children:[D.jsxs(qn,{children:[D.jsx("meta",{charset:"UTF-8"}),D.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),D.jsx("title",{children:" Iniciar sesion ... "})]}),D.jsx(hi,{children:D.jsxs("section",{className:$f.containerLogin,children:[D.jsx("h1",{children:" Iniciar sesion "}),D.jsxs("form",{className:$f.containerInputs,onSubmit:M,children:[D.jsx("input",{type:"email",id:"email",name:"email",placeholder:"Correo",onChange:C,required:!0}),D.jsx("input",{type:"password",id:"password",name:"password",autoComplete:"current-password",placeholder:"Contraseña",onChange:C,required:!0}),D.jsx("button",{type:"submit",children:" Acceder "}),D.jsx("p",{onClick:T,children:" Olvidaste tu contraseña ? "})]})]})})]})}const wq="_container_1pcy7_3",vq="_containerInputs_1pcy7_39",r5={container:wq,containerInputs:vq};function _q(){const n=Zo(),r=Eo(),l=Qe(O=>O.authGoogle),d=Qe(O=>O.createUser),h=Qe(O=>O.resendEmail),[p,k]=J.useState({}),[b,g]=J.useState("none"),[v,A]=J.useState(""),x=Qe(O=>O.JWTVerify),_=JSON.parse(localStorage.getItem("access"));J.useEffect(()=>{l.url&&(location.href=l.url)},[l.url]),J.useEffect(()=>{if(x.status==="fulfilled"&&_&&n("/dashboard"),d.status==="fulfilled"&&(g("initial"),Ve.fire({icon:"success",title:"Registro completado!",text:"Se le a enviado un email a su correo para la activacion de su cuenta"})),d.status==="rejected"){const O=[],P=Object.values(d.info);for(let j=0;j<P.length;j++)O.push(P[j]);Ve.fire("Opss?",`${O[0]}`,"warning")}},[d.status,x.status]),J.useEffect(()=>{h.status==="fulfilled"&&Ve.fire({position:"top-end",icon:"success",title:"Correo reenviado",showConfirmButton:!1,timer:2e3}),h.status==="rejected"&&Ve.fire({position:"top-end",icon:"info",title:"Su cuenta ya se encuentra activa",showConfirmButton:!1,timer:2e3})},[h.status]);function C(O){k({...p,[O.target.name]:O.target.value})}function M(O){O.preventDefault();const P=O.target.first_name.value,j=O.target.last_name.value,R=O.target.username.value,L=O.target.email.value,q=O.target.password.value,ee=O.target.re_password.value;A(L),P&&j&&R&&L&&q&&ee?q===ee?q.length>=8?Je(()=>import("./index-0da35582.js"),[]).then(G=>{r(G.axiosCreateUser(p))}):Ve.fire({icon:"warning",title:"Oops...",text:"Contraseña demasiado corta"}):Ve.fire({icon:"info",title:"Oops...",text:"Las contraseñas no coinciden"}):Ve.fire({icon:"info",title:"Oops...",text:"Estas tratando de enviar datos vacios"})}function T(){Je(()=>import("./index-0da35582.js"),[]).then(O=>{r(O.axiosResendEmail({email:v}))})}return D.jsxs("main",{children:[D.jsxs(qn,{children:[D.jsx("meta",{charset:"UTF-8"}),D.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),D.jsx("title",{children:" Registrarse ... "})]}),D.jsxs(hi,{children:[D.jsxs("section",{className:r5.container,children:[D.jsx("h1",{children:" Registro "}),D.jsxs("form",{className:r5.containerInputs,onSubmit:M,children:[D.jsx("input",{type:"text",id:"first_name",name:"first_name",onChange:C,placeholder:"Nombre",required:!0}),D.jsx("input",{type:"text",id:"last_name",name:"last_name",onChange:C,placeholder:"Apellido",required:!0}),D.jsx("input",{type:"text",id:"username",name:"username",onChange:C,placeholder:"Nombre de usuario",required:!0}),D.jsx("input",{type:"email",id:"email",name:"email",onChange:C,placeholder:"Correo",required:!0}),D.jsx("input",{type:"password",id:"password",name:"password",onChange:C,placeholder:"Contraseña",required:!0}),D.jsx("input",{type:"password",id:"re_password",name:"re_password",onChange:C,placeholder:"Repetir contraseña",required:!0}),D.jsx("button",{type:"submit",children:" Registrarse "})]})]}),D.jsxs("div",{style:{display:b},children:[D.jsx("p",{children:" Volver a enviar correo "}),D.jsx("button",{onClick:T,children:" Reenviar correo "})]})]})]})}const yq="_containerAllBlogs1_vw25x_7",Cq="_link_vw25x_17",Aq="_searchForm_vw25x_49",xq="_blogContentContainer_vw25x_113",Eq="_containerImg_vw25x_151",Sq="_blogImage_vw25x_179",Dq="_title_vw25x_187",Tq="_description_vw25x_201",Iq="_creation_vw25x_215",Mq="_pagination_vw25x_235",Nq="_pageButton_vw25x_249",jq="_containerAllBlogs2_vw25x_315",Pq="_blogInfo_vw25x_345",Sn={containerAllBlogs1:yq,link:Cq,searchForm:Aq,blogContentContainer:xq,containerImg:Eq,blogImage:Sq,title:Dq,description:Tq,creation:Iq,pagination:Mq,pageButton:Nq,containerAllBlogs2:jq,blogInfo:Pq};function Bq(){var O,P;const n=Eo(),r=Zo(),l=Ql(),d=Qe(j=>j.searchBlog),[h,p]=J.useState(l.slug),[k,b]=J.useState({}),[g,v]=J.useState("0"),[A,x]=J.useState("0"),_=new URLSearchParams(location.search).get("page");J.useEffect(()=>{Je(()=>import("./index-0da35582.js"),[]).then(j=>{n(j.axiosSearchBlogs(l.slug))})},[l.slug]),J.useEffect(()=>{if(_){const j=`https://server-agency-1203.onrender.com/blog/search_blogs/?page=${_}&slug=${l.slug}`;fetch(j,{method:"GET"}).then(R=>{if(!R.ok)throw new Error("Hubo algun error");return R.json()}).then(R=>{b(R),setTimeout(()=>{x("1")},350)})}},[_]);function C(j){p(j.target.value)}function M(j){j.preventDefault(),h?r(`/blogs/search/${h}`):alert("No puedes enviar datos vacios")}setTimeout(()=>{v("1")},350);function T(){const R=(d.info.count/8).toString().split(".");if(R.length===1){const L=[];for(let q=1;q<=Number(R[0]);q++)L.push(q);if(L.length>1)return D.jsx("div",{className:Sn.pagination,children:L.map(q=>D.jsx("button",{onClick:ee=>{x("0"),r(`/blogs/search/${l.slug}?page=${q}`)},className:Sn.pageButton,children:q},q))})}else{const L=[];for(let q=1;q<=Number(R[0])+1;q++)L.push(q);if(L.length>1)return D.jsx("div",{className:Sn.pagination,children:L.map(q=>D.jsx("button",{onClick:ee=>{x("0"),r(`/blogs/search/${l.slug}?page=${q}`)},className:Sn.pageButton,children:q},q))})}}return D.jsxs("main",{children:[D.jsxs(qn,{children:[D.jsx("meta",{charset:"UTF-8"}),D.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),D.jsx("title",{children:" Busqueda "})]}),D.jsxs(hi,{children:[D.jsxs("section",{className:Sn.containerAllBlogs1,children:[D.jsxs(ur,{className:Sn.link,to:"/blogs",children:[" ","Volver"," "]}),D.jsxs("form",{className:Sn.searchForm,onSubmit:M,children:[D.jsx("input",{type:"text",name:"search",value:h,id:"search",placeholder:"Buscar blogs",onChange:C,required:!0}),D.jsx("button",{type:"submit",children:" Buscar "})]})]}),D.jsx("section",{className:Sn.containerAllBlogs2,style:{opacity:g},children:d.status==="fulfilled"&&!location.search?D.jsxs("article",{style:{opacity:g},children:[(O=d.info.results)==null?void 0:O.map(j=>D.jsx("div",{onClick:R=>{r(`/blogs/blog_detail/${j.slug}`)},children:D.jsxs("aside",{className:Sn.blogContentContainer,children:[D.jsx("div",{className:Sn.containerImg,children:D.jsx("img",{src:`https://server-agency-1203.onrender.com${j.img}`,alt:"img"})}),D.jsxs("div",{className:Sn.blogInfo,children:[D.jsxs("h1",{className:Sn.title,children:[" ",j.title," "]}),D.jsx("p",{className:Sn.description,children:j.description}),D.jsxs("p",{className:Sn.creation,children:[" ",j.creation," "]})]})]})},j.id)),d.status==="fulfilled"?T():!1]}):Object.keys(k).length!==0?D.jsxs("section",{className:Sn.containerAllBlogs2,style:{opacity:A},children:[(P=k.results)==null?void 0:P.map(j=>D.jsx("div",{onClick:R=>{r(`/blogs/blog_detail/${j.slug}`)},children:D.jsxs("aside",{className:Sn.blogContentContainer,children:[D.jsx("div",{className:Sn.containerImg,children:D.jsx("img",{src:`https://server-agency-1203.onrender.com${j.img}`,alt:"img"})}),D.jsxs("div",{className:Sn.blogInfo,children:[D.jsxs("h1",{className:Sn.title,children:[" ",j.title," "]}),D.jsx("p",{className:Sn.description,children:j.description}),D.jsxs("p",{className:Sn.creation,children:[" ",j.creation," "]})]})]})},j.id)),d.status==="fulfilled"?T():!1]}):d.status==="rejected"?D.jsx("h1",{children:" No hay blogs "}):!1})]})]})}const Oq="_containerActivation_1ga6b_1",Lq="_container_1ga6b_1",Rq="_loader_1ga6b_79",zq="_rotation_1ga6b_1",Mb={containerActivation:Oq,container:Lq,loader:Rq,rotation:zq};function Fq(){const n=Eo(),r=Ql(),l=Zo(),d=Qe(k=>k.activate),[h,p]=J.useState("none");return J.useEffect(()=>{Je(()=>import("./index-0da35582.js"),[]).then(k=>{n(k.axiosActivationUser({uid:r.uid,token:r.token}))})},[]),J.useEffect(()=>{d.status==="pending"&&p("initial"),d.status==="fulfilled"&&(p("none"),Ve.fire({position:"top-end",icon:"success",title:"Proceso completa",text:"Su cuenta a sido activada correctamente",showConfirmButton:!1,timer:3e3}),setTimeout(()=>{l("/access/signin")},4e3)),d.status==="rejected"&&(p("none"),Ve.fire({position:"top-end",icon:"error",title:"Opss...",text:"Parece que algo salio mal",showConfirmButton:!1,timer:3e3}),setTimeout(()=>{l("/access/signup")},4e3))},[d.status]),D.jsxs("main",{className:Mb.container,children:[D.jsxs(qn,{children:[D.jsx("meta",{charset:"UTF-8"}),D.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),D.jsx("title",{children:" Activacion "})]}),D.jsxs("section",{className:Mb.containerActivation,children:[D.jsx("h1",{children:" Activacion de cuenta "}),D.jsx("div",{style:{display:h},children:D.jsx("span",{className:Mb.loader,children:" "})})]})]})}const Vq="_container_jvhvr_3",Uq="_containerResetPassword_jvhvr_27",Hq="_containerInput_jvhvr_53",Nb={container:Vq,containerResetPassword:Uq,containerInput:Hq};function $q(){const n=Eo(),r=Zo(),l=Ql(),d=Qe(g=>g.resetPasswordConfirm),[h,p]=J.useState({});J.useEffect(()=>{if(d.status==="fulfilled"&&(Ve.fire({position:"top-end",icon:"success",title:"Proceso completado",text:"Contraseña cambiada exitosamente",showConfirmButton:!1,timer:3500}),setTimeout(()=>{r("/access/signin")},4e3)),d.status==="rejected"){const g=d.info.new_password;Ve.fire({icon:"warning",title:"Oops...",text:`${g[0]}`})}},[d.status]);function k(g){p({uid:l.uid,token:l.token,...h,[g.target.name]:g.target.value})}function b(g){g.preventDefault(),h.new_password&&h.re_new_password?h.new_password===h.re_new_password?Je(()=>import("./index-0da35582.js"),[]).then(v=>{n(v.axiosResetPassword(h))}):Ve.fire({icon:"info",title:"Oops...",text:"Las contraseñas no coinciden"}):Ve.fire({icon:"info",title:"Oops...",text:"Estas tratando de enviar datos vacios"})}return D.jsxs("main",{className:Nb.container,children:[D.jsxs(qn,{children:[D.jsx("meta",{charset:"UTF-8"}),D.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),D.jsx("title",{children:" Cambiar contraseña "})]}),D.jsxs("section",{className:Nb.containerResetPassword,children:[D.jsx("h1",{children:" Cambiar contraseña"}),D.jsxs("form",{className:Nb.containerInput,onSubmit:b,children:[D.jsx("input",{type:"password",id:"new_password",name:"new_password",placeholder:"Nueva contraseña",onChange:k,required:!0}),D.jsx("input",{type:"password",id:"re_new_password",name:"re_new_password",placeholder:"Repetir contraseña",onChange:k,required:!0}),D.jsx("button",{type:"submit",children:" Cambiar "})]})]})]})}const Wq="_bottomNavegationScrollAppearance_1f0ut_7",qq="_containerInitialDashboard_1f0ut_35",Gq="_staticContainer_1f0ut_59",Kq="_containerImg_1f0ut_99",Yq="_img2_1f0ut_111",Qq="_img1_1f0ut_185",Zq="_circule1_1f0ut_205",Jq="_circule2_1f0ut_233",Dl={bottomNavegationScrollAppearance:Wq,containerInitialDashboard:qq,staticContainer:Gq,containerImg:Kq,img2:Yq,img1:Qq,circule1:Zq,circule2:Jq};function Xq(){const n=Qe(b=>b.userData),[r,l]=J.useState(null),[d,h]=J.useState(!1),[p,k]=J.useState(D.jsx(bh,{}));return J.useEffect(()=>{n.status==="fulfilled"&&l([n.info])},[n.status]),D.jsxs("main",{className:Dl.containerInitialDashboard,children:[D.jsxs(qn,{children:[D.jsx("meta",{charset:"UTF-8"}),D.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),D.jsx("title",{children:" Dashboard "})]}),D.jsx(Pg,{appearance:d}),D.jsx("section",{children:D.jsx("div",{className:Dl.bottomNavegationScrollAppearance,children:D.jsx("h1",{onClick:()=>{d===!1?(h(!0),k(D.jsx(Aa,{}))):(h(!1),k(D.jsx(bh,{})))},children:p})})}),D.jsx("div",{className:Dl.circule1}),D.jsxs("section",{className:Dl.staticContainer,children:[n.status==="fulfilled"?D.jsxs("h1",{children:["// BIENVENIDO // ",D.jsx("br",{})," ",n.info.username]}):!1,D.jsx("p",{children:"En IMPACT X, creemos en el poder de las palabras y las ideas. Te damos la bienvenida a un lugar donde la creatividad fluye libremente y las voces se unen para formar una comunidad vibrante y diversa. ¡Este es tu espacio para inspirar, aprender y conectarte!"}),D.jsxs("aside",{className:Dl.containerImg,children:[D.jsx("div",{children:D.jsx("img",{className:Dl.img1,src:"https://geeksui.codescandy.com/geeks/assets/images/background/acedamy-img/frame-1.svg",alt:"img",width:200,height:200})}),D.jsx("div",{children:D.jsx("img",{className:Dl.img2,src:"https://geeksui.codescandy.com/geeks/assets/images/background/acedamy-img/frame-1.svg",alt:"img",width:200,height:200})})]})]})]})}const eG="_viewInitalBlogByUser_3zkpl_3",tG="_bottomNavegationScrollAppearance_3zkpl_17",nG="_containerBlogsUser_3zkpl_45",oG="_linkNavbar_3zkpl_71",rG="_titleMajor_3zkpl_99",iG="_separateBlogContainer_3zkpl_117",sG="_containerImg_3zkpl_133",aG="_containerContent_3zkpl_149",lG="_containerTitleAndPublic_3zkpl_173",cG="_publicCase_3zkpl_185",dG="_privateCase_3zkpl_199",uG="_containerButtons_3zkpl_227",hG="_buttonDelete_3zkpl_235",fG="_buttonUpdate_3zkpl_265",pG="_containerButtonsAndDate_3zkpl_297",tn={viewInitalBlogByUser:eG,bottomNavegationScrollAppearance:tG,containerBlogsUser:nG,linkNavbar:oG,titleMajor:rG,separateBlogContainer:iG,containerImg:sG,containerContent:aG,containerTitleAndPublic:lG,publicCase:cG,privateCase:dG,containerButtons:uG,buttonDelete:hG,buttonUpdate:fG,containerButtonsAndDate:pG};function gG(){var q,ee;const n=Eo(),r=Zo(),l=Qe(G=>G.blogsByUser),d=Qe(G=>G.createBlogUser),h=Qe(G=>G.updateBlogUser),p=Qe(G=>G.deleteBlogUser),k=JSON.parse(localStorage.getItem("access")),[b,g]=J.useState("0"),[v,A]=J.useState("0"),[x,_]=J.useState({}),C=new URLSearchParams(location.search).get("page"),[M,T]=J.useState(!1),[O,P]=J.useState(D.jsx(bh,{}));J.useEffect(()=>{(d.status==="fulfilled"||h.status==="fulfilled"||p.status==="fulfilled")&&(Je(()=>import("./index-0da35582.js"),[]).then(G=>{n(G.axiosBlogsByUser(k))}),g("0"))},[p.status,d.status,h.status]),J.useEffect(()=>{if(C){const G={Authorization:`JWT ${k}`},V=`https://server-agency-1203.onrender.com/dashboard/blog_by_user/?page=${C}`;fetch(V,{method:"GET",headers:G}).then(X=>(X.ok||(C>1?r(`/dashboard/blogs_user?page=${C-1}`):r("/dashboard/blogs_user")),X.json())).then(X=>{_(X),setTimeout(()=>{A("1")},350)}).catch(X=>console.log(X))}},[C]),setTimeout(function(){g("1")},350);function j(){setTimeout(()=>{const G={Authorization:`JWT ${k}`},V=`https://server-agency-1203.onrender.com/dashboard/blog_by_user/?page=${C}`;fetch(V,{method:"GET",headers:G}).then(X=>(X.ok||(C>1?r(`/dashboard/blogs_user?page=${C-1}`):r("/dashboard/blogs_user")),X.json())).then(X=>_(X))},200)}function R(){const V=(l.info.count/5).toString().split(".");if(V.length===1){const X=[];for(let Q=1;Q<=Number(V[0]);Q++)X.push(Q);if(X.length>1)return X.map(Q=>D.jsx("button",{onClick:ae=>{A("0"),r(`/dashboard/blogs_user?page=${Q}`)},children:Q},Q))}else{const X=[];for(let Q=1;Q<=Number(V[0])+1;Q++)X.push(Q);if(X.length>1)return X.map(Q=>D.jsx("button",{onClick:ae=>{A("0"),r(`/dashboard/blogs_user?page=${Q}`)},children:Q},Q))}}function L(G){Ve.fire({title:"Eliminar",text:"Estas seguro que deseas eliminar este blog?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"Si, eliminar!"}).then(V=>{V.isConfirmed&&(C?(Je(()=>import("./index-0da35582.js"),[]).then(Q=>{n(Q.axiosDeleteBlogUser(G))}),g("0"),j(),Ve.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:2e3,timerProgressBar:!0,didOpen:Q=>{Q.addEventListener("mouseenter",Ve.stopTimer),Q.addEventListener("mouseleave",Ve.resumeTimer)}}).fire({icon:"error",title:"Blog eliminado"})):(Je(()=>import("./index-0da35582.js"),[]).then(Q=>{n(Q.axiosDeleteBlogUser(G))}),g("0"),Ve.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:2e3,timerProgressBar:!0,didOpen:Q=>{Q.addEventListener("mouseenter",Ve.stopTimer),Q.addEventListener("mouseleave",Ve.resumeTimer)}}).fire({icon:"error",title:"Blog eliminado"})))})}return D.jsxs("main",{className:tn.viewInitalBlogByUser,children:[D.jsxs(qn,{children:[D.jsx("meta",{charset:"UTF-8"}),D.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),D.jsx("title",{children:" Dashboard "})]}),D.jsx(Pg,{appearance:M}),D.jsxs("article",{className:tn.containerBlogsUser,children:[D.jsx("nav",{children:D.jsx(ur,{className:tn.linkNavbar,to:"/dashboard/create_blog",children:"Crear blog"})}),D.jsx("h1",{className:tn.titleMajor,children:" Blogs registrados "}),D.jsx("div",{className:tn.bottomNavegationScrollAppearance,children:D.jsx("h1",{onClick:G=>{M===!1?(T(!0),P(D.jsx(Aa,{}))):(T(!1),P(D.jsx(bh,{})))},children:O})}),D.jsx("div",{style:{opacity:b},children:D.jsx("div",{children:l.status==="pending"?D.jsx("h1",{children:" Cargando... "}):l.status==="fulfilled"&&!location.search?D.jsxs("div",{children:[(q=l.info.results)==null?void 0:q.map(G=>D.jsxs("aside",{className:tn.separateBlogContainer,children:[D.jsx("div",{className:tn.containerImg,children:D.jsx("img",{src:`https://server-agency-1203.onrender.com${G.img}`,alt:"img"})}),D.jsxs("div",{className:tn.containerContent,children:[D.jsxs("div",{className:tn.containerTitleAndPublic,children:[D.jsxs("h1",{children:[" ",G.title," "]}),G.public===!0?D.jsx("b",{className:tn.publicCase,children:" Publico "}):D.jsx("b",{className:tn.privateCase,children:" Privado "})]}),D.jsx("div",{children:D.jsxs("p",{children:[" ",G.description," "]})}),D.jsx("hr",{style:{border:"2px solid gray"}}),D.jsxs("div",{className:tn.containerButtonsAndDate,children:[D.jsxs("div",{className:tn.containerButtons,children:[D.jsx("button",{className:tn.buttonDelete,onClick:()=>{const V={jwt:k,slug:`${G.slug}`};L(V)},children:"Eliminar"}),D.jsx("button",{className:tn.buttonUpdate,onClick:V=>{r(`/dashboard/blog_user_detail/${G.slug}`)},children:"Modificar"})]}),D.jsxs("b",{children:[" ",G.creation," "]})]})]})]},G.id)),D.jsx("div",{children:l.status==="fulfilled"?R():!1})]}):Object.keys(x).length!==0?D.jsxs("div",{style:{opacity:v},children:[(ee=x.results)==null?void 0:ee.map(G=>D.jsxs("aside",{className:tn.separateBlogContainer,children:[D.jsx("div",{className:tn.containerImg,children:D.jsx("img",{src:`https://server-agency-1203.onrender.com${G.img}`,alt:"img"})}),D.jsxs("div",{className:tn.containerContent,children:[D.jsxs("div",{className:tn.containerTitleAndPublic,children:[D.jsxs("h1",{children:[" ",G.title," "]}),G.public===!0?D.jsx("b",{className:tn.publicCase,children:" Publico "}):D.jsx("b",{className:tn.privateCase,children:" Privado "})]}),D.jsx("div",{children:D.jsxs("p",{children:[" ",G.description," "]})}),D.jsx("hr",{style:{border:"2px solid gray"}}),D.jsxs("div",{className:tn.containerButtonsAndDate,children:[D.jsxs("div",{className:tn.containerButtons,children:[D.jsx("button",{className:tn.buttonDelete,onClick:()=>{const V={jwt:k,slug:`${G.slug}`};L(V)},children:"Eliminar"}),D.jsx("button",{className:tn.buttonUpdate,onClick:V=>{r(`/dashboard/blog_user_detail/${G.slug}`)},children:"Modificar"})]}),D.jsxs("b",{children:[" ",G.creation," "]})]})]})]},G.id)),D.jsx("div",{children:l.status==="fulfilled"?R():!1})]}):l.status==="rejected"?D.jsx("p",{children:" No hay blogs"}):!1})})]})]})}var Vp={exports:{}};/*!
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */Vp.exports;(function(n,r){(function(l,d){n.exports=d(J)})(self,l=>(()=>{var d={703:(b,g,v)=>{var A=v(414);function x(){}function _(){}_.resetWarningCache=x,b.exports=function(){function C(O,P,j,R,L,q){if(q!==A){var ee=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw ee.name="Invariant Violation",ee}}function M(){return C}C.isRequired=C;var T={array:C,bigint:C,bool:C,func:C,number:C,object:C,string:C,symbol:C,any:C,arrayOf:M,element:C,elementType:C,instanceOf:M,node:C,objectOf:M,oneOf:M,oneOfType:M,shape:M,exact:M,checkPropTypes:_,resetWarningCache:x};return T.PropTypes=T,T}},697:(b,g,v)=>{b.exports=v(703)()},414:b=>{b.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},787:b=>{b.exports=l}},h={};function p(b){var g=h[b];if(g!==void 0)return g.exports;var v=h[b]={exports:{}};return d[b](v,v.exports,p),v.exports}p.n=b=>{var g=b&&b.__esModule?()=>b.default:()=>b;return p.d(g,{a:g}),g},p.d=(b,g)=>{for(var v in g)p.o(g,v)&&!p.o(b,v)&&Object.defineProperty(b,v,{enumerable:!0,get:g[v]})},p.o=(b,g)=>Object.prototype.hasOwnProperty.call(b,g),p.r=b=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(b,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(b,"__esModule",{value:!0})};var k={};return(()=>{p.r(k),p.d(k,{CKEditor:()=>yi,CKEditorContext:()=>rl});var b=p(787),g=p.n(b),v=p(697),A=p.n(v);const x=new Array(256).fill("").map((U,H)=>("0"+H.toString(16)).slice(-2));class _{constructor(H){if(this.crashes=[],this.state="initializing",this._now=Date.now,this.crashes=[],this._crashNumberLimit=typeof H.crashNumberLimit=="number"?H.crashNumberLimit:3,this._minimumNonErrorTimePeriod=typeof H.minimumNonErrorTimePeriod=="number"?H.minimumNonErrorTimePeriod:5e3,this._boundErrorHandler=Y=>{const ne="error"in Y?Y.error:Y.reason;ne instanceof Error&&this._handleError(ne,Y)},this._listeners={},!this._restart)throw new Error("The Watchdog class was split into the abstract `Watchdog` class and the `EditorWatchdog` class. Please, use `EditorWatchdog` if you have used the `Watchdog` class previously.")}destroy(){this._stopErrorHandling(),this._listeners={}}on(H,Y){this._listeners[H]||(this._listeners[H]=[]),this._listeners[H].push(Y)}off(H,Y){this._listeners[H]=this._listeners[H].filter(ne=>ne!==Y)}_fire(H,...Y){const ne=this._listeners[H]||[];for(const Me of ne)Me.apply(this,[null,...Y])}_startErrorHandling(){window.addEventListener("error",this._boundErrorHandler),window.addEventListener("unhandledrejection",this._boundErrorHandler)}_stopErrorHandling(){window.removeEventListener("error",this._boundErrorHandler),window.removeEventListener("unhandledrejection",this._boundErrorHandler)}_handleError(H,Y){if(this._shouldReactToError(H)){this.crashes.push({message:H.message,stack:H.stack,filename:Y instanceof ErrorEvent?Y.filename:void 0,lineno:Y instanceof ErrorEvent?Y.lineno:void 0,colno:Y instanceof ErrorEvent?Y.colno:void 0,date:this._now()});const ne=this._shouldRestart();this.state="crashed",this._fire("stateChange"),this._fire("error",{error:H,causesRestart:ne}),ne?this._restart():(this.state="crashedPermanently",this._fire("stateChange"))}}_shouldReactToError(H){return H.is&&H.is("CKEditorError")&&H.context!==void 0&&H.context!==null&&this.state==="ready"&&this._isErrorComingFromThisItem(H)}_shouldRestart(){return this.crashes.length<=this._crashNumberLimit?!0:(this.crashes[this.crashes.length-1].date-this.crashes[this.crashes.length-1-this._crashNumberLimit].date)/this._crashNumberLimit>this._minimumNonErrorTimePeriod}}function C(U,H=new Set){const Y=[U],ne=new Set;let Me=0;for(;Y.length>Me;){const Ue=Y[Me++];if(!ne.has(Ue)&&M(Ue)&&!H.has(Ue))if(ne.add(Ue),Symbol.iterator in Ue)try{for(const $e of Ue)Y.push($e)}catch{}else for(const $e in Ue)$e!=="defaultValue"&&Y.push(Ue[$e])}return ne}function M(U){const H=Object.prototype.toString.call(U),Y=typeof U;return!(Y==="number"||Y==="boolean"||Y==="string"||Y==="symbol"||Y==="function"||H==="[object Date]"||H==="[object RegExp]"||H==="[object Module]"||U==null||U._watchdogExcluded||U instanceof EventTarget||U instanceof Event)}function T(U,H,Y=new Set){if(U===H&&typeof(ne=U)=="object"&&ne!==null)return!0;var ne;const Me=C(U,Y),Ue=C(H,Y);for(const $e of Me)if(Ue.has($e))return!0;return!1}const O=function(U){var H=typeof U;return U!=null&&(H=="object"||H=="function")},P=typeof ho=="object"&&ho&&ho.Object===Object&&ho;var j=typeof self=="object"&&self&&self.Object===Object&&self;const R=P||j||Function("return this")(),L=function(){return R.Date.now()};var q=/\s/;const ee=function(U){for(var H=U.length;H--&&q.test(U.charAt(H)););return H};var G=/^\s+/;const V=function(U){return U&&U.slice(0,ee(U)+1).replace(G,"")},X=R.Symbol;var Q=Object.prototype,ae=Q.hasOwnProperty,pe=Q.toString,me=X?X.toStringTag:void 0;const Pe=function(U){var H=ae.call(U,me),Y=U[me];try{U[me]=void 0;var ne=!0}catch{}var Me=pe.call(U);return ne&&(H?U[me]=Y:delete U[me]),Me};var De=Object.prototype.toString;const ue=function(U){return De.call(U)};var ze=X?X.toStringTag:void 0;const ke=function(U){return U==null?U===void 0?"[object Undefined]":"[object Null]":ze&&ze in Object(U)?Pe(U):ue(U)},se=function(U){return U!=null&&typeof U=="object"},ce=function(U){return typeof U=="symbol"||se(U)&&ke(U)=="[object Symbol]"};var xe=/^[-+]0x[0-9a-f]+$/i,Ae=/^0b[01]+$/i,Pt=/^0o[0-7]+$/i,te=parseInt;const Jt=function(U){if(typeof U=="number")return U;if(ce(U))return NaN;if(O(U)){var H=typeof U.valueOf=="function"?U.valueOf():U;U=O(H)?H+"":H}if(typeof U!="string")return U===0?U:+U;U=V(U);var Y=Ae.test(U);return Y||Pt.test(U)?te(U.slice(2),Y?2:8):xe.test(U)?NaN:+U};var Ce=Math.max,Ne=Math.min;const Xe=function(U,H,Y){var ne,Me,Ue,$e,We,Wt,qt=0,Ws=!1,xr=!1,Io=!0;if(typeof U!="function")throw new TypeError("Expected a function");function tr(Mn){var Vn=ne,Sr=Me;return ne=Me=void 0,qt=Mn,$e=U.apply(Sr,Vn)}function Ci(Mn){var Vn=Mn-Wt;return Wt===void 0||Vn>=H||Vn<0||xr&&Mn-qt>=Ue}function Er(){var Mn=L();if(Ci(Mn))return Ze(Mn);We=setTimeout(Er,function(Vn){var Sr=H-(Vn-Wt);return xr?Ne(Sr,Ue-(Vn-qt)):Sr}(Mn))}function Ze(Mn){return We=void 0,Io&&ne?tr(Mn):(ne=Me=void 0,$e)}function bo(){var Mn=L(),Vn=Ci(Mn);if(ne=arguments,Me=this,Wt=Mn,Vn){if(We===void 0)return function(Sr){return qt=Sr,We=setTimeout(Er,H),Ws?tr(Sr):$e}(Wt);if(xr)return clearTimeout(We),We=setTimeout(Er,H),tr(Wt)}return We===void 0&&(We=setTimeout(Er,H)),$e}return H=Jt(H)||0,O(Y)&&(Ws=!!Y.leading,Ue=(xr="maxWait"in Y)?Ce(Jt(Y.maxWait)||0,H):Ue,Io="trailing"in Y?!!Y.trailing:Io),bo.cancel=function(){We!==void 0&&clearTimeout(We),qt=0,ne=Wt=Me=We=void 0},bo.flush=function(){return We===void 0?$e:Ze(L())},bo},_t=function(U,H,Y){var ne=!0,Me=!0;if(typeof U!="function")throw new TypeError("Expected a function");return O(Y)&&(ne="leading"in Y?!!Y.leading:ne,Me="trailing"in Y?!!Y.trailing:Me),Xe(U,H,{leading:ne,maxWait:H,trailing:Me})},it=function(){this.__data__=[],this.size=0},xt=function(U,H){return U===H||U!=U&&H!=H},In=function(U,H){for(var Y=U.length;Y--;)if(xt(U[Y][0],H))return Y;return-1};var Bo=Array.prototype.splice;const Ye=function(U){var H=this.__data__,Y=In(H,U);return!(Y<0)&&(Y==H.length-1?H.pop():Bo.call(H,Y,1),--this.size,!0)},Gn=function(U){var H=this.__data__,Y=In(H,U);return Y<0?void 0:H[Y][1]},so=function(U){return In(this.__data__,U)>-1},Vr=function(U,H){var Y=this.__data__,ne=In(Y,U);return ne<0?(++this.size,Y.push([U,H])):Y[ne][1]=H,this};function yt(U){var H=-1,Y=U==null?0:U.length;for(this.clear();++H<Y;){var ne=U[H];this.set(ne[0],ne[1])}}yt.prototype.clear=it,yt.prototype.delete=Ye,yt.prototype.get=Gn,yt.prototype.has=so,yt.prototype.set=Vr;const hn=yt,go=function(){this.__data__=new hn,this.size=0},rn=function(U){var H=this.__data__,Y=H.delete(U);return this.size=H.size,Y},St=function(U){return this.__data__.get(U)},Xt=function(U){return this.__data__.has(U)},kr=function(U){if(!O(U))return!1;var H=ke(U);return H=="[object Function]"||H=="[object GeneratorFunction]"||H=="[object AsyncFunction]"||H=="[object Proxy]"},He=R["__core-js_shared__"];var lt=function(){var U=/[^.]+$/.exec(He&&He.keys&&He.keys.IE_PROTO||"");return U?"Symbol(src)_1."+U:""}();const Ut=function(U){return!!lt&&lt in U};var Kn=Function.prototype.toString;const Ct=function(U){if(U!=null){try{return Kn.call(U)}catch{}try{return U+""}catch{}}return""};var Ht=/^\[object .+?Constructor\]$/,Oo=Function.prototype,mo=Object.prototype,Cn=Oo.toString,oe=mo.hasOwnProperty,ie=RegExp("^"+Cn.call(oe).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");const fe=function(U){return!(!O(U)||Ut(U))&&(kr(U)?ie:Ht).test(Ct(U))},_e=function(U,H){return U==null?void 0:U[H]},Te=function(U,H){var Y=_e(U,H);return fe(Y)?Y:void 0},Be=Te(R,"Map"),Le=Te(Object,"create"),Oe=function(){this.__data__=Le?Le(null):{},this.size=0},Ee=function(U){var H=this.has(U)&&delete this.__data__[U];return this.size-=H?1:0,H};var pt=Object.prototype.hasOwnProperty;const fn=function(U){var H=this.__data__;if(Le){var Y=H[U];return Y==="__lodash_hash_undefined__"?void 0:Y}return pt.call(H,U)?H[U]:void 0};var ct=Object.prototype.hasOwnProperty;const $t=function(U){var H=this.__data__;return Le?H[U]!==void 0:ct.call(H,U)},sn=function(U,H){var Y=this.__data__;return this.size+=this.has(U)?0:1,Y[U]=Le&&H===void 0?"__lodash_hash_undefined__":H,this};function bt(U){var H=-1,Y=U==null?0:U.length;for(this.clear();++H<Y;){var ne=U[H];this.set(ne[0],ne[1])}}bt.prototype.clear=Oe,bt.prototype.delete=Ee,bt.prototype.get=fn,bt.prototype.has=$t,bt.prototype.set=sn;const Lo=bt,So=function(){this.size=0,this.__data__={hash:new Lo,map:new(Be||hn),string:new Lo}},Yn=function(U){var H=typeof U;return H=="string"||H=="number"||H=="symbol"||H=="boolean"?U!=="__proto__":U===null},Qn=function(U,H){var Y=U.__data__;return Yn(H)?Y[typeof H=="string"?"string":"hash"]:Y.map},Do=function(U){var H=Qn(this,U).delete(U);return this.size-=H?1:0,H},fi=function(U){return Qn(this,U).get(U)},Ur=function(U){return Qn(this,U).has(U)},Gi=function(U,H){var Y=Qn(this,U),ne=Y.size;return Y.set(U,H),this.size+=Y.size==ne?0:1,this};function zn(U){var H=-1,Y=U==null?0:U.length;for(this.clear();++H<Y;){var ne=U[H];this.set(ne[0],ne[1])}}zn.prototype.clear=So,zn.prototype.delete=Do,zn.prototype.get=fi,zn.prototype.has=Ur,zn.prototype.set=Gi;const tt=zn,ao=function(U,H){var Y=this.__data__;if(Y instanceof hn){var ne=Y.__data__;if(!Be||ne.length<199)return ne.push([U,H]),this.size=++Y.size,this;Y=this.__data__=new tt(ne)}return Y.set(U,H),this.size=Y.size,this};function Fn(U){var H=this.__data__=new hn(U);this.size=H.size}Fn.prototype.clear=go,Fn.prototype.delete=rn,Fn.prototype.get=St,Fn.prototype.has=Xt,Fn.prototype.set=ao;const dt=Fn,en=function(U,H){for(var Y=-1,ne=U==null?0:U.length;++Y<ne&&H(U[Y],Y,U)!==!1;);return U},Zn=function(){try{var U=Te(Object,"defineProperty");return U({},"",{}),U}catch{}}(),Hr=function(U,H,Y){H=="__proto__"&&Zn?Zn(U,H,{configurable:!0,enumerable:!0,value:Y,writable:!0}):U[H]=Y};var _s=Object.prototype.hasOwnProperty;const Zl=function(U,H,Y){var ne=U[H];_s.call(U,H)&&xt(ne,Y)&&(Y!==void 0||H in U)||Hr(U,H,Y)},ys=function(U,H,Y,ne){var Me=!Y;Y||(Y={});for(var Ue=-1,$e=H.length;++Ue<$e;){var We=H[Ue],Wt=ne?ne(Y[We],U[We],We,Y,U):void 0;Wt===void 0&&(Wt=U[We]),Me?Hr(Y,We,Wt):Zl(Y,We,Wt)}return Y},Jo=function(U,H){for(var Y=-1,ne=Array(U);++Y<U;)ne[Y]=H(Y);return ne},pi=function(U){return se(U)&&ke(U)=="[object Arguments]"};var Ia=Object.prototype,Cs=Ia.hasOwnProperty,Jn=Ia.propertyIsEnumerable;const Bd=pi(function(){return arguments}())?pi:function(U){return se(U)&&Cs.call(U,"callee")&&!Jn.call(U,"callee")},Ma=Array.isArray,Od=function(){return!1};var Na=r&&!r.nodeType&&r,br=Na&&!0&&n&&!n.nodeType&&n,gi=br&&br.exports===Na?R.Buffer:void 0;const mi=(gi?gi.isBuffer:void 0)||Od;var Jl=/^(?:0|[1-9]\d*)$/;const Ld=function(U,H){var Y=typeof U;return!!(H=H??9007199254740991)&&(Y=="number"||Y!="symbol"&&Jl.test(U))&&U>-1&&U%1==0&&U<H},ja=function(U){return typeof U=="number"&&U>-1&&U%1==0&&U<=9007199254740991};var Dt={};Dt["[object Float32Array]"]=Dt["[object Float64Array]"]=Dt["[object Int8Array]"]=Dt["[object Int16Array]"]=Dt["[object Int32Array]"]=Dt["[object Uint8Array]"]=Dt["[object Uint8ClampedArray]"]=Dt["[object Uint16Array]"]=Dt["[object Uint32Array]"]=!0,Dt["[object Arguments]"]=Dt["[object Array]"]=Dt["[object ArrayBuffer]"]=Dt["[object Boolean]"]=Dt["[object DataView]"]=Dt["[object Date]"]=Dt["[object Error]"]=Dt["[object Function]"]=Dt["[object Map]"]=Dt["[object Number]"]=Dt["[object Object]"]=Dt["[object RegExp]"]=Dt["[object Set]"]=Dt["[object String]"]=Dt["[object WeakMap]"]=!1;const Rd=function(U){return se(U)&&ja(U.length)&&!!Dt[ke(U)]},Pa=function(U){return function(H){return U(H)}};var Xl=r&&!r.nodeType&&r,Ro=Xl&&!0&&n&&!n.nodeType&&n,As=Ro&&Ro.exports===Xl&&P.process;const ki=function(){try{var U=Ro&&Ro.require&&Ro.require("util").types;return U||As&&As.binding&&As.binding("util")}catch{}}();var Ba=ki&&ki.isTypedArray;const xs=Ba?Pa(Ba):Rd;var ec=Object.prototype.hasOwnProperty;const tc=function(U,H){var Y=Ma(U),ne=!Y&&Bd(U),Me=!Y&&!ne&&mi(U),Ue=!Y&&!ne&&!Me&&xs(U),$e=Y||ne||Me||Ue,We=$e?Jo(U.length,String):[],Wt=We.length;for(var qt in U)!H&&!ec.call(U,qt)||$e&&(qt=="length"||Me&&(qt=="offset"||qt=="parent")||Ue&&(qt=="buffer"||qt=="byteLength"||qt=="byteOffset")||Ld(qt,Wt))||We.push(qt);return We};var zd=Object.prototype;const wr=function(U){var H=U&&U.constructor;return U===(typeof H=="function"&&H.prototype||zd)},vr=function(U,H){return function(Y){return U(H(Y))}},Es=vr(Object.keys,Object);var Oa=Object.prototype.hasOwnProperty;const $r=function(U){if(!wr(U))return Es(U);var H=[];for(var Y in Object(U))Oa.call(U,Y)&&Y!="constructor"&&H.push(Y);return H},bi=function(U){return U!=null&&ja(U.length)&&!kr(U)},La=function(U){return bi(U)?tc(U):$r(U)},Ss=function(U,H){return U&&ys(H,La(H),U)},Ra=function(U){var H=[];if(U!=null)for(var Y in Object(U))H.push(Y);return H};var Fd=Object.prototype.hasOwnProperty;const za=function(U){if(!O(U))return Ra(U);var H=wr(U),Y=[];for(var ne in U)(ne!="constructor"||!H&&Fd.call(U,ne))&&Y.push(ne);return Y},ko=function(U){return bi(U)?tc(U,!0):za(U)},Vd=function(U,H){return U&&ys(H,ko(H),U)};var Ds=r&&!r.nodeType&&r,Ts=Ds&&!0&&n&&!n.nodeType&&n,nc=Ts&&Ts.exports===Ds?R.Buffer:void 0,oc=nc?nc.allocUnsafe:void 0;const Fa=function(U,H){if(H)return U.slice();var Y=U.length,ne=oc?oc(Y):new U.constructor(Y);return U.copy(ne),ne},Ud=function(U,H){var Y=-1,ne=U.length;for(H||(H=Array(ne));++Y<ne;)H[Y]=U[Y];return H},rc=function(U,H){for(var Y=-1,ne=U==null?0:U.length,Me=0,Ue=[];++Y<ne;){var $e=U[Y];H($e,Y,U)&&(Ue[Me++]=$e)}return Ue},Va=function(){return[]};var ic=Object.prototype.propertyIsEnumerable,To=Object.getOwnPropertySymbols;const Ua=To?function(U){return U==null?[]:(U=Object(U),rc(To(U),function(H){return ic.call(U,H)}))}:Va,Ha=function(U,H){return ys(U,Ua(U),H)},Is=function(U,H){for(var Y=-1,ne=H.length,Me=U.length;++Y<ne;)U[Me+Y]=H[Y];return U},At=vr(Object.getPrototypeOf,Object),Xo=Object.getOwnPropertySymbols?function(U){for(var H=[];U;)Is(H,Ua(U)),U=At(U);return H}:Va,$a=function(U,H){return ys(U,Xo(U),H)},Ms=function(U,H,Y){var ne=H(U);return Ma(U)?ne:Is(ne,Y(U))},er=function(U){return Ms(U,La,Ua)},Wa=function(U){return Ms(U,ko,Xo)},_r=Te(R,"DataView"),Ns=Te(R,"Promise"),wi=Te(R,"Set"),yr=Te(R,"WeakMap");var qa="[object Map]",sc="[object Promise]",js="[object Set]",ac="[object WeakMap]",lc="[object DataView]",Hd=Ct(_r),Ps=Ct(Be),Ga=Ct(Ns),$d=Ct(wi),Wd=Ct(yr),zo=ke;(_r&&zo(new _r(new ArrayBuffer(1)))!=lc||Be&&zo(new Be)!=qa||Ns&&zo(Ns.resolve())!=sc||wi&&zo(new wi)!=js||yr&&zo(new yr)!=ac)&&(zo=function(U){var H=ke(U),Y=H=="[object Object]"?U.constructor:void 0,ne=Y?Ct(Y):"";if(ne)switch(ne){case Hd:return lc;case Ps:return qa;case Ga:return sc;case $d:return js;case Wd:return ac}return H});const Bs=zo;var vi=Object.prototype.hasOwnProperty;const qd=function(U){var H=U.length,Y=new U.constructor(H);return H&&typeof U[0]=="string"&&vi.call(U,"index")&&(Y.index=U.index,Y.input=U.input),Y},Ka=R.Uint8Array,Ki=function(U){var H=new U.constructor(U.byteLength);return new Ka(H).set(new Ka(U)),H},cc=function(U,H){var Y=H?Ki(U.buffer):U.buffer;return new U.constructor(Y,U.byteOffset,U.byteLength)};var Os=/\w*$/;const Ya=function(U){var H=new U.constructor(U.source,Os.exec(U));return H.lastIndex=U.lastIndex,H};var Ls=X?X.prototype:void 0,Rs=Ls?Ls.valueOf:void 0;const Yi=function(U){return Rs?Object(Rs.call(U)):{}},Gd=function(U,H){var Y=H?Ki(U.buffer):U.buffer;return new U.constructor(Y,U.byteOffset,U.length)},Qa=function(U,H,Y){var ne=U.constructor;switch(H){case"[object ArrayBuffer]":return Ki(U);case"[object Boolean]":case"[object Date]":return new ne(+U);case"[object DataView]":return cc(U,Y);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return Gd(U,Y);case"[object Map]":case"[object Set]":return new ne;case"[object Number]":case"[object String]":return new ne(U);case"[object RegExp]":return Ya(U);case"[object Symbol]":return Yi(U)}};var Qi=Object.create;const dc=function(){function U(){}return function(H){if(!O(H))return{};if(Qi)return Qi(H);U.prototype=H;var Y=new U;return U.prototype=void 0,Y}}(),Za=function(U){return typeof U.constructor!="function"||wr(U)?{}:dc(At(U))},Ja=function(U){return se(U)&&Bs(U)=="[object Map]"};var Xa=ki&&ki.isMap;const el=Xa?Pa(Xa):Ja,zs=function(U){return se(U)&&Bs(U)=="[object Set]"};var tl=ki&&ki.isSet;const Cr=tl?Pa(tl):zs;var Fs="[object Arguments]",Vs="[object Function]",Us="[object Object]",wt={};wt[Fs]=wt["[object Array]"]=wt["[object ArrayBuffer]"]=wt["[object DataView]"]=wt["[object Boolean]"]=wt["[object Date]"]=wt["[object Float32Array]"]=wt["[object Float64Array]"]=wt["[object Int8Array]"]=wt["[object Int16Array]"]=wt["[object Int32Array]"]=wt["[object Map]"]=wt["[object Number]"]=wt[Us]=wt["[object RegExp]"]=wt["[object Set]"]=wt["[object String]"]=wt["[object Symbol]"]=wt["[object Uint8Array]"]=wt["[object Uint8ClampedArray]"]=wt["[object Uint16Array]"]=wt["[object Uint32Array]"]=!0,wt["[object Error]"]=wt[Vs]=wt["[object WeakMap]"]=!1;const nl=function U(H,Y,ne,Me,Ue,$e){var We,Wt=1&Y,qt=2&Y,Ws=4&Y;if(ne&&(We=Ue?ne(H,Me,Ue,$e):ne(H)),We!==void 0)return We;if(!O(H))return H;var xr=Ma(H);if(xr){if(We=qd(H),!Wt)return Ud(H,We)}else{var Io=Bs(H),tr=Io==Vs||Io=="[object GeneratorFunction]";if(mi(H))return Fa(H,Wt);if(Io==Us||Io==Fs||tr&&!Ue){if(We=qt||tr?{}:Za(H),!Wt)return qt?$a(H,Vd(We,H)):Ha(H,Ss(We,H))}else{if(!wt[Io])return Ue?H:{};We=Qa(H,Io,Wt)}}$e||($e=new dt);var Ci=$e.get(H);if(Ci)return Ci;$e.set(H,We),Cr(H)?H.forEach(function(Ze){We.add(U(Ze,Y,ne,Ze,H,$e))}):el(H)&&H.forEach(function(Ze,bo){We.set(bo,U(Ze,Y,ne,bo,H,$e))});var Er=xr?void 0:(Ws?qt?Wa:er:qt?ko:La)(H);return en(Er||H,function(Ze,bo){Er&&(Ze=H[bo=Ze]),Zl(We,bo,U(Ze,Y,ne,bo,H,$e))}),We},ol=function(U,H){return nl(U,5,H=typeof H=="function"?H:void 0)};var uc=Function.prototype,hc=Object.prototype,fc=uc.toString,Kd=hc.hasOwnProperty,pc=fc.call(Object);const Yd=function(U){if(!se(U)||ke(U)!="[object Object]")return!1;var H=At(U);if(H===null)return!0;var Y=Kd.call(H,"constructor")&&H.constructor;return typeof Y=="function"&&Y instanceof Y&&fc.call(Y)==pc},gc=function(U){return se(U)&&U.nodeType===1&&!Yd(U)};class Ar extends _{constructor(H,Y={}){super(Y),this._editor=null,this._throttledSave=_t(this._save.bind(this),typeof Y.saveInterval=="number"?Y.saveInterval:5e3),H&&(this._creator=(ne,Me)=>H.create(ne,Me)),this._destructor=ne=>ne.destroy()}get editor(){return this._editor}get _item(){return this._editor}setCreator(H){this._creator=H}setDestructor(H){this._destructor=H}_restart(){return Promise.resolve().then(()=>(this.state="initializing",this._fire("stateChange"),this._destroy())).catch(H=>{console.error("An error happened during the editor destroying.",H)}).then(()=>{if(typeof this._elementOrData=="string")return this.create(this._data,this._config,this._config.context);{const H=Object.assign({},this._config,{initialData:this._data});return this.create(this._elementOrData,H,H.context)}}).then(()=>{this._fire("restart")})}create(H=this._elementOrData,Y=this._config,ne){return Promise.resolve().then(()=>(super._startErrorHandling(),this._elementOrData=H,this._config=this._cloneEditorConfiguration(Y)||{},this._config.context=ne,this._creator(H,this._config))).then(Me=>{this._editor=Me,Me.model.document.on("change:data",this._throttledSave),this._lastDocumentVersion=Me.model.document.version,this._data=this._getData(),this.state="ready",this._fire("stateChange")})}destroy(){return Promise.resolve().then(()=>(this.state="destroyed",this._fire("stateChange"),super.destroy(),this._destroy()))}_destroy(){return Promise.resolve().then(()=>{this._stopErrorHandling(),this._throttledSave.flush();const H=this._editor;return this._editor=null,H.model.document.off("change:data",this._throttledSave),this._destructor(H)})}_save(){const H=this._editor.model.document.version;try{this._data=this._getData(),this._lastDocumentVersion=H}catch(Y){console.error(Y,"An error happened during restoring editor data. Editor will be restored from the previously saved data.")}}_setExcludedProperties(H){this._excludedProps=H}_getData(){const H={};for(const Y of this._editor.model.document.getRootNames())H[Y]=this._editor.data.get({rootName:Y});return H}_isErrorComingFromThisItem(H){return T(this._editor,H.context,this._excludedProps)}_cloneEditorConfiguration(H){return ol(H,(Y,ne)=>gc(Y)||ne==="context"?Y:void 0)}}const Fo=Symbol("MainQueueId");class Hs extends _{constructor(H,Y={}){super(Y),this._watchdogs=new Map,this._context=null,this._contextProps=new Set,this._actionQueues=new Qd,this._watchdogConfig=Y,this._creator=ne=>H.create(ne),this._destructor=ne=>ne.destroy(),this._actionQueues.onEmpty(()=>{this.state==="initializing"&&(this.state="ready",this._fire("stateChange"))})}setCreator(H){this._creator=H}setDestructor(H){this._destructor=H}get context(){return this._context}create(H={}){return this._actionQueues.enqueue(Fo,()=>(this._contextConfig=H,this._create()))}getItem(H){return this._getWatchdog(H)._item}getItemState(H){return this._getWatchdog(H).state}add(H){const Y=Zi(H);return Promise.all(Y.map(ne=>this._actionQueues.enqueue(ne.id,()=>{if(this.state==="destroyed")throw new Error("Cannot add items to destroyed watchdog.");if(!this._context)throw new Error("Context was not created yet. You should call the `ContextWatchdog#create()` method first.");let Me;if(this._watchdogs.has(ne.id))throw new Error(`Item with the given id is already added: '${ne.id}'.`);if(ne.type==="editor")return Me=new Ar(null,this._watchdogConfig),Me.setCreator(ne.creator),Me._setExcludedProperties(this._contextProps),ne.destructor&&Me.setDestructor(ne.destructor),this._watchdogs.set(ne.id,Me),Me.on("error",(Ue,{error:$e,causesRestart:We})=>{this._fire("itemError",{itemId:ne.id,error:$e}),We&&this._actionQueues.enqueue(ne.id,()=>new Promise(Wt=>{const qt=()=>{Me.off("restart",qt),this._fire("itemRestart",{itemId:ne.id}),Wt()};Me.on("restart",qt)}))}),Me.create(ne.sourceElementOrData,ne.config,this._context);throw new Error(`Not supported item type: '${ne.type}'.`)})))}remove(H){const Y=Zi(H);return Promise.all(Y.map(ne=>this._actionQueues.enqueue(ne,()=>{const Me=this._getWatchdog(ne);return this._watchdogs.delete(ne),Me.destroy()})))}destroy(){return this._actionQueues.enqueue(Fo,()=>(this.state="destroyed",this._fire("stateChange"),super.destroy(),this._destroy()))}_restart(){return this._actionQueues.enqueue(Fo,()=>(this.state="initializing",this._fire("stateChange"),this._destroy().catch(H=>{console.error("An error happened during destroying the context or items.",H)}).then(()=>this._create()).then(()=>this._fire("restart"))))}_create(){return Promise.resolve().then(()=>(this._startErrorHandling(),this._creator(this._contextConfig))).then(H=>(this._context=H,this._contextProps=C(this._context),Promise.all(Array.from(this._watchdogs.values()).map(Y=>(Y._setExcludedProperties(this._contextProps),Y.create(void 0,void 0,this._context))))))}_destroy(){return Promise.resolve().then(()=>{this._stopErrorHandling();const H=this._context;return this._context=null,this._contextProps=new Set,Promise.all(Array.from(this._watchdogs.values()).map(Y=>Y.destroy())).then(()=>this._destructor(H))})}_getWatchdog(H){const Y=this._watchdogs.get(H);if(!Y)throw new Error(`Item with the given id was not registered: ${H}.`);return Y}_isErrorComingFromThisItem(H){for(const Y of this._watchdogs.values())if(Y._isErrorComingFromThisItem(H))return!1;return T(this._context,H.context)}}class Qd{constructor(){this._onEmptyCallbacks=[],this._queues=new Map,this._activeActions=0}onEmpty(H){this._onEmptyCallbacks.push(H)}enqueue(H,Y){const ne=H===Fo;this._activeActions++,this._queues.get(H)||this._queues.set(H,Promise.resolve());const Me=(ne?Promise.all(this._queues.values()):Promise.all([this._queues.get(Fo),this._queues.get(H)])).then(Y),Ue=Me.catch(()=>{});return this._queues.set(H,Ue),Me.finally(()=>{this._activeActions--,this._queues.get(H)===Ue&&this._activeActions===0&&this._onEmptyCallbacks.forEach($e=>$e())})}}function Zi(U){return Array.isArray(U)?U:[U]}const $s=g().createContext("contextWatchdog");class rl extends g().Component{constructor(H,Y){super(H,Y),this.contextWatchdog=null,this.props.isLayoutReady&&this._initializeContextWatchdog(this.props.config)}shouldComponentUpdate(H){return this._shouldComponentUpdate(H)}async _shouldComponentUpdate(H){return H.id!==this.props.id&&(this.contextWatchdog&&await this.contextWatchdog.destroy(),await this._initializeContextWatchdog(H.config)),H.isLayoutReady&&!this.contextWatchdog?(await this._initializeContextWatchdog(H.config),!0):this.props.children!==H.children}render(){return g().createElement($s.Provider,{value:this.contextWatchdog},this.props.children)}componentWillUnmount(){this._destroyContext()}async _initializeContextWatchdog(H){this.contextWatchdog=new Hs(this.props.context,this.props.watchdogConfig),this.contextWatchdog.on("error",(Y,ne)=>{this.props.onError(ne.error,{phase:"runtime",willContextRestart:ne.causesRestart})}),this.contextWatchdog.on("stateChange",()=>{this.contextWatchdog.state==="ready"&&this.props.onReady&&this.props.onReady(this.contextWatchdog.context)}),await this.contextWatchdog.create(H).catch(Y=>{this.props.onError(Y,{phase:"initialization",willContextRestart:!1})})}async _destroyContext(){this.contextWatchdog&&(await this.contextWatchdog.destroy(),this.contextWatchdog=null)}}rl.defaultProps={isLayoutReady:!0,onError:(U,H)=>console.error(U,H)},rl.propTypes={id:A().string,isLayoutReady:A().bool,context:A().func,watchdogConfig:A().object,config:A().object,onReady:A().func,onError:A().func};const _i="Lock from React integration (@ckeditor/ckeditor5-react)";class yi extends g().Component{constructor(H){super(H),this.editorDestructionInProgress=null,this.domContainer=g().createRef(),this.watchdog=null;const{CKEDITOR_VERSION:Y}=window;if(Y){const[ne]=Y.split(".").map(Number);ne<37&&console.warn("The <CKEditor> component requires using CKEditor 5 in version 37 or higher.")}else console.warn('Cannot find the "CKEDITOR_VERSION" in the "window" scope.')}get editor(){return this.props.disableWatchdog?this.instance:this.watchdog?this.watchdog.editor:null}shouldComponentUpdate(H){return!!this.editor&&(H.id!==this.props.id||H.disableWatchdog!==this.props.disableWatchdog||(this._shouldUpdateEditor(H)&&this.editor.data.set(H.data),"disabled"in H&&(H.disabled?this.editor.enableReadOnlyMode(_i):this.editor.disableReadOnlyMode(_i)),!1))}async componentDidMount(){await this._initializeEditor()}async componentDidUpdate(){await this._destroyEditor(),await this._initializeEditor()}async componentWillUnmount(){await this._destroyEditor()}render(){return g().createElement("div",{ref:this.domContainer})}async _initializeEditor(){await this.editorDestructionInProgress,this.props.disableWatchdog?this.instance=await this._createEditor(this.domContainer.current,this._getConfig()):this.watchdog||(this.context instanceof Hs?this.watchdog=new mc(this.context):this.watchdog=new yi._EditorWatchdog(this.props.editor,this.props.watchdogConfig),this.watchdog.setCreator((H,Y)=>this._createEditor(H,Y)),this.watchdog.on("error",(H,{error:Y,causesRestart:ne})=>{(this.props.onError||console.error)(Y,{phase:"runtime",willEditorRestart:ne})}),await this.watchdog.create(this.domContainer.current,this._getConfig()).catch(H=>{(this.props.onError||console.error)(H,{phase:"initialization",willEditorRestart:!1})}))}_createEditor(H,Y){return this.props.editor.create(H,Y).then(ne=>{"disabled"in this.props&&this.props.disabled&&ne.enableReadOnlyMode(_i);const Me=ne.model.document,Ue=ne.editing.view.document;return Me.on("change:data",$e=>{this.props.onChange&&this.props.onChange($e,ne)}),Ue.on("focus",$e=>{this.props.onFocus&&this.props.onFocus($e,ne)}),Ue.on("blur",$e=>{this.props.onBlur&&this.props.onBlur($e,ne)}),setTimeout(()=>{this.props.onReady&&this.props.onReady(ne)}),ne})}async _destroyEditor(){this.editorDestructionInProgress=new Promise(H=>{setTimeout(async()=>this.watchdog?(await this.watchdog.destroy(),this.watchdog=null,H()):this.instance?(await this.instance.destroy(),this.instance=null,H()):void H())})}_shouldUpdateEditor(H){return this.props.data!==H.data&&this.editor.data.get()!==H.data}_getConfig(){const H=this.props.config||{};return this.props.data&&H.initialData&&console.warn("Editor data should be provided either using `config.initialData` or `data` properties. The config property is over the data value and the first one will be used when specified both."),{...H,initialData:H.initialData||this.props.data||""}}}yi.contextType=$s,yi.propTypes={editor:A().func.isRequired,data:A().string,config:A().object,disableWatchdog:A().bool,watchdogConfig:A().object,onChange:A().func,onReady:A().func,onFocus:A().func,onBlur:A().func,onError:A().func,disabled:A().bool,id:A().any},yi._EditorWatchdog=Ar;class mc{constructor(H){this._contextWatchdog=H,this._id=function(){const Y=4294967296*Math.random()>>>0,ne=4294967296*Math.random()>>>0,Me=4294967296*Math.random()>>>0,Ue=4294967296*Math.random()>>>0;return"e"+x[Y>>0&255]+x[Y>>8&255]+x[Y>>16&255]+x[Y>>24&255]+x[ne>>0&255]+x[ne>>8&255]+x[ne>>16&255]+x[ne>>24&255]+x[Me>>0&255]+x[Me>>8&255]+x[Me>>16&255]+x[Me>>24&255]+x[Ue>>0&255]+x[Ue>>8&255]+x[Ue>>16&255]+x[Ue>>24&255]}()}setCreator(H){this._creator=H}create(H,Y){return this._contextWatchdog.add({sourceElementOrData:H,config:Y,creator:this._creator,id:this._id,type:"editor"})}on(H,Y){this._contextWatchdog.on("itemError",(ne,{itemId:Me,error:Ue})=>{Me===this._id&&Y(null,{error:Ue,causesRestart:void 0})})}destroy(){return this._contextWatchdog.state==="ready"?this._contextWatchdog.remove(this._id):Promise.resolve()}get editor(){return this._contextWatchdog.getItem(this._id)}}})(),k})())})(Vp,Vp.exports);var jI=Vp.exports,Up={exports:{}};Up.exports;(function(n,r){(function(l){const d=l.en=l.en||{};d.dictionary=Object.assign(d.dictionary||{},{"%0 of %1":"%0 of %1",Accept:"Accept","Align cell text to the bottom":"Align cell text to the bottom","Align cell text to the center":"Align cell text to the center","Align cell text to the left":"Align cell text to the left","Align cell text to the middle":"Align cell text to the middle","Align cell text to the right":"Align cell text to the right","Align cell text to the top":"Align cell text to the top","Align table to the left":"Align table to the left","Align table to the right":"Align table to the right",Alignment:"Alignment",Aquamarine:"Aquamarine",Background:"Background",Black:"Black","Block quote":"Block quote",Blue:"Blue",Bold:"Bold",Border:"Border","Break text":"Break text","Bulleted List":"Bulleted List","Bulleted list styles toolbar":"Bulleted list styles toolbar",Cancel:"Cancel","Cannot access default workspace.":"Cannot access default workspace.","Cannot determine a category for the uploaded file.":"Cannot determine a category for the uploaded file.","Cannot upload file:":"Cannot upload file:","Caption for image: %0":"Caption for image: %0","Caption for the image":"Caption for the image","Cell properties":"Cell properties","Center table":"Center table","Centered image":"Centered image","Change image text alternative":"Change image text alternative","Choose heading":"Choose heading",Circle:"Circle",Code:"Code",Color:"Color","Color picker":"Color picker",Column:"Column","Could not insert image at the current position.":"Could not insert image at the current position.","Could not obtain resized image URL.":"Could not obtain resized image URL.",Dashed:"Dashed",Decimal:"Decimal","Decimal with leading zero":"Decimal with leading zero","Decrease indent":"Decrease indent","Delete column":"Delete column","Delete row":"Delete row","Dim grey":"Dim grey",Dimensions:"Dimensions",Disc:"Disc",Dotted:"Dotted",Double:"Double",Downloadable:"Downloadable","Dropdown toolbar":"Dropdown toolbar","Edit block":"Edit block","Edit link":"Edit link","Editor block content toolbar":"Editor block content toolbar","Editor contextual toolbar":"Editor contextual toolbar","Editor editing area: %0":"Editor editing area: %0","Editor toolbar":"Editor toolbar","Enter image caption":"Enter image caption","Enter table caption":"Enter table caption","Full size image":"Full size image",Green:"Green",Grey:"Grey",Groove:"Groove","Header column":"Header column","Header row":"Header row",Heading:"Heading","Heading 1":"Heading 1","Heading 2":"Heading 2","Heading 3":"Heading 3","Heading 4":"Heading 4","Heading 5":"Heading 5","Heading 6":"Heading 6",Height:"Height",HEX:"HEX","Horizontal text alignment toolbar":"Horizontal text alignment toolbar","Image resize list":"Image resize list","Image toolbar":"Image toolbar","image widget":"image widget","In line":"In line","Increase indent":"Increase indent",Insert:"Insert","Insert column left":"Insert column left","Insert column right":"Insert column right","Insert image":"Insert image","Insert image or file":"Insert image or file","Insert image via URL":"Insert image via URL","Insert media":"Insert media","Insert paragraph after block":"Insert paragraph after block","Insert paragraph before block":"Insert paragraph before block","Insert row above":"Insert row above","Insert row below":"Insert row below","Insert table":"Insert table","Inserting image failed":"Inserting image failed",Inset:"Inset",Italic:"Italic","Justify cell text":"Justify cell text","Left aligned image":"Left aligned image","Light blue":"Light blue","Light green":"Light green","Light grey":"Light grey",Link:"Link","Link image":"Link image","Link URL":"Link URL","List properties":"List properties","Lower-latin":"Lower-latin","Lower–roman":"Lower–roman","Media toolbar":"Media toolbar","Media URL":"Media URL","media widget":"media widget","Merge cell down":"Merge cell down","Merge cell left":"Merge cell left","Merge cell right":"Merge cell right","Merge cell up":"Merge cell up","Merge cells":"Merge cells",Next:"Next",None:"None","Numbered List":"Numbered List","Numbered list styles toolbar":"Numbered list styles toolbar","Open file manager":"Open file manager","Open in a new tab":"Open in a new tab","Open link in new tab":"Open link in new tab","Open media in new tab":"Open media in new tab",Orange:"Orange",Original:"Original",Outset:"Outset",Padding:"Padding",Paragraph:"Paragraph","Paste the media URL in the input.":"Paste the media URL in the input.","Press Enter to type after or press Shift + Enter to type before the widget":"Press Enter to type after or press Shift + Enter to type before the widget",Previous:"Previous",Purple:"Purple",Red:"Red",Redo:"Redo","Remove color":"Remove color","Resize image":"Resize image","Resize image to %0":"Resize image to %0","Resize image to the original size":"Resize image to the original size","Restore default":"Restore default","Reversed order":"Reversed order","Rich Text Editor":"Rich Text Editor",Ridge:"Ridge","Right aligned image":"Right aligned image",Row:"Row",Save:"Save","Select all":"Select all","Select column":"Select column","Select row":"Select row","Selecting resized image failed":"Selecting resized image failed","Show more items":"Show more items","Side image":"Side image",Solid:"Solid","Split cell horizontally":"Split cell horizontally","Split cell vertically":"Split cell vertically",Square:"Square","Start at":"Start at","Start index must be greater than 0.":"Start index must be greater than 0.",Strikethrough:"Strikethrough",Style:"Style",Subscript:"Subscript",Superscript:"Superscript","Table alignment toolbar":"Table alignment toolbar","Table cell text alignment":"Table cell text alignment","Table properties":"Table properties","Table toolbar":"Table toolbar","Text alternative":"Text alternative",'The color is invalid. Try "#FF0000" or "rgb(255,0,0)" or "red".':'The color is invalid. Try "#FF0000" or "rgb(255,0,0)" or "red".',"The URL must not be empty.":"The URL must not be empty.",'The value is invalid. Try "10px" or "2em" or simply "2".':'The value is invalid. Try "10px" or "2em" or simply "2".',"This link has no URL":"This link has no URL","This media URL is not supported.":"This media URL is not supported.","Tip: Paste the URL into the content to embed faster.":"Tip: Paste the URL into the content to embed faster.","To-do List":"To-do List","Toggle caption off":"Toggle caption off","Toggle caption on":"Toggle caption on","Toggle the circle list style":"Toggle the circle list style","Toggle the decimal list style":"Toggle the decimal list style","Toggle the decimal with leading zero list style":"Toggle the decimal with leading zero list style","Toggle the disc list style":"Toggle the disc list style","Toggle the lower–latin list style":"Toggle the lower–latin list style","Toggle the lower–roman list style":"Toggle the lower–roman list style","Toggle the square list style":"Toggle the square list style","Toggle the upper–latin list style":"Toggle the upper–latin list style","Toggle the upper–roman list style":"Toggle the upper–roman list style",Turquoise:"Turquoise","Type or paste your content here.":"Type or paste your content here.","Type your title":"Type your title",Underline:"Underline",Undo:"Undo",Unlink:"Unlink",Update:"Update","Update image URL":"Update image URL","Upload failed":"Upload failed","Upload in progress":"Upload in progress","Upper-latin":"Upper-latin","Upper-roman":"Upper-roman","Vertical text alignment toolbar":"Vertical text alignment toolbar",White:"White","Widget toolbar":"Widget toolbar",Width:"Width","Wrap text":"Wrap text",Yellow:"Yellow"})})(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={})),function(l,d){n.exports=d()}(self,()=>(()=>{var l={4959:(k,b,g)=>{const v=g(1103),A={};for(const _ of Object.keys(v))A[v[_]]=_;const x={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};k.exports=x;for(const _ of Object.keys(x)){if(!("channels"in x[_]))throw new Error("missing channels property: "+_);if(!("labels"in x[_]))throw new Error("missing channel labels property: "+_);if(x[_].labels.length!==x[_].channels)throw new Error("channel and label counts mismatch: "+_);const{channels:C,labels:M}=x[_];delete x[_].channels,delete x[_].labels,Object.defineProperty(x[_],"channels",{value:C}),Object.defineProperty(x[_],"labels",{value:M})}x.rgb.hsl=function(_){const C=_[0]/255,M=_[1]/255,T=_[2]/255,O=Math.min(C,M,T),P=Math.max(C,M,T),j=P-O;let R,L;P===O?R=0:C===P?R=(M-T)/j:M===P?R=2+(T-C)/j:T===P&&(R=4+(C-M)/j),R=Math.min(60*R,360),R<0&&(R+=360);const q=(O+P)/2;return L=P===O?0:q<=.5?j/(P+O):j/(2-P-O),[R,100*L,100*q]},x.rgb.hsv=function(_){let C,M,T,O,P;const j=_[0]/255,R=_[1]/255,L=_[2]/255,q=Math.max(j,R,L),ee=q-Math.min(j,R,L),G=function(V){return(q-V)/6/ee+.5};return ee===0?(O=0,P=0):(P=ee/q,C=G(j),M=G(R),T=G(L),j===q?O=T-M:R===q?O=.3333333333333333+C-T:L===q&&(O=.6666666666666666+M-C),O<0?O+=1:O>1&&(O-=1)),[360*O,100*P,100*q]},x.rgb.hwb=function(_){const C=_[0],M=_[1];let T=_[2];const O=x.rgb.hsl(_)[0],P=1/255*Math.min(C,Math.min(M,T));return T=1-.00392156862745098*Math.max(C,Math.max(M,T)),[O,100*P,100*T]},x.rgb.cmyk=function(_){const C=_[0]/255,M=_[1]/255,T=_[2]/255,O=Math.min(1-C,1-M,1-T);return[100*((1-C-O)/(1-O)||0),100*((1-M-O)/(1-O)||0),100*((1-T-O)/(1-O)||0),100*O]},x.rgb.keyword=function(_){const C=A[_];if(C)return C;let M,T=1/0;for(const j of Object.keys(v)){const R=v[j],L=(P=R,((O=_)[0]-P[0])**2+(O[1]-P[1])**2+(O[2]-P[2])**2);L<T&&(T=L,M=j)}var O,P;return M},x.keyword.rgb=function(_){return v[_]},x.rgb.xyz=function(_){let C=_[0]/255,M=_[1]/255,T=_[2]/255;return C=C>.04045?((C+.055)/1.055)**2.4:C/12.92,M=M>.04045?((M+.055)/1.055)**2.4:M/12.92,T=T>.04045?((T+.055)/1.055)**2.4:T/12.92,[100*(.4124*C+.3576*M+.1805*T),100*(.2126*C+.7152*M+.0722*T),100*(.0193*C+.1192*M+.9505*T)]},x.rgb.lab=function(_){const C=x.rgb.xyz(_);let M=C[0],T=C[1],O=C[2];return M/=95.047,T/=100,O/=108.883,M=M>.008856?M**.3333333333333333:7.787*M+.13793103448275862,T=T>.008856?T**.3333333333333333:7.787*T+.13793103448275862,O=O>.008856?O**.3333333333333333:7.787*O+.13793103448275862,[116*T-16,500*(M-T),200*(T-O)]},x.hsl.rgb=function(_){const C=_[0]/360,M=_[1]/100,T=_[2]/100;let O,P,j;if(M===0)return j=255*T,[j,j,j];O=T<.5?T*(1+M):T+M-T*M;const R=2*T-O,L=[0,0,0];for(let q=0;q<3;q++)P=C+.3333333333333333*-(q-1),P<0&&P++,P>1&&P--,j=6*P<1?R+6*(O-R)*P:2*P<1?O:3*P<2?R+(O-R)*(.6666666666666666-P)*6:R,L[q]=255*j;return L},x.hsl.hsv=function(_){const C=_[0];let M=_[1]/100,T=_[2]/100,O=M;const P=Math.max(T,.01);return T*=2,M*=T<=1?T:2-T,O*=P<=1?P:2-P,[C,100*(T===0?2*O/(P+O):2*M/(T+M)),100*((T+M)/2)]},x.hsv.rgb=function(_){const C=_[0]/60,M=_[1]/100;let T=_[2]/100;const O=Math.floor(C)%6,P=C-Math.floor(C),j=255*T*(1-M),R=255*T*(1-M*P),L=255*T*(1-M*(1-P));switch(T*=255,O){case 0:return[T,L,j];case 1:return[R,T,j];case 2:return[j,T,L];case 3:return[j,R,T];case 4:return[L,j,T];case 5:return[T,j,R]}},x.hsv.hsl=function(_){const C=_[0],M=_[1]/100,T=_[2]/100,O=Math.max(T,.01);let P,j;j=(2-M)*T;const R=(2-M)*O;return P=M*O,P/=R<=1?R:2-R,P=P||0,j/=2,[C,100*P,100*j]},x.hwb.rgb=function(_){const C=_[0]/360;let M=_[1]/100,T=_[2]/100;const O=M+T;let P;O>1&&(M/=O,T/=O);const j=Math.floor(6*C),R=1-T;P=6*C-j,1&j&&(P=1-P);const L=M+P*(R-M);let q,ee,G;switch(j){default:case 6:case 0:q=R,ee=L,G=M;break;case 1:q=L,ee=R,G=M;break;case 2:q=M,ee=R,G=L;break;case 3:q=M,ee=L,G=R;break;case 4:q=L,ee=M,G=R;break;case 5:q=R,ee=M,G=L}return[255*q,255*ee,255*G]},x.cmyk.rgb=function(_){const C=_[0]/100,M=_[1]/100,T=_[2]/100,O=_[3]/100;return[255*(1-Math.min(1,C*(1-O)+O)),255*(1-Math.min(1,M*(1-O)+O)),255*(1-Math.min(1,T*(1-O)+O))]},x.xyz.rgb=function(_){const C=_[0]/100,M=_[1]/100,T=_[2]/100;let O,P,j;return O=3.2406*C+-1.5372*M+-.4986*T,P=-.9689*C+1.8758*M+.0415*T,j=.0557*C+-.204*M+1.057*T,O=O>.0031308?1.055*O**.4166666666666667-.055:12.92*O,P=P>.0031308?1.055*P**.4166666666666667-.055:12.92*P,j=j>.0031308?1.055*j**.4166666666666667-.055:12.92*j,O=Math.min(Math.max(0,O),1),P=Math.min(Math.max(0,P),1),j=Math.min(Math.max(0,j),1),[255*O,255*P,255*j]},x.xyz.lab=function(_){let C=_[0],M=_[1],T=_[2];return C/=95.047,M/=100,T/=108.883,C=C>.008856?C**.3333333333333333:7.787*C+.13793103448275862,M=M>.008856?M**.3333333333333333:7.787*M+.13793103448275862,T=T>.008856?T**.3333333333333333:7.787*T+.13793103448275862,[116*M-16,500*(C-M),200*(M-T)]},x.lab.xyz=function(_){let C,M,T;M=(_[0]+16)/116,C=_[1]/500+M,T=M-_[2]/200;const O=M**3,P=C**3,j=T**3;return M=O>.008856?O:(M-.13793103448275862)/7.787,C=P>.008856?P:(C-.13793103448275862)/7.787,T=j>.008856?j:(T-.13793103448275862)/7.787,C*=95.047,M*=100,T*=108.883,[C,M,T]},x.lab.lch=function(_){const C=_[0],M=_[1],T=_[2];let O;return O=360*Math.atan2(T,M)/2/Math.PI,O<0&&(O+=360),[C,Math.sqrt(M*M+T*T),O]},x.lch.lab=function(_){const C=_[0],M=_[1],T=_[2]/360*2*Math.PI;return[C,M*Math.cos(T),M*Math.sin(T)]},x.rgb.ansi16=function(_,C=null){const[M,T,O]=_;let P=C===null?x.rgb.hsv(_)[2]:C;if(P=Math.round(P/50),P===0)return 30;let j=30+(Math.round(O/255)<<2|Math.round(T/255)<<1|Math.round(M/255));return P===2&&(j+=60),j},x.hsv.ansi16=function(_){return x.rgb.ansi16(x.hsv.rgb(_),_[2])},x.rgb.ansi256=function(_){const C=_[0],M=_[1],T=_[2];return C===M&&M===T?C<8?16:C>248?231:Math.round((C-8)/247*24)+232:16+36*Math.round(C/255*5)+6*Math.round(M/255*5)+Math.round(T/255*5)},x.ansi16.rgb=function(_){let C=_%10;if(C===0||C===7)return _>50&&(C+=3.5),C=C/10.5*255,[C,C,C];const M=.5*(1+~~(_>50));return[(1&C)*M*255,(C>>1&1)*M*255,(C>>2&1)*M*255]},x.ansi256.rgb=function(_){if(_>=232){const M=10*(_-232)+8;return[M,M,M]}let C;return _-=16,[Math.floor(_/36)/5*255,Math.floor((C=_%36)/6)/5*255,C%6/5*255]},x.rgb.hex=function(_){const C=(((255&Math.round(_[0]))<<16)+((255&Math.round(_[1]))<<8)+(255&Math.round(_[2]))).toString(16).toUpperCase();return"000000".substring(C.length)+C},x.hex.rgb=function(_){const C=_.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!C)return[0,0,0];let M=C[0];C[0].length===3&&(M=M.split("").map(O=>O+O).join(""));const T=parseInt(M,16);return[T>>16&255,T>>8&255,255&T]},x.rgb.hcg=function(_){const C=_[0]/255,M=_[1]/255,T=_[2]/255,O=Math.max(Math.max(C,M),T),P=Math.min(Math.min(C,M),T),j=O-P;let R,L;return R=j<1?P/(1-j):0,L=j<=0?0:O===C?(M-T)/j%6:O===M?2+(T-C)/j:4+(C-M)/j,L/=6,L%=1,[360*L,100*j,100*R]},x.hsl.hcg=function(_){const C=_[1]/100,M=_[2]/100,T=M<.5?2*C*M:2*C*(1-M);let O=0;return T<1&&(O=(M-.5*T)/(1-T)),[_[0],100*T,100*O]},x.hsv.hcg=function(_){const C=_[1]/100,M=_[2]/100,T=C*M;let O=0;return T<1&&(O=(M-T)/(1-T)),[_[0],100*T,100*O]},x.hcg.rgb=function(_){const C=_[0]/360,M=_[1]/100,T=_[2]/100;if(M===0)return[255*T,255*T,255*T];const O=[0,0,0],P=C%1*6,j=P%1,R=1-j;let L=0;switch(Math.floor(P)){case 0:O[0]=1,O[1]=j,O[2]=0;break;case 1:O[0]=R,O[1]=1,O[2]=0;break;case 2:O[0]=0,O[1]=1,O[2]=j;break;case 3:O[0]=0,O[1]=R,O[2]=1;break;case 4:O[0]=j,O[1]=0,O[2]=1;break;default:O[0]=1,O[1]=0,O[2]=R}return L=(1-M)*T,[255*(M*O[0]+L),255*(M*O[1]+L),255*(M*O[2]+L)]},x.hcg.hsv=function(_){const C=_[1]/100,M=C+_[2]/100*(1-C);let T=0;return M>0&&(T=C/M),[_[0],100*T,100*M]},x.hcg.hsl=function(_){const C=_[1]/100,M=_[2]/100*(1-C)+.5*C;let T=0;return M>0&&M<.5?T=C/(2*M):M>=.5&&M<1&&(T=C/(2*(1-M))),[_[0],100*T,100*M]},x.hcg.hwb=function(_){const C=_[1]/100,M=C+_[2]/100*(1-C);return[_[0],100*(M-C),100*(1-M)]},x.hwb.hcg=function(_){const C=_[1]/100,M=1-_[2]/100,T=M-C;let O=0;return T<1&&(O=(M-T)/(1-T)),[_[0],100*T,100*O]},x.apple.rgb=function(_){return[_[0]/65535*255,_[1]/65535*255,_[2]/65535*255]},x.rgb.apple=function(_){return[_[0]/255*65535,_[1]/255*65535,_[2]/255*65535]},x.gray.rgb=function(_){return[_[0]/100*255,_[0]/100*255,_[0]/100*255]},x.gray.hsl=function(_){return[0,0,_[0]]},x.gray.hsv=x.gray.hsl,x.gray.hwb=function(_){return[0,100,_[0]]},x.gray.cmyk=function(_){return[0,0,0,_[0]]},x.gray.lab=function(_){return[_[0],0,0]},x.gray.hex=function(_){const C=255&Math.round(_[0]/100*255),M=((C<<16)+(C<<8)+C).toString(16).toUpperCase();return"000000".substring(M.length)+M},x.rgb.gray=function(_){return[(_[0]+_[1]+_[2])/3/255*100]}},841:(k,b,g)=>{const v=g(4959),A=g(9325),x={};Object.keys(v).forEach(_=>{x[_]={},Object.defineProperty(x[_],"channels",{value:v[_].channels}),Object.defineProperty(x[_],"labels",{value:v[_].labels});const C=A(_);Object.keys(C).forEach(M=>{const T=C[M];x[_][M]=function(O){const P=function(...j){const R=j[0];if(R==null)return R;R.length>1&&(j=R);const L=O(j);if(typeof L=="object")for(let q=L.length,ee=0;ee<q;ee++)L[ee]=Math.round(L[ee]);return L};return"conversion"in O&&(P.conversion=O.conversion),P}(T),x[_][M].raw=function(O){const P=function(...j){const R=j[0];return R==null?R:(R.length>1&&(j=R),O(j))};return"conversion"in O&&(P.conversion=O.conversion),P}(T)})}),k.exports=x},9325:(k,b,g)=>{const v=g(4959);function A(C){const M=function(){const O={},P=Object.keys(v);for(let j=P.length,R=0;R<j;R++)O[P[R]]={distance:-1,parent:null};return O}(),T=[C];for(M[C].distance=0;T.length;){const O=T.pop(),P=Object.keys(v[O]);for(let j=P.length,R=0;R<j;R++){const L=P[R],q=M[L];q.distance===-1&&(q.distance=M[O].distance+1,q.parent=O,T.unshift(L))}}return M}function x(C,M){return function(T){return M(C(T))}}function _(C,M){const T=[M[C].parent,C];let O=v[M[C].parent][C],P=M[C].parent;for(;M[P].parent;)T.unshift(M[P].parent),O=x(v[M[P].parent][P],O),P=M[P].parent;return O.conversion=T,O}k.exports=function(C){const M=A(C),T={},O=Object.keys(M);for(let P=O.length,j=0;j<P;j++){const R=O[j];M[R].parent!==null&&(T[R]=_(R,M))}return T}},1103:k=>{k.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},8603:(k,b,g)=>{g.d(b,{Z:()=>C});var v=g(1799),A=g.n(v),x=g(2609),_=g.n(x)()(A());_.push([k.id,".ck-content code{background-color:hsla(0,0%,78%,.3);border-radius:2px;padding:.15em}.ck.ck-editor__editable .ck-code_selected{background-color:hsla(0,0%,78%,.5)}","",{version:3,sources:["webpack://./../ckeditor5-basic-styles/theme/code.css"],names:[],mappings:"AAKA,iBACC,kCAAuC,CAEvC,iBAAkB,CADlB,aAED,CAEA,0CACC,kCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content code {
	background-color: hsla(0, 0%, 78%, 0.3);
	padding: .15em;
	border-radius: 2px;
}

.ck.ck-editor__editable .ck-code_selected  {
	background-color: hsla(0, 0%, 78%, 0.5);
}
`],sourceRoot:""}]);const C=_},3062:(k,b,g)=>{g.d(b,{Z:()=>C});var v=g(1799),A=g.n(v),x=g(2609),_=g.n(x)()(A());_.push([k.id,".ck-content blockquote{border-left:5px solid #ccc;font-style:italic;margin-left:0;margin-right:0;overflow:hidden;padding-left:1.5em;padding-right:1.5em}.ck-content[dir=rtl] blockquote{border-left:0;border-right:5px solid #ccc}","",{version:3,sources:["webpack://./../ckeditor5-block-quote/theme/blockquote.css"],names:[],mappings:"AAKA,uBAWC,0BAAsC,CADtC,iBAAkB,CAFlB,aAAc,CACd,cAAe,CAPf,eAAgB,CAIhB,kBAAmB,CADnB,mBAOD,CAEA,gCACC,aAAc,CACd,2BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content blockquote {
	/* See #12 */
	overflow: hidden;

	/* https://github.com/ckeditor/ckeditor5-block-quote/issues/15 */
	padding-right: 1.5em;
	padding-left: 1.5em;

	margin-left: 0;
	margin-right: 0;
	font-style: italic;
	border-left: solid 5px hsl(0, 0%, 80%);
}

.ck-content[dir="rtl"] blockquote {
	border-left: 0;
	border-right: solid 5px hsl(0, 0%, 80%);
}
`],sourceRoot:""}]);const C=_},903:(k,b,g)=>{g.d(b,{Z:()=>C});var v=g(1799),A=g.n(v),x=g(2609),_=g.n(x)()(A());_.push([k.id,'.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position{display:inline;pointer-events:none;position:relative}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span{position:absolute;width:0}.ck.ck-editor__editable .ck-widget:-webkit-drag>.ck-widget__selection-handle,.ck.ck-editor__editable .ck-widget:-webkit-drag>.ck-widget__type-around{display:none}.ck.ck-clipboard-drop-target-line{pointer-events:none;position:absolute}:root{--ck-clipboard-drop-target-dot-width:12px;--ck-clipboard-drop-target-dot-height:8px;--ck-clipboard-drop-target-color:var(--ck-color-focus-border)}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span{background:var(--ck-clipboard-drop-target-color);border:1px solid var(--ck-clipboard-drop-target-color);bottom:calc(var(--ck-clipboard-drop-target-dot-height)*-.5);margin-left:-1px;top:calc(var(--ck-clipboard-drop-target-dot-height)*-.5)}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span:after{border-color:var(--ck-clipboard-drop-target-color) transparent transparent transparent;border-style:solid;border-width:calc(var(--ck-clipboard-drop-target-dot-height)) calc(var(--ck-clipboard-drop-target-dot-width)*.5) 0 calc(var(--ck-clipboard-drop-target-dot-width)*.5);content:"";display:block;height:0;left:50%;position:absolute;top:calc(var(--ck-clipboard-drop-target-dot-height)*-.5);transform:translateX(-50%);width:0}.ck.ck-editor__editable .ck-widget.ck-clipboard-drop-target-range{outline:var(--ck-widget-outline-thickness) solid var(--ck-clipboard-drop-target-color)!important}.ck.ck-editor__editable .ck-widget:-webkit-drag{zoom:.6;outline:none!important}.ck.ck-clipboard-drop-target-line{background:var(--ck-clipboard-drop-target-color);border:1px solid var(--ck-clipboard-drop-target-color);height:0;margin-top:-1px}',"",{version:3,sources:["webpack://./../ckeditor5-clipboard/theme/clipboard.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-clipboard/clipboard.css"],names:[],mappings:"AASC,8DACC,cAAe,CAEf,mBAAoB,CADpB,iBAOD,CAJC,mEACC,iBAAkB,CAClB,OACD,CAWA,qJACC,YACD,CAIF,kCAEC,mBAAoB,CADpB,iBAED,CChCA,MACC,yCAA0C,CAC1C,yCAA0C,CAC1C,6DACD,CAOE,mEAIC,gDAAiD,CADjD,sDAAuD,CAFvD,2DAA8D,CAI9D,gBAAiB,CAHjB,wDAqBD,CAfC,yEAWC,sFAAuF,CAEvF,kBAAmB,CADnB,qKAA0K,CAX1K,UAAW,CAIX,aAAc,CAFd,QAAS,CAIT,QAAS,CADT,iBAAkB,CAElB,wDAA2D,CAE3D,0BAA2B,CAR3B,OAYD,CAOF,kEACC,gGACD,CAKA,gDACC,OAAS,CACT,sBACD,CAGD,kCAGC,gDAAiD,CADjD,sDAAuD,CADvD,QAAS,CAGT,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	/*
	 * Vertical drop target (in text).
	 */
	& .ck.ck-clipboard-drop-target-position {
		display: inline;
		position: relative;
		pointer-events: none;

		& span {
			position: absolute;
			width: 0;
		}
	}

	/*
	 * Styles of the widget being dragged (its preview).
	 */
	& .ck-widget:-webkit-drag {
		& > .ck-widget__selection-handle {
			display: none;
		}

		& > .ck-widget__type-around {
			display: none;
		}
	}
}

.ck.ck-clipboard-drop-target-line {
	position: absolute;
	pointer-events: none;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-clipboard-drop-target-dot-width: 12px;
	--ck-clipboard-drop-target-dot-height: 8px;
	--ck-clipboard-drop-target-color: var(--ck-color-focus-border)
}

.ck.ck-editor__editable {
	/*
	 * Vertical drop target (in text).
	 */
	& .ck.ck-clipboard-drop-target-position {
		& span {
			bottom: calc(-.5 * var(--ck-clipboard-drop-target-dot-height));
			top: calc(-.5 * var(--ck-clipboard-drop-target-dot-height));
			border: 1px solid var(--ck-clipboard-drop-target-color);
			background: var(--ck-clipboard-drop-target-color);
			margin-left: -1px;

			/* The triangle above the marker */
			&::after {
				content: "";
				width: 0;
				height: 0;

				display: block;
				position: absolute;
				left: 50%;
				top: calc(var(--ck-clipboard-drop-target-dot-height) * -.5);

				transform: translateX(-50%);
				border-color: var(--ck-clipboard-drop-target-color) transparent transparent transparent;
				border-width: calc(var(--ck-clipboard-drop-target-dot-height)) calc(.5 * var(--ck-clipboard-drop-target-dot-width)) 0 calc(.5 * var(--ck-clipboard-drop-target-dot-width));
				border-style: solid;
			}
		}
	}

	/*
	 * Styles of the widget that it a drop target.
	 */
	& .ck-widget.ck-clipboard-drop-target-range {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-clipboard-drop-target-color) !important;
	}

	/*
	 * Styles of the widget being dragged (its preview).
	 */
	& .ck-widget:-webkit-drag {
		zoom: 0.6;
		outline: none !important;
	}
}

.ck.ck-clipboard-drop-target-line {
	height: 0;
	border: 1px solid var(--ck-clipboard-drop-target-color);
	background: var(--ck-clipboard-drop-target-color);
	margin-top: -1px;
}
`],sourceRoot:""}]);const C=_},3143:(k,b,g)=>{g.d(b,{Z:()=>C});var v=g(1799),A=g.n(v),x=g(2609),_=g.n(x)()(A());_.push([k.id,".ck.ck-editor{position:relative}.ck.ck-editor .ck-editor__top .ck-sticky-panel .ck-toolbar{z-index:var(--ck-z-modal)}.ck.ck-editor__top .ck-sticky-panel .ck-toolbar{border-radius:0}.ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-toolbar,.ck.ck-editor__top .ck-sticky-panel .ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius);border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-editor__top .ck-sticky-panel .ck-toolbar{border-bottom-width:0}.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar{border-bottom-width:1px;border-radius:0}.ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar,.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius);border-radius:0}.ck.ck-editor__main>.ck-editor__editable{background:var(--ck-color-base-background);border-radius:0}.ck-rounded-corners .ck.ck-editor__main>.ck-editor__editable,.ck.ck-editor__main>.ck-editor__editable.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}.ck.ck-editor__main>.ck-editor__editable:not(.ck-focused){border-color:var(--ck-color-base-border)}","",{version:3,sources:["webpack://./../ckeditor5-editor-classic/theme/classiceditor.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-editor-classic/classiceditor.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,cAIC,iBAMD,CAJC,2DAEC,yBACD,CCLC,gDCED,eDKC,CAPA,uICMA,qCAAsC,CDJpC,2BAA4B,CAC5B,4BAIF,CAPA,gDAMC,qBACD,CAEA,iFACC,uBAAwB,CCR1B,eDaC,CANA,yMCHA,qCAAsC,CDOpC,eAEF,CAKF,yCAEC,0CAA2C,CCpB3C,eD8BD,CAZA,yHCdE,qCAAsC,CDmBtC,wBAAyB,CACzB,yBAMF,CAHC,0DACC,wCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor {
	/* All the elements within \`.ck-editor\` are positioned relatively to it.
	 If any element needs to be positioned with respect to the <body>, etc.,
	 it must land outside of the \`.ck-editor\` in DOM. */
	position: relative;

	& .ck-editor__top .ck-sticky-panel .ck-toolbar {
		/* https://github.com/ckeditor/ckeditor5-editor-classic/issues/62 */
		z-index: var(--ck-z-modal);
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../mixins/_rounded.css";

.ck.ck-editor__top {
	& .ck-sticky-panel {
		& .ck-toolbar {
			@mixin ck-rounded-corners {
				border-bottom-left-radius: 0;
				border-bottom-right-radius: 0;
			}

			border-bottom-width: 0;
		}

		& .ck-sticky-panel__content_sticky .ck-toolbar {
			border-bottom-width: 1px;

			@mixin ck-rounded-corners {
				border-radius: 0;
			}
		}
	}
}

/* Note: Use ck-editor__main to make sure these styles don't apply to other editor types */
.ck.ck-editor__main > .ck-editor__editable {
	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/113 */
	background: var(--ck-color-base-background);

	@mixin ck-rounded-corners {
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}

	&:not(.ck-focused) {
		border-color: var(--ck-color-base-border);
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const C=_},4717:(k,b,g)=>{g.d(b,{Z:()=>C});var v=g(1799),A=g.n(v),x=g(2609),_=g.n(x)()(A());_.push([k.id,".ck .ck-placeholder,.ck.ck-placeholder{position:relative}.ck .ck-placeholder:before,.ck.ck-placeholder:before{content:attr(data-placeholder);left:0;pointer-events:none;position:absolute;right:0}.ck.ck-read-only .ck-placeholder:before{display:none}.ck.ck-reset_all .ck-placeholder{position:relative}.ck .ck-placeholder:before,.ck.ck-placeholder:before{color:var(--ck-color-engine-placeholder-text);cursor:text}","",{version:3,sources:["webpack://./../ckeditor5-engine/theme/placeholder.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-engine/placeholder.css"],names:[],mappings:"AAMA,uCAEC,iBAWD,CATC,qDAIC,8BAA+B,CAF/B,MAAO,CAKP,mBAAoB,CANpB,iBAAkB,CAElB,OAKD,CAKA,wCACC,YACD,CAQD,iCACC,iBACD,CC5BC,qDAEC,6CAA8C,CAD9C,WAED",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* See ckeditor/ckeditor5#936. */
.ck.ck-placeholder,
.ck .ck-placeholder {
	position: relative;

	&::before {
		position: absolute;
		left: 0;
		right: 0;
		content: attr(data-placeholder);

		/* See ckeditor/ckeditor5#469. */
		pointer-events: none;
	}
}

/* See ckeditor/ckeditor5#1987. */
.ck.ck-read-only .ck-placeholder {
	&::before {
		display: none;
	}
}

/*
 * Rules for the \`ck-placeholder\` are loaded before the rules for \`ck-reset_all\` in the base CKEditor 5 DLL build.
 * This fix overwrites the incorrectly set \`position: static\` from \`ck-reset_all\`.
 * See https://github.com/ckeditor/ckeditor5/issues/11418.
 */
.ck.ck-reset_all .ck-placeholder {
	position: relative;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* See ckeditor/ckeditor5#936. */
.ck.ck-placeholder, .ck .ck-placeholder {
	&::before {
		cursor: text;
		color: var(--ck-color-engine-placeholder-text);
	}
}
`],sourceRoot:""}]);const C=_},9315:(k,b,g)=>{g.d(b,{Z:()=>C});var v=g(1799),A=g.n(v),x=g(2609),_=g.n(x)()(A());_.push([k.id,".ck.ck-editor__editable span[data-ck-unsafe-element]{display:none}","",{version:3,sources:["webpack://./../ckeditor5-engine/theme/renderer.css"],names:[],mappings:"AAMA,qDACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Elements marked by the Renderer as hidden should be invisible in the editor. */
.ck.ck-editor__editable span[data-ck-unsafe-element] {
	display: none;
}
`],sourceRoot:""}]);const C=_},8733:(k,b,g)=>{g.d(b,{Z:()=>C});var v=g(1799),A=g.n(v),x=g(2609),_=g.n(x)()(A());_.push([k.id,".ck.ck-heading_heading1{font-size:20px}.ck.ck-heading_heading2{font-size:17px}.ck.ck-heading_heading3{font-size:14px}.ck[class*=ck-heading_heading]{font-weight:700}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__button .ck-button__label{width:8em}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__panel .ck-list__item{min-width:18em}","",{version:3,sources:["webpack://./../ckeditor5-heading/theme/heading.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-heading/heading.css"],names:[],mappings:"AAKA,wBACC,cACD,CAEA,wBACC,cACD,CAEA,wBACC,cACD,CAEA,+BACC,eACD,CCZC,2EACC,SACD,CAEA,uEACC,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-heading_heading1 {
	font-size: 20px;
}

.ck.ck-heading_heading2 {
	font-size: 17px;
}

.ck.ck-heading_heading3 {
	font-size: 14px;
}

.ck[class*="ck-heading_heading"] {
	font-weight: bold;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Resize dropdown's button label. */
.ck.ck-dropdown.ck-heading-dropdown {
	& .ck-dropdown__button .ck-button__label {
		width: 8em;
	}

	& .ck-dropdown__panel .ck-list__item {
		min-width: 18em;
	}
}
`],sourceRoot:""}]);const C=_},3508:(k,b,g)=>{g.d(b,{Z:()=>C});var v=g(1799),A=g.n(v),x=g(2609),_=g.n(x)()(A());_.push([k.id,".ck-content .image{clear:both;display:table;margin:.9em auto;min-width:50px;text-align:center}.ck-content .image img{display:block;margin:0 auto;max-width:100%;min-width:100%}.ck-content .image-inline{align-items:flex-start;display:inline-flex;max-width:100%}.ck-content .image-inline picture{display:flex}.ck-content .image-inline img,.ck-content .image-inline picture{flex-grow:1;flex-shrink:1;max-width:100%}.ck.ck-editor__editable .image>figcaption.ck-placeholder:before{overflow:hidden;padding-left:inherit;padding-right:inherit;text-overflow:ellipsis;white-space:nowrap}.ck.ck-editor__editable .image-inline.ck-widget_selected,.ck.ck-editor__editable .image.ck-widget_selected{z-index:1}.ck.ck-editor__editable .image-inline.ck-widget_selected ::selection{display:none}.ck.ck-editor__editable td .image-inline img,.ck.ck-editor__editable th .image-inline img{max-width:none}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/image.css"],names:[],mappings:"AAMC,mBAEC,UAAW,CADX,aAAc,CAOd,gBAAkB,CAGlB,cAAe,CARf,iBAuBD,CAbC,uBAEC,aAAc,CAGd,aAAc,CAGd,cAAe,CAGf,cACD,CAGD,0BAYC,sBAAuB,CANvB,mBAAoB,CAGpB,cAoBD,CAdC,kCACC,YACD,CAGA,gEAGC,WAAY,CACZ,aAAc,CAGd,cACD,CAUD,gEASC,eAAgB,CARhB,oBAAqB,CACrB,qBAAsB,CAQtB,sBAAuB,CAFvB,kBAGD,CAWA,2GACC,SAUD,CAHC,qEACC,YACD,CAOA,0FACC,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content {
	& .image {
		display: table;
		clear: both;
		text-align: center;

		/* Make sure there is some space between the content and the image. Center image by default. */
		/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	 	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
		margin: 0.9em auto;

		/* Make sure the caption will be displayed properly (See: https://github.com/ckeditor/ckeditor5/issues/1870). */
		min-width: 50px;

		& img {
			/* Prevent unnecessary margins caused by line-height (see #44). */
			display: block;

			/* Center the image if its width is smaller than the content's width. */
			margin: 0 auto;

			/* Make sure the image never exceeds the size of the parent container (ckeditor/ckeditor5-ui#67). */
			max-width: 100%;

			/* Make sure the image is never smaller than the parent container (See: https://github.com/ckeditor/ckeditor5/issues/9300). */
			min-width: 100%
		}
	}

	& .image-inline {
		/*
		 * Normally, the .image-inline would have "display: inline-block" and "img { width: 100% }" (to follow the wrapper while resizing).
		 * Unfortunately, together with "srcset", it gets automatically stretched up to the width of the editing root.
		 * This strange behavior does not happen with inline-flex.
		 */
		display: inline-flex;

		/* While being resized, don't allow the image to exceed the width of the editing root. */
		max-width: 100%;

		/* This is required by Safari to resize images in a sensible way. Without this, the browser breaks the ratio. */
		align-items: flex-start;

		/* When the picture is present it must act as a flex container to let the img resize properly */
		& picture {
			display: flex;
		}

		/* When the picture is present, it must act like a resizable img. */
		& picture,
		& img {
			/* This is necessary for the img to span the entire .image-inline wrapper and to resize properly. */
			flex-grow: 1;
			flex-shrink: 1;

			/* Prevents overflowing the editing root boundaries when an inline image is very wide. */
			max-width: 100%;
		}
	}
}

.ck.ck-editor__editable {
	/*
	 * Inhertit the content styles padding of the <figcaption> in case the integration overrides \`text-align: center\`
	 * of \`.image\` (e.g. to the left/right). This ensures the placeholder stays at the padding just like the native
	 * caret does, and not at the edge of <figcaption>.
	 */
	& .image > figcaption.ck-placeholder::before {
		padding-left: inherit;
		padding-right: inherit;

		/*
		 * Make sure the image caption placeholder doesn't overflow the placeholder area.
		 * See https://github.com/ckeditor/ckeditor5/issues/9162.
		 */
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}


	/*
	 * Make sure the selected inline image always stays on top of its siblings.
	 * See https://github.com/ckeditor/ckeditor5/issues/9108.
	 */
	& .image.ck-widget_selected {
		z-index: 1;
	}

	& .image-inline.ck-widget_selected {
		z-index: 1;

		/*
		 * Make sure the native browser selection style is not displayed.
		 * Inline image widgets have their own styles for the selected state and
		 * leaving this up to the browser is asking for a visual collision.
		 */
		& ::selection {
			display: none;
		}
	}

	/* The inline image nested in the table should have its original size if not resized.
	See https://github.com/ckeditor/ckeditor5/issues/9117. */
	& td,
	& th {
		& .image-inline img {
			max-width: none;
		}
	}
}
`],sourceRoot:""}]);const C=_},2640:(k,b,g)=>{g.d(b,{Z:()=>C});var v=g(1799),A=g.n(v),x=g(2609),_=g.n(x)()(A());_.push([k.id,":root{--ck-color-image-caption-background:#f7f7f7;--ck-color-image-caption-text:#333;--ck-color-image-caption-highligted-background:#fd0}.ck-content .image>figcaption{background-color:var(--ck-color-image-caption-background);caption-side:bottom;color:var(--ck-color-image-caption-text);display:table-caption;font-size:.75em;outline-offset:-1px;padding:.6em;word-break:break-word}.ck.ck-editor__editable .image>figcaption.image__caption_highlighted{animation:ck-image-caption-highlight .6s ease-out}@keyframes ck-image-caption-highlight{0%{background-color:var(--ck-color-image-caption-highligted-background)}to{background-color:var(--ck-color-image-caption-background)}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imagecaption.css"],names:[],mappings:"AAKA,MACC,2CAAoD,CACpD,kCAA8C,CAC9C,mDACD,CAGA,8BAKC,yDAA0D,CAH1D,mBAAoB,CAEpB,wCAAyC,CAHzC,qBAAsB,CAMtB,eAAgB,CAChB,mBAAoB,CAFpB,YAAa,CAHb,qBAMD,CAGA,qEACC,iDACD,CAEA,sCACC,GACC,oEACD,CAEA,GACC,yDACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-image-caption-background: hsl(0, 0%, 97%);
	--ck-color-image-caption-text: hsl(0, 0%, 20%);
	--ck-color-image-caption-highligted-background: hsl(52deg 100% 50%);
}

/* Content styles */
.ck-content .image > figcaption {
	display: table-caption;
	caption-side: bottom;
	word-break: break-word;
	color: var(--ck-color-image-caption-text);
	background-color: var(--ck-color-image-caption-background);
	padding: .6em;
	font-size: .75em;
	outline-offset: -1px;
}

/* Editing styles */
.ck.ck-editor__editable .image > figcaption.image__caption_highlighted {
	animation: ck-image-caption-highlight .6s ease-out;
}

@keyframes ck-image-caption-highlight {
	0% {
		background-color: var(--ck-color-image-caption-highligted-background);
	}

	100% {
		background-color: var(--ck-color-image-caption-background);
	}
}
`],sourceRoot:""}]);const C=_},3535:(k,b,g)=>{g.d(b,{Z:()=>C});var v=g(1799),A=g.n(v),x=g(2609),_=g.n(x)()(A());_.push([k.id,".ck.ck-image-insert__panel{padding:var(--ck-spacing-large)}.ck.ck-image-insert__ck-finder-button{border:1px solid #ccc;border-radius:var(--ck-border-radius);display:block;margin:var(--ck-spacing-standard) auto;width:100%}.ck.ck-splitbutton>.ck-file-dialog-button.ck-button{border:none;margin:0;padding:0}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageinsert.css"],names:[],mappings:"AAKA,2BACC,+BACD,CAEA,sCAIC,qBAAiC,CACjC,qCAAsC,CAJtC,aAAc,CAEd,sCAAuC,CADvC,UAID,CAGA,oDAGC,WAAY,CADZ,QAAS,CADT,SAGD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-image-insert__panel {
	padding: var(--ck-spacing-large);
}

.ck.ck-image-insert__ck-finder-button {
	display: block;
	width: 100%;
	margin: var(--ck-spacing-standard) auto;
	border: 1px solid hsl(0, 0%, 80%);
	border-radius: var(--ck-border-radius);
}

/* https://github.com/ckeditor/ckeditor5/issues/7986 */
.ck.ck-splitbutton > .ck-file-dialog-button.ck-button {
	padding: 0;
	margin: 0;
	border: none;
}
`],sourceRoot:""}]);const C=_},1568:(k,b,g)=>{g.d(b,{Z:()=>C});var v=g(1799),A=g.n(v),x=g(2609),_=g.n(x)()(A());_.push([k.id,".ck.ck-image-insert-form:focus{outline:none}.ck.ck-form__row{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between}.ck.ck-form__row>:not(.ck-label){flex-grow:1}.ck.ck-form__row.ck-image-insert-form__action-row{margin-top:var(--ck-spacing-standard)}.ck.ck-form__row.ck-image-insert-form__action-row .ck-button-cancel,.ck.ck-form__row.ck-image-insert-form__action-row .ck-button-save{justify-content:center}.ck.ck-form__row.ck-image-insert-form__action-row .ck-button .ck-button__label{color:var(--ck-color-text)}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageinsertformrowview.css"],names:[],mappings:"AAMC,+BAEC,YACD,CAGD,iBACC,YAAa,CACb,kBAAmB,CACnB,gBAAiB,CACjB,6BAmBD,CAhBC,iCACC,WACD,CAEA,kDACC,qCAUD,CARC,sIAEC,sBACD,CAEA,+EACC,0BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-image-insert-form {
	&:focus {
		/* See: https://github.com/ckeditor/ckeditor5/issues/4773 */
		outline: none;
	}
}

.ck.ck-form__row {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-between;

	/* Ignore labels that work as fieldset legends */
	& > *:not(.ck-label) {
		flex-grow: 1;
	}

	&.ck-image-insert-form__action-row {
		margin-top: var(--ck-spacing-standard);

		& .ck-button-save,
		& .ck-button-cancel {
			justify-content: center;
		}

		& .ck-button .ck-button__label {
			color: var(--ck-color-text);
		}
	}
}
`],sourceRoot:""}]);const C=_},6270:(k,b,g)=>{g.d(b,{Z:()=>C});var v=g(1799),A=g.n(v),x=g(2609),_=g.n(x)()(A());_.push([k.id,".ck-content .image.image_resized{box-sizing:border-box;display:block;max-width:100%}.ck-content .image.image_resized img{width:100%}.ck-content .image.image_resized>figcaption{display:block}.ck.ck-editor__editable td .image-inline.image_resized img,.ck.ck-editor__editable th .image-inline.image_resized img{max-width:100%}[dir=ltr] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon{margin-right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon{margin-left:var(--ck-spacing-standard)}.ck.ck-dropdown .ck-button.ck-resize-image-button .ck-button__label{width:4em}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageresize.css"],names:[],mappings:"AAKA,iCAQC,qBAAsB,CADtB,aAAc,CANd,cAkBD,CATC,qCAEC,UACD,CAEA,4CAEC,aACD,CAQC,sHACC,cACD,CAIF,oFACC,uCACD,CAEA,oFACC,sCACD,CAEA,oEACC,SACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content .image.image_resized {
	max-width: 100%;
	/*
	The \`<figure>\` element for resized images must not use \`display:table\` as browsers do not support \`max-width\` for it well.
	See https://stackoverflow.com/questions/4019604/chrome-safari-ignoring-max-width-in-table/14420691#14420691 for more.
	Fortunately, since we control the width, there is no risk that the image will look bad.
	*/
	display: block;
	box-sizing: border-box;

	& img {
		/* For resized images it is the \`<figure>\` element that determines the image width. */
		width: 100%;
	}

	& > figcaption {
		/* The \`<figure>\` element uses \`display:block\`, so \`<figcaption>\` also has to. */
		display: block;
	}
}

.ck.ck-editor__editable {
	/* The resized inline image nested in the table should respect its parent size.
	See https://github.com/ckeditor/ckeditor5/issues/9117. */
	& td,
	& th {
		& .image-inline.image_resized img {
			max-width: 100%;
		}
	}
}

[dir="ltr"] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon {
	margin-right: var(--ck-spacing-standard);
}

[dir="rtl"] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon {
	margin-left: var(--ck-spacing-standard);
}

.ck.ck-dropdown .ck-button.ck-resize-image-button .ck-button__label {
	width: 4em;
}
`],sourceRoot:""}]);const C=_},5083:(k,b,g)=>{g.d(b,{Z:()=>C});var v=g(1799),A=g.n(v),x=g(2609),_=g.n(x)()(A());_.push([k.id,":root{--ck-image-style-spacing:1.5em;--ck-inline-image-style-spacing:calc(var(--ck-image-style-spacing)/2)}.ck-content .image-style-block-align-left,.ck-content .image-style-block-align-right{max-width:calc(100% - var(--ck-image-style-spacing))}.ck-content .image-style-align-left,.ck-content .image-style-align-right{clear:none}.ck-content .image-style-side{float:right;margin-left:var(--ck-image-style-spacing);max-width:50%}.ck-content .image-style-align-left{float:left;margin-right:var(--ck-image-style-spacing)}.ck-content .image-style-align-center{margin-left:auto;margin-right:auto}.ck-content .image-style-align-right{float:right;margin-left:var(--ck-image-style-spacing)}.ck-content .image-style-block-align-right{margin-left:auto;margin-right:0}.ck-content .image-style-block-align-left{margin-left:0;margin-right:auto}.ck-content p+.image-style-align-left,.ck-content p+.image-style-align-right,.ck-content p+.image-style-side{margin-top:0}.ck-content .image-inline.image-style-align-left,.ck-content .image-inline.image-style-align-right{margin-bottom:var(--ck-inline-image-style-spacing);margin-top:var(--ck-inline-image-style-spacing)}.ck-content .image-inline.image-style-align-left{margin-right:var(--ck-inline-image-style-spacing)}.ck-content .image-inline.image-style-align-right{margin-left:var(--ck-inline-image-style-spacing)}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover){background-color:var(--ck-color-button-on-background)}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__action:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__action:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover):after{display:none}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover){background-color:var(--ck-color-button-on-hover-background)}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imagestyle.css"],names:[],mappings:"AAKA,MACC,8BAA+B,CAC/B,qEACD,CAMC,qFAEC,oDACD,CAIA,yEAEC,UACD,CAEA,8BACC,WAAY,CACZ,yCAA0C,CAC1C,aACD,CAEA,oCACC,UAAW,CACX,0CACD,CAEA,sCACC,gBAAiB,CACjB,iBACD,CAEA,qCACC,WAAY,CACZ,yCACD,CAEA,2CAEC,gBAAiB,CADjB,cAED,CAEA,0CACC,aAAc,CACd,iBACD,CAGA,6GAGC,YACD,CAGC,mGAGC,kDAAmD,CADnD,+CAED,CAEA,iDACC,iDACD,CAEA,kDACC,gDACD,CAUC,0lBAGC,qDAKD,CAHC,8nBACC,YACD,CAKD,oVAGC,2DACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-image-style-spacing: 1.5em;
	--ck-inline-image-style-spacing: calc(var(--ck-image-style-spacing) / 2);
}

.ck-content {
	/* Provides a minimal side margin for the left and right aligned images, so that the user has a visual feedback
	confirming successful application of the style if image width exceeds the editor's size.
	See https://github.com/ckeditor/ckeditor5/issues/9342 */
	& .image-style-block-align-left,
	& .image-style-block-align-right {
		max-width: calc(100% - var(--ck-image-style-spacing));
	}

	/* Allows displaying multiple floating images in the same line.
	See https://github.com/ckeditor/ckeditor5/issues/9183#issuecomment-804988132 */
	& .image-style-align-left,
	& .image-style-align-right {
		clear: none;
	}

	& .image-style-side {
		float: right;
		margin-left: var(--ck-image-style-spacing);
		max-width: 50%;
	}

	& .image-style-align-left {
		float: left;
		margin-right: var(--ck-image-style-spacing);
	}

	& .image-style-align-center {
		margin-left: auto;
		margin-right: auto;
	}

	& .image-style-align-right {
		float: right;
		margin-left: var(--ck-image-style-spacing);
	}

	& .image-style-block-align-right {
		margin-right: 0;
		margin-left: auto;
	}

	& .image-style-block-align-left {
		margin-left: 0;
		margin-right: auto;
	}

	/* Simulates margin collapsing with the preceding paragraph, which does not work for the floating elements. */
	& p + .image-style-align-left,
	& p + .image-style-align-right,
	& p + .image-style-side {
		margin-top: 0;
	}

	& .image-inline {
		&.image-style-align-left,
		&.image-style-align-right {
			margin-top: var(--ck-inline-image-style-spacing);
			margin-bottom: var(--ck-inline-image-style-spacing);
		}

		&.image-style-align-left {
			margin-right: var(--ck-inline-image-style-spacing);
		}

		&.image-style-align-right {
			margin-left: var(--ck-inline-image-style-spacing);
		}
	}
}

.ck.ck-splitbutton {
	/* The button should display as a regular drop-down if the action button
	is forced to fire the same action as the arrow button. */
	&.ck-splitbutton_flatten {
		&:hover,
		&.ck-splitbutton_open {
			& > .ck-splitbutton__action:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled):not(:hover) {
				background-color: var(--ck-color-button-on-background);

				&::after {
					display: none;
				}
			}
		}

		&.ck-splitbutton_open:hover {
			& > .ck-splitbutton__action:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled):not(:hover) {
				background-color: var(--ck-color-button-on-hover-background);
			}
		}
	}
}
`],sourceRoot:""}]);const C=_},4036:(k,b,g)=>{g.d(b,{Z:()=>C});var v=g(1799),A=g.n(v),x=g(2609),_=g.n(x)()(A());_.push([k.id,'.ck-image-upload-complete-icon{border-radius:50%;display:block;position:absolute;right:min(var(--ck-spacing-medium),6%);top:min(var(--ck-spacing-medium),6%);z-index:1}.ck-image-upload-complete-icon:after{content:"";position:absolute}:root{--ck-color-image-upload-icon:#fff;--ck-color-image-upload-icon-background:#008a00;--ck-image-upload-icon-size:20;--ck-image-upload-icon-width:2px;--ck-image-upload-icon-is-visible:clamp(0px,100% - 50px,1px)}.ck-image-upload-complete-icon{animation-delay:0ms,3s;animation-duration:.5s,.5s;animation-fill-mode:forwards,forwards;animation-name:ck-upload-complete-icon-show,ck-upload-complete-icon-hide;background:var(--ck-color-image-upload-icon-background);font-size:calc(1px*var(--ck-image-upload-icon-size));height:calc(var(--ck-image-upload-icon-is-visible)*var(--ck-image-upload-icon-size));opacity:0;overflow:hidden;width:calc(var(--ck-image-upload-icon-is-visible)*var(--ck-image-upload-icon-size))}.ck-image-upload-complete-icon:after{animation-delay:.5s;animation-duration:.5s;animation-fill-mode:forwards;animation-name:ck-upload-complete-icon-check;border-right:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);border-top:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);box-sizing:border-box;height:0;left:25%;opacity:0;top:50%;transform:scaleX(-1) rotate(135deg);transform-origin:left top;width:0}@keyframes ck-upload-complete-icon-show{0%{opacity:0}to{opacity:1}}@keyframes ck-upload-complete-icon-hide{0%{opacity:1}to{opacity:0}}@keyframes ck-upload-complete-icon-check{0%{height:0;opacity:1;width:0}33%{height:0;width:.3em}to{height:.45em;opacity:1;width:.3em}}',"",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadicon.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadicon.css"],names:[],mappings:"AAKA,+BAUC,iBAAkB,CATlB,aAAc,CACd,iBAAkB,CAOlB,sCAAwC,CADxC,oCAAsC,CAGtC,SAMD,CAJC,qCACC,UAAW,CACX,iBACD,CChBD,MACC,iCAA8C,CAC9C,+CAA4D,CAG5D,8BAA+B,CAC/B,gCAAiC,CACjC,4DACD,CAEA,+BAWC,sBAA4B,CAN5B,0BAAgC,CADhC,qCAAuC,CADvC,wEAA0E,CAD1E,uDAAwD,CAMxD,oDAAuD,CAWvD,oFAAuF,CAlBvF,SAAU,CAgBV,eAAgB,CAChB,mFA0BD,CAtBC,qCAgBC,mBAAsB,CADtB,sBAAyB,CAEzB,4BAA6B,CAH7B,4CAA6C,CAF7C,sFAAuF,CADvF,oFAAqF,CASrF,qBAAsB,CAdtB,QAAS,CAJT,QAAS,CAGT,SAAU,CADV,OAAQ,CAKR,mCAAoC,CACpC,yBAA0B,CAH1B,OAcD,CAGD,wCACC,GACC,SACD,CAEA,GACC,SACD,CACD,CAEA,wCACC,GACC,SACD,CAEA,GACC,SACD,CACD,CAEA,yCACC,GAGC,QAAS,CAFT,SAAU,CACV,OAED,CACA,IAEC,QAAS,CADT,UAED,CACA,GAGC,YAAc,CAFd,SAAU,CACV,UAED,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-image-upload-complete-icon {
	display: block;
	position: absolute;

	/*
	 * Smaller images should have the icon closer to the border.
	 * Match the icon position with the linked image indicator brought by the link image feature.
	 */
	top: min(var(--ck-spacing-medium), 6%);
	right: min(var(--ck-spacing-medium), 6%);
	border-radius: 50%;
	z-index: 1;

	&::after {
		content: "";
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-image-upload-icon: hsl(0, 0%, 100%);
	--ck-color-image-upload-icon-background: hsl(120, 100%, 27%);

	/* Match the icon size with the linked image indicator brought by the link image feature. */
	--ck-image-upload-icon-size: 20;
	--ck-image-upload-icon-width: 2px;
	--ck-image-upload-icon-is-visible: clamp(0px, 100% - 50px, 1px);
}

.ck-image-upload-complete-icon {
	opacity: 0;
	background: var(--ck-color-image-upload-icon-background);
	animation-name: ck-upload-complete-icon-show, ck-upload-complete-icon-hide;
	animation-fill-mode: forwards, forwards;
	animation-duration: 500ms, 500ms;

	/* To make animation scalable. */
	font-size: calc(1px * var(--ck-image-upload-icon-size));

	/* Hide completed upload icon after 3 seconds. */
	animation-delay: 0ms, 3000ms;

	/*
	 * Use CSS math to simulate container queries.
	 * https://css-tricks.com/the-raven-technique-one-step-closer-to-container-queries/#what-about-showing-and-hiding-things
	 */
	overflow: hidden;
	width: calc(var(--ck-image-upload-icon-is-visible) * var(--ck-image-upload-icon-size));
	height: calc(var(--ck-image-upload-icon-is-visible) * var(--ck-image-upload-icon-size));

	/* This is check icon element made from border-width mixed with animations. */
	&::after {
		/* Because of border transformation we need to "hard code" left position. */
		left: 25%;

		top: 50%;
		opacity: 0;
		height: 0;
		width: 0;

		transform: scaleX(-1) rotate(135deg);
		transform-origin: left top;
		border-top: var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);
		border-right: var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);

		animation-name: ck-upload-complete-icon-check;
		animation-duration: 500ms;
		animation-delay: 500ms;
		animation-fill-mode: forwards;

		/* #1095. While reset is not providing proper box-sizing for pseudoelements, we need to handle it. */
		box-sizing: border-box;
	}
}

@keyframes ck-upload-complete-icon-show {
	from {
		opacity: 0;
	}

	to {
		opacity: 1;
	}
}

@keyframes ck-upload-complete-icon-hide {
	from {
		opacity: 1;
	}

	to {
		opacity: 0;
	}
}

@keyframes ck-upload-complete-icon-check {
	0% {
		opacity: 1;
		width: 0;
		height: 0;
	}
	33% {
		width: 0.3em;
		height: 0;
	}
	100% {
		opacity: 1;
		width: 0.3em;
		height: 0.45em;
	}
}
`],sourceRoot:""}]);const C=_},3773:(k,b,g)=>{g.d(b,{Z:()=>C});var v=g(1799),A=g.n(v),x=g(2609),_=g.n(x)()(A());_.push([k.id,'.ck .ck-upload-placeholder-loader{align-items:center;display:flex;justify-content:center;left:0;position:absolute;top:0}.ck .ck-upload-placeholder-loader:before{content:"";position:relative}:root{--ck-color-upload-placeholder-loader:#b3b3b3;--ck-upload-placeholder-loader-size:32px;--ck-upload-placeholder-image-aspect-ratio:2.8}.ck .ck-image-upload-placeholder{margin:0;width:100%}.ck .ck-image-upload-placeholder.image-inline{width:calc(var(--ck-upload-placeholder-loader-size)*2*var(--ck-upload-placeholder-image-aspect-ratio))}.ck .ck-image-upload-placeholder img{aspect-ratio:var(--ck-upload-placeholder-image-aspect-ratio)}.ck .ck-upload-placeholder-loader{height:100%;width:100%}.ck .ck-upload-placeholder-loader:before{animation:ck-upload-placeholder-loader 1s linear infinite;border-radius:50%;border-right:2px solid transparent;border-top:3px solid var(--ck-color-upload-placeholder-loader);height:var(--ck-upload-placeholder-loader-size);width:var(--ck-upload-placeholder-loader-size)}@keyframes ck-upload-placeholder-loader{to{transform:rotate(1turn)}}',"",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadloader.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadloader.css"],names:[],mappings:"AAKA,kCAGC,kBAAmB,CADnB,YAAa,CAEb,sBAAuB,CAEvB,MAAO,CALP,iBAAkB,CAIlB,KAOD,CAJC,yCACC,UAAW,CACX,iBACD,CCXD,MACC,4CAAqD,CACrD,wCAAyC,CACzC,8CACD,CAEA,iCAGC,QAAS,CADT,UAgBD,CAbC,8CACC,sGACD,CAEA,qCAOC,4DACD,CAGD,kCAEC,WAAY,CADZ,UAWD,CARC,yCAMC,yDAA0D,CAH1D,iBAAkB,CAElB,kCAAmC,CADnC,8DAA+D,CAF/D,+CAAgD,CADhD,8CAMD,CAGD,wCACC,GACC,uBACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-upload-placeholder-loader {
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	top: 0;
	left: 0;

	&::before {
		content: '';
		position: relative;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-upload-placeholder-loader: hsl(0, 0%, 70%);
	--ck-upload-placeholder-loader-size: 32px;
	--ck-upload-placeholder-image-aspect-ratio: 2.8;
}

.ck .ck-image-upload-placeholder {
	/* We need to control the full width of the SVG gray background. */
	width: 100%;
	margin: 0;

	&.image-inline {
		width: calc( 2 * var(--ck-upload-placeholder-loader-size) * var(--ck-upload-placeholder-image-aspect-ratio) );
	}

	& img {
		/*
		 * This is an arbitrary aspect for a 1x1 px GIF to display to the user. Not too tall, not too short.
		 * There's nothing special about this number except that it should make the image placeholder look like
		 * a real image during this short period after the upload started and before the image was read from the
		 * file system (and a rich preview was loaded).
		 */
		aspect-ratio: var(--ck-upload-placeholder-image-aspect-ratio);
	}
}

.ck .ck-upload-placeholder-loader {
	width: 100%;
	height: 100%;

	&::before {
		width: var(--ck-upload-placeholder-loader-size);
		height: var(--ck-upload-placeholder-loader-size);
		border-radius: 50%;
		border-top: 3px solid var(--ck-color-upload-placeholder-loader);
		border-right: 2px solid transparent;
		animation: ck-upload-placeholder-loader 1s linear infinite;
	}
}

@keyframes ck-upload-placeholder-loader {
	to {
		transform: rotate( 360deg );
	}
}
`],sourceRoot:""}]);const C=_},3689:(k,b,g)=>{g.d(b,{Z:()=>C});var v=g(1799),A=g.n(v),x=g(2609),_=g.n(x)()(A());_.push([k.id,".ck.ck-editor__editable .image,.ck.ck-editor__editable .image-inline{position:relative}.ck.ck-editor__editable .image .ck-progress-bar,.ck.ck-editor__editable .image-inline .ck-progress-bar{left:0;position:absolute;top:0}.ck.ck-editor__editable .image-inline.ck-appear,.ck.ck-editor__editable .image.ck-appear{animation:fadeIn .7s}.ck.ck-editor__editable .image .ck-progress-bar,.ck.ck-editor__editable .image-inline .ck-progress-bar{background:var(--ck-color-upload-bar-background);height:2px;transition:width .1s;width:0}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadprogress.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadprogress.css"],names:[],mappings:"AAMC,qEAEC,iBACD,CAGA,uGAIC,MAAO,CAFP,iBAAkB,CAClB,KAED,CCRC,yFACC,oBACD,CAID,uGAIC,gDAAiD,CAFjD,UAAW,CAGX,oBAAuB,CAFvB,OAGD,CAGD,kBACC,GAAO,SAAY,CACnB,GAAO,SAAY,CACpB",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	& .image,
	& .image-inline {
		position: relative;
	}

	/* Upload progress bar. */
	& .image .ck-progress-bar,
	& .image-inline .ck-progress-bar {
		position: absolute;
		top: 0;
		left: 0;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	& .image,
	& .image-inline {
		/* Showing animation. */
		&.ck-appear {
			animation: fadeIn 700ms;
		}
	}

	/* Upload progress bar. */
	& .image .ck-progress-bar,
	& .image-inline .ck-progress-bar {
		height: 2px;
		width: 0;
		background: var(--ck-color-upload-bar-background);
		transition: width 100ms;
	}
}

@keyframes fadeIn {
	from { opacity: 0; }
	to   { opacity: 1; }
}
`],sourceRoot:""}]);const C=_},1905:(k,b,g)=>{g.d(b,{Z:()=>C});var v=g(1799),A=g.n(v),x=g(2609),_=g.n(x)()(A());_.push([k.id,".ck.ck-text-alternative-form{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-text-alternative-form .ck-labeled-field-view{display:inline-block}.ck.ck-text-alternative-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-text-alternative-form{flex-wrap:wrap}.ck.ck-text-alternative-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-text-alternative-form .ck-button{flex-basis:50%}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/textalternativeform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css"],names:[],mappings:"AAOA,6BACC,YAAa,CACb,kBAAmB,CACnB,gBAqBD,CAnBC,oDACC,oBACD,CAEA,uCACC,YACD,CCZA,oCDCD,6BAcE,cAUF,CARE,oDACC,eACD,CAEA,wCACC,cACD,CCrBD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-text-alternative-form {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-labeled-field-view {
		display: inline-block;
	}

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`],sourceRoot:""}]);const C=_},9773:(k,b,g)=>{g.d(b,{Z:()=>C});var v=g(1799),A=g.n(v),x=g(2609),_=g.n(x)()(A());_.push([k.id,".ck .ck-link_selected{background:var(--ck-color-link-selected-background)}.ck .ck-link_selected span.image-inline{outline:var(--ck-widget-outline-thickness) solid var(--ck-color-link-selected-background)}.ck .ck-fake-link-selection{background:var(--ck-color-link-fake-selection)}.ck .ck-fake-link-selection_collapsed{border-right:1px solid var(--ck-color-base-text);height:100%;margin-right:-1px;outline:1px solid hsla(0,0%,100%,.5)}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/link.css"],names:[],mappings:"AAMA,sBACC,mDAMD,CAHC,wCACC,yFACD,CAOD,4BACC,8CACD,CAGA,sCAEC,gDAAiD,CADjD,WAAY,CAEZ,iBAAkB,CAClB,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Class added to span element surrounding currently selected link. */
.ck .ck-link_selected {
	background: var(--ck-color-link-selected-background);

	/* Give linked inline images some outline to let the user know they are also part of the link. */
	& span.image-inline {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-color-link-selected-background);
	}
}

/*
 * Classes used by the "fake visual selection" displayed in the content when an input
 * in the link UI has focus (the browser does not render the native selection in this state).
 */
.ck .ck-fake-link-selection {
	background: var(--ck-color-link-fake-selection);
}

/* A collapsed fake visual selection. */
.ck .ck-fake-link-selection_collapsed {
	height: 100%;
	border-right: 1px solid var(--ck-color-base-text);
	margin-right: -1px;
	outline: solid 1px hsla(0, 0%, 100%, .5);
}
`],sourceRoot:""}]);const C=_},2347:(k,b,g)=>{g.d(b,{Z:()=>C});var v=g(1799),A=g.n(v),x=g(2609),_=g.n(x)()(A());_.push([k.id,".ck.ck-link-actions{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-link-actions .ck-link-actions__preview{display:inline-block}.ck.ck-link-actions .ck-link-actions__preview .ck-button__label{overflow:hidden}@media screen and (max-width:600px){.ck.ck-link-actions{flex-wrap:wrap}.ck.ck-link-actions .ck-link-actions__preview{flex-basis:100%}.ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){flex-basis:50%}}.ck.ck-link-actions .ck-button.ck-link-actions__preview{padding-left:0;padding-right:0}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{color:var(--ck-color-link-default);cursor:pointer;max-width:var(--ck-input-width);min-width:3em;padding:0 var(--ck-spacing-medium);text-align:center;text-overflow:ellipsis}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label:hover{text-decoration:underline}.ck.ck-link-actions .ck-button.ck-link-actions__preview,.ck.ck-link-actions .ck-button.ck-link-actions__preview:active,.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus,.ck.ck-link-actions .ck-button.ck-link-actions__preview:hover{background:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:active{box-shadow:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus .ck-button__label{text-decoration:underline}[dir=ltr] .ck.ck-link-actions .ck-button:not(:first-child),[dir=rtl] .ck.ck-link-actions .ck-button:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-link-actions .ck-button.ck-link-actions__preview{margin:var(--ck-spacing-standard) var(--ck-spacing-standard) 0}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{max-width:100%;min-width:0}[dir=ltr] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview),[dir=rtl] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){margin-left:0}}","",{version:3,sources:["webpack://./../ckeditor5-link/theme/linkactions.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/linkactions.css"],names:[],mappings:"AAOA,oBACC,YAAa,CACb,kBAAmB,CACnB,gBAqBD,CAnBC,8CACC,oBAKD,CAHC,gEACC,eACD,CCXD,oCDCD,oBAcE,cAUF,CARE,8CACC,eACD,CAEA,8DACC,cACD,CCrBD,CCIA,wDACC,cAAe,CACf,eAmCD,CAjCC,0EAEC,kCAAmC,CAEnC,cAAe,CAIf,+BAAgC,CAChC,aAAc,CARd,kCAAmC,CASnC,iBAAkB,CAPlB,sBAYD,CAHC,gFACC,yBACD,CAGD,mPAIC,eACD,CAEA,+DACC,eACD,CAGC,gFACC,yBACD,CAWD,qHACC,sCACD,CDtDD,oCC0DC,wDACC,8DAMD,CAJC,0EAEC,cAAe,CADf,WAED,CAGD,gJAME,aAEF,CDzED",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-actions {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-link-actions__preview {
		display: inline-block;

		& .ck-button__label {
			overflow: hidden;
		}
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-link-actions__preview {
			flex-basis: 100%;
		}

		& .ck-button:not(.ck-link-actions__preview) {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_unselectable.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";
@import "../mixins/_focus.css";
@import "../mixins/_shadow.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-actions {
	& .ck-button.ck-link-actions__preview {
		padding-left: 0;
		padding-right: 0;

		& .ck-button__label {
			padding: 0 var(--ck-spacing-medium);
			color: var(--ck-color-link-default);
			text-overflow: ellipsis;
			cursor: pointer;

			/* Match the box model of the link editor form's input so the balloon
			does not change width when moving between actions and the form. */
			max-width: var(--ck-input-width);
			min-width: 3em;
			text-align: center;

			&:hover {
				text-decoration: underline;
			}
		}

		&,
		&:hover,
		&:focus,
		&:active {
			background: none;
		}

		&:active {
			box-shadow: none;
		}

		&:focus {
			& .ck-button__label {
				text-decoration: underline;
			}
		}
	}

	@mixin ck-dir ltr {
		& .ck-button:not(:first-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& .ck-button:not(:last-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-media-phone {
		& .ck-button.ck-link-actions__preview {
			margin: var(--ck-spacing-standard) var(--ck-spacing-standard) 0;

			& .ck-button__label {
				min-width: 0;
				max-width: 100%;
			}
		}

		& .ck-button:not(.ck-link-actions__preview) {
			@mixin ck-dir ltr {
				margin-left: 0;
			}

			@mixin ck-dir rtl {
				margin-left: 0;
			}
		}
	}
}
`],sourceRoot:""}]);const C=_},7754:(k,b,g)=>{g.d(b,{Z:()=>C});var v=g(1799),A=g.n(v),x=g(2609),_=g.n(x)()(A());_.push([k.id,".ck.ck-link-form{display:flex}.ck.ck-link-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-link-form{flex-wrap:wrap}.ck.ck-link-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-link-form .ck-button{flex-basis:50%}}.ck.ck-link-form_layout-vertical{display:block}.ck.ck-link-form_layout-vertical .ck-button.ck-button-cancel,.ck.ck-link-form_layout-vertical .ck-button.ck-button-save{margin-top:var(--ck-spacing-medium)}.ck.ck-link-form_layout-vertical{min-width:var(--ck-input-width);padding:0}.ck.ck-link-form_layout-vertical .ck-labeled-field-view{margin:var(--ck-spacing-large) var(--ck-spacing-large) var(--ck-spacing-small)}.ck.ck-link-form_layout-vertical .ck-labeled-field-view .ck-input-text{min-width:0;width:100%}.ck.ck-link-form_layout-vertical>.ck-button{border-radius:0;margin:0;padding:var(--ck-spacing-standard);width:50%}.ck.ck-link-form_layout-vertical>.ck-button:not(:focus){border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-link-form_layout-vertical>.ck-button,[dir=rtl] .ck.ck-link-form_layout-vertical>.ck-button{margin-left:0}[dir=rtl] .ck.ck-link-form_layout-vertical>.ck-button:last-of-type{border-right:1px solid var(--ck-color-base-border)}.ck.ck-link-form_layout-vertical .ck.ck-list{margin:var(--ck-spacing-standard) var(--ck-spacing-large)}.ck.ck-link-form_layout-vertical .ck.ck-list .ck-button.ck-switchbutton{padding:0;width:100%}.ck.ck-link-form_layout-vertical .ck.ck-list .ck-button.ck-switchbutton:hover{background:none}","",{version:3,sources:["webpack://./../ckeditor5-link/theme/linkform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/linkform.css"],names:[],mappings:"AAOA,iBACC,YAiBD,CAfC,2BACC,YACD,CCNA,oCDCD,iBAQE,cAUF,CARE,wCACC,eACD,CAEA,4BACC,cACD,CCfD,CDuBD,iCACC,aAYD,CALE,wHAEC,mCACD,CE/BF,iCAEC,+BAAgC,CADhC,SAgDD,CA7CC,wDACC,8EAMD,CAJC,uEACC,WAAY,CACZ,UACD,CAGD,4CAIC,eAAgB,CAFhB,QAAS,CADT,kCAAmC,CAEnC,SAkBD,CAfC,wDACC,gDACD,CARD,4GAeE,aAMF,CAJE,mEACC,kDACD,CAKF,6CACC,yDAUD,CARC,wEACC,SAAU,CACV,UAKD,CAHC,8EACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-form {
	display: flex;

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}

/*
 * Style link form differently when manual decorators are available.
 * See: https://github.com/ckeditor/ckeditor5-link/issues/186.
 */
.ck.ck-link-form_layout-vertical {
	display: block;

	/*
	 * Whether the form is in the responsive mode or not, if there are decorator buttons
	 * keep the top margin of action buttons medium.
	 */
	& .ck-button {
		&.ck-button-save,
		&.ck-button-cancel {
			margin-top: var(--ck-spacing-medium);
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

/*
 * Style link form differently when manual decorators are available.
 * See: https://github.com/ckeditor/ckeditor5-link/issues/186.
 */
.ck.ck-link-form_layout-vertical {
	padding: 0;
	min-width: var(--ck-input-width);

	& .ck-labeled-field-view {
		margin: var(--ck-spacing-large) var(--ck-spacing-large) var(--ck-spacing-small);

		& .ck-input-text {
			min-width: 0;
			width: 100%;
		}
	}

	& > .ck-button {
		padding: var(--ck-spacing-standard);
		margin: 0;
		width: 50%;
		border-radius: 0;

		&:not(:focus) {
			border-top: 1px solid var(--ck-color-base-border);
		}

		@mixin ck-dir ltr {
			margin-left: 0;
		}

		@mixin ck-dir rtl {
			margin-left: 0;

			&:last-of-type {
				border-right: 1px solid var(--ck-color-base-border);
			}
		}
	}

	/* Using additional \`.ck\` class for stronger CSS specificity than \`.ck.ck-link-form > :not(:first-child)\`. */
	& .ck.ck-list {
		margin: var(--ck-spacing-standard) var(--ck-spacing-large);

		& .ck-button.ck-switchbutton {
			padding: 0;
			width: 100%;

			&:hover {
				background: none;
			}
		}
	}
}
`],sourceRoot:""}]);const C=_},111:(k,b,g)=>{g.d(b,{Z:()=>C});var v=g(1799),A=g.n(v),x=g(2609),_=g.n(x)()(A());_.push([k.id,'.ck.ck-editor__editable a span.image-inline:after,.ck.ck-editor__editable figure.image>a:after{display:block;position:absolute}:root{--ck-link-image-indicator-icon-size:20;--ck-link-image-indicator-icon-is-visible:clamp(0px,100% - 50px,1px)}.ck.ck-editor__editable a span.image-inline:after,.ck.ck-editor__editable figure.image>a:after{background-color:rgba(0,0,0,.4);background-image:url("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAgMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0iI2ZmZiIgZD0ibTExLjA3NyAxNSAuOTkxLTEuNDE2YS43NS43NSAwIDEgMSAxLjIyOS44NmwtMS4xNDggMS42NGEuNzQ4Ljc0OCAwIDAgMS0uMjE3LjIwNiA1LjI1MSA1LjI1MSAwIDAgMS04LjUwMy01Ljk1NS43NDEuNzQxIDAgMCAxIC4xMi0uMjc0bDEuMTQ3LTEuNjM5YS43NS43NSAwIDEgMSAxLjIyOC44Nkw0LjkzMyAxMC43bC4wMDYuMDAzYTMuNzUgMy43NSAwIDAgMCA2LjEzMiA0LjI5NGwuMDA2LjAwNHptNS40OTQtNS4zMzVhLjc0OC43NDggMCAwIDEtLjEyLjI3NGwtMS4xNDcgMS42MzlhLjc1Ljc1IDAgMSAxLTEuMjI4LS44NmwuODYtMS4yM2EzLjc1IDMuNzUgMCAwIDAtNi4xNDQtNC4zMDFsLS44NiAxLjIyOWEuNzUuNzUgMCAwIDEtMS4yMjktLjg2bDEuMTQ4LTEuNjRhLjc0OC43NDggMCAwIDEgLjIxNy0uMjA2IDUuMjUxIDUuMjUxIDAgMCAxIDguNTAzIDUuOTU1em0tNC41NjMtMi41MzJhLjc1Ljc1IDAgMCAxIC4xODQgMS4wNDVsLTMuMTU1IDQuNTA1YS43NS43NSAwIDEgMS0xLjIyOS0uODZsMy4xNTUtNC41MDZhLjc1Ljc1IDAgMCAxIDEuMDQ1LS4xODR6Ii8+PC9zdmc+");background-position:50%;background-repeat:no-repeat;background-size:14px;border-radius:100%;content:"";height:calc(var(--ck-link-image-indicator-icon-is-visible)*var(--ck-link-image-indicator-icon-size));overflow:hidden;right:min(var(--ck-spacing-medium),6%);top:min(var(--ck-spacing-medium),6%);width:calc(var(--ck-link-image-indicator-icon-is-visible)*var(--ck-link-image-indicator-icon-size))}',"",{version:3,sources:["webpack://./../ckeditor5-link/theme/linkimage.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/linkimage.css"],names:[],mappings:"AASE,+FACC,aAAc,CACd,iBACD,CCPF,MAEC,sCAAuC,CACvC,oEACD,CAME,+FAUC,+BAAqC,CACrC,83BAA+3B,CAG/3B,uBAA2B,CAD3B,2BAA4B,CAD5B,oBAAqB,CAGrB,kBAAmB,CAdnB,UAAW,CAsBX,oGAAuG,CAFvG,eAAgB,CAbhB,sCAAwC,CADxC,oCAAsC,CAetC,mGAED",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	/* Linked image indicator */
	& figure.image > a,
	& a span.image-inline {
		&::after {
			display: block;
			position: absolute;
		}
	}
}

`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* Match the icon size with the upload indicator brought by the image upload feature. */
	--ck-link-image-indicator-icon-size: 20;
	--ck-link-image-indicator-icon-is-visible: clamp(0px, 100% - 50px, 1px);
}

.ck.ck-editor__editable {
	/* Linked image indicator */
	& figure.image > a,
	& a span.image-inline {
		&::after {
			content: "";

			/*
			 * Smaller images should have the icon closer to the border.
			 * Match the icon position with the upload indicator brought by the image upload feature.
			 */
			top: min(var(--ck-spacing-medium), 6%);
			right: min(var(--ck-spacing-medium), 6%);

			background-color: hsla(0, 0%, 0%, .4);
			background-image: url("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAgMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0iI2ZmZiIgZD0ibTExLjA3NyAxNSAuOTkxLTEuNDE2YS43NS43NSAwIDEgMSAxLjIyOS44NmwtMS4xNDggMS42NGEuNzQ4Ljc0OCAwIDAgMS0uMjE3LjIwNiA1LjI1MSA1LjI1MSAwIDAgMS04LjUwMy01Ljk1NS43NDEuNzQxIDAgMCAxIC4xMi0uMjc0bDEuMTQ3LTEuNjM5YS43NS43NSAwIDEgMSAxLjIyOC44Nkw0LjkzMyAxMC43bC4wMDYuMDAzYTMuNzUgMy43NSAwIDAgMCA2LjEzMiA0LjI5NGwuMDA2LjAwNHptNS40OTQtNS4zMzVhLjc0OC43NDggMCAwIDEtLjEyLjI3NGwtMS4xNDcgMS42MzlhLjc1Ljc1IDAgMSAxLTEuMjI4LS44NmwuODYtMS4yM2EzLjc1IDMuNzUgMCAwIDAtNi4xNDQtNC4zMDFsLS44NiAxLjIyOWEuNzUuNzUgMCAwIDEtMS4yMjktLjg2bDEuMTQ4LTEuNjRhLjc0OC43NDggMCAwIDEgLjIxNy0uMjA2IDUuMjUxIDUuMjUxIDAgMCAxIDguNTAzIDUuOTU1em0tNC41NjMtMi41MzJhLjc1Ljc1IDAgMCAxIC4xODQgMS4wNDVsLTMuMTU1IDQuNTA1YS43NS43NSAwIDEgMS0xLjIyOS0uODZsMy4xNTUtNC41MDZhLjc1Ljc1IDAgMCAxIDEuMDQ1LS4xODR6Ii8+PC9zdmc+");
			background-size: 14px;
			background-repeat: no-repeat;
			background-position: center;
			border-radius: 100%;

			/*
			* Use CSS math to simulate container queries.
			* https://css-tricks.com/the-raven-technique-one-step-closer-to-container-queries/#what-about-showing-and-hiding-things
			*/
			overflow: hidden;
			width: calc(var(--ck-link-image-indicator-icon-is-visible) * var(--ck-link-image-indicator-icon-size));
			height: calc(var(--ck-link-image-indicator-icon-is-visible) * var(--ck-link-image-indicator-icon-size));
		}
	}
}

`],sourceRoot:""}]);const C=_},4721:(k,b,g)=>{g.d(b,{Z:()=>C});var v=g(1799),A=g.n(v),x=g(2609),_=g.n(x)()(A());_.push([k.id,".ck.ck-collapsible.ck-collapsible_collapsed>.ck-collapsible__children{display:none}:root{--ck-collapsible-arrow-size:calc(var(--ck-icon-size)*0.5)}.ck.ck-collapsible>.ck.ck-button{border-radius:0;color:inherit;font-weight:700;padding:var(--ck-spacing-medium) var(--ck-spacing-large);width:100%}.ck.ck-collapsible>.ck.ck-button:focus{background:transparent}.ck.ck-collapsible>.ck.ck-button:active,.ck.ck-collapsible>.ck.ck-button:hover:not(:focus),.ck.ck-collapsible>.ck.ck-button:not(:focus){background:transparent;border-color:transparent;box-shadow:none}.ck.ck-collapsible>.ck.ck-button>.ck-icon{margin-right:var(--ck-spacing-medium);width:var(--ck-collapsible-arrow-size)}.ck.ck-collapsible>.ck-collapsible__children{padding:0 var(--ck-spacing-large) var(--ck-spacing-large)}.ck.ck-collapsible.ck-collapsible_collapsed>.ck.ck-button .ck-icon{transform:rotate(-90deg)}","",{version:3,sources:["webpack://./../ckeditor5-list/theme/collapsible.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-list/collapsible.css"],names:[],mappings:"AAMC,sEACC,YACD,CCHD,MACC,yDACD,CAGC,iCAIC,eAAgB,CAChB,aAAc,CAHd,eAAiB,CACjB,wDAAyD,CAFzD,UAoBD,CAdC,uCACC,sBACD,CAEA,wIACC,sBAAuB,CACvB,wBAAyB,CACzB,eACD,CAEA,0CACC,qCAAsC,CACtC,sCACD,CAGD,6CACC,yDACD,CAGC,mEACC,wBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-collapsible.ck-collapsible_collapsed {
	& > .ck-collapsible__children {
		display: none;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-collapsible-arrow-size: calc(0.5 * var(--ck-icon-size));
}

.ck.ck-collapsible {
	& > .ck.ck-button {
		width: 100%;
		font-weight: bold;
		padding: var(--ck-spacing-medium) var(--ck-spacing-large);
		border-radius: 0;
		color: inherit;

		&:focus {
			background: transparent;
		}

		&:active, &:not(:focus), &:hover:not(:focus) {
			background: transparent;
			border-color: transparent;
			box-shadow: none;
		}

		& > .ck-icon {
			margin-right: var(--ck-spacing-medium);
			width: var(--ck-collapsible-arrow-size);
		}
	}

	& > .ck-collapsible__children {
		padding: 0 var(--ck-spacing-large) var(--ck-spacing-large);
	}

	&.ck-collapsible_collapsed {
		& > .ck.ck-button .ck-icon {
			transform: rotate(-90deg);
		}
	}
}
`],sourceRoot:""}]);const C=_},5730:(k,b,g)=>{g.d(b,{Z:()=>C});var v=g(1799),A=g.n(v),x=g(2609),_=g.n(x)()(A());_.push([k.id,".ck-editor__editable .ck-list-bogus-paragraph{display:block}","",{version:3,sources:["webpack://./../ckeditor5-list/theme/documentlist.css"],names:[],mappings:"AAKA,8CACC,aACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-editor__editable .ck-list-bogus-paragraph {
	display: block;
}
`],sourceRoot:""}]);const C=_},4564:(k,b,g)=>{g.d(b,{Z:()=>C});var v=g(1799),A=g.n(v),x=g(2609),_=g.n(x)()(A());_.push([k.id,".ck-content ol{list-style-type:decimal}.ck-content ol ol{list-style-type:lower-latin}.ck-content ol ol ol{list-style-type:lower-roman}.ck-content ol ol ol ol{list-style-type:upper-latin}.ck-content ol ol ol ol ol{list-style-type:upper-roman}.ck-content ul{list-style-type:disc}.ck-content ul ul{list-style-type:circle}.ck-content ul ul ul,.ck-content ul ul ul ul{list-style-type:square}","",{version:3,sources:["webpack://./../ckeditor5-list/theme/list.css"],names:[],mappings:"AAKA,eACC,uBAiBD,CAfC,kBACC,2BAaD,CAXC,qBACC,2BASD,CAPC,wBACC,2BAKD,CAHC,2BACC,2BACD,CAMJ,eACC,oBAaD,CAXC,kBACC,sBASD,CAJE,6CACC,sBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content ol {
	list-style-type: decimal;

	& ol {
		list-style-type: lower-latin;

		& ol {
			list-style-type: lower-roman;

			& ol {
				list-style-type: upper-latin;

				& ol {
					list-style-type: upper-roman;
				}
			}
		}
	}
}

.ck-content ul {
	list-style-type: disc;

	& ul {
		list-style-type: circle;

		& ul {
			list-style-type: square;

			& ul {
				list-style-type: square;
			}
		}
	}
}
`],sourceRoot:""}]);const C=_},6082:(k,b,g)=>{g.d(b,{Z:()=>C});var v=g(1799),A=g.n(v),x=g(2609),_=g.n(x)()(A());_.push([k.id,".ck.ck-list-properties.ck-list-properties_without-styles{padding:var(--ck-spacing-large)}.ck.ck-list-properties.ck-list-properties_without-styles>*{min-width:14em}.ck.ck-list-properties.ck-list-properties_without-styles>*+*{margin-top:var(--ck-spacing-standard)}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-list-styles-list{grid-template-columns:repeat(4,auto)}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-collapsible{border-top:1px solid var(--ck-color-base-border)}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-collapsible>.ck-collapsible__children>*{width:100%}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-collapsible>.ck-collapsible__children>*+*{margin-top:var(--ck-spacing-standard)}.ck.ck-list-properties .ck.ck-numbered-list-properties__start-index .ck-input{min-width:auto;width:100%}.ck.ck-list-properties .ck.ck-numbered-list-properties__reversed-order{background:transparent;margin-bottom:calc(var(--ck-spacing-tiny)*-1);padding-left:0;padding-right:0}.ck.ck-list-properties .ck.ck-numbered-list-properties__reversed-order:active,.ck.ck-list-properties .ck.ck-numbered-list-properties__reversed-order:hover{background:none;border-color:transparent;box-shadow:none}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-list/listproperties.css"],names:[],mappings:"AAOC,yDACC,+BASD,CAPC,2DACC,cAKD,CAHC,6DACC,qCACD,CASD,wFACC,oCACD,CAGA,mFACC,gDAWD,CARE,+GACC,UAKD,CAHC,iHACC,qCACD,CAMJ,8EACC,cAAe,CACf,UACD,CAEA,uEACC,sBAAuB,CAGvB,6CAAgD,CAFhD,cAAe,CACf,eAQD,CALC,2JAGC,eAAgB,CADhB,wBAAyB,CADzB,eAGD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-list-properties {
	/* When there are no list styles and there is no collapsible. */
	&.ck-list-properties_without-styles {
		padding: var(--ck-spacing-large);

		& > * {
			min-width: 14em;

			& + * {
				margin-top: var(--ck-spacing-standard);
			}
		}
	}

	/*
	 * When the numbered list property fields (start at, reversed) should be displayed,
	 * more horizontal space is needed. Reconfigure the style grid to create that space.
	 */
	&.ck-list-properties_with-numbered-properties {
		& > .ck-list-styles-list {
			grid-template-columns: repeat( 4, auto );
		}

		/* When list styles are rendered and property fields are in a collapsible. */
		& > .ck-collapsible {
			border-top: 1px solid var(--ck-color-base-border);

			& > .ck-collapsible__children {
				& > * {
					width: 100%;

					& + * {
						margin-top: var(--ck-spacing-standard);
					}
				}
			}
		}
	}

	& .ck.ck-numbered-list-properties__start-index .ck-input {
		min-width: auto;
		width: 100%;
	}

	& .ck.ck-numbered-list-properties__reversed-order {
		background: transparent;
		padding-left: 0;
		padding-right: 0;
		margin-bottom: calc(-1 * var(--ck-spacing-tiny));

		&:active, &:hover {
			box-shadow: none;
			border-color: transparent;
			background: none;
		}
	}
}
`],sourceRoot:""}]);const C=_},2417:(k,b,g)=>{g.d(b,{Z:()=>C});var v=g(1799),A=g.n(v),x=g(2609),_=g.n(x)()(A());_.push([k.id,".ck.ck-list-styles-list{display:grid}:root{--ck-list-style-button-size:44px}.ck.ck-list-styles-list{column-gap:var(--ck-spacing-medium);grid-template-columns:repeat(3,auto);padding:var(--ck-spacing-large);row-gap:var(--ck-spacing-medium)}.ck.ck-list-styles-list .ck-button{box-sizing:content-box;margin:0;padding:0}.ck.ck-list-styles-list .ck-button,.ck.ck-list-styles-list .ck-button .ck-icon{height:var(--ck-list-style-button-size);width:var(--ck-list-style-button-size)}","",{version:3,sources:["webpack://./../ckeditor5-list/theme/liststyles.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-list/liststyles.css"],names:[],mappings:"AAKA,wBACC,YACD,CCFA,MACC,gCACD,CAEA,wBAGC,mCAAoC,CAFpC,oCAAwC,CAGxC,+BAAgC,CAFhC,gCA4BD,CAxBC,mCAiBC,sBAAuB,CAPvB,QAAS,CANT,SAmBD,CAJC,+EAhBA,uCAAwC,CADxC,sCAoBA",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-list-styles-list {
	display: grid;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-list-style-button-size: 44px;
}

.ck.ck-list-styles-list {
	grid-template-columns: repeat( 3, auto );
	row-gap: var(--ck-spacing-medium);
	column-gap: var(--ck-spacing-medium);
	padding: var(--ck-spacing-large);

	& .ck-button {
		/* Make the button look like a thumbnail (the icon "takes it all"). */
		width: var(--ck-list-style-button-size);
		height: var(--ck-list-style-button-size);
		padding: 0;

		/*
		 * Buttons are aligned by the grid so disable default button margins to not collide with the
		 * gaps in the grid.
		 */
		margin: 0;

		/*
		 * Make sure the button border (which is displayed on focus, BTW) does not steal pixels
		 * from the button dimensions and, as a result, decrease the size of the icon
		 * (which becomes blurry as it scales down).
		 */
		box-sizing: content-box;

		& .ck-icon {
			width: var(--ck-list-style-button-size);
			height: var(--ck-list-style-button-size);
		}
	}
}
`],sourceRoot:""}]);const C=_},1199:(k,b,g)=>{g.d(b,{Z:()=>C});var v=g(1799),A=g.n(v),x=g(2609),_=g.n(x)()(A());_.push([k.id,':root{--ck-todo-list-checkmark-size:16px}.ck-content .todo-list{list-style:none}.ck-content .todo-list li{margin-bottom:5px}.ck-content .todo-list li .todo-list{margin-top:5px}.ck-content .todo-list .todo-list__label>input{-webkit-appearance:none;border:0;display:inline-block;height:var(--ck-todo-list-checkmark-size);left:-25px;margin-left:0;margin-right:-15px;position:relative;right:0;vertical-align:middle;width:var(--ck-todo-list-checkmark-size)}.ck-content .todo-list .todo-list__label>input:before{border:1px solid #333;border-radius:2px;box-sizing:border-box;content:"";display:block;height:100%;position:absolute;transition:box-shadow .25s ease-in-out,background .25s ease-in-out,border .25s ease-in-out;width:100%}.ck-content .todo-list .todo-list__label>input:after{border-color:transparent;border-style:solid;border-width:0 calc(var(--ck-todo-list-checkmark-size)/8) calc(var(--ck-todo-list-checkmark-size)/8) 0;box-sizing:content-box;content:"";display:block;height:calc(var(--ck-todo-list-checkmark-size)/2.6);left:calc(var(--ck-todo-list-checkmark-size)/3);pointer-events:none;position:absolute;top:calc(var(--ck-todo-list-checkmark-size)/5.3);transform:rotate(45deg);width:calc(var(--ck-todo-list-checkmark-size)/5.3)}.ck-content .todo-list .todo-list__label>input[checked]:before{background:#26ab33;border-color:#26ab33}.ck-content .todo-list .todo-list__label>input[checked]:after{border-color:#fff}.ck-content .todo-list .todo-list__label .todo-list__label__description{vertical-align:middle}[dir=rtl] .todo-list .todo-list__label>input{left:0;margin-left:-15px;margin-right:0;right:-25px}.ck-editor__editable .todo-list .todo-list__label>input{cursor:pointer}.ck-editor__editable .todo-list .todo-list__label>input:hover:before{box-shadow:0 0 0 5px rgba(0,0,0,.1)}',"",{version:3,sources:["webpack://./../ckeditor5-list/theme/todolist.css"],names:[],mappings:"AAKA,MACC,kCACD,CAEA,uBACC,eA0ED,CAxEC,0BACC,iBAKD,CAHC,qCACC,cACD,CAIA,+CACC,uBAAwB,CAQxB,QAAS,CAPT,oBAAqB,CAGrB,yCAA0C,CAO1C,UAAW,CAGX,aAAc,CAFd,kBAAmB,CAVnB,iBAAkB,CAWlB,OAAQ,CARR,qBAAsB,CAFtB,wCAqDD,CAxCC,sDAOC,qBAAiC,CACjC,iBAAkB,CALlB,qBAAsB,CACtB,UAAW,CAHX,aAAc,CAKd,WAAY,CAJZ,iBAAkB,CAOlB,0FAAgG,CAJhG,UAKD,CAEA,qDAaC,wBAAyB,CADzB,kBAAmB,CAEnB,sGAA+G,CAX/G,sBAAuB,CAEvB,UAAW,CAJX,aAAc,CAUd,mDAAwD,CAHxD,+CAAoD,CAJpD,mBAAoB,CAFpB,iBAAkB,CAOlB,gDAAqD,CAMrD,uBAAwB,CALxB,kDAMD,CAGC,+DACC,kBAA8B,CAC9B,oBACD,CAEA,8DACC,iBACD,CAIF,wEACC,qBACD,CAKF,6CACC,MAAO,CAGP,iBAAkB,CAFlB,cAAe,CACf,WAED,CAMA,wDACC,cAKD,CAHC,qEACC,mCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-todo-list-checkmark-size: 16px;
}

.ck-content .todo-list {
	list-style: none;

	& li {
		margin-bottom: 5px;

		& .todo-list {
			margin-top: 5px;
		}
	}

	& .todo-list__label {
		& > input {
			-webkit-appearance: none;
			display: inline-block;
			position: relative;
			width: var(--ck-todo-list-checkmark-size);
			height: var(--ck-todo-list-checkmark-size);
			vertical-align: middle;

			/* Needed on iOS */
			border: 0;

			/* LTR styles */
			left: -25px;
			margin-right: -15px;
			right: 0;
			margin-left: 0;

			&::before {
				display: block;
				position: absolute;
				box-sizing: border-box;
				content: '';
				width: 100%;
				height: 100%;
				border: 1px solid hsl(0, 0%, 20%);
				border-radius: 2px;
				transition: 250ms ease-in-out box-shadow, 250ms ease-in-out background, 250ms ease-in-out border;
			}

			&::after {
				display: block;
				position: absolute;
				box-sizing: content-box;
				pointer-events: none;
				content: '';

				/* Calculate tick position, size and border-width proportional to the checkmark size. */
				left: calc( var(--ck-todo-list-checkmark-size) / 3 );
				top: calc( var(--ck-todo-list-checkmark-size) / 5.3 );
				width: calc( var(--ck-todo-list-checkmark-size) / 5.3 );
				height: calc( var(--ck-todo-list-checkmark-size) / 2.6 );
				border-style: solid;
				border-color: transparent;
				border-width: 0 calc( var(--ck-todo-list-checkmark-size) / 8 ) calc( var(--ck-todo-list-checkmark-size) / 8 ) 0;
				transform: rotate(45deg);
			}

			&[checked] {
				&::before {
					background: hsl(126, 64%, 41%);
					border-color: hsl(126, 64%, 41%);
				}

				&::after {
					border-color: hsl(0, 0%, 100%);
				}
			}
		}

		& .todo-list__label__description {
			vertical-align: middle;
		}
	}
}

/* RTL styles */
[dir="rtl"] .todo-list .todo-list__label > input {
	left: 0;
	margin-right: 0;
	right: -25px;
	margin-left: -15px;
}

/*
 * To-do list should be interactive only during the editing
 * (https://github.com/ckeditor/ckeditor5/issues/2090).
 */
.ck-editor__editable .todo-list .todo-list__label > input {
	cursor: pointer;

	&:hover::before {
		box-shadow: 0 0 0 5px hsla(0, 0%, 0%, 0.1);
	}
}
`],sourceRoot:""}]);const C=_},4652:(k,b,g)=>{g.d(b,{Z:()=>C});var v=g(1799),A=g.n(v),x=g(2609),_=g.n(x)()(A());_.push([k.id,".ck-content .media{clear:both;display:block;margin:.9em 0;min-width:15em}","",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaembed.css"],names:[],mappings:"AAKA,mBAGC,UAAW,CASX,aAAc,CAJd,aAAe,CAQf,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content .media {
	/* Don't allow floated content overlap the media.
	https://github.com/ckeditor/ckeditor5-media-embed/issues/53 */
	clear: both;

	/* Make sure there is some space between the content and the media. */
	/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
	margin: 0.9em 0;

	/* Make sure media is not overriden with Bootstrap default \`flex\` value.
	See: https://github.com/ckeditor/ckeditor5/issues/1373. */
	display: block;

	/* Give the media some minimal width in the content to prevent them
	from being "squashed" in tight spaces, e.g. in table cells (#44) */
	min-width: 15em;
}
`],sourceRoot:""}]);const C=_},7442:(k,b,g)=>{g.d(b,{Z:()=>C});var v=g(1799),A=g.n(v),x=g(2609),_=g.n(x)()(A());_.push([k.id,'.ck-media__wrapper .ck-media__placeholder{align-items:center;display:flex;flex-direction:column}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url{max-width:100%;position:relative}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url .ck-media__placeholder__url__text{display:block;overflow:hidden}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck-media__placeholder__icon *{display:none}.ck-editor__editable:not(.ck-read-only) .ck-media__wrapper>:not(.ck-media__placeholder),.ck-editor__editable:not(.ck-read-only) .ck-widget:not(.ck-widget_selected) .ck-media__placeholder{pointer-events:none}:root{--ck-media-embed-placeholder-icon-size:3em;--ck-color-media-embed-placeholder-url-text:#757575;--ck-color-media-embed-placeholder-url-text-hover:var(--ck-color-base-text)}.ck-media__wrapper{margin:0 auto}.ck-media__wrapper .ck-media__placeholder{background:var(--ck-color-base-foreground);padding:calc(var(--ck-spacing-standard)*3)}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon{background-position:50%;background-size:cover;height:var(--ck-media-embed-placeholder-icon-size);margin-bottom:var(--ck-spacing-large);min-width:var(--ck-media-embed-placeholder-icon-size)}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon .ck-icon{height:100%;width:100%}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url__text{color:var(--ck-color-media-embed-placeholder-url-text);font-style:italic;text-align:center;text-overflow:ellipsis;white-space:nowrap}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:var(--ck-color-media-embed-placeholder-url-text-hover);cursor:pointer;text-decoration:underline}.ck-media__wrapper[data-oembed-url*="open.spotify.com"]{max-height:380px;max-width:300px}.ck-media__wrapper[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTAuMzc4IiBoZWlnaHQ9IjI1NC4xNjciIHZpZXdCb3g9IjAgMCA2Ni4yNDYgNjcuMjQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTcyLjUzMSAtMjE4LjQ1NSkgc2NhbGUoLjk4MDEyKSI+PHJlY3Qgcnk9IjUuMjM4IiByeD0iNS4yMzgiIHk9IjIzMS4zOTkiIHg9IjE3Ni4wMzEiIGhlaWdodD0iNjAuMDk5IiB3aWR0aD0iNjAuMDk5IiBmaWxsPSIjMzRhNjY4IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxwYXRoIGQ9Im0yMDYuNDc3IDI2MC45LTI4Ljk4NyAyOC45ODdhNS4yMTggNS4yMTggMCAwIDAgMy43OCAxLjYxaDQ5LjYyMWMxLjY5NCAwIDMuMTktLjc5OCA0LjE0Ni0yLjAzN3oiIGZpbGw9IiM1Yzg4YzUiLz48cGF0aCBkPSJNMjI2Ljc0MiAyMjIuOTg4Yy05LjI2NiAwLTE2Ljc3NyA3LjE3LTE2Ljc3NyAxNi4wMTQuMDA3IDIuNzYyLjY2MyA1LjQ3NCAyLjA5MyA3Ljg3NS40My43MDMuODMgMS40MDggMS4xOSAyLjEwNy4zMzMuNTAyLjY1IDEuMDA1Ljk1IDEuNTA4LjM0My40NzcuNjczLjk1Ny45ODggMS40NCAxLjMxIDEuNzY5IDIuNSAzLjUwMiAzLjYzNyA1LjE2OC43OTMgMS4yNzUgMS42ODMgMi42NCAyLjQ2NiAzLjk5IDIuMzYzIDQuMDk0IDQuMDA3IDguMDkyIDQuNiAxMy45MTR2LjAxMmMuMTgyLjQxMi41MTYuNjY2Ljg3OS42NjcuNDAzLS4wMDEuNzY4LS4zMTQuOTMtLjc5OS42MDMtNS43NTYgMi4yMzgtOS43MjkgNC41ODUtMTMuNzk0Ljc4Mi0xLjM1IDEuNjczLTIuNzE1IDIuNDY1LTMuOTkgMS4xMzctMS42NjYgMi4zMjgtMy40IDMuNjM4LTUuMTY5LjMxNS0uNDgyLjY0NS0uOTYyLjk4OC0xLjQzOS4zLS41MDMuNjE3LTEuMDA2Ljk1LTEuNTA4LjM1OS0uNy43Ni0xLjQwNCAxLjE5LTIuMTA3IDEuNDI2LTIuNDAyIDItNS4xMTQgMi4wMDQtNy44NzUgMC04Ljg0NC03LjUxMS0xNi4wMTQtMTYuNzc2LTE2LjAxNHoiIGZpbGw9IiNkZDRiM2UiIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PGVsbGlwc2Ugcnk9IjUuNTY0IiByeD0iNS44MjgiIGN5PSIyMzkuMDAyIiBjeD0iMjI2Ljc0MiIgZmlsbD0iIzgwMmQyNyIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMTkwLjMwMSAyMzcuMjgzYy00LjY3IDAtOC40NTcgMy44NTMtOC40NTcgOC42MDZzMy43ODYgOC42MDcgOC40NTcgOC42MDdjMy4wNDMgMCA0LjgwNi0uOTU4IDYuMzM3LTIuNTE2IDEuNTMtMS41NTcgMi4wODctMy45MTMgMi4wODctNi4yOSAwLS4zNjItLjAyMy0uNzIyLS4wNjQtMS4wNzloLTguMjU3djMuMDQzaDQuODVjLS4xOTcuNzU5LS41MzEgMS40NS0xLjA1OCAxLjk4Ni0uOTQyLjk1OC0yLjAyOCAxLjU0OC0zLjkwMSAxLjU0OC0yLjg3NiAwLTUuMjA4LTIuMzcyLTUuMjA4LTUuMjk5IDAtMi45MjYgMi4zMzItNS4yOTkgNS4yMDgtNS4yOTkgMS4zOTkgMCAyLjYxOC40MDcgMy41ODQgMS4yOTNsMi4zODEtMi4zOGMwLS4wMDItLjAwMy0uMDA0LS4wMDQtLjAwNS0xLjU4OC0xLjUyNC0zLjYyLTIuMjE1LTUuOTU1LTIuMjE1em00LjQzIDUuNjYuMDAzLjAwNnYtLjAwM3oiIGZpbGw9IiNmZmYiIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PHBhdGggZD0ibTIxNS4xODQgMjUxLjkyOS03Ljk4IDcuOTc5IDI4LjQ3NyAyOC40NzVhNS4yMzMgNS4yMzMgMCAwIDAgLjQ0OS0yLjEyM3YtMzEuMTY1Yy0uNDY5LjY3NS0uOTM0IDEuMzQ5LTEuMzgyIDIuMDA1LS43OTIgMS4yNzUtMS42ODIgMi42NC0yLjQ2NSAzLjk5LTIuMzQ3IDQuMDY1LTMuOTgyIDguMDM4LTQuNTg1IDEzLjc5NC0uMTYyLjQ4NS0uNTI3Ljc5OC0uOTMuNzk5LS4zNjMtLjAwMS0uNjk3LS4yNTUtLjg3OS0uNjY3di0uMDEyYy0uNTkzLTUuODIyLTIuMjM3LTkuODItNC42LTEzLjkxNC0uNzgzLTEuMzUtMS42NzMtMi43MTUtMi40NjYtMy45OS0xLjEzNy0xLjY2Ni0yLjMyNy0zLjQtMy42MzctNS4xNjlsLS4wMDItLjAwM3oiIGZpbGw9IiNjM2MzYzMiLz48cGF0aCBkPSJtMjEyLjk4MyAyNDguNDk1LTM2Ljk1MiAzNi45NTN2LjgxMmE1LjIyNyA1LjIyNyAwIDAgMCA1LjIzOCA1LjIzOGgxLjAxNWwzNS42NjYtMzUuNjY2YTEzNi4yNzUgMTM2LjI3NSAwIDAgMC0yLjc2NC0zLjkgMzcuNTc1IDM3LjU3NSAwIDAgMC0uOTg5LTEuNDQgMzUuMTI3IDM1LjEyNyAwIDAgMC0uOTUtMS41MDhjLS4wODMtLjE2Mi0uMTc2LS4zMjYtLjI2NC0uNDg5eiIgZmlsbD0iI2ZkZGM0ZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJtMjExLjk5OCAyNjEuMDgzLTYuMTUyIDYuMTUxIDI0LjI2NCAyNC4yNjRoLjc4MWE1LjIyNyA1LjIyNyAwIDAgMCA1LjIzOS01LjIzOHYtMS4wNDV6IiBmaWxsPSIjZmZmIiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjwvZz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder{background:#4268b3}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAyNCIgaGVpZ2h0PSIxMDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik05NjcuNDg0IDBINTYuNTE3QzI1LjMwNCAwIDAgMjUuMzA0IDAgNTYuNTE3djkxMC45NjZDMCA5OTguNjk0IDI1LjI5NyAxMDI0IDU2LjUyMiAxMDI0SDU0N1Y2MjhINDE0VjQ3M2gxMzNWMzU5LjAyOWMwLTEzMi4yNjIgODAuNzczLTIwNC4yODIgMTk4Ljc1Ni0yMDQuMjgyIDU2LjUxMyAwIDEwNS4wODYgNC4yMDggMTE5LjI0NCA2LjA4OVYyOTlsLTgxLjYxNi4wMzdjLTYzLjk5MyAwLTc2LjM4NCAzMC40OTItNzYuMzg0IDc1LjIzNlY0NzNoMTUzLjQ4N2wtMTkuOTg2IDE1NUg3MDd2Mzk2aDI2MC40ODRjMzEuMjEzIDAgNTYuNTE2LTI1LjMwMyA1Ni41MTYtNTYuNTE2VjU2LjUxNUMxMDI0IDI1LjMwMyA5OTguNjk3IDAgOTY3LjQ4NCAwIiBmaWxsPSIjRkZGRkZFIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__url__text{color:#cdf}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder{background:linear-gradient(-135deg,#1400c7,#b800b1,#f50000)}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTA0IiBoZWlnaHQ9IjUwNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGRlZnM+PHBhdGggaWQ9ImEiIGQ9Ik0wIC4xNTloNTAzLjg0MVY1MDMuOTRIMHoiLz48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48bWFzayBpZD0iYiIgZmlsbD0iI2ZmZiI+PHVzZSB4bGluazpocmVmPSIjYSIvPjwvbWFzaz48cGF0aCBkPSJNMjUxLjkyMS4xNTljLTY4LjQxOCAwLTc2Ljk5Ny4yOS0xMDMuODY3IDEuNTE2LTI2LjgxNCAxLjIyMy00NS4xMjcgNS40ODItNjEuMTUxIDExLjcxLTE2LjU2NiA2LjQzNy0zMC42MTUgMTUuMDUxLTQ0LjYyMSAyOS4wNTYtMTQuMDA1IDE0LjAwNi0yMi42MTkgMjguMDU1LTI5LjA1NiA0NC42MjEtNi4yMjggMTYuMDI0LTEwLjQ4NyAzNC4zMzctMTEuNzEgNjEuMTUxQy4yOSAxNzUuMDgzIDAgMTgzLjY2MiAwIDI1Mi4wOGMwIDY4LjQxNy4yOSA3Ni45OTYgMS41MTYgMTAzLjg2NiAxLjIyMyAyNi44MTQgNS40ODIgNDUuMTI3IDExLjcxIDYxLjE1MSA2LjQzNyAxNi41NjYgMTUuMDUxIDMwLjYxNSAyOS4wNTYgNDQuNjIxIDE0LjAwNiAxNC4wMDUgMjguMDU1IDIyLjYxOSA0NC42MjEgMjkuMDU3IDE2LjAyNCA2LjIyNyAzNC4zMzcgMTAuNDg2IDYxLjE1MSAxMS43MDkgMjYuODcgMS4yMjYgMzUuNDQ5IDEuNTE2IDEwMy44NjcgMS41MTYgNjguNDE3IDAgNzYuOTk2LS4yOSAxMDMuODY2LTEuNTE2IDI2LjgxNC0xLjIyMyA0NS4xMjctNS40ODIgNjEuMTUxLTExLjcwOSAxNi41NjYtNi40MzggMzAuNjE1LTE1LjA1MiA0NC42MjEtMjkuMDU3IDE0LjAwNS0xNC4wMDYgMjIuNjE5LTI4LjA1NSAyOS4wNTctNDQuNjIxIDYuMjI3LTE2LjAyNCAxMC40ODYtMzQuMzM3IDExLjcwOS02MS4xNTEgMS4yMjYtMjYuODcgMS41MTYtMzUuNDQ5IDEuNTE2LTEwMy44NjYgMC02OC40MTgtLjI5LTc2Ljk5Ny0xLjUxNi0xMDMuODY3LTEuMjIzLTI2LjgxNC01LjQ4Mi00NS4xMjctMTEuNzA5LTYxLjE1MS02LjQzOC0xNi41NjYtMTUuMDUyLTMwLjYxNS0yOS4wNTctNDQuNjIxLTE0LjAwNi0xNC4wMDUtMjguMDU1LTIyLjYxOS00NC42MjEtMjkuMDU2LTE2LjAyNC02LjIyOC0zNC4zMzctMTAuNDg3LTYxLjE1MS0xMS43MUMzMjguOTE3LjQ0OSAzMjAuMzM4LjE1OSAyNTEuOTIxLjE1OVptMCA0NS4zOTFjNjcuMjY1IDAgNzUuMjMzLjI1NyAxMDEuNzk3IDEuNDY5IDI0LjU2MiAxLjEyIDM3LjkwMSA1LjIyNCA0Ni43NzggOC42NzQgMTEuNzU5IDQuNTcgMjAuMTUxIDEwLjAyOSAyOC45NjYgMTguODQ1IDguODE2IDguODE1IDE0LjI3NSAxNy4yMDcgMTguODQ1IDI4Ljk2NiAzLjQ1IDguODc3IDcuNTU0IDIyLjIxNiA4LjY3NCA0Ni43NzggMS4yMTIgMjYuNTY0IDEuNDY5IDM0LjUzMiAxLjQ2OSAxMDEuNzk4IDAgNjcuMjY1LS4yNTcgNzUuMjMzLTEuNDY5IDEwMS43OTctMS4xMiAyNC41NjItNS4yMjQgMzcuOTAxLTguNjc0IDQ2Ljc3OC00LjU3IDExLjc1OS0xMC4wMjkgMjAuMTUxLTE4Ljg0NSAyOC45NjYtOC44MTUgOC44MTYtMTcuMjA3IDE0LjI3NS0yOC45NjYgMTguODQ1LTguODc3IDMuNDUtMjIuMjE2IDcuNTU0LTQ2Ljc3OCA4LjY3NC0yNi41NiAxLjIxMi0zNC41MjcgMS40NjktMTAxLjc5NyAxLjQ2OS02Ny4yNzEgMC03NS4yMzctLjI1Ny0xMDEuNzk4LTEuNDY5LTI0LjU2Mi0xLjEyLTM3LjkwMS01LjIyNC00Ni43NzgtOC42NzQtMTEuNzU5LTQuNTctMjAuMTUxLTEwLjAyOS0yOC45NjYtMTguODQ1LTguODE1LTguODE1LTE0LjI3NS0xNy4yMDctMTguODQ1LTI4Ljk2Ni0zLjQ1LTguODc3LTcuNTU0LTIyLjIxNi04LjY3NC00Ni43NzgtMS4yMTItMjYuNTY0LTEuNDY5LTM0LjUzMi0xLjQ2OS0xMDEuNzk3IDAtNjcuMjY2LjI1Ny03NS4yMzQgMS40NjktMTAxLjc5OCAxLjEyLTI0LjU2MiA1LjIyNC0zNy45MDEgOC42NzQtNDYuNzc4IDQuNTctMTEuNzU5IDEwLjAyOS0yMC4xNTEgMTguODQ1LTI4Ljk2NiA4LjgxNS04LjgxNiAxNy4yMDctMTQuMjc1IDI4Ljk2Ni0xOC44NDUgOC44NzctMy40NSAyMi4yMTYtNy41NTQgNDYuNzc4LTguNjc0IDI2LjU2NC0xLjIxMiAzNC41MzItMS40NjkgMTAxLjc5OC0xLjQ2OVoiIGZpbGw9IiNGRkYiIG1hc2s9InVybCgjYikiLz48cGF0aCBkPSJNMjUxLjkyMSAzMzYuMDUzYy00Ni4zNzggMC04My45NzQtMzcuNTk2LTgzLjk3NC04My45NzMgMC00Ni4zNzggMzcuNTk2LTgzLjk3NCA4My45NzQtODMuOTc0IDQ2LjM3NyAwIDgzLjk3MyAzNy41OTYgODMuOTczIDgzLjk3NCAwIDQ2LjM3Ny0zNy41OTYgODMuOTczLTgzLjk3MyA4My45NzNabTAtMjEzLjMzOGMtNzEuNDQ3IDAtMTI5LjM2NSA1Ny45MTgtMTI5LjM2NSAxMjkuMzY1IDAgNzEuNDQ2IDU3LjkxOCAxMjkuMzY0IDEyOS4zNjUgMTI5LjM2NCA3MS40NDYgMCAxMjkuMzY0LTU3LjkxOCAxMjkuMzY0LTEyOS4zNjQgMC03MS40NDctNTcuOTE4LTEyOS4zNjUtMTI5LjM2NC0xMjkuMzY1Wk00MTYuNjI3IDExNy42MDRjMCAxNi42OTYtMTMuNTM1IDMwLjIzLTMwLjIzMSAzMC4yMy0xNi42OTUgMC0zMC4yMy0xMy41MzQtMzAuMjMtMzAuMjMgMC0xNi42OTYgMTMuNTM1LTMwLjIzMSAzMC4yMy0zMC4yMzEgMTYuNjk2IDAgMzAuMjMxIDEzLjUzNSAzMC4yMzEgMzAuMjMxIiBmaWxsPSIjRkZGIi8+PC9nPjwvc3ZnPg==)}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__url__text{color:#ffe0fe}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder{background:linear-gradient(90deg,#71c6f4,#0d70a5)}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgNDAwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0MDAgNDAwIiB4bWw6c3BhY2U9InByZXNlcnZlIj48cGF0aCBkPSJNNDAwIDIwMGMwIDExMC41LTg5LjUgMjAwLTIwMCAyMDBTMCAzMTAuNSAwIDIwMCA4OS41IDAgMjAwIDBzMjAwIDg5LjUgMjAwIDIwMHpNMTYzLjQgMzA1LjVjODguNyAwIDEzNy4yLTczLjUgMTM3LjItMTM3LjIgMC0yLjEgMC00LjItLjEtNi4yIDkuNC02LjggMTcuNi0xNS4zIDI0LjEtMjUtOC42IDMuOC0xNy45IDYuNC0yNy43IDcuNiAxMC02IDE3LjYtMTUuNCAyMS4yLTI2LjctOS4zIDUuNS0xOS42IDkuNS0zMC42IDExLjctOC44LTkuNC0yMS4zLTE1LjItMzUuMi0xNS4yLTI2LjYgMC00OC4yIDIxLjYtNDguMiA0OC4yIDAgMy44LjQgNy41IDEuMyAxMS00MC4xLTItNzUuNi0yMS4yLTk5LjQtNTAuNC00LjEgNy4xLTYuNSAxNS40LTYuNSAyNC4yIDAgMTYuNyA4LjUgMzEuNSAyMS41IDQwLjEtNy45LS4yLTE1LjMtMi40LTIxLjgtNnYuNmMwIDIzLjQgMTYuNiA0Mi44IDM4LjcgNDcuMy00IDEuMS04LjMgMS43LTEyLjcgMS43LTMuMSAwLTYuMS0uMy05LjEtLjkgNi4xIDE5LjIgMjMuOSAzMy4xIDQ1IDMzLjUtMTYuNSAxMi45LTM3LjMgMjAuNi01OS45IDIwLjYtMy45IDAtNy43LS4yLTExLjUtLjcgMjEuMSAxMy44IDQ2LjUgMjEuOCA3My43IDIxLjgiIHN0eWxlPSJmaWxsOiNmZmYiLz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__url__text{color:#b8e6ff}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}',"",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaembedediting.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-media-embed/mediaembedediting.css"],names:[],mappings:"AAMC,0CAGC,kBAAmB,CAFnB,YAAa,CACb,qBAcD,CAXC,sEAEC,cAAe,CAEf,iBAMD,CAJC,wGAEC,aAAc,CADd,eAED,CAWD,6kBACC,YACD,CAYF,2LACC,mBACD,CC1CA,MACC,0CAA2C,CAE3C,mDAA4D,CAC5D,2EACD,CAEA,mBACC,aA+FD,CA7FC,0CAEC,0CAA2C,CAD3C,0CA6BD,CA1BC,uEAIC,uBAA2B,CAC3B,qBAAsB,CAHtB,kDAAmD,CACnD,qCAAsC,CAFtC,qDAUD,CAJC,gFAEC,WAAY,CADZ,UAED,CAGD,4EACC,sDAAuD,CAGvD,iBAAkB,CADlB,iBAAkB,CAElB,sBAAuB,CAHvB,kBAUD,CALC,kFACC,4DAA6D,CAC7D,cAAe,CACf,yBACD,CAIF,wDAEC,gBAAiB,CADjB,eAED,CAEA,4UAIC,wvGACD,CAEA,2EACC,kBAaD,CAXC,wGACC,orBACD,CAEA,6GACC,UAKD,CAHC,mHACC,UACD,CAIF,4EACC,2DAcD,CAZC,yGACC,4jHACD,CAGA,8GACC,aAKD,CAHC,oHACC,UACD,CAIF,6EAEC,iDAaD,CAXC,0GACC,wiCACD,CAEA,+GACC,aAKD,CAHC,qHACC,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-media__wrapper {
	& .ck-media__placeholder {
		display: flex;
		flex-direction: column;
		align-items: center;

		& .ck-media__placeholder__url {
			/* Otherwise the URL will overflow when the content is very narrow. */
			max-width: 100%;

			position: relative;

			& .ck-media__placeholder__url__text {
				overflow: hidden;
				display: block;
			}
		}
	}

	&[data-oembed-url*="twitter.com"],
	&[data-oembed-url*="google.com/maps"],
	&[data-oembed-url*="goo.gl/maps"],
	&[data-oembed-url*="maps.google.com"],
	&[data-oembed-url*="maps.app.goo.gl"],
	&[data-oembed-url*="facebook.com"],
	&[data-oembed-url*="instagram.com"] {
		& .ck-media__placeholder__icon * {
			display: none;
		}
	}
}

/* Disable all mouse interaction as long as the editor is not read–only.
   https://github.com/ckeditor/ckeditor5-media-embed/issues/58 */
.ck-editor__editable:not(.ck-read-only) .ck-media__wrapper > *:not(.ck-media__placeholder) {
	pointer-events: none;
}

/* Disable all mouse interaction when the widget is not selected (e.g. to avoid opening links by accident).
   https://github.com/ckeditor/ckeditor5-media-embed/issues/18 */
.ck-editor__editable:not(.ck-read-only) .ck-widget:not(.ck-widget_selected) .ck-media__placeholder {
	pointer-events: none;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-media-embed-placeholder-icon-size: 3em;

	--ck-color-media-embed-placeholder-url-text: hsl(0, 0%, 46%);
	--ck-color-media-embed-placeholder-url-text-hover: var(--ck-color-base-text);
}

.ck-media__wrapper {
	margin: 0 auto;

	& .ck-media__placeholder {
		padding: calc( 3 * var(--ck-spacing-standard) );
		background: var(--ck-color-base-foreground);

		& .ck-media__placeholder__icon {
			min-width: var(--ck-media-embed-placeholder-icon-size);
			height: var(--ck-media-embed-placeholder-icon-size);
			margin-bottom: var(--ck-spacing-large);
			background-position: center;
			background-size: cover;

			& .ck-icon {
				width: 100%;
				height: 100%;
			}
		}

		& .ck-media__placeholder__url__text {
			color: var(--ck-color-media-embed-placeholder-url-text);
			white-space: nowrap;
			text-align: center;
			font-style: italic;
			text-overflow: ellipsis;

			&:hover {
				color: var(--ck-color-media-embed-placeholder-url-text-hover);
				cursor: pointer;
				text-decoration: underline;
			}
		}
	}

	&[data-oembed-url*="open.spotify.com"] {
		max-width: 300px;
		max-height: 380px;
	}

	&[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon,
	&[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon,
	&[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon,
	&[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon {
		background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTAuMzc4IiBoZWlnaHQ9IjI1NC4xNjciIHZpZXdCb3g9IjAgMCA2Ni4yNDYgNjcuMjQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTcyLjUzMSAtMjE4LjQ1NSkgc2NhbGUoLjk4MDEyKSI+PHJlY3Qgcnk9IjUuMjM4IiByeD0iNS4yMzgiIHk9IjIzMS4zOTkiIHg9IjE3Ni4wMzEiIGhlaWdodD0iNjAuMDk5IiB3aWR0aD0iNjAuMDk5IiBmaWxsPSIjMzRhNjY4IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxwYXRoIGQ9Ik0yMDYuNDc3IDI2MC45bC0yOC45ODcgMjguOTg3YTUuMjE4IDUuMjE4IDAgMCAwIDMuNzggMS42MWg0OS42MjFjMS42OTQgMCAzLjE5LS43OTggNC4xNDYtMi4wMzd6IiBmaWxsPSIjNWM4OGM1Ii8+PHBhdGggZD0iTTIyNi43NDIgMjIyLjk4OGMtOS4yNjYgMC0xNi43NzcgNy4xNy0xNi43NzcgMTYuMDE0LjAwNyAyLjc2Mi42NjMgNS40NzQgMi4wOTMgNy44NzUuNDMuNzAzLjgzIDEuNDA4IDEuMTkgMi4xMDcuMzMzLjUwMi42NSAxLjAwNS45NSAxLjUwOC4zNDMuNDc3LjY3My45NTcuOTg4IDEuNDQgMS4zMSAxLjc2OSAyLjUgMy41MDIgMy42MzcgNS4xNjguNzkzIDEuMjc1IDEuNjgzIDIuNjQgMi40NjYgMy45OSAyLjM2MyA0LjA5NCA0LjAwNyA4LjA5MiA0LjYgMTMuOTE0di4wMTJjLjE4Mi40MTIuNTE2LjY2Ni44NzkuNjY3LjQwMy0uMDAxLjc2OC0uMzE0LjkzLS43OTkuNjAzLTUuNzU2IDIuMjM4LTkuNzI5IDQuNTg1LTEzLjc5NC43ODItMS4zNSAxLjY3My0yLjcxNSAyLjQ2NS0zLjk5IDEuMTM3LTEuNjY2IDIuMzI4LTMuNCAzLjYzOC01LjE2OS4zMTUtLjQ4Mi42NDUtLjk2Mi45ODgtMS40MzkuMy0uNTAzLjYxNy0xLjAwNi45NS0xLjUwOC4zNTktLjcuNzYtMS40MDQgMS4xOS0yLjEwNyAxLjQyNi0yLjQwMiAyLTUuMTE0IDIuMDA0LTcuODc1IDAtOC44NDQtNy41MTEtMTYuMDE0LTE2Ljc3Ni0xNi4wMTR6IiBmaWxsPSIjZGQ0YjNlIiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxlbGxpcHNlIHJ5PSI1LjU2NCIgcng9IjUuODI4IiBjeT0iMjM5LjAwMiIgY3g9IjIyNi43NDIiIGZpbGw9IiM4MDJkMjciIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PHBhdGggZD0iTTE5MC4zMDEgMjM3LjI4M2MtNC42NyAwLTguNDU3IDMuODUzLTguNDU3IDguNjA2czMuNzg2IDguNjA3IDguNDU3IDguNjA3YzMuMDQzIDAgNC44MDYtLjk1OCA2LjMzNy0yLjUxNiAxLjUzLTEuNTU3IDIuMDg3LTMuOTEzIDIuMDg3LTYuMjkgMC0uMzYyLS4wMjMtLjcyMi0uMDY0LTEuMDc5aC04LjI1N3YzLjA0M2g0Ljg1Yy0uMTk3Ljc1OS0uNTMxIDEuNDUtMS4wNTggMS45ODYtLjk0Mi45NTgtMi4wMjggMS41NDgtMy45MDEgMS41NDgtMi44NzYgMC01LjIwOC0yLjM3Mi01LjIwOC01LjI5OSAwLTIuOTI2IDIuMzMyLTUuMjk5IDUuMjA4LTUuMjk5IDEuMzk5IDAgMi42MTguNDA3IDMuNTg0IDEuMjkzbDIuMzgxLTIuMzhjMC0uMDAyLS4wMDMtLjAwNC0uMDA0LS4wMDUtMS41ODgtMS41MjQtMy42Mi0yLjIxNS01Ljk1NS0yLjIxNXptNC40MyA1LjY2bC4wMDMuMDA2di0uMDAzeiIgZmlsbD0iI2ZmZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMjE1LjE4NCAyNTEuOTI5bC03Ljk4IDcuOTc5IDI4LjQ3NyAyOC40NzVjLjI4Ny0uNjQ5LjQ0OS0xLjM2Ni40NDktMi4xMjN2LTMxLjE2NWMtLjQ2OS42NzUtLjkzNCAxLjM0OS0xLjM4MiAyLjAwNS0uNzkyIDEuMjc1LTEuNjgyIDIuNjQtMi40NjUgMy45OS0yLjM0NyA0LjA2NS0zLjk4MiA4LjAzOC00LjU4NSAxMy43OTQtLjE2Mi40ODUtLjUyNy43OTgtLjkzLjc5OS0uMzYzLS4wMDEtLjY5Ny0uMjU1LS44NzktLjY2N3YtLjAxMmMtLjU5My01LjgyMi0yLjIzNy05LjgyLTQuNi0xMy45MTQtLjc4My0xLjM1LTEuNjczLTIuNzE1LTIuNDY2LTMuOTktMS4xMzctMS42NjYtMi4zMjctMy40LTMuNjM3LTUuMTY5bC0uMDAyLS4wMDN6IiBmaWxsPSIjYzNjM2MzIi8+PHBhdGggZD0iTTIxMi45ODMgMjQ4LjQ5NWwtMzYuOTUyIDM2Ljk1M3YuODEyYTUuMjI3IDUuMjI3IDAgMCAwIDUuMjM4IDUuMjM4aDEuMDE1bDM1LjY2Ni0zNS42NjZhMTM2LjI3NSAxMzYuMjc1IDAgMCAwLTIuNzY0LTMuOSAzNy41NzUgMzcuNTc1IDAgMCAwLS45ODktMS40NGMtLjI5OS0uNTAzLS42MTYtMS4wMDYtLjk1LTEuNTA4LS4wODMtLjE2Mi0uMTc2LS4zMjYtLjI2NC0uNDg5eiIgZmlsbD0iI2ZkZGM0ZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMjExLjk5OCAyNjEuMDgzbC02LjE1MiA2LjE1MSAyNC4yNjQgMjQuMjY0aC43ODFhNS4yMjcgNS4yMjcgMCAwIDAgNS4yMzktNS4yMzh2LTEuMDQ1eiIgZmlsbD0iI2ZmZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48L2c+PC9zdmc+);
	}

	&[data-oembed-url*="facebook.com"] .ck-media__placeholder {
		background: hsl(220, 46%, 48%);

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSIxMDI0cHgiIGhlaWdodD0iMTAyNHB4IiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPiAgICAgICAgPHRpdGxlPkZpbGwgMTwvdGl0bGU+ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPiAgICA8ZGVmcz48L2RlZnM+ICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPiAgICAgICAgPGcgaWQ9ImZMb2dvX1doaXRlIiBmaWxsPSIjRkZGRkZFIj4gICAgICAgICAgICA8cGF0aCBkPSJNOTY3LjQ4NCwwIEw1Ni41MTcsMCBDMjUuMzA0LDAgMCwyNS4zMDQgMCw1Ni41MTcgTDAsOTY3LjQ4MyBDMCw5OTguNjk0IDI1LjI5NywxMDI0IDU2LjUyMiwxMDI0IEw1NDcsMTAyNCBMNTQ3LDYyOCBMNDE0LDYyOCBMNDE0LDQ3MyBMNTQ3LDQ3MyBMNTQ3LDM1OS4wMjkgQzU0NywyMjYuNzY3IDYyNy43NzMsMTU0Ljc0NyA3NDUuNzU2LDE1NC43NDcgQzgwMi4yNjksMTU0Ljc0NyA4NTAuODQyLDE1OC45NTUgODY1LDE2MC44MzYgTDg2NSwyOTkgTDc4My4zODQsMjk5LjAzNyBDNzE5LjM5MSwyOTkuMDM3IDcwNywzMjkuNTI5IDcwNywzNzQuMjczIEw3MDcsNDczIEw4NjAuNDg3LDQ3MyBMODQwLjUwMSw2MjggTDcwNyw2MjggTDcwNywxMDI0IEw5NjcuNDg0LDEwMjQgQzk5OC42OTcsMTAyNCAxMDI0LDk5OC42OTcgMTAyNCw5NjcuNDg0IEwxMDI0LDU2LjUxNSBDMTAyNCwyNS4zMDMgOTk4LjY5NywwIDk2Ny40ODQsMCIgaWQ9IkZpbGwtMSI+PC9wYXRoPiAgICAgICAgPC9nPiAgICA8L2c+PC9zdmc+);
		}

		& .ck-media__placeholder__url__text {
			color: hsl(220, 100%, 90%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}

	&[data-oembed-url*="instagram.com"] .ck-media__placeholder {
		background: linear-gradient(-135deg,hsl(246, 100%, 39%),hsl(302, 100%, 36%),hsl(0, 100%, 48%));

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI1MDRweCIgaGVpZ2h0PSI1MDRweCIgdmlld0JveD0iMCAwIDUwNCA1MDQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+ICAgICAgICA8dGl0bGU+Z2x5cGgtbG9nb19NYXkyMDE2PC90aXRsZT4gICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+ICAgIDxkZWZzPiAgICAgICAgPHBvbHlnb24gaWQ9InBhdGgtMSIgcG9pbnRzPSIwIDAuMTU5IDUwMy44NDEgMC4xNTkgNTAzLjg0MSA1MDMuOTQgMCA1MDMuOTQiPjwvcG9seWdvbj4gICAgPC9kZWZzPiAgICA8ZyBpZD0iZ2x5cGgtbG9nb19NYXkyMDE2IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4gICAgICAgIDxnIGlkPSJHcm91cC0zIj4gICAgICAgICAgICA8bWFzayBpZD0ibWFzay0yIiBmaWxsPSJ3aGl0ZSI+ICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+ICAgICAgICAgICAgPC9tYXNrPiAgICAgICAgICAgIDxnIGlkPSJDbGlwLTIiPjwvZz4gICAgICAgICAgICA8cGF0aCBkPSJNMjUxLjkyMSwwLjE1OSBDMTgzLjUwMywwLjE1OSAxNzQuOTI0LDAuNDQ5IDE0OC4wNTQsMS42NzUgQzEyMS4yNCwyLjg5OCAxMDIuOTI3LDcuMTU3IDg2LjkwMywxMy4zODUgQzcwLjMzNywxOS44MjIgNTYuMjg4LDI4LjQzNiA0Mi4yODIsNDIuNDQxIEMyOC4yNzcsNTYuNDQ3IDE5LjY2Myw3MC40OTYgMTMuMjI2LDg3LjA2MiBDNi45OTgsMTAzLjA4NiAyLjczOSwxMjEuMzk5IDEuNTE2LDE0OC4yMTMgQzAuMjksMTc1LjA4MyAwLDE4My42NjIgMCwyNTIuMDggQzAsMzIwLjQ5NyAwLjI5LDMyOS4wNzYgMS41MTYsMzU1Ljk0NiBDMi43MzksMzgyLjc2IDYuOTk4LDQwMS4wNzMgMTMuMjI2LDQxNy4wOTcgQzE5LjY2Myw0MzMuNjYzIDI4LjI3Nyw0NDcuNzEyIDQyLjI4Miw0NjEuNzE4IEM1Ni4yODgsNDc1LjcyMyA3MC4zMzcsNDg0LjMzNyA4Ni45MDMsNDkwLjc3NSBDMTAyLjkyNyw0OTcuMDAyIDEyMS4yNCw1MDEuMjYxIDE0OC4wNTQsNTAyLjQ4NCBDMTc0LjkyNCw1MDMuNzEgMTgzLjUwMyw1MDQgMjUxLjkyMSw1MDQgQzMyMC4zMzgsNTA0IDMyOC45MTcsNTAzLjcxIDM1NS43ODcsNTAyLjQ4NCBDMzgyLjYwMSw1MDEuMjYxIDQwMC45MTQsNDk3LjAwMiA0MTYuOTM4LDQ5MC43NzUgQzQzMy41MDQsNDg0LjMzNyA0NDcuNTUzLDQ3NS43MjMgNDYxLjU1OSw0NjEuNzE4IEM0NzUuNTY0LDQ0Ny43MTIgNDg0LjE3OCw0MzMuNjYzIDQ5MC42MTYsNDE3LjA5NyBDNDk2Ljg0Myw0MDEuMDczIDUwMS4xMDIsMzgyLjc2IDUwMi4zMjUsMzU1Ljk0NiBDNTAzLjU1MSwzMjkuMDc2IDUwMy44NDEsMzIwLjQ5NyA1MDMuODQxLDI1Mi4wOCBDNTAzLjg0MSwxODMuNjYyIDUwMy41NTEsMTc1LjA4MyA1MDIuMzI1LDE0OC4yMTMgQzUwMS4xMDIsMTIxLjM5OSA0OTYuODQzLDEwMy4wODYgNDkwLjYxNiw4Ny4wNjIgQzQ4NC4xNzgsNzAuNDk2IDQ3NS41NjQsNTYuNDQ3IDQ2MS41NTksNDIuNDQxIEM0NDcuNTUzLDI4LjQzNiA0MzMuNTA0LDE5LjgyMiA0MTYuOTM4LDEzLjM4NSBDNDAwLjkxNCw3LjE1NyAzODIuNjAxLDIuODk4IDM1NS43ODcsMS42NzUgQzMyOC45MTcsMC40NDkgMzIwLjMzOCwwLjE1OSAyNTEuOTIxLDAuMTU5IFogTTI1MS45MjEsNDUuNTUgQzMxOS4xODYsNDUuNTUgMzI3LjE1NCw0NS44MDcgMzUzLjcxOCw0Ny4wMTkgQzM3OC4yOCw0OC4xMzkgMzkxLjYxOSw1Mi4yNDMgNDAwLjQ5Niw1NS42OTMgQzQxMi4yNTUsNjAuMjYzIDQyMC42NDcsNjUuNzIyIDQyOS40NjIsNzQuNTM4IEM0MzguMjc4LDgzLjM1MyA0NDMuNzM3LDkxLjc0NSA0NDguMzA3LDEwMy41MDQgQzQ1MS43NTcsMTEyLjM4MSA0NTUuODYxLDEyNS43MiA0NTYuOTgxLDE1MC4yODIgQzQ1OC4xOTMsMTc2Ljg0NiA0NTguNDUsMTg0LjgxNCA0NTguNDUsMjUyLjA4IEM0NTguNDUsMzE5LjM0NSA0NTguMTkzLDMyNy4zMTMgNDU2Ljk4MSwzNTMuODc3IEM0NTUuODYxLDM3OC40MzkgNDUxLjc1NywzOTEuNzc4IDQ0OC4zMDcsNDAwLjY1NSBDNDQzLjczNyw0MTIuNDE0IDQzOC4yNzgsNDIwLjgwNiA0MjkuNDYyLDQyOS42MjEgQzQyMC42NDcsNDM4LjQzNyA0MTIuMjU1LDQ0My44OTYgNDAwLjQ5Niw0NDguNDY2IEMzOTEuNjE5LDQ1MS45MTYgMzc4LjI4LDQ1Ni4wMiAzNTMuNzE4LDQ1Ny4xNCBDMzI3LjE1OCw0NTguMzUyIDMxOS4xOTEsNDU4LjYwOSAyNTEuOTIxLDQ1OC42MDkgQzE4NC42NSw0NTguNjA5IDE3Ni42ODQsNDU4LjM1MiAxNTAuMTIzLDQ1Ny4xNCBDMTI1LjU2MSw0NTYuMDIgMTEyLjIyMiw0NTEuOTE2IDEwMy4zNDUsNDQ4LjQ2NiBDOTEuNTg2LDQ0My44OTYgODMuMTk0LDQzOC40MzcgNzQuMzc5LDQyOS42MjEgQzY1LjU2NCw0MjAuODA2IDYwLjEwNCw0MTIuNDE0IDU1LjUzNCw0MDAuNjU1IEM1Mi4wODQsMzkxLjc3OCA0Ny45OCwzNzguNDM5IDQ2Ljg2LDM1My44NzcgQzQ1LjY0OCwzMjcuMzEzIDQ1LjM5MSwzMTkuMzQ1IDQ1LjM5MSwyNTIuMDggQzQ1LjM5MSwxODQuODE0IDQ1LjY0OCwxNzYuODQ2IDQ2Ljg2LDE1MC4yODIgQzQ3Ljk4LDEyNS43MiA1Mi4wODQsMTEyLjM4MSA1NS41MzQsMTAzLjUwNCBDNjAuMTA0LDkxLjc0NSA2NS41NjMsODMuMzUzIDc0LjM3OSw3NC41MzggQzgzLjE5NCw2NS43MjIgOTEuNTg2LDYwLjI2MyAxMDMuMzQ1LDU1LjY5MyBDMTEyLjIyMiw1Mi4yNDMgMTI1LjU2MSw0OC4xMzkgMTUwLjEyMyw0Ny4wMTkgQzE3Ni42ODcsNDUuODA3IDE4NC42NTUsNDUuNTUgMjUxLjkyMSw0NS41NSBaIiBpZD0iRmlsbC0xIiBmaWxsPSIjRkZGRkZGIiBtYXNrPSJ1cmwoI21hc2stMikiPjwvcGF0aD4gICAgICAgIDwvZz4gICAgICAgIDxwYXRoIGQ9Ik0yNTEuOTIxLDMzNi4wNTMgQzIwNS41NDMsMzM2LjA1MyAxNjcuOTQ3LDI5OC40NTcgMTY3Ljk0NywyNTIuMDggQzE2Ny45NDcsMjA1LjcwMiAyMDUuNTQzLDE2OC4xMDYgMjUxLjkyMSwxNjguMTA2IEMyOTguMjk4LDE2OC4xMDYgMzM1Ljg5NCwyMDUuNzAyIDMzNS44OTQsMjUyLjA4IEMzMzUuODk0LDI5OC40NTcgMjk4LjI5OCwzMzYuMDUzIDI1MS45MjEsMzM2LjA1MyBaIE0yNTEuOTIxLDEyMi43MTUgQzE4MC40NzQsMTIyLjcxNSAxMjIuNTU2LDE4MC42MzMgMTIyLjU1NiwyNTIuMDggQzEyMi41NTYsMzIzLjUyNiAxODAuNDc0LDM4MS40NDQgMjUxLjkyMSwzODEuNDQ0IEMzMjMuMzY3LDM4MS40NDQgMzgxLjI4NSwzMjMuNTI2IDM4MS4yODUsMjUyLjA4IEMzODEuMjg1LDE4MC42MzMgMzIzLjM2NywxMjIuNzE1IDI1MS45MjEsMTIyLjcxNSBaIiBpZD0iRmlsbC00IiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+ICAgICAgICA8cGF0aCBkPSJNNDE2LjYyNywxMTcuNjA0IEM0MTYuNjI3LDEzNC4zIDQwMy4wOTIsMTQ3LjgzNCAzODYuMzk2LDE0Ny44MzQgQzM2OS43MDEsMTQ3LjgzNCAzNTYuMTY2LDEzNC4zIDM1Ni4xNjYsMTE3LjYwNCBDMzU2LjE2NiwxMDAuOTA4IDM2OS43MDEsODcuMzczIDM4Ni4zOTYsODcuMzczIEM0MDMuMDkyLDg3LjM3MyA0MTYuNjI3LDEwMC45MDggNDE2LjYyNywxMTcuNjA0IiBpZD0iRmlsbC01IiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+ICAgIDwvZz48L3N2Zz4=);
		}

		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-media__placeholder__url__text {
			color: hsl(302, 100%, 94%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}

	&[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder {
		/* Use gradient to contrast with focused widget (ckeditor/ckeditor5-media-embed#22). */
		background: linear-gradient( to right, hsl(201, 85%, 70%), hsl(201, 85%, 35%) );

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IldoaXRlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQwMCA0MDA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj48c3R5bGUgdHlwZT0idGV4dC9jc3MiPi5zdDB7ZmlsbDojRkZGRkZGO308L3N0eWxlPjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MDAsMjAwYzAsMTEwLjUtODkuNSwyMDAtMjAwLDIwMFMwLDMxMC41LDAsMjAwUzg5LjUsMCwyMDAsMFM0MDAsODkuNSw0MDAsMjAweiBNMTYzLjQsMzA1LjVjODguNywwLDEzNy4yLTczLjUsMTM3LjItMTM3LjJjMC0yLjEsMC00LjItMC4xLTYuMmM5LjQtNi44LDE3LjYtMTUuMywyNC4xLTI1Yy04LjYsMy44LTE3LjksNi40LTI3LjcsNy42YzEwLTYsMTcuNi0xNS40LDIxLjItMjYuN2MtOS4zLDUuNS0xOS42LDkuNS0zMC42LDExLjdjLTguOC05LjQtMjEuMy0xNS4yLTM1LjItMTUuMmMtMjYuNiwwLTQ4LjIsMjEuNi00OC4yLDQ4LjJjMCwzLjgsMC40LDcuNSwxLjMsMTFjLTQwLjEtMi03NS42LTIxLjItOTkuNC01MC40Yy00LjEsNy4xLTYuNSwxNS40LTYuNSwyNC4yYzAsMTYuNyw4LjUsMzEuNSwyMS41LDQwLjFjLTcuOS0wLjItMTUuMy0yLjQtMjEuOC02YzAsMC4yLDAsMC40LDAsMC42YzAsMjMuNCwxNi42LDQyLjgsMzguNyw0Ny4zYy00LDEuMS04LjMsMS43LTEyLjcsMS43Yy0zLjEsMC02LjEtMC4zLTkuMS0wLjljNi4xLDE5LjIsMjMuOSwzMy4xLDQ1LDMzLjVjLTE2LjUsMTIuOS0zNy4zLDIwLjYtNTkuOSwyMC42Yy0zLjksMC03LjctMC4yLTExLjUtMC43QzExMC44LDI5Ny41LDEzNi4yLDMwNS41LDE2My40LDMwNS41Ii8+PC9zdmc+);
		}

		& .ck-media__placeholder__url__text {
			color: hsl(201, 100%, 86%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}
}
`],sourceRoot:""}]);const C=_},9292:(k,b,g)=>{g.d(b,{Z:()=>C});var v=g(1799),A=g.n(v),x=g(2609),_=g.n(x)()(A());_.push([k.id,".ck.ck-media-form{align-items:flex-start;display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-media-form .ck-labeled-field-view{display:inline-block}.ck.ck-media-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-media-form{flex-wrap:wrap}.ck.ck-media-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-media-form .ck-button{flex-basis:50%}}","",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css"],names:[],mappings:"AAOA,kBAEC,sBAAuB,CADvB,YAAa,CAEb,kBAAmB,CACnB,gBAqBD,CAnBC,yCACC,oBACD,CAEA,4BACC,YACD,CCbA,oCDCD,kBAeE,cAUF,CARE,yCACC,eACD,CAEA,6BACC,cACD,CCtBD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-media-form {
	display: flex;
	align-items: flex-start;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-labeled-field-view {
		display: inline-block;
	}

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`],sourceRoot:""}]);const C=_},7368:(k,b,g)=>{g.d(b,{Z:()=>C});var v=g(1799),A=g.n(v),x=g(2609),_=g.n(x)()(A());_.push([k.id,".ck.ck-input-color{display:flex;flex-direction:row-reverse;width:100%}.ck.ck-input-color>input.ck.ck-input-text{flex-grow:1;min-width:auto}.ck.ck-input-color>div.ck.ck-dropdown{min-width:auto}.ck.ck-input-color>div.ck.ck-dropdown>.ck-input-color__button .ck-dropdown__arrow{display:none}.ck.ck-input-color .ck.ck-input-color__button{display:flex}.ck.ck-input-color .ck.ck-input-color__button .ck.ck-input-color__button__preview{overflow:hidden;position:relative}.ck.ck-input-color .ck.ck-input-color__button .ck.ck-input-color__button__preview>.ck.ck-input-color__button__preview__no-color-indicator{display:block;position:absolute}[dir=ltr] .ck.ck-input-color>.ck.ck-input-text{border-bottom-right-radius:0;border-top-right-radius:0}[dir=rtl] .ck.ck-input-color>.ck.ck-input-text{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-input-color>.ck.ck-input-text:focus{z-index:0}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button{padding:0}[dir=ltr] .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button{border-bottom-left-radius:0;border-top-left-radius:0}[dir=ltr] .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button:not(:focus){border-left:1px solid transparent}[dir=rtl] .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button{border-bottom-right-radius:0;border-top-right-radius:0}[dir=rtl] .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button:not(:focus){border-right:1px solid transparent}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button.ck-disabled{background:var(--ck-color-input-disabled-background)}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview{border-radius:0}.ck-rounded-corners .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview,.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview{border:1px solid var(--ck-color-input-border);height:20px;width:20px}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview>.ck.ck-input-color__button__preview__no-color-indicator{background:red;border-radius:2px;height:150%;left:50%;top:-30%;transform:rotate(45deg);transform-origin:50%;width:8%}.ck.ck-input-color .ck.ck-input-color__remove-color{border-bottom-left-radius:0;border-bottom-right-radius:0;padding:calc(var(--ck-spacing-standard)/2) var(--ck-spacing-standard);width:100%}.ck.ck-input-color .ck.ck-input-color__remove-color:not(:focus){border-bottom:1px solid var(--ck-color-input-border)}[dir=ltr] .ck.ck-input-color .ck.ck-input-color__remove-color{border-top-right-radius:0}[dir=rtl] .ck.ck-input-color .ck.ck-input-color__remove-color{border-top-left-radius:0}.ck.ck-input-color .ck.ck-input-color__remove-color .ck.ck-icon{margin-right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-input-color .ck.ck-input-color__remove-color .ck.ck-icon{margin-left:var(--ck-spacing-standard);margin-right:0}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/colorinput.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/colorinput.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,mBAEC,YAAa,CACb,0BAA2B,CAF3B,UAgCD,CA5BC,0CAEC,WAAY,CADZ,cAED,CAEA,sCACC,cAMD,CAHC,kFACC,YACD,CAGD,8CAEC,YAWD,CATC,kFAEC,eAAgB,CADhB,iBAOD,CAJC,0IAEC,aAAc,CADd,iBAED,CC1BF,+CAGE,4BAA6B,CAD7B,yBAcF,CAhBA,+CAQE,2BAA4B,CAD5B,wBASF,CAHC,2CACC,SACD,CAIA,wEACC,SA0CD,CA3CA,kFAKE,2BAA4B,CAD5B,wBAuCF,CApCE,8FACC,iCACD,CATF,kFAcE,4BAA6B,CAD7B,yBA8BF,CA3BE,8FACC,kCACD,CAGD,oFACC,oDACD,CAEA,4GC1CF,eD2DE,CAjBA,+PCtCD,qCDuDC,CAjBA,4GAKC,6CAA8C,CAD9C,WAAY,CADZ,UAcD,CAVC,oKAKC,cAA6B,CAC7B,iBAAkB,CAHlB,WAAY,CADZ,QAAS,CADT,QAAS,CAMT,uBAAwB,CACxB,oBAAqB,CAJrB,QAKD,CAKH,oDAIC,2BAA4B,CAC5B,4BAA6B,CAH7B,qEAAwE,CADxE,UA0BD,CApBC,gEACC,oDACD,CATD,8DAYE,yBAeF,CA3BA,8DAgBE,wBAWF,CARC,gEACC,uCAMD,CAPA,0EAKE,sCAAuC,CADvC,cAGF",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-input-color {
	width: 100%;
	display: flex;
	flex-direction: row-reverse;

	& > input.ck.ck-input-text {
		min-width: auto;
		flex-grow: 1;
	}

	& > div.ck.ck-dropdown {
		min-width: auto;

		/* This dropdown has no arrow but a color preview instead. */
		& > .ck-input-color__button .ck-dropdown__arrow {
			display: none;
		}
	}

	& .ck.ck-input-color__button {
		/* Resolving issue with misaligned buttons on Safari (see #10589) */
		display: flex;

		& .ck.ck-input-color__button__preview {
			position: relative;
			overflow: hidden;

			& > .ck.ck-input-color__button__preview__no-color-indicator {
				position: absolute;
				display: block;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";
@import "../mixins/_rounded.css";

.ck.ck-input-color {
	& > .ck.ck-input-text {
		@mixin ck-dir ltr {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}

		@mixin ck-dir rtl {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}

		/* Make sure the focused input is always on top of the dropdown button so its
		   outline and border are never cropped (also when the input is read-only). */
		&:focus {
			z-index: 0;
		}
	}

	& > .ck.ck-dropdown {
		& > .ck.ck-button.ck-input-color__button {
			padding: 0;

			@mixin ck-dir ltr {
				border-top-left-radius: 0;
				border-bottom-left-radius: 0;

				&:not(:focus) {
					border-left: 1px solid transparent;
				}
			}

			@mixin ck-dir rtl {
				border-top-right-radius: 0;
				border-bottom-right-radius: 0;

				&:not(:focus) {
					border-right: 1px solid transparent;
				}
			}

			&.ck-disabled {
				background: var(--ck-color-input-disabled-background);
			}

			& > .ck.ck-input-color__button__preview {
				@mixin ck-rounded-corners;

				width: 20px;
				height: 20px;
				border: 1px solid var(--ck-color-input-border);

				& > .ck.ck-input-color__button__preview__no-color-indicator {
					top: -30%;
					left: 50%;
					height: 150%;
					width: 8%;
					background: hsl(0, 100%, 50%);
					border-radius: 2px;
					transform: rotate(45deg);
					transform-origin: 50%;
				}
			}
		}
	}

	& .ck.ck-input-color__remove-color {
		width: 100%;
		padding: calc(var(--ck-spacing-standard) / 2) var(--ck-spacing-standard);

		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;

		&:not(:focus) {
			border-bottom: 1px solid var(--ck-color-input-border);
		}

		@mixin ck-dir ltr {
			border-top-right-radius: 0;
		}

		@mixin ck-dir rtl {
			border-top-left-radius: 0;
		}

		& .ck.ck-icon {
			margin-right: var(--ck-spacing-standard);

			@mixin ck-dir rtl {
				margin-right: 0;
				margin-left: var(--ck-spacing-standard);
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const C=_},4070:(k,b,g)=>{g.d(b,{Z:()=>C});var v=g(1799),A=g.n(v),x=g(2609),_=g.n(x)()(A());_.push([k.id,".ck.ck-form{padding:0 0 var(--ck-spacing-large)}.ck.ck-form:focus{outline:none}.ck.ck-form .ck.ck-input-text{min-width:100%;width:0}.ck.ck-form .ck.ck-dropdown{min-width:100%}.ck.ck-form .ck.ck-dropdown .ck-dropdown__button:not(:focus){border:1px solid var(--ck-color-base-border)}.ck.ck-form .ck.ck-dropdown .ck-dropdown__button .ck-button__label{width:100%}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/form.css"],names:[],mappings:"AAKA,YACC,mCAyBD,CAvBC,kBAEC,YACD,CAEA,8BACC,cAAe,CACf,OACD,CAEA,4BACC,cAWD,CARE,6DACC,4CACD,CAEA,mEACC,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-form {
	padding: 0 0 var(--ck-spacing-large);

	&:focus {
		/* See: https://github.com/ckeditor/ckeditor5/issues/4773 */
		outline: none;
	}

	& .ck.ck-input-text {
		min-width: 100%;
		width: 0;
	}

	& .ck.ck-dropdown {
		min-width: 100%;

		& .ck-dropdown__button {
			&:not(:focus) {
				border: 1px solid var(--ck-color-base-border);
			}

			& .ck-button__label {
				width: 100%;
			}
		}
	}
}
`],sourceRoot:""}]);const C=_},9247:(k,b,g)=>{g.d(b,{Z:()=>C});var v=g(1799),A=g.n(v),x=g(2609),_=g.n(x)()(A());_.push([k.id,".ck.ck-form__row{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between}.ck.ck-form__row>:not(.ck-label){flex-grow:1}.ck.ck-form__row.ck-table-form__action-row .ck-button-cancel,.ck.ck-form__row.ck-table-form__action-row .ck-button-save{justify-content:center}.ck.ck-form__row{padding:var(--ck-spacing-standard) var(--ck-spacing-large) 0}[dir=ltr] .ck.ck-form__row>:not(.ck-label)+*{margin-left:var(--ck-spacing-large)}[dir=rtl] .ck.ck-form__row>:not(.ck-label)+*{margin-right:var(--ck-spacing-large)}.ck.ck-form__row>.ck-label{min-width:100%;width:100%}.ck.ck-form__row.ck-table-form__action-row{margin-top:var(--ck-spacing-large)}.ck.ck-form__row.ck-table-form__action-row .ck-button .ck-button__label{color:var(--ck-color-text)}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/formrow.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/formrow.css"],names:[],mappings:"AAKA,iBACC,YAAa,CACb,kBAAmB,CACnB,gBAAiB,CACjB,6BAaD,CAVC,iCACC,WACD,CAGC,wHAEC,sBACD,CCbF,iBACC,4DA2BD,CAvBE,6CAEE,mCAMF,CARA,6CAME,oCAEF,CAGD,2BAEC,cAAe,CADf,UAED,CAEA,2CACC,kCAKD,CAHC,wEACC,0BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-form__row {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-between;

	/* Ignore labels that work as fieldset legends */
	& > *:not(.ck-label) {
		flex-grow: 1;
	}

	&.ck-table-form__action-row {
		& .ck-button-save,
		& .ck-button-cancel {
			justify-content: center;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-form__row {
	padding: var(--ck-spacing-standard) var(--ck-spacing-large) 0;

	/* Ignore labels that work as fieldset legends */
	& > *:not(.ck-label) {
		& + * {
			@mixin ck-dir ltr {
				margin-left: var(--ck-spacing-large);
			}

			@mixin ck-dir rtl {
				margin-right: var(--ck-spacing-large);
			}
		}
	}

	& > .ck-label {
		width: 100%;
		min-width: 100%;
	}

	&.ck-table-form__action-row {
		margin-top: var(--ck-spacing-large);

		& .ck-button .ck-button__label {
			color: var(--ck-color-text);
		}
	}
}
`],sourceRoot:""}]);const C=_},1613:(k,b,g)=>{g.d(b,{Z:()=>C});var v=g(1799),A=g.n(v),x=g(2609),_=g.n(x)()(A());_.push([k.id,".ck .ck-insert-table-dropdown__grid{display:flex;flex-direction:row;flex-wrap:wrap}:root{--ck-insert-table-dropdown-padding:10px;--ck-insert-table-dropdown-box-height:11px;--ck-insert-table-dropdown-box-width:12px;--ck-insert-table-dropdown-box-margin:1px}.ck .ck-insert-table-dropdown__grid{padding:var(--ck-insert-table-dropdown-padding) var(--ck-insert-table-dropdown-padding) 0;width:calc(var(--ck-insert-table-dropdown-box-width)*10 + var(--ck-insert-table-dropdown-box-margin)*20 + var(--ck-insert-table-dropdown-padding)*2)}.ck .ck-insert-table-dropdown__label,.ck[dir=rtl] .ck-insert-table-dropdown__label{text-align:center}.ck .ck-insert-table-dropdown-grid-box{border:1px solid var(--ck-color-base-border);border-radius:1px;margin:var(--ck-insert-table-dropdown-box-margin);min-height:var(--ck-insert-table-dropdown-box-height);min-width:var(--ck-insert-table-dropdown-box-width);outline:none;transition:none}.ck .ck-insert-table-dropdown-grid-box:focus{box-shadow:none}.ck .ck-insert-table-dropdown-grid-box.ck-on{background:var(--ck-color-focus-outer-shadow);border-color:var(--ck-color-focus-border)}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/inserttable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/inserttable.css"],names:[],mappings:"AAKA,oCACC,YAAa,CACb,kBAAmB,CACnB,cACD,CCJA,MACC,uCAAwC,CACxC,0CAA2C,CAC3C,yCAA0C,CAC1C,yCACD,CAEA,oCAGC,yFAA0F,CAD1F,oJAED,CAEA,mFAEC,iBACD,CAEA,uCAIC,4CAA6C,CAC7C,iBAAkB,CAFlB,iDAAkD,CADlD,qDAAsD,CADtD,mDAAoD,CAKpD,YAAa,CACb,eAUD,CARC,6CACC,eACD,CAEA,6CAEC,6CAA8C,CAD9C,yCAED",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-insert-table-dropdown__grid {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-insert-table-dropdown-padding: 10px;
	--ck-insert-table-dropdown-box-height: 11px;
	--ck-insert-table-dropdown-box-width: 12px;
	--ck-insert-table-dropdown-box-margin: 1px;
}

.ck .ck-insert-table-dropdown__grid {
	/* The width of a container should match 10 items in a row so there will be a 10x10 grid. */
	width: calc(var(--ck-insert-table-dropdown-box-width) * 10 + var(--ck-insert-table-dropdown-box-margin) * 20 + var(--ck-insert-table-dropdown-padding) * 2);
	padding: var(--ck-insert-table-dropdown-padding) var(--ck-insert-table-dropdown-padding) 0;
}

.ck .ck-insert-table-dropdown__label,
.ck[dir=rtl] .ck-insert-table-dropdown__label {
	text-align: center;
}

.ck .ck-insert-table-dropdown-grid-box {
	min-width: var(--ck-insert-table-dropdown-box-width);
	min-height: var(--ck-insert-table-dropdown-box-height);
	margin: var(--ck-insert-table-dropdown-box-margin);
	border: 1px solid var(--ck-color-base-border);
	border-radius: 1px;
	outline: none;
	transition: none;

	&:focus {
		box-shadow: none;
	}

	&.ck-on {
		border-color: var(--ck-color-focus-border);
		background: var(--ck-color-focus-outer-shadow);
	}
}

`],sourceRoot:""}]);const C=_},6306:(k,b,g)=>{g.d(b,{Z:()=>C});var v=g(1799),A=g.n(v),x=g(2609),_=g.n(x)()(A());_.push([k.id,".ck-content .table{display:table;margin:.9em auto}.ck-content .table table{border:1px double #b3b3b3;border-collapse:collapse;border-spacing:0;height:100%;width:100%}.ck-content .table table td,.ck-content .table table th{border:1px solid #bfbfbf;min-width:2em;padding:.4em}.ck-content .table table th{background:rgba(0,0,0,.05);font-weight:700}.ck-content[dir=rtl] .table th{text-align:right}.ck-content[dir=ltr] .table th{text-align:left}.ck-editor__editable .ck-table-bogus-paragraph{display:inline-block;width:100%}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/table.css"],names:[],mappings:"AAKA,mBAKC,aAAc,CADd,gBAiCD,CA9BC,yBAYC,yBAAkC,CAVlC,wBAAyB,CACzB,gBAAiB,CAKjB,WAAY,CADZ,UAsBD,CAfC,wDAQC,wBAAiC,CANjC,aAAc,CACd,YAMD,CAEA,4BAEC,0BAA+B,CAD/B,eAED,CAMF,+BACC,gBACD,CAEA,+BACC,eACD,CAEA,+CAKC,oBAAqB,CAMrB,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content .table {
	/* Give the table widget some air and center it horizontally */
	/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
	margin: 0.9em auto;
	display: table;

	& table {
		/* The table cells should have slight borders */
		border-collapse: collapse;
		border-spacing: 0;

		/* Table width and height are set on the parent <figure>. Make sure the table inside stretches
		to the full dimensions of the container (https://github.com/ckeditor/ckeditor5/issues/6186). */
		width: 100%;
		height: 100%;

		/* The outer border of the table should be slightly darker than the inner lines.
		Also see https://github.com/ckeditor/ckeditor5-table/issues/50. */
		border: 1px double hsl(0, 0%, 70%);

		& td,
		& th {
			min-width: 2em;
			padding: .4em;

			/* The border is inherited from .ck-editor__nested-editable styles, so theoretically it's not necessary here.
			However, the border is a content style, so it should use .ck-content (so it works outside the editor).
			Hence, the duplication. See https://github.com/ckeditor/ckeditor5/issues/6314 */
			border: 1px solid hsl(0, 0%, 75%);
		}

		& th {
			font-weight: bold;
			background: hsla(0, 0%, 0%, 5%);
		}
	}
}

/* Text alignment of the table header should match the editor settings and override the native browser styling,
when content is available outside the editor. See https://github.com/ckeditor/ckeditor5/issues/6638 */
.ck-content[dir="rtl"] .table th {
	text-align: right;
}

.ck-content[dir="ltr"] .table th {
	text-align: left;
}

.ck-editor__editable .ck-table-bogus-paragraph {
	/*
	 * Use display:inline-block to force Chrome/Safari to limit text mutations to this element.
	 * See https://github.com/ckeditor/ckeditor5/issues/6062.
	 */
	display: inline-block;

	/*
	 * Inline HTML elements nested in the span should always be dimensioned in relation to the whole cell width.
	 * See https://github.com/ckeditor/ckeditor5/issues/9117.
	 */
	width: 100%;
}
`],sourceRoot:""}]);const C=_},2128:(k,b,g)=>{g.d(b,{Z:()=>C});var v=g(1799),A=g.n(v),x=g(2609),_=g.n(x)()(A());_.push([k.id,":root{--ck-color-selector-caption-background:#f7f7f7;--ck-color-selector-caption-text:#333;--ck-color-selector-caption-highlighted-background:#fd0}.ck-content .table>figcaption{background-color:var(--ck-color-selector-caption-background);caption-side:top;color:var(--ck-color-selector-caption-text);display:table-caption;font-size:.75em;outline-offset:-1px;padding:.6em;text-align:center;word-break:break-word}.ck.ck-editor__editable .table>figcaption.table__caption_highlighted{animation:ck-table-caption-highlight .6s ease-out}.ck.ck-editor__editable .table>figcaption.ck-placeholder:before{overflow:hidden;padding-left:inherit;padding-right:inherit;text-overflow:ellipsis;white-space:nowrap}@keyframes ck-table-caption-highlight{0%{background-color:var(--ck-color-selector-caption-highlighted-background)}to{background-color:var(--ck-color-selector-caption-background)}}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/tablecaption.css"],names:[],mappings:"AAKA,MACC,8CAAuD,CACvD,qCAAiD,CACjD,uDACD,CAGA,8BAMC,4DAA6D,CAJ7D,gBAAiB,CAGjB,2CAA4C,CAJ5C,qBAAsB,CAOtB,eAAgB,CAChB,mBAAoB,CAFpB,YAAa,CAHb,iBAAkB,CADlB,qBAOD,CAIC,qEACC,iDACD,CAEA,gEASC,eAAgB,CARhB,oBAAqB,CACrB,qBAAsB,CAQtB,sBAAuB,CAFvB,kBAGD,CAGD,sCACC,GACC,wEACD,CAEA,GACC,4DACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-selector-caption-background: hsl(0, 0%, 97%);
	--ck-color-selector-caption-text: hsl(0, 0%, 20%);
	--ck-color-selector-caption-highlighted-background: hsl(52deg 100% 50%);
}

/* Content styles */
.ck-content .table > figcaption {
	display: table-caption;
	caption-side: top;
	word-break: break-word;
	text-align: center;
	color: var(--ck-color-selector-caption-text);
	background-color: var(--ck-color-selector-caption-background);
	padding: .6em;
	font-size: .75em;
	outline-offset: -1px;
}

/* Editing styles */
.ck.ck-editor__editable .table > figcaption {
	&.table__caption_highlighted {
		animation: ck-table-caption-highlight .6s ease-out;
	}

	&.ck-placeholder::before {
		padding-left: inherit;
		padding-right: inherit;

		/*
		 * Make sure the table caption placeholder doesn't overflow the placeholder area.
		 * See https://github.com/ckeditor/ckeditor5/issues/9162.
		 */
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
}

@keyframes ck-table-caption-highlight {
	0% {
		background-color: var(--ck-color-selector-caption-highlighted-background);
	}

	100% {
		background-color: var(--ck-color-selector-caption-background);
	}
}
`],sourceRoot:""}]);const C=_},5087:(k,b,g)=>{g.d(b,{Z:()=>C});var v=g(1799),A=g.n(v),x=g(2609),_=g.n(x)()(A());_.push([k.id,".ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row{flex-wrap:wrap}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar:first-of-type{flex-grow:0.57}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar:last-of-type{flex-grow:0.43}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar .ck-button{flex-grow:1}.ck.ck-table-cell-properties-form{width:320px}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__padding-row{align-self:flex-end;padding:0;width:25%}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar{background:none;margin-top:var(--ck-spacing-standard)}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/tablecellproperties.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tablecellproperties.css"],names:[],mappings:"AAOE,6FACC,cAiBD,CAdE,0HAEC,cACD,CAEA,yHAEC,cACD,CAEA,uHACC,WACD,CClBJ,kCACC,WAkBD,CAfE,2FACC,mBAAoB,CACpB,SAAU,CACV,SACD,CAGC,4GACC,eAAgB,CAGhB,qCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-cell-properties-form {
	& .ck-form__row {
		&.ck-table-cell-properties-form__alignment-row {
			flex-wrap: wrap;

			& .ck.ck-toolbar {
				&:first-of-type {
					/* 4 buttons out of 7 (h-alignment + v-alignment) = 0.57 */
					flex-grow: 0.57;
				}

				&:last-of-type {
					/* 3 buttons out of 7 (h-alignment + v-alignment) = 0.43 */
					flex-grow: 0.43;
				}

				& .ck-button {
					flex-grow: 1;
				}
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-cell-properties-form {
	width: 320px;

	& .ck-form__row {
		&.ck-table-cell-properties-form__padding-row {
			align-self: flex-end;
			padding: 0;
			width: 25%;
		}

		&.ck-table-cell-properties-form__alignment-row {
			& .ck.ck-toolbar {
				background: none;

				/* Compensate for missing input label that would push the margin (toolbar has no inputs). */
				margin-top: var(--ck-spacing-standard);
			}
		}
	}
}
`],sourceRoot:""}]);const C=_},4101:(k,b,g)=>{g.d(b,{Z:()=>C});var v=g(1799),A=g.n(v),x=g(2609),_=g.n(x)()(A());_.push([k.id,":root{--ck-color-selector-column-resizer-hover:var(--ck-color-base-active);--ck-table-column-resizer-width:7px;--ck-table-column-resizer-position-offset:calc(var(--ck-table-column-resizer-width)*-0.5 - 0.5px)}.ck-content .table .ck-table-resized{table-layout:fixed}.ck-content .table table{overflow:hidden}.ck-content .table td,.ck-content .table th{overflow-wrap:break-word;position:relative}.ck.ck-editor__editable .table .ck-table-column-resizer{bottom:0;cursor:col-resize;position:absolute;right:var(--ck-table-column-resizer-position-offset);top:0;user-select:none;width:var(--ck-table-column-resizer-width);z-index:var(--ck-z-default)}.ck.ck-editor__editable .table[draggable] .ck-table-column-resizer,.ck.ck-editor__editable.ck-column-resize_disabled .table .ck-table-column-resizer{display:none}.ck.ck-editor__editable .table .ck-table-column-resizer:hover,.ck.ck-editor__editable .table .ck-table-column-resizer__active{background-color:var(--ck-color-selector-column-resizer-hover);bottom:-999999px;opacity:.25;top:-999999px}.ck.ck-editor__editable[dir=rtl] .table .ck-table-column-resizer{left:var(--ck-table-column-resizer-position-offset);right:unset}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/tablecolumnresize.css"],names:[],mappings:"AAKA,MACC,oEAAqE,CACrE,mCAAoC,CAIpC,iGACD,CAEA,qCACC,kBACD,CAEA,yBACC,eACD,CAEA,4CAIC,wBAAyB,CACzB,iBACD,CAEA,wDAGC,QAAS,CAGT,iBAAkB,CALlB,iBAAkB,CAGlB,oDAAqD,CAFrD,KAAM,CAKN,gBAAiB,CAFjB,0CAA2C,CAG3C,2BACD,CAQA,qJACC,YACD,CAEA,8HAEC,8DAA+D,CAO/D,gBAAiB,CANjB,WAAa,CAKb,aAED,CAEA,iEACC,mDAAoD,CACpD,WACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-selector-column-resizer-hover: var(--ck-color-base-active);
	--ck-table-column-resizer-width: 7px;

	/* The offset used for absolute positioning of the resizer element, so that it is placed exactly above the cell border.
	   The value is: minus half the width of the resizer decreased additionaly by the half the width of the border (0.5px). */
	--ck-table-column-resizer-position-offset: calc(var(--ck-table-column-resizer-width) * -0.5 - 0.5px);
}

.ck-content .table .ck-table-resized {
	table-layout: fixed;
}

.ck-content .table table {
	overflow: hidden;
}

.ck-content .table td,
.ck-content .table th {
	/* To prevent text overflowing beyond its cell when columns are resized by resize handler
	(https://github.com/ckeditor/ckeditor5/pull/14379#issuecomment-1589460978). */
	overflow-wrap: break-word;
	position: relative;
}

.ck.ck-editor__editable .table .ck-table-column-resizer {
	position: absolute;
	top: 0;
	bottom: 0;
	right: var(--ck-table-column-resizer-position-offset);
	width: var(--ck-table-column-resizer-width);
	cursor: col-resize;
	user-select: none;
	z-index: var(--ck-z-default);
}

.ck.ck-editor__editable.ck-column-resize_disabled .table .ck-table-column-resizer {
	display: none;
}

/* The resizer elements, which are extended to an extremely high height, break the drag & drop feature in Chrome. To make it work again,
   all resizers must be hidden while the table is dragged. */
.ck.ck-editor__editable .table[draggable] .ck-table-column-resizer {
	display: none;
}

.ck.ck-editor__editable .table .ck-table-column-resizer:hover,
.ck.ck-editor__editable .table .ck-table-column-resizer__active {
	background-color: var(--ck-color-selector-column-resizer-hover);
	opacity: 0.25;
	/* The resizer element resides in each cell so to occupy the entire height of the table, which is unknown from a CSS point of view,
	   it is extended to an extremely high height. Even for screens with a very high pixel density, the resizer will fulfill its role as
	   it should, i.e. for a screen of 476 ppi the total height of the resizer will take over 350 sheets of A4 format, which is totally
	   unrealistic height for a single table. */
	top: -999999px;
	bottom: -999999px;
}

.ck.ck-editor__editable[dir=rtl] .table .ck-table-column-resizer {
	left: var(--ck-table-column-resizer-position-offset);
	right: unset;
}
`],sourceRoot:""}]);const C=_},3881:(k,b,g)=>{g.d(b,{Z:()=>C});var v=g(1799),A=g.n(v),x=g(2609),_=g.n(x)()(A());_.push([k.id,":root{--ck-color-selector-focused-cell-background:rgba(158,201,250,.3)}.ck-widget.table td.ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck-widget.table td.ck-editor__nested-editable:focus,.ck-widget.table th.ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck-widget.table th.ck-editor__nested-editable:focus{background:var(--ck-color-selector-focused-cell-background);border-style:none;outline:1px solid var(--ck-color-focus-border);outline-offset:-1px}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableediting.css"],names:[],mappings:"AAKA,MACC,gEACD,CAKE,8QAGC,2DAA4D,CAK5D,iBAAkB,CAClB,8CAA+C,CAC/C,mBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-selector-focused-cell-background: hsla(212, 90%, 80%, .3);
}

.ck-widget.table {
	& td,
	& th {
		&.ck-editor__nested-editable.ck-editor__nested-editable_focused,
		&.ck-editor__nested-editable:focus {
			/* A very slight background to highlight the focused cell */
			background: var(--ck-color-selector-focused-cell-background);

			/* Fixes the problem where surrounding cells cover the focused cell's border.
			It does not fix the problem in all places but the UX is improved.
			See https://github.com/ckeditor/ckeditor5-table/issues/29. */
			border-style: none;
			outline: 1px solid var(--ck-color-focus-border);
			outline-offset: -1px; /* progressive enhancement - no IE support */
		}
	}
}
`],sourceRoot:""}]);const C=_},6237:(k,b,g)=>{g.d(b,{Z:()=>C});var v=g(1799),A=g.n(v),x=g(2609),_=g.n(x)()(A());_.push([k.id,'.ck.ck-table-form .ck-form__row.ck-table-form__background-row,.ck.ck-table-form .ck-form__row.ck-table-form__border-row{flex-wrap:wrap}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row{align-items:center;flex-wrap:wrap}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-labeled-field-view{align-items:center;display:flex;flex-direction:column-reverse}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-labeled-field-view .ck.ck-dropdown,.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimension-operator{flex-grow:0}.ck.ck-table-form .ck.ck-labeled-field-view{position:relative}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{bottom:calc(var(--ck-table-properties-error-arrow-size)*-1);left:50%;position:absolute;transform:translate(-50%,100%);z-index:1}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status:after{content:"";left:50%;position:absolute;top:calc(var(--ck-table-properties-error-arrow-size)*-1);transform:translateX(-50%)}:root{--ck-table-properties-error-arrow-size:6px;--ck-table-properties-min-error-width:150px}.ck.ck-table-form .ck-form__row.ck-table-form__border-row .ck-labeled-field-view>.ck-label{font-size:var(--ck-font-size-tiny);text-align:center}.ck.ck-table-form .ck-form__row.ck-table-form__border-row .ck-table-form__border-style,.ck.ck-table-form .ck-form__row.ck-table-form__border-row .ck-table-form__border-width{max-width:80px;min-width:80px;width:80px}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row{padding:0}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimensions-row__height,.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimensions-row__width{margin:0}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimension-operator{align-self:flex-end;display:inline-block;height:var(--ck-ui-component-min-height);line-height:var(--ck-ui-component-min-height);margin:0 var(--ck-spacing-small)}.ck.ck-table-form .ck.ck-labeled-field-view{padding-top:var(--ck-spacing-standard)}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{border-radius:0}.ck-rounded-corners .ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status,.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{background:var(--ck-color-base-error);color:var(--ck-color-base-background);min-width:var(--ck-table-properties-min-error-width);padding:var(--ck-spacing-small) var(--ck-spacing-medium);text-align:center}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status:after{border-color:transparent transparent var(--ck-color-base-error) transparent;border-style:solid;border-width:0 var(--ck-table-properties-error-arrow-size) var(--ck-table-properties-error-arrow-size) var(--ck-table-properties-error-arrow-size)}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{animation:ck-table-form-labeled-view-status-appear .15s ease both}.ck.ck-table-form .ck.ck-labeled-field-view .ck-input.ck-error:not(:focus)+.ck.ck-labeled-field-view__status{display:none}@keyframes ck-table-form-labeled-view-status-appear{0%{opacity:0}to{opacity:1}}',"",{version:3,sources:["webpack://./../ckeditor5-table/theme/tableform.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableform.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAWE,wHACC,cACD,CAEA,8DAEC,kBAAmB,CADnB,cAgBD,CAbC,qFAGC,kBAAmB,CAFnB,YAAa,CACb,6BAMD,CAEA,sMACC,WACD,CAIF,4CAEC,iBAoBD,CAlBC,8EAGC,2DAAgE,CADhE,QAAS,CADT,iBAAkB,CAGlB,8BAA+B,CAG/B,SAUD,CAPC,oFACC,UAAW,CAGX,QAAS,CAFT,iBAAkB,CAClB,wDAA6D,CAE7D,0BACD,CChDH,MACC,0CAA2C,CAC3C,2CACD,CAMI,2FACC,kCAAmC,CACnC,iBACD,CAGD,8KAIC,cAAe,CADf,cAAe,CADf,UAGD,CAGD,8DACC,SAcD,CAZC,yMAEC,QACD,CAEA,iGACC,mBAAoB,CACpB,oBAAqB,CACrB,wCAAyC,CACzC,6CAA8C,CAC9C,gCACD,CAIF,4CACC,sCAyBD,CAvBC,8ECxCD,eDyDC,CAjBA,mMCpCA,qCDqDA,CAjBA,8EAGC,qCAAsC,CACtC,qCAAsC,CAEtC,oDAAqD,CADrD,wDAAyD,CAEzD,iBAUD,CAPC,oFACC,2EAA4E,CAE5E,kBAAmB,CADnB,kJAED,CAdD,8EAgBC,iEACD,CAGA,6GACC,YACD,CAIF,oDACC,GACC,SACD,CAEA,GACC,SACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-form {
	& .ck-form__row {
		&.ck-table-form__border-row {
			flex-wrap: wrap;
		}

		&.ck-table-form__background-row {
			flex-wrap: wrap;
		}

		&.ck-table-form__dimensions-row {
			flex-wrap: wrap;
			align-items: center;

			& .ck-labeled-field-view {
				display: flex;
				flex-direction: column-reverse;
				align-items: center;

				& .ck.ck-dropdown {
					flex-grow: 0;
				}
			}

			& .ck-table-form__dimension-operator {
				flex-grow: 0;
			}
		}
	}

	& .ck.ck-labeled-field-view {
		/* Allow absolute positioning of the status (error) balloons. */
		position: relative;

		& .ck.ck-labeled-field-view__status {
			position: absolute;
			left: 50%;
			bottom: calc( -1 * var(--ck-table-properties-error-arrow-size) );
			transform: translate(-50%,100%);

			/* Make sure the balloon status stays on top of other form elements. */
			z-index: 1;

			/* The arrow pointing towards the field. */
			&::after {
				content: "";
				position: absolute;
				top: calc( -1 * var(--ck-table-properties-error-arrow-size) );
				left: 50%;
				transform: translateX( -50% );
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../mixins/_rounded.css";

:root {
	--ck-table-properties-error-arrow-size: 6px;
	--ck-table-properties-min-error-width: 150px;
}

.ck.ck-table-form {
	& .ck-form__row {
		&.ck-table-form__border-row {
			& .ck-labeled-field-view {
				& > .ck-label {
					font-size: var(--ck-font-size-tiny);
					text-align: center;
				}
			}

			& .ck-table-form__border-style,
			& .ck-table-form__border-width {
				width: 80px;
				min-width: 80px;
				max-width: 80px;
			}
		}

		&.ck-table-form__dimensions-row {
			padding: 0;

			& .ck-table-form__dimensions-row__width,
			& .ck-table-form__dimensions-row__height {
				margin: 0
			}

			& .ck-table-form__dimension-operator {
				align-self: flex-end;
				display: inline-block;
				height: var(--ck-ui-component-min-height);
				line-height: var(--ck-ui-component-min-height);
				margin: 0 var(--ck-spacing-small);
			}
		}
	}

	& .ck.ck-labeled-field-view {
		padding-top: var(--ck-spacing-standard);

		& .ck.ck-labeled-field-view__status {
			@mixin ck-rounded-corners;

			background: var(--ck-color-base-error);
			color: var(--ck-color-base-background);
			padding: var(--ck-spacing-small) var(--ck-spacing-medium);
			min-width: var(--ck-table-properties-min-error-width);
			text-align: center;

			/* The arrow pointing towards the field. */
			&::after {
				border-color: transparent transparent var(--ck-color-base-error) transparent;
				border-width: 0 var(--ck-table-properties-error-arrow-size) var(--ck-table-properties-error-arrow-size) var(--ck-table-properties-error-arrow-size);
				border-style: solid;
			}

			animation: ck-table-form-labeled-view-status-appear .15s ease both;
		}

		/* Hide the error balloon when the field is blurred. Makes the experience much more clear. */
		& .ck-input.ck-error:not(:focus) + .ck.ck-labeled-field-view__status {
			display: none;
		}
	}
}

@keyframes ck-table-form-labeled-view-status-appear {
	0% {
		opacity: 0;
	}

	100% {
		opacity: 1;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const C=_},7341:(k,b,g)=>{g.d(b,{Z:()=>C});var v=g(1799),A=g.n(v),x=g(2609),_=g.n(x)()(A());_.push([k.id,".ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row{align-content:baseline;flex-basis:0;flex-wrap:wrap}.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row .ck.ck-toolbar .ck-toolbar__items{flex-wrap:nowrap}.ck.ck-table-properties-form{width:320px}.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row{align-self:flex-end;padding:0}.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row .ck.ck-toolbar{background:none;margin-top:var(--ck-spacing-standard)}.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row .ck.ck-toolbar .ck-toolbar__items>*{width:40px}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/tableproperties.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableproperties.css"],names:[],mappings:"AAOE,mFAGC,sBAAuB,CADvB,YAAa,CADb,cAOD,CAHC,qHACC,gBACD,CCTH,6BACC,WAmBD,CAhBE,mFACC,mBAAoB,CACpB,SAYD,CAVC,kGACC,eAAgB,CAGhB,qCAKD,CAHC,uHACC,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-properties-form {
	& .ck-form__row {
		&.ck-table-properties-form__alignment-row {
			flex-wrap: wrap;
			flex-basis: 0;
			align-content: baseline;

			& .ck.ck-toolbar .ck-toolbar__items {
				flex-wrap: nowrap;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-properties-form {
	width: 320px;

	& .ck-form__row {
		&.ck-table-properties-form__alignment-row {
			align-self: flex-end;
			padding: 0;

			& .ck.ck-toolbar {
				background: none;

				/* Compensate for missing input label that would push the margin (toolbar has no inputs). */
				margin-top: var(--ck-spacing-standard);

				& .ck-toolbar__items > * {
					width: 40px;
				}
			}
		}
	}
}
`],sourceRoot:""}]);const C=_},6945:(k,b,g)=>{g.d(b,{Z:()=>C});var v=g(1799),A=g.n(v),x=g(2609),_=g.n(x)()(A());_.push([k.id,':root{--ck-table-selected-cell-background:rgba(158,207,250,.3)}.ck.ck-editor__editable .table table td.ck-editor__editable_selected,.ck.ck-editor__editable .table table th.ck-editor__editable_selected{box-shadow:unset;caret-color:transparent;outline:unset;position:relative}.ck.ck-editor__editable .table table td.ck-editor__editable_selected:after,.ck.ck-editor__editable .table table th.ck-editor__editable_selected:after{background-color:var(--ck-table-selected-cell-background);bottom:0;content:"";left:0;pointer-events:none;position:absolute;right:0;top:0}.ck.ck-editor__editable .table table td.ck-editor__editable_selected ::selection,.ck.ck-editor__editable .table table td.ck-editor__editable_selected:focus,.ck.ck-editor__editable .table table th.ck-editor__editable_selected ::selection,.ck.ck-editor__editable .table table th.ck-editor__editable_selected:focus{background-color:transparent}.ck.ck-editor__editable .table table td.ck-editor__editable_selected .ck-widget,.ck.ck-editor__editable .table table th.ck-editor__editable_selected .ck-widget{outline:unset}.ck.ck-editor__editable .table table td.ck-editor__editable_selected .ck-widget>.ck-widget__selection-handle,.ck.ck-editor__editable .table table th.ck-editor__editable_selected .ck-widget>.ck-widget__selection-handle{display:none}',"",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableselection.css"],names:[],mappings:"AAKA,MACC,wDACD,CAGC,0IAKC,gBAAiB,CAFjB,uBAAwB,CACxB,aAAc,CAFd,iBAiCD,CA3BC,sJAGC,yDAA0D,CAK1D,QAAS,CAPT,UAAW,CAKX,MAAO,CAJP,mBAAoB,CAEpB,iBAAkB,CAGlB,OAAQ,CAFR,KAID,CAEA,wTAEC,4BACD,CAMA,gKACC,aAKD,CAHC,0NACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-table-selected-cell-background: hsla(208, 90%, 80%, .3);
}

.ck.ck-editor__editable .table table {
	& td.ck-editor__editable_selected,
	& th.ck-editor__editable_selected {
		position: relative;
		caret-color: transparent;
		outline: unset;
		box-shadow: unset;

		/* https://github.com/ckeditor/ckeditor5/issues/6446 */
		&:after {
			content: '';
			pointer-events: none;
			background-color: var(--ck-table-selected-cell-background);
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
		}

		& ::selection,
		&:focus {
			background-color: transparent;
		}

		/*
		 * To reduce the amount of noise, all widgets in the table selection have no outline and no selection handle.
		 * See https://github.com/ckeditor/ckeditor5/issues/9491.
		 */
		& .ck-widget {
			outline: unset;

			& > .ck-widget__selection-handle {
				display: none;
			}
		}
	}
}
`],sourceRoot:""}]);const C=_},4906:(k,b,g)=>{g.d(b,{Z:()=>C});var v=g(1799),A=g.n(v),x=g(2609),_=g.n(x)()(A());_.push([k.id,".ck.ck-button,a.ck.ck-button{align-items:center;display:inline-flex;justify-content:left;position:relative;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-button .ck-button__label,a.ck.ck-button .ck-button__label{display:none}.ck.ck-button.ck-button_with-text .ck-button__label,a.ck.ck-button.ck-button_with-text .ck-button__label{display:inline-block}.ck.ck-button:not(.ck-button_with-text),a.ck.ck-button:not(.ck-button_with-text){justify-content:center}.ck.ck-button,a.ck.ck-button{background:var(--ck-color-button-default-background)}.ck.ck-button:not(.ck-disabled):hover,a.ck.ck-button:not(.ck-disabled):hover{background:var(--ck-color-button-default-hover-background)}.ck.ck-button:not(.ck-disabled):active,a.ck.ck-button:not(.ck-disabled):active{background:var(--ck-color-button-default-active-background)}.ck.ck-button.ck-disabled,a.ck.ck-button.ck-disabled{background:var(--ck-color-button-default-disabled-background)}.ck.ck-button,a.ck.ck-button{border-radius:0}.ck-rounded-corners .ck.ck-button,.ck-rounded-corners a.ck.ck-button,.ck.ck-button.ck-rounded-corners,a.ck.ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-button,a.ck.ck-button{-webkit-appearance:none;border:1px solid transparent;cursor:default;font-size:inherit;line-height:1;min-height:var(--ck-ui-component-min-height);min-width:var(--ck-ui-component-min-height);padding:var(--ck-spacing-tiny);text-align:center;transition:box-shadow .2s ease-in-out,border .2s ease-in-out;vertical-align:middle;white-space:nowrap}.ck.ck-button:active,.ck.ck-button:focus,a.ck.ck-button:active,a.ck.ck-button:focus{border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;outline:none}.ck.ck-button .ck-button__icon use,.ck.ck-button .ck-button__icon use *,a.ck.ck-button .ck-button__icon use,a.ck.ck-button .ck-button__icon use *{color:inherit}.ck.ck-button .ck-button__label,a.ck.ck-button .ck-button__label{color:inherit;cursor:inherit;font-size:inherit;font-weight:inherit;vertical-align:middle}[dir=ltr] .ck.ck-button .ck-button__label,[dir=ltr] a.ck.ck-button .ck-button__label{text-align:left}[dir=rtl] .ck.ck-button .ck-button__label,[dir=rtl] a.ck.ck-button .ck-button__label{text-align:right}.ck.ck-button .ck-button__keystroke,a.ck.ck-button .ck-button__keystroke{color:inherit}[dir=ltr] .ck.ck-button .ck-button__keystroke,[dir=ltr] a.ck.ck-button .ck-button__keystroke{margin-left:var(--ck-spacing-large)}[dir=rtl] .ck.ck-button .ck-button__keystroke,[dir=rtl] a.ck.ck-button .ck-button__keystroke{margin-right:var(--ck-spacing-large)}.ck.ck-button .ck-button__keystroke,a.ck.ck-button .ck-button__keystroke{font-weight:700;opacity:.7}.ck.ck-button.ck-disabled:active,.ck.ck-button.ck-disabled:focus,a.ck.ck-button.ck-disabled:active,a.ck.ck-button.ck-disabled:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),0 0}.ck.ck-button.ck-disabled .ck-button__icon,.ck.ck-button.ck-disabled .ck-button__label,a.ck.ck-button.ck-disabled .ck-button__icon,a.ck.ck-button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-disabled .ck-button__keystroke,a.ck.ck-button.ck-disabled .ck-button__keystroke{opacity:.3}.ck.ck-button.ck-button_with-text,a.ck.ck-button.ck-button_with-text{padding:var(--ck-spacing-tiny) var(--ck-spacing-standard)}[dir=ltr] .ck.ck-button.ck-button_with-text .ck-button__icon,[dir=ltr] a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-left:calc(var(--ck-spacing-small)*-1);margin-right:var(--ck-spacing-small)}[dir=rtl] .ck.ck-button.ck-button_with-text .ck-button__icon,[dir=rtl] a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-left:var(--ck-spacing-small);margin-right:calc(var(--ck-spacing-small)*-1)}.ck.ck-button.ck-button_with-keystroke .ck-button__label,a.ck.ck-button.ck-button_with-keystroke .ck-button__label{flex-grow:1}.ck.ck-button.ck-on,a.ck.ck-button.ck-on{background:var(--ck-color-button-on-background)}.ck.ck-button.ck-on:not(.ck-disabled):hover,a.ck.ck-button.ck-on:not(.ck-disabled):hover{background:var(--ck-color-button-on-hover-background)}.ck.ck-button.ck-on:not(.ck-disabled):active,a.ck.ck-button.ck-on:not(.ck-disabled):active{background:var(--ck-color-button-on-active-background)}.ck.ck-button.ck-on.ck-disabled,a.ck.ck-button.ck-on.ck-disabled{background:var(--ck-color-button-on-disabled-background)}.ck.ck-button.ck-on,a.ck.ck-button.ck-on{color:var(--ck-color-button-on-color)}.ck.ck-button.ck-button-save,a.ck.ck-button.ck-button-save{color:var(--ck-color-button-save)}.ck.ck-button.ck-button-cancel,a.ck.ck-button.ck-button-cancel{color:var(--ck-color-button-cancel)}.ck.ck-button-action,a.ck.ck-button-action{background:var(--ck-color-button-action-background)}.ck.ck-button-action:not(.ck-disabled):hover,a.ck.ck-button-action:not(.ck-disabled):hover{background:var(--ck-color-button-action-hover-background)}.ck.ck-button-action:not(.ck-disabled):active,a.ck.ck-button-action:not(.ck-disabled):active{background:var(--ck-color-button-action-active-background)}.ck.ck-button-action.ck-disabled,a.ck.ck-button-action.ck-disabled{background:var(--ck-color-button-action-disabled-background)}.ck.ck-button-action,a.ck.ck-button-action{color:var(--ck-color-button-action-text)}.ck.ck-button-bold,a.ck.ck-button-bold{font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/button/button.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/button/button.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/mixins/_button.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css"],names:[],mappings:"AAOA,6BAMC,kBAAmB,CADnB,mBAAoB,CAEpB,oBAAqB,CAHrB,iBAAkB,CCFlB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBDkBD,CAdC,iEACC,YACD,CAGC,yGACC,oBACD,CAID,iFACC,sBACD,CEjBD,6BCAC,oDD4ID,CCzIE,6EACC,0DACD,CAEA,+EACC,2DACD,CAID,qDACC,6DACD,CDfD,6BEDC,eF6ID,CA5IA,wIEGE,qCFyIF,CA5IA,6BA6BC,uBAAwB,CANxB,4BAA6B,CAjB7B,cAAe,CAcf,iBAAkB,CAHlB,aAAc,CAJd,4CAA6C,CAD7C,2CAA4C,CAJ5C,8BAA+B,CAC/B,iBAAkB,CAiBlB,4DAA8D,CAnB9D,qBAAsB,CAFtB,kBAuID,CA7GC,oFGhCA,2BAA2B,CCF3B,2CAA8B,CDC9B,YHqCA,CAIC,kJAEC,aACD,CAGD,iEAIC,aAAc,CACd,cAAe,CAHf,iBAAkB,CAClB,mBAAoB,CAMpB,qBASD,CAlBA,qFAYE,eAMF,CAlBA,qFAgBE,gBAEF,CAEA,yEACC,aAYD,CAbA,6FAIE,mCASF,CAbA,6FAQE,oCAKF,CAbA,yEAWC,eAAiB,CACjB,UACD,CAIC,oIIrFD,oDJyFC,CAOA,gLKhGD,kCLkGC,CAEA,iGACC,UACD,CAGD,qEACC,yDAcD,CAXC,2HAEE,4CAA+C,CAC/C,oCAOF,CAVA,2HAQE,mCAAoC,CADpC,6CAGF,CAKA,mHACC,WACD,CAID,yCC/HA,+CDmIA,CChIC,yFACC,qDACD,CAEA,2FACC,sDACD,CAID,iEACC,wDACD,CDgHA,yCAGC,qCACD,CAEA,2DACC,iCACD,CAEA,+DACC,mCACD,CAID,2CC/IC,mDDoJD,CCjJE,2FACC,yDACD,CAEA,6FACC,0DACD,CAID,mEACC,4DACD,CDgID,2CAIC,wCACD,CAEA,uCAEC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";

.ck.ck-button,
a.ck.ck-button {
	@mixin ck-unselectable;

	position: relative;
	display: inline-flex;
	align-items: center;
	justify-content: left;

	& .ck-button__label {
		display: none;
	}

	&.ck-button_with-text {
		& .ck-button__label {
			display: inline-block;
		}
	}

	/* Center the icon horizontally in a button without text. */
	&:not(.ck-button_with-text)  {
		justify-content: center;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_focus.css";
@import "../../../mixins/_shadow.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_rounded.css";
@import "../../mixins/_button.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-button,
a.ck.ck-button {
	@mixin ck-button-colors --ck-color-button-default;
	@mixin ck-rounded-corners;

	white-space: nowrap;
	cursor: default;
	vertical-align: middle;
	padding: var(--ck-spacing-tiny);
	text-align: center;

	/* A very important piece of styling. Go to variable declaration to learn more. */
	min-width: var(--ck-ui-component-min-height);
	min-height: var(--ck-ui-component-min-height);

	/* Normalize the height of the line. Removing this will break consistent height
	among text and text-less buttons (with icons). */
	line-height: 1;

	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	/* Avoid flickering when the foucs border shows up. */
	border: 1px solid transparent;

	/* Apply some smooth transition to the box-shadow and border. */
	transition: box-shadow .2s ease-in-out, border .2s ease-in-out;

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/189 */
	-webkit-appearance: none;

	&:active,
	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-focus-outer-shadow);
	}

	/* Allow icon coloring using the text "color" property. */
	& .ck-button__icon {
		& use,
		& use * {
			color: inherit;
		}
	}

	& .ck-button__label {
		/* Enable font size inheritance, which allows fluid UI scaling. */
		font-size: inherit;
		font-weight: inherit;
		color: inherit;
		cursor: inherit;

		/* Must be consistent with .ck-icon's vertical align. Otherwise, buttons with and
		without labels (but with icons) have different sizes in Chrome */
		vertical-align: middle;

		@mixin ck-dir ltr {
			text-align: left;
		}

		@mixin ck-dir rtl {
			text-align: right;
		}
	}

	& .ck-button__keystroke {
		color: inherit;

		@mixin ck-dir ltr {
			margin-left: var(--ck-spacing-large);
		}

		@mixin ck-dir rtl {
			margin-right: var(--ck-spacing-large);
		}

		font-weight: bold;
		opacity: .7;
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/70 */
	&.ck-disabled {
		&:active,
		&:focus {
			/* The disabled button should have a slightly less visible shadow when focused. */
			@mixin ck-box-shadow var(--ck-focus-disabled-outer-shadow);
		}

		& .ck-button__icon {
			@mixin ck-disabled;
		}

		/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/98 */
		& .ck-button__label {
			@mixin ck-disabled;
		}

		& .ck-button__keystroke {
			opacity: .3;
		}
	}

	&.ck-button_with-text {
		padding: var(--ck-spacing-tiny) var(--ck-spacing-standard);

		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-button__icon {
			@mixin ck-dir ltr {
				margin-left: calc(-1 * var(--ck-spacing-small));
				margin-right: var(--ck-spacing-small);
			}

			@mixin ck-dir rtl {
				margin-right: calc(-1 * var(--ck-spacing-small));
				margin-left: var(--ck-spacing-small);
			}
		}
	}

	&.ck-button_with-keystroke {
		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-button__label {
			flex-grow: 1;
		}
	}

	/* A style of the button which is currently on, e.g. its feature is active. */
	&.ck-on {
		@mixin ck-button-colors --ck-color-button-on;

		color: var(--ck-color-button-on-color);
	}

	&.ck-button-save {
		color: var(--ck-color-button-save);
	}

	&.ck-button-cancel {
		color: var(--ck-color-button-cancel);
	}
}

/* A style of the button which handles the primary action. */
.ck.ck-button-action,
a.ck.ck-button-action {
	@mixin ck-button-colors --ck-color-button-action;

	color: var(--ck-color-button-action-text);
}

.ck.ck-button-bold,
a.ck.ck-button-bold {
	font-weight: bold;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements a button of given background color.
 *
 * @param {String} $background - Background color of the button.
 * @param {String} $border - Border color of the button.
 */
@define-mixin ck-button-colors $prefix {
	background: var($(prefix)-background);

	&:not(.ck-disabled) {
		&:hover {
			background: var($(prefix)-hover-background);
		}

		&:active {
			background: var($(prefix)-active-background);
		}
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/98 */
	&.ck-disabled {
		background: var($(prefix)-disabled-background);
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`],sourceRoot:""}]);const C=_},5332:(k,b,g)=>{g.d(b,{Z:()=>C});var v=g(1799),A=g.n(v),x=g(2609),_=g.n(x)()(A());_.push([k.id,".ck.ck-button.ck-switchbutton .ck-button__toggle,.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{display:block}:root{--ck-switch-button-toggle-width:2.6153846154em;--ck-switch-button-toggle-inner-size:calc(1.07692em + 1px);--ck-switch-button-translation:calc(var(--ck-switch-button-toggle-width) - var(--ck-switch-button-toggle-inner-size) - 2px);--ck-switch-button-inner-hover-shadow:0 0 0 5px var(--ck-color-switch-button-inner-shadow)}.ck.ck-button.ck-switchbutton,.ck.ck-button.ck-switchbutton.ck-on:active,.ck.ck-button.ck-switchbutton.ck-on:focus,.ck.ck-button.ck-switchbutton.ck-on:hover,.ck.ck-button.ck-switchbutton:active,.ck.ck-button.ck-switchbutton:focus,.ck.ck-button.ck-switchbutton:hover{background:transparent;color:inherit}[dir=ltr] .ck.ck-button.ck-switchbutton .ck-button__label{margin-right:calc(var(--ck-spacing-large)*2)}[dir=rtl] .ck.ck-button.ck-switchbutton .ck-button__label{margin-left:calc(var(--ck-spacing-large)*2)}.ck.ck-button.ck-switchbutton .ck-button__toggle{border-radius:0}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle,.ck.ck-button.ck-switchbutton .ck-button__toggle.ck-rounded-corners{border-radius:var(--ck-border-radius)}[dir=ltr] .ck.ck-button.ck-switchbutton .ck-button__toggle{margin-left:auto}[dir=rtl] .ck.ck-button.ck-switchbutton .ck-button__toggle{margin-right:auto}.ck.ck-button.ck-switchbutton .ck-button__toggle{background:var(--ck-color-switch-button-off-background);border:1px solid transparent;transition:background .4s ease,box-shadow .2s ease-in-out,outline .2s ease-in-out;width:var(--ck-switch-button-toggle-width)}.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{border-radius:0}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner,.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner.ck-rounded-corners{border-radius:var(--ck-border-radius);border-radius:calc(var(--ck-border-radius)*.5)}.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{background:var(--ck-color-switch-button-inner-background);height:var(--ck-switch-button-toggle-inner-size);transition:all .3s ease;width:var(--ck-switch-button-toggle-inner-size)}.ck.ck-button.ck-switchbutton .ck-button__toggle:hover{background:var(--ck-color-switch-button-off-hover-background)}.ck.ck-button.ck-switchbutton .ck-button__toggle:hover .ck-button__toggle__inner{box-shadow:var(--ck-switch-button-inner-hover-shadow)}.ck.ck-button.ck-switchbutton.ck-disabled .ck-button__toggle{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-switchbutton:focus{border-color:transparent;box-shadow:none;outline:none}.ck.ck-button.ck-switchbutton:focus .ck-button__toggle{box-shadow:0 0 0 1px var(--ck-color-base-background),0 0 0 5px var(--ck-color-focus-outer-shadow);outline:var(--ck-focus-ring);outline-offset:1px}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle{background:var(--ck-color-switch-button-on-background)}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle:hover{background:var(--ck-color-switch-button-on-hover-background)}[dir=ltr] .ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle .ck-button__toggle__inner{transform:translateX(var( --ck-switch-button-translation ))}[dir=rtl] .ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle .ck-button__toggle__inner{transform:translateX(calc(var( --ck-switch-button-translation )*-1))}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/button/switchbutton.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/button/switchbutton.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css"],names:[],mappings:"AASE,4HACC,aACD,CCCF,MAEC,8CAA+C,CAE/C,0DAAgE,CAChE,2HAIC,CACD,0FACD,CAOC,0QAEC,sBAAuB,CADvB,aAED,CAEA,0DAGE,4CAOF,CAVA,0DAQE,2CAEF,CAEA,iDCpCA,eD4EA,CAxCA,yIChCC,qCDwED,CAxCA,2DAKE,gBAmCF,CAxCA,2DAUE,iBA8BF,CAxCA,iDAkBC,uDAAwD,CAFxD,4BAA6B,CAD7B,iFAAsF,CAEtF,0CAuBD,CApBC,2ECxDD,eDmEC,CAXA,6LCpDA,qCAAsC,CDsDpC,8CASF,CAXA,2EAOC,yDAA0D,CAD1D,gDAAiD,CAIjD,uBAA0B,CAL1B,+CAMD,CAEA,uDACC,6DAKD,CAHC,iFACC,qDACD,CAIF,6DEhFA,kCFkFA,CAGA,oCACC,wBAAyB,CAEzB,eAAgB,CADhB,YAQD,CALC,uDACC,iGAAmG,CAEnG,4BAA6B,CAD7B,kBAED,CAKA,uDACC,sDAkBD,CAhBC,6DACC,4DACD,CAEA,2FAKE,2DAMF,CAXA,2FASE,oEAEF",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-button.ck-switchbutton {
	& .ck-button__toggle {
		display: block;

		& .ck-button__toggle__inner {
			display: block;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

/* Note: To avoid rendering issues (aliasing) but to preserve the responsive nature
of the component, floating–point numbers have been used which, for the default font size
(see: --ck-font-size-base), will generate simple integers. */
:root {
	/* 34px at 13px font-size */
	--ck-switch-button-toggle-width: 2.6153846154em;
	/* 14px at 13px font-size */
	--ck-switch-button-toggle-inner-size: calc(1.0769230769em + 1px);
	--ck-switch-button-translation: calc(
		var(--ck-switch-button-toggle-width) -
		var(--ck-switch-button-toggle-inner-size) -
		2px /* Border */
	);
	--ck-switch-button-inner-hover-shadow: 0 0 0 5px var(--ck-color-switch-button-inner-shadow);
}

.ck.ck-button.ck-switchbutton {
	/* Unlike a regular button, the switch button text color and background should never change.
	 * Changing toggle switch (background, outline) is enough to carry the information about the
	 * state of the entire component (https://github.com/ckeditor/ckeditor5/issues/12519)
	 */
	&, &:hover, &:focus, &:active, &.ck-on:hover, &.ck-on:focus, &.ck-on:active {
		color: inherit;
		background: transparent;
	}

	& .ck-button__label {
		@mixin ck-dir ltr {
			/* Separate the label from the switch */
			margin-right: calc(2 * var(--ck-spacing-large));
		}

		@mixin ck-dir rtl {
			/* Separate the label from the switch */
			margin-left: calc(2 * var(--ck-spacing-large));
		}
	}

	& .ck-button__toggle {
		@mixin ck-rounded-corners;

		@mixin ck-dir ltr {
			/* Make sure the toggle is always to the right as far as possible. */
			margin-left: auto;
		}

		@mixin ck-dir rtl {
			/* Make sure the toggle is always to the left as far as possible. */
			margin-right: auto;
		}

		/* Apply some smooth transition to the box-shadow and border. */
		/* Gently animate the background color of the toggle switch */
		transition: background 400ms ease, box-shadow .2s ease-in-out, outline .2s ease-in-out;
		border: 1px solid transparent;
		width: var(--ck-switch-button-toggle-width);
		background: var(--ck-color-switch-button-off-background);

		& .ck-button__toggle__inner {
			@mixin ck-rounded-corners {
				border-radius: calc(.5 * var(--ck-border-radius));
			}

			width: var(--ck-switch-button-toggle-inner-size);
			height: var(--ck-switch-button-toggle-inner-size);
			background: var(--ck-color-switch-button-inner-background);

			/* Gently animate the inner part of the toggle switch */
			transition: all 300ms ease;
		}

		&:hover {
			background: var(--ck-color-switch-button-off-hover-background);

			& .ck-button__toggle__inner {
				box-shadow: var(--ck-switch-button-inner-hover-shadow);
			}
		}
	}

	&.ck-disabled .ck-button__toggle {
		@mixin ck-disabled;
	}

	/* Overriding default .ck-button:focus styles + an outline around the toogle */
	&:focus {
		border-color: transparent;
		outline: none;
		box-shadow: none;

		& .ck-button__toggle {
			box-shadow: 0 0 0 1px var(--ck-color-base-background), 0 0 0 5px var(--ck-color-focus-outer-shadow);
			outline-offset: 1px;
			outline: var(--ck-focus-ring);
		}
	}

	/* stylelint-disable-next-line no-descending-specificity */
	&.ck-on {
		& .ck-button__toggle {
			background: var(--ck-color-switch-button-on-background);

			&:hover {
				background: var(--ck-color-switch-button-on-hover-background);
			}

			& .ck-button__toggle__inner {
				/*
				* Move the toggle switch to the right. It will be animated.
				*/
				@mixin ck-dir ltr {
					transform: translateX( var( --ck-switch-button-translation ) );
				}

				@mixin ck-dir rtl {
					transform: translateX( calc( -1 * var( --ck-switch-button-translation ) ) );
				}
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`],sourceRoot:""}]);const C=_},6781:(k,b,g)=>{g.d(b,{Z:()=>C});var v=g(1799),A=g.n(v),x=g(2609),_=g.n(x)()(A());_.push([k.id,".ck.ck-color-grid{display:grid}:root{--ck-color-grid-tile-size:24px;--ck-color-color-grid-check-icon:#166fd4}.ck.ck-color-grid{grid-gap:5px;padding:8px}.ck.ck-color-grid__tile{border:0;height:var(--ck-color-grid-tile-size);min-height:var(--ck-color-grid-tile-size);min-width:var(--ck-color-grid-tile-size);padding:0;transition:box-shadow .2s ease;width:var(--ck-color-grid-tile-size)}.ck.ck-color-grid__tile.ck-disabled{cursor:unset;transition:unset}.ck.ck-color-grid__tile.ck-color-selector__color-tile_bordered{box-shadow:0 0 0 1px var(--ck-color-base-border)}.ck.ck-color-grid__tile .ck.ck-icon{color:var(--ck-color-color-grid-check-icon);display:none}.ck.ck-color-grid__tile.ck-on{box-shadow:inset 0 0 0 1px var(--ck-color-base-background),0 0 0 2px var(--ck-color-base-text)}.ck.ck-color-grid__tile.ck-on .ck.ck-icon{display:block}.ck.ck-color-grid__tile.ck-on,.ck.ck-color-grid__tile:focus:not(.ck-disabled),.ck.ck-color-grid__tile:hover:not(.ck-disabled){border:0}.ck.ck-color-grid__tile:focus:not(.ck-disabled),.ck.ck-color-grid__tile:hover:not(.ck-disabled){box-shadow:inset 0 0 0 1px var(--ck-color-base-background),0 0 0 2px var(--ck-color-focus-border)}.ck.ck-color-grid__label{padding:0 var(--ck-spacing-standard)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/colorgrid/colorgrid.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/colorgrid/colorgrid.css"],names:[],mappings:"AAKA,kBACC,YACD,CCAA,MACC,8BAA+B,CAK/B,wCACD,CAEA,kBACC,YAAa,CACb,WACD,CAEA,wBAOC,QAAS,CALT,qCAAsC,CAEtC,yCAA0C,CAD1C,wCAAyC,CAEzC,SAAU,CACV,8BAA+B,CAL/B,oCAyCD,CAjCC,oCACC,YAAa,CACb,gBACD,CAEA,+DACC,gDACD,CAEA,oCAEC,2CAA4C,CAD5C,YAED,CAEA,8BACC,8FAKD,CAHC,0CACC,aACD,CAGD,8HAIC,QACD,CAEA,gGAEC,iGACD,CAGD,yBACC,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-color-grid {
	display: grid;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

:root {
	--ck-color-grid-tile-size: 24px;

	/* Not using global colors here because these may change but some colors in a pallette
	 * require special treatment. For instance, this ensures no matter what the UI text color is,
	 * the check icon will look good on the black color tile. */
	--ck-color-color-grid-check-icon: hsl(212, 81%, 46%);
}

.ck.ck-color-grid {
	grid-gap: 5px;
	padding: 8px;
}

.ck.ck-color-grid__tile {
	width: var(--ck-color-grid-tile-size);
	height: var(--ck-color-grid-tile-size);
	min-width: var(--ck-color-grid-tile-size);
	min-height: var(--ck-color-grid-tile-size);
	padding: 0;
	transition: .2s ease box-shadow;
	border: 0;

	&.ck-disabled {
		cursor: unset;
		transition: unset;
	}

	&.ck-color-selector__color-tile_bordered {
		box-shadow: 0 0 0 1px var(--ck-color-base-border);
	}

	& .ck.ck-icon {
		display: none;
		color: var(--ck-color-color-grid-check-icon);
	}

	&.ck-on {
		box-shadow: inset 0 0 0 1px var(--ck-color-base-background), 0 0 0 2px var(--ck-color-base-text);

		& .ck.ck-icon {
			display: block;
		}
	}

	&.ck-on,
	&:focus:not( .ck-disabled ),
	&:hover:not( .ck-disabled ) {
		/* Disable the default .ck-button's border ring. */
		border: 0;
	}

	&:focus:not( .ck-disabled ),
	&:hover:not( .ck-disabled ) {
		box-shadow: inset 0 0 0 1px var(--ck-color-base-background), 0 0 0 2px var(--ck-color-focus-border);
	}
}

.ck.ck-color-grid__label {
	padding: 0 var(--ck-spacing-standard);
}
`],sourceRoot:""}]);const C=_},3398:(k,b,g)=>{g.d(b,{Z:()=>C});var v=g(1799),A=g.n(v),x=g(2609),_=g.n(x)()(A());_.push([k.id,".color-picker-hex-input{width:max-content}.color-picker-hex-input .ck.ck-input{min-width:unset}.ck.ck-color-picker__row{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between;margin:var(--ck-spacing-large) 0 0;width:unset}.ck.ck-color-picker__row .ck.ck-labeled-field-view{padding-top:unset}.ck.ck-color-picker__row .ck.ck-input-text{width:unset}.ck.ck-color-picker__row .ck-color-picker__hash-view{padding-right:var(--ck-spacing-medium);padding-top:var(--ck-spacing-tiny)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/colorpicker/colorpicker.css"],names:[],mappings:"AAKA,wBACC,iBAKD,CAHC,qCACC,eACD,CAGD,yBACC,YAAa,CACb,kBAAmB,CACnB,gBAAiB,CACjB,6BAA8B,CAC9B,kCAAmC,CACnC,WAcD,CAZC,mDACC,iBACD,CAEA,2CACC,WACD,CAEA,qDAEC,sCAAuC,CADvC,kCAED",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.color-picker-hex-input {
	width: max-content;

	& .ck.ck-input {
		min-width: unset;
	}
}

.ck.ck-color-picker__row {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-between;
	margin: var(--ck-spacing-large) 0 0;
	width: unset;

	& .ck.ck-labeled-field-view {
		padding-top: unset;
	}

	& .ck.ck-input-text {
		width: unset;
	}

	& .ck-color-picker__hash-view {
		padding-top: var(--ck-spacing-tiny);
		padding-right: var(--ck-spacing-medium);
	}
}
`],sourceRoot:""}]);const C=_},4157:(k,b,g)=>{g.d(b,{Z:()=>C});var v=g(1799),A=g.n(v),x=g(2609),_=g.n(x)()(A());_.push([k.id,".ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker,.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__remove-color{align-items:center;display:flex}[dir=rtl] .ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker,[dir=rtl] .ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__remove-color{justify-content:flex-start}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-selector_action-bar{display:flex;flex-direction:row;justify-content:space-around}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-selector_action-bar .ck-button-cancel,.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-selector_action-bar .ck-button-save{flex:1}.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker,.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__remove-color{width:100%}.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker{border-bottom-left-radius:0;border-bottom-right-radius:0;padding:calc(var(--ck-spacing-standard)/2) var(--ck-spacing-standard)}.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker:not(:focus){border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker .ck.ck-icon{margin-right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker .ck.ck-icon{margin-left:var(--ck-spacing-standard)}.ck.ck-color-selector .ck-color-grids-fragment label.ck.ck-color-grid__label{font-weight:unset}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker{padding:8px}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker{height:100px;min-width:180px}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker::part(saturation){border-radius:var(--ck-border-radius) var(--ck-border-radius) 0 0}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker::part(hue){border-radius:0 0 var(--ck-border-radius) var(--ck-border-radius)}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker::part(hue-pointer),.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker::part(saturation-pointer){height:15px;width:15px}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-selector_action-bar{padding:0 8px 8px}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/colorselector/colorselector.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/colorselector/colorselector.css"],names:[],mappings:"AAUE,oLAGC,kBAAmB,CADnB,YAMD,CARA,wMAME,0BAEF,CAKA,iFACC,YAAa,CACb,kBAAmB,CACnB,4BAMD,CAJC,oMAEC,MACD,CCrBD,oLAEC,UACD,CAEA,0FAEC,2BAA4B,CAC5B,4BAA6B,CAF7B,qEAiBD,CAbC,sGACC,gDACD,CAEA,gHAEE,uCAMF,CARA,gHAME,sCAEF,CAGD,6EACC,iBACD,CAKA,oEACC,WAoBD,CAlBC,sFACC,YAAa,CACb,eAeD,CAbC,wGACC,iEACD,CAEA,iGACC,iEACD,CAEA,yNAGC,WAAY,CADZ,UAED,CAIF,iFACC,iBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-color-selector {
	/* View fragment with color grids. */
	& .ck-color-grids-fragment {
		& .ck-button.ck-color-selector__remove-color,
		& .ck-button.ck-color-selector__color-picker {
			display: flex;
			align-items: center;

			@mixin ck-dir rtl {
				justify-content: flex-start;
			}
		}
	}

	/* View fragment with a color picker. */
	& .ck-color-picker-fragment {
		& .ck.ck-color-selector_action-bar {
			display: flex;
			flex-direction: row;
			justify-content: space-around;

			& .ck-button-save,
			& .ck-button-cancel {
				flex: 1
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-color-selector {
	/* View fragment with color grids. */
	& .ck-color-grids-fragment {
		& .ck-button.ck-color-selector__remove-color,
		& .ck-button.ck-color-selector__color-picker {
			width: 100%;
		}

		& .ck-button.ck-color-selector__color-picker {
			padding: calc(var(--ck-spacing-standard) / 2) var(--ck-spacing-standard);
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;

			&:not(:focus) {
				border-top: 1px solid var(--ck-color-base-border);
			}

			& .ck.ck-icon {
				@mixin ck-dir ltr {
					margin-right: var(--ck-spacing-standard);
				}

				@mixin ck-dir rtl {
					margin-left: var(--ck-spacing-standard);
				}
			}
		}

		& label.ck.ck-color-grid__label {
			font-weight: unset;
		}
	}

	/* View fragment with a color picker. */
	& .ck-color-picker-fragment {
		& .ck.ck-color-picker {
			padding: 8px;

			& .hex-color-picker {
				height: 100px;
				min-width: 180px;

				&::part(saturation) {
					border-radius: var(--ck-border-radius) var(--ck-border-radius) 0 0;
				}

				&::part(hue) {
					border-radius: 0 0 var(--ck-border-radius) var(--ck-border-radius);
				}

				&::part(saturation-pointer),
				&::part(hue-pointer) {
					width: 15px;
					height: 15px;
				}
			}
		}

		& .ck.ck-color-selector_action-bar {
			padding: 0 8px 8px;
		}
	}
}
`],sourceRoot:""}]);const C=_},5485:(k,b,g)=>{g.d(b,{Z:()=>C});var v=g(1799),A=g.n(v),x=g(2609),_=g.n(x)()(A());_.push([k.id,":root{--ck-dropdown-max-width:75vw}.ck.ck-dropdown{display:inline-block;position:relative}.ck.ck-dropdown .ck-dropdown__arrow{pointer-events:none;z-index:var(--ck-z-default)}.ck.ck-dropdown .ck-button.ck-dropdown__button{width:100%}.ck.ck-dropdown .ck-dropdown__panel{display:none;max-width:var(--ck-dropdown-max-width);position:absolute;z-index:var(--ck-z-modal)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel-visible{display:inline-block}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_n,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nmw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw{bottom:100%}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_s,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_smw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw{bottom:auto;top:100%}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se{left:0}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw{right:0}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_n,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_s{left:50%;transform:translateX(-50%)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nmw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_smw{left:75%;transform:translateX(-75%)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sme{left:25%;transform:translateX(-25%)}.ck.ck-toolbar .ck-dropdown__panel{z-index:calc(var(--ck-z-modal) + 1)}:root{--ck-dropdown-arrow-size:calc(var(--ck-icon-size)*0.5)}.ck.ck-dropdown{font-size:inherit}.ck.ck-dropdown .ck-dropdown__arrow{width:var(--ck-dropdown-arrow-size)}[dir=ltr] .ck.ck-dropdown .ck-dropdown__arrow{margin-left:var(--ck-spacing-standard);right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-dropdown .ck-dropdown__arrow{left:var(--ck-spacing-standard);margin-right:var(--ck-spacing-small)}.ck.ck-dropdown.ck-disabled .ck-dropdown__arrow{opacity:var(--ck-disabled-opacity)}[dir=ltr] .ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text){padding-left:var(--ck-spacing-small)}[dir=rtl] .ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text){padding-right:var(--ck-spacing-small)}.ck.ck-dropdown .ck-button.ck-dropdown__button .ck-button__label{overflow:hidden;text-overflow:ellipsis;width:7em}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on{border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-dropdown__button_label-width_auto .ck-button__label{width:auto}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-off:active,.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on:active{box-shadow:none}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-off:active:focus,.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on:active:focus{box-shadow:var(--ck-focus-outer-shadow),0 0}.ck.ck-dropdown__panel{border-radius:0}.ck-rounded-corners .ck.ck-dropdown__panel,.ck.ck-dropdown__panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-dropdown__panel{background:var(--ck-color-dropdown-panel-background);border:1px solid var(--ck-color-dropdown-panel-border);bottom:0;box-shadow:var(--ck-drop-shadow),0 0;min-width:100%}.ck.ck-dropdown__panel.ck-dropdown__panel_se{border-top-left-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_sw{border-top-right-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_ne{border-bottom-left-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_nw{border-bottom-right-radius:0}.ck.ck-dropdown__panel:focus{outline:none}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/dropdown.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/dropdown.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,MACC,4BACD,CAEA,gBACC,oBAAqB,CACrB,iBA2ED,CAzEC,oCACC,mBAAoB,CACpB,2BACD,CAGA,+CACC,UACD,CAEA,oCACC,YAAa,CAEb,sCAAuC,CAEvC,iBAAkB,CAHlB,yBA4DD,CAvDC,+DACC,oBACD,CAEA,mSAKC,WACD,CAEA,mSAUC,WAAY,CADZ,QAED,CAEA,oHAEC,MACD,CAEA,oHAEC,OACD,CAEA,kHAGC,QAAS,CACT,0BACD,CAEA,sHAGC,QAAS,CACT,0BACD,CAEA,sHAGC,QAAS,CACT,0BACD,CAQF,mCACC,mCACD,CCpFA,MACC,sDACD,CAEA,gBAEC,iBA2ED,CAzEC,oCACC,mCACD,CAGC,8CAIC,sCAAuC,CAHvC,gCAID,CAIA,8CACC,+BAAgC,CAGhC,oCACD,CAGD,gDC/BA,kCDiCA,CAIE,mFAEC,oCACD,CAIA,mFAEC,qCACD,CAID,iEAEC,eAAgB,CAChB,sBAAuB,CAFvB,SAGD,CAGA,6EC1DD,kCD4DC,CAGA,qDACC,2BAA4B,CAC5B,4BACD,CAEA,sGACC,UACD,CAGA,yHAEC,eAKD,CAHC,qIE7EF,2CF+EE,CAKH,uBGlFC,eHkHD,CAhCA,qFG9EE,qCH8GF,CAhCA,uBAIC,oDAAqD,CACrD,sDAAuD,CACvD,QAAS,CE1FT,oCAA8B,CF6F9B,cAuBD,CAnBC,6CACC,wBACD,CAEA,6CACC,yBACD,CAEA,6CACC,2BACD,CAEA,6CACC,4BACD,CAEA,6BACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-dropdown-max-width: 75vw;
}

.ck.ck-dropdown {
	display: inline-block;
	position: relative;

	& .ck-dropdown__arrow {
		pointer-events: none;
		z-index: var(--ck-z-default);
	}

	/* Dropdown button should span horizontally, e.g. in vertical toolbars */
	& .ck-button.ck-dropdown__button {
		width: 100%;
	}

	& .ck-dropdown__panel {
		display: none;
		z-index: var(--ck-z-modal);
		max-width: var(--ck-dropdown-max-width);

		position: absolute;

		&.ck-dropdown__panel-visible {
			display: inline-block;
		}

		&.ck-dropdown__panel_ne,
		&.ck-dropdown__panel_nw,
		&.ck-dropdown__panel_n,
		&.ck-dropdown__panel_nmw,
		&.ck-dropdown__panel_nme {
			bottom: 100%;
		}

		&.ck-dropdown__panel_se,
		&.ck-dropdown__panel_sw,
		&.ck-dropdown__panel_smw,
		&.ck-dropdown__panel_sme,
		&.ck-dropdown__panel_s {
			/*
			 * Using transform: translate3d( 0, 100%, 0 ) causes blurry dropdown on Chrome 67-78+ on non-retina displays.
			 * See https://github.com/ckeditor/ckeditor5/issues/1053.
			 */
			top: 100%;
			bottom: auto;
		}

		&.ck-dropdown__panel_ne,
		&.ck-dropdown__panel_se {
			left: 0px;
		}

		&.ck-dropdown__panel_nw,
		&.ck-dropdown__panel_sw {
			right: 0px;
		}

		&.ck-dropdown__panel_s,
		&.ck-dropdown__panel_n {
			/* Positioning panels relative to the center of the button */
			left: 50%;
			transform: translateX(-50%);
		}

		&.ck-dropdown__panel_nmw,
		&.ck-dropdown__panel_smw {
			/* Positioning panels relative to the middle-west of the button */
			left: 75%;
			transform: translateX(-75%);
		}

		&.ck-dropdown__panel_nme,
		&.ck-dropdown__panel_sme {
			/* Positioning panels relative to the middle-east of the button */
			left: 25%;
			transform: translateX(-25%);
		}
	}
}

/*
 * Toolbar dropdown panels should be always above the UI (eg. other dropdown panels) from the editor's content.
 * See https://github.com/ckeditor/ckeditor5/issues/7874
 */
.ck.ck-toolbar .ck-dropdown__panel {
	z-index: calc( var(--ck-z-modal) + 1 );
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_shadow.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

:root {
	--ck-dropdown-arrow-size: calc(0.5 * var(--ck-icon-size));
}

.ck.ck-dropdown {
	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	& .ck-dropdown__arrow {
		width: var(--ck-dropdown-arrow-size);
	}

	@mixin ck-dir ltr {
		& .ck-dropdown__arrow {
			right: var(--ck-spacing-standard);

			/* A space to accommodate the triangle. */
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& .ck-dropdown__arrow {
			left: var(--ck-spacing-standard);

			/* A space to accommodate the triangle. */
			margin-right: var(--ck-spacing-small);
		}
	}

	&.ck-disabled .ck-dropdown__arrow {
		@mixin ck-disabled;
	}

	& .ck-button.ck-dropdown__button {
		@mixin ck-dir ltr {
			&:not(.ck-button_with-text) {
				/* Make sure dropdowns with just an icon have the right inner spacing */
				padding-left: var(--ck-spacing-small);
			}
		}

		@mixin ck-dir rtl {
			&:not(.ck-button_with-text) {
				/* Make sure dropdowns with just an icon have the right inner spacing */
				padding-right: var(--ck-spacing-small);
			}
		}

		/* #23 */
		& .ck-button__label {
			width: 7em;
			overflow: hidden;
			text-overflow: ellipsis;
		}

		/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/70 */
		&.ck-disabled .ck-button__label {
			@mixin ck-disabled;
		}

		/* https://github.com/ckeditor/ckeditor5/issues/816 */
		&.ck-on {
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;
		}

		&.ck-dropdown__button_label-width_auto .ck-button__label {
			width: auto;
		}

		/* https://github.com/ckeditor/ckeditor5/issues/8699 */
		&.ck-off:active,
		&.ck-on:active {
			box-shadow: none;

			&:focus {
				@mixin ck-box-shadow var(--ck-focus-outer-shadow);
			}
		}
	}
}

.ck.ck-dropdown__panel {
	@mixin ck-rounded-corners;
	@mixin ck-drop-shadow;

	background: var(--ck-color-dropdown-panel-background);
	border: 1px solid var(--ck-color-dropdown-panel-border);
	bottom: 0;

	/* Make sure the panel is at least as wide as the drop-down's button. */
	min-width: 100%;

	/* Disabled corner border radius to be consistent with the .dropdown__button
	https://github.com/ckeditor/ckeditor5/issues/816 */
	&.ck-dropdown__panel_se {
		border-top-left-radius: 0;
	}

	&.ck-dropdown__panel_sw {
		border-top-right-radius: 0;
	}

	&.ck-dropdown__panel_ne {
		border-bottom-left-radius: 0;
	}

	&.ck-dropdown__panel_nw {
		border-bottom-right-radius: 0;
	}

	&:focus {
		outline: none;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const C=_},3949:(k,b,g)=>{g.d(b,{Z:()=>C});var v=g(1799),A=g.n(v),x=g(2609),_=g.n(x)()(A());_.push([k.id,".ck.ck-dropdown .ck-dropdown__panel .ck-list{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list,.ck.ck-dropdown .ck-dropdown__panel .ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0}.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button,.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-bottom-left-radius:0;border-bottom-right-radius:0;border-top-left-radius:0}.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button,.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/listdropdown.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,6CCIC,eDqBD,CAzBA,iICQE,qCAAsC,CDJtC,wBAqBF,CAfE,mFCND,eDYC,CANA,6MCFA,qCAAsC,CDKpC,2BAA4B,CAC5B,4BAA6B,CAF7B,wBAIF,CAEA,kFCdD,eDmBC,CALA,2MCVA,qCAAsC,CDYpC,wBAAyB,CACzB,yBAEF",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

.ck.ck-dropdown .ck-dropdown__panel .ck-list {
	/* Disabled radius of top-left border to be consistent with .dropdown__button
	https://github.com/ckeditor/ckeditor5/issues/816 */
	@mixin ck-rounded-corners {
		border-top-left-radius: 0;
	}

	/* Make sure the button belonging to the first/last child of the list goes well with the
	border radius of the entire panel. */
	& .ck-list__item {
		&:first-child .ck-button {
			@mixin ck-rounded-corners {
				border-top-left-radius: 0;
				border-bottom-left-radius: 0;
				border-bottom-right-radius: 0;
			}
		}

		&:last-child .ck-button {
			@mixin ck-rounded-corners {
				border-top-left-radius: 0;
				border-top-right-radius: 0;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const C=_},7686:(k,b,g)=>{g.d(b,{Z:()=>C});var v=g(1799),A=g.n(v),x=g(2609),_=g.n(x)()(A());_.push([k.id,'.ck.ck-splitbutton{font-size:inherit}.ck.ck-splitbutton .ck-splitbutton__action:focus{z-index:calc(var(--ck-z-default) + 1)}:root{--ck-color-split-button-hover-background:#ebebeb;--ck-color-split-button-hover-border:#b3b3b3}[dir=ltr] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,[dir=ltr] .ck.ck-splitbutton:hover>.ck-splitbutton__action{border-bottom-right-radius:unset;border-top-right-radius:unset}[dir=rtl] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,[dir=rtl] .ck.ck-splitbutton:hover>.ck-splitbutton__action{border-bottom-left-radius:unset;border-top-left-radius:unset}.ck.ck-splitbutton>.ck-splitbutton__arrow{min-width:unset}[dir=ltr] .ck.ck-splitbutton>.ck-splitbutton__arrow{border-bottom-left-radius:unset;border-top-left-radius:unset}[dir=rtl] .ck.ck-splitbutton>.ck-splitbutton__arrow{border-bottom-right-radius:unset;border-top-right-radius:unset}.ck.ck-splitbutton>.ck-splitbutton__arrow svg{width:var(--ck-dropdown-arrow-size)}.ck.ck-splitbutton>.ck-splitbutton__arrow:not(:focus){border-bottom-width:0;border-top-width:0}.ck.ck-splitbutton.ck-splitbutton_open>.ck-button:not(.ck-on):not(.ck-disabled):not(:hover),.ck.ck-splitbutton:hover>.ck-button:not(.ck-on):not(.ck-disabled):not(:hover){background:var(--ck-color-split-button-hover-background)}.ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{background-color:var(--ck-color-split-button-hover-border);content:"";height:100%;position:absolute;width:1px}.ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:focus:after,.ck.ck-splitbutton:hover>.ck-splitbutton__arrow:focus:after{--ck-color-split-button-hover-border:var(--ck-color-focus-border)}[dir=ltr] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,[dir=ltr] .ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{left:-1px}[dir=rtl] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,[dir=rtl] .ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{right:-1px}.ck.ck-splitbutton.ck-splitbutton_open{border-radius:0}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners>.ck-splitbutton__action{border-bottom-left-radius:0}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners>.ck-splitbutton__arrow{border-bottom-right-radius:0}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/splitbutton.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/splitbutton.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,mBAEC,iBAKD,CAHC,iDACC,qCACD,CCJD,MACC,gDAAyD,CACzD,4CACD,CAMC,oIAKE,gCAAiC,CADjC,6BASF,CAbA,oIAWE,+BAAgC,CADhC,4BAGF,CAEA,0CAGC,eAiBD,CApBA,oDAQE,+BAAgC,CADhC,4BAaF,CApBA,oDAcE,gCAAiC,CADjC,6BAOF,CAHC,8CACC,mCACD,CAKD,sDAEC,qBAAwB,CADxB,kBAED,CAQC,0KACC,wDACD,CAIA,8JAKC,0DAA2D,CAJ3D,UAAW,CAGX,WAAY,CAFZ,iBAAkB,CAClB,SAGD,CAGA,sIACC,iEACD,CAGC,kLACC,SACD,CAIA,kLACC,UACD,CAMF,uCCzFA,eDmGA,CAVA,qHCrFC,qCD+FD,CARE,qKACC,2BACD,CAEA,mKACC,4BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-splitbutton {
	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	& .ck-splitbutton__action:focus {
		z-index: calc(var(--ck-z-default) + 1);
	}
}

`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

:root {
	--ck-color-split-button-hover-background: hsl(0, 0%, 92%);
	--ck-color-split-button-hover-border: hsl(0, 0%, 70%);
}

.ck.ck-splitbutton {
	/*
	 * Note: ck-rounded and ck-dir mixins don't go together (because they both use @nest).
	 */
	&:hover > .ck-splitbutton__action,
	&.ck-splitbutton_open > .ck-splitbutton__action {
		@nest [dir="ltr"] & {
			/* Don't round the action button on the right side */
			border-top-right-radius: unset;
			border-bottom-right-radius: unset;
		}

		@nest [dir="rtl"] & {
			/* Don't round the action button on the left side */
			border-top-left-radius: unset;
			border-bottom-left-radius: unset;
		}
	}

	& > .ck-splitbutton__arrow {
		/* It's a text-less button and since the icon is positioned absolutely in such situation,
		it must get some arbitrary min-width. */
		min-width: unset;

		@nest [dir="ltr"] & {
			/* Don't round the arrow button on the left side */
			border-top-left-radius: unset;
			border-bottom-left-radius: unset;
		}

		@nest [dir="rtl"] & {
			/* Don't round the arrow button on the right side */
			border-top-right-radius: unset;
			border-bottom-right-radius: unset;
		}

		& svg {
			width: var(--ck-dropdown-arrow-size);
		}
	}

	/* Make sure the divider stretches 100% height of the button
	https://github.com/ckeditor/ckeditor5/issues/10936 */
	& > .ck-splitbutton__arrow:not(:focus) {
		border-top-width: 0px;
		border-bottom-width: 0px;
	}

	/* When the split button is "open" (the arrow is on) or being hovered, it should get some styling
	as a whole. The background of both buttons should stand out and there should be a visual
	separation between both buttons. */
	&.ck-splitbutton_open,
	&:hover {
		/* When the split button hovered as a whole, not as individual buttons. */
		& > .ck-button:not(.ck-on):not(.ck-disabled):not(:hover) {
			background: var(--ck-color-split-button-hover-background);
		}

		/* Splitbutton separator needs to be set with the ::after pseudoselector
		to display properly the borders on focus */
		& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
			content: '';
			position: absolute;
			width: 1px;
			height: 100%;
			background-color: var(--ck-color-split-button-hover-border);
		}

		/* Make sure the divider between the buttons looks fine when the button is focused */
		& > .ck-splitbutton__arrow:focus::after {
			--ck-color-split-button-hover-border: var(--ck-color-focus-border);
		}

		@nest [dir="ltr"] & {
			& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
				left: -1px;
			}
		}

		@nest [dir="rtl"] & {
			& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
				right: -1px;
			}
		}
	}

	/* Don't round the bottom left and right corners of the buttons when "open"
	https://github.com/ckeditor/ckeditor5/issues/816 */
	&.ck-splitbutton_open {
		@mixin ck-rounded-corners {
			& > .ck-splitbutton__action {
				border-bottom-left-radius: 0;
			}

			& > .ck-splitbutton__arrow {
				border-bottom-right-radius: 0;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const C=_},7339:(k,b,g)=>{g.d(b,{Z:()=>C});var v=g(1799),A=g.n(v),x=g(2609),_=g.n(x)()(A());_.push([k.id,":root{--ck-toolbar-dropdown-max-width:60vw}.ck.ck-toolbar-dropdown>.ck-dropdown__panel{max-width:var(--ck-toolbar-dropdown-max-width);width:max-content}.ck.ck-toolbar-dropdown>.ck-dropdown__panel .ck-button:focus{z-index:calc(var(--ck-z-default) + 1)}.ck.ck-toolbar-dropdown .ck-toolbar{border:0}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/toolbardropdown.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/toolbardropdown.css"],names:[],mappings:"AAKA,MACC,oCACD,CAEA,4CAGC,8CAA+C,CAD/C,iBAQD,CAJE,6DACC,qCACD,CCZF,oCACC,QACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-toolbar-dropdown-max-width: 60vw;
}

.ck.ck-toolbar-dropdown > .ck-dropdown__panel {
	/* https://github.com/ckeditor/ckeditor5/issues/5586 */
	width: max-content;
	max-width: var(--ck-toolbar-dropdown-max-width);

	& .ck-button {
		&:focus {
			z-index: calc(var(--ck-z-default) + 1);
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-toolbar-dropdown .ck-toolbar {
	border: 0;
}
`],sourceRoot:""}]);const C=_},9688:(k,b,g)=>{g.d(b,{Z:()=>C});var v=g(1799),A=g.n(v),x=g(2609),_=g.n(x)()(A());_.push([k.id,":root{--ck-color-editable-blur-selection:#d9d9d9}.ck.ck-editor__editable:not(.ck-editor__nested-editable){border-radius:0}.ck-rounded-corners .ck.ck-editor__editable:not(.ck-editor__nested-editable),.ck.ck-editor__editable.ck-rounded-corners:not(.ck-editor__nested-editable){border-radius:var(--ck-border-radius)}.ck.ck-editor__editable.ck-focused:not(.ck-editor__nested-editable){border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0;outline:none}.ck.ck-editor__editable_inline{border:1px solid transparent;overflow:auto;padding:0 var(--ck-spacing-standard)}.ck.ck-editor__editable_inline[dir=ltr]{text-align:left}.ck.ck-editor__editable_inline[dir=rtl]{text-align:right}.ck.ck-editor__editable_inline>:first-child{margin-top:var(--ck-spacing-large)}.ck.ck-editor__editable_inline>:last-child{margin-bottom:var(--ck-spacing-large)}.ck.ck-editor__editable_inline.ck-blurred ::selection{background:var(--ck-color-editable-blur-selection)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_n]:after{border-bottom-color:var(--ck-color-panel-background)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_s]:after{border-top-color:var(--ck-color-panel-background)}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/editorui/editorui.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAWA,MACC,0CACD,CAEA,yDCJC,eDWD,CAPA,yJCAE,qCDOF,CAJC,oEEPA,2BAA2B,CCF3B,qCAA8B,CDC9B,YFWA,CAGD,+BAGC,4BAA6B,CAF7B,aAAc,CACd,oCA6BD,CA1BC,wCACC,eACD,CAEA,wCACC,gBACD,CAGA,4CACC,kCACD,CAGA,2CAKC,qCACD,CAGA,sDACC,kDACD,CAKA,gEACC,oDACD,CAIA,gEACC,iDACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_shadow.css";
@import "../../../mixins/_focus.css";
@import "../../mixins/_button.css";

:root {
	--ck-color-editable-blur-selection: hsl(0, 0%, 85%);
}

.ck.ck-editor__editable:not(.ck-editor__nested-editable) {
	@mixin ck-rounded-corners;

	&.ck-focused {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-inner-shadow);
	}
}

.ck.ck-editor__editable_inline {
	overflow: auto;
	padding: 0 var(--ck-spacing-standard);
	border: 1px solid transparent;

	&[dir="ltr"] {
		text-align: left;
	}

	&[dir="rtl"] {
		text-align: right;
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/116 */
	& > *:first-child {
		margin-top: var(--ck-spacing-large);
	}

	/* https://github.com/ckeditor/ckeditor5/issues/847 */
	& > *:last-child {
		/*
		 * This value should match with the default margins of the block elements (like .media or .image)
		 * to avoid a content jumping when the fake selection container shows up (See https://github.com/ckeditor/ckeditor5/issues/9825).
		 */
		margin-bottom: var(--ck-spacing-large);
	}

	/* https://github.com/ckeditor/ckeditor5/issues/6517 */
	&.ck-blurred ::selection {
		background: var(--ck-color-editable-blur-selection);
	}
}

/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/111 */
.ck.ck-balloon-panel.ck-toolbar-container[class*="arrow_n"] {
	&::after {
		border-bottom-color: var(--ck-color-panel-background);
	}
}

.ck.ck-balloon-panel.ck-toolbar-container[class*="arrow_s"] {
	&::after {
		border-top-color: var(--ck-color-panel-background);
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const C=_},8847:(k,b,g)=>{g.d(b,{Z:()=>C});var v=g(1799),A=g.n(v),x=g(2609),_=g.n(x)()(A());_.push([k.id,".ck.ck-form__header{align-items:center;display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between}:root{--ck-form-header-height:38px}.ck.ck-form__header{border-bottom:1px solid var(--ck-color-base-border);height:var(--ck-form-header-height);line-height:var(--ck-form-header-height);padding:var(--ck-spacing-small) var(--ck-spacing-large)}.ck.ck-form__header .ck-form__header__label{font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/formheader/formheader.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/formheader/formheader.css"],names:[],mappings:"AAKA,oBAIC,kBAAmB,CAHnB,YAAa,CACb,kBAAmB,CACnB,gBAAiB,CAEjB,6BACD,CCNA,MACC,4BACD,CAEA,oBAIC,mDAAoD,CAFpD,mCAAoC,CACpC,wCAAyC,CAFzC,uDAQD,CAHC,4CACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-form__header {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	align-items: center;
	justify-content: space-between;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-form-header-height: 38px;
}

.ck.ck-form__header {
	padding: var(--ck-spacing-small) var(--ck-spacing-large);
	height: var(--ck-form-header-height);
	line-height: var(--ck-form-header-height);
	border-bottom: 1px solid var(--ck-color-base-border);

	& .ck-form__header__label {
		font-weight: bold;
	}
}
`],sourceRoot:""}]);const C=_},6574:(k,b,g)=>{g.d(b,{Z:()=>C});var v=g(1799),A=g.n(v),x=g(2609),_=g.n(x)()(A());_.push([k.id,".ck.ck-icon{vertical-align:middle}:root{--ck-icon-size:calc(var(--ck-line-height-base)*var(--ck-font-size-normal))}.ck.ck-icon{font-size:.8333350694em;height:var(--ck-icon-size);width:var(--ck-icon-size);will-change:transform}.ck.ck-icon,.ck.ck-icon *{cursor:inherit}.ck.ck-icon.ck-icon_inherit-color,.ck.ck-icon.ck-icon_inherit-color *{color:inherit}.ck.ck-icon.ck-icon_inherit-color :not([fill]){fill:currentColor}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/icon/icon.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/icon/icon.css"],names:[],mappings:"AAKA,YACC,qBACD,CCFA,MACC,0EACD,CAEA,YAKC,uBAAwB,CAHxB,0BAA2B,CAD3B,yBAA0B,CAU1B,qBAoBD,CAlBC,0BALA,cAQA,CAMC,sEACC,aAMD,CAJC,+CAEC,iBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-icon {
	vertical-align: middle;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-icon-size: calc(var(--ck-line-height-base) * var(--ck-font-size-normal));
}

.ck.ck-icon {
	width: var(--ck-icon-size);
	height: var(--ck-icon-size);

	/* Multiplied by the height of the line in "px" should give SVG "viewport" dimensions */
	font-size: .8333350694em;

	/* Inherit cursor style (#5). */
	cursor: inherit;

	/* This will prevent blurry icons on Firefox. See #340. */
	will-change: transform;

	& * {
		/* Inherit cursor style (#5). */
		cursor: inherit;
	}

	/* Allows dynamic coloring of an icon by inheriting its color from the parent. */
	&.ck-icon_inherit-color {
		color: inherit;

		& * {
			color: inherit;

			&:not([fill]) {
				/* Needed by FF. */
				fill: currentColor;
			}
		}
	}
}
`],sourceRoot:""}]);const C=_},4879:(k,b,g)=>{g.d(b,{Z:()=>C});var v=g(1799),A=g.n(v),x=g(2609),_=g.n(x)()(A());_.push([k.id,":root{--ck-input-width:18em;--ck-input-text-width:var(--ck-input-width)}.ck.ck-input{border-radius:0}.ck-rounded-corners .ck.ck-input,.ck.ck-input.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-input{background:var(--ck-color-input-background);border:1px solid var(--ck-color-input-border);min-height:var(--ck-ui-component-min-height);min-width:var(--ck-input-width);padding:var(--ck-spacing-extra-tiny) var(--ck-spacing-medium);transition:box-shadow .1s ease-in-out,border .1s ease-in-out}.ck.ck-input:focus{border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;outline:none}.ck.ck-input[readonly]{background:var(--ck-color-input-disabled-background);border:1px solid var(--ck-color-input-disabled-border);color:var(--ck-color-input-disabled-text)}.ck.ck-input[readonly]:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),0 0}.ck.ck-input.ck-error{animation:ck-input-shake .3s ease both;border-color:var(--ck-color-input-error-border)}.ck.ck-input.ck-error:focus{box-shadow:var(--ck-focus-error-outer-shadow),0 0}@keyframes ck-input-shake{20%{transform:translateX(-2px)}40%{transform:translateX(2px)}60%{transform:translateX(-1px)}80%{transform:translateX(1px)}}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/input/input.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AASA,MACC,qBAAsB,CAGtB,2CACD,CAEA,aCLC,eD2CD,CAtCA,iECDE,qCDuCF,CAtCA,aAGC,2CAA4C,CAC5C,6CAA8C,CAK9C,4CAA6C,CAH7C,+BAAgC,CADhC,6DAA8D,CAO9D,4DA0BD,CAxBC,mBEnBA,2BAA2B,CCF3B,2CAA8B,CDC9B,YFuBA,CAEA,uBAEC,oDAAqD,CADrD,sDAAuD,CAEvD,yCAMD,CAJC,6BG/BD,oDHkCC,CAGD,sBAEC,sCAAuC,CADvC,+CAMD,CAHC,4BGzCD,iDH2CC,CAIF,0BACC,IACC,0BACD,CAEA,IACC,yBACD,CAEA,IACC,0BACD,CAEA,IACC,yBACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_focus.css";
@import "../../../mixins/_shadow.css";

:root {
	--ck-input-width: 18em;

	/* Backward compatibility. */
	--ck-input-text-width: var(--ck-input-width);
}

.ck.ck-input {
	@mixin ck-rounded-corners;

	background: var(--ck-color-input-background);
	border: 1px solid var(--ck-color-input-border);
	padding: var(--ck-spacing-extra-tiny) var(--ck-spacing-medium);
	min-width: var(--ck-input-width);

	/* This is important to stay of the same height as surrounding buttons */
	min-height: var(--ck-ui-component-min-height);

	/* Apply some smooth transition to the box-shadow and border. */
	transition: box-shadow .1s ease-in-out, border .1s ease-in-out;

	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-focus-outer-shadow);
	}

	&[readonly] {
		border: 1px solid var(--ck-color-input-disabled-border);
		background: var(--ck-color-input-disabled-background);
		color: var(--ck-color-input-disabled-text);

		&:focus {
			/* The read-only input should have a slightly less visible shadow when focused. */
			@mixin ck-box-shadow var(--ck-focus-disabled-outer-shadow);
		}
	}

	&.ck-error {
		border-color: var(--ck-color-input-error-border);
		animation: ck-input-shake .3s ease both;

		&:focus {
			@mixin ck-box-shadow var(--ck-focus-error-outer-shadow);
		}
	}
}

@keyframes ck-input-shake {
	20% {
		transform: translateX(-2px);
	}

	40% {
		transform: translateX(2px);
	}

	60% {
		transform: translateX(-1px);
	}

	80% {
		transform: translateX(1px);
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const C=_},3662:(k,b,g)=>{g.d(b,{Z:()=>C});var v=g(1799),A=g.n(v),x=g(2609),_=g.n(x)()(A());_.push([k.id,".ck.ck-label{display:block}.ck.ck-voice-label{display:none}.ck.ck-label{font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/label/label.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/label/label.css"],names:[],mappings:"AAKA,aACC,aACD,CAEA,mBACC,YACD,CCNA,aACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-label {
	display: block;
}

.ck.ck-voice-label {
	display: none;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-label {
	font-weight: bold;
}
`],sourceRoot:""}]);const C=_},2577:(k,b,g)=>{g.d(b,{Z:()=>C});var v=g(1799),A=g.n(v),x=g(2609),_=g.n(x)()(A());_.push([k.id,".ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper{display:flex;position:relative}.ck.ck-labeled-field-view .ck.ck-label{display:block;position:absolute}:root{--ck-labeled-field-view-transition:.1s cubic-bezier(0,0,0.24,0.95);--ck-labeled-field-empty-unfocused-max-width:100% - 2 * var(--ck-spacing-medium);--ck-labeled-field-label-default-position-x:var(--ck-spacing-medium);--ck-labeled-field-label-default-position-y:calc(var(--ck-font-size-base)*0.6);--ck-color-labeled-field-label-background:var(--ck-color-base-background)}.ck.ck-labeled-field-view{border-radius:0}.ck-rounded-corners .ck.ck-labeled-field-view,.ck.ck-labeled-field-view.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper{width:100%}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{top:0}[dir=ltr] .ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{left:0}[dir=rtl] .ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{right:0}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{background:var(--ck-color-labeled-field-label-background);font-weight:400;line-height:normal;max-width:100%;overflow:hidden;padding:0 calc(var(--ck-font-size-tiny)*.5);pointer-events:none;text-overflow:ellipsis;transform:translate(var(--ck-spacing-medium),-6px) scale(.75);transform-origin:0 0;transition:transform var(--ck-labeled-field-view-transition),padding var(--ck-labeled-field-view-transition),background var(--ck-labeled-field-view-transition)}.ck.ck-labeled-field-view.ck-error .ck-input:not([readonly])+.ck.ck-label,.ck.ck-labeled-field-view.ck-error>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{color:var(--ck-color-base-error)}.ck.ck-labeled-field-view .ck-labeled-field-view__status{font-size:var(--ck-font-size-small);margin-top:var(--ck-spacing-small);white-space:normal}.ck.ck-labeled-field-view .ck-labeled-field-view__status.ck-labeled-field-view__status_error{color:var(--ck-color-base-error)}.ck.ck-labeled-field-view.ck-disabled>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{color:var(--ck-color-input-disabled-text)}[dir=ltr] .ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,[dir=ltr] .ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{transform:translate(var(--ck-labeled-field-label-default-position-x),var(--ck-labeled-field-label-default-position-y)) scale(1)}[dir=rtl] .ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,[dir=rtl] .ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{transform:translate(calc(var(--ck-labeled-field-label-default-position-x)*-1),var(--ck-labeled-field-label-default-position-y)) scale(1)}.ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{background:transparent;max-width:calc(var(--ck-labeled-field-empty-unfocused-max-width));padding:0}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown>.ck.ck-button{background:transparent}.ck.ck-labeled-field-view.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown>.ck-button>.ck-button__label{opacity:0}.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown+.ck-label{max-width:calc(var(--ck-labeled-field-empty-unfocused-max-width) - var(--ck-dropdown-arrow-size) - var(--ck-spacing-standard))}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/labeledfield/labeledfieldview.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/labeledfield/labeledfieldview.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAMC,mEACC,YAAa,CACb,iBACD,CAEA,uCACC,aAAc,CACd,iBACD,CCND,MACC,kEAAsE,CACtE,gFAAiF,CACjF,oEAAqE,CACrE,8EAAiF,CACjF,yEACD,CAEA,0BCLC,eD8GD,CAzGA,2FCDE,qCD0GF,CAtGC,mEACC,UAmCD,CAjCC,gFACC,KA+BD,CAhCA,0FAIE,MA4BF,CAhCA,0FAQE,OAwBF,CAhCA,gFAiBC,yDAA0D,CAG1D,eAAmB,CADnB,kBAAoB,CAOpB,cAAe,CAFf,eAAgB,CANhB,2CAA8C,CAP9C,mBAAoB,CAYpB,sBAAuB,CARvB,6DAA+D,CAH/D,oBAAqB,CAgBrB,+JAID,CAQA,mKACC,gCACD,CAGD,yDACC,mCAAoC,CACpC,kCAAmC,CAInC,kBAKD,CAHC,6FACC,gCACD,CAID,4OAEC,yCACD,CAIA,oUAGE,+HAYF,CAfA,oUAOE,wIAQF,CAfA,gTAaC,sBAAuB,CAFvB,iEAAkE,CAGlE,SACD,CAKA,8FACC,sBACD,CAGA,yIACC,SACD,CAGA,kMACC,8HACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-labeled-field-view {
	& > .ck.ck-labeled-field-view__input-wrapper {
		display: flex;
		position: relative;
	}

	& .ck.ck-label {
		display: block;
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";
@import "../../../mixins/_rounded.css";

:root {
	--ck-labeled-field-view-transition: .1s cubic-bezier(0, 0, 0.24, 0.95);
	--ck-labeled-field-empty-unfocused-max-width: 100% - 2 * var(--ck-spacing-medium);
	--ck-labeled-field-label-default-position-x: var(--ck-spacing-medium);
	--ck-labeled-field-label-default-position-y: calc(0.6 * var(--ck-font-size-base));
	--ck-color-labeled-field-label-background: var(--ck-color-base-background);
}

.ck.ck-labeled-field-view {
	@mixin ck-rounded-corners;

	& > .ck.ck-labeled-field-view__input-wrapper {
		width: 100%;

		& > .ck.ck-label {
			top: 0px;

			@mixin ck-dir ltr {
				left: 0px;
			}

			@mixin ck-dir rtl {
				right: 0px;
			}

			pointer-events: none;
			transform-origin: 0 0;

			/* By default, display the label scaled down above the field. */
			transform: translate(var(--ck-spacing-medium), -6px) scale(.75);

			background: var(--ck-color-labeled-field-label-background);
			padding: 0 calc(.5 * var(--ck-font-size-tiny));
			line-height: initial;
			font-weight: normal;

			/* Prevent overflow when the label is longer than the input */
			text-overflow: ellipsis;
			overflow: hidden;

			max-width: 100%;

			transition:
				transform var(--ck-labeled-field-view-transition),
				padding var(--ck-labeled-field-view-transition),
				background var(--ck-labeled-field-view-transition);
		}
	}

	&.ck-error {
		& > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
			color: var(--ck-color-base-error);
		}

		& .ck-input:not([readonly]) + .ck.ck-label {
			color: var(--ck-color-base-error);
		}
	}

	& .ck-labeled-field-view__status {
		font-size: var(--ck-font-size-small);
		margin-top: var(--ck-spacing-small);

		/* Let the info wrap to the next line to avoid stretching the layout horizontally.
		The status could be very long. */
		white-space: normal;

		&.ck-labeled-field-view__status_error {
			color: var(--ck-color-base-error);
		}
	}

	/* Disabled fields and fields that have no focus should fade out. */
	&.ck-disabled > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label,
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused) > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
		color: var(--ck-color-input-disabled-text);
	}

	/* Fields that are disabled or not focused and without a placeholder should have full-sized labels. */
	/* stylelint-disable-next-line no-descending-specificity */
	&.ck-disabled.ck-labeled-field-view_empty > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label,
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder) > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
		@mixin ck-dir ltr {
			transform: translate(var(--ck-labeled-field-label-default-position-x), var(--ck-labeled-field-label-default-position-y)) scale(1);
		}

		@mixin ck-dir rtl {
			transform: translate(calc(-1 * var(--ck-labeled-field-label-default-position-x)), var(--ck-labeled-field-label-default-position-y)) scale(1);
		}

		/* Compensate for the default translate position. */
		max-width: calc(var(--ck-labeled-field-empty-unfocused-max-width));

		background: transparent;
		padding: 0;
	}

	/*------ DropdownView integration ----------------------------------------------------------------------------------- */

	/* Make sure dropdown' background color in any of dropdown's state does not collide with labeled field. */
	& > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown > .ck.ck-button {
		background: transparent;
	}

	/* When the dropdown is "empty", the labeled field label replaces its label. */
	&.ck-labeled-field-view_empty > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown > .ck-button > .ck-button__label {
		opacity: 0;
	}

	/* Make sure the label of the empty, unfocused input does not cover the dropdown arrow. */
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder) > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown + .ck-label {
		max-width: calc(var(--ck-labeled-field-empty-unfocused-max-width) - var(--ck-dropdown-arrow-size) - var(--ck-spacing-standard));
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const C=_},1046:(k,b,g)=>{g.d(b,{Z:()=>C});var v=g(1799),A=g.n(v),x=g(2609),_=g.n(x)()(A());_.push([k.id,".ck.ck-list{display:flex;flex-direction:column;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-list .ck-list__item,.ck.ck-list .ck-list__separator{display:block}.ck.ck-list .ck-list__item>:focus{position:relative;z-index:var(--ck-z-default)}.ck.ck-list{border-radius:0}.ck-rounded-corners .ck.ck-list,.ck.ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-list{background:var(--ck-color-list-background);list-style-type:none}.ck.ck-list__item{cursor:default;min-width:12em}.ck.ck-list__item .ck-button{border-radius:0;min-height:unset;padding:calc(var(--ck-line-height-base)*.2*var(--ck-font-size-base)) calc(var(--ck-line-height-base)*.4*var(--ck-font-size-base));text-align:left;width:100%}.ck.ck-list__item .ck-button .ck-button__label{line-height:calc(var(--ck-line-height-base)*1.2*var(--ck-font-size-base))}.ck.ck-list__item .ck-button:active{box-shadow:none}.ck.ck-list__item .ck-button.ck-on{background:var(--ck-color-list-button-on-background);color:var(--ck-color-list-button-on-text)}.ck.ck-list__item .ck-button.ck-on:active{box-shadow:none}.ck.ck-list__item .ck-button.ck-on:hover:not(.ck-disabled){background:var(--ck-color-list-button-on-background-focus)}.ck.ck-list__item .ck-button.ck-on:focus:not(.ck-switchbutton):not(.ck-disabled){border-color:var(--ck-color-base-background)}.ck.ck-list__item .ck-button:hover:not(.ck-disabled){background:var(--ck-color-list-button-hover-background)}.ck.ck-list__item .ck-switchbutton.ck-on{background:var(--ck-color-list-background);color:inherit}.ck.ck-list__item .ck-switchbutton.ck-on:hover:not(.ck-disabled){background:var(--ck-color-list-button-hover-background);color:inherit}.ck.ck-list__separator{background:var(--ck-color-base-border);height:1px;width:100%}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/list/list.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/list/list.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,YAGC,YAAa,CACb,qBAAsB,CCFtB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBDaD,CAZC,2DAEC,aACD,CAKA,kCACC,iBAAkB,CAClB,2BACD,CEfD,YCEC,eDGD,CALA,+DCME,qCDDF,CALA,YAIC,0CAA2C,CAD3C,oBAED,CAEA,kBACC,cAAe,CACf,cA2DD,CAzDC,6BAIC,eAAgB,CAHhB,gBAAiB,CAQjB,iIAEiE,CARjE,eAAgB,CADhB,UAwCD,CA7BC,+CAEC,yEACD,CAEA,oCACC,eACD,CAEA,mCACC,oDAAqD,CACrD,yCAaD,CAXC,0CACC,eACD,CAEA,2DACC,0DACD,CAEA,iFACC,4CACD,CAGD,qDACC,uDACD,CAMA,yCACC,0CAA2C,CAC3C,aAMD,CAJC,iEACC,uDAAwD,CACxD,aACD,CAKH,uBAGC,sCAAuC,CAFvC,UAAW,CACX,UAED",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";

.ck.ck-list {
	@mixin ck-unselectable;

	display: flex;
	flex-direction: column;

	& .ck-list__item,
	& .ck-list__separator {
		display: block;
	}

	/* Make sure that whatever child of the list item gets focus, it remains on the
	top. Thanks to that, styles like box-shadow, outline, etc. are not masked by
	adjacent list items. */
	& .ck-list__item > *:focus {
		position: relative;
		z-index: var(--ck-z-default);
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_disabled.css";
@import "../../../mixins/_rounded.css";
@import "../../../mixins/_shadow.css";

.ck.ck-list {
	@mixin ck-rounded-corners;

	list-style-type: none;
	background: var(--ck-color-list-background);
}

.ck.ck-list__item {
	cursor: default;
	min-width: 12em;

	& .ck-button {
		min-height: unset;
		width: 100%;
		text-align: left;
		border-radius: 0;

		/* List items should have the same height. Use absolute units to make sure it is so
		   because e.g. different heading styles may have different height
		   https://github.com/ckeditor/ckeditor5-heading/issues/63 */
		padding:
			calc(.2 * var(--ck-line-height-base) * var(--ck-font-size-base))
			calc(.4 * var(--ck-line-height-base) * var(--ck-font-size-base));

		& .ck-button__label {
			/* https://github.com/ckeditor/ckeditor5-heading/issues/63 */
			line-height: calc(1.2 * var(--ck-line-height-base) * var(--ck-font-size-base));
		}

		&:active {
			box-shadow: none;
		}

		&.ck-on {
			background: var(--ck-color-list-button-on-background);
			color: var(--ck-color-list-button-on-text);

			&:active {
				box-shadow: none;
			}

			&:hover:not(.ck-disabled) {
				background: var(--ck-color-list-button-on-background-focus);
			}

			&:focus:not(.ck-switchbutton):not(.ck-disabled) {
				border-color: var(--ck-color-base-background);
			}
		}

		&:hover:not(.ck-disabled) {
			background: var(--ck-color-list-button-hover-background);
		}
	}

	/* It's unnecessary to change the background/text of a switch toggle; it has different ways
	of conveying its state (like the switcher) */
	& .ck-switchbutton {
		&.ck-on {
			background: var(--ck-color-list-background);
			color: inherit;

			&:hover:not(.ck-disabled) {
				background: var(--ck-color-list-button-hover-background);
				color: inherit;
			}
		}
	}
}

.ck.ck-list__separator {
	height: 1px;
	width: 100%;
	background: var(--ck-color-base-border);
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const C=_},8793:(k,b,g)=>{g.d(b,{Z:()=>C});var v=g(1799),A=g.n(v),x=g(2609),_=g.n(x)()(A());_.push([k.id,':root{--ck-balloon-panel-arrow-z-index:calc(var(--ck-z-default) - 3)}.ck.ck-balloon-panel{display:none;position:absolute;z-index:var(--ck-z-modal)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{content:"";position:absolute}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=arrow_n]:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=arrow_n]:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=arrow_s]:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=arrow_s]:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel.ck-balloon-panel_visible{display:block}:root{--ck-balloon-border-width:1px;--ck-balloon-arrow-offset:2px;--ck-balloon-arrow-height:10px;--ck-balloon-arrow-half-width:8px;--ck-balloon-arrow-drop-shadow:0 2px 2px var(--ck-color-shadow-drop)}.ck.ck-balloon-panel{border-radius:0}.ck-rounded-corners .ck.ck-balloon-panel,.ck.ck-balloon-panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-balloon-panel{background:var(--ck-color-panel-background);border:var(--ck-balloon-border-width) solid var(--ck-color-panel-border);box-shadow:var(--ck-drop-shadow),0 0;min-height:15px}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{border-style:solid;height:0;width:0}.ck.ck-balloon-panel[class*=arrow_n]:after,.ck.ck-balloon-panel[class*=arrow_n]:before{border-width:0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width)}.ck.ck-balloon-panel[class*=arrow_n]:before{border-color:transparent transparent var(--ck-color-panel-border) transparent;margin-top:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_n]:after{border-color:transparent transparent var(--ck-color-panel-background) transparent;margin-top:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_s]:after,.ck.ck-balloon-panel[class*=arrow_s]:before{border-width:var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width)}.ck.ck-balloon-panel[class*=arrow_s]:before{border-color:var(--ck-color-panel-border) transparent transparent;filter:drop-shadow(var(--ck-balloon-arrow-drop-shadow));margin-bottom:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_s]:after{border-color:var(--ck-color-panel-background) transparent transparent transparent;margin-bottom:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_e]:after,.ck.ck-balloon-panel[class*=arrow_e]:before{border-width:var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height)}.ck.ck-balloon-panel[class*=arrow_e]:before{border-color:transparent transparent transparent var(--ck-color-panel-border);margin-right:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_e]:after{border-color:transparent transparent transparent var(--ck-color-panel-background);margin-right:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_w]:after,.ck.ck-balloon-panel[class*=arrow_w]:before{border-width:var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0}.ck.ck-balloon-panel[class*=arrow_w]:before{border-color:transparent var(--ck-color-panel-border) transparent transparent;margin-left:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_w]:after{border-color:transparent var(--ck-color-panel-background) transparent transparent;margin-left:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:before{left:50%;margin-left:calc(var(--ck-balloon-arrow-half-width)*-1);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:before{left:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:before{right:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:50%;margin-left:calc(var(--ck-balloon-arrow-half-width)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);right:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_sme:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_sme:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);margin-right:calc(var(--ck-balloon-arrow-half-width)*2);right:25%}.ck.ck-balloon-panel.ck-balloon-panel_arrow_smw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_smw:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:25%;margin-left:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nme:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nme:before{margin-right:calc(var(--ck-balloon-arrow-half-width)*2);right:25%;top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nmw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nmw:before{left:25%;margin-left:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_e:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_e:before{margin-top:calc(var(--ck-balloon-arrow-half-width)*-1);right:calc(var(--ck-balloon-arrow-height)*-1);top:50%}.ck.ck-balloon-panel.ck-balloon-panel_arrow_w:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_w:before{left:calc(var(--ck-balloon-arrow-height)*-1);margin-top:calc(var(--ck-balloon-arrow-half-width)*-1);top:50%}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/balloonpanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/balloonpanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,MAEC,8DACD,CAEA,qBACC,YAAa,CACb,iBAAkB,CAElB,yBAyCD,CAtCE,+GAEC,UAAW,CACX,iBACD,CAEA,wDACC,6CACD,CAEA,uDACC,uDACD,CAIA,4CACC,6CACD,CAEA,2CACC,uDACD,CAIA,4CACC,6CACD,CAEA,2CACC,uDACD,CAGD,8CACC,aACD,CC9CD,MACC,6BAA8B,CAC9B,6BAA8B,CAC9B,8BAA+B,CAC/B,iCAAkC,CAClC,oEACD,CAEA,qBCLC,eDmMD,CA9LA,iFCDE,qCD+LF,CA9LA,qBAMC,2CAA4C,CAC5C,wEAAyE,CEdzE,oCAA8B,CFW9B,eA0LD,CApLE,+GAIC,kBAAmB,CADnB,QAAS,CADT,OAGD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,kDACD,CAEA,2CACC,iFAAkF,CAClF,gFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,iEAAkE,CAClE,uDAAwD,CACxD,qDACD,CAEA,2CACC,iFAAkF,CAClF,mFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,oDACD,CAEA,2CACC,iFAAkF,CAClF,kFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,mDACD,CAEA,2CACC,iFAAkF,CAClF,iFACD,CAIA,yGAEC,QAAS,CACT,uDAA0D,CAC1D,2CACD,CAIA,2GAEC,+CAAkD,CAClD,2CACD,CAIA,2GAEC,gDAAmD,CACnD,2CACD,CAIA,yGAIC,8CAAiD,CAFjD,QAAS,CACT,uDAED,CAIA,2GAGC,8CAAiD,CADjD,+CAED,CAIA,2GAGC,8CAAiD,CADjD,gDAED,CAIA,6GAIC,8CAAiD,CADjD,uDAA0D,CAD1D,SAGD,CAIA,6GAIC,8CAAiD,CAFjD,QAAS,CACT,sDAED,CAIA,6GAGC,uDAA0D,CAD1D,SAAU,CAEV,2CACD,CAIA,6GAEC,QAAS,CACT,sDAAyD,CACzD,2CACD,CAIA,yGAGC,sDAAyD,CADzD,6CAAgD,CAEhD,OACD,CAIA,yGAEC,4CAA+C,CAC/C,sDAAyD,CACzD,OACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* Make sure the balloon arrow does not float over its children. */
	--ck-balloon-panel-arrow-z-index: calc(var(--ck-z-default) - 3);
}

.ck.ck-balloon-panel {
	display: none;
	position: absolute;

	z-index: var(--ck-z-modal);

	&.ck-balloon-panel_with-arrow {
		&::before,
		&::after {
			content: "";
			position: absolute;
		}

		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&[class*="arrow_n"] {
		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&[class*="arrow_s"] {
		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&.ck-balloon-panel_visible {
		display: block;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_shadow.css";

:root {
	--ck-balloon-border-width: 1px;
	--ck-balloon-arrow-offset: 2px;
	--ck-balloon-arrow-height: 10px;
	--ck-balloon-arrow-half-width: 8px;
	--ck-balloon-arrow-drop-shadow: 0 2px 2px var(--ck-color-shadow-drop);
}

.ck.ck-balloon-panel {
	@mixin ck-rounded-corners;
	@mixin ck-drop-shadow;

	min-height: 15px;

	background: var(--ck-color-panel-background);
	border: var(--ck-balloon-border-width) solid var(--ck-color-panel-border);

	&.ck-balloon-panel_with-arrow {
		&::before,
		&::after {
			width: 0;
			height: 0;
			border-style: solid;
		}
	}

	&[class*="arrow_n"] {
		&::before,
		&::after {
			border-width: 0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width);
		}

		&::before {
			border-color: transparent transparent var(--ck-color-panel-border) transparent;
			margin-top: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: transparent transparent var(--ck-color-panel-background) transparent;
			margin-top: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&[class*="arrow_s"] {
		&::before,
		&::after {
			border-width: var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width);
		}

		&::before {
			border-color: var(--ck-color-panel-border) transparent transparent;
			filter: drop-shadow(var(--ck-balloon-arrow-drop-shadow));
			margin-bottom: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: var(--ck-color-panel-background) transparent transparent transparent;
			margin-bottom: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&[class*="arrow_e"] {
		&::before,
		&::after {
			border-width: var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height);
		}

		&::before {
			border-color: transparent transparent transparent var(--ck-color-panel-border);
			margin-right: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: transparent transparent transparent var(--ck-color-panel-background);
			margin-right: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&[class*="arrow_w"] {
		&::before,
		&::after {
			border-width: var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0;
		}

		&::before {
			border-color: transparent var(--ck-color-panel-border) transparent transparent;
			margin-left: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: transparent var(--ck-color-panel-background) transparent transparent;
			margin-left: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&.ck-balloon-panel_arrow_n {
		&::before,
		&::after {
			left: 50%;
			margin-left: calc(-1 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nw {
		&::before,
		&::after {
			left: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_ne {
		&::before,
		&::after {
			right: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_s {
		&::before,
		&::after {
			left: 50%;
			margin-left: calc(-1 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_sw {
		&::before,
		&::after {
			left: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_se {
		&::before,
		&::after {
			right: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_sme {
		&::before,
		&::after {
			right: 25%;
			margin-right: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_smw {
		&::before,
		&::after {
			left: 25%;
			margin-left: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nme {
		&::before,
		&::after {
			right: 25%;
			margin-right: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nmw {
		&::before,
		&::after {
			left: 25%;
			margin-left: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_e {
		&::before,
		&::after {
			right: calc(-1 * var(--ck-balloon-arrow-height));
			margin-top: calc(-1 * var(--ck-balloon-arrow-half-width));
			top: 50%;
		}
	}

	&.ck-balloon-panel_arrow_w {
		&::before,
		&::after {
			left: calc(-1 * var(--ck-balloon-arrow-height));
			margin-top: calc(-1 * var(--ck-balloon-arrow-half-width));
			top: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const C=_},4650:(k,b,g)=>{g.d(b,{Z:()=>C});var v=g(1799),A=g.n(v),x=g(2609),_=g.n(x)()(A());_.push([k.id,".ck .ck-balloon-rotator__navigation{align-items:center;display:flex;justify-content:center}.ck .ck-balloon-rotator__content .ck-toolbar{justify-content:center}.ck .ck-balloon-rotator__navigation{background:var(--ck-color-toolbar-background);border-bottom:1px solid var(--ck-color-toolbar-border);padding:0 var(--ck-spacing-small)}.ck .ck-balloon-rotator__navigation>*{margin-bottom:var(--ck-spacing-small);margin-right:var(--ck-spacing-small);margin-top:var(--ck-spacing-small)}.ck .ck-balloon-rotator__navigation .ck-balloon-rotator__counter{margin-left:var(--ck-spacing-small);margin-right:var(--ck-spacing-standard)}.ck .ck-balloon-rotator__content .ck.ck-annotation-wrapper{box-shadow:none}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/balloonrotator.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/balloonrotator.css"],names:[],mappings:"AAKA,oCAEC,kBAAmB,CADnB,YAAa,CAEb,sBACD,CAKA,6CACC,sBACD,CCXA,oCACC,6CAA8C,CAC9C,sDAAuD,CACvD,iCAgBD,CAbC,sCAGC,qCAAsC,CAFtC,oCAAqC,CACrC,kCAED,CAGA,iEAIC,mCAAoC,CAHpC,uCAID,CAMA,2DACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-balloon-rotator__navigation {
	display: flex;
	align-items: center;
	justify-content: center;
}

/* Buttons inside a toolbar should be centered when rotator bar is wider.
 * See: https://github.com/ckeditor/ckeditor5-ui/issues/495
 */
.ck .ck-balloon-rotator__content .ck-toolbar {
	justify-content: center;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-balloon-rotator__navigation {
	background: var(--ck-color-toolbar-background);
	border-bottom: 1px solid var(--ck-color-toolbar-border);
	padding: 0 var(--ck-spacing-small);

	/* Let's keep similar appearance to \`ck-toolbar\`. */
	& > * {
		margin-right: var(--ck-spacing-small);
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	/* Gives counter more breath than buttons. */
	& .ck-balloon-rotator__counter {
		margin-right: var(--ck-spacing-standard);

		/* We need to use smaller margin because of previous button's right margin. */
		margin-left: var(--ck-spacing-small);
	}
}

.ck .ck-balloon-rotator__content {

	/* Disable default annotation shadow inside rotator with fake panels. */
	& .ck.ck-annotation-wrapper {
		box-shadow: none;
	}
}
`],sourceRoot:""}]);const C=_},7676:(k,b,g)=>{g.d(b,{Z:()=>C});var v=g(1799),A=g.n(v),x=g(2609),_=g.n(x)()(A());_.push([k.id,".ck .ck-fake-panel{position:absolute;z-index:calc(var(--ck-z-modal) - 1)}.ck .ck-fake-panel div{position:absolute}.ck .ck-fake-panel div:first-child{z-index:2}.ck .ck-fake-panel div:nth-child(2){z-index:1}:root{--ck-balloon-fake-panel-offset-horizontal:6px;--ck-balloon-fake-panel-offset-vertical:6px}.ck .ck-fake-panel div{background:var(--ck-color-panel-background);border:1px solid var(--ck-color-panel-border);border-radius:var(--ck-border-radius);box-shadow:var(--ck-drop-shadow),0 0;height:100%;min-height:15px;width:100%}.ck .ck-fake-panel div:first-child{margin-left:var(--ck-balloon-fake-panel-offset-horizontal);margin-top:var(--ck-balloon-fake-panel-offset-vertical)}.ck .ck-fake-panel div:nth-child(2){margin-left:calc(var(--ck-balloon-fake-panel-offset-horizontal)*2);margin-top:calc(var(--ck-balloon-fake-panel-offset-vertical)*2)}.ck .ck-fake-panel div:nth-child(3){margin-left:calc(var(--ck-balloon-fake-panel-offset-horizontal)*3);margin-top:calc(var(--ck-balloon-fake-panel-offset-vertical)*3)}.ck .ck-balloon-panel_arrow_s+.ck-fake-panel,.ck .ck-balloon-panel_arrow_se+.ck-fake-panel,.ck .ck-balloon-panel_arrow_sw+.ck-fake-panel{--ck-balloon-fake-panel-offset-vertical:-6px}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/fakepanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/fakepanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,mBACC,iBAAkB,CAGlB,mCACD,CAEA,uBACC,iBACD,CAEA,mCACC,SACD,CAEA,oCACC,SACD,CCfA,MACC,6CAA8C,CAC9C,2CACD,CAGA,uBAKC,2CAA4C,CAC5C,6CAA8C,CAC9C,qCAAsC,CCXtC,oCAA8B,CDc9B,WAAY,CAPZ,eAAgB,CAMhB,UAED,CAEA,mCACC,0DAA2D,CAC3D,uDACD,CAEA,oCACC,kEAAqE,CACrE,+DACD,CACA,oCACC,kEAAqE,CACrE,+DACD,CAGA,yIAGC,4CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-fake-panel {
	position: absolute;

	/* Fake panels should be placed under main balloon content. */
	z-index: calc(var(--ck-z-modal) - 1);
}

.ck .ck-fake-panel div {
	position: absolute;
}

.ck .ck-fake-panel div:nth-child( 1 ) {
	z-index: 2;
}

.ck .ck-fake-panel div:nth-child( 2 ) {
	z-index: 1;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_shadow.css";

:root {
	--ck-balloon-fake-panel-offset-horizontal: 6px;
	--ck-balloon-fake-panel-offset-vertical: 6px;
}

/* Let's use \`.ck-balloon-panel\` appearance. See: balloonpanel.css. */
.ck .ck-fake-panel div {
	@mixin ck-drop-shadow;

	min-height: 15px;

	background: var(--ck-color-panel-background);
	border: 1px solid var(--ck-color-panel-border);
	border-radius: var(--ck-border-radius);

	width: 100%;
	height: 100%;
}

.ck .ck-fake-panel div:nth-child( 1 ) {
	margin-left: var(--ck-balloon-fake-panel-offset-horizontal);
	margin-top: var(--ck-balloon-fake-panel-offset-vertical);
}

.ck .ck-fake-panel div:nth-child( 2 ) {
	margin-left: calc(var(--ck-balloon-fake-panel-offset-horizontal) * 2);
	margin-top: calc(var(--ck-balloon-fake-panel-offset-vertical) * 2);
}
.ck .ck-fake-panel div:nth-child( 3 ) {
	margin-left: calc(var(--ck-balloon-fake-panel-offset-horizontal) * 3);
	margin-top: calc(var(--ck-balloon-fake-panel-offset-vertical) * 3);
}

/* If balloon is positioned above element, we need to move fake panel to the top. */
.ck .ck-balloon-panel_arrow_s + .ck-fake-panel,
.ck .ck-balloon-panel_arrow_se + .ck-fake-panel,
.ck .ck-balloon-panel_arrow_sw + .ck-fake-panel {
	--ck-balloon-fake-panel-offset-vertical: -6px;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const C=_},5868:(k,b,g)=>{g.d(b,{Z:()=>C});var v=g(1799),A=g.n(v),x=g(2609),_=g.n(x)()(A());_.push([k.id,".ck.ck-sticky-panel .ck-sticky-panel__content_sticky{position:fixed;top:0;z-index:var(--ck-z-modal)}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky_bottom-limit{position:absolute;top:auto}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky{border-top-left-radius:0;border-top-right-radius:0;border-width:0 1px 1px;box-shadow:var(--ck-drop-shadow),0 0}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/stickypanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/stickypanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAMC,qDAEC,cAAe,CACf,KAAM,CAFN,yBAGD,CAEA,kEAEC,iBAAkB,CADlB,QAED,CCPA,qDAIC,wBAAyB,CACzB,yBAA0B,CAF1B,sBAAuB,CCFxB,oCDKA",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-sticky-panel {
	& .ck-sticky-panel__content_sticky {
		z-index: var(--ck-z-modal); /* #315 */
		position: fixed;
		top: 0;
	}

	& .ck-sticky-panel__content_sticky_bottom-limit {
		top: auto;
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_shadow.css";

.ck.ck-sticky-panel {
	& .ck-sticky-panel__content_sticky {
		@mixin ck-drop-shadow;

		border-width: 0 1px 1px;
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const C=_},6764:(k,b,g)=>{g.d(b,{Z:()=>C});var v=g(1799),A=g.n(v),x=g(2609),_=g.n(x)()(A());_.push([k.id,'.ck-vertical-form .ck-button:after{bottom:-1px;content:"";position:absolute;right:-1px;top:-1px;width:0;z-index:1}.ck-vertical-form .ck-button:focus:after{display:none}@media screen and (max-width:600px){.ck.ck-responsive-form .ck-button:after{bottom:-1px;content:"";position:absolute;right:-1px;top:-1px;width:0;z-index:1}.ck.ck-responsive-form .ck-button:focus:after{display:none}}.ck-vertical-form>.ck-button:nth-last-child(2):after{border-right:1px solid var(--ck-color-base-border)}.ck.ck-responsive-form{padding:var(--ck-spacing-large)}.ck.ck-responsive-form:focus{outline:none}[dir=ltr] .ck.ck-responsive-form>:not(:first-child),[dir=rtl] .ck.ck-responsive-form>:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-responsive-form{padding:0;width:calc(var(--ck-input-width)*.8)}.ck.ck-responsive-form .ck-labeled-field-view{margin:var(--ck-spacing-large) var(--ck-spacing-large) 0}.ck.ck-responsive-form .ck-labeled-field-view .ck-input-text{min-width:0;width:100%}.ck.ck-responsive-form .ck-labeled-field-view .ck-labeled-field-view__error{white-space:normal}.ck.ck-responsive-form>.ck-button:nth-last-child(2):after{border-right:1px solid var(--ck-color-base-border)}.ck.ck-responsive-form>.ck-button:last-child,.ck.ck-responsive-form>.ck-button:nth-last-child(2){border-radius:0;margin-top:var(--ck-spacing-large);padding:var(--ck-spacing-standard)}.ck.ck-responsive-form>.ck-button:last-child:not(:focus),.ck.ck-responsive-form>.ck-button:nth-last-child(2):not(:focus){border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-responsive-form>.ck-button:last-child,[dir=ltr] .ck.ck-responsive-form>.ck-button:nth-last-child(2),[dir=rtl] .ck.ck-responsive-form>.ck-button:last-child,[dir=rtl] .ck.ck-responsive-form>.ck-button:nth-last-child(2){margin-left:0}[dir=rtl] .ck.ck-responsive-form>.ck-button:last-child:last-of-type,[dir=rtl] .ck.ck-responsive-form>.ck-button:nth-last-child(2):last-of-type{border-right:1px solid var(--ck-color-base-border)}}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/responsive-form/responsiveform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/responsive-form/responsiveform.css"],names:[],mappings:"AAQC,mCAMC,WAAY,CALZ,UAAW,CAEX,iBAAkB,CAClB,UAAW,CACX,QAAS,CAHT,OAAQ,CAKR,SACD,CAEA,yCACC,YACD,CCdA,oCDoBE,wCAMC,WAAY,CALZ,UAAW,CAEX,iBAAkB,CAClB,UAAW,CACX,QAAS,CAHT,OAAQ,CAKR,SACD,CAEA,8CACC,YACD,CC9BF,CCAD,qDACC,kDACD,CAEA,uBACC,+BAmED,CAjEC,6BAEC,YACD,CASC,uGACC,sCACD,CDvBD,oCCMD,uBAqBE,SAAU,CACV,oCA8CF,CA5CE,8CACC,wDAWD,CATC,6DACC,WAAY,CACZ,UACD,CAGA,4EACC,kBACD,CAKA,0DACC,kDACD,CAGD,iGAIC,eAAgB,CADhB,kCAAmC,CADnC,kCAmBD,CAfC,yHACC,gDACD,CARD,0OAeE,aAMF,CAJE,+IACC,kDACD,CDpEH",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck-vertical-form .ck-button {
	&::after {
		content: "";
		width: 0;
		position: absolute;
		right: -1px;
		top: -1px;
		bottom: -1px;
		z-index: 1;
	}

	&:focus::after {
		display: none;
	}
}

.ck.ck-responsive-form {
	@mixin ck-media-phone {
		& .ck-button {
			&::after {
				content: "";
				width: 0;
				position: absolute;
				right: -1px;
				top: -1px;
				bottom: -1px;
				z-index: 1;
			}

			&:focus::after {
				display: none;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck-vertical-form > .ck-button:nth-last-child(2)::after {
	border-right: 1px solid var(--ck-color-base-border);
}

.ck.ck-responsive-form {
	padding: var(--ck-spacing-large);

	&:focus {
		/* See: https://github.com/ckeditor/ckeditor5/issues/4773 */
		outline: none;
	}

	@mixin ck-dir ltr {
		& > :not(:first-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& > :not(:last-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-media-phone {
		padding: 0;
		width: calc(.8 * var(--ck-input-width));

		& .ck-labeled-field-view {
			margin: var(--ck-spacing-large) var(--ck-spacing-large) 0;

			& .ck-input-text {
				min-width: 0;
				width: 100%;
			}

			/* Let the long error messages wrap in the narrow form. */
			& .ck-labeled-field-view__error {
				white-space: normal;
			}
		}

		/* Styles for two last buttons in the form (save&cancel, edit&unlink, etc.). */
		& > .ck-button:nth-last-child(2) {
			&::after {
				border-right: 1px solid var(--ck-color-base-border);
			}
		}

		& > .ck-button:nth-last-child(1),
		& > .ck-button:nth-last-child(2) {
			padding: var(--ck-spacing-standard);
			margin-top: var(--ck-spacing-large);
			border-radius: 0;

			&:not(:focus) {
				border-top: 1px solid var(--ck-color-base-border);
			}

			@mixin ck-dir ltr {
				margin-left: 0;
			}

			@mixin ck-dir rtl {
				margin-left: 0;

				&:last-of-type {
					border-right: 1px solid var(--ck-color-base-border);
				}
			}
		}
	}
}
`],sourceRoot:""}]);const C=_},9695:(k,b,g)=>{g.d(b,{Z:()=>C});var v=g(1799),A=g.n(v),x=g(2609),_=g.n(x)()(A());_.push([k.id,".ck.ck-block-toolbar-button{position:absolute;z-index:var(--ck-z-default)}:root{--ck-color-block-toolbar-button:var(--ck-color-text);--ck-block-toolbar-button-size:var(--ck-font-size-normal)}.ck.ck-block-toolbar-button{color:var(--ck-color-block-toolbar-button);font-size:var(--ck-block-toolbar-size)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/toolbar/blocktoolbar.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/toolbar/blocktoolbar.css"],names:[],mappings:"AAKA,4BACC,iBAAkB,CAClB,2BACD,CCHA,MACC,oDAAqD,CACrD,yDACD,CAEA,4BACC,0CAA2C,CAC3C,sCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-block-toolbar-button {
	position: absolute;
	z-index: var(--ck-z-default);
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-block-toolbar-button: var(--ck-color-text);
	--ck-block-toolbar-button-size: var(--ck-font-size-normal);
}

.ck.ck-block-toolbar-button {
	color: var(--ck-color-block-toolbar-button);
	font-size: var(--ck-block-toolbar-size);
}
`],sourceRoot:""}]);const C=_},5542:(k,b,g)=>{g.d(b,{Z:()=>C});var v=g(1799),A=g.n(v),x=g(2609),_=g.n(x)()(A());_.push([k.id,".ck.ck-toolbar{align-items:center;display:flex;flex-flow:row nowrap;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-toolbar>.ck-toolbar__items{align-items:center;display:flex;flex-flow:row wrap;flex-grow:1}.ck.ck-toolbar .ck.ck-toolbar__separator{display:inline-block}.ck.ck-toolbar .ck.ck-toolbar__separator:first-child,.ck.ck-toolbar .ck.ck-toolbar__separator:last-child{display:none}.ck.ck-toolbar .ck-toolbar__line-break{flex-basis:100%}.ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items{flex-wrap:nowrap}.ck.ck-toolbar.ck-toolbar_vertical>.ck-toolbar__items{flex-direction:column}.ck.ck-toolbar.ck-toolbar_floating>.ck-toolbar__items{flex-wrap:nowrap}.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown>.ck-dropdown__button .ck-dropdown__arrow{display:none}.ck.ck-toolbar{border-radius:0}.ck-rounded-corners .ck.ck-toolbar,.ck.ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-toolbar{background:var(--ck-color-toolbar-background);border:1px solid var(--ck-color-toolbar-border);padding:0 var(--ck-spacing-small)}.ck.ck-toolbar .ck.ck-toolbar__separator{align-self:stretch;background:var(--ck-color-toolbar-border);margin-bottom:var(--ck-spacing-small);margin-top:var(--ck-spacing-small);min-width:1px;width:1px}.ck.ck-toolbar .ck-toolbar__line-break{height:0}.ck.ck-toolbar>.ck-toolbar__items>:not(.ck-toolbar__line-break){margin-right:var(--ck-spacing-small)}.ck.ck-toolbar>.ck-toolbar__items:empty+.ck.ck-toolbar__separator{display:none}.ck.ck-toolbar>.ck-toolbar__items>:not(.ck-toolbar__line-break),.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown{margin-bottom:var(--ck-spacing-small);margin-top:var(--ck-spacing-small)}.ck.ck-toolbar.ck-toolbar_vertical{padding:0}.ck.ck-toolbar.ck-toolbar_vertical>.ck-toolbar__items>.ck{border-radius:0;margin:0;width:100%}.ck.ck-toolbar.ck-toolbar_compact{padding:0}.ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>*{margin:0}.ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>:not(:first-child):not(:last-child){border-radius:0}.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown>.ck.ck-button.ck-dropdown__button{padding-left:var(--ck-spacing-tiny)}.ck.ck-toolbar .ck-toolbar__nested-toolbar-dropdown>.ck-dropdown__panel{min-width:auto}.ck.ck-toolbar .ck-toolbar__nested-toolbar-dropdown>.ck-button>.ck-button__label{max-width:7em;width:auto}.ck.ck-toolbar:focus{outline:none}.ck-toolbar-container .ck.ck-toolbar{border:0}.ck.ck-toolbar[dir=rtl]>.ck-toolbar__items>.ck,[dir=rtl] .ck.ck-toolbar>.ck-toolbar__items>.ck{margin-right:0}.ck.ck-toolbar[dir=rtl]:not(.ck-toolbar_compact)>.ck-toolbar__items>.ck,[dir=rtl] .ck.ck-toolbar:not(.ck-toolbar_compact)>.ck-toolbar__items>.ck{margin-left:var(--ck-spacing-small)}.ck.ck-toolbar[dir=rtl]>.ck-toolbar__items>.ck:last-child,[dir=rtl] .ck.ck-toolbar>.ck-toolbar__items>.ck:last-child{margin-left:0}.ck.ck-toolbar.ck-toolbar_compact[dir=rtl]>.ck-toolbar__items>.ck:first-child,[dir=rtl] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:first-child{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-toolbar.ck-toolbar_compact[dir=rtl]>.ck-toolbar__items>.ck:last-child,[dir=rtl] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:last-child{border-bottom-right-radius:0;border-top-right-radius:0}.ck.ck-toolbar.ck-toolbar_grouping[dir=rtl]>.ck-toolbar__items:not(:empty):not(:only-child),.ck.ck-toolbar[dir=rtl]>.ck.ck-toolbar__separator,[dir=rtl] .ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items:not(:empty):not(:only-child),[dir=rtl] .ck.ck-toolbar>.ck.ck-toolbar__separator{margin-left:var(--ck-spacing-small)}.ck.ck-toolbar[dir=ltr]>.ck-toolbar__items>.ck:last-child,[dir=ltr] .ck.ck-toolbar>.ck-toolbar__items>.ck:last-child{margin-right:0}.ck.ck-toolbar.ck-toolbar_compact[dir=ltr]>.ck-toolbar__items>.ck:first-child,[dir=ltr] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:first-child{border-bottom-right-radius:0;border-top-right-radius:0}.ck.ck-toolbar.ck-toolbar_compact[dir=ltr]>.ck-toolbar__items>.ck:last-child,[dir=ltr] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:last-child{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-toolbar.ck-toolbar_grouping[dir=ltr]>.ck-toolbar__items:not(:empty):not(:only-child),.ck.ck-toolbar[dir=ltr]>.ck.ck-toolbar__separator,[dir=ltr] .ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items:not(:empty):not(:only-child),[dir=ltr] .ck.ck-toolbar>.ck.ck-toolbar__separator{margin-right:var(--ck-spacing-small)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/toolbar/toolbar.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/toolbar/toolbar.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,eAKC,kBAAmB,CAFnB,YAAa,CACb,oBAAqB,CCFrB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBD6CD,CA3CC,kCAGC,kBAAmB,CAFnB,YAAa,CACb,kBAAmB,CAEnB,WAED,CAEA,yCACC,oBAWD,CAJC,yGAEC,YACD,CAGD,uCACC,eACD,CAEA,sDACC,gBACD,CAEA,sDACC,qBACD,CAEA,sDACC,gBACD,CAGC,yFACC,YACD,CE/CF,eCGC,eDwGD,CA3GA,qECOE,qCDoGF,CA3GA,eAGC,6CAA8C,CAE9C,+CAAgD,CADhD,iCAuGD,CApGC,yCACC,kBAAmB,CAGnB,yCAA0C,CAO1C,qCAAsC,CADtC,kCAAmC,CAPnC,aAAc,CADd,SAUD,CAEA,uCACC,QACD,CAGC,gEAEC,oCACD,CAIA,kEACC,YACD,CAGD,gHAIC,qCAAsC,CADtC,kCAED,CAEA,mCAEC,SAaD,CAVC,0DAQC,eAAgB,CAHhB,QAAS,CAHT,UAOD,CAGD,kCAEC,SAWD,CATC,uDAEC,QAMD,CAHC,yFACC,eACD,CASD,kFACC,mCACD,CAMA,wEACC,cACD,CAEA,iFACC,aAAc,CACd,UACD,CAGD,qBACC,YACD,CAtGD,qCAyGE,QAEF,CAYC,+FACC,cACD,CAEA,iJAEC,mCACD,CAEA,qHACC,aACD,CAIC,6JAEC,2BAA4B,CAD5B,wBAED,CAGA,2JAEC,4BAA6B,CAD7B,yBAED,CASD,8RACC,mCACD,CAWA,qHACC,cACD,CAIC,6JAEC,4BAA6B,CAD7B,yBAED,CAGA,2JAEC,2BAA4B,CAD5B,wBAED,CASD,8RACC,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";

.ck.ck-toolbar {
	@mixin ck-unselectable;

	display: flex;
	flex-flow: row nowrap;
	align-items: center;

	& > .ck-toolbar__items {
		display: flex;
		flex-flow: row wrap;
		align-items: center;
		flex-grow: 1;

	}

	& .ck.ck-toolbar__separator {
		display: inline-block;

		/*
		 * A leading or trailing separator makes no sense (separates from nothing on one side).
		 * For instance, it can happen when toolbar items (also separators) are getting grouped one by one and
		 * moved to another toolbar in the dropdown.
		 */
		&:first-child,
		&:last-child {
			display: none;
		}
	}

	& .ck-toolbar__line-break {
		flex-basis: 100%;
	}

	&.ck-toolbar_grouping > .ck-toolbar__items {
		flex-wrap: nowrap;
	}

	&.ck-toolbar_vertical > .ck-toolbar__items {
		flex-direction: column;
	}

	&.ck-toolbar_floating > .ck-toolbar__items {
		flex-wrap: nowrap;
	}

	& > .ck.ck-toolbar__grouped-dropdown {
		& > .ck-dropdown__button .ck-dropdown__arrow {
			display: none;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-toolbar {
	@mixin ck-rounded-corners;

	background: var(--ck-color-toolbar-background);
	padding: 0 var(--ck-spacing-small);
	border: 1px solid var(--ck-color-toolbar-border);

	& .ck.ck-toolbar__separator {
		align-self: stretch;
		width: 1px;
		min-width: 1px;
		background: var(--ck-color-toolbar-border);

		/*
		 * These margins make the separators look better in balloon toolbars (when aligned with the "tip").
		 * See https://github.com/ckeditor/ckeditor5/issues/7493.
		 */
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	& .ck-toolbar__line-break {
		height: 0;
	}

	& > .ck-toolbar__items {
		& > *:not(.ck-toolbar__line-break) {
			/* (#11) Separate toolbar items. */
			margin-right: var(--ck-spacing-small);
		}

		/* Don't display a separator after an empty items container, for instance,
		when all items were grouped */
		&:empty + .ck.ck-toolbar__separator {
			display: none;
		}
	}

	& > .ck-toolbar__items > *:not(.ck-toolbar__line-break),
	& > .ck.ck-toolbar__grouped-dropdown {
		/* Make sure items wrapped to the next line have v-spacing */
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	&.ck-toolbar_vertical {
		/* Items in a vertical toolbar span the entire width. */
		padding: 0;

		/* Specificity matters here. See https://github.com/ckeditor/ckeditor5-theme-lark/issues/168. */
		& > .ck-toolbar__items > .ck {
			/* Items in a vertical toolbar should span the horizontal space. */
			width: 100%;

			/* Items in a vertical toolbar should have no margin. */
			margin: 0;

			/* Items in a vertical toolbar span the entire width so rounded corners are pointless. */
			border-radius: 0;
		}
	}

	&.ck-toolbar_compact {
		/* No spacing around items. */
		padding: 0;

		& > .ck-toolbar__items > * {
			/* Compact toolbar items have no spacing between them. */
			margin: 0;

			/* "Middle" children should have no rounded corners. */
			&:not(:first-child):not(:last-child) {
				border-radius: 0;
			}
		}
	}

	& > .ck.ck-toolbar__grouped-dropdown {
		/*
		 * Dropdown button has asymmetric padding to fit the arrow.
		 * This button has no arrow so let's revert that padding back to normal.
		 */
		& > .ck.ck-button.ck-dropdown__button {
			padding-left: var(--ck-spacing-tiny);
		}
	}

	/* A drop-down containing the nested toolbar with configured items. */
	& .ck-toolbar__nested-toolbar-dropdown {
		/* Prevent empty space in the panel when the dropdown label is visible and long but the toolbar has few items. */
		& > .ck-dropdown__panel {
			min-width: auto;
		}

		& > .ck-button > .ck-button__label {
			max-width: 7em;
			width: auto;
		}
	}

	&:focus {
		outline: none;
	}

	@nest .ck-toolbar-container & {
		border: 0;
	}
}

/* stylelint-disable */

/*
 * Styles for RTL toolbars.
 *
 * Note: In some cases (e.g. a decoupled editor), the toolbar has its own "dir"
 * because its parent is not controlled by the editor framework.
 */
[dir="rtl"] .ck.ck-toolbar,
.ck.ck-toolbar[dir="rtl"] {
	& > .ck-toolbar__items > .ck {
		margin-right: 0;
	}

	&:not(.ck-toolbar_compact) > .ck-toolbar__items > .ck {
		/* (#11) Separate toolbar items. */
		margin-left: var(--ck-spacing-small);
	}

	& > .ck-toolbar__items > .ck:last-child {
		margin-left: 0;
	}

	&.ck-toolbar_compact > .ck-toolbar__items > .ck {
		/* No rounded corners on the right side of the first child. */
		&:first-child {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}

		/* No rounded corners on the left side of the last child. */
		&:last-child {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}
	}

	/* Separate the the separator form the grouping dropdown when some items are grouped. */
	& > .ck.ck-toolbar__separator {
		margin-left: var(--ck-spacing-small);
	}

	/* Some spacing between the items and the separator before the grouped items dropdown. */
	&.ck-toolbar_grouping > .ck-toolbar__items:not(:empty):not(:only-child) {
		margin-left: var(--ck-spacing-small);
	}
}

/*
 * Styles for LTR toolbars.
 *
 * Note: In some cases (e.g. a decoupled editor), the toolbar has its own "dir"
 * because its parent is not controlled by the editor framework.
 */
[dir="ltr"] .ck.ck-toolbar,
.ck.ck-toolbar[dir="ltr"] {
	& > .ck-toolbar__items > .ck:last-child {
		margin-right: 0;
	}

	&.ck-toolbar_compact > .ck-toolbar__items > .ck {
		/* No rounded corners on the right side of the first child. */
		&:first-child {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}

		/* No rounded corners on the left side of the last child. */
		&:last-child {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}
	}

	/* Separate the the separator form the grouping dropdown when some items are grouped. */
	& > .ck.ck-toolbar__separator {
		margin-right: var(--ck-spacing-small);
	}

	/* Some spacing between the items and the separator before the grouped items dropdown. */
	&.ck-toolbar_grouping > .ck-toolbar__items:not(:empty):not(:only-child) {
		margin-right: var(--ck-spacing-small);
	}
}

/* stylelint-enable */
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const C=_},3332:(k,b,g)=>{g.d(b,{Z:()=>C});var v=g(1799),A=g.n(v),x=g(2609),_=g.n(x)()(A());_.push([k.id,".ck.ck-balloon-panel.ck-tooltip{--ck-balloon-border-width:0px;--ck-balloon-arrow-offset:0px;--ck-balloon-arrow-half-width:4px;--ck-balloon-arrow-height:4px;--ck-color-panel-background:var(--ck-color-tooltip-background);padding:0 var(--ck-spacing-medium);pointer-events:none;z-index:calc(var(--ck-z-modal) + 100)}.ck.ck-balloon-panel.ck-tooltip .ck-tooltip__text{color:var(--ck-color-tooltip-text);font-size:.9em;line-height:1.5}.ck.ck-balloon-panel.ck-tooltip{box-shadow:none}.ck.ck-balloon-panel.ck-tooltip:before{display:none}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/tooltip/tooltip.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/tooltip/tooltip.css"],names:[],mappings:"AAKA,gCCGC,6BAA8B,CAC9B,6BAA8B,CAC9B,iCAAkC,CAClC,6BAA8B,CAC9B,8DAA+D,CAE/D,kCAAmC,CDPnC,mBAAoB,CAEpB,qCACD,CCMC,kDAGC,kCAAmC,CAFnC,cAAe,CACf,eAED,CAbD,gCAgBC,eAMD,CAHC,uCACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-balloon-panel.ck-tooltip {
	/* Keep tooltips transparent for any interactions. */
	pointer-events: none;

	z-index: calc( var(--ck-z-modal) + 100 );
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

.ck.ck-balloon-panel.ck-tooltip {
	--ck-balloon-border-width: 0px;
	--ck-balloon-arrow-offset: 0px;
	--ck-balloon-arrow-half-width: 4px;
	--ck-balloon-arrow-height: 4px;
	--ck-color-panel-background: var(--ck-color-tooltip-background);

	padding: 0 var(--ck-spacing-medium);

	& .ck-tooltip__text {
		font-size: .9em;
		line-height: 1.5;
		color: var(--ck-color-tooltip-text);
	}

	/* Reset balloon panel styles */
	box-shadow: none;

	/* Hide the default shadow of the .ck-balloon-panel tip */
	&::before {
		display: none;
	}
}
`],sourceRoot:""}]);const C=_},4793:(k,b,g)=>{g.d(b,{Z:()=>C});var v=g(1799),A=g.n(v),x=g(2609),_=g.n(x)()(A());_.push([k.id,".ck-hidden{display:none!important}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset,.ck.ck-reset_all{box-sizing:border-box;height:auto;position:static;width:auto}:root{--ck-z-default:1;--ck-z-modal:calc(var(--ck-z-default) + 999)}.ck-transitions-disabled,.ck-transitions-disabled *{transition:none!important}:root{--ck-powered-by-line-height:10px;--ck-powered-by-padding-vertical:2px;--ck-powered-by-padding-horizontal:4px;--ck-powered-by-text-color:#4f4f4f;--ck-powered-by-border-radius:var(--ck-border-radius);--ck-powered-by-background:#fff;--ck-powered-by-border-color:var(--ck-color-focus-border)}.ck.ck-balloon-panel.ck-powered-by-balloon{--ck-border-radius:var(--ck-powered-by-border-radius);background:var(--ck-powered-by-background);box-shadow:none;min-height:unset;z-index:calc(var(--ck-z-modal) - 1)}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by{line-height:var(--ck-powered-by-line-height)}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by a{align-items:center;cursor:pointer;display:flex;filter:grayscale(80%);line-height:var(--ck-powered-by-line-height);opacity:.66;padding:var(--ck-powered-by-padding-vertical) var(--ck-powered-by-padding-horizontal)}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by .ck-powered-by__label{color:var(--ck-powered-by-text-color);cursor:pointer;font-size:7.5px;font-weight:700;letter-spacing:-.2px;line-height:normal;margin-right:4px;padding-left:2px;text-transform:uppercase}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by .ck-icon{cursor:pointer;display:block}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by:hover a{filter:grayscale(0);opacity:1}.ck.ck-balloon-panel.ck-powered-by-balloon[class*=position_inside]{border-color:transparent}.ck.ck-balloon-panel.ck-powered-by-balloon[class*=position_border]{border:var(--ck-focus-ring);border-color:var(--ck-powered-by-border-color)}:root{--ck-color-base-foreground:#fafafa;--ck-color-base-background:#fff;--ck-color-base-border:#ccced1;--ck-color-base-action:#53a336;--ck-color-base-focus:#6cb5f9;--ck-color-base-text:#333;--ck-color-base-active:#2977ff;--ck-color-base-active-focus:#0d65ff;--ck-color-base-error:#db3700;--ck-color-focus-border-coordinates:218,81.8%,56.9%;--ck-color-focus-border:hsl(var(--ck-color-focus-border-coordinates));--ck-color-focus-outer-shadow:#cae1fc;--ck-color-focus-disabled-shadow:rgba(119,186,248,.3);--ck-color-focus-error-shadow:rgba(255,64,31,.3);--ck-color-text:var(--ck-color-base-text);--ck-color-shadow-drop:rgba(0,0,0,.15);--ck-color-shadow-drop-active:rgba(0,0,0,.2);--ck-color-shadow-inner:rgba(0,0,0,.1);--ck-color-button-default-background:transparent;--ck-color-button-default-hover-background:#f0f0f0;--ck-color-button-default-active-background:#f0f0f0;--ck-color-button-default-disabled-background:transparent;--ck-color-button-on-background:#f0f7ff;--ck-color-button-on-hover-background:#dbecff;--ck-color-button-on-active-background:#dbecff;--ck-color-button-on-disabled-background:#f0f2f4;--ck-color-button-on-color:#2977ff;--ck-color-button-action-background:var(--ck-color-base-action);--ck-color-button-action-hover-background:#4d9d30;--ck-color-button-action-active-background:#4d9d30;--ck-color-button-action-disabled-background:#7ec365;--ck-color-button-action-text:var(--ck-color-base-background);--ck-color-button-save:#008a00;--ck-color-button-cancel:#db3700;--ck-color-switch-button-off-background:#939393;--ck-color-switch-button-off-hover-background:#7d7d7d;--ck-color-switch-button-on-background:var(--ck-color-button-action-background);--ck-color-switch-button-on-hover-background:#4d9d30;--ck-color-switch-button-inner-background:var(--ck-color-base-background);--ck-color-switch-button-inner-shadow:rgba(0,0,0,.1);--ck-color-dropdown-panel-background:var(--ck-color-base-background);--ck-color-dropdown-panel-border:var(--ck-color-base-border);--ck-color-input-background:var(--ck-color-base-background);--ck-color-input-border:var(--ck-color-base-border);--ck-color-input-error-border:var(--ck-color-base-error);--ck-color-input-text:var(--ck-color-base-text);--ck-color-input-disabled-background:#f2f2f2;--ck-color-input-disabled-border:var(--ck-color-base-border);--ck-color-input-disabled-text:#757575;--ck-color-list-background:var(--ck-color-base-background);--ck-color-list-button-hover-background:var(--ck-color-button-default-hover-background);--ck-color-list-button-on-background:var(--ck-color-button-on-color);--ck-color-list-button-on-background-focus:var(--ck-color-button-on-color);--ck-color-list-button-on-text:var(--ck-color-base-background);--ck-color-panel-background:var(--ck-color-base-background);--ck-color-panel-border:var(--ck-color-base-border);--ck-color-toolbar-background:var(--ck-color-base-background);--ck-color-toolbar-border:var(--ck-color-base-border);--ck-color-tooltip-background:var(--ck-color-base-text);--ck-color-tooltip-text:var(--ck-color-base-background);--ck-color-engine-placeholder-text:#707070;--ck-color-upload-bar-background:#6cb5f9;--ck-color-link-default:#0000f0;--ck-color-link-selected-background:rgba(31,176,255,.1);--ck-color-link-fake-selection:rgba(31,176,255,.3);--ck-color-highlight-background:#ff0;--ck-disabled-opacity:.5;--ck-focus-outer-shadow-geometry:0 0 0 3px;--ck-focus-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-outer-shadow);--ck-focus-disabled-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-disabled-shadow);--ck-focus-error-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-error-shadow);--ck-focus-ring:1px solid var(--ck-color-focus-border);--ck-font-size-base:13px;--ck-line-height-base:1.84615;--ck-font-face:Helvetica,Arial,Tahoma,Verdana,Sans-Serif;--ck-font-size-tiny:0.7em;--ck-font-size-small:0.75em;--ck-font-size-normal:1em;--ck-font-size-big:1.4em;--ck-font-size-large:1.8em;--ck-ui-component-min-height:2.3em}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset,.ck.ck-reset_all{word-wrap:break-word;background:transparent;border:0;margin:0;padding:0;text-decoration:none;transition:none;vertical-align:middle}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset_all{border-collapse:collapse;color:var(--ck-color-text);cursor:auto;float:none;font:normal normal normal var(--ck-font-size-base)/var(--ck-line-height-base) var(--ck-font-face);text-align:left;white-space:nowrap}.ck-reset_all .ck-rtl :not(.ck-reset_all-excluded *){text-align:right}.ck-reset_all iframe:not(.ck-reset_all-excluded *){vertical-align:inherit}.ck-reset_all textarea:not(.ck-reset_all-excluded *){white-space:pre-wrap}.ck-reset_all input[type=password]:not(.ck-reset_all-excluded *),.ck-reset_all input[type=text]:not(.ck-reset_all-excluded *),.ck-reset_all textarea:not(.ck-reset_all-excluded *){cursor:text}.ck-reset_all input[type=password][disabled]:not(.ck-reset_all-excluded *),.ck-reset_all input[type=text][disabled]:not(.ck-reset_all-excluded *),.ck-reset_all textarea[disabled]:not(.ck-reset_all-excluded *){cursor:default}.ck-reset_all fieldset:not(.ck-reset_all-excluded *){border:2px groove #dfdee3;padding:10px}.ck-reset_all button:not(.ck-reset_all-excluded *)::-moz-focus-inner{border:0;padding:0}.ck[dir=rtl],.ck[dir=rtl] .ck{text-align:right}:root{--ck-border-radius:2px;--ck-inner-shadow:2px 2px 3px var(--ck-color-shadow-inner) inset;--ck-drop-shadow:0 1px 2px 1px var(--ck-color-shadow-drop);--ck-drop-shadow-active:0 3px 6px 1px var(--ck-color-shadow-drop-active);--ck-spacing-unit:0.6em;--ck-spacing-large:calc(var(--ck-spacing-unit)*1.5);--ck-spacing-standard:var(--ck-spacing-unit);--ck-spacing-medium:calc(var(--ck-spacing-unit)*0.8);--ck-spacing-small:calc(var(--ck-spacing-unit)*0.5);--ck-spacing-tiny:calc(var(--ck-spacing-unit)*0.3);--ck-spacing-extra-tiny:calc(var(--ck-spacing-unit)*0.16)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/globals/_hidden.css","webpack://./../ckeditor5-ui/theme/globals/_reset.css","webpack://./../ckeditor5-ui/theme/globals/_zindex.css","webpack://./../ckeditor5-ui/theme/globals/_transition.css","webpack://./../ckeditor5-ui/theme/globals/_poweredby.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_colors.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_disabled.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_focus.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_fonts.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_reset.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_spacing.css"],names:[],mappings:"AAQA,WAGC,sBACD,CCPA,2EAGC,qBAAsB,CAEtB,WAAY,CACZ,eAAgB,CAFhB,UAGD,CCPA,MACC,gBAAiB,CACjB,4CACD,CCAA,oDAEC,yBACD,CCNA,MACC,gCAAiC,CACjC,oCAAqC,CACrC,sCAAuC,CACvC,kCAA2C,CAC3C,qDAAsD,CACtD,+BAA4C,CAC5C,yDACD,CAEA,2CACC,qDAAsD,CAGtD,0CAA2C,CAD3C,eAAgB,CAEhB,gBAAiB,CACjB,mCAiDD,CA/CC,6DACC,4CAoCD,CAlCC,+DAGC,kBAAmB,CAFnB,cAAe,CACf,YAAa,CAGb,qBAAsB,CACtB,4CAA6C,CAF7C,WAAY,CAGZ,qFACD,CAEA,mFASC,qCAAsC,CAFtC,cAAe,CANf,eAAgB,CAIhB,eAAiB,CAHjB,oBAAqB,CAMrB,kBAAmB,CAFnB,gBAAiB,CAHjB,gBAAiB,CACjB,wBAOD,CAEA,sEAEC,cAAe,CADf,aAED,CAGC,qEACC,mBAAqB,CACrB,SACD,CAIF,mEACC,wBACD,CAEA,mEACC,2BAA4B,CAC5B,8CACD,CChED,MACC,kCAAmD,CACnD,+BAAoD,CACpD,8BAAkD,CAClD,8BAAuD,CACvD,6BAAmD,CACnD,yBAA+C,CAC/C,8BAAsD,CACtD,oCAA4D,CAC5D,6BAAkD,CAIlD,mDAA4D,CAC5D,qEAA+E,CAC/E,qCAA4D,CAC5D,qDAA8D,CAC9D,gDAAyD,CACzD,yCAAqD,CACrD,sCAAsD,CACtD,4CAA0D,CAC1D,sCAAsD,CAItD,gDAAuD,CACvD,kDAAiE,CACjE,mDAAkE,CAClE,yDAA8D,CAE9D,uCAA6D,CAC7D,6CAAoE,CACpE,8CAAoE,CACpE,gDAAiE,CACjE,kCAAyD,CAGzD,+DAAsE,CACtE,iDAAsE,CACtE,kDAAsE,CACtE,oDAAoE,CACpE,6DAAsE,CAEtE,8BAAoD,CACpD,gCAAqD,CAErD,+CAA8D,CAC9D,qDAAiE,CACjE,+EAAqF,CACrF,oDAAuE,CACvE,yEAA8E,CAC9E,oDAAgE,CAIhE,oEAA2E,CAC3E,4DAAoE,CAIpE,2DAAoE,CACpE,mDAA6D,CAC7D,wDAAgE,CAChE,+CAA0D,CAC1D,4CAA2D,CAC3D,4DAAoE,CACpE,sCAAsD,CAItD,0DAAmE,CACnE,uFAA6F,CAC7F,oEAA2E,CAC3E,0EAA+E,CAC/E,8DAAsE,CAItE,2DAAoE,CACpE,mDAA6D,CAI7D,6DAAsE,CACtE,qDAA+D,CAI/D,uDAAgE,CAChE,uDAAiE,CAIjE,0CAAyD,CAIzD,wCAA2D,CAI3D,+BAAoD,CACpD,uDAAmE,CACnE,kDAAgE,CAIhE,oCAAwD,CCvGxD,wBAAyB,CCAzB,0CAA2C,CAK3C,gGAAiG,CAKjG,4GAA6G,CAK7G,sGAAuG,CAKvG,sDAAuD,CCvBvD,wBAAyB,CACzB,6BAA8B,CAC9B,wDAA6D,CAE7D,yBAA0B,CAC1B,2BAA4B,CAC5B,yBAA0B,CAC1B,wBAAyB,CACzB,0BAA2B,CCJ3B,kCJuGD,CIjGA,2EAaC,oBAAqB,CANrB,sBAAuB,CADvB,QAAS,CAFT,QAAS,CACT,SAAU,CAGV,oBAAqB,CAErB,eAAgB,CADhB,qBAKD,CAKA,8DAGC,wBAAyB,CAEzB,0BAA2B,CAG3B,WAAY,CACZ,UAAW,CALX,iGAAkG,CAElG,eAAgB,CAChB,kBAGD,CAGC,qDACC,gBACD,CAEA,mDAEC,sBACD,CAEA,qDACC,oBACD,CAEA,mLAGC,WACD,CAEA,iNAGC,cACD,CAEA,qDAEC,yBAAoC,CADpC,YAED,CAEA,qEAGC,QAAQ,CADR,SAED,CAMD,8BAEC,gBACD,CCnFA,MACC,sBAAuB,CCAvB,gEAAiE,CAKjE,0DAA2D,CAK3D,wEAAyE,CCbzE,uBAA8B,CAC9B,mDAA2D,CAC3D,4CAAkD,CAClD,oDAA4D,CAC5D,mDAA2D,CAC3D,kDAA2D,CAC3D,yDFFD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which hides an element in DOM.
 */
.ck-hidden {
	/* Override selector specificity. Otherwise, all elements with some display
	style defined will override this one, which is not a desired result. */
	display: none !important;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-reset,
.ck.ck-reset_all,
.ck-reset_all *:not(.ck-reset_all-excluded *) {
	box-sizing: border-box;
	width: auto;
	height: auto;
	position: static;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-z-default: 1;
	--ck-z-modal: calc( var(--ck-z-default) + 999 );
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class that disables all transitions of the element and its children.
 */
.ck-transitions-disabled,
.ck-transitions-disabled * {
	transition: none !important;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-powered-by-line-height: 10px;
	--ck-powered-by-padding-vertical: 2px;
	--ck-powered-by-padding-horizontal: 4px;
	--ck-powered-by-text-color: hsl(0, 0%, 31%);
	--ck-powered-by-border-radius: var(--ck-border-radius);
	--ck-powered-by-background: hsl(0, 0%, 100%);
	--ck-powered-by-border-color: var(--ck-color-focus-border);
}

.ck.ck-balloon-panel.ck-powered-by-balloon {
	--ck-border-radius: var(--ck-powered-by-border-radius);

	box-shadow: none;
	background: var(--ck-powered-by-background);
	min-height: unset;
	z-index: calc( var(--ck-z-modal) - 1 );

	& .ck.ck-powered-by {
		line-height: var(--ck-powered-by-line-height);

		& a {
			cursor: pointer;
			display: flex;
			align-items: center;
			opacity: .66;
			filter: grayscale(80%);
			line-height: var(--ck-powered-by-line-height);
			padding: var(--ck-powered-by-padding-vertical) var(--ck-powered-by-padding-horizontal);
		}

		& .ck-powered-by__label {
			font-size: 7.5px;
			letter-spacing: -.2px;
			padding-left: 2px;
			text-transform: uppercase;
			font-weight: bold;
			margin-right: 4px;
			cursor: pointer;
			line-height: normal;
			color: var(--ck-powered-by-text-color);

		}

		& .ck-icon {
			display: block;
			cursor: pointer;
		}

		&:hover {
			& a {
				filter: grayscale(0%);
				opacity: 1;
			}
		}
	}

	&[class*="position_inside"] {
		border-color: transparent;
	}

	&[class*="position_border"] {
		border: var(--ck-focus-ring);
		border-color: var(--ck-powered-by-border-color);
	}
}

`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-base-foreground: 								hsl(0, 0%, 98%);
	--ck-color-base-background: 								hsl(0, 0%, 100%);
	--ck-color-base-border: 									hsl(220, 6%, 81%);
	--ck-color-base-action: 									hsl(104, 50.2%, 42.5%);
	--ck-color-base-focus: 										hsl(209, 92%, 70%);
	--ck-color-base-text: 										hsl(0, 0%, 20%);
	--ck-color-base-active: 									hsl(218.1, 100%, 58%);
	--ck-color-base-active-focus:								hsl(218.2, 100%, 52.5%);
	--ck-color-base-error:										hsl(15, 100%, 43%);

	/* -- Generic colors ------------------------------------------------------------------------ */

	--ck-color-focus-border-coordinates: 						218, 81.8%, 56.9%;
	--ck-color-focus-border: 									hsl(var(--ck-color-focus-border-coordinates));
	--ck-color-focus-outer-shadow:								hsl(212.4, 89.3%, 89%);
	--ck-color-focus-disabled-shadow:							hsla(209, 90%, 72%,.3);
	--ck-color-focus-error-shadow:								hsla(9,100%,56%,.3);
	--ck-color-text: 											var(--ck-color-base-text);
	--ck-color-shadow-drop: 									hsla(0, 0%, 0%, 0.15);
	--ck-color-shadow-drop-active:								hsla(0, 0%, 0%, 0.2);
	--ck-color-shadow-inner: 									hsla(0, 0%, 0%, 0.1);

	/* -- Buttons ------------------------------------------------------------------------------- */

	--ck-color-button-default-background: 						transparent;
	--ck-color-button-default-hover-background: 				hsl(0, 0%, 94.1%);
	--ck-color-button-default-active-background: 				hsl(0, 0%, 94.1%);
	--ck-color-button-default-disabled-background: 				transparent;

	--ck-color-button-on-background: 							hsl(212, 100%, 97.1%);
	--ck-color-button-on-hover-background: 						hsl(211.7, 100%, 92.9%);
	--ck-color-button-on-active-background: 					hsl(211.7, 100%, 92.9%);
	--ck-color-button-on-disabled-background: 					hsl(211, 15%, 95%);
	--ck-color-button-on-color:									hsl(218.1, 100%, 58%);


	--ck-color-button-action-background: 						var(--ck-color-base-action);
	--ck-color-button-action-hover-background: 					hsl(104, 53.2%, 40.2%);
	--ck-color-button-action-active-background: 				hsl(104, 53.2%, 40.2%);
	--ck-color-button-action-disabled-background: 				hsl(104, 44%, 58%);
	--ck-color-button-action-text: 								var(--ck-color-base-background);

	--ck-color-button-save: 									hsl(120, 100%, 27%);
	--ck-color-button-cancel: 									hsl(15, 100%, 43%);

	--ck-color-switch-button-off-background:					hsl(0, 0%, 57.6%);
	--ck-color-switch-button-off-hover-background:				hsl(0, 0%, 49%);
	--ck-color-switch-button-on-background:						var(--ck-color-button-action-background);
	--ck-color-switch-button-on-hover-background:				hsl(104, 53.2%, 40.2%);
	--ck-color-switch-button-inner-background:					var(--ck-color-base-background);
	--ck-color-switch-button-inner-shadow:						hsla(0, 0%, 0%, 0.1);

	/* -- Dropdown ------------------------------------------------------------------------------ */

	--ck-color-dropdown-panel-background: 						var(--ck-color-base-background);
	--ck-color-dropdown-panel-border: 							var(--ck-color-base-border);

	/* -- Input --------------------------------------------------------------------------------- */

	--ck-color-input-background: 								var(--ck-color-base-background);
	--ck-color-input-border: 									var(--ck-color-base-border);
	--ck-color-input-error-border:								var(--ck-color-base-error);
	--ck-color-input-text: 										var(--ck-color-base-text);
	--ck-color-input-disabled-background: 						hsl(0, 0%, 95%);
	--ck-color-input-disabled-border: 							var(--ck-color-base-border);
	--ck-color-input-disabled-text: 							hsl(0, 0%, 46%);

	/* -- List ---------------------------------------------------------------------------------- */

	--ck-color-list-background: 								var(--ck-color-base-background);
	--ck-color-list-button-hover-background: 					var(--ck-color-button-default-hover-background);
	--ck-color-list-button-on-background: 						var(--ck-color-button-on-color);
	--ck-color-list-button-on-background-focus: 				var(--ck-color-button-on-color);
	--ck-color-list-button-on-text:								var(--ck-color-base-background);

	/* -- Panel --------------------------------------------------------------------------------- */

	--ck-color-panel-background: 								var(--ck-color-base-background);
	--ck-color-panel-border: 									var(--ck-color-base-border);

	/* -- Toolbar ------------------------------------------------------------------------------- */

	--ck-color-toolbar-background: 								var(--ck-color-base-background);
	--ck-color-toolbar-border: 									var(--ck-color-base-border);

	/* -- Tooltip ------------------------------------------------------------------------------- */

	--ck-color-tooltip-background: 								var(--ck-color-base-text);
	--ck-color-tooltip-text: 									var(--ck-color-base-background);

	/* -- Engine -------------------------------------------------------------------------------- */

	--ck-color-engine-placeholder-text: 						hsl(0, 0%, 44%);

	/* -- Upload -------------------------------------------------------------------------------- */

	--ck-color-upload-bar-background:		 					hsl(209, 92%, 70%);

	/* -- Link -------------------------------------------------------------------------------- */

	--ck-color-link-default:									hsl(240, 100%, 47%);
	--ck-color-link-selected-background:						hsla(201, 100%, 56%, 0.1);
	--ck-color-link-fake-selection:								hsla(201, 100%, 56%, 0.3);

	/* -- Search result highlight ---------------------------------------------------------------- */

	--ck-color-highlight-background:							hsl(60, 100%, 50%)
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * An opacity value of disabled UI item.
	 */
	--ck-disabled-opacity: .5;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * The geometry of the of focused element's outer shadow.
	 */
	--ck-focus-outer-shadow-geometry: 0 0 0 3px;

	/**
	 * A visual style of focused element's outer shadow.
	 */
	--ck-focus-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-outer-shadow);

	/**
	 * A visual style of focused element's outer shadow (when disabled).
	 */
	--ck-focus-disabled-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-disabled-shadow);

	/**
	 * A visual style of focused element's outer shadow (when has errors).
	 */
	--ck-focus-error-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-error-shadow);

	/**
	 * A visual style of focused element's border or outline.
	 */
	--ck-focus-ring: 1px solid var(--ck-color-focus-border);
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-font-size-base: 13px;
	--ck-line-height-base: 1.84615;
	--ck-font-face: Helvetica, Arial, Tahoma, Verdana, Sans-Serif;

	--ck-font-size-tiny: 0.7em;
	--ck-font-size-small: 0.75em;
	--ck-font-size-normal: 1em;
	--ck-font-size-big: 1.4em;
	--ck-font-size-large: 1.8em;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* This is super-important. This is **manually** adjusted so a button without an icon
	is never smaller than a button with icon, additionally making sure that text-less buttons
	are perfect squares. The value is also shared by other components which should stay "in-line"
	with buttons. */
	--ck-ui-component-min-height: 2.3em;
}

/**
 * Resets an element, ignoring its children.
 */
.ck.ck-reset,
.ck.ck-reset_all,
.ck-reset_all *:not(.ck-reset_all-excluded *) {
	/* Do not include inheritable rules here. */
	margin: 0;
	padding: 0;
	border: 0;
	background: transparent;
	text-decoration: none;
	vertical-align: middle;
	transition: none;

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/105 */
	word-wrap: break-word;
}

/**
 * Resets an element AND its children.
 */
.ck.ck-reset_all,
.ck-reset_all *:not(.ck-reset_all-excluded *) {
	/* These are rule inherited by all children elements. */
	border-collapse: collapse;
	font: normal normal normal var(--ck-font-size-base)/var(--ck-line-height-base) var(--ck-font-face);
	color: var(--ck-color-text);
	text-align: left;
	white-space: nowrap;
	cursor: auto;
	float: none;
}

.ck-reset_all {
	& .ck-rtl *:not(.ck-reset_all-excluded *) {
		text-align: right;
	}

	& iframe:not(.ck-reset_all-excluded *) {
		/* For IE */
		vertical-align: inherit;
	}

	& textarea:not(.ck-reset_all-excluded *) {
		white-space: pre-wrap;
	}

	& textarea:not(.ck-reset_all-excluded *),
	& input[type="text"]:not(.ck-reset_all-excluded *),
	& input[type="password"]:not(.ck-reset_all-excluded *) {
		cursor: text;
	}

	& textarea[disabled]:not(.ck-reset_all-excluded *),
	& input[type="text"][disabled]:not(.ck-reset_all-excluded *),
	& input[type="password"][disabled]:not(.ck-reset_all-excluded *) {
		cursor: default;
	}

	& fieldset:not(.ck-reset_all-excluded *) {
		padding: 10px;
		border: 2px groove hsl(255, 7%, 88%);
	}

	& button:not(.ck-reset_all-excluded *)::-moz-focus-inner {
		/* See http://stackoverflow.com/questions/5517744/remove-extra-button-spacing-padding-in-firefox */
		padding: 0;
		border: 0
	}
}

/**
 * Default UI rules for RTL languages.
 */
.ck[dir="rtl"],
.ck[dir="rtl"] .ck {
	text-align: right;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Default border-radius value.
 */
:root{
	--ck-border-radius: 2px;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * A visual style of element's inner shadow (i.e. input).
	 */
	--ck-inner-shadow: 2px 2px 3px var(--ck-color-shadow-inner) inset;

	/**
	 * A visual style of element's drop shadow (i.e. panel).
	 */
	--ck-drop-shadow: 0 1px 2px 1px var(--ck-color-shadow-drop);

	/**
	 * A visual style of element's active shadow (i.e. comment or suggestion).
	 */
	--ck-drop-shadow-active: 0 3px 6px 1px var(--ck-color-shadow-drop-active);
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-spacing-unit: 						0.6em;
	--ck-spacing-large: 					calc(var(--ck-spacing-unit) * 1.5);
	--ck-spacing-standard: 					var(--ck-spacing-unit);
	--ck-spacing-medium: 					calc(var(--ck-spacing-unit) * 0.8);
	--ck-spacing-small: 					calc(var(--ck-spacing-unit) * 0.5);
	--ck-spacing-tiny: 						calc(var(--ck-spacing-unit) * 0.3);
	--ck-spacing-extra-tiny: 				calc(var(--ck-spacing-unit) * 0.16);
}
`],sourceRoot:""}]);const C=_},3488:(k,b,g)=>{g.d(b,{Z:()=>C});var v=g(1799),A=g.n(v),x=g(2609),_=g.n(x)()(A());_.push([k.id,":root{--ck-color-resizer:var(--ck-color-focus-border);--ck-color-resizer-tooltip-background:#262626;--ck-color-resizer-tooltip-text:#f2f2f2;--ck-resizer-border-radius:var(--ck-border-radius);--ck-resizer-tooltip-offset:10px;--ck-resizer-tooltip-height:calc(var(--ck-spacing-small)*2 + 10px)}.ck .ck-widget,.ck .ck-widget.ck-widget_with-selection-handle{position:relative}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{position:absolute}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon{display:block}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle{visibility:visible}.ck .ck-size-view{background:var(--ck-color-resizer-tooltip-background);border:1px solid var(--ck-color-resizer-tooltip-text);border-radius:var(--ck-resizer-border-radius);color:var(--ck-color-resizer-tooltip-text);display:block;font-size:var(--ck-font-size-tiny);height:var(--ck-resizer-tooltip-height);line-height:var(--ck-resizer-tooltip-height);padding:0 var(--ck-spacing-small)}.ck .ck-size-view.ck-orientation-above-center,.ck .ck-size-view.ck-orientation-bottom-left,.ck .ck-size-view.ck-orientation-bottom-right,.ck .ck-size-view.ck-orientation-top-left,.ck .ck-size-view.ck-orientation-top-right{position:absolute}.ck .ck-size-view.ck-orientation-top-left{left:var(--ck-resizer-tooltip-offset);top:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-top-right{right:var(--ck-resizer-tooltip-offset);top:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-bottom-right{bottom:var(--ck-resizer-tooltip-offset);right:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-bottom-left{bottom:var(--ck-resizer-tooltip-offset);left:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-above-center{left:50%;top:calc(var(--ck-resizer-tooltip-height)*-1);transform:translate(-50%)}:root{--ck-widget-outline-thickness:3px;--ck-widget-handler-icon-size:16px;--ck-widget-handler-animation-duration:200ms;--ck-widget-handler-animation-curve:ease;--ck-color-widget-blurred-border:#dedede;--ck-color-widget-hover-border:#ffc83d;--ck-color-widget-editable-focus-background:var(--ck-color-base-background);--ck-color-widget-drag-handler-icon-color:var(--ck-color-base-background)}.ck .ck-widget{outline-color:transparent;outline-style:solid;outline-width:var(--ck-widget-outline-thickness);transition:outline-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_selected,.ck .ck-widget.ck-widget_selected:hover{outline:var(--ck-widget-outline-thickness) solid var(--ck-color-focus-border)}.ck .ck-widget:hover{outline-color:var(--ck-color-widget-hover-border)}.ck .ck-editor__nested-editable{border:1px solid transparent}.ck .ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck .ck-editor__nested-editable:focus{background-color:var(--ck-color-widget-editable-focus-background);border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0;outline:none}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{background-color:transparent;border-radius:var(--ck-border-radius) var(--ck-border-radius) 0 0;box-sizing:border-box;left:calc(0px - var(--ck-widget-outline-thickness));opacity:0;padding:4px;top:0;transform:translateY(-100%);transition:background-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),visibility var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon{color:var(--ck-color-widget-drag-handler-icon-color);height:var(--ck-widget-handler-icon-size);width:var(--ck-widget-handler-icon-size)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator{opacity:0;transition:opacity .3s var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle:hover .ck-icon .ck-icon__selected-indicator{opacity:1}.ck .ck-widget.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle{background-color:var(--ck-color-widget-hover-border);opacity:1}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle{background-color:var(--ck-color-focus-border);opacity:1}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator,.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator{opacity:1}.ck[dir=rtl] .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{left:auto;right:calc(0px - var(--ck-widget-outline-thickness))}.ck.ck-editor__editable.ck-read-only .ck-widget{transition:none}.ck.ck-editor__editable.ck-read-only .ck-widget:not(.ck-widget_selected){--ck-widget-outline-thickness:0px}.ck.ck-editor__editable.ck-read-only .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle,.ck.ck-editor__editable.ck-read-only .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle:hover{background:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected:hover{outline-color:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle:hover,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle>.ck-widget__selection-handle,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle>.ck-widget__selection-handle:hover{background:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable blockquote>.ck-widget.ck-widget_with-selection-handle:first-child,.ck.ck-editor__editable>.ck-widget.ck-widget_with-selection-handle:first-child{margin-top:calc(1em + var(--ck-widget-handler-icon-size))}","",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widget.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widget.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,MACC,+CAAgD,CAChD,6CAAsD,CACtD,uCAAgD,CAEhD,kDAAmD,CACnD,gCAAiC,CACjC,kEACD,CAOA,8DAEC,iBAqBD,CAnBC,4EACC,iBAOD,CALC,qFAGC,aACD,CASD,iLACC,kBACD,CAGD,kBACC,qDAAsD,CAEtD,qDAAsD,CACtD,6CAA8C,CAF9C,0CAA2C,CAI3C,aAAc,CADd,kCAAmC,CAGnC,uCAAwC,CACxC,4CAA6C,CAF7C,iCAsCD,CAlCC,8NAKC,iBACD,CAEA,0CAEC,qCAAsC,CADtC,oCAED,CAEA,2CAEC,sCAAuC,CADvC,oCAED,CAEA,8CACC,uCAAwC,CACxC,sCACD,CAEA,6CACC,uCAAwC,CACxC,qCACD,CAGA,8CAEC,QAAS,CADT,6CAAgD,CAEhD,yBACD,CCjFD,MACC,iCAAkC,CAClC,kCAAmC,CACnC,4CAA6C,CAC7C,wCAAyC,CAEzC,wCAAiD,CACjD,sCAAkD,CAClD,2EAA4E,CAC5E,yEACD,CAEA,eAGC,yBAA0B,CAD1B,mBAAoB,CADpB,gDAAiD,CAGjD,6GAUD,CARC,0EAEC,6EACD,CAEA,qBACC,iDACD,CAGD,gCACC,4BAWD,CAPC,yGAKC,iEAAkE,CCnCnE,2BAA2B,CCF3B,qCAA8B,CDC9B,YDqCA,CAIA,4EAKC,4BAA6B,CAa7B,iEAAkE,CAhBlE,qBAAsB,CAoBtB,mDAAoD,CAhBpD,SAAU,CALV,WAAY,CAsBZ,KAAM,CAFN,2BAA4B,CAT5B,6SAgCD,CAnBC,qFAIC,oDAAqD,CADrD,yCAA0C,CAD1C,wCAWD,CANC,kHACC,SAAU,CAGV,+DACD,CAID,wHACC,SACD,CAID,kFAEC,oDAAqD,CADrD,SAED,CAKC,oMAEC,6CAA8C,CAD9C,SAOD,CAHC,gRACC,SACD,CAOH,qFACC,SAAU,CACV,oDACD,CAGA,gDAEC,eAkBD,CAhBC,yEAOC,iCACD,CAGC,gOAEC,gDACD,CAOD,wIAEC,mDAQD,CALE,ghBAEC,gDACD,CAKH,yKAOC,yDACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-resizer: var(--ck-color-focus-border);
	--ck-color-resizer-tooltip-background: hsl(0, 0%, 15%);
	--ck-color-resizer-tooltip-text: hsl(0, 0%, 95%);

	--ck-resizer-border-radius: var(--ck-border-radius);
	--ck-resizer-tooltip-offset: 10px;
	--ck-resizer-tooltip-height: calc(var(--ck-spacing-small) * 2 + 10px);
}

.ck .ck-widget {
	/* This is neccessary for type around UI to be positioned properly. */
	position: relative;
}

.ck .ck-widget.ck-widget_with-selection-handle {
	/* Make the widget wrapper a relative positioning container for the drag handle. */
	position: relative;

	& .ck-widget__selection-handle {
		position: absolute;

		& .ck-icon {
			/* Make sure the icon in not a subject to font-size or line-height to avoid
			unnecessary spacing around it. */
			display: block;
		}
	}

	/* Show the selection handle on mouse hover over the widget, but not for nested widgets. */
	&:hover > .ck-widget__selection-handle {
		visibility: visible;
	}

	/* Show the selection handle when the widget is selected, but not for nested widgets. */
	&.ck-widget_selected > .ck-widget__selection-handle {
		visibility: visible;
	}
}

.ck .ck-size-view {
	background: var(--ck-color-resizer-tooltip-background);
	color: var(--ck-color-resizer-tooltip-text);
	border: 1px solid var(--ck-color-resizer-tooltip-text);
	border-radius: var(--ck-resizer-border-radius);
	font-size: var(--ck-font-size-tiny);
	display: block;
	padding: 0 var(--ck-spacing-small);
	height: var(--ck-resizer-tooltip-height);
	line-height: var(--ck-resizer-tooltip-height);

	&.ck-orientation-top-left,
	&.ck-orientation-top-right,
	&.ck-orientation-bottom-right,
	&.ck-orientation-bottom-left,
	&.ck-orientation-above-center {
		position: absolute;
	}

	&.ck-orientation-top-left {
		top: var(--ck-resizer-tooltip-offset);
		left: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-top-right {
		top: var(--ck-resizer-tooltip-offset);
		right: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-bottom-right {
		bottom: var(--ck-resizer-tooltip-offset);
		right: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-bottom-left {
		bottom: var(--ck-resizer-tooltip-offset);
		left: var(--ck-resizer-tooltip-offset);
	}

	/* Class applied if the widget is too small to contain the size label */
	&.ck-orientation-above-center {
		top: calc(var(--ck-resizer-tooltip-height) * -1);
		left: 50%;
		transform: translate(-50%);
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../mixins/_focus.css";
@import "../mixins/_shadow.css";

:root {
	--ck-widget-outline-thickness: 3px;
	--ck-widget-handler-icon-size: 16px;
	--ck-widget-handler-animation-duration: 200ms;
	--ck-widget-handler-animation-curve: ease;

	--ck-color-widget-blurred-border: hsl(0, 0%, 87%);
	--ck-color-widget-hover-border: hsl(43, 100%, 62%);
	--ck-color-widget-editable-focus-background: var(--ck-color-base-background);
	--ck-color-widget-drag-handler-icon-color: var(--ck-color-base-background);
}

.ck .ck-widget {
	outline-width: var(--ck-widget-outline-thickness);
	outline-style: solid;
	outline-color: transparent;
	transition: outline-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-color-focus-border);
	}

	&:hover {
		outline-color: var(--ck-color-widget-hover-border);
	}
}

.ck .ck-editor__nested-editable {
	border: 1px solid transparent;

	/* The :focus style is applied before .ck-editor__nested-editable_focused class is rendered in the view.
	These styles show a different border for a blink of an eye, so \`:focus\` need to have same styles applied. */
	&.ck-editor__nested-editable_focused,
	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-inner-shadow);

		background-color: var(--ck-color-widget-editable-focus-background);
	}
}

.ck .ck-widget.ck-widget_with-selection-handle {
	& .ck-widget__selection-handle {
		padding: 4px;
		box-sizing: border-box;

		/* Background and opacity will be animated as the handler shows up or the widget gets selected. */
		background-color: transparent;
		opacity: 0;

		/* Transition:
		   * background-color for the .ck-widget_selected state change,
		   * visibility for hiding the handler,
		   * opacity for the proper look of the icon when the handler disappears. */
		transition:
			background-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),
			visibility var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),
			opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

		/* Make only top corners round. */
		border-radius: var(--ck-border-radius) var(--ck-border-radius) 0 0;

		/* Place the drag handler outside the widget wrapper. */
		transform: translateY(-100%);
		left: calc(0px - var(--ck-widget-outline-thickness));
		top: 0;

		& .ck-icon {
			/* Make sure the dimensions of the icon are independent of the fon-size of the content. */
			width: var(--ck-widget-handler-icon-size);
			height: var(--ck-widget-handler-icon-size);
			color: var(--ck-color-widget-drag-handler-icon-color);

			/* The "selected" part of the icon is invisible by default */
			& .ck-icon__selected-indicator {
				opacity: 0;

				/* Note: The animation is longer on purpose. Simply feels better. */
				transition: opacity 300ms var(--ck-widget-handler-animation-curve);
			}
		}

		/* Advertise using the look of the icon that once clicked the handler, the widget will be selected. */
		&:hover .ck-icon .ck-icon__selected-indicator {
			opacity: 1;
		}
	}

	/* Show the selection handler on mouse hover over the widget, but not for nested widgets. */
	&:hover > .ck-widget__selection-handle {
		opacity: 1;
		background-color: var(--ck-color-widget-hover-border);
	}

	/* Show the selection handler when the widget is selected, but not for nested widgets. */
	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		& > .ck-widget__selection-handle {
			opacity: 1;
			background-color: var(--ck-color-focus-border);

			/* When the widget is selected, notify the user using the proper look of the icon. */
			& .ck-icon .ck-icon__selected-indicator {
				opacity: 1;
			}
		}
	}
}

/* In a RTL environment, align the selection handler to the right side of the widget */
/* stylelint-disable-next-line no-descending-specificity */
.ck[dir="rtl"] .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle {
	left: auto;
	right: calc(0px - var(--ck-widget-outline-thickness));
}

/* https://github.com/ckeditor/ckeditor5/issues/6415 */
.ck.ck-editor__editable.ck-read-only .ck-widget {
	/* Prevent the :hover outline from showing up because of the used outline-color transition. */
	transition: none;

	&:not(.ck-widget_selected) {
		/* Disable visual effects of hover/active widget when CKEditor is in readOnly mode.
		 * See: https://github.com/ckeditor/ckeditor5/issues/1261
		 *
		 * Leave the unit because this custom property is used in calc() by other features.
		 * See: https://github.com/ckeditor/ckeditor5/issues/6775
		 */
		--ck-widget-outline-thickness: 0px;
	}

	&.ck-widget_with-selection-handle {
		& .ck-widget__selection-handle,
		& .ck-widget__selection-handle:hover {
			background: var(--ck-color-widget-blurred-border);
		}
	}
}

/* Style the widget when it's selected but the editable it belongs to lost focus. */
/* stylelint-disable-next-line no-descending-specificity */
.ck.ck-editor__editable.ck-blurred .ck-widget {
	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		outline-color: var(--ck-color-widget-blurred-border);

		&.ck-widget_with-selection-handle {
			& > .ck-widget__selection-handle,
			& > .ck-widget__selection-handle:hover {
				background: var(--ck-color-widget-blurred-border);
			}
		}
	}
}

.ck.ck-editor__editable > .ck-widget.ck-widget_with-selection-handle:first-child,
.ck.ck-editor__editable blockquote > .ck-widget.ck-widget_with-selection-handle:first-child {
	/* Do not crop selection handler if a widget is a first-child in the blockquote or in the root editable.
	In fact, anything with overflow: hidden.
	https://github.com/ckeditor/ckeditor5-block-quote/issues/28
	https://github.com/ckeditor/ckeditor5-widget/issues/44
	https://github.com/ckeditor/ckeditor5-widget/issues/66 */
	margin-top: calc(1em + var(--ck-widget-handler-icon-size));
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const C=_},8506:(k,b,g)=>{g.d(b,{Z:()=>C});var v=g(1799),A=g.n(v),x=g(2609),_=g.n(x)()(A());_.push([k.id,".ck .ck-widget_with-resizer{position:relative}.ck .ck-widget__resizer{display:none;left:0;pointer-events:none;position:absolute;top:0}.ck-focused .ck-widget_with-resizer.ck-widget_selected>.ck-widget__resizer{display:block}.ck .ck-widget__resizer__handle{pointer-events:all;position:absolute}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-right,.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-left{cursor:nwse-resize}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-left,.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-right{cursor:nesw-resize}:root{--ck-resizer-size:10px;--ck-resizer-offset:calc(var(--ck-resizer-size)/-2 - 2px);--ck-resizer-border-width:1px}.ck .ck-widget__resizer{outline:1px solid var(--ck-color-resizer)}.ck .ck-widget__resizer__handle{background:var(--ck-color-focus-border);border:var(--ck-resizer-border-width) solid #fff;border-radius:var(--ck-resizer-border-radius);height:var(--ck-resizer-size);width:var(--ck-resizer-size)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-left{left:var(--ck-resizer-offset);top:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-right{right:var(--ck-resizer-offset);top:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-right{bottom:var(--ck-resizer-offset);right:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-left{bottom:var(--ck-resizer-offset);left:var(--ck-resizer-offset)}","",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widgetresize.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widgetresize.css"],names:[],mappings:"AAKA,4BAEC,iBACD,CAEA,wBACC,YAAa,CAMb,MAAO,CAFP,mBAAoB,CAHpB,iBAAkB,CAMlB,KACD,CAGC,2EACC,aACD,CAGD,gCAIC,kBAAmB,CAHnB,iBAcD,CATC,4IAEC,kBACD,CAEA,4IAEC,kBACD,CCpCD,MACC,sBAAuB,CAGvB,yDAAiE,CACjE,6BACD,CAEA,wBACC,yCACD,CAEA,gCAGC,uCAAwC,CACxC,gDAA6D,CAC7D,6CAA8C,CAH9C,6BAA8B,CAD9B,4BAyBD,CAnBC,oEAEC,6BAA8B,CAD9B,4BAED,CAEA,qEAEC,8BAA+B,CAD/B,4BAED,CAEA,wEACC,+BAAgC,CAChC,8BACD,CAEA,uEACC,+BAAgC,CAChC,6BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-widget_with-resizer {
	/* Make the widget wrapper a relative positioning container for the drag handle. */
	position: relative;
}

.ck .ck-widget__resizer {
	display: none;
	position: absolute;

	/* The wrapper itself should not interfere with the pointer device, only the handles should. */
	pointer-events: none;

	left: 0;
	top: 0;
}

.ck-focused .ck-widget_with-resizer.ck-widget_selected {
	& > .ck-widget__resizer {
		display: block;
	}
}

.ck .ck-widget__resizer__handle {
	position: absolute;

	/* Resizers are the only UI elements that should interfere with a pointer device. */
	pointer-events: all;

	&.ck-widget__resizer__handle-top-left,
	&.ck-widget__resizer__handle-bottom-right {
		cursor: nwse-resize;
	}

	&.ck-widget__resizer__handle-top-right,
	&.ck-widget__resizer__handle-bottom-left {
		cursor: nesw-resize;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-resizer-size: 10px;

	/* Set the resizer with a 50% offset. */
	--ck-resizer-offset: calc( ( var(--ck-resizer-size) / -2 ) - 2px);
	--ck-resizer-border-width: 1px;
}

.ck .ck-widget__resizer {
	outline: 1px solid var(--ck-color-resizer);
}

.ck .ck-widget__resizer__handle {
	width: var(--ck-resizer-size);
	height: var(--ck-resizer-size);
	background: var(--ck-color-focus-border);
	border: var(--ck-resizer-border-width) solid hsl(0, 0%, 100%);
	border-radius: var(--ck-resizer-border-radius);

	&.ck-widget__resizer__handle-top-left {
		top: var(--ck-resizer-offset);
		left: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-top-right {
		top: var(--ck-resizer-offset);
		right: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-bottom-right {
		bottom: var(--ck-resizer-offset);
		right: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-bottom-left {
		bottom: var(--ck-resizer-offset);
		left: var(--ck-resizer-offset);
	}
}
`],sourceRoot:""}]);const C=_},4921:(k,b,g)=>{g.d(b,{Z:()=>C});var v=g(1799),A=g.n(v),x=g(2609),_=g.n(x)()(A());_.push([k.id,'.ck .ck-widget .ck-widget__type-around__button{display:block;overflow:hidden;position:absolute;z-index:var(--ck-z-default)}.ck .ck-widget .ck-widget__type-around__button svg{left:50%;position:absolute;top:50%;z-index:calc(var(--ck-z-default) + 2)}.ck .ck-widget .ck-widget__type-around__button.ck-widget__type-around__button_before{left:min(10%,30px);top:calc(var(--ck-widget-outline-thickness)*-.5);transform:translateY(-50%)}.ck .ck-widget .ck-widget__type-around__button.ck-widget__type-around__button_after{bottom:calc(var(--ck-widget-outline-thickness)*-.5);right:min(10%,30px);transform:translateY(50%)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:after,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover:after{content:"";display:block;left:1px;position:absolute;top:1px;z-index:calc(var(--ck-z-default) + 1)}.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__fake-caret{display:none;left:0;position:absolute;right:0}.ck .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__fake-caret{left:calc(var(--ck-widget-outline-thickness)*-1);right:calc(var(--ck-widget-outline-thickness)*-1)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_before>.ck-widget__type-around>.ck-widget__type-around__fake-caret{display:block;top:calc(var(--ck-widget-outline-thickness)*-1 - 1px)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after>.ck-widget__type-around>.ck-widget__type-around__fake-caret{bottom:calc(var(--ck-widget-outline-thickness)*-1 - 1px);display:block}.ck.ck-editor__editable.ck-read-only .ck-widget__type-around,.ck.ck-editor__editable.ck-restricted-editing_mode_restricted .ck-widget__type-around,.ck.ck-editor__editable.ck-widget__type-around_disabled .ck-widget__type-around{display:none}:root{--ck-widget-type-around-button-size:20px;--ck-color-widget-type-around-button-active:var(--ck-color-focus-border);--ck-color-widget-type-around-button-hover:var(--ck-color-widget-hover-border);--ck-color-widget-type-around-button-blurred-editable:var(--ck-color-widget-blurred-border);--ck-color-widget-type-around-button-radar-start-alpha:0;--ck-color-widget-type-around-button-radar-end-alpha:.3;--ck-color-widget-type-around-button-icon:var(--ck-color-base-background)}.ck .ck-widget .ck-widget__type-around__button{background:var(--ck-color-widget-type-around-button);border-radius:100px;height:var(--ck-widget-type-around-button-size);opacity:0;pointer-events:none;transition:opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),background var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);width:var(--ck-widget-type-around-button-size)}.ck .ck-widget .ck-widget__type-around__button svg{height:8px;margin-top:1px;transform:translate(-50%,-50%);transition:transform .5s ease;width:10px}.ck .ck-widget .ck-widget__type-around__button svg *{stroke-dasharray:10;stroke-dashoffset:0;fill:none;stroke:var(--ck-color-widget-type-around-button-icon);stroke-width:1.5px;stroke-linecap:round;stroke-linejoin:round}.ck .ck-widget .ck-widget__type-around__button svg line{stroke-dasharray:7}.ck .ck-widget .ck-widget__type-around__button:hover{animation:ck-widget-type-around-button-sonar 1s ease infinite}.ck .ck-widget .ck-widget__type-around__button:hover svg polyline{animation:ck-widget-type-around-arrow-dash 2s linear}.ck .ck-widget .ck-widget__type-around__button:hover svg line{animation:ck-widget-type-around-arrow-tip-dash 2s linear}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__button{opacity:1;pointer-events:auto}.ck .ck-widget:not(.ck-widget_selected)>.ck-widget__type-around>.ck-widget__type-around__button{background:var(--ck-color-widget-type-around-button-hover)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover{background:var(--ck-color-widget-type-around-button-active)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:after,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover:after{background:linear-gradient(135deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.3));border-radius:100px;height:calc(var(--ck-widget-type-around-button-size) - 2px);width:calc(var(--ck-widget-type-around-button-size) - 2px)}.ck .ck-widget.ck-widget_with-selection-handle>.ck-widget__type-around>.ck-widget__type-around__button_before{margin-left:20px}.ck .ck-widget .ck-widget__type-around__fake-caret{animation:ck-widget-type-around-fake-caret-pulse 1s linear infinite normal forwards;background:var(--ck-color-base-text);height:1px;outline:1px solid hsla(0,0%,100%,.5);pointer-events:none}.ck .ck-widget.ck-widget_selected.ck-widget_type-around_show-fake-caret_after,.ck .ck-widget.ck-widget_selected.ck-widget_type-around_show-fake-caret_before{outline-color:transparent}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_selected:hover,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_selected:hover{outline-color:var(--ck-color-widget-hover-border)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before>.ck-widget__type-around>.ck-widget__type-around__button{opacity:0;pointer-events:none}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_selected.ck-widget_with-resizer>.ck-widget__resizer,.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_selected.ck-widget_with-resizer>.ck-widget__resizer,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle{opacity:0}.ck[dir=rtl] .ck-widget.ck-widget_with-selection-handle .ck-widget__type-around>.ck-widget__type-around__button_before{margin-left:0;margin-right:20px}.ck-editor__nested-editable.ck-editor__editable_selected .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck-editor__nested-editable.ck-editor__editable_selected .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__button{opacity:0;pointer-events:none}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:not(:hover){background:var(--ck-color-widget-type-around-button-blurred-editable)}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:not(:hover) svg *{stroke:#999}@keyframes ck-widget-type-around-arrow-dash{0%{stroke-dashoffset:10}20%,to{stroke-dashoffset:0}}@keyframes ck-widget-type-around-arrow-tip-dash{0%,20%{stroke-dashoffset:7}40%,to{stroke-dashoffset:0}}@keyframes ck-widget-type-around-button-sonar{0%{box-shadow:0 0 0 0 hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-start-alpha))}50%{box-shadow:0 0 0 5px hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-end-alpha))}to{box-shadow:0 0 0 5px hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-start-alpha))}}@keyframes ck-widget-type-around-fake-caret-pulse{0%{opacity:1}49%{opacity:1}50%{opacity:0}99%{opacity:0}to{opacity:1}}',"",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widgettypearound.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widgettypearound.css"],names:[],mappings:"AASC,+CACC,aAAc,CAEd,eAAgB,CADhB,iBAAkB,CAElB,2BAwBD,CAtBC,mDAGC,QAAS,CAFT,iBAAkB,CAClB,OAAQ,CAER,qCACD,CAEA,qFAGC,kBAAoB,CADpB,gDAAoD,CAGpD,0BACD,CAEA,oFAEC,mDAAuD,CACvD,mBAAqB,CAErB,yBACD,CAUA,mLACC,UAAW,CACX,aAAc,CAGd,QAAS,CAFT,iBAAkB,CAClB,OAAQ,CAER,qCACD,CAMD,2EACC,YAAa,CAEb,MAAO,CADP,iBAAkB,CAElB,OACD,CAOA,iFACC,gDAAqD,CACrD,iDACD,CAKA,wHAEC,aAAc,CADd,qDAED,CAKA,uHACC,wDAA6D,CAC7D,aACD,CAoBD,mOACC,YACD,CC3GA,MACC,wCAAyC,CACzC,wEAAyE,CACzE,8EAA+E,CAC/E,2FAA4F,CAC5F,wDAAyD,CACzD,uDAAwD,CACxD,yEACD,CAgBC,+CAGC,oDAAqD,CACrD,mBAAoB,CAFpB,+CAAgD,CAVjD,SAAU,CACV,mBAAoB,CAYnB,uMAAyM,CAJzM,8CAkDD,CA1CC,mDAEC,UAAW,CAGX,cAAe,CAFf,8BAA+B,CAC/B,6BAA8B,CAH9B,UAoBD,CAdC,qDACC,mBAAoB,CACpB,mBAAoB,CAEpB,SAAU,CACV,qDAAsD,CACtD,kBAAmB,CACnB,oBAAqB,CACrB,qBACD,CAEA,wDACC,kBACD,CAGD,qDAIC,6DAcD,CARE,kEACC,oDACD,CAEA,8DACC,wDACD,CAUF,uKAvED,SAAU,CACV,mBAwEC,CAOD,gGACC,0DACD,CAOA,uKAEC,2DAQD,CANC,mLAIC,uEAAkF,CADlF,mBAAoB,CADpB,2DAA4D,CAD5D,0DAID,CAOD,8GACC,gBACD,CAKA,mDAGC,mFAAoF,CAOpF,oCAAqC,CARrC,UAAW,CAOX,oCAAwC,CARxC,mBAUD,CAOC,6JAEC,yBACD,CAUA,yKACC,iDACD,CAMA,uOAlJD,SAAU,CACV,mBAmJC,CAoBA,6yBACC,SACD,CASF,uHACC,aAAc,CACd,iBACD,CAYG,iRAlMF,SAAU,CACV,mBAmME,CAQH,kIACC,qEAKD,CAHC,wIACC,WACD,CAGD,4CACC,GACC,oBACD,CACA,OACC,mBACD,CACD,CAEA,gDACC,OACC,mBACD,CACA,OACC,mBACD,CACD,CAEA,8CACC,GACC,6HACD,CACA,IACC,6HACD,CACA,GACC,+HACD,CACD,CAEA,kDACC,GACC,SACD,CACA,IACC,SACD,CACA,IACC,SACD,CACA,IACC,SACD,CACA,GACC,SACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-widget {
	/*
	 * Styles of the type around buttons
	 */
	& .ck-widget__type-around__button {
		display: block;
		position: absolute;
		overflow: hidden;
		z-index: var(--ck-z-default);

		& svg {
			position: absolute;
			top: 50%;
			left: 50%;
			z-index: calc(var(--ck-z-default) + 2);
		}

		&.ck-widget__type-around__button_before {
			/* Place it in the middle of the outline */
			top: calc(-0.5 * var(--ck-widget-outline-thickness));
			left: min(10%, 30px);

			transform: translateY(-50%);
		}

		&.ck-widget__type-around__button_after {
			/* Place it in the middle of the outline */
			bottom: calc(-0.5 * var(--ck-widget-outline-thickness));
			right: min(10%, 30px);

			transform: translateY(50%);
		}
	}

	/*
	 * Styles for the buttons when:
	 * - the widget is selected,
	 * - or the button is being hovered (regardless of the widget state).
	 */
	&.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button,
	& > .ck-widget__type-around > .ck-widget__type-around__button:hover {
		&::after {
			content: "";
			display: block;
			position: absolute;
			top: 1px;
			left: 1px;
			z-index: calc(var(--ck-z-default) + 1);
		}
	}

	/*
	 * Styles for the horizontal "fake caret" which is displayed when the user navigates using the keyboard.
	 */
	& > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		display: none;
		position: absolute;
		left: 0;
		right: 0;
	}

	/*
	 * When the widget is hovered the "fake caret" would normally be narrower than the
	 * extra outline displayed around the widget. Let's extend the "fake caret" to match
	 * the full width of the widget.
	 */
	&:hover > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		left: calc( -1 * var(--ck-widget-outline-thickness) );
		right: calc( -1 * var(--ck-widget-outline-thickness) );
	}

	/*
	 * Styles for the horizontal "fake caret" when it should be displayed before the widget (backward keyboard navigation).
	 */
	&.ck-widget_type-around_show-fake-caret_before > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		top: calc( -1 * var(--ck-widget-outline-thickness) - 1px );
		display: block;
	}

	/*
	 * Styles for the horizontal "fake caret" when it should be displayed after the widget (forward keyboard navigation).
	 */
	&.ck-widget_type-around_show-fake-caret_after > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		bottom: calc( -1 * var(--ck-widget-outline-thickness) - 1px );
		display: block;
	}
}

/*
 * Integration with the read-only mode of the editor.
 */
.ck.ck-editor__editable.ck-read-only .ck-widget__type-around {
	display: none;
}

/*
 * Integration with the restricted editing mode (feature) of the editor.
 */
.ck.ck-editor__editable.ck-restricted-editing_mode_restricted .ck-widget__type-around {
	display: none;
}

/*
 * Integration with the #isEnabled property of the WidgetTypeAround plugin.
 */
.ck.ck-editor__editable.ck-widget__type-around_disabled .ck-widget__type-around {
	display: none;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-widget-type-around-button-size: 20px;
	--ck-color-widget-type-around-button-active: var(--ck-color-focus-border);
	--ck-color-widget-type-around-button-hover: var(--ck-color-widget-hover-border);
	--ck-color-widget-type-around-button-blurred-editable: var(--ck-color-widget-blurred-border);
	--ck-color-widget-type-around-button-radar-start-alpha: 0;
	--ck-color-widget-type-around-button-radar-end-alpha: .3;
	--ck-color-widget-type-around-button-icon: var(--ck-color-base-background);
}

@define-mixin ck-widget-type-around-button-visible {
	opacity: 1;
	pointer-events: auto;
}

@define-mixin ck-widget-type-around-button-hidden {
	opacity: 0;
	pointer-events: none;
}

.ck .ck-widget {
	/*
	 * Styles of the type around buttons
	 */
	& .ck-widget__type-around__button {
		width: var(--ck-widget-type-around-button-size);
		height: var(--ck-widget-type-around-button-size);
		background: var(--ck-color-widget-type-around-button);
		border-radius: 100px;
		transition: opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve), background var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

		@mixin ck-widget-type-around-button-hidden;

		& svg {
			width: 10px;
			height: 8px;
			transform: translate(-50%,-50%);
			transition: transform .5s ease;
			margin-top: 1px;

			& * {
				stroke-dasharray: 10;
				stroke-dashoffset: 0;

				fill: none;
				stroke: var(--ck-color-widget-type-around-button-icon);
				stroke-width: 1.5px;
				stroke-linecap: round;
				stroke-linejoin: round;
			}

			& line {
				stroke-dasharray: 7;
			}
		}

		&:hover {
			/*
			 * Display the "sonar" around the button when hovered.
			 */
			animation: ck-widget-type-around-button-sonar 1s ease infinite;

			/*
			 * Animate active button's icon.
			 */
			& svg {
				& polyline {
					animation: ck-widget-type-around-arrow-dash 2s linear;
				}

				& line {
					animation: ck-widget-type-around-arrow-tip-dash 2s linear;
				}
			}
		}
	}

	/*
	 * Show type around buttons when the widget gets selected or being hovered.
	 */
	&.ck-widget_selected,
	&:hover {
		& > .ck-widget__type-around > .ck-widget__type-around__button {
			@mixin ck-widget-type-around-button-visible;
		}
	}

	/*
	 * Styles for the buttons when the widget is NOT selected (but the buttons are visible
	 * and still can be hovered).
	 */
	&:not(.ck-widget_selected) > .ck-widget__type-around > .ck-widget__type-around__button {
		background: var(--ck-color-widget-type-around-button-hover);
	}

	/*
	 * Styles for the buttons when:
	 * - the widget is selected,
	 * - or the button is being hovered (regardless of the widget state).
	 */
	&.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button,
	& > .ck-widget__type-around > .ck-widget__type-around__button:hover {
		background: var(--ck-color-widget-type-around-button-active);

		&::after {
			width: calc(var(--ck-widget-type-around-button-size) - 2px);
			height: calc(var(--ck-widget-type-around-button-size) - 2px);
			border-radius: 100px;
			background: linear-gradient(135deg, hsla(0,0%,100%,0) 0%, hsla(0,0%,100%,.3) 100%);
		}
	}

	/*
	 * Styles for the "before" button when the widget has a selection handle. Because some space
	 * is consumed by the handle, the button must be moved slightly to the right to let it breathe.
	 */
	&.ck-widget_with-selection-handle > .ck-widget__type-around > .ck-widget__type-around__button_before {
		margin-left: 20px;
	}

	/*
	 * Styles for the horizontal "fake caret" which is displayed when the user navigates using the keyboard.
	 */
	& .ck-widget__type-around__fake-caret {
		pointer-events: none;
		height: 1px;
		animation: ck-widget-type-around-fake-caret-pulse linear 1s infinite normal forwards;

		/*
		 * The semi-transparent-outline+background combo improves the contrast
		 * when the background underneath the fake caret is dark.
		 */
		outline: solid 1px hsla(0, 0%, 100%, .5);
		background: var(--ck-color-base-text);
	}

	/*
	 * Styles of the widget when the "fake caret" is blinking (e.g. upon keyboard navigation).
	 * Despite the widget being physically selected in the model, its outline should disappear.
	 */
	&.ck-widget_selected {
		&.ck-widget_type-around_show-fake-caret_before,
		&.ck-widget_type-around_show-fake-caret_after {
			outline-color: transparent;
		}
	}

	&.ck-widget_type-around_show-fake-caret_before,
	&.ck-widget_type-around_show-fake-caret_after {
		/*
		 * When the "fake caret" is visible we simulate that the widget is not selected
		 * (despite being physically selected), so the outline color should be for the
		 * unselected widget.
		 */
		&.ck-widget_selected:hover {
			outline-color: var(--ck-color-widget-hover-border);
		}

		/*
		 * Styles of the type around buttons when the "fake caret" is blinking (e.g. upon keyboard navigation).
		 * In this state, the type around buttons would collide with the fake carets so they should disappear.
		 */
		& > .ck-widget__type-around > .ck-widget__type-around__button {
			@mixin ck-widget-type-around-button-hidden;
		}

		/*
		 * Fake horizontal caret integration with the selection handle. When the caret is visible, simply
		 * hide the handle because it intersects with the caret (and does not make much sense anyway).
		 */
		&.ck-widget_with-selection-handle {
			&.ck-widget_selected,
			&.ck-widget_selected:hover {
				& > .ck-widget__selection-handle {
					opacity: 0
				}
			}
		}

		/*
		 * Fake horizontal caret integration with the resize UI. When the caret is visible, simply
		 * hide the resize UI because it creates too much noise. It can be visible when the user
		 * hovers the widget, though.
		 */
		&.ck-widget_selected.ck-widget_with-resizer > .ck-widget__resizer {
			opacity: 0
		}
	}
}

/*
 * Styles for the "before" button when the widget has a selection handle in an RTL environment.
 * The selection handler is aligned to the right side of the widget so there is no need to create
 * additional space for it next to the "before" button.
 */
.ck[dir="rtl"] .ck-widget.ck-widget_with-selection-handle .ck-widget__type-around > .ck-widget__type-around__button_before {
	margin-left: 0;
	margin-right: 20px;
}

/*
 * Hide type around buttons when the widget is selected as a child of a selected
 * nested editable (e.g. mulit-cell table selection).
 *
 * See https://github.com/ckeditor/ckeditor5/issues/7263.
 */
.ck-editor__nested-editable.ck-editor__editable_selected {
	& .ck-widget {
		&.ck-widget_selected,
		&:hover {
			& > .ck-widget__type-around > .ck-widget__type-around__button {
				@mixin ck-widget-type-around-button-hidden;
			}
		}
	}
}

/*
 * Styles for the buttons when the widget is selected but the user clicked outside of the editor (blurred the editor).
 */
.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button:not(:hover) {
	background: var(--ck-color-widget-type-around-button-blurred-editable);

	& svg * {
		stroke: hsl(0,0%,60%);
	}
}

@keyframes ck-widget-type-around-arrow-dash {
	0% {
		stroke-dashoffset: 10;
	}
	20%, 100% {
		stroke-dashoffset: 0;
	}
}

@keyframes ck-widget-type-around-arrow-tip-dash {
	0%, 20% {
		stroke-dashoffset: 7;
	}
	40%, 100% {
		stroke-dashoffset: 0;
	}
}

@keyframes ck-widget-type-around-button-sonar {
	0% {
		box-shadow: 0 0 0 0 hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-start-alpha));
	}
	50% {
		box-shadow: 0 0 0 5px hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-end-alpha));
	}
	100% {
		box-shadow: 0 0 0 5px hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-start-alpha));
	}
}

@keyframes ck-widget-type-around-fake-caret-pulse {
	0% {
		opacity: 1;
	}
	49% {
		opacity: 1;
	}
	50% {
		opacity: 0;
	}
	99% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}
`],sourceRoot:""}]);const C=_},2609:k=>{k.exports=function(b){var g=[];return g.toString=function(){return this.map(function(v){var A=b(v);return v[2]?"@media ".concat(v[2]," {").concat(A,"}"):A}).join("")},g.i=function(v,A,x){typeof v=="string"&&(v=[[null,v,""]]);var _={};if(x)for(var C=0;C<this.length;C++){var M=this[C][0];M!=null&&(_[M]=!0)}for(var T=0;T<v.length;T++){var O=[].concat(v[T]);x&&_[O[0]]||(A&&(O[2]?O[2]="".concat(A," and ").concat(O[2]):O[2]=A),g.push(O))}},g}},1799:k=>{function b(v,A){return function(x){if(Array.isArray(x))return x}(v)||function(x,_){var C=x&&(typeof Symbol<"u"&&x[Symbol.iterator]||x["@@iterator"]);if(C!=null){var M,T,O=[],P=!0,j=!1;try{for(C=C.call(x);!(P=(M=C.next()).done)&&(O.push(M.value),!_||O.length!==_);P=!0);}catch(R){j=!0,T=R}finally{try{P||C.return==null||C.return()}finally{if(j)throw T}}return O}}(v,A)||function(x,_){if(x){if(typeof x=="string")return g(x,_);var C=Object.prototype.toString.call(x).slice(8,-1);if(C==="Object"&&x.constructor&&(C=x.constructor.name),C==="Map"||C==="Set")return Array.from(x);if(C==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(C))return g(x,_)}}(v,A)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function g(v,A){(A==null||A>v.length)&&(A=v.length);for(var x=0,_=new Array(A);x<A;x++)_[x]=v[x];return _}k.exports=function(v){var A=b(v,4),x=A[1],_=A[3];if(!_)return x;if(typeof btoa=="function"){var C=btoa(unescape(encodeURIComponent(JSON.stringify(_)))),M="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(C),T="/*# ".concat(M," */"),O=_.sources.map(function(P){return"/*# sourceURL=".concat(_.sourceRoot||"").concat(P," */")});return[x].concat(O).concat([T]).join(`
`)}return[x].join(`
`)}},6062:(k,b,g)=>{var v,A=function(){return v===void 0&&(v=!!(window&&document&&document.all&&!window.atob)),v},x=function(){var G={};return function(V){if(G[V]===void 0){var X=document.querySelector(V);if(window.HTMLIFrameElement&&X instanceof window.HTMLIFrameElement)try{X=X.contentDocument.head}catch{X=null}G[V]=X}return G[V]}}(),_=[];function C(G){for(var V=-1,X=0;X<_.length;X++)if(_[X].identifier===G){V=X;break}return V}function M(G,V){for(var X={},Q=[],ae=0;ae<G.length;ae++){var pe=G[ae],me=V.base?pe[0]+V.base:pe[0],Pe=X[me]||0,De="".concat(me," ").concat(Pe);X[me]=Pe+1;var ue=C(De),ze={css:pe[1],media:pe[2],sourceMap:pe[3]};ue!==-1?(_[ue].references++,_[ue].updater(ze)):_.push({identifier:De,updater:ee(ze,V),references:1}),Q.push(De)}return Q}function T(G){var V=document.createElement("style"),X=G.attributes||{};if(X.nonce===void 0){var Q=g.nc;Q&&(X.nonce=Q)}if(Object.keys(X).forEach(function(pe){V.setAttribute(pe,X[pe])}),typeof G.insert=="function")G.insert(V);else{var ae=x(G.insert||"head");if(!ae)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");ae.appendChild(V)}return V}var O,P=(O=[],function(G,V){return O[G]=V,O.filter(Boolean).join(`
`)});function j(G,V,X,Q){var ae=X?"":Q.media?"@media ".concat(Q.media," {").concat(Q.css,"}"):Q.css;if(G.styleSheet)G.styleSheet.cssText=P(V,ae);else{var pe=document.createTextNode(ae),me=G.childNodes;me[V]&&G.removeChild(me[V]),me.length?G.insertBefore(pe,me[V]):G.appendChild(pe)}}function R(G,V,X){var Q=X.css,ae=X.media,pe=X.sourceMap;if(ae?G.setAttribute("media",ae):G.removeAttribute("media"),pe&&typeof btoa<"u"&&(Q+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(pe))))," */")),G.styleSheet)G.styleSheet.cssText=Q;else{for(;G.firstChild;)G.removeChild(G.firstChild);G.appendChild(document.createTextNode(Q))}}var L=null,q=0;function ee(G,V){var X,Q,ae;if(V.singleton){var pe=q++;X=L||(L=T(V)),Q=j.bind(null,X,pe,!1),ae=j.bind(null,X,pe,!0)}else X=T(V),Q=R.bind(null,X,V),ae=function(){(function(me){if(me.parentNode===null)return!1;me.parentNode.removeChild(me)})(X)};return Q(G),function(me){if(me){if(me.css===G.css&&me.media===G.media&&me.sourceMap===G.sourceMap)return;Q(G=me)}else ae()}}k.exports=function(G,V){(V=V||{}).singleton||typeof V.singleton=="boolean"||(V.singleton=A());var X=M(G=G||[],V);return function(Q){if(Q=Q||[],Object.prototype.toString.call(Q)==="[object Array]"){for(var ae=0;ae<X.length;ae++){var pe=C(X[ae]);_[pe].references--}for(var me=M(Q,V),Pe=0;Pe<X.length;Pe++){var De=C(X[Pe]);_[De].references===0&&(_[De].updater(),_.splice(De,1))}X=me}}}}},d={};function h(k){var b=d[k];if(b!==void 0)return b.exports;var g=d[k]={id:k,exports:{}};return l[k](g,g.exports,h),g.exports}h.n=k=>{var b=k&&k.__esModule?()=>k.default:()=>k;return h.d(b,{a:b}),b},h.d=(k,b)=>{for(var g in b)h.o(b,g)&&!h.o(k,g)&&Object.defineProperty(k,g,{enumerable:!0,get:b[g]})},h.o=(k,b)=>Object.prototype.hasOwnProperty.call(k,b),h.nc=void 0;var p={};return(()=>{function k({emitter:i,activator:e,callback:t,contextElements:o}){i.listenTo(document,"mousedown",(s,a)=>{if(!e())return;const c=typeof a.composedPath=="function"?a.composedPath():[],u=typeof o=="function"?o():o;for(const f of u)if(f.contains(a.target)||c.includes(f))return;t()})}function b(i){return class extends i{disableCssTransitions(){this._isCssTransitionsDisabled=!0}enableCssTransitions(){this._isCssTransitionsDisabled=!1}constructor(...e){super(...e),this.set("_isCssTransitionsDisabled",!1),this.initializeCssTransitionDisablerMixin()}initializeCssTransitionDisablerMixin(){this.extendTemplate({attributes:{class:[this.bindTemplate.if("_isCssTransitionsDisabled","ck-transitions-disabled")]}})}}}function g({view:i}){i.listenTo(i.element,"submit",(e,t)=>{t.preventDefault(),i.fire("submit")},{useCapture:!0})}h.d(p,{default:()=>Dk});const v=function(){try{return navigator.userAgent.toLowerCase()}catch{return""}}();var A;const x={isMac:_(v),isWindows:(A=v,A.indexOf("windows")>-1),isGecko:function(i){return!!i.match(/gecko\/\d+/)}(v),isSafari:function(i){return i.indexOf(" applewebkit/")>-1&&i.indexOf("chrome")===-1}(v),isiOS:function(i){return!!i.match(/iphone|ipad/i)||_(i)&&navigator.maxTouchPoints>0}(v),isAndroid:function(i){return i.indexOf("android")>-1}(v),isBlink:function(i){return i.indexOf("chrome/")>-1&&i.indexOf("edge/")<0}(v),features:{isRegExpUnicodePropertySupported:function(){let i=!1;try{i="ć".search(new RegExp("[\\p{L}]","u"))===0}catch{}return i}()}};function _(i){return i.indexOf("macintosh")>-1}function C(i,e,t,o){t=t||function(f,m){return f===m};const s=Array.isArray(i)?i:Array.prototype.slice.call(i),a=Array.isArray(e)?e:Array.prototype.slice.call(e),c=function(f,m,w){const y=M(f,m,w);if(y===-1)return{firstIndex:-1,lastIndexOld:-1,lastIndexNew:-1};const S=T(f,y),N=T(m,y),B=M(S,N,w),F=f.length-B,$=m.length-B;return{firstIndex:y,lastIndexOld:F,lastIndexNew:$}}(s,a,t);return o?function(f,m){const{firstIndex:w,lastIndexOld:y,lastIndexNew:S}=f;if(w===-1)return Array(m).fill("equal");let N=[];return w>0&&(N=N.concat(Array(w).fill("equal"))),S-w>0&&(N=N.concat(Array(S-w).fill("insert"))),y-w>0&&(N=N.concat(Array(y-w).fill("delete"))),S<m&&(N=N.concat(Array(m-S).fill("equal"))),N}(c,a.length):function(f,m){const w=[],{firstIndex:y,lastIndexOld:S,lastIndexNew:N}=m;return N-y>0&&w.push({index:y,type:"insert",values:f.slice(y,N)}),S-y>0&&w.push({index:y+(N-y),type:"delete",howMany:S-y}),w}(a,c)}function M(i,e,t){for(let o=0;o<Math.max(i.length,e.length);o++)if(i[o]===void 0||e[o]===void 0||!t(i[o],e[o]))return o;return-1}function T(i,e){return i.slice(e).reverse()}function O(i,e,t){t=t||function(F,$){return F===$};const o=i.length,s=e.length;if(o>200||s>200||o+s>300)return O.fastDiff(i,e,t,!0);let a,c;if(s<o){const F=i;i=e,e=F,a="delete",c="insert"}else a="insert",c="delete";const u=i.length,f=e.length,m=f-u,w={},y={};function S(F){const $=(y[F-1]!==void 0?y[F-1]:-1)+1,W=y[F+1]!==void 0?y[F+1]:-1,Z=$>W?-1:1;w[F+Z]&&(w[F]=w[F+Z].slice(0)),w[F]||(w[F]=[]),w[F].push($>W?a:c);let de=Math.max($,W),ye=de-F;for(;ye<u&&de<f&&t(i[ye],e[de]);)ye++,de++,w[F].push("equal");return de}let N,B=0;do{for(N=-B;N<m;N++)y[N]=S(N);for(N=m+B;N>m;N--)y[N]=S(N);y[m]=S(m),B++}while(y[m]!==f);return w[m].slice(1)}O.fastDiff=C;const P=function(){return function i(){i.called=!0}};class j{constructor(e,t){this.source=e,this.name=t,this.path=[],this.stop=P(),this.off=P()}}const R=new Array(256).fill("").map((i,e)=>("0"+e.toString(16)).slice(-2));function L(){const i=4294967296*Math.random()>>>0,e=4294967296*Math.random()>>>0,t=4294967296*Math.random()>>>0,o=4294967296*Math.random()>>>0;return"e"+R[i>>0&255]+R[i>>8&255]+R[i>>16&255]+R[i>>24&255]+R[e>>0&255]+R[e>>8&255]+R[e>>16&255]+R[e>>24&255]+R[t>>0&255]+R[t>>8&255]+R[t>>16&255]+R[t>>24&255]+R[o>>0&255]+R[o>>8&255]+R[o>>16&255]+R[o>>24&255]}const q={get(i="normal"){return typeof i!="number"?this[i]||this.normal:i},highest:1e5,high:1e3,normal:0,low:-1e3,lowest:-1e5};function ee(i,e){const t=q.get(e.priority);for(let o=0;o<i.length;o++)if(q.get(i[o].priority)<t)return void i.splice(o,0,e);i.push(e)}const G="https://ckeditor.com/docs/ckeditor5/latest/support/error-codes.html";class V extends Error{constructor(e,t,o){super(function(s,a){const c=new WeakSet,u=(w,y)=>{if(typeof y=="object"&&y!==null){if(c.has(y))return`[object ${y.constructor.name}]`;c.add(y)}return y},f=a?` ${JSON.stringify(a,u)}`:"",m=ae(s);return s+f+m}(e,o)),this.name="CKEditorError",this.context=t,this.data=o}is(e){return e==="CKEditorError"}static rethrowUnexpectedError(e,t){if(e.is&&e.is("CKEditorError"))throw e;const o=new V(e.message,t);throw o.stack=e.stack,o}}function X(i,e){console.warn(...pe(i,e))}function Q(i,e){console.error(...pe(i,e))}function ae(i){return`
`))this.fire(e.type,e,{inputType:"insertParagraph",targetRanges:[o.createRange(u[0].end)]});else if(e.inputType=="insertText"&&c&&c.includes(`
`,isColorInherited:!1}),o.extendTemplate({attributes:{style:{width:"53px",height:"10px"}}}),this.setTemplate({tag:"div",attributes:{class:["ck","ck-powered-by"],"aria-hidden":!0},children:[{tag:"a",attributes:{href:"https://ckeditor.com/?utm_source=ckeditor&utm_medium=referral&utm_campaign=701Dn000000hVgmIAE_powered_by_ckeditor_logo",target:"_blank",tabindex:"-1"},children:[...t?[{tag:"span",attributes:{class:["ck","ck-powered-by__label"]},children:[t]}]:[],o],on:{dragstart:s.to(a=>a.preventDefault())}}]})}}function yC(i,e,t){return(o,s)=>{const a=o.getVisible();if(!a||o.width<XN||o.height<JN)return sf;let c;c=e.position==="inside"?o.bottom-s.height:o.bottom-s.height/2,c-=e.verticalOffset;const u=t(o,s);if(e.position==="inside"){const f=s.clone().moveTo(u,c);if(f.getIntersectionArea(a)<f.getArea())return sf}else{const f=wc(i);if(f){const m=new Et(f),w=a.bottom+s.height/2>m.bottom,y=e.side==="left"?o.left<m.left:o.right>m.right;if(w||y)return sf}}return{top:c,left:u,name:`position_${e.position}-side_${e.side}`,config:{withArrow:!1}}}}function CC(i){const e=i.config.get("ui.poweredBy"),t=e&&e.position||"border";return ZN({position:t,label:ej,verticalOffset:t==="inside"?5:0,horizontalOffset:5,side:i.locale.contentLanguageDirection==="ltr"?"right":"left"},e)}var oj=Object.defineProperty,AC=Object.getOwnPropertySymbols,rj=Object.prototype.hasOwnProperty,ij=Object.prototype.propertyIsEnumerable,xC=(i,e,t)=>e in i?oj(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;class sj extends Ye(){constructor(e){super(),this.isReady=!1,this._editableElementsMap=new Map,this._focusableToolbarDefinitions=[];const t=e.editing.view;this.editor=e,this.componentFactory=new UN(e),this.focusTracker=new Dr,this.tooltipManager=new rf(e),this.poweredBy=new tj(e),this.set("viewportOffset",this._readViewportOffsetFromConfig()),this.once("ready",()=>{this.isReady=!0}),this.listenTo(t.document,"layoutChanged",this.update.bind(this)),this.listenTo(t,"scrollToTheSelection",this._handleScrollToTheSelection.bind(this)),this._initFocusTracking()}get element(){return null}update(){this.fire("update")}destroy(){this.stopListening(),this.focusTracker.destroy(),this.tooltipManager.destroy(this.editor),this.poweredBy.destroy();for(const e of this._editableElementsMap.values())e.ckeditorInstance=null,this.editor.keystrokes.stopListening(e);this._editableElementsMap=new Map,this._focusableToolbarDefinitions=[]}setEditableElement(e,t){this._editableElementsMap.set(e,t),t.ckeditorInstance||(t.ckeditorInstance=this.editor),this.focusTracker.add(t);const o=()=>{this.editor.editing.view.getDomRoot(e)||this.editor.keystrokes.listenTo(t)};this.isReady?o():this.once("ready",o)}removeEditableElement(e){const t=this._editableElementsMap.get(e);t&&(this._editableElementsMap.delete(e),this.editor.keystrokes.stopListening(t),this.focusTracker.remove(t),t.ckeditorInstance=null)}getEditableElement(e="main"){return this._editableElementsMap.get(e)}getEditableElementsNames(){return this._editableElementsMap.keys()}addToolbar(e,t={}){e.isRendered?(this.focusTracker.add(e.element),this.editor.keystrokes.listenTo(e.element)):e.once("render",()=>{this.focusTracker.add(e.element),this.editor.keystrokes.listenTo(e.element)}),this._focusableToolbarDefinitions.push({toolbarView:e,options:t})}get _editableElements(){return console.warn("editor-ui-deprecated-editable-elements: The EditorUI#_editableElements property has been deprecated and will be removed in the near future.",{editorUI:this}),this._editableElementsMap}_readViewportOffsetFromConfig(){const e=this.editor,t=e.config.get("ui.viewportOffset");if(t)return t;const o=e.config.get("toolbar.viewportTopOffset");return o?(console.warn("editor-ui-deprecated-viewport-offset-config: The `toolbar.vieportTopOffset` configuration option is deprecated. It will be removed from future CKEditor versions. Use `ui.viewportOffset.top` instead."),{top:o}):{top:0}}_initFocusTracking(){const e=this.editor,t=e.editing.view;let o,s;e.keystrokes.set("Alt+F10",(a,c)=>{const u=this.focusTracker.focusedElement;Array.from(this._editableElementsMap.values()).includes(u)&&!Array.from(t.domRoots.values()).includes(u)&&(o=u);const f=this._getCurrentFocusedToolbarDefinition();f&&s||(s=this._getFocusableCandidateToolbarDefinitions());for(let m=0;m<s.length;m++){const w=s.shift();if(s.push(w),w!==f&&this._focusFocusableCandidateToolbar(w)){f&&f.options.afterBlur&&f.options.afterBlur();break}}c()}),e.keystrokes.set("Esc",(a,c)=>{const u=this._getCurrentFocusedToolbarDefinition();u&&(o?(o.focus(),o=null):e.editing.view.focus(),u.options.afterBlur&&u.options.afterBlur(),c())})}_getFocusableCandidateToolbarDefinitions(){const e=[];for(const t of this._focusableToolbarDefinitions){const{toolbarView:o,options:s}=t;(Ji(o.element)||s.beforeFocus)&&e.push(t)}return e.sort((t,o)=>EC(t)-EC(o)),e}_getCurrentFocusedToolbarDefinition(){for(const e of this._focusableToolbarDefinitions)if(e.toolbarView.element&&e.toolbarView.element.contains(this.focusTracker.focusedElement))return e;return null}_focusFocusableCandidateToolbar(e){const{toolbarView:t,options:{beforeFocus:o}}=e;return o&&o(),!!Ji(t.element)&&(t.focus(),!0)}_handleScrollToTheSelection(e,t){const o=((s,a)=>{for(var c in a||(a={}))rj.call(a,c)&&xC(s,c,a[c]);if(AC)for(var c of AC(a))ij.call(a,c)&&xC(s,c,a[c]);return s})({top:0,bottom:0,left:0,right:0},this.viewportOffset);t.viewportOffset.top+=o.top,t.viewportOffset.bottom+=o.bottom,t.viewportOffset.left+=o.left,t.viewportOffset.right+=o.right}}function EC(i){const{toolbarView:e,options:t}=i;let o=10;return Ji(e.element)&&o--,t.isContextual&&o--,o}var SC=h(9688),aj={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Se()(SC.Z,aj),SC.Z.locals;class lj extends nt{constructor(e){super(e),this.body=new YI(e)}render(){super.render(),this.body.attachToDom()}destroy(){return this.body.detachFromDom(),super.destroy()}}class cj extends lj{constructor(e){super(e),this.top=this.createCollection(),this.main=this.createCollection(),this._voiceLabelView=this._createVoiceLabel(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-reset","ck-editor","ck-rounded-corners"],role:"application",dir:e.uiLanguageDirection,lang:e.uiLanguage,"aria-labelledby":this._voiceLabelView.id},children:[this._voiceLabelView,{tag:"div",attributes:{class:["ck","ck-editor__top","ck-reset_all"],role:"presentation"},children:this.top},{tag:"div",attributes:{class:["ck","ck-editor__main"],role:"presentation"},children:this.main}]})}_createVoiceLabel(){const e=this.t,t=new Dv;return t.text=e("Rich Text Editor"),t.extendTemplate({attributes:{class:"ck-voice-label"}}),t}}class dj extends nt{constructor(e,t,o){super(e),this.name=null,this.setTemplate({tag:"div",attributes:{class:["ck","ck-content","ck-editor__editable","ck-rounded-corners"],lang:e.contentLanguage,dir:e.contentLanguageDirection}}),this.set("isFocused",!1),this._editableElement=o,this._hasExternalElement=!!this._editableElement,this._editingView=t}render(){super.render(),this._hasExternalElement?this.template.apply(this.element=this._editableElement):this._editableElement=this.element,this.on("change:isFocused",()=>this._updateIsFocusedClasses()),this._updateIsFocusedClasses()}destroy(){this._hasExternalElement&&this.template.revert(this._editableElement),super.destroy()}get hasExternalElement(){return this._hasExternalElement}_updateIsFocusedClasses(){const e=this._editingView;function t(o){e.change(s=>{const a=e.document.getRoot(o.name);s.addClass(o.isFocused?"ck-focused":"ck-blurred",a),s.removeClass(o.isFocused?"ck-blurred":"ck-focused",a)})}e.isRenderingInProgress?function o(s){e.once("change:isRenderingInProgress",(a,c,u)=>{u?o(s):t(s)})}(this):t(this)}}class uj extends dj{constructor(e,t,o,s={}){super(e,t,o);const a=e.t;this.extendTemplate({attributes:{role:"textbox",class:"ck-editor__editable_inline"}}),this._generateLabel=s.label||(()=>a("Editor editing area: %0",this.name))}render(){super.render();const e=this._editingView;e.change(t=>{const o=e.document.getRoot(this.name);t.setAttribute("aria-label",this._generateLabel(this),o)})}}var DC=h(8847),hj={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Se()(DC.Z,hj),DC.Z.locals;class $m extends Rh{static get pluginName(){return"Notification"}init(){this.on("show:warning",(e,t)=>{window.alert(t.message)},{priority:"lowest"})}showSuccess(e,t={}){this._showNotification({message:e,type:"success",namespace:t.namespace,title:t.title})}showInfo(e,t={}){this._showNotification({message:e,type:"info",namespace:t.namespace,title:t.title})}showWarning(e,t={}){this._showNotification({message:e,type:"warning",namespace:t.namespace,title:t.title})}_showNotification(e){const t=e.namespace?`show:${e.type}:${e.namespace}`:`show:${e.type}`;this.fire(t,{message:e.message,type:e.type,title:e.title||""})}}class TC extends Ye(){constructor(e,t){super(),t&&v_(this,t),e&&this.set(e)}}var IC=h(4650),fj={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Se()(IC.Z,fj),IC.Z.locals;var MC=h(7676),pj={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Se()(MC.Z,pj),MC.Z.locals;const af=Jd("px");class lf extends be{constructor(e){super(e),this._viewToStack=new Map,this._idToStack=new Map,this._view=null,this._rotatorView=null,this._fakePanelsView=null,this.positionLimiter=()=>{const t=this.editor.editing.view,o=t.document.selection.editableElement;return o?t.domConverter.mapViewToDom(o.root):null},this.set("visibleView",null),this.set("_numberOfStacks",0),this.set("_singleViewMode",!1)}static get pluginName(){return"ContextualBalloon"}destroy(){super.destroy(),this._view&&this._view.destroy(),this._rotatorView&&this._rotatorView.destroy(),this._fakePanelsView&&this._fakePanelsView.destroy()}get view(){return this._view||this._createPanelView(),this._view}hasView(e){return Array.from(this._viewToStack.keys()).includes(e)}add(e){if(this._view||this._createPanelView(),this.hasView(e.view))throw new V("contextualballoon-add-view-exist",[this,e]);const t=e.stackId||"main";if(!this._idToStack.has(t))return this._idToStack.set(t,new Map([[e.view,e]])),this._viewToStack.set(e.view,this._idToStack.get(t)),this._numberOfStacks=this._idToStack.size,void(this._visibleStack&&!e.singleViewMode||this.showStack(t));const o=this._idToStack.get(t);e.singleViewMode&&this.showStack(t),o.set(e.view,e),this._viewToStack.set(e.view,o),o===this._visibleStack&&this._showView(e)}remove(e){if(!this.hasView(e))throw new V("contextualballoon-remove-view-not-exist",[this,e]);const t=this._viewToStack.get(e);this._singleViewMode&&this.visibleView===e&&(this._singleViewMode=!1),this.visibleView===e&&(t.size===1?this._idToStack.size>1?this._showNextStack():(this.view.hide(),this.visibleView=null,this._rotatorView.hideView()):this._showView(Array.from(t.values())[t.size-2])),t.size===1?(this._idToStack.delete(this._getStackId(t)),this._numberOfStacks=this._idToStack.size):t.delete(e),this._viewToStack.delete(e)}updatePosition(e){e&&(this._visibleStack.get(this.visibleView).position=e),this.view.pin(this._getBalloonPosition()),this._fakePanelsView.updatePosition()}showStack(e){this.visibleStack=e;const t=this._idToStack.get(e);if(!t)throw new V("contextualballoon-showstack-stack-not-exist",this);this._visibleStack!==t&&this._showView(Array.from(t.values()).pop())}_createPanelView(){this._view=new Ho(this.editor.locale),this.editor.ui.view.body.add(this._view),this.editor.ui.focusTracker.add(this._view.element),this._rotatorView=this._createRotatorView(),this._fakePanelsView=this._createFakePanelsView()}get _visibleStack(){return this._viewToStack.get(this.visibleView)}_getStackId(e){return Array.from(this._idToStack.entries()).find(t=>t[1]===e)[0]}_showNextStack(){const e=Array.from(this._idToStack.values());let t=e.indexOf(this._visibleStack)+1;e[t]||(t=0),this.showStack(this._getStackId(e[t]))}_showPrevStack(){const e=Array.from(this._idToStack.values());let t=e.indexOf(this._visibleStack)-1;e[t]||(t=e.length-1),this.showStack(this._getStackId(e[t]))}_createRotatorView(){const e=new gj(this.editor.locale),t=this.editor.locale.t;return this.view.content.add(e),e.bind("isNavigationVisible").to(this,"_numberOfStacks",this,"_singleViewMode",(o,s)=>!s&&o>1),e.on("change:isNavigationVisible",()=>this.updatePosition(),{priority:"low"}),e.bind("counter").to(this,"visibleView",this,"_numberOfStacks",(o,s)=>{if(s<2)return"";const a=Array.from(this._idToStack.values()).indexOf(this._visibleStack)+1;return t("%0 of %1",[a,s])}),e.buttonNextView.on("execute",()=>{e.focusTracker.isFocused&&this.editor.editing.view.focus(),this._showNextStack()}),e.buttonPrevView.on("execute",()=>{e.focusTracker.isFocused&&this.editor.editing.view.focus(),this._showPrevStack()}),e}_createFakePanelsView(){const e=new mj(this.editor.locale,this.view);return e.bind("numberOfPanels").to(this,"_numberOfStacks",this,"_singleViewMode",(t,o)=>!o&&t>=2?Math.min(t-1,2):0),e.listenTo(this.view,"change:top",()=>e.updatePosition()),e.listenTo(this.view,"change:left",()=>e.updatePosition()),this.editor.ui.view.body.add(e),e}_showView({view:e,balloonClassName:t="",withArrow:o=!0,singleViewMode:s=!1}){this.view.class=t,this.view.withArrow=o,this._rotatorView.showView(e),this.visibleView=e,this.view.pin(this._getBalloonPosition()),this._fakePanelsView.updatePosition(),s&&(this._singleViewMode=!0)}_getBalloonPosition(){let e=Array.from(this._visibleStack.values()).pop().position;return e&&(e.limiter||(e=Object.assign({},e,{limiter:this.positionLimiter})),e=Object.assign({},e,{viewportOffsetConfig:this.editor.ui.viewportOffset})),e}}class gj extends nt{constructor(e){super(e);const t=e.t,o=this.bindTemplate;this.set("isNavigationVisible",!0),this.focusTracker=new Dr,this.buttonPrevView=this._createButtonView(t("Previous"),'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11.463 5.187a.888.888 0 1 1 1.254 1.255L9.16 10l3.557 3.557a.888.888 0 1 1-1.254 1.255L7.26 10.61a.888.888 0 0 1 .16-1.382l4.043-4.042z"/></svg>'),this.buttonNextView=this._createButtonView(t("Next"),'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.537 14.813a.888.888 0 1 1-1.254-1.255L10.84 10 7.283 6.442a.888.888 0 1 1 1.254-1.255L12.74 9.39a.888.888 0 0 1-.16 1.382l-4.043 4.042z"/></svg>'),this.content=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-balloon-rotator"],"z-index":"-1"},children:[{tag:"div",attributes:{class:["ck-balloon-rotator__navigation",o.to("isNavigationVisible",s=>s?"":"ck-hidden")]},children:[this.buttonPrevView,{tag:"span",attributes:{class:["ck-balloon-rotator__counter"]},children:[{text:o.to("counter")}]},this.buttonNextView]},{tag:"div",attributes:{class:"ck-balloon-rotator__content"},children:this.content}]})}render(){super.render(),this.focusTracker.add(this.element)}destroy(){super.destroy(),this.focusTracker.destroy()}showView(e){this.hideView(),this.content.add(e)}hideView(){this.content.clear()}_createButtonView(e,t){const o=new Qt(this.locale);return o.set({label:e,icon:t,tooltip:!0}),o}}class mj extends nt{constructor(e,t){super(e);const o=this.bindTemplate;this.set("top",0),this.set("left",0),this.set("height",0),this.set("width",0),this.set("numberOfPanels",0),this.content=this.createCollection(),this._balloonPanelView=t,this.setTemplate({tag:"div",attributes:{class:["ck-fake-panel",o.to("numberOfPanels",s=>s?"":"ck-hidden")],style:{top:o.to("top",af),left:o.to("left",af),width:o.to("width",af),height:o.to("height",af)}},children:this.content}),this.on("change:numberOfPanels",(s,a,c,u)=>{c>u?this._addPanels(c-u):this._removePanels(u-c),this.updatePosition()})}_addPanels(e){for(;e--;){const t=new nt;t.setTemplate({tag:"div"}),this.content.add(t),this.registerChild(t)}}_removePanels(e){for(;e--;){const t=this.content.last;this.content.remove(t),this.deregisterChild(t),t.destroy()}}updatePosition(){if(this.numberOfPanels){const{top:e,left:t}=this._balloonPanelView,{width:o,height:s}=new Et(this._balloonPanelView.element);Object.assign(this,{top:e,left:t,width:o,height:s})}}}var NC=h(5868),kj={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Se()(NC.Z,kj),NC.Z.locals;const Bc=Jd("px");class bj extends nt{constructor(e){super(e);const t=this.bindTemplate;this.set("isActive",!1),this.set("isSticky",!1),this.set("limiterElement",null),this.set("limiterBottomOffset",50),this.set("viewportTopOffset",0),this.set("_marginLeft",null),this.set("_isStickyToTheBottomOfLimiter",!1),this.set("_stickyTopOffset",null),this.set("_stickyBottomOffset",null),this.content=this.createCollection(),this._contentPanelPlaceholder=new qr({tag:"div",attributes:{class:["ck","ck-sticky-panel__placeholder"],style:{display:t.to("isSticky",o=>o?"block":"none"),height:t.to("isSticky",o=>o?Bc(this._contentPanelRect.height):null)}}}).render(),this._contentPanel=new qr({tag:"div",attributes:{class:["ck","ck-sticky-panel__content",t.if("isSticky","ck-sticky-panel__content_sticky"),t.if("_isStickyToTheBottomOfLimiter","ck-sticky-panel__content_sticky_bottom-limit")],style:{width:t.to("isSticky",o=>o?Bc(this._contentPanelPlaceholder.getBoundingClientRect().width):null),top:t.to("_stickyTopOffset",o=>o&&Bc(o)),bottom:t.to("_stickyBottomOffset",o=>o&&Bc(o)),marginLeft:t.to("_marginLeft")}},children:this.content}).render(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-sticky-panel"]},children:[this._contentPanelPlaceholder,this._contentPanel]})}render(){super.render(),this.checkIfShouldBeSticky(),this.listenTo(qe.document,"scroll",(e,t)=>{this.checkIfShouldBeSticky(t.target)},{useCapture:!0}),this.listenTo(this,"change:isActive",()=>{this.checkIfShouldBeSticky()})}checkIfShouldBeSticky(e){if(!this.limiterElement||!this.isActive)return void this._unstick();const t=function(a){const c=[];let u=wc(a);for(;u&&u!==qe.document.body;)c.push(u),u=wc(u);return c.push(qe.document),c}(this.limiterElement);if(e&&!t.includes(e))return;const o=function(a,c=0){const u=a.map(m=>{if(m instanceof Document){const w=new Et(qe.window);return w.top+=c,w.height-=c,w}return new Et(m)});let f=u[0];for(const m of u.slice(1))f&&(f=f.getIntersection(m));return f}(t,this.viewportTopOffset),s=new Et(this.limiterElement);if(o&&s.top<o.top){const a=s.getIntersection(o);if(a){const c=o.top;if(c+this._contentPanelRect.height+this.limiterBottomOffset>a.bottom){const u=Math.max(s.bottom-o.bottom,0)+this.limiterBottomOffset;s.bottom-u>s.top+this._contentPanelRect.height?this._stickToBottomOfLimiter(u):this._unstick()}else this._contentPanelRect.height+this.limiterBottomOffset<s.height?this._stickToTopOfAncestors(c):this._unstick()}else this._unstick()}else this._unstick()}_stickToTopOfAncestors(e){this.isSticky=!0,this._isStickyToTheBottomOfLimiter=!1,this._stickyTopOffset=e,this._stickyBottomOffset=null,this._marginLeft=Bc(-qe.window.scrollX)}_stickToBottomOfLimiter(e){this.isSticky=!0,this._isStickyToTheBottomOfLimiter=!0,this._stickyTopOffset=null,this._stickyBottomOffset=e,this._marginLeft=Bc(-qe.window.scrollX)}_unstick(){this.isSticky=!1,this._isStickyToTheBottomOfLimiter=!1,this._stickyTopOffset=null,this._stickyBottomOffset=null,this._marginLeft=null}get _contentPanelRect(){return new Et(this._contentPanel)}}var jC=h(9695),wj={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Se()(jC.Z,wj),jC.Z.locals;class vj extends sj{constructor(e,t){super(e),this.view=t,this._toolbarConfig=Pv(e.config.get("toolbar")),this._elementReplacer=new go,this.listenTo(e.editing.view,"scrollToTheSelection",this._handleScrollToTheSelectionWithStickyPanel.bind(this))}get element(){return this.view.element}init(e){const t=this.editor,o=this.view,s=t.editing.view,a=o.editable,c=s.document.getRoot();a.name=c.rootName,o.render();const u=a.element;this.setEditableElement(a.name,u),o.editable.bind("isFocused").to(this.focusTracker),s.attachDomRoot(u),e&&this._elementReplacer.replace(e,this.element),this._initPlaceholder(),this._initToolbar(),this.fire("ready")}destroy(){super.destroy();const e=this.view,t=this.editor.editing.view;this._elementReplacer.restore(),t.detachDomRoot(e.editable.name),e.destroy()}_initToolbar(){const e=this.view;e.stickyPanel.bind("isActive").to(this.focusTracker,"isFocused"),e.stickyPanel.limiterElement=e.element,e.stickyPanel.bind("viewportTopOffset").to(this,"viewportOffset",({top:t})=>t||0),e.toolbar.fillFromConfig(this._toolbarConfig,this.componentFactory),this.addToolbar(e.toolbar)}_initPlaceholder(){const e=this.editor,t=e.editing.view,o=t.document.getRoot(),s=e.sourceElement;let a;const c=e.config.get("placeholder");c&&(a=typeof c=="string"?c:c[this.view.editable.name]),!a&&s&&s.tagName.toLowerCase()==="textarea"&&(a=s.getAttribute("placeholder")),a&&(o.placeholder=a),Uv({view:t,element:o,isDirectHost:!1,keepOnFocus:!0})}_handleScrollToTheSelectionWithStickyPanel(e,t,o){const s=this.view.stickyPanel;if(s.isSticky){const a=new Et(s.element).height;t.viewportOffset.top+=a}else{const a=()=>{this.editor.editing.view.scrollToTheSelection(o)};this.listenTo(s,"change:isSticky",a),setTimeout(()=>{this.stopListening(s,"change:isSticky",a)},20)}}}var PC=h(3143),_j={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Se()(PC.Z,_j),PC.Z.locals;class yj extends cj{constructor(e,t,o={}){super(e),this.stickyPanel=new bj(e),this.toolbar=new Tm(e,{shouldGroupWhenFull:o.shouldToolbarGroupWhenFull}),this.editable=new uj(e,t)}render(){super.render(),this.stickyPanel.content.add(this.toolbar),this.top.add(this.stickyPanel),this.main.add(this.editable)}}class BC{constructor(e){if(this.crashes=[],this.state="initializing",this._now=Date.now,this.crashes=[],this._crashNumberLimit=typeof e.crashNumberLimit=="number"?e.crashNumberLimit:3,this._minimumNonErrorTimePeriod=typeof e.minimumNonErrorTimePeriod=="number"?e.minimumNonErrorTimePeriod:5e3,this._boundErrorHandler=t=>{const o="error"in t?t.error:t.reason;o instanceof Error&&this._handleError(o,t)},this._listeners={},!this._restart)throw new Error("The Watchdog class was split into the abstract `Watchdog` class and the `EditorWatchdog` class. Please, use `EditorWatchdog` if you have used the `Watchdog` class previously.")}destroy(){this._stopErrorHandling(),this._listeners={}}on(e,t){this._listeners[e]||(this._listeners[e]=[]),this._listeners[e].push(t)}off(e,t){this._listeners[e]=this._listeners[e].filter(o=>o!==t)}_fire(e,...t){const o=this._listeners[e]||[];for(const s of o)s.apply(this,[null,...t])}_startErrorHandling(){window.addEventListener("error",this._boundErrorHandler),window.addEventListener("unhandledrejection",this._boundErrorHandler)}_stopErrorHandling(){window.removeEventListener("error",this._boundErrorHandler),window.removeEventListener("unhandledrejection",this._boundErrorHandler)}_handleError(e,t){if(this._shouldReactToError(e)){this.crashes.push({message:e.message,stack:e.stack,filename:t instanceof ErrorEvent?t.filename:void 0,lineno:t instanceof ErrorEvent?t.lineno:void 0,colno:t instanceof ErrorEvent?t.colno:void 0,date:this._now()});const o=this._shouldRestart();this.state="crashed",this._fire("stateChange"),this._fire("error",{error:e,causesRestart:o}),o?this._restart():(this.state="crashedPermanently",this._fire("stateChange"))}}_shouldReactToError(e){return e.is&&e.is("CKEditorError")&&e.context!==void 0&&e.context!==null&&this.state==="ready"&&this._isErrorComingFromThisItem(e)}_shouldRestart(){return this.crashes.length<=this._crashNumberLimit?!0:(this.crashes[this.crashes.length-1].date-this.crashes[this.crashes.length-1-this._crashNumberLimit].date)/this._crashNumberLimit>this._minimumNonErrorTimePeriod}}function Wm(i,e=new Set){const t=[i],o=new Set;let s=0;for(;t.length>s;){const a=t[s++];if(!o.has(a)&&Cj(a)&&!e.has(a))if(o.add(a),Symbol.iterator in a)try{for(const c of a)t.push(c)}catch{}else for(const c in a)c!=="defaultValue"&&t.push(a[c])}return o}function Cj(i){const e=Object.prototype.toString.call(i),t=typeof i;return!(t==="number"||t==="boolean"||t==="string"||t==="symbol"||t==="function"||e==="[object Date]"||e==="[object RegExp]"||e==="[object Module]"||i==null||i._watchdogExcluded||i instanceof EventTarget||i instanceof Event)}function OC(i,e,t=new Set){if(i===e&&typeof(o=i)=="object"&&o!==null)return!0;var o;const s=Wm(i,t),a=Wm(e,t);for(const c of s)if(a.has(c))return!0;return!1}var Aj=Object.defineProperty,xj=Object.defineProperties,Ej=Object.getOwnPropertyDescriptors,cf=Object.getOwnPropertySymbols,LC=Object.prototype.hasOwnProperty,RC=Object.prototype.propertyIsEnumerable,zC=(i,e,t)=>e in i?Aj(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,qm=(i,e)=>{for(var t in e||(e={}))LC.call(e,t)&&zC(i,t,e[t]);if(cf)for(var t of cf(e))RC.call(e,t)&&zC(i,t,e[t]);return i};class FC extends BC{constructor(e,t={}){super(t),this._editor=null,this._initUsingData=!0,this._editables={},this._throttledSave=Hm(this._save.bind(this),typeof t.saveInterval=="number"?t.saveInterval:5e3),e&&(this._creator=(o,s)=>e.create(o,s)),this._destructor=o=>o.destroy()}get editor(){return this._editor}get _item(){return this._editor}setCreator(e){this._creator=e}setDestructor(e){this._destructor=e}_restart(){return Promise.resolve().then(()=>(this.state="initializing",this._fire("stateChange"),this._destroy())).catch(e=>{console.error("An error happened during the editor destroying.",e)}).then(()=>{const e={},t=[],o=this._config.rootsAttributes||{},s={};for(const[f,m]of Object.entries(this._data.roots))m.isLoaded?(e[f]="",s[f]=o[f]||{}):t.push(f);const a=(c=qm({},this._config),u={extraPlugins:this._config.extraPlugins||[],lazyRoots:t,rootsAttributes:s,_watchdogInitialData:this._data},xj(c,Ej(u)));var c,u;return delete a.initialData,a.extraPlugins.push(Sj),this._initUsingData?this.create(e,a,a.context):Vn(this._elementOrData)?this.create(this._elementOrData,a,a.context):this.create(this._editables,a,a.context)}).then(()=>{this._fire("restart")})}create(e=this._elementOrData,t=this._config,o){return Promise.resolve().then(()=>(super._startErrorHandling(),this._elementOrData=e,this._initUsingData=typeof e=="string"||Object.keys(e).length>0&&typeof Object.values(e)[0]=="string",this._config=this._cloneEditorConfiguration(t)||{},this._config.context=o,this._creator(e,this._config))).then(s=>{this._editor=s,s.model.document.on("change:data",this._throttledSave),this._lastDocumentVersion=s.model.document.version,this._data=this._getData(),this._initUsingData||(this._editables=this._getEditables()),this.state="ready",this._fire("stateChange")})}destroy(){return Promise.resolve().then(()=>(this.state="destroyed",this._fire("stateChange"),super.destroy(),this._destroy()))}_destroy(){return Promise.resolve().then(()=>{this._stopErrorHandling(),this._throttledSave.cancel();const e=this._editor;return this._editor=null,e.model.document.off("change:data",this._throttledSave),this._destructor(e)})}_save(){const e=this._editor.model.document.version;try{this._data=this._getData(),this._initUsingData||(this._editables=this._getEditables()),this._lastDocumentVersion=e}catch(t){console.error(t,"An error happened during restoring editor data. Editor will be restored from the previously saved data.")}}_setExcludedProperties(e){this._excludedProps=e}_getData(){const e=this._editor,t=e.model.document.roots.filter(u=>u.isAttached()&&u.rootName!="$graveyard"),{plugins:o}=e,s=o.has("CommentsRepository")&&o.get("CommentsRepository"),a=o.has("TrackChanges")&&o.get("TrackChanges"),c={roots:{},markers:{},commentThreads:JSON.stringify([]),suggestions:JSON.stringify([])};t.forEach(u=>{c.roots[u.rootName]={content:JSON.stringify(Array.from(u.getChildren())),attributes:JSON.stringify(Array.from(u.getAttributes())),isLoaded:u._isLoaded}});for(const u of e.model.markers)u._affectsData&&(c.markers[u.name]={rangeJSON:u.getRange().toJSON(),usingOperation:u._managedUsingOperations,affectsData:u._affectsData});return s&&(c.commentThreads=JSON.stringify(s.getCommentThreads({toJSON:!0,skipNotAttached:!0}))),a&&(c.suggestions=JSON.stringify(a.getSuggestions({toJSON:!0,skipNotAttached:!0}))),c}_getEditables(){const e={};for(const t of this.editor.model.document.getRootNames()){const o=this.editor.ui.getEditableElement(t);o&&(e[t]=o)}return e}_isErrorComingFromThisItem(e){return OC(this._editor,e.context,this._excludedProps)}_cloneEditorConfiguration(e){return Mn(e,(t,o)=>Vn(t)||o==="context"?t:void 0)}}class Sj{constructor(e){this.editor=e,this._data=e.config.get("_watchdogInitialData")}init(){this.editor.data.on("init",e=>{e.stop(),this.editor.model.enqueueChange({isUndoable:!1},t=>{this._restoreCollaborationData(),this._restoreEditorData(t)}),this.editor.data.fire("ready")},{priority:999})}_createNode(e,t){if("name"in t){const o=e.createElement(t.name,t.attributes);if(t.children)for(const s of t.children)o._appendChild(this._createNode(e,s));return o}return e.createText(t.data,t.attributes)}_restoreEditorData(e){const t=this.editor;Object.entries(this._data.roots).forEach(([o,{content:s,attributes:a}])=>{const c=JSON.parse(s),u=JSON.parse(a),f=t.model.document.getRoot(o);for(const[m,w]of u)e.setAttribute(m,w,f);for(const m of c){const w=this._createNode(e,m);e.insert(w,f,"end")}}),Object.entries(this._data.markers).forEach(([o,s])=>{const{document:a}=t.model,c=s,{rangeJSON:{start:u,end:f}}=c,m=((B,F)=>{var $={};for(var W in B)LC.call(B,W)&&F.indexOf(W)<0&&($[W]=B[W]);if(B!=null&&cf)for(var W of cf(B))F.indexOf(W)<0&&RC.call(B,W)&&($[W]=B[W]);return $})(c,["rangeJSON"]),w=a.getRoot(u.root),y=e.createPositionFromPath(w,u.path,u.stickiness),S=e.createPositionFromPath(w,f.path,f.stickiness),N=e.createRange(y,S);e.addMarker(o,qm({range:N},m))})}_restoreCollaborationData(){const e=JSON.parse(this._data.commentThreads),t=JSON.parse(this._data.suggestions);e.forEach(o=>{const s=this.editor.config.get("collaboration.channelId"),a=this.editor.plugins.get("CommentsRepository");a.hasCommentThread(o.threadId)&&a.getCommentThread(o.threadId).remove(),a.addCommentThread(qm({channelId:s},o))}),t.forEach(o=>{const s=this.editor.plugins.get("TrackChangesEditing");s.hasSuggestion(o.id)?s.getSuggestion(o.id).attributes=o.attributes:s.addSuggestionData(o)})}}const mu=Symbol("MainQueueId");class Dj{constructor(){this._onEmptyCallbacks=[],this._queues=new Map,this._activeActions=0}onEmpty(e){this._onEmptyCallbacks.push(e)}enqueue(e,t){const o=e===mu;this._activeActions++,this._queues.get(e)||this._queues.set(e,Promise.resolve());const s=(o?Promise.all(this._queues.values()):Promise.all([this._queues.get(mu),this._queues.get(e)])).then(t),a=s.catch(()=>{});return this._queues.set(e,a),s.finally(()=>{this._activeActions--,this._queues.get(e)===a&&this._activeActions===0&&this._onEmptyCallbacks.forEach(c=>c())})}}function VC(i){return Array.isArray(i)?i:[i]}class df extends tf(Dm(wN)){constructor(e,t={}){if(!uf(e)&&t.initialData!==void 0)throw new V("editor-create-initial-data",null);super(t),this.config.get("initialData")===void 0&&this.config.set("initialData",function(a){return uf(a)?(c=a,c instanceof HTMLTextAreaElement?c.value:c.innerHTML):a;var c}(e)),uf(e)&&(this.sourceElement=e),this.model.document.createRoot();const o=!this.config.get("toolbar.shouldNotGroupWhenFull"),s=new yj(this.locale,this.editing.view,{shouldToolbarGroupWhenFull:o});this.ui=new vj(this,s),function(a){if(!Zn(a.updateSourceElement))throw new V("attachtoform-missing-elementapi-interface",a);const c=a.sourceElement;if(function(u){return!!u&&u.tagName.toLowerCase()==="textarea"}(c)&&c.form){let u;const f=c.form,m=()=>a.updateSourceElement();Zn(f.submit)&&(u=f.submit,f.submit=()=>{m(),u.apply(f)}),f.addEventListener("submit",m),a.on("destroy",()=>{f.removeEventListener("submit",m),u&&(f.submit=u)})}}(this)}destroy(){return this.sourceElement&&this.updateSourceElement(),this.ui.destroy(),super.destroy()}static create(e,t={}){return new Promise(o=>{const s=new this(e,t);o(s.initPlugins().then(()=>s.ui.init(uf(e)?e:null)).then(()=>s.data.init(s.config.get("initialData"))).then(()=>s.fire("ready")).then(()=>s))})}}function uf(i){return Vn(i)}df.Context=zv,df.EditorWatchdog=FC,df.ContextWatchdog=class extends BC{constructor(i,e={}){super(e),this._watchdogs=new Map,this._context=null,this._contextProps=new Set,this._actionQueues=new Dj,this._watchdogConfig=e,this._creator=t=>i.create(t),this._destructor=t=>t.destroy(),this._actionQueues.onEmpty(()=>{this.state==="initializing"&&(this.state="ready",this._fire("stateChange"))})}setCreator(i){this._creator=i}setDestructor(i){this._destructor=i}get context(){return this._context}create(i={}){return this._actionQueues.enqueue(mu,()=>(this._contextConfig=i,this._create()))}getItem(i){return this._getWatchdog(i)._item}getItemState(i){return this._getWatchdog(i).state}add(i){const e=VC(i);return Promise.all(e.map(t=>this._actionQueues.enqueue(t.id,()=>{if(this.state==="destroyed")throw new Error("Cannot add items to destroyed watchdog.");if(!this._context)throw new Error("Context was not created yet. You should call the `ContextWatchdog#create()` method first.");let o;if(this._watchdogs.has(t.id))throw new Error(`Item with the given id is already added: '${t.id}'.`);if(t.type==="editor")return o=new FC(null,this._watchdogConfig),o.setCreator(t.creator),o._setExcludedProperties(this._contextProps),t.destructor&&o.setDestructor(t.destructor),this._watchdogs.set(t.id,o),o.on("error",(s,{error:a,causesRestart:c})=>{this._fire("itemError",{itemId:t.id,error:a}),c&&this._actionQueues.enqueue(t.id,()=>new Promise(u=>{const f=()=>{o.off("restart",f),this._fire("itemRestart",{itemId:t.id}),u()};o.on("restart",f)}))}),o.create(t.sourceElementOrData,t.config,this._context);throw new Error(`Not supported item type: '${t.type}'.`)})))}remove(i){const e=VC(i);return Promise.all(e.map(t=>this._actionQueues.enqueue(t,()=>{const o=this._getWatchdog(t);return this._watchdogs.delete(t),o.destroy()})))}destroy(){return this._actionQueues.enqueue(mu,()=>(this.state="destroyed",this._fire("stateChange"),super.destroy(),this._destroy()))}_restart(){return this._actionQueues.enqueue(mu,()=>(this.state="initializing",this._fire("stateChange"),this._destroy().catch(i=>{console.error("An error happened during destroying the context or items.",i)}).then(()=>this._create()).then(()=>this._fire("restart"))))}_create(){return Promise.resolve().then(()=>(this._startErrorHandling(),this._creator(this._contextConfig))).then(i=>(this._context=i,this._contextProps=Wm(this._context),Promise.all(Array.from(this._watchdogs.values()).map(e=>(e._setExcludedProperties(this._contextProps),e.create(void 0,void 0,this._context))))))}_destroy(){return Promise.resolve().then(()=>{this._stopErrorHandling();const i=this._context;return this._context=null,this._contextProps=new Set,Promise.all(Array.from(this._watchdogs.values()).map(e=>e.destroy())).then(()=>this._destructor(i))})}_getWatchdog(i){const e=this._watchdogs.get(i);if(!e)throw new Error(`Item with the given id was not registered: ${i}.`);return e}_isErrorComingFromThisItem(i){for(const e of this._watchdogs.values())if(e._isErrorComingFromThisItem(i))return!1;return OC(this._context,i.context)}};class Gm extends Gs{constructor(e){super(e),this.domEventType=["paste","copy","cut","drop","dragover","dragstart","dragend","dragenter","dragleave"];const t=this.document;function o(s){return(a,c)=>{c.preventDefault();const u=c.dropRange?[c.dropRange]:null,f=new j(t,s);t.fire(f,{dataTransfer:c.dataTransfer,method:a.name,targetRanges:u,target:c.target,domEvent:c.domEvent}),f.stop.called&&c.stopPropagation()}}this.listenTo(t,"paste",o("clipboardInput"),{priority:"low"}),this.listenTo(t,"drop",o("clipboardInput"),{priority:"low"}),this.listenTo(t,"dragover",o("dragging"),{priority:"low"})}onDomEvent(e){const t="clipboardData"in e?e.clipboardData:e.dataTransfer,o=e.type=="drop"||e.type=="paste",s={dataTransfer:new T_(t,{cacheFiles:o})};e.type!="drop"&&e.type!="dragover"||(s.dropRange=function(a,c){const u=c.target.ownerDocument,f=c.clientX,m=c.clientY;let w;return u.caretRangeFromPoint&&u.caretRangeFromPoint(f,m)?w=u.caretRangeFromPoint(f,m):c.rangeParent&&(w=u.createRange(),w.setStart(c.rangeParent,c.rangeOffset),w.collapse(!0)),w?a.domConverter.domRangeToView(w):null}(this.view,e)),this.fire(e.type,e,s)}}const UC=["figcaption","li"];function HC(i){let e="";if(i.is("$text")||i.is("$textProxy"))e=i.data;else if(i.is("element","img")&&i.hasAttribute("alt"))e=i.getAttribute("alt");else if(i.is("element","br"))e=`
`;else{let t=null;for(const o of i.getChildren()){const s=HC(o);t&&(t.is("containerElement")||o.is("containerElement"))&&(UC.includes(t.name)||UC.includes(o.name)?e+=`
`:e+=`
