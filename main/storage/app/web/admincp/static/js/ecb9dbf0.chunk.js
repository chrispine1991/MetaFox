"use strict";(self.webpackChunk_metafox_react=self.webpackChunk_metafox_react||[]).push([["metafox-ui-Feed-Photo-Grid"],{62807:function(e,t,i){i.r(t),i.d(t,{default:function(){return g}});var a=i(85597),l=i(16473),n=i(69452),r=i(27274),s=i(22410),m=i(73327),o=i(86010),d=i(67294);let c=(0,s.Z)(e=>(0,m.Z)({root:{display:"block",marginLeft:e.spacing(-2),marginRight:e.spacing(-2)},listing:{display:"flex",flexFlow:"wrap",margin:e.spacing(-.25)},itemInner:{position:"relative"},item:{display:"block",padding:e.spacing(.25)},item1:{},item2:{},item3:{},item4:{},listing1:{"& $item":{width:"100%"}},listing2:{"& $item":{width:"50%"}},listing3:{"& $item":{width:"50%"},"& $item1":{width:"100%"}},listing4:{"& $item":{width:"50%"}},flag:{position:"absolute",right:e.spacing(2.5),bottom:e.spacing(2.5)},remainBackdrop:{position:"absolute",left:0,right:0,top:0,bottom:0,backgroundColor:"rgba(0,0,0,0.3)","&:hover":{backgroundColor:"rgba(0,0,0,0.1)"}},remainText:{color:"white",position:"absolute",left:"50%",top:"50%",fontSize:"2rem",transform:"translate(-50%,-50%)"},isUpdateAvatar:{width:"100%",maxHeight:"500px"}}),{name:"FeedPhotoGrid"});function g({total_photo:e,total_item:t,photo_set:i,photo_album:s,photos:m,items:g,isUpdateAvatar:u,"data-testid":p}){let{assetUrl:f}=(0,a.OgA)(),h=c(),v=[];m&&m.length>0&&(v=m),g&&g.length>0&&(v=g);let $=null!=e?e:t,b=Math.min(v.length,4)%5,_=$-b,k="";i&&(k=`/media/${i}`),s&&(k=`/media/album/${s}`);let E=v.length<4&&2!==v.length,w=v.length;return d.createElement("div",{className:(0,o.default)(h.root),"data-testid":p},d.createElement("div",{className:(0,o.default)(h.listing,h[`listing${b}`])},v.slice(0,b).map((e,t)=>{return"video"===e.resource_name?e.is_processing?d.createElement("div",{key:`i${null==e?void 0:e.id}`,className:(0,o.default)(h.item,h[`item${t+1}`])},d.createElement(l.Gy,{src:(0,r.Q4)(e.image,0===t&&E?"1024":"500",f("video.video_in_processing_image")),aspectRatio:"169"})):d.createElement("div",{key:`i${null==e?void 0:e.id}`,className:(0,o.default)(h.item,h[`item${t+1}`])},d.createElement(n.Z,{src:e.video_url||e.destination,thumb_url:e.image,autoplayIntersection:1===$,modalUrl:1!==$?`${k}/${e.resource_name}/${e.id}`:""})):d.createElement(a.QVN,{role:"link",to:`${k}/${e.resource_name}/${e.id}`,asModal:!0,className:(0,o.default)(h.item,h[`item${t+1}`]),key:t.toString(),"data-testid":"embeditem"},d.createElement("div",{className:h.itemInner},d.createElement(l.Gy,{src:(0,r.Q4)(e.image||e.avatar,0===t&&E?"1024":"500"),aspectRatio:u||w<2?"auto":"169",imageFit:u?"contain":"cover",imgClass:(0,o.default)({[h.isUpdateAvatar]:u})}),!!e.is_featured&&d.createElement("div",{className:h.flag},d.createElement(l.WN,{type:"is_featured",color:"white","data-testid":"featured"})),0<_&&b===t+1&&d.createElement("div",{className:h.remainBackdrop},d.createElement("div",{className:h.remainText},`+ ${_}`))))})))}}}]);