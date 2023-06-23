// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
      },
      {
        path: '/about',
        name: 'About',
        component: () => import('@/views/About.vue'),
      },
      {
        path: '/about/behind-intake',
        name: 'BehindIntake',
        component: () => import('@/views/BehindIntake.vue'),
      },
      {
        path: '/resources',
        name: 'Resources',
        component: () => import('@/views/Resources.vue'),
      },
      {
        path: '/contact-us',
        name: 'ContactUs',
        component: () => import('@/views/ContactUs.vue'),
      },
      {
        path: '/science-behind',
        name: 'ScienceBehind',
        component: () => import('@/views/ScienceBehind.vue'),
      },
      {
        path: '/emailing-research',
        name: 'EmailingResearch',
        component: () => import('@/views/EmailingResearch.vue'),
      },
      {
        path: '/how-to-guides/downloading-data',
        name: 'Downloading Data',
        component: () => import('@/views/DownloadingData.vue'),
      },
      {
        path: '/how-to-guides/missing-foods',
        name: 'Dealing with Missing Foods',
        component: () => import('@/views/MissingFoods.vue'),
      },
      {
        path: '/how-to-guides/pivot-table-summaries',
        name: 'Summarising data using pivot tables',
        component: () => import('@/views/PivotTableSummaries.vue'),
      },
      {
        path: '/features',
        name: 'Features',
        component: () => import('@/views/Features.vue'),
      },
      {
        path: '/science-behind/publications',
        name: 'Publications',
        component: () => import('@/views/Publications.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
