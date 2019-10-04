import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/Home.vue';
import Characters from './components/Characters.vue';
import Character from './components/Character.vue';
import Locations from './components/Locations.vue';
import Location from './components/Location.vue';
import Error404 from './components/Error404.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/RickAndMorty',
      name: 'home',
      component: Home,
    },
    {
      path: '/characters',
      name: 'characters',
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
    {
      path: '/location/:id',
      name: 'location',
      component: Location,
    },
    {
      path: '*',
      component: Error404,
    },
  ],
});
