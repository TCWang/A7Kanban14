<template>
  <NuxtLayout name="detailpage">
    <div>
      <h2>{{ name }} 選舉政見</h2>
      <CouncilorPolitics :name="name" />
      <CouncilorBack />
    </div>
  </NuxtLayout>
</template>

<script setup>
const route = useRoute();
const name = route.params.name;
</script>

<style scoped></style>
