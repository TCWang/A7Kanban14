<template>
  <div class="container">
    <div class="flex flex-row flex-wrap">
      <CouncilorCard
        v-for="councilor in councilorOrganized.newSorted"
        :key="councilor.id"
        :councilor="councilor"
      />
    </div>
  </div>
</template>

<script setup>
import councilor from "@/data/councilor.json";

const councilorOrganized = {
  newSorted: [...councilor],
};
</script>

<style scoped></style>
