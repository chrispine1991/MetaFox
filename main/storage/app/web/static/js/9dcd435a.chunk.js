"use strict";(self.webpackChunk_metafox_react=self.webpackChunk_metafox_react||[]).push([["metafox-livestreaming-components-WatchingUsers"],{48677:function(e,t,n){n.r(t);var l=n(67294),r=n(81719),a=n(91647),i=n(30120),o=n(85597),s=n(77029),u=n(70917);let c=u.F4`
    0% {transform: translateY(100%);}
    100% {transform: translateY(0);}
`,f="WatchingViewer",m=(0,r.ZP)(i.Z,{name:f,slot:"animationWrapper",shouldForwardProp:e=>"isOwner"!==e})(({theme:e,spinner:t})=>({display:"inline-flex",animation:`${c} 1s forwards`})),d=(0,r.ZP)(i.Z,{name:f,slot:"Wrapper"})(({theme:e})=>({display:"block",overflow:"hidden"}));t.default=(0,o.SuR)(function({streamKey:e,identity:t}){let{firebaseBackend:n,i18n:r,usePrevious:u}=(0,o.OgA)(),[c,f]=l.useState(0),[p,v]=l.useState(!1),h=n.getFirestore(),g=l.useRef(),w=(0,o.zjB)(h,{collection:"live_video_view",docID:e}),_=(null==w?void 0:w.view)||[],E=u(_.length),Z=_.length;if(l.useEffect(()=>{if(Z&&c+1>=Z){g.current=setTimeout(()=>{v(!0)},2e3);return}v(!1),clearTimeout(g.current),g.current=setTimeout(()=>{f(e=>e+1)},2e3)},[c]),l.useEffect(()=>{p&&Z!==E&&(Z>E&&v(!1),f(_.length-1))},[null==_?void 0:_.length]),p||!e||!(null==_?void 0:_.length))return null;let k=_[c];return k?l.createElement(d,{pt:1},l.createElement(m,{key:`${null==k?void 0:k.id}`,sx:{display:"flex"}},l.createElement(i.Z,{mr:1},l.createElement(s.Yt,{user:k,size:24})),l.createElement(i.Z,null,l.createElement(a.Z,{component:"span",variant:"body1"},r.formatMessage({id:"user_joined"},{user_name:null==k?void 0:k.full_name}))))):null})}}]);