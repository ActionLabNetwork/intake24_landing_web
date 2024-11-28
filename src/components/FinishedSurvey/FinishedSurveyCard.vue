<template>
  <v-container fluid class="container d-flex flex-column flex-md-row">
    <v-col class="d-flex flex-column flex-md-row-reverse justify-center">
      <div class="wrapper d-flex flex-column flex-md-row justify-center align-center rounded-xl">
        <FinishedSurveyForm />
      </div>
    </v-col>
  </v-container>
</template>

<script lang="ts" setup>
import FinishedSurveyForm from "./FinishedSurveyForm.vue";
</script>

<style>
.v-field__input {
  color: inherit;
  display: flex;
  flex-wrap: wrap;
  padding-left: 10px;
  letter-spacing: 0.009375em;
  opacity: var(--v-high-emphasis-opacity);
  min-height: var(--v-field-input-min-height);
  padding-inline-start: 0px !important;
  padding-inline-end: 0px !important;
  padding-top: 0px !important;
  padding-bottom: 0px !important;
  width: 100%;
  --v-field-input-min-height: max(
    var(--v-input-control-height, 56px),
    1.625rem + var(--v-field-input-padding-top) +
      var(--v-field-input-padding-bottom)
  );
}
</style>
