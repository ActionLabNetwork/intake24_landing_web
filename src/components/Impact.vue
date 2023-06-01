<template>
  <v-container fluid class="container">
    <v-responsive class="px-4 mt-10">
      <div class="d-flex align-center flex-column">
        <div class="d-flex flex-column align-center">
          <div class="text-center mb-5">
            <p class="heading mb-10">Intake24's impact</p>
            <p class="subheading">Used in a range of studies across different countries from undergraduate studies to government national surveys:</p>
          </div>
          <img src="@/assets/intake-impacts-logo.png" alt="Intake24's Impact Logo"/>
        </div>
        <div class="spacer d-flex justify-space-between ma-10">
          <div></div>
          <v-divider vertical></v-divider>
          <div></div>
        </div>
        <div class="d-flex flex-column align-center">
          <p class="subheading text-center mb-5">Used for examining diverse topics and populations</p>
          <div class="d-flex cards">
            <BaseCard title="Topics" :listItems="topicsListItems" />
            <BaseCard title="Population" :listItems="populationListItems"/>
          </div>
        </div>
        <div class="spacer d-flex justify-space-between ma-10">
          <div></div>
          <v-divider vertical></v-divider>
          <div></div>
        </div>
        <div class="text-center">
          <p class="subheading mx-auto mb-10">Localised food databases for different countries: United Kingdom, New Zealand, Australia, Portugal, Denmark and the United Arab Emirates, Malaysia*, and South Asia (*in development)</p>
          <img src="@/assets/flags-image.png" />
        </div>
      </div>
    </v-responsive>
  </v-container>
</template>

<script setup lang="ts">
import BaseCard from '@/components/BaseCard.vue'

const topicsListItems = [{ id: 1, text: 'Gestational Diabetes' }, { id: 2, text: 'Food insecurity sarcopenia' }, { id: 3, text: 'Mindful eating' }, { id: 4, text: 'Treatment of type II diabetes' }, { id: 5, text: 'School food standards' }, { id: 6, text: 'Weight-loss maintenance' }]

const populationListItems = [{ id: 1, text: 'Older adults' }, { id: 2, text: 'Pregnant and Post-partnum women' }, { id: 3, text: 'Athletes' }, { id: 4, text: 'Patient groups' }]
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
  font-weight: bold;
  font-size: 18px;
}

.cards {
  gap: 50px;
}
</style>
