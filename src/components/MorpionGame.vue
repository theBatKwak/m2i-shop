<template>
  <section>
    <div class="tiles-container">
      <MorpionTile
        v-for="(cellValue, index) in cellsStatus"
        :status="cellValue"
        @click="play(index)"
      />
    </div>
    <p>C'est au tour de {{ playerTurn }} de jouer</p>
  </section>
</template>

<script setup>
  import MorpionTile from "./MorpionTile.vue"
  import { ref } from "vue"

  const cellsStatus = ref([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ])

  const playerTurn = ref(selectFirstPlayer())

  function selectFirstPlayer() {
    const randomNumber = Math.round(Math.random())
    return randomNumber === 0 ? "cross" : "circle"
  }

  function play(index) {
    if (!cellsStatus.value[index]) {
      cellsStatus.value[index] = playerTurn.value
      playerTurn.value = playerTurn.value === "cross" ? "circle" : "cross"
    } else {
      console.log("On ne peut pas jouer ici")
    }
  }
</script>

<style scoped>
  .tiles-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
  }
</style>
