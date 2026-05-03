<template>
  <div class="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all">
    <img :src="image" class="w-full h-48 object-cover" alt="">
    <div class="p-6">
      <div class="text-emerald-600 text-sm mb-2">{{ date }}</div>
      <h3 class="font-semibold text-xl">{{ title }}</h3>
      <p class="text-slate-600 mt-3 line-clamp-3">{{ description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  image: string
  title: string
  description: string
  date: string
}>()
</script>