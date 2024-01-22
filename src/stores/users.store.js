import { defineStore } from "pinia"
import { ref, computed } from "vue"
import axios from "axios"

export const useUsersStore = defineStore("users", () => {
  const users = ref([])

  async function fetchUsers() {
    const apiData = await axios.get("https://dummyjson.com/users")
    users.value = apiData.data.users
  }

  const areUsersLoading = computed(() => users.value.length === 0)

  return {
    users,
    fetchUsers,
    areUsersLoading,
  }
})
