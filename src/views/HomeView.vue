<template>
  <main>
    <h1>Home</h1>
    <p>{{ counterStore.nombre }}</p>
    <button @click="counterStore.incrementNombre()">Increment</button>
    <p v-if="!usersStore.areUsersLoading">{{ usersStore.users }}</p>
    <p v-else>Chargement...</p>
  </main>
</template>

<script setup>
  import ExoTwentyFour from "@/components/ExoTwentyFour.vue"
  import { useCounterStore } from "../stores/counter.store"
  import { useUsersStore } from "@/stores/users.store"

  const counterStore = useCounterStore()

  const usersStore = useUsersStore()
</script>
