<template>
  <p>{{ compteur }}</p>
  <button @click="downCompteur">-</button>
  <button @click="upCompteur">+</button>
</template>

<script setup>
  import { ref } from "vue"
  const compteur = ref(0)
  function downCompteur() {
    compteur.value--
  }
  function upCompteur() {
    compteur.value++
  }
</script>
