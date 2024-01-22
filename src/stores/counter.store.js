import { defineStore } from "pinia"
import { ref } from "vue"

export const useCounterStore = defineStore("counter", () => {
  const nombre = ref(1)

  function incrementNombre() {
    nombre.value++
  }
  return {
    nombre,
    incrementNombre,
  }
})
