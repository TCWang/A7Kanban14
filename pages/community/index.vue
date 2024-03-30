<template>
  <div>
    <h1>里長交流</h1>
    <a :href="`/community/announcement/a0001`">
      <button
        class="h-10 px-4 rounded-md text-zinc-800 bg-lime-500 hover:bg-lime-700 hover:text-white duration-500"
      >
        里長競選政見匯總
      </button>
    </a>
    <CommunityTable />
  </div>
</template>

<script setup>
useHead({
  title: "地方行政-里長交流",
  meta: [{ name: "description", content: "A7重劃區 里長交流平台" }],
});
</script>

<style scoped></style>
