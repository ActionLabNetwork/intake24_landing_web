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
        <template v-for="(item, index) in technicalNewcastle">
          <BehindCards :arrayItem="item" />
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
            <BehindCards :arrayItem="item" />
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
            <BehindCards :arrayItem="item" />
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
      <h1 class="text-center newcastle-padding">
        Original Team (Newcastle University)<br /><span class="last-year-text"
          >2012-2018</span
        >
      </h1>
    </section>
    <section class="wrapper-auto">
      <h1 class="Heading">Technical team</h1>
      <div class="SECOND-wrapper">
        <v-row class="row-gap">
          <template v-for="(item, index) in technical0">
            <BehindCards :arrayItem="item" />
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
import { ref, computed } from 'vue'
import BehindCards from '@/components/BehindIntake/BehindCards.vue'
import BehindIntakeHero from '@/components/BehindIntake/BehindIntakeHero.vue'
import Footer from '@/components/Footer.vue'
import ContactUsCard from '@/components/ContactUs/ContactUsCard.vue'

// Image Imports
import NoPortrait from '@/assets/about/behind-intake/no-portrait.png'
import IvanPoliakov from '@/assets/about/behind-intake/ivan-poliakov.jpg'
import PatrickOlivier from '@/assets/about/behind-intake/patrick-olivier.png'
import DinislamAbdulgalimov from '@/assets/about/behind-intake/dinislam-abdulgalimov.png'
import JoshuaSeguin from '@/assets/about/behind-intake/joshua-seguin.png'
import EmmaFoster from '@/assets/about/behind-intake/emma-foster.jpg'
import TracyMcCaffery from '@/assets/about/behind-intake/tracy-mccaffery.png'
import DanJackson from '@/assets/about/behind-intake/dan-jackson.png'
import AshleyAdamson from '@/assets/about/behind-intake/ashley-adamson.jpg'
import JenBradley from '@/assets/about/behind-intake/jen-bradley.jpg'
import LukasHroch from '@/assets/about/behind-intake/lukas-hroch.png'
import PollyPage from '@/assets/about/behind-intake/polly-page.png'
import ToniSteer from '@/assets/about/behind-intake/toni-steer.png'
import BirdemAmoutzopoulos from '@/assets/about/behind-intake/birdem-amoutzopoulos.png'
import JackieForeman from '@/assets/about/behind-intake/jackie-foreman.png'
import KirstyTrigg from '@/assets/about/behind-intake/kirsty-trigg.png'
import AngelaMulligan from '@/assets/about/behind-intake/angela-mulligan.png'
import CaireenRoberts from '@/assets/about/behind-intake/caireen-roberts.png'
import AnilaFarooq from '@/assets/about/behind-intake/anila-farooq.png'
import HeidiNg from '@/assets/about/behind-intake/heidi-ng.png'
import TimurOsadchiy from '@/assets/about/behind-intake/timur-osadchiy.png'
import EmmaSimpson from '@/assets/about/behind-intake/emma-simpson.jpeg'
import MaisieRowland from '@/assets/about/behind-intake/maisie-rowland.jpeg'
import SuzannaAbraham from '@/assets/about/behind-intake/suzanna-abraham.jpg'

type Person = {
  title: string
  subText: string
  imageSrc: string
  link: string
}

const technicalNewcastle = ref<Person[]>([
  {
    title: 'Dr Ivan Poliakov',
    subText: 'Lead Developer, Intake24',
    imageSrc: IvanPoliakov,
    link: 'https://openlab.ncl.ac.uk/people/ivan-poliakov/',
  },
])

const technical = ref([
  {
    title: 'Prof Patrick Olivier',
    subText: 'Professor, Human computer interaction',
    imageSrc: PatrickOlivier,
    link: 'https://research.monash.edu/en/persons/patrick-olivier',
  },
  {
    title: 'Dinislam Abdulgalimov',
    subText: 'Software developer, Intake24',
    imageSrc: DinislamAbdulgalimov,
    link: 'https://www.researchgate.net/profile/Dinislam-Abdulgalimov',
  },
  {
    title: 'Joshua Seguin',
    subText: 'Research Fellow, Human computer interaction',
    imageSrc: JoshuaSeguin,
    link: 'https://scholar.google.com.au/citations?user=Y2rzZb8AAAAJ&hl=en&oi=ao',
  },
])

const Nutrition = ref([
  {
    title: 'Dr Emma Foster',
    subText: 'Senior research fellow  and Nutrition lead, Intake24',
    imageSrc: EmmaFoster,
    link: 'https://www.researchgate.net/profile/Emma-Foster-9',
  },
  {
    title: 'Dr Tracy McCaffery',
    subText: 'Senior lecturer, Nutrition, dietetics and food',
    imageSrc: TracyMcCaffery,
    link: 'https://research.monash.edu/en/persons/tracy-mccaffrey',
  },
  {
    title: 'Heidi Ng',
    subText: 'Research fellow, Nutrition, dietetics and food',
    imageSrc: HeidiNg,
    link: 'https://research.monash.edu/en/persons/heidi-ng',
  },
])

const technical0 = ref([
  {
    title: 'Ivan Poliakov',
    subText: 'Lead Developer, Intake24',
    imageSrc: IvanPoliakov,
    link: 'https://openlab.ncl.ac.uk/people/ivan-poliakov/',
  },
  {
    title: 'Prof Patrick Olivier',
    subText: 'Professor, Human computer interaction',
    imageSrc: PatrickOlivier,
    link: 'https://research.monash.edu/en/persons/patrick-olivier',
  },
  {
    title: 'Dr Dan Jackson',
    subText: 'Senior software developer',
    imageSrc: DanJackson,
    link: 'https://openlab.ncl.ac.uk/people/dan-jackson/',
  },
  {
    title: 'Dr Timur Osadchiy',
    subText: 'Software developer',
    imageSrc: TimurOsadchiy,
    link: '',
  },
])

const Nutrition0 = ref([
  {
    title: 'Dr Emma Foster',
    subText: 'Principal Investigator',
    imageSrc: EmmaFoster,
    link: 'https://openlab.ncl.ac.uk/people/dan-jackson/',
  },
  {
    title: 'Prof Ashley Adamson',
    subText: 'Co-investigator',
    imageSrc: AshleyAdamson,
    link: 'https://www.ncl.ac.uk/medical-sciences/people/profile/ashleyadamson.html',
  },
  {
    title: 'Dr Jen Bradley',
    subText: 'Research nutritionist',
    imageSrc: JenBradley,
    link: 'https://www.ncl.ac.uk/medical-sciences/people/profile/jenbradley.html',
  },
  {
    title: 'Dr Emma Simpson',
    subText: 'Research nutritionist',
    imageSrc: EmmaSimpson,
    link: '',
  },
  {
    title: 'Ms Maisie Rowland',
    subText: 'Research nutritionist',
    imageSrc: MaisieRowland,
    link: 'https://www.ncl.ac.uk/medical-sciences/people/profile/maisierowland.html',
  },
])

const technical1 = ref<object[]>([
  {
    title: 'Lukas Hroch',
    subText: 'Software Developer',
    imageSrc: LukasHroch,
    link: 'https://www.mrc-epid.cam.ac.uk/people/lukas-hroch/',
  },
  {
    title: 'Jamie Sun',
    subText: 'Software Developer',
    imageSrc: NoPortrait,
    link: 'https://www.mrc-epid.cam.ac.uk/people/jamie-sun/',
  },
])

const Nutrition1 = ref<object[]>([
  {
    title: 'Polly Page',
    subText: 'Programme director, Measurement and surveys',
    imageSrc: PollyPage,
    link: 'https://www.mrc-epid.cam.ac.uk/people/polly-page/',
  },
  {
    title: 'Dr Toni Steer',
    subText: 'Senior nutritionist, Nutrition measurement platform',
    imageSrc: ToniSteer,
    link: 'https://www.mrc-epid.cam.ac.uk/people/toni-steer/',
  },
  {
    title: 'Dr Birdem Amoutzopoulos',
    subText: 'Diet and nutrient data manager, Nutrition measurement platform',
    imageSrc: BirdemAmoutzopoulos,
    link: 'https://www.mrc-epid.cam.ac.uk/people/birdem-amoutzopoulos/',
  },
  {
    title: 'Jackie Foreman',
    subText: 'Diet and nutrient data manager, Nutrition measurement platform',
    imageSrc: JackieForeman,
    link: 'https://www.mrc-epid.cam.ac.uk/people/jackie-foreman/',
  },
  {
    title: 'Kirsty Trigg',
    subText: 'Research assistant, Nutrition measurement platform',
    imageSrc: KirstyTrigg,
    link: 'https://www.mrc-epid.cam.ac.uk/people/kirsty-trigg/',
  },
  {
    title: 'Suzanna Abraham',
    subText: 'Research assistant, Nutrition measurement platform',
    imageSrc: SuzannaAbraham,
    link: 'https://www.mrc-epid.cam.ac.uk/people/suzanna-abraham/',
  },
  {
    title: 'Angela Mulligan',
    subText: 'Dietary assessment nutritionist, Nutrition measurement platform',
    imageSrc: AngelaMulligan,
    link: 'https://www.mrc-epid.cam.ac.uk/people/angela-mulligan/',
  },
  {
    title: 'Caireen Roberts',
    subText: 'Senior nutritionist, Nutrition measurement platform',
    imageSrc: CaireenRoberts,
    link: 'https://www.mrc-epid.cam.ac.uk/people/caireen-roberts/',
  },
  {
    title: 'Anila Farooq',
    subText: 'Support assistant, Nutrition measurement platform',
    imageSrc: AnilaFarooq,
    link: 'https://www.mrc-epid.cam.ac.uk/people/anila-farooq/',
  },
])
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
