import { createRouter, createWebHistory } from 'vue-router'
import Bar from '../views/Bar.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Bar
    },
    {
      path: '/pie',
      name: 'pie',
      component: ()=> import('../views/Pie.vue')
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('../views/AboutView.vue') 
    },
    {
      path: '/test',
      name: 'test',
      component: ()=> import('../views/Test.vue')
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('../views/AboutView.vue') 
    },
    {
      path: '/pgbar',
      name: 'pgbar',
      component: ()=> import('../views/ProgressBar.vue')
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('../views/AboutView.vue') 
    }
  ]
})

export default router
