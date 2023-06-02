<template>
  <v-app>
    <section class="pa-0">
      <Hero />
    </section>
    <section id="about">
      <VideoShowcase  />
    </section>
    <section id="features">
      <Features />
    </section>
    <section id="resources">
      <HowItWorks  />
    </section>
    <section class="bg-primary" id="contact">
      <ContactUs />
    </section>
    <section>
      <Impact />
    </section>
    <section>
      <Testimonials />
    </section>
    <section>
      <CTA />
    </section>
  </v-app>
</template>

<script lang="ts" setup>
import Hero from '@/components/Hero.vue'
import VideoShowcase from '@/components/VideoShowcase.vue'
import Features from '@/components/Features.vue'
import HowItWorks from '@/components/HowItWorks.vue';
import ContactUs from '@/components/ContactUs.vue';
import Impact from '@/components/Impact.vue'
import TopicsAndPopulations from '@/components/TopicsAndPopulations.vue';
import CountriesFoodDatabases from '@/components/CountriesFoodDatabases.vue';
import Testimonials from '@/components/Testimonials.vue';
import CTA from '@/components/CTA.vue';
</script>

<style scoped>
section:nth-child(even) {
  background-color: #f8f8f8;
}

section {
  padding-top: 50px;
  padding-bottom: 70px;
}

@media only screen and (min-width: 960px) {
  section:last-child {
    margin-bottom: 0;
  }

  section:nth-child(even) {
    background-color: #f8f8f8;
  }

  section {
    padding-top: 50px;
    padding-bottom: 70px;
  }
}
</style>

<style>
html {
  scroll-behavior: smooth;
}
</style>
