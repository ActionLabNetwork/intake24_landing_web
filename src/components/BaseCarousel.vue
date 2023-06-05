<template>
  <div>
    <div class="custom-carousel" ref="carousel">
      <div v-for="(slide, index) in slides" :key="slide.id" @click="scrollTo(index)" :id="`$slide-{slide.id}`">
        <img :src="slide.image" alt="" loading="lazy" :class="{ blur: index !== activeIndex }" />
      </div>
    </div>
    <div class="dots">
      <button v-for="(slide, index) in slides" :key="slide.id" @click.prevent="scrollTo(index)" :class="{ active: index === activeIndex }"></button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Testimonial1 from '@/assets/testimonial-1.png'
import Testimonial2 from '@/assets/testimonial-2.png'
import Testimonial3 from '@/assets/testimonial-3.png'

const carousel = ref<HTMLDivElement | null>(null)
const activeIndex = ref(0)

const slides = [{ id: 1, image: Testimonial1 }, { id: 2, image: Testimonial2 }, { id: 3, image: Testimonial3 }]

const scrollTo = (index: number) => {
  if (!carousel.value) return

  const item = carousel.value.children[index].querySelector('img');
  if (!item) return;

  item.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  activeIndex.value = index
}
</script>

<style scoped>
.custom-carousel {
  display: flex;
  overflow-x: scroll;
  align-items: center;
  width: 85vw;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
}

.custom-carousel::-webkit-scrollbar {
  display: none;
}

.custom-carousel>div {
  flex: 0 0 auto;
  scroll-snap-align: center;
  -ms-overflow-style: none;
  scrollbar-width: none;
  position: relative;
  background-color: #f8f8f8;
  padding: 30px 0;
}

.custom-carousel div img {
  width: 70vw;
}

.custom-carousel div img:hover {
  cursor: pointer;
}

.dots {
  display: flex;
  justify-content: center;
  margin-top: 1em;
  gap: 1em;
}

.dots:hover {
  cursor: pointer;
}

.dots button.active {
  width: 20px;
  height: 10px;
  border-radius: 5px;
}

.dots button {
  background: #EE672D;
  border: none;
  border-radius: 50%;
  width: 12px;
  height: 12px;
  margin: 0 5px;
  transition: background 0.5s ease, width 0.5s ease, height 0.5s ease, border 0.5s ease;
}

.dots button:focus {
  outline: none;
}

@media (min-width: 600px) {
  .custom-carousel {
    width: 65vw;
  }

  .custom-carousel div img {
    width: 40vw;
  }
}

@media (min-width: 960px) {
  .custom-carousel {
    width: 55vw;
  }

  .custom-carousel div img.blur {
    filter: blur(2px)
  }

  .custom-carousel div img {
    width: 40vw;
  }
}
</style>
