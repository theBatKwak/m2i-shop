<template>
  <div>
    <p>Nom : {{ name }}</p>
    <p>Note : {{ note }}</p>
  </div>
</template>

<script setup>
  import { onBeforeMount, onMounted } from "vue"

  defineProps(["name", "note"])

  onBeforeMount(() => {
    console.log("before mount")
  })

  onMounted(() => {
    console.log("composant monté")
  })
</script>

<style scoped>
  div {
    border: 1px solid grey;
    padding: 5px;
    margin-top: 5px;
    border-radius: 6px;
  }
</style>
