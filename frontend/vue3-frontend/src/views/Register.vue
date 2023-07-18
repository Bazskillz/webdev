<template>
  <div class="register-form-container">
    <navbar/> 
    <div class="flex items-center justify-center h-screen">
      <form class="flex flex-col space-y-6 w-96 p-6 bg-white rounded-lg shadow-lg" @submit.prevent="submitForm">
      <h2 class="text-2xl font-bold mb-6">Register</h2>
        <div class="flex flex-col space-y-1">
          <label for="username" class="text-gray-700 font-medium">Email:</label>
          <input id="username" type="email" required v-model="username" @keyup="validateEmail" class="rounded-lg border-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 px-4 py-2">
          <p v-if="emailTaken" class="text-red-500 text-sm font-semibold mt-1">Email taken!</p>
          <p v-if="accountCreated" class="text-green-500 text-sm font-semibold mt-1">
              Account has been successfully created.
              <a href="/auth/login">Login</a>
          </p>
        </div>
        <div class="flex flex-col space-y-1">
          <label for="password" class="text-gray-700 font-medium">Password:</label>
          <input id="password" type="password" required v-model="password" class="rounded-lg border-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 px-4 py-2">
        </div>
        <div class="flex flex-col space-y-1">
          <label for="confirmPassword" class="text-gray-700 font-medium">Confirm Password:</label>
          <input id="confirmPassword" type="password" required v-model="confirmPassword" @keyup="validatePassword" class="rounded-lg border-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 px-4 py-2">
          <p v-if="passwordsMatch === false" class="text-red-500 text-sm font-semibold mt-1">Passwords do not match!</p>
        </div>
        <button type="submit" :disabled="emailTaken || passwordsMatch === false" class="bg-green-500 text-white rounded-lg px-4 py-2 hover:bg-green-600 transition duration-200">Create Account</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Navbar from '../components/navbar.vue'; // Import the component with the correct name

export default {
  data() {
    return {
      username: '',
      password: '',
      confirmPassword: '',
      emailTaken: false,
      accountCreated: false,
      passwordsMatch: true
    }
  },
  methods: {
    validateEmail() {
      // Perform email validation logic here
    },
    validatePassword() {
      if (this.password !== this.confirmPassword) {
        this.passwordsMatch = false;
      } else {
        this.passwordsMatch = true;
      }
    },
    submitForm() {
      if (this.passwordsMatch === false) {
        return;
      }
      axios.post("http://localhost:3000/auth/signup", {
            username: this.username,
            password: this.password
      })
      .then(response => {
        // Handle successful response here
        this.emailTaken = false;
        this.accountCreated = true;
        this.$router.push("/auth/login");
      })
      .catch(error => {
        if (error.response.status === 409) {
          this.accountCreated = false;
          this.emailTaken = true;
        }
      });
    }

  },
    components: {
        navbar: Navbar // Register the component with the correct name
  }
}
</script>


