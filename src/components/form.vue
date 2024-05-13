<template>
    <!-- <form> -->
        <h1>Form</h1>
        <label> username </label>&nbsp;&nbsp;&nbsp;
        <input type="text" placeholder="input your username" id="" v-model="form.username"/>
        <br/>
        <br/>
        <label> password </label>&nbsp;&nbsp;
        <input type="password" placeholder="input your password" id="" v-model="form.password"/>
        &nbsp;&nbsp;
        <br/>
        <br/>
        <label for="">hobbies</label> &nbsp;
        <label>cricket</label>&nbsp;    
        <input type="checkbox" value="cricket" v-model="form.hobbies">
       
        <label>football</label>&nbsp;    
        <input type="checkbox" value="football" v-model="form.hobbies">
        
        <label>vollyball</label>&nbsp;    
        <input type="checkbox" value="vollyball" v-model="form.hobbies">
        <br>
        <br>
        <button v-on:click="login">sign in</button>
    <!-- </form> -->
    <p>{{ form }}</p>
</template>
<script>
export default{
    name:"form_module",
    data(){
        return{
            form:{
                username: "",
                password: "",
                hobbies:[],
            },
            fun:[]
        }
    },
    methods: {
        login(){
            this.fun=[];
            for(const item in this.form){
                if(this.form[item]==="" || this.form[item].length===0)
                this.fun.push(item)  ;
            }
            if(this.fun.length===0){
                alert("information submitted");
            }
            console.log("logged in", this.form);
        }
    }
}
</script>
<style>
h1{
    color: blue;
    font-weight: 100;
}


</style>