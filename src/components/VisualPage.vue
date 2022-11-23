<template>
  <div>
      <v-app style="background: #A3E0F3;">
      <v-container 
      
      class="pt-14">
    <v-card class="wrapper" elevation="20" height="550" width="900">
    <p class="text-h5 font-weight-medium pt-5 ms-8 ">GRAFIK TREN NILAI KARBON 

    </p>
    <v-table density="compact">
    <thead>
      <tr>
        <th class="text-left">
          <v-select
                :items="periode"
                label="HST"
                outlined
                variant="solo"
                dense 
                max-width="150"
          ></v-select>
        </th>
        <th class="text-left">
          <v-select
                :items="years"
                label="Tahun"
                outlined
                variant="solo"
                dense 
                max-width="150"
          ></v-select>
        </th>
      </tr>
    </thead>
  </v-table>
  <div>
    <canvas id="data-tren"></canvas>
  </div>
        
    </v-card>
    
    
  </v-container>
  </v-app>
  </div>
</template>

<script>
import Chart from 'chart.js'
import datatrenChartData from '../data/datatren.js'
export default {
/* eslint-disable */
name: 'datatren',
data() {
  return {
    periode:[
        'Sebelum Tanam', 'HST Awal', 'HST Tengah', 'HST Akhir',
      ],
    years:[
        '2022'
      ],
    datatrenChartData: datatrenChartData
  }
},
  mounted() {
  const ctx = document.getElementById('data-tren');
  new Chart(ctx, this.datatrenChartData);
}
  }
  </script>