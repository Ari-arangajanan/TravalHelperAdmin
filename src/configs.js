import axios from "axios";


axios.defaults.baseURL = "http://localhost:7081/"; 
axios.defaults.headers.common['Authorization'] = 'token'  + localStorage.getItem('token')
