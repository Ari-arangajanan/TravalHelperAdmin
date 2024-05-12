<template>
    <h1 id="page2">
        child Component
    </h1>
    <h3>
        {{ name }} : from child component 
    </h3>
    <h3>{{ user.name }}</h3>
    <h3>{{ user.email }}</h3>

    <button v-on:click="getData()">click child</button>

    <ul>
        <li v-for="items in users" :key="items  ">
            <new_user :data ="items" />
        </li>
    </ul>

    <h5>-----------------------------</h5>

    <new_user/>
</template>
<script>
import new_user from "./newUser.vue"

 export default{
    name: "Child_component",
    props: {
        name: String,
        user : Object,
        getData: Function,
    },
    components:{
        new_user,
    },
    data(){
        return {
            users: [{
                name: "ari",
                email: "ari@gmail.com",
                number: +2345679098774,
            },
            {
                name: "sutha",
                email: "sutha@gmail.com",
                number: +2445679098774,
            }]
        }
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
</style>
