<template>
    <div>
        <h1> Hello! this is home </h1>
        <h2>{{ val }}</h2>
    </div>

</template>
<script>
import axios  from 'axios';
 export default{
    name: 'home-view',
    data() {
        return{
            val:[]
        }
    },
    async mounted(){
        try{
            var datareturn = await axios.get("api/v1/hello/hello",{ withCredentials: true });
            this.val = datareturn.data.Private
            console.log("sfsjdfhksjfdhskjfh", datareturn.data.Private);
        }catch (error){
            console.log("data in error",error);
        }
    }
 }
 
</script>
<style>
</style>