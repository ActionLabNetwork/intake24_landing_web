<template>
  <v-container fluid class="pt-md-15 main-wrapper content">
    <v-row class="mt-5 mb-10">
      <div class="mb-5">
        <p class="heading-text text-center">
          <strong> Downloading Data </strong>
        </p>
        <v-list lines="three">
          <v-list-item v-for="(step, idx) in steps" :key="step.text">
            <p class="text">{{ idx }}) {{ step.text }}</p>
            <v-img v-if="step.img" :src="step.img" class="mt-5"></v-img>
          </v-list-item>
        </v-list>
      </div>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import {
  DownloadingData1,
  DownloadingData2,
  DownloadingData3,
} from '@/assets/resources/downloading-data'

const steps = [
  {
    text: 'Go to: http://admin.intake24.com and log in with your username and password',
    link: 'http://admin.intake24.com',
    target: '_blank',
  },
  {
    text: 'To view your surveys click the "Surveys" tab on the left hand side.',
    img: DownloadingData1,
  },
  {
    text: 'Click on the survey name to see details about it.',
    img: DownloadingData2,
  },
  {
    text: 'To download data click the "data export" tab and choose the dates you want to download data from. Next click the green download button.',
    img: DownloadingData3,
  },
]
</script>

<style scoped>
.heading-text {
  font-size: clamp(1.625rem, 1.534rem + 0.3883vw, 2rem);
}
.text {
  font-size: clamp(0.875rem, 0.784rem + 0.3883vw, 1.25rem);
}

.content {
  line-height: 2;
}
.main-wrapper {
  margin-top: 20px;
  padding-left: 30px;
  padding-right: 30px;
  margin-bottom: 30px;
}
.heading_main-box {
  font-size: clamp(1rem, 0.9393rem + 0.2589vw, 1.25rem);
  font-weight: 400;
  background: rgba(17, 24, 39, 0.03);
  border-radius: 10px;
  padding-top: 22px;
  padding-bottom: 22px;
  padding-left: 15px;
  padding-right: 15px;
  color: #111827;
  margin-bottom: 70px;
  margin-top: 50px;
  text-align: center;
}

@media (min-width: 960px) {
  .main-wrapper {
    margin-top: 20px;
    max-width: 820px;
    margin-bottom: 30px;
    margin: auto;
  }
}
</style>
