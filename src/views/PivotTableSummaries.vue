<template>
  <v-app>
    <section class="pa-0">
      <PivotTableSummaries />
    </section>
    <footer class="footer">
      <Footer />
    </footer>
  </v-app>
</template>

<script lang="ts" setup>
import Footer from '@/components/Footer.vue'
import PivotTableSummaries from '@/components/HowToGuides/PivotTableSummaries.vue'
</script>
