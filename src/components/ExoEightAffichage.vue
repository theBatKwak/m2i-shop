<template>
  <p>{{ valeur }}</p>
</template>

<script setup>
  defineProps(["valeur"])
</script>

<style scoped>
  p {
    color: green;
  }
</style>
