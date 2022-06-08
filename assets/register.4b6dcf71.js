var le=Object.defineProperty,te=Object.defineProperties;var ae=Object.getOwnPropertyDescriptors;var D=Object.getOwnPropertySymbols;var oe=Object.prototype.hasOwnProperty,ne=Object.prototype.propertyIsEnumerable;var L=(e,l,n)=>l in e?le(e,l,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[l]=n,y=(e,l)=>{for(var n in l||(l={}))oe.call(l,n)&&L(e,n,l[n]);if(D)for(var n of D(l))ne.call(l,n)&&L(e,n,l[n]);return e},I=(e,l)=>te(e,ae(l));import{U as T}from"./user-api.service.85e35e41.js";import{m as B,J as H,a3 as R,B as m,$ as se,z as V,K as w,b as t,a8 as ie,Z as re,aj as ue,s as de,a5 as ce,H as me,ao as fe,u as C,E as j,P as ve,a7 as pe,N as P,O as ye,a1 as Ve,a6 as be,X as E,y as _e,aF as M,M as ge,F as he,_ as Se,f as we,o as Ie,d as Ce,w as u,k as xe,h as ke,i as q,p as Pe,e as Be,g as $,a as J}from"./index.224af526.js";import{V as x}from"./VContainer.2dea0913.js";import{V as Re}from"./VForm.e6107259.js";import{V as _}from"./VTextField.5fc84803.js";import{V as k}from"./VRow.9d21f4ed.js";import{j as K,m as $e,f as Fe,d as Ae}from"./VCounter.c58ac589.js";import"./http.241ae005.js";const W=Symbol.for("vuetify:selection-control-group"),Ue=B({name:"VSelectionControlGroup",props:{disabled:Boolean,id:String,inline:Boolean,name:String,falseIcon:String,trueIcon:String,multiple:{type:Boolean,default:null},readonly:Boolean,type:String,modelValue:null},emits:{"update:modelValue":e=>!0},setup(e,l){let{slots:n}=l;const s=H(e,"modelValue"),o=R(),i=m(()=>e.id||`v-selection-control-group-${o}`),d=m(()=>e.name||i.value);return se(W,{disabled:V(e,"disabled"),inline:V(e,"inline"),modelValue:s,multiple:m(()=>!!e.multiple||e.multiple==null&&Array.isArray(s.value)),name:d,falseIcon:V(e,"falseIcon"),trueIcon:V(e,"trueIcon"),readonly:V(e,"readonly"),type:V(e,"type")}),w(()=>{var a;return t("div",{class:"v-selection-control-group","aria-labelled-by":e.type==="radio"?i.value:void 0,role:e.type==="radio"?"radiogroup":void 0},[n==null||(a=n.default)==null?void 0:a.call(n)])}),{}}}),X=re(y(y({color:String,disabled:Boolean,error:Boolean,id:String,inline:Boolean,label:String,falseIcon:String,trueIcon:String,ripple:{type:Boolean,default:!0},multiple:{type:Boolean,default:null},name:String,readonly:Boolean,trueValue:null,falseValue:null,modelValue:null,type:String,value:null,valueComparator:{type:Function,default:ue}},de()),ce()));function Oe(e){const l=Ve(W,void 0),{densityClasses:n}=be(e),s=H(e,"modelValue"),o=m(()=>e.trueValue!==void 0?e.trueValue:e.value!==void 0?e.value:!0),i=m(()=>e.falseValue!==void 0?e.falseValue:!1),d=m(()=>(l==null?void 0:l.multiple.value)||!!e.multiple||e.multiple==null&&Array.isArray(s.value)),a=m({get(){const c=l?l.modelValue.value:s.value;return d.value?c.some(r=>e.valueComparator(r,o.value)):e.valueComparator(c,o.value)},set(c){const r=c?o.value:i.value;let f=r;d.value&&(f=c?[...E(s.value),r]:E(s.value).filter(v=>!e.valueComparator(v,o.value))),l?l.modelValue.value=f:s.value=f}}),{textColorClasses:p,textColorStyles:g}=_e(m(()=>a.value&&!e.error&&!e.disabled?e.color:void 0)),b=m(()=>{var c,r;return a.value?(c=l==null?void 0:l.trueIcon.value)!=null?c:e.trueIcon:(r=l==null?void 0:l.falseIcon.value)!=null?r:e.falseIcon});return{group:l,densityClasses:n,trueValue:o,falseValue:i,model:a,textColorClasses:p,textColorStyles:g,icon:b}}const Y=me()({name:"VSelectionControl",directives:{Ripple:fe},inheritAttrs:!1,props:X(),emits:{"update:modelValue":e=>!0},setup(e,l){let{attrs:n,slots:s}=l;const{densityClasses:o,group:i,icon:d,model:a,textColorClasses:p,textColorStyles:g,trueValue:b}=Oe(e),c=R(),r=m(()=>e.id||`input-${c}`),f=C(!1),v=C(!1),h=C();function F(S){f.value=!0,(!M||M&&S.target.matches(":focus-visible"))&&(v.value=!0)}function A(){f.value=!1,v.value=!1}return w(()=>{var S,U,O,G;const Q=s.label?s.label({label:e.label,props:{for:r.value}}):e.label,N=(S=i==null?void 0:i.type.value)!=null?S:e.type;return t("div",{class:["v-selection-control",{"v-selection-control--dirty":a.value,"v-selection-control--disabled":e.disabled,"v-selection-control--error":e.error,"v-selection-control--focused":f.value,"v-selection-control--focus-visible":v.value,"v-selection-control--inline":(i==null?void 0:i.inline.value)||e.inline},o.value]},[t("div",{class:["v-selection-control__wrapper",p.value]},[(U=s.default)==null?void 0:U.call(s),j(t("div",{class:["v-selection-control__input"],style:g.value},[d.value&&t(pe,{icon:d.value},null),j(t("input",P({"onUpdate:modelValue":ee=>a.value=ee,ref:h,disabled:e.disabled,id:r.value,onBlur:A,onFocus:F,readonly:e.readonly,type:N,value:b.value,name:(O=i==null?void 0:i.name.value)!=null?O:e.name,"aria-checked":N==="checkbox"?a.value:void 0},n),null),[[ye,a.value]]),(G=s.input)==null?void 0:G.call(s,{model:a,textColorClasses:p,props:{onFocus:F,onBlur:A,id:r.value}})]),[[ve("ripple"),e.ripple&&[!e.disabled&&!e.readonly,null,["center","circle"]]]])]),t(K,{for:r.value},{default:()=>[Q]})])}),{isFocused:f,input:h}}});function Ge(e){return ie(e,Object.keys(Y.props))}const z=B({name:"VRadio",props:{falseIcon:{type:String,default:"$radioOff"},trueIcon:{type:String,default:"$radioOn"}},setup(e,l){let{slots:n}=l;return w(()=>t(Y,{class:"v-radio",trueIcon:e.trueIcon,falseIcon:e.falseIcon,type:"radio"},n)),{}}});const Ne=B({name:"VRadioGroup",inheritAttrs:!1,props:I(y(y({height:{type:[Number,String],default:"auto"}},$e()),X()),{trueIcon:{type:String,default:"$radioOn"},falseIcon:{type:String,default:"$radioOff"},type:{type:String,default:"radio"}}),setup(e,l){let{attrs:n,slots:s}=l;const o=R(),i=m(()=>e.id||`radio-group-${o}`);return w(()=>{const[d,a]=ge(n),[p,g]=Fe(e),[b,c]=Ge(e),r=s.label?s.label({label:e.label,props:{for:i.value}}):e.label;return t(Ae,P({class:"v-radio-group"},d,p),I(y({},s),{default:f=>{let{isDisabled:v,isReadonly:h}=f;return t(he,null,[r&&t(K,{for:i.value},{default:()=>[r]}),t(Ue,P(b,{id:i.value,trueIcon:e.trueIcon,falseIcon:e.falseIcon,type:e.type,disabled:v.value,readonly:h.value},a),s)])}}))}),{}}}),De={name:"register",data(){return{column:null,inline:null,name:"",last:"",type:"",email:"",password:"",confirmPassword:"",profileService:null}},created(){this.$store.getters.inLogin&&(window.location.href="/")},methods:{submitRegister(){this.type!=""&&(this.type=="client"?(this.name!=""||this.last!=""||this.email!=""||this.password!=""||this.confirmPassword!="")&&(this.profileService=new T,this.profileService.create({email:this.email,password:this.password,url:"/",name:this.name+" "+this.last,type:this.type,description:"",speciality:"",won_cases:"",total_cases:"",lost_cases:""}).then(e=>{e.data.length!=0&&(window.location.href="/login")})):(this.name!=""||this.last!=""||this.email!=""||this.password!=""||this.confirmPassword!="")&&(this.profileService=new T,this.profileService.create({email:this.email,password:this.password,url:"/",name:this.name+" "+this.last,type:this.type,description:"",won_cases:"",total_cases:"",lost_cases:""}).then(e=>{e.data.length!=0&&(window.location.href="/login")})))}}},Z=e=>(Pe("data-v-70fcf776"),e=e(),Be(),e),Le=Z(()=>J("h2",{class:"text-center mt-3"},"Register",-1)),Te=$("You can use letters & numbers"),je=Z(()=>J("h5",{class:"ml-2"},"What type of user are you?",-1)),Ee=$("Login instead"),Me=$(" Register ");function qe(e,l,n,s,o,i){const d=we("router-link");return Ie(),Ce(xe,{class:"mx-auto pd",width:"500"},{default:u(()=>[t(x,{class:"mb-4"},{default:u(()=>[Le]),_:1}),t(Re,{class:"px-3 ml-15 mr-15"},{default:u(()=>[t(k,null,{default:u(()=>[t(_,{color:"blue-darken-3",variant:"outlined",density:"compact",label:"First Name",class:"mr-3",modelValue:o.name,"onUpdate:modelValue":l[0]||(l[0]=a=>o.name=a)},null,8,["modelValue"]),t(_,{color:"blue-darken-3",variant:"outlined",density:"compact",label:"Last Name",class:"ml-3",modelValue:o.last,"onUpdate:modelValue":l[1]||(l[1]=a=>o.last=a)},null,8,["modelValue"])]),_:1}),t(_,{color:"blue-darken-3",variant:"outlined",density:"compact",label:"Email",class:"ml-n3 mr-n3",modelValue:o.email,"onUpdate:modelValue":l[2]||(l[2]=a=>o.email=a)},null,8,["modelValue"]),t(ke,{variant:"text",class:"v-card-text text-blue-darken-3 mt-n12 ml-n7 mb-4",density:"comfortable"},{default:u(()=>[Te]),_:1}),t(x,{class:"ml-n9 mt-n5 mb-n9"},{default:u(()=>[je,t(Ne,{modelValue:o.type,"onUpdate:modelValue":l[3]||(l[3]=a=>o.type=a),inline:""},{default:u(()=>[t(z,{label:"Lawyer",value:"lawyer"}),t(z,{label:"Client",value:"client"})]),_:1},8,["modelValue"])]),_:1}),t(k,null,{default:u(()=>[t(_,{color:"blue-darken-3",variant:"outlined",density:"compact",label:"Password",type:"password",modelValue:o.password,"onUpdate:modelValue":l[4]||(l[4]=a=>o.password=a),class:"mr-3"},null,8,["modelValue"]),t(_,{color:"blue-darken-3",variant:"outlined",density:"compact",label:"Confirm password",type:"password",modelValue:o.confirmPassword,"onUpdate:modelValue":l[5]||(l[5]=a=>o.confirmPassword=a),class:"ml-3"},null,8,["modelValue"])]),_:1}),t(x,{class:"d-flex justify-center mb-5"},{default:u(()=>[t(k,null,{default:u(()=>[t(d,{to:"/login"},{default:u(()=>[t(q,{density:"comfortable",variant:"text",class:"text-blue-darken-3 ml-n3"},{default:u(()=>[Ee]),_:1})]),_:1}),t(q,{density:"comfortable",color:"#1C58AE",class:"text-white ml-16 pd-s",onClick:i.submitRegister},{default:u(()=>[Me]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1})]),_:1})}var el=Se(De,[["render",qe],["__scopeId","data-v-70fcf776"]]);export{el as default};
