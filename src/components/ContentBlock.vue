<template>
  <div>
    <h2 v-if="title">{{ title }}</h2>
    <h2 v-else>Pas de titre</h2>
    <p v-if="paragraph">{{ paragraph }}</p>
    <p v-else>Pas de contenu</p>
  </div>
</template>

<script setup>
  import { ref } from "vue"
  defineProps(["title", "paragraph"])
</script>

<style scoped></style>
