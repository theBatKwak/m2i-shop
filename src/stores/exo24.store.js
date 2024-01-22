import { defineStore } from "pinia"
import { ref } from "vue"

export const useExo24Store = defineStore("exo24", () => {
  const nom = ref("truc")
  const prenom = ref("muche")

  return {
    nom,
    prenom,
  }
})
