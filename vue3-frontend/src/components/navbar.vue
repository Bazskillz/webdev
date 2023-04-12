<template>
  <nav class="bg-gray-400 text-white rounded-full">
    <ul class="flex justify-center items-center py-4">
      <li class="mr-10">
        <router-link to="/" class="text-gray-300 hover:text-black font-bold py-2 px-4 rounded-lg transition-colors duration-300 {{ $route.path === '/' ? 'bg-gray-500 text-white' : '' }}">
          <i class="fas fa-home"></i> Home
        </router-link>
      </li>
      <li class="mr-10">
        <router-link to="/about" class="text-gray-300 hover:text-black font-bold py-2 px-4 rounded-lg transition-colors duration-300 {{ $route.path === '/about' ? 'bg-gray-500 text-white' : '' }}">
          <i class="fas fa-info-circle"></i> About
        </router-link>
      </li>
      <li class="mr-10">
        <router-link to="/calendar" class="text-gray-300 hover:text-black font-bold py-2 px-4 rounded-lg transition-colors duration-300 {{ $route.path === '/calendar' ? 'bg-gray-500 text-white' : '' }}">
          <i class="fas fa-calendar-alt"></i> Calendar
        </router-link>
      </li>
      <li class="mr-10" v-if="isLoggedIn">
        <router-link to="/dashboard" class="text-gray-300 hover:text-black font-bold py-2 px-4 rounded-lg transition-colors duration-300 {{ $route.path === '/dashboard' ? 'bg-gray-500 text-white' : '' }}">
          <i class="fas fa-tachometer-alt"></i> Dashboard
        </router-link>
      </li>
      <li class="mr-10" v-if="isLoggedIn">
        <button class="text-gray-300 hover:text-black font-bold py-2 px-4 rounded-lg transition-colors duration-300 bg-red-500" @click="logout">
          <i class="fas fa-sign-out-alt"></i> Logout
        </button>
      </li>
      <li class="mr-10">
        <router-link to="/login" class="text-gray-300 hover:text-black font-bold py-2 px-4 rounded-lg transition-colors duration-300 {{ $route.path === '/login' ? 'bg-gray-500 text-white' : '' }}">
          <i class="fas fa-sign-in-alt"></i> {{ isLoggedIn ? 'Logout' : 'Login' }}
        </router-link>
      </li>
      <li>
        <router-link to="/register" class="text-gray-300 hover:text-black font-bold py-2 px-4 rounded-lg transition-colors duration-300 {{ $route.path === '/register' ? 'bg-gray-500 text-white' : '' }}">
          <i class="fas fa-user-plus"></i> Register
        </router-link>
      </li>
    </ul>
  </nav>
</template>
<style scoped>
/* Add rounded edges */
li {
  border-radius: 0.5rem;
  overflow: hidden;
}

/* Add border lighting on hover */
a:hover {
  border-color: #0E8388;
  border-width: 2px;
  border-style: solid;
  box-shadow: 0px 0px 5px 0px #0E8388;
}

/* Add styles to router-link tags */
.router-link-exact-active {
  border-color: #CBE4DE;
  border-width: 2px;
  border-style: solid;
  box-shadow: 0px 0px 5px 0px #CBE4DE;
  background-color: #CBE4DE;
  color: #2C3333;
}
.router-link-exact-active:hover {
  background-color: #CBE4DE;
  color: #2C3333;
}
</style>


<script>
import { reactive, watch } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
  name: "navbar",
  setup() {
    const store = useStore()
    const router = useRouter()

    const state = reactive({
      username: localStorage.getItem('username') || '',
    })

    // Watch for changes to the store state
    watch(() => store.state.accessToken, (newToken) => {
      state.username = store.state.username
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