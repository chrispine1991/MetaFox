"use strict";(self.webpackChunk_metafox_react=self.webpackChunk_metafox_react||[]).push([["metafox-group-blocks-PrivacySetting-Block"],{85964:function(e,t,a){a.d(t,{ZP:function(){return B}});var n=a(63366),r=a(87462),o=a(67294),i=a(86010),s=a(94780),l=a(28442),d=a(41796),c=a(81719),u=a(78884),p=a(45355),m=a(70061),v=a(63289),y=a(84771),g=a(57742),f=a(1588),b=a(34867);function Z(e){return(0,b.Z)("MuiListItem",e)}let h=(0,f.Z)("MuiListItem",["root","container","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","padding","button","secondaryAction","selected"]);var x=a(94960),C=a(39193),S=a(85893);let I=["className"],P=["alignItems","autoFocus","button","children","className","component","components","componentsProps","ContainerComponent","ContainerProps","dense","disabled","disableGutters","disablePadding","divider","focusVisibleClassName","secondaryAction","selected"],k=(e,t)=>{let{ownerState:a}=e;return[t.root,a.dense&&t.dense,"flex-start"===a.alignItems&&t.alignItemsFlexStart,a.divider&&t.divider,!a.disableGutters&&t.gutters,!a.disablePadding&&t.padding,a.button&&t.button,a.hasSecondaryAction&&t.secondaryAction]},L=e=>{let{alignItems:t,button:a,classes:n,dense:r,disabled:o,disableGutters:i,disablePadding:l,divider:d,hasSecondaryAction:c,selected:u}=e;return(0,s.Z)({root:["root",r&&"dense",!i&&"gutters",!l&&"padding",d&&"divider",o&&"disabled",a&&"button","flex-start"===t&&"alignItemsFlexStart",c&&"secondaryAction",u&&"selected"],container:["container"]},Z,n)},A=(0,c.ZP)("div",{name:"MuiListItem",slot:"Root",overridesResolver:k})(({theme:e,ownerState:t})=>(0,r.Z)({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left"},!t.disablePadding&&(0,r.Z)({paddingTop:8,paddingBottom:8},t.dense&&{paddingTop:4,paddingBottom:4},!t.disableGutters&&{paddingLeft:16,paddingRight:16},!!t.secondaryAction&&{paddingRight:48}),!!t.secondaryAction&&{[`& > .${x.Z.root}`]:{paddingRight:48}},{[`&.${h.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${h.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:(0,d.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${h.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:(0,d.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${h.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity}},"flex-start"===t.alignItems&&{alignItems:"flex-start"},t.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},t.button&&{transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${h.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:(0,d.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:(0,d.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity)}}},t.hasSecondaryAction&&{paddingRight:48})),$=(0,c.ZP)("li",{name:"MuiListItem",slot:"Container",overridesResolver:(e,t)=>t.container})({position:"relative"}),w=o.forwardRef(function(e,t){let a=(0,u.Z)({props:e,name:"MuiListItem"}),{alignItems:s="center",autoFocus:d=!1,button:c=!1,children:f,className:b,component:Z,components:x={},componentsProps:k={},ContainerComponent:w="li",ContainerProps:{className:B}={},dense:N=!1,disabled:O=!1,disableGutters:M=!1,disablePadding:R=!1,divider:j=!1,focusVisibleClassName:E,secondaryAction:T,selected:_=!1}=a,F=(0,n.Z)(a.ContainerProps,I),G=(0,n.Z)(a,P),V=o.useContext(g.Z),q=o.useMemo(()=>({dense:N||V.dense||!1,alignItems:s,disableGutters:M}),[s,V.dense,N,M]),z=o.useRef(null);(0,v.Z)(()=>{d&&z.current&&z.current.focus()},[d]);let U=o.Children.toArray(f),D=U.length&&(0,m.Z)(U[U.length-1],["ListItemSecondaryAction"]),Q=(0,r.Z)({},a,{alignItems:s,autoFocus:d,button:c,dense:q.dense,disabled:O,disableGutters:M,disablePadding:R,divider:j,hasSecondaryAction:D,selected:_}),H=L(Q),W=(0,y.Z)(z,t),Y=x.Root||A,J=k.root||{},K=(0,r.Z)({className:(0,i.default)(H.root,J.className,b),disabled:O},G),X=Z||"li";return(c&&(K.component=Z||"div",K.focusVisibleClassName=(0,i.default)(h.focusVisible,E),X=p.Z),D)?(X=K.component||Z?X:"div","li"===w&&("li"===X?X="div":"li"===K.component&&(K.component="div")),(0,S.jsx)(g.Z.Provider,{value:q,children:(0,S.jsxs)($,(0,r.Z)({as:w,className:(0,i.default)(H.container,B),ref:W,ownerState:Q},F,{children:[(0,S.jsx)(Y,(0,r.Z)({},J,!(0,l.Z)(Y)&&{as:X,ownerState:(0,r.Z)({},Q,J.ownerState)},K,{children:U})),U.pop()]}))})):(0,S.jsx)(g.Z.Provider,{value:q,children:(0,S.jsxs)(Y,(0,r.Z)({},J,{as:X,ref:W,ownerState:Q},!(0,l.Z)(Y)&&{ownerState:(0,r.Z)({},Q,J.ownerState)},K,{children:[U,T&&(0,S.jsx)(C.Z,{children:T})]}))})});var B=w},94960:function(e,t,a){a.d(t,{t:function(){return o}});var n=a(1588),r=a(34867);function o(e){return(0,r.Z)("MuiListItemButton",e)}let i=(0,n.Z)("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"]);t.Z=i},39193:function(e,t,a){a.d(t,{Z:function(){return Z}});var n=a(63366),r=a(87462),o=a(67294),i=a(86010),s=a(94780),l=a(81719),d=a(78884),c=a(57742),u=a(1588),p=a(34867);function m(e){return(0,p.Z)("MuiListItemSecondaryAction",e)}(0,u.Z)("MuiListItemSecondaryAction",["root","disableGutters"]);var v=a(85893);let y=["className"],g=e=>{let{disableGutters:t,classes:a}=e;return(0,s.Z)({root:["root",t&&"disableGutters"]},m,a)},f=(0,l.ZP)("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:a}=e;return[t.root,a.disableGutters&&t.disableGutters]}})(({ownerState:e})=>(0,r.Z)({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"},e.disableGutters&&{right:0})),b=o.forwardRef(function(e,t){let a=(0,d.Z)({props:e,name:"MuiListItemSecondaryAction"}),{className:s}=a,l=(0,n.Z)(a,y),u=o.useContext(c.Z),p=(0,r.Z)({},a,{disableGutters:u.disableGutters}),m=g(p);return(0,v.jsx)(f,(0,r.Z)({className:(0,i.default)(m.root,s),ownerState:p,ref:t},l))});b.muiName="ListItemSecondaryAction";var Z=b},61702:function(e,t,a){var n=a(63366),r=a(87462),o=a(67294),i=a(86010),s=a(94780),l=a(91647),d=a(57742),c=a(78884),u=a(81719),p=a(97484),m=a(85893);let v=["children","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"],y=e=>{let{classes:t,inset:a,primary:n,secondary:r,dense:o}=e;return(0,s.Z)({root:["root",a&&"inset",o&&"dense",n&&r&&"multiline"],primary:["primary"],secondary:["secondary"]},p.L,t)},g=(0,u.ZP)("div",{name:"MuiListItemText",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:a}=e;return[{[`& .${p.Z.primary}`]:t.primary},{[`& .${p.Z.secondary}`]:t.secondary},t.root,a.inset&&t.inset,a.primary&&a.secondary&&t.multiline,a.dense&&t.dense]}})(({ownerState:e})=>(0,r.Z)({flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},e.primary&&e.secondary&&{marginTop:6,marginBottom:6},e.inset&&{paddingLeft:56})),f=o.forwardRef(function(e,t){let a=(0,c.Z)({props:e,name:"MuiListItemText"}),{children:s,className:u,disableTypography:p=!1,inset:f=!1,primary:b,primaryTypographyProps:Z,secondary:h,secondaryTypographyProps:x}=a,C=(0,n.Z)(a,v),{dense:S}=o.useContext(d.Z),I=null!=b?b:s,P=h,k=(0,r.Z)({},a,{disableTypography:p,inset:f,primary:!!I,secondary:!!P,dense:S}),L=y(k);return null==I||I.type===l.Z||p||(I=(0,m.jsx)(l.Z,(0,r.Z)({variant:S?"body2":"body1",className:L.primary,component:null!=Z&&Z.variant?void 0:"span",display:"block"},Z,{children:I}))),null==P||P.type===l.Z||p||(P=(0,m.jsx)(l.Z,(0,r.Z)({variant:"body2",className:L.secondary,color:"text.secondary",display:"block"},x,{children:P}))),(0,m.jsxs)(g,(0,r.Z)({className:(0,i.default)(L.root,u),ownerState:k,ref:t},C,{children:[I,P]}))});t.Z=f},46060:function(e,t,a){a.d(t,{sU:function(){return n.Z},zp:function(){return r.Z}}),a(26830),a(36611);var n=a(83273),r=a(43115)},19414:function(e,t,a){a.d(t,{Q:function(){return p},A:function(){return y}});var n=a(67294),r=a(85964),o=a(61702),i=a(12501),s=a(74825),l=a(81719),d=a(51584),c=a.n(d);let u=(0,l.ZP)(r.ZP,{name:"StyledListItem"})(({theme:e})=>{var t;return{borderBottom:"solid 1px",borderBottomColor:null===(t=e.palette.border)||void 0===t?void 0:t.secondary,padding:"22px 0 !important",display:"flex",justifyContent:"space-between","&:first-of-typed":{paddingTop:6},"&:last-child":{paddingBottom:6,borderBottom:"none"}}});function p({item:e,onChanged:t}){var a,r;let[l,d]=n.useState(null==e?void 0:null===(a=e.value)||void 0===a?void 0:a.toString()),p=a=>{let n=a.target.value;d(n),t(c()(n)?n:parseInt(n,10),null==e?void 0:e.var_name)};return n.createElement(u,null,n.createElement(o.Z,{primary:e.phrase,sx:{pr:2}}),n.createElement(i.Z,{variant:"standard",value:l,onChange:p,disableUnderline:!0},null==e?void 0:null===(r=e.options)||void 0===r?void 0:r.map((e,t)=>n.createElement(s.Z,{value:c()(e.value)?e.value:e.value.toString(),key:t},e.label))))}var m=a(26569);let v=(0,l.ZP)(r.ZP,{name:"StyledSwitchList"})(({theme:e})=>{var t;return{borderBottom:"solid 1px",borderBottomColor:null===(t=e.palette.border)||void 0===t?void 0:t.secondary,padding:`${e.spacing(2)} 0 !important`,display:"flex",justifyContent:"space-between","&:first-of-type":{paddingTop:6},"&:last-child":{paddingBottom:6,borderBottom:"none"}}});function y({item:e,onChanged:t,disabled:a,size:r="medium",color:i="primary"}){let[s,l]=n.useState(!!e.value),d=n.useCallback(()=>{let a=!s;l(a),t(a?1:0,e.var_name||e.module_id)},[e.module_id,e.var_name,t,s]);return n.createElement(v,null,n.createElement(o.Z,{primary:e.phrase,sx:{pr:2}}),n.createElement(m.Z,{size:r,checked:s,color:i,disabled:a,onChange:d}))}},67617:function(e,t,a){a.r(t),a.d(t,{default:function(){return p}});var n=a(85597),r=a(21241),o=a(19414),i=a(78573),s=a(67294),l=a(1469),d=a.n(l),c=a(9949),u=a(46060),p=(0,n.j4Z)({extendBlock:function({title:e}){let{loggedIn:t}=(0,n.kPO)(),a=(0,r.N6)(),l=(0,n.oHF)(c.eA,c.oQ,"getGroupPermission"),[p,,m]=(0,u.zp)({dataSource:l,pageParams:a}),{dispatch:v}=(0,n.OgA)(),y=(e,t)=>{v({type:"group/privacySetting/UPDATE",payload:{[t]:e,id:a.id}})};return!t||m?null:s.createElement(r.gO,null,s.createElement(r.ti,{title:e}),s.createElement(r.sU,null,s.createElement(i.Z,{disablePadding:!0},d()(p)?p.map(e=>{return s.createElement(o.Q,{var_name:null==e?void 0:e.var_name,onChanged:y,item:e,key:null==e?void 0:e.var_name})}):null)))},defaults:{blockLayout:"Main Form"}})}}]);