<template>
  <!-- Card -->
  <div class="bg-zinc-100 p-2 m-2 rounded-2x shadow-md">
    <!-- Flex Container -->
    <div class="flex flex-row rounded-l-xl">
      <!-- Image -->
      <NuxtImg
        :src="`https://kgptltaqnkidtcqkathb.supabase.co/storage/v1/object/public/a7-images/${community.figure}`"
        alt=""
        class="object-fit rounded-xl h-40 md:h-48 md:rounded-l-xl md:rounded-r-none transform hover:scale-110 hover:rounded-xl duration-200"
      />
      <!-- Content -->
      <div class="p-2 md:p-4">
        <h3 class="text-center text-gray-800 md:text-left">
          {{ community.title }} 里長
        </h3>

        <ul style="list-style: none">
          <li>里別: {{ community.type }}</li>
          <li>政黨: {{ community.party }}</li>
          <li>服務處: {{ community.address }}</li>
          <li>電話: {{ community.telephone }}</li>
          <li>郵箱: {{ community.mail }}</li>
        </ul>

        <div class="flex flex-row mt-4 space-x-4">
          <a :href="`/community/${community.title}`">
            <button
              class="h-10 px-4 rounded-md text-zinc-800 bg-lime-500 hover:bg-lime-700 hover:text-white duration-500"
            >
              里長公佈欄
            </button>
          </a>

          <a v-show="community.facebook" :href="community.facebook">
            <NuxtImg
              class="h-12 hover:border-yellow-300 hover:border-2"
              src="https://kgptltaqnkidtcqkathb.supabase.co/storage/v1/object/public/a7-images/LOG-01-Facebook.png"
            />
          </a>
          <a v-show="community.line" :href="community.line">
            <NuxtImg
              class="h-12 hover:border-yellow-300 hover:border-2"
              src="https://kgptltaqnkidtcqkathb.supabase.co/storage/v1/object/public/a7-images/LOG-01-Line.png"
            />
          </a>
          <a v-show="community.ig" :href="community.ig">
            <NuxtImg
              class="h-12 hover:border-yellow-300 hover:border-2"
              src="https://kgptltaqnkidtcqkathb.supabase.co/storage/v1/object/public/a7-images/LOG-01-Ig.png"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  community: Object,
});
</script>

<style scoped></style>
