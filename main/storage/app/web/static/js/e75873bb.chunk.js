"use strict";(self.webpackChunk_metafox_react=self.webpackChunk_metafox_react||[]).push([["metafox-advertise-blocks-HtmlAdvertise-Block"],{2891:function(e,t,i){i.r(t),i.d(t,{default:function(){return b}});var l=i(85597),n=i(67294),a=i(21241),r=i(30120),o=i(50130),s=i(81719),c=i(91647),d=i(41609),m=i.n(d),u=i(27274),p=i(71722),g=i(77029);let v=(0,s.ZP)("img",{shouldForwardProp:e=>"slotName"!==e&&"width"!==e&&"height"!==e})(({theme:e,width:t,slotName:i})=>({width:"90px",height:"90px",borderRadius:e.spacing(1),objectFit:"cover"})),f=(0,s.ZP)(r.Z,{shouldForwardProp:e=>"slotName"!==e})(({theme:e,slotName:t})=>({display:"flex",flexDirection:"row",alignItems:"center",position:"relative"})),h=(0,s.ZP)(r.Z)(({theme:e})=>({display:"flex",alignItems:"center",flex:1,minWidth:0,paddingRight:e.spacing(1),cursor:"pointer"})),k=(0,s.ZP)(r.Z)(({theme:e})=>({marginLeft:e.spacing(1)})),E=(0,s.ZP)(l.rUS)(({theme:e})=>({cursor:"pointer"})),Z=(0,s.ZP)(c.Z)(({theme:e})=>({})),P=(0,s.ZP)(o.Z)(({theme:e})=>({position:"absolute",top:e.spacing(-.5),right:e.spacing(-.5),zIndex:1,opacity:.9}));var b=(0,l.j4Z)({name:"AdvertiseBannerBlock",extendBlock:function(e){let{slotName:t,identity:i}=e,{assetUrl:r,i18n:o,dispatch:s,localStore:c,jsxBackend:d,useGetItem:b}=(0,l.OgA)(),w=b(i),x=c.get(l.wT4),y=n.useMemo(()=>{let e=t||"main";return["subside","side"].includes(t)&&(e="side"),["main"].includes(t)&&(e="main"),e},[t]);if(m()(w)||(null==w?void 0:w.creation_type)!==p.G.HTML)return null;let{image:_,html_values:A,extra:C}=w,I=(0,u.Q4)(_,"origin",r("advertise.default_ad_thumbnail")),H=()=>{window.open(w.destination_url),s({type:"advertise/updateTotalClick",payload:w})},M=()=>{x||s({type:"advertise/hideItem",payload:w})},B=d.get("advertise.ui.inViewImpression");return n.createElement(a.gO,{testid:"advertiseBlockHtml"},n.createElement(a.sU,null,n.createElement(B,{item:w}),n.createElement(f,{slotName:y},n.createElement(h,{onClick:H},n.createElement(v,{slotName:y,src:I}),n.createElement(k,null,n.createElement(g.Ys,{lines:2},n.createElement(E,{underline:"none",color:"primary"},null==A?void 0:A.html_title)),n.createElement(g.Ys,{lines:2},n.createElement(Z,null,null==A?void 0:A.html_description)))),(null==C?void 0:C.can_hide)?n.createElement(P,{size:"smallest",onClick:M,disabled:x,variant:"itemActionIcon",title:o.formatMessage({id:"remove"})},n.createElement(g.zb,{icon:"ico-close"})):null)))},defaults:{title:"Advertise Html",blockLayout:"Advertise Html"}})},71722:function(e,t,i){var l,n,a,r;i.d(t,{G:function(){return l}}),(a=l||(l={})).IMAGE="image",a.HTML="html",(r=n||(n={})).PayPerClick="ppc",r.CostPerMille="cpm"}}]);