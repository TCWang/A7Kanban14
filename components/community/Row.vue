<template>
  <div class="row" v-if="isHeader">
    <h4 class="link item2">類別</h4>
    <h4 class="header item1">公告項目</h4>
    <h4 class="header item3">日期</h4>
  </div>
  <div
    v-else
    class="row"
    :style="
      index % 2 === 0
        ? { background: 'rgba(128,128,128,0.15)' }
        : { background: 'rgba(255,255,255,0.1)' }
    "
  >
    <p class="header item2">{{ announcement.Category2 }}</p>
    <a
      :href="`/community/announcements/${announcement.No}`"
      class="link item1 hover:bg-indigo-100"
      >{{ announcement.Title }}</a
    >

    <p class="header item3">{{ announcement.Date1 }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  announcement: Object,
  isHeader: Boolean,
  index: Number,
});
</script>

<style scoped>
.row {
  border-top: 1px solid rgba(128, 128, 128, 0.336);
  display: flex;
  align-items: center;
}
.header {
  margin: 0;
  margin-right: 0rem;
  padding: 0rem 0rem;
  font-weight: 400;
  /* width: auto; */
}
.item1 {
  color: black;
  width: 60%;
  margin-right: 1rem;
}
.item2 {
  color: black;
  width: 30%;
  margin-right: 1rem;
}
.item3 {
  text-decoration: none;
  width: 10%;
  font-weight: 500;
}
.item4 {
  text-decoration: none;
  width: 10%;
  font-weight: 500;
}

.link {
  margin: 0;
  margin-right: 1rem;
  padding: 0.1rem 0.1rem;
  font-weight: 400;
  color: rgb(10, 31, 148);
}
</style>
