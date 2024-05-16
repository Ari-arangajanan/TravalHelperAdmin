import { createWebHistory, createRouter } from "vue-router";
import Login from "./../views/Login.vue";

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
];
const router = createRouter({
        history: createWebHistory(),
        routes ,
    }
);

export default router;