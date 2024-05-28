<template>
  <Navigation/>
  <div id="app">
    <!-- <Login/> -->
    <router-view />

  </div>
</template>

<script>
// import Login from "./views/Login.vue";
import Navigation from "./views/NavBar.vue";

export default {
  name: 'App',
  components: {
    // Login,
    Navigation
    
  }
}
</script>

<style>

</style>
