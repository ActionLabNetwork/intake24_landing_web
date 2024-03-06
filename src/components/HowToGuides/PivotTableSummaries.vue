<template>
  <v-container fluid class="pt-md-15 main-wrapper content">
    <v-row class="mt-5 mb-10">
      <div class="mb-10">
        <p class="heading-text text-center mb-3">
          <strong> Summarising Data using Pivot Tables </strong>
        </p>
        <div class="mb-5">
          <p class="text">
            Data in the output is given with a line for each food or drink item
            entered. Pivot tables can be used within Excel in order to calculate
            averages per person or per day following the steps detailed below.
          </p>
        </div>
        <div class="mt-10">
          <ol class="pl-4 text-inner text">
            <li v-for="step in pivotTableSteps" :key="step.id" class="mt-5">
              {{ step.text }}
              <v-img v-if="step.img" :src="step.img"></v-img>
            </li>
          </ol>
          <p class="text">
            The individual daily intakes will now be in a format which can be
            easily uploaded and analysed in statistical software.
          </p>
        </div>
      </div>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import {
  PivotTableSummaries1,
  PivotTableSummaries2,
  PivotTableSummaries3,
  PivotTableSummaries4,
  PivotTableSummaries5,
  PivotTableSummaries6,
  PivotTableSummaries7,
  PivotTableSummaries8,
  PivotTableSummaries9,
  PivotTableSummaries10,
  PivotTableSummaries11,
  PivotTableSummaries12,
} from '@/assets/resources/pivot-table-summaries'

const pivotTableSteps = [
  {
    id: 1,
    text: 'Click on the corner to highlight all data in the spreadsheet',
    img: PivotTableSummaries1,
  },
  {
    id: 2,
    text: 'Select ‘Insert’ and then click ‘PivotTable’',
    img: PivotTableSummaries2,
  },
  {
    id: 3,
    text: 'Make sure ‘Table/Range’ has all data in the spreadsheet selected and ‘New Worksheet’ is selected (it should do this automatically as you’ve highlighted all the data). Click OK',
    img: PivotTableSummaries3,
  },
  {
    id: 4,
    text: 'The pivot table has ‘areas’ (rows, columns and values). You can drag a ‘field’ (which are the columns of data) into an ‘area’. Data put into ‘Rows’ are used to group data, for example by putting the user ID field into ‘Rows’ and the ‘Fat’ field into ‘Values’ the values in the fat column will be summarised for each username. ',
    img: PivotTableSummaries4,
  },
  {
    id: 5,
    text: 'You can customise how the fields in the ‘Values’ area are presented. E.g. they can be a total (sum), a count, an average etc. This is helpful as you might want to know the frequency of a field (e.g. how many times alcohol was consumed) in which case you could use the ‘count’, or if you want the total amount of a nutrient, then you would use the ‘sum’. This can be changed by clicking on each of the items under values (e.g. fat) and selecting value field settings) then choosing which way you want to summarise your values.',
    img: PivotTableSummaries5,
  },
  {
    id: 6,
    text: 'So using this, you can customise the pivot table with the information you want to know. You can select any ‘field’ that you want to group together as ‘Row Labels’ e.g. selecting ‘User ID’ and ‘Start time’ and dragging these to the ‘Rows field’ will group all data for a single user on a particular day. You can add many fields to the ‘values’ area e.g. all nutrients, food groups, portion sizes etc.',
    img: PivotTableSummaries6,
  },
  {
    id: 7,
    text: 'When you have all the fields set to the values you want, click on the top ribbon where it says ‘Design’. Then click ‘Subtotals’ and select ‘Do not Show Subtotals’. After this click on ‘Grand totals’ (to the right of subtotals) and click ‘Off for Rows and Columns’.',
    img: PivotTableSummaries7,
  },
  {
    id: 8,
    text: 'Next, click top click ‘Report Layout’ and ‘Show in Tabular Form’.',
    img: PivotTableSummaries8,
  },
  {
    id: 9,
    text: 'To get rid of the ‘expand/ collapse’ buttons (little buttons with a dash in shown here), right click anywhere in the pivot table. Select ‘Pivot table options’ in the totals and filters tab – untick show grand totals for rows and columns. In the Display tab untick Show expand/collapse buttons.',
    img: PivotTableSummaries9,
  },
  {
    id: 10,
    text: 'Next, Repeat the item labels by right clicking on the table, clicking ‘field settings’ and then ‘Layout and Print’. Tick ‘Repeat Item Labels’. (These steps are all necessary so that the data will be in the correct format at the end!)',
    img: PivotTableSummaries10,
  },
  {
    id: 11,
    text: 'So now, for example, you might have the user ID and start time in the ‘Rows’ area, and some nutrients in the ‘Values’ field being summarised as ‘sum’. This will give you total intake of that nutrient for that user for that day.',
    img: PivotTableSummaries11,
  },
  {
    id: 12,
    text: 'Copy the pivot table and paste it into a new worksheet (Paste Values and number formatting) so that it is no longer a pivot table. Note:  You can get rid of the #’s by double clicking on the right-hand side of the column to make the column wider.',
    img: PivotTableSummaries12,
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
