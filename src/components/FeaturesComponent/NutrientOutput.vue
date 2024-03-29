<template>
  <v-container fluid>
    <!-- Topics and populations cards -->
    <v-row class="d-flex justify-center">
      <div class="d-flex flex-column align-center">
        <h3 class="heading-text">Nutrient output</h3>
        <p class="subheading1 text-center">
          Data are output in spreadsheet format (.csv) that can be opened with
          Excel or similar software for easy data manipulation and analysis.<br /><br />
          Nutrient intake can be generated as soon as the participant has
          finished entering their data. There is one line of data for each food
          or drink item entered. Daily intake can be generated using pivot
          tables in Excel or in statistical software.
        </p>
        <div class="d-flex flex-column flex-md-row feature_base_component_div">
          <FeatureBaseCard
            title="Data Output:"
            :listItems="topicsListItems"
            :icon="TopicsIcon"
            class="mb-5 mb-md-0 feature_base_component"
          />
        </div>
        <p class="subheading2 text-center">
          Using the links below you can download sample output files generated
          by Intake24. Note that the data in these files are gathered from the
          demo survey submissions and are therefore not representative of a real
          survey in terms of survey contents. The portion size and nutrient
          calculations, however, are correct.
        </p>
        <div class="feature_base_component_btn_div text-center">
          <v-btn
            class="feature_base_component_btn"
            rounded="xs"
            height="82"
            width="260"
          >
            <a
              href="https://intake24.org/assets/output-samples/intake24_output_demo.csv"
              target="_blank"
              class="text-decoration-none text-primary"
            >
              Sample output (raw CSV)
            </a>
          </v-btn>
          <v-btn
            class="feature_base_component_btn"
            rounded="xs"
            height="82"
            width="260"
          >
            <a
              href="https://intake24.org/assets/output-samples/intake24_output_demo.xlsx"
              target="_blank"
              class="text-decoration-none text-primary"
            >
              Sample output (MS Excel)
            </a>
          </v-btn>
        </div>
      </div>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import FeatureBaseCard from '@/components/FeaturesComponent/FeatureBaseCard.vue'
import TopicsIcon from '@/assets/topics-icon1.svg'
const topicsListItems = [
  { id: 1, text: 'Date and time of consumption' },
  { id: 2, text: 'Meal name' },
  { id: 3, text: 'Energy (kJ and kcal) for each item consumed' },
  {
    id: 4,
    text: 'Macronutrients – Fat, Carbohydrate, Protein and Alcohol, Total Sugars, Free Sugars, Non-Milk Extrinsic Sugars (NMES), Saturated fat, Cholesterol and AOAC fibre, Glucose, Fructose, Maltose, Lactose, Sucrose, Other sugars',
  },
  {
    id: 5,
    text: 'Micronutrients – Vitamin A, Vitamin D, Vitamin C, Vitamin E, Folate, Thiamin, Riboflavin, Niacin, Vitamin B6, Vitamin B12, Pantothenic acid, Biotin, Sodium, Potassium, Calcium, Magnesium, Phosphorous, Iron, Copper, Zinc, Selenium, Chloride, Iodine, Manganese',
  },
  { id: 6, text: 'Food Groups' },
  { id: 7, text: 'Disaggregation variables (e.g. vegetable intake)' },
  { id: 8, text: 'Any additional data collected such as price, location etc' },
]
</script>

<style scoped>
.subheading2 {
  padding-left: 10px;
  padding-right: 10px;
}
.feature_base_component {
  color: #060606;
}
.feature_base_component_btn {
  border: 2px solid #ee672d;
  color: #ee672d;
  margin-left: 20px;
  border-radius: 10px;
  box-shadow: none !important;
  margin-right: 20px;
}
.feature_base_component_div {
  margin-bottom: 80px;
  margin-top: 100px;
  display: flex;
  gap: 20px;
}
.feature_base_component_btn {
  margin-top: 20px;
}
.heading-text {
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 11px;
}
.feature_base_component_btn_div {
  margin-top: 70px;
}
.subheading1 {
  margin: auto;
  font-size: 16px;
  font-weight: 400;
  color: #060606;
}
@media (min-width: 960px) {
  .subheading1 {
    width: 580px;
    margin: auto;
    font-size: 20px;
    font-weight: 400;
    color: #060606;
  }
  .heading-text {
    font-size: 40px;
    font-weight: 600;
    margin-bottom: 11px;
  }
  .feature_base_component_div {
    margin-bottom: 80px;
    display: flex;
    gap: 20px;
  }
  .feature_base_component_btn_div {
    margin-top: 90px;
  }
}
</style>
