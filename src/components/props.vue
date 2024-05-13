<!-- props and nn propos data -->

<!-- props data: data that passed from one component to another -->
<template>
    <!-- propsdata -->
        <h1>props</h1>
        <nonProps_module info="hello world" id="name" />     <!-- method that displaying the id called non props data-->
    
</template>
<script>
import nonProps_module from "./nonProps.vue";

export default{
    name:"props_module",
    data(){
        return{
        }
    },
    components: {
        nonProps_module,
    }
}
</script>
<style>
h1{
    color: blue;
    font-weight: 100;
}


</style>