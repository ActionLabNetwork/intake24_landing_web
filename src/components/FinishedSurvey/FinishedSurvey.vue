<template>
  <v-container fluid class="container d-flex flex-column flex-md-row">
    <v-col class="d-flex flex-column flex-md-row-reverse justify-center">
      <div class="wrapper d-flex flex-column flex-md-row justify-space-between align-center rounded-xl">
        <FinishedSurveyForm />
        <div class="img-top">
          <figure>
            <img src="@/assets/contact-us-image.png" alt="CTA Image" />
          </figure>
        </div>
      </div>
    </v-col>
  </v-container>
</template>

<script lang="ts" setup>
  import FinishedSurveyForm from "./FinishedSurveyForm.vue";
</script>

<style scoped>
.img-top {
  margin-top: 60px;
}


.wrapper {
  margin-top: 132px;
  margin-bottom: 98px;
}

@media only screen and (min-width: 600px) {


  img {
    width: 400px;
  }

  .form-wrapper {
    background: #ffffff;
    box-shadow: 0px 20px 50px rgba(217, 78, 18, 0.08);
    border-radius: 40px;
    width: 616px;
  }
}
@media only screen and (min-width: 960px) {
  .wrapper {
    width: 1000px;
  }

  img {
    width: 400px;
  }


  .form-wrapper {
    background: #ffffff;
    box-shadow: 0px 20px 50px rgba(217, 78, 18, 0.08);
    border-radius: 40px;
    width: 616px;
    margin: auto;
  }
  .img-top {
    margin-top: 0px;
  }
}
@media only screen and (min-width: 1280px) {
  .wrapper {
    width: 1300px;
  }
  img {
    width: 500px;
  }
  .form-wrapper {
    background: #ffffff;
    box-shadow: 0px 20px 50px rgba(217, 78, 18, 0.08);
    border-radius: 40px;
    width: 616px;
    margin: auto;
  }
  .img-top {
    margin-top: 0px;
  }
}
</style>
