// import this after installing '@mdi/font' package
import '@mdi/font/css/materialdesignicons.css';

import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import { VCalendar } from 'vuetify/labs/VCalendar';

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    components: {
      VCalendar, // Agregamos el componente VCalendar aquí
    },
    // Aquí puedes añadir más configuración si lo necesitas
  });

  app.vueApp.use(vuetify);
});
