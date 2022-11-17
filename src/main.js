import { createApp } from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import router from "./router";
import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css";

import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyCAjUMCJxY9-ex0yOdiN0WuS1fp3BaD2iw",
  authDomain: "kedaireka-a7195.firebaseapp.com",
  projectId: "kedaireka-a7195",
  storageBucket: "kedaireka-a7195.appspot.com",
  messagingSenderId: "725812495527",
  appId: "1:725812495527:web:9ddcc36b14c825baee0782"
};

// Initialize Firebase
initializeApp(firebaseConfig);
loadFonts();

createApp(App).use(vuetify).use(store).use(router).mount("#app");
