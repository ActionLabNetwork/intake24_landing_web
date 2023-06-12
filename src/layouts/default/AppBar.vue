<template>
  <v-app-bar flat>
    <v-app-bar-title>
      <div class="wrapper d-flex justify-space-around align-center py-5 gap-2">
        <!-- Dummy div for mobile view -->
        <div v-if="!mdAndUp"></div>
        <!-- Logo -->
        <figure class="align-self-center">
          <v-img src="@/assets/logo.png" width="200" alt="logo" class="logo" loading="lazy" />
        </figure>
        <!-- Navbar -->
        <nav v-if="mdAndUp">
          <v-list lines="one" class="d-flex flex-row align-center navbar">
            <v-list-item
              v-for="option in navOptions"
              :key="option.id"
              :title="option.name"
              :href="option.link"
            >
            </v-list-item>
            <v-btn variant="outlined" class="rounded-pill text-primary pb-7 pt-3" href="https://survey.intake24.dev/demo/generate-user" target="_blank">
              Create Account
            </v-btn>
          </v-list>
        </nav>
        <!-- Hamburger button -->
        <div v-if="!mdAndUp">
          <figure @click.stop="drawer = !drawer">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="currentColor" d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"/></svg>
          </figure>
        </div>
      </div>
    </v-app-bar-title>
  </v-app-bar>
  <!-- Navigation drawer -->
  <v-navigation-drawer v-model="drawer" location="right" temporary class="pa-4">
    <aside>
      <v-list :items="navOptions">
        <v-list-item
          v-for="option in navOptions"
          :key="option.id"
          :title="option.name"
          :href="option.link"
          @click="drawer = !drawer"
        />
      </v-list>
      <v-btn variant="outlined" class="rounded-pill text-primary mt-3 ml-3 mb-5 pb-2 pt-2" href="https://survey.intake24.dev/demo/generate-user" target="_blank">
        Create Account
      </v-btn>
      <v-divider />
    </aside>
  </v-navigation-drawer>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';
import { useDisplay } from 'vuetify/lib/framework.mjs';

const display = useDisplay()
const drawer = ref(false);

const mdAndUp = computed(() => display.mdAndUp.value)

const navOptions = [
  { id: '1', name: 'About', link: '#about' },
  { id: '2', name: 'Features', link: '#features' },
  { id: '3', name: 'Resources', link: '#resources' },
  { id: '4', name: 'Contact Us', link: '#contact' }
];
</script>

<style scoped>
.logo {
  height: 2em;
}

.navbar {
  gap: 10px;
}
</style>

