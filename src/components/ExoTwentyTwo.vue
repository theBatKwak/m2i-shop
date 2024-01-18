<template>
  <input type="text" v-model="inputText" />
  <p v-if="accessGranted">Accès autorisé</p>
</template>

<script setup>
  import { ref, watch } from "vue"
  const inputText = ref("")
  const codeSecret = ref("lasagnes")
  const accessGranted = ref(false)

  watch(inputText, (nouvelleValeur, ancienneValeur) => {
    if (nouvelleValeur === codeSecret.value) {
      accessGranted.value = true
    }
  })
</script>
