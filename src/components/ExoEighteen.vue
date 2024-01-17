<template>
  <div :class="divClass">
    <input type="checkbox" v-model="isDarkMode" />
    <h2>Titre</h2>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis
      molestias perspiciatis voluptatum quae velit reprehenderit. Sequi unde,
      perferendis eaque nemo natus dignissimos corporis beatae tempore rem
      similique, blanditiis fugiat molestiae.
    </p>
  </div>
</template>

<script setup>
  import { ref, computed } from "vue"
  const isDarkMode = ref(false)
  const divClass = computed(() => {
    if (isDarkMode.value) {
      return "dark"
    } else {
      return "chose"
    }
  })
</script>

<style scoped>
  .dark {
    background: black;
    color: white;
  }
</style>
