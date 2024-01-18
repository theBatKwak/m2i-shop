<template>
  <button @click="send">Send event</button>
</template>

<script setup>
  const emit = defineEmits(["superEvenement"])
  function send() {
    emit("superEvenement", 24124)
  }
</script>
