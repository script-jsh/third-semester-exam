import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/repositories',
      name: 'repositories',
      component: () => import('../views/RepoListView.vue')
    },
    {
      path: '/repositories/:id',
      name: 'single-repo',
      component: () => import('../views/SingleRepoView.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: '404',
      // meta: { title: `Page not found` },
      component: () => import('../views/NotFoundView.vue')
    }
  ]
})

export default router
