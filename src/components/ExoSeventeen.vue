<template>
  <p :class="textColor">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt incidunt
    velit optio eos. Velit cupiditate dolorum quaerat, voluptate aperiam
    voluptatem tempora hic nobis provident ducimus alias, culpa eum nihil
    soluta?
  </p>
  <button @click="switchColor">Changer couleur</button>
</template>

<script setup>
  import { ref } from "vue"
  const textColor = ref("texte-vert")

  function switchColor() {
    textColor.value =
      textColor.value === "texte-vert" ? "texte-rouge" : "texte-vert"
  }
</script>

<style scoped>
  .texte-vert {
    color: green;
  }

  .texte-rouge {
    color: red;
  }
</style>
