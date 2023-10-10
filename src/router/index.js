import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/main',
      name: 'main',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Main.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/About.vue')
    },
    {
      path: '/west-end',
      name: 'west-end',
      component: () => import('../views/West-end.vue')
    },
    {
      path: '/secret',
      name: 'secret',
      component: () => import('../views/Secret.vue')
    },
    {
      path: '/secret2',
      name: 'secret2',
      component: () => import('../views/Secret2.vue')
    },
  ]
})

export default router
