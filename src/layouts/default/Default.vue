<template>
  <v-app>
    <v-main>
      <default-bar />
      <default-view />
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import DefaultBar from './AppBar.vue'
import DefaultView from './View.vue'
</script>

<style scoped>
  .d-flex {
    row-gap: 10em;
  }
</style>
