"use strict";(self.webpackChunk_metafox_react=self.webpackChunk_metafox_react||[]).push([["metafox-chatplus-components-MsgContent-GroupCall"],{6336:function(e,t,n){n.d(t,{i:function(){return r},Z:function(){return s}});var a=n(21822),l=n(67294);function r({label:e,children:t,onClick:n,className:r}){return l.createElement(a.Z,{className:r,onClick:n,disableFocusRipple:!0,disableRipple:!0,disableTouchRipple:!0},e||null,t)}var i=n(81719);let o=(0,i.ZP)("div",{name:"uiChatMsgActions",slot:"uiChatMsgActions"})(({theme:e})=>({borderTop:e.mixins.border("secondary"),paddingTop:e.spacing(1),marginTop:e.spacing(1),textAlign:"center",justifyContent:"center"}));function s({children:e}){return l.createElement(o,null,e)}},26270:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var a=n(85597),l=n(81719),r=n(67294),i=n(6336),o=n(93997);let s="GroupCallEnded",u=(0,l.ZP)("div",{name:s,slot:"uiChatMsgItemCall",shouldForwardProp:e=>"missedCall"!==e})(({theme:e,missedCall:t})=>({padding:e.spacing(1,1.5),border:e.mixins.border("secondary"),borderRadius:e.spacing(.5)})),c=(0,l.ZP)("div",{name:s,slot:"uiChatMsgItemCallTitle"})(({theme:e})=>({fontWeight:e.typography.fontWeightBold})),m=(0,l.ZP)("div",{name:s,slot:"uiChatMsgItemTime"})(({theme:e})=>({color:e.palette.grey["600"],marginTop:e.spacing(.5),textTransform:"capitalize",fontSize:e.spacing(1.5)})),p=(0,l.ZP)(i.i,{name:s,slot:"uiChatMsgCallActionLink"})(({theme:e})=>({height:e.spacing(1.5),fontSize:e.spacing(1.625),textTransform:"uppercase"}));function d({message:e,user:t,createdDate:n,isRoomLimited:l,msgType:s}){let{chatplus:d,i18n:g}=(0,a.OgA)(),f=g.formatMessage({id:`${s}`},{msg:e.msg,user:r.createElement("b",null,e.u.name)});return r.createElement("div",{className:"uiChatMsgItemBodyInnerWrapper"},r.createElement(u,null,r.createElement(c,null,f),r.createElement(m,null,n),l?null:r.createElement(i.Z,null,r.createElement(p,{onClick:()=>d.joinCallFromMessage(e),label:g.formatMessage({id:"join"})})),r.createElement(o.Z,{reports:e.reports,user:t})))}},93997:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(85597),l=n(81719),r=n(67294);let i=(0,l.ZP)("div")(({theme:e})=>({marginTop:e.spacing(.5)}));function o({reports:e,user:t}){let{i18n:n}=(0,a.OgA)();return(null==e?void 0:e.length)?r.createElement(i,null,e.map((e,a)=>r.createElement("div",{className:"uiCallReport",key:`${a}`},n.formatMessage({id:`${e.u._id===t._id?"you":"user"}_${e.t}`},{user:e.u.name})))):null}}}]);