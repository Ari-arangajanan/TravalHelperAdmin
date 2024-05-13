<template>
  <h1>Slots</h1>   <!-- slots are used to pass multiple data from one component to other -->
  <h2>{{ data }}</h2>
</template>
<script>
    export default{
        name:"ChildSlot",
        props:{
            data: String,
        }
    } 

</script>
<style>

</style>