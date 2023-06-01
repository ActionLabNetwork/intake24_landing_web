<template>
  <div>
    <v-carousel
    cycle
    hide-delimiter-background
    show-arrows="hover"
    delimiter-icon="mdi-circle"
    color="primary"
    >
      <v-carousel-item
        v-for="(slide, i) in slides"
        :key="i"
      >
        <div class="carousel-bg d-flex justify-center align-center">
          <v-card flat class="mx-auto mt-10 py-3">
            <img src="@/assets/testimonial-1.png" alt="Testimonial 1" />
          </v-card>
        </div>
      </v-carousel-item>
    </v-carousel>
  </div>

</template>

<script  lang="ts">
export default {
  data() {
    return {
      colors: [
        'indigo',
        'warning',
        'pink darken-2',
        'red lighten-1',
        'deep-purple accent-4',
      ],
      slides: [
        'First',
        'Second',
        'Third',
        'Fourth',
        'Fifth',
      ],
    }
  },
}
</script>

<style scoped>
.carousel-bg {
  background: #fff;
  width: 600px;
}

img {
  width: 450px;
}

@media (min-width: 960px) {
  .carousel-bg {
    background: #fff;
    width: 1000px;
  }

  img {
    width: 600px;
  }
}
</style>
