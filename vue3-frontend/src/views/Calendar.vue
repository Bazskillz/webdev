<template>
  <navbar />
  <div class="flex h-screen bg-gray-400">
  
    <div class="w-3/4 mx-auto mt-12">
      <div class="h-96 bg-white rounded-lg shadow-md overflow-y-scroll">
        <ul class="px-8">
          <li v-for="(event, index) in jsonData" :key="event.id" :class="{ 'bg-gray-100': index % 2 === 0, 'bg-white': index % 2 !== 0 }">
            <p class="text-gray-700 font-medium">{{ event.summary }}</p>
            <ul class="list-disc ml-4">
              <li class="text-gray-500"><span class="font-medium">Location:</span> {{ event.location }}</li>
              <li class="text-gray-500"><span class="font-medium">Start Time:</span> {{ event.start.dateTime }}</li>
              <li class="text-gray-500"><span class="font-medium">End Time:</span> {{ event.end.dateTime }}</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import Navbar from '../components/navbar.vue';

export default {
  components: {
    navbar: Navbar // Register the component with the correct name
  },
  data() {
    return {
      selectedDate: new Date(),
      jsonData: []
    }
  },
  mounted() {
    axios.get('http://localhost:3001/calendar')
      .then(response => {
        this.jsonData = response.data;
      })
      .catch(error => {
        console.log(error);
      });
  },
  computed: {
    formattedEvents() {
      return this.jsonData.map(event => {
        return {
          id: event.id,
          title: event.description, // or whatever property you want to use as the event title
          start: new Date(event.start.dateTime),
          end: new Date(event.end.dateTime),
        };
      });
    }
  }
}
</script>


<style>
.vdp-datepicker__calendar {
  display: inline-block;
  vertical-align: top;
}
</style>
