<template>
  <!-- Card -->
  <div class="bg-zinc-100 p-2 rounded-2xl shadow-md w-full md:w-1/2 xl:w-1/3">
    <!-- Flex Container -->
    <div class="flex flex-row rounded-l-xl">
      <!-- Image -->
      <a :href="`municipal/${municipal.title}`">
        <NuxtImg
          :src="`https://kgptltaqnkidtcqkathb.supabase.co/storage/v1/object/public/a7-images/municipal/${municipal.figure}`"
          alt=""
          class="object-fit rounded-xl md:rounded-l-xl md:rounded-r-none transform hover:scale-110 hover:rounded-xl duration-200 w-[120px] h-[120px]"
        />
      </a>

      <!-- Content -->
      <div class="p-2 md:p-4">
        <a :href="municipal.link">
          {{ municipal.title }}
        </a>

        <ul style="list-style: none">
          <li v-if="municipal.address">地址: {{ municipal.address }}</li>
          <li v-if="municipal.telephone">電話: {{ municipal.telephone }}</li>
          <li v-if="municipal.hours">時間: {{ municipal.hours }}</li>
        </ul>

        <div class="flex flex-row mt-4 space-x-4">
          <a v-show="municipal.link" :href="municipal.link">
            <NuxtImg
              class="h-12 hover:border-yellow-300 hover:border-2"
              src="https://kgptltaqnkidtcqkathb.supabase.co/storage/v1/object/public/a7-images/logo/LOG-01-Web.jpeg"
            />
          </a>
          <a
            v-if="municipal.description"
            :href="`/municipal/${municipal.title}`"
          >
            <button
              class="h-10 px-4 rounded-md text-zinc-800 bg-lime-500 hover:bg-lime-700 hover:text-white duration-500"
            >
              詳細資料
            </button>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  municipal: Object,
});
</script>

<style scoped></style>
