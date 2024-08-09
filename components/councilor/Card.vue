<template>
  <!-- Card -->
  <div class="bg-zinc-100 p-2 m-2 rounded-2xl shadow-md">
    <!-- Flex Container -->
    <div class="flex flex-row rounded-l-xl">
      <!-- Image -->
      <NuxtImg
        :src="`/images/assets/${councilor.figure}`"
        alt=""
        class="object-fit rounded-xl h-40 md:h-48 md:rounded-l-xl md:rounded-r-none transform hover:scale-110 hover:rounded-xl duration-200"
      />
      <!-- Content -->
      <div class="p-2 md:p-4">
        <h3 class="text-center text-gray-800 md:text-left">
          {{ councilor.type }}: {{ councilor.title }}
        </h3>

        <ul style="list-style: none">
          <li>政黨: {{ councilor.party }}</li>
          <li>服務處: {{ councilor.address }}</li>
          <li>電話: {{ councilor.telephone }}</li>
          <li>郵箱: {{ councilor.mail }}</li>
        </ul>

        <div class="flex flex-row mt-4 space-x-4">
          <a :href="`/councilor/politics/${councilor.title}`">
            <button
              class="h-10 px-4 rounded-md text-zinc-800 bg-lime-500 hover:bg-lime-700 hover:text-white duration-500"
            >
              選舉政見
            </button>
          </a>
          <!-- <a :href="`/councilor/${councilor.title}`"> -->
          <a :href="`/councilor/service`">
            <button
              class="h-10 px-4 rounded-md text-zinc-800 bg-lime-500 hover:bg-lime-700 hover:text-white duration-500"
            >
              服務匯總
            </button>
          </a>
        </div>

        <div class="flex flex-row mt-4 space-x-4">
          <a v-show="councilor.facebook" :href="councilor.facebook">
            <NuxtImg
              class="h-12 hover:border-yellow-300 hover:border-2"
              src="/images/assets//LOG-01-Facebook.png"
            />
          </a>
          <a v-show="councilor.line" :href="councilor.line">
            <NuxtImg
              class="h-12 hover:border-yellow-300 hover:border-2"
              src="/images/assets//LOG-01-Line.png"
            />
          </a>
          <a v-show="councilor.ig" :href="councilor.ig">
            <NuxtImg
              class="h-12 hover:border-yellow-300 hover:border-2"
              src="/images/assets//LOG-01-Ig.png"
            />
          </a>
          <a v-show="councilor.youtube" :href="councilor.youtube">
            <NuxtImg
              class="h-12 hover:border-yellow-300 hover:border-2"
              src="/images/assets//LOG-01-Youtube.png"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  councilor: Object,
});
</script>

<style scoped></style>
