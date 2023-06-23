<template>
  <v-app class="boxes-issue">
    <section class="pa-0">
      <BehindIntakeHero />
    </section>
    <section class="resource_section">
      <h1 class="main-heading text-center">Newcastle University</h1>
    </section>
    <section class="wrapper-auto technical-team-padding">
      <h1 class="Heading">Technical team</h1>
      <div class="SECOND-wrapper d-flex flex-column flex-md-row">
        <template v-for="(item, index) in technicalnewcastle">
          <BehindCards :arrayItem="item"/>
        </template>
      </div>
    </section>
    <section class="resource_section">
      <h1 class="main-heading text-center">Monash University</h1>
    </section>
    <section class="wrapper-auto technical-team-padding">
      <h1 class="Heading">Technical team</h1>
      <div class="SECOND-wrapper">
        <v-row class="row-gap">
          <template v-for="(item, index) in technical" :key="index">
              <BehindCards :arrayItem="item" />
          </template>
        </v-row>
      </div>
    </section>
    <section class="wrapper-auto nutrition-team-padding">
      <h1 class="Heading">Nutrition team</h1>
      <div class="SECOND-wrapper">
        <v-row class="row-gap">
          <template v-for="(item, index) in Nutrition">
            <BehindCards :arrayItem="item"/>
        </template>
        </v-row>
      </div>
    </section>

    <section class="resource_section">
      <h1 class="newcastle-padding text-center">Cambridge University</h1>
    </section>
    <section class="wrapper-auto">
      <h1 class="Heading">Technical team</h1>
      <div class="SECOND-wrapper">
        <v-row class="row-gap">
          <template v-for="(item, index) in technical1">
          <BehindCards :arrayItem="item"/>
        </template>
        </v-row>
      </div>
    </section>
    <section class="wrapper-auto nutrition-1-team-padding">
      <h1 class="Heading">Nutrition team</h1>
      <div class="SECOND-wrapper">
        <v-row class="row-gap">
          <template v-for="(item, index) in Nutrition1" :key="index">
              <BehindCards :arrayItem="item" />
          </template>
        </v-row>
      </div>
    </section>
    <section class="resource_section">
      <h1 class="text-center newcastle-padding">Original Team (Newcastle University)<br><span class="last-year-text">2012-2018</span></h1>
    </section>
    <section class="wrapper-auto">
      <h1 class="Heading">Technical team</h1>
      <div class="SECOND-wrapper">
        <v-row class="row-gap">
          <template v-for="(item, index) in technical0">
          <BehindCards :arrayItem="item"/>
        </template>
        </v-row>
      </div>
    </section>
    <section class="wrapper-auto nutrition-0-team-padding">
      <h1 class="Heading">Nutrition team</h1>
      <div class="SECOND-wrapper">
        <v-row class="row-gap">
          <template v-for="(item, index) in Nutrition0" :key="index">
              <BehindCards :arrayItem="item" />
          </template>
        </v-row>
      </div>
    </section>
    <section class="wrapper-last-contact">
      <ContactUsCard />
    </section>
    <footer class="footer">
    <Footer />
    </footer>
  </v-app>
</template>
  
  <script lang="ts" setup>
    import { ref, computed } from 'vue';
    import BehindCards from '@/components/BehindIntake/BehindCards.vue';
    import BehindIntakeHero from '@/components/BehindIntake/BehindIntakeHero.vue';
    import Footer from '@/components/Footer.vue';
    import ContactUsCard from "@/components/ContactUs/ContactUsCard.vue";

    const technicalnewcastle = ref<object[]>([
      {title: "Dr Ivan Poliakov", subText: 'Lead Developer, Intake24', imageSrc: '@/assets/people-ivan-poliakov-medium.jpg', link: 'https://openlab.ncl.ac.uk/people/ivan-poliakov/'},
    ]);

    const technical = ref<object[]>([
      {title: "Prof Patrick Olivier", subText: 'Professor, Human computer interaction', imageSrc: '@/assets/patrick_olivier_portrait_.webp', link: 'https://research.monash.edu/en/persons/patrick-olivier'},
      {title: "Dinislam Abdulgalimov", subText: 'Software developer, Intake24', imageSrc: '@/assets/Dinislam-Abdulgalimov.jpg', link: 'https://www.researchgate.net/profile/Dinislam-Abdulgalimov'},
      {title: "Joshua Seguin", subText: 'Research Fellow, Human computer interaction', imageSrc: '@/assets/citations-_1_.jpg', link: 'https://scholar.google.com.au/citations?user=Y2rzZb8AAAAJ&hl=en&oi=ao' },
    ]);

    const Nutrition = ref<object[]>([
      {title: "Dr Emma Foster", subText: 'Senior research fellow  and Nutrition lead, Intake24', imageSrc: '@/assets/Emma-Foster-9.jpg' , link: 'https://www.researchgate.net/profile/Emma-Foster-9'},
      {title: "Dr Tracy McCaffery", subText: 'Senior lecturer, Nutrition, dietetics and food', imageSrc: '@/assets/Tracy_McCaffrey_headshot_June_2020_edited.webp' , link: 'https://research.monash.edu/en/persons/tracy-mccaffrey'},
      {title: "Heidi Ng", subText: 'Research fellow, Nutrition, dietetics and food', imageSrc: '@/assets/no-portrait-473c6d005990baa1f418d9c668dcd4ec.png' , link: 'https://research.monash.edu/en/persons/heidi-ng'},
    ]);

    const technical0 = ref<object[]>([
      {title: "Ivan Poliakov", subText: 'Lead Developer, Intake24', imageSrc: '@/assets/people-ivan-poliakov-medium.jpg',link:'https://openlab.ncl.ac.uk/people/ivan-poliakov/'},
      {title: "Prof Patrick Olivier", subText: 'Professor, Human computer interaction', imageSrc: '@/assets/patrick_olivier_portrait_.webp',link:'https://research.monash.edu/en/persons/patrick-olivier'},
      {title: "Dr Dan Jackson", subText: 'Senior software developer', imageSrc: '@/assets/people-dan-jackson-medium.jpg',link:'https://openlab.ncl.ac.uk/people/dan-jackson/'},
      {title: "Dr Timur Osadchiy", subText: 'Software developer', imageSrc: '@/assets/image-behind.png',link:''},
    ]);

    const Nutrition0 = ref<object[]>([
      {title: "Dr Emma Foster", subText: 'Principal Investigator', imageSrc: '@/assets/Emma-Foster-9.jpg',link:'https://openlab.ncl.ac.uk/people/dan-jackson/'},
      {title: "Prof Ashley Adamson", subText: 'Co-investigator', imageSrc: '@/assets/picture.jpg',link:'https://www.ncl.ac.uk/medical-sciences/people/profile/ashleyadamson.html'},
      {title: "Dr Jen Bradley", subText: 'Research nutritionist', imageSrc: '@/assets/picture-1.jpg',link:'https://www.ncl.ac.uk/medical-sciences/people/profile/jenbradley.html'},
      {title: "Dr Emma Simpson", subText: 'Research nutritionist', imageSrc: '@/assets/image-behind.png',link:''},
      {title: "Ms Maisie Rowland", subText: 'Research nutritionist', imageSrc: '@/assets/image-behind.png',link:'https://www.ncl.ac.uk/medical-sciences/people/profile/maisierowland.html'},
    ]);

    const technical1 = ref<object[]>([
      {title: "Lukas Hroch", subText: 'Software Developer', imageSrc: '@/assets/LukasHroch_8611_161117_web_4x5-240x300.jpg', link:'https://www.mrc-epid.cam.ac.uk/people/lukas-hroch/'},
    ]);

    const Nutrition1 = ref<object[]>([
      {title: "Polly Page", subText: 'Programme director, Measurement and surveys', imageSrc: '@/assets/PollyPage_0468_040219_web4x5-240x300.jpg', link:'https://www.mrc-epid.cam.ac.uk/people/polly-page/'},
      {title: "Dr Toni Steer", subText: 'Senior nutritionist, Nutrition measurement platform', imageSrc: '@/assets/ToniSteer_0499_040219_web_4x5.jpg', link:'https://www.mrc-epid.cam.ac.uk/people/toni-steer/'},
      {title: "Dr Birdem Amoutzopoulos", subText: 'Diet and nutrient data manager, Nutrition measurement platform', imageSrc: '@/assets/BirdemAmoutzopoulos_0448_040219_web4x5-240x300.jpg', link:'https://www.mrc-epid.cam.ac.uk/people/birdem-amoutzopoulos/'},
      {title: "Jackie Foreman", subText: 'Diet and nutrient data manager, Nutrition measurement platform', imageSrc: '@/assets/JackieForeman_9058_210518_web_4x5-240x300.jpg', link:'https://www.mrc-epid.cam.ac.uk/people/jackie-foreman/'},
      {title: "Kirsty Trigg", subText: 'Research assistant, Nutrition measurement platform', imageSrc: '@/assets/KirstyTrigg_0442_050219_web4x5-240x300.jpg', link:'https://www.mrc-epid.cam.ac.uk/people/kirsty-trigg/'},
      {title: "Suzanna Abraham", subText: 'Research assistant, Nutrition measurement platform', imageSrc: '@/assets/image-behind.png', link:'https://www.mrc-epid.cam.ac.uk/people/suzanna-abraham/'},
      {title: "Angela Mulligan", subText: 'Dietary assessment nutritionist, Nutrition measurement platform', imageSrc: '@/assets/AngelaMulligan_0482_040219_web4x5-240x300.jpg', link:'https://www.mrc-epid.cam.ac.uk/people/angela-mulligan/'},
      {title: "Caireen Roberts", subText: 'Senior nutritionist, Nutrition measurement platform', imageSrc: '@/assets/CaireenRoberts_0630_180319_web4x5-240x300.jpg', link:'https://www.mrc-epid.cam.ac.uk/people/caireen-roberts/'},
      {title: "Anila Farooq", subText: 'Support assistant, Nutrition measurement platform', imageSrc: '@/assets/AnilaFarooq_0579_130319_web4x5-240x300.jpg', link:'https://www.mrc-epid.cam.ac.uk/people/anila-farooq/'},
    ]);


  </script>

  <style>

  .wrapper-last-contact {
    padding-bottom: 100px;
  }

  .boxes-issue {
    padding-left: 20px;
    padding-right: 20px;
  }
  
  .row-gap {
    gap: 50px;
  }

    .nutrition-1-team-padding {
        padding-top: 60px;
    }
    .nutrition-0-team-padding {
        padding-top: 60px;
    }
    .newcastle-padding {
        padding-top: 100px;
        padding-bottom: 70px;
        font-size: 30px;
        font-weight: 600;
        color: #060606;
    }
    .nutrition-team-padding {
        padding-top: 40px;
    }
    .main-heading {
        font-size: 30px;
        font-weight: 600;
        color: #060606;
        padding-bottom: 85px;
        padding-top: 70px;
    }
    .Heading {
        font-size: 24px;
        font-weight: 600;
        color: #060606;
        padding-bottom: 30px;
    }
    .wrapper-auto {
        padding-left: 20px;
        padding-right: 20px;
    }
    .SECOND-wrapper {
        gap: 20px;
    }


    @media (min-width: 960px) {

.nutrition-1-team-padding {
      padding-top: 78px;
  }
  .nutrition-0-team-padding {
      padding-top: 78px;
  }
  .newcastle-padding {
      padding-top: 215px;
      padding-bottom: 85px;
      font-size: 40px;
      font-weight: 600;
      color: #060606;
  }
  .nutrition-team-padding {
      padding-top: 80px;
  }
  .main-heading {
      font-size: 40px;
      font-weight: 600;
      color: #060606;
      padding-bottom: 85px;
      padding-top: 104px;
  }
  .Heading {
      font-size: 30px;
      font-weight: 600;
      color: #060606;
      padding-bottom: 51px;
  }
  .wrapper-auto {
      width: 1300px;
      margin: auto;
  }
  .SECOND-wrapper {
      gap: 50px;
  }
}

  </style>
  

  