<template>
  <NuxtLayout name="detailpage">
    <div class="container expectation-container">
      <h2>居民期望 詳細資料: {{ expectation.id }} - {{ expectation.item }}</h2>
      <!-- <div class="image-container">
        <img :src="`@/assets/fig/${house.Figure}`" alt="" />
      </div> -->
      <div class="row">
        <div class="col-md-6">
          <div class="info-container">
            <h2>居民期望 內容</h2>

            <div v-html="expectation.description"></div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="info-container">
            <div v-if="expectation.contribution">
              <h2>議員質詢</h2>
              <div v-html="expectation.contribution"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <expectationsBack />
  </NuxtLayout>
</template>

<script setup>
import expectations from "@/data/expectations.json";
// import { useMeta } from "vue-meta";

const route = useRoute();
const name = route.params.name;

useHead({
  title: "居民期望 - " + name,
});

const expectation = expectations.find((r) => r.item === name);

// useMeta({
//   title: house.value ? name : "404 - House Not Found",
//   meta: [
//     {
//       name: "viewport",
//       content: "width=device-width",
//     },
//   ],
// });
// Test
</script>

<style scoped></style>
