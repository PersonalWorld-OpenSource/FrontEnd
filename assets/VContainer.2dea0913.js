var s=Object.defineProperty;var t=Object.getOwnPropertySymbols;var i=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable;var o=(n,e,a)=>e in n?s(n,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):n[e]=a,r=(n,e)=>{for(var a in e||(e={}))i.call(e,a)&&o(n,a,e[a]);if(t)for(var a of t(e))l.call(e,a)&&o(n,a,e[a]);return n};import{m as d,n as f,b as m}from"./index.224af526.js";const c=d({name:"VContainer",props:r({fluid:{type:Boolean,default:!1}},f()),setup(n,e){let{slots:a}=e;return()=>m(n.tag,{class:["v-container",{"v-container--fluid":n.fluid}]},a)}});export{c as V};