<script setup>
  import { RouterView } from "vue-router"
</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/a-propos">À propos</RouterLink>
  </nav>
  <RouterView />
</template>

<style scoped></style>
