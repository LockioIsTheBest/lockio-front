import { defineStore } from "pinia";
import { Locker } from "../models/models";
import { lockerService } from "../services/locker-service";

export const useLockerStore = defineStore({
  id: "locker",
  state: (): {
    lockers: Locker[];
  } => ({
    lockers: [],
  }),
  getters: {
    availableLockers(): Locker[] {
      return this.lockers.filter((locker) => locker.status === "available");
    },
  },
  actions: {
    async fetchLockers() {
      this.lockers = await lockerService.fetchLockers();
    },
    switchLockerStatus(lockerId: number) {
      const locker = this.lockers.find((locker) => locker.id === lockerId);
      if (locker) {
        locker.status =
          locker.status === "available" ? "unavailable" : "available";
      }
    },
  },
});
