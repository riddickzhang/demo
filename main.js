import Vue from "vue";
import App from "./App.vue";
import frontendLibrary from "frontend-library";
Vue.config.productionTip = false;
Vue.use(frontendLibrary);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
