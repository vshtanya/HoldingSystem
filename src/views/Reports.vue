<template>
  <div class="p-8">
    <div class="flex justify-between items-end mb-8">
      <div>
        <h1 class="text-3xl font-bold text-slate-900">Финансовая отчетность</h1>
        <p class="text-slate-500 mt-1">Мониторинг входящих данных от дочерних подразделений</p>
      </div>
      <button class="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl font-semibold shadow-sm transition-all active:scale-95">
        Сформировать сводный отчет
      </button>
    </div>

    <div class="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
      <table class="w-full text-left border-collapse">
        <thead>
          <tr class="bg-slate-50 border-b border-slate-200">
            <th class="p-5 text-sm font-semibold text-slate-600">ID</th>
            <th class="p-5 text-sm font-semibold text-slate-600">Компания</th>
            <th class="p-5 text-sm font-semibold text-slate-600">Период</th>
            <th class="p-5 text-sm font-semibold text-slate-600">Выручка</th>
            <th class="p-5 text-sm font-semibold text-slate-600">Чистая прибыль</th>
            <th class="p-5 text-sm font-semibold text-slate-600">Статус</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-slate-100">
          <tr v-for="report in reports" :key="report.id" class="hover:bg-blue-50/30 transition-colors cursor-default">
            <td class="p-5 text-slate-400 text-sm font-mono">#{{ report.id }}</td>
            <td class="p-5 font-bold text-slate-700">{{ report.company }}</td>
            <td class="p-5 text-slate-600">{{ report.period }}</td>
            <td class="p-5 font-medium">{{ report.revenue }} ₽</td>
            <td class="p-5 font-medium text-blue-600">{{ report.profit }} ₽</td>
            <td class="p-5">
              <span 
                class="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider"
                :class="report.status === 'Принят' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'"
              >
                {{ report.status }}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="border-2 border-dashed border-slate-200 rounded-2xl p-8 flex flex-col items-center justify-center text-slate-400">
        <p class="text-sm">График распределения прибыли (в разработке)</p>
      </div>
      <div class="border-2 border-dashed border-slate-200 rounded-2xl p-8 flex flex-col items-center justify-center text-slate-400">
        <p class="text-sm">Экспорт данных в Excel (в разработке)</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const reports = [
  { id: 1042, company: 'ООО "Вектор"', period: 'Март 2026', revenue: '12 500 000', profit: '2 100 000', status: 'Принят' },
  { id: 1043, company: 'АО "Энерго"', period: 'Март 2026', revenue: '45 200 000', profit: '11 400 000', status: 'Принят' },
  { id: 1044, company: 'ГК "Айти-Сервис"', period: 'Март 2026', revenue: '8 100 000', profit: '4 800 000', status: 'На проверке' },
  { id: 1045, company: 'Логистик Плюс', period: 'Февраль 2026', revenue: '19 300 000', profit: '1 200 000', status: 'Принят' },
]
</script>