<template>
  <section class="w-full max-w-full not-prose">
    <h2>市府公告 - 桃園市政府</h2>

    <div class="flex flex-col lg:flex-row flex-wrap">
      <div
        v-for="post in posts"
        :key="post._path"
        class="relative shadow border-hidden w-full lg:w-1/2 overflow-hidden mb-5 cursor-pointer h-full"
      >
        <!-- <div class="shadow-lg w-full"> -->

        <div
          class="m-2 flex flex-row md:flex-row h-full bg-zinc-100 rounded-2xl shadow-md"
        >
          <NuxtLink
            :to="post._path"
            class="hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <img
              :src="`${post.image}`"
              alt=""
              class="w-[150px] md:w-[240px] h-[200px] md:h-[320px] rounded-xl transform hover:scale-110 duration-200"
            />
          </NuxtLink>

          <div class="p-4 flex flex-col">
            <div>
              <p class="text-bold">{{ post.title }}</p>

              <p class="mt-auto">日期: {{ post.fullDate }}</p>

              <p class="mt-auto">類別: {{ post.category }}</p>
              <p class="mt-auto">主辦: {{ post.author }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
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
      "image",
    ])
    .sort({ publishedAt: -1 })

    .find()
);

const posts = computed(() => {
  if (!data.value) {
    return [];
  }

  const result = [];
  let lastCategory = null;

  for (const post of data.value) {
    const publishedDate = new Date(post.publishedAt);
    const year = publishedDate.getFullYear();
    const month = publishedDate.getMonth() + 1; // Adding 1 because getMonth returns a zero-based index (0 for January)
    const day = publishedDate.getDate();

    // Format the date as desired (e.g., YYYY-MM-DD)
    const fullDate = `${year}-${month < 10 ? "0" : ""}${month}-${
      day < 10 ? "0" : ""
    }${day}`;

    const category = post.category;

    const displayCategory = category !== lastCategory;

    post.displayCategory = displayCategory;
    post.categorykeep = category;
    post.fullDate = fullDate;
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
