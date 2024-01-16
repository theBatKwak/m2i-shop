<template>
  <div>
    <p>Prénom : {{ firstName }}</p>
    <p>Nom de famille : {{ lastName }}</p>
    <p>Bio : {{ bio }}</p>
    <button @click="generateNewNames">Generer</button>
  </div>
</template>

<script setup>
  import { ref } from "vue"
  import { faker } from "@faker-js/faker"

  const firstName = ref("prénom")
  const lastName = ref("nom de famille")
  const bio = ref("biographie")

  function generateNewNames() {
    firstName.value = faker.person.firstName()
    lastName.value = faker.person.lastName()
    bio.value = faker.person.bio()
  }
  generateNewNames()
</script>
