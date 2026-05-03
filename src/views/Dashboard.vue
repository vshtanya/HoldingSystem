<template>
  <div>
    <!-- HERO -->
    <div class="relative bg-emerald-950 min-h-[640px] flex items-center overflow-hidden">
      <div class="absolute inset-0 bg-[radial-gradient(at_center,#052e22_0%,#011b14_70%)]"></div>
      <div class="absolute inset-0 bg-[repeating-linear-gradient(45deg,#ffffff05_0px,#ffffff05_40px,transparent_40px,transparent_80px)]"></div>

      <div class="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <div class="flex justify-center lg:justify-end">
          <img :src="logo" class="w-[380px] drop-shadow-2xl" alt="VSHold">
        </div>
        <div class="text-white">
          <h1 class="text-7xl md:text-8xl font-bold tracking-[-4px] leading-none">СИЛА<br>В ЕДИНСТВЕ</h1>
          <p class="mt-6 text-3xl text-emerald-100">Холдинговая компания VSHold</p>
          <p class="mt-4 max-w-md text-xl text-emerald-200">Объединяем 8 предприятий для устойчивого развития бизнеса</p>
          <button class="mt-10 px-10 py-5 bg-white text-emerald-950 font-semibold text-xl rounded-2xl hover:bg-emerald-100 transition-all flex items-center gap-3">
            Узнать больше о холдинге <span class="text-2xl">→</span>
          </button>
        </div>
      </div>
      <div class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </div>

    <!-- КАРТОЧКИ ПАРТНЁРАМ / ИНВЕСТОРАМ -->
    <div class="max-w-7xl mx-auto px-8 py-16 bg-white">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="bg-slate-50 hover:bg-white border border-slate-100 rounded-3xl p-10 transition-all group">
          <h3 class="text-4xl font-semibold text-emerald-950">Партнёрам</h3>
          <p class="mt-4 text-lg text-slate-600">Как стать поставщиком или партнёром холдинга VSHold и получить доступ к крупным проектам</p>
          <div class="mt-8 flex justify-end">
            <div class="w-12 h-12 bg-emerald-600 text-white rounded-2xl flex items-center justify-center text-3xl group-hover:rotate-45 transition-transform">→</div>
          </div>
        </div>
        <div class="bg-slate-50 hover:bg-white border border-slate-100 rounded-3xl p-10 transition-all group">
          <h3 class="text-4xl font-semibold text-emerald-950">Инвесторам</h3>
          <p class="mt-4 text-lg text-slate-600">Финансовые показатели, стратегия развития и информация для инвесторов и акционеров</p>
          <div class="mt-8 flex justify-end">
            <div class="w-12 h-12 bg-emerald-600 text-white rounded-2xl flex items-center justify-center text-3xl group-hover:rotate-45 transition-transform">→</div>
          </div>
        </div>
      </div>
    </div>
    <!-- СЕКЦИЯ "СТРАТЕГИЯ УСТОЙЧИВОГО РАЗВИТИЯ" - ЗЕЛЁНЫЙ ФОН -->
<div class="relative h-screen bg-cover bg-center flex items-center" 
     style="background-image: url('https://images.unsplash.com/photo-1542601906990-b4d3a1f0b1e8?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb')">
  
  <!-- Тёмный overlay для читаемости -->
  <div class="absolute inset-0 bg-gradient-to-r from-emerald-950/80 via-emerald-900/60 to-transparent"></div>
  
  <div class="max-w-5xl mx-auto px-8 relative z-10 text-white">
    <div class="max-w-lg">
      <h2 class="text-6xl font-bold leading-none">Стратегия устойчивого развития</h2>
      <p class="mt-6 text-2xl text-emerald-100">
        Мы заботимся о будущем ваших компаний и успехе людей
      </p>
      <button class="mt-12 px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-2xl text-xl transition-all">
        Перейти на сайт
      </button>
    </div>
  </div>
</div>
    <div class="max-w-7xl mx-auto px-8 py-20 bg-white">
      <h2 class="text-5xl font-semibold text-emerald-950 mb-12">Пресс-центр</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <span class="px-4 py-1 bg-emerald-100 text-emerald-700 text-sm font-medium rounded-3xl">РЕЙТИНГИ</span>
          <p class="mt-6 text-xl font-medium leading-tight">VSHold укрепила лидерство на рынке логистики и транспорта</p>
          <p class="text-slate-400 mt-8">23 апреля 2026</p>
        </div>
        <div>
          <span class="px-4 py-1 bg-emerald-100 text-emerald-700 text-sm font-medium rounded-3xl">РЫНОК КАПИТАЛА</span>
          <p class="mt-6 text-xl font-medium leading-tight">VSHold объявляет о размещении корпоративных облигаций на сумму 15 млрд руб.</p>
          <p class="text-slate-400 mt-8">22 апреля 2026</p>
        </div>
        <div>
          <span class="px-4 py-1 bg-emerald-100 text-emerald-700 text-sm font-medium rounded-3xl">РЕЙТИНГИ</span>
          <p class="mt-6 text-xl font-medium leading-tight">VSHold стала крупнейшим холдингом по площади производственных объектов</p>
          <p class="text-slate-400 mt-8">22 апреля 2026</p>
        </div>
      </div>
      <div class="mt-12 flex items-center gap-6">
        <button class="px-8 py-3 border border-emerald-600 text-emerald-600 font-medium rounded-3xl hover:bg-emerald-50 transition-colors">Пресс-центр</button>
        <div class="flex-1"></div>
        <button class="w-12 h-12 border border-slate-300 rounded-2xl flex items-center justify-center text-2xl text-slate-400 hover:text-slate-600">←</button>
        <button class="w-12 h-12 border border-slate-300 rounded-2xl flex items-center justify-center text-2xl text-slate-400 hover:text-slate-600">→</button>
      </div>
    </div>

    <!-- ОБРАТНАЯ СВЯЗЬ -->
    <div class="bg-slate-50 py-20">
      <div class="max-w-7xl mx-auto px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 class="text-5xl font-semibold text-emerald-950">Обратная связь</h2>
            <p class="mt-6 text-lg text-slate-600">Если у вас возникли вопросы, заполните форму, выбрав подходящую роль, и мы свяжемся с вами</p>
            
            <div class="mt-12">
              <label class="text-emerald-700 font-medium">Выберите роль</label>
              <div class="mt-3 relative">
                <select class="w-full bg-white border border-slate-300 rounded-3xl px-6 py-5 text-lg appearance-none focus:outline-none focus:border-emerald-500">
                  <option>Клиент / Партнёр</option>
                  <option>Инвестор</option>
                  <option>Сотрудник</option>
                  <option>Пресса / СМИ</option>
                  <option>Другое</option>
                </select>
              </div>
            </div>
          </div>

          <!-- Контакты -->
          <div class="bg-white rounded-3xl p-10">
            <img :src="logo" class="h-10 mb-8" alt="VSHold">
            <div class="space-y-8">
              <div>
                <p class="text-emerald-700 font-medium">Корпоративный центр</p>
                <p class="text-2xl font-semibold mt-2">+375 (33) 777-77-77</p>
                <p class="text-2xl font-semibold">+375 (33) 999-99-99</p>
              </div>
              <div>
                <p class="text-emerald-700 font-medium">Адрес</p>
                <p class="text-lg mt-2">225210, Беларусь, г. Берёза,<br>улица Зелёная, 14.</p>
              </div>
              <div class="flex gap-6 text-emerald-600 font-medium">
                <a href="#" class="hover:underline">ВКонтакте</a>
                <a href="#" class="hover:underline">Telegram</a>
                <a href="#" class="hover:underline">Инстаграм</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import logo from '../assets/vshold-logo.png'
</script>