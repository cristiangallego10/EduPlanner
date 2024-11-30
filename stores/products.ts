import { defineStore } from "pinia";

interface Event {
  id: number;
  title: string;
  date: string;
  description: string;
}

export const useEventStore = defineStore({
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
        console.log("Eventos cargados:", events); // Verifica si los eventos se cargan correctamente
        this.events = events;
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    /*async fetchEvents() {
      try {
        const events = await $fetch("/api/events");
        this.events = events;
      } catch (error) {
        console.error("Error fetching events:", error);
      }*/
    },
  },
});
