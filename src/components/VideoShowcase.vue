<template>
  <v-container>
    <v-row no-gutters class="text-center">
      <p class="heading pt-10 pb-3 mx-auto">What is Intake24?</p>
    </v-row>
    <v-row>
      <p class="subheading mx-auto mb-8">Donec quam felis ultricies nec pellentesque eu pretium quis. sem. Nulla consequat massa quis enim.</p>
    </v-row>
    <v-row>
      <iframe src="https://www.youtube.com/embed/iEt4MDngSkA" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" class="mx-auto rounded-xl" allowfullscreen></iframe>
    </v-row>
  </v-container>
</template>

<style scoped>
.heading {
  font-size: 30px;
  font-weight: bolder;
}

.subheading {
  font-size: 20px;
  inline-size: 300px;
  overflow-wrap: break-word
}

iframe {
  box-shadow: 12px 12px 2px 1px #EE672D;
  width: 60%;
  height: 240px;
}

@media (min-width: 960px) {
  iframe {
    box-shadow: 12px 12px 2px 1px #EE672D;
    width: 60%;
    height: 280px;
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
    width: 60%;
    height: 300px;
  }

  .subheading {
    font-size: 20px;
    inline-size: 500px;
    overflow-wrap: break-word
  }
}
</style>
