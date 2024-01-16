<template>
  <article>
    <h1>{{ title }}</h1>
    <p>Publié le {{ date }} par {{ author }}</p>
    <p>{{ content }}</p>
  </article>
</template>

<script setup>
  defineProps(["title", "date", "author", "content"])
</script>

<style scoped></style>
