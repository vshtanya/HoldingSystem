<template>
  <div class="min-h-screen bg-slate-50">
    <!-- Hero с картой -->
    <div class="relative h-[70vh] bg-emerald-950 flex items-center overflow-hidden">
      <img 
        :src="mapImage" 
        class="absolute inset-0 w-full h-full object-cover"
        alt="География присутствия VSHold в Беларуси"
      >
      <div class="absolute inset-0 bg-gradient-to-r from-emerald-950/90 via-emerald-950/70 to-transparent"></div>
      
      <div class="max-w-5xl mx-auto px-8 relative z-10 text-white">
        <div class="max-w-2xl">
          <h1 class="text-6xl font-bold leading-none">География присутствия</h1>
          <p class="mt-6 text-3xl text-emerald-100">Мы работаем в каждом регионе страны, обеспечивая устойчивую логистику, энергетику и цифровые решения.</p>
          <p class="mt-8 text-xl max-w-md text-emerald-200">
          
          </p>
        </div>
      </div>

      <!-- Статистика -->
      <div class="absolute bottom-12 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md rounded-3xl px-12 py-3 flex gap-16 text-white z-20 shadow-2xl">
        <div class="text-center">
          <div class="text-5xl font-bold">8</div>
          <div class="text-sm uppercase tracking-widest">Предприятий</div>
        </div>
        <div class="text-center">
          <div class="text-5xl font-bold">1340+</div>
          <div class="text-sm uppercase tracking-widest">Сотрудников</div>
        </div>
        <div class="text-center">
          <div class="text-5xl font-bold">6</div>
          <div class="text-sm uppercase tracking-widest">Областей</div>
        </div>
      </div>
    </div>

    <!-- Список регионов -->
    <div class="max-w-5xl mx-auto px-8 py-20">
      <h2 class="text-4xl font-semibold mb-12 text-center text-emerald-950">Наши регионы</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div class="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all">
          <h3 class="text-2xl font-semibold text-emerald-700">Минск и Минская область</h3>
          <p class="text-slate-600 mt-3">Головной офис, логистический хаб, VSDigital</p>
        </div>
        <div class="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all">
          <h3 class="text-2xl font-semibold text-emerald-700">Брестская область</h3>
          <p class="text-slate-600 mt-3">Западный логистический центр, граница с ЕС</p>
        </div>
        <div class="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all">
          <h3 class="text-2xl font-semibold text-emerald-700">Гомельская область</h3>
          <p class="text-slate-600 mt-3">Юго-восточный филиал, энергетика</p>
        </div>
        <div class="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all">
          <h3 class="text-2xl font-semibold text-emerald-700">Могилёвская область</h3>
          <p class="text-slate-600 mt-3">Производственные мощности</p>
        </div>
        <div class="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all">
          <h3 class="text-2xl font-semibold text-emerald-700">Витебская область</h3>
          <p class="text-slate-600 mt-3">Северный регион, транспортная логистика</p>
        </div>
        <div class="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all">
          <h3 class="text-2xl font-semibold text-emerald-700">Гродненская область</h3>
          <p class="text-slate-600 mt-3">Западный промышленный кластер</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import mapImage from '../../assets/map.png'
</script>