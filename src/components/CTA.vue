<template>
  <v-container fluid class="container">
    <v-responsive class="px-4 mt-10">
      <div class="wrapper d-flex justify-space-between align-center bg-primary rounded-xl">
        <div>
          <p class="heading mb-5">Why don't you give it a try and see if it fits your needs?</p>
          <v-btn class="rounded-pill text-primary pb-10 pt-2 px-7 text-h6">
            Try a demo
          </v-btn>
        </div>
        <div>
          <img src="@/assets/cta-2-image.png" alt="CTA Image" />
        </div>
      </div>
    </v-responsive>
  </v-container>
</template>

<style scoped>
.wrapper {
  padding: 20px 10px 0 70px;
}
  .heading {
    font-size: 46px;
    font-weight: bold;
    inline-size: 500px;
    line-height: 1.1em;
  }
</style>
