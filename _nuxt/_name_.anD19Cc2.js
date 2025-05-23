import{u as i,o as n,c as t,F as f,r as x,a as o,_ as v,b as c,w as u,j as h,k as g,t as b,h as l}from"./entry.A2d-GV_b.js";import{_ as w}from"./nuxt-link.ECBm5Pim.js";const k=[{name:"牛煦庭",type:"區域立委",description:`<div class="flex flex-row flex-wrap">\r
<div class="w-full md:w-1/2">\r
<h3>區域立委  選舉政見</h3> <br>\r
 <img src="/images/assets/service/SER-002.png"  alt=""\r
        class=" object-fit rounded-xl w-full  md:rounded-l-xl md:rounded-r-none transform hover:scale-105 hover:rounded-xl duration-200" />\r
</div>\r
<div class="w-full md:w-1/2">\r
<h3>議員 選舉政見</h3> <br>\r
 <img src="https://kgptltaqnkidtcqkathb.supabase.co/storage/v1/object/public/a7-images/service/SER-004.png" alt=""\r
        class=" object-fit rounded-xl w-full  md:rounded-l-xl md:rounded-r-none transform hover:scale-105 hover:rounded-xl duration-200" />\r
</div>\r
</div>`},{name:"李宗豪",type:"市議員",description:` <img src="/images/assets/service/SER-003.png" alt=""\r
        class=" object-fit rounded-xl w-full md:w-1/2 md:rounded-l-xl md:rounded-r-none transform hover:scale-105 hover:rounded-xl duration-200" /><br>`},{name:"孫韻璇",type:"市議員",description:` <img src="/images/assets/service/SER-005.png" alt=""\r
        class=" object-fit rounded-xl w-full md:w-1/2 md:rounded-l-xl md:rounded-r-none transform hover:scale-105 hover:rounded-xl duration-200" /><br>`},{name:"陳雅倫",type:"市議員",description:` <img src="/images/assets/service/SER-006.png" alt=""\r
        class=" object-fit rounded-xl w-full md:w-1/2 md:rounded-l-xl md:rounded-r-none transform hover:scale-105 hover:rounded-xl duration-200" /><br>`}],y=["innerHTML"],j={__name:"Politics",setup(d){const s=i(),e={newFiltered:[...k].filter(a=>a.name===s.params.name)};return(a,m)=>(n(),t("div",null,[(n(!0),t(f,null,x(e.newFiltered,r=>(n(),t("div",{key:r.name},[o("div",{innerHTML:r.description},null,8,y)]))),128))]))}},E=j,R={},S={class:"container mb-4 mr-8 flex justify-end"},B=o("button",{class:"btn btn-primary"},"回列表清單",-1);function L(d,s){const e=w;return n(),t("div",S,[c(e,{to:"/councilor"},{default:u(()=>[B]),_:1})])}const $=v(R,[["render",L]]),C={__name:"[name]",setup(d){const e=i().params.name;return(a,m)=>{const r=E,_=$,p=g;return n(),h(p,{name:"detailpage"},{default:u(()=>[o("div",null,[o("h2",null,b(l(e))+" 選舉政見",1),c(r,{name:l(e)},null,8,["name"]),c(_)])]),_:1})}}};export{C as default};
