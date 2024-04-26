import{h as T,a as J,e as K,n as X,u as P,_ as N,o as Z,g as tt}from"./QPage.78f76df2.js";import{g as et,i as j,h as q,j as H,k as ot,N as at,a as nt,l as st,s as rt,f as lt,m as it}from"./OutletOverview.d77ea993.js";import{P as A,O as E,R as B,S as F,_ as G,a2 as M,Y as ut}from"./index.ec68dfd3.js";import{d as O,y as C,c as h,o as b,f as Y,g as s,j as d,l as f,q as I,t as $,e as R,k as i,ai as z,ab as ct,ad as dt,ae as pt,w as ft,Q as _t,a0 as mt,N as vt,a1 as gt}from"./index.b71e64ab.js";import{_ as yt}from"./ButtonGroup.5e99ab46.js";function ht(n,t){t||(t=[]);var a=n?Math.min(t.length,n.length):0,r=t.slice(),e;return function(_){for(e=0;e<a;++e)r[e]=n[e]*(1-_)+t[e]*_;return r}}function $t(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function xt(n,t){var a=t?t.length:0,r=n?Math.min(a,n.length):0,e=new Array(r),_=new Array(a),o;for(o=0;o<r;++o)e[o]=D(n[o],t[o]);for(;o<a;++o)_[o]=t[o];return function(m){for(o=0;o<r;++o)_[o]=e[o](m);return _}}function wt(n,t){var a=new Date;return n=+n,t=+t,function(r){return a.setTime(n*(1-r)+t*r),a}}function bt(n,t){var a={},r={},e;(n===null||typeof n!="object")&&(n={}),(t===null||typeof t!="object")&&(t={});for(e in t)e in n?a[e]=D(n[e],t[e]):r[e]=t[e];return function(_){for(e in a)r[e]=a[e](_);return r}}function D(n,t){var a=typeof t,r;return t==null||a==="boolean"?et(t):(a==="number"?j:a==="string"?(r=q(t))?(t=r,H):ot:t instanceof q?H:t instanceof Date?wt:$t(t)?ht:Array.isArray(t)?xt:typeof t.valueOf!="function"&&typeof t.toString!="function"||isNaN(t)?bt:j)(n,t)}const kt={class:"fit column q-pt-md"},At={class:"col-auto q-pl-md"},It={class:"col full-width"},Ct=O({__name:"GasChart",props:{gasType:{}},setup(n){const t=n,a=C([A().subtract(7,"day").valueOf(),A().valueOf()]),r=C(A(a.value[0]).format("YYYY-MM-DD HH:mm:00")),e=C(A(a.value[1]).format("YYYY-MM-DD HH:mm:00"));function _(){r.value=A(a.value[0]).format("YYYY-MM-DD HH:mm:00"),e.value=A(a.value[1]).format("YYYY-MM-DD HH:mm:00")}function o(g){return g>Date.now()}const m=h(()=>`${B.gas}${t.gasType}?time_start=${r.value}&time_end=${e.value}`),{data:v}=E(m,F,{revalidateOnFocus:!1,dedupingInterval:1e3*60*60*24}),y=["#8e9dff","#26deca","rgba(255, 13, 128, 1)","rgba(255, 255, 0, 1)","rgba(0, 255, 0, 1)","rgba(112, 192, 255, 1)"],x=h(()=>v.value?Object.keys(v.value):[]),c=h(()=>x.value.map((g,k)=>y[k%y.length])),u=h(()=>x.value.map((g,k)=>{var S;return{color:c.value[k],name:g,type:"line",smooth:!0,areaStyle:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:.25,color:c.value[k]},{offset:1,color:"#fff"}]}},emphasis:{focus:"series"},data:((S=v.value)==null?void 0:S[g])||[]}})),w=h(()=>x.value.map(g=>({name:g}))),p=h(()=>({tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{backgroundColor:"#6a7985"}}},legend:{data:w.value,right:"5%"},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"time"}],yAxis:[{type:"value",name:"\u5355\u4F4D: ug/m\xB3"}],series:u.value})),{domRef:l}=T(p);return(g,k)=>{const S=K,V=X,L=G,Q=J,W=at;return b(),Y("div",kt,[s("div",At,[d(Q,{inline:"","label-placement":"left",size:"small"},{default:f(()=>[d(V,{label:"\u8D77\u6B62\u65F6\u95F4"},{default:f(()=>[d(S,{value:a.value,"onUpdate:value":k[0]||(k[0]=U=>a.value=U),type:"datetimerange","is-date-disabled":o},null,8,["value"])]),_:1}),d(V,null,{default:f(()=>[d(L,{"attr-type":"button",onClick:_},{default:f(()=>[I(" \u67E5\u8BE2 ")]),_:1})]),_:1})]),_:1}),d(W,{class:"q-my-none q-py-none",prefix:"bar"},{default:f(()=>[I($(g.gasType.replace("25","2.5")),1)]),_:1})]),s("div",It,[s("div",{class:"fit",ref_key:"chartRef",ref:l},null,512)])])}}});const Yt=n=>(dt("data-v-0a76506b"),n=n(),pt(),n),St={key:0,class:"row relative-position",style:{height:"200px"}},Mt={class:"row fit q-pa-lg justify-start relative-position"},Rt={class:"col-auto"},Dt={class:"text-info"},Et={class:"col text-primary absolute-center env-digit digit-font"},Bt={class:"row fit q-pa-lg justify-end relative-position",style:{transform:"scaleY(-1)"}},Ft={class:"absolute-center text-primary env-digit digit-font"},Ot={class:"col-auto text-right"},Nt={class:"text-warning"},Vt={class:"row fit q-pa-lg justify-start relative-position",style:{transform:"scaleY(-1)"}},jt={class:"col-auto"},qt={class:"text-info"},Ht={class:"col text-primary absolute-center env-digit digit-font"},Tt={class:"row fit q-pa-lg justify-end relative-position"},Pt={class:"col text-primary absolute-center env-digit digit-font"},Gt={class:"col-auto text-right"},zt={class:"text-warning"},Lt={class:"absolute-center env-mid"},Qt={class:"content text-center"},Wt=Yt(()=>s("div",{class:"text-weight-bold",style:{"font-size":"16px"}},"AQI",-1)),Ut={class:"tape-font",style:{"font-size":"32px","line-height":"40px"}},Jt=O({__name:"GasCount",setup(n){const{bool:t}=P(),a=C("PM25");function r(_){a.value=_,t.value=!0}const{data:e}=E(B.realTime,F,{revalidateOnFocus:!1});return(_,o)=>{const m=nt,v=Z,y=Ct,x=st,c=N;return b(),R(c,{title:"\u5B9E\u65F6\u73AF\u5883\u6570\u636E"},{default:f(()=>[i(e)?(b(),Y("div",St,[d(i(M),{onClick:o[0]||(o[0]=u=>r(i(e).fourItem[0].pm.replace("2.5","25"))),class:"col-6 cursor-pointer",style:{width:"50%",height:"100px"}},{default:f(()=>[s("div",Mt,[s("div",Rt,[s("div",null,$(i(e).fourItem[0].company),1),s("div",Dt,$(i(e).fourItem[0].pm),1)]),s("div",Et,[d(m,{from:0,to:i(e).fourItem[0].value},null,8,["to"])])])]),_:1}),d(i(M),{onClick:o[1]||(o[1]=u=>r(i(e).fourItem[1].pm.replace("2.5","25"))),class:"col-6 cursor-pointer",style:{width:"50%",height:"100px",transform:"scaleY(-1)"},reverse:""},{default:f(()=>[s("div",Bt,[s("div",Ft,[d(m,{from:0,to:i(e).fourItem[1].value},null,8,["to"])]),s("div",Ot,[s("div",null,$(i(e).fourItem[1].company),1),s("div",Nt,$(i(e).fourItem[1].pm),1)])])]),_:1}),d(i(M),{onClick:o[2]||(o[2]=u=>r(i(e).fourItem[2].pm.replace("2.5","25"))),class:"col-6 cursor-pointer",style:{width:"50%",height:"100px",transform:"scaleY(-1)"}},{default:f(()=>[s("div",Vt,[s("div",jt,[s("div",null,$(i(e).fourItem[2].company),1),s("div",qt,$(i(e).fourItem[2].pm),1)]),s("div",Ht,[d(m,{from:0,to:i(e).fourItem[2].value},null,8,["to"])])])]),_:1}),d(i(M),{onClick:o[3]||(o[3]=u=>r(i(e).fourItem[3].pm.replace("2.5","25"))),class:"col-6 cursor-pointer",reverse:"",style:{width:"50%",height:"100px"}},{default:f(()=>[s("div",Tt,[s("div",Pt,[d(m,{from:0,to:i(e).fourItem[3].value},null,8,["to"])]),s("div",Gt,[s("div",null,$(i(e).fourItem[3].company),1),s("div",zt,$(i(e).fourItem[3].pm),1)])])]),_:1}),s("div",Lt,[s("div",Qt,[Wt,s("div",Ut,[d(m,{from:0,to:i(e).AQI.value},null,8,["to"])]),d(v,{bordered:!1,type:"success"},{default:f(()=>[I($(i(e).AQI.rate),1)]),_:1})])])])):(b(),R(i(ut),{key:1})),d(x,{title:"\u5386\u53F2\u67E5\u8BE2",modelValue:i(t),"onUpdate:modelValue":o[4]||(o[4]=u=>z(t)?t.value=u:null),style:{width:"40vw"}},{default:f(()=>[d(y,{"gas-type":a.value},null,8,["gas-type"])]),_:1},8,["modelValue"])]),_:1})}}});var se=ct(Jt,[["__scopeId","data-v-0a76506b"]]);const re=O({__name:"AirChart",setup(n){const t=C("month"),a=h(()=>B.air+t.value),{data:r}=E(a,F,{revalidateOnFocus:!1,dedupingInterval:1e3*60*5}),e=["#8e9dff","#26deca","rgba(255, 13, 128, 1)","rgba(255, 255, 0, 1)","rgba(0, 255, 0, 1)","rgba(112, 192, 255, 1)"],_=h(()=>r.value?Object.keys(r.value):[]),o=h(()=>_.value.map((c,u)=>e[u%e.length])),m=h(()=>_.value.map((c,u)=>{var w;return{color:o.value[u],name:c,type:"line",smooth:!0,areaStyle:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:.25,color:o.value[u]},{offset:1,color:"#fff"}]}},emphasis:{focus:"series"},data:((w=r.value)==null?void 0:w[c])||[]}})),v=h(()=>_.value.map(c=>({name:c}))),y=h(()=>({tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{backgroundColor:"#6a7985"}}},legend:{data:v.value},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"time"}],yAxis:[{type:"value",name:"\u5355\u4F4D: ug/m\xB3"}],series:m.value})),{domRef:x}=T(y);return(c,u)=>{const w=G,p=yt,l=N;return b(),R(l,{title:"\u5382\u533A\u73AF\u5883\u53D8\u5316\u8D8B\u52BF"},{"header-extra":f(()=>[d(p,{size:"tiny"},{default:f(()=>[d(w,{type:t.value==="hour"?"primary":"default",onClick:u[0]||(u[0]=g=>t.value="hour")},{default:f(()=>[I(" \u65F6 ")]),_:1},8,["type"]),d(w,{type:t.value==="day"?"primary":"default",onClick:u[1]||(u[1]=g=>t.value="day")},{default:f(()=>[I(" \u65E5 ")]),_:1},8,["type"]),d(w,{type:t.value==="month"?"primary":"default",onClick:u[2]||(u[2]=g=>t.value="month")},{default:f(()=>[I(" \u6708 ")]),_:1},8,["type"])]),_:1})]),default:f(()=>[s("div",{class:"fit",ref_key:"chartRef",ref:x},null,512)]),_:1})}}}),Kt={class:"fit relative-position q-mt-md",id:"outlet"},Xt={key:0,class:"absolute",style:{left:"220px",top:"4px","line-height":"40px",width:"240px"}},Zt={class:"col-9 q-pl-md text-weight-bold"},le=O({__name:"OutletSourceList",setup(n){const{bool:t}=P(),{data:a}=E(B.outletSource,F,{revalidateOnFocus:!1}),r=h(()=>a.value?a.value.reduce((o,m)=>o+m.value,0):0),e=["#5f4cdf","#4677d4","#4bc6ff","#3bf8d8"];ft(()=>a.value,()=>{_()});function _(){const v=[90,80,70,60],y=5,x=[{startAngle:0,endAngle:-Math.PI,innerRadius:v[0]-y,outerRadius:v[0],color:e[0]},{startAngle:0,endAngle:-Math.PI*1.1,innerRadius:v[1]-y,outerRadius:v[1],color:e[1]},{startAngle:0,endAngle:-Math.PI*1.2,innerRadius:v[2]-y,outerRadius:v[2],color:e[2]},{startAngle:0,endAngle:-Math.PI*1.5,innerRadius:v[3]-y,outerRadius:v[3],color:e[3]}],c=rt("#outlet").append("svg").attr("width",480).attr("height",180),u=lt().cornerRadius(10);c.selectAll("path").data(x).enter().append("path").attr("d",p=>u(p)).attr("transform","translate(90, 90)").attr("fill",p=>p.color).transition().duration(1e3).attrTween("d",function(p){const l=D(p.startAngle,p.endAngle);return function(g){return p.endAngle=l(g),u(p)}});const w=c.append("text").attr("x",90).attr("y",90).attr("text-anchor","middle").attr("dominant-baseline","middle").attr("font-size",32).attr("font-family","digital").attr("fill","#fff").text(0);w.transition().duration(1e3).tween("text",function(){const p=D(0,r.value);return function(l){w.text(Math.round(p(l)))}}),e.forEach((p,l)=>{c.append("circle").attr("cx",95).attr("cy",2.5+l*10).attr("r",2.5).attr("fill",p)}),e.forEach((p,l)=>{const g=c.append("defs").append("linearGradient").attr("id",l+"strokeGradient").attr("gradientTransform","rotate(0)");g.append("stop").attr("offset","0%").attr("stop-color",p),g.append("stop").attr("offset","100%").attr("stop-color","rgba(255, 255, 255, 0)"),c.append("rect").attr("x",220).attr("y",4+l*44).attr("width",240).attr("height",40).attr("rx",10).attr("ry",10).style("fill","none").style("stroke",p).style("stroke-width",1).style("stroke",`url(#${l}strokeGradient)`)}),e.forEach((p,l)=>{c.append("path").attr("d",`
        M${95} ${2.5+l*10}
        L${180-l*10} ${2.5+l*10}
        Q${200-l*10} ${2.5+l*10}
          ${200-l*10} ${10+l*10}
         L${200-l*10} ${10+l*44}
         Q${200-l*10} ${24+l*44}
          ${210-l*10} ${24+l*44}
          L${220} ${24+l*44}
        `).attr("stroke",p).attr("stroke-width",1).attr("fill","none")})}return(o,m)=>{const v=it,y=tt,x=N;return b(),R(x,{title:"\u6392\u653E\u6E90\u6E05\u5355\u7BA1\u7406",class:"cursor-pointer",onClick:m[1]||(m[1]=c=>t.value=!0)},{default:f(()=>[s("div",Kt,[i(a)?(b(),Y("div",Xt,[(b(!0),Y(_t,null,mt(i(a),(c,u)=>(b(),Y("div",{class:"row",key:u,style:{"margin-bottom":"4px"}},[s("div",Zt,$(c.name),1),s("div",{class:"col-3 text-right digit-font",style:vt(`font-size: 28px;color:${e[u]}`)},$(c.value),5)]))),128))])):gt("",!0)]),d(y,{modelValue:i(t),"onUpdate:modelValue":m[0]||(m[0]=c=>z(t)?t.value=c:null),title:"\u6392\u653E\u6E90\u6E05\u5355",style:{width:"90vw"}},{default:f(()=>[d(v)]),_:1},8,["modelValue"])]),_:1})}}});export{le as _,re as a,se as b};
