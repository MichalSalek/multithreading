(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[616],{5616:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return A}});var o=t(5893),s=t(7294),r=t(2151),a=t(8968),u=t(578),i=t(6863),l=t(1999),c=t.n(l),m=t(3806),d=t(7257),h=t(9394),x=t(2404),C=t(2714),p=t(4017),f=t(9256),j=t(9799),_=t(6585),k=function(){var n=(0,x.CG)(m.NR),e=(0,x.TL)(),t=(0,s.useState)(4),l=t[0],k=t[1],g=(0,s.useMemo)((function(){return(0,r.ZP)(a.Z)((function(){return{"& .MuiBadge-badge":{right:-5}}}))}),[]);return(0,o.jsxs)("section",{className:c().host,children:[(0,o.jsx)(j.Y,{popoverTextContent:"Add some new Workers to increase multithreading effect. Distribute the load evenly. Max number depends on your CPU cores amount.",titleTextContent:"Worker amount controls. Currently state is: ".concat(n.amount)}),(0,o.jsxs)("main",{className:c().amountControlsMainContainer,children:[(0,o.jsxs)("section",{className:c().amountSetGroup,children:[(0,o.jsx)(g,{color:"secondary",badgeContent:(0,o.jsx)(u.Z,{placement:"top-start",title:"Number depends of your CPU cores amount",TransitionComponent:_.Z,arrow:!0,children:(0,o.jsxs)("strong",{children:["0 - ",C.Un]})}),children:(0,o.jsx)(f.Z,{type:"number",value:l,"aria-label":"Expected Workers amount",placeholder:"0 - ".concat(C.Un),className:c().amountInput,onChange:function(n){return k(n.currentTarget.value)},onBlur:function(n){return k((0,h.Nx)(n.currentTarget.value,0,C.Un))}})}),(0,o.jsx)(p.Z,{onClick:function(){return e((0,m.Zu)({amountChangeCommand:d.uq.setAmount,amount:(0,h.Nx)(l,0,C.Un)}))},children:"Set specific Workers amount"})]}),(0,o.jsxs)("section",{className:c().controlButtonGroup,children:[(0,o.jsxs)(i.Z,{children:[(0,o.jsxs)(p.Z,{disabled:n.amount===C.Un,onClick:function(){return e((0,m.Zu)({amountChangeCommand:d.uq.setAmount,amount:C.Un}))},children:[(0,o.jsx)("span",{className:c().weakWeight,children:"Add"})," ",(0,o.jsx)("strong",{children:" all "})]}),(0,o.jsxs)(p.Z,{disabled:0===n.amount,onClick:function(){return e((0,m.Zu)({amountChangeCommand:d.uq.setAmount,amount:0}))},children:[(0,o.jsx)("span",{className:c().weakWeight,children:"Remove"})," ",(0,o.jsx)("strong",{children:" all "})]})]}),(0,o.jsxs)(i.Z,{children:[(0,o.jsxs)(p.Z,{disabled:n.amount===C.Un,onClick:function(){return e((0,m.Zu)({amountChangeCommand:d.uq.addOne}))},children:[(0,o.jsx)("span",{className:c().weakWeight,children:"Add"})," ",(0,o.jsx)("strong",{children:" one "})]}),(0,o.jsxs)(p.Z,{disabled:0===n.amount,onClick:function(){return e((0,m.Zu)({amountChangeCommand:d.uq.removeLast}))},children:[(0,o.jsx)("span",{className:c().weakWeight,children:"Remove"})," ",(0,o.jsx)("strong",{children:" one "})]})]})]})]})]})},g=t(5287),b=t.n(g),w=t(1184),Z=t(1513),N=t.n(Z),y=t(4353),v=function(){var n=(0,x.TL)(),e=(0,x.CG)(m.Hc),t=(0,x.CG)(m.fJ),r=(0,s.useState)(void 0),a=r[0],u=r[1],i=(0,s.useMemo)((function(){return"undefined"===typeof a}),[a]);return(0,o.jsxs)("section",{className:N().host,children:[(0,o.jsx)(j.Y,{popoverTextContent:"It can be useful if you have many active Workers.",titleTextContent:"Global complexity controls"}),(0,o.jsx)(w.ZP,{className:N().slider,color:"secondary",valueLabelDisplay:"auto",disabled:e,"aria-labelledby":"input-slider",min:C.$Z,max:C.Ek,onChangeCommitted:function(n,e){!function(n){u(n)}(Array.isArray(e)?e[0]:e)}}),(0,o.jsxs)("section",{className:N().buttons,children:[(0,o.jsx)(p.Z,{disabled:i||e||t,onClick:function(){n((0,m.h1)({amount:Array.isArray(a)?a[0]:a}))},children:(0,o.jsx)("span",{children:"Set to all workers"})}),(0,o.jsx)(p.Z,{onClick:function(){n((0,m.h1)({amount:"NaN"})),(0,y.o)((function(){return window.setTimeout((function(){return n((0,m.h1)({amount:void 0}))}),0)}))},disabled:e||t,children:(0,o.jsx)("span",{children:"Come back to initial setting"})})]})]})},A=function(){return(0,o.jsxs)("section",{className:b().host,children:[(0,o.jsx)(k,{}),(0,o.jsx)(v,{})]})}},1513:function(n){n.exports={host:"globalComplexitySet_host__o9dx_",buttons:"globalComplexitySet_buttons__6qpJX",slider:"globalComplexitySet_slider__sgLLz"}},1999:function(n){n.exports={host:"workersAmount_host__IsPJm",amountControlsMainContainer:"workersAmount_amountControlsMainContainer__OMO4W",controlButtonGroup:"workersAmount_controlButtonGroup__E2stE",amountSetGroup:"workersAmount_amountSetGroup__wYg36",amountInput:"workersAmount_amountInput__6nXdZ",weakWeight:"workersAmount_weakWeight__d8Rde"}},5287:function(n){n.exports={host:"workersControls_host__swzi6"}}}]);