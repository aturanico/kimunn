import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Preguntas from '../views/Preguntas.vue'                                                
import Galeria from '../views/Galeria.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/preguntas',
    name: 'Preguntas',
    component: Preguntas
  },
  {
    path: '/galeria',
    name: 'Galeria',
    component: Galeria
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
