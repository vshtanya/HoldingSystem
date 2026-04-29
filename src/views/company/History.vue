<template>
  <div class="min-h-screen bg-slate-50">
    <!-- Заголовок -->
    <div class="bg-emerald-950 py-16">
      <div class="max-w-5xl mx-auto px-8">
        <h1 class="text-5xl font-bold text-white">История компании</h1>
        <p class="mt-4 text-2xl text-emerald-200 max-w-2xl">
          Как VSHold стала одним из ведущих холдингов России
        </p>
      </div>
    </div>

    <!-- Таймлайн с твоей иконкой -->
    <div class="max-w-5xl mx-auto px-8 py-16">
      <div class="relative border-l-4 border-emerald-600 pl-12 ml-8">
        
        <!-- 2015 -->
        <div class="mb-16 relative">
          <img :src="infoIcon" class="absolute -left-[29px] w-12 h-12 bg-white p-2 rounded-2xl shadow-lg" alt="">
          <div class="bg-white rounded-3xl p-8 shadow-xl">
            <div class="flex items-baseline gap-4">
              <span class="text-5xl font-bold text-emerald-600">2015</span>
              <p class="text-xl text-slate-600">Основание холдинга в Минске. Начало деятельности с транспортной логистики.</p>
            </div>
          </div>
        </div>

        <!-- 2018 -->
        <div class="mb-16 relative">
          <img :src="infoIcon" class="absolute -left-[29px] w-12 h-12 bg-white p-2 rounded-2xl shadow-lg" alt="">
          <div class="bg-white rounded-3xl p-8 shadow-xl">
            <div class="flex items-baseline gap-4">
              <span class="text-5xl font-bold text-emerald-600">2018</span>
              <p class="text-xl text-slate-600">Приобретение компаний в сфере энергетики и строительства.</p>
            </div>
          </div>
        </div>

        <!-- 2022 -->
        <div class="mb-16 relative">
          <img :src="infoIcon" class="absolute -left-[29px] w-12 h-12 bg-white p-2 rounded-2xl shadow-lg" alt="">
          <div class="bg-white rounded-3xl p-8 shadow-xl">
            <div class="flex items-baseline gap-4">
              <span class="text-5xl font-bold text-emerald-600">2022</span>
              <p class="text-xl text-slate-600">Запуск направления VSDigital — цифровые технологии и IT-решения.</p>
            </div>
          </div>
        </div>

        <!-- 2025 -->
        <div class="relative">
          <img :src="infoIcon" class="absolute -left-[29px] w-12 h-12 bg-white p-2 rounded-2xl shadow-lg" alt="">
          <div class="bg-white rounded-3xl p-8 shadow-xl">
            <div class="flex items-baseline gap-4">
              <span class="text-5xl font-bold text-emerald-600">2025</span>
              <p class="text-xl text-slate-600">Сегодня в составе холдинга 8 компаний и более 1340 сотрудников.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import infoIcon from '../../assets/info.png'   // ← путь к твоей иконке
</script>