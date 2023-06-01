<template>
  <v-container fluid class="container">
    <v-responsive class="px-4 mt-10">
      <p class="title mb-10 text-center">Here's how it works</p>

      <v-row v-for="(feature, index) in features" :key="feature.id" class="mx-auto align-center justify-center">
        <v-col :order="isEven(index) ? 1 : 2">
          <div class="d-flex flex-column align-center">
            <div>
              <div class="circle mb-3">{{ feature.id }}</div>
              <p class="heading">{{ feature.title }}</p>
            </div>
          </div>
        </v-col>
        <v-col :order="isEven(index) ? 2 : 1">
          <div class="text-center">
            <img width=400 :src="feature.image" alt="Product image" />
          </div>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>

<script setup lang="ts">
import Step1 from '@/assets/step-1.png'
import Step2 from '@/assets/step-2.png'
import Step3 from '@/assets/step-3.png'
import Step4 from '@/assets/step-4.png'
import Step5 from '@/assets/step-5.png'

const isEven = (index: number) => index % 2 === 0

const features = [{
  id: 1,
  title: 'Choose the time of the meal.',
  image: Step1,
}, {
  id: 2,
  title: 'Add the food and drinks you consumed.',
  image: Step2,
}, {
  id: 3,
  title: 'Select the amount of food and drinks you had through visual prompts and custom portion size estimations.',
  image: Step3,
}, {
  id: 4,
  title: 'Give additional details e.g., supplements, who you eat with, etc.',
  image: Step4,
}, {
  id: 5,
  title: 'Review, submit your recall, and get optional feedback.',
  image: Step5,
}]
</script>

<style scoped>
.wrapper {
  background-color: #f7f7f7;
}

.title {
  font-size: 30px;
  font-weight: bolder;
}

.heading {
  font-size: 22px;
  font-weight: bold;
  inline-size: 350px;
}

.circle {
  width: 25px;
  height: 25px;
  background-color: #EE672D;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: bold;
  color: white;
}
</style>
