<template>
  <div class="container">
    區域重要建設列表: 請點擊 <mark>建設項目</mark> 查詢相關資訊。
    <div class="table-container">
      <div class="table-col">
        <ConstructionsRow class="bg-indigo-200" :isHeader="true" />
        <ConstructionsRow
          v-for="(construction, index) in constructionsOrganized.newSorted"
          :key="construction.Id"
          :Item="construction.Item"
          :Category="construction.Category"
          :DescriptionA="construction.DescriptionA"
          :DescriptionB="construction.DescriptionB"
          :Due="construction.Due"
          :Budget="construction.Budget"
          :StatusA="construction.StatusA"
          :StatusB="construction.StatusB"
          :Contribution="construction.Contribution"
          :index="index"
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
