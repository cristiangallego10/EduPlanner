<template>
  <div v-if="events.length === 0">No hay eventos disponibles</div>
 <v-data-iterator
   :items="events"
   item-value="id"
 >
   <template v-slot:default="{ items, isExpanded, toggleExpand }">
     <v-row>
       <v-col
         v-for="event in items"
         :key="event.id"
         cols="12"
         md="6"
         sm="12"
       >
         <v-card>
           <v-card-title class="d-flex align-center">
             <v-icon
               color="#4CAF50"
               icon="mdi-calendar"
               size="18"
               start
             ></v-icon>

             <h4>{{ event.title }}</h4>
           </v-card-title>

           <v-card-subtitle>{{ event.date }}</v-card-subtitle>

           <v-card-text>
             {{ event.description }}
           </v-card-text>

           <div class="px-4">
             <v-switch
               :label="`${isExpanded(event) ? 'Hide' : 'Show'} details`"
               :model-value="isExpanded(event)"
               density="compact"
               inset
               @click="() => toggleExpand(event)"
             ></v-switch>
           </div>

           <v-divider></v-divider>

           <v-expand-transition>
             <div v-if="isExpanded(event)">
               <v-list :lines="false" density="compact">
                 <v-list-item :title="`📅 Event Date: ${event.date}`" active></v-list-item>
               </v-list>
             </div>
           </v-expand-transition>
         </v-card>
       </v-col>
     </v-row>
   </template>
 </v-data-iterator>
</template>

<script>
import { useEventStore } from "@/stores/products.ts"; // Asegúrate de tener la ruta correcta

export default {
 data() {
   return {
     events: [], // Inicialmente vacío, se llenará con los datos del store
   };
 },
 mounted() {
   const eventStore = useEventStore();
   eventStore.fetchEvents().then(() => {
     console.log("Eventos desde el store:", eventStore.getevents); // Verifica la estructura de los eventos
     this.events = eventStore.getevents;
   });
 },
};

</script>


<!--template>
 <v-data-iterator
   :items="desserts"
   item-value="name"
 >
   <template v-slot:default="{ items, isExpanded, toggleExpand }">
     <v-row>
       <v-col
         v-for="item in items"
         :key="item.raw.name"
         cols="12"
         md="6"
         sm="12"
       >
         <v-card>
           <v-card-title class="d-flex align-center">
             <v-icon
               :color="item.raw.color"
               :icon="item.raw.icon"
               size="18"
               start
             ></v-icon>

             <h4>{{ item.raw.name }}</h4>
           </v-card-title>

           <v-card-text>
             {{ item.raw.description }}
           </v-card-text>

           <div class="px-4">
             <v-switch
               :label="`${isExpanded(item) ? 'Hide' : 'Show'} details`"
               :model-value="isExpanded(item)"
               density="compact"
               inset
               @click="() => toggleExpand(item)"
             ></v-switch>
           </div>

           <v-divider></v-divider>

           <v-expand-transition>
             <div v-if="isExpanded(item)">
               <v-list :lines="false" density="compact">
                 <v-list-item :title="`🔥 Calories: ${item.raw.calories}`" active></v-list-item>
                 <v-list-item :title="`🍔 Fat: ${item.raw.fat}`"></v-list-item>
                 <v-list-item :title="`🍞 Carbs: ${item.raw.carbs}`"></v-list-item>
                 <v-list-item :title="`🍗 Protein: ${item.raw.protein}`"></v-list-item>
                 <v-list-item :title="`🧂 Sodium: ${item.raw.sodium}`"></v-list-item>
                 <v-list-item :title="`🦴 Calcium: ${item.raw.calcium}`"></v-list-item>
                 <v-list-item :title="`🧲 Iron: ${item.raw.iron}`"></v-list-item>
               </v-list>
             </div>
           </v-expand-transition>
         </v-card>
       </v-col>
     </v-row>
   </template>
 </v-data-iterator>
</template>
<script>
 export default {
   data: () => ({
     desserts: [
       {
         name: 'Frozen Yogurt',
         description: 'A tangy and creamy dessert made from yogurt and sometimes fruit, Frozen Yogurt is a lighter alternative to ice cream. Perfect for those who crave a sweet treat but want to keep it on the healthier side.',
         icon: 'mdi-ice-cream',
         color: '#6EC1E4',
         calories: 159,
         fat: 6,
         carbs: 24,
         protein: 4,
         sodium: 87,
         calcium: '14%',
         iron: '1%',
       },
       {
         name: 'Ice cream sandwich',
         description: 'A classic treat featuring a layer of creamy ice cream sandwiched between two cookies or cake layers. Ideal for those hot summer days when you can\'t decide between a cookie and ice cream.',
         icon: 'mdi-cookie',
         color: '#F4A261',
         calories: 237,
         fat: 9,
         carbs: 37,
         protein: 4.3,
         sodium: 129,
         calcium: '8%',
         iron: '1%',
       },
       {
         name: 'Eclair',
         description: 'A small, individual cake topped with frosting and often adorned with sprinkles or other decorations. Great for parties or as a quick indulgence when you need a sugar fix.',
         icon: 'mdi-cake-variant',
         color: '#6D4C41',
         calories: 262,
         fat: 16,
         carbs: 23,
         protein: 6,
         sodium: 337,
         calcium: '6%',
         iron: '7%',
       },
       {
         name: 'Cupcake',
         description: 'A small, individual cake topped with frosting and often adorned with sprinkles or other decorations. Great for parties or as a quick indulgence when you need a sugar fix.',
         color: '#FFADAD',
         icon: 'mdi-cupcake',
         calories: 305,
         fat: 3.7,
         carbs: 67,
         protein: 4.3,
         sodium: 413,
         calcium: '3%',
         iron: '8%',
       },
     ],
   }),
 }
</script-->
