import{u as d,o as t,c as o,F as _,r as b,a,j as h,w as v,k as g,t as f,h as c,b as l}from"./entry.gCjk-dwS.js";import{_ as x}from"./Back.fz-T6Teo.js";import"./nuxt-link.2X7GHDdi.js";const k=[{name:"牛煦庭",type:"區域立委",description:`<div class="flex flex-row flex-wrap">\r
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
        class=" object-fit rounded-xl w-full md:w-1/2 md:rounded-l-xl md:rounded-r-none transform hover:scale-105 hover:rounded-xl duration-200" /><br>`}],w=["innerHTML"],j={__name:"Politics",setup(i){const s=d(),e={newFiltered:[...k].filter(r=>r.name===s.params.name)};return(r,u)=>(t(),o("div",null,[(t(!0),o(_,null,b(e.newFiltered,n=>(t(),o("div",{key:n.name},[a("div",{innerHTML:n.description},null,8,w)]))),128))]))}},q=j,S={__name:"[name]",setup(i){const e=d().params.name;return(r,u)=>{const n=q,m=x,p=g;return t(),h(p,{name:"detailpage"},{default:v(()=>[a("div",null,[a("h2",null,f(c(e))+" 選舉政見",1),l(n,{name:c(e)},null,8,["name"]),l(m)])]),_:1})}}};export{S as default};
