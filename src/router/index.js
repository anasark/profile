import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  linkActiveClass: 'dark:text-[#FA5252] text-[#FA5252] lg:text-white lg:dark:text-white lg:bg-gradient-to-r from-[#FA5252] to-[#DD2476]',
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/AboutView.vue')
    },
    {
      path: '/resume',
      name: 'resume',
      component: () => import('@/views/ResumeView.vue')
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: () => import('@/views/PortfolioView.vue')
    },
    {
      path: '/blogs',
      name: 'blogs',
      component: () => import('@/views/BlogView.vue')
    },
  ]
})

export default router
