<template>
  <div>
    <label for="name-input">Votre nom:</label>
    <input type="text" v-model="name" id="name-input" />
    <label for="note-input">Votre note:</label>
    <input type="range" id="note-input" v-model="note" min="0" max="5" />
    <button @click="send">Envoyer</button>
  </div>
</template>

<script setup>
  import { ref } from "vue"
  const emit = defineEmits(["formSubmit"])
  const name = ref("")
  const note = ref(0)

  function send() {
    emit("formSubmit", { name: name.value, note: note.value })
    name.value = ""
    note.value = 0
  }
</script>

<style scoped>
  div {
    display: flex;
    flex-direction: column;
  }
  label {
    margin-top: 15px;
  }
  button {
    margin-top: 15px;
  }
</style>
