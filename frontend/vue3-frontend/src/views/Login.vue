<template>
  <div class="register-form-container">
    <navbar/> 
    <div class="flex items-center justify-center h-screen">
      <div class="w-96">
        <div class="bg-white rounded-lg shadow-lg px-6 py-8">
          <h2 class="text-2xl font-bold mb-6">Login</h2>
          <form class="flex flex-col space-y-6" @submit.prevent="submitForm">
            <div class="flex flex-col space-y-1">
              <label class="text-gray-700 font-medium" for="username">Email:</label>
              <input id="username" class="rounded-lg border-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 px-4 py-2" type="username" required v-model="username">
            </div>
            <div class="flex flex-col space-y-1">
              <label class="text-gray-700 font-medium" for="password">Password:</label>
              <input id="password" class="rounded-lg border-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 px-4 py-2" type="password" required v-model="password">
            </div>
            <button class="bg-green-500 text-white rounded-lg px-4 py-2 hover:bg-green-600 transition duration-200" type="submit">Sign In</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Navbar from '../components/navbar.vue'; // Import the component with the correct name



export default {
    data(){
        return {
            username: '',
            password:''
            }
        },
methods: {
    async submitForm() {
      axios.post("http://localhost:3000/auth/login", {
        username: this.username,
        password: this.password
      })
      .then(response => {
        console.log(response);
        const cookie = {
          name: 'access_token',
          value: response.data.access_token,
          httpOnly: true,
          expires: new Date(Date.now() + 30 * 60 * 1000), // expires in 30 minutes
        };
        document.cookie = JSON.stringify(cookie);
        this.$router.push('/');
      })
      .catch(error => console.log(error));

        }
    },
    components: {
        navbar: Navbar // Register the component with the correct name
  }
}
</script>