
  
  /*computed: {
    // Usa una propiedad computada para acceder a los eventos desde el store
    eventsFromStore() {
      return this.productStore.getevents;
    },
  }*/
  onMounted: ()=>{
    const adapter = useDate();
    // Llama a la acción fetchEvents para obtener eventos desde la API
    this.eventStore.fetchEvents();
    this.getEvents({
      start: adapter.startOfDay(adapter.startOfMonth(new Date())),
      end: adapter.endOfDay(adapter.endOfMonth(new Date())),
    });
  }

  const getEvents = ({ start, end }) =>{
      // Verifica si hay eventos en el store
      if (this.eventStore.events.length === 0) {
        console.warn("No hay eventos disponibles.");
      }
    };
  
    // Accede al store de eventos
    const eventStore = useEventStore();
  

</script>


<!--script>
import { useDate } from 'vuetify';


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
</script-->
