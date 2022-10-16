<template>   
    <form @submit.prevent="submitForm">
        <label>Email:</label>
        <input type="username" required v-model="username">  
        <label>Password::</label>
        <input type="password" required v-model="password">
        <div class="submit">
            <button>Create Account</button>
        </div>
    </form>    
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
            axios.post("http://localhost:3000/auth/login", {
                username: this.username,
                password: this.password }
            )
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
