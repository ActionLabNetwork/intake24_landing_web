<template>
  <section class="d-flex flex-column">
    <div class="bg-primary d-flex w-100 align-start justify-space-around px-4 py-10">
      <!-- Logo -->
      <div>
        <img width=150 src="@/assets/logo-white.png" alt="Intake24 Logo" />
      </div>
      <div class="d-flex justify-space-evenly">
        <!-- Links -->
        <div>
          <v-list class="d-flex flex-column bg-primary navbar pt-0">
            <v-list-item
              v-for="option in navOptions"
              :key="option.id"
              :title="option.name"
            >
            </v-list-item>
          </v-list>
        </div>
        <!-- Privacy and Terms & Conditions -->
        <div>
          <v-list class="d-flex flex-column bg-primary align-center">
            <v-list-item
              title="Privacy Policy"
            />
            <v-list-item
              title="Terms & Conditions"
            />
          </v-list>
        </div>
        <!-- Social media icons -->
        <div class="d-flex flex-column">
          <p class="pl-3">Follow us on:</p>
          <div>
            <v-btn
              v-for="icon in icons"
              :key="icon"
              :icon="icon"
              variant="plain"
              size="small"
            ></v-btn>
          </div>
        </div>
      </div>
    </div>
    <div class="copyright px-4 py-2 text-center">
      <p class="text-white">
        <strong>Intake24 Copyright {{ new Date().getFullYear() }}. All Rights Reserved.</strong>
      </p>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  data: () => ({
    icons: [
      'mdi-facebook',
      'mdi-instagram',
      'mdi-twitter',
      'mdi-youtube',
    ],
  }),
}
</script>

<script setup lang="ts">
const navOptions = [{ id: '1', name: 'About' }, { id: '2', name: 'Features' }, { id: '3', name: 'Resources' }, { id: '4', name: 'Contact Us' }]
</script>

<style scoped>
  .copyright {
    background-color: #E2622A;
  }
</style>
