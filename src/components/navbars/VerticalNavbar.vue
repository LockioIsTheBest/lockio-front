<template>
  <div id="container" class="hidden md:block">
    <nav
      class="h-screen flex flex-col bg-neutral-800 px-4 pt-8 text-white"
      id="navbar"
    >
      <div class="flex cursor-pointer items-center" @click="$router.push('/')">
        <img src="/src/assets/lockio-light.svg" alt="logo" class="h-10 w-10" />
        <span class="ml-4 text-xl font-bold">Lockio</span>
      </div>
      <!-- NAV BAR-->
      <div class="flex flex-col items-start mt-8">
        <div class="flex flex-row py-2">
          <img src="/src/assets/locker.svg" alt="locker" class="h-6 w-6 mr-3" />
          <button
            class="hover:font-bold"
            @click="$router.push({ name: 'Lockios' })"
          >
            Lockios
          </button>
        </div>
        <div class="flex py-2">
          <img
            src="/src/assets/calendar.svg"
            alt="locker"
            class="h-6 w-6 mr-3"
          />
          <button
            class="hover:font-bold"
            @click="$router.push({ name: 'Reservations' })"
          >
            Réservations
          </button>
        </div>
        <div class="flex py-2">
          <img
            src="/src/assets/profile.svg"
            alt="locker"
            class="h-6 w-6 mr-3"
          />
          <button
            class="hover:font-bold"
            @click="$router.push({ name: 'Profile' })"
          >
            Profil
          </button>
        </div>
      </div>
      <!-- STICKY ELEMENT BOTTOM NAVBAR -->
      <div class="flex flex-col items-start mt-auto mb-4">
        <div class="flex py-2">
          <img src="/src/assets/tchouk.svg" alt="locker" class="h-8 w-8 mr-3" />
          <!-- TODO : Handle long names -->
          <div class="mt-1">Tchouk Tchouk</div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
#navbar {
  width: 200px;
}
</style>
