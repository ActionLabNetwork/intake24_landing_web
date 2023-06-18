<template>
  <v-container fluid class="justify-center">
      <v-row class="justify-center">
        <article class="text-center">
          <p class="heading mb-3">Interested in using Intake24?</p>
          <p class="subheading mb-5">Get in touch with us to find out more.</p>
          <v-btn class="cta-btn text-primary rounded-pill">Contact Us</v-btn>
        </article>
      </v-row>
  </v-container>
</template>

<style scoped>
.heading {
  font-size: 22px;
  font-weight: bold;
}

.subheading {
  font-size: 16px;
}

.cta-btn {
  height: 40px;
  font-size: 18px;
}

@media (min-width: 960px) {
  .heading {
    font-size: 30px;
  }

  .subheading {
    font-size: 20px;
  }

  .cta-btn {
    height: 50px;
    font-size: 20px;
  }
}
</style>
