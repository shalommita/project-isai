<template>
  <v-app>
    <LeftSide/>
    <!-- <router-view></router-view> -->
  </v-app>
</template>

<script>
import LeftSide from './components/LeftSide.vue'

export default {
  name: 'App',

  components: {
    LeftSide,
  },

  data: () => ({
    land: true,
    //
  }),

  methods: {
    landing(){
      this.land = !this.land;
    }
  }

}
</script>


<style>
  .landing{
    background: url(https://www.tandhur.id/bg_login.png);
    background-size: cover;
    height: 649px;
  }
  .cover{
    height: 649px;
    padding-top: 300px;
    background-color: black;
    opacity: 0;
    transition-duration: 2s;
    color: white;
    font-size: 50px;
    justify-content: center;
    display: flex;
    text-decoration: none;
  }
  .cover:hover{
    opacity: 0.5;
  }
  #welcome {
    text-decoration: none;
    color: white;
  }
</style>