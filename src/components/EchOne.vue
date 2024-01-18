<template>
  <input type="number" v-model="numberOne" />
  <input type="number" v-model="numberTwo" />
  <p>{{ puissance }}</p>
</template>

<script setup>
  import { ref, computed } from "vue"

  const numberOne = ref(0)
  const numberTwo = ref(0)

  const puissance = computed(() => {
    return Math.pow(numberOne.value, numberTwo.value)
  })
</script>

<style scoped></style>
