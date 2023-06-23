<template>
  <div class="features_page">
    <section>
      <h1>Features</h1>
      <template v-for="(item, index) in myArrayValue" :key="index">
        <MultipleFeature :arrayItem="item" :class="'feature-' + index" />
      </template>
    </section>

    <section class="nutrient_output">
      <NutrientOutput />
    </section>

    <template v-for="(item, index) in myOpenAndLocal" :key="index">
      <section :class="index == 0 ? 'open_local_bg open_local' : 'open_local'">
        <OpenAndLocalComponent
          :arrayItem="item"
          :class="'open_local-' + index"
        />
      </section>
    </template>

    <section class="cta_div">
      <CTA />
    </section>

    <footer class="footer">
      <Footer />
    </footer>
  </div>
</template>

<script lang="ts" setup>
import MultipleFeature from '@/components/FeaturesComponent/MultipleFeature.vue'
import NutrientOutput from '@/components/FeaturesComponent/NutrientOutput.vue'
import OpenAndLocalComponent from '@/components/FeaturesComponent/OpenAndLocalComponent.vue'
import Footer from '@/components/Footer.vue'
import CTA from '@/components/CTA.vue'
import { ref, computed } from 'vue'
import OSI_Standard from '@/assets/OSI_Standard_Logo_0 1.svg'
import UU_EDI from '@/assets/UU-EDI.svg'
import {
  Feature1,
  Feature2,
  Feature3,
  Feature4,
  Feature5,
  Feature6,
} from '@/assets/features'

const myArray = ref<object[]>([
  {
    title: 'Multiple pass 24hr recall',
    subText:
      'The system is based on a multiple pass 24-hr recall and includes placeholders for various meals and snacks. These are displayed in chronological order, however, the user can choose to complete them in any order they wish. Each meal has a placeholder for drinks separately from foods in order to prompt people to remember this commonly forgotten element of intake. Foods are entered as free text in the ‘quick list’ phase of the recall and the user is then asked to match each food to a food in the database.',
    imageSrc: Feature1,
    order: 2,
  },
  {
    title: 'Engaging and intuitive',
    subText:
      'Designed by experts in human-computer interaction the system was developed through 4 iterative cycles of user engagement and feedback, including eye-tracking, think aloud and post completion interviews. The system is built to be easy to complete by people with limited food knowledge and is suitable for self-completion by people aged 11 years and over. A recall takes around 15-20 minutes to complete and the system received very positive feedback and high SUS scores in field testing.',
    imageSrc: Feature2,
    order: 1,
  },
  {
    title: 'Portion size',
    subText:
      'The system includes an extensive range of food portion size photographs which were designed with perception psychologists. The portion size images have been tested and validated in a feeding study and against weighed food diaries and the amounts displayed includes the range of portions consumed by the UK adult population for that specific food. Other options for estimating the amount consumed include standard portions e.g 1 medium kiwi, household measures e.g one teaspoonful and the option to enter the weight of the food if known.',
    imageSrc: Feature3,
    order: 2,
  },
  {
    title: 'Automatically coded',
    subText:
      'Foods within the food list are linked with food composition data (the system supports linkage to multiple food composition tables). The portion size images and standard portions are linked with the reported weight of food consumed meaning nutritional data can be downloaded as soon as a recall has been submitted. Manual coding is limited to food reported through the “missing food” function.',
    imageSrc: Feature4,
    order: 1,
  },
  {
    title: 'Automated quality control',
    subText:
      'The system includes an extensive range of prompts for items commonly consumed together, checks for missing drinks (if only foods are entered for an eating occasion), and questions if there are long time gaps with no foods reported or very low-energy reports. Maximum portion sizes can also be set for each food or drink to flag improbable amounts.',
    imageSrc: Feature5,
    order: 2,
  },
  {
    title: 'Dietary feedback',
    subText: `There is the option within Intake24 to offer users feedback on their dietary intake. This can be set so that users can select to see feedback following each dietary recall or can require users to complete a set number of recalls before the feedback can be accessed.<br><br>In order to access the dietary feedback the user is asked to enter their year of birth, gender, weight and height. These variables are used to tailor the feedback to their estimated energy and nutrient requirements.<br><br>Feedback compares the individual’s dietary intake with government guidelines and identifies key sources of each nutrient along with the foods which are the major contributors of that nutrient to the individual’s diet.<br><br>The feedback is fully customisable and researchers can create their own detailed feedback based on age and gender.`,
    imageSrc: Feature6,
    order: 1,
  },
])

const openAndlocal = ref<object[]>([
  {
    title: 'Open source and customisable',
    subText: `Intake24 is open source. The web application and API server source code are available under the Apache licence, the food composition databases and food portion size images are available under open government licence and creative commons licence.<br><br>The visual style is fully customisable and allows the addition of study logos. Questions can be added to the recall pre or post meal and pre or post recall to collect contextual information, details of dietary supplement use, usual practice (such as type of oil used in cooking) or whether the recall represents a usual day.`,
    imgSrc: OSI_Standard,
  },
  {
    title: 'Localisation and <br> Internationalisation',
    subText: `Intake24 offers full support for localisation and internationalisation of both the user interface and the food database.<br><br>The user interface supports translation of all labels, prompts and contextual help messages. RTL languages such as Arabic are also supported.<br><br>The food database is designed to be very flexible with respect to localisation. Local food databases can be made as simple as overriding some foods in another reference local database, or defining a completely different set of foods.<br><br>Intake24 provides an online collaborative editing tool for authoring localisations, as well as a complete API for automated data upload.`,
    imgSrc: UU_EDI,
  },
])

const myArrayValue = computed(() => myArray.value)
const myOpenAndLocal = computed(() => openAndlocal.value)
</script>

<style>
.cta_div {
  margin-bottom: 191px;
}
.open_local {
  padding-top: 60px;
  padding-bottom: 60px;
}
.open_local_bg {
  background-color: #f8f8f8;
}
.features_page {
  margin: auto;
}
.features_page h1 {
  font-size: 45px;
  font-weight: 700;
  padding-bottom: 80px;
  padding-top: 70px;
  text-align: center;
}
.feature-0 {
  margin-bottom: 90px;
}
.feature-0 p.subheading-text {
  max-width: 498px;
}
.feature-1 {
  margin-bottom: 100px;
  margin-top: 50px;
}
.feature-1 p.subheading-text {
  max-width: 551px;
}
.feature-2 {
  margin-bottom: 90px;
}
.feature-2 p.subheading-text {
  max-width: 551px;
}
.feature-3 {
  margin-bottom: 90px;
}
.feature-3 p.subheading-text {
  max-width: 551px;
}
.feature-4 {
  margin-bottom: 90px;
}
.feature-4 p.subheading-text {
  max-width: 551px;
}
.feature-5 {
  margin-bottom: 140px;
}
.feature-5 p.subheading-text {
  max-width: 551px;
}
.nutrient_output {
  max-width: 700px;
  margin: auto;
  margin-bottom: 100px;
}
@media only screen and (min-width: 960px) {
  .nutrient_output {
    max-width: 700px;
    margin: auto;
    margin-bottom: 200px;
  }

  .open_local {
    padding-top: 98px;
    padding-bottom: 98px;
  }
  .features_page h1 {
    font-size: 35px;
    font-weight: 700;
    padding-bottom: 100px;
    padding-top: 60px;
    text-align: center;
  }
  .feature-0 {
    margin-bottom: 120px;
  }
  .feature-1 {
    margin-bottom: 120px;
  }
  .feature-2 {
    margin-bottom: 120px;
  }
  .feature-3 {
    margin-bottom: 120px;
  }
  .feature-4 {
    margin-bottom: 120px;
  }
  .feature-5 {
    margin-bottom: 120px;
  }
}
@media only screen and (min-width: 1280px) {
  .features_page h1 {
    font-size: 45px;
    font-weight: 700;
    padding-bottom: 144px;
    padding-top: 88px;
    text-align: center;
  }
  .feature-0 {
    margin-bottom: 179px;
  }
  .feature-1 {
    margin-bottom: 200px;
  }
  .feature-2 {
    margin-bottom: 248px;
  }
  .feature-3 {
    margin-bottom: 200px;
  }
  .feature-4 {
    margin-bottom: 200px;
  }
  .feature-5 {
    margin-bottom: 229px;
  }
}
</style>
