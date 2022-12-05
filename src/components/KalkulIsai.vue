<template>
    <v-container style="width: 900px; height: 100%;">
        <v-breadcrumbs :items="items">
            <template v-slot:divider>
                <v-icon icon="mdi-chevron-right"></v-icon>
            </template>
        </v-breadcrumbs>
        <h1><v-icon icon="mdi-calculator"></v-icon>Kalkulator Karbon ISAI</h1>
        <div id="con">
            <v-form>
                <v-row>
                    <v-col>
                        <v-file-input label="Masukkan gambar" variant="filled" prepend-icon="mdi-camera"
                            accept="image/jpg, image/png, image/jpeg" required style="
                            width: 600px;
                        ">
                        </v-file-input>
                    </v-col>
                </v-row>
            </v-form>
            <v-btn type="submit" style="background-color: #757678; color: white;">Upload</v-btn>
        </div>
    </v-container>
</template>

<style>
    #con{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 50px; 
    }
</style>

<script>
export default {
    data() {
        return {
            items: [
                'Dashboard',
                'KalkulIsai'
            ]
        }
    }
}
</script>