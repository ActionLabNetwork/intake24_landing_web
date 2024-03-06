<template>
    <v-container fluid class="wrapper">
      <v-row class="">
        <div class="small-wrapper text-center">
          <p class="heading text-center">The people behind Intake24</p>
          <p class="subheading_0">Intake24 was originally developed for Food Standards Scotland by a team of Nutritionists and Computer Scientists from Newcastle University. The system is now maintained and further developed through a collaboration between Cambridge University, Monash University and Newcastle University (UK).</p>
        </div>
      </v-row>
    </v-container>
  </template>
  <style scoped>
 .wrapper {
     padding-top: 100px;
     margin: auto;
}
 .heading {
     font-size: 30px;
     font-weight: 700;
}
 .small-wrapper{
     padding-left: 20px;
     padding-right: 20px;
     margin: auto;
}
 .subheading_0{
     padding-top: 30px;
     font-size: 16px;
     font-weight: 400;
     color: #060606;
}
/* responsive wrapper */
 @media (min-width: 960px) {
     .wrapper {
         padding-top: 163px;
         margin: auto;
    }
     .heading {
         font-size: 45px;
         font-weight: 700;
    }
     .small-wrapper{
         max-width: 900px;
         margin: auto;
    }
     .subheading_0{
         padding-top: 47px;
         font-size: 20px;
         font-weight: 400;
         color: #060606;
    }

}

  </style>
  