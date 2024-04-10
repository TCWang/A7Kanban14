import{u as i,o as n,c as r,F as b,r as f,a as o,_ as h,b as c,w as u,j as v,k as x,t as g,h as d}from"./entry.eRJiygX1.js";import{_ as k}from"./nuxt-link.YH2G6vtC.js";const w=[{name:"牛煦庭",type:"區域立委",description:`<div class="flex flex-row flex-wrap">\r
<div class="w-full md:w-1/2">\r
<h3>區域立委  選舉政見</h3> <br>\r
 <img src="https://kgptltaqnkidtcqkathb.supabase.co/storage/v1/object/public/a7-images/service/SER-002.png" alt=""\r
        class=" object-fit rounded-xl w-full  md:rounded-l-xl md:rounded-r-none transform hover:scale-105 hover:rounded-xl duration-200" />\r
</div>\r
<div class="w-full md:w-1/2">\r
<h3>議員 選舉政見</h3> <br>\r
 <img src="https://kgptltaqnkidtcqkathb.supabase.co/storage/v1/object/public/a7-images/service/SER-004.png" alt=""\r
        class=" object-fit rounded-xl w-full  md:rounded-l-xl md:rounded-r-none transform hover:scale-105 hover:rounded-xl duration-200" />\r
</div>\r
</div>`},{name:"李宗豪",type:"市議員",description:` <img src="https://kgptltaqnkidtcqkathb.supabase.co/storage/v1/object/public/a7-images/service/SER-003.png" alt=""\r
        class=" object-fit rounded-xl w-full md:w-1/2 md:rounded-l-xl md:rounded-r-none transform hover:scale-105 hover:rounded-xl duration-200" /><br>`},{name:"孫韻璇",type:"市議員",description:` <img src="https://kgptltaqnkidtcqkathb.supabase.co/storage/v1/object/public/a7-images/service/SER-005.png" alt=""\r
        class=" object-fit rounded-xl w-full md:w-1/2 md:rounded-l-xl md:rounded-r-none transform hover:scale-105 hover:rounded-xl duration-200" /><br>`},{name:"陳雅倫",type:"市議員",description:` <img src="https://kgptltaqnkidtcqkathb.supabase.co/storage/v1/object/public/a7-images/service/SER-006.png" alt=""\r
        class=" object-fit rounded-xl w-full md:w-1/2 md:rounded-l-xl md:rounded-r-none transform hover:scale-105 hover:rounded-xl duration-200" /><br>`}],j=["innerHTML"],q={__name:"Politics",setup(l){const s=i(),e={newFiltered:[...w].filter(a=>a.name===s.params.name)};return(a,m)=>(n(),r("div",null,[(n(!0),r(b,null,f(e.newFiltered,t=>(n(),r("div",{key:t.name},[o("div",{innerHTML:t.description},null,8,j)]))),128))]))}},y=q,E={},R={class:"container mb-4 mr-8 flex justify-end"},S=o("button",{class:"btn btn-primary"},"回列表清單",-1);function B(l,s){const e=k;return n(),r("div",R,[c(e,{to:"/councilor"},{default:u(()=>[S]),_:1})])}const L=h(E,[["render",B]]),N={__name:"[name]",setup(l){const e=i().params.name;return(a,m)=>{const t=y,p=L,_=x;return n(),v(_,{name:"detailpage"},{default:u(()=>[o("div",null,[o("h2",null,g(d(e))+" 選舉政見",1),c(t,{name:d(e)},null,8,["name"]),c(p)])]),_:1})}}};export{N as default};
