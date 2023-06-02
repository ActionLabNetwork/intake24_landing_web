<template>
  <v-container fluid class="container">
    <v-row class="d-flex justify-center">
      <div class="wrapper d-flex flex-column flex-md-row justify-space-between align-center bg-primary rounded-xl">
        <div class="d-flex flex-column align-center">
          <p class="heading mb-5">Why don't you give it a try and see if it fits your needs?</p>
          <v-btn class="btn rounded-pill text-primary mb-10" href="https://survey.intake24.dev/demo/generate-user" target="_blank">
            Try a demo
          </v-btn>
        </div>
        <div>
          <figure>
            <img src="@/assets/cta-2-image.svg" alt="CTA Image" />
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
  line-height: 1.1em;
}

img {
  width: 300px;
}

@media only screen and (min-width: 600px) {
  .wrapper {
    padding: 40px 30px;
    width: 700px;
  }

  .heading {
    font-size: 30px;
    font-weight: bold;
    inline-size: 500px;
    line-height: 1.1em;
  }

  img {
    width: 400px;
  }

  .btn {
    height: 50px;
    font-size: 20px;
  }
}

@media only screen and (min-width: 960px) {
  .wrapper {
    padding: 40px 30px;
    width: 1000px;
  }

  .heading {
    font-size: 30px;
    font-weight: bold;
    inline-size: 500px;
    line-height: 1.1em;
  }

  img {
    width: 400px;
  }

  .btn {
    height: 50px;
    font-size: 20px;
  }
}

@media only screen and (min-width: 1280px) {
  .wrapper {
    width: 1200px;
    padding: 40px 30px;
  }

  .heading {
    font-size: 30px;
    font-weight: bold;
    inline-size: 500px;
    line-height: 1.1em;
  }

  img {
    width: 500px;
  }

  .btn {
    height: 50px;
    font-size: 20px;
  }
}
</style>
