<template>
  <div class="min-h-screen bg-slate-50">
    <!-- Hero -->
    <div class="relative h-[70vh] bg-emerald-950 flex items-center overflow-hidden">
      <img 
        :src="ruc5" 
        class="absolute inset-0 w-full h-full object-cover"
        alt="Корпоративное управление VSHold"
      >
      <div class="absolute inset-0 bg-gradient-to-r from-emerald-950/85 via-emerald-950/70 to-transparent"></div>
      
      <div class="max-w-5xl mx-auto px-8 relative z-10 text-white">
        <div class="max-w-xl">
          <h1 class="text-6xl font-bold leading-none">Корпоративное управление</h1>
          <p class="mt-6 text-3xl text-emerald-100">Прозрачность, ответственность и устойчивое развитие</p>
          <p class="mt-8 text-xl text-emerald-200">
            Мы строим эффективную систему управления, которая обеспечивает долгосрочный успех холдинга и защиту интересов всех стейкхолдеров.
          </p>
        </div>
      </div>
    </div>

    <!-- Основное содержание -->
    <div class="max-w-5xl mx-auto px-8 py-20">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        <!-- Левая колонка - принципы -->
        <div class="lg:col-span-7 space-y-12">
          <div>
            <h2 class="text-3xl font-semibold text-emerald-950 mb-8">Принципы корпоративного управления</h2>
            
            <div class="space-y-10">
              <div class="flex gap-6">
                <img :src="infoIcon" class="w-12 h-12 flex-shrink-0" alt="">
                <div>
                  <h3 class="font-semibold text-xl text-emerald-950">Прозрачность</h3>
                  <p class="text-slate-600 mt-1">Открытая отчётность и доступная информация для акционеров и партнёров</p>
                </div>
              </div>

              <div class="flex gap-6">
                <img :src="infoIcon" class="w-12 h-12 flex-shrink-0" alt="">
                <div>
                  <h3 class="font-semibold text-xl text-emerald-950">Ответственность</h3>
                  <p class="text-slate-600 mt-1">Чёткое разделение полномочий между советом директоров и исполнительным органом</p>
                </div>
              </div>

              <div class="flex gap-6">
                <img :src="infoIcon" class="w-12 h-12 flex-shrink-0" alt="">
                <div>
                  <h3 class="font-semibold text-xl text-emerald-950">Устойчивость</h3>
                  <p class="text-slate-600 mt-1">Интеграция ESG-принципов в стратегию развития холдинга</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Правая колонка -->
        <div class="lg:col-span-5">
          <div class="bg-white rounded-3xl shadow-2xl p-8 sticky top-8">
            <h3 class="text-emerald-700 font-medium mb-4">Совет директоров</h3>
            <p class="text-slate-600 leading-relaxed">
              Высший орган управления холдинга. Обеспечивает стратегическое руководство и контроль за деятельностью исполнительного руководства.
            </p>
            <div class="mt-10 pt-8 border-t text-sm text-slate-500">
              Состав совета обновляется ежегодно в соответствии с лучшими практиками корпоративного управления Республики Беларусь.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ruc5 from '../../assets/ruc5.png'
import infoIcon from '../../assets/info.png'
</script>