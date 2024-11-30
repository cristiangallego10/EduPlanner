<template>
    <div>
        <h1>Productos</h1>
        <div v-if="getEvent.length">
            <ul >
                <li v-for="event in getEvents" :key="event.id">
                <h2>{{ event.title }}</h2>
                <p>{{ event.description }}</p>
                <strong>{{ event.price }} USD</strong>
                </li>
            </ul>
        </div>
    </div>    
</template>
<script setup>
    // Instanciar el store
  const eventStore = useEventStore()
  
  // Obtener los productos
  const { getEvents } = eventStore;

</script>