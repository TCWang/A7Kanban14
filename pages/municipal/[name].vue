<template>
  <NuxtLayout name="detailpage">
    <div>
      <h2>{{ name }} 服務詳細資料</h2>
      <ul>
        <li>項目: {{ municipal.title }}</li>
        <li>
          說明:
          <div v-html="municipal.description"></div>
        </li>
      </ul>
      <MunicipalBack />
    </div>
  </NuxtLayout>
</template>

<script setup>
import municipals from "@/data/municipal.json";

const route = useRoute();
const name = route.params.name;

const municipal = municipals.find((r) => r.title === name);

useHead({
  title: "公共服務 - " + name,
  meta: [{ name: "description", content: "A7地方行政-公共服務匯總" }],
});
</script>

<style scoped></style>
