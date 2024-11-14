<template>
  <div>
    <v-sheet class="d-flex" height="54" tile>
      <v-select
        v-model="type"
        :items="types"
        class="ma-2"
        label="View Mode"
        variant="outlined"
        dense
        hide-details
      ></v-select>
      <v-select
        v-model="weekday"
        :items="weekdays"
        class="ma-2"
        label="Weekdays"
        variant="outlined"
        dense
        hide-details
      ></v-select>
    </v-sheet>
    <v-sheet>
      <v-calendar
        ref="calendar"
        v-model="value"
        :events="eventsFromStore"
        :view-mode="type"
        :weekdays="weekday"
      ></v-calendar>
    </v-sheet>
  </div>
</template>

<script>
import { useDate } from 'vuetify';
import { useProductStore } from '@/stores/productStore'; // Importa el store de Pinia

export default {
  data: () => ({
    type: 'month',
    types: ['month', 'week', 'day'],
    weekday: [0, 1, 2, 3, 4, 5, 6],
    weekdays: [
      { title: 'Sun - Sat', value: [0, 1, 2, 3, 4, 5, 6] },
      { title: 'Mon - Sun', value: [1, 2, 3, 4, 5, 6, 0] },
      { title: 'Mon - Fri', value: [1, 2, 3, 4, 5] },
      { title: 'Mon, Wed, Fri', value: [1, 3, 5] },
    ],
    value: [new Date()],
  }),
  computed: {
    // Usa una propiedad computada para acceder a los eventos desde el store
    eventsFromStore() {
      return this.productStore.getevents;
    },
  },
  mounted() {
    const adapter = useDate();
    // Llama a la acción fetchEvents para obtener eventos desde la API
    this.productStore.fetchEvents();
    this.getEvents({
      start: adapter.startOfDay(adapter.startOfMonth(new Date())),
      end: adapter.endOfDay(adapter.endOfMonth(new Date())),
    });
  },
  methods: {
    getEvents({ start, end }) {
      // Verifica si hay eventos en el store
      if (this.productStore.events.length === 0) {
        console.warn("No hay eventos disponibles.");
      }
    },
  },
  setup() {
    // Accede al store de eventos
    const productStore = useProductStore();
    return { productStore };
  },
};
</script>
