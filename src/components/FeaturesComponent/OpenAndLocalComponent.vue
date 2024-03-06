<template>
    <v-container>
    <v-row class="text-center justify-center">
        <div class="d-flex flex-column text-center text-md-start">
            <v-img :src=arrayItem.imgSrc cover></v-img>
        </div>
    </v-row>
      <v-row no-gutters class="text-center">
        <h3 class="heading_open pt-10 pb-3 mx-auto" v-html="arrayItem.title"></h3>
      </v-row>
      <v-row>
        <p class="subheading_open mx-auto mb-8 text-center" v-html="arrayItem.subText"></p>
      </v-row>
     
    </v-container>
  </template>


<script lang="ts" setup>
    const props = defineProps({
    arrayItem: {
        type: Object,
        default: () => ({}),
    },
    });
    const arrayItem = props.arrayItem;

</script>
  
  <style scoped>
  .heading_open {
    font-size: 24px;
    font-weight: 600;
  }
  
  .subheading_open {
    font-size: 14px;
    max-width: 620px;
  }
  
  
  @media (min-width: 960px) {
  
    .subheading_open {
      font-size: 20px;
    }
    .heading_open {
    font-size: 40px;
    font-weight: 600;
  }
  }
  
  @media (min-width: 1280px) {
  
    .subheading_open {
      font-size: 20px;
    }
  }
  </style>
  