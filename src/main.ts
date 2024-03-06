/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from "./App.vue";

import Notifications from '@kyvg/vue3-notification';

// Composables
import { createApp } from "vue";

// Plugins
import { registerPlugins } from "@/plugins";

// Style Settings
import "@/styles/settings.scss";

const app = createApp(App);
app.use(Notifications);

registerPlugins(app);

app.mount("#app");


