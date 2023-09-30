"use strict";(self.webpackChunk_metafox_react=self.webpackChunk_metafox_react||[]).push([["FormEditor"],{60752:function(e,t,a){a.r(t),a.d(t,{default:function(){return q}});var r=a(16473),o=a(27274),i=a(17888),l=a(84917),n=a(22410),d=a(73327),m=a(2101),u=a(86010),s=a(9041),c=a(89265),g=a.n(c),p=a(18948),M=a(17247),h=a.n(M),f=a(68929),b=a.n(f),C=a(67294),w=a(35108),L=a(90798),D=a(85597),x=a(73955),S=a.n(x),j=a(45670),E=a(66568),I=a(53055),y=a(29620),N=a(24498),z=a(77745),A=a(50130),k=a(81719),T=a(70214),v=a(84635);function _({onChange:e,onSubmit:t}){let{i18n:a}=(0,D.OgA)(),r={component:"Form",elements:{src:{name:"src",required:!0,component:"DirectUploadFile",label:a.formatMessage({id:"image_url"}),fullWidth:!0,placeholder:a.formatMessage({id:"image_url"}),variant:"outlined",size:"small"},size:{name:"size",component:"Container",variant:"horizontal",elements:{width:{name:"width",component:"Text",margin:"normal",label:a.formatMessage({id:"image_width"}),fullWidth:!1,sx:{maxWith:200},placeholder:a.formatMessage({id:"image_width"}),description:a.formatMessage({id:"image_width_desc"}),variant:"outlined",size:"small"},height:{name:"height",component:"Text",margin:"normal",label:a.formatMessage({id:"image_height"}),fullWidth:!1,sx:{maxWith:200},placeholder:a.formatMessage({id:"image_height"}),description:a.formatMessage({id:"image_height_desc"}),variant:"outlined",size:"small"}}},footer:{name:"_footer",component:"FormFooter",elements:{submit:{name:"_submit",component:"Submit",label:a.formatMessage({id:"ok"}),variant:"contained",color:"primary"}}}}};return C.createElement(v.qu,{formSchema:r,onSubmit:t,initialValues:{src:"",width:"auto",height:"auto"},onChange:e})}function W({onChange:e,onSubmit:t}){let{i18n:a}=(0,D.OgA)(),r={component:"Form",elements:{src:{name:"src",component:"Text",label:a.formatMessage({id:"image_url"}),fullWidth:!0,placeholder:a.formatMessage({id:"image_url"}),variant:"outlined",size:"small"},size:{name:"size",component:"Container",variant:"horizontal",elements:{width:{name:"width",component:"Text",margin:"normal",label:a.formatMessage({id:"image_width"}),fullWidth:!1,sx:{maxWith:200},placeholder:a.formatMessage({id:"image_width"}),description:a.formatMessage({id:"image_width_desc"}),variant:"outlined",size:"small"},height:{name:"height",component:"Text",margin:"normal",label:a.formatMessage({id:"image_height"}),fullWidth:!1,sx:{maxWith:200},placeholder:a.formatMessage({id:"image_height"}),description:a.formatMessage({id:"image_height_desc"}),variant:"outlined",size:"small"}}},footer:{name:"_footer",component:"FormFooter",elements:{submit:{name:"_submit",component:"Submit",label:a.formatMessage({id:"ok"}),variant:"contained",color:"primary"}}}}};return C.createElement(v.qu,{formSchema:r,onSubmit:t,initialValues:{src:"",width:"auto",height:"auto"},onChange:e})}let Y={px:0,py:1},O=(0,k.ZP)(A.Z,{name:"MuiDialogClose"})(()=>({marginLeft:"auto",transform:"translate(4px,0)"}));var Z=function({onExited:e,onChange:t}){let[a,o]=C.useState(!0),{i18n:i,dialogBackend:l}=(0,D.OgA)(),[n,d]=C.useState("1"),[m,u]=C.useState(!1),s=(e,t)=>d(t),c=e=>{t(e),o(!1)},g=e=>{e.stopPropagation()},p=async()=>{if(!m){t(null),o(!1);return}let e=await l.confirm({message:i.formatMessage({id:"the_change_you_made_will_not_be_saved"}),title:i.formatMessage({id:"unsaved_changes"})});e&&(t(null),o(!1))},M=({values:e})=>{u(Boolean(null==e?void 0:e.src))};return C.createElement(j.ZP,{value:n},C.createElement(y.Z,{onClick:g,open:a,maxWidth:"sm",fullWidth:!0,TransitionProps:{onExited:e},onClose:p,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description"},C.createElement(z.Z,{sx:{minHeight:"auto"}},C.createElement(E.Z,{onChange:s,"aria-label":"Images"},C.createElement(T.Z,{label:i.formatMessage({id:"upload"}),value:"1"}),C.createElement(T.Z,{label:i.formatMessage({id:"external_image"}),value:"2"})),C.createElement(O,{size:"small",onClick:p,"data-testid":"buttonClose",role:"button"},C.createElement(r.zb,{icon:"ico-close"}))),C.createElement(N.Z,null,C.createElement(I.Z,{sx:Y,value:"1"},C.createElement(_,{onChange:M,onSubmit:c})),C.createElement(I.Z,{sx:Y,value:"2"},C.createElement(W,{onChange:M,onSubmit:c})))))};let R=[C.createElement(function(e){let[t,a]=C.useState(),{editorState:r,onChange:o}=e,[i,l]=C.useState(),[n,d]=C.useState(),m=C.useCallback(()=>{if(!(null==i?void 0:i.src))return;let e=s.EditorState.forceSelection(r,n),t=e.getCurrentContent().createEntity("IMAGE","IMMUTABLE",i).getLastCreatedEntityKey(),l=s.AtomicBlockUtils.insertAtomicBlock(e,t," ");o(l),a(void 0)},[i,r,o,n]),u=()=>{d(r.getSelection()),a(S()("pick image"))};return C.createElement("div",{"aria-haspopup":"true","aria-expanded":t,"aria-label":"rdw-image-control",className:"rdw-image-wrapper"},C.createElement("div",{onClick:u,className:"rdw-option-wrapper",title:"Image"},C.createElement("img",{src:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMTQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTQuNzQxIDBILjI2Qy4xMTYgMCAwIC4xMzYgMCAuMzA0djEzLjM5MmMwIC4xNjguMTE2LjMwNC4yNTkuMzA0SDE0Ljc0Yy4xNDMgMCAuMjU5LS4xMzYuMjU5LS4zMDRWLjMwNEMxNSAuMTM2IDE0Ljg4NCAwIDE0Ljc0MSAwem0tLjI1OCAxMy4zOTFILjUxN1YuNjFoMTMuOTY2VjEzLjM5eiIvPjxwYXRoIGQ9Ik00LjEzOCA2LjczOGMuNzk0IDAgMS40NC0uNzYgMS40NC0xLjY5NXMtLjY0Ni0xLjY5NS0xLjQ0LTEuNjk1Yy0uNzk0IDAtMS40NC43Ni0xLjQ0IDEuNjk1IDAgLjkzNC42NDYgMS42OTUgMS40NCAxLjY5NXptMC0yLjc4MWMuNTA5IDAgLjkyMy40ODcuOTIzIDEuMDg2IDAgLjU5OC0uNDE0IDEuMDg2LS45MjMgMS4wODYtLjUwOSAwLS45MjMtLjQ4Ny0uOTIzLTEuMDg2IDAtLjU5OS40MTQtMS4wODYuOTIzLTEuMDg2ek0xLjgxIDEyLjE3NGMuMDYgMCAuMTIyLS4wMjUuMTcxLS4wNzZMNi4yIDcuNzI4bDIuNjY0IDMuMTM0YS4yMzIuMjMyIDAgMCAwIC4zNjYgMCAuMzQzLjM0MyAwIDAgMCAwLS40M0w3Ljk4NyA4Ljk2OWwyLjM3NC0zLjA2IDIuOTEyIDMuMTQyYy4xMDYuMTEzLjI3LjEwNS4zNjYtLjAyYS4zNDMuMzQzIDAgMCAwLS4wMTYtLjQzbC0zLjEwNC0zLjM0N2EuMjQ0LjI0NCAwIDAgMC0uMTg2LS4wOC4yNDUuMjQ1IDAgMCAwLS4xOC4xTDcuNjIyIDguNTM3IDYuMzk0IDcuMDk0YS4yMzIuMjMyIDAgMCAwLS4zNTQtLjAxM2wtNC40IDQuNTZhLjM0My4zNDMgMCAwIDAtLjAyNC40My4yNDMuMjQzIDAgMCAwIC4xOTQuMTAzeiIvPjwvZz48L3N2Zz4=",alt:"alt"})),t?C.createElement(Z,{key:t,onExited:m,onChange:l}):null)},{key:"imagePicker"})],Q={options:["inline","fontSize","list","link","history"],inline:{inDropdown:!1}},F={minHeight:"100px"},P={border:"none"},U=(0,n.Z)(e=>(0,d.Z)({formLabel:{paddingLeft:"4px !important"},"formLabel-outlined":{backgroundColor:e.palette.background.paper,paddingRight:e.spacing(.5),paddingLeft:e.spacing(.5),marginLeft:e.spacing(-.5)},RDW:{position:"relative",padding:12,"& #mui-rte-toolbar":{},"& #mui-rte-editor":{},"& .rdw-option-wrapper.rdw-option-active":{borderColor:(0,m.Fq)(e.palette.primary.main,.5),boxShadow:"none",backgroundColor:(0,m.Fq)(e.palette.primary.main,.5),"&:hover":{boxShadow:"none"}},"& .rdw-dropdown-optionwrapper":{background:"light"===e.palette.mode?"#fff":e.palette.background.paper,"& .rdw-dropdownoption-highlighted":{background:"light"===e.palette.mode?"#f1f1f1":e.palette.background.default}},"& .rdw-link-modal, & .rdw-image-modal":{background:"light"===e.palette.mode?"#fff":e.palette.background.paper,boxShadow:"light"===e.palette.mode?"3px 3px 5px #bfbdbd":`3px 3px 5px ${e.palette.background.paper}`},"& .rdw-image-alignment-options-popup":{color:"#050505",background:"light"===e.palette.mode?"#fff":e.palette.background.paper}},"RDW-outlined":{"&:hover":{"& > fieldset":{borderColor:e.palette.text.primary}}},"RDW-outlined-focused":{"& > fieldset":{borderColor:`${e.palette.primary.main} !important`,border:"2px solid"},"& > label":{color:e.palette.primary.main}},"RDW-filled":{},"RDW-standard":{padding:e.spacing(1,0,0,0),borderWidth:"0 0 1px 0"},"RDW-error":{"& > fieldset":{borderColor:`${e.palette.error.main} !important`},"& > label":{color:e.palette.error.main}},hidePlaceholder:{"& .public-DraftEditorPlaceholder-root":{display:"none"}},hiddenToolbar:{display:"none !important"}})),B=/<img([\w\W]+?)>/m,$=/.*?<p/m,G=({config:e,name:t,disabled:a,formik:n})=>{let{label:d,variant:m,color:c,required:M,fullWidth:f=!0,disabled:x,placeholder:S,margin:j="normal"}=e,E=U(),[I,y]=C.useState(!1),[N,z,{setValue:A}]=(0,p.U$)(null!=t?t:"RichTextEditorField"),[k,T]=C.useState(null==N?void 0:N.value),{useIsMobile:v}=(0,D.OgA)(),_=v(),W=C.useRef(!1),Y=C.useRef(s.EditorState.createWithContent(s.ContentState.createFromText(""))),[O,Z]=C.useState(Y.current);C.useEffect(()=>{if(!W.current||N.value!==k){let e=h()(N.value?N.value:""),{contentBlocks:t,entityMap:a}=e,r=s.ContentState.createFromBlockArray(t,a);Y.current=s.EditorState.createWithContent(r),Z(Y.current)}W.current=!0},[N.value]);let G=C.useRef(""),q=C.useCallback(e=>{Z(e);let t=g()((0,s.convertToRaw)(e.getCurrentContent()));t=t.replace($,"<p");let a="";((0,o.oN)(t).trim()||B.test(t))&&(a=t),G.current!==a&&(G.current=t,T(a))},[]);C.useEffect(()=>{A(k)},[k]);let H=C.useCallback(e=>{return!1},[]),V=C.useCallback(()=>{y(!0)},[]),J=C.useCallback(()=>{y(!1)},[]),X=!!(z.error&&(z.touched||n.submitCount)),K=C.useRef(),ee=C.useCallback(e=>{e&&K.current&&K.current.focusEditor()},[]),et=O.getCurrentContent(),ea=!1;return et.hasText()||"unstyled"===et.getBlockMap().first().getType()||(ea=!0),C.createElement(i.Z,{margin:j,required:M,disabled:x||a||n.isSubmitting,fullWidth:f,"data-testid":b()(`field ${t}`)},C.createElement("div",{onClick:ee,className:(0,u.default)(E.RDW,E[`RDW-${m}`],I&&E[`RDW-${m}-focused`],X&&E["RDW-error"],{[E.hidePlaceholder]:ea})},C.createElement(l.Z,{required:M,shrink:!0,variant:m,"data-testid":b()(`input ${t}`),className:(0,u.default)(E.formLabel,E[`formLabel-${m}`],I&&E[`formLabel-${m}-focused`]),disabled:x||a||n.isSubmitting,color:c},d),C.createElement(w.Editor,{ref:K,onFocus:V,onBlur:J,readOnly:x||a||n.isSubmitting,editorState:O,onEditorStateChange:q,placeholder:S,editorStyle:F,handlePastedText:H,"data-testid":b()(`input ${t}`),toolbarStyle:P,toolbar:Q,toolbarCustomButtons:R,toolbarClassName:_&&E.hiddenToolbar}),C.createElement(r.yC,{children:d,variant:m})),X?C.createElement(L.Z,{error:z.error}):null)};var q=G}}]);