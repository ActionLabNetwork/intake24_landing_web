<template>
  <v-container fluid class="ma-0 pa-0">
    <v-row v-if="mdAndUp" class="bg-primary flex-column flex-lg-row justify-center">
      <v-col cols="12" md="4" offset-md="1">
        <!-- Logo -->
        <div class="d-flex align-items-center pa-5">
          <v-img :max-width="150" src="@/assets/logo-white.png" alt="Intake24 Logo" />
        </div>
      </v-col>
      <v-col cols="12" md="12" lg="6" class="d-flex flex-column flex-md-row justify-space-evenly">
        <!-- Links -->
        <div class="mr-md-5 mb-5">
          <v-list class="d-flex flex-column bg-primary links">
            <v-list-item
              v-for="option in navOptions"
              :key="option.id"
              :title="option.name"
              density="compact"
            >
            </v-list-item>
          </v-list>
        </div>
        <!-- Privacy and Terms & Conditions -->
        <div class="mr-md-5 mb-5">
          <v-list density="compact" class="d-flex flex-column bg-primary">
            <v-list-item
              title="Localisation Toolkit"
            />
            <v-list-item
              title="Science Behind"
            />
            <v-list-item
              title="Publications"
            />
          </v-list>
        </div>
        <!-- Collaboration statement-->
        <div class="d-flex flex-column pt-md-4 collaboration-stmt">
          <p class="pl-4">Intake24 is maintained through a collaboration between Monash, Cambridge and Newcastle Universities.</p>
        </div>
      </v-col>
    </v-row>
    <v-row class="copyright">
      <v-col>
        <div class="py-2 text-center">
          <p class="text-white">
            <small>
              <strong>
                Intake24 Copyright {{ new Date().getFullYear() }}. All Rights Reserved.
              </strong>
            </small>
          </p>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
export default {
  data: () => ({
    icons: [
      'mdi-twitter',
    ],
  }),
}
</script>

<script setup lang="ts">
import { computed } from 'vue'
import { useDisplay } from 'vuetify/lib/framework.mjs';

const display = useDisplay()
const mdAndUp = computed(() => display.mdAndUp.value)

const navOptions = [{ id: '1', name: 'About' }, { id: '2', name: 'Features' }, { id: '3', name: 'Resources' }, { id: '4', name: 'Contact Us' }]
</script>

<style scoped>
.copyright {
  background-color: #E2622A;
}

.copyright p {
  color: white;
}

.links {
  margin: 0
}

.row {
  overflow-y: hidden;
}

.collaboration-stmt {
  max-width: 250px;
}
</style>
