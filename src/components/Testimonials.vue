<template>
  <v-container fluid>
    <v-row class="justify-center">
      <div class="d-flex flex-column align-center text-center mb-10">
        <p class="heading mb-3">Here's what participants <br/> say about Intake24</p>
        <p class="subheading">Feedback from participants during field-testing in the Scottish Health Survey population (ages 11 to 89 years) of Intake24 in those aged 11+ years (up to and including older adults) showed the majority of people found the system user-friendly, enjoyable to use and felt it accurately captured their dietary intake.</p>
      </div>
    </v-row>
    <v-row class="justify-center">
      <BaseCarousel />
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import BaseCarousel from '@/components/BaseCarousel.vue'
</script>

<style scoped>
.heading {
  font-size: 24px;
  font-weight: bolder;
}

.spacer {
  height: 150px;
}

.subheading {
  inline-size: 70vw;
  font-size: 16px;
}

@media (min-width: 960px) {
  .heading {
    font-size: 30px;
  }

  .subheading {
    inline-size: 50vw;
    font-size: 18px;
  }
}
</style>
