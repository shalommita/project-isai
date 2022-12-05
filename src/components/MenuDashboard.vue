<template>
  <router-link to="/beranda" id="link" style="
    text-decoration: none;
    ">
    <div style="
      background:  url(https://www.tandhur.id/bg_login.png);
      background-size: cover;
      height: 100%;
    ">

      <h2 id="welcome">SELAMAT DATANG DI

        <v-img src="../assets/logo_beranda2.png" width="30%" style="display:block; margin:auto; padding-top: 0%;">
        </v-img>

        <br>
        <span>Klik dimana saja untuk melanjutkan</span>
      </h2>
    </div>
  </router-link>
</template>

<style>
#welcome {
  color: white;
  background-color: black;
  opacity: 0;
  height: 100%;
  text-align: center;
  padding-top: 5%;
  font-size: 40px;
  transition-duration: 2s;
}

#welcome:hover {
  opacity: 0.7;
}

#welcome>span {
  font-size: medium;
  font-weight: normal;
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
