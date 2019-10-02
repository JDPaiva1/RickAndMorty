import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Characters from './views/Characters.vue';
import Character from './components/Character.vue';
import Locations from './views/Locations.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/characters',
      name: 'characters',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Characters,
    },
    {
      path: '/character/:id',
      name: 'character',
      component: Character,
    },
    {
      path: '/locations',
      name: 'locations',
      component: Locations,
    },
  ],
});
