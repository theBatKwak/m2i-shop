<template>
  <section>
    <div
      class="rectangle"
      :style="{ width: largeurDiv + 'px', height: hauteurDiv + 'px' }"
    ></div>
    <input type="range" min="0" max="500" v-model="largeurDiv" />
    <input type="range" min="0" max="500" v-model="hauteurDiv" />
    <p>{{ largeurDiv }}, {{ hauteurDiv }}</p>
  </section>
</template>

<script setup>
  import { ref } from "vue"

  const hauteurDiv = ref(50)
  const largeurDiv = ref(50)
</script>

<style scoped>
  .rectangle {
    background-color: darkturquoise;
    border-radius: 6px;
  }
</style>
