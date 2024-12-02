<template>
    <div>
        <h1>Agenda</h1>
        <Meses />
        <Calendar />
        <Proximos />
        <MenuMeses />
    </div>
</template>

<script setup>
import Meses from '~/components/Meses.vue';
import Calendar from '~/components/Calendar.vue';
import Proximos from '~/components/Proximos.vue';
import MenuMeses from '~/components/MenuMeses.vue';
</script>