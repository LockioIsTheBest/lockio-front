<template>
  <div class="grid lg:grid-cols-5 sm:grid-cols-3 gap-4 m-auto w-3/5 mt-8">
    <div v-for="locker in lockers" :key="locker.id">
      <LockerItem :locker="locker" @click="toggleLocker(locker.id)"></LockerItem>
    </div>
  </div>
</template>

<script setup lang="ts">

import LockerItem from "./LockerItem.vue";
import {useLockerStore} from "../../stores/locker-store";
import {computed} from "vue";

const lockerStore = useLockerStore();
lockerStore.fetchLockers();

const lockers = computed(() => useLockerStore().lockers);

const toggleLocker = (id) => {
  lockerStore.switchLockerStatus(id);
};
</script>

<style scoped>

</style>