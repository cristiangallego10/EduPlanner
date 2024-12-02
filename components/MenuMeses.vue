<template>
  <div class="text-center">
    <!-- Selección de Meses -->
    <v-select
      v-model="selectedMonth"  <!-- Aquí se almacena el mes seleccionado -->
      :items="months"           <!-- Los meses disponibles -->
      label="Seleccionar Mes"
    ></v-select>

    <!-- Menú de ubicación (se mantiene si lo necesitas) -->
    <v-menu :location="location">
      <template v-slot:activator="{ props }">
        <v-btn
          color="primary"
          dark
          v-bind="props"
        >
          Dropdown
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
export default {
  data: () => ({
    // Meses disponibles
    months: [
      'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
      'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ],
    selectedMonth: null,  // Aquí se almacena el mes seleccionado
    items: [
      { title: 'Click Me' },
      { title: 'Click Me' },
      { title: 'Click Me' },
      { title: 'Click Me 2' },
    ],
    locations: [
      'top',
      'bottom',
      'start',
      'end',
      'center',
    ],
    location: 'end',
  }),
}
</script>
