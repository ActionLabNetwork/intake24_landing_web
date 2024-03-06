<template>
  <v-container fluid class="pt-md-15 main-wrapper content">
    <v-row class="mt-5 mb-10">
      <div class="mb-10">
        <p class="heading-text text-center mb-3">
          <strong>
            Dealing with recalls containing foods reported as missing from the
            system
          </strong>
        </p>
        <div class="mb-5">
          <p class="text">
            Where a participant has reported a food as missing from the system
            (i.e. they have not been able to find their food in the Intake24
            food list) the Intake24 code will be ‘MISSING’. You will need to add
            in the portion sizes, food group codes, food group names and
            nutrient codes using the information the participant has provided.
            If not very much information is given, you will need to make a
            judgement based on any previous reports from the same individual,
            your knowledge of commonly consumed items in the local food
            environment and use standard portion sizes. Note - If a participant
            has written that they left some of their food, make sure the
            ‘portion size’ for the missing food takes this into account.
          </p>
          <p class="text">
            For each food which is added the nutrient composition code and
            portion size will need to be added into the data. There is a vlookup
            template document to help with this.
          </p>
        </div>
        <div class="mt-10">
          <p class="subheading-text">
            <strong>Filtering the data to display missing foods</strong>
          </p>
          <ol class="pl-4 text-inner">
            <li v-for="step in filteringSteps" :key="step.id" class="mt-5">
              {{ step.text }}
              <ol type="a" class="pl-5">
                <li v-for="childSteps in step.steps" :key="childSteps.id">
                  {{ childSteps.text }}
                  <v-img
                    v-if="childSteps.img"
                    :src="childSteps.img"
                    class="mb-5"
                  ></v-img>
                </li>
              </ol>
              <v-img v-if="step.img" :src="step.img"></v-img>
            </li>
          </ol>
        </div>
        <div class="mt-10">
          <p class="subheading-text">
            <strong>
              Using Vlookup to add in the nutritional data for missing foods
            </strong>
          </p>
          <p class="text">
            All of the nutrient information can be added in using the vlookup
            function at the end of data cleaning. It is more efficient to do it
            in this way so that the process doesn’t need to be repeated. For the
            UK version of the system there is a vlookup template. Simply copy
            and paste the data for the missing foods into the section
            highlighted yellow. The nutrient data from the UK food composition
            codes is in the second data sheet and the vlookup formulas will
            automatically bring in the values for each nutrient and calculate
            the amount according to the portion size reported. For all other
            versions of the system you will need to have a spreadsheet
            containing the missing foods in one sheet and the food composition
            data which you are using in a separate sheet within the same file.
          </p>
          <ol class="pl-4 text-inner">
            <li v-for="step in filteringSteps" :key="step.id" class="mt-5">
              {{ step.text }}
              <ol type="a" class="pl-5">
                <li v-for="childSteps in step.steps" :key="childSteps.id">
                  {{ childSteps.text }}
                  <v-img
                    v-if="childSteps.img"
                    :src="childSteps.img"
                    class="mb-5"
                  ></v-img>
                </li>
              </ol>
              <v-img v-if="step.img" :src="step.img"></v-img>
            </li>
          </ol>
        </div>
      </div>
      <div>
        <div>
          <p class="subheading-text">
            <strong
              >Adding in food codes and portion sizes for missing foods</strong
            >
          </p>
          <p class="text">
            For these foods the nutritionist will need to take a similar
            approach to that used when coding a food diary or paper based
            dietary recall. The food codes will need to be looked up by
            searching within the food composition table or database. Portion
            sizes can be looked up in databases of average portion sizes for the
            relevant population, by measuring (e.g. if the food is reported in
            cups or spoons) or from product information if it is a packaged
            food.
          </p>
          <ol class="pl-4 text-inner">
            <li v-for="step in vlookupSteps" :key="step.id" class="mt-5">
              {{ step.text }}
              <v-img v-if="step.img" :src="step.img"></v-img>
            </li>
          </ol>
          <p class="text mt-5">
            So you end up with an equation which looks like this: =vlookup (N:N,
            nutrients_UK,Food composition data A:AB,26,FALSE)/100*X5 where: N:N
            is the column containing the food composition code for the item you
            want to look up Food composition data is the data sheet with the
            food composition tables in it A:AB is the range within the Food
            composition data spreadsheet that you want to search 26 is the
            column with the data you want to bring in, in this case Energy Kcal.
            FALSE is used to make sure that only exact matches are returned.
            /100 calculates the value per gram X:X is the cell containing the
            portion size Once you have done this for the first line of data
            (i.e. the first missing food in the spreadsheet) you can copy and
            paste the top row down to automatically calculate the nutrient
            values for the remaining missing foods. You will need to replicate
            this process for each nutrient of interest.
          </p>
        </div>
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

import {
  MissingFoods1,
  MissingFoods2,
  MissingFoods3,
  MissingFoods4,
  MissingFoods5,
  MissingFoods6,
  MissingFoods7,
} from '@/assets/resources/missing-foods'

const filteringSteps = [
  {
    id: 1,
    text: 'Use the filter function within excel to select those entries where the Intake24 food code is ‘MISSING’',
    steps: [
      {
        id: 1,
        text: 'Select "Sort & Filter" and select "Filter"',
        img: MissingFoods1,
      },
      {
        id: 2,
        text: 'Click on the arrow to the right of the “Intake24 food code” cell and tick the box next to “MISSING” in the drop-down list then click “OK”',
        img: MissingFoods2,
      },
    ],
    link: 'http://admin.intake24.com',
    target: '_blank',
  },
  {
    id: 2,
    text: 'This will filter the dataset so that only the foods which were coded as missing are displayed in the spreadsheet',
    img: MissingFoods3,
  },
  {
    text: 'These foods will need to be coded manually by adding in the food codes and portion sizes needed.',
  },
]

const addingSteps = [
  {
    id: 1,
    text: 'Select the “MISSING” food data and copy it into a separate sheet called “copied missing foods”',
  },
  {
    id: 2,
    text: 'Within this spreadsheet add the food composition code for the food  into column N “Nutrient table code” and enter the Nutrient table name into column M. If the missing food is a mixed item such as a sandwich you will need to create additional rows for the entry',
    img: MissingFoods4,
  },
  {
    id: 3,
    text: 'Add the amount consumed into column X “Portion size (g/ml)”',
  },
  {
    id: 4,
    text: 'If using several nutrient composition tables use the Sort & Filter option to select data from each and save in separate sheets in order to bring in nutrient values from each food composition table using vlookup.',
    img: MissingFoods5,
  },
]

const vlookupSteps = [
  {
    id: 1,
    text: 'In the first cell of the column in which you want to bring in the nutrient data type “=vlookup(”',
  },
  {
    id: 2,
    text: 'Click on the column with the food composition code in it and type “,”',
  },
  {
    id: 3,
    text: 'Go to the food composition data sheet and highlight from the column with the food composition code in it along to the column for the nutrient you want to bring in',
  },
  {
    id: 4,
    text: 'Type “,” then the number of the column you want to bring in (counting from the first highlighted column across)',
  },
  {
    id: 5,
    text: 'Type “, FALSE)” and hit the return key. This will enter the nutrient value per 100g of the food',
    img: MissingFoods6,
  },
  {
    id: 6,
    text: 'After the Vlookup equation add /100 (to give the per g nutrient value) then * and select the portion size column. This will give the nutrient data for the portion consumed.',
    img: MissingFoods7,
  },
]
</script>

<style scoped>
.heading-text {
  font-size: clamp(1.625rem, 1.534rem + 0.3883vw, 2rem);
}

.subheading-text {
  font-size: clamp(1.125rem, 1.034rem + 0.3883vw, 1.5rem);
}

.text {
  font-size: clamp(0.875rem, 0.784rem + 0.3883vw, 1.25rem);
}

.text-inner {
  font-size: clamp(0.875rem, 0.8143rem + 0.2589vw, 1.125rem);
}

.content {
  line-height: 2;
}

.inner-list {
  padding-left: 50px;
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
