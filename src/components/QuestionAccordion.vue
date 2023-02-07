<template>
  <div
    class="border border-gray-800 rounded-xl bg-white p-3 mt-4"
    @click="toggle"
    id="question"
  >
    <div class="flex justify-between">
      <div class="font-bold pr-4">{{ question }}</div>
      <button v-if="!state.isOpen">
        <img
          src="/src/assets/arrowdown.svg"
          alt="arrow"
          class="h-6 w-6 max-w-none"
        />
      </button>
      <button v-else>
        <img
          src="/src/assets/arrowup.svg"
          alt="arrow"
          class="h-6 w-6 max-w-none"
        />
      </button>
    </div>
    <div v-if="state.isOpen" class="mt-2">
      <div>{{ answer }}</div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";

const props = defineProps({
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
});

const state = reactive({
  isOpen: false,
});

const toggle = () => {
  state.isOpen = !state.isOpen;
};
</script>

<style scoped>
#question {
  cursor: pointer;
}
</style>
