"use strict";(self.webpackChunk_metafox_react=self.webpackChunk_metafox_react||[]).push([["metafox-ui-Feed-Article-FeedEmbedArticleList"],{34958:function(e,t,a){a.r(t);var r=a(67294),l=a(65789);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}let n=e=>r.createElement(l.Z,i({},e,{variant:"list"}));t.default=n},65789:function(e,t,a){var r=a(85597),l=a(77029),i=a(30120),n=a(62097),o=a(22410),s=a(73327),c=a(67294),m=a(75677);let d=(0,o.Z)(e=>(0,s.Z)({item:{display:"block"},itemOuter:{display:"flex",borderRadius:"8px",border:e.mixins.border("secondary"),backgroundColor:e.mixins.backgroundColor("paper"),overflow:"hidden"},title:{"& a":{color:e.palette.text.primary}},description:{color:e.palette.text.secondary,"& p":{margin:0}},hostLink:{color:e.palette.text.secondary},subInfo:{textTransform:"uppercase"},itemInner:{flex:1,minWidth:0,padding:e.spacing(3),display:"flex",flexDirection:"column"},wrapperInfoFlag:{marginTop:"auto"},flagWrapper:{marginLeft:"auto"}}),{name:"MuiFeedArticleTemplate"}),p=e=>{let{image:t,title:a,maxLinesTitle:o=2,description:s,maxLinesDescription:p=3,link:f,host:u,widthImage:g="200px",mediaRatio:h="11",statistic:b,displayStatistic:x="total_view",is_featured:y,variant:E="list"}=e,v=d({mediaRatio:h}),k=(0,n.Z)();return c.createElement(m.Z,{image:t,variant:E,widthImage:g},c.createElement("div",{className:v.itemInner},f?c.createElement(i.Z,{mb:1,fontWeight:600,className:v.title},c.createElement(r.rUS,{to:f},c.createElement(l.Ys,{variant:"h4",lines:o},a))):c.createElement(i.Z,{className:v.title,mb:1,fontWeight:600},c.createElement(l.Ys,{variant:"h4",lines:2},a)),c.createElement(i.Z,{className:v.description,mb:2},c.createElement(l.Ys,{variant:"body1",lines:p},c.createElement("div",{dangerouslySetInnerHTML:{__html:s}}))),c.createElement(i.Z,{className:v.wrapperInfoFlag,display:"flex",justifyContent:"space-between",alignItems:"flex-end"},c.createElement("div",null,f?c.createElement(i.Z,{className:v.subInfo,color:k.palette.text.secondary,fontWeight:600},c.createElement(r.rUS,{to:f,className:v.hostLink},u)):c.createElement(i.Z,{className:v.subInfo,fontSize:"h5.fontSize",color:k.palette.text.secondary,fontWeight:600},u),c.createElement(l.$k,{values:b,display:x,fontStyle:"minor"})),c.createElement("div",{className:v.flagWrapper},y&&c.createElement(l.WN,{type:"is_featured"})))))};t.Z=p},75677:function(e,t,a){var r=a(77029),l=a(27274),i=a(22410),n=a(73327),o=a(86010),s=a(67294);let c=(0,i.Z)(e=>(0,n.Z)({item:{display:"block",marginBottom:e.spacing(2)},itemOuter:{display:"flex",borderRadius:"8px",border:e.mixins.border("secondary"),backgroundColor:e.mixins.backgroundColor("paper"),overflow:"hidden"},media:{width:e=>`${e.widthImage}`,height:e=>`${e.heightImage}`},grid:{"& $itemOuter":{flexDirection:"column","& $media":{width:"100%"}}},list:{"& $itemOuter":{flexDirection:"row",[e.breakpoints.down("xs")]:{flexDirection:"column","& $media":{width:"100%"}}}}}),{name:"MuiFeedEmbedCardBlock"}),m=e=>{let{image:t,widthImage:a="200px",heightImage:i="auto",mediaRatio:n="11",variant:m="list",children:d,link:p,playerOverlay:f=!1,playerOverlayProps:u={},host:g,resource_name:h}=e,b=c({widthImage:a,heightImage:i}),x=!0,y=(0,l.Mf)(t);return"blog"===h&&y&&(x=!1),s.createElement("div",{className:(0,o.default)(b.item,b[m])},s.createElement("div",{className:b.itemOuter},x&&t&&s.createElement("div",{className:b.media},s.createElement(r.Gy,{link:p,src:(0,l.Q4)(t),host:g,aspectRatio:n,playerOverlay:f,playerOverlayProps:u})),d))};t.Z=m}}]);