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
    <section class="bg-primary">
      <ContactUs />
    </section>
    <section>
      <Impact />
    </section>
    <section>
    </section>
    <section>
      <Testimonials />
    </section>
    <section>
      <CTA />
    </section>
  </v-main>
</template>

<script lang="ts" setup>
import Hero from '@/components/Hero.vue'
import VideoShowcase from '@/components/VideoShowcase.vue'
import Features from '@/components/Features.vue'
import HowItWorks from '@/components/HowItWorks.vue';
import ContactUs from '@/components/ContactUs.vue';
import Impact from '@/components/Impact.vue'
import Testimonials from '@/components/Testimonials.vue';
import CTA from '@/components/CTA.vue';
</script>

<style scoped>
section:nth-child(even) {
  background-color: #f8f8f8;
}

.container {
  padding: 0 280px;
}

section {
  padding-top: 25px;
  padding-bottom: 70px;
}
</style>
