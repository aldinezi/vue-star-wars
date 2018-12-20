import Vue from 'vue';
import Router from 'vue-router';
import Starbase from '@/components/Starbase';
import SW from '@/components/SW';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SW',
      component: SW,
    },
    {
      path: '/starbase/:type',
      name: 'Starbase',
      component: Starbase,
    },
  ],
});
