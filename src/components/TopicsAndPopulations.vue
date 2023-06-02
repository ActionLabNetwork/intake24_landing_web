<template>
  <v-container fluid>
    <!-- Topics and populations cards -->
    <v-row class="d-flex justify-center">
      <div class="d-flex flex-column align-center">
        <p class="subheading text-center mb-5">Used for examining diverse topics and populations</p>
        <div class="d-flex flex-column flex-md-row cards">
          <BaseCard title="Topics" :listItems="topicsListItems" :icon="TopicsIcon" class="mb-5 mb-md-0" />
          <BaseCard title="Population" :listItems="populationListItems" :icon="PopulationIcon"/>
        </div>
      </div>
    </v-row>
    <!-- Spacer -->
    <v-row class="d-flex justify-center">
      <div class="spacer d-flex justify-space-between ma-10">
        <div></div>
        <v-divider vertical></v-divider>
        <div></div>
      </div>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import BaseCard from '@/components/BaseCard.vue'
import TopicsIcon from '@/assets/topics-icon.svg'
import PopulationIcon from '@/assets/population-icon.svg'

const topicsListItems = [{ id: 1, text: 'Gestational Diabetes' }, { id: 2, text: 'Food insecurity' }, { id: 3, text: 'Sarcopenia' }, { id: 4, text: 'Mindful eating' }, { id: 5, text: 'Treatment of type II diabetes' }, { id: 6, text: 'School food standards' }, { id: 7, text: 'Weight-loss maintenance' }]

const populationListItems = [{ id: 1, text: 'Children' }, { id: 2, text: 'Older adults' }, { id: 3, text: 'Pregnant and Post-partnum women' }, { id: 4, text: 'Athletes' }, { id: 5, text: 'Patient groups' }, { id: 6, text: 'General Population' }]
</script>

<style scoped>
img {
  width: 300px;
}

@media (min-width: 960px) {
  .spacer {
    height: 200px;
  }

  .subheading {
    inline-size: 500px;
    font-weight: bold;
    font-size: 20px;
  }

  .cards {
    gap: 50px;
  }

  img {
    width: 700px;
  }
}
</style>
