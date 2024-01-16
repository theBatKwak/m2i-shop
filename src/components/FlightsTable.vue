<template>
  <table>
    <tr v-for="flight in flights">
      <td>{{ flight.airplane }}</td>
      <td>{{ flight.departure }}</td>
      <td>{{ flight.arrival }}</td>
      <td>{{ flight.flightNumber }}</td>
    </tr>
  </table>
</template>

<script setup>
  import { ref } from "vue"
  import { faker } from "@faker-js/faker"

  const flights = ref([])

  function generateFlights() {
    for (let i = 0; i < 20; i++) {
      flights.value.push({
        airplane: faker.airline.airplane().name,
        departure: faker.airline.airport().name,
        arrival: faker.airline.airport().name,
        flightNumber: faker.airline.flightNumber(),
      })
    }
  }
  generateFlights()
</script>

<style></style>
