"use strict";(self.webpackChunk_metafox_react=self.webpackChunk_metafox_react||[]).push([["metafox-form-elements-AttachPollField-AttachPollField"],{89873:function(e,t,l){l.r(t);var a=l(85597),r=l(18948),n=l(67294),o=l(90798),i=l(21822),c=l(81719),d=l(30120),u=l(17888),s=l(68929),m=l.n(s),h=l(77029);let f=(0,c.ZP)(i.Z,{name:"AttachPollButton"})(()=>({fontWeight:"bold"})),v=({config:e,name:t,disabled:l,formik:i})=>{var c;let{jsxBackend:s,dialogBackend:v,i18n:p}=(0,a.OgA)(),{disabled:b,formUrl:g,fullWidth:E=!0,margin:P="normal",size:k}=e,[A,Z,{setValue:_}]=(0,r.U$)(null!=t?t:"AttachPollField"),C=e.placeholder||p.formatMessage({id:"attach_poll"}),w=n.useCallback(()=>{v.present({component:"poll.dialog.AttachPollDialog",props:{formUrl:g}}).then(e=>{e&&_(e)})},[v,g,_]),x=null==A?void 0:A.value,z=Z.error;return n.createElement(u.Z,{fullWidth:E,margin:P,size:k,"data-testid":m()(`field ${t}`)},n.createElement("div",null,n.createElement(f,{variant:"outlined",size:"small",color:"primary","data-testid":m()(`button ${t}`),onClick:w,disabled:b||l||i.isSubmitting||!!x,startIcon:n.createElement(h.zb,{icon:"ico-barchart-o"})},C)),x?n.createElement(d.Z,{mt:2},s.render({component:"AttachPollPreview",props:{value:x,formUrl:g,handleRemove:()=>_(null),handleEdit:_}})):null,Z.error&&!z?n.createElement(o.Z,{error:null===(c=Z.error)||void 0===c?void 0:c.toString()}):null)};t.default=v},90798:function(e,t,l){l.d(t,{Z:function(){return i}});var a=l(67294),r=l(13218),n=l.n(r);let o=e=>{return e?n()(e)?o(Object.values(e)[0]):e.toString():null};function i({error:e,className:t="invalid-feedback order-last"}){return e?a.createElement("div",{"data-testid":"error",className:t},o(e)):null}}}]);