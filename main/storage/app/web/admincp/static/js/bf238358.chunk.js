"use strict";(self.webpackChunk_metafox_react=self.webpackChunk_metafox_react||[]).push([["metafox-ui-MenuItem-PopperMenuItem"],{6867:function(r,t,n){n.d(t,{Z:function(){return w}});var a=n(63366),e=n(87462),o=n(67294),i=n(86010),l=n(2097),s=n(94780),c=n(1588),g=n(34867);function u(r){return(0,g.Z)("MuiBadge",r)}(0,c.Z)("MuiBadge",["root","badge","invisible"]);var d=n(34261),m=n(85893);let h=["badgeContent","component","children","invisible","max","slotProps","slots","showZero"],f=r=>{let{invisible:t}=r;return(0,s.Z)({root:["root"],badge:["badge",t&&"invisible"]},u,void 0)},p=o.forwardRef(function(r,t){let{component:n,children:o,max:i=99,slotProps:s={},slots:c={},showZero:g=!1}=r,u=(0,a.Z)(r,h),{badgeContent:p,max:v,displayValue:b,invisible:Z}=function(r){let{badgeContent:t,invisible:n=!1,max:a=99,showZero:e=!1}=r,o=(0,l.Z)({badgeContent:t,max:a}),i=n;!1!==n||0!==t||e||(i=!0);let{badgeContent:s,max:c=a}=i?o:r,g=s&&Number(s)>c?`${c}+`:s;return{badgeContent:s,invisible:i,max:c,displayValue:g}}((0,e.Z)({},r,{max:i})),O=(0,e.Z)({},r,{badgeContent:p,invisible:Z,max:v,showZero:g}),x=f(O),R=n||c.root||"span",$=(0,d.Z)({elementType:R,externalSlotProps:s.root,externalForwardedProps:u,additionalProps:{ref:t},ownerState:O,className:x.root}),y=c.badge||"span",C=(0,d.Z)({elementType:y,externalSlotProps:s.badge,ownerState:O,className:x.badge});return(0,m.jsxs)(R,(0,e.Z)({},$,{children:[o,(0,m.jsx)(y,(0,e.Z)({},C,{children:b}))]}))});var v=n(81719),b=n(78884),Z=n(69633),O=n(36622);function x(r){return(0,g.Z)("MuiBadge",r)}let R=(0,c.Z)("MuiBadge",["root","badge","dot","standard","anchorOriginTopRight","anchorOriginBottomRight","anchorOriginTopLeft","anchorOriginBottomLeft","invisible","colorError","colorInfo","colorPrimary","colorSecondary","colorSuccess","colorWarning","overlapRectangular","overlapCircular","anchorOriginTopLeftCircular","anchorOriginTopLeftRectangular","anchorOriginTopRightCircular","anchorOriginTopRightRectangular","anchorOriginBottomLeftCircular","anchorOriginBottomLeftRectangular","anchorOriginBottomRightCircular","anchorOriginBottomRightRectangular"]),$=["anchorOrigin","className","component","components","componentsProps","overlap","color","invisible","max","badgeContent","slots","slotProps","showZero","variant"],y=r=>{let{color:t,anchorOrigin:n,invisible:a,overlap:e,variant:o,classes:i={}}=r,l={root:["root"],badge:["badge",o,a&&"invisible",`anchorOrigin${(0,O.Z)(n.vertical)}${(0,O.Z)(n.horizontal)}`,`anchorOrigin${(0,O.Z)(n.vertical)}${(0,O.Z)(n.horizontal)}${(0,O.Z)(e)}`,`overlap${(0,O.Z)(e)}`,"default"!==t&&`color${(0,O.Z)(t)}`]};return(0,s.Z)(l,x,i)},C=(0,v.ZP)("span",{name:"MuiBadge",slot:"Root",overridesResolver:(r,t)=>t.root})({position:"relative",display:"inline-flex",verticalAlign:"middle",flexShrink:0}),B=(0,v.ZP)("span",{name:"MuiBadge",slot:"Badge",overridesResolver:(r,t)=>{let{ownerState:n}=r;return[t.badge,t[n.variant],t[`anchorOrigin${(0,O.Z)(n.anchorOrigin.vertical)}${(0,O.Z)(n.anchorOrigin.horizontal)}${(0,O.Z)(n.overlap)}`],"default"!==n.color&&t[`color${(0,O.Z)(n.color)}`],n.invisible&&t.invisible]}})(({theme:r,ownerState:t})=>(0,e.Z)({display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center",alignContent:"center",alignItems:"center",position:"absolute",boxSizing:"border-box",fontFamily:r.typography.fontFamily,fontWeight:r.typography.fontWeightMedium,fontSize:r.typography.pxToRem(12),minWidth:20,lineHeight:1,padding:"0 6px",height:20,borderRadius:10,zIndex:1,transition:r.transitions.create("transform",{easing:r.transitions.easing.easeInOut,duration:r.transitions.duration.enteringScreen})},"default"!==t.color&&{backgroundColor:(r.vars||r).palette[t.color].main,color:(r.vars||r).palette[t.color].contrastText},"dot"===t.variant&&{borderRadius:4,height:8,minWidth:8,padding:0},"top"===t.anchorOrigin.vertical&&"right"===t.anchorOrigin.horizontal&&"rectangular"===t.overlap&&{top:0,right:0,transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%",[`&.${R.invisible}`]:{transform:"scale(0) translate(50%, -50%)"}},"bottom"===t.anchorOrigin.vertical&&"right"===t.anchorOrigin.horizontal&&"rectangular"===t.overlap&&{bottom:0,right:0,transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%",[`&.${R.invisible}`]:{transform:"scale(0) translate(50%, 50%)"}},"top"===t.anchorOrigin.vertical&&"left"===t.anchorOrigin.horizontal&&"rectangular"===t.overlap&&{top:0,left:0,transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%",[`&.${R.invisible}`]:{transform:"scale(0) translate(-50%, -50%)"}},"bottom"===t.anchorOrigin.vertical&&"left"===t.anchorOrigin.horizontal&&"rectangular"===t.overlap&&{bottom:0,left:0,transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%",[`&.${R.invisible}`]:{transform:"scale(0) translate(-50%, 50%)"}},"top"===t.anchorOrigin.vertical&&"right"===t.anchorOrigin.horizontal&&"circular"===t.overlap&&{top:"14%",right:"14%",transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%",[`&.${R.invisible}`]:{transform:"scale(0) translate(50%, -50%)"}},"bottom"===t.anchorOrigin.vertical&&"right"===t.anchorOrigin.horizontal&&"circular"===t.overlap&&{bottom:"14%",right:"14%",transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%",[`&.${R.invisible}`]:{transform:"scale(0) translate(50%, 50%)"}},"top"===t.anchorOrigin.vertical&&"left"===t.anchorOrigin.horizontal&&"circular"===t.overlap&&{top:"14%",left:"14%",transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%",[`&.${R.invisible}`]:{transform:"scale(0) translate(-50%, -50%)"}},"bottom"===t.anchorOrigin.vertical&&"left"===t.anchorOrigin.horizontal&&"circular"===t.overlap&&{bottom:"14%",left:"14%",transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%",[`&.${R.invisible}`]:{transform:"scale(0) translate(-50%, 50%)"}},t.invisible&&{transition:r.transitions.create("transform",{easing:r.transitions.easing.easeInOut,duration:r.transitions.duration.leavingScreen})})),z=o.forwardRef(function(r,t){var n,o,s,c,g,u;let d;let h=(0,b.Z)({props:r,name:"MuiBadge"}),{anchorOrigin:f={vertical:"top",horizontal:"right"},className:v,component:O="span",components:x={},componentsProps:R={},overlap:z="rectangular",color:w="default",invisible:S=!1,max:N,badgeContent:P,slots:M,slotProps:T,showZero:k=!1,variant:I="standard"}=h,E=(0,a.Z)(h,$),L=(0,l.Z)({anchorOrigin:f,color:w,overlap:z,variant:I}),W=S;!1!==S||(0!==P||k)&&(null!=P||"dot"===I)||(W=!0);let{color:j=w,overlap:A=z,anchorOrigin:_=f,variant:F=I}=W?L:h,D=(0,e.Z)({},h,{anchorOrigin:_,invisible:W,color:j,overlap:A,variant:F}),H=y(D);"dot"!==F&&(d=P&&Number(P)>N?`${N}+`:P);let q=null!=(n=null!=(o=null==M?void 0:M.root)?o:x.Root)?n:C,G=null!=(s=null!=(c=null==M?void 0:M.badge)?c:x.Badge)?s:B,J=null!=(g=null==T?void 0:T.root)?g:R.root,K=null!=(u=null==T?void 0:T.badge)?u:R.badge;return(0,m.jsx)(p,(0,e.Z)({invisible:S,badgeContent:d,showZero:k,max:N},E,{slots:{root:q,badge:G},className:(0,i.default)(null==J?void 0:J.className,H.root,v),slotProps:{root:(0,e.Z)({},J,(0,Z.Z)(q)&&{as:O,ownerState:(0,e.Z)({},null==J?void 0:J.ownerState,{anchorOrigin:_,color:j,overlap:A,variant:F})}),badge:(0,e.Z)({},K,{className:(0,i.default)(H.badge,null==K?void 0:K.className)},(0,Z.Z)(G)&&{ownerState:(0,e.Z)({},null==K?void 0:K.ownerState,{anchorOrigin:_,color:j,overlap:A,variant:F})})},ref:t}))});var w=z},69633:function(r,t,n){var a=n(28442);let e=r=>{return!r||!(0,a.Z)(r)};t.Z=e},15329:function(r,t,n){n.r(t),n.d(t,{default:function(){return g}});var a=n(85597),e=n(16473),o=n(6867),i=n(62937),l=n(86010),s=n(67294),c=n(68680);function g({item:r,classes:t}){let{jsxBackend:n}=(0,a.OgA)(),g=s.useRef(null),[u,d]=s.useState(!1),m=()=>d(r=>!r),h=()=>{d(!1)};return s.createElement(c.Z,{onClickAway:h},s.createElement("div",{className:t.menuRefIndex,ref:g},s.createElement("span",{role:"button",onClick:m,style:{position:"relative",display:"inline-block"},className:(0,l.default)(t.smallMenuButton,(!!r.active||!!u)&&t.menuButtonActive)},s.createElement(o.Z,{color:"error"},s.createElement(e.zb,{className:t.smallMenuIcon,icon:r.icon}))),s.createElement(i.Z,{id:"notifications",open:u,anchorEl:g.current,disablePortal:!0,placement:"bottom-end",className:t.popper},n.render(r.content))))}}}]);