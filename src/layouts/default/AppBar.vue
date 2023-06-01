<template>
  <v-app-bar flat class="py-3">
    <v-app-bar-title>
      <div class="d-flex justify-space-around align-center pt-10 gap-2">
        <div>
          <img src="@/assets/logo.png" alt="logo" class="logo" />
        </div>
        <div v-if="display.lgAndUp">
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
            <v-app-bar-nav-icon
              @click.stop="drawer = !drawer"
            />
          </v-list>
        </div>
      </div>
    </v-app-bar-title>
  </v-app-bar>
  <v-navigation-drawer v-model="drawer" location="right" temporary class="pa-4">
    <v-list :items="navOptions">
      <v-list-item
        v-for="option in navOptions"
        :key="option.id"
        :title="option.name"
        @click="drawer = !drawer"
      />
    </v-list>
    <v-btn variant="outlined" class="rounded-pill text-primary pb-2 pt-2">
      Create Account
    </v-btn>
  </v-navigation-drawer>
</template>

<script lang="ts" setup>
import Navbar from '@/components/Navbar.vue';
import { ref } from 'vue';
import { useDisplay } from 'vuetify/lib/framework.mjs';

const display = useDisplay()
const drawer = ref(false);

const navOptions = [
  { id: '1', name: 'About' },
  { id: '2', name: 'Features' },
  { id: '3', name: 'Resources' },
  { id: '4', name: 'Contact Us' }
];
</script>

<style scoped>
.logo {
  height: 2em;
}

.navbar {
  gap: 10px;
}

btn {
  text-transform: unset
}
</style>

