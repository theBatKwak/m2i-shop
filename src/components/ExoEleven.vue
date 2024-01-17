<template>
  <p>Somme : {{ somme }}</p>
  <p>Produit : {{ produit }}</p>
</template>

<script setup>
  import { ref, computed } from "vue"
  const nombre1 = ref(24)
  const nombre2 = ref(42)

  const somme = computed(() => nombre1.value + nombre2.value)
  const produit = computed(() => nombre1.value * nombre2.value)
  const c = computed(() => {
    return 12
  })
</script>
