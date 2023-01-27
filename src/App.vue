<template>
  <div class="flex">
    <div class="h-screen">
      <NavBar></NavBar>
    </div>
    <div class="flex-auto">
      <div class="text-center">
        <h1 class="text-5xl font-bold text-yellow-300 mt-12">Lockio</h1>
        <LockersGrid></LockersGrid>
      </div>
    </div>
  </div>
</template>

<script setup>
import NavBar from "./components/NavBar.vue";
import LockersGrid from "./components/lockers/LockersGrid.vue";
</script>
