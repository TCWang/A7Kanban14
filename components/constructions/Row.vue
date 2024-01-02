<template>
  <div class="row" v-if="isHeader">
    <h4 class="link item1">建設項目</h4>
    <h4 class="header item2">狀態</h4>
    <h4 class="header item3">完成</h4>
    <h4 class="header item4">經費</h4>
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
    <a
      :href="`/constructions/${construction.Item}`"
      class="link item1 hover:bg-indigo-100"
      >{{ construction.Item }}</a
    >
    <p class="header item2" :style="{ color: construction.StatusA }">
      {{ construction.StatusB }}
    </p>
    <p class="header item3">{{ construction.Due }}</p>
    <p class="header item4">{{ construction.Budget }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  construction: Object,
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
  width: 45%;
  margin-right: 1rem;
}
.item2 {
  color: black;
  width: 8%;
  margin-right: 1rem;
}
.item3 {
  text-decoration: none;
  width: 16%;
  font-weight: 500;
}
.item4 {
  text-decoration: none;
  width: auto;
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
