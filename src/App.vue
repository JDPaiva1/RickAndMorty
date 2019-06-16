<template>
  <div id="app">
    <navbar
      navItem1="/character"
      navItem2="/location"
      navItem3="/episode"
      :pathname="pathname"
      @searchData="searchData"/>
    <div class="row justify-content-center">
      <character
        v-for="item of items"
        :item="item"
        :key="item.id"/>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Character from './components/Character.vue';

export default {
  name: 'app',
  components: {
    Navbar,
    Character,
  },
  data() {
    return {
      items: [],
      url: 'https://rickandmortyapi.com/api',
      pathname: window.location.pathname,
    };
  },
  created() {
    this.fetchItems();
  },
  methods: {
    fetchItems() {
      if (this.pathname === '/') {
        this.pathname = '/character/';
      }
      fetch(this.url + this.pathname)
        .then(res => res.json())
        .then((res) => { this.items = res.results; })
        // eslint-disable-next-line
        .catch(err => console.log(err));
    },
    searchData(search) {
      fetch(`${this.url}${this.pathname}/?name=${search}`)
        .then(res => res.json())
        .then((res) => { this.$parent.items = res.results; })
        // eslint-disable-next-line
        .catch(err => console.log(err));
    },
  },
};
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
  background-color: #e6d8b170;
}
</style>
