<template>
  <button @click="handleClick">Click me</button>
</template>

<script setup>
  import { ref } from "vue"
  import { useRouter } from "vue-router"
  const router = useRouter()

  const clicksCount = ref(0)

  function handleClick() {
    clicksCount.value++
    if (clicksCount.value >= 5) {
      router.push("/page-secrete")
    }
  }
</script>
