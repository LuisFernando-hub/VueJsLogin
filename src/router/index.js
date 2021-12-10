import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import List from '../views/List.vue'
import Form from '../views/Form.vue'
import Register from '../views/Register.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
    {
    path: '/form',
    name: 'Form',
    component: Form
  },
  {
    path: '/list',
    name: 'List',
    component: List
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next) =>{
  if(to.name !== "login" && to.name !== "register" && !localStorage.getItem('authUser')){
    next({name: 'login'});
  }else {
    next();
  }
})

export default router
