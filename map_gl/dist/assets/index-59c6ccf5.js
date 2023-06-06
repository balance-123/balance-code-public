var Ha=Object.defineProperty;var Va=(i,e,t)=>e in i?Ha(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var Ie=(i,e,t)=>(Va(i,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ur="152",ka=0,Gr=1,Wa=2,oa=1,Xa=2,Wt=3,en=0,_t=1,Xt=2,Qt=0,Hn=1,Hr=2,Vr=3,kr=4,qa=5,On=100,Ya=101,Ka=102,Wr=103,Xr=104,ja=200,Za=201,$a=202,Ja=203,la=204,ca=205,Qa=206,eo=207,to=208,no=209,io=210,ro=0,so=1,ao=2,Tr=3,oo=4,lo=5,co=6,uo=7,ua=0,ho=1,fo=2,qt=0,po=1,mo=2,_o=3,go=4,vo=5,ha=300,Wn=301,Xn=302,yr=303,br=304,Bi=306,Ar=1e3,Lt=1001,wr=1002,ut=1003,qr=1004,Yi=1005,pt=1006,xo=1007,oi=1008,gn=1009,Mo=1010,So=1011,da=1012,Eo=1013,hn=1014,dn=1015,li=1016,To=1017,yo=1018,Vn=1020,bo=1021,Pt=1023,Ao=1024,wo=1025,fn=1026,qn=1027,Ro=1028,Co=1029,Lo=1030,Po=1031,Uo=1033,Ki=33776,ji=33777,Zi=33778,$i=33779,Yr=35840,Kr=35841,jr=35842,Zr=35843,Do=36196,$r=37492,Jr=37496,Qr=37808,es=37809,ts=37810,ns=37811,is=37812,rs=37813,ss=37814,as=37815,os=37816,ls=37817,cs=37818,us=37819,hs=37820,ds=37821,Ji=36492,Io=36283,fs=36284,ps=36285,ms=36286,fa=3e3,pn=3001,No=3200,Fo=3201,Oo=0,Bo=1,mn="",ye="srgb",Ot="srgb-linear",pa="display-p3",Qi=7680,zo=519,_s=35044,gs="300 es",Rr=1035;class jn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const st=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],er=Math.PI/180,Cr=180/Math.PI;function ui(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(st[i&255]+st[i>>8&255]+st[i>>16&255]+st[i>>24&255]+"-"+st[e&255]+st[e>>8&255]+"-"+st[e>>16&15|64]+st[e>>24&255]+"-"+st[t&63|128]+st[t>>8&255]+"-"+st[t>>16&255]+st[t>>24&255]+st[n&255]+st[n>>8&255]+st[n>>16&255]+st[n>>24&255]).toLowerCase()}function mt(i,e,t){return Math.max(e,Math.min(t,i))}function Go(i,e){return(i%e+e)%e}function tr(i,e,t){return(1-t)*i+t*e}function vs(i){return(i&i-1)===0&&i!==0}function Ho(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function mi(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function vt(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class He{constructor(e=0,t=0){He.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Pe{constructor(){Pe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,r,s,o,a,h,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=h,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],h=n[6],l=n[1],u=n[4],d=n[7],f=n[2],m=n[5],x=n[8],_=r[0],p=r[3],c=r[6],E=r[1],S=r[4],y=r[7],b=r[2],R=r[5],P=r[8];return s[0]=o*_+a*E+h*b,s[3]=o*p+a*S+h*R,s[6]=o*c+a*y+h*P,s[1]=l*_+u*E+d*b,s[4]=l*p+u*S+d*R,s[7]=l*c+u*y+d*P,s[2]=f*_+m*E+x*b,s[5]=f*p+m*S+x*R,s[8]=f*c+m*y+x*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],h=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-n*s*u+n*a*h+r*s*l-r*o*h}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],h=e[6],l=e[7],u=e[8],d=u*o-a*l,f=a*h-u*s,m=l*s-o*h,x=t*d+n*f+r*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/x;return e[0]=d*_,e[1]=(r*l-u*n)*_,e[2]=(a*n-r*o)*_,e[3]=f*_,e[4]=(u*t-r*h)*_,e[5]=(r*s-a*t)*_,e[6]=m*_,e[7]=(n*h-l*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const h=Math.cos(s),l=Math.sin(s);return this.set(n*h,n*l,-n*(h*o+l*a)+o+e,-r*l,r*h,-r*(-l*o+h*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(nr.makeScale(e,t)),this}rotate(e){return this.premultiply(nr.makeRotation(-e)),this}translate(e,t){return this.premultiply(nr.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const nr=new Pe;function ma(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ci(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}const xs={};function ii(i){i in xs||(xs[i]=!0,console.warn(i))}function kn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ir(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Vo=new Pe().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),ko=new Pe().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function Wo(i){return i.convertSRGBToLinear().applyMatrix3(ko)}function Xo(i){return i.applyMatrix3(Vo).convertLinearToSRGB()}const qo={[Ot]:i=>i,[ye]:i=>i.convertSRGBToLinear(),[pa]:Wo},Yo={[Ot]:i=>i,[ye]:i=>i.convertLinearToSRGB(),[pa]:Xo},bt={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(i){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!i},get workingColorSpace(){return Ot},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=qo[e],r=Yo[t];if(n===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)}};let Sn;class _a{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Sn===void 0&&(Sn=ci("canvas")),Sn.width=e.width,Sn.height=e.height;const n=Sn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Sn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ci("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=kn(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(kn(t[n]/255)*255):t[n]=kn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class ga{constructor(e=null){this.isSource=!0,this.uuid=ui(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(rr(r[o].image)):s.push(rr(r[o]))}else s=rr(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function rr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?_a.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ko=0;class ht extends jn{constructor(e=ht.DEFAULT_IMAGE,t=ht.DEFAULT_MAPPING,n=Lt,r=Lt,s=pt,o=oi,a=Pt,h=gn,l=ht.DEFAULT_ANISOTROPY,u=mn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ko++}),this.uuid=ui(),this.name="",this.source=new ga(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=h,this.offset=new He(0,0),this.repeat=new He(1,1),this.center=new He(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Pe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(ii("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===pn?ye:mn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ha)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ar:e.x=e.x-Math.floor(e.x);break;case Lt:e.x=e.x<0?0:1;break;case wr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ar:e.y=e.y-Math.floor(e.y);break;case Lt:e.y=e.y<0?0:1;break;case wr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ii("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ye?pn:fa}set encoding(e){ii("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===pn?ye:mn}}ht.DEFAULT_IMAGE=null;ht.DEFAULT_MAPPING=ha;ht.DEFAULT_ANISOTROPY=1;class it{constructor(e=0,t=0,n=0,r=1){it.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const h=e.elements,l=h[0],u=h[4],d=h[8],f=h[1],m=h[5],x=h[9],_=h[2],p=h[6],c=h[10];if(Math.abs(u-f)<.01&&Math.abs(d-_)<.01&&Math.abs(x-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+_)<.1&&Math.abs(x+p)<.1&&Math.abs(l+m+c-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(l+1)/2,y=(m+1)/2,b=(c+1)/2,R=(u+f)/4,P=(d+_)/4,X=(x+p)/4;return S>y&&S>b?S<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(S),r=R/n,s=P/n):y>b?y<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),n=R/r,s=X/r):b<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),n=P/s,r=X/s),this.set(n,r,s,t),this}let E=Math.sqrt((p-x)*(p-x)+(d-_)*(d-_)+(f-u)*(f-u));return Math.abs(E)<.001&&(E=1),this.x=(p-x)/E,this.y=(d-_)/E,this.z=(f-u)/E,this.w=Math.acos((l+m+c-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class vn extends jn{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new it(0,0,e,t),this.scissorTest=!1,this.viewport=new it(0,0,e,t);const r={width:e,height:t,depth:1};n.encoding!==void 0&&(ii("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===pn?ye:mn),this.texture=new ht(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:pt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new ga(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class va extends ht{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=ut,this.minFilter=ut,this.wrapR=Lt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class jo extends ht{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=ut,this.minFilter=ut,this.wrapR=Lt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class hi{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let h=n[r+0],l=n[r+1],u=n[r+2],d=n[r+3];const f=s[o+0],m=s[o+1],x=s[o+2],_=s[o+3];if(a===0){e[t+0]=h,e[t+1]=l,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=m,e[t+2]=x,e[t+3]=_;return}if(d!==_||h!==f||l!==m||u!==x){let p=1-a;const c=h*f+l*m+u*x+d*_,E=c>=0?1:-1,S=1-c*c;if(S>Number.EPSILON){const b=Math.sqrt(S),R=Math.atan2(b,c*E);p=Math.sin(p*R)/b,a=Math.sin(a*R)/b}const y=a*E;if(h=h*p+f*y,l=l*p+m*y,u=u*p+x*y,d=d*p+_*y,p===1-a){const b=1/Math.sqrt(h*h+l*l+u*u+d*d);h*=b,l*=b,u*=b,d*=b}}e[t]=h,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],h=n[r+1],l=n[r+2],u=n[r+3],d=s[o],f=s[o+1],m=s[o+2],x=s[o+3];return e[t]=a*x+u*d+h*m-l*f,e[t+1]=h*x+u*f+l*d-a*m,e[t+2]=l*x+u*m+a*f-h*d,e[t+3]=u*x-a*d-h*f-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,h=Math.sin,l=a(n/2),u=a(r/2),d=a(s/2),f=h(n/2),m=h(r/2),x=h(s/2);switch(o){case"XYZ":this._x=f*u*d+l*m*x,this._y=l*m*d-f*u*x,this._z=l*u*x+f*m*d,this._w=l*u*d-f*m*x;break;case"YXZ":this._x=f*u*d+l*m*x,this._y=l*m*d-f*u*x,this._z=l*u*x-f*m*d,this._w=l*u*d+f*m*x;break;case"ZXY":this._x=f*u*d-l*m*x,this._y=l*m*d+f*u*x,this._z=l*u*x+f*m*d,this._w=l*u*d-f*m*x;break;case"ZYX":this._x=f*u*d-l*m*x,this._y=l*m*d+f*u*x,this._z=l*u*x-f*m*d,this._w=l*u*d+f*m*x;break;case"YZX":this._x=f*u*d+l*m*x,this._y=l*m*d+f*u*x,this._z=l*u*x-f*m*d,this._w=l*u*d-f*m*x;break;case"XZY":this._x=f*u*d-l*m*x,this._y=l*m*d-f*u*x,this._z=l*u*x+f*m*d,this._w=l*u*d+f*m*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],h=t[9],l=t[2],u=t[6],d=t[10],f=n+a+d;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-h)*m,this._y=(s-l)*m,this._z=(o-r)*m}else if(n>a&&n>d){const m=2*Math.sqrt(1+n-a-d);this._w=(u-h)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+l)/m}else if(a>d){const m=2*Math.sqrt(1+a-n-d);this._w=(s-l)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(h+u)/m}else{const m=2*Math.sqrt(1+d-n-a);this._w=(o-r)/m,this._x=(s+l)/m,this._y=(h+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(mt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,h=t._y,l=t._z,u=t._w;return this._x=n*u+o*a+r*l-s*h,this._y=r*u+o*h+s*a-n*l,this._z=s*u+o*l+n*h-r*a,this._w=o*u-n*a-r*h-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const h=1-a*a;if(h<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(h),u=Math.atan2(l,a),d=Math.sin((1-t)*u)/l,f=Math.sin(t*u)/l;return this._w=o*d+this._w*f,this._x=n*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(s),n*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,n=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ms.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ms.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,h=e.w,l=h*t+o*r-a*n,u=h*n+a*t-s*r,d=h*r+s*n-o*t,f=-s*t-o*n-a*r;return this.x=l*h+f*-s+u*-a-d*-o,this.y=u*h+f*-o+d*-s-l*-a,this.z=d*h+f*-a+l*-o-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,h=t.z;return this.x=r*h-s*a,this.y=s*o-n*h,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return sr.copy(this).projectOnVector(e),this.sub(sr)}reflect(e){return this.sub(sr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const sr=new I,Ms=new hi;class di{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(zt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(zt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=zt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),En.copy(e.boundingBox),En.applyMatrix4(e.matrixWorld),this.union(En);else{const r=e.geometry;if(r!==void 0)if(t&&r.attributes!==void 0&&r.attributes.position!==void 0){const s=r.attributes.position;for(let o=0,a=s.count;o<a;o++)zt.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(zt)}else r.boundingBox===null&&r.computeBoundingBox(),En.copy(r.boundingBox),En.applyMatrix4(e.matrixWorld),this.union(En)}const n=e.children;for(let r=0,s=n.length;r<s;r++)this.expandByObject(n[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,zt),zt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Jn),_i.subVectors(this.max,Jn),Tn.subVectors(e.a,Jn),yn.subVectors(e.b,Jn),bn.subVectors(e.c,Jn),Kt.subVectors(yn,Tn),jt.subVectors(bn,yn),sn.subVectors(Tn,bn);let t=[0,-Kt.z,Kt.y,0,-jt.z,jt.y,0,-sn.z,sn.y,Kt.z,0,-Kt.x,jt.z,0,-jt.x,sn.z,0,-sn.x,-Kt.y,Kt.x,0,-jt.y,jt.x,0,-sn.y,sn.x,0];return!ar(t,Tn,yn,bn,_i)||(t=[1,0,0,0,1,0,0,0,1],!ar(t,Tn,yn,bn,_i))?!1:(gi.crossVectors(Kt,jt),t=[gi.x,gi.y,gi.z],ar(t,Tn,yn,bn,_i))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Bt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Bt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Bt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Bt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Bt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Bt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Bt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Bt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Bt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Bt=[new I,new I,new I,new I,new I,new I,new I,new I],zt=new I,En=new di,Tn=new I,yn=new I,bn=new I,Kt=new I,jt=new I,sn=new I,Jn=new I,_i=new I,gi=new I,an=new I;function ar(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){an.fromArray(i,s);const a=r.x*Math.abs(an.x)+r.y*Math.abs(an.y)+r.z*Math.abs(an.z),h=e.dot(an),l=t.dot(an),u=n.dot(an);if(Math.max(-Math.max(h,l,u),Math.min(h,l,u))>a)return!1}return!0}const Zo=new di,Qn=new I,or=new I;class Dr{constructor(e=new I,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Zo.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qn.subVectors(e,this.center);const t=Qn.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Qn,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(or.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qn.copy(e.center).add(or)),this.expandByPoint(Qn.copy(e.center).sub(or))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Gt=new I,lr=new I,vi=new I,Zt=new I,cr=new I,xi=new I,ur=new I;class xa{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Gt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Gt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Gt.copy(this.origin).addScaledVector(this.direction,t),Gt.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){lr.copy(e).add(t).multiplyScalar(.5),vi.copy(t).sub(e).normalize(),Zt.copy(this.origin).sub(lr);const s=e.distanceTo(t)*.5,o=-this.direction.dot(vi),a=Zt.dot(this.direction),h=-Zt.dot(vi),l=Zt.lengthSq(),u=Math.abs(1-o*o);let d,f,m,x;if(u>0)if(d=o*h-a,f=o*a-h,x=s*u,d>=0)if(f>=-x)if(f<=x){const _=1/u;d*=_,f*=_,m=d*(d+o*f+2*a)+f*(o*d+f+2*h)+l}else f=s,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*h)+l;else f=-s,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*h)+l;else f<=-x?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-h),s),m=-d*d+f*(f+2*h)+l):f<=x?(d=0,f=Math.min(Math.max(-s,-h),s),m=f*(f+2*h)+l):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-h),s),m=-d*d+f*(f+2*h)+l);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*h)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(lr).addScaledVector(vi,f),m}intersectSphere(e,t){Gt.subVectors(e.center,this.origin);const n=Gt.dot(this.direction),r=Gt.dot(Gt)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,h=n+o;return h<0?null:a<0?this.at(h,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,h;const l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,r=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,r=(e.min.x-f.x)*l),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,h=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,h=(e.min.z-f.z)*d),n>h||a>r)||((a>n||n!==n)&&(n=a),(h<r||r!==r)&&(r=h),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Gt)!==null}intersectTriangle(e,t,n,r,s){cr.subVectors(t,e),xi.subVectors(n,e),ur.crossVectors(cr,xi);let o=this.direction.dot(ur),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Zt.subVectors(this.origin,e);const h=a*this.direction.dot(xi.crossVectors(Zt,xi));if(h<0)return null;const l=a*this.direction.dot(cr.cross(Zt));if(l<0||h+l>o)return null;const u=-a*Zt.dot(ur);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ke{constructor(){Ke.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,r,s,o,a,h,l,u,d,f,m,x,_,p){const c=this.elements;return c[0]=e,c[4]=t,c[8]=n,c[12]=r,c[1]=s,c[5]=o,c[9]=a,c[13]=h,c[2]=l,c[6]=u,c[10]=d,c[14]=f,c[3]=m,c[7]=x,c[11]=_,c[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ke().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/An.setFromMatrixColumn(e,0).length(),s=1/An.setFromMatrixColumn(e,1).length(),o=1/An.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),h=Math.cos(r),l=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=o*u,m=o*d,x=a*u,_=a*d;t[0]=h*u,t[4]=-h*d,t[8]=l,t[1]=m+x*l,t[5]=f-_*l,t[9]=-a*h,t[2]=_-f*l,t[6]=x+m*l,t[10]=o*h}else if(e.order==="YXZ"){const f=h*u,m=h*d,x=l*u,_=l*d;t[0]=f+_*a,t[4]=x*a-m,t[8]=o*l,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=m*a-x,t[6]=_+f*a,t[10]=o*h}else if(e.order==="ZXY"){const f=h*u,m=h*d,x=l*u,_=l*d;t[0]=f-_*a,t[4]=-o*d,t[8]=x+m*a,t[1]=m+x*a,t[5]=o*u,t[9]=_-f*a,t[2]=-o*l,t[6]=a,t[10]=o*h}else if(e.order==="ZYX"){const f=o*u,m=o*d,x=a*u,_=a*d;t[0]=h*u,t[4]=x*l-m,t[8]=f*l+_,t[1]=h*d,t[5]=_*l+f,t[9]=m*l-x,t[2]=-l,t[6]=a*h,t[10]=o*h}else if(e.order==="YZX"){const f=o*h,m=o*l,x=a*h,_=a*l;t[0]=h*u,t[4]=_-f*d,t[8]=x*d+m,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=m*d+x,t[10]=f-_*d}else if(e.order==="XZY"){const f=o*h,m=o*l,x=a*h,_=a*l;t[0]=h*u,t[4]=-d,t[8]=l*u,t[1]=f*d+_,t[5]=o*u,t[9]=m*d-x,t[2]=x*d-m,t[6]=a*u,t[10]=_*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose($o,e,Jo)}lookAt(e,t,n){const r=this.elements;return xt.subVectors(e,t),xt.lengthSq()===0&&(xt.z=1),xt.normalize(),$t.crossVectors(n,xt),$t.lengthSq()===0&&(Math.abs(n.z)===1?xt.x+=1e-4:xt.z+=1e-4,xt.normalize(),$t.crossVectors(n,xt)),$t.normalize(),Mi.crossVectors(xt,$t),r[0]=$t.x,r[4]=Mi.x,r[8]=xt.x,r[1]=$t.y,r[5]=Mi.y,r[9]=xt.y,r[2]=$t.z,r[6]=Mi.z,r[10]=xt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],h=n[8],l=n[12],u=n[1],d=n[5],f=n[9],m=n[13],x=n[2],_=n[6],p=n[10],c=n[14],E=n[3],S=n[7],y=n[11],b=n[15],R=r[0],P=r[4],X=r[8],v=r[12],A=r[1],j=r[5],Y=r[9],D=r[13],z=r[2],V=r[6],J=r[10],W=r[14],k=r[3],ee=r[7],K=r[11],_e=r[15];return s[0]=o*R+a*A+h*z+l*k,s[4]=o*P+a*j+h*V+l*ee,s[8]=o*X+a*Y+h*J+l*K,s[12]=o*v+a*D+h*W+l*_e,s[1]=u*R+d*A+f*z+m*k,s[5]=u*P+d*j+f*V+m*ee,s[9]=u*X+d*Y+f*J+m*K,s[13]=u*v+d*D+f*W+m*_e,s[2]=x*R+_*A+p*z+c*k,s[6]=x*P+_*j+p*V+c*ee,s[10]=x*X+_*Y+p*J+c*K,s[14]=x*v+_*D+p*W+c*_e,s[3]=E*R+S*A+y*z+b*k,s[7]=E*P+S*j+y*V+b*ee,s[11]=E*X+S*Y+y*J+b*K,s[15]=E*v+S*D+y*W+b*_e,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],h=e[9],l=e[13],u=e[2],d=e[6],f=e[10],m=e[14],x=e[3],_=e[7],p=e[11],c=e[15];return x*(+s*h*d-r*l*d-s*a*f+n*l*f+r*a*m-n*h*m)+_*(+t*h*m-t*l*f+s*o*f-r*o*m+r*l*u-s*h*u)+p*(+t*l*d-t*a*m-s*o*d+n*o*m+s*a*u-n*l*u)+c*(-r*a*u-t*h*d+t*a*f+r*o*d-n*o*f+n*h*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],h=e[6],l=e[7],u=e[8],d=e[9],f=e[10],m=e[11],x=e[12],_=e[13],p=e[14],c=e[15],E=d*p*l-_*f*l+_*h*m-a*p*m-d*h*c+a*f*c,S=x*f*l-u*p*l-x*h*m+o*p*m+u*h*c-o*f*c,y=u*_*l-x*d*l+x*a*m-o*_*m-u*a*c+o*d*c,b=x*d*h-u*_*h-x*a*f+o*_*f+u*a*p-o*d*p,R=t*E+n*S+r*y+s*b;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/R;return e[0]=E*P,e[1]=(_*f*s-d*p*s-_*r*m+n*p*m+d*r*c-n*f*c)*P,e[2]=(a*p*s-_*h*s+_*r*l-n*p*l-a*r*c+n*h*c)*P,e[3]=(d*h*s-a*f*s-d*r*l+n*f*l+a*r*m-n*h*m)*P,e[4]=S*P,e[5]=(u*p*s-x*f*s+x*r*m-t*p*m-u*r*c+t*f*c)*P,e[6]=(x*h*s-o*p*s-x*r*l+t*p*l+o*r*c-t*h*c)*P,e[7]=(o*f*s-u*h*s+u*r*l-t*f*l-o*r*m+t*h*m)*P,e[8]=y*P,e[9]=(x*d*s-u*_*s-x*n*m+t*_*m+u*n*c-t*d*c)*P,e[10]=(o*_*s-x*a*s+x*n*l-t*_*l-o*n*c+t*a*c)*P,e[11]=(u*a*s-o*d*s-u*n*l+t*d*l+o*n*m-t*a*m)*P,e[12]=b*P,e[13]=(u*_*r-x*d*r+x*n*f-t*_*f-u*n*p+t*d*p)*P,e[14]=(x*a*r-o*_*r-x*n*h+t*_*h+o*n*p-t*a*p)*P,e[15]=(o*d*r-u*a*r+u*n*h-t*d*h-o*n*f+t*a*f)*P,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,h=e.z,l=s*o,u=s*a;return this.set(l*o+n,l*a-r*h,l*h+r*a,0,l*a+r*h,u*a+n,u*h-r*o,0,l*h-r*a,u*h+r*o,s*h*h+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,h=t._w,l=s+s,u=o+o,d=a+a,f=s*l,m=s*u,x=s*d,_=o*u,p=o*d,c=a*d,E=h*l,S=h*u,y=h*d,b=n.x,R=n.y,P=n.z;return r[0]=(1-(_+c))*b,r[1]=(m+y)*b,r[2]=(x-S)*b,r[3]=0,r[4]=(m-y)*R,r[5]=(1-(f+c))*R,r[6]=(p+E)*R,r[7]=0,r[8]=(x+S)*P,r[9]=(p-E)*P,r[10]=(1-(f+_))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=An.set(r[0],r[1],r[2]).length();const o=An.set(r[4],r[5],r[6]).length(),a=An.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],At.copy(this);const l=1/s,u=1/o,d=1/a;return At.elements[0]*=l,At.elements[1]*=l,At.elements[2]*=l,At.elements[4]*=u,At.elements[5]*=u,At.elements[6]*=u,At.elements[8]*=d,At.elements[9]*=d,At.elements[10]*=d,t.setFromRotationMatrix(At),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o){const a=this.elements,h=2*s/(t-e),l=2*s/(n-r),u=(t+e)/(t-e),d=(n+r)/(n-r),f=-(o+s)/(o-s),m=-2*o*s/(o-s);return a[0]=h,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=l,a[9]=d,a[13]=0,a[2]=0,a[6]=0,a[10]=f,a[14]=m,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,r,s,o){const a=this.elements,h=1/(t-e),l=1/(n-r),u=1/(o-s),d=(t+e)*h,f=(n+r)*l,m=(o+s)*u;return a[0]=2*h,a[4]=0,a[8]=0,a[12]=-d,a[1]=0,a[5]=2*l,a[9]=0,a[13]=-f,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-m,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const An=new I,At=new Ke,$o=new I(0,0,0),Jo=new I(1,1,1),$t=new I,Mi=new I,xt=new I,Ss=new Ke,Es=new hi;class zi{constructor(e=0,t=0,n=0,r=zi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],h=r[1],l=r[5],u=r[9],d=r[2],f=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(mt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-mt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(h,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(mt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(h,s));break;case"ZYX":this._y=Math.asin(-mt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(h,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(mt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-mt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ss.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ss,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Es.setFromEuler(this),this.setFromQuaternion(Es,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}zi.DEFAULT_ORDER="XYZ";class Ir{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Qo=0;const Ts=new I,wn=new hi,Ht=new Ke,Si=new I,ei=new I,el=new I,tl=new hi,ys=new I(1,0,0),bs=new I(0,1,0),As=new I(0,0,1),nl={type:"added"},ws={type:"removed"};class dt extends jn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Qo++}),this.uuid=ui(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=dt.DEFAULT_UP.clone();const e=new I,t=new zi,n=new hi,r=new I(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ke},normalMatrix:{value:new Pe}}),this.matrix=new Ke,this.matrixWorld=new Ke,this.matrixAutoUpdate=dt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Ir,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return wn.setFromAxisAngle(e,t),this.quaternion.multiply(wn),this}rotateOnWorldAxis(e,t){return wn.setFromAxisAngle(e,t),this.quaternion.premultiply(wn),this}rotateX(e){return this.rotateOnAxis(ys,e)}rotateY(e){return this.rotateOnAxis(bs,e)}rotateZ(e){return this.rotateOnAxis(As,e)}translateOnAxis(e,t){return Ts.copy(e).applyQuaternion(this.quaternion),this.position.add(Ts.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ys,e)}translateY(e){return this.translateOnAxis(bs,e)}translateZ(e){return this.translateOnAxis(As,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ht.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Si.copy(e):Si.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),ei.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ht.lookAt(ei,Si,this.up):Ht.lookAt(Si,ei,this.up),this.quaternion.setFromRotationMatrix(Ht),r&&(Ht.extractRotation(r.matrixWorld),wn.setFromRotationMatrix(Ht),this.quaternion.premultiply(wn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(nl)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ws)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(ws)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Ht.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ht.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ht),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let r=0,s=this.children.length;r<s;r++){const o=this.children[r].getObjectsByProperty(e,t);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ei,e,el),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ei,tl,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,h){return a[h.uuid]===void 0&&(a[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const h=a.shapes;if(Array.isArray(h))for(let l=0,u=h.length;l<u;l++){const d=h[l];s(e.shapes,d)}else s(e.shapes,h)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let h=0,l=this.material.length;h<l;h++)a.push(s(e.materials,this.material[h]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const h=this.animations[a];r.animations.push(s(e.animations,h))}}if(t){const a=o(e.geometries),h=o(e.materials),l=o(e.textures),u=o(e.images),d=o(e.shapes),f=o(e.skeletons),m=o(e.animations),x=o(e.nodes);a.length>0&&(n.geometries=a),h.length>0&&(n.materials=h),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),x.length>0&&(n.nodes=x)}return n.object=r,n;function o(a){const h=[];for(const l in a){const u=a[l];delete u.metadata,h.push(u)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}dt.DEFAULT_UP=new I(0,1,0);dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const wt=new I,Vt=new I,hr=new I,kt=new I,Rn=new I,Cn=new I,Rs=new I,dr=new I,fr=new I,pr=new I;let Ei=!1;class Ct{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),wt.subVectors(e,t),r.cross(wt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){wt.subVectors(r,t),Vt.subVectors(n,t),hr.subVectors(e,t);const o=wt.dot(wt),a=wt.dot(Vt),h=wt.dot(hr),l=Vt.dot(Vt),u=Vt.dot(hr),d=o*l-a*a;if(d===0)return s.set(-2,-1,-1);const f=1/d,m=(l*h-a*u)*f,x=(o*u-a*h)*f;return s.set(1-m-x,x,m)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,kt),kt.x>=0&&kt.y>=0&&kt.x+kt.y<=1}static getUV(e,t,n,r,s,o,a,h){return Ei===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ei=!0),this.getInterpolation(e,t,n,r,s,o,a,h)}static getInterpolation(e,t,n,r,s,o,a,h){return this.getBarycoord(e,t,n,r,kt),h.setScalar(0),h.addScaledVector(s,kt.x),h.addScaledVector(o,kt.y),h.addScaledVector(a,kt.z),h}static isFrontFacing(e,t,n,r){return wt.subVectors(n,t),Vt.subVectors(e,t),wt.cross(Vt).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return wt.subVectors(this.c,this.b),Vt.subVectors(this.a,this.b),wt.cross(Vt).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ct.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ct.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,s){return Ei===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ei=!0),Ct.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}getInterpolation(e,t,n,r,s){return Ct.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Ct.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ct.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;Rn.subVectors(r,n),Cn.subVectors(s,n),dr.subVectors(e,n);const h=Rn.dot(dr),l=Cn.dot(dr);if(h<=0&&l<=0)return t.copy(n);fr.subVectors(e,r);const u=Rn.dot(fr),d=Cn.dot(fr);if(u>=0&&d<=u)return t.copy(r);const f=h*d-u*l;if(f<=0&&h>=0&&u<=0)return o=h/(h-u),t.copy(n).addScaledVector(Rn,o);pr.subVectors(e,s);const m=Rn.dot(pr),x=Cn.dot(pr);if(x>=0&&m<=x)return t.copy(s);const _=m*l-h*x;if(_<=0&&l>=0&&x<=0)return a=l/(l-x),t.copy(n).addScaledVector(Cn,a);const p=u*x-m*d;if(p<=0&&d-u>=0&&m-x>=0)return Rs.subVectors(s,r),a=(d-u)/(d-u+(m-x)),t.copy(r).addScaledVector(Rs,a);const c=1/(p+_+f);return o=_*c,a=f*c,t.copy(n).addScaledVector(Rn,o).addScaledVector(Cn,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let il=0;class Gi extends jn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:il++}),this.uuid=ui(),this.name="",this.type="Material",this.blending=Hn,this.side=en,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=la,this.blendDst=ca,this.blendEquation=On,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Tr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qi,this.stencilZFail=Qi,this.stencilZPass=Qi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Hn&&(n.blending=this.blending),this.side!==en&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const h=s[a];delete h.metadata,o.push(h)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ma={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Rt={h:0,s:0,l:0},Ti={h:0,s:0,l:0};function mr(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ve{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ye){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,bt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=bt.workingColorSpace){return this.r=e,this.g=t,this.b=n,bt.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=bt.workingColorSpace){if(e=Go(e,1),t=mt(t,0,1),n=mt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=mr(o,s,e+1/3),this.g=mr(o,s,e),this.b=mr(o,s,e-1/3)}return bt.toWorkingColorSpace(this,r),this}setStyle(e,t=ye){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ye){const n=Ma[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=kn(e.r),this.g=kn(e.g),this.b=kn(e.b),this}copyLinearToSRGB(e){return this.r=ir(e.r),this.g=ir(e.g),this.b=ir(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ye){return bt.fromWorkingColorSpace(at.copy(this),e),Math.round(mt(at.r*255,0,255))*65536+Math.round(mt(at.g*255,0,255))*256+Math.round(mt(at.b*255,0,255))}getHexString(e=ye){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=bt.workingColorSpace){bt.fromWorkingColorSpace(at.copy(this),t);const n=at.r,r=at.g,s=at.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let h,l;const u=(a+o)/2;if(a===o)h=0,l=0;else{const d=o-a;switch(l=u<=.5?d/(o+a):d/(2-o-a),o){case n:h=(r-s)/d+(r<s?6:0);break;case r:h=(s-n)/d+2;break;case s:h=(n-r)/d+4;break}h/=6}return e.h=h,e.s=l,e.l=u,e}getRGB(e,t=bt.workingColorSpace){return bt.fromWorkingColorSpace(at.copy(this),t),e.r=at.r,e.g=at.g,e.b=at.b,e}getStyle(e=ye){bt.fromWorkingColorSpace(at.copy(this),e);const t=at.r,n=at.g,r=at.b;return e!==ye?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Rt),Rt.h+=e,Rt.s+=t,Rt.l+=n,this.setHSL(Rt.h,Rt.s,Rt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Rt),e.getHSL(Ti);const n=tr(Rt.h,Ti.h,t),r=tr(Rt.s,Ti.s,t),s=tr(Rt.l,Ti.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const at=new Ve;Ve.NAMES=Ma;class Hi extends Gi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ua,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ye=new I,yi=new He;class Ft{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=_s,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)yi.fromBufferAttribute(this,t),yi.applyMatrix3(e),this.setXY(t,yi.x,yi.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ye.fromBufferAttribute(this,t),Ye.applyMatrix3(e),this.setXYZ(t,Ye.x,Ye.y,Ye.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ye.fromBufferAttribute(this,t),Ye.applyMatrix4(e),this.setXYZ(t,Ye.x,Ye.y,Ye.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ye.fromBufferAttribute(this,t),Ye.applyNormalMatrix(e),this.setXYZ(t,Ye.x,Ye.y,Ye.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ye.fromBufferAttribute(this,t),Ye.transformDirection(e),this.setXYZ(t,Ye.x,Ye.y,Ye.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=mi(t,this.array)),t}setX(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=mi(t,this.array)),t}setY(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=mi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=mi(t,this.array)),t}setW(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),r=vt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),r=vt(r,this.array),s=vt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==_s&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Sa extends Ft{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Ea extends Ft{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class _n extends Ft{constructor(e,t,n){super(new Float32Array(e),t,n)}}let rl=0;const Et=new Ke,_r=new dt,Ln=new I,Mt=new di,ti=new di,tt=new I;class Mn extends jn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:rl++}),this.uuid=ui(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ma(e)?Ea:Sa)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Pe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Et.makeRotationFromQuaternion(e),this.applyMatrix4(Et),this}rotateX(e){return Et.makeRotationX(e),this.applyMatrix4(Et),this}rotateY(e){return Et.makeRotationY(e),this.applyMatrix4(Et),this}rotateZ(e){return Et.makeRotationZ(e),this.applyMatrix4(Et),this}translate(e,t,n){return Et.makeTranslation(e,t,n),this.applyMatrix4(Et),this}scale(e,t,n){return Et.makeScale(e,t,n),this.applyMatrix4(Et),this}lookAt(e){return _r.lookAt(e),_r.updateMatrix(),this.applyMatrix4(_r.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ln).negate(),this.translate(Ln.x,Ln.y,Ln.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new _n(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new di);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Mt.setFromBufferAttribute(s),this.morphTargetsRelative?(tt.addVectors(this.boundingBox.min,Mt.min),this.boundingBox.expandByPoint(tt),tt.addVectors(this.boundingBox.max,Mt.max),this.boundingBox.expandByPoint(tt)):(this.boundingBox.expandByPoint(Mt.min),this.boundingBox.expandByPoint(Mt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Dr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new I,1/0);return}if(e){const n=this.boundingSphere.center;if(Mt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];ti.setFromBufferAttribute(a),this.morphTargetsRelative?(tt.addVectors(Mt.min,ti.min),Mt.expandByPoint(tt),tt.addVectors(Mt.max,ti.max),Mt.expandByPoint(tt)):(Mt.expandByPoint(ti.min),Mt.expandByPoint(ti.max))}Mt.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)tt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(tt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],h=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)tt.fromBufferAttribute(a,l),h&&(Ln.fromBufferAttribute(e,l),tt.add(Ln)),r=Math.max(r,n.distanceToSquared(tt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ft(new Float32Array(4*a),4));const h=this.getAttribute("tangent").array,l=[],u=[];for(let A=0;A<a;A++)l[A]=new I,u[A]=new I;const d=new I,f=new I,m=new I,x=new He,_=new He,p=new He,c=new I,E=new I;function S(A,j,Y){d.fromArray(r,A*3),f.fromArray(r,j*3),m.fromArray(r,Y*3),x.fromArray(o,A*2),_.fromArray(o,j*2),p.fromArray(o,Y*2),f.sub(d),m.sub(d),_.sub(x),p.sub(x);const D=1/(_.x*p.y-p.x*_.y);isFinite(D)&&(c.copy(f).multiplyScalar(p.y).addScaledVector(m,-_.y).multiplyScalar(D),E.copy(m).multiplyScalar(_.x).addScaledVector(f,-p.x).multiplyScalar(D),l[A].add(c),l[j].add(c),l[Y].add(c),u[A].add(E),u[j].add(E),u[Y].add(E))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let A=0,j=y.length;A<j;++A){const Y=y[A],D=Y.start,z=Y.count;for(let V=D,J=D+z;V<J;V+=3)S(n[V+0],n[V+1],n[V+2])}const b=new I,R=new I,P=new I,X=new I;function v(A){P.fromArray(s,A*3),X.copy(P);const j=l[A];b.copy(j),b.sub(P.multiplyScalar(P.dot(j))).normalize(),R.crossVectors(X,j);const D=R.dot(u[A])<0?-1:1;h[A*4]=b.x,h[A*4+1]=b.y,h[A*4+2]=b.z,h[A*4+3]=D}for(let A=0,j=y.length;A<j;++A){const Y=y[A],D=Y.start,z=Y.count;for(let V=D,J=D+z;V<J;V+=3)v(n[V+0]),v(n[V+1]),v(n[V+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ft(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const r=new I,s=new I,o=new I,a=new I,h=new I,l=new I,u=new I,d=new I;if(e)for(let f=0,m=e.count;f<m;f+=3){const x=e.getX(f+0),_=e.getX(f+1),p=e.getX(f+2);r.fromBufferAttribute(t,x),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,p),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(n,x),h.fromBufferAttribute(n,_),l.fromBufferAttribute(n,p),a.add(u),h.add(u),l.add(u),n.setXYZ(x,a.x,a.y,a.z),n.setXYZ(_,h.x,h.y,h.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let f=0,m=t.count;f<m;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)tt.fromBufferAttribute(e,t),tt.normalize(),e.setXYZ(t,tt.x,tt.y,tt.z)}toNonIndexed(){function e(a,h){const l=a.array,u=a.itemSize,d=a.normalized,f=new l.constructor(h.length*u);let m=0,x=0;for(let _=0,p=h.length;_<p;_++){a.isInterleavedBufferAttribute?m=h[_]*a.data.stride+a.offset:m=h[_]*u;for(let c=0;c<u;c++)f[x++]=l[m++]}return new Ft(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Mn,n=this.index.array,r=this.attributes;for(const a in r){const h=r[a],l=e(h,n);t.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const h=[],l=s[a];for(let u=0,d=l.length;u<d;u++){const f=l[u],m=e(f,n);h.push(m)}t.morphAttributes[a]=h}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,h=o.length;a<h;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const l in h)h[l]!==void 0&&(e[l]=h[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const h in n){const l=n[h];e.data.attributes[h]=l.toJSON(e.data)}const r={};let s=!1;for(const h in this.morphAttributes){const l=this.morphAttributes[h],u=[];for(let d=0,f=l.length;d<f;d++){const m=l[d];u.push(m.toJSON(e.data))}u.length>0&&(r[h]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],d=s[l];for(let f=0,m=d.length;f<m;f++)u.push(d[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Cs=new Ke,It=new xa,bi=new Dr,Ls=new I,Pn=new I,Un=new I,Dn=new I,gr=new I,Ai=new I,wi=new He,Ri=new He,Ci=new He,Ps=new I,Us=new I,Ds=new I,Li=new I,Pi=new I;class Ut extends dt{constructor(e=new Mn,t=new Hi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Ai.set(0,0,0);for(let h=0,l=s.length;h<l;h++){const u=a[h],d=s[h];u!==0&&(gr.fromBufferAttribute(d,e),o?Ai.addScaledVector(gr,u):Ai.addScaledVector(gr.sub(t),u))}t.add(Ai)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),bi.copy(n.boundingSphere),bi.applyMatrix4(s),It.copy(e.ray).recast(e.near),!(bi.containsPoint(It.origin)===!1&&(It.intersectSphere(bi,Ls)===null||It.origin.distanceToSquared(Ls)>(e.far-e.near)**2))&&(Cs.copy(s).invert(),It.copy(e.ray).applyMatrix4(Cs),!(n.boundingBox!==null&&It.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t)))}_computeIntersections(e,t){let n;const r=this.geometry,s=this.material,o=r.index,a=r.attributes.position,h=r.attributes.uv,l=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(s))for(let m=0,x=d.length;m<x;m++){const _=d[m],p=s[_.materialIndex],c=Math.max(_.start,f.start),E=Math.min(o.count,Math.min(_.start+_.count,f.start+f.count));for(let S=c,y=E;S<y;S+=3){const b=o.getX(S),R=o.getX(S+1),P=o.getX(S+2);n=Ui(this,p,e,It,h,l,u,b,R,P),n&&(n.faceIndex=Math.floor(S/3),n.face.materialIndex=_.materialIndex,t.push(n))}}else{const m=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let _=m,p=x;_<p;_+=3){const c=o.getX(_),E=o.getX(_+1),S=o.getX(_+2);n=Ui(this,s,e,It,h,l,u,c,E,S),n&&(n.faceIndex=Math.floor(_/3),t.push(n))}}else if(a!==void 0)if(Array.isArray(s))for(let m=0,x=d.length;m<x;m++){const _=d[m],p=s[_.materialIndex],c=Math.max(_.start,f.start),E=Math.min(a.count,Math.min(_.start+_.count,f.start+f.count));for(let S=c,y=E;S<y;S+=3){const b=S,R=S+1,P=S+2;n=Ui(this,p,e,It,h,l,u,b,R,P),n&&(n.faceIndex=Math.floor(S/3),n.face.materialIndex=_.materialIndex,t.push(n))}}else{const m=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let _=m,p=x;_<p;_+=3){const c=_,E=_+1,S=_+2;n=Ui(this,s,e,It,h,l,u,c,E,S),n&&(n.faceIndex=Math.floor(_/3),t.push(n))}}}}function sl(i,e,t,n,r,s,o,a){let h;if(e.side===_t?h=n.intersectTriangle(o,s,r,!0,a):h=n.intersectTriangle(r,s,o,e.side===en,a),h===null)return null;Pi.copy(a),Pi.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Pi);return l<t.near||l>t.far?null:{distance:l,point:Pi.clone(),object:i}}function Ui(i,e,t,n,r,s,o,a,h,l){i.getVertexPosition(a,Pn),i.getVertexPosition(h,Un),i.getVertexPosition(l,Dn);const u=sl(i,e,t,n,Pn,Un,Dn,Li);if(u){r&&(wi.fromBufferAttribute(r,a),Ri.fromBufferAttribute(r,h),Ci.fromBufferAttribute(r,l),u.uv=Ct.getInterpolation(Li,Pn,Un,Dn,wi,Ri,Ci,new He)),s&&(wi.fromBufferAttribute(s,a),Ri.fromBufferAttribute(s,h),Ci.fromBufferAttribute(s,l),u.uv1=Ct.getInterpolation(Li,Pn,Un,Dn,wi,Ri,Ci,new He),u.uv2=u.uv1),o&&(Ps.fromBufferAttribute(o,a),Us.fromBufferAttribute(o,h),Ds.fromBufferAttribute(o,l),u.normal=Ct.getInterpolation(Li,Pn,Un,Dn,Ps,Us,Ds,new I),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:h,c:l,normal:new I,materialIndex:0};Ct.getNormal(Pn,Un,Dn,d.normal),u.face=d}return u}class fi extends Mn{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const h=[],l=[],u=[],d=[];let f=0,m=0;x("z","y","x",-1,-1,n,t,e,o,s,0),x("z","y","x",1,-1,n,t,-e,o,s,1),x("x","z","y",1,1,e,n,t,r,o,2),x("x","z","y",1,-1,e,n,-t,r,o,3),x("x","y","z",1,-1,e,t,n,r,s,4),x("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(h),this.setAttribute("position",new _n(l,3)),this.setAttribute("normal",new _n(u,3)),this.setAttribute("uv",new _n(d,2));function x(_,p,c,E,S,y,b,R,P,X,v){const A=y/P,j=b/X,Y=y/2,D=b/2,z=R/2,V=P+1,J=X+1;let W=0,k=0;const ee=new I;for(let K=0;K<J;K++){const _e=K*j-D;for(let te=0;te<V;te++){const F=te*A-Y;ee[_]=F*E,ee[p]=_e*S,ee[c]=z,l.push(ee.x,ee.y,ee.z),ee[_]=0,ee[p]=0,ee[c]=R>0?1:-1,u.push(ee.x,ee.y,ee.z),d.push(te/P),d.push(1-K/X),W+=1}}for(let K=0;K<X;K++)for(let _e=0;_e<P;_e++){const te=f+_e+V*K,F=f+_e+V*(K+1),q=f+(_e+1)+V*(K+1),re=f+(_e+1)+V*K;h.push(te,F,re),h.push(F,q,re),k+=6}a.addGroup(m,k,v),m+=k,f+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Yn(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function ct(i){const e={};for(let t=0;t<i.length;t++){const n=Yn(i[t]);for(const r in n)e[r]=n[r]}return e}function al(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Ta(i){return i.getRenderTarget()===null?i.outputColorSpace:Ot}const ol={clone:Yn,merge:ct};var ll=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cl=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class xn extends Gi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ll,this.fragmentShader=cl,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Yn(e.uniforms),this.uniformsGroups=al(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}let ya=class extends dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ke,this.projectionMatrix=new Ke,this.projectionMatrixInverse=new Ke}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};class Tt extends ya{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Cr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(er*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Cr*2*Math.atan(Math.tan(er*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(er*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const h=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/h,t-=o.offsetY*n/l,r*=o.width/h,n*=o.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const In=-90,Nn=1;class ul extends dt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const r=new Tt(In,Nn,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(1,0,0),this.add(r);const s=new Tt(In,Nn,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const o=new Tt(In,Nn,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new Tt(In,Nn,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const h=new Tt(In,Nn,e,t);h.layers=this.layers,h.up.set(0,1,0),h.lookAt(0,0,1),this.add(h);const l=new Tt(In,Nn,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,-1),this.add(l)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[r,s,o,a,h,l]=this.children,u=e.getRenderTarget(),d=e.toneMapping,f=e.xr.enabled;e.toneMapping=qt,e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,r),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,h),n.texture.generateMipmaps=m,e.setRenderTarget(n,5),e.render(t,l),e.setRenderTarget(u),e.toneMapping=d,e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class ba extends ht{constructor(e,t,n,r,s,o,a,h,l,u){e=e!==void 0?e:[],t=t!==void 0?t:Wn,super(e,t,n,r,s,o,a,h,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class hl extends vn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];t.encoding!==void 0&&(ii("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===pn?ye:mn),this.texture=new ba(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:pt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new fi(5,5,5),s=new xn({name:"CubemapFromEquirect",uniforms:Yn(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:_t,blending:Qt});s.uniforms.tEquirect.value=t;const o=new Ut(r,s),a=t.minFilter;return t.minFilter===oi&&(t.minFilter=pt),new ul(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}const vr=new I,dl=new I,fl=new Pe;class ln{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=vr.subVectors(n,t).cross(dl.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(vr),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||fl.getNormalMatrix(e),r=this.coplanarPoint(vr).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const on=new Dr,Di=new I;class Aa{constructor(e=new ln,t=new ln,n=new ln,r=new ln,s=new ln,o=new ln){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,r=n[0],s=n[1],o=n[2],a=n[3],h=n[4],l=n[5],u=n[6],d=n[7],f=n[8],m=n[9],x=n[10],_=n[11],p=n[12],c=n[13],E=n[14],S=n[15];return t[0].setComponents(a-r,d-h,_-f,S-p).normalize(),t[1].setComponents(a+r,d+h,_+f,S+p).normalize(),t[2].setComponents(a+s,d+l,_+m,S+c).normalize(),t[3].setComponents(a-s,d-l,_-m,S-c).normalize(),t[4].setComponents(a-o,d-u,_-x,S-E).normalize(),t[5].setComponents(a+o,d+u,_+x,S+E).normalize(),this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),on.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),on.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(on)}intersectsSprite(e){return on.center.set(0,0,0),on.radius=.7071067811865476,on.applyMatrix4(e.matrixWorld),this.intersectsSphere(on)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Di.x=r.normal.x>0?e.max.x:e.min.x,Di.y=r.normal.y>0?e.max.y:e.min.y,Di.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Di)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function wa(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function pl(i,e){const t=e.isWebGL2,n=new WeakMap;function r(l,u){const d=l.array,f=l.usage,m=i.createBuffer();i.bindBuffer(u,m),i.bufferData(u,d,f),l.onUploadCallback();let x;if(d instanceof Float32Array)x=i.FLOAT;else if(d instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)x=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=i.UNSIGNED_SHORT;else if(d instanceof Int16Array)x=i.SHORT;else if(d instanceof Uint32Array)x=i.UNSIGNED_INT;else if(d instanceof Int32Array)x=i.INT;else if(d instanceof Int8Array)x=i.BYTE;else if(d instanceof Uint8Array)x=i.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)x=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:m,type:x,bytesPerElement:d.BYTES_PER_ELEMENT,version:l.version}}function s(l,u,d){const f=u.array,m=u.updateRange;i.bindBuffer(d,l),m.count===-1?i.bufferSubData(d,0,f):(t?i.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):i.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);u&&(i.deleteBuffer(u.buffer),n.delete(l))}function h(l,u){if(l.isGLBufferAttribute){const f=n.get(l);(!f||f.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const d=n.get(l);d===void 0?n.set(l,r(l,u)):d.version<l.version&&(s(d.buffer,l,u),d.version=l.version)}return{get:o,remove:a,update:h}}class Kn extends Mn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),h=Math.floor(r),l=a+1,u=h+1,d=e/a,f=t/h,m=[],x=[],_=[],p=[];for(let c=0;c<u;c++){const E=c*f-o;for(let S=0;S<l;S++){const y=S*d-s;x.push(y,-E,0),_.push(0,0,1),p.push(S/a),p.push(1-c/h)}}for(let c=0;c<h;c++)for(let E=0;E<a;E++){const S=E+l*c,y=E+l*(c+1),b=E+1+l*(c+1),R=E+1+l*c;m.push(S,y,R),m.push(y,b,R)}this.setIndex(m),this.setAttribute("position",new _n(x,3)),this.setAttribute("normal",new _n(_,3)),this.setAttribute("uv",new _n(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kn(e.width,e.height,e.widthSegments,e.heightSegments)}}var ml=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_l=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gl=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,vl=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xl=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ml=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Sl="vec3 transformed = vec3( position );",El=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Tl=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,yl=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bl=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Al=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,wl=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Rl=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Cl=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ll=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Pl=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ul=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Dl=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Il=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Nl=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Fl=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ol=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Bl=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,zl=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Gl=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Hl="gl_FragColor = linearToOutputTexel( gl_FragColor );",Vl=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,kl=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Wl=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Xl=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ql=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Yl=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Kl=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jl=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Zl=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$l=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Jl=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Ql=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,ec=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,tc=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,nc=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ic=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,rc=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,sc=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ac=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,oc=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lc=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cc=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif`,uc=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,hc=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,dc=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,fc=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,pc=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,mc=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_c=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,gc=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,vc=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,xc=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Mc=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Sc=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ec=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Tc=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yc=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,bc=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Ac=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,wc=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Rc=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#ifdef USE_NORMALMAP_TANGENTSPACE
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,Cc=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Lc=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pc=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Uc=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Dc=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ic=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Nc=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Fc=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Oc=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Bc=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zc=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Gc=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Hc=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Vc=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,kc=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Wc=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Xc=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qc=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Yc=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Kc=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,jc=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Zc=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$c=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Jc=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Qc=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,eu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,tu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,nu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,iu=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ru=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,su=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,au=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ou=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,lu=`#ifdef USE_UV
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,cu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const uu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hu=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,du=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fu=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,pu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mu=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,_u=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,gu=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,vu=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,xu=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Mu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Su=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Eu=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Tu=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yu=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,bu=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Au=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wu=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ru=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Cu=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lu=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Pu=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Uu=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Du=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Iu=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Nu=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fu=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ou=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bu=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,zu=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Gu=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hu=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Vu=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ku=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ae={alphamap_fragment:ml,alphamap_pars_fragment:_l,alphatest_fragment:gl,alphatest_pars_fragment:vl,aomap_fragment:xl,aomap_pars_fragment:Ml,begin_vertex:Sl,beginnormal_vertex:El,bsdfs:Tl,iridescence_fragment:yl,bumpmap_pars_fragment:bl,clipping_planes_fragment:Al,clipping_planes_pars_fragment:wl,clipping_planes_pars_vertex:Rl,clipping_planes_vertex:Cl,color_fragment:Ll,color_pars_fragment:Pl,color_pars_vertex:Ul,color_vertex:Dl,common:Il,cube_uv_reflection_fragment:Nl,defaultnormal_vertex:Fl,displacementmap_pars_vertex:Ol,displacementmap_vertex:Bl,emissivemap_fragment:zl,emissivemap_pars_fragment:Gl,encodings_fragment:Hl,encodings_pars_fragment:Vl,envmap_fragment:kl,envmap_common_pars_fragment:Wl,envmap_pars_fragment:Xl,envmap_pars_vertex:ql,envmap_physical_pars_fragment:rc,envmap_vertex:Yl,fog_vertex:Kl,fog_pars_vertex:jl,fog_fragment:Zl,fog_pars_fragment:$l,gradientmap_pars_fragment:Jl,lightmap_fragment:Ql,lightmap_pars_fragment:ec,lights_lambert_fragment:tc,lights_lambert_pars_fragment:nc,lights_pars_begin:ic,lights_toon_fragment:sc,lights_toon_pars_fragment:ac,lights_phong_fragment:oc,lights_phong_pars_fragment:lc,lights_physical_fragment:cc,lights_physical_pars_fragment:uc,lights_fragment_begin:hc,lights_fragment_maps:dc,lights_fragment_end:fc,logdepthbuf_fragment:pc,logdepthbuf_pars_fragment:mc,logdepthbuf_pars_vertex:_c,logdepthbuf_vertex:gc,map_fragment:vc,map_pars_fragment:xc,map_particle_fragment:Mc,map_particle_pars_fragment:Sc,metalnessmap_fragment:Ec,metalnessmap_pars_fragment:Tc,morphcolor_vertex:yc,morphnormal_vertex:bc,morphtarget_pars_vertex:Ac,morphtarget_vertex:wc,normal_fragment_begin:Rc,normal_fragment_maps:Cc,normal_pars_fragment:Lc,normal_pars_vertex:Pc,normal_vertex:Uc,normalmap_pars_fragment:Dc,clearcoat_normal_fragment_begin:Ic,clearcoat_normal_fragment_maps:Nc,clearcoat_pars_fragment:Fc,iridescence_pars_fragment:Oc,output_fragment:Bc,packing:zc,premultiplied_alpha_fragment:Gc,project_vertex:Hc,dithering_fragment:Vc,dithering_pars_fragment:kc,roughnessmap_fragment:Wc,roughnessmap_pars_fragment:Xc,shadowmap_pars_fragment:qc,shadowmap_pars_vertex:Yc,shadowmap_vertex:Kc,shadowmask_pars_fragment:jc,skinbase_vertex:Zc,skinning_pars_vertex:$c,skinning_vertex:Jc,skinnormal_vertex:Qc,specularmap_fragment:eu,specularmap_pars_fragment:tu,tonemapping_fragment:nu,tonemapping_pars_fragment:iu,transmission_fragment:ru,transmission_pars_fragment:su,uv_pars_fragment:au,uv_pars_vertex:ou,uv_vertex:lu,worldpos_vertex:cu,background_vert:uu,background_frag:hu,backgroundCube_vert:du,backgroundCube_frag:fu,cube_vert:pu,cube_frag:mu,depth_vert:_u,depth_frag:gu,distanceRGBA_vert:vu,distanceRGBA_frag:xu,equirect_vert:Mu,equirect_frag:Su,linedashed_vert:Eu,linedashed_frag:Tu,meshbasic_vert:yu,meshbasic_frag:bu,meshlambert_vert:Au,meshlambert_frag:wu,meshmatcap_vert:Ru,meshmatcap_frag:Cu,meshnormal_vert:Lu,meshnormal_frag:Pu,meshphong_vert:Uu,meshphong_frag:Du,meshphysical_vert:Iu,meshphysical_frag:Nu,meshtoon_vert:Fu,meshtoon_frag:Ou,points_vert:Bu,points_frag:zu,shadow_vert:Gu,shadow_frag:Hu,sprite_vert:Vu,sprite_frag:ku},ne={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Pe},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Pe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Pe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Pe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Pe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Pe},normalScale:{value:new He(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Pe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Pe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Pe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Pe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Pe}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new He(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Pe},alphaMap:{value:null},alphaTest:{value:0}}},Nt={basic:{uniforms:ct([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.fog]),vertexShader:Ae.meshbasic_vert,fragmentShader:Ae.meshbasic_frag},lambert:{uniforms:ct([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new Ve(0)}}]),vertexShader:Ae.meshlambert_vert,fragmentShader:Ae.meshlambert_frag},phong:{uniforms:ct([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30}}]),vertexShader:Ae.meshphong_vert,fragmentShader:Ae.meshphong_frag},standard:{uniforms:ct([ne.common,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.roughnessmap,ne.metalnessmap,ne.fog,ne.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ae.meshphysical_vert,fragmentShader:Ae.meshphysical_frag},toon:{uniforms:ct([ne.common,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.gradientmap,ne.fog,ne.lights,{emissive:{value:new Ve(0)}}]),vertexShader:Ae.meshtoon_vert,fragmentShader:Ae.meshtoon_frag},matcap:{uniforms:ct([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,{matcap:{value:null}}]),vertexShader:Ae.meshmatcap_vert,fragmentShader:Ae.meshmatcap_frag},points:{uniforms:ct([ne.points,ne.fog]),vertexShader:Ae.points_vert,fragmentShader:Ae.points_frag},dashed:{uniforms:ct([ne.common,ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ae.linedashed_vert,fragmentShader:Ae.linedashed_frag},depth:{uniforms:ct([ne.common,ne.displacementmap]),vertexShader:Ae.depth_vert,fragmentShader:Ae.depth_frag},normal:{uniforms:ct([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,{opacity:{value:1}}]),vertexShader:Ae.meshnormal_vert,fragmentShader:Ae.meshnormal_frag},sprite:{uniforms:ct([ne.sprite,ne.fog]),vertexShader:Ae.sprite_vert,fragmentShader:Ae.sprite_frag},background:{uniforms:{uvTransform:{value:new Pe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ae.background_vert,fragmentShader:Ae.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ae.backgroundCube_vert,fragmentShader:Ae.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ae.cube_vert,fragmentShader:Ae.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ae.equirect_vert,fragmentShader:Ae.equirect_frag},distanceRGBA:{uniforms:ct([ne.common,ne.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ae.distanceRGBA_vert,fragmentShader:Ae.distanceRGBA_frag},shadow:{uniforms:ct([ne.lights,ne.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:Ae.shadow_vert,fragmentShader:Ae.shadow_frag}};Nt.physical={uniforms:ct([Nt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Pe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Pe},clearcoatNormalScale:{value:new He(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Pe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Pe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Pe},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Pe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Pe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Pe},transmissionSamplerSize:{value:new He},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Pe},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Pe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Pe}}]),vertexShader:Ae.meshphysical_vert,fragmentShader:Ae.meshphysical_frag};const Ii={r:0,b:0,g:0};function Wu(i,e,t,n,r,s,o){const a=new Ve(0);let h=s===!0?0:1,l,u,d=null,f=0,m=null;function x(p,c){let E=!1,S=c.isScene===!0?c.background:null;switch(S&&S.isTexture&&(S=(c.backgroundBlurriness>0?t:e).get(S)),S===null?_(a,h):S&&S.isColor&&(_(S,1),E=!0),i.xr.getEnvironmentBlendMode()){case"opaque":E=!0;break;case"additive":n.buffers.color.setClear(0,0,0,1,o),E=!0;break;case"alpha-blend":n.buffers.color.setClear(0,0,0,0,o),E=!0;break}(i.autoClear||E)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),S&&(S.isCubeTexture||S.mapping===Bi)?(u===void 0&&(u=new Ut(new fi(1,1,1),new xn({name:"BackgroundCubeMaterial",uniforms:Yn(Nt.backgroundCube.uniforms),vertexShader:Nt.backgroundCube.vertexShader,fragmentShader:Nt.backgroundCube.fragmentShader,side:_t,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,P,X){this.matrixWorld.copyPosition(X.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=c.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=c.backgroundIntensity,u.material.toneMapped=S.colorSpace!==ye,(d!==S||f!==S.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,d=S,f=S.version,m=i.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new Ut(new Kn(2,2),new xn({name:"BackgroundMaterial",uniforms:Yn(Nt.background.uniforms),vertexShader:Nt.background.vertexShader,fragmentShader:Nt.background.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=c.backgroundIntensity,l.material.toneMapped=S.colorSpace!==ye,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(d!==S||f!==S.version||m!==i.toneMapping)&&(l.material.needsUpdate=!0,d=S,f=S.version,m=i.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function _(p,c){p.getRGB(Ii,Ta(i)),n.buffers.color.setClear(Ii.r,Ii.g,Ii.b,c,o)}return{getClearColor:function(){return a},setClearColor:function(p,c=1){a.set(p),h=c,_(a,h)},getClearAlpha:function(){return h},setClearAlpha:function(p){h=p,_(a,h)},render:x}}function Xu(i,e,t,n){const r=i.getParameter(i.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},h=p(null);let l=h,u=!1;function d(z,V,J,W,k){let ee=!1;if(o){const K=_(W,J,V);l!==K&&(l=K,m(l.object)),ee=c(z,W,J,k),ee&&E(z,W,J,k)}else{const K=V.wireframe===!0;(l.geometry!==W.id||l.program!==J.id||l.wireframe!==K)&&(l.geometry=W.id,l.program=J.id,l.wireframe=K,ee=!0)}k!==null&&t.update(k,i.ELEMENT_ARRAY_BUFFER),(ee||u)&&(u=!1,X(z,V,J,W),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function f(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function m(z){return n.isWebGL2?i.bindVertexArray(z):s.bindVertexArrayOES(z)}function x(z){return n.isWebGL2?i.deleteVertexArray(z):s.deleteVertexArrayOES(z)}function _(z,V,J){const W=J.wireframe===!0;let k=a[z.id];k===void 0&&(k={},a[z.id]=k);let ee=k[V.id];ee===void 0&&(ee={},k[V.id]=ee);let K=ee[W];return K===void 0&&(K=p(f()),ee[W]=K),K}function p(z){const V=[],J=[],W=[];for(let k=0;k<r;k++)V[k]=0,J[k]=0,W[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:J,attributeDivisors:W,object:z,attributes:{},index:null}}function c(z,V,J,W){const k=l.attributes,ee=V.attributes;let K=0;const _e=J.getAttributes();for(const te in _e)if(_e[te].location>=0){const q=k[te];let re=ee[te];if(re===void 0&&(te==="instanceMatrix"&&z.instanceMatrix&&(re=z.instanceMatrix),te==="instanceColor"&&z.instanceColor&&(re=z.instanceColor)),q===void 0||q.attribute!==re||re&&q.data!==re.data)return!0;K++}return l.attributesNum!==K||l.index!==W}function E(z,V,J,W){const k={},ee=V.attributes;let K=0;const _e=J.getAttributes();for(const te in _e)if(_e[te].location>=0){let q=ee[te];q===void 0&&(te==="instanceMatrix"&&z.instanceMatrix&&(q=z.instanceMatrix),te==="instanceColor"&&z.instanceColor&&(q=z.instanceColor));const re={};re.attribute=q,q&&q.data&&(re.data=q.data),k[te]=re,K++}l.attributes=k,l.attributesNum=K,l.index=W}function S(){const z=l.newAttributes;for(let V=0,J=z.length;V<J;V++)z[V]=0}function y(z){b(z,0)}function b(z,V){const J=l.newAttributes,W=l.enabledAttributes,k=l.attributeDivisors;J[z]=1,W[z]===0&&(i.enableVertexAttribArray(z),W[z]=1),k[z]!==V&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](z,V),k[z]=V)}function R(){const z=l.newAttributes,V=l.enabledAttributes;for(let J=0,W=V.length;J<W;J++)V[J]!==z[J]&&(i.disableVertexAttribArray(J),V[J]=0)}function P(z,V,J,W,k,ee){n.isWebGL2===!0&&(J===i.INT||J===i.UNSIGNED_INT)?i.vertexAttribIPointer(z,V,J,k,ee):i.vertexAttribPointer(z,V,J,W,k,ee)}function X(z,V,J,W){if(n.isWebGL2===!1&&(z.isInstancedMesh||W.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;S();const k=W.attributes,ee=J.getAttributes(),K=V.defaultAttributeValues;for(const _e in ee){const te=ee[_e];if(te.location>=0){let F=k[_e];if(F===void 0&&(_e==="instanceMatrix"&&z.instanceMatrix&&(F=z.instanceMatrix),_e==="instanceColor"&&z.instanceColor&&(F=z.instanceColor)),F!==void 0){const q=F.normalized,re=F.itemSize,ae=t.get(F);if(ae===void 0)continue;const C=ae.buffer,Te=ae.type,Se=ae.bytesPerElement;if(F.isInterleavedBufferAttribute){const ie=F.data,xe=ie.stride,Ne=F.offset;if(ie.isInstancedInterleavedBuffer){for(let fe=0;fe<te.locationSize;fe++)b(te.location+fe,ie.meshPerAttribute);z.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let fe=0;fe<te.locationSize;fe++)y(te.location+fe);i.bindBuffer(i.ARRAY_BUFFER,C);for(let fe=0;fe<te.locationSize;fe++)P(te.location+fe,re/te.locationSize,Te,q,xe*Se,(Ne+re/te.locationSize*fe)*Se)}else{if(F.isInstancedBufferAttribute){for(let ie=0;ie<te.locationSize;ie++)b(te.location+ie,F.meshPerAttribute);z.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=F.meshPerAttribute*F.count)}else for(let ie=0;ie<te.locationSize;ie++)y(te.location+ie);i.bindBuffer(i.ARRAY_BUFFER,C);for(let ie=0;ie<te.locationSize;ie++)P(te.location+ie,re/te.locationSize,Te,q,re*Se,re/te.locationSize*ie*Se)}}else if(K!==void 0){const q=K[_e];if(q!==void 0)switch(q.length){case 2:i.vertexAttrib2fv(te.location,q);break;case 3:i.vertexAttrib3fv(te.location,q);break;case 4:i.vertexAttrib4fv(te.location,q);break;default:i.vertexAttrib1fv(te.location,q)}}}}R()}function v(){Y();for(const z in a){const V=a[z];for(const J in V){const W=V[J];for(const k in W)x(W[k].object),delete W[k];delete V[J]}delete a[z]}}function A(z){if(a[z.id]===void 0)return;const V=a[z.id];for(const J in V){const W=V[J];for(const k in W)x(W[k].object),delete W[k];delete V[J]}delete a[z.id]}function j(z){for(const V in a){const J=a[V];if(J[z.id]===void 0)continue;const W=J[z.id];for(const k in W)x(W[k].object),delete W[k];delete J[z.id]}}function Y(){D(),u=!0,l!==h&&(l=h,m(l.object))}function D(){h.geometry=null,h.program=null,h.wireframe=!1}return{setup:d,reset:Y,resetDefaultState:D,dispose:v,releaseStatesOfGeometry:A,releaseStatesOfProgram:j,initAttributes:S,enableAttribute:y,disableUnusedAttributes:R}}function qu(i,e,t,n){const r=n.isWebGL2;let s;function o(l){s=l}function a(l,u){i.drawArrays(s,l,u),t.update(u,s,1)}function h(l,u,d){if(d===0)return;let f,m;if(r)f=i,m="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](s,l,u,d),t.update(u,s,d)}this.setMode=o,this.render=a,this.renderInstances=h}function Yu(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const h=s(a);h!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",h,"instead."),a=h);const l=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),x=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),p=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),c=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=f>0,y=o||e.has("OES_texture_float"),b=S&&y,R=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:x,maxAttributes:_,maxVertexUniforms:p,maxVaryings:c,maxFragmentUniforms:E,vertexTextures:S,floatFragmentTextures:y,floatVertexTextures:b,maxSamples:R}}function Ku(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new ln,a=new Pe,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const m=d.length!==0||f||n!==0||r;return r=f,n=d.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,m){const x=d.clippingPlanes,_=d.clipIntersection,p=d.clipShadows,c=i.get(d);if(!r||x===null||x.length===0||s&&!p)s?u(null):l();else{const E=s?0:n,S=E*4;let y=c.clippingState||null;h.value=y,y=u(x,f,S,m);for(let b=0;b!==S;++b)y[b]=t[b];c.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function l(){h.value!==t&&(h.value=t,h.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,f,m,x){const _=d!==null?d.length:0;let p=null;if(_!==0){if(p=h.value,x!==!0||p===null){const c=m+_*4,E=f.matrixWorldInverse;a.getNormalMatrix(E),(p===null||p.length<c)&&(p=new Float32Array(c));for(let S=0,y=m;S!==_;++S,y+=4)o.copy(d[S]).applyMatrix4(E,a),o.normal.toArray(p,y),p[y+3]=o.constant}h.value=p,h.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function ju(i){let e=new WeakMap;function t(o,a){return a===yr?o.mapping=Wn:a===br&&(o.mapping=Xn),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===yr||a===br)if(e.has(o)){const h=e.get(o).texture;return t(h,o.mapping)}else{const h=o.image;if(h&&h.height>0){const l=new hl(h.height/2);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const h=e.get(a);h!==void 0&&(e.delete(a),h.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Zu extends ya{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,h=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,h=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,h,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Bn=4,Is=[.125,.215,.35,.446,.526,.582],un=20,xr=new Zu,Ns=new Ve;let Mr=null;const cn=(1+Math.sqrt(5))/2,Fn=1/cn,Fs=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,cn,Fn),new I(0,cn,-Fn),new I(Fn,0,cn),new I(-Fn,0,cn),new I(cn,Fn,0),new I(-cn,Fn,0)];class Os{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Mr=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gs(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zs(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Mr),e.scissorTest=!1,Ni(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Wn||e.mapping===Xn?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Mr=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:pt,minFilter:pt,generateMipmaps:!1,type:li,format:Pt,colorSpace:Ot,depthBuffer:!1},r=Bs(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bs(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=$u(s)),this._blurMaterial=Ju(s,e,t)}return r}_compileMaterial(e){const t=new Ut(this._lodPlanes[0],e);this._renderer.compile(t,xr)}_sceneToCubeUV(e,t,n,r){const a=new Tt(90,1,t,n),h=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Ns),u.toneMapping=qt,u.autoClear=!1;const m=new Hi({name:"PMREM.Background",side:_t,depthWrite:!1,depthTest:!1}),x=new Ut(new fi,m);let _=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,_=!0):(m.color.copy(Ns),_=!0);for(let c=0;c<6;c++){const E=c%3;E===0?(a.up.set(0,h[c],0),a.lookAt(l[c],0,0)):E===1?(a.up.set(0,0,h[c]),a.lookAt(0,l[c],0)):(a.up.set(0,h[c],0),a.lookAt(0,0,l[c]));const S=this._cubeSize;Ni(r,E*S,c>2?S:0,S,S),u.setRenderTarget(r),_&&u.render(x,a),u.render(e,a)}x.geometry.dispose(),x.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Wn||e.mapping===Xn;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gs()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zs());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Ut(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const h=this._cubeSize;Ni(t,0,0,3*h,2*h),n.setRenderTarget(t),n.render(o,xr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Fs[(r-1)%Fs.length];this._blur(e,r-1,r,s,o)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const h=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new Ut(this._lodPlanes[r],l),f=l.uniforms,m=this._sizeLods[n]-1,x=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*un-1),_=s/x,p=isFinite(s)?1+Math.floor(u*_):un;p>un&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${un}`);const c=[];let E=0;for(let P=0;P<un;++P){const X=P/_,v=Math.exp(-X*X/2);c.push(v),P===0?E+=v:P<p&&(E+=2*v)}for(let P=0;P<c.length;P++)c[P]=c[P]/E;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=c,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:S}=this;f.dTheta.value=x,f.mipInt.value=S-n;const y=this._sizeLods[r],b=3*y*(r>S-Bn?r-S+Bn:0),R=4*(this._cubeSize-y);Ni(t,b,R,3*y,2*y),h.setRenderTarget(t),h.render(d,xr)}}function $u(i){const e=[],t=[],n=[];let r=i;const s=i-Bn+1+Is.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let h=1/a;o>i-Bn?h=Is[o-i+Bn-1]:o===0&&(h=0),n.push(h);const l=1/(a-2),u=-l,d=1+l,f=[u,u,d,u,d,d,u,u,d,d,u,d],m=6,x=6,_=3,p=2,c=1,E=new Float32Array(_*x*m),S=new Float32Array(p*x*m),y=new Float32Array(c*x*m);for(let R=0;R<m;R++){const P=R%3*2/3-1,X=R>2?0:-1,v=[P,X,0,P+2/3,X,0,P+2/3,X+1,0,P,X,0,P+2/3,X+1,0,P,X+1,0];E.set(v,_*x*R),S.set(f,p*x*R);const A=[R,R,R,R,R,R];y.set(A,c*x*R)}const b=new Mn;b.setAttribute("position",new Ft(E,_)),b.setAttribute("uv",new Ft(S,p)),b.setAttribute("faceIndex",new Ft(y,c)),e.push(b),r>Bn&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Bs(i,e,t){const n=new vn(i,e,t);return n.texture.mapping=Bi,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ni(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Ju(i,e,t){const n=new Float32Array(un),r=new I(0,1,0);return new xn({name:"SphericalGaussianBlur",defines:{n:un,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Nr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Qt,depthTest:!1,depthWrite:!1})}function zs(){return new xn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Nr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Qt,depthTest:!1,depthWrite:!1})}function Gs(){return new xn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Nr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qt,depthTest:!1,depthWrite:!1})}function Nr(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Qu(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const h=a.mapping,l=h===yr||h===br,u=h===Wn||h===Xn;if(l||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return t===null&&(t=new Os(i)),d=l?t.fromEquirectangular(a,d):t.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(l&&d&&d.height>0||u&&d&&r(d)){t===null&&(t=new Os(i));const f=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function r(a){let h=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&h++;return h===l}function s(a){const h=a.target;h.removeEventListener("dispose",s);const l=e.get(h);l!==void 0&&(e.delete(h),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function eh(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function th(i,e,t,n){const r={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const x in f.attributes)e.remove(f.attributes[x]);f.removeEventListener("dispose",o),delete r[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function h(d){const f=d.attributes;for(const x in f)e.update(f[x],i.ARRAY_BUFFER);const m=d.morphAttributes;for(const x in m){const _=m[x];for(let p=0,c=_.length;p<c;p++)e.update(_[p],i.ARRAY_BUFFER)}}function l(d){const f=[],m=d.index,x=d.attributes.position;let _=0;if(m!==null){const E=m.array;_=m.version;for(let S=0,y=E.length;S<y;S+=3){const b=E[S+0],R=E[S+1],P=E[S+2];f.push(b,R,R,P,P,b)}}else{const E=x.array;_=x.version;for(let S=0,y=E.length/3-1;S<y;S+=3){const b=S+0,R=S+1,P=S+2;f.push(b,R,R,P,P,b)}}const p=new(ma(f)?Ea:Sa)(f,1);p.version=_;const c=s.get(d);c&&e.remove(c),s.set(d,p)}function u(d){const f=s.get(d);if(f){const m=d.index;m!==null&&f.version<m.version&&l(d)}else l(d);return s.get(d)}return{get:a,update:h,getWireframeAttribute:u}}function nh(i,e,t,n){const r=n.isWebGL2;let s;function o(f){s=f}let a,h;function l(f){a=f.type,h=f.bytesPerElement}function u(f,m){i.drawElements(s,m,a,f*h),t.update(m,s,1)}function d(f,m,x){if(x===0)return;let _,p;if(r)_=i,p="drawElementsInstanced";else if(_=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[p](s,m,a,f*h,x),t.update(m,s,x)}this.setMode=o,this.setIndex=l,this.render=u,this.renderInstances=d}function ih(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function rh(i,e){return i[0]-e[0]}function sh(i,e){return Math.abs(e[1])-Math.abs(i[1])}function ah(i,e,t){const n={},r=new Float32Array(8),s=new WeakMap,o=new it,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function h(l,u,d){const f=l.morphTargetInfluences;if(e.isWebGL2===!0){const x=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=x!==void 0?x.length:0;let p=s.get(u);if(p===void 0||p.count!==_){let V=function(){D.dispose(),s.delete(u),u.removeEventListener("dispose",V)};var m=V;p!==void 0&&p.texture.dispose();const S=u.morphAttributes.position!==void 0,y=u.morphAttributes.normal!==void 0,b=u.morphAttributes.color!==void 0,R=u.morphAttributes.position||[],P=u.morphAttributes.normal||[],X=u.morphAttributes.color||[];let v=0;S===!0&&(v=1),y===!0&&(v=2),b===!0&&(v=3);let A=u.attributes.position.count*v,j=1;A>e.maxTextureSize&&(j=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const Y=new Float32Array(A*j*4*_),D=new va(Y,A,j,_);D.type=dn,D.needsUpdate=!0;const z=v*4;for(let J=0;J<_;J++){const W=R[J],k=P[J],ee=X[J],K=A*j*4*J;for(let _e=0;_e<W.count;_e++){const te=_e*z;S===!0&&(o.fromBufferAttribute(W,_e),Y[K+te+0]=o.x,Y[K+te+1]=o.y,Y[K+te+2]=o.z,Y[K+te+3]=0),y===!0&&(o.fromBufferAttribute(k,_e),Y[K+te+4]=o.x,Y[K+te+5]=o.y,Y[K+te+6]=o.z,Y[K+te+7]=0),b===!0&&(o.fromBufferAttribute(ee,_e),Y[K+te+8]=o.x,Y[K+te+9]=o.y,Y[K+te+10]=o.z,Y[K+te+11]=ee.itemSize===4?o.w:1)}}p={count:_,texture:D,size:new He(A,j)},s.set(u,p),u.addEventListener("dispose",V)}let c=0;for(let S=0;S<f.length;S++)c+=f[S];const E=u.morphTargetsRelative?1:1-c;d.getUniforms().setValue(i,"morphTargetBaseInfluence",E),d.getUniforms().setValue(i,"morphTargetInfluences",f),d.getUniforms().setValue(i,"morphTargetsTexture",p.texture,t),d.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}else{const x=f===void 0?0:f.length;let _=n[u.id];if(_===void 0||_.length!==x){_=[];for(let y=0;y<x;y++)_[y]=[y,0];n[u.id]=_}for(let y=0;y<x;y++){const b=_[y];b[0]=y,b[1]=f[y]}_.sort(sh);for(let y=0;y<8;y++)y<x&&_[y][1]?(a[y][0]=_[y][0],a[y][1]=_[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(rh);const p=u.morphAttributes.position,c=u.morphAttributes.normal;let E=0;for(let y=0;y<8;y++){const b=a[y],R=b[0],P=b[1];R!==Number.MAX_SAFE_INTEGER&&P?(p&&u.getAttribute("morphTarget"+y)!==p[R]&&u.setAttribute("morphTarget"+y,p[R]),c&&u.getAttribute("morphNormal"+y)!==c[R]&&u.setAttribute("morphNormal"+y,c[R]),r[y]=P,E+=P):(p&&u.hasAttribute("morphTarget"+y)===!0&&u.deleteAttribute("morphTarget"+y),c&&u.hasAttribute("morphNormal"+y)===!0&&u.deleteAttribute("morphNormal"+y),r[y]=0)}const S=u.morphTargetsRelative?1:1-E;d.getUniforms().setValue(i,"morphTargetBaseInfluence",S),d.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:h}}function oh(i,e,t,n){let r=new WeakMap;function s(h){const l=n.render.frame,u=h.geometry,d=e.get(h,u);return r.get(d)!==l&&(e.update(d),r.set(d,l)),h.isInstancedMesh&&(h.hasEventListener("dispose",a)===!1&&h.addEventListener("dispose",a),t.update(h.instanceMatrix,i.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,i.ARRAY_BUFFER)),d}function o(){r=new WeakMap}function a(h){const l=h.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}const Ra=new ht,Ca=new va,La=new jo,Pa=new ba,Hs=[],Vs=[],ks=new Float32Array(16),Ws=new Float32Array(9),Xs=new Float32Array(4);function Zn(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Hs[r];if(s===void 0&&(s=new Float32Array(r),Hs[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function Ze(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function $e(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Vi(i,e){let t=Vs[e];t===void 0&&(t=new Int32Array(e),Vs[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function lh(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function ch(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ze(t,e))return;i.uniform2fv(this.addr,e),$e(t,e)}}function uh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ze(t,e))return;i.uniform3fv(this.addr,e),$e(t,e)}}function hh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ze(t,e))return;i.uniform4fv(this.addr,e),$e(t,e)}}function dh(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ze(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),$e(t,e)}else{if(Ze(t,n))return;Xs.set(n),i.uniformMatrix2fv(this.addr,!1,Xs),$e(t,n)}}function fh(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ze(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),$e(t,e)}else{if(Ze(t,n))return;Ws.set(n),i.uniformMatrix3fv(this.addr,!1,Ws),$e(t,n)}}function ph(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ze(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),$e(t,e)}else{if(Ze(t,n))return;ks.set(n),i.uniformMatrix4fv(this.addr,!1,ks),$e(t,n)}}function mh(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function _h(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ze(t,e))return;i.uniform2iv(this.addr,e),$e(t,e)}}function gh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ze(t,e))return;i.uniform3iv(this.addr,e),$e(t,e)}}function vh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ze(t,e))return;i.uniform4iv(this.addr,e),$e(t,e)}}function xh(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Mh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ze(t,e))return;i.uniform2uiv(this.addr,e),$e(t,e)}}function Sh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ze(t,e))return;i.uniform3uiv(this.addr,e),$e(t,e)}}function Eh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ze(t,e))return;i.uniform4uiv(this.addr,e),$e(t,e)}}function Th(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2D(e||Ra,r)}function yh(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||La,r)}function bh(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Pa,r)}function Ah(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Ca,r)}function wh(i){switch(i){case 5126:return lh;case 35664:return ch;case 35665:return uh;case 35666:return hh;case 35674:return dh;case 35675:return fh;case 35676:return ph;case 5124:case 35670:return mh;case 35667:case 35671:return _h;case 35668:case 35672:return gh;case 35669:case 35673:return vh;case 5125:return xh;case 36294:return Mh;case 36295:return Sh;case 36296:return Eh;case 35678:case 36198:case 36298:case 36306:case 35682:return Th;case 35679:case 36299:case 36307:return yh;case 35680:case 36300:case 36308:case 36293:return bh;case 36289:case 36303:case 36311:case 36292:return Ah}}function Rh(i,e){i.uniform1fv(this.addr,e)}function Ch(i,e){const t=Zn(e,this.size,2);i.uniform2fv(this.addr,t)}function Lh(i,e){const t=Zn(e,this.size,3);i.uniform3fv(this.addr,t)}function Ph(i,e){const t=Zn(e,this.size,4);i.uniform4fv(this.addr,t)}function Uh(i,e){const t=Zn(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Dh(i,e){const t=Zn(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Ih(i,e){const t=Zn(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Nh(i,e){i.uniform1iv(this.addr,e)}function Fh(i,e){i.uniform2iv(this.addr,e)}function Oh(i,e){i.uniform3iv(this.addr,e)}function Bh(i,e){i.uniform4iv(this.addr,e)}function zh(i,e){i.uniform1uiv(this.addr,e)}function Gh(i,e){i.uniform2uiv(this.addr,e)}function Hh(i,e){i.uniform3uiv(this.addr,e)}function Vh(i,e){i.uniform4uiv(this.addr,e)}function kh(i,e,t){const n=this.cache,r=e.length,s=Vi(t,r);Ze(n,s)||(i.uniform1iv(this.addr,s),$e(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Ra,s[o])}function Wh(i,e,t){const n=this.cache,r=e.length,s=Vi(t,r);Ze(n,s)||(i.uniform1iv(this.addr,s),$e(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||La,s[o])}function Xh(i,e,t){const n=this.cache,r=e.length,s=Vi(t,r);Ze(n,s)||(i.uniform1iv(this.addr,s),$e(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Pa,s[o])}function qh(i,e,t){const n=this.cache,r=e.length,s=Vi(t,r);Ze(n,s)||(i.uniform1iv(this.addr,s),$e(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Ca,s[o])}function Yh(i){switch(i){case 5126:return Rh;case 35664:return Ch;case 35665:return Lh;case 35666:return Ph;case 35674:return Uh;case 35675:return Dh;case 35676:return Ih;case 5124:case 35670:return Nh;case 35667:case 35671:return Fh;case 35668:case 35672:return Oh;case 35669:case 35673:return Bh;case 5125:return zh;case 36294:return Gh;case 36295:return Hh;case 36296:return Vh;case 35678:case 36198:case 36298:case 36306:case 35682:return kh;case 35679:case 36299:case 36307:return Wh;case 35680:case 36300:case 36308:case 36293:return Xh;case 36289:case 36303:case 36311:case 36292:return qh}}class Kh{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=wh(t.type)}}class jh{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Yh(t.type)}}class Zh{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const Sr=/(\w+)(\])?(\[|\.)?/g;function qs(i,e){i.seq.push(e),i.map[e.id]=e}function $h(i,e,t){const n=i.name,r=n.length;for(Sr.lastIndex=0;;){const s=Sr.exec(n),o=Sr.lastIndex;let a=s[1];const h=s[2]==="]",l=s[3];if(h&&(a=a|0),l===void 0||l==="["&&o+2===r){qs(t,l===void 0?new Kh(a,i,e):new jh(a,i,e));break}else{let d=t.map[a];d===void 0&&(d=new Zh(a),qs(t,d)),t=d}}}class Oi{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);$h(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],h=n[a.id];h.needsUpdate!==!1&&a.setValue(e,h.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function Ys(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}let Jh=0;function Qh(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function ed(i){switch(i){case Ot:return["Linear","( value )"];case ye:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),["Linear","( value )"]}}function Ks(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Qh(i.getShaderSource(e),o)}else return r}function td(i,e){const t=ed(e);return"vec4 "+i+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function nd(i,e){let t;switch(e){case po:t="Linear";break;case mo:t="Reinhard";break;case _o:t="OptimizedCineon";break;case go:t="ACESFilmic";break;case vo:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function id(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ni).join(`
`)}function rd(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function sd(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function ni(i){return i!==""}function js(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Zs(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ad=/^[ \t]*#include +<([\w\d./]+)>/gm;function Lr(i){return i.replace(ad,od)}function od(i,e){const t=Ae[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Lr(t)}const ld=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $s(i){return i.replace(ld,cd)}function cd(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Js(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function ud(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===oa?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Xa?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Wt&&(e="SHADOWMAP_TYPE_VSM"),e}function hd(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Wn:case Xn:e="ENVMAP_TYPE_CUBE";break;case Bi:e="ENVMAP_TYPE_CUBE_UV";break}return e}function dd(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Xn:e="ENVMAP_MODE_REFRACTION";break}return e}function fd(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ua:e="ENVMAP_BLENDING_MULTIPLY";break;case ho:e="ENVMAP_BLENDING_MIX";break;case fo:e="ENVMAP_BLENDING_ADD";break}return e}function pd(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function md(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const h=ud(t),l=hd(t),u=dd(t),d=fd(t),f=pd(t),m=t.isWebGL2?"":id(t),x=rd(s),_=r.createProgram();let p,c,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=[x].filter(ni).join(`
`),p.length>0&&(p+=`
`),c=[m,x].filter(ni).join(`
`),c.length>0&&(c+=`
`)):(p=[Js(t),"#define SHADER_NAME "+t.shaderName,x,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ni).join(`
`),c=[m,Js(t),"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==qt?"#define TONE_MAPPING":"",t.toneMapping!==qt?Ae.tonemapping_pars_fragment:"",t.toneMapping!==qt?nd("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ae.encodings_pars_fragment,td("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ni).join(`
`)),o=Lr(o),o=js(o,t),o=Zs(o,t),a=Lr(a),a=js(a,t),a=Zs(a,t),o=$s(o),a=$s(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,c=["#define varying in",t.glslVersion===gs?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===gs?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+c);const S=E+p+o,y=E+c+a,b=Ys(r,r.VERTEX_SHADER,S),R=Ys(r,r.FRAGMENT_SHADER,y);if(r.attachShader(_,b),r.attachShader(_,R),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_),i.debug.checkShaderErrors){const v=r.getProgramInfoLog(_).trim(),A=r.getShaderInfoLog(b).trim(),j=r.getShaderInfoLog(R).trim();let Y=!0,D=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(Y=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,b,R);else{const z=Ks(r,b,"vertex"),V=Ks(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Program Info Log: `+v+`
`+z+`
`+V)}else v!==""?console.warn("THREE.WebGLProgram: Program Info Log:",v):(A===""||j==="")&&(D=!1);D&&(this.diagnostics={runnable:Y,programLog:v,vertexShader:{log:A,prefix:p},fragmentShader:{log:j,prefix:c}})}r.deleteShader(b),r.deleteShader(R);let P;this.getUniforms=function(){return P===void 0&&(P=new Oi(r,_)),P};let X;return this.getAttributes=function(){return X===void 0&&(X=sd(r,_)),X},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.name=t.shaderName,this.id=Jh++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=b,this.fragmentShader=R,this}let _d=0;class gd{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new vd(e),t.set(e,n)),n}}class vd{constructor(e){this.id=_d++,this.code=e,this.usedTimes=0}}function xd(i,e,t,n,r,s,o){const a=new Ir,h=new gd,l=[],u=r.isWebGL2,d=r.logarithmicDepthBuffer,f=r.vertexTextures;let m=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return v===1?"uv1":v===2?"uv2":v===3?"uv3":"uv"}function p(v,A,j,Y,D){const z=Y.fog,V=D.geometry,J=v.isMeshStandardMaterial?Y.environment:null,W=(v.isMeshStandardMaterial?t:e).get(v.envMap||J),k=W&&W.mapping===Bi?W.image.height:null,ee=x[v.type];v.precision!==null&&(m=r.getMaxPrecision(v.precision),m!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",m,"instead."));const K=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,_e=K!==void 0?K.length:0;let te=0;V.morphAttributes.position!==void 0&&(te=1),V.morphAttributes.normal!==void 0&&(te=2),V.morphAttributes.color!==void 0&&(te=3);let F,q,re,ae;if(ee){const ze=Nt[ee];F=ze.vertexShader,q=ze.fragmentShader}else F=v.vertexShader,q=v.fragmentShader,h.update(v),re=h.getVertexShaderID(v),ae=h.getFragmentShaderID(v);const C=i.getRenderTarget(),Te=D.isInstancedMesh===!0,Se=!!v.map,ie=!!v.matcap,xe=!!W,Ne=!!v.aoMap,fe=!!v.lightMap,Ce=!!v.bumpMap,Je=!!v.normalMap,nt=!!v.displacementMap,Qe=!!v.emissiveMap,je=!!v.metalnessMap,Fe=!!v.roughnessMap,ke=v.clearcoat>0,ft=v.iridescence>0,T=v.sheen>0,g=v.transmission>0,N=ke&&!!v.clearcoatMap,$=ke&&!!v.clearcoatNormalMap,Q=ke&&!!v.clearcoatRoughnessMap,se=ft&&!!v.iridescenceMap,Me=ft&&!!v.iridescenceThicknessMap,ce=T&&!!v.sheenColorMap,G=T&&!!v.sheenRoughnessMap,he=!!v.specularMap,pe=!!v.specularColorMap,ge=!!v.specularIntensityMap,le=g&&!!v.transmissionMap,de=g&&!!v.thicknessMap,Ue=!!v.gradientMap,Oe=!!v.alphaMap,We=v.alphaTest>0,w=!!v.extensions,O=!!V.attributes.uv1,Z=!!V.attributes.uv2,oe=!!V.attributes.uv3;return{isWebGL2:u,shaderID:ee,shaderName:v.type,vertexShader:F,fragmentShader:q,defines:v.defines,customVertexShaderID:re,customFragmentShaderID:ae,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:m,instancing:Te,instancingColor:Te&&D.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:C===null?i.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Ot,map:Se,matcap:ie,envMap:xe,envMapMode:xe&&W.mapping,envMapCubeUVHeight:k,aoMap:Ne,lightMap:fe,bumpMap:Ce,normalMap:Je,displacementMap:f&&nt,emissiveMap:Qe,normalMapObjectSpace:Je&&v.normalMapType===Bo,normalMapTangentSpace:Je&&v.normalMapType===Oo,metalnessMap:je,roughnessMap:Fe,clearcoat:ke,clearcoatMap:N,clearcoatNormalMap:$,clearcoatRoughnessMap:Q,iridescence:ft,iridescenceMap:se,iridescenceThicknessMap:Me,sheen:T,sheenColorMap:ce,sheenRoughnessMap:G,specularMap:he,specularColorMap:pe,specularIntensityMap:ge,transmission:g,transmissionMap:le,thicknessMap:de,gradientMap:Ue,opaque:v.transparent===!1&&v.blending===Hn,alphaMap:Oe,alphaTest:We,combine:v.combine,mapUv:Se&&_(v.map.channel),aoMapUv:Ne&&_(v.aoMap.channel),lightMapUv:fe&&_(v.lightMap.channel),bumpMapUv:Ce&&_(v.bumpMap.channel),normalMapUv:Je&&_(v.normalMap.channel),displacementMapUv:nt&&_(v.displacementMap.channel),emissiveMapUv:Qe&&_(v.emissiveMap.channel),metalnessMapUv:je&&_(v.metalnessMap.channel),roughnessMapUv:Fe&&_(v.roughnessMap.channel),clearcoatMapUv:N&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:$&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:se&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:Me&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:ce&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:G&&_(v.sheenRoughnessMap.channel),specularMapUv:he&&_(v.specularMap.channel),specularColorMapUv:pe&&_(v.specularColorMap.channel),specularIntensityMapUv:ge&&_(v.specularIntensityMap.channel),transmissionMapUv:le&&_(v.transmissionMap.channel),thicknessMapUv:de&&_(v.thicknessMap.channel),alphaMapUv:Oe&&_(v.alphaMap.channel),vertexTangents:Je&&!!V.attributes.tangent,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,vertexUv1s:O,vertexUv2s:Z,vertexUv3s:oe,pointsUvs:D.isPoints===!0&&!!V.attributes.uv&&(Se||Oe),fog:!!z,useFog:v.fog===!0,fogExp2:z&&z.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:D.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:_e,morphTextureStride:te,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&j.length>0,shadowMapType:i.shadowMap.type,toneMapping:v.toneMapped?i.toneMapping:qt,useLegacyLights:i.useLegacyLights,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Xt,flipSided:v.side===_t,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:w&&v.extensions.derivatives===!0,extensionFragDepth:w&&v.extensions.fragDepth===!0,extensionDrawBuffers:w&&v.extensions.drawBuffers===!0,extensionShaderTextureLOD:w&&v.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:v.customProgramCacheKey()}}function c(v){const A=[];if(v.shaderID?A.push(v.shaderID):(A.push(v.customVertexShaderID),A.push(v.customFragmentShaderID)),v.defines!==void 0)for(const j in v.defines)A.push(j),A.push(v.defines[j]);return v.isRawShaderMaterial===!1&&(E(A,v),S(A,v),A.push(i.outputColorSpace)),A.push(v.customProgramCacheKey),A.join()}function E(v,A){v.push(A.precision),v.push(A.outputColorSpace),v.push(A.envMapMode),v.push(A.envMapCubeUVHeight),v.push(A.mapUv),v.push(A.alphaMapUv),v.push(A.lightMapUv),v.push(A.aoMapUv),v.push(A.bumpMapUv),v.push(A.normalMapUv),v.push(A.displacementMapUv),v.push(A.emissiveMapUv),v.push(A.metalnessMapUv),v.push(A.roughnessMapUv),v.push(A.clearcoatMapUv),v.push(A.clearcoatNormalMapUv),v.push(A.clearcoatRoughnessMapUv),v.push(A.iridescenceMapUv),v.push(A.iridescenceThicknessMapUv),v.push(A.sheenColorMapUv),v.push(A.sheenRoughnessMapUv),v.push(A.specularMapUv),v.push(A.specularColorMapUv),v.push(A.specularIntensityMapUv),v.push(A.transmissionMapUv),v.push(A.thicknessMapUv),v.push(A.combine),v.push(A.fogExp2),v.push(A.sizeAttenuation),v.push(A.morphTargetsCount),v.push(A.morphAttributeCount),v.push(A.numDirLights),v.push(A.numPointLights),v.push(A.numSpotLights),v.push(A.numSpotLightMaps),v.push(A.numHemiLights),v.push(A.numRectAreaLights),v.push(A.numDirLightShadows),v.push(A.numPointLightShadows),v.push(A.numSpotLightShadows),v.push(A.numSpotLightShadowsWithMaps),v.push(A.shadowMapType),v.push(A.toneMapping),v.push(A.numClippingPlanes),v.push(A.numClipIntersection),v.push(A.depthPacking)}function S(v,A){a.disableAll(),A.isWebGL2&&a.enable(0),A.supportsVertexTextures&&a.enable(1),A.instancing&&a.enable(2),A.instancingColor&&a.enable(3),A.matcap&&a.enable(4),A.envMap&&a.enable(5),A.normalMapObjectSpace&&a.enable(6),A.normalMapTangentSpace&&a.enable(7),A.clearcoat&&a.enable(8),A.iridescence&&a.enable(9),A.alphaTest&&a.enable(10),A.vertexColors&&a.enable(11),A.vertexAlphas&&a.enable(12),A.vertexUv1s&&a.enable(13),A.vertexUv2s&&a.enable(14),A.vertexUv3s&&a.enable(15),A.vertexTangents&&a.enable(16),v.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.skinning&&a.enable(4),A.morphTargets&&a.enable(5),A.morphNormals&&a.enable(6),A.morphColors&&a.enable(7),A.premultipliedAlpha&&a.enable(8),A.shadowMapEnabled&&a.enable(9),A.useLegacyLights&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),v.push(a.mask)}function y(v){const A=x[v.type];let j;if(A){const Y=Nt[A];j=ol.clone(Y.uniforms)}else j=v.uniforms;return j}function b(v,A){let j;for(let Y=0,D=l.length;Y<D;Y++){const z=l[Y];if(z.cacheKey===A){j=z,++j.usedTimes;break}}return j===void 0&&(j=new md(i,A,v,s),l.push(j)),j}function R(v){if(--v.usedTimes===0){const A=l.indexOf(v);l[A]=l[l.length-1],l.pop(),v.destroy()}}function P(v){h.remove(v)}function X(){h.dispose()}return{getParameters:p,getProgramCacheKey:c,getUniforms:y,acquireProgram:b,releaseProgram:R,releaseShaderCache:P,programs:l,dispose:X}}function Md(){let i=new WeakMap;function e(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function t(s){i.delete(s)}function n(s,o,a){i.get(s)[o]=a}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function Sd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Qs(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function ea(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(d,f,m,x,_,p){let c=i[e];return c===void 0?(c={id:d.id,object:d,geometry:f,material:m,groupOrder:x,renderOrder:d.renderOrder,z:_,group:p},i[e]=c):(c.id=d.id,c.object=d,c.geometry=f,c.material=m,c.groupOrder=x,c.renderOrder=d.renderOrder,c.z=_,c.group=p),e++,c}function a(d,f,m,x,_,p){const c=o(d,f,m,x,_,p);m.transmission>0?n.push(c):m.transparent===!0?r.push(c):t.push(c)}function h(d,f,m,x,_,p){const c=o(d,f,m,x,_,p);m.transmission>0?n.unshift(c):m.transparent===!0?r.unshift(c):t.unshift(c)}function l(d,f){t.length>1&&t.sort(d||Sd),n.length>1&&n.sort(f||Qs),r.length>1&&r.sort(f||Qs)}function u(){for(let d=e,f=i.length;d<f;d++){const m=i[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:h,finish:u,sort:l}}function Ed(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new ea,i.set(n,[o])):r>=s.length?(o=new ea,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Td(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new Ve};break;case"SpotLight":t={position:new I,direction:new I,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":t={color:new Ve,position:new I,halfWidth:new I,halfHeight:new I};break}return i[e.id]=t,t}}}function yd(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let bd=0;function Ad(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function wd(i,e){const t=new Td,n=yd(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)r.probe.push(new I);const s=new I,o=new Ke,a=new Ke;function h(u,d){let f=0,m=0,x=0;for(let j=0;j<9;j++)r.probe[j].set(0,0,0);let _=0,p=0,c=0,E=0,S=0,y=0,b=0,R=0,P=0,X=0;u.sort(Ad);const v=d===!0?Math.PI:1;for(let j=0,Y=u.length;j<Y;j++){const D=u[j],z=D.color,V=D.intensity,J=D.distance,W=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)f+=z.r*V*v,m+=z.g*V*v,x+=z.b*V*v;else if(D.isLightProbe)for(let k=0;k<9;k++)r.probe[k].addScaledVector(D.sh.coefficients[k],V);else if(D.isDirectionalLight){const k=t.get(D);if(k.color.copy(D.color).multiplyScalar(D.intensity*v),D.castShadow){const ee=D.shadow,K=n.get(D);K.shadowBias=ee.bias,K.shadowNormalBias=ee.normalBias,K.shadowRadius=ee.radius,K.shadowMapSize=ee.mapSize,r.directionalShadow[_]=K,r.directionalShadowMap[_]=W,r.directionalShadowMatrix[_]=D.shadow.matrix,y++}r.directional[_]=k,_++}else if(D.isSpotLight){const k=t.get(D);k.position.setFromMatrixPosition(D.matrixWorld),k.color.copy(z).multiplyScalar(V*v),k.distance=J,k.coneCos=Math.cos(D.angle),k.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),k.decay=D.decay,r.spot[c]=k;const ee=D.shadow;if(D.map&&(r.spotLightMap[P]=D.map,P++,ee.updateMatrices(D),D.castShadow&&X++),r.spotLightMatrix[c]=ee.matrix,D.castShadow){const K=n.get(D);K.shadowBias=ee.bias,K.shadowNormalBias=ee.normalBias,K.shadowRadius=ee.radius,K.shadowMapSize=ee.mapSize,r.spotShadow[c]=K,r.spotShadowMap[c]=W,R++}c++}else if(D.isRectAreaLight){const k=t.get(D);k.color.copy(z).multiplyScalar(V),k.halfWidth.set(D.width*.5,0,0),k.halfHeight.set(0,D.height*.5,0),r.rectArea[E]=k,E++}else if(D.isPointLight){const k=t.get(D);if(k.color.copy(D.color).multiplyScalar(D.intensity*v),k.distance=D.distance,k.decay=D.decay,D.castShadow){const ee=D.shadow,K=n.get(D);K.shadowBias=ee.bias,K.shadowNormalBias=ee.normalBias,K.shadowRadius=ee.radius,K.shadowMapSize=ee.mapSize,K.shadowCameraNear=ee.camera.near,K.shadowCameraFar=ee.camera.far,r.pointShadow[p]=K,r.pointShadowMap[p]=W,r.pointShadowMatrix[p]=D.shadow.matrix,b++}r.point[p]=k,p++}else if(D.isHemisphereLight){const k=t.get(D);k.skyColor.copy(D.color).multiplyScalar(V*v),k.groundColor.copy(D.groundColor).multiplyScalar(V*v),r.hemi[S]=k,S++}}E>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ne.LTC_FLOAT_1,r.rectAreaLTC2=ne.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ne.LTC_HALF_1,r.rectAreaLTC2=ne.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=m,r.ambient[2]=x;const A=r.hash;(A.directionalLength!==_||A.pointLength!==p||A.spotLength!==c||A.rectAreaLength!==E||A.hemiLength!==S||A.numDirectionalShadows!==y||A.numPointShadows!==b||A.numSpotShadows!==R||A.numSpotMaps!==P)&&(r.directional.length=_,r.spot.length=c,r.rectArea.length=E,r.point.length=p,r.hemi.length=S,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=b,r.pointShadowMap.length=b,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=b,r.spotLightMatrix.length=R+P-X,r.spotLightMap.length=P,r.numSpotLightShadowsWithMaps=X,A.directionalLength=_,A.pointLength=p,A.spotLength=c,A.rectAreaLength=E,A.hemiLength=S,A.numDirectionalShadows=y,A.numPointShadows=b,A.numSpotShadows=R,A.numSpotMaps=P,r.version=bd++)}function l(u,d){let f=0,m=0,x=0,_=0,p=0;const c=d.matrixWorldInverse;for(let E=0,S=u.length;E<S;E++){const y=u[E];if(y.isDirectionalLight){const b=r.directional[f];b.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(c),f++}else if(y.isSpotLight){const b=r.spot[x];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(c),b.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(c),x++}else if(y.isRectAreaLight){const b=r.rectArea[_];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(c),a.identity(),o.copy(y.matrixWorld),o.premultiply(c),a.extractRotation(o),b.halfWidth.set(y.width*.5,0,0),b.halfHeight.set(0,y.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),_++}else if(y.isPointLight){const b=r.point[m];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(c),m++}else if(y.isHemisphereLight){const b=r.hemi[p];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(c),p++}}}return{setup:h,setupView:l,state:r}}function ta(i,e){const t=new wd(i,e),n=[],r=[];function s(){n.length=0,r.length=0}function o(d){n.push(d)}function a(d){r.push(d)}function h(d){t.setup(n,d)}function l(d){t.setupView(n,d)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:h,setupLightsView:l,pushLight:o,pushShadow:a}}function Rd(i,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let h;return a===void 0?(h=new ta(i,e),t.set(s,[h])):o>=a.length?(h=new ta(i,e),a.push(h)):h=a[o],h}function r(){t=new WeakMap}return{get:n,dispose:r}}class Cd extends Gi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=No,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ld extends Gi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Pd=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ud=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Dd(i,e,t){let n=new Aa;const r=new He,s=new He,o=new it,a=new Cd({depthPacking:Fo}),h=new Ld,l={},u=t.maxTextureSize,d={[en]:_t,[_t]:en,[Xt]:Xt},f=new xn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new He},radius:{value:4}},vertexShader:Pd,fragmentShader:Ud}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const x=new Mn;x.setAttribute("position",new Ft(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ut(x,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=oa;let c=this.type;this.render=function(b,R,P){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;const X=i.getRenderTarget(),v=i.getActiveCubeFace(),A=i.getActiveMipmapLevel(),j=i.state;j.setBlending(Qt),j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const Y=c!==Wt&&this.type===Wt,D=c===Wt&&this.type!==Wt;for(let z=0,V=b.length;z<V;z++){const J=b[z],W=J.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;r.copy(W.mapSize);const k=W.getFrameExtents();if(r.multiply(k),s.copy(W.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/k.x),r.x=s.x*k.x,W.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/k.y),r.y=s.y*k.y,W.mapSize.y=s.y)),W.map===null||Y===!0||D===!0){const K=this.type!==Wt?{minFilter:ut,magFilter:ut}:{};W.map!==null&&W.map.dispose(),W.map=new vn(r.x,r.y,K),W.map.texture.name=J.name+".shadowMap",W.camera.updateProjectionMatrix()}i.setRenderTarget(W.map),i.clear();const ee=W.getViewportCount();for(let K=0;K<ee;K++){const _e=W.getViewport(K);o.set(s.x*_e.x,s.y*_e.y,s.x*_e.z,s.y*_e.w),j.viewport(o),W.updateMatrices(J,K),n=W.getFrustum(),y(R,P,W.camera,J,this.type)}W.isPointLightShadow!==!0&&this.type===Wt&&E(W,P),W.needsUpdate=!1}c=this.type,p.needsUpdate=!1,i.setRenderTarget(X,v,A)};function E(b,R){const P=e.update(_);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,m.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new vn(r.x,r.y)),f.uniforms.shadow_pass.value=b.map.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(R,null,P,f,_,null),m.uniforms.shadow_pass.value=b.mapPass.texture,m.uniforms.resolution.value=b.mapSize,m.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(R,null,P,m,_,null)}function S(b,R,P,X){let v=null;const A=P.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(A!==void 0)v=A;else if(v=P.isPointLight===!0?h:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const j=v.uuid,Y=R.uuid;let D=l[j];D===void 0&&(D={},l[j]=D);let z=D[Y];z===void 0&&(z=v.clone(),D[Y]=z),v=z}if(v.visible=R.visible,v.wireframe=R.wireframe,X===Wt?v.side=R.shadowSide!==null?R.shadowSide:R.side:v.side=R.shadowSide!==null?R.shadowSide:d[R.side],v.alphaMap=R.alphaMap,v.alphaTest=R.alphaTest,v.map=R.map,v.clipShadows=R.clipShadows,v.clippingPlanes=R.clippingPlanes,v.clipIntersection=R.clipIntersection,v.displacementMap=R.displacementMap,v.displacementScale=R.displacementScale,v.displacementBias=R.displacementBias,v.wireframeLinewidth=R.wireframeLinewidth,v.linewidth=R.linewidth,P.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const j=i.properties.get(v);j.light=P}return v}function y(b,R,P,X,v){if(b.visible===!1)return;if(b.layers.test(R.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&v===Wt)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,b.matrixWorld);const Y=e.update(b),D=b.material;if(Array.isArray(D)){const z=Y.groups;for(let V=0,J=z.length;V<J;V++){const W=z[V],k=D[W.materialIndex];if(k&&k.visible){const ee=S(b,k,X,v);i.renderBufferDirect(P,null,Y,ee,b,W)}}}else if(D.visible){const z=S(b,D,X,v);i.renderBufferDirect(P,null,Y,z,b,null)}}const j=b.children;for(let Y=0,D=j.length;Y<D;Y++)y(j[Y],R,P,X,v)}}function Id(i,e,t){const n=t.isWebGL2;function r(){let w=!1;const O=new it;let Z=null;const oe=new it(0,0,0,0);return{setMask:function(ue){Z!==ue&&!w&&(i.colorMask(ue,ue,ue,ue),Z=ue)},setLocked:function(ue){w=ue},setClear:function(ue,ze,Ge,rt,Yt){Yt===!0&&(ue*=rt,ze*=rt,Ge*=rt),O.set(ue,ze,Ge,rt),oe.equals(O)===!1&&(i.clearColor(ue,ze,Ge,rt),oe.copy(O))},reset:function(){w=!1,Z=null,oe.set(-1,0,0,0)}}}function s(){let w=!1,O=null,Z=null,oe=null;return{setTest:function(ue){ue?C(i.DEPTH_TEST):Te(i.DEPTH_TEST)},setMask:function(ue){O!==ue&&!w&&(i.depthMask(ue),O=ue)},setFunc:function(ue){if(Z!==ue){switch(ue){case ro:i.depthFunc(i.NEVER);break;case so:i.depthFunc(i.ALWAYS);break;case ao:i.depthFunc(i.LESS);break;case Tr:i.depthFunc(i.LEQUAL);break;case oo:i.depthFunc(i.EQUAL);break;case lo:i.depthFunc(i.GEQUAL);break;case co:i.depthFunc(i.GREATER);break;case uo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Z=ue}},setLocked:function(ue){w=ue},setClear:function(ue){oe!==ue&&(i.clearDepth(ue),oe=ue)},reset:function(){w=!1,O=null,Z=null,oe=null}}}function o(){let w=!1,O=null,Z=null,oe=null,ue=null,ze=null,Ge=null,rt=null,Yt=null;return{setTest:function(Xe){w||(Xe?C(i.STENCIL_TEST):Te(i.STENCIL_TEST))},setMask:function(Xe){O!==Xe&&!w&&(i.stencilMask(Xe),O=Xe)},setFunc:function(Xe,St,Dt){(Z!==Xe||oe!==St||ue!==Dt)&&(i.stencilFunc(Xe,St,Dt),Z=Xe,oe=St,ue=Dt)},setOp:function(Xe,St,Dt){(ze!==Xe||Ge!==St||rt!==Dt)&&(i.stencilOp(Xe,St,Dt),ze=Xe,Ge=St,rt=Dt)},setLocked:function(Xe){w=Xe},setClear:function(Xe){Yt!==Xe&&(i.clearStencil(Xe),Yt=Xe)},reset:function(){w=!1,O=null,Z=null,oe=null,ue=null,ze=null,Ge=null,rt=null,Yt=null}}}const a=new r,h=new s,l=new o,u=new WeakMap,d=new WeakMap;let f={},m={},x=new WeakMap,_=[],p=null,c=!1,E=null,S=null,y=null,b=null,R=null,P=null,X=null,v=!1,A=null,j=null,Y=null,D=null,z=null;const V=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,W=0;const k=i.getParameter(i.VERSION);k.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(k)[1]),J=W>=1):k.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),J=W>=2);let ee=null,K={};const _e=i.getParameter(i.SCISSOR_BOX),te=i.getParameter(i.VIEWPORT),F=new it().fromArray(_e),q=new it().fromArray(te);function re(w,O,Z,oe){const ue=new Uint8Array(4),ze=i.createTexture();i.bindTexture(w,ze),i.texParameteri(w,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(w,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ge=0;Ge<Z;Ge++)n&&(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)?i.texImage3D(O,0,i.RGBA,1,1,oe,0,i.RGBA,i.UNSIGNED_BYTE,ue):i.texImage2D(O+Ge,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ue);return ze}const ae={};ae[i.TEXTURE_2D]=re(i.TEXTURE_2D,i.TEXTURE_2D,1),ae[i.TEXTURE_CUBE_MAP]=re(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(ae[i.TEXTURE_2D_ARRAY]=re(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ae[i.TEXTURE_3D]=re(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),h.setClear(1),l.setClear(0),C(i.DEPTH_TEST),h.setFunc(Tr),nt(!1),Qe(Gr),C(i.CULL_FACE),Ce(Qt);function C(w){f[w]!==!0&&(i.enable(w),f[w]=!0)}function Te(w){f[w]!==!1&&(i.disable(w),f[w]=!1)}function Se(w,O){return m[w]!==O?(i.bindFramebuffer(w,O),m[w]=O,n&&(w===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=O),w===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=O)),!0):!1}function ie(w,O){let Z=_,oe=!1;if(w)if(Z=x.get(O),Z===void 0&&(Z=[],x.set(O,Z)),w.isWebGLMultipleRenderTargets){const ue=w.texture;if(Z.length!==ue.length||Z[0]!==i.COLOR_ATTACHMENT0){for(let ze=0,Ge=ue.length;ze<Ge;ze++)Z[ze]=i.COLOR_ATTACHMENT0+ze;Z.length=ue.length,oe=!0}}else Z[0]!==i.COLOR_ATTACHMENT0&&(Z[0]=i.COLOR_ATTACHMENT0,oe=!0);else Z[0]!==i.BACK&&(Z[0]=i.BACK,oe=!0);oe&&(t.isWebGL2?i.drawBuffers(Z):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Z))}function xe(w){return p!==w?(i.useProgram(w),p=w,!0):!1}const Ne={[On]:i.FUNC_ADD,[Ya]:i.FUNC_SUBTRACT,[Ka]:i.FUNC_REVERSE_SUBTRACT};if(n)Ne[Wr]=i.MIN,Ne[Xr]=i.MAX;else{const w=e.get("EXT_blend_minmax");w!==null&&(Ne[Wr]=w.MIN_EXT,Ne[Xr]=w.MAX_EXT)}const fe={[ja]:i.ZERO,[Za]:i.ONE,[$a]:i.SRC_COLOR,[la]:i.SRC_ALPHA,[io]:i.SRC_ALPHA_SATURATE,[to]:i.DST_COLOR,[Qa]:i.DST_ALPHA,[Ja]:i.ONE_MINUS_SRC_COLOR,[ca]:i.ONE_MINUS_SRC_ALPHA,[no]:i.ONE_MINUS_DST_COLOR,[eo]:i.ONE_MINUS_DST_ALPHA};function Ce(w,O,Z,oe,ue,ze,Ge,rt){if(w===Qt){c===!0&&(Te(i.BLEND),c=!1);return}if(c===!1&&(C(i.BLEND),c=!0),w!==qa){if(w!==E||rt!==v){if((S!==On||R!==On)&&(i.blendEquation(i.FUNC_ADD),S=On,R=On),rt)switch(w){case Hn:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Hr:i.blendFunc(i.ONE,i.ONE);break;case Vr:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case kr:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",w);break}else switch(w){case Hn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Hr:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Vr:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case kr:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",w);break}y=null,b=null,P=null,X=null,E=w,v=rt}return}ue=ue||O,ze=ze||Z,Ge=Ge||oe,(O!==S||ue!==R)&&(i.blendEquationSeparate(Ne[O],Ne[ue]),S=O,R=ue),(Z!==y||oe!==b||ze!==P||Ge!==X)&&(i.blendFuncSeparate(fe[Z],fe[oe],fe[ze],fe[Ge]),y=Z,b=oe,P=ze,X=Ge),E=w,v=!1}function Je(w,O){w.side===Xt?Te(i.CULL_FACE):C(i.CULL_FACE);let Z=w.side===_t;O&&(Z=!Z),nt(Z),w.blending===Hn&&w.transparent===!1?Ce(Qt):Ce(w.blending,w.blendEquation,w.blendSrc,w.blendDst,w.blendEquationAlpha,w.blendSrcAlpha,w.blendDstAlpha,w.premultipliedAlpha),h.setFunc(w.depthFunc),h.setTest(w.depthTest),h.setMask(w.depthWrite),a.setMask(w.colorWrite);const oe=w.stencilWrite;l.setTest(oe),oe&&(l.setMask(w.stencilWriteMask),l.setFunc(w.stencilFunc,w.stencilRef,w.stencilFuncMask),l.setOp(w.stencilFail,w.stencilZFail,w.stencilZPass)),Fe(w.polygonOffset,w.polygonOffsetFactor,w.polygonOffsetUnits),w.alphaToCoverage===!0?C(i.SAMPLE_ALPHA_TO_COVERAGE):Te(i.SAMPLE_ALPHA_TO_COVERAGE)}function nt(w){A!==w&&(w?i.frontFace(i.CW):i.frontFace(i.CCW),A=w)}function Qe(w){w!==ka?(C(i.CULL_FACE),w!==j&&(w===Gr?i.cullFace(i.BACK):w===Wa?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Te(i.CULL_FACE),j=w}function je(w){w!==Y&&(J&&i.lineWidth(w),Y=w)}function Fe(w,O,Z){w?(C(i.POLYGON_OFFSET_FILL),(D!==O||z!==Z)&&(i.polygonOffset(O,Z),D=O,z=Z)):Te(i.POLYGON_OFFSET_FILL)}function ke(w){w?C(i.SCISSOR_TEST):Te(i.SCISSOR_TEST)}function ft(w){w===void 0&&(w=i.TEXTURE0+V-1),ee!==w&&(i.activeTexture(w),ee=w)}function T(w,O,Z){Z===void 0&&(ee===null?Z=i.TEXTURE0+V-1:Z=ee);let oe=K[Z];oe===void 0&&(oe={type:void 0,texture:void 0},K[Z]=oe),(oe.type!==w||oe.texture!==O)&&(ee!==Z&&(i.activeTexture(Z),ee=Z),i.bindTexture(w,O||ae[w]),oe.type=w,oe.texture=O)}function g(){const w=K[ee];w!==void 0&&w.type!==void 0&&(i.bindTexture(w.type,null),w.type=void 0,w.texture=void 0)}function N(){try{i.compressedTexImage2D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function $(){try{i.compressedTexImage3D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Q(){try{i.texSubImage2D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function se(){try{i.texSubImage3D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Me(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function ce(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function G(){try{i.texStorage2D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function he(){try{i.texStorage3D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function pe(){try{i.texImage2D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function ge(){try{i.texImage3D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function le(w){F.equals(w)===!1&&(i.scissor(w.x,w.y,w.z,w.w),F.copy(w))}function de(w){q.equals(w)===!1&&(i.viewport(w.x,w.y,w.z,w.w),q.copy(w))}function Ue(w,O){let Z=d.get(O);Z===void 0&&(Z=new WeakMap,d.set(O,Z));let oe=Z.get(w);oe===void 0&&(oe=i.getUniformBlockIndex(O,w.name),Z.set(w,oe))}function Oe(w,O){const oe=d.get(O).get(w);u.get(O)!==oe&&(i.uniformBlockBinding(O,oe,w.__bindingPointIndex),u.set(O,oe))}function We(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},ee=null,K={},m={},x=new WeakMap,_=[],p=null,c=!1,E=null,S=null,y=null,b=null,R=null,P=null,X=null,v=!1,A=null,j=null,Y=null,D=null,z=null,F.set(0,0,i.canvas.width,i.canvas.height),q.set(0,0,i.canvas.width,i.canvas.height),a.reset(),h.reset(),l.reset()}return{buffers:{color:a,depth:h,stencil:l},enable:C,disable:Te,bindFramebuffer:Se,drawBuffers:ie,useProgram:xe,setBlending:Ce,setMaterial:Je,setFlipSided:nt,setCullFace:Qe,setLineWidth:je,setPolygonOffset:Fe,setScissorTest:ke,activeTexture:ft,bindTexture:T,unbindTexture:g,compressedTexImage2D:N,compressedTexImage3D:$,texImage2D:pe,texImage3D:ge,updateUBOMapping:Ue,uniformBlockBinding:Oe,texStorage2D:G,texStorage3D:he,texSubImage2D:Q,texSubImage3D:se,compressedTexSubImage2D:Me,compressedTexSubImage3D:ce,scissor:le,viewport:de,reset:We}}function Nd(i,e,t,n,r,s,o){const a=r.isWebGL2,h=r.maxTextures,l=r.maxCubemapSize,u=r.maxTextureSize,d=r.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),x=new WeakMap;let _;const p=new WeakMap;let c=!1;try{c=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(T,g){return c?new OffscreenCanvas(T,g):ci("canvas")}function S(T,g,N,$){let Q=1;if((T.width>$||T.height>$)&&(Q=$/Math.max(T.width,T.height)),Q<1||g===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){const se=g?Ho:Math.floor,Me=se(Q*T.width),ce=se(Q*T.height);_===void 0&&(_=E(Me,ce));const G=N?E(Me,ce):_;return G.width=Me,G.height=ce,G.getContext("2d").drawImage(T,0,0,Me,ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+Me+"x"+ce+")."),G}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function y(T){return vs(T.width)&&vs(T.height)}function b(T){return a?!1:T.wrapS!==Lt||T.wrapT!==Lt||T.minFilter!==ut&&T.minFilter!==pt}function R(T,g){return T.generateMipmaps&&g&&T.minFilter!==ut&&T.minFilter!==pt}function P(T){i.generateMipmap(T)}function X(T,g,N,$,Q=!1){if(a===!1)return g;if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let se=g;return g===i.RED&&(N===i.FLOAT&&(se=i.R32F),N===i.HALF_FLOAT&&(se=i.R16F),N===i.UNSIGNED_BYTE&&(se=i.R8)),g===i.RG&&(N===i.FLOAT&&(se=i.RG32F),N===i.HALF_FLOAT&&(se=i.RG16F),N===i.UNSIGNED_BYTE&&(se=i.RG8)),g===i.RGBA&&(N===i.FLOAT&&(se=i.RGBA32F),N===i.HALF_FLOAT&&(se=i.RGBA16F),N===i.UNSIGNED_BYTE&&(se=$===ye&&Q===!1?i.SRGB8_ALPHA8:i.RGBA8),N===i.UNSIGNED_SHORT_4_4_4_4&&(se=i.RGBA4),N===i.UNSIGNED_SHORT_5_5_5_1&&(se=i.RGB5_A1)),(se===i.R16F||se===i.R32F||se===i.RG16F||se===i.RG32F||se===i.RGBA16F||se===i.RGBA32F)&&e.get("EXT_color_buffer_float"),se}function v(T,g,N){return R(T,N)===!0||T.isFramebufferTexture&&T.minFilter!==ut&&T.minFilter!==pt?Math.log2(Math.max(g.width,g.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?g.mipmaps.length:1}function A(T){return T===ut||T===qr||T===Yi?i.NEAREST:i.LINEAR}function j(T){const g=T.target;g.removeEventListener("dispose",j),D(g),g.isVideoTexture&&x.delete(g)}function Y(T){const g=T.target;g.removeEventListener("dispose",Y),V(g)}function D(T){const g=n.get(T);if(g.__webglInit===void 0)return;const N=T.source,$=p.get(N);if($){const Q=$[g.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&z(T),Object.keys($).length===0&&p.delete(N)}n.remove(T)}function z(T){const g=n.get(T);i.deleteTexture(g.__webglTexture);const N=T.source,$=p.get(N);delete $[g.__cacheKey],o.memory.textures--}function V(T){const g=T.texture,N=n.get(T),$=n.get(g);if($.__webglTexture!==void 0&&(i.deleteTexture($.__webglTexture),o.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++)i.deleteFramebuffer(N.__webglFramebuffer[Q]),N.__webglDepthbuffer&&i.deleteRenderbuffer(N.__webglDepthbuffer[Q]);else{if(i.deleteFramebuffer(N.__webglFramebuffer),N.__webglDepthbuffer&&i.deleteRenderbuffer(N.__webglDepthbuffer),N.__webglMultisampledFramebuffer&&i.deleteFramebuffer(N.__webglMultisampledFramebuffer),N.__webglColorRenderbuffer)for(let Q=0;Q<N.__webglColorRenderbuffer.length;Q++)N.__webglColorRenderbuffer[Q]&&i.deleteRenderbuffer(N.__webglColorRenderbuffer[Q]);N.__webglDepthRenderbuffer&&i.deleteRenderbuffer(N.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let Q=0,se=g.length;Q<se;Q++){const Me=n.get(g[Q]);Me.__webglTexture&&(i.deleteTexture(Me.__webglTexture),o.memory.textures--),n.remove(g[Q])}n.remove(g),n.remove(T)}let J=0;function W(){J=0}function k(){const T=J;return T>=h&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+h),J+=1,T}function ee(T){const g=[];return g.push(T.wrapS),g.push(T.wrapT),g.push(T.wrapR||0),g.push(T.magFilter),g.push(T.minFilter),g.push(T.anisotropy),g.push(T.internalFormat),g.push(T.format),g.push(T.type),g.push(T.generateMipmaps),g.push(T.premultiplyAlpha),g.push(T.flipY),g.push(T.unpackAlignment),g.push(T.colorSpace),g.join()}function K(T,g){const N=n.get(T);if(T.isVideoTexture&&ke(T),T.isRenderTargetTexture===!1&&T.version>0&&N.__version!==T.version){const $=T.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Te(N,T,g);return}}t.bindTexture(i.TEXTURE_2D,N.__webglTexture,i.TEXTURE0+g)}function _e(T,g){const N=n.get(T);if(T.version>0&&N.__version!==T.version){Te(N,T,g);return}t.bindTexture(i.TEXTURE_2D_ARRAY,N.__webglTexture,i.TEXTURE0+g)}function te(T,g){const N=n.get(T);if(T.version>0&&N.__version!==T.version){Te(N,T,g);return}t.bindTexture(i.TEXTURE_3D,N.__webglTexture,i.TEXTURE0+g)}function F(T,g){const N=n.get(T);if(T.version>0&&N.__version!==T.version){Se(N,T,g);return}t.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+g)}const q={[Ar]:i.REPEAT,[Lt]:i.CLAMP_TO_EDGE,[wr]:i.MIRRORED_REPEAT},re={[ut]:i.NEAREST,[qr]:i.NEAREST_MIPMAP_NEAREST,[Yi]:i.NEAREST_MIPMAP_LINEAR,[pt]:i.LINEAR,[xo]:i.LINEAR_MIPMAP_NEAREST,[oi]:i.LINEAR_MIPMAP_LINEAR};function ae(T,g,N){if(N?(i.texParameteri(T,i.TEXTURE_WRAP_S,q[g.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,q[g.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,q[g.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,re[g.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,re[g.minFilter])):(i.texParameteri(T,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(T,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(g.wrapS!==Lt||g.wrapT!==Lt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(T,i.TEXTURE_MAG_FILTER,A(g.magFilter)),i.texParameteri(T,i.TEXTURE_MIN_FILTER,A(g.minFilter)),g.minFilter!==ut&&g.minFilter!==pt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const $=e.get("EXT_texture_filter_anisotropic");if(g.magFilter===ut||g.minFilter!==Yi&&g.minFilter!==oi||g.type===dn&&e.has("OES_texture_float_linear")===!1||a===!1&&g.type===li&&e.has("OES_texture_half_float_linear")===!1)return;(g.anisotropy>1||n.get(g).__currentAnisotropy)&&(i.texParameterf(T,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy)}}function C(T,g){let N=!1;T.__webglInit===void 0&&(T.__webglInit=!0,g.addEventListener("dispose",j));const $=g.source;let Q=p.get($);Q===void 0&&(Q={},p.set($,Q));const se=ee(g);if(se!==T.__cacheKey){Q[se]===void 0&&(Q[se]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,N=!0),Q[se].usedTimes++;const Me=Q[T.__cacheKey];Me!==void 0&&(Q[T.__cacheKey].usedTimes--,Me.usedTimes===0&&z(g)),T.__cacheKey=se,T.__webglTexture=Q[se].texture}return N}function Te(T,g,N){let $=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&($=i.TEXTURE_3D);const Q=C(T,g),se=g.source;t.bindTexture($,T.__webglTexture,i.TEXTURE0+N);const Me=n.get(se);if(se.version!==Me.__version||Q===!0){t.activeTexture(i.TEXTURE0+N),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.NONE);const ce=b(g)&&y(g.image)===!1;let G=S(g.image,ce,!1,u);G=ft(g,G);const he=y(G)||a,pe=s.convert(g.format,g.colorSpace);let ge=s.convert(g.type),le=X(g.internalFormat,pe,ge,g.colorSpace);ae($,g,he);let de;const Ue=g.mipmaps,Oe=a&&g.isVideoTexture!==!0,We=Me.__version===void 0||Q===!0,w=v(g,G,he);if(g.isDepthTexture)le=i.DEPTH_COMPONENT,a?g.type===dn?le=i.DEPTH_COMPONENT32F:g.type===hn?le=i.DEPTH_COMPONENT24:g.type===Vn?le=i.DEPTH24_STENCIL8:le=i.DEPTH_COMPONENT16:g.type===dn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),g.format===fn&&le===i.DEPTH_COMPONENT&&g.type!==da&&g.type!==hn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),g.type=hn,ge=s.convert(g.type)),g.format===qn&&le===i.DEPTH_COMPONENT&&(le=i.DEPTH_STENCIL,g.type!==Vn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),g.type=Vn,ge=s.convert(g.type))),We&&(Oe?t.texStorage2D(i.TEXTURE_2D,1,le,G.width,G.height):t.texImage2D(i.TEXTURE_2D,0,le,G.width,G.height,0,pe,ge,null));else if(g.isDataTexture)if(Ue.length>0&&he){Oe&&We&&t.texStorage2D(i.TEXTURE_2D,w,le,Ue[0].width,Ue[0].height);for(let O=0,Z=Ue.length;O<Z;O++)de=Ue[O],Oe?t.texSubImage2D(i.TEXTURE_2D,O,0,0,de.width,de.height,pe,ge,de.data):t.texImage2D(i.TEXTURE_2D,O,le,de.width,de.height,0,pe,ge,de.data);g.generateMipmaps=!1}else Oe?(We&&t.texStorage2D(i.TEXTURE_2D,w,le,G.width,G.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,G.width,G.height,pe,ge,G.data)):t.texImage2D(i.TEXTURE_2D,0,le,G.width,G.height,0,pe,ge,G.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Oe&&We&&t.texStorage3D(i.TEXTURE_2D_ARRAY,w,le,Ue[0].width,Ue[0].height,G.depth);for(let O=0,Z=Ue.length;O<Z;O++)de=Ue[O],g.format!==Pt?pe!==null?Oe?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,O,0,0,0,de.width,de.height,G.depth,pe,de.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,O,le,de.width,de.height,G.depth,0,de.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?t.texSubImage3D(i.TEXTURE_2D_ARRAY,O,0,0,0,de.width,de.height,G.depth,pe,ge,de.data):t.texImage3D(i.TEXTURE_2D_ARRAY,O,le,de.width,de.height,G.depth,0,pe,ge,de.data)}else{Oe&&We&&t.texStorage2D(i.TEXTURE_2D,w,le,Ue[0].width,Ue[0].height);for(let O=0,Z=Ue.length;O<Z;O++)de=Ue[O],g.format!==Pt?pe!==null?Oe?t.compressedTexSubImage2D(i.TEXTURE_2D,O,0,0,de.width,de.height,pe,de.data):t.compressedTexImage2D(i.TEXTURE_2D,O,le,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?t.texSubImage2D(i.TEXTURE_2D,O,0,0,de.width,de.height,pe,ge,de.data):t.texImage2D(i.TEXTURE_2D,O,le,de.width,de.height,0,pe,ge,de.data)}else if(g.isDataArrayTexture)Oe?(We&&t.texStorage3D(i.TEXTURE_2D_ARRAY,w,le,G.width,G.height,G.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,G.width,G.height,G.depth,pe,ge,G.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,le,G.width,G.height,G.depth,0,pe,ge,G.data);else if(g.isData3DTexture)Oe?(We&&t.texStorage3D(i.TEXTURE_3D,w,le,G.width,G.height,G.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,G.width,G.height,G.depth,pe,ge,G.data)):t.texImage3D(i.TEXTURE_3D,0,le,G.width,G.height,G.depth,0,pe,ge,G.data);else if(g.isFramebufferTexture){if(We)if(Oe)t.texStorage2D(i.TEXTURE_2D,w,le,G.width,G.height);else{let O=G.width,Z=G.height;for(let oe=0;oe<w;oe++)t.texImage2D(i.TEXTURE_2D,oe,le,O,Z,0,pe,ge,null),O>>=1,Z>>=1}}else if(Ue.length>0&&he){Oe&&We&&t.texStorage2D(i.TEXTURE_2D,w,le,Ue[0].width,Ue[0].height);for(let O=0,Z=Ue.length;O<Z;O++)de=Ue[O],Oe?t.texSubImage2D(i.TEXTURE_2D,O,0,0,pe,ge,de):t.texImage2D(i.TEXTURE_2D,O,le,pe,ge,de);g.generateMipmaps=!1}else Oe?(We&&t.texStorage2D(i.TEXTURE_2D,w,le,G.width,G.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,pe,ge,G)):t.texImage2D(i.TEXTURE_2D,0,le,pe,ge,G);R(g,he)&&P($),Me.__version=se.version,g.onUpdate&&g.onUpdate(g)}T.__version=g.version}function Se(T,g,N){if(g.image.length!==6)return;const $=C(T,g),Q=g.source;t.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+N);const se=n.get(Q);if(Q.version!==se.__version||$===!0){t.activeTexture(i.TEXTURE0+N),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.NONE);const Me=g.isCompressedTexture||g.image[0].isCompressedTexture,ce=g.image[0]&&g.image[0].isDataTexture,G=[];for(let O=0;O<6;O++)!Me&&!ce?G[O]=S(g.image[O],!1,!0,l):G[O]=ce?g.image[O].image:g.image[O],G[O]=ft(g,G[O]);const he=G[0],pe=y(he)||a,ge=s.convert(g.format,g.colorSpace),le=s.convert(g.type),de=X(g.internalFormat,ge,le,g.colorSpace),Ue=a&&g.isVideoTexture!==!0,Oe=se.__version===void 0||$===!0;let We=v(g,he,pe);ae(i.TEXTURE_CUBE_MAP,g,pe);let w;if(Me){Ue&&Oe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,We,de,he.width,he.height);for(let O=0;O<6;O++){w=G[O].mipmaps;for(let Z=0;Z<w.length;Z++){const oe=w[Z];g.format!==Pt?ge!==null?Ue?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,Z,0,0,oe.width,oe.height,ge,oe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,Z,de,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ue?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,Z,0,0,oe.width,oe.height,ge,le,oe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,Z,de,oe.width,oe.height,0,ge,le,oe.data)}}}else{w=g.mipmaps,Ue&&Oe&&(w.length>0&&We++,t.texStorage2D(i.TEXTURE_CUBE_MAP,We,de,G[0].width,G[0].height));for(let O=0;O<6;O++)if(ce){Ue?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,0,0,G[O].width,G[O].height,ge,le,G[O].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,de,G[O].width,G[O].height,0,ge,le,G[O].data);for(let Z=0;Z<w.length;Z++){const ue=w[Z].image[O].image;Ue?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,Z+1,0,0,ue.width,ue.height,ge,le,ue.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,Z+1,de,ue.width,ue.height,0,ge,le,ue.data)}}else{Ue?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,0,0,ge,le,G[O]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,de,ge,le,G[O]);for(let Z=0;Z<w.length;Z++){const oe=w[Z];Ue?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,Z+1,0,0,ge,le,oe.image[O]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,Z+1,de,ge,le,oe.image[O])}}}R(g,pe)&&P(i.TEXTURE_CUBE_MAP),se.__version=Q.version,g.onUpdate&&g.onUpdate(g)}T.__version=g.version}function ie(T,g,N,$,Q){const se=s.convert(N.format,N.colorSpace),Me=s.convert(N.type),ce=X(N.internalFormat,se,Me,N.colorSpace);n.get(g).__hasExternalTextures||(Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?t.texImage3D(Q,0,ce,g.width,g.height,g.depth,0,se,Me,null):t.texImage2D(Q,0,ce,g.width,g.height,0,se,Me,null)),t.bindFramebuffer(i.FRAMEBUFFER,T),Fe(g)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,Q,n.get(N).__webglTexture,0,je(g)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,Q,n.get(N).__webglTexture,0),t.bindFramebuffer(i.FRAMEBUFFER,null)}function xe(T,g,N){if(i.bindRenderbuffer(i.RENDERBUFFER,T),g.depthBuffer&&!g.stencilBuffer){let $=i.DEPTH_COMPONENT16;if(N||Fe(g)){const Q=g.depthTexture;Q&&Q.isDepthTexture&&(Q.type===dn?$=i.DEPTH_COMPONENT32F:Q.type===hn&&($=i.DEPTH_COMPONENT24));const se=je(g);Fe(g)?f.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,se,$,g.width,g.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,se,$,g.width,g.height)}else i.renderbufferStorage(i.RENDERBUFFER,$,g.width,g.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,T)}else if(g.depthBuffer&&g.stencilBuffer){const $=je(g);N&&Fe(g)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,$,i.DEPTH24_STENCIL8,g.width,g.height):Fe(g)?f.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,$,i.DEPTH24_STENCIL8,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,T)}else{const $=g.isWebGLMultipleRenderTargets===!0?g.texture:[g.texture];for(let Q=0;Q<$.length;Q++){const se=$[Q],Me=s.convert(se.format,se.colorSpace),ce=s.convert(se.type),G=X(se.internalFormat,Me,ce,se.colorSpace),he=je(g);N&&Fe(g)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,he,G,g.width,g.height):Fe(g)?f.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,he,G,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,G,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ne(T,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,T),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(g.depthTexture).__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),K(g.depthTexture,0);const $=n.get(g.depthTexture).__webglTexture,Q=je(g);if(g.depthTexture.format===fn)Fe(g)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,$,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,$,0);else if(g.depthTexture.format===qn)Fe(g)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,$,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function fe(T){const g=n.get(T),N=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!g.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");Ne(g.__webglFramebuffer,T)}else if(N){g.__webglDepthbuffer=[];for(let $=0;$<6;$++)t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[$]),g.__webglDepthbuffer[$]=i.createRenderbuffer(),xe(g.__webglDepthbuffer[$],T,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer=i.createRenderbuffer(),xe(g.__webglDepthbuffer,T,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ce(T,g,N){const $=n.get(T);g!==void 0&&ie($.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D),N!==void 0&&fe(T)}function Je(T){const g=T.texture,N=n.get(T),$=n.get(g);T.addEventListener("dispose",Y),T.isWebGLMultipleRenderTargets!==!0&&($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=g.version,o.memory.textures++);const Q=T.isWebGLCubeRenderTarget===!0,se=T.isWebGLMultipleRenderTargets===!0,Me=y(T)||a;if(Q){N.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)N.__webglFramebuffer[ce]=i.createFramebuffer()}else{if(N.__webglFramebuffer=i.createFramebuffer(),se)if(r.drawBuffers){const ce=T.texture;for(let G=0,he=ce.length;G<he;G++){const pe=n.get(ce[G]);pe.__webglTexture===void 0&&(pe.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&T.samples>0&&Fe(T)===!1){const ce=se?g:[g];N.__webglMultisampledFramebuffer=i.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let G=0;G<ce.length;G++){const he=ce[G];N.__webglColorRenderbuffer[G]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,N.__webglColorRenderbuffer[G]);const pe=s.convert(he.format,he.colorSpace),ge=s.convert(he.type),le=X(he.internalFormat,pe,ge,he.colorSpace,T.isXRRenderTarget===!0),de=je(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,de,le,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+G,i.RENDERBUFFER,N.__webglColorRenderbuffer[G])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(N.__webglDepthRenderbuffer=i.createRenderbuffer(),xe(N.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Q){t.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),ae(i.TEXTURE_CUBE_MAP,g,Me);for(let ce=0;ce<6;ce++)ie(N.__webglFramebuffer[ce],T,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ce);R(g,Me)&&P(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(se){const ce=T.texture;for(let G=0,he=ce.length;G<he;G++){const pe=ce[G],ge=n.get(pe);t.bindTexture(i.TEXTURE_2D,ge.__webglTexture),ae(i.TEXTURE_2D,pe,Me),ie(N.__webglFramebuffer,T,pe,i.COLOR_ATTACHMENT0+G,i.TEXTURE_2D),R(pe,Me)&&P(i.TEXTURE_2D)}t.unbindTexture()}else{let ce=i.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(a?ce=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ce,$.__webglTexture),ae(ce,g,Me),ie(N.__webglFramebuffer,T,g,i.COLOR_ATTACHMENT0,ce),R(g,Me)&&P(ce),t.unbindTexture()}T.depthBuffer&&fe(T)}function nt(T){const g=y(T)||a,N=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let $=0,Q=N.length;$<Q;$++){const se=N[$];if(R(se,g)){const Me=T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,ce=n.get(se).__webglTexture;t.bindTexture(Me,ce),P(Me),t.unbindTexture()}}}function Qe(T){if(a&&T.samples>0&&Fe(T)===!1){const g=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],N=T.width,$=T.height;let Q=i.COLOR_BUFFER_BIT;const se=[],Me=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=n.get(T),G=T.isWebGLMultipleRenderTargets===!0;if(G)for(let he=0;he<g.length;he++)t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let he=0;he<g.length;he++){se.push(i.COLOR_ATTACHMENT0+he),T.depthBuffer&&se.push(Me);const pe=ce.__ignoreDepthValues!==void 0?ce.__ignoreDepthValues:!1;if(pe===!1&&(T.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),G&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ce.__webglColorRenderbuffer[he]),pe===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Me]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Me])),G){const ge=n.get(g[he]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ge,0)}i.blitFramebuffer(0,0,N,$,0,0,N,$,Q,i.NEAREST),m&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,se)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),G)for(let he=0;he<g.length;he++){t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.RENDERBUFFER,ce.__webglColorRenderbuffer[he]);const pe=n.get(g[he]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.TEXTURE_2D,pe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}}function je(T){return Math.min(d,T.samples)}function Fe(T){const g=n.get(T);return a&&T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function ke(T){const g=o.render.frame;x.get(T)!==g&&(x.set(T,g),T.update())}function ft(T,g){const N=T.colorSpace,$=T.format,Q=T.type;return T.isCompressedTexture===!0||T.format===Rr||N!==Ot&&N!==mn&&(N===ye?a===!1?e.has("EXT_sRGB")===!0&&$===Pt?(T.format=Rr,T.minFilter=pt,T.generateMipmaps=!1):g=_a.sRGBToLinear(g):($!==Pt||Q!==gn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),g}this.allocateTextureUnit=k,this.resetTextureUnits=W,this.setTexture2D=K,this.setTexture2DArray=_e,this.setTexture3D=te,this.setTextureCube=F,this.rebindTextures=Ce,this.setupRenderTarget=Je,this.updateRenderTargetMipmap=nt,this.updateMultisampleRenderTarget=Qe,this.setupDepthRenderbuffer=fe,this.setupFrameBufferTexture=ie,this.useMultisampledRTT=Fe}function Fd(i,e,t){const n=t.isWebGL2;function r(s,o=mn){let a;if(s===gn)return i.UNSIGNED_BYTE;if(s===To)return i.UNSIGNED_SHORT_4_4_4_4;if(s===yo)return i.UNSIGNED_SHORT_5_5_5_1;if(s===Mo)return i.BYTE;if(s===So)return i.SHORT;if(s===da)return i.UNSIGNED_SHORT;if(s===Eo)return i.INT;if(s===hn)return i.UNSIGNED_INT;if(s===dn)return i.FLOAT;if(s===li)return n?i.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===bo)return i.ALPHA;if(s===Pt)return i.RGBA;if(s===Ao)return i.LUMINANCE;if(s===wo)return i.LUMINANCE_ALPHA;if(s===fn)return i.DEPTH_COMPONENT;if(s===qn)return i.DEPTH_STENCIL;if(s===Rr)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Ro)return i.RED;if(s===Co)return i.RED_INTEGER;if(s===Lo)return i.RG;if(s===Po)return i.RG_INTEGER;if(s===Uo)return i.RGBA_INTEGER;if(s===Ki||s===ji||s===Zi||s===$i)if(o===ye)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Ki)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===ji)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Zi)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===$i)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Ki)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===ji)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Zi)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===$i)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Yr||s===Kr||s===jr||s===Zr)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Yr)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Kr)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===jr)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Zr)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Do)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===$r||s===Jr)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===$r)return o===ye?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Jr)return o===ye?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Qr||s===es||s===ts||s===ns||s===is||s===rs||s===ss||s===as||s===os||s===ls||s===cs||s===us||s===hs||s===ds)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Qr)return o===ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===es)return o===ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===ts)return o===ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===ns)return o===ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===is)return o===ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===rs)return o===ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===ss)return o===ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===as)return o===ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===os)return o===ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===ls)return o===ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===cs)return o===ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===us)return o===ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===hs)return o===ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===ds)return o===ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Ji)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Ji)return o===ye?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===Io||s===fs||s===ps||s===ms)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Ji)return a.COMPRESSED_RED_RGTC1_EXT;if(s===fs)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===ps)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===ms)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Vn?n?i.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class Od extends Tt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Fi extends dt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Bd={type:"move"};class Er{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,h=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,n),c=this._getHandJoint(l,_);p!==null&&(c.matrix.fromArray(p.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,c.jointRadius=p.radius),c.visible=p!==null}const u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],f=u.position.distanceTo(d.position),m=.02,x=.005;l.inputState.pinching&&f>m+x?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=m-x&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(h.matrix.fromArray(s.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,s.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(s.linearVelocity)):h.hasLinearVelocity=!1,s.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(s.angularVelocity)):h.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Bd)))}return a!==null&&(a.visible=r!==null),h!==null&&(h.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Fi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class zd extends ht{constructor(e,t,n,r,s,o,a,h,l,u){if(u=u!==void 0?u:fn,u!==fn&&u!==qn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===fn&&(n=hn),n===void 0&&u===qn&&(n=Vn),super(null,r,s,o,a,h,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:ut,this.minFilter=h!==void 0?h:ut,this.flipY=!1,this.generateMipmaps=!1}}class Gd extends jn{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",h=1,l=null,u=null,d=null,f=null,m=null,x=null;const _=t.getContextAttributes();let p=null,c=null;const E=[],S=[],y=new Set,b=new Map,R=new Tt;R.layers.enable(1),R.viewport=new it;const P=new Tt;P.layers.enable(2),P.viewport=new it;const X=[R,P],v=new Od;v.layers.enable(1),v.layers.enable(2);let A=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(F){let q=E[F];return q===void 0&&(q=new Er,E[F]=q),q.getTargetRaySpace()},this.getControllerGrip=function(F){let q=E[F];return q===void 0&&(q=new Er,E[F]=q),q.getGripSpace()},this.getHand=function(F){let q=E[F];return q===void 0&&(q=new Er,E[F]=q),q.getHandSpace()};function Y(F){const q=S.indexOf(F.inputSource);if(q===-1)return;const re=E[q];re!==void 0&&(re.update(F.inputSource,F.frame,l||o),re.dispatchEvent({type:F.type,data:F.inputSource}))}function D(){r.removeEventListener("select",Y),r.removeEventListener("selectstart",Y),r.removeEventListener("selectend",Y),r.removeEventListener("squeeze",Y),r.removeEventListener("squeezestart",Y),r.removeEventListener("squeezeend",Y),r.removeEventListener("end",D),r.removeEventListener("inputsourceschange",z);for(let F=0;F<E.length;F++){const q=S[F];q!==null&&(S[F]=null,E[F].disconnect(q))}A=null,j=null,e.setRenderTarget(p),m=null,f=null,d=null,r=null,c=null,te.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(F){s=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(F){a=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(F){l=F},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return d},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(F){if(r=F,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",Y),r.addEventListener("selectstart",Y),r.addEventListener("selectend",Y),r.addEventListener("squeeze",Y),r.addEventListener("squeezestart",Y),r.addEventListener("squeezeend",Y),r.addEventListener("end",D),r.addEventListener("inputsourceschange",z),_.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const q={antialias:r.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,q),r.updateRenderState({baseLayer:m}),c=new vn(m.framebufferWidth,m.framebufferHeight,{format:Pt,type:gn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let q=null,re=null,ae=null;_.depth&&(ae=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,q=_.stencil?qn:fn,re=_.stencil?Vn:hn);const C={colorFormat:t.RGBA8,depthFormat:ae,scaleFactor:s};d=new XRWebGLBinding(r,t),f=d.createProjectionLayer(C),r.updateRenderState({layers:[f]}),c=new vn(f.textureWidth,f.textureHeight,{format:Pt,type:gn,depthTexture:new zd(f.textureWidth,f.textureHeight,re,void 0,void 0,void 0,void 0,void 0,void 0,q),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const Te=e.properties.get(c);Te.__ignoreDepthValues=f.ignoreDepthValues}c.isXRRenderTarget=!0,this.setFoveation(h),l=null,o=await r.requestReferenceSpace(a),te.setContext(r),te.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function z(F){for(let q=0;q<F.removed.length;q++){const re=F.removed[q],ae=S.indexOf(re);ae>=0&&(S[ae]=null,E[ae].disconnect(re))}for(let q=0;q<F.added.length;q++){const re=F.added[q];let ae=S.indexOf(re);if(ae===-1){for(let Te=0;Te<E.length;Te++)if(Te>=S.length){S.push(re),ae=Te;break}else if(S[Te]===null){S[Te]=re,ae=Te;break}if(ae===-1)break}const C=E[ae];C&&C.connect(re)}}const V=new I,J=new I;function W(F,q,re){V.setFromMatrixPosition(q.matrixWorld),J.setFromMatrixPosition(re.matrixWorld);const ae=V.distanceTo(J),C=q.projectionMatrix.elements,Te=re.projectionMatrix.elements,Se=C[14]/(C[10]-1),ie=C[14]/(C[10]+1),xe=(C[9]+1)/C[5],Ne=(C[9]-1)/C[5],fe=(C[8]-1)/C[0],Ce=(Te[8]+1)/Te[0],Je=Se*fe,nt=Se*Ce,Qe=ae/(-fe+Ce),je=Qe*-fe;q.matrixWorld.decompose(F.position,F.quaternion,F.scale),F.translateX(je),F.translateZ(Qe),F.matrixWorld.compose(F.position,F.quaternion,F.scale),F.matrixWorldInverse.copy(F.matrixWorld).invert();const Fe=Se+Qe,ke=ie+Qe,ft=Je-je,T=nt+(ae-je),g=xe*ie/ke*Fe,N=Ne*ie/ke*Fe;F.projectionMatrix.makePerspective(ft,T,g,N,Fe,ke),F.projectionMatrixInverse.copy(F.projectionMatrix).invert()}function k(F,q){q===null?F.matrixWorld.copy(F.matrix):F.matrixWorld.multiplyMatrices(q.matrixWorld,F.matrix),F.matrixWorldInverse.copy(F.matrixWorld).invert()}this.updateCamera=function(F){if(r===null)return;v.near=P.near=R.near=F.near,v.far=P.far=R.far=F.far,(A!==v.near||j!==v.far)&&(r.updateRenderState({depthNear:v.near,depthFar:v.far}),A=v.near,j=v.far);const q=F.parent,re=v.cameras;k(v,q);for(let ae=0;ae<re.length;ae++)k(re[ae],q);re.length===2?W(v,R,P):v.projectionMatrix.copy(R.projectionMatrix),ee(F,v,q)};function ee(F,q,re){re===null?F.matrix.copy(q.matrixWorld):(F.matrix.copy(re.matrixWorld),F.matrix.invert(),F.matrix.multiply(q.matrixWorld)),F.matrix.decompose(F.position,F.quaternion,F.scale),F.updateMatrixWorld(!0);const ae=F.children;for(let C=0,Te=ae.length;C<Te;C++)ae[C].updateMatrixWorld(!0);F.projectionMatrix.copy(q.projectionMatrix),F.projectionMatrixInverse.copy(q.projectionMatrixInverse),F.isPerspectiveCamera&&(F.fov=Cr*2*Math.atan(1/F.projectionMatrix.elements[5]),F.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(f===null&&m===null))return h},this.setFoveation=function(F){h=F,f!==null&&(f.fixedFoveation=F),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=F)},this.getPlanes=function(){return y};let K=null;function _e(F,q){if(u=q.getViewerPose(l||o),x=q,u!==null){const re=u.views;m!==null&&(e.setRenderTargetFramebuffer(c,m.framebuffer),e.setRenderTarget(c));let ae=!1;re.length!==v.cameras.length&&(v.cameras.length=0,ae=!0);for(let C=0;C<re.length;C++){const Te=re[C];let Se=null;if(m!==null)Se=m.getViewport(Te);else{const xe=d.getViewSubImage(f,Te);Se=xe.viewport,C===0&&(e.setRenderTargetTextures(c,xe.colorTexture,f.ignoreDepthValues?void 0:xe.depthStencilTexture),e.setRenderTarget(c))}let ie=X[C];ie===void 0&&(ie=new Tt,ie.layers.enable(C),ie.viewport=new it,X[C]=ie),ie.matrix.fromArray(Te.transform.matrix),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.projectionMatrix.fromArray(Te.projectionMatrix),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert(),ie.viewport.set(Se.x,Se.y,Se.width,Se.height),C===0&&(v.matrix.copy(ie.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),ae===!0&&v.cameras.push(ie)}}for(let re=0;re<E.length;re++){const ae=S[re],C=E[re];ae!==null&&C!==void 0&&C.update(ae,q,l||o)}if(K&&K(F,q),q.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:q.detectedPlanes});let re=null;for(const ae of y)q.detectedPlanes.has(ae)||(re===null&&(re=[]),re.push(ae));if(re!==null)for(const ae of re)y.delete(ae),b.delete(ae),n.dispatchEvent({type:"planeremoved",data:ae});for(const ae of q.detectedPlanes)if(!y.has(ae))y.add(ae),b.set(ae,q.lastChangedTime),n.dispatchEvent({type:"planeadded",data:ae});else{const C=b.get(ae);ae.lastChangedTime>C&&(b.set(ae,ae.lastChangedTime),n.dispatchEvent({type:"planechanged",data:ae}))}}x=null}const te=new wa;te.setAnimationLoop(_e),this.setAnimationLoop=function(F){K=F},this.dispose=function(){}}}function Hd(i,e){function t(p,c){p.matrixAutoUpdate===!0&&p.updateMatrix(),c.value.copy(p.matrix)}function n(p,c){c.color.getRGB(p.fogColor.value,Ta(i)),c.isFog?(p.fogNear.value=c.near,p.fogFar.value=c.far):c.isFogExp2&&(p.fogDensity.value=c.density)}function r(p,c,E,S,y){c.isMeshBasicMaterial||c.isMeshLambertMaterial?s(p,c):c.isMeshToonMaterial?(s(p,c),d(p,c)):c.isMeshPhongMaterial?(s(p,c),u(p,c)):c.isMeshStandardMaterial?(s(p,c),f(p,c),c.isMeshPhysicalMaterial&&m(p,c,y)):c.isMeshMatcapMaterial?(s(p,c),x(p,c)):c.isMeshDepthMaterial?s(p,c):c.isMeshDistanceMaterial?(s(p,c),_(p,c)):c.isMeshNormalMaterial?s(p,c):c.isLineBasicMaterial?(o(p,c),c.isLineDashedMaterial&&a(p,c)):c.isPointsMaterial?h(p,c,E,S):c.isSpriteMaterial?l(p,c):c.isShadowMaterial?(p.color.value.copy(c.color),p.opacity.value=c.opacity):c.isShaderMaterial&&(c.uniformsNeedUpdate=!1)}function s(p,c){p.opacity.value=c.opacity,c.color&&p.diffuse.value.copy(c.color),c.emissive&&p.emissive.value.copy(c.emissive).multiplyScalar(c.emissiveIntensity),c.map&&(p.map.value=c.map,t(c.map,p.mapTransform)),c.alphaMap&&(p.alphaMap.value=c.alphaMap,t(c.alphaMap,p.alphaMapTransform)),c.bumpMap&&(p.bumpMap.value=c.bumpMap,t(c.bumpMap,p.bumpMapTransform),p.bumpScale.value=c.bumpScale,c.side===_t&&(p.bumpScale.value*=-1)),c.normalMap&&(p.normalMap.value=c.normalMap,t(c.normalMap,p.normalMapTransform),p.normalScale.value.copy(c.normalScale),c.side===_t&&p.normalScale.value.negate()),c.displacementMap&&(p.displacementMap.value=c.displacementMap,t(c.displacementMap,p.displacementMapTransform),p.displacementScale.value=c.displacementScale,p.displacementBias.value=c.displacementBias),c.emissiveMap&&(p.emissiveMap.value=c.emissiveMap,t(c.emissiveMap,p.emissiveMapTransform)),c.specularMap&&(p.specularMap.value=c.specularMap,t(c.specularMap,p.specularMapTransform)),c.alphaTest>0&&(p.alphaTest.value=c.alphaTest);const E=e.get(c).envMap;if(E&&(p.envMap.value=E,p.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=c.reflectivity,p.ior.value=c.ior,p.refractionRatio.value=c.refractionRatio),c.lightMap){p.lightMap.value=c.lightMap;const S=i.useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=c.lightMapIntensity*S,t(c.lightMap,p.lightMapTransform)}c.aoMap&&(p.aoMap.value=c.aoMap,p.aoMapIntensity.value=c.aoMapIntensity,t(c.aoMap,p.aoMapTransform))}function o(p,c){p.diffuse.value.copy(c.color),p.opacity.value=c.opacity,c.map&&(p.map.value=c.map,t(c.map,p.mapTransform))}function a(p,c){p.dashSize.value=c.dashSize,p.totalSize.value=c.dashSize+c.gapSize,p.scale.value=c.scale}function h(p,c,E,S){p.diffuse.value.copy(c.color),p.opacity.value=c.opacity,p.size.value=c.size*E,p.scale.value=S*.5,c.map&&(p.map.value=c.map,t(c.map,p.uvTransform)),c.alphaMap&&(p.alphaMap.value=c.alphaMap),c.alphaTest>0&&(p.alphaTest.value=c.alphaTest)}function l(p,c){p.diffuse.value.copy(c.color),p.opacity.value=c.opacity,p.rotation.value=c.rotation,c.map&&(p.map.value=c.map,t(c.map,p.mapTransform)),c.alphaMap&&(p.alphaMap.value=c.alphaMap),c.alphaTest>0&&(p.alphaTest.value=c.alphaTest)}function u(p,c){p.specular.value.copy(c.specular),p.shininess.value=Math.max(c.shininess,1e-4)}function d(p,c){c.gradientMap&&(p.gradientMap.value=c.gradientMap)}function f(p,c){p.metalness.value=c.metalness,c.metalnessMap&&(p.metalnessMap.value=c.metalnessMap,t(c.metalnessMap,p.metalnessMapTransform)),p.roughness.value=c.roughness,c.roughnessMap&&(p.roughnessMap.value=c.roughnessMap,t(c.roughnessMap,p.roughnessMapTransform)),e.get(c).envMap&&(p.envMapIntensity.value=c.envMapIntensity)}function m(p,c,E){p.ior.value=c.ior,c.sheen>0&&(p.sheenColor.value.copy(c.sheenColor).multiplyScalar(c.sheen),p.sheenRoughness.value=c.sheenRoughness,c.sheenColorMap&&(p.sheenColorMap.value=c.sheenColorMap,t(c.sheenColorMap,p.sheenColorMapTransform)),c.sheenRoughnessMap&&(p.sheenRoughnessMap.value=c.sheenRoughnessMap,t(c.sheenRoughnessMap,p.sheenRoughnessMapTransform))),c.clearcoat>0&&(p.clearcoat.value=c.clearcoat,p.clearcoatRoughness.value=c.clearcoatRoughness,c.clearcoatMap&&(p.clearcoatMap.value=c.clearcoatMap,t(c.clearcoatMap,p.clearcoatMapTransform)),c.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=c.clearcoatRoughnessMap,t(c.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),c.clearcoatNormalMap&&(p.clearcoatNormalMap.value=c.clearcoatNormalMap,t(c.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(c.clearcoatNormalScale),c.side===_t&&p.clearcoatNormalScale.value.negate())),c.iridescence>0&&(p.iridescence.value=c.iridescence,p.iridescenceIOR.value=c.iridescenceIOR,p.iridescenceThicknessMinimum.value=c.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=c.iridescenceThicknessRange[1],c.iridescenceMap&&(p.iridescenceMap.value=c.iridescenceMap,t(c.iridescenceMap,p.iridescenceMapTransform)),c.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=c.iridescenceThicknessMap,t(c.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),c.transmission>0&&(p.transmission.value=c.transmission,p.transmissionSamplerMap.value=E.texture,p.transmissionSamplerSize.value.set(E.width,E.height),c.transmissionMap&&(p.transmissionMap.value=c.transmissionMap,t(c.transmissionMap,p.transmissionMapTransform)),p.thickness.value=c.thickness,c.thicknessMap&&(p.thicknessMap.value=c.thicknessMap,t(c.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=c.attenuationDistance,p.attenuationColor.value.copy(c.attenuationColor)),p.specularIntensity.value=c.specularIntensity,p.specularColor.value.copy(c.specularColor),c.specularColorMap&&(p.specularColorMap.value=c.specularColorMap,t(c.specularColorMap,p.specularColorMapTransform)),c.specularIntensityMap&&(p.specularIntensityMap.value=c.specularIntensityMap,t(c.specularIntensityMap,p.specularIntensityMapTransform))}function x(p,c){c.matcap&&(p.matcap.value=c.matcap)}function _(p,c){const E=e.get(c).light;p.referencePosition.value.setFromMatrixPosition(E.matrixWorld),p.nearDistance.value=E.shadow.camera.near,p.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Vd(i,e,t,n){let r={},s={},o=[];const a=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function h(E,S){const y=S.program;n.uniformBlockBinding(E,y)}function l(E,S){let y=r[E.id];y===void 0&&(x(E),y=u(E),r[E.id]=y,E.addEventListener("dispose",p));const b=S.program;n.updateUBOMapping(E,b);const R=e.render.frame;s[E.id]!==R&&(f(E),s[E.id]=R)}function u(E){const S=d();E.__bindingPointIndex=S;const y=i.createBuffer(),b=E.__size,R=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,b,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,y),y}function d(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){const S=r[E.id],y=E.uniforms,b=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let R=0,P=y.length;R<P;R++){const X=y[R];if(m(X,R,b)===!0){const v=X.__offset,A=Array.isArray(X.value)?X.value:[X.value];let j=0;for(let Y=0;Y<A.length;Y++){const D=A[Y],z=_(D);typeof D=="number"?(X.__data[0]=D,i.bufferSubData(i.UNIFORM_BUFFER,v+j,X.__data)):D.isMatrix3?(X.__data[0]=D.elements[0],X.__data[1]=D.elements[1],X.__data[2]=D.elements[2],X.__data[3]=D.elements[0],X.__data[4]=D.elements[3],X.__data[5]=D.elements[4],X.__data[6]=D.elements[5],X.__data[7]=D.elements[0],X.__data[8]=D.elements[6],X.__data[9]=D.elements[7],X.__data[10]=D.elements[8],X.__data[11]=D.elements[0]):(D.toArray(X.__data,j),j+=z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,v,X.__data)}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(E,S,y){const b=E.value;if(y[S]===void 0){if(typeof b=="number")y[S]=b;else{const R=Array.isArray(b)?b:[b],P=[];for(let X=0;X<R.length;X++)P.push(R[X].clone());y[S]=P}return!0}else if(typeof b=="number"){if(y[S]!==b)return y[S]=b,!0}else{const R=Array.isArray(y[S])?y[S]:[y[S]],P=Array.isArray(b)?b:[b];for(let X=0;X<R.length;X++){const v=R[X];if(v.equals(P[X])===!1)return v.copy(P[X]),!0}}return!1}function x(E){const S=E.uniforms;let y=0;const b=16;let R=0;for(let P=0,X=S.length;P<X;P++){const v=S[P],A={boundary:0,storage:0},j=Array.isArray(v.value)?v.value:[v.value];for(let Y=0,D=j.length;Y<D;Y++){const z=j[Y],V=_(z);A.boundary+=V.boundary,A.storage+=V.storage}if(v.__data=new Float32Array(A.storage/Float32Array.BYTES_PER_ELEMENT),v.__offset=y,P>0){R=y%b;const Y=b-R;R!==0&&Y-A.boundary<0&&(y+=b-R,v.__offset=y)}y+=A.storage}return R=y%b,R>0&&(y+=b-R),E.__size=y,E.__cache={},this}function _(E){const S={boundary:0,storage:0};return typeof E=="number"?(S.boundary=4,S.storage=4):E.isVector2?(S.boundary=8,S.storage=8):E.isVector3||E.isColor?(S.boundary=16,S.storage=12):E.isVector4?(S.boundary=16,S.storage=16):E.isMatrix3?(S.boundary=48,S.storage=48):E.isMatrix4?(S.boundary=64,S.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),S}function p(E){const S=E.target;S.removeEventListener("dispose",p);const y=o.indexOf(S.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function c(){for(const E in r)i.deleteBuffer(r[E]);o=[],r={},s={}}return{bind:h,update:l,dispose:c}}function kd(){const i=ci("canvas");return i.style.display="block",i}class Ua{constructor(e={}){const{canvas:t=kd(),context:n=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;let m=null,x=null;const _=[],p=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=ye,this.useLegacyLights=!0,this.toneMapping=qt,this.toneMappingExposure=1;const c=this;let E=!1,S=0,y=0,b=null,R=-1,P=null;const X=new it,v=new it;let A=null,j=t.width,Y=t.height,D=1,z=null,V=null;const J=new it(0,0,j,Y),W=new it(0,0,j,Y);let k=!1;const ee=new Aa;let K=!1,_e=!1,te=null;const F=new Ke,q=new I,re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ae(){return b===null?D:1}let C=n;function Te(M,U){for(let B=0;B<M.length;B++){const L=M[B],H=t.getContext(L,U);if(H!==null)return H}return null}try{const M={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:h,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ur}`),t.addEventListener("webglcontextlost",de,!1),t.addEventListener("webglcontextrestored",Ue,!1),t.addEventListener("webglcontextcreationerror",Oe,!1),C===null){const U=["webgl2","webgl","experimental-webgl"];if(c.isWebGL1Renderer===!0&&U.shift(),C=Te(U,M),C===null)throw Te(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}C.getShaderPrecisionFormat===void 0&&(C.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Se,ie,xe,Ne,fe,Ce,Je,nt,Qe,je,Fe,ke,ft,T,g,N,$,Q,se,Me,ce,G,he,pe;function ge(){Se=new eh(C),ie=new Yu(C,Se,e),Se.init(ie),G=new Fd(C,Se,ie),xe=new Id(C,Se,ie),Ne=new ih(C),fe=new Md,Ce=new Nd(C,Se,xe,fe,ie,G,Ne),Je=new ju(c),nt=new Qu(c),Qe=new pl(C,ie),he=new Xu(C,Se,Qe,ie),je=new th(C,Qe,Ne,he),Fe=new oh(C,je,Qe,Ne),se=new ah(C,ie,Ce),N=new Ku(fe),ke=new xd(c,Je,nt,Se,ie,he,N),ft=new Hd(c,fe),T=new Ed,g=new Rd(Se,ie),Q=new Wu(c,Je,nt,xe,Fe,f,h),$=new Dd(c,Fe,ie),pe=new Vd(C,Ne,ie,xe),Me=new qu(C,Se,Ne,ie),ce=new nh(C,Se,Ne,ie),Ne.programs=ke.programs,c.capabilities=ie,c.extensions=Se,c.properties=fe,c.renderLists=T,c.shadowMap=$,c.state=xe,c.info=Ne}ge();const le=new Gd(c,C);this.xr=le,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const M=Se.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Se.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return D},this.setPixelRatio=function(M){M!==void 0&&(D=M,this.setSize(j,Y,!1))},this.getSize=function(M){return M.set(j,Y)},this.setSize=function(M,U,B=!0){if(le.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=M,Y=U,t.width=Math.floor(M*D),t.height=Math.floor(U*D),B===!0&&(t.style.width=M+"px",t.style.height=U+"px"),this.setViewport(0,0,M,U)},this.getDrawingBufferSize=function(M){return M.set(j*D,Y*D).floor()},this.setDrawingBufferSize=function(M,U,B){j=M,Y=U,D=B,t.width=Math.floor(M*B),t.height=Math.floor(U*B),this.setViewport(0,0,M,U)},this.getCurrentViewport=function(M){return M.copy(X)},this.getViewport=function(M){return M.copy(J)},this.setViewport=function(M,U,B,L){M.isVector4?J.set(M.x,M.y,M.z,M.w):J.set(M,U,B,L),xe.viewport(X.copy(J).multiplyScalar(D).floor())},this.getScissor=function(M){return M.copy(W)},this.setScissor=function(M,U,B,L){M.isVector4?W.set(M.x,M.y,M.z,M.w):W.set(M,U,B,L),xe.scissor(v.copy(W).multiplyScalar(D).floor())},this.getScissorTest=function(){return k},this.setScissorTest=function(M){xe.setScissorTest(k=M)},this.setOpaqueSort=function(M){z=M},this.setTransparentSort=function(M){V=M},this.getClearColor=function(M){return M.copy(Q.getClearColor())},this.setClearColor=function(){Q.setClearColor.apply(Q,arguments)},this.getClearAlpha=function(){return Q.getClearAlpha()},this.setClearAlpha=function(){Q.setClearAlpha.apply(Q,arguments)},this.clear=function(M=!0,U=!0,B=!0){let L=0;M&&(L|=C.COLOR_BUFFER_BIT),U&&(L|=C.DEPTH_BUFFER_BIT),B&&(L|=C.STENCIL_BUFFER_BIT),C.clear(L)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",de,!1),t.removeEventListener("webglcontextrestored",Ue,!1),t.removeEventListener("webglcontextcreationerror",Oe,!1),T.dispose(),g.dispose(),fe.dispose(),Je.dispose(),nt.dispose(),Fe.dispose(),he.dispose(),pe.dispose(),ke.dispose(),le.dispose(),le.removeEventListener("sessionstart",ue),le.removeEventListener("sessionend",ze),te&&(te.dispose(),te=null),Ge.stop()};function de(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function Ue(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const M=Ne.autoReset,U=$.enabled,B=$.autoUpdate,L=$.needsUpdate,H=$.type;ge(),Ne.autoReset=M,$.enabled=U,$.autoUpdate=B,$.needsUpdate=L,$.type=H}function Oe(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function We(M){const U=M.target;U.removeEventListener("dispose",We),w(U)}function w(M){O(M),fe.remove(M)}function O(M){const U=fe.get(M).programs;U!==void 0&&(U.forEach(function(B){ke.releaseProgram(B)}),M.isShaderMaterial&&ke.releaseShaderCache(M))}this.renderBufferDirect=function(M,U,B,L,H,me){U===null&&(U=re);const ve=H.isMesh&&H.matrixWorld.determinant()<0,Ee=Oa(M,U,B,L,H);xe.setMaterial(L,ve);let be=B.index,we=1;L.wireframe===!0&&(be=je.getWireframeAttribute(B),we=2);const Re=B.drawRange,Le=B.attributes.position;let Be=Re.start*we,ot=(Re.start+Re.count)*we;me!==null&&(Be=Math.max(Be,me.start*we),ot=Math.min(ot,(me.start+me.count)*we)),be!==null?(Be=Math.max(Be,0),ot=Math.min(ot,be.count)):Le!=null&&(Be=Math.max(Be,0),ot=Math.min(ot,Le.count));const yt=ot-Be;if(yt<0||yt===1/0)return;he.setup(H,L,Ee,B,be);let tn,qe=Me;if(be!==null&&(tn=Qe.get(be),qe=ce,qe.setIndex(tn)),H.isMesh)L.wireframe===!0?(xe.setLineWidth(L.wireframeLinewidth*ae()),qe.setMode(C.LINES)):qe.setMode(C.TRIANGLES);else if(H.isLine){let De=L.linewidth;De===void 0&&(De=1),xe.setLineWidth(De*ae()),H.isLineSegments?qe.setMode(C.LINES):H.isLineLoop?qe.setMode(C.LINE_LOOP):qe.setMode(C.LINE_STRIP)}else H.isPoints?qe.setMode(C.POINTS):H.isSprite&&qe.setMode(C.TRIANGLES);if(H.isInstancedMesh)qe.renderInstances(Be,yt,H.count);else if(B.isInstancedBufferGeometry){const De=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,ki=Math.min(B.instanceCount,De);qe.renderInstances(Be,yt,ki)}else qe.render(Be,yt)},this.compile=function(M,U){function B(L,H,me){L.transparent===!0&&L.side===Xt&&L.forceSinglePass===!1?(L.side=_t,L.needsUpdate=!0,pi(L,H,me),L.side=en,L.needsUpdate=!0,pi(L,H,me),L.side=Xt):pi(L,H,me)}x=g.get(M),x.init(),p.push(x),M.traverseVisible(function(L){L.isLight&&L.layers.test(U.layers)&&(x.pushLight(L),L.castShadow&&x.pushShadow(L))}),x.setupLights(c.useLegacyLights),M.traverse(function(L){const H=L.material;if(H)if(Array.isArray(H))for(let me=0;me<H.length;me++){const ve=H[me];B(ve,M,L)}else B(H,M,L)}),p.pop(),x=null};let Z=null;function oe(M){Z&&Z(M)}function ue(){Ge.stop()}function ze(){Ge.start()}const Ge=new wa;Ge.setAnimationLoop(oe),typeof self<"u"&&Ge.setContext(self),this.setAnimationLoop=function(M){Z=M,le.setAnimationLoop(M),M===null?Ge.stop():Ge.start()},le.addEventListener("sessionstart",ue),le.addEventListener("sessionend",ze),this.render=function(M,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(le.cameraAutoUpdate===!0&&le.updateCamera(U),U=le.getCamera()),M.isScene===!0&&M.onBeforeRender(c,M,U,b),x=g.get(M,p.length),x.init(),p.push(x),F.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),ee.setFromProjectionMatrix(F),_e=this.localClippingEnabled,K=N.init(this.clippingPlanes,_e),m=T.get(M,_.length),m.init(),_.push(m),rt(M,U,0,c.sortObjects),m.finish(),c.sortObjects===!0&&m.sort(z,V),K===!0&&N.beginShadows();const B=x.state.shadowsArray;if($.render(B,M,U),K===!0&&N.endShadows(),this.info.autoReset===!0&&this.info.reset(),Q.render(m,M),x.setupLights(c.useLegacyLights),U.isArrayCamera){const L=U.cameras;for(let H=0,me=L.length;H<me;H++){const ve=L[H];Yt(m,M,ve,ve.viewport)}}else Yt(m,M,U);b!==null&&(Ce.updateMultisampleRenderTarget(b),Ce.updateRenderTargetMipmap(b)),M.isScene===!0&&M.onAfterRender(c,M,U),he.resetDefaultState(),R=-1,P=null,p.pop(),p.length>0?x=p[p.length-1]:x=null,_.pop(),_.length>0?m=_[_.length-1]:m=null};function rt(M,U,B,L){if(M.visible===!1)return;if(M.layers.test(U.layers)){if(M.isGroup)B=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(U);else if(M.isLight)x.pushLight(M),M.castShadow&&x.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||ee.intersectsSprite(M)){L&&q.setFromMatrixPosition(M.matrixWorld).applyMatrix4(F);const ve=Fe.update(M),Ee=M.material;Ee.visible&&m.push(M,ve,Ee,B,q.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||ee.intersectsObject(M))){M.isSkinnedMesh&&M.skeleton.frame!==Ne.render.frame&&(M.skeleton.update(),M.skeleton.frame=Ne.render.frame);const ve=Fe.update(M),Ee=M.material;if(L&&(ve.boundingSphere===null&&ve.computeBoundingSphere(),q.copy(ve.boundingSphere.center).applyMatrix4(M.matrixWorld).applyMatrix4(F)),Array.isArray(Ee)){const be=ve.groups;for(let we=0,Re=be.length;we<Re;we++){const Le=be[we],Be=Ee[Le.materialIndex];Be&&Be.visible&&m.push(M,ve,Be,B,q.z,Le)}}else Ee.visible&&m.push(M,ve,Ee,B,q.z,null)}}const me=M.children;for(let ve=0,Ee=me.length;ve<Ee;ve++)rt(me[ve],U,B,L)}function Yt(M,U,B,L){const H=M.opaque,me=M.transmissive,ve=M.transparent;x.setupLightsView(B),K===!0&&N.setGlobalState(c.clippingPlanes,B),me.length>0&&Xe(H,me,U,B),L&&xe.viewport(X.copy(L)),H.length>0&&St(H,U,B),me.length>0&&St(me,U,B),ve.length>0&&St(ve,U,B),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function Xe(M,U,B,L){if(te===null){const Ee=ie.isWebGL2;te=new vn(1024,1024,{generateMipmaps:!0,type:Se.has("EXT_color_buffer_half_float")?li:gn,minFilter:oi,samples:Ee&&a===!0?4:0})}const H=c.getRenderTarget();c.setRenderTarget(te),c.clear();const me=c.toneMapping;c.toneMapping=qt,St(M,B,L),Ce.updateMultisampleRenderTarget(te),Ce.updateRenderTargetMipmap(te);let ve=!1;for(let Ee=0,be=U.length;Ee<be;Ee++){const we=U[Ee],Re=we.object,Le=we.geometry,Be=we.material,ot=we.group;if(Be.side===Xt&&Re.layers.test(L.layers)){const yt=Be.side;Be.side=_t,Be.needsUpdate=!0,Dt(Re,B,L,Le,Be,ot),Be.side=yt,Be.needsUpdate=!0,ve=!0}}ve===!0&&(Ce.updateMultisampleRenderTarget(te),Ce.updateRenderTargetMipmap(te)),c.setRenderTarget(H),c.toneMapping=me}function St(M,U,B){const L=U.isScene===!0?U.overrideMaterial:null;for(let H=0,me=M.length;H<me;H++){const ve=M[H],Ee=ve.object,be=ve.geometry,we=L===null?ve.material:L,Re=ve.group;Ee.layers.test(B.layers)&&Dt(Ee,U,B,be,we,Re)}}function Dt(M,U,B,L,H,me){M.onBeforeRender(c,U,B,L,H,me),M.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),H.onBeforeRender(c,U,B,L,M,me),H.transparent===!0&&H.side===Xt&&H.forceSinglePass===!1?(H.side=_t,H.needsUpdate=!0,c.renderBufferDirect(B,U,L,H,M,me),H.side=en,H.needsUpdate=!0,c.renderBufferDirect(B,U,L,H,M,me),H.side=Xt):c.renderBufferDirect(B,U,L,H,M,me),M.onAfterRender(c,U,B,L,H,me)}function pi(M,U,B){U.isScene!==!0&&(U=re);const L=fe.get(M),H=x.state.lights,me=x.state.shadowsArray,ve=H.state.version,Ee=ke.getParameters(M,H.state,me,U,B),be=ke.getProgramCacheKey(Ee);let we=L.programs;L.environment=M.isMeshStandardMaterial?U.environment:null,L.fog=U.fog,L.envMap=(M.isMeshStandardMaterial?nt:Je).get(M.envMap||L.environment),we===void 0&&(M.addEventListener("dispose",We),we=new Map,L.programs=we);let Re=we.get(be);if(Re!==void 0){if(L.currentProgram===Re&&L.lightsStateVersion===ve)return Or(M,Ee),Re}else Ee.uniforms=ke.getUniforms(M),M.onBuild(B,Ee,c),M.onBeforeCompile(Ee,c),Re=ke.acquireProgram(Ee,be),we.set(be,Re),L.uniforms=Ee.uniforms;const Le=L.uniforms;(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Le.clippingPlanes=N.uniform),Or(M,Ee),L.needsLights=za(M),L.lightsStateVersion=ve,L.needsLights&&(Le.ambientLightColor.value=H.state.ambient,Le.lightProbe.value=H.state.probe,Le.directionalLights.value=H.state.directional,Le.directionalLightShadows.value=H.state.directionalShadow,Le.spotLights.value=H.state.spot,Le.spotLightShadows.value=H.state.spotShadow,Le.rectAreaLights.value=H.state.rectArea,Le.ltc_1.value=H.state.rectAreaLTC1,Le.ltc_2.value=H.state.rectAreaLTC2,Le.pointLights.value=H.state.point,Le.pointLightShadows.value=H.state.pointShadow,Le.hemisphereLights.value=H.state.hemi,Le.directionalShadowMap.value=H.state.directionalShadowMap,Le.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Le.spotShadowMap.value=H.state.spotShadowMap,Le.spotLightMatrix.value=H.state.spotLightMatrix,Le.spotLightMap.value=H.state.spotLightMap,Le.pointShadowMap.value=H.state.pointShadowMap,Le.pointShadowMatrix.value=H.state.pointShadowMatrix);const Be=Re.getUniforms(),ot=Oi.seqWithValue(Be.seq,Le);return L.currentProgram=Re,L.uniformsList=ot,Re}function Or(M,U){const B=fe.get(M);B.outputColorSpace=U.outputColorSpace,B.instancing=U.instancing,B.skinning=U.skinning,B.morphTargets=U.morphTargets,B.morphNormals=U.morphNormals,B.morphColors=U.morphColors,B.morphTargetsCount=U.morphTargetsCount,B.numClippingPlanes=U.numClippingPlanes,B.numIntersection=U.numClipIntersection,B.vertexAlphas=U.vertexAlphas,B.vertexTangents=U.vertexTangents,B.toneMapping=U.toneMapping}function Oa(M,U,B,L,H){U.isScene!==!0&&(U=re),Ce.resetTextureUnits();const me=U.fog,ve=L.isMeshStandardMaterial?U.environment:null,Ee=b===null?c.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:Ot,be=(L.isMeshStandardMaterial?nt:Je).get(L.envMap||ve),we=L.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Re=!!L.normalMap&&!!B.attributes.tangent,Le=!!B.morphAttributes.position,Be=!!B.morphAttributes.normal,ot=!!B.morphAttributes.color,yt=L.toneMapped?c.toneMapping:qt,tn=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,qe=tn!==void 0?tn.length:0,De=fe.get(L),ki=x.state.lights;if(K===!0&&(_e===!0||M!==P)){const gt=M===P&&L.id===R;N.setState(L,M,gt)}let et=!1;L.version===De.__version?(De.needsLights&&De.lightsStateVersion!==ki.state.version||De.outputColorSpace!==Ee||H.isInstancedMesh&&De.instancing===!1||!H.isInstancedMesh&&De.instancing===!0||H.isSkinnedMesh&&De.skinning===!1||!H.isSkinnedMesh&&De.skinning===!0||De.envMap!==be||L.fog===!0&&De.fog!==me||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==N.numPlanes||De.numIntersection!==N.numIntersection)||De.vertexAlphas!==we||De.vertexTangents!==Re||De.morphTargets!==Le||De.morphNormals!==Be||De.morphColors!==ot||De.toneMapping!==yt||ie.isWebGL2===!0&&De.morphTargetsCount!==qe)&&(et=!0):(et=!0,De.__version=L.version);let nn=De.currentProgram;et===!0&&(nn=pi(L,U,H));let Br=!1,$n=!1,Wi=!1;const lt=nn.getUniforms(),rn=De.uniforms;if(xe.useProgram(nn.program)&&(Br=!0,$n=!0,Wi=!0),L.id!==R&&(R=L.id,$n=!0),Br||P!==M){if(lt.setValue(C,"projectionMatrix",M.projectionMatrix),ie.logarithmicDepthBuffer&&lt.setValue(C,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),P!==M&&(P=M,$n=!0,Wi=!0),L.isShaderMaterial||L.isMeshPhongMaterial||L.isMeshToonMaterial||L.isMeshStandardMaterial||L.envMap){const gt=lt.map.cameraPosition;gt!==void 0&&gt.setValue(C,q.setFromMatrixPosition(M.matrixWorld))}(L.isMeshPhongMaterial||L.isMeshToonMaterial||L.isMeshLambertMaterial||L.isMeshBasicMaterial||L.isMeshStandardMaterial||L.isShaderMaterial)&&lt.setValue(C,"isOrthographic",M.isOrthographicCamera===!0),(L.isMeshPhongMaterial||L.isMeshToonMaterial||L.isMeshLambertMaterial||L.isMeshBasicMaterial||L.isMeshStandardMaterial||L.isShaderMaterial||L.isShadowMaterial||H.isSkinnedMesh)&&lt.setValue(C,"viewMatrix",M.matrixWorldInverse)}if(H.isSkinnedMesh){lt.setOptional(C,H,"bindMatrix"),lt.setOptional(C,H,"bindMatrixInverse");const gt=H.skeleton;gt&&(ie.floatVertexTextures?(gt.boneTexture===null&&gt.computeBoneTexture(),lt.setValue(C,"boneTexture",gt.boneTexture,Ce),lt.setValue(C,"boneTextureSize",gt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Xi=B.morphAttributes;if((Xi.position!==void 0||Xi.normal!==void 0||Xi.color!==void 0&&ie.isWebGL2===!0)&&se.update(H,B,nn),($n||De.receiveShadow!==H.receiveShadow)&&(De.receiveShadow=H.receiveShadow,lt.setValue(C,"receiveShadow",H.receiveShadow)),L.isMeshGouraudMaterial&&L.envMap!==null&&(rn.envMap.value=be,rn.flipEnvMap.value=be.isCubeTexture&&be.isRenderTargetTexture===!1?-1:1),$n&&(lt.setValue(C,"toneMappingExposure",c.toneMappingExposure),De.needsLights&&Ba(rn,Wi),me&&L.fog===!0&&ft.refreshFogUniforms(rn,me),ft.refreshMaterialUniforms(rn,L,D,Y,te),Oi.upload(C,De.uniformsList,rn,Ce)),L.isShaderMaterial&&L.uniformsNeedUpdate===!0&&(Oi.upload(C,De.uniformsList,rn,Ce),L.uniformsNeedUpdate=!1),L.isSpriteMaterial&&lt.setValue(C,"center",H.center),lt.setValue(C,"modelViewMatrix",H.modelViewMatrix),lt.setValue(C,"normalMatrix",H.normalMatrix),lt.setValue(C,"modelMatrix",H.matrixWorld),L.isShaderMaterial||L.isRawShaderMaterial){const gt=L.uniformsGroups;for(let qi=0,Ga=gt.length;qi<Ga;qi++)if(ie.isWebGL2){const zr=gt[qi];pe.update(zr,nn),pe.bind(zr,nn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return nn}function Ba(M,U){M.ambientLightColor.needsUpdate=U,M.lightProbe.needsUpdate=U,M.directionalLights.needsUpdate=U,M.directionalLightShadows.needsUpdate=U,M.pointLights.needsUpdate=U,M.pointLightShadows.needsUpdate=U,M.spotLights.needsUpdate=U,M.spotLightShadows.needsUpdate=U,M.rectAreaLights.needsUpdate=U,M.hemisphereLights.needsUpdate=U}function za(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return y},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(M,U,B){fe.get(M.texture).__webglTexture=U,fe.get(M.depthTexture).__webglTexture=B;const L=fe.get(M);L.__hasExternalTextures=!0,L.__hasExternalTextures&&(L.__autoAllocateDepthBuffer=B===void 0,L.__autoAllocateDepthBuffer||Se.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),L.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(M,U){const B=fe.get(M);B.__webglFramebuffer=U,B.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(M,U=0,B=0){b=M,S=U,y=B;let L=!0,H=null,me=!1,ve=!1;if(M){const be=fe.get(M);be.__useDefaultFramebuffer!==void 0?(xe.bindFramebuffer(C.FRAMEBUFFER,null),L=!1):be.__webglFramebuffer===void 0?Ce.setupRenderTarget(M):be.__hasExternalTextures&&Ce.rebindTextures(M,fe.get(M.texture).__webglTexture,fe.get(M.depthTexture).__webglTexture);const we=M.texture;(we.isData3DTexture||we.isDataArrayTexture||we.isCompressedArrayTexture)&&(ve=!0);const Re=fe.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(H=Re[U],me=!0):ie.isWebGL2&&M.samples>0&&Ce.useMultisampledRTT(M)===!1?H=fe.get(M).__webglMultisampledFramebuffer:H=Re,X.copy(M.viewport),v.copy(M.scissor),A=M.scissorTest}else X.copy(J).multiplyScalar(D).floor(),v.copy(W).multiplyScalar(D).floor(),A=k;if(xe.bindFramebuffer(C.FRAMEBUFFER,H)&&ie.drawBuffers&&L&&xe.drawBuffers(M,H),xe.viewport(X),xe.scissor(v),xe.setScissorTest(A),me){const be=fe.get(M.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+U,be.__webglTexture,B)}else if(ve){const be=fe.get(M.texture),we=U||0;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,be.__webglTexture,B||0,we)}R=-1},this.readRenderTargetPixels=function(M,U,B,L,H,me,ve){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=fe.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ve!==void 0&&(Ee=Ee[ve]),Ee){xe.bindFramebuffer(C.FRAMEBUFFER,Ee);try{const be=M.texture,we=be.format,Re=be.type;if(we!==Pt&&G.convert(we)!==C.getParameter(C.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Le=Re===li&&(Se.has("EXT_color_buffer_half_float")||ie.isWebGL2&&Se.has("EXT_color_buffer_float"));if(Re!==gn&&G.convert(Re)!==C.getParameter(C.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Re===dn&&(ie.isWebGL2||Se.has("OES_texture_float")||Se.has("WEBGL_color_buffer_float")))&&!Le){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=M.width-L&&B>=0&&B<=M.height-H&&C.readPixels(U,B,L,H,G.convert(we),G.convert(Re),me)}finally{const be=b!==null?fe.get(b).__webglFramebuffer:null;xe.bindFramebuffer(C.FRAMEBUFFER,be)}}},this.copyFramebufferToTexture=function(M,U,B=0){const L=Math.pow(2,-B),H=Math.floor(U.image.width*L),me=Math.floor(U.image.height*L);Ce.setTexture2D(U,0),C.copyTexSubImage2D(C.TEXTURE_2D,B,0,0,M.x,M.y,H,me),xe.unbindTexture()},this.copyTextureToTexture=function(M,U,B,L=0){const H=U.image.width,me=U.image.height,ve=G.convert(B.format),Ee=G.convert(B.type);Ce.setTexture2D(B,0),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,B.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,B.unpackAlignment),U.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,L,M.x,M.y,H,me,ve,Ee,U.image.data):U.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,L,M.x,M.y,U.mipmaps[0].width,U.mipmaps[0].height,ve,U.mipmaps[0].data):C.texSubImage2D(C.TEXTURE_2D,L,M.x,M.y,ve,Ee,U.image),L===0&&B.generateMipmaps&&C.generateMipmap(C.TEXTURE_2D),xe.unbindTexture()},this.copyTextureToTexture3D=function(M,U,B,L,H=0){if(c.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const me=M.max.x-M.min.x+1,ve=M.max.y-M.min.y+1,Ee=M.max.z-M.min.z+1,be=G.convert(L.format),we=G.convert(L.type);let Re;if(L.isData3DTexture)Ce.setTexture3D(L,0),Re=C.TEXTURE_3D;else if(L.isDataArrayTexture)Ce.setTexture2DArray(L,0),Re=C.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,L.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,L.unpackAlignment);const Le=C.getParameter(C.UNPACK_ROW_LENGTH),Be=C.getParameter(C.UNPACK_IMAGE_HEIGHT),ot=C.getParameter(C.UNPACK_SKIP_PIXELS),yt=C.getParameter(C.UNPACK_SKIP_ROWS),tn=C.getParameter(C.UNPACK_SKIP_IMAGES),qe=B.isCompressedTexture?B.mipmaps[0]:B.image;C.pixelStorei(C.UNPACK_ROW_LENGTH,qe.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,qe.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,M.min.x),C.pixelStorei(C.UNPACK_SKIP_ROWS,M.min.y),C.pixelStorei(C.UNPACK_SKIP_IMAGES,M.min.z),B.isDataTexture||B.isData3DTexture?C.texSubImage3D(Re,H,U.x,U.y,U.z,me,ve,Ee,be,we,qe.data):B.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),C.compressedTexSubImage3D(Re,H,U.x,U.y,U.z,me,ve,Ee,be,qe.data)):C.texSubImage3D(Re,H,U.x,U.y,U.z,me,ve,Ee,be,we,qe),C.pixelStorei(C.UNPACK_ROW_LENGTH,Le),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Be),C.pixelStorei(C.UNPACK_SKIP_PIXELS,ot),C.pixelStorei(C.UNPACK_SKIP_ROWS,yt),C.pixelStorei(C.UNPACK_SKIP_IMAGES,tn),H===0&&L.generateMipmaps&&C.generateMipmap(Re),xe.unbindTexture()},this.initTexture=function(M){M.isCubeTexture?Ce.setTextureCube(M,0):M.isData3DTexture?Ce.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?Ce.setTexture2DArray(M,0):Ce.setTexture2D(M,0),xe.unbindTexture()},this.resetState=function(){S=0,y=0,b=null,xe.reset(),he.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ye?pn:fa}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===pn?ye:Ot}}class Wd extends Ua{}Wd.prototype.isWebGL1Renderer=!0;class Xd extends dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}const na={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class qd{constructor(e,t,n){const r=this;let s=!1,o=0,a=0,h;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return h?h(u):u},this.setURLModifier=function(u){return h=u,this},this.addHandler=function(u,d){return l.push(u,d),this},this.removeHandler=function(u){const d=l.indexOf(u);return d!==-1&&l.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=l.length;d<f;d+=2){const m=l[d],x=l[d+1];if(m.global&&(m.lastIndex=0),m.test(u))return x}return null}}}const Yd=new qd;class Da{constructor(e){this.manager=e!==void 0?e:Yd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class Kd extends Da{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=na.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=ci("img");function h(){u(),na.add(e,this),t&&t(this),s.manager.itemEnd(e)}function l(d){u(),r&&r(d),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",h,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",h,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class jd extends Da{constructor(e){super(e)}load(e,t,n,r){const s=new ht,o=new Kd(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class Zd{constructor(e,t,n=0,r=1/0){this.ray=new xa(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Ir,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Pr(e,this,n,t),n.sort(ia),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)Pr(e[r],this,n,t);return n.sort(ia),n}}function ia(i,e){return i.distance-e.distance}function Pr(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){const r=i.children;for(let s=0,o=r.length;s<o;s++)Pr(r[s],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ur}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ur);const Jt={PLUS:"plus",MINUS:"minus",NONE:"none"};class $d{constructor(e){Ie(this,"eventHandler",{onClick:this.onClick.bind(this)});Ie(this,"amount",Jt.NONE);this.btns=e,this.setEvents()}onClick(e){e.currentTarget&&e.currentTarget instanceof HTMLElement&&(this.amount=e.currentTarget.dataset.scale==="plus"?Jt.PLUS:Jt.MINUS)}reset(){this.amount=Jt.NONE}setEvents(){this.btns.forEach(e=>{e.addEventListener("click",this.eventHandler.onClick)})}}const ri={pixelRatio:window.devicePixelRatio,mapImg:"./map.jpg",pinURL:"./pin.png",pinSize:new He(20,20)},Jd=[{position:new I(200,10,0),id:1},{position:new I(100,100,0),id:2}],Qd={[Jt.NONE]:1,[Jt.PLUS]:2,[Jt.MINUS]:.5};class ef extends Ua{constructor(e){super({antialias:!0,canvas:e,alpha:!0}),this.setPixelRatio(ri.pixelRatio)}onResize(e,t){this.setSize(e,t)}}class tf extends Tt{constructor(e,t){super(50,e/t,1,5e3)}onResize(e,t){this.aspect=e/t;const n=this.fov/2*(Math.PI/180);this.position.z=t/2/Math.tan(n),this.updateProjectionMatrix()}}const zn=class extends jd{constructor(){super()}static getInstance(){return zn.Instance||(zn.Instance=new zn),zn.Instance}async customLoad(e){const t=await this.loadAsync(e);return t.magFilter=pt,t.minFilter=pt,t}};let si=zn;Ie(si,"Instance");class nf{constructor(e){Ie(this,"eventHandler",{onPointerDown:this.onPointerDown.bind(this),onPointerMove:this.onPointerMove.bind(this),onPointerEnd:this.onPointerEnd.bind(this),onClick:this.onClicked.bind(this)});Ie(this,"prevPostion",{x:0,y:0});Ie(this,"amount",{x:0,y:0});Ie(this,"clicked",{x:0,y:0,isClicked:!1});Ie(this,"isDraged",!1);this.target=e,this.setEvetns()}onPointerDown(e){this.isDraged=!0,this.prevPostion={x:e.clientX,y:e.clientY}}onPointerMove(e){this.isDraged&&(this.amount={x:e.clientX-this.prevPostion.x,y:this.prevPostion.y-e.clientY},this.prevPostion={x:e.clientX,y:e.clientY})}onPointerEnd(e){console.log("end?"),this.isDraged=!1,this.amount={x:0,y:0}}onClicked(e){console.log(e),this.clicked={x:e.clientX/window.innerWidth*2-1,y:e.clientY/window.innerHeight*-2+1,isClicked:!0}}reset(){this.clicked.isClicked=!1}setEvetns(){this.target.addEventListener("pointerdown",this.eventHandler.onPointerDown),this.target.addEventListener("pointermove",this.eventHandler.onPointerMove),this.target.addEventListener("pointerup",this.eventHandler.onPointerEnd),this.target.addEventListener("pointerout",this.eventHandler.onPointerEnd),this.target.addEventListener("click",this.eventHandler.onClick)}}var rf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function sf(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Ia={exports:{}};(function(i,e){(function(t,n){i.exports=n()})(rf,function(){var t=0;function n(_){return"__private_"+t+++"_"+_}function r(_,p){if(!Object.prototype.hasOwnProperty.call(_,p))throw new TypeError("attempted to use private field on non-instance");return _}function s(){}s.prototype={on:function(_,p,c){var E=this.e||(this.e={});return(E[_]||(E[_]=[])).push({fn:p,ctx:c}),this},once:function(_,p,c){var E=this;function S(){E.off(_,S),p.apply(c,arguments)}return S._=p,this.on(_,S,c)},emit:function(_){for(var p=[].slice.call(arguments,1),c=((this.e||(this.e={}))[_]||[]).slice(),E=0,S=c.length;E<S;E++)c[E].fn.apply(c[E].ctx,p);return this},off:function(_,p){var c=this.e||(this.e={}),E=c[_],S=[];if(E&&p)for(var y=0,b=E.length;y<b;y++)E[y].fn!==p&&E[y].fn._!==p&&S.push(E[y]);return S.length?c[_]=S:delete c[_],this}};var o=s;o.TinyEmitter=s;var a,h="virtualscroll",l=n("options"),u=n("el"),d=n("emitter"),f=n("event"),m=n("touchStart"),x=n("bodyTouchAction");return function(){function _(c){var E=this;Object.defineProperty(this,l,{writable:!0,value:void 0}),Object.defineProperty(this,u,{writable:!0,value:void 0}),Object.defineProperty(this,d,{writable:!0,value:void 0}),Object.defineProperty(this,f,{writable:!0,value:void 0}),Object.defineProperty(this,m,{writable:!0,value:void 0}),Object.defineProperty(this,x,{writable:!0,value:void 0}),this._onWheel=function(S){var y=r(E,l)[l],b=r(E,f)[f];b.deltaX=S.wheelDeltaX||-1*S.deltaX,b.deltaY=S.wheelDeltaY||-1*S.deltaY,a.isFirefox&&S.deltaMode===1&&(b.deltaX*=y.firefoxMultiplier,b.deltaY*=y.firefoxMultiplier),b.deltaX*=y.mouseMultiplier,b.deltaY*=y.mouseMultiplier,E._notify(S)},this._onMouseWheel=function(S){var y=r(E,f)[f];y.deltaX=S.wheelDeltaX?S.wheelDeltaX:0,y.deltaY=S.wheelDeltaY?S.wheelDeltaY:S.wheelDelta,E._notify(S)},this._onTouchStart=function(S){var y=S.targetTouches?S.targetTouches[0]:S;r(E,m)[m].x=y.pageX,r(E,m)[m].y=y.pageY},this._onTouchMove=function(S){var y=r(E,l)[l];y.preventTouch&&!S.target.classList.contains(y.unpreventTouchClass)&&S.preventDefault();var b=r(E,f)[f],R=S.targetTouches?S.targetTouches[0]:S;b.deltaX=(R.pageX-r(E,m)[m].x)*y.touchMultiplier,b.deltaY=(R.pageY-r(E,m)[m].y)*y.touchMultiplier,r(E,m)[m].x=R.pageX,r(E,m)[m].y=R.pageY,E._notify(S)},this._onKeyDown=function(S){var y=r(E,f)[f];y.deltaX=y.deltaY=0;var b=window.innerHeight-40;switch(S.keyCode){case 37:case 38:y.deltaY=r(E,l)[l].keyStep;break;case 39:case 40:y.deltaY=-r(E,l)[l].keyStep;break;case 32:y.deltaY=b*(S.shiftKey?1:-1);break;default:return}E._notify(S)},r(this,u)[u]=window,c&&c.el&&(r(this,u)[u]=c.el,delete c.el),a||(a={hasWheelEvent:"onwheel"in document,hasMouseWheelEvent:"onmousewheel"in document,hasTouch:"ontouchstart"in document,hasTouchWin:navigator.msMaxTouchPoints&&navigator.msMaxTouchPoints>1,hasPointer:!!window.navigator.msPointerEnabled,hasKeyDown:"onkeydown"in document,isFirefox:navigator.userAgent.indexOf("Firefox")>-1}),r(this,l)[l]=Object.assign({mouseMultiplier:1,touchMultiplier:2,firefoxMultiplier:15,keyStep:120,preventTouch:!1,unpreventTouchClass:"vs-touchmove-allowed",useKeyboard:!0,useTouch:!0},c),r(this,d)[d]=new o,r(this,f)[f]={y:0,x:0,deltaX:0,deltaY:0},r(this,m)[m]={x:null,y:null},r(this,x)[x]=null,r(this,l)[l].passive!==void 0&&(this.listenerOptions={passive:r(this,l)[l].passive})}var p=_.prototype;return p._notify=function(c){var E=r(this,f)[f];E.x+=E.deltaX,E.y+=E.deltaY,r(this,d)[d].emit(h,{x:E.x,y:E.y,deltaX:E.deltaX,deltaY:E.deltaY,originalEvent:c})},p._bind=function(){a.hasWheelEvent&&r(this,u)[u].addEventListener("wheel",this._onWheel,this.listenerOptions),a.hasMouseWheelEvent&&r(this,u)[u].addEventListener("mousewheel",this._onMouseWheel,this.listenerOptions),a.hasTouch&&r(this,l)[l].useTouch&&(r(this,u)[u].addEventListener("touchstart",this._onTouchStart,this.listenerOptions),r(this,u)[u].addEventListener("touchmove",this._onTouchMove,this.listenerOptions)),a.hasPointer&&a.hasTouchWin&&(r(this,x)[x]=document.body.style.msTouchAction,document.body.style.msTouchAction="none",r(this,u)[u].addEventListener("MSPointerDown",this._onTouchStart,!0),r(this,u)[u].addEventListener("MSPointerMove",this._onTouchMove,!0)),a.hasKeyDown&&r(this,l)[l].useKeyboard&&document.addEventListener("keydown",this._onKeyDown)},p._unbind=function(){a.hasWheelEvent&&r(this,u)[u].removeEventListener("wheel",this._onWheel),a.hasMouseWheelEvent&&r(this,u)[u].removeEventListener("mousewheel",this._onMouseWheel),a.hasTouch&&(r(this,u)[u].removeEventListener("touchstart",this._onTouchStart),r(this,u)[u].removeEventListener("touchmove",this._onTouchMove)),a.hasPointer&&a.hasTouchWin&&(document.body.style.msTouchAction=r(this,x)[x],r(this,u)[u].removeEventListener("MSPointerDown",this._onTouchStart,!0),r(this,u)[u].removeEventListener("MSPointerMove",this._onTouchMove,!0)),a.hasKeyDown&&r(this,l)[l].useKeyboard&&document.removeEventListener("keydown",this._onKeyDown)},p.on=function(c,E){r(this,d)[d].on(h,c,E);var S=r(this,d)[d].e;S&&S[h]&&S[h].length===1&&this._bind()},p.off=function(c,E){r(this,d)[d].off(h,c,E);var S=r(this,d)[d].e;(!S[h]||S[h].length<=0)&&this._unbind()},p.destroy=function(){r(this,d)[d].off(),this._unbind()},_}()})})(Ia);var af=Ia.exports;const of=sf(af);let ra=0;class lf{constructor(e){Ie(this,"scroller");Ie(this,"amount",1);this.scroller=new of({el:e}),this.scroller.on(this.on.bind(this))}on(e){const t=Math.min(Math.max(1+e.deltaY*.001,.1),2);this.amount=t,clearTimeout(ra),ra=setTimeout(()=>{this.amount=1},100)}}const Gn=class{constructor(e,t){Ie(this,"position",new I);Ie(this,"rotation",new I);Ie(this,"scale",new I);Ie(this,"inputer");Ie(this,"inputAmount",{move:{x:0,y:0},scale:Jt.NONE,clicked:{x:0,y:0,isClicked:!1},scaleWheel:1});this.target=e,this.scaleBtns=t,this.inputer={mouse:new nf(e),scaleBtn:new $d(t),scroller:new lf(e)}}static get Instance(){if(!Gn._Instance){const e=document.querySelector("canvas"),t=document.querySelectorAll("div.scaleBtn");Gn._Instance=new Gn(e,t)}return Gn._Instance}update(){this.inputAmount={move:{x:this.inputer.mouse.amount.x,y:this.inputer.mouse.amount.y},scale:this.inputer.scaleBtn.amount,clicked:this.inputer.mouse.clicked,scaleWheel:this.inputer.scroller.amount}}resetFrame(){this.inputer.scaleBtn.reset(),this.inputer.mouse.reset()}};let ai=Gn;Ie(ai,"_Instance");class cf extends dt{constructor(){super();Ie(this,"pins",Jd.map(t=>({position:t.position,onClick:()=>{alert(t.id)},id:t.id,mesh:new Ut,name:""})))}async init(){const t=await si.getInstance().customLoad(ri.pinURL),n=new Hi({map:t,transparent:!0});this.pins=this.pins.map(r=>{const s=new Ut(new Kn(ri.pinSize.x,ri.pinSize.y),n);return s.name=`pin-${r.id}`,s.position.copy(r.position),{position:r.position,onClick:r.onClick,id:r.id,mesh:s,name:`pin-${r.id}`}}),this.add(...this.pins.map(r=>r.mesh))}onClickPins(t){const n=this.pins.find(r=>r.name===t);n&&n.onClick()}}let uf=class extends dt{constructor(t){super();Ie(this,"mapSize",{w:0,h:0});Ie(this,"mapMesh",new Ut);Ie(this,"mapTexture",new ht);Ie(this,"mapMatrix",new Ke);Ie(this,"mapTranslateMatrix4",new Ke);Ie(this,"mapScaleMatrix4",new Ke);Ie(this,"inputs",ai.Instance);Ie(this,"pins",new cf);this.scene=t,this.add(this.mapMesh),this.add(this.pins),this.scene.add(this)}async createMap(t,n){const s=await si.getInstance().customLoad(ri.mapImg),o=Math.min(t/s.image.width,n/s.image.height);this.mapSize={w:s.image.width*o,h:s.image.height*o};const a=new Kn(this.mapSize.w,this.mapSize.h);this.mapTexture=s;const h=new Hi({map:this.mapTexture});this.mapMesh.geometry=a,this.mapMesh.material=h,this.mapMesh.applyMatrix4(this.mapMatrix),this.add(this.mapMesh),await this.pins.init()}onResize(t,n){const r=this.mapTexture,s=Math.min(t/r.image.width,n/r.image.height);this.mapSize={w:r.image.width*s,h:r.image.height*s},this.mapMesh.geometry.dispose(),this.mapMesh.geometry=new Kn(this.mapSize.w,this.mapSize.h)}onUpdate(){this.mapTranslateMatrix4.makeTranslation(this.inputs.inputAmount.move.x,this.inputs.inputAmount.move.y,0);const t=this.inputs.inputAmount.scaleWheel,n=Qd[this.inputs.inputAmount.scale]*t;this.mapScaleMatrix4.makeScale(n,n,1),this.mapMatrix.multiply(this.mapTranslateMatrix4).multiply(this.mapScaleMatrix4),this.applyMatrix4(this.mapMatrix),this.mapMatrix.identity(),this.mapTranslateMatrix4.identity(),this.mapScaleMatrix4.identity()}clickedPin(t){this.pins.onClickPins(t)}get clickObjects(){return this.pins.children}};const sa=new He;class hf{constructor(e,t){Ie(this,"renderer");Ie(this,"camera");Ie(this,"scene");Ie(this,"map");Ie(this,"inputs",ai.Instance);Ie(this,"isLoaded",!1);Ie(this,"raycaster",new Zd);this.canvas=e,this.wrap=t,this.renderer=new ef(e),this.camera=new tf(t.clientWidth,t.clientHeight),this.scene=new Xd,this.map=new uf(this.scene)}async init(){await this.map.createMap(this.wrap.clientWidth,this.wrap.clientHeight),this.isLoaded=!0}onResize(){this.renderer.onResize(this.wrap.clientWidth,this.wrap.clientHeight),this.camera.onResize(this.wrap.clientWidth,this.wrap.clientHeight),this.isLoaded&&this.map.onResize(this.wrap.clientWidth,this.wrap.clientHeight)}onUpdate(e){if(this.isLoaded){if(this.inputs.update(),this.inputs.inputAmount.clicked.isClicked){sa.set(this.inputs.inputAmount.clicked.x,this.inputs.inputAmount.clicked.y),this.raycaster.setFromCamera(sa,this.camera);const t=this.raycaster.intersectObjects(this.map.clickObjects);t&&t.length&&this.map.clickedPin(t[0].object.name)}this.map.onUpdate(),this.inputs.resetFrame()}this.renderer.render(this.scene,this.camera)}}const df=document.querySelector("canvas"),Na=document.querySelector("div.canvas"),Fr=new hf(df,Na);Fr.init();const ff=()=>{Fr.onResize()},pf=new ResizeObserver(ff);pf.observe(Na);let aa=0;const Fa=i=>{Fr.onUpdate(i-aa),aa=i,requestAnimationFrame(Fa)};requestAnimationFrame(Fa);
