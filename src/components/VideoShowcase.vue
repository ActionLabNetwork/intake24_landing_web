<template>
  <v-container>
    <v-row no-gutters class="text-center">
      <p class="heading pt-10 pb-3 mx-auto">What is Intake24?</p>
    </v-row>
    <v-row>
      <p class="subheading mx-auto mb-8 text-center">Intake24 is an online 24hr dietary recall for collection of nutrient intake data which is provided for the research community free of charge. Designed to be quick and easy to complete users can access the system on mobile phones, tablets or computer.</p>
    </v-row>
    <v-row>
      <iframe src="https://www.youtube.com/embed/iEt4MDngSkA" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" class="mx-auto rounded-xl" allowfullscreen></iframe>
    </v-row>
  </v-container>
</template>

<style scoped>
.heading {
  font-size: 26px;
  font-weight: bolder;
}

.subheading {
  font-size: 14px;
  inline-size: 300px;
  overflow-wrap: break-word
}

iframe {
  box-shadow: 12px 12px 2px 1px #EE672D;
  width: 300px;
  height: 168px;
}

@media (min-width: 960px) {
  iframe {
    box-shadow: 12px 12px 2px 1px #EE672D;
    width: 533px;
    height: 300px;
  }

  .subheading {
    font-size: 20px;
    inline-size: 500px;
    overflow-wrap: break-word
  }
}

@media (min-width: 1280px) {
  iframe {
    box-shadow: 12px 12px 2px 1px #EE672D;
    width: 600px;
    height: 337.5px;
  }

  .subheading {
    font-size: 20px;
    inline-size: 500px;
    overflow-wrap: break-word
  }
}
</style>
