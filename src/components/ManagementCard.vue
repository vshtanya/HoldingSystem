<template>
  <div class="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all group">
    <img 
      :src="image" 
      class="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
      alt="Руководитель"
    >
    <div class="p-8">
      <h3 class="text-2xl font-semibold text-emerald-950">{{ name }}</h3>
      <p class="text-emerald-600 font-medium mt-1">{{ position }}</p>
      <p class="mt-4 text-slate-600 leading-relaxed">{{ description }}</p>
      
      <button 
        @click="showDetails"
        class="mt-6 w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-2xl transition-colors"
      >
        Подробнее о руководителе
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  name: string
  position: string
  image: string
  description: string
}>()

const emit = defineEmits<{
  (e: 'details-click', name: string): void
}>()

const showDetails = () => {
  emit('details-click', props.name)
}
</script>