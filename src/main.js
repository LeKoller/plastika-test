import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import DisableAutocomplete from "vue-disable-autocomplete";

createApp(App)
  .use(router)
  .use(store)
  .use(DisableAutocomplete)
  .mount("#app");
