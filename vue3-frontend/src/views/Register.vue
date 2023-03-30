<template>
  <div class="register-form-container">
    <div class="flex items-center justify-center h-screen bg-gray-800">
      <form class="flex flex-col space-y-6 w-1/3 p-6 bg-white rounded-lg shadow-lg" @submit.prevent="submitForm">
        <div class="flex flex-col space-y-1">
          <label for="username" class="text-gray-700 font-medium">Email:</label>
          <input id="username" type="email" required v-model="username" @keyup="validateUsername" class="rounded-lg border-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 px-4 py-2">
          <p v-if="emailTaken" class="text-red-500 text-sm font-semibold mt-1">Email taken!</p>
        </div>
        <div class="flex flex-col space-y-1">
          <label for="password" class="text-gray-700 font-medium">Password:</label>
          <input id="password" type="password" required v-model="password" class="rounded-lg border-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 px-4 py-2">
        </div>
        <button type="submit" class="bg-green-500 text-white rounded-lg px-4 py-2 hover:bg-green-600 transition duration-200">Create Account</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      emailTaken: false
    }
  },
  methods: {
    validateUsername() {
      // Perform email validation logic here
    },
    submitForm() {
            axios.post("http://localhost:3001/auth/signup", {
                username: this.username,
                password: this.password }
            ).catch((error) => this.emailMessage = true);
        }
  }
}
</script>


