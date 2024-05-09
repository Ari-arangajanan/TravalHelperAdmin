<template>
<h1> Email {{ 10+10  + "\t ari"}}   , {{ email }}</h1>
<h1> number {{ number }}</h1>
<h1> name {{ getName() }}</h1>
<h1> Data {{ getData().number }}</h1>

<button v-on:click="click()"> Click me</button>
<h1 v-on:mousemove="getConsole()"> Console </h1>
</template>
<script>
    export default{
        name: "PAGES",
        data(){
            return{
                email: "arangajanan@gmail.com",
                number: "13246584687",
            }
        },
        methods: {
            getName(){
                var name = "ari"
                return name
            },

            getData(){
                
                return {
                    name: "ari",
                    number: "10"
                }
            },
            click(){
                alert("how are you");  
            },
            getConsole(){
                console.warn("error check");
            }
        }
    }
</script>
<style scoped>
    h1{
        color: brown;
    }
</style>