<template>
  <v-container fluid class="pt-md-15">
    <v-row no-gutters class="d-flex align-center">
      <!-- Text -->
      <v-col
        cols="12"
        md="5"
        lg="4"
        offset="0"
        offset-md="1"
        class="mb-10 text-center text-md-start"
      >
        <div class="text-wrapper">
          <div class="heading-container">
            <v-img
              src="@/assets/heading-decorator.svg"
              alt=""
              class="heading-decorator"
            />
            <h1 class="heading">
              Easy way to <br />
              measure what <br />
              people eat
            </h1>
          </div>
          <h2 class="subheading">
            Intake24 is an open-source self-completed computerised dietary
            recall system based on the multiple-pass 24-hour recall.
          </h2>
        </div>
        <v-btn
          variant="outlined"
          class="cta-btn rounded-pill mt-5 bg-primary"
          :href="survey"
          target="_blank"
        >
          Try a Demo
        </v-btn>
      </v-col>
      <!-- Hero Image -->
      <v-col cols="12" md="6" class="mx-md-auto">
          <v-img class="hero-image" src="@/assets/hero.png" alt="Hero image" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
const survey = import.meta.env.VITE_SURVEY
</script>

<style scoped>
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
  font-size: clamp(2rem, 4vw, 3.5rem);
  font-weight: bold;
  line-height: 1;
}

.heading-decorator {
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-110px);
  width: 20px;
}

.subheading {
  font-size: clamp(0.875rem, 2vw, 1.25rem);
  font-weight: 500;
  margin: 0 auto;
  width: min(300px, 40vw);
}

@media only screen and (min-width: 600px) {
  .heading {
    font-size: 38px;
  }

  .heading-decorator {
    transform: translateX(-130px);
  }

  .subheading {
    font-size: 20px;
    width: 40vw;
  }

  .hero-image {
    width: 80%;
  }

  .cta-btn {
    height: 40px;
    font-size: 16px;
  }
}

@media only screen and (min-width: 960px) {
  .heading {
    font-size: 42px;
  }
  .heading-decorator {
    left: 25%;
    transform: translateX(-130px);
  }

  .subheading {
    font-size: 20px;
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
  }

  .subheading {
    font-size: 20px;
  }

  .hero-image {
    width: 80%;
  }

  .cta-btn {
    height: 50px;
    font-size: 18px;
  }
}

@media only screen and (min-width: 1600px) {
  .heading-decorator {
    left: 25%;
    transform: translateX(-9vw);
  }
}
</style>
