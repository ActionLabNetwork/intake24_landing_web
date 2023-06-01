<template>
  <v-container fluid class="container">
    <v-responsive class="px-4 mt-10">
      <div class="d-flex flex-column align-center text-center mb-10">
        <p class="heading mb-3">Here's what participants <br/> say about Intake24</p>
        <p class="subheading">Feedback from participants in the field test of Intake24 in those aged 11+ years (up to and including older adults) showed the majority of people found the system user-friendly, enjoyable to use and felt it accurately captured their dietary intake.</p>
      </div>
      <BaseCarousel />
    </v-responsive>
  </v-container>
</template>

<script setup lang="ts">
import BaseCarousel from '@/components/BaseCarousel.vue'
</script>

<style scoped>
.heading {
  font-size: 30px;
  font-weight: bolder;
}

.spacer {
  height: 150px;
}

.subheading {
  inline-size: 500px;
  font-size: 18px;
}

.cards {
  gap: 50px;
}
</style>
