import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../views/Login.vue'
import axios from 'axios'
import store from '../store/index'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
  },

  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {requiresAuth: true}
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to,from,next)=>{
  if(to.meta.requiresAuth){
    if(localStorage.getItem('token')){
      axios.get('http://localhost:5000/',{
        headers: {
            Authorization: localStorage.getItem('token')
          }
        }).then((res)=>{
          store.state.user = res.data.user
          console.log(store.state.user)
        })
      next()  
      
    }else{
      next('/')
    }

  }else{
    next()
  }
})
export default router
