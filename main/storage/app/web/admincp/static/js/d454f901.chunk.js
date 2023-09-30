"use strict";(self.webpackChunk_metafox_react=self.webpackChunk_metafox_react||[]).push([["metafox-photo-blocks-AlbumDetailMobile-Block"],{87755:function(e,t,a){a.r(t),a.d(t,{default:function(){return h}});var o=a(85597),i=a(93052),n=a(84116),l=a(21241),r=a(89773),s=a(54726),c=a(16473),m=a(86010),d=a(67294),p=a(22410),u=a(73327),g=(0,p.Z)(e=>(0,u.Z)({root:{borderRadius:e.shape.borderRadius,maxWidth:720,margin:"auto",backgroundColor:e.palette.background.paper},albumContent:{padding:e.spacing(2),position:"relative"},features:{display:"inline-flex",margin:e.spacing(0,-.5),float:"left"},category:{fontSize:e.mixins.pxToRem(13),color:e.palette.primary.main,marginBottom:e.spacing(1.5),display:"inline-block"},albumTitle:{marginBottom:e.spacing(.5),overflow:"hidden"},title:{color:e.palette.text.primary,fontSize:e.mixins.pxToRem(24),fontWeight:e.typography.fontWeightBold},hasFeatures:{padding:e.spacing(0,1.5)},albumContainer:{},info:{color:e.palette.text.primary,fontSize:e.mixins.pxToRem(15),padding:e.spacing(1,0),"& p":{margin:e.spacing(1.5,0)}},profileLink:{color:e.palette.text.primary,fontSize:e.mixins.pxToRem(15),fontWeight:e.typography.fontWeightBold},owner:{overflow:"hidden",padding:e.spacing(1.5,0),display:"flex",alignItems:"center",width:"100%"},ownerInfo:{overflow:"hidden",flexGrow:1},ownerAvatar:{float:"left",marginRight:e.spacing(2)},date:{fontSize:e.mixins.pxToRem(13),color:e.palette.text.secondary,paddingTop:e.spacing(.5)},listingActions:{display:"inline-flex",marginTop:e.spacing(1),marginBottom:e.spacing(.5),[e.breakpoints.down("xs")]:{display:"flex"}},actionMenu:{border:"1px solid",width:"40px",height:"40px",borderRadius:e.spacing(.5),display:"flex",alignItems:"center",color:e.palette.primary.main,justifyContent:"center"},listingHeader:{display:"flex",[e.breakpoints.down("xs")]:{display:"block"}},listingComment:{marginTop:e.spacing(2),[e.breakpoints.down("xs")]:{padding:e.spacing(0,2)}},hasPhotos:{marginBottom:e.spacing(2)},actionsDropdown:{position:"absolute",top:e.spacing(1),right:e.spacing(1)},iconButton:{fontSize:e.mixins.pxToRem(13)},dropdownButton:{padding:e.spacing(1),width:30,height:30,textAlign:"center"}}),{name:"MuiPhotoMobileViewDetail"});let f=(0,o.Uh$)((0,i.Y)(function({item:e,user:t,identity:a,handleAction:i,state:p,blockProps:u}){let f=g(),{jsxBackend:h,ItemActionMenu:b,useGetItem:y,i18n:x}=(0,o.OgA)(),v=h.get("photo.block.pinView"),w=(0,o.oHF)(r.T7,r.Gk,"getAlbumItems"),E=y(null==e?void 0:e.owner);if(!e)return null;let{apiUrl:k,apiMethod:_}=w||{},N=`photo-album/${e.id}`,{is_featured:C,is_sponsor:S,name:P,text:T,photos:B,id:R,extra:M}=e,A=`/photo/album/${R}`,z="/photo/albums",D=x.formatMessage({id:"all_albums"});return E&&(null==E?void 0:E.resource_name)!=="user"&&(z=`${null==E?void 0:E.link}/photo?stab=albums`,D=x.formatMessage({id:"all_albums_from_name"},{name:(0,s.ZX)(E.resource_name)})),d.createElement(l.gO,{blockProps:u,testid:`detailview ${e.resource_name}`},d.createElement(l.sU,null,d.createElement("div",{className:f.root},d.createElement("div",{className:(0,m.default)(f.albumContent,B&&f.hasPhotos)},d.createElement("div",{className:f.actionsDropdown},d.createElement(b,{className:f.dropdownButton,identity:a,state:p,handleAction:i},d.createElement(c.zb,{icon:"ico-dottedmore-vertical-o",className:f.iconButton}))),d.createElement("div",{className:f.albumContainer},d.createElement(o.rUS,{to:z,color:"primary",children:D,className:f.category}),d.createElement("div",{className:f.albumTitle},d.createElement("div",{className:f.features},C?d.createElement(c.WN,{"data-testid":"featured",type:"is_featured",color:"white",variant:"detailView"}):null,S?d.createElement(c.WN,{"data-testid":"sponsored",type:"is_sponsor",color:"white",variant:"detailView"}):null),d.createElement(o.rUS,{to:A,className:(0,m.default)(f.title,(C||S)&&f.hasFeatures),children:P,variant:"h4"})),d.createElement("div",{className:f.owner},d.createElement("div",{className:f.ownerAvatar},d.createElement(c.Yt,{user:t,size:48})),d.createElement("div",{className:f.ownerInfo},d.createElement(o.rUS,{to:`/${t.user_name}`,children:t.full_name,hoverCard:`/user/${t.id}`,className:f.profileLink}),d.createElement(c.Ee,{sx:{color:"text.secondary",mt:.5}},d.createElement(c.r2,{"data-testid":"creationDate",value:e.creation_date,format:"MMMM DD, yyyy"}),d.createElement(c.Cd,{value:null==e?void 0:e.privacy,item:null==e?void 0:e.privacy_detail})))),d.createElement("div",{className:f.info},d.createElement(n.ZP,{html:T})))),d.createElement(v,{title:"",numColumns:3,pagingId:N,dataSource:{apiUrl:k,apiMethod:_,apiParams:"sort=latest"},contentType:"photo_album",gridContainerProps:{spacing:1},emptyPage:"photo.block.EmptyPhotoAlbum",emptyPageProps:{isVisible:null==M?void 0:M.can_upload_media}}))))},i.c,{tags:!0,categories:!0}));var h=(0,o.j4Z)({extendBlock:f,defaults:{blockProps:{variant:"plained",titleComponent:"h2",titleVariant:"subtitle1",titleColor:"textPrimary",noFooter:!0,noHeader:!0,blockStyle:{},contentStyle:{borderRadius:"base",pt:2,pb:2},headerStyle:{},footerStyle:{}}}})}}]);