<template>
  <v-container fluid class="container">
    <!-- Impact and studies logo -->
    <v-row class="d-flex justify-center">
      <div class="text-center mb-5">
        <p class="heading mb-10">Intake24's impact</p>
        <p class="subheading">Used in a range of studies across different countries from undergraduate studies to government national surveys:</p>
      </div>
    </v-row>

    <v-row class="d-flex justify-center">
      <figure>
        <img src="@/assets/intake-impacts-logos.svg" alt="Intake24's Impact Logo" loading="lazy"/>
      </figure>
    </v-row>
    <!-- Spacer -->
    <v-row class="d-flex justify-center">
      <div class="spacer d-flex justify-space-between my-10">
        <div></div>
        <v-divider vertical></v-divider>
        <div></div>
      </div>
    </v-row>
    <TopicsAndPopulations />
    <CountriesFoodDatabases />
  </v-container>
</template>

<script setup lang="ts">
import TopicsAndPopulations from '@/components/TopicsAndPopulations.vue'
import CountriesFoodDatabases from '@/components/CountriesFoodDatabases.vue'
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
  inline-size: 250px;
  font-weight: bold;
  font-size: 16px;
}
.cards {
  gap: 50px;
}
img {
  width: 300px;
}
@media (min-width: 960px) {
  .heading {
    font-size: 30px;
    font-weight: bolder;
  }
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
