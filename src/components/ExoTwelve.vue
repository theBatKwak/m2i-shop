<template>
  <input type="number" v-model="inputNumber" />
  <button @click="addNumberToList">Add</button>
  <p>Moyenne : {{ moyenne }}</p>
</template>

<script setup>
  import { ref, computed } from "vue"

  const numbersList = ref([18, 9])
  const inputNumber = ref(0)

  function addNumberToList() {
    numbersList.value.push(inputNumber.value)
  }

  const moyenne = computed(() => {
    let somme = 0
    numbersList.value.forEach((number) => (somme += number))
    return somme / numbersList.value.length
  })
</script>
