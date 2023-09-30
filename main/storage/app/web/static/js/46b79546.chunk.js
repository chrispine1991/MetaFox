"use strict";(self.webpackChunk_metafox_react=self.webpackChunk_metafox_react||[]).push([["metafox-group-blocks-ReviewGroup-Block"],{14527:function(e,t,n){n.d(t,{Z:function(){return R}});var a=n(52886),i=n(85597),r=n(21241),o=n(77029),l=n(27274),s=n(30120),d=n(81719),m=n(61225),p=n(62097),c=n(41609),u=n.n(c),g=n(67294),f=n(18974),b=n(74996),x=n(50130);function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}let h=(0,d.ZP)(x.Z,{name:"StatusControl",slot:"Control"})(({theme:e})=>({width:32,height:32,fontSize:e.mixins.pxToRem(20),[e.breakpoints.up("sm")]:{width:44,height:44}}));function E({icon:e,...t}){return g.createElement(h,v({color:"primary"},t),g.createElement(o.zb,{icon:e}))}var w=n(84116);let k="block",y=(0,d.ZP)("div",{name:"AvatarWrapper"})(({theme:e})=>({marginRight:e.spacing(1.5)})),Z=(0,d.ZP)("div",{name:"ComposerWrapper"})(({theme:e})=>({display:"flex",width:"100%",alignItems:"center",[e.breakpoints.down("sm")]:{display:"block",width:"100%"}})),C=(0,d.ZP)("div",{name:"ComposerInput"})(({theme:e})=>({border:e.mixins.border("secondary"),flex:1,backgroundColor:e.palette.action.hover,height:e.spacing(6),borderRadius:24,padding:e.spacing(0,3),cursor:"pointer",color:e.palette.text.secondary,fontSize:e.mixins.pxToRem(15),fontWeight:e.typography.fontWeightRegular,letterSpacing:0,WebkitBoxOrient:"vertical",WebkitLineClamp:"1",display:"-webkit-box",overflow:"hidden",textOverflow:"ellipsis",lineHeight:e.mixins.pxToRem(48),"*":{margin:"0 !important"},[e.breakpoints.down("sm")]:{height:e.spacing(4),lineHeight:e.mixins.pxToRem(32),padding:e.spacing(0,2)}})),P=(0,d.ZP)("div",{name:"ComposerToolbar"})(({theme:e})=>({display:"flex",marginLeft:e.spacing(1.5),".ico-videocam-o":{fontSize:"24px"},[e.breakpoints.down("sm")]:{marginLeft:e.spacing(0),marginTop:e.spacing(1.5),"& > *":{marginRight:`${e.spacing(1.5)} !important`}}})),_=(0,d.ZP)("div",{name:"ComposerToolbarExpand"})(({theme:e})=>{var t;return{display:"flex",borderTop:"solid 1px",borderTopColor:null===(t=e.palette.border)||void 0===t?void 0:t.secondary,marginTop:e.spacing(2),marginLeft:e.spacing(8),paddingTop:e.spacing(1)}});function R({item:e,title:t,variant:n,blockProps:d,showWhen:c}){var x,v;let h;let[R,,T]=(0,b.Z)(),{i18n:W,useSession:S,dispatch:z,jsxBackend:M,usePageParams:A,getAcl:B,getSetting:I}=(0,i.OgA)(),O=(0,p.Z)(),j=(0,m.Z)(O.breakpoints.down("sm")),H=B(),G=B("activity.feed.create"),L=I(),{user:D,loggedIn:U}=S(),F=A(),V=W.formatMessage({id:"what_s_your_mind"},{user:null==D?void 0:D.first_name}),$=(0,i.z88)("formValues.dialogStatusComposer")||V,{identity:q,item_type:Y}=F,N=q?q.split(".")[3]:"",J="user"===Y&&N&&(null==D?void 0:D.id)!==parseInt(N);g.useEffect(()=>{U&&z({type:"setting/sharingItemPrivacy/FETCH",payload:{id:D.id}})},[U]),T.current.requestComposerUpdate=g.useCallback(()=>{setImmediate(()=>{let{attachmentType:e,attachments:t}=T.current.state;z({type:"statusComposer/onPress/status",payload:{data:{attachmentType:e,attachments:{[e]:t[e]}},parentIdentity:q,parentType:Y}})})},[T,z,q,Y]);let K=(0,a.q)(q,Y);K&&(null==e?void 0:e.privacy_detail)&&(h={privacy_detail:e.privacy_detail});let Q=()=>{z({type:"statusComposer/onPress/status",payload:{parentIdentity:q,parentType:Y,data:h}})},X=()=>{T.current.removeAttachments()},ee=g.useMemo(()=>({strategy:k,acl:H,setting:L,isUserProfileOther:J,item:e,parentType:Y}),[H,L,J,e,Y]),et=(0,l.W$)(f.Z.attachers,ee);if(u()(D)||!G||(null==e?void 0:null===(x=e.profile_settings)||void 0===x?void 0:x.profile_view_profile)===!1||(null==e?void 0:null===(v=e.profile_settings)||void 0===v?void 0:v.feed_share_on_wall)===!1)return null;let en=!!(0,l.W$)([{showWhen:c}],{item:e}).length;if(!en)return null;if("expanded"===n)return g.createElement(r.gO,{testid:"blockStatusComposer"},g.createElement(r.ti,{title:t}),g.createElement(r.sU,null,g.createElement(s.Z,{display:"flex",flexDirection:"row"},g.createElement(y,null,g.createElement(o.Yt,{user:D,size:j?32:48,"data-testid":"userAvatar"})),g.createElement(C,{"data-testid":"whatsHappening",color:"info",onClick:Q},g.createElement(w.ZP,{html:$}))),g.createElement(_,{onClick:X},et.map(t=>M.render({component:t.as,props:{key:t.as,strategy:k,composerRef:T,composerState:R,control:E,subject:e}})))));let ea=j?et:et.slice(0,3);return g.createElement(r.gO,{testid:"blockStatusComposer"},g.createElement(r.ti,{title:t}),g.createElement(r.sU,null,g.createElement(s.Z,{display:"flex",flexDirection:"row"},g.createElement(y,null,g.createElement(o.Yt,{user:D,size:j?32:48,"data-testid":"userAvatar"})),g.createElement(Z,null,g.createElement(C,{"data-testid":"whatsHappening",onClick:Q},g.createElement(w.ZP,{html:$})),g.createElement(P,{onClick:X},ea.map(t=>M.render({component:t.as,props:{key:t.as,strategy:k,composerRef:T,composerState:R,control:E,subject:e}})))))))}},53771:function(e,t,n){n.r(t),n.d(t,{default:function(){return S}});var a=n(85597),i=n(21241),r=n(9949),o=n(77029),l=n(30120),s=n(21822),d=n(81719),m=n(27361),p=n.n(m),c=n(41609),u=n.n(c),g=n(67294),f=n(14527);let b=(0,d.ZP)("div")({display:"block","& .overViewBottom":{marginTop:16,display:"flex"}}),x=(0,d.ZP)(o.W2)({padding:0}),v=(0,d.ZP)("div")(({theme:e})=>({backgroundColor:e.mixins.backgroundColor("paper"),display:"flex",justifyContent:"space-between",alignItems:"flex-start",padding:e.spacing(2,2,3),[e.breakpoints.down("sm")]:{flexFlow:"column",width:"100%",alignItems:"center"}})),h=(0,d.ZP)(l.Z)(({theme:e})=>({[e.breakpoints.down("sm")]:{flexFlow:"column",width:"100%",alignItems:"center",marginBottom:e.spacing(2)}})),E=(0,d.ZP)("h1")(({theme:e})=>({fontWeight:"bold",fontSize:e.mixins.pxToRem(32),color:e.palette.text.primary,margin:0,padding:0,wordWrap:"break-word",wordBreak:"break-word",[e.breakpoints.down("sm")]:{textAlign:"center"}})),w=(0,d.ZP)("div")(({theme:e})=>({color:e.palette.text.secondary,fontSize:e.mixins.pxToRem(18),paddingTop:e.spacing(1),[e.breakpoints.down("sm")]:{textAlign:"center"}})),k=(0,d.ZP)("div")(({theme:e})=>{var t;return{backgroundColor:e.mixins.backgroundColor("paper"),borderTop:"solid 1px",borderTopColor:null===(t=e.palette.border)||void 0===t?void 0:t.secondary,display:"flex",justifyContent:"space-between",alignItems:"center",borderBottomLeftRadius:"8px",borderBottomRightRadius:"8px",overflow:"hidden"}}),y=(0,d.ZP)("div")(({theme:e})=>({display:"flex",maxWidth:"55%",flexGrow:1,[e.breakpoints.down("sm")]:{width:"auto",maxWidth:"100%"}})),Z=(0,d.ZP)("div")({flex:1,minWidth:0}),C=(0,d.ZP)("div")(({theme:e})=>({minHeight:40,borderBottom:"2px solid transparent",marginRight:e.spacing(2),padding:e.spacing(1,2),height:"100%",display:"inline-block",alignItems:"center",justifyContent:"center",float:"left",textDecoration:"none",textTransform:"uppercase",fontSize:e.mixins.pxToRem(15),fontWeight:"bold",color:e.palette.text.secondary,"&:hover":{textDecoration:"none"}})),P=(0,d.ZP)("div")(({theme:e})=>({display:"flex",paddingRight:e.spacing(2),"& button":{marginLeft:e.spacing(1),textTransform:"capitalize",fontWeight:"bold",whiteSpace:"nowrap",borderRadius:e.spacing(.5),fontSize:e.mixins.pxToRem(13),padding:e.spacing(.5,1.25),minWidth:e.spacing(4),height:e.spacing(4),"& .ico":{fontSize:e.mixins.pxToRem(13)}}})),_=(0,d.ZP)("div")(({theme:e})=>({flex:2,backgroundColor:e.mixins.backgroundColor("paper"),marginRight:e.spacing(2),padding:e.spacing(2),borderRadius:e.spacing(1),pointerEvents:"none"})),R=(0,d.ZP)("div")(({theme:e})=>({flex:1,alignItems:"start",backgroundColor:e.mixins.backgroundColor("paper"),borderRadius:e.spacing(1),padding:e.spacing(2)})),T=(0,d.ZP)("div")(({theme:e})=>({fontWeight:"bold",fontSize:e.mixins.pxToRem(18),color:e.palette.text.primary,margin:0,padding:0,wordWrap:"break-word",wordBreak:"break-word",[e.breakpoints.down("sm")]:{textAlign:"center"}})),W=(0,d.ZP)("div")(({theme:e})=>({color:e.palette.text.secondary,fontSize:e.mixins.pxToRem(14),paddingTop:e.spacing(1),[e.breakpoints.down("sm")]:{textAlign:"center"}}));var S=(0,a.j4Z)({name:"GroupReviewProfileHeaderBlock",extendBlock:function({blockProps:e}){let{ItemActionMenu:t,i18n:n,assetUrl:d,eventCenter:m,ProfileHeaderCover:c}=(0,a.OgA)(),[S,z]=(0,g.useState)(n.formatMessage({id:"group_privacy"})),[M,A]=(0,g.useState)(n.formatMessage({id:"group_name"}));g.useEffect(()=>{let e=m.on(r.Z7,e=>{var t;let a=p()(e,"values"),i=p()(e,"schema.elements.content.elements.basic.elements.reg_method.options");if(u()(a)||!i)return;let r=null===(t=i[null==a?void 0:a.reg_method])||void 0===t?void 0:t.label,o=a.name;r&&z(r),A(o||n.formatMessage({id:"group_name"}))});return()=>m.off(r.Z7,e)},[]);let B=[{label:n.formatMessage({id:"overview"})},{label:n.formatMessage({id:"about"})},{label:n.formatMessage({id:"member"})},{label:n.formatMessage({id:"event"})}],I=d("group.cover_no_image");return g.createElement(i.gO,null,g.createElement(i.sU,null,g.createElement("div",null,g.createElement(b,null,g.createElement(l.Z,null,g.createElement(c,{image:I,alt:"photo",left:0,top:0,canEdit:!1}),g.createElement("div",null,g.createElement(x,{maxWidth:"md",disableGutters:!0},g.createElement(v,null,g.createElement(h,{display:"flex",justifyContent:"space-between",alignItems:"flex-start"},g.createElement("div",null,g.createElement(E,null,M),g.createElement(w,null,S," \xb7"," ",n.formatMessage({id:"value_member"},{value:1})))))),g.createElement(x,{maxWidth:"md",disableGutters:!0},g.createElement(k,null,g.createElement(y,null,g.createElement(Z,null,B.map((e,t)=>g.createElement(C,{key:t.toString()},e.label)))),g.createElement(P,null,g.createElement(t,{id:"actionMenu",label:"ActionMenu",handleAction:()=>{},items:[],control:g.createElement(s.Z,{variant:"outlined",size:"large"},g.createElement(o.zb,{icon:"ico-dottedmore-o"}))})))),g.createElement(o.W2,{maxWidth:"md",disableGutters:!0,className:"overViewBottom"},g.createElement(_,null,g.createElement(f.Z,null)),g.createElement(R,null,g.createElement(T,null,n.formatMessage({id:"about"})),g.createElement(W,null,S," \xb7"," ",n.formatMessage({id:"value_member"},{value:1}))))))))))}})}}]);