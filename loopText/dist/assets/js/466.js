(self.webpackChunkplayground=self.webpackChunkplayground||[]).push([[466],{466:function(e){var t;e.exports=((t=function(){function e(e){return a.appendChild(e.dom),e}function l(e){for(var t=0;t<a.children.length;t++)a.children[t].style.display=t===e?"block":"none";n=e}var n=0,a=document.createElement("div");a.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",a.addEventListener("click",(function(e){e.preventDefault(),l(++n%a.children.length)}),!1);var i=(performance||Date).now(),o=i,r=0,f=e(new t.Panel("FPS","#0ff","#002")),c=e(new t.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var d=e(new t.Panel("MB","#f08","#201"));return l(0),{REVISION:16,dom:a,addPanel:e,showPanel:l,begin:function(){i=(performance||Date).now()},end:function(){r++;var e=(performance||Date).now();if(c.update(e-i,200),e>o+1e3&&(f.update(1e3*r/(e-o),100),o=e,r=0,d)){var t=performance.memory;d.update(t.usedJSHeapSize/1048576,t.jsHeapSizeLimit/1048576)}return e},update:function(){i=this.end()},domElement:a,setMode:l}}).Panel=function(e,t,l){var n=1/0,a=0,i=Math.round,o=i(window.devicePixelRatio||1),r=80*o,f=48*o,c=3*o,d=2*o,p=3*o,u=15*o,s=74*o,h=30*o,m=document.createElement("canvas");m.width=r,m.height=f,m.style.cssText="width:80px;height:48px";var v=m.getContext("2d");return v.font="bold "+9*o+"px Helvetica,Arial,sans-serif",v.textBaseline="top",v.fillStyle=l,v.fillRect(0,0,r,f),v.fillStyle=t,v.fillText(e,c,d),v.fillRect(p,u,s,h),v.fillStyle=l,v.globalAlpha=.9,v.fillRect(p,u,s,h),{dom:m,update:function(f,y){n=Math.min(n,f),a=Math.max(a,f),v.fillStyle=l,v.globalAlpha=1,v.fillRect(0,0,r,u),v.fillStyle=t,v.fillText(i(f)+" "+e+" ("+i(n)+"-"+i(a)+")",c,d),v.drawImage(m,p+o,u,s-o,h,p,u,s-o,h),v.fillRect(p+s-o,u,o,h),v.fillStyle=l,v.globalAlpha=.9,v.fillRect(p+s-o,u,o,i((1-f/y)*h))}}},t)}}]);