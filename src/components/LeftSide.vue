<template>
  <!-- Side Bar Menu -->
  <v-navigation-drawer
    class="bg-blue-lighten-1"
    expand-on-hover
    rail
    location="left"
  >
    <!-- Logo Menu ISAI -->
    <v-list class="list">
      <v-list-item class="bg-blue-lighten-3">
        <v-img src="../images/1.png" margin="0px" padding="0px"></v-img>
      </v-list-item>
    </v-list>
    <v-divider class="menus"></v-divider>
    <!-- Konten Menu -->
    <v-list nav>
      <router-link to="/Beranda" class="menus" @click="beranda()">
        <v-list-item prepend-icon="mdi-home" value="beranda"
          >Beranda</v-list-item>
      </router-link>
      <div>
        <b-dropdown id="dropdown-1" text="Dropdown Button" class="m-md-2">
          <b-dropdown-item>
            <router-link to="/Maps" class="menus" @click="maps()">
              <v-list-item prepend-icon="mdi-map" value="maps">Maps</v-list-item>
            </router-link>
          </b-dropdown-item>
          <!-- Utk grafik -->
          <b-dropdown-item>
            <router-link to="/TimeLineChart" class="menus" @click="TimeLineChart()">
              <v-list-item prepend-icon="mdi-map" value="maps">Maps</v-list-item>
            </router-link>
          </b-dropdown-item>
        </b-dropdown>
      </div>
      <router-link to="/Bantuan" class="menus" @click="bantuan()">
        <v-list-item prepend-icon="mdi-help-circle" value="bantuan"
          >Bantuan</v-list-item
        >
      </router-link>
      <router-link to="/Login" class="menus" @click="login()">
        <v-list-item prepend-icon="mdi-account-edit" value="Login"
          >Login</v-list-item
        >
      </router-link>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import TimeLineChart from './TimeLineChart.vue';

export default {
  data: () => ({
    items: [],
  }),
  methods: {

  },
};
</script>

<style>
.menus {
  text-decoration: none;
  color: white;
  font-weight: bold;
  opacity: 0, 5;
  left: -30px;
}
.menus:hover {
  color: black;
}
</style>
