<template>
  <v-app>
    <!-- Barra lateral (Drawer) -->
    <v-navigation-drawer app>
      <v-list dense>
        <v-list-item v-for="(item, index) in navItems" :key="index" @click="goToPage(item.route)">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Barra superior (AppBar) -->
    <v-app-bar app>
      <v-toolbar-title>EduPlanner</v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- Puedes agregar botones u otros elementos aquí -->
    </v-app-bar>

    <!-- Contenido principal -->
    <v-main>
      <v-container>
        <router-view /> <!-- Aquí se renderiza el contenido de las rutas -->
      </v-container>
    </v-main>

    <!-- Barra de pie de página (Footer) -->
    <v-footer app>
      <v-col class="text-center">© 2024 EduPlanner</v-col>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      navItems: [
        { title: 'Inicio', route: '/' },
        { title: 'Agenda', route: '/agenda' },
        { title: 'Proyectos', route: '/proyectos' },
        { title: 'Usuarios', route: '/usuarios' }
      ]
    };
  },
  methods: {
    goToPage(route) {
      this.$router.push(route);
    }
  }
};
</script>

<style scoped>
/* Estilos generales o personalizados para tu App.vue */
</style>

  