<template>
  <v-row class="d-flex justify-center">
    <div class="text-center">
      <p class="subheading mx-auto mb-10">Localised food databases for different countries: United Kingdom, New Zealand, Australia, Portugal, Denmark and the United Arab Emirates, Japan*, Indonesia*, Malaysia*, and South Asia (*in development)</p>
      <img src="@/assets/flags-image.svg" alt="Flags image" />
    </div>
  </v-row>
</template>

<style scoped>
.subheading {
  inline-size: 250px;
  font-weight: bold;
  font-size: 16px;
}
img {
  width: 300px;
}

@media (min-width: 960px) {
  .subheading {
    inline-size: 500px;
    font-weight: bold;
    font-size: 20px;
  }
  img {
    width: 700px;
  }
}
</style>
