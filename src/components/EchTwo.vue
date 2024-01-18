<template>
  <p>{{ prixTTC }}</p>
</template>

<script setup>
  import { computed } from "vue"
  const props = defineProps(["prix"])

  const prixTTC = computed(() => {
    return props.prix + props.prix * 0.2
  })
</script>
