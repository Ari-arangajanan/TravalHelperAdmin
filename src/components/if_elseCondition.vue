<template>
    <h1 id="page" v-if="display">
        if Statement
    </h1>
    <h1 id="page" v-else>
        Else Statement
    </h1>
    <button v-on:click="display=!display">click to change</button>
</template>
<script>
 export default{
    name: "IfElseStatement",
    data() {
        return {
            display: false,
        };
    },
 }

</script>
<style>
    #page{
        color: rgb(1, 8, 226)
    }
</style>
