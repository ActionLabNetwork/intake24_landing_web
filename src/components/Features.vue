<template>
  <v-container fluid class="container">
    <v-row class="d-flex justify-center">
      <p class="title mb-10 text-center">Why use Intake24?</p>
    </v-row>
    <v-row v-for="(feature, index) in features" :key="feature.id" class="mx-auto align-center justify-center mb-10">
      <v-col :order-md="isEven(index) ? 1 : 2">
        <div class="d-flex flex-column align-center">
          <div class="d-flex flex-column text-center text-md-start">
            <p class="heading mb-3">{{ feature.title }}</p>
            <p v-if="typeof feature.description === 'string'" class="subheading">{{ feature.description }}</p>
            <ul v-else class="subheading text-left">
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
          <figure>
            <img width=400 :src="getImg(index)" alt="Feature image" />
          </figure>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import Section1 from '@/assets/section-1.svg'
import Section2 from '@/assets/section-2.svg'
import Section3 from '@/assets/section-3.svg'
import Section4 from '@/assets/section-4.svg'

const isEven = (index: number) => index % 2 === 0

const features = [{
  id: 1,
  title: 'As accurate as face-to-face recall',
  image: Section1,
  description: 'With comparable accuracy to a traditional face-to-face dietary recall interview, Intake24 offers a convenient, user-friendly, and low-cost alternative to collecting dietary data on a large scale.',
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
  description: 'The tool includes validated food and drink photographs to estimate the amount of food or drink consumed',
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
.cta-btn {
  margin: 0 auto;
}

.title {
  font-size: 26px;
  font-weight: bold;
}

.heading {
  font-size: 20px;
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

@media only screen and (min-width: 960px) {
  .cta-btn {}

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
    inline-size: 330px;
  }

  img {
    width: 400px;
  }
}

@media only screen and (min-width: 1280px) {
  .cta-btn {}

  .title {
    font-size: 30px;
    font-weight: bold;
  }

  .heading {
    font-size: 26px;
    font-weight: bold;
  }

  .subheading {
    font-size: 18px;
    inline-size: 330px;
  }

  img {
    width: 70%;
  }
}
</style>
