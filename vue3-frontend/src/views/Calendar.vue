<template>
  <navbar />
  <div class="flex h-screen bg-gray-400">
    <div class="w-3/4 mx-auto mt-12">
      <div class="bg-white rounded-lg shadow-md">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-8 py-4">
          <div v-for="(event, index) in jsonData" :key="event.id" :class="{ 'bg-gray-100': index % 2 === 0, 'bg-white': index % 2 !== 0 }">
            <div class="bg-white rounded-lg shadow-md p-4">
              <p class="text-gray-700 font-medium">{{ event.summary }}</p>
              <div class="grid grid-cols-2 gap-4 mt-4">
                <div class="text-gray-500"><span class="font-medium">Location:</span> {{ event.location }}</div>
                <div class="text-gray-500"><span class="font-medium">Start Time:</span> {{ event.start.dateTime ? new Date(event.start.dateTime).toLocaleString('en-US', {timeZone: 'UTC', hour12: false, hour: 'numeric', minute: 'numeric'}) : event.start.date }}</div>
                <div class="text-gray-500"><span class="font-medium">End Time:</span> {{ event.end.dateTime ? new Date(event.end.dateTime).toLocaleString('en-US', {timeZone: 'UTC', hour12: false, hour: 'numeric', minute: 'numeric'}) : event.end.date }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button class="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 mt-4" @click.prevent="showForm = !showForm">{{ showForm ? 'Hide' : 'Add New Item' }}</button>
      <form v-if="showForm" class="mt-4 px-8 py-4 bg-white rounded-lg shadow-md">
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
          <VueDatePicker class="border border-gray-400 p-2 w-full rounded-lg" id="start-time" v-model="newEvent.start.dateTime"/>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 font-medium mb-2" for="end-time">End Time</label>
          <VueDatePicker class="border border-gray-400 p-2 w-full rounded-lg" id="end-time" v-model="newEvent.end.dateTime"/>
        </div>
        <button class="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600" @click.prevent="addEvent()">Add Event</button>
      </form>
    </div>
  </div>
</template> 

<script>
import axios from 'axios';
import Navbar from '../components/navbar.vue';
import { ref } from 'vue';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'



export default {
  components: {
    navbar: Navbar
  },
  data() {
  return {
    showForm: false,
    selectedDate: new Date(),
    jsonData: [],
    newEvent: {
      summary: "",
      location: "",
      start: {
        dateTime: ""
      },
      end: {
        dateTime: ""
      }
    },
    dateFormat: 'dd-MM-yyyyTHH:mm'
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
  await axios.post('http://localhost:3001/calendar/api', event);

  // Clear the form
  this.newEvent = { summary: '', location: '', start: { dateTime: '' }, end: { dateTime: '' } };

  // Reload the events list
  await this.loadEvents();
}
  }
}
</script>