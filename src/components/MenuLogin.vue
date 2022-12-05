<template>
  <v-container style="width: 900px; height: 100%;">
    <v-breadcrumbs :items="items">
      <template v-slot:divider>
        <v-icon icon="mdi-chevron-right"></v-icon>
      </template>
    </v-breadcrumbs>
    <div style="display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;">
      <v-card style="width: 400px; padding: 15px; background-color: white;">
        <img src="https://download.logo.wine/logo/Microsoft_account/Microsoft_account-Logo.wine.png"
          style="margin-left: 32%; height: 100px; width: 150px; position:relative;">
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
                  :rules="[rules.required]" :type="show1 ? 'text' : 'password'" label="Password" counter
                  @click:append="show1 = !show1"></v-text-field>
              </v-col>
            </v-row>
            <p v-if="errMsg">{{ errMsg }}</p>
          </v-container>
        </v-form>
        <v-container>
          <v-btn style="float: left" :disabled="!valid" color="#134280" class="mr-4" @click="register"
            id="button_login">
            Login
          </v-btn>
          <v-btn style="float: right" @click="signInWithGoogle" color="#134280" id="button_sign">
            <img src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
              style="background-color:white ;margin-left:-15px ;height: 35px; width:35px; border-radius: 3px; ">&nbsp;
            Sign
            in
          </v-btn>
        </v-container>
      </v-card>
    </div>
  </v-container>
</template>

<style>
#button_login {
  color: white;

}

#button_sign {
  color: white
}
</style>

<script setup>
import { ref } from "vue";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { useRouter } from "vue-router";
import {
  collection,
  query,
  // doc,
  getDocs,
  where,
  // onSnapshot,
} from "@firebase/firestore";
import db from "../firebase.js";
const email = ref("");
const password = ref("");
const errMsg = ref();
const router = useRouter();
const register = () => {
  const auth = getAuth();
  signInWithEmailAndPassword(getAuth(), email.value, password.value)
    .then(data => {
      localStorage.setItem("authenticated", true);
      router.push("/admin_page");
    })
    .catch(error => {
      switch (error.code) {
        case "auth/invalid-email":
          errMsg.value = "Email invalid";
          break;
        case "auth/user-not-found":
          errMsg.value = "Account anda tidak ditemukan";
          break;
        case "auth/wrong-password":
          errMsg.value = "Password anda salah";
          break;
        default:
          errMsg.value = "Email atau password salah";
          break;
      }
    });
};
const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth();

  signInWithPopup(auth, provider).then(async result => {
    const user = auth.currentUser;

    const q = query(collection(db, "users"), where("email", "==", user.email));
    const querySnap = await getDocs(q);

    if (querySnap.docs.length == 1) {
      localStorage.setItem("authenticated", true);
      router.push("/admin_page");
    } else {
      window.alert("Akun google tidak terdaftar");
      router.push("/login");
    }
  });
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
