<template>
  <div class="flex flex-col md:flex-row justify-between">
    <div v-for="item in items" class="w-auto md:w-1/4">
      <img :src="item.src" alt="logo" class="h-48 w-48 m-auto" />
      <div class="font-bold">{{ item.title }}</div>
      <div class="mb-8">
        {{ item.description }}
      </div>
    </div>
  </div>
</template>

<script setup>
const lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lorem\n" +
  "        dolor, tristique vitae condimentum sed, porta efficitur ipsum.\n" +
  "        Suspendisse potenti. Quisque ultricies viverra ex, ac elementum augue\n" +
  "        porttitor quis. Vestibulum eleifend sodales leo, vitae molestie augue\n" +
  "        blandit nec.";
const items = [
  {
    src: "/src/assets/reserver.svg",
    title: "Réserver votre Lockio",
    description: lorem,
  },
  {
    src: "/src/assets/zen.svg",
    title: "Partir zen",
    description: lorem,
  },
  {
    src: "/src/assets/contribuer.svg",
    title: "Contribuer",
    description: lorem,
  },
];
</script>

<style scoped></style>
