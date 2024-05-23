import { createWebHistory, createRouter } from "vue-router";
import Login from "./../views/Login.vue";
import Home from "./../views/Home.vue";

const routes = [
    {
        path: '/',
        redirect: '/login/:name',
      },
    {
        name: "Login",
        path:"/login/:name",
        component: Login,
    },
    {
        name: "home",
        path:"/home/",
        component: Home,
    },
];
const router = createRouter({
        history: createWebHistory(),
        routes ,
    }
);

export default router;