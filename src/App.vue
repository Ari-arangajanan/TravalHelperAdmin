<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to TH admin.js App"/>
  <!-- <PAGES/>
  <PAGEONE/>
  <INPUTBOXES/>
  <IfElseStatement/>
  <for_loop/> -->
  <form_module/>
  <props_module/>
  <watchersModule/>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';
// import PAGES from "./components/NewComponent.vue";
// import PAGEONE from "./components/pages.vue";
// import INPUTBOXES from "./components/inputboxes.vue";
// import IfElseStatement from "./components/if_elseCondition.vue";
// import for_loop from "./components/forloop.vue";
import form_module from "./components/form.vue";
import props_module from "./components/props.vue";
import watchersModule from "./components/watchers.vue";

export default {
  name: 'App',
  components: {
    // HelloWorld,
    // PAGES,
    // PAGEONE,
    // INPUTBOXES,
    // IfElseStatement,
    // for_loop,
    form_module,
    props_module,
    watchersModule,

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
