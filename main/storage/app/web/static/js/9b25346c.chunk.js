"use strict";(self.webpackChunk_metafox_react=self.webpackChunk_metafox_react||[]).push([["metafox-form-elements-TypeCategoryField-TypeCategoryField"],{25850:function(e,t,l){l.d(t,{Z:function(){return c}});var r=l(85597),n=l(42853),a=l(47037),o=l.n(a),u=l(67294),i=l(84116);function c({text:e,sx:t,error:l=!1}){let{i18n:a}=(0,r.OgA)();return e?o()(e)&&e.startsWith("<html>")?u.createElement(n.Z,{sx:t,error:l},a.formatMessage({id:"[placeholder]",defaultMessage:e})):u.createElement(n.Z,{sx:t,error:l},u.createElement(i.ZP,{html:e})):null}},45975:function(e,t,l){l.r(t);var r=l(15e3),n=l(39348),a=l(30120),o=l(17888),u=l(22949),i=l(81719),c=l(18948),s=l(68929),d=l.n(s),m=l(13218),p=l.n(m),f=l(67294),h=l(25850);function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r])}return e}).apply(this,arguments)}let y=(0,i.ZP)(a.Z,{name:"MuiOption",slot:"Root"})({height:48,alignItems:"center"}),v=(e,t)=>{return f.createElement(y,g({component:"li"},e),t.label)},b=(e,t)=>`<${e},${t}>`;t.default=function({config:e,name:t,disabled:l,formik:a}){let{variant:i,label:s,size:m="medium",margin:y="normal",color:Z,disabled:E,placeholder:x,description:O,options:C,required:V,fullWidth:k=!0,multiple:M,sx:$}=e,[_,w,{setValue:L,setTouched:W}]=(0,c.U$)(null!=t?t:"type_id"),z=!!(w.error&&(w.touched||a.submitCount)),F=f.useMemo(()=>{let e=[];return(null==C?void 0:C.length)&&C.forEach(t=>{t.categories.forEach(l=>{e.push({value:b(t.id,l.id),label:l.name,typeValue:t.id,typeLabel:t.name,categoryValue:l.id,categoryLabel:l.name})})}),e},[C]),P=f.useMemo(()=>{let e=F.find(e=>e.categoryValue===_.value);return e},[_.value,F]),T=e=>{13===e.keyCode&&e.preventDefault()},j=e=>{let t;e&&(0,r.Z)(e)?t=F.find(t=>t.value===e):p()(e)&&(t=e),t?L(t.categoryValue):L(void 0)},B=()=>{(null==w?void 0:w.touched)||W(!0),L(_.value)};return f.createElement(o.Z,{variant:i,margin:y,fullWidth:k,size:m,"data-testid":d()(`field ${t}`)},f.createElement(n.Z,{id:`select-${t}`,openOnFocus:!0,onBlur:B,options:F,fullWidth:k,groupBy:e=>e.typeLabel,getOptionLabel:e=>{return(null==e?void 0:e.label)||""},color:Z,defaultValue:P,disabled:E||l||a.isSubmitting,onChange:(e,t)=>j(t),size:m,sx:$,multiple:M,renderOption:v,renderInput:e=>f.createElement(u.Z,g({},e,{label:s,onKeyDown:T,fullWidth:k,placeholder:x,required:V,error:z,variant:i,size:m,sx:$,helperText:z&&w.error?w.error:O?f.createElement(h.Z,{text:O}):null}))}))}}}]);