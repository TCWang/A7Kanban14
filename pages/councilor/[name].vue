<template>
  <NuxtLayout name="detailpage">
    <div>
      <h2>{{ name }} 服務列表</h2>
      <p>資料主要來源</p>
      <ul class="list-disc ml-6 mb-2">
        <li>{{ name }} 議員臉書</li>
        <li>
          <a href="https://www.facebook.com/groups/1951117865015671"
            >FB A7重劃區大小事</a
          >
        </li>
        <li>
          <a href="https://www.facebook.com/groups/a7xinlinkou"
            >FB A7新林口-社區網站</a
          >
          /
          <a
            href="https://www.facebook.com/groups/127251476046776/user/100000222589375/"
            >Wade Chan (陳雅倫)</a
          >
          /
          <a
            href="https://www.facebook.com/groups/127251476046776/user/100086036705595"
            >Winnie Wu (李宗豪)</a
          >
        </li>
      </ul>
      <CouncilorService :name="name" />
      <CouncilorBack />
    </div>
  </NuxtLayout>
</template>

<script setup>
// import { useMeta } from "vue-meta";

const route = useRoute();
const name = route.params.name;

useHead({
  title: "議員服務 - " + name,
  meta: [{ name: "description", content: "A7地方行政-議員地區服務匯總" }],
});
</script>

<style scoped></style>
