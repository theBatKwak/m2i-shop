<template>
  <main>
    <h1>Titre</h1>
    <p>{{ paragraphe }}</p>
  </main>
</template>
<script setup>
  import { ref } from "vue"
  const paragraphe = ref("Contenu du paragraphe")
</script>
