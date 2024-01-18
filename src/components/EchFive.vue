<template>
  <button @click="sendEvent">Émettre événement</button>
</template>

<script setup>
  import { ref } from "vue"
  const emit = defineEmits(["data"])

  const anyObject = ref({ number: 42 })

  function sendEvent() {
    emit("data", anyObject.value)
  }
</script>
