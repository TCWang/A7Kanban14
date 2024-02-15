<template>
  <section class="w-full max-w-6xl not-prose">
    <h2>政府公告欄</h2>
    <div class="column">
      <div class="ml-8">日期</div>
      <div class="ml-8">主辦</div>
      <div class="ml-16">標題</div>
    </div>
    <ul>
      <li style="list-style: none" v-for="post in posts" :key="post._path">
        <NuxtLink
          :to="post._path"
          class="column hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <div
            :class="{
              'text-white ': !post.displayDate,
              'text-gray-900': post.displayDate,
            }"
          >
            {{ post.fullDate }}
          </div>
          <div class="pl-4">{{ post.author }}</div>
          <div class="pl-8">{{ post.title }}</div>
        </NuxtLink>
      </li>
    </ul>
  </section>
</template>

<script setup>
const { data } = await useAsyncData("city-list", () =>
  queryContent("/city")
    .where({ _path: { $ne: "/city" } })
    .only([
      "_path",
      "title",
      "publishedAt",
      "category",
      "author",
      "sequence",
      "link",
    ])
    .sort({ publishedAt: -1 })
    .find()
);

const posts = computed(() => {
  if (!data.value) {
    return [];
  }

  const result = [];
  let lastDate = null;

  for (const post of data.value) {
    const publishedDate = new Date(post.publishedAt);
    const year = publishedDate.getFullYear();
    const month = publishedDate.getMonth() + 1; // Adding 1 because getMonth returns a zero-based index (0 for January)
    const day = publishedDate.getDate();

    // Format the date as desired (e.g., YYYY-MM-DD)
    const fullDate = `${year}-${month < 10 ? "0" : ""}${month}-${
      day < 10 ? "0" : ""
    }${day}`;

    const date = post.publishedAt;

    const displayDate = date !== lastDate;

    post.displayDate = displayDate;
    post.datekeep = date;
    post.fullDate = fullDate;
    result.push(post);
    lastDate = date;
  }

  return result;
});
</script>

<style scoped>
.column {
  @apply flex  py-1;
}
</style>
