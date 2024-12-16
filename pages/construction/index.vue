<template>
  <section class="w-full max-w-full not-prose">
    <h2>A7重劃區 區域建設</h2>
    <div class="column">
      <div class="ml-4">狀態</div>
      <div class="ml-4">完工日期</div>
      <div class="ml-12">標題</div>
      <div class="ml-28 hidden md:block">經費</div>
    </div>
    <ul>
      <li style="list-style: none" v-for="post in posts" :key="post._path">
        <NuxtLink
          :to="post._path"
          class="column hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <div
            :class="{
              'text-white ': !post.displayStatus,
              'text-gray-900': post.displayStatus,
            }"
          >
            {{ post.status }}
          </div>
          <div class="pl-2">{{ post.fullDate }}</div>
          <div class="pl-4">{{ post.title }}</div>
          <div class="pl-20 hidden md:block">{{ post.budget }}</div>
        </NuxtLink>
      </li>
    </ul>
  </section>
</template>

<script setup>
const { data } = await useAsyncData("construction-list", () =>
  queryContent("/construction")
    .where({ _path: { $ne: "/construction" } })
    .only([
      "_path",
      "title",
      "publishedAt",
      "category",
      "status",
      "sequence",
      "budget",
      "link",
    ])
    .sort({ publishedAt: 1 })
    .sort({ status: 1 })
    .find()
);

const posts = computed(() => {
  if (!data.value) {
    return [];
  }

  const result = [];
  let lastStatus = null;

  for (const post of data.value) {
    // const year = new Date(post.publishedAt).getFullYear();
    const publishedDate = new Date(post.publishedAt);
    const year = publishedDate.getFullYear();
    const month = publishedDate.getMonth() + 1; // Adding 1 because getMonth returns a zero-based index (0 for January)
    const day = publishedDate.getDate();

    // Format the date as desired (e.g., YYYY-MM-DD)
    const fullDate = `${year}-${month < 10 ? "0" : ""}${month}-${
      day < 10 ? "0" : ""
    }${day}`;

    const status = post.status;

    const displayStatus = status !== lastStatus;

    // console.log(`Should display a year ${displayYear}`);

    post.displayStatus = displayStatus;
    post.statuskeep = status;
    post.fullDate = fullDate;
    result.push(post);
    lastStatus = status;
  }

  return result;
});
</script>

<style scoped>
.column {
  @apply flex  py-1;
}
</style>
