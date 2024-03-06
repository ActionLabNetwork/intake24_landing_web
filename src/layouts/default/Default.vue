<template>
  <v-layout class="d-flex flex-column">
    <default-bar />
    <default-view />
  </v-layout>
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
