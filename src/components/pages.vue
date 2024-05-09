<template>
    <h1>Two way Binding</h1>
    <input type="text" placeholder="add your text" v-model="count"/>
    <h3>{{ count }}</h3>
</template>

<script>
    export default{
        name: "PAGEONE",
        data(){
            return{ count : 20}
        }
    }

</script>

<style>

</style>