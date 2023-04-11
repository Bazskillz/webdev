<template>
  <div class="fixed inset-0 z-50 overflow-y-auto">
    <div class="flex items-center justify-center min-h-80 px-4">
      <div class="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75"></div>
      <div class="z-10 inline-block w-full max-w-3xl overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-lg">
        <div class="bg-white px-4 py-2">
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
              <VueDatePicker class="border border-gray-400 p-2 w-full rounded-lg" id="start-time" v-model="newEvent.start.dateTime" :pickerOptions="{ zIndex: 9999 }" />
            </div>
            <div class="mb-4">
              <label class="block text-gray-700 font-medium mb-2" for="end-time">End Time</label>
              <VueDatePicker class="border border-gray-400 p-2 w-full rounded-lg" id="end-time" v-model="newEvent.end.dateTime" :pickerOptions="{ zIndex: 9999 }" />
            </div>
              <button class="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600" @click="addEvent()">Add Event</button>
            <div class="bg-gray-100 px-4 py-2 flex justify-end">
              <button class="px-4 py-2 font-semibold text-white bg-gray-500 hover:bg-gray-600 rounded-lg" @click="$emit('close')">Close</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import VueDatePicker from '@vuepic/vue-datepicker';

export default {
  name: "NewEventForm",
  components: {
    VueDatePicker
  },
  data() {
    return {
      showForm: true,
      newEvent: {
        summary: "",
        location: "",
        start: {
          dateTime: ""
        },
        end: {
          dateTime: ""
        }
      }
    }
  },
  methods: {
    async addEvent() {
  const start = new Date(this.newEvent.start.dateTime).toISOString();
  const end = new Date(this.newEvent.end.dateTime).toISOString();

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
  console.log(event)
  try {
    await axios.post('http://localhost:3001/calendar/api', event);
    this.newEvent = {
      summary: '',
      location: '',
      start: { dateTime: '' },
      end: { dateTime: '' },
    };
    await this.loadEvents();
  } catch (error) {
    console.error(error);
  }
  this.$emit('close');
    }
  }
};
</script>


