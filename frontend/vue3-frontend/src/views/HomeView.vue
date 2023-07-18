<template>
  <navbar />
  <div class="dashboard" style="background-color: #FDF2E9; padding: 2rem; min-height: calc(100vh - 6rem);">
    <div class="flex justify-center items-center h-80">
      <div class="bg-gray-100 p-8 rounded-lg shadow-lg">
        <h2 class="text-2xl font-bold text-gray-800 mb-4">Dashboard</h2>
        <p class="text-gray-600 mb-4">Number of items in calendar: {{ jsonData.length }}</p>
        <router-link to="/calendar" class="bg-yellow-400 text-white font-bold py-2 px-4 rounded hover:bg-yellow-500">View Calendar</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Navbar from '../components/navbar.vue';

export default {
  components: {
    navbar: Navbar
  },
  data() {
    return {
      jsonData: []
    }
  },
  mounted() {
    axios.get('http://localhost:3000/calendar/api')
      .then(response => {
        this.jsonData = response.data;
      })
      .catch(error => {
        console.log(error);
      });
  }
}
</script>