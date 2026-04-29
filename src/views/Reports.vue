<template>
  <div class="max-w-7xl mx-auto">
    <h1 class="text-4xl font-bold text-slate-800 mb-2">Отчетность холдинга</h1>
    <p class="text-slate-500 mb-8">Финансовые и операционные показатели VSHold</p>

    <div class="bg-white rounded-3xl shadow-sm p-8">
      <h2 class="text-2xl font-semibold mb-6">Ключевые показатели за 2025 год</h2>
      
      <div class="overflow-x-auto">
        <table class="w-full">
          <thead>
            <tr class="border-b">
              <th class="text-left py-4 font-medium text-slate-500">Компания</th>
              <th class="text-right py-4 font-medium text-slate-500">Выручка</th>
              <th class="text-right py-4 font-medium text-slate-500">Прибыль</th>
              <th class="text-right py-4 font-medium text-slate-500">Рост %</th>
            </tr>
          </thead>
          <tbody class="divide-y">
            <tr v-for="report in reports" :key="report.id" class="hover:bg-slate-50">
              <td class="py-5 font-medium">{{ report.company }}</td>
              <td class="text-right py-5 font-semibold">{{ report.revenue }}</td>
              <td class="text-right py-5 text-emerald-600 font-semibold">{{ report.profit }}</td>
              <td class="text-right py-5 text-emerald-500">{{ report.growth }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const reports = [
  { id: 1, company: 'VSTrans', revenue: '1,84 млрд ₽', profit: '412 млн ₽', growth: '+18%' },
  { id: 2, company: 'VSEnergy', revenue: '1,32 млрд ₽', profit: '289 млн ₽', growth: '+12%' },
  { id: 3, company: 'VSDigital', revenue: '680 млн ₽', profit: '214 млн ₽', growth: '+31%' },
  { id: 4, company: 'VSBuild', revenue: '940 млн ₽', profit: '167 млн ₽', growth: '+9%' },
]
</script>