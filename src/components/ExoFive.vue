<template>
  <button @click="toggleShowParagraph">ON / OFF</button>
  <p>{{ showParagraph }}</p>
  <p v-if="showParagraph">ON</p>
  <p v-else>OFF</p>
</template>

<script setup>
  import { ref } from "vue"

  const showParagraph = ref(true)
  function toggleShowParagraph() {
    showParagraph.value = !showParagraph.value
  }
</script>

<style></style>
