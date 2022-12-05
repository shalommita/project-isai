<template>
    <v-form v-model="valid">
        <v-container style="width: 900px; height: 100%">
            <v-row class="row">
                <v-col class="tags">Tanggal Upload</v-col>
                <v-col md="4">
                    <v-text-field v-model="date" class="input" name="date" label="Tanggal" type="date" required>
                    </v-text-field>
                </v-col>
            </v-row>
            <v-row class="row">
                <v-col class="tags">Kode Sample</v-col>
                <v-col cols="12" md="4">
                    <v-text-field v-model="titik_sample" class="input" label="Sample" name="sample" required>
                    </v-text-field>
                </v-col>
            </v-row>
            <v-row class="row">
                <v-col class="tags">Hari Setelah Tanam</v-col>
                <v-col md="4">
                    <v-select v-model="hst" class="input" label="Pilih Hari Setelah Tanam" :items="[
                        'HST 1',
                        'HST 2',
                        'HST 3',
                    ]" required>
                    </v-select>
                </v-col>
            </v-row>
            <v-row class="row">
                <v-col class="tags">Lokasi</v-col>
                <v-col cols="12" md="4">
                    <v-text-field v-model="location" class="input" name="loc" label="Lokasi" required> </v-text-field>
                </v-col>
            </v-row>
            <v-row class="row">
                <v-col class="tags">Komoditas</v-col>
                <v-col cols="12" md="4">
                    <v-select v-model="comodity" class="input" name="comodity" label="Pilih Komoditas"
                        :items="['Padi', 'Kentang', 'Cabai']" required>
                    </v-select>
                </v-col>
            </v-row>
            <v-row class="row">
                <v-col class="tags">Longitude</v-col>
                <v-col cols="12" md="4">
                    <v-text-field v-model="long" type="number" class="input" label="Titik Longitude" required>
                    </v-text-field>
                </v-col>
            </v-row>
            <v-row class="row">
                <v-col class="tags">Latitude</v-col>
                <v-col md="4">
                    <v-text-field class="input" v-model="lat" type="number" label="Titik Latitude" required>
                    </v-text-field>
                </v-col>
            </v-row>
            <!-- <v-row class="row">
                <v-col class="tags">Upload Foto RGB</v-col>
                <v-col md="4">
                    <v-file-input v-model="uploadRGB" @change="addPhoto" class="input" name="upload" label="Upload Foto"
                        accept="image/jpg, image/png, image/jpeg" required>
                    </v-file-input>
                </v-col>
            </v-row>
            <v-row class="row">
                <v-col class="tags">Upload Foto NIR</v-col>
                <v-col md="4">
                    <v-file-input v-model="uploadNIR" @change="addNIR" class="input" label="Upload Foto"
                        accept="image/jpg, image/png, image/jpeg" required>
                    </v-file-input>
                </v-col>
            </v-row> -->
        </v-container>
    </v-form>
    <router-link to="/admin_page" @click="(submitForm)">
        <v-btn class="mr-4" color="green-lighten-1" style="float: right">
            Upload
        </v-btn>
    </router-link>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

var uuid = uuidv4();

export default {
    data: function () {
        return {
            uuid: null,
            titik_sample: '',
            date: '',
            hst: '',
            location: '',
            comodity: '',
            long: '',
            lat: '',
            // uploadRGB: '',
            // uploadNIR: ''
        }
    },
    methods: {
        submitForm: function () {
            this.uuid = String(uuid);
            axios
                .post('https://nl227f95td.execute-api.us-east-1.amazonaws.com/dpl/maps', {
                    uuid: this.uuid,
                    titik_sample: this.titik_sample,
                    date: this.date,
                    hst: this.hst,
                    location: this.location,
                    comodity: this.comodity,
                    lat: this.long,
                    long: this.lat,
                    // uploadRGB: this.uploadRGB,
                    // uploadNIR: this.uploadNIR
                }).catch((err) => {
                    this.error = err.message;
                }).then(
                    window.alert('Data berhasil ditambahkan'),
                    this.$route.path('/admin_page')
                )
        },
        addPhoto(){
            
        },
        addNir(){

        }
    }
};
</script>
<style scoped lang="scss">
#inside {
    height: 195px;
    width: 396px;
    row-gap: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.tags {
    font-weight: bolder;
}

.input {
    width: 500px;
}
</style>