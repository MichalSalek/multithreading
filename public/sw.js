if(!self.define){let e,s={};const n=(n,t)=>(n=new URL(n+".js",t).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(t,i)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let a={};const r=e=>n(e,c),o={module:{uri:c},exports:a,require:r};s[c]=Promise.all(t.map((e=>o[e]||r(e)))).then((e=>(i(...e),a)))}}define(["./workbox-62f137f2"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/F4OX_mnwVi4_UtTcexG_h/_buildManifest.js",revision:"F4OX_mnwVi4_UtTcexG_h"},{url:"/_next/static/F4OX_mnwVi4_UtTcexG_h/_middlewareManifest.js",revision:"F4OX_mnwVi4_UtTcexG_h"},{url:"/_next/static/F4OX_mnwVi4_UtTcexG_h/_ssgManifest.js",revision:"F4OX_mnwVi4_UtTcexG_h"},{url:"/_next/static/chunks/150.b090ba8cbe7de757.js",revision:"F4OX_mnwVi4_UtTcexG_h"},{url:"/_next/static/chunks/336.f40d80365545fc71.js",revision:"F4OX_mnwVi4_UtTcexG_h"},{url:"/_next/static/chunks/571.3a0d030bb6bb9ee7.js",revision:"F4OX_mnwVi4_UtTcexG_h"},{url:"/_next/static/chunks/framework-5f4595e5518b5600.js",revision:"F4OX_mnwVi4_UtTcexG_h"},{url:"/_next/static/chunks/main-b60b6a7cb73ef310.js",revision:"F4OX_mnwVi4_UtTcexG_h"},{url:"/_next/static/chunks/pages/404-f2ea95f8d81b9465.js",revision:"F4OX_mnwVi4_UtTcexG_h"},{url:"/_next/static/chunks/pages/_app-9b8225fbed0ddbcf.js",revision:"F4OX_mnwVi4_UtTcexG_h"},{url:"/_next/static/chunks/pages/_error-2280fa386d040b66.js",revision:"F4OX_mnwVi4_UtTcexG_h"},{url:"/_next/static/chunks/pages/index-7c850668f68fd539.js",revision:"F4OX_mnwVi4_UtTcexG_h"},{url:"/_next/static/chunks/pages/scoreboard-685ce224a90af322.js",revision:"F4OX_mnwVi4_UtTcexG_h"},{url:"/_next/static/chunks/pages/start-2f87884312495ba5.js",revision:"F4OX_mnwVi4_UtTcexG_h"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"F4OX_mnwVi4_UtTcexG_h"},{url:"/_next/static/chunks/webpack-0100b188e68e6d53.js",revision:"F4OX_mnwVi4_UtTcexG_h"},{url:"/_next/static/css/081e5c554a5ceab9.css",revision:"F4OX_mnwVi4_UtTcexG_h"},{url:"/_next/static/css/780a274e43d7722f.css",revision:"F4OX_mnwVi4_UtTcexG_h"},{url:"/_next/static/css/b41cf71d9512b6c2.css",revision:"F4OX_mnwVi4_UtTcexG_h"},{url:"/_next/static/css/fe640f40eb6f696e.css",revision:"F4OX_mnwVi4_UtTcexG_h"},{url:"/calculation-worker.js",revision:"c9dad718875ee110c7e5e3cd82db5717"},{url:"/favicon.ico",revision:"33f82a8624804deb12b8bff4e774fb71"},{url:"/fontawesome.min.js",revision:"9a862c651cae5e7262b1fa9d7ea94454"},{url:"/icon-pack.min.js",revision:"e8d26eaf503eecca66d75fe7a085ce1d"},{url:"/logo.svg",revision:"265279db38f63087068f5c5da9e8166c"},{url:"/stats.min.js",revision:"baa2bd75987a4b0877f0eb3472ee3026"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:t})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
