<template>
  <div class="min-h-screen bg-slate-50">
    <div class="bg-emerald-950 py-16">
      <div class="max-w-5xl mx-auto px-8 text-center">
        <h1 class="text-5xl font-bold text-white">Руководство холдинга</h1>
        <p class="mt-4 text-2xl text-emerald-200">Команда опытных лидеров VSHold</p>
      </div>
    </div>

    <div class="max-w-6xl mx-auto px-8 py-20">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
        <ManagementCard
          name="Иван Симонович"
          position="Генеральный директор и основатель"
          :image="ruc1"
          description="Более 15 лет опыта в логистике и управлении холдингами. Основатель VSHold."
          @details-click="handleDetailsClick"
        />
        
        <ManagementCard
          name="Анна Ковалёва"
          position="Финансовый директор"
          :image="ruc2"
          description="Эксперт в корпоративных финансах и стратегическом планировании."
          @details-click="handleDetailsClick"
        />

        <ManagementCard
          name="Дмитрий Лебедев"
          position="Операционный директор"
          :image="ruc3"
          description="Отвечает за работу всех 8 предприятий и логистику по всей Беларуси."
          @details-click="handleDetailsClick"
        />

        <ManagementCard
          name="Елена Морозова"
          position="Директор по развитию VSDigital"
          :image="ruc4"
          description="Руководит цифровой трансформацией холдинга и внедрением IT-решений."
          @details-click="handleDetailsClick"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ManagementCard from '../../components/ManagementCard.vue'
import ruc1 from '../../assets/ruc1.png'
import ruc2 from '../../assets/ruc2.png'
import ruc3 from '../../assets/ruc3.png'
import ruc4 from '../../assets/ruc4.png'

const handleDetailsClick = (name: string) => {
  alert(`Открыта детальная информация о руководителе: ${name}`)
}
</script>