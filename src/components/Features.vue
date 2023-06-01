<template>
  <v-container fluid class="container">
    <v-row class="d-flex justify-center">
      <p class="title mb-10 text-center">Why use Intake24?</p>
    </v-row>
    <v-row v-for="(feature, index) in features" :key="feature.id" class="mx-auto align-center justify-center">
      <v-col :order-md="isEven(index) ? 1 : 2">
        <div class="d-flex flex-column align-center">
          <div>
            <p class="heading mb-3">{{ feature.title }}</p>
            <p v-if="typeof feature.description === 'string'" class="subheading">{{ feature.description }}</p>
            <ul v-else class="subheading">
              <li v-for="(item, itemIdx) in feature.description" :key="itemIdx">{{ item }}</li>
            </ul>
            <v-btn v-if="feature.cta" variant="outlined" class="cta-btn rounded-pill mt-5 text-primary">
            {{ feature.cta }}
            </v-btn>
          </div>
        </div>
      </v-col>
      <v-col :order-md="isEven(index) ? 2 : 1">
        <div class="text-center">
          <img width=400 :src="getImg(index)" alt="Feature image" />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import Section1 from '@/assets/section-1.svg'
import Section2 from '@/assets/Section-2.svg'
import Section3 from '@/assets/Section-3.svg'
import Section4 from '@/assets/Section-4.svg'
import { useDisplay } from 'vuetify/lib/framework.mjs';

const display = useDisplay()

const isEven = (index: number) => index % 2 === 0

const features = [{
  id: 1,
  title: 'As accurate as face-to-face recall',
  image: Section1,
  description: 'With comparable accuracy to a traditional face-to-face dietary recall interview but without the need to travel to visit the participants. Intake24 offers a convenient and low-cose alternative to collecting dietary data on a large scale.',
  cta: 'Learn more'
}, {
  id: 2,
  title: 'Online, convenient, and accessible',
  image: Section2,
  description: ['No need to travel for face-to-face visit', '15-20 minutes to complete with nutrient data available upon submission', 'Accessible on mobile phones, tablets or computer', 'WCAG 2.0 compliant (AA level)'],
}, {
  id: 3,
  title: 'Estimation made easy',
  image: Section3,
  description: 'The tool provides food and drink photographs to estimate the amount of food or drink consumed',
}, {
  id: 4,
  title: 'Built with brains',
  image: Section4,
  description: ['Includes custom search algorithms, synonyms and metadata to help users find their food esaily', 'Provides prompts for foods commonly consumed together based on AI-powered personalised recommendations.', 'Automatically codes submitted records to national food composition databases'],
}]

const getImg = (index: number) => {
  return features[index].image
}
</script>

<style scoped>
.title {
  font-size: 26px;
  font-weight: bold;
}

.heading {
  font-size: 22px;
  font-weight: bold;
}

.subheading {
  font-size: 14px;
  font-weight: 100;
  inline-size: 330px;
}

img {
  width: 260px;
}

button {
  text-transform: unset;
}

li {
  margin-left: 30px;
}

@media (min-width: 960px) {
  .title {
    font-size: 30px;
    font-weight: bold;
  }

  .heading {
    font-size: 25px;
    font-weight: bold;
  }

  .subheading {
    font-size: 18px;
    font-weight: 100;
    inline-size: 330px;
  }

  img {
    width: 400px;
  }
}
</style>
