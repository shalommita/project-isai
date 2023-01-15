<template>
    <v-container style="width: 900px; height: 100%;" id="elem">
        <v-breadcrumbs :items="items">
            <template v-slot:divider>
                <v-icon icon="mdi-chevron-right"></v-icon>
            </template>
        </v-breadcrumbs>
        <v-row>
            <v-col>
                <router-link to="/admin_page" style="text-decoration: none; float: left; margin-left: 15px;">
                    <v-btn>Kembali</v-btn>
                </router-link>
            </v-col>
            <v-col style="text-align: center">
                <p id="alert">This page will be unable to change or reload after 1 hour</p>
            </v-col>
            <v-col>
                <v-btn @click="logout" style="float: right; margin-right: 15px;">
                    Logout
                </v-btn>
            </v-col>
        </v-row>

        <FormCreate/>

    </v-container>
</template>

<script>
import FormCreate from "./FormCreate.vue";
import { useRouter } from "vue-router";

export default {
    data() {
        return {
            items: [
                'Dashboard',
                'Login (Admin)',
                'Admin Page',
                'Create Menu'
            ]
        }
    },
    setup() {
        const router = useRouter();
        const logout = () => {
            localStorage.setItem("authenticated", false);
            router.push("/login")
        };
        return { logout };
    },
    components: {
        FormCreate
    }
};
</script>

<style lang="scss" scoped>
#alert {
    font-size: 14px;
}
</style>