import{N as f}from"./notifications-api.service.ffc6a6d0.js";import{_,f as p,o,c as r,a as s,F as h,r as m,d as g,w as t,b as e,g as c,t as i,V as x,h as V,i as k,j as v,k as w}from"./index.224af526.js";import"./http.241ae005.js";const C={name:"notifications",data(){return{notifications:[],notificationsService:null}},created(){this.$store.getters.inLogin||(window.location.href="/"),this.notificationsService=new f,this.notificationsService.getAllNotifications(this.$store.getters.getUser.id).then(n=>{this.notifications=n.data})}},$={class:"d-flex flex-column ma-auto mt-7"},b=s("h2",{class:"text-center"},"Notifications",-1),B={class:"text-green-lighten-1"},N=c("View Message");function S(n,y,A,T,l,j){const d=p("router-link");return o(),r("div",$,[b,s("div",null,[(o(!0),r(h,null,m(l.notifications,(a,u)=>(o(),g(w,{key:u,class:"caso ma-5 rounded-lg"},{default:t(()=>[e(x,null,{default:t(()=>[s("h3",null,[c(i(a.title),1),s("span",B,i(a.condition),1)])]),_:2},1024),e(V,null,{default:t(()=>[s("p",null,i(a.description),1)]),_:2},1024),e(v,{class:"justify-end mr-10 mb-2"},{default:t(()=>[e(d,{class:"text-decoration-none text-black",to:`/consult/${a.casesId}`},{default:t(()=>[e(k,{class:"boton-caso rounded-0 pl-7 pr-7 pt-5 pb-5"},{default:t(()=>[N]),_:1})]),_:2},1032,["to"])]),_:2},1024)]),_:2},1024))),128))])])}var E=_(C,[["render",S]]);export{E as default};