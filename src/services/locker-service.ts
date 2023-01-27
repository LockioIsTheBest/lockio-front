import { Locker } from "../models/models";

async function fetchLockers(): Promise<Locker[]> {
  const numberOfLockers = 20;
  const lockers: Locker[] = [];
  for (let i = 0; i < numberOfLockers; i++) {
    lockers.push({
      id: i,
      status: Math.random() < 0.5 ? "available" : "unavailable",
    });
  }
  return lockers;
}

export const lockerService = {
  fetchLockers,
};
