<template>
  <div class="flex items-center justify-center h-screen">
    <div class="w-96">
      <div class="text-center">
        <h2 class="text-2xl font-bold mb-6">Register</h2>
        <p class="mb-4 text-black">Please enter your email and a password to create your account.</p>
        <div class="flex flex-col">
          <input
            id="username"
            type="email"
            required
            v-model="username"
            @keyup="validateEmail"
            class="text-black rounded-lg border-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 px-4 py-2 mb-4"
            placeholder="Email"
          >
          <p v-if="emailTaken" class="text-red-500 text-sm font-semibold mt-1">Email taken!</p>
          <input
            id="password"
            type="password"
            required
            v-model="password"
            class="text-black rounded-lg border-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 px-4 py-2 mb-4"
            placeholder="Password"
          >
          <input
            id="confirmPassword"
            type="password"
            required
            v-model="confirmPassword"
            @keyup="validatePassword"
            class="text-black rounded-lg border-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 px-4 py-2 mb-4"
            placeholder="Confirm Password"
          >
          <p v-if="passwordsMatch === false" class="text-red-500 text-sm font-semibold mt-1">Passwords do not match!</p>
          <button
            :disabled="emailTaken || !passwordsMatch"
            @click="submitForm"
            class="mt-4 bg-green-500 text-white rounded-lg px-4 py-2 hover:bg-green-600 transition duration-200"
            type="button"
          >
            Create Account
          </button>
          <p class="mt-2 text-black">
            Already registered? <a href="/auth/login">Click here</a> to sign in.
          </p>
        </div>
      </div>
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
      if (!this.passwordsMatch) {
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
        this.$router.push("/login");
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