<template>
  <v-container fluid class="container">
    <v-responsive class="px-4 mt-10">
      <div class="d-flex flex-column align-center pb-2">
        <div class="text-center mb-5">
          <p class="heading mb-3">Interested to use Intake24?</p>
          <p class="subheading">Get in touch with us to know more.</p>
        </div>
        <v-btn class="cta-btn text-primary rounded-pill">Contact Us</v-btn>
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
.cta-btn {
    height: 40px;
    font-size: 18px;
  }

@media (min-width: 960px) {
  .heading {
    font-size: 30px;
    font-weight: bolder;
  }
  .subheading {
    font-size: 20px;
  }
  .cta-btn {
    height: 50px;
    font-size: 20px;
  }
}

@media (min-width: 1280px) {
  .heading {
    font-size: 30px;
    font-weight: bolder;
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
