"use strict";(self.webpackChunk_metafox_react=self.webpackChunk_metafox_react||[]).push([["metafox-feed-blocks-HomeFeedReload-Block"],{15933:function(e,t,n){n.r(t),n.d(t,{default:function(){return u}});var a=n(85597),r=n(16473),o=n(21822),c=n(30120),i=n(81719),l=n(67294);let s=(0,i.ZP)(c.Z,{name:"FeedNotificationNews",slot:"wrapperStyled"})(({theme:e})=>({position:"fixed",top:e.spacing(9),display:"inline-flex",left:"50%",transform:"translateX(-50%)",zIndex:e.zIndex.appBar+10}));function u({pagingId:e}){let{useSession:t,i18n:n,dispatch:c,getSetting:i,triggerScrollTop:u}=(0,a.OgA)(),{user:p}=t(),{key:d}=(0,a.THL)(),[f,m]=l.useState(!1),x=l.useRef(),w=i("activity.feed.check_new_in_minutes"),k=6e4*parseFloat(w),b=p&&!!w,_=l.useCallback(()=>{u&&u()},[]),h=()=>{m(!1),_(),c({type:a._Mp,payload:{pagingId:e}})};return(l.useEffect(()=>{if(b)return(null==x?void 0:x.current)&&clearInterval(x.current),x.current=window.setInterval(()=>{f||c({type:"feed/checkNews",payload:{pagingId:e},meta:{onSuccess:()=>m(!0)}})},k),()=>clearInterval(x.current)},[e,f,b]),l.useEffect(()=>{m(!1)},[d]),b&&f)?l.createElement(s,null,l.createElement(o.Z,{"data-testid":"buttonFetchNewFeed",role:"button",id:"buttonFetchNewFeed",autoFocus:!0,color:"primary",size:"smaller",variant:"contained",onClick:h,sx:{fontWeight:"400 !important",fontSize:"15px !important",borderRadius:"999px",padding:"16px 24px !important"},endIcon:l.createElement(r.zb,{sx:{fontSize:"16px !important"},icon:" ico-arrow-up"})},n.formatMessage({id:"new_posts"}))):null}}}]);