"use strict";(self.webpackChunk_metafox_react=self.webpackChunk_metafox_react||[]).push([["metafox-music-blocks-AddMusic-Block"],{78928:function(e,t,a){a.r(t);var n=a(84635),r=a(85597),l=a(21241),o=a(77029),c=a(30120),i=a(50130),s=a(81719),m=a(67294),u=a(17563);function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}let p=(0,s.ZP)("div",{name:"Tab",slot:"container"})(({theme:e})=>({display:"flex",flexDirection:"row"})),b=(0,s.ZP)("div",{name:"Tab",slot:"item",shouldForwardProp:e=>"active"!==e})(({theme:e,active:t})=>({cursor:"pointer",textTransform:"uppercase",fontWeight:e.typography.fontWeightBold,fontSize:e.mixins.pxToRem(15),padding:e.spacing(2,0),marginRight:e.spacing(3.75),color:e.palette.text.secondary,borderBottom:"solid 2px",borderBottomColor:"transparent",...t&&{color:e.palette.primary.main,borderBottomColor:e.palette.primary.main}})),g=(0,s.ZP)(c.Z,{name:"Tab",slot:"panels"})(({theme:e})=>({})),f=(0,s.ZP)(c.Z,{name:"Tab",slot:"panel"})(({theme:e,active:t})=>({display:t?"block":"none"})),E=({name:e,tab:t})=>{let{dispatch:a,usePageParams:l}=(0,r.OgA)(),o=(0,r.THL)(),c=(null==o?void 0:o.search)?u.parse(o.search.replace(/^\?/,"")):{},i=l(),s=m.useCallback(n=>{e&&a({type:"formValues/onChange",payload:{formName:`music.${t}.${e}`,data:n}})},[]),d=(0,r.oHF)("music",t,e);return m.createElement(n.AO,{onChange:s,noHeader:!0,dataSource:{...d,apiParams:{id:i.id,...c}}})},h=({icon:e="ico-arrow-left",...t})=>{let{navigate:a}=(0,r.OgA)(),n=()=>{a(-1)};return m.createElement(i.Z,d({size:"small",role:"button",id:"back","data-testid":"buttonBack",sx:{transform:"translate(-5px,0)"},onClick:n},t),m.createElement(o.zb,{icon:e}))};t.default=(0,r.j4Z)({extendBlock:function({title:e}){let[t,a]=m.useState("song"),{i18n:n,getAcl:o}=(0,r.OgA)(),c=o("music.music_album.create"),i=o("music.music_song.create");return m.createElement(l.gO,null,i&&m.createElement(l.ti,null,m.createElement(l.bi,null,m.createElement(h,null),n.formatMessage({id:e}))),m.createElement(l.sU,null,c&&i&&m.createElement(p,null,m.createElement(b,{active:"song"===t,onClick:()=>a("song")},n.formatMessage({id:"song"})),m.createElement(b,{active:"album"===t,onClick:()=>a("album")},n.formatMessage({id:"album"}))),m.createElement(g,null,m.createElement(f,{active:"song"===t},m.createElement(E,{name:"addItem",tab:"music_song"})),c&&m.createElement(f,{active:"album"===t},m.createElement(E,{name:"addItem",tab:"music_album"})))))},overrides:{noHeader:!1}})}}]);