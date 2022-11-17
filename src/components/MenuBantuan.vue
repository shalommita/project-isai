<template>
    <v-container style="width: 800px; height: 649px;">
        <v-breadcrumbs :items="items">
            <template v-slot:divider>
                <v-icon icon="mdi-chevron-right"></v-icon>
            </template>
        </v-breadcrumbs>
        <v-row>
            <v-col>
                <h1>
                    <v-icon icon="mdi-help-circle"></v-icon> PUSAT BANTUAN
                </h1>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-expansion-panels variant="accordion">
                    <v-expansion-panel>
                        <v-expansion-panel-title expand-icon="mdi-plus" collapse-icon="mdi-minus" class="panel">
                            <v-icon icon="mdi-information"></v-icon>[Tentang Karbon] Teori Karbon
                        </v-expansion-panel-title>
                        <v-expansion-panel-text>
                            Dalam manusia karbon sekitar 20% dan ada beberapa karbon yang terdapat dalam tumbuhan.
                            Bagian yang termasuk dalam teori karbon
                            <ol>
                                <li>Komersial dan Destruktif</li>
                                <li>Penginderaan jauh (citra satelit)</li>
                                <span>NIR = radiasi inframerah dekat dari piksel
                                    <br>RED = radiasi cahaya merah dari piksel</span>
                                <li>Pemodelan</li>
                                <span>Citra drone -> Indeks spektral(X) -> Hasil analisis -> Karbon pada sampel
                                    tanaman(Y) -> Model alometrik</span>
                            </ol>
                        </v-expansion-panel-text>
                    </v-expansion-panel>
                    <v-expansion-panel>
                        <v-expansion-panel-title expand-icon="mdi-plus" collapse-icon="mdi-minus" class="panel">
                            <v-icon icon="mdi-chat-question"></v-icon>[Tentang Karbon] Mengapa karbon penting?
                        </v-expansion-panel-title>
                        <v-expansion-panel-text>
                            <ol>
                                <li>Mampu mengevalusiasi suatu sektor untuk menghitung antara sarapan dan luaran karbon
                                </li>
                                <li>Mampu memaksimalkan perdagangan karbon</li>
                            </ol>
                        </v-expansion-panel-text>
                    </v-expansion-panel>
                    <v-expansion-panel>
                        <v-expansion-panel-title expand-icon="mdi-plus" collapse-icon="mdi-minus" class="panel">
                            <v-icon icon="mdi-chat-question"></v-icon>Bagaimana cara mengedit data pada maps?
                        </v-expansion-panel-title>
                        <v-expansion-panel-text class="olLi">
                            <div>
                                <ol>
                                    <li>Silakan Login terlebih dahulu</li>
                                    <li>Gunakan username dan password yang pernah didaftarkan</li>
                                    <li>Jika sudah masuk ke laman Beranda, silakan klik menu Maps</li>
                                    <li>Lakukan edit data sesuai kebutuhan Anda</li>
                                    <li>Jika sudah, klik button save</li>
                                    <li>Silakan logout agar data Anda tetap aman</li>
                                </ol>
                            </div>
                        </v-expansion-panel-text>
                    </v-expansion-panel>
                    <v-expansion-panel>
                        <v-expansion-panel-title expand-icon="mdi-plus" collapse-icon="mdi-minus" class="panel">
                            <v-icon icon="mdi-chat-question"></v-icon>Bagaimana cara menghubungi Customer Service?
                        </v-expansion-panel-title>
                        <v-expansion-panel-text>
                            <div>
                                <ol>
                                    <li>Silakan klik menu beranda</li>
                                    <li>Hubungi nomor dan sosial media yang tertera pada laman tersebut</li>
                                </ol>
                            </div>
                        </v-expansion-panel-text>
                    </v-expansion-panel>
                    <v-expansion-panel>
                        <v-expansion-panel-title expand-icon="mdi-plus" collapse-icon="mdi-minus" class="panel">
                            <v-icon icon="mdi-chat-question"></v-icon>Situs tidak bisa diakses?
                        </v-expansion-panel-title>
                        <v-expansion-panel-text>
                            <div>
                                <ul>
                                    <li>Cek koneksi internet</li>
                                    <li>Periksa URL penulisan</li>
                                    <li>Muat ulang atau segarkan halaman</li>
                                    <li>Bersihkan cache dan history browser</li>
                                    <li>Setel ulang browser yang digunakan</li>
                                </ul>
                            </div>
                        </v-expansion-panel-text>
                    </v-expansion-panel>
                </v-expansion-panels>
            </v-col>
        </v-row>
        <br>
    </v-container>
</template>

<script>

export default {

    components: {
        
    },

    data: () => ({
        items: [
            'Dashboard',
            'Bantuan']
    })
}

</script>

<style>
.panel {
    background-color: rgb(126, 126, 255);
    font-weight: bold;
    font-size: 18px;
}
</style>