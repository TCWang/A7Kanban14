<template>
  <div class="">
    <div>
      <h1>A7新林口-社區網站</h1>
      <h2>網站宗旨</h2>
      <p>
        A7 新林口 社區網站是提供給A7 重劃區的居民資訊溝通平台。A7
        重劃區是全新的社區造鎮,
        居民搬遷到此需要對新的生活環境有全面的認識。本網站將提供居民全面性的資訊溝通管道。
      </p>
      <h2>網站版本</h2>
      <p>
        原有
        <a href="https://tcwang.github.io/A7Xinlinkou/index.html"
          >A7新林口-社區網站 V1.0</a
        >
        版本已經停止更新！
      </p>
      <p>
        本網站版本是 2023/10 V2.0 版, 將逐步將 V1.0網站內容轉移到 V2.0。
        V2.0全面優化使用者介面，將以看板形式提供區域資訊。
      </p>

      A7新林口-社區網站 V2.0

      <a href="https://a7kanban14.netlify.app/">
        <NuxtImg src="images/announcement/a0001-9.png" />
      </a>

      <h2>網站架構</h2>
      <ol class="flex flex-wrap space-x-4">
        <li class="bg-slate-200 m-2 p-2 shadow-md rounded-xl">
          <NuxtLink to="https://a7kanban15.netlify.app/">
            城市探索
            <ul class="ml-2 mb-4 w-28">
              <li>地區介紹</li>
              <li>都市規劃</li>
              <li>交通指南</li>
              <li>新推建案</li>
              <li>房市行情</li>
            </ul>
          </NuxtLink>
        </li>

        <li class="bg-slate-300 m-2 p-2 shadow-md rounded-xl">
          <NuxtLink to="https://a7kanban14.netlify.app/">
            地方行政
            <ul class="ml-2 mb-4 w-28">
              <li>區域建設</li>
              <li>政府公告</li>
              <li>公共事務</li>
              <li>民意代表</li>
              <li>里長交流</li>
              <li>社區營造</li>
            </ul>
          </NuxtLink>
        </li>
        <li class="bg-slate-200 m-2 p-2 shadow-md rounded-xl">
          <NuxtLink to="https://a7kanban13.netlify.app/">
            生活指引
            <ul class="ml-2 mb-4 w-28">
              <li>餐廳推薦</li>
              <li>購物黃頁</li>
              <li>在地服務</li>
              <li>團購熱搜</li>
              <li>採購指南</li>
            </ul>
          </NuxtLink>
        </li>
        <li class="bg-slate-200 m-2 p-2 shadow-md rounded-xl">
          <NuxtLink to="https://a7kanban12.netlify.app/">
            健康休閒
            <ul class="ml-2 mb-4 w-28">
              <li>登山步道</li>
              <li>旅行導遊</li>
              <li>健身娛樂</li>
              <li>影視推薦</li>
              <li>健康指引</li>
              <li>地區醫療</li>
            </ul>
          </NuxtLink>
        </li>
        <li class="bg-slate-200 m-2 p-2 shadow-md rounded-xl">
          <NuxtLink to="https://a7kanban11.netlify.app/">
            資訊匯總
            <ul class="ml-2 mb-4 w-28">
              <li>人工智慧</li>
              <li>新聞雜誌</li>
              <li>影音媒體</li>
              <li>生活查詢</li>
              <li>手機軟件</li>
            </ul>
          </NuxtLink>
        </li>
      </ol>
    </div>

    <div class="max-w-3xl mx-auto p-4">
      <h1 class="text-2xl font-bold mb-4">社區網站 意見調查</h1>
      <div class="aspect-w-16 aspect-h-9">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSeNer5eSiGtbKjItmas1IjFT1puWRh-wHRTAzJnlk4o-uzcoQ/viewform?embedded=true"
          width="100%"
          height="1200px"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
          class="w-full border rounded"
        >
          Loading…
        </iframe>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: "A7新林口-社區網站",
  meta: [{ name: "description", content: "A7新林口-社區網站 衛星網站匯總 " }],
});
</script>

<style scoped></style>
