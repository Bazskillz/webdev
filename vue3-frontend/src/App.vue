<template>
  <div id="app">
    <div>
      <div class="main bg-gray-400 min-h-screen z-0">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { RouterView } from 'vue-router'


const isSideMenuOpen = ref(false);
</script>
