<template>
    <!-- <form> -->
    <h1>non props</h1>
    <h2>{{ info }}</h2>  
    <div v-bind="$attrs">
        <p v-bind="$attrs">soem txt</p>   <!--   v-bind="$attrs   will bind the id from called module -->
        <p>soem txt</p>
        <p>soem txt</p>
        <p>soem txt</p>
        <h2>{{ info }}</h2>
    </div>
    <h2></h2>
</template>
<script>
    export default {
        name:"nonProps_module",
        props:{
            info:String,
        }
    }
</script>
<style>
h1{
    color: blue;
    font-weight: 100;
}

</style>