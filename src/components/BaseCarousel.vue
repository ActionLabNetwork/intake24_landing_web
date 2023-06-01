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
        v-for="slide in slides"
        :key="slide.id"
      >
        <div class="carousel-bg d-flex justify-center align-center">
          <v-card flat class="mx-auto mt-10 py-3">
            <img :src="slide.image" alt="Testimonials" />
          </v-card>
        </div>
      </v-carousel-item>
    </v-carousel>
  </div>

</template>

<script setup lang="ts">
import Testimonial1 from '@/assets/testimonial-1.png'
import Testimonial2 from '@/assets/testimonial-2.png'

const slides = [{ id: 1, image: Testimonial1 }, { id: 2, image: Testimonial2 }]
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
