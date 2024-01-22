<template>
  <p>Bonjour {{ exo24Store.nom }} {{ exo24Store.prenom }}</p>
</template>

<script setup>
  import { useExo24Store } from "@/stores/exo24.store"

  const exo24Store = useExo24Store()
</script>
