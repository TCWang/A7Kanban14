<template>
  <NuxtLayout name="detailpage">
    <div name="detailpage">
      <div>
        <h2>議員交流: {{ service.Title }}</h2>

        <div class="flex flex-col md:flex-row">
          <div class="w-full md:w-1/3 mx-1">
            <table class="table-auto w-full">
              <tr>
                <td class="w-[4em] sm:w-1/7 md:w-1/6">項目</td>
                <td class="sm:w-6/7 md:w-5/6">
                  {{ service.Title }} - {{ service.Subtitle }}
                </td>
              </tr>
              <tr>
                <td>議員</td>
                <td>{{ service.Category }}</td>
              </tr>
              <tr>
                <td>類別</td>
                <td>{{ service.Category1 }} - {{ service.Category2 }}</td>
              </tr>
              <tr>
                <td>日期</td>
                <td>{{ service.Date }}</td>
              </tr>
              <tr>
                <td>網頁</td>
                <td>
                  <a :href="service.Link">資料來源</a>
                </td>
              </tr>
            </table>
          </div>

          <div class="w-full md:w-2/3 mx-1">
            <h2>服務內容</h2>
            <div v-html="service.Description"></div>
            <div v-if="service.feedback">
              <h2 class="mt-2">居民反饋</h2>
              <div v-html="service.feedback"></div>
            </div>
          </div>
        </div>

        <councilorBack :category="service.Catogory" />
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
import services from "@/data/services.json";

const route = useRoute();
const no = route.params.name;

const service = services.find((r) => r.No === no);

useHead({
  title: "議員服務 - " + no,
});
</script>

<style scoped></style>
