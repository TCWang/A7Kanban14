<template>
  <NuxtLayout name="detailpage">
    <div name="detailpage">
      <div>
        <h2>{{ announcement.Community }} 里長交流: {{ announcement.Title }}</h2>

        <div class="flex flex-col md:flex-row">
          <div class="w-full md:w-1/3 mx-1">
            <table class="table-auto w-full">
              <tr>
                <td class="w-[4em] sm:w-1/7 md:w-1/6">項目</td>
                <td class="sm:w-6/7 md:w-5/6">
                  {{ announcement.Title }} - {{ announcement.Subtitle }}
                </td>
              </tr>
              <tr>
                <td>里長</td>
                <td>
                  {{ announcement.Community }} -
                  {{ announcement.Category }} 里長
                </td>
              </tr>
              <tr>
                <td>類別</td>
                <td>
                  {{ announcement.Category1 }} - {{ announcement.Category2 }}
                </td>
              </tr>
              <tr>
                <td>日期</td>
                <td>{{ announcement.Date }}</td>
              </tr>
              <tr>
                <td>網頁</td>
                <td>
                  <a :href="announcement.Link">資料來源</a>
                </td>
              </tr>
            </table>
          </div>

          <div class="w-full md:w-2/3 mx-1">
            <h2>公告內容</h2>
            <div v-html="announcement.Description"></div>
            <div v-if="announcement.feedback">
              <h2 class="mt-2">居民反饋</h2>
              <div v-html="announcement.feedback"></div>
            </div>
          </div>
        </div>

        <communityBack :category="announcement.Catogory" />
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
import announcements from "@/data/announcements.json";

const route = useRoute();
const no = route.params.name;

const announcement = announcements.find((r) => r.No === no);

useHead({
  title: "里長公告 - " + no,
});
</script>

<style scoped></style>
