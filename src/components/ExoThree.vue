<template>
  <p>{{ variable }}</p>
  <button @click="changerValeur">Click me</button>
</template>

<script setup>
  import { ref } from "vue"
  const variable = ref(1)

  function changerValeur() {
    variable.value = 2
  }
</script>
