<template>
  <v-main class="container pa-5">
    <section>
      <Hero />
    </section>
    <section>
      <VideoShowcase />
    </section>
    <section>
      <Features />
    </section>
    <section>
      <HowItWorks />
    </section>
  </v-main>
</template>

<script lang="ts" setup>
import Hero from '@/components/Hero.vue'
import VideoShowcase from '@/components/VideoShowcase.vue'
import Features from '@/components/Features.vue'
import HowItWorks from '@/components/HowItWorks.vue';
</script>

<style scoped>
.container {
  padding: 0 280px;
}

section {
  padding-top: 25px;
  padding-bottom: 70px;
}
</style>
