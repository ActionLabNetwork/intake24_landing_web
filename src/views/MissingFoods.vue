<template>
  <v-app>
    <section class="pa-0">
      <MissingFoods />
    </section>
    <footer class="footer">
      <Footer />
    </footer>
  </v-app>
</template>

<script lang="ts" setup>
import Footer from '@/components/Footer.vue'
import MissingFoods from '@/components/HowToGuides/MissingFoods.vue'
</script>
