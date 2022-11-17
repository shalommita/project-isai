<template>
  <v-container style="width: 800px; height: 649px" id="elem">
    <span style="float: right">This page will be unable to change or reload in 1 hour</span>
    <v-btn @click="logout">
      Logout
    </v-btn>
    <div class="home">
      <h1>Upload Image</h1>
      <Dropzone @drop.prevent="drop" @change="selectedFile"/>
      <span class="file-info">File: {{dropzoneFile.name}}</span>
    </div>
  </v-container>
</template>

<script>
import Dropzone from "./DragDrop.vue";
import {ref} from "vue";
import { useRouter } from "vue-router";

export default {
  setup(){
    let dropzoneFile = ref("");
    const router = useRouter();
    const logout = () => {
      localStorage.setItem("authenticated", false);
      router.push("/Login")
    };
    const drop = (e) => {
      dropzoneFile.value = e.dataTransfer.files[0]
    };
    const selectedFile = () => {
      dropzoneFile.value = document.querySelector('.dropzoneFile').files[0]
    };
    return {logout, dropzoneFile, drop, selectedFile};
  },
  components: {
    Dropzone
  }
};
</script>

<style lang="scss" scoped>
.home{
  height: 55vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f1f1f1;

  h1{
    font-size: 40px;
    margin-bottom: 32px;
  }
  .file-info{
    margin-top: 32px;
  }
}
</style>