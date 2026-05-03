<template>
  <div class="relative mb-16 last:mb-0">
    <div class="absolute -left-[29px] w-12 h-12 bg-white border-4 border-emerald-600 rounded-2xl flex items-center justify-center shadow-lg">
      <img :src="icon" class="w-7 h-7" alt="">
    </div>
    <div class="bg-white rounded-3xl p-8 shadow-xl ml-8">
      <div class="flex items-baseline gap-4">
        <span class="text-5xl font-bold text-emerald-600">{{ year }}</span>
        <p class="text-xl text-slate-600">{{ description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  year: string
  description: string
  icon: string
}>()
</script>