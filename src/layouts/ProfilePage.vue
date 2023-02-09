<template>
  <div class="flex flex-row">
    <div class="hidden md:block">
      <vertical-navbar></vertical-navbar>
    </div>
    <div class="flex flex-col h-screen w-screen ml-8 mr-8">
      <!-- TITLE -->
      <div class="flex flex-row text-4xl font-bold items-center mt-8">
        <img
          src="/src/assets/profile-dark.svg"
          alt="logo"
          class="h-10 w-10 mr-2 mb-2"
        />
        <h1>Profil</h1>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import VerticalNavbar from "../components/navbars/VerticalNavbar.vue";
</script>

<style scoped></style>
