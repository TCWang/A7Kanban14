<template>
  <div class="container">
    區域重要建設列表: 請點擊 <mark>建設項目</mark> 查詢相關資訊。
    <div class="table-container">
      <div class="table-col">
        <ConstructionsRow class="bg-indigo-200" :isHeader="true" />
        <ConstructionsRow
          v-for="construction in constructionsOrganized.newSorted"
          :key="construction.Id"
          :construction="construction"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import constructions from "@/data/constructions.json";

const constructionsOrganized = {
  newSorted: [...constructions],
};
</script>

<style scoped></style>
