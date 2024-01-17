<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/a-propos">À propos</RouterLink>
    <RouterLink to="/mentions-legales">Mentions légales</RouterLink>
  </nav>
  <RouterView />
  <footer>
    <p>© Robin 2024</p>
  </footer>
</template>

<script setup>
  import { RouterView } from "vue-router"
</script>

<style scoped></style>
