<template>
  <div v-if="$route.name !== 'Login'" class="min-h-screen flex font-sans text-slate-900 relative">
    
    <aside 
  @mouseenter="isCollapsed = false"
  @mouseleave="isCollapsed = true"
  :class="isCollapsed ? 'w-20' : 'w-72'"
  class="bg-white/70 backdrop-blur-xl text-slate-900 flex flex-col shadow-2xl transition-all duration-300 ease-in-out sticky top-0 h-screen z-50 border-r border-white/40"
>
    >
      <div class="p-4 flex flex-col h-full overflow-hidden">
        
        <div class="flex items-center mb-10 h-10">
          <div :class="isCollapsed ? 'mx-auto' : 'mr-3'" class="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-xl shrink-0 shadow-lg">
            H
          </div>
          <span v-if="!isCollapsed" class="text-xl font-bold tracking-tight whitespace-nowrap">
            Holding Control
          </span>
        </div>
        
        <nav class="flex flex-col gap-2">
          <router-link 
            v-for="link in filteredNav" 
            :key="link.path"
            :to="link.path" 
            class="flex items-center p-3 rounded-xl transition-all hover:bg-white/10 group relative"
            active-class="bg-blue-600 shadow-lg text-white"
          >
            <div class="-ml-1 flex justify-center items-center shrink-0">
              <img :src="link.icon" class="w-7 h-7 object-contain group-hover:scale-110 transition-transform" />
            </div>
            
            <span v-if="!isCollapsed" class="ml-3 font-medium whitespace-nowrap transition-opacity">
              {{ link.name }}
            </span>
          </router-link>
        </nav>

        <div class="mt-auto pt-6 border-t border-white/10">

<button 
  @click="handleLogout"
  class="w-full flex items-center p-3 rounded-xl hover:bg-red-50 text-slate-500 hover:text-red-600 transition-all group"
>
  <div class="w-10 h-10 flex justify-center items-center shrink-0">
    <img 
      :src="logoutIcon" 
      class="w-6 h-6 object-contain opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all" 
      alt="Exit"
    />
  </div>
  
  <span v-if="!isCollapsed" class="ml-3 font-medium">Выйти</span>
</button>
        </div>
      </div>
    </aside>

    <main class="flex-1 flex flex-col min-w-0 h-screen relative z-10">
      <header class="h-16 bg-white/70 backdrop-blur-md border-b border-white/20 flex items-center justify-between px-8">
        <div class="font-bold uppercase tracking-wider text-blue-700">{{ $route.name }}</div>
      </header>
      
      <div class="flex-1 overflow-y-auto p-6 bg-white/20 backdrop-blur-[2px]">
        <router-view></router-view>
      </div>
    </main>
  </div>

  <div v-else class="h-screen w-screen overflow-hidden">
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from './store/auth'

// ПОДКЛЮЧАЕМ ТВОИ КАРТИНКИ
import chartIcon from './assets/chart.png'
import buildingIcon from './assets/building.png'
import filesIcon from './assets/files.png'
import logoutIcon from './assets/door.png'

const auth = useAuthStore()
const router = useRouter()
const isCollapsed = ref(true)

const navigation = [
  { name: 'Главная панель', path: '/', icon: chartIcon, adminOnly: true },
  { name: 'Дочерние компании', path: '/companies', icon: buildingIcon, adminOnly: true },
  { name: 'Отчетность', path: '/reports', icon: filesIcon, adminOnly: false },
]

const filteredNav = computed(() => {
  return navigation.filter(link => !link.adminOnly || auth.userRole === 'admin')
})

const handleLogout = () => {
  auth.logout() // Теперь используем метод из стора
  router.push('/login')
}
</script>

<style>
/* НАСТРОЙКИ ФОНА */
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
  /* Используем твой bg.png */
  background-image: url('./assets/bg.png'); 
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-color: #0f172a;
}

/* Затемнение картинки, чтобы интерфейс читался */
body::before {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(15, 23, 42, 0.6); 
  z-index: 0;
}

#app {
  position: relative;
  z-index: 1;
}
</style>