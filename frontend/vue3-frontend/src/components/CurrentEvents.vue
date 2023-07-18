<template>
  <div class="flex h-screen bg-gray-400">
    <div class="w-3/4 mx-auto mt-12">
      <div class="px-8 py-4">
        <div v-for="(event, index) in jsonData" :key="event.id" :class="event.customClass">
          <div class="bg-white rounded-lg shadow-md mb-4 p-4 w-full">
            <p class="text-gray-700 font-medium">{{ event.summary }}</p>
            <div class="grid grid-cols-2 gap-4 mt-4">
              <div class="text-gray-500"><i class="fas fa-map-marker-alt"></i><span class="font-medium ml-2">Location:</span> {{ event.location }}</div>
              <div class="text-gray-500"><i class="far fa-clock"></i><span class="font-medium ml-2">Start Time:</span> {{ event.start.dateTime ? new Date(event.start.dateTime).toLocaleString('en-US', {timeZone: 'UTC', hour12: false, hour: 'numeric', minute: 'numeric'}) : event.start.date }}</div>
              <div class="text-gray-500"><i class="far fa-clock"></i><span class="font-medium ml-2">End Time:</span> {{ event.end.dateTime ? new Date(event.end.dateTime).toLocaleString('en-US', {timeZone: 'UTC', hour12: false, hour: 'numeric', minute: 'numeric'}) : event.end.date }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CurrentEvents',
  props: ['jsonData']
}
</script>