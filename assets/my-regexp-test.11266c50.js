import{k as o,o as n,c as i,a as e,G as u,J as l,K as g}from"./app.3ad2f83b.js";import{_ as c}from"./plugin-vue_export-helper.21dcd24c.js";const _={class:"reg-body"},x={class:"reg-search reg-bar"},b={class:"reg-form"},m={key:0},h=["src"],v={__name:"my-regexp-test",setup(f){const t=o(".*?"),s=o(`https://jex.im/regulex/#!embed=true&flags=&re=${t.value}`),r=o(!0);function p(){r.value=!1,setTimeout(()=>{r.value=!0},50),s.value=`https://jex.im/regulex/#!embed=true&flags=&re=${t.value}`}return(y,a)=>(n(),i("div",_,[e("div",x,[e("div",b,[u(e("input",{class:"reg-input",placeholder:"\u8F93\u5165\u6B63\u5219\u8868\u8FBE\u5F0F","onUpdate:modelValue":a[0]||(a[0]=d=>t.value=d),name:"cname",type:"text"},null,512),[[l,t.value]]),e("button",{class:"reg-btn",onClick:p})])]),r.value?(n(),i("div",m,[e("iframe",{frameborder:"0",width:"100%",height:"400px",src:s.value},null,8,h)])):g("",!0)]))}};var T=c(v,[["__file","my-regexp-test.vue"]]);export{T as default};