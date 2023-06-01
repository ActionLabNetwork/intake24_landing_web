<template>
  <v-layout class="d-flex flex-column">
    <default-bar />
    <default-view />
    <footer-view class="layout" />
  </v-layout>
</template>

<script lang="ts" setup>
import DefaultBar from './AppBar.vue'
import DefaultView from './View.vue'
import FooterView from './Footer.vue'
</script>

<style scoped>
  .d-flex {
    row-gap: 10em;
  }
  .layout {
    overflow-x: hidden;
    overflow-y: hidden;
  }
</style>
