<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <h1>Sandbox App</h1>
  <div>
    <button @click="count++">Clicked {{ count }} Amount of Times!</button>
  </div>
</template>

<style scoped>
  h1 {
    text-align: center;
  }

  div {
    text-align: center;
  }
</style>
