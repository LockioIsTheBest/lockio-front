<template>
  <div class="flex flex-row">
    <div class="hidden md:block">
      <vertical-navbar></vertical-navbar>
    </div>
    <div class="flex flex-col h-screen w-screen ml-8 md:overflow-auto">
      <!-- TITLE -->
      <div class="flex flex-row text-4xl font-bold items-center mt-8">
        <img
          src="/src/assets/locker-dark.svg"
          alt="logo"
          class="h-10 w-10 mr-2 mb-2"
        />
        <h1>Lockios</h1>
      </div>

      <!-- BLOCKS -->
      <div class="mt-12 ml-2">
        <!-- TODO : PASS THE LOCKIO AS PROPS = GET ALL INFOS IN COMPONENT-->
        <lockios-block :title="prototype"></lockios-block>
        <div
          class="w-100 h-1 mx-auto my-4 mr-8 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"
        ></div>
        <lockios-block :title="metro"></lockios-block>
        <div
          class="w-100 h-1 mx-auto my-4 mr-8 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"
        ></div>
        <lockios-block :title="bar"></lockios-block>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import VerticalNavbar from "../components/navbars/VerticalNavbar.vue";
import LockiosBlock from "../components/lockios/LockiosBlock.vue";

const prototype = "Prototype";
const metro = "Métro Paul Sabatier";
const bar = "La Fabrique";
</script>

<style scoped></style>
