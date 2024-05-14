<template>
    <!-- <h1>Home Component</h1>
    <button @click="active = 'one'">one</button> &nbsp;
    <button @click="active = 'two'">two</button> &nbsp;
    <button @click="active = 'three'">three</button> &nbsp;
    <button @click="active = 'watchers'">watchers</button> &nbsp;

    <One />
    <Two />
    <Three/>
   <component :is="active" /> -->
</template>
<script>
//  import One from "./One.vue";
//  import Two from "./Two.vue";
//  import Three from "./Three.vue";
//  import watchers from "./watchers.vue"

    export default{
        name : "Home-Component",
        components:{
            // One,
            // Two,
            // Three,
            // watchers
        },
        data(){
            return{
             active : "one",
            }
        }
    }
    
</script>
<style>
</style>