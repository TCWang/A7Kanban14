<template>
  <div class="container">
    居民期望列表: 請點擊 <mark>期望項目</mark> 查詢相關資訊。
    <div class="table-container">
      <div class="table-col">
        <ExpectationsRow :isHeader="true" />
        <ExpectationsRow
          v-for="(expectation, index) in expectationsOrganized.newSorted"
          :key="expectation.id"
          :id="expectation.id"
          :item="expectation.item"
          :category="expectation.category"
          :description="expectation.description"
          :contribution="expectation.contribution"
          :vote="expectation.vote"
          :index="index"
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
