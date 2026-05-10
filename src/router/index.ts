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
      meta: { title: 'Dilly Chen — Senior Product Designer' },
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/About.vue'),
      meta: { title: 'About — Dilly Chen' },
    },
    {
      path: '/project/moodzine',
      name: 'project-moodzine',
      component: () => import('../views/ProjectA.vue'),
      meta: { title: 'MOODZiNE — Case Study' },
    },
    {
      path: '/design-methods',
      name: 'design-methods',
      component: () => import('../views/DesignMethods.vue'),
      meta: { title: 'Design Methods — Dilly Chen' },
    },
    {
      path: '/design-methods/inspiration',
      name: 'design-methods-inspiration',
      component: () => import('../views/Inspiration.vue'),
    },
    {
      path: '/design-methods/ideation',
      name: 'design-methods-ideation',
      component: () => import('../views/Ideation.vue'),
    },
    {
      path: '/design-methods/implementation',
      name: 'design-methods-implementation',
      component: () => import('../views/Implementation.vue'),
    },
  ],
  // 路由切換時的捲動行為：有 hash 就到 hash，否則回到頂部
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) {
      return { el: to.hash, top: 80, behavior: 'smooth' }
    }
    return { top: 0, behavior: 'smooth' }
  },
})

// 更新瀏覽器標題
router.afterEach((to) => {
  if (to.meta?.title && typeof document !== 'undefined') {
    document.title = to.meta.title
  }
})

export default router
