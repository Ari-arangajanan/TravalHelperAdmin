<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to TH admin.js App"/>
  <PAGES/>
  <PAGEONE/>
  <INPUTBOXES/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import PAGES from "./components/NewComponent.vue";
import PAGEONE from "./components/pages.vue";
import INPUTBOXES from "./components/inputboxes.vue";

export default {
  name: 'App',
  components: {
    HelloWorld,
    PAGES,
    PAGEONE,
    INPUTBOXES,
  }
}
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
