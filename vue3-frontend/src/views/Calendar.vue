<template>
  <navbar/>
  <div class="w-3/4 mx-auto mt-12">
    <button
      class="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 mt-4"
      @click.prevent="showForm = !showForm"
    >
      {{ showForm ? 'Hide' : 'Add New Item' }}
    </button>
    <NewEventForm v-if="showForm" />
  </div>
  <CurrentEvents :jsonData="jsonData"/>
</template>

<script>
import axios from 'axios';
import { ref } from 'vue';
import NewEventForm from '../components/NewEventForm.vue';
import CurrentEvents from '../components/CurrentEvents.vue';
import navbar from '../components/navbar.vue';

export default {
  components: {
  NewEventForm,
  CurrentEvents,
  navbar
},
  data() {
    return {
      showForm: false,
      jsonData: [],
    };
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
      return this.jsonData.map(event => ({
        id: event.id,
        title: event.description,
        start: new Date(event.start.dateTime),
        end: new Date(event.end.dateTime),
      }));
    }
  },
  methods: {
    closeForm() {
      this.showForm = false;
    },
    async loadEvents() {
      try {
        const response = await axios.get('http://localhost:3001/calendar/api');
        this.jsonData = response.data;
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>