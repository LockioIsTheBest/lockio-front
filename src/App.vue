<template>
  <div class="bg-gray-900 h-screen">
    <NavBar></NavBar>
    <div class="text-center">
      <h1 class="text-5xl font-bold text-yellow-300 mt-8">Lockio</h1>
      <LockersGrid></LockersGrid>
    </div>
  </div>
</template>

<script setup>
import NavBar from "./components/NavBar.vue";
import LockersGrid from "./components/lockers/LockersGrid.vue";
</script>
