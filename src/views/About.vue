<template>
  <v-app>
    <section class="pa-0">
      <AboutUsHero />
    </section>
    <section class="pa-0">
      <AboutUsContent />
    </section>
    <section class="wrapper timeline-small-screen">
      <TimelineSmallScreen />
    </section>
    <section class="wrapper timeline-large-screen">
      <TimelineLargeScreen />
    </section>
    <section class="wrapper-about">
      <ContactUsCard />
    </section>
    <footer class="footer">
      <Footer />
    </footer>
  </v-app>
</template>

<script lang="ts" setup>
import AboutUsHero from "@/components/About/AboutUsHero.vue";
import AboutUsContent from "@/components/About/AboutUsContent.vue";
import TimelineLargeScreen from "@/components/About/TimelineLargeScreen.vue";
import TimelineSmallScreen from "@/components/About/TimelineSmallScreen.vue";
import Footer from "@/components/Footer.vue";
import ContactUsCard from "@/components/ContactUs/ContactUsCard.vue";
</script>

<style>


.v-timeline-item__body {
  margin-top: -33px !important;
}

.wrapper-about{
  padding-top: 100px;
  padding-bottom: 100px;
}
.timeline-large-screen {
  display: none;
}

.timeline-small-screen {
  display: block;
}
@media only screen and (min-width: 700px) {
  .v-timeline-item__body {
  margin-top: 0px !important;
}
  .timeline-large-screen {
    display: block;
  }
  .wrapper-about{
  padding-top: 200px;
  padding-bottom: 200px;
}

  .timeline-small-screen {
    display: none;
  }
}
</style>
