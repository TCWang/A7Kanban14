<template>
  <div class="container">
    里長公告列表: 請點擊 <mark>公告項目</mark> 查詢相關資訊。
    <div class="table-container">
      <div class="table-col">
        <CommunityRow class="bg-indigo-200" :isHeader="true" />
        <CommunityRow
          v-for="announcement in announcementsOrganized.newSorted"
          :key="announcement.No"
          :announcement="announcement"
          :isHeader="isHeader"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import announcements from "@/data/announcements.json";

// interface RowProps {
//   name: string;
// }
// const props = defineProps<RowProps>();

// const servicesnamed = services.find((r) => r.Category === name);

const route = useRoute();
const announcementsOrganized = {
  newSorted: [...announcements]
    .filter((announcement) => announcement.Category === route.params.name)
    .sort((a, b) => a.Date - b.Date),
};
</script>

<style scoped></style>
