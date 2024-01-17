<template>
  <p>Somme : {{ somme }}</p>
  <p>Produit : {{ produit }}</p>
</template>

<script setup>
  import { computed } from "vue"
  const props = defineProps(["numberA", "numberB"])

  const somme = computed(() => props.numberA + props.numberB)
  const produit = computed(() => props.numberA * props.numberB)
</script>
