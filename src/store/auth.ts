import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    // Пытаемся достать роль из localStorage при загрузке
    userRole: localStorage.getItem('userRole') || null,
    userName: 'Ваня Симонович'
  }),
  actions: {
    setRole(role: string) {
      this.userRole = role
      // Сохраняем роль в браузер, чтобы она не пропала
      localStorage.setItem('userRole', role)
    },
    logout() {
      this.userRole = null
      // Удаляем данные при выходе
      localStorage.removeItem('userRole')
    }
  }
})