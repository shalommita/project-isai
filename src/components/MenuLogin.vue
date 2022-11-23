<template>
  <v-container style="width: 800px; height: 649px">
    <v-breadcrumbs :items="items">
            <template v-slot:divider>
                <v-icon icon="mdi-chevron-right"></v-icon>
            </template>
        </v-breadcrumbs>
    <v-card style="width: 400px; left: 38%; position: absolute; padding: 15px; background-color: lightsteelblue;">
      <img src="https://download.logo.wine/logo/Microsoft_account/Microsoft_account-Logo.wine.png" style="margin-left: 32%; height: 100px; width: 150px; position:relative;">
      <v-form v-model="valid" ref="form" lazy-validation>
            <v-container>
              <v-row>
                <v-col>
                  <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    label="E-mail"
                    required
                  >
                  </v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-text-field
                    v-model="password"
                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                    :rules="[rules.required]"
                    :type="show1 ? 'text' : 'password'"
                    label="Password"
                    counter
                    @click:append="show1 = !show1"
                  ></v-text-field>
                </v-col>
              </v-row>
              <p v-if="errMsg">{{ errMsg }}</p>
            </v-container>
          </v-form>
          <v-container>
            <v-btn style="float: left"
            :disabled="!valid"
            color="success"
            class="mr-4"
            @click="register"
            >
              Login
            </v-btn>
            <v-btn style="float: right"
            @click="signInWithGoogle"
            color="blue"
            >
            <img src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" style="background-color:white ;margin-left:-15px ;height: 35px; width:35px; border-radius: 3px;">&nbsp; Sign in
            </v-btn>
          </v-container>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref } from "vue";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { useRouter } from "vue-router";
const email = ref("");
const password = ref("");
const errMsg = ref();
const router = useRouter();

const register = () => {
  const auth = getAuth();
  signInWithEmailAndPassword(getAuth(), email.value, password.value)
    .then(data => {
      localStorage.setItem('authenticated', true);
      console.log(auth.currentUser);
      router.push("/Admin_Page");
    })
    .catch(error => {
      console.log(error.code);
      switch (error.code) {
        case "auth/invalid-email":
          errMsg.value = "Invalid email";
          break;
        case "auth/user-not-found":
          errMsg.value = "Account anda tidak ditemukan";
          break;
        case "auth/wrong-password":
          errMsg.value = "Password anda salah";
          break;
        default:
          errMsg.value = "Email or password was incorrect";
          break;
      }
    });
};

const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  signInWithPopup(auth, provider)
  .then(result =>{
    const user = auth.currentUser;
    if (user.email === "imanuel.vicky@ti.ukdw.ac.id"){
      localStorage.setItem('authenticated', true);
      router.push("/Admin_Page");
    }else{
      window.alert("Akun google tidak terdaftar");
      router.push("/Login");
    }
  })


};
</script>

<script>
export default {


  data: () => ({
    items: ["Dashboard", "Login (Admin)"],
    valid: false,
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+/.test(v) || "E-mail must be valid",
    ],
    show1: false,
    rules: {
      required: value => !!value || "Required.",
    },
  }),
};
</script>
