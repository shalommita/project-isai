<template>
    <!-- Side Bar Menu -->
    <v-navigation-drawer class="bg-blue-lighten-1" expand-on-hover rail location="left">
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
                <v-list-item prepend-icon="mdi-home" value="beranda">Beranda</v-list-item>
            </router-link>
            <router-link to="/Maps" class="menus" @click="maps()">
                <v-list-item prepend-icon="mdi-map" value="maps">Maps</v-list-item>
            </router-link>
            <router-link to="/Bantuan" class="menus" @click="bantuan()">
                <v-list-item prepend-icon="mdi-help-circle" value="bantuan">Bantuan</v-list-item>
            </router-link>
            <router-link to="/Login" class="menus" @click="login()">
                <v-list-item prepend-icon="mdi-help-circle" value="Login">Login</v-list-item>
            </router-link>
        </v-list>
    </v-navigation-drawer>
    <!-- Isi Konten -->
    <v-main>
        <!-- Breadcrumbs -->
        <v-breadcrumbs :items="items">
            <template v-slot:divider>
                <v-icon icon="mdi-chevron-right"></v-icon>
            </template>
        </v-breadcrumbs>
        <!-- Konten Utama -->
        <router-view />
    </v-main>

</template>

<script>

export default {
    data: () => ({
        items: [
        ]
    }),
    methods: {
        beranda() {
            if (this.items.length < 3) {
                this.items.push('Beranda')
            }
            else {
                this.items.shift()
                this.items.push('Beranda')
            }
        },
        maps() {
            if (this.items.length < 3) {
                this.items.push('Maps')
            }
            else {
                this.items.shift()
                this.items.push('Maps')
            }
        },
        bantuan() {
            if (this.items.length < 3) {
                this.items.push('Bantuan')
            } else {
                this.items.shift()
                this.items.push('Bantuan')
            }
        },
        login() {
            if (this.items.length < 3) {
                this.items.push('Login')
            } else {
                this.items.shift()
                this.items.push('Login')
            }
        },
    }
}
</script>

<style>
.menus {
    text-decoration: none;
    color: white;
    font-weight: bold;
    opacity: 0, 5;
    left: -30px;
}
.bg-blue-lighten-3{
    max-height: 150px ;
    max-width: 150px;
    border: 1px solid white;
    border-radius: 50%;
}
</style>