<script setup lang="ts">
import TheFooter from './components/TheFooter.vue';
import TheHeader from './components/TheHeader.vue';

</script>

<template>
  <div class="min-h-screen flex flex-col">
    <TheHeader/>
    <div class="flex-grow">
      <RouterView />
    </div>
    <TheFooter/>
  </div>
</template>