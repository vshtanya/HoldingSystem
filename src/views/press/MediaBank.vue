<template>
  <div class="min-h-screen bg-slate-50">
    <!-- Hero -->
    <div class="bg-emerald-950 py-24 text-white">
      <div class="max-w-5xl mx-auto px-8 text-center">
        <h1 class="text-6xl font-bold">Медиабанк</h1>
        <p class="mt-6 text-3xl text-emerald-200">Фото, видео, логотипы и материалы для СМИ и партнёров</p>
      </div>
    </div>

    <!-- Материалы -->
    <div class="max-w-6xl mx-auto px-8 py-20">
      <h2 class="text-4xl font-semibold text-center mb-16 text-emerald-950">Доступные материалы</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all">
          <h3 class="text-2xl font-semibold text-emerald-950">Логотипы и брендбук</h3>
          <p class="mt-4 text-slate-600">Официальные логотипы VSHold в разных форматах (PNG, SVG, EPS)</p>
          <button class="mt-8 text-emerald-600 font-medium flex items-center gap-2 hover:text-emerald-700">
            Скачать брендбук <span class="text-xl">↓</span>
          </button>
        </div>

        <div class="bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all">
          <h3 class="text-2xl font-semibold text-emerald-950">Фото и видео</h3>
          <p class="mt-4 text-slate-600">Профессиональные фотографии предприятий, руководства и мероприятий холдинга</p>
          <button class="mt-8 text-emerald-600 font-medium flex items-center gap-2 hover:text-emerald-700">
            Перейти в галерею <span class="text-xl">→</span>
          </button>
        </div>
      </div>
    </div>

    <!-- Призыв -->
    <div class="bg-emerald-950 py-20 text-white text-center">
      <div class="max-w-2xl mx-auto px-8">
        <h2 class="text-5xl font-semibold">Нужны дополнительные материалы?</h2>
        <p class="mt-6 text-xl text-emerald-200">Напишите нам, и пресс-служба подготовит нужный контент</p>
        <button class="mt-10 px-12 py-5 bg-white text-emerald-950 font-semibold text-xl rounded-2xl hover:bg-emerald-100 transition-all">
          Запросить материалы
        </button>
      </div>
    </div>
  </div>
</template>