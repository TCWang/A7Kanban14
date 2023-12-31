<template>
  <div class="container">
    居民期望列表: 請點擊 <mark>期望項目</mark> 查詢相關資訊。
    <div class="table-container">
      <div class="table-col">
        <ExpectationsRow :isHeader="true" />
        <ExpectationsRow
          v-for="expectation in expectationsOrganized.newSorted"
          :key="expectation.id"
          :expectation="expectation"
          :isHeader="isHeader"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import expectations from "@/data/expectations.json";

const expectationsOrganized = {
  newSorted: [...expectations],
};
</script>

<style scoped></style>
