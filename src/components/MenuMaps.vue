<template>
    <v-container style="width: 100%; height: 100%;">
        <v-breadcrumbs :items="items">
            <template v-slot:divider>
                <v-icon icon="mdi-chevron-right"></v-icon>
            </template>
        </v-breadcrumbs>
        <v-col>
            <h2>
                <v-icon icon="mdi-map"></v-icon> Maps
            </h2>
        </v-col>
        <Maps />
    </v-container>
</template>

<script>
import Maps from "./FullMaps.vue"

export default {
    components: {
        Maps
    },
    data: () => ({
        items: [
            'Dashboard',
            'Maps']
    }),
}
</script>