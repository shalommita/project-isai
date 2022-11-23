<template>
  <v-app>
    <Leftside v-if="this.$route.path !== '/'"/>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Leftside from "./components/LeftSide.vue"

import { onMounted, ref } from "vue";
import { getAuth, onAuthStateChanged,  } from "firebase/auth";

const isLoggedIn = ref(false);

let auth;
onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, user => {
    if (user) {
      isLoggedIn.value = true;
    } else {
      isLoggedIn.value = false;
    }
  });
});

export default {
  name: "App",

  components: {

    Leftside
  },

  data: () => ({
    //
  }),
};
</script>