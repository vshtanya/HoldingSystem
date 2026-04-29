<template>
  <div v-if="$route.name !== 'Login'" class="min-h-screen flex flex-col font-sans bg-white text-slate-900">
    
    <!-- ТОП-ПАНЕЛЬ -->
    <header class="h-16 bg-emerald-950 text-white flex items-center px-8 sticky top-0 z-50 shadow-sm">
      
      <!-- ЛОГОТИП -->
      <div class="flex items-center gap-3 mr-12">
        <img :src="logo" class="h-9 w-auto object-contain" alt="VSHold">
        <span class="text-3xl font-bold tracking-tighter">VSHold</span>
      </div>

      <!-- МЕНЮ -->
      <nav class="flex items-center gap-8 text-sm font-medium flex-1">
        
       <!-- Компания — 4 пункта -->
<div class="relative group">
  <router-link to="/" class="hover:text-emerald-300 transition-colors py-2">Компания</router-link>
  <div class="absolute top-16 left-0 invisible opacity-0 group-hover:visible group-hover:opacity-100 bg-white text-slate-900 shadow-2xl rounded-3xl py-8 px-8 w-[680px] grid grid-cols-2 gap-8 z-50 transition-all duration-200">
    <div class="space-y-3">
      <router-link to="/company/history" class="block py-2.5 hover:text-emerald-600 font-medium">История компании</router-link>
      <router-link to="/company/geography" class="block py-2.5 hover:text-emerald-600 font-medium">География присутствия</router-link>
    </div>
    <div class="space-y-3">
      <router-link to="/company/management" class="block py-2.5 hover:text-emerald-600 font-medium">Руководство холдинга</router-link>
      <router-link to="/company/governance" class="block py-2.5 hover:text-emerald-600 font-medium">Корпоративное управление</router-link>
    </div>
  </div>
</div>

        <!-- Партнёрам -->
        <div class="relative group">
          <router-link to="/companies" class="hover:text-emerald-300 transition-colors py-2">Партнёрам</router-link>
          <div class="absolute top-16 left-0 invisible opacity-0 group-hover:visible group-hover:opacity-100 bg-white text-slate-900 shadow-2xl rounded-3xl py-8 px-8 w-[620px] z-50 transition-all duration-200">
            <div class="grid grid-cols-2 gap-6">
              <router-link to="/partners/suppliers" class="block p-4 hover:bg-slate-50 rounded-2xl">Поставщикам</router-link>
              <router-link to="/partners/services" class="block p-4 hover:bg-slate-50 rounded-2xl">Сервисы для партнёров</router-link>
              <router-link to="/partners/marketing" class="block p-4 hover:bg-slate-50 rounded-2xl">Маркетинговые возможности</router-link>
              <router-link to="/partners/franchise" class="block p-4 hover:bg-slate-50 rounded-2xl">Стать франчайзи</router-link>
            </div>
          </div>
        </div>

        <!-- Акционерам и инвесторам — 3 рабочих пункта -->
<div class="relative group">
  <router-link to="/reports" class="hover:text-emerald-300 transition-colors py-2">Акционерам и инвесторам</router-link>
  <div class="absolute top-16 left-0 invisible opacity-0 group-hover:visible group-hover:opacity-100 bg-white text-slate-900 shadow-2xl rounded-3xl py-8 px-8 w-[520px] z-50 transition-all duration-200">
    <div class="space-y-3">
      <router-link to="/investors/reports" class="block py-2.5 hover:text-emerald-600 font-medium">Отчёты и результаты</router-link>
      <router-link to="/investors/stocks" class="block py-2.5 hover:text-emerald-600 font-medium">Акции и дивиденды</router-link>
      <router-link to="/investors/ratings" class="block py-2.5 hover:text-emerald-600 font-medium">Кредитные рейтинги</router-link>
    </div>
  </div>
</div>


<!-- Пресс-центр -->
<div class="relative group">
  <router-link to="/" class="hover:text-emerald-300 transition-colors py-2">Пресс-центр</router-link>
  <div class="absolute top-16 left-0 invisible opacity-0 group-hover:visible group-hover:opacity-100 bg-white text-slate-900 shadow-2xl rounded-3xl py-8 px-8 w-[520px] z-50 transition-all duration-200">
    <div class="space-y-3">
      <router-link to="/press/releases" class="block py-2.5 hover:text-emerald-600 font-medium">Пресс-релизы</router-link>
      <router-link to="/press/news" class="block py-2.5 hover:text-emerald-600 font-medium">Новости холдинга</router-link>
      <router-link to="/press/mediabank" class="block py-2.5 hover:text-emerald-600 font-medium">Медиабанк</router-link>
      <router-link to="/press/contacts" class="block py-2.5 hover:text-emerald-600 font-medium">Контакты для прессы</router-link>
    </div>
  </div>
</div>

        <router-link to="/" class="hover:text-emerald-300 transition-colors py-2">Пресс-центр</router-link>
        <router-link to="/career" class="hover:text-emerald-300 transition-colors py-2">Карьера</router-link>
      </nav>

      <!-- ПРАВАЯ ЧАСТЬ -->
      <div class="flex items-center gap-6">
        <button class="px-4 py-1.5 text-xs font-medium border border-white/30 rounded-3xl hover:bg-white/10 transition-colors">RU</button>
        <button class="w-9 h-9 flex items-center justify-center hover:bg-white/10 rounded-2xl transition-colors text-xl">🔍</button>
        
        <div class="flex items-center gap-3 border-l border-white/20 pl-6">
          <span class="text-sm text-emerald-100">Добро пожаловать,</span>
          <span class="font-semibold">{{ auth.userName || 'Коллега' }}</span>
          <button @click="handleLogout" class="ml-4 px-5 py-2 text-sm font-medium hover:bg-white/10 rounded-2xl transition-colors">Выйти</button>
        </div>
      </div>
    </header>

    <main class="flex-1 overflow-y-auto">
      <router-view></router-view>
    </main>
  </div>

  <div v-else class="h-screen w-screen bg-white overflow-hidden">
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useAuthStore } from './store/auth'
import logo from './assets/vshold-logo.png'

const auth = useAuthStore()
const router = useRouter()

const handleLogout = () => {
  auth.logout()
  router.push('/login')
}
</script>