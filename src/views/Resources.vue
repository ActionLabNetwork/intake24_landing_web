<template>
  <v-app>
    <section class="resource_section">
      <h1 class="">Resources</h1>
      <h2>Open source resources</h2>
      <p class="resource_section_para1">
        The Intake24 web application and API server source code is open source.
        Sharing is under
        <a :href="apacheLicense" target="_blank">
          <span>Apache license.</span></a
        >
        The UK food database is available under the terms of the
        <a :href="openGovLicense" target="_blank">
          <span>Open Government Licence.</span></a
        >
      </p>
      <p class="resource_section_para2">
        Contact us for more information: <span>support@intake24.com.</span>
      </p>
      <div class="d-flex flex-column flex-md-row p-2">
        <ResourceCard :arrayItem="arrayItemAt(0)" />
        <ResourceCard :arrayItem="arrayItemAt(1)" />
      </div>
    </section>

    <section class="resource_section1">
      <h1 class="text-center-resource">How tos (for researchers)</h1>
      <div class="d-flex flex-column flex-md-row p-2">
        <ResourceCard :arrayItem="arrayItemAt(2)" />
        <ResourceCard :arrayItem="arrayItemAt(3)" />
      </div>
    </section>

    <section class="resource_section2">
      <div class="d-flex flex-column flex-md-row p-2">
        <ResourceCard :arrayItem="arrayItemAt(4)" />
        <ResourceCard :arrayItem="arrayItemAt(5)" />
      </div>
    </section>

    <section class="resource_section2">
      <div class="d-flex flex-column flex-md-row p-2">
        <ResourceCard :arrayItem="arrayItemAt(6)" />
      </div>
    </section>

    <section class="resource_section1 mb-10">
      <h1 class="text-center-resource">Localisation Toolkit</h1>
      <p class="mb-5">
        Based on our experience adapting Intake24 for different countries and
        populations, we developed a set of protocols, templates and resources to
        guide your localisation of Intake24. You can find these in the Intake24
        online toolkit below.
      </p>
      <v-btn variant="outlined" class="cta-btn rounded-pill mb-5 text-primary">
        <a
          :href="toolkitLink"
          class="text-decoration-none text-primary"
          target="_blank"
          >Visit Intake24 Toolkit</a
        >
      </v-btn>
      <p>Toolkit Quick Links</p>
      <v-row>
        <v-col>
          <ul>
            <li
              v-for="toolkit in toolkits.column1"
              :key="toolkit.id"
              class="list__no-bullets mt-5"
            >
              {{ toolkit.icon }}
              <span>
                <a :href="toolkit.link" target="_blank">{{ toolkit.title }}</a>
              </span>
              <ul class="pl-8">
                <li
                  v-for="content in toolkit.content"
                  :key="content.id"
                  class="content-list"
                >
                  <a :href="content.link" target="_blank">{{ content.text }}</a>
                </li>
              </ul>
            </li>
          </ul>
        </v-col>
        <v-col>
          <ul>
            <li
              v-for="toolkit in toolkits.column2"
              :key="toolkit.id"
              class="list__no-bullets mt-5"
            >
              {{ toolkit.icon }}
              <span>
                <a :href="toolkit.link" target="_blank">{{ toolkit.title }}</a>
              </span>
            </li>
          </ul>
        </v-col>
      </v-row>
    </section>

    <footer class="footer mt-10">
      <Footer />
    </footer>
  </v-app>
</template>

<script lang="ts" setup>
import Footer from '@/components/Footer.vue'
import ResourceCard from '@/components/Resources/ResourceCard.vue'
import {
  Resource0,
  Resource1,
  Resource2,
  Resource3,
  Resource4,
  GithubRepo,
} from '../assets/resources/index'

import { ref } from 'vue'
const env = import.meta.env

const apacheLicense = env.VITE_APACHE_LICENSE
const openGovLicense = env.VITE_OPEN_GOV_LICENSE

const toolkitLink = ref(env.VITE_TOOLKIT_LINK)
const toolkits = {
  column1: [
    {
      id: 1,
      icon: '🥝',
      title: 'Translation',
      content: [
        {
          id: 1,
          text: 'Translation and Localisation',
          link: env.VITE_TOOLKIT_TRANSLATION_AND_LOCALISATION,
        },
        {
          id: 2,
          text: 'Additional Guidance',
          link: env.VITE_TOOLKIT_TRANSLATION_ADDITIONAL_GUIDANCE,
        },
      ],
      link: env.VITE_TOOLKIT_TRANSLATION,
    },
    {
      id: 2,
      icon: '🍍',
      title: 'Food list',
      content: [
        {
          id: 1,
          text: 'Guidance on creating food list',
          link: env.VITE_TOOLKIT_FOOD_LIST_DETAILED_GUIDANCE,
        },
        {
          id: 2,
          text: 'Food lists - quick start guide',
          link: env.VITE_TOOLKIT_FOOD_LIST_QUICK_START_GUIDE,
        },
      ],
      link: env.VITE_TOOLKIT_FOOD_LIST,
    },
    {
      id: 3,
      icon: '🍐',
      title: 'Food composition data',
      content: [
        {
          id: 1,
          text: 'Food composition data - detailed guidance',
          link: env.VITE_TOOLKIT_FOOD_COMPOSITION_DATA_DETAILED_GUIDANCE,
        },
      ],
      link: env.VITE_TOOLKIT_FOOD_COMPOSITION_DATA,
    },
    {
      id: 4,
      icon: '🥭',
      title: 'Portion size',
      content: [
        {
          id: 1,
          text: 'Portion size guidance',
          link: env.VITE_TOOLKIT_PORTION_SIZE_GUIDANCE,
        },
      ],
      link: env.VITE_TOOLKIT_PORTION_SIZE,
    },
    {
      id: 5,
      icon: '🍒',
      title: 'Dietary feedback',
      content: [],
      link: env.VITE_TOOLKIT_DIETARY_FEEDBACK,
    },
  ],
  column2: [
    {
      id: 1,
      icon: '🍅',
      title: 'Editor Tool',
      content: [],
      link: env.VITE_TOOLKIT_EDITOR_TOOL,
    },
    {
      id: 2,
      icon: '🍇',
      title: 'Demo video and FAQs',
      content: [],
      link: env.VITE_TOOLKIT_DEMO_VIDEO_AND_FAQS,
    },
    {
      id: 3,
      icon: '🍉',
      title: 'System testing',
      content: [],
      link: env.VITE_TOOLKIT_SYSTEM_TESTING,
    },
    {
      id: 4,
      icon: '🍋',
      title: 'Validation',
      link: env.VITE_TOOLKIT_VALIDATION,
    },
    {
      id: 5,
      icon: '🍊',
      title: 'Installation',
      content: [],
      link: env.VITE_TOOLKIT_INSTALLATION,
    },
    {
      id: 6,
      icon: '🍏',
      title: 'Useful resources',
      content: [],
      link: env.VITE_TOOLKIT_USEFUL_RESOURCES,
    },
  ],
}

const myArray = ref([
  {
    title: 'GitHub repository',
    subText:
      'Link to Intake24 open-source GitHub repository, containing API server, deployments, feedback, etc.',
    imageSrc: GithubRepo,
    buttonVal: 'View',
    link: 'https://github.com/intake24',
  },
  {
    title: 'Portion Size Image Collection',
    subText:
      'Library of portion size images used in Intake24. Downloadable and free to use.',
    imageSrc: Resource2,
    buttonVal: 'View',
    link: 'https://drive.google.com/drive/folders/1LHVp4YnwCl0HKJyI5rikEztN2V4BnQCT',
  },
  {
    title: 'Emailing participants',
    subText: 'Templates that can be used to email research participants.',
    imageSrc: Resource0,
    buttonVal: 'Read more',
  },
  {
    title: 'Downloading data',
    subText: 'Exporting your survey data in CSV format.',
    imageSrc: Resource1,
    buttonVal: 'Read more',
    link: '/how-to-guides/downloading-data',
  },
  {
    title: 'Dealing with missing foods',
    subText:
      'Dealing with recalls containing foods reported as missing from the system.',
    imageSrc: Resource2,
    buttonVal: 'Read more',
    link: '/how-to-guides/missing-foods',
  },
  {
    title: 'VLookup Template',
    subText: 'Example VLookup table',
    imageSrc: Resource3,
    buttonVal: 'View template',
    link: 'https://docs.google.com/spreadsheets/d/1gTtwXI2GQjc_SdEfIOTwBODnJZF5w8_i/edit#gid=1943954977',
  },
  {
    title: 'Summarising data using pivot',
    subText:
      'Pivot tables can be used within Excel to calculate averages per person or per day.',
    imageSrc: Resource4,
    buttonVal: 'Read more',
    link: '/how-to-guides/pivot-table-summaries',
  },
  {
    title: 'Card Title 1',
    subText:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula.',
    imageSrc: Resource1,
    buttonVal: 'Read more',
  },
  {
    title: 'Card Title 2',
    subText:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula.',
    imageSrc: Resource2,
    buttonVal: 'Read more',
  },
  {
    title: 'Card Title 3',
    subText:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula.',
    imageSrc: Resource3,
    buttonVal: 'Read more',
  },
  {
    title: 'Card Title 4',
    subText:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula.',
    imageSrc: Resource4,
    buttonVal: 'Read more',
  },
])

const arrayItemAt = (n: number) => myArray.value.at(n)
</script>

<style scoped>
a,
a:visited,
a:hover,
a:active {
  color: inherit;
}

.list__no-bullets {
  list-style: none;
  margin-top: 0.5rem;
}

.content-list {
  list-style-type: disc;
  margin-bottom: 0.5rem;
}

.resource-pad {
  padding-bottom: 200px;
}

.resource_section {
  padding-left: 20px;
  padding-right: 20px;
}

.resource_section div {
  gap: 20px;
}

.text-center-resource {
  text-align: center;
}

.resource_section h1 {
  font-size: 30px;
  font-weight: 700;
  padding-bottom: 70px;
  padding-top: 50px;
  text-align: center;
}

.resource_section h2 {
  font-size: 20px;
  padding-bottom: 20px;
  font-weight: 500;
  color: #060606;
}

.resource_section_para1 {
  font-size: 16px;
  color: #060606;
  padding-bottom: 30px;
}

.resource_section_para1 span {
  color: #0088ea;
  text-decoration: none;
}

.resource_section_para1 a {
  color: #0088ea;
  text-decoration: none;
}

.resource_section_para2 {
  font-size: 16px;
  color: #060606;
  padding-bottom: 32px;
}

.resource_section_para2 span {
  font-weight: 500;
}

.resource_section1 {
  padding-top: 80px;
  padding-left: 20px;
  padding-right: 20px;
}

.resource_section1 div {
  gap: 80px;
}

.resource_section1 h1 {
  font-size: 20px;
  padding-bottom: 40px;
}

.resource_section2 div {
  gap: 80px;
}

.resource_section2 {
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 70px;
}

@media (min-width: 960px) {
  .resource_section h1 {
    font-size: 38px;
    font-weight: 700;
    padding-bottom: 100px;
    padding-top: 60px;
    text-align: center;
  }

  .resource_section h2 {
    font-size: 24px;
    padding-bottom: 25px;
    font-weight: 600;
    color: #060606;
  }

  .resource_section_para1 {
    font-size: 18px;
    color: #060606;
    padding-bottom: 30px;
  }

  .resource_section {
    padding-left: 20px;
    padding-right: 20px;
  }

  .resource_section_para2 {
    font-size: 18px;
    color: #060606;
    padding-bottom: 32px;
  }

  .resource_section div {
    gap: 40px;
  }

  .resource_section1 h1 {
    font-size: 24px;
    padding-bottom: 40px;
  }

  .resource_section1 {
    padding-top: 150px;
    padding-left: 20px;
    padding-right: 20px;
  }

  .resource_section2 {
    max-width: 880px;
    margin: auto;
    padding-top: 70px;
  }

  .text-center-resource {
    text-align: left;
  }
}

@media (min-width: 1280px) {
  .resource_section h1 {
    font-size: 45px;
    font-weight: 700;
    padding-bottom: 144px;
    padding-top: 88px;
    text-align: center;
  }

  .resource_section h2 {
    font-size: 30px;
    padding-bottom: 30px;
    font-weight: 600;
    color: #060606;
  }

  .resource_section_para1 {
    font-size: 20px;
    color: #060606;
    padding-bottom: 30px;
  }

  .resource_section {
    max-width: 920px;
    margin: auto;
    padding-left: 20px;
    padding-right: 20px;
  }

  .resource_section_para2 {
    font-size: 20px;
    color: #060606;
    padding-bottom: 32px;
  }

  .resource_section div {
    gap: 80px;
  }

  .resource_section1 h1 {
    font-size: 30px;
    padding-bottom: 40px;
  }

  .resource_section1 {
    max-width: 880px;
    margin: auto;
    padding-top: 197px;
  }

  .resource_section2 {
    max-width: 880px;
    margin: auto;
    padding-top: 70px;
  }

  .text-center-resource {
    text-align: left;
  }
}
</style>
