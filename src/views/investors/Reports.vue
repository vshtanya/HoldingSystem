<template>
  <div class="min-h-screen bg-slate-50">
    <!-- Hero -->
    <div class="bg-emerald-950 py-24 text-white">
      <div class="max-w-5xl mx-auto px-8 text-center">
        <h1 class="text-6xl font-bold">Отчёты и результаты</h1>
        <p class="mt-6 text-3xl text-emerald-200">Финансовые и операционные показатели холдинга VSHold</p>
      </div>
    </div>

    <!-- Отчёты -->
    <div class="max-w-6xl mx-auto px-8 py-20">
      <h2 class="text-4xl font-semibold text-center mb-16 text-emerald-950">Последние отчёты</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all">
          <div class="text-emerald-600 font-medium mb-2">Годовой отчёт 2025</div>
          <h3 class="text-2xl font-semibold">Консолидированные финансовые результаты</h3>
          <p class="mt-6 text-slate-600">Выручка холдинга выросла на 24%. Чистая прибыль — 187 млн BYN.</p>
          <button class="mt-8 text-emerald-600 font-medium flex items-center gap-2 hover:text-emerald-700">
            Скачать PDF <span class="text-xl">↓</span>
          </button>
        </div>
        <div class="bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all">
          <div class="text-emerald-600 font-medium mb-2">I квартал 2026</div>
          <h3 class="text-2xl font-semibold">Операционные результаты</h3>
          <p class="mt-6 text-slate-600">Объём перевозок увеличился на 18%. Открыто 3 новых направления.</p>
          <button class="mt-8 text-emerald-600 font-medium flex items-center gap-2 hover:text-emerald-700">
            Скачать PDF <span class="text-xl">↓</span>
          </button>
        </div>
      </div>
    </div>

    <!-- Ключевые показатели -->
    <div class="bg-white py-20">
      <div class="max-w-5xl mx-auto px-8">
        <h2 class="text-4xl font-semibold text-center mb-12 text-emerald-950">Ключевые показатели</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-slate-50 rounded-3xl p-10 text-center">
            <div class="text-5xl font-bold text-emerald-600">2,8 млрд</div>
            <div class="mt-4 text-slate-600">Выручка за 2025 год</div>
          </div>
          <div class="bg-slate-50 rounded-3xl p-10 text-center">
            <div class="text-5xl font-bold text-emerald-600">187 млн</div>
            <div class="mt-4 text-slate-600">Чистая прибыль</div>
          </div>
          <div class="bg-slate-50 rounded-3xl p-10 text-center">
            <div class="text-5xl font-bold text-emerald-600">1340+</div>
            <div class="mt-4 text-slate-600">Сотрудников</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Призыв к действию -->
    <div class="bg-emerald-950 py-20 text-white text-center">
      <div class="max-w-2xl mx-auto px-8">
        <h2 class="text-5xl font-semibold">Хотите полный отчёт?</h2>
        <p class="mt-6 text-xl text-emerald-200">Оставьте заявку, и мы отправим вам актуальные материалы</p>
        <button class="mt-10 px-12 py-5 bg-white text-emerald-950 font-semibold text-xl rounded-2xl hover:bg-emerald-100 transition-all">
          Запросить отчёт
        </button>
      </div>
    </div>
  </div>
</template>