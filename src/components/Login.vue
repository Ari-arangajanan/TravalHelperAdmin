<template>
   <!-- <h1>Login page  {{ login }}</h1>
   <h2 v-for="items in info" :key="items"> {{ items.email }} || {{ items.first_name }}</h2> -->
   <div>
    <h1>Login page {{ login }}</h1>
    <table class="styled-table">
      <thead>
        <tr>
          <th>Email</th>
          <th>First Name</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in info" :key="item.id">
          <td>{{ item.email }}</td>
          <td>{{ item.first_name }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import {useRoute} from "vue-router";
import axios from "axios";

    export default{
        name : "Home-Component",
        async mounted(){
            const route = useRoute();
            console.table("name", route.params.name);
            this.login = route.params.name;

            let information = await axios.get("https://reqres.in/api/users?page=2");
            console.log("Api Data", information.data.data);
            this.info =  information.data.data;
        },
        data(){
            return{
                login:'',
                info: [],
            }
        },
        // async mounted(){
           
        // }
    }
    
</script>
<style>
.styled-table {
  width: 100%;
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 18px;
  font-family: 'Arial, sans-serif';
  text-align: left;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
}

.styled-table thead tr {
  background-color: #009879;
  color: #ffffff;
  text-align: left;
}

.styled-table th,
.styled-table td {
  padding: 12px 15px;
}

.styled-table tbody tr {
  border-bottom: 1px solid #dddddd;
}

.styled-table tbody tr:nth-of-type(even) {
  background-color: #f3f3f3;
}

.styled-table tbody tr:last-of-type {
  border-bottom: 2px solid #009879;
}

.styled-table tbody tr:hover {
  background-color: #f1f1f1;
  color: #333;
}
</style>