if(!self.define){let e,n={};const i=(i,s)=>(i=new URL(i+".js",s).href,n[i]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=n,document.head.appendChild(e)}else e=i,importScripts(i),n()})).then((()=>{let e=n[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(s,o)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(n[r])return;let c={};const f=e=>i(e,r),t={module:{uri:r},exports:c,require:f};n[r]=Promise.all(s.map((e=>t[e]||f(e)))).then((e=>(o(...e),c)))}}define(["./workbox-9277b196"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"css/main.css",revision:"e9918eacf899ffe20f2a1270c3e1a184"},{url:"css/vendors~main.css",revision:"42e03fe1c178bb62eeaea224f67ce833"},{url:"fonts/PingFangSC-Regular.woff2",revision:"cc0de053a64f144201b145765ab12db7"},{url:"fonts/PingFangSC-Semibold.woff2",revision:"5cb39b4df629110973199fc237fe04ca"},{url:"fonts/element-icons.ttf",revision:"732389ded34cb9c52dd88271f1345af9"},{url:"fonts/element-icons.woff",revision:"535877f50039c0cb49a6196a5b7517cd"},{url:"images/banner.jpg",revision:"d5dc4930e9e0f47240cd48e99cb8edca"},{url:"images/icon/logo.png",revision:"82b9c7a5a3f405032b1db71a25f67021"},{url:"index.html",revision:"fcb03d190366c03e7391bbf7d46fa5da"},{url:"js/main.ea24a291e6c9.js",revision:null},{url:"js/vendors~main.ea24a291e6c9.js",revision:null}],{})}));
