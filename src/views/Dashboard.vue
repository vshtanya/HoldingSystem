<template>
  <div class="p-6 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
    
    <div class="bg-white/40 backdrop-blur-md p-10 rounded-3xl border border-white/20 shadow-xl flex items-center justify-between">
      <div>
        <h1 class="text-4xl font-black text-slate-900 tracking-tight">Holding Control System</h1>
        <p class="text-slate-600 mt-2 text-lg">Панель глобального мониторинга активов холдинга.</p>
      </div>
      <div class="hidden lg:flex gap-4">
         <div class="bg-emerald-500/20 text-emerald-700 px-6 py-3 rounded-2xl font-bold border border-emerald-500/30">
           Статус: Стабильно
         </div>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div v-for="stat in stats" :key="stat.title" 
           class="bg-white/60 backdrop-blur-md p-6 rounded-3xl border border-white/30 shadow-lg hover:-translate-y-1.25 transition-all duration-300">
        <div class="flex items-center justify-between mb-4">
          <div class="w-12 h-12 flex justify-center items-center">
            <img :src="stat.icon" class="w-10 h-10 object-contain" :alt="stat.title" />
          </div>
          <span class="text-green-600 font-bold text-xs bg-green-100 px-2 py-1 rounded-lg">{{ stat.trend }}</span>
        </div>
        <p class="text-slate-500 font-bold uppercase text-[10px] tracking-widest">{{ stat.title }}</p>
        <p class="text-3xl font-black text-slate-900 mt-1">{{ stat.value }}</p>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div class="lg:col-span-2 bg-slate-900/90 backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-2xl text-white">
        <div class="flex justify-between items-center mb-10">
          <h3 class="text-xl font-bold">Финансовая аналитика</h3>
        </div>
        <div class="h-64 flex items-end justify-between gap-3 px-2">
          <div v-for="(h, i) in [40, 85, 50, 95, 60, 75, 45, 80, 65, 90]" :key="i"
               :style="{ height: h + '%' }"
               class="flex-1 bg-linear-to-t from-blue-600/20 to-blue-400 rounded-t-xl hover:to-white transition-all cursor-pointer relative group">
               <div class="absolute -top-10 left-1/2 -translate-x-1/2 bg-white text-black px-2 py-1 rounded text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                 ${{ h }}k
               </div>
          </div>
        </div>
        <div class="flex justify-between mt-6 px-2 text-[10px] text-slate-500 font-bold tracking-[0.2em]">
          <span>ЯНВ</span><span>ФЕВ</span><span>МАР</span><span>АПР</span><span>МАЙ</span><span>ИЮН</span><span>ИЮЛ</span><span>АВГ</span><span>СЕН</span><span>ОКТ</span>
        </div>
      </div>

      <div class="bg-white/80 backdrop-blur-md p-8 rounded-3xl border border-white/40 shadow-xl overflow-y-auto max-h-105">
        <h3 class="text-xl font-bold text-slate-900 mb-6 text-center underline underline-offset-8 decoration-blue-500/30">События</h3>
        <div class="space-y-6">
          <div v-for="event in events" :key="event.id" class="flex gap-4 items-start border-b border-slate-100 pb-4 last:border-0">
            <div :class="event.color" class="w-2 h-2 rounded-full mt-2 shrink-0 animate-pulse"></div>
            <div>
              <p class="text-sm font-bold text-slate-800">{{ event.text }}</p>
              <p class="text-xs text-slate-500 mt-1">{{ event.time }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-white/50 backdrop-blur-md rounded-3xl border border-white/30 shadow-xl overflow-hidden pb-4">
      <div class="p-8 border-b border-white/20 flex justify-between items-center bg-white/30">
        <h3 class="text-xl font-bold text-slate-900">Последние операции</h3>
      </div>
      <div class="overflow-x-auto">
        <table class="w-full text-left border-collapse">
          <thead>
            <tr class="text-[10px] uppercase text-slate-500 tracking-widest bg-white/20">
              <th class="p-6">Компания</th>
              <th class="p-6">Тип</th>
              <th class="p-6 text-right">Сумма</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-white/10">
            <tr v-for="row in transactions" :key="row.id" class="hover:bg-white/40 transition-colors cursor-default">
              <td class="p-6 font-bold text-slate-800 text-sm">{{ row.company }}</td>
              <td class="p-6 text-xs text-slate-500">{{ row.type }}</td>
              <td class="p-6 text-right font-black text-slate-900">
                <span :class="row.amount.startsWith('+') ? 'text-emerald-600' : 'text-slate-900'">
                  {{ row.amount }}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import chartIcon from '../assets/chart.png'
import buildingIcon from '../assets/building.png'
import filesIcon from '../assets/files.png'

const stats = [
  { title: 'Капитализация', value: '$14.8M', icon: chartIcon, trend: '+12%' },
  { title: 'Объекты', value: '42 ед.', icon: buildingIcon, trend: '+2' },
  { title: 'Документы', value: '1,504', icon: filesIcon, trend: '+48' },
  { title: 'Рост активов', value: 'High', icon: chartIcon, trend: '98%' },
]

const events = [
  { id: 1, text: 'Регистрация нового филиала в ОАЭ', time: '14 минут назад', color: 'bg-green-500' },
  { id: 2, text: 'Критический отчет по логистике', time: '1 час назад', color: 'bg-red-500' },
  { id: 3, text: 'Обновление API системы', time: '3 часа назад', color: 'bg-blue-500' },
  { id: 4, text: 'Новый пользователь: Admin_Vanya', time: '5 часов назад', color: 'bg-indigo-500' },
  { id: 5, text: 'Ежемесячный аудит завершен', time: 'Вчера, 18:40', color: 'bg-slate-500' },
]

const transactions = [
  { id: 1, company: 'SkyNet Systems', type: 'Инвестиции', amount: '+$240,000' },
  { id: 2, company: 'Green Logistic', type: 'Налоги', amount: '-$12,400' },
  { id: 3, company: 'Future Food', type: 'Закупка', amount: '-$45,000' },
  { id: 4, company: 'Main Build Co', type: 'Прибыль', amount: '+$108,900' },
]
</script>