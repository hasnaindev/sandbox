<script setup>
import { ref } from 'vue';
import AppButton from './components/AppButton.vue';

const count = ref(0)
</script>

<template>
  <h1>Sandbox App</h1>
  <div><AppButton @change="count++" :count="count" /></div>
</template>

<style scoped>
  h1 {
    text-align: center;
  }

  div {
    text-align: center;
  }
</style>
