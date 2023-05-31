<template>
  <v-app-bar flat class="py-3">
    <v-app-bar-title>
      <div class="d-flex justify-space-around align-center pt-10 gap-2">
        <div>
          <img src="@/assets/logo.png" alt="logo" class="logo" />
        </div>
        <div>
          <Navbar />
        </div>
      </div>
    </v-app-bar-title>
  </v-app-bar>
</template>

<script lang="ts" setup>
import Navbar from '@/components/Navbar.vue';
</script>

<style scoped>
.logo {
  height: 2em;
}
</style>

