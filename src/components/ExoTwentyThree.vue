<template>
  <h1>Seulement les bonnes notes</h1>
  <ExoTwentyThreeNote
    v-for="note in onlyGoodNotes"
    :name="note.name"
    :note="note.note"
  />
  <h1>Toutes les notes</h1>
  <ExoTwentyThreeNote
    v-for="note in notes"
    :name="note.name"
    :note="note.note"
  />
  <p>Moyenne des notes : {{ moyenne }}</p>
  <ExoTwentyThreeForm @form-submit="handleNewFormData" />
</template>

<script setup>
  import ExoTwentyThreeForm from "./ExoTwentyThreeForm.vue"
  import ExoTwentyThreeNote from "./ExoTwentyThreeNote.vue"
  import { ref, computed } from "vue"

  const notes = ref([])

  const moyenne = computed(() => {
    if (notes.value.length === 0) {
      return 0
    }
    let somme = 0
    notes.value.forEach((note) => {
      somme += parseInt(note.note)
    })
    return somme / notes.value.length
  })

  const onlyGoodNotes = computed(() => {
    return notes.value.filter((note) => {
      return parseInt(note.note) >= 4
    })
  })

  function handleNewFormData(payload) {
    notes.value.push(payload)
  }
</script>
