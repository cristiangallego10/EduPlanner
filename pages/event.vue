<template>
    <div>
    <h1>Principal</h1>
    <Event  />   
    </div> 
</template>
<script setup>
  // Instanciar el store
  const eventStore = useEventStore()
  

  await useAsyncData('events', async () => {
    await eventStore.fetchEvents()    
  })
  
</script>