<template>
  <input type="text" v-model="inputText" />
  <p>Length : {{ textLength }}</p>
  <p v-if="isTextTooLong">Le texte est trop long</p>
</template>

<script setup>
  import { ref, computed } from "vue"

  const inputText = ref("")

  const textLength = computed(() => inputText.value.length)

  const isTextTooLong = computed(() => textLength.value > 144)
</script>
