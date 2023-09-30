"use strict";(self.webpackChunk_metafox_react=self.webpackChunk_metafox_react||[]).push([["metafox-event-blocks-EventDetail-Block"],{44468:function(e,t,a){a.r(t),a.d(t,{default:function(){return P}});var n=a(85597),i=a(14787),l=a(58394),r=a(24456),o=a(96338),m=a(84116),c=a(21241),s=a(77029),d=a(30120),p=a(21822),g=a(50130),u=a(81719),h=a(91647),v=a(62097),f=a(18446),x=a.n(f),E=a(41609),y=a.n(E),b=a(67294),_=a(22410),k=a(73327);let w=(0,_.Z)(e=>(0,k.Z)({root:{[e.breakpoints.down("sm")]:{marginTop:"-4px","& $viewContainer":{borderRadius:0,marginTop:"0 !important",border:"none"},"& $headingWrapper":{flexDirection:"row-reverse"},"& $calendar":{width:80,height:80,marginRight:e.spacing(0),marginLeft:e.spacing(2)},"& $month":{height:"22px",lineHeight:"22px"},"& $day":{fontSize:32,marginTop:e.spacing(1)},"& $year":{fontSize:13,marginTop:e.spacing(1)},"& $heading":{paddingTop:e.spacing(3)},"& $timeLocation":{marginTop:e.spacing(3)}}},viewContainer:{width:"100%",maxWidth:720,marginLeft:"auto",marginRight:"auto",borderRadius:8,backgroundColor:e.mixins.backgroundColor("paper"),border:e.mixins.border("secondary"),marginTop:e.spacing(0),padding:e.spacing(0,2,.5,2)},headingWrapper:{display:"flex"},calendar:{width:120,height:120,boxShadow:"1.4px 1.4px 6px 0 rgba(0, 0, 0, 0.1)",marginRight:e.spacing(2),fontWeight:"bold",textAlign:"center",borderBottomRightRadius:e.spacing(.5),borderBottomLeftRadius:e.spacing(.5),..."dark"===e.palette.mode&&{background:`${e.palette.grey["700"]} !important`}},month:{height:"32px",lineHeight:"32px",background:e.palette.primary.main,color:"#fff",textTransform:"uppercase"},day:{fontSize:40,lineHeight:.7,color:"dark"===e.palette.mode?e.palette.text.primary:e.palette.primary.main,marginTop:e.spacing(2)},year:{fontSize:18,lineHeight:1,color:"dark"===e.palette.mode?e.palette.text.primary:e.palette.primary.main,marginTop:e.spacing(1.5)},heading:{flex:1,minWidth:0,paddingTop:e.spacing(3)},itemTitle:{fontSize:e.spacing(3),lineHeight:1,fontWeight:e.typography.fontWeightBold},itemFlag:{display:"inline-flex",justifyContent:"center",verticalAlign:"bottom","& .MuiFlag-itemView":{padding:e.spacing(.5,0)}},categories:{display:"flex",flexWrap:"wrap","& > div":{lineHeight:e.spacing(2)},"& > a":{margin:`${e.spacing(1)}px ${e.spacing(1)}px ${e.spacing(1)}px 0`}},timeLocation:{fontSize:18,lineHeight:1.2,color:"dark"===e.palette.mode?e.palette.text.secondary:e.palette.text.hint,marginTop:e.spacing(2),"& .ico":{fontSize:20,marginRight:e.spacing(1.5)}},time:{},location:{marginTop:e.spacing(1.5)},actionMenu:{border:"1px solid",width:"40px",height:"40px",borderRadius:e.spacing(.5),display:"flex",alignItems:"center",color:e.palette.primary.main,justifyContent:"center","& .ico":{color:e.palette.primary.main}},iconButton:{flex:1,minWidth:0,marginRight:e.spacing(1),border:"1px solid",height:"40px",borderRadius:e.spacing(.5),display:"flex",alignItems:"center",color:e.palette.text.primary,justifyContent:"center",fontSize:e.mixins.pxToRem(18),fontWeight:e.typography.fontWeightBold,padding:e.spacing(0,2),"& .ico":{fontSize:e.mixins.pxToRem(18),marginRight:e.spacing(1)}},activeIconButton:{color:e.palette.primary.main},itemContent:{fontSize:15,lineHeight:1.33,marginTop:e.spacing(3),marginBottom:e.spacing(5),"& p + p":{marginBottom:e.spacing(2.5)}},eventIsEnd:{"&.Mui-disabled":{..."dark"===e.palette.mode&&{color:`${e.palette.text.disabled} !important`}}}}),{name:"MuiEventViewDetail"}),T="EventDetail",Z=(0,u.ZP)("div",{name:T,slot:"attachmentTitle"})(({theme:e})=>({fontSize:e.mixins.pxToRem(18),marginTop:e.spacing(2),color:e.palette.text.secondary,fontWeight:e.typography.fontWeightBold})),$=(0,u.ZP)(g.Z,{name:T,slot:"IconButtonAction"})(({theme:e})=>({..."dark"===e.palette.mode&&{"&:hover":{backgroundColor:e.palette.grey[700]}}})),C=(0,u.ZP)("div",{name:T,slot:"attachment"})(({theme:e})=>({width:"100%",display:"flex",flexWrap:"wrap",justifyContent:"space-between"})),N=(0,u.ZP)("div",{name:T,slot:"attachmentItemWrapper"})(({theme:e})=>({marginTop:e.spacing(2),flexGrow:0,flexShrink:0,flexBasis:"100%",minWidth:300})),z=(0,u.ZP)(h.Z)(({theme:e})=>({backgroundColor:e.palette.background.default,borderRadius:4,display:"inline-flex",alignItems:"center",justifyContent:"center",height:"32px",padding:`0 ${e.spacing(2)}`,marginBottom:e.spacing(1.5),transform:"translateY(-4px)"})),M=(0,u.ZP)(p.Z,{name:"ButtonInviteStyled"})(({theme:e})=>({height:"100%",borderColor:e.palette.primary.main,"& .MuiButton-startIcon":{marginLeft:0}})),S=(0,u.ZP)("div",{name:"LocationStyled"})(({theme:e})=>({marginTop:e.spacing(1.5),display:"flex"})),R=(0,u.ZP)("div",{name:"LocationTextStyled"})(({theme:e})=>({})),W=(0,u.ZP)(d.Z,{name:"LinkStyled"})(({theme:e})=>({paddingTop:e.spacing(.5),cursor:"pointer",fontSize:e.mixins.pxToRem(13),color:e.palette.primary.main,margin:e.spacing(0,.5)})),B=(0,u.ZP)(d.Z,{name:"ActionGroup",shouldForwardProp:e=>"isEnd"!==e})(({theme:e,isEnd:t})=>({height:e.spacing(5),display:t?"flex":"inline-flex",marginTop:e.spacing(2),[e.breakpoints.down("xs")]:{display:"flex"},[e.breakpoints.down("sm")]:{width:"calc(100% - 56px)","& > .MuiButtonBase-root":{justifyContent:"inherit",paddingLeft:e.spacing(2),paddingRight:e.spacing(2),"& .ico-caret-down":{marginLeft:"auto"}}},"& >*":{marginRight:`${e.spacing(1)} !important`}}));function I({handleAction:e,identity:t,state:a,item:i,user:g}){var u;let f=w(),{i18n:E,ItemActionMenu:_,ItemDetailInteraction:k,useGetItems:T,useSession:I,getSetting:L,navigate:P}=(0,n.OgA)(),{user:A,loggedIn:H}=I(),Y=(null==A?void 0:A.id)===(null==g?void 0:g.id),j=(0,v.Z)(),D=L("event.default_time_format"),F=T(null==i?void 0:i.categories),V=T(null==i?void 0:i.attachments);if(!i||y()(i))return null;let{rsvp:U,description:Q,is_pending:q,location:G}=i,[O,K]=(0,o.IY)(i.start_time,i.end_time,D===l.N3),X=(0,o.nd)(i.end_time),J=Y?null:b.createElement(r.Z,{disabled:x()(null===(u=i.extra)||void 0===u?void 0:u.can_rsvp,!1),identity:t,handleAction:e,rsvp:U}),ee=()=>{let e=G.lat,t=G.lng,a=G.lng,n=G.lat;P({pathname:"/event/search-map/",search:`?${l.lQ}=${e}&${l.Ms}=${a}&${l.P5}=${t}&${l.UH}=${n}`})};return b.createElement(c.gO,{testid:`detailview ${i.resource_name}`},b.createElement(c.sU,null,b.createElement("div",{className:f.root},b.createElement("div",{className:f.viewContainer},b.createElement("div",{className:f.headingWrapper},b.createElement("div",{className:f.calendar},b.createElement("div",{className:f.month},b.createElement(s.r2,{"data-testid":"startDate",value:i.start_time,format:"MMM"})),b.createElement("div",{className:f.day},b.createElement(s.r2,{"data-testid":"startTime",value:i.start_time,format:"DD"})),b.createElement("div",{className:f.year},b.createElement(s.r2,{"data-testid":"startYear",value:i.start_time,format:"YYYY"}))),b.createElement("div",{className:f.heading},Y?b.createElement(z,null,b.createElement(h.Z,{variant:"body2",fontWeight:600,color:"text.hint"},E.formatMessage({id:"your_event"}))):null,b.createElement("div",{className:f.categories},b.createElement(s.ot,{to:"/event/category",data:F,sx:{mb:1,mr:2}})),b.createElement(s.XQ,{variant:"h3",component:"div",pr:2,showFull:!0},b.createElement("div",{className:f.itemFlag},b.createElement(s.K6,{variant:"itemView",value:i.is_featured}),b.createElement(s.k5,{variant:"itemView",value:i.is_sponsor}),b.createElement(s.ch,{variant:"itemView",value:q})),b.createElement(h.Z,{component:"h1",variant:"h3",className:f.itemTitle,sx:{display:"inline"}},i.title)))),b.createElement("div",{className:f.timeLocation},b.createElement("div",{className:f.time},b.createElement(s.zb,{icon:"ico-clock-o"}),O&&E.formatMessage({id:"event_start_at"},{value:O}),K&&E.formatMessage({id:"event_end_at"},{value:K})),(null==G?void 0:G.lat)&&(null==G?void 0:G.lng)&&b.createElement(S,null,b.createElement(s.zb,{icon:"ico-checkin-o"}),b.createElement(R,null,b.createElement("div",null,null==G?void 0:G.address),b.createElement(d.Z,{sx:{display:"flex"}},b.createElement(W,{component:"span",onClick:ee},E.formatMessage({id:"view_on_map"})),"\xb7",b.createElement(W,{component:"a",href:`http://maps.google.com/?q=${null==G?void 0:G.address}`,target:"_blank"},E.formatMessage({id:"view_on_google_maps"}))))),i.event_url&&b.createElement("div",{className:f.location},b.createElement(s.zb,{icon:"ico-link"}),b.createElement(n.QVN,{to:"",href:i.event_url,target:"_blank"},i.event_url)),null!==i.privacy_detail&&b.createElement("div",{className:f.location},b.createElement(s.Cd,{value:null==i?void 0:i.privacy,item:null==i?void 0:i.privacy_detail,privacyText:!0}))),H?b.createElement(B,{isEnd:X},X?b.createElement(p.Z,{className:f.eventIsEnd,variant:"contained",disabled:!0,sx:{backgroundColor:`${j.palette.background.default} !important`,color:`${j.palette.text.hint} !important`,flex:1,minWidth:0}},E.formatMessage({id:"event_is_end"})):J,b.createElement(d.Z,null,b.createElement(_,{menuName:"itemInviteMenu",state:a,handleAction:e,className:f.actionMenu,control:b.createElement(M,{size:"small",variant:"outlined",component:"h5",startIcon:b.createElement(s.zb,{sx:{marginLeft:"0 !important"},icon:"ico-envelope"})},b.createElement("span",null,E.formatMessage({id:"invite"})))})),b.createElement(d.Z,null,b.createElement(_,{identity:t,state:a,handleAction:e,className:f.actionMenu,control:b.createElement($,{color:"primary",variant:"outlined-square",size:"medium"},b.createElement(s.zb,{icon:"ico-dottedmore-o"}))}))):null,b.createElement(d.Z,{component:"div",mt:3,className:f.itemContent},b.createElement(m.ZP,{html:Q})),(null==V?void 0:V.length)>0&&b.createElement(b.Fragment,null,b.createElement(Z,null,E.formatMessage({id:"attachments"})),b.createElement(C,null,V.map(e=>{return b.createElement(N,{key:null==e?void 0:e.id.toString()},b.createElement(s.M$,{fileName:null==e?void 0:e.file_name,downloadUrl:null==e?void 0:e.download_url,isImage:null==e?void 0:e.is_image,fileSizeText:null==e?void 0:e.file_size_text,size:"large",image:null==e?void 0:e.image}))}))),b.createElement(k,{identity:t,state:a,handleAction:e,hideListComment:!0,hideComposerInListComment:!0})))))}I.displayName="EventDetail";let L=(0,n.Uh$)((0,i.Y)(I,i.c));var P=(0,n.j4Z)({extendBlock:L,defaults:{placeholder:"Search"}})},14787:function(e,t,a){a.d(t,{Y:function(){return n.jEo},c:function(){return i.Z}});var n=a(85597),i=a(1065)}}]);