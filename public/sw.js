if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,a)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let c={};const r=e=>i(e,t),o={module:{uri:t},exports:c,require:r};s[t]=Promise.all(n.map((e=>o[e]||r(e)))).then((e=>(a(...e),c)))}}define(["./workbox-4754cb34"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"4b2848d0e7e06b4aef089723f4662bb6"},{url:"/_next/static/SD1ZEbvqWi0POOrzHCNgM/_buildManifest.js",revision:"50654c4134ba6f71b423498e9447ee91"},{url:"/_next/static/SD1ZEbvqWi0POOrzHCNgM/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/396-db01ae4b9436537b.js",revision:"SD1ZEbvqWi0POOrzHCNgM"},{url:"/_next/static/chunks/41ade5dc-d936637046442728.js",revision:"SD1ZEbvqWi0POOrzHCNgM"},{url:"/_next/static/chunks/472-725ce024ff608f4c.js",revision:"SD1ZEbvqWi0POOrzHCNgM"},{url:"/_next/static/chunks/691-e2e179af94879601.js",revision:"SD1ZEbvqWi0POOrzHCNgM"},{url:"/_next/static/chunks/737-0c24361bc59a6a27.js",revision:"SD1ZEbvqWi0POOrzHCNgM"},{url:"/_next/static/chunks/app/%5Bslug%5D/page-91241de6e63481c1.js",revision:"SD1ZEbvqWi0POOrzHCNgM"},{url:"/_next/static/chunks/app/_not-found-31422ee3bc69ab74.js",revision:"SD1ZEbvqWi0POOrzHCNgM"},{url:"/_next/static/chunks/app/anime/page-cf46226d2068c6f7.js",revision:"SD1ZEbvqWi0POOrzHCNgM"},{url:"/_next/static/chunks/app/bookmark/page-0761a691a74b2381.js",revision:"SD1ZEbvqWi0POOrzHCNgM"},{url:"/_next/static/chunks/app/layout-5c6ef71d48b162d4.js",revision:"SD1ZEbvqWi0POOrzHCNgM"},{url:"/_next/static/chunks/app/nonton/%5BepisodeId%5D/page-ac77b8175892a8a1.js",revision:"SD1ZEbvqWi0POOrzHCNgM"},{url:"/_next/static/chunks/app/nonton/layout-87e624bbc474f1d5.js",revision:"SD1ZEbvqWi0POOrzHCNgM"},{url:"/_next/static/chunks/app/page-5f606ef6efd39bcf.js",revision:"SD1ZEbvqWi0POOrzHCNgM"},{url:"/_next/static/chunks/app/profile/page-3e8b1d181796ff16.js",revision:"SD1ZEbvqWi0POOrzHCNgM"},{url:"/_next/static/chunks/fd9d1056-f3f2e8ca52e56c0f.js",revision:"SD1ZEbvqWi0POOrzHCNgM"},{url:"/_next/static/chunks/framework-c5181c9431ddc45b.js",revision:"SD1ZEbvqWi0POOrzHCNgM"},{url:"/_next/static/chunks/main-45a2f016d1ce2a15.js",revision:"SD1ZEbvqWi0POOrzHCNgM"},{url:"/_next/static/chunks/main-app-2896d436eddb3332.js",revision:"SD1ZEbvqWi0POOrzHCNgM"},{url:"/_next/static/chunks/pages/_app-1534f180665c857f.js",revision:"SD1ZEbvqWi0POOrzHCNgM"},{url:"/_next/static/chunks/pages/_error-b646007f40c4f0a8.js",revision:"SD1ZEbvqWi0POOrzHCNgM"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-ddb5d18471e52a6a.js",revision:"SD1ZEbvqWi0POOrzHCNgM"},{url:"/_next/static/css/51b7b73b25aed138.css",revision:"51b7b73b25aed138"},{url:"/_next/static/css/d1ff1886fe2f23b5.css",revision:"d1ff1886fe2f23b5"},{url:"/_next/static/media/26a46d62cd723877-s.woff2",revision:"befd9c0fdfa3d8a645d5f95717ed6420"},{url:"/_next/static/media/55c55f0601d81cf3-s.woff2",revision:"43828e14271c77b87e3ed582dbff9f74"},{url:"/_next/static/media/581909926a08bbc8-s.woff2",revision:"f0b86e7c24f455280b8df606b89af891"},{url:"/_next/static/media/6d93bde91c0c2823-s.woff2",revision:"621a07228c8ccbfd647918f1021b4868"},{url:"/_next/static/media/97e0cb1ae144a2a9-s.woff2",revision:"e360c61c5bd8d90639fd4503c829c2dc"},{url:"/_next/static/media/a34f9d1faa5f3315-s.p.woff2",revision:"d4fe31e6a2aebc06b8d6e558c9141119"},{url:"/_next/static/media/df0a9ae256c0569c-s.woff2",revision:"d54db44de5ccb18886ece2fda72bdfe0"},{url:"/_next/static/media/loading.862827cb.gif",revision:"0ca1f1f3be08961685e9c77129811c9e"},{url:"/icon-192x192.png",revision:"4824d3a80f01469aa65219825a2b562e"},{url:"/icon-256x256.png",revision:"08697c7bb9aadf2985ffb7854801dd39"},{url:"/icon-384x384.png",revision:"04522a6c82ffe8b212eca8148d83b2f5"},{url:"/icon-512x512.png",revision:"48851dd1fa723a32e22130be4d1b4609"},{url:"/logo.svg",revision:"3295c290e5ff662ffbc6b50afeb374ee"},{url:"/manifest.json",revision:"61a6c2ff19db011b71bdb38dc076a187"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/vercel.svg",revision:"c0af2f507b369b085b35ef4bbe3bcf1e"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:i,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));