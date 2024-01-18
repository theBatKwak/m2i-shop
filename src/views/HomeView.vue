<template>
  <main>
    <h1>Home</h1>
    <EchFive @data="logEvent" />
  </main>
</template>

<script setup>
  import EchFive from "@/components/EchFive.vue"

  function logEvent(payload) {
    console.log("événement reçu", payload.number)
  }
</script>
