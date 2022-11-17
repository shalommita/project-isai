<template>
  <router-link
    to="/Beranda"
    id="link"
    v-if="
      this.$route.path !== '/Beranda' &&
      this.$route.path !== '/Maps' &&
      this.$route.path !== '/Bantuan' &&
      this.$route.path !== '/Login' &&
      this.$route.path !== '/Admin_Page'
    "
  >
    <h1 id="welcome">SELAMAT DATANG DI ISAI</h1>
  </router-link>
  <router-view />
</template>

<style>
#link {
  background: url(https://www.tandhur.id/bg_login.png);
  background-size: cover;
  text-decoration: none;
  height: 649px;
}
#welcome {
  color: white;
  background-color: black;
  opacity: 0;
  height: 649px;
  text-align: center;
  padding-top: 20%;
  font-size: 50px;
  transition-duration: 2s;
}
#welcome:hover {
  opacity: 0.7;
}
</style>

<script>
export default {
  data: () => ({
    main: true,
  }),
  methods: {
    mains() {
      this.main = false;
    },
  },
};
</script>
