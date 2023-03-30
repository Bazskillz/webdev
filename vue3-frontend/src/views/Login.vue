<template>
  <div class="register-form-container">
  <h1 class="text-4xl text-center bg-gray-800">Please login below</h1>    
    <div class="flex items-center justify-center h-screen bg-gray-800">
        
        <form class="flex flex-col space-y-6 w-96 p-6 bg-white rounded-lg shadow-lg" @submit.prevent="submitForm">
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
</template>

<script>
import axios from 'axios';



export default {
    data(){
        return {
            username: '',
            password:''
            }
        },
    methods: {
        async submitForm(){
            axios.post("http://localhost:3001/auth/login", {
                username: this.username,
                password: this.password }
            )
        }
    }
}

</script>
