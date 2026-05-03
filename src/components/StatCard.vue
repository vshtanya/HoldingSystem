<template>
  <div class="bg-white rounded-3xl p-8 shadow-xl text-center hover:shadow-2xl transition-shadow">
    <div class="text-5xl font-bold text-emerald-600 mb-2">{{ value }}</div>
    <div class="text-slate-600">{{ label }}</div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  value: string | number
  label: string
}>()
</script>