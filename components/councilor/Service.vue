<template>
  <div class="container">
    議員A7區域服務列表: 請點擊 <mark>服務項目</mark> 查詢相關資訊。
    <div class="table-container">
      <div class="table-col">
        <CouncilorRow class="bg-indigo-200" :isHeader="true" />
        <CouncilorRow
          v-for="service in servicesOrganized.newSorted"
          :key="service.No"
          :service="service"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import services from "@/data/services.json";

// interface RowProps {
//   name: string;
// }
// const props = defineProps<RowProps>();

// const servicesnamed = services.find((r) => r.Category === name);

const route = useRoute();
const servicesOrganized = {
  newSorted: [...services]
    .filter((service) => service.Category === route.params.name)
    .sort((a, b) => a.Date - b.Date),
};
</script>

<style scoped></style>
