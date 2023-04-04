<template>
  <div class="home">
    <navbar/>
    <h1>This is a kaas world</h1>
  </div>
</template>

<script>
import Navbar from '../components/navbar.vue'; // Import the component with the correct name

export default {
  components: {
    navbar: Navbar // Register the component with the correct name
  }
}
</script>