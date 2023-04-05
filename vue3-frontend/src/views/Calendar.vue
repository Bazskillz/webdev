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
              <li class="text-gray-500"><span class="font-medium">Start Time:</span> {{ event.start.dateTime ? new Date(event.start.dateTime).toLocaleString() : event.start.date }}</li>
              <li class="text-gray-500"><span class="font-medium">End Time:</span> {{ event.end.dateTime ? new Date(event.end.dateTime).toLocaleString() : event.end.date }}</li>
            </ul>
          </li>
        </ul>
      </div>
      <form class="mt-4 px-8 py-4 bg-white rounded-lg shadow-md">
        <h3 class="text-lg font-medium mb-4">New Event</h3>
        <div class="mb-4">
          <label class="block text-gray-700 font-medium mb-2" for="summary">Summary</label>
          <input class="border border-gray-400 p-2 w-full rounded-lg" type="text" id="summary" v-model="newEvent.summary">
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 font-medium mb-2" for="location">Location</label>
          <input class="border border-gray-400 p-2 w-full rounded-lg" type="text" id="location" v-model="newEvent.location">
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 font-medium mb-2" for="start-time">Start Time</label>
          <input class="border border-gray-400 p-2 w-full rounded-lg" type="datetime-local" id="start-time" v-model="newEvent.start.dateTime">
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 font-medium mb-2" for="end-time">End Time</label>
          <input class="border border-gray-400 p-2 w-full rounded-lg" type="datetime-local" id="end-time" v-model="newEvent.end.dateTime">
        </div>
        <button class="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600" @click.prevent="addEvent()">Add Event</button>
      </form>
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
      selectedDate: new Date(),
      jsonData: [],
      newEvent: {
        summary: "",
        location: "",
        start: "",
        end: ""
      }
    }
  },
  mounted() {
    axios.get('http://localhost:3001/calendar/api')
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
          title: event.description,
          start: new Date(event.start.dateTime),
          end: new Date(event.end.dateTime),
        };
      });
    }
  },
  methods: {
        async addEvent() {
  // Convert start and end times to ISO string format
  const start = new Date(this.newEvent.start.dateTime).toISOString();
  const end = new Date(this.newEvent.end.dateTime).toISOString();

  // Create a new event object with the updated start and end times
  const event = {
    summary: this.newEvent.summary,
    location: this.newEvent.location,
    start: {
      dateTime: start,
    },
    end: {
      dateTime: end,
    },
  };

  // Call the server to save the new event
  await this.$axios.post('/calendar', event);

  // Clear the form
  this.newEvent = { summary: '', location: '', start: { dateTime: '' }, end: { dateTime: '' } };

  // Reload the events list
  await this.loadEvents();
}
  }
}
</script>