<template>
  <v-app :class=" $store.state.goDark ? 'dark-mode' : 'bg-white'">
    <Dashboard/>
  </v-app>
</template>


<script>
import Dashboard from './components/MenuDashboard.vue'
import auth from './store/auth';
export default {
  name: 'App',
  components: {
    Dashboard
  },
  auth,
}
</script>