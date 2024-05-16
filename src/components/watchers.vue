<template>
    <h1>watchers </h1>
    <h1>{{ counter }}</h1>
    <button v-on:click="counter+=1">+</button>
    <button v-on:click="counter-=1">-</button>
    <!-- <ChildSlot data="Meta"/> -->
    <div class="slotClaas">
        <ChildSlot>
            <template v-slot:header>
                <h1> Metabrains.org</h1>
            </template>
            <template v-slot:section>
                <h1> stock anme </h1>
            </template>
            <template v-slot:main>
                <h1> price</h1>
            </template>
            <template v-slot:footer>
                <button>buy</button>
            </template>
            <!-- <button>click me</button>
            <a href=""></a>
            <img src="./../assets/GCimages.png"
            width="200" alt=""/> -->
        </ChildSlot>

        <br>
        <ChildSlot>
            <template v-slot:header>
                <h1> Aribrains.org</h1>
            </template>
            <template v-slot:section>
                <h1> stock anme </h1>
            </template>
            <template v-slot:main>
                <h1> price</h1>
            </template>
            <template v-slot:footer>
                <button>buy</button>
            </template>
            <!-- <button>click me</button>
            <a href=""></a>
            <img src="./../assets/GCimages.png"
            width="200" alt=""/> -->
        </ChildSlot>
    </div>
    <!-- <ChildSlot>
        <button>click me</button>
        <a href=""></a>
        <img src="./../assets/GCimages.png"
         width="200" alt=""/>
    </ChildSlot> -->
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
    .slotClaas{
        display: flex;
        padding: 1px;
    }
</style>