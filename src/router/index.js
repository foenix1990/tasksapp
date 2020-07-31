import Vue from 'vue'
import VueRouter from 'vue-router'

import Template from '../views/Template.vue'
import HomeView from '../views/HomeView.vue'

import Auth from '../views/auth/Auth.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Template',
    component: Template,
    children: [
      {
        path: '/',
        name: 'Home',
        component: HomeView,
      }
    ]
  },
  {
    path: '/auth',
    name: 'Auth',
    component: Auth,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
