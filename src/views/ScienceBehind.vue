<template>
  <v-app>
    <section class="pa-0">
      <ScienceBehindHero />
    </section>
    <footer class="footer">
      <Footer />
    </footer>
  </v-app>
</template>

<script lang="ts" setup>
import Footer from "@/components/Footer.vue";
import ScienceBehindHero from "@/components/ScienceBehind/ScienceBehindHero.vue";
</script>
