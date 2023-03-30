<template>
  <div id="app">
    <div>
      <div>
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
