<template>
  <v-container fluid>
    <!-- Spacer -->
    <v-row class="justify-center">
      <div class="spacer d-flex justify-space-between ma-10">
        <div></div>
        <v-divider vertical></v-divider>
        <div></div>
      </div>
    </v-row>
    <v-row class="justify-center">
      <div class="text-center">
        <p class="subheading mx-auto mb-10">Localised food databases for different countries: United Kingdom, New Zealand, Australia, Portugal, Denmark and the United Arab Emirates, Japan*, Indonesia*, Malaysia*, and South Asia (*in development)</p>
        <img src="@/assets/flags-image.svg" alt="Flags image" loading="lazy" />
      </div>
    </v-row>
  </v-container>
</template>

<style scoped>
.subheading {
  inline-size: 60vw;
  font-weight: bold;
  font-size: 16px;
}

.spacer {
  height: 200px;
}

img {
  width: 80%;
}

@media (min-width: 960px) {
  .subheading {
    font-size: 20px;
  }
}
</style>
