<template>
  <h1>Page produit</h1>
  <div v-if="product">
    <h2>{{ product.title }}</h2>
    <p>{{ product.description }}</p>
    <p>{{ product.price }} €</p>
    <img :src="product.thumbnail" alt="product.title" />
    <div>
      <h3>Galerie</h3>
      <img v-for="image in product.images" :src="image" alt="" />
    </div>
  </div>
</template>

<script setup>
  import { useRoute } from "vue-router"
  import { ref } from "vue"
  import axios from "axios"
  const route = useRoute()
  const product = ref(null)
  async function loadProductData() {
    const { data } = await axios.get(
      "https://dummyjson.com/products/" + route.params.id
    )
    console.log(data)
    product.value = data
  }
  loadProductData()
</script>

<style scoped></style>
