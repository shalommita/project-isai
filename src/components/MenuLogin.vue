<template>
    <Leftside />
    <v-container style="justify-content: center; width: 800px; height: 649px;">
        <div class="row justify-content-md-center">
            <div class="col-md-6">
                <div class="card">
                    <div class="card-header">Login Khusus Admin</div>
                    <v-form v-model="valid" ref="form" lazy-validation>
                        <v-container>
                            <v-row>
                                <v-col>
                                    <v-text-field v-model="email" :rules="emailRules" label="E-mail" required>
                                    </v-text-field>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col>
                                    <v-text-field v-model="password" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                                        :rules="[rules.required]" :type="show1 ? 'text' : 'password'" label="Password"
                                        counter @click:append="show1 = !show1"></v-text-field>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-form>
                    <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate()">
                        Login
                    </v-btn>
                </div>
            </div>
        </div>
    </v-container>
</template>

<script>
import Leftside from "../components/LeftSide.vue"

export default {

    components: {
        Leftside
    },

    data: () => ({
        items: [
            'Dashboard',
            'Login (Admin)'],
        valid: false,
        email: '',
        emailRules: [
            v => !!v || 'E-mail is required',
            v => /.+@.+/.test(v) || 'E-mail must be valid',
        ],
        show1: false,
        rules: {
            required: value => !!value || 'Required.'
        }
    }),

    methods: {
        validate() {
            window.location.href = "/Beranda"
        }
    }
}
</script>