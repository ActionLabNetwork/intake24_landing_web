import { defineStore } from 'pinia';

export const useBannerStore = defineStore('banner', {
  state: () => ({
    isBannerVisible: true,
  }),
  actions: {
    hideBanner() {
      this.isBannerVisible = false;
      localStorage.setItem('isBannerVisible', 'false');
    },
    checkBannerVisibility() {
      const bannerVisible = localStorage.getItem('isBannerVisible');
      if (bannerVisible === 'false') {
        this.isBannerVisible = false;
      }
    },
  },
});
