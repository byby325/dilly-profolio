import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/project-a',
      name: 'projectA',
      component: () => import('../views/ProjectAView.vue'),
    },
    {
      path: '/project-b',
      name: 'projectB',
      component: () => import('../views/ProjectBView.vue'),
    },
    {
      path: '/project-c',
      name: 'projectC',
      component: () => import('../views/ProjectCView.vue'),
    },
    {
      path: '/project-d',
      name: 'projectD',
      component: () => import('../views/ProjectDView.vue'),
    },
  ],
})

export default router
