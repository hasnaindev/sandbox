<script setup>
defineProps({
  count: {
    type: Number,
    required: true,
    default: 0
  }
})

const emits = defineEmits(['change'])
</script>

<template>
  <button @click="emits('change')">Count: {{ count }}</button>
</template>