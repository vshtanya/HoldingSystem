<template>
  <button 
    :class="`app-button ${variant} ${size}`"
    :disabled="disabled"
    @click="emitClick"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
const props = defineProps<{
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
}>()

const emit = defineEmits<{
  (e: 'click'): void
}>()

const emitClick = () => {
  if (!props.disabled) emit('click')
}
</script>

<style scoped>
.app-button {
  font-weight: 600;
  border-radius: 9999px;
  transition: all 0.2s;
}
.primary { @apply bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3; }
.secondary { @apply bg-slate-200 hover:bg-slate-300 text-slate-900 px-6 py-3; }
.outline { @apply border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-6 py-3; }
</style>