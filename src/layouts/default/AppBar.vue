<template>
  <v-app-bar flat>
    <v-app-bar-title>
      <div class="wrapper d-flex justify-space-between align-center py-5 gap-2">
        <!-- Dummy div for mobile view -->
        <div v-if="!mdAndUp"></div>
        <!-- Logo -->
        <figure class="align-self-center">
          <v-img
            src="@/assets/logo.png"
            width="200"
            alt="logo"
            class="logo"
            loading="lazy"
          />
        </figure>
        <!-- Navbar -->
        <nav v-if="mdAndUp">
          <v-list lines="one" class="d-flex flex-row align-center navbar">
            <v-list-item
              v-for="option in navOptions"
              :key="option.id"
              :title="option.name"
              :href="option.link"
            >
            </v-list-item>
            <v-btn
              variant="outlined"
              class="rounded-pill text-primary pb-7 pt-3"
              href="/contact-us"
            >
              Contact Us
            </v-btn>
          </v-list>
        </nav>
        <!-- Hamburger button -->
        <div v-if="!mdAndUp" class="pr-3">
          <figure @click.stop="drawer = !drawer" class="cursor-pointer">
            <svg
              class="cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"
              />
            </svg>
          </figure>
        </div>
      </div>
    </v-app-bar-title>
  </v-app-bar>
  <!-- Navigation drawer -->
  <v-navigation-drawer v-model="drawer" location="right" temporary class="pa-4">
    <div align="right">
      <figure @click.stop="drawer = !drawer" class="cursor-pointer">
        <svg
          class="cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="30"
          height="30"
        >
          <path
            d="M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z"
            fill="currentColor"
          ></path>
        </svg>
      </figure>
    </div>
    <aside>
      <v-list :items="navOptions">
        <v-list-item
          v-for="option in navOptions"
          :key="option.id"
          :title="option.name"
          :href="option.link"
          @click="drawer = !drawer"
        />
      </v-list>
      <v-btn
        variant="outlined"
        class="rounded-pill text-primary mt-3 ml-3 mb-5 pb-2 pt-2"
        href="/contact-us"
        target="_blank"
      >
        Contact Us
      </v-btn>
      <v-divider />
    </aside>
  </v-navigation-drawer>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";
import { useDisplay } from "vuetify/lib/framework.mjs";

const display = useDisplay();
const drawer = ref(false);

const mdAndUp = computed(() => display.mdAndUp.value);

const navOptions = [
  { id: "1", name: "Home", link: "/" },
  { id: "2", name: "About", link: "/about" },
  { id: "3", name: "Science behind", link: "/science-behind" },
  { id: "4", name: "Features", link: "/features" },
  { id: "5", name: "Resources", link: "/resources" },
];
</script>

<style scoped>
nav.v-navigation-drawer.v-navigation-drawer--right.v-navigation-drawer--temporary.v-navigation-drawer--active.v-theme--light.pa-4 {
  top: 0 !important;
  height: 100% !important;
  bottom: 0px;
  width: 256px;
  z-index: 9999 !important;
}
.wrapper {
  max-width: 1300px;
  margin: auto;
}

.logo {
  height: 2em;
}

.navbar {
  gap: 8px;
}
</style>
