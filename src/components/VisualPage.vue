<template>
  <v-container style="width: 900px; height: 100%">
    <v-breadcrumbs :items="items">
      <template v-slot:divider>
        <v-icon icon="mdi-chevron-right"></v-icon>
      </template>
    </v-breadcrumbs>
    <v-col>
      <h2>
        <v-icon icon="mdi-chart-line"></v-icon> Grafik Perkembangan Karbon Titik
      </h2>
    </v-col>
    <v-card class="wrapper_color_bg" elevation="20" width="900" style="margin-top: -6px;">
      <v-table density="compact">
        <thead>
          <tr>
            <th class="wrapper_color_bg" style="padding: 20px;">
              <h4 v-html="titik" style="background-color: white; text-align: center; border-radius: 5px;"></h4>
            </th>
          </tr>
        </thead>
      </v-table>
      <div class="bg_konten">
        <canvas id="data-tren"></canvas>
      </div>
    </v-card>
  </v-container>
</template>

<script>
import Chart from 'chart.js'
import datatrenChartData from '../data/datatren.js'
import axios from 'axios'
export default {
  /* eslint-disable */
  name: 'datatren',
  data() {
    return {
      periode: [
        'HST 1', 'HST 2', 'HST 3',
      ],
      years: [
        '2022'
      ],
      datatrenChartData: datatrenChartData,
      items: [
        'Dashboard',
        'Report Page Per Titik'],
      titik: this.$route.params.id,
    }
  },
  mounted() {
    var titik = this.$route.params.id;
    var hst = this.hst;
    const ctx = document.getElementById('data-tren');
    axios.get('https://nl227f95td.execute-api.us-east-1.amazonaws.com/dpl/maps/all2').
      then(function (response) {
        var label = [];
        var karbonTanah = [];
        var karbonTanaman = [];
        for (let i = 0; i < response.data.body[titik].length; i++) {
          if (i<=10){
            label.push(response.data.body[titik][i].date_pretty);
            karbonTanah.push(response.data.body[titik][i].karbon_tanah);
            karbonTanaman.push(response.data.body[titik][i].karbon_tanaman);
          }
        }
        return [label, karbonTanah, karbonTanaman];
      }).then(value => [datatrenChartData.data.labels, datatrenChartData.data.datasets[1].data, datatrenChartData.data.datasets[0].data] = value).then(function () {
        new Chart(ctx, datatrenChartData);
      });
  }
}
</script>

<style>
.wrapper_color_bg {
  background-color: #134280;
}

.right {
  float: right;
}

.bg_konten {
  background-color: white;
}
</style>