<template>
  <input type="password" v-model="passwordValue" />
  <p :class="passwordStrength">
    Sécurité du mot de passe : {{ passwordStrength }}
  </p>
  <p :style="{ color: getStrengthColor() }">
    Sécurité du mot de passe : {{ passwordStrength }}
  </p>
</template>

<script setup>
  import { ref, computed } from "vue"
  const passwordValue = ref("")

  const passwordStrength = computed(() => {
    if (passwordValue.value.length < 8) {
      return "faible"
    } else if (passwordValue.value.indexOf("@") !== -1) {
      return "fort"
    } else {
      return "moyen"
    }
  })

  function getStrengthColor() {
    if (passwordStrength.value === "faible") {
      return "red"
    } else if (passwordStrength.value === "moyen") {
      return "orange"
    } else {
      return "green"
    }
  }
</script>

<style scoped>
  .faible {
    color: red;
  }

  .moyen {
    color: orange;
  }

  .fort {
    color: green;
  }
</style>
