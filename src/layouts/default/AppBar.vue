<template>
  <v-app-bar flat>
    <v-app-bar-title>
      <div class="wrapper d-flex justify-space-around align-center py-5 gap-2">
        <!-- Dummy div for mobile view -->
        <div v-if="!mdAndUp"></div>
        <!-- Logo -->
        <div class="align-self-center">
          <img src="@/assets/logo.png" alt="logo" class="logo" />
        </div>
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
          <v-app-bar-nav-icon
            @click.stop="drawer = !drawer"
          />
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
import { onMounted, ref, computed } from 'vue';
import { useDisplay } from 'vuetify/lib/framework.mjs';

const display = useDisplay()
const drawer = ref(false);

const mdAndUp = computed(() => display.mdAndUp.value)

onMounted(() => {
  console.log('Mobile: ', display.mdAndUp.value)
})

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

