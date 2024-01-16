<template>
  <button>
    <img v-if="status === 'circle'" src="/circle.png" alt="circle" />
    <img v-else-if="status === 'cross'" src="/cross.png" alt="cross" />
  </button>
</template>

<script setup>
  defineProps(["status"])
  // status : soit circle, soit cross, soit vide
</script>

<style scoped>
  button {
    background: white;
    border: 1px solid gray;
    transition: all 0.25s;
    height: 59px;
  }
  button:hover {
    background: #eeeeee;
  }
  img {
    height: 100%;
  }
</style>
