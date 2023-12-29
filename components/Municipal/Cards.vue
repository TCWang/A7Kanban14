<template>
  <div class="municipal">
    <div class="flex flex-col md:flex-row flex-wrap">
      <MunicipalCard
        v-for="municipal in municipalOrganized.newSorted"
        :key="municipal.id"
        :municipal="municipal"
      />
    </div>
  </div>
</template>

<script setup>
import municipal from "@/data/municipal.json";

const municipalOrganized = {
  newSorted: [...municipal],
};
</script>

<style scoped></style>
