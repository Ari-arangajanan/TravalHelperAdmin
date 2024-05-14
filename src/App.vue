<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <h1>Welcome to TH admin</h1>
  <!-- <HelloWorld msg="Welcome to TH admin.js App"/> -->
  <!-- <PAGES/>
  <PAGEONE/>
  <INPUTBOXES/>
  <IfElseStatement/>
  <for_loop/> -->
  <!-- <form_module/>
  <props_module/>
  <watchersModule/>
  <Sample/> -->
  <!-- <Home /> -->
  <!-- <Beforecreate/> -->

 <!-- routing -->

 <RouterLink to="/home">Home</RouterLink>
 <br>
 <RouterLink to="/login/stark">Login</RouterLink>
 <br>
 <RouterLink to="/signUp/newUser">SignUp</RouterLink>
 <br>
 <RouterView></RouterView>


</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';
// import PAGES from "./components/NewComponent.vue";
// import PAGEONE from "./components/pages.vue";
// import INPUTBOXES from "./components/inputboxes.vue";
// import IfElseStatement from "./components/if_elseCondition.vue";
// import for_loop from "./components/forloop.vue";
// import form_module from "./components/form.vue";
// import props_module from "./components/props.vue";
// import watchersModule from "./components/watchers.vue";
// import Sample from "./components/Sample.vue";
// import Home from "./components/Home.vue";
// import Beforecreate from "./components/Beforecreate.vue";

export default {
  name: 'App',
  components: {
    // HelloWorld,
    // PAGES,
    // PAGEONE,
    // INPUTBOXES,
    // IfElseStatement,
    // for_loop,
    // form_module,
    // props_module,
    // watchersModule,
    // Sample,
    // Home,
    // Beforecreate,
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
