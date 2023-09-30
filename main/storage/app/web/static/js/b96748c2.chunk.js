"use strict";(self.webpackChunk_metafox_react=self.webpackChunk_metafox_react||[]).push([["metafox-music-blocks-PlaylistDetail-Block"],{89755:function(e,t,a){var n=a(64836);t.ZP=void 0;var o=a(57583);n(a(83655));let i=(0,o.unstable_generateUtilityClasses)("MuiTableCell",["root","head","body","footer","sizeSmall","sizeMedium","paddingCheckbox","paddingNone","alignLeft","alignCenter","alignRight","alignJustify","stickyHeader"]);t.ZP=i},13150:function(e,t,a){a.d(t,{Z:function(){return x}});var n=a(63366),o=a(87462),i=a(67294),r=a(86010),l=a(94780),s=a(21109),c=a(78884),d=a(81719),m=a(1588),p=a(34867);function u(e){return(0,p.Z)("MuiTable",e)}(0,m.Z)("MuiTable",["root","stickyHeader"]);var g=a(85893);let f=["className","component","padding","size","stickyHeader"],v=e=>{let{classes:t,stickyHeader:a}=e;return(0,l.Z)({root:["root",a&&"stickyHeader"]},u,t)},h=(0,d.ZP)("table",{name:"MuiTable",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:a}=e;return[t.root,a.stickyHeader&&t.stickyHeader]}})(({theme:e,ownerState:t})=>(0,o.Z)({display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":(0,o.Z)({},e.typography.body2,{padding:e.spacing(2),color:(e.vars||e).palette.text.secondary,textAlign:"left",captionSide:"bottom"})},t.stickyHeader&&{borderCollapse:"separate"})),y="table",b=i.forwardRef(function(e,t){let a=(0,c.Z)({props:e,name:"MuiTable"}),{className:l,component:d=y,padding:m="normal",size:p="medium",stickyHeader:u=!1}=a,b=(0,n.Z)(a,f),x=(0,o.Z)({},a,{component:d,padding:m,size:p,stickyHeader:u}),Z=v(x),E=i.useMemo(()=>({padding:m,size:p,stickyHeader:u}),[m,p,u]);return(0,g.jsx)(s.Z.Provider,{value:E,children:(0,g.jsx)(h,(0,o.Z)({as:d,role:d===y?null:"table",ref:t,className:(0,r.default)(Z.root,l),ownerState:x},b))})});var x=b},21109:function(e,t,a){var n=a(67294);let o=n.createContext();t.Z=o},80858:function(e,t,a){var n=a(67294);let o=n.createContext();t.Z=o},66140:function(e,t,a){a.d(t,{Z:function(){return Z}});var n=a(87462),o=a(63366),i=a(67294),r=a(86010),l=a(94780),s=a(80858),c=a(78884),d=a(81719),m=a(1588),p=a(34867);function u(e){return(0,p.Z)("MuiTableBody",e)}(0,m.Z)("MuiTableBody",["root"]);var g=a(85893);let f=["className","component"],v=e=>{let{classes:t}=e;return(0,l.Z)({root:["root"]},u,t)},h=(0,d.ZP)("tbody",{name:"MuiTableBody",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"table-row-group"}),y={variant:"body"},b="tbody",x=i.forwardRef(function(e,t){let a=(0,c.Z)({props:e,name:"MuiTableBody"}),{className:i,component:l=b}=a,d=(0,o.Z)(a,f),m=(0,n.Z)({},a,{component:l}),p=v(m);return(0,g.jsx)(s.Z.Provider,{value:y,children:(0,g.jsx)(h,(0,n.Z)({className:(0,r.default)(p.root,i),as:l,ref:t,role:l===b?null:"rowgroup",ownerState:m},d))})});var Z=x},3030:function(e,t,a){a.d(t,{Z:function(){return S}});var n=a(63366),o=a(87462),i=a(67294),r=a(86010),l=a(94780),s=a(41796),c=a(36622),d=a(21109),m=a(80858),p=a(78884),u=a(81719),g=a(1588),f=a(34867);function v(e){return(0,f.Z)("MuiTableCell",e)}let h=(0,g.Z)("MuiTableCell",["root","head","body","footer","sizeSmall","sizeMedium","paddingCheckbox","paddingNone","alignLeft","alignCenter","alignRight","alignJustify","stickyHeader"]);var y=a(85893);let b=["align","className","component","padding","scope","size","sortDirection","variant"],x=e=>{let{classes:t,variant:a,align:n,padding:o,size:i,stickyHeader:r}=e,s={root:["root",a,r&&"stickyHeader","inherit"!==n&&`align${(0,c.Z)(n)}`,"normal"!==o&&`padding${(0,c.Z)(o)}`,`size${(0,c.Z)(i)}`]};return(0,l.Z)(s,v,t)},Z=(0,u.ZP)("td",{name:"MuiTableCell",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:a}=e;return[t.root,t[a.variant],t[`size${(0,c.Z)(a.size)}`],"normal"!==a.padding&&t[`padding${(0,c.Z)(a.padding)}`],"inherit"!==a.align&&t[`align${(0,c.Z)(a.align)}`],a.stickyHeader&&t.stickyHeader]}})(({theme:e,ownerState:t})=>(0,o.Z)({},e.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:e.vars?`1px solid ${e.vars.palette.TableCell.border}`:`1px solid
    ${"light"===e.palette.mode?(0,s.$n)((0,s.Fq)(e.palette.divider,1),.88):(0,s._j)((0,s.Fq)(e.palette.divider,1),.68)}`,textAlign:"left",padding:16},"head"===t.variant&&{color:(e.vars||e).palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},"body"===t.variant&&{color:(e.vars||e).palette.text.primary},"footer"===t.variant&&{color:(e.vars||e).palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},"small"===t.size&&{padding:"6px 16px",[`&.${h.paddingCheckbox}`]:{width:24,padding:"0 12px 0 16px","& > *":{padding:0}}},"checkbox"===t.padding&&{width:48,padding:"0 0 0 4px"},"none"===t.padding&&{padding:0},"left"===t.align&&{textAlign:"left"},"center"===t.align&&{textAlign:"center"},"right"===t.align&&{textAlign:"right",flexDirection:"row-reverse"},"justify"===t.align&&{textAlign:"justify"},t.stickyHeader&&{position:"sticky",top:0,zIndex:2,backgroundColor:(e.vars||e).palette.background.default})),E=i.forwardRef(function(e,t){let a;let l=(0,p.Z)({props:e,name:"MuiTableCell"}),{align:s="inherit",className:c,component:u,padding:g,scope:f,size:v,sortDirection:h,variant:E}=l,S=(0,n.Z)(l,b),k=i.useContext(d.Z),C=i.useContext(m.Z),w=C&&"head"===C.variant;a=u||(w?"th":"td");let N=f;!N&&w&&(N="col");let T=E||C&&C.variant,P=(0,o.Z)({},l,{align:s,component:a,padding:g||(k&&k.padding?k.padding:"normal"),size:v||(k&&k.size?k.size:"medium"),sortDirection:h,stickyHeader:"head"===T&&k&&k.stickyHeader,variant:T}),$=x(P),M=null;return h&&(M="asc"===h?"ascending":"descending"),(0,y.jsx)(Z,(0,o.Z)({as:a,ref:t,className:(0,r.default)($.root,c),"aria-sort":M,scope:N,ownerState:P},S))});var S=E},58561:function(e,t,a){a.d(t,{Z:function(){return Z}});var n=a(87462),o=a(63366),i=a(67294),r=a(86010),l=a(94780),s=a(80858),c=a(78884),d=a(81719),m=a(1588),p=a(34867);function u(e){return(0,p.Z)("MuiTableHead",e)}(0,m.Z)("MuiTableHead",["root"]);var g=a(85893);let f=["className","component"],v=e=>{let{classes:t}=e;return(0,l.Z)({root:["root"]},u,t)},h=(0,d.ZP)("thead",{name:"MuiTableHead",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"table-header-group"}),y={variant:"head"},b="thead",x=i.forwardRef(function(e,t){let a=(0,c.Z)({props:e,name:"MuiTableHead"}),{className:i,component:l=b}=a,d=(0,o.Z)(a,f),m=(0,n.Z)({},a,{component:l}),p=v(m);return(0,g.jsx)(s.Z.Provider,{value:y,children:(0,g.jsx)(h,(0,n.Z)({as:l,className:(0,r.default)(p.root,i),ref:t,role:l===b?null:"rowgroup",ownerState:m},d))})});var Z=x},48736:function(e,t,a){a.d(t,{Z:function(){return Z}});var n=a(87462),o=a(63366),i=a(67294),r=a(86010),l=a(94780),s=a(41796),c=a(80858),d=a(78884),m=a(81719),p=a(1588),u=a(34867);function g(e){return(0,u.Z)("MuiTableRow",e)}let f=(0,p.Z)("MuiTableRow",["root","selected","hover","head","footer"]);var v=a(85893);let h=["className","component","hover","selected"],y=e=>{let{classes:t,selected:a,hover:n,head:o,footer:i}=e;return(0,l.Z)({root:["root",a&&"selected",n&&"hover",o&&"head",i&&"footer"]},g,t)},b=(0,m.ZP)("tr",{name:"MuiTableRow",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:a}=e;return[t.root,a.head&&t.head,a.footer&&t.footer]}})(({theme:e})=>({color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,[`&.${f.hover}:hover`]:{backgroundColor:(e.vars||e).palette.action.hover},[`&.${f.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:(0,s.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity),"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:(0,s.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity)}}})),x=i.forwardRef(function(e,t){let a=(0,d.Z)({props:e,name:"MuiTableRow"}),{className:l,component:s="tr",hover:m=!1,selected:p=!1}=a,u=(0,o.Z)(a,h),g=i.useContext(c.Z),f=(0,n.Z)({},a,{component:s,hover:m,selected:p,head:g&&"head"===g.variant,footer:g&&"footer"===g.variant}),x=y(f);return(0,v.jsx)(b,(0,n.Z)({as:s,ref:t,className:(0,r.default)(x.root,l),role:"tr"===s?null:"row",ownerState:f},u))});var Z=x},94031:function(e,t,a){a.r(t),a.d(t,{default:function(){return U}});var n=a(85597),o=a(21241),i=a(27274),r=a(77029),l=a(30120),s=a(13150),c=a(81719),d=a(67294),m=a(47951),p=a(58561),u=a(48736),g=a(66140),f=a(3030),v=a(87462),h=a(63366),y=a(86010),b=a(8679),x=a.n(b),Z=a(22410),E=a(85893);let S=["name"],k=["children","className","clone","component"];var C=a(73327),w=a(89755),N=a(86706);let T=e=>`${Math.floor(e/60)}:${e%60<10?0:""}${e%60}`,P=(function(e){let t=(t,a={})=>{let n;let{name:o}=a,i=(0,h.Z)(a,S),r="function"==typeof t?e=>({root:a=>t((0,v.Z)({theme:e},a))}):{root:t},l=(0,Z.Z)(r,(0,v.Z)({Component:e,name:o||e.displayName,classNamePrefix:o},i));t.filterProps&&(n=t.filterProps,delete t.filterProps),t.propTypes&&(t.propTypes,delete t.propTypes);let s=d.forwardRef(function(t,a){let{children:o,className:i,clone:r,component:s}=t,c=(0,h.Z)(t,k),m=l(t),p=(0,y.default)(m.root,i),u=c;return(n&&(u=function(e,t){let a={};return Object.keys(e).forEach(n=>{-1===t.indexOf(n)&&(a[n]=e[n])}),a}(u,n)),r)?d.cloneElement(o,(0,v.Z)({className:(0,y.default)(o.props.className,p)},u)):"function"==typeof o?o((0,v.Z)({className:p},u)):(0,E.jsx)(s||e,(0,v.Z)({ref:a,className:p},u,{children:o}))});return x()(s,e),s};return t})(f.Z)(({theme:e})=>({borderColor:e.palette.border.secondary,[`&.${w.ZP.head}`]:{backgroundColor:e.palette.background.paper,color:e.palette.text.hint,fontWeight:e.typography.fontWeightSemiBold,fontSize:e.mixins.pxToRem(15),borderColor:e.palette.border.secondary},[`&.${w.ZP.body}`]:{fontSize:e.mixins.pxToRem(15),color:e.palette.text.hint,marginBottom:e.spacing(1),borderColor:e.palette.border.secondary,padding:e.spacing(0,2)}})),$=(0,c.ZP)(g.Z,{name:"tableRowStyled"})(({theme:e})=>({color:"red","& tr:last-child":{"& td":{borderBottom:0}}})),M=(0,Z.Z)(e=>(0,C.Z)({root:{"& .ico":{cursor:"pointer"},[e.breakpoints.down("xs")]:{"& $songOrder, & $songTime":{display:"none"},"& $songTitle":{marginLeft:0},"& $songActionMenu":{marginRight:e.spacing(-2)}}},songItem:{height:e.spacing(7),"& $songTitle":{color:"light"===e.palette.mode?"#121212":"#fff"},padding:e.spacing(1),"& .ico-play":{display:"none"},"& .ico-heart-o":{display:"none",color:e.palette.text.hint},"& .ico-heart":{color:e.palette.primary.main},"& .ico-dottedmore-vertical-o":{display:"none"},"&:hover":{"& $songPlayPause":{"& .ico-play":{display:"block"},"& .ico-pause":{display:"block"}},"& .ico-heart-o":{display:"unset"},backgroundColor:e.palette.background.default,"& $songOrderText":{display:"none"},"& .ico-dottedmore-vertical-o":{display:"unset"}}},songInner:{display:"flex",alignItems:"center",color:e.palette.text.secondary,fontSize:18},songOrderText:{},songPlaying:{"& $songTime":{},"& $songTitle":{color:e.palette.primary.main},"& $songOrderText":{display:"none"},"& $songPlayPause":{"& .ico-play":{display:"block"},"& .ico-pause":{display:"block"}},display:"block"},songOrder:{paddingLeft:e.spacing(1),minWidth:32,textAlign:"center"},songPlayPause:{color:e.palette.text.secondary},songTitle:{cursor:"pointer"},songActionMenu:{display:"auto",marginLeft:"auto",marginRight:e.spacing(2),"& .ico":{color:e.palette.text.secondary,fontSize:13}},songTime:{width:"150px"}}),{name:"PlayList"}),z=(0,n.YUM)(function({identity:e,handleAction:t,state:a,selectedSong:o,index:i,classes:l,isPlaying:s,setIsPlaying:c,setSelectedSong:m,item:p,isAlbum:g}){let{ItemActionMenu:f}=(0,n.OgA)();if(!p)return;let v=()=>{o.id!==p.id?(m(p),c(!0)):c(e=>!e)};return d.createElement(u.Z,{className:`${l.songItem} ${(null==p?void 0:p.id)===(null==o?void 0:o.id)?l.songPlaying:""}`},d.createElement(P,null,d.createElement("div",{className:l.songOrderText},i+1),d.createElement("div",{className:l.songPlayPause,onClick:v},s&&(null==p?void 0:p.id)===(null==o?void 0:o.id)?d.createElement(r.zb,{icon:"ico-pause"}):d.createElement(r.zb,{icon:"ico-play"}))),d.createElement(P,{className:l.songTitle,onClick:v},p.name),d.createElement(P,{align:"right"},p.statistic.total_play),d.createElement(P,{align:"right",className:l.songTime},d.createElement(r.zb,{icon:(null==p?void 0:p.is_favorite)?"ico-heart":"ico-heart-o",sx:{fontSize:"14px",mr:2}}),T(null==p?void 0:p.duration),d.createElement(f,{menuName:g?"itemActionMenu":"itemActionMenuOnPlaylist",sx:{ml:2},identity:`music.entities.music_song${p.id}`,icon:"ico-dottedmore-vertical-o",state:a,handleAction:t,className:l.songActionMenu})))},()=>{}),_=({songs:e,selectedSong:t,setSelectedSong:a,identity:o,handleAction:i,state:r,isPlaying:l,setIsPlaying:c,isAlbum:m})=>{let g=M(),{i18n:f}=(0,n.OgA)(),v=(0,N.v9)(t=>(0,n.Flc)(t,e));return d.useEffect(()=>{a(v[0])},[]),d.createElement("div",{className:g.root},d.createElement("div",{className:"playlist"},d.createElement(s.Z,{sx:{fontSize:"15px"}},d.createElement(p.Z,null,d.createElement(u.Z,null,d.createElement(P,{style:{width:"50px"}},"#"),d.createElement(P,null,f.formatMessage({id:"title"})),d.createElement(P,{align:"right"},f.formatMessage({id:"music_plays"})),d.createElement(P,{align:"center"},f.formatMessage({id:"duration"})))),d.createElement($,null,v&&v.map((e,n)=>d.createElement(z,{isAlbum:m,song:e,selectedSong:t,setSelectedSong:a,key:n,index:n,classes:g,isPlaying:l,setIsPlaying:c,identity:`music.entities.music_song.${e.id}`}))))))},R=(0,Z.Z)(e=>(0,C.Z)({root:{[e.breakpoints.down("xs")]:{"& $bgCover":{height:179},"& $viewContainer":{borderRadius:0,marginTop:"0 !important"}}},bgCoverWrapper:{height:320,overflow:"hidden",position:"relative"},bgCover:{height:"100%",backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover",filter:"brightness(0.45) blur(50px)",position:"absolute",left:0,right:0,top:0,bottom:0,zIndex:-2,"&::after":{content:'""',position:"absolute",left:0,right:0,top:0,bottom:0,zIndex:-1,background:"#000",opacity:.1}},hasBgCover:{},header:{marginLeft:e.spacing(2),color:"#fff",paddingTop:e.spacing(4),display:"flex",justifyContent:"space-between"},headerInner:{flex:1,minWidth:0,margin:e.spacing(0,3,0,2),display:"flex",flexDirection:"column"},imgSong:{width:212,height:212},viewContainer:{margin:e.spacing(2,2,0,2),fontSize:e.mixins.pxToRem(15),borderRadius:8,backgroundColor:e.mixins.backgroundColor("paper"),border:e.mixins.border("secondary"),marginTop:e.spacing(2),padding:e.spacing(2),position:"relative","&$hasBgCover":{marginTop:-44}},actionMenu:{width:32,height:32,position:"absolute !important",top:e.spacing(1),right:e.spacing(1),"& .ico":{color:e.palette.text.secondary,fontSize:13}},titleWrapper:{display:"flex"},pageTitle:{fontWeight:e.typography.fontWeightBold,flex:1,minWidth:0,fontSize:e.spacing(3),lineHeight:1.3,maxHeight:72,overflow:"hidden",textOverflow:"ellipsis",wordBreak:"break-word",wordWrap:"break-word",whiteSpace:"normal",WebkitLineClamp:1,display:"-webkit-box",WebkitBoxOrient:"vertical","& .ico-heart":{color:e.palette.primary.main}},minorInfo:{display:"flex",marginTop:e.spacing(1),fontSize:13,fontWeight:"normal",color:"#cecece"},statistic:{"&::after":{content:'"•"',margin:e.spacing(0,1)}},playlistLabel:{},playlistName:{color:"#fff"},itemFlag:{marginBottom:e.spacing(1.5),"& > div:last-child":{marginRight:e.spacing(1)}},soundWave:{marginTop:"auto"},author:{display:"flex",marginTop:e.spacing(2)},authorInfo:{marginLeft:e.spacing(1.2)},userName:{fontSize:15,fontWeight:"bold",color:e.palette.text.primary,paddingRight:e.spacing(.5)},date:{fontSize:13,color:e.palette.text.secondary,marginTop:e.spacing(.5)},playlistContent:{fontSize:15,lineHeight:1.33,marginTop:e.spacing(3)},listingComment:{marginTop:"0 !important"}}),{name:"MuiPlaylistViewDetail"});var W=a(84116),I=a(1469),A=a.n(I),H=a(96026),O=a.n(H),B=a(7390),L=a(43847);let j=(0,c.ZP)("span",{name:"HeadlineSpan"})(({theme:e})=>({paddingRight:e.spacing(.5),color:e.palette.text.secondary})),F=(0,c.ZP)(L.Z,{name:"OwnerStyled"})(({theme:e})=>({fontWeight:e.typography.fontWeightBold,color:e.palette.text.primary,fontSize:e.mixins.pxToRem(15),"&:hover":{textDecoration:"underline"}})),D=e=>{let t=Math.floor(e/3600),a=Math.floor(e%3600/60),n=Math.floor(e%3600%60),o=t>0?`${t} hr `:"",i=a>0?`${a} min `:"",r=n>0?`${n} sec`:"";return o+i+r},V=(0,n.Uh$)((0,n.YUM)(function({item:e,user:t,blockProps:a,identity:c,handleAction:p,state:u,isAlbum:g}){var f,v,h,y,b;let{ItemActionMenu:x,ItemDetailInteraction:Z,i18n:E,assetUrl:S,jsxBackend:k,dispatch:C,usePageParams:w}=(0,n.OgA)(),N=R(),[T,P]=d.useState(),[$,M]=d.useState(!1),[z,I]=d.useState([]),H=w(),L=(0,n.z88)(null==e?void 0:e.owner),[V,U]=d.useState(!1);if(d.useEffect(()=>{U(!0),(null==e?void 0:e.songs)?U(!1):C({type:"music/getListSong",meta:{onSuccess:({data:e})=>{U(!e)}},payload:{identity:c}})},[H]),d.useEffect(()=>{if(A()(null==e?void 0:e.songs)){var t;I(Array.from(Array(null==e?void 0:null===(t=e.songs)||void 0===t?void 0:t.length).keys()))}},[null==e?void 0:e.songs]),!e)return null;let q=(0,i.Q4)(null==e?void 0:e.image,"240",S("music.song_no_image")),G=k.get("core.block.no_content_with_icon"),Y=k.get("music_song.itemView.listingCard.skeleton");return d.createElement(o.gO,{testid:`detailview ${e.resource_name}`},d.createElement(o.sU,null,d.createElement("div",{className:N.root},d.createElement("div",{className:N.bgCoverWrapper},d.createElement("div",{className:N.bgCover,style:{backgroundImage:`url(${q})`}}),d.createElement("div",{className:N.header},d.createElement(r.Gy,{src:q,className:N.imgSong,aspectRatio:"11"}),d.createElement("div",{className:N.headerInner},d.createElement("div",{className:N.itemFlag},d.createElement(r.K6,{variant:"itemView",value:null==e?void 0:e.is_featured}),d.createElement(r.k5,{variant:"itemView",value:null==e?void 0:e.is_sponsor})),d.createElement("div",{className:N.titleWrapper},d.createElement(l.Z,{className:N.pageTitle},null==e?void 0:e.name)),d.createElement("div",{className:N.minorInfo},d.createElement("span",{className:N.statistic},E.formatMessage({id:g?"album":"playlist"})),(null==e?void 0:e.year)&&d.createElement(l.Z,{className:N.statistic},null==e?void 0:e.year),d.createElement(l.Z,{mr:.5},E.formatMessage({id:"total_song"},{value:null===(f=e.statistic)||void 0===f?void 0:f.total_song}),(null===(v=e.statistic)||void 0===v?void 0:v.total_duration)?`, ${D(null===(h=e.statistic)||void 0===h?void 0:h.total_duration)}`:null)),d.createElement("div",{className:N.soundWave},(null==T?void 0:T.destination)&&(null==e?void 0:null===(y=e.songs)||void 0===y?void 0:y.length)?d.createElement(m.Z,{url:null==T?void 0:T.destination,isPlaylist:!0,isPlaying:$,setIsPlaying:M,songs:null==e?void 0:e.songs,selectedSong:T,setSelectedSong:P,orderPlay:z,setOrderPlay:I}):null)))),d.createElement("div",{className:`${N.viewContainer} ${N.hasBgCover}`},d.createElement(x,{identity:c,icon:"ico-dottedmore-vertical-o",state:u,handleAction:p,className:N.actionMenu}),d.createElement("div",{className:N.author},d.createElement(l.Z,{component:"div"},d.createElement(r.Yt,{user:t,size:48})),d.createElement("div",{className:N.authorInfo},d.createElement(n.rUS,{color:"inherit",to:`/user/${null==t?void 0:t.id}`,children:t.full_name,className:N.userName}),(null==L?void 0:L.resource_name)!==(null==t?void 0:t.resource_name)&&d.createElement(j,null,E.formatMessage({id:"to_parent_user"},{icon:()=>d.createElement(r.zb,{icon:"ico-caret-right"}),parent_user:()=>d.createElement(F,{user:L})})),d.createElement(r.Ee,{sx:{color:"text.secondary",mt:.5}},d.createElement(r.r2,{value:null==e?void 0:e.creation_date,format:"MMMM DD, yyyy"}),d.createElement(r.Cd,{value:null==e?void 0:e.privacy,item:null==e?void 0:e.privacy_detail})))),(null==e?void 0:e.description)&&d.createElement(l.Z,{component:"div",mt:3,ml:1},d.createElement(W.ZP,{html:null==e?void 0:e.description})),d.createElement(B.Z,{attachments:null==e?void 0:e.attachments,size:"large"}),d.createElement(l.Z,{component:"div",mt:3,className:N.playlistContent},V?d.createElement(s.Z,null,O()(1,4).map(e=>d.createElement(Y,{key:e.toString()}))):d.createElement(d.Fragment,null,(null==e?void 0:null===(b=e.songs)||void 0===b?void 0:b.length)?d.createElement(_,{isAlbum:g,songs:null==e?void 0:e.songs,selectedSong:T,handleAction:p,setSelectedSong:P,isPlaying:$,setIsPlaying:M}):d.createElement(G,{image:"ico-music-list",title:"there_are_no_songs_to_be_played"}))),d.createElement(Z,{identity:c,handleAction:p})))))}));var U=(0,n.j4Z)({extendBlock:V,defaults:{placeholder:"Search",blockProps:{variant:"plained",titleComponent:"h2",titleVariant:"subtitle1",titleColor:"textPrimary",noFooter:!0,noHeader:!0,blockStyle:{},contentStyle:{borderRadius:"base"},headerStyle:{},footerStyle:{}}}})},47951:function(e,t,a){a.d(t,{Z:function(){return x}});var n=a(77029),o=a(19382),i=a(763),r=a(30120),l=a(38790),s=a(22410),c=a(73327),d=a(67294),m=a(21796),p=a.n(m),u=a(85597),g=a(86706),f=a(86010),v=a(10928),h=a.n(v);let y=(0,s.Z)(e=>(0,c.Z)({root:{display:"flex",alignItems:"flex-end","& .ico":{color:"#fff",fontSize:18,cursor:"pointer"}},waveForm:{margin:e.spacing(0,1,1),height:77,overflow:"hidden",flex:1,position:"relative","&::before":{content:"''",height:"2px",background:"#eee",width:"100%",position:"absolute",bottom:0},"& wave > wave::before":{content:"''",position:"absolute",top:"50%",height:"2px",width:"100%",background:"#2682d5"}},btnControlWrapper:{marginRight:e.spacing(2)},btnControl:{border:"none",background:"transparent",outline:"none",padding:0,"& + $btnControl":{paddingLeft:e.spacing(2)}},btnPlayPause:{},btnShuffle:{marginLeft:e.spacing(2)},btnRepeat:{marginLeft:e.spacing(2)},activeIcon:{color:`${e.palette.primary.main} !important`},timePlaying:{minWidth:e.spacing(5),textAlign:"right",fontSize:15},timeSong:{fontSize:15},volumeWrapper:{width:e.spacing(2),position:"relative",marginLeft:e.spacing(1.5),"&:hover $volumeSlider":{visibility:"visible",opacity:1}},volumeSlider:{height:70,visibility:"hidden",opacity:0,transition:"all 300ms ease",position:"absolute",left:e.spacing(-.5),bottom:e.spacing(4.5)},volumeSliderItem:{color:"#fff","& .MuiSlider-thumb":{width:"15px",height:"15px",boxShadow:"none !important",color:"#fff"}},progress:{flex:1,margin:e.spacing(0,1,1),position:"absolute",bottom:0},hide:{display:"none!important"},visibility:{visibility:"hidden"},disabledIcon:{color:`${e.palette.grey[500]}!important`}}),{name:"Waveform"}),b=e=>({container:e,waveColor:"#eee",progressColor:"#2682d5",cursorColor:"transparent",barWidth:3,barHeight:2,barRadius:0,barGap:2,responsive:!0,height:150,loopSelection:!0,normalize:!0,partialRender:!0,minPxPerSec:100});function x({url:e,isPlaylist:t,isPlaying:a,setIsPlaying:s,songs:c,selectedSong:m,setSelectedSong:v,orderPlay:x,setOrderPlay:Z,autoPlay:E}){let S=new AudioContext,k=y(),C=(0,d.useRef)(null),w=(0,d.useRef)(null),[N,T]=(0,d.useState)(!1),[P,$]=(0,d.useState)(!1),[M,z]=(0,d.useState)(!1),[_,R]=(0,d.useState)("0:00"),[W,I]=(0,d.useState)("0:00"),[A,H]=(0,d.useState)(.5),[O,B]=(0,d.useState)(!1),[L,j]=(0,d.useState)(!1),{dispatch:F,useLoggedIn:D,i18n:V}=(0,u.OgA)(),U=(0,g.v9)(e=>(0,u.Flc)(e,c)),q=D();(0,d.useEffect)(()=>{T(!1),j(!1);let n=b(C.current);if(w.current=p().create(n),e)return w.current.load(e),w.current.on("ready",()=>{if(j(!0),"running"===S.state&&!t&&E&&(w.current.play(),T(!0)),t){s(e=>{return e&&w.current.play(),e}),w.current.setVolume(A),H(A);let e=G(w.current.getDuration());I(e)}}),w.current.on("audioprocess",()=>{let e=G(w.current.getCurrentTime());R(e)}),w.current.on("seek",e=>{let t=G(w.current.getCurrentTime());R(t)}),w.current.on("finish",()=>{J(),z(e=>{return e?(w.current.play(),t?s(!a):T(!N)):(B(e=>{return t&&et(1),e}),T(!1)),e})}),()=>w.current.destroy()},[e]);let G=e=>{let t=Math.floor(e/60),a=`0${Math.floor(e-60*t)}`.slice(-2);return`${t}:${a}`},Y=()=>{t?s(!a):T(!N),w.current.playPause()},J=()=>{if(!q)return;let e=null==m?void 0:m._identity;F({type:"music/updateTotalPlayItem",payload:{identity:e}})},K=(e,t)=>{w.current.setVolume(t),H(t),0===t?$(!0):$(!1)},Q=()=>{w.current.setVolume(P?A:0),$(e=>!e)},X=()=>{z(!M)},ee=()=>{B(!O),Z(e=>{return e.sort((e,t)=>.5-Math.random())})},et=e=>{s(!0);let t=U.findIndex(e=>{return(null==e?void 0:e.id)===(null==m?void 0:m.id)}),a=x.findIndex(e=>t===e);B(n=>{return n?a+e===x.length?v(U[x[0]]):v(U[x[a+e]]):t+e===x.length?v(U[0]):t+e<0?v(h()(U)):v(U[t+e]),n})};return d.createElement("div",{className:k.root},d.createElement("div",{className:k.btnControlWrapper},t?d.createElement("button",{className:k.btnControl,onClick:()=>et(-1)},d.createElement(n.zb,{icon:"ico-play-prev"})):null,d.createElement("button",{onClick:Y,className:(0,f.default)(k.btnControl,k.btnPlayPause),disabled:!L},(t?a:N)?d.createElement(n.zb,{icon:"ico-pause"}):d.createElement(n.zb,{icon:"ico-play",className:!L&&k.disabledIcon})),t?d.createElement("button",{className:k.btnControl,onClick:()=>et(1)},d.createElement(n.zb,{icon:"ico-play-next"})):null),d.createElement("div",{className:k.timePlaying},_),d.createElement(r.Z,{position:"relative",flex:1},d.createElement("div",{ref:C,className:(0,f.default)(k.waveForm,!L&&k.visibility)}),d.createElement(o.Z,{color:"inherit",className:(0,f.default)(L&&k.hide,k.progress)})),d.createElement("div",{className:k.timeSong},W),t?d.createElement(l.Z,{title:V.formatMessage({id:O?"turn_off_shuffle":"turn_on_shuffle"})},d.createElement(n.zb,{icon:"ico-shuffle",className:`${k.btnShuffle} ${O?k.activeIcon:""}`,onClick:ee})):null,d.createElement(l.Z,{title:V.formatMessage({id:M?"turn_off_repeat":"turn_on_repeat"})},d.createElement(n.zb,{icon:"ico-play-repeat",className:(0,f.default)(k.btnRepeat,M&&k.activeIcon,!L&&k.disabledIcon),onClick:X})),d.createElement("div",{className:k.volumeWrapper},P?d.createElement(n.zb,{icon:"ico-volume-del",onClick:Q,className:!L&&k.disabledIcon}):d.createElement(n.zb,{icon:"ico-volume-increase",onClick:Q,className:!L&&k.disabledIcon}),d.createElement("div",{className:k.volumeSlider},L&&d.createElement(i.ZP,{orientation:"vertical",value:P?0:A,min:0,max:1,step:.01,onChange:K,"aria-labelledby":"vertical-slider",valueLabelDisplay:"auto",valueLabelFormat:e=>Math.round(100*e),className:k.volumeSliderItem}))))}},7390:function(e,t,a){var n=a(85597),o=a(77029),i=a(81719),r=a(67294);let l=(0,i.ZP)("div",{name:"attachmentTitle"})(({theme:e})=>({fontSize:e.mixins.pxToRem(18),marginTop:e.spacing(2),color:e.palette.text.secondary,fontWeight:e.typography.fontWeightBold})),s=(0,i.ZP)("div",{name:"attachment"})(({theme:e})=>({width:"100%",display:"flex",flexWrap:"wrap",justifyContent:"space-between"})),c=(0,i.ZP)("div",{name:"attachmentItemWrapper"})(({theme:e})=>({marginTop:e.spacing(2),flexGrow:0,flexShrink:0,flexBasis:"calc(50% - 8px)",minWidth:300})),d=({attachments:e,size:t})=>{let{i18n:a}=(0,n.OgA)(),i=(0,n.mbX)(e);return i.length?r.createElement(r.Fragment,null,r.createElement(l,null,a.formatMessage({id:"attachments"})),r.createElement(s,null,i.map(e=>{return r.createElement(c,{key:e.id.toString()},r.createElement(o.M$,{fileName:e.file_name,downloadUrl:e.download_url,isImage:e.is_image,fileSizeText:e.file_size_text,size:t,image:null==e?void 0:e.image}))}))):null};t.Z=d}}]);