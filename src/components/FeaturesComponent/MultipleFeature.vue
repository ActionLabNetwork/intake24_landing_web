<template>
    <v-container class="container">
      <v-row class="mx-auto align-center justify-center flex-column flex-md-row">
        <template v-if="arrayItem.order == 1" class="flex-column flex-md-row-reverse">
          <v-row class="flex-column flex-md-row-reverse">
            <v-col order-md="1" class="ord-text">
              <div class="d-flex justify-center align-center">
                <div class="d-flex flex-column text-center text-md-start">
                  <h3 class="heading-text">{{ arrayItem.title }}</h3>
                  <p class="subheading-text" v-html="arrayItem.subText"></p>
                </div>
              </div>
            </v-col>
            <v-col order-md="2" class="ord-img">
              <div class="d-flex justify-center align-center">
                <div class="d-flex flex-column text-center text-md-start">
                  <v-img :src="arrayItem.imageSrc" cover class="img-1"></v-img>
                </div>
              </div>
            </v-col>
          </v-row>
        </template>
        <template v-else>
          <v-col order-md="1" class="ord-img">
            <div class="d-flex  align-center">
              <div class="d-flex flex-column text-center text-md-start">
                <h3 class="heading-text">{{ arrayItem.title }}</h3>
                <p class="subheading-text" v-html="arrayItem.subText"></p>
              </div>
            </div>
          </v-col>
          <v-col order-md="1" class="ord-text">
            <div class="d-flex justify-center align-center">
              <div class="d-flex flex-column text-center text-md-start">
                <v-img :src=arrayItem.imageSrc cover class="img-1"></v-img>
              </div>
            </div>
          </v-col>
        </template>
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

    .v-container {
        max-width: 100% !important;
    }


    .heading-text {
      font-size: 30px;
      font-weight: 600;
      margin-bottom: 10px;
    }
    
    .subheading-text {
      font-size: 16px;
      line-height: 30px;
    }

    .img-1 {
            width: 250px;
        } 

    @media only screen and (min-width: 960px) {
        .v-container {
        max-width: 1300px !important;
    }
    }

    
    @media only screen and (min-width: 960px) {

    .img-1 {
        width: 400px;
        margin: auto;
    } 
    .subheading-text {
      font-size: 20px;
      line-height: 30px;
    }

      .heading-text {
      font-size: 40px;
      font-weight: 600;
      margin-bottom: 30px;
    }
    
    }
    
    </style>