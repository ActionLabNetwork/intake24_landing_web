<template>
  <v-list lines="one" class="d-flex flex-row align-center navbar">
    <v-list-item
      v-for="option in navOptions"
      :key="option.id"
      :title="option.name"
    >
    </v-list-item>
    <v-btn variant="outlined" class="rounded-pill text-primary pb-7 pt-3">
      Create Account
    </v-btn>
  </v-list>
</template>

<script setup lang="ts">
const navOptions = [{ id: '1', name: 'About' }, { id: '2', name: 'Features' }, { id: '3', name: 'Resources' }, { id: '4', name: 'Contact Us' }]
</script>

<style scoped>
.navbar {
  gap: 10px;
}
btn {
  text-transform: unset
}
</style>
