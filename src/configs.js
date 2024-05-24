import axios from "axios";
// import Cookies from "js-cookie";


axios.defaults.baseURL = "http://localhost:7081/"; 
axios.defaults.headers.common['Authorization'] = 'token'  + localStorage.getItem('token')


