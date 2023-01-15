<template>
    <v-container style="width: 900px; height: 100%">
        <v-breadcrumbs :items="items">
            <template v-slot:divider>
                <v-icon icon="mdi-chevron-right"></v-icon>
            </template>
        </v-breadcrumbs>
        <v-col>
            <h1>
                <v-icon icon="mdi-chart-line"></v-icon> Report Perkembangan Karbon
            </h1>
        </v-col>
        <v-card elevation="20" class="wrapper_color_bg" id="card" style="padding:">
            <v-table density="compact">
                <thead>
                    <tr>
                        <th class="wrapper_color_bg" style="padding: 20px;">
                            <v-select v-model='hst' class="down" :items="periode" label="HST" outlined variant="solo"
                                dense max-width="150">
                            </v-select>
                        </th>
                        <th class="wrapper_color_bg">
                            <v-select v-model='com' class="down" :items="comodity" label="Komoditas" outlined
                                variant="solo" dense max-width="150">
                            </v-select>
                        </th>
                        <th class="wrapper_color_bg">
                            <div class="right">
                                <v-btn @click="loadFilter">Apply</v-btn>&nbsp;&nbsp;
                                <v-btn @click="deleteFilter">Clear</v-btn>
                            </div>
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

<style>
#right{
    float: right;
}
#card{
    color:white;
}
.wrapper_color_bg {
    background-color: #134280;
}
.bg_konten {
    background-color: white;
}
</style>
<script>
import Chart from 'chart.js'
import datatrenChartData from '../data/datatren_copy.js'
import axios from 'axios'
export default {
    /* eslint-disable */
    name: 'datatren',
    data() {
        return {
            hst: sessionStorage.getItem('hst'),
            com: sessionStorage.getItem('com'),
            periode: [
                '', 'HST 1', 'HST 2', 'HST 3',
            ],
            comodity: [
                '', 'Padi', 'Cabai', 'Kentang'
            ],
            items: [
                'Dashboard',
                'Report Page'],
            datatrenChartData: datatrenChartData,
        }
    },
    methods: {
        loadFilter() {
            sessionStorage.setItem('hst', this.hst);
            sessionStorage.setItem('com', this.com);
            location.reload();
        },
        deleteFilter() {
            sessionStorage.removeItem('hst', '');
            sessionStorage.removeItem('com', '');
            location.reload();
        }
    },
    mounted() {
        var hst = this.hst;
        var com = this.com;
        const ctx = document.getElementById('data-tren');
        axios.get('https://nl227f95td.execute-api.us-east-1.amazonaws.com/dpl/maps').
            then(function (response) {
                var label = [];
                var karbonTanah = [];
                var karbonTanaman = [];
                const data = response.data.body.features;
                for (let i = 0; i < data.length; i++) {
                    if (data[i].properties.hst == hst && data[i].properties.comodity == com) {
                        label.push(data[i].properties.titik_sample);
                        karbonTanah.push(data[i].properties.karbon_tanah);
                        karbonTanaman.push(data[i].properties.karbon_tanaman);
                    } else if (hst == '' && data[i].properties.comodity == com) {
                        label.push(data[i].properties.titik_sample);
                        karbonTanah.push(data[i].properties.karbon_tanah);
                        karbonTanaman.push(data[i].properties.karbon_tanaman);
                    } else if (com == '' && data[i].properties.hst == hst) {
                        label.push(data[i].properties.titik_sample);
                        karbonTanah.push(data[i].properties.karbon_tanah);
                        karbonTanaman.push(data[i].properties.karbon_tanaman);
                    } else if (hst == '' && com == '') {
                        label.push(data[i].properties.titik_sample);
                        karbonTanah.push(data[i].properties.karbon_tanah);
                        karbonTanaman.push(data[i].properties.karbon_tanaman);
                    }
                }
                return [label, karbonTanah, karbonTanaman];
            }).then(value => [datatrenChartData.data.labels, datatrenChartData.data.datasets[1].data, datatrenChartData.data.datasets[0].data] = value).then(function () {
                new Chart(ctx, datatrenChartData);
            });
    }
}
</script>