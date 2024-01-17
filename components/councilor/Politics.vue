<template>
  <div>
    <div v-for="politic in politicsOrganized.newFiltered" :key="politic.name">
      <div v-html="politic.description"></div>
    </div>
  </div>
</template>

<script setup>
import politics from "@/data/politics.json";

const route = useRoute();
const politicsOrganized = {
  newFiltered: [...politics].filter(
    (politic) => politic.name === route.params.name
  ),
};
</script>

<style scoped></style>
