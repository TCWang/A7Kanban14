<template>
  <NuxtLayout name="detailpage">
    <div class="">
      <h2>區域建設: {{ construction.Item }}</h2>
      <!-- <div class="image-container">
        <img :src="`@/assets/fig/${house.Figure}`" alt="" />
      </div> -->
      <div class="flex flex-col md:flex-row">
        <div class="w-full md:w-1/2 mx-1">
          <table class="table-auto w-full">
            <tr>
              <td>項目</td>
              <td>{{ construction.Item }}</td>
            </tr>
            <tr>
              <td>類別</td>
              <td>{{ construction.Category }} - {{ construction.Id }}</td>
            </tr>
            <tr>
              <td>完工</td>
              <td>{{ construction.Due }}</td>
            </tr>
            <tr>
              <td>經費</td>
              <td>
                {{ construction.Budget }}
              </td>
            </tr>
            <tr>
              <td>狀態</td>
              <td>{{ construction.StatusB }} - {{ construction.StatusA }}</td>
            </tr>
          </table>
          <h2>計畫概要</h2>
          <div v-html="construction.DescriptionA"></div>
          <div v-if="construction.Contribution">
            <h3 class="bg-indigo-100 p-1 my-2">作業說明</h3>
            <div v-html="construction.Contribution"></div>
          </div>
        </div>

        <div class="w-full md:w-1/2 mx-1">
          <h2>建設詳情</h2>
          <div v-html="construction.DescriptionB"></div>
        </div>
      </div>
    </div>
    <constructionsBack />
  </NuxtLayout>
</template>

<script setup>
import constructions from "@/data/constructions.json";
// import { useMeta } from "vue-meta";

const route = useRoute();
const name = route.params.name;

useHead({
  title: "區域建設 - " + name,
});

const construction = constructions.find((r) => r.Item === name);

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
