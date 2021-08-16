import { createRouter, createWebHistory } from 'vue-router'
import store from '@/store/index.js'
import modules from './modules'
const routes = [
  { path: '/', component: () => import('@/components/layout/index.vue'), children: modules, meta: { requiresAuth: false, hidden: true } },
  { path: '/login', component: () => import('@/views/login/index.vue'), meta: { requiresAuth: false, hidden: true } },
  {
    path: "/404",
    component: () => import("@/views/page404/index.vue"),
    hidden: true, requiresAuth: false,
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})
const loginPath = '/login'
router.beforeEach((to, from, next) => {
  store.dispatch('loginInfo').then(user => {
    const isAuthenticated = user !== null;
    if (to.path !== loginPath && !isAuthenticated) next({ path: loginPath })
    else next()
  })

})
export default router