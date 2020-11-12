import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueAnalytics from 'vue-analytics'
import ConfigPlugin from "./plugins/config-plugin"

Vue.config.productionTip = false;

Vue.use(VueAnalytics, {id: 'UA-82654714-2'});
Vue.use(ConfigPlugin);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');