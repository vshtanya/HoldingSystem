<template>
  <div class="relative h-[60vh] bg-cover bg-center flex items-center" :style="{ backgroundImage: `url(${image})` }">
    <div class="absolute inset-0 bg-gradient-to-r from-emerald-950/80 to-transparent"></div>
    <div class="max-w-5xl mx-auto px-8 relative z-10 text-white">
      <h1 class="text-6xl font-bold">{{ title }}</h1>
      <p class="mt-6 text-2xl max-w-lg">{{ subtitle }}</p>
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  image: string
  title: string
  subtitle: string
}>()
</script>