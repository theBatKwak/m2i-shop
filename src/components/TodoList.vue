<template>
  <div>
    <input type="text" v-model="todoInput" />
    <button @click="addTodo">Ajouter</button>
    <div>
      <h2>Liste des trucs à faire</h2>
      <ul v-if="todoList.length > 0">
        <li v-for="(todoItem, index) in todoList" @click="removeTodo(index)">
          {{ todoItem }}
        </li>
      </ul>
      <p v-else>Il n'y a aucun élément dans la todolist</p>
    </div>
  </div>
</template>

<script setup>
  import { ref } from "vue"
  const todoInput = ref("")
  const todoList = ref([])

  function addTodo() {
    todoList.value.push(todoInput.value)
    todoInput.value = ""
  }
  function removeTodo(index) {
    todoList.value.splice(index, 1)
  }
</script>

<style></style>
