<template>
  <v-container>
    <v-row no-gutters class="text-center">
      <p class="heading pt-10 pb-3 mx-auto">What is Intake24?</p>
    </v-row>
    <v-row>
      <p class="subheading mx-auto mb-8 text-center">Intake24 is an online 24hr dietary recall for collection of nutrient intake data which is provided for the research community free of charge where feasible. Designed to be quick and easy to complete users can access the system on mobile phones, tablets or computer.</p>
    </v-row>
    <v-row>
      <iframe src="https://www.youtube.com/embed/iEt4MDngSkA" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" class="mx-auto rounded-xl" allowfullscreen></iframe>
    </v-row>
  </v-container>
</template>

<style scoped>
.heading {
  font-size: 26px;
  font-weight: bold;
}

.subheading {
  font-size: 14px;
  inline-size: 300px;
  overflow-wrap: break-word
}

iframe {
  box-shadow: 12px 12px 2px 1px #EE672D;
  width: calc(90vw - 20%);
  aspect-ratio: 16/9;
}

@media (min-width: 960px) {
  .subheading {
    font-size: 20px;
    inline-size: 500px;
  }

  iframe {
    width: calc(70vw - 30%);
  }
}
</style>
