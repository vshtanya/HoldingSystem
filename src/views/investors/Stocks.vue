<template>
  <div class="min-h-screen bg-slate-50">
    <!-- Hero -->
    <div class="bg-emerald-950 py-24 text-white">
      <div class="max-w-5xl mx-auto px-8 text-center">
        <h1 class="text-6xl font-bold">Акции и дивиденды</h1>
        <p class="mt-6 text-3xl text-emerald-200">Инвестируйте в стабильное развитие холдинга VSHold</p>
      </div>
    </div>

    <!-- Текущая информация -->
    <div class="max-w-6xl mx-auto px-8 py-20">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <!-- Левая часть -->
        <div class="lg:col-span-7">
          <h2 class="text-4xl font-semibold text-emerald-950 mb-8">Дивидендная политика</h2>
          <div class="prose text-lg text-slate-600">
            <p>Холдинг придерживается консервативной, но стабильной дивидендной политики. Не менее 40% чистой прибыли направляется на выплату дивидендов акционерам.</p>
            <p class="mt-6">Выплаты производятся два раза в год: по итогам полугодия и по итогам года.</p>
          </div>

          <div class="mt-12 bg-white rounded-3xl p-10 shadow">
            <div class="flex justify-between items-end border-b pb-6">
              <div>
                <div class="text-emerald-600 text-sm">Дивиденды за 2025 год</div>
                <div class="text-5xl font-bold text-emerald-950">12,4 BYN</div>
                <div class="text-slate-500">на акцию</div>
              </div>
              <div class="text-right">
                <div class="text-emerald-600 text-sm">Дата выплаты</div>
                <div class="text-2xl font-semibold">15 мая 2026</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Правая часть -->
        <div class="lg:col-span-5">
          <div class="bg-white rounded-3xl p-10 shadow-xl">
            <h3 class="text-emerald-700 font-medium">Текущая стоимость акции</h3>
            <div class="text-7xl font-bold text-emerald-950 mt-4">248,70 BYN</div>
            <div class="text-emerald-600 mt-2">+2,3% за неделю</div>
            
            <div class="mt-12 pt-8 border-t text-sm text-slate-500">
              Последнее обновление: 29 апреля 2026<br>
              Количество акций в обращении: 1 240 000
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Призыв к действию -->
    <div class="bg-emerald-950 py-20 text-white text-center">
      <div class="max-w-2xl mx-auto px-8">
        <h2 class="text-5xl font-semibold">Стать акционером VSHold</h2>
        <p class="mt-6 text-xl text-emerald-200">Получите доступ к полной финансовой информации и инвестиционным материалам</p>
        <button class="mt-10 px-12 py-5 bg-white text-emerald-950 font-semibold text-xl rounded-2xl hover:bg-emerald-100 transition-all">
          Запросить информацию для инвесторов
        </button>
      </div>
    </div>
  </div>
</template>