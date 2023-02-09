<template>
  <div>
    <nav class="w-100 flex items-center justify-between">
      <div class="flex items-center cursor-pointer" @click="$router.push('/')">
        <img src="/src/assets/lockio.svg" alt="logo" class="h-10 w-10"/>
        <span class="ml-4 text-xl font-bold">Lockio</span>
      </div>
      <button @click="$router.push({ name: 'About' })">About</button>
    </nav>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
