<template>
  <button @click="sendEvent">Emettre évément</button>
</template>

<script setup>
  const emit = defineEmits(["ping"])

  function sendEvent() {
    emit("ping")
  }
</script>
