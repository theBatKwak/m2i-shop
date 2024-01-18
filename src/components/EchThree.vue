<template>
  <div :class="squareClass"></div>
  <div :style="{ backgroundColor: squareColor }"></div>
  <div :style="{ backgroundColor: isBlue ? 'blue' : 'red' }"></div>
  <input type="checkbox" v-model="isBlue" />
</template>

<script setup>
  import { ref, computed } from "vue"
  const isBlue = ref(false)

  const squareClass = computed(() => {
    return isBlue.value ? "blue-bg" : "red-bg"
  })

  const squareColor = computed(() => {
    return isBlue.value ? "blue" : "red"
  })
</script>

<style scoped>
  div {
    width: 100px;
    height: 100px;
    margin: 20px auto;
  }

  .red-bg {
    background: red;
  }

  .blue-bg {
    background: blue;
  }
</style>
