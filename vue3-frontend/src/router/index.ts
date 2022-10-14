import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
  {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue')
  },
  {
      path: '/register',
      name: 'Register',
      component: () => import('../views/Register.vue')
  },
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/buttons',
      name: 'buttons',
      component: () => import('../views/Buttons.vue')
    },
    {
      path: '/cards',
      name: 'cards',
      component: () => import('../views/Cards.vue')
    },
    {
      path: '/tables',
      name: 'tables',
      component: () => import('../views/Tables.vue')
    },
  ]
})

export default router
