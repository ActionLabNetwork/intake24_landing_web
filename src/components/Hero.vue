<template>
  <v-container fluid class="container">
    <v-responsive class="px-4 mt-10">
      <v-row no-gutters>
        <v-col cols="12" md="6">
          <div>
            <div class="text-wrapper">
              <img src="@/assets/heading-decorator.svg" alt="" width="20" class="heading-decorator" />
              <h1 class="heading">
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
        <v-col>
          <div class="hero-image mx-auto">
            <img src="@/assets/hero.svg" alt="Hero image" />
          </div>
        </v-col>
      </v-row>
    </v-responsive>
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
  padding-top: 1.5em;
}

.hero-image {
  width: 32em;
}

.heading {
  font-size: 3em;
  font-weight: bold;
  inline-size: 500px;
  line-height: 1.1em;
}

.heading-decorator {
  position: absolute;
  top: 8px;
  left: -18px;
}

.subheading {
  font-size: 20px;
  font-weight: 500;
  inline-size: 450px;
}

button {
  text-transform: unset
}
</style>
