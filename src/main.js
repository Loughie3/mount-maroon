import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.css";
import router from "./router/index.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import VueGoogleMaps from "@fawmi/vue-google-maps";

createApp(App)
  .use(router)
  .use(VueGoogleMaps, {
    load: {
      key: "AIzaSyA4Rrq6HNd0PYFislAI_H9jmEobGenWHYA",
    },
  })

  .mount("#app");

import "bootstrap/dist/js/bootstrap.js";
