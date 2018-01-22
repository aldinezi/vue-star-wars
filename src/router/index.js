import Vue from 'vue';
import Router from 'vue-router';
import Notes from '@/components/Notes';
import AddNote from '@/components/AddNote';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Notes',
      component: Notes,
    },
    {
      path: '/add',
      name: 'Add Note',
      component: AddNote,
    },
  ],
});
