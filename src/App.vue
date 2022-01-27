<template>
  <nav class="bg-blue-300 flex items-center justify-between">
      <img class="w-12" alt="Vue logo" src="./assets/logo.png" />
      <router-link class="mx-2" to="/">回首頁</router-link>
  </nav>
  <aside class="h-screen fixed flex flex-col">

    <router-link class="m-2 router-link-active" to="/week1">第一週作業</router-link>
    <router-link class="m-2" to="/week2/login">第二週作業</router-link>
  </aside>
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
