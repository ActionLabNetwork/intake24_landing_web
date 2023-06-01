<template>
  <v-carousel
    cycle
    hide-delimiter-background
    show-arrows="hover"
    delimiter-icon="mdi-circle"
    color="primary"
    background="#f8f8f8"
  >
    <v-carousel-item
      v-for="(slide, i) in slides"
      :key="i"
    >
      <v-sheet
        height="100%"
      >
        <div class="carousel-bg d-flex justify-center align-center">
          <v-card flat class="mx-auto mt-10 py-3">
            <img width=600 src="@/assets/testimonial-1.png" alt="Testimonial 1" />
          </v-card>
        </div>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script lang="ts">
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
  background: #f8f8f8;
}

.card {
  border-radius: 20px;
}
</style>
