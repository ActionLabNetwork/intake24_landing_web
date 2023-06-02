<template>
  <v-container fluid class="container">
    <v-row class="d-flex justify-center">
      <p class="title mb-10 text-center">Here's how it works</p>
    </v-row>
    <v-row v-for="(feature, index) in features" :key="feature.id" class="mx-auto align-center justify-center">
      <v-col :order-md="isEven(index) ? 1 : 2">
        <div class="d-flex flex-column align-center">
          <div class="d-flex flex-column align-center align-md-start text-center text-md-left">
            <div class="circle mb-3">{{ feature.id }}</div>
            <p class="heading">{{ feature.title }}</p>
          </div>
        </div>
      </v-col>
      <v-col :order-md="isEven(index) ? 2 : 1">
        <div class="text-center">
          <figure>
            <img width=400 :src="feature.image" alt="Product image" />
          </figure>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import Step1 from '@/assets/step-1.svg'
import Step2 from '@/assets/step-2.svg'
import Step3 from '@/assets/step-3.svg'
import Step4 from '@/assets/step-4.svg'
import Step5 from '@/assets/step-5.svg'

const isEven = (index: number) => index % 2 === 0

const features = [{
  id: 1,
  title: 'Choose the time of the meal.',
  image: Step1,
}, {
  id: 2,
  title: 'Add the food and drinks consumed.',
  image: Step2,
}, {
  id: 3,
  title: 'Select the amount of food and drinks through visual prompts and custom portion size estimations.',
  image: Step3,
}, {
  id: 4,
  title: 'Collect additional details using custom questions e.g. who they ate with, where the food was purchased etc.',
  image: Step4,
}, {
  id: 5,
  title: 'After a final review of the data there is the option to offer personalised dietary feedback.',
  image: Step5,
}]
</script>

<style scoped>
.title {
  font-size: 26px;
  font-weight: bolder;
}
.heading {
  font-size: 18px;
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
img {
  width: 300px;
}

@media only screen and (min-width: 960px) {
  .title {
    font-size: 30px;
    font-weight: bolder;
  }
  .heading {
    font-size: 25px;
    font-weight: bold;
    inline-size: 350px;
  }
  .circle {
    width: 30px;
    height: 30px;
    background-color: #EE672D;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    font-weight: bold;
    color: white;
  }
  img {
    width: 500px;
  }
}

@media only screen and (min-width: 1280px) {
  .title {
    font-size: 30px;
    font-weight: bolder;
  }
  .heading {
    font-size: 26px;
    font-weight: bold;
    inline-size: 350px;
  }
  .circle {
    width: 40px;
    height: 40px;
    background-color: #EE672D;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    font-weight: bold;
    color: white;
  }
  img {
    width: 500px;
  }
}
</style>
