import{h as T,a as K,e as X,n as Z,u as G,_ as V,o as tt,g as et}from"./QPage.10c2bf53.js";import{g as ot,i as q,h as H,j as P,k as at,N as nt,a as st,l as rt,s as lt,f as it,m as ut}from"./OutletOverview.69be6e0c.js";import{P as A,O as F,R as B,S as O,_ as z,a2 as M,Y as ct}from"./index.3fb24c35.js";import{d as N,y as I,c as y,o as w,f as Y,g as s,j as d,l as f,q as C,e as R,k as c,t as b,ai as L,ab as dt,ad as pt,ae as ft,w as _t,Q as mt,a0 as vt,N as gt,a1 as ht}from"./index.b811bc3c.js";import{_ as yt}from"./ButtonGroup.a0521572.js";function xt(n,t){t||(t=[]);var a=n?Math.min(t.length,n.length):0,r=t.slice(),e;return function(_){for(e=0;e<a;++e)r[e]=n[e]*(1-_)+t[e]*_;return r}}function $t(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function wt(n,t){var a=t?t.length:0,r=n?Math.min(a,n.length):0,e=new Array(r),_=new Array(a),o;for(o=0;o<r;++o)e[o]=E(n[o],t[o]);for(;o<a;++o)_[o]=t[o];return function(m){for(o=0;o<r;++o)_[o]=e[o](m);return _}}function kt(n,t){var a=new Date;return n=+n,t=+t,function(r){return a.setTime(n*(1-r)+t*r),a}}function bt(n,t){var a={},r={},e;(n===null||typeof n!="object")&&(n={}),(t===null||typeof t!="object")&&(t={});for(e in t)e in n?a[e]=E(n[e],t[e]):r[e]=t[e];return function(_){for(e in a)r[e]=a[e](_);return r}}function E(n,t){var a=typeof t,r;return t==null||a==="boolean"?ot(t):(a==="number"?q:a==="string"?(r=H(t))?(t=r,P):at:t instanceof H?P:t instanceof Date?kt:$t(t)?xt:Array.isArray(t)?wt:typeof t.valueOf!="function"&&typeof t.toString!="function"||isNaN(t)?bt:q)(n,t)}const At={class:"fit column q-pt-md"},Ct={class:"col-auto q-pl-md"},It={class:"col full-width"},Yt=N({__name:"GasChart",props:{gasType:{}},setup(n){const t=n,a=I([A().subtract(7,"day").valueOf(),A().valueOf()]),r=I(A(a.value[0]).format("YYYY-MM-DD HH:mm:00")),e=I(A(a.value[1]).format("YYYY-MM-DD HH:mm:00"));function _(){r.value=A(a.value[0]).format("YYYY-MM-DD HH:mm:00"),e.value=A(a.value[1]).format("YYYY-MM-DD HH:mm:00")}function o(g){return g>Date.now()}const m=y(()=>`${B.gas}${t.gasType}?time_start=${r.value}&time_end=${e.value}`),{data:v}=F(m,O,{revalidateOnFocus:!1,dedupingInterval:1e3*60*60*24}),h=["#8e9dff","#26deca","rgba(255, 13, 128, 1)","rgba(255, 255, 0, 1)","rgba(0, 255, 0, 1)","rgba(112, 192, 255, 1)"],x=y(()=>v.value?Object.keys(v.value):[]),u=y(()=>x.value.map((g,k)=>h[k%h.length])),i=y(()=>x.value.map((g,k)=>{var D;return{color:u.value[k],name:g,type:"line",smooth:!0,areaStyle:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:.25,color:u.value[k]},{offset:1,color:"#fff"}]}},emphasis:{focus:"series"},data:((D=v.value)==null?void 0:D[g])||[]}})),$=y(()=>x.value.map(g=>({name:g}))),p=y(()=>({tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{backgroundColor:"#6a7985"}}},legend:{data:$.value,right:"5%"},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"time"}],yAxis:[{type:"value",name:"\u5355\u4F4D: ug/m\xB3"}],series:i.value})),{domRef:l}=T(p);return(g,k)=>{const D=X,j=Z,Q=z,W=K,U=nt;return w(),Y("div",At,[s("div",Ct,[d(W,{inline:"","label-placement":"left",size:"small"},{default:f(()=>[d(j,{label:"\u8D77\u6B62\u65F6\u95F4"},{default:f(()=>[d(D,{value:a.value,"onUpdate:value":k[0]||(k[0]=J=>a.value=J),type:"datetimerange","is-date-disabled":o},null,8,["value"])]),_:1}),d(j,null,{default:f(()=>[d(Q,{"attr-type":"button",onClick:_},{default:f(()=>[C(" \u67E5\u8BE2 ")]),_:1})]),_:1})]),_:1}),d(U,{class:"q-my-none q-py-none",prefix:"bar"},{default:f(()=>[C(" \u4E00\u5927\u961F ")]),_:1})]),s("div",It,[s("div",{class:"fit",ref_key:"chartRef",ref:l},null,512)])])}}});const S=n=>(pt("data-v-31ef8d51"),n=n(),ft(),n),St={key:0,class:"row relative-position",style:{height:"200px"}},Dt={class:"row fit q-pa-lg justify-start relative-position"},Mt={class:"col-auto"},Rt=S(()=>s("div",null,"\u4E00\u5927\u961F",-1)),Et={class:"text-info"},Ft={class:"col text-primary absolute-center env-digit digit-font"},Bt={class:"row fit q-pa-lg justify-end relative-position",style:{transform:"scaleY(-1)"}},Ot={class:"absolute-center text-primary env-digit digit-font"},Nt={class:"col-auto text-right"},Vt=S(()=>s("div",null,"\u4E8C\u5927\u961F",-1)),jt={class:"text-warning"},qt={class:"row fit q-pa-lg justify-start relative-position",style:{transform:"scaleY(-1)"}},Ht={class:"col-auto"},Pt=S(()=>s("div",null,"\u4E09\u5927\u961F",-1)),Tt={class:"text-info"},Gt={class:"col text-primary absolute-center env-digit digit-font"},zt={class:"row fit q-pa-lg justify-end relative-position"},Lt={class:"col text-primary absolute-center env-digit digit-font"},Qt={class:"col-auto text-right"},Wt=S(()=>s("div",null,"\u56DB\u5927\u961F",-1)),Ut={class:"text-warning"},Jt={class:"absolute-center env-mid"},Kt={class:"content text-center"},Xt=S(()=>s("div",{class:"text-weight-bold",style:{"font-size":"16px"}},"AQI",-1)),Zt={class:"tape-font",style:{"font-size":"32px","line-height":"40px"}},te=N({__name:"GasCount",setup(n){const{bool:t}=G(),a=I("PM25");function r(_){a.value=_,t.value=!0}const{data:e}=F(B.realTime,O,{revalidateOnFocus:!1});return(_,o)=>{const m=st,v=tt,h=Yt,x=rt,u=V;return w(),R(u,{title:"\u5B9E\u65F6\u6570\u636E"},{default:f(()=>[c(e)?(w(),Y("div",St,[d(c(M),{onClick:o[0]||(o[0]=i=>r(c(e).fourItem[0].pm.replace("2.5","25"))),class:"col-6 cursor-pointer",style:{width:"50%",height:"100px"}},{default:f(()=>[s("div",Dt,[s("div",Mt,[Rt,s("div",Et,b(c(e).fourItem[0].pm),1)]),s("div",Ft,[d(m,{from:0,to:c(e).fourItem[0].value},null,8,["to"])])])]),_:1}),d(c(M),{onClick:o[1]||(o[1]=i=>r(c(e).fourItem[1].pm.replace("2.5","25"))),class:"col-6 cursor-pointer",style:{width:"50%",height:"100px",transform:"scaleY(-1)"},reverse:""},{default:f(()=>[s("div",Bt,[s("div",Ot,[d(m,{from:0,to:c(e).fourItem[1].value},null,8,["to"])]),s("div",Nt,[Vt,s("div",jt,b(c(e).fourItem[1].pm),1)])])]),_:1}),d(c(M),{onClick:o[2]||(o[2]=i=>r(c(e).fourItem[2].pm.replace("2.5","25"))),class:"col-6 cursor-pointer",style:{width:"50%",height:"100px",transform:"scaleY(-1)"}},{default:f(()=>[s("div",qt,[s("div",Ht,[Pt,s("div",Tt,b(c(e).fourItem[2].pm),1)]),s("div",Gt,[d(m,{from:0,to:c(e).fourItem[2].value},null,8,["to"])])])]),_:1}),d(c(M),{onClick:o[3]||(o[3]=i=>r(c(e).fourItem[3].pm.replace("2.5","25"))),class:"col-6 cursor-pointer",reverse:"",style:{width:"50%",height:"100px"}},{default:f(()=>[s("div",zt,[s("div",Lt,[d(m,{from:0,to:c(e).fourItem[3].value},null,8,["to"])]),s("div",Qt,[Wt,s("div",Ut,b(c(e).fourItem[3].pm),1)])])]),_:1}),s("div",Jt,[s("div",Kt,[Xt,s("div",Zt,[d(m,{from:0,to:c(e).AQI.value},null,8,["to"])]),d(v,{bordered:!1,type:"success"},{default:f(()=>[C(b(c(e).AQI.rate),1)]),_:1})])])])):(w(),R(c(ct),{key:1})),d(x,{title:"\u5386\u53F2\u67E5\u8BE2",modelValue:c(t),"onUpdate:modelValue":o[4]||(o[4]=i=>L(t)?t.value=i:null),style:{width:"40vw"}},{default:f(()=>[d(h,{"gas-type":a.value},null,8,["gas-type"])]),_:1},8,["modelValue"])]),_:1})}}});var ue=dt(te,[["__scopeId","data-v-31ef8d51"]]);const ce=N({__name:"AirChart",setup(n){const t=I("month"),a=y(()=>B.air+t.value),{data:r}=F(a,O,{revalidateOnFocus:!1,dedupingInterval:1e3*60*5}),e=["#8e9dff","#26deca","rgba(255, 13, 128, 1)","rgba(255, 255, 0, 1)","rgba(0, 255, 0, 1)","rgba(112, 192, 255, 1)"],_=y(()=>r.value?Object.keys(r.value):[]),o=y(()=>_.value.map((u,i)=>e[i%e.length])),m=y(()=>_.value.map((u,i)=>{var $;return{color:o.value[i],name:u,type:"line",smooth:!0,areaStyle:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:.25,color:o.value[i]},{offset:1,color:"#fff"}]}},emphasis:{focus:"series"},data:(($=r.value)==null?void 0:$[u])||[]}})),v=y(()=>_.value.map(u=>({name:u}))),h=y(()=>({tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{backgroundColor:"#6a7985"}}},legend:{data:v.value},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"time"}],yAxis:[{type:"value",name:"\u5355\u4F4D: ug/m\xB3"}],series:m.value})),{domRef:x}=T(h);return(u,i)=>{const $=z,p=yt,l=V;return w(),R(l,{title:"\u7279\u5F81\u6307\u6807\u53D8\u5316\u8D8B\u52BF"},{"header-extra":f(()=>[d(p,{size:"tiny"},{default:f(()=>[d($,{type:t.value==="hour"?"primary":"default",onClick:i[0]||(i[0]=g=>t.value="hour")},{default:f(()=>[C(" \u65F6 ")]),_:1},8,["type"]),d($,{type:t.value==="day"?"primary":"default",onClick:i[1]||(i[1]=g=>t.value="day")},{default:f(()=>[C(" \u65E5 ")]),_:1},8,["type"]),d($,{type:t.value==="month"?"primary":"default",onClick:i[2]||(i[2]=g=>t.value="month")},{default:f(()=>[C(" \u6708 ")]),_:1},8,["type"])]),_:1})]),default:f(()=>[s("div",{class:"fit",ref_key:"chartRef",ref:x},null,512)]),_:1})}}}),ee={class:"fit relative-position q-mt-md",id:"outlet"},oe={key:0,class:"absolute",style:{left:"220px",top:"4px","line-height":"40px",width:"240px"}},ae={class:"col-9 q-pl-md text-weight-bold"},de=N({__name:"OutletSourceList",setup(n){const{bool:t}=G(),{data:a}=F(B.outletSource,O,{revalidateOnFocus:!1}),r=y(()=>a.value?a.value.reduce((o,m)=>o+m.value,0):0),e=["#5f4cdf","#4677d4","#4bc6ff","#3bf8d8"];_t(()=>a.value,()=>{_()});function _(){const v=[90,80,70,60],h=5,x=[{startAngle:0,endAngle:-Math.PI,innerRadius:v[0]-h,outerRadius:v[0],color:e[0]},{startAngle:0,endAngle:-Math.PI*1.1,innerRadius:v[1]-h,outerRadius:v[1],color:e[1]},{startAngle:0,endAngle:-Math.PI*1.2,innerRadius:v[2]-h,outerRadius:v[2],color:e[2]},{startAngle:0,endAngle:-Math.PI*1.5,innerRadius:v[3]-h,outerRadius:v[3],color:e[3]}],u=lt("#outlet").append("svg").attr("width",480).attr("height",180),i=it().cornerRadius(10);u.selectAll("path").data(x).enter().append("path").attr("d",p=>i(p)).attr("transform","translate(90, 90)").attr("fill",p=>p.color).transition().duration(1e3).attrTween("d",function(p){const l=E(p.startAngle,p.endAngle);return function(g){return p.endAngle=l(g),i(p)}});const $=u.append("text").attr("x",90).attr("y",90).attr("text-anchor","middle").attr("dominant-baseline","middle").attr("font-size",32).attr("font-family","digital").attr("fill","#fff").text(0);$.transition().duration(1e3).tween("text",function(){const p=E(0,r.value);return function(l){$.text(Math.round(p(l)))}}),e.forEach((p,l)=>{u.append("circle").attr("cx",95).attr("cy",2.5+l*10).attr("r",2.5).attr("fill",p)}),e.forEach((p,l)=>{const g=u.append("defs").append("linearGradient").attr("id",l+"strokeGradient").attr("gradientTransform","rotate(0)");g.append("stop").attr("offset","0%").attr("stop-color",p),g.append("stop").attr("offset","100%").attr("stop-color","rgba(255, 255, 255, 0)"),u.append("rect").attr("x",220).attr("y",4+l*44).attr("width",240).attr("height",40).attr("rx",10).attr("ry",10).style("fill","none").style("stroke",p).style("stroke-width",1).style("stroke",`url(#${l}strokeGradient)`)}),e.forEach((p,l)=>{u.append("path").attr("d",`
        M${95} ${2.5+l*10}
        L${180-l*10} ${2.5+l*10}
        Q${200-l*10} ${2.5+l*10}
          ${200-l*10} ${10+l*10}
         L${200-l*10} ${10+l*44}
         Q${200-l*10} ${24+l*44}
          ${210-l*10} ${24+l*44}
          L${220} ${24+l*44}
        `).attr("stroke",p).attr("stroke-width",1).attr("fill","none")})}return(o,m)=>{const v=ut,h=et,x=V;return w(),R(x,{title:"\u5B89\u5168\u6E05\u5355\u7BA1\u7406",class:"cursor-pointer",onClick:m[1]||(m[1]=u=>t.value=!0)},{default:f(()=>[s("div",ee,[c(a)?(w(),Y("div",oe,[(w(!0),Y(mt,null,vt(c(a),(u,i)=>(w(),Y("div",{class:"row",key:i,style:{"margin-bottom":"4px"}},[s("div",ae,b(u.name),1),s("div",{class:"col-3 text-right digit-font",style:gt(`font-size: 28px;color:${e[i]}`)},b(u.value),5)]))),128))])):ht("",!0)]),d(h,{modelValue:c(t),"onUpdate:modelValue":m[0]||(m[0]=u=>L(t)?t.value=u:null),title:"\u5B89\u5168\u6E05\u5355",style:{width:"90vw"}},{default:f(()=>[d(v)]),_:1},8,["modelValue"])]),_:1})}}});export{de as _,ce as a,ue as b};