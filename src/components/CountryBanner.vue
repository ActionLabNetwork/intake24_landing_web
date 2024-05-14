<template>
  <v-app-bar v-if="isBannerVisible" app dense color="#fcdbcc">
    <div style="margin-left: 10px;">{{ localeText }}</div>
    <v-spacer></v-spacer>
    <v-btn icon @click="closeBanner">
      x
    </v-btn>
  </v-app-bar>
</template>

<script>
import { useBannerStore } from '@/store/countryBanner';
import { ref, onMounted, computed } from 'vue';

export default {
  setup() {
    const bannerStore = useBannerStore();
    const localeText = ref('The region of this intake24 instance is ');

    const localeMap = {
      'en_AU': '🇦🇺 Australia',
      'en-US': '🇺🇸 United States',
      'en-GB': '🇬🇧 United Kingdom',
      'fr-FR': '🇫🇷 France',
      'de-DE': '🇩🇪 Germany',
      'ml-MY': '🇲🇾 Malaysia',
      'id-ID': '🇮🇩 Indonesia',
      // Add more locales as needed
    };

    onMounted(() => {
      bannerStore.checkBannerVisibility();
      const locale = import.meta.env.VITE_LOCALE || 'en-AU';
      localeText.value += localeMap[locale] || '🌐 Global';
    });

    const closeBanner = () => {
      console.log('close banner');
      bannerStore.hideBanner();
    };

    const isBannerVisible = computed(() => bannerStore.isBannerVisible);

    return {
      localeText,
      isBannerVisible,
      closeBanner,
    };
  },
};
</script>

<style scoped>
.v-app-bar {
  top: 0;
  left: 0;
  right: 0;
  position: fixed;
}
</style>