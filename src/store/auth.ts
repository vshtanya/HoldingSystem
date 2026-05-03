import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    userRole: localStorage.getItem('userRole') || null,
    userName: 'Ваня Симонович'
  }),
  actions: {
    setRole(role: string) {
      this.userRole = role
      localStorage.setItem('userRole', role)
    },
    logout() {
      this.userRole = null
      localStorage.removeItem('userRole')
    }
  }
})