import { createWebHistory, createRouter } from "vue-router";
import Home from "./components/Home.vue";
import Login from "./components/Login.vue";
import SignUp from "./components/SignUp.vue";

const routes = [
    {
        name: "Home",
        path:"/",
        component: Home,
    },
    {
        name: "Login",
        path:"/login/:name",
        component: Login,
    },
    {
        name: "SignUp",
        path:"/signUp/:name",
        component: SignUp,
    }
];
const router = createRouter({
        history: createWebHistory(),
        routes ,
    }
);

export default router;