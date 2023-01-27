<template>
  <button class="font-bold rounded-xl p-6 min-w-full"
          :disabled="!isAvailable"
          :class="{'bg-red-500': !isAvailable, 'bg-green-500': isAvailable}">
    {{ props.locker.id + 1 }}
    <br>
    {{ status }}
  </button>
</template>

<script setup lang="ts">
import {computed} from "vue";
import {Locker} from "../../models/models";
import {useLockerStore} from "../../stores/locker-store";

const props = defineProps<{
  locker: Locker
}>()

const lockerStore = useLockerStore();

const status = computed(() => {
  return lockerStore.lockers[props.locker.id].status === 'available' ? "Open" : "Closed";
});

const isAvailable = computed(() => {
  return lockerStore.lockers[props.locker.id].status === 'available';
});
</script>

<style scoped>

</style>