<template>
  <v-app>
    <Dashboard/>
  </v-app>
</template>

<script>
import Dashboard from './components/MenuDashboard.vue'

export default {
  name: 'App',

  components: {
    Dashboard
  },

  data: () => ({
    //
  }),

}
</script>