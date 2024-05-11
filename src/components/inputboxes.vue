<template>
    <h1>Two way Binding with multiple inputboxes</h1>
    <label for="">Cricket </label>
    &nbsp;
    <input type="checkbox" value="cricket" v-model="sports"/>
    <label for="">Foot ball </label>
    &nbsp;
    <input type="checkbox" value="footBall" v-model="sports"/>
    <label for="">Rugby </label>
    &nbsp;
    <input type="checkbox" value="Rugby" v-model="sports"/>

    <h1>selected sports are {{ sports }}</h1>

    <h2>--------------------------------</h2>
    <br>
    <label for="">player</label>
    &nbsp; &nbsp;
    <label for="name">ari</label>
    <input type="radio" value="ari" name="player" v-model="player">
    &nbsp;
    <label for="name2">sutha</label>
    <input type="radio" value="sutha" name="player" id="name2" v-model="player">
    <br>
    <h1>selected player is {{ player }}</h1>
</template>

<script>
    export default{
        name: "INPUTBOXES",
        data(){
           return{ 
            sports: [],
            player: [],
           };
        },
    };

</script>

<style>

</style>