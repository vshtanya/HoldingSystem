<template>
  <div class="min-h-screen bg-slate-900 flex items-center justify-center p-6 font-sans">
    <div class="max-w-md w-full bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-800">
      <div class="p-8">
        
        <div class="text-center mb-8">
          <div class="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white text-3xl font-bold mx-auto mb-4 shadow-lg shadow-blue-500/40">H</div>
          <h1 class="text-2xl font-bold text-slate-900">Holding Control</h1>
          <p class="text-slate-500 mt-2 text-sm">Авторизация в системе</p>
        </div>

        <div v-if="step === 0" class="space-y-4">
          <p class="text-center text-slate-600 mb-6 font-medium text-sm italic">Выберите уровень доступа для входа:</p>
          <button 
            @click="selectRole('admin')"
            class="w-full flex items-center justify-between p-5 border-2 border-slate-100 rounded-2xl hover:border-blue-500 hover:bg-blue-50 transition-all group"
          >
            <div class="text-left">
              <p class="font-bold text-slate-900">Администратор</p>
              <p class="text-[10px] text-slate-400 uppercase tracking-widest mt-1">Полный доступ</p>
            </div>
            <span class="text-2xl group-hover:scale-110 transition-transform">📊</span>
          </button>

          <button 
            @click="selectRole('manager')"
            class="w-full flex items-center justify-between p-5 border-2 border-slate-100 rounded-2xl hover:border-blue-500 hover:bg-blue-50 transition-all group"
          >
            <div class="text-left">
              <p class="font-bold text-slate-900">Менеджер</p>
              <p class="text-[10px] text-slate-400 uppercase tracking-widest mt-1">Работа с отчетами</p>
            </div>
            <span class="text-2xl group-hover:scale-110 transition-transform">📁</span>
          </button>
        </div>

        <div v-if="step === 1" class="space-y-4">
          <div class="flex items-center gap-2 mb-4 text-blue-600">
            <button @click="step = 0" class="text-xs font-bold hover:underline underline-offset-4 uppercase tracking-tighter">← Сменить роль</button>
            <span class="text-slate-200">|</span>
            <span class="text-[10px] font-black uppercase tracking-widest text-slate-400">Роль: {{ selectedRole }}</span>
          </div>

          <div class="relative">
            <input 
              v-model="phone" 
              type="tel" 
              placeholder="+375 (__) ___-__-__"
              :class="[
                'w-full px-5 py-4 bg-slate-50 border-2 rounded-2xl focus:outline-none transition-all text-lg font-medium',
                phone.length > 4 && !isPhoneValid 
                  ? 'border-red-400 text-red-500 shadow-sm shadow-red-100' 
                  : 'border-slate-100 focus:border-blue-500 text-slate-900'
              ]"
            />
            
            <p v-if="phone.length > 4 && !isPhoneValid" class="text-[10px] text-red-500 mt-2 ml-2 font-bold uppercase tracking-wider animate-pulse">
              Введите корректный номер РБ (+375 XX XXXXXXX)
            </p>
          </div>

          <button 
            @click="sendTelegramCode"
            :disabled="isLoading || !isPhoneValid"
            :class="[
              'w-full font-bold py-4 rounded-2xl transition-all shadow-lg active:scale-95 mt-4',
              isPhoneValid 
                ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-500/20' 
                : 'bg-slate-200 text-slate-400 cursor-not-allowed shadow-none'
            ]"
          >
            {{ isLoading ? 'Отправка сообщения...' : 'Получить код' }}
          </button>
        </div>

        <div v-if="step === 2" class="space-y-6 text-center">
          <p class="text-sm text-slate-600">Код отправлен ботом @vanya_own_bot. <br>Введите 4 цифры из сообщения:</p>
          
          <input 
            v-model="inputCode"
            type="text"
            maxlength="4"
            placeholder="0000"
            class="w-48 text-center tracking-[0.5em] text-3xl font-black px-4 py-5 bg-slate-100 border-2 border-blue-500 rounded-3xl focus:outline-none shadow-inner"
          />

          <button 
            @click="verifyCode"
            class="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 rounded-2xl transition-all active:scale-95 shadow-xl"
          >
            Подтвердить вход
          </button>
          
          <button @click="step = 1" class="text-sm text-slate-400 hover:text-blue-600 font-medium">
            Не пришел код? Назад
          </button>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../store/auth'

const router = useRouter()
const auth = useAuthStore()

// Состояние формы
const step = ref(0)
const selectedRole = ref<'admin' | 'manager' | null>(null)
const phone = ref('+375')
const inputCode = ref('')
const isLoading = ref(false)
const generatedCode = ref('')

// Данные для Telegram API
const BOT_TOKEN = '8309262843:AAG0u90ryV6JzaQAdCnRDMG1VsjbhtwkyoE' //
const MY_CHAT_ID = '1526451367' //

// 1. Валидация номера РБ
const isPhoneValid = computed(() => {
  const cleanPhone = phone.value.replace(/\D/g, '') // Убираем всё кроме цифр
  const re = /^375(25|29|33|44|17)\d{7}$/
  return re.test(cleanPhone)
})

const selectRole = (role: 'admin' | 'manager') => {
  selectedRole.value = role
  step.value = 1
}

// 2. Отправка кода через реального бота
const sendTelegramCode = async () => {
  if (!isPhoneValid.value) return
  
  isLoading.value = true
  generatedCode.value = Math.floor(1000 + Math.random() * 9000).toString()
  
  const roleText = selectedRole.value === 'admin' ? 'Администратор' : 'Менеджер'
  const message = `🔐 ВХОД В СИСТЕМУ\n\n👤 Роль: ${roleText}\n🔑 Код подтверждения: ${generatedCode.value}\n📱 Номер: ${phone.value}`
  
  try {
    const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: MY_CHAT_ID,
        text: message
      })
    })

    if (response.ok) {
      step.value = 2
    } else {
      alert('Ошибка Telegram API. Убедитесь, что вы нажали START в боте @vanya_own_bot')
    }
  } catch (e) {
    alert('Ошибка соединения с сервером Telegram')
  } finally {
    isLoading.value = false
  }
}

// 3. Проверка кода и авторизация
const verifyCode = () => {
  if (inputCode.value === generatedCode.value && selectedRole.value) {
    auth.setRole(selectedRole.value)
    
    // Редирект в зависимости от роли
    if (selectedRole.value === 'admin') {
      router.push('/')
    } else {
      router.push('/reports')
    }
  } else {
    alert('Неверный код! Проверьте сообщение в Telegram.')
  }
}
</script>

<style scoped>
/* Плавные переходы для этапов */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

/* Убираем стрелочки у input type="tel" в некоторых браузерах */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>