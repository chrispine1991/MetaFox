"use strict";(self.webpackChunk_metafox_react=self.webpackChunk_metafox_react||[]).push([["metafox-comment-components-CommentHistoryRow"],{66482:function(e,t,n){n.r(t),n.d(t,{default:function(){return x}});var a=n(85597),l=n(77029),r=n(30120),i=n(81719),o=n(67294),m=n(84116);let s="Comment",c=(0,i.ZP)("div",{name:s,slot:"itemInner"})(({theme:e})=>({display:"flex",flexDirection:"column",minWidth:0,wordBreak:"break-word"})),d=(0,i.ZP)("div",{name:s,slot:"AvatarWrapper"})(({theme:e})=>({marginRight:e.spacing(1.5)})),u=(0,i.ZP)("div",{name:s,slot:"ItemName"})(({theme:e})=>({display:"flex",fontSize:e.mixins.pxToRem(13),marginBottom:e.spacing(.25)})),f=(0,i.ZP)(a.rUS,{name:s,slot:"userName"})(({theme:e})=>({fontSize:e.mixins.pxToRem(13),maxWidth:"100%",fontWeight:"bold"})),p=(0,i.ZP)(l.Lt,{name:s,slot:"FromNowStyled"})(({theme:e})=>({display:"flex",color:e.palette.text.secondary,whiteSpace:"nowrap",alignItems:"flex-end",marginLeft:e.spacing(1)}));function x({item:e}){if(!e)return null;let{user:t,content:n,creation_date:a}=e;return o.createElement(r.Z,{"data-testid":"comment",id:`comment-${e.id}`,"data-author":t.full_name},o.createElement(r.Z,{sx:{display:"flex"}},o.createElement(d,null,o.createElement(l.Yt,{user:t,size:32})),o.createElement(c,null,o.createElement(r.Z,{sx:{position:"relative",zIndex:2}},o.createElement(u,null,o.createElement(f,{hoverCard:!0,to:`/user/${t.id}`,children:t.full_name}),o.createElement(p,{value:a})),o.createElement(l.oA,{truncateProps:{variant:"body1",lines:3}},o.createElement(m.ZP,{html:n}))))))}}}]);