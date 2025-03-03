import{_ as h,o,c as r,a as t,t as l,i as k,p as C,e as x,u as g,d,b as m,F as w,r as v,j as y,w as b,k as N,h as p}from"./entry.Jk-JTMjl.js";import{_ as D}from"./nuxt-link.mFv67-ka.js";import{u as S}from"./vue.f36acd1f.o8AoB-SL.js";const u=e=>(C("data-v-7f7ca6dd"),e=e(),x(),e),$={key:0,class:"row"},j=u(()=>t("h4",{class:"link item2"},"類別",-1)),B=u(()=>t("h4",{class:"header item1"},"公告項目",-1)),L=u(()=>t("h4",{class:"header item3"},"日期",-1)),T=[j,B,L],H={class:"header item2"},I=["href"],z={class:"header item3"},O={__name:"Row",props:{announcement:Object,isHeader:Boolean,index:Number},setup(e){return(s,n)=>e.isHeader?(o(),r("div",$,T)):(o(),r("div",{key:1,class:"row",style:k(e.index%2===0?{background:"rgba(128,128,128,0.15)"}:{background:"rgba(255,255,255,0.1)"})},[t("p",H,l(e.announcement.Category2),1),t("a",{href:`/community/announcements/${e.announcement.No}`,class:"link item1 hover:bg-indigo-100"},l(e.announcement.Title),9,I),t("p",z,l(e.announcement.Date1),1)],4))}},R=h(O,[["__scopeId","data-v-7f7ca6dd"]]),V=[{No:"文青里-001",Community:"文青里",Title:"2023年文青健康守護站",Category:"謝嘉仁",Category1:"3.社團活動與急難救濟",Category2:"3.2 強化社區服務",Subtitle:"提供民眾免費預防保健服務",Description:`<p>為關心社區民眾健康,文青里辦公處與桃園長庚紀念醫院共同設立健康守護站,持續提供民眾免費預防保健服務,歡迎踴躍參加! \r
<ul>\r
<li>日期:每月第一週週六: 3/4 5/6 6/3 7/1 8/5 9/2 10/7 11/4 12/2</li>\r
<li>時間:早上9:00至11:00</li>\r
<li>地點:文青里辦處樓下(文青路202號1樓)【皇翔大樓7-11旁】</li>\r
<li>服務內容:血壓、血糖篩檢 體脂、腰圍測量 醫療詢</li>\r
</ul>\r
記得攜帶「樂活頁」手冊前往蓋章集點唷! <br>\r
提醒您:為提升血糖測量值準確度,建議空腹或飯後二小時前來測量。<br>\r
主辦單位:文青里辦公處、桃園長庚紀念醫院\r
</p>`,Date:"每月/全年",Link:"https://www.facebook.com/groups/1951117865015671/permalink/6469354086525337/?mibextid=zDhOQc"},{No:"文化里-001",Community:"文化里",Title:"歐式花藝班",Category:"黃明助",Category1:"3.社團活動與急難救濟",Category2:"3.1 舉辦社團活動",Subtitle:"第七期課程",Description:`<p>文化社區歐式花藝班 <br>\r
第七期課程，費用3500元\r
<ul>\r
<li>2023/11/16 -法式桌花（冠軍杯）</li>\r
<li>2023/11/30 -葉子造型（不用花器）</li>\r
<li>2023/12/14-劍山插花（黑圓盤）</li>\r
<li>2023/12/21-聖誕節課程</li.\r
<li>2024/01/04 -自然花型（黑圓盤）</li>\r
<li>2024/01-18 -植栽組盆 </li>\r
</ul>\r
</p>`,Date:"2023/11 - 2024/01",Link:"https://www.facebook.com/profile.php?id=100069676248826"},{No:"長庚里-002",Community:"長庚里",Title:"112年終里民聯誼",Category:"林俊源",Category1:"3.社團活動與急難救濟",Category2:"3.1 舉辦社團活動",Subtitle:"暨市政宣導活動 耶誕晚會 園遊會",Description:`      <img src="https://kgptltaqnkidtcqkathb.supabase.co/storage/v1/object/public/a7-images/service/ANN-001.jpg" alt=""\r
        class=" object-fit rounded-xl w-full md:w-1/2 md:rounded-l-xl md:rounded-r-none transform hover:scale-105 hover:rounded-xl duration-200" />`,Date:"12/16/23"},{No:"長庚里-001",Community:"長庚里",Title:"社區照顧 C據點活動",Category:"林俊源",Category1:"3.社團活動與急難救濟",Category2:"3.1 舉辦社團活動",Subtitle:"社區關懷中心 定期活動通告",Description:`<p>長庚里里長  已開辦  社區照顧 C據點活動 巷弄長照站\r
<ul>\r
<li>歡迎住社區的長輩 / 眷屬長輩, 不限有無戶籍 不限宗教</li>\r
<li> 每週三四早上  都可以來參加據點活動: 共餐, 健康操, 手做, 生日派, 桌遊, 團康等 活動課程多元</li>\r
<li>長輩出來走走互動, 認識朋友, 聊天防失智</li>\r
<li>詳請洽社區關懷中心  電話：03-3181831</li>\r
</p>`,Date:"7/17/23",Link:"https://www.facebook.com/profile.php?id=100064026103094"}],q={class:"container"},A=t("mark",null,"公告項目",-1),F={class:"table-container"},E={class:"table-col"},Q={__name:"Service",setup(e){const s=g(),n={newSorted:[...V].filter(a=>a.Category===s.params.name).sort((a,_)=>a.Date-_.Date)};return(a,_)=>{const i=R;return o(),r("div",q,[d(" 里長公告列表: 請點擊 "),A,d(" 查詢相關資訊。 "),t("div",F,[t("div",E,[m(i,{class:"bg-indigo-200",isHeader:!0}),(o(!0),r(w,null,v(n.newSorted,c=>(o(),y(i,{key:c.No,announcement:c},null,8,["announcement"]))),128))])])])}}},G=Q,J={},K={class:"container mb-4 mr-8 flex justify-end"},M=t("button",{class:"btn btn-primary"},"回列表清單",-1);function P(e,s){const n=D;return o(),r("div",K,[m(n,{to:"/community"},{default:b(()=>[M]),_:1})])}const U=h(J,[["render",P]]),Z={__name:"[name]",setup(e){const n=g().params.name;return S({title:"地方行政-里長公告欄: "+n,meta:[{name:"description",content:"A7地方行政-里長公佈欄"}]}),(a,_)=>{const i=G,c=U,f=N;return o(),y(f,{name:"detailpage"},{default:b(()=>[t("div",null,[t("h2",null,l(p(n))+" 公告列表",1),m(i,{name:p(n)},null,8,["name"]),m(c)])]),_:1})}}};export{Z as default};
