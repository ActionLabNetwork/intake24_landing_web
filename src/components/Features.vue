<template>
  <v-container fluid class="container">
    <v-responsive class="px-4 mt-10">
      <p class="title mb-10 text-center">Why use Intake24?</p>

      <v-row v-for="(feature, index) in features" :key="feature.id" class="mx-auto align-center justify-center">
        <v-col :order="index % 2 === 0 ? 1 : 2">
          <div class="d-flex flex-column align-center">
            <div>
              <p class="heading">{{ feature.title }}</p>
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
        <v-col :order="index % 2 === 0 ? 2 : 1">
          <div class="text-center">
            <img width=400 :src="getImg(index)" alt="Feature image" />
          </div>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>

<script setup lang="ts">
import Section2 from '@/assets/Section2.svg'
import Section3 from '@/assets/Section3.svg'
import Section4 from '@/assets/Section4.svg'
import Section5 from '@/assets/Section5.svg'

const features = [{
  id: 1,
  title: 'As accurate as face-to-face recall',
  image: Section2,
  description: 'With comparable accuracy to a traditional face-to-face dietary recall interview but without the need to travel to visit the participants. Intake24 offers a convenient and low-cose alternative to collecting dietary data on a large scale.',
  cta: 'Learn more'
}, {
  id: 2,
  title: 'Online, convenient, and accessible',
  image: Section3,
  description: ['No need to travel for face-to-face visit', '15-20 minutes to complete with nutrient data available upon submission', 'Accessible on mobile phones, tablets or computer', 'WCAG 2.0 compliant (AA level)'],
}, {
  id: 3,
  title: 'Estimation made easy',
  image: Section4,
  description: 'The tool provides food and drink photographs to estimate the amount of food or drink consumed',
}, {
  id: 4,
  title: 'Built with brains',
  image: Section5,
  description: ['Includes custom search algorithms, synonyms and metadata to help users find their food esaily', 'Provides prompts for foods commonly consumed together based on AI-powered personalised recommendations.', 'Automatically codes submitted records to national food composition databases'],
}]

const getImg = (index: number) => {
  return features[index].image
}
</script>

<style scoped>
.title {
  font-size: 25px;
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

button {
  text-transform: unset;
}

li {
  margin-left: 30px;
}
</style>
