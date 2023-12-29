<template>
  <div class="container">
    <div class="flex flex-row flex-wrap">
      <communityCard
        v-for="community in communityOrganized.newSorted"
        :key="community.id"
        :community="community"
      />
    </div>
  </div>
</template>

<script setup>
import community from "@/data/community.json";

const communityOrganized = {
  newSorted: [...community],
};
</script>

<style scoped></style>
