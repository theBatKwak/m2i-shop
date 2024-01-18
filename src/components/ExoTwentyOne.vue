<template>
  <input type="text" v-model="text" />
</template>

<script setup>
  import { ref, watch } from "vue"
  const text = ref("")

  watch(text, (nouvelleValeur, ancienneValeur) => {
    console.log(
      `La valeur de text a changé. Ancienne valeur : ${ancienneValeur}, nouvelle valeur : ${nouvelleValeur}`
    )
  })
</script>
