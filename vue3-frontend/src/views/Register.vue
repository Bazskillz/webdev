<template>   
    <form @submit.prevent="submitForm">
        <label>Email:</label>
        <input type="username" required v-model="username" @keyup="validateUsername">  
        <label>Password:</label>
        <input type="password" required v-model="password">
        <div class="text-red">
        <p v-if="this.emailMessage" class="inline-block align-baseline font-bold text-sm text-red-500 hover:text-red-800"> Email Taken!</p>
        </div>
        <div class="submit text-green-700">
            <button>Create Account</button>
        </div>
    </form>    
</template>

<script>
import axios from 'axios';



export default {
    data(){
        return {
            username:'',
            password:'',
            emailMessage:false
            }
        },
    methods: {
        async submitForm(){
            axios.post("http://localhost:3000/auth/signup", {
                username: this.username,
                password: this.password }
            ).catch((error) => this.emailMessage = true);
        }
    }
}

</script>

<style>
form {
    max-width: 420px;
    margin: 30px auto;
    background: white;
    text-align: left;
    padding: 40px;
    border-radius: 10px;
}
label {
    color:#aaa;
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 0.6em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
}
input {
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555;
}

</style>
