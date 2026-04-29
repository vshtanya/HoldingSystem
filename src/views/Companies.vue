<template>
  <div class="max-w-7xl mx-auto">
    <div class="flex justify-between items-end mb-8">
      <div>
        <h1 class="text-4xl font-bold text-slate-800">Дочерние компании</h1>
        <p class="text-slate-500">8 компаний в составе холдинга VSHold</p>
      </div>
      <button class="px-6 py-3 bg-blue-600 text-white rounded-2xl hover:bg-blue-700 transition-colors flex items-center gap-2">
        <span class="text-xl">＋</span>
        <span>Добавить компанию</span>
      </button>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="company in companies" :key="company.id" class="bg-white rounded-3xl shadow-sm p-6 hover:shadow-md transition-shadow">
        <div class="flex items-center justify-between mb-6">
          <div class="text-4xl">{{ company.icon }}</div>
          <span :class="company.statusColor" class="px-4 py-1 text-xs font-medium rounded-3xl">{{ company.status }}</span>
        </div>
        <h3 class="text-2xl font-semibold">{{ company.name }}</h3>
        <p class="text-slate-500 mt-1">{{ company.description }}</p>
        
        <div class="mt-8 grid grid-cols-3 gap-4 text-center text-sm">
          <div>
            <p class="text-slate-400">Выручка</p>
            <p class="font-semibold">{{ company.revenue }}</p>
          </div>
          <div>
            <p class="text-slate-400">Сотрудников</p>
            <p class="font-semibold">{{ company.employees }}</p>
          </div>
          <div>
            <p class="text-slate-400">Проектов</p>
            <p class="font-semibold">{{ company.projects }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const companies = [
  { id: 1, name: 'VSTrans', icon: '🚛', description: 'Логистика и транспорт', status: 'Активна', statusColor: 'bg-emerald-100 text-emerald-700', revenue: '1,84 млрд ₽', employees: '428', projects: '12' },
  { id: 2, name: 'VSEnergy', icon: '⚡', description: 'Энергетика и ресурсы', status: 'Активна', statusColor: 'bg-emerald-100 text-emerald-700', revenue: '1,32 млрд ₽', employees: '315', projects: '8' },
  { id: 3, name: 'VSDigital', icon: '💻', description: 'IT и цифровые решения', status: 'Активна', statusColor: 'bg-emerald-100 text-emerald-700', revenue: '680 млн ₽', employees: '184', projects: '21' },
  { id: 4, name: 'VSBuild', icon: '🏗️', description: 'Строительство и девелопмент', status: 'Активна', statusColor: 'bg-emerald-100 text-emerald-700', revenue: '940 млн ₽', employees: '267', projects: '7' },
]
</script>