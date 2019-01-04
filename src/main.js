import Vue from 'vue';
import * as Sentry from '@sentry/browser';
import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';
import moment from 'moment';
import locale from 'element-ui/lib/locale/lang/en';
import store from './store';
import router from './router';
import App from './App.vue';

Vue.config.productionTip = false;

Vue.use(ElementUI, { locale });
Vue.filter('formatDate', (value) => {
  if (value) {
    return moment(String(value)).format('DD/MM/YYYY hh:mm');
  }
  return '';
});

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app');

Sentry.init({
  dsn: 'https://614ad71aedef47de98443ed69d107df4@sentry.io/1364682',
  integrations: [new Sentry.Integrations.Vue({ Vue })],
});
