<template>
  <div class="min-h-screen bg-emerald-950 flex items-center justify-center p-6">
    <div class="max-w-md w-full">
      
      <div class="flex flex-col items-center mb-12">
        <img :src="logo" class="w-28 h-28 object-contain mb-6 drop-shadow-2xl" alt="VSHold">
        <h1 class="text-5xl font-bold text-white tracking-tighter">VSHold</h1>
        <p class="text-emerald-300 text-xl mt-2">Холдинговая компания</p>
      </div>

      <div class="bg-white/10 backdrop-blur-2xl rounded-3xl p-10 shadow-2xl border border-white/10">
        <h2 class="text-2xl font-semibold text-white text-center mb-8">Вход в систему</h2>

        <!-- Шаг 1: Ввод номера -->
        <div v-if="step === 1">
          <p class="text-emerald-200 text-sm mb-3">Белорусский номер телефона</p>
          <input 
            v-model="phone"
            type="tel"
            placeholder="+375 XX XXX XX XX"
            class="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-5 text-white text-lg focus:outline-none focus:border-emerald-400"
          >
          <button 
            @click="sendCode"
            :disabled="isLoading || phone.length < 13"
            class="mt-8 w-full py-4 bg-emerald-600 hover:bg-emerald-500 disabled:bg-emerald-800 transition-colors text-white font-medium rounded-2xl text-lg"
          >
            {{ isLoading ? 'Отправка...' : 'Отправить код в Telegram' }}
          </button>
        </div>

        <!-- Шаг 2: Ввод кода -->
        <div v-if="step === 2">
          <p class="text-emerald-200 text-sm mb-3">
            Код отправлен в <span class="font-medium">@vanya_own_bot</span><br>
            Проверьте сообщения в Telegram
          </p>
          <input 
            v-model="code"
            type="text"
            maxlength="6"
            placeholder="123456"
            class="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-5 text-white text-3xl text-center tracking-widest focus:outline-none focus:border-emerald-400"
          >
          <button 
            @click="verifyCode"
            :disabled="code.length < 6"
            class="mt-8 w-full py-4 bg-emerald-600 hover:bg-emerald-500 disabled:bg-emerald-800 transition-colors text-white font-medium rounded-2xl text-lg"
          >
            Подтвердить и войти
          </button>

          <button @click="step = 1" class="mt-6 text-emerald-300 text-sm underline block mx-auto">
            ← Изменить номер
          </button>
        </div>
      </div>

      <p class="text-center text-emerald-400/60 text-xs mt-8">
        Код придёт в @vanya_own_bot
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../store/auth'
import logo from '../assets/vshold-logo.png'

const router = useRouter()
const auth = useAuthStore()

const phone = ref('')
const code = ref('')
const step = ref(1)
const isLoading = ref(false)

const BOT_TOKEN = '8309262843:AAG0u90ryV6JzaQAdCnRDMG1VsjbhtwkyoE'

const sendCode = async () => {
  if (phone.value.length < 13) return

  isLoading.value = true

  // Генерируем 6-значный код
  const generatedCode = Math.floor(100000 + Math.random() * 900000).toString()
  code.value = generatedCode  // сохраняем для проверки (в реальном проекте не показывать)

  const message = `🔑 Код подтверждения для VSHold:\n\n` +
                  `📱 Номер: ${phone.value}\n` +
                  `🔢 Код: ${generatedCode}\n\n` +
                  `Время: ${new Date().toLocaleTimeString('ru-RU')}`

  try {
    await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: '1526451367',        // твой Telegram ID
        text: message,
        parse_mode: 'HTML'
      })
    })

    alert('✅ Код отправлен в Telegram! Проверьте сообщения от бота.')
    step.value = 2
  } catch (err) {
    alert('Не удалось отправить код. Проверьте интернет.')
  } finally {
    isLoading.value = false
  }
}

const verifyCode = () => {
  if (code.value.length < 6) return

  auth.setRole('admin')
  router.push('/')
}
</script>