<template>
    <h1 id="page">
        forloop
    </h1>
    <ul>
        <li v-for="program in technology" :key="program"> {{ program }}</li>
    </ul>

    <ul>
        <li v-for="data in user" :key="data">name is: {{ data.name }}</li>
        <li v-for="data in user" :key="data">email is: {{ data.email }}</li>
        <li v-for="data in user" :key="data">number is: {{ data.number }}</li>
    </ul>

    <Child_component name="ari" :user="user" :getData="getData"/>
</template>
<script>
import Child_component from "./child.vue"

 export default{
    name: "for_loop",
    data() {
        return {
            technology:["java","java script", "php","c#"],
            // user: [{
            //     name: "ari",
            //     email: "ari@gmail.com",
            //     number: +2345679098774,
            // },
            // {
            //     name: "sutha",
            //     email: "sutha@gmail.com",
            //     number: +2445679098774,
            // }]
            user: {
                name: "sutha",
                email: "sutha@gmail.com",
                number: +2445679098774,
            }
        };
    },
    components: {
        Child_component,
    },
    methods: {
        getData() {
            alert(" on alert ")
        }
    }
 }

</script>
<style>
    #page{
        color: rgb(1, 8, 226)
    }
</style>
