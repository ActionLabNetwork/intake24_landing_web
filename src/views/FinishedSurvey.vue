<template>
  <v-app>
    <section class="pa-0">
      <FinishedSurvey />
    </section>
    <footer class="footer">
      <Footer />
    </footer>
  </v-app>
</template>

<script lang="ts" setup>
import FinishedSurvey from "@/components/FinishedSurvey/FinishedSurvey.vue";
import Footer from "@/components/Footer.vue";
</script>

<style>
.custom-text-field input::placeholder {
  color: #595959;
  font-size: 18px;
  font-weight: 400;
}
.v-field__input {
  padding-top: 0px !important;
  padding-bottom: 0px !important;
  padding-left: 10px !important;
  padding-inline-start: 0px !important;
  padding-inline-end: 0px !important;
  width: 100%;
}
</style>
