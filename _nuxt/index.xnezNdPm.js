import{_ as m}from"./nuxt-img.sa2XtYXc.js";import{o as n,c as i,a as t,b as l,t as c,q as s,m as h,v as _,F as p,r as x,j as f}from"./entry.YFFy7Vdb.js";import{m as b}from"./municipal.CzzlXUDy.js";import{u as v}from"./vue.f36acd1f.PhyrKkPl.js";const k={class:"bg-zinc-100 p-2 rounded-2xl shadow-md w-full md:w-1/2 xl:w-1/3"},g={class:"flex flex-row rounded-l-xl"},w=["href"],$={class:"p-2 md:p-4"},y=["href"],j={style:{"list-style":"none"}},q={key:0},C={key:1},B={key:2},N={class:"flex flex-row mt-4 space-x-4"},S=["href"],z=["href"],O=t("button",{class:"h-10 px-4 rounded-md text-zinc-800 bg-lime-500 hover:bg-lime-700 hover:text-white duration-500"}," 詳細資料 ",-1),V=[O],D={__name:"Card",props:{municipal:Object},setup(e){return(a,r)=>{const o=m;return n(),i("div",k,[t("div",g,[t("a",{href:`municipal/${e.municipal.title}`},[l(o,{src:`https://kgptltaqnkidtcqkathb.supabase.co/storage/v1/object/public/a7-images/municipal/${e.municipal.figure}`,alt:"",class:"object-fit rounded-xl md:rounded-l-xl md:rounded-r-none transform hover:scale-110 hover:rounded-xl duration-200 w-[120px] h-[120px]"},null,8,["src"])],8,w),t("div",$,[t("a",{href:e.municipal.link},c(e.municipal.title),9,y),t("ul",j,[e.municipal.address?(n(),i("li",q,"地址: "+c(e.municipal.address),1)):s("",!0),e.municipal.telephone?(n(),i("li",C,"電話: "+c(e.municipal.telephone),1)):s("",!0),e.municipal.hours?(n(),i("li",B,"時間: "+c(e.municipal.hours),1)):s("",!0)]),t("div",N,[h(t("a",{href:e.municipal.link},[l(o,{class:"h-12 hover:border-yellow-300 hover:border-2",src:"https://kgptltaqnkidtcqkathb.supabase.co/storage/v1/object/public/a7-images/logo/LOG-01-Web.jpeg"})],8,S),[[_,e.municipal.link]]),e.municipal.description?(n(),i("a",{key:0,href:`/municipal/${e.municipal.title}`},V,8,z)):s("",!0)])])])])}}},F=D,L={class:"municipal"},M={class:"flex flex-col md:flex-row flex-wrap"},A={__name:"Cards",setup(e){const a={newSorted:[...b]};return(r,o)=>{const u=F;return n(),i("div",L,[t("div",M,[(n(!0),i(p,null,x(a.newSorted,d=>(n(),f(u,{key:d.id,municipal:d},null,8,["municipal"]))),128))])])}}},E=A,G=t("h1",null,"公共事業 / 政府單位",-1),K={__name:"index",setup(e){return v({title:"地方行政-公共服務",meta:[{name:"description",content:"A7重劃區 政府單位及公共事業資訊交流平台"}]}),(a,r)=>{const o=E;return n(),i("div",null,[G,l(o)])}}};export{K as default};