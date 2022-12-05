<template>
  <v-container style="width: 900px; height: 100%;">
    <v-breadcrumbs :items="items">
      <template v-slot:divider>
        <v-icon icon="mdi-chevron-right"></v-icon>
      </template>
    </v-breadcrumbs>
    <v-row>
      <v-col>
        <router-link to="/create_menu" class="crud">
          <v-btn>Create</v-btn>
        </router-link>
      </v-col>
      <v-col>
        <p id="alert">This page will be unable to change or reload after 1 hour</p>
      </v-col>
      <v-col>
        <v-btn @click="logout" style="float: right">
          Logout
        </v-btn>
      </v-col>
    </v-row>
    <div style="display: flex; justify-content: center; margin-top: 20px;">
      <v-table style="border: 1px solid; border-radius: 5px;">
        <thead>
          <tr>
            <th>Kode</th>
            <th>Lokasi</th>
            <th>Komoditas</th>
            <th>HST</th>
            <th>Karbon Tanaman</th>
            <th>Karbon Tanah</th>
            <th>LongLat</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in content" :key="item.properties.uuid">
            <td>{{ item.properties.titik_sample }}</td>
            <td>{{ item.properties.location }}</td>
            <td>{{ item.properties.comodity }}</td>
            <td>{{ item.properties.hst }}</td>
            <td>{{ item.properties.karbon_tanaman }}</td>
            <td>{{ item.properties.karbon_tanah }}</td>
            <td>{{ item.geometry.coordinates }}</td>
            <td>
              <v-tooltip text="Delete">
                <template v-slot:activator="{ props }">
                  <v-btn @click="deleteData(item.properties.uuid,item.properties.date)" class="btn" color="red"
                    icon="mdi-trash-can" size="small" v-bind="props">
                  </v-btn>
                </template>
              </v-tooltip>
            </td>
          </tr>
        </tbody>
      </v-table>
    </div>
  </v-container>
</template>

<style>
.crud {
  text-decoration: none;
}

#alert {
  font-size: 14px;
  text-align: center;
}
</style>

<script>
import { useRouter } from "vue-router";
import axios from "axios";

export default {
  data() {
    return {
      content: undefined,
      uuid: '',
      date: '',
      items: [
        'Dashboard',
        'Login (Admin)',
        'Admin Page'
      ]
    }
  },
  setup() {
    const router = useRouter();
    const logout = () => {
      localStorage.setItem("authenticated", false);
      router.push("/login")
    };
    return { logout };
  },
  methods: {
    deleteData: function (uuid, date) {
      this.uuid = uuid;
      this.date = date;

      console.log(this.uuid);
      console.log(this.date);
      axios
        .post('https://nl227f95td.execute-api.us-east-1.amazonaws.com/dpl/maps/delete', {
          uuid: this.uuid,
          date: this.date,
        }).catch((err) => {
          this.error = err.message;
          console.log(this.error)
        }).then((resp) => {
          console.log(resp.data),
          window.alert('Data berhasil dihapus'),
          location.reload()
        })
    }
  },
  mounted() {
    axios.get('https://nl227f95td.execute-api.us-east-1.amazonaws.com/dpl/maps')
      .then((resp) => {
        this.content = resp.data.body.features;
      });
  },
}
</script>