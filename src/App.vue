<template>
  <nav class="bg-blue-300 flex justify-between">
      <img class="w-12 mb-8" alt="Vue logo" src="./assets/logo.png" />
      <router-link class="mx-2" to="/home">回首頁</router-link>
  </nav>
  <div class="flex justify-center mb-8">

    <router-link class="mx-2" to="/week1">第一週作業</router-link>
    <router-link class="mx-2" to="/week2/login">第二週作業</router-link>
  </div>
  <router-view></router-view>
</template>

<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
