<template>
    <h1>before mount Component</h1>
    <h1 ref="adding">count {{ counter }}</h1>
    <button v-on:click="counter = counter + 1">update num</button>

    <button v-on:click="show = !show">Toggle</button>
    <LifeCycleChild v-if="show"/>
</template>
<script>

import LifeCycleChild from "./LifeCycleChild.vue"

    export default{
        name : "beforeCreate-Component",
        data(){
            console.error("created");
            return{
                counter:0,
                show: true,

            }
        },
        components:{
            LifeCycleChild,
        },
        // beforeCreate(){
        //     alert("loadnig...........");
        // },
        // created(){
        //     alert("created....")
        // },beforeMount(){
        //     console.log("before mount", this.$el);
        // },mounted(){
        //     console.log(" mount", this.$el);
        // }

        // beforeUpdate(){
        //     console.log("before updated....", this.$refs['adding'].textContent);
        // },

        // updated(){
        //     console.log("Updated.......", this.$refs['adding'].textContent);
        // }

        


    }
    
</script>
<style>
h1{
    color: blue;
}
</style>