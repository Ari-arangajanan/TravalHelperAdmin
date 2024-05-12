<template>
    <h1 id="page2">
        Re use component
    </h1>
    <div class="userComponent">
        <h1>{{ data.name }}</h1>
        <h1>{{ data.email }}</h1>
    </div>
</template>
<script>
 export default{
    name: "new_user",
    props: {
        data: Object,
    }
 }

</script>
<style>
    #page2{
        color: rgb(187, 26, 112)
    }
    h3{
        color: brown;
    }
    .userComponent{
        padding: 1em;
        margin-bottom: 0.3em;
        border: 0.1em solid;
    }
</style>
