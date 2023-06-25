<template>
  <v-app>
    <section class="resource_section">
      <h1 class="">Resources</h1>
      <h2>Open source resources</h2>
      <p class="resource_section_para1">
        The Intake24 web application and API server source code is open source.
        Sharing is under <a href=""><span>Apache license.</span></a> The UK food
        database is available under the terms of the
        <a href=""><span>Open Government Licence.</span></a>
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

    <section class="resource_section1 mb-10">
      <h1 class="text-center-resource">Localisation Toolkit</h1>
      <p class="mb-5">
        Based on our experience adapting Intake24 for different countries and
        populations, we developed a set of protocols, templates and resources to
        guide your localisation of Intake24. You can find these in the Intake24
        online toolkit below.
      </p>
      <v-btn variant="outlined" class="cta-btn rounded-pill mb-5 text-primary">
        Visit Intake24 Toolkit
      </v-btn>
      <p>Toolkit Quick Links:</p>
      <v-row>
        <v-col>
          <ul class="list__no-bullets mt-5">
            <li v-for="toolkit in toolkits.column1" :key="toolkit.id">
              {{ toolkit.icon }}
              <span class="text-decoration-underline">{{ toolkit.title }}</span>
              <ul class="pl-8">
                <li
                  v-for="content in toolkit.content"
                  :key="content.id"
                  class="content-list"
                >
                  <a :href="content.link">{{ content.text }}</a>
                </li>
              </ul>
            </li>
          </ul>
        </v-col>
        <v-col>
          <ul class="list__no-bullets mt-5">
            <li v-for="toolkit in toolkits.column2" :key="toolkit.id">
              {{ toolkit.icon }}
              <span class="text-decoration-underline">{{ toolkit.title }}</span>
              <ul class="pl-8">
                <li
                  v-for="content in toolkit.content"
                  :key="content.id"
                  class="content-list"
                >
                  <a :href="content.link">{{ content.text }}</a>
                </li>
              </ul>
            </li>
          </ul>
        </v-col>
      </v-row>
    </section>

    <footer class="footer">
      <Footer />
    </footer>
  </v-app>
</template>

<script lang="ts" setup>
import Footer from '@/components/Footer.vue'
import ResourceCard from '@/components/Resources/ResourceCard.vue'
import {
  Resource1,
  Resource2,
  Resource3,
  Resource4,
} from '../assets/resources/index'

import { ref } from 'vue'
const toolkits = {
  column1: [
    {
      id: 1,
      icon: '🥝',
      title: 'Translation',
      content: [
        { id: 1, text: 'Translation and Localisation', link: '' },
        { id: 2, text: 'Additional Guidance', link: '' },
      ],
      link: '/toolkits/translation',
    },
    {
      id: 2,
      icon: '🍍',
      title: 'Food list',
      content: [
        { id: 1, text: 'Guidance on creating food list', link: '' },
        { id: 2, text: 'Food lists - quick start guide', link: '' },
        { id: 3, text: 'Link to page', link: '' },
      ],
      link: '/toolkits/food-list',
    },
    {
      id: 3,
      icon: '🍐',
      title: 'Food composition data',
      content: [
        { id: 1, text: 'Food composition data - detailed guidance', link: '' },
        { id: 2, text: 'Food composition data - Quick start guide', link: '' },
        { id: 3, text: 'Link to page', link: '' },
      ],
      link: '/toolkits/food-composition-data',
    },
    {
      id: 4,
      icon: '🥭',
      title: 'Portion size',
      content: [
        { id: 1, text: 'Portion size guidance', link: '' },
        { id: 2, text: 'Link to page', link: '' },
        { id: 3, text: 'Link to page', link: '' },
      ],
      link: '/toolkits/portion-size',
    },
    {
      id: 5,
      icon: '🍒',
      title: 'Dietary feedback',
      content: [
        { id: 1, text: 'Link to page', link: '' },
        { id: 2, text: 'Link to page', link: '' },
        { id: 3, text: 'Link to page', link: '' },
      ],
      link: '/toolkits/dietary-feedback',
    },
  ],
  column2: [
    {
      id: 1,
      icon: '🍅',
      title: 'Editor Tool',
      content: [
        { id: 1, text: 'Link to page', link: '' },
        { id: 2, text: 'Link to page', link: '' },
        { id: 3, text: 'Link to page', link: '' },
      ],
      link: '/toolkits/editor-tool',
    },
    {
      id: 2,
      icon: '🍇',
      title: 'Demo video and FAQs',
      content: [
        { id: 1, text: 'Link to page', link: '' },
        { id: 2, text: 'Link to page', link: '' },
        { id: 3, text: 'Link to page', link: '' },
      ],
      link: '/toolkits/demo-video-and-faqs',
    },
    {
      id: 3,
      icon: '🍉',
      title: 'System testing',
      content: [
        { id: 1, text: 'Link to page', link: '' },
        { id: 2, text: 'Link to page', link: '' },
        { id: 3, text: 'Link to page', link: '' },
      ],
      link: '/toolkits/system-testing',
    },
    { id: 4, icon: '🍋', title: 'Validation', link: '/toolkits/validation' },
    {
      id: 5,
      icon: '🍊',
      title: 'Installation',
      link: '/toolkits/installation',
    },
    {
      id: 6,
      icon: '🍏',
      title: 'Useful resources',
      content: [
        { id: 1, text: 'Link to page', link: '' },
        { id: 2, text: 'Link to page', link: '' },
        { id: 3, text: 'Link to page', link: '' },
      ],
      link: '/toolkits/useful-resources',
    },
  ],
}

const myArray = ref([
  {
    title: 'GitHub repository',
    subText:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula.',
    imageSrc: Resource1,
    buttonVal: 'View',
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
    subText:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula.',
    imageSrc: Resource1,
    buttonVal: 'Read more',
  },
  {
    title: 'Downloading data',
    subText:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula.',
    imageSrc: Resource2,
    buttonVal: 'Read more',
    link: '/how-to-guides/downloading-data',
  },
  {
    title: 'Dealing with missing foods',
    subText:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula.',
    imageSrc: Resource3,
    buttonVal: 'Read more',
    link: '/how-to-guides/missing-foods',
  },
  {
    title: 'Summarising data using pivot',
    subText:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula.',
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
.list__no-bullets {
  list-style: none;
  padding-bottom: 10px;
}

.content-list {
  list-style-type: disc;
  margin-bottom: 10px;
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
