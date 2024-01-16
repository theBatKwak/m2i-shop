<template>
  <h1>{{ h1content }}</h1>
  <p>{{ paragraphContent }}</p>
</template>

<script setup>
  import { ref } from "vue"

  const h1content = ref("Contenu du h1")
  const paragraphContent = ref("Contenu du paragraphe blabla")
</script>

<style></style>
