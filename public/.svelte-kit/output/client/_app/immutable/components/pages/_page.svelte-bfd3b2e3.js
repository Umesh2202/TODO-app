import{S as ne,i as re,s as se,k as N,q as B,a as v,l as x,m as P,r as U,h as R,c as q,n as T,I as Ne,b as j,G as S,J as K,u as ct,K as lt,L as ut,B as $,o as Ie,M as xe,f as I,g as ft,d as dt,t as V,N as pt,H as ht,w as me,x as ye,y as be,z as Ee}from"../../chunks/index-41e027b4.js";import{w as mt}from"../../chunks/index-09f3da04.js";function yt(t){const e=t-1;return e*e*e+1}function bt(t,{delay:e=0,duration:n=400,easing:r=yt,x:s=0,y:o=0,opacity:i=0}={}){const c=getComputedStyle(t),u=+c.opacity,l=c.transform==="none"?"":c.transform,f=u*(1-i);return{delay:e,duration:n,easing:r,css:(h,m)=>`
			transform: ${l} translate(${(1-h)*s}px, ${(1-h)*o}px);
			opacity: ${u-f*m}`}}const He=async()=>{let t=await fetch("https://node-todo.up.railway.app/read");return t=await t.json(),t},Et=async t=>{await fetch("https://node-todo.up.railway.app/write",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({data:t})})},wt=async t=>{await fetch(`https://node-todo.up.railway.app/delete/${t}`,{method:"DELETE",headers:{"Content-Type":"application/json"}})};function Me(t,e){return function(){return t.apply(e,arguments)}}const{toString:ze}=Object.prototype,{getPrototypeOf:we}=Object,_e=(t=>e=>{const n=ze.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),D=t=>(t=t.toLowerCase(),e=>_e(e)===t),oe=t=>e=>typeof e===t,{isArray:z}=Array,W=oe("undefined");function _t(t){return t!==null&&!W(t)&&t.constructor!==null&&!W(t.constructor)&&L(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const Je=D("ArrayBuffer");function Ot(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&Je(t.buffer),e}const St=oe("string"),L=oe("function"),Ve=oe("number"),Oe=t=>t!==null&&typeof t=="object",Rt=t=>t===!0||t===!1,Q=t=>{if(_e(t)!=="object")return!1;const e=we(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},gt=D("Date"),Tt=D("File"),At=D("Blob"),Nt=D("FileList"),xt=t=>Oe(t)&&L(t.pipe),Pt=t=>{const e="[object FormData]";return t&&(typeof FormData=="function"&&t instanceof FormData||ze.call(t)===e||L(t.toString)&&t.toString()===e)},Ct=D("URLSearchParams"),kt=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function G(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let r,s;if(typeof t!="object"&&(t=[t]),z(t))for(r=0,s=t.length;r<s;r++)e.call(null,t[r],r,t);else{const o=n?Object.getOwnPropertyNames(t):Object.keys(t),i=o.length;let c;for(r=0;r<i;r++)c=o[r],e.call(null,t[c],c,t)}}function We(t,e){e=e.toLowerCase();const n=Object.keys(t);let r=n.length,s;for(;r-- >0;)if(s=n[r],e===s.toLowerCase())return s;return null}const Ke=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),Ge=t=>!W(t)&&t!==Ke;function fe(){const{caseless:t}=Ge(this)&&this||{},e={},n=(r,s)=>{const o=t&&We(e,s)||s;Q(e[o])&&Q(r)?e[o]=fe(e[o],r):Q(r)?e[o]=fe({},r):z(r)?e[o]=r.slice():e[o]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&G(arguments[r],n);return e}const Dt=(t,e,n,{allOwnKeys:r}={})=>(G(e,(s,o)=>{n&&L(s)?t[o]=Me(s,n):t[o]=s},{allOwnKeys:r}),t),Ft=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),Bt=(t,e,n,r)=>{t.prototype=Object.create(e.prototype,r),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},Ut=(t,e,n,r)=>{let s,o,i;const c={};if(e=e||{},t==null)return e;do{for(s=Object.getOwnPropertyNames(t),o=s.length;o-- >0;)i=s[o],(!r||r(i,t,e))&&!c[i]&&(e[i]=t[i],c[i]=!0);t=n!==!1&&we(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},Lt=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const r=t.indexOf(e,n);return r!==-1&&r===n},jt=t=>{if(!t)return null;if(z(t))return t;let e=t.length;if(!Ve(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},$t=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&we(Uint8Array)),vt=(t,e)=>{const r=(t&&t[Symbol.iterator]).call(t);let s;for(;(s=r.next())&&!s.done;){const o=s.value;e.call(t,o[0],o[1])}},qt=(t,e)=>{let n;const r=[];for(;(n=t.exec(e))!==null;)r.push(n);return r},It=D("HTMLFormElement"),Ht=t=>t.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),Pe=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),Mt=D("RegExp"),Xe=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),r={};G(n,(s,o)=>{e(s,o,t)!==!1&&(r[o]=s)}),Object.defineProperties(t,r)},zt=t=>{Xe(t,(e,n)=>{if(L(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=t[n];if(L(r)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Jt=(t,e)=>{const n={},r=s=>{s.forEach(o=>{n[o]=!0})};return z(t)?r(t):r(String(t).split(e)),n},Vt=()=>{},Wt=(t,e)=>(t=+t,Number.isFinite(t)?t:e),Kt=t=>{const e=new Array(10),n=(r,s)=>{if(Oe(r)){if(e.indexOf(r)>=0)return;if(!("toJSON"in r)){e[s]=r;const o=z(r)?[]:{};return G(r,(i,c)=>{const u=n(i,s+1);!W(u)&&(o[c]=u)}),e[s]=void 0,o}}return r};return n(t,0)},a={isArray:z,isArrayBuffer:Je,isBuffer:_t,isFormData:Pt,isArrayBufferView:Ot,isString:St,isNumber:Ve,isBoolean:Rt,isObject:Oe,isPlainObject:Q,isUndefined:W,isDate:gt,isFile:Tt,isBlob:At,isRegExp:Mt,isFunction:L,isStream:xt,isURLSearchParams:Ct,isTypedArray:$t,isFileList:Nt,forEach:G,merge:fe,extend:Dt,trim:kt,stripBOM:Ft,inherits:Bt,toFlatObject:Ut,kindOf:_e,kindOfTest:D,endsWith:Lt,toArray:jt,forEachEntry:vt,matchAll:qt,isHTMLForm:It,hasOwnProperty:Pe,hasOwnProp:Pe,reduceDescriptors:Xe,freezeMethods:zt,toObjectSet:Jt,toCamelCase:Ht,noop:Vt,toFiniteNumber:Wt,findKey:We,global:Ke,isContextDefined:Ge,toJSONObject:Kt};function w(t,e,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}a.inherits(w,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Qe=w.prototype,Ye={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{Ye[t]={value:t}});Object.defineProperties(w,Ye);Object.defineProperty(Qe,"isAxiosError",{value:!0});w.from=(t,e,n,r,s,o)=>{const i=Object.create(Qe);return a.toFlatObject(t,i,function(u){return u!==Error.prototype},c=>c!=="isAxiosError"),w.call(i,t.message,e,n,r,s),i.cause=t,i.name=t.name,o&&Object.assign(i,o),i};var Gt=typeof self=="object"?self.FormData:window.FormData;const Xt=Gt;function de(t){return a.isPlainObject(t)||a.isArray(t)}function Ze(t){return a.endsWith(t,"[]")?t.slice(0,-2):t}function Ce(t,e,n){return t?t.concat(e).map(function(s,o){return s=Ze(s),!n&&o?"["+s+"]":s}).join(n?".":""):e}function Qt(t){return a.isArray(t)&&!t.some(de)}const Yt=a.toFlatObject(a,{},null,function(e){return/^is[A-Z]/.test(e)});function Zt(t){return t&&a.isFunction(t.append)&&t[Symbol.toStringTag]==="FormData"&&t[Symbol.iterator]}function ie(t,e,n){if(!a.isObject(t))throw new TypeError("target must be an object");e=e||new(Xt||FormData),n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(y,E){return!a.isUndefined(E[y])});const r=n.metaTokens,s=n.visitor||f,o=n.dots,i=n.indexes,u=(n.Blob||typeof Blob<"u"&&Blob)&&Zt(e);if(!a.isFunction(s))throw new TypeError("visitor must be a function");function l(d){if(d===null)return"";if(a.isDate(d))return d.toISOString();if(!u&&a.isBlob(d))throw new w("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(d)||a.isTypedArray(d)?u&&typeof Blob=="function"?new Blob([d]):Buffer.from(d):d}function f(d,y,E){let p=d;if(d&&!E&&typeof d=="object"){if(a.endsWith(y,"{}"))y=r?y:y.slice(0,-2),d=JSON.stringify(d);else if(a.isArray(d)&&Qt(d)||a.isFileList(d)||a.endsWith(y,"[]")&&(p=a.toArray(d)))return y=Ze(y),p.forEach(function(O,A){!(a.isUndefined(O)||O===null)&&e.append(i===!0?Ce([y],A,o):i===null?y:y+"[]",l(O))}),!1}return de(d)?!0:(e.append(Ce(E,y,o),l(d)),!1)}const h=[],m=Object.assign(Yt,{defaultVisitor:f,convertValue:l,isVisitable:de});function _(d,y){if(!a.isUndefined(d)){if(h.indexOf(d)!==-1)throw Error("Circular reference detected in "+y.join("."));h.push(d),a.forEach(d,function(p,b){(!(a.isUndefined(p)||p===null)&&s.call(e,p,a.isString(b)?b.trim():b,y,m))===!0&&_(p,y?y.concat(b):[b])}),h.pop()}}if(!a.isObject(t))throw new TypeError("data must be an object");return _(t),e}function ke(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(r){return e[r]})}function Se(t,e){this._pairs=[],t&&ie(t,this,e)}const et=Se.prototype;et.append=function(e,n){this._pairs.push([e,n])};et.toString=function(e){const n=e?function(r){return e.call(this,r,ke)}:ke;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function en(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function tt(t,e,n){if(!e)return t;const r=n&&n.encode||en,s=n&&n.serialize;let o;if(s?o=s(e,n):o=a.isURLSearchParams(e)?e.toString():new Se(e,n).toString(r),o){const i=t.indexOf("#");i!==-1&&(t=t.slice(0,i)),t+=(t.indexOf("?")===-1?"?":"&")+o}return t}class tn{constructor(){this.handlers=[]}use(e,n,r){return this.handlers.push({fulfilled:e,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){a.forEach(this.handlers,function(r){r!==null&&e(r)})}}const De=tn,nt={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},nn=typeof URLSearchParams<"u"?URLSearchParams:Se,rn=FormData,sn=(()=>{let t;return typeof navigator<"u"&&((t=navigator.product)==="ReactNative"||t==="NativeScript"||t==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),on=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),C={isBrowser:!0,classes:{URLSearchParams:nn,FormData:rn,Blob},isStandardBrowserEnv:sn,isStandardBrowserWebWorkerEnv:on,protocols:["http","https","file","blob","url","data"]};function an(t,e){return ie(t,new C.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,o){return C.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},e))}function cn(t){return a.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function ln(t){const e={},n=Object.keys(t);let r;const s=n.length;let o;for(r=0;r<s;r++)o=n[r],e[o]=t[o];return e}function rt(t){function e(n,r,s,o){let i=n[o++];const c=Number.isFinite(+i),u=o>=n.length;return i=!i&&a.isArray(s)?s.length:i,u?(a.hasOwnProp(s,i)?s[i]=[s[i],r]:s[i]=r,!c):((!s[i]||!a.isObject(s[i]))&&(s[i]=[]),e(n,r,s[i],o)&&a.isArray(s[i])&&(s[i]=ln(s[i])),!c)}if(a.isFormData(t)&&a.isFunction(t.entries)){const n={};return a.forEachEntry(t,(r,s)=>{e(cn(r),s,n,0)}),n}return null}const un={"Content-Type":void 0};function fn(t,e,n){if(a.isString(t))try{return(e||JSON.parse)(t),a.trim(t)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(t)}const ae={transitional:nt,adapter:["xhr","http"],transformRequest:[function(e,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,o=a.isObject(e);if(o&&a.isHTMLForm(e)&&(e=new FormData(e)),a.isFormData(e))return s&&s?JSON.stringify(rt(e)):e;if(a.isArrayBuffer(e)||a.isBuffer(e)||a.isStream(e)||a.isFile(e)||a.isBlob(e))return e;if(a.isArrayBufferView(e))return e.buffer;if(a.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let c;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return an(e,this.formSerializer).toString();if((c=a.isFileList(e))||r.indexOf("multipart/form-data")>-1){const u=this.env&&this.env.FormData;return ie(c?{"files[]":e}:e,u&&new u,this.formSerializer)}}return o||s?(n.setContentType("application/json",!1),fn(e)):e}],transformResponse:[function(e){const n=this.transitional||ae.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(e&&a.isString(e)&&(r&&!this.responseType||s)){const i=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(e)}catch(c){if(i)throw c.name==="SyntaxError"?w.from(c,w.ERR_BAD_RESPONSE,this,null,this.response):c}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:C.classes.FormData,Blob:C.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};a.forEach(["delete","get","head"],function(e){ae.headers[e]={}});a.forEach(["post","put","patch"],function(e){ae.headers[e]=a.merge(un)});const Re=ae,dn=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),pn=t=>{const e={};let n,r,s;return t&&t.split(`
`).forEach(function(i){s=i.indexOf(":"),n=i.substring(0,s).trim().toLowerCase(),r=i.substring(s+1).trim(),!(!n||e[n]&&dn[n])&&(n==="set-cookie"?e[n]?e[n].push(r):e[n]=[r]:e[n]=e[n]?e[n]+", "+r:r)}),e},Fe=Symbol("internals");function J(t){return t&&String(t).trim().toLowerCase()}function Y(t){return t===!1||t==null?t:a.isArray(t)?t.map(Y):String(t)}function hn(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(t);)e[r[1]]=r[2];return e}function mn(t){return/^[-_a-zA-Z]+$/.test(t.trim())}function Be(t,e,n,r){if(a.isFunction(r))return r.call(this,e,n);if(a.isString(e)){if(a.isString(r))return e.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(e)}}function yn(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,r)=>n.toUpperCase()+r)}function bn(t,e){const n=a.toCamelCase(" "+e);["get","set","has"].forEach(r=>{Object.defineProperty(t,r+n,{value:function(s,o,i){return this[r].call(this,e,s,o,i)},configurable:!0})})}class ce{constructor(e){e&&this.set(e)}set(e,n,r){const s=this;function o(c,u,l){const f=J(u);if(!f)throw new Error("header name must be a non-empty string");const h=a.findKey(s,f);(!h||s[h]===void 0||l===!0||l===void 0&&s[h]!==!1)&&(s[h||u]=Y(c))}const i=(c,u)=>a.forEach(c,(l,f)=>o(l,f,u));return a.isPlainObject(e)||e instanceof this.constructor?i(e,n):a.isString(e)&&(e=e.trim())&&!mn(e)?i(pn(e),n):e!=null&&o(n,e,r),this}get(e,n){if(e=J(e),e){const r=a.findKey(this,e);if(r){const s=this[r];if(!n)return s;if(n===!0)return hn(s);if(a.isFunction(n))return n.call(this,s,r);if(a.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=J(e),e){const r=a.findKey(this,e);return!!(r&&(!n||Be(this,this[r],r,n)))}return!1}delete(e,n){const r=this;let s=!1;function o(i){if(i=J(i),i){const c=a.findKey(r,i);c&&(!n||Be(r,r[c],c,n))&&(delete r[c],s=!0)}}return a.isArray(e)?e.forEach(o):o(e),s}clear(){return Object.keys(this).forEach(this.delete.bind(this))}normalize(e){const n=this,r={};return a.forEach(this,(s,o)=>{const i=a.findKey(r,o);if(i){n[i]=Y(s),delete n[o];return}const c=e?yn(o):String(o).trim();c!==o&&delete n[o],n[c]=Y(s),r[c]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return a.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=e&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const r=new this(e);return n.forEach(s=>r.set(s)),r}static accessor(e){const r=(this[Fe]=this[Fe]={accessors:{}}).accessors,s=this.prototype;function o(i){const c=J(i);r[c]||(bn(s,i),r[c]=!0)}return a.isArray(e)?e.forEach(o):o(e),this}}ce.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.freezeMethods(ce.prototype);a.freezeMethods(ce);const k=ce;function le(t,e){const n=this||Re,r=e||n,s=k.from(r.headers);let o=r.data;return a.forEach(t,function(c){o=c.call(n,o,s.normalize(),e?e.status:void 0)}),s.normalize(),o}function st(t){return!!(t&&t.__CANCEL__)}function X(t,e,n){w.call(this,t??"canceled",w.ERR_CANCELED,e,n),this.name="CanceledError"}a.inherits(X,w,{__CANCEL__:!0});const En=null;function wn(t,e,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?t(n):e(new w("Request failed with status code "+n.status,[w.ERR_BAD_REQUEST,w.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const _n=C.isStandardBrowserEnv?function(){return{write:function(n,r,s,o,i,c){const u=[];u.push(n+"="+encodeURIComponent(r)),a.isNumber(s)&&u.push("expires="+new Date(s).toGMTString()),a.isString(o)&&u.push("path="+o),a.isString(i)&&u.push("domain="+i),c===!0&&u.push("secure"),document.cookie=u.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function On(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function Sn(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}function ot(t,e){return t&&!On(e)?Sn(t,e):e}const Rn=C.isStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(o){let i=o;return e&&(n.setAttribute("href",i),i=n.href),n.setAttribute("href",i),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(i){const c=a.isString(i)?s(i):i;return c.protocol===r.protocol&&c.host===r.host}}():function(){return function(){return!0}}();function gn(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function Tn(t,e){t=t||10;const n=new Array(t),r=new Array(t);let s=0,o=0,i;return e=e!==void 0?e:1e3,function(u){const l=Date.now(),f=r[o];i||(i=l),n[s]=u,r[s]=l;let h=o,m=0;for(;h!==s;)m+=n[h++],h=h%t;if(s=(s+1)%t,s===o&&(o=(o+1)%t),l-i<e)return;const _=f&&l-f;return _?Math.round(m*1e3/_):void 0}}function Ue(t,e){let n=0;const r=Tn(50,250);return s=>{const o=s.loaded,i=s.lengthComputable?s.total:void 0,c=o-n,u=r(c),l=o<=i;n=o;const f={loaded:o,total:i,progress:i?o/i:void 0,bytes:c,rate:u||void 0,estimated:u&&i&&l?(i-o)/u:void 0,event:s};f[e?"download":"upload"]=!0,t(f)}}const An=typeof XMLHttpRequest<"u",Nn=An&&function(t){return new Promise(function(n,r){let s=t.data;const o=k.from(t.headers).normalize(),i=t.responseType;let c;function u(){t.cancelToken&&t.cancelToken.unsubscribe(c),t.signal&&t.signal.removeEventListener("abort",c)}a.isFormData(s)&&(C.isStandardBrowserEnv||C.isStandardBrowserWebWorkerEnv)&&o.setContentType(!1);let l=new XMLHttpRequest;if(t.auth){const _=t.auth.username||"",d=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";o.set("Authorization","Basic "+btoa(_+":"+d))}const f=ot(t.baseURL,t.url);l.open(t.method.toUpperCase(),tt(f,t.params,t.paramsSerializer),!0),l.timeout=t.timeout;function h(){if(!l)return;const _=k.from("getAllResponseHeaders"in l&&l.getAllResponseHeaders()),y={data:!i||i==="text"||i==="json"?l.responseText:l.response,status:l.status,statusText:l.statusText,headers:_,config:t,request:l};wn(function(p){n(p),u()},function(p){r(p),u()},y),l=null}if("onloadend"in l?l.onloadend=h:l.onreadystatechange=function(){!l||l.readyState!==4||l.status===0&&!(l.responseURL&&l.responseURL.indexOf("file:")===0)||setTimeout(h)},l.onabort=function(){l&&(r(new w("Request aborted",w.ECONNABORTED,t,l)),l=null)},l.onerror=function(){r(new w("Network Error",w.ERR_NETWORK,t,l)),l=null},l.ontimeout=function(){let d=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded";const y=t.transitional||nt;t.timeoutErrorMessage&&(d=t.timeoutErrorMessage),r(new w(d,y.clarifyTimeoutError?w.ETIMEDOUT:w.ECONNABORTED,t,l)),l=null},C.isStandardBrowserEnv){const _=(t.withCredentials||Rn(f))&&t.xsrfCookieName&&_n.read(t.xsrfCookieName);_&&o.set(t.xsrfHeaderName,_)}s===void 0&&o.setContentType(null),"setRequestHeader"in l&&a.forEach(o.toJSON(),function(d,y){l.setRequestHeader(y,d)}),a.isUndefined(t.withCredentials)||(l.withCredentials=!!t.withCredentials),i&&i!=="json"&&(l.responseType=t.responseType),typeof t.onDownloadProgress=="function"&&l.addEventListener("progress",Ue(t.onDownloadProgress,!0)),typeof t.onUploadProgress=="function"&&l.upload&&l.upload.addEventListener("progress",Ue(t.onUploadProgress)),(t.cancelToken||t.signal)&&(c=_=>{l&&(r(!_||_.type?new X(null,t,l):_),l.abort(),l=null)},t.cancelToken&&t.cancelToken.subscribe(c),t.signal&&(t.signal.aborted?c():t.signal.addEventListener("abort",c)));const m=gn(f);if(m&&C.protocols.indexOf(m)===-1){r(new w("Unsupported protocol "+m+":",w.ERR_BAD_REQUEST,t));return}l.send(s||null)})},Z={http:En,xhr:Nn};a.forEach(Z,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const xn={getAdapter:t=>{t=a.isArray(t)?t:[t];const{length:e}=t;let n,r;for(let s=0;s<e&&(n=t[s],!(r=a.isString(n)?Z[n.toLowerCase()]:n));s++);if(!r)throw r===!1?new w(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(a.hasOwnProp(Z,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!a.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:Z};function ue(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new X(null,t)}function Le(t){return ue(t),t.headers=k.from(t.headers),t.data=le.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),xn.getAdapter(t.adapter||Re.adapter)(t).then(function(r){return ue(t),r.data=le.call(t,t.transformResponse,r),r.headers=k.from(r.headers),r},function(r){return st(r)||(ue(t),r&&r.response&&(r.response.data=le.call(t,t.transformResponse,r.response),r.response.headers=k.from(r.response.headers))),Promise.reject(r)})}const je=t=>t instanceof k?t.toJSON():t;function M(t,e){e=e||{};const n={};function r(l,f,h){return a.isPlainObject(l)&&a.isPlainObject(f)?a.merge.call({caseless:h},l,f):a.isPlainObject(f)?a.merge({},f):a.isArray(f)?f.slice():f}function s(l,f,h){if(a.isUndefined(f)){if(!a.isUndefined(l))return r(void 0,l,h)}else return r(l,f,h)}function o(l,f){if(!a.isUndefined(f))return r(void 0,f)}function i(l,f){if(a.isUndefined(f)){if(!a.isUndefined(l))return r(void 0,l)}else return r(void 0,f)}function c(l,f,h){if(h in e)return r(l,f);if(h in t)return r(void 0,l)}const u={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:c,headers:(l,f)=>s(je(l),je(f),!0)};return a.forEach(Object.keys(t).concat(Object.keys(e)),function(f){const h=u[f]||s,m=h(t[f],e[f],f);a.isUndefined(m)&&h!==c||(n[f]=m)}),n}const it="1.2.6",ge={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{ge[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}});const $e={};ge.transitional=function(e,n,r){function s(o,i){return"[Axios v"+it+"] Transitional option '"+o+"'"+i+(r?". "+r:"")}return(o,i,c)=>{if(e===!1)throw new w(s(i," has been removed"+(n?" in "+n:"")),w.ERR_DEPRECATED);return n&&!$e[i]&&($e[i]=!0,console.warn(s(i," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(o,i,c):!0}};function Pn(t,e,n){if(typeof t!="object")throw new w("options must be an object",w.ERR_BAD_OPTION_VALUE);const r=Object.keys(t);let s=r.length;for(;s-- >0;){const o=r[s],i=e[o];if(i){const c=t[o],u=c===void 0||i(c,o,t);if(u!==!0)throw new w("option "+o+" must be "+u,w.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new w("Unknown option "+o,w.ERR_BAD_OPTION)}}const pe={assertOptions:Pn,validators:ge},F=pe.validators;class te{constructor(e){this.defaults=e,this.interceptors={request:new De,response:new De}}request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=M(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:o}=n;r!==void 0&&pe.assertOptions(r,{silentJSONParsing:F.transitional(F.boolean),forcedJSONParsing:F.transitional(F.boolean),clarifyTimeoutError:F.transitional(F.boolean)},!1),s!==void 0&&pe.assertOptions(s,{encode:F.function,serialize:F.function},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i;i=o&&a.merge(o.common,o[n.method]),i&&a.forEach(["delete","get","head","post","put","patch","common"],d=>{delete o[d]}),n.headers=k.concat(i,o);const c=[];let u=!0;this.interceptors.request.forEach(function(y){typeof y.runWhen=="function"&&y.runWhen(n)===!1||(u=u&&y.synchronous,c.unshift(y.fulfilled,y.rejected))});const l=[];this.interceptors.response.forEach(function(y){l.push(y.fulfilled,y.rejected)});let f,h=0,m;if(!u){const d=[Le.bind(this),void 0];for(d.unshift.apply(d,c),d.push.apply(d,l),m=d.length,f=Promise.resolve(n);h<m;)f=f.then(d[h++],d[h++]);return f}m=c.length;let _=n;for(h=0;h<m;){const d=c[h++],y=c[h++];try{_=d(_)}catch(E){y.call(this,E);break}}try{f=Le.call(this,_)}catch(d){return Promise.reject(d)}for(h=0,m=l.length;h<m;)f=f.then(l[h++],l[h++]);return f}getUri(e){e=M(this.defaults,e);const n=ot(e.baseURL,e.url);return tt(n,e.params,e.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(e){te.prototype[e]=function(n,r){return this.request(M(r||{},{method:e,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(e){function n(r){return function(o,i,c){return this.request(M(c||{},{method:e,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:i}))}}te.prototype[e]=n(),te.prototype[e+"Form"]=n(!0)});const ee=te;class Te{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(s=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](s);r._listeners=null}),this.promise.then=s=>{let o;const i=new Promise(c=>{r.subscribe(c),o=c}).then(s);return i.cancel=function(){r.unsubscribe(o)},i},e(function(o,i,c){r.reason||(r.reason=new X(o,i,c),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}static source(){let e;return{token:new Te(function(s){e=s}),cancel:e}}}const Cn=Te;function kn(t){return function(n){return t.apply(null,n)}}function Dn(t){return a.isObject(t)&&t.isAxiosError===!0}const he={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(he).forEach(([t,e])=>{he[e]=t});const Fn=he;function at(t){const e=new ee(t),n=Me(ee.prototype.request,e);return a.extend(n,ee.prototype,e,{allOwnKeys:!0}),a.extend(n,e,null,{allOwnKeys:!0}),n.create=function(s){return at(M(t,s))},n}const g=at(Re);g.Axios=ee;g.CanceledError=X;g.CancelToken=Cn;g.isCancel=st;g.VERSION=it;g.toFormData=ie;g.AxiosError=w;g.Cancel=g.CanceledError;g.all=function(e){return Promise.all(e)};g.spread=kn;g.isAxiosError=Dn;g.mergeConfig=M;g.AxiosHeaders=k;g.formToJSON=t=>rt(a.isHTMLForm(t)?new FormData(t):t);g.HttpStatusCode=Fn;g.default=g;const Bn=g,H=mt([]),Un=async()=>{const t=await Bn.get("https://node-todo.up.railway.app/read");H.set(t.data)};Un();function Ln(t){let e,n,r,s;return{c(){e=N("button"),n=B("✅"),this.h()},l(o){e=x(o,"BUTTON",{class:!0});var i=P(e);n=U(i,"✅"),i.forEach(R),this.h()},h(){T(e,"class","svelte-3cr912")},m(o,i){j(o,e,i),S(e,n),r||(s=K(e,"click",t[2]),r=!0)},p:$,d(o){o&&R(e),r=!1,s()}}}function jn(t){let e,n,r,s;return{c(){e=N("button"),n=B("❌"),this.h()},l(o){e=x(o,"BUTTON",{class:!0});var i=P(e);n=U(i,"❌"),i.forEach(R),this.h()},h(){T(e,"class","svelte-3cr912")},m(o,i){j(o,e,i),S(e,n),r||(s=K(e,"click",t[2]),r=!0)},p:$,d(o){o&&R(e),r=!1,s()}}}function $n(t){let e,n,r=t[0].task+"",s,o,i,c,u,l,f,h,m,_;function d(p,b){return p[1]?Ln:jn}let y=d(t),E=y(t);return{c(){e=N("div"),n=N("p"),s=B(r),c=v(),u=N("div"),E.c(),l=v(),f=N("button"),h=B("🗑️"),this.h()},l(p){e=x(p,"DIV",{class:!0});var b=P(e);n=x(b,"P",{class:!0});var O=P(n);s=U(O,r),O.forEach(R),c=q(b),u=x(b,"DIV",{class:!0});var A=P(u);E.l(A),l=q(A),f=x(A,"BUTTON",{class:!0});var Ae=P(f);h=U(Ae,"🗑️"),Ae.forEach(R),A.forEach(R),b.forEach(R),this.h()},h(){T(n,"class",o=Ne(`${t[1]?"done":"undefined"}`)+" svelte-3cr912"),T(f,"class","svelte-3cr912"),T(u,"class","toggle"),T(e,"class","item svelte-3cr912")},m(p,b){j(p,e,b),S(e,n),S(n,s),S(e,c),S(e,u),E.m(u,null),S(u,l),S(u,f),S(f,h),m||(_=K(f,"click",t[3]),m=!0)},p(p,[b]){b&1&&r!==(r=p[0].task+"")&&ct(s,r),b&2&&o!==(o=Ne(`${p[1]?"done":"undefined"}`)+" svelte-3cr912")&&T(n,"class",o),y===(y=d(p))&&E?E.p(p,b):(E.d(1),E=y(p),E&&(E.c(),E.m(u,l)))},i(p){i||lt(()=>{i=ut(n,bt,{x:500,duration:500}),i.start()})},o:$,d(p){p&&R(e),E.d(),m=!1,_()}}}function vn(t,e,n){let{task:r}=e,s,o=r.completed;const i=()=>{n(1,o=!o);for(let u=0;u<s.length;u++)if(s[u].id===r.id){n(0,r.completed=!r.completed,r);break}H.set(s)},c=()=>{document.getElementsByClassName("item"),wt(r.id),s=s.filter(u=>u.id!==r.id),H.set(s)};return Ie(async()=>{s=await He()}),t.$$set=u=>{"task"in u&&n(0,r=u.task)},[r,o,i,c]}class qn extends ne{constructor(e){super(),re(this,e,vn,$n,se,{task:0})}}function ve(t,e,n){const r=t.slice();return r[6]=e[n],r}function qe(t){let e,n;return e=new qn({props:{task:t[6]}}),{c(){me(e.$$.fragment)},l(r){ye(e.$$.fragment,r)},m(r,s){be(e,r,s),n=!0},p(r,s){const o={};s&2&&(o.task=r[6]),e.$set(o)},i(r){n||(I(e.$$.fragment,r),n=!0)},o(r){V(e.$$.fragment,r),n=!1},d(r){Ee(e,r)}}}function In(t){let e,n;return{c(){e=N("button"),n=B("Add task"),this.h()},l(r){e=x(r,"BUTTON",{class:!0});var s=P(e);n=U(s,"Add task"),s.forEach(R),this.h()},h(){T(e,"class","svelte-1qvtinb")},m(r,s){j(r,e,s),S(e,n)},p:$,d(r){r&&R(e)}}}function Hn(t){let e,n,r,s;return{c(){e=N("button"),n=B("Add task"),this.h()},l(o){e=x(o,"BUTTON",{class:!0});var i=P(e);n=U(i,"Add task"),i.forEach(R),this.h()},h(){T(e,"class","svelte-1qvtinb")},m(o,i){j(o,e,i),S(e,n),r||(s=K(e,"click",t[4]),r=!0)},p:$,d(o){o&&R(e),r=!1,s()}}}function Mn(t){let e,n,r,s,o,i,c,u,l,f,h=t[1],m=[];for(let p=0;p<h.length;p+=1)m[p]=qe(ve(t,h,p));const _=p=>V(m[p],1,1,()=>{m[p]=null});function d(p,b){return p[0]!==""?Hn:In}let y=d(t),E=y(t);return{c(){e=N("div"),n=N("h1"),r=B("Tasks"),s=v();for(let p=0;p<m.length;p+=1)m[p].c();o=v(),i=N("input"),c=v(),E.c(),this.h()},l(p){e=x(p,"DIV",{class:!0});var b=P(e);n=x(b,"H1",{class:!0});var O=P(n);r=U(O,"Tasks"),O.forEach(R),s=q(b);for(let A=0;A<m.length;A+=1)m[A].l(b);o=q(b),i=x(b,"INPUT",{type:!0,class:!0}),c=q(b),E.l(b),b.forEach(R),this.h()},h(){T(n,"class","svelte-1qvtinb"),T(i,"type","text"),T(i,"class","svelte-1qvtinb"),T(e,"class","todo svelte-1qvtinb")},m(p,b){j(p,e,b),S(e,n),S(n,r),S(e,s);for(let O=0;O<m.length;O+=1)m[O].m(e,null);S(e,o),S(e,i),xe(i,t[0]),S(e,c),E.m(e,null),u=!0,l||(f=K(i,"input",t[3]),l=!0)},p(p,[b]){if(b&2){h=p[1];let O;for(O=0;O<h.length;O+=1){const A=ve(p,h,O);m[O]?(m[O].p(A,b),I(m[O],1)):(m[O]=qe(A),m[O].c(),I(m[O],1),m[O].m(e,o))}for(ft(),O=h.length;O<m.length;O+=1)_(O);dt()}b&1&&i.value!==p[0]&&xe(i,p[0]),y===(y=d(p))&&E?E.p(p,b):(E.d(1),E=y(p),E&&(E.c(),E.m(e,null)))},i(p){if(!u){for(let b=0;b<h.length;b+=1)I(m[b]);u=!0}},o(p){m=m.filter(Boolean);for(let b=0;b<m.length;b+=1)V(m[b]);u=!1},d(p){p&&R(e),pt(m,p),E.d(),l=!1,f()}}}function zn(t,e,n){let r;ht(t,H,l=>n(1,r=l));let s="",o;H.subscribe(l=>{o=l});const i=()=>{const l=o.length;o.push({id:l,task:s,completed:!1}),H.set(o),n(0,s="")};Ie(async()=>{o=await He()});function c(){s=this.value,n(0,s)}return[s,r,i,c,()=>{Et(s),i()}]}class Jn extends ne{constructor(e){super(),re(this,e,zn,Mn,se,{})}}function Vn(t){let e,n,r,s,o,i;return o=new Jn({}),{c(){e=N("body"),n=N("h1"),r=B("TODO List"),s=v(),me(o.$$.fragment),this.h()},l(c){e=x(c,"BODY",{class:!0});var u=P(e);n=x(u,"H1",{class:!0});var l=P(n);r=U(l,"TODO List"),l.forEach(R),s=q(u),ye(o.$$.fragment,u),u.forEach(R),this.h()},h(){T(n,"class","svelte-1h48sbx"),T(e,"class","svelte-1h48sbx")},m(c,u){j(c,e,u),S(e,n),S(n,r),S(e,s),be(o,e,null),i=!0},p:$,i(c){i||(I(o.$$.fragment,c),i=!0)},o(c){V(o.$$.fragment,c),i=!1},d(c){c&&R(e),Ee(o)}}}class Wn extends ne{constructor(e){super(),re(this,e,null,Vn,se,{})}}function Kn(t){let e,n;return e=new Wn({}),{c(){me(e.$$.fragment)},l(r){ye(e.$$.fragment,r)},m(r,s){be(e,r,s),n=!0},p:$,i(r){n||(I(e.$$.fragment,r),n=!0)},o(r){V(e.$$.fragment,r),n=!1},d(r){Ee(e,r)}}}class Qn extends ne{constructor(e){super(),re(this,e,null,Kn,se,{})}}export{Qn as default};