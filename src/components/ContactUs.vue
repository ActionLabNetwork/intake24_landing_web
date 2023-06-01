<template>
  <v-container fluid class="container">
    <v-responsive class="px-4 mt-10">
      <div class="d-flex flex-column align-center">
        <div class="text-center mb-5">
          <p class="heading mb-3">Interested to use Intake24?</p>
          <p class="subheading">Get in touch with us to know more.</p>
        </div>
        <v-btn class="text-primary rounded-pill">Contact Us</v-btn>
      </div>
    </v-responsive>
  </v-container>
</template>

<style scoped>
.heading {
  font-size: 22px;
  font-weight: bolder;
}
.subheading {
  font-size: 16px;
}

@media (min-width: 960px) {
  .heading {
    font-size: 30px;
    font-weight: bolder;
  }
  .subheading {
    inline-size: 500px;
  }
}
</style>
