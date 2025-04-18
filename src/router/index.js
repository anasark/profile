import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  linkActiveClass: 'dark:text-[#FA5252] text-[#FA5252] lg:text-white lg:dark:text-white lg:bg-gradient-to-r from-[#FA5252] to-[#DD2476]',
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/ThemeOne/AboutView.vue')
    },
    {
      path: '/resume',
      name: 'resume',
      component: () => import('@/views/ThemeOne/ResumeView.vue')
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: () => import('@/views/ThemeOne/PortfolioView.vue')
    },
    {
      path: '/pdf',
      name: 'PDF',
      component: () => import('@/views/ThemeOne/ResumePDF.vue')
    },
  ]
})

export default router
