<template>
  <button class="bg-indigo-800 hover:bg-indigo-700 font-bold rounded-xl w-24 h-14">
    {{ props.locker.id + 1 }}
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
</script>

<style scoped>

</style>