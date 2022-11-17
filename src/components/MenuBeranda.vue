<template>
    <v-container style="width: 800px; height: 649px;">
        <v-breadcrumbs :items="items">
            <template v-slot:divider>
                <v-icon icon="mdi-chevron-right"></v-icon>
            </template>
        </v-breadcrumbs>
        <v-row class="text-center">
            <v-col cols="12">
                <v-img :src="require('../images/1.png')" contain height="200" />
                <p class="text-justify">
                    Isai merupakan sebuah aplikasi berbasis website yang dibuat dan dikembangkan oleh perusahaan Beehive
                    Drones. Aplikasi ini dibuat dengan tujuan supaya setiap orang dapat melakukan monitoring terhadap
                    jumlah karbon pada wilayah-wilayah persawahan, perkebunan, dan juga hutan yang terdapat di seluruh
                    wilayah Indonesia. Dengan melakukan hal ini, diharapkan Indonesia dapat memanfaatkan sumber daya
                    berupa unsur karbon ini dengan baik, sehingga nantinya dapat meningkatkan perekonomian negara dan
                    meningkatkan taraf hidup masyarakat, terutama para petani.
                </p>
            </v-col>
        </v-row>
        <v-row class="text-center">
            <v-col>
                <h1>Contact Us</h1>
                <p>
                    <v-icon icon="mdi-email"></v-icon> contact@bvdrones.com
                </p>
                <p>
                    <v-icon icon="mdi-map-marker"></v-icon> Jalan Arjuna 4B Wirobrajan
                    Yogyakarta 55252
                </p>
            </v-col>
            <v-col>
                <h1>Get To Know Us</h1>
                <v-btn class="ma-2" color="purple" icon="mdi-instagram" href="https://www.instagram.com/beehivedrones/">
                </v-btn>
                <v-btn class="ma-2" color="blue" icon="mdi-linkedin"
                    href="https://www.linkedin.com/company/beehivedrones/"></v-btn>
                <v-btn class="ma-2" color="blue-darken-3" icon="mdi-facebook"
                    href="https://www.facebook.com/beehivedrone?_rdc=1&_rdr"></v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>

export default {
    name: 'v-container',
    auto_interval: 2000,
    data: () => ({
        items: [
            'Dashboard',
            'Beranda'],
        playing: true,
        partners: [
            {imgSrc: "https://beehivedrones.com/wp-content/uploads/2021/09/4.png"},
            {imgSrc: "https://beehivedrones.com/wp-content/uploads/2021/09/5.png"},
            {imgSrc: "https://beehivedrones.com/wp-content/uploads/2021/09/6.png"}
        ],
        currentIndex: 0
    }),
    methods: {
        // setAutoRoll(){
        //     let vueSelf = this;
        //     timer = setInterval(function() {
        //         vueSelf.addIndex();
        //     }, this.auto_interval);
        // },
        // addIndex() {
        //     let newIndex = this.currentIndex + 1;
        //     this.currentIndex = newIndex === this.bannerList.length ? 0 : newIndex;
        // },
        // roll(direction) {
        //     let diff = direction === "prev" ? -1 : 1;
        //     this.currentIndex = this.getTargetIndex(diff);
        //     if(this.playing) {
        //         clearInterval(timer);
        //         this.setAutoRoll();
        // }
    },
}
</script>