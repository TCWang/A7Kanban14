<template>
  <section class="w-full max-w-6xl not-prose">
    <h2>民意代表 A7重劃區地方服務 匯總表</h2>
    <div class="column">
      <div class="ml-6">議員</div>
      <div class="ml-10">日期</div>
      <div class="ml-20">類別</div>
      <div class="ml-28">標題</div>
    </div>
    <ul>
      <li style="list-style: none" v-for="post in posts" :key="post._path">
        <NuxtLink
          :to="post._path"
          class="column hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <div
            :class="{
              'text-white ': !post.displayAuthor,
              'text-gray-900': post.displayAuthor,
            }"
          >
            {{ post.author }}
          </div>
          <div class="pl-2">{{ post.fullDate }}</div>
          <div class="pl-2">{{ post.category2 }}</div>
          <div class="pl-2">{{ post.title }}</div>
        </NuxtLink>
      </li>
    </ul>
  </section>
</template>

<script setup>
const { data } = await useAsyncData("service-list", () =>
  queryContent("/councilor/service")
    .where({ _path: { $ne: "/councilor/service" } })
    .only([
      "_path",
      "title",
      "publishedAt",
      "category1",
      "category2",
      "sequence",
      "link",
      "author",
    ])
    .sort({ publishedAt: -1 })
    .sort({ author: 1 })
    .find()
);

const posts = computed(() => {
  if (!data.value) {
    return [];
  }

  const result = [];
  let lastAuthor = null;

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

    const author = post.author;

    const displayAuthor = author !== lastAuthor;

    // console.log(`Should display a year ${displayYear}`);

    post.displayAuthor = displayAuthor;
    post.authorkeep = author;
    post.fullDate = fullDate;
    result.push(post);
    lastAuthor = author;
  }

  return result;
});
</script>

<style scoped>
.column {
  @apply flex  py-1;
}
</style>
