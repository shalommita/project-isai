<template>
    <v-container style="width: 900px; height: 100%;">
        <v-breadcrumbs :items="items">
            <template v-slot:divider>
                <v-icon icon="mdi-chevron-right"></v-icon>
            </template>
        </v-breadcrumbs>

        <v-row>
            <v-col>
                <h1>
                    <v-icon icon="mdi-help-circle"></v-icon> Pusat Bantuan
                </h1>
            </v-col>
        </v-row>
        <v-img src="../assets/bantu.svg" width="45%" style="float: left  "> </v-img>
        <v-row>
            <v-col>
                <v-expansion-panels variant="accordion">
                    <v-expansion-panel>
                        <v-expansion-panel-title expand-icon="mdi-plus" collapse-icon="mdi-minus" class="panel">
                            <v-icon icon="mdi-information"></v-icon>&nbsp;&nbsp;[Tentang Karbon] Teori Karbon
                        </v-expansion-panel-title>
                        <v-expansion-panel-text class="bg_acc">
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
                            <v-icon icon="mdi-information"></v-icon>&nbsp;&nbsp;Kebijakan Menu Login
                        </v-expansion-panel-title>
                        <v-expansion-panel-text class="bg_acc">
                            <div>
                                <ol>
                                    <li>Menu login hanya diperuntukkan untuk admin</li>
                                    <li>Sign in dengan akun google hanya diperuntukkan bagi akun google yang sudah terdaftar (admin)</li>
                                </ol>
                            </div>
                        </v-expansion-panel-text>
                    </v-expansion-panel>
                    <v-expansion-panel>
                        <v-expansion-panel-title expand-icon="mdi-plus" collapse-icon="mdi-minus" class="panel">
                            <v-icon icon="mdi-chat-question"></v-icon>&nbsp;&nbsp;[Tentang Karbon] Mengapa karbon penting?
                        </v-expansion-panel-title>
                        <v-expansion-panel-text class="bg_acc">
                            <ol>
                                <li>Mampu mengevalusiasi suatu sektor untuk menghitung antara sarapan dan luaran karbon
                                </li>
                                <li>Mampu memaksimalkan perdagangan karbon</li>
                            </ol>
                        </v-expansion-panel-text>
                    </v-expansion-panel>
                    <v-expansion-panel>
                        <v-expansion-panel-title expand-icon="mdi-plus" collapse-icon="mdi-minus" class="panel">
                            <v-icon icon="mdi-chat-question"></v-icon>&nbsp;&nbsp;Apa itu KalkulIsai?
                        </v-expansion-panel-title>
                        <v-expansion-panel-text class="bg_acc">
                            <ul>
                                <li>KalkulIsai merupakan kalkulator untuk menghitung jumlah karbon dari sebuah citra (gambar)</li>
                                <li>KalkulIsai menggunakan algoritma tertentu untuk dapat menghitung serta menunjukkan perkiraan jumlah karbon</li>
                                <li>
                                    Cara Penggunaan:
                                    <ol>
                                        <li>
                                            Pilih menu KalkulIsai
                                        </li>
                                        <li>
                                            Klik atau akses field (bidang) "Masukkan gambar"
                                        </li>
                                        <li>
                                            Pilih gambar yang ingin di unggah
                                        </li>
                                        <li>
                                            Kemudian pilih tombol "open"
                                        </li>
                                        <li>
                                            Tekan tombol "Upload"
                                        </li>
                                    </ol>
                                </li>
                            </ul>
                        </v-expansion-panel-text>
                    </v-expansion-panel>
                    <!-- <v-expansion-panel>
                        <v-expansion-panel-title expand-icon="mdi-plus" collapse-icon="mdi-minus" class="panel">
                            <v-icon icon="mdi-chat-question"></v-icon>&nbsp;&nbsp;Bagaimana cara mengedit data pada maps?
                        </v-expansion-panel-title>
                        <v-expansion-panel-text class="bg_acc">
                            <div>
                                <ol>
                                    <li>Silakan Login terlebih dahulu</li>
                                    <li>Gunakan username dan password yang pernah didaftarkan</li>
                                    <li>Jika sudah masuk ke laman Beranda, silakan klik menu Maps</li>
                                    <li>Lakukan edit data sesuai kebutuhan Anda</li>
                                    <li>Jika sudah, klik tombol <i>save</i></li>
                                    <li>Silakan logout agar data Anda tetap aman</li>
                                </ol>
                            </div>
                        </v-expansion-panel-text>
                    </v-expansion-panel> -->
                    <v-expansion-panel>
                        <v-expansion-panel-title expand-icon="mdi-plus" collapse-icon="mdi-minus" class="panel">
                            <v-icon icon="mdi-chat-question"></v-icon>&nbsp;&nbsp;Cara penggunaan navigasi pada peta?
                        </v-expansion-panel-title>
                        <v-expansion-panel-text class="bg_acc">
                            <div>
                                <ul>
                                    <li>[Tanda Plus&nbsp;<v-icon icon="mdi-plus"/>]<br>Digunakan untuk membesarkan peta</li>
                                    <li>[Tanda Minus&nbsp;<v-icon icon="mdi-minus"/>]<br>Digunakan untuk mengecilkan peta</li>
                                    <li>[Kompas&nbsp;<v-icon icon="mdi-compass"/>]<br>Digunakan sebagai penanda arah mata angin</li>
                                    <li>[Search&nbsp;<v-icon icon="mdi-magnify"/>]<br>Digunakan untuk mencari lokasi tertentu</li>
                                </ul>
                            </div>
                        </v-expansion-panel-text>
                    </v-expansion-panel>
                    <!-- <v-expansion-panel>
                        <v-expansion-panel-title expand-icon="mdi-plus" collapse-icon="mdi-minus" class="panel">
                            <v-icon icon="mdi-chat-question"></v-icon>Bagaimana cara menghubungi Customer Service?
                        </v-expansion-panel-title>
                        <v-expansion-panel-text class="bg_acc">
                            <div>
                                <ol>
                                    <li>Silakan klik menu beranda</li>
                                    <li>Hubungi nomor dan sosial media yang tertera pada laman tersebut</li>
                                </ol>
                            </div>
                        </v-expansion-panel-text>
                    </v-expansion-panel> -->
                    <!-- <v-expansion-panel>
                        <v-expansion-panel-title expand-icon="mdi-plus" collapse-icon="mdi-minus" class="panel">
                            <v-icon icon="mdi-chat-question"></v-icon>Situs tidak bisa diakses?
                        </v-expansion-panel-title>
                        <v-expansion-panel-text class="bg_acc">
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
                    </v-expansion-panel> -->
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
    color: white;
    background-color: #134280;
    font-size: 18px;

}

.bg_acc {
    background-color: white;
}
</style>