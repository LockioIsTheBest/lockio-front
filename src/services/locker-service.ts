import { Locker } from "../models/models";

async function fetchLockers(): Promise<Locker[]> {
  // This is just a mock function to simulate an API call
  // TODO : plug api call here
  const numberOfLockers = 20;
  const lockers: Locker[] = [];
  for (let i = 0; i < numberOfLockers; i++) {
    lockers.push({
      id: i,
      status: Math.random() < 0.8 ? "available" : "unavailable",
    });
  }
  return lockers;
}

export const lockerService = {
  fetchLockers,
};
