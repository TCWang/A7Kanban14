<template>
  <NuxtLayout name="detailpage">
    <div>
      <h2>{{ name }} 公告列表</h2>

      <CommunityService :name="name" />
      <CommunityBack />
    </div>
  </NuxtLayout>
</template>

<script setup>
// import { useMeta } from "vue-meta";

const route = useRoute();
const name = route.params.name;

useHead({
  title: "里長公告欄 - " + name,
  meta: [{ name: "description", content: "A7地方行政-里長公佈欄" }],
});
</script>

<style scoped></style>
