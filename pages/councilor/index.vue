<template>
  <div>
    <h1>民意代表 - 龜山區議員 / 區域立委</h1>
    <a :href="`/councilor/service/s0001`">
      <button
        class="h-10 px-4 rounded-md text-zinc-800 bg-lime-500 hover:bg-lime-700 hover:text-white duration-500"
      >
        議員競選政見匯總
      </button>
    </a>

    <CouncilorTable />
    <CouncilorSelection />
  </div>
</template>

<script setup>
useHead({
  title: "地方行政-議員交流",
  meta: [{ name: "description", content: "A7重劃區 議員交流平台" }],
});
</script>

<style scoped></style>
