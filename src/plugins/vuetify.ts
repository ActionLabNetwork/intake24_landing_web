/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import "vuetify/styles";

// Composables
import { createVuetify } from "vuetify";

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  defaults: {
    VBtn: {
      style: "text-transform: none;",
    },
  },
  theme: {
    themes: {
      light: {
        colors: {
          primary: "#EE672D",
          secondary: "#020202",
          accent: "#F8F8F8",
        },
      },
    },
  },
});
