<template>
  <v-container fluid class="container">
    <!-- Impact and studies logo -->
    <v-row class="justify-center">
      <article class="text-center mb-5">
        <p class="heading mb-10">Intake24's impact</p>
        <p class="subheading">Used in a range of studies across different countries from undergraduate studies to government national surveys:</p>
      </article>
    </v-row>

    <v-row class="justify-center">
      <figure>
        <v-img class="v-img mx-auto" src="@/assets/intake-impacts-logos.png" alt="Intake24's Impact Logo" />
      </figure>
    </v-row>
    <!-- Spacer -->
    <v-row class="justify-center">
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
  font-weight: bold;
}

.spacer {
  height: 150px;
}

.subheading {
  inline-size: 75vw;
  font-weight: 500;
  font-size: 16px;
}

.cards {
  gap: 50px;
}

.v-img {
  width: 70%;
}

@media (min-width: 960px) {
  .heading {
    font-size: 30px;
  }

  .spacer {
    height: 200px;
  }

  .subheading {
    inline-size: 50vw;
    font-size: 20px;
  }
}
</style>
