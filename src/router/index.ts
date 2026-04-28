import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import { useAuthStore } from '../store/auth'
import Dashboard from '../views/Dashboard.vue'
import Companies from '../views/Companies.vue'
import Reports from '../views/Reports.vue'
import Login from '../views/Login.vue' // Новый импорт

const routes: Array<RouteRecordRaw> = [
  { path: '/login', name: 'Login', component: Login },
  { path: '/', name: 'Dashboard', component: Dashboard, meta: { requiresAdmin: true } },
  { path: '/companies', name: 'Companies', component: Companies, meta: { requiresAdmin: true } },
  { path: '/reports', name: 'Reports', component: Reports, meta: { requiresAdmin: false } }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, _, next) => {
  const auth = useAuthStore()
  
  // Если пользователь не на странице логина и роль еще не выбрана (null)
  // Для простоты в store/auth.ts можно поставить начальное значение null
  if (to.name !== 'Login' && !auth.userRole) {
    next('/login')
  } else if (to.meta.requiresAdmin && auth.userRole !== 'admin') {
    next('/reports')
  } else {
    next()
  }
})

export default router