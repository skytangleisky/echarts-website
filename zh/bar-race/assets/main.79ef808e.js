import{d as e,r as a,c as l,a as s,t as n,F as o,b as t,o as u,p as r,e as d,w as c,f as p,g as m,I as i}from"./vendor.82c46759.js";var v=e({expose:[],props:{msg:{type:String,required:!0}},setup(e){const r=a(10);return(a,d)=>{const c=t("el-input-number");return u(),l(o,null,[s("h1",null,n(e.msg),1),s(c,{modelValue:r.value,"onUpdate:modelValue":d[1]||(d[1]=e=>r.value=e)},null,8,["modelValue"]),s("p",null,"Input Number: "+n(r.value),1)],64)}}});v.__scopeId="data-v-4f9cc77c";const h=c();r("data-v-09a45116");const _=s("h3",null,"Side Nav",-1);d();var E=e({expose:[],setup:e=>(e,a)=>{const n=t("el-aside"),o=t("el-main"),r=t("el-container");return u(),l(r,null,{default:h((()=>[s(n,null,{default:h((()=>[_])),_:1}),s(o,null,{default:h((()=>[s(v,{msg:e.$t("helloWorld")},null,8,["msg"])])),_:1})])),_:1})}});E.__scopeId="data-v-09a45116";const A=window.ECHARTS_WEBSITE_LANGUAGE;void 0===A&&console.error("Can't find environment variable ECHARTS_WEBSITE_LANGUAGE");const f=p({locale:A,messages:{en:{helloWorld:"Hello Apache ECharts"},zh:{helloWorld:"你好 Apache ECharts"}}}),g=m(E);g.use(i),g.use(f),g.mount("#echarts-spa-app");