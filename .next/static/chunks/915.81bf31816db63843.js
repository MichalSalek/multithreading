"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[915],{578:function(e,t,n){n.d(t,{Z:function(){return nt}});var r=n(3366),o=n(7462),i=n(7294),a=(n(5697),n(6010)),s=n(7192),p=n(238),c=n(1796),l=n(2151),u=n(2734),f=n(3616),d=n(8216),m=n(6514),h=n(67),v=n(6600),g=n(7094);function y(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function b(e){return e instanceof y(e).Element||e instanceof Element}function w(e){return e instanceof y(e).HTMLElement||e instanceof HTMLElement}function x(e){return"undefined"!==typeof ShadowRoot&&(e instanceof y(e).ShadowRoot||e instanceof ShadowRoot)}var O=Math.max,E=Math.min,T=Math.round;function Z(e,t){void 0===t&&(t=!1);var n=e.getBoundingClientRect(),r=1,o=1;if(w(e)&&t){var i=e.offsetHeight,a=e.offsetWidth;a>0&&(r=T(n.width)/a||1),i>0&&(o=T(n.height)/i||1)}return{width:n.width/r,height:n.height/o,top:n.top/o,right:n.right/r,bottom:n.bottom/o,left:n.left/r,x:n.left/r,y:n.top/o}}function R(e){var t=y(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function P(e){return e?(e.nodeName||"").toLowerCase():null}function j(e){return((b(e)?e.ownerDocument:e.document)||window.document).documentElement}function k(e){return Z(j(e)).left+R(e).scrollLeft}function L(e){return y(e).getComputedStyle(e)}function M(e){var t=L(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function D(e,t,n){void 0===n&&(n=!1);var r=w(t),o=w(t)&&function(e){var t=e.getBoundingClientRect(),n=T(t.width)/e.offsetWidth||1,r=T(t.height)/e.offsetHeight||1;return 1!==n||1!==r}(t),i=j(t),a=Z(e,o),s={scrollLeft:0,scrollTop:0},p={x:0,y:0};return(r||!r&&!n)&&(("body"!==P(t)||M(i))&&(s=function(e){return e!==y(e)&&w(e)?{scrollLeft:(t=e).scrollLeft,scrollTop:t.scrollTop}:R(e);var t}(t)),w(t)?((p=Z(t,!0)).x+=t.clientLeft,p.y+=t.clientTop):i&&(p.x=k(i))),{x:a.left+s.scrollLeft-p.x,y:a.top+s.scrollTop-p.y,width:a.width,height:a.height}}function A(e){var t=Z(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function C(e){return"html"===P(e)?e:e.assignedSlot||e.parentNode||(x(e)?e.host:null)||j(e)}function S(e){return["html","body","#document"].indexOf(P(e))>=0?e.ownerDocument.body:w(e)&&M(e)?e:S(C(e))}function W(e,t){var n;void 0===t&&(t=[]);var r=S(e),o=r===(null==(n=e.ownerDocument)?void 0:n.body),i=y(r),a=o?[i].concat(i.visualViewport||[],M(r)?r:[]):r,s=t.concat(a);return o?s:s.concat(W(C(a)))}function B(e){return["table","td","th"].indexOf(P(e))>=0}function N(e){return w(e)&&"fixed"!==L(e).position?e.offsetParent:null}function H(e){for(var t=y(e),n=N(e);n&&B(n)&&"static"===L(n).position;)n=N(n);return n&&("html"===P(n)||"body"===P(n)&&"static"===L(n).position)?t:n||function(e){var t=-1!==navigator.userAgent.toLowerCase().indexOf("firefox");if(-1!==navigator.userAgent.indexOf("Trident")&&w(e)&&"fixed"===L(e).position)return null;for(var n=C(e);w(n)&&["html","body"].indexOf(P(n))<0;){var r=L(n);if("none"!==r.transform||"none"!==r.perspective||"paint"===r.contain||-1!==["transform","perspective"].indexOf(r.willChange)||t&&"filter"===r.willChange||t&&r.filter&&"none"!==r.filter)return n;n=n.parentNode}return null}(e)||t}var I="top",F="bottom",q="right",V="left",$="auto",U=[I,F,q,V],z="start",_="end",X="viewport",Y="popper",G=U.reduce((function(e,t){return e.concat([t+"-"+z,t+"-"+_])}),[]),J=[].concat(U,[$]).reduce((function(e,t){return e.concat([t,t+"-"+z,t+"-"+_])}),[]),K=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function Q(e){var t=new Map,n=new Set,r=[];function o(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var r=t.get(e);r&&o(r)}})),r.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||o(e)})),r}function ee(e){var t;return function(){return t||(t=new Promise((function(n){Promise.resolve().then((function(){t=void 0,n(e())}))}))),t}}var te={placement:"bottom",modifiers:[],strategy:"absolute"};function ne(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"===typeof e.getBoundingClientRect)}))}function re(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,r=void 0===n?[]:n,o=t.defaultOptions,i=void 0===o?te:o;return function(e,t,n){void 0===n&&(n=i);var o={placement:"bottom",orderedModifiers:[],options:Object.assign({},te,i),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},a=[],s=!1,p={state:o,setOptions:function(n){var s="function"===typeof n?n(o.options):n;c(),o.options=Object.assign({},i,o.options,s),o.scrollParents={reference:b(e)?W(e):e.contextElement?W(e.contextElement):[],popper:W(t)};var l=function(e){var t=Q(e);return K.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}(function(e){var t=e.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}([].concat(r,o.options.modifiers)));return o.orderedModifiers=l.filter((function(e){return e.enabled})),o.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,r=void 0===n?{}:n,i=e.effect;if("function"===typeof i){var s=i({state:o,name:t,instance:p,options:r}),c=function(){};a.push(s||c)}})),p.update()},forceUpdate:function(){if(!s){var e=o.elements,t=e.reference,n=e.popper;if(ne(t,n)){o.rects={reference:D(t,H(n),"fixed"===o.options.strategy),popper:A(n)},o.reset=!1,o.placement=o.options.placement,o.orderedModifiers.forEach((function(e){return o.modifiersData[e.name]=Object.assign({},e.data)}));for(var r=0;r<o.orderedModifiers.length;r++)if(!0!==o.reset){var i=o.orderedModifiers[r],a=i.fn,c=i.options,l=void 0===c?{}:c,u=i.name;"function"===typeof a&&(o=a({state:o,options:l,name:u,instance:p})||o)}else o.reset=!1,r=-1}}},update:ee((function(){return new Promise((function(e){p.forceUpdate(),e(o)}))})),destroy:function(){c(),s=!0}};if(!ne(e,t))return p;function c(){a.forEach((function(e){return e()})),a=[]}return p.setOptions(n).then((function(e){!s&&n.onFirstUpdate&&n.onFirstUpdate(e)})),p}}var oe={passive:!0};function ie(e){return e.split("-")[0]}function ae(e){return e.split("-")[1]}function se(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function pe(e){var t,n=e.reference,r=e.element,o=e.placement,i=o?ie(o):null,a=o?ae(o):null,s=n.x+n.width/2-r.width/2,p=n.y+n.height/2-r.height/2;switch(i){case I:t={x:s,y:n.y-r.height};break;case F:t={x:s,y:n.y+n.height};break;case q:t={x:n.x+n.width,y:p};break;case V:t={x:n.x-r.width,y:p};break;default:t={x:n.x,y:n.y}}var c=i?se(i):null;if(null!=c){var l="y"===c?"height":"width";switch(a){case z:t[c]=t[c]-(n[l]/2-r[l]/2);break;case _:t[c]=t[c]+(n[l]/2-r[l]/2)}}return t}var ce={top:"auto",right:"auto",bottom:"auto",left:"auto"};function le(e){var t,n=e.popper,r=e.popperRect,o=e.placement,i=e.variation,a=e.offsets,s=e.position,p=e.gpuAcceleration,c=e.adaptive,l=e.roundOffsets,u=e.isFixed,f=a.x,d=void 0===f?0:f,m=a.y,h=void 0===m?0:m,v="function"===typeof l?l({x:d,y:h}):{x:d,y:h};d=v.x,h=v.y;var g=a.hasOwnProperty("x"),b=a.hasOwnProperty("y"),w=V,x=I,O=window;if(c){var E=H(n),Z="clientHeight",R="clientWidth";if(E===y(n)&&"static"!==L(E=j(n)).position&&"absolute"===s&&(Z="scrollHeight",R="scrollWidth"),E=E,o===I||(o===V||o===q)&&i===_)x=F,h-=(u&&O.visualViewport?O.visualViewport.height:E[Z])-r.height,h*=p?1:-1;if(o===V||(o===I||o===F)&&i===_)w=q,d-=(u&&O.visualViewport?O.visualViewport.width:E[R])-r.width,d*=p?1:-1}var P,k=Object.assign({position:s},c&&ce),M=!0===l?function(e){var t=e.x,n=e.y,r=window.devicePixelRatio||1;return{x:T(t*r)/r||0,y:T(n*r)/r||0}}({x:d,y:h}):{x:d,y:h};return d=M.x,h=M.y,p?Object.assign({},k,((P={})[x]=b?"0":"",P[w]=g?"0":"",P.transform=(O.devicePixelRatio||1)<=1?"translate("+d+"px, "+h+"px)":"translate3d("+d+"px, "+h+"px, 0)",P)):Object.assign({},k,((t={})[x]=b?h+"px":"",t[w]=g?d+"px":"",t.transform="",t))}var ue={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.offset,i=void 0===o?[0,0]:o,a=J.reduce((function(e,n){return e[n]=function(e,t,n){var r=ie(e),o=[V,I].indexOf(r)>=0?-1:1,i="function"===typeof n?n(Object.assign({},t,{placement:e})):n,a=i[0],s=i[1];return a=a||0,s=(s||0)*o,[V,q].indexOf(r)>=0?{x:s,y:a}:{x:a,y:s}}(n,t.rects,i),e}),{}),s=a[t.placement],p=s.x,c=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=p,t.modifiersData.popperOffsets.y+=c),t.modifiersData[r]=a}},fe={left:"right",right:"left",bottom:"top",top:"bottom"};function de(e){return e.replace(/left|right|bottom|top/g,(function(e){return fe[e]}))}var me={start:"end",end:"start"};function he(e){return e.replace(/start|end/g,(function(e){return me[e]}))}function ve(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&x(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function ge(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function ye(e,t){return t===X?ge(function(e){var t=y(e),n=j(e),r=t.visualViewport,o=n.clientWidth,i=n.clientHeight,a=0,s=0;return r&&(o=r.width,i=r.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(a=r.offsetLeft,s=r.offsetTop)),{width:o,height:i,x:a+k(e),y:s}}(e)):b(t)?function(e){var t=Z(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}(t):ge(function(e){var t,n=j(e),r=R(e),o=null==(t=e.ownerDocument)?void 0:t.body,i=O(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),a=O(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),s=-r.scrollLeft+k(e),p=-r.scrollTop;return"rtl"===L(o||n).direction&&(s+=O(n.clientWidth,o?o.clientWidth:0)-i),{width:i,height:a,x:s,y:p}}(j(e)))}function be(e,t,n){var r="clippingParents"===t?function(e){var t=W(C(e)),n=["absolute","fixed"].indexOf(L(e).position)>=0&&w(e)?H(e):e;return b(n)?t.filter((function(e){return b(e)&&ve(e,n)&&"body"!==P(e)})):[]}(e):[].concat(t),o=[].concat(r,[n]),i=o[0],a=o.reduce((function(t,n){var r=ye(e,n);return t.top=O(r.top,t.top),t.right=E(r.right,t.right),t.bottom=E(r.bottom,t.bottom),t.left=O(r.left,t.left),t}),ye(e,i));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function we(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function xe(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}function Oe(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=void 0===r?e.placement:r,i=n.boundary,a=void 0===i?"clippingParents":i,s=n.rootBoundary,p=void 0===s?X:s,c=n.elementContext,l=void 0===c?Y:c,u=n.altBoundary,f=void 0!==u&&u,d=n.padding,m=void 0===d?0:d,h=we("number"!==typeof m?m:xe(m,U)),v=l===Y?"reference":Y,g=e.rects.popper,y=e.elements[f?v:l],w=be(b(y)?y:y.contextElement||j(e.elements.popper),a,p),x=Z(e.elements.reference),O=pe({reference:x,element:g,strategy:"absolute",placement:o}),E=ge(Object.assign({},g,O)),T=l===Y?E:x,R={top:w.top-T.top+h.top,bottom:T.bottom-w.bottom+h.bottom,left:w.left-T.left+h.left,right:T.right-w.right+h.right},P=e.modifiersData.offset;if(l===Y&&P){var k=P[o];Object.keys(R).forEach((function(e){var t=[q,F].indexOf(e)>=0?1:-1,n=[I,F].indexOf(e)>=0?"y":"x";R[e]+=k[n]*t}))}return R}function Ee(e,t,n){return O(e,E(t,n))}var Te={name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0!==a&&a,p=n.boundary,c=n.rootBoundary,l=n.altBoundary,u=n.padding,f=n.tether,d=void 0===f||f,m=n.tetherOffset,h=void 0===m?0:m,v=Oe(t,{boundary:p,rootBoundary:c,padding:u,altBoundary:l}),g=ie(t.placement),y=ae(t.placement),b=!y,w=se(g),x="x"===w?"y":"x",T=t.modifiersData.popperOffsets,Z=t.rects.reference,R=t.rects.popper,P="function"===typeof h?h(Object.assign({},t.rects,{placement:t.placement})):h,j="number"===typeof P?{mainAxis:P,altAxis:P}:Object.assign({mainAxis:0,altAxis:0},P),k=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,L={x:0,y:0};if(T){if(i){var M,D="y"===w?I:V,C="y"===w?F:q,S="y"===w?"height":"width",W=T[w],B=W+v[D],N=W-v[C],$=d?-R[S]/2:0,U=y===z?Z[S]:R[S],_=y===z?-R[S]:-Z[S],X=t.elements.arrow,Y=d&&X?A(X):{width:0,height:0},G=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},J=G[D],K=G[C],Q=Ee(0,Z[S],Y[S]),ee=b?Z[S]/2-$-Q-J-j.mainAxis:U-Q-J-j.mainAxis,te=b?-Z[S]/2+$+Q+K+j.mainAxis:_+Q+K+j.mainAxis,ne=t.elements.arrow&&H(t.elements.arrow),re=ne?"y"===w?ne.clientTop||0:ne.clientLeft||0:0,oe=null!=(M=null==k?void 0:k[w])?M:0,pe=W+te-oe,ce=Ee(d?E(B,W+ee-oe-re):B,W,d?O(N,pe):N);T[w]=ce,L[w]=ce-W}if(s){var le,ue="x"===w?I:V,fe="x"===w?F:q,de=T[x],me="y"===x?"height":"width",he=de+v[ue],ve=de-v[fe],ge=-1!==[I,V].indexOf(g),ye=null!=(le=null==k?void 0:k[x])?le:0,be=ge?he:de-Z[me]-R[me]-ye+j.altAxis,we=ge?de+Z[me]+R[me]-ye-j.altAxis:ve,xe=d&&ge?function(e,t,n){var r=Ee(e,t,n);return r>n?n:r}(be,de,we):Ee(d?be:he,de,d?we:ve);T[x]=xe,L[x]=xe-de}t.modifiersData[r]=L}},requiresIfExists:["offset"]};var Ze={name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,r=e.name,o=e.options,i=n.elements.arrow,a=n.modifiersData.popperOffsets,s=ie(n.placement),p=se(s),c=[V,q].indexOf(s)>=0?"height":"width";if(i&&a){var l=function(e,t){return we("number"!==typeof(e="function"===typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:xe(e,U))}(o.padding,n),u=A(i),f="y"===p?I:V,d="y"===p?F:q,m=n.rects.reference[c]+n.rects.reference[p]-a[p]-n.rects.popper[c],h=a[p]-n.rects.reference[p],v=H(i),g=v?"y"===p?v.clientHeight||0:v.clientWidth||0:0,y=m/2-h/2,b=l[f],w=g-u[c]-l[d],x=g/2-u[c]/2+y,O=Ee(b,x,w),E=p;n.modifiersData[r]=((t={})[E]=O,t.centerOffset=O-x,t)}},effect:function(e){var t=e.state,n=e.options.element,r=void 0===n?"[data-popper-arrow]":n;null!=r&&("string"!==typeof r||(r=t.elements.popper.querySelector(r)))&&ve(t.elements.popper,r)&&(t.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Re(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function Pe(e){return[I,q,F,V].some((function(t){return e[t]>=0}))}var je=re({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,r=e.options,o=r.scroll,i=void 0===o||o,a=r.resize,s=void 0===a||a,p=y(t.elements.popper),c=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&c.forEach((function(e){e.addEventListener("scroll",n.update,oe)})),s&&p.addEventListener("resize",n.update,oe),function(){i&&c.forEach((function(e){e.removeEventListener("scroll",n.update,oe)})),s&&p.removeEventListener("resize",n.update,oe)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=pe({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=void 0===r||r,i=n.adaptive,a=void 0===i||i,s=n.roundOffsets,p=void 0===s||s,c={placement:ie(t.placement),variation:ae(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,le(Object.assign({},c,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:p})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,le(Object.assign({},c,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:p})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},r=t.attributes[e]||{},o=t.elements[e];w(o)&&P(o)&&(Object.assign(o.style,n),Object.keys(r).forEach((function(e){var t=r[e];!1===t?o.removeAttribute(e):o.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var r=t.elements[e],o=t.attributes[e]||{},i=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce((function(e,t){return e[t]="",e}),{});w(r)&&P(r)&&(Object.assign(r.style,i),Object.keys(o).forEach((function(e){r.removeAttribute(e)})))}))}},requires:["computeStyles"]},ue,{name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0===a||a,p=n.fallbackPlacements,c=n.padding,l=n.boundary,u=n.rootBoundary,f=n.altBoundary,d=n.flipVariations,m=void 0===d||d,h=n.allowedAutoPlacements,v=t.options.placement,g=ie(v),y=p||(g===v||!m?[de(v)]:function(e){if(ie(e)===$)return[];var t=de(e);return[he(e),t,he(t)]}(v)),b=[v].concat(y).reduce((function(e,n){return e.concat(ie(n)===$?function(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=n.boundary,i=n.rootBoundary,a=n.padding,s=n.flipVariations,p=n.allowedAutoPlacements,c=void 0===p?J:p,l=ae(r),u=l?s?G:G.filter((function(e){return ae(e)===l})):U,f=u.filter((function(e){return c.indexOf(e)>=0}));0===f.length&&(f=u);var d=f.reduce((function(t,n){return t[n]=Oe(e,{placement:n,boundary:o,rootBoundary:i,padding:a})[ie(n)],t}),{});return Object.keys(d).sort((function(e,t){return d[e]-d[t]}))}(t,{placement:n,boundary:l,rootBoundary:u,padding:c,flipVariations:m,allowedAutoPlacements:h}):n)}),[]),w=t.rects.reference,x=t.rects.popper,O=new Map,E=!0,T=b[0],Z=0;Z<b.length;Z++){var R=b[Z],P=ie(R),j=ae(R)===z,k=[I,F].indexOf(P)>=0,L=k?"width":"height",M=Oe(t,{placement:R,boundary:l,rootBoundary:u,altBoundary:f,padding:c}),D=k?j?q:V:j?F:I;w[L]>x[L]&&(D=de(D));var A=de(D),C=[];if(i&&C.push(M[P]<=0),s&&C.push(M[D]<=0,M[A]<=0),C.every((function(e){return e}))){T=R,E=!1;break}O.set(R,C)}if(E)for(var S=function(e){var t=b.find((function(t){var n=O.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return T=t,"break"},W=m?3:1;W>0;W--){if("break"===S(W))break}t.placement!==T&&(t.modifiersData[r]._skip=!0,t.placement=T,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},Te,Ze,{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=Oe(t,{elementContext:"reference"}),s=Oe(t,{altBoundary:!0}),p=Re(a,r),c=Re(s,o,i),l=Pe(p),u=Pe(c);t.modifiersData[n]={referenceClippingOffsets:p,popperEscapeOffsets:c,isReferenceHidden:l,hasPopperEscaped:u},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":l,"data-popper-escaped":u})}}]}),ke=n(8385),Le=n(5893);const Me=["anchorEl","children","direction","disablePortal","modifiers","open","placement","popperOptions","popperRef","TransitionProps"],De=["anchorEl","children","container","direction","disablePortal","keepMounted","modifiers","open","placement","popperOptions","popperRef","style","transition"];function Ae(e){return"function"===typeof e?e():e}const Ce={},Se=i.forwardRef((function(e,t){const{anchorEl:n,children:a,direction:s,disablePortal:p,modifiers:c,open:l,placement:u,popperOptions:f,popperRef:d,TransitionProps:m}=e,g=(0,r.Z)(e,Me),y=i.useRef(null),b=(0,h.Z)(y,t),w=i.useRef(null),x=(0,h.Z)(w,d),O=i.useRef(x);(0,v.Z)((()=>{O.current=x}),[x]),i.useImperativeHandle(d,(()=>w.current),[]);const E=function(e,t){if("ltr"===t)return e;switch(e){case"bottom-end":return"bottom-start";case"bottom-start":return"bottom-end";case"top-end":return"top-start";case"top-start":return"top-end";default:return e}}(u,s),[T,Z]=i.useState(E);i.useEffect((()=>{w.current&&w.current.forceUpdate()})),(0,v.Z)((()=>{if(!n||!l)return;Ae(n);let e=[{name:"preventOverflow",options:{altBoundary:p}},{name:"flip",options:{altBoundary:p}},{name:"onUpdate",enabled:!0,phase:"afterWrite",fn:({state:e})=>{Z(e.placement)}}];null!=c&&(e=e.concat(c)),f&&null!=f.modifiers&&(e=e.concat(f.modifiers));const t=je(Ae(n),y.current,(0,o.Z)({placement:E},f,{modifiers:e}));return O.current(t),()=>{t.destroy(),O.current(null)}}),[n,p,c,l,f,E]);const R={placement:T};return null!==m&&(R.TransitionProps=m),(0,Le.jsx)("div",(0,o.Z)({ref:b,role:"tooltip"},g,{children:"function"===typeof a?a(R):a}))}));var We=i.forwardRef((function(e,t){const{anchorEl:n,children:a,container:s,direction:p="ltr",disablePortal:c=!1,keepMounted:l=!1,modifiers:u,open:f,placement:d="bottom",popperOptions:m=Ce,popperRef:h,style:v,transition:y=!1}=e,b=(0,r.Z)(e,De),[w,x]=i.useState(!0);if(!l&&!f&&(!y||w))return null;const O=s||(n?(0,g.Z)(Ae(n)).body:void 0);return(0,Le.jsx)(ke.Z,{disablePortal:c,container:O,children:(0,Le.jsx)(Se,(0,o.Z)({anchorEl:n,direction:p,disablePortal:c,modifiers:u,ref:t,open:y?!w:f,placement:d,popperOptions:m,popperRef:h},b,{style:(0,o.Z)({position:"fixed",top:0,left:0,display:f||!l||y&&!w?null:"none"},v),TransitionProps:y?{in:f,onEnter:()=>{x(!1)},onExited:()=>{x(!0)}}:null,children:a}))})})),Be=n(4168);var Ne=i.forwardRef((function(e,t){const n=(0,Be.Z)();return(0,Le.jsx)(We,(0,o.Z)({direction:null==n?void 0:n.direction},e,{ref:t}))})),He=n(2068),Ie=n(1705);let Fe=0;var qe=function(e){const[t,n]=i.useState(e),r=e||t;return i.useEffect((()=>{null==t&&(Fe+=1,n(`mui-${Fe}`))}),[t]),r},Ve=n(9674),$e=n(8925).Z,Ue=n(3620);function ze(e){return(0,Ue.Z)("MuiTooltip",e)}var _e=(0,n(6087).Z)("MuiTooltip",["popper","popperInteractive","popperArrow","popperClose","tooltip","tooltipArrow","touch","tooltipPlacementLeft","tooltipPlacementRight","tooltipPlacementTop","tooltipPlacementBottom","arrow"]);const Xe=["arrow","children","classes","components","componentsProps","describeChild","disableFocusListener","disableHoverListener","disableInteractive","disableTouchListener","enterDelay","enterNextDelay","enterTouchDelay","followCursor","id","leaveDelay","leaveTouchDelay","onClose","onOpen","open","placement","PopperComponent","PopperProps","title","TransitionComponent","TransitionProps"];const Ye=(0,l.ZP)(Ne,{name:"MuiTooltip",slot:"Popper",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.popper,!n.disableInteractive&&t.popperInteractive,n.arrow&&t.popperArrow,!n.open&&t.popperClose]}})((({theme:e,ownerState:t,open:n})=>(0,o.Z)({zIndex:e.zIndex.tooltip,pointerEvents:"none"},!t.disableInteractive&&{pointerEvents:"auto"},!n&&{pointerEvents:"none"},t.arrow&&{[`&[data-popper-placement*="bottom"] .${_e.arrow}`]:{top:0,marginTop:"-0.71em","&::before":{transformOrigin:"0 100%"}},[`&[data-popper-placement*="top"] .${_e.arrow}`]:{bottom:0,marginBottom:"-0.71em","&::before":{transformOrigin:"100% 0"}},[`&[data-popper-placement*="right"] .${_e.arrow}`]:(0,o.Z)({},t.isRtl?{right:0,marginRight:"-0.71em"}:{left:0,marginLeft:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"100% 100%"}}),[`&[data-popper-placement*="left"] .${_e.arrow}`]:(0,o.Z)({},t.isRtl?{left:0,marginLeft:"-0.71em"}:{right:0,marginRight:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"0 0"}})}))),Ge=(0,l.ZP)("div",{name:"MuiTooltip",slot:"Tooltip",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.tooltip,n.touch&&t.touch,n.arrow&&t.tooltipArrow,t[`tooltipPlacement${(0,d.Z)(n.placement.split("-")[0])}`]]}})((({theme:e,ownerState:t})=>{return(0,o.Z)({backgroundColor:(0,c.Fq)(e.palette.grey[700],.92),borderRadius:e.shape.borderRadius,color:e.palette.common.white,fontFamily:e.typography.fontFamily,padding:"4px 8px",fontSize:e.typography.pxToRem(11),maxWidth:300,margin:2,wordWrap:"break-word",fontWeight:e.typography.fontWeightMedium},t.arrow&&{position:"relative",margin:0},t.touch&&{padding:"8px 16px",fontSize:e.typography.pxToRem(14),lineHeight:(n=16/14,Math.round(1e5*n)/1e5)+"em",fontWeight:e.typography.fontWeightRegular},{[`.${_e.popper}[data-popper-placement*="left"] &`]:(0,o.Z)({transformOrigin:"right center"},t.isRtl?(0,o.Z)({marginLeft:"14px"},t.touch&&{marginLeft:"24px"}):(0,o.Z)({marginRight:"14px"},t.touch&&{marginRight:"24px"})),[`.${_e.popper}[data-popper-placement*="right"] &`]:(0,o.Z)({transformOrigin:"left center"},t.isRtl?(0,o.Z)({marginRight:"14px"},t.touch&&{marginRight:"24px"}):(0,o.Z)({marginLeft:"14px"},t.touch&&{marginLeft:"24px"})),[`.${_e.popper}[data-popper-placement*="top"] &`]:(0,o.Z)({transformOrigin:"center bottom",marginBottom:"14px"},t.touch&&{marginBottom:"24px"}),[`.${_e.popper}[data-popper-placement*="bottom"] &`]:(0,o.Z)({transformOrigin:"center top",marginTop:"14px"},t.touch&&{marginTop:"24px"})});var n})),Je=(0,l.ZP)("span",{name:"MuiTooltip",slot:"Arrow",overridesResolver:(e,t)=>t.arrow})((({theme:e})=>({overflow:"hidden",position:"absolute",width:"1em",height:"0.71em",boxSizing:"border-box",color:(0,c.Fq)(e.palette.grey[700],.9),"&::before":{content:'""',margin:"auto",display:"block",width:"100%",height:"100%",backgroundColor:"currentColor",transform:"rotate(45deg)"}})));let Ke=!1,Qe=null;function et(e,t){return n=>{t&&t(n),e(n)}}const tt=i.forwardRef((function(e,t){var n,c,l,h,v,g;const y=(0,f.Z)({props:e,name:"MuiTooltip"}),{arrow:b=!1,children:w,components:x={},componentsProps:O={},describeChild:E=!1,disableFocusListener:T=!1,disableHoverListener:Z=!1,disableInteractive:R=!1,disableTouchListener:P=!1,enterDelay:j=100,enterNextDelay:k=0,enterTouchDelay:L=700,followCursor:M=!1,id:D,leaveDelay:A=0,leaveTouchDelay:C=1500,onClose:S,onOpen:W,open:B,placement:N="bottom",PopperComponent:H,PopperProps:I={},title:F,TransitionComponent:q=m.Z,TransitionProps:V}=y,$=(0,r.Z)(y,Xe),U=(0,u.Z)(),z="rtl"===U.direction,[_,X]=i.useState(),[Y,G]=i.useState(null),J=i.useRef(!1),K=R||M,Q=i.useRef(),ee=i.useRef(),te=i.useRef(),ne=i.useRef(),[re,oe]=$e({controlled:B,default:!1,name:"Tooltip",state:"open"});let ie=re;const ae=qe(D),se=i.useRef(),pe=i.useCallback((()=>{void 0!==se.current&&(document.body.style.WebkitUserSelect=se.current,se.current=void 0),clearTimeout(ne.current)}),[]);i.useEffect((()=>()=>{clearTimeout(Q.current),clearTimeout(ee.current),clearTimeout(te.current),pe()}),[pe]);const ce=e=>{clearTimeout(Qe),Ke=!0,oe(!0),W&&!ie&&W(e)},le=(0,He.Z)((e=>{clearTimeout(Qe),Qe=setTimeout((()=>{Ke=!1}),800+A),oe(!1),S&&ie&&S(e),clearTimeout(Q.current),Q.current=setTimeout((()=>{J.current=!1}),U.transitions.duration.shortest)})),ue=e=>{J.current&&"touchstart"!==e.type||(_&&_.removeAttribute("title"),clearTimeout(ee.current),clearTimeout(te.current),j||Ke&&k?ee.current=setTimeout((()=>{ce(e)}),Ke?k:j):ce(e))},fe=e=>{clearTimeout(ee.current),clearTimeout(te.current),te.current=setTimeout((()=>{le(e)}),A)},{isFocusVisibleRef:de,onBlur:me,onFocus:he,ref:ve}=(0,Ve.Z)(),[,ge]=i.useState(!1),ye=e=>{me(e),!1===de.current&&(ge(!1),fe(e))},be=e=>{_||X(e.currentTarget),he(e),!0===de.current&&(ge(!0),ue(e))},we=e=>{J.current=!0;const t=w.props;t.onTouchStart&&t.onTouchStart(e)},xe=ue,Oe=fe,Ee=e=>{we(e),clearTimeout(te.current),clearTimeout(Q.current),pe(),se.current=document.body.style.WebkitUserSelect,document.body.style.WebkitUserSelect="none",ne.current=setTimeout((()=>{document.body.style.WebkitUserSelect=se.current,ue(e)}),L)},Te=e=>{w.props.onTouchEnd&&w.props.onTouchEnd(e),pe(),clearTimeout(te.current),te.current=setTimeout((()=>{le(e)}),C)};i.useEffect((()=>{if(ie)return document.addEventListener("keydown",e),()=>{document.removeEventListener("keydown",e)};function e(e){"Escape"!==e.key&&"Esc"!==e.key||le(e)}}),[le,ie]);const Ze=(0,Ie.Z)(X,t),Re=(0,Ie.Z)(ve,Ze),Pe=(0,Ie.Z)(w.ref,Re);""===F&&(ie=!1);const je=i.useRef({x:0,y:0}),ke=i.useRef(),Me={},De="string"===typeof F;E?(Me.title=ie||!De||Z?null:F,Me["aria-describedby"]=ie?ae:null):(Me["aria-label"]=De?F:null,Me["aria-labelledby"]=ie&&!De?ae:null);const Ae=(0,o.Z)({},Me,$,w.props,{className:(0,a.default)($.className,w.props.className),onTouchStart:we,ref:Pe},M?{onMouseMove:e=>{const t=w.props;t.onMouseMove&&t.onMouseMove(e),je.current={x:e.clientX,y:e.clientY},ke.current&&ke.current.update()}}:{});const Ce={};P||(Ae.onTouchStart=Ee,Ae.onTouchEnd=Te),Z||(Ae.onMouseOver=et(xe,Ae.onMouseOver),Ae.onMouseLeave=et(Oe,Ae.onMouseLeave),K||(Ce.onMouseOver=xe,Ce.onMouseLeave=Oe)),T||(Ae.onFocus=et(be,Ae.onFocus),Ae.onBlur=et(ye,Ae.onBlur),K||(Ce.onFocus=be,Ce.onBlur=ye));const Se=i.useMemo((()=>{var e;let t=[{name:"arrow",enabled:Boolean(Y),options:{element:Y,padding:4}}];return null!=(e=I.popperOptions)&&e.modifiers&&(t=t.concat(I.popperOptions.modifiers)),(0,o.Z)({},I.popperOptions,{modifiers:t})}),[Y,I]),We=(0,o.Z)({},y,{isRtl:z,arrow:b,disableInteractive:K,placement:N,PopperComponentProp:H,touch:J.current}),Be=(e=>{const{classes:t,disableInteractive:n,arrow:r,touch:o,placement:i}=e,a={popper:["popper",!n&&"popperInteractive",r&&"popperArrow"],tooltip:["tooltip",r&&"tooltipArrow",o&&"touch",`tooltipPlacement${(0,d.Z)(i.split("-")[0])}`],arrow:["arrow"]};return(0,s.Z)(a,ze,t)})(We),Fe=null!=(n=x.Popper)?n:Ye,Ue=null!=(c=null!=(l=x.Transition)?l:q)?c:m.Z,_e=null!=(h=x.Tooltip)?h:Ge,tt=null!=(v=x.Arrow)?v:Je,nt=(0,p.Z)(Fe,(0,o.Z)({},I,O.popper),We),rt=(0,p.Z)(Ue,(0,o.Z)({},V,O.transition),We),ot=(0,p.Z)(_e,(0,o.Z)({},O.tooltip),We),it=(0,p.Z)(tt,(0,o.Z)({},O.arrow),We);return(0,Le.jsxs)(i.Fragment,{children:[i.cloneElement(w,Ae),(0,Le.jsx)(Fe,(0,o.Z)({as:null!=H?H:Ne,placement:N,anchorEl:M?{getBoundingClientRect:()=>({top:je.current.y,left:je.current.x,right:je.current.x,bottom:je.current.y,width:0,height:0})}:_,popperRef:ke,open:!!_&&ie,id:ae,transition:!0},Ce,nt,{className:(0,a.default)(Be.popper,null==I?void 0:I.className,null==(g=O.popper)?void 0:g.className),popperOptions:Se,children:({TransitionProps:e})=>{var t,n;return(0,Le.jsx)(Ue,(0,o.Z)({timeout:U.transitions.duration.shorter},e,rt,{children:(0,Le.jsxs)(_e,(0,o.Z)({},ot,{className:(0,a.default)(Be.tooltip,null==(t=O.tooltip)?void 0:t.className),children:[F,b?(0,Le.jsx)(tt,(0,o.Z)({},it,{className:(0,a.default)(Be.arrow,null==(n=O.arrow)?void 0:n.className),ref:G})):null]}))}))}}))]})}));var nt=tt},6585:function(e,t,n){var r=n(7462),o=n(3366),i=n(7294),a=(n(5697),n(8885)),s=n(6067),p=n(2734),c=n(577),l=n(1705),u=n(5893);const f=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"],d={entering:{transform:"none"},entered:{transform:"none"}},m={enter:s.x9.enteringScreen,exit:s.x9.leavingScreen},h=i.forwardRef((function(e,t){const{addEndListener:n,appear:s=!0,children:h,easing:v,in:g,onEnter:y,onEntered:b,onEntering:w,onExit:x,onExited:O,onExiting:E,style:T,timeout:Z=m,TransitionComponent:R=a.ZP}=e,P=(0,o.Z)(e,f),j=(0,p.Z)(),k=i.useRef(null),L=(0,l.Z)(h.ref,t),M=(0,l.Z)(k,L),D=e=>t=>{if(e){const n=k.current;void 0===t?e(n):e(n,t)}},A=D(w),C=D(((e,t)=>{(0,c.n)(e);const n=(0,c.C)({style:T,timeout:Z,easing:v},{mode:"enter"});e.style.webkitTransition=j.transitions.create("transform",n),e.style.transition=j.transitions.create("transform",n),y&&y(e,t)})),S=D(b),W=D(E),B=D((e=>{const t=(0,c.C)({style:T,timeout:Z,easing:v},{mode:"exit"});e.style.webkitTransition=j.transitions.create("transform",t),e.style.transition=j.transitions.create("transform",t),x&&x(e)})),N=D(O);return(0,u.jsx)(R,(0,r.Z)({appear:s,in:g,nodeRef:k,onEnter:C,onEntered:S,onEntering:A,onExit:B,onExited:N,onExiting:W,addEndListener:e=>{n&&n(k.current,e)},timeout:Z},P,{children:(e,t)=>i.cloneElement(h,(0,r.Z)({style:(0,r.Z)({transform:"scale(0)",visibility:"exited"!==e||g?void 0:"hidden"},d[e],T,h.props.style),ref:M},t))}))}));t.Z=h}}]);