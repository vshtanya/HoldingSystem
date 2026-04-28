<template>
  <div class="p-8">
    <div class="flex justify-between items-end mb-8">
      <div>
        <h1 class="text-3xl font-bold text-slate-900">Дочерние компании</h1>
        <p class="text-slate-500 mt-1">Управление структурой холдинга и контактными данными</p>
      </div>
      <button class="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl font-semibold shadow-sm transition-all">
        + Добавить компанию
      </button>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="company in companies" :key="company.id" class="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
        <div class="flex justify-between items-start mb-4">
          <div class="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center text-xl">🏢</div>
          <span 
            class="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase"
            :class="company.active ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-600'"
          >
            {{ company.active ? 'Активна' : 'Приостановлена' }}
          </span>
        </div>
        
        <h3 class="text-xl font-bold text-slate-800 mb-1">{{ company.name }}</h3>
        <p class="text-sm text-slate-500 mb-4">{{ company.industry }}</p>
        
        <div class="space-y-2 border-t border-slate-50 pt-4 text-sm text-slate-600">
          <div class="flex justify-between">
            <span>Директор:</span>
            <span class="font-medium text-slate-800">{{ company.director }}</span>
          </div>
          <div class="flex justify-between">
            <span>Локация:</span>
            <span class="font-medium text-slate-800">{{ company.location }}</span>
          </div>
        </div>

        <button class="w-full mt-6 py-2 bg-slate-50 hover:bg-slate-100 text-slate-700 rounded-lg font-medium transition-colors">
          Подробнее
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const companies = [
  { id: 1, name: 'ООО "Вектор"', industry: 'Логистика и транспорт', director: 'Иванов А.М.', location: 'Москва', active: true },
  { id: 2, name: 'АО "Энерго"', industry: 'Добыча ресурсов', director: 'Петров С.В.', location: 'Красноярск', active: true },
  { id: 3, name: 'ГК "Айти-Сервис"', industry: 'Разработка ПО', director: 'Симонович В.А.', location: 'Санкт-Петербург', active: true },
  { id: 4, name: 'Логистик Плюс', industry: 'Складские услуги', director: 'Федоров Д.К.', location: 'Екатеринбург', active: false },
]
</script>