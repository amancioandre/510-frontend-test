import Vue from "vue";
import vuetify from "./plugins/vuetify";

import App from "./App.vue";
import router from "./routes";
import Filters from "./plugins/filters";

Vue.config.productionTip = false;

Vue.use(Filters);

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
