<template>
  <div class="row justify-content-center">
    <Pagination
      :page="page"
      @fetchItems="fetchItems"
      @updatePage="updatePage"/>
  </div>
</template>

<script>
import Pagination from '@/components/Pagination.vue';

export default {
  name: 'Locations',
  components: { Pagination },
  data() {
    return {
      items: [],
      url: 'https://rickandmortyapi.com/api/location/',
      page: 1,
    };
  },
  created() {
    this.fetchItems();
  },
  methods: {
    fetchItems() {
      fetch(this.url)
        .then(res => res.json())
        .then((res) => { this.items = res.results; })
        // eslint-disable-next-line
        .catch(err => console.log(err));
    },
    updatePage(value) {
      this.page = value;
    },
  },
};
</script>
