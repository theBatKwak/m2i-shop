<template>
  <div>
    <input type="text" @keyup.ctrl="logEvent" v-model="textInput" />
    <button @click.right="logEvent">Click me</button>
  </div>
</template>

<script setup>
  import { ref } from "vue"
  const textInput = ref("")

  function logEvent(e) {
    console.log("Event reçu", e)
  }
</script>
