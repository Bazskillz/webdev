<template>
  <div class="about bg-gray-400 min-h-screen">
    <navbar/>
    <div class="py-10">
      <h1 class="text-3xl font-bold mb-6 text-center text-gray-900">About Us</h1>
      <div class="flex flex-wrap justify-center">
        <div class="w-full md:w-1/2 lg:w-1/3 px-4 py-2">
          <div class="bg-white rounded-lg p-6 shadow-lg">
            <h2 class="text-xl font-bold mb-2 text-gray-900">Calendar Services</h2>
            <p class="text-gray-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis lectus vel nulla tincidunt convallis eu ut elit. Donec vitae felis ut erat finibus convallis. Duis vel odio auctor, semper ipsum at, dignissim odio.</p>
          </div>
        </div>
        <div class="w-full md:w-1/2 lg:w-1/3 px-4 py-2">
          <div class="bg-white rounded-lg p-6 shadow-lg">
            <h2 class="text-xl font-bold mb-2 text-gray-900">Financial Services</h2>
            <p class="text-gray-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis lectus vel nulla tincidunt convallis eu ut elit. Donec vitae felis ut erat finibus convallis. Duis vel odio auctor, semper ipsum at, dignissim odio.</p>
          </div>
        </div>
        <div class="w-full md:w-1/2 lg:w-1/3 px-4 py-2">
          <div class="bg-white rounded-lg p-6 shadow-lg">
            <h2 class="text-xl font-bold mb-2 text-gray-900">Customer Services</h2>
            <p class="text-gray-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis lectus vel nulla tincidunt convallis eu ut elit. Donec vitae felis ut erat finibus convallis. Duis vel odio auctor, semper ipsum at, dignissim odio.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/navbar.vue';

export default {
  components: {
    navbar: Navbar
  }
}
</script>

<style scoped>
.about h1 {
  color: #2E4F4F;
}

.about p {
  color: #2C3333;
}
</style>