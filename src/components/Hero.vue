<template>
  <v-container fluid>
    <v-row no-gutters>
      <v-col cols="12" md="5" lg="4" offset="1" class="mb-10">
        <div>
          <div class="text-wrapper">
            <img src="@/assets/heading-decorator.svg" alt="" width="20" class="heading-decorator" />
            <h1 class="heading text-md-h2">
              Easily Track <br/> Your Everyday <br /> Food Intake
            </h1>
            <h2 class="subheading">
              Intake24 is an open-source self-completed computerised dietary recall system based on multiple-pass 24-hour recall.
            </h2>
          </div>
          <v-btn variant="outlined" class="rounded-pill mt-5 bg-primary">
            Try a Demo
          </v-btn>
        </div>
      </v-col>
      <v-col cols="12" md="6" class="mx-md-auto">
        <div class="hero-image mx-auto">
          <img src="@/assets/hero.svg" alt="Hero image" />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.main-wrapper {
  margin-top: 20px;
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
  width: 300px;
  margin: 0 auto;
}

.heading {
  font-size: 32px;
  font-weight: bold;
  line-height: 1;
}

.heading-decorator {
  position: absolute;
  top: 8px;
  left: -18px;
}

.subheading {
  font-size: 14px;
  font-weight: 500;
  inline-size: 240px;
}

@media (min-width: 960px) {
  .heading {
    font-size: 56px;
    font-weight: bold;
    inline-size: 500px;
    line-height: 1.1em;
  }

  .subheading {
  font-size: 20px;
  font-weight: 500;
  inline-size: 460px;
}

  .hero-image {
    width: 500px;
  }
}
</style>
