<template>
  <v-container fluid class="container">
    <v-row>
      <p class="title mb-10 mx-auto">Here's how it works</p>
    </v-row>
    <v-row v-for="(feature, index) in features" :key="feature.id" class="flex-column flex-sm-row mx-auto align-center">
      <v-col :order-sm="isEven(index) ? 1 : 2">
        <div class="d-flex flex-column align-center">
          <div class="d-flex flex-column align-center align-sm-start text-center text-sm-left">
            <div class="circle mb-3">{{ feature.id }}</div>
            <p class="heading">{{ feature.title }}</p>
          </div>
        </div>
      </v-col>
      <v-col :order-sm="isEven(index) ? 2 : 1">
        <div>
          <figure>
            <v-img class="v-img mx-auto" :src="feature.image" alt="Product image" />
          </figure>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
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
  font-weight: bold;
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

.v-img {
  width: 70%;
}

@media only screen and (min-width: 960px) {
  .title {
    font-size: 30px;
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
}

@media only screen and (min-width: 1280px) {
  .title {
    font-size: 30px;
  }

  .heading {
    font-size: 26px;
  }

  .circle {
    width: 40px;
    height: 40px;
  }
}
</style>
