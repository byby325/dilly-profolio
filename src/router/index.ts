import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

// 解決 TypeScript 錯誤
declare module 'vue-router' {
  interface RouteMeta {
    title?: string
  }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/About.vue'),
    },
    {
      path: '/resume',
      name: 'resume',
      component: () => import('../views/Resume.vue'),
    },
    {
      path: '/project/moodzine',
      name: 'project-moodzine',
      component: () => import('../views/ProjectA.vue'),
    },
  ],
})

export default router
