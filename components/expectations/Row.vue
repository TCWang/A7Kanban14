<template>
  <div class="row" v-if="isHeader">
    <h4 class="header item2">類別</h4>
    <h4 class="header item4">排序</h4>
    <h4 class="link item1">期望項目</h4>
    <h4 class="header item3">得票</h4>
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
    <p class="header item2">{{ expectation.category }}</p>
    <p class="header item4">{{ expectation.id }}</p>
    <a
      :href="`/expectations/${expectation.item}`"
      class="link item1 hover:bg-indigo-100"
    >
      {{ expectation.item }}</a
    >
    <p class="header item3">{{ expectation.vote }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  expectation: Object,
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
  width: 65%;
  margin-right: 1rem;
}
.item2 {
  color: black;
  width: 12%;
  margin-right: 1rem;
}
.item3 {
  text-decoration: none;
  width: 8%;
  font-weight: 500;
}
.item4 {
  text-decoration: none;
  width: 5%;
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
