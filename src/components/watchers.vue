<template>
    <h1>watchers </h1>
    <h1>{{ counter }}</h1>
    <button v-on:click="counter+=1">+</button>
    <button v-on:click="counter-=1">-</button>
    <ChildSlot data="Meta"/>
</template>
<script>
import ChildSlot from "./childSlot.vue";

    export default{
        name: "watchersModule",
        data(){
            return{
                counter: 0,
            }
        },
        watch:{
            counter(num,last){
                if(num > 10 && num > last) {
                    alert("you are exceeded the limit");
                    this.counter = 0
                }
            }
        },
        components:{
            ChildSlot,
        }
    }
</script>
<style>
</style>