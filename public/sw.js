if(!self.define){let e,s={};const i=(i,a)=>(i=new URL(i+".js",a).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(a,n)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let c={};const r=e=>i(e,t),o={module:{uri:t},exports:c,require:r};s[t]=Promise.all(a.map((e=>o[e]||r(e)))).then((e=>(n(...e),c)))}}define(["./workbox-62f137f2"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/571.6cb209c637550ae6.js",revision:"v5Lxv2SbRz8SilIJNavBT"},{url:"/_next/static/chunks/616.ae89f5daaeddd8cc.js",revision:"v5Lxv2SbRz8SilIJNavBT"},{url:"/_next/static/chunks/796-2733ef042a0756ab.js",revision:"v5Lxv2SbRz8SilIJNavBT"},{url:"/_next/static/chunks/828-89805806d7d92a03.js",revision:"v5Lxv2SbRz8SilIJNavBT"},{url:"/_next/static/chunks/framework-5f4595e5518b5600.js",revision:"v5Lxv2SbRz8SilIJNavBT"},{url:"/_next/static/chunks/main-b60b6a7cb73ef310.js",revision:"v5Lxv2SbRz8SilIJNavBT"},{url:"/_next/static/chunks/pages/404-f2ea95f8d81b9465.js",revision:"v5Lxv2SbRz8SilIJNavBT"},{url:"/_next/static/chunks/pages/_app-4f0f1a732a12bcf4.js",revision:"v5Lxv2SbRz8SilIJNavBT"},{url:"/_next/static/chunks/pages/_error-2280fa386d040b66.js",revision:"v5Lxv2SbRz8SilIJNavBT"},{url:"/_next/static/chunks/pages/index-44d2310c2011f27d.js",revision:"v5Lxv2SbRz8SilIJNavBT"},{url:"/_next/static/chunks/pages/scoreboard-115cc42be4c8cacf.js",revision:"v5Lxv2SbRz8SilIJNavBT"},{url:"/_next/static/chunks/pages/start-3770a0ba11dd4fa2.js",revision:"v5Lxv2SbRz8SilIJNavBT"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"v5Lxv2SbRz8SilIJNavBT"},{url:"/_next/static/chunks/webpack-ad0b560dcfb57696.js",revision:"v5Lxv2SbRz8SilIJNavBT"},{url:"/_next/static/css/0e7704829a803ad2.css",revision:"v5Lxv2SbRz8SilIJNavBT"},{url:"/_next/static/css/341244714c89ea30.css",revision:"v5Lxv2SbRz8SilIJNavBT"},{url:"/_next/static/css/846dc59cbb4022ce.css",revision:"v5Lxv2SbRz8SilIJNavBT"},{url:"/_next/static/css/c0822f81500780d9.css",revision:"v5Lxv2SbRz8SilIJNavBT"},{url:"/_next/static/css/c94bb06249850088.css",revision:"v5Lxv2SbRz8SilIJNavBT"},{url:"/_next/static/v5Lxv2SbRz8SilIJNavBT/_buildManifest.js",revision:"v5Lxv2SbRz8SilIJNavBT"},{url:"/_next/static/v5Lxv2SbRz8SilIJNavBT/_middlewareManifest.js",revision:"v5Lxv2SbRz8SilIJNavBT"},{url:"/_next/static/v5Lxv2SbRz8SilIJNavBT/_ssgManifest.js",revision:"v5Lxv2SbRz8SilIJNavBT"},{url:"/calculation-worker.js",revision:"99feae2fc9c668713c54cef6810ef1d4"},{url:"/favicon.ico",revision:"33f82a8624804deb12b8bff4e774fb71"},{url:"/fontawesome.min.js",revision:"9a862c651cae5e7262b1fa9d7ea94454"},{url:"/icon-pack.min.js",revision:"e8d26eaf503eecca66d75fe7a085ce1d"},{url:"/logo.svg",revision:"265279db38f63087068f5c5da9e8166c"},{url:"/stats.min.js",revision:"baa2bd75987a4b0877f0eb3472ee3026"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:i,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
