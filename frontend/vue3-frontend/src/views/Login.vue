<template>
  <div class="flex items-center justify-center h-screen">
    <div class="w-96">
      <div class="text-center">
        <h2 class="text-2xl font-bold mb-6">Hello, welcome back!</h2>
        <p v-if="!showPassword"
          class="mb-4 text-black">Please enter your username to continue.</p>
        <p v-if="showPassword"
          class="mb-4 text-black">Login below.</p>
        <div class="flex flex-col">
          <input 
            v-model="username"
            type="text" 
            class="text-black rounded-lg border-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 px-4 py-2 mb-4" 
            placeholder="Username"
          >
          <input
            v-if="showPassword"
            v-model="password"
            type="password" 
            class="text-black rounded-lg border-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 px-4 py-2 mb-4"
            placeholder="Password"
          >
          <button
            v-if="!showPassword"
            @click="togglePassword"
            class="mt-4 bg-green-500 text-white rounded-lg px-4 py-2 hover:bg-green-600 transition duration-200" 
            type="button"
          >
            Continue
          </button>
          <button
            v-if="showPassword"
            :class="{
              'bg-green-500': !showPassword,
              'bg-red-500': showPassword,
            }"
            class="mt-4 bg-green-500 text-white rounded-lg px-4 py-2 hover:bg-green-600 transition duration-200"
              type="button"
              @click="submitForm"
          >
            Sign In
          </button>
          <p v-if="showPassword" class="mt-2 text-black">
            Not registered? <a href="/register">Click here</a> to create an account.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Vuex from 'vuex'


export default {
  data() {
    return {
      username: '',
      password: '',
      showPassword: false,
    };
  },
  methods: {
    togglePassword() {
      this.showPassword = !this.showPassword;
    },
    async submitForm(){
      const { username, password } = this.$data;

      // Make an API call to login the user
      axios.post("http://localhost:3000/auth/login", {
            username: this.username,
            password: this.password
      })
      .then(response => {
        // Set the access token in the store
        this.$store.commit('login', response.data.access_token);

        // Redirect the user to the dashboard
        this.$router.push('/');
      })
      .catch(error => console.log(error));
    }
  },
};
</script>