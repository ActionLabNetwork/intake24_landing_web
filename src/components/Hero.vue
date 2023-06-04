<template>
  <v-container fluid class="pt-md-15">
    <v-row no-gutters class="d-flex align-center">
      <!-- Text -->
      <v-col cols="12" md="5" lg="4" offset="0" offset-md="1" class="mb-10 text-center text-md-left">
        <div>
          <div class="text-wrapper">
            <div class="heading-container">
              <figure>
                <img src="@/assets/heading-decorator.svg" alt="" width="20" class="heading-decorator border" />
              </figure>
              <h1 class="heading">
                Easy way to <br/> measure what <br /> people eat
              </h1>
            </div>
            <h2 class="subheading">
              Intake24 is an open-source self-completed computerised dietary recall system based on the multiple-pass 24-hour recall.
            </h2>
          </div>
          <v-btn variant="outlined" class="cta-btn rounded-pill mt-5 bg-primary" href="https://survey.intake24.dev/demo/generate-user" target="_blank">
            Try a Demo
          </v-btn>
        </div>
      </v-col>
      <!-- Hero Image -->
      <v-col cols="12" md="6" class="mx-md-auto">
        <div class="hero-image mx-auto">
          <figure>
            <img src="@/assets/hero.svg" alt="Hero image" />
          </figure>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.main-wrapper {
  margin-top: 20px;
}

.heading-container {
  position: relative;
}

.text-wrapper {
  position: relative;
  overflow-wrap: break-word;
  display: flex;
  flex-direction: column;
  gap: 1.2em;
  padding-top: 20px;
}

.hero-image {
  width: 80%;
  margin: 0 auto;
}

.heading {
  font-size: 32px;
  font-weight: bold;
  line-height: 1;
}

.heading-container {
  position: relative;
}

.heading-decorator {
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-110px);
  width: 20px;
}

.subheading {
  font-size: 14px;
  font-weight: 500;
  margin: 0 auto;
  width: 300px;
}

@media only screen and (min-width: 600px) {
  .heading {
    font-size: 38px;
    font-weight: bold;
    line-height: 1.1em;
  }

  .heading-container {
    position: relative;
  }

  .heading-decorator {
    position: absolute;
    top: -10px;
    left: 50%;
    transform: translateX(-130px);
    width: 20px;
  }

  .subheading {
    font-size: 20px;
    font-weight: 500;
    width: 550px;
  }

  .hero-image {
    width: 50%;
  }

  .cta-btn {
    height: 40px;
    font-size: 16px;
  }
}

@media only screen and (min-width: 960px) {
  .heading {
    font-size: 42px;
    font-weight: bold;
    line-height: 1.1em;
  }

  .heading-container {
    position: relative;
  }

  .heading-decorator {
    position: absolute;
    top: -10px;
    left: 25%;
    transform: translateX(-130px);
    width: 20px;
  }

  .subheading {
    font-size: 20px;
    font-weight: 500;
  }

  .hero-image {
    width: 80%;
  }

  .cta-btn {
    height: 50px;
    font-size: 18px;
  }
}

@media only screen and (min-width: 1280px) {
  .heading {
    font-size: 56px;
    font-weight: bold;
    line-height: 1.1em;
  }

  .heading-container {
    position: relative;
  }

  .heading-decorator {
    position: absolute;
    top: -10px;
    left: 25%;
    transform: translateX(-130px);
    width: 20px;
  }

  .subheading {
    font-size: 20px;
    font-weight: 500;
  }

  .hero-image {
    width: 90%;
  }

  .cta-btn {
    height: 50px;
    font-size: 18px;
  }
}
</style>
