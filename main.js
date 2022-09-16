import Vue from 'vue'
import App from './App.vue'
import { router } from "./router.js";

Vue.use(VueResource);

new Vue({
  el: '#app',
  render: h => h(App),
  router
});