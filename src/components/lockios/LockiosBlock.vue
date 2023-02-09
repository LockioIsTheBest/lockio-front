<template>
  <div class="lockio-block flex flex-col md:flex-row mb-12 mr-8">
    <div class="md:w-1/2 md:mr-8">
      <div class="text-2xl font-bold">
        {{ props.title }}
      </div>
      <!-- SIMULATE THE LOCKERS WITH RECTANGLES AND 3*3 BLOCK -->
      <div class="mt-6">
        <locker-grid></locker-grid>
      </div>
    </div>
    <div class="mt-8 md:w-1/2 md:mt-0">
      <div class="text-2xl font-bold">
        Infos utiles
      </div>
      <div class="mt-2 md:mt-6">
        <useful-infos></useful-infos>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import LockerGrid from "./LockerGrid.vue"
import UsefulInfos from "./UsefulInfos.vue";

const props = defineProps<{
  title: string;
}>();

const title = props.title;
</script>