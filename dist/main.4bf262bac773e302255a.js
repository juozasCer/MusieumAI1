(()=>{"use strict";var e,t={855:(e,t,n)=>{n.d(t,{U:()=>P});var o=n(964),i=n(318),a=n(888),r=n(44),s=n(302);const d=new o.Pq0,l=new o.Pq0;let c=!1,h=!1,w=!1,m=!1;document.addEventListener("keydown",(e=>{switch(e.code){case"KeyW":c=!0;break;case"KeyA":w=!0;break;case"KeyS":h=!0;break;case"KeyD":m=!0}}),!1),document.addEventListener("keyup",(e=>{switch(e.code){case"KeyW":c=!1;break;case"KeyA":w=!1;break;case"KeyS":h=!1;break;case"KeyD":m=!1}}),!1);const p=document.createElement("canvas");p.width=4096,p.height=2048;const u=p.getContext("2d"),g="アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッンABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",y=Math.max(1,Math.floor(p.width/12)),f=Array(y).fill(1);let x=0;const v=new o.GOR(p);v.wrapS=o.GJx,v.wrapT=o.ghU,v.repeat.set(1,1),v.minFilter=o.NZq,v.magFilter=o.k6q;const b=new o.Gu$(500,64,64),k=new o.V9B({map:v,side:o.hsX}),E=new o.eaF(b,k);var M=n(656);s.g.init();const F=new o.Z58;F.background=new o.Q1f(0);const z=new o.ubm(70,window.innerWidth/window.innerHeight,.1,1e3);z.position.set(0,1.6,0);const P=new o.JeP({antialias:!0});P.setSize(window.innerWidth,window.innerHeight),P.setPixelRatio(window.devicePixelRatio),P.shadowMap.enabled=!0,P.shadowMap.type=o.Wk7,document.body.appendChild(P.domElement);const I=new i.Z(z,P.domElement);F.add(I.getObject());let S=!1,O=!1;document.addEventListener("click",(()=>{O&&!I.isLocked&&setTimeout((()=>{I.lock()}),300)}),!1),I.addEventListener("lock",(()=>{const e=document.getElementById("instructions"),t=document.getElementById("blocker");e&&t&&(e.style.display="none",t.style.display="none"),S||(function(e){v.anisotropy=P.capabilities.getMaxAnisotropy(),e.add(E)}(F),S=!0)})),I.addEventListener("unlock",(()=>{const e=document.getElementById("instructions"),t=document.getElementById("blocker");e&&t&&(t.style.display="block",e.style.display="")}));const j=new o.KPJ,A=document.getElementById("loading-screen"),L=document.getElementById("progress-bar");let _=0,B=0;j.onStart=function(e,t,n){console.log(`Started loading: ${e}.`),A.style.display="flex",_+=1},j.onLoad=function(){console.log("All assets loaded."),A.style.display="none";const e=document.getElementById("blocker");e&&(e.style.display="block"),O=!0},j.onProgress=function(e,t,n){B+=1;const o=B/_*2.2;L.style.width=`${o}%`},j.onError=function(e){console.error(`There was an error loading ${e}`)};const T=new o.Tap(j),q=new a.B(j);class H{constructor(e,t,n,i,a,r=0,s=t){this.light=new o.HiM(e,t,n),this.light.position.copy(i),F.add(this.light),this.speed=a,this.minIntensity=r,this.maxIntensity=s,this.helper=new o.F1l(this.light,1)}update(e){this.light.intensity=this.minIntensity+(this.maxIntensity-this.minIntensity)*(Math.sin(e*this.speed)+1)/2}}const K=[];function W(e={x:0,y:0,z:0},t={width:2,height:8},n=16777215,i=8,a={x:0,y:0,z:0}){const s=new o.ure(n,i,t.width,t.height);return s.position.set(e.x,e.y,e.z),s.lookAt(a.x,a.y,a.z),F.add(s),new r.g(s),s}function R(e,t,n){const i=document.createElement("video");i.src=n,i.loop=!0,i.muted=!0,i.load(),i.addEventListener("canplaythrough",(()=>{i.play();const n=new o.Nv2(i);n.minFilter=o.k6q,n.magFilter=o.k6q,n.format=o.HIg,n.flipY=!1;const a=new o._4j({map:n,emissive:new o.Q1f(16777215),emissiveIntensity:.1});e.traverse((e=>{e instanceof o.eaF&&e.name===t&&(e.material=a)}))})),i.addEventListener("error",(e=>{console.error(`Error loading video ${n}:`,e)}))}function C(e){e.wrapS=e.wrapT=o.GJx,e.repeat.set(100,100)}W({x:-2.5,y:5,z:-17},{width:.5,height:16},16777215,40,{x:-2.5,y:0,z:-17}),W({x:2.5,y:5,z:-17},{width:.5,height:16},16777215,40,{x:2.5,y:0,z:-17}),K.push(new H(255,2,10,new o.Pq0(-3,1.5,-49.5),.2,0,10)),K.push(new H(16711935,20,15,new o.Pq0(0,7,0),.2,0,10)),K.push(new H(255,20,10,new o.Pq0(0,5,0),1,0,10)),function(){const e=new o.bdM(80,80),t=new M.J(e,{clipBias:.003,textureWidth:window.innerWidth*window.devicePixelRatio,textureHeight:window.innerHeight*window.devicePixelRatio,color:7829367});t.rotation.x=-Math.PI/2,t.position.y=-.01,F.add(t)}(),function(){const e=T.load("./textures/blackTiles/rubber_tiles_diff_4k.jpg"),t=T.load("./textures/blackTiles/rubber_tiles_nor_gl_4k.jpg"),n=new o.bdM(80,80,512,512),i=new o._4j({map:e,normalMap:t,displacementScale:.1,metalness:.9,roughness:0,transparent:!0,opacity:.5});C(i.map),C(i.normalMap);const a=new o.eaF(n,i);a.receiveShadow=!0,a.rotation.x=-Math.PI/2,F.add(a)}(),q.load("./models/MAP11.glb",(e=>{const t=e.scene;t.position.set(0,0,0),t.scale.set(1.5,1.5,1.5),t.traverse((e=>{e instanceof o.eaF&&(console.log(e.name),e.castShadow=!0,e.receiveShadow=!0)})),R(t,"Screenshot_2024-11-14_125839","/media/video.mp4"),R(t,"Object_0010_1","/media/act.mp4"),t.traverse((e=>{e instanceof o.eaF&&e.name})),F.add(t)}),void 0,(e=>{console.error("An error occurred while loading the GLB model:",e)}));const N=new o.zD7,G=document.getElementById("loading-matrix"),J=G.getContext("2d");function D(){G.width=2048,G.height=window.innerHeight}D(),window.addEventListener("resize",D);const U="アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッンABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",Z=Math.max(1,Math.floor(G.width/16)),$=Array(Z).fill(1);let Q=0;!function e(){J.fillStyle="rgba(0, 0, 0, 0.03)",J.fillRect(0,0,G.width,G.height),J.fillStyle="#FF00FF",J.font="16px CustomFont",Q%2==0&&$.forEach(((e,t)=>{const n=U.charAt(Math.floor(119*Math.random())),o=16*t;J.fillText(n,o,16*e),$[t]++,16*e>G.height&&Math.random()>.975&&($[t]=0)})),Q++,requestAnimationFrame(e)}(),function e(){requestAnimationFrame(e);const t=N.getDelta(),n=N.getElapsedTime();if(!0===I.isLocked){d.x-=10*d.x*t,d.z-=10*d.z*t,l.z=Number(c)-Number(h),l.x=Number(m)-Number(w),l.normalize();const e=50;(c||h)&&(d.z-=l.z*e*t),(w||m)&&(d.x-=l.x*e*t),I.moveRight(-d.x*t),I.moveForward(-d.z*t);const n=I.getObject().position;n.x=o.cj9.clamp(n.x,-2.5,2.5),n.z=o.cj9.clamp(n.z,-23,2)}S&&(u.fillStyle="rgba(0, 0, 0, 0.05)",u.fillRect(0,0,p.width,p.height),u.fillStyle="#FF00FF",u.font="12px monospace",x%3==0&&f.forEach(((e,t)=>{const n=g.charAt(Math.floor(119*Math.random())),o=12*t;u.fillText(n,o,12*e),f[t]++,12*e>p.height&&Math.random()>.975&&(f[t]=0)})),x++,v.needsUpdate=!0,E.position.copy(z.position)),K.forEach(((e,t)=>{e.update(n)})),P.render(F,z)}(),window.addEventListener("resize",(function(){z.aspect=window.innerWidth/window.innerHeight,z.updateProjectionMatrix(),P.setSize(window.innerWidth,window.innerHeight),D()}))}},n={};function o(e){var i=n[e];if(void 0!==i)return i.exports;var a=n[e]={exports:{}};return t[e](a,a.exports,o),a.exports}o.m=t,e=[],o.O=(t,n,i,a)=>{if(!n){var r=1/0;for(c=0;c<e.length;c++){for(var[n,i,a]=e[c],s=!0,d=0;d<n.length;d++)(!1&a||r>=a)&&Object.keys(o.O).every((e=>o.O[e](n[d])))?n.splice(d--,1):(s=!1,a<r&&(r=a));if(s){e.splice(c--,1);var l=i();void 0!==l&&(t=l)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[n,i,a]},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={792:0};o.O.j=t=>0===e[t];var t=(t,n)=>{var i,a,[r,s,d]=n,l=0;if(r.some((t=>0!==e[t]))){for(i in s)o.o(s,i)&&(o.m[i]=s[i]);if(d)var c=d(o)}for(t&&t(n);l<r.length;l++)a=r[l],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return o.O(c)},n=self.webpackChunkthreejs_example=self.webpackChunkthreejs_example||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var i=o.O(void 0,[526],(()=>o(855)));i=o.O(i)})();