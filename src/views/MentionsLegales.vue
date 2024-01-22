<template>
  <main>
    <h1>Mentions Légales</h1>
    <p>{{ counterStore.nombre }}</p>
  </main>
</template>

<script setup>
  import { useCounterStore } from "@/stores/counter.store"

  const counterStore = useCounterStore()
</script>
