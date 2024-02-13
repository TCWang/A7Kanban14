<template>
  <section class="w-full max-w-6xl not-prose">
    <h2>社造提案</h2>
    <div class="column space-x-12 ml-6">
      <div>類別</div>
      <div>標題</div>
      <div>日期</div>
    </div>
    <ul>
      <li style="list-style: none" v-for="post in posts" :key="post._path">
        <NuxtLink
          :to="post._path"
          class="column hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <div
            :class="{
              'text-white ': !post.displayCategory,
              'text-gray-900': post.displayCategory,
            }"
          >
            {{ post.category }}
          </div>
          <div class="pl-6">{{ post.title }}</div>
          <div class="pl-6">{{ post.year }}</div>
        </NuxtLink>
      </li>
    </ul>
  </section>
</template>

<script setup>
// const posts = await queryContent("/").only(["_path", "title"]).find();
const { data } = await useAsyncData("plan-list", () =>
  queryContent("/build/plan")
    .where({ _path: { $ne: "/build/vision" } })
    .only(["_path", "title", "publishedAt", "category", "sequence"])
    .sort({ sequence: 1 })
    .find()
);

const posts = computed(() => {
  if (!data.value) {
    return [];
  }

  const result = [];
  let lastCategory = null;

  for (const post of data.value) {
    const year = new Date(post.publishedAt).getFullYear();
    const category = post.category;

    const displayCategory = category !== lastCategory;

    // console.log(`Should display a year ${displayYear}`);

    post.displayCategory = displayCategory;
    post.categorykeep = category;
    post.year = year;
    result.push(post);
    lastCategory = category;
  }

  return result;
});
</script>

<style scoped>
.column {
  @apply flex  py-1;
}
</style>
