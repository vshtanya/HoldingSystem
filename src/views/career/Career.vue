<template>
  <div class="max-w-6xl mx-auto px-8 py-16">
    <div class="text-center mb-16">
      <h1 class="text-6xl font-bold text-emerald-950">Карьера в VSHold</h1>
      <p class="mt-6 text-2xl text-slate-600 max-w-2xl mx-auto">
        Присоединяйся к команде, которая строит будущее вместе
      </p>
    </div>

    <!-- Почему стоит работать у нас -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
      <div class="bg-white rounded-3xl p-8 text-center">
        <div class="text-5xl mb-4"></div>
        <h3 class="text-2xl font-semibold">Быстрый карьерный рост</h3>
        <p class="mt-4 text-slate-600">Крупный холдинг даёт множество возможностей для развития</p>
      </div>
      <div class="bg-white rounded-3xl p-8 text-center">
        <div class="text-5xl mb-4"></div>
        <h3 class="text-2xl font-semibold">Сильная команда</h3>
        <p class="mt-4 text-slate-600">Работай с лучшими специалистами отрасли</p>
      </div>
      <div class="bg-white rounded-3xl p-8 text-center">
        <div class="text-5xl mb-4"></div>
        <h3 class="text-2xl font-semibold">Конкурентная зарплата</h3>
        <p class="mt-4 text-slate-600">Достойная оплата + бонусы и социальный пакет</p>
      </div>
    </div>

    <!-- Вакансии -->
    <h2 class="text-4xl font-semibold mb-8">Открытые вакансии</h2>
    <div class="space-y-6">
      <div class="bg-white rounded-3xl p-8 flex justify-between items-center hover:shadow-lg transition-shadow">
        <div>
          <h3 class="text-xl font-medium">Руководитель отдела логистики</h3>
          <p class="text-slate-500">Москва • Полная занятость</p>
        </div>
        <button class="px-6 py-3 bg-emerald-600 text-white rounded-2xl hover:bg-emerald-700">Откликнуться</button>
      </div>

      <div class="bg-white rounded-3xl p-8 flex justify-between items-center hover:shadow-lg transition-shadow">
        <div>
          <h3 class="text-xl font-medium">Финансовый аналитик</h3>
          <p class="text-slate-500">Москва • Полная занятость</p>
        </div>
        <button class="px-6 py-3 bg-emerald-600 text-white rounded-2xl hover:bg-emerald-700">Откликнуться</button>
      </div>

      <div class="bg-white rounded-3xl p-8 flex justify-between items-center hover:shadow-lg transition-shadow">
        <div>
          <h3 class="text-xl font-medium">IT-специалист (VSDigital)</h3>
          <p class="text-slate-500">Москва • Полная занятость</p>
        </div>
        <button class="px-6 py-3 bg-emerald-600 text-white rounded-2xl hover:bg-emerald-700">Откликнуться</button>
      </div>
    </div>

    <div class="mt-20 text-center">
      <p class="text-slate-500">Не нашли подходящую вакансию?</p>
      <button class="mt-6 px-8 py-4 bg-emerald-600 text-white font-medium rounded-3xl hover:bg-emerald-700 transition-colors">
        Отправить резюме в кадровый резерв
      </button>
    </div>
  </div>
</template>