<template>
    <v-container style="width: 800px; height: 649px;">
        <v-breadcrumbs :items="items">
            <template v-slot:divider>
                <v-icon icon="mdi-chevron-right"></v-icon>
            </template>
        </v-breadcrumbs>
    </v-container>
</template>

<script>

export default {
    components: {
        
    },
    data: () => ({
        items: [
            'Dashboard',
            'Maps']
    })
}
</script>