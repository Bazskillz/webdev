<template>
<nav class="bg-gray-400 text-white">
  <ul class="flex justify-between items-center py-4">
    <li class="mr-10">
      <router-link to="/" class="text-gray-300 hover:text-black font-bold py-2 px-4 rounded-lg transition-colors duration-300">
        <i class="fas fa-home"></i> Home
      </router-link>
    </li>
    <li class="mr-10">
      <router-link to="/about" class="text-gray-300 hover:text-black font-bold py-2 px-4 rounded-lg transition-colors duration-300">
        <i class="fas fa-info-circle"></i> About
      </router-link>
    </li>
    <li class="mr-10">
      <router-link to="/calendar" class="text-gray-300 hover:text-black font-bold py-2 px-4 rounded-lg transition-colors duration-300">
        <i class="fas fa-calendar-alt"></i> Calendar
      </router-link>
    </li>
    <li class="mr-10" v-if="isLoggedIn">
      <span class="text-gray-300 hover:text-black font-bold py-2 px-4 rounded-lg transition-colors duration-300">Logged in as {{ username }}</span>
    </li>
    <li class="mr-10" v-if="isLoggedIn">
      <button class="text-gray-300 hover:text-black font-bold py-2 px-4 rounded-lg transition-colors duration-300 bg-transparent border border-gray-300 hover:border-gray-500">
        <i class="fas fa-sign-out-alt"></i> Logout
      </button>
    </li>
    <li v-if="!isLoggedIn">
      <router-link to="/login" class="text-gray-300 hover:text-black font-bold py-2 px-4 rounded-lg transition-colors duration-300">
        <i class="fas fa-sign-in-alt"></i> Login
      </router-link>
    </li>
    <li v-if="!isLoggedIn">
      <router-link to="/register" class="text-gray-300 hover:text-black font-bold py-2 px-4 rounded-lg transition-colors duration-300">
        <i class="fas fa-user-plus"></i> Register
      </router-link>
    </li>
  </ul>
</nav>
</template>

<script>
import { reactive, watch } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'


export default {
  name: "navbar",
  setup() {
    const store = useStore()
    const router = useRouter()

    // Get the username from the cookie
    const username = localStorage.getItem('username') || ''

    // Create a reactive state object
    const state = reactive({
      username,
    })

    // Watch for changes to the store state
    watch(() => store.state.accessToken, (newToken) => {
      state.username = newToken
    })

    // Logout function
    const logout = () => {
      store.commit('logout')
      localStorage.removeItem('access_token')
      localStorage.removeItem('username')
      router.push('/')
    }

    // Return reactive state properties and logout function
    return {
      isLoggedIn: store.getters.isLoggedIn,
      username: state.username,
      logout,
    }
  }
}
</script>