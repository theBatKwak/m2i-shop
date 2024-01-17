<template>
  <input type="text" v-model="inputText" />
  <p>Length : {{ textLength }}</p>
</template>

<script setup>
  import { ref, computed } from "vue"

  const inputText = ref("")

  const textLength = computed(() => inputText.value.length)
</script>
