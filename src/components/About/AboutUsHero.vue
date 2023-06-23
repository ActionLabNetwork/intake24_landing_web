<template>
    <v-container fluid>
      <h2 class="heading_about">
              About
      </h2>
      <v-row no-gutters class="main-wrapper flex-column flex-lg-row d-flex align-center">
        <v-col class="mb-10 text-center text-md-left">
          <div>
            <div class="text-wrapper">
              <h1 class="heading text-md-h2">
                Meet the people behind Intake24
              </h1>
              <h2 class="subheading ">
                Intake24 was originally developed for Food Standards Scotland by a team of Nutritionists and Computer Scientists from Newcastle University. The system is further developed and maintained through a collaboration between Cambridge University, Monash University and Newcastle University (UK).
              </h2>
            </div>
            <v-btn variant="outlined" class="cta-btn rounded-pill mt-5 text-primary" href="/about/behind-intake">
                Meet the team
            </v-btn>
          </div>
        </v-col>
        <!-- Hero Image -->
        <v-col>
          <div>
            <figure class="image-about">
              <img src="@/assets/about-main.png"  class="img-4" alt="Hero image" />
            </figure>
          </div>
        </v-col>
      </v-row>

      <v-row class="main-wrapper-bg">
        <v-row no-gutters class="main-wrapper-22 flex-column flex-lg-row d-flex align-center">
        <v-col class="mb-10 text-center text-md-left">
          <div>
            <div class="text-wrapper-0">
              <h1 class="heading text-md-h2">
                Science behind Intake24
              </h1>
              <h2 class="subheading">
                Studies have shown that automated recall systems are able to collect data of comparable accuracy to the traditional face-to-face interview techniques, while being much less costly to support.
              </h2>
            </div>
            <v-btn variant="outlined" class="cta-btn-2 rounded-pill mt-5 text-primary" href="/science-behind">
              Learn more
            </v-btn>
          </div>
        </v-col>
        <!-- Hero Image -->
        <v-col>
          <div>
            <figure>
              <img src="@/assets/aboutimage-2.png" class="m-auto img-4 img-hidden" alt="Hero image" />
            </figure>
          </div>
        </v-col>
      </v-row>
      </v-row>
    </v-container>
  </template>
  
  <style scoped>

.img-4 {
  width: 250px !important;
}
.cta-btn  {
  height: 50px  !important;
}

.cta-btn-2  {
  width: 160px !important;
  height: 50px  !important;
}
  .main-wrapper-bg {
    background-color: #F8F8F8;
  }
img {
  margin: auto !important;
  display: block;
}

.cta-button {
   background-color: #fff !important;
  }
  .main-wrapper {
    padding-left: 20px;
    padding-right: 20px;
    margin: auto !important;
    padding-bottom: 100px;
  }

  .main-wrapper-22 {
    padding-left: 20px;
    padding-right: 20px;
    display: flex;
    align-items: center;
    margin: auto !important;
    padding-bottom: 40px;
    padding-top: 80px;
  }
  .text-wrapper {
    padding-top: 60px;
  }
  .heading {
    font-size: 25px;
    font-weight: 600;
    line-height: 1;
  }


  .heading_about{
    font-size: 30px;
    font-weight: 700;
    color: #060606;
    text-align: center;
    padding-top: 70px;
  }
  .subheading {
    font-size: 16px;
    padding-top: 35px;
    font-weight: 400;
    color: #060606;
  }

  .image-about img {
      width: 100%;
      margin: auto;
    }

    .img-hidden {
      display: none;
    }

  @media only screen and (min-width: 680px) {
    .image-about img {
      width: auto;
    }

    .img-hidden {
      display: block;
    }

    .img-4 {
      width: auto !important;
    }
}


  @media only screen and (min-width: 1280px) {
    .cta-button {
   background-color: #fff !important;
  }
  .main-wrapper {
    max-width: 1300px;
    margin: auto !important;
    padding-bottom: 126px;
  }

  .main-wrapper-22 {
    max-width: 1300px;
    margin: auto !important;
    padding-bottom: 112px;
    padding-top: 112px;
  }
  .text-wrapper {
    padding-top: 80px;
  }
  .heading {
    font-size: 40px;
    font-weight: 600;
    text-align: left;
    line-height: 1;
  }


  .heading_about{
    font-size: 45px;
    font-weight: 700;
    color: #060606;
    text-align: center;
    padding-bottom: 61px;
    padding-top: 88px;
  }
  .subheading {
    font-size: 20px;
    max-width: 500px;
    padding-top: 35px;
    font-weight: 400;
    color: #060606;
  }

}
  </style>
  