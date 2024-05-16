import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


const route = [
    {
        path: '/',
        redirect: '/admin/home',
      },
      {
        path: '/admin/login',
        name: 'login',
        meta:{
            title:'welcome'
        },
        component: resolve => require(['@/views/login.vue'], resolve),
      },
]