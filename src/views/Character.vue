<template>
  <div class="row justify-content-center">
    <Character
      v-for="item of items"
      :item="item"
      :key="item.id"/>
  </div>
</template>

<script>
import Character from '@/components/Character.vue';

export default {
  name: 'character',
  components: { Character },
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
  },
};
</script>
