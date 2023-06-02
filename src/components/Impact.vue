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
      <img src="@/assets/intake-impacts-logos.svg" alt="Intake24's Impact Logo"/>
    </v-row>
    <!-- Spacer -->
    <v-row class="d-flex justify-center">
      <div class="spacer d-flex justify-space-between my-10">
        <div></div>
        <v-divider vertical></v-divider>
        <div></div>
      </div>
    </v-row>
  </v-container>
</template>

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
  font-size: 18px;
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
