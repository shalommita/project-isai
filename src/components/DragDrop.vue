<template>
    <div 
    @dragenter.prevent="toggleActive" 
    @dragleave.prevent="toggleActive" 
    @dragover.prevent
    @drop.prevent="toggleActive" 
    :class="{'active-dropzone': active}"
    class="dropzone"
    >
        <span>Drag and Drop Image File</span>
        <span>OR</span>
        <div>
            <label for="dropzoneFile">Select File</label>
            <input type="file" id="dropzoneFile" class="dropzoneFile">
            <button type="submit">Upload</button>
        </div>
    </div>
</template>

<script>
import { ref } from "vue";
export default{
    setup() {
        const active = ref(false);
        const toggleActive = () => {
            active.value = !active.value;
        };
        return {active, toggleActive};
    },

};
</script>

<style scoped lang="scss">
.dropzone {
    width: 400px;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 16px;
    border: 2px dashed #41b883;
    background-color: #fff;
    transition: .3s ease all;
    div{
        width: 200px;
    }
    label{
        padding: 8px 12px;
        color: #fff;
        background-color: #41b883;
        opacity: 0.7;
        border-radius: 3px;
        transition: .3s ease all;
        float: left;
    }
    label:hover{
        opacity: 1;
    }
    input{
        display: none;
    }
    button{
        padding: 8px 12px;
        background-color: #6ea8fe;
        border-radius: 3px;
        float: right;
    }
}
.active-dropzone{
    color: white;
    border-color: white;
    background-color: #41b883;

    label{
        background-color: white;
        color: #41b883;
    }
}
</style>