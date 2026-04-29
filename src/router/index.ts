import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import { useAuthStore } from '../store/auth'

import Dashboard from '../views/Dashboard.vue'
import Companies from '../views/Companies.vue'
import Reports from '../views/Reports.vue'
import Login from '../views/Login.vue'

const routes: Array<RouteRecordRaw> = [
  { path: '/login', name: 'Login', component: Login },

  { path: '/', name: 'Dashboard', component: Dashboard },
  { path: '/companies', name: 'Companies', component: Companies },
  { path: '/reports', name: 'Reports', component: Reports },

  // ==================== КОМПАНИЯ ====================
  {
    path: '/company/history',
    name: 'History',
    component: () => import('../views/company/History.vue')
  },
  {
    path: '/company/management',
    name: 'Management',
    component: () => import('../views/company/Management.vue')
  },
  {
    path: '/company/geography',
    name: 'Geography',
    component: () => import('../views/company/Geography.vue')
  },
  {
    path: '/company/governance',
    name: 'CorporateGovernance',
    component: () => import('../views/company/Governance.vue')
  },

  // ==================== АКЦИОНЕРАМ И ИНВЕСТОРАМ ====================
  {
    path: '/investors/reports',
    name: 'InvestorReports',
    component: () => import('../views/investors/Reports.vue')
  },
  {
    path: '/investors/stocks',
    name: 'InvestorStocks',
    component: () => import('../views/investors/Stocks.vue')
  },
  {
    path: '/investors/ratings',
    name: 'InvestorRatings',
    component: () => import('../views/investors/Ratings.vue')
  },

  {
    path: '/partners/suppliers',
    name: 'Suppliers',
    component: () => import('../views/partners/Suppliers.vue')
  },
  {
    path: '/partners/services',
    name: 'PartnerServices',
    component: () => import('../views/partners/PartnerServices.vue')
  },
  {
    path: '/partners/marketing',
    name: 'Marketing',
    component: () => import('../views/partners/Marketing.vue')
  },
  {
    path: '/partners/franchise',
    name: 'Franchise',
    component: () => import('../views/partners/Franchise.vue')
  },
{
  path: '/press/releases',
  name: 'PressReleases',
  component: () => import('../views/press/PressReleases.vue')
},
{
  path: '/press/news',
  name: 'PressNews',
  component: () => import('../views/press/News.vue')
},
{
  path: '/press/mediabank',
  name: 'MediaBank',
  component: () => import('../views/press/MediaBank.vue')
},
{
  path: '/press/contacts',
  name: 'PressContacts',
  component: () => import('../views/press/Contacts.vue')
},
  {
    path: '/career',
    name: 'Career',
    component: () => import('../views/career/Career.vue')
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, _, next) => {
  const auth = useAuthStore()
  if (to.name !== 'Login' && !auth.userRole) {
    next('/login')
  } else {
    next()
  }
})

export default router