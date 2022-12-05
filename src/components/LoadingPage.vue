<template>
    <v-container>
        <div id="load">
            <p>Loading</p>
            <v-img :src="require('../images/loader.gif')" style="width: 20px; height: 20px;"></v-img>
        </div>
    </v-container>
</template>

<style>
#load{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 250px;
}
</style>