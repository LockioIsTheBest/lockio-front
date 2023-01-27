<template>
  <h1 class="text-5xl font-bold text-yellow-300 mt-10">Lockio</h1>

  <button
    @click="increment"
    class="bg-indigo-800 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-2xl mt-8"
  >
    Click me !
  </button>

  <p class="text-2xl font-bold text-yellow-300 mt-4">Count: {{ count }}</p>
</template>

<script setup lang="ts">
import { ref } from "vue";

const count = ref(0);

const increment = () => {
  count.value++;
};
</script>
