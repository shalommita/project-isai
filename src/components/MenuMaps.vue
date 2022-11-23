<template>
    <v-container style="width: 900px; height: 649px;">
        <v-breadcrumbs :items="items">
            <template v-slot:divider>
                <v-icon icon="mdi-chevron-right"></v-icon>
            </template>
        </v-breadcrumbs>
        <maps/>
        <!-- <Visualpage/> -->
    </v-container>
</template>

<script>
// import Visualpage from "./VisualPage.vue"
import maps from "./FullMaps.vue"

export default {
    components: {
        // Visualpage,
        maps
    },
    data: () => ({
        items: [
            'Dashboard',
            'Maps']
    })
}
</script>