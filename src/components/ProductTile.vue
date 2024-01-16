<template>
  <RouterLink :to="'/product/' + id">
    <img :src="image" alt="" />
    <h3>{{ title }}</h3>
    <p>{{ price }}</p>
    <p>{{ count }}</p>
  </RouterLink>
</template>

<script setup>
  import { ref } from "vue"
  defineProps(["title", "price", "image", "id"])
</script>

<style scoped>
  img {
    width: 100%;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
</style>
