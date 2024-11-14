import { defineStore } from "pinia";

interface Event {
  id: number;
  title: string;
  price: number;
  description: string;
}

export const useProductStore = defineStore({
  id: "events",
  state: () => ({
    events: [] as Event[],
    event: {} as Event,
  }),
  persist: {
    storage: persistedState.localStorage,
  },
  getters: {
    getevents: (state) => state.events,
    getevent: (state) => state.event,
  },
  actions: {
    async fetchEvents() {
      try {
        const events = await $fetch("/api/events");
        this.events = events;
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    },
  },
});
