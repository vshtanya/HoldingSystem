<template>
  <div class="min-h-screen bg-slate-50">
    <!-- Hero -->
    <div class="bg-emerald-950 py-16">
      <div class="max-w-5xl mx-auto px-8 text-center">
        <h1 class="text-5xl font-bold text-white">Руководство холдинга</h1>
        <p class="mt-4 text-2xl text-emerald-200 max-w-2xl mx-auto">
          Команда опытных лидеров, которая управляет VSHold и 8 предприятиями
        </p>
      </div>
    </div>

    <!-- Карточки руководителей -->
    <div class="max-w-6xl mx-auto px-8 py-15  ">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
        
        <!-- Руководитель 1 -->
        <div class="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all group">
          <img :src="ruc1" class="w-full h-90 object-cover group-hover:scale-105 transition-transform" alt="">
          <div class="p-8">
            <h3 class="text-2xl font-semibold text-emerald-950">Ваня Симонович</h3>
            <p class="text-emerald-600 font-medium">Генеральный директор и основатель</p>
            <p class="mt-4 text-slate-600 leading-relaxed">
              Более 15 лет опыта в логистике и управлении холдингами. Основатель VSHold.
            </p>
          </div>
        </div>

        <!-- Руководитель 2 -->
        <div class="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all group">
          <img :src="ruc2" class="w-full h-90 object-cover group-hover:scale-105 transition-transform" alt="">
          <div class="p-8">
            <h3 class="text-2xl font-semibold text-emerald-950">Матвей Шалайко</h3>
            <p class="text-emerald-600 font-medium">Финансовый директор</p>
            <p class="mt-4 text-slate-600 leading-relaxed">
              Эксперт в корпоративных финансах и стратегическом планировании. Руководит финансовой устойчивостью холдинга.
            </p>
          </div>
        </div>

        <!-- Руководитель 3 -->
        <div class="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all group">
          <img :src="ruc3" class="w-full h-90 object-cover group-hover:scale-105 transition-transform" alt="">
          <div class="p-8">
            <h3 class="text-2xl font-semibold text-emerald-950">Андрей Пшенко</h3>
            <p class="text-emerald-600 font-medium">Операционный директор</p>
            <p class="mt-4 text-slate-600 leading-relaxed">
              Отвечает за работу всех 8 предприятий и логистику по всей Беларуси.
            </p>
          </div>
        </div>

        <!-- Руководитель 4 -->
        <div class="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all group">
          <img :src="ruc4" class="w-full h-90 object-cover group-hover:scale-105 transition-transform" alt="">
          <div class="p-8">
            <h3 class="text-2xl font-semibold text-emerald-950">Глеб Пашкевич</h3>
            <p class="text-emerald-600 font-medium">Директор по развитию VSDigital</p>
            <p class="mt-4 text-slate-600 leading-relaxed">
              Руководит цифровой трансформацией холдинга и внедрением IT-решений.
            </p>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ruc1 from '../../assets/ruc1.png'
import ruc2 from '../../assets/ruc2.png'
import ruc3 from '../../assets/ruc3.png'
import ruc4 from '../../assets/ruc4.png'
</script>