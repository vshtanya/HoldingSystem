<template>
  <div class="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all text-center">
    <div class="text-4xl mb-4">{{ emoji }}</div>
    <h3 class="text-2xl font-semibold">{{ name }}</h3>
    <p class="text-slate-600 mt-3">{{ description }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  name: string
  description: string
  emoji: string
}>()
</script>