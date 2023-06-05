<template>
  <v-container fluid>
    <v-row class="justify-center">
      <div class="wrapper d-flex flex-column flex-md-row justify-space-evenly align-center bg-primary rounded-xl">
        <div class="d-flex flex-column align-center align-md-start">
          <p class="heading mb-5 text-md-left">Why don't you give it a try and see if it fits your needs?</p>
          <v-btn class="btn rounded-pill text-primary mb-10" href="https://survey.intake24.dev/demo/generate-user" target="_blank">
            Try a demo
          </v-btn>
        </div>
        <div>
          <figure>
            <v-img class="v-img" src="@/assets/cta-2-image.png" alt="CTA Image" />
          </figure>
        </div>
      </div>
    </v-row>
  </v-container>
</template>

<style scoped>
.wrapper {
  padding: 40px 30px;
  width: 400px;
}

.heading {
  font-size: 18px;
  text-align: center;
  font-weight: bold;
  line-height: 2;
}

.v-img {
  width: 300px;
}

@media only screen and (min-width: 600px) {
  .wrapper {
    width: 700px;
  }

  .heading {
    font-size: 30px;
    inline-size: 500px;
    line-height: 1;
  }

  .v-img {
    width: 400px;
  }

  .btn {
    height: 50px;
    font-size: 20px;
  }
}

@media only screen and (min-width: 960px) {
  .wrapper {
    width: 1000px;
  }

  .heading {
    font-size: 30px;
  }
}

@media only screen and (min-width: 1280px) {
  .wrapper {
    width: 1200px;
  }

  .heading {
    font-size: 30px;
  }

  .v-img {
    width: 500px;
  }
}
</style>
